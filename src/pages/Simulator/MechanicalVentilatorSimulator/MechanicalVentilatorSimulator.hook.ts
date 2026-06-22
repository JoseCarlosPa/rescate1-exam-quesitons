import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    BASE_VENT_ALARMS,
    DEFAULT_SAFETY_CHECKLIST,
    IE_RATIO_OPTIONS,
    LUNG_MODELS,
    PREHOSPITAL_VENT_CASES,
    VENTILATOR_PROFILES,
    calculateIbwKg,
    calculateMinuteVentilation,
    calculatePip,
    calculatePlateauPressure,
    calculateTiSec,
    estimatePcVtMl,
    generateWaveformPoint,
    parseIERatio,
} from './MechanicalVentilatorSimulator.constants';
import type {
    EvaluationState,
    IERatio,
    PatientSex,
    SafetyChecklistItem,
    SimulationMode,
    SimulatorEvent,
    TrainingScore,
    VentAlarmState,
    VentStatus,
    VentilationMode,
    VentilatorProfileId,
    WaveformPoint,
} from './MechanicalVentilatorSimulator.types';

function withUpdatedAlarm(alarms: VentAlarmState[], alarmId: string, active: boolean): VentAlarmState[] {
    return alarms.map((a) => a.id !== alarmId ? a : { ...a, active, acknowledged: active ? a.acknowledged : false });
}

function hasCriticalAlarm(alarms: VentAlarmState[]): boolean {
    return alarms.some((a) => a.active && a.severity === 'critical' && !a.acknowledged);
}

const EMPTY_EVALUATION: EvaluationState = {
    active: false, completed: false,
    startedAt: null, finishedAt: null,
    score: 100, criticalErrors: 0, events: [],
};

