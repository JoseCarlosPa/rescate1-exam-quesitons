export type ProtocolDifficulty = 'easy' | 'medium' | 'hard' | 'expert';

export interface ProtocolStep {
    id: string;
    text: string;
    order: number;
    hint?: string;
    emoji?: string;
}

export interface Protocol {
    id: string;
    title: string;
    description: string;
    category: ProtocolCategory;
    difficulty: ProtocolDifficulty;
    steps: ProtocolStep[];
    icon: string;
    color: string;
    tip?: string;
    source?: string;
}

export type ProtocolCategory =
    | 'bls'
    | 'airway'
    | 'trauma'
    | 'cardio'
    | 'neuro'
    | 'pediatric'
    | 'shock'
    | 'toxicology'
    | 'general';

export interface GameState {
    phase: 'setup' | 'playing' | 'result';
    selectedProtocol: Protocol | null;
    orderedSteps: ProtocolStep[];
    isSubmitted: boolean;
    score: number;
    startTime: number;
    endTime: number | null;
    attempts: number;
    correctPositions: boolean[];
    hintsUsed: number;
    streak: number;
}

export interface DragState {
    draggingId: string | null;
    dragOverId: string | null;
}

export interface GameResult {
    protocol: Protocol;
    orderedSteps: ProtocolStep[];
    correctPositions: boolean[];
    score: number;
    timeSeconds: number;
    accuracy: number;
    hintsUsed: number;
}

export interface DifficultyConfig {
    label: string;
    description: string;
    timeBonus: number;
    hintPenalty: number;
    color: string;
    icon: string;
    maxProtocols: number;
}
