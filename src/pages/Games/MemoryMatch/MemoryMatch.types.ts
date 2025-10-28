export interface MemoryCard {
    id: string;
    content: string;
    type: 'term' | 'definition';
    pairId: string;
}

export interface FlippedCard {
    card: MemoryCard;
    index: number;
}

export interface GameStats {
    moves: number;
    matches: number;
    timeElapsed: number;
}

export interface MemoryPair {
    id: string;
    term: string;
    definition: string;
    category: string;
}

export type GameDifficulty = 'easy' | 'medium' | 'hard';

export interface GameConfig {
    difficulty: GameDifficulty;
    category?: string;
}

