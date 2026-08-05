import {MdGavel, MdPolicy, MdVerifiedUser} from "react-icons/md";
import {FiCheckCircle, FiAlertTriangle} from "react-icons/fi";
import {BsExclamationTriangle} from "react-icons/bs";
import {GiScales} from "react-icons/gi";

export default function LegalEthics() {
    return (
        <div className="space-y-8">
            {/* Principios éticos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiScales className="w-6 h-6 mr-2 text-orange-500"/>
                    Principios Éticos Fundamentales
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">🤝</div>
                        <h3 className="font-bold text-blue-700 mb-2">Autonomía</h3>
                        <p className="text-sm text-gray-700">Respetar el derecho del paciente a tomar decisiones informadas sobre su atención</p>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">❤️</div>
                        <h3 className="font-bold text-green-700 mb-2">Beneficencia</h3>
                        <p className="text-sm text-gray-700">Actuar siempre en el mejor interés y bienestar del paciente</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h3 className="font-bold text-red-700 mb-2">No Maleficencia</h3>
                        <p className="text-sm text-gray-700">"Primum non nocere" - Primero, no causar daño adicional</p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                        <div className="text-3xl mb-2">⚖️</div>
                        <h3 className="font-bold text-purple-700 mb-2">Justicia</h3>
                        <p className="text-sm text-gray-700">Tratar a todos los pacientes con equidad, sin discriminación</p>
                    </div>
                </div>
            </div>

            {/* Consentimiento */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdVerifiedUser className="w-6 h-6 mr-2 text-orange-500"/>
                    Consentimiento para el Tratamiento
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                        <h3 className="font-bold text-green-700 mb-3">✅ Consentimiento Explícito (Informado)</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Paciente adulto, consciente y orientado</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Comprende el tratamiento propuesto</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Conoce los riesgos y beneficios</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0"/>
                                <span>Acepta libremente la atención</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                        <h3 className="font-bold text-orange-700 mb-3">🔵 Consentimiento Implícito (Presunto)</h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-orange-500 flex-shrink-0"/>
                                <span>Paciente inconsciente o incapacitado</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-orange-500 flex-shrink-0"/>
                                <span>No puede expresar su voluntad</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-orange-500 flex-shrink-0"/>
                                <span>La ley presume que daría su consentimiento</span>
                            </li>
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-orange-500 flex-shrink-0"/>
                                <span>Se actúa para preservar la vida</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-5">
                    <h3 className="font-bold text-red-700 mb-3 flex items-center">
                        <FiAlertTriangle className="w-5 h-5 mr-2"/>
                        Rechazo de Atención
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Un paciente adulto, consciente y con capacidad de decisión tiene el derecho legal y ético de rechazar el tratamiento.
                    </p>
                    <div className="bg-white rounded p-3 border border-red-100">
                        <p className="text-sm font-semibold text-red-700 mb-2">Pasos a seguir ante un rechazo:</p>
                        <ol className="text-sm text-gray-700 space-y-1">
                            <li>1. Verificar que el paciente esté consciente, orientado y capaz de decidir</li>
                            <li>2. Informar claramente sobre los riesgos del rechazo</li>
                            <li>3. Asegurarse de que la decisión es informada (no bajo presión o desinformación)</li>
                            <li>4. Obtener firma de negativa de atención si es posible</li>
                            <li>5. Documentar completamente todo el proceso</li>
                            <li>6. Ofrecer alternativas de atención disponibles</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Marco legal México */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdGavel className="w-6 h-6 mr-2 text-orange-500"/>
                    Marco Legal en México
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h3 className="font-bold text-gray-700 mb-3">📋 Normativas Aplicables</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="border-b pb-2">
                                <p className="font-semibold text-orange-600">NOM-034-SSA3-2013</p>
                                <p className="text-gray-600">Regulación de los servicios de salud. Atención médica prehospitalaria</p>
                            </li>
                            <li className="border-b pb-2">
                                <p className="font-semibold text-orange-600">NOM-237-SSA1-2004</p>
                                <p className="text-gray-600">Regulación de los servicios de salud. Atención prehospitalaria de las urgencias médicas</p>
                            </li>
                            <li className="border-b pb-2">
                                <p className="font-semibold text-orange-600">Ley General de Salud</p>
                                <p className="text-gray-600">Marco legal general de los servicios de salud en México</p>
                            </li>
                            <li>
                                <p className="font-semibold text-orange-600">CNUM</p>
                                <p className="text-gray-600">Consejo Nacional de Urgencias Médicas - lineamientos nacionales</p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-bold text-yellow-700 mb-3 flex items-center">
                            <BsExclamationTriangle className="w-4 h-4 mr-2"/>
                            Responsabilidades Legales
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0"/>
                                <span><strong>Negligencia:</strong> Falla en cumplir el estándar de cuidado esperado</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0"/>
                                <span><strong>Imprudencia:</strong> Actuar sin la precaución necesaria</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0"/>
                                <span><strong>Abandono:</strong> Dejar al paciente sin transferencia adecuada</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0"/>
                                <span><strong>Divulgación:</strong> Violar la confidencialidad del paciente</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-yellow-500 flex-shrink-0"/>
                                <span><strong>Exceso de práctica:</strong> Actuar fuera del ámbito autorizado</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Documentación */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                    <MdPolicy className="w-6 h-6 mr-2"/>
                    Documentación Clínica: Importancia Médico-Legal
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                    "Si no está documentado, no fue hecho" — principio fundamental en la práctica clínica.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-blue-600 mb-2">📝 Qué documentar</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Hora de llegada y respuesta</li>
                            <li>• Hallazgos clínicos objetivos</li>
                            <li>• Signos vitales iniciales y posteriores</li>
                            <li>• Procedimientos realizados</li>
                            <li>• Medicamentos (dosis, vía, hora)</li>
                            <li>• Respuesta del paciente</li>
                            <li>• Transferencia hospitalaria</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-green-600 mb-2">✅ Documentación correcta</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Objetiva (hechos, no opiniones)</li>
                            <li>• Completa (sin omisiones)</li>
                            <li>• Precisa (datos exactos)</li>
                            <li>• Oportuna (en tiempo real)</li>
                            <li>• Legible y clara</li>
                            <li>• Sin abreviaturas no estándar</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-red-600 mb-2">❌ Errores comunes</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Dejar espacios en blanco</li>
                            <li>• Alterar documentos posteriores</li>
                            <li>• Usar el tiempo como aproximación</li>
                            <li>• Registrar opiniones subjetivas</li>
                            <li>• Omitir hallazgos negativos relevantes</li>
                            <li>• No documentar el rechazo de atención</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
