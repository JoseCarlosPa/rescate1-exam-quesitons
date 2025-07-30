import {FaExclamationTriangle, FaEye, FaHandPaper, FaHeartbeat} from "react-icons/fa";
import {BsClock, BsLightbulb, BsShield} from "react-icons/bs";
import {MdCheckCircle, MdEmergency, MdWarning} from "react-icons/md";
import {FiAlertTriangle, FiTarget, FiUser} from "react-icons/fi";

export default function Overview() {
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Reconocimiento Temprano Salva Vidas!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las emergencias neurológicas pueden progresar rápidamente y causar daño permanente.
                    El <strong>reconocimiento temprano</strong> y la <strong>intervención rápida</strong> son fundamentales
                    para mejorar el pronóstico del paciente.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <BsClock className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Ventana terapéutica</p>
                        <p className="text-sm">ACV: 3-4.5 horas para trombólisis</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdEmergency className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Estado epiléptico</p>
                        <p className="text-sm">Convulsiones &gt;5 minutos</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeartbeat className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                        <p className="font-bold text-purple-600">TCE grave</p>
                        <p className="text-sm">Glasgow &lt;8 intubación</p>
                    </div>
                </div>
            </div>

            {/* Patologías principales */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Principales Emergencias Neurológicas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3">Emergencias Vasculares</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiTarget className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>ACV Isquémico (85%):</strong> Oclusión arterial</span>
                            </li>
                            <li className="flex items-start">
                                <FiTarget className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>ACV Hemorrágico (15%):</strong> Ruptura vascular</span>
                            </li>
                            <li className="flex items-start">
                                <FiTarget className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>AIT:</strong> Síntomas transitorios &lt;24h</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3">Emergencias No Vasculares</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiTarget className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Convulsiones:</strong> Actividad neuronal anormal</span>
                            </li>
                            <li className="flex items-start">
                                <FiTarget className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>TCE:</strong> Trauma directo o indirecto</span>
                            </li>
                            <li className="flex items-start">
                                <FiTarget className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Síncope:</strong> Pérdida transitoria conciencia</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma críticos */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FaEye className="w-4 h-4 mr-2"/>
                            Neurológicos:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Déficit neurológico focal súbito</li>
                            <li>Alteración súbita del nivel de conciencia</li>
                            <li>Cefalea súbita e intensa ("trueno")</li>
                            <li>Convulsiones prolongadas (&gt;5 min)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FaHandPaper className="w-4 h-4 mr-2"/>
                            Motores:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Hemiparesia o hemiplejía</li>
                            <li>Parálisis facial</li>
                            <li>Pérdida de coordinación</li>
                            <li>Posturas anormales</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FiUser className="w-4 h-4 mr-2"/>
                            Vitales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Alteración del habla o lenguaje</li>
                            <li>Trastornos visuales súbitos</li>
                            <li>Vómito en proyectil</li>
                            <li>Alteración pupilar</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para el Éxito</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evaluar ABC primero</li>
                            <li>Obtener historia clínica completa</li>
                            <li>Determinar hora de inicio síntomas</li>
                            <li>Controlar glucosa capilar</li>
                            <li>Documentar hallazgos neurológicos</li>
                            <li>Comunicar al hospital receptor</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <MdWarning className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Administrar glucosa sin confirmar hipoglucemia</li>
                            <li>Restringir movimientos durante convulsión</li>
                            <li>Introducir objetos en la boca</li>
                            <li>Asumir intoxicación en alteración conciencia</li>
                            <li>Retrasar traslado por "mejoría"</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}