export default function useMechanicalVentilatorSimulator() {
    // --- Configuración del ventilador ---
    const [ventProfileId, setVentProfileIdState] = useState<VentilatorProfileId>('zoll-eagle-ii');
    const [ventMode, setVentModeState] = useState<VentilationMode>('vc-ac');
    const [ventStatus, setVentStatus] = useState<VentStatus>('standby');
    const [batteryPercent, setBatteryPercent] = useState(96);

    // --- Parámetros ventilatorios ---
    const [tidalVolumeMl, setTidalVolumeMl] = useState(500);
    const [rrPerMin, setRrPerMin] = useState(12);
    const [peepCmH2O, setPeepCmH2O] = useState(5);
    const [fio2Percent, setFio2Percent] = useState(100);
    const [ieRatio, setIeRatio] = useState<IERatio>('1:2');
    const [pipLimitCmH2O, setPipLimitCmH2O] = useState(40);
    const [drivingPressureCmH2O, setDrivingPressureCmH2O] = useState(12);

    // --- Paciente ---
    const [heightCm, setHeightCm] = useState(170);
    const [weightKg, setWeightKg] = useState(75);
    const [patientSex, setPatientSex] = useState<PatientSex>('male');

    // --- Modelo pulmonar ---
    const [activeLungModelId, setActiveLungModelId] = useState('normal');

    // --- UI y estado de sesión ---
    const [alarms, setAlarms] = useState<VentAlarmState[]>(BASE_VENT_ALARMS);
    const [checklistItems, setChecklistItems] = useState<SafetyChecklistItem[]>(DEFAULT_SAFETY_CHECKLIST);
    const [events, setEvents] = useState<SimulatorEvent[]>([]);
    const [activeCaseId, setActiveCaseId] = useState<string | null>(null);
    const [trainingScore, setTrainingScore] = useState<TrainingScore>({ value: 100, penalties: 0, rewards: 0 });
    const [simulationMode, setSimulationModeState] = useState<SimulationMode>('practice');
    const [evaluation, setEvaluation] = useState<EvaluationState>(EMPTY_EVALUATION);
    const [evaluationNow, setEvaluationNow] = useState(0);

    // --- Waveform ---
    const [waveformData, setWaveformData] = useState<WaveformPoint[]>([]);
    const [breathCount, setBreathCount] = useState(0);
    const [runningSeconds, setRunningSeconds] = useState(0);
    const waveformTimerRef = useRef(0);

    // --- Alarma: timestamp de activación para scoring de respuesta rápida ---
    const alarmActivatedAtRef = useRef<number | null>(null);

    // --- Derivados ---
    const ventProfile = useMemo(
        () => VENTILATOR_PROFILES.find((p) => p.id === ventProfileId) ?? VENTILATOR_PROFILES[0],
        [ventProfileId],
    );

    const lungModel = useMemo(
        () => LUNG_MODELS.find((m) => m.id === activeLungModelId) ?? LUNG_MODELS[0],
        [activeLungModelId],
    );

    const activeCase = useMemo(
        () => PREHOSPITAL_VENT_CASES.find((c) => c.id === activeCaseId) ?? null,
        [activeCaseId],
    );

    const ibwKg = useMemo(() => calculateIbwKg(heightCm, patientSex), [heightCm, patientSex]);

    const patientProfile = useMemo(() => ({ heightCm, weightKg, sex: patientSex, ibwKg }), [heightCm, weightKg, patientSex, ibwKg]);

    const derivedMetrics = useMemo(() => {
        const ieNum = parseIERatio(ieRatio);
        const tiSec = calculateTiSec(rrPerMin, ieRatio);
        const teSec = (60 / rrPerMin) - tiSec;
        const activeVt = ventMode === 'pc-ac'
            ? estimatePcVtMl(drivingPressureCmH2O, lungModel.complianceMlCmH2O, lungModel.resistanceCmH2OLSec, tiSec)
            : tidalVolumeMl;
        const pipCmH2O = ventMode === 'pc-ac'
            ? peepCmH2O + drivingPressureCmH2O
            : calculatePip(tidalVolumeMl, rrPerMin, ieRatio, lungModel.complianceMlCmH2O, lungModel.resistanceCmH2OLSec, peepCmH2O);
        const plateauCmH2O = calculatePlateauPressure(activeVt, lungModel.complianceMlCmH2O, peepCmH2O);
        const minuteVentilationLMin = calculateMinuteVentilation(activeVt, rrPerMin);
        const vtPerIbwKg = ibwKg > 0 ? Math.round((activeVt / ibwKg) * 10) / 10 : 0;
        return { pipCmH2O, plateauCmH2O, minuteVentilationLMin, vtPerIbwKg, tiSec, teSec, ieRatioNum: ieNum, activeVtMl: activeVt };
    }, [ventMode, tidalVolumeMl, rrPerMin, ieRatio, peepCmH2O, drivingPressureCmH2O, lungModel, ibwKg]);

    const checklistReady = useMemo(() => checklistItems.every((i) => i.checked), [checklistItems]);

    const activeAlarms = useMemo(() => alarms.filter((a) => a.active), [alarms]);

    // --- Helpers ---
    const appendEvent = useCallback((message: string) => {
        setEvents((prev) => [
            { id: `${Date.now()}-${prev.length + 1}`, timestamp: Date.now(), message },
            ...prev,
        ].slice(0, 40));
    }, []);

    const registerEvaluationAction = useCallback((
        action: string, detail: string, points: number, critical = false,
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
                    action, detail, points, critical,
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
        registerEvaluationAction(delta >= 0 ? 'RECOMPENSA' : 'PENALIZACION', message, delta, delta <= -8);
    }, [appendEvent, registerEvaluationAction]);

    const setAlarmActive = useCallback((alarmId: string, active: boolean) => {
        setAlarms((prev) => withUpdatedAlarm(prev, alarmId, active));
        if (active) alarmActivatedAtRef.current = Date.now();
    }, []);

    // --- Setters con validación ---
    const setVentProfileId = useCallback((id: VentilatorProfileId) => {
        if (ventStatus === 'running') return;
        setVentProfileIdState(id);
    }, [ventStatus]);

    const setVentMode = useCallback((mode: VentilationMode) => {
        if (ventStatus === 'running') return;
        setVentModeState(mode);
        appendEvent(`Modo cambiado a: ${mode.toUpperCase()}`);
    }, [ventStatus, appendEvent]);

    const setSimulationMode = useCallback((mode: SimulationMode) => {
        if (ventStatus === 'running' || ventStatus === 'alarming') return;
        setSimulationModeState(mode);
    }, [ventStatus]);

    const setLungModel = useCallback((id: string) => {
        setActiveLungModelId(id);
        const model = LUNG_MODELS.find((m) => m.id === id);
        if (model) appendEvent(`Modelo pulmonar: ${model.label}`);
    }, [appendEvent]);

    // --- Checklist ---
    const toggleChecklistItem = useCallback((itemId: SafetyChecklistItem['id']) => {
        setChecklistItems((prev) => prev.map((item) =>
            item.id !== itemId ? item : { ...item, checked: !item.checked },
        ));
    }, []);

    // --- Control de ventilación ---
    const validateVentilation = useCallback((): string[] => {
        const errors: string[] = [];
        if (!checklistReady) errors.push('Checklist de seguridad incompleto.');
        if (tidalVolumeMl < ventProfile.minVtMl || tidalVolumeMl > ventProfile.maxVtMl) {
            errors.push(`Vt fuera de rango del ventilador (${ventProfile.minVtMl}-${ventProfile.maxVtMl} mL).`);
        }
        if (ventMode !== 'pc-ac' && derivedMetrics.pipCmH2O > pipLimitCmH2O) {
            errors.push(`PIP calculado (${derivedMetrics.pipCmH2O} cmH2O) excede el limite de alarma (${pipLimitCmH2O} cmH2O).`);
        }
        if (rrPerMin < 4 || rrPerMin > 40) errors.push('FR fuera de rango clínico (4-40 rpm).');
        if (fio2Percent < 21 || fio2Percent > 100) errors.push('FiO2 fuera de rango (21-100%).');
        return errors;
    }, [checklistReady, tidalVolumeMl, ventProfile, ventMode, derivedMetrics.pipCmH2O, pipLimitCmH2O, rrPerMin, fio2Percent]);

    const startVentilation = useCallback(() => {
        const errors = validateVentilation();
        if (errors.length > 0) {
            updateTrainingScore(-5, `Inicio bloqueado: ${errors[0]}`);
            return;
        }
        if (hasCriticalAlarm(alarms)) {
            updateTrainingScore(-8, 'Inicio bloqueado por alarma critica activa.');
            return;
        }
        setVentStatus('running');
        waveformTimerRef.current = 0;
        setBreathCount(0);
        setRunningSeconds(0);
        appendEvent(`Ventilacion iniciada. Modo ${ventMode.toUpperCase()}, Vt ${tidalVolumeMl} mL, RR ${rrPerMin}, PEEP ${peepCmH2O}.`);

        // Scoring al inicio
        if (derivedMetrics.vtPerIbwKg <= 8) {
            updateTrainingScore(8, `Ventilacion protectora: ${derivedMetrics.vtPerIbwKg} mL/kg IBW (≤ 8).`);
        } else if (derivedMetrics.vtPerIbwKg > 10) {
            updateTrainingScore(-10, `Vt excesivo: ${derivedMetrics.vtPerIbwKg} mL/kg IBW (> 10). Riesgo de volutrauma.`);
        }
        if (derivedMetrics.plateauCmH2O < 30) {
            updateTrainingScore(6, `Plateau protector: ${derivedMetrics.plateauCmH2O} cmH2O (< 30).`);
        } else if (derivedMetrics.plateauCmH2O > 35) {
            updateTrainingScore(-8, `Plateau peligroso: ${derivedMetrics.plateauCmH2O} cmH2O (> 35). Riesgo de barotrauma.`);
        }
        if (activeCase) {
            if (ventMode === activeCase.suggestedMode) {
                updateTrainingScore(5, `Modo ventilatorio correcto para el caso: ${ventMode.toUpperCase()}.`);
            } else {
                updateTrainingScore(-5, `Modo incorrecto para el caso. Sugerido: ${activeCase.suggestedMode.toUpperCase()}.`);
            }
            const peepDiff = Math.abs(peepCmH2O - activeCase.suggestedPeepCmH2O);
            if (peepDiff <= 2) {
                updateTrainingScore(5, `PEEP apropiado para el caso (${peepCmH2O} vs ${activeCase.suggestedPeepCmH2O} sugerido).`);
            }
        }
    }, [
        validateVentilation, alarms, appendEvent, ventMode, tidalVolumeMl, rrPerMin, peepCmH2O,
        derivedMetrics, activeCase, updateTrainingScore,
    ]);

    const pauseVentilation = useCallback(() => {
        if (ventStatus !== 'running') return;
        setVentStatus('standby');
        appendEvent('Ventilacion pausada por operador.');
    }, [ventStatus, appendEvent]);

    const resumeVentilation = useCallback(() => {
        if (ventStatus !== 'standby') return;
        if (hasCriticalAlarm(alarms)) {
            appendEvent('No se puede reanudar: alarma critica activa.');
            return;
        }
        setVentStatus('running');
        appendEvent('Ventilacion reanudada.');
    }, [ventStatus, alarms, appendEvent]);

    const stopVentilation = useCallback(() => {
        setVentStatus('standby');
        setWaveformData([]);
        waveformTimerRef.current = 0;
        setBreathCount(0);
        setRunningSeconds(0);
        setAlarms((prev) => prev.map((a) => ({ ...a, active: false, acknowledged: false })));
        appendEvent('Ventilacion detenida. Parametros reiniciados.');
    }, [appendEvent]);

    const applyCase = useCallback((caseId: string) => {
        const picked = PREHOSPITAL_VENT_CASES.find((c) => c.id === caseId);
        if (!picked) return;
        if (ventStatus === 'running') {
            appendEvent('Detener la ventilacion antes de cargar un caso.');
            return;
        }
        setVentModeState(picked.suggestedMode);
        setTidalVolumeMl(picked.suggestedVtMl > 0 ? picked.suggestedVtMl : 500);
        setRrPerMin(picked.suggestedRrPerMin);
        setPeepCmH2O(picked.suggestedPeepCmH2O);
        setFio2Percent(picked.suggestedFio2Percent);
        setIeRatio(picked.suggestedIeRatio);
        setDrivingPressureCmH2O(picked.suggestedDrivingPressureCmH2O > 0 ? picked.suggestedDrivingPressureCmH2O : 12);
        setActiveLungModelId(picked.lungModelId);
        setHeightCm(picked.patientHeightCm);
        setWeightKg(picked.patientWeightKg);
        setPatientSex(picked.patientSex);
        setActiveCaseId(picked.id);
        setChecklistItems(DEFAULT_SAFETY_CHECKLIST);
        setWaveformData([]);
        waveformTimerRef.current = 0;
        appendEvent(`Caso cargado: ${picked.title}.`);
    }, [ventStatus, appendEvent]);

    // --- Alarmas ---
    const toggleAlarm = useCallback((alarmId: string) => {
        setAlarms((prev) => {
            const target = prev.find((a) => a.id === alarmId);
            if (!target) return prev;
            const nextActive = !target.active;
            if (nextActive && target.severity === 'critical' && ventStatus === 'running') {
                setVentStatus('alarming');
                updateTrainingScore(-8, `Alarma critica activada manualmente: ${target.label}`);
                alarmActivatedAtRef.current = Date.now();
            }
            return withUpdatedAlarm(prev, alarmId, nextActive);
        });
        appendEvent(`Alarma conmutada: ${alarmId}`);
    }, [ventStatus, appendEvent, updateTrainingScore]);

    const acknowledgeAlarm = useCallback((alarmId: string) => {
        const activatedAt = alarmActivatedAtRef.current;
        const responseTimeSec = activatedAt ? (Date.now() - activatedAt) / 1000 : 999;

        setAlarms((prev) => prev.map((a) =>
            a.id !== alarmId ? a : { ...a, acknowledged: true },
        ));

        if (responseTimeSec < 10) {
            updateTrainingScore(4, `Alarma reconocida rapidamente: ${responseTimeSec.toFixed(1)} s.`);
        } else if (responseTimeSec > 15) {
            updateTrainingScore(-8, `Alarma critica ignorada por ${responseTimeSec.toFixed(1)} s (> 15 s).`);
        }

        // Si no hay más alarmas críticas sin reconocer, reanudar
        setAlarms((prev) => {
            const stillCritical = prev.some((a) => a.active && a.severity === 'critical' && !a.acknowledged && a.id !== alarmId);
            if (!stillCritical && ventStatus === 'alarming') {
                setVentStatus('running');
                appendEvent('Alarmas reconocidas. Ventilacion reanudada.');
            }
            return prev;
        });
        alarmActivatedAtRef.current = null;
        appendEvent(`Alarma reconocida: ${alarmId}`);
    }, [ventStatus, appendEvent, updateTrainingScore]);

    // --- Evaluación ---
    const startEvaluation = useCallback(() => {
        if (ventStatus === 'running' || ventStatus === 'alarming') return;
        setSimulationModeState('evaluation');
        setEvaluationNow(Date.now());
        setEvaluation({
            active: true, completed: false,
            startedAt: Date.now(), finishedAt: null,
            score: 100, criticalErrors: 0, events: [],
        });
        appendEvent('MODO EVALUACION iniciado.');
    }, [ventStatus, appendEvent]);

    const finishEvaluation = useCallback(() => {
        setEvaluation((prev) => {
            if (!prev.active || prev.completed) return prev;
            return { ...prev, completed: true, active: false, finishedAt: Date.now() };
        });
        appendEvent('EVALUACION finalizada. Ver resumen.');
    }, [appendEvent]);

    const resetEvaluation = useCallback(() => {
        setEvaluation(EMPTY_EVALUATION);
        setSimulationModeState('practice');
        appendEvent('Evaluacion reiniciada.');
    }, [appendEvent]);

    // Timer de evaluación
    useEffect(() => {
        if (!evaluation.active || evaluation.completed) return;
        const id = setInterval(() => setEvaluationNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, [evaluation.active, evaluation.completed]);

    // --- Intervalo principal de waveform (200ms) ---
    useEffect(() => {
        if (ventStatus !== 'running' && ventStatus !== 'alarming') return;

        const id = setInterval(() => {
            waveformTimerRef.current += 0.2;

            setRunningSeconds((prev) => prev + 0.2);

            // Contar respiraciones
            const breathPeriod = 60 / rrPerMin;
            const prevBreaths = Math.floor((waveformTimerRef.current - 0.2) / breathPeriod);
            const currBreaths = Math.floor(waveformTimerRef.current / breathPeriod);
            if (currBreaths > prevBreaths) {
                setBreathCount((prev) => prev + (currBreaths - prevBreaths));
            }

            // Generar punto de waveform
            const point = generateWaveformPoint(
                waveformTimerRef.current,
                tidalVolumeMl,
                rrPerMin,
                ieRatio,
                peepCmH2O,
                drivingPressureCmH2O,
                ventMode,
                lungModel.complianceMlCmH2O,
                lungModel.resistanceCmH2OLSec,
            );

            setWaveformData((prev) => {
                const next = [...(prev.length >= 150 ? prev.slice(1) : prev), {
                    t: Math.round(waveformTimerRef.current * 10) / 10,
                    pressure: Math.round(point.pressure * 10) / 10,
                    flow: Math.round(point.flow * 10) / 10,
                    volume: Math.round(point.volume),
                }];
                return next;
            });

            // Revisar alarmas automáticas
            const { pipCmH2O, minuteVentilationLMin } = (() => {
                const activeVt = ventMode === 'pc-ac'
                    ? estimatePcVtMl(drivingPressureCmH2O, lungModel.complianceMlCmH2O, lungModel.resistanceCmH2OLSec, calculateTiSec(rrPerMin, ieRatio))
                    : tidalVolumeMl;
                return {
                    pipCmH2O: ventMode === 'pc-ac'
                        ? peepCmH2O + drivingPressureCmH2O
                        : calculatePip(tidalVolumeMl, rrPerMin, ieRatio, lungModel.complianceMlCmH2O, lungModel.resistanceCmH2OLSec, peepCmH2O),
                    minuteVentilationLMin: calculateMinuteVentilation(activeVt, rrPerMin),
                };
            })();

            setAlarms((prevAlarms) => {
                let next = prevAlarms;
                const highPip = pipCmH2O > pipLimitCmH2O;
                const lowPressure = point.pressure < 5 && waveformTimerRef.current > 1;
                const highMv = minuteVentilationLMin > 15;
                const lowMv = minuteVentilationLMin < 2;

                const wasHighPip = prevAlarms.find((a) => a.id === 'high-pip')?.active ?? false;
                if (highPip !== wasHighPip) {
                    next = withUpdatedAlarm(next, 'high-pip', highPip);
                    if (highPip) {
                        alarmActivatedAtRef.current = Date.now();
                        setVentStatus('alarming');
                    }
                }
                const wasLowPressure = prevAlarms.find((a) => a.id === 'low-pressure')?.active ?? false;
                if (lowPressure !== wasLowPressure) next = withUpdatedAlarm(next, 'low-pressure', lowPressure);

                const wasHighMv = prevAlarms.find((a) => a.id === 'high-minute-vol')?.active ?? false;
                if (highMv !== wasHighMv) next = withUpdatedAlarm(next, 'high-minute-vol', highMv);

                const wasLowMv = prevAlarms.find((a) => a.id === 'low-minute-vol')?.active ?? false;
                if (lowMv !== wasLowMv) next = withUpdatedAlarm(next, 'low-minute-vol', lowMv);

                return next;
            });

            // Batería
            setBatteryPercent((prev) => {
                const next = Math.max(5, prev - 0.005);
                if (next <= 20) setAlarmActive('low-battery', true);
                return next;
            });
        }, 200);

        return () => clearInterval(id);
    }, [
        ventStatus, tidalVolumeMl, rrPerMin, ieRatio, peepCmH2O,
        drivingPressureCmH2O, ventMode, lungModel, pipLimitCmH2O, setAlarmActive,
    ]);

    const evaluationElapsedSeconds = evaluation.startedAt
        ? Math.max(0, Math.floor(
            ((evaluation.completed && evaluation.finishedAt ? evaluation.finishedAt : evaluationNow)
                - evaluation.startedAt) / 1000,
        ))
        : 0;

    return {
        // Perfiles y catálogos
        ventProfiles: VENTILATOR_PROFILES,
        lungModels: LUNG_MODELS,
        cases: PREHOSPITAL_VENT_CASES,
        ieRatioOptions: IE_RATIO_OPTIONS,

        // Config
        ventProfileId,
        setVentProfileId,
        ventMode,
        setVentMode,
        ventStatus,
        batteryPercent,

        // Parámetros
        tidalVolumeMl,
        setTidalVolumeMl,
        rrPerMin,
        setRrPerMin,
        peepCmH2O,
        setPeepCmH2O,
        fio2Percent,
        setFio2Percent,
        ieRatio,
        setIeRatio,
        pipLimitCmH2O,
        setPipLimitCmH2O,
        drivingPressureCmH2O,
        setDrivingPressureCmH2O,

        // Paciente
        heightCm,
        setHeightCm,
        weightKg,
        setWeightKg,
        patientSex,
        setPatientSex,
        patientProfile,
        ibwKg,

        // Modelo pulmonar
        activeLungModelId,
        lungModel,
        setLungModel,

        // Derivados
        derivedMetrics,

        // Waveform
        waveformData,
        breathCount,
        runningSeconds,

        // Alarmas y checklist
        alarms,
        activeAlarms,
        checklistItems,
        checklistReady,
        toggleChecklistItem,
        toggleAlarm,
        acknowledgeAlarm,

        // Caso activo
        activeCase,
        activeCaseId,

        // Scoring
        trainingScore,
        events,

        // Modo evaluación
        simulationMode,
        setSimulationMode,
        evaluation,
        evaluationElapsedSeconds,
        startEvaluation,
        finishEvaluation,
        resetEvaluation,

        // Handlers principales
        startVentilation,
        pauseVentilation,
        resumeVentilation,
        stopVentilation,
        applyCase,
    };
}
