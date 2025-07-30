import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./PsiquiatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdWarning, MdCheckCircle, MdPsychology} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsPersonCheck} from "react-icons/bs";
import {PiBrainFill, PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaUserMd, FaHeartbeat, FaEye, FaRegHandPaper} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye, FiHeart, FiShield} from "react-icons/fi";
import {HiOutlineEmojiSad, HiOutlineEmojiHappy} from "react-icons/hi";
import {RiMentalHealthLine} from "react-icons/ri";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function PsiquiatricEmergencies(){
    const [activeTab, setActiveTab] = useState<'overview' | 'evaluation' | 'treatment' | 'scenarios'>('overview');

    return(
        <SEOWrapper
            title="Emergencias Psiquiátricas EMT | Evaluación, Manejo y Comunicación Terapéutica"
            description="Guía completa sobre emergencias psiquiátricas para Técnicos en Atención Médica Prehospitalaria: evaluación de crisis conductuales, manejo de pacientes agitados, comunicación terapéutica y escenarios específicos. Aprende a actuar ante emergencias de salud mental."
            keywords="emergencias psiquiátricas, EMT, paramédicos, crisis conductual, salud mental, delirio agitado, ideación suicida, psicosis, comunicación terapéutica, restricciones físicas, manejo de pacientes agitados"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <PiBrainFill className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Psiquiatricas</h1>
                        <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto" />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>

                    {/* Menú rápido de recursos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to={`${AllRoutes.PSIQUIATRIC_EMERGENCY}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <RiMentalHealthLine className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos</p>
                        </a>

                        <a href="https://drive.google.com/file/d/1GKXb9xUjTFbxmwqSmy-mHv35XK4c0vE3/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                  

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
                                Fundamentos
                            </button>
                            <button
                                onClick={() => setActiveTab('evaluation')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'evaluation' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación y Seguridad
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo y Comunicación
                            </button>
                            <button
                                onClick={() => setActiveTab('scenarios')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'scenarios' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Casos Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                {/* Importancia crítica */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-8 h-8 text-purple-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-purple-700">¡Emergencia de Salud Mental!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las emergencias psiquiátricas representan el <strong>12-15% de todas las llamadas de emergencia</strong>.
                                        Tu respuesta profesional puede <span className="text-purple-600 font-bold">salvar vidas</span> y 
                                        reducir el estigma asociado con la salud mental.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdPsychology className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                                            <p className="font-bold text-purple-600">1 de cada 5</p>
                                            <p className="text-sm">Adultos vive con enfermedad mental</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaHeartbeat className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Cada 11 min</p>
                                            <p className="text-sm">Muere una persona por suicidio</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaUserMd className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <p className="font-bold text-blue-600">Primeros en responder</p>
                                            <p className="text-sm">Somos el primer contacto médico</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Definición y tipos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <PiBrainFill className="w-6 h-6 mr-2 text-orange-500"/>
                                        ¿Qué es una Emergencia Psiquiátrica?
                                    </h2>
                                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            Una emergencia psiquiátrica es cualquier situación donde el <strong>comportamiento de una persona</strong> 
                                            es tan perturbado que pone en <strong>peligro su seguridad o la de otros</strong>, o cuando requiere 
                                            intervención médica inmediata.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                                                <MdCheckCircle className="w-5 h-5 mr-2"/>
                                                Crisis Conductual
                                            </h3>
                                            <p className="text-gray-700 mb-3">Reacción temporal a eventos estresantes</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Interfiere con la vida diaria</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Puede ser inaceptable para el entorno</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Generalmente no hay peligro inmediato</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                                                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                Emergencia Psiquiátrica
                                            </h3>
                                            <p className="text-gray-700 mb-3">Situación que requiere intervención inmediata</p>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Peligro para sí mismo o para otros</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Pérdida del contacto con la realidad</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Necesita intervención médica urgente</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tipos principales */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos Principales de Emergencias</h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                            <h3 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                <HiOutlineEmojiSad className="w-5 h-5 mr-2"/>
                                                Ideación Suicida
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Pensamientos de muerte</li>
                                                <li>• Plan específico</li>
                                                <li>• Medios disponibles</li>
                                                <li>• Aislamiento social</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                            <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                <MdWarning className="w-5 h-5 mr-2"/>
                                                Delirio Agitado
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Agitación extrema</li>
                                                <li>• Fuerza sobrehumana</li>
                                                <li>• Hipertermia</li>
                                                <li>• Riesgo de muerte súbita</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                            <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                                                <FaEye className="w-5 h-5 mr-2"/>
                                                Psicosis
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Alucinaciones</li>
                                                <li>• Delirios</li>
                                                <li>• Pensamiento desorganizado</li>
                                                <li>• Pérdida del contacto con la realidad</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                            <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                                                <FaHeartbeat className="w-5 h-5 mr-2"/>
                                                Crisis de Ansiedad
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Palpitaciones</li>
                                                <li>• Dificultad respiratoria</li>
                                                <li>• Sensación de muerte</li>
                                                <li>• Despersonalización</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                <RiMentalHealthLine className="w-5 h-5 mr-2"/>
                                                Depresión Severa
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Ánimo deprimido</li>
                                                <li>• Pérdida de interés</li>
                                                <li>• Sentimientos de culpa</li>
                                                <li>• Ideación suicida</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                            <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                <HiOutlineEmojiHappy className="w-5 h-5 mr-2"/>
                                                Episodio Maníaco
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Euforia excesiva</li>
                                                <li>• Hiperactividad</li>
                                                <li>• Insomnio</li>
                                                <li>• Juicio deficiente</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Conceptos clave */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-blue-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-blue-800">Conceptos Clave para Recordar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Principios Fundamentales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>La seguridad es la prioridad absoluta</li>
                                                <li>Siempre descartar causas médicas primero</li>
                                                <li>Mantener un enfoque empático y sin juicio</li>
                                                <li>La comunicación es tu herramienta más importante</li>
                                                <li>Cada persona es un individuo único</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                Errores Comunes a Evitar:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Asumir que "solo es psiquiátrico"</li>
                                                <li>Minimizar o ignorar los síntomas</li>
                                                <li>Usar fuerza como primera opción</li>
                                                <li>Juzgar o estigmatizar al paciente</li>
                                                <li>Comprometer la seguridad de la escena</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'evaluation' && (
                            <div className="space-y-8">
                                {/* Protocolo de seguridad */}
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <BsShield className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">Protocolo de Seguridad - Tu Vida Primero</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        <strong>No puedes ayudar a nadie si tú resultas lesionado.</strong> La evaluación de la escena 
                                        y tu seguridad personal son la prioridad #1 en emergencias psiquiátricas.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <FiShield className="w-8 h-8 text-red-500 mb-2"/>
                                            <h3 className="font-bold text-red-600">Evalúa desde lejos</h3>
                                            <p className="text-sm text-gray-700">Observa la escena desde una distancia segura antes de acercarte</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <FiAlertTriangle className="w-8 h-8 text-orange-500 mb-2"/>
                                            <h3 className="font-bold text-orange-600">Identifica salidas</h3>
                                            <p className="text-sm text-gray-700">Siempre ten una ruta de escape planificada</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <FiUser className="w-8 h-8 text-blue-500 mb-2"/>
                                            <h3 className="font-bold text-blue-600">Solicita apoyo</h3>
                                            <p className="text-sm text-gray-700">Pide ayuda policial si hay amenaza de violencia</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación sistemática */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsPersonCheck className="w-6 h-6 mr-2 text-orange-500"/>
                                        Evaluación Sistemática del Paciente
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">1️⃣ SEGURIDAD</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Hay armas visibles?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Comportamiento agresivo?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Objetos que pueden ser armas?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Espacio confinado?</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">2️⃣ MÉDICO</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Signos vitales</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Nivel de glucosa</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Saturación de oxígeno</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Evidencia de trauma</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">3️⃣ MENTAL</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Orientación en tiempo/espacio</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Contacto con la realidad</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Alucinaciones o delirios</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Ideación suicida/homicida</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Causas médicas que imitan emergencias psiquiátricas */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">⚠️ SIEMPRE Descartar Causas Médicas</h2>
                                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-4">
                                        <p className="text-lg text-gray-800 mb-4">
                                            <strong>Regla de oro:</strong> Hasta el 40% de las "emergencias psiquiátricas" tienen una causa médica subyacente.
                                            ¡Nunca asumas que es "solo psiquiátrico"!
                                        </p>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                            <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                <MdWarning className="w-5 h-5 mr-2"/>
                                                Hipoxia/Hipercapnia
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Confusión aguda</li>
                                                <li>• Agitación</li>
                                                <li>• Cianosis</li>
                                                <li>• Alteración del nivel de conciencia</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                <FaHeartbeat className="w-5 h-5 mr-2"/>
                                                Alteraciones Metabólicas
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Hipoglucemia</li>
                                                <li>• Hiperglucemia</li>
                                                <li>• Desequilibrio electrolítico</li>
                                                <li>• Insuficiencia renal/hepática</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                            <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                <PiBrainFill className="w-5 h-5 mr-2"/>
                                                Neurológicas
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Trauma craneoencefálico</li>
                                                <li>• ACV</li>
                                                <li>• Convulsiones (post-ictal)</li>
                                                <li>• Infecciones del SNC</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                            <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                                                <FaRegHandPaper className="w-5 h-5 mr-2"/>
                                                Toxicológicas
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Intoxicación por drogas</li>
                                                <li>• Síndrome de abstinencia</li>
                                                <li>• Envenenamiento por CO</li>
                                                <li>• Reacciones medicamentosas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                            <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                                                <MdOutlineTimer className="w-5 h-5 mr-2"/>
                                                Infecciosas
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Sepsis</li>
                                                <li>• Meningitis</li>
                                                <li>• Encefalitis</li>
                                                <li>• Infección urinaria (ancianos)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                                            <h3 className="font-bold text-pink-700 mb-2 flex items-center">
                                                <FiHeart className="w-5 h-5 mr-2"/>
                                                Cardiovasculares
                                            </h3>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Arritmias</li>
                                                <li>• Infarto agudo</li>
                                                <li>• Shock</li>
                                                <li>• Hipotensión severa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación de riesgo de suicidio */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center">
                                        <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                                        Evaluación de Riesgo Suicida
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">Factores de ALTO Riesgo:</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Plan específico y detallado</strong></span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Medios disponibles</strong> (armas, medicamentos)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Intentos previos de suicidio</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Historia familiar de suicidio</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span>Aislamiento social severo</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-blue-700 mb-3">Preguntas Directas:</h3>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li>"¿Ha pensado en hacerse daño?"</li>
                                                    <li>"¿Tiene pensamientos de quitarse la vida?"</li>
                                                    <li>"¿Tiene un plan de cómo lo haría?"</li>
                                                    <li>"¿Cuándo planea hacerlo?"</li>
                                                    <li>"¿Qué le ha impedido hacerlo hasta ahora?"</li>
                                                    <li>"¿Ha intentado suicidarse antes?"</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma que requieren acción inmediata */}
                                <div className="bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center">
                                        <MdWarning className="w-6 h-6 mr-2"/>
                                        🚨 SIGNOS DE ALARMA - ACCIÓN INMEDIATA
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">Comportamiento:</h3>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Agitación extrema con fuerza sobrehumana</li>
                                                <li>• Amenazas directas de violencia</li>
                                                <li>• Comportamiento autodestructivo activo</li>
                                                <li>• Intentos de fuga o escape</li>
                                                <li>• Desprendimiento de ropa (hipertermia)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">Síntomas Físicos:</h3>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Hipertermia (&gt;38.5°C)</li>
                                                <li>• Diaforesis profusa</li>
                                                <li>• Taquicardia severa (&gt;120 lpm)</li>
                                                <li>• Cianosis o desaturación</li>
                                                <li>• Alteración del nivel de conciencia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                {/* Introducción a la comunicación terapéutica */}
                                <div className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <RiMentalHealthLine className="w-8 h-8 text-green-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-green-700">Comunicación Terapéutica: Tu Herramienta Más Poderosa</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        En emergencias psiquiátricas, <strong>cómo te comunicas puede ser la diferencia entre el éxito y el fracaso</strong>. 
                                        Tu voz, tu lenguaje corporal y tu actitud son tan importantes como cualquier medicamento.
                                    </p>
                                </div>

                                {/* Principios fundamentales de comunicación */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsPersonCheck className="w-6 h-6 mr-2 text-orange-500"/>
                                        Principios Fundamentales de Comunicación
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                                            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                                <MdCheckCircle className="w-6 h-6 mr-2"/>
                                                ✅ Qué SÍ Hacer
                                            </h3>
                                            <ul className="space-y-3 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                                                    <span><strong>Preséntate claramente:</strong> "Hola, soy Juan, paramédico. Estoy aquí para ayudarte"</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                                                    <span><strong>Usa voz calmada y suave:</strong> El tono es más importante que las palabras</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                                                    <span><strong>Mantén contacto visual:</strong> Demuestra interés genuino</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                                                    <span><strong>Escucha activamente:</strong> "Entiendo que te sientes..."</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                                                    <span><strong>Respeta el espacio personal:</strong> Mantén 1.5-2 metros de distancia</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                                                    <span><strong>Sé honesto y directo:</strong> No hagas promesas que no puedes cumplir</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                                                ❌ Qué NO Hacer
                                            </h3>
                                            <ul className="space-y-3 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                                                    <span><strong>No "sigas el juego":</strong> No valides alucinaciones como reales</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                                                    <span><strong>No discutas delirios:</strong> No trates de convencer con lógica</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                                                    <span><strong>No hagas movimientos bruscos:</strong> Mantén calma en tus acciones</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                                                    <span><strong>No juzgues o critiques:</strong> Evita frases como "eso está mal"</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                                                    <span><strong>No invadas el espacio:</strong> El contacto físico puede ser amenazante</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                                                    <span><strong>No uses jerga médica:</strong> Habla en lenguaje simple</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Técnicas de desescalada */}
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                                        <BsLightbulb className="w-6 h-6 mr-2"/>
                                        Técnicas de Desescalada
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-blue-700 mb-3">📢 Técnicas Verbales:</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Validación emocional:</strong> "Puedo ver que estás muy preocupado"</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Reflejo de sentimientos:</strong> "Te escucho decir que te sientes asustado"</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Ofrecer opciones:</strong> "¿Te gustaría sentarte o prefieres caminar?"</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Establecer límites claros:</strong> "Puedo ayudarte, pero necesito que no grites"</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-blue-700 mb-3">🤝 Técnicas No Verbales:</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Postura abierta:</strong> Brazos a los lados, palmas visibles</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Nivel de ojos:</strong> Siéntate si el paciente está sentado</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Movimientos lentos:</strong> Evita gestos bruscos o rápidos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Expresión facial:</strong> Mantén expresión neutral y empática</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación específica del riesgo suicida */}
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center">
                                        <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                                        Evaluación Específica del Riesgo Suicida
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">Escala de Riesgo Suicida (SAD PERSONS):</h3>
                                            <div className="bg-white p-4 rounded-lg">
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>S</strong> - Sexo (hombres mayor riesgo)</li>
                                                    <li><strong>A</strong> - Edad (adolescentes y ancianos)</li>
                                                    <li><strong>D</strong> - Depresión</li>
                                                    <li><strong>P</strong> - Intentos Previos</li>
                                                    <li><strong>E</strong> - Etanol/sustancias</li>
                                                    <li><strong>R</strong> - Pensamiento Racional perdido</li>
                                                    <li><strong>S</strong> - Soporte social ausente</li>
                                                    <li><strong>O</strong> - Plan Organizado</li>
                                                    <li><strong>N</strong> - No hay cónyuge</li>
                                                    <li><strong>S</strong> - Seriedad del intento</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">Preguntas Directas Efectivas:</h3>
                                            <div className="bg-white p-4 rounded-lg">
                                                <ol className="space-y-2 text-gray-700">
                                                    <li><strong>1.</strong> "¿Ha pensado en hacerse daño?"</li>
                                                    <li><strong>2.</strong> "¿Con qué frecuencia tiene estos pensamientos?"</li>
                                                    <li><strong>3.</strong> "¿Tiene un plan específico?"</li>
                                                    <li><strong>4.</strong> "¿Cuándo planea hacerlo?"</li>
                                                    <li><strong>5.</strong> "¿Qué le impide hacerlo ahora?"</li>
                                                    <li><strong>6.</strong> "¿Ha preparado algo para llevarlo a cabo?"</li>
                                                    <li><strong>7.</strong> "¿Ha intentado suicidarse antes?"</li>
                                                    <li><strong>8.</strong> "¿Hay algo por lo que vale la pena vivir?"</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo de restricciones físicas */}
                                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-300">
                                    <h2 className="text-2xl font-semibold mb-4 text-orange-800 flex items-center">
                                        <FaRegHandPaper className="w-6 h-6 mr-2"/>
                                        Restricciones Físicas: Último Recurso
                                    </h2>
                                    
                                    <div className="bg-red-100 p-4 rounded-lg mb-4 border border-red-300">
                                        <h3 className="font-bold text-red-700 mb-2">⚠️ Indicaciones Estrictas:</h3>
                                        <ul className="space-y-1 text-gray-700">
                                            <li>• <strong>Peligro inmediato</strong> para el paciente o personal</li>
                                            <li>• <strong>Paciente violento</strong> que no responde a comunicación</li>
                                            <li>• <strong>Protección de vía aérea</strong> o accesos vasculares críticos</li>
                                            <li>• <strong>Falla de todas las técnicas</strong> de desescalada</li>
                                        </ul>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-orange-700 mb-3">📋 Protocolo de Restricción Segura:</h3>
                                            <ol className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                                    <span><strong>Personal suficiente:</strong> Mínimo 5 personas (1 por extremidad + cabeza)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                                    <span><strong>Aproximación coordinada:</strong> Señal clara para acción simultánea</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                                    <span><strong>Restricciones suaves:</strong> Nunca usar esposas metálicas</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                                    <span><strong>Posición supina:</strong> NUNCA posición prona (boca abajo)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                                    <span><strong>Monitorización continua:</strong> ABC y signos vitales</span>
                                                </li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">💀 Peligros de Asfixia Posicional:</h3>
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Posición prona:</strong> Comprime el diafragma</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Peso sobre espalda:</strong> Impide expansión torácica</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Flexión del cuello:</strong> Obstrucción de vía aérea</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Muerte súbita:</strong> Puede ocurrir en minutos</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Consideraciones farmacológicas */}
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                                    <h2 className="text-2xl font-semibold mb-4 text-purple-800 flex items-center">
                                        <FaUserMd className="w-6 h-6 mr-2"/>
                                        Consideraciones Farmacológicas
                                    </h2>
                                    
                                    <div className="bg-yellow-100 p-4 rounded-lg mb-4 border border-yellow-300">
                                        <p className="text-gray-800">
                                            <strong>Importante:</strong> La administración de medicamentos psiquiátricos requiere <strong>orden médica</strong> 
                                            y debe seguir protocolos locales específicos. No todos los servicios de EMS tienen autorización para estos medicamentos.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-bold text-purple-700 mb-3">💊 Medicamentos Comunes:</h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded-lg border">
                                                    <h4 className="font-semibold text-purple-600">Haloperidol (Haldol)</h4>
                                                    <p className="text-sm text-gray-700">Antipsicótico para agitación severa</p>
                                                    <p className="text-sm text-gray-600">Dosis: 2.5-10mg IM</p>
                                                </div>
                                                <div className="bg-white p-3 rounded-lg border">
                                                    <h4 className="font-semibold text-purple-600">Lorazepam (Ativan)</h4>
                                                    <p className="text-sm text-gray-700">Benzodiazepina para ansiedad/agitación</p>
                                                    <p className="text-sm text-gray-600">Dosis: 0.5-2mg IM/IV</p>
                                                </div>
                                                <div className="bg-white p-3 rounded-lg border">
                                                    <h4 className="font-semibold text-purple-600">Midazolam (Versed)</h4>
                                                    <p className="text-sm text-gray-700">Sedación rápida para agitación extrema</p>
                                                    <p className="text-sm text-gray-600">Dosis: 2-5mg IM/IV</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-red-700 mb-3">⚠️ Precauciones Críticas:</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Depresión respiratoria:</strong> Monitorizar saturación O2</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Hipotensión:</strong> Especialmente en ancianos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Interacciones:</strong> Alcohol potencia los efectos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Síndrome neuroléptico:</strong> Raro pero letal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                    <span><strong>Naloxona disponible:</strong> Para reversión si es necesario</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Algoritmo de manejo */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2"/>
                                        Algoritmo de Manejo: Paso a Paso
                                    </h2>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                                                <div>
                                                    <h3 className="font-bold text-blue-700">Evaluación de Seguridad</h3>
                                                    <p className="text-gray-700">Escena segura → Apoyo disponible → Rutas de escape</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                                                <div>
                                                    <h3 className="font-bold text-blue-700">Aproximación Inicial</h3>
                                                    <p className="text-gray-700">Presentación → Establecer rapport → Evaluación visual</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                                                <div>
                                                    <h3 className="font-bold text-blue-700">Evaluación Médica</h3>
                                                    <p className="text-gray-700">ABC → Signos vitales → Glucometría → Descartar causas orgánicas</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                                                <div>
                                                    <h3 className="font-bold text-blue-700">Comunicación Terapéutica</h3>
                                                    <p className="text-gray-700">Desescalada → Evaluación de riesgo → Establecer confianza</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                                                <div>
                                                    <h3 className="font-bold text-blue-700">Intervención Específica</h3>
                                                    <p className="text-gray-700">Medicación (si está indicada) → Restricción física (último recurso)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">6</div>
                                                <div>
                                                    <h3 className="font-bold text-blue-700">Transporte y Monitorización</h3>
                                                    <p className="text-gray-700">Destino apropiado → Monitorización continua → Documentación detallada</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'scenarios' && (
                            <div className="space-y-8">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-blue-700">Casos Clínicos Realistas</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Estos casos están basados en situaciones reales. Cada uno incluye elementos de evaluación, 
                                        toma de decisiones y manejo específico para prepararte para el campo.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Caso 1: Ideación suicida */}
                                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg shadow-sm border border-red-200">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                                            <h3 className="text-2xl font-semibold text-red-700">Caso: Ideación Suicida Activa</h3>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-red-400">
                                            <h4 className="font-bold text-red-700 mb-2">📋 Escenario Inicial:</h4>
                                            <p className="text-gray-700 italic">
                                                "Mujer de 45 años encontrada por su hermana en su departamento. La hermana reporta que la paciente 
                                                ha estado 'organizando sus cosas' y escribiendo cartas de despedida. Tiene historia de depresión 
                                                y un intento de sobredosis hace 2 años. Actualmente está sentada en el borde de la cama, 
                                                llorando y dice 'ya no puedo más, quiero que todo termine'."
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-red-700 mb-3">🚨 Factores de Riesgo Identificados:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Historia previa</strong> de intento suicida</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Preparación activa</strong> (organizando cosas, cartas)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Verbalización directa</strong> de intención</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Depresión conocida</strong> sin tratamiento adecuado</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Desesperanza</strong> expresada</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-green-700 mb-3">✅ Manejo Paso a Paso:</h4>
                                                <ol className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                                        <span>Asegurar la escena - remover medios letales</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                                        <span>Aproximación calmada, sin movimientos bruscos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                                        <span>Presentarse y establecer rapport</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                                        <span>Evaluación médica: signos vitales, glucosa</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                                        <span><strong>NUNCA</strong> dejar al paciente solo</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">6</span>
                                                        <span>Transporte inmediato para evaluación psiquiátrica</span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-blue-700 mb-2">💬 Frases Terapéuticas Sugeridas:</h4>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>"Puedo ver que está pasando por un momento muy difícil"</li>
                                                <li>"Me preocupo por su seguridad y quiero ayudarla"</li>
                                                <li>"¿Puede contarme qué la ha llevado a sentirse así?"</li>
                                                <li>"Hay personas que pueden ayudarla a sentirse mejor"</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Caso 2: Delirio agitado */}
                                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg shadow-sm border border-red-300">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                                            <h3 className="text-2xl font-semibold text-red-700">Caso: Delirio Agitado Severo</h3>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-red-500">
                                            <h4 className="font-bold text-red-700 mb-2">🚨 Llamada de Emergencia:</h4>
                                            <p className="text-gray-700 italic">
                                                "Hombre de 28 años encontrado en parque público, extremadamente agitado. Requirió 4 oficiales para controlarlo. 
                                                Se quita la ropa, sudoración excesiva, temperatura de 40°C. Presenta paranoia severa, cree que 'lo persiguen los aliens'. 
                                                Fuerza anormal, rompió las esposas de plástico. Posible uso de metanfetaminas según testigos."
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-red-700 mb-3">⚠️ Signos Críticos:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Hipertermia severa</strong> (40°C)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Fuerza sobrehumana</strong> (rompió esposas)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Diaforesis profusa</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Paranoia severa</strong> con alucinaciones</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                                        <span><strong>Comportamiento violento</strong></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-red-700 mb-3">🚨 Manejo de Emergencia:</h4>
                                                <ol className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                                        <span><strong>Seguridad</strong> - Apoyo policial completo</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                                        <span><strong>Restricción física</strong> - NUNCA posición prona</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                                        <span><strong>Enfriamiento agresivo</strong> - Compresas frías</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                                        <span><strong>Monitorización continua</strong> ABC</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                                        <span><strong>Transporte CÓDIGO ROJO</strong></span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="mt-4 bg-red-100 p-4 rounded-lg border border-red-300">
                                            <h4 className="font-bold text-red-700 mb-2">💀 ¿Por qué es tan peligroso?</h4>
                                            <p className="text-gray-700">
                                                El delirio agitado tiene una <strong>mortalidad del 8-14%</strong> debido a:
                                                acidosis metabólica, rabdomiólisis, hipertermia maligna, arritmias cardíacas y paro cardíaco súbito.
                                                <strong> Es una verdadera emergencia médica.</strong>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Caso 3: Psicosis con alucinaciones */}
                                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-sm border border-purple-200">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                                            <h3 className="text-2xl font-semibold text-purple-700">Caso: Episodio Psicótico Agudo</h3>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-purple-400">
                                            <h4 className="font-bold text-purple-700 mb-2">👁️ Presentación Clínica:</h4>
                                            <p className="text-gray-700 italic">
                                                "Mujer de 32 años con esquizofrenia conocida, suspendió medicación antipsicótica hace 1 semana. 
                                                La encuentran hablando sola en voz alta, dice ver 'insectos que caminan por las paredes' y 
                                                cree que 'los vecinos la espían através de las cámaras'. No es violenta pero está muy 
                                                desconfiada y no quiere que se le acerquen."
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-purple-700 mb-3">🧠 Síntomas Psicóticos:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                                        <span><strong>Alucinaciones visuales</strong> (insectos en paredes)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                                        <span><strong>Alucinaciones auditivas</strong> (habla sola)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                                        <span><strong>Delirios paranoides</strong> (vecinos la espían)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                                        <span><strong>Desorganización</strong> del pensamiento</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                                        <span><strong>Desconfianza extrema</strong></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-green-700 mb-3">🗣️ Técnicas de Comunicación:</h4>
                                                <ol className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                                        <span><strong>Mantener distancia</strong> respetuosa</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                                        <span><strong>Voz calmada</strong> y movimientos lentos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                                        <span><strong>No confrontar</strong> las alucinaciones</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                                        <span><strong>Explicar cada acción</strong> antes de realizarla</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                                        <span><strong>Obtener información</strong> sobre medicación</span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="mt-4 bg-purple-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-purple-700 mb-2">💬 Ejemplo de Comunicación Efectiva:</h4>
                                            <div className="space-y-2 text-gray-700">
                                                <p><strong>❌ NO decir:</strong> "No hay insectos ahí, eso no es real"</p>
                                                <p><strong>✅ SÍ decir:</strong> "Entiendo que eso debe ser muy angustiante para usted"</p>
                                                <p><strong>❌ NO decir:</strong> "Sus vecinos no la están espiando"</p>
                                                <p><strong>✅ SÍ decir:</strong> "Puedo ver que se siente muy preocupada por su seguridad"</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 4: Crisis de pánico */}
                                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg shadow-sm border border-orange-200">
                                        <div className="flex items-center mb-4">
                                            <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                                            <h3 className="text-2xl font-semibold text-orange-700">Caso: Crisis de Pánico vs Infarto</h3>
                                        </div>
                                        
                                        <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-orange-400">
                                            <h4 className="font-bold text-orange-700 mb-2">💓 Dilema Diagnóstico:</h4>
                                            <p className="text-gray-700 italic">
                                                "Hombre de 35 años en oficina, súbitamente presenta dolor torácico, palpitaciones, dificultad respiratoria, 
                                                sudoración intensa y sensación de 'me voy a morir'. Colegas reportan que parecía 'un infarto'. 
                                                Paciente ansioso, hiperventilando, dice que 'no puede respirar' y que 'algo terrible va a pasar'."
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-red-700 mb-3">🚨 Diagnóstico Diferencial:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Síndrome coronario agudo</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Embolia pulmonar</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Hipertiroidismo</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Hipoglucemia</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Ataque de pánico</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                                        <span><strong>Intoxicación por estimulantes</strong></span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-blue-700 mb-3">📊 Evaluación Sistemática:</h4>
                                                <ol className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                                        <span><strong>ECG de 12 derivaciones</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                                        <span><strong>Glucometría capilar</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                                        <span><strong>Signos vitales completos</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                                        <span><strong>Saturación de oxígeno</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                                        <span><strong>Historia clínica detallada</strong></span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                            <h4 className="font-bold text-yellow-700 mb-2">⚡ Principio Clave:</h4>
                                            <p className="text-gray-700">
                                                <strong>NUNCA asumas que es "solo ansiedad"</strong> hasta descartar causas orgánicas. 
                                                Los ataques de pánico son un diagnóstico de exclusión. Trata como emergencia médica hasta 
                                                demostrar lo contrario.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para todos los casos */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                                        <BsLightbulb className="w-6 h-6 mr-2"/>
                                        Principios Universales para Todos los Casos
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <h3 className="font-bold text-blue-700 mb-2">🛡️ Seguridad Siempre:</h3>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Evalúa la escena desde lejos</li>
                                                <li>• Identifica rutas de escape</li>
                                                <li>• Solicita apoyo cuando sea necesario</li>
                                                <li>• Nunca comprometas tu seguridad</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-green-700 mb-2">🩺 Evaluación Médica:</h3>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Siempre descarta causas orgánicas</li>
                                                <li>• ABC y signos vitales completos</li>
                                                <li>• Glucometría en todos los casos</li>
                                                <li>• Busca signos de trauma oculto</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-purple-700 mb-2">💬 Comunicación:</h3>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Mantén calma y empatía</li>
                                                <li>• Escucha sin juzgar</li>
                                                <li>• Sé honesto y directo</li>
                                                <li>• Respeta la dignidad del paciente</li>
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
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                            pagina="psiquiatric-emergencies" 
                            titulo="Foro de Discusión - Psiquiatric Emergencies"
                        />

                        

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <div className="flex items-center mb-6">
                            <BsBookHalf className="w-8 h-8 text-orange-500 mr-3"/>
                            <h2 className="text-2xl font-bold">Referencias y Recursos Adicionales</h2>
                        </div>

                        <div className="space-y-6">
                            {/* Recursos de emergencia */}
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <h3 className="text-lg font-semibold mb-3 text-red-700 flex items-center">
                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                    Recursos de Crisis 24/7
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-medium text-red-600 mb-2">Líneas de Crisis Nacional:</h4>
                                        <ul className="space-y-1 text-gray-700">
                                            <li>• <strong>Línea Nacional de Prevención del Suicidio:</strong> 1-800-273-8255</li>
                                            <li>• <strong>Crisis Text Line:</strong> Texto HOME al 741741</li>
                                            <li>• <strong>SAMHSA National Helpline:</strong> 1-800-662-4357</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium text-red-600 mb-2">Aplicaciones de Crisis:</h4>
                                        <ul className="space-y-1 text-gray-700">
                                            <li>• <strong>MY3 App:</strong> Plan de seguridad personal</li>
                                            <li>• <strong>PTSD Coach:</strong> Manejo de síntomas</li>
                                            <li>• <strong>MindShift:</strong> Manejo de ansiedad</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3 flex items-center">
                                        <BsBookHalf className="w-5 h-5 mr-2 text-blue-500"/>
                                        Bibliografía Científica
                                    </h3>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <ul className="space-y-3 text-gray-700">
                                            <li>
                                                <strong>AAOS.</strong> (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). 
                                                Jones & Bartlett Learning.
                                            </li>
                                            <li>
                                                <strong>American Psychiatric Association.</strong> (2022). <em>Diagnostic and Statistical Manual 
                                                of Mental Disorders</em> (5th ed., text rev.).
                                            </li>
                                            <li>
                                                <strong>NAEMT.</strong> (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).
                                            </li>
                                            <li>
                                                <strong>Kaplan & Sadock.</strong> (2021). <em>Synopsis of Psychiatry: Behavioral Sciences/Clinical Psychiatry</em> (12th ed.).
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 flex items-center">
                                        <RiMentalHealthLine className="w-5 h-5 mr-2 text-green-500"/>
                                        Recursos Profesionales
                                    </h3>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <ul className="space-y-2 text-gray-700">
                                            <li>
                                                <strong>NAMI (National Alliance on Mental Illness):</strong>
                                                <br/>
                                                <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" 
                                                   className="text-blue-600 hover:underline">www.nami.org</a>
                                            </li>
                                            <li>
                                                <strong>SAMHSA (Substance Abuse and Mental Health Services):</strong>
                                                <br/>
                                                <a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer" 
                                                   className="text-blue-600 hover:underline">www.samhsa.gov</a>
                                            </li>
                                            <li>
                                                <strong>Crisis Prevention Institute (CPI):</strong>
                                                <br/>
                                                <a href="https://www.crisisprevention.com" target="_blank" rel="noopener noreferrer" 
                                                   className="text-blue-600 hover:underline">www.crisisprevention.com</a>
                                            </li>
                                            <li>
                                                <strong>International Association of Fire Chiefs (IAFC):</strong>
                                                <br/>
                                                <a href="https://www.iafc.org" target="_blank" rel="noopener noreferrer" 
                                                   className="text-blue-600 hover:underline">www.iafc.org</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-3 flex items-center">
                                    <MdPsychology className="w-5 h-5 mr-2 text-purple-500"/>
                                    Educación Continua y Certificaciones
                                </h3>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-purple-700 mb-2">Cursos Recomendados:</h4>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Mental Health First Aid</li>
                                                <li>• Crisis Prevention Institute (CPI) Training</li>
                                                <li>• Applied Suicide Intervention Skills Training (ASIST)</li>
                                                <li>• Psychological First Aid (PFA)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-purple-700 mb-2">Certificaciones:</h4>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• Certified Crisis Counselor (CCC)</li>
                                                <li>• Mental Health First Aid Instructor</li>
                                                <li>• Trauma-Informed Care Specialist</li>
                                                <li>• Crisis Response Team Member</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mensaje final motivacional */}
                            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                                <div className="flex items-center mb-4">
                                    <FaUserMd className="w-8 h-8 text-orange-500 mr-3"/>
                                    <h3 className="text-xl font-bold text-orange-700">Tu Papel Como Profesional de la Salud Mental</h3>
                                </div>
                                <p className="text-gray-800 leading-relaxed">
                                    Como paramédico, eres a menudo el <strong>primer contacto médico</strong> para personas en crisis de salud mental. 
                                    Tu compasión, profesionalismo y conocimiento pueden marcar la diferencia entre la vida y la muerte. 
                                    Cada interacción es una oportunidad para <strong>salvar vidas</strong> y reducir el estigma asociado con la salud mental.
                                </p>
                                <div className="mt-4 p-4 bg-white rounded-lg">
                                    <p className="text-center text-gray-700 italic">
                                        "No siempre podemos construir el futuro para nuestra juventud, pero podemos construir nuestra juventud para el futuro."
                                        <br/>
                                        <strong>— Franklin D. Roosevelt</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </SEOWrapper>
    );
}

