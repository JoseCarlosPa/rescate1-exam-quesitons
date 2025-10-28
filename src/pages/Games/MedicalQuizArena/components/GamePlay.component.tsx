import { useState, useEffect, useRef } from 'react';
import { FaClock, FaBolt, FaFire, FaSignOutAlt } from 'react-icons/fa';
import type { GameRoom, Player, ChatMessage } from '../MedicalQuizArena.types';

interface GamePlayProps {
    gameRoom: GameRoom;
    currentPlayer: Player | null;
    isHost: boolean;
    chatMessages: ChatMessage[];
    onSendMessage: (message: string) => void;
    onSubmitAnswer: (answer: string) => void;
    onNextQuestion: () => void;
    onLeaveRoom: () => void;
}

export default function GamePlay({
    gameRoom,
    currentPlayer,
    isHost,
    chatMessages,
    onSendMessage,
    onSubmitAnswer,
    onNextQuestion,
    onLeaveRoom,
}: GamePlayProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState(0);
    const [message, setMessage] = useState('');
    const chatEndRef = useRef<HTMLDivElement>(null);

    const currentQuestion = gameRoom.currentQuestion;
    const hasAnswered = gameRoom.answers.some(a => a.playerId === currentPlayer?.id);
    const allAnswered = gameRoom.players.length === gameRoom.answers.length;

    useEffect(() => {
        if (currentQuestion) {
            setTimeLeft(currentQuestion.timeLimit);
            setSelectedAnswer(null);
        }
    }, [currentQuestion?.id]);

    useEffect(() => {
        if (timeLeft > 0 && !hasAnswered) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, hasAnswered]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [chatMessages]);

    const handleAnswerClick = (answer: string) => {
        if (!hasAnswered && timeLeft > 0) {
            setSelectedAnswer(answer);
            onSubmitAnswer(answer);
        }
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (message.trim()) {
            onSendMessage(message);
            setMessage('');
        }
    };

    if (!currentQuestion) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <div className="text-white text-2xl">Cargando siguiente pregunta...</div>
            </div>
        );
    }

    const sortedPlayers = [...gameRoom.players].sort((a, b) => b.score - a.score);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-7xl mx-auto">
                {/* Header con puntajes */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-6 mb-6 border-4 border-yellow-400">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <h1 className="text-3xl font-bold text-white">
                                Pregunta {gameRoom.currentQuestionIndex + 1}/{gameRoom.totalQuestions}
                            </h1>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                                currentQuestion.difficulty === 'Fácil' ? 'bg-green-500' :
                                currentQuestion.difficulty === 'Media' ? 'bg-yellow-500' :
                                'bg-red-500'
                            } text-white`}>
                                {currentQuestion.difficulty}
                            </span>
                            <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {currentQuestion.category}
                            </span>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                                timeLeft <= 5 ? 'bg-red-500 animate-pulse' : 'bg-white bg-opacity-20'
                            }`}>
                                <FaClock className="text-white" />
                                <span className="text-white font-bold text-xl">
                                    {timeLeft}s
                                </span>
                            </div>

                            {currentPlayer && currentPlayer.streak > 0 && (
                                <div className="flex items-center gap-2 bg-orange-500 px-4 py-2 rounded-lg">
                                    <FaFire className="text-white" />
                                    <span className="text-white font-bold">
                                        {currentPlayer.streak}x Racha
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mini scoreboard */}
                    <div className="flex gap-2 overflow-x-auto">
                        {sortedPlayers.map((player, index) => (
                            <div
                                key={player.id}
                                className={`bg-white bg-opacity-20 rounded-lg px-3 py-2 flex items-center gap-2 ${
                                    player.id === currentPlayer?.id ? 'ring-2 ring-yellow-400' : ''
                                }`}
                                style={{ borderLeft: `4px solid ${player.color}` }}
                            >
                                {index === 0 && <span className="text-yellow-400">🏆</span>}
                                <span className="text-white font-semibold text-sm">
                                    {player.name}
                                </span>
                                <span className="text-yellow-300 font-bold">
                                    {player.score}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {/* Pregunta y respuestas */}
                    <div className="md:col-span-3">
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 border-4 border-yellow-400 mb-6">
                            <h2 className="text-2xl font-bold text-white mb-6">
                                {currentQuestion.question}
                            </h2>

                            <div className="grid gap-4">
                                {currentQuestion.options.map((option, index) => {
                                    const isSelected = selectedAnswer === option;
                                    const isCorrect = option === currentQuestion.answer;
                                    const showResult = hasAnswered;

                                    let buttonClass = 'bg-white bg-opacity-20 hover:bg-opacity-30 border-2 border-white border-opacity-30';

                                    if (showResult) {
                                        if (isCorrect) {
                                            buttonClass = 'bg-green-500 border-green-300';
                                        } else if (isSelected && !isCorrect) {
                                            buttonClass = 'bg-red-500 border-red-300';
                                        }
                                    } else if (isSelected) {
                                        buttonClass = 'bg-yellow-400 border-yellow-300 scale-105';
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleAnswerClick(option)}
                                            disabled={hasAnswered || timeLeft === 0}
                                            className={`${buttonClass} text-white font-semibold text-lg p-4 rounded-xl transition-all duration-200 text-left disabled:cursor-not-allowed transform hover:scale-102`}
                                        >
                                            <span className="inline-flex items-center gap-3">
                                                <span className="bg-white bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center font-bold">
                                                    {['A', 'B', 'C', 'D'][index]}
                                                </span>
                                                {option}
                                                {showResult && isCorrect && <span>✓</span>}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {hasAnswered && currentQuestion.explanation && (
                                <div className="mt-6 bg-blue-500 bg-opacity-30 border-2 border-blue-400 rounded-xl p-4">
                                    <p className="text-white font-semibold mb-1">💡 Explicación:</p>
                                    <p className="text-gray-200">{currentQuestion.explanation}</p>
                                </div>
                            )}
                        </div>

                        {/* Indicador de respuestas */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 border-4 border-yellow-400">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-white font-bold">
                                    Progreso de Respuestas
                                </h3>
                                <span className="text-white font-bold">
                                    {gameRoom.answers.length}/{gameRoom.players.length}
                                </span>
                            </div>

                            <div className="flex gap-2 flex-wrap">
                                {gameRoom.players.map(player => {
                                    const hasPlayerAnswered = gameRoom.answers.some(a => a.playerId === player.id);
                                    return (
                                        <div
                                            key={player.id}
                                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                                hasPlayerAnswered
                                                    ? 'bg-green-500 text-white'
                                                    : 'bg-gray-500 text-white'
                                            }`}
                                        >
                                            {player.avatar} {player.name}
                                            {hasPlayerAnswered && ' ✓'}
                                        </div>
                                    );
                                })}
                            </div>

                            {isHost && allAnswered && (
                                <button
                                    onClick={onNextQuestion}
                                    className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2"
                                >
                                    <FaBolt />
                                    Siguiente Pregunta
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Sidebar: Ranking y Chat */}
                    <div className="space-y-6">
                        {/* Ranking */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-4 border-4 border-yellow-400">
                            <h3 className="text-white font-bold text-xl mb-3">🏆 Ranking</h3>
                            <div className="space-y-2">
                                {sortedPlayers.map((player, index) => (
                                    <div
                                        key={player.id}
                                        className={`bg-white bg-opacity-20 rounded-lg p-3 ${
                                            player.id === currentPlayer?.id ? 'ring-2 ring-yellow-400' : ''
                                        }`}
                                        style={{ borderLeft: `4px solid ${player.color}` }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-white">
                                                    #{index + 1}
                                                </span>
                                                <span className="text-lg">{player.avatar}</span>
                                                <span className="text-white font-semibold text-sm">
                                                    {player.name}
                                                </span>
                                            </div>
                                            <span className="text-yellow-300 font-bold text-lg">
                                                {player.score}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mini Chat */}
                        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-4 border-4 border-yellow-400 flex flex-col max-h-[300px]">
                            <h3 className="text-white font-bold mb-2">💬 Chat</h3>

                            <div className="flex-1 overflow-y-auto mb-2 space-y-1">
                                {chatMessages.slice(-5).map((msg) => (
                                    <div key={msg.id} className="bg-white bg-opacity-20 rounded p-2">
                                        <p className="text-yellow-300 text-xs font-semibold">
                                            {msg.playerName}
                                        </p>
                                        <p className="text-white text-sm">{msg.message}</p>
                                    </div>
                                ))}
                                <div ref={chatEndRef} />
                            </div>

                            <form onSubmit={handleSendMessage} className="flex gap-1">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Mensaje..."
                                    className="flex-1 px-2 py-1 rounded bg-white bg-opacity-20 text-white placeholder-gray-300 text-sm focus:outline-none"
                                    maxLength={100}
                                />
                                <button
                                    type="submit"
                                    className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-3 py-1 rounded text-sm"
                                >
                                    →
                                </button>
                            </form>
                        </div>

                        <button
                            onClick={onLeaveRoom}
                            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition duration-200 flex items-center justify-center gap-2"
                        >
                            <FaSignOutAlt />
                            Salir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

