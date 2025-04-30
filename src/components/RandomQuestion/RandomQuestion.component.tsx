import  { useState } from "react";
import { getRandomQuestion } from "../../pages/EMT/allQuestionts";


export default function RandomQuestion() {
    const [question, setQuestion] = useState(getRandomQuestion());
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleNewQuestion = () => {
        setQuestion(getRandomQuestion());
        setSelectedAnswer(null);
        setFeedback(null);
    };

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
    };

    const handleGrade = () => {
        if (selectedAnswer === question.correctAnswer) {
            setFeedback("✅ ¡Correcto!");
        } else {
            setFeedback("❌ Incorrecto. Intenta de nuevo.");
        }
    };

    return (
        <div className="px-6 py-4 bg-white  rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Pregunta Aleatoria {feedback && <span className="italic">{feedback}</span>}</h2>
            <p className="mb-4">{question.question}</p>
            {question.options && (
                <ul className="list-disc pl-5">
                    {question.options.map((option) => (
                        <ol key={option.letter}>
                            <label className="flex gap-2">
                                <input
                                    type="radio"
                                    name="answer"
                                    value={option.letter}
                                    onChange={() => handleAnswerSelect(option.letter)}
                                    checked={selectedAnswer === option.letter}
                                />
                                {option.letter}. {option.text}
                            </label>
                        </ol>
                    ))}
                </ul>
            )}
            <div className="mt-4">
                <button
                    onClick={handleGrade}
                    className={`px-4 py-2 ${selectedAnswer ? 'bg-blue-500 hover:bg-blue-600 cursor-pointer' : 'bg-gray-300 cursor-not-allowed'} text-white rounded  mr-2 `}
                    disabled={!selectedAnswer}
                >
                    Calificar
                </button>
                <button
                    onClick={handleNewQuestion}
                    className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 cursor-pointer"
                >
                    Nueva Pregunta
                </button>
            </div>

        </div>
    );
}