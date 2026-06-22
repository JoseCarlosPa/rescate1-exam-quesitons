import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import bipSrc from '../../../assets/audio/bip.mp3';
import unhealthySrc from '../../../assets/audio/unhealthy.mp3';
import deadSrc from '../../../assets/audio/dead.mp3';
import type {
    MonitorType,
    VitalSigns,
    EcgScenario,
    PacerSettings,
    EvaluationState,
    LeadType,
    NibpState,
    SimulationMode,
    TwelveLeadReport,
} from './MonitorAndEkgSimulator.types';
import {
    ECG_SCENARIOS,
    ZOLL_ENERGY_LEVELS,
    LIFEPAK_ENERGY_LEVELS,
    ALARM_THRESHOLDS,
    PACER_RATE_MIN,
    PACER_RATE_MAX,
    PACER_RATE_STEP,
    PACER_CURRENT_MIN,
    PACER_CURRENT_MAX,
    PACER_CURRENT_STEP,
    DISPLAY_SECONDS,
    HYBRID_PROTOCOL_PROFILE,
    EVALUATION_START_SCORE,
    clampScore,
    isScenarioCardioversionCandidate,
    generateLeadEcgValue,
    generateTwelveLeadReport,
    generatePlethValue,
    generatePacerSpike,
} from './MonitorAndEkgSimulator.constants';
import { useEkgSession } from './useEkgSession.hook';

// ──────────────────────────────────────────────
// Canvas drawing helpers
// ──────────────────────────────────────────────
function drawGrid(ctx: CanvasRenderingContext2D, w: number, h: number) {
    const smallGrid = w / 30;
    ctx.strokeStyle = 'rgba(30, 60, 30, 0.35)';
    ctx.lineWidth = 0.5;
    for (let x = 0; x <= w; x += smallGrid) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y <= h; y += smallGrid) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    const bigGrid = smallGrid * 5;
    ctx.strokeStyle = 'rgba(35, 80, 35, 0.5)';
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += bigGrid) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y <= h; y += bigGrid) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
}

