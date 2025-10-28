import { BuzzerQuestion } from '../BuzzerBattle.types';
import { FaQuestionCircle } from 'react-icons/fa';

interface QuestionDisplayProps {
    question: BuzzerQuestion | null;
    questionNumber: number;
    totalQuestions: number;
    showAnswer: boolean;
}

export default function QuestionDisplay({
    question,
    questionNumber,
    totalQuestions,
    showAnswer,
}: QuestionDisplayProps) {
    if (!question) return null;

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Fácil':
                return 'bg-green-500';
            case 'Media':
                return 'bg-yellow-500';
            case 'Difícil':
                return 'bg-red-500';
            default:
                return 'bg-gray-500';
        }
    };

    return (
        <div className="mb-8">
            {/* Question Header */}
            <div className="bg-white/10 backdrop-blur-lg rounded-t-3xl p-6 border-4 border-b-0 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <FaQuestionCircle className="text-blue-400 text-3xl" />
                        <span className="text-white text-xl font-bold">
                            Pregunta {questionNumber} de {totalQuestions}
                        </span>
                    </div>
                    <div className="flex gap-3">
                        <span className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold">
                            {question.category}
                        </span>
                        <span
                            className={`${getDifficultyColor(
                                question.difficulty
                            )} text-white px-4 py-2 rounded-lg font-semibold`}
                        >
                            {question.difficulty} - {question.points} pts
                        </span>
                    </div>
                </div>
            </div>

            {/* Question Content */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-b-3xl p-8 border-4 border-t-0 border-blue-400 min-h-[200px] flex items-center justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white text-center leading-relaxed">
                    {question.question}
                </h2>
            </div>

            {/* Answer Options - Solo se muestran cuando se revela la respuesta */}
            {showAnswer && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {question.options.map((option, index) => {
                        const letters = ['A', 'B', 'C', 'D'];
                        const isCorrect = option === question.answer;

                        return (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl border-4 transition-all ${
                                    isCorrect
                                        ? 'bg-green-500/30 border-green-400 scale-105'
                                        : 'bg-red-500/20 border-red-400'
                                }`}
                            >
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                                            isCorrect
                                                ? 'bg-green-400 text-green-900'
                                                : 'bg-red-400 text-red-900'
                                        }`}
                                    >
                                        {letters[index]}
                                    </div>
                                    <p className="text-white text-xl font-semibold flex-1">
                                        {option}
                                    </p>
                                    {isCorrect && (
                                        <span className="text-4xl">✓</span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Explanation */}
            {showAnswer && question.explanation && (
                <div className="mt-6 bg-blue-900/50 backdrop-blur-lg rounded-2xl p-6 border-4 border-blue-400">
                    <h3 className="text-yellow-400 font-bold text-xl mb-3">
                        💡 Explicación:
                    </h3>
                    <p className="text-white text-lg">{question.explanation}</p>
                </div>
            )}
        </div>
    );
}

