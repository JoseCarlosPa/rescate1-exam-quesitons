import {SimulatorProgress} from './CaseSimulator.types';

export type PerformanceLevel = 'excellent' | 'good' | 'needs_improvement' | 'poor';

/**
 * Calcula la puntuación final (0-100) a partir del progreso y el instante de
 * finalización. Función pura: mismos argumentos → mismo resultado.
 */
export const calculateScore = (
    progress: SimulatorProgress,
    totalSteps: number,
    endTime: number
): number => {
    if (totalSteps <= 0) return 0;

    const correctAnswers = progress.userAnswers.filter(answer => answer.isCorrect).length;
    const baseScore = (correctAnswers / totalSteps) * 100;

    const mistakePenalty = progress.mistakes * 2;
    const criticalErrorPenalty = progress.criticalErrors * 10;
    // Penalización por tiempo por encima de 20 minutos.
    const timePenalty = Math.max(0, (endTime - progress.startTime) / 60000 - 20);

    return Math.max(0, Math.round(baseScore - mistakePenalty - criticalErrorPenalty - timePenalty));
};

export const getPerformanceLevel = (score: number): PerformanceLevel => {
    if (score >= 90) return 'excellent';
    if (score >= 75) return 'good';
    if (score >= 60) return 'needs_improvement';
    return 'poor';
};
