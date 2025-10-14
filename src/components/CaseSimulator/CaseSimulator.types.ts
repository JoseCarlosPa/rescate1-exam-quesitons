export interface SimulatorStep {
    id: string;
    stepNumber: number;
    title: string;
    description: string;
    options: SimulatorOption[];
    correctOptionId: string;
    feedback: {
        correct: string;
        incorrect: string;
        explanation: string;
    };
    criticalStep?: boolean; // Si es verdadero, un error aquí termina la simulación
    stepType?: 'normal' | 'glasgow'; // Nuevo tipo para pasos especiales
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
}

export interface SimulatorResult {
    finalScore: number;
    totalTime: number;
    correctAnswers: number;
    totalQuestions: number;
    mistakes: number;
    criticalErrors: number;
    performance: 'excellent' | 'good' | 'needs_improvement' | 'poor';
    feedback: string;
    recommendations: string[];
    glasgowEvaluation?: {
        userAnswer: number;
        correctAnswer: number;
        isCorrect: boolean;
        feedback: string;
    };
}
