import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AmbientalEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdWarning, MdCheckCircle, MdThermostat} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsDropletHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaFireAlt, FaExclamationTriangle, FaThermometerHalf, FaSnowflake, FaWater, FaBug} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye} from "react-icons/fi";
import {GiPoisonBottle, GiHeatHaze, GiIceCube, GiSpiderWeb} from "react-icons/gi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function AmbientalEmergencies() {
    const [activeTab, setActiveTab] = useState<'overview' | 'types' | 'management' | 'prevention'>('overview');

    return (
        <SEOWrapper
            title="Emergencias Ambientales EMT | Manejo de Exposición a Calor, Frío y Intoxicaciones"
            description="Guía completa sobre emergencias ambientales para Técnicos en Atención Médica Prehospitalaria: golpe de calor, hipotermia, ahogamiento, mordeduras, picaduras y intoxicaciones ambientales. Protocolos de evaluación y tratamiento."
            keywords="emergencias ambientales, EMT, paramédicos, golpe de calor, hipotermia, ahogamiento, mordeduras, picaduras, intoxicaciones, exposición ambiental, casos clínicos, protocolo de emergencias"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT75M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-7xl">{/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaFireAlt className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Ambientales</h1>
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
                            to={`${AllRoutes.AMBIENTAL_EMERGENCIES}/exam`}
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
                        <a href="https://drive.google.com/file/d/1utfOyujyHM2iEtHtRh-ySFS6dIy9zk-M/view?usp=drive_link"
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
                                onClick={() => setActiveTab('types')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'types'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Tipos de Emergencias
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación y Manejo
                            </button>
                            <button
                                onClick={() => setActiveTab('prevention')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'prevention'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Prevención y Educación
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Emergencias Ambientales!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las emergencias ambientales son condiciones médicas causadas por factores externos como 
                                        <strong> temperatura extrema, agua, animales o sustancias tóxicas</strong>. Pueden ser 
                                        <span className="text-red-600 font-bold"> potencialmente mortales</span> si no se reconocen y tratan oportunamente.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <GiHeatHaze className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Calor</p>
                                            <p className="text-sm">Golpe de calor</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <GiIceCube className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <p className="font-bold text-blue-600">Frío</p>
                                            <p className="text-sm">Hipotermia</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <GiPoisonBottle className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                                            <p className="font-bold text-purple-600">Tóxicos</p>
                                            <p className="text-sm">Intoxicaciones</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Protocolo de evaluación */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Protocolo de Evaluación Ambiental
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">1. ESCENA</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Es segura la escena para mí?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Hay otros pacientes?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Cuál es el ambiente?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Hay fuente de exposición?</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">2. PACIENTE</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Evaluación primaria (ABCDE)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Signos vitales completos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Temperatura corporal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Estado neurológico</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-orange-700 mb-3 text-center">3. HISTORIA</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>¿Cuánto tiempo de exposición?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>¿Qué tipo de exposición?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>¿Primeros auxilios previos?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>¿Medicamentos actuales?</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Signos Neurológicos:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Confusión o desorientación</li>
                                                <li>Cambios en el estado mental</li>
                                                <li>Convulsiones</li>
                                                <li>Pérdida de conciencia</li>
                                                <li>Habla incoherente</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Signos Vitales:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Temperatura corporal anormal</li>
                                                <li>Frecuencia cardíaca irregular</li>
                                                <li>Presión arterial inestable</li>
                                                <li>Respiración irregular</li>
                                                <li>Saturación de oxígeno baja</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Puntos Clave para Recordar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluar la seguridad de la escena PRIMERO</li>
                                                <li>Retirar al paciente del ambiente peligroso</li>
                                                <li>Tomar temperatura corporal</li>
                                                <li>Monitorizar signos vitales continuamente</li>
                                                <li>Documentar tiempo y tipo de exposición</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <MdWarning className="w-4 h-4 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Poner en riesgo tu propia seguridad</li>
                                                <li>Subestimar la gravedad de la exposición</li>
                                                <li>Demorar el tratamiento por obtener historia</li>
                                                <li>Usar remedios caseros sin evidencia</li>
                                                <li>Dejar solo al paciente durante el transporte</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'types' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación de Emergencias Ambientales</h2>
                                
                                {/* Emergencias por temperatura */}
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-b from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                                        <div className="flex items-center mb-4">
                                            <GiHeatHaze className="w-8 h-8 text-red-500 mr-3"/>
                                            <h3 className="text-xl font-bold text-red-700">Emergencias por Calor</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-semibold text-red-600 mb-2">Calambres por Calor</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Espasmos musculares dolorosos</li>
                                                    <li>• Sudoración profusa</li>
                                                    <li>• Piel húmeda y caliente</li>
                                                    <li>• Paciente alerta</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-semibold text-orange-600 mb-2">Agotamiento por Calor</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Debilidad y mareo</li>
                                                    <li>• Náuseas y vómitos</li>
                                                    <li>• Piel pálida y húmeda</li>
                                                    <li>• Temperatura normal o elevada</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                                                <h4 className="font-semibold text-red-700 mb-2">⚠️ Golpe de Calor</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Alteración del estado mental</strong></li>
                                                    <li>• Temperatura corporal &gt;40°C</li>
                                                    <li>• Piel caliente y seca o húmeda</li>
                                                    <li>• ¡EMERGENCIA MÉDICA!</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-b from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                                        <div className="flex items-center mb-4">
                                            <GiIceCube className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h3 className="text-xl font-bold text-blue-700">Emergencias por Frío</h3>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-semibold text-blue-600 mb-2">Congelación (Frostbite)</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Entumecimiento y hormigueo</li>
                                                    <li>• Piel enrojecida, después pálida</li>
                                                    <li>• Ampollas en casos severos</li>
                                                    <li>• Afecta extremidades</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-semibold text-cyan-600 mb-2">Hipotermia Leve</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Escalofríos incontrolables</li>
                                                    <li>• Temperatura 32-35°C</li>
                                                    <li>• Pérdida de coordinación</li>
                                                    <li>• Paciente alerta</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                                                <h4 className="font-semibold text-blue-700 mb-2">⚠️ Hipotermia Severa</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Alteración del estado mental</strong></li>
                                                    <li>• Temperatura &lt;32°C</li>
                                                    <li>• Rigidez muscular</li>
                                                    <li>• ¡EMERGENCIA MÉDICA!</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Otras emergencias ambientales */}
                                <div className="grid lg:grid-cols-3 gap-6">
                                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                        <div className="flex items-center mb-4">
                                            <BsDropletHalf className="w-6 h-6 text-blue-600 mr-2"/>
                                            <h3 className="text-lg font-bold text-blue-700">Ahogamiento</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-blue-600 text-sm mb-1">Agua Dulce</h4>
                                                <p className="text-xs text-gray-600">Hemólisis, hipocalemia</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-blue-600 text-sm mb-1">Agua Salada</h4>
                                                <p className="text-xs text-gray-600">Edema pulmonar, hipernatremia</p>
                                            </div>
                                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                                <p className="text-xs font-medium text-yellow-800">⚠️ Ambas pueden causar hipotermia</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                        <div className="flex items-center mb-4">
                                            <GiSpiderWeb className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-lg font-bold text-green-700">Mordeduras y Picaduras</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-green-600 text-sm mb-1">Serpientes</h4>
                                                <p className="text-xs text-gray-600">Coralillos, víboras</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-green-600 text-sm mb-1">Arañas</h4>
                                                <p className="text-xs text-gray-600">Viuda negra, violinista</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-green-600 text-sm mb-1">Escorpiones</h4>
                                                <p className="text-xs text-gray-600">Neurotoxinas</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-green-600 text-sm mb-1">Himenópteros</h4>
                                                <p className="text-xs text-gray-600">Abejas, avispas</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                                        <div className="flex items-center mb-4">
                                            <GiPoisonBottle className="w-6 h-6 text-purple-600 mr-2"/>
                                            <h3 className="text-lg font-bold text-purple-700">Intoxicaciones</h3>
                                        </div>
                                        <div className="space-y-2">
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-purple-600 text-sm mb-1">Monóxido de Carbono</h4>
                                                <p className="text-xs text-gray-600">CO, incoloro, inodoro</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-purple-600 text-sm mb-1">Gases Industriales</h4>
                                                <p className="text-xs text-gray-600">H₂S, NH₃, cloro</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-purple-600 text-sm mb-1">Plaguicidas</h4>
                                                <p className="text-xs text-gray-600">Organofosforados</p>
                                            </div>
                                            <div className="bg-white p-3 rounded shadow-sm">
                                                <h4 className="font-semibold text-purple-600 text-sm mb-1">Plantas</h4>
                                                <p className="text-xs text-gray-600">Ricino, cicuta</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabla de comparación rápida */}
                                <div className="bg-gray-50 p-6 rounded-lg border">
                                    <h3 className="text-lg font-bold text-gray-800 mb-4">Comparación Rápida - Signos Clave</h3>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border border-gray-300">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="border border-gray-300 px-4 py-2 text-left">Emergencia</th>
                                                    <th className="border border-gray-300 px-4 py-2 text-left">Temperatura</th>
                                                    <th className="border border-gray-300 px-4 py-2 text-left">Piel</th>
                                                    <th className="border border-gray-300 px-4 py-2 text-left">Estado Mental</th>
                                                    <th className="border border-gray-300 px-4 py-2 text-left">Prioridad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-gray-300 px-4 py-2 font-medium">Golpe de Calor</td>
                                                    <td className="border border-gray-300 px-4 py-2">&gt;40°C</td>
                                                    <td className="border border-gray-300 px-4 py-2">Caliente, seca/húmeda</td>
                                                    <td className="border border-gray-300 px-4 py-2">Alterado</td>
                                                    <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">ALTA</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 px-4 py-2 font-medium">Hipotermia Severa</td>
                                                    <td className="border border-gray-300 px-4 py-2">&lt;32°C</td>
                                                    <td className="border border-gray-300 px-4 py-2">Fría, pálida</td>
                                                    <td className="border border-gray-300 px-4 py-2">Alterado</td>
                                                    <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">ALTA</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 px-4 py-2 font-medium">Ahogamiento</td>
                                                    <td className="border border-gray-300 px-4 py-2">Variable</td>
                                                    <td className="border border-gray-300 px-4 py-2">Cianótica, fría</td>
                                                    <td className="border border-gray-300 px-4 py-2">Alterado/Inconsciente</td>
                                                    <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">ALTA</td>
                                                </tr>
                                                <tr>
                                                    <td className="border border-gray-300 px-4 py-2 font-medium">Intoxicación CO</td>
                                                    <td className="border border-gray-300 px-4 py-2">Normal</td>
                                                    <td className="border border-gray-300 px-4 py-2">Rosada, normal</td>
                                                    <td className="border border-gray-300 px-4 py-2">Confusión</td>
                                                    <td className="border border-gray-300 px-4 py-2 text-orange-600 font-bold">MEDIA</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Protocolos de Evaluación y Manejo</h2>
                                
                                {/* Protocolo general */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-700 mb-4">Protocolo General de Manejo</h3>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-3">1. Evaluación Inicial</h4>
                                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                <li><strong>Seguridad de la escena:</strong> Evaluar riesgos ambientales</li>
                                                <li><strong>Evaluación primaria:</strong> ABCDE sistemático</li>
                                                <li><strong>Signos vitales:</strong> Incluir temperatura corporal</li>
                                                <li><strong>Estado neurológico:</strong> Escala de Glasgow</li>
                                                <li><strong>Exposición:</strong> Evaluar toda la superficie corporal</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-3">2. Manejo Inmediato</h4>
                                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                <li><strong>Retirar del ambiente:</strong> Eliminar la fuente de exposición</li>
                                                <li><strong>Soporte vital básico:</strong> Oxígeno, acceso vascular</li>
                                                <li><strong>Control de temperatura:</strong> Prevenir hipo/hipertermia</li>
                                                <li><strong>Monitorización:</strong> Continua de signos vitales</li>
                                                <li><strong>Preparar transporte:</strong> Notificar al hospital</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo específico por temperatura */}
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                            <MdThermostat className="w-6 h-6 mr-2"/>
                                            Manejo de Emergencias por Calor
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                                                <h4 className="font-semibold text-red-700 mb-2">Golpe de Calor - Protocolo</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Retirar al paciente del ambiente caluroso</li>
                                                    <li>Quitar ropa y exponer la piel</li>
                                                    <li>Enfriamiento agresivo:
                                                        <ul className="list-disc list-inside ml-4 mt-1">
                                                            <li>Paños húmedos + ventilador</li>
                                                            <li>Bolsas de hielo en cuello, axilas, ingles</li>
                                                            <li>Objetivo: reducir 1-2°C cada 5 min</li>
                                                        </ul>
                                                    </li>
                                                    <li>Oxígeno suplementario (15L/min)</li>
                                                    <li>Acceso vascular (2 vías de gran calibre)</li>
                                                    <li>Solución salina normal 500ml en bolo</li>
                                                    <li>Monitorizar temperatura rectal</li>
                                                    <li>Traslado código rojo</li>
                                                </ol>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-orange-700 mb-2">Agotamiento por Calor</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Enfriamiento pasivo (sombra, ventilación)</li>
                                                    <li>Rehidratación oral si está consciente</li>
                                                    <li>Solución salina IV si hay vómitos</li>
                                                    <li>Monitorización continua</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                            <FaSnowflake className="w-6 h-6 mr-2"/>
                                            Manejo de Emergencias por Frío
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                                                <h4 className="font-semibold text-blue-700 mb-2">Hipotermia - Protocolo</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Retirar del ambiente frío</li>
                                                    <li>Manipular con cuidado (evitar arritmias)</li>
                                                    <li>Quitar ropa húmeda</li>
                                                    <li>Recalentamiento:
                                                        <ul className="list-disc list-inside ml-4 mt-1">
                                                            <li>Pasivo: mantas, ambiente cálido</li>
                                                            <li>Activo: bolsas de agua tibia (40-42°C)</li>
                                                            <li>Objetivo: 1-2°C por hora</li>
                                                        </ul>
                                                    </li>
                                                    <li>Oxígeno caliente y humidificado</li>
                                                    <li>Acceso vascular (fluidos tibios)</li>
                                                    <li>Monitorización cardíaca</li>
                                                    <li>Traslado con precaución</li>
                                                </ol>
                                            </div>
                                            <div className="bg-cyan-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-cyan-700 mb-2">Congelación</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>NO frotar la zona afectada</li>
                                                    <li>Recalentamiento con agua tibia (40-42°C)</li>
                                                    <li>Analgesia (dolor intenso)</li>
                                                    <li>Proteger con gasas secas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo de otras emergencias */}
                                <div className="space-y-6">
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                            <FaWater className="w-6 h-6 mr-2"/>
                                            Manejo de Ahogamiento
                                        </h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-3">Rescate Seguro</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Seguridad del rescatista PRIMERO</li>
                                                    <li>Usar equipo de flotación</li>
                                                    <li>Rescate desde la orilla si es posible</li>
                                                    <li>Mantener alineación cervical</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-3">Manejo Médico</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Evaluación ABCDE inmediata</li>
                                                    <li>Oxígeno alto flujo (15L/min)</li>
                                                    <li>Ventilación con presión positiva</li>
                                                    <li>Prevenir hipotermia</li>
                                                    <li>RCP si está indicado</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
                                            <FaBug className="w-6 h-6 mr-2"/>
                                            Manejo de Mordeduras y Picaduras
                                        </h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Evaluación Inicial</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Identificar el animal/artrópodo</li>
                                                    <li>Hora y circunstancias</li>
                                                    <li>Síntomas locales y sistémicos</li>
                                                    <li>Alergias previas</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Manejo General</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Lavar con agua y jabón</li>
                                                    <li>Inmovilizar extremidad</li>
                                                    <li>Hielo local (no directo)</li>
                                                    <li>Analgesia según dolor</li>
                                                    <li>Vigilar signos sistémicos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                                            <GiPoisonBottle className="w-6 h-6 mr-2"/>
                                            Manejo de Intoxicaciones
                                        </h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Intoxicación por CO</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Retirar del ambiente contaminado</li>
                                                    <li>Oxígeno alto flujo (15L/min)</li>
                                                    <li>Evaluación neurológica</li>
                                                    <li>Monitorización cardíaca</li>
                                                    <li>Considerar cámara hiperbárica</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Intoxicación General</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Identificar la sustancia</li>
                                                    <li>Contactar centro toxicológico</li>
                                                    <li>Descontaminación si está indicada</li>
                                                    <li>Soporte vital según síntomas</li>
                                                    <li>Traslado con muestra del tóxico</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Criterios de transporte */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Criterios de Transporte y Destino</h3>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div className="bg-red-100 p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-700 mb-2">Código Rojo - Emergente</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Golpe de calor</li>
                                                <li>Hipotermia severa</li>
                                                <li>Ahogamiento con PCR</li>
                                                <li>Mordedura con shock</li>
                                                <li>Intoxicación severa</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-100 p-4 rounded-lg">
                                            <h4 className="font-semibold text-yellow-700 mb-2">Código Amarillo - Urgente</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Agotamiento por calor</li>
                                                <li>Hipotermia moderada</li>
                                                <li>Ahogamiento sin PCR</li>
                                                <li>Mordedura local</li>
                                                <li>Intoxicación leve</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-100 p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-700 mb-2">Código Verde - Demorable</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Calambres por calor</li>
                                                <li>Congelación superficial</li>
                                                <li>Picaduras locales</li>
                                                <li>Exposición mínima</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'prevention' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Prevención y Educación Comunitaria</h2>
                                
                                {/* Educación para la prevención */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                                        <h3 className="text-xl font-bold text-blue-700">Educación Preventiva</h3>
                                    </div>
                                    <p className="text-gray-700 mb-4">
                                        Como paramédico, tu papel educativo es fundamental para prevenir emergencias ambientales. 
                                        La educación comunitaria puede salvar vidas y reducir la incidencia de estos eventos.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold text-blue-700 mb-2">Grupos de Riesgo</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Niños menores de 5 años</li>
                                                <li>Adultos mayores de 65 años</li>
                                                <li>Trabajadores al aire libre</li>
                                                <li>Personas con enfermedades crónicas</li>
                                                <li>Deportistas y atletas</li>
                                                <li>Personas sin hogar</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold text-blue-700 mb-2">Factores de Riesgo</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Medicamentos que alteran termorregulación</li>
                                                <li>Deshidratación crónica</li>
                                                <li>Obesidad o desnutrición</li>
                                                <li>Alcohol y sustancias</li>
                                                <li>Exposición ocupacional</li>
                                                <li>Falta de aclimatación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Prevención por tipo */}
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                            <FaThermometerHalf className="w-6 h-6 mr-2"/>
                                            Prevención - Emergencias por Calor
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-red-600 mb-2">Medidas Preventivas</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Hidratación adecuada (antes, durante y después)</li>
                                                    <li>Ropa ligera, de colores claros y transpirable</li>
                                                    <li>Evitar actividades en horas de mayor calor</li>
                                                    <li>Buscar sombra y ambientes frescos</li>
                                                    <li>Aclimatación gradual al calor</li>
                                                    <li>Reconocer signos tempranos</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-orange-600 mb-2">Signos de Alerta</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Sed excesiva</li>
                                                    <li>Fatiga inusual</li>
                                                    <li>Dolor de cabeza</li>
                                                    <li>Mareo o náuseas</li>
                                                    <li>Disminución de la sudoración</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                            <FaSnowflake className="w-6 h-6 mr-2"/>
                                            Prevención - Emergencias por Frío
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-600 mb-2">Medidas Preventivas</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Vestimenta en capas (sistema de 3 capas)</li>
                                                    <li>Proteger extremidades (guantes, calcetines)</li>
                                                    <li>Mantener ropa seca</li>
                                                    <li>Nutrición e hidratación adecuada</li>
                                                    <li>Evitar alcohol y cigarrillos</li>
                                                    <li>Planificar actividades al aire libre</li>
                                                </ul>
                                            </div>
                                            <div className="bg-cyan-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-cyan-600 mb-2">Signos de Alerta</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Escalofríos persistentes</li>
                                                    <li>Entumecimiento</li>
                                                    <li>Pérdida de destreza</li>
                                                    <li>Confusión o irritabilidad</li>
                                                    <li>Fatiga extrema</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Seguridad acuática */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                        <FaWater className="w-6 h-6 mr-2"/>
                                        Prevención - Seguridad Acuática
                                    </h3>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-600 mb-2">Nadadores</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Nunca nadar solo</li>
                                                <li>Conocer las corrientes</li>
                                                <li>Respetar las señales</li>
                                                <li>No nadar bajo efectos del alcohol</li>
                                                <li>Usar chaleco salvavidas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-600 mb-2">Supervisión Infantil</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Supervisión constante</li>
                                                <li>Barreras físicas en piscinas</li>
                                                <li>Enseñar a nadar temprano</li>
                                                <li>Flotadores apropiados</li>
                                                <li>Clases de seguridad acuática</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-600 mb-2">Actividades Acuáticas</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Equipo de seguridad certificado</li>
                                                <li>Verificar condiciones climáticas</li>
                                                <li>Plan de emergencia</li>
                                                <li>Comunicación con tierra</li>
                                                <li>Conocimiento de rescate</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Prevención de mordeduras */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
                                        <FaBug className="w-6 h-6 mr-2"/>
                                        Prevención - Mordeduras y Picaduras
                                    </h3>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-yellow-600 mb-2">Medidas Generales</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Usar ropa protectora en áreas rurales</li>
                                                <li>Revisar zapatos y ropa antes de usar</li>
                                                <li>Usar repelente de insectos</li>
                                                <li>Evitar caminar descalzo</li>
                                                <li>Usar linterna en la noche</li>
                                                <li>Mantener áreas limpias</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-yellow-600 mb-2">Educación Específica</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Identificar especies peligrosas locales</li>
                                                <li>Conocer hábitats de riesgo</li>
                                                <li>Evitar molestar nidos o madrigueras</li>
                                                <li>Primeros auxilios básicos</li>
                                                <li>Cuándo buscar atención médica</li>
                                                <li>Números de emergencia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Recursos educativos */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-purple-700 mb-4">Recursos Educativos y Herramientas</h3>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-600 mb-2">Materiales Educativos</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Folletos informativos ilustrados</li>
                                                <li>Videos educativos cortos</li>
                                                <li>Demostraciones prácticas</li>
                                                <li>Simulacros de emergencia</li>
                                                <li>Aplicaciones móviles</li>
                                                <li>Charlas comunitarias</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-600 mb-2">Colaboración Institucional</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Escuelas y universidades</li>
                                                <li>Centros de trabajo</li>
                                                <li>Clubes deportivos</li>
                                                <li>Organizaciones comunitarias</li>
                                                <li>Servicios de salud</li>
                                                <li>Medios de comunicación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Mensajes clave */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Mensajes Clave para la Comunidad</h3>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div className="bg-green-100 p-4 rounded-lg text-center">
                                            <MdCheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                                            <h4 className="font-semibold text-green-700 mb-2">PREVENCIÓN</h4>
                                            <p className="text-sm text-gray-700">
                                                "La mayoría de emergencias ambientales son prevenibles con educación y preparación"
                                            </p>
                                        </div>
                                        <div className="bg-blue-100 p-4 rounded-lg text-center">
                                            <FiAlertTriangle className="w-8 h-8 text-blue-600 mx-auto mb-2"/>
                                            <h4 className="font-semibold text-blue-700 mb-2">RECONOCIMIENTO</h4>
                                            <p className="text-sm text-gray-700">
                                                "Conocer los signos tempranos puede salvar vidas"
                                            </p>
                                        </div>
                                        <div className="bg-red-100 p-4 rounded-lg text-center">
                                            <FiUser className="w-8 h-8 text-red-600 mx-auto mb-2"/>
                                            <h4 className="font-semibold text-red-700 mb-2">ACCIÓN</h4>
                                            <p className="text-sm text-gray-700">
                                                "Actuar rápido y buscar ayuda profesional es crucial"
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* FAQ Section */}
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
                                    <li><a href="https://www.ems1.com/environmental/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Emergencias ambientales</a></li>
                                    <li><a href="https://www.jems.com/patient-care/environmental/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de emergencias ambientales</a></li>
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

