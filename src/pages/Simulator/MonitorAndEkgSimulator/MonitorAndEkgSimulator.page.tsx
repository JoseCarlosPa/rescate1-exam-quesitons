import { NavLink } from 'react-router';
import {
    FaArrowLeft, FaHeartbeat, FaPowerOff, FaBolt,
    FaChevronLeft, FaChevronRight, FaInfoCircle,
    FaList, FaVolumeMute, FaVolumeUp,
} from 'react-icons/fa';
import { MdSync, MdSyncDisabled } from 'react-icons/md';
import { GiHeartBeats } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';
import SEOWrapper from '../../../components/SEOWrapper/SEOWrapper.component.tsx';
import { AllRoutes } from '../../../components/Router/Router.constants.ts';
import useMonitorSimulator from './MonitorAndEkgSimulator.hook';
import { LEAD_OPTIONS } from './MonitorAndEkgSimulator.constants';
import type { MonitorType, ScenarioCategory } from './MonitorAndEkgSimulator.types';

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────
const categoryLabels: Record<ScenarioCategory, string> = {
    normal: '🟢 Normales / Seno',
    atrial: '🟡 Auriculares',
    ventricular: '🔴 Ventriculares',
    block: '🟠 Bloqueos AV',
    arrest: '⚫ Paro Cardíaco',
};

const categoryOrder: ScenarioCategory[] = ['normal', 'atrial', 'ventricular', 'block', 'arrest'];

