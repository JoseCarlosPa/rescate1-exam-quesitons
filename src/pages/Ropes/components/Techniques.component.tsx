import { ReactNode } from 'react';
import { RescueTechnique } from '../Rope.types';
import { MdWarning, MdClose, MdSearch, MdError } from 'react-icons/md';
import { FaExclamationTriangle, FaTools, FaPlayCircle } from 'react-icons/fa';
import { BsArrowRight, BsListOl } from 'react-icons/bs';
import { GiMountainClimbing, GiCog } from 'react-icons/gi';

interface TechniquesProps {
    techniques: RescueTechnique[];
    searchQuery: string;
    onSearchChange: (query: string) => void;
    difficultyFilter: string;
    onDifficultyChange: (difficulty: string) => void;
    selectedTechnique: RescueTechnique | null;
    onSelectTechnique: (technique: RescueTechnique) => void;
    onCloseTechnique: () => void;
}

const TECHNIQUE_ICONS: Record<string, ReactNode> = {
    'rappel': <span className="text-4xl">⬇️</span>,
    'ascent': <span className="text-4xl">⬆️</span>,
    'hauling': <GiCog className="w-10 h-10"/>,
    'traversing': <GiMountainClimbing className="w-10 h-10"/>,
    'patient-packaging': <span className="text-4xl">🏥</span>,
    'anchor-systems': <span className="text-4xl">⚓</span>,
    'lowering': <span className="text-4xl">🔽</span>,
};

const TECHNIQUE_VIDEOS: Record<string, string> = {
    'rappel-basic': 'https://www.youtube.com/results?search_query=rope+rescue+rappel+tutorial',
    'ascent-prusik': 'https://www.youtube.com/results?search_query=prusik+ascent+rope+rescue',
    'mechanical-advantage-3-1': 'https://www.youtube.com/results?search_query=3+to+1+mechanical+advantage+rescue',
    'patient-packaging-stretcher': 'https://www.youtube.com/results?search_query=stokes+basket+patient+packaging',
    'anchor-equalized': 'https://www.youtube.com/results?search_query=equalized+anchor+climbing',
};

