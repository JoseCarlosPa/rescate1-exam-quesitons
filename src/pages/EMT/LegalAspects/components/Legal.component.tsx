import {FaExclamationTriangle, FaGavel, FaUserMd} from "react-icons/fa";
import {AiOutlineWarning} from "react-icons/ai";
import {BsShieldCheck} from "react-icons/bs";

export default function Legal() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios
                legales en la atención prehospitalaria</h2>
            <p className="text-gray-600 mb-6">
                Como TAMP, debes comprender las implicaciones legales de cada acción. La
                ignorancia de la ley no es excusa válida ante tribunales.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Deber de actuar */}
                <div
                    className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaUserMd className="w-8 h-8 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">Deber de Actuar</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Obligación legal y moral de prestar atención médica cuando estás en
                        servicio activo.
                    </p>
                    <div className="bg-blue-50 p-3 rounded">
                        <strong className="text-blue-800">Condiciones:</strong>
                        <ul className="text-sm text-blue-700 mt-1">
                            <li>• Estar en servicio o responder a llamada</li>
                            <li>• Tener la competencia para actuar</li>
                            <li>• Condiciones seguras para intervenir</li>
                            <li>• No abandonar una vez iniciada la atención</li>
                        </ul>
                    </div>
                </div>

                {/* Negligencia */}
                <div
                    className="bg-white border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                        <h3 className="text-xl font-bold text-red-700">Negligencia Médica</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Falta de cuidado que resulta en daño al paciente por no seguir
                        estándares profesionales.
                    </p>
                    <div className="bg-red-50 p-3 rounded">
                        <strong className="text-red-800">4 elementos legales:</strong>
                        <ul className="text-sm text-red-700 mt-1">
                            <li>• <strong>Deber:</strong> Obligación de cuidar</li>
                            <li>• <strong>Incumplimiento:</strong> No cumplir estándar</li>
                            <li>• <strong>Daño:</strong> Lesión real al paciente</li>
                            <li>• <strong>Causalidad:</strong> El incumplimiento causó el daño
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Abandono */}
                <div
                    className="bg-white border border-orange-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <AiOutlineWarning className="w-8 h-8 text-orange-500 mr-3"/>
                        <h3 className="text-xl font-bold text-orange-700">Abandono del
                            Paciente</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Discontinuar el cuidado sin transferir apropiadamente la responsabilidad
                        a personal competente.
                    </p>
                    <div className="bg-orange-50 p-3 rounded">
                        <strong className="text-orange-800">Para evitar abandono:</strong>
                        <ul className="text-sm text-orange-700 mt-1">
                            <li>• Transferir a personal de igual o mayor nivel</li>
                            <li>• Documentar la transferencia de cuidado</li>
                            <li>• Asegurar continuidad en la atención</li>
                            <li>• Obtener autorización médica para terminar</li>
                        </ul>
                    </div>
                </div>

                {/* Confidencialidad */}
                <div
                    className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <BsShieldCheck className="w-8 h-8 text-purple-500 mr-3"/>
                        <h3 className="text-xl font-bold text-purple-700">Confidencialidad</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Protección de la información médica del paciente según la Ley Federal de
                        Protección de Datos.
                    </p>
                    <div className="bg-purple-50 p-3 rounded">
                        <strong className="text-purple-800">Excepciones legales:</strong>
                        <ul className="text-sm text-purple-700 mt-1">
                            <li>• Orden judicial</li>
                            <li>• Amenaza a la salud pública</li>
                            <li>• Sospecha de abuso infantil</li>
                            <li>• Heridas por arma de fuego</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FaGavel className="mr-2"/>
                    Muerte y criterios de no reanimación
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-2">🔴 Signos evidentes de
                            muerte</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                            <li>• <strong>Rigor mortis:</strong> Rigidez cadavérica</li>
                            <li>• <strong>Livor mortis:</strong> Manchas de sangre gravitacional
                            </li>
                            <li>• <strong>Decapitación:</strong> Separación cabeza-cuerpo</li>
                            <li>• <strong>Descomposición:</strong> Putrefacción evidente</li>
                            <li>• <strong>Quemaduras incompatibles:</strong> &gt;90% superficie
                                corporal
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-2">⚡ Criterios de
                            reanimación</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                            <li>• <strong>Ausencia de signos evidentes</strong> de muerte</li>
                            <li>• <strong>Evento presenciado</strong> o tiempo de paro &lt;10
                                min
                            </li>
                            <li>• <strong>Causa potencialmente reversible</strong></li>
                            <li>• <strong>Sin documento</strong> de voluntad anticipada</li>
                            <li>• <strong>Condiciones seguras</strong> para la reanimación</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <FaUserMd className="mr-2 text-indigo-500"/>
                    Instrucciones Anticipadas y Reportes Obligatorios
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                        <h4 className="font-semibold text-gray-800 mb-2">📄 Instrucciones Anticipadas y ONR</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                            <li>• <strong>ONR:</strong> Orden de No Reanimar (debe ser clara, firmada por paciente/tutor y médico).</li>
                            <li>• <strong>Poder Notarial:</strong> Sustitutos para tomar decisiones si el paciente se incapacita.</li>
                            <li>• Obligación de proveer medidas de confort (oxígeno, alivio) a pacientes que no están en paro.</li>
                            <li>• Ante la duda o falta del documento físico: iniciar reanimación.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
                        <h4 className="font-semibold text-gray-800 mb-2">📞 Reportes Obligatorios</h4>
                        <ul className="text-gray-700 text-sm space-y-1">
                            <li>• <strong>Abuso:</strong> Infantil, a personas mayores o grupos vulnerables.</li>
                            <li>• <strong>Delitos:</strong> Heridas por arma de fuego, arma blanca.</li>
                            <li>• <strong>Salud Pública:</strong> Enfermedades transmisibles y nacimientos (alumbramiento fuera de hospital).</li>
                            <li>• <strong>Escena del crimen:</strong> Informar y preservar evidencia sin retrasar la atención.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Asalto, Agresión y Secuestro */}
                <div
                    className="bg-white border border-yellow-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <AiOutlineWarning className="w-8 h-8 text-yellow-500 mr-3"/>
                        <h3 className="text-xl font-bold text-yellow-700">Asalto, Agresión y Secuestro</h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                        Proporcionar atención sin consentimiento puede derivar en cargos graves, tanto civiles como penales.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded">
                        <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                            <li>• <strong>Asalto:</strong> Poner a una persona en estado de temor a un daño corporal.</li>
                            <li>• <strong>Agresión:</strong> Tocar ilegalmente a una persona (ej. tratar sin consentimiento).</li>
                            <li>• <strong>Secuestro / Privación ilegal:</strong> Transportar en contra de su voluntad.</li>
                        </ul>
                    </div>
                </div>

                {/* Leyes del Buen Samaritano */}
                <div
                    className="bg-white border border-teal-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <BsShieldCheck className="w-8 h-8 text-teal-500 mr-3"/>
                        <h3 className="text-xl font-bold text-teal-700">Leyes del Buen Samaritano</h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                        Protegen a quienes brindan asistencia de buena fe sin esperar compensación, aunque con límites.
                    </p>
                    <div className="bg-teal-50 p-3 rounded">
                        <strong className="text-teal-800 text-sm">Para estar protegido se requiere:</strong>
                        <ul className="text-sm text-teal-700 mt-1 space-y-1">
                            <li>• Actuar de buena fe al prestar atención.</li>
                            <li>• Sin expectativa de compensación.</li>
                            <li>• Actuar dentro del alcance del entrenamiento.</li>
                            <li>• No actuar de manera negligente grave (descuido irresponsable).</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 Tabla comparativa de
                    responsabilidades legales</h3>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Concepto</th>
                        <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Definición</th>
                        <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Consecuencias</th>
                        <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Prevención</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium text-red-700">Negligencia</td>
                        <td className="py-3 px-4 border-b text-sm">No actuar según estándares
                            profesionales
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Demanda civil, penal, pérdida
                            de licencia
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Seguir protocolos, educación
                            continua
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium text-orange-700">Abandono</td>
                        <td className="py-3 px-4 border-b text-sm">Dejar paciente sin
                            transferencia adecuada
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Demanda por abandono, sanción
                            ética
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Transferencia formal,
                            documentación
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium text-purple-700">Violación
                            confidencialidad
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Divulgar información médica
                            sin autorización
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Multa, sanción, demanda
                            privacidad
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Proteger datos, limitar
                            divulgación
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium text-blue-700">Falta de
                            consentimiento
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Tratar sin autorización del
                            paciente competente
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Agresión, violación
                            autonomía
                        </td>
                        <td className="py-3 px-4 border-b text-sm">Obtener consentimiento,
                            emergencia implícita
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}