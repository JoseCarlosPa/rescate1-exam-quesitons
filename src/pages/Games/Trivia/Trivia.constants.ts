import { DifficultyConfig } from './Trivia.types';

export const DIFFICULTY_CONFIGS: Record<string, DifficultyConfig> = {
    easy: {
        label: 'Fácil',
        questionCount: 10,
        timePerQuestion: 30,
        description: '10 preguntas, 30 segundos cada una',
        color: 'green'
    },
    medium: {
        label: 'Medio',
        questionCount: 15,
        timePerQuestion: 25,
        description: '15 preguntas, 25 segundos cada una',
        color: 'yellow'
    },
    hard: {
        label: 'Difícil',
        questionCount: 20,
        timePerQuestion: 20,
        description: '20 preguntas, 20 segundos cada una',
        color: 'orange'
    },
    expert: {
        label: 'Experto',
        questionCount: 30,
        timePerQuestion: 15,
        description: '30 preguntas, 15 segundos cada una',
        color: 'red'
    }
};

export const CATEGORIES = [
    { id: 'all', name: 'Todas las Categorías', icon: '🎯' },
    { id: 'respiratory', name: 'Emergencias Respiratorias', icon: '🫁' },
    { id: 'cardiovascular', name: 'Emergencias Cardiovasculares', icon: '❤️' },
    { id: 'trauma', name: 'Trauma', icon: '🩹' },
    { id: 'neurological', name: 'Emergencias Neurológicas', icon: '🧠' },
    { id: 'pharmacology', name: 'Farmacología', icon: '💊' },
    { id: 'pediatric', name: 'Emergencias Pediátricas', icon: '👶' },
    { id: 'assessment', name: 'Evaluación del Paciente', icon: '🔍' },
    { id: 'legal', name: 'Aspectos Legales', icon: '⚖️' },
];

export const INITIAL_LIFELINES = {
    fiftyFifty: true,
    skipQuestion: true,
    extraTime: true
};

export const POINTS_CONFIG = {
    correct: 100,
    timeBonus: 10, // per second remaining
    streakBonus: 50, // bonus for 3+ correct in a row
};

