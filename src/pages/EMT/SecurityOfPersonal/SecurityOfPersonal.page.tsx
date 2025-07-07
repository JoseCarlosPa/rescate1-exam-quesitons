import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SecurityOfPersonal.questions.ts";
import {GiProtectionGlasses} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdSecurity, MdWarning, MdHealthAndSafety, MdInfo, MdTipsAndUpdates, MdEmergency, MdPsychology} from "react-icons/md";
import {BsBookHalf, BsShieldCheck, BsPersonCheck, BsExclamationTriangle} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaHardHat, FaEye, FaHandsWash, FaMask, FaAmbulance, FaUsers, FaClock, FaHeart, FaBrain, FaShieldAlt} from "react-icons/fa";
import {FiAlertTriangle, FiCheckCircle, FiActivity, FiShield, FiEye, FiHeart} from "react-icons/fi";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function SecurityOfPersonal() {
    const [activeTab, setActiveTab] = useState<'overview' | 'epp' | 'stress' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Seguridad y Bienestar del Personal | Curso EMT"
            description="Aprende sobre la seguridad, uso de EPP, manejo del estrés y bienestar del personal en emergencias médicas. Incluye casos prácticos, recursos y preguntas frecuentes para Técnicos en Atención Médica Prehospitalaria."
            keywords="seguridad personal EMT, EPP, bienestar rescatista, estrés prehospitalario, TAMP, curso emergencias médicas, casos prácticos, seguridad en escena"
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
                                <GiProtectionGlasses className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Seguridad y bienestar del personal</h1>
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
                                to="/security-of-personal/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/120HbN2u4g0MvykZG64998IRQy8X12HWW/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('epp')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'epp'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    EPP y Seguridad en Escena
                                </button>
                                <button
                                    onClick={() => setActiveTab('stress')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'stress'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Estrés y Bienestar
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-300'
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
                                        <FaShieldAlt className="inline mr-3 text-orange-500"/>
                                        Seguridad y Bienestar del Personal
                                    </h2>

                                    {/* Importancia de la seguridad */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                                                <MdWarning className="mr-2"/>
                                                Prioridad Número Uno
                                            </h3>
                                            <p className="text-gray-700 mb-3">
                                                La seguridad del personal es la prioridad número uno en cualquier emergencia. 
                                                Un rescatista lesionado no puede ayudar a otros y puede convertirse en una víctima más.
                                            </p>
                                            <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                                <p className="text-sm text-gray-600">
                                                    <strong>Principio fundamental:</strong> "No hay paciente tan crítico 
                                                    que justifique crear otra víctima" - AAOS 11ª edición
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                                                <FiShield className="mr-2"/>
                                                Evaluación de Escena
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">1</div>
                                                    <span className="text-sm">Observar antes de actuar</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">2</div>
                                                    <span className="text-sm">Identificar riesgos potenciales</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">3</div>
                                                    <span className="text-sm">Evaluar la necesidad de apoyo</span>
                                                </div>
                                                <div className="flex items-center bg-white p-2 rounded">
                                                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm mr-3">4</div>
                                                    <span className="text-sm">Asegurar la escena antes de ingresar</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tipos de riesgos */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <HiOutlineExclamationTriangle className="mr-2 text-yellow-600"/>
                                            Tipos de Riesgos en Emergencias
                                        </h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                                                <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                    <MdEmergency className="mr-1"/>
                                                    Físicos
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Tráfico vehicular</li>
                                                    <li>• Estructuras inestables</li>
                                                    <li>• Fuego y explosiones</li>
                                                    <li>• Materiales punzocortantes</li>
                                                    <li>• Cables eléctricos</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                                                <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                    <FaMask className="mr-1"/>
                                                    Biológicos
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Sangre y fluidos corporales</li>
                                                    <li>• Enfermedades transmisibles</li>
                                                    <li>• Agujas y material médico</li>
                                                    <li>• Contaminación cruzada</li>
                                                    <li>• Vómito y secreciones</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                                                <h4 className="font-bold text-purple-700 mb-2 flex items-center">
                                                    <MdPsychology className="mr-1"/>
                                                    Químicos
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Gases tóxicos</li>
                                                    <li>• Sustancias corrosivas</li>
                                                    <li>• Materiales peligrosos</li>
                                                    <li>• Combustibles derramados</li>
                                                    <li>• Productos domésticos</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                                                <h4 className="font-bold text-green-700 mb-2 flex items-center">
                                                    <FaUsers className="mr-1"/>
                                                    Sociales
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Multitudes agresivas</li>
                                                    <li>• Violencia doméstica</li>
                                                    <li>• Crimen organizado</li>
                                                    <li>• Protestas y disturbios</li>
                                                    <li>• Pacientes agitados</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
                                                <h4 className="font-bold text-indigo-700 mb-2 flex items-center">
                                                    <FaBrain className="mr-1"/>
                                                    Psicológicos
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Estrés agudo</li>
                                                    <li>• Fatiga mental</li>
                                                    <li>• Trauma secundario</li>
                                                    <li>• Burnout</li>
                                                    <li>• Ansiedad</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                                                <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                                                    <FaAmbulance className="mr-1"/>
                                                    Operacionales
                                                </h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Comunicación deficiente</li>
                                                    <li>• Equipo defectuoso</li>
                                                    <li>• Sobrecarga de trabajo</li>
                                                    <li>• Falta de recursos</li>
                                                    <li>• Coordinación inadecuada</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Principios básicos */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                                <FiCheckCircle className="mr-2"/>
                                                Principios Básicos de Seguridad
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Evaluación constante de la escena
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Uso obligatorio de EPP
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Comunicación efectiva
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Trabajo en equipo
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiActivity className="mr-2 text-green-600"/>
                                                    Rutas de escape planificadas
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-yellow-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                                                <MdTipsAndUpdates className="mr-2"/>
                                                Tips de Seguridad Personal
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                                                    <p className="text-sm text-gray-700">
                                                        <strong>Mantente alerta:</strong> Si algo te parece extraño o peligroso, 
                                                        confía en tu instinto y solicita apoyo.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                                                    <p className="text-sm text-gray-700">
                                                        <strong>Comunica:</strong> Informa constantemente tu estado y ubicación 
                                                        al centro de despacho.
                                                    </p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                                    <p className="text-sm text-gray-700">
                                                        <strong>No te arriesgues:</strong> Ninguna vida vale más que la tuya. 
                                                        Espera apoyo cuando sea necesario.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Marco normativo */}
                                    <div className="bg-indigo-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                                            <MdInfo className="mr-2"/>
                                            Marco Normativo y Legal
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                                                <h4 className="font-bold text-indigo-700 mb-2">NOM-035-STPS-2018</h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Factores de riesgo psicosocial en el trabajo - Identificación, análisis y prevención.
                                                </p>
                                                <ul className="text-xs text-gray-500 space-y-1">
                                                    <li>• Bienestar psicológico</li>
                                                    <li>• Prevención de riesgos</li>
                                                    <li>• Ambiente laboral</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                                <h4 className="font-bold text-blue-700 mb-2">NOM-034-SSA3-2013</h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Regulación de los servicios de atención médica prehospitalaria.
                                                </p>
                                                <ul className="text-xs text-gray-500 space-y-1">
                                                    <li>• Seguridad en ambulancias</li>
                                                    <li>• Equipamiento mínimo</li>
                                                    <li>• Protocolos de seguridad</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-green-500">
                                                <h4 className="font-bold text-green-700 mb-2">Protocolos AAOS</h4>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Estándares internacionales para seguridad en EMS.
                                                </p>
                                                <ul className="text-xs text-gray-500 space-y-1">
                                                    <li>• Seguridad en escena</li>
                                                    <li>• Uso de EPP</li>
                                                    <li>• Reporte de incidentes</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'epp' && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                        <FaHardHat className="inline mr-3 text-blue-500"/>
                                        EPP y Seguridad en Escena
                                    </h2>

                                    {/* Equipo de Protección Personal */}
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                            <BsShieldCheck className="mr-2"/>
                                            Equipo de Protección Personal (EPP)
                                        </h3>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center mb-3">
                                                    <FaHandsWash className="mr-2 text-blue-600"/>
                                                    <h4 className="font-bold text-blue-700">Guantes</h4>
                                                </div>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Nitrilo (recomendado)</li>
                                                    <li>• Látex (si no hay alergia)</li>
                                                    <li>• Doble guante en alto riesgo</li>
                                                    <li>• Cambio entre pacientes</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                                                    <strong>Uso:</strong> Contacto con sangre, fluidos corporales o superficies contaminadas
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center mb-3">
                                                    <FaMask className="mr-2 text-green-600"/>
                                                    <h4 className="font-bold text-green-700">Protección Respiratoria</h4>
                                                </div>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Mascarilla quirúrgica</li>
                                                    <li>• N95 (enfermedades aéreas)</li>
                                                    <li>• P100 (químicos/humo)</li>
                                                    <li>• Respirador completo</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                                                    <strong>Uso:</strong> Protección contra gotículas, aerosoles y contaminantes
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center mb-3">
                                                    <FaEye className="mr-2 text-yellow-600"/>
                                                    <h4 className="font-bold text-yellow-700">Protección Ocular</h4>
                                                </div>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Gafas de seguridad</li>
                                                    <li>• Gafas con protección lateral</li>
                                                    <li>• Careta facial completa</li>
                                                    <li>• Resistentes a impactos</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-yellow-50 rounded text-xs text-yellow-700">
                                                    <strong>Uso:</strong> Protección contra salpicaduras y proyectiles
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center mb-3">
                                                    <MdHealthAndSafety className="mr-2 text-purple-600"/>
                                                    <h4 className="font-bold text-purple-700">Bata/Traje Protector</h4>
                                                </div>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Bata impermeable</li>
                                                    <li>• Traje Tyvek (químicos)</li>
                                                    <li>• Delantal de plástico</li>
                                                    <li>• Manga larga preferible</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-700">
                                                    <strong>Uso:</strong> Protección corporal contra contaminación
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center mb-3">
                                                    <BsPersonCheck className="mr-2 text-orange-600"/>
                                                    <h4 className="font-bold text-orange-700">Calzado de Seguridad</h4>
                                                </div>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Botas impermeables</li>
                                                    <li>• Suela antideslizante</li>
                                                    <li>• Puntera reforzada</li>
                                                    <li>• Fácil descontaminación</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-orange-50 rounded text-xs text-orange-700">
                                                    <strong>Uso:</strong> Protección contra fluidos y objetos punzocortantes
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="flex items-center mb-3">
                                                    <MdSecurity className="mr-2 text-red-600"/>
                                                    <h4 className="font-bold text-red-700">EPP Adicional</h4>
                                                </div>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Chaleco reflectante</li>
                                                    <li>• Casco de seguridad</li>
                                                    <li>• Chaleco balístico</li>
                                                    <li>• Linterna/iluminación</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                                                    <strong>Uso:</strong> Situaciones especiales de alto riesgo
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Procedimiento de colocación y retiro */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                                <FiCheckCircle className="mr-2"/>
                                                Colocación del EPP
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                                                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</div>
                                                    <div>
                                                        <h4 className="font-bold text-green-700 text-sm">Higiene de manos</h4>
                                                        <p className="text-xs text-gray-600">Lavado con agua y jabón o gel antibacterial</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                                                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</div>
                                                    <div>
                                                        <h4 className="font-bold text-green-700 text-sm">Bata/Traje</h4>
                                                        <p className="text-xs text-gray-600">Cubrir torso desde cuello hasta rodillas</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                                                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</div>
                                                    <div>
                                                        <h4 className="font-bold text-green-700 text-sm">Mascarilla</h4>
                                                        <p className="text-xs text-gray-600">Ajustar sobre nariz y boca, sin tocar la parte frontal</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                                                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</div>
                                                    <div>
                                                        <h4 className="font-bold text-green-700 text-sm">Protección ocular</h4>
                                                        <p className="text-xs text-gray-600">Gafas o careta ajustadas correctamente</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                                                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5</div>
                                                    <div>
                                                        <h4 className="font-bold text-green-700 text-sm">Guantes</h4>
                                                        <p className="text-xs text-gray-600">Cubrir puños de la bata, verificar integridad</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-red-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                                                <FiAlertTriangle className="mr-2"/>
                                                Retiro del EPP
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                                                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</div>
                                                    <div>
                                                        <h4 className="font-bold text-red-700 text-sm">Guantes externos</h4>
                                                        <p className="text-xs text-gray-600">Retirar sin tocar la superficie externa</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                                                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</div>
                                                    <div>
                                                        <h4 className="font-bold text-red-700 text-sm">Protección ocular</h4>
                                                        <p className="text-xs text-gray-600">Tomar desde la parte posterior</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                                                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</div>
                                                    <div>
                                                        <h4 className="font-bold text-red-700 text-sm">Bata/Traje</h4>
                                                        <p className="text-xs text-gray-600">Enrollar hacia adentro, no sacudir</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                                                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</div>
                                                    <div>
                                                        <h4 className="font-bold text-red-700 text-sm">Mascarilla</h4>
                                                        <p className="text-xs text-gray-600">Tocar solo las cintas, no la parte frontal</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                                                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5</div>
                                                    <div>
                                                        <h4 className="font-bold text-red-700 text-sm">Higiene final</h4>
                                                        <p className="text-xs text-gray-600">Lavado de manos inmediato y completo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Seguridad en diferentes escenas */}
                                    <div className="bg-gray-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <MdWarning className="mr-2 text-orange-600"/>
                                            Seguridad por Tipo de Escena
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                                                    <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <FaAmbulance className="mr-1"/>
                                                        Accidentes Vehiculares
                                                    </h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Chaleco reflectante obligatorio</li>
                                                        <li>• Señalización a 100m mínimo</li>
                                                        <li>• Apoyo policial para control de tráfico</li>
                                                        <li>• Evaluar estabilidad de vehículos</li>
                                                        <li>• Atención a derrames de combustible</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                                                    <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                                                        <MdEmergency className="mr-1"/>
                                                        Violencia/Crimen
                                                    </h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Esperar liberación policial</li>
                                                        <li>• Mantener rutas de escape</li>
                                                        <li>• Comunicación constante</li>
                                                        <li>• No tocar evidencia</li>
                                                        <li>• Chaleco balístico si disponible</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                                                    <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                        <FaMask className="mr-1"/>
                                                        Materiales Peligrosos
                                                    </h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Identificar placas HAZMAT</li>
                                                        <li>• Viento a favor, cuesta arriba</li>
                                                        <li>• EPP nivel apropiado</li>
                                                        <li>• Descontaminación obligatoria</li>
                                                        <li>• Apoyo de bomberos/HAZMAT</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                                    <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                                        <FaUsers className="mr-1"/>
                                                        Multitudes/Eventos
                                                    </h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Identificación visible del personal</li>
                                                        <li>• Comunicación con organizadores</li>
                                                        <li>• Rutas alternativas planificadas</li>
                                                        <li>• Trabajo en equipos de 2 mínimo</li>
                                                        <li>• Evaluación de estado de ánimo</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ergonomía y prevención de lesiones */}
                                    <div className="bg-teal-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                                            <FiHeart className="mr-2"/>
                                            Ergonomía y Prevención de Lesiones
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-teal-700 mb-3">Levantamiento Seguro</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Flexionar rodillas, no espalda</li>
                                                    <li>• Mantener carga cerca del cuerpo</li>
                                                    <li>• Evitar giros con peso</li>
                                                    <li>• Trabajar en equipo</li>
                                                    <li>• Usar dispositivos mecánicos</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-teal-700 mb-3">Traslado de Pacientes</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Camillas con ruedas cuando sea posible</li>
                                                    <li>• Mínimo 4 personas para traslados</li>
                                                    <li>• Altura adecuada de camilla</li>
                                                    <li>• Comunicación durante el movimiento</li>
                                                    <li>• Descansos frecuentes</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-teal-700 mb-3">Cuidado Personal</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Calentamiento antes del turno</li>
                                                    <li>• Ejercicios de estiramiento</li>
                                                    <li>• Fortalecimiento del core</li>
                                                    <li>• Calzado ergonómico</li>
                                                    <li>• Revisiones médicas regulares</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'stress' && (
                                <div className="space-y-6">
                                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                                        <FaBrain className="inline mr-3 text-purple-500"/>
                                        Estrés y Bienestar Mental
                                    </h2>

                                    {/* Estrés en el trabajo prehospitalario */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center">
                                                <MdPsychology className="mr-2"/>
                                                Estrés Prehospitalario
                                            </h3>
                                            <p className="text-gray-700 mb-3">
                                                El trabajo en emergencias médicas es una de las profesiones con mayor estrés. 
                                                La exposición constante a trauma, decisiones críticas y presión temporal 
                                                puede afectar significativamente la salud mental.
                                            </p>
                                            <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                                                <p className="text-sm text-gray-600">
                                                    <strong>Estadística:</strong> Los paramédicos tienen 1.39 veces más 
                                                    probabilidad de desarrollar TEPT que la población general.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                                                <FiAlertTriangle className="mr-2"/>
                                                Factores de Riesgo
                                            </h3>
                                            <ul className="space-y-2">
                                                <li className="flex items-center text-gray-700">
                                                    <FaClock className="mr-2 text-red-600"/>
                                                    Turnos largos e irregulares
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FiEye className="mr-2 text-red-600"/>
                                                    Exposición a trauma
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FaHeart className="mr-2 text-red-600"/>
                                                    Presión por salvar vidas
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FaUsers className="mr-2 text-red-600"/>
                                                    Conflictos interpersonales
                                                </li>
                                                <li className="flex items-center text-gray-700">
                                                    <FaBrain className="mr-2 text-red-600"/>
                                                    Fatiga mental acumulada
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Signos y síntomas */}
                                    <div className="bg-yellow-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                                            <BsExclamationTriangle className="mr-2"/>
                                            Reconocimiento de Signos de Estrés
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-red-500">
                                                <h4 className="font-bold text-red-700 mb-2">Síntomas Físicos</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Fatiga constante</li>
                                                    <li>• Insomnio o alteraciones del sueño</li>
                                                    <li>• Dolores de cabeza frecuentes</li>
                                                    <li>• Problemas gastrointestinales</li>
                                                    <li>• Tensión muscular</li>
                                                    <li>• Cambios en el apetito</li>
                                                    <li>• Resfriados frecuentes</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                                                <h4 className="font-bold text-orange-700 mb-2">Síntomas Emocionales</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Irritabilidad constante</li>
                                                    <li>• Ansiedad o nerviosismo</li>
                                                    <li>• Sentimientos de tristeza</li>
                                                    <li>• Pérdida de motivación</li>
                                                    <li>• Sensación de agobio</li>
                                                    <li>• Cambios de humor frecuentes</li>
                                                    <li>• Sentimientos de culpa</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                                                <h4 className="font-bold text-purple-700 mb-2">Síntomas Conductuales</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Aislamiento social</li>
                                                    <li>• Aumento en consumo de alcohol</li>
                                                    <li>• Procrastinación</li>
                                                    <li>• Ausentismo laboral</li>
                                                    <li>• Dificultad para concentrarse</li>
                                                    <li>• Olvidos frecuentes</li>
                                                    <li>• Comportamiento agresivo</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Estrategias de manejo */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                                <FiCheckCircle className="mr-2"/>
                                                Estrategias de Autocuidado
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                    <h4 className="font-bold text-green-700 mb-1">Cuidado Físico</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Ejercicio regular (30 min/día)</li>
                                                        <li>• Alimentación balanceada</li>
                                                        <li>• Hidratación adecuada</li>
                                                        <li>• Sueño reparador (7-8 horas)</li>
                                                        <li>• Exámenes médicos regulares</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                    <h4 className="font-bold text-blue-700 mb-1">Cuidado Mental</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Técnicas de relajación</li>
                                                        <li>• Mindfulness y meditación</li>
                                                        <li>• Hobbies y actividades placenteras</li>
                                                        <li>• Tiempo de calidad con familia</li>
                                                        <li>• Límites entre trabajo y vida personal</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                                <FaUsers className="mr-2"/>
                                                Apoyo Profesional y Social
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                    <h4 className="font-bold text-blue-700 mb-1">Programas de Apoyo</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• EAP (Employee Assistance Programs)</li>
                                                        <li>• CISM (Critical Incident Stress Management)</li>
                                                        <li>• Terapia psicológica especializada</li>
                                                        <li>• Grupos de apoyo entre pares</li>
                                                        <li>• Líneas de crisis 24/7</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-teal-500">
                                                    <h4 className="font-bold text-teal-700 mb-1">Red de Apoyo</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Compañeros de trabajo</li>
                                                        <li>• Supervisores capacitados</li>
                                                        <li>• Familia y amigos</li>
                                                        <li>• Comunidad profesional</li>
                                                        <li>• Recursos en línea</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Técnicas de relajación */}
                                    <div className="bg-indigo-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-indigo-800 mb-4 flex items-center">
                                            <FiHeart className="mr-2"/>
                                            Técnicas de Relajación Rápida
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                                                    <h4 className="font-bold text-indigo-700 mb-2">Respiración 4-7-8</h4>
                                                    <ol className="text-sm text-gray-600 space-y-1">
                                                        <li>1. Inhala por 4 segundos</li>
                                                        <li>2. Mantén por 7 segundos</li>
                                                        <li>3. Exhala por 8 segundos</li>
                                                        <li>4. Repite 4 ciclos</li>
                                                    </ol>
                                                    <p className="text-xs text-indigo-600 mt-2">Útil para ansiedad y antes de dormir</p>
                                                </div>
                                                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                                                    <h4 className="font-bold text-green-700 mb-2">Relajación Muscular</h4>
                                                    <ol className="text-sm text-gray-600 space-y-1">
                                                        <li>1. Tensa músculos por 5 segundos</li>
                                                        <li>2. Relaja completamente</li>
                                                        <li>3. Comienza por pies, sube gradualmente</li>
                                                        <li>4. Incluye cara y cuello</li>
                                                    </ol>
                                                    <p className="text-xs text-green-600 mt-2">Excelente para tensión física</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                                                    <h4 className="font-bold text-purple-700 mb-2">Técnica 5-4-3-2-1</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• 5 cosas que puedes ver</li>
                                                        <li>• 4 cosas que puedes tocar</li>
                                                        <li>• 3 cosas que puedes oír</li>
                                                        <li>• 2 cosas que puedes oler</li>
                                                        <li>• 1 cosa que puedes saborear</li>
                                                    </ul>
                                                    <p className="text-xs text-purple-600 mt-2">Ideal para ataques de pánico</p>
                                                </div>
                                                <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                                                    <h4 className="font-bold text-orange-700 mb-2">Mindfulness Básico</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Enfócate en el momento presente</li>
                                                        <li>• Observa sin juzgar</li>
                                                        <li>• Acepta los pensamientos y emociones</li>
                                                        <li>• Practica 5-10 minutos diarios</li>
                                                    </ul>
                                                    <p className="text-xs text-orange-600 mt-2">Reduce estrés crónico</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Prevención del burnout */}
                                    <div className="bg-red-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                                            <MdWarning className="mr-2"/>
                                            Prevención del Burnout
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3">Señales de Alerta</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Cinismo hacia pacientes</li>
                                                    <li>• Pérdida de empatía</li>
                                                    <li>• Agotamiento emocional</li>
                                                    <li>• Sensación de inutilidad</li>
                                                    <li>• Despersonalización</li>
                                                    <li>• Falta de logros personales</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3">Factores Protectores</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Balance trabajo-vida</li>
                                                    <li>• Apoyo organizacional</li>
                                                    <li>• Control sobre el trabajo</li>
                                                    <li>• Reconocimiento y recompensas</li>
                                                    <li>• Valores alineados</li>
                                                    <li>• Comunicación efectiva</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3">Estrategias de Prevención</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Rotación de turnos</li>
                                                    <li>• Pausas programadas</li>
                                                    <li>• Desarrollo profesional continuo</li>
                                                    <li>• Celebración de logros</li>
                                                    <li>• Feedback constructivo</li>
                                                    <li>• Tiempo libre de calidad</li>
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
                                        Casos Prácticos de Seguridad
                                    </h2>

                                    {/* Caso 1: Escena insegura */}
                                    <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                                            <HiOutlineExclamationTriangle className="mr-2"/>
                                            Caso 1: Accidente Vehicular en Carretera
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-red-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> 23:45 hrs. Colisión múltiple en autopista. 
                                                Lluvia intensa, visibilidad reducida, tráfico pesado a alta velocidad. 
                                                Dos vehículos volcados, uno en llamas. Reportan 4 víctimas.
                                            </p>
                                        </div>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3 flex items-center">
                                                    <FiAlertTriangle className="mr-2"/>
                                                    Riesgos Identificados
                                                </h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start text-gray-700">
                                                        <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                                        <span className="text-sm">Tráfico vehicular a alta velocidad</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                                        <span className="text-sm">Condiciones climáticas adversas</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                                        <span className="text-sm">Incendio vehicular activo</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                                        <span className="text-sm">Visibilidad reducida</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                                        <span className="text-sm">Posible derrame de combustible</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-red-700 mb-3">Acciones Prioritarias</h4>
                                                <ol className="space-y-2">
                                                    <li className="flex items-start text-gray-700">
                                                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1</div>
                                                        <span className="text-sm">Solicitar apoyo policial inmediato para control de tráfico</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2</div>
                                                        <span className="text-sm">Colocarse chaleco reflectante y activar luces de emergencia</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3</div>
                                                        <span className="text-sm">Solicitar bomberos por incendio vehicular</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4</div>
                                                        <span className="text-sm">NO aproximarse hasta que la escena sea segura</span>
                                                    </li>
                                                    <li className="flex items-start text-gray-700">
                                                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">5</div>
                                                        <span className="text-sm">Establecer zona de seguridad 100m antes del accidente</span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 bg-red-100 p-3 rounded">
                                            <h4 className="font-bold text-red-800 mb-2">Lección Clave</h4>
                                            <p className="text-sm text-red-700">
                                                <strong>"La escena no es segura hasta que esté confirmadamente segura."</strong> 
                                                Nunca comprometas tu seguridad por la urgencia de atender pacientes. 
                                                Un rescatista herido no puede ayudar a nadie más.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Caso 2: Exposición biológica */}
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                            <FaMask className="mr-2"/>
                                            Caso 2: Exposición a Material Biológico
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Durante la atención de un paciente con hemorragia digestiva alta, 
                                                el TUM sufre una salpicadura de sangre en el ojo derecho al momento que el paciente vomita. 
                                                El paciente tiene antecedentes de hepatitis B.
                                            </p>
                                        </div>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-blue-700 mb-3">Acciones Inmediatas</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                                                        <h5 className="font-bold text-blue-600 text-sm">1. Lavado Inmediato (Primeros 15 minutos)</h5>
                                                        <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                                            <li>• Irrigación abundante con solución salina estéril</li>
                                                            <li>• Si no disponible, usar agua limpia</li>
                                                            <li>• Irrigar desde el ángulo interno hacia externo</li>
                                                            <li>• Duración mínima: 15 minutos</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                                                        <h5 className="font-bold text-blue-600 text-sm">2. Notificación</h5>
                                                        <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                                            <li>• Informar inmediatamente al supervisor</li>
                                                            <li>• Documentar hora, lugar y tipo de exposición</li>
                                                            <li>• Notificar al centro de despacho</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-blue-700 mb-3">Seguimiento Post-Exposición</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                                                        <h5 className="font-bold text-green-600 text-sm">Evaluación Médica (&lt; 2 horas)</h5>
                                                        <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                                            <li>• Acudir a urgencias del hospital base</li>
                                                            <li>• Llevar información del paciente fuente</li>
                                                            <li>• Evaluación por infectología</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                                                        <h5 className="font-bold text-orange-600 text-sm">Laboratorios</h5>
                                                        <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                                            <li>• Serología basal (VHB, VHC, VIH)</li>
                                                            <li>• Seguimiento a 6 semanas, 3 y 6 meses</li>
                                                            <li>• Considerar profilaxis post-exposición</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                                            <div className="bg-yellow-100 p-3 rounded">
                                                <h4 className="font-bold text-yellow-800 mb-2">Prevención</h4>
                                                <ul className="text-sm text-yellow-700 space-y-1">
                                                    <li>• Uso obligatorio de protección ocular</li>
                                                    <li>• Mascarilla facial completa en alto riesgo</li>
                                                    <li>• Posicionamiento lateral del rescatista</li>
                                                    <li>• Aspiración temprana de secreciones</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-100 p-3 rounded">
                                                <h4 className="font-bold text-blue-800 mb-2">Documentación Requerida</h4>
                                                <ul className="text-sm text-blue-700 space-y-1">
                                                    <li>• Formato de exposición ocupacional</li>
                                                    <li>• Reporte de incidente</li>
                                                    <li>• Evaluación médica inicial</li>
                                                    <li>• Plan de seguimiento</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3: Estrés post-incidente */}
                                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                                            <FaBrain className="mr-2"/>
                                            Caso 3: Estrés Agudo Post-Incidente Crítico
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-purple-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Tras atender un accidente que involucró niños con múltiples 
                                                víctimas fatales, un paramédico experimentado comienza a presentar insomnio, 
                                                pesadillas recurrentes y evita turnos nocturnos. Su rendimiento laboral ha disminuido.
                                            </p>
                                        </div>
                                        
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-purple-700 mb-3">Signos de Alerta</h4>
                                                <ul className="text-sm text-gray-600 space-y-2">
                                                    <li className="flex items-center">
                                                        <MdPsychology className="mr-2 text-purple-600"/>
                                                        Alteraciones del sueño
                                                    </li>
                                                    <li className="flex items-center">
                                                        <MdPsychology className="mr-2 text-purple-600"/>
                                                        Reviviscencia del evento
                                                    </li>
                                                    <li className="flex items-center">
                                                        <MdPsychology className="mr-2 text-purple-600"/>
                                                        Evitación de situaciones similares
                                                    </li>
                                                    <li className="flex items-center">
                                                        <MdPsychology className="mr-2 text-purple-600"/>
                                                        Disminución del rendimiento
                                                    </li>
                                                    <li className="flex items-center">
                                                        <MdPsychology className="mr-2 text-purple-600"/>
                                                        Aislamiento social
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-purple-700 mb-3">Intervención Inmediata</h4>
                                                <div className="space-y-2">
                                                    <div className="bg-purple-50 p-2 rounded text-sm">
                                                        <strong>24-48 horas:</strong> Defusing - ventilación emocional informal
                                                    </div>
                                                    <div className="bg-purple-50 p-2 rounded text-sm">
                                                        <strong>72 horas:</strong> CISD formal si los síntomas persisten
                                                    </div>
                                                    <div className="bg-purple-50 p-2 rounded text-sm">
                                                        <strong>1 semana:</strong> Evaluación psicológica profesional
                                                    </div>
                                                    <div className="bg-purple-50 p-2 rounded text-sm">
                                                        <strong>Continuo:</strong> Seguimiento y apoyo entre pares
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-purple-700 mb-3">Recursos de Apoyo</h4>
                                                <ul className="text-sm text-gray-600 space-y-2">
                                                    <li className="flex items-center">
                                                        <FaUsers className="mr-2 text-purple-600"/>
                                                        Equipo CISM
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaHeart className="mr-2 text-purple-600"/>
                                                        Psicólogo especializado
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaAmbulance className="mr-2 text-purple-600"/>
                                                        Programa de asistencia al empleado
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaUsers className="mr-2 text-purple-600"/>
                                                        Grupos de apoyo
                                                    </li>
                                                    <li className="flex items-center">
                                                        <FaBrain className="mr-2 text-purple-600"/>
                                                        Línea de crisis 24/7
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 bg-purple-100 p-3 rounded">
                                            <h4 className="font-bold text-purple-800 mb-2">Mensaje Importante</h4>
                                            <p className="text-sm text-purple-700">
                                                Las reacciones de estrés post-incidente crítico son <strong>normales</strong> 
                                                ante situaciones anormales. Buscar ayuda es signo de fortaleza, no de debilidad. 
                                                El estigma asociado con la salud mental en servicios de emergencia debe ser eliminado.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Caso 4: Agresión en escena */}
                                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow">
                                        <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                                            <FaUsers className="mr-2"/>
                                            Caso 4: Agresión y Violencia en Escena
                                        </h3>
                                        <div className="bg-white p-4 rounded border-l-4 border-orange-500 mb-4">
                                            <p className="text-gray-700 italic">
                                                <strong>Escenario:</strong> Llamada por intoxicación etílica en zona conflictiva. 
                                                Al llegar, el paciente está agresivo y los familiares muestran hostilidad hacia 
                                                la ambulancia. Se observan personas sospechosas merodeando el área.
                                            </p>
                                        </div>
                                        
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-orange-700 mb-3">Evaluación de Seguridad</h4>
                                                <div className="space-y-2">
                                                    <div className="bg-red-50 p-2 rounded text-sm">
                                                        <strong>Señales de peligro:</strong>
                                                        <ul className="mt-1 text-xs text-gray-600">
                                                            <li>• Hostilidad abierta hacia personal médico</li>
                                                            <li>• Presencia de individuos sospechosos</li>
                                                            <li>• Paciente agresivo y desorientado</li>
                                                            <li>• Zona conocida por violencia</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-yellow-50 p-2 rounded text-sm">
                                                        <strong>Decisión:</strong> NO ingresar hasta que policía asegure la escena
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-bold text-orange-700 mb-3">Protocolo de Seguridad</h4>
                                                <ol className="text-sm text-gray-600 space-y-1">
                                                    <li>1. Mantener distancia segura (&gt; 2 cuadras)</li>
                                                    <li>2. Solicitar apoyo policial inmediato</li>
                                                    <li>3. Comunicar situación al despachador</li>
                                                    <li>4. Preparar ruta de escape rápida</li>
                                                    <li>5. NO intentar dialogar o mediar</li>
                                                    <li>6. Esperar "escena segura" de policía</li>
                                                    <li>7. Mantener radio encendida</li>
                                                </ol>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-4 grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                                <h4 className="font-bold text-red-700 mb-2">Nunca Hagas</h4>
                                                <ul className="text-xs text-gray-600 space-y-1">
                                                    <li>• Ingresar a escena sin policía</li>
                                                    <li>• Confrontar a personas agresivas</li>
                                                    <li>• Dar la espalda a multitudes hostiles</li>
                                                    <li>• Separarte de tu compañero</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                <h4 className="font-bold text-green-700 mb-2">Siempre Haz</h4>
                                                <ul className="text-xs text-gray-600 space-y-1">
                                                    <li>• Mantener comunicación constante</li>
                                                    <li>• Posicionar ambulancia para escape</li>
                                                    <li>• Confiar en tu instinto</li>
                                                    <li>• Reportar amenazas</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                <h4 className="font-bold text-blue-700 mb-2">Post-Incidente</h4>
                                                <ul className="text-xs text-gray-600 space-y-1">
                                                    <li>• Reportar amenazas a supervisión</li>
                                                    <li>• Documentar evento completo</li>
                                                    <li>• Debriefing con el equipo</li>
                                                    <li>• Considerar apoyo psicológico</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reflexiones finales */}
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                            <MdTipsAndUpdates className="mr-2 text-orange-500"/>
                                            Principios Fundamentales de Seguridad
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                                                <h4 className="font-bold text-orange-700 mb-2">Prevención</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• La seguridad es responsabilidad de todos</li>
                                                    <li>• Capacitación continua</li>
                                                    <li>• Actualización de protocolos</li>
                                                    <li>• Cultura de seguridad organizacional</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                                                <h4 className="font-bold text-blue-700 mb-2">Preparación</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• EPP siempre disponible y funcional</li>
                                                    <li>• Planes de emergencia claros</li>
                                                    <li>• Comunicación efectiva</li>
                                                    <li>• Trabajo en equipo</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-green-500">
                                                <h4 className="font-bold text-green-700 mb-2">Respuesta</h4>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Evaluación constante de riesgos</li>
                                                    <li>• Adaptabilidad ante cambios</li>
                                                    <li>• Toma de decisiones informada</li>
                                                    <li>• Apoyo mutuo entre compañeros</li>
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
                                                        className={`$${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`}
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
                                        <li>NOM-035-STPS-2018. <a
                                            href="https://www.gob.mx/cms/uploads/attachment/file/484604/NOM-035-STPS-2018.pdf"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">Norma Oficial Mexicana</a></li>
                                        <li>NOM-034-SSA3-2013. <a
                                            href="https://www.gob.mx/cms/uploads/attachment/file/512076/NOM-034-SSA3-2013.pdf"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">Norma de ambulancias</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-safety/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Seguridad en EMS</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-safety/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Seguridad y bienestar</a></li>
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

