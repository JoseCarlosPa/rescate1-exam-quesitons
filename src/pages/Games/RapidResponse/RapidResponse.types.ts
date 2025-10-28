export interface RapidResponseQuestion {
    id: string;
    category: string;
    difficulty: 'Fácil' | 'Media' | 'Difícil';
    question: string;
    answer: string;
    options: string[];
    explanation?: string;
    points: number;
    type: 'normal' | 'rapida' | 'doble' | 'robar';
    timeLimit: number;
}

export interface RapidResponsePlayer {
    id: string;
    name: string;
    color: string;
    score: number;
    correctAnswers: number;
    wrongAnswers: number;
    streak: number;
    powerUps: PlayerPowerUp[];
}

export interface PlayerPowerUp {
    id: string;
    name: string;
    description: string;
    used: boolean;
}

export interface RapidResponseGameState {
    players: RapidResponsePlayer[];
    currentPlayer: number;
    currentQuestion: RapidResponseQuestion | null;
    currentQuestionIndex: number;
    answeredQuestions: string[];
    gameStarted: boolean;
    gameEnded: boolean;
    showAnswer: boolean;
    timeRemaining: number;
    round: number;
    totalRounds: number;
    questionType: 'normal' | 'rapida' | 'doble' | 'robar';
}

export interface RapidResponseGameConfig {
    player1Name: string;
    player2Name: string;
    totalRounds: number;
    difficulty: 'Fácil' | 'Media' | 'Difícil' | 'Mixto';
}

export interface RoundResult {
    round: number;
    player1Score: number;
    player2Score: number;
    winner: string;
}

