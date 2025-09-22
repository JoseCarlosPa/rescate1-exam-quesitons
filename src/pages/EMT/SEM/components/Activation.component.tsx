import {BsTelephone} from "react-icons/bs";
import {FaClock, FaHeartbeat, FaMapMarkerAlt, FaPhone} from "react-icons/fa";
import {MdEmergency, MdInfo} from "react-icons/md";
import {FiActivity, FiCheckCircle} from "react-icons/fi";
import {FaRadio} from "react-icons/fa6";

export default function Activation(){
    return(
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <BsTelephone className="inline mr-3 text-green-500"/>
                Activación y Protocolos del SEM
            </h2>

            {/* Proceso de activación */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <FaPhone className="mr-2"/>
                    Proceso de Activación del SEM
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center mb-2">
                            <div
                                className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2">1
                            </div>
                            <h4 className="font-bold text-green-700">Llamada</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                            Marcación al 911 o número local de emergencias
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center mb-2">
                            <div
                                className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-2">2
                            </div>
                            <h4 className="font-bold text-blue-700">Evaluación</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                            Operador evalúa tipo y prioridad de la emergencia
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                        <div className="flex items-center mb-2">
                            <div
                                className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm mr-2">3
                            </div>
                            <h4 className="font-bold text-orange-700">Despacho</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                            Asignación de recursos apropiados según protocolo
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center mb-2">
                            <div
                                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-2">4
                            </div>
                            <h4 className="font-bold text-red-700">Respuesta</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                            Activación y despliegue de la ambulancia
                        </p>
                    </div>
                </div>
            </div>

            {/* Códigos de prioridad */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                        <MdEmergency className="mr-2"/>
                        Códigos de Prioridad
                    </h3>
                    <div className="space-y-3">
                        <div className="bg-red-50 p-3 rounded border-l-4 border-red-600">
                            <h4 className="font-bold text-red-700">Código Rojo - Crítico</h4>
                            <p className="text-sm text-gray-600">
                                Amenaza inmediata a la vida. Respuesta con sirena y luces.
                            </p>
                            <span
                                className="text-xs text-red-600 font-medium">Tiempo objetivo: &lt; 8 minutos</span>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-600">
                            <h4 className="font-bold text-yellow-700">Código Amarillo -
                                Urgente</h4>
                            <p className="text-sm text-gray-600">
                                Condición seria, requiere atención pronta.
                            </p>
                            <span className="text-xs text-yellow-600 font-medium">Tiempo objetivo: &lt; 15 minutos</span>
                        </div>
                        <div className="bg-green-50 p-3 rounded border-l-4 border-green-600">
                            <h4 className="font-bold text-green-700">Código Verde - No
                                urgente</h4>
                            <p className="text-sm text-gray-600">
                                Traslado programado o condición estable.
                            </p>
                            <span className="text-xs text-green-600 font-medium">Tiempo objetivo: &lt; 30 minutos</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                        <FaClock className="mr-2"/>
                        Tiempos de Respuesta
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-3 rounded">
                            <h4 className="font-bold text-blue-700 mb-2">Urbano</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Crítico: &lt; 8 minutos</li>
                                <li>• Urgente: &lt; 15 minutos</li>
                                <li>• No urgente: &lt; 30 minutos</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded">
                            <h4 className="font-bold text-indigo-700 mb-2">Rural</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Crítico: &lt; 15 minutos</li>
                                <li>• Urgente: &lt; 25 minutos</li>
                                <li>• No urgente: &lt; 45 minutos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Información clave para el despacho */}
            <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <MdInfo className="mr-2"/>
                    Información Clave para el Despacho
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="font-bold text-purple-700">Datos Esenciales</h4>
                        <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Ubicación exacta (dirección, referencias)</li>
                                <li>• Tipo de emergencia</li>
                                <li>• Número de víctimas</li>
                                <li>• Estado de conciencia</li>
                                <li>• Riesgos presentes en la escena</li>
                                <li>• Número telefónico del contacto</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-bold text-purple-700">Instrucciones Pre-arribo</h4>
                        <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• RCP telefónica guiada</li>
                                <li>• Control de hemorragias</li>
                                <li>• Posición de recuperación</li>
                                <li>• Liberación de vía aérea</li>
                                <li>• Manejo de la escena segura</li>
                                <li>• Instrucciones específicas por patología</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tecnología y mejora continua */}
            <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                    <FiActivity className="mr-2"/>
                    Tecnología y Mejora Continua
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-bold text-teal-700 mb-3">Nuevas Tecnologías</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-700">
                                <FaMapMarkerAlt className="mr-2 text-teal-600"/>
                                GPS y geolocalización avanzada
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FaHeartbeat className="mr-2 text-teal-600"/>
                                Telemedicina prehospitalaria
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FaRadio className="mr-2 text-teal-600"/>
                                Apps móviles de coordinación
                            </li>
                            <li className="flex items-center text-gray-700">
                                <MdInfo className="mr-2 text-teal-600"/>
                                Simulación y realidad virtual
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-teal-700 mb-3">Evaluación y Mejora</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-700">
                                <FiCheckCircle className="mr-2 text-teal-600"/>
                                Simulacros regulares
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FiCheckCircle className="mr-2 text-teal-600"/>
                                Capacitación continua
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FiCheckCircle className="mr-2 text-teal-600"/>
                                Auditorías de calidad
                            </li>
                            <li className="flex items-center text-gray-700">
                                <FiCheckCircle className="mr-2 text-teal-600"/>
                                Retroalimentación sistémica
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}