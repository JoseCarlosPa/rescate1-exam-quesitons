import { useMemo, useState } from 'react';
import { NavLink } from 'react-router';
import { FaArrowLeft, FaPlay, FaPause, FaStop, FaSyringe, FaExclamationTriangle } from 'react-icons/fa';
import {
    Area,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { AllRoutes } from '../../../components/Router/Router.constants.ts';
import SEOWrapper from '../../../components/SEOWrapper/SEOWrapper.component.tsx';
import { isDoseValidationApplicable } from './InfusionPumpSimulator.constants';
import useInfusionPumpSimulator from './InfusionPumpSimulator.hook';

function severityStyles(severity: 'info' | 'warning' | 'critical'): string {
    if (severity === 'critical') return 'bg-red-100 text-red-700 border-red-300';
    if (severity === 'warning') return 'bg-amber-100 text-amber-700 border-amber-300';
    return 'bg-slate-100 text-slate-700 border-slate-300';
}

function statusBadgeStyles(s: string): string {
    if (s === 'running') return 'bg-emerald-500 text-white';
    if (s === 'paused') return 'bg-amber-500 text-white';
    if (s === 'completed') return 'bg-blue-500 text-white';
    return 'bg-slate-600 text-white';
}

export default function InfusionPumpSimulator() {
    const {
        pumpProfiles,
        drugLibrary,
        cases,
        powerOn,
        setPowerOn,
        batteryPercent,
        pumpProfileId,
        setPumpProfileId,
        mode,
        setMode,
        selectedDrug,
        selectedDrugId,
        setSelectedDrugId,
        weightKg,
        setWeightKg,
        targetDoseMcgKgMin,
        setTargetDoseMcgKgMin,
        manualRateMlHr,
        setManualRateMlHr,
        vtbiMl,
        setVtbiMl,
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
    } = useInfusionPumpSimulator();

    const [keypadTarget, setKeypadTarget] = useState<'weight' | 'dose' | 'rate' | 'vtbi'>('weight');
    const [keypadBuffer, setKeypadBuffer] = useState('');

    const activeAlarms = alarms.filter((alarm) => alarm.active);
    const hasCriticalAlarmActive = activeAlarms.some((a) => a.severity === 'critical');

    const targetCurrentValue = useMemo(() => {
        if (keypadTarget === 'weight') return String(weightKg);
        if (keypadTarget === 'dose') return String(targetDoseMcgKgMin);
        if (keypadTarget === 'rate') return String(manualRateMlHr);
        return String(vtbiMl);
    }, [keypadTarget, manualRateMlHr, targetDoseMcgKgMin, vtbiMl, weightKg]);

    const handleSelectKeypadTarget = (target: 'weight' | 'dose' | 'rate' | 'vtbi') => {
        setKeypadTarget(target);
        setKeypadBuffer('');
    };

    const handleKeypadPress = (key: string) => {
        if (key === 'C') {
            setKeypadBuffer('');
            return;
        }
        if (key === 'DEL') {
            setKeypadBuffer((prev) => prev.slice(0, -1));
            return;
        }
        if (key === '.' && keypadBuffer.includes('.')) return;
        setKeypadBuffer((prev) => `${prev}${key}`);
    };

    const applyKeypadValue = () => {
        const parsed = Number(keypadBuffer || targetCurrentValue);
        if (!Number.isFinite(parsed)) return;

        if (keypadTarget === 'weight') setWeightKg(parsed);
        if (keypadTarget === 'dose') setTargetDoseMcgKgMin(parsed);
        if (keypadTarget === 'rate') setManualRateMlHr(parsed);
        if (keypadTarget === 'vtbi') setVtbiMl(parsed);
        setKeypadBuffer('');
    };

    // Barra de progreso LCD segmentada (20 segmentos)
    const PROGRESS_SEGMENTS = 20;
    const filledSegments = vtbiMl > 0 ? Math.round((infusedMl / vtbiMl) * PROGRESS_SEGMENTS) : 0;

    const displayValue = keypadBuffer || targetCurrentValue;

    return (
        <SEOWrapper
            title="Simulador de Bomba de Infusion - EMT EXAM"
            description="Simulador prehospitalario de bomba de infusion con libreria de farmacos y limites ACLS/AHA."
            keywords="bomba infusion, acls, aha, norepinefrina, dopamina, paramedicos"
            section="simulator"
            difficulty="Advanced"
            timeRequired="PT20M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-slate-50 to-blue-100 pb-12">
                <header className="bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 text-white px-4 md:px-8 py-8 shadow-xl">
                    <div className="container mx-auto flex flex-col gap-4">
                        <NavLink
                            to={AllRoutes.SIMULATOR}
                            className="inline-flex items-center gap-2 text-sm font-bold bg-white text-indigo-700 rounded-full px-4 py-2 w-fit"
                        >
                            <FaArrowLeft />
                            Volver a simuladores
                        </NavLink>
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 rounded-2xl p-3">
                                <FaSyringe className="w-8 h-8" />
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-extrabold">Simulador fiel de bomba de infusion</h1>
                                <p className="text-cyan-100 text-sm md:text-base">
                                    Entrenamiento prehospitalario con perfiles de bomba y validaciones ACLS/AHA.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 md:px-8 mt-8 grid grid-cols-1 xl:grid-cols-3 gap-6">
                    <section className="xl:col-span-2 bg-white rounded-3xl border border-slate-200 shadow-lg p-6 space-y-6">

                        {/* Modo de simulación */}
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-700">Modo de simulacion</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setSimulationMode('practice')}
                                    disabled={status === 'running' || status === 'paused'}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all disabled:opacity-50 ${
                                        simulationMode === 'practice'
                                            ? 'bg-emerald-600 text-white'
                                            : 'bg-slate-200 text-slate-600'
                                    }`}
                                >
                                    Practica
                                </button>
                                <button
                                    onClick={() => setSimulationMode('evaluation')}
                                    disabled={status === 'running' || status === 'paused'}
                                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all disabled:opacity-50 ${
                                        simulationMode === 'evaluation'
                                            ? 'bg-violet-600 text-white'
                                            : 'bg-slate-200 text-slate-600'
                                    }`}
                                >
                                    Evaluacion
                                </button>
                            </div>
                        </div>

                        {/* Timer de evaluación activa */}
                        {simulationMode === 'evaluation' && evaluation.active && (
                            <div className="rounded-xl bg-violet-900/10 border border-violet-400/40 px-4 py-2 flex items-center justify-between">
                                <span className="text-violet-700 text-xs font-bold uppercase tracking-wider">Evaluacion en curso</span>
                                <span className="text-violet-800 font-mono text-sm font-bold">
                                    {String(Math.floor(evaluationElapsedSeconds / 60)).padStart(2, '0')}:
                                    {String(evaluationElapsedSeconds % 60).padStart(2, '0')}
                                </span>
                                <span className="text-violet-700 text-xs font-bold">Score: {evaluation.score}</span>
                            </div>
                        )}

                        <div className="grid md:grid-cols-3 gap-4">
                            <label className="flex flex-col gap-1 text-sm text-slate-600">
                                Perfil de bomba
                                <select
                                    className="rounded-xl border border-slate-300 px-3 py-2"
                                    value={pumpProfileId}
                                    onChange={(e) => setPumpProfileId(e.target.value as typeof pumpProfileId)}
                                >
                                    {pumpProfiles.map((profile) => (
                                        <option key={profile.id} value={profile.id}>{profile.name}</option>
                                    ))}
                                </select>
                            </label>

                            <label className="flex flex-col gap-1 text-sm text-slate-600">
                                Estado de energia
                                <button
                                    onClick={() => setPowerOn(!powerOn)}
                                    className={`rounded-xl px-3 py-2 font-bold ${powerOn ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}`}
                                >
                                    {powerOn ? 'Encendida' : 'Apagada'}
                                </button>
                            </label>

                            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                                <p className="font-semibold">Bateria</p>
                                <p>{batteryPercent.toFixed(0)}%</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <label className="flex flex-col gap-1 text-sm text-slate-600">
                                Farmaco
                                <select
                                    className="rounded-xl border border-slate-300 px-3 py-2"
                                    value={selectedDrugId ?? ''}
                                    onChange={(e) => setSelectedDrugId(e.target.value)}
                                >
                                    {drugLibrary.map((drug) => (
                                        <option key={drug.id} value={drug.id}>{drug.name} ({drug.className})</option>
                                    ))}
                                </select>
                            </label>
                            <div className="rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-sm text-cyan-900">
                                <p className="font-semibold">Concentracion estandar</p>
                                <p>{concentration.toFixed(2)} mcg/mL</p>
                                {selectedDrug && simulationMode === 'practice'
                                    ? <p className="text-xs mt-1">{selectedDrug.indication}</p>
                                    : null}
                                {selectedDrug?.dosingUnit && selectedDrug.dosingUnit !== 'mcg/kg/min'
                                    ? <p className="text-xs mt-1 font-semibold text-cyan-700">Unidad: {selectedDrug.dosingUnit}</p>
                                    : null}
                            </div>
                        </div>

                        {activeCase ? (
                            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 text-sm text-indigo-900">
                                <p className="font-bold">Caso activo: {activeCase.title}</p>
                                <p className="text-xs mt-1">Objetivo: {activeCase.objective}</p>
                            </div>
                        ) : null}

                        <div className="rounded-2xl border border-slate-200 p-4">
                            <p className="font-bold text-slate-800 mb-3">Programacion</p>
                            <div className="mb-4 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 flex items-center justify-between">
                                <span className="text-xs font-bold text-indigo-700">PROGRAM LOCK</span>
                                <span className={`text-xs font-extrabold px-2 py-1 rounded-full ${programLocked ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {programLocked ? 'CONFIRMADO' : 'PENDIENTE'}
                                </span>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <button
                                    onClick={() => setMode('weight-based')}
                                    className={`px-3 py-1.5 rounded-full text-sm font-bold ${mode === 'weight-based' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                                >
                                    Modo mcg/kg/min
                                </button>
                                <button
                                    onClick={() => setMode('mlh')}
                                    className={`px-3 py-1.5 rounded-full text-sm font-bold ${mode === 'mlh' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}
                                >
                                    Modo mL/h
                                </button>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4">
                                <label className="flex flex-col gap-1 text-sm text-slate-600">
                                    Peso (kg)
                                    <input
                                        className="rounded-xl border border-slate-300 px-3 py-2"
                                        type="number"
                                        min={20}
                                        max={250}
                                        value={weightKg}
                                        onChange={(e) => setWeightKg(Number(e.target.value))}
                                    />
                                </label>
                                <label className="flex flex-col gap-1 text-sm text-slate-600">
                                    Dosis objetivo (mcg/kg/min)
                                    <input
                                        className="rounded-xl border border-slate-300 px-3 py-2"
                                        type="number"
                                        step="0.01"
                                        disabled={mode !== 'weight-based'}
                                        value={targetDoseMcgKgMin}
                                        onChange={(e) => setTargetDoseMcgKgMin(Number(e.target.value))}
                                    />
                                </label>
                                <label className="flex flex-col gap-1 text-sm text-slate-600">
                                    Flujo manual (mL/h)
                                    <input
                                        className="rounded-xl border border-slate-300 px-3 py-2"
                                        type="number"
                                        step="0.1"
                                        disabled={mode !== 'mlh'}
                                        value={manualRateMlHr}
                                        onChange={(e) => setManualRateMlHr(Number(e.target.value))}
                                    />
                                </label>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                <label className="flex flex-col gap-1 text-sm text-slate-600">
                                    VTBI (mL)
                                    <input
                                        className="rounded-xl border border-slate-300 px-3 py-2"
                                        type="number"
                                        value={vtbiMl}
                                        onChange={(e) => setVtbiMl(Number(e.target.value))}
                                    />
                                </label>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                                    <p className="font-semibold">Flujo activo</p>
                                    <p>{activeRateMlHr.toFixed(2)} mL/h</p>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                                    <p className="font-semibold">Dosis activa</p>
                                    <p>{activeDoseMcgKgMin.toFixed(3)} mcg/kg/min</p>
                                </div>
                            </div>

                            {simulationMode === 'practice' && doseOutOfRange ? (
                                <p className="mt-3 text-xs font-semibold text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                                    Advertencia: la dosis actual esta fuera del rango recomendado ACLS/AHA para este farmaco.
                                </p>
                            ) : null}

                            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <p className="text-sm font-bold text-slate-800 mb-3">Teclado de programacion</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
                                    <button onClick={() => handleSelectKeypadTarget('weight')} className={`rounded-xl text-xs px-2 py-2 border ${keypadTarget === 'weight' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-700'}`}>Peso</button>
                                    <button onClick={() => handleSelectKeypadTarget('dose')} className={`rounded-xl text-xs px-2 py-2 border ${keypadTarget === 'dose' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-700'}`}>Dosis</button>
                                    <button onClick={() => handleSelectKeypadTarget('rate')} className={`rounded-xl text-xs px-2 py-2 border ${keypadTarget === 'rate' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-700'}`}>mL/h</button>
                                    <button onClick={() => handleSelectKeypadTarget('vtbi')} className={`rounded-xl text-xs px-2 py-2 border ${keypadTarget === 'vtbi' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white border-slate-200 text-slate-700'}`}>VTBI</button>
                                </div>

                                <div className="rounded-xl border border-slate-300 bg-black text-green-400 font-mono px-3 py-2 text-sm mb-3">
                                    <p className="text-[11px] text-green-300/80">TARGET: {keypadTarget.toUpperCase()}</p>
                                    <p>{displayValue}</p>
                                </div>

                                <div className="grid grid-cols-3 gap-2">
                                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'DEL'].map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => handleKeypadPress(key)}
                                            className="rounded-xl border border-slate-300 bg-white hover:bg-slate-100 px-3 py-2 text-sm font-bold"
                                        >
                                            {key}
                                        </button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <button onClick={() => handleKeypadPress('C')} className="rounded-xl border border-slate-300 bg-slate-100 hover:bg-slate-200 px-3 py-2 text-sm font-bold">C</button>
                                    <button onClick={applyKeypadValue} className="rounded-xl border border-indigo-600 bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm font-bold">ENTER</button>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 p-4">
                            <div className="flex items-center justify-between gap-3 mb-3">
                                <p className="font-bold text-slate-800">Checklist de seguridad (hard-stop)</p>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${checklistReady ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                    {checklistReady ? 'Completo' : 'Pendiente'}
                                </span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-2">
                                {safetyChecklist.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => toggleChecklistItem(item.id)}
                                        className={`text-left rounded-xl border px-3 py-2 text-sm transition-all ${item.checked ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-slate-50 border-slate-200 text-slate-700'}`}
                                    >
                                        <span className="font-semibold mr-2">{item.checked ? '✓' : '○'}</span>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Controles de infusión + TITRATE + Evaluación */}
                        <div className="flex flex-wrap gap-3">
                            <button onClick={confirmProgramming} className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold inline-flex items-center gap-2">
                                Confirmar programacion
                            </button>
                            <button onClick={startInfusion} className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold inline-flex items-center gap-2">
                                <FaPlay /> Iniciar
                            </button>
                            <button onClick={pauseInfusion} className="px-4 py-2 rounded-xl bg-amber-500 text-white font-bold inline-flex items-center gap-2">
                                <FaPause /> Pausar
                            </button>
                            <button onClick={resumeInfusion} className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold inline-flex items-center gap-2">
                                <FaPlay /> Reanudar
                            </button>
                            <button onClick={stopInfusion} className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold inline-flex items-center gap-2">
                                <FaStop /> Detener
                            </button>
                            {status === 'running' ? (
                                <button
                                    onClick={openTitration}
                                    className="px-4 py-2 rounded-xl bg-violet-600 text-white font-bold inline-flex items-center gap-2"
                                >
                                    TITRAR
                                </button>
                            ) : null}

                            {/* Controles modo evaluación */}
                            {simulationMode === 'evaluation' && !evaluation.active && !evaluation.completed ? (
                                <button onClick={startEvaluation} className="px-4 py-2 rounded-xl bg-violet-700 text-white font-bold">
                                    Iniciar evaluacion
                                </button>
                            ) : null}
                            {simulationMode === 'evaluation' && evaluation.active ? (
                                <button onClick={finishEvaluation} className="px-4 py-2 rounded-xl bg-violet-500 text-white font-bold">
                                    Finalizar evaluacion
                                </button>
                            ) : null}
                            {simulationMode === 'evaluation' && evaluation.completed ? (
                                <button onClick={resetEvaluation} className="px-4 py-2 rounded-xl border border-violet-400 text-violet-700 font-bold">
                                    Nueva evaluacion
                                </button>
                            ) : null}
                        </div>

                        {/* Debrief de evaluación */}
                        {evaluation.completed ? (
                            <div className="rounded-2xl border border-violet-300 bg-violet-50 p-4 space-y-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <h3 className="font-bold text-violet-900">Debrief de evaluacion</h3>
                                    <span className="text-xs font-bold bg-violet-200 text-violet-800 px-2 py-1 rounded-lg">
                                        Score: {evaluation.score}/100
                                    </span>
                                    <span className="text-xs font-bold bg-red-200 text-red-800 px-2 py-1 rounded-lg">
                                        Errores criticos: {evaluation.criticalErrors}
                                    </span>
                                </div>
                                {evaluation.events.length === 0 ? (
                                    <p className="text-xs text-violet-600">No se registraron eventos de evaluacion.</p>
                                ) : (
                                    <div className="space-y-2 max-h-64 overflow-y-auto">
                                        {evaluation.events.map((event) => (
                                            <div
                                                key={event.id}
                                                className={`rounded-xl border px-3 py-2 text-xs ${event.critical ? 'border-red-200 bg-red-50' : 'border-slate-200 bg-white'}`}
                                            >
                                                <div className="flex justify-between items-center">
                                                    <span className="font-bold text-slate-800">{event.action}</span>
                                                    <span className={`font-bold ${event.points >= 0 ? 'text-emerald-700' : 'text-red-700'}`}>
                                                        {event.points >= 0 ? `+${event.points}` : event.points} pts
                                                    </span>
                                                </div>
                                                <p className="text-slate-500 mt-0.5">{event.detail}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : null}

                        <div className="rounded-2xl border border-slate-200 p-4">
                            <p className="font-bold mb-3">Casos prehospitalarios sugeridos</p>
                            <div className="grid md:grid-cols-3 gap-3">
                                {cases.map((item) => (
                                    <button
                                        key={item.id}
                                        onClick={() => applyCase(item.id)}
                                        className="text-left rounded-xl border border-slate-200 hover:border-indigo-300 px-3 py-2"
                                    >
                                        <p className="font-semibold text-slate-800 text-sm">{item.title}</p>
                                        <p className="text-xs text-slate-600">{item.objective}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Sidebar derecho */}
                    <aside className="bg-slate-900 text-slate-100 rounded-3xl shadow-lg p-5 space-y-5">
                        <div className="border border-slate-700 rounded-2xl p-4 bg-black/30">
                            <p className="text-xs uppercase tracking-wider text-slate-400">Evaluacion ACLS/AHA</p>
                            <p className="text-2xl font-extrabold mt-1">{trainingScore.value}/100</p>
                            <p className="text-xs text-slate-400 mt-1">Recompensas: +{trainingScore.rewards} | Penalizaciones: -{trainingScore.penalties}</p>
                        </div>

                        {/* Display LCD */}
                        <div className={`rounded-2xl border-2 p-4 ${hasCriticalAlarmActive ? 'border-red-500 animate-pulse' : 'border-[#5a6a3e]'}`}
                            style={{ background: '#2e3d25' }}>
                            {/* Línea superior */}
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-xs text-[#8ab060]">
                                    {selectedDrug ? selectedDrug.name.toUpperCase() : 'SIN FARMACO'}
                                </span>
                                <span className="font-mono text-xs text-[#8ab060]">
                                    {mode === 'weight-based' ? 'MCG/KG/MIN' : 'ML/H'}
                                </span>
                            </div>

                            {/* Valor central grande */}
                            <div className="text-center py-2">
                                <p className={`font-mono font-black text-4xl ${
                                    hasCriticalAlarmActive
                                        ? 'text-red-400'
                                        : isTransitioningRate
                                            ? 'text-amber-400 animate-pulse'
                                            : 'text-[#b4ff7a]'
                                }`}>
                                    {activeRateMlHr.toFixed(2)}
                                </p>
                                <p className="font-mono text-xs text-[#8ab060] mt-0.5">mL/h</p>
                            </div>

                            {/* Línea inferior */}
                            <div className="flex justify-between font-mono text-xs text-[#8ab060] mt-1">
                                <span>{activeDoseMcgKgMin.toFixed(3)} mcg/kg/min</span>
                                <span>{remainingMl.toFixed(1)} mL rest.</span>
                            </div>

                            {/* Badge de estado */}
                            <div className="mt-3 flex items-center justify-between">
                                <span className={`text-xs font-black px-2 py-1 rounded-lg ${statusBadgeStyles(status)}`}>
                                    {status === 'running' ? 'RUNNING'
                                        : status === 'paused' ? 'PAUSED'
                                        : status === 'completed' ? 'COMPLETED'
                                        : 'STOPPED'}
                                </span>
                                {isTransitioningRate ? (
                                    <span className="text-xs font-bold text-amber-400 animate-pulse">AJUSTANDO...</span>
                                ) : null}
                            </div>

                            {/* Barra de progreso segmentada */}
                            <div className="mt-3 flex gap-0.5">
                                {Array.from({ length: PROGRESS_SEGMENTS }, (_, i) => (
                                    <div
                                        key={i}
                                        className="h-2.5 flex-1 rounded-sm"
                                        style={{ background: i < filledSegments ? '#b4ff7a' : '#2a3a1e' }}
                                    />
                                ))}
                            </div>
                            <div className="flex justify-between font-mono text-[10px] text-[#8ab060] mt-1">
                                <span>0 mL</span>
                                <span>{vtbiMl} mL</span>
                            </div>

                            {/* Tiempo restante */}
                            <p className="font-mono text-xs text-[#8ab060] mt-2 text-center">
                                {timeRemainingMin.toFixed(1)} min restantes
                            </p>
                        </div>

                        <div>
                            <p className="text-sm font-bold mb-2 inline-flex items-center gap-2"><FaExclamationTriangle /> Alarmas activas</p>
                            <div className="space-y-2 max-h-48 overflow-y-auto">
                                {activeAlarms.length === 0 ? <p className="text-xs text-slate-400">Sin alarmas activas.</p> : null}
                                {activeAlarms.map((alarm) => (
                                    <div key={alarm.id} className={`rounded-xl border px-3 py-2 text-xs ${severityStyles(alarm.severity)}`}>
                                        {alarm.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-bold mb-2">Panel de fallas (entrenamiento)</p>
                            <div className="grid grid-cols-2 gap-2">
                                {alarms.filter((alarm) => ['occlusion', 'air-line', 'door-open'].includes(alarm.id)).map((alarm) => (
                                    <button
                                        key={alarm.id}
                                        onClick={() => toggleAlarm(alarm.id)}
                                        className={`rounded-xl text-xs px-2 py-1.5 border ${alarm.active ? 'bg-red-600 border-red-400 text-white' : 'bg-slate-800 border-slate-700 text-slate-200'}`}
                                    >
                                        {alarm.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <p className="text-sm font-bold mb-2">Bitacora</p>
                            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                                {events.length === 0 ? <p className="text-xs text-slate-400">Sin eventos todavia.</p> : null}
                                {events.map((event) => (
                                    <div key={event.id} className="text-xs border-l-2 border-cyan-500 pl-2">
                                        <p className="text-slate-200">{event.message}</p>
                                        <p className="text-slate-500">{new Date(event.timestamp).toLocaleTimeString('es-MX')}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </main>

                {/* Gráfico de progreso */}
                {chartData.length > 1 ? (
                    <section className="container mx-auto px-4 md:px-8 mt-6">
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-lg p-6">
                            <p className="font-bold text-slate-800 mb-4">Progreso de infusion en tiempo real</p>
                            <ResponsiveContainer width="100%" height={280}>
                                <ComposedChart data={chartData} margin={{ top: 5, right: 30, left: 10, bottom: 20 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis
                                        dataKey="timeMin"
                                        tick={{ fontSize: 11 }}
                                        label={{ value: 'Tiempo (min)', position: 'insideBottom', offset: -10, fontSize: 11 }}
                                    />
                                    <YAxis
                                        yAxisId="left"
                                        tick={{ fontSize: 11 }}
                                        label={{ value: 'mL', angle: -90, position: 'insideLeft', fontSize: 11 }}
                                    />
                                    <YAxis
                                        yAxisId="right"
                                        orientation="right"
                                        tick={{ fontSize: 11 }}
                                        label={{ value: 'mL/h', angle: 90, position: 'insideRight', fontSize: 11 }}
                                    />
                                    <Tooltip
                                        formatter={(value, name) => {
                                            if (name === 'infusedMl') return [`${value} mL`, 'Volumen infundido'];
                                            if (name === 'rateMlHr') return [`${value} mL/h`, 'Flujo activo'];
                                            if (name === 'doseMcgKgMin') return [`${value} mcg/kg/min`, 'Dosis activa'];
                                            return [`${value}`, `${name}`];
                                        }}
                                        labelFormatter={(label) => `T: ${label} min`}
                                    />
                                    <Legend verticalAlign="top" />
                                    <Area
                                        yAxisId="left"
                                        type="monotone"
                                        dataKey="infusedMl"
                                        fill="#dbeafe"
                                        stroke="#3b82f6"
                                        fillOpacity={0.4}
                                        name="Volumen infundido"
                                        dot={false}
                                        isAnimationActive={false}
                                    />
                                    <Line
                                        yAxisId="right"
                                        type="stepAfter"
                                        dataKey="rateMlHr"
                                        stroke="#f59e0b"
                                        strokeWidth={2}
                                        name="Flujo activo"
                                        dot={false}
                                        isAnimationActive={false}
                                    />
                                    {mode === 'weight-based' ? (
                                        <Line
                                            yAxisId="right"
                                            type="stepAfter"
                                            dataKey="doseMcgKgMin"
                                            stroke="#8b5cf6"
                                            strokeWidth={1.5}
                                            strokeDasharray="4 2"
                                            name="Dosis activa"
                                            dot={false}
                                            isAnimationActive={false}
                                        />
                                    ) : null}
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </section>
                ) : null}
            </div>

            {/* Overlay de titulación */}
            {titrationOpen ? (
                <div className="fixed inset-0 bg-black/60 flex items-end justify-center z-50 pb-8">
                    <div className="bg-slate-900 rounded-3xl border border-violet-500/50 p-6 w-full max-w-sm space-y-4 mx-4">
                        <p className="font-bold text-white text-center text-lg">TITRACION ACTIVA</p>
                        <p className="text-slate-400 text-xs text-center">
                            {mode === 'weight-based' ? 'Ajuste de dosis (mcg/kg/min)' : 'Ajuste de flujo (mL/h)'}
                        </p>
                        <p className="text-slate-500 text-xs text-center">
                            Incremento: {titrationStep.toFixed(mode === 'weight-based' ? 3 : 1)}
                        </p>

                        {/* Valor actual */}
                        <div className="flex items-center justify-between bg-slate-800 rounded-xl p-3">
                            <span className="text-slate-400 text-sm">Actual:</span>
                            <span className="text-white font-mono font-bold">
                                {mode === 'weight-based'
                                    ? `${targetDoseMcgKgMin.toFixed(3)} mcg/kg/min`
                                    : `${manualRateMlHr.toFixed(2)} mL/h`}
                            </span>
                        </div>

                        {/* Valor propuesto */}
                        <div className="flex items-center justify-between bg-violet-900/40 rounded-xl p-3 border border-violet-500/30">
                            <span className="text-violet-300 text-sm">Propuesta:</span>
                            <span className="text-violet-100 font-mono font-bold text-lg">
                                {mode === 'weight-based'
                                    ? `${titrationProposedDose.toFixed(3)} mcg/kg/min`
                                    : `${titrationProposedDose.toFixed(2)} mL/h`}
                            </span>
                        </div>

                        {/* Hint de rango AHA solo en modo práctica */}
                        {simulationMode === 'practice' && selectedDrug && isDoseValidationApplicable(selectedDrug) ? (
                            <p className="text-xs text-cyan-400 text-center">
                                Rango AHA: {selectedDrug.ahaDoseMinMcgKgMin} – {selectedDrug.ahaDoseMaxMcgKgMin} mcg/kg/min
                            </p>
                        ) : null}

                        {/* Botones +/- */}
                        <div className="flex gap-3 justify-center">
                            <button
                                onClick={() => adjustTitration('down')}
                                className="px-8 py-4 rounded-xl bg-slate-700 text-white font-black text-2xl hover:bg-slate-600 active:scale-95"
                            >
                                −
                            </button>
                            <button
                                onClick={() => adjustTitration('up')}
                                className="px-8 py-4 rounded-xl bg-slate-700 text-white font-black text-2xl hover:bg-slate-600 active:scale-95"
                            >
                                +
                            </button>
                        </div>

                        <p className={`text-xs text-center font-semibold ${
                            titrationDelta === 0 ? 'text-slate-500' : titrationDelta > 0 ? 'text-emerald-400' : 'text-rose-400'
                        }`}>
                            Delta: {titrationDelta > 0 ? '+' : ''}{titrationDelta.toFixed(mode === 'weight-based' ? 3 : 1)}
                        </p>

                        {/* Confirmar / Cancelar */}
                        <div className="flex gap-2">
                            <button
                                onClick={closeTitration}
                                className="flex-1 px-4 py-2 rounded-xl bg-slate-700 text-slate-300 font-bold hover:bg-slate-600"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={commitTitration}
                                disabled={titrationDelta === 0}
                                className="flex-1 px-4 py-2 rounded-xl bg-violet-600 text-white font-bold hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                CONFIRMAR
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </SEOWrapper>
    );
}
