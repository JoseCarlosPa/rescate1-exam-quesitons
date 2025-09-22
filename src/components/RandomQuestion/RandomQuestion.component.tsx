import {useEffect, useState} from "react";
import {getRandomQuestion} from "../../pages/EMT/allQuestionts";
import {IoClose} from "react-icons/io5";

export default function RandomQuestion({onClose}: { onClose?: () => void }) {
    const [question, setQuestion] = useState(getRandomQuestion());
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        setAnimateIn(true);
    }, []);

    const handleNewQuestion = () => {
        setQuestion(getRandomQuestion());
        setSelectedAnswer(null);
        setFeedback(null);
        setIsCorrect(null);
    };

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleGrade = () => {
        const correct = selectedAnswer === question.correctAnswer;
        setIsCorrect(correct);
        setFeedback(correct ? "✅ ¡Correcto!" : "❌ Incorrecto. Intenta de nuevo.");
    };

    return (
        <div
            className={`relative px-6 py-5 bg-white rounded-xl shadow-xl border border-orange-200 transition-all duration-500 ${animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {/* Encabezado con título y botón de cierre */}
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-orange-100">
                <h2 className="text-xl font-bold text-orange-600">Pregunta Aleatoria</h2>
                {onClose && (
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-orange-600 transition-colors"
                        aria-label="Cerrar"
                    >
                        <IoClose size={24}/>
                    </button>
                )}
            </div>

            {/* Sección de retroalimentación */}
            {feedback && (
                <div
                    className={`mb-4 p-2 rounded-lg text-center font-medium ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {feedback}
                </div>
            )}

            {/* Pregunta */}
            <div className="mb-5">
                <p className="text-gray-800 font-medium">{question.question}</p>
            </div>

            {/* Opciones */}
            {question.options && (
                <div className="space-y-2 mb-6">
                    {question.options.map((option) => (
                        <div
                            key={option.letter}
                            className={`p-2 rounded-lg border transition-all duration-200 ${
                                selectedAnswer === option.letter
                                    ? 'border-orange-400 bg-orange-50'
                                    : 'border-gray-200 hover:border-orange-300'
                            }`}
                        >
                            <label className="flex items-center gap-3 cursor-pointer w-full">
                                <input
                                    type="radio"
                                    name="answer"
                                    value={option.letter}
                                    onChange={() => handleAnswerSelect(option.letter)}
                                    checked={selectedAnswer === option.letter}
                                    className="text-orange-500 focus:ring-orange-500 h-4 w-4"
                                />
                                <span className="font-semibold">{option.letter}.</span>
                                <span className="text-gray-700">{option.text}</span>
                            </label>
                        </div>
                    ))}
                </div>
            )}

            {/* Botones de acción */}
            {feedback && (
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Explicación: </p>
                    <p className="italic text-blue-400">{question.explanation}</p>
                </div>
            )}
            <div className="flex justify-between mt-6">
                <button
                    onClick={handleGrade}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedAnswer
                            ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!selectedAnswer}
                >
                    Calificar
                </button>
                <button
                    onClick={handleNewQuestion}
                    className="px-4 py-2 bg-white border border-orange-300 text-orange-600 rounded-lg hover:bg-orange-50 font-medium transition-all duration-200 shadow-sm"
                >
                    Nueva Pregunta
                </button>
            </div>
        </div>
    );
}