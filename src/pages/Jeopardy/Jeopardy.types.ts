export interface JeopardyQuestion {
    id: string;
    category: string;
    points: number;
    question: string;
    answer: string;
    options: string[];
    explanation?: string;
}

export interface Team {
    id: string;
    name: string;
    players: string[];
    score: number;
}

export interface GameState {
    teams: Team[];
    currentTeamIndex: number;
    selectedQuestion: JeopardyQuestion | null;
    answeredQuestions: string[];
    gameStarted: boolean;
}

export interface GameConfig {
    numberOfTeams: number;
    playersPerTeam: number;
}

