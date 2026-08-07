export type DrugCategory = 'vitales' | 'analgesia' | 'cardiovascular' | 'metabolicos' | 'airway';
export type DoseDifficulty = 'easy' | 'medium' | 'hard';

export interface DosageQuestion {
  id: string;
  drug: string;
  drugEmoji: string;
  category: DrugCategory;
  difficulty: DoseDifficulty;
  scenario: string;
  patientInfo?: {
    age?: number;
    weight?: number;
    condition: string;
  };
  formula?: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  reference: string;
  timeLimit: number; // seconds
}

export interface RoundResult {
  question: DosageQuestion;
  selectedAnswer: string | null;
  isCorrect: boolean;
  timeUsed: number;
  pointsEarned: number;
}

export interface GameSession {
  phase: 'setup' | 'playing' | 'result';
  category: DrugCategory | 'all';
  difficulty: DoseDifficulty;
  questions: DosageQuestion[];
  currentIndex: number;
  timeRemaining: number;
  results: RoundResult[];
  score: number;
  streak: number;
  maxStreak: number;
  startTime: number;
}
