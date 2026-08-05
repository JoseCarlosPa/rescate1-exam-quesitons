import {MdTimeline, MdSchool, MdStar, MdVerifiedUser} from "react-icons/md";
import {FaHeartbeat} from "react-icons/fa";
import {BsLightbulb, BsPeopleFill} from "react-icons/bs";
import {FiCheckCircle} from "react-icons/fi";
import {GiMedicalPack, GiStarMedal} from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Introducción hero */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <GiMedicalPack className="w-8 h-8 text-orange-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-orange-700">¿Qué es el TAMP-A?</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    El <strong>Técnico en Atención Médica Prehospitalaria Avanzado (TAMP-A)</strong> es el nivel
                    más alto de formación en atención de emergencias médicas prehospitalarias en México.
                    Equivalente al <span className="text-orange-600 font-semibold">Paramédico</span> en la
                    terminología internacional, el TAMP-A está capacitado para realizar intervenciones de
                    soporte vital avanzado en situaciones críticas.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <GiStarMedal className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-orange-600 mb-1">Nivel más alto</h4>
                        <p className="text-sm text-gray-700">Formación prehospitalaria de mayor complejidad en México</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeartbeat className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-red-600 mb-1">SVA completo</h4>
                        <p className="text-sm text-gray-700">Soporte Vital Avanzado: vía aérea, IV, medicamentos, ECG</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdVerifiedUser className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-blue-600 mb-1">Supervisión médica</h4>
                        <p className="text-sm text-gray-700">Actúa bajo la autoridad de un Director Médico</p>
                    </div>
                </div>
            </div>

            {/* Comparación de niveles */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdSchool className="w-6 h-6 mr-2 text-orange-500"/>
                    Niveles del Sistema de Emergencias
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                        <thead>
                        <tr className="bg-orange-500 text-white">
                            <th className="py-3 px-4 text-left">Nivel</th>
                            <th className="py-3 px-4 text-left">Habilidades Clave</th>
                            <th className="py-3 px-4 text-left">Medicamentos</th>
                            <th className="py-3 px-4 text-center">Vía aérea</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="bg-blue-50 border-b">
                            <td className="py-3 px-4 font-bold text-blue-700">Primeros Respondientes</td>
                            <td className="py-3 px-4">Primeros auxilios, RCP básico</td>
                            <td className="py-3 px-4">Ninguno</td>
                            <td className="py-3 px-4 text-center">BVM</td>
                        </tr>
                        <tr className="bg-green-50 border-b">
                            <td className="py-3 px-4 font-bold text-green-700">TAMP-B (EMT)</td>
                            <td className="py-3 px-4">Evaluación, inmovilización, sangrado</td>
                            <td className="py-3 px-4">Limitados</td>
                            <td className="py-3 px-4 text-center">Básica</td>
                        </tr>
                        <tr className="bg-yellow-50 border-b">
                            <td className="py-3 px-4 font-bold text-yellow-700">TAMP-I (EMT-I)</td>
                            <td className="py-3 px-4">Acceso IV, desfibrilación</td>
                            <td className="py-3 px-4">Moderados</td>
                            <td className="py-3 px-4 text-center">Intermedia</td>
                        </tr>
                        <tr className="bg-orange-50">
                            <td className="py-3 px-4 font-bold text-orange-700">TAMP-A (Paramédico)</td>
                            <td className="py-3 px-4">Intubación, IO, ECG 12 derivaciones, ACLS</td>
                            <td className="py-3 px-4">Completos</td>
                            <td className="py-3 px-4 text-center">Avanzada</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Sistema EMS */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdTimeline className="w-6 h-6 mr-2 text-orange-500"/>
                    El Sistema de Emergencias Médicas (SEM)
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 flex items-center">
                            <MdStar className="w-5 h-5 mr-2"/>
                            La Estrella de la Vida
                        </h3>
                        <p className="text-sm text-gray-700 mb-3">Los 6 brazos representan las 6 fases del SEM:</p>
                        <ol className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">1</span>
                                <div><strong>Detección:</strong> Reconocimiento de la emergencia</div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">2</span>
                                <div><strong>Reporte:</strong> Llamada al número de emergencias</div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">3</span>
                                <div><strong>Respuesta:</strong> Despacho de la unidad</div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">4</span>
                                <div><strong>Atención prehospitalaria:</strong> Tratamiento en escena</div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">5</span>
                                <div><strong>Atención en tránsito:</strong> Cuidado durante traslado</div>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">6</span>
                                <div><strong>Transferencia:</strong> Entrega a atención definitiva</div>
                            </li>
                        </ol>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-purple-700 mb-3 flex items-center">
                            <BsPeopleFill className="w-5 h-5 mr-2"/>
                            Componentes del SEM
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <div><strong>Acceso público:</strong> Números de emergencia, reconocimiento</div>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <div><strong>Despacho:</strong> Centro de comunicaciones y coordinación</div>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <div><strong>Primeros respondientes:</strong> Policía, bomberos con capacitación básica</div>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <div><strong>Unidades BLS y ALS:</strong> Personal certificado TAMP-B y TAMP-A</div>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <div><strong>Control médico:</strong> Supervisión del Director Médico</div>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-purple-500 flex-shrink-0"/>
                                <div><strong>Instalaciones hospitalarias:</strong> Urgencias, trauma centers</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Protocolos médicos */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                    <BsLightbulb className="w-5 h-5 mr-2 text-yellow-500"/>
                    Tipos de Supervisión y Protocolos Médicos
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h4 className="font-bold text-green-700 mb-2">🟢 Protocolos En Línea (Online)</h4>
                        <p className="text-sm text-gray-700 mb-2">Contacto directo con el médico en tiempo real</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Comunicación por radio o teléfono</li>
                            <li>• Indicaciones médicas en tiempo real</li>
                            <li>• Para situaciones atípicas o complejas</li>
                            <li>• Autorización específica del caso</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-bold text-blue-700 mb-2">🔵 Protocolos Fuera de Línea (Offline)</h4>
                        <p className="text-sm text-gray-700 mb-2">Instrucciones preestablecidas sin contacto inmediato</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Protocolos de tratamiento predefinidos</li>
                            <li>• Revisados y aprobados por el Director Médico</li>
                            <li>• Para situaciones estandarizadas</li>
                            <li>• El TAMP-A actúa con mayor autonomía</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
