export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'expert';

export interface TriviaQuestion {
    question: string;
    options: string[];
    correctAnswer: string;
    explanation?: string;
    category?: string;
}

export interface GameSettings {
    difficulty: DifficultyLevel;
    questionCount: number;
    timePerQuestion: number;
    selectedCategories: string[];
}

export interface GameState {
    currentQuestionIndex: number;
    score: number;
    timeRemaining: number;
    answers: UserAnswer[];
    isGameOver: boolean;
    isPaused: boolean;
}

export interface UserAnswer {
    questionIndex: number;
    selectedAnswer: string;
    isCorrect: boolean;
    timeSpent: number;
}

export interface LifelineState {
    fiftyFifty: boolean;
    skipQuestion: boolean;
    extraTime: boolean;
}

export interface DifficultyConfig {
    label: string;
    questionCount: number;
    timePerQuestion: number;
    description: string;
    color: string;
}

