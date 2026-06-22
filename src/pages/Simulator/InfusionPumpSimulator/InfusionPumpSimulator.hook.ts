import { useMemo, useState, useCallback, useEffect, useRef } from 'react';
import {
    BASE_ALARMS,
    DEFAULT_SAFETY_CHECKLIST,
    INFUSION_DRUG_LIBRARY,
    PUMP_PROFILES,
    PREHOSPITAL_CASES,
    calculateDoseMcgKgMinFromRate,
    calculateRateMlHrFromDose,
    concentrationMcgMl,
    isDoseValidationApplicable,
    isWithinPercentage,
    validateDoseWithinAhaRange,
} from './InfusionPumpSimulator.constants';
import type {
    AlarmState,
    ChartDataPoint,
    DrugLibraryEntry,
    EvaluationState,
    InfusionMode,
    PumpProfile,
    PumpStatus,
    SafetyChecklistItem,
    SimulationMode,
    SimulatorEvent,
    TrainingScore,
} from './InfusionPumpSimulator.types';

function withUpdatedAlarm(alarms: AlarmState[], alarmId: string, active: boolean): AlarmState[] {
    return alarms.map((alarm) => {
        if (alarm.id !== alarmId) return alarm;
        return { ...alarm, active };
    });
}

function hasCriticalAlarm(alarms: AlarmState[]): boolean {
    return alarms.some((alarm) => alarm.active && alarm.severity === 'critical');
}

const EMPTY_EVALUATION: EvaluationState = {
    active: false,
    completed: false,
    startedAt: null,
    finishedAt: null,
    score: 100,
    criticalErrors: 0,
    events: [],
};

