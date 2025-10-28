import {useState} from "react";
import {GameConfig} from "../Jeopardy.types";

interface GameSetupProps {
    onStartGame: (config: GameConfig, teams: Array<{ name: string; players: string[] }>) => void;
}

export default function GameSetup({onStartGame}: GameSetupProps) {
    const [numberOfTeams, setNumberOfTeams] = useState(2);
    const [playersPerTeam, setPlayersPerTeam] = useState(1);
    const [teams, setTeams] = useState<Array<{ name: string; players: string[] }>>([]);
    const [currentStep, setCurrentStep] = useState<'config' | 'teams'>('config');

    const handleConfigSubmit = () => {
        const initialTeams = Array.from({length: numberOfTeams}, (_, i) => ({
            name: `Equipo ${i + 1}`,
            players: Array.from({length: playersPerTeam}, (_, j) => `Jugador ${j + 1}`)
        }));
        setTeams(initialTeams);
        setCurrentStep('teams');
    };

    const handleTeamNameChange = (index: number, name: string) => {
        const newTeams = [...teams];
        newTeams[index].name = name;
        setTeams(newTeams);
    };

    const handlePlayerNameChange = (teamIndex: number, playerIndex: number, name: string) => {
        const newTeams = [...teams];
        newTeams[teamIndex].players[playerIndex] = name;
        setTeams(newTeams);
    };

    const handleStartGame = () => {
        onStartGame({numberOfTeams, playersPerTeam}, teams);
    };

    if (currentStep === 'config') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                    <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
                        🏥 Jeopardy Médico
                    </h1>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-lg font-semibold mb-2 text-gray-700">
                                Número de Equipos
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="6"
                                value={numberOfTeams}
                                onChange={(e) => setNumberOfTeams(Math.max(1, Math.min(6, parseInt(e.target.value) || 1)))}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-semibold mb-2 text-gray-700">
                                Jugadores por Equipo
                            </label>
                            <input
                                type="number"
                                min="1"
                                max="8"
                                value={playersPerTeam}
                                onChange={(e) => setPlayersPerTeam(Math.max(1, Math.min(8, parseInt(e.target.value) || 1)))}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                            />
                        </div>
                        <button
                            onClick={handleConfigSubmit}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-200 text-lg shadow-lg"
                        >
                            Continuar
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 p-4 overflow-y-auto">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8 my-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
                    Configurar Equipos y Jugadores
                </h2>
                <div className="space-y-6">
                    {teams.map((team, teamIndex) => (
                        <div key={teamIndex} className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                            <div className="mb-4">
                                <label className="block text-lg font-semibold mb-2 text-gray-700">
                                    Nombre del Equipo {teamIndex + 1}
                                </label>
                                <input
                                    type="text"
                                    value={team.name}
                                    onChange={(e) => handleTeamNameChange(teamIndex, e.target.value)}
                                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                    placeholder={`Equipo ${teamIndex + 1}`}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-semibold text-gray-700">Jugadores:</label>
                                {team.players.map((player, playerIndex) => (
                                    <input
                                        key={playerIndex}
                                        type="text"
                                        value={player}
                                        onChange={(e) => handlePlayerNameChange(teamIndex, playerIndex, e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                                        placeholder={`Jugador ${playerIndex + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 flex gap-4">
                    <button
                        onClick={() => setCurrentStep('config')}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 rounded-lg transition duration-200 text-lg"
                    >
                        Atrás
                    </button>
                    <button
                        onClick={handleStartGame}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition duration-200 text-lg shadow-lg"
                    >
                        Comenzar Juego
                    </button>
                </div>
            </div>
        </div>
    );
}

