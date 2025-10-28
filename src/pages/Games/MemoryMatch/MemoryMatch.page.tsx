import { useState, useEffect, useCallback } from 'react';
import { MemoryCard, FlippedCard, GameStats, GameDifficulty } from './MemoryMatch.types';
import { MEMORY_PAIRS, DIFFICULTY_CONFIG } from './MemoryMatch.constants';
import GameSetup from './components/GameSetup.component';
import MemoryCardComponent from './components/MemoryCardComponent';

export default function MemoryMatch() {
    const [gameStarted, setGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState<GameDifficulty>('medium');
    const [cards, setCards] = useState<MemoryCard[]>([]);
    const [flippedCards, setFlippedCards] = useState<FlippedCard[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
    const [stats, setStats] = useState<GameStats>({
        moves: 0,
        matches: 0,
        timeElapsed: 0
    });
    const [gameWon, setGameWon] = useState(false);
    const [isChecking, setIsChecking] = useState(false);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameStarted && !gameWon) {
            interval = setInterval(() => {
                setStats(prev => ({ ...prev, timeElapsed: prev.timeElapsed + 1 }));
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted, gameWon]);

    const initializeGame = useCallback((selectedDifficulty: GameDifficulty) => {
        const numPairs = DIFFICULTY_CONFIG[selectedDifficulty].pairs;
        const selectedPairs = [...MEMORY_PAIRS]
            .sort(() => Math.random() - 0.5)
            .slice(0, numPairs);

        const gameCards: MemoryCard[] = [];
        selectedPairs.forEach(pair => {
            gameCards.push({
                id: `${pair.id}-term`,
                content: pair.term,
                type: 'term',
                pairId: pair.id
            });
            gameCards.push({
                id: `${pair.id}-def`,
                content: pair.definition,
                type: 'definition',
                pairId: pair.id
            });
        });

        // Shuffle cards
        const shuffledCards = gameCards.sort(() => Math.random() - 0.5);

        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedPairs([]);
        setStats({ moves: 0, matches: 0, timeElapsed: 0 });
        setGameWon(false);
        setDifficulty(selectedDifficulty);
        setGameStarted(true);
    }, []);

    const handleCardClick = useCallback((card: MemoryCard, index: number) => {
        if (isChecking || flippedCards.length >= 2) return;
        if (flippedCards.some(fc => fc.index === index)) return;
        if (matchedPairs.includes(card.pairId)) return;

        const newFlippedCards = [...flippedCards, { card, index }];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setIsChecking(true);
            const [first, second] = newFlippedCards;

            if (first.card.pairId === second.card.pairId && first.card.type !== second.card.type) {
                // Match found!
                setTimeout(() => {
                    setMatchedPairs(prev => [...prev, first.card.pairId]);
                    setStats(prev => ({ ...prev, matches: prev.matches + 1, moves: prev.moves + 1 }));
                    setFlippedCards([]);
                    setIsChecking(false);

                    // Check if game is won
                    if (matchedPairs.length + 1 === cards.length / 2) {
                        setGameWon(true);
                    }
                }, 1000);
            } else {
                // No match
                setTimeout(() => {
                    setFlippedCards([]);
                    setStats(prev => ({ ...prev, moves: prev.moves + 1 }));
                    setIsChecking(false);
                }, 1500);
            }
        }
    }, [flippedCards, matchedPairs, isChecking, cards.length]);

    const handleRestart = () => {
        initializeGame(difficulty);
    };

    const handleNewGame = () => {
        setGameStarted(false);
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (!gameStarted) {
        return <GameSetup onStartGame={initializeGame} />;
    }

    // Winner Screen
    if (gameWon) {
        const score = Math.max(0, 1000 - (stats.moves * 10) - (stats.timeElapsed * 2));
        const rating = score > 800 ? '⭐⭐⭐' : score > 500 ? '⭐⭐' : '⭐';

        return (
            <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
                <div className="max-w-2xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-12 text-center">
                    <div className="text-8xl mb-6">🏆</div>
                    <h1 className="text-5xl font-bold text-white mb-4">
                        ¡Felicidades!
                    </h1>
                    <p className="text-2xl text-yellow-300 mb-8">
                        Has completado el juego {rating}
                    </p>

                    <div className="bg-white bg-opacity-20 rounded-2xl p-6 mb-8">
                        <div className="grid grid-cols-3 gap-4 text-white">
                            <div>
                                <div className="text-3xl font-bold text-yellow-300">{stats.moves}</div>
                                <div className="text-sm">Movimientos</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-green-300">{stats.matches}</div>
                                <div className="text-sm">Parejas</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-300">{formatTime(stats.timeElapsed)}</div>
                                <div className="text-sm">Tiempo</div>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-white border-opacity-30">
                            <div className="text-4xl font-bold text-yellow-300">{score}</div>
                            <div className="text-white text-sm">Puntuación Final</div>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={handleRestart}
                            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200 text-lg"
                        >
                            🔄 Jugar de Nuevo
                        </button>
                        <button
                            onClick={handleNewGame}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200 text-lg"
                        >
                            🎮 Cambiar Dificultad
                        </button>
                    </div>

                    <div className="mt-6">
                        <a
                            href="/games"
                            className="inline-block text-gray-300 hover:text-white transition duration-200"
                        >
                            ← Volver a Juegos
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // Game Board
    const gridCols = difficulty === 'easy' ? 'grid-cols-3 md:grid-cols-4' :
                     difficulty === 'medium' ? 'grid-cols-4 md:grid-cols-6' :
                     'grid-cols-4 md:grid-cols-6 lg:grid-cols-8';

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-6 mb-6">
                    <div className="flex flex-wrap justify-between items-center gap-4">
                        <h1 className="text-3xl font-bold text-white">
                            🧠 Memory Match
                        </h1>

                        {/* Stats */}
                        <div className="flex gap-6 text-white">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-yellow-300">{stats.moves}</div>
                                <div className="text-xs">Movimientos</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-green-300">{stats.matches}/{cards.length / 2}</div>
                                <div className="text-xs">Parejas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-blue-300">{formatTime(stats.timeElapsed)}</div>
                                <div className="text-xs">Tiempo</div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={handleRestart}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                            >
                                🔄 Reiniciar
                            </button>
                            <button
                                onClick={handleNewGame}
                                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200"
                            >
                                ⚙️ Menú
                            </button>
                        </div>
                    </div>
                </div>

                {/* Game Grid */}
                <div className={`grid ${gridCols} gap-3 md:gap-4`}>
                    {cards.map((card, index) => (
                        <MemoryCardComponent
                            key={`${card.id}-${index}`}
                            card={card}
                            index={index}
                            isFlipped={flippedCards.some(fc => fc.index === index)}
                            isMatched={matchedPairs.includes(card.pairId)}
                            onClick={handleCardClick}
                            disabled={isChecking || flippedCards.length >= 2}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-4">
                    <div className="flex justify-between text-white text-sm mb-2">
                        <span>Progreso</span>
                        <span>{Math.round((stats.matches / (cards.length / 2)) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-4">
                        <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-500"
                            style={{ width: `${(stats.matches / (cards.length / 2)) * 100}%` }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}