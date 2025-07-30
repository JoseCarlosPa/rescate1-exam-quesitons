import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./LegalAspects.questions.ts";
import {IoMdBriefcase} from "react-icons/io";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdSecurity, MdHealthAndSafety, MdVerifiedUser} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf, BsShieldCheck, BsFileText} from "react-icons/bs";
import {FaGavel, FaHandshake, FaExclamationTriangle, FaUserMd, FaHeart} from "react-icons/fa";
import {RiGovernmentLine, RiFileList3Line} from "react-icons/ri";
import {HiDocumentText} from "react-icons/hi";
import {AiOutlineWarning} from "react-icons/ai";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function LegalAspects() {
    const [activeTab, setActiveTab] = useState<'overview' | 'legal' | 'consent' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <SEOWrapper
            title="Aspectos Médicos, Legales y Éticos para TAMP | Curso EMT"
            description="Aprende los fundamentos legales, éticos y médicos esenciales para Técnicos en Atención Médica Prehospitalaria. Incluye casos prácticos, recursos y preguntas frecuentes."
            keywords="aspectos legales EMT, ética médica, consentimiento informado, negligencia, abandono, TAMP, curso emergencias médicas, NOM-034-SSA3-2013, recertificación, FRAP"
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
                                <IoMdBriefcase className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Aspectos Médicos, Legales y Éticos</h1>
                            <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
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
                                to="/legal/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1a2LmZGb5lIg9ZN__5t0sspwiev13kUpj/edit?usp=sharing&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://www.gob.mx/cms/uploads/attachment/file/512076/NOM-034-SSA3-2013.pdf"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <RiGovernmentLine className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">NOM-034</p>
                            </a>
                            <a href="https://drive.google.com/file/d/185bZdYya7aQP9kIJvV-0xlBTRGgmjpoi/view?usp=drive_link"
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
                                    conocimientos legales</h3>
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
                                    onClick={() => setActiveTab('legal')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'legal'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Principios Legales
                                </button>
                                <button
                                    onClick={() => setActiveTab('consent')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'consent'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Consentimiento y Ética
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué son fundamentales los aspectos legales y éticos?</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Para un TAMP, conocer el marco legal y ético no es opcional: es una responsabilidad profesional que protege tanto al paciente como al paramédico. 
                                            Cada decisión en campo tiene implicaciones legales que pueden determinar el futuro profesional del técnico y la seguridad del paciente.
                                        </p>
                                        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                                            <div className="flex">
                                                <div className="ml-3">
                                                    <p className="text-sm text-red-700">
                                                        <strong>Punto crítico:</strong> Un error legal puede resultar en demandas civiles, penales, pérdida de certificación y daño a la reputación profesional.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white border border-blue-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <FaHeart className="w-6 h-6 text-blue-500 mr-3"/>
                                                <h3 className="text-xl font-semibold text-blue-700">Principios éticos fundamentales</h3>
                                            </div>
                                            <ul className="space-y-3 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Primum non nocere:</strong> "Lo primero es no dañar" - base de toda intervención médica.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Beneficencia:</strong> Actuar siempre en beneficio del paciente.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Autonomía:</strong> Respetar las decisiones del paciente competente.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Justicia:</strong> Tratar a todos los pacientes con equidad.
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-white border border-green-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <RiGovernmentLine className="w-6 h-6 text-green-500 mr-3"/>
                                                <h3 className="text-xl font-semibold text-green-700">Marco normativo mexicano</h3>
                                            </div>
                                            <ul className="space-y-3 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>NOM-034-SSA3-2013:</strong> Regulación de servicios de emergencias médicas.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Código Penal:</strong> Responsabilidad penal por negligencia médica.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>Ley General de Salud:</strong> Marco general de atención médica.
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <div>
                                                        <strong>FRAP:</strong> Obligatoriedad del registro de atención prehospitalaria.
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                                            <AiOutlineWarning className="mr-2 text-xl"/>
                                            Responsabilidades clave del TAMP
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                                <div className="flex items-center mb-2">
                                                    <MdVerifiedUser className="text-yellow-600 mr-2"/>
                                                    <strong className="text-yellow-800">Certificación vigente</strong>
                                                </div>
                                                <p className="text-sm text-yellow-700">
                                                    Mantener certificación actualizada y participar en educación continua cada 3 años.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                                <div className="flex items-center mb-2">
                                                    <HiDocumentText className="text-yellow-600 mr-2"/>
                                                    <strong className="text-yellow-800">Documentación completa</strong>
                                                </div>
                                                <p className="text-sm text-yellow-700">
                                                    Registrar toda intervención en FRAP de manera clara, completa y veraz.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                                <div className="flex items-center mb-2">
                                                    <BsShieldCheck className="text-yellow-600 mr-2"/>
                                                    <strong className="text-yellow-800">Protección de datos</strong>
                                                </div>
                                                <p className="text-sm text-yellow-700">
                                                    Mantener confidencialidad y proteger información médica del paciente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Tip profesional</h3>
                                        <p className="text-blue-700">
                                            "Cuando tengas dudas sobre un aspecto legal o ético, siempre prioriza la seguridad del paciente y consulta con supervisión médica. 
                                            Es mejor pedir orientación que enfrentar consecuencias legales por una decisión incorrecta."
                                        </p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'legal' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios legales en la atención prehospitalaria</h2>
                                    <p className="text-gray-600 mb-6">
                                        Como TAMP, debes comprender las implicaciones legales de cada acción. La ignorancia de la ley no es excusa válida ante tribunales.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Deber de actuar */}
                                        <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaUserMd className="w-8 h-8 text-blue-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">Deber de Actuar</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Obligación legal y moral de prestar atención médica cuando estás en servicio activo.
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
                                        <div className="bg-white border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-red-700">Negligencia Médica</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Falta de cuidado que resulta en daño al paciente por no seguir estándares profesionales.
                                            </p>
                                            <div className="bg-red-50 p-3 rounded">
                                                <strong className="text-red-800">4 elementos legales:</strong>
                                                <ul className="text-sm text-red-700 mt-1">
                                                    <li>• <strong>Deber:</strong> Obligación de cuidar</li>
                                                    <li>• <strong>Incumplimiento:</strong> No cumplir estándar</li>
                                                    <li>• <strong>Daño:</strong> Lesión real al paciente</li>
                                                    <li>• <strong>Causalidad:</strong> El incumplimiento causó el daño</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Abandono */}
                                        <div className="bg-white border border-orange-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <AiOutlineWarning className="w-8 h-8 text-orange-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-orange-700">Abandono del Paciente</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Discontinuar el cuidado sin transferir apropiadamente la responsabilidad a personal competente.
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
                                        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <BsShieldCheck className="w-8 h-8 text-purple-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-purple-700">Confidencialidad</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Protección de la información médica del paciente según la Ley Federal de Protección de Datos.
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

                                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-lg p-6 mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                                            <FaGavel className="mr-2"/>
                                            Muerte y criterios de no reanimación
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                                                <h4 className="font-semibold text-gray-800 mb-2">🔴 Signos evidentes de muerte</h4>
                                                <ul className="text-gray-700 text-sm space-y-1">
                                                    <li>• <strong>Rigor mortis:</strong> Rigidez cadavérica</li>
                                                    <li>• <strong>Livor mortis:</strong> Manchas de sangre gravitacional</li>
                                                    <li>• <strong>Decapitación:</strong> Separación cabeza-cuerpo</li>
                                                    <li>• <strong>Descomposición:</strong> Putrefacción evidente</li>
                                                    <li>• <strong>Quemaduras incompatibles:</strong> &gt;90% superficie corporal</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-gray-400">
                                                <h4 className="font-semibold text-gray-800 mb-2">⚡ Criterios de reanimación</h4>
                                                <ul className="text-gray-700 text-sm space-y-1">
                                                    <li>• <strong>Ausencia de signos evidentes</strong> de muerte</li>
                                                    <li>• <strong>Evento presenciado</strong> o tiempo de paro &lt;10 min</li>
                                                    <li>• <strong>Causa potencialmente reversible</strong></li>
                                                    <li>• <strong>Sin documento</strong> de voluntad anticipada</li>
                                                    <li>• <strong>Condiciones seguras</strong> para la reanimación</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 Tabla comparativa de responsabilidades legales</h3>
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
                                                    <td className="py-3 px-4 border-b text-sm">No actuar según estándares profesionales</td>
                                                    <td className="py-3 px-4 border-b text-sm">Demanda civil, penal, pérdida de licencia</td>
                                                    <td className="py-3 px-4 border-b text-sm">Seguir protocolos, educación continua</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-orange-700">Abandono</td>
                                                    <td className="py-3 px-4 border-b text-sm">Dejar paciente sin transferencia adecuada</td>
                                                    <td className="py-3 px-4 border-b text-sm">Demanda por abandono, sanción ética</td>
                                                    <td className="py-3 px-4 border-b text-sm">Transferencia formal, documentación</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-purple-700">Violación confidencialidad</td>
                                                    <td className="py-3 px-4 border-b text-sm">Divulgar información médica sin autorización</td>
                                                    <td className="py-3 px-4 border-b text-sm">Multa, sanción, demanda privacidad</td>
                                                    <td className="py-3 px-4 border-b text-sm">Proteger datos, limitar divulgación</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-blue-700">Falta de consentimiento</td>
                                                    <td className="py-3 px-4 border-b text-sm">Tratar sin autorización del paciente competente</td>
                                                    <td className="py-3 px-4 border-b text-sm">Agresión, violación autonomía</td>
                                                    <td className="py-3 px-4 border-b text-sm">Obtener consentimiento, emergencia implícita</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'consent' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consentimiento informado y ética profesional</h2>
                                    <p className="text-gray-600 mb-6">
                                        El consentimiento es la base legal que autoriza cualquier intervención médica. Su ausencia puede constituir agresión legal.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Tipos de consentimiento */}
                                        <div className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaHandshake className="w-8 h-8 text-green-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-green-700">Consentimiento Expreso</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Autorización clara, verbal o escrita, otorgada por el paciente después de recibir información.
                                            </p>
                                            <div className="bg-green-50 p-3 rounded">
                                                <strong className="text-green-800">Elementos requeridos:</strong>
                                                <ul className="text-sm text-green-700 mt-1">
                                                    <li>• Explicar naturaleza del tratamiento</li>
                                                    <li>• Informar riesgos y beneficios</li>
                                                    <li>• Mencionar alternativas disponibles</li>
                                                    <li>• Explicar consecuencias de no tratar</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Consentimiento implícito */}
                                        <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <MdHealthAndSafety className="w-8 h-8 text-blue-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">Consentimiento Implícito</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Se asume cuando existe emergencia que amenaza la vida y el paciente no puede dar consentimiento.
                                            </p>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <strong className="text-blue-800">Condiciones aplicables:</strong>
                                                <ul className="text-sm text-blue-700 mt-1">
                                                    <li>• Paciente inconsciente</li>
                                                    <li>• Emergencia que amenaza la vida</li>
                                                    <li>• No hay tiempo para obtener consentimiento</li>
                                                    <li>• Persona razonable daría consentimiento</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-50 to-red-50 border border-yellow-200 rounded-lg p-6 mb-6">
                                        <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                                            <AiOutlineWarning className="mr-2"/>
                                            Situaciones especiales de consentimiento
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                                <h4 className="font-semibold text-yellow-800 mb-2">👶 Menores de edad</h4>
                                                <ul className="text-sm text-yellow-700 space-y-1">
                                                    <li>• Requieren consentimiento de padres/tutores</li>
                                                    <li>• Emergencia: consentimiento implícito</li>
                                                    <li>• Menores emancipados: pueden consentir</li>
                                                    <li>• Embarazadas menores: casos especiales</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                                <h4 className="font-semibold text-yellow-800 mb-2">🧠 Incapacidad mental</h4>
                                                <ul className="text-sm text-yellow-700 space-y-1">
                                                    <li>• Evaluar capacidad de decisión</li>
                                                    <li>• Buscar representante legal</li>
                                                    <li>• Emergencia: actuar en beneficio</li>
                                                    <li>• Documentar evaluación</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                                                <h4 className="font-semibold text-yellow-800 mb-2">🍺 Intoxicación</h4>
                                                <ul className="text-sm text-yellow-700 space-y-1">
                                                    <li>• Evaluar nivel de alteración</li>
                                                    <li>• Si hay riesgo vital: actuar</li>
                                                    <li>• Buscar familiares responsables</li>
                                                    <li>• Documentar estado mental</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        {/* Rechazo de atención */}
                                        <div className="bg-white border border-red-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <FaExclamationTriangle className="w-6 h-6 text-red-500 mr-3"/>
                                                <h3 className="text-lg font-semibold text-red-700">Rechazo de Atención</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3 text-sm">
                                                El paciente competente tiene derecho a rechazar tratamiento, incluso si puede resultar en muerte.
                                            </p>
                                            <div className="bg-red-50 p-3 rounded">
                                                <strong className="text-red-800 text-sm">Protocolo de rechazo:</strong>
                                                <ol className="text-sm text-red-700 mt-1 space-y-1">
                                                    <li>1. Verificar competencia mental</li>
                                                    <li>2. Explicar riesgos claramente</li>
                                                    <li>3. Ofrecer alternativas</li>
                                                    <li>4. Documentar en FRAP detalladamente</li>
                                                    <li>5. Obtener firma si es posible</li>
                                                    <li>6. Dejar vía de contacto</li>
                                                </ol>
                                            </div>
                                        </div>

                                        {/* Documentación ética */}
                                        <div className="bg-white border border-purple-200 rounded-lg p-5">
                                            <div className="flex items-center mb-3">
                                                <BsFileText className="w-6 h-6 text-purple-500 mr-3"/>
                                                <h3 className="text-lg font-semibold text-purple-700">Documentación Ética</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3 text-sm">
                                                La documentación debe ser veraz, completa y proteger la confidencialidad del paciente.
                                            </p>
                                            <div className="bg-purple-50 p-3 rounded">
                                                <strong className="text-purple-800 text-sm">Principios de documentación:</strong>
                                                <ul className="text-sm text-purple-700 mt-1 space-y-1">
                                                    <li>• Escribir de forma legible</li>
                                                    <li>• Usar tinta, no lápiz</li>
                                                    <li>• Corregir errores apropiadamente</li>
                                                    <li>• Incluir fecha, hora y firma</li>
                                                    <li>• Ser objetivos, no subjetivos</li>
                                                    <li>• Proteger confidencialidad</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                                            <MdSecurity className="mr-2"/>
                                            Dilemas éticos comunes en campo
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                                                    <h4 className="font-semibold text-blue-800 mb-2">🤔 Caso: Recursos limitados</h4>
                                                    <p className="text-sm text-blue-700">
                                                        <strong>Dilema:</strong> Múltiples pacientes críticos, una ambulancia.<br/>
                                                        <strong>Principio ético:</strong> Triage - mayor beneficio para más personas.<br/>
                                                        <strong>Acción:</strong> Aplicar criterios de triage establecidos.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                                                    <h4 className="font-semibold text-blue-800 mb-2">👨‍👩‍👧‍👦 Caso: Familia vs paciente</h4>
                                                    <p className="text-sm text-blue-700">
                                                        <strong>Dilema:</strong> Familia exige información confidencial.<br/>
                                                        <strong>Principio ético:</strong> Confidencialidad del paciente.<br/>
                                                        <strong>Acción:</strong> Solo información general, proteger privacidad.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                                                    <h4 className="font-semibold text-green-800 mb-2">⛪ Caso: Creencias religiosas</h4>
                                                    <p className="text-sm text-green-700">
                                                        <strong>Dilema:</strong> Paciente rechaza transfusión por religión.<br/>
                                                        <strong>Principio ético:</strong> Autonomía y respeto a creencias.<br/>
                                                        <strong>Acción:</strong> Respetar decisión, buscar alternativas.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-4 rounded border-l-4 border-green-400">
                                                    <h4 className="font-semibold text-green-800 mb-2">⚖️ Caso: Menor vs padres</h4>
                                                    <p className="text-sm text-green-700">
                                                        <strong>Dilema:</strong> Menor necesita atención, padres se oponen.<br/>
                                                        <strong>Principio ético:</strong> Beneficencia hacia el menor.<br/>
                                                        <strong>Acción:</strong> Priorizar bienestar del menor, notificar autoridades.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos y análisis legal</h2>
                                    <p className="text-gray-600 mb-6">
                                        Analiza estos casos desde la perspectiva legal y ética. Cada situación presenta dilemas reales que enfrentan los TAMP en campo.
                                    </p>

                                    <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                                            <h3 className="text-xl font-semibold text-red-700">Caso: Negligencia por documentación deficiente</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> TAMP atiende paciente con dolor torácico intenso. Administra oxígeno y nitroglicerina, 
                                                pero no registra signos vitales iniciales ni finales en el FRAP. Solo anota "dolor torácico, trasladado estable". 
                                                Paciente fallece en hospital por IAM.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-red-800 mb-2">⚖️ Problemas legales identificados:</h4>
                                                <ul className="text-sm text-red-700 space-y-1">
                                                    <li>• Documentación inadecuada e incompleta</li>
                                                    <li>• Falta de registro de signos vitales</li>
                                                    <li>• No documenta medicamentos administrados</li>
                                                    <li>• Imposible probar calidad de atención</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-red-800 mb-2">✅ Cómo prevenir:</h4>
                                                <ul className="text-sm text-red-700 space-y-1">
                                                    <li>• Registrar signos vitales completos</li>
                                                    <li>• Documentar todos los medicamentos</li>
                                                    <li>• Anotar horarios de administración</li>
                                                    <li>• Describir respuesta del paciente</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-red-100 rounded">
                                            <strong className="text-red-800">Consecuencias legales:</strong>
                                            <span className="text-red-700 text-sm"> Demanda por negligencia, suspensión de certificación, responsabilidad civil.</span>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                                            <h3 className="text-xl font-semibold text-blue-700">Caso: Rechazo de atención por paciente competente</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> Motociclista de 35 años, accidente menor con abrasiones superficiales. 
                                                Paciente consciente, orientado, camina sin dificultad. Rechaza traslado a hospital alegando "estar bien". 
                                                TAMP insiste pero paciente se molesta y amenaza con irse.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-800 mb-2">⚖️ Aspectos legales clave:</h4>
                                                <ul className="text-sm text-blue-700 space-y-1">
                                                    <li>• Paciente competente tiene derecho a rechazar</li>
                                                    <li>• Debe comprender riesgos de no tratarse</li>
                                                    <li>• TAMP debe informar consecuencias posibles</li>
                                                    <li>• Documentación del rechazo es esencial</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-800 mb-2">✅ Protocolo correcto:</h4>
                                                <ul className="text-sm text-blue-700 space-y-1">
                                                    <li>• Evaluar competencia mental</li>
                                                    <li>• Explicar riesgos (lesión interna, sangrado)</li>
                                                    <li>• Documentar conversación en FRAP</li>
                                                    <li>• Obtener firma de rechazo si es posible</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-blue-100 rounded">
                                            <strong className="text-blue-800">Resultado legal:</strong>
                                            <span className="text-blue-700 text-sm"> Rechazo válido si está bien documentado. TAMP protegido legalmente.</span>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                                            <h3 className="text-xl font-semibold text-orange-700">Caso: Abandono del paciente</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> TAMP responde a emergencia psiquiátrica. Paciente agitado pero cooperativo tras medicación. 
                                                Al llegar al hospital, la sala de emergencias está saturada. TAMP deja al paciente en la recepción con enfermera 
                                                de triage y se retira sin entregar formalmente el reporte.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-orange-800 mb-2">❌ Errores cometidos:</h4>
                                                <ul className="text-sm text-orange-700 space-y-1">
                                                    <li>• No transferir cuidado formalmente</li>
                                                    <li>• No entregar reporte médico completo</li>
                                                    <li>• Dejar paciente psiquiátrico sin supervisión</li>
                                                    <li>• No asegurar continuidad de cuidado</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-orange-800 mb-2">✅ Procedimiento correcto:</h4>
                                                <ul className="text-sm text-orange-700 space-y-1">
                                                    <li>• Esperar a entregar a médico o enfermero</li>
                                                    <li>• Dar reporte verbal completo</li>
                                                    <li>• Entregar documentación escrita</li>
                                                    <li>• Confirmar que personal acepta cuidado</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-orange-100 rounded">
                                            <strong className="text-orange-800">Consecuencias legales:</strong>
                                            <span className="text-orange-700 text-sm"> Demanda por abandono, responsabilidad si paciente sufre daños posteriores.</span>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                                            <h3 className="text-xl font-semibold text-purple-700">Caso: Violación de confidencialidad</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> TAMP atiende a personalidad pública por sobredosis de drogas. 
                                                Posteriormente, en reunión social, comenta detalles del caso con amigos. La información llega a medios 
                                                de comunicación y se publica la historia.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-purple-800 mb-2">⚖️ Violaciones legales:</h4>
                                                <ul className="text-sm text-purple-700 space-y-1">
                                                    <li>• Violación de confidencialidad médica</li>
                                                    <li>• Incumplimiento de Ley de Protección de Datos</li>
                                                    <li>• Falta profesional grave</li>
                                                    <li>• Posible daño a la reputación del paciente</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-purple-800 mb-2">📋 Principios de confidencialidad:</h4>
                                                <ul className="text-sm text-purple-700 space-y-1">
                                                    <li>• Información médica es siempre privada</li>
                                                    <li>• No comentar casos fuera del ámbito médico</li>
                                                    <li>• Proteger identidad de pacientes</li>
                                                    <li>• Solo divulgar con autorización o por ley</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-purple-100 rounded">
                                            <strong className="text-purple-800">Consecuencias legales:</strong>
                                            <span className="text-purple-700 text-sm"> Demanda civil, multas por protección de datos, suspensión de certificación.</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                                            <RiFileList3Line className="mr-2"/>
                                            Ejercicio de autoevaluación legal
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                                                <h4 className="font-semibold text-green-800 mb-2">🤔 Pregunta de reflexión:</h4>
                                                <p className="text-gray-700 text-sm mb-3">
                                                    Un menor de 16 años, consciente y orientado, rechaza traslado tras accidente automovilístico. 
                                                    Sus padres no están presentes. ¿Qué harías?
                                                </p>
                                                <div className="bg-green-50 p-3 rounded">
                                                    <strong className="text-green-800 text-xs">Consideraciones legales:</strong>
                                                    <ul className="text-green-700 text-xs mt-1 space-y-1">
                                                        <li>• Menores no pueden rechazar tratamiento</li>
                                                        <li>• Consentimiento de padres es requerido</li>
                                                        <li>• En emergencia: consentimiento implícito</li>
                                                        <li>• Priorizar bienestar del menor</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                                                <h4 className="font-semibold text-green-800 mb-2">✅ Plan de acción recomendado:</h4>
                                                <ol className="text-green-700 text-sm space-y-2">
                                                    <li>1. <strong>Evaluar:</strong> ¿Hay lesiones evidentes o riesgo?</li>
                                                    <li>2. <strong>Contactar:</strong> Padres/tutores inmediatamente</li>
                                                    <li>3. <strong>Explicar:</strong> Importancia de evaluación médica</li>
                                                    <li>4. <strong>Documentar:</strong> Todo el proceso en FRAP</li>
                                                    <li>5. <strong>Trasladar:</strong> Si hay cualquier duda sobre lesiones</li>
                                                    <li>6. <strong>Notificar:</strong> Autoridades si padres no localizables</li>
                                                </ol>
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
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="legal-aspects" 
                            titulo="Foro de Discusión - Legal Aspects"
                        />

                        

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
                                        <li><a href="https://www.ems1.com/ems-legal/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre aspectos legales en EMS</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-law/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección legal</a></li>
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

