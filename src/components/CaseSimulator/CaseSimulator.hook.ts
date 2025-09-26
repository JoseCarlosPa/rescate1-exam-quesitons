import { useState, useCallback, useEffect } from 'react';
import { SimulatorCase, SimulatorProgress, SimulatorResult } from './CaseSimulator.types';

export const useCaseSimulator = (simulatorCase: SimulatorCase) => {
  const [progress, setProgress] = useState<SimulatorProgress>({
    currentStep: 0,
    userAnswers: [],
    score: 0,
    startTime: Date.now(),
    mistakes: 0,
    criticalErrors: 0
  });

  const [isCompleted, setIsCompleted] = useState(false);
  const [currentStepStartTime, setCurrentStepStartTime] = useState(Date.now());
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentStep = simulatorCase.steps[progress.currentStep];
  const isLastStep = progress.currentStep === simulatorCase.steps.length - 1;

  const calculateScore = useCallback(() => {
    const correctAnswers = progress.userAnswers.filter(answer => answer.isCorrect).length;
    const totalQuestions = simulatorCase.steps.length;
    const baseScore = (correctAnswers / totalQuestions) * 100;

    // Penalizaciones
    const mistakePenalty = progress.mistakes * 2;
    const criticalErrorPenalty = progress.criticalErrors * 10;
    const timePenalty = Math.max(0, (Date.now() - progress.startTime) / 60000 - 20); // Penalización por tiempo > 20min

    return Math.max(0, Math.round(baseScore - mistakePenalty - criticalErrorPenalty - timePenalty));
  }, [progress, simulatorCase.steps.length]);

  const getPerformanceLevel = useCallback((score: number): 'excellent' | 'good' | 'needs_improvement' | 'poor' => {
    if (score >= 90) return 'excellent';
    if (score >= 75) return 'good';
    if (score >= 60) return 'needs_improvement';
    return 'poor';
  }, []);

  const generateFeedback = useCallback((performance: string): string => {
    const correctAnswers = progress.userAnswers.filter(answer => answer.isCorrect).length;
    const totalTime = Math.round((Date.now() - progress.startTime) / 60000);

    switch (performance) {
      case 'excellent':
        return `¡Excelente trabajo! Demostraste un manejo excepcional del caso clínico. Tu evaluación sistemática y toma de decisiones fueron sobresalientes. Completaste ${correctAnswers}/${simulatorCase.steps.length} pasos correctamente en ${totalTime} minutos.`;
      case 'good':
        return `¡Buen trabajo! Mostraste un sólido entendimiento del protocolo médico. Algunas decisiones menores podrían mejorarse, pero tu aproximación general fue correcta. Completaste ${correctAnswers}/${simulatorCase.steps.length} pasos correctamente en ${totalTime} minutos.`;
      case 'needs_improvement':
        return `Tu desempeño indica que necesitas repasar algunos conceptos clave. Aunque completaste el caso, hubo varios errores que en situaciones reales podrían afectar el resultado del paciente. Completaste ${correctAnswers}/${simulatorCase.steps.length} pasos correctamente en ${totalTime} minutos.`;
      case 'poor':
        return `Es importante que repases los fundamentos de este tipo de emergencia antes de continuar. Los errores cometidos podrían tener consecuencias serias en un caso real. Te recomendamos estudiar más el protocolo. Completaste ${correctAnswers}/${simulatorCase.steps.length} pasos correctamente en ${totalTime} minutos.`;
      default:
        return '';
    }
  }, [progress, simulatorCase.steps.length]);

  const generateRecommendations = useCallback((performance: string, criticalErrors: number, mistakes: number): string[] => {
    const recommendations: string[] = [];

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

  const submitAnswer = useCallback((optionId: string) => {
    if (!currentStep || showFeedback) return;

    const selectedOption = currentStep.options.find(opt => opt.id === optionId);
    if (!selectedOption) return;

    const timeSpent = Date.now() - currentStepStartTime;
    const isCorrect = selectedOption.isCorrect;

    const newAnswer = {
      stepId: currentStep.id,
      selectedOptionId: optionId,
      isCorrect,
      timeSpent
    };

    setSelectedOption(optionId);
    setShowFeedback(true);

    setProgress(prev => {
      const newProgress = {
        ...prev,
        userAnswers: [...prev.userAnswers, newAnswer],
        mistakes: prev.mistakes + (isCorrect ? 0 : 1),
        criticalErrors: prev.criticalErrors + (!isCorrect && currentStep.criticalStep ? 1 : 0)
      };

      // Si es un error crítico, terminar simulación
      if (!isCorrect && currentStep.criticalStep) {
        setIsCompleted(true);
      }

      return newProgress;
    });
  }, [currentStep, showFeedback, currentStepStartTime]);

  const nextStep = useCallback(() => {
    if (!showFeedback) return;

    // Si hay error crítico, la simulación ya terminó
    if (!selectedOption || (currentStep?.criticalStep && !currentStep.options.find(opt => opt.id === selectedOption)?.isCorrect)) {
      return;
    }

    if (isLastStep) {
      setIsCompleted(true);
    } else {
      setProgress(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1
      }));
      setCurrentStepStartTime(Date.now());
      setShowFeedback(false);
      setSelectedOption(null);
    }
  }, [showFeedback, selectedOption, currentStep, isLastStep]);

  const resetSimulator = useCallback(() => {
    setProgress({
      currentStep: 0,
      userAnswers: [],
      score: 0,
      startTime: Date.now(),
      mistakes: 0,
      criticalErrors: 0
    });
    setIsCompleted(false);
    setCurrentStepStartTime(Date.now());
    setShowFeedback(false);
    setSelectedOption(null);
  }, []);

  const getResults = useCallback((): SimulatorResult => {
    const finalScore = calculateScore();
    const performance = getPerformanceLevel(finalScore);
    const totalTime = Date.now() - progress.startTime;
    const correctAnswers = progress.userAnswers.filter(answer => answer.isCorrect).length;

    return {
      finalScore,
      totalTime,
      correctAnswers,
      totalQuestions: simulatorCase.steps.length,
      mistakes: progress.mistakes,
      criticalErrors: progress.criticalErrors,
      performance,
      feedback: generateFeedback(performance),
      recommendations: generateRecommendations(performance, progress.criticalErrors, progress.mistakes)
    };
  }, [calculateScore, getPerformanceLevel, generateFeedback, generateRecommendations, progress, simulatorCase.steps.length]);

  // Actualizar score en tiempo real
  useEffect(() => {
    const newScore = calculateScore();
    setProgress(prev => ({ ...prev, score: newScore }));
  }, [progress.userAnswers, calculateScore]);

  return {
    progress,
    currentStep,
    isCompleted,
    showFeedback,
    selectedOption,
    isLastStep,
    submitAnswer,
    nextStep,
    resetSimulator,
    getResults
  };
};
