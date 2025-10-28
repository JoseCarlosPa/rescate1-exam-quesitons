import { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router';
import { DifficultyLevel, TriviaQuestion, UserAnswer, LifelineState } from './Trivia.types';
import { DIFFICULTY_CONFIGS, INITIAL_LIFELINES, POINTS_CONFIG } from './Trivia.constants';
import { allQuestions } from '../../EMT/allQuestionts';
import GameSetup from './components/GameSetup.component';
import QuestionCard from './components/QuestionCard.component';
import { AllRoutes } from '../../../components/Router/Router.constants';

export default function Trivia() {
    const [gameStarted, setGameStarted] = useState(false);
    const [difficulty, setDifficulty] = useState<DifficultyLevel>('medium');
    const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [answers, setAnswers] = useState<UserAnswer[]>([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [lifelines, setLifelines] = useState<LifelineState>(INITIAL_LIFELINES);
    const [isPaused, setIsPaused] = useState(false);
    const [streak, setStreak] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
    const [questionStartTime, setQuestionStartTime] = useState(0);

    // Timer
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameStarted && !isGameOver && !isPaused && timeRemaining > 0) {
            interval = setInterval(() => {
                setTimeRemaining(prev => {
                    if (prev <= 1) {
                        handleTimeUp();
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameStarted, isGameOver, isPaused, timeRemaining]);

    const convertToTriviaQuestion = (q: any): TriviaQuestion => ({
        question: q.question,
        options: q.options.map((opt: any) => opt.text),
        correctAnswer: q.options.find((opt: any) => opt.letter === q.correctAnswer)?.text || '',
        explanation: q.explanation,
        category: 'general'
    });

    const initializeGame = useCallback((selectedDifficulty: DifficultyLevel) => {
        const config = DIFFICULTY_CONFIGS[selectedDifficulty];

        // Convert and shuffle questions
        const triviaQuestions = allQuestions
            .map(convertToTriviaQuestion)
            .sort(() => Math.random() - 0.5)
            .slice(0, config.questionCount);

        setQuestions(triviaQuestions);
        setDifficulty(selectedDifficulty);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeRemaining(config.timePerQuestion);
        setAnswers([]);
        setIsGameOver(false);
        setLifelines(INITIAL_LIFELINES);
        setStreak(0);
        setShowFeedback(false);
        setQuestionStartTime(Date.now());
        setGameStarted(true);
    }, []);

    const handleTimeUp = () => {
        const timeSpent = DIFFICULTY_CONFIGS[difficulty].timePerQuestion;
        const newAnswer: UserAnswer = {
            questionIndex: currentQuestionIndex,
            selectedAnswer: '',
            isCorrect: false,
            timeSpent
        };

        setAnswers(prev => [...prev, newAnswer]);
        setStreak(0);
        setLastAnswerCorrect(false);
        setShowFeedback(true);

        setTimeout(() => {
            moveToNextQuestion();
        }, 2000);
    };

    const handleAnswer = (answer: string) => {
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = answer === currentQuestion.correctAnswer;
        const timeSpent = Math.floor((Date.now() - questionStartTime) / 1000);
        const timeLeft = timeRemaining;

        const newAnswer: UserAnswer = {
            questionIndex: currentQuestionIndex,
            selectedAnswer: answer,
            isCorrect,
            timeSpent
        };

        setAnswers(prev => [...prev, newAnswer]);

        if (isCorrect) {
            let points = POINTS_CONFIG.correct;
            points += timeLeft * POINTS_CONFIG.timeBonus;

            const newStreak = streak + 1;
            setStreak(newStreak);

            if (newStreak >= 3) {
                points += POINTS_CONFIG.streakBonus;
            }

            setScore(prev => prev + points);
            setLastAnswerCorrect(true);
        } else {
            setStreak(0);
            setLastAnswerCorrect(false);
        }

        setShowFeedback(true);

        setTimeout(() => {
            moveToNextQuestion();
        }, 2500);
    };

    const moveToNextQuestion = () => {
        setShowFeedback(false);

        if (currentQuestionIndex + 1 >= questions.length) {
            setIsGameOver(true);
        } else {
            setCurrentQuestionIndex(prev => prev + 1);
            setTimeRemaining(DIFFICULTY_CONFIGS[difficulty].timePerQuestion);
            setQuestionStartTime(Date.now());
        }
    };

    const handleUseLifeline = (lifeline: keyof LifelineState) => {
        if (!lifelines[lifeline]) return;

        setLifelines(prev => ({ ...prev, [lifeline]: false }));

        if (lifeline === 'skipQuestion') {
            moveToNextQuestion();
        } else if (lifeline === 'extraTime') {
            setTimeRemaining(prev => prev + 15);
        }
    };

    const calculateFinalStats = () => {
        const correctAnswers = answers.filter(a => a.isCorrect).length;
        const totalQuestions = answers.length;
        const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
        const avgTimePerQuestion = totalQuestions > 0
            ? Math.round(answers.reduce((sum, a) => sum + a.timeSpent, 0) / totalQuestions)
            : 0;

        return {
            correctAnswers,
            totalQuestions,
            accuracy,
            avgTimePerQuestion,
            finalScore: score
        };
    };

    if (!gameStarted) {
        return <GameSetup onStartGame={initializeGame} />;
    }

    if (isGameOver) {
        const stats = calculateFinalStats();
        const maxScore = questions.length * (POINTS_CONFIG.correct + (DIFFICULTY_CONFIGS[difficulty].timePerQuestion * POINTS_CONFIG.timeBonus));
        const scorePercentage = Math.round((stats.finalScore / maxScore) * 100);

        return (
            <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
                <div className="max-w-3xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
                    <div className="text-center mb-8">
                        <div className="text-6xl mb-4">
                            {stats.accuracy >= 80 ? '🏆' : stats.accuracy >= 60 ? '🎉' : '💪'}
                        </div>
                        <h1 className="text-5xl font-bold text-white mb-3">
                            ¡Juego Terminado!
                        </h1>
                        <p className="text-2xl text-yellow-300 font-bold">
                            Puntuación Final: {stats.finalScore.toLocaleString()}
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-white mb-2">
                                {stats.correctAnswers} / {stats.totalQuestions}
                            </div>
                            <div className="text-gray-200">Respuestas Correctas</div>
                        </div>

                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-white mb-2">
                                {stats.accuracy}%
                            </div>
                            <div className="text-gray-200">Precisión</div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-white mb-2">
                                {stats.avgTimePerQuestion}s
                            </div>
                            <div className="text-gray-200">Tiempo Promedio</div>
                        </div>

                        <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl p-6 text-center">
                            <div className="text-4xl font-bold text-white mb-2">
                                {scorePercentage}%
                            </div>
                            <div className="text-gray-200">Puntuación</div>
                        </div>
                    </div>

                    {/* Performance Message */}
                    <div className="bg-blue-500 bg-opacity-20 rounded-xl p-6 mb-8 text-center">
                        <p className="text-xl text-white">
                            {stats.accuracy >= 90 && '¡Excelente! Dominas el tema a la perfección! 🌟'}
                            {stats.accuracy >= 80 && stats.accuracy < 90 && '¡Muy bien! Tienes un conocimiento sólido! 👏'}
                            {stats.accuracy >= 60 && stats.accuracy < 80 && '¡Buen trabajo! Sigue practicando! 💪'}
                            {stats.accuracy < 60 && '¡No te rindas! La práctica hace al maestro! 📚'}
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => {
                                setGameStarted(false);
                                setIsGameOver(false);
                            }}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
                        >
                            🔄 Jugar de Nuevo
                        </button>

                        <NavLink
                            to={AllRoutes.GAMES}
                            className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 text-center"
                        >
                            ← Volver a Juegos
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 py-8">
            {/* Header */}
            <div className="max-w-4xl mx-auto mb-6">
                <div className="flex justify-between items-center bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4">
                    <div className="text-white">
                        <div className="text-sm opacity-75">Puntuación</div>
                        <div className="text-3xl font-bold">{score.toLocaleString()}</div>
                    </div>

                    {streak >= 3 && (
                        <div className="text-white text-center animate-pulse">
                            <div className="text-sm">🔥 Racha</div>
                            <div className="text-2xl font-bold">{streak}</div>
                        </div>
                    )}

                    <button
                        onClick={() => setIsPaused(!isPaused)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-lg transition-all"
                    >
                        {isPaused ? '▶️ Continuar' : '⏸️ Pausar'}
                    </button>
                </div>
            </div>

            {/* Pause Overlay */}
            {isPaused && (
                <div className="fixed inset-0 bg-black/90 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 max-w-md text-center">
                        <h2 className="text-4xl font-bold text-gray-600 mb-6">⏸️ Juego Pausado</h2>
                        <div className="space-y-4">
                            <button
                                onClick={() => setIsPaused(false)}
                                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                            >
                                ▶️ Continuar
                            </button>
                            <NavLink
                                to={AllRoutes.GAMES}
                                className="block w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
                            >
                                🚪 Salir
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}

            {/* Feedback Overlay */}
            {showFeedback && (
                <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-40 pointer-events-none">
                    <div className={`${
                        lastAnswerCorrect 
                            ? 'bg-green-500' 
                            : 'bg-red-500'
                    } bg-opacity-90 rounded-3xl p-12 text-center animate-pulse`}>
                        <div className="text-8xl mb-4">
                            {lastAnswerCorrect ? '✅' : '❌'}
                        </div>
                        <div className="text-4xl font-bold text-white">
                            {lastAnswerCorrect ? '¡Correcto!' : '¡Incorrecto!'}
                        </div>
                        {currentQuestion.explanation && !lastAnswerCorrect && (
                            <div className="text-white mt-4 text-lg max-w-md">
                                {currentQuestion.explanation}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Question Card */}
            <QuestionCard
                question={currentQuestion}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={questions.length}
                timeRemaining={timeRemaining}
                maxTime={DIFFICULTY_CONFIGS[difficulty].timePerQuestion}
                onAnswer={handleAnswer}
                lifelines={lifelines}
                onUseLifeline={handleUseLifeline}
                disabled={showFeedback || isPaused}
            />
        </div>
    );
}