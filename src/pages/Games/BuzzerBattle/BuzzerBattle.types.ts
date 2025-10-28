export interface BuzzerQuestion {
    id: string;
    category: string;
    difficulty: 'Fácil' | 'Media' | 'Difícil';
    question: string;
    answer: string;
    options: string[];
    explanation?: string;
    points: number;
}

export interface BuzzerTeam {
    id: string;
    name: string;
    color: string;
    score: number;
    buzzedFirst: boolean;
    correctAnswers: number;
    wrongAnswers: number;
}

export interface BuzzerGameState {
    teams: BuzzerTeam[];
    currentQuestion: BuzzerQuestion | null;
    currentQuestionIndex: number;
    answeredQuestions: string[];
    gameStarted: boolean;
    gameEnded: boolean;
    buzzerActive: boolean;
    teamThatBuzzed: string | null;
    showAnswer: boolean;
    round: number;
}

export interface BuzzerGameConfig {
    numberOfTeams: number;
    questionsPerRound: number;
    timeLimit: number; // seconds per question
}

export interface BuzzerRoundResult {
    round: number;
    winner: BuzzerTeam;
    scores: { teamId: string; score: number }[];
}

