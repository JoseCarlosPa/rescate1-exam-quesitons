import {FaAmbulance, FaRoute, FaShieldAlt} from "react-icons/fa";
import {MdInfo, MdTipsAndUpdates} from "react-icons/md";
import {BsClockHistory} from "react-icons/bs";
import {FiActivity, FiCheckCircle} from "react-icons/fi";

export default function Overview(){
    return(
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <FaAmbulance className="inline mr-3 text-orange-500"/>
                Generalidades del Sistema SEM
            </h2>

            {/* Concepto y definición */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                        <MdInfo className="mr-2"/>
                        ¿Qué es el SEM?
                    </h3>
                    <p className="text-gray-700 mb-3">
                        El Sistema de Emergencias Médicas (SEM) es una red coordinada de
                        servicios y recursos
                        diseñada para proporcionar atención médica prehospitalaria eficaz a
                        personas en situaciones
                        de emergencia médica.
                    </p>
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                        <p className="text-sm text-gray-600">
                            <strong>Objetivo principal:</strong> Salvar vidas, reducir la
                            discapacidad
                            y mejorar los resultados de salud mediante la atención médica
                            temprana y adecuada.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                        <FaRoute className="mr-2"/>
                        Cadena de Supervivencia
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1
                            </div>
                            <span className="text-sm">Reconocimiento y activación del SEM</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2
                            </div>
                            <span className="text-sm">RCP inmediata de alta calidad</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3
                            </div>
                            <span className="text-sm">Desfibrilación rápida</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">4
                            </div>
                            <span className="text-sm">Soporte vital avanzado</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">5
                            </div>
                            <span className="text-sm">Cuidados post-resucitación</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Principios fundamentales */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaShieldAlt className="mr-2 text-green-600"/>
                    Principios Fundamentales del SEM
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-2">Accesibilidad</h4>
                        <p className="text-sm text-gray-600">
                            Servicio disponible 24/7 para toda la población, sin discriminación.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-2">Oportunidad</h4>
                        <p className="text-sm text-gray-600">
                            Respuesta rápida y eficaz en el momento crítico.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-2">Calidad</h4>
                        <p className="text-sm text-gray-600">
                            Atención basada en protocolos y evidencia científica.
                        </p>
                    </div>
                </div>
            </div>

            {/* Historia y evolución */}
            <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <BsClockHistory className="mr-2"/>
                    Historia y Evolución del SEM
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-indigo-500">
                            <h4 className="font-bold text-indigo-700 mb-1">Década de 1960</h4>
                            <p className="text-sm text-gray-600">
                                Surge el concepto moderno de SEM en EE.UU. y Europa,
                                evolucionando hacia sistemas integrados.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-indigo-500">
                            <h4 className="font-bold text-indigo-700 mb-1">En México</h4>
                            <p className="text-sm text-gray-600">
                                Fortalecimiento con la NOM-034-SSA3-2013 que regula los
                                servicios
                                de atención médica prehospitalaria.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                            <h4 className="font-bold text-teal-700 mb-1">Actualidad</h4>
                            <p className="text-sm text-gray-600">
                                Sistemas integrados con tecnología avanzada, protocolos
                                estandarizados
                                y personal altamente capacitado.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                            <h4 className="font-bold text-teal-700 mb-1">Futuro</h4>
                            <p className="text-sm text-gray-600">
                                Incorporación de telemedicina, inteligencia artificial
                                y sistemas de geolocalización avanzados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Objetivos del SEM */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <FiCheckCircle className="mr-2"/>
                        Objetivos Primarios
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Preservar la vida
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Minimizar las secuelas
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Aliviar el sufrimiento
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Estabilizar al paciente
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Coordinar recursos
                        </li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                        <MdTipsAndUpdates className="mr-2"/>
                        Tips para Paramédicos
                    </h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                            <p className="text-sm text-gray-700">
                                <strong>Recuerda:</strong> El SEM inicia desde el primer
                                contacto
                                telefónico hasta la transferencia en el hospital.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                            <p className="text-sm text-gray-700">
                                <strong>Importante:</strong> La comunicación efectiva es clave
                                para el funcionamiento del sistema.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-red-500">
                            <p className="text-sm text-gray-700">
                                <strong>Crítico:</strong> Los tiempos de respuesta impactan
                                directamente en la supervivencia del paciente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}