import { useState, useEffect } from 'react';
import {
    RapidResponseGameState,
    RapidResponseGameConfig,
    RapidResponsePlayer,
    RapidResponseQuestion,
} from './RapidResponse.types';
import {
    RAPID_RESPONSE_QUESTIONS,
    PLAYER_COLORS,
    QUESTION_TYPE_MULTIPLIER,
} from './RapidResponse.constants';
import GameSetup from './components/GameSetup.component';
import GameBoard from './components/GameBoard.component';
import Scoreboard from './components/Scoreboard.component';
import QuestionDisplay from './components/QuestionDisplay.component';
import WinnerScreen from './components/WinnerScreen.component';

export default function RapidResponse() {
    const [gameState, setGameState] = useState<RapidResponseGameState>({
        players: [],
        currentPlayer: 0,
        currentQuestion: null,
        currentQuestionIndex: 0,
        answeredQuestions: [],
        gameStarted: false,
        gameEnded: false,
        showAnswer: false,
        timeRemaining: 0,
        round: 1,
        totalRounds: 10,
        questionType: 'normal',
    });

    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    // Función para mezclar las opciones de respuesta
    const shuffleOptions = (question: RapidResponseQuestion): RapidResponseQuestion => {
        const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
        return {
            ...question,
            options: shuffledOptions,
        };
    };

    // Limpiar timer al desmontar
    useEffect(() => {
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [timer]);

    const handleStartGame = (config: RapidResponseGameConfig) => {
        const players: RapidResponsePlayer[] = [
            {
                id: 'player-1',
                name: config.player1Name || 'Jugador 1',
                color: PLAYER_COLORS[0],
                score: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                streak: 0,
                powerUps: [],
            },
            {
                id: 'player-2',
                name: config.player2Name || 'Jugador 2',
                color: PLAYER_COLORS[1],
                score: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                streak: 0,
                powerUps: [],
            },
        ];

        // Filtrar preguntas según dificultad
        let filteredQuestions = [...RAPID_RESPONSE_QUESTIONS];
        if (config.difficulty !== 'Mixto') {
            filteredQuestions = filteredQuestions.filter(
                (q) => q.difficulty === config.difficulty
            );
        }

        // Mezclar preguntas
        const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5);
        const firstQuestion = shuffleOptions(shuffledQuestions[0]);

        setGameState({
            players,
            currentPlayer: 0,
            currentQuestion: firstQuestion,
            currentQuestionIndex: 0,
            answeredQuestions: [],
            gameStarted: true,
            gameEnded: false,
            showAnswer: false,
            timeRemaining: firstQuestion.timeLimit,
            round: 1,
            totalRounds: config.totalRounds,
            questionType: firstQuestion.type,
        });

        startTimer(firstQuestion.timeLimit);
    };

    const startTimer = (seconds: number) => {
        if (timer) clearInterval(timer);

        setGameState((prev) => ({ ...prev, timeRemaining: seconds }));

        const newTimer = setInterval(() => {
            setGameState((prev) => {
                if (prev.timeRemaining <= 1) {
                    clearInterval(newTimer);
                    handleTimeout();
                    return { ...prev, timeRemaining: 0 };
                }
                return { ...prev, timeRemaining: prev.timeRemaining - 1 };
            });
        }, 1000);

        setTimer(newTimer);
    };

    const handleTimeout = () => {
        if (timer) clearInterval(timer);

        setGameState((prev) => {
            const updatedPlayers = [...prev.players];
            const currentPlayerObj = updatedPlayers[prev.currentPlayer];
            currentPlayerObj.streak = 0; // Pierde la racha

            return {
                ...prev,
                players: updatedPlayers,
                showAnswer: true,
            };
        });
    };

    const handleAnswer = (selectedAnswer: string) => {
        if (!gameState.currentQuestion || gameState.showAnswer) return;

        if (timer) clearInterval(timer);

        const isCorrect = selectedAnswer === gameState.currentQuestion.answer;

        setGameState((prev) => {
            const updatedPlayers = [...prev.players];
            const player = updatedPlayers[prev.currentPlayer];

            if (isCorrect) {
                // Calcular puntos
                let points = prev.currentQuestion!.points;
                const multiplier = QUESTION_TYPE_MULTIPLIER[prev.questionType];
                points = Math.floor(points * multiplier);

                // Bonus por racha
                if (player.streak >= 2) {
                    points += 5 * player.streak;
                }

                player.score += points;
                player.correctAnswers += 1;
                player.streak += 1;
            } else {
                player.wrongAnswers += 1;
                player.streak = 0;

                // Si es tipo "robar", el otro jugador puede intentar
                if (prev.questionType === 'robar') {
                    // Lógica para robar se maneja en el siguiente paso
                }
            }

            return {
                ...prev,
                players: updatedPlayers,
                showAnswer: true,
            };
        });
    };

    const handleNextQuestion = () => {
        const nextQuestionIndex = gameState.currentQuestionIndex + 1;
        const questions = RAPID_RESPONSE_QUESTIONS.filter((q) =>
            !gameState.answeredQuestions.includes(q.id)
        );

        // Verificar si terminó el juego
        if (gameState.round >= gameState.totalRounds) {
            handleEndGame();
            return;
        }

        if (questions.length === 0) {
            handleEndGame();
            return;
        }

        const nextQuestion = shuffleOptions(questions[Math.floor(Math.random() * questions.length)]);
        const nextPlayer = (gameState.currentPlayer + 1) % 2;

        setGameState((prev) => ({
            ...prev,
            currentQuestion: nextQuestion,
            currentQuestionIndex: nextQuestionIndex,
            currentPlayer: nextPlayer,
            answeredQuestions: [...prev.answeredQuestions, prev.currentQuestion!.id],
            showAnswer: false,
            timeRemaining: nextQuestion.timeLimit,
            round: prev.round + 1,
            questionType: nextQuestion.type,
        }));

        startTimer(nextQuestion.timeLimit);
    };

    const handleEndGame = () => {
        if (timer) clearInterval(timer);

        setGameState((prev) => ({
            ...prev,
            gameEnded: true,
            gameStarted: false,
        }));
    };

    const handleRestart = () => {
        if (timer) clearInterval(timer);

        setGameState({
            players: [],
            currentPlayer: 0,
            currentQuestion: null,
            currentQuestionIndex: 0,
            answeredQuestions: [],
            gameStarted: false,
            gameEnded: false,
            showAnswer: false,
            timeRemaining: 0,
            round: 1,
            totalRounds: 10,
            questionType: 'normal',
        });
    };

    if (!gameState.gameStarted && !gameState.gameEnded) {
        return <GameSetup onStartGame={handleStartGame} />;
    }

    if (gameState.gameEnded) {
        return (
            <WinnerScreen
                players={gameState.players}
                onRestart={handleRestart}
            />
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-red-900 p-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                        ⚡ Rapid Response ⚡
                    </h1>
                    <p className="text-xl text-gray-200">
                        Ronda {gameState.round} de {gameState.totalRounds}
                    </p>
                </div>

                <Scoreboard players={gameState.players} currentPlayer={gameState.currentPlayer} />

                <GameBoard
                    currentQuestion={gameState.currentQuestion}
                    currentPlayer={gameState.players[gameState.currentPlayer]}
                    timeRemaining={gameState.timeRemaining}
                    questionType={gameState.questionType}
                />

                {gameState.currentQuestion && (
                    <QuestionDisplay
                        question={gameState.currentQuestion}
                        onAnswer={handleAnswer}
                        showAnswer={gameState.showAnswer}
                        onNext={handleNextQuestion}
                        disabled={gameState.showAnswer}
                    />
                )}
            </div>
        </div>
    );
}

