import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./NeuroEmergency.questions.ts";
import {RiBrain2Fill} from "react-icons/ri";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdCheckCircle, MdWarning, MdEmergency} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsClock} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaHeartbeat, FaEye, FaHandPaper} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiTarget} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function NeuroEmergency() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'assessment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Emergencias Neurológicas EMT | Manejo Prehospitalario de ACV, Convulsiones y TCE"
            description="Guía completa sobre emergencias neurológicas para Técnicos en Atención Médica Prehospitalaria: reconocimiento de ACV, manejo de convulsiones, evaluación neurológica y casos clínicos. Aprende protocolos vitales para salvar vidas."
            keywords="emergencias neurológicas, ACV, accidente cerebrovascular, convulsiones, TCE, traumatismo craneoencefálico, EMT, paramédicos, escala Cincinnati, escala Glasgow, síncope, estado epiléptico, evaluación neurológica"
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
                                <RiBrain2Fill className="w-24 h-24 mb-1 text-orange-500" />
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Neurológicas</h1>
                            <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/neuro-emergency/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/15fdQZsSUuF9ViCqGwilGhDpF4zVoU5f8/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1vEqULFgrQsRa2Pwu1xJ-kmRi6jv2OFKm/view?usp=drive_link"
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
                                    Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('anatomy')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'anatomy' 
                                            ? 'border-orange-500 text-orange-600' 
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Anatomía y Fisiología
                                </button>
                                <button
                                    onClick={() => setActiveTab('assessment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'assessment' 
                                            ? 'border-orange-500 text-orange-600' 
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación y Manejo
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
                                <div className="space-y-8">
                                    {/* Importancia crítica */}
                                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Reconocimiento Temprano Salva Vidas!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            Las emergencias neurológicas pueden progresar rápidamente y causar daño permanente. 
                                            El <strong>reconocimiento temprano</strong> y la <strong>intervención rápida</strong> son fundamentales 
                                            para mejorar el pronóstico del paciente.
                                        </p>
                                        <div className="mt-4 grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <BsClock className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">Ventana terapéutica</p>
                                                <p className="text-sm">ACV: 3-4.5 horas para trombólisis</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdEmergency className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">Estado epiléptico</p>
                                                <p className="text-sm">Convulsiones &gt;5 minutos</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <FaHeartbeat className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                                                <p className="font-bold text-purple-600">TCE grave</p>
                                                <p className="text-sm">Glasgow &lt;8 intubación</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Patologías principales */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Principales Emergencias Neurológicas
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-3">Emergencias Vasculares</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiTarget className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>ACV Isquémico (85%):</strong> Oclusión arterial</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiTarget className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>ACV Hemorrágico (15%):</strong> Ruptura vascular</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiTarget className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>AIT:</strong> Síntomas transitorios &lt;24h</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-green-700 mb-3">Emergencias No Vasculares</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiTarget className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Convulsiones:</strong> Actividad neuronal anormal</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiTarget className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>TCE:</strong> Trauma directo o indirecto</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiTarget className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Síncope:</strong> Pérdida transitoria conciencia</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de alarma críticos */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FaEye className="w-4 h-4 mr-2"/>
                                                    Neurológicos:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Déficit neurológico focal súbito</li>
                                                    <li>Alteración súbita del nivel de conciencia</li>
                                                    <li>Cefalea súbita e intensa ("trueno")</li>
                                                    <li>Convulsiones prolongadas (&gt;5 min)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FaHandPaper className="w-4 h-4 mr-2"/>
                                                    Motores:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Hemiparesia o hemiplejía</li>
                                                    <li>Parálisis facial</li>
                                                    <li>Pérdida de coordinación</li>
                                                    <li>Posturas anormales</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FiUser className="w-4 h-4 mr-2"/>
                                                    Vitales:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Alteración del habla o lenguaje</li>
                                                    <li>Trastornos visuales súbitos</li>
                                                    <li>Vómito en proyectil</li>
                                                    <li>Alteración pupilar</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos clave para recordar */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-green-800">Puntos Clave para el Éxito</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    Hacer SIEMPRE:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Evaluar ABC primero</li>
                                                    <li>Obtener historia clínica completa</li>
                                                    <li>Determinar hora de inicio síntomas</li>
                                                    <li>Controlar glucosa capilar</li>
                                                    <li>Documentar hallazgos neurológicos</li>
                                                    <li>Comunicar al hospital receptor</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <MdWarning className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Administrar glucosa sin confirmar hipoglucemia</li>
                                                    <li>Restringir movimientos durante convulsión</li>
                                                    <li>Introducir objetos en la boca</li>
                                                    <li>Asumir intoxicación en alteración conciencia</li>
                                                    <li>Retrasar traslado por "mejoría"</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'anatomy' && (
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                        <div className="md:w-1/2">
                                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema Nervioso Central</h2>
                                            <p className="text-gray-700 leading-relaxed mb-4">
                                                El SNC está protegido por las meninges y el líquido cefalorraquídeo, pero es vulnerable 
                                                a lesiones por trauma, isquemia y hemorragia.
                                            </p>
                                            <div className="space-y-3">
                                                <div className="bg-blue-50 p-3 rounded">
                                                    <h4 className="font-semibold text-blue-800">Cerebro</h4>
                                                    <p className="text-sm text-gray-700">Control ejecutivo, memoria, lenguaje, movimiento voluntario</p>
                                                </div>
                                                <div className="bg-green-50 p-3 rounded">
                                                    <h4 className="font-semibold text-green-800">Cerebelo</h4>
                                                    <p className="text-sm text-gray-700">Coordinación, equilibrio, control motor fino</p>
                                                </div>
                                                <div className="bg-red-50 p-3 rounded">
                                                    <h4 className="font-semibold text-red-800">Tronco Encefálico</h4>
                                                    <p className="text-sm text-gray-700">Funciones vitales: respiración, frecuencia cardíaca, presión arterial</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 flex justify-center">
                                            <img
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Brain_human_normal_inferior_view_with_labels_es.svg/500px-Brain_human_normal_inferior_view_with_labels_es.svg.png"
                                                alt="Anatomía del sistema nervioso"
                                                className="rounded-lg shadow-md max-w-full h-auto"
                                            />
                                        </div>
                                    </div>

                                    {/* Circulación cerebral */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4">Circulación Cerebral y Territorios Vasculares</h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-semibold text-blue-600 mb-2">Arteria Cerebral Anterior</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Corteza frontal medial</li>
                                                    <li>• Control motor piernas</li>
                                                    <li>• Personalidad, juicio</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-semibold text-red-600 mb-2">Arteria Cerebral Media</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Corteza frontal lateral</li>
                                                    <li>• Control motor cara/brazo</li>
                                                    <li>• Lenguaje (hemisferio dominante)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-semibold text-green-600 mb-2">Arteria Cerebral Posterior</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Lóbulo occipital</li>
                                                    <li>• Corteza visual primaria</li>
                                                    <li>• Tálamo, tronco encefálico</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fisiopatología */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiopatología de las Lesiones Neurológicas</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                                    <h4 className="font-semibold text-red-800 mb-2">Isquemia Cerebral</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Reducción flujo sanguíneo</li>
                                                        <li>• Falta de oxígeno y glucosa</li>
                                                        <li>• Muerte neuronal progresiva</li>
                                                        <li>• Zona de penumbra isquémica</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                                                    <h4 className="font-semibold text-purple-800 mb-2">Convulsiones</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Actividad neuronal anormal</li>
                                                        <li>• Descargas eléctricas sincronizadas</li>
                                                        <li>• Alteración neurotransmisores</li>
                                                        <li>• Agotamiento energético neuronal</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                                                    <h4 className="font-semibold text-orange-800 mb-2">Hemorragia Cerebral</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Ruptura vascular</li>
                                                        <li>• Efecto masa por hematoma</li>
                                                        <li>• Aumento presión intracraneal</li>
                                                        <li>• Herniación cerebral</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                                    <h4 className="font-semibold text-green-800 mb-2">Trauma Craneal</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Lesión primaria: impacto directo</li>
                                                        <li>• Lesión secundaria: hipoxia, edema</li>
                                                        <li>• Aumento PIC</li>
                                                        <li>• Compromiso perfusión cerebral</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Escalas neurológicas */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Escalas de Evaluación Neurológica</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white rounded-lg shadow">
                                                <thead className="bg-orange-100">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left font-semibold">Escala</th>
                                                        <th className="py-3 px-4 text-left font-semibold">Uso Principal</th>
                                                        <th className="py-3 px-4 text-left font-semibold">Componentes</th>
                                                        <th className="py-3 px-4 text-left font-semibold">Interpretación</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="py-3 px-4 font-medium text-blue-600">AVDI</td>
                                                        <td className="py-3 px-4">Nivel de conciencia</td>
                                                        <td className="py-3 px-4">Alerta, Voz, Dolor, No responde</td>
                                                        <td className="py-3 px-4">Evaluación rápida inicial</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 font-medium text-green-600">Glasgow</td>
                                                        <td className="py-3 px-4">TCE, coma</td>
                                                        <td className="py-3 px-4">Ocular (4) + Verbal (5) + Motora (6)</td>
                                                        <td className="py-3 px-4">3-8: Grave, 9-12: Moderado, 13-15: Leve</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 font-medium text-red-600">Cincinnati</td>
                                                        <td className="py-3 px-4">Sospecha de ACV</td>
                                                        <td className="py-3 px-4">Cara, Brazo, Habla</td>
                                                        <td className="py-3 px-4">1+ anormal = ACV probable</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 font-medium text-purple-600">NIHSS</td>
                                                        <td className="py-3 px-4">Severidad ACV</td>
                                                        <td className="py-3 px-4">15 ítems neurológicos</td>
                                                        <td className="py-3 px-4">0-42: Mayor puntaje = mayor déficit</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'assessment' && (
                                <div className="space-y-8">
                                    {/* Evaluación primaria sistemática */}
                                    <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">Evaluación Primaria Neurológica</h2>
                                        </div>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-blue-700 mb-2">A - Vía Aérea</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Protección cervical</li>
                                                    <li>• Aspiración si necesario</li>
                                                    <li>• Posición lateral si vómito</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-green-700 mb-2">B - Respiración</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• FR, ritmo, profundidad</li>
                                                    <li>• SpO₂ &gt; 94%</li>
                                                    <li>• Patrones anormales</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-red-700 mb-2">C - Circulación</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Pulso, TA</li>
                                                    <li>• Perfusión</li>
                                                    <li>• Hemorragias</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-purple-700 mb-2">D - Neurológico</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• AVDI/Glasgow</li>
                                                    <li>• Pupilas</li>
                                                    <li>• Déficit focal</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evaluación específica por patología */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Protocolos de Evaluación Específica</h2>
                                        <div className="space-y-6">
                                            
                                            {/* Protocolo ACV */}
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                    <FiTarget className="w-6 h-6 mr-2"/>
                                                    Protocolo ACV - Escala de Cincinnati
                                                </h3>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div className="bg-white p-4 rounded border">
                                                        <h4 className="font-semibold text-blue-800 mb-2">1. Parálisis Facial</h4>
                                                        <p className="text-sm text-gray-700 mb-2"><strong>Instrucción:</strong> "Sonría o muestre los dientes"</p>
                                                        <ul className="text-xs text-gray-600 space-y-1">
                                                            <li>• Normal: Ambos lados se mueven igual</li>
                                                            <li>• Anormal: Un lado no se mueve o se mueve menos</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-4 rounded border">
                                                        <h4 className="font-semibold text-blue-800 mb-2">2. Debilidad en Brazo</h4>
                                                        <p className="text-sm text-gray-700 mb-2"><strong>Instrucción:</strong> "Cierre los ojos y mantenga ambos brazos arriba por 10 segundos"</p>
                                                        <ul className="text-xs text-gray-600 space-y-1">
                                                            <li>• Normal: Ambos brazos se mantienen arriba</li>
                                                            <li>• Anormal: Un brazo cae o deriva hacia abajo</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-4 rounded border">
                                                        <h4 className="font-semibold text-blue-800 mb-2">3. Habla Anormal</h4>
                                                        <p className="text-sm text-gray-700 mb-2"><strong>Instrucción:</strong> "Repita: 'El cielo es azul en Cincinnati'"</p>
                                                        <ul className="text-xs text-gray-600 space-y-1">
                                                            <li>• Normal: Palabras claras y correctas</li>
                                                            <li>• Anormal: Arrastra palabras, usa palabras incorrectas o no puede hablar</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-4 bg-yellow-100 p-3 rounded">
                                                    <p className="text-sm font-medium text-yellow-800">
                                                        <strong>Interpretación:</strong> Si cualquier signo es anormal = 72% probabilidad de ACV
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Protocolo Convulsiones */}
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-green-700 mb-4">Manejo de Convulsiones</h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-green-800 mb-3">Durante la Convulsión:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li>Proteger cabeza del paciente</li>
                                                            <li>Mover objetos peligrosos</li>
                                                            <li>NO restringir movimientos</li>
                                                            <li>NO introducir objetos en boca</li>
                                                            <li>Cronometrar duración</li>
                                                            <li>Observar tipo de movimientos</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800 mb-3">Post-ictal (Después):</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li>Posición de recuperación</li>
                                                            <li>Evaluación vía aérea</li>
                                                            <li>Aspiración si necesario</li>
                                                            <li>Oxígeno si SpO₂ &lt; 94%</li>
                                                            <li>Control de glucosa</li>
                                                            <li>Evaluación neurológica</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                                <div className="mt-4 bg-red-100 p-3 rounded">
                                                    <p className="text-sm font-medium text-red-800 flex items-center">
                                                        <MdWarning className="w-4 h-4 mr-2"/>
                                                        <strong>Estado Epiléptico:</strong> Convulsión &gt; 5 minutos o convulsiones repetidas sin recuperación
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Protocolo TCE */}
                                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-purple-700 mb-4">Evaluación Traumatismo Craneoencefálico</h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-purple-800 mb-3">Escala de Glasgow:</h4>
                                                        <div className="space-y-2">
                                                            <div className="bg-white p-3 rounded border">
                                                                <h5 className="font-medium text-sm">Apertura Ocular (1-4)</h5>
                                                                <ul className="text-xs text-gray-600 mt-1">
                                                                    <li>4: Espontánea</li>
                                                                    <li>3: A la voz</li>
                                                                    <li>2: Al dolor</li>
                                                                    <li>1: No abre</li>
                                                                </ul>
                                                            </div>
                                                            <div className="bg-white p-3 rounded border">
                                                                <h5 className="font-medium text-sm">Respuesta Verbal (1-5)</h5>
                                                                <ul className="text-xs text-gray-600 mt-1">
                                                                    <li>5: Orientado</li>
                                                                    <li>4: Confuso</li>
                                                                    <li>3: Palabras inapropiadas</li>
                                                                    <li>2: Sonidos incomprensibles</li>
                                                                    <li>1: Sin respuesta</li>
                                                                </ul>
                                                            </div>
                                                            <div className="bg-white p-3 rounded border">
                                                                <h5 className="font-medium text-sm">Respuesta Motora (1-6)</h5>
                                                                <ul className="text-xs text-gray-600 mt-1">
                                                                    <li>6: Obedece órdenes</li>
                                                                    <li>5: Localiza dolor</li>
                                                                    <li>4: Retirada normal</li>
                                                                    <li>3: Flexión anormal</li>
                                                                    <li>2: Extensión anormal</li>
                                                                    <li>1: Sin respuesta</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-purple-800 mb-3">Interpretación y Manejo:</h4>
                                                        <div className="space-y-3">
                                                            <div className="bg-red-100 p-3 rounded">
                                                                <h5 className="font-medium text-red-800">TCE Grave (3-8)</h5>
                                                                <ul className="text-sm text-gray-700 mt-1">
                                                                    <li>• Manejo avanzado vía aérea</li>
                                                                    <li>• Hiperventilación controlada</li>
                                                                    <li>• Prevenir hipotensión</li>
                                                                </ul>
                                                            </div>
                                                            <div className="bg-yellow-100 p-3 rounded">
                                                                <h5 className="font-medium text-yellow-800">TCE Moderado (9-12)</h5>
                                                                <ul className="text-sm text-gray-700 mt-1">
                                                                    <li>• Monitorización estrecha</li>
                                                                    <li>• Oxígeno suplementario</li>
                                                                    <li>• Reevaluación frecuente</li>
                                                                </ul>
                                                            </div>
                                                            <div className="bg-green-100 p-3 rounded">
                                                                <h5 className="font-medium text-green-800">TCE Leve (13-15)</h5>
                                                                <ul className="text-sm text-gray-700 mt-1">
                                                                    <li>• Evaluación completa</li>
                                                                    <li>• Observación síntomas</li>
                                                                    <li>• Educación al paciente</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo farmacológico básico */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Consideraciones de Manejo Prehospitalario</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                    <MdCheckCircle className="w-5 h-5 mr-2 text-green-600"/>
                                                    Intervenciones Esenciales:
                                                </h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span><strong>Control de glucosa:</strong> Descartar hipoglucemia en todo paciente con alteración neurológica</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span><strong>Oxigenoterapia:</strong> Mantener SpO₂ &gt; 94%, evitar hiperoxia</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span><strong>Posicionamiento:</strong> Cabecera 30° si no hay contraindicación</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span><strong>Control TA:</strong> Evitar hipotensión, hipertensión extrema</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span><strong>Tiempo:</strong> Documentar hora exacta de inicio síntomas</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                    <MdWarning className="w-5 h-5 mr-2 text-red-600"/>
                                                    Errores a Evitar:
                                                </h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>Administrar glucosa sin confirmar hipoglucemia</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>Hiperventilación agresiva en TCE</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>Retrasar traslado por estabilización</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>Asumir intoxicación sin evaluar</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <span>Olvidar protección cervical en trauma</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del sistema nervioso</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El sistema nervioso se divide en central (SNC) y periférico (SNP):
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>SNC:</strong> Encéfalo (cerebro, cerebelo, tronco encefálico) y médula espinal.</li>
                                            <li><strong>SNP:</strong> Nervios craneales y espinales, conectan el SNC con el resto del cuerpo.</li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            El encéfalo controla funciones motoras, sensoriales, cognitivas y vitales. La médula espinal transmite impulsos entre el cerebro y el cuerpo.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Brain_human_normal_inferior_view_with_labels_es.svg/500px-Brain_human_normal_inferior_view_with_labels_es.svg.png"
                                            alt="Anatomía del sistema nervioso"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología neurológica básica</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Función cerebral</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                El cerebro procesa información sensorial, controla el movimiento, el lenguaje, la memoria y la conciencia. El tronco encefálico regula funciones vitales como respiración y frecuencia cardíaca.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Fisiopatología</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Las lesiones neurológicas pueden causar alteraciones motoras, sensoriales, cognitivas o del estado de conciencia. La isquemia cerebral y la hipertensión intracraneal son mecanismos frecuentes de daño.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escalas y parámetros de evaluación</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Escala</th>
                                                    <th className="py-2 px-4 border">Uso</th>
                                                    <th className="py-2 px-4 border">Puntaje/Resultado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">AVDI</td>
                                                    <td className="py-2 px-4 border">Nivel de conciencia</td>
                                                    <td className="py-2 px-4 border">Alerta, Voz, Dolor, No responde</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Glasgow</td>
                                                    <td className="py-2 px-4 border">TCE, coma</td>
                                                    <td className="py-2 px-4 border">3-15</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Cincinnati</td>
                                                    <td className="py-2 px-4 border">Sospecha de ACV</td>
                                                    <td className="py-2 px-4 border">Caída facial, debilidad en brazo, habla anormal</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'assessment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación y manejo inicial</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación primaria</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Seguridad de la escena</li>
                                                <li>Evaluación ABCDE</li>
                                                <li>Control de vía aérea y ventilación</li>
                                                <li>Monitorización de signos vitales</li>
                                                <li>Evaluación neurológica rápida (AVDI, Glasgow)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Manejo prehospitalario</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Oxígeno suplementario si SpO₂ &lt;94%</li>
                                                <li>Control de glucosa capilar</li>
                                                <li>Evitar hiperoxia y manipulación excesiva</li>
                                                <li>Traslado rápido a centro especializado</li>
                                                <li>Reevaluación continua</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico por patologías</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Accidente cerebrovascular (ACV)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Identificar síntomas con escala de Cincinnati</li>
                                                <li>Determinar hora de inicio de síntomas</li>
                                                <li>Oxígeno si SpO₂ &lt;94%</li>
                                                <li>Control de glucosa</li>
                                                <li>Traslado urgente a hospital con tomografía</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Convulsiones y estado epiléptico</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Proteger cabeza y evitar lesiones</li>
                                                <li>No introducir objetos en la boca</li>
                                                <li>Vía aérea permeable tras la convulsión</li>
                                                <li>Oxígeno si es necesario</li>
                                                <li>Control de glucosa</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Traumatismo craneoencefálico (TCE)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Inmovilización cervical si hay sospecha de trauma</li>
                                                <li>Oxígeno suplementario</li>
                                                <li>Monitorización neurológica continua</li>
                                                <li>Evitar hipotensión e hipoxia</li>
                                                <li>Traslado a centro de trauma</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Casos Clínicos Interactivos</h2>

                                {/* Caso 1: ACV isquémico */}
                                <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm border border-blue-200">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                                        <h3 className="text-xl font-semibold text-blue-700">Caso: ACV Isquémico</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-blue-800 mb-2">Escenario:</h4>
                                        <p className="italic text-gray-700 mb-3">
                                            Mujer de 68 años, despierta con debilidad en hemicuerpo derecho y dificultad para hablar. 
                                            Familia refiere que ayer en la noche estaba normal. Última vez vista normal: 08:00 hrs. Hora actual: 10:30 hrs.
                                        </p>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Hallazgos Vitales:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Conciencia:</strong> Alerta, orientada</li>
                                                <li>• <strong>Vía aérea:</strong> Permeable</li>
                                                <li>• <strong>Respiración:</strong> FR 18/min, SpO₂ 96%</li>
                                                <li>• <strong>Circulación:</strong> FC 90/min regular, TA 150/90</li>
                                                <li>• <strong>Glasgow:</strong> 13 (O4-V4-M5)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Examen Neurológico:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Habla:</strong> Disártrica, comprende órdenes</li>
                                                <li>• <strong>Cara:</strong> Paresia facial derecha</li>
                                                <li>• <strong>Brazo derecho:</strong> Deriva al elevar</li>
                                                <li>• <strong>Pierna derecha:</strong> Debilidad leve</li>
                                                <li>• <strong>Pupilas:</strong> Normales, reactivas</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-yellow-800 mb-2">Análisis del Caso:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-medium text-yellow-700 mb-1">Escala de Cincinnati:</h5>
                                                <ul className="text-sm text-gray-700">
                                                    <li>✓ Parálisis facial: <span className="text-red-600">ANORMAL</span></li>
                                                    <li>✓ Debilidad brazo: <span className="text-red-600">ANORMAL</span></li>
                                                    <li>✓ Habla anormal: <span className="text-red-600">ANORMAL</span></li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-yellow-700 mb-1">Manejo Correcto:</h5>
                                                <ol className="text-sm text-gray-700 list-decimal list-inside">
                                                    <li>Oxígeno si SpO₂ &lt;94%</li>
                                                    <li>Control glucosa capilar</li>
                                                    <li>Traslado URGENTE código ACV</li>
                                                    <li>Notificación hospital</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 2: Estado epiléptico */}
                                <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-sm border border-green-200">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                                        <h3 className="text-xl font-semibold text-green-700">Caso: Estado Epiléptico</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-green-800 mb-2">Escenario:</h4>
                                        <p className="italic text-gray-700 mb-3">
                                            Hombre de 25 años, historia de epilepsia. Familiar reporta convulsión generalizada que inició 
                                            hace 7 minutos y continúa. No ha recuperado conciencia entre episodios.
                                        </p>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-800 mb-2">Hallazgos Durante Convulsión:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Tipo:</strong> Tónico-clónica generalizada</li>
                                                <li>• <strong>Duración:</strong> &gt; 7 minutos continua</li>
                                                <li>• <strong>Respiración:</strong> Irregular, cianosis perioral</li>
                                                <li>• <strong>SpO₂:</strong> 88% durante convulsión</li>
                                                <li>• <strong>Incontinencia:</strong> Presente</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-800 mb-2">Post-Convulsión (min 10):</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Conciencia:</strong> Estuporoso</li>
                                                <li>• <strong>Vía aérea:</strong> Permeable, secreciones</li>
                                                <li>• <strong>Respiración:</strong> FR 24/min, SpO₂ 92%</li>
                                                <li>• <strong>FC:</strong> 110/min, TA 140/85</li>
                                                <li>• <strong>Glasgow:</strong> 9 (O2-V2-M5)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                            <MdWarning className="w-5 h-5 mr-2"/>
                                            Estado Epiléptico - Manejo Prioritario:
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-medium text-red-700 mb-1">Intervenciones Inmediatas:</h5>
                                                <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                                                    <li>Proteger vía aérea (aspiración)</li>
                                                    <li>Oxígeno alto flujo</li>
                                                    <li>Acceso IV si posible</li>
                                                    <li>Control glucosa capilar STAT</li>
                                                    <li>Posición lateral segura</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-red-700 mb-1">Consideraciones:</h5>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Emergencia neurológica</li>
                                                    <li>• Riesgo de aspiración</li>
                                                    <li>• Traslado inmediato</li>
                                                    <li>• Medicación anticonvulsiva</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 3: TCE con deterioro */}
                                <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-sm border border-purple-200">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                                        <h3 className="text-xl font-semibold text-purple-700">Caso: TCE con Deterioro Neurológico</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-purple-800 mb-2">Escenario:</h4>
                                        <p className="italic text-gray-700 mb-3">
                                            Motociclista de 30 años, accidente a alta velocidad. Inicialmente consciente y orientado, 
                                            pero durante traslado presenta deterioro progresivo del nivel de conciencia.
                                        </p>
                                    </div>
                                    
                                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-800 mb-2">Evaluación Inicial:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Glasgow:</strong> 15</li>
                                                <li>• <strong>Pupilas:</strong> 3mm reactivas</li>
                                                <li>• <strong>Queja:</strong> Cefalea intensa</li>
                                                <li>• <strong>TA:</strong> 120/70</li>
                                                <li>• <strong>FC:</strong> 90/min</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-800 mb-2">15 minutos después:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Glasgow:</strong> 11 (O3-V3-M5)</li>
                                                <li>• <strong>Pupilas:</strong> Derecha 5mm fija</li>
                                                <li>• <strong>Vómito:</strong> En proyectil x2</li>
                                                <li>• <strong>TA:</strong> 160/90</li>
                                                <li>• <strong>FC:</strong> 60/min</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-800 mb-2">25 minutos después:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• <strong>Glasgow:</strong> 6 (O1-V1-M4)</li>
                                                <li>• <strong>Pupilas:</strong> Bilaterales fijas</li>
                                                <li>• <strong>Respiración:</strong> Irregular</li>
                                                <li>• <strong>TA:</strong> 180/110</li>
                                                <li>• <strong>FC:</strong> 45/min</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                            Análisis: Herniación Cerebral Inminente
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-medium text-red-700 mb-1">Signos de Herniación:</h5>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Deterioro Glasgow progresivo</li>
                                                    <li>• Anisocoria → pupilas fijas</li>
                                                    <li>• Triada de Cushing: ↑TA, ↓FC, resp. irregular</li>
                                                    <li>• Vómito en proyectil</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium text-red-700 mb-1">Manejo Crítico:</h5>
                                                <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                                                    <li>Intubación inmediata</li>
                                                    <li>Hiperventilación controlada</li>
                                                    <li>Posición cabecera 30°</li>
                                                    <li>Traslado urgente neurocirugía</li>
                                                    <li>Comunicación médica</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos de aprendizaje */}
                                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                        <BsLightbulb className="w-6 h-6 mr-2"/>
                                        Puntos Clave de Aprendizaje
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-orange-800 mb-2">Reconocimiento Temprano:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• La ventana terapéutica es crítica</li>
                                                <li>• Los síntomas pueden ser sutiles inicialmente</li>
                                                <li>• La evaluación seriada es fundamental</li>
                                                <li>• Documentar hora exacta de inicio</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-orange-800 mb-2">Principios de Manejo:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• ABC siempre primero</li>
                                                <li>• Evitar hipoxia e hipotensión</li>
                                                <li>• Traslado rápido pero seguro</li>
                                                <li>• Comunicación efectiva con hospital</li>
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
                                                    className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`}
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
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/neurological-emergencies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias neurológicas</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
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

