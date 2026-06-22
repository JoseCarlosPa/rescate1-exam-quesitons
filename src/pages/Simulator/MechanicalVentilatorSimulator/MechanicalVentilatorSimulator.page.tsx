import { LineChart, Line, ResponsiveContainer, YAxis, ReferenceLine } from 'recharts';
import { GiLungs } from 'react-icons/gi';
import { useNavigate } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import useMechanicalVentilatorSimulator from './MechanicalVentilatorSimulator.hook';
import type { IERatio, VentilationMode } from './MechanicalVentilatorSimulator.types';
import { IE_RATIO_OPTIONS } from './MechanicalVentilatorSimulator.constants';

// ─── Sub-components ───────────────────────────────────────────────────────────

function MetricChip({
    label, value, unit, highlight = false,
}: { label: string; value: string | number; unit: string; highlight?: boolean }) {
    return (
        <div className={`flex flex-col items-center justify-center py-2 px-1 border-r border-[#1e3a5f] last:border-r-0 ${highlight ? 'bg-red-900/30' : ''}`}>
            <span className="text-[8px] uppercase tracking-widest text-slate-500 leading-none mb-0.5">{label}</span>
            <span className={`text-lg font-bold font-mono leading-none ${highlight ? 'text-red-400 animate-pulse' : 'text-white'}`}>{value}</span>
            <span className="text-[8px] text-slate-600 leading-none mt-0.5">{unit}</span>
        </div>
    );
}

