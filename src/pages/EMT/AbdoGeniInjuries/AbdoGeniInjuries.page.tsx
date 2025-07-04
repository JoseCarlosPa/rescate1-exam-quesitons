import { NavLink } from "react-router";
import { AllRoutes } from "../../../components/Router/Router.constants.ts";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { faqData } from "./AbdoGeniInjuries.questions.ts";
import { IoReturnDownBack } from "react-icons/io5";
import { useState } from "react";
import { MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning } from "react-icons/md";
import { BsBookHalf, BsLightbulb, BsShield } from "react-icons/bs";
import { PiChalkboardTeacher } from "react-icons/pi";
import { CiMedicalCross } from "react-icons/ci";
import { FaExclamationTriangle, FaHeartbeat, FaEye, FaHandsHelping } from "react-icons/fa";
import { FiAlertTriangle, FiUser, FiTarget, FiActivity } from "react-icons/fi";
import { GiStomach, GiKidneys, GiLiver } from "react-icons/gi";
import { RiFirstAidKitFill } from "react-icons/ri";
import { TbEmergencyBed, TbStethoscope } from "react-icons/tb";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function AbdoGeniInjuries() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Lesiones Abdominales y Genitourinarias EMT | Trauma, Evaluación y Manejo"
            description="Guía completa sobre lesiones abdominales y genitourinarias para Técnicos en Emergencias Médicas: anatomía, fisiopatología, signos de alarma, manejo prehospitalario y casos clínicos prácticos."
            keywords="lesiones abdominales, trauma genitourinario, EMT, paramédicos, evisceración, hematuria, shock hemorrágico, manejo prehospitalario, casos clínicos, emergencias médicas"
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
                            <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones abdominales y genitourinarias</h1>
                        <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto" />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to={`${AllRoutes.ABDO_GENI_INJURIES}/exam`}
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
                            <a href="https://drive.google.com/file/d/1qc1Y1h4Vhe90OGsIonMFQ1aSPp5fRBB4/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                            <a href="https://www.trauma.org/index.php/main/article/438"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <TbEmergencyBed className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Trauma.org</p>
                            </a>
                        </div>

                

                    {/* Navegación por pestañas */}
                    <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                        <nav className="flex space-x-2 overflow-x-auto">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'overview'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                Generalidades
                            </button>
                            <button
                                onClick={() => setActiveTab('anatomy')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'anatomy'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                Anatomía y Fisiología
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'treatment'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                Manejo Prehospitalario
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'practice'
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
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-red-700">¡Trauma de Alto Riesgo!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las lesiones abdominales y genitourinarias pueden <strong>comprometer la vida</strong> rápidamente.
                                        La hemorragia interna puede causar shock hipovolémico en <span className="text-red-600 font-bold">minutos</span>.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                            <p className="font-bold text-red-600">Clase I</p>
                                            <p className="text-sm">&lt;15% pérdida sangre</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                            <p className="font-bold text-orange-600">Clase II</p>
                                            <p className="text-sm">15-30% pérdida sangre</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2" />
                                            <p className="font-bold text-red-700">Clase III-IV</p>
                                            <p className="text-sm">&gt;30% pérdida sangre</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Mecanismo de lesión */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiTarget className="w-6 h-6 mr-2 text-orange-500" />
                                        Mecanismos de Lesión Comunes
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">Trauma Cerrado</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Accidentes automovilísticos (impacto con volante)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Caídas desde altura</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Golpes directos (deportes, peleas)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Compresión por objetos pesados</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 text-center">Trauma Penetrante</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Heridas por arma blanca</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Heridas por arma de fuego</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Empalamiento</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Fragmentos de explosión</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Evaluación Inmediata</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <FaEye className="w-4 h-4 mr-2" />
                                                Signos Visuales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Distensión abdominal (barriga hinchada)</li>
                                                <li>Hematomas en flancos (signo de Grey-Turner)</li>
                                                <li>Hematoma periumbilical (signo de Cullen)</li>
                                                <li>Palidez, diaforesis (sudoración)</li>
                                                <li>Evisceración (órganos expuestos)</li>
                                                <li>Hematuria visible (orina con sangre)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <FaHeartbeat className="w-4 h-4 mr-2" />
                                                Signos Vitales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Taquicardia (FC &gt; 100 lpm)</li>
                                                <li>Hipotensión (TA &lt; 90/60 mmHg)</li>
                                                <li>Taquipnea (FR &gt; 20 rpm)</li>
                                                <li>Piel fría y húmeda</li>
                                                <li>Llenado capilar &gt; 2 segundos</li>
                                                <li>Alteración del estado mental</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2" />
                                        <h3 className="text-xl font-bold text-green-800">Puntos Clave para Recordar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2" />
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluar ABC (Airway, Breathing, Circulation)</li>
                                                <li>Controlar hemorragias externas</li>
                                                <li>Monitorizar signos vitales frecuentemente</li>
                                                <li>Mantener al paciente NPO (nada por boca)</li>
                                                <li>Preparar para traslado rápido</li>
                                                <li>Proteger de hipotermia</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2" />
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Reintroducir órganos eviscerados</li>
                                                <li>Retirar objetos incrustados</li>
                                                <li>Administrar líquidos por vía oral</li>
                                                <li>Aplicar presión directa sobre evisceración</li>
                                                <li>Ignorar signos de shock temprano</li>
                                                <li>Demorar el traslado</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                {/* Anatomía básica */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FiUser className="w-8 h-8 text-blue-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-blue-700">Anatomía Abdominal y Genitourinaria</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Comprender la anatomía es <strong>fundamental</strong> para identificar lesiones según la ubicación del trauma y predecir complicaciones.
                                    </p>
                                </div>

                                {/* Regiones abdominales (9 cuadrantes) */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiTarget className="w-6 h-6 mr-2 text-orange-500" />
                                        Regiones Abdominales (9 Cuadrantes) - Mapa Anatómico Detallado
                                    </h2>
                                    <div className="mb-4 p-4 bg-blue-50 rounded-lg">
                                        <p className="text-sm text-gray-700">
                                            <strong>División anatómica:</strong> El abdomen se divide en 9 regiones usando dos líneas verticales (líneas medioclaviculares) 
                                            y dos líneas horizontales (plano subcostal y plano intertubercular) para una localización más precisa.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {/* Fila Superior */}
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg border-2 border-red-200">
                                            <h3 className="text-lg font-bold text-red-700 mb-2 text-center">Hipocondrio Derecho</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiLiver className="w-4 h-4 text-red-600 mr-2" />
                                                    <span className="font-medium">Hígado (lóbulo derecho)</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiLiver className="w-4 h-4 text-red-600 mr-2" />
                                                    <span className="font-medium">Glandula Suprarrenal derecha</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-red-600 mr-2" />
                                                    <span className="font-medium">Vesícula biliar</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiKidneys className="w-4 h-4 text-red-600 mr-2" />
                                                    <span className="font-medium">Riñón derecho (polo superior)</span>
                                                </div>
                                                 <div className="flex items-center">
                                                    <GiKidneys className="w-4 h-4 text-red-600 mr-2" />
                                                    <span className="font-medium">Flexura hepática del colon</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Hemorragia hepática
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border-2 border-yellow-200">
                                            <h3 className="text-lg font-bold text-yellow-700 mb-2 text-center">Epigastrio</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-yellow-600 mr-2" />
                                                    <span className="font-medium">Curvatura menos del Estómago</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiLiver className="w-4 h-4 text-yellow-600 mr-2" />
                                                    <span className="font-medium">Hígado (lóbulo izquierdo)</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiLiver className="w-4 h-4 text-yellow-600 mr-2" />
                                                    <span className="font-medium">Duodeno</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiLiver className="w-4 h-4 text-yellow-600 mr-2" />
                                                    <span className="font-medium">Aorta abdominal</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiLiver className="w-4 h-4 text-yellow-600 mr-2" />
                                                    <span className="font-medium">Vena cava inferior</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-yellow-600 mr-2" />
                                                    <span className="font-medium">Páncreas</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Perforación gástrica
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-200">
                                            <h3 className="text-lg font-bold text-blue-700 mb-2 text-center">Hipocondrio Izquierdo</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-blue-600 mr-2" />
                                                    <span className="font-medium">Cola del páncreas</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-blue-600 mr-2" />
                                                    <span className="font-medium">Bazo</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-blue-600 mr-2" />
                                                    <span className="font-medium">Ángulo esplénico del colon</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiKidneys className="w-4 h-4 text-blue-600 mr-2" />
                                                    <span className="font-medium">Glandula Suprarrenal izquierda</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiKidneys className="w-4 h-4 text-blue-600 mr-2" />
                                                    <span className="font-medium">Riñón izquierdo (polo superior)</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Ruptura esplénica (Signo de Kehr)
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Fila Media */}
                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 rounded-lg border-2 border-orange-200">
                                            <h3 className="text-lg font-bold text-orange-700 mb-2 text-center">Flanco Derecho</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-orange-600 mr-2" />
                                                    <span className="font-medium">Colon ascendente</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiKidneys className="w-4 h-4 text-orange-600 mr-2" />
                                                    <span className="font-medium">Riñón derecho (polo inferior)</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-orange-600 mr-2" />
                                                    <span className="font-medium">Intestino delgado (asas)</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Lesión renal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-4 rounded-lg border-2 border-teal-200">
                                            <h3 className="text-lg font-bold text-teal-700 mb-2 text-center">Mesogastro</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-teal-600 mr-2" />
                                                    <span className="font-medium">Intestino delgado (yuyeno e ileon)</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-teal-600 mr-2" />
                                                    <span className="font-medium">Porcion inferior duodenal</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-teal-600 mr-2" />
                                                    <span className="font-medium">Aorta</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-teal-600 mr-2" />
                                                    <span className="font-medium">Vena cava inferior</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-teal-600 mr-2" />
                                                    <span className="font-medium">Mesenterio</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-teal-600 mr-2" />
                                                    <span className="font-medium">Epiplon mayor</span>
                                                </div>
                                        
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Perforación intestinal
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-4 rounded-lg border-2 border-indigo-200">
                                            <h3 className="text-lg font-bold text-indigo-700 mb-2 text-center">Flanco Izquierdo</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-indigo-600 mr-2" />
                                                    <span className="font-medium">Colon descendente</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiKidneys className="w-4 h-4 text-indigo-600 mr-2" />
                                                    <span className="font-medium">Riñón izquierdo (polo inferior)</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-indigo-600 mr-2" />
                                                    <span className="font-medium">Intestino delgado (asas)</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Lesión renal
                                                </p>
                                            </div>
                                        </div>
                                        
                                        {/* Fila Inferior */}
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border-2 border-green-200">
                                            <h3 className="text-lg font-bold text-green-700 mb-2 text-center">Fosa Ilíaca Derecha</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Apéndice cecal</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Ciego</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Ovario derecho ♀</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Trompa uterina</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Ileon terminal</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Cordon espermatico</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-green-600 mr-2" />
                                                    <span className="font-medium">Desembocadura del urétere</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Apendicitis/Perforación
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-200">
                                            <h3 className="text-lg font-bold text-purple-700 mb-2 text-center">Hipogastrio (Suprapúbico)</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-purple-600 mr-2" />
                                                    <span className="font-medium">Vejiga urinaria</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-purple-600 mr-2" />
                                                    <span className="font-medium">Útero ♀</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-purple-600 mr-2" />
                                                    <span className="font-medium">Colon sigmoideo</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-purple-600 mr-2" />
                                                    <span className="font-medium">Prostata</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Ruptura vesical
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-lg border-2 border-pink-200">
                                            <h3 className="text-lg font-bold text-pink-700 mb-2 text-center">Fosa Ilíaca Izquierda</h3>
                                            <div className="space-y-1 text-sm">
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-pink-600 mr-2" />
                                                    <span className="font-medium">Colon sigmoide</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-pink-600 mr-2" />
                                                    <span className="font-medium">Ovario izquierdo ♀</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-pink-600 mr-2" />
                                                    <span className="font-medium">Trompa uterina</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-pink-600 mr-2" />
                                                    <span className="font-medium">Cordon espermatico izquierdo</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <GiStomach className="w-4 h-4 text-pink-600 mr-2" />
                                                    <span className="font-medium">Desembocadura del urétere</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-1">
                                                    <strong>Riesgo:</strong> Diverticulitis/Perforación
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Nota clínica importante */}
                                    <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                        <h4 className="font-bold text-amber-800 mb-2 flex items-center">
                                            <FiTarget className="w-5 h-5 mr-2" />
                                            Importancia Clínica de las 9 Regiones:
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-1">
                                            <li>• <strong>Localización precisa:</strong> Permite identificar órganos específicos afectados</li>
                                            <li>• <strong>Comunicación médica:</strong> Facilita la comunicación con el hospital receptor</li>
                                            <li>• <strong>Priorización:</strong> Ayuda a determinar la urgencia del transporte según la región afectada</li>
                                            <li>• <strong>Seguimiento:</strong> Permite monitorizar la progresión de signos y síntomas</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Diferencias órganos sólidos vs huecos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500" />
                                        Órganos Sólidos vs. Órganos Huecos
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 text-center flex items-center justify-center">
                                                <GiLiver className="w-6 h-6 mr-2" />
                                                Órganos Sólidos
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <p className="font-medium text-red-700">Características:</p>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Muy vascularizados</li>
                                                        <li>• Sangran profusamente</li>
                                                        <li>• Causan shock rápidamente</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <p className="font-medium text-red-700">Ejemplos:</p>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Hígado, bazo, riñones</li>
                                                        <li>• Páncreas, ovarios</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <p className="font-medium text-red-700">Complicación principal:</p>
                                                    <p className="text-sm text-gray-700">Hemorragia interna masiva</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center flex items-center justify-center">
                                                <GiStomach className="w-6 h-6 mr-2" />
                                                Órganos Huecos
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <p className="font-medium text-blue-700">Características:</p>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Contienen líquidos/gases</li>
                                                        <li>• Al romperse derraman contenido</li>
                                                        <li>• Causan inflamación severa</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <p className="font-medium text-blue-700">Ejemplos:</p>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Estómago, intestinos</li>
                                                        <li>• Vejiga, vesícula biliar</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <p className="font-medium text-blue-700">Complicación principal:</p>
                                                    <p className="text-sm text-gray-700">Peritonitis y sepsis</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sistema genitourinario */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiKidneys className="w-6 h-6 mr-2 text-orange-500" />
                                        Sistema Genitourinario
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-b from-teal-50 to-teal-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-teal-700 mb-2 text-center">Riñones</h3>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Filtran 180L de sangre/día</li>
                                                <li>• Ubicados en retroperitoneo</li>
                                                <li>• Protegidos por costillas</li>
                                                <li>• Lesión → hematuria</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-cyan-50 to-cyan-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-cyan-700 mb-2 text-center">Vejiga</h3>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Almacena hasta 500ml orina</li>
                                                <li>• Protegida por pelvis</li>
                                                <li>• Más vulnerable cuando llena</li>
                                                <li>• Lesión → hematuria, dolor</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-indigo-50 to-indigo-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-indigo-700 mb-2 text-center">Genitales</h3>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Muy vascularizados</li>
                                                <li>• Lesiones muy dolorosas</li>
                                                <li>• Sangrado abundante</li>
                                                <li>• Riesgo de infección</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos específicos */}
                                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <TbStethoscope className="w-6 h-6 text-amber-600 mr-2" />
                                        <h3 className="text-xl font-bold text-amber-800">Signos Específicos de Localización</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-amber-800 mb-3">Signos Abdominales:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="font-medium text-amber-700 mr-2">•</span>
                                                    <span><strong>Signo de Kehr:</strong> Dolor referido al hombro izquierdo (lesión esplénica)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-medium text-amber-700 mr-2">•</span>
                                                    <span><strong>Signo de Cullen:</strong> Hematoma periumbilical (hemorragia retroperitoneal)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-medium text-amber-700 mr-2">•</span>
                                                    <span><strong>Signo de Grey-Turner:</strong> Hematoma en flancos (hemorragia retroperitoneal)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-amber-800 mb-3">Signos Genitourinarios:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="font-medium text-amber-700 mr-2">•</span>
                                                    <span><strong>Hematuria:</strong> Sangre en orina (lesión renal/vesical)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-medium text-amber-700 mr-2">•</span>
                                                    <span><strong>Sangre en meato:</strong> Lesión uretral</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="font-medium text-amber-700 mr-2">•</span>
                                                    <span><strong>Dolor costovertebral:</strong> Lesión renal</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                {/* Protocolo de manejo */}
                                <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <RiFirstAidKitFill className="w-8 h-8 text-emerald-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-emerald-700">Protocolo de Manejo Prehospitalario</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        El manejo debe seguir un enfoque <strong>sistemático</strong> y <strong>rápido</strong> para estabilizar al paciente y prevenir complicaciones fatales.
                                    </p>
                                </div>

                                {/* ABCDE Protocol */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500" />
                                        Protocolo ABCDE - Evaluación Sistemática
                                    </h2>
                                    <div className="space-y-4">
                                        <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
                                            <h3 className="text-lg font-bold text-red-700 mb-2 flex items-center">
                                                <span className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">A</span>
                                                AIRWAY (Vía Aérea)
                                            </h3>
                                            <ul className="text-gray-700 space-y-1 ml-11">
                                                <li>• Verificar permeabilidad</li>
                                                <li>• Proteger columna cervical si hay trauma</li>
                                                <li>• Aspirar secreciones o sangre</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                                            <h3 className="text-lg font-bold text-blue-700 mb-2 flex items-center">
                                                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">B</span>
                                                BREATHING (Respiración)
                                            </h3>
                                            <ul className="text-gray-700 space-y-1 ml-11">
                                                <li>• Evaluar frecuencia y calidad respiratoria</li>
                                                <li>• Administrar oxígeno si hay hipoxia</li>
                                                <li>• Buscar signos de compromiso respiratorio</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
                                            <h3 className="text-lg font-bold text-green-700 mb-2 flex items-center">
                                                <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">C</span>
                                                CIRCULATION (Circulación)
                                            </h3>
                                            <ul className="text-gray-700 space-y-1 ml-11">
                                                <li>• Controlar hemorragias externas</li>
                                                <li>• Evaluar pulso y presión arterial</li>
                                                <li>• Buscar signos de shock</li>
                                                <li>• Monitorizar signos vitales</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                                            <h3 className="text-lg font-bold text-yellow-700 mb-2 flex items-center">
                                                <span className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">D</span>
                                                DISABILITY (Discapacidad)
                                            </h3>
                                            <ul className="text-gray-700 space-y-1 ml-11">
                                                <li>• Evaluar nivel de conciencia (AVPU)</li>
                                                <li>• Verificar pupilas y respuesta neurológica</li>
                                                <li>• Evaluar función motora</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
                                            <h3 className="text-lg font-bold text-purple-700 mb-2 flex items-center">
                                                <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">E</span>
                                                EXPOSURE (Exposición)
                                            </h3>
                                            <ul className="text-gray-700 space-y-1 ml-11">
                                                <li>• Exponer completamente el abdomen</li>
                                                <li>• Inspeccionar lesiones</li>
                                                <li>• Prevenir hipotermia</li>
                                                <li>• Examinar genitales si es relevante</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo específico por tipo de lesión */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaHandsHelping className="w-6 h-6 mr-2 text-orange-500" />
                                        Manejo Específico por Tipo de Lesión
                                    </h2>
                                    <div className="space-y-6">
                                        {/* Evisceración */}
                                        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-2 border-red-200">
                                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 mr-2" />
                                                Evisceración Abdominal
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                        <MdCheckCircle className="w-4 h-4 mr-2 text-green-600" />
                                                        QUÉ HACER:
                                                    </h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>Cubrir vísceras con apósito estéril <strong>húmedo</strong></li>
                                                        <li>Colocar apósito oclusivo encima</li>
                                                        <li>Fijar sin presionar</li>
                                                        <li>Posición supina con rodillas flexionadas</li>
                                                        <li>Traslado inmediato</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                        <FaExclamationTriangle className="w-4 h-4 mr-2 text-red-600" />
                                                        NUNCA HACER:
                                                    </h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Reintroducir órganos</li>
                                                        <li>Lavar las vísceras</li>
                                                        <li>Aplicar presión directa</li>
                                                        <li>Usar apósitos secos</li>
                                                        <li>Dar líquidos por boca</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Heridas penetrantes */}
                                        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-200">
                                            <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                                <FiAlertTriangle className="w-6 h-6 mr-2" />
                                                Heridas Penetrantes
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">Con Objeto Incrustado:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li><strong>NO retirar</strong> el objeto</li>
                                                        <li>Estabilizar con vendajes voluminosos</li>
                                                        <li>Controlar hemorragia alrededor del objeto</li>
                                                        <li>Monitorizar signos vitales</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">Sin Objeto Incrustado:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>Controlar hemorragia externa</li>
                                                        <li>Cubrir herida con apósito estéril</li>
                                                        <li>Evaluar posible evisceración</li>
                                                        <li>Preparar para traslado urgente</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lesiones genitourinarias */}
                                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                <GiKidneys className="w-6 h-6 mr-2" />
                                                Lesiones Genitourinarias
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Lesión Renal:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Buscar hematuria</li>
                                                        <li>Evaluar dolor en flancos</li>
                                                        <li>Monitorizar signos vitales</li>
                                                        <li>Posición de comodidad</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Lesión Genital:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Controlar hemorragia con presión directa</li>
                                                        <li>Cubrir con apósitos estériles</li>
                                                        <li>Conservar partes amputadas en hielo</li>
                                                        <li>Manejo del dolor</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Algoritmo de decisión */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <TbEmergencyBed className="w-6 h-6 mr-2 text-orange-500" />
                                        Algoritmo de Decisión de Transporte
                                    </h2>
                                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border">
                                        <div className="space-y-4">
                                            <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                                                <h3 className="font-bold text-red-700 mb-2">TRANSPORTE INMEDIATO (Código Rojo)</h3>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Evisceración</li>
                                                    <li>• Heridas penetrantes</li>
                                                    <li>• Signos de shock</li>
                                                    <li>• Hematuria con inestabilidad hemodinámica</li>
                                                    <li>• Distensión abdominal + inestabilidad</li>
                                                </ul>
                                            </div>
                                            <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                                                <h3 className="font-bold text-yellow-700 mb-2">TRANSPORTE URGENTE (Código Amarillo)</h3>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Dolor abdominal severo</li>
                                                    <li>• Hematuria sin inestabilidad</li>
                                                    <li>• Defensa abdominal</li>
                                                    <li>• Mecanismo de lesión de alto riesgo</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                                                <h3 className="font-bold text-green-700 mb-2">TRANSPORTE RUTINARIO (Código Verde)</h3>
                                                <ul className="text-gray-700 space-y-1">
                                                    <li>• Dolor abdominal leve</li>
                                                    <li>• Lesiones genitales menores</li>
                                                    <li>• Signos vitales estables</li>
                                                    <li>• Sin signos de compromiso</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Medicamentos y consideraciones */}
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <RiFirstAidKitFill className="w-6 h-6 text-indigo-600 mr-2" />
                                        <h3 className="text-xl font-bold text-indigo-800">Consideraciones Especiales</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-indigo-800 mb-2">Manejo del Dolor:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Analgesia según protocolos</li>
                                                <li>Evaluar contraindicaciones</li>
                                                <li>Monitorizar efectos adversos</li>
                                                <li>Documentar administración</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-indigo-800 mb-2">Prevención de Complicaciones:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evitar hipotermia</li>
                                                <li>Mantener NPO (nada por boca)</li>
                                                <li>Posición antishock si es necesario</li>
                                                <li>Comunicación con hospital receptor</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                {/* Introducción a casos clínicos */}
                                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <TbStethoscope className="w-8 h-8 text-teal-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-teal-700">Casos Clínicos Prácticos</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Analiza estos casos reales para <strong>desarrollar tu capacidad de evaluación</strong> y <strong>toma de decisiones</strong> en el manejo de lesiones abdominales y genitourinarias.
                                    </p>
                                </div>

                                {/* Caso 1: Trauma cerrado con shock */}
                                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-lg border border-red-200">
                                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-t-lg">
                                        <h3 className="text-xl font-bold flex items-center">
                                            <MdWarning className="w-6 h-6 mr-2" />
                                            Caso 1: Trauma Abdominal Cerrado con Shock
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                            <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                                <FiUser className="w-5 h-5 mr-2" />
                                                Información del Paciente:
                                            </h4>
                                            <p className="text-gray-700 mb-3">
                                                <strong>Hombre, 28 años, motociclista</strong> - Colisión frontal a 60 km/h sin casco.
                                                Se queja de dolor abdominal severo y dificultad para respirar.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-red-600 mb-1">Signos Vitales:</h5>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• FC: 130 lpm (taquicardia)</li>
                                                        <li>• TA: 85/50 mmHg (hipotensión)</li>
                                                        <li>• FR: 28 rpm (taquipnea)</li>
                                                        <li>• SpO₂: 94% (hipoxia leve)</li>
                                                        <li>• Temperatura: 36.2°C</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-red-600 mb-1">Examen Físico:</h5>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Consciente, ansioso, pálido</li>
                                                        <li>• Piel fría y sudorosa</li>
                                                        <li>• Abdomen distendido</li>
                                                        <li>• Dolor a la palpación en CSD</li>
                                                        <li>• Llenado capilar: 4 segundos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FiAlertTriangle className="w-4 h-4 mr-2" />
                                                    Análisis del Caso:
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Mecanismo:</strong> Trauma cerrado de alta energía</li>
                                                    <li>• <strong>Lesión probable:</strong> Ruptura hepática</li>
                                                    <li>• <strong>Complicación:</strong> Shock hipovolémico clase III</li>
                                                    <li>• <strong>Riesgo:</strong> Hemorragia interna masiva</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2" />
                                                    Manejo Correcto:
                                                </h4>
                                                <ol className="text-sm text-gray-700 space-y-1">
                                                    <li>1. Oxígeno al 100% con mascarilla</li>
                                                    <li>2. Dos accesos venosos calibre 14-16G</li>
                                                    <li>3. Posición supina con piernas elevadas</li>
                                                    <li>4. Monitorización continua</li>
                                                    <li>5. Traslado código rojo a trauma center</li>
                                                    <li>6. Comunicación con hospital receptor</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-red-100 rounded-lg border border-red-300">
                                            <h4 className="font-bold text-red-800 mb-2">Puntos Clave de Aprendizaje:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• La hipotensión + distensión abdominal + mecanismo de alta energía = sospecha de hemorragia interna</li>
                                                <li>• El shock clase III requiere intervención inmediata y traslado urgente</li>
                                                <li>• No hay tiempo para procedimientos no esenciales en campo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 2: Evisceración traumática */}
                                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg border border-orange-200">
                                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-t-lg">
                                        <h3 className="text-xl font-bold flex items-center">
                                            <FaExclamationTriangle className="w-6 h-6 mr-2" />
                                            Caso 2: Evisceración Abdominal
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                            <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                                                <FiUser className="w-5 h-5 mr-2" />
                                                Información del Paciente:
                                            </h4>
                                            <p className="text-gray-700 mb-3">
                                                <strong>Mujer, 32 años</strong> - Agresión con arma blanca (cuchillo) en abdomen.
                                                Se observan asas intestinales protruidas de la herida.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-orange-600 mb-1">Signos Vitales:</h5>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• FC: 105 lpm (taquicardia leve)</li>
                                                        <li>• TA: 110/75 mmHg (normal)</li>
                                                        <li>• FR: 22 rpm (taquipnea leve)</li>
                                                        <li>• SpO₂: 98% (normal)</li>
                                                        <li>• Escala de dolor: 8/10</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-orange-600 mb-1">Examen Físico:</h5>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Consciente, cooperativa, ansiosa</li>
                                                        <li>• Herida de 8 cm en línea media</li>
                                                        <li>• Intestino delgado eviscerado</li>
                                                        <li>• Sangrado moderado controlable</li>
                                                        <li>• Resto del abdomen blando</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2" />
                                                    Errores Comunes a Evitar:
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• ❌ Intentar reintroducir el intestino</li>
                                                    <li>• ❌ Lavar las vísceras con suero</li>
                                                    <li>• ❌ Usar apósitos secos</li>
                                                    <li>• ❌ Aplicar presión directa</li>
                                                    <li>• ❌ Dar líquidos por vía oral</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2" />
                                                    Técnica Correcta:
                                                </h4>
                                                <ol className="text-sm text-gray-700 space-y-1">
                                                    <li>1. Cubrir vísceras con apósito estéril húmedo</li>
                                                    <li>2. Colocar apósito oclusivo por encima</li>
                                                    <li>3. Fijar sin comprimir</li>
                                                    <li>4. Posición supina con rodillas flexionadas</li>
                                                    <li>5. Oxígeno suplementario</li>
                                                    <li>6. Analgesia según protocolos</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-orange-100 rounded-lg border border-orange-300">
                                            <h4 className="font-bold text-orange-800 mb-2">Puntos Clave de Aprendizaje:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• La evisceración requiere manejo específico para prevenir infección y desecación</li>
                                                <li>• Los apósitos húmedos mantienen la viabilidad de los tejidos</li>
                                                <li>• La posición con rodillas flexionadas reduce la tensión abdominal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 3: Lesión genitourinaria */}
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg border border-blue-200">
                                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-t-lg">
                                        <h3 className="text-xl font-bold flex items-center">
                                            <GiKidneys className="w-6 h-6 mr-2" />
                                            Caso 3: Lesión Renal con Hematuria
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                            <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                                <FiUser className="w-5 h-5 mr-2" />
                                                Información del Paciente:
                                            </h4>
                                            <p className="text-gray-700 mb-3">
                                                <strong>Adolescente, 16 años</strong> - Accidente en bicicleta de montaña, caída desde 3 metros.
                                                Impacto en flanco derecho contra roca. Orina con sangre visible.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-blue-600 mb-1">Signos Vitales:</h5>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• FC: 100 lpm (límite alto normal)</li>
                                                        <li>• TA: 125/80 mmHg (normal)</li>
                                                        <li>• FR: 18 rpm (normal)</li>
                                                        <li>• SpO₂: 99% (normal)</li>
                                                        <li>• Dolor: 6/10 en flanco derecho</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-blue-600 mb-1">Examen Físico:</h5>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Consciente, orientado, colaborador</li>
                                                        <li>• Dolor y sensibilidad en flanco derecho</li>
                                                        <li>• Hematuria macroscópica</li>
                                                        <li>• Abdomen blando, no distendido</li>
                                                        <li>• Sin hematomas externos visibles</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                                                <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                                                    <FiTarget className="w-4 h-4 mr-2" />
                                                    Diagnóstico Diferencial:
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• <strong>Probable:</strong> Contusión renal</li>
                                                    <li>• <strong>Posible:</strong> Laceración renal menor</li>
                                                    <li>• <strong>Descartar:</strong> Lesión de grandes vasos</li>
                                                    <li>• <strong>Considerar:</strong> Lesión vesical</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2" />
                                                    Manejo Apropiado:
                                                </h4>
                                                <ol className="text-sm text-gray-700 space-y-1">
                                                    <li>1. Monitorización continua de signos vitales</li>
                                                    <li>2. Posición de comodidad</li>
                                                    <li>3. Analgesia según protocolos</li>
                                                    <li>4. NO colocar sonda urinaria</li>
                                                    <li>5. Conservar muestra de orina</li>
                                                    <li>6. Traslado para evaluación urológica</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-300">
                                            <h4 className="font-bold text-blue-800 mb-2">Puntos Clave de Aprendizaje:</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• La hematuria después de trauma siempre requiere evaluación hospitalaria</li>
                                                <li>• NO colocar sonda urinaria si hay sospecha de lesión uretral</li>
                                                <li>• La estabilidad hemodinámica no excluye lesión renal significativa</li>
                                                <li>• El dolor en flanco puede irradiarse a genitales</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Ejercicio de toma de decisiones */}
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg border border-purple-200">
                                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
                                        <h3 className="text-xl font-bold flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2" />
                                            Ejercicio de Toma de Decisiones
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                            <h4 className="font-bold text-purple-700 mb-2">Escenario Complejo:</h4>
                                            <p className="text-gray-700">
                                                Múltiples pacientes en accidente de tráfico. Debes priorizar el tratamiento y transporte.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                <h4 className="font-semibold text-red-700 mb-2">Paciente A</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Evisceración abdominal</li>
                                                    <li>• FC: 120, TA: 100/60</li>
                                                    <li>• Consciente, dolor 9/10</li>
                                                    <li>• Sangrado moderado</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                                                    <strong>Prioridad:</strong> ¿Roja, Amarilla o Verde?
                                                </div>
                                            </div>
                                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                <h4 className="font-semibold text-yellow-700 mb-2">Paciente B</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Dolor abdominal moderado</li>
                                                    <li>• FC: 85, TA: 130/80</li>
                                                    <li>• Hematuria leve</li>
                                                    <li>• Estable</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-yellow-100 rounded text-xs">
                                                    <strong>Prioridad:</strong> ¿Roja, Amarilla o Verde?
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <h4 className="font-semibold text-blue-700 mb-2">Paciente C</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Herida penetrante</li>
                                                    <li>• FC: 140, TA: 70/40</li>
                                                    <li>• Disminución conciencia</li>
                                                    <li>• Piel fría y pálida</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-blue-100 rounded text-xs">
                                                    <strong>Prioridad:</strong> ¿Roja, Amarilla o Verde?
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-purple-100 rounded-lg border border-purple-300">
                                            <h4 className="font-bold text-purple-800 mb-2">Respuesta Correcta:</h4>
                                            <p className="text-sm text-gray-700">
                                                <strong>Orden de prioridad:</strong> C (Roja - shock severo), A (Roja - evisceración), B (Amarilla - estable).
                                                El paciente C tiene signos de shock clase III-IV y requiere atención inmediata.
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
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
                                                <span>{faq.question}</span>
                                                <ChevronUpIcon
                                                    className={`${open ? "transform rotate-180" : ""
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
                                    <li><a href="https://www.ems1.com/trauma-care/abdominal-trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre trauma abdominal</a></li>
                                    <li><a href="https://www.jems.com/patient-care/trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de trauma</a></li>
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

