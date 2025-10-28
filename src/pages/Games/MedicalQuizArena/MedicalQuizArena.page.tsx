import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useMedicalQuizArena } from './useMedicalQuizArena.hook';
import WaitingRoom from './components/WaitingRoom.component.tsx';
import GamePlay from './components/GamePlay.component.tsx';
import Results from './components/Results.component.tsx';
import JoinCreateModal from './components/JoinCreateModal.component.tsx';
import { DEFAULT_GAME_CONFIG } from './MedicalQuizArena.constants';
import { AllRoutes } from '../../../components/Router/Router.constants';

export default function MedicalQuizArena() {
    const navigate = useNavigate();
    const {
        state,
        createRoom,
        joinRoom,
        subscribeToRoom,
        subscribeToChat,
        addChatMessage,
        setPlayerReady,
        startGame,
        submitAnswer,
        nextQuestion,
        leaveRoom,
    } = useMedicalQuizArena();

    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        if (state.gameRoom) {
            const unsubscribeRoom = subscribeToRoom(state.gameRoom.id);
            const unsubscribeChat = subscribeToChat(state.gameRoom.id);

            return () => {
                unsubscribeRoom();
                unsubscribeChat();
            };
        }
    }, [state.gameRoom?.id]);

    const handleCreateRoom = async (playerName: string) => {
        const roomCode = await createRoom(playerName, DEFAULT_GAME_CONFIG);
        if (roomCode) {
            setShowModal(false);
        }
    };

    const handleJoinRoom = async (roomCode: string, playerName: string) => {
        const success = await joinRoom(roomCode, playerName);
        if (success) {
            setShowModal(false);
        }
    };

    const handleLeaveRoom = async () => {
        if (state.gameRoom && state.currentPlayer) {
            await leaveRoom(state.gameRoom.id, state.currentPlayer.id);
            navigate(AllRoutes.GAMES);
        }
    };

    const handleSendMessage = async (message: string) => {
        if (state.gameRoom && state.currentPlayer) {
            await addChatMessage(state.gameRoom.id, {
                playerId: state.currentPlayer.id,
                playerName: state.currentPlayer.name,
                message,
                type: 'player',
            });
        }
    };

    const handlePlayerReady = async () => {
        if (state.gameRoom && state.currentPlayer) {
            await setPlayerReady(state.gameRoom.id, state.currentPlayer.id);
        }
    };

    const handleStartGame = async () => {
        if (state.gameRoom && state.isHost) {
            await startGame(state.gameRoom.id);
        }
    };

    const handleSubmitAnswer = async (answer: string) => {
        if (state.gameRoom && state.currentPlayer && state.gameRoom.currentQuestion) {
            await submitAnswer(
                state.gameRoom.id,
                state.currentPlayer.id,
                answer,
                state.gameRoom.currentQuestion.id
            );
        }
    };

    const handleNextQuestion = async () => {
        if (state.gameRoom && state.isHost) {
            await nextQuestion(state.gameRoom.id);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            {/* Modal de inicio */}
            {showModal && (
                <JoinCreateModal
                    onCreateRoom={handleCreateRoom}
                    onJoinRoom={handleJoinRoom}
                    onClose={() => navigate(AllRoutes.GAMES)}
                    loading={state.loading}
                    error={state.error}
                />
            )}

            {/* Sala de espera */}
            {!showModal && state.gameRoom?.status === 'waiting' && (
                <WaitingRoom
                    gameRoom={state.gameRoom}
                    currentPlayer={state.currentPlayer}
                    isHost={state.isHost}
                    chatMessages={state.chatMessages}
                    onSendMessage={handleSendMessage}
                    onPlayerReady={handlePlayerReady}
                    onStartGame={handleStartGame}
                    onLeaveRoom={handleLeaveRoom}
                />
            )}

            {/* Juego en progreso */}
            {!showModal && state.gameRoom?.status === 'playing' && (
                <GamePlay
                    gameRoom={state.gameRoom}
                    currentPlayer={state.currentPlayer}
                    isHost={state.isHost}
                    chatMessages={state.chatMessages}
                    onSendMessage={handleSendMessage}
                    onSubmitAnswer={handleSubmitAnswer}
                    onNextQuestion={handleNextQuestion}
                    onLeaveRoom={handleLeaveRoom}
                />
            )}

            {/* Resultados finales */}
            {!showModal && state.gameRoom?.status === 'finished' && (
                <Results
                    gameRoom={state.gameRoom}
                    currentPlayer={state.currentPlayer}
                    onPlayAgain={() => window.location.reload()}
                    onLeaveRoom={handleLeaveRoom}
                />
            )}
        </div>
    );
}

