import { DifficultyLevel } from '../Trivia.types';
import { DIFFICULTY_CONFIGS, CATEGORIES } from '../Trivia.constants';

interface GameSetupProps {
    onStartGame: (difficulty: DifficultyLevel, categories: string[]) => void;
}

export default function GameSetup({ onStartGame }: GameSetupProps) {
    const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel>('medium');
    const [selectedCategories, setSelectedCategories] = useState<string[]>(['all']);

    const handleCategoryToggle = (categoryId: string) => {
        if (categoryId === 'all') {
            setSelectedCategories(['all']);
        } else {
            const newCategories = selectedCategories.includes(categoryId)
                ? selectedCategories.filter(id => id !== categoryId && id !== 'all')
                : [...selectedCategories.filter(id => id !== 'all'), categoryId];

            setSelectedCategories(newCategories.length > 0 ? newCategories : ['all']);
        }
    };

    const handleStart = () => {
        onStartGame(selectedDifficulty, selectedCategories);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-white mb-3">
                        🎯 Trivia Médica
                    </h1>
                    <p className="text-xl text-gray-600">
                        Pon a prueba tus conocimientos contra el reloj
                    </p>
                </div>

                {/* Difficulty Selection */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">
                        Selecciona la Dificultad
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {Object.entries(DIFFICULTY_CONFIGS).map(([key, config]) => (
                            <button
                                key={key}
                                onClick={() => setSelectedDifficulty(key as DifficultyLevel)}
                                className={`p-6 rounded-xl transition-all transform hover:scale-105 ${
                                    selectedDifficulty === key
                                        ? 'bg-gradient-to-br from-blue-500 to-purple-600 ring-4 ring-yellow-400 shadow-lg'
                                        : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                                }`}
                            >
                                <div className="text-4xl mb-2">
                                    {key === 'easy' && '😊'}
                                    {key === 'medium' && '😐'}
                                    {key === 'hard' && '😰'}
                                    {key === 'expert' && '🔥'}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {config.label}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {config.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-white mb-4 text-center">
                        Selecciona las Categorías
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {CATEGORIES.map(category => (
                            <button
                                key={category.id}
                                onClick={() => handleCategoryToggle(category.id)}
                                className={`p-4 rounded-lg transition-all ${
                                    selectedCategories.includes(category.id) || 
                                    (selectedCategories.includes('all') && category.id === 'all')
                                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg'
                                        : 'bg-white bg-opacity-20 hover:bg-opacity-30'
                                }`}
                            >
                                <div className="text-2xl mb-1">{category.icon}</div>
                                <div className="text-sm font-semibold text-gray-600">
                                    {category.name}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Lifelines Info */}
                <div className="mb-8 bg-blue-500 bg-opacity-20 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-3 text-center">
                        💡 Comodines Disponibles
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-3xl mb-2">50/50</div>
                            <p className="text-sm text-gray-600">
                                Elimina 2 respuestas incorrectas
                            </p>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">⏭️</div>
                            <p className="text-sm text-gray-600">
                                Salta una pregunta difícil
                            </p>
                        </div>
                        <div>
                            <div className="text-3xl mb-2">⏰</div>
                            <p className="text-sm text-gray-600">
                                +15 segundos extra
                            </p>
                        </div>
                    </div>
                </div>

                {/* Start Button */}
                <div className="text-center">
                    <button
                        onClick={handleStart}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold py-4 px-12 rounded-full text-xl shadow-xl transform hover:scale-105 transition-all"
                    >
                        🚀 Comenzar Trivia
                    </button>
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';