function LungAnimation({ inflation, active }: { inflation: number; active: boolean }) {
    const clamped = Math.max(0, Math.min(1, inflation));
    const scale = 1 + 0.2 * clamped;
    const hue = 250 + clamped * 20;
    const sat = active ? 40 + clamped * 25 : 15;
    const lit = active ? 22 + clamped * 18 : 15;
    const lungFill = `hsl(${hue}, ${sat}%, ${lit}%)`;
    const strokeColor = active ? `hsl(${hue}, ${sat + 10}%, ${lit + 20}%)` : '#334155';
    const airwayColor = active ? '#60a5fa' : '#475569';

    return (
        <svg viewBox="0 0 200 150" className="w-full" style={{ maxHeight: '130px' }}>
            {/* Trachea */}
            <rect x="96" y="4" width="8" height="26" rx="4" fill={airwayColor} />
            {/* Left bronchus */}
            <path d="M 96 28 C 86 36, 78 46, 75 60" stroke={airwayColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />
            {/* Right bronchus */}
            <path d="M 104 28 C 114 36, 122 46, 125 60" stroke={airwayColor} strokeWidth="4.5" fill="none" strokeLinecap="round" />

            {/* Left lung – scales from hilum at ~(75, 88) */}
            <g style={{ transform: `translate(75px, 88px) scale(${scale}) translate(-75px, -88px)`, transition: 'transform 0.12s ease-out' }}>
                <path
                    d="M 75 60 C 75 56, 63 48, 44 50 C 26 52, 16 67, 16 84 C 16 104, 28 124, 49 134 C 61 139, 74 136, 78 127 L 75 60 Z"
                    fill={lungFill}
                    stroke={strokeColor}
                    strokeWidth="1.5"
                />
                {active && (
                    <path
                        d="M 46 70 C 50 80, 55 90, 58 105"
                        stroke={strokeColor}
                        strokeWidth="0.8"
                        fill="none"
                        opacity="0.6"
                    />
                )}
            </g>

            {/* Right lung – scales from hilum at ~(125, 88) */}
            <g style={{ transform: `translate(125px, 88px) scale(${scale}) translate(-125px, -88px)`, transition: 'transform 0.12s ease-out' }}>
                <path
                    d="M 125 60 C 125 56, 137 48, 156 50 C 174 52, 184 67, 184 84 C 184 104, 172 124, 151 134 C 139 139, 126 136, 122 127 L 125 60 Z"
                    fill={lungFill}
                    stroke={strokeColor}
                    strokeWidth="1.5"
                />
                {active && (
                    <>
                        <path d="M 154 70 C 150 80, 145 90, 142 105" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.6" />
                        <path d="M 164 82 C 160 90, 154 98, 150 112" stroke={strokeColor} strokeWidth="0.8" fill="none" opacity="0.6" />
                    </>
                )}
            </g>

            {active && (
                <circle cx="100" cy="146" r="2.5" fill={clamped > 0.3 ? '#60a5fa' : '#475569'} />
            )}
        </svg>
    );
}

function ParamBlock({ label, value, unit }: { label: string; value: string | number; unit: string }) {
    return (
        <div className="flex flex-col items-center justify-center bg-[#0a1628] border border-[#1e3a5f] rounded p-1.5 shadow-inner">
            <span className="text-[8px] uppercase tracking-wider text-slate-600 leading-none">{label}</span>
            <span className="text-sm font-bold font-mono text-slate-200 leading-tight mt-0.5">{value}</span>
            <span className="text-[8px] text-slate-700 leading-none">{unit}</span>
        </div>
    );
}

function ParamDial({
    label, value, unit, onDecrement, onIncrement, disabled = false, warning = false,
}: {
    label: string; value: string | number; unit: string;
    onDecrement: () => void; onIncrement: () => void;
    disabled?: boolean; warning?: boolean;
}) {
    return (
        <div className={`flex flex-col items-center rounded-xl border p-3 ${warning ? 'border-amber-400 bg-amber-50' : 'border-gray-200 bg-gray-50'}`}>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">{label}</span>
            <span className={`text-2xl font-bold font-mono my-1 ${warning ? 'text-amber-600' : 'text-gray-800'}`}>{value}</span>
            <span className="text-[10px] text-gray-400 mb-2">{unit}</span>
            <div className="flex gap-2">
                <button
                    onClick={onDecrement}
                    disabled={disabled}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 active:scale-95 disabled:opacity-30 font-bold text-gray-600 flex items-center justify-center text-xl leading-none transition-all"
                >−</button>
                <button
                    onClick={onIncrement}
                    disabled={disabled}
                    className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-30 font-bold text-white flex items-center justify-center text-xl leading-none transition-all"
                >+</button>
            </div>
        </div>
    );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function MechanicalVentilatorSimulator() {
    const navigate = useNavigate();
    const vm = useMechanicalVentilatorSimulator();

    const lastPoint = vm.waveformData[vm.waveformData.length - 1];
    const inflation = vm.derivedMetrics.activeVtMl > 0
        ? Math.max(0, Math.min(1, (lastPoint?.volume ?? 0) / vm.derivedMetrics.activeVtMl))
        : 0;

    const pMean = Math.round(
        (vm.peepCmH2O + (vm.derivedMetrics.pipCmH2O - vm.peepCmH2O) / (1 + vm.derivedMetrics.ieRatioNum)) * 10,
    ) / 10;

    const isRunning = vm.ventStatus === 'running' || vm.ventStatus === 'alarming';
    const isAlarming = vm.ventStatus === 'alarming';

    const statusColor = {
        off: 'bg-gray-500',
        standby: 'bg-yellow-500',
        running: 'bg-emerald-500',
        alarming: 'bg-red-500 animate-pulse',
    }[vm.ventStatus];

    const statusLabel = {
        off: 'APAGADO',
        standby: 'EN ESPERA',
        running: 'VENTILANDO',
        alarming: 'ALARMA',
    }[vm.ventStatus];

    const evalElapsed = vm.evaluationElapsedSeconds;

    const pressureMax = Math.max(vm.pipLimitCmH2O + 5, 35);

    const adj = {
        vt: (d: number) => vm.setTidalVolumeMl(Math.max(100, Math.min(2000, vm.tidalVolumeMl + d))),
        rr: (d: number) => vm.setRrPerMin(Math.max(4, Math.min(40, vm.rrPerMin + d))),
        peep: (d: number) => vm.setPeepCmH2O(Math.max(0, Math.min(20, vm.peepCmH2O + d))),
        fio2: (d: number) => vm.setFio2Percent(Math.max(21, Math.min(100, vm.fio2Percent + d))),
        pip: (d: number) => vm.setPipLimitCmH2O(Math.max(10, Math.min(80, vm.pipLimitCmH2O + d))),
        drive: (d: number) => vm.setDrivingPressureCmH2O(Math.max(4, Math.min(60, vm.drivingPressureCmH2O + d))),
        height: (d: number) => vm.setHeightCm(Math.max(140, Math.min(210, vm.heightCm + d))),
        weight: (d: number) => vm.setWeightKg(Math.max(30, Math.min(200, vm.weightKg + d))),
    };

    const modeLabels: Record<VentilationMode, string> = {
        'vc-ac': 'VC-AC',
        'pc-ac': 'PC-AC',
        'simv-vc': 'SIMV',
        'cpap-ps': 'CPAP/PS',
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm px-6 py-3 flex items-center gap-3 flex-shrink-0">
                <button
                    onClick={() => navigate(AllRoutes.SIMULATOR)}
                    className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1 mr-2 transition-colors"
                >
                    ← Volver
                </button>
                <GiLungs className="text-blue-600 text-3xl flex-shrink-0" />
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-gray-900 leading-tight">Ventilador Mecánico</h1>
                    <p className="text-xs text-gray-400">Simulador prehospitalario · Zoll Eagle II / LTV 1200</p>
                </div>
                <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${statusColor}`}>
                    {statusLabel}
                </span>
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${vm.simulationMode === 'evaluation' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                    {vm.simulationMode === 'evaluation' ? 'Evaluación' : 'Práctica'}
                </span>
            </header>

            <main className="flex-1 grid xl:grid-cols-3 min-h-0">
                {/* ─── Left panel ───────────────────────────────────────────── */}
                <section className="xl:col-span-2 bg-white p-5 overflow-y-auto border-r border-gray-200 space-y-5">

                    {/* Simulation mode */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-600">Modo:</span>
                        {(['practice', 'evaluation'] as const).map((m) => (
                            <button
                                key={m}
                                onClick={() => vm.setSimulationMode(m)}
                                disabled={isRunning}
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all disabled:opacity-40 ${
                                    vm.simulationMode === m
                                        ? m === 'evaluation' ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                                {m === 'practice' ? 'Práctica' : 'Evaluación'}
                            </button>
                        ))}
                    </div>

                    {/* Evaluation controls */}
                    {vm.simulationMode === 'evaluation' && (
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-purple-800">Evaluación</span>
                                    {vm.evaluation.active && (
                                        <span className="font-mono text-lg font-bold text-purple-700">
                                            {String(Math.floor(evalElapsed / 60)).padStart(2, '0')}:
                                            {String(evalElapsed % 60).padStart(2, '0')}
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-2">
                                    {!vm.evaluation.active && !vm.evaluation.completed && (
                                        <button onClick={vm.startEvaluation} className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                                            Iniciar
                                        </button>
                                    )}
                                    {vm.evaluation.active && !vm.evaluation.completed && (
                                        <button onClick={vm.finishEvaluation} className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors">
                                            Finalizar
                                        </button>
                                    )}
                                    {vm.evaluation.completed && (
                                        <button onClick={vm.resetEvaluation} className="px-3 py-1.5 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
                                            Nueva
                                        </button>
                                    )}
                                </div>
                            </div>
                            {vm.evaluation.completed && (
                                <div className="mt-3 border-t border-purple-200 pt-3 space-y-2">
                                    <p className="font-bold text-purple-900">
                                        Puntaje final: {vm.evaluation.score}/100
                                        {vm.evaluation.criticalErrors > 0 && (
                                            <span className="text-red-600 ml-2">({vm.evaluation.criticalErrors} error(es) crítico(s))</span>
                                        )}
                                    </p>
                                    <div className="max-h-40 overflow-y-auto space-y-1">
                                        {vm.evaluation.events.map((ev) => (
                                            <div key={ev.id} className={`flex justify-between text-xs px-2 py-1 rounded ${ev.points >= 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                                <span>{ev.detail}</span>
                                                <span className="font-bold">{ev.points >= 0 ? `+${ev.points}` : ev.points}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Patient profile */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Paciente</h3>
                        <div className="grid grid-cols-4 gap-3">
                            <ParamDial label="Talla" value={vm.heightCm} unit="cm"
                                onDecrement={() => adj.height(-5)} onIncrement={() => adj.height(5)} />
                            <ParamDial label="Peso" value={vm.weightKg} unit="kg"
                                onDecrement={() => adj.weight(-5)} onIncrement={() => adj.weight(5)} />
                            <div className="flex flex-col items-center rounded-xl border border-gray-200 bg-gray-50 p-3">
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-400">Sexo</span>
                                <div className="flex flex-col gap-1 mt-2">
                                    {(['male', 'female'] as const).map((s) => (
                                        <button key={s} onClick={() => vm.setPatientSex(s)}
                                            className={`px-3 py-0.5 rounded-full text-xs font-medium transition-all ${vm.patientSex === s ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
                                            {s === 'male' ? 'M' : 'F'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-slate-50 p-3">
                                <span className="text-[10px] uppercase tracking-widest text-gray-400">IBW</span>
                                <span className="text-2xl font-bold font-mono text-gray-800 my-1">{vm.ibwKg.toFixed(1)}</span>
                                <span className="text-[10px] text-gray-400">kg</span>
                            </div>
                        </div>
                    </div>

                    {/* Ventilation mode */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Modo ventilatorio</h3>
                        <div className="flex flex-wrap gap-2">
                            {(['vc-ac', 'pc-ac', 'simv-vc', 'cpap-ps'] as VentilationMode[]).map((m) => (
                                <button key={m} onClick={() => vm.setVentMode(m)} disabled={isRunning}
                                    className={`px-4 py-2 rounded-lg text-sm font-bold tracking-wide transition-all disabled:opacity-40 ${
                                        vm.ventMode === m ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}>
                                    {modeLabels[m]}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* I:E ratio */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Relación I:E</h3>
                        <div className="flex gap-2">
                            {IE_RATIO_OPTIONS.map((r: IERatio) => (
                                <button key={r} onClick={() => vm.setIeRatio(r)} disabled={isRunning}
                                    className={`px-3 py-1.5 rounded-lg text-sm font-mono font-bold transition-all disabled:opacity-40 ${
                                        vm.ieRatio === r ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}>
                                    {r}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Parameter dials */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                            Parámetros {vm.ventMode === 'pc-ac' ? '(Presión control)' : '(Volumen control)'}
                        </h3>
                        <div className="grid grid-cols-3 lg:grid-cols-5 gap-3">
                            {vm.ventMode !== 'pc-ac' ? (
                                <ParamDial label="Vt" value={vm.tidalVolumeMl} unit="mL"
                                    onDecrement={() => adj.vt(-25)} onIncrement={() => adj.vt(25)}
                                    warning={vm.derivedMetrics.vtPerIbwKg > 8} />
                            ) : (
                                <ParamDial label="P Drive" value={vm.drivingPressureCmH2O} unit="cmH₂O"
                                    onDecrement={() => adj.drive(-2)} onIncrement={() => adj.drive(2)} />
                            )}
                            <ParamDial label="FR" value={vm.rrPerMin} unit="/min"
                                onDecrement={() => adj.rr(-1)} onIncrement={() => adj.rr(1)} />
                            <ParamDial label="PEEP" value={vm.peepCmH2O} unit="cmH₂O"
                                onDecrement={() => adj.peep(-1)} onIncrement={() => adj.peep(1)} />
                            <ParamDial label="FiO₂" value={`${vm.fio2Percent}%`} unit=""
                                onDecrement={() => adj.fio2(-5)} onIncrement={() => adj.fio2(5)} />
                            <ParamDial label="Lím PIP" value={vm.pipLimitCmH2O} unit="cmH₂O"
                                onDecrement={() => adj.pip(-5)} onIncrement={() => adj.pip(5)} />
                        </div>
                    </div>

                    {/* Derived metrics */}
                    <div className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                        <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">Métricas derivadas</h3>
                        <div className="grid grid-cols-4 gap-3">
                            {[
                                { label: 'PIP', value: vm.derivedMetrics.pipCmH2O, unit: 'cmH₂O', warn: vm.derivedMetrics.pipCmH2O > vm.pipLimitCmH2O },
                                { label: 'Plateau', value: vm.derivedMetrics.plateauCmH2O, unit: 'cmH₂O', warn: vm.derivedMetrics.plateauCmH2O > 30 },
                                { label: 'VM', value: vm.derivedMetrics.minuteVentilationLMin.toFixed(1), unit: 'L/min', warn: false },
                                { label: 'Vt/IBW', value: vm.derivedMetrics.vtPerIbwKg, unit: 'mL/kg', warn: vm.derivedMetrics.vtPerIbwKg > 8 },
                            ].map((m) => (
                                <div key={m.label} className={`flex flex-col items-center rounded-lg p-2 ${m.warn ? 'bg-amber-100 border border-amber-300' : 'bg-white border border-gray-200'}`}>
                                    <span className="text-xs text-gray-500">{m.label}</span>
                                    <span className={`text-xl font-bold font-mono ${m.warn ? 'text-amber-600' : 'text-gray-800'}`}>{m.value}</span>
                                    <span className="text-xs text-gray-400">{m.unit}</span>
                                </div>
                            ))}
                        </div>
                        {vm.simulationMode === 'practice' && vm.derivedMetrics.vtPerIbwKg > 8 && (
                            <p className="text-xs text-amber-700 bg-amber-100 rounded px-2 py-1 mt-2">
                                ⚠ Vt/IBW &gt; 8 mL/kg — Riesgo de volutrauma. Reducir Vt.
                            </p>
                        )}
                        {vm.simulationMode === 'practice' && vm.derivedMetrics.plateauCmH2O > 30 && (
                            <p className="text-xs text-amber-700 bg-amber-100 rounded px-2 py-1 mt-1">
                                ⚠ Plateau &gt; 30 cmH₂O — Riesgo de barotrauma. Reducir Vt o I:E.
                            </p>
                        )}
                    </div>

                    {/* Lung model */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Modelo pulmonar</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {vm.lungModels.map((m) => (
                                <button key={m.id} onClick={() => vm.setLungModel(m.id)}
                                    className={`text-left px-3 py-2 rounded-lg border text-sm transition-all ${
                                        vm.activeLungModelId === m.id
                                            ? 'border-blue-500 bg-blue-50 text-blue-800 font-semibold'
                                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                                    }`}>
                                    <p className="font-medium">{m.label}</p>
                                    <p className="text-xs text-gray-400">C {m.complianceMlCmH2O} · R {m.resistanceCmH2OLSec}</p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Safety checklist */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide flex items-center gap-2">
                            Checklist de seguridad
                            {vm.checklistReady
                                ? <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Listo</span>
                                : <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">Incompleto</span>}
                        </h3>
                        <div className="space-y-2">
                            {vm.checklistItems.map((item) => (
                                <label key={item.id} className="flex items-center gap-3 cursor-pointer select-none">
                                    <input type="checkbox" checked={item.checked}
                                        onChange={() => vm.toggleChecklistItem(item.id)}
                                        className="w-4 h-4 rounded accent-blue-600" />
                                    <span className={`text-sm ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{item.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Control buttons */}
                    <div className="flex flex-wrap gap-3">
                        <button
                            onClick={vm.startVentilation}
                            disabled={isRunning || !vm.checklistReady}
                            className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 active:scale-95 disabled:opacity-30 transition-all shadow-md"
                        >
                            Iniciar ventilación
                        </button>
                        {vm.ventStatus === 'running' && (
                            <button onClick={vm.pauseVentilation}
                                className="px-5 py-3 bg-yellow-500 text-white font-bold rounded-xl hover:bg-yellow-600 active:scale-95 transition-all">
                                Pausar
                            </button>
                        )}
                        {vm.ventStatus === 'standby' && vm.waveformData.length > 0 && (
                            <button onClick={vm.resumeVentilation}
                                className="px-5 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 active:scale-95 transition-all">
                                Reanudar
                            </button>
                        )}
                        {(isRunning || vm.waveformData.length > 0) && (
                            <button onClick={vm.stopVentilation}
                                className="px-5 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 active:scale-95 transition-all">
                                Detener
                            </button>
                        )}
                    </div>

                    {/* Fault injection */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Panel de fallas (entrenamiento)</h3>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: 'high-pip', label: 'Presión pico alta' },
                                { id: 'low-pressure', label: 'Desconexión circuito' },
                                { id: 'apnea', label: 'Apnea detectada' },
                            ].map((f) => {
                                const alarm = vm.alarms.find((a) => a.id === f.id);
                                return (
                                    <button key={f.id} onClick={() => vm.toggleAlarm(f.id)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                            alarm?.active
                                                ? 'bg-red-100 text-red-700 border border-red-300'
                                                : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200'
                                        }`}>
                                        {f.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Clinical cases */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Casos clínicos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {vm.cases.map((c) => (
                                <button key={c.id} onClick={() => vm.applyCase(c.id)} disabled={isRunning}
                                    className={`text-left px-3 py-2 rounded-lg border text-sm transition-all disabled:opacity-40 ${
                                        vm.activeCaseId === c.id
                                            ? 'border-blue-500 bg-blue-50 text-blue-800 font-semibold'
                                            : 'border-gray-200 bg-white text-gray-700 hover:bg-blue-50 hover:border-blue-300'
                                    }`}>
                                    <p className="font-semibold text-xs leading-tight">{c.title}</p>
                                    <p className="text-[10px] text-gray-400 mt-0.5">{c.suggestedMode.toUpperCase()} · PEEP {c.suggestedPeepCmH2O}</p>
                                </button>
                            ))}
                        </div>
                        {vm.activeCase && vm.simulationMode === 'practice' && (
                            <div className="mt-2 text-xs text-blue-700 bg-blue-50 border border-blue-200 rounded-lg px-3 py-2">
                                <p className="font-semibold">{vm.activeCase.title}</p>
                                <p className="mt-0.5">{vm.activeCase.objective}</p>
                                <p className="mt-0.5 text-blue-500 italic">{vm.activeCase.clinicalNotes}</p>
                            </div>
                        )}
                    </div>

                    {/* Event log */}
                    {vm.events.length > 0 && (
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2 uppercase tracking-wide">Bitácora</h3>
                            <div className="max-h-36 overflow-y-auto space-y-1 bg-slate-50 rounded-xl p-3 border border-slate-200">
                                {vm.events.map((ev) => (
                                    <p key={ev.id} className="text-xs text-gray-600 leading-snug">{ev.message}</p>
                                ))}
                            </div>
                        </div>
                    )}
                </section>

                {/* ─── Right panel: device display ─────────────────────────── */}
                <aside className="bg-[#0f172a] flex flex-col overflow-y-auto">

                    {/* Alarm banner */}
                    {isAlarming && (
                        <div className="bg-red-600 text-white text-center text-sm font-bold py-1.5 animate-pulse flex-shrink-0">
                            ⚠ ALARMA ACTIVA
                        </div>
                    )}

                    {/* Top metrics bar */}
                    <div className="grid grid-cols-7 border-b border-[#1e3a5f] bg-[#0a1628] flex-shrink-0">
                        <MetricChip label="P_PEAK" value={vm.derivedMetrics.pipCmH2O}
                            unit="cmH₂O" highlight={vm.derivedMetrics.pipCmH2O > vm.pipLimitCmH2O} />
                        <MetricChip label="P_MEAN" value={pMean} unit="cmH₂O" />
                        <MetricChip label="PEEP" value={vm.peepCmH2O} unit="cmH₂O" />
                        <MetricChip label="I:E" value={vm.ieRatio} unit="" />
                        <MetricChip label="f_TOT" value={vm.rrPerMin} unit="/min" />
                        <MetricChip label="V_TE" value={vm.derivedMetrics.activeVtMl} unit="mL" />
                        <MetricChip label="V_TOT" value={vm.derivedMetrics.minuteVentilationLMin.toFixed(1)} unit="L/min" />
                    </div>

                    {/* Mode bar */}
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#1e3a5f] bg-[#0d1b2a] flex-shrink-0">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest">{modeLabels[vm.ventMode]}</span>
                        <span className="text-xs text-slate-500 font-mono">
                            {vm.breathCount > 0 ? `${vm.breathCount} ciclos` : 'EN ESPERA'}
                        </span>
                        <span className="text-xs text-slate-500">
                            🔋 {Math.round(vm.batteryPercent)}%
                        </span>
                    </div>

                    {/* Lung animation */}
                    <div className="px-4 pt-3 pb-1 flex-shrink-0">
                        <LungAnimation inflation={inflation} active={isRunning} />
                    </div>

                    {/* Waveforms */}
                    <div className="px-3 pb-2 flex-shrink-0 space-y-2">
                        {/* Pressure */}
                        <div>
                            <p className="text-[9px] uppercase tracking-widest text-yellow-500/70 mb-0.5">
                                Presión <span className="text-yellow-500/50">(cmH₂O)</span>
                            </p>
                            <ResponsiveContainer width="100%" height={90}>
                                <LineChart data={vm.waveformData} margin={{ top: 2, right: 4, bottom: 2, left: 0 }}>
                                    <YAxis
                                        domain={[0, pressureMax]}
                                        tick={{ fill: '#64748b', fontSize: 8 }}
                                        width={24}
                                        tickCount={4}
                                    />
                                    <ReferenceLine y={vm.peepCmH2O} stroke="#f0d060" strokeDasharray="3 3" strokeOpacity={0.4} />
                                    <Line
                                        type="monotone"
                                        dataKey="pressure"
                                        stroke="#f0d060"
                                        strokeWidth={1.5}
                                        dot={false}
                                        isAnimationActive={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Flow */}
                        <div>
                            <p className="text-[9px] uppercase tracking-widest text-purple-400/70 mb-0.5">
                                Flujo <span className="text-purple-400/50">(L/min)</span>
                            </p>
                            <ResponsiveContainer width="100%" height={90}>
                                <LineChart data={vm.waveformData} margin={{ top: 2, right: 4, bottom: 2, left: 0 }}>
                                    <YAxis
                                        domain={[-50, 50]}
                                        tick={{ fill: '#64748b', fontSize: 8 }}
                                        width={24}
                                        tickCount={5}
                                    />
                                    <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="2 3" strokeOpacity={0.5} />
                                    <Line
                                        type="monotone"
                                        dataKey="flow"
                                        stroke="#c084fc"
                                        strokeWidth={1.5}
                                        dot={false}
                                        isAnimationActive={false}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Physical param blocks */}
                    <div className="grid grid-cols-4 gap-1 px-2 pb-2 flex-shrink-0">
                        <ParamBlock label="f" value={vm.rrPerMin} unit="/min" />
                        <ParamBlock label="Vt" value={vm.derivedMetrics.activeVtMl} unit="mL" />
                        <ParamBlock label="PEEP" value={vm.peepCmH2O} unit="cmH₂O" />
                        <ParamBlock label="FiO₂" value={`${vm.fio2Percent}%`} unit="" />
                        <ParamBlock label="I:E" value={vm.ieRatio} unit="" />
                        <ParamBlock label="PIP" value={vm.derivedMetrics.pipCmH2O} unit="cmH₂O" />
                        <ParamBlock label="Plt" value={vm.derivedMetrics.plateauCmH2O} unit="cmH₂O" />
                        <ParamBlock label="MV" value={vm.derivedMetrics.minuteVentilationLMin.toFixed(1)} unit="L/min" />
                    </div>

                    {/* Active alarms */}
                    {vm.activeAlarms.length > 0 && (
                        <div className="mx-2 mb-2 space-y-1 flex-shrink-0">
                            {vm.activeAlarms.map((alarm) => (
                                <div key={alarm.id}
                                    className={`flex items-center justify-between rounded px-2 py-1.5 text-xs ${
                                        alarm.severity === 'critical'
                                            ? 'bg-red-900/60 border border-red-600 text-red-300'
                                            : alarm.severity === 'warning'
                                                ? 'bg-yellow-900/50 border border-yellow-600 text-yellow-300'
                                                : 'bg-blue-900/40 border border-blue-700 text-blue-300'
                                    }`}>
                                    <span className="font-medium">{alarm.label}</span>
                                    {!alarm.acknowledged && alarm.severity === 'critical' && (
                                        <button
                                            onClick={() => vm.acknowledgeAlarm(alarm.id)}
                                            className="ml-2 px-2 py-0.5 bg-red-700 hover:bg-red-600 text-white rounded text-[10px] font-bold uppercase tracking-wide transition-colors flex-shrink-0"
                                        >
                                            ACK
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Score */}
                    <div className="mt-auto border-t border-[#1e3a5f] px-3 py-2 flex-shrink-0">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase tracking-widest text-slate-600">Score ACLS</span>
                            <span className={`text-lg font-bold font-mono ${vm.trainingScore.value >= 80 ? 'text-emerald-400' : vm.trainingScore.value >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {vm.trainingScore.value}/100
                            </span>
                        </div>
                        <div className="mt-1 h-1 bg-[#1e3a5f] rounded-full overflow-hidden">
                            <div
                                className={`h-full rounded-full transition-all duration-500 ${vm.trainingScore.value >= 80 ? 'bg-emerald-500' : vm.trainingScore.value >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                                style={{ width: `${vm.trainingScore.value}%` }}
                            />
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}
