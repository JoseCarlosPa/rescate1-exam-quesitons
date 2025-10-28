import { useState } from 'react';
import { BuzzerGameConfig } from '../BuzzerBattle.types';
import { DEFAULT_GAME_CONFIG } from '../BuzzerBattle.constants';
import { FaUsers, FaPlay } from 'react-icons/fa';

interface GameSetupProps {
    onStartGame: (config: BuzzerGameConfig, teamNames: string[]) => void;
}

export default function GameSetup({ onStartGame }: GameSetupProps) {
    const [numberOfTeams, setNumberOfTeams] = useState(DEFAULT_GAME_CONFIG.numberOfTeams);
    const [teamNames, setTeamNames] = useState<string[]>(['Equipo Rojo', 'Equipo Azul']);

    const handleTeamCountChange = (count: number) => {
        setNumberOfTeams(count);
        const newTeamNames = Array.from({ length: count }, (_, i) => {
            if (i < teamNames.length) {
                return teamNames[i];
            }
            const colors = ['Rojo', 'Azul', 'Verde', 'Amarillo', 'Púrpura', 'Rosa'];
            return `Equipo ${colors[i] || i + 1}`;
        });
        setTeamNames(newTeamNames);
    };

    const handleTeamNameChange = (index: number, name: string) => {
        const newTeamNames = [...teamNames];
        newTeamNames[index] = name;
        setTeamNames(newTeamNames);
    };

    const handleStart = () => {
        if (teamNames.some(name => !name.trim())) {
            alert('Por favor, ingresa nombres para todos los equipos');
            return;
        }
        onStartGame(DEFAULT_GAME_CONFIG, teamNames);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border-4 border-yellow-400">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold text-white mb-4">
                        🔔 Buzzer Battle
                    </h1>
                    <p className="text-xl text-gray-200">
                        ¡Batalla de Conocimientos en Medicina Prehospitalaria!
                    </p>
                </div>

                {/* Instructions */}
                <div className="bg-blue-600/30 rounded-2xl p-6 mb-8 border-2 border-blue-400">
                    <h2 className="text-2xl font-bold text-white mb-4">📋 Instrucciones</h2>
                    <ul className="text-gray-200 space-y-2">
                        <li>• Cada equipo debe presionar su botón para responder primero</li>
                        <li>• Respuestas correctas suman puntos según dificultad</li>
                        <li>• Respuestas incorrectas restan la mitad de los puntos</li>
                        <li>• El equipo con más puntos al final gana</li>
                    </ul>
                </div>

                {/* Team Configuration */}
                <div className="bg-purple-600/30 rounded-2xl p-6 mb-8 border-2 border-purple-400">
                    <div className="flex items-center gap-3 mb-6">
                        <FaUsers className="text-white text-3xl" />
                        <h2 className="text-2xl font-bold text-white">Configuración de Equipos</h2>
                    </div>

                    {/* Number of Teams */}
                    <div className="mb-6">
                        <label className="text-white font-semibold mb-3 block">
                            Número de Equipos: {numberOfTeams}
                        </label>
                        <div className="flex gap-2 flex-wrap">
                            {[2, 3, 4, 5, 6].map(count => (
                                <button
                                    key={count}
                                    onClick={() => handleTeamCountChange(count)}
                                    className={`px-6 py-3 rounded-lg font-bold transition-all ${
                                        numberOfTeams === count
                                            ? 'bg-yellow-400 text-purple-900 scale-110'
                                            : 'bg-white/20 text-white hover:bg-white/30'
                                    }`}
                                >
                                    {count}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Team Names */}
                    <div className="space-y-3">
                        {teamNames.map((name, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <span className="text-white font-bold w-32">
                                    Equipo {index + 1}:
                                </span>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => handleTeamNameChange(index, e.target.value)}
                                    className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border-2 border-white/30 focus:border-yellow-400 focus:outline-none"
                                    placeholder={`Nombre del equipo ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Start Button */}
                <button
                    onClick={handleStart}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 rounded-2xl text-2xl flex items-center justify-center gap-4 transform hover:scale-105 transition-all shadow-2xl border-4 border-green-300"
                >
                    <FaPlay />
                    ¡COMENZAR JUEGO!
                </button>
            </div>
        </div>
    );
}

