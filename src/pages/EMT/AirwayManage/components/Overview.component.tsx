import {FaExclamationTriangle, FaLungsVirus} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";

export default function Overview() {
    return(
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