export default function useInfusionPumpSimulator() {
    const [pumpProfileId, setPumpProfileId] = useState<PumpProfile['id']>('alaris-gw');
    const [mode, setMode] = useState<InfusionMode>('weight-based');
    const [powerOn, setPowerOn] = useState(true);
    const [batteryPercent, setBatteryPercent] = useState(94);

    const [selectedDrugId, setSelectedDrugId] = useState<DrugLibraryEntry['id'] | null>('norepinephrine');
    const [weightKg, setWeightKg] = useState(75);
    const [targetDoseMcgKgMin, setTargetDoseMcgKgMin] = useState(0.1);
    const [manualRateMlHr, setManualRateMlHr] = useState(12);
    const [vtbiMl, setVtbiMl] = useState(120);

    const [status, setStatus] = useState<PumpStatus>('stopped');
    const [infusedMl, setInfusedMl] = useState(0);
    const [alarms, setAlarms] = useState<AlarmState[]>(BASE_ALARMS);
    const [events, setEvents] = useState<SimulatorEvent[]>([]);
    const [activeCaseId, setActiveCaseId] = useState<string | null>(null);
    const [safetyChecklist, setSafetyChecklist] = useState<SafetyChecklistItem[]>(DEFAULT_SAFETY_CHECKLIST);
    const [trainingScore, setTrainingScore] = useState<TrainingScore>({ value: 100, penalties: 0, rewards: 0 });
    const [programLocked, setProgramLocked] = useState(false);

    const [simulationMode, setSimulationModeState] = useState<SimulationMode>('practice');
    const [titrationOpen, setTitrationOpen] = useState(false);
    const [titrationDelta, setTitrationDelta] = useState(0);
    const [isTransitioningRate, setIsTransitioningRate] = useState(false);
    const [chartData, setChartData] = useState<ChartDataPoint[]>([]);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [evaluation, setEvaluation] = useState<EvaluationState>(EMPTY_EVALUATION);
    const [evaluationNow, setEvaluationNow] = useState(0);

    const chartTickRef = useRef(0);
    const transitionTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const unlockProgram = useCallback(() => {
        setProgramLocked(false);
    }, []);

    const setPumpProfile = useCallback((value: PumpProfile['id']) => {
        setPumpProfileId(value);
        unlockProgram();
    }, [unlockProgram]);

    const setInfusionMode = useCallback((value: InfusionMode) => {
        setMode(value);
        unlockProgram();
    }, [unlockProgram]);

    const setDrugId = useCallback((value: DrugLibraryEntry['id'] | null) => {
        setSelectedDrugId(value);
        unlockProgram();
    }, [unlockProgram]);

    const setPatientWeight = useCallback((value: number) => {
        setWeightKg(value);
        unlockProgram();
    }, [unlockProgram]);

    const setDoseTarget = useCallback((value: number) => {
        setTargetDoseMcgKgMin(value);
        unlockProgram();
    }, [unlockProgram]);

    const setManualRate = useCallback((value: number) => {
        setManualRateMlHr(value);
        unlockProgram();
    }, [unlockProgram]);

    const setVtbi = useCallback((value: number) => {
        setVtbiMl(value);
        unlockProgram();
    }, [unlockProgram]);

    const setSimulationMode = useCallback((value: SimulationMode) => {
        if (status === 'running' || status === 'paused') return;
        setSimulationModeState(value);
    }, [status]);

    const selectedDrug = useMemo(
        () => INFUSION_DRUG_LIBRARY.find((item) => item.id === selectedDrugId) ?? null,
        [selectedDrugId],
    );

    const selectedProfile = useMemo(
        () => PUMP_PROFILES.find((item) => item.id === pumpProfileId) ?? PUMP_PROFILES[0],
        [pumpProfileId],
    );

    const activeCase = useMemo(
        () => PREHOSPITAL_CASES.find((item) => item.id === activeCaseId) ?? null,
        [activeCaseId],
    );

    const concentration = useMemo(() => {
        if (!selectedDrug) return 0;
        return concentrationMcgMl(selectedDrug);
    }, [selectedDrug]);

    const computedRateMlHr = useMemo(() => {
        if (mode !== 'weight-based' || !selectedDrug) return manualRateMlHr;
        return calculateRateMlHrFromDose(targetDoseMcgKgMin, weightKg, concentration);
    }, [mode, selectedDrug, targetDoseMcgKgMin, weightKg, concentration, manualRateMlHr]);

    const activeRateMlHr = useMemo(
        () => (mode === 'weight-based' ? computedRateMlHr : manualRateMlHr),
        [mode, computedRateMlHr, manualRateMlHr],
    );

    const activeDoseMcgKgMin = useMemo(() => {
        if (!selectedDrug) return 0;
        if (mode === 'weight-based') return targetDoseMcgKgMin;
        return calculateDoseMcgKgMinFromRate(manualRateMlHr, weightKg, concentration);
    }, [selectedDrug, mode, targetDoseMcgKgMin, manualRateMlHr, weightKg, concentration]);

    const doseOutOfRange = useMemo(
        () => {
            if (!selectedDrug) return false;
            if (!isDoseValidationApplicable(selectedDrug)) return false;
            return !validateDoseWithinAhaRange(selectedDrug, activeDoseMcgKgMin);
        },
        [selectedDrug, activeDoseMcgKgMin],
    );

    const checklistReady = useMemo(
        () => safetyChecklist.every((item) => item.checked),
        [safetyChecklist],
    );

    const remainingMl = Math.max(0, vtbiMl - infusedMl);

    const timeRemainingMin = activeRateMlHr > 0
        ? (remainingMl / activeRateMlHr) * 60
        : 0;

    const appendEvent = useCallback((message: string) => {
        setEvents((prev) => [{ id: `${Date.now()}-${prev.length + 1}`, timestamp: Date.now(), message }, ...prev].slice(0, 40));
    }, []);

    const registerEvaluationAction = useCallback((
        action: string, detail: string, points: number, critical: boolean = false,
    ) => {
        setEvaluation((prev) => {
            if (!prev.active || prev.completed) return prev;
            return {
                ...prev,
                score: Math.max(0, Math.min(100, prev.score + points)),
                criticalErrors: prev.criticalErrors + (critical ? 1 : 0),
                events: [...prev.events, {
                    id: `${Date.now()}-${prev.events.length + 1}`,
                    timestamp: Date.now(),
                    action,
                    detail,
                    points,
                    critical,
                }],
            };
        });
    }, []);

    const updateTrainingScore = useCallback((delta: number, message: string) => {
        setTrainingScore((prev) => ({
            value: Math.max(0, Math.min(100, prev.value + delta)),
            penalties: prev.penalties + (delta < 0 ? Math.abs(delta) : 0),
            rewards: prev.rewards + (delta > 0 ? delta : 0),
        }));
        appendEvent(message);
        registerEvaluationAction(
            delta >= 0 ? 'RECOMPENSA' : 'PENALIZACION',
            message,
            delta,
            delta <= -8,
        );
    }, [appendEvent, registerEvaluationAction]);

    const setAlarmActive = useCallback((alarmId: string, active: boolean) => {
        setAlarms((prev) => withUpdatedAlarm(prev, alarmId, active));
    }, []);

    const resetTransientAlarms = useCallback(() => {
        setAlarms((prev) => prev.map((alarm) => {
            if (alarm.id === 'program-error' || alarm.id === 'dose-range' || alarm.id === 'near-end' || alarm.id === 'infusion-complete') {
                return { ...alarm, active: false };
            }
            return alarm;
        }));
    }, []);

    const validateProgramming = useCallback((skipChecklist: boolean = false): string[] => {
        const errors: string[] = [];
        if (!powerOn) errors.push('Enciende la bomba antes de iniciar.');
        if (!skipChecklist && !checklistReady) errors.push('Checklist de seguridad incompleto.');
        if (!selectedDrug) errors.push('Selecciona un farmaco de la libreria.');
        if (weightKg < 20 || weightKg > 250) errors.push('Peso fuera de rango operativo (20-250 kg).');
        if (vtbiMl <= 0 || vtbiMl > selectedProfile.maxVtbiMl) errors.push(`VTBI debe estar entre 1 y ${selectedProfile.maxVtbiMl} mL.`);
        if (activeRateMlHr < selectedProfile.minRateMlHr || activeRateMlHr > selectedProfile.maxRateMlHr) {
            errors.push(`Flujo fuera de limites de la bomba (${selectedProfile.minRateMlHr}-${selectedProfile.maxRateMlHr} mL/h).`);
        }
        if (selectedDrug && doseOutOfRange) {
            errors.push('La dosis calculada no coincide con rango ACLS/AHA para este farmaco.');
        }
        return errors;
    }, [activeRateMlHr, checklistReady, doseOutOfRange, powerOn, selectedDrug, selectedProfile.maxRateMlHr, selectedProfile.maxVtbiMl, selectedProfile.minRateMlHr, vtbiMl, weightKg]);

    const confirmProgramming = useCallback(() => {
        resetTransientAlarms();
        const validation = validateProgramming(true);
        if (validation.length > 0) {
            setAlarmActive('program-error', true);
            updateTrainingScore(-4, `Programacion invalida: ${validation[0]}`);
            return;
        }
        setProgramLocked(true);
        appendEvent('Programacion confirmada. Bomba lista para iniciar.');
    }, [appendEvent, resetTransientAlarms, setAlarmActive, updateTrainingScore, validateProgramming]);

    const startInfusion = useCallback(() => {
        resetTransientAlarms();
        if (!programLocked) {
            setAlarmActive('program-error', true);
            updateTrainingScore(-4, 'Debes confirmar programacion antes de iniciar.');
            return;
        }
        const validation = validateProgramming();
        if (validation.length > 0) {
            setAlarmActive('program-error', true);
            setAlarmActive('dose-range', doseOutOfRange);
            updateTrainingScore(-6, `Inicio bloqueado: ${validation[0]}`);
            return;
        }

        if (hasCriticalAlarm(alarms)) {
            updateTrainingScore(-8, 'Inicio bloqueado por alarma critica activa.');
            return;
        }

        setStatus('running');
        appendEvent(`Infusion iniciada a ${activeRateMlHr.toFixed(2)} mL/h.`);

        if (activeCase) {
            if (selectedDrug?.id === activeCase.drugId) {
                updateTrainingScore(5, 'Farmaco correcto para el caso activo.');
            } else {
                updateTrainingScore(-10, 'Farmaco no coincide con el objetivo del caso.');
            }

            const targetMatch = isWithinPercentage(activeDoseMcgKgMin, activeCase.suggestedDoseMcgKgMin, 20);
            if (activeCase.suggestedDoseMcgKgMin > 0) {
                updateTrainingScore(
                    targetMatch ? 6 : -6,
                    targetMatch
                        ? 'Dosis dentro de tolerancia del caso (+/-20%).'
                        : 'Dosis fuera de tolerancia del caso (+/-20%).',
                );
            }
        }
    }, [activeDoseMcgKgMin, activeRateMlHr, activeCase, alarms, appendEvent, doseOutOfRange, programLocked, resetTransientAlarms, selectedDrug?.id, setAlarmActive, updateTrainingScore, validateProgramming]);

    const pauseInfusion = useCallback(() => {
        if (status !== 'running') return;
        setStatus('paused');
        appendEvent('Infusion pausada por operador.');
    }, [status, appendEvent]);

    const resumeInfusion = useCallback(() => {
        if (status !== 'paused' || hasCriticalAlarm(alarms)) return;
        setStatus('running');
        appendEvent('Infusion reanudada.');
    }, [status, alarms, appendEvent]);

    const stopInfusion = useCallback(() => {
        setStatus('stopped');
        setInfusedMl(0);
        setChartData([]);
        setElapsedSeconds(0);
        chartTickRef.current = 0;
        resetTransientAlarms();
        appendEvent('Infusion detenida y volumen reiniciado.');
    }, [appendEvent, resetTransientAlarms]);

    const applyCase = useCallback((caseId: string) => {
        const picked = PREHOSPITAL_CASES.find((item) => item.id === caseId);
        if (!picked) return;
        setSelectedDrugId(picked.drugId);
        setWeightKg(picked.suggestedWeightKg);
        setTargetDoseMcgKgMin(picked.suggestedDoseMcgKgMin);
        setVtbiMl(picked.suggestedVtbiMl);
        setInfusedMl(0);
        setStatus('stopped');
        setActiveCaseId(picked.id);
        setSafetyChecklist(DEFAULT_SAFETY_CHECKLIST);
        setProgramLocked(false);
        setChartData([]);
        setElapsedSeconds(0);
        chartTickRef.current = 0;
        if (picked.preferredMode) setMode(picked.preferredMode);
        appendEvent(`Caso cargado: ${picked.title}.`);
    }, [appendEvent]);

    const toggleChecklistItem = useCallback((itemId: SafetyChecklistItem['id']) => {
        setSafetyChecklist((prev) => prev.map((item) => {
            if (item.id !== itemId) return item;
            return { ...item, checked: !item.checked };
        }));
    }, []);

    const toggleAlarm = useCallback((alarmId: string) => {
        setAlarms((prev) => {
            const target = prev.find((alarm) => alarm.id === alarmId);
            if (!target) return prev;
            const nextActive = !target.active;
            const next = withUpdatedAlarm(prev, alarmId, nextActive);
            if (nextActive && target.severity === 'critical' && status === 'running') {
                setStatus('paused');
                updateTrainingScore(-8, 'Pausa automatica por alarma critica.');
            }
            return next;
        });
        appendEvent(`Alarma ${alarmId} conmutada manualmente.`);
    }, [appendEvent, status, updateTrainingScore]);

    // --- Titulación ---

    const openTitration = useCallback(() => {
        if (status !== 'running') return;
        setTitrationDelta(0);
        setTitrationOpen(true);
    }, [status]);

    const closeTitration = useCallback(() => {
        setTitrationOpen(false);
        setTitrationDelta(0);
    }, []);

    const titrationStep = useMemo(() => {
        if (mode === 'weight-based') {
            return Math.max(0.01, Math.round(targetDoseMcgKgMin * 0.1 * 1000) / 1000);
        }
        return 0.5;
    }, [mode, targetDoseMcgKgMin]);

    const titrationProposedDose = useMemo(() => {
        if (mode === 'weight-based') {
            return Math.max(0.001, targetDoseMcgKgMin + titrationDelta);
        }
        return Math.max(0.1, manualRateMlHr + titrationDelta);
    }, [mode, targetDoseMcgKgMin, manualRateMlHr, titrationDelta]);

    const adjustTitration = useCallback((direction: 'up' | 'down') => {
        setTitrationDelta((prev) => {
            const step = direction === 'up' ? titrationStep : -titrationStep;
            return Math.round((prev + step) * 10000) / 10000;
        });
    }, [titrationStep]);

    const commitTitration = useCallback(() => {
        if (!selectedDrug || titrationDelta === 0) {
            setTitrationOpen(false);
            setTitrationDelta(0);
            return;
        }

        const previousLabel = mode === 'weight-based'
            ? `${targetDoseMcgKgMin.toFixed(3)} mcg/kg/min`
            : `${manualRateMlHr.toFixed(2)} mL/h`;

        if (mode === 'weight-based') {
            setTargetDoseMcgKgMin(Math.max(0.001, targetDoseMcgKgMin + titrationDelta));
        } else {
            setManualRateMlHr(Math.max(0.1, manualRateMlHr + titrationDelta));
        }

        const newValue = mode === 'weight-based'
            ? Math.max(0.001, targetDoseMcgKgMin + titrationDelta)
            : Math.max(0.1, manualRateMlHr + titrationDelta);

        const newLabel = mode === 'weight-based'
            ? `${newValue.toFixed(3)} mcg/kg/min`
            : `${newValue.toFixed(2)} mL/h`;

        const withinRange = isDoseValidationApplicable(selectedDrug)
            ? validateDoseWithinAhaRange(selectedDrug, mode === 'weight-based' ? newValue : activeDoseMcgKgMin)
            : true;

        const message = `Titracion: ${previousLabel} → ${newLabel}${withinRange ? '' : ' (fuera de rango AHA)'}`;
        updateTrainingScore(withinRange ? 3 : -5, message);

        if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
        setIsTransitioningRate(true);
        transitionTimerRef.current = setTimeout(() => setIsTransitioningRate(false), 1200);

        setTitrationDelta(0);
        setTitrationOpen(false);
    }, [
        selectedDrug, mode, targetDoseMcgKgMin, manualRateMlHr, titrationDelta,
        activeDoseMcgKgMin, updateTrainingScore,
    ]);

    // --- Modo evaluación ---

    const startEvaluation = useCallback(() => {
        if (status === 'running' || status === 'paused') return;
        setSimulationModeState('evaluation');
        setEvaluationNow(Date.now());
        setEvaluation({
            active: true,
            completed: false,
            startedAt: Date.now(),
            finishedAt: null,
            score: 100,
            criticalErrors: 0,
            events: [],
        });
        appendEvent('MODO EVALUACION iniciado.');
    }, [status, appendEvent]);

    const finishEvaluation = useCallback(() => {
        setEvaluation((prev) => {
            if (!prev.active || prev.completed) return prev;
            return { ...prev, completed: true, active: false, finishedAt: Date.now() };
        });
        appendEvent('EVALUACION finalizada. Ver resumen de puntaje.');
    }, [appendEvent]);

    const resetEvaluation = useCallback(() => {
        setEvaluation(EMPTY_EVALUATION);
        setSimulationModeState('practice');
        appendEvent('Evaluacion reiniciada.');
    }, [appendEvent]);

    // Timer del modo evaluación
    useEffect(() => {
        if (!evaluation.active || evaluation.completed) return;
        const id = setInterval(() => setEvaluationNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, [evaluation.active, evaluation.completed]);

    // Intervalo principal de infusión
    useEffect(() => {
        if (status !== 'running') return;
        if (hasCriticalAlarm(alarms)) return;

        const id = setInterval(() => {
            chartTickRef.current += 1;
            setElapsedSeconds((prev) => prev + 1);

            const infusedStepMl = activeRateMlHr / 3600;
            setInfusedMl((prev) => {
                const next = prev + infusedStepMl;
                setAlarmActive('near-end', next < vtbiMl && vtbiMl - next <= 5);
                if (next >= vtbiMl) {
                    setStatus('completed');
                    setAlarmActive('infusion-complete', true);
                    appendEvent('Infusion completada.');
                    updateTrainingScore(12, 'Objetivo de infusion completado.');
                    if (evaluation.active) {
                        setEvaluation((prev) => {
                            if (!prev.active || prev.completed) return prev;
                            return { ...prev, completed: true, active: false, finishedAt: Date.now() };
                        });
                    }
                    return vtbiMl;
                }

                // Muestreo de gráfico cada 10 segundos
                if (chartTickRef.current % 10 === 0) {
                    const timeMin = Math.round((chartTickRef.current / 60) * 100) / 100;
                    setChartData((prevData) => {
                        const point: ChartDataPoint = {
                            timeMin,
                            infusedMl: Math.round(next * 100) / 100,
                            rateMlHr: activeRateMlHr,
                            doseMcgKgMin: activeDoseMcgKgMin,
                        };
                        const trimmed = prevData.length >= 100 ? prevData.slice(1) : prevData;
                        return [...trimmed, point];
                    });
                }

                return next;
            });

            setBatteryPercent((prev) => {
                const nextBattery = Math.max(5, prev - 0.02);
                if (nextBattery <= 20) {
                    setAlarmActive('low-battery', true);
                }
                return nextBattery;
            });
        }, 1000);

        return () => clearInterval(id);
    }, [activeDoseMcgKgMin, activeRateMlHr, alarms, appendEvent, evaluation.active, setAlarmActive, status, updateTrainingScore, vtbiMl]);

    const evaluationElapsedSeconds = evaluation.startedAt
        ? Math.max(0, Math.floor(((evaluation.completed && evaluation.finishedAt
            ? evaluation.finishedAt : evaluationNow) - evaluation.startedAt) / 1000))
        : 0;

    return {
        pumpProfiles: PUMP_PROFILES,
        drugLibrary: INFUSION_DRUG_LIBRARY,
        cases: PREHOSPITAL_CASES,
        powerOn,
        setPowerOn,
        batteryPercent,
        pumpProfileId,
        setPumpProfileId: setPumpProfile,
        mode,
        setMode: setInfusionMode,
        selectedDrug,
        selectedDrugId,
        setSelectedDrugId: setDrugId,
        weightKg,
        setWeightKg: setPatientWeight,
        targetDoseMcgKgMin,
        setTargetDoseMcgKgMin: setDoseTarget,
        manualRateMlHr,
        setManualRateMlHr: setManualRate,
        vtbiMl,
        setVtbiMl: setVtbi,
        concentration,
        activeCase,
        activeRateMlHr,
        activeDoseMcgKgMin,
        doseOutOfRange,
        checklistReady,
        programLocked,
        safetyChecklist,
        trainingScore,
        infusedMl,
        remainingMl,
        timeRemainingMin,
        status,
        alarms,
        events,
        simulationMode,
        setSimulationMode,
        titrationOpen,
        titrationDelta,
        titrationProposedDose,
        titrationStep,
        isTransitioningRate,
        openTitration,
        closeTitration,
        adjustTitration,
        commitTitration,
        chartData,
        elapsedSeconds,
        evaluation,
        evaluationElapsedSeconds,
        startEvaluation,
        finishEvaluation,
        resetEvaluation,
        confirmProgramming,
        startInfusion,
        pauseInfusion,
        resumeInfusion,
        stopInfusion,
        applyCase,
        toggleChecklistItem,
        toggleAlarm,
    };
}
