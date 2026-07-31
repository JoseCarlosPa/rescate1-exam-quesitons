export interface SimulatorStep {
    id: string;
    stepNumber: number;
    title: string;
    description: string;
    options: SimulatorOption[];
    /**
     * @deprecated La fuente de verdad es `SimulatorOption.isCorrect`. Este campo
     * se mantiene solo por compatibilidad con los casos existentes y se valida
     * contra `isCorrect` en las pruebas para evitar inconsistencias.
     */
    correctOptionId?: string;
    feedback: {
        correct: string;
        incorrect: string;
        explanation: string;
    };
    criticalStep?: boolean; // Si es verdadero, un error aquí termina la simulación
}

export interface SimulatorOption {
    id: string;
    text: string;
    isCorrect: boolean;
    consequence?: string;
}

export interface SimulatorCase {
    id: string;
    title: string;
    description: string;
    scenario: string;
    patientInfo: {
        age: number;
        gender: string;
        chiefComplaint: string;
        history: string;
    };
    initialVitalSigns: Record<string, string>;
    steps: SimulatorStep[];
    learningObjectives: string[];
    difficulty: 'beginner' | 'intermediate' | 'advanced';
    estimatedTime: string;
    glasgowScore?: {
        expected: number;
        timing: 'during_neurological' | 'final_assessment';
        contextInfo: string;
    };
}

export interface SimulatorProgress {
    currentStep: number;
    userAnswers: Array<{
        stepId: string;
        selectedOptionId: string;
        isCorrect: boolean;
        timeSpent: number;
    }>;
    score: number;
    startTime: number;
    mistakes: number;
    criticalErrors: number;
    glasgowAnswer?: number;
    /** Verdadero si la simulación terminó por un error en un paso crítico. */
    failedCriticalStep?: boolean;
}

export interface SimulatorResult {
    finalScore: number;
    totalTime: number;
    correctAnswers: number;
    totalQuestions: number;
    mistakes: number;
    criticalErrors: number;
    performance: 'excellent' | 'good' | 'needs_improvement' | 'poor';
    /** Verdadero si la simulación terminó anticipadamente por un error crítico. */
    failedCriticalStep: boolean;
    feedback: string;
    recommendations: string[];
    glasgowEvaluation?: {
        userAnswer: number;
        correctAnswer: number;
        isCorrect: boolean;
        feedback: string;
    };
}
