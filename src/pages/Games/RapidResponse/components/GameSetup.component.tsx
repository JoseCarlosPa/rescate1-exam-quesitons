import { useState } from 'react';
import { RapidResponseGameConfig } from '../RapidResponse.types';

interface GameSetupProps {
    onStartGame: (config: RapidResponseGameConfig) => void;
}

export default function GameSetup({ onStartGame }: GameSetupProps) {
    const [config, setConfig] = useState<RapidResponseGameConfig>({
        player1Name: '',
        player2Name: '',
        totalRounds: 10,
        difficulty: 'Mixto',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onStartGame(config);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mb-2">
                        ⚡ Rapid Response ⚡
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Juego de preguntas rápidas para 2 jugadores
                    </p>
                </div>

                <div className="mb-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 mb-2">📋 Instrucciones:</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Los jugadores se turnan para responder preguntas</li>
                        <li>• Diferentes tipos de preguntas otorgan bonificaciones especiales</li>
                        <li>• ⚡ <strong>Rápida:</strong> +50% puntos (menos tiempo)</li>
                        <li>• 💎 <strong>Doble:</strong> Puntos x2</li>
                        <li>• 🎯 <strong>Robar:</strong> Si fallas, el otro jugador puede robar puntos</li>
                        <li>• 🔥 <strong>Racha:</strong> 3+ correctas seguidas = puntos extra</li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🔴 Jugador 1
                            </label>
                            <input
                                type="text"
                                placeholder="Nombre del Jugador 1"
                                value={config.player1Name}
                                onChange={(e) =>
                                    setConfig({ ...config, player1Name: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-red-300 rounded-lg focus:outline-none focus:border-red-500 transition"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                🔵 Jugador 2
                            </label>
                            <input
                                type="text"
                                placeholder="Nombre del Jugador 2"
                                value={config.player2Name}
                                onChange={(e) =>
                                    setConfig({ ...config, player2Name: e.target.value })
                                }
                                className="w-full px-4 py-3 border-2 border-blue-300 rounded-lg focus:outline-none focus:border-blue-500 transition"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            🎮 Número de Rondas
                        </label>
                        <select
                            value={config.totalRounds}
                            onChange={(e) =>
                                setConfig({ ...config, totalRounds: Number(e.target.value) })
                            }
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
                        >
                            <option value={5}>5 Rondas (Rápido)</option>
                            <option value={10}>10 Rondas (Normal)</option>
                            <option value={15}>15 Rondas (Largo)</option>
                            <option value={20}>20 Rondas (Épico)</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            📊 Dificultad
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {(['Fácil', 'Media', 'Difícil', 'Mixto'] as const).map((diff) => (
                                <button
                                    key={diff}
                                    type="button"
                                    onClick={() => setConfig({ ...config, difficulty: diff })}
                                    className={`px-4 py-3 rounded-lg font-semibold transition ${
                                        config.difficulty === diff
                                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg transform scale-105'
                                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                                >
                                    {diff}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white py-4 rounded-lg font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition duration-200"
                    >
                        🚀 ¡Comenzar Batalla!
                    </button>
                </form>

                <div className="mt-6 text-center text-sm text-gray-500">
                    <p>💡 Consejo: Responde rápido para mantener tu racha y ganar puntos extra</p>
                </div>
            </div>
        </div>
    );
}

