import React, { useState, useCallback, useRef } from 'react';
import { NavLink } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { PROTOCOLS, CATEGORIES, DIFFICULTY_CONFIG } from './ProtocolOrder.constants';
import {
    Protocol,
    ProtocolStep,
    GameState,
    ProtocolDifficulty,
    DragState,
} from './ProtocolOrder.types';

// ─── Utility ────────────────────────────────────────────────────────────────

function shuffleArray<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
}

function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
}

// ─── Setup Screen ───────────────────────────────────────────────────────────

interface SetupProps {
    onStart: (protocol: Protocol) => void;
}

function SetupScreen({ onStart }: SetupProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedDifficulty, setSelectedDifficulty] = useState<ProtocolDifficulty>('easy');
    const [hovered, setHovered] = useState<string | null>(null);



    const filtered = PROTOCOLS.filter(
        (p) =>
            (selectedCategory === 'all' || p.category === selectedCategory) &&
            (selectedDifficulty === 'expert' || p.difficulty === selectedDifficulty ||
                (selectedDifficulty === 'medium' && (p.difficulty === 'easy' || p.difficulty === 'medium')) ||
                (selectedDifficulty === 'hard' && p.difficulty !== 'expert'))
    );

    const diffColors: Record<ProtocolDifficulty, string> = {
        easy: 'from-emerald-500 to-green-600',
        medium: 'from-yellow-500 to-amber-600',
        hard: 'from-orange-500 to-red-600',
        expert: 'from-red-600 to-rose-800',
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-4 py-10">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-purple-500/40 mb-6 animate-pulse">
                        <span className="text-5xl">📋</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 mb-3">
                        Completar el Protocolo
                    </h1>
                    <p className="text-gray-400 text-lg max-w-xl mx-auto">
                        Ordena los pasos del protocolo médico en la secuencia correcta
                    </p>
                </div>

                {/* Difficulty */}
                <div className="mb-8">
                    <h2 className="text-gray-300 font-bold text-lg mb-4 text-center tracking-widest uppercase text-sm">
                        🎯 Nivel de Dificultad
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
                        {(Object.keys(DIFFICULTY_CONFIG) as ProtocolDifficulty[]).map((d) => {
                            const dc = DIFFICULTY_CONFIG[d];
                            return (
                                <button
                                    key={d}
                                    onClick={() => setSelectedDifficulty(d)}
                                    className={`relative py-4 px-3 rounded-2xl font-bold transition-all duration-300 transform border-2 ${
                                        selectedDifficulty === d
                                            ? `bg-gradient-to-br ${diffColors[d]} border-white/30 scale-105 shadow-xl`
                                            : 'bg-white/5 border-white/10 hover:border-white/25 hover:scale-102'
                                    }`}
                                >
                                    <div className="text-2xl mb-1">{dc.icon}</div>
                                    <div className="text-white text-sm">{dc.label}</div>
                                    {selectedDifficulty === d && (
                                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Categories */}
                <div className="mb-8">
                    <h2 className="text-gray-300 font-bold text-lg mb-4 text-center tracking-widest uppercase text-sm">
                        🏥 Categoría
                    </h2>
                    <div className="flex flex-wrap gap-2 justify-center">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 border ${
                                    selectedCategory === cat.id
                                        ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg scale-105`
                                        : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/25 hover:text-white'
                                }`}
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Protocol Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16 text-gray-500">
                        <div className="text-5xl mb-4">🔍</div>
                        <p>No hay protocolos disponibles con estos filtros.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filtered.map((protocol) => (
                            <button
                                key={protocol.id}
                                onClick={() => onStart(protocol)}
                                onMouseEnter={() => setHovered(protocol.id)}
                                onMouseLeave={() => setHovered(null)}
                                className={`relative text-left bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 transition-all duration-300 group ${
                                    hovered === protocol.id
                                        ? 'border-white/30 shadow-xl scale-[1.02] bg-white/10'
                                        : 'hover:border-white/20'
                                }`}
                            >
                                {/* Gradient overlay */}
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${protocol.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                                />
                                <div className="relative">
                                    <div className="flex items-start justify-between mb-3">
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${protocol.color} flex items-center justify-center text-2xl shadow-lg`}
                                        >
                                            {protocol.icon}
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <span
                                                className={`px-2 py-0.5 rounded-full text-xs font-bold bg-gradient-to-r ${diffColors[protocol.difficulty]} text-white`}
                                            >
                                                {DIFFICULTY_CONFIG[protocol.difficulty].label}
                                            </span>
                                            <span className="text-gray-500 text-xs">
                                                {protocol.steps.length} pasos
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                                        {protocol.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                                        {protocol.description}
                                    </p>
                                    {protocol.source && (
                                        <p className="text-indigo-400 text-xs">
                                            📚 {protocol.source}
                                        </p>
                                    )}
                                </div>
                                {/* Play arrow */}
                                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-sm">▶</span>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                <div className="text-center mt-10">
                    <NavLink
                        to={AllRoutes.GAMES}
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-gray-300 font-semibold py-3 px-8 rounded-full transition-all border border-white/10"
                    >
                        ← Volver a Juegos
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

// ─── Draggable Step Card ─────────────────────────────────────────────────────

interface StepCardProps {
    step: ProtocolStep;
    index: number;
    isDragging: boolean;
    isDragOver: boolean;
    isSubmitted: boolean;
    isCorrect?: boolean;
    onDragStart: (id: string) => void;
    onDragEnd: () => void;
    onDragOver: (id: string) => void;
    onDrop: (targetId: string) => void;
    // Touch
    onTouchStart: (e: React.TouchEvent, id: string) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
}

function StepCard({
    step,
    index,
    isDragging,
    isDragOver,
    isSubmitted,
    isCorrect,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
}: StepCardProps) {
    const getBgClass = () => {
        if (isSubmitted) {
            return isCorrect
                ? 'bg-emerald-500/20 border-emerald-400/60'
                : 'bg-red-500/20 border-red-400/60';
        }
        if (isDragOver) return 'bg-indigo-500/20 border-indigo-400/60 scale-[1.02]';
        if (isDragging) return 'opacity-40 border-white/20';
        return 'bg-white/8 border-white/15 hover:bg-white/12 hover:border-white/30';
    };

    return (
        <div
            draggable={!isSubmitted}
            onDragStart={() => onDragStart(step.id)}
            onDragEnd={onDragEnd}
            onDragOver={(e) => { e.preventDefault(); onDragOver(step.id); }}
            onDrop={(e) => { e.preventDefault(); onDrop(step.id); }}
            onTouchStart={(e) => onTouchStart(e, step.id)}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            data-stepid={step.id}
            className={`
                flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 select-none
                ${getBgClass()}
                ${!isSubmitted ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
            `}
            style={{ touchAction: 'none' }}
        >
            {/* Position number */}
            <div className={`
                flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center font-black text-lg
                ${isSubmitted
                    ? isCorrect ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'
                    : 'bg-indigo-600/60 text-indigo-200'}
            `}>
                {isSubmitted ? (isCorrect ? '✓' : '✗') : index + 1}
            </div>

            {/* Emoji */}
            {step.emoji && (
                <span className="text-xl flex-shrink-0">{step.emoji}</span>
            )}

            {/* Text */}
            <p className="text-white text-sm md:text-base flex-1 leading-snug font-medium">
                {step.text}
            </p>

            {/* Drag handle */}
            {!isSubmitted && (
                <div className="flex-shrink-0 text-gray-500 flex flex-col gap-0.5">
                    <div className="w-4 h-0.5 bg-current rounded" />
                    <div className="w-4 h-0.5 bg-current rounded" />
                    <div className="w-4 h-0.5 bg-current rounded" />
                </div>
            )}
        </div>
    );
}

// ─── Game Screen ─────────────────────────────────────────────────────────────

interface GameScreenProps {
    gameState: GameState;
    dragState: DragState;
    elapsedSeconds: number;
    hintsVisible: boolean;
    onDragStart: (id: string) => void;
    onDragEnd: () => void;
    onDragOver: (id: string) => void;
    onDrop: (targetId: string) => void;
    onTouchStart: (e: React.TouchEvent, id: string) => void;
    onTouchMove: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
    onSubmit: () => void;
    onRevealHint: () => void;
    onReset: () => void;
    onBack: () => void;
}

function GameScreen({
    gameState,
    dragState,
    elapsedSeconds,
    hintsVisible,
    onDragStart,
    onDragEnd,
    onDragOver,
    onDrop,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onSubmit,
    onRevealHint,
    onReset,
    onBack,
}: GameScreenProps) {
    const protocol = gameState.selectedProtocol!;
    const totalSteps = protocol.steps.length;
    const correctCount = gameState.correctPositions.filter(Boolean).length;
    const accuracy = gameState.isSubmitted
        ? Math.round((correctCount / totalSteps) * 100)
        : 0;

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 p-4 py-8">
            <div className="max-w-3xl mx-auto">
                {/* Header bar */}
                <div className="flex items-center justify-between mb-6 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                    <button
                        onClick={onBack}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1"
                    >
                        ← Salir
                    </button>
                    <div className="text-center">
                        <div
                            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${protocol.color} text-white`}
                        >
                            <span>{protocol.icon}</span>
                            <span>{protocol.title}</span>
                        </div>
                    </div>
                    <div className="text-white font-mono font-bold text-lg">
                        ⏱ {formatTime(elapsedSeconds)}
                    </div>
                </div>

                {/* Tip box */}
                {protocol.tip && (
                    <div className="mb-5 bg-indigo-500/10 border border-indigo-400/30 rounded-xl p-3 flex items-start gap-3">
                        <span className="text-xl flex-shrink-0">💡</span>
                        <p className="text-indigo-300 text-sm">{protocol.tip}</p>
                    </div>
                )}

                {/* Instructions */}
                {!gameState.isSubmitted && (
                    <p className="text-gray-400 text-sm text-center mb-5">
                        Arrastra los pasos para ordenarlos correctamente ↕️
                    </p>
                )}

                {/* Steps list */}
                <div className="space-y-2 mb-6">
                    {gameState.orderedSteps.map((step, index) => (
                        <StepCard
                            key={step.id}
                            step={step}
                            index={index}
                            isDragging={dragState.draggingId === step.id}
                            isDragOver={dragState.dragOverId === step.id}
                            isSubmitted={gameState.isSubmitted}
                            isCorrect={gameState.correctPositions[index]}
                            onDragStart={onDragStart}
                            onDragEnd={onDragEnd}
                            onDragOver={onDragOver}
                            onDrop={onDrop}
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        />
                    ))}
                </div>

                {/* Hints (after submission) */}
                {gameState.isSubmitted && hintsVisible && (
                    <div className="mb-6 bg-white/5 rounded-2xl p-5 border border-white/10">
                        <h3 className="text-indigo-300 font-bold mb-3">📚 Orden Correcto</h3>
                        <ol className="space-y-2">
                            {protocol.steps.map((step, i) => (
                                <li key={step.id} className="flex items-start gap-3 text-sm">
                                    <span className="bg-indigo-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                        {i + 1}
                                    </span>
                                    <div>
                                        <p className="text-white">{step.emoji} {step.text}</p>
                                        {step.hint && (
                                            <p className="text-gray-400 text-xs mt-0.5">💬 {step.hint}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-3 justify-center">
                    {!gameState.isSubmitted ? (
                        <>
                            <button
                                onClick={onRevealHint}
                                disabled={gameState.hintsUsed >= 3}
                                className="px-5 py-3 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-300 font-semibold text-sm hover:bg-amber-500/30 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                                💡 Pista ({3 - gameState.hintsUsed} restantes)
                            </button>
                            <button
                                onClick={onReset}
                                className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/10 transition-all"
                            >
                                🔀 Mezclar
                            </button>
                            <button
                                onClick={onSubmit}
                                className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:scale-105 transform"
                            >
                                ✅ Verificar Orden
                            </button>
                        </>
                    ) : (
                        <>
                            <div className="w-full text-center mb-2">
                                <p className={`text-2xl font-black ${accuracy >= 80 ? 'text-emerald-400' : accuracy >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                                    {correctCount}/{totalSteps} correctos — {accuracy}% precisión
                                </p>
                            </div>
                            <button
                                onClick={onBack}
                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/10 transition-all"
                            >
                                ← Otro Protocolo
                            </button>
                            <button
                                onClick={onReset}
                                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-sm hover:from-indigo-600 hover:to-purple-700 transition-all shadow-lg"
                            >
                                🔄 Reintentar
                            </button>
                        </>
                    )}
                </div>

                {/* Score display */}
                {gameState.isSubmitted && (
                    <div className="mt-6 text-center">
                        <div className="inline-flex items-center gap-3 bg-white/5 rounded-2xl px-6 py-4 border border-white/10">
                            <div className="text-4xl">
                                {accuracy >= 90 ? '🏆' : accuracy >= 70 ? '🎉' : accuracy >= 50 ? '💪' : '📚'}
                            </div>
                            <div>
                                <p className="text-white font-bold text-lg">
                                    {accuracy >= 90 ? '¡Excelente dominio!' :
                                        accuracy >= 70 ? '¡Muy bien!' :
                                            accuracy >= 50 ? '¡Sigue practicando!' :
                                                '¡Estudia este protocolo!'}
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Puntuación: {gameState.score.toLocaleString()} pts • Tiempo: {formatTime(elapsedSeconds)}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

// ─── Hint Overlay ────────────────────────────────────────────────────────────

interface HintOverlayProps {
    step: ProtocolStep;
    position: number;
    total: number;
    onClose: () => void;
}

function HintOverlay({ step, position, total, onClose }: HintOverlayProps) {
    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="max-w-md w-full bg-gradient-to-br from-amber-900/80 to-amber-800/80 border border-amber-400/40 rounded-3xl p-8 text-center shadow-2xl">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-amber-300 font-bold text-xl mb-2">Pista — Paso #{position}</h3>
                <p className="text-white text-lg font-medium mb-2">
                    {step.emoji} {step.text}
                </p>
                <div className="bg-white/10 rounded-xl p-4 mb-6">
                    <p className="text-amber-200 text-sm">{step.hint}</p>
                </div>
                <p className="text-amber-400/60 text-xs mb-4">Paso {position} de {total}</p>
                <button
                    onClick={onClose}
                    className="px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold transition-all"
                >
                    Entendido ✓
                </button>
            </div>
        </div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ProtocolOrder() {
    const [phase, setPhase] = useState<'setup' | 'playing'>('setup');
    const [selectedProtocol, setSelectedProtocol] = useState<Protocol | null>(null);
    const [orderedSteps, setOrderedSteps] = useState<ProtocolStep[]>([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [correctPositions, setCorrectPositions] = useState<boolean[]>([]);
    const [score, setScore] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const [hintsUsed, setHintsUsed] = useState(0);
    const [hintsVisible, setHintsVisible] = useState(false);
    const [hintOverlay, setHintOverlay] = useState<{ step: ProtocolStep; position: number } | null>(null);

    const [dragState, setDragState] = useState<DragState>({ draggingId: null, dragOverId: null });
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Touch drag state
    const touchDraggingId = useRef<string | null>(null);
    const touchLastY = useRef<number>(0);

    const startTimer = useCallback(() => {
        const t = Date.now();
        setStartTime(t);
        setElapsed(0);
        timerRef.current = setInterval(() => {
            setElapsed(Math.floor((Date.now() - t) / 1000));
        }, 1000);
    }, []);

    const stopTimer = useCallback(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    const handleStart = useCallback(
        (protocol: Protocol) => {
            setSelectedProtocol(protocol);
            setOrderedSteps(shuffleArray(protocol.steps));
            setIsSubmitted(false);
            setCorrectPositions([]);
            setScore(0);
            setHintsUsed(0);
            setHintsVisible(false);
            setPhase('playing');
            startTimer();
        },
        [startTimer]
    );

    const handleBack = useCallback(() => {
        stopTimer();
        setPhase('setup');
        setSelectedProtocol(null);
    }, [stopTimer]);

    const handleReset = useCallback(() => {
        if (!selectedProtocol) return;
        stopTimer();
        setOrderedSteps(shuffleArray(selectedProtocol.steps));
        setIsSubmitted(false);
        setCorrectPositions([]);
        setScore(0);
        setHintsUsed(0);
        setHintsVisible(false);
        startTimer();
    }, [selectedProtocol, startTimer, stopTimer]);

    // Drag handlers
    const handleDragStart = useCallback((id: string) => {
        setDragState((s) => ({ ...s, draggingId: id }));
    }, []);

    const handleDragEnd = useCallback(() => {
        setDragState({ draggingId: null, dragOverId: null });
    }, []);

    const handleDragOver = useCallback((id: string) => {
        setDragState((s) => ({ ...s, dragOverId: id }));
    }, []);

    const handleDrop = useCallback(
        (targetId: string) => {
            const fromId = dragState.draggingId;
            if (!fromId || fromId === targetId) {
                setDragState({ draggingId: null, dragOverId: null });
                return;
            }
            setOrderedSteps((prev) => {
                const arr = [...prev];
                const fromIdx = arr.findIndex((s) => s.id === fromId);
                const toIdx = arr.findIndex((s) => s.id === targetId);
                if (fromIdx === -1 || toIdx === -1) return arr;
                const [item] = arr.splice(fromIdx, 1);
                arr.splice(toIdx, 0, item);
                return arr;
            });
            setDragState({ draggingId: null, dragOverId: null });
        },
        [dragState.draggingId]
    );

    // Touch drag handlers
    const handleTouchStart = useCallback((e: React.TouchEvent, id: string) => {
        touchDraggingId.current = id;
        touchLastY.current = e.touches[0].clientY;
        setDragState((s) => ({ ...s, draggingId: id }));
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        if (!touchDraggingId.current) return;
        const currentY = e.touches[0].clientY;
        const delta = currentY - touchLastY.current;
        touchLastY.current = currentY;

        // Find element under touch
        const el = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
        if (el) {
            const card = el.closest('[data-stepid]') as HTMLElement | null;
            if (card) {
                const overId = card.dataset.stepid;
                if (overId && overId !== touchDraggingId.current) {
                    setDragState((s) => ({ ...s, dragOverId: overId }));
                }
            }
        }
        void delta;
    }, []);

    const handleTouchEnd = useCallback(
        (e: React.TouchEvent) => {
            const fromId = touchDraggingId.current;
            const toId = dragState.dragOverId;
            if (fromId && toId && fromId !== toId) {
                handleDrop(toId);
            }
            touchDraggingId.current = null;
            setDragState({ draggingId: null, dragOverId: null });
            void e;
        },
        [dragState.dragOverId, handleDrop]
    );

    const handleSubmit = useCallback(() => {
        if (!selectedProtocol) return;
        stopTimer();
        const correct = orderedSteps.map(
            (step, index) => step.order === index + 1
        );
        setCorrectPositions(correct);
        setIsSubmitted(true);
        setHintsVisible(true);

        const correctCount = correct.filter(Boolean).length;
        const accuracy = correctCount / selectedProtocol.steps.length;
        const timeBonus = Math.max(0, 300 - elapsed) * 2;
        const hintPenalty = hintsUsed * 50;
        const calculatedScore = Math.round(accuracy * 1000 + timeBonus - hintPenalty);
        setScore(Math.max(0, calculatedScore));
    }, [selectedProtocol, orderedSteps, elapsed, hintsUsed, stopTimer]);

    const handleRevealHint = useCallback(() => {
        if (!selectedProtocol || hintsUsed >= 3) return;
        // Show hint for a random un-positioned step
        const wrongIndex = orderedSteps.findIndex(
            (step, i) => step.order !== i + 1
        );
        if (wrongIndex === -1) return;
        const step = orderedSteps[wrongIndex];
        setHintOverlay({ step, position: step.order });
        setHintsUsed((n) => n + 1);
    }, [selectedProtocol, orderedSteps, hintsUsed]);

    const gameState: GameState = {
        phase,
        selectedProtocol,
        orderedSteps,
        isSubmitted,
        score,
        startTime,
        endTime: isSubmitted ? startTime + elapsed * 1000 : null,
        attempts: 0,
        correctPositions,
        hintsUsed,
        streak: 0,
    };

    return (
        <>
            {phase === 'setup' ? (
                <SetupScreen onStart={handleStart} />
            ) : (
                <GameScreen
                    gameState={gameState}
                    dragState={dragState}
                    elapsedSeconds={elapsed}
                    hintsVisible={hintsVisible}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    onSubmit={handleSubmit}
                    onRevealHint={handleRevealHint}
                    onReset={handleReset}
                    onBack={handleBack}
                />
            )}

            {hintOverlay && (
                <HintOverlay
                    step={hintOverlay.step}
                    position={hintOverlay.position}
                    total={selectedProtocol?.steps.length ?? 0}
                    onClose={() => setHintOverlay(null)}
                />
            )}
        </>
    );
}
