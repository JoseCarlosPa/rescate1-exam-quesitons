import type { GameRoom, Player } from '../MedicalQuizArena.types';
import { FaTrophy, FaMedal, FaStar, FaRedo, FaHome } from 'react-icons/fa';

interface ResultsProps {
    gameRoom: GameRoom;
    currentPlayer: Player | null;
    onPlayAgain: () => void;
    onLeaveRoom: () => void;
}

export default function Results({
    gameRoom,
    currentPlayer,
    onPlayAgain,
    onLeaveRoom,
}: ResultsProps) {
    const sortedPlayers = [...gameRoom.players].sort((a, b) => b.score - a.score);
    const winner = sortedPlayers[0];
    const playerRank = sortedPlayers.findIndex(p => p.id === currentPlayer?.id) + 1;

    const getRankIcon = (rank: number) => {
        if (rank === 1) return <FaTrophy className="text-yellow-400 text-4xl" />;
        if (rank === 2) return <FaMedal className="text-gray-400 text-4xl" />;
        if (rank === 3) return <FaMedal className="text-orange-400 text-4xl" />;
        return <FaStar className="text-blue-400 text-2xl" />;
    };

    const getRankColor = (rank: number) => {
        if (rank === 1) return 'from-yellow-500 to-orange-500';
        if (rank === 2) return 'from-gray-400 to-gray-600';
        if (rank === 3) return 'from-orange-400 to-orange-600';
        return 'from-blue-500 to-indigo-600';
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                {/* Header de victoria */}
                <div className="text-center mb-8">
                    <div className="text-8xl mb-4">🏆</div>
                    <h1 className="text-6xl font-bold text-white mb-2">
                        ¡Juego Terminado!
                    </h1>
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full px-8 py-3 inline-block">
                        <p className="text-white text-2xl font-bold">
                            ¡Ganador: {winner.name}! 🎉
                        </p>
                    </div>
                </div>

                {/* Podio */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-8 border-4 border-yellow-400">
                    <h2 className="text-3xl font-bold text-white text-center mb-6">
                        📊 Resultados Finales
                    </h2>

                    <div className="space-y-4">
                        {sortedPlayers.map((player, index) => {
                            const rank = index + 1;
                            const isCurrentPlayer = player.id === currentPlayer?.id;
                            const accuracy = player.correctAnswers + player.wrongAnswers > 0
                                ? Math.round((player.correctAnswers / (player.correctAnswers + player.wrongAnswers)) * 100)
                                : 0;

                            return (
                                <div
                                    key={player.id}
                                    className={`bg-gradient-to-r ${getRankColor(rank)} rounded-2xl p-6 transform transition-all duration-200 ${
                                        isCurrentPlayer ? 'scale-105 ring-4 ring-white' : ''
                                    }`}
                                    style={{ borderLeft: `8px solid ${player.color}` }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center justify-center w-16">
                                                {getRankIcon(rank)}
                                            </div>
                                            <div className="text-5xl">{player.avatar}</div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h3 className="text-2xl font-bold text-white">
                                                        #{rank} {player.name}
                                                    </h3>
                                                    {isCurrentPlayer && (
                                                        <span className="bg-white text-purple-900 px-3 py-1 rounded-full text-sm font-bold">
                                                            TÚ
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="flex gap-4 mt-2">
                                                    <div>
                                                        <span className="text-white opacity-80 text-sm">
                                                            Correctas:
                                                        </span>
                                                        <span className="text-white font-bold ml-1">
                                                            {player.correctAnswers}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-white opacity-80 text-sm">
                                                            Incorrectas:
                                                        </span>
                                                        <span className="text-white font-bold ml-1">
                                                            {player.wrongAnswers}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="text-white opacity-80 text-sm">
                                                            Precisión:
                                                        </span>
                                                        <span className="text-white font-bold ml-1">
                                                            {accuracy}%
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-5xl font-bold text-white">
                                                {player.score}
                                            </div>
                                            <div className="text-white opacity-80 text-sm">
                                                puntos
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Estadísticas personales */}
                {currentPlayer && (
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-8 border-4 border-blue-400">
                        <h3 className="text-2xl font-bold text-white text-center mb-6">
                            📈 Tus Estadísticas
                        </h3>

                        <div className="grid md:grid-cols-4 gap-4">
                            <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                                <div className="text-4xl mb-2">🎯</div>
                                <div className="text-3xl font-bold text-white">
                                    {currentPlayer.correctAnswers}
                                </div>
                                <div className="text-gray-300 text-sm">
                                    Respuestas Correctas
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                                <div className="text-4xl mb-2">❌</div>
                                <div className="text-3xl font-bold text-white">
                                    {currentPlayer.wrongAnswers}
                                </div>
                                <div className="text-gray-300 text-sm">
                                    Respuestas Incorrectas
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                                <div className="text-4xl mb-2">🔥</div>
                                <div className="text-3xl font-bold text-white">
                                    {currentPlayer.streak}
                                </div>
                                <div className="text-gray-300 text-sm">
                                    Mejor Racha
                                </div>
                            </div>

                            <div className="bg-white bg-opacity-20 rounded-xl p-4 text-center">
                                <div className="text-4xl mb-2">🏅</div>
                                <div className="text-3xl font-bold text-white">
                                    #{playerRank}
                                </div>
                                <div className="text-gray-300 text-sm">
                                    Posición Final
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Botones de acción */}
                <div className="flex gap-4">
                    <button
                        onClick={onPlayAgain}
                        className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-lg"
                    >
                        <FaRedo />
                        Jugar de Nuevo
                    </button>

                    <button
                        onClick={onLeaveRoom}
                        className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition duration-200 flex items-center justify-center gap-2 text-lg"
                    >
                        <FaHome />
                        Volver al Menú
                    </button>
                </div>

                {/* Mensaje motivacional */}
                <div className="mt-8 text-center">
                    <p className="text-2xl text-white font-semibold">
                        {playerRank === 1 && '🎉 ¡Excelente trabajo! Eres un experto en medicina prehospitalaria!'}
                        {playerRank === 2 && '👏 ¡Muy bien! Estuviste muy cerca de la victoria!'}
                        {playerRank === 3 && '💪 ¡Buen trabajo! Sigue practicando y llegarás al top!'}
                        {playerRank > 3 && '📚 ¡Sigue estudiando! Cada intento te hace mejor!'}
                    </p>
                </div>
            </div>
        </div>
    );
}

