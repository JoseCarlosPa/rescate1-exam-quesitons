import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { AnatomyPoint, BodySystemConfig, PointState } from './AnatomiaVisual.types';
import { BODY_SYSTEMS } from './AnatomiaVisual.constants';
import { AllRoutes } from '../../../components/Router/Router.constants';

type GamePhase = 'setup' | 'playing' | 'result';

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60)
        .toString()
        .padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

export default function AnatomiaVisual() {
    const [phase, setPhase] = useState<GamePhase>('setup');
    const [selectedSystem, setSelectedSystem] = useState<BodySystemConfig | null>(null);
    const [pointStates, setPointStates] = useState<Record<string, PointState>>({});
    const [activePoint, setActivePoint] = useState<AnatomyPoint | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);

    // Timer
    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        if (phase === 'playing') {
            interval = setInterval(() => {
                setElapsedSeconds(prev => prev + 1);
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [phase]);

    // Auto-advance to result when all points answered
    useEffect(() => {
        if (phase === 'playing' && selectedSystem) {
            const total = selectedSystem.points.length;
            const answered = Object.values(pointStates).filter(p => p.answered).length;
            if (answered === total && total > 0) {
                const timer = setTimeout(() => {
                    setShowModal(false);
                    setPhase('result');
                }, 1200);
                return () => clearTimeout(timer);
            }
        }
    }, [pointStates, phase, selectedSystem]);

    const handleSelectSystem = useCallback((system: BodySystemConfig) => {
        setSelectedSystem(system);
        setPointStates({});
        setScore(0);
        setElapsedSeconds(0);
        setActivePoint(null);
        setShowModal(false);
        setPhase('playing');
    }, []);

    const handlePointClick = useCallback((point: AnatomyPoint) => {
        setActivePoint(point);
        setShowModal(true);
    }, []);

    const handleAnswer = useCallback(
        (answer: string) => {
            if (!activePoint) return;
            const state = pointStates[activePoint.id];
            if (state?.answered) return;
            const isCorrect = answer === activePoint.correct;
            setPointStates(prev => ({
                ...prev,
                [activePoint.id]: {
                    id: activePoint.id,
                    answered: true,
                    correct: isCorrect,
                    selectedAnswer: answer,
                },
            }));
            if (isCorrect) setScore(prev => prev + 100);
        },
        [activePoint, pointStates],
    );

    const getOptionClass = useCallback(
        (pointId: string, option: string): string => {
            const state = pointStates[pointId];
            if (!state?.answered) {
                return 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/40';
            }
            if (option === activePoint?.correct) {
                return 'bg-emerald-500/30 border-emerald-400 text-emerald-200';
            }
            if (option === state.selectedAnswer && !state.correct) {
                return 'bg-red-500/30 border-red-400 text-red-200';
            }
            return 'bg-white/5 border-white/10 text-gray-500';
        },
        [pointStates, activePoint],
    );

    const handleReset = useCallback(() => {
        setPhase('setup');
        setSelectedSystem(null);
        setPointStates({});
        setScore(0);
        setElapsedSeconds(0);
        setActivePoint(null);
        setShowModal(false);
    }, []);

    const handleTryAnotherSystem = useCallback(() => {
        setPhase('setup');
        setSelectedSystem(null);
        setPointStates({});
        setScore(0);
        setElapsedSeconds(0);
        setActivePoint(null);
        setShowModal(false);
    }, []);

    const answeredCount = Object.values(pointStates).filter(p => p.answered).length;
    const correctCount = Object.values(pointStates).filter(p => p.correct).length;
    const totalPoints = selectedSystem?.points.length ?? 0;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

    const systemColorMap: Record<string, string> = {
        cardiovascular: 'from-red-600 to-rose-700',
        respiratory: 'from-sky-600 to-blue-700',
        skeletal: 'from-amber-500 to-yellow-600',
        trauma: 'from-orange-500 to-red-600',
    };

    const systemBorderMap: Record<string, string> = {
        cardiovascular: 'border-red-500/40 hover:border-red-400/70',
        respiratory: 'border-sky-500/40 hover:border-sky-400/70',
        skeletal: 'border-amber-500/40 hover:border-amber-400/70',
        trauma: 'border-orange-500/40 hover:border-orange-400/70',
    };

    const systemGlowMap: Record<string, string> = {
        cardiovascular: 'shadow-red-900/50',
        respiratory: 'shadow-sky-900/50',
        skeletal: 'shadow-amber-900/50',
        trauma: 'shadow-orange-900/50',
    };

    // ─── SETUP SCREEN ───────────────────────────────────────────────────
    if (phase === 'setup') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-green-950 px-4 py-10">
                <div className="max-w-4xl mx-auto">
                    {/* Back link */}
                    <NavLink
                        to={AllRoutes.GAMES}
                        className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm mb-8 transition-colors"
                    >
                        ← Volver a Juegos
                    </NavLink>

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <div className="text-6xl mb-4">🔬</div>
                        <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                            Anatomía Visual
                        </h1>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto">
                            Explora diagramas interactivos del cuerpo humano. Haz clic en los puntos marcados y responde preguntas de anatomía clínica.
                        </p>
                    </motion.div>

                    {/* System cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {BODY_SYSTEMS.map((system, i) => (
                            <motion.button
                                key={system.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                onClick={() => handleSelectSystem(system)}
                                className={`group relative text-left p-6 rounded-2xl border bg-slate-800/60 backdrop-blur-sm shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${systemBorderMap[system.id]} ${systemGlowMap[system.id]}`}
                            >
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${systemColorMap[system.id]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${systemColorMap[system.id]} flex items-center justify-center text-2xl shadow-lg`}>
                                            {system.icon}
                                        </div>
                                        <div>
                                            <h2 className="text-white font-bold text-lg leading-tight">{system.label}</h2>
                                            <p className="text-gray-400 text-sm">{system.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-500 text-xs">
                                            {system.points.length} puntos interactivos
                                        </span>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${systemColorMap[system.id]} text-white`}>
                                            Iniciar →
                                        </span>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // ─── RESULT SCREEN ───────────────────────────────────────────────────
    if (phase === 'result' && selectedSystem) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-green-950 px-4 py-10">
                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* Result header */}
                        <div className="text-center mb-8">
                            <div className="text-5xl mb-3">{accuracy >= 70 ? '🎉' : '📚'}</div>
                            <h2 className="text-4xl font-black text-white mb-2">
                                {accuracy >= 90
                                    ? '¡Excelente!'
                                    : accuracy >= 70
                                      ? '¡Buen trabajo!'
                                      : 'Sigue practicando'}
                            </h2>
                            <p className="text-gray-400">{selectedSystem.label}</p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-4 text-center">
                                <div className="text-3xl font-black text-emerald-400">{score}</div>
                                <div className="text-gray-400 text-sm mt-1">Puntos</div>
                            </div>
                            <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-4 text-center">
                                <div className="text-3xl font-black text-sky-400">{accuracy}%</div>
                                <div className="text-gray-400 text-sm mt-1">Precisión</div>
                            </div>
                            <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-4 text-center">
                                <div className="text-3xl font-black text-purple-400">{formatTime(elapsedSeconds)}</div>
                                <div className="text-gray-400 text-sm mt-1">Tiempo</div>
                            </div>
                        </div>

                        {/* Point-by-point breakdown */}
                        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-5 mb-8">
                            <h3 className="text-white font-bold mb-4">Resultados por punto</h3>
                            <div className="space-y-3">
                                {selectedSystem.points.map(point => {
                                    const state = pointStates[point.id];
                                    const wasCorrect = state?.correct;
                                    return (
                                        <div
                                            key={point.id}
                                            className={`flex items-start gap-3 p-3 rounded-xl border ${wasCorrect ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-red-500/10 border-red-500/30'}`}
                                        >
                                            <span className="text-lg flex-shrink-0">{wasCorrect ? '✅' : '❌'}</span>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <span className="text-sm font-semibold text-white">{point.emoji} {point.label}</span>
                                                </div>
                                                <p className="text-xs text-gray-400 mt-0.5 truncate">{point.question}</p>
                                                <p className={`text-xs font-medium mt-1 ${wasCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                                    Correcto: {point.correct}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={handleTryAnotherSystem}
                                className="flex-1 py-3 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold transition-all border border-white/10"
                            >
                                Otro sistema
                            </button>
                            <button
                                onClick={handleReset}
                                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold transition-all shadow-lg shadow-emerald-900/40"
                            >
                                Nueva sesión
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        );
    }

    // ─── PLAYING SCREEN ───────────────────────────────────────────────────
    if (phase !== 'playing' || !selectedSystem) return null;

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-green-950">
            {/* Top bar */}
            <div className="border-b border-white/10 bg-slate-900/80 backdrop-blur-sm px-4 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <button
                        onClick={handleReset}
                        className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1"
                    >
                        ← Salir
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">{selectedSystem.icon}</span>
                        <span className="text-white font-semibold text-sm hidden sm:block">{selectedSystem.label}</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-emerald-400 font-bold text-sm">{answeredCount}/{totalPoints}</div>
                            <div className="text-gray-500 text-xs">Puntos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-yellow-400 font-bold text-sm">{score}</div>
                            <div className="text-gray-500 text-xs">Puntaje</div>
                        </div>
                        <div className="text-center">
                            <div className="text-purple-400 font-bold text-sm">{formatTime(elapsedSeconds)}</div>
                            <div className="text-gray-500 text-xs">Tiempo</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row gap-6 items-start">
                    {/* ── SVG Diagram ── */}
                    <div className="w-full lg:w-auto lg:flex-shrink-0 flex justify-center">
                        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-4 shadow-xl w-full max-w-sm">
                            <svg
                                viewBox="0 0 200 400"
                                className="w-full max-w-xs mx-auto"
                                style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,0.1))' }}
                            >
                                {/* ── Body silhouette ── */}
                                {/* Head */}
                                <ellipse cx="100" cy="28" rx="22" ry="25" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Neck */}
                                <rect x="88" y="52" width="24" height="18" rx="4" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Torso */}
                                <path d="M55 70 L145 70 L152 200 L48 200 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Left shoulder */}
                                <ellipse cx="43" cy="90" rx="20" ry="11" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Right shoulder */}
                                <ellipse cx="157" cy="90" rx="20" ry="11" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Left arm */}
                                <path d="M22 88 L28 210 L52 210 L55 88" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Right arm */}
                                <path d="M148 88 L144 210 L170 210 L178 88" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Pelvis / hips */}
                                <path d="M48 200 L152 200 L158 262 L42 262 Z" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Left leg */}
                                <path d="M55 260 L68 400 L93 400 L88 260" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
                                {/* Right leg */}
                                <path d="M145 260 L132 400 L107 400 L112 260" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />

                                {/* ── Interactive points ── */}
                                {selectedSystem.points.map(point => {
                                    const state = pointStates[point.id];
                                    const answered = state?.answered ?? false;
                                    const correct = state?.correct ?? null;

                                    return (
                                        <g
                                            key={point.id}
                                            onClick={() => handlePointClick(point)}
                                            style={{ cursor: 'pointer' }}
                                            role="button"
                                            aria-label={point.label}
                                        >
                                            {/* Pulse ring (unanswered only) */}
                                            {!answered && (
                                                <circle cx={point.cx} cy={point.cy} r="12" fill="none" stroke="#818cf8" strokeWidth="1" opacity="0.4">
                                                    <animate attributeName="r" values="8;15;8" dur="2.2s" repeatCount="indefinite" />
                                                    <animate attributeName="opacity" values="0.5;0;0.5" dur="2.2s" repeatCount="indefinite" />
                                                </circle>
                                            )}
                                            {/* Main dot */}
                                            <circle
                                                cx={point.cx}
                                                cy={point.cy}
                                                r="8"
                                                fill={answered ? (correct ? '#10b981' : '#ef4444') : '#6366f1'}
                                                stroke={answered ? (correct ? '#34d399' : '#f87171') : '#818cf8'}
                                                strokeWidth="2"
                                                opacity={0.95}
                                            />
                                            {/* Check / X mark */}
                                            {answered && (
                                                <text
                                                    x={point.cx}
                                                    y={point.cy + 1}
                                                    textAnchor="middle"
                                                    dominantBaseline="middle"
                                                    fontSize="7"
                                                    fill="white"
                                                    fontWeight="bold"
                                                >
                                                    {correct ? '✓' : '✗'}
                                                </text>
                                            )}
                                        </g>
                                    );
                                })}
                            </svg>
                        </div>
                    </div>

                    {/* ── Info Panel ── */}
                    <div className="flex-1 space-y-4">
                        {/* Progress card */}
                        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-5 shadow-xl">
                            <h2 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                                <span>{selectedSystem.icon}</span> {selectedSystem.label}
                            </h2>
                            <p className="text-gray-400 text-sm mb-4">{selectedSystem.description}</p>

                            {/* Progress bar */}
                            <div className="mb-2 flex justify-between text-xs text-gray-400">
                                <span>Progreso</span>
                                <span>{answeredCount} / {totalPoints} respondidos</span>
                            </div>
                            <div className="w-full h-2.5 bg-slate-700 rounded-full overflow-hidden">
                                <motion.div
                                    className={`h-full rounded-full bg-gradient-to-r ${systemColorMap[selectedSystem.id]}`}
                                    initial={{ width: 0 }}
                                    animate={{ width: totalPoints > 0 ? `${(answeredCount / totalPoints) * 100}%` : '0%' }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-5 shadow-xl">
                            <h3 className="text-white font-semibold mb-3 text-sm">📋 Cómo jugar</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center text-xs text-indigo-300">1</span>
                                    Haz clic en los puntos pulsantes del diagrama
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center text-xs text-indigo-300">2</span>
                                    Selecciona la respuesta correcta
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-indigo-500/30 border border-indigo-400/50 flex items-center justify-center text-xs text-indigo-300">3</span>
                                    Lee la explicación clínica
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center text-xs text-emerald-300">✓</span>
                                    Verde = correcto · Rojo = incorrecto
                                </li>
                            </ul>
                        </div>

                        {/* Points legend */}
                        <div className="bg-slate-800/60 border border-white/10 rounded-2xl p-5 shadow-xl">
                            <h3 className="text-white font-semibold mb-3 text-sm">🗺️ Puntos del sistema</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {selectedSystem.points.map(point => {
                                    const state = pointStates[point.id];
                                    const answered = state?.answered ?? false;
                                    const correct = state?.correct ?? null;
                                    return (
                                        <button
                                            key={point.id}
                                            onClick={() => handlePointClick(point)}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-left text-xs transition-all border ${
                                                answered
                                                    ? correct
                                                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                                        : 'bg-red-500/10 border-red-500/30 text-red-300'
                                                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                            }`}
                                        >
                                            <span>{answered ? (correct ? '✅' : '❌') : '⭕'}</span>
                                            <span className="truncate font-medium">{point.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Question Modal ── */}
            <AnimatePresence>
                {showModal && activePoint && (
                    <motion.div
                        key="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={e => {
                            // Close only if clicking the overlay backdrop
                            if (e.target === e.currentTarget && pointStates[activePoint.id]?.answered) {
                                setShowModal(false);
                            }
                        }}
                    >
                        <motion.div
                            key="modal-card"
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ duration: 0.25, type: 'spring', stiffness: 300, damping: 28 }}
                            className="max-w-md w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/20 rounded-3xl p-6 shadow-2xl"
                        >
                            {/* Modal header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-4xl">{activePoint.emoji ?? '🔬'}</span>
                                    <div>
                                        <h3 className="text-white font-bold text-lg leading-tight">{activePoint.label}</h3>
                                        <p className="text-gray-400 text-sm">{selectedSystem.label}</p>
                                    </div>
                                </div>
                                {pointStates[activePoint.id]?.answered && (
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="text-gray-500 hover:text-white text-xl leading-none p-1 transition-colors"
                                        aria-label="Cerrar"
                                    >
                                        ×
                                    </button>
                                )}
                            </div>

                            {/* Question */}
                            <p className="text-white font-medium mb-5 leading-relaxed">{activePoint.question}</p>

                            {/* Options */}
                            <div className="space-y-2">
                                {activePoint.options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleAnswer(opt)}
                                        disabled={!!pointStates[activePoint.id]?.answered}
                                        className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all font-medium text-sm ${getOptionClass(activePoint.id, opt)}`}
                                    >
                                        <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                                        {opt}
                                    </button>
                                ))}
                            </div>

                            {/* Explanation */}
                            <AnimatePresence>
                                {pointStates[activePoint.id]?.answered && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div
                                            className={`mt-4 p-4 rounded-xl border text-sm leading-relaxed ${
                                                pointStates[activePoint.id].correct
                                                    ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200'
                                                    : 'bg-red-500/20 border-red-400/40 text-red-200'
                                            }`}
                                        >
                                            <span className="font-bold mr-1">
                                                {pointStates[activePoint.id].correct ? '✅ ¡Correcto!' : '❌ Incorrecto.'}
                                            </span>
                                            {activePoint.explanation}
                                        </div>

                                        <button
                                            onClick={() => setShowModal(false)}
                                            className="mt-4 w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-900/40"
                                        >
                                            Continuar →
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
