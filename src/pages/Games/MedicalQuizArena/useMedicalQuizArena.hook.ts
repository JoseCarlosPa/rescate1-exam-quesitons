import { useState } from 'react';
import {
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
    updateDoc,
    onSnapshot,
    query,
    where,
    orderBy,
    limit,
    addDoc,
    serverTimestamp,
    deleteDoc,
} from 'firebase/firestore';
import { db } from '../../../firebase/firebaseConfig';
import type {
    GameRoom,
    Player,
    PlayerAnswer,
    ChatMessage,
    GameConfig,
    QuizArenaState,
} from './MedicalQuizArena.types';
import {
    QUIZ_ARENA_QUESTIONS,
    PLAYER_COLORS,
    PLAYER_AVATARS,
    POINTS_CONFIG,
} from './MedicalQuizArena.constants';

export function useMedicalQuizArena() {
    const [state, setState] = useState<QuizArenaState>({
        gameRoom: null,
        currentPlayer: null,
        chatMessages: [],
        isHost: false,
        loading: false,
        error: null,
    });

    // Generar código de sala único
    const generateRoomCode = (): string => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    };

    // Crear una nueva sala de juego
    const createRoom = async (
        playerName: string,
        config: GameConfig
    ): Promise<string | null> => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const roomCode = generateRoomCode();
            const roomId = `room_${Date.now()}`;

            const player: Player = {
                id: `player_${Date.now()}`,
                name: playerName,
                avatar: PLAYER_AVATARS[0],
                score: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                streak: 0,
                isReady: false,
                color: PLAYER_COLORS[0],
            };

            const gameRoom: GameRoom = {
                id: roomId,
                code: roomCode,
                hostId: player.id,
                players: [player],
                maxPlayers: config.maxPlayers,
                status: 'waiting',
                currentQuestionIndex: 0,
                totalQuestions: config.numberOfQuestions,
                currentQuestion: null,
                answers: [],
                createdAt: Date.now(),
            };

            await setDoc(doc(db, 'quizArenaRooms', roomId), {
                ...gameRoom,
                createdAt: serverTimestamp(),
            });

            setState(prev => ({
                ...prev,
                gameRoom,
                currentPlayer: player,
                isHost: true,
                loading: false,
            }));

            return roomCode;
        } catch (error) {
            console.error('Error creating room:', error);
            setState(prev => ({
                ...prev,
                loading: false,
                error: 'Error al crear la sala',
            }));
            return null;
        }
    };

    // Unirse a una sala existente
    const joinRoom = async (
        roomCode: string,
        playerName: string
    ): Promise<boolean> => {
        setState(prev => ({ ...prev, loading: true, error: null }));

        try {
            const roomsRef = collection(db, 'quizArenaRooms');
            const q = query(
                roomsRef,
                where('code', '==', roomCode.toUpperCase()),
                where('status', '==', 'waiting'),
                limit(1)
            );

            const snapshot = await getDocs(q);

            if (snapshot.empty) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: 'Sala no encontrada o juego ya iniciado',
                }));
                return false;
            }

            const roomDoc = snapshot.docs[0];
            const roomData = roomDoc.data() as GameRoom;

            if (roomData.players.length >= roomData.maxPlayers) {
                setState(prev => ({
                    ...prev,
                    loading: false,
                    error: 'La sala está llena',
                }));
                return false;
            }

            const player: Player = {
                id: `player_${Date.now()}`,
                name: playerName,
                avatar: PLAYER_AVATARS[roomData.players.length % PLAYER_AVATARS.length],
                score: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                streak: 0,
                isReady: false,
                color: PLAYER_COLORS[roomData.players.length % PLAYER_COLORS.length],
            };

            const updatedPlayers = [...roomData.players, player];

            await updateDoc(doc(db, 'quizArenaRooms', roomDoc.id), {
                players: updatedPlayers,
            });

            // Enviar mensaje de sistema
            await addChatMessage(roomDoc.id, {
                playerId: 'system',
                playerName: 'Sistema',
                message: `${playerName} se ha unido a la partida`,
                type: 'system',
            });

            setState(prev => ({
                ...prev,
                currentPlayer: player,
                isHost: false,
                loading: false,
            }));

            return true;
        } catch (error) {
            console.error('Error joining room:', error);
            setState(prev => ({
                ...prev,
                loading: false,
                error: 'Error al unirse a la sala',
            }));
            return false;
        }
    };

    // Escuchar cambios en la sala
    const subscribeToRoom = (roomId: string) => {
        const unsubscribe = onSnapshot(
            doc(db, 'quizArenaRooms', roomId),
            (doc) => {
                if (doc.exists()) {
                    const roomData = doc.data() as GameRoom;
                    setState(prev => ({
                        ...prev,
                        gameRoom: roomData,
                    }));
                }
            },
            (error) => {
                console.error('Error subscribing to room:', error);
            }
        );

        return unsubscribe;
    };

    // Escuchar mensajes de chat
    const subscribeToChat = (roomId: string) => {
        const messagesRef = collection(db, 'quizArenaRooms', roomId, 'messages');
        const q = query(messagesRef, orderBy('timestamp', 'asc'), limit(50));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messages: ChatMessage[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            } as ChatMessage));

            setState(prev => ({
                ...prev,
                chatMessages: messages,
            }));
        });

        return unsubscribe;
    };

    // Enviar mensaje de chat
    const addChatMessage = async (
        roomId: string,
        message: Partial<ChatMessage>
    ) => {
        try {
            const messagesRef = collection(db, 'quizArenaRooms', roomId, 'messages');
            await addDoc(messagesRef, {
                ...message,
                roomId,
                timestamp: serverTimestamp(),
            });
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    // Marcar jugador como listo
    const setPlayerReady = async (roomId: string, playerId: string) => {
        try {
            const roomRef = doc(db, 'quizArenaRooms', roomId);
            const roomDoc = await getDoc(roomRef);

            if (roomDoc.exists()) {
                const roomData = roomDoc.data() as GameRoom;
                const updatedPlayers = roomData.players.map(p =>
                    p.id === playerId ? { ...p, isReady: true } : p
                );

                await updateDoc(roomRef, {
                    players: updatedPlayers,
                });
            }
        } catch (error) {
            console.error('Error setting player ready:', error);
        }
    };

    // Iniciar el juego
    const startGame = async (roomId: string) => {
        try {
            const roomRef = doc(db, 'quizArenaRooms', roomId);
            const roomDoc = await getDoc(roomRef);

            if (roomDoc.exists()) {
                const roomData = roomDoc.data() as GameRoom;

                // Seleccionar preguntas aleatorias
                const shuffledQuestions = [...QUIZ_ARENA_QUESTIONS]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, roomData.totalQuestions);

                await updateDoc(roomRef, {
                    status: 'playing',
                    startedAt: serverTimestamp(),
                    currentQuestion: shuffledQuestions[0],
                    currentQuestionIndex: 0,
                });

                await addChatMessage(roomId, {
                    playerId: 'system',
                    playerName: 'Sistema',
                    message: '¡El juego ha comenzado! 🎮',
                    type: 'system',
                });
            }
        } catch (error) {
            console.error('Error starting game:', error);
        }
    };

    // Enviar respuesta
    const submitAnswer = async (
        roomId: string,
        playerId: string,
        answer: string,
        questionId: string
    ) => {
        try {
            const roomRef = doc(db, 'quizArenaRooms', roomId);
            const roomDoc = await getDoc(roomRef);

            if (roomDoc.exists()) {
                const roomData = roomDoc.data() as GameRoom;
                const currentQuestion = roomData.currentQuestion;

                if (!currentQuestion || currentQuestion.id !== questionId) return;

                const isCorrect = answer === currentQuestion.answer;
                const responseTime = Date.now() - (roomData.startedAt || 0);

                // Calcular puntos con bonus por velocidad
                let pointsEarned = 0;
                if (isCorrect) {
                    pointsEarned = currentQuestion.points;

                    // Bonus por velocidad (basado en tiempo de respuesta)
                    if (responseTime < 5000) {
                        pointsEarned += POINTS_CONFIG.SPEED_BONUS.FAST;
                    } else if (responseTime < 10000) {
                        pointsEarned += POINTS_CONFIG.SPEED_BONUS.MEDIUM;
                    }
                } else {
                    pointsEarned = POINTS_CONFIG.PENALTY_WRONG;
                }

                const playerAnswer: PlayerAnswer = {
                    playerId,
                    answer,
                    timestamp: Date.now(),
                    isCorrect,
                    pointsEarned,
                };

                // Actualizar respuestas y puntuación del jugador
                const updatedAnswers = [...roomData.answers, playerAnswer];
                const updatedPlayers = roomData.players.map(p => {
                    if (p.id === playerId) {
                        const newStreak = isCorrect ? p.streak + 1 : 0;
                        let finalPoints = p.score + pointsEarned;

                        // Aplicar multiplicador de racha
                        if (newStreak >= 7) {
                            finalPoints += Math.floor(pointsEarned * POINTS_CONFIG.STREAK_MULTIPLIER[7]);
                        } else if (newStreak >= 5) {
                            finalPoints += Math.floor(pointsEarned * POINTS_CONFIG.STREAK_MULTIPLIER[5]);
                        } else if (newStreak >= 3) {
                            finalPoints += Math.floor(pointsEarned * POINTS_CONFIG.STREAK_MULTIPLIER[3]);
                        }

                        return {
                            ...p,
                            score: finalPoints,
                            streak: newStreak,
                            correctAnswers: isCorrect ? p.correctAnswers + 1 : p.correctAnswers,
                            wrongAnswers: !isCorrect ? p.wrongAnswers + 1 : p.wrongAnswers,
                            lastAnswerTime: Date.now(),
                        };
                    }
                    return p;
                });

                await updateDoc(roomRef, {
                    answers: updatedAnswers,
                    players: updatedPlayers,
                });
            }
        } catch (error) {
            console.error('Error submitting answer:', error);
        }
    };

    // Siguiente pregunta
    const nextQuestion = async (roomId: string) => {
        try {
            const roomRef = doc(db, 'quizArenaRooms', roomId);
            const roomDoc = await getDoc(roomRef);

            if (roomDoc.exists()) {
                const roomData = roomDoc.data() as GameRoom;
                const nextIndex = roomData.currentQuestionIndex + 1;

                if (nextIndex >= roomData.totalQuestions) {
                    // Fin del juego
                    await updateDoc(roomRef, {
                        status: 'finished',
                        finishedAt: serverTimestamp(),
                        currentQuestion: null,
                    });

                    await addChatMessage(roomId, {
                        playerId: 'system',
                        playerName: 'Sistema',
                        message: '¡Juego terminado! 🏆',
                        type: 'system',
                    });
                } else {
                    // Obtener preguntas del arreglo
                    const shuffledQuestions = [...QUIZ_ARENA_QUESTIONS]
                        .sort(() => Math.random() - 0.5);

                    await updateDoc(roomRef, {
                        currentQuestionIndex: nextIndex,
                        currentQuestion: shuffledQuestions[nextIndex],
                        answers: [],
                    });
                }
            }
        } catch (error) {
            console.error('Error moving to next question:', error);
        }
    };

    // Salir de la sala
    const leaveRoom = async (roomId: string, playerId: string) => {
        try {
            const roomRef = doc(db, 'quizArenaRooms', roomId);
            const roomDoc = await getDoc(roomRef);

            if (roomDoc.exists()) {
                const roomData = roomDoc.data() as GameRoom;
                const player = roomData.players.find(p => p.id === playerId);

                if (roomData.hostId === playerId) {
                    // Si es el host, eliminar la sala
                    await deleteDoc(roomRef);
                } else {
                    // Remover jugador
                    const updatedPlayers = roomData.players.filter(p => p.id !== playerId);
                    await updateDoc(roomRef, {
                        players: updatedPlayers,
                    });

                    if (player) {
                        await addChatMessage(roomId, {
                            playerId: 'system',
                            playerName: 'Sistema',
                            message: `${player.name} ha abandonado la partida`,
                            type: 'system',
                        });
                    }
                }
            }

            setState(prev => ({
                ...prev,
                gameRoom: null,
                currentPlayer: null,
                isHost: false,
            }));
        } catch (error) {
            console.error('Error leaving room:', error);
        }
    };

    return {
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
    };
}

