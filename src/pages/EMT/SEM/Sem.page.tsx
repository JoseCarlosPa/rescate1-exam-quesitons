import {NavLink} from "react-router";
import {
    FaAmbulance,
    FaClock,
    FaHeartbeat,
    FaHospital,
    FaMapMarkerAlt,
    FaPhone,
    FaRoute,
    FaShieldAlt,
    FaUsers
} from "react-icons/fa";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Sem.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdEmergency, MdInfo, MdLocalHospital, MdQuiz, MdSecurity, MdTipsAndUpdates, MdWarning} from "react-icons/md";
import {BsBookHalf, BsClockHistory, BsTelephone} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiActivity, FiAlertTriangle, FiCheckCircle} from "react-icons/fi";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {FaRadio} from "react-icons/fa6";
import {ForumSection} from "../../../components/ForumSection";

export default function Sem() {
    const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'activation' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Sistema de Emergencias Médicas (SEM) | Curso EMT"
            description="Conoce el funcionamiento, estructura, protocolos y casos prácticos del Sistema de Emergencias Médicas (SEM) para Técnicos en Atención Médica Prehospitalaria. Incluye recursos, preguntas frecuentes y material de estudio."
            keywords="SEM, sistema de emergencias médicas, estructura SEM, protocolos SEM, ambulancias, TAMP, EMT, curso emergencias médicas, casos prácticos, atención prehospitalaria"
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
                                <FaAmbulance className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Sistema SEM</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-6xl mx-auto">
                            <NavLink
                                to="/sem/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1z_yrMHjG6PCtLZkRgKFEoZKRE-zcD-BV/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1DDHTjUDjx6yYCR3UA4apObjgoHw-wTEf/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('structure')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'structure'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Estructura y Componentes
                                </button>
                                <button
                                    onClick={() => setActiveTab('activation')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'activation'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Activación y Protocolo
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
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                        <FaAmbulance className="inline mr-3 text-orange-500"/>
                                        Generalidades del Sistema SEM
                                    </h2>

                                    {/* Concepto y definición */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                                                <MdInfo className="mr-2"/>
                                                ¿Qué es el SEM?
                                            </h3>
                                            <p className="text-gray-700 mb-3">
                                                El Sistema de Emergencias Médicas (SEM) es una red coordinada de
                                                servicios y recursos
                                                diseñada para proporcionar atención médica prehospitalaria eficaz a
                                                personas en situaciones
                                                de emergencia médica.
                                            </p>
                                            <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                                                <p className="text-sm text-gray-600">
                                                    <strong>Objetivo principal:</strong> Salvar vidas, reducir la
                                                    discapacidad
                                                    y mejorar los resultados de salud mediante la atención médica
                                                    temprana y adecuada.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                                                <FaRoute className="mr-2"/>
                                                Cadena de Supervivencia
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div
                                                        className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1
                                                    </div>
                                                    <span className="text-sm">Reconocimiento y activación del SEM</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div
                                                        className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2
                                                    </div>
                                                    <span className="text-sm">RCP inmediata de alta calidad</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div
                                                        className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3
                                                    </div>
                                                    <span className="text-sm">Desfibrilación rápida</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div
                                                        className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">4
                                                    </div>
                                                    <span className="text-sm">Soporte vital avanzado</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div
                                                        className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm mr-3">5
                                                    </div>
                                                    <span className="text-sm">Cuidados post-resucitación</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Principios fundamentales */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <FaShieldAlt className="mr-2 text-green-600"/>
                                            Principios Fundamentales del SEM
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                                                <h4 className="font-bold text-green-700 mb-2">Accesibilidad</h4>
                                                <p className="text-sm text-gray-600">
                                                    Servicio disponible 24/7 para toda la población, sin discriminación.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                                                <h4 className="font-bold text-blue-700 mb-2">Oportunidad</h4>
                                                <p className="text-sm text-gray-600">
                                                    Respuesta rápida y eficaz en el momento crítico.
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                                                <h4 className="font-bold text-purple-700 mb-2">Calidad</h4>
                                                <p className="text-sm text-gray-600">
                                                    Atención basada en protocolos y evidencia científica.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Historia y evolución */}
                                    <div className="bg-indigo-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                                            <BsClockHistory className="mr-2"/>
                                            Historia y Evolución del SEM
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-indigo-500">
                                                    <h4 className="font-bold text-indigo-700 mb-1">Década de 1960</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Surge el concepto moderno de SEM en EE.UU. y Europa,
                                                        evolucionando hacia sistemas integrados.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-indigo-500">
                                                    <h4 className="font-bold text-indigo-700 mb-1">En México</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Fortalecimiento con la NOM-034-SSA3-2013 que regula los
                                                        servicios
                                                        de atención médica prehospitalaria.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                                                    <h4 className="font-bold text-teal-700 mb-1">Actualidad</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Sistemas integrados con tecnología avanzada, protocolos
                                                        estandarizados
                                                        y personal altamente capacitado.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                                                    <h4 className="font-bold text-teal-700 mb-1">Futuro</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Incorporación de telemedicina, inteligencia artificial
                                                        y sistemas de geolocalización avanzados.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Objetivos del SEM */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                                <FiCheckCircle className="mr-2"/>
                                                Objetivos Primarios
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Preservar la vida
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Minimizar las secuelas
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Aliviar el sufrimiento
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Estabilizar al paciente
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Coordinar recursos
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                                                <MdTipsAndUpdates className="mr-2"/>
                                                Tips para Paramédicos
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                                                    <p className="text-sm text-gray-700">
                                                        <strong>Recuerda:</strong> El SEM inicia desde el primer
                                                        contacto
                                                        telefónico hasta la transferencia en el hospital.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                                                    <p className="text-sm text-gray-700">
                                                        <strong>Importante:</strong> La comunicación efectiva es clave
                                                        para el funcionamiento del sistema.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                                    <p className="text-sm text-gray-700">
                                                        <strong>Crítico:</strong> Los tiempos de respuesta impactan
                                                        directamente en la supervivencia del paciente.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'structure' && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                        <FaHospital className="inline mr-3 text-blue-500"/>
                                        Estructura y Componentes del SEM
                                    </h2>

                                    {/* Componentes principales */}
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                                                <FaPhone className="mr-2"/>
                                                CRUM
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-3">
                                                Centro Regulador de Urgencias Médicas. Coordina y regula toda la
                                                actividad del SEM.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Recepción de llamadas de emergencia</li>
                                                <li>• Despacho de recursos</li>
                                                <li>• Coordinación médica</li>
                                                <li>• Seguimiento de casos</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                                                <FaAmbulance className="mr-2"/>
                                                Ambulancias
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-3">
                                                Vehículos especializados equipados según normatividad vigente.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Básicas (SVB)</li>
                                                <li>• Avanzadas (SVA)</li>
                                                <li>• Cuidados intensivos</li>
                                                <li>• Especializadas</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center">
                                                <FaUsers className="mr-2"/>
                                                Personal
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-3">
                                                Profesionales capacitados en atención prehospitalaria.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Técnicos (TUM-B)</li>
                                                <li>• Paramédicos (TUM-I)</li>
                                                <li>• Médicos</li>
                                                <li>• Operadores/Despachadores</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                                                <FaRadio className="mr-2"/>
                                                Comunicaciones
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-3">
                                                Sistemas de comunicación para coordinación efectiva.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Radio troncalizado</li>
                                                <li>• Telefonía celular</li>
                                                <li>• GPS y localización</li>
                                                <li>• Sistemas de datos</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                                                <MdLocalHospital className="mr-2"/>
                                                Hospitales
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-3">
                                                Red hospitalaria receptora coordinada con el SEM.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Hospitales de 1er nivel</li>
                                                <li>• Hospitales de 2do nivel</li>
                                                <li>• Hospitales de 3er nivel</li>
                                                <li>• Centros de trauma</li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-indigo-800 mb-3 flex items-center">
                                                <MdSecurity className="mr-2"/>
                                                Protocolos
                                            </h3>
                                            <p className="text-gray-700 text-sm mb-3">
                                                Guías y procedimientos estandarizados basados en evidencia.
                                            </p>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• NOM-034-SSA3-2013</li>
                                                <li>• Protocolos médicos</li>
                                                <li>• Algoritmos de atención</li>
                                                <li>• Procedimientos operativos</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Tipos de ambulancias */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <FaAmbulance className="mr-2 text-red-600"/>
                                            Clasificación de Ambulancias (NOM-034-SSA3-2013)
                                        </h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow">
                                                <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                                                <tr>
                                                    <th className="py-3 px-4 text-left">Tipo</th>
                                                    <th className="py-3 px-4 text-left">Características</th>
                                                    <th className="py-3 px-4 text-left">Personal Mínimo</th>
                                                    <th className="py-3 px-4 text-left">Equipo Principal</th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium text-red-700">Básica (SVB)</td>
                                                    <td className="py-3 px-4 text-sm">Soporte Vital Básico, traslados
                                                        programados
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">1 TUM-B + 1 Conductor</td>
                                                    <td className="py-3 px-4 text-sm">Oxígeno, DEA, inmovilizadores</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium text-orange-700">Avanzada
                                                        (SVA)
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">Soporte Vital Avanzado,
                                                        emergencias
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">1 TUM-I + 1 TUM-B</td>
                                                    <td className="py-3 px-4 text-sm">Monitor/Desfibrilador,
                                                        medicamentos
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium text-blue-700">UCI Móvil</td>
                                                    <td className="py-3 px-4 text-sm">Cuidados intensivos, traslados
                                                        críticos
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">1 Médico + 1 Enfermero + 1 TUM
                                                    </td>
                                                    <td className="py-3 px-4 text-sm">Ventilador, bombas de infusión
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 font-medium text-purple-700">Especializada</td>
                                                    <td className="py-3 px-4 text-sm">Neonatal, bariatría, rescate</td>
                                                    <td className="py-3 px-4 text-sm">Personal especializado</td>
                                                    <td className="py-3 px-4 text-sm">Equipo específico según función
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Cadena de supervivencia */}
                                    <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                                            <FaRoute className="mr-2"/>
                                            Cadena de Supervivencia Prehospitalaria
                                        </h3>
                                        <div className="grid md:grid-cols-5 gap-4">
                                            <div className="text-center">
                                                <div
                                                    className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">1
                                                </div>
                                                <h4 className="font-bold text-teal-700 text-sm mb-1">Reconocimiento</h4>
                                                <p className="text-xs text-gray-600">Identificación temprana y
                                                    activación del SEM</p>
                                            </div>
                                            <div className="text-center">
                                                <div
                                                    className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">2
                                                </div>
                                                <h4 className="font-bold text-teal-700 text-sm mb-1">Atención
                                                    Inicial</h4>
                                                <p className="text-xs text-gray-600">SVB por testigos o primeros
                                                    respondientes</p>
                                            </div>
                                            <div className="text-center">
                                                <div
                                                    className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">3
                                                </div>
                                                <h4 className="font-bold text-teal-700 text-sm mb-1">Despliegue</h4>
                                                <p className="text-xs text-gray-600">Llegada de la ambulancia y
                                                    personal</p>
                                            </div>
                                            <div className="text-center">
                                                <div
                                                    className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">4
                                                </div>
                                                <h4 className="font-bold text-teal-700 text-sm mb-1">Estabilización</h4>
                                                <p className="text-xs text-gray-600">Atención avanzada en sitio</p>
                                            </div>
                                            <div className="text-center">
                                                <div
                                                    className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg font-bold">5
                                                </div>
                                                <h4 className="font-bold text-teal-700 text-sm mb-1">Transferencia</h4>
                                                <p className="text-xs text-gray-600">Transporte y entrega
                                                    hospitalaria</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Niveles de atención */}
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                                            <h3 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                                                <FiCheckCircle className="mr-2"/>
                                                Primer Nivel
                                            </h3>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Centros de salud</li>
                                                <li>• Consultorios rurales</li>
                                                <li>• Atención básica</li>
                                                <li>• Prevención y promoción</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-yellow-500">
                                            <h3 className="text-lg font-bold text-yellow-700 mb-3 flex items-center">
                                                <MdWarning className="mr-2"/>
                                                Segundo Nivel
                                            </h3>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Hospitales generales</li>
                                                <li>• Especialidades básicas</li>
                                                <li>• Urgencias intermedias</li>
                                                <li>• Cirugía ambulatoria</li>
                                            </ul>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                                            <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                                                <MdEmergency className="mr-2"/>
                                                Tercer Nivel
                                            </h3>
                                            <ul className="text-sm text-gray-600 space-y-1">
                                                <li>• Hospitales de alta especialidad</li>
                                                <li>• Centros de trauma</li>
                                                <li>• Procedimientos complejos</li>
                                                <li>• Cuidados críticos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'activation' && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                        <BsTelephone className="inline mr-3 text-green-500"/>
                                        Activación y Protocolos del SEM
                                    </h2>

                                    {/* Proceso de activación */}
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                            <FaPhone className="mr-2"/>
                                            Proceso de Activación del SEM
                                        </h3>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-2">1
                                                    </div>
                                                    <h4 className="font-bold text-green-700">Llamada</h4>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    Marcación al 911 o número local de emergencias
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-2">2
                                                    </div>
                                                    <h4 className="font-bold text-blue-700">Evaluación</h4>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    Operador evalúa tipo y prioridad de la emergencia
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm mr-2">3
                                                    </div>
                                                    <h4 className="font-bold text-orange-700">Despacho</h4>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    Asignación de recursos apropiados según protocolo
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                                                <div className="flex items-center mb-2">
                                                    <div
                                                        className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-2">4
                                                    </div>
                                                    <h4 className="font-bold text-red-700">Respuesta</h4>
                                                </div>
                                                <p className="text-sm text-gray-600">
                                                    Activación y despliegue de la ambulancia
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Códigos de prioridad */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-500">
                                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                <MdEmergency className="mr-2"/>
                                                Códigos de Prioridad
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-red-50 p-3 rounded border-l-4 border-red-600">
                                                    <h4 className="font-bold text-red-700">Código Rojo - Crítico</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Amenaza inmediata a la vida. Respuesta con sirena y luces.
                                                    </p>
                                                    <span
                                                        className="text-xs text-red-600 font-medium">Tiempo objetivo: &lt; 8 minutos</span>
                                                </div>
                                                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-600">
                                                    <h4 className="font-bold text-yellow-700">Código Amarillo -
                                                        Urgente</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Condición seria, requiere atención pronta.
                                                    </p>
                                                    <span className="text-xs text-yellow-600 font-medium">Tiempo objetivo: &lt; 15 minutos</span>
                                                </div>
                                                <div className="bg-green-50 p-3 rounded border-l-4 border-green-600">
                                                    <h4 className="font-bold text-green-700">Código Verde - No
                                                        urgente</h4>
                                                    <p className="text-sm text-gray-600">
                                                        Traslado programado o condición estable.
                                                    </p>
                                                    <span className="text-xs text-green-600 font-medium">Tiempo objetivo: &lt; 30 minutos</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                <FaClock className="mr-2"/>
                                                Tiempos de Respuesta
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-blue-50 p-3 rounded">
                                                    <h4 className="font-bold text-blue-700 mb-2">Urbano</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Crítico: &lt; 8 minutos</li>
                                                        <li>• Urgente: &lt; 15 minutos</li>
                                                        <li>• No urgente: &lt; 30 minutos</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-indigo-50 p-3 rounded">
                                                    <h4 className="font-bold text-indigo-700 mb-2">Rural</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Crítico: &lt; 15 minutos</li>
                                                        <li>• Urgente: &lt; 25 minutos</li>
                                                        <li>• No urgente: &lt; 45 minutos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Información clave para el despacho */}
                                    <div className="bg-purple-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                            <MdInfo className="mr-2"/>
                                            Información Clave para el Despacho
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <h4 className="font-bold text-purple-700">Datos Esenciales</h4>
                                                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Ubicación exacta (dirección, referencias)</li>
                                                        <li>• Tipo de emergencia</li>
                                                        <li>• Número de víctimas</li>
                                                        <li>• Estado de conciencia</li>
                                                        <li>• Riesgos presentes en la escena</li>
                                                        <li>• Número telefónico del contacto</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <h4 className="font-bold text-purple-700">Instrucciones Pre-arribo</h4>
                                                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• RCP telefónica guiada</li>
                                                        <li>• Control de hemorragias</li>
                                                        <li>• Posición de recuperación</li>
                                                        <li>• Liberación de vía aérea</li>
                                                        <li>• Manejo de la escena segura</li>
                                                        <li>• Instrucciones específicas por patología</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tecnología y mejora continua */}
                                    <div className="bg-teal-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                                            <FiActivity className="mr-2"/>
                                            Tecnología y Mejora Continua
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-bold text-teal-700 mb-3">Nuevas Tecnologías</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center text-gray-700">
                                                        <FaMapMarkerAlt className="mr-2 text-teal-600"/>
                                                        GPS y geolocalización avanzada
                                                    </li>
                                                    <li className="flex items-center text-gray-700">
                                                        <FaHeartbeat className="mr-2 text-teal-600"/>
                                                        Telemedicina prehospitalaria
                                                    </li>
                                                    <li className="flex items-center text-gray-700">
                                                        <FaRadio className="mr-2 text-teal-600"/>
                                                        Apps móviles de coordinación
                                                    </li>
                                                    <li className="flex items-center text-gray-700">
                                                        <MdInfo className="mr-2 text-teal-600"/>
                                                        Simulación y realidad virtual
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-teal-700 mb-3">Evaluación y Mejora</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-center text-gray-700">
                                                        <FiCheckCircle className="mr-2 text-teal-600"/>
                                                        Simulacros regulares
                                                    </li>
                                                    <li className="flex items-center text-gray-700">
                                                        <FiCheckCircle className="mr-2 text-teal-600"/>
                                                        Capacitación continua
                                                    </li>
                                                    <li className="flex items-center text-gray-700">
                                                        <FiCheckCircle className="mr-2 text-teal-600"/>
                                                        Auditorías de calidad
                                                    </li>
                                                    <li className="flex items-center text-gray-700">
                                                        <FiCheckCircle className="mr-2 text-teal-600"/>
                                                        Retroalimentación sistémica
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                        <PiChalkboardTeacher className="inline mr-3 text-orange-500"/>
                                        Casos Prácticos del SEM
                                    </h2>

                                    {/* Caso 1: Múltiples víctimas */}
                                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                                            <HiOutlineExclamationTriangle className="mr-2"/>
                                            Caso 1: Accidente con Múltiples Víctimas
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-red-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Colisión frontal entre dos vehículos en
                                                carretera federal.
                                                Cinco víctimas confirmadas, una con pérdida de conciencia. El primer
                                                respondiente
                                                (policía estatal) activa el SEM desde la escena.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                                                    <FiAlertTriangle className="mr-2"/>
                                                    Acciones Prioritarias
                                                </h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start text-gray-700">
                                                        <div
                                                            className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1
                                                        </div>
                                                        <span className="text-sm">Evaluar seguridad de la escena (tráfico, combustible)</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div
                                                            className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2
                                                        </div>
                                                        <span className="text-sm">Solicitar múltiples ambulancias y recursos</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div
                                                            className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3
                                                        </div>
                                                        <span
                                                            className="text-sm">Realizar triaje primario (START)</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div
                                                            className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4
                                                        </div>
                                                        <span
                                                            className="text-sm">Coordinar traslado por prioridad</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3">Información para el
                                                    CRUM</h4>
                                                <div className="space-y-2 text-sm text-gray-600">
                                                    <p><strong>Ubicación:</strong> Km 45 carretera federal 57</p>
                                                    <p><strong>Tipo:</strong> Colisión frontal 2 vehículos</p>
                                                    <p><strong>Víctimas:</strong> 5 confirmadas</p>
                                                    <p><strong>Estado:</strong> 1 inconsciente, 4 conscientes</p>
                                                    <p><strong>Recursos:</strong> 3 ambulancias, bomberos</p>
                                                    <p><strong>Riesgos:</strong> Tráfico intenso, derrame combustible
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-4 bg-red-100 p-3 rounded">
                                            <h4 className="font-bold text-red-800 mb-2">Lecciones Aprendidas</h4>
                                            <ul className="text-sm text-red-700 space-y-1">
                                                <li>• La comunicación precisa acelera la respuesta</li>
                                                <li>• El triaje permite optimizar recursos limitados</li>
                                                <li>• La coordinación interinstitucional es vital</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Caso 2: Activación nocturna */}
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                            <FaClock className="mr-2"/>
                                            Caso 2: Activación Nocturna - Paro Cardíaco
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Llamada a las 2:30 AM. Hombre de 65 años con
                                                dolor
                                                torácico severo y dificultad respiratoria. La esposa reporta que "se
                                                puso morado
                                                y ya no responde". Domicilio en zona residencial.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-blue-700 mb-3">Protocolo de
                                                    Activación</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-blue-50 p-3 rounded">
                                                        <h5 className="font-bold text-blue-600 text-sm">Código Rojo -
                                                            Crítico</h5>
                                                        <p className="text-xs text-gray-600">Sospecha de paro
                                                            cardíaco</p>
                                                    </div>
                                                    <div className="bg-blue-50 p-3 rounded">
                                                        <h5 className="font-bold text-blue-600 text-sm">Despacho
                                                            Inmediato</h5>
                                                        <p className="text-xs text-gray-600">Ambulancia SVA + Primer
                                                            respondiente si disponible</p>
                                                    </div>
                                                    <div className="bg-blue-50 p-3 rounded">
                                                        <h5 className="font-bold text-blue-600 text-sm">RCP
                                                            Telefónica</h5>
                                                        <p className="text-xs text-gray-600">Instruir a la esposa
                                                            mientras llega apoyo</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-blue-700 mb-3">Instrucciones
                                                    Pre-arribo</h4>
                                                <ol className="text-sm text-gray-600 space-y-2">
                                                    <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                                        Verificar respuesta y respiración
                                                    </li>
                                                    <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                                        Colocar en superficie firme
                                                    </li>
                                                    <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                                        Iniciar compresiones: centro del pecho
                                                    </li>
                                                    <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                                        Ritmo: contar 1, 2, 3... 30 compresiones
                                                    </li>
                                                    <li className="flex">
                                                        <span
                                                            className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                                        No interrumpir hasta llegada de SEM
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3: Triaje telefónico */}
                                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                            <BsTelephone className="mr-2"/>
                                            Caso 3: Triaje Telefónico - Dolor Abdominal
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-green-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Mujer de 35 años con dolor abdominal de 4
                                                horas
                                                de evolución. Consciente, orientada, camina con dificultad. Sin sangrado
                                                aparente.
                                                Solicita traslado al hospital.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-green-700 mb-3">Evaluación Inicial</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Paciente consciente ✓</li>
                                                    <li>• Respiración normal ✓</li>
                                                    <li>• Sin sangrado visible ✓</li>
                                                    <li>• Dolor localizado</li>
                                                    <li>• Signos vitales estables</li>
                                                </ul>
                                            </div>

                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-green-700 mb-3">Clasificación</h4>
                                                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                                                    <h5 className="font-bold text-yellow-700">Código Amarillo</h5>
                                                    <p className="text-xs text-gray-600 mt-1">
                                                        Urgente - Dolor abdominal requiere evaluación médica pero no
                                                        amenaza vida inmediata
                                                    </p>
                                                </div>
                                                <p className="text-xs text-green-600 mt-2">Tiempo objetivo: &lt; 15
                                                    minutos</p>
                                            </div>

                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-green-700 mb-3">Decisión</h4>
                                                <div className="space-y-2">
                                                    <div className="bg-green-50 p-2 rounded">
                                                        <p className="text-xs text-green-700">
                                                            <strong>Recurso:</strong> Ambulancia Básica</p>
                                                    </div>
                                                    <div className="bg-green-50 p-2 rounded">
                                                        <p className="text-xs text-green-700">
                                                            <strong>Hospital:</strong> Urgencias general</p>
                                                    </div>
                                                    <div className="bg-green-50 p-2 rounded">
                                                        <p className="text-xs text-green-700">
                                                            <strong>Prioridad:</strong> Traslado sin sirena</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 4: Coordinación inter-institucional */}
                                    <div
                                        className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                            <FaUsers className="mr-2"/>
                                            Caso 4: Emergencia con Múltiples Agencias
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-purple-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Incendio en edificio residencial de 4 pisos.
                                                Múltiples personas atrapadas, víctimas con inhalación de humo. Se
                                                requiere
                                                coordinación entre bomberos, SEM, policía y protección civil.
                                            </p>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-purple-700 mb-3">Roles y
                                                    Responsabilidades</h4>
                                                <div className="space-y-3">
                                                    <div className="flex items-center bg-red-50 p-2 rounded">
                                                        <MdEmergency className="mr-2 text-red-600"/>
                                                        <div>
                                                            <p className="font-bold text-red-700 text-sm">Bomberos</p>
                                                            <p className="text-xs text-gray-600">Extinción, rescate,
                                                                ventilación</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-blue-50 p-2 rounded">
                                                        <FaShieldAlt className="mr-2 text-blue-600"/>
                                                        <div>
                                                            <p className="font-bold text-blue-700 text-sm">Policía</p>
                                                            <p className="text-xs text-gray-600">Perímetro, evacuación,
                                                                tráfico</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-green-50 p-2 rounded">
                                                        <FaAmbulance className="mr-2 text-green-600"/>
                                                        <div>
                                                            <p className="font-bold text-green-700 text-sm">SEM</p>
                                                            <p className="text-xs text-gray-600">Triaje, atención,
                                                                traslado</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center bg-orange-50 p-2 rounded">
                                                        <MdSecurity className="mr-2 text-orange-600"/>
                                                        <div>
                                                            <p className="font-bold text-orange-700 text-sm">Protección
                                                                Civil</p>
                                                            <p className="text-xs text-gray-600">Coordinación general,
                                                                albergue</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-purple-700 mb-3">Comunicación y
                                                    Coordinación</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-purple-50 p-3 rounded">
                                                        <h5 className="font-bold text-purple-600 text-sm">Canal
                                                            Principal</h5>
                                                        <p className="text-xs text-gray-600">Frecuencia
                                                            interinstitucional para coordinación</p>
                                                    </div>
                                                    <div className="bg-purple-50 p-3 rounded">
                                                        <h5 className="font-bold text-purple-600 text-sm">Comando
                                                            Unificado</h5>
                                                        <p className="text-xs text-gray-600">Un solo comandante para
                                                            decisiones tácticas</p>
                                                    </div>
                                                    <div className="bg-purple-50 p-3 rounded">
                                                        <h5 className="font-bold text-purple-600 text-sm">Área de
                                                            Triaje</h5>
                                                        <p className="text-xs text-gray-600">Zona segura para
                                                            clasificación y atención</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reflexiones finales */}
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <MdTipsAndUpdates className="mr-2 text-orange-500"/>
                                            Reflexiones y Buenas Prácticas
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                                                <h4 className="font-bold text-orange-700 mb-2">Comunicación</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Información clara y precisa</li>
                                                    <li>• Confirmación de órdenes</li>
                                                    <li>• Actualización constante</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                                <h4 className="font-bold text-blue-700 mb-2">Coordinación</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Roles bien definidos</li>
                                                    <li>• Liderazgo claro</li>
                                                    <li>• Trabajo en equipo</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-green-500">
                                                <h4 className="font-bold text-green-700 mb-2">Seguridad</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Evaluación constante</li>
                                                    <li>• Protección del personal</li>
                                                    <li>• Prevención de riesgos</li>
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
                            pagina="s-e-m"
                            titulo="Foro de Discusión - S E M"
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
                                        <li>NOM-034-SSA3-2013. <a
                                            href="https://www.gob.mx/cms/uploads/attachment/file/512076/NOM-034-SSA3-2013.pdf"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">Norma Oficial Mexicana</a></li>
                                        <li>Secretariado Técnico del Consejo Nacional para la Prevención de Accidentes
                                            (STCONAPRA).
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-education/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Educación y sistemas de emergencias</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-systems/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sistemas de EMS</a></li>
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

