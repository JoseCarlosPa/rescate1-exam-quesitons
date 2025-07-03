import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Communications.questions.ts";
import {LuRadioTower} from "react-icons/lu";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdRecordVoiceOver, MdHeadset, MdFeedback} from "react-icons/md";
import {BsBookHalf, BsFileText, BsChatDots} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaMicrophone, FaComments, FaFileAlt, FaUserMd, FaClock} from "react-icons/fa";
import {HiDocumentText, HiSpeakerphone} from "react-icons/hi";
import {RiFileList3Line, RiUserVoiceLine} from "react-icons/ri";
import {AiOutlineAudit, AiOutlineWarning} from "react-icons/ai";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function Communications() {
    const [activeTab, setActiveTab] = useState<'overview' | 'radio' | 'doc' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <SEOWrapper
            title="Comunicaciones y Documentación para TAMP | Curso EMT"
            description="Aprende sobre comunicación efectiva, uso de radio, documentación (FRAP) y casos prácticos esenciales para Técnicos en Atención Médica Prehospitalaria. Incluye recursos, ejemplos y preguntas frecuentes."
            keywords="comunicación EMT, radio prehospitalaria, documentación FRAP, reporte verbal, TAMP, curso emergencias médicas, casos prácticos, comunicación en salud"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div
                    className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <LuRadioTower className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Comunicaciones y documentación</h1>
                            <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.EMT}
                                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                    <p className="text-lg">Regresar</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/communications/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1QLxi0ZwT-HKVApjDc507J36D4nPRH8TO/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://www.ahrq.gov/teamstepps-program/curriculum/communication/tools/sbar.html"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsChatDots className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Herramienta SBAR</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1OTcc62vhqmZ3OGLya7OItQL6FNwImOnm/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                        </div>

                        {/* Quiz rápido */}
                        {showQuickQuiz && (
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus
                                    conocimientos en comunicación</h3>
                                <button
                                    onClick={() => setShowQuickQuiz(false)}
                                    className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                                    Cerrar Quiz
                                </button>
                            </div>
                        )}

                        {/* Navegación por pestañas */}
                        <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                            <nav className="flex space-x-2 overflow-x-auto">
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'overview'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('radio')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'radio'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Comunicación en Radio
                                </button>
                                <button
                                    onClick={() => setActiveTab('doc')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'doc'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Documentación
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Prácticos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué es crucial la comunicación efectiva?</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            En emergencias médicas, la comunicación puede ser la diferencia entre la vida y la muerte. Un mensaje mal transmitido, 
                                            información omitida o documentación deficiente pueden resultar en errores de tratamiento, retrasos en la atención o 
                                            complicaciones legales graves.
                                        </p>
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                                            <div className="flex">
                                                <div className="ml-3">
                                                    <p className="text-sm text-blue-700">
                                                        <strong>Estadística clave:</strong> El 80% de los errores médicos se relacionan con problemas de comunicación entre el personal de salud.
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
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Verbal:</strong> Palabras habladas, tono de voz, claridad del mensaje.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>No verbal:</strong> Lenguaje corporal, gestos, expresiones faciales.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Escrita:</strong> Documentación, FRAP, reportes médicos.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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

                                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
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

                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Tip para paramédicos</h3>
                                        <p className="text-green-700">
                                            <strong>Regla del "Confirm-Back":</strong> Siempre confirma que el receptor entendió tu mensaje repitiendo la información crítica. 
                                            En radio: "Centro de comando, confirma que recibiste: paciente masculino, 45 años, dolor torácico, ETA 10 minutos".
                                        </p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'radio' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicación por radio y reporte verbal</h2>
                                    <p className="text-gray-600 mb-6">
                                        La radio es tu línea de vida en campo. Una comunicación efectiva por radio puede acelerar el tratamiento y salvar vidas.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Técnica de radio */}
                                        <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaMicrophone className="w-8 h-8 text-blue-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">Técnica de comunicación por radio</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-blue-50 p-3 rounded">
                                                    <strong className="text-blue-800">Antes de transmitir:</strong>
                                                    <ul className="text-sm text-blue-700 mt-1">
                                                        <li>• Organiza mentalmente tu mensaje</li>
                                                        <li>• Presiona PTT (Push-To-Talk) y espera 1 segundo</li>
                                                        <li>• Identifícate claramente</li>
                                                        <li>• Confirma que el canal está libre</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-50 p-3 rounded">
                                                    <strong className="text-blue-800">Durante la transmisión:</strong>
                                                    <ul className="text-sm text-blue-700 mt-1">
                                                        <li>• Habla claro y despacio</li>
                                                        <li>• Mantén el micrófono 2-3 cm de la boca</li>
                                                        <li>• Usa frases cortas y pausas</li>
                                                        <li>• Evita muletillas ("ehh", "umm")</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Estructura SBAR */}
                                        <div className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <BsChatDots className="w-8 h-8 text-green-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-green-700">Estructura SBAR para reportes</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-green-50 p-3 rounded">
                                                    <strong className="text-green-800">S - Situación:</strong>
                                                    <p className="text-sm text-green-700 mt-1">
                                                        Identifica al paciente, ubicación, y queja principal en una frase.
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 p-3 rounded">
                                                    <strong className="text-green-800">B - Background (Antecedentes):</strong>
                                                    <p className="text-sm text-green-700 mt-1">
                                                        Historia médica relevante, medicamentos, alergias (SAMPLE).
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 p-3 rounded">
                                                    <strong className="text-green-800">A - Assessment (Evaluación):</strong>
                                                    <p className="text-sm text-green-700 mt-1">
                                                        Signos vitales, hallazgos físicos, impresión clínica.
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 p-3 rounded">
                                                    <strong className="text-green-800">R - Recommendation (Recomendación):</strong>
                                                    <p className="text-sm text-green-700 mt-1">
                                                        Tratamiento realizado, ETA, solicitud de recursos adicionales.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-6">
                                        <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                                            <MdHeadset className="mr-2"/>
                                            Ejemplo de reporte de radio completo
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                                            <div className="space-y-2 text-sm">
                                                <p><strong className="text-purple-800">TAMP:</strong> <span className="text-gray-700">"Hospital Central, ambulancia 15"</span></p>
                                                <p><strong className="text-purple-800">Hospital:</strong> <span className="text-gray-700">"Ambulancia 15, Hospital Central, adelante"</span></p>
                                                <p><strong className="text-purple-800">TAMP:</strong> <span className="text-gray-700">"Hospital Central, tenemos masculino de 58 años con dolor torácico opresivo de 30 minutos de evolución."</span></p>
                                                <p className="ml-4 text-gray-600">"Antecedentes: hipertensión, diabetes, alérgico a penicilina, toma metformina y enalapril."</p>
                                                <p className="ml-4 text-gray-600">"Signos vitales: FC 110, PA 160/95, FR 24, SatO2 94% ambiente. Paciente diaforético, dolor 8/10."</p>
                                                <p className="ml-4 text-gray-600">"Administrado oxígeno 4L, nitroglicerina sublingual, aspirina 325mg. ETA 8 minutos."</p>
                                                <p><strong className="text-purple-800">Hospital:</strong> <span className="text-gray-700">"Copiado ambulancia 15, activando protocolo IAM, trauma 1 preparado"</span></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Errores comunes */}
                                        <div className="bg-white border border-red-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <AiOutlineWarning className="w-6 h-6 text-red-500 mr-3"/>
                                                <h3 className="text-lg font-semibold text-red-700">Errores comunes a evitar</h3>
                                            </div>
                                            <ul className="space-y-2 text-red-700 text-sm">
                                                <li>• <strong>Hablar muy rápido</strong> - Reduce comprensión</li>
                                                <li>• <strong>Información innecesaria</strong> - Satura el canal</li>
                                                <li>• <strong>No confirmar recepción</strong> - Genera errores</li>
                                                <li>• <strong>Usar jerga o modismos</strong> - Confunde al receptor</li>
                                                <li>• <strong>Transmitir emociones</strong> - Mantener profesionalismo</li>
                                                <li>• <strong>Violar confidencialidad</strong> - Usar iniciales, no nombres</li>
                                            </ul>
                                        </div>

                                        {/* Códigos de radio */}
                                        <div className="bg-white border border-gray-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <MdRecordVoiceOver className="w-6 h-6 text-gray-500 mr-3"/>
                                                <h3 className="text-lg font-semibold text-gray-700">Códigos de radio básicos</h3>
                                            </div>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="font-medium">10-4:</span>
                                                    <span className="text-gray-600">Mensaje recibido/entendido</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">10-8:</span>
                                                    <span className="text-gray-600">En servicio/disponible</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">10-7:</span>
                                                    <span className="text-gray-600">Fuera de servicio</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">10-19:</span>
                                                    <span className="text-gray-600">Regresando a base</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">ETA:</span>
                                                    <span className="text-gray-600">Tiempo estimado de llegada</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">Code 3:</span>
                                                    <span className="text-gray-600">Emergencia (luces y sirena)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚡ Comunicación en situaciones críticas</h3>
                                        <p className="text-yellow-700 text-sm">
                                            <strong>En emergencias extremas:</strong> Usa lenguaje claro y directo. "EMERGENCIA, EMERGENCIA" para prioridad máxima. 
                                            Reporta estado del paciente, recursos necesarios y ETA. Mantén la calma en tu voz para transmitir confianza al equipo receptor.
                                        </p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'doc' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Documentación prehospitalaria y FRAP</h2>
                                    <p className="text-gray-600 mb-6">
                                        La documentación no es solo un requisito legal; es una herramienta que protege al paciente, al paramédico y mejora la continuidad de la atención.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Importancia del FRAP */}
                                        <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaFileAlt className="w-8 h-8 text-blue-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">¿Qué es el FRAP?</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Formato de Registro de Atención Prehospitalaria: documento oficial que registra toda la atención médica brindada.
                                            </p>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <strong className="text-blue-800">Funciones del FRAP:</strong>
                                                <ul className="text-sm text-blue-700 mt-1">
                                                    <li>• Continuidad de atención médica</li>
                                                    <li>• Protección legal del TAMP</li>
                                                    <li>• Registro para facturación</li>
                                                    <li>• Análisis de calidad de servicio</li>
                                                    <li>• Investigación y estadísticas</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Principios de documentación */}
                                        <div className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <HiDocumentText className="w-8 h-8 text-green-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-green-700">Principios de documentación</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-green-50 p-3 rounded">
                                                    <strong className="text-green-800">Las 6 C's de la documentación:</strong>
                                                    <ul className="text-sm text-green-700 mt-1 space-y-1">
                                                        <li>• <strong>Clara:</strong> Legible y comprensible</li>
                                                        <li>• <strong>Concisa:</strong> Información esencial</li>
                                                        <li>• <strong>Completa:</strong> Todos los datos relevantes</li>
                                                        <li>• <strong>Cronológica:</strong> Orden temporal correcto</li>
                                                        <li>• <strong>Correcta:</strong> Información precisa</li>
                                                        <li>• <strong>Confidencial:</strong> Proteger privacidad</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                                            <RiFileList3Line className="mr-2"/>
                                            Componentes esenciales del FRAP
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                                                    <strong className="text-yellow-800">Datos administrativos:</strong>
                                                    <ul className="text-sm text-yellow-700 mt-1">
                                                        <li>• Fecha y hora de llamada</li>
                                                        <li>• Ubicación del incidente</li>
                                                        <li>• Número de unidad y personal</li>
                                                        <li>• Tiempos de respuesta</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                                                    <strong className="text-yellow-800">Datos del paciente:</strong>
                                                    <ul className="text-sm text-yellow-700 mt-1">
                                                        <li>• Información demográfica</li>
                                                        <li>• Queja principal</li>
                                                        <li>• Historia clínica (SAMPLE)</li>
                                                        <li>• Signos vitales seriados</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                                                    <strong className="text-yellow-800">Evaluación clínica:</strong>
                                                    <ul className="text-sm text-yellow-700 mt-1">
                                                        <li>• Evaluación primaria (ABCDE)</li>
                                                        <li>• Evaluación secundaria</li>
                                                        <li>• Impresión diagnóstica</li>
                                                        <li>• Evolución del paciente</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                                                    <strong className="text-yellow-800">Tratamiento y destino:</strong>
                                                    <ul className="text-sm text-yellow-700 mt-1">
                                                        <li>• Intervenciones realizadas</li>
                                                        <li>• Medicamentos administrados</li>
                                                        <li>• Respuesta al tratamiento</li>
                                                        <li>• Hospital de destino</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Errores de documentación */}
                                        <div className="bg-white border border-red-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <AiOutlineWarning className="w-6 h-6 text-red-500 mr-3"/>
                                                <h3 className="text-lg font-semibold text-red-700">Errores graves a evitar</h3>
                                            </div>
                                            <ul className="space-y-2 text-red-700 text-sm">
                                                <li>• <strong>Información subjetiva:</strong> "Paciente parece borracho"</li>
                                                <li>• <strong>Abreviaturas no estándar:</strong> Usar solo abreviaturas aprobadas</li>
                                                <li>• <strong>Tachaduras ilegibles:</strong> Una línea, inicial y fecha</li>
                                                <li>• <strong>Espacios en blanco:</strong> Llenar todos los campos</li>
                                                <li>• <strong>Letra ilegible:</strong> Usar letra de molde clara</li>
                                                <li>• <strong>Demora en documentación:</strong> Documentar inmediatamente</li>
                                            </ul>
                                        </div>

                                        {/* Buenas prácticas */}
                                        <div className="bg-white border border-green-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <BsFileText className="w-6 h-6 text-green-500 mr-3"/>
                                                <h3 className="text-lg font-semibold text-green-700">Buenas prácticas</h3>
                                            </div>
                                            <ul className="space-y-2 text-green-700 text-sm">
                                                <li>• <strong>Información objetiva:</strong> "Paciente presenta aliento alcohólico"</li>
                                                <li>• <strong>Tiempos precisos:</strong> Usar formato 24 horas</li>
                                                <li>• <strong>Signos vitales completos:</strong> Incluir todos los parámetros</li>
                                                <li>• <strong>Citas textuales:</strong> Entre comillas para declaraciones</li>
                                                <li>• <strong>Correcciones apropiadas:</strong> Addendum si es necesario</li>
                                                <li>• <strong>Revisión final:</strong> Verificar antes de entregar</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                                            <RiUserVoiceLine className="mr-2"/>
                                            Documentación de situaciones especiales
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                                                <h4 className="font-semibold text-purple-800 mb-2">🚫 Rechazo de atención</h4>
                                                <ul className="text-sm text-purple-700 space-y-1">
                                                    <li>• Estado mental del paciente</li>
                                                    <li>• Riesgos explicados al paciente</li>
                                                    <li>• Testigos presentes</li>
                                                    <li>• Firma del paciente y testigos</li>
                                                    <li>• Cita textual del paciente</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                                                <h4 className="font-semibold text-purple-800 mb-2">💊 Administración de medicamentos</h4>
                                                <ul className="text-sm text-purple-700 space-y-1">
                                                    <li>• Nombre del medicamento</li>
                                                    <li>• Dosis exacta administrada</li>
                                                    <li>• Vía de administración</li>
                                                    <li>• Hora de administración</li>
                                                    <li>• Respuesta del paciente</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                                                <h4 className="font-semibold text-purple-800 mb-2">⚰️ Declaración de muerte</h4>
                                                <ul className="text-sm text-purple-700 space-y-1">
                                                    <li>• Signos evidentes de muerte</li>
                                                    <li>• Hora de confirmación</li>
                                                    <li>• Personal que declara</li>
                                                    <li>• Autoridades notificadas</li>
                                                    <li>• Preservación de la escena</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Recordatorio legal</h3>
                                        <p className="text-blue-700 text-sm">
                                            <strong>"Si no está documentado, no se hizo"</strong> - En términos legales, cualquier intervención no documentada 
                                            se considera como no realizada. Tu documentación puede ser la diferencia entre protección legal y responsabilidad civil.
                                        </p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                                        prácticos para análisis</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="p-5 bg-orange-50 rounded-lg shadow-sm mb-4">
                                            <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Error de
                                                comunicación en radio</h3>
                                            <p className="italic text-gray-600 mb-4">
                                                Un TAMP transmite un reporte de paciente politraumatizado, pero omite
                                                mencionar la saturación de oxígeno y el tratamiento administrado.
                                            </p>
                                            <div>
                                                <h4 className="font-medium mb-2">Errores:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Falta de información relevante para la recepción hospitalaria.
                                                    </li>
                                                    <li>Puede retrasar la preparación del equipo de salud.</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="p-5 bg-blue-50 rounded-lg shadow-sm mb-4">
                                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2:
                                                Documentación incompleta</h3>
                                            <p className="italic text-gray-600 mb-4">
                                                Un paciente rechaza el traslado, pero el TAMP no documenta la
                                                advertencia de riesgos ni obtiene la firma del paciente.
                                            </p>
                                            <div>
                                                <h4 className="font-medium mb-2">Consecuencias:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Riesgo legal para el TAMP y la institución.</li>
                                                    <li>No se protege adecuadamente al personal ante posibles
                                                        reclamaciones.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="p-5 bg-green-50 rounded-lg shadow-sm mb-4">
                                            <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3:
                                                Comunicación efectiva</h3>
                                            <p className="italic text-gray-600 mb-4">
                                                El equipo de ambulancia utiliza el sistema SAMPLE y OPQRST para obtener
                                                información precisa y transmite un reporte claro y completo al hospital.
                                            </p>
                                            <div>
                                                <h4 className="font-medium mb-2">Beneficios:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Mejor preparación del hospital para recibir al paciente.</li>
                                                    <li>Reducción de errores y mejora en la atención.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* FAQ Section */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({open}) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
                                                    <span>{faq.question}</span>
                                                    <ChevronUpIcon
                                                        className={`${
                                                            open ? "transform rotate-180" : ""
                                                        } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        </section>

                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición).
                                            Jones & Bartlett Learning.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-communications/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre comunicaciones en EMS</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-communications/"
                                               target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">JEMS - Sección de
                                            comunicaciones</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Canal de YouTube con videos educativos</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Medscape - Referencias médicas y calculadoras</li>
                                        <li>ALS Simulator - Escenarios de práctica</li>
                                        <li>Paramedicine - Guías clínicas y medicamentos</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

