import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./GeriatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import { FaPersonCane, FaBrain, FaThermometer } from "react-icons/fa6";
import { FaExclamationTriangle, FaHeartbeat } from "react-icons/fa";
import { FiAlertTriangle, FiActivity } from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function GeriatricEmergencies(){
    const [activeTab, setActiveTab] = useState<'fundamentals' | 'assessment' | 'conditions' | 'management' | 'cases'>('fundamentals');

    return(
        <SEOWrapper
            title="Emergencias Geriátricas EMT | Evaluación, Patologías y Manejo del Adulto Mayor"
            description="Guía completa sobre emergencias geriátricas para Técnicos en Atención Médica Prehospitalaria: cambios fisiológicos, evaluación especializada, patologías frecuentes, manejo farmacológico y casos clínicos del adulto mayor."
            keywords="emergencias geriátricas, EMT, paramédicos, adulto mayor, gerontología, polifarmacia, delirium, demencia, hipotermia, caídas, síndrome coronario agudo, evaluación geriátrica, maltrato del adulto mayor"
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
                            <FaPersonCane className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Geriátricas</h1>
                        <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
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
                            to={`${AllRoutes.GERIATRIC_EMERGENCIES}/exam`}
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
                        <a href="https://drive.google.com/file/d/1MTFiXaXBdj2rxm97_UjT09NJvxfNNpT9/view?usp=drive_link"
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
                                onClick={() => setActiveTab('fundamentals')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'fundamentals' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Fundamentos
                            </button>
                            <button
                                onClick={() => setActiveTab('assessment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'assessment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación Geriátrica
                            </button>
                            <button
                                onClick={() => setActiveTab('conditions')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'conditions' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Patologías Frecuentes
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo Especial
                            </button>
                            <button
                                onClick={() => setActiveTab('cases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'cases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Casos Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'fundamentals' && (
                            <div className="space-y-8">
                                {/* Importancia crítica del tema */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">¡Realidad Demográfica!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        Para 2030, el <strong>20% de la población</strong> será mayor de 65 años. 
                                        Los adultos mayores representan el <span className="text-red-600 font-bold">40-50%</span> 
                                        de las emergencias médicas.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">3x más</p>
                                            <p className="text-sm">Probabilidad de hospitalización</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">5x más</p>
                                            <p className="text-sm">Tiempo de recuperación</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">2x más</p>
                                            <p className="text-sm">Mortalidad por emergencias</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Envejecimiento vs Enfermedad */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Envejecimiento Normal vs Patológico
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">
                                                ✓ ENVEJECIMIENTO NORMAL
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Disminución gradual de funciones</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Mantiene independencia funcional</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Adaptación a cambios</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Funciones cognitivas preservadas</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 text-center">
                                                ⚠️ ENVEJECIMIENTO PATOLÓGICO
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Deterioro funcional significativo</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Pérdida de independencia</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Enfermedades múltiples</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Deterioro cognitivo</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Principales cambios fisiológicos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                                        Cambios Fisiológicos del Envejecimiento
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700 flex items-center">
                                                <FaHeartbeat className="w-5 h-5 mr-2"/>
                                                Sistema Cardiovascular
                                            </h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Disminución del gasto cardíaco (25-30%)</li>
                                                <li>Rigidez arterial aumentada</li>
                                                <li>Hipertensión sistólica aislada</li>
                                                <li>Menor respuesta a catecolaminas</li>
                                                <li>Arritmias más frecuentes</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700 flex items-center">
                                                <FiActivity className="w-5 h-5 mr-2"/>
                                                Sistema Respiratorio
                                            </h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Pérdida de elasticidad pulmonar</li>
                                                <li>Disminución de la capacidad vital (40%)</li>
                                                <li>Debilitamiento muscular respiratorio</li>
                                                <li>Menor eficiencia del intercambio gaseoso</li>
                                                <li>Reducción del reflejo de tos</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700 flex items-center">
                                                <FaBrain className="w-5 h-5 mr-2"/>
                                                Sistema Nervioso
                                            </h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Pérdida de masa cerebral (10%)</li>
                                                <li>Disminución de neurotransmisores</li>
                                                <li>Alteración de reflejos</li>
                                                <li>Cambios en memoria a corto plazo</li>
                                                <li>Alteración del equilibrio</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700 flex items-center">
                                                <FaThermometer className="w-5 h-5 mr-2"/>
                                                Sistema Renal/Endocrino
                                            </h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Reducción de la filtración glomerular</li>
                                                <li>Pérdida de la capacidad de concentración</li>
                                                <li>Termorregulación alterada</li>
                                                <li>Metabolismo de medicamentos más lento</li>
                                                <li>Deshidratación más frecuente</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Conceptos clave para paramédicos */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Conceptos Clave para Paramédicos</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Reserva Funcional:</h4>
                                            <p className="text-gray-700 mb-2">
                                                Los adultos mayores tienen menor capacidad de respuesta al estrés. 
                                                Una enfermedad menor puede descompensar múltiples sistemas.
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Presentación Atípica:</h4>
                                            <p className="text-gray-700 mb-2">
                                                Los síntomas clásicos pueden estar ausentes. La confusión puede ser 
                                                el único signo de infección, infarto o crisis metabólica.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Principios de atención */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Principios de Atención Geriátrica</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Enfoque Integral:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluación completa de sistemas</li>
                                                <li>Considerar múltiples diagnósticos</li>
                                                <li>Valorar estado funcional previo</li>
                                                <li>Incluir al cuidador en la evaluación</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Prevención de Complicaciones:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Prevenir caídas durante el transporte</li>
                                                <li>Mantener temperatura corporal</li>
                                                <li>Proteger la integridad de la piel</li>
                                                <li>Preservar la dignidad del paciente</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'assessment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cambios fisiológicos del envejecimiento</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Sistema cardiovascular</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Disminución de la frecuencia cardíaca máxima</li>
                                                <li>Rigidez arterial aumentada</li>
                                                <li>Menor capacidad de adaptación al estrés</li>
                                                <li>Aumento de la presión arterial sistólica</li>
                                                <li>Disminución del gasto cardíaco</li>
                                                <li>Mayor riesgo de arritmias</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Sistema respiratorio</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Pérdida de elasticidad pulmonar</li>
                                                <li>Disminución de la capacidad vital</li>
                                                <li>Reducción del intercambio gaseoso</li>
                                                <li>Debilitamiento de músculos respiratorios</li>
                                                <li>Menor respuesta a hipoxia y hipercapnia</li>
                                                <li>Aumento del riesgo de aspiración</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Sistema nervioso</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Disminución de la masa cerebral</li>
                                                <li>Reducción de neurotransmisores</li>
                                                <li>Alteración de los reflejos</li>
                                                <li>Cambios en el equilibrio y coordinación</li>
                                                <li>Alteración del ciclo sueño-vigilia</li>
                                                <li>Mayor susceptibilidad a delirium</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Sistema renal</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Disminución de la función renal</li>
                                                <li>Reducción de la capacidad de concentración</li>
                                                <li>Mayor riesgo de deshidratación</li>
                                                <li>Alteración del equilibrio electrolítico</li>
                                                <li>Metabolismo más lento de medicamentos</li>
                                                <li>Menor capacidad de adaptación al estrés</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación específica del paciente geriátrico</h2>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Presentación atípica de enfermedades</h3>
                                            <p className="text-gray-700 mb-2">
                                                Los adultos mayores frecuentemente presentan síntomas atípicos o ausentes:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Infarto al miocardio sin dolor torácico</li>
                                                <li>Neumonía sin fiebre</li>
                                                <li>Infecciones sin leucocitosis</li>
                                                <li>Depresión que simula demencia</li>
                                                <li>Delirium que simula demencia</li>
                                            </ul>
                                        </div>

                                        <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Signos de alarma específicos</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Cambios súbitos en el estado mental</li>
                                                    <li>Deterioro funcional agudo</li>
                                                    <li>Caídas recurrentes</li>
                                                    <li>Incontinencia de nueva aparición</li>
                                                    <li>Pérdida de peso inexplicable</li>
                                                </ul>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Aislamiento social súbito</li>
                                                    <li>Descuido del autocuidado</li>
                                                    <li>Cambios en patrones de sueño</li>
                                                    <li>Pérdida de apetito</li>
                                                    <li>Agitación o apatía nuevas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Historia clínica especializada</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Información esencial</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Medicamentos:</strong> Lista completa incluyendo OTC</li>
                                                <li><strong>Alergias:</strong> Medicamentos y alimentos</li>
                                                <li><strong>Historia médica:</strong> Comorbilidades múltiples</li>
                                                <li><strong>Estado funcional basal:</strong> Actividades de la vida diaria</li>
                                                <li><strong>Estado cognitivo basal:</strong> Demencia conocida</li>
                                                <li><strong>Soporte social:</strong> Cuidadores, familia</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Fuentes de información</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Familia/cuidadores:</strong> Información más confiable</li>
                                                <li><strong>Documentos médicos:</strong> Lista de medicamentos</li>
                                                <li><strong>Servicios de emergencia previos:</strong> Historial</li>
                                                <li><strong>Médico de cabecera:</strong> Contactar si es posible</li>
                                                <li><strong>Farmacia:</strong> Lista de medicamentos</li>
                                                <li><strong>Observación del entorno:</strong> Signos de descuido</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación del estado mental</h2>
                                    <div className="space-y-4">
                                        <div className="bg-indigo-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-indigo-700">Escala de Glasgow modificada para geriatría</h3>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white">
                                                    <thead>
                                                        <tr className="bg-gray-100">
                                                            <th className="py-2 px-4 border">Respuesta</th>
                                                            <th className="py-2 px-4 border">Puntuación</th>
                                                            <th className="py-2 px-4 border">Consideraciones geriátricas</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="py-2 px-4 border font-medium">Apertura ocular</td>
                                                            <td className="py-2 px-4 border">1-4</td>
                                                            <td className="py-2 px-4 border">Considerar problemas visuales</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-2 px-4 border font-medium">Respuesta verbal</td>
                                                            <td className="py-2 px-4 border">1-5</td>
                                                            <td className="py-2 px-4 border">Considerar problemas auditivos</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-2 px-4 border font-medium">Respuesta motora</td>
                                                            <td className="py-2 px-4 border">1-6</td>
                                                            <td className="py-2 px-4 border">Considerar limitaciones articulares</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-700">Diferenciación: Delirium vs. Demencia vs. Depresión</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-red-100 p-3 rounded">
                                                    <h4 className="font-medium text-red-700 mb-2">Delirium</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Inicio agudo</li>
                                                        <li>• Fluctuante</li>
                                                        <li>• Alteración de conciencia</li>
                                                        <li>• Reversible</li>
                                                        <li>• Causa médica</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-100 p-3 rounded">
                                                    <h4 className="font-medium text-blue-700 mb-2">Demencia</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Inicio gradual</li>
                                                        <li>• Progresivo</li>
                                                        <li>• Conciencia normal</li>
                                                        <li>• Irreversible</li>
                                                        <li>• Deterioro cognitivo</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-green-100 p-3 rounded">
                                                    <h4 className="font-medium text-green-700 mb-2">Depresión</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Inicio variable</li>
                                                        <li>• Episódico</li>
                                                        <li>• Conciencia normal</li>
                                                        <li>• Tratable</li>
                                                        <li>• Alteración del ánimo</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones especiales en la evaluación</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="bg-pink-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-pink-700">Comunicación efectiva</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Hablar despacio y claramente</li>
                                                    <li>Mantener contacto visual</li>
                                                    <li>Usar preguntas simples</li>
                                                    <li>Permitir tiempo para responder</li>
                                                    <li>Verificar comprensión auditiva</li>
                                                    <li>Usar lenguaje apropiado para la edad</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-cyan-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-cyan-700">Examen físico adaptado</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Exposición gradual para evitar hipotermia</li>
                                                    <li>Movimientos suaves y graduales</li>
                                                    <li>Consideración de limitaciones articulares</li>
                                                    <li>Evaluación de la piel (úlceras, hematomas)</li>
                                                    <li>Atención a signos de maltrato</li>
                                                    <li>Evaluación del estado nutricional</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'conditions' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias cardiovasculares en geriatría</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Síndrome coronario agudo</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Presentación atípica frecuente</li>
                                                <li>Puede manifestarse como disnea</li>
                                                <li>Confusión o síncope</li>
                                                <li>Fatiga o debilidad</li>
                                                <li>Dolor epigástrico</li>
                                                <li>Mayor mortalidad</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Insuficiencia cardíaca</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Disnea progresiva</li>
                                                <li>Edema en extremidades inferiores</li>
                                                <li>Ortopnea y disnea paroxística nocturna</li>
                                                <li>Fatiga y debilidad</li>
                                                <li>Distensión venosa yugular</li>
                                                <li>Tos nocturna persistente</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Arritmias</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Fibrilación auricular más común</li>
                                                <li>Síncope o presíncope</li>
                                                <li>Palpitaciones</li>
                                                <li>Alteración del estado mental</li>
                                                <li>Mayor riesgo embólico</li>
                                                <li>Intolerancia al ejercicio</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Crisis hipertensiva</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>PA &gt;180/120 mmHg</li>
                                                <li>Cefalea severa</li>
                                                <li>Alteraciones visuales</li>
                                                <li>Confusión o cambios neurológicos</li>
                                                <li>Disnea por edema pulmonar</li>
                                                <li>Náuseas y vómitos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias respiratorias geriátricas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Neumonía</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Presentación atípica frecuente</li>
                                                <li>Puede no haber fiebre</li>
                                                <li>Confusión como síntoma principal</li>
                                                <li>Deterioro funcional agudo</li>
                                                <li>Taquipnea sin disnea evidente</li>
                                                <li>Mayor riesgo de complicaciones</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">EPOC exacerbado</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Aumento de disnea basal</li>
                                                <li>Cambio en características del esputo</li>
                                                <li>Tos más frecuente</li>
                                                <li>Uso de músculos accesorios</li>
                                                <li>Cianosis central</li>
                                                <li>Alteración del estado mental</li>
                                            </ul>
                                        </div>
                                        <div className="bg-indigo-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-indigo-700">Embolia pulmonar</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Disnea súbita</li>
                                                <li>Dolor torácico pleurítico</li>
                                                <li>Hemoptisis</li>
                                                <li>Taquicardia</li>
                                                <li>Síncope</li>
                                                <li>Factores de riesgo: inmovilidad, cirugía</li>
                                            </ul>
                                        </div>
                                        <div className="bg-teal-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-teal-700">Aspiración</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Reflejo de deglución alterado</li>
                                                <li>Disfagia por enfermedades neurológicas</li>
                                                <li>Tos débil o ausente</li>
                                                <li>Deterioro del estado de conciencia</li>
                                                <li>Fiebre tardía</li>
                                                <li>Infiltrados en lóbulos dependientes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias neurológicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Evento cerebrovascular (ACV)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Déficit neurológico súbito</li>
                                                <li>Alteración del habla o comprensión</li>
                                                <li>Debilidad o parálisis facial/corporal</li>
                                                <li>Alteración de la visión</li>
                                                <li>Pérdida de equilibrio o coordinación</li>
                                                <li>Cefalea severa súbita</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Delirium</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Alteración aguda del estado mental</li>
                                                <li>Fluctuación durante el día</li>
                                                <li>Desorganización del pensamiento</li>
                                                <li>Alteración de la atención</li>
                                                <li>Alucinaciones visuales o auditivas</li>
                                                <li>Agitación o letargo</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Convulsiones</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Primera convulsión después de los 60 años</li>
                                                <li>Estado postictal prolongado</li>
                                                <li>Factores precipitantes múltiples</li>
                                                <li>Hipoglucemia, hipoxia, infección</li>
                                                <li>Interacciones medicamentosas</li>
                                                <li>Mayor riesgo de complicaciones</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Síncope</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Pérdida transitoria de conciencia</li>
                                                <li>Causas cardiogénicas frecuentes</li>
                                                <li>Hipotensión ortostática</li>
                                                <li>Efectos medicamentosos</li>
                                                <li>Deshidratación</li>
                                                <li>Arritmias cardíacas</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias endocrinas y metabólicas</h2>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Alteraciones glucémicas</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Hipoglucemia:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Confusión o alteración del comportamiento</li>
                                                        <li>Sudoración fría</li>
                                                        <li>Temblor o convulsiones</li>
                                                        <li>Coma</li>
                                                        <li>Síntomas pueden ser atípicos</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Hiperglucemia:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Deshidratación severa</li>
                                                        <li>Poliuria y polidipsia</li>
                                                        <li>Alteración del estado mental</li>
                                                        <li>Náuseas y vómitos</li>
                                                        <li>Respiración de Kussmaul</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Alteraciones electrolíticas</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Hiponatremia:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Confusión</li>
                                                        <li>Letargo</li>
                                                        <li>Convulsiones</li>
                                                        <li>Coma</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Hiperkalemia:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Arritmias</li>
                                                        <li>Debilidad muscular</li>
                                                        <li>Parestesias</li>
                                                        <li>Paro cardíaco</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Hipokalemia:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Debilidad muscular</li>
                                                        <li>Fatiga</li>
                                                        <li>Arritmias</li>
                                                        <li>Parálisis</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Problemas geriátricos específicos</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Caídas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Principal causa de lesión en &gt;65 años</li>
                                                <li>Factores intrínsecos: debilidad, mareo</li>
                                                <li>Factores extrínsecos: medicamentos, entorno</li>
                                                <li>Complicaciones: fracturas, TCE</li>
                                                <li>Síndrome postcaída: miedo a caer</li>
                                                <li>Evaluación multifactorial necesaria</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Hipotermia</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Temperatura corporal &lt;35°C</li>
                                                <li>Termorregulación alterada</li>
                                                <li>Factores de riesgo: medicamentos, alcohol</li>
                                                <li>Bradicardia, hipotensión</li>
                                                <li>Alteración del estado mental</li>
                                                <li>Mortalidad alta si no se trata</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Maltrato del adulto mayor</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Físico: golpes, heridas, fracturas</li>
                                                <li>Psicológico: amenazas, humillación</li>
                                                <li>Financiero: apropiación de bienes</li>
                                                <li>Negligencia: falta de cuidados básicos</li>
                                                <li>Sexual: contacto no consensuado</li>
                                                <li>Signos: lesiones inconsistentes, miedo</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Polifarmacia y efectos adversos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Uso de múltiples medicamentos</li>
                                                <li>Interacciones medicamentosas</li>
                                                <li>Efectos adversos aumentados</li>
                                                <li>Cascada terapéutica</li>
                                                <li>No adherencia al tratamiento</li>
                                                <li>Medicamentos potencialmente inapropiados</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones farmacológicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Cambios farmacocinéticos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Absorción:</strong> Reducción del ácido gástrico</li>
                                                <li><strong>Distribución:</strong> Aumento de grasa corporal, disminución de agua</li>
                                                <li><strong>Metabolismo:</strong> Función hepática reducida</li>
                                                <li><strong>Eliminación:</strong> Función renal disminuida</li>
                                                <li><strong>Resultado:</strong> Mayor duración y efectos de medicamentos</li>
                                                <li><strong>Principio:</strong> "Comenzar lento, ir despacio"</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Medicamentos de alto riesgo</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Benzodiacepinas:</strong> Riesgo de caídas y confusión</li>
                                                <li><strong>Anticolinérgicos:</strong> Confusión, retención urinaria</li>
                                                <li><strong>Opioides:</strong> Depresión respiratoria, confusión</li>
                                                <li><strong>Antipsicóticos:</strong> Síntomas extrapiramidales</li>
                                                <li><strong>Diuréticos:</strong> Desequilibrio electrolítico</li>
                                                <li><strong>Anticoagulantes:</strong> Riesgo de sangrado</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Dosificación de medicamentos de emergencia</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border rounded-lg">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Medicamento</th>
                                                    <th className="py-2 px-4 border">Dosis estándar adulto</th>
                                                    <th className="py-2 px-4 border">Ajuste geriátrico</th>
                                                    <th className="py-2 px-4 border">Consideraciones especiales</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Morfina</td>
                                                    <td className="py-2 px-4 border">2-5 mg IV</td>
                                                    <td className="py-2 px-4 border">1-2 mg IV</td>
                                                    <td className="py-2 px-4 border">Monitorear función respiratoria</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Lorazepam</td>
                                                    <td className="py-2 px-4 border">2-4 mg IV</td>
                                                    <td className="py-2 px-4 border">0.5-1 mg IV</td>
                                                    <td className="py-2 px-4 border">Evitar si es posible</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Furosemida</td>
                                                    <td className="py-2 px-4 border">20-40 mg IV</td>
                                                    <td className="py-2 px-4 border">20 mg IV inicial</td>
                                                    <td className="py-2 px-4 border">Vigilar función renal</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Nitroglicerina</td>
                                                    <td className="py-2 px-4 border">0.4 mg SL</td>
                                                    <td className="py-2 px-4 border">0.4 mg SL</td>
                                                    <td className="py-2 px-4 border">Precaución con hipotensión</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de la vía aérea en geriatría</h2>
                                    <div className="space-y-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Consideraciones anatómicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Pérdida de dientes puede complicar el sellado de mascarilla</li>
                                                <li>Artritis cervical limita la extensión del cuello</li>
                                                <li>Pérdida de elasticidad de tejidos</li>
                                                <li>Edema de glotis más frecuente</li>
                                                <li>Calcificación de cartílagos laríngeos</li>
                                                <li>Atrofia de músculos respiratorios</li>
                                            </ul>
                                        </div>

                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Técnicas adaptadas</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Posicionamiento cuidadoso evitando hiperextensión</li>
                                                <li>Uso de cánulas orofaríngeas de tamaño apropiado</li>
                                                <li>BVM con presiones más bajas para evitar distensión gástrica</li>
                                                <li>Aspiración frecuente por mayor producción de secreciones</li>
                                                <li>Oxigenación previa prolongada antes de procedimientos</li>
                                                <li>Considerar dispositivos supraglóticos como primera línea</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Acceso vascular y líquidos</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Acceso IV en geriatría</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Venas frágiles:</strong> Usar catéteres de menor calibre</li>
                                                <li><strong>Piel delgada:</strong> Mayor riesgo de hematomas</li>
                                                <li><strong>Deshidratación frecuente:</strong> Venas colapsadas</li>
                                                <li><strong>Alternativas:</strong> Acceso intraóseo más frecuente</li>
                                                <li><strong>Sitios preferidos:</strong> Antebrazo, evitar dorso de mano</li>
                                                <li><strong>Técnica:</strong> Tracción suave de la piel</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Administración de líquidos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Precaución:</strong> Menor capacidad de manejar sobrecarga</li>
                                                <li><strong>Bolos pequeños:</strong> 250-500 ml máximo inicial</li>
                                                <li><strong>Monitorización:</strong> Signos de sobrecarga (crepitantes)</li>
                                                <li><strong>Velocidad controlada:</strong> Evitar infusión rápida</li>
                                                <li><strong>Tipo de solución:</strong> Cristaloides isotónicos</li>
                                                <li><strong>Reevaluación continua:</strong> Respuesta hemodinámica</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Transporte y movilización</h2>
                                    <div className="space-y-4">
                                        <div className="bg-indigo-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-indigo-700">Prevención de lesiones durante el transporte</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Acolchado adicional para proteger prominencias óseas</li>
                                                    <li>Evitar hiperextensión de articulaciones</li>
                                                    <li>Mantener alineación de la columna</li>
                                                    <li>Protección contra hipotermia</li>
                                                    <li>Fijación suave pero segura</li>
                                                </ul>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Monitorización continua de signos vitales</li>
                                                    <li>Posicionamiento para optimizar ventilación</li>
                                                    <li>Acceso fácil para intervenciones</li>
                                                    <li>Comunicación tranquilizadora</li>
                                                    <li>Evaluación frecuente del dolor</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="bg-teal-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-teal-700">Dispositivos de asistencia</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Tabla espinal:</strong> Usar almohadillado extra</li>
                                                <li><strong>Collarín cervical:</strong> Ajuste cuidadoso por artritis</li>
                                                <li><strong>Férulas:</strong> Considerar osteoporosis</li>
                                                <li><strong>Camilla:</strong> Posición Fowler para disnea</li>
                                                <li><strong>Oxígeno:</strong> Dispositivos cómodos y seguros</li>
                                                <li><strong>Mantas térmicas:</strong> Prevención de hipotermia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicación y aspectos psicosociales</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="bg-pink-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-pink-700">Técnicas de comunicación</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Hablar lenta y claramente</li>
                                                    <li>Mantener contacto visual</li>
                                                    <li>Verificar comprensión</li>
                                                    <li>Usar lenguaje simple y directo</li>
                                                    <li>Permitir tiempo para respuestas</li>
                                                    <li>Mostrar respeto y dignidad</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-cyan-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-cyan-700">Manejo de la ansiedad</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Explicar procedimientos antes de realizarlos</li>
                                                    <li>Incluir a familiares cuando sea apropiado</li>
                                                    <li>Proporcionar tranquilidad constante</li>
                                                    <li>Respetar preferencias culturales</li>
                                                    <li>Manejar dolor y malestar físico</li>
                                                    <li>Evitar procedimientos innecesarios</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Decisiones de fin de vida</h2>
                                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                                        <div className="space-y-4">
                                            <div>
                                                <h3 className="font-medium text-lg mb-2 text-gray-800">Directivas anticipadas</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>DNR (Do Not Resuscitate):</strong> No realizar RCP</li>
                                                    <li><strong>POLST:</strong> Órdenes para tratamiento de soporte vital</li>
                                                    <li><strong>Testamento vital:</strong> Preferencias del paciente</li>
                                                    <li><strong>Poder legal médico:</strong> Designación de tomador de decisiones</li>
                                                </ul>
                                            </div>
                                            <div className="bg-yellow-100 p-3 rounded">
                                                <h4 className="font-medium text-yellow-800 mb-2">⚠️ Principios importantes:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                                                    <li>Siempre proporcionar cuidado de confort</li>
                                                    <li>Respetar la autonomía del paciente</li>
                                                    <li>Consultar con dirección médica cuando haya dudas</li>
                                                    <li>Documentar decisiones y acciones claramente</li>
                                                    <li>En duda, actuar para preservar la vida</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cases' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos geriátricos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 1: Infarto atípico en adulto mayor</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 78 años con diabetes e hipertensión. La familia la encontró confundida y con náuseas. 
                                        Niega dolor torácico. Refiere "sentirse mal" desde hace 2 horas. Tiene antecedentes de demencia leve.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Diaforética, pálida, orientada x2</li>
                                            <li><strong>Signos vitales:</strong> FC 110/min irregular, PA 90/60 mmHg, FR 24/min, SpO₂ 89%</li>
                                            <li><strong>Historia:</strong> Tomó "todas sus pastillas" esta mañana</li>
                                            <li><strong>Examen:</strong> Ruidos cardíacos irregulares, crepitantes basales bilaterales</li>
                                            <li><strong>ECG:</strong> Fibrilación auricular, elevación del ST en derivaciones inferiores</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-yellow-700">Consideraciones geriátricas:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-yellow-700">
                                            <li>Presentación atípica sin dolor torácico clásico</li>
                                            <li>Confusión como síntoma principal</li>
                                            <li>Neuropatía diabética puede enmascarar el dolor</li>
                                            <li>Complicaciones: IC aguda, arritmias</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Oxígeno para mantener SpO₂ &gt;94%</li>
                                            <li>Acceso IV con precaución (venas frágiles)</li>
                                            <li>AAS 162-325 mg (verificar contraindicaciones)</li>
                                            <li>Monitorización cardíaca continua</li>
                                            <li>Nitroglicerina SL (precaución por hipotensión)</li>
                                            <li>Activación de código infarto - traslado urgente</li>
                                            <li>Comunicación con hospital: paciente geriátrico con STEMI</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Insuficiencia cardíaca descompensada</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 82 años con antecedentes de IC, EPOC y fibrilación auricular. Presenta disnea progresiva 
                                        en los últimos 3 días, ortopnea y edema en miembros inferiores que ha empeorado. 
                                        No puede acostarse desde anoche.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Angustiado, sentado en trípode, cianosis perioral</li>
                                            <li><strong>Signos vitales:</strong> FC 130/min, PA 160/100 mmHg, FR 32/min, SpO₂ 84%</li>
                                            <li><strong>Examen:</strong> Crepitantes bilaterales, edema 3+ en piernas, YVD elevada</li>
                                            <li><strong>Historia:</strong> "Se le olvidó tomar las pastillas" los últimos 2 días</li>
                                            <li><strong>Medicamentos:</strong> Furosemida, metoprolol, warfarina</li>
                                        </ul>
                                    </div>

                                    <div className="bg-blue-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-blue-700">Factores precipitantes comunes en geriatría:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-blue-700">
                                            <li>Falta de adherencia a medicamentos</li>
                                            <li>Exceso de sal en la dieta</li>
                                            <li>Infecciones (neumonía, ITU)</li>
                                            <li>Arritmias nuevas o no controladas</li>
                                            <li>Isquemia miocárdica</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo emergente:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición sentada con piernas colgando</li>
                                            <li>Oxígeno de alto flujo, considerar CPAP si disponible</li>
                                            <li>Acceso IV en antebrazo</li>
                                            <li>Nitroglicerina SL (si PA &gt;100 mmHg sistólica)</li>
                                            <li>Furosemida 40-80 mg IV (dosis geriátrica ajustada)</li>
                                            <li>Monitorización estricta de signos vitales</li>
                                            <li>Traslado a hospital con capacidad de cardiología</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Delirium vs. Demencia</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 85 años llevada por su hija porque "está muy confundida desde ayer". 
                                        Normalmente es independiente para actividades básicas. Ayer estaba normal, 
                                        pero hoy no reconoce a su familia y está agitada.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Información adicional:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Historia:</strong> Hace 3 días comenzó antibiótico para ITU</li>
                                            <li><strong>Medicamentos:</strong> Tramadol para dolor de rodilla (nuevo)</li>
                                            <li><strong>Signos vitales:</strong> FC 110/min, PA 100/60 mmHg, Temp 38.5°C</li>
                                            <li><strong>Examen:</strong> Alerta pero desorientada, alucinaciones visuales</li>
                                            <li><strong>Orina:</strong> Oscura, con olor fuerte</li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-green-700">Diferenciación clave:</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-medium">Delirium (este caso):</h5>
                                                <ul className="list-disc list-inside space-y-1 text-green-700">
                                                    <li>Inicio agudo (24-48 horas)</li>
                                                    <li>Fluctuación durante el día</li>
                                                    <li>Alteración de conciencia</li>
                                                    <li>Causa médica identificable</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="font-medium">Demencia:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Inicio gradual (meses/años)</li>
                                                    <li>Progresión constante</li>
                                                    <li>Conciencia normal inicial</li>
                                                    <li>Deterioro cognitivo primario</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo del delirium:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Identificar y tratar causas subyacentes</li>
                                            <li>Discontinuar medicamentos potencialmente causales</li>
                                            <li>Hidratación IV cuidadosa</li>
                                            <li>Manejo de la fiebre</li>
                                            <li>Ambiente tranquilo y bien iluminado</li>
                                            <li>Evitar restricciones físicas</li>
                                            <li>Traslado para evaluación completa y tratamiento de ITU</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 4: Caída con posible fractura de cadera</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 79 años encontrado en el suelo de su baño. Refiere que se resbaló y cayó. 
                                        No puede levantarse y tiene dolor intenso en cadera derecha. Vive solo, 
                                        no sabe cuánto tiempo estuvo en el suelo.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Posición:</strong> Pierna derecha acortada y rotada externamente</li>
                                            <li><strong>Dolor:</strong> 9/10 en cadera derecha, no puede mover la pierna</li>
                                            <li><strong>Signos vitales:</strong> FC 100/min, PA 140/80 mmHg, Temp 35.8°C</li>
                                            <li><strong>Piel:</strong> Fría, seca, presión sobre sacro por tiempo prolongado</li>
                                            <li><strong>Estado mental:</strong> Alerta, orientado, preocupado</li>
                                        </ul>
                                    </div>

                                    <div className="bg-purple-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-purple-700">Complicaciones de caídas en geriatría:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-purple-700">
                                            <li>Fracturas por osteoporosis (cadera, muñeca, vertebrales)</li>
                                            <li>Traumatismo craneoencefálico (uso de anticoagulantes)</li>
                                            <li>Síndrome de aplastamiento por tiempo prolongado en el suelo</li>
                                            <li>Hipotermia por exposición</li>
                                            <li>Deshidratación</li>
                                            <li>Rabdomiólisis</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo integral:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluación ABCDE completa</li>
                                            <li>Inmovilización de cadera con férula de tracción</li>
                                            <li>Control del dolor: morfina 1-2 mg IV inicialmente</li>
                                            <li>Evaluación neurológica (anticoagulación, TCE)</li>
                                            <li>Mantas térmicas para hipotermia</li>
                                            <li>Acceso IV para hidratación</li>
                                            <li>Acolchado para prevenir úlceras por presión</li>
                                            <li>Movilización cuidadosa en tabla rígida</li>
                                            <li>Traslado a centro con ortopedia geriátrica</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 5: Polifarmacia y efectos adversos</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 81 años con múltiples comorbilidades llevada por somnolencia progresiva. 
                                        Familia refiere que en los últimos días "duerme mucho" y cuando despierta está confundida. 
                                        Ayer visitó a 3 médicos diferentes para distintos problemas.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Medicamentos actuales (según familiares):</h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Metformina 1000 mg c/12h</li>
                                                <li>Enalapril 10 mg c/12h</li>
                                                <li>Furosemida 40 mg diarios</li>
                                                <li>Warfarina 5 mg diarios</li>
                                                <li>Lorazepam 1 mg c/8h (nuevo ayer)</li>
                                            </ul>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Tramadol 50 mg c/6h (nuevo ayer)</li>
                                                <li>Omeprazol 20 mg diarios</li>
                                                <li>Simvastatina 40 mg nocturno</li>
                                                <li>Diphenhydramina 25 mg nocturno (nuevo)</li>
                                                <li>"Algo para dormir" (no especifica)</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-orange-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-orange-700">Medicamentos problemáticos en geriatría:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-orange-700">
                                            <li><strong>Lorazepam:</strong> Benzodiacepina de alto riesgo</li>
                                            <li><strong>Tramadol:</strong> Efectos anticolinérgicos y sedantes</li>
                                            <li><strong>Diphenhydramina:</strong> Antihistamínico anticolinérgico</li>
                                            <li><strong>Interacciones:</strong> Efecto sedante sinérgico</li>
                                            <li><strong>Resultado:</strong> Sedación excesiva, confusión, riesgo de caídas</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo de intoxicación por polifarmacia:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluación del estado de conciencia (Escala de Glasgow)</li>
                                            <li>Verificar signos vitales estables</li>
                                            <li>Recopilar TODOS los medicamentos (incluyendo OTC)</li>
                                            <li>Contactar con control de toxicología si está disponible</li>
                                            <li>No inducir vómito en paciente con alteración de conciencia</li>
                                            <li>Monitorización respiratoria continua</li>
                                            <li>Preparar naloxona en caso de depresión respiratoria</li>
                                            <li>Traslado para evaluación médica y reconciliación de medicamentos</li>
                                        </ol>
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
                            pagina="geriatric-emergencies" 
                            titulo="Foro de Discusión - Geriatric Emergencies"
                        />

                        

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
                                    <li><a href="https://www.ems1.com/airway-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre manejo de vía aérea</a></li>
                                    <li><a href="https://www.jems.com/patient-care/airway-respiratory/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de cuidado respiratorio</a></li>
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

