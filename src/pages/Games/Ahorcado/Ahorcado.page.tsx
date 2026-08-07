import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { AllRoutes } from '../../../components/Router/Router.constants';
import { AhorcadoDifficulty, GameState } from './Ahorcado.types';
import { AHORCADO_WORDS, MAX_MISTAKES } from './Ahorcado.constants';
import { FaHeart, FaHeartBroken, FaStethoscope } from 'react-icons/fa';

export default function Ahorcado() {
  const [gameState, setGameState] = useState<GameState>({
    phase: 'setup',
    currentWord: null,
    guessedLetters: [],
    mistakes: 0,
    maxMistakes: MAX_MISTAKES,
    score: 0,
    streak: 0,
    wordsPlayed: 0,
    difficulty: 'all',
  });

  const ALPHABET = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');

  const handleStart = (difficulty: AhorcadoDifficulty | 'all') => {
    startNewWord(difficulty, 0, 0, 0);
  };

  const startNewWord = (
    difficulty: AhorcadoDifficulty | 'all',
    score: number,
    streak: number,
    wordsPlayed: number
  ) => {
    let availableWords = AHORCADO_WORDS;
    if (difficulty !== 'all') {
      availableWords = AHORCADO_WORDS.filter((w) => w.difficulty === difficulty);
    }
    
    // Pick a random word
    const randomWord = availableWords[Math.floor(Math.random() * availableWords.length)];

    setGameState({
      phase: 'playing',
      currentWord: randomWord,
      guessedLetters: [],
      mistakes: 0,
      maxMistakes: MAX_MISTAKES,
      score,
      streak,
      wordsPlayed,
      difficulty,
    });
  };

  const handleGuess = useCallback(
    (letter: string) => {
      if (gameState.phase !== 'playing' || !gameState.currentWord) return;
      if (gameState.guessedLetters.includes(letter)) return;

      const newGuessed = [...gameState.guessedLetters, letter];
      const isCorrect = gameState.currentWord.word.includes(letter);
      const newMistakes = isCorrect ? gameState.mistakes : gameState.mistakes + 1;

      // Check win/loss
      const wordLetters = gameState.currentWord.word.split('');
      const isWin = wordLetters.every((l) => newGuessed.includes(l) || l === ' ');
      const isLoss = newMistakes >= gameState.maxMistakes;

      if (isWin) {
        setGameState((prev) => ({
          ...prev,
          guessedLetters: newGuessed,
          score: prev.score + 100 + (prev.maxMistakes - newMistakes) * 20,
          streak: prev.streak + 1,
          phase: 'result',
        }));
      } else if (isLoss) {
        setGameState((prev) => ({
          ...prev,
          guessedLetters: newGuessed,
          mistakes: newMistakes,
          streak: 0,
          phase: 'result',
        }));
      } else {
        setGameState((prev) => ({
          ...prev,
          guessedLetters: newGuessed,
          mistakes: newMistakes,
        }));
      }
    },
    [gameState]
  );

  // Keyboard listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameState.phase !== 'playing') return;
      const key = e.key.toUpperCase();
      if (ALPHABET.includes(key)) {
        handleGuess(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGuess, gameState.phase, ALPHABET]);

  // Render Setup
  if (gameState.phase === 'setup') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-rose-950 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300 mb-4">
              💓 Salva al Paciente
            </h1>
            <p className="text-xl text-gray-300">
              Adivina la terminología médica antes de que el paciente entre en asistolia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {['easy', 'medium', 'hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => handleStart(diff as AhorcadoDifficulty)}
                className="bg-white/10 hover:bg-white/20 border-2 border-white/20 hover:border-red-400 rounded-2xl p-6 transition-all"
              >
                <div className="text-3xl mb-3">
                  {diff === 'easy' ? '🟢' : diff === 'medium' ? '🟡' : '🔴'}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 uppercase">{diff}</h3>
                <p className="text-gray-400 text-sm">
                  {diff === 'easy' && 'Términos básicos y comunes'}
                  {diff === 'medium' && 'Terminología intermedia'}
                  {diff === 'hard' && 'Términos avanzados y complejos'}
                </p>
              </button>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <button
                onClick={() => handleStart('all')}
                className="bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl shadow-red-900/50 transition-all hover:scale-105"
              >
                Modo Mixto (Todos los niveles)
              </button>
          </div>

          <div className="text-center mt-12">
            <NavLink to={AllRoutes.GAMES} className="text-gray-400 hover:text-white transition-colors">
              ← Volver a Juegos
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  const { currentWord, guessedLetters, mistakes, maxMistakes } = gameState;
  const isLoss = mistakes >= maxMistakes;
  const isWin = gameState.phase === 'result' && !isLoss;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-slate-900 to-rose-950 py-8 px-4 flex flex-col">
      <div className="max-w-4xl mx-auto w-full flex-grow flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center bg-black/40 rounded-2xl p-4 mb-8">
          <div className="flex items-center gap-2">
            <FaStethoscope className="text-red-400 text-2xl" />
            <span className="text-white font-bold">Puntos: {gameState.score}</span>
            <span className="text-red-400 font-bold ml-4">Racha: {gameState.streak}🔥</span>
          </div>
          <div className="flex gap-1 text-2xl">
            {Array.from({ length: maxMistakes }).map((_, i) => (
              <span key={i} className={i < maxMistakes - mistakes ? "text-red-500" : "text-gray-600"}>
                {i < maxMistakes - mistakes ? <FaHeart /> : <FaHeartBroken />}
              </span>
            ))}
          </div>
        </div>

        {/* Word Display */}
        <div className="flex-grow flex flex-col items-center justify-center mb-12">
          {currentWord && (
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 w-full text-center shadow-2xl backdrop-blur-sm">
              <span className="inline-block bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm font-semibold mb-6">
                Categoría: {currentWord.category}
              </span>
              
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-10 italic">
                "{currentWord.hint}"
              </h2>

              <div className="flex flex-wrap justify-center gap-3">
                {currentWord.word.split('').map((letter, i) => {
                  const isRevealed = guessedLetters.includes(letter) || gameState.phase === 'result';
                  const isMissing = gameState.phase === 'result' && isLoss && !guessedLetters.includes(letter);
                  
                  return (
                    <div
                      key={i}
                      className={`w-12 h-14 md:w-16 md:h-20 flex items-center justify-center text-3xl md:text-4xl font-black rounded-lg border-b-4 
                        ${isRevealed 
                          ? (isMissing ? 'bg-red-900/50 text-red-400 border-red-500/50' : 'bg-slate-800 text-white border-slate-600') 
                          : 'bg-black/30 border-slate-700'}`}
                    >
                      {isRevealed ? letter : ''}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Keyboard or Result */}
        {gameState.phase === 'playing' ? (
          <div className="bg-black/30 rounded-3xl p-6">
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
              {ALPHABET.map((letter) => {
                const isGuessed = guessedLetters.includes(letter);
                const isCorrect = currentWord?.word.includes(letter);
                
                let btnClass = "bg-slate-700 hover:bg-slate-600 text-white";
                if (isGuessed) {
                  btnClass = isCorrect 
                    ? "bg-green-600/50 text-green-200 border border-green-500 cursor-not-allowed" 
                    : "bg-red-900/50 text-red-300 opacity-50 cursor-not-allowed";
                }

                return (
                  <button
                    key={letter}
                    onClick={() => handleGuess(letter)}
                    disabled={isGuessed}
                    className={`w-10 h-12 md:w-12 md:h-14 rounded-lg font-bold text-xl transition-colors ${btnClass}`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center bg-black/50 rounded-3xl p-8 animate-fade-in">
            {isWin ? (
              <div>
                <h2 className="text-4xl font-bold text-green-400 mb-4">¡Paciente Salvado! 🏥</h2>
                <p className="text-xl text-gray-300 mb-6">Tratamiento exitoso.</p>
              </div>
            ) : (
              <div>
                <h2 className="text-4xl font-bold text-red-500 mb-4">Paciente en Asistolia 📉</h2>
                <p className="text-xl text-gray-300 mb-6">La respuesta era: <span className="font-bold text-white">{currentWord?.word}</span></p>
              </div>
            )}
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => startNewWord(gameState.difficulty, gameState.score, gameState.streak, gameState.wordsPlayed + 1)}
                className="bg-white text-black font-bold py-3 px-8 rounded-xl hover:bg-gray-200 transition-colors"
              >
                Siguiente Paciente
              </button>
              <button
                onClick={() => setGameState(prev => ({ ...prev, phase: 'setup' }))}
                className="bg-transparent border border-white/30 text-white font-bold py-3 px-8 rounded-xl hover:bg-white/10 transition-colors"
              >
                Menú Principal
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
