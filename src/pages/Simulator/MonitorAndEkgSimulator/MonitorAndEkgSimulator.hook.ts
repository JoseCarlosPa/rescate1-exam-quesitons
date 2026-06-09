import { useState, useEffect, useRef, useCallback } from 'react';
import type { MonitorType, VitalSigns, EcgScenario, PacerSettings, AlarmState } from './MonitorAndEkgSimulator.types';
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
    generateEcgValue,
    generatePlethValue,
    generatePacerSpike,
} from './MonitorAndEkgSimulator.constants';

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
export default function useMonitorSimulator() {
    // ── Core state ──────────────────────────────
    const [monitorType, setMonitorType] = useState<MonitorType | null>(null);
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
    const [alarms, setAlarms] = useState<AlarmState>({ hrHigh: false, hrLow: false, spo2Low: false, muted: false });

    // ── Display settings ────────────────────────
    const [leadSelection, setLeadSelection] = useState('II');
    const [sweepSpeed, setSweepSpeed] = useState(25);
    const [showScenarioPanel, setShowScenarioPanel] = useState(false);
    const [showInfoPanel, setShowInfoPanel] = useState(false);

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

    // ── Energy levels for current monitor ───────
    const energyLevels = monitorType === 'lifepak' ? LIFEPAK_ENERGY_LEVELS : ZOLL_ENERGY_LEVELS;

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
    }, []);

    // ──────────────────────────────────────────────
    // Vital signs fluctuation
    // ──────────────────────────────────────────────
    useEffect(() => {
        if (!isOn) return;
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
    }, [isOn, currentScenario]);

    // ──────────────────────────────────────────────
    // Alarm evaluation
    // ──────────────────────────────────────────────
    useEffect(() => {
        const hr = displayVitals.hr;
        const spo2 = displayVitals.spo2;
        setAlarms(prev => ({
            ...prev,
            hrHigh: hr > ALARM_THRESHOLDS.hrHigh,
            hrLow: hr > 0 && hr < ALARM_THRESHOLDS.hrLow,
            spo2Low: spo2 > 0 && spo2 < ALARM_THRESHOLDS.spo2Low,
        }));
    }, [displayVitals]);

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

            for (let i = 0; i < advance; i++) {
                timeRef.current += 1 / pixPerSec;
                let val = generateEcgValue(timeRef.current, rhythm, hr);
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
    }, [isOn, currentScenario, monitorType, pacer.active, pacer.rate]);

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
        setTimeout(() => {
            setIsCharging(false);
            setIsCharged(true);
            setDefiMessage(`CARGADO ${energy}J - LISTO`);
        }, 1800);
    }, [isCharging, isCharged, energy]);

    const handleShock = useCallback(() => {
        if (!isCharged) {
            setDefiMessage('⚠ CARGUE PRIMERO');
            setTimeout(() => setDefiMessage(''), 2000);
            return;
        }
        setShockDelivered(true);
        setIsCharged(false);
        setDefiMessage(`⚡ DESCARGA ${energy}J ENTREGADA`);
        setTimeout(() => {
            setShockDelivered(false);
            setDefiMessage('');
        }, 2500);
    }, [isCharged, energy]);

    const toggleSync = useCallback(() => {
        setSyncMode(prev => {
            setDefiMessage(!prev ? 'SYNC ACTIVADO' : 'SYNC DESACTIVADO');
            setTimeout(() => setDefiMessage(''), 1500);
            return !prev;
        });
    }, []);

    // ──────────────────────────────────────────────
    // Pacer handlers
    // ──────────────────────────────────────────────
    const togglePacer = useCallback(() => {
        setPacer(prev => ({ ...prev, active: !prev.active }));
    }, []);

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

    // ──────────────────────────────────────────────
    // Other handlers
    // ──────────────────────────────────────────────
    const togglePower = useCallback(() => setIsOn(prev => !prev), []);
    const toggleAlarmMute = useCallback(() => setAlarms(prev => ({ ...prev, muted: !prev.muted })), []);
    const toggleSweepSpeed = useCallback(() => setSweepSpeed(prev => (prev === 25 ? 50 : 25)), []);
    const toggleScenarioPanel = useCallback(() => setShowScenarioPanel(prev => !prev), []);
    const toggleInfoPanel = useCallback(() => setShowInfoPanel(prev => !prev), []);

    return {
        // Monitor
        monitorType, setMonitorType, isOn, togglePower,
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
        // Panels
        showScenarioPanel, toggleScenarioPanel, showInfoPanel, toggleInfoPanel,
        // Canvas refs
        ecgCanvasRef, plethCanvasRef,
    };
}
