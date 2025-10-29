import {FaExclamationTriangle, FaPills, FaShieldAlt} from "react-icons/fa";
import {FiClock, FiUser} from "react-icons/fi";
import {BsCalculator} from "react-icons/bs";
import {TbMedicineSyrup, TbReportMedical} from "react-icons/tb";

export default function Rights(){
    return(
        <div className="space-y-8">
            {/* Introducción a los 6 correctos */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaShieldAlt className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Los 6 Correctos - Tu
                        Protocolo de Seguridad</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Los "6 Correctos" son el <strong>estándar de oro</strong> para la
                    administración segura de medicamentos.
                    <span className="text-red-600 font-semibold"> Cada verificación puede prevenir errores fatales</span>.
                </p>
                <div className="mt-4 bg-white p-4 rounded shadow-sm">
                    <p className="text-sm text-gray-700">
                        <strong>Dato importante:</strong> Los errores de medicación causan
                        aproximadamente 44,000 muertes anuales
                        en hospitales de EE.UU. La verificación sistemática es crucial.
                    </p>
                </div>
            </div>

            {/* Los 6 correctos visuales */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Protocolo de
                    Verificación Sistemática</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        className="bg-blue-50 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition">
                        <div className="text-center">
                            <FiUser className="w-12 h-12 text-blue-600 mx-auto mb-3"/>
                            <h4 className="text-xl font-bold text-blue-700 mb-3">1. PACIENTE
                                CORRECTO</h4>
                            <div className="text-left space-y-2 text-sm text-gray-700">
                                <p><strong>Verificar:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Nombre completo del paciente</li>
                                    <li>Fecha de nacimiento si es posible</li>
                                    <li>Identificación por pulsera si disponible</li>
                                    <li>Confirmación verbal con familiar</li>
                                </ul>
                                <div className="bg-blue-100 p-2 rounded mt-3">
                                    <p className="text-xs font-semibold">¡NUNCA asumas la
                                        identidad!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition">
                        <div className="text-center">
                            <FaPills className="w-12 h-12 text-green-600 mx-auto mb-3"/>
                            <h4 className="text-xl font-bold text-green-700 mb-3">2. MEDICAMENTO
                                CORRECTO</h4>
                            <div className="text-left space-y-2 text-sm text-gray-700">
                                <p><strong>Verificar:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Nombre comercial Y genérico</li>
                                    <li>Concentración del medicamento</li>
                                    <li>Fecha de vencimiento</li>
                                    <li>Integridad del envase</li>
                                    <li>Aspecto del medicamento</li>
                                </ul>
                                <div className="bg-green-100 p-2 rounded mt-3">
                                    <p className="text-xs font-semibold">Lee la etiqueta 3
                                        veces</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-purple-50 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition">
                        <div className="text-center">
                            <BsCalculator className="w-12 h-12 text-purple-600 mx-auto mb-3"/>
                            <h4 className="text-xl font-bold text-purple-700 mb-3">3. DOSIS
                                CORRECTA</h4>
                            <div className="text-left space-y-2 text-sm text-gray-700">
                                <p><strong>Calcular y verificar:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Peso del paciente</li>
                                    <li>Dosis por kg si aplica</li>
                                    <li>Cálculo matemático correcto</li>
                                    <li>Unidades de medida apropiadas</li>
                                    <li>Verificación con otro proveedor</li>
                                </ul>
                                <div className="bg-purple-100 p-2 rounded mt-3">
                                    <p className="text-xs font-semibold">¡Doble verificación en
                                        cálculos!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-lg transition">
                        <div className="text-center">
                            <FiClock className="w-12 h-12 text-orange-600 mx-auto mb-3"/>
                            <h4 className="text-xl font-bold text-orange-700 mb-3">4. HORA
                                CORRECTA</h4>
                            <div className="text-left space-y-2 text-sm text-gray-700">
                                <p><strong>Considerar:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Indicación de emergencia</li>
                                    <li>Tiempo desde última dosis</li>
                                    <li>Inicio de síntomas</li>
                                    <li>Interacciones temporales</li>
                                    <li>Condición clínica actual</li>
                                </ul>
                                <div className="bg-orange-100 p-2 rounded mt-3">
                                    <p className="text-xs font-semibold">En emergencias: AHORA
                                        es usualmente correcto</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-red-50 border border-red-200 rounded-lg p-6 hover:shadow-lg transition">
                        <div className="text-center">
                            <TbMedicineSyrup className="w-12 h-12 text-red-600 mx-auto mb-3"/>
                            <h4 className="text-xl font-bold text-red-700 mb-3">5. VÍA
                                CORRECTA</h4>
                            <div className="text-left space-y-2 text-sm text-gray-700">
                                <p><strong>Confirmar:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Vía prescrita o protocolizada</li>
                                    <li>Acceso vascular funcional</li>
                                    <li>Integridad del sitio</li>
                                    <li>Compatibilidad de la vía</li>
                                    <li>Preparación estéril adecuada</li>
                                </ul>
                                <div className="bg-red-100 p-2 rounded mt-3">
                                    <p className="text-xs font-semibold">IV ≠ IM ≠ SC: ¡Son
                                        diferentes!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                        <div className="text-center">
                            <TbReportMedical className="w-12 h-12 text-gray-600 mx-auto mb-3"/>
                            <h4 className="text-xl font-bold text-gray-700 mb-3">6. REGISTRO
                                CORRECTO</h4>
                            <div className="text-left space-y-2 text-sm text-gray-700">
                                <p><strong>Documentar:</strong></p>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Medicamento y dosis exacta</li>
                                    <li>Hora de administración</li>
                                    <li>Vía utilizada</li>
                                    <li>Respuesta del paciente</li>
                                    <li>Efectos adversos si los hay</li>
                                    <li>Nombre del administrador</li>
                                </ul>
                                <div className="bg-gray-100 p-2 rounded mt-3">
                                    <p className="text-xs font-semibold">Si no está documentado,
                                        no se hizo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla resumen mejorada */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Checklist Rápido - Los 6
                    Correctos</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="py-3 px-4 border text-left font-bold">✓</th>
                            <th className="py-3 px-4 border text-left font-bold">Correcto</th>
                            <th className="py-3 px-4 border text-left font-bold">Pregunta
                                Clave
                            </th>
                            <th className="py-3 px-4 border text-left font-bold">Acción de
                                Verificación
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-blue-50">
                            <td className="py-3 px-4 border text-center">☐</td>
                            <td className="py-3 px-4 border font-medium text-blue-700">1.
                                Paciente
                            </td>
                            <td className="py-3 px-4 border">"¿Es este el paciente correcto?"
                            </td>
                            <td className="py-3 px-4 border">Verificar identidad por al menos 2
                                métodos
                            </td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="py-3 px-4 border text-center">☐</td>
                            <td className="py-3 px-4 border font-medium text-green-700">2.
                                Medicamento
                            </td>
                            <td className="py-3 px-4 border">"¿Es el medicamento correcto?"</td>
                            <td className="py-3 px-4 border">Leer etiqueta 3 veces, verificar
                                vencimiento
                            </td>
                        </tr>
                        <tr className="hover:bg-purple-50">
                            <td className="py-3 px-4 border text-center">☐</td>
                            <td className="py-3 px-4 border font-medium text-purple-700">3.
                                Dosis
                            </td>
                            <td className="py-3 px-4 border">"¿Es la dosis correcta?"</td>
                            <td className="py-3 px-4 border">Calcular según peso/edad, doble
                                verificación
                            </td>
                        </tr>
                        <tr className="hover:bg-orange-50">
                            <td className="py-3 px-4 border text-center">☐</td>
                            <td className="py-3 px-4 border font-medium text-orange-700">4.
                                Hora
                            </td>
                            <td className="py-3 px-4 border">"¿Es el momento adecuado?"</td>
                            <td className="py-3 px-4 border">Evaluar indicación y urgencia
                                clínica
                            </td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="py-3 px-4 border text-center">☐</td>
                            <td className="py-3 px-4 border font-medium text-red-700">5. Vía
                            </td>
                            <td className="py-3 px-4 border">"¿Es la vía correcta?"</td>
                            <td className="py-3 px-4 border">Confirmar protocolo y
                                permeabilidad
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border text-center">☐</td>
                            <td className="py-3 px-4 border font-medium text-gray-700">6.
                                Registro
                            </td>
                            <td className="py-3 px-4 border">"¿Documenté todo correctamente?"
                            </td>
                            <td className="py-3 px-4 border">Registrar inmediatamente
                                post-administración
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Casos de error comunes */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                    Errores Comunes a Evitar
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Errores de
                            identificación:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Asumir identidad sin verificar</li>
                            <li>• Confundir pacientes con nombres similares</li>
                            <li>• No confirmar con familiares cuando es posible</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Errores de
                            medicamento:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Confundir medicamentos con nombres parecidos</li>
                            <li>• No verificar concentración</li>
                            <li>• Usar medicamentos vencidos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Errores de
                            cálculo:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Error en conversión de unidades</li>
                            <li>• Cálculo incorrecto por peso</li>
                            <li>• No ajustar por edad pediátrica</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Errores de vía:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Administrar IV cuando debe ser IM</li>
                            <li>• No verificar permeabilidad venosa</li>
                            <li>• Contaminación del sitio de inyección</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}