import {CATEGORIES, JEOPARDY_QUESTIONS, POINT_VALUES} from "../Jeopardy.constants";
import {JeopardyQuestion} from "../Jeopardy.types";

interface GameBoardProps {
    answeredQuestions: string[];
    onQuestionSelect: (question: JeopardyQuestion) => void;
}

export default function GameBoard({answeredQuestions, onQuestionSelect}: GameBoardProps) {
    const getQuestionsByCategory = (category: string, points: number) => {
        return JEOPARDY_QUESTIONS.find(q => q.category === category && q.points === points);
    };

    return (
        <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 p-4 min-h-screen">
            <h1 className="text-5xl font-bold text-center text-yellow-400 mb-8 font-serif">
                JEOPARDY MÉDICO
            </h1>

            <div className="max-w-7xl mx-auto overflow-x-auto">
                <div className="grid grid-cols-6 gap-2 min-w-max">
                    {/* Headers */}
                    {CATEGORIES.map((category, index) => (
                        <div
                            key={index}
                            className="bg-blue-600 text-white p-4 text-center font-bold text-lg rounded-t-lg border-4 border-blue-400"
                        >
                            {category}
                        </div>
                    ))}

                    {/* Question Cells */}
                    {POINT_VALUES.map((points) => (
                        CATEGORIES.map((category) => {
                            const question = getQuestionsByCategory(category, points);
                            const isAnswered = question && answeredQuestions.includes(question.id);

                            return (
                                <button
                                    key={`${category}-${points}`}
                                    onClick={() => question && !isAnswered && onQuestionSelect(question)}
                                    disabled={isAnswered || !question}
                                    className={`
                                        p-8 text-4xl font-bold rounded-lg border-4 transition-all duration-200
                                        ${isAnswered
                                        ? 'bg-gray-800 text-gray-600 border-gray-700 cursor-not-allowed'
                                        : 'bg-blue-700 text-yellow-400 border-yellow-500 hover:bg-blue-600 hover:scale-105 cursor-pointer shadow-lg hover:shadow-2xl'
                                    }
                                    `}
                                >
                                    {isAnswered ? '✓' : `$${points}`}
                                </button>
                            );
                        })
                    ))}
                </div>
            </div>
        </div>
    );
}

