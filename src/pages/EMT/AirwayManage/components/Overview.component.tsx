import {FaExclamationTriangle, FaLungsVirus} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Prioridad Absoluta!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El manejo de la vía aérea es la <strong>primera prioridad</strong> en
                    cualquier emergencia médica.
                    Una obstrucción puede causar muerte cerebral en <span
                    className="text-red-600 font-bold">4-6 minutos</span>.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">0-4 min</p>
                        <p className="text-sm">Daño cerebral reversible</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">4-6 min</p>
                        <p className="text-sm">Daño cerebral irreversible</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">+10 min</p>
                        <p className="text-sm">Muerte cerebral</p>
                    </div>
                </div>
            </div>

            {/* ABC Primario */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo ABC - Evaluación Sistemática
                </h2>

                {/* Evaluación específica de la vía aérea */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">🔍 Evaluación Específica de la Vía Aérea</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-blue-800 mb-2">Preguntas Clave:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• ¿El paciente respira?</li>
                                <li>• ¿Respira de forma adecuada?</li>
                                <li>• ¿Está hipóxico?</li>
                                <li>• ¿Presenta patrones anormales?</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-green-800 mb-2">Signos de Obstrucción:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Ronquidos</li>
                                <li>• Estridor</li>
                                <li>• Respiración ruidosa</li>
                                <li>• Respiración superficial</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-orange-800 mb-2">Parámetros a Evaluar:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Frecuencia respiratoria</li>
                                <li>• Profundidad</li>
                                <li>• Ritmo</li>
                                <li>• Simetría torácica</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A -
                            AIRWAY</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Puede hablar claramente?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Sonidos anormales (estridor, ronquidos)</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Cuerpos extraños visibles</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Posición del cuello</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B -
                            BREATHING</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Frecuencia respiratoria</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Expansión torácica</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Uso de músculos accesorios</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Saturación de oxígeno</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center">C -
                            CIRCULATION</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Pulso y calidad</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Color de piel y mucosas</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Perfusión capilar</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Estado neurológico</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa
                        INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Signos Visuales:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Cianosis (labios, uñas azules)</li>
                            <li>Retracciones intercostales</li>
                            <li>Uso de músculos accesorios</li>
                            <li>Posición de trípode</li>
                            <li>Agitación o confusión</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Signos
                            Auditivos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Estridor (obstrucción alta)</li>
                            <li>Sibilancias (broncoespasmo)</li>
                            <li>Ronquidos (obstrucción por lengua)</li>
                            <li>Gorgoteo (secreciones)</li>
                            <li>Silencio total (obstrucción completa)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Patrón respiratorio Cheyne-Stokes */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-600 mr-3"/>
                    <h3 className="text-xl font-bold text-red-700">⚠️ Patrón Respiratorio Cheyne-Stokes</h3>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                            <h4 className="font-semibold text-red-800 mb-2">Descripción:</h4>
                            <p className="text-gray-700 text-sm mb-3">
                                Respiraciones que aumentan y disminuyen en profundidad y frecuencia,
                                seguidas de períodos de apnea (15-30 segundos).
                            </p>
                            <div className="bg-red-100 p-3 rounded">
                                <p className="text-sm text-red-700">
                                    <strong>Patrón:</strong> Superficial → Profunda → Superficial → Apnea → Reinicio
                                </p>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-orange-800 mb-2">Causas Comunes:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Lesión cerebral grave</li>
                                <li>• Insuficiencia cardíaca severa</li>
                                <li>• Eventos neurológicos (ACV, trauma)</li>
                                <li>• Estados terminales</li>
                                <li>• Hipertensión intracraneal</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-4">
                            <h4 className="font-semibold text-orange-800 mb-2">🔍 Evaluación Inmediata:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Confirmar patrón observando 30-60 segundos</li>
                                <li>Verificar saturación de oxígeno (SpO₂)</li>
                                <li>Medir nivel de conciencia (AVPU/Glasgow)</li>
                                <li>Evaluar signos neurológicos</li>
                            </ol>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2">🚨 Tratamiento:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Oxígeno suplementario inmediato</li>
                                <li>Mascarilla de no reinhalación si hipoxémico</li>
                                <li>Monitoreo continuo</li>
                                <li>Preparar ventilación asistida (apnea mayor 20 seg)</li>
                                <li>Transporte URGENTE y monitorizado</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="mt-4 bg-red-100 p-4 rounded-lg border border-red-300">
                    <p className="text-red-800 font-semibold text-center">
                        ⚠️ IMPORTANCIA CLÍNICA: Indica compromiso neurológico grave o perfusión cerebral deficiente -
                        Requiere intervención inmediata
                    </p>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para
                        Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evaluar vía aérea PRIMERO</li>
                            <li>Proteger columna cervical si hay trauma</li>
                            <li>Mantener la calma y ser sistemático</li>
                            <li>Aspirar antes de ventilar</li>
                            <li>Monitorizar saturación de oxígeno</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Forzar la apertura de la boca</li>
                            <li>Insertar dedos a ciegas</li>
                            <li>Hiperextender el cuello en trauma</li>
                            <li>Ventilar sin revisar la vía aérea</li>
                            <li>Dejar al paciente sin supervisión</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}