import { TriviaQuestion, LifelineState } from '../Trivia.types';
import { useState, useEffect } from 'react';

interface QuestionCardProps {
    question: TriviaQuestion;
    questionNumber: number;
    totalQuestions: number;
    timeRemaining: number;
    maxTime: number;
    onAnswer: (answer: string) => void;
    lifelines: LifelineState;
    onUseLifeline: (lifeline: keyof LifelineState) => void;
    disabled: boolean;
}

export default function QuestionCard({
    question,
    questionNumber,
    totalQuestions,
    timeRemaining,
    maxTime,
    onAnswer,
    lifelines,
    onUseLifeline,
    disabled
}: QuestionCardProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
    const [isAnswering, setIsAnswering] = useState(false);

    const timePercentage = (timeRemaining / maxTime) * 100;
    const isLowTime = timePercentage < 30;

    useEffect(() => {
        setSelectedAnswer(null);
        setHiddenOptions([]);
        setIsAnswering(false);
    }, [question]);

    const handleFiftyFifty = () => {
        if (!lifelines.fiftyFifty || disabled) return;

        const incorrectOptions = question.options.filter(opt => opt !== question.correctAnswer);
        const toHide = incorrectOptions.slice(0, 2);
        setHiddenOptions(toHide);
        onUseLifeline('fiftyFifty');
    };

    const handleAnswer = (answer: string) => {
        if (disabled || isAnswering) return;
        setSelectedAnswer(answer);
        setIsAnswering(true);

        setTimeout(() => {
            onAnswer(answer);
        }, 500);
    };

    return (
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-t-2xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-200">
                        <span className="text-2xl font-bold">
                            Pregunta {questionNumber} / {totalQuestions}
                        </span>
                    </div>
                    <div className={`text-3xl font-bold ${isLowTime ? 'text-red-300 animate-pulse' : 'text-gray-600'}`}>
                        ⏱️ {timeRemaining}s
                    </div>
                </div>

                {/* Time Bar */}
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <div
                        className={`h-full transition-all duration-1000 ${
                            isLowTime ? 'bg-red-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${timePercentage}%` }}
                    />
                </div>
            </div>

            {/* Lifelines */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-center gap-4">
                <button
                    onClick={handleFiftyFifty}
                    disabled={!lifelines.fiftyFifty || disabled}
                    className={`px-6 py-3 rounded-lg font-bold text-gray-600 transition-all ${
                        lifelines.fiftyFifty && !disabled
                            ? 'bg-yellow-500 hover:bg-yellow-600 transform hover:scale-105'
                            : 'bg-gray-500 opacity-50 cursor-not-allowed'
                    }`}
                >
                    50/50
                </button>
                <button
                    onClick={() => onUseLifeline('skipQuestion')}
                    disabled={!lifelines.skipQuestion || disabled}
                    className={`px-6 py-3 rounded-lg font-bold text-gray-600 transition-all ${
                        lifelines.skipQuestion && !disabled
                            ? 'bg-green-500 hover:bg-green-600 transform hover:scale-105'
                            : 'bg-gray-500 opacity-50 cursor-not-allowed'
                    }`}
                >
                    ⏭️ Saltar
                </button>
                <button
                    onClick={() => onUseLifeline('extraTime')}
                    disabled={!lifelines.extraTime || disabled}
                    className={`px-6 py-3 rounded-lg font-bold text-gray-600 transition-all ${
                        lifelines.extraTime && !disabled
                            ? 'bg-orange-500 hover:bg-orange-600 transform hover:scale-105'
                            : 'bg-gray-500 opacity-50 cursor-not-allowed'
                    }`}
                >
                    ⏰ +15s
                </button>
            </div>

            {/* Question */}
            <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 shadow-xl">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-600 mb-8 text-center leading-relaxed">
                    {question.question}
                </h2>

                {/* Options */}
                <div className="grid gap-4">
                    {question.options.map((option, index) => {
                        const isHidden = hiddenOptions.includes(option);
                        const isSelected = selectedAnswer === option;
                        const letter = String.fromCharCode(65 + index); // A, B, C, D

                        return (
                            <button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                disabled={disabled || isHidden || isAnswering}
                                className={`p-6 rounded-xl text-left transition-all transform ${
                                    isHidden
                                        ? 'opacity-30 cursor-not-allowed'
                                        : isSelected
                                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-105 shadow-2xl ring-4 ring-yellow-400'
                                        : 'bg-white bg-opacity-20 hover:bg-opacity-30 hover:scale-102'
                                } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                                        isSelected ? 'bg-yellow-400 text-purple-900' : 'bg-purple-600 text-gray-600'
                                    }`}>
                                        {letter}
                                    </div>
                                    <span className="text-lg md:text-xl text-gray-600 font-medium flex-1">
                                        {option}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

