import { useState, useMemo, useCallback } from 'react';
import { RopeTab, RopeKnot, RescueEquipment, RescueTechnique } from './Rope.types';
import {
    ESSENTIAL_KNOTS,
    RESCUE_EQUIPMENT,
    RESCUE_TECHNIQUES,
    ROPE_RESCUE_QUESTIONS
} from './Ropes.constants';

export function useRopesPage() {
    const [activeTab, setActiveTab] = useState<RopeTab>('overview');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedKnot, setSelectedKnot] = useState<RopeKnot | null>(null);
    const [selectedEquipment, setSelectedEquipment] = useState<RescueEquipment | null>(null);
    const [selectedTechnique, setSelectedTechnique] = useState<RescueTechnique | null>(null);
    const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

    // Filtrar nudos por búsqueda y dificultad
    const filteredKnots = useMemo(() => {
        return ESSENTIAL_KNOTS.filter(knot => {
            const matchesSearch = searchQuery === '' ||
                knot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                knot.spanishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                knot.uses.some(use => use.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesDifficulty = difficultyFilter === 'all' || knot.difficulty === difficultyFilter;

            return matchesSearch && matchesDifficulty;
        });
    }, [searchQuery, difficultyFilter]);

    // Filtrar equipo por búsqueda
    const filteredEquipment = useMemo(() => {
        return RESCUE_EQUIPMENT.filter(equipment => {
            return searchQuery === '' ||
                equipment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                equipment.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                equipment.category.toLowerCase().includes(searchQuery.toLowerCase());
        });
    }, [searchQuery]);

    // Filtrar técnicas por búsqueda y dificultad
    const filteredTechniques = useMemo(() => {
        return RESCUE_TECHNIQUES.filter(technique => {
            const matchesSearch = searchQuery === '' ||
                technique.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                technique.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesDifficulty = difficultyFilter === 'all' || technique.difficulty === difficultyFilter;

            return matchesSearch && matchesDifficulty;
        });
    }, [searchQuery, difficultyFilter]);

    // Obtener preguntas aleatorias para práctica
    const getRandomQuestions = useCallback((count: number = 10) => {
        const shuffled = [...ROPE_RESCUE_QUESTIONS].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }, []);

    // Estadísticas para mostrar en overview
    const stats = useMemo(() => ({
        totalKnots: ESSENTIAL_KNOTS.length,
        totalEquipment: RESCUE_EQUIPMENT.length,
        totalTechniques: RESCUE_TECHNIQUES.length,
        totalQuestions: ROPE_RESCUE_QUESTIONS.length,
        knotsByDifficulty: {
            beginner: ESSENTIAL_KNOTS.filter(k => k.difficulty === 'beginner').length,
            intermediate: ESSENTIAL_KNOTS.filter(k => k.difficulty === 'intermediate').length,
            advanced: ESSENTIAL_KNOTS.filter(k => k.difficulty === 'advanced').length,
        },
        techniquesByDifficulty: {
            basic: RESCUE_TECHNIQUES.filter(t => t.difficulty === 'basic').length,
            intermediate: RESCUE_TECHNIQUES.filter(t => t.difficulty === 'intermediate').length,
            advanced: RESCUE_TECHNIQUES.filter(t => t.difficulty === 'advanced').length,
        }
    }), []);

    const handleTabChange = useCallback((tab: RopeTab) => {
        setActiveTab(tab);
        setSearchQuery('');
        setDifficultyFilter('all');
    }, []);

    const handleKnotSelect = useCallback((knot: RopeKnot) => {
        setSelectedKnot(knot);
    }, []);

    const handleKnotClose = useCallback(() => {
        setSelectedKnot(null);
    }, []);

    const handleEquipmentSelect = useCallback((equipment: RescueEquipment) => {
        setSelectedEquipment(equipment);
    }, []);

    const handleEquipmentClose = useCallback(() => {
        setSelectedEquipment(null);
    }, []);

    const handleTechniqueSelect = useCallback((technique: RescueTechnique) => {
        setSelectedTechnique(technique);
    }, []);

    const handleTechniqueClose = useCallback(() => {
        setSelectedTechnique(null);
    }, []);

    return {
        // State
        activeTab,
        searchQuery,
        selectedKnot,
        selectedEquipment,
        selectedTechnique,
        difficultyFilter,

        // Filtered data
        filteredKnots,
        filteredEquipment,
        filteredTechniques,

        // Stats
        stats,

        // Actions
        setActiveTab: handleTabChange,
        setSearchQuery,
        setDifficultyFilter,
        handleKnotSelect,
        handleKnotClose,
        handleEquipmentSelect,
        handleEquipmentClose,
        handleTechniqueSelect,
        handleTechniqueClose,
        getRandomQuestions,
    };
}

// Hook para el estado del examen
export function useRopeExam() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [questions, setQuestions] = useState(ROPE_RESCUE_QUESTIONS);

    const score = useMemo(() => {
        let correct = 0;
        questions.forEach((q, idx) => {
            if (selectedAnswers[idx] === q.correctAnswer) {
                correct++;
            }
        });
        return correct;
    }, [selectedAnswers, questions]);

    const percentage = useMemo(() => {
        return Math.round((score / questions.length) * 100);
    }, [score, questions.length]);

    const selectAnswer = useCallback((questionIndex: number, answer: string) => {
        setSelectedAnswers(prev => ({
            ...prev,
            [questionIndex]: answer
        }));
    }, []);

    const nextQuestion = useCallback(() => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        }
    }, [currentQuestion, questions.length]);

    const prevQuestion = useCallback(() => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    }, [currentQuestion]);

    const submitExam = useCallback(() => {
        setShowResults(true);
    }, []);

    const resetExam = useCallback(() => {
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults(false);
        // Shuffle questions for new attempt
        setQuestions([...ROPE_RESCUE_QUESTIONS].sort(() => Math.random() - 0.5));
    }, []);

    return {
        currentQuestion,
        questions,
        selectedAnswers,
        showResults,
        score,
        percentage,
        selectAnswer,
        nextQuestion,
        prevQuestion,
        submitExam,
        resetExam,
        setCurrentQuestion
    };
}

