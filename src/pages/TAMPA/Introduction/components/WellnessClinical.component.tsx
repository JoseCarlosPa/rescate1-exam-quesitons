import {FaBrain} from "react-icons/fa";
import {MdHealthAndSafety} from "react-icons/md";
import {BsLightbulb, BsGraphUpArrow} from "react-icons/bs";
import {FiCheckCircle, FiAlertTriangle} from "react-icons/fi";

export default function WellnessClinical() {
    return (
        <div className="space-y-8">
            {/* Bienestar del rescatista */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdHealthAndSafety className="w-6 h-6 mr-2 text-orange-500"/>
                    Bienestar del Rescatista (Wellness)
                </h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-5 rounded-lg mb-6">
                    <p className="text-gray-800 leading-relaxed">
                        El bienestar integral del TAMP-A no es un lujo — es un <strong>requisito profesional</strong>.
                        Un rescatista con salud física, mental y emocional óptima toma mejores decisiones,
                        comete menos errores y ofrece atención de mayor calidad.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                        <div className="text-center mb-3">
                            <span className="text-4xl">💪</span>
                        </div>
                        <h3 className="font-bold text-green-700 mb-3 text-center">Bienestar Físico</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Ejercicio regular y cardiovascular</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Nutrición adecuada en turno</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Sueño reparador (7-9 horas)</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Técnicas de carga segura</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Revisiones médicas periódicas</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                        <div className="text-center mb-3">
                            <span className="text-4xl">🧠</span>
                        </div>
                        <h3 className="font-bold text-blue-700 mb-3 text-center">Bienestar Mental</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0"/>
                                <span>Reconocer síntomas de TEPT</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0"/>
                                <span>Buscar apoyo psicológico profesional</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0"/>
                                <span>Participar en debriefings</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0"/>
                                <span>Técnicas de manejo del estrés</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0"/>
                                <span>Mindfulness y respiración</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                        <div className="text-center mb-3">
                            <span className="text-4xl">❤️</span>
                        </div>
                        <h3 className="font-bold text-purple-700 mb-3 text-center">Bienestar Emocional</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <span>Red de apoyo social y familiar</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <span>Hobbies y actividades recreativas</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <span>Establecer límites saludables</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <span>Conexión con compañeros</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <span>Reconocer y expresar emociones</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Estrés y burnout */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiAlertTriangle className="w-6 h-6 mr-2 text-red-500"/>
                    Señales de Alarma: Estrés y Burnout
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                        <h3 className="font-bold text-red-700 mb-3">🚨 Síntomas del Burnout</h3>
                        <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                            <div>
                                <p className="font-semibold text-red-600 mb-1">Físicos</p>
                                <ul className="space-y-1 text-xs">
                                    <li>• Fatiga crónica</li>
                                    <li>• Insomnio</li>
                                    <li>• Dolores de cabeza</li>
                                    <li>• Cambios de apetito</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-red-600 mb-1">Emocionales</p>
                                <ul className="space-y-1 text-xs">
                                    <li>• Irritabilidad</li>
                                    <li>• Cinismo</li>
                                    <li>• Sensación de fracaso</li>
                                    <li>• Despersonalización</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-red-600 mb-1">Conductuales</p>
                                <ul className="space-y-1 text-xs">
                                    <li>• Aislamiento social</li>
                                    <li>• Ausentismo</li>
                                    <li>• Menor rendimiento</li>
                                    <li>• Abuso de sustancias</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-red-600 mb-1">Cognitivos</p>
                                <ul className="space-y-1 text-xs">
                                    <li>• Dificultad de concentración</li>
                                    <li>• Olvidos frecuentes</li>
                                    <li>• Indecisión</li>
                                    <li>• Pensamiento negativo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                        <h3 className="font-bold text-orange-700 mb-3">⚠️ Fatiga de Compasión</h3>
                        <p className="text-sm text-gray-700 mb-3">
                            También llamada <strong>trauma vicario</strong>, es el agotamiento emocional específico del personal de emergencias,
                            resultante de la exposición repetida al sufrimiento ajeno.
                        </p>
                        <div className="bg-white rounded p-3 border border-orange-100">
                            <p className="text-xs font-semibold text-orange-700 mb-2">Diferencias con el burnout:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Aparece más abruptamente</li>
                                <li>• Relacionado directamente con trauma ajeno</li>
                                <li>• Incluye síntomas de TEPT secundario</li>
                                <li>• Puede afectar al personal "más comprometido"</li>
                            </ul>
                        </div>
                        <div className="mt-3 bg-green-50 rounded p-3 border border-green-100">
                            <p className="text-xs font-semibold text-green-700 mb-1">Estrategias de prevención:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>✓ Supervisión clínica regular</li>
                                <li>✓ Debriefing post-incidente</li>
                                <li>✓ Terapia individual o grupal</li>
                                <li>✓ Tiempo de descanso efectivo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pensamiento clínico */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaBrain className="w-6 h-6 mr-2 text-orange-500"/>
                    Pensamiento Clínico y Razonamiento en Emergencias
                </h2>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-5 rounded-lg mb-4">
                    <p className="text-gray-800">
                        El pensamiento clínico es la habilidad de recopilar datos, analizarlos, formular una impresión
                        y tomar decisiones de tratamiento — todo en un entorno <strong>dinámico, estresante y con recursos limitados</strong>.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                            <BsGraphUpArrow className="w-4 h-4 mr-2 text-blue-500"/>
                            Proceso del Razonamiento Clínico
                        </h3>
                        <ol className="space-y-3">
                            {[
                                {step: "1", title: "Recopilación de datos", desc: "Historia clínica, signos vitales, mecanismo de lesión"},
                                {step: "2", title: "Procesamiento", desc: "Reconocimiento de patrones, priorización de problemas"},
                                {step: "3", title: "Impresión diagnóstica", desc: "Hipótesis clínica prehospitalaria (no diagnóstico definitivo)"},
                                {step: "4", title: "Plan de tratamiento", desc: "Intervenciones prioritarias según protocolo"},
                                {step: "5", title: "Evaluación continua", desc: "Reevaluación y ajuste del plan según respuesta"},
                            ].map((item) => (
                                <li key={item.step} className="flex items-start">
                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0 mt-0.5">
                                        {item.step}
                                    </span>
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                                        <p className="text-xs text-gray-600">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <h3 className="font-bold text-gray-700 mb-3 flex items-center">
                            <BsLightbulb className="w-4 h-4 mr-2 text-yellow-500"/>
                            Sesgos Cognitivos a Evitar
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                                <p className="text-sm font-semibold text-yellow-700">Cierre prematuro</p>
                                <p className="text-xs text-gray-600">Aceptar el primer diagnóstico sin considerar otras posibilidades</p>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                                <p className="text-sm font-semibold text-yellow-700">Sesgo de confirmación</p>
                                <p className="text-xs text-gray-600">Buscar solo información que confirme la hipótesis inicial</p>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                                <p className="text-sm font-semibold text-yellow-700">Efecto halo</p>
                                <p className="text-xs text-gray-600">Asumir que un paciente "difícil" o "frecuente" está exagerando</p>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
                                <p className="text-sm font-semibold text-yellow-700">Sobre-confianza</p>
                                <p className="text-xs text-gray-600">Confiar excesivamente en la experiencia previa, ignorando datos actuales</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
