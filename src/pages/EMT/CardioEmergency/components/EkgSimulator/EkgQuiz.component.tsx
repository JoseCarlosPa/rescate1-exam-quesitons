import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from 'recharts';
import { RhythmType } from './EkgSimulator.types.ts';
import { rhythmData } from './EkgSimultaro.constants.ts';
import { generateBuffer, DISPLAY_WINDOW } from './EkgSimulator.utils.ts';
import { pqrstQuizQuestions } from './EkgQuiz.constants.ts';

// ── Helpers ─────────────────────────────────────────────────────────────────

/** Fisher-Yates shuffle (deterministic seed-offset for reproducibility per question) */
function shuffle<T>(arr: T[], seed: number): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor((Math.sin(seed + i) * 10000 - Math.floor(Math.sin(seed + i) * 10000)) * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const ALL_RHYTHMS = Object.keys(rhythmData) as RhythmType[];
const QUIZZABLE_RHYTHMS = ALL_RHYTHMS.filter(r => r !== 'custom');

interface RhythmQuestion {
    rhythm: RhythmType;
    options: RhythmType[];
    correctIndex: number;
}

function buildRhythmQuestion(seed: number): RhythmQuestion {
    const shuffled = shuffle(QUIZZABLE_RHYTHMS, seed);
    const rhythm = shuffled[0];
    // Pick 3 wrong options from the remaining
    const wrong = shuffled.slice(1, 4);
    const allOpts = shuffle([rhythm, ...wrong], seed + 100);
    const correctIndex = allOpts.indexOf(rhythm);
    return { rhythm, options: allOpts, correctIndex };
}

// ── Sub-component: Rhythm Quiz ───────────────────────────────────────────────

function RhythmQuiz() {
    const [questionSeed, setQuestionSeed] = useState(42);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [total, setTotal] = useState(0);
    const [streak, setStreak] = useState(0);

    const question = useMemo(() => buildRhythmQuestion(questionSeed), [questionSeed]);

    // Static snapshot (first 500 pts of buffer) — no animation needed for quiz
    const ekgSnapshot = useMemo(() => {
        const buffer = generateBuffer(question.rhythm, {
            bpm: 75, pWaveAmplitude: 0.25, qrsAmplitude: 2.0,
            tWaveAmplitude: 0.3, prInterval: 0.16, qrsWidth: 0.08, stElevation: 0,
        });
        return buffer.slice(0, DISPLAY_WINDOW).map((p, i) => ({ time: i, voltage: p.voltage }));
    }, [question.rhythm]);

    const isCorrect = selected === question.correctIndex;
    const answered = selected !== null;

    function handleSelect(idx: number) {
        if (answered) return;
        setSelected(idx);
        setTotal(t => t + 1);
        if (idx === question.correctIndex) {
            setScore(s => s + 1);
            setStreak(s => s + 1);
        } else {
            setStreak(0);
        }
    }

    function nextQuestion() {
        setSelected(null);
        setQuestionSeed(s => s + Math.floor(Math.random() * 100) + 1);
    }

    const info = rhythmData[question.rhythm];

    return (
        <div className="space-y-5">
            {/* Score bar */}
            <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 text-sm">
                <span className="font-semibold text-gray-700">
                    ✅ Correctas: <span className="text-green-600">{score}</span> / {total}
                </span>
                {streak >= 3 && (
                    <span className="text-orange-500 font-bold animate-pulse">🔥 Racha: {streak}</span>
                )}
                <span className="text-gray-500">
                    {total > 0 ? Math.round((score / total) * 100) : 0}%
                </span>
            </div>

            {/* EKG display */}
            <div className="bg-black rounded-lg p-3 border-4 border-gray-700">
                <p className="text-green-400 text-xs font-mono mb-1">¿Qué ritmo es este?</p>
                <div className="h-44">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={ekgSnapshot}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1a3a1a" />
                            <XAxis dataKey="time" stroke="#00ff00" tick={false} />
                            <YAxis stroke="#00ff00" domain={[-1.5, 3]} tick={{ fill: '#00ff00', fontSize: 10 }} />
                            <Line type="monotone" dataKey="voltage" stroke="#00ff00" strokeWidth={2} dot={false} isAnimationActive={false} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {question.options.map((opt, idx) => {
                    const optInfo = rhythmData[opt];
                    let cls = 'border-2 rounded-lg p-3 text-left transition font-medium text-sm ';
                    if (!answered) {
                        cls += 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
                    } else if (idx === question.correctIndex) {
                        cls += 'border-green-500 bg-green-50 text-green-800';
                    } else if (idx === selected) {
                        cls += 'border-red-500 bg-red-50 text-red-800';
                    } else {
                        cls += 'border-gray-200 bg-gray-50 text-gray-400';
                    }
                    return (
                        <button key={opt} className={cls} onClick={() => handleSelect(idx)} disabled={answered}>
                            <span className={optInfo.color}>{optInfo.name}</span>
                            <p className="text-xs text-gray-500 font-normal mt-0.5">
                                {optInfo.bpm > 0 ? `${optInfo.bpm} lpm` : 'Sin pulso'}
                            </p>
                        </button>
                    );
                })}
            </div>

            {/* Feedback */}
            <AnimatePresence>
                {answered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`rounded-lg p-4 border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}
                    >
                        <p className={`font-bold mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                            {isCorrect ? '✅ ¡Correcto!' : `❌ Incorrecto — Era: ${info.name}`}
                        </p>
                        <p className="text-sm text-gray-700 mb-2">{info.explanation}</p>
                        <div className="text-xs text-gray-600 space-y-0.5">
                            <p><strong>Presentación:</strong> {info.clinical}</p>
                            <p><strong>Tratamiento:</strong> {info.treatment}</p>
                        </div>
                        <button
                            onClick={nextQuestion}
                            className="mt-3 px-5 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition"
                        >
                            Siguiente ritmo →
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Sub-component: PQRST Quiz ────────────────────────────────────────────────

function PqrstQuiz() {
    const [qIndex, setQIndex] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [score, setScore] = useState(0);
    const [completed, setCompleted] = useState(false);

    // Shuffle questions once per mount
    const questions = useMemo(() => shuffle(pqrstQuizQuestions, Date.now() % 1000), []);
    const question = questions[qIndex];
    const answered = selected !== null;
    const isCorrect = selected === question.correctIndex;
    const isLast = qIndex === questions.length - 1;

    function handleSelect(idx: number) {
        if (answered) return;
        setSelected(idx);
        if (idx === question.correctIndex) setScore(s => s + 1);
    }

    function next() {
        if (isLast) {
            setCompleted(true);
        } else {
            setQIndex(i => i + 1);
            setSelected(null);
        }
    }

    function restart() {
        setQIndex(0);
        setSelected(null);
        setScore(0);
        setCompleted(false);
    }

    if (completed) {
        const pct = Math.round((score / questions.length) * 100);
        return (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4">
                <p className="text-5xl">{pct >= 80 ? '🏆' : pct >= 60 ? '📚' : '💪'}</p>
                <h3 className="text-2xl font-bold text-gray-800">Quiz completado</h3>
                <p className="text-lg text-gray-600">
                    Resultado: <span className="font-bold text-blue-600">{score}/{questions.length}</span> ({pct}%)
                </p>
                <p className="text-sm text-gray-500">
                    {pct >= 80 ? '¡Excelente dominio del EKG!' : pct >= 60 ? 'Buen avance. Repasa las secciones PQRST.' : 'Sigue practicando — revisa la sección de Componentes.'}
                </p>
                <button onClick={restart}
                    className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
                    🔄 Reiniciar Quiz
                </button>
            </motion.div>
        );
    }

    return (
        <div className="space-y-5">
            {/* Progress */}
            <div className="flex items-center gap-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${((qIndex) / questions.length) * 100}%` }}
                    />
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                    {qIndex + 1} / {questions.length}
                </span>
            </div>

            {/* Category badge */}
            <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full ${question.category === 'pqrst' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                {question.category === 'pqrst' ? '📊 PQRST' : '🏥 Clínico'}
            </span>

            {/* Question */}
            <p className="text-gray-800 font-semibold text-base leading-snug">{question.question}</p>

            {/* Options */}
            <div className="space-y-2">
                {question.options.map((opt, idx) => {
                    let cls = 'w-full text-left border-2 rounded-lg px-4 py-2.5 text-sm transition ';
                    if (!answered) {
                        cls += 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
                    } else if (idx === question.correctIndex) {
                        cls += 'border-green-500 bg-green-50 text-green-800 font-medium';
                    } else if (idx === selected) {
                        cls += 'border-red-500 bg-red-50 text-red-700';
                    } else {
                        cls += 'border-gray-200 bg-gray-50 text-gray-400';
                    }
                    return (
                        <button key={idx} className={cls} onClick={() => handleSelect(idx)} disabled={answered}>
                            <span className="mr-2 font-bold">{String.fromCharCode(65 + idx)}.</span>
                            {opt}
                        </button>
                    );
                })}
            </div>

            {/* Feedback */}
            <AnimatePresence>
                {answered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={`rounded-lg p-4 border-l-4 ${isCorrect ? 'bg-green-50 border-green-500' : 'bg-orange-50 border-orange-400'}`}
                    >
                        <p className={`font-bold mb-1 text-sm ${isCorrect ? 'text-green-700' : 'text-orange-700'}`}>
                            {isCorrect ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                        </p>
                        <p className="text-sm text-gray-700">{question.explanation}</p>
                        <button
                            onClick={next}
                            className="mt-3 px-5 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-semibold transition"
                        >
                            {isLast ? 'Ver resultado 🏁' : 'Siguiente →'}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ── Main Export ──────────────────────────────────────────────────────────────

type QuizMode = 'rhythm' | 'pqrst';

export default function EkgQuiz() {
    const [mode, setMode] = useState<QuizMode>('rhythm');

    return (
        <div className="space-y-5">
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">🧠 Modo Quiz — Identifica y Aprende</h3>
                <p className="text-sm text-gray-500">Pon a prueba tu lectura de EKG y conocimiento de componentes PQRST.</p>
            </div>

            {/* Mode selector */}
            <div className="flex gap-3">
                <button
                    onClick={() => setMode('rhythm')}
                    className={`flex-1 py-2 rounded-lg font-semibold text-sm transition border-2 ${mode === 'rhythm' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
                >
                    🫀 Identifica el Ritmo
                </button>
                <button
                    onClick={() => setMode('pqrst')}
                    className={`flex-1 py-2 rounded-lg font-semibold text-sm transition border-2 ${mode === 'pqrst' ? 'border-orange-500 bg-orange-50 text-orange-700' : 'border-gray-300 text-gray-600 hover:border-gray-400'}`}
                >
                    📊 Preguntas PQRST
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={mode}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                >
                    {mode === 'rhythm' ? <RhythmQuiz /> : <PqrstQuiz />}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

