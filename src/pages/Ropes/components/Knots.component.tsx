import { useState } from 'react';
import { RopeKnot } from '../Rope.types';
import { MdCheckCircle, MdWarning, MdClose, MdSearch } from 'react-icons/md';
import { FaExclamationTriangle, FaLightbulb, FaYoutube, FaPlay } from 'react-icons/fa';
import { GiKnot } from 'react-icons/gi';
import { BsStarFill, BsArrowRight } from 'react-icons/bs';

interface KnotsProps {
    knots: RopeKnot[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
    difficultyFilter: string;
    onDifficultyChange: (difficulty: string) => void;
    selectedKnot: RopeKnot | null;
    onSelectKnot: (knot: RopeKnot) => void;
    onCloseKnot: () => void;
}

// URLs de videos de YouTube para cada nudo (ejemplos de videos educativos populares)
const KNOT_VIDEOS: Record<string, string> = {
    'figure-eight': 'https://www.youtube.com/watch?v=xvFZjo5PgG0',
    'figure-eight-follow-through': 'https://www.youtube.com/results?search_query=figure+eight+follow+through+knot+climbing',
    'figure-eight-on-bight': 'https://www.youtube.com/results?search_query=figure+eight+on+a+bight+knot',
    'double-fishermans': 'https://www.youtube.com/results?search_query=double+fisherman+knot+tutorial',
    'prusik': 'https://www.youtube.com/results?search_query=prusik+knot+tutorial+rope+rescue',
    'bowline': 'https://www.youtube.com/results?search_query=bowline+knot+tutorial',
    'clove-hitch': 'https://www.youtube.com/results?search_query=clove+hitch+climbing+tutorial',
    'munter-hitch': 'https://www.youtube.com/results?search_query=munter+hitch+belay+tutorial',
    'alpine-butterfly': 'https://www.youtube.com/results?search_query=alpine+butterfly+knot+tutorial',
    'girth-hitch': 'https://www.youtube.com/results?search_query=girth+hitch+knot+climbing',
    'water-knot': 'https://www.youtube.com/results?search_query=water+knot+webbing+tutorial',
};

// Imágenes representativas de los nudos (usando emojis/iconos como placeholder)
const KNOT_IMAGES: Record<string, string> = {
    'figure-eight': '🪢',
    'figure-eight-follow-through': '🔗',
    'figure-eight-on-bight': '➰',
    'double-fishermans': '🔀',
    'prusik': '🔒',
    'bowline': '⭕',
    'clove-hitch': '🎀',
    'munter-hitch': '🔄',
    'alpine-butterfly': '🦋',
    'girth-hitch': '🔘',
    'water-knot': '💧',
};

export default function Knots({
    knots,
    searchQuery,
    onSearchChange,
    difficultyFilter,
    onDifficultyChange,
    selectedKnot,
    onSelectKnot,
    onCloseKnot
}: KnotsProps) {
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner': return 'bg-green-100 text-green-700 border-green-300';
            case 'intermediate': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
            case 'advanced': return 'bg-red-100 text-red-700 border-red-300';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getDifficultyLabel = (difficulty: string) => {
        switch (difficulty) {
            case 'beginner': return 'Básico';
            case 'intermediate': return 'Intermedio';
            case 'advanced': return 'Avanzado';
            default: return difficulty;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'loop': return 'bg-blue-100 text-blue-700';
            case 'bend': return 'bg-purple-100 text-purple-700';
            case 'hitch': return 'bg-teal-100 text-teal-700';
            case 'stopper': return 'bg-orange-100 text-orange-700';
            case 'friction': return 'bg-pink-100 text-pink-700';
            case 'anchorage': return 'bg-indigo-100 text-indigo-700';
            default: return 'bg-gray-100 text-gray-700';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'loop': return 'Gaza';
            case 'bend': return 'Unión';
            case 'hitch': return 'Vuelta';
            case 'stopper': return 'Tope';
            case 'friction': return 'Fricción';
            case 'anchorage': return 'Anclaje';
            default: return category;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header y filtros */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                <div className="flex items-center mb-4">
                    <GiKnot className="w-8 h-8 text-amber-600 mr-3"/>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Nudos Esenciales</h2>
                        <p className="text-gray-600">Domina los nudos fundamentales para rescate técnico</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Búsqueda */}
                    <div className="relative flex-1">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                        <input
                            type="text"
                            placeholder="Buscar nudos..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                    </div>

                    {/* Filtro de dificultad */}
                    <select
                        value={difficultyFilter}
                        onChange={(e) => onDifficultyChange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="all">Todas las dificultades</option>
                        <option value="beginner">Básico</option>
                        <option value="intermediate">Intermedio</option>
                        <option value="advanced">Avanzado</option>
                    </select>

                    {/* Toggle de vista */}
                    <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setViewMode('grid')}
                            className={`px-4 py-2 ${viewMode === 'grid' ? 'bg-amber-500 text-white' : 'bg-white text-gray-600'}`}
                        >
                            Cuadrícula
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`px-4 py-2 ${viewMode === 'list' ? 'bg-amber-500 text-white' : 'bg-white text-gray-600'}`}
                        >
                            Lista
                        </button>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <p className="text-gray-500 text-sm">
                Mostrando {knots.length} nudos
            </p>

            {/* Grid de nudos */}
            {viewMode === 'grid' ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {knots.map((knot) => (
                        <div
                            key={knot.id}
                            onClick={() => onSelectKnot(knot)}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
                        >
                            {/* Header del nudo */}
                            <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 text-white">
                                <div className="flex items-center justify-between">
                                    <span className="text-4xl">{KNOT_IMAGES[knot.id] || '🪢'}</span>
                                    <div className="text-right">
                                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(knot.difficulty)}`}>
                                            {getDifficultyLabel(knot.difficulty)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="p-4">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h3 className="font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
                                            {knot.spanishName}
                                        </h3>
                                        <p className="text-sm text-gray-500 italic">{knot.name}</p>
                                    </div>
                                    <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(knot.category)}`}>
                                        {getCategoryLabel(knot.category)}
                                    </span>
                                </div>

                                <div className="mt-3 space-y-2">
                                    <p className="text-sm font-medium text-gray-700">Usos principales:</p>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        {knot.uses.slice(0, 2).map((use, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <MdCheckCircle className="w-3 h-3 text-green-500 mr-1 flex-shrink-0"/>
                                                {use}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex items-center text-xs text-gray-500">
                                        <span>{knot.steps.length} pasos</span>
                                    </div>
                                    <span className="text-amber-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                                        Ver detalles <BsArrowRight className="ml-1"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                /* Vista de lista */
                <div className="space-y-3">
                    {knots.map((knot) => (
                        <div
                            key={knot.id}
                            onClick={() => onSelectKnot(knot)}
                            className="bg-white rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer border border-gray-100 p-4 flex items-center gap-4"
                        >
                            <span className="text-3xl">{KNOT_IMAGES[knot.id] || '🪢'}</span>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="font-bold text-gray-800">{knot.spanishName}</h3>
                                    <span className="text-sm text-gray-500">({knot.name})</span>
                                </div>
                                <p className="text-sm text-gray-600">{knot.uses[0]}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(knot.category)}`}>
                                    {getCategoryLabel(knot.category)}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(knot.difficulty)}`}>
                                    {getDifficultyLabel(knot.difficulty)}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Modal de detalle del nudo */}
            {selectedKnot && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header del modal */}
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white sticky top-0">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                    <span className="text-5xl mr-4">{KNOT_IMAGES[selectedKnot.id] || '🪢'}</span>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedKnot.spanishName}</h2>
                                        <p className="text-amber-100 italic">{selectedKnot.name}</p>
                                        <div className="flex gap-2 mt-2">
                                            <span className={`text-xs px-2 py-1 rounded-full bg-white/20`}>
                                                {getCategoryLabel(selectedKnot.category)}
                                            </span>
                                            <span className={`text-xs px-2 py-1 rounded-full bg-white/20`}>
                                                {getDifficultyLabel(selectedKnot.difficulty)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={onCloseKnot}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <MdClose className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Video tutorial */}
                            <div className="bg-gray-100 rounded-lg p-4">
                                <a
                                    href={KNOT_VIDEOS[selectedKnot.id] || `https://www.youtube.com/results?search_query=${selectedKnot.name}+knot+tutorial`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 text-red-600 hover:text-red-700 font-medium py-3 bg-white rounded-lg hover:shadow transition-all"
                                >
                                    <FaYoutube className="w-8 h-8"/>
                                    <span>Ver video tutorial en YouTube</span>
                                    <FaPlay className="w-4 h-4"/>
                                </a>
                            </div>

                            {/* Usos */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2"/>
                                    Usos y Aplicaciones
                                </h3>
                                <ul className="grid md:grid-cols-2 gap-2">
                                    {selectedKnot.uses.map((use, idx) => (
                                        <li key={idx} className="flex items-center bg-green-50 p-3 rounded-lg">
                                            <BsStarFill className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                                            <span className="text-gray-700">{use}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Pasos */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3">
                                    📝 Pasos para realizar el nudo
                                </h3>
                                <ol className="space-y-3">
                                    {selectedKnot.steps.map((step, idx) => (
                                        <li key={idx} className="flex items-start bg-blue-50 p-4 rounded-lg">
                                            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0">
                                                {idx + 1}
                                            </span>
                                            <span className="text-gray-700 pt-1">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Tips */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <FaLightbulb className="w-5 h-5 text-yellow-500 mr-2"/>
                                    Consejos y Tips
                                </h3>
                                <ul className="space-y-2">
                                    {selectedKnot.tips.map((tip, idx) => (
                                        <li key={idx} className="flex items-start bg-yellow-50 p-3 rounded-lg">
                                            <FaLightbulb className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0"/>
                                            <span className="text-gray-700">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Notas de seguridad */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                    Notas de Seguridad
                                </h3>
                                <ul className="space-y-2">
                                    {selectedKnot.safetyNotes.map((note, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <MdWarning className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0"/>
                                            <span className="text-red-800">{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

