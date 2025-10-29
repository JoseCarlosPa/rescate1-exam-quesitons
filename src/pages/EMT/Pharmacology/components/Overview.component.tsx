import {GiMedicines} from "react-icons/gi";
import {TbMedicineSyrup, TbPill, TbReportMedical} from "react-icons/tb";
import {BsCalculator, BsLightbulb} from "react-icons/bs";
import {FiAlertTriangle, FiTrendingUp, FiUser} from "react-icons/fi";
import {FaCheckCircle, FaShieldAlt} from "react-icons/fa";
import {MdTimer, MdWarning} from "react-icons/md";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Introducción con impacto visual */}
            <div
                className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <GiMedicines className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">¿Qué es la
                        Farmacología?</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    La farmacología es la <strong>ciencia que estudia las drogas y
                    medicamentos</strong> y su interacción
                    con los organismos vivos. Para los paramédicos, es fundamental comprender
                    cómo los medicamentos
                    <span className="text-blue-600 font-semibold"> salvan vidas en situaciones críticas</span>.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-blue-600 mb-2">En el ambiente
                            prehospitalario:</h4>
                        <p className="text-sm text-gray-700">Los medicamentos pueden ser la
                            diferencia entre la vida y la muerte en los primeros minutos
                            críticos.</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-blue-600 mb-2">Responsabilidad
                            profesional:</h4>
                        <p className="text-sm text-gray-700">Cada administración debe ser
                            precisa, segura y basada en evidencia científica.</p>
                    </div>
                </div>
            </div>

            {/* Conceptos fundamentales */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <TbReportMedical className="w-6 h-6 mr-2 text-orange-500"/>
                    Conceptos Fundamentales
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <div className="flex items-center mb-3">
                                <TbPill className="w-6 h-6 text-green-600 mr-2"/>
                                <h3 className="text-xl font-bold text-green-700">Fármaco vs
                                    Medicamento</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-green-800">Fármaco:</h4>
                                    <p className="text-sm text-gray-700">Sustancia química pura
                                        que modifica funciones corporales (ej: paracetamol)</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Medicamento:</h4>
                                    <p className="text-sm text-gray-700">Preparación completa
                                        que contiene fármaco + excipientes (ej: Tylenol®)</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <div className="flex items-center mb-3">
                                <BsCalculator className="w-6 h-6 text-blue-600 mr-2"/>
                                <h3 className="text-xl font-bold text-blue-700">Dosis y
                                    Posología</h3>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-700">
                                    <strong>Dosis:</strong> Cantidad específica administrada en
                                    una ocasión</p>
                                <p className="text-sm text-gray-700">
                                    <strong>Posología:</strong> Régimen completo (dosis +
                                    frecuencia + duración)</p>
                                <div className="bg-blue-100 p-2 rounded mt-3">
                                    <p className="text-xs text-blue-800">
                                        <strong>Ejemplo:</strong> Aspirina 300mg (dosis) cada
                                        24h por 30 días (posología)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <div className="flex items-center mb-3">
                                <FiTrendingUp className="w-6 h-6 text-purple-600 mr-2"/>
                                <h3 className="text-xl font-bold text-purple-700">Farmacocinética
                                    vs Farmacodinamia</h3>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="font-semibold text-purple-800">Farmacocinética:</h4>
                                    <p className="text-sm text-gray-700">"Lo que el CUERPO le
                                        hace al fármaco"</p>
                                    <p className="text-xs text-purple-600">ADME: Absorción,
                                        Distribución, Metabolismo, Excreción</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-purple-800">Farmacodinamia:</h4>
                                    <p className="text-sm text-gray-700">"Lo que el FÁRMACO le
                                        hace al cuerpo"</p>
                                    <p className="text-xs text-purple-600">Mecanismos de acción,
                                        efectos terapéuticos y adversos</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                            <div className="flex items-center mb-3">
                                <TbMedicineSyrup className="w-6 h-6 text-orange-600 mr-2"/>
                                <h3 className="text-xl font-bold text-orange-700">Vías de
                                    Administración</h3>
                            </div>
                            <div className="space-y-2">
                                <p className="text-sm text-gray-700">
                                    <strong>Enteral:</strong> Oral, sublingual, rectal</p>
                                <p className="text-sm text-gray-700">
                                    <strong>Parenteral:</strong> IV, IM, SC, inhalatoria</p>
                                <p className="text-sm text-gray-700">
                                    <strong>Tópica:</strong> Cutánea, oftálmica, nasal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Proceso ADME */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">Proceso ADME -
                    El Viaje del Medicamento</h3>
                <div className="grid md:grid-cols-4 gap-4">
                    <div
                        className="bg-blue-100 p-4 rounded-lg text-center border border-blue-300">
                        <h4 className="font-bold text-blue-700 mb-2">A - ABSORCIÓN</h4>
                        <p className="text-sm text-gray-700 mb-2">Paso del fármaco desde el
                            sitio de administración al torrente sanguíneo</p>
                        <div className="text-xs text-blue-600">
                            <p>• Depende de la vía</p>
                            <p>• Solubilidad</p>
                            <p>• pH del medio</p>
                        </div>
                    </div>
                    <div
                        className="bg-green-100 p-4 rounded-lg text-center border border-green-300">
                        <h4 className="font-bold text-green-700 mb-2">D - DISTRIBUCIÓN</h4>
                        <p className="text-sm text-gray-700 mb-2">Transporte del fármaco a
                            diferentes tejidos y órganos</p>
                        <div className="text-xs text-green-600">
                            <p>• Flujo sanguíneo</p>
                            <p>• Unión a proteínas</p>
                            <p>• Barreras biológicas</p>
                        </div>
                    </div>
                    <div
                        className="bg-orange-100 p-4 rounded-lg text-center border border-orange-300">
                        <h4 className="font-bold text-orange-700 mb-2">M - METABOLISMO</h4>
                        <p className="text-sm text-gray-700 mb-2">Transformación química del
                            fármaco (principalmente hígado)</p>
                        <div className="text-xs text-orange-600">
                            <p>• Enzimas hepáticas</p>
                            <p>• Primer paso</p>
                            <p>• Metabolitos activos</p>
                        </div>
                    </div>
                    <div
                        className="bg-red-100 p-4 rounded-lg text-center border border-red-300">
                        <h4 className="font-bold text-red-700 mb-2">E - EXCRECIÓN</h4>
                        <p className="text-sm text-gray-700 mb-2">Eliminación del fármaco y
                            metabolitos del organismo</p>
                        <div className="text-xs text-red-600">
                            <p>• Riñones (principal)</p>
                            <p>• Hígado/bilis</p>
                            <p>• Pulmones</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Factores que modifican la respuesta */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Factores que Modifican la
                    Respuesta a Medicamentos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <FiUser className="w-5 h-5 mr-2"/>
                            Factores del Paciente
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span><strong>Edad:</strong> Neonatos y ancianos requieren ajustes</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span><strong>Peso:</strong> Muchas dosis se calculan por kg</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span><strong>Función renal/hepática:</strong> Afecta eliminación</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span><strong>Embarazo:</strong> Cambios fisiológicos importantes</span>
                            </li>
                            <li className="flex items-start">
                                <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span><strong>Genética:</strong> Metabolizadores rápidos/lentos</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                            <FiAlertTriangle className="w-5 h-5 mr-2"/>
                            Factores Ambientales y Clínicos
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span><strong>Interacciones:</strong> Otros medicamentos, alimentos</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span><strong>Estado clínico:</strong> Shock, fiebre, deshidratación</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span><strong>Tolerancia:</strong> Disminución de efecto con uso repetido</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span><strong>Cumplimiento:</strong> Adherencia al tratamiento</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span><strong>Hora de administración:</strong> Ritmos circadianos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Principios clave para paramédicos */}
            <div
                className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Principios Clave para Paramédicos
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                        <FaShieldAlt className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-blue-700">SEGURIDAD PRIMERO</h4>
                        <p className="text-sm text-gray-700">Verificar siempre antes de
                            administrar</p>
                    </div>
                    <div className="text-center">
                        <MdTimer className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-orange-700">TIEMPO CRÍTICO</h4>
                        <p className="text-sm text-gray-700">Algunos medicamentos salvan vidas
                            en minutos</p>
                    </div>
                    <div className="text-center">
                        <TbReportMedical className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-green-700">DOCUMENTACIÓN</h4>
                        <p className="text-sm text-gray-700">Registro preciso es esencial</p>
                    </div>
                </div>
            </div>
        </div>
    );
}