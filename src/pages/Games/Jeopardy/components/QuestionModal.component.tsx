import {useState, useEffect} from "react";
import {JeopardyQuestion, Team} from "../Jeopardy.types";
import "../Jeopardy.animations.css";

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
    const [showSuspense, setShowSuspense] = useState(false);
    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (showSuspense && countdown > 0) {
            const timer = setTimeout(() => {
                setCountdown(prev => prev - 1);
            }, 800);
            return () => clearTimeout(timer);
        } else if (showSuspense && countdown === 0) {
            const timer = setTimeout(() => {
                setShowSuspense(false);
                setShowResult(true);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [showSuspense, countdown]);

    const handleSubmit = () => {
        if (!selectedAnswer) return;

        const correct = selectedAnswer === question.answer;
        setIsCorrect(correct);
        setShowSuspense(true);
        setCountdown(3);
    };

    const handleContinue = () => {
        onAnswer(isCorrect, selectedAnswer!);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/80 bg-opacity-75 flex items-center justify-center p-4 z-50">
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative">
                {showSuspense ? (
                    <>
                        {/* Suspense View with Countdown */}
                        <div className="text-center py-20">
                            <div className="text-white text-3xl font-bold mb-8 animate-pulse">
                                Procesando respuesta...
                            </div>
                            <div className="relative">
                                <div className="text-yellow-400 text-9xl font-bold animate-bounce">
                                    {countdown > 0 ? countdown : '🎲'}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`w-64 h-64 rounded-full border-8 border-yellow-400 animate-ping opacity-20`}></div>
                                </div>
                            </div>
                            <div className="mt-8 text-yellow-300 text-xl font-semibold animate-pulse">
                                ¡Preparate para el resultado!
                            </div>
                        </div>
                    </>
                ) : !showResult ? (
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
                        {/* Result View with Enhanced Animations */}
                        <div className="text-center animate-fadeInScale">
                            <div className="relative mb-6">
                                {/* Background animation effect */}
                                <div className={`absolute inset-0 flex items-center justify-center ${
                                    isCorrect ? 'animate-ping opacity-20' : ''
                                }`}>
                                    <div className={`w-48 h-48 rounded-full ${
                                        isCorrect ? 'bg-green-400' : 'bg-red-400'
                                    }`}></div>
                                </div>

                                {/* Main icon with animation */}
                                <div className={`relative text-9xl ${
                                    isCorrect 
                                        ? 'animate-celebrate text-green-400' 
                                        : 'animate-shake text-red-400'
                                }`}>
                                    {isCorrect ? '✅' : '❌'}
                                </div>

                                {/* Confetti effect for correct answers */}
                                {isCorrect && (
                                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                                        {[...Array(10)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="confetti-piece"
                                                style={{
                                                    left: `${Math.random() * 100}%`,
                                                    backgroundColor: ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'][Math.floor(Math.random() * 5)],
                                                    animationDelay: `${Math.random() * 2}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>

                            <h2 className={`text-6xl font-bold mb-6 ${
                                isCorrect ? 'text-green-400' : 'text-red-400'
                            } animate-pulse`}>
                                {isCorrect ? '¡CORRECTO!' : '¡INCORRECTO!'}
                            </h2>

                            <div className={`text-4xl font-bold mb-8 ${
                                isCorrect ? 'text-green-300' : 'text-red-300'
                            } animate-bounce`}>
                                {isCorrect ? `+$${question.points}` : `-$${question.points}`}
                            </div>

                            <div className="bg-white rounded-lg p-6 mb-6 text-left animate-fadeInScale">
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

