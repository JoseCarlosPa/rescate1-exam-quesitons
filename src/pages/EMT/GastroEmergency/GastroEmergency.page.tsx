import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./GastroEmergency.questions.ts";
import {GiStomach, GiKidneys} from "react-icons/gi";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning, MdLocalHospital} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsHeartPulse} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaFirstAid} from "react-icons/fa";
import {FaDroplet} from "react-icons/fa6";
import {FiAlertTriangle, FiEye} from "react-icons/fi";
import {RiPulseLine} from "react-icons/ri";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function GastroEmergency() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'assessment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Emergencias Gastrointestinales y Urológicas EMT | Evaluación, Manejo y Casos Clínicos"
            description="Guía completa sobre emergencias gastrointestinales y urológicas para Técnicos en Atención Médica Prehospitalaria: dolor abdominal, evaluación OPQRST, manejo prehospitalario y casos clínicos. Aprende a identificar patologías abdominales críticas."
            keywords="emergencias gastrointestinales, emergencias urológicas, dolor abdominal, apendicitis, hemorragia digestiva, cólico renal, EMT, paramédicos, evaluación OPQRST, manejo prehospitalario, casos clínicos, abdomen agudo"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">{/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center items-center space-x-4">
                            <GiStomach className="w-20 h-20 mb-1 text-orange-500" />
                            <div className="text-4xl text-gray-400">+</div>
                            <GiKidneys className="w-20 h-20 mb-1 text-blue-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias gastrointestinales y urológicas</h1>
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
                            to="/gastro-emergency/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/18T_g5GGF53zlUk4dttnYHOVnWVUr577e/view?usp=drive_link"
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Emergencias Abdominales Críticas!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        El dolor abdominal representa <strong>hasta el 10%</strong> de todas las llamadas de emergencia.
                                        Condiciones como apendicitis, hemorragia digestiva o torsión testicular pueden ser <span className="text-red-600 font-bold">potencialmente mortales</span> si no se tratan a tiempo.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Apendicitis</p>
                                            <p className="text-sm">12-24 hrs para perforación</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaDroplet className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">Hemorragia GI</p>
                                            <p className="text-sm">Shock en minutos</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-yellow-600 mx-auto mb-2"/>
                                            <p className="font-bold text-yellow-600">Obstrucción</p>
                                            <p className="text-sm">Necrosis intestinal</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Enfoque OPQRST para dolor abdominal */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Evaluación OPQRST - Clave en Dolor Abdominal
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3">O-P-Q</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-blue-800">Onset (Inicio)</h4>
                                                    <p className="text-sm text-gray-600">• Súbito vs gradual<br/>• Qué estaba haciendo</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-800">Provocación</h4>
                                                    <p className="text-sm text-gray-600">• Empeora con movimiento<br/>• Mejora con posición</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-800">Calidad</h4>
                                                    <p className="text-sm text-gray-600">• Cólico, punzante, urente<br/>• Constante vs intermitente</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3">R-S</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-green-800">Región/Radiación</h4>
                                                    <p className="text-sm text-gray-600">• Localización exacta<br/>• ¿Se irradia? ¿Dónde?</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-green-800">Severidad</h4>
                                                    <p className="text-sm text-gray-600">• Escala 1-10<br/>• ¿Empeora progresivamente?</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-orange-700 mb-3">T</h3>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-orange-800">Tiempo</h4>
                                                    <p className="text-sm text-gray-600">• ¿Cuándo comenzó?<br/>• ¿Ha tenido antes?<br/>• ¿Está empeorando?</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Traslado INMEDIATO</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <FiEye className="w-4 h-4 mr-2"/>
                                                Signos Visuales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Abdomen rígido o distendido</li>
                                                <li>Signo de Cullen (periumbilical)</li>
                                                <li>Signo de Grey-Turner (flancos)</li>
                                                <li>Hematemesis o melena</li>
                                                <li>Palidez marcada o diaforesis</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <RiPulseLine className="w-4 h-4 mr-2"/>
                                                Signos Vitales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Taquicardia (FC &gt; 100)</li>
                                                <li>Hipotensión (TAS &lt; 90)</li>
                                                <li>Fiebre alta (&gt; 38.5°C)</li>
                                                <li>Taquipnea o bradipnea</li>
                                                <li>Alteración del estado mental</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Clasificación del dolor */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos de Dolor Abdominal</h2>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg border">
                                            <h3 className="font-bold text-blue-700 mb-3 text-center">VISCERAL</h3>
                                            <div className="space-y-2 text-sm">
                                                <p><strong>Características:</strong> Difuso, sordo, mal localizado</p>
                                                <p><strong>Causa:</strong> Distensión de órganos huecos</p>
                                                <p><strong>Ejemplos:</strong> Cólico intestinal, cólico biliar</p>
                                                <p><strong>Localización:</strong> Línea media</p>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-lg border">
                                            <h3 className="font-bold text-red-700 mb-3 text-center">PARIETAL</h3>
                                            <div className="space-y-2 text-sm">
                                                <p><strong>Características:</strong> Agudo, punzante, bien localizado</p>
                                                <p><strong>Causa:</strong> Irritación peritoneal</p>
                                                <p><strong>Ejemplos:</strong> Apendicitis, perforación</p>
                                                <p><strong>Localización:</strong> Punto específico</p>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg border">
                                            <h3 className="font-bold text-green-700 mb-3 text-center">REFERIDO</h3>
                                            <div className="space-y-2 text-sm">
                                                <p><strong>Características:</strong> Se siente lejos del órgano</p>
                                                <p><strong>Causa:</strong> Inervación compartida</p>
                                                <p><strong>Ejemplos:</strong> IAM → epigastrio</p>
                                                <p><strong>Localización:</strong> Dermatomas específicos</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Enfermedades abdominales comunes */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Emergencias Abdominales Comunes</h2>
                                    <div className="grid lg:grid-cols-2 gap-6 mb-6">
                                        {/* Peritonitis */}
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-300">
                                            <div className="flex items-center mb-3">
                                                <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                                                <h3 className="font-bold text-red-700 text-lg">PERITONITIS</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Definición:</h4>
                                                    <p className="text-sm text-gray-700">Inflamación del peritoneo por infección bacteriana o irritación química</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Causas principales:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Perforación apendicular</li>
                                                        <li>• Úlcera perforada</li>
                                                        <li>• Diverticulitis perforada</li>
                                                        <li>• Trauma abdominal penetrante</li>
                                                        <li>• Cirugía abdominal (complicación)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Signos clínicos:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Abdomen rígido "en tabla"</li>
                                                        <li>• Rebote positivo generalizado</li>
                                                        <li>• Fiebre alta, escalofríos</li>
                                                        <li>• Taquicardia, hipotensión</li>
                                                        <li>• Náuseas, vómitos</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-200 p-2 rounded text-xs font-bold text-red-900">
                                                    ⚠️ EMERGENCIA QUIRÚRGICA - Traslado inmediato
                                                </div>
                                            </div>
                                        </div>

                                        {/* Obstrucción intestinal */}
                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-300">
                                            <div className="flex items-center mb-3">
                                                <MdWarning className="w-6 h-6 text-orange-600 mr-2"/>
                                                <h3 className="font-bold text-orange-700 text-lg">OBSTRUCCIÓN INTESTINAL</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-1">Tipos:</h4>
                                                    <p className="text-sm text-gray-700">Mecánica (adherencias, hernias) vs Funcional (íleo paralítico)</p>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-1">Signos cardinales:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Dolor cólico intermitente</li>
                                                        <li>• Distensión abdominal</li>
                                                        <li>• Vómitos (biliosos/fecaloideos)</li>
                                                        <li>• Ausencia de gases/heces</li>
                                                        <li>• Ruidos intestinales aumentados</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-orange-200 p-2 rounded text-xs font-bold text-orange-900">
                                                    🕐 Riesgo de necrosis intestinal - Urgente
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pancreatitis */}
                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-300">
                                            <div className="flex items-center mb-3">
                                                <BsHeartPulse className="w-6 h-6 text-purple-600 mr-2"/>
                                                <h3 className="font-bold text-purple-700 text-lg">PANCREATITIS AGUDA</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-1">Causas principales:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Cálculos biliares (40%)</li>
                                                        <li>• Alcohol (30%)</li>
                                                        <li>• Medicamentos, trauma</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-1">Presentación clínica:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Dolor epigástrico intenso</li>
                                                        <li>• Irradiación a la espalda</li>
                                                        <li>• Náuseas, vómitos persistentes</li>
                                                        <li>• Fiebre, taquicardia</li>
                                                        <li>• Posición antálgica (encorvado)</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-purple-200 p-2 rounded text-xs font-bold text-purple-900">
                                                    💉 Requiere manejo del dolor - Hospitalización
                                                </div>
                                            </div>
                                        </div>

                                        {/* Colecistitis */}
                                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
                                            <div className="flex items-center mb-3">
                                                <MdLocalHospital className="w-6 h-6 text-yellow-600 mr-2"/>
                                                <h3 className="font-bold text-yellow-700 text-lg">COLECISTITIS AGUDA</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div>
                                                    <h4 className="font-semibold text-yellow-800 mb-1">Triada clásica:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Dolor hipocondrio derecho</li>
                                                        <li>• Fiebre y escalofríos</li>
                                                        <li>• Leucocitosis</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-yellow-800 mb-1">Signos específicos:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Signo de Murphy positivo</li>
                                                        <li>• Dolor post-ingesta grasosa</li>
                                                        <li>• Ictericia (si hay obstrucción)</li>
                                                        <li>• Náuseas, intolerancia oral</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-yellow-200 p-2 rounded text-xs font-bold text-yellow-900">
                                                    🏥 Cirugía temprana recomendada
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabla de diagnóstico diferencial */}
                                    <div className="bg-gray-50 p-6 rounded-lg border">
                                        <h4 className="font-bold text-gray-800 mb-4">Diagnóstico Diferencial Rápido para Paramédicos</h4>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg text-sm">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="py-2 px-3 border text-left">Patología</th>
                                                        <th className="py-2 px-3 border text-center">Localización</th>
                                                        <th className="py-2 px-3 border text-center">Tipo de dolor</th>
                                                        <th className="py-2 px-3 border text-center">Signo clave</th>
                                                        <th className="py-2 px-3 border text-center">Prioridad</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-2 px-3 border font-medium">Apendicitis</td>
                                                        <td className="py-2 px-3 border text-center">Periumbilical → FID</td>
                                                        <td className="py-2 px-3 border text-center">Constante, punzante</td>
                                                        <td className="py-2 px-3 border text-center">McBurney, rebote</td>
                                                        <td className="py-2 px-3 border text-center bg-yellow-100">ALTA</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-2 px-3 border font-medium">Peritonitis</td>
                                                        <td className="py-2 px-3 border text-center">Generalizado</td>
                                                        <td className="py-2 px-3 border text-center">Constante, severo</td>
                                                        <td className="py-2 px-3 border text-center">Abdomen rígido</td>
                                                        <td className="py-2 px-3 border text-center bg-red-100">CRÍTICA</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-2 px-3 border font-medium">Colecistitis</td>
                                                        <td className="py-2 px-3 border text-center">Hipocondrio D</td>
                                                        <td className="py-2 px-3 border text-center">Cólico → constante</td>
                                                        <td className="py-2 px-3 border text-center">Murphy positivo</td>
                                                        <td className="py-2 px-3 border text-center bg-yellow-100">ALTA</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-2 px-3 border font-medium">Pancreatitis</td>
                                                        <td className="py-2 px-3 border text-center">Epigastrio → espalda</td>
                                                        <td className="py-2 px-3 border text-center">Constante, intenso</td>
                                                        <td className="py-2 px-3 border text-center">Posición antálgica</td>
                                                        <td className="py-2 px-3 border text-center bg-orange-100">ALTA</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-2 px-3 border font-medium">Obstrucción</td>
                                                        <td className="py-2 px-3 border text-center">Periumbilical</td>
                                                        <td className="py-2 px-3 border text-center">Cólico intermitente</td>
                                                        <td className="py-2 px-3 border text-center">Distensión, vómitos</td>
                                                        <td className="py-2 px-3 border text-center bg-orange-100">ALTA</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-2 px-3 border font-medium">Cólico renal</td>
                                                        <td className="py-2 px-3 border text-center">Flanco → ingle</td>
                                                        <td className="py-2 px-3 border text-center">Cólico ondulante</td>
                                                        <td className="py-2 px-3 border text-center">Inquietud, hematuria</td>
                                                        <td className="py-2 px-3 border text-center bg-yellow-100">MEDIA</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Perlas Clínicas para Paramédicos</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluación completa SAMPLE</li>
                                                <li>Posición de confort (rodillas flexionadas)</li>
                                                <li>Monitoreo continuo de signos vitales</li>
                                                <li>Preparar para vómito</li>
                                                <li>NPO (nada por vía oral)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Aplicar calor local</li>
                                                <li>Dar analgésicos en campo</li>
                                                <li>Palpación profunda repetida</li>
                                                <li>Permitir alimentos o líquidos</li>
                                                <li>Subestimar la gravedad</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                {/* Datos Críticos para Paramédicos */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                        Anatomía Aplicada para Emergencias
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2">Nonantes Abdominales (9 Regiones):</h4>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <div className="grid grid-cols-3 gap-1 text-xs">
                                                    <div className="bg-orange-100 p-2 rounded text-center border">
                                                        <strong>HCD</strong><br/>
                                                        Hígado<br/>
                                                        Vesícula<br/>
                                                        Colon ascendente
                                                    </div>
                                                    <div className="bg-purple-100 p-2 rounded text-center border">
                                                        <strong>EPIGASTRIO</strong><br/>
                                                        Estómago<br/>
                                                        Páncreas<br/>
                                                        Duodeno
                                                    </div>
                                                    <div className="bg-blue-100 p-2 rounded text-center border">
                                                        <strong>HCI</strong><br/>
                                                        Bazo<br/>
                                                        Cola páncreas<br/>
                                                        Colon descendente
                                                    </div>
                                                    <div className="bg-yellow-100 p-2 rounded text-center border">
                                                        <strong>FLANCO D</strong><br/>
                                                        Riñón derecho<br/>
                                                        Colon ascendente<br/>
                                                        Intestino delgado
                                                    </div>
                                                    <div className="bg-pink-100 p-2 rounded text-center border">
                                                        <strong>MESOGASTRIO</strong><br/>
                                                        Ombligo<br/>
                                                        Intestino delgado<br/>
                                                        Aorta abdominal
                                                    </div>
                                                    <div className="bg-green-100 p-2 rounded text-center border">
                                                        <strong>FLANCO I</strong><br/>
                                                        Riñón izquierdo<br/>
                                                        Colon descendente<br/>
                                                        Intestino delgado
                                                    </div>
                                                    <div className="bg-red-100 p-2 rounded text-center border">
                                                        <strong>FID</strong><br/>
                                                        Apéndice<br/>
                                                        Ciego<br/>
                                                        Ovario D, útero
                                                    </div>
                                                    <div className="bg-indigo-100 p-2 rounded text-center border">
                                                        <strong>HIPOGASTRIO</strong><br/>
                                                        Vejiga<br/>
                                                        Útero<br/>
                                                        Recto-sigma
                                                    </div>
                                                    <div className="bg-teal-100 p-2 rounded text-center border">
                                                        <strong>FII</strong><br/>
                                                        Colon sigmoide<br/>
                                                        Ovario I<br/>
                                                        Uréter distal I
                                                    </div>
                                                </div>
                                                <div className="mt-2 text-xs text-gray-600 text-center">
                                                    <strong>Abreviaturas:</strong> HCD/HCI = Hipocondrio D/I, FID/FII = Fosa Iliaca D/I
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2">Dolor por Localización:</h4>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li><strong>Epigastrio:</strong> Estómago, páncreas, IAM</li>
                                                <li><strong>Hipocondrios:</strong> Hígado/vesícula (D), bazo (I)</li>
                                                <li><strong>Mesogastrio:</strong> Intestino delgado, apendicitis inicial</li>
                                                <li><strong>Flancos:</strong> Riñones, cólico ureteral</li>
                                                <li><strong>Hipogastrio:</strong> Vejiga, útero, recto</li>
                                                <li><strong>Fosas iliacas:</strong> Apéndice (D), sigma (I)</li>
                                                <li><strong>McBurney:</strong> Punto específico apendicitis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Sistema Gastrointestinal */}
                                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                                    <div className="md:w-2/3">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema Gastrointestinal</h2>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <h3 className="font-bold text-orange-700 mb-2">Tracto Alto</h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• <strong>Esófago:</strong> Varices, ruptura</li>
                                                    <li>• <strong>Estómago:</strong> Úlceras, gastritis</li>
                                                    <li>• <strong>Duodeno:</strong> Úlceras duodenales</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                                                    <strong>Sangrado:</strong> Hematemesis "café molido"
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="font-bold text-blue-700 mb-2">Tracto Bajo</h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• <strong>Intestino delgado:</strong> Obstrucción</li>
                                                    <li>• <strong>Colon:</strong> Diverticulitis</li>
                                                    <li>• <strong>Recto:</strong> Hemorroides, fisuras</li>
                                                </ul>
                                                <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                                                    <strong>Sangrado:</strong> Melena o hematoquecia
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-bold text-yellow-700 mb-2">Órganos Accesorios</h3>
                                            <div className="grid md:grid-cols-3 gap-3 text-sm">
                                                <div>
                                                    <strong>Hígado:</strong><br/>
                                                    - Hepatitis<br/>
                                                    - Trauma hepático
                                                </div>
                                                <div>
                                                    <strong>Vesícula:</strong><br/>
                                                    - Colecistitis<br/>
                                                    - Colelitiasis
                                                </div>
                                                <div>
                                                    <strong>Páncreas:</strong><br/>
                                                    - Pancreatitis<br/>
                                                    - Diabetes
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center">
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                                            <h4 className="font-bold mb-2">Fisiología Digestiva</h4>
                                            <div className="text-sm space-y-2 text-left">
                                                <div><strong>pH gástrico:</strong> 1.5-2.0</div>
                                                <div><strong>Vaciado gástrico:</strong> 2-4 hrs</div>
                                                <div><strong>Tránsito intestinal:</strong> 3-5 días</div>
                                                <div><strong>Bilis/día:</strong> 500-1000 ml</div>
                                                <div><strong>Jugo pancreático:</strong> 1-2 L/día</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sistema Urinario */}
                                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                                    <div className="md:w-2/3">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema Urinario</h2>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="font-bold text-blue-700 mb-2">Riñones</h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• <strong>Localización:</strong> T12-L3</li>
                                                    <li>• <strong>Función:</strong> Filtrar 180L/día</li>
                                                    <li>• <strong>Producen:</strong> 1-2L orina/día</li>
                                                    <li>• <strong>Patología:</strong> Cálculos, infección</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <h3 className="font-bold text-green-700 mb-2">Vías Urinarias</h3>
                                                <ul className="text-sm space-y-1">
                                                    <li>• <strong>Uréteres:</strong> 25-30 cm longitud</li>
                                                    <li>• <strong>Vejiga:</strong> Capacidad 400-600ml</li>
                                                    <li>• <strong>Uretra:</strong> ♂ 20cm, ♀ 4cm</li>
                                                    <li>• <strong>Patología:</strong> Obstrucción, ITU</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                            <h4 className="font-semibold text-yellow-800 mb-2">Puntos de Obstrucción Ureteral</h4>
                                            <ol className="list-decimal list-inside text-sm space-y-1">
                                                <li>Unión ureteropélvica</li>
                                                <li>Cruce con vasos ilíacos</li>
                                                <li>Unión ureterovesical</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 flex justify-center">
                                        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
                                            <h4 className="font-bold mb-2">Valores Normales</h4>
                                            <div className="text-sm space-y-2 text-left">
                                                <div><strong>Diuresis:</strong> 0.5-1 ml/kg/h</div>
                                                <div><strong>Creatinina:</strong> 0.6-1.2 mg/dl</div>
                                                <div><strong>BUN:</strong> 10-20 mg/dl</div>
                                                <div><strong>Glucosa orina:</strong> Negativa</div>
                                                <div><strong>Proteínas:</strong> &lt; 150 mg/día</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Correlación Clínica */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Correlación Anatómica - Clínica</h3>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2">Dolor Referido</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Vesícula → Escápula derecha</li>
                                                <li>• Riñón → Flanco y testículo</li>
                                                <li>• Apéndice → Periumbilical → CID</li>
                                                <li>• Diafragma → Hombro</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2">Irrigación Vascular</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Mesentérica superior → Intestino delgado</li>
                                                <li>• Mesentérica inferior → Colon</li>
                                                <li>• Renal → Riñones</li>
                                                <li>• Hepática → Hígado</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2">Inervación</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Simpática → T5-L2</li>
                                                <li>• Parasimpática → Vago, S2-S4</li>
                                                <li>• Dolor visceral → Poco localizado</li>
                                                <li>• Dolor parietal → Bien localizado</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'assessment' && (
                            <div className="space-y-8">
                                {/* Protocolo de evaluación */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <BsShield className="w-8 h-8 text-blue-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-blue-700">Protocolo de Evaluación Sistemática</h2>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-white p-5 rounded-lg shadow-sm">
                                            <h3 className="text-lg font-bold text-red-600 mb-3 text-center">1. PRIMARIA</h3>
                                            <ul className="space-y-2 text-sm">
                                                <li className="flex items-center">
                                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">A</div>
                                                    <span>Vía aérea + C-spine</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">B</div>
                                                    <span>Respiración, sat O₂</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">C</div>
                                                    <span>Circulación, pulsos</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">D</div>
                                                    <span>Neurológico, Glasgow</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">E</div>
                                                    <span>Exposición, temperatura</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg shadow-sm">
                                            <h3 className="text-lg font-bold text-orange-600 mb-3 text-center">2. SECUNDARIA</h3>
                                            <ul className="space-y-2 text-sm">
                                                <li><strong>SAMPLE:</strong> Síntomas, alergias, medicamentos</li>
                                                <li><strong>OPQRST:</strong> Dolor abdominal detallado</li>
                                                <li><strong>Signos vitales:</strong> Cada 5-15 minutos</li>
                                                <li><strong>Examen físico:</strong> Abdomen, genitales</li>
                                                <li><strong>Glucometría:</strong> Si alteración mental</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg shadow-sm">
                                            <h3 className="text-lg font-bold text-green-600 mb-3 text-center">3. MONITOREO</h3>
                                            <ul className="space-y-2 text-sm">
                                                <li><strong>Continuo:</strong> Signos vitales, dolor</li>
                                                <li><strong>Reevaluación:</strong> Cada 5 minutos</li>
                                                <li><strong>Documentación:</strong> Evolución síntomas</li>
                                                <li><strong>Comunicación:</strong> Hospital receptor</li>
                                                <li><strong>Transporte:</strong> Posición confort</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Examen físico específico */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Examen Físico del Abdomen</h2>
                                    <div className="grid lg:grid-cols-4 gap-6 mb-6">
                                        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                                            <h3 className="font-bold text-blue-700 mb-3 text-center">1. INSPECCIÓN</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Distensión abdominal</li>
                                                <li>• Cicatrices quirúrgicas</li>
                                                <li>• Coloración de piel</li>
                                                <li>• Movimientos respiratorios</li>
                                                <li>• Equimosis (Cullen, Grey-Turner)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                                            <h3 className="font-bold text-green-700 mb-3 text-center">2. AUSCULTACIÓN</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Ruidos intestinales</li>
                                                <li>• Ausentes = íleo</li>
                                                <li>• Aumentados = obstrucción</li>
                                                <li>• Soplos vasculares</li>
                                                <li>• Duración: 2 minutos mínimo</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                                            <h3 className="font-bold text-yellow-700 mb-3 text-center">3. PERCUSIÓN</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Timpanismo = gas</li>
                                                <li>• Matidez = masa/líquido</li>
                                                <li>• Límites hepáticos</li>
                                                <li>• Puño-percusión renal</li>
                                                <li>• Límites de órganos</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                                            <h3 className="font-bold text-red-700 mb-3 text-center">4. PALPACIÓN</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Superficial primero</li>
                                                <li>• Dolor, defensa</li>
                                                <li>• Rigidez muscular</li>
                                                <li>• Rebote positivo</li>
                                                <li>• Masas palpables</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Maniobras especiales */}
                                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Maniobras Especiales para Paramédicos</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-indigo-700 mb-3">Dolor Abdominal</h4>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <strong className="text-red-600">Signo de Blumberg:</strong>
                                                    <p className="text-sm text-gray-700">Dolor al retirar la mano (rebote). Indica irritación peritoneal.</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <strong className="text-orange-600">Punto de McBurney:</strong>
                                                    <p className="text-sm text-gray-700">1/3 entre ombligo y espina iliaca anterior superior. Apendicitis.</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <strong className="text-blue-600">Signo de Murphy:</strong>
                                                    <p className="text-sm text-gray-700">Dolor en inspiración profunda + palpación CSD. Colecistitis.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-indigo-700 mb-3">Evaluación Urológica</h4>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <strong className="text-green-600">Puño-percusión:</strong>
                                                    <p className="text-sm text-gray-700">Dolor costovertebral. Pielonefritis o cólico renal.</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <strong className="text-purple-600">Palpación vejiga:</strong>
                                                    <p className="text-sm text-gray-700">Distensión suprapúbica. Retención urinaria.</p>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <strong className="text-yellow-600">Examen genital:</strong>
                                                    <p className="text-sm text-gray-700">Testículos, hernias. Torsión testicular = emergencia.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Algoritmo de triage */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Algoritmo de Triage Prehospitalario</h2>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div className="bg-red-100 border-2 border-red-400 p-5 rounded-lg">
                                            <h3 className="font-bold text-red-700 mb-3 text-center flex items-center justify-center">
                                                <MdLocalHospital className="w-5 h-5 mr-2"/>
                                                CRÍTICO - Código Rojo
                                            </h3>
                                            <ul className="text-sm space-y-2">
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                                    Shock (TAS &lt; 90, FC &gt; 120)
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                                    Hematemesis masiva
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                                    Abdomen rígido + signos peritoneales
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                                    Alteración estado mental
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                                    Signos de Cullen/Grey-Turner
                                                </li>
                                            </ul>
                                            <div className="mt-3 p-2 bg-red-200 rounded text-xs font-bold">
                                                ⚡ Traslado inmediato, ALS intercept
                                            </div>
                                        </div>
                                        <div className="bg-yellow-100 border-2 border-yellow-400 p-5 rounded-lg">
                                            <h3 className="font-bold text-yellow-700 mb-3 text-center flex items-center justify-center">
                                                <MdWarning className="w-5 h-5 mr-2"/>
                                                URGENTE - Código Amarillo
                                            </h3>
                                            <ul className="text-sm space-y-2">
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                    Dolor severo (8-10/10)
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                    Vómito persistente
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                    Fiebre alta (&gt; 38.5°C)
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                    Deshidratación moderada
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                                    Hematuria macroscópica
                                                </li>
                                            </ul>
                                            <div className="mt-3 p-2 bg-yellow-200 rounded text-xs font-bold">
                                                🚨 Traslado prioritario (&lt; 30 min)
                                            </div>
                                        </div>
                                        <div className="bg-green-100 border-2 border-green-400 p-5 rounded-lg">
                                            <h3 className="font-bold text-green-700 mb-3 text-center flex items-center justify-center">
                                                <MdCheckCircle className="w-5 h-5 mr-2"/>
                                                ESTABLE - Código Verde
                                            </h3>
                                            <ul className="text-sm space-y-2">
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    Dolor leve-moderado (&lt; 7/10)
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    Signos vitales estables
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    Síntomas crónicos reagudizados
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    ITU no complicada
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                                    Tolerancia oral conservada
                                                </li>
                                            </ul>
                                            <div className="mt-3 p-2 bg-green-200 rounded text-xs font-bold">
                                                ✅ Traslado rutinario
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tratamiento prehospitalario */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsHeartPulse className="w-6 h-6 text-blue-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-blue-800">Manejo Prehospitalario por Prioridad</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Medidas Generales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>Posición de confort (decúbito con rodillas flexionadas)</li>
                                                <li>NPO absoluto - no alimentos ni líquidos</li>
                                                <li>Monitorización continua signos vitales</li>
                                                <li>Acceso vascular si signos de shock</li>
                                                <li>Oxígeno si SpO₂ &lt; 94% o distrés</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                Contraindicaciones Absolutas:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>NO aplicar calor local en abdomen</li>
                                                <li>NO administrar analgésicos</li>
                                                <li>NO dar antiemético sin orden médica</li>
                                                <li>NO palpación profunda repetida</li>
                                                <li>NO enemas o laxantes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaFirstAid className="w-6 h-6 mr-2 text-red-500"/>
                                    Casos Clínicos Interactivos - Aprende con Experiencias Reales
                                </h2>
                                
                                {/* Caso 1: Apendicitis */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                                    <div className="flex items-center mb-3">
                                        <MdWarning className="w-6 h-6 text-red-500 mr-2"/>
                                        <h3 className="text-xl font-semibold text-red-700">Caso 1: Apendicitis Aguda</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4 border">
                                        <p className="italic text-gray-600 mb-3">
                                            <strong>Escenario:</strong> Mujer de 22 años, estudiante universitaria. Llamada por dolor abdominal que inició hace 12 horas. 
                                            Inicialmente periumbilical, ahora localizado en fosa iliaca derecha. Náuseas y un episodio de vómito.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Evaluación Inicial:</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li><strong>A:</strong> Vía aérea permeable, habla con frases completas</li>
                                                    <li><strong>B:</strong> FR 22/min, SpO₂ 98% aire ambiente</li>
                                                    <li><strong>C:</strong> FC 105/min, TA 120/75 mmHg, pulsos fuertes</li>
                                                    <li><strong>D:</strong> Alerta, orientada, Glasgow 15/15</li>
                                                    <li><strong>E:</strong> Temp 38.1°C, posición antálgica</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">OPQRST:</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li><strong>O:</strong> Inicio gradual hace 12 hrs</li>
                                                    <li><strong>P:</strong> Empeora con movimiento, tos</li>
                                                    <li><strong>Q:</strong> Constante, punzante</li>
                                                    <li><strong>R:</strong> FID, sin irradiación</li>
                                                    <li><strong>S:</strong> 8/10</li>
                                                    <li><strong>T:</strong> Empeorando progresivamente</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-yellow-100 rounded">
                                            <h4 className="font-semibold text-yellow-800 mb-2">Hallazgos Físicos:</h4>
                                            <p className="text-sm text-gray-700">
                                                Dolor intenso a la palpación en punto de McBurney. Rebote positivo. Defensa muscular localizada. 
                                                Signo de Rovsing positivo (dolor en FID al palpar FII).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-green-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-800 mb-2">✅ Manejo Correcto:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li>Posición de confort (rodillas flexionadas)</li>
                                                <li>NPO absoluto</li>
                                                <li>Monitoreo signos vitales cada 5 min</li>
                                                <li>Preparar equipo para vómito</li>
                                                <li>Notificación inmediata hospital</li>
                                                <li>Traslado código amarillo</li>
                                            </ol>
                                        </div>
                                        <div className="bg-red-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-red-800 mb-2">❌ Errores Comunes:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Dar analgésicos "para el dolor"</li>
                                                <li>Aplicar calor local</li>
                                                <li>Palpación abdominal repetida</li>
                                                <li>Subestimar por la edad</li>
                                                <li>Permitir ingesta oral</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-blue-100 rounded">
                                        <h4 className="font-semibold text-blue-800">💡 Perla Educativa:</h4>
                                        <p className="text-sm text-gray-700">
                                            La apendicitis es la urgencia quirúrgica abdominal más común en jóvenes. El dolor migra de periumbilical a FID en el 65% de casos. 
                                            La perforación ocurre en 12-24 horas, especialmente en extremos de edad.
                                        </p>
                                    </div>
                                </div>

                                {/* Caso 2: Hemorragia Digestiva */}
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg shadow-md border-l-4 border-red-600">
                                    <div className="flex items-center mb-3">
                                        <FaDroplet className="w-6 h-6 text-red-600 mr-2"/>
                                        <h3 className="text-xl font-semibold text-red-700">Caso 2: Hemorragia Digestiva Alta</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4 border">
                                        <p className="italic text-gray-600 mb-3">
                                            <strong>Escenario:</strong> Hombre de 58 años, antecedente de cirrosis hepática por alcohol. Llamada por vómito con sangre. 
                                            Familiar reporta 3 episodios de hematemesis en las últimas 2 horas.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Evaluación Inicial:</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li><strong>A:</strong> Permeable, respiraciones laboriosas</li>
                                                    <li><strong>B:</strong> FR 28/min, SpO₂ 94% aire ambiente</li>
                                                    <li><strong>C:</strong> FC 125/min, TA 85/50 mmHg, pulsos débiles</li>
                                                    <li><strong>D:</strong> Somnoliento, responde a estímulos</li>
                                                    <li><strong>E:</strong> Piel fría, húmeda, palidez marcada</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Hallazgos Adicionales:</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>Abdomen distendido, ascitis</li>
                                                    <li>Ictericia escleral</li>
                                                    <li>Telangiectasias (arañas vasculares)</li>
                                                    <li>Melena en ropa del paciente</li>
                                                    <li>Llenado capilar &gt; 3 segundos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-green-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-800 mb-2">🚨 Manejo Emergente:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li>Oxígeno alto flujo (15L mascarilla)</li>
                                                <li>Posición lateral de seguridad</li>
                                                <li>Dos accesos IV calibre grueso</li>
                                                <li>Aspiración continua disponible</li>
                                                <li>Monitoreo intensivo</li>
                                                <li>Traslado código rojo + ALS intercept</li>
                                            </ol>
                                        </div>
                                        <div className="bg-orange-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-orange-800 mb-2">⚠️ Signos de Shock:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Taquicardia compensatoria</li>
                                                <li>Hipotensión (pérdida &gt; 30% volemia)</li>
                                                <li>Alteración estado mental</li>
                                                <li>Oliguria/anuria</li>
                                                <li>Piel fría, húmeda</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-purple-100 rounded">
                                        <h4 className="font-semibold text-purple-800">📚 Fisiopatología:</h4>
                                        <p className="text-sm text-gray-700">
                                            En cirrosis, la hipertensión portal causa varices esofágicas. Su ruptura puede ser masiva (2-6L sangre). 
                                            La mortalidad es del 30-50% en primer episodio.
                                        </p>
                                    </div>
                                </div>

                                {/* Caso 3: Cólico Renal */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                                    <div className="flex items-center mb-3">
                                        <GiKidneys className="w-6 h-6 text-blue-500 mr-2"/>
                                        <h3 className="text-xl font-semibold text-blue-700">Caso 3: Cólico Renal</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4 border">
                                        <p className="italic text-gray-600 mb-3">
                                            <strong>Escenario:</strong> Hombre de 35 años, ejecutivo. Despertó a las 3 AM con dolor lumbar derecho severo 
                                            que se irradia a ingle. Se encuentra inquieto, no puede encontrar posición cómoda.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Evaluación:</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li><strong>A:</strong> Permeable, quejidos de dolor</li>
                                                    <li><strong>B:</strong> FR 20/min, SpO₂ 99%</li>
                                                    <li><strong>C:</strong> FC 98/min, TA 145/90 mmHg</li>
                                                    <li><strong>D:</strong> Alerta, ansioso por el dolor</li>
                                                    <li><strong>E:</strong> Inquieto, sudoroso, temp normal</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Características del Dolor:</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>Inicio súbito</li>
                                                    <li>Tipo cólico (ondas)</li>
                                                    <li>Intensidad 9/10</li>
                                                    <li>Irradiación flanco → ingle → testículo</li>
                                                    <li>Náuseas sin vómito</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-blue-100 rounded">
                                            <h4 className="font-semibold text-blue-800 mb-2">Hallazgos:</h4>
                                            <p className="text-sm text-gray-700">
                                                Puño-percusión positiva derecha. Hematuria microscópica. Sin fiebre. 
                                                Antecedente de cálculos renales hace 2 años.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-green-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-800 mb-2">✅ Manejo Adecuado:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li>Posición de confort (cualquiera que alivie)</li>
                                                <li>Monitoreo signos vitales</li>
                                                <li>Preparar antiemético si disponible</li>
                                                <li>NPO por las náuseas</li>
                                                <li>Traslado para analgesia</li>
                                                <li>Documentar características orina</li>
                                            </ol>
                                        </div>
                                        <div className="bg-yellow-100 p-4 rounded-lg">
                                            <h4 className="font-bold text-yellow-800 mb-2">🎯 Puntos Clave:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Dolor más severo que IAM</li>
                                                <li>Inquietud vs rigidez (apendicitis)</li>
                                                <li>Hematuria presente 85% casos</li>
                                                <li>Puede simular otras patologías</li>
                                                <li>Complicación: hidronefrosis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Desafío de Triage */}
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-purple-500 mr-2"/>
                                        <h3 className="text-xl font-semibold text-purple-700">🎯 Desafío de Triage - ¿Puedes Decidir Correctamente?</h3>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                            <h4 className="font-bold text-gray-800 mb-2">Paciente A</h4>
                                            <p className="text-sm text-gray-600 mb-2">♀ 45 años, dolor epigástrico post-comida, náuseas, signos vitales normales</p>
                                            <div className="text-xs bg-gray-100 p-2 rounded">¿Código Verde, Amarillo o Rojo?</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                            <h4 className="font-bold text-gray-800 mb-2">Paciente B</h4>
                                            <p className="text-sm text-gray-600 mb-2">♂ 70 años, melena, FC 110, TA 100/60, mareo al incorporarse</p>
                                            <div className="text-xs bg-gray-100 p-2 rounded">¿Código Verde, Amarillo o Rojo?</div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                                            <h4 className="font-bold text-gray-800 mb-2">Paciente C</h4>
                                            <p className="text-sm text-gray-600 mb-2">♂ 28 años, dolor testicular súbito 10/10, náuseas, testículo elevado</p>
                                            <div className="text-xs bg-gray-100 p-2 rounded">¿Código Verde, Amarillo o Rojo?</div>
                                        </div>
                                    </div>
                                    <div className="mt-4 p-3 bg-purple-100 rounded text-sm">
                                        <strong>Respuestas:</strong> A = Verde (probable dispepsia), B = Amarillo/Rojo (sangrado GI con ortostatismo), 
                                        C = Rojo (posible torsión testicular = emergencia urológica)
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
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/gastrointestinal-emergencies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias gastrointestinales</a></li>
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

