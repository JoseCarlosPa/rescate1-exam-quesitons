import { BuzzerTeam } from '../BuzzerBattle.types';
import { FaTrophy, FaStar } from 'react-icons/fa';

interface ScoreboardProps {
    teams: BuzzerTeam[];
}

export default function Scoreboard({ teams }: ScoreboardProps) {
    // Sort teams by score
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);

    return (
        <div className="mb-8">
            <h2 className="text-4xl font-bold text-white text-center mb-6 flex items-center justify-center gap-3">
                <FaTrophy className="text-yellow-400" />
                Marcador
                <FaTrophy className="text-yellow-400" />
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {sortedTeams.map((team, index) => (
                    <div
                        key={team.id}
                        className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border-4 transform hover:scale-105 transition-all"
                        style={{ borderColor: team.color }}
                    >
                        {/* Leader Badge */}
                        {index === 0 && (
                            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                                <FaStar className="text-yellow-900 text-2xl" />
                            </div>
                        )}

                        {/* Team Info */}
                        <div className="text-center">
                            <h3 className="font-bold text-white text-lg mb-2 truncate">
                                {team.name}
                            </h3>
                            <div
                                className="text-5xl font-bold mb-2"
                                style={{ color: team.color }}
                            >
                                {team.score}
                            </div>
                            <div className="text-sm text-gray-300">
                                <div className="flex justify-center gap-4">
                                    <span className="text-green-400">
                                        ✓ {team.correctAnswers}
                                    </span>
                                    <span className="text-red-400">
                                        ✗ {team.wrongAnswers}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Position Badge */}
                        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-purple-600 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold border-2 border-white">
                            {index + 1}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

