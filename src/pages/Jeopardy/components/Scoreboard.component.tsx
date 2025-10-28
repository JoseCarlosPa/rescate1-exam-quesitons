import {Team} from "../Jeopardy.types";

interface ScoreboardProps {
    teams: Team[];
    currentTeamIndex: number;
}

export default function Scoreboard({teams, currentTeamIndex}: ScoreboardProps) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Puntuaciones</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {teams.map((team, index) => (
                    <div
                        key={team.id}
                        className={`
                            p-4 rounded-lg border-4 transition-all duration-300
                            ${index === currentTeamIndex
                            ? 'border-green-500 bg-green-50 shadow-lg scale-105'
                            : 'border-gray-300 bg-gray-50'
                        }
                        `}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-800">
                                {team.name}
                                {index === currentTeamIndex && (
                                    <span className="ml-2 text-green-600">▶</span>
                                )}
                            </h3>
                            <div className="text-3xl font-bold text-blue-600">
                                ${team.score}
                            </div>
                        </div>
                        <div className="text-sm text-gray-600">
                            <p className="font-semibold mb-1">Jugadores:</p>
                            <ul className="list-disc list-inside">
                                {team.players.map((player, pIndex) => (
                                    <li key={pIndex}>{player}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

