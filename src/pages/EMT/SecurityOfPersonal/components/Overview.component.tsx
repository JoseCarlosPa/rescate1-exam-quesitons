import {FaAmbulance, FaBrain, FaMask, FaShieldAlt, FaUsers} from "react-icons/fa";
import {MdEmergency, MdInfo, MdPsychology, MdTipsAndUpdates, MdWarning} from "react-icons/md";
import {FiActivity, FiCheckCircle, FiShield} from "react-icons/fi";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";

export default function Overview() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <FaShieldAlt className="inline mr-3 text-orange-500"/>
                Seguridad y Bienestar del Personal
            </h2>

            {/* Importancia de la seguridad */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                        <MdWarning className="mr-2"/>
                        Prioridad Número Uno
                    </h3>
                    <p className="text-gray-700 mb-3">
                        La seguridad del personal es la prioridad número uno en cualquier
                        emergencia.
                        Un rescatista lesionado no puede ayudar a otros y puede convertirse en
                        una víctima más.
                    </p>
                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <p className="text-sm text-gray-600">
                            <strong>Principio fundamental:</strong> "No hay paciente tan crítico
                            que justifique crear otra víctima" - AAOS 11ª edición
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                        <FiShield className="mr-2"/>
                        Evaluación de Escena
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1
                            </div>
                            <span className="text-sm">Observar antes de actuar</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2
                            </div>
                            <span className="text-sm">Identificar riesgos potenciales</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3
                            </div>
                            <span className="text-sm">Evaluar la necesidad de apoyo</span>
                        </div>
                        <div className="flex items-center bg-white p-2 rounded">
                            <div
                                className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">4
                            </div>
                            <span
                                className="text-sm">Asegurar la escena antes de ingresar</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tipos de riesgos */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <HiOutlineExclamationTriangle className="mr-2 text-yellow-600"/>
                    Tipos de Riesgos en Emergencias
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700 mb-2 flex items-center">
                            <MdEmergency className="mr-1"/>
                            Físicos
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Tráfico vehicular</li>
                            <li>• Estructuras inestables</li>
                            <li>• Fuego y explosiones</li>
                            <li>• Materiales punzocortantes</li>
                            <li>• Cables eléctricos</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                        <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                            <FaMask className="mr-1"/>
                            Biológicos
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Sangre y fluidos corporales</li>
                            <li>• Enfermedades transmisibles</li>
                            <li>• Agujas y material médico</li>
                            <li>• Contaminación cruzada</li>
                            <li>• Vómito y secreciones</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-bold text-purple-700 mb-2 flex items-center">
                            <MdPsychology className="mr-1"/>
                            Químicos
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Gases tóxicos</li>
                            <li>• Sustancias corrosivas</li>
                            <li>• Materiales peligrosos</li>
                            <li>• Combustibles derramados</li>
                            <li>• Productos domésticos</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-2 flex items-center">
                            <FaUsers className="mr-1"/>
                            Sociales
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Multitudes agresivas</li>
                            <li>• Violencia doméstica</li>
                            <li>• Crimen organizado</li>
                            <li>• Protestas y disturbios</li>
                            <li>• Pacientes agitados</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                        <h4 className="font-bold text-indigo-700 mb-2 flex items-center">
                            <FaBrain className="mr-1"/>
                            Psicológicos
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Estrés agudo</li>
                            <li>• Fatiga mental</li>
                            <li>• Trauma secundario</li>
                            <li>• Burnout</li>
                            <li>• Ansiedad</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                            <FaAmbulance className="mr-1"/>
                            Operacionales
                        </h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Comunicación deficiente</li>
                            <li>• Equipo defectuoso</li>
                            <li>• Sobrecarga de trabajo</li>
                            <li>• Falta de recursos</li>
                            <li>• Coordinación inadecuada</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Principios básicos */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <FiCheckCircle className="mr-2"/>
                        Principios Básicos de Seguridad
                    </h3>
                    <ul className="space-y-2">
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Evaluación constante de la escena
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Uso obligatorio de EPP
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Comunicación efectiva
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Trabajo en equipo
                        </li>
                        <li className="flex items-center text-gray-700">
                            <FiActivity className="mr-2 text-green-600"/>
                            Rutas de escape planificadas
                        </li>
                    </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                        <MdTipsAndUpdates className="mr-2"/>
                        Tips de Seguridad Personal
                    </h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                            <p className="text-sm text-gray-700">
                                <strong>Mantente alerta:</strong> Si algo te parece extraño o
                                peligroso,
                                confía en tu instinto y solicita apoyo.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                            <p className="text-sm text-gray-700">
                                <strong>Comunica:</strong> Informa constantemente tu estado y
                                ubicación
                                al centro de despacho.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-red-500">
                            <p className="text-sm text-gray-700">
                                <strong>No te arriesgues:</strong> Ninguna vida vale más que la
                                tuya.
                                Espera apoyo cuando sea necesario.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Marco normativo */}
            <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                    <MdInfo className="mr-2"/>
                    Marco Normativo y Legal
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                        <h4 className="font-bold text-indigo-700 mb-2">NOM-035-STPS-2018</h4>
                        <p className="text-sm text-gray-600 mb-2">
                            Factores de riesgo psicosocial en el trabajo - Identificación,
                            análisis y prevención.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Bienestar psicológico</li>
                            <li>• Prevención de riesgos</li>
                            <li>• Ambiente laboral</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-2">NOM-034-SSA3-2013</h4>
                        <p className="text-sm text-gray-600 mb-2">
                            Regulación de los servicios de atención médica prehospitalaria.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Seguridad en ambulancias</li>
                            <li>• Equipamiento mínimo</li>
                            <li>• Protocolos de seguridad</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-2">Protocolos AAOS</h4>
                        <p className="text-sm text-gray-600 mb-2">
                            Estándares internacionales para seguridad en EMS.
                        </p>
                        <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Seguridad en escena</li>
                            <li>• Uso de EPP</li>
                            <li>• Reporte de incidentes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}