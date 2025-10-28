import {useState} from "react";
import {GameState, JeopardyQuestion, Team, GameConfig} from "./Jeopardy.types";
import GameSetup from "./components/GameSetup.component";
import GameBoard from "./components/GameBoard.component";
import Scoreboard from "./components/Scoreboard.component";
import QuestionModal from "./components/QuestionModal.component";

export default function Jeopardy() {
    const [gameState, setGameState] = useState<GameState>({
        teams: [],
        currentTeamIndex: 0,
        selectedQuestion: null,
        answeredQuestions: [],
        gameStarted: false
    });

    const [showWinner, setShowWinner] = useState(false);

    const handleStartGame = (_config: GameConfig, teamsData: Array<{ name: string; players: string[] }>) => {
        const teams: Team[] = teamsData.map((team, index) => ({
            id: `team-${index}`,
            name: team.name,
            players: team.players,
            score: 0
        }));

        setGameState({
            teams,
            currentTeamIndex: 0,
            selectedQuestion: null,
            answeredQuestions: [],
            gameStarted: true
        });
    };

    const handleQuestionSelect = (question: JeopardyQuestion) => {
        setGameState(prev => ({
            ...prev,
            selectedQuestion: question
        }));
    };

    const handleAnswer = (isCorrect: boolean) => {
        if (!gameState.selectedQuestion) return;

        const points = gameState.selectedQuestion.points;
        const updatedTeams = [...gameState.teams];

        if (isCorrect) {
            updatedTeams[gameState.currentTeamIndex].score += points;
        } else {
            updatedTeams[gameState.currentTeamIndex].score -= points;
        }

        const newAnsweredQuestions = [...gameState.answeredQuestions, gameState.selectedQuestion.id];

        // Check if game is over (all questions answered)
        const totalQuestions = 30; // 6 categories × 5 point values
        if (newAnsweredQuestions.length >= totalQuestions) {
            setGameState(prev => ({
                ...prev,
                teams: updatedTeams,
                answeredQuestions: newAnsweredQuestions,
                selectedQuestion: null
            }));
            setShowWinner(true);
            return;
        }

        setGameState(prev => ({
            ...prev,
            teams: updatedTeams,
            currentTeamIndex: (prev.currentTeamIndex + 1) % prev.teams.length,
            answeredQuestions: newAnsweredQuestions,
            selectedQuestion: null
        }));
    };

    const handleCloseModal = () => {
        setGameState(prev => ({
            ...prev,
            selectedQuestion: null
        }));
    };

    const handleRestartGame = () => {
        setGameState({
            teams: [],
            currentTeamIndex: 0,
            selectedQuestion: null,
            answeredQuestions: [],
            gameStarted: false
        });
        setShowWinner(false);
    };

    if (!gameState.gameStarted) {
        return <GameSetup onStartGame={handleStartGame}/>;
    }

    if (showWinner) {
        const sortedTeams = [...gameState.teams].sort((a, b) => b.score - a.score);
        const winner = sortedTeams[0];

        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full">
                    <h1 className="text-5xl font-bold text-center mb-8 text-yellow-500">
                        🏆 ¡JUEGO TERMINADO! 🏆
                    </h1>

                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl p-6 mb-6">
                        <h2 className="text-3xl font-bold text-center text-white mb-2">
                            Ganador: {winner.name}
                        </h2>
                        <p className="text-4xl font-bold text-center text-white">
                            ${winner.score}
                        </p>
                    </div>

                    <div className="space-y-3 mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Tabla de Posiciones:</h3>
                        {sortedTeams.map((team, index) => (
                            <div
                                key={team.id}
                                className={`
                                    p-4 rounded-lg flex justify-between items-center
                                    ${index === 0 ? 'bg-yellow-100 border-2 border-yellow-500' : 'bg-gray-100'}
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-2xl font-bold text-gray-600">
                                        {index + 1}.
                                    </span>
                                    <span className="text-xl font-semibold">
                                        {team.name}
                                    </span>
                                </div>
                                <span className="text-2xl font-bold text-blue-600">
                                    ${team.score}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleRestartGame}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition duration-200 text-xl"
                    >
                        Jugar de Nuevo
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Scoreboard teams={gameState.teams} currentTeamIndex={gameState.currentTeamIndex}/>
            <GameBoard
                answeredQuestions={gameState.answeredQuestions}
                onQuestionSelect={handleQuestionSelect}
            />

            {gameState.selectedQuestion && (
                <QuestionModal
                    question={gameState.selectedQuestion}
                    currentTeam={gameState.teams[gameState.currentTeamIndex]}
                    onAnswer={handleAnswer}
                    onClose={handleCloseModal}
                />
            )}

            <div className="fixed bottom-4 right-4">
                <button
                    onClick={handleRestartGame}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-200"
                >
                    Reiniciar Juego
                </button>
            </div>
        </div>
    );
}

