import { RapidResponseQuestion } from '../RapidResponse.types';

interface QuestionDisplayProps {
    question: RapidResponseQuestion;
    onAnswer: (answer: string) => void;
    showAnswer: boolean;
    onNext: () => void;
    disabled: boolean;
}

export default function QuestionDisplay({
    question,
    onAnswer,
    showAnswer,
    onNext,
    disabled,
}: QuestionDisplayProps) {
    const getOptionClass = (option: string) => {
        if (!showAnswer) {
            return 'bg-white hover:bg-blue-50 border-gray-300 hover:border-blue-500 hover:shadow-lg transform hover:scale-105';
        }

        if (option === question.answer) {
            return 'bg-green-500 text-white border-green-600 ring-4 ring-green-200';
        }

        return 'bg-gray-200 text-gray-500 border-gray-300 opacity-50';
    };

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8">
            {/* Pregunta */}
            <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    {question.question}
                </h2>
            </div>

            {/* Opciones */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {question.options.map((option: string, index: number) => (
                    <button
                        key={index}
                        onClick={() => !disabled && onAnswer(option)}
                        disabled={disabled}
                        className={`p-6 rounded-xl border-2 transition-all duration-200 text-left font-semibold text-lg ${getOptionClass(
                            option
                        )} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        <div className="flex items-center">
                            <span className="text-2xl mr-4 flex-shrink-0">
                                {String.fromCharCode(65 + index)}.
                            </span>
                            <span>{option}</span>
                            {showAnswer && option === question.answer && (
                                <span className="ml-auto text-3xl">✅</span>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            {/* Explicación */}
            {showAnswer && question.explanation && (
                <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                        <span className="mr-2">💡</span>
                        Explicación:
                    </h3>
                    <p className="text-blue-800">{question.explanation}</p>
                </div>
            )}

            {/* Botón siguiente */}
            {showAnswer && (
                <button
                    onClick={onNext}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition duration-200"
                >
                    ➡️ Siguiente Pregunta
                </button>
            )}
        </div>
    );
}

