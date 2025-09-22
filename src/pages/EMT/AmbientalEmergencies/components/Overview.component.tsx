import {FaExclamationTriangle} from "react-icons/fa";
import {GiHeatHaze, GiIceCube, GiPoisonBottle} from "react-icons/gi";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";

export default function Overview() {
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Emergencias Ambientales!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las emergencias ambientales son condiciones médicas causadas por factores externos como
                    <strong> temperatura extrema, agua, animales o sustancias tóxicas</strong>. Pueden ser
                    <span className="text-red-600 font-bold"> potencialmente mortales</span> si no se reconocen y tratan oportunamente.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <GiHeatHaze className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Calor</p>
                        <p className="text-sm">Golpe de calor</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <GiIceCube className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold text-blue-600">Frío</p>
                        <p className="text-sm">Hipotermia</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <GiPoisonBottle className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                        <p className="font-bold text-purple-600">Tóxicos</p>
                        <p className="text-sm">Intoxicaciones</p>
                    </div>
                </div>
            </div>

            {/* Protocolo de evaluación */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo de Evaluación Ambiental
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">1. ESCENA</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Es segura la escena para mí?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Hay otros pacientes?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Cuál es el ambiente?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Hay fuente de exposición?</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">2. PACIENTE</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Evaluación primaria (ABCDE)</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Signos vitales completos</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Temperatura corporal</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Estado neurológico</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-orange-700 mb-3 text-center">3. HISTORIA</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                <span>¿Cuánto tiempo de exposición?</span>
                            </li>
                            <li className="flex items-start">
                                <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                <span>¿Qué tipo de exposición?</span>
                            </li>
                            <li className="flex items-start">
                                <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                <span>¿Primeros auxilios previos?</span>
                            </li>
                            <li className="flex items-start">
                                <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                <span>¿Medicamentos actuales?</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Signos Neurológicos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Confusión o desorientación</li>
                            <li>Cambios en el estado mental</li>
                            <li>Convulsiones</li>
                            <li>Pérdida de conciencia</li>
                            <li>Habla incoherente</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Signos Vitales:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Temperatura corporal anormal</li>
                            <li>Frecuencia cardíaca irregular</li>
                            <li>Presión arterial inestable</li>
                            <li>Respiración irregular</li>
                            <li>Saturación de oxígeno baja</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evaluar la seguridad de la escena PRIMERO</li>
                            <li>Retirar al paciente del ambiente peligroso</li>
                            <li>Tomar temperatura corporal</li>
                            <li>Monitorizar signos vitales continuamente</li>
                            <li>Documentar tiempo y tipo de exposición</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <MdWarning className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Poner en riesgo tu propia seguridad</li>
                            <li>Subestimar la gravedad de la exposición</li>
                            <li>Demorar el tratamiento por obtener historia</li>
                            <li>Usar remedios caseros sin evidencia</li>
                            <li>Dejar solo al paciente durante el transporte</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}