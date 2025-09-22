import {FaAmbulance, FaHospital, FaPhone, FaRoute, FaUsers} from "react-icons/fa";
import {FaRadio} from "react-icons/fa6";
import {MdEmergency, MdLocalHospital, MdSecurity, MdWarning} from "react-icons/md";
import {FiCheckCircle} from "react-icons/fi";

export default function Structure(){
    return(
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <FaHospital className="inline mr-3 text-blue-500"/>
                Estructura y Componentes del SEM
            </h2>

            {/* Componentes principales */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                        <FaPhone className="mr-2"/>
                        CRUM
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Centro Regulador de Urgencias Médicas. Coordina y regula toda la
                        actividad del SEM.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Recepción de llamadas de emergencia</li>
                        <li>• Despacho de recursos</li>
                        <li>• Coordinación médica</li>
                        <li>• Seguimiento de casos</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                        <FaAmbulance className="mr-2"/>
                        Ambulancias
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Vehículos especializados equipados según normatividad vigente.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Básicas (SVB)</li>
                        <li>• Avanzadas (SVA)</li>
                        <li>• Cuidados intensivos</li>
                        <li>• Especializadas</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                        <FaUsers className="mr-2"/>
                        Personal
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Profesionales capacitados en atención prehospitalaria.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Técnicos (TUM-B)</li>
                        <li>• Paramédicos (TUM-I)</li>
                        <li>• Médicos</li>
                        <li>• Operadores/Despachadores</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                        <FaRadio className="mr-2"/>
                        Comunicaciones
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Sistemas de comunicación para coordinación efectiva.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Radio troncalizado</li>
                        <li>• Telefonía celular</li>
                        <li>• GPS y localización</li>
                        <li>• Sistemas de datos</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                        <MdLocalHospital className="mr-2"/>
                        Hospitales
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Red hospitalaria receptora coordinada con el SEM.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hospitales de 1er nivel</li>
                        <li>• Hospitales de 2do nivel</li>
                        <li>• Hospitales de 3er nivel</li>
                        <li>• Centros de trauma</li>
                    </ul>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-indigo-800 mb-3 flex items-center">
                        <MdSecurity className="mr-2"/>
                        Protocolos
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                        Guías y procedimientos estandarizados basados en evidencia.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• NOM-034-SSA3-2013</li>
                        <li>• Protocolos médicos</li>
                        <li>• Algoritmos de atención</li>
                        <li>• Procedimientos operativos</li>
                    </ul>
                </div>
            </div>

            {/* Tipos de ambulancias */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaAmbulance className="mr-2 text-red-600"/>
                    Clasificación de Ambulancias (NOM-034-SSA3-2013)
                </h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                        <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                        <tr>
                            <th className="py-3 px-4 text-left">Tipo</th>
                            <th className="py-3 px-4 text-left">Características</th>
                            <th className="py-3 px-4 text-left">Personal Mínimo</th>
                            <th className="py-3 px-4 text-left">Equipo Principal</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-red-700">Básica (SVB)</td>
                            <td className="py-3 px-4 text-sm">Soporte Vital Básico, traslados
                                programados
                            </td>
                            <td className="py-3 px-4 text-sm">1 TUM-B + 1 Conductor</td>
                            <td className="py-3 px-4 text-sm">Oxígeno, DEA, inmovilizadores</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-orange-700">Avanzada
                                (SVA)
                            </td>
                            <td className="py-3 px-4 text-sm">Soporte Vital Avanzado,
                                emergencias
                            </td>
                            <td className="py-3 px-4 text-sm">1 TUM-I + 1 TUM-B</td>
                            <td className="py-3 px-4 text-sm">Monitor/Desfibrilador,
                                medicamentos
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-blue-700">UCI Móvil</td>
                            <td className="py-3 px-4 text-sm">Cuidados intensivos, traslados
                                críticos
                            </td>
                            <td className="py-3 px-4 text-sm">1 Médico + 1 Enfermero + 1 TUM
                            </td>
                            <td className="py-3 px-4 text-sm">Ventilador, bombas de infusión
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-purple-700">Especializada</td>
                            <td className="py-3 px-4 text-sm">Neonatal, bariatría, rescate</td>
                            <td className="py-3 px-4 text-sm">Personal especializado</td>
                            <td className="py-3 px-4 text-sm">Equipo específico según función
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Cadena de supervivencia */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                    <FaRoute className="mr-2"/>
                    Cadena de Supervivencia Prehospitalaria
                </h3>
                <div className="grid md:grid-cols-5 gap-4">
                    <div className="text-center">
                        <div
                            className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1
                        </div>
                        <h4 className="font-bold text-teal-700 text-sm mb-1">Reconocimiento</h4>
                        <p className="text-xs text-gray-600">Identificación temprana y
                            activación del SEM</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2
                        </div>
                        <h4 className="font-bold text-teal-700 text-sm mb-1">Atención
                            Inicial</h4>
                        <p className="text-xs text-gray-600">SVB por testigos o primeros
                            respondientes</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3
                        </div>
                        <h4 className="font-bold text-teal-700 text-sm mb-1">Despliegue</h4>
                        <p className="text-xs text-gray-600">Llegada de la ambulancia y
                            personal</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">4
                        </div>
                        <h4 className="font-bold text-teal-700 text-sm mb-1">Estabilización</h4>
                        <p className="text-xs text-gray-600">Atención avanzada en sitio</p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">5
                        </div>
                        <h4 className="font-bold text-teal-700 text-sm mb-1">Transferencia</h4>
                        <p className="text-xs text-gray-600">Transporte y entrega
                            hospitalaria</p>
                    </div>
                </div>
            </div>

            {/* Niveles de atención */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                    <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                        <FiCheckCircle className="mr-2"/>
                        Primer Nivel
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Centros de salud</li>
                        <li>• Consultorios rurales</li>
                        <li>• Atención básica</li>
                        <li>• Prevención y promoción</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                    <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center">
                        <MdWarning className="mr-2"/>
                        Segundo Nivel
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hospitales generales</li>
                        <li>• Especialidades básicas</li>
                        <li>• Urgencias intermedias</li>
                        <li>• Cirugía ambulatoria</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                    <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                        <MdEmergency className="mr-2"/>
                        Tercer Nivel
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Hospitales de alta especialidad</li>
                        <li>• Centros de trauma</li>
                        <li>• Procedimientos complejos</li>
                        <li>• Cuidados críticos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}