import {useCallback, useEffect, useRef, useState} from 'react';
import {SimulatorCase, SimulatorProgress, SimulatorResult} from './CaseSimulator.types';
import {calculateScore as computeScore, getPerformanceLevel as computePerformanceLevel} from './CaseSimulator.logic';

export const useCaseSimulator = (simulatorCase: SimulatorCase) => {
    const [progress, setProgress] = useState<SimulatorProgress>(() => ({
        currentStep: 0,
        userAnswers: [],
        score: 0,
        startTime: Date.now(),
        mistakes: 0,
        criticalErrors: 0,
        failedCriticalStep: false
    }));

    const [isCompleted, setIsCompleted] = useState(false);
    const [currentStepStartTime, setCurrentStepStartTime] = useState(() => Date.now());
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showGlasgowEvaluation, setShowGlasgowEvaluation] = useState(false);
    // Tiempo transcurrido en ms; se actualiza cada segundo mientras el caso está activo.
    const [elapsedTime, setElapsedTime] = useState(0);
    // Instante de finalización, para congelar el tiempo total al terminar.
    const endTimeRef = useRef<number | null>(null);

    const currentStep = simulatorCase.steps[progress.currentStep];
    const isLastStep = progress.currentStep === simulatorCase.steps.length - 1;

    const calculateScore = useCallback((prog: SimulatorProgress, endTime: number): number => {
        return computeScore(prog, simulatorCase.steps.length, endTime);
    }, [simulatorCase.steps.length]);

    const generateFeedback = useCallback((performance: string, prog: SimulatorProgress, totalTimeMs: number): string => {
        const correctAnswers = prog.userAnswers.filter(answer => answer.isCorrect).length;
        const totalTime = Math.round(totalTimeMs / 60000);
        const total = simulatorCase.steps.length;

        if (prog.failedCriticalStep) {
            return `La simulación terminó anticipadamente por un error en un paso crítico. En un caso real, esta decisión podría comprometer la vida del paciente. Repasa el protocolo y vuelve a intentarlo. Alcanzaste ${correctAnswers}/${total} pasos correctos antes del error.`;
        }

        switch (performance) {
            case 'excellent':
                return `¡Excelente trabajo! Demostraste un manejo excepcional del caso clínico. Tu evaluación sistemática y toma de decisiones fueron sobresalientes. Completaste ${correctAnswers}/${total} pasos correctamente en ${totalTime} minutos.`;
            case 'good':
                return `¡Buen trabajo! Mostraste un sólido entendimiento del protocolo médico. Algunas decisiones menores podrían mejorarse, pero tu aproximación general fue correcta. Completaste ${correctAnswers}/${total} pasos correctamente en ${totalTime} minutos.`;
            case 'needs_improvement':
                return `Tu desempeño indica que necesitas repasar algunos conceptos clave. Aunque completaste el caso, hubo varios errores que en situaciones reales podrían afectar el resultado del paciente. Completaste ${correctAnswers}/${total} pasos correctamente en ${totalTime} minutos.`;
            case 'poor':
                return `Es importante que repases los fundamentos de este tipo de emergencia antes de continuar. Los errores cometidos podrían tener consecuencias serias en un caso real. Te recomendamos estudiar más el protocolo. Completaste ${correctAnswers}/${total} pasos correctamente en ${totalTime} minutos.`;
            default:
                return '';
        }
    }, [simulatorCase.steps.length]);

    const generateRecommendations = useCallback((performance: string, criticalErrors: number, mistakes: number, failedCriticalStep: boolean): string[] => {
        const recommendations: string[] = [];

        if (failedCriticalStep) {
            recommendations.push('Identifica los pasos críticos del protocolo antes de actuar - un error aquí puede ser fatal');
            recommendations.push('Practica la secuencia completa hasta que las decisiones críticas sean automáticas');
        }

        if (criticalErrors > 0) {
            recommendations.push('Revisa los pasos críticos del protocolo - estos errores pueden comprometer la vida del paciente');
            recommendations.push('Practica la evaluación sistemática ABCDE hasta que sea automática');
        }

        if (mistakes > 2) {
            recommendations.push('Repasa los fundamentos teóricos del caso antes de repetir la simulación');
            recommendations.push('Estudia las guías clínicas y protocolos relacionados con este tipo de emergencia');
        }

        if (performance === 'poor' || performance === 'needs_improvement') {
            recommendations.push('Consulta material de estudio adicional sobre este tema');
            recommendations.push('Considera practicar casos similares para reforzar el aprendizaje');
            recommendations.push('Revisa los objetivos de aprendizaje del caso antes de continuar');
        }

        if (recommendations.length === 0) {
            recommendations.push('¡Continúa con casos de mayor dificultad para seguir mejorando!');
            recommendations.push('Comparte tu conocimiento ayudando a otros estudiantes');
        }

        return recommendations;
    }, []);

    const submitGlasgowScore = useCallback((score: number) => {
        endTimeRef.current = Date.now();
        setProgress(prev => ({
            ...prev,
            glasgowAnswer: score
        }));
        setShowGlasgowEvaluation(false);
        setIsCompleted(true);
    }, []);

    const shouldShowGlasgowEvaluation = useCallback(() => {
        return simulatorCase.glasgowScore &&
            isLastStep &&
            showFeedback &&
            !showGlasgowEvaluation &&
            !isCompleted;
    }, [simulatorCase.glasgowScore, isLastStep, showFeedback, showGlasgowEvaluation, isCompleted]);

    const submitAnswer = useCallback((optionId: string) => {
        if (!currentStep || showFeedback) return;

        const chosenOption = currentStep.options.find(opt => opt.id === optionId);
        if (!chosenOption) return;

        const timeSpent = Date.now() - currentStepStartTime;
        const isCorrect = chosenOption.isCorrect;
        const isCriticalFailure = !isCorrect && !!currentStep.criticalStep;

        const newAnswer = {
            stepId: currentStep.id,
            selectedOptionId: optionId,
            isCorrect,
            timeSpent
        };

        setProgress(prev => ({
            ...prev,
            userAnswers: [...prev.userAnswers, newAnswer],
            mistakes: prev.mistakes + (isCorrect ? 0 : 1),
            criticalErrors: prev.criticalErrors + (isCriticalFailure ? 1 : 0),
            failedCriticalStep: prev.failedCriticalStep || isCriticalFailure
        }));

        setSelectedOption(optionId);
        setShowFeedback(true);
    }, [currentStep, showFeedback, currentStepStartTime]);

    const nextStep = useCallback(() => {
        // Un error en un paso crítico termina la simulación de inmediato.
        if (progress.failedCriticalStep) {
            endTimeRef.current = Date.now();
            setIsCompleted(true);
            return;
        }

        if (isLastStep) {
            if (simulatorCase.glasgowScore) {
                setShowGlasgowEvaluation(true);
            } else {
                endTimeRef.current = Date.now();
                setIsCompleted(true);
            }
        } else {
            setProgress(prev => ({
                ...prev,
                currentStep: prev.currentStep + 1
            }));
            setShowFeedback(false);
            setSelectedOption(null);
            setCurrentStepStartTime(Date.now());
        }
    }, [isLastStep, simulatorCase.glasgowScore, progress.failedCriticalStep]);

    const getResults = useCallback((): SimulatorResult => {
        const correctAnswers = progress.userAnswers.filter(answer => answer.isCorrect).length;
        const endTime = endTimeRef.current ?? Date.now();
        const totalTime = endTime - progress.startTime;
        const score = calculateScore(progress, endTime);
        const performance = computePerformanceLevel(score);

        let glasgowEvaluation;
        if (simulatorCase.glasgowScore && progress.glasgowAnswer !== undefined) {
            const glasgowCorrect = progress.glasgowAnswer === simulatorCase.glasgowScore.expected;
            glasgowEvaluation = {
                userAnswer: progress.glasgowAnswer,
                correctAnswer: simulatorCase.glasgowScore.expected,
                isCorrect: glasgowCorrect,
                feedback: glasgowCorrect
                    ? `¡Correcto! El paciente presenta un Glasgow de ${simulatorCase.glasgowScore.expected}. ${simulatorCase.glasgowScore.contextInfo}`
                    : `Incorrecto. El Glasgow correcto es ${simulatorCase.glasgowScore.expected}, no ${progress.glasgowAnswer}. ${simulatorCase.glasgowScore.contextInfo}`
            };
        }

        return {
            finalScore: score,
            totalTime,
            correctAnswers,
            totalQuestions: simulatorCase.steps.length,
            mistakes: progress.mistakes,
            criticalErrors: progress.criticalErrors,
            performance,
            failedCriticalStep: !!progress.failedCriticalStep,
            feedback: generateFeedback(performance, progress, totalTime),
            recommendations: generateRecommendations(performance, progress.criticalErrors, progress.mistakes, !!progress.failedCriticalStep),
            glasgowEvaluation
        };
    }, [progress, simulatorCase, calculateScore, generateFeedback, generateRecommendations]);

    const resetSimulator = useCallback(() => {
        endTimeRef.current = null;
        setProgress({
            currentStep: 0,
            userAnswers: [],
            score: 0,
            startTime: Date.now(),
            mistakes: 0,
            criticalErrors: 0,
            failedCriticalStep: false
        });
        setIsCompleted(false);
        setShowFeedback(false);
        setSelectedOption(null);
        setShowGlasgowEvaluation(false);
        setElapsedTime(0);
        setCurrentStepStartTime(Date.now());
    }, []);

    // Cronómetro: actualiza el tiempo transcurrido cada segundo mientras el caso
    // está activo, y se detiene al completarse.
    useEffect(() => {
        if (isCompleted) return;
        const tick = () => setElapsedTime(Date.now() - progress.startTime);
        tick();
        const intervalId = window.setInterval(tick, 1000);
        return () => window.clearInterval(intervalId);
    }, [isCompleted, progress.startTime]);

    return {
        progress,
        currentStep,
        isCompleted,
        showFeedback,
        selectedOption,
        isLastStep,
        showGlasgowEvaluation,
        elapsedTime,
        submitAnswer,
        nextStep,
        resetSimulator,
        getResults,
        submitGlasgowScore,
        shouldShowGlasgowEvaluation
    };
};
