import {PiChalkboardTeacher} from "react-icons/pi";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import {FiAlertTriangle} from "react-icons/fi";
import {FaAmbulance, FaClock, FaShieldAlt, FaUsers} from "react-icons/fa";
import {BsTelephone} from "react-icons/bs";
import {MdEmergency, MdSecurity, MdTipsAndUpdates} from "react-icons/md";

export default function Practice() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <PiChalkboardTeacher className="inline mr-3 text-orange-500"/>
                Casos Prácticos del SEM
            </h2>

            {/* Caso 1: Múltiples víctimas */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <HiOutlineExclamationTriangle className="mr-2"/>
                    Caso 1: Accidente con Múltiples Víctimas
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-red-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Colisión frontal entre dos vehículos en
                        carretera federal.
                        Cinco víctimas confirmadas, una con pérdida de conciencia. El primer
                        respondiente
                        (policía estatal) activa el SEM desde la escena.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3 flex items-center">
                            <FiAlertTriangle className="mr-2"/>
                            Acciones Prioritarias
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1
                                </div>
                                <span className="text-sm">Evaluar seguridad de la escena (tráfico, combustible)</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2
                                </div>
                                <span className="text-sm">Solicitar múltiples ambulancias y recursos</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3
                                </div>
                                <span
                                    className="text-sm">Realizar triaje primario (START)</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4
                                </div>
                                <span
                                    className="text-sm">Coordinar traslado por prioridad</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3">Información para el
                            CRUM</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><strong>Ubicación:</strong> Km 45 carretera federal 57</p>
                            <p><strong>Tipo:</strong> Colisión frontal 2 vehículos</p>
                            <p><strong>Víctimas:</strong> 5 confirmadas</p>
                            <p><strong>Estado:</strong> 1 inconsciente, 4 conscientes</p>
                            <p><strong>Recursos:</strong> 3 ambulancias, bomberos</p>
                            <p><strong>Riesgos:</strong> Tráfico intenso, derrame combustible
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 bg-red-100 p-3 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Lecciones Aprendidas</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                        <li>• La comunicación precisa acelera la respuesta</li>
                        <li>• El triaje permite optimizar recursos limitados</li>
                        <li>• La coordinación interinstitucional es vital</li>
                    </ul>
                </div>
            </div>

            {/* Caso 2: Activación nocturna */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FaClock className="mr-2"/>
                    Caso 2: Activación Nocturna - Paro Cardíaco
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Llamada a las 2:30 AM. Hombre de 65 años con
                        dolor
                        torácico severo y dificultad respiratoria. La esposa reporta que "se
                        puso morado
                        y ya no responde". Domicilio en zona residencial.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-blue-700 mb-3">Protocolo de
                            Activación</h4>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded">
                                <h5 className="font-bold text-blue-600 text-sm">Código Rojo -
                                    Crítico</h5>
                                <p className="text-xs text-gray-600">Sospecha de paro
                                    cardíaco</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                                <h5 className="font-bold text-blue-600 text-sm">Despacho
                                    Inmediato</h5>
                                <p className="text-xs text-gray-600">Ambulancia SVA + Primer
                                    respondiente si disponible</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded">
                                <h5 className="font-bold text-blue-600 text-sm">RCP
                                    Telefónica</h5>
                                <p className="text-xs text-gray-600">Instruir a la esposa
                                    mientras llega apoyo</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-blue-700 mb-3">Instrucciones
                            Pre-arribo</h4>
                        <ol className="text-sm text-gray-600 space-y-2">
                            <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                Verificar respuesta y respiración
                            </li>
                            <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                Colocar en superficie firme
                            </li>
                            <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                Iniciar compresiones: centro del pecho
                            </li>
                            <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                Ritmo: contar 1, 2, 3... 30 compresiones
                            </li>
                            <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                No interrumpir hasta llegada de SEM
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Caso 3: Triaje telefónico */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <BsTelephone className="mr-2"/>
                    Caso 3: Triaje Telefónico - Dolor Abdominal
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-green-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Mujer de 35 años con dolor abdominal de 4
                        horas
                        de evolución. Consciente, orientada, camina con dificultad. Sin sangrado
                        aparente.
                        Solicita traslado al hospital.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-green-700 mb-3">Evaluación Inicial</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Paciente consciente ✓</li>
                            <li>• Respiración normal ✓</li>
                            <li>• Sin sangrado visible ✓</li>
                            <li>• Dolor localizado</li>
                            <li>• Signos vitales estables</li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-green-700 mb-3">Clasificación</h4>
                        <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                            <h5 className="font-bold text-yellow-700">Código Amarillo</h5>
                            <p className="text-xs text-gray-600 mt-1">
                                Urgente - Dolor abdominal requiere evaluación médica pero no
                                amenaza vida inmediata
                            </p>
                        </div>
                        <p className="text-xs text-green-600 mt-2">Tiempo objetivo: &lt; 15
                            minutos</p>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-green-700 mb-3">Decisión</h4>
                        <div className="space-y-2">
                            <div className="bg-green-50 p-2 rounded">
                                <p className="text-xs text-green-700">
                                    <strong>Recurso:</strong> Ambulancia Básica</p>
                            </div>
                            <div className="bg-green-50 p-2 rounded">
                                <p className="text-xs text-green-700">
                                    <strong>Hospital:</strong> Urgencias general</p>
                            </div>
                            <div className="bg-green-50 p-2 rounded">
                                <p className="text-xs text-green-700">
                                    <strong>Prioridad:</strong> Traslado sin sirena</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 4: Coordinación inter-institucional */}
            <div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <FaUsers className="mr-2"/>
                    Caso 4: Emergencia con Múltiples Agencias
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-purple-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Incendio en edificio residencial de 4 pisos.
                        Múltiples personas atrapadas, víctimas con inhalación de humo. Se
                        requiere
                        coordinación entre bomberos, SEM, policía y protección civil.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-purple-700 mb-3">Roles y
                            Responsabilidades</h4>
                        <div className="space-y-3">
                            <div className="flex items-center bg-red-50 p-2 rounded">
                                <MdEmergency className="mr-2 text-red-600"/>
                                <div>
                                    <p className="font-bold text-red-700 text-sm">Bomberos</p>
                                    <p className="text-xs text-gray-600">Extinción, rescate,
                                        ventilación</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-blue-50 p-2 rounded">
                                <FaShieldAlt className="mr-2 text-blue-600"/>
                                <div>
                                    <p className="font-bold text-blue-700 text-sm">Policía</p>
                                    <p className="text-xs text-gray-600">Perímetro, evacuación,
                                        tráfico</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-green-50 p-2 rounded">
                                <FaAmbulance className="mr-2 text-green-600"/>
                                <div>
                                    <p className="font-bold text-green-700 text-sm">SEM</p>
                                    <p className="text-xs text-gray-600">Triaje, atención,
                                        traslado</p>
                                </div>
                            </div>
                            <div className="flex items-center bg-orange-50 p-2 rounded">
                                <MdSecurity className="mr-2 text-orange-600"/>
                                <div>
                                    <p className="font-bold text-orange-700 text-sm">Protección
                                        Civil</p>
                                    <p className="text-xs text-gray-600">Coordinación general,
                                        albergue</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-purple-700 mb-3">Comunicación y
                            Coordinación</h4>
                        <div className="space-y-3">
                            <div className="bg-purple-50 p-3 rounded">
                                <h5 className="font-bold text-purple-600 text-sm">Canal
                                    Principal</h5>
                                <p className="text-xs text-gray-600">Frecuencia
                                    interinstitucional para coordinación</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded">
                                <h5 className="font-bold text-purple-600 text-sm">Comando
                                    Unificado</h5>
                                <p className="text-xs text-gray-600">Un solo comandante para
                                    decisiones tácticas</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded">
                                <h5 className="font-bold text-purple-600 text-sm">Área de
                                    Triaje</h5>
                                <p className="text-xs text-gray-600">Zona segura para
                                    clasificación y atención</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reflexiones finales */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdTipsAndUpdates className="mr-2 text-orange-500"/>
                    Reflexiones y Buenas Prácticas
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-700 mb-2">Comunicación</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Información clara y precisa</li>
                            <li>• Confirmación de órdenes</li>
                            <li>• Actualización constante</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-2">Coordinación</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Roles bien definidos</li>
                            <li>• Liderazgo claro</li>
                            <li>• Trabajo en equipo</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-2">Seguridad</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Evaluación constante</li>
                            <li>• Protección del personal</li>
                            <li>• Prevención de riesgos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}