// ──────────────────────────────────────────────
// Main hook
// ──────────────────────────────────────────────
export default function useMonitorSimulator(liveSessionId?: string) {
    // ── Session sync ────────────────────────────
    const { sessionData, deliverShock, attachSession } = useEkgSession();
    useEffect(() => {
        if (liveSessionId) attachSession(liveSessionId);
    }, [liveSessionId, attachSession]);

    const isLiveSession = Boolean(liveSessionId);

    // ── Core state ──────────────────────────────
    const [monitorType, setMonitorType] = useState<MonitorType | null>(null);
    const [simulationMode, setSimulationMode] = useState<SimulationMode>('practice');
    const [isOn, setIsOn] = useState(true);
    const [currentScenario, setCurrentScenario] = useState<EcgScenario>(ECG_SCENARIOS[0]);
    const [displayVitals, setDisplayVitals] = useState<VitalSigns>(ECG_SCENARIOS[0].defaultVitals);

    // ── Defibrillator state ─────────────────────
    const [energy, setEnergy] = useState(120);
    const [isCharging, setIsCharging] = useState(false);
    const [isCharged, setIsCharged] = useState(false);
    const [syncMode, setSyncMode] = useState(false);
    const [shockDelivered, setShockDelivered] = useState(false);
    const [defiMessage, setDefiMessage] = useState('');

    // ── Pacer ───────────────────────────────────
    const [pacer, setPacer] = useState<PacerSettings>({ rate: 70, current: 60, active: false });

    // ── Alarms ──────────────────────────────────
    const [alarmsMuted, setAlarmsMuted] = useState(false);

    // ── Display settings ────────────────────────
    const [leadSelection, setLeadSelection] = useState<LeadType>('II');
    const [sweepSpeed, setSweepSpeed] = useState(25);
    const [showScenarioPanel, setShowScenarioPanel] = useState(false);
    const [showInfoPanel, setShowInfoPanel] = useState(false);
    const [nibp, setNibp] = useState<NibpState>({
        measuring: false,
        autoCycle: false,
        intervalSec: 120,
        lastReadingAt: null,
        reading: null,
    });
    const [evaluationNow, setEvaluationNow] = useState(0);
    const [evaluation, setEvaluation] = useState<EvaluationState>({
        active: false,
        completed: false,
        startedAt: null,
        finishedAt: null,
        score: EVALUATION_START_SCORE,
        criticalErrors: 0,
        events: [],
    });

    // ── Canvas refs ─────────────────────────────
    const ecgCanvasRef = useRef<HTMLCanvasElement | null>(null);
    const plethCanvasRef = useRef<HTMLCanvasElement | null>(null);

    // ── Animation refs ──────────────────────────
    const ecgBufferRef = useRef<Float32Array>(new Float32Array(0));
    const plethBufferRef = useRef<Float32Array>(new Float32Array(0));
    const posRef = useRef(0);
    const timeRef = useRef(0);
    const lastTsRef = useRef(0);
    const animIdRef = useRef(0);

    // ── Audio ────────────────────────────────────
    const bipBufferRef = useRef<AudioBuffer | null>(null);
    const unhealthyBufferRef = useRef<AudioBuffer | null>(null);
    const deadBufferRef = useRef<AudioBuffer | null>(null);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const lastBeatSecRef = useRef(-1);
    const lastAlarmSecRef = useRef(-1);
    const alarmsMutedRef = useRef(alarmsMuted);
    useEffect(() => { alarmsMutedRef.current = alarmsMuted; }, [alarmsMuted]);

    useEffect(() => {
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;
        const load = (src: string) =>
            fetch(src).then(r => r.arrayBuffer()).then(ab => ctx.decodeAudioData(ab)).catch(() => null);
        load(bipSrc).then(buf => { if (buf) bipBufferRef.current = buf; });
        load(unhealthySrc).then(buf => { if (buf) unhealthyBufferRef.current = buf; });
        load(deadSrc).then(buf => { if (buf) deadBufferRef.current = buf; });
        return () => { ctx.close(); };
    }, []);

    // ── Live session sync ────────────────────────
    useEffect(() => {
        if (!isLiveSession || !sessionData) return;
        const remoteScenario = ECG_SCENARIOS.find(s => s.rhythmType === sessionData.scenario.rhythmType);
        if (remoteScenario && remoteScenario.id !== currentScenario.id) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrentScenario(remoteScenario);
            timeRef.current = 0;
            posRef.current = 0;
            lastTsRef.current = 0;
            if (ecgBufferRef.current.length > 0) ecgBufferRef.current.fill(0);
            if (plethBufferRef.current.length > 0) plethBufferRef.current.fill(0);
        }
        if (sessionData.monitorType && !monitorType) {
            setMonitorType(sessionData.monitorType);
        }
    }, [sessionData, isLiveSession, currentScenario.id, monitorType]);

    useEffect(() => {
        if (!isLiveSession || !sessionData?.scenario?.vitals) return;
        queueMicrotask(() => {
            setDisplayVitals(sessionData.scenario.vitals);
        });
    }, [sessionData?.scenario?.vitals, isLiveSession]);

    // ── Energy levels for current monitor ───────
    const energyLevels = monitorType === 'lifepak' ? LIFEPAK_ENERGY_LEVELS : ZOLL_ENERGY_LEVELS;

    const isCardioversionCandidate = isScenarioCardioversionCandidate(currentScenario);

    const registerEvaluationAction = useCallback((
        action: string,
        detail: string,
        points: number,
        critical: boolean = false,
    ) => {
        setEvaluation(prev => {
            if (!prev.active || prev.completed) return prev;
            return {
                ...prev,
                score: clampScore(prev.score + points),
                criticalErrors: prev.criticalErrors + (critical ? 1 : 0),
                events: [
                    ...prev.events,
                    {
                        id: `${Date.now()}-${prev.events.length + 1}`,
                        timestamp: Date.now(),
                        action,
                        detail,
                        points,
                        critical,
                    },
                ],
            };
        });
    }, []);

    // ──────────────────────────────────────────────
    // Scenario change handler
    // ──────────────────────────────────────────────
    const selectScenario = useCallback((scenario: EcgScenario) => {
        setCurrentScenario(scenario);
        setDisplayVitals(scenario.defaultVitals);
        // Reset animation
        timeRef.current = 0;
        posRef.current = 0;
        lastTsRef.current = 0;
        if (ecgBufferRef.current.length > 0) ecgBufferRef.current.fill(0);
        if (plethBufferRef.current.length > 0) plethBufferRef.current.fill(0);
        // Reset defi state
        setIsCharging(false);
        setIsCharged(false);
        setShockDelivered(false);
        setDefiMessage('');
        setPacer(p => ({ ...p, active: false }));
        setNibp(prev => ({
            ...prev,
            reading: {
                systolic: scenario.defaultVitals.systolic,
                diastolic: scenario.defaultVitals.diastolic,
            },
            lastReadingAt: Date.now(),
        }));
        registerEvaluationAction('SCENARIO_CHANGE', `Se selecciono ${scenario.shortName}`, -2, false);
    }, [registerEvaluationAction]);

    useEffect(() => {
        if (!evaluation.active || evaluation.completed) return;
        const id = setInterval(() => setEvaluationNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, [evaluation.active, evaluation.completed]);

    const startEvaluation = useCallback(() => {
        setSimulationMode('evaluation');
        setShowInfoPanel(false);
        setEvaluationNow(Date.now());
        setEvaluation({
            active: true,
            completed: false,
            startedAt: Date.now(),
            finishedAt: null,
            score: EVALUATION_START_SCORE,
            criticalErrors: 0,
            events: [],
        });
        setDefiMessage('MODO EVALUACION ACTIVO');
        setTimeout(() => setDefiMessage(''), 1600);
    }, []);

    const finishEvaluation = useCallback(() => {
        setEvaluation(prev => {
            if (!prev.active || prev.completed) return prev;
            return {
                ...prev,
                completed: true,
                active: false,
                finishedAt: Date.now(),
            };
        });
        setDefiMessage('EVALUACION FINALIZADA');
        setTimeout(() => setDefiMessage(''), 1800);
    }, []);

    const resetEvaluation = useCallback(() => {
        setEvaluation({
            active: false,
            completed: false,
            startedAt: null,
            finishedAt: null,
            score: EVALUATION_START_SCORE,
            criticalErrors: 0,
            events: [],
        });
    }, []);

    // ──────────────────────────────────────────────
    // Vital signs fluctuation
    // ──────────────────────────────────────────────
    useEffect(() => {
        if (!isOn || isLiveSession) return;
        const id = setInterval(() => {
            const base = currentScenario.defaultVitals;
            setDisplayVitals({
                hr: base.hr > 0 ? base.hr + Math.round((Math.random() - 0.5) * 4) : 0,
                spo2: base.spo2 > 0 ? Math.min(100, Math.max(0, base.spo2 + Math.round((Math.random() - 0.5) * 2))) : 0,
                systolic: base.systolic > 0 ? base.systolic + Math.round((Math.random() - 0.5) * 6) : 0,
                diastolic: base.diastolic > 0 ? base.diastolic + Math.round((Math.random() - 0.5) * 4) : 0,
                rr: base.rr > 0 ? base.rr + Math.round((Math.random() - 0.5) * 2) : 0,
                etco2: base.etco2 > 0 ? base.etco2 + Math.round((Math.random() - 0.5) * 3) : 0,
                temp: base.temp,
            });
        }, 2500);
        return () => clearInterval(id);
    }, [isOn, isLiveSession, currentScenario]);

    const performNibpMeasurement = useCallback(() => {
        if (!isOn || nibp.measuring) return;

        setNibp(prev => ({ ...prev, measuring: true }));
        setDefiMessage('NIBP MIDIENDO...');

        setTimeout(() => {
            setDisplayVitals(prev => {
                const systolic = prev.systolic > 0 ? prev.systolic : currentScenario.defaultVitals.systolic;
                const diastolic = prev.diastolic > 0 ? prev.diastolic : currentScenario.defaultVitals.diastolic;

                setNibp(old => ({
                    ...old,
                    measuring: false,
                    lastReadingAt: Date.now(),
                    reading: { systolic, diastolic },
                }));

                return prev;
            });

            setDefiMessage('');
        }, 1600);
    }, [isOn, nibp.measuring, currentScenario.defaultVitals.diastolic, currentScenario.defaultVitals.systolic]);

    useEffect(() => {
        if (!nibp.autoCycle || !isOn) return;

        const id = setInterval(() => {
            performNibpMeasurement();
        }, Math.max(30, nibp.intervalSec) * 1000);

        return () => clearInterval(id);
    }, [nibp.autoCycle, nibp.intervalSec, isOn, performNibpMeasurement]);

    const alarms = useMemo(() => {
        const hr = displayVitals.hr;
        const spo2 = displayVitals.spo2;
        return {
            hrHigh: hr > ALARM_THRESHOLDS.hrHigh,
            hrLow: hr > 0 && hr < ALARM_THRESHOLDS.hrLow,
            spo2Low: spo2 > 0 && spo2 < ALARM_THRESHOLDS.spo2Low,
            muted: alarmsMuted,
        };
    }, [displayVitals, alarmsMuted]);

    const alarmsRef = useRef(alarms);
    useEffect(() => { alarmsRef.current = alarms; }, [alarms]);

    // ──────────────────────────────────────────────
    // Canvas animation loop
    // ──────────────────────────────────────────────
    useEffect(() => {
        if (!isOn) return;

        const ecgCanvas = ecgCanvasRef.current;
        const plethCanvas = plethCanvasRef.current;
        if (!ecgCanvas) return;
        const ecgCtx = ecgCanvas.getContext('2d');
        if (!ecgCtx) return;
        const plethCtx = plethCanvas?.getContext('2d') ?? null;

        // Size setup
        const setupSize = () => {
            const dpr = window.devicePixelRatio || 1;
            const ecgRect = ecgCanvas.getBoundingClientRect();
            ecgCanvas.width = Math.floor(ecgRect.width * dpr);
            ecgCanvas.height = Math.floor(ecgRect.height * dpr);
            ecgCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const w = Math.floor(ecgRect.width);
            if (ecgBufferRef.current.length !== w) {
                ecgBufferRef.current = new Float32Array(w);
                posRef.current = 0;
            }

            if (plethCanvas && plethCtx) {
                const pRect = plethCanvas.getBoundingClientRect();
                plethCanvas.width = Math.floor(pRect.width * dpr);
                plethCanvas.height = Math.floor(pRect.height * dpr);
                plethCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
                const pw = Math.floor(pRect.width);
                if (plethBufferRef.current.length !== pw) {
                    plethBufferRef.current = new Float32Array(pw);
                }
            }
        };
        setupSize();

        const ecgColor = monitorType === 'lifepak' ? '#33ff33' : '#00ff41';
        const plethColor = monitorType === 'lifepak' ? '#00ccff' : '#00e5ff';

        const render = (ts: number) => {
            const delta = lastTsRef.current ? Math.min((ts - lastTsRef.current) / 1000, 0.1) : 0;
            lastTsRef.current = ts;

            const ecgRect = ecgCanvas.getBoundingClientRect();
            const w = Math.floor(ecgRect.width);
            const h = Math.floor(ecgRect.height);
            if (w <= 0 || h <= 0) { animIdRef.current = requestAnimationFrame(render); return; }

            const pixPerSec = w / DISPLAY_SECONDS;
            const advance = Math.max(1, Math.round(pixPerSec * delta));

            const hr = currentScenario.defaultVitals.hr;
            const rhythm = currentScenario.rhythmType;
            const beatDuration = hr > 0 ? 60 / hr : 999;

            // ── Beep sync ──────────────────────
            if (hr > 0 && !alarmsMutedRef.current && bipBufferRef.current && audioCtxRef.current) {
                const currentBeat = Math.floor(timeRef.current / beatDuration);
                if (currentBeat !== lastBeatSecRef.current) {
                    lastBeatSecRef.current = currentBeat;
                    const ctx = audioCtxRef.current;
                    const src = ctx.createBufferSource();
                    src.buffer = bipBufferRef.current;
                    src.connect(ctx.destination);
                    src.start();
                }
            }

            // ── Alarm sounds ────────────────────
            if (!alarmsMutedRef.current && audioCtxRef.current) {
                const ctx = audioCtxRef.current;
                const a = alarmsRef.current;
                const isVitalAlarm = a.hrHigh || a.hrLow || a.spo2Low;
                const isDead = hr === 0;
                // fire every ~3 s for vital alarms, ~2 s for flatline
                const alarmInterval = isDead ? 2 : 3;
                const alarmTick = Math.floor(timeRef.current / alarmInterval);
                if (alarmTick !== lastAlarmSecRef.current) {
                    lastAlarmSecRef.current = alarmTick;
                    const buf = isDead ? deadBufferRef.current : isVitalAlarm ? unhealthyBufferRef.current : null;
                    if (buf) {
                        const src = ctx.createBufferSource();
                        src.buffer = buf;
                        src.connect(ctx.destination);
                        src.start();
                    }
                }
            }

            for (let i = 0; i < advance; i++) {
                timeRef.current += 1 / pixPerSec;
                let val = generateLeadEcgValue(timeRef.current, rhythm, hr, leadSelection);
                if (pacer.active) {
                    val += generatePacerSpike(timeRef.current, pacer.rate);
                }
                const idx = posRef.current % w;
                ecgBufferRef.current[idx] = val;

                // Pleth buffer
                if (plethBufferRef.current.length > 0 && hr > 0) {
                    const plethPhase = (timeRef.current % beatDuration) / beatDuration;
                    plethBufferRef.current[idx % plethBufferRef.current.length] = generatePlethValue(plethPhase);
                } else if (plethBufferRef.current.length > 0) {
                    plethBufferRef.current[idx % plethBufferRef.current.length] = 0;
                }

                posRef.current++;
            }

            // ── Draw ECG ────────────────────────
            ecgCtx.fillStyle = '#080e08';
            ecgCtx.fillRect(0, 0, w, h);
            drawGrid(ecgCtx, w, h);

            const cursorPos = posRef.current % w;
            const gap = 10;
            const centerY = h * 0.5;
            const amp = h * 0.38;

            ecgCtx.strokeStyle = ecgColor;
            ecgCtx.lineWidth = 2;
            ecgCtx.shadowColor = ecgColor;
            ecgCtx.shadowBlur = 4;
            ecgCtx.beginPath();
            let moved = false;
            for (let x = 0; x < w; x++) {
                const dist = ((x - cursorPos) % w + w) % w;
                if (dist < gap) { moved = false; continue; }
                const y = centerY - ecgBufferRef.current[x] * amp;
                if (!moved) { ecgCtx.moveTo(x, y); moved = true; }
                else ecgCtx.lineTo(x, y);
            }
            ecgCtx.stroke();
            ecgCtx.shadowBlur = 0;

            // ── Draw Pleth ──────────────────────
            if (plethCtx && plethCanvas) {
                const pRect = plethCanvas.getBoundingClientRect();
                const pw = Math.floor(pRect.width);
                const ph = Math.floor(pRect.height);
                plethCtx.fillStyle = '#080e08';
                plethCtx.fillRect(0, 0, pw, ph);

                plethCtx.strokeStyle = plethColor;
                plethCtx.lineWidth = 1.5;
                plethCtx.shadowColor = plethColor;
                plethCtx.shadowBlur = 3;
                plethCtx.beginPath();
                let pMoved = false;
                for (let x = 0; x < pw; x++) {
                    const dist = ((x - (posRef.current % pw)) % pw + pw) % pw;
                    if (dist < gap) { pMoved = false; continue; }
                    const y = ph - plethBufferRef.current[x] * ph * 0.8 - ph * 0.08;
                    if (!pMoved) { plethCtx.moveTo(x, y); pMoved = true; }
                    else plethCtx.lineTo(x, y);
                }
                plethCtx.stroke();
                plethCtx.shadowBlur = 0;
            }

            animIdRef.current = requestAnimationFrame(render);
        };

        animIdRef.current = requestAnimationFrame(render);

        const onResize = () => setupSize();
        window.addEventListener('resize', onResize);

        return () => {
            cancelAnimationFrame(animIdRef.current);
            window.removeEventListener('resize', onResize);
        };
    }, [isOn, currentScenario, monitorType, pacer.active, pacer.rate, leadSelection]);

    // ──────────────────────────────────────────────
    // Defibrillator handlers
    // ──────────────────────────────────────────────
    const increaseEnergy = useCallback(() => {
        setEnergy(prev => {
            const idx = energyLevels.indexOf(prev);
            return idx < energyLevels.length - 1 ? energyLevels[idx + 1] : prev;
        });
        setIsCharged(false);
        setIsCharging(false);
    }, [energyLevels]);

    const decreaseEnergy = useCallback(() => {
        setEnergy(prev => {
            const idx = energyLevels.indexOf(prev);
            return idx > 0 ? energyLevels[idx - 1] : prev;
        });
        setIsCharged(false);
        setIsCharging(false);
    }, [energyLevels]);

    const handleCharge = useCallback(() => {
        if (isCharging || isCharged) return;
        setIsCharging(true);
        setDefiMessage('CARGANDO...');
        registerEvaluationAction('CHARGE', `Carga solicitada en ${energy}J`, 1, false);
        setTimeout(() => {
            setIsCharging(false);
            setIsCharged(true);
            setDefiMessage(`CARGADO ${energy}J - LISTO`);
        }, 1800);
    }, [isCharging, isCharged, energy, registerEvaluationAction]);

    const handleShock = useCallback(() => {
        if (!isCharged) {
            setDefiMessage('⚠ CARGUE PRIMERO');
            registerEvaluationAction('SHOCK_ATTEMPT', 'Intento de descarga sin cargar', -6, true);
            setTimeout(() => setDefiMessage(''), 2000);
            return;
        }

        if (evaluation.active && evaluation.startedAt) {
            const elapsedSec = Math.round((Date.now() - evaluation.startedAt) / 1000);
            if (currentScenario.isShockable && elapsedSec > HYBRID_PROTOCOL_PROFILE.criticalTimeToFirstShockSec) {
                registerEvaluationAction('SHOCK_DELAY', `Primera descarga tardia (${elapsedSec}s)`, -10, true);
            }
        }

        if (currentScenario.isShockable) {
            const recEnergy = currentScenario.recommendedEnergy ?? energy;
            const withinRange = Math.abs(recEnergy - energy) <= HYBRID_PROTOCOL_PROFILE.energyToleranceJ;
            const points = withinRange ? 12 : 6;
            const detail = withinRange
                ? `Descarga apropiada en ritmo desfibrilable (${energy}J)`
                : `Descarga en ritmo desfibrilable con energia suboptima (${energy}J)`;

            if (syncMode) {
                registerEvaluationAction('SHOCK_SYNC_MISUSE', 'SYNC activo en desfibrilacion de ritmo desfibrilable', -8, true);
            } else {
                registerEvaluationAction('SHOCK_CORRECT', detail, points, false);
            }
        } else if (isCardioversionCandidate) {
            if (HYBRID_PROTOCOL_PROFILE.syncRequiredForCardioversion && !syncMode) {
                registerEvaluationAction('CARDIOVERSION_SYNC_REQUIRED', 'Cardioversion sin sync en ritmo organizado', -14, true);
            } else {
                registerEvaluationAction('CARDIOVERSION_CORRECT', `Cardioversion sincronizada en ${currentScenario.shortName}`, 10, false);
            }
        } else {
            registerEvaluationAction('SHOCK_NON_SHOCKABLE', `Descarga inapropiada en ${currentScenario.shortName}`, -15, true);
        }

        if (isLiveSession && liveSessionId) {
            deliverShock(liveSessionId, energy, syncMode).catch(() => {});
        }

        setShockDelivered(true);
        setIsCharged(false);
        setDefiMessage(`⚡ DESCARGA ${energy}J ENTREGADA`);
        setTimeout(() => {
            setShockDelivered(false);
            setDefiMessage('');
        }, 2500);
    }, [
        isCharged,
        energy,
        syncMode,
        currentScenario,
        isCardioversionCandidate,
        evaluation.active,
        evaluation.startedAt,
        registerEvaluationAction,
        isLiveSession,
        liveSessionId,
        deliverShock,
    ]);

    const toggleSync = useCallback(() => {
        setSyncMode(prev => {
            setDefiMessage(!prev ? 'SYNC ACTIVADO' : 'SYNC DESACTIVADO');
            registerEvaluationAction('SYNC_TOGGLE', !prev ? 'SYNC ON' : 'SYNC OFF', 0, false);
            setTimeout(() => setDefiMessage(''), 1500);
            return !prev;
        });
    }, [registerEvaluationAction]);

    // ──────────────────────────────────────────────
    // Pacer handlers
    // ──────────────────────────────────────────────
    const togglePacer = useCallback(() => {
        setPacer(prev => {
            const nextActive = !prev.active;
            if (nextActive) {
                const pacingRelevant = currentScenario.id === 'avb3' || currentScenario.id === 'sb' || currentScenario.id === 'avb2m2';
                registerEvaluationAction(
                    'PACER_TOGGLE',
                    pacingRelevant ? 'Marcapasos activado en bradiarritmia relevante' : 'Marcapasos activado sin indicacion clara',
                    pacingRelevant ? 6 : -4,
                    !pacingRelevant,
                );
            }
            return { ...prev, active: nextActive };
        });
    }, [currentScenario.id, registerEvaluationAction]);

    const increasePacerRate = useCallback(() => {
        setPacer(prev => ({ ...prev, rate: Math.min(PACER_RATE_MAX, prev.rate + PACER_RATE_STEP) }));
    }, []);
    const decreasePacerRate = useCallback(() => {
        setPacer(prev => ({ ...prev, rate: Math.max(PACER_RATE_MIN, prev.rate - PACER_RATE_STEP) }));
    }, []);
    const increasePacerCurrent = useCallback(() => {
        setPacer(prev => ({ ...prev, current: Math.min(PACER_CURRENT_MAX, prev.current + PACER_CURRENT_STEP) }));
    }, []);
    const decreasePacerCurrent = useCallback(() => {
        setPacer(prev => ({ ...prev, current: Math.max(PACER_CURRENT_MIN, prev.current - PACER_CURRENT_STEP) }));
    }, []);

    const toggleNibpAutoCycle = useCallback(() => {
        setNibp(prev => ({ ...prev, autoCycle: !prev.autoCycle }));
    }, []);

    const cycleNibpInterval = useCallback(() => {
        setNibp(prev => {
            const order = [60, 120, 300];
            const idx = order.indexOf(prev.intervalSec);
            const next = idx >= 0 && idx < order.length - 1 ? order[idx + 1] : order[0];
            return { ...prev, intervalSec: next };
        });
    }, []);

    const createTwelveLeadReport = useCallback((): TwelveLeadReport | null => {
        if (!monitorType) return null;
        return generateTwelveLeadReport(currentScenario.rhythmType, Math.max(20, currentScenario.defaultVitals.hr), monitorType);
    }, [monitorType, currentScenario.rhythmType, currentScenario.defaultVitals.hr]);

    // ──────────────────────────────────────────────
    // Other handlers
    // ──────────────────────────────────────────────
    const togglePower = useCallback(() => setIsOn(prev => !prev), []);
    const toggleAlarmMute = useCallback(() => setAlarmsMuted(prev => !prev), []);
    const toggleSweepSpeed = useCallback(() => setSweepSpeed(prev => (prev === 25 ? 50 : 25)), []);
    const toggleScenarioPanel = useCallback(() => setShowScenarioPanel(prev => !prev), []);
    const toggleInfoPanel = useCallback(() => {
        if (simulationMode === 'evaluation' && evaluation.active) return;
        setShowInfoPanel(prev => !prev);
    }, [simulationMode, evaluation.active]);

    const evaluationElapsedSeconds = evaluation.startedAt
        ? Math.max(0, Math.floor(((evaluation.completed && evaluation.finishedAt ? evaluation.finishedAt : evaluationNow) - evaluation.startedAt) / 1000))
        : 0;

    return {
        // Monitor
        monitorType, setMonitorType, simulationMode, setSimulationMode, isOn, togglePower,
        protocolProfile: HYBRID_PROTOCOL_PROFILE,
        isLiveSession,
        // Scenario
        currentScenario, selectScenario, scenarios: ECG_SCENARIOS,
        // Vitals
        displayVitals,
        // Defibrillator
        energy, isCharging, isCharged, syncMode, shockDelivered, defiMessage,
        increaseEnergy, decreaseEnergy, handleCharge, handleShock, toggleSync,
        // Pacer
        pacer, togglePacer, increasePacerRate, decreasePacerRate, increasePacerCurrent, decreasePacerCurrent,
        // Alarms
        alarms, toggleAlarmMute,
        // Display
        leadSelection, setLeadSelection, sweepSpeed, toggleSweepSpeed,
        nibp, performNibpMeasurement, toggleNibpAutoCycle, cycleNibpInterval,
        createTwelveLeadReport,
        // Panels
        showScenarioPanel, toggleScenarioPanel, showInfoPanel, toggleInfoPanel,
        // Evaluation
        evaluation, evaluationElapsedSeconds, startEvaluation, finishEvaluation, resetEvaluation,
        // Canvas refs
        ecgCanvasRef, plethCanvasRef,
    };
}
