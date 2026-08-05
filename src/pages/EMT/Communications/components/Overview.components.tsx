import {FaClock, FaComments, FaUserMd} from "react-icons/fa";
import {AiOutlineAudit} from "react-icons/ai";
import {MdFeedback} from "react-icons/md";
import {HiSpeakerphone} from "react-icons/hi";
import {BsFileText} from "react-icons/bs";

export default function Overview() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué es crucial la
                    comunicación efectiva?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    En emergencias médicas, la comunicación puede ser la diferencia entre la vida y la muerte. Un
                    mensaje mal transmitido,
                    información omitida o documentación deficiente pueden resultar en errores de tratamiento, retrasos
                    en la atención o
                    complicaciones legales graves.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-blue-700">
                                <strong>Estadística clave:</strong> El 80% de los errores médicos se relacionan con
                                problemas de comunicación entre el personal de salud.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-green-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <FaComments className="w-6 h-6 text-green-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-green-700">Tipos de comunicación en campo</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span
                                className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Verbal:</strong> Palabras habladas, tono de voz, claridad del mensaje.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span
                                className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>No verbal:</strong> Lenguaje corporal, gestos, expresiones faciales.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span
                                className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Escrita:</strong> Documentación, FRAP, reportes médicos.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span
                                className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Tecnológica:</strong> Radio, celular, sistemas digitales.
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <AiOutlineAudit className="w-6 h-6 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-blue-700">Herramientas de evaluación estructurada</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-3 rounded">
                            <strong className="text-blue-800">SAMPLE (Historia clínica):</strong>
                            <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• <strong>S</strong>ignos y síntomas</li>
                                <li>• <strong>A</strong>lergias conocidas</li>
                                <li>• <strong>M</strong>edicamentos actuales</li>
                                <li>• <strong>P</strong>asado médico relevante</li>
                                <li>• <strong>L</strong>ast meal (última comida)</li>
                                <li>• <strong>E</strong>ventos que llevaron al incidente</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                            <strong className="text-blue-800">OPQRST (Evaluación del dolor):</strong>
                            <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• <strong>O</strong>nset (inicio del dolor)</li>
                                <li>• <strong>P</strong>rovocación/paliación</li>
                                <li>• <strong>Q</strong>uality (calidad del dolor)</li>
                                <li>• <strong>R</strong>adiation (irradiación)</li>
                                <li>• <strong>S</strong>everity (severidad 1-10)</li>
                                <li>• <strong>T</strong>iming (duración y patrón)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                    <MdFeedback className="mr-2"/>
                    Principios de comunicación efectiva (4 C's)
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <FaClock className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Clara</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Mensaje fácil de entender, sin ambigüedades. Usar terminología apropiada para la audiencia.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <HiSpeakerphone className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Concisa</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Transmitir información esencial sin datos irrelevantes. Tiempo es crítico en emergencias.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <BsFileText className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Completa</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Incluir toda la información relevante para la toma de decisiones clínicas.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <FaUserMd className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Cortés</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Mantener respeto y profesionalismo, especialmente en situaciones de estrés.
                        </p>
                    </div>
                </div>
            </div>

            {/* Poblaciones especiales */}
            <div className="bg-white border border-purple-200 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                    <FaComments className="mr-2"/>
                    Comunicación con poblaciones especiales
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <strong className="text-purple-800">Adultos Mayores:</strong>
                        <ul className="text-sm text-purple-700 mt-2 space-y-1">
                            <li>• Llame al paciente por su apellido (ej. Sr. Smith) a menos que pida lo contrario.</li>
                            <li>• No asuma que están confundidos o sordos por defecto.</li>
                            <li>• Hable despacio, claro y de frente; no aumente el volumen si no hay pérdida auditiva confirmada.</li>
                            <li>• Tenga paciencia para que respondan.</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <strong className="text-purple-800">Niños:</strong>
                        <ul className="text-sm text-purple-700 mt-2 space-y-1">
                            <li>• Colóquese a la altura de sus ojos.</li>
                            <li>• Sea honesto; los niños detectan mentiras. (Ej. "Esto va a doler un poco").</li>
                            <li>• Permita que los padres se queden cerca si ayudan, o que el niño tenga un juguete familiar.</li>
                            <li>• Respete su pudor, especialmente en adolescentes.</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <strong className="text-purple-800">Dificultades Auditivas o Visuales:</strong>
                        <ul className="text-sm text-purple-700 mt-2 space-y-1">
                            <li>• <strong>Auditivas:</strong> Tenga papel y lápiz, colóquese de frente para lectura de labios, aprenda señas básicas (ayuda, enfermo). Nunca grite.</li>
                            <li>• <strong>Visuales:</strong> Explique cada paso detalladamente antes de hacerlo. Mantenga contacto físico constante. Si tiene perro guía, intente transportarlo o haga arreglos.</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <strong className="text-purple-800">Pacientes que no hablan español:</strong>
                        <ul className="text-sm text-purple-700 mt-2 space-y-1">
                            <li>• Use preguntas simples y señale partes del cuerpo.</li>
                            <li>• Evite términos médicos complejos.</li>
                            <li>• Busque un intérprete (familiar, testigo) o use apps de traducción.</li>
                            <li>• Hablar más fuerte no ayuda a la comprensión del idioma.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Tip para paramédicos</h3>
                <p className="text-green-700">
                    <strong>Regla del "Confirm-Back":</strong> Siempre confirma que el receptor entendió tu mensaje
                    repitiendo la información crítica.
                    En radio: "Centro de comando, confirma que recibiste: paciente masculino, 45 años, dolor torácico,
                    ETA 10 minutos".
                </p>
            </div>
        </div>
    );
}