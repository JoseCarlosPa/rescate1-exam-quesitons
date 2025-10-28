import { GameDifficulty } from '../MemoryMatch.types';
import { DIFFICULTY_CONFIG } from '../MemoryMatch.constants';
import {AllRoutes} from "../../../../components/Router/Router.constants.ts";

interface GameSetupProps {
    onStartGame: (difficulty: GameDifficulty, category: string) => void;
}

export default function GameSetup({ onStartGame }: GameSetupProps) {
    const handleStart = (difficulty: GameDifficulty) => {
        onStartGame(difficulty, "Todas las Categorías");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="text-8xl mb-6">🧠</div>
                    <h1 className="text-6xl font-bold text-white mb-4">
                        Memory Match
                    </h1>
                    <p className="text-xl text-gray-500">
                        Encuentra las parejas de términos médicos y sus definiciones
                    </p>
                </div>

                {/* Difficulty Selection */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 mb-8">
                    <h2 className="text-3xl font-bold text-white mb-6 text-center">
                        Selecciona la Dificultad
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Easy */}
                        <button
                            onClick={() => handleStart('easy')}
                            className="bg-gradient-to-br from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-2xl p-8 transform hover:scale-105 transition duration-300 shadow-xl"
                        >
                            <div className="text-5xl mb-4">😊</div>
                            <h3 className="text-2xl font-bold mb-3">Fácil</h3>
                            <div className="text-lg mb-2">{DIFFICULTY_CONFIG.easy.pairs} Parejas</div>
                            <div className="text-sm opacity-90">{DIFFICULTY_CONFIG.easy.pairs * 2} Tarjetas</div>
                        </button>

                        {/* Medium */}
                        <button
                            onClick={() => handleStart('medium')}
                            className="bg-gradient-to-br from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white rounded-2xl p-8 transform hover:scale-105 transition duration-300 shadow-xl"
                        >
                            <div className="text-5xl mb-4">🤔</div>
                            <h3 className="text-2xl font-bold mb-3">Medio</h3>
                            <div className="text-lg mb-2">{DIFFICULTY_CONFIG.medium.pairs} Parejas</div>
                            <div className="text-sm opacity-90">{DIFFICULTY_CONFIG.medium.pairs * 2} Tarjetas</div>
                        </button>

                        {/* Hard */}
                        <button
                            onClick={() => handleStart('hard')}
                            className="bg-gradient-to-br from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white rounded-2xl p-8 transform hover:scale-105 transition duration-300 shadow-xl"
                        >
                            <div className="text-5xl mb-4">🔥</div>
                            <h3 className="text-2xl font-bold mb-3">Difícil</h3>
                            <div className="text-lg mb-2">{DIFFICULTY_CONFIG.hard.pairs} Parejas</div>
                            <div className="text-sm opacity-90">{DIFFICULTY_CONFIG.hard.pairs * 2} Tarjetas</div>
                        </button>
                    </div>
                </div>

                {/* Instructions */}
                <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">
                        ¿Cómo Jugar?
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 ">
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">1️⃣</div>
                            <div>
                                <h4 className="font-bold mb-1">Voltea las Tarjetas</h4>
                                <p className="text-sm text-gray-500">Haz clic en una tarjeta para voltearla y ver su contenido</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">2️⃣</div>
                            <div>
                                <h4 className="font-bold mb-1">Encuentra Parejas</h4>
                                <p className="text-sm text-gray-500">Une cada término médico con su definición correcta</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">3️⃣</div>
                            <div>
                                <h4 className="font-bold mb-1">Memoriza</h4>
                                <p className="text-sm text-gray-500">Recuerda dónde están las tarjetas para hacer menos movimientos</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="text-3xl">4️⃣</div>
                            <div>
                                <h4 className="font-bold mb-1">Gana el Juego</h4>
                                <p className="text-sm text-gray-500">Encuentra todas las parejas en el menor tiempo posible</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="text-center mt-8">
                    <a
                        href={AllRoutes.GAMES}
                        className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-200"
                    >
                        ← Volver a Juegos
                    </a>
                </div>
            </div>
        </div>
    );
}