export default function Techniques({
    techniques,
    searchQuery,
    onSearchChange,
    difficultyFilter,
    onDifficultyChange,
    selectedTechnique,
    onSelectTechnique,
    onCloseTechnique
}: TechniquesProps) {

    const getDifficultyLabel = (difficulty: string) => {
        switch (difficulty) {
            case 'basic': return 'Básico';
            case 'intermediate': return 'Intermedio';
            case 'advanced': return 'Avanzado';
            default: return difficulty;
        }
    };

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'rappel': return 'from-blue-500 to-blue-600';
            case 'ascent': return 'from-green-500 to-green-600';
            case 'hauling': return 'from-purple-500 to-purple-600';
            case 'patient-packaging': return 'from-red-500 to-red-600';
            case 'anchor-systems': return 'from-amber-500 to-amber-600';
            case 'lowering': return 'from-teal-500 to-teal-600';
            case 'traversing': return 'from-indigo-500 to-indigo-600';
            default: return 'from-gray-500 to-gray-600';
        }
    };

    const getCategoryLabel = (category: string) => {
        switch (category) {
            case 'rappel': return 'Descenso';
            case 'ascent': return 'Ascenso';
            case 'hauling': return 'Izado';
            case 'patient-packaging': return 'Empaquetamiento';
            case 'anchor-systems': return 'Anclajes';
            case 'lowering': return 'Descenso de carga';
            case 'traversing': return 'Travesía';
            default: return category;
        }
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                <div className="flex items-center mb-4">
                    <GiMountainClimbing className="w-8 h-8 text-purple-600 mr-3"/>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800">Técnicas de Rescate</h2>
                        <p className="text-gray-600">Procedimientos paso a paso para operaciones de rescate</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    {/* Búsqueda */}
                    <div className="relative flex-1">
                        <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"/>
                        <input
                            type="text"
                            placeholder="Buscar técnicas..."
                            value={searchQuery}
                            onChange={(e) => onSearchChange(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                    </div>

                    {/* Filtro de dificultad */}
                    <select
                        value={difficultyFilter}
                        onChange={(e) => onDifficultyChange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    >
                        <option value="all">Todas las dificultades</option>
                        <option value="basic">Básico</option>
                        <option value="intermediate">Intermedio</option>
                        <option value="advanced">Avanzado</option>
                    </select>
                </div>
            </div>

            {/* Advertencia de práctica supervisada */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <div className="flex items-start">
                    <FaExclamationTriangle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0"/>
                    <div>
                        <h3 className="font-bold text-red-700">⚠️ Práctica Supervisada Requerida</h3>
                        <p className="text-red-800 text-sm mt-1">
                            Estas técnicas deben aprenderse y practicarse <strong>siempre bajo supervisión de
                            instructores calificados</strong>. No intentes realizar estas operaciones sin el
                            entrenamiento y equipo adecuados.
                        </p>
                    </div>
                </div>
            </div>

            {/* Resultados */}
            <p className="text-gray-500 text-sm">
                Mostrando {techniques.length} técnicas
            </p>

            {/* Grid de técnicas */}
            <div className="grid md:grid-cols-2 gap-6">
                {techniques.map((technique) => (
                    <div
                        key={technique.id}
                        onClick={() => onSelectTechnique(technique)}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
                    >
                        {/* Header con gradiente */}
                        <div className={`bg-gradient-to-r ${getCategoryColor(technique.category)} p-5 text-white`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                                        {TECHNIQUE_ICONS[technique.category] || <GiMountainClimbing className="w-8 h-8"/>}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{technique.name}</h3>
                                        <span className="text-xs opacity-80">
                                            {getCategoryLabel(technique.category)}
                                        </span>
                                    </div>
                                </div>
                                <span className={`text-xs px-2 py-1 rounded-full bg-white/20`}>
                                    {getDifficultyLabel(technique.difficulty)}
                                </span>
                            </div>
                        </div>

                        {/* Contenido */}
                        <div className="p-5">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {technique.description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-center text-sm mb-4">
                                <div className="bg-gray-50 rounded-lg p-2">
                                    <span className="block text-2xl font-bold text-purple-600">
                                        {technique.steps.length}
                                    </span>
                                    <span className="text-gray-500 text-xs">Pasos</span>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-2">
                                    <span className="block text-2xl font-bold text-green-600">
                                        {technique.equipment.length}
                                    </span>
                                    <span className="text-gray-500 text-xs">Equipos</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-3 border-t">
                                <div className="flex items-center text-xs text-gray-500">
                                    <MdWarning className="w-4 h-4 mr-1 text-amber-500"/>
                                    {technique.safetyConsiderations.length} consideraciones
                                </div>
                                <span className="text-purple-600 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform">
                                    Ver detalles <BsArrowRight className="ml-1"/>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal de detalle de técnica */}
            {selectedTechnique && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        {/* Header del modal */}
                        <div className={`bg-gradient-to-r ${getCategoryColor(selectedTechnique.category)} p-6 text-white sticky top-0`}>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                        {TECHNIQUE_ICONS[selectedTechnique.category] || <GiMountainClimbing className="w-10 h-10"/>}
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">{selectedTechnique.name}</h2>
                                        <div className="flex gap-2 mt-2">
                                            <span className="text-xs px-2 py-1 rounded-full bg-white/20">
                                                {getCategoryLabel(selectedTechnique.category)}
                                            </span>
                                            <span className="text-xs px-2 py-1 rounded-full bg-white/20">
                                                {getDifficultyLabel(selectedTechnique.difficulty)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={onCloseTechnique}
                                    className="p-2 hover:bg-white/20 rounded-full transition-colors"
                                >
                                    <MdClose className="w-6 h-6"/>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 space-y-6">
                            {/* Descripción */}
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700 text-lg">{selectedTechnique.description}</p>
                            </div>

                            {/* Video tutorial */}
                            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4">
                                <a
                                    href={TECHNIQUE_VIDEOS[selectedTechnique.id] || `https://www.youtube.com/results?search_query=${selectedTechnique.name}+rope+rescue`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 text-white font-medium py-2 hover:opacity-90 transition-opacity"
                                >
                                    <FaPlayCircle className="w-8 h-8"/>
                                    <span>Ver videos tutoriales en YouTube</span>
                                </a>
                            </div>

                            {/* Equipo necesario */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <FaTools className="w-5 h-5 text-blue-500 mr-2"/>
                                    Equipo Necesario
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {selectedTechnique.equipment.map((item, idx) => (
                                        <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Pasos */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                                    <BsListOl className="w-5 h-5 text-purple-500 mr-2"/>
                                    Procedimiento Paso a Paso
                                </h3>
                                <ol className="space-y-3">
                                    {selectedTechnique.steps.map((step, idx) => (
                                        <li key={idx} className="flex items-start bg-purple-50 p-4 rounded-lg">
                                            <span className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-3 flex-shrink-0 text-sm">
                                                {idx + 1}
                                            </span>
                                            <span className="text-gray-700 pt-1">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Consideraciones de seguridad */}
                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                                <h3 className="text-lg font-bold text-amber-700 mb-3 flex items-center">
                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                    Consideraciones de Seguridad
                                </h3>
                                <ul className="space-y-2">
                                    {selectedTechnique.safetyConsiderations.map((note, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <MdWarning className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0"/>
                                            <span className="text-amber-800">{note}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Errores comunes */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                                    <MdError className="w-5 h-5 mr-2"/>
                                    Errores Comunes a Evitar
                                </h3>
                                <ul className="space-y-2">
                                    {selectedTechnique.commonMistakes.map((mistake, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-red-500 mr-2">✗</span>
                                            <span className="text-red-800">{mistake}</span>
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

