import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Shock.questions.ts";
import {TbMedicalCrossCircle} from "react-icons/tb";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdCheckCircle, MdOutlineTimer, MdQuiz, MdWarning} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf, BsHeartPulse, BsLightbulb, BsShield} from "react-icons/bs";
import {FaExclamationTriangle, FaHeartbeat, FaTachometerAlt, FaUserMd} from "react-icons/fa";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {BiPulse} from "react-icons/bi";
import {GiBlood, GiHeartOrgan} from "react-icons/gi";
import {useState} from "react";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function Shock() {
    const [activeTab, setActiveTab] = useState<'overview' | 'types' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Shock en Atención Prehospitalaria EMT | Fisiopatología, Tipos y Manejo"
            description="Guía completa sobre el shock para Técnicos en Atención Médica Prehospitalaria: fisiopatología, tipos de shock, signos de alarma, índices hemodinámicos y protocolos de manejo. Aprende con casos clínicos interactivos."
            keywords="shock prehospitalario, EMT, paramédicos, shock hipovolémico, shock cardiogénico, shock distributivo, shock obstructivo, hipoperfusión, índice de shock, presión arterial media, emergencias médicas, casos clínicos, protocolo ABC"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div
                    className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <TbMedicalCrossCircle className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Shock en Atención Prehospitalaria</h1>
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
                                to="/shock/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1cshonwi1NXgFzcxxmJYUUDFBMNabtgjg/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://www.jems.com/patient-care/shock/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Recursos JEMS</p>
                            </a>
                            <a href="https://drive.google.com/file/d/13sYGkmyQRfZ3N-Au6yqZFdG-Aigmg4gl/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
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
                                    onClick={() => setActiveTab('types')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'types'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Tipos de Shock
                                </button>
                                <button
                                    onClick={() => setActiveTab('treatment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'treatment'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Manejo y Tratamiento
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
                                    {/* Definición crítica del shock */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Estado Crítico!</h2>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Definición de
                                                Shock</h3>
                                            <p className="text-gray-800 leading-relaxed text-lg">
                                                El shock es un <strong>estado de hipoperfusión tisular
                                                generalizada</strong> que resulta en
                                                un suministro inadecuado de oxígeno y nutrientes a nivel celular. Sin
                                                tratamiento oportuno,
                                                conduce a <span className="text-red-600 font-bold">falla orgánica múltiple y muerte</span>.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">Compensado</p>
                                                <p className="text-sm">Mecanismos compensatorios activos</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">Descompensado</p>
                                                <p className="text-sm">Falla de compensación</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                                <p className="font-bold text-red-700">Irreversible</p>
                                                <p className="text-sm">Daño celular irreversible</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fisiopatología básica */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <GiHeartOrgan className="w-6 h-6 mr-2 text-orange-500"/>
                                            Fisiopatología del Shock
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                    <FaHeartbeat className="w-5 h-5 mr-2"/>
                                                    Ecuación del Gasto Cardíaco
                                                </h3>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <p className="text-center text-lg font-mono font-bold text-blue-800">
                                                        GC = FC × VS
                                                    </p>
                                                    <p className="text-sm text-gray-600 text-center mt-2">
                                                        Gasto Cardíaco = Frecuencia Cardíaca × Volumen Sistólico
                                                    </p>
                                                </div>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <BiPulse className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>FC:</strong> 60-100 lpm (adultos)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <GiBlood className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>VS:</strong> 70 ml/latido promedio</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>GC Normal:</strong> 4-8 L/min</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                                    <FaTachometerAlt className="w-5 h-5 mr-2"/>
                                                    Presión Arterial
                                                </h3>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <p className="text-center text-lg font-mono font-bold text-green-800">
                                                        PA = GC × RVP
                                                    </p>
                                                    <p className="text-sm text-gray-600 text-center mt-2">
                                                        Presión Arterial = Gasto Cardíaco × Resistencia Vascular
                                                        Periférica
                                                    </p>
                                                </div>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>PAS:</strong> {'>'} 90 mmHg</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>PAD:</strong> 60-90 mmHg</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>PAM:</strong> {'>'} 65 mmHg para perfusión</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de alarma mejorados */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Reconocimiento Temprano
                                                del Shock</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                    <FiEye className="w-4 h-4 mr-2"/>
                                                    Signos Precoces
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Ansiedad, inquietud</li>
                                                    <li>Taquicardia (FC {'>'} 100)</li>
                                                    <li>Piel fría, pálida</li>
                                                    <li>Sed intensa</li>
                                                    <li>Debilidad</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                                                    <MdWarning className="w-4 h-4 mr-2"/>
                                                    Signos Tardíos
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Hipotensión (PAS {'<'} 90)</li>
                                                    <li>Confusión, letargo</li>
                                                    <li>Oliguria ({'<'} 0.5 ml/kg/h)</li>
                                                    <li>Llenado capilar {'>'} 2 seg</li>
                                                    <li>Cianosis periférica</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    Signos Críticos
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Alteración severa consciencia</li>
                                                    <li>Pulso filiforme o ausente</li>
                                                    <li>Respiración irregular</li>
                                                    <li>Paro cardiorrespiratorio</li>
                                                    <li>Cianosis central</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Protocolo ABC para shock */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Protocolo ABC en Shock
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A -
                                                    AIRWAY</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Evaluar permeabilidad</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Aspirar si es necesario</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Mantener alineación cervical</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B -
                                                    BREATHING</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Oxígeno alto flujo (15 L/min)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Evaluar frecuencia y calidad</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Asistir ventilación si necesario</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-red-700 mb-3 text-center">C -
                                                    CIRCULATION</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Control de hemorragias</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Evaluar pulso y perfusión</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Posición y temperatura</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recordatorios clave */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-green-800">Puntos Clave para
                                                Recordar</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    Hacer SIEMPRE:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Reconocer signos tempranos</li>
                                                    <li>Actuar rápidamente (tiempo = vida)</li>
                                                    <li>Mantener vía aérea permeable</li>
                                                    <li>Oxígeno de alto flujo</li>
                                                    <li>Controlar hemorragias visibles</li>
                                                    <li>Traslado urgente</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Dar líquidos por vía oral</li>
                                                    <li>Administrar medicamentos sin indicación</li>
                                                    <li>Dejar al paciente solo</li>
                                                    <li>Retrasar el transporte</li>
                                                    <li>Ignorar signos de deterioro</li>
                                                    <li>Olvidar la protección cervical</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'types' && (
                                <div className="space-y-8">
                                    {/* Clasificación principal */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsHeartPulse className="w-6 h-6 mr-2 text-orange-500"/>
                                            Clasificación del Shock por Mecanismo
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            {/* Shock Hipovolémico */}
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                                                <div className="flex items-center mb-4">
                                                    <GiBlood className="w-8 h-8 text-red-600 mr-3"/>
                                                    <h3 className="text-xl font-bold text-red-700">Shock
                                                        Hipovolémico</h3>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <h4 className="font-semibold text-red-800 mb-2">Causa
                                                        Principal:</h4>
                                                    <p className="text-gray-700">Pérdida de volumen intravascular
                                                        (sangre o líquidos)</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="font-semibold text-red-800 mb-2">Causas
                                                            Específicas:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Hemorragia externa o interna</li>
                                                            <li>Deshidratación severa</li>
                                                            <li>Quemaduras extensas</li>
                                                            <li>Vómitos/diarrea profusa</li>
                                                            <li>Diabetes insípida</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-red-800 mb-2">Signos
                                                            Clínicos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Piel fría, pálida, sudorosa</li>
                                                            <li>Taquicardia, pulso débil</li>
                                                            <li>Hipotensión tardía</li>
                                                            <li>Llenado capilar {'>'} 2 seg</li>
                                                            <li>Sed intensa, ansiedad</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Shock Cardiogénico */}
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                                                <div className="flex items-center mb-4">
                                                    <FaHeartbeat className="w-8 h-8 text-blue-600 mr-3"/>
                                                    <h3 className="text-xl font-bold text-blue-700">Shock
                                                        Cardiogénico</h3>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <h4 className="font-semibold text-blue-800 mb-2">Causa
                                                        Principal:</h4>
                                                    <p className="text-gray-700">Falla de la bomba cardiaca para
                                                        mantener gasto cardíaco</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800 mb-2">Causas
                                                            Específicas:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Infarto agudo al miocardio</li>
                                                            <li>Arritmias severas</li>
                                                            <li>Insuficiencia cardiaca descompensada</li>
                                                            <li>Miocarditis, cardiomiopatías</li>
                                                            <li>Valvulopatías severas</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800 mb-2">Signos
                                                            Clínicos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Disnea, ortopnea</li>
                                                            <li>Estertores pulmonares</li>
                                                            <li>Ingurgitación yugular</li>
                                                            <li>Piel fría, pálida</li>
                                                            <li>Edema periférico</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Shock Obstructivo */}
                                            <div
                                                className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                                                <div className="flex items-center mb-4">
                                                    <FiActivity className="w-8 h-8 text-purple-600 mr-3"/>
                                                    <h3 className="text-xl font-bold text-purple-700">Shock
                                                        Obstructivo</h3>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <h4 className="font-semibold text-purple-800 mb-2">Causa
                                                        Principal:</h4>
                                                    <p className="text-gray-700">Obstrucción mecánica al flujo
                                                        sanguíneo</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="font-semibold text-purple-800 mb-2">Causas
                                                            Específicas:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Neumotórax a tensión</li>
                                                            <li>Taponamiento cardiaco</li>
                                                            <li>Embolia pulmonar masiva</li>
                                                            <li>Hemotórax masivo</li>
                                                            <li>Estenosis aórtica crítica</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-purple-800 mb-2">Signos
                                                            Clínicos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Ingurgitación yugular marcada</li>
                                                            <li>Disnea súbita severa</li>
                                                            <li>Dolor torácico</li>
                                                            <li>Hipotensión severa</li>
                                                            <li>Ruidos cardiacos apagados</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Shock Distributivo */}
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                                                <div className="flex items-center mb-4">
                                                    <FaUserMd className="w-8 h-8 text-green-600 mr-3"/>
                                                    <h3 className="text-xl font-bold text-green-700">Shock
                                                        Distributivo</h3>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <h4 className="font-semibold text-green-800 mb-2">Causa
                                                        Principal:</h4>
                                                    <p className="text-gray-700">Vasodilatación masiva y mala
                                                        distribución del flujo</p>
                                                </div>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="font-semibold text-green-800 mb-2">Subtipos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li><strong>Séptico:</strong> Infección sistémica</li>
                                                            <li><strong>Anafiláctico:</strong> Reacción alérgica severa
                                                            </li>
                                                            <li><strong>Neurogénico:</strong> Lesión neurológica</li>
                                                            <li><strong>Endocrino:</strong> Crisis adrenal</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800 mb-2">Signos
                                                            Clínicos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Piel caliente inicialmente</li>
                                                            <li>Hipotensión marcada</li>
                                                            <li>Taquicardia o bradicardia</li>
                                                            <li>Alteración del estado mental</li>
                                                            <li>Fiebre o hipotermia (séptico)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Diferenciación clínica rápida */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Diferenciación Rápida en
                                                Campo</h3>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white rounded-lg">
                                                <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-3 px-4 text-left">Tipo de Shock</th>
                                                    <th className="py-3 px-4 text-left">Piel</th>
                                                    <th className="py-3 px-4 text-left">Pulso</th>
                                                    <th className="py-3 px-4 text-left">Respiración</th>
                                                    <th className="py-3 px-4 text-left">Signo Distintivo</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="border-b">
                                                    <td className="py-3 px-4 font-medium text-red-700">Hipovolémico</td>
                                                    <td className="py-3 px-4">Fría, pálida, sudorosa</td>
                                                    <td className="py-3 px-4">Rápido, débil</td>
                                                    <td className="py-3 px-4">Rápida, superficial</td>
                                                    <td className="py-3 px-4">Sed intensa, sangrado visible</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-3 px-4 font-medium text-blue-700">Cardiogénico</td>
                                                    <td className="py-3 px-4">Fría, pálida, sudorosa</td>
                                                    <td className="py-3 px-4">Rápido, irregular</td>
                                                    <td className="py-3 px-4">Disnea, ortopnea</td>
                                                    <td className="py-3 px-4">Estertores, dolor torácico</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-3 px-4 font-medium text-purple-700">Obstructivo</td>
                                                    <td className="py-3 px-4">Fría, cianótica</td>
                                                    <td className="py-3 px-4">Rápido, débil</td>
                                                    <td className="py-3 px-4">Disnea severa súbita</td>
                                                    <td className="py-3 px-4">Ingurgitación yugular marcada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 font-medium text-green-700">Distributivo</td>
                                                    <td className="py-3 px-4">Caliente, seca (inicial)</td>
                                                    <td className="py-3 px-4">Variable</td>
                                                    <td className="py-3 px-4">Variable</td>
                                                    <td className="py-3 px-4">Fiebre, rash, historial de alergia</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Casos clínicos interactivos */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2 text-orange-500"/>
                                            Ejercicios de Diferenciación
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gray-50 p-5 rounded-lg border">
                                                <h4 className="font-bold text-orange-600 mb-3">Escenario A:</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Paciente de 45 años, dolor torácico súbito, disnea severa,
                                                    TA 70/40, FC 130, estertores bilaterales, ingurgitación yugular.
                                                </p>
                                                <p className="font-semibold text-blue-600">Diagnóstico más probable:
                                                    Shock Cardiogénico</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-lg border">
                                                <h4 className="font-bold text-orange-600 mb-3">Escenario B:</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Joven de 20 años, accidente vehicular, piel fría y pálida,
                                                    TA 80/50, FC 140, sed intensa, abdomen rígido.
                                                </p>
                                                <p className="font-semibold text-red-600">Diagnóstico más probable:
                                                    Shock Hipovolémico</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-lg border">
                                                <h4 className="font-bold text-orange-600 mb-3">Escenario C:</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Mujer de 30 años, picadura de abeja, eritema generalizado,
                                                    TA 60/40, FC 120, estridor, edema facial.
                                                </p>
                                                <p className="font-semibold text-green-600">Diagnóstico más probable:
                                                    Shock Anafiláctico</p>
                                            </div>
                                            <div className="bg-gray-50 p-5 rounded-lg border">
                                                <h4 className="font-bold text-orange-600 mb-3">Escenario D:</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Hombre de 60 años, dolor torácico súbito, disnea severa,
                                                    TA 70/45, FC 130, ingurgitación yugular, ruidos cardiacos apagados.
                                                </p>
                                                <p className="font-semibold text-purple-600">Diagnóstico más probable:
                                                    Shock Obstructivo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'treatment' && (
                                <div className="space-y-8">
                                    {/* Protocolo de manejo inmediato */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">Protocolo de Manejo
                                                Inmediato</h2>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                                                    AIRWAY
                                                </h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Asegurar vía aérea</li>
                                                    <li>• Aspirar secreciones</li>
                                                    <li>• Proteger columna cervical</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                    <span
                                                        className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                                                    BREATHING
                                                </h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Oxígeno 15 L/min mascarilla</li>
                                                    <li>• Evaluar ventilación</li>
                                                    <li>• Asistir si es necesario</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                    <span
                                                        className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                                                    CIRCULATION
                                                </h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Controlar hemorragias</li>
                                                    <li>• Evaluar perfusión</li>
                                                    <li>• Posición adecuada</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo específico por tipo */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
                                            Manejo Específico por Tipo de Shock
                                        </h2>
                                        <div className="space-y-6">
                                            {/* Shock Hipovolémico */}
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                    <GiBlood className="w-6 h-6 mr-2"/>
                                                    Shock Hipovolémico
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-red-800 mb-3">Intervenciones
                                                            Inmediatas:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Control de hemorragias:</strong>
                                                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                                                    <li>Presión directa</li>
                                                                    <li>Elevación si es posible</li>
                                                                    <li>Torniquete si es necesario</li>
                                                                    <li>Vendaje de presión</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Posición:</strong> Supina con piernas elevadas
                                                                8-12 pulgadas
                                                            </li>
                                                            <li><strong>Oxígeno:</strong> Alto flujo (15 L/min)</li>
                                                            <li><strong>Temperatura:</strong> Mantener normotermia</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-red-800 mb-3">Monitorización:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>Signos vitales cada 5 minutos</li>
                                                            <li>Estado neurológico</li>
                                                            <li>Llenado capilar</li>
                                                            <li>Diuresis si es posible</li>
                                                            <li>Saturación de oxígeno</li>
                                                        </ul>
                                                        <div className="bg-white p-3 rounded mt-4">
                                                            <p className="text-sm font-medium text-red-700">
                                                                ⚠️ NUNCA: Dar líquidos por vía oral en shock
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Shock Cardiogénico */}
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                    <FaHeartbeat className="w-6 h-6 mr-2"/>
                                                    Shock Cardiogénico
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800 mb-3">Intervenciones
                                                            Específicas:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Posición:</strong> Fowler (semi-sentado) si está
                                                                consciente
                                                            </li>
                                                            <li><strong>Oxígeno:</strong> Alto flujo, considerar CPAP si
                                                                disponible
                                                            </li>
                                                            <li><strong>Monitoreo cardiaco:</strong> ECG de 12
                                                                derivaciones
                                                            </li>
                                                            <li><strong>Nitrogligerina:</strong> Solo si PAS {'>'} 100
                                                                mmHg
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800 mb-3">Contraindicaciones:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>Posición Trendelenburg</li>
                                                            <li>Sobrecarga de líquidos</li>
                                                            <li>Nitrogligerina si TA {'<'} 100</li>
                                                        </ul>
                                                        <div className="bg-white p-3 rounded mt-4">
                                                            <p className="text-sm font-medium text-blue-700">
                                                                💡 Objetivo: Reducir precarga y facilitar respiración
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Shock Distributivo */}
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                                    <FaUserMd className="w-6 h-6 mr-2"/>
                                                    Shock Distributivo (Anafiláctico)
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-green-800 mb-3">Protocolo
                                                            Anafilaxia:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Epinefrina IM:</strong>
                                                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                                                    <li>Adultos: 0.3-0.5 mg (1:1000)</li>
                                                                    <li>Muslo anterolateral</li>
                                                                    <li>Repetir cada 5-15 min si necesario</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Oxígeno:</strong> Alto flujo</li>
                                                            <li><strong>Posición:</strong> Supina si está hipotensa</li>
                                                            <li><strong>Retirar alérgeno</strong> si es posible</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800 mb-3">Signos de
                                                            Alarma:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>Estridor o dificultad respiratoria</li>
                                                            <li>Edema facial o de lengua</li>
                                                            <li>Hipotensión severa</li>
                                                            <li>Urticaria generalizada</li>
                                                        </ul>
                                                        <div className="bg-white p-3 rounded mt-4">
                                                            <p className="text-sm font-medium text-green-700">
                                                                🚨 La epinefrina es el medicamento de primera línea
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Índices y Calculadoras */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaTachometerAlt className="w-6 h-6 mr-2 text-orange-500"/>
                                            Índices Hemodinámicos Importantes
                                        </h2>
                                        <div className="grid lg:grid-cols-3 gap-6">
                                            <div
                                                className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                                                <h3 className="text-lg font-bold text-orange-700 mb-4">Índice de
                                                    Shock</h3>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <p className="text-center text-lg font-mono font-bold text-orange-800">
                                                        IS = FC / PAS
                                                    </p>
                                                </div>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li><strong>Normal:</strong> 0.5 - 0.7</li>
                                                    <li><strong>Shock leve:</strong> 0.7 - 0.9</li>
                                                    <li><strong>Shock severo:</strong> {'>'} 0.9</li>
                                                    <li><strong>Crítico:</strong> {'>'} 1.3</li>
                                                </ul>
                                            </div>

                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-lg font-bold text-blue-700 mb-4">Presión Arterial
                                                    Media</h3>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <p className="text-center text-lg font-mono font-bold text-blue-800">
                                                        PAM = (PAS + 2×PAD) / 3
                                                    </p>
                                                </div>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li><strong>Normal:</strong> 70-105 mmHg</li>
                                                    <li><strong>Perfusión mínima:</strong> {'>'} 65 mmHg</li>
                                                    <li><strong>Shock:</strong> {'<'} 65 mmHg</li>
                                                    <li><strong>Crítico:</strong> {'<'} 55 mmHg</li>
                                                </ul>
                                            </div>

                                            <div
                                                className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                                                <h3 className="text-lg font-bold text-purple-700 mb-4">Presión de
                                                    Pulso</h3>
                                                <div className="bg-white p-4 rounded-lg mb-4">
                                                    <p className="text-center text-lg font-mono font-bold text-purple-800">
                                                        PP = PAS - PAD
                                                    </p>
                                                </div>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li><strong>Normal:</strong> 30-50 mmHg</li>
                                                    <li><strong>Estrecha:</strong> {'<'} 25 mmHg</li>
                                                    <li><strong>Amplia:</strong> {'>'} 60 mmHg</li>
                                                    <li><strong>Shock hipovolémico:</strong> Estrecha</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Algoritmo de decisión */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Algoritmo de Decisión de Transporte
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                                                <h4 className="font-bold text-yellow-800 mb-2">TRANSPORTE INMEDIATO</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• PAS {'<'} 90 mmHg</li>
                                                    <li>• Índice shock {'>'} 0.9</li>
                                                    <li>• Alteración consciencia</li>
                                                    <li>• Hemorragia no controlada</li>
                                                    <li>• Disnea severa</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                                                <h4 className="font-bold text-orange-800 mb-2">TRANSPORTE URGENTE</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• PAS 90-100 mmHg</li>
                                                    <li>• Índice shock 0.7-0.9</li>
                                                    <li>• Taquicardia persistente</li>
                                                    <li>• Llenado capilar {'>'} 2 seg</li>
                                                    <li>• Signos tempranos</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                                                <h4 className="font-bold text-green-800 mb-2">MONITOREO CONTINUO</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Signos vitales normales</li>
                                                    <li>• Índice shock {'<'} 0.7</li>
                                                    <li>• Paciente estable</li>
                                                    <li>• Sin factores de riesgo</li>
                                                    <li>• Reevaluación frecuente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Medicamentos y dosis */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BiPulse className="w-6 h-6 mr-2 text-orange-500"/>
                                            Medicamentos de Emergencia
                                        </h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white rounded-lg shadow">
                                                <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-3 px-4 text-left">Medicamento</th>
                                                    <th className="py-3 px-4 text-left">Indicación</th>
                                                    <th className="py-3 px-4 text-left">Dosis</th>
                                                    <th className="py-3 px-4 text-left">Vía</th>
                                                    <th className="py-3 px-4 text-left">Precauciones</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="border-b">
                                                    <td className="py-3 px-4 font-medium">Epinefrina</td>
                                                    <td className="py-3 px-4">Shock anafiláctico</td>
                                                    <td className="py-3 px-4">0.3-0.5 mg (1:1000)</td>
                                                    <td className="py-3 px-4">IM muslo</td>
                                                    <td className="py-3 px-4">Repetir cada 5-15 min</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-3 px-4 font-medium">Oxígeno</td>
                                                    <td className="py-3 px-4">Todos los tipos</td>
                                                    <td className="py-3 px-4">15 L/min</td>
                                                    <td className="py-3 px-4">Mascarilla</td>
                                                    <td className="py-3 px-4">Monitorizar saturación</td>
                                                </tr>
                                                <tr className="border-b">
                                                    <td className="py-3 px-4 font-medium">Nitroglicerina</td>
                                                    <td className="py-3 px-4">Shock cardiogénico</td>
                                                    <td className="py-3 px-4">0.4 mg SL</td>
                                                    <td className="py-3 px-4">Sublingual</td>
                                                    <td className="py-3 px-4">Solo si PAS {'>'} 100 mmHg</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 font-medium">Aspirina</td>
                                                    <td className="py-3 px-4">IAM con shock</td>
                                                    <td className="py-3 px-4">160-325 mg</td>
                                                    <td className="py-3 px-4">Oral (masticar)</td>
                                                    <td className="py-3 px-4">No si alergia o sangrado</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-8">
                                    {/* Metodología de casos */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-blue-700">Metodología de Análisis de
                                                Casos</h2>
                                        </div>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">1</span>
                                                <h3 className="font-bold text-blue-700">Evaluación Inicial</h3>
                                                <p className="text-sm text-gray-600">ABC, signos vitales, estado
                                                    mental</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">2</span>
                                                <h3 className="font-bold text-green-700">Clasificación</h3>
                                                <p className="text-sm text-gray-600">Tipo de shock, severidad</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">3</span>
                                                <h3 className="font-bold text-orange-700">Intervención</h3>
                                                <p className="text-sm text-gray-600">Tratamiento específico</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <span
                                                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg mx-auto mb-2">4</span>
                                                <h3 className="font-bold text-red-700">Transporte</h3>
                                                <p className="text-sm text-gray-600">Prioridad, destino</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Casos clínicos detallados */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Casos
                                            Clínicos Interactivos</h2>

                                        {/* Caso 1: Shock Hipovolémico */}
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                                            <div className="flex items-center mb-4">
                                                <GiBlood className="w-8 h-8 text-red-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-red-700">Caso 1: Shock
                                                    Hipovolémico Severo</h3>
                                            </div>
                                            <div className="grid lg:grid-cols-3 gap-6">
                                                <div className="lg:col-span-2">
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-red-800 mb-2">Escenario:</h4>
                                                        <p className="text-gray-700 mb-3">
                                                            Trabajador de construcción de 35 años cayó de andamio de 3
                                                            metros.
                                                            Presenta herida abierta en muslo derecho con sangrado
                                                            activo, dolor abdominal severo.
                                                            Está consciente pero ansioso y confundido.
                                                        </p>
                                                        <h4 className="font-bold text-red-800 mb-2">Evaluación
                                                            Inicial:</h4>
                                                        <div className="grid md:grid-cols-2 gap-4">
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Signos vitales:</strong> TA 70/45 mmHg, FC
                                                                    140/min, FR 32/min
                                                                </li>
                                                                <li><strong>Piel:</strong> Pálida, fría, sudorosa</li>
                                                                <li><strong>Llenado capilar:</strong> 4 segundos</li>
                                                                <li><strong>Estado mental:</strong> Ansioso, confundido
                                                                </li>
                                                            </ul>
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Pulso:</strong> Débil, filiforme</li>
                                                                <li><strong>SatO₂:</strong> 94% aire ambiente</li>
                                                                <li><strong>Sed:</strong> Intensa</li>
                                                                <li><strong>Abdomen:</strong> Rígido, dolor a la
                                                                    palpación
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-4 rounded-lg">
                                                        <h4 className="font-bold text-red-800 mb-2">Plan de Manejo:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Control inmediato de hemorragia:</strong>
                                                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                                                    <li>Presión directa en herida del muslo</li>
                                                                    <li>Torniquete si la presión no es efectiva</li>
                                                                    <li>Vendaje de presión</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Manejo respiratorio:</strong> Oxígeno 15 L/min
                                                                mascarilla
                                                            </li>
                                                            <li><strong>Posición:</strong> Supina con piernas elevadas
                                                            </li>
                                                            <li><strong>Protección térmica:</strong> Mantas, evitar
                                                                hipotermia
                                                            </li>
                                                            <li><strong>Transporte:</strong> Código rojo a trauma center
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-red-800 mb-2">Índices
                                                            Calculados:</h4>
                                                        <ul className="space-y-2 text-sm">
                                                            <li><strong>Índice de Shock:</strong> 140/70 = <span
                                                                className="text-red-600 font-bold">2.0</span> (Crítico)
                                                            </li>
                                                            <li><strong>PAM:</strong> (70 + 2×45)/3 = <span
                                                                className="text-red-600 font-bold">53 mmHg</span> (Crítico)
                                                            </li>
                                                            <li><strong>Presión de pulso:</strong> 70-45 = <span
                                                                className="text-red-600 font-bold">25 mmHg</span> (Estrecha)
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-yellow-100 p-3 rounded-lg">
                                                        <h4 className="font-bold text-yellow-800 mb-2">Puntos
                                                            Clave:</h4>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• Shock hipovolémico descompensado</li>
                                                            <li>• Probable hemorragia interna abdominal</li>
                                                            <li>• Requiere cirugía urgente</li>
                                                            <li>• Tiempo crítico {'<'} 15 minutos</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Caso 2: Shock Anafiláctico */}
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
                                            <div className="flex items-center mb-4">
                                                <FaUserMd className="w-8 h-8 text-green-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-green-700">Caso 2: Shock
                                                    Anafiláctico</h3>
                                            </div>
                                            <div className="grid lg:grid-cols-3 gap-6">
                                                <div className="lg:col-span-2">
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-green-800 mb-2">Escenario:</h4>
                                                        <p className="text-gray-700 mb-3">
                                                            Mujer de 28 años en picnic familiar. 15 minutos después de
                                                            ser picada por avispa,
                                                            desarrolla urticaria generalizada, dificultad respiratoria y
                                                            se siente mareada.
                                                            Antecedente de alergia a picaduras.
                                                        </p>
                                                        <h4 className="font-bold text-green-800 mb-2">Evaluación
                                                            Inicial:</h4>
                                                        <div className="grid md:grid-cols-2 gap-4">
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Signos vitales:</strong> TA 85/55 mmHg, FC
                                                                    125/min, FR 28/min
                                                                </li>
                                                                <li><strong>Piel:</strong> Caliente, eritematosa,
                                                                    urticaria
                                                                </li>
                                                                <li><strong>Respiración:</strong> Estridor audible</li>
                                                                <li><strong>Estado mental:</strong> Ansiosa, alerta</li>
                                                            </ul>
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Edema:</strong> Facial y periorbital</li>
                                                                <li><strong>SatO₂:</strong> 90% aire ambiente</li>
                                                                <li><strong>Voz:</strong> Ronca</li>
                                                                <li><strong>Llenado capilar:</strong> 3 segundos</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-4 rounded-lg">
                                                        <h4 className="font-bold text-green-800 mb-2">Plan de
                                                            Manejo:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Epinefrina IM inmediata:</strong>
                                                                <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                                                    <li>0.3 mg (1:1000) muslo anterolateral</li>
                                                                    <li>Preparar segunda dosis en 5-15 minutos</li>
                                                                </ul>
                                                            </li>
                                                            <li><strong>Oxígeno:</strong> 15 L/min mascarilla</li>
                                                            <li><strong>Posición:</strong> Fowler si tolera, supina si
                                                                hipotensa
                                                            </li>
                                                            <li><strong>Monitoreo:</strong> Vía aérea, saturación, TA
                                                            </li>
                                                            <li><strong>Transporte:</strong> Urgente con monitoreo
                                                                continuo
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-green-800 mb-2">Progresión
                                                            Temporal:</h4>
                                                        <ul className="space-y-2 text-sm">
                                                            <li><strong>T0-15 min:</strong> Picadura → urticaria
                                                                localizada
                                                            </li>
                                                            <li><strong>T15-20 min:</strong> Urticaria generalizada,
                                                                prurito
                                                            </li>
                                                            <li><strong>T20-25 min:</strong> Disnea, estridor,
                                                                hipotensión
                                                            </li>
                                                            <li><strong>Intervención:</strong> Epinefrina IM</li>
                                                            <li><strong>Post-epinefrina:</strong> Mejoría en 2-5 minutos
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-yellow-100 p-3 rounded-lg">
                                                        <h4 className="font-bold text-yellow-800 mb-2">Signos de
                                                            Alarma:</h4>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• Estridor = compromiso vía aérea</li>
                                                            <li>• Hipotensión = shock distributivo</li>
                                                            <li>• Edema facial = riesgo obstrucción</li>
                                                            <li>• Tiempo crítico para epinefrina</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Caso 3: Shock Cardiogénico */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                                            <div className="flex items-center mb-4">
                                                <FaHeartbeat className="w-8 h-8 text-blue-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">Caso 3: Shock
                                                    Cardiogénico</h3>
                                            </div>
                                            <div className="grid lg:grid-cols-3 gap-6">
                                                <div className="lg:col-span-2">
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-blue-800 mb-2">Escenario:</h4>
                                                        <p className="text-gray-700 mb-3">
                                                            Hombre de 68 años con dolor torácico opresivo de 2 horas de
                                                            evolución.
                                                            Antecedente de 2 infartos previos. Presenta disnea severa,
                                                            no puede permanecer acostado,
                                                            sudoración profusa.
                                                        </p>
                                                        <h4 className="font-bold text-blue-800 mb-2">Evaluación
                                                            Inicial:</h4>
                                                        <div className="grid md:grid-cols-2 gap-4">
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Signos vitales:</strong> TA 92/65 mmHg, FC
                                                                    110/min, FR 32/min
                                                                </li>
                                                                <li><strong>Piel:</strong> Pálida, fría, sudorosa</li>
                                                                <li><strong>Respiración:</strong> Ortopnea, uso músculos
                                                                    accesorios
                                                                </li>
                                                                <li><strong>Auscultación:</strong> Estertores bibasales
                                                                </li>
                                                            </ul>
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Ingurgitación yugular:</strong> Presente
                                                                </li>
                                                                <li><strong>SatO₂:</strong> 88% aire ambiente</li>
                                                                <li><strong>Edema:</strong> Piernas ++</li>
                                                                <li><strong>Estado mental:</strong> Ansioso, alerta</li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-4 rounded-lg">
                                                        <h4 className="font-bold text-blue-800 mb-2">Plan de
                                                            Manejo:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Posición:</strong> Fowler (semi-sentado), nunca
                                                                Trendelenburg
                                                            </li>
                                                            <li><strong>Oxígeno:</strong> 15 L/min, considerar CPAP si
                                                                disponible
                                                            </li>
                                                            <li><strong>Nitroglicerina:</strong> 0.4 mg SL (TA {'>'} 90
                                                                mmHg)
                                                            </li>
                                                            <li><strong>Aspirina:</strong> 324 mg masticar si no
                                                                contraindicada
                                                            </li>
                                                            <li><strong>ECG 12 derivaciones:</strong> Documentar STEMI
                                                            </li>
                                                            <li><strong>Transporte:</strong> Centro con cateterismo
                                                                cardiaco
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-blue-800 mb-2">Fisiopatología:</h4>
                                                        <ul className="space-y-2 text-sm">
                                                            <li><strong>Bomba cardiaca:</strong> Función
                                                                sistólica {'<'} 40%
                                                            </li>
                                                            <li><strong>Precarga:</strong> Elevada (congestión)</li>
                                                            <li><strong>Postcarga:</strong> Aumentada</li>
                                                            <li><strong>Contractilidad:</strong> Severamente reducida
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-yellow-100 p-3 rounded-lg">
                                                        <h4 className="font-bold text-yellow-800 mb-2">Contraindicaciones:</h4>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• NO Trendelenberg</li>
                                                            <li>• NO sobrecarga de líquidos</li>
                                                            <li>• NO nitroglicerina si TA {'<'} 90</li>
                                                            <li>• Objetivo: reducir precarga</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Caso 4: Shock Obstructivo */}
                                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                            <div className="flex items-center mb-4">
                                                <FiActivity className="w-8 h-8 text-purple-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-purple-700">Caso 4: Shock
                                                    Obstructivo (Neumotórax a Tensión)</h3>
                                            </div>
                                            <div className="grid lg:grid-cols-3 gap-6">
                                                <div className="lg:col-span-2">
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-purple-800 mb-2">Escenario:</h4>
                                                        <p className="text-gray-700 mb-3">
                                                            Joven de 22 años, delgado, presenta súbitamente dolor
                                                            torácico intenso y dificultad
                                                            respiratoria severa mientras jugaba baloncesto. Se encuentra
                                                            agitado, con disnea marcada
                                                            y cianosis perioral.
                                                        </p>
                                                        <h4 className="font-bold text-purple-800 mb-2">Evaluación
                                                            Inicial:</h4>
                                                        <div className="grid md:grid-cols-2 gap-4">
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Signos vitales:</strong> TA 75/40 mmHg, FC
                                                                    140/min, FR 40/min
                                                                </li>
                                                                <li><strong>Piel:</strong> Cianótica, sudorosa</li>
                                                                <li><strong>Respiración:</strong> Superficial, uso
                                                                    músculos accesorios
                                                                </li>
                                                                <li><strong>Auscultación:</strong> Ausencia ruidos
                                                                    hemitórax derecho
                                                                </li>
                                                            </ul>
                                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                                <li><strong>Ingurgitación yugular:</strong> Marcada</li>
                                                                <li><strong>SatO₂:</strong> 85% aire ambiente</li>
                                                                <li><strong>Desviación traqueal:</strong> Hacia la
                                                                    izquierda
                                                                </li>
                                                                <li><strong>Estado mental:</strong> Agitado, ansioso
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div className="bg-white p-4 rounded-lg">
                                                        <h4 className="font-bold text-purple-800 mb-2">Plan de
                                                            Manejo:</h4>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                            <li><strong>Oxígeno:</strong> 15 L/min mascarilla</li>
                                                            <li><strong>Posición:</strong> Fowler o posición de
                                                                comodidad
                                                            </li>
                                                            <li><strong>Descompresión:</strong> Aguja catéter 2° espacio
                                                                intercostal línea medioclavicular derecha (si entrenado)
                                                            </li>
                                                            <li><strong>Transporte emergente:</strong> Notificar
                                                                hospital sobre neumotórax a tensión
                                                            </li>
                                                            <li><strong>Monitoreo continuo:</strong> Signos vitales cada
                                                                2-3 minutos
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="bg-white p-4 rounded-lg mb-4">
                                                        <h4 className="font-bold text-purple-800 mb-2">Tríada
                                                            Clásica:</h4>
                                                        <ul className="space-y-2 text-sm">
                                                            <li><strong>1. Disnea severa súbita</strong></li>
                                                            <li><strong>2. Ingurgitación yugular</strong></li>
                                                            <li><strong>3. Hipotensión</strong></li>
                                                            <li className="text-purple-600 font-bold">+ Desviación
                                                                traqueal
                                                            </li>
                                                            <li className="text-purple-600 font-bold">+ Ausencia ruidos
                                                                respiratorios
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="bg-red-100 p-3 rounded-lg">
                                                        <h4 className="font-bold text-red-800 mb-2">¡EMERGENCIA!</h4>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• Mortal sin tratamiento</li>
                                                            <li>• Requiere descompresión inmediata</li>
                                                            <li>• Transporte de alta prioridad</li>
                                                            <li>• Monitoreo continuo</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ejercicio de autoevaluación */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <MdCheckCircle className="w-6 h-6 mr-2 text-green-500"/>
                                            Ejercicio de Autoevaluación
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-gray-800 mb-3">Escenario Rápido:</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Paciente de 45 años, TA 60/40, FC 130, piel caliente y seca,
                                                    temperatura 39°C, confusión, antecedente de infección urinaria.
                                                </p>
                                                <h4 className="font-bold text-gray-800 mb-2">Preguntas:</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li>¿Qué tipo de shock es más probable?</li>
                                                    <li>¿Cuál sería tu primera intervención?</li>
                                                    <li>¿Qué posición colocarías al paciente?</li>
                                                    <li>¿Cuál es la prioridad de transporte?</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-green-800 mb-3">Respuestas:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>Shock séptico</strong> (distributivo por infección)</li>
                                                    <li><strong>Oxígeno 15 L/min</strong> y evaluación ABC</li>
                                                    <li><strong>Supina</strong> (hipotensión severa)</li>
                                                    <li><strong>Emergente</strong> - requiere antibióticos IV urgente
                                                    </li>
                                                </ol>
                                                <div className="bg-green-100 p-3 rounded mt-4">
                                                    <p className="text-sm font-medium text-green-700">
                                                        💡 Clave: Piel caliente + fiebre + hipotensión = shock séptico
                                                    </p>
                                                </div>
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
                            pagina="shock"
                            titulo="Foro de Discusión - Shock"
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
                                        <li><a href="https://www.ems1.com/shock/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre shock</a></li>
                                        <li><a href="https://www.jems.com/patient-care/shock/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de shock</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Videos educativos</a></li>
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

