export type FlashcardDifficulty = 'easy' | 'medium' | 'hard';
export type FlashcardCategory = 'signos-vitales' | 'farmacologia' | 'nemotecnias' | 'evaluacion' | 'anatomia' | 'protocolos';
export type StudyMode = 'study' | 'review' | 'random';

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  hint?: string;
  category: FlashcardCategory;
  difficulty: FlashcardDifficulty;
  emoji?: string;
}

export interface FlashcardSession {
  mode: StudyMode;
  category: FlashcardCategory | 'all';
  deck: Flashcard[];
  currentIndex: number;
  known: string[];
  unknown: string[];
  flipped: boolean;
  startTime: number;
  streak: number;
  maxStreak: number;
}

export interface SessionResult {
  total: number;
  known: number;
  unknown: number;
  accuracy: number;
  timeSeconds: number;
  maxStreak: number;
}
