import { useState } from 'react';
import { BuzzerGameState, BuzzerGameConfig, BuzzerTeam } from './BuzzerBattle.types';
import { BUZZER_QUESTIONS, TEAM_COLORS } from './BuzzerBattle.constants';
import GameSetup from './components/GameSetup.component';
import GameBoard from './components/GameBoard.component';
import Scoreboard from './components/Scoreboard.component';
import QuestionDisplay from './components/QuestionDisplay.component';
import WinnerScreen from './components/WinnerScreen.component';

export default function BuzzerBattle() {
    const [gameState, setGameState] = useState<BuzzerGameState>({
        teams: [],
        currentQuestion: null,
        currentQuestionIndex: 0,
        answeredQuestions: [],
        gameStarted: false,
        gameEnded: false,
        buzzerActive: false,
        teamThatBuzzed: null,
        showAnswer: false,
        round: 1,
    });

    const handleStartGame = (_config: BuzzerGameConfig, teamNames: string[]) => {
        const teams: BuzzerTeam[] = teamNames.map((name, index) => ({
            id: `team-${index}`,
            name,
            color: TEAM_COLORS[index % TEAM_COLORS.length],
            score: 0,
            buzzedFirst: false,
            correctAnswers: 0,
            wrongAnswers: 0,
        }));

        // Shuffle questions
        const shuffledQuestions = [...BUZZER_QUESTIONS].sort(() => Math.random() - 0.5);

        setGameState({
            teams,
            currentQuestion: shuffledQuestions[0],
            currentQuestionIndex: 0,
            answeredQuestions: [],
            gameStarted: true,
            gameEnded: false,
            buzzerActive: true,
            teamThatBuzzed: null,
            showAnswer: false,
            round: 1,
        });
    };

    const handleBuzz = (teamId: string) => {
        if (!gameState.buzzerActive || gameState.teamThatBuzzed) return;

        setGameState(prev => ({
            ...prev,
            buzzerActive: false,
            teamThatBuzzed: teamId,
            teams: prev.teams.map(team =>
                team.id === teamId ? { ...team, buzzedFirst: true } : team
            ),
        }));
    };

    const handleAnswer = (selectedOption: string) => {
        if (!gameState.currentQuestion || !gameState.teamThatBuzzed) return;

        const isCorrect = selectedOption === gameState.currentQuestion.answer;
        const points = gameState.currentQuestion.points;
        const updatedTeams = gameState.teams.map(team => {
            if (team.id === gameState.teamThatBuzzed) {
                return {
                    ...team,
                    score: isCorrect ? team.score + points : team.score - Math.floor(points / 2),
                    correctAnswers: isCorrect ? team.correctAnswers + 1 : team.correctAnswers,
                    wrongAnswers: !isCorrect ? team.wrongAnswers + 1 : team.wrongAnswers,
                    buzzedFirst: false,
                };
            }
            return team;
        });

        setGameState(prev => ({
            ...prev,
            teams: updatedTeams,
            showAnswer: true,
        }));
    };

    const handleNextQuestion = () => {
        const nextIndex = gameState.currentQuestionIndex + 1;
        const shuffledQuestions = [...BUZZER_QUESTIONS].sort(() => Math.random() - 0.5);

        if (nextIndex >= shuffledQuestions.length) {
            setGameState(prev => ({
                ...prev,
                gameEnded: true,
            }));
            return;
        }

        setGameState(prev => ({
            ...prev,
            currentQuestion: shuffledQuestions[nextIndex],
            currentQuestionIndex: nextIndex,
            answeredQuestions: [...prev.answeredQuestions, prev.currentQuestion?.id || ''],
            buzzerActive: true,
            teamThatBuzzed: null,
            showAnswer: false,
        }));
    };

    const handleResetGame = () => {
        setGameState({
            teams: [],
            currentQuestion: null,
            currentQuestionIndex: 0,
            answeredQuestions: [],
            gameStarted: false,
            gameEnded: false,
            buzzerActive: false,
            teamThatBuzzed: null,
            showAnswer: false,
            round: 1,
        });
    };

    if (gameState.gameEnded) {
        return <WinnerScreen teams={gameState.teams} onPlayAgain={handleResetGame} />;
    }

    if (!gameState.gameStarted) {
        return <GameSetup onStartGame={handleStartGame} />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <div className="container mx-auto px-4 py-8">
                {/* Header con Scoreboard */}
                <Scoreboard teams={gameState.teams} />

                {/* Question Display */}
                <QuestionDisplay
                    question={gameState.currentQuestion}
                    questionNumber={gameState.currentQuestionIndex + 1}
                    totalQuestions={BUZZER_QUESTIONS.length}
                    showAnswer={gameState.showAnswer}
                />

                {/* Game Board (Buzzers) */}
                <GameBoard
                    teams={gameState.teams}
                    buzzerActive={gameState.buzzerActive}
                    teamThatBuzzed={gameState.teamThatBuzzed}
                    onBuzz={handleBuzz}
                    onAnswer={handleAnswer}
                    onNextQuestion={handleNextQuestion}
                    showAnswer={gameState.showAnswer}
                    currentQuestion={gameState.currentQuestion}
                />
            </div>
        </div>
    );
}

