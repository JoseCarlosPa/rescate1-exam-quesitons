import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Evaluation.questions.ts";
import {FaNotesMedical} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz, MdPlayCircle} from "react-icons/md";
import {BsBookHalf, BsClockHistory} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaUserMd, FaHeartbeat, FaEye, FaStethoscope} from "react-icons/fa";
import {useState} from "react";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function Evaluation() {
    const [activeTab, setActiveTab] = useState<'overview' | 'scene' | 'primary' | 'secondary' | 'tools' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);
    const [selectedStep, setSelectedStep] = useState<string | null>(null);

    return (
        <SEOWrapper
            title="Evaluación del Paciente EMT | Protocolo ABCDE, Escalas y Casos Clínicos"
            description="Guía completa sobre la evaluación del paciente para Técnicos en Atención Médica Prehospitalaria: fases, protocolo ABCDE, escalas, casos clínicos interactivos y recursos recomendados. Optimiza tu aprendizaje en emergencias médicas."
            keywords="evaluación del paciente, EMT, protocolo ABCDE, atención prehospitalaria, emergencias médicas, signos vitales, escalas Glasgow, casos clínicos, TAMP, trauma, pediatría, geriatría, seguridad de la escena, SAMPLE, OPQRST"
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
                                <FaNotesMedical className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Evaluación del Paciente</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 max-w-6xl mx-auto">
                            <NavLink
                                to="/evaluation/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1ZLfoRXcQoyOmvRactfLobvZjLogyKY9S/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                            <a href="https://www.jems.com/patient-care/assessment/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Recursos JEMS</p>
                            </a>
                            <button
                                onClick={() => setShowQuickQuiz(!showQuickQuiz)}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-blue-50 transition duration-300 hover:shadow-md">
                                <MdPlayCircle className="w-10 h-10 text-blue-500 mb-2"/>
                                <p className="text-center font-medium">Quiz Rápido</p>
                            </button>
                        </div>

                        {/* Quiz rápido */}
                        {showQuickQuiz && (
                            <div
                                className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto border-l-4 border-blue-500">
                                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
                                    <MdPlayCircle className="text-blue-500"/>
                                    Quiz Rápido - Secuencia de Evaluación
                                </h3>
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                    <p className="text-blue-800 font-medium">🧠 Ejercicio de memoria activa:</p>
                                    <p className="text-blue-700">Ordena mentalmente los pasos de la evaluación primaria
                                        (ABCDE) y luego revisa la pestaña correspondiente.</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="p-3 bg-gray-50 rounded">
                                        <h4 className="font-medium text-gray-800 mb-2">Pregunta rápida:</h4>
                                        <p className="text-gray-700">¿Cuáles son las 3 fases principales de la
                                            evaluación del paciente?</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded">
                                        <h4 className="font-medium text-gray-800 mb-2">Respuesta:</h4>
                                        <p className="text-gray-700">1) Evaluación de la escena, 2) Evaluación primaria,
                                            3) Evaluación secundaria</p>
                                    </div>
                                </div>
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
                                    onClick={() => setActiveTab('scene')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'scene'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación de la Escena
                                </button>
                                <button
                                    onClick={() => setActiveTab('primary')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'primary'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación Primaria
                                </button>
                                <button
                                    onClick={() => setActiveTab('secondary')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'secondary'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación Secundaria
                                </button>
                                <button
                                    onClick={() => setActiveTab('tools')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'tools'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Herramientas
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
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
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                        <div className="md:w-2/3">
                                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                                <FaUserMd className="text-orange-500"/>
                                                ¿Qué es la Evaluación del Paciente?
                                            </h2>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                Es un proceso sistemático y dinámico que permite identificar lesiones o
                                                enfermedades que amenazan la vida y requieren intervención inmediata. La
                                                evaluación del paciente es la base de la atención prehospitalaria y debe
                                                realizarse de manera ordenada, eficiente y continua.
                                            </p>
                                            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                                                <p className="text-orange-800 font-medium">💡 Concepto clave:</p>
                                                <p className="text-orange-700">Una evaluación sistemática puede ser la
                                                    diferencia entre la vida y la muerte del paciente.</p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/3 flex justify-center">
                                            <div
                                                className="bg-gradient-to-br from-orange-100 to-orange-200 p-6 rounded-full">
                                                <FaNotesMedical className="w-20 h-20 text-orange-600"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                            <BsClockHistory className="text-blue-500"/>
                                            Fases principales de la evaluación
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                                    <h3 className="font-medium text-lg mb-2 text-blue-700 flex items-center gap-2">
                                                        <span
                                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                                                        Evaluación de la escena
                                                    </h3>
                                                    <p className="text-blue-600">Seguridad, mecanismo de lesión o
                                                        naturaleza de la enfermedad, número de pacientes y recursos
                                                        necesarios.</p>
                                                </div>
                                                <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
                                                    <h3 className="font-medium text-lg mb-2 text-red-700 flex items-center gap-2">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                                                        Evaluación primaria
                                                    </h3>
                                                    <p className="text-red-600">Detección de amenazas inmediatas a la
                                                        vida usando el protocolo ABCDE.</p>
                                                </div>
                                                <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                                                    <h3 className="font-medium text-lg mb-2 text-green-700 flex items-center gap-2">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                                                        Evaluación secundaria
                                                    </h3>
                                                    <p className="text-green-600">Examen físico completo o enfocado,
                                                        historia clínica y signos vitales detallados.</p>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 p-6 rounded-lg">
                                                <h3 className="font-medium text-lg mb-4 text-gray-800 flex items-center gap-2">
                                                    <FaHeartbeat className="text-red-500"/>
                                                    Importancia crítica
                                                </h3>
                                                <ul className="space-y-3">
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-green-500 mt-1">✓</span>
                                                        <span className="text-gray-700">Permite priorizar intervenciones que salvan vidas</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-green-500 mt-1">✓</span>
                                                        <span className="text-gray-700">Reduce errores y omisiones peligrosas</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-green-500 mt-1">✓</span>
                                                        <span className="text-gray-700">Mejora la comunicación con el equipo médico</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <span className="text-green-500 mt-1">✓</span>
                                                        <span className="text-gray-700">Facilita la transición hospitalaria</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                        <h3 className="font-medium text-lg mb-3 text-yellow-800">⚠️ Recordatorio
                                            importante</h3>
                                        <p className="text-yellow-700">La evaluación del paciente es un proceso continuo
                                            que se repite durante todo el encuentro con el paciente. Los hallazgos
                                            pueden cambiar y requieren reevaluación constante.</p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'scene' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                        <FaEye className="text-blue-500"/>
                                        Evaluación de la Escena
                                    </h2>

                                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">🚨 Principio
                                            fundamental</h3>
                                        <p className="text-red-600">La seguridad de la escena es SIEMPRE la prioridad
                                            #1. Un paramédico lesionado no puede ayudar a nadie.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Componentes de la
                                                evaluación</h3>

                                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                <h4 className="font-medium text-blue-800 mb-2 flex items-center gap-2">
                                                    🛡️ Seguridad de la escena
                                                </h4>
                                                <ul className="text-blue-700 space-y-1 text-sm">
                                                    <li>• Peligros para el personal, pacientes y testigos</li>
                                                    <li>• Materiales peligrosos, fuego, cables eléctricos</li>
                                                    <li>• Violencia doméstica, armas, drogas</li>
                                                    <li>• Condiciones del terreno y clima</li>
                                                </ul>
                                            </div>

                                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                                <h4 className="font-medium text-green-800 mb-2 flex items-center gap-2">
                                                    🔍 Naturaleza del incidente
                                                </h4>
                                                <ul className="text-green-700 space-y-1 text-sm">
                                                    <li>• <strong>Trauma:</strong> Mecanismo de lesión (MOI)</li>
                                                    <li>• <strong>Médico:</strong> Naturaleza de la enfermedad (NOI)
                                                    </li>
                                                    <li>• Fuerzas involucradas, velocidad, altura</li>
                                                    <li>• Posición del paciente encontrado</li>
                                                </ul>
                                            </div>

                                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                                <h4 className="font-medium text-purple-800 mb-2 flex items-center gap-2">
                                                    👥 Recursos y logística
                                                </h4>
                                                <ul className="text-purple-700 space-y-1 text-sm">
                                                    <li>• Número total de pacientes</li>
                                                    <li>• Necesidad de apoyo adicional</li>
                                                    <li>• Acceso y rutas de evacuación</li>
                                                    <li>• Equipos especiales requeridos</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Protocolo de
                                                seguridad</h3>

                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h4 className="font-medium text-gray-800 mb-3">Lista de verificación
                                                    rápida:</h4>
                                                <div className="space-y-2">
                                                    {[
                                                        "¿La escena es segura para acercarse?",
                                                        "¿Hay peligros obvios o potenciales?",
                                                        "¿Necesito EPP adicional?",
                                                        "¿Requiero apoyo de otros servicios?",
                                                        "¿Tengo rutas de escape identificadas?"
                                                    ].map((item, index) => (
                                                        <div key={index} className="flex items-center gap-2">
                                                            <input
                                                                type="checkbox"
                                                                className="w-4 h-4 text-orange-500 rounded"
                                                                onChange={(e) => {
                                                                    if (e.target.checked) {
                                                                        e.target.parentElement!.style.opacity = '0.6';
                                                                    } else {
                                                                        e.target.parentElement!.style.opacity = '1';
                                                                    }
                                                                }}
                                                            />
                                                            <span className="text-gray-700 text-sm">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                <h4 className="font-medium text-yellow-800 mb-2">⚡ Tips prácticos</h4>
                                                <ul className="text-yellow-700 space-y-1 text-sm">
                                                    <li>• Evalúa desde la distancia antes de acercarte</li>
                                                    <li>• Reevalúa la seguridad constantemente</li>
                                                    <li>• Comunica hallazgos a tu compañero</li>
                                                    <li>• Mantén contacto visual con rutas de escape</li>
                                                    <li>• Si dudas, retírate y pide apoyo</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                        <h3 className="font-medium text-lg mb-3 text-orange-800 flex items-center gap-2">
                                            🎯 Situaciones especiales
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div className="p-3 bg-white rounded border">
                                                <h4 className="font-medium text-gray-800 mb-1">Accidentes
                                                    vehiculares</h4>
                                                <p className="text-gray-600">Evalúa estabilidad del vehículo, fugas,
                                                    airbags desplegados</p>
                                            </div>
                                            <div className="p-3 bg-white rounded border">
                                                <h4 className="font-medium text-gray-800 mb-1">Violencia doméstica</h4>
                                                <p className="text-gray-600">Espera a que la policía asegure la
                                                    escena</p>
                                            </div>
                                            <div className="p-3 bg-white rounded border">
                                                <h4 className="font-medium text-gray-800 mb-1">Múltiples pacientes</h4>
                                                <p className="text-gray-600">Solicita recursos adicionales
                                                    inmediatamente</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'primary' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                        <FaStethoscope className="text-red-500"/>
                                        Evaluación Primaria (ABCDE)
                                    </h2>

                                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-6">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">🎯 Objetivo principal</h3>
                                        <p className="text-red-600">Identificar y tratar inmediatamente las condiciones
                                            que amenazan la vida del paciente en orden de prioridad.</p>
                                    </div>

                                    <div className="space-y-4">
                                        {[
                                            {
                                                letter: 'A',
                                                title: 'AIRWAY - Vía Aérea',
                                                color: 'red',
                                                icon: '🫁',
                                                content: {
                                                    evaluation: ['¿Puede hablar?', '¿Hay sonidos anormales?', '¿Obstrucción visible?', '¿Protección cervical?'],
                                                    actions: ['Aspiración si es necesario', 'Maniobras de apertura', 'Dispositivos de vía aérea', 'Inmovilización cervical'],
                                                    critical: 'Una vía aérea obstruida causa muerte en minutos'
                                                }
                                            },
                                            {
                                                letter: 'B',
                                                title: 'BREATHING - Respiración',
                                                color: 'blue',
                                                icon: '💨',
                                                content: {
                                                    evaluation: ['Frecuencia respiratoria', 'Esfuerzo respiratorio', 'Simetría torácica', 'Saturación de O₂'],
                                                    actions: ['Oxígeno suplementario', 'Ventilación asistida', 'Descompresión si indicado', 'Posicionamiento'],
                                                    critical: 'Evalúa calidad, no solo frecuencia'
                                                }
                                            },
                                            {
                                                letter: 'C',
                                                title: 'CIRCULATION - Circulación',
                                                color: 'green',
                                                icon: '❤️',
                                                content: {
                                                    evaluation: ['Pulso central y periférico', 'Color y temperatura', 'Relleno capilar', 'Hemorragias visibles'],
                                                    actions: ['Control de hemorragias', 'Acceso vascular', 'Reposición de volumen', 'Posición de shock'],
                                                    critical: 'Control de hemorragias tiene prioridad'
                                                }
                                            },
                                            {
                                                letter: 'D',
                                                title: 'DISABILITY - Discapacidad',
                                                color: 'purple',
                                                icon: '🧠',
                                                content: {
                                                    evaluation: ['Escala AVDI', 'Escala de Glasgow', 'Respuesta pupilar', 'Déficits neurológicos'],
                                                    actions: ['Protección cervical', 'Control de glucosa', 'Posicionamiento', 'Preparar traslado'],
                                                    critical: 'Los cambios neurológicos indican urgencia'
                                                }
                                            },
                                            {
                                                letter: 'E',
                                                title: 'EXPOSURE - Exposición',
                                                color: 'orange',
                                                icon: '🔍',
                                                content: {
                                                    evaluation: ['Lesiones ocultas', 'Sangrado no visible', 'Deformidades', 'Temperatura corporal'],
                                                    actions: ['Exposición controlada', 'Prevención de hipotermia', 'Evaluación completa', 'Protección de privacidad'],
                                                    critical: 'Exponerás lo necesario, cubrir lo demás'
                                                }
                                            }
                                        ].map((step, index) => (
                                            <div key={index}
                                                 className={`border border-gray-200 rounded-lg overflow-hidden ${selectedStep === step.letter ? 'ring-2 ring-orange-500' : ''}`}>
                                                <button
                                                    onClick={() => setSelectedStep(selectedStep === step.letter ? null : step.letter)}
                                                    className={`w-full p-4 text-left transition-colors hover:bg-gray-50 ${selectedStep === step.letter ? 'bg-gray-50' : ''}`}
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div
                                                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl bg-${step.color}-500`}>
                                                            {step.letter}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                                                <span>{step.icon}</span>
                                                                {step.title}
                                                            </h3>
                                                        </div>
                                                        <ChevronUpIcon
                                                            className={`w-5 h-5 text-gray-500 transition-transform ${
                                                                selectedStep === step.letter ? 'rotate-180' : ''
                                                            }`}
                                                        />
                                                    </div>
                                                </button>

                                                {selectedStep === step.letter && (
                                                    <div className="p-4 border-t bg-gray-50">
                                                        <div className="grid md:grid-cols-3 gap-4">
                                                            <div className="space-y-2">
                                                                <h4 className="font-medium text-gray-800">🔍
                                                                    Evaluar:</h4>
                                                                <ul className="text-sm text-gray-700 space-y-1">
                                                                    {step.content.evaluation.map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-2">
                                                                            <span
                                                                                className="text-green-500 mt-0.5">•</span>
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <h4 className="font-medium text-gray-800">⚡ Actuar:</h4>
                                                                <ul className="text-sm text-gray-700 space-y-1">
                                                                    {step.content.actions.map((item, i) => (
                                                                        <li key={i} className="flex items-start gap-2">
                                                                            <span
                                                                                className="text-blue-500 mt-0.5">•</span>
                                                                            {item}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                            <div
                                                                className={`p-3 bg-${step.color}-50 rounded border border-${step.color}-200`}>
                                                                <h4 className="font-medium text-gray-800 mb-1">💡 Punto
                                                                    clave:</h4>
                                                                <p className="text-sm text-gray-700">{step.content.critical}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                        <h3 className="font-medium text-lg mb-3 text-yellow-800">⏱️ Tiempos
                                            críticos</h3>
                                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                                            <div className="text-center p-3 bg-white rounded">
                                                <div className="text-2xl font-bold text-red-500">4-6 min</div>
                                                <div className="text-gray-600">Sin oxígeno → daño cerebral</div>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded">
                                                <div className="text-2xl font-bold text-orange-500">{'<'}10 min</div>
                                                <div className="text-gray-600">Evaluación primaria completa</div>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded">
                                                <div className="text-2xl font-bold text-green-500">{'<'}15 min</div>
                                                <div className="text-gray-600">En escena para trauma severo</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'secondary' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                        <FaStethoscope className="text-green-500"/>
                                        Evaluación Secundaria
                                    </h2>

                                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                                        <h3 className="font-medium text-lg mb-2 text-green-700">🎯 Objetivo</h3>
                                        <p className="text-green-600">Realizar una evaluación detallada para identificar
                                            lesiones o condiciones que no fueron evidentes en la evaluación
                                            primaria.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                <h3 className="font-medium text-lg mb-3 text-blue-800 flex items-center gap-2">
                                                    👁️ Examen físico sistemático
                                                </h3>
                                                <div className="space-y-3 text-sm">
                                                    <div className="p-2 bg-white rounded border">
                                                        <h4 className="font-medium text-gray-800">Cabeza y cuello</h4>
                                                        <p className="text-gray-600">Deformidades, contusiones,
                                                            abrasiones, penetraciones, quemaduras, dolor,
                                                            crepitación</p>
                                                    </div>
                                                    <div className="p-2 bg-white rounded border">
                                                        <h4 className="font-medium text-gray-800">Tórax</h4>
                                                        <p className="text-gray-600">Movimiento simétrico, ruidos
                                                            respiratorios, dolor, crepitación</p>
                                                    </div>
                                                    <div className="p-2 bg-white rounded border">
                                                        <h4 className="font-medium text-gray-800">Abdomen</h4>
                                                        <p className="text-gray-600">Distensión, dolor, rigidez, masa
                                                            pulsátil</p>
                                                    </div>
                                                    <div className="p-2 bg-white rounded border">
                                                        <h4 className="font-medium text-gray-800">Extremidades</h4>
                                                        <p className="text-gray-600">Deformidades, pulsos, función
                                                            motora y sensitiva</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                                <h3 className="font-medium text-lg mb-3 text-purple-800 flex items-center gap-2">
                                                    📊 Signos vitales completos
                                                </h3>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                                        <span>Presión arterial</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                                        <span>Frecuencia cardíaca</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                                        <span>Frecuencia respiratoria</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                                        <span>Temperatura</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                                        <span>SpO₂</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                                        <span>Glucosa sanguínea</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                                <h3 className="font-medium text-lg mb-3 text-orange-800 flex items-center gap-2">
                                                    📝 Historia clínica (SAMPLE)
                                                </h3>
                                                <div className="space-y-2 text-sm">
                                                    {[
                                                        {
                                                            letter: 'S',
                                                            term: 'SIGNS & SYMPTOMS',
                                                            desc: 'Signos y síntomas actuales'
                                                        },
                                                        {letter: 'A', term: 'ALLERGIES', desc: 'Alergias conocidas'},
                                                        {
                                                            letter: 'M',
                                                            term: 'MEDICATIONS',
                                                            desc: 'Medicamentos actuales'
                                                        },
                                                        {
                                                            letter: 'P',
                                                            term: 'PAST HISTORY',
                                                            desc: 'Historia médica relevante'
                                                        },
                                                        {
                                                            letter: 'L',
                                                            term: 'LAST MEAL',
                                                            desc: 'Última ingesta de alimentos'
                                                        },
                                                        {
                                                            letter: 'E',
                                                            term: 'EVENTS',
                                                            desc: 'Eventos que llevaron al incidente'
                                                        }
                                                    ].map((item, index) => (
                                                        <div key={index}
                                                             className="flex items-start gap-3 p-2 bg-white rounded border">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                                            {item.letter}
                                                        </span>
                                                            <div>
                                                                <div
                                                                    className="font-medium text-gray-800">{item.term}</div>
                                                                <div className="text-gray-600">{item.desc}</div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                                <h3 className="font-medium text-lg mb-3 text-yellow-800">⚡ Tips de
                                                    eficiencia</h3>
                                                <ul className="text-yellow-700 space-y-1 text-sm">
                                                    <li>• Enfócate en la queja principal si el paciente está estable
                                                    </li>
                                                    <li>• Usa un enfoque de cabeza a pies en trauma significativo</li>
                                                    <li>• Obtén signos vitales mientras realizas el examen físico</li>
                                                    <li>• Pregunta la historia mientras examinas</li>
                                                    <li>• Documenta hallazgos negativos importantes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <h3 className="text-lg font-semibold mb-3">📈 Valores normales por grupo
                                            etario</h3>
                                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                            <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-3 px-4 border-b font-medium text-left">Parámetro</th>
                                                <th className="py-3 px-4 border-b font-medium text-center">Adultos</th>
                                                <th className="py-3 px-4 border-b font-medium text-center">Niños (1-12
                                                    años)
                                                </th>
                                                <th className="py-3 px-4 border-b font-medium text-center">Lactantes
                                                    ({'<'}1 año)
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="hover:bg-gray-50">
                                                <td className="py-3 px-4 border-b font-medium">Frecuencia cardíaca</td>
                                                <td className="py-3 px-4 border-b text-center">60-100/min</td>
                                                <td className="py-3 px-4 border-b text-center">80-120/min</td>
                                                <td className="py-3 px-4 border-b text-center">100-160/min</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="py-3 px-4 border-b font-medium">Frecuencia respiratoria
                                                </td>
                                                <td className="py-3 px-4 border-b text-center">12-20/min</td>
                                                <td className="py-3 px-4 border-b text-center">20-30/min</td>
                                                <td className="py-3 px-4 border-b text-center">30-60/min</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="py-3 px-4 border-b font-medium">Presión arterial
                                                    sistólica
                                                </td>
                                                <td className="py-3 px-4 border-b text-center">{'>'}90 mmHg</td>
                                                <td className="py-3 px-4 border-b text-center">{'>'}80 + (2 × edad)
                                                    mmHg
                                                </td>
                                                <td className="py-3 px-4 border-b text-center">{'>'}70 mmHg</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="py-3 px-4 border-b font-medium">SpO₂</td>
                                                <td className="py-3 px-4 border-b text-center">≥95%</td>
                                                <td className="py-3 px-4 border-b text-center">≥95%</td>
                                                <td className="py-3 px-4 border-b text-center">≥95%</td>
                                            </tr>
                                            <tr className="hover:bg-gray-50">
                                                <td className="py-3 px-4 font-medium">Temperatura</td>
                                                <td className="py-3 px-4 text-center">36.5-37.5°C</td>
                                                <td className="py-3 px-4 text-center">36.5-37.5°C</td>
                                                <td className="py-3 px-4 text-center">36.5-37.5°C</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'tools' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                        🧰 Herramientas de Evaluación
                                    </h2>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                <h3 className="font-medium text-lg mb-3 text-blue-800 flex items-center gap-2">
                                                    📋 Nemotecnias esenciales
                                                </h3>

                                                <div className="space-y-3">
                                                    <div className="p-3 bg-white rounded border">
                                                        <h4 className="font-bold text-blue-700 mb-2">SAMPLE (Historia
                                                            clínica)</h4>
                                                        <div className="text-sm space-y-1">
                                                            <div><strong>S</strong>ignos y síntomas</div>
                                                            <div><strong>A</strong>lergias</div>
                                                            <div><strong>M</strong>edicamentos</div>
                                                            <div><strong>P</strong>asado médico relevante</div>
                                                            <div><strong>L</strong>ast meal (última comida)</div>
                                                            <div><strong>E</strong>ventos previos</div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-white rounded border">
                                                        <h4 className="font-bold text-blue-700 mb-2">OPQRST (Análisis
                                                            del dolor)</h4>
                                                        <div className="text-sm space-y-1">
                                                            <div><strong>O</strong>nset (inicio/tiempo)</div>
                                                            <div><strong>P</strong>rovocación/paliación</div>
                                                            <div><strong>Q</strong>uality (calidad/tipo)</div>
                                                            <div><strong>R</strong>adiación/región</div>
                                                            <div><strong>S</strong>everity (severidad/escala)</div>
                                                            <div><strong>T</strong>ime (duración/temporal)</div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-white rounded border">
                                                        <h4 className="font-bold text-blue-700 mb-2">AVDI (Estado de
                                                            conciencia)</h4>
                                                        <div className="text-sm space-y-1">
                                                            <div><strong>A</strong>lerta</div>
                                                            <div><strong>V</strong>oz (responde a estímulos verbales)
                                                            </div>
                                                            <div><strong>D</strong>olor (responde a estímulos dolorosos)
                                                            </div>
                                                            <div><strong>I</strong>nconsciente</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                                <h3 className="font-medium text-lg mb-3 text-green-800 flex items-center gap-2">
                                                    🧠 Escala de Glasgow
                                                </h3>

                                                <div className="space-y-3">
                                                    <div className="p-3 bg-white rounded border">
                                                        <h4 className="font-bold text-green-700 mb-2">Respuesta Ocular
                                                            (1-4)</h4>
                                                        <div className="text-sm space-y-1">
                                                            <div><strong>4:</strong> Espontánea</div>
                                                            <div><strong>3:</strong> A la voz</div>
                                                            <div><strong>2:</strong> Al dolor</div>
                                                            <div><strong>1:</strong> Sin respuesta</div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-white rounded border">
                                                        <h4 className="font-bold text-green-700 mb-2">Respuesta Verbal
                                                            (1-5)</h4>
                                                        <div className="text-sm space-y-1">
                                                            <div><strong>5:</strong> Orientada</div>
                                                            <div><strong>4:</strong> Confusa</div>
                                                            <div><strong>3:</strong> Palabras inapropiadas</div>
                                                            <div><strong>2:</strong> Sonidos incomprensibles</div>
                                                            <div><strong>1:</strong> Sin respuesta</div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-white rounded border">
                                                        <h4 className="font-bold text-green-700 mb-2">Respuesta Motora
                                                            (1-6)</h4>
                                                        <div className="text-sm space-y-1">
                                                            <div><strong>6:</strong> Obedece órdenes</div>
                                                            <div><strong>5:</strong> Localiza dolor</div>
                                                            <div><strong>4:</strong> Retira al dolor</div>
                                                            <div><strong>3:</strong> Flexión anormal</div>
                                                            <div><strong>2:</strong> Extensión anormal</div>
                                                            <div><strong>1:</strong> Sin respuesta</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-3 p-2 bg-green-100 rounded text-center">
                                                    <span className="text-green-800 font-medium">Puntuación total: 3-15 puntos</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                                        <h3 className="font-medium text-lg mb-4 text-yellow-800 flex items-center gap-2">
                                            📏 Escalas de evaluación adicionales
                                        </h3>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="p-4 bg-white rounded border">
                                                <h4 className="font-bold text-gray-800 mb-3">Escala de Dolor (0-10)</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span>0-2:</span>
                                                        <span className="text-green-600">Leve</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>3-6:</span>
                                                        <span className="text-yellow-600">Moderado</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>7-10:</span>
                                                        <span className="text-red-600">Severo</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white rounded border">
                                                <h4 className="font-bold text-gray-800 mb-3">Relleno Capilar</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="flex justify-between">
                                                        <span>{'<'}2 seg:</span>
                                                        <span className="text-green-600">Normal</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>2-3 seg:</span>
                                                        <span className="text-yellow-600">Retardado</span>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <span>{'>'}3 seg:</span>
                                                        <span className="text-red-600">Anormal</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white rounded border">
                                                <h4 className="font-bold text-gray-800 mb-3">Pupilas (PERRL)</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div><strong>P</strong>upilas</div>
                                                    <div><strong>E</strong>quales</div>
                                                    <div><strong>R</strong>edondas</div>
                                                    <div><strong>R</strong>eactivas a la</div>
                                                    <div><strong>L</strong>uz</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="font-medium text-lg mb-4 text-gray-800">🎯 Consejos de aplicación
                                            práctica</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Memoriza las nemotecnias hasta que sean automáticas</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Practica la escala de Glasgow con compañeros</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-blue-500 mt-1">•</span>
                                                    <span>Usa tarjetas de referencia hasta dominar los valores</span>
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-500 mt-1">•</span>
                                                    <span>Documenta hallazgos negativos importantes</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-500 mt-1">•</span>
                                                    <span>Compara valores con evaluaciones previas</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <span className="text-green-500 mt-1">•</span>
                                                    <span>Contextualiza los hallazgos con la historia clínica</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                                        🏥 Casos Clínicos Interactivos
                                    </h2>

                                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">🎯 Objetivo del
                                            ejercicio</h3>
                                        <p className="text-blue-600">Analiza cada caso siguiendo el protocolo
                                            sistemático de evaluación. Identifica los pasos clave y las intervenciones
                                            prioritarias.</p>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Caso 1 */}
                                        <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-red-500">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div
                                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Politrauma
                                                        en accidente vehicular</h3>
                                                    <div className="bg-red-50 p-3 rounded-lg mb-4">
                                                        <p className="italic text-red-800 font-medium">Escenario:</p>
                                                        <p className="text-red-700">Hombre de 30 años, accidente
                                                            automovilístico de alta velocidad, impacto frontal. Paciente
                                                            inconsciente, atrapado en el vehículo. Airbag desplegado,
                                                            volante deformado.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <div className="p-3 bg-gray-50 rounded-lg">
                                                        <h4 className="font-medium mb-2 text-gray-800">🔍 Evaluación
                                                            inicial encontrada:</h4>
                                                        <div className="space-y-2 text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-red-500 text-white rounded px-2 py-1 text-xs">A</span>
                                                                <span>Vía aérea comprometida, sangre visible en boca</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-blue-500 text-white rounded px-2 py-1 text-xs">B</span>
                                                                <span>FR 8/min, respiración superficial, SpO₂ 85%</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-green-500 text-white rounded px-2 py-1 text-xs">C</span>
                                                                <span>FC 120/min débil, TA 90/60 mmHg, piel pálida y fría</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-purple-500 text-white rounded px-2 py-1 text-xs">D</span>
                                                                <span>No responde a estímulos, Glasgow 6</span>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-orange-500 text-white rounded px-2 py-1 text-xs">E</span>
                                                                <span>Fractura expuesta en fémur derecho, deformidad torácica</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                                                        <h4 className="font-medium mb-2 text-red-800">⚠️ Amenazas
                                                            inmediatas identificadas:</h4>
                                                        <ul className="text-red-700 text-sm space-y-1">
                                                            <li>• Compromiso de vía aérea con riesgo de aspiración</li>
                                                            <li>• Insuficiencia respiratoria severa</li>
                                                            <li>• Shock hipovolémico (probable hemorragia interna)</li>
                                                            <li>• Traumatismo craneoencefálico severo</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                                        <h4 className="font-medium mb-2 text-green-800">✅ Secuencia de
                                                            manejo correcto:</h4>
                                                        <ol className="text-green-700 text-sm space-y-2">
                                                            <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">1</span>
                                                                <span><strong>Seguridad:</strong> Estabilizar vehículo, desconectar batería</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">2</span>
                                                                <span><strong>Vía aérea:</strong> Aspiración inmediata + protección cervical</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">3</span>
                                                                <span><strong>Respiración:</strong> Ventilación asistida con BVM</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">4</span>
                                                                <span><strong>Circulación:</strong> Control de hemorragia externa</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">5</span>
                                                                <span><strong>Inmovilización:</strong> Extricación rápida con tabla larga</span>
                                                            </li>
                                                            <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">6</span>
                                                                <span><strong>Traslado:</strong> Código rojo a centro de trauma</span>
                                                            </li>
                                                        </ol>
                                                    </div>

                                                    <div
                                                        className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                                        <h4 className="font-medium mb-2 text-yellow-800">💡 Puntos clave
                                                            de aprendizaje:</h4>
                                                        <ul className="text-yellow-700 text-sm space-y-1">
                                                            <li>• El manejo de vía aérea es prioritario pero debe
                                                                proteger columna cervical
                                                            </li>
                                                            <li>• La regla de oro: "Load and Go" para trauma severo</li>
                                                            <li>• Tiempo en escena {'<'} 10 minutos para politrauma</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Caso 2 */}
                                        <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div
                                                    className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Emergencia
                                                        abdominal en mujer joven</h3>
                                                    <div className="bg-blue-50 p-3 rounded-lg mb-4">
                                                        <p className="italic text-blue-800 font-medium">Escenario:</p>
                                                        <p className="text-blue-700">Mujer de 28 años, dolor abdominal
                                                            súbito e intenso hace 2 horas. Palidez marcada, sudoración
                                                            profusa, ansiosa. Refiere posible embarazo.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <div className="p-3 bg-gray-50 rounded-lg">
                                                        <h4 className="font-medium mb-2 text-gray-800">🔍 Hallazgos de
                                                            evaluación:</h4>
                                                        <div className="space-y-2 text-sm">
                                                            <div><strong>Primaria:</strong> A/B normales, C: FC 130/min,
                                                                TA 85/50 mmHg
                                                            </div>
                                                            <div><strong>Dolor:</strong> 9/10, localizado en cuadrante
                                                                inferior derecho
                                                            </div>
                                                            <div><strong>SAMPLE:</strong> Sin alergias, no medicamentos,
                                                                FUM hace 6 semanas
                                                            </div>
                                                            <div><strong>Examen:</strong> Abdomen distendido, defensa
                                                                muscular
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                                        <h4 className="font-medium mb-2 text-blue-800">🤔 Diagnóstico
                                                            diferencial:</h4>
                                                        <ul className="text-blue-700 text-sm space-y-1">
                                                            <li>• Embarazo ectópico roto (más probable)</li>
                                                            <li>• Apendicitis aguda</li>
                                                            <li>• Quiste ovárico roto</li>
                                                            <li>• Torsión ovárica</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                                        <h4 className="font-medium mb-2 text-green-800">🚨 Manejo de
                                                            emergencia:</h4>
                                                        <ol className="text-green-700 text-sm space-y-2">
                                                            <li><strong>1.</strong> Oxígeno suplementario</li>
                                                            <li><strong>2.</strong> Dos accesos venosos calibre 18G</li>
                                                            <li><strong>3.</strong> Posición de semi-Fowler o lateral
                                                                izquierdo
                                                            </li>
                                                            <li><strong>4.</strong> Monitorización continua</li>
                                                            <li><strong>5.</strong> Traslado inmediato a hospital con
                                                                ginecología
                                                            </li>
                                                            <li><strong>6.</strong> Preparar para posible reanimación
                                                            </li>
                                                        </ol>
                                                    </div>

                                                    <div
                                                        className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                                        <h4 className="font-medium mb-2 text-yellow-800">⚡
                                                            Consideraciones especiales:</h4>
                                                        <ul className="text-yellow-700 text-sm space-y-1">
                                                            <li>• Embarazo ectópico puede causar shock rápidamente</li>
                                                            <li>• Evitar palpación abdominal profunda</li>
                                                            <li>• Informar hallazgos al hospital receptor</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Caso 3 */}
                                        <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div
                                                    className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Emergencia
                                                        pediátrica respiratoria</h3>
                                                    <div className="bg-green-50 p-3 rounded-lg mb-4">
                                                        <p className="italic text-green-800 font-medium">Escenario:</p>
                                                        <p className="text-green-700">Niño de 4 años, fiebre alta,
                                                            dificultad respiratoria progresiva, letargo. Madre refiere
                                                            que "respira raro" desde hace unas horas.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <div className="p-3 bg-gray-50 rounded-lg">
                                                        <h4 className="font-medium mb-2 text-gray-800">🔍 Evaluación
                                                            pediátrica:</h4>
                                                        <div className="space-y-2 text-sm">
                                                            <div><strong>Vía aérea:</strong> Permeable, sin estridor
                                                            </div>
                                                            <div><strong>Respiración:</strong> FR 45/min, tirajes, SpO₂
                                                                88%
                                                            </div>
                                                            <div><strong>Circulación:</strong> FC 160/min, piel moteada
                                                            </div>
                                                            <div><strong>Neurológico:</strong> Letárgico, responde a voz
                                                            </div>
                                                            <div><strong>Temperatura:</strong> 39.5°C</div>
                                                        </div>
                                                    </div>

                                                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                                                        <h4 className="font-medium mb-2 text-red-800">🚨 Signos de alarma
                                                            presentes:</h4>
                                                        <ul className="text-red-700 text-sm space-y-1">
                                                            <li>• Uso de músculos accesorios</li>
                                                            <li>• Hipoxemia significativa</li>
                                                            <li>• Taquicardia compensatoria</li>
                                                            <li>• Alteración del estado mental</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                                        <h4 className="font-medium mb-2 text-green-800">👶 Manejo
                                                            pediátrico específico:</h4>
                                                        <ol className="text-green-700 text-sm space-y-2">
                                                            <li><strong>1.</strong> Oxígeno húmedo al 100% (mascarilla
                                                                pediátrica)
                                                            </li>
                                                            <li><strong>2.</strong> Posición de comodidad (sentado si
                                                                tolera)
                                                            </li>
                                                            <li><strong>3.</strong> Acceso venoso periférico si es
                                                                posible
                                                            </li>
                                                            <li><strong>4.</strong> Monitorización completa</li>
                                                            <li><strong>5.</strong> Control de fiebre (destaparlo)</li>
                                                            <li><strong>6.</strong> Traslado rápido a hospital
                                                                pediátrico
                                                            </li>
                                                        </ol>
                                                    </div>

                                                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                                        <h4 className="font-medium mb-2 text-blue-800">📊 Valores
                                                            normales pediátricos (4 años):</h4>
                                                        <div className="text-blue-700 text-sm space-y-1">
                                                            <div><strong>FR:</strong> 20-30/min</div>
                                                            <div><strong>FC:</strong> 80-120/min</div>
                                                            <div><strong>TA sistólica:</strong> {'>'}88 mmHg</div>
                                                            <div><strong>SpO₂:</strong> ≥95%</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="font-medium text-lg mb-4 text-gray-800 flex items-center gap-2">
                                            🧩 Ejercicio de reflexión
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <h4 className="font-medium text-gray-800">Preguntas para
                                                    autoevaluación:</h4>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li>• ¿Qué pasos del protocolo ABCDE fueron críticos en cada caso?
                                                    </li>
                                                    <li>• ¿Cuáles fueron las intervenciones que no debías retrasar?</li>
                                                    <li>• ¿Cómo modificarías tu evaluación si los hallazgos fueran
                                                        diferentes?
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-medium text-gray-800">Puntos clave para
                                                    recordar:</h4>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li>• La evaluación sistemática salva vidas</li>
                                                    <li>• Identifica y trata amenazas inmediatas primero</li>
                                                    <li>• Adapta tu enfoque según el tipo de paciente</li>
                                                    <li>• La práctica constante mejora la velocidad y precisión</li>
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
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="evaluation" 
                            titulo="Foro de Discusión - Evaluation"
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
                                        <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.
                                        </li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición).
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/patient-assessment/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre evaluación del paciente</a></li>
                                        <li><a href="https://www.jems.com/patient-care/assessment/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de evaluación</a></li>
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
