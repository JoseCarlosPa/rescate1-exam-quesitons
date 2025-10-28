import { RapidResponsePlayer } from '../RapidResponse.types';

interface ScoreboardProps {
    players: RapidResponsePlayer[];
    currentPlayer: number;
}

export default function Scoreboard({ players, currentPlayer }: ScoreboardProps) {
    if (players.length === 0) return null;

    return (
        <div className="grid grid-cols-2 gap-4 mb-6">
            {players.map((player, index) => {
                const isActive = index === currentPlayer;
                const isWinning = player.score > players[(index + 1) % 2].score;

                return (
                    <div
                        key={player.id}
                        className={`relative rounded-2xl p-6 transform transition-all duration-300 ${
                            isActive
                                ? 'scale-105 shadow-2xl ring-4 ring-white'
                                : 'scale-95 opacity-75'
                        }`}
                        style={{
                            backgroundColor: player.color,
                        }}
                    >
                        {isActive && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-white text-gray-800 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    🎯 TURNO ACTUAL
                                </span>
                            </div>
                        )}

                        <div className="text-white">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-2xl font-bold truncate">
                                    {player.name}
                                </h3>
                                {isWinning && players[0].score !== players[1].score && (
                                    <span className="text-2xl animate-bounce">👑</span>
                                )}
                            </div>

                            <div className="text-5xl font-bold mb-4">
                                {player.score} pts
                            </div>

                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="bg-white bg-opacity-20 rounded-lg p-2">
                                    <div className="font-semibold">✅ Correctas</div>
                                    <div className="text-2xl font-bold">
                                        {player.correctAnswers}
                                    </div>
                                </div>
                                <div className="bg-white bg-opacity-20 rounded-lg p-2">
                                    <div className="font-semibold">❌ Incorrectas</div>
                                    <div className="text-2xl font-bold">
                                        {player.wrongAnswers}
                                    </div>
                                </div>
                            </div>

                            {player.streak >= 2 && (
                                <div className="mt-3 bg-yellow-400 text-yellow-900 rounded-lg p-2 text-center font-bold animate-pulse">
                                    🔥 Racha x{player.streak}!
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

