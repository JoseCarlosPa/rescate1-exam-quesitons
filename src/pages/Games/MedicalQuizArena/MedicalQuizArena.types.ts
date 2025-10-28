export interface Player {
    id: string;
    name: string;
    avatar: string;
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
    streak: number;
    isReady: boolean;
    lastAnswerTime?: number;
    color: string;
}

export interface Question {
    id: string;
    category: string;
    difficulty: 'Fácil' | 'Media' | 'Difícil';
    question: string;
    answer: string;
    options: string[];
    explanation?: string;
    points: number;
    timeLimit: number; // seconds
}

export interface PlayerAnswer {
    playerId: string;
    answer: string;
    timestamp: number;
    isCorrect: boolean;
    pointsEarned: number;
}

export interface GameRoom {
    id: string;
    code: string;
    hostId: string;
    players: Player[];
    maxPlayers: number;
    status: 'waiting' | 'playing' | 'finished';
    currentQuestionIndex: number;
    totalQuestions: number;
    currentQuestion: Question | null;
    answers: PlayerAnswer[];
    createdAt: number;
    startedAt?: number;
    finishedAt?: number;
}

export interface ChatMessage {
    id: string;
    roomId: string;
    playerId: string;
    playerName: string;
    message: string;
    timestamp: number;
    type: 'player' | 'system';
}

export interface GameConfig {
    numberOfQuestions: number;
    difficulty: 'mixed' | 'Fácil' | 'Media' | 'Difícil';
    categories: string[];
    maxPlayers: number;
}

export interface QuizArenaState {
    gameRoom: GameRoom | null;
    currentPlayer: Player | null;
    chatMessages: ChatMessage[];
    isHost: boolean;
    loading: boolean;
    error: string | null;
}

