import {IoIosBody} from "react-icons/io";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Immobilization.questionts.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning} from "react-icons/md";
import {BsBookHalf, BsShield, BsLightbulb} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaBone, FaExclamationTriangle, FaFirstAid, FaHandsHelping} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function Immobilization() {
    const [activeTab, setActiveTab] = useState<'overview' | 'materials' | 'techniques' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Inmovilización y Transporte EMT | Técnicas, Dispositivos y Casos Clínicos"
            description="Guía completa sobre inmovilización y transporte para Técnicos en Atención Médica Prehospitalaria: técnicas de inmovilización, dispositivos, traslado seguro y casos clínicos. Aprende a manejar traumatismos musculoesqueléticos."
            keywords="inmovilización, EMT, paramédicos, férulas, tabla espinal, collarín cervical, transporte de pacientes, trauma musculoesquelético, fracturas, luxaciones, emergencias médicas, casos clínicos"
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
                            <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Inmovilización</h1>
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
                            to="/inmobilization/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1Rnfsa9yfGk1X8vWPptTCUSNO46Snf2nq/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <a href="https://drive.google.com/file/d/1FZXY1nS20I6bRHkskioGiJgygitK4VWu/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Capítulo</p>
                        </a>

                        <a href="https://www.youtube.com/watch?v=ABC123"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <FaFirstAid className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Videos</p>
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
                                onClick={() => setActiveTab('materials')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'materials'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Materiales y Equipo
                            </button>
                            <button
                                onClick={() => setActiveTab('techniques')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'techniques'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Técnicas de Inmovilización
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Prioridad Crítica!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        La inmovilización inadecuada puede convertir una <strong>lesión cerrada en abierta</strong>, 
                                        causando daño neurovascular permanente. Cada movimiento incorrecto puede significar 
                                        <span className="text-red-600 font-bold"> discapacidad de por vida</span>.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Inmediato</p>
                                            <p className="text-sm">Dolor y edema</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">30-60 min</p>
                                            <p className="text-sm">Síndrome compartimental</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">Horas-días</p>
                                            <p className="text-sm">Necrosis y amputación</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación CSM */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Evaluación CSM - Sistema Neurovascular
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">C - CIRCULACIÓN</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Pulsos distales (radial, pedío, tibial posterior)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Llenado capilar (&lt;2 segundos)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Color y temperatura de la piel</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Edema distal a la lesión</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">S - SENSIBILIDAD</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Tacto ligero en dedos de manos/pies</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Sensación de pinchazo</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Parestesias (hormigueo, entumecimiento)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Dolor a la presión</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-orange-700 mb-3 text-center">M - MOVIMIENTO</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaHandsHelping className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Flexión y extensión de dedos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaHandsHelping className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Movimientos de muñeca/tobillo</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaHandsHelping className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Fuerza de prensión</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaHandsHelping className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Oposición del pulgar</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Emergencia Ortopédica</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Compromiso Neurovascular:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Ausencia de pulsos distales</li>
                                                <li>Llenado capilar &gt;3 segundos</li>
                                                <li>Palidez, cianosis o frialdad</li>
                                                <li>Parestesias o anestesia</li>
                                                <li>Parálisis distal a la lesión</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Síndrome Compartimental:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dolor desproporcionado</li>
                                                <li>Dolor con movimiento pasivo</li>
                                                <li>Tensión o dureza del compartimento</li>
                                                <li>Parestesias en distribución nerviosa</li>
                                                <li>Pérdida progresiva de función</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Principios fundamentales */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Principios Fundamentales de Inmovilización</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="font-medium text-lg mb-3 text-green-700 flex items-center">
                                                <MdCheckCircle className="w-5 h-5 mr-2"/>
                                                HACER SIEMPRE:
                                            </h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Evaluar CSM antes y después de inmovilizar</li>
                                                <li>Inmovilizar articulaciones adyacentes</li>
                                                <li>Exponer completamente la zona lesionada</li>
                                                <li>Retirar joyas y ropa restrictiva</li>
                                                <li>Mantener posición anatómica si es posible</li>
                                                <li>Acolchar puntos de presión prominentes</li>
                                                <li>Documentar hallazgos neurológicos</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-lg">
                                            <h3 className="font-medium text-lg mb-3 text-red-700 flex items-center">
                                                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                NUNCA HACER:
                                            </h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Forzar realineación de deformidades severas</li>
                                                <li>Aplicar tracción sin evaluación previa</li>
                                                <li>Inmovilizar directamente sobre piel</li>
                                                <li>Apretar excesivamente las sujeciones</li>
                                                <li>Ignorar quejas de dolor o entumecimiento</li>
                                                <li>Olvidar reevaluar tras inmovilización</li>
                                                <li>Aplicar frío directamente sobre la piel</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Objetivos de la inmovilización */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-blue-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-blue-800">Objetivos de la Inmovilización</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2">Objetivos Inmediatos:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>Prevenir mayor daño:</strong> Evitar lesión de tejidos, vasos y nervios</li>
                                                <li><strong>Reducir dolor:</strong> Limitar movimiento y espasmo muscular</li>
                                                <li><strong>Controlar hemorragia:</strong> Estabilizar fragmentos óseos</li>
                                                <li><strong>Prevenir shock:</strong> Minimizar pérdida sanguínea</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2">Objetivos a Largo Plazo:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>Facilitar transporte:</strong> Permitir movilización segura</li>
                                                <li><strong>Favorecer cicatrización:</strong> Alineación apropiada del hueso</li>
                                                <li><strong>Preservar función:</strong> Mantener integridad neurovascular</li>
                                                <li><strong>Reducir complicaciones:</strong> Evitar embolia grasa y síndrome compartimental</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'materials' && (
                            <div className="space-y-8">
                                {/* Clasificación de dispositivos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaBone className="w-6 h-6 mr-2 text-orange-500"/>
                                        Clasificación de Dispositivos de Inmovilización
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Inmovilización Espinal</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Collarín Cervical</h4>
                                                            <p className="text-sm text-gray-600">Rígido de una pieza, con soporte mentoniano y occipital</p>
                                                            <p className="text-xs text-blue-600 mt-1">Tallas: Pediátrico, Pequeño, Mediano, Grande</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Tabla Espinal Larga</h4>
                                                            <p className="text-sm text-gray-600">Inmovilización completa, radiotransparente</p>
                                                            <p className="text-xs text-blue-600 mt-1">Incluye: Sujetadores, inmovilizadores laterales</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Chaleco de Extricación (KED)</h4>
                                                            <p className="text-sm text-gray-600">Para extracción vehicular y espacios confinados</p>
                                                            <p className="text-xs text-blue-600 mt-1">Tiempo de aplicación: 8-12 minutos</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Camilla de Cuchara</h4>
                                                            <p className="text-sm text-gray-600">Transferencia con mínimo movimiento</p>
                                                            <p className="text-xs text-blue-600 mt-1">Ideal para: Espacios reducidos, trauma múltiple</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                <h3 className="text-xl font-bold text-green-700 mb-4">Férulas para Extremidades</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Férulas Rígidas</h4>
                                                            <p className="text-sm text-gray-600">SAM splint, férulas de cartón, madera</p>
                                                            <p className="text-xs text-green-600 mt-1">Ventaja: Soporte firme, reusables</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Férulas Neumáticas</h4>
                                                            <p className="text-sm text-gray-600">Inflables, transparentes para observación</p>
                                                            <p className="text-xs text-green-600 mt-1">Precaución: Cambios de presión por altitud</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Férulas de Vacío</h4>
                                                            <p className="text-sm text-gray-600">Se moldean a cualquier deformidad</p>
                                                            <p className="text-xs text-green-600 mt-1">Ideal: Fracturas anguladas, articulaciones</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Férula de Tracción</h4>
                                                            <p className="text-sm text-gray-600">Hare, Sager, Kendrick para fracturas de fémur</p>
                                                            <p className="text-xs text-green-600 mt-1">Reduce: Dolor, sangrado, espasmo muscular</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabla comparativa de dispositivos */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Comparación de Dispositivos por Región</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border rounded-lg">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Región</th>
                                                    <th className="py-3 px-4 border text-center">Dispositivo Preferido</th>
                                                    <th className="py-3 px-4 border text-center">Alternativa</th>
                                                    <th className="py-3 px-4 border text-center">Contraindicaciones</th>
                                                    <th className="py-3 px-4 border text-center">Tiempo Aplicación</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Columna Cervical</td>
                                                    <td className="py-3 px-4 border text-center">Collarín rígido + tabla</td>
                                                    <td className="py-3 px-4 border text-center">KED</td>
                                                    <td className="py-3 px-4 border text-center">Penetrante en cuello</td>
                                                    <td className="py-3 px-4 border text-center">2-3 min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Húmero</td>
                                                    <td className="py-3 px-4 border text-center">SAM splint + cabestrillo</td>
                                                    <td className="py-3 px-4 border text-center">Férula de vacío</td>
                                                    <td className="py-3 px-4 border text-center">Fractura abierta severa</td>
                                                    <td className="py-3 px-4 border text-center">5-8 min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Antebrazo</td>
                                                    <td className="py-3 px-4 border text-center">Férula rígida bilateral</td>
                                                    <td className="py-3 px-4 border text-center">Férula neumática</td>
                                                    <td className="py-3 px-4 border text-center">Síndrome compartimental</td>
                                                    <td className="py-3 px-4 border text-center">3-5 min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Fémur</td>
                                                    <td className="py-3 px-4 border text-center">Férula de tracción</td>
                                                    <td className="py-3 px-4 border text-center">Tabla larga</td>
                                                    <td className="py-3 px-4 border text-center">Fx cadera/rodilla</td>
                                                    <td className="py-3 px-4 border text-center">10-15 min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Tibia/Peroné</td>
                                                    <td className="py-3 px-4 border text-center">Férula de vacío</td>
                                                    <td className="py-3 px-4 border text-center">SAM splint</td>
                                                    <td className="py-3 px-4 border text-center">Herida con sangrado activo</td>
                                                    <td className="py-3 px-4 border text-center">6-10 min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Tobillo/Pie</td>
                                                    <td className="py-3 px-4 border text-center">Férula en L</td>
                                                    <td className="py-3 px-4 border text-center">Almohada</td>
                                                    <td className="py-3 px-4 border text-center">Luxación con compromiso vascular</td>
                                                    <td className="py-3 px-4 border text-center">4-6 min</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Materiales de sujeción */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Materiales de Sujeción y Acolchamiento</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                            <h4 className="font-bold text-orange-700 mb-3">Cintas y Correas</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Araña de sujeción:</strong> Sistema de correas para tabla espinal
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Velcro médico:</strong> Fácil ajuste, reusable
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Correas con hebilla:</strong> Sujeción firme y segura
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <h4 className="font-bold text-blue-700 mb-3">Vendajes</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Vendas elásticas:</strong> 2", 4", 6" de ancho
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Vendas cohesivas:</strong> Se adhieren a sí mismas
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Triangulares:</strong> Para cabestrillos y vendajes
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                            <h4 className="font-bold text-green-700 mb-3">Acolchamiento</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Almohadillas:</strong> Para puntos de presión ósea
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Rollos de gasa:</strong> Separar dedos, rellenar espacios
                                                    </div>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                                    <div>
                                                        <strong>Mantas:</strong> Para envolver y estabilizar
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Consideraciones especiales por edad */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                                        <FiUser className="w-5 h-5 mr-2"/>
                                        Consideraciones Especiales por Población
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-purple-800 mb-2">Pacientes Pediátricos:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• Dispositivos específicos para niños</li>
                                                <li>• Mayor proporción cabeza/cuerpo</li>
                                                <li>• Huesos más flexibles (deformidad plástica)</li>
                                                <li>• Mayor riesgo de hipotermia</li>
                                                <li>• Necesidad de comunicación tranquilizadora</li>
                                                <li>• Participación de padres cuando sea posible</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-purple-800 mb-2">Adultos Mayores:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• Mayor fragilidad ósea (osteoporosis)</li>
                                                <li>• Piel más delgada y frágil</li>
                                                <li>• Múltiples comorbilidades</li>
                                                <li>• Medicamentos anticoagulantes</li>
                                                <li>• Mayor riesgo de úlceras por presión</li>
                                                <li>• Evaluación neurovascular más frecuente</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-purple-800 mb-2">Pacientes Obesos:</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• Dispositivos de mayor tamaño</li>
                                                <li>• Personal adicional para movilización</li>
                                                <li>• Dificultad para evaluar pulsos</li>
                                                <li>• Mayor riesgo de complicaciones respiratorias</li>
                                                <li>• Puntos de presión diferentes</li>
                                                <li>• Consideraciones de peso para equipos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'techniques' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                    Técnicas de Inmovilización por Región Anatómica
                                </h2>

                                {/* Procedimiento general */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                        <BsShield className="w-5 h-5 mr-2"/>
                                        Procedimiento General de Inmovilización
                                    </h3>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-green-700 mb-3">✅ EVALUACIÓN INICIAL</h4>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                <li><strong>Escena segura:</strong> Evaluar mecanismo de lesión</li>
                                                <li><strong>ABC primario:</strong> Vía aérea, respiración, circulación</li>
                                                <li><strong>Exposición:</strong> Quitar ropa y joyas de la zona</li>
                                                <li><strong>Inspección:</strong> Deformidad, edema, equimosis</li>
                                                <li><strong>Palpación:</strong> Dolor, crepitación, inestabilidad</li>
                                                <li><strong>CSM inicial:</strong> Documentar antes de inmovilizar</li>
                                            </ol>
                                        </div>
                                        <div className="bg-white p-6 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-orange-700 mb-3">🔧 APLICACIÓN DEL DISPOSITIVO</h4>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                <li><strong>Selección:</strong> Dispositivo apropiado y talla</li>
                                                <li><strong>Preparación:</strong> Acolchamiento en puntos de presión</li>
                                                <li><strong>Aplicación:</strong> Técnica específica por región</li>
                                                <li><strong>Verificación:</strong> Alineación y estabilidad</li>
                                                <li><strong>Sujeción:</strong> Firme pero no excesiva</li>
                                                <li><strong>CSM final:</strong> Reevaluar y documentar</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                {/* Inmovilización por regiones */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-800">Técnicas Específicas por Región</h3>
                                    
                                    {/* Columna vertebral */}
                                    <div className="p-6 bg-red-50 rounded-lg border border-red-200">
                                        <h4 className="font-bold text-red-700 mb-4 flex items-center">
                                            <FaBone className="w-5 h-5 mr-2"/>
                                            COLUMNA VERTEBRAL - Máxima Prioridad
                                        </h4>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-semibold text-red-800 mb-2">Técnica Log-Roll (Volteo en Bloque):</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Líder mantiene estabilización cervical manual</li>
                                                    <li>Personal #2 controla torso y brazo</li>
                                                    <li>Personal #3 controla pelvis y muslos</li>
                                                    <li>Personal #4 controla piernas y pies</li>
                                                    <li>Volteo coordinado en una sola unidad</li>
                                                    <li>Inspección de espalda y colocación de tabla</li>
                                                    <li>Regreso a posición supina manteniendo alineación</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-red-800 mb-2">Aplicación de Collarín Cervical:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Mantener estabilización manual continua</li>
                                                    <li>Medir desde trapecio hasta ángulo mandibular</li>
                                                    <li>Seleccionar talla apropiada del collarín</li>
                                                    <li>Deslizar porción posterior primero</li>
                                                    <li>Colocar porción anterior sin forzar</li>
                                                    <li>Ajustar velcro manteniendo alineación</li>
                                                    <li>Verificar que no obstruya vía aérea</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-white rounded border border-red-300">
                                            <p className="text-sm text-red-700">
                                                <strong>⚠️ ADVERTENCIA:</strong> Nunca liberar estabilización manual hasta que el paciente esté 
                                                completamente inmovilizado en tabla espinal con sujeciones y collarín aplicado.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Miembro superior */}
                                    <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                                        <h4 className="font-bold text-blue-700 mb-4">MIEMBRO SUPERIOR</h4>
                                        <div className="grid lg:grid-cols-3 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-blue-800 mb-2">Húmero (Brazo):</h5>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>SAM splint en U invertida</li>
                                                    <li>Incluir articulaciones hombro y codo</li>
                                                    <li>Cabestrillo para soporte adicional</li>
                                                    <li>Vendaje en ocho si es necesario</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-blue-800 mb-2">Antebrazo:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Férula palmar y dorsal</li>
                                                    <li>Incluir muñeca y codo</li>
                                                    <li>Posición funcional de muñeca</li>
                                                    <li>Cabestrillo para elevación</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-blue-800 mb-2">Mano/Muñeca:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Posición de función (copa)</li>
                                                    <li>Rollo de gasa en palma</li>
                                                    <li>Férula palmar hasta antebrazo</li>
                                                    <li>Dedos libres para evaluación CSM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Miembro inferior */}
                                    <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                                        <h4 className="font-bold text-green-700 mb-4">MIEMBRO INFERIOR</h4>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-semibold text-green-800 mb-2">Fractura de Fémur - Férula de Tracción:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Evaluar CSM y medir extremidad sana</li>
                                                    <li>Aplicar tracción manual en línea</li>
                                                    <li>Acolchar puntos de contacto (isquion, maléolo)</li>
                                                    <li>Aplicar correa pélvica sobre ropa</li>
                                                    <li>Posicionar férula lateral a extremidad</li>
                                                    <li>Conectar tracción al tobillo con correa</li>
                                                    <li>Aplicar tracción mecánica hasta alivio del dolor</li>
                                                    <li>Asegurar férula con correas y reevaluar CSM</li>
                                                </ol>
                                                <div className="mt-2 p-2 bg-white rounded border border-green-300">
                                                    <p className="text-xs text-green-700">
                                                        <strong>Contraindicaciones:</strong> Fractura de cadera, rodilla, tobillo, o herida abierta severa
                                                    </p>
                                                </div>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-green-800 mb-2">Tibia/Peroné:</h5>
                                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>Férula de vacío:</strong> Ideal para deformidades</li>
                                                    <li><strong>SAM splint:</strong> Férula en U desde ingle hasta pie</li>
                                                    <li><strong>Incluir articulaciones:</strong> Rodilla y tobillo</li>
                                                    <li><strong>Posición:</strong> Tobillo en 90° si es posible</li>
                                                </ul>
                                                
                                                <h5 className="font-semibold text-green-800 mb-2 mt-4">Tobillo/Pie:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Férula en L (90 grados)</li>
                                                    <li>Almohada como alternativa</li>
                                                    <li>Evitar forzar posición en luxaciones</li>
                                                    <li>Vendaje suave pero firme</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Consideraciones especiales */}
                                    <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                                        <h4 className="font-bold text-yellow-700 mb-4">Consideraciones Especiales</h4>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h5 className="font-semibold text-yellow-800 mb-2">Fracturas Abiertas:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Control de hemorragia es prioritario</li>
                                                    <li>Irrigar con solución salina si disponible</li>
                                                    <li>Cubrir con apósito estéril húmedo</li>
                                                    <li>NO reintroducir hueso expuesto</li>
                                                    <li>Inmovilizar en posición encontrada</li>
                                                    <li>Profilaxis antitetánica en hospital</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-yellow-800 mb-2">Luxaciones:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>NO intentar reducir en campo</li>
                                                    <li>Inmovilizar en posición de comodidad</li>
                                                    <li>Evaluar frecuentemente compromiso neurovascular</li>
                                                    <li>Transporte urgente si hay compromiso vascular</li>
                                                    <li>Documentar posición y hallazgos CSM</li>
                                                    <li>Aplicar frío para reducir inflamación</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Errores comunes */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                        Errores Comunes y Cómo Evitarlos
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2">❌ Errores Frecuentes:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Olvidar evaluar CSM antes de inmovilizar</li>
                                                <li>Aplicar férulas demasiado apretadas</li>
                                                <li>No incluir articulaciones adyacentes</li>
                                                <li>Forzar realineación de deformidades</li>
                                                <li>No acolchar puntos de presión ósea</li>
                                                <li>Liberar estabilización manual prematuramente</li>
                                                <li>No reevaluar tras aplicar el dispositivo</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2">✅ Cómo Prevenir Errores:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Seguir protocolo sistemático (CSM-Inmovilizar-CSM)</li>
                                                <li>Verificar espacio de 1 dedo bajo sujeciones</li>
                                                <li>Usar referencias anatómicas para posicionamiento</li>
                                                <li>Preguntar al paciente sobre comodidad</li>
                                                <li>Inspeccionar todos los puntos de presión</li>
                                                <li>Designar persona responsable de estabilización</li>
                                                <li>Documentar hallazgos antes y después</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaHandsHelping className="w-6 h-6 mr-2 text-orange-500"/>
                                    Casos Clínicos Basados en Escenarios Reales
                                </h2>

                                {/* Caso 1 - Fractura abierta */}
                                <div className="p-6 bg-red-50 rounded-lg shadow-sm border border-red-200">
                                    <h3 className="text-xl font-semibold mb-3 text-red-600 flex items-center">
                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                        Caso 1: Fractura Abierta de Tibia - Accidente Motociclístico
                                    </h3>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <p className="italic text-gray-600 mb-3">
                                            <strong>Escenario:</strong> Motociclista de 28 años impacta contra automóvil a 60 km/h. 
                                            Se encuentra consciente, con dolor intenso en pierna derecha. Hay deformidad evidente 
                                            en tercio medio de tibia con exposición ósea de 3 cm y sangrado moderado activo.
                                        </p>
                                        <div className="grid lg:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-2 text-gray-800">📋 Evaluación Inicial:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li><strong>A:</strong> Vía aérea permeable, habla coherentemente</li>
                                                    <li><strong>B:</strong> FR 24/min, SpO₂ 98%, expansión simétrica</li>
                                                    <li><strong>C:</strong> FC 110/min, TA 120/85, pulso radial fuerte</li>
                                                    <li><strong>D:</strong> Alerta (GCS 15), dolor severo (8/10)</li>
                                                    <li><strong>E:</strong> Fractura abierta tibia Dx, sangrado 50ml/min</li>
                                                    <li><strong>CSM:</strong> Pulso pedío débil, parestesias en pie, no movimiento activo</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2 text-gray-800">🚨 Signos de Alerta:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                                                    <li>Sangrado activo con pérdida estimada 200ml</li>
                                                    <li>Pulso distal débil (compromiso vascular)</li>
                                                    <li>Parestesias (compromiso neurológico inicial)</li>
                                                    <li>Mecanismo de alta energía (politrauma)</li>
                                                    <li>Riesgo alto de síndrome compartimental</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4">
                                        <div className="bg-green-50 p-4 rounded border border-green-300">
                                            <h4 className="font-bold text-green-700 mb-2">✅ Manejo Correcto Secuencial:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li><strong>Control hemorrágico:</strong> Presión directa + apósito estéril</li>
                                                <li><strong>Analgesia:</strong> Fentanyl 2 μg/kg IV (protocolo local)</li>
                                                <li><strong>Irrigación:</strong> 500ml SSN estéril sobre herida</li>
                                                <li><strong>Cobertura:</strong> Gasa estéril húmeda, no secar</li>
                                                <li><strong>Evaluación CSM:</strong> Documentar antes de inmovilizar</li>
                                                <li><strong>Inmovilización:</strong> Férula de vacío incluyendo rodilla-tobillo</li>
                                                <li><strong>Elevación:</strong> 15° sobre nivel cardíaco</li>
                                                <li><strong>Reevaluación:</strong> CSM cada 15 min durante transporte</li>
                                                <li><strong>Traslado código rojo:</strong> Centro de trauma nivel I</li>
                                            </ol>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                                            <h4 className="font-bold text-yellow-700 mb-2">🎯 Puntos Clave de Aprendizaje:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li><strong>Prioridad 1:</strong> Control de sangrado antes que inmovilización</li>
                                                <li><strong>NO reintroducir</strong> hueso expuesto bajo ninguna circunstancia</li>
                                                <li><strong>Irrigación:</strong> Solo con SSN estéril, no agua del grifo</li>
                                                <li><strong>Tiempo crítico:</strong> En hospital &lt;60 min (golden hour)</li>
                                                <li><strong>Documentación:</strong> CSM seriado fundamental para cirugía</li>
                                                <li><strong>Comunicación:</strong> Alertar trauma team sobre compromiso vascular</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 2 - Trauma cervical */}
                                <div className="p-6 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center">
                                        <BsShield className="w-5 h-5 mr-2"/>
                                        Caso 2: Trauma Cervical - Clavado en Piscina
                                    </h3>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <p className="italic text-gray-600 mb-3">
                                            <strong>Escenario:</strong> Adolescente de 17 años se lanza de clavado en piscina poco profunda. 
                                            Los testigos refieren que flotó inmóvil hasta ser rescatado. Se encuentra consciente pero 
                                            con imposibilidad de mover extremidades y dolor cervical intenso.
                                        </p>
                                        <div className="grid lg:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-2 text-gray-800">📋 Evaluación Neurológica:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li><strong>A:</strong> Permeable, voz normal, no estridor</li>
                                                    <li><strong>B:</strong> Respiración diafragmática, FR 28/min</li>
                                                    <li><strong>C:</strong> Bradicardia 50/min, TA 90/60 (shock espinal)</li>
                                                    <li><strong>D:</strong> Consciente, cuadriplejia flácida C5</li>
                                                    <li><strong>E:</strong> Hipotermia 35°C, priapismo presente</li>
                                                    <li><strong>Sensibilidad:</strong> Ausente bajo nivel C5 bilateral</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2 text-gray-800">🔍 Hallazgos Críticos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-red-700">
                                                    <li>Cuadriplejia completa (lesión medular alta)</li>
                                                    <li>Respiración paradójica (parálisis intercostales)</li>
                                                    <li>Shock neurogénico (bradicardia + hipotensión)</li>
                                                    <li>Priapismo (signo de lesión medular completa)</li>
                                                    <li>Hipotermia por pérdida de termorregulación</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4">
                                        <div className="bg-red-50 p-4 rounded border border-red-300">
                                            <h4 className="font-bold text-red-700 mb-2">🚨 Manejo de Emergencia:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li><strong>Estabilización inmediata:</strong> Manual en línea, SIN tracción</li>
                                                <li><strong>Vía aérea:</strong> Preparar para intubación (compromiso respiratorio)</li>
                                                <li><strong>Oxigenación:</strong> VM con BVM si SpO₂ &lt;95%</li>
                                                <li><strong>Acceso vascular:</strong> 2 líneas IV calibre grueso</li>
                                                <li><strong>Collarín cervical:</strong> Talla exacta, sin comprimir</li>
                                                <li><strong>Log-roll:</strong> Mínimo 4 personas, líder en cabeza</li>
                                                <li><strong>Inmovilización completa:</strong> Tabla + sujeciones + bloques laterales</li>
                                                <li><strong>Monitorización:</strong> ECG, TA, SpO₂, EtCO₂ continua</li>
                                                <li><strong>Temperatura:</strong> Mantas térmicas, calentamiento activo</li>
                                            </ol>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded border border-purple-300">
                                            <h4 className="font-bold text-purple-700 mb-2">🧠 Conceptos Neurofisiológicos:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li><strong>Shock espinal:</strong> Pérdida temporal función por edema</li>
                                                <li><strong>Lesión primaria:</strong> Daño mecánico inicial irreversible</li>
                                                <li><strong>Lesión secundaria:</strong> Hipoxia, hipotensión (PREVENIBLE)</li>
                                                <li><strong>Ventana terapéutica:</strong> 8 horas para neuroprotección</li>
                                                <li><strong>Metilprednisolona:</strong> Ya no recomendada (evidencia negativa)</li>
                                                <li><strong>Hipotensión permisiva:</strong> NO en trauma espinal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 3 - Fractura de fémur */}
                                <div className="p-6 bg-green-50 rounded-lg shadow-sm border border-green-200">
                                    <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center">
                                        <FaBone className="w-5 h-5 mr-2"/>
                                        Caso 3: Fractura de Fémur - Caída de Altura
                                    </h3>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <p className="italic text-gray-600 mb-3">
                                            <strong>Escenario:</strong> Trabajador de construcción de 45 años cae desde 4 metros de altura. 
                                            Impacta de pie, presenta dolor severo en muslo izquierdo con deformidad, acortamiento 
                                            y rotación externa. Paciente ansioso, diaforético, con signos de shock compensado.
                                        </p>
                                        <div className="grid lg:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-2 text-gray-800">📊 Signos Vitales Seriados:</h4>
                                                <div className="text-sm text-gray-700">
                                                    <p><strong>Inicial:</strong> FC 125, TA 100/70, FR 28, SpO₂ 94%</p>
                                                    <p><strong>5 min:</strong> FC 135, TA 95/65, FR 32, SpO₂ 92%</p>
                                                    <p><strong>10 min:</strong> FC 145, TA 90/60, FR 36, SpO₂ 90%</p>
                                                </div>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                                                    <li><strong>Deformidad:</strong> Acortamiento 4 cm, rotación externa 45°</li>
                                                    <li><strong>CSM inicial:</strong> Pulso pedío débil, sensibilidad disminuida</li>
                                                    <li><strong>Pérdida estimada:</strong> 1000-1500 ml (fractura cerrada fémur)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2 text-gray-800">⚡ Decisiones Críticas:</h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="p-2 bg-yellow-100 rounded">
                                                        <p><strong>Dilema:</strong> ¿Férula de tracción vs. transporte inmediato?</p>
                                                    </div>
                                                    <div className="p-2 bg-green-100 rounded">
                                                        <p><strong>Decisión:</strong> Férula de tracción ANTES del transporte</p>
                                                        <p className="text-xs">Reduce sangrado 40% y dolor significativamente</p>
                                                    </div>
                                                    <div className="p-2 bg-blue-100 rounded">
                                                        <p><strong>Contraindicaciones verificadas:</strong></p>
                                                        <p className="text-xs">✓ No fractura de cadera ✓ No fractura de rodilla ✓ No herida abierta</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid lg:grid-cols-2 gap-4">
                                        <div className="bg-blue-50 p-4 rounded border border-blue-300">
                                            <h4 className="font-bold text-blue-700 mb-2">🔧 Aplicación de Férula de Tracción:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li><strong>Medición:</strong> Desde axila hasta 10 cm post maléolo (extremidad sana)</li>
                                                <li><strong>Analgesia previa:</strong> Morfina 0.1 mg/kg IV lenta</li>
                                                <li><strong>Posicionamiento:</strong> Férula Hare en lado lateral de extremidad</li>
                                                <li><strong>Acolchamiento:</strong> Tuberosidad isquiática y maléolo lateral</li>
                                                <li><strong>Correa pélvica:</strong> Sobre ropa, snug fit sin comprimir</li>
                                                <li><strong>Tracción manual:</strong> 10% peso corporal, alineación gradual</li>
                                                <li><strong>Fijación mecánica:</strong> Ajuste hasta alivio del dolor (7→3/10)</li>
                                                <li><strong>Sujeción:</strong> Correas cada 15 cm, verificar CSM</li>
                                                <li><strong>Resultado:</strong> FC↓ 145→110, TA↑ 90→105/65</li>
                                            </ol>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded border border-orange-300">
                                            <h4 className="font-bold text-orange-700 mb-2">📚 Fisiopatología de la Fractura de Fémur:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li><strong>Sangrado:</strong> 1000-2000 ml en espacio muscular</li>
                                                <li><strong>Espasmo muscular:</strong> Cuádriceps, isquiotibiales, aductores</li>
                                                <li><strong>Acortamiento:</strong> Superposición de fragmentos óseos</li>
                                                <li><strong>Rotación:</strong> Pérdida de estabilidad mecánica</li>
                                                <li><strong>Tracción terapéutica:</strong> Reduce espasmo → ↓sangrado</li>
                                                <li><strong>Beneficio hemodinámico:</strong> 30-40% menos pérdida sanguínea</li>
                                                <li><strong>Evidencia:</strong> Estudios muestran ↓mortalidad con tracción precoz</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Simulación interactiva */}
                                <div className="p-6 bg-purple-50 rounded-lg shadow-sm border border-purple-200">
                                    <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center">
                                        <BsLightbulb className="w-5 h-5 mr-2"/>
                                        Ejercicio de Simulación: Toma de Decisiones Críticas
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-medium mb-2">🎯 Escenario de Entrenamiento:</h4>
                                            <p className="text-sm text-gray-700 mb-3">
                                                Accidente vehicular múltiple. Tienes 3 pacientes con trauma ortopédico. 
                                                Recursos limitados: 2 paramédicos, 1 férula de tracción, 2 férulas de vacío.
                                            </p>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="p-3 bg-red-100 rounded border border-red-300">
                                                    <h5 className="font-semibold text-red-700">Paciente A</h5>
                                                    <p className="text-xs">Fx fémur bilateral<br/>FC 140, TA 80/50<br/>Inconsciente</p>
                                                </div>
                                                <div className="p-3 bg-yellow-100 rounded border border-yellow-300">
                                                    <h5 className="font-semibold text-yellow-700">Paciente B</h5>
                                                    <p className="text-xs">Fx antebrazo abierta<br/>FC 90, TA 120/80<br/>Consciente, dolor 9/10</p>
                                                </div>
                                                <div className="p-3 bg-green-100 rounded border border-green-300">
                                                    <h5 className="font-semibold text-green-700">Paciente C</h5>
                                                    <p className="text-xs">Fx tibial cerrada<br/>FC 100, TA 110/70<br/>Consciente, dolor 6/10</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h4 className="font-medium mb-2">🤔 Preguntas para Reflexión:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li>¿Cuál es tu orden de priorización según el protocolo ABC?</li>
                                                <li>¿Cómo distribuyes los recursos de inmovilización?</li>
                                                <li>¿Qué paciente requiere transporte más urgente?</li>
                                                <li>¿Cuándo estarías dispuesto a retrasar el transporte para inmovilizar?</li>
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
                            pagina="immobilization" 
                            titulo="Foro de Discusión - Immobilization"
                        />

                        

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                    <li>American Academy of Orthopaedic Surgeons. (2022). <em>Manejo de fracturas en entorno prehospitalario</em>.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.jems.com/patient-care/how-to-use-traction-splints/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Uso de férulas de tracción</a></li>
                                    <li><a href="https://www.ems1.com/ems-products/ambulance-disposable-supplies/articles/immobilization-device-for-spinal-injuries-aGcHE5GHYj2TmzLZ/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Dispositivos para lesiones espinales</a></li>
                                    <li><a href="https://www.youtube.com/c/EMTprep" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMT Prep - Canal de YouTube con técnicas de inmovilización</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Complete Anatomy - Visualización 3D de lesiones óseas</li>
                                    <li>EMT Review Plus - Protocolos de inmovilización</li>
                                    <li>Traumapedia - Referencias sobre manejo de trauma</li>
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

