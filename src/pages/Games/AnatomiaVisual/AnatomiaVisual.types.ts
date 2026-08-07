export type BodySystem = 'cardiovascular' | 'respiratory' | 'skeletal' | 'trauma';

export interface AnatomyPoint {
    id: string;
    cx: number;
    cy: number;
    label: string;
    system: BodySystem;
    question: string;
    options: string[];
    correct: string;
    explanation: string;
    emoji?: string;
}

export interface BodySystemConfig {
    id: BodySystem;
    label: string;
    description: string;
    icon: string;
    color: string;
    gradientFrom: string;
    gradientTo: string;
    points: AnatomyPoint[];
}

export interface PointState {
    id: string;
    answered: boolean;
    correct: boolean | null;
    selectedAnswer: string | null;
}

export interface GameState {
    phase: 'setup' | 'playing' | 'result';
    selectedSystem: BodySystemConfig | null;
    pointStates: Record<string, PointState>;
    activePoint: AnatomyPoint | null;
    showModal: boolean;
    score: number;
    startTime: number;
    elapsedSeconds: number;
    hintsUsed: number;
}
