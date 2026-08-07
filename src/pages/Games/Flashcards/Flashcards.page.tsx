import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { Flashcard, FlashcardCategory, FlashcardSession, SessionResult, StudyMode } from './Flashcards.types';
import { FLASHCARDS, CATEGORIES_CONFIG, STUDY_MODES } from './Flashcards.constants';
import { AllRoutes } from '../../../components/Router/Router.constants';

// ─── Helpers ───────────────────────────────────────────────────────────────

function buildDeck(category: FlashcardCategory | 'all', mode: StudyMode): Flashcard[] {
  let deck = category === 'all' ? [...FLASHCARDS] : FLASHCARDS.filter(c => c.category === category);
  if (mode === 'review') deck = deck.filter(c => c.difficulty === 'hard' || c.difficulty === 'medium');
  if (mode === 'random') deck = deck.sort(() => Math.random() - 0.5);
  return deck;
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function getCategoryConfig(id: string) {
  return CATEGORIES_CONFIG.find(c => c.id === id) ?? CATEGORIES_CONFIG[0];
}

// ─── Sub-components ────────────────────────────────────────────────────────

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="w-full bg-white/10 rounded-full h-2">
      <div
        className="bg-gradient-to-r from-teal-400 to-cyan-300 h-2 rounded-full transition-all duration-500"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

// ─── Screen 1: Setup ───────────────────────────────────────────────────────

interface SetupScreenProps {
  onStart: (category: FlashcardCategory | 'all', mode: StudyMode) => void;
}

function SetupScreen({ onStart }: SetupScreenProps) {
  const [selectedCategory, setSelectedCategory] = useState<FlashcardCategory | 'all'>('all');
  const [selectedMode, setSelectedMode] = useState<StudyMode>('study');

  const deck = buildDeck(selectedCategory, selectedMode);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-teal-300 via-cyan-200 to-emerald-300 bg-clip-text text-transparent">
            🃏 Flashcards Interactivas
          </h1>
          <p className="text-slate-400 text-lg">Repasa conceptos clave de paramedicina</p>
        </div>

        {/* Category Selector */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-5">
          <h2 className="text-white font-bold text-lg mb-4">📂 Selecciona categoría</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CATEGORIES_CONFIG.map(cat => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as FlashcardCategory | 'all')}
                  className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                    isSelected
                      ? `bg-gradient-to-r ${cat.color} text-white border-transparent shadow-lg scale-105`
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:scale-102'
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="truncate">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mode Selector */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-5">
          <h2 className="text-white font-bold text-lg mb-4">🎮 Modo de estudio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {STUDY_MODES.map(mode => {
              const isSelected = selectedMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setSelectedMode(mode.id as StudyMode)}
                  className={`flex flex-col items-center gap-1 px-4 py-4 rounded-xl font-semibold text-sm transition-all duration-200 border ${
                    isSelected
                      ? 'bg-gradient-to-br from-teal-500 to-cyan-600 text-white border-transparent shadow-lg scale-105'
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <span className="text-2xl">{mode.icon}</span>
                  <span className="font-bold">{mode.label}</span>
                  <span className={`text-xs ${isSelected ? 'text-cyan-100' : 'text-slate-500'}`}>
                    {mode.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Count & Start */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 mb-6 flex items-center justify-between">
          <div>
            <p className="text-slate-400 text-sm">Cartas en el mazo</p>
            <p className="text-teal-300 font-extrabold text-3xl">{deck.length}</p>
          </div>
          <button
            onClick={() => onStart(selectedCategory, selectedMode)}
            disabled={deck.length === 0}
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold py-3 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-teal-500/30 active:scale-95"
          >
            ¡Comenzar! 🚀
          </button>
        </div>

        {/* Back link */}
        <div className="text-center">
          <NavLink
            to={AllRoutes.GAMES}
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
          >
            ← Volver a Juegos
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2: Game ────────────────────────────────────────────────────────

interface GameScreenProps {
  session: FlashcardSession;
  elapsed: number;
  onFlip: () => void;
  onKnown: () => void;
  onUnknown: () => void;
  onPrev: () => void;
  onNext: () => void;
  onExit: () => void;
}

function GameScreen({ session, elapsed, onFlip, onKnown, onUnknown, onPrev, onNext, onExit }: GameScreenProps) {
  const card = session.deck[session.currentIndex];
  const completed = session.known.length + session.unknown.length;
  const catConfig = getCategoryConfig(card.category);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 flex flex-col p-4">
      {/* Header */}
      <div className="w-full max-w-2xl mx-auto mb-4">
        <div className="flex items-center justify-between mb-2">
          <button
            onClick={onExit}
            className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200"
          >
            ← Salir
          </button>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-amber-300 font-bold">
              <span>🔥</span>
              <span>{session.streak}</span>
            </div>
            <div className="text-slate-400 font-mono">{formatTime(elapsed)}</div>
          </div>
        </div>

        {/* Progress bar */}
        <ProgressBar value={completed} max={session.deck.length} />
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>Carta {session.currentIndex + 1} de {session.deck.length}</span>
          <span>{completed} completadas</span>
        </div>
      </div>

      {/* Card area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
        {/* Flip card */}
        <div
          style={{ perspective: '1000px' }}
          onClick={onFlip}
          className="cursor-pointer w-full mb-6"
        >
          <div
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.5s ease',
              transform: session.flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              position: 'relative',
              height: '320px',
            }}
          >
            {/* Front */}
            <div
              style={{ backfaceVisibility: 'hidden', position: 'absolute', inset: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-center"
            >
              {card.emoji && (
                <div className="text-6xl mb-5 select-none">{card.emoji}</div>
              )}
              <p className="text-white text-xl font-semibold leading-relaxed mb-4">{card.front}</p>
              <span
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${catConfig.color}`}
              >
                {catConfig.icon} {catConfig.label}
              </span>
              <p className="text-slate-600 text-xs mt-6 select-none">Toca para revelar la respuesta</p>
            </div>

            {/* Back */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                position: 'absolute',
                inset: 0,
                transform: 'rotateY(180deg)',
              }}
              className="bg-gradient-to-br from-teal-900 to-slate-900 border border-teal-500/30 rounded-2xl shadow-2xl flex flex-col items-center justify-center p-8 text-center overflow-auto"
            >
              <p className="text-white text-lg font-semibold leading-relaxed mb-4">{card.back}</p>
              {card.hint && (
                <div className="w-full bg-white/5 border border-amber-400/20 rounded-xl p-4 mt-2">
                  <p className="text-amber-300 text-xs font-bold uppercase tracking-wide mb-1">💡 Hint</p>
                  <p className="text-slate-300 text-sm">{card.hint}</p>
                </div>
              )}
              <p className="text-slate-600 text-xs mt-4 select-none">Toca para ver la pregunta</p>
            </div>
          </div>
        </div>

        {/* Action buttons — only shown when flipped */}
        {session.flipped && (
          <div className="flex gap-4 w-full animate-in fade-in duration-300">
            <button
              onClick={onUnknown}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg active:scale-95 transition-all duration-150"
            >
              ❌ No lo sabía
            </button>
            <button
              onClick={onKnown}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold py-4 rounded-xl text-lg shadow-lg active:scale-95 transition-all duration-150"
            >
              ✅ Lo sabía
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between w-full mt-4">
          <button
            onClick={onPrev}
            disabled={session.currentIndex === 0}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
          >
            ‹ Anterior
          </button>
          <div className="flex gap-1">
            {session.deck.slice(Math.max(0, session.currentIndex - 2), session.currentIndex + 3).map((_, i) => {
              const idx = Math.max(0, session.currentIndex - 2) + i;
              const isKnown = session.known.includes(session.deck[idx]?.id);
              const isUnknown = session.unknown.includes(session.deck[idx]?.id);
              const isCurrent = idx === session.currentIndex;
              return (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    isCurrent
                      ? 'bg-teal-400 scale-150'
                      : isKnown
                      ? 'bg-emerald-500'
                      : isUnknown
                      ? 'bg-red-500'
                      : 'bg-slate-600'
                  }`}
                />
              );
            })}
          </div>
          <button
            onClick={onNext}
            disabled={session.currentIndex === session.deck.length - 1}
            className="flex items-center gap-1 text-slate-500 hover:text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed text-sm transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-white/5"
          >
            Siguiente ›
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 3: Results ─────────────────────────────────────────────────────

interface ResultScreenProps {
  result: SessionResult;
  unknownCards: Flashcard[];
  onRetryUnknown: () => void;
  onNewSession: () => void;
}

function ResultScreen({ result, unknownCards, onRetryUnknown, onNewSession }: ResultScreenProps) {
  const emoji =
    result.accuracy >= 90 ? '🏆' : result.accuracy >= 70 ? '🥈' : result.accuracy >= 50 ? '🥉' : '📚';

  const stats = [
    { label: 'Total', value: result.total, color: 'text-white' },
    { label: 'Conocidas', value: result.known, color: 'text-emerald-400' },
    { label: 'Por repasar', value: result.unknown, color: 'text-red-400' },
    { label: 'Precisión', value: `${result.accuracy}%`, color: 'text-teal-300' },
    { label: 'Tiempo', value: formatTime(result.timeSeconds), color: 'text-cyan-300' },
    { label: 'Racha máx', value: `🔥 ${result.maxStreak}`, color: 'text-amber-300' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950 flex items-center justify-center p-4">
      <div className="w-full max-w-xl mx-auto">
        {/* Trophy */}
        <div className="text-center mb-8">
          <div className="text-8xl mb-4 animate-bounce">{emoji}</div>
          <h1 className="text-4xl font-extrabold text-white mb-2">¡Sesión completada!</h1>
          <p className="text-slate-400">
            {result.accuracy >= 90
              ? '¡Excelente dominio del tema!'
              : result.accuracy >= 70
              ? '¡Muy buen trabajo, sigue practicando!'
              : '¡Sigue estudiando, vas a mejorar!'}
          </p>
        </div>

        {/* Stats grid */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Accuracy bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-slate-400 mb-1">
              <span>Precisión general</span>
              <span>{result.accuracy}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-1000 ${
                  result.accuracy >= 80
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-400'
                    : result.accuracy >= 50
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-400'
                    : 'bg-gradient-to-r from-red-600 to-rose-500'
                }`}
                style={{ width: `${result.accuracy}%` }}
              />
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col gap-3">
          {unknownCards.length > 0 && (
            <button
              onClick={onRetryUnknown}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold py-4 rounded-xl text-base shadow-lg active:scale-95 transition-all duration-150"
            >
              🔄 Repasar las falladas ({unknownCards.length})
            </button>
          )}
          <button
            onClick={onNewSession}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-4 rounded-xl text-base shadow-lg active:scale-95 transition-all duration-150"
          >
            🃏 Nueva sesión
          </button>
          <NavLink
            to={AllRoutes.GAMES}
            className="w-full flex items-center justify-center text-slate-500 hover:text-slate-300 text-sm py-3 transition-colors duration-200"
          >
            ← Volver a Juegos
          </NavLink>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────

type Screen = 'setup' | 'game' | 'result';

export default function Flashcards() {
  const [screen, setScreen] = useState<Screen>('setup');
  const [session, setSession] = useState<FlashcardSession | null>(null);
  const [result, setResult] = useState<SessionResult | null>(null);
  const [elapsed, setElapsed] = useState(0);

  // Timer
  useEffect(() => {
    if (screen !== 'game' || !session) return;
    const id = setInterval(() => setElapsed(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [screen, session]);

  const startSession = useCallback((category: FlashcardCategory | 'all', mode: StudyMode) => {
    const deck = buildDeck(category, mode);
    setSession({
      mode,
      category,
      deck,
      currentIndex: 0,
      known: [],
      unknown: [],
      flipped: false,
      startTime: Date.now(),
      streak: 0,
      maxStreak: 0,
    });
    setElapsed(0);
    setResult(null);
    setScreen('game');
  }, []);

  const handleFlip = useCallback(() => {
    setSession(prev => prev ? { ...prev, flipped: !prev.flipped } : prev);
  }, []);

  const advance = useCallback((known: boolean) => {
    setSession(prev => {
      if (!prev) return prev;
      const card = prev.deck[prev.currentIndex];
      const newKnown = known ? [...prev.known, card.id] : prev.known;
      const newUnknown = !known ? [...prev.unknown, card.id] : prev.unknown;
      const newStreak = known ? prev.streak + 1 : 0;
      const newMaxStreak = Math.max(prev.maxStreak, newStreak);
      const nextIndex = prev.currentIndex + 1;

      if (nextIndex >= prev.deck.length) {
        // Session complete — build result
        const total = prev.deck.length;
        const knownCount = newKnown.length;
        const unknownCount = newUnknown.length;
        const accuracy = total === 0 ? 0 : Math.round((knownCount / total) * 100);
        setResult({
          total,
          known: knownCount,
          unknown: unknownCount,
          accuracy,
          timeSeconds: Math.floor((Date.now() - prev.startTime) / 1000),
          maxStreak: newMaxStreak,
        });
        // Keep session for retry purposes
        setSession({ ...prev, known: newKnown, unknown: newUnknown, streak: newStreak, maxStreak: newMaxStreak });
        setScreen('result');
        return prev;
      }

      return {
        ...prev,
        known: newKnown,
        unknown: newUnknown,
        currentIndex: nextIndex,
        flipped: false,
        streak: newStreak,
        maxStreak: newMaxStreak,
      };
    });
  }, []);

  const handleKnown = useCallback(() => advance(true), [advance]);
  const handleUnknown = useCallback(() => advance(false), [advance]);

  const handlePrev = useCallback(() => {
    setSession(prev => prev && prev.currentIndex > 0
      ? { ...prev, currentIndex: prev.currentIndex - 1, flipped: false }
      : prev
    );
  }, []);

  const handleNext = useCallback(() => {
    setSession(prev => prev && prev.currentIndex < prev.deck.length - 1
      ? { ...prev, currentIndex: prev.currentIndex + 1, flipped: false }
      : prev
    );
  }, []);

  const handleRetryUnknown = useCallback(() => {
    if (!session) return;
    const unknownIds = new Set(session.unknown);
    const unknownDeck = session.deck.filter(c => unknownIds.has(c.id)).sort(() => Math.random() - 0.5);
    setSession({
      ...session,
      deck: unknownDeck,
      currentIndex: 0,
      known: [],
      unknown: [],
      flipped: false,
      startTime: Date.now(),
      streak: 0,
      maxStreak: 0,
    });
    setElapsed(0);
    setResult(null);
    setScreen('game');
  }, [session]);

  const handleNewSession = useCallback(() => {
    setSession(null);
    setResult(null);
    setScreen('setup');
  }, []);

  // ── Render ──

  if (screen === 'setup') {
    return <SetupScreen onStart={startSession} />;
  }

  if (screen === 'result' && result && session) {
    const unknownIds = new Set(session.unknown);
    const unknownCards = session.deck.filter(c => unknownIds.has(c.id));
    return (
      <ResultScreen
        result={result}
        unknownCards={unknownCards}
        onRetryUnknown={handleRetryUnknown}
        onNewSession={handleNewSession}
      />
    );
  }

  if (screen === 'game' && session) {
    return (
      <GameScreen
        session={session}
        elapsed={elapsed}
        onFlip={handleFlip}
        onKnown={handleKnown}
        onUnknown={handleUnknown}
        onPrev={handlePrev}
        onNext={handleNext}
        onExit={handleNewSession}
      />
    );
  }

  return null;
}