export default function MonitorAndEkgSimulator() {
    const {
        monitorType, setMonitorType, isOn, togglePower,
        currentScenario, selectScenario, scenarios,
        displayVitals,
        energy, isCharging, isCharged, syncMode, shockDelivered, defiMessage,
        increaseEnergy, decreaseEnergy, handleCharge, handleShock, toggleSync,
        pacer, togglePacer, increasePacerRate, decreasePacerRate, increasePacerCurrent, decreasePacerCurrent,
        alarms, toggleAlarmMute,
        leadSelection, setLeadSelection, sweepSpeed, toggleSweepSpeed,
        showScenarioPanel, toggleScenarioPanel, showInfoPanel, toggleInfoPanel,
        ecgCanvasRef, plethCanvasRef,
    } = useMonitorSimulator();

    // ════════════════════════════════════════════
    // SELECTION SCREEN
    // ════════════════════════════════════════════
    if (!monitorType) {
        return (
            <SEOWrapper
                title="Simulador ECG Monitor - ZOLL y Lifepak | EMT EXAM"
                description="Simulador interactivo de monitores cardíacos ZOLL y Lifepak para entrenamiento de paramédicos. Practica lectura de ECG, desfibrilación y marcapasos."
                keywords="simulador ecg, monitor cardiaco, zoll, lifepak, desfibrilador, paramedicos, emt, arritmias"
                section="ecg-simulator"
                difficulty="Intermediate"
                timeRequired="PT60M"
                educationalLevel="Technical"
                includeEducationalSchema={true}
            >
                <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-emerald-800 via-teal-800 to-cyan-900 py-10 px-4 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-6 left-10 w-28 h-28 bg-emerald-400/10 rounded-full blur-2xl" />
                        <div className="absolute bottom-4 right-14 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />
                        <div className="container mx-auto relative z-10 text-center">
                            <FaHeartbeat className="text-green-400 w-16 h-16 mx-auto mb-4 drop-shadow-lg" />
                            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent mb-3">
                                Simulador de Monitor ECG
                            </h1>
                            <p className="text-teal-200 text-lg max-w-2xl mx-auto mb-6">
                                Elige tu modelo de monitor-desfibrilador y domina la lectura de ritmos, desfibrilación y marcapasos transcutáneo.
                            </p>
                            <NavLink
                                to={AllRoutes.SIMULATOR}
                                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full px-5 py-2.5 hover:bg-white/20 transition-all font-semibold"
                            >
                                <FaArrowLeft />
                                Regresar a simuladores
                            </NavLink>
                        </div>
                    </div>

                    {/* Monitor selection cards */}
                    <div className="flex-1 flex items-center justify-center px-4 py-12">
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
                            {([
                                {
                                    type: 'zoll' as MonitorType,
                                    name: 'ZOLL X Series',
                                    desc: 'Monitor-desfibrilador de última generación con tecnología de onda bifásica rectilínea. Ampliamente utilizado en servicios de emergencias prehospitalarias.',
                                    features: ['Onda bifásica rectilínea', 'Hasta 200J', 'Pantalla a color', 'See-Thru CPR'],
                                    gradient: 'from-blue-600 to-indigo-700',
                                    border: 'border-blue-500/30',
                                    accent: 'text-blue-400',
                                    btnBg: 'bg-blue-600 hover:bg-blue-500',
                                },
                                {
                                    type: 'lifepak' as MonitorType,
                                    name: 'LIFEPAK 15',
                                    desc: 'Monitor-desfibrilador robusto de Stryker/Physio-Control. Estándar de oro en atención prehospitalaria y transporte aéreo y terrestre.',
                                    features: ['Onda bifásica escalable', 'Hasta 360J', 'EtCO2 integrado', 'Monitoreo 12 derivaciones'],
                                    gradient: 'from-amber-600 to-orange-700',
                                    border: 'border-amber-500/30',
                                    accent: 'text-amber-400',
                                    btnBg: 'bg-amber-600 hover:bg-amber-500',
                                },
                            ]).map((m) => (
                                <button
                                    key={m.type}
                                    onClick={() => setMonitorType(m.type)}
                                    className={`group bg-gradient-to-br ${m.gradient} rounded-3xl p-8 border ${m.border} shadow-2xl text-left hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <RiComputerLine className={`w-10 h-10 ${m.accent}`} />
                                        <h2 className="text-3xl font-extrabold text-white">{m.name}</h2>
                                    </div>
                                    <p className="text-white/80 text-sm mb-5 leading-relaxed">{m.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {m.features.map((f) => (
                                            <span key={f} className="bg-white/15 text-white/90 px-3 py-1 rounded-full text-xs font-semibold">{f}</span>
                                        ))}
                                    </div>
                                    <div className={`${m.btnBg} text-white font-bold rounded-xl py-3 text-center transition-all shadow-lg text-lg`}>
                                        Iniciar Simulación →
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </SEOWrapper>
        );
    }

    // ════════════════════════════════════════════
    // MONITOR SIMULATOR SCREEN
    // ════════════════════════════════════════════
    const isZoll = monitorType === 'zoll';
    const alarmActive = !alarms.muted && (alarms.hrHigh || alarms.hrLow || alarms.spo2Low);

    return (
        <SEOWrapper
            title={`Simulador ${isZoll ? 'ZOLL X Series' : 'LIFEPAK 15'} - ECG Monitor | EMT EXAM`}
            description="Simulador interactivo de monitor ECG. Practica lectura de arritmias, desfibrilación y marcapasos."
            keywords="ecg, monitor cardiaco, arritmias, desfibrilador, marcapasos, simulador"
            section="ecg-simulator"
            difficulty="Intermediate"
            timeRequired="PT60M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className={`flex flex-col min-h-screen ${isZoll ? 'bg-[#0c1220]' : 'bg-[#0a0a0e]'}`}>
                {/* ── Flash overlay when shock delivered ── */}
                {shockDelivered && (
                    <div className="fixed inset-0 bg-white/80 z-50 pointer-events-none animate-pulse" />
                )}

                {/* ── Top nav bar ── */}
                <div className={`flex items-center justify-between px-4 py-2 ${isZoll ? 'bg-[#1a2640]' : 'bg-[#1a1a1e]'} border-b ${isZoll ? 'border-blue-900/50' : 'border-amber-900/30'}`}>
                    <div className="flex items-center gap-3">
                        <NavLink
                            to={AllRoutes.SIMULATOR}
                            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors"
                        >
                            <FaArrowLeft className="text-xs" />
                            <span className="hidden sm:inline">Simuladores</span>
                        </NavLink>
                        <span className="text-gray-600">|</span>
                        <span className={`font-bold text-sm ${isZoll ? 'text-blue-400' : 'text-amber-400'}`}>
                            {isZoll ? 'ZOLL X Series' : 'LIFEPAK 15'}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button onClick={toggleScenarioPanel} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${showScenarioPanel ? (isZoll ? 'bg-blue-600 text-white' : 'bg-amber-600 text-white') : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                            <FaList className="text-xs" />
                            <span className="hidden sm:inline">Escenarios</span>
                        </button>
                        <button onClick={toggleInfoPanel} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${showInfoPanel ? (isZoll ? 'bg-blue-600 text-white' : 'bg-amber-600 text-white') : 'bg-gray-800 text-gray-400 hover:text-white'}`}>
                            <FaInfoCircle className="text-xs" />
                            <span className="hidden sm:inline">Info</span>
                        </button>
                        <button onClick={() => setMonitorType(null)} className="px-3 py-1.5 rounded-lg text-xs font-bold bg-gray-800 text-gray-400 hover:text-white transition-all">
                            Cambiar monitor
                        </button>
                    </div>
                </div>

                {/* ── Main layout ── */}
                <div className="flex flex-1 overflow-hidden">

                    {/* ── Monitor Area ── */}
                    <div className="flex-1 flex flex-col min-w-0">

                        {/* Alarm banner */}
                        {alarmActive && (
                            <div className="bg-red-600 text-white text-center py-1 text-xs font-bold animate-pulse tracking-wider">
                                ⚠ ALARMA: {alarms.hrHigh ? 'FC ALTA' : ''} {alarms.hrLow ? 'FC BAJA' : ''} {alarms.spo2Low ? 'SpO2 BAJA' : ''}
                            </div>
                        )}

                        {/* Defi message banner */}
                        {defiMessage && (
                            <div className={`text-center py-1.5 text-sm font-bold tracking-wider ${isCharging ? 'bg-yellow-600 text-black animate-pulse' : isCharged ? 'bg-orange-500 text-white' : shockDelivered ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'}`}>
                                {defiMessage}
                            </div>
                        )}

                        {/* ── Monitor screen ── */}
                        <div className={`flex flex-col md:flex-row flex-1 ${isOn ? '' : 'opacity-20'}`}>

                            {/* Waveforms column */}
                            <div className="flex-1 flex flex-col min-w-0 p-2 gap-1">
                                {/* ECG label */}
                                <div className="flex items-center justify-between px-2">
                                    <span className="text-green-500 text-xs font-bold tracking-wider">ECG · {leadSelection} · {sweepSpeed}mm/s</span>
                                    <span className={`text-xs font-bold ${currentScenario.isShockable ? 'text-red-400' : 'text-green-400'}`}>
                                        {currentScenario.isShockable ? '⚡ DESFIBRILABLE' : '✓ NO DESFIBRILABLE'}
                                    </span>
                                </div>
                                {/* ECG Canvas */}
                                <div className="flex-1 min-h-[140px] md:min-h-[200px] rounded-lg overflow-hidden border border-green-900/30">
                                    <canvas
                                        ref={ecgCanvasRef}
                                        className="w-full h-full block"
                                        style={{ imageRendering: 'auto' }}
                                    />
                                </div>
                                {/* Pleth label */}
                                <div className="px-2">
                                    <span className="text-cyan-500 text-xs font-bold tracking-wider">SpO2 PLETH</span>
                                </div>
                                {/* Pleth Canvas */}
                                <div className="h-16 md:h-20 rounded-lg overflow-hidden border border-cyan-900/20">
                                    <canvas
                                        ref={plethCanvasRef}
                                        className="w-full h-full block"
                                        style={{ imageRendering: 'auto' }}
                                    />
                                </div>
                            </div>

                            {/* ── Vital signs column ── */}
                            <div className={`w-full md:w-56 flex md:flex-col flex-wrap gap-2 p-3 ${isZoll ? 'bg-[#0e1828]' : 'bg-[#0a0a10]'} border-l ${isZoll ? 'border-blue-900/30' : 'border-amber-900/20'}`}>
                                {/* HR */}
                                <div className="flex-1 min-w-[100px]">
                                    <p className="text-green-600 text-[10px] font-bold uppercase tracking-widest">Frec. Cardíaca</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-green-400 font-black ${displayVitals.hr > 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                                            {displayVitals.hr > 0 ? displayVitals.hr : '---'}
                                        </span>
                                        <span className="text-green-600 text-xs">bpm</span>
                                    </div>
                                    {displayVitals.hr > 0 && <GiHeartBeats className="text-green-500 text-lg animate-pulse" />}
                                </div>
                                {/* SpO2 */}
                                <div className="flex-1 min-w-[100px]">
                                    <p className="text-cyan-600 text-[10px] font-bold uppercase tracking-widest">SpO2</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className={`text-cyan-400 font-black ${displayVitals.spo2 > 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                                            {displayVitals.spo2 > 0 ? displayVitals.spo2 : '---'}
                                        </span>
                                        <span className="text-cyan-600 text-xs">%</span>
                                    </div>
                                </div>
                                {/* NIBP */}
                                <div className="flex-1 min-w-[100px]">
                                    <p className="text-red-600 text-[10px] font-bold uppercase tracking-widest">NIBP</p>
                                    <span className="text-red-400 font-black text-2xl md:text-3xl">
                                        {displayVitals.systolic > 0 ? `${displayVitals.systolic}/${displayVitals.diastolic}` : '---/---'}
                                    </span>
                                    <span className="text-red-600 text-xs ml-1">mmHg</span>
                                </div>
                                {/* FR */}
                                <div className="flex-1 min-w-[80px]">
                                    <p className="text-yellow-600 text-[10px] font-bold uppercase tracking-widest">FR</p>
                                    <span className="text-yellow-400 font-black text-2xl">
                                        {displayVitals.rr > 0 ? displayVitals.rr : '---'}
                                    </span>
                                    <span className="text-yellow-600 text-xs ml-1">/min</span>
                                </div>
                                {/* EtCO2 */}
                                <div className="flex-1 min-w-[80px]">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">EtCO2</p>
                                    <span className="text-gray-300 font-black text-2xl">
                                        {displayVitals.etco2 > 0 ? displayVitals.etco2 : '---'}
                                    </span>
                                    <span className="text-gray-500 text-xs ml-1">mmHg</span>
                                </div>
                                {/* Temp */}
                                <div className="flex-1 min-w-[80px]">
                                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Temp</p>
                                    <span className="text-gray-300 font-black text-xl">
                                        {displayVitals.temp > 0 ? displayVitals.temp.toFixed(1) : '---'}
                                    </span>
                                    <span className="text-gray-500 text-xs ml-1">°C</span>
                                </div>
                            </div>
                        </div>

                        {/* ── Control buttons ── */}
                        <div className={`p-3 flex flex-wrap gap-2 items-center justify-center border-t ${isZoll ? 'bg-[#141e30] border-blue-900/40' : 'bg-[#121216] border-amber-900/30'}`}>
                            {/* Power */}
                            <button onClick={togglePower} className={`p-2.5 rounded-xl transition-all ${isOn ? 'bg-green-600 text-white shadow-lg shadow-green-900/40' : 'bg-gray-700 text-gray-400'}`} title="Encender/Apagar">
                                <FaPowerOff className="w-5 h-5" />
                            </button>

                            {/* Energy select */}
                            <div className={`flex items-center gap-1 rounded-xl px-2 py-1 ${isZoll ? 'bg-[#1a2640]' : 'bg-[#1e1e24]'}`}>
                                <button onClick={decreaseEnergy} className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-all"><FaChevronLeft className="w-3 h-3" /></button>
                                <div className="text-center min-w-[70px]">
                                    <p className="text-[9px] text-gray-500 font-bold uppercase">Energía</p>
                                    <p className="text-orange-400 font-black text-lg leading-tight">{energy}J</p>
                                </div>
                                <button onClick={increaseEnergy} className="p-1.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white transition-all"><FaChevronRight className="w-3 h-3" /></button>
                            </div>

                            {/* Charge */}
                            <button onClick={handleCharge} disabled={isCharging || isCharged} className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${isCharging ? 'bg-yellow-600 text-black animate-pulse' : isCharged ? 'bg-orange-500 text-white ring-2 ring-orange-300 animate-pulse' : isZoll ? 'bg-blue-700 hover:bg-blue-600 text-white' : 'bg-neutral-700 hover:bg-neutral-600 text-white'}`}>
                                {isCharging ? 'CARGANDO...' : isCharged ? 'CARGADO ✓' : 'CARGAR'}
                            </button>

                            {/* Shock */}
                            <button onClick={handleShock} className={`px-5 py-2.5 rounded-xl font-extrabold text-sm transition-all ${isCharged ? 'bg-red-600 hover:bg-red-500 text-white ring-2 ring-red-300 shadow-lg shadow-red-900/50 animate-pulse' : 'bg-red-900/40 text-red-400/50 cursor-not-allowed'}`}>
                                <FaBolt className="inline mr-1" />
                                DESCARGA
                            </button>

                            <div className="w-px h-8 bg-gray-700 mx-1 hidden sm:block" />

                            {/* Sync */}
                            <button onClick={toggleSync} className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${syncMode ? 'bg-green-700 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
                                {syncMode ? <MdSync className="w-4 h-4" /> : <MdSyncDisabled className="w-4 h-4" />}
                                SYNC {syncMode ? 'ON' : 'OFF'}
                            </button>

                            {/* Pacer */}
                            <div className={`flex items-center gap-1 rounded-xl px-2 py-1 ${pacer.active ? 'bg-purple-900/50 ring-1 ring-purple-500/30' : isZoll ? 'bg-[#1a2640]' : 'bg-[#1e1e24]'}`}>
                                <button onClick={togglePacer} className={`px-2 py-1 rounded-lg text-xs font-bold transition-all ${pacer.active ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-400 hover:text-white'}`}>
                                    PACER {pacer.active ? 'ON' : 'OFF'}
                                </button>
                                {pacer.active && (
                                    <>
                                        <div className="flex items-center gap-0.5">
                                            <button onClick={decreasePacerRate} className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-[10px]">−</button>
                                            <span className="text-purple-300 text-xs font-bold min-w-[40px] text-center">{pacer.rate}<span className="text-[9px] text-purple-500">ppm</span></span>
                                            <button onClick={increasePacerRate} className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-[10px]">+</button>
                                        </div>
                                        <div className="flex items-center gap-0.5">
                                            <button onClick={decreasePacerCurrent} className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-[10px]">−</button>
                                            <span className="text-purple-300 text-xs font-bold min-w-[40px] text-center">{pacer.current}<span className="text-[9px] text-purple-500">mA</span></span>
                                            <button onClick={increasePacerCurrent} className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white text-[10px]">+</button>
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="w-px h-8 bg-gray-700 mx-1 hidden sm:block" />

                            {/* Lead select */}
                            <select
                                value={leadSelection}
                                onChange={(e) => setLeadSelection(e.target.value)}
                                className={`px-3 py-2 rounded-xl text-xs font-bold ${isZoll ? 'bg-[#1a2640] text-blue-300' : 'bg-[#1e1e24] text-amber-300'} border-none outline-none cursor-pointer`}
                            >
                                {LEAD_OPTIONS.map((l) => <option key={l} value={l}>{l}</option>)}
                            </select>

                            {/* Sweep speed */}
                            <button onClick={toggleSweepSpeed} className="px-3 py-2 rounded-xl text-xs font-bold bg-gray-700 text-gray-300 hover:text-white transition-all">
                                {sweepSpeed}mm/s
                            </button>

                            {/* Alarm mute */}
                            <button onClick={toggleAlarmMute} className={`p-2.5 rounded-xl transition-all ${alarms.muted ? 'bg-red-900/40 text-red-400' : 'bg-gray-700 text-gray-400 hover:text-white'}`} title={alarms.muted ? 'Activar alarmas' : 'Silenciar alarmas'}>
                                {alarms.muted ? <FaVolumeMute className="w-4 h-4" /> : <FaVolumeUp className="w-4 h-4" />}
                            </button>
                        </div>

                        {/* ── Info panel (collapsible below controls) ── */}
                        {showInfoPanel && (
                            <div className={`p-4 border-t max-h-64 overflow-y-auto ${isZoll ? 'bg-[#101828] border-blue-900/30' : 'bg-[#0e0e14] border-amber-900/20'}`}>
                                <div className="max-w-4xl mx-auto">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className={`w-2 h-2 rounded-full ${currentScenario.isShockable ? 'bg-red-500' : 'bg-green-500'}`} />
                                        <h3 className="text-white font-bold text-lg">{currentScenario.name}</h3>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${currentScenario.isShockable ? 'bg-red-900/40 text-red-400' : 'bg-green-900/40 text-green-400'}`}>
                                            {currentScenario.isShockable ? 'Desfibrilable' : 'No desfibrilable'}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-3">{currentScenario.description}</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-1">Criterios Diagnósticos</h4>
                                            <p className="text-gray-300 text-xs leading-relaxed">{currentScenario.clinicalNotes}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-orange-400 text-xs font-bold uppercase tracking-wider mb-1">Manejo ACLS</h4>
                                            <p className="text-gray-300 text-xs leading-relaxed">{currentScenario.aclsManagement}</p>
                                        </div>
                                    </div>
                                    {currentScenario.recommendedEnergy && (
                                        <div className="mt-3 bg-orange-900/20 rounded-lg p-2 border border-orange-800/30">
                                            <span className="text-orange-400 text-xs font-bold">⚡ Energía recomendada: {currentScenario.recommendedEnergy}J</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Scenario panel (right sidebar) ── */}
                    {showScenarioPanel && (
                        <div className={`w-72 flex-shrink-0 overflow-y-auto border-l ${isZoll ? 'bg-[#0e1828] border-blue-900/30' : 'bg-[#0c0c12] border-amber-900/20'}`}>
                            <div className="p-3">
                                <h3 className="text-white font-bold text-sm mb-3 uppercase tracking-wider">Escenarios ECG</h3>
                                {categoryOrder.map((cat) => {
                                    const catScenarios = scenarios.filter((s) => s.category === cat);
                                    if (catScenarios.length === 0) return null;
                                    return (
                                        <div key={cat} className="mb-4">
                                            <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1.5">{categoryLabels[cat]}</p>
                                            <div className="space-y-1">
                                                {catScenarios.map((s) => (
                                                    <button
                                                        key={s.id}
                                                        onClick={() => selectScenario(s)}
                                                        className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center gap-2 ${
                                                            currentScenario.id === s.id
                                                                ? (isZoll ? 'bg-blue-600/30 text-blue-300 ring-1 ring-blue-500/30' : 'bg-amber-600/30 text-amber-300 ring-1 ring-amber-500/30')
                                                                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                                        }`}
                                                    >
                                                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.isShockable ? 'bg-red-500' : 'bg-green-500'}`} />
                                                        <span className="font-semibold truncate">{s.shortName}</span>
                                                        <span className="text-gray-600 truncate hidden xl:inline">- {s.name}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SEOWrapper>
    );
}