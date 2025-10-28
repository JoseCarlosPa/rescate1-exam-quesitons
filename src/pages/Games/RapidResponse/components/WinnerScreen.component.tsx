import { RapidResponsePlayer } from '../RapidResponse.types';

interface WinnerScreenProps {
    players: RapidResponsePlayer[];
    onRestart: () => void;
}

export default function WinnerScreen({ players, onRestart }: WinnerScreenProps) {
    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
    const winner = sortedPlayers[0];
    const isDraw = sortedPlayers[0].score === sortedPlayers[1].score;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full">
                {/* Encabezado */}
                <div className="text-center mb-8">
                    {isDraw ? (
                        <>
                            <div className="text-8xl mb-4 animate-bounce">🤝</div>
                            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                ¡EMPATE!
                            </h1>
                            <p className="text-2xl text-gray-600">
                                ¡Ambos jugadores son campeones!
                            </p>
                        </>
                    ) : (
                        <>
                            <div className="text-8xl mb-4 animate-bounce">👑</div>
                            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 mb-2">
                                ¡VICTORIA!
                            </h1>
                            <p className="text-3xl font-bold" style={{ color: winner.color }}>
                                {winner.name}
                            </p>
                            <p className="text-xl text-gray-600 mt-2">
                                ¡Es el campeón de Rapid Response!
                            </p>
                        </>
                    )}
                </div>

                {/* Resultados finales */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {sortedPlayers.map((player, index) => (
                        <div
                            key={player.id}
                            className="relative rounded-2xl p-6 shadow-lg"
                            style={{
                                backgroundColor: player.color,
                                transform: index === 0 && !isDraw ? 'scale(1.05)' : 'scale(1)',
                            }}
                        >
                            {index === 0 && !isDraw && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        🏆 GANADOR
                                    </span>
                                </div>
                            )}
                            {index === 1 && !isDraw && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-gray-300 text-gray-700 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                        🥈 2DO LUGAR
                                    </span>
                                </div>
                            )}

                            <div className="text-white mt-4">
                                <h3 className="text-2xl font-bold mb-4 text-center">
                                    {player.name}
                                </h3>

                                <div className="text-center mb-6">
                                    <div className="text-6xl font-bold mb-2">
                                        {player.score}
                                    </div>
                                    <div className="text-xl opacity-90">Puntos Totales</div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mb-4">
                                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <div className="text-3xl font-bold">
                                            {player.correctAnswers}
                                        </div>
                                        <div className="text-sm opacity-90">✅ Correctas</div>
                                    </div>
                                    <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <div className="text-3xl font-bold">
                                            {player.wrongAnswers}
                                        </div>
                                        <div className="text-sm opacity-90">❌ Incorrectas</div>
                                    </div>
                                </div>

                                <div className="bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                    <div className="text-3xl font-bold">{player.streak}</div>
                                    <div className="text-sm opacity-90">
                                        🔥 Mejor Racha
                                    </div>
                                </div>

                                {player.correctAnswers > 0 && (
                                    <div className="mt-4 bg-white bg-opacity-20 rounded-lg p-3 text-center">
                                        <div className="text-2xl font-bold">
                                            {Math.round(
                                                (player.correctAnswers /
                                                    (player.correctAnswers +
                                                        player.wrongAnswers)) *
                                                    100
                                            )}
                                            %
                                        </div>
                                        <div className="text-sm opacity-90">
                                            📊 Precisión
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Estadísticas adicionales */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                        📈 Estadísticas del Juego
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-blue-600">
                                {players.reduce((sum, p) => sum + p.correctAnswers, 0)}
                            </div>
                            <div className="text-sm text-gray-600">
                                Preguntas Correctas
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-red-600">
                                {players.reduce((sum, p) => sum + p.wrongAnswers, 0)}
                            </div>
                            <div className="text-sm text-gray-600">
                                Preguntas Incorrectas
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-green-600">
                                {players.reduce((sum, p) => sum + p.score, 0)}
                            </div>
                            <div className="text-sm text-gray-600">Puntos Totales</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-orange-600">
                                {Math.max(...players.map((p) => p.streak))}
                            </div>
                            <div className="text-sm text-gray-600">Mejor Racha</div>
                        </div>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex gap-4">
                    <button
                        onClick={onRestart}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition duration-200"
                    >
                        🔄 Jugar de Nuevo
                    </button>
                    <button
                        onClick={() => window.history.back()}
                        className="flex-1 bg-gray-600 text-white py-4 rounded-xl font-bold text-xl hover:bg-gray-700 hover:shadow-2xl transform hover:scale-105 transition duration-200"
                    >
                        🏠 Menú Principal
                    </button>
                </div>
            </div>
        </div>
    );
}

