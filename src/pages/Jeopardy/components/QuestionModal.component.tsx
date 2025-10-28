import {useState} from "react";
import {JeopardyQuestion, Team} from "../Jeopardy.types";

interface QuestionModalProps {
    question: JeopardyQuestion;
    currentTeam: Team;
    onAnswer: (isCorrect: boolean, selectedAnswer: string) => void;
    onClose: () => void;
}

export default function QuestionModal({question, currentTeam, onAnswer, onClose}: QuestionModalProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    const handleSubmit = () => {
        if (!selectedAnswer) return;

        const correct = selectedAnswer === question.answer;
        setIsCorrect(correct);
        setShowResult(true);
    };

    const handleContinue = () => {
        onAnswer(isCorrect, selectedAnswer!);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative">
                {!showResult ? (
                    <>
                        {/* Question View */}
                        <div className="text-center mb-6">
                            <div className="text-yellow-400 text-sm font-bold mb-2">
                                {question.category} - ${question.points}
                            </div>
                            <div className="text-white text-2xl font-bold mb-2">
                                Turno de: {currentTeam.name}
                            </div>
                        </div>

                        <div className="bg-blue-800 rounded-xl p-6 mb-6">
                            <h3 className="text-3xl font-bold text-white text-center mb-6">
                                {question.question}
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-6">
                            {question.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedAnswer(option)}
                                    className={`
                                        p-4 rounded-lg text-lg font-semibold transition-all duration-200
                                        ${selectedAnswer === option
                                        ? 'bg-yellow-500 text-blue-900 shadow-lg scale-105'
                                        : 'bg-white text-blue-900 hover:bg-yellow-200'
                                    }
                                    `}
                                >
                                    {String.fromCharCode(65 + index)}. {option}
                                </button>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            <button
                                onClick={onClose}
                                className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition duration-200"
                            >
                                Cancelar
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!selectedAnswer}
                                className={`
                                    flex-1 font-bold py-3 rounded-lg transition duration-200
                                    ${selectedAnswer
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                                }
                                `}
                            >
                                Confirmar Respuesta
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Result View */}
                        <div className="text-center">
                            <div className={`text-8xl mb-4 ${isCorrect ? 'animate-bounce' : 'animate-pulse'}`}>
                                {isCorrect ? '✅' : '❌'}
                            </div>
                            <h2 className={`text-5xl font-bold mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                {isCorrect ? '¡CORRECTO!' : 'INCORRECTO'}
                            </h2>
                            <div className="text-white text-2xl mb-6">
                                {isCorrect ? `+$${question.points}` : `-$${question.points}`}
                            </div>

                            <div className="bg-white rounded-lg p-6 mb-6 text-left">
                                <p className="text-gray-700 mb-3">
                                    <span className="font-bold">Respuesta correcta:</span>{' '}
                                    <span className="text-green-600 font-semibold">{question.answer}</span>
                                </p>
                                {question.explanation && (
                                    <p className="text-gray-600">
                                        <span className="font-bold">Explicación:</span>{' '}
                                        {question.explanation}
                                    </p>
                                )}
                            </div>

                            <button
                                onClick={handleContinue}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-200 text-xl"
                            >
                                Continuar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

