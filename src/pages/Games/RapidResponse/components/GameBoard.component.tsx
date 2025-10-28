import { RapidResponseQuestion, RapidResponsePlayer } from '../RapidResponse.types';

interface GameBoardProps {
    currentQuestion: RapidResponseQuestion | null;
    currentPlayer: RapidResponsePlayer;
    timeRemaining: number;
    questionType: 'normal' | 'rapida' | 'doble' | 'robar';
}

export default function GameBoard({
    currentQuestion,
    currentPlayer,
    timeRemaining,
    questionType,
}: GameBoardProps) {
    if (!currentQuestion) return null;

    const getQuestionTypeInfo = () => {
        switch (questionType) {
            case 'rapida':
                return {
                    icon: '⚡',
                    label: 'PREGUNTA RÁPIDA',
                    color: 'from-yellow-400 to-orange-500',
                    description: '+50% puntos',
                };
            case 'doble':
                return {
                    icon: '💎',
                    label: 'PUNTOS DOBLES',
                    color: 'from-purple-400 to-pink-500',
                    description: 'x2 puntos',
                };
            case 'robar':
                return {
                    icon: '🎯',
                    label: 'OPORTUNIDAD DE ROBO',
                    color: 'from-red-400 to-orange-500',
                    description: 'Si fallas, el otro jugador puede robar',
                };
            default:
                return {
                    icon: '📝',
                    label: 'PREGUNTA NORMAL',
                    color: 'from-blue-400 to-cyan-500',
                    description: 'Puntos estándar',
                };
        }
    };

    const typeInfo = getQuestionTypeInfo();
    const timePercentage = (timeRemaining / currentQuestion.timeLimit) * 100;
    const isTimeRunningOut = timeRemaining <= 5;

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-6">
            {/* Tipo de pregunta */}
            <div className={`bg-gradient-to-r ${typeInfo.color} rounded-xl p-4 mb-4`}>
                <div className="flex items-center justify-between text-white">
                    <div>
                        <div className="text-3xl mb-1">{typeInfo.icon}</div>
                        <div className="font-bold text-lg">{typeInfo.label}</div>
                        <div className="text-sm opacity-90">{typeInfo.description}</div>
                    </div>
                    <div className="text-right">
                        <div className="text-sm opacity-90">Puntos base</div>
                        <div className="text-4xl font-bold">{currentQuestion.points}</div>
                    </div>
                </div>
            </div>

            {/* Información de la pregunta */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-600 mb-1">Categoría</div>
                    <div className="font-bold text-gray-800 text-sm">
                        {currentQuestion.category}
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-600 mb-1">Dificultad</div>
                    <div
                        className={`font-bold text-sm ${
                            currentQuestion.difficulty === 'Fácil'
                                ? 'text-green-600'
                                : currentQuestion.difficulty === 'Media'
                                ? 'text-yellow-600'
                                : 'text-red-600'
                        }`}
                    >
                        {currentQuestion.difficulty}
                    </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-3 text-center">
                    <div className="text-xs text-gray-600 mb-1">Turno de</div>
                    <div className="font-bold text-gray-800 text-sm truncate">
                        {currentPlayer.name}
                    </div>
                </div>
                <div
                    className={`rounded-lg p-3 text-center transition-colors ${
                        isTimeRunningOut
                            ? 'bg-red-500 animate-pulse'
                            : 'bg-blue-100'
                    }`}
                >
                    <div className={`text-xs mb-1 ${isTimeRunningOut ? 'text-white' : 'text-gray-600'}`}>
                        Tiempo
                    </div>
                    <div
                        className={`font-bold text-2xl ${
                            isTimeRunningOut ? 'text-white' : 'text-blue-600'
                        }`}
                    >
                        {timeRemaining}s
                    </div>
                </div>
            </div>

            {/* Barra de tiempo */}
            <div className="bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                <div
                    className={`h-full transition-all duration-1000 ${
                        isTimeRunningOut
                            ? 'bg-gradient-to-r from-red-500 to-red-700'
                            : 'bg-gradient-to-r from-green-400 to-blue-500'
                    }`}
                    style={{ width: `${timePercentage}%` }}
                />
            </div>
        </div>
    );
}

