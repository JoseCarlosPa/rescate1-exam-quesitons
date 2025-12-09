import { FaExclamationTriangle, FaShieldAlt, FaBookOpen } from 'react-icons/fa';
import { MdCheckCircle, MdOutlineTimer, MdWarning, MdSecurity } from 'react-icons/md';
import { BsLightbulb, BsShield, BsGear } from 'react-icons/bs';
import { GiMountainClimbing, GiKnot, GiRolledCloth } from 'react-icons/gi';
import { ROPE_MODULES, ROPE_TYPES, SAFETY_PROTOCOLS, VOICE_SIGNALS } from '../Ropes.constants';

interface OverviewProps {
    stats: {
        totalKnots: number;
        totalEquipment: number;
        totalTechniques: number;
        totalQuestions: number;
    };
}

export default function Overview({ stats }: OverviewProps) {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-amber-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-amber-700">¡Seguridad Primero!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El rescate con cuerdas es una disciplina técnica de alto riesgo.
                    Cada operación requiere <strong>conocimiento profundo</strong>,
                    <strong> práctica constante</strong> y <strong>verificación rigurosa</strong> de todos los sistemas.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdSecurity className="w-8 h-8 text-amber-500 mx-auto mb-2"/>
                        <p className="font-bold text-amber-600">Redundancia</p>
                        <p className="text-sm">Siempre sistemas de backup</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Verificación</p>
                        <p className="text-sm">Revisar todo, siempre</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">Comunicación</p>
                        <p className="text-sm">Señales claras y precisas</p>
                    </div>
                </div>
            </div>

            {/* Estadísticas del curso */}
            <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-xl text-white shadow-lg">
                    <GiKnot className="w-12 h-12 mb-3 opacity-80"/>
                    <p className="text-3xl font-bold">{stats.totalKnots}</p>
                    <p className="text-blue-100">Nudos Esenciales</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-xl text-white shadow-lg">
                    <BsGear className="w-12 h-12 mb-3 opacity-80"/>
                    <p className="text-3xl font-bold">{stats.totalEquipment}</p>
                    <p className="text-green-100">Tipos de Equipo</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-xl text-white shadow-lg">
                    <GiMountainClimbing className="w-12 h-12 mb-3 opacity-80"/>
                    <p className="text-3xl font-bold">{stats.totalTechniques}</p>
                    <p className="text-purple-100">Técnicas</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white shadow-lg">
                    <FaBookOpen className="w-12 h-12 mb-3 opacity-80"/>
                    <p className="text-3xl font-bold">{stats.totalQuestions}</p>
                    <p className="text-orange-100">Preguntas de Práctica</p>
                </div>
            </div>

            {/* Módulos del curso */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaBookOpen className="w-6 h-6 mr-2 text-amber-500"/>
                    Contenido del Curso
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    {ROPE_MODULES.map((module) => (
                        <div
                            key={module.id}
                            className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow cursor-pointer group"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="text-3xl">{module.icon}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    module.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                                    module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                                    'bg-red-100 text-red-700'
                                }`}>
                                    {module.difficulty === 'beginner' ? 'Básico' :
                                     module.difficulty === 'intermediate' ? 'Intermedio' : 'Avanzado'}
                                </span>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors">
                                {module.title}
                            </h3>
                            <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                            <div className="flex items-center text-xs text-gray-500">
                                <MdOutlineTimer className="w-4 h-4 mr-1"/>
                                {module.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Tipos de cuerdas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiRolledCloth className="w-6 h-6 mr-2 text-amber-500"/>
                    Tipos de Cuerdas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {ROPE_TYPES.map((rope) => (
                        <div
                            key={rope.id}
                            className={`rounded-lg p-6 border-2 ${
                                rope.type === 'static' ? 'bg-blue-50 border-blue-200' :
                                rope.type === 'dynamic' ? 'bg-green-50 border-green-200' :
                                'bg-purple-50 border-purple-200'
                            }`}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-bold text-lg">{rope.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                                    rope.type === 'static' ? 'bg-blue-200 text-blue-800' :
                                    rope.type === 'dynamic' ? 'bg-green-200 text-green-800' :
                                    'bg-purple-200 text-purple-800'
                                }`}>
                                    {rope.type === 'static' ? 'Estática' :
                                     rope.type === 'dynamic' ? 'Dinámica' : 'Auxiliar'}
                                </span>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                                <div className="text-center p-2 bg-white rounded">
                                    <p className="font-semibold">{rope.diameter}</p>
                                    <p className="text-xs text-gray-500">Diámetro</p>
                                </div>
                                <div className="text-center p-2 bg-white rounded">
                                    <p className="font-semibold">{rope.breakingStrength}</p>
                                    <p className="text-xs text-gray-500">Resistencia</p>
                                </div>
                                <div className="text-center p-2 bg-white rounded">
                                    <p className="font-semibold">{rope.elongation}</p>
                                    <p className="text-xs text-gray-500">Elongación</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div>
                                    <p className="text-sm font-medium mb-1">Usos principales:</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                        {rope.uses.slice(0, 3).map((use, idx) => (
                                            <li key={idx} className="flex items-center">
                                                <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"/>
                                                {use}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Señales de voz */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaShieldAlt className="w-6 h-6 mr-2 text-amber-500"/>
                    Señales de Comunicación
                </h2>
                <p className="text-gray-600 mb-4">
                    La comunicación clara es esencial en operaciones de rescate. Estas son las señales
                    estándar que todo el equipo debe conocer:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {VOICE_SIGNALS.map((signal, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:bg-amber-50 transition-colors"
                        >
                            <p className="font-bold text-amber-600 mb-1">"{signal.signal}"</p>
                            <p className="text-sm text-gray-600">{signal.meaning}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Protocolos de seguridad */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-amber-500"/>
                    Protocolos de Seguridad
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
                        <h3 className="font-bold text-blue-700 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-2 text-sm">1</span>
                            Pre-Operación
                        </h3>
                        <ul className="space-y-2">
                            {SAFETY_PROTOCOLS.preOperation.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-start">
                                    <MdCheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-5 border border-amber-200">
                        <h3 className="font-bold text-amber-700 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-2 text-sm">2</span>
                            Durante la Operación
                        </h3>
                        <ul className="space-y-2">
                            {SAFETY_PROTOCOLS.duringOperation.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-start">
                                    <MdCheckCircle className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-5 border border-green-200">
                        <h3 className="font-bold text-green-700 mb-3 flex items-center">
                            <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-2 text-sm">3</span>
                            Post-Operación
                        </h3>
                        <ul className="space-y-2">
                            {SAFETY_PROTOCOLS.postOperation.map((item, idx) => (
                                <li key={idx} className="text-sm text-gray-700 flex items-start">
                                    <MdCheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0"/>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Principio SERENE-A */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl p-6 text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2 text-yellow-400"/>
                    Principio SERENE-A para Anclajes
                </h2>
                <p className="text-slate-300 mb-4">
                    Todo sistema de anclaje de rescate debe cumplir con estos criterios:
                </p>
                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-3">
                    {[
                        { letter: 'S', word: 'Solid', spanish: 'Sólido', desc: 'Puntos de anclaje confiables' },
                        { letter: 'E', word: 'Equalized', spanish: 'Ecualizado', desc: 'Carga distribuida' },
                        { letter: 'R', word: 'Redundant', spanish: 'Redundante', desc: 'Múltiples puntos' },
                        { letter: 'E', word: 'Efficient', spanish: 'Eficiente', desc: 'Fácil de construir/usar' },
                        { letter: 'NE', word: 'No Extension', spanish: 'Sin Extensión', desc: 'No falla si un punto cede' },
                        { letter: 'A', word: 'Angles', spanish: 'Ángulos', desc: 'Menores a 60°' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-slate-600/50 rounded-lg p-3 text-center">
                            <span className="text-2xl font-bold text-amber-400">{item.letter}</span>
                            <p className="text-sm font-medium">{item.spanish}</p>
                            <p className="text-xs text-slate-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

