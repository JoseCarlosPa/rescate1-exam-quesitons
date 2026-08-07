export type AhorcadoDifficulty = 'easy' | 'medium' | 'hard';

export interface AhorcadoWord {
  id: string;
  word: string; // The word to guess (uppercase, no accents)
  hint: string; // Clinical definition
  difficulty: AhorcadoDifficulty;
  category: string;
}

export interface GameState {
  phase: 'setup' | 'playing' | 'result';
  currentWord: AhorcadoWord | null;
  guessedLetters: string[];
  mistakes: number;
  maxMistakes: number;
  score: number;
  streak: number;
  wordsPlayed: number;
  difficulty: AhorcadoDifficulty | 'all';
}
