import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Pharmacology.questions.ts";
import {GiMedicines} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {FaPills, FaExclamationTriangle, FaShieldAlt, FaCheckCircle} from "react-icons/fa";
import {useState} from "react";
import {MdQuiz, MdWarning, MdTimer} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf, BsLightbulb, BsCalculator} from "react-icons/bs";
import {FiUser, FiClock, FiTrendingUp, FiAlertTriangle} from "react-icons/fi";
import {TbMedicineSyrup, TbPill, TbReportMedical} from "react-icons/tb";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function Pharmacology() {
    const [activeTab, setActiveTab] = useState<'overview' | 'rights' | 'drugs' | 'tables'>('overview');
    return (
        <SEOWrapper
            title="Farmacología EMT | Medicamentos, Dosis y Protocolos en Atención Prehospitalaria"
            description="Guía completa de farmacología para Técnicos en Atención Médica Prehospitalaria: conceptos clave, medicamentos esenciales, cálculo de dosis, vías de administración, tablas de referencia y consejos prácticos para paramédicos."
            keywords="farmacología, EMT, paramédicos, medicamentos, cálculo de dosis, vías de administración, protocolos, emergencias médicas, 6 correctos, epinefrina, aspirina, salbutamol, oxígeno, tablas de referencia, seguridad en medicamentos"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div
                    className="flex flex-col items-center  justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4   p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <GiMedicines className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Principios de la Farmacología</h1>
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
                                to="/pharmacology/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1qr0_uoihdOoUbp2bYr91hPmWs7hAnFXC/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://www.medicamentosplm.com/Home/Medicamento/A/1"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <FaPills className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Diccionario PLM</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1YC7zTwfOHRxItjvd2dh3dTHheoMFY5Y8/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('rights')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'rights'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    6 Correctos
                                </button>
                                <button
                                    onClick={() => setActiveTab('drugs')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'drugs'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Medicamentos Comunes
                                </button>
                                <button
                                    onClick={() => setActiveTab('tables')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'tables'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Tablas Útiles
                                </button>
                            </nav>
                        </div>

                        {/* Contenido de pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-8">
                                    {/* Introducción con impacto visual */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <GiMedicines className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-blue-700">¿Qué es la
                                                Farmacología?</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                            La farmacología es la <strong>ciencia que estudia las drogas y
                                            medicamentos</strong> y su interacción
                                            con los organismos vivos. Para los paramédicos, es fundamental comprender
                                            cómo los medicamentos
                                            <span className="text-blue-600 font-semibold"> salvan vidas en situaciones críticas</span>.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-semibold text-blue-600 mb-2">En el ambiente
                                                    prehospitalario:</h4>
                                                <p className="text-sm text-gray-700">Los medicamentos pueden ser la
                                                    diferencia entre la vida y la muerte en los primeros minutos
                                                    críticos.</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-semibold text-blue-600 mb-2">Responsabilidad
                                                    profesional:</h4>
                                                <p className="text-sm text-gray-700">Cada administración debe ser
                                                    precisa, segura y basada en evidencia científica.</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conceptos fundamentales */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <TbReportMedical className="w-6 h-6 mr-2 text-orange-500"/>
                                            Conceptos Fundamentales
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                    <div className="flex items-center mb-3">
                                                        <TbPill className="w-6 h-6 text-green-600 mr-2"/>
                                                        <h3 className="text-xl font-bold text-green-700">Fármaco vs
                                                            Medicamento</h3>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <h4 className="font-semibold text-green-800">Fármaco:</h4>
                                                            <p className="text-sm text-gray-700">Sustancia química pura
                                                                que modifica funciones corporales (ej: paracetamol)</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-green-800">Medicamento:</h4>
                                                            <p className="text-sm text-gray-700">Preparación completa
                                                                que contiene fármaco + excipientes (ej: Tylenol®)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                    <div className="flex items-center mb-3">
                                                        <BsCalculator className="w-6 h-6 text-blue-600 mr-2"/>
                                                        <h3 className="text-xl font-bold text-blue-700">Dosis y
                                                            Posología</h3>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Dosis:</strong> Cantidad específica administrada en
                                                            una ocasión</p>
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Posología:</strong> Régimen completo (dosis +
                                                            frecuencia + duración)</p>
                                                        <div className="bg-blue-100 p-2 rounded mt-3">
                                                            <p className="text-xs text-blue-800">
                                                                <strong>Ejemplo:</strong> Aspirina 300mg (dosis) cada
                                                                24h por 30 días (posología)</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                                    <div className="flex items-center mb-3">
                                                        <FiTrendingUp className="w-6 h-6 text-purple-600 mr-2"/>
                                                        <h3 className="text-xl font-bold text-purple-700">Farmacocinética
                                                            vs Farmacodinamia</h3>
                                                    </div>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <h4 className="font-semibold text-purple-800">Farmacocinética:</h4>
                                                            <p className="text-sm text-gray-700">"Lo que el CUERPO le
                                                                hace al fármaco"</p>
                                                            <p className="text-xs text-purple-600">ADME: Absorción,
                                                                Distribución, Metabolismo, Excreción</p>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-purple-800">Farmacodinamia:</h4>
                                                            <p className="text-sm text-gray-700">"Lo que el FÁRMACO le
                                                                hace al cuerpo"</p>
                                                            <p className="text-xs text-purple-600">Mecanismos de acción,
                                                                efectos terapéuticos y adversos</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                                    <div className="flex items-center mb-3">
                                                        <TbMedicineSyrup className="w-6 h-6 text-orange-600 mr-2"/>
                                                        <h3 className="text-xl font-bold text-orange-700">Vías de
                                                            Administración</h3>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Enteral:</strong> Oral, sublingual, rectal</p>
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Parenteral:</strong> IV, IM, SC, inhalatoria</p>
                                                        <p className="text-sm text-gray-700">
                                                            <strong>Tópica:</strong> Cutánea, oftálmica, nasal</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proceso ADME */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">Proceso ADME -
                                            El Viaje del Medicamento</h3>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div
                                                className="bg-blue-100 p-4 rounded-lg text-center border border-blue-300">
                                                <h4 className="font-bold text-blue-700 mb-2">A - ABSORCIÓN</h4>
                                                <p className="text-sm text-gray-700 mb-2">Paso del fármaco desde el
                                                    sitio de administración al torrente sanguíneo</p>
                                                <div className="text-xs text-blue-600">
                                                    <p>• Depende de la vía</p>
                                                    <p>• Solubilidad</p>
                                                    <p>• pH del medio</p>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-green-100 p-4 rounded-lg text-center border border-green-300">
                                                <h4 className="font-bold text-green-700 mb-2">D - DISTRIBUCIÓN</h4>
                                                <p className="text-sm text-gray-700 mb-2">Transporte del fármaco a
                                                    diferentes tejidos y órganos</p>
                                                <div className="text-xs text-green-600">
                                                    <p>• Flujo sanguíneo</p>
                                                    <p>• Unión a proteínas</p>
                                                    <p>• Barreras biológicas</p>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-orange-100 p-4 rounded-lg text-center border border-orange-300">
                                                <h4 className="font-bold text-orange-700 mb-2">M - METABOLISMO</h4>
                                                <p className="text-sm text-gray-700 mb-2">Transformación química del
                                                    fármaco (principalmente hígado)</p>
                                                <div className="text-xs text-orange-600">
                                                    <p>• Enzimas hepáticas</p>
                                                    <p>• Primer paso</p>
                                                    <p>• Metabolitos activos</p>
                                                </div>
                                            </div>
                                            <div
                                                className="bg-red-100 p-4 rounded-lg text-center border border-red-300">
                                                <h4 className="font-bold text-red-700 mb-2">E - EXCRECIÓN</h4>
                                                <p className="text-sm text-gray-700 mb-2">Eliminación del fármaco y
                                                    metabolitos del organismo</p>
                                                <div className="text-xs text-red-600">
                                                    <p>• Riñones (principal)</p>
                                                    <p>• Hígado/bilis</p>
                                                    <p>• Pulmones</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Factores que modifican la respuesta */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Factores que Modifican la
                                            Respuesta a Medicamentos</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                                <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                    <FiUser className="w-5 h-5 mr-2"/>
                                                    Factores del Paciente
                                                </h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span><strong>Edad:</strong> Neonatos y ancianos requieren ajustes</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span><strong>Peso:</strong> Muchas dosis se calculan por kg</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span><strong>Función renal/hepática:</strong> Afecta eliminación</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span><strong>Embarazo:</strong> Cambios fisiológicos importantes</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span><strong>Genética:</strong> Metabolizadores rápidos/lentos</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                                                    <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                                    Factores Ambientales y Clínicos
                                                </h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span><strong>Interacciones:</strong> Otros medicamentos, alimentos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span><strong>Estado clínico:</strong> Shock, fiebre, deshidratación</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span><strong>Tolerancia:</strong> Disminución de efecto con uso repetido</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span><strong>Cumplimiento:</strong> Adherencia al tratamiento</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span><strong>Hora de administración:</strong> Ritmos circadianos</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Principios clave para paramédicos */}
                                    <div
                                        className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2"/>
                                            Principios Clave para Paramédicos
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="text-center">
                                                <FaShieldAlt className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                                <h4 className="font-semibold text-blue-700">SEGURIDAD PRIMERO</h4>
                                                <p className="text-sm text-gray-700">Verificar siempre antes de
                                                    administrar</p>
                                            </div>
                                            <div className="text-center">
                                                <MdTimer className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <h4 className="font-semibold text-orange-700">TIEMPO CRÍTICO</h4>
                                                <p className="text-sm text-gray-700">Algunos medicamentos salvan vidas
                                                    en minutos</p>
                                            </div>
                                            <div className="text-center">
                                                <TbReportMedical className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                                <h4 className="font-semibold text-green-700">DOCUMENTACIÓN</h4>
                                                <p className="text-sm text-gray-700">Registro preciso es esencial</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'rights' && (
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
                            )}
                            {activeTab === 'drugs' && (
                                <div className="space-y-8">
                                    <div
                                        className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaPills className="w-8 h-8 text-purple-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-purple-700">Medicamentos Esenciales
                                                en Emergencias</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            Estos son los medicamentos más críticos que todo paramédico debe conocer a
                                            la perfección.
                                            <span className="text-purple-600 font-semibold"> Su correcta administración puede salvar vidas</span>.
                                        </p>
                                    </div>

                                    {/* Medicamentos por categorías */}
                                    <div className="space-y-6">
                                        {/* Medicamentos cardiovasculares de emergencia */}
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                <TbReportMedical className="w-6 h-6 mr-2"/>
                                                Emergencias Cardiovasculares
                                            </h3>
                                            <div className="grid lg:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-red-600 mr-2"/>
                                                        <h4 className="font-bold text-red-700">ASPIRINA (Ácido
                                                            Acetilsalicílico)</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación principal:</strong> Síndrome coronario
                                                            agudo, dolor torácico de origen cardíaco</p>
                                                        <p><strong>Mecanismo:</strong> Inhibición irreversible de la
                                                            agregación plaquetaria</p>
                                                        <p><strong>Dosis EMT:</strong> 160-325 mg (masticar, no tragar
                                                            entero)</p>
                                                        <p><strong>Vía:</strong> Oral (sublingual para absorción rápida)
                                                        </p>
                                                        <div className="bg-red-100 p-2 rounded">
                                                            <p className="font-semibold text-red-800">⚠️
                                                                Contraindicaciones:</p>
                                                            <p>Alergia conocida, sangrado activo, úlcera péptica activa,
                                                                edad &lt;18 años</p>
                                                        </div>
                                                        <div className="bg-green-100 p-2 rounded">
                                                            <p className="font-semibold text-green-800">💡 Consejo:</p>
                                                            <p>Administrar lo antes posible en IAM - "tiempo es músculo
                                                                cardíaco"</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-red-600 mr-2"/>
                                                        <h4 className="font-bold text-red-700">NITROGLICERINA</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación:</strong> Dolor torácico, angina de pecho,
                                                            edema pulmonar</p>
                                                        <p><strong>Mecanismo:</strong> Vasodilatación coronaria y venosa
                                                        </p>
                                                        <p><strong>Dosis:</strong> 0.4 mg sublingual cada 3-5 min (máx 3
                                                            dosis)</p>
                                                        <p><strong>Vía:</strong> Sublingual (spray o tablet)</p>
                                                        <div className="bg-red-100 p-2 rounded">
                                                            <p className="font-semibold text-red-800">⚠️ Precaución:</p>
                                                            <p>TA sistólica &lt;90 mmHg, uso reciente de sildenafil</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Medicamentos respiratorios */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                <GiMedicines className="w-6 h-6 mr-2"/>
                                                Emergencias Respiratorias
                                            </h3>
                                            <div className="grid lg:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-blue-600 mr-2"/>
                                                        <h4 className="font-bold text-blue-700">SALBUTAMOL
                                                            (Albuterol)</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación:</strong> Crisis asmática, broncoespasmo,
                                                            EPOC agudizado</p>
                                                        <p><strong>Mecanismo:</strong> Broncodilatador β2-agonista
                                                            selectivo</p>
                                                        <p><strong>Dosis inhalador:</strong> 2-4 puffs (100 mcg c/u) con
                                                            espaciador</p>
                                                        <p><strong>Dosis nebulización:</strong> 2.5-5 mg en 3 ml de
                                                            solución salina</p>
                                                        <div className="bg-blue-100 p-2 rounded">
                                                            <p className="font-semibold text-blue-800">💡 Técnica:</p>
                                                            <p>Usar espaciador siempre que sea posible, respiración
                                                                lenta y profunda</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-blue-600 mr-2"/>
                                                        <h4 className="font-bold text-blue-700">OXÍGENO</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación:</strong> Hipoxemia, dificultad
                                                            respiratoria, shock</p>
                                                        <p><strong>Objetivo:</strong> SpO₂ ≥94% (88-92% en EPOC
                                                            conocido)</p>
                                                        <p><strong>Dispositivos:</strong> Cánula nasal, mascarilla, BVM
                                                        </p>
                                                        <div className="bg-blue-100 p-2 rounded">
                                                            <p className="font-semibold text-blue-800">⚠️ EPOC:</p>
                                                            <p>Titular cuidadosamente, riesgo de depresión
                                                                respiratoria</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Medicamentos neurológicos y analgésicos */}
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                                <TbMedicineSyrup className="w-6 h-6 mr-2"/>
                                                Analgesia y Emergencias Neurológicas
                                            </h3>
                                            <div className="grid lg:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-green-600 mr-2"/>
                                                        <h4 className="font-bold text-green-700">PARACETAMOL
                                                            (Acetaminofén)</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación:</strong> Fiebre, dolor leve a moderado
                                                        </p>
                                                        <p><strong>Dosis oral:</strong> 500-1000 mg cada 6-8h (máx
                                                            4g/día)</p>
                                                        <p><strong>Dosis IV:</strong> 15 mg/kg cada 6h</p>
                                                        <p><strong>Ventajas:</strong> Seguro, no afecta agregación
                                                            plaquetaria</p>
                                                        <div className="bg-green-100 p-2 rounded">
                                                            <p className="font-semibold text-green-800">⚠️
                                                                Hepatotoxicidad:</p>
                                                            <p>Evitar en enfermedad hepática severa o alcoholismo</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-green-600 mr-2"/>
                                                        <h4 className="font-bold text-green-700">GLUCOSA ORAL</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación:</strong> Hipoglucemia en paciente
                                                            consciente</p>
                                                        <p><strong>Dosis:</strong> 15-25 g (gel oral o tabletas)</p>
                                                        <p><strong>Efectos:</strong> Aumento rápido de glucemia</p>
                                                        <div className="bg-red-100 p-2 rounded">
                                                            <p className="font-semibold text-red-800">⚠️
                                                                Contraindicación:</p>
                                                            <p>Paciente inconsciente o con reflejo deglutorio
                                                                alterado</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Medicamentos de emergencia crítica */}
                                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                                                Emergencias Críticas
                                            </h3>
                                            <div className="grid lg:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-orange-600 mr-2"/>
                                                        <h4 className="font-bold text-orange-700">EPINEFRINA
                                                            (Adrenalina)</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación principal:</strong> Anafilaxia, paro
                                                            cardíaco</p>
                                                        <p><strong>Anafilaxia:</strong> 0.3-0.5 mg IM en muslo</p>
                                                        <p><strong>Paro cardíaco:</strong> 1 mg IV cada 3-5 min</p>
                                                        <p><strong>Mecanismo:</strong> Agonista α y β adrenérgico</p>
                                                        <div className="bg-orange-100 p-2 rounded">
                                                            <p className="font-semibold text-orange-800">🕐 Tiempo
                                                                crítico:</p>
                                                            <p>En anafilaxia: administrar inmediatamente, no
                                                                retrasar</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <div className="flex items-center mb-3">
                                                        <FaPills className="w-5 h-5 text-orange-600 mr-2"/>
                                                        <h4 className="font-bold text-orange-700">CARBÓN ACTIVADO</h4>
                                                    </div>
                                                    <div className="space-y-2 text-sm">
                                                        <p><strong>Indicación:</strong> Intoxicaciones orales agudas
                                                            (&lt;1 hora)</p>
                                                        <p><strong>Dosis:</strong> 1 g/kg (25-50 g adulto, 12.5-25 g
                                                            niño)</p>
                                                        <p><strong>Mecanismo:</strong> Adsorción de toxinas en TGI</p>
                                                        <div className="bg-red-100 p-2 rounded">
                                                            <p className="font-semibold text-red-800">⚠️ NO usar en:</p>
                                                            <p>Ácidos, álcalis, hidrocarburos, estado de conciencia
                                                                alterado</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabla resumen de medicamentos esenciales */}
                                    <div className="mt-8">
                                        <h3 className="text-xl font-semibold mb-4">Tabla de Referencia Rápida -
                                            Medicamentos EMT</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                                <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Medicamento</th>
                                                    <th className="py-3 px-4 border text-left">Indicación Principal</th>
                                                    <th className="py-3 px-4 border text-left">Dosis Adulto</th>
                                                    <th className="py-3 px-4 border text-left">Vía</th>
                                                    <th className="py-3 px-4 border text-left">Contraindicación
                                                        Principal
                                                    </th>
                                                    <th className="py-3 px-4 border text-left">Tiempo de Acción</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-red-50">
                                                    <td className="py-3 px-4 border font-medium text-red-700">Aspirina</td>
                                                    <td className="py-3 px-4 border">Síndrome coronario agudo</td>
                                                    <td className="py-3 px-4 border">160-325 mg</td>
                                                    <td className="py-3 px-4 border">Oral (masticar)</td>
                                                    <td className="py-3 px-4 border">Alergia, sangrado activo</td>
                                                    <td className="py-3 px-4 border">15-30 min</td>
                                                </tr>
                                                <tr className="hover:bg-blue-50">
                                                    <td className="py-3 px-4 border font-medium text-blue-700">Salbutamol</td>
                                                    <td className="py-3 px-4 border">Crisis asmática, broncoespasmo</td>
                                                    <td className="py-3 px-4 border">2-4 puffs (100 mcg c/u)</td>
                                                    <td className="py-3 px-4 border">Inhalada</td>
                                                    <td className="py-3 px-4 border">Taquiarritmias severas</td>
                                                    <td className="py-3 px-4 border">5-15 min</td>
                                                </tr>
                                                <tr className="hover:bg-green-50">
                                                    <td className="py-3 px-4 border font-medium text-green-700">Paracetamol</td>
                                                    <td className="py-3 px-4 border">Fiebre, dolor leve-moderado</td>
                                                    <td className="py-3 px-4 border">500-1000 mg c/6-8h</td>
                                                    <td className="py-3 px-4 border">Oral, IV</td>
                                                    <td className="py-3 px-4 border">Hepatopatía grave</td>
                                                    <td className="py-3 px-4 border">30-60 min</td>
                                                </tr>
                                                <tr className="hover:bg-orange-50">
                                                    <td className="py-3 px-4 border font-medium text-orange-700">Epinefrina</td>
                                                    <td className="py-3 px-4 border">Anafilaxia</td>
                                                    <td className="py-3 px-4 border">0.3-0.5 mg</td>
                                                    <td className="py-3 px-4 border">IM (muslo)</td>
                                                    <td className="py-3 px-4 border">Relativa: HTA severa</td>
                                                    <td className="py-3 px-4 border">1-5 min</td>
                                                </tr>
                                                <tr className="hover:bg-purple-50">
                                                    <td className="py-3 px-4 border font-medium text-purple-700">Glucosa
                                                        oral
                                                    </td>
                                                    <td className="py-3 px-4 border">Hipoglucemia consciente</td>
                                                    <td className="py-3 px-4 border">15-25 g</td>
                                                    <td className="py-3 px-4 border">Oral</td>
                                                    <td className="py-3 px-4 border">Alteración conciencia</td>
                                                    <td className="py-3 px-4 border">10-20 min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium text-gray-700">Carbón
                                                        activado
                                                    </td>
                                                    <td className="py-3 px-4 border">Intoxicación oral reciente</td>
                                                    <td className="py-3 px-4 border">1 g/kg (25-50 g)</td>
                                                    <td className="py-3 px-4 border">Oral</td>
                                                    <td className="py-3 px-4 border">Ácidos, álcalis, inconsciente</td>
                                                    <td className="py-3 px-4 border">Inmediato</td>
                                                </tr>
                                                <tr className="hover:bg-cyan-50">
                                                    <td className="py-3 px-4 border font-medium text-cyan-700">Oxígeno</td>
                                                    <td className="py-3 px-4 border">Hipoxemia, disnea</td>
                                                    <td className="py-3 px-4 border">Titulado a SpO₂</td>
                                                    <td className="py-3 px-4 border">Inhalada</td>
                                                    <td className="py-3 px-4 border">Ninguna absoluta</td>
                                                    <td className="py-3 px-4 border">1-3 min</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Consejos prácticos */}
                                    <div
                                        className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2"/>
                                            Consejos Prácticos para Paramédicos
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2">Preparación y
                                                    administración:</h4>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li>• Verifica fecha de vencimiento antes de cada turno</li>
                                                    <li>• Mantén medicamentos a temperatura adecuada</li>
                                                    <li>• Ten calculadora lista para cálculos de dosis</li>
                                                    <li>• Conoce las equivalencias más comunes</li>
                                                    <li>• Practica técnicas de administración regularmente</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-blue-800 mb-2">Monitoreo
                                                    post-administración:</h4>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li>• Evalúa respuesta clínica en 5-10 minutos</li>
                                                    <li>• Monitoriza signos vitales continuamente</li>
                                                    <li>• Observa efectos adversos inmediatos</li>
                                                    <li>• Documenta hora exacta y respuesta</li>
                                                    <li>• Comunica al hospital receptor</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'tables' && (
                                <div className="space-y-8">
                                    <div
                                        className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <BsCalculator className="w-8 h-8 text-indigo-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-indigo-700">Tablas de Referencia
                                                Rápida</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            Herramientas esenciales para cálculos rápidos y toma de decisiones en el
                                            campo.
                                            <span className="text-indigo-600 font-semibold"> Mantén estas referencias siempre accesibles</span>.
                                        </p>
                                    </div>

                                    {/* Vías de administración mejorada */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <TbMedicineSyrup className="w-6 h-6 mr-2 text-orange-500"/>
                                            Vías de Administración - Comparación Detallada
                                        </h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                                <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Vía</th>
                                                    <th className="py-3 px-4 border text-center">Inicio de Acción</th>
                                                    <th className="py-3 px-4 border text-left">Ventajas</th>
                                                    <th className="py-3 px-4 border text-left">Desventajas</th>
                                                    <th className="py-3 px-4 border text-left">Uso en Emergencias</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-blue-50">
                                                    <td className="py-3 px-4 border font-medium text-blue-700">Oral</td>
                                                    <td className="py-3 px-4 border text-center">30-60 min</td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Fácil administración</li>
                                                            <li>• No invasiva</li>
                                                            <li>• Económica</li>
                                                            <li>• Autoadministración</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Absorción lenta e impredecible</li>
                                                            <li>• No en inconscientes</li>
                                                            <li>• Afectada por alimentos</li>
                                                            <li>• Primer paso hepático</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border text-sm">Limitada a emergencias
                                                        leves, pacientes conscientes
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-green-50">
                                                    <td className="py-3 px-4 border font-medium text-green-700">Sublingual</td>
                                                    <td className="py-3 px-4 border text-center">1-5 min</td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Absorción rápida</li>
                                                            <li>• Evita primer paso</li>
                                                            <li>• Fácil administración</li>
                                                            <li>• No requiere deglución</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Solo pacientes conscientes</li>
                                                            <li>• Limitado a ciertos fármacos</li>
                                                            <li>• Puede ser escupido</li>
                                                            <li>• Sabor desagradable</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border text-sm">Ideal para nitroglicerina,
                                                        algunos analgésicos
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-purple-50">
                                                    <td className="py-3 px-4 border font-medium text-purple-700">Intramuscular
                                                        (IM)
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">10-30 min</td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Absorción predecible</li>
                                                            <li>• Útil en inconscientes</li>
                                                            <li>• Volúmenes moderados</li>
                                                            <li>• Técnica simple</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Dolor en el sitio</li>
                                                            <li>• Riesgo de lesión nerviosa</li>
                                                            <li>• Absorción variable en shock</li>
                                                            <li>• Requiere técnica estéril</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border text-sm">Excelente para epinefrina
                                                        en anafilaxia, analgésicos
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-red-50">
                                                    <td className="py-3 px-4 border font-medium text-red-700">Intravenosa
                                                        (IV)
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">30 seg - 2 min</td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Efecto inmediato</li>
                                                            <li>• Biodisponibilidad 100%</li>
                                                            <li>• Control preciso de dosis</li>
                                                            <li>• Grandes volúmenes</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Requiere acceso venoso</li>
                                                            <li>• Riesgo de complicaciones</li>
                                                            <li>• Técnica más compleja</li>
                                                            <li>• Irreversible una vez dada</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border text-sm">Estándar de oro en
                                                        emergencias críticas, shock
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50">
                                                    <td className="py-3 px-4 border font-medium text-yellow-700">Inhalada</td>
                                                    <td className="py-3 px-4 border text-center">1-5 min</td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Acción local directa</li>
                                                            <li>• Rápida absorción</li>
                                                            <li>• Menos efectos sistémicos</li>
                                                            <li>• Autoadministración posible</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border">
                                                        <ul className="text-sm">
                                                            <li>• Técnica dependiente</li>
                                                            <li>• Dosificación imprecisa</li>
                                                            <li>• Limitado a vía respiratoria</li>
                                                            <li>• Cooperación del paciente</li>
                                                        </ul>
                                                    </td>
                                                    <td className="py-3 px-4 border text-sm">Primera línea en asma,
                                                        EPOC, emergencias respiratorias
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Equivalencias y conversiones */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                            <BsCalculator className="w-6 h-6 mr-2"/>
                                            Conversiones y Equivalencias Esenciales
                                        </h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-blue-800 mb-3">Peso</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li>1 kg = 1000 g</li>
                                                    <li>1 lb = 0.45 kg</li>
                                                    <li>1 kg = 2.2 lb</li>
                                                    <li>1 piedra = 14 lb = 6.35 kg</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-blue-800 mb-3">Volumen</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li>1 L = 1000 ml</li>
                                                    <li>1 cucharadita = 5 ml</li>
                                                    <li>1 cucharada = 15 ml</li>
                                                    <li>1 onza = 30 ml</li>
                                                    <li>1 taza = 240 ml</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-blue-800 mb-3">Concentración</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li>1% = 10 mg/ml</li>
                                                    <li>1:1000 = 1 mg/ml</li>
                                                    <li>1:10,000 = 0.1 mg/ml</li>
                                                    <li>1 g = 1000 mg</li>
                                                    <li>1 mg = 1000 mcg</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fórmulas de cálculo */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Fórmulas de Cálculo
                                            Farmacológico</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h4 className="font-bold text-green-700 mb-3">Cálculo de Dosis</h4>
                                                <div className="space-y-4">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold mb-2">Dosis = Peso × Dosis por
                                                            kg</p>
                                                        <p className="text-sm text-gray-600">Ejemplo: Paracetamol 15
                                                            mg/kg para niño de 20 kg</p>
                                                        <p className="text-sm text-green-600">Dosis = 20 kg × 15 mg/kg =
                                                            300 mg</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold mb-2">Volumen = Dosis ÷
                                                            Concentración</p>
                                                        <p className="text-sm text-gray-600">Ejemplo: Administrar 300 mg
                                                            de paracetamol (100 mg/ml)</p>
                                                        <p className="text-sm text-green-600">Volumen = 300 mg ÷ 100
                                                            mg/ml = 3 ml</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                                <h4 className="font-bold text-orange-700 mb-3">Goteo IV</h4>
                                                <div className="space-y-4">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold mb-2">Gotas/min = (Vol ml × Factor
                                                            goteo) ÷ Tiempo min</p>
                                                        <p className="text-sm text-gray-600">Factor goteo estándar = 20
                                                            gotas/ml</p>
                                                        <p className="text-sm text-orange-600">Ejemplo: 250 ml en 2
                                                            horas = 42 gotas/min</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold mb-2">ml/hr = Vol total ÷ Tiempo en
                                                            horas</p>
                                                        <p className="text-sm text-gray-600">Para bombas de infusión</p>
                                                        <p className="text-sm text-orange-600">Ejemplo: 500 ml en 4 h =
                                                            125 ml/hr</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Términos farmacológicos importantes */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Glosario de Términos
                                            Farmacológicos</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                                <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Término</th>
                                                    <th className="py-3 px-4 border text-left">Definición</th>
                                                    <th className="py-3 px-4 border text-left">Importancia Clínica</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-blue-50">
                                                    <td className="py-3 px-4 border font-medium text-blue-700">Farmacocinética</td>
                                                    <td className="py-3 px-4 border">Procesos ADME: Absorción,
                                                        Distribución, Metabolismo, Excreción
                                                    </td>
                                                    <td className="py-3 px-4 border">Determina duración e intensidad del
                                                        efecto
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-green-50">
                                                    <td className="py-3 px-4 border font-medium text-green-700">Farmacodinamia</td>
                                                    <td className="py-3 px-4 border">Efectos y mecanismos de acción del
                                                        fármaco en el organismo
                                                    </td>
                                                    <td className="py-3 px-4 border">Explica cómo y por qué funciona el
                                                        medicamento
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-purple-50">
                                                    <td className="py-3 px-4 border font-medium text-purple-700">Biodisponibilidad</td>
                                                    <td className="py-3 px-4 border">% de fármaco que llega a
                                                        circulación sistémica
                                                    </td>
                                                    <td className="py-3 px-4 border">IV=100%, oral variable según
                                                        absorción
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-orange-50">
                                                    <td className="py-3 px-4 border font-medium text-orange-700">Vida
                                                        media (T½)
                                                    </td>
                                                    <td className="py-3 px-4 border">Tiempo para reducir concentración
                                                        plasmática a la mitad
                                                    </td>
                                                    <td className="py-3 px-4 border">Determina frecuencia de
                                                        dosificación
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-red-50">
                                                    <td className="py-3 px-4 border font-medium text-red-700">Efecto de
                                                        primer paso
                                                    </td>
                                                    <td className="py-3 px-4 border">Metabolismo hepático antes de
                                                        llegar a circulación sistémica
                                                    </td>
                                                    <td className="py-3 px-4 border">Reduce biodisponibilidad de
                                                        medicamentos orales
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-yellow-50">
                                                    <td className="py-3 px-4 border font-medium text-yellow-700">Agonista</td>
                                                    <td className="py-3 px-4 border">Fármaco que activa receptores
                                                        produciendo respuesta
                                                    </td>
                                                    <td className="py-3 px-4 border">Ejemplo: Salbutamol en receptores
                                                        β2
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-indigo-50">
                                                    <td className="py-3 px-4 border font-medium text-indigo-700">Antagonista</td>
                                                    <td className="py-3 px-4 border">Fármaco que bloquea receptores sin
                                                        activarlos
                                                    </td>
                                                    <td className="py-3 px-4 border">Ejemplo: Naloxona para opioides
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-cyan-50">
                                                    <td className="py-3 px-4 border font-medium text-cyan-700">Sinergia</td>
                                                    <td className="py-3 px-4 border">Efecto combinado mayor que suma de
                                                        efectos individuales
                                                    </td>
                                                    <td className="py-3 px-4 border">Puede potenciar efectos
                                                        terapéuticos o tóxicos
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium text-gray-700">Tolerancia</td>
                                                    <td className="py-3 px-4 border">Disminución del efecto con uso
                                                        repetido
                                                    </td>
                                                    <td className="py-3 px-4 border">Requiere aumento de dosis para
                                                        mismo efecto
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Herramientas de cálculo rápido */}
                                    <div
                                        className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                                            <MdTimer className="w-6 h-6 mr-2"/>
                                            Herramientas de Cálculo Rápido
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Regla de los 9s para
                                                    peso pediátrico:</h4>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li>• 1 año: 9-11 kg</li>
                                                    <li>• 2 años: 12-14 kg</li>
                                                    <li>• 3 años: 15-17 kg</li>
                                                    <li>• Fórmula: (Edad × 2) + 8 = peso aprox en kg</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Cálculos de
                                                    emergencia comunes:</h4>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li>• Epinefrina 1:1000 = 1 mg/ml</li>
                                                    <li>• Epinefrina pediátrica = 0.01 mg/kg</li>
                                                    <li>• Glucosa 50% = 500 mg/ml</li>
                                                    <li>• Suero fisiológico = 0.9% = 9 mg/ml NaCl</li>
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
                                                    className="flex w-full justify-between items-center bg-gray-100  px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 ">
                                                    <span>{faq.question}</span>
                                                    <ChevronUpIcon
                                                        className={`${
                                                            open ? "transform rotate-180" : ""
                                                        } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700 ">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="pharmacology" 
                            titulo="Foro de Discusión - Pharmacology"
                        />

                        
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

