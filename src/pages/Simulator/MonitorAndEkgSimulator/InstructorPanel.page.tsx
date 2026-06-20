import { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { toast } from 'sonner';
import { FaArrowLeft, FaCopy, FaStop, FaBolt, FaCheck, FaTimes, FaUndo, FaQrcode } from 'react-icons/fa';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { useEkgSession } from './useEkgSession.hook';
import { ECG_SCENARIOS } from './MonitorAndEkgSimulator.constants';
import type { MonitorType, RhythmType, VitalSigns, ScenarioCategory } from './MonitorAndEkgSimulator.types';
import type { SessionScenario } from './useEkgSession.hook';

const categoryLabels: Record<ScenarioCategory, string> = {
    normal: '🟢 Normales / Seno',
    atrial: '🟡 Auriculares',
    ventricular: '🔴 Ventriculares',
    block: '🟠 Bloqueos AV',
    arrest: '⚫ Paro Cardíaco',
};
const categoryOrder: ScenarioCategory[] = ['normal', 'atrial', 'ventricular', 'block', 'arrest'];

const VITAL_RANGES: Record<keyof VitalSigns, { min: number; max: number; step: number; label: string; unit: string }> = {
    hr: { min: 0, max: 280, step: 5, label: 'FC', unit: 'bpm' },
    spo2: { min: 0, max: 100, step: 1, label: 'SpO2', unit: '%' },
    systolic: { min: 0, max: 260, step: 5, label: 'TAS', unit: 'mmHg' },
    diastolic: { min: 0, max: 180, step: 5, label: 'TAD', unit: 'mmHg' },
    rr: { min: 0, max: 60, step: 1, label: 'FR', unit: '/min' },
    etco2: { min: 0, max: 80, step: 1, label: 'EtCO2', unit: 'mmHg' },
    temp: { min: 32, max: 42, step: 0.1, label: 'Temp', unit: '°C' },
};

const VITAL_KEYS = Object.keys(VITAL_RANGES) as (keyof VitalSigns)[];

const VITAL_PRESETS: { label: string; emoji: string; vitals: Partial<VitalSigns> }[] = [
    { label: 'Normal', emoji: '🟢', vitals: { hr: 75, spo2: 98, systolic: 120, diastolic: 80, rr: 16, etco2: 38, temp: 36.8 } },
    { label: 'Shock', emoji: '🔴', vitals: { hr: 130, spo2: 88, systolic: 70, diastolic: 40, rr: 28, etco2: 20, temp: 35.5 } },
    { label: 'Bradicardia', emoji: '🟡', vitals: { hr: 38, spo2: 94, systolic: 90, diastolic: 60, rr: 14, etco2: 35, temp: 36.5 } },
    { label: 'Paro', emoji: '⚫', vitals: { hr: 0, spo2: 0, systolic: 0, diastolic: 0, rr: 0, etco2: 0, temp: 35.0 } },
];

export default function InstructorPanel() {
    const navigate = useNavigate();
    const {
        sessionId,
        sessionData,
        sessionLoading,
        sessionError,
        createSession,
        updateScenario,
        acknowledgeShock,
        endSession,
    } = useEkgSession();

    const [monitorType, setMonitorType] = useState<MonitorType>('zoll');
    const [isCreating, setIsCreating] = useState(false);
    const [localVitals, setLocalVitals] = useState<VitalSigns>(ECG_SCENARIOS[0].defaultVitals);
    const [localRhythm, setLocalRhythm] = useState<RhythmType>(ECG_SCENARIOS[0].rhythmType);
    const [selectedRhythmForAck, setSelectedRhythmForAck] = useState<RhythmType>('normal_sinus');
    const [showQr, setShowQr] = useState(false);
    const vitalsDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const studentUrl = sessionId
        ? `${window.location.origin}${AllRoutes.ECG_MONITOR_SIMULATOR}?session=${sessionId}`
        : '';

    const handleCreate = async () => {
        setIsCreating(true);
        try {
            const initial: SessionScenario = {
                rhythmType: ECG_SCENARIOS[0].rhythmType,
                vitals: ECG_SCENARIOS[0].defaultVitals,
            };
            await createSession(monitorType, initial);
            setLocalVitals(ECG_SCENARIOS[0].defaultVitals);
            setLocalRhythm(ECG_SCENARIOS[0].rhythmType);
        } catch {
            toast.error('No se pudo crear la sesión');
        } finally {
            setIsCreating(false);
        }
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(studentUrl).then(() => {
            toast.success('Link copiado al portapapeles');
        });
    };

    const handleEnd = async () => {
        if (!sessionId) return;
        await endSession(sessionId);
        navigate(AllRoutes.ECG_MONITOR_SIMULATOR);
    };

    const pushScenarioUpdate = useCallback((update: SessionScenario) => {
        if (!sessionId) return;
        updateScenario(sessionId, update).catch(() => toast.error('Error actualizando escenario'));
    }, [sessionId, updateScenario]);

    const handleScenarioSelect = (rhythmType: RhythmType, vitals: VitalSigns) => {
        setLocalRhythm(rhythmType);
        setLocalVitals(vitals);
        pushScenarioUpdate({ rhythmType, vitals });
    };

    const handleVitalChange = (key: keyof VitalSigns, value: number) => {
        const next = { ...localVitals, [key]: value };
        setLocalVitals(next);
        if (vitalsDebounceRef.current) clearTimeout(vitalsDebounceRef.current);
        vitalsDebounceRef.current = setTimeout(() => {
            pushScenarioUpdate({ rhythmType: localRhythm, vitals: next });
        }, 400);
    };

    const handleApplyPreset = (preset: Partial<VitalSigns>) => {
        const next = { ...localVitals, ...preset };
        setLocalVitals(next);
        pushScenarioUpdate({ rhythmType: localRhythm, vitals: next });
    };

    const handleResetVitals = () => {
        const scenario = ECG_SCENARIOS.find(s => s.rhythmType === localRhythm);
        if (!scenario) return;
        setLocalVitals(scenario.defaultVitals);
        pushScenarioUpdate({ rhythmType: localRhythm, vitals: scenario.defaultVitals });
    };

    const handleAckConvert = (rhythm: RhythmType | null) => {
        if (!sessionId) return;
        acknowledgeShock(sessionId, rhythm).catch(() => toast.error('Error al confirmar descarga'));
        if (rhythm) {
            setLocalRhythm(rhythm);
            const scenario = ECG_SCENARIOS.find(s => s.rhythmType === rhythm);
            if (scenario) setLocalVitals(scenario.defaultVitals);
        }
    };

    useEffect(() => {
        if (sessionData?.scenario) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLocalRhythm(sessionData.scenario.rhythmType);
        }
    }, [sessionData?.scenario?.rhythmType]);

    const pendingShock = sessionData?.pendingShock ?? null;
    const currentScenario = ECG_SCENARIOS.find(s => s.rhythmType === localRhythm) ?? ECG_SCENARIOS[0];

    // ── Setup screen ──────────────────────────────────────
    if (!sessionId) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-slate-800/80 border border-slate-700 rounded-2xl p-8 space-y-6">
                    <div className="flex items-center gap-3">
                        <NavLink to={AllRoutes.ECG_MONITOR_SIMULATOR} className="text-gray-400 hover:text-white">
                            <FaArrowLeft />
                        </NavLink>
                        <h1 className="text-white text-xl font-bold">Panel del Instructor</h1>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm mb-3">Modelo de monitor para los alumnos</p>
                        <div className="grid grid-cols-2 gap-3">
                            {(['zoll', 'lifepak'] as MonitorType[]).map(m => (
                                <button
                                    key={m}
                                    onClick={() => setMonitorType(m)}
                                    className={`py-3 rounded-xl font-bold text-sm transition-all border ${monitorType === m ? (m === 'zoll' ? 'bg-blue-600 border-blue-400 text-white' : 'bg-amber-600 border-amber-400 text-white') : 'bg-slate-700 border-slate-600 text-gray-300 hover:text-white'}`}
                                >
                                    {m === 'zoll' ? 'ZOLL X Series' : 'LIFEPAK 15'}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleCreate}
                        disabled={isCreating}
                        className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all disabled:opacity-50"
                    >
                        {isCreating ? 'Creando sesión...' : 'Crear sesión'}
                    </button>
                </div>
            </div>
        );
    }

    // ── Active session ────────────────────────────────────
    return (
        <div className="min-h-screen bg-[#0c1220] flex flex-col">
            {/* Header */}
            <div className="bg-[#0e1828] border-b border-blue-900/40 px-4 py-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                    <NavLink to={AllRoutes.ECG_MONITOR_SIMULATOR} className="text-gray-400 hover:text-white text-sm">
                        <FaArrowLeft />
                    </NavLink>
                    <span className="text-emerald-400 font-bold text-sm">Panel Instructor</span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-900/40 border border-emerald-600/30 text-emerald-300 font-mono font-bold text-sm tracking-widest">
                        {sessionId}
                    </span>
                    {sessionLoading && <span className="text-xs text-gray-500 animate-pulse">Conectando...</span>}
                    {sessionError && <span className="text-xs text-red-400">{sessionError}</span>}
                </div>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setShowQr(v => !v)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${showQr ? 'bg-emerald-700 text-white' : 'bg-gray-700 text-gray-300 hover:text-white'}`}
                    >
                        <FaQrcode className="text-xs" />
                        QR
                    </button>
                    <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-700/60 text-blue-200 hover:text-white text-xs font-bold transition-all"
                    >
                        <FaCopy className="text-xs" />
                        Copiar link
                    </button>
                    <button
                        onClick={handleEnd}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-900/50 text-red-300 hover:text-white text-xs font-bold transition-all"
                    >
                        <FaStop className="text-xs" />
                        Terminar
                    </button>
                </div>
            </div>

            {/* Shock pending banner */}
            {pendingShock && (
                <div className="bg-red-700 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3 animate-pulse">
                    <div className="flex items-center gap-2">
                        <FaBolt className="text-yellow-300" />
                        <span className="font-bold text-sm">
                            Descarga de {pendingShock.energy}J {pendingShock.sync ? '(SYNC)' : ''} entregada
                            &nbsp;—&nbsp;Ritmo actual: <span className="text-yellow-200">{currentScenario.shortName}</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleAckConvert('normal_sinus')}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-bold transition-all"
                        >
                            <FaCheck /> Convertir a RSN
                        </button>
                        <select
                            value={selectedRhythmForAck}
                            onChange={e => setSelectedRhythmForAck(e.target.value as RhythmType)}
                            className="px-2 py-1.5 rounded-lg bg-slate-800 text-gray-200 text-xs font-bold"
                        >
                            {ECG_SCENARIOS.map(s => (
                                <option key={s.id} value={s.rhythmType}>{s.shortName}</option>
                            ))}
                        </select>
                        <button
                            onClick={() => handleAckConvert(selectedRhythmForAck)}
                            className="px-3 py-1.5 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white text-xs font-bold transition-all"
                        >
                            Cambiar a seleccionado
                        </button>
                        <button
                            onClick={() => handleAckConvert(null)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-600 text-gray-200 text-xs font-bold transition-all"
                        >
                            <FaTimes /> Sin cambio
                        </button>
                    </div>
                </div>
            )}

            {/* Main 3-column layout */}
            <div className="flex flex-1 overflow-hidden">

                {/* Left: Scenario list */}
                <div className="w-64 flex-shrink-0 overflow-y-auto border-r border-blue-900/30 bg-[#0e1828] p-3">
                    <h2 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3">Escenarios ECG</h2>
                    {categoryOrder.map(cat => {
                        const catScenarios = ECG_SCENARIOS.filter(s => s.category === cat);
                        if (!catScenarios.length) return null;
                        return (
                            <div key={cat} className="mb-4">
                                <p className="text-gray-600 text-[9px] font-bold uppercase tracking-widest mb-1.5">{categoryLabels[cat]}</p>
                                <div className="space-y-1">
                                    {catScenarios.map(s => (
                                        <button
                                            key={s.id}
                                            onClick={() => handleScenarioSelect(s.rhythmType, s.defaultVitals)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2 ${localRhythm === s.rhythmType
                                                ? 'bg-emerald-600/30 text-emerald-300 ring-1 ring-emerald-500/30'
                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                            }`}
                                        >
                                            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.isShockable ? 'bg-red-500' : 'bg-green-500'}`} />
                                            <span className="font-semibold truncate">{s.shortName}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Center: Current scenario info */}
                <div className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto">
                    <div className="bg-[#0e1828] border border-blue-900/30 rounded-xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`w-2 h-2 rounded-full ${currentScenario.isShockable ? 'bg-red-500' : 'bg-green-500'}`} />
                            <h2 className="text-white font-bold">{currentScenario.name}</h2>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${currentScenario.isShockable ? 'bg-red-900/40 text-red-400' : 'bg-green-900/40 text-green-400'}`}>
                                {currentScenario.isShockable ? 'Desfibrilable' : 'No desfibrilable'}
                            </span>
                        </div>
                        <p className="text-gray-400 text-xs mb-3">{currentScenario.description}</p>
                        <div className="grid md:grid-cols-2 gap-3">
                            <div>
                                <h4 className="text-green-400 text-[10px] font-bold uppercase tracking-wider mb-1">Criterios Diagnósticos</h4>
                                <p className="text-gray-300 text-xs leading-relaxed">{currentScenario.clinicalNotes}</p>
                            </div>
                            <div>
                                <h4 className="text-orange-400 text-[10px] font-bold uppercase tracking-wider mb-1">Manejo ACLS</h4>
                                <p className="text-gray-300 text-xs leading-relaxed">{currentScenario.aclsManagement}</p>
                            </div>
                        </div>
                        {currentScenario.recommendedEnergy && (
                            <div className="mt-3 bg-orange-900/20 rounded-lg p-2 border border-orange-800/30">
                                <span className="text-orange-400 text-xs font-bold">⚡ Energía recomendada: {currentScenario.recommendedEnergy}J</span>
                            </div>
                        )}
                    </div>

                    {/* Link display */}
                    <div className="bg-[#0e1828] border border-blue-900/30 rounded-xl p-3">
                        <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">Link para alumno</p>
                        <div className="flex items-center gap-2">
                            <code className="flex-1 text-xs text-emerald-300 bg-black/30 rounded px-2 py-1 truncate">{studentUrl}</code>
                            <button onClick={handleCopyLink} className="px-3 py-1.5 rounded-lg bg-blue-700/60 text-blue-200 hover:text-white text-xs font-bold transition-all flex items-center gap-1 shrink-0">
                                <FaCopy className="text-xs" /> Copiar
                            </button>
                        </div>
                        {showQr && (
                            <div className="mt-3 flex flex-col items-center gap-2">
                                <p className="text-gray-500 text-[10px]">Escanear para abrir en otro dispositivo</p>
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(studentUrl)}`}
                                    alt="QR para el alumno"
                                    className="rounded-lg border border-white/10"
                                    width={180}
                                    height={180}
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Vitals editor */}
                <div className="w-72 flex-shrink-0 overflow-y-auto border-l border-blue-900/30 bg-[#0e1828] p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Vitales en tiempo real</h2>
                        <button
                            onClick={handleResetVitals}
                            title="Restaurar valores del escenario"
                            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-gray-700 text-gray-400 hover:text-white text-[10px] font-bold transition-all"
                        >
                            <FaUndo className="text-[9px]" /> Reset
                        </button>
                    </div>
                    {/* Presets rápidos */}
                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                        {VITAL_PRESETS.map(p => (
                            <button
                                key={p.label}
                                onClick={() => handleApplyPreset(p.vitals)}
                                className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-slate-700/60 hover:bg-slate-600/60 text-gray-300 hover:text-white text-[10px] font-bold transition-all border border-slate-600/30"
                            >
                                <span>{p.emoji}</span> {p.label}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-4">
                        {VITAL_KEYS.map(key => {
                            const cfg = VITAL_RANGES[key];
                            const val = localVitals[key];
                            return (
                                <div key={key}>
                                    <div className="flex items-center justify-between mb-1">
                                        <label className="text-gray-300 text-xs font-bold">{cfg.label}</label>
                                        <span className="text-emerald-400 font-mono font-bold text-sm">
                                            {typeof val === 'number' ? (key === 'temp' ? val.toFixed(1) : val) : val} <span className="text-gray-500 text-[10px]">{cfg.unit}</span>
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min={cfg.min}
                                        max={cfg.max}
                                        step={cfg.step}
                                        value={val}
                                        onChange={e => handleVitalChange(key, parseFloat(e.target.value))}
                                        className="w-full accent-emerald-500"
                                    />
                                    <div className="flex justify-between text-[9px] text-gray-600">
                                        <span>{cfg.min}</span><span>{cfg.max}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
