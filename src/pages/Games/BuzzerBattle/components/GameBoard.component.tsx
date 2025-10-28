import { BuzzerTeam, BuzzerQuestion } from '../BuzzerBattle.types';
import { FaBell, FaArrowRight } from 'react-icons/fa';

interface GameBoardProps {
    teams: BuzzerTeam[];
    buzzerActive: boolean;
    teamThatBuzzed: string | null;
    onBuzz: (teamId: string) => void;
    onAnswer: (selectedOption: string) => void;
    onNextQuestion: () => void;
    showAnswer: boolean;
    currentQuestion: BuzzerQuestion | null;
}

export default function GameBoard({
    teams,
    buzzerActive,
    teamThatBuzzed,
    onBuzz,
    onAnswer,
    onNextQuestion,
    showAnswer,
    currentQuestion,
}: GameBoardProps) {
    const teamThatBuzzedData = teams.find(t => t.id === teamThatBuzzed);

    return (
        <div className="mt-8">
            {/* Buzzer Status */}
            <div className="text-center mb-8">
                {buzzerActive && !teamThatBuzzed && (
                    <div className="bg-green-500/30 backdrop-blur-lg rounded-2xl p-6 border-4 border-green-400 animate-pulse">
                        <h3 className="text-white text-3xl font-bold flex items-center justify-center gap-3">
                            <FaBell className="animate-bounce" />
                            ¡BUZZERS ACTIVOS! Presiona tu botón para responder
                            <FaBell className="animate-bounce" />
                        </h3>
                    </div>
                )}

                {teamThatBuzzed && teamThatBuzzedData && !showAnswer && (
                    <div
                        className="backdrop-blur-lg rounded-2xl p-6 border-4"
                        style={{
                            backgroundColor: `${teamThatBuzzedData.color}40`,
                            borderColor: teamThatBuzzedData.color,
                        }}
                    >
                        <h3 className="text-white text-3xl font-bold">
                            🔔 {teamThatBuzzedData.name} presionó el buzzer primero!
                        </h3>
                        <p className="text-white text-xl mt-2">
                            Selecciona tu respuesta
                        </p>
                    </div>
                )}
            </div>

            {/* Buzzer Buttons */}
            {buzzerActive && !teamThatBuzzed && (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
                    {teams.map(team => (
                        <button
                            key={team.id}
                            onClick={() => onBuzz(team.id)}
                            className="group relative"
                            style={{ minHeight: '200px' }}
                        >
                            <div
                                className="w-full h-full rounded-3xl border-8 transform transition-all hover:scale-110 active:scale-95 shadow-2xl flex flex-col items-center justify-center p-6 font-bold text-white text-2xl"
                                style={{
                                    backgroundColor: team.color,
                                    borderColor: `${team.color}dd`,
                                }}
                            >
                                <FaBell className="text-6xl mb-4 group-hover:animate-bounce" />
                                <div className="text-center">
                                    {team.name}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>
            )}

            {/* Answer Options */}
            {teamThatBuzzed && !showAnswer && currentQuestion && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-5xl mx-auto">
                    {currentQuestion.options.map((option, index) => {
                        const letters = ['A', 'B', 'C', 'D'];
                        return (
                            <button
                                key={index}
                                onClick={() => onAnswer(option)}
                                className="group p-8 rounded-3xl border-4 border-white/30 bg-white/10 backdrop-blur-lg hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all shadow-2xl"
                            >
                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-blue-500 group-hover:bg-blue-400 flex items-center justify-center font-bold text-2xl text-white flex-shrink-0">
                                        {letters[index]}
                                    </div>
                                    <p className="text-white text-2xl font-semibold text-left flex-1">
                                        {option}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Next Question Button */}
            {showAnswer && (
                <div className="flex justify-center">
                    <button
                        onClick={onNextQuestion}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-6 px-16 rounded-3xl text-3xl flex items-center gap-4 transform hover:scale-110 transition-all shadow-2xl border-4 border-blue-300"
                    >
                        Siguiente Pregunta
                        <FaArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
}

