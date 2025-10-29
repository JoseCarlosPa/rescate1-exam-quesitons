import {FaBandAid, FaExclamationTriangle, FaFirstAid, FaHeartbeat} from "react-icons/fa";
import {FiAlertTriangle, FiClock, FiEye} from "react-icons/fi";
import {MdCheckCircle, MdWarning} from "react-icons/md";
import {BsLightbulb, BsShield} from "react-icons/bs";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Prioridad en la
                        Evaluación!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las lesiones de tejido blando pueden ser <strong>mortales</strong> si no se
                    controlan adecuadamente.
                    Una hemorragia no controlada puede causar shock hipovolémico en <span
                    className="text-red-600 font-bold">minutos</span>.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FiClock className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Hemorragia Arterial</p>
                        <p className="text-sm">Pérdida rápida de volumen</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Contaminación</p>
                        <p className="text-sm">Riesgo de infección severa</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeartbeat className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">Shock</p>
                        <p className="text-sm">Compromiso hemodinámico</p>
                    </div>
                </div>
            </div>

            {/* Protocolo XABCDE */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo XABCDE - Evaluación Sistemática
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center">X -
                            HEMORRAGIA</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Identificar hemorragias exanguinantes</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Aplicar presión directa inmediata</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Considerar torniquete si es necesario</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Controlar ANTES del ABC</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">ABC -
                            PRIMARIO</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>A:</strong> Vía aérea permeable</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>B:</strong> Respiración adecuada</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>C:</strong> Circulación y pulso</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">DE -
                            NEUROLÓGICO</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>D:</strong> Déficit neurológico (AVDI)</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>E:</strong> Exposición completa</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Control de temperatura</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Clasificación de heridas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación
                    de Lesiones</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                            <FaBandAid className="w-5 h-5 mr-2"/>
                            Heridas Cerradas
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Contusiones</h4>
                                <p className="text-sm text-gray-600">Daño a capilares sin
                                    ruptura de piel</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Hematomas</h4>
                                <p className="text-sm text-gray-600">Acumulación de sangre en
                                    tejidos</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Lesiones por
                                    Aplastamiento</h4>
                                <p className="text-sm text-gray-600">Compresión severa de
                                    tejidos</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                            <FaFirstAid className="w-5 h-5 mr-2"/>
                            Heridas Abiertas
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-red-600">Abrasiones</h4>
                                <p className="text-sm text-gray-600">Pérdida superficial de
                                    epidermis</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-red-600">Laceraciones</h4>
                                <p className="text-sm text-gray-600">Cortes lineales o
                                    irregulares</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-red-600">Punciones</h4>
                                <p className="text-sm text-gray-600">Heridas pequeñas y
                                    profundas</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-red-600">Avulsiones</h4>
                                <p className="text-sm text-gray-600">Desprendimiento
                                    parcial/total de tejido</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-red-600">Amputaciones</h4>
                                <p className="text-sm text-gray-600">Separación completa de
                                    estructuras</p>
                            </div>
                        </div>
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
                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Hemorragia
                            Severa:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Sangrado arterial (rojo brillante, pulsátil)</li>
                            <li>Pérdida &gt;500ml en adultos</li>
                            <li>Empapamiento de apósitos</li>
                            <li>Formación de charcos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Shock
                            Hipovolémico:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Taquicardia (&gt;100 lpm)</li>
                            <li>Hipotensión (&lt;90 mmHg sistólica)</li>
                            <li>Piel fría, pálida, sudorosa</li>
                            <li>Alteración del estado mental</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Complicaciones:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Síndrome compartimental</li>
                            <li>Infección severa</li>
                            <li>Compromiso neurovascular</li>
                            <li>Hipotermia</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Principios
                        Fundamentales</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>BSI y seguridad de escena PRIMERO</li>
                            <li>Controlar hemorragias antes que ABC</li>
                            <li>Evaluar pulsos distales</li>
                            <li>Documentar hallazgos iniciales</li>
                            <li>Reevaluar constantemente</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Retirar objetos empalados</li>
                            <li>Reintroducir órganos eviscerados</li>
                            <li>Aplicar torniquetes en cuello/tronco</li>
                            <li>Usar hielo directamente sobre piel</li>
                            <li>Subestimar pérdida de sangre</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}