import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ObstreticCare.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdCheckCircle, MdOutlineTimer, MdQuiz, MdWarning} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiBabyBold, PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaFirstAid, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {FiActivity, FiAlertTriangle, FiCheckCircle, FiEye, FiHeart, FiX} from "react-icons/fi";
import {HiOutlineClipboardCheck, HiOutlineClipboardList} from "react-icons/hi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function ObstreticCare() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Cuidados Obstétricos y Neonatales EMT | Parto de Emergencia y Reanimación Neonatal"
            description="Guía completa sobre cuidados obstétricos y neonatales para paramédicos EMT: evaluación obstétrica, parto de emergencia, reanimación neonatal, complicaciones y casos clínicos prácticos."
            keywords="cuidados obstétricos, neonatales, EMT, parto de emergencia, reanimación neonatal, placenta previa, eclampsia, APGAR, paramédicos, emergencias obstétricas"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
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
                                <PiBabyBold className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Cuidados Obstétricos y neonatales</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to={`${AllRoutes.OBSTETRIC_CARE}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1lwFtdw_vrblfCEgu8w23Yxoij3DmK3Jm/view?usp=drive_link"
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
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition flex items-center gap-2 ${
                                        activeTab === 'overview'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    <BsShield className="w-4 h-4"/>
                                    Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('anatomy')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition flex items-center gap-2 ${
                                        activeTab === 'anatomy'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    <HiOutlineClipboardList className="w-4 h-4"/>
                                    Evaluación y Complicaciones
                                </button>
                                <button
                                    onClick={() => setActiveTab('treatment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition flex items-center gap-2 ${
                                        activeTab === 'treatment'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    <FaFirstAid className="w-4 h-4"/>
                                    Parto y Cuidados Neonatales
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition flex items-center gap-2 ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    <BsLightbulb className="w-4 h-4"/>
                                    Casos Clínicos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-8">
                                    {/* Importancia crítica */}
                                    <div
                                        className="bg-gradient-to-r from-pink-50 to-orange-50 border-l-4 border-pink-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-pink-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-pink-700">¡Emergencia
                                                Obstétrica!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            Las emergencias obstétricas requieren <strong>acción rápida y
                                            coordinada</strong>.
                                            El tiempo es crítico tanto para la madre como para el bebé.
                                        </p>
                                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <FaHeartbeat className="w-8 h-8 text-pink-500 mb-2"/>
                                                <p className="font-bold text-pink-600">Bienestar Materno</p>
                                                <p className="text-sm">Prevenir shock hemorrágico</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <PiBabyBold className="w-8 h-8 text-blue-500 mb-2"/>
                                                <p className="font-bold text-blue-600">Bienestar Fetal</p>
                                                <p className="text-sm">Oxigenación adecuada</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evaluación obstétrica rápida */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Evaluación Obstétrica Rápida - OPQRST Modificado
                                        </h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-blue-700 mb-2">O - Onset</h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• ¿Cuándo comenzaron las contracciones?</li>
                                                    <li>• ¿Cuándo fue su última menstruación?</li>
                                                    <li>• ¿Cuántas semanas de embarazo?</li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-green-700 mb-2">P -
                                                    Provocación</h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• ¿Qué mejora/empeora el dolor?</li>
                                                    <li>• ¿Ruptura de membranas?</li>
                                                    <li>• ¿Sangrado vaginal?</li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-purple-700 mb-2">Q - Calidad</h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• ¿Cómo son las contracciones?</li>
                                                    <li>• ¿Dolor constante o intermitente?</li>
                                                    <li>• ¿Siente ganas de pujar?</li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-red-700 mb-2">R - Región</h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• ¿Dónde siente el dolor?</li>
                                                    <li>• ¿Se irradia a la espalda?</li>
                                                    <li>• ¿Dolor abdominal?</li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-yellow-700 mb-2">S -
                                                    Severidad</h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Escala del dolor 1-10</li>
                                                    <li>• ¿Puede caminar/hablar?</li>
                                                    <li>• ¿Intensidad creciente?</li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-orange-50 to-orange-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-orange-700 mb-2">T - Tiempo</h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Frecuencia de contracciones</li>
                                                    <li>• Duración de cada contracción</li>
                                                    <li>• ¿Patrón regular?</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Historia obstétrica GPAC */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                            <HiOutlineClipboardList className="w-6 h-6 mr-2"/>
                                            Historia Obstétrica - GPAC
                                        </h3>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-blue-700">G - Gestaciones</h4>
                                                <p className="text-sm text-gray-600">Número total de embarazos</p>
                                                <p className="text-xs text-gray-500">Incluye actual</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-green-700">P - Partos</h4>
                                                <p className="text-sm text-gray-600">Embarazos ≥20 semanas</p>
                                                <p className="text-xs text-gray-500">Vivos o muertos</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-yellow-700">A - Abortos</h4>
                                                <p className="text-sm text-gray-600">Pérdidas &lt;20 semanas</p>
                                                <p className="text-xs text-gray-500">Espontáneos o inducidos</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-red-700">C - Cesáreas</h4>
                                                <p className="text-sm text-gray-600">Partos quirúrgicos</p>
                                                <p className="text-xs text-gray-500">Indica factores de riesgo</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de parto inminente */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">🚨 Signos de Parto
                                                Inminente</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Signos
                                                    Objetivos:</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span className="text-gray-700"><strong>Coronamiento:</strong> Cabeza visible en introito</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span className="text-gray-700"><strong>Contracciones:</strong> Cada 2-3 min, 45-60 seg</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span
                                                            className="text-gray-700"><strong>Ruptura de membranas:</strong> Líquido amniótico</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Signos
                                                    Subjetivos:</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span
                                                            className="text-gray-700"><strong>Urgencia de pujar:</strong> Sensación irresistible</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span
                                                            className="text-gray-700"><strong>Sensación rectal:</strong> "Ganas de evacuar"</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span className="text-gray-700"><strong>Multípara:</strong> Partos rápidos previos</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos clave para recordar */}
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
                                                    <li>Evaluar signos vitales maternos</li>
                                                    <li>Obtener historia obstétrica (GPAC)</li>
                                                    <li>Evaluar inminencia del parto</li>
                                                    <li>Preparar equipo obstétrico</li>
                                                    <li>Establecer acceso IV</li>
                                                    <li>Administrar oxígeno si necesario</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Examinar vagina si hay sangrado</li>
                                                    <li>Forzar o acelerar el parto</li>
                                                    <li>Tirar del bebé o cordón</li>
                                                    <li>Retrasar transporte si necesario</li>
                                                    <li>Separar al bebé innecesariamente</li>
                                                    <li>Dar medicamentos sin indicación</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'anatomy' && (
                                <div className="space-y-8">
                                    {/* Evaluación sistemática */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <HiOutlineClipboardCheck className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-blue-700">Evaluación Sistemática de
                                                la Paciente Obstétrica</h2>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h3 className="font-medium text-lg mb-3 text-blue-700">Evaluación
                                                    Primaria</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>A:</strong> Vía aérea permeable</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>B:</strong> Respiración adecuada</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>C:</strong> Circulación y pulso</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>D:</strong> Estado neurológico</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span><strong>E:</strong> Exposición controlada</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h3 className="font-medium text-lg mb-3 text-green-700">Evaluación
                                                    Obstétrica</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <PiBabyBold className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Historia GPAC</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Edad gestacional</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Patrón de contracciones</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Sangrado vaginal</strong></span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Ruptura de membranas</strong></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Complicaciones obstétricas críticas */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Complicaciones
                                            Obstétricas Críticas</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                                                <h3 className="font-bold text-xl mb-3 text-red-700 flex items-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    Placenta Previa
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-red-600 mb-1">Signos
                                                            Clínicos:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Sangrado rojo brillante</li>
                                                            <li>• SIN dolor abdominal</li>
                                                            <li>• Tercer trimestre</li>
                                                            <li>• Puede ser masivo</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-red-600 mb-1">Manejo:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• <strong>NO</strong> examen vaginal</li>
                                                            <li>• IV de gran calibre</li>
                                                            <li>• Transporte inmediato</li>
                                                            <li>• Preparar para cesárea</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                                                <h3 className="font-bold text-xl mb-3 text-purple-700 flex items-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    Desprendimiento de Placenta
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-purple-600 mb-1">Signos
                                                            Clínicos:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Sangrado rojo oscuro</li>
                                                            <li>• <strong>CON</strong> dolor severo</li>
                                                            <li>• Útero rígido, hipersensible</li>
                                                            <li>• Contracciones tetánicas</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-purple-600 mb-1">Manejo:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Posición lateral izquierda</li>
                                                            <li>• Oxígeno alto flujo</li>
                                                            <li>• Dos IVs gran calibre</li>
                                                            <li>• Transporte emergente</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                                                <h3 className="font-bold text-xl mb-3 text-yellow-700 flex items-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    Preeclampsia / Eclampsia
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-yellow-600 mb-1">Signos
                                                            Clínicos:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• PA ≥140/90 mmHg</li>
                                                            <li>• Cefalea intensa</li>
                                                            <li>• Visión borrosa</li>
                                                            <li>• Dolor epigástrico</li>
                                                            <li>• Edema facial/manos</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-yellow-600 mb-1">Manejo:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Control frecuente PA</li>
                                                            <li>• Ambiente tranquilo</li>
                                                            <li>• Preparar anticonvulsivos</li>
                                                            <li>• Posición lateral izquierda</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                                                <h3 className="font-bold text-xl mb-3 text-orange-700 flex items-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    Prolapso de Cordón
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-orange-600 mb-1">Signos
                                                            Clínicos:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Cordón visible en vagina</li>
                                                            <li>• Después ruptura membranas</li>
                                                            <li>• Sufrimiento fetal agudo</li>
                                                            <li>• Cambios en FC fetal</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-orange-600 mb-1">Manejo:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Posición genupectoral</li>
                                                            <li>• Elevar presentación fetal</li>
                                                            <li>• Oxígeno alto flujo</li>
                                                            <li>• Transporte CODE 3</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabla de signos de alarma */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tabla de
                                            Signos de Alarma</h2>
                                        <div className="overflow-x-auto bg-white rounded-lg shadow">
                                            <table className="min-w-full">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sistema</th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Signo
                                                        Normal
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Signo
                                                        de Alarma
                                                    </th>
                                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acción
                                                        Inmediata
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Cardiovascular</td>
                                                    <td className="px-6 py-4 text-sm text-gray-700">FC: 60-100,
                                                        PA: &lt;140/90
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-red-600">Taquicardia,
                                                        hipotensión, PA ≥140/90
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue-600">IV, monitorización,
                                                        posición lateral
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Respiratorio</td>
                                                    <td className="px-6 py-4 text-sm text-gray-700">FR: 12-20, SatO₂
                                                        ≥95%
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-red-600">Disnea, taquipnea,
                                                        SatO₂ &lt;95%
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue-600">Oxígeno, posición
                                                        semi-Fowler
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Neurológico</td>
                                                    <td className="px-6 py-4 text-sm text-gray-700">Alerta, orientada
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-red-600">Confusión,
                                                        convulsiones, cefalea
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue-600">Ambiente tranquilo,
                                                        anticonvulsivos
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Obstétrico</td>
                                                    <td className="px-6 py-4 text-sm text-gray-700">Sin sangrado,
                                                        contracciones regulares
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-red-600">Sangrado abundante,
                                                        dolor severo
                                                    </td>
                                                    <td className="px-6 py-4 text-sm text-blue-600">Control sangrado,
                                                        transporte urgente
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Factores de riesgo */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-lg mb-3 text-gray-800">Factores de Riesgo
                                                Materno</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-gray-700">Demográficos:</h4>
                                                    <ul className="text-sm text-gray-600 ml-4">
                                                        <li>• Edad &lt;18 o &gt;35 años</li>
                                                        <li>• Bajo nivel socioeconómico</li>
                                                        <li>• Falta de control prenatal</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-700">Médicos:</h4>
                                                    <ul className="text-sm text-gray-600 ml-4">
                                                        <li>• Diabetes mellitus</li>
                                                        <li>• Hipertensión crónica</li>
                                                        <li>• Enfermedad cardíaca</li>
                                                        <li>• Anemia severa</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-700">Obstétricos:</h4>
                                                    <ul className="text-sm text-gray-600 ml-4">
                                                        <li>• Cesáreas previas</li>
                                                        <li>• Abortos recurrentes</li>
                                                        <li>• Partos prematuros</li>
                                                        <li>• Muerte fetal previa</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-lg mb-3 text-gray-800">Factores de Riesgo
                                                Fetal</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-medium text-gray-700">Crecimiento:</h4>
                                                    <ul className="text-sm text-gray-600 ml-4">
                                                        <li>• Macrosomía fetal (&gt;4000g)</li>
                                                        <li>• Restricción crecimiento</li>
                                                        <li>• Embarazo múltiple</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-700">Presentación:</h4>
                                                    <ul className="text-sm text-gray-600 ml-4">
                                                        <li>• Presentación pélvica</li>
                                                        <li>• Presentación transversa</li>
                                                        <li>• Situación oblicua</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-gray-700">Líquido amniótico:</h4>
                                                    <ul className="text-sm text-gray-600 ml-4">
                                                        <li>• Oligohidramnios</li>
                                                        <li>• Polihidramnios</li>
                                                        <li>• Líquido teñido meconio</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'treatment' && (
                                <div className="space-y-8">
                                    {/* Preparación para parto */}
                                    <div
                                        className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaFirstAid className="w-8 h-8 text-green-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-green-700">Preparación para Parto de
                                                Emergencia</h2>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h3 className="font-bold text-lg mb-3 text-green-700">Kit Obstétrico
                                                    Esencial</h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Sábanas/toallas estériles</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span
                                                            className="text-sm">Guantes estériles (varios pares)</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Clamps para cordón umbilical</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Tijeras estériles</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Jeringa de perilla (succión)</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Mantas/toallas secas</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Bolsa para placenta</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span className="text-sm">Equipo de reanimación neonatal</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h3 className="font-bold text-lg mb-3 text-blue-700">Preparación del
                                                    Ambiente</h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Área privada y cálida</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Buena iluminación</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Superficie firme y limpia</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Acceso para personal médico</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Oxígeno y equipo IV disponible</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Comunicación con hospital</span>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span className="text-sm">Apoyo emocional para la madre</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Procedimiento de parto paso a paso */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Procedimiento
                                            de Parto Normal - Paso a Paso</h2>
                                        <div className="space-y-6">
                                            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                                                <h3 className="font-bold text-xl mb-3 text-blue-700 flex items-center">
                                                    <span
                                                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                                                    Preparación Inicial
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-medium text-blue-600 mb-2">Evaluación
                                                            rápida:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Confirmar inminencia del parto</li>
                                                            <li>• Verificar signos vitales maternos</li>
                                                            <li>• Evaluar historia obstétrica</li>
                                                            <li>• Solicitar apoyo médico adicional</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-blue-600 mb-2">Preparación:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Lavado de manos y EPP</li>
                                                            <li>• Preparar kit obstétrico</li>
                                                            <li>• Posicionar a la paciente</li>
                                                            <li>• Establecer acceso IV</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                                                <h3 className="font-bold text-xl mb-3 text-green-700 flex items-center">
                                                    <span
                                                        className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                                                    Nacimiento de la Cabeza
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-medium text-green-600 mb-2">Técnica:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• <strong>NO tirar</strong> nunca de la cabeza</li>
                                                            <li>• Apoyar suavemente mientras emerge</li>
                                                            <li>• Permitir restitución natural</li>
                                                            <li>• Controlar velocidad de salida</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-green-600 mb-2">Verificar:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Cordón alrededor del cuello</li>
                                                            <li>• Si hay cordón: pasar sobre cabeza</li>
                                                            <li>• Si no se puede: clampear y cortar</li>
                                                            <li>• Succionar boca, luego nariz</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-4 p-3 bg-white rounded border border-green-200">
                                                    <p className="text-sm text-green-800">
                                                        <strong>Recuerda:</strong> La cabeza rotará naturalmente
                                                        (restitución). No fuerces este movimiento.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                                                <h3 className="font-bold text-xl mb-3 text-orange-700 flex items-center">
                                                    <span
                                                        className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                                                    Nacimiento del Cuerpo
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-medium text-orange-600 mb-2">Hombros:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Sostener cabeza y cuello firmemente</li>
                                                            <li>• Presión suave hacia abajo (hombro anterior)</li>
                                                            <li>• Presión suave hacia arriba (hombro posterior)</li>
                                                            <li>• No aplicar fuerza excesiva</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium text-orange-600 mb-2">Cuerpo:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• El resto del cuerpo saldrá rápidamente</li>
                                                            <li>• <strong>¡El bebé estará resbaloso!</strong></li>
                                                            <li>• Sostener firmemente pero gentil</li>
                                                            <li>• Mantener al nivel de la vagina</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-4 p-3 bg-white rounded border border-orange-200">
                                                    <p className="text-sm text-orange-800">
                                                        <strong>Importante:</strong> Una vez que salen los hombros, el
                                                        bebé puede salir rápidamente. ¡Estate preparado!
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Cuidados inmediatos del recién nacido */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Cuidados
                                            Inmediatos del Recién Nacido</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                                                <h3 className="font-bold text-lg mb-3 text-yellow-700">Pasos Iniciales
                                                    (30 segundos)</h3>
                                                <ol className="space-y-2 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">1</span>
                                                        <span><strong>Secar vigorosamente:</strong> Usa toalla seca, frota espalda y extremidades</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">2</span>
                                                        <span><strong>Mantener caliente:</strong> Piel con piel, cubrir con manta seca</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">3</span>
                                                        <span><strong>Posicionar:</strong> Cabeza en posición neutral, cuello ligeramente extendido</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">4</span>
                                                        <span><strong>Succionar:</strong> Solo si hay secreciones visibles (boca primero, luego nariz)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">5</span>
                                                        <span><strong>Estimular:</strong> Frotar plantas de los pies o espalda</span>
                                                    </li>
                                                </ol>
                                            </div>

                                            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                                                <h3 className="font-bold text-lg mb-3 text-purple-700">Evaluación
                                                    APGAR</h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-purple-600 mb-1">Parámetros
                                                            (0-1-2 puntos):</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• <strong>A</strong>pariencia: Azul/rosado
                                                                extremidades/completamente rosado
                                                            </li>
                                                            <li>• <strong>P</strong>ulso: Ausente/&lt;100/&gt;100 lpm
                                                            </li>
                                                            <li>• <strong>G</strong>esticulación: Sin
                                                                respuesta/mueca/llanto
                                                            </li>
                                                            <li>• <strong>A</strong>ctividad: Flácido/algo
                                                                flexión/activo
                                                            </li>
                                                            <li>• <strong>R</strong>espiración: Ausente/irregular/llanto
                                                                fuerte
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-medium text-purple-600 mb-1">Interpretación:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• <strong>7-10:</strong> Normal</li>
                                                            <li>• <strong>4-6:</strong> Depresión moderada</li>
                                                            <li>• <strong>0-3:</strong> Depresión severa</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Algoritmo de reanimación neonatal */}
                                    <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                                        <h3 className="font-bold text-xl mb-4 text-red-700 flex items-center">
                                            <FaLungsVirus className="w-6 h-6 mr-2"/>
                                            Algoritmo de Reanimación Neonatal
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-medium text-red-600 mb-2">Evaluación inicial (30
                                                    segundos):</h4>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div className="text-center">
                                                        <div className="bg-green-100 p-3 rounded mb-2">
                                                            <FiCheckCircle className="w-6 h-6 text-green-600 mx-auto"/>
                                                        </div>
                                                        <p className="text-sm font-medium">Respiración presente</p>
                                                        <p className="text-sm">FC &gt; 100</p>
                                                        <p className="text-sm">Rosado</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="bg-yellow-100 p-3 rounded mb-2">
                                                            <MdWarning className="w-6 h-6 text-yellow-600 mx-auto"/>
                                                        </div>
                                                        <p className="text-sm font-medium">Respiración irregular</p>
                                                        <p className="text-sm">FC &lt; 100</p>
                                                        <p className="text-sm">Cianosis</p>
                                                    </div>
                                                    <div className="text-center">
                                                        <div className="bg-red-100 p-3 rounded mb-2">
                                                            <FiX className="w-6 h-6 text-red-600 mx-auto"/>
                                                        </div>
                                                        <p className="text-sm font-medium">Sin respiración</p>
                                                        <p className="text-sm">FC &lt; 60</p>
                                                        <p className="text-sm">Azul/pálido</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-medium text-red-600 mb-2">Acciones por
                                                    condición:</h4>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div className="bg-green-50 p-3 rounded">
                                                        <h5 className="font-medium text-green-700 mb-1">Bebé
                                                            Normal:</h5>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Mantener caliente</li>
                                                            <li>• Piel con piel</li>
                                                            <li>• Observar respiración</li>
                                                            <li>• Clampear cordón</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-yellow-50 p-3 rounded">
                                                        <h5 className="font-medium text-yellow-700 mb-1">Depresión
                                                            Moderada:</h5>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Estimular más</li>
                                                            <li>• Succionar si necesario</li>
                                                            <li>• Oxígeno libre</li>
                                                            <li>• Reevaluar en 30 seg</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-red-50 p-3 rounded">
                                                        <h5 className="font-medium text-red-700 mb-1">Depresión
                                                            Severa:</h5>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• VPP inmediata</li>
                                                            <li>• 40-60 ventilaciones/min</li>
                                                            <li>• Si FC &lt; 60: RCP</li>
                                                            <li>• Ratio 3:1</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo del cordón y placenta */}
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-lg mb-3 text-gray-800">Manejo del Cordón
                                                Umbilical</h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-gray-700 mb-1">Timing:</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Esperar 1-3 minutos si bebé está bien</li>
                                                        <li>• Clampear inmediatamente si depresión severa</li>
                                                        <li>• Permitir transfusión placentaria</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-gray-700 mb-1">Técnica:</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Primer clamp a 15 cm del bebé</li>
                                                        <li>• Segundo clamp a 5 cm del primero</li>
                                                        <li>• Cortar entre los dos clamps</li>
                                                        <li>• Verificar hemostasia</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-lg mb-3 text-gray-800">Alumbramiento</h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-gray-700 mb-1">Signos de
                                                        separación:</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Sangrado vaginal</li>
                                                        <li>• Alargamiento del cordón</li>
                                                        <li>• Útero se eleva y globuliza</li>
                                                        <li>• Contracciones uterinas</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-gray-700 mb-1">Manejo:</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• <strong>NO</strong> tirar del cordón</li>
                                                        <li>• Masaje uterino suave</li>
                                                        <li>• Guardar placenta completa</li>
                                                        <li>• Evaluar sangrado</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Complicaciones del parto */}
                                    <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                                        <h3 className="font-bold text-xl mb-4 text-orange-700">🚨 Complicaciones Durante
                                            el Parto</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-medium text-orange-600 mb-2">Presentación
                                                    pélvica:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• NO tirar del bebé</li>
                                                    <li>• Permitir nacimiento espontáneo</li>
                                                    <li>• Apoyar cuerpo conforme emerge</li>
                                                    <li>• Cuidado con la cabeza (última)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-medium text-orange-600 mb-2">Hemorragia
                                                    postparto:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Masaje uterino bimanual</li>
                                                    <li>• Compresas en periné</li>
                                                    <li>• IV de gran calibre</li>
                                                    <li>• Transporte inmediato</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-medium text-orange-600 mb-2">Prolapso de
                                                    cordón:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Posición genupectoral</li>
                                                    <li>• Elevar presentación fetal</li>
                                                    <li>• Oxígeno materno alto flujo</li>
                                                    <li>• Transporte emergente</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-medium text-orange-600 mb-2">Bebé sin
                                                    respiración:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Secar y estimular vigorosamente</li>
                                                    <li>• Posicionar vía aérea</li>
                                                    <li>• VPP si no mejora</li>
                                                    <li>• RCP si FC &lt; 60</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'practice' && (
                                <div className="space-y-8">
                                    <div
                                        className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-500 p-6 rounded-lg">
                                        <h2 className="text-2xl font-bold text-indigo-700 mb-2">Casos Clínicos para
                                            Análisis</h2>
                                        <p className="text-gray-700">
                                            Practica tu toma de decisiones con estos casos clínicos reales. Cada caso
                                            incluye evaluación paso a paso y justificación de las acciones.
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
                                                <h3 className="text-xl font-bold text-orange-600">Caso: Parto
                                                    Precipitado</h3>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                                                <p className="text-gray-700 italic">
                                                    Mujer de 28 años, G3P2, embarazo de 38 semanas. Llama al 911
                                                    refiriendo contracciones intensas cada 2 minutos desde hace 1 hora.
                                                    Al llegar, observas coronamiento de la cabeza del bebé. La paciente
                                                    refiere: "¡Ya viene, ya viene!"
                                                    Sus partos anteriores fueron rápidos (2 y 3 horas respectivamente).
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                                        <HiOutlineClipboardList className="w-5 h-5 mr-2"/>
                                                        Evaluación Inicial:
                                                    </h4>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• <strong>A:</strong> Vía aérea permeable, grita con
                                                            contracciones
                                                        </li>
                                                        <li>• <strong>B:</strong> FR 22/min, respiración adecuada</li>
                                                        <li>• <strong>C:</strong> FC 95/min, TA 125/80 mmHg, piel rosada
                                                        </li>
                                                        <li>• <strong>D:</strong> Alerta, ansiosa pero cooperativa</li>
                                                        <li>• <strong>E:</strong> Contracciones c/2 min, coronamiento
                                                            visible
                                                        </li>
                                                        <li>• <strong>Historia:</strong> G3P2, partos rápidos previos
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-green-700 mb-2 flex items-center">
                                                        <FaFirstAid className="w-5 h-5 mr-2"/>
                                                        Manejo Correcto:
                                                    </h4>
                                                    <ol className="space-y-1 text-sm text-gray-700">
                                                        <li>1. <strong>Preparar kit obstétrico</strong> inmediatamente
                                                        </li>
                                                        <li>2. <strong>Posicionar</strong> a la paciente semi-sentada
                                                        </li>
                                                        <li>3. <strong>EPP completo</strong> y preparar área estéril
                                                        </li>
                                                        <li>4. <strong>NO tirar</strong> de la cabeza, solo apoyar</li>
                                                        <li>5. <strong>Verificar cordón</strong> alrededor del cuello
                                                        </li>
                                                        <li>6. <strong>Asistir nacimiento</strong> de hombros y cuerpo
                                                        </li>
                                                        <li>7. <strong>Secar y estimular</strong> al bebé inmediatamente
                                                        </li>
                                                        <li>8. <strong>Clampear cordón</strong> después de 1-3 minutos
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                                <h4 className="font-bold text-yellow-700 mb-2">Puntos Clave de
                                                    Aprendizaje:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Multiparidad:</strong> Los partos subsecuentes tienden
                                                        a ser más rápidos
                                                    </li>
                                                    <li>• <strong>Coronamiento:</strong> Signo inequívoco de parto
                                                        inminente
                                                    </li>
                                                    <li>• <strong>Preparación rápida:</strong> Tener kit obstétrico
                                                        siempre listo
                                                    </li>
                                                    <li>• <strong>Tranquilidad:</strong> Mantener calma transmite
                                                        confianza a la paciente
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
                                                <h3 className="text-xl font-bold text-red-600">Caso: Hemorragia
                                                    Postparto</h3>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                                                <p className="text-gray-700 italic">
                                                    Mujer de 32 años que tuvo un parto vaginal exitoso hace 20 minutos.
                                                    La placenta fue expulsada aparentemente completa,
                                                    pero ahora presenta sangrado vaginal abundante, empapando múltiples
                                                    toallas sanitarias.
                                                    La paciente se queja de mareo y náuseas. El útero se palpa blando y
                                                    no se contrae adecuadamente.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                                        <FiEye className="w-5 h-5 mr-2"/>
                                                        Evaluación Inicial:
                                                    </h4>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• <strong>A:</strong> Vía aérea permeable</li>
                                                        <li>• <strong>B:</strong> FR 24/min, respiración adecuada</li>
                                                        <li>• <strong>C:</strong> FC 115/min, TA 100/60 mmHg, palidez
                                                        </li>
                                                        <li>• <strong>D:</strong> Alerta pero débil, ligera confusión
                                                        </li>
                                                        <li>• <strong>E:</strong> Sangrado vaginal abundante, útero
                                                            blando
                                                        </li>
                                                        <li>• <strong>Estimación:</strong> Pérdida sanguínea &gt; 500 ml
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                        Manejo Urgente:
                                                    </h4>
                                                    <ol className="space-y-1 text-sm text-gray-700">
                                                        <li>1. <strong>Masaje uterino vigoroso</strong> para promover
                                                            contracción
                                                        </li>
                                                        <li>2. <strong>Acceso IV doble</strong> con catéter grande
                                                            (14G-16G)
                                                        </li>
                                                        <li>3. <strong>Solución salina isotónica</strong> para
                                                            reposición
                                                        </li>
                                                        <li>4. <strong>Oxígeno suplementario</strong> alto flujo</li>
                                                        <li>5. <strong>Posición Trendelenburg</strong> si hipotensión
                                                        </li>
                                                        <li>6. <strong>Compresas perineales</strong> para tamponar</li>
                                                        <li>7. <strong>Transporte inmediato</strong> con notificación
                                                        </li>
                                                        <li>8. <strong>Monitorización</strong> continua de signos
                                                            vitales
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                                                <h4 className="font-bold text-red-700 mb-2">Puntos Críticos:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Reconocimiento temprano:</strong> HPP es causa
                                                        principal de muerte materna
                                                    </li>
                                                    <li>• <strong>Atonía uterina:</strong> Causa más común de hemorragia
                                                        postparto
                                                    </li>
                                                    <li>• <strong>Masaje uterino:</strong> Primera línea de tratamiento
                                                    </li>
                                                    <li>• <strong>Reposición de volumen:</strong> Prevenir shock
                                                        hemorrágico
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
                                                <h3 className="text-xl font-bold text-purple-600">Caso: Reanimación
                                                    Neonatal</h3>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                                                <p className="text-gray-700 italic">
                                                    Recién nacido de término nacido tras parto vaginal sin
                                                    complicaciones. El bebé nace flácido,
                                                    sin esfuerzo respiratorio, y con cianosis central. Tras secar y
                                                    estimular vigorosamente por 30 segundos,
                                                    no hay mejoría. FC: 80 latidos por minuto medida por auscultación.
                                                    La madre pregunta angustiada: "¿Está bien mi bebé?"
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <FiHeart className="w-5 h-5 mr-2"/>
                                                        Evaluación APGAR (1 minuto):
                                                    </h4>
                                                    <div className="space-y-2 text-sm text-gray-700">
                                                        <div className="flex justify-between">
                                                            <span>Apariencia:</span>
                                                            <span className="font-bold text-red-600">Cianosis central (0 pts)</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Pulso:</span>
                                                            <span
                                                                className="font-bold text-yellow-600">80 lpm (1 pt)</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Gesticulación:</span>
                                                            <span className="font-bold text-red-600">Sin respuesta (0 pts)</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Actividad:</span>
                                                            <span
                                                                className="font-bold text-red-600">Flácido (0 pts)</span>
                                                        </div>
                                                        <div className="flex justify-between">
                                                            <span>Respiración:</span>
                                                            <span
                                                                className="font-bold text-red-600">Ausente (0 pts)</span>
                                                        </div>
                                                        <div className="border-t pt-2 mt-2">
                                                            <div className="flex justify-between font-bold">
                                                                <span>Total APGAR:</span>
                                                                <span
                                                                    className="text-red-600">1/10 (Depresión severa)</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                                        <FaLungsVirus className="w-5 h-5 mr-2"/>
                                                        Protocolo de Reanimación:
                                                    </h4>
                                                    <ol className="space-y-1 text-sm text-gray-700">
                                                        <li>1. <strong>Continuar secado</strong> y estimulación táctil
                                                        </li>
                                                        <li>2. <strong>Posicionar cabeza</strong> en extensión leve</li>
                                                        <li>3. <strong>Succionar</strong> boca y nariz si secreciones
                                                        </li>
                                                        <li>4. <strong>Iniciar VPP</strong> a 40-60 ventilaciones/min
                                                        </li>
                                                        <li>5. <strong>Bolsa y mascarilla</strong> con aire ambiente
                                                        </li>
                                                        <li>6. <strong>Reevaluar FC</strong> cada 30 segundos</li>
                                                        <li>7. <strong>Si FC &lt; 60:</strong> iniciar compresiones</li>
                                                        <li>8. <strong>Relación 3:1</strong> (3 compresiones : 1
                                                            ventilación)
                                                        </li>
                                                        <li>9. <strong>Transporte inmediato</strong> con soporte
                                                            continuo
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                                <h4 className="font-bold text-blue-700 mb-2">Comunicación con la
                                                    Familia:</h4>
                                                <p className="text-sm text-gray-700">
                                                    "Su bebé necesita ayuda para respirar. Estamos proporcionando
                                                    oxígeno y estimulando la respiración.
                                                    Es importante que sepan que estamos haciendo todo lo necesario y
                                                    vamos a trasladar al bebé al hospital
                                                    inmediatamente para cuidados especializados."
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
                                                <h3 className="text-xl font-bold text-yellow-600">Caso: Eclampsia</h3>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                                                <p className="text-gray-700 italic">
                                                    Mujer de 24 años, G1P0, 36 semanas de gestación, presenta
                                                    convulsiones tónico-clónicas generalizadas
                                                    que duran 2 minutos. Su esposo refiere que en los últimos días ha
                                                    tenido dolor de cabeza severo,
                                                    visión borrosa y edema en cara y manos. No tiene antecedentes de
                                                    epilepsia. La convulsión acaba de cesar.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-yellow-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                        <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                                        Evaluación Post-Ictal:
                                                    </h4>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• <strong>A:</strong> Vía aérea permeable, roncus</li>
                                                        <li>• <strong>B:</strong> FR 28/min, respiración laboriosa</li>
                                                        <li>• <strong>C:</strong> FC 110/min, TA 180/110 mmHg</li>
                                                        <li>• <strong>D:</strong> Confusa, responde a estímulos</li>
                                                        <li>• <strong>E:</strong> Edema facial y en extremidades</li>
                                                        <li>• <strong>Historia:</strong> Cefalea, alteraciones visuales
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                        Manejo Inmediato:
                                                    </h4>
                                                    <ol className="space-y-1 text-sm text-gray-700">
                                                        <li>1. <strong>Proteger vía aérea</strong> - posición de
                                                            seguridad
                                                        </li>
                                                        <li>2. <strong>Oxígeno alto flujo</strong> - 15 L/min por
                                                            mascarilla
                                                        </li>
                                                        <li>3. <strong>Acceso IV</strong> - catéter gran calibre</li>
                                                        <li>4. <strong>Ambiente tranquilo</strong> - reducir estímulos
                                                        </li>
                                                        <li>5. <strong>Posición lateral izquierda</strong> - mejorar
                                                            perfusión
                                                        </li>
                                                        <li>6. <strong>Monitorización continua</strong> - PA y SatO₂
                                                        </li>
                                                        <li>7. <strong>Preparar anticonvulsivos</strong> (si protocolo)
                                                        </li>
                                                        <li>8. <strong>Transporte CODE 3</strong> - notificar hospital
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                                <h4 className="font-bold text-yellow-700 mb-2">Consideraciones
                                                    Especiales:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Eclampsia:</strong> Emergencia obstétrica que amenaza
                                                        la vida
                                                    </li>
                                                    <li>• <strong>Riesgo de convulsiones recurrentes:</strong> Mantener
                                                        ambiente tranquilo
                                                    </li>
                                                    <li>• <strong>Hipertensión severa:</strong> Riesgo de ACV,
                                                        monitorizar continuamente
                                                    </li>
                                                    <li>• <strong>Bienestar fetal:</strong> Optimizar oxigenación
                                                        materna
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">5</span>
                                                <h3 className="text-xl font-bold text-indigo-600">Caso: Prolapso de
                                                    Cordón</h3>
                                            </div>

                                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                <h4 className="font-bold text-gray-800 mb-2">Escenario:</h4>
                                                <p className="text-gray-700 italic">
                                                    Mujer de 29 años, G2P1, 38 semanas, en trabajo de parto activo.
                                                    Acaba de "romperse la fuente"
                                                    con salida abundante de líquido amniótico claro. Inmediatamente
                                                    después, la paciente grita de dolor
                                                    y refiere sensación de "algo que se sale". Al examinar, observas
                                                    cordón umbilical pulsátil
                                                    protruyendo por la vagina. La paciente está muy angustiada.
                                                </p>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                                        Evaluación Crítica:
                                                    </h4>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• <strong>A:</strong> Vía aérea permeable, hiperventilando
                                                        </li>
                                                        <li>• <strong>B:</strong> FR 32/min, respiración superficial
                                                        </li>
                                                        <li>• <strong>C:</strong> FC 120/min, TA 140/90 mmHg</li>
                                                        <li>• <strong>D:</strong> Alerta, muy ansiosa</li>
                                                        <li>• <strong>E:</strong> Cordón pulsátil visible en vagina</li>
                                                        <li>• <strong>Urgencia:</strong> Comprometimiento fetal
                                                            inminente
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                                                        <FaFirstAid className="w-5 h-5 mr-2"/>
                                                        Manejo de Emergencia:
                                                    </h4>
                                                    <ol className="space-y-1 text-sm text-gray-700">
                                                        <li>1. <strong>Posición genupectoral</strong> - cabeza abajo,
                                                            rodillas al pecho
                                                        </li>
                                                        <li>2. <strong>Elevar presentación fetal</strong> - mano
                                                            enguantada estéril
                                                        </li>
                                                        <li>3. <strong>NO manipular cordón</strong> - mantener húmedo y
                                                            tibio
                                                        </li>
                                                        <li>4. <strong>Oxígeno alto flujo</strong> - 15 L/min a la madre
                                                        </li>
                                                        <li>5. <strong>Transporte CODE 3</strong> - notificar cesárea
                                                            emergente
                                                        </li>
                                                        <li>6. <strong>Mantener posición</strong> durante todo el
                                                            transporte
                                                        </li>
                                                        <li>7. <strong>Apoyo emocional</strong> - explicar procedimiento
                                                        </li>
                                                        <li>8. <strong>Monitorización continua</strong> - signos vitales
                                                            maternos
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
                                                <h4 className="font-bold text-red-700 mb-2">Puntos Críticos de
                                                    Supervivencia:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Tiempo es vida:</strong> Cada minuto cuenta para
                                                        supervivencia fetal
                                                    </li>
                                                    <li>• <strong>Mantener elevación:</strong> Reducir compresión del
                                                        cordón
                                                    </li>
                                                    <li>• <strong>Posición clave:</strong> Genupectoral o Trendelenburg
                                                        extremo
                                                    </li>
                                                    <li>• <strong>Comunicación:</strong> Notificar hospital para
                                                        preparar cesárea STAT
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ejercicio de toma de decisiones */}
                                    <div
                                        className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2"/>
                                            Ejercicio de Toma de Decisiones
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-bold text-gray-800 mb-2">Pregunta de Reflexión:</h4>
                                            <p className="text-gray-700 italic mb-3">
                                                "¿Cuáles son los tres factores más importantes para decidir si intentar
                                                transportar a una paciente
                                                obstétrica al hospital o asistir el parto en el lugar?"
                                            </p>
                                            <div className="bg-gray-50 p-3 rounded">
                                                <p className="text-sm text-gray-600">
                                                    <strong>Reflexiona sobre:</strong> Tiempo estimado de parto,
                                                    condición materna,
                                                    distancia al hospital, recursos disponibles, complicaciones
                                                    presentes.
                                                </p>
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
                            pagina="obstretic-care"
                            titulo="Foro de Discusión - Obstretic Care"
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
                                        <li><a href="https://www.ems1.com/airway-management/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre manejo de vía aérea</a></li>
                                        <li><a href="https://www.jems.com/patient-care/airway-respiratory/"
                                               target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">JEMS - Sección de cuidado
                                            respiratorio</a></li>
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

