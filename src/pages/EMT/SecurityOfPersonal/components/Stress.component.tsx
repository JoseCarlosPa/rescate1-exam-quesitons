import {FaBrain, FaClock, FaHeart, FaUsers} from "react-icons/fa";
import {MdPsychology, MdWarning} from "react-icons/md";
import {FiAlertTriangle, FiCheckCircle, FiEye, FiHeart} from "react-icons/fi";
import {BsExclamationTriangle} from "react-icons/bs";

export default function Stress() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <FaBrain className="inline mr-3 text-purple-500"/>
                Estrés y Bienestar Mental
            </h2>

            {/* Estrés en el trabajo prehospitalario */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                        <MdPsychology className="mr-2"/>
                        Estrés Prehospitalario
                    </h3>
                    <p className="text-gray-700 mb-3">
                        El trabajo en emergencias médicas es una de las profesiones con mayor
                        estrés.
                        La exposición constante a trauma, decisiones críticas y presión temporal
                        puede afectar significativamente la salud mental.
                    </p>
                    <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                        <p className="text-sm text-gray-600">
                            <strong>Estadística:</strong> Los paramédicos tienen 1.39 veces más
                            probabilidad de desarrollar TEPT que la población general.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                        <FiAlertTriangle className="mr-2"/>
                        Factores de Riesgo
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                            <FaClock className="mr-2 text-red-600"/>
                            Turnos largos e irregulares
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiEye className="mr-2 text-red-600"/>
                            Exposición a trauma
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FaHeart className="mr-2 text-red-600"/>
                            Presión por salvar vidas
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FaUsers className="mr-2 text-red-600"/>
                            Conflictos interpersonales
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FaBrain className="mr-2 text-red-600"/>
                            Fatiga mental acumulada
                        </li>
                    </ul>
                </div>
            </div>

            {/* Signos y síntomas */}
            <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <BsExclamationTriangle className="mr-2"/>
                    Reconocimiento de Signos de Estrés
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700 mb-2">Síntomas Físicos</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fatiga constante</li>
                            <li>• Insomnio o alteraciones del sueño</li>
                            <li>• Dolores de cabeza frecuentes</li>
                            <li>• Problemas gastrointestinales</li>
                            <li>• Tensión muscular</li>
                            <li>• Cambios en el apetito</li>
                            <li>• Resfriados frecuentes</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-700 mb-2">Síntomas Emocionales</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Irritabilidad constante</li>
                            <li>• Ansiedad o nerviosismo</li>
                            <li>• Sentimientos de tristeza</li>
                            <li>• Pérdida de motivación</li>
                            <li>• Sensación de agobio</li>
                            <li>• Cambios de humor frecuentes</li>
                            <li>• Sentimientos de culpa</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-2">Síntomas
                            Conductuales</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Aislamiento social</li>
                            <li>• Aumento en consumo de alcohol</li>
                            <li>• Procrastinación</li>
                            <li>• Ausentismo laboral</li>
                            <li>• Dificultad para concentrarse</li>
                            <li>• Olvidos frecuentes</li>
                            <li>• Comportamiento agresivo</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Estrategias de manejo */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <FiCheckCircle className="mr-2"/>
                        Estrategias de Autocuidado
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white p-3 rounded border-l-4 border-green-500">
                            <h4 className="font-bold text-green-700 mb-1">Cuidado Físico</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Ejercicio regular (30 min/día)</li>
                                <li>• Alimentación balanceada</li>
                                <li>• Hidratación adecuada</li>
                                <li>• Sueño reparador (7-8 horas)</li>
                                <li>• Exámenes médicos regulares</li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-700 mb-1">Cuidado Mental</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Técnicas de relajación</li>
                                <li>• Mindfulness y meditación</li>
                                <li>• Hobbies y actividades placenteras</li>
                                <li>• Tiempo de calidad con familia</li>
                                <li>• Límites entre trabajo y vida personal</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                        <FaUsers className="mr-2"/>
                        Apoyo Profesional y Social
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-700 mb-1">Programas de Apoyo</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• EAP (Employee Assistance Programs)</li>
                                <li>• CISM (Critical Incident Stress Management)</li>
                                <li>• Terapia psicológica especializada</li>
                                <li>• Grupos de apoyo entre pares</li>
                                <li>• Líneas de crisis 24/7</li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                            <h4 className="font-bold text-teal-700 mb-1">Red de Apoyo</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Compañeros de trabajo</li>
                                <li>• Supervisores capacitados</li>
                                <li>• Familia y amigos</li>
                                <li>• Comunidad profesional</li>
                                <li>• Recursos en línea</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Técnicas de relajación */}
            <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <FiHeart className="mr-2"/>
                    Técnicas de Relajación Rápida
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                            <h4 className="font-bold text-indigo-700 mb-2">Respiración
                                4-7-8</h4>
                            <ol className="text-sm text-gray-600 space-y-1">
                                <li>1. Inhala por 4 segundos</li>
                                <li>2. Mantén por 7 segundos</li>
                                <li>3. Exhala por 8 segundos</li>
                                <li>4. Repite 4 ciclos</li>
                            </ol>
                            <p className="text-xs text-indigo-600 mt-2">Útil para ansiedad y
                                antes de dormir</p>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-green-500">
                            <h4 className="font-bold text-green-700 mb-2">Relajación
                                Muscular</h4>
                            <ol className="text-sm text-gray-600 space-y-1">
                                <li>1. Tensa músculos por 5 segundos</li>
                                <li>2. Relaja completamente</li>
                                <li>3. Comienza por pies, sube gradualmente</li>
                                <li>4. Incluye cara y cuello</li>
                            </ol>
                            <p className="text-xs text-green-600 mt-2">Excelente para tensión
                                física</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                            <h4 className="font-bold text-purple-700 mb-2">Técnica
                                5-4-3-2-1</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• 5 cosas que puedes ver</li>
                                <li>• 4 cosas que puedes tocar</li>
                                <li>• 3 cosas que puedes oír</li>
                                <li>• 2 cosas que puedes oler</li>
                                <li>• 1 cosa que puedes saborear</li>
                            </ul>
                            <p className="text-xs text-purple-600 mt-2">Ideal para ataques de
                                pánico</p>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-700 mb-2">Mindfulness
                                Básico</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Enfócate en el momento presente</li>
                                <li>• Observa sin juzgar</li>
                                <li>• Acepta los pensamientos y emociones</li>
                                <li>• Practica 5-10 minutos diarios</li>
                            </ul>
                            <p className="text-xs text-orange-600 mt-2">Reduce estrés
                                crónico</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prevención del burnout */}
            <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <MdWarning className="mr-2"/>
                    Prevención del Burnout
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3">Señales de Alerta</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Cinismo hacia pacientes</li>
                            <li>• Pérdida de empatía</li>
                            <li>• Agotamiento emocional</li>
                            <li>• Sensación de inutilidad</li>
                            <li>• Despersonalización</li>
                            <li>• Falta de logros personales</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3">Factores Protectores</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Balance trabajo-vida</li>
                            <li>• Apoyo organizacional</li>
                            <li>• Control sobre el trabajo</li>
                            <li>• Reconocimiento y recompensas</li>
                            <li>• Valores alineados</li>
                            <li>• Comunicación efectiva</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3">Estrategias de
                            Prevención</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Rotación de turnos</li>
                            <li>• Pausas programadas</li>
                            <li>• Desarrollo profesional continuo</li>
                            <li>• Celebración de logros</li>
                            <li>• Feedback constructivo</li>
                            <li>• Tiempo libre de calidad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}