import {BsPersonCheck, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye, FiHeart, FiShield, FiUser} from "react-icons/fi";
import {MdOutlineTimer, MdWarning} from "react-icons/md";
import {FaExclamationTriangle, FaHeartbeat, FaRegHandPaper} from "react-icons/fa";
import {PiBrainFill} from "react-icons/pi";

export default function Evaluation(){
    return(
        <div className="space-y-8">
            {/* Protocolo de seguridad */}
            <div
                className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsShield className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Protocolo de Seguridad - Tu
                        Vida Primero</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    <strong>No puedes ayudar a nadie si tú resultas lesionado.</strong> La
                    evaluación de la escena
                    y tu seguridad personal son la prioridad #1 en emergencias psiquiátricas.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <FiShield className="w-8 h-8 text-red-500 mb-2"/>
                        <h3 className="font-bold text-red-600">Evalúa desde lejos</h3>
                        <p className="text-sm text-gray-700">Observa la escena desde una
                            distancia segura antes de acercarte</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <FiAlertTriangle className="w-8 h-8 text-orange-500 mb-2"/>
                        <h3 className="font-bold text-orange-600">Identifica salidas</h3>
                        <p className="text-sm text-gray-700">Siempre ten una ruta de escape
                            planificada</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <FiUser className="w-8 h-8 text-blue-500 mb-2"/>
                        <h3 className="font-bold text-blue-600">Solicita apoyo</h3>
                        <p className="text-sm text-gray-700">Pide ayuda policial si hay amenaza
                            de violencia</p>
                    </div>
                </div>
            </div>

            {/* Evaluación sistemática */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsPersonCheck className="w-6 h-6 mr-2 text-orange-500"/>
                    Evaluación Sistemática del Paciente
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">1️⃣
                            SEGURIDAD</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Hay armas visibles?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Comportamiento agresivo?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Objetos que pueden ser armas?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Espacio confinado?</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">2️⃣
                            MÉDICO</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Signos vitales</span>
                            </li>
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Nivel de glucosa</span>
                            </li>
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Saturación de oxígeno</span>
                            </li>
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Evidencia de trauma</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">3️⃣
                            MENTAL</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Orientación en tiempo/espacio</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Contacto con la realidad</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Alucinaciones o delirios</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Ideación suicida/homicida</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Causas médicas que imitan emergencias psiquiátricas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">⚠️
                    SIEMPRE Descartar Causas Médicas</h2>
                <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-4">
                    <p className="text-lg text-gray-800 mb-4">
                        <strong>Regla de oro:</strong> Hasta el 40% de las "emergencias
                        psiquiátricas" tienen una causa médica subyacente.
                        ¡Nunca asumas que es "solo psiquiátrico"!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h3 className="font-bold text-red-700 mb-2 flex items-center">
                            <MdWarning className="w-5 h-5 mr-2"/>
                            Hipoxia/Hipercapnia
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Confusión aguda</li>
                            <li>• Agitación</li>
                            <li>• Cianosis</li>
                            <li>• Alteración del nivel de conciencia</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                            <FaHeartbeat className="w-5 h-5 mr-2"/>
                            Alteraciones Metabólicas
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Hipoglucemia</li>
                            <li>• Hiperglucemia</li>
                            <li>• Desequilibrio electrolítico</li>
                            <li>• Insuficiencia renal/hepática</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h3 className="font-bold text-green-700 mb-2 flex items-center">
                            <PiBrainFill className="w-5 h-5 mr-2"/>
                            Neurológicas
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Trauma craneoencefálico</li>
                            <li>• ACV</li>
                            <li>• Convulsiones (post-ictal)</li>
                            <li>• Infecciones del SNC</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                            <FaRegHandPaper className="w-5 h-5 mr-2"/>
                            Toxicológicas
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Intoxicación por drogas</li>
                            <li>• Síndrome de abstinencia</li>
                            <li>• Envenenamiento por CO</li>
                            <li>• Reacciones medicamentosas</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                            <MdOutlineTimer className="w-5 h-5 mr-2"/>
                            Infecciosas
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Sepsis</li>
                            <li>• Meningitis</li>
                            <li>• Encefalitis</li>
                            <li>• Infección urinaria (ancianos)</li>
                        </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                        <h3 className="font-bold text-pink-700 mb-2 flex items-center">
                            <FiHeart className="w-5 h-5 mr-2"/>
                            Cardiovasculares
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Arritmias</li>
                            <li>• Infarto agudo</li>
                            <li>• Shock</li>
                            <li>• Hipotensión severa</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Evaluación de riesgo de suicidio */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center">
                    <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                    Evaluación de Riesgo Suicida
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">Factores de ALTO
                            Riesgo:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Plan específico y detallado</strong></span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Medios disponibles</strong> (armas, medicamentos)</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span>Intentos previos de suicidio</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span>Historia familiar de suicidio</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span>Aislamiento social severo</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-blue-700 mb-3">Preguntas Directas:</h3>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li>"¿Ha pensado en hacerse daño?"</li>
                                <li>"¿Tiene pensamientos de quitarse la vida?"</li>
                                <li>"¿Tiene un plan de cómo lo haría?"</li>
                                <li>"¿Cuándo planea hacerlo?"</li>
                                <li>"¿Qué le ha impedido hacerlo hasta ahora?"</li>
                                <li>"¿Ha intentado suicidarse antes?"</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signos de alarma que requieren acción inmediata */}
            <div
                className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center">
                    <MdWarning className="w-6 h-6 mr-2"/>
                    🚨 SIGNOS DE ALARMA - ACCIÓN INMEDIATA
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">Comportamiento:</h3>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Agitación extrema con fuerza sobrehumana</li>
                            <li>• Amenazas directas de violencia</li>
                            <li>• Comportamiento autodestructivo activo</li>
                            <li>• Intentos de fuga o escape</li>
                            <li>• Desprendimiento de ropa (hipertermia)</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">Síntomas Físicos:</h3>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Hipertermia (&gt;38.5°C)</li>
                            <li>• Diaforesis profusa</li>
                            <li>• Taquicardia severa (&gt;120 lpm)</li>
                            <li>• Cianosis o desaturación</li>
                            <li>• Alteración del nivel de conciencia</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}