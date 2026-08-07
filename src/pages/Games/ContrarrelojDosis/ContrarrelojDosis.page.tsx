import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { AllRoutes } from '../../../components/Router/Router.constants';
import type { DosageQuestion, RoundResult, DoseDifficulty, DrugCategory } from './ContrarrelojDosis.types';
import {
  DOSAGE_QUESTIONS,
  CATEGORY_INFO,
  DIFFICULTY_INFO,
  QUESTIONS_PER_ROUND,
  LETTER_LABELS,
} from './ContrarrelojDosis.constants';

// ─────────────────────────────────────────────────────────────────────────────
// CircularTimer component
// ─────────────────────────────────────────────────────────────────────────────
function CircularTimer({ timeRemaining, timeLimit }: { timeRemaining: number; timeLimit: number }) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLimit > 0 ? timeRemaining / timeLimit : 0;
  const dashOffset = circumference * (1 - progress);
  const strokeColor =
    progress > 0.5 ? '#10b981' : progress > 0.25 ? '#f59e0b' : '#ef4444';

  return (
    <svg width="120" height="120" viewBox="0 0 100 100" className="drop-shadow-lg">
      <circle cx="50" cy="50" r={radius} fill="none" stroke="#1e293b" strokeWidth="8" />
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth="8"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
        transform="rotate(-90 50 50)"
        style={{ transition: 'stroke-dashoffset 0.1s linear, stroke 0.3s' }}
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="22"
        fontWeight="bold"
      >
        {timeRemaining}
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Setup Screen
// ─────────────────────────────────────────────────────────────────────────────
function SetupScreen({
  onStart,
}: {
  onStart: (category: DrugCategory | 'all', difficulty: DoseDifficulty) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<DrugCategory | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DoseDifficulty>('easy');

  const categories = Object.entries(CATEGORY_INFO) as [DrugCategory | 'all', typeof CATEGORY_INFO.all][];
  const difficulties = Object.entries(DIFFICULTY_INFO) as [DoseDifficulty, typeof DIFFICULTY_INFO.easy][];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-pink-950 p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <NavLink
          to={AllRoutes.GAMES}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Juegos</span>
        </NavLink>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="text-6xl mb-4">⏱️</div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 bg-clip-text text-transparent mb-3">
            Contrarreloj de Dosis
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Calcula la dosis correcta antes de que se acabe el tiempo. Cada segundo cuenta.
          </p>
        </motion.div>

        {/* Category selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span>💊</span> Categoría de Medicamentos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map(([key, info]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${
                  selectedCategory === key
                    ? `${info.bgColor} ${info.borderColor} scale-105 shadow-lg`
                    : 'bg-slate-800/40 border-slate-700/40 hover:bg-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <div className="text-2xl mb-1">{info.emoji}</div>
                <div className={`font-semibold text-sm ${selectedCategory === key ? info.textColor : 'text-white'}`}>
                  {info.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-tight">{info.description}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Difficulty selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <h2 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span>🎯</span> Dificultad
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {difficulties.map(([key, info]) => (
              <button
                key={key}
                onClick={() => setSelectedDifficulty(key)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedDifficulty === key
                    ? `${info.bgColor} ${info.borderColor} scale-105 shadow-lg`
                    : 'bg-slate-800/40 border-slate-700/40 hover:bg-slate-700/50 hover:border-slate-600/50'
                }`}
              >
                <div className="text-xl mb-1">{info.emoji}</div>
                <div className={`font-bold ${selectedDifficulty === key ? info.color : 'text-white'}`}>
                  {info.label}
                </div>
                <div className="text-xs text-slate-500 mt-1 leading-tight">{info.description}</div>
                <div className="text-xs text-slate-600 mt-1">{info.timeDescription}</div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Start button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          onClick={() => onStart(selectedCategory, selectedDifficulty)}
          className="w-full py-5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-xl transition-all duration-200 shadow-lg hover:shadow-rose-500/30 hover:scale-[1.02] active:scale-[0.98]"
        >
          🚀 Iniciar Carrera
        </motion.button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Game Screen
// ─────────────────────────────────────────────────────────────────────────────
function GameScreen({
  questions,
  currentIndex,
  timeRemaining,
  streak,
  score,
  difficulty,
  onAnswer,
  results,
}: {
  questions: DosageQuestion[];
  currentIndex: number;
  timeRemaining: number;
  streak: number;
  score: number;
  difficulty: DoseDifficulty;
  onAnswer: (answer: string) => void;
  results: RoundResult[];
}) {
  const question = questions[currentIndex];
  const lastResult = results[results.length - 1];
  const isAnswered = results.length > currentIndex;
  const selectedAnswer = isAnswered ? lastResult.selectedAnswer : null;
  const timedOut = isAnswered && !lastResult.isCorrect && lastResult.selectedAnswer === null;

  const getOptionClass = (option: string) => {
    if (!isAnswered) {
      return 'bg-slate-800/60 border-slate-600/40 hover:bg-slate-700/70 hover:border-slate-500/60 hover:scale-[1.02] cursor-pointer';
    }
    if (option === question.correct) {
      return 'bg-emerald-900/60 border-emerald-500/60 ring-2 ring-emerald-400/40';
    }
    if (option === selectedAnswer && option !== question.correct) {
      return 'bg-red-900/60 border-red-500/60 ring-2 ring-red-400/40';
    }
    return 'bg-slate-800/30 border-slate-600/20 opacity-50';
  };

  const getLetterClass = (option: string) => {
    if (!isAnswered) return 'bg-slate-700 text-slate-300';
    if (option === question.correct) return 'bg-emerald-600 text-white';
    if (option === selectedAnswer && option !== question.correct) return 'bg-red-600 text-white';
    return 'bg-slate-700 text-slate-400';
  };

  const catInfo = CATEGORY_INFO[question.category];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-pink-950 p-3 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-5 gap-3">
          {/* Progress */}
          <div className="bg-slate-800/60 rounded-xl px-4 py-2 border border-slate-700/40">
            <div className="text-xs text-slate-400">Pregunta</div>
            <div className="text-white font-bold">
              {currentIndex + 1}
              <span className="text-slate-500">/{questions.length}</span>
            </div>
          </div>

          {/* Streak */}
          <div className="bg-slate-800/60 rounded-xl px-4 py-2 border border-slate-700/40 text-center">
            <div className="text-xs text-slate-400">Racha</div>
            <div className="font-bold text-amber-400">
              {streak >= 3 ? '🔥' : '⚡'} {streak}
            </div>
          </div>

          {/* Circular timer */}
          <CircularTimer timeRemaining={timeRemaining} timeLimit={question.timeLimit} />

          {/* Score */}
          <div className="bg-slate-800/60 rounded-xl px-4 py-2 border border-slate-700/40 text-center">
            <div className="text-xs text-slate-400">Puntos</div>
            <div className="font-bold text-rose-400">{score.toLocaleString()}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mb-5 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Case card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`rounded-2xl border p-5 mb-4 ${catInfo.bgColor} ${catInfo.borderColor}`}>
              {/* Drug header */}
              <div className="text-center mb-4">
                <div className="text-5xl mb-2">{question.drugEmoji}</div>
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${catInfo.textColor} ${catInfo.borderColor} bg-black/20`}>
                  {question.drug} • {catInfo.label}
                </span>
              </div>

              {/* Patient info */}
              {question.patientInfo && (
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {question.patientInfo.age !== undefined && (
                    <div className="bg-black/20 rounded-lg p-2 text-center">
                      <div className="text-xs text-slate-500">Edad</div>
                      <div className="text-white font-bold text-sm">{question.patientInfo.age} años</div>
                    </div>
                  )}
                  {question.patientInfo.weight !== undefined && (
                    <div className="bg-black/20 rounded-lg p-2 text-center">
                      <div className="text-xs text-slate-500">Peso</div>
                      <div className="text-white font-bold text-sm">{question.patientInfo.weight} kg</div>
                    </div>
                  )}
                  <div className={`bg-black/20 rounded-lg p-2 text-center ${question.patientInfo.age === undefined || question.patientInfo.weight === undefined ? 'col-span-2' : ''}`}>
                    <div className="text-xs text-slate-500">Condición</div>
                    <div className={`font-semibold text-xs leading-tight ${catInfo.textColor}`}>
                      {question.patientInfo.condition}
                    </div>
                  </div>
                </div>
              )}

              {/* Scenario */}
              <div className="bg-black/20 rounded-xl p-3 mb-3 border border-white/5">
                <div className="text-xs text-slate-500 mb-1 flex items-center gap-1">
                  <span>📋</span> Caso Clínico
                </div>
                <p className="text-slate-200 text-sm leading-relaxed">{question.scenario}</p>
              </div>

              {/* Formula hint (hide for hard) */}
              {question.formula && difficulty !== 'hard' && (
                <div className="bg-black/30 rounded-lg px-3 py-2 border border-yellow-500/20 flex items-center gap-2">
                  <span className="text-yellow-400 text-sm">💡</span>
                  <span className="text-yellow-300 text-xs font-mono">{question.formula}</span>
                </div>
              )}
            </div>

            {/* Question text */}
            <p className="text-white font-bold text-lg mb-4 px-1 leading-snug">{question.question}</p>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              {question.options.map((option, idx) => (
                <motion.button
                  key={option}
                  whileTap={!isAnswered ? { scale: 0.97 } : {}}
                  onClick={() => !isAnswered && onAnswer(option)}
                  disabled={isAnswered}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 text-left ${getOptionClass(option)}`}
                >
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${getLetterClass(option)}`}>
                    {LETTER_LABELS[idx]}
                  </span>
                  <span className="text-white text-sm leading-tight">{option}</span>
                  {isAnswered && option === question.correct && (
                    <span className="ml-auto text-emerald-400 text-lg">✓</span>
                  )}
                  {isAnswered && option === selectedAnswer && option !== question.correct && (
                    <span className="ml-auto text-red-400 text-lg">✗</span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Time-up banner */}
            <AnimatePresence>
              {timedOut && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-950/60 border border-red-500/40 rounded-xl p-3 mb-3 text-center"
                >
                  <p className="text-red-300 font-bold">⏰ ¡Tiempo agotado!</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Explanation panel */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 20, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className={`rounded-xl border p-4 ${lastResult.isCorrect ? 'bg-emerald-950/60 border-emerald-500/40' : 'bg-red-950/50 border-red-500/30'}`}>
                    {/* Points earned */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{lastResult.isCorrect ? '✅' : '❌'}</span>
                        <span className={`font-bold ${lastResult.isCorrect ? 'text-emerald-300' : 'text-red-300'}`}>
                          {lastResult.isCorrect ? '¡Correcto!' : 'Incorrecto'}
                        </span>
                      </div>
                      {lastResult.isCorrect && (
                        <div className="text-right">
                          <span className="text-xs text-slate-400">Puntos ganados</span>
                          <div className="text-emerald-300 font-bold">+{lastResult.pointsEarned}</div>
                        </div>
                      )}
                    </div>

                    {/* Correct answer (if wrong) */}
                    {!lastResult.isCorrect && (
                      <div className="bg-emerald-950/40 rounded-lg px-3 py-2 mb-3 border border-emerald-700/30">
                        <span className="text-xs text-slate-400">Respuesta correcta: </span>
                        <span className="text-emerald-300 font-semibold text-sm">{question.correct}</span>
                      </div>
                    )}

                    {/* Explanation */}
                    <p className="text-slate-300 text-sm leading-relaxed mb-2">{question.explanation}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">📚</span>
                      <span className="text-xs text-slate-500 italic">{question.reference}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Result Screen
// ─────────────────────────────────────────────────────────────────────────────
function ResultScreen({
  results,
  score,
  maxStreak,
  onReplay,
}: {
  results: RoundResult[];
  score: number;
  maxStreak: number;
  onReplay: () => void;
}) {
  const total = results.length;
  const correct = results.filter((r) => r.isCorrect).length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
  const avgTime =
    total > 0
      ? Math.round(results.reduce((sum, r) => sum + r.timeUsed, 0) / total)
      : 0;

  const getPerformanceInfo = () => {
    if (accuracy >= 90) return { emoji: '🏆', msg: '¡Maestro de Dosis! Precisión excepcional.', color: 'text-yellow-400' };
    if (accuracy >= 75) return { emoji: '🥇', msg: '¡Excelente trabajo! Estás listo para el campo.', color: 'text-emerald-400' };
    if (accuracy >= 60) return { emoji: '🥈', msg: 'Buen desempeño. Sigue practicando las dosis.', color: 'text-sky-400' };
    if (accuracy >= 40) return { emoji: '🥉', msg: 'En camino. Revisa los medicamentos fallados.', color: 'text-amber-400' };
    return { emoji: '📚', msg: 'Necesitas más práctica. ¡No te rindas!', color: 'text-rose-400' };
  };

  const perf = getPerformanceInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-950 via-slate-900 to-pink-950 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Score hero */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="text-center mb-8"
        >
          <div className="text-6xl mb-2">{perf.emoji}</div>
          <div className="text-6xl md:text-7xl font-black text-white mb-1">
            {score.toLocaleString()}
          </div>
          <div className="text-slate-400 text-sm mb-3">puntos totales</div>
          <p className={`font-semibold text-lg ${perf.color}`}>{perf.msg}</p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8"
        >
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 text-center">
            <div className="text-2xl font-black text-emerald-400">{correct}/{total}</div>
            <div className="text-xs text-slate-400 mt-1">Correctas</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 text-center">
            <div className="text-2xl font-black text-sky-400">{accuracy}%</div>
            <div className="text-xs text-slate-400 mt-1">Precisión</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 text-center">
            <div className="text-2xl font-black text-amber-400">{avgTime}s</div>
            <div className="text-xs text-slate-400 mt-1">Tiempo medio</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/40 text-center">
            <div className="text-2xl font-black text-rose-400">🔥{maxStreak}</div>
            <div className="text-xs text-slate-400 mt-1">Racha máx.</div>
          </div>
        </motion.div>

        {/* Review list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h3 className="text-white font-bold text-lg mb-4">📋 Revisión de Preguntas</h3>
          <div className="space-y-2">
            {results.map((result, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-3 flex items-start gap-3 ${
                  result.isCorrect
                    ? 'bg-emerald-950/40 border-emerald-700/30'
                    : 'bg-red-950/40 border-red-700/30'
                }`}
              >
                <span className="text-xl shrink-0">{result.isCorrect ? '✅' : '❌'}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg">{result.question.drugEmoji}</span>
                    <span className="text-white font-semibold text-sm">{result.question.drug}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      result.question.difficulty === 'easy'
                        ? 'bg-emerald-900/50 text-emerald-400'
                        : result.question.difficulty === 'medium'
                        ? 'bg-amber-900/50 text-amber-400'
                        : 'bg-rose-900/50 text-rose-400'
                    }`}>
                      {DIFFICULTY_INFO[result.question.difficulty].label}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 mt-1 leading-tight truncate">
                    {result.question.question}
                  </div>
                  <div className="text-xs mt-1">
                    <span className="text-slate-500">Resp. correcta: </span>
                    <span className="text-emerald-400 font-semibold">{result.question.correct}</span>
                  </div>
                  {result.pointsEarned > 0 && (
                    <div className="text-xs text-amber-400 mt-0.5">+{result.pointsEarned} pts</div>
                  )}
                </div>
                <div className="text-xs text-slate-500 shrink-0">{result.timeUsed}s</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-3"
        >
          <button
            onClick={onReplay}
            className="flex-1 py-4 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            🔄 Jugar de Nuevo
          </button>
          <NavLink
            to={AllRoutes.GAMES}
            className="flex-1 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all hover:scale-[1.02] text-center border border-slate-700/40"
          >
            ← Juegos
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main component
// ─────────────────────────────────────────────────────────────────────────────
export default function ContrarrelojDosis() {
  const [phase, setPhase] = useState<'setup' | 'playing' | 'result'>('setup');
  const [questions, setQuestions] = useState<DosageQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<DoseDifficulty>('easy');

  const currentQuestion = questions[currentIndex] ?? null;

  // ── Timer ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== 'playing' || !currentQuestion) return;
    const isAnswered = results.length > currentIndex;
    if (isAnswered) return;

    if (timeRemaining <= 0) {
      handleTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((t) => t - 1);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, timeRemaining, currentIndex, results.length]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const handleStart = useCallback((category: DrugCategory | 'all', diff: DoseDifficulty) => {
    setDifficulty(diff);
    let pool = DOSAGE_QUESTIONS.filter((q) => q.difficulty === diff);
    if (category !== 'all') {
      pool = pool.filter((q) => q.category === category);
    }
    // Shuffle
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, QUESTIONS_PER_ROUND);

    if (shuffled.length === 0) {
      // Fallback: all questions of this difficulty regardless of category
      const fallback = [...DOSAGE_QUESTIONS.filter((q) => q.difficulty === diff)]
        .sort(() => Math.random() - 0.5)
        .slice(0, QUESTIONS_PER_ROUND);
      setQuestions(fallback);
      setTimeRemaining(fallback[0]?.timeLimit ?? 30);
    } else {
      setQuestions(shuffled);
      setTimeRemaining(shuffled[0].timeLimit);
    }

    setCurrentIndex(0);
    setResults([]);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setPhase('playing');
  }, []);

  const moveToNext = useCallback(
    () => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= questions.length) {
        setPhase('result');
      } else {
        setCurrentIndex(nextIndex);
        setTimeRemaining(questions[nextIndex].timeLimit);
      }
    },
    [currentIndex, questions]
  );

  const handleAnswer = useCallback(
    (answer: string) => {
      if (!currentQuestion || results.length > currentIndex) return;
      const isCorrect = answer === currentQuestion.correct;
      const newStreak = isCorrect ? streak + 1 : 0;
      const newMaxStreak = Math.max(maxStreak, newStreak);
      const streakBonus = newStreak >= 3 ? 50 : 0;
      const points = isCorrect ? 100 + timeRemaining * 5 + streakBonus : 0;

      setStreak(newStreak);
      setMaxStreak(newMaxStreak);
      setScore((s) => s + points);

      const result: RoundResult = {
        question: currentQuestion,
        selectedAnswer: answer,
        isCorrect,
        timeUsed: currentQuestion.timeLimit - timeRemaining,
        pointsEarned: points,
      };

      const updatedResults = [...results, result];
      setResults(updatedResults);

      setTimeout(() => moveToNext(), 3000);
    },
    [currentQuestion, results, currentIndex, streak, maxStreak, timeRemaining, moveToNext]
  );

  const handleTimeUp = useCallback(() => {
    if (!currentQuestion || results.length > currentIndex) return;

    setStreak(0);
    const result: RoundResult = {
      question: currentQuestion,
      selectedAnswer: null,
      isCorrect: false,
      timeUsed: currentQuestion.timeLimit,
      pointsEarned: 0,
    };
    const updatedResults = [...results, result];
    setResults(updatedResults);

    setTimeout(() => moveToNext(), 2500);
  }, [currentQuestion, results, currentIndex, moveToNext]);

  const handleReplay = () => {
    setPhase('setup');
    setQuestions([]);
    setCurrentIndex(0);
    setResults([]);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  if (phase === 'setup') {
    return <SetupScreen onStart={handleStart} />;
  }

  if (phase === 'result') {
    return (
      <ResultScreen
        results={results}
        score={score}
        maxStreak={maxStreak}
        onReplay={handleReplay}
      />
    );
  }

  if (!currentQuestion) return null;

  return (
    <GameScreen
      questions={questions}
      currentIndex={currentIndex}
      timeRemaining={timeRemaining}
      streak={streak}
      score={score}
      difficulty={difficulty}
      onAnswer={handleAnswer}
      results={results}
    />
  );
}
