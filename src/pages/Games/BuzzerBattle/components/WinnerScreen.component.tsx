import { BuzzerTeam } from '../BuzzerBattle.types';
import { FaTrophy, FaMedal, FaRedo } from 'react-icons/fa';
import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';

interface WinnerScreenProps {
    teams: BuzzerTeam[];
    onPlayAgain: () => void;
}

export default function WinnerScreen({ teams, onPlayAgain }: WinnerScreenProps) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Sort teams by score
    const sortedTeams = [...teams].sort((a, b) => b.score - a.score);
    const winner = sortedTeams[0];
    const medals = ['🥇', '🥈', '🥉'];

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
            <Confetti width={windowSize.width} height={windowSize.height} />

            <div className="max-w-4xl w-full">
                {/* Winner Announcement */}
                <div
                    className="backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-8 border-8 animate-pulse"
                    style={{
                        backgroundColor: `${winner.color}20`,
                        borderColor: winner.color,
                    }}
                >
                    <div className="text-center">
                        <FaTrophy
                            className="text-9xl mx-auto mb-6 animate-bounce"
                            style={{ color: winner.color }}
                        />
                        <h1 className="text-6xl font-bold text-white mb-4">
                            ¡GANADOR!
                        </h1>
                        <h2
                            className="text-7xl font-bold mb-6"
                            style={{ color: winner.color }}
                        >
                            {winner.name}
                        </h2>
                        <div className="text-white text-4xl mb-4">
                            <span className="font-bold text-5xl" style={{ color: winner.color }}>
                                {winner.score}
                            </span>{' '}
                            puntos
                        </div>
                        <div className="text-white text-2xl">
                            <span className="text-green-400 font-bold">
                                {winner.correctAnswers} correctas
                            </span>
                            {' • '}
                            <span className="text-red-400 font-bold">
                                {winner.wrongAnswers} incorrectas
                            </span>
                        </div>
                    </div>
                </div>

                {/* Final Standings */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 mb-8 border-4 border-white/30">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <FaMedal className="text-yellow-400 text-4xl" />
                        <h3 className="text-4xl font-bold text-white">
                            Clasificación Final
                        </h3>
                        <FaMedal className="text-yellow-400 text-4xl" />
                    </div>

                    <div className="space-y-4">
                        {sortedTeams.map((team, index) => (
                            <div
                                key={team.id}
                                className="flex items-center gap-6 p-6 rounded-2xl border-4 transform transition-all hover:scale-105"
                                style={{
                                    backgroundColor: `${team.color}20`,
                                    borderColor: team.color,
                                }}
                            >
                                {/* Position */}
                                <div className="text-6xl">{medals[index] || `${index + 1}º`}</div>

                                {/* Team Info */}
                                <div className="flex-1">
                                    <h4 className="text-3xl font-bold text-white mb-2">
                                        {team.name}
                                    </h4>
                                    <div className="text-white text-lg">
                                        <span className="text-green-400">
                                            ✓ {team.correctAnswers}
                                        </span>
                                        {' • '}
                                        <span className="text-red-400">
                                            ✗ {team.wrongAnswers}
                                        </span>
                                    </div>
                                </div>

                                {/* Score */}
                                <div
                                    className="text-6xl font-bold"
                                    style={{ color: team.color }}
                                >
                                    {team.score}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Play Again Button */}
                <button
                    onClick={onPlayAgain}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-6 rounded-3xl text-3xl flex items-center justify-center gap-4 transform hover:scale-105 transition-all shadow-2xl border-4 border-green-300"
                >
                    <FaRedo />
                    ¡JUGAR DE NUEVO!
                </button>
            </div>
        </div>
    );
}

