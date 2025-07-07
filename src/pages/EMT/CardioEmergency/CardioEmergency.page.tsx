import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {FaHeartPulse} from "react-icons/fa6";
import {FaExclamationTriangle} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiAlertTriangle, FiUser, FiEye, FiActivity, FiHeart} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { Disclosure } from "@headlessui/react";
import { faqData } from "./CardioEmergency.questions.ts";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function CardioEmergency() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice' | 'diseases' | 'pathophysiology'>('overview');
    return(
        <SEOWrapper
            title="Emergencias Cardiovasculares - Infarto, Arritmias | EMT EXAM"
            description="Guía completa de emergencias cardiovasculares para EMT: infarto agudo de miocardio, arritmias, angina, síncope y protocolo de manejo."
            keywords="emergencias cardiovasculares, infarto miocardio, arritmias, angina, síncope, ecg, fibrilación"
            section="cardio-emergency"
            difficulty="Advanced"
            timeRequired="PT75M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaHeartPulse className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Cardiovasculares</h1>
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
                            to="/cardio-emergency/exam"
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
                        
                        <a href="https://drive.google.com/file/d/1GMhJk8VQbxIrEDeyOj7zMY4fSikj40Qm/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
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
                                onClick={() => setActiveTab('pathophysiology')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'pathophysiology' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Fisiopatología
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
                            <button
                                onClick={() => setActiveTab('diseases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'diseases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Enfermedades Comunes
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Prioridad Absoluta!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las emergencias cardiovasculares son la <strong>principal causa de muerte</strong> a nivel mundial.
                                        El reconocimiento temprano y la intervención rápida pueden ser la diferencia entre la vida y la muerte.
                                        <span className="text-red-600 font-bold"> Cada minuto cuenta.</span>
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Primeros 10 min</p>
                                            <p className="text-sm">Tiempo crítico para intervención</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FiHeart className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">90 min</p>
                                            <p className="text-sm">Ventana terapéutica óptima</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">4-6 horas</p>
                                            <p className="text-sm">Daño miocárdico irreversible</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cadena de supervivencia */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Cadena de Supervivencia Cardiovascular
                                    </h2>
                                    <div className="grid md:grid-cols-4 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">1. Reconocimiento</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Identificar signos de alerta</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Activar SEM inmediatamente</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Evaluar estado del paciente</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-lg font-bold text-green-700 mb-3 text-center">2. RCP Precoz</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Compresiones de alta calidad</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>100-120 compresiones/min</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Profundidad 5-6 cm</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg border">
                                            <h3 className="text-lg font-bold text-yellow-700 mb-3 text-center">3. Desfibrilación</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                    <span>DEA lo antes posible</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                    <span>Seguir indicaciones del equipo</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                    <span>Minimizar interrupciones</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-lg font-bold text-red-700 mb-3 text-center">4. SVA</h3>
                                            <ul className="space-y-2 text-gray-700 text-sm">
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Manejo avanzado de vía aérea</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Medicamentos vasoactivos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Cuidados post-paro</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Emergencia Cardiovascular - Actúa INMEDIATAMENTE</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3">Síntomas Clásicos:</h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Dolor torácico opresivo</strong> - Como peso en el pecho</li>
                                                <li><strong>Irradiación del dolor</strong> - Brazo izquierdo, cuello, mandíbula</li>
                                                <li><strong>Disnea súbita</strong> - Dificultad respiratoria severa</li>
                                                <li><strong>Diaforesis profusa</strong> - Sudoración fría excesiva</li>
                                                <li><strong>Náusea y vómito</strong> - Especialmente en mujeres</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3">Signos de Gravedad:</h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Pérdida de conciencia</strong> - Síncope o colapso súbito</li>
                                                <li><strong>Piel fría y pegajosa</strong> - Signos de shock</li>
                                                <li><strong>Cianosis</strong> - Coloración azulada de labios/uñas</li>
                                                <li><strong>Pulso irregular</strong> - Arritmias evidentes</li>
                                                <li><strong>Hipotensión severa</strong> - Presión sistólica &lt;90 mmHg</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Puntos Clave para Paramédicos</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluar ABC inmediatamente</li>
                                                <li>Administrar oxígeno suplementario</li>
                                                <li>Monitorización cardíaca continua</li>
                                                <li>Acceso IV temprano</li>
                                                <li>ECG de 12 derivaciones</li>
                                                <li>Aspirina 300mg masticable (si no alergia)</li>
                                                <li>Tranquilizar al paciente</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dejar al paciente solo</li>
                                                <li>Permitir que camine o se esfuerce</li>
                                                <li>Dar medicamentos sublinguales si hipotensión</li>
                                                <li>Asumir que es "solo ansiedad"</li>
                                                <li>Retrasarse en el traslado</li>
                                                <li>Olvidar la historia clínica</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiHeart className="w-6 h-6 mr-2 text-orange-500"/>
                                        Anatomía y Fisiología Cardiovascular
                                    </h2>
                                    
                                    {/* Anatomía del corazón */}
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Estructura Cardíaca</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Aurículas (Cavidades Superiores)</h4>
                                                            <p className="text-sm text-gray-600">Aurícula derecha: recibe sangre venosa. Aurícula izquierda: recibe sangre oxigenada de pulmones</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Ventrículos (Cavidades Inferiores)</h4>
                                                            <p className="text-sm text-gray-600">Ventrículo derecho: bombea a pulmones. Ventrículo izquierdo: bombea a circulación sistémica</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Válvulas Cardíacas</h4>
                                                            <p className="text-sm text-gray-600">Tricúspide, Pulmonar, Mitral (Bicúspide), Aórtica - controlan flujo unidireccional</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                                                <h3 className="text-xl font-bold text-red-700 mb-4">Sistema de Conducción</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Nodo Sinoauricular (SA)</h4>
                                                            <p className="text-sm text-gray-600">Marcapasos natural - 60-100 latidos/min</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Nodo Auriculoventricular (AV)</h4>
                                                            <p className="text-sm text-gray-600">Retarda el impulso - permite llenado ventricular</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Haz de His y Fibras de Purkinje</h4>
                                                            <p className="text-sm text-gray-600">Distribuyen impulso eléctrico a ventrículos</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Circulación */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4">Circulación Sistémica vs Pulmonar</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-3">Circulación Pulmonar (Menor)</h4>
                                                <div className="space-y-2 text-gray-700">
                                                    <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Ventrículo derecho → Arteria pulmonar</p>
                                                    <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Pulmones (intercambio gaseoso)</p>
                                                    <p className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Venas pulmonares → Aurícula izquierda</p>
                                                    <p className="text-sm text-green-700 font-medium">Presión baja (25/10 mmHg)</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-3">Circulación Sistémica (Mayor)</h4>
                                                <div className="space-y-2 text-gray-700">
                                                    <p className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Ventrículo izquierdo → Aorta</p>
                                                    <p className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Órganos y tejidos corporales</p>
                                                    <p className="flex items-center"><span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Venas cavas → Aurícula derecha</p>
                                                    <p className="text-sm text-green-700 font-medium">Presión alta (120/80 mmHg)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fisiología cardíaca */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Conceptos Fisiológicos Clave</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-purple-50 p-4 rounded-lg border">
                                                <h4 className="font-bold text-purple-700 mb-2">Gasto Cardíaco</h4>
                                                <p className="text-sm text-gray-700 mb-2">GC = FC × VS</p>
                                                <ul className="text-xs text-gray-600 space-y-1">
                                                    <li>• FC: Frecuencia cardíaca</li>
                                                    <li>• VS: Volumen sistólico</li>
                                                    <li>• Normal: 4-8 L/min</li>
                                                </ul>
                                            </div>
                                            <div className="bg-indigo-50 p-4 rounded-lg border">
                                                <h4 className="font-bold text-indigo-700 mb-2">Presión Arterial</h4>
                                                <p className="text-sm text-gray-700 mb-2">PA = GC × RVP</p>
                                                <ul className="text-xs text-gray-600 space-y-1">
                                                    <li>• GC: Gasto cardíaco</li>
                                                    <li>• RVP: Resistencia vascular periférica</li>
                                                    <li>• Normal: 120/80 mmHg</li>
                                                </ul>
                                            </div>
                                            <div className="bg-pink-50 p-4 rounded-lg border">
                                                <h4 className="font-bold text-pink-700 mb-2">Perfusión Tisular</h4>
                                                <p className="text-sm text-gray-700 mb-2">Depende de:</p>
                                                <ul className="text-xs text-gray-600 space-y-1">
                                                    <li>• Presión de perfusión</li>
                                                    <li>• Contenido de oxígeno</li>
                                                    <li>• Demanda metabólica</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arterias coronarias */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-yellow-700 mb-4">Circulación Coronaria - Irrigación del Corazón</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Arteria Coronaria Izquierda</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>Tronco principal:</strong> Se divide en LAD y LCX</li>
                                                    <li><strong>LAD (Descendente anterior):</strong> Pared anterior del VI, parte del septum</li>
                                                    <li><strong>LCX (Circunfleja):</strong> Pared lateral del VI, parte de la aurícula izquierda</li>
                                                </ul>
                                                <p className="text-sm text-yellow-700 mt-2 font-medium">Irriga ~75% del miocardio</p>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Arteria Coronaria Derecha</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>RCA principal:</strong> Pared inferior del VI, VD, aurícula derecha</li>
                                                    <li><strong>Arteria marginal:</strong> Borde derecho del corazón</li>
                                                    <li><strong>Descendente posterior:</strong> Pared posterior del VI (en 85% de casos)</li>
                                                </ul>
                                                <p className="text-sm text-yellow-700 mt-2 font-medium">Irriga ~25% del miocardio</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-yellow-100 rounded">
                                            <p className="text-sm text-yellow-800"><strong>Nota clínica:</strong> La oclusión de LAD ("widow maker") es especialmente peligrosa por la extensión del territorio que irriga.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'pathophysiology' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiActivity className="w-6 h-6 mr-2 text-orange-500"/>
                                        Fisiopatología de las Emergencias Cardiovasculares
                                    </h2>
                                    
                                    {/* Síndrome Coronario Agudo */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4">Síndrome Coronario Agudo (SCA)</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Fisiopatología:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>Aterosclerosis coronaria:</strong> Acumulación de placas de colesterol</li>
                                                    <li><strong>Ruptura de placa:</strong> Exposición del núcleo lipídico</li>
                                                    <li><strong>Activación plaquetaria:</strong> Formación de trombo</li>
                                                    <li><strong>Oclusión coronaria:</strong> Parcial o completa</li>
                                                    <li><strong>Isquemia/Necrosis:</strong> Daño miocárdico</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Tipos de SCA:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-red-700">STEMI</h5>
                                                        <p className="text-sm text-gray-600">Oclusión coronaria completa. Elevación del ST en ECG. Necrosis transmural.</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-orange-700">NSTEMI</h5>
                                                        <p className="text-sm text-gray-600">Oclusión parcial. Sin elevación del ST. Necrosis subendocárdica.</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-yellow-700">Angina Inestable</h5>
                                                        <p className="text-sm text-gray-600">Isquemia sin necrosis. Trombo no oclusivo. Sin elevación de troponinas.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Insuficiencia Cardíaca */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4">Insuficiencia Cardíaca Aguda</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-blue-800 mb-3">Mecanismos Compensatorios:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>Activación simpática:</strong> ↑ FC, ↑ contractilidad</li>
                                                    <li><strong>Sistema RAA:</strong> Retención de Na+ y agua</li>
                                                    <li><strong>Liberación de BNP:</strong> Vasodilatación, diuresis</li>
                                                    <li><strong>Remodelado cardíaco:</strong> Hipertrofia, dilatación</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-blue-800 mb-3">Clasificación Killip:</h4>
                                                <div className="space-y-2">
                                                    <div className="bg-green-100 p-2 rounded text-sm">
                                                        <strong>Clase I:</strong> Sin signos de ICC (mortalidad 6%)
                                                    </div>
                                                    <div className="bg-yellow-100 p-2 rounded text-sm">
                                                        <strong>Clase II:</strong> Estertores, S3 (mortalidad 17%)
                                                    </div>
                                                    <div className="bg-orange-100 p-2 rounded text-sm">
                                                        <strong>Clase III:</strong> Edema pulmonar (mortalidad 38%)
                                                    </div>
                                                    <div className="bg-red-100 p-2 rounded text-sm">
                                                        <strong>Clase IV:</strong> Shock cardiogénico (mortalidad 81%)
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arritmias */}
                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4">Fisiopatología de Arritmias</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Mecanismos de Arritmias:</h4>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li><strong>Automatismo anormal:</strong> Focos ectópicos</li>
                                                    <li><strong>Reentrada:</strong> Circuitos de conducción</li>
                                                    <li><strong>Actividad desencadenada:</strong> Post-despolarizaciones</li>
                                                    <li><strong>Bloqueos de conducción:</strong> Retraso o interrupción</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Factores Precipitantes:</h4>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li>• Isquemia miocárdica</li>
                                                    <li>• Desequilibrios electrolíticos</li>
                                                    <li>• Fármacos proarrítmicos</li>
                                                    <li>• Estimulación simpática</li>
                                                    <li>• Acidosis/Hipoxia</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Consecuencias Hemodinámicas:</h4>
                                                <ul className="space-y-2 text-gray-700 text-sm">
                                                    <li>• ↓ Gasto cardíaco</li>
                                                    <li>• ↓ Presión arterial</li>
                                                    <li>• ↓ Perfusión coronaria</li>
                                                    <li>• ↑ Consumo de O₂</li>
                                                    <li>• Riesgo de muerte súbita</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shock Cardiogénico */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-700 mb-4">Shock Cardiogénico</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3">Fisiopatología:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-red-600">Falla de Bomba</h5>
                                                        <p className="text-sm text-gray-600">↓ Contractilidad → ↓ GC → ↓ PA → ↓ Perfusión coronaria</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-orange-600">Círculo Vicioso</h5>
                                                        <p className="text-sm text-gray-600">↓ Perfusión → ↑ Isquemia → ↓ Contractilidad → ↓ GC</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-yellow-600">Respuesta Sistémica</h5>
                                                        <p className="text-sm text-gray-600">Vasoconstricción, retención de líquidos, inflamación</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3">Criterios Diagnósticos:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li>• PA sistólica &lt; 90 mmHg</li>
                                                    <li>• Índice cardíaco &lt; 2.2 L/min/m²</li>
                                                    <li>• PCWP &gt; 18 mmHg</li>
                                                    <li>• Signos de hipoperfusión tisular</li>
                                                    <li>• Oliguria (&lt; 0.5 mL/kg/h)</li>
                                                    <li>• Alteración del estado mental</li>
                                                    <li>• Extremidades frías</li>
                                                    <li>• Acidosis láctica</li>
                                                </ul>
                                                <div className="mt-3 p-2 bg-red-100 rounded">
                                                    <p className="text-sm text-red-700"><strong>Mortalidad:</strong> 50-80% a pesar del tratamiento óptimo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conceptos clave */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4">Conceptos Fisiopatológicos Clave para EMT</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-3">Cascada Isquémica:</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Alteración de la perfusión diastólica</li>
                                                    <li>Cambios metabólicos (anaerobiosis)</li>
                                                    <li>Disfunción diastólica</li>
                                                    <li>Alteraciones en la contractilidad</li>
                                                    <li>Cambios electrocardiográficos</li>
                                                    <li>Dolor torácico</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-3">Tiempo es Músculo:</h4>
                                                <div className="space-y-2 text-gray-700 text-sm">
                                                    <p><strong>0-20 min:</strong> Isquemia reversible</p>
                                                    <p><strong>20-40 min:</strong> Necrosis subendocárdica</p>
                                                    <p><strong>40-60 min:</strong> Necrosis transmural parcial</p>
                                                    <p><strong>&gt;60 min:</strong> Necrosis transmural completa</p>
                                                    <p className="text-green-700 font-medium mt-2">La reperfusión precoz salva miocardio</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Manejo y Tratamiento Prehospitalario
                                    </h2>
                                    
                                    {/* Evaluación inicial */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4">Evaluación ABCDE</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-white p-4 rounded-lg border">
                                                <h4 className="font-bold text-blue-600 mb-2">A - Airway</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Permeabilidad de vía aérea</li>
                                                    <li>• Posición de recuperación si inconsciente</li>
                                                    <li>• Protección cervical si trauma</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border">
                                                <h4 className="font-bold text-green-600 mb-2">B - Breathing</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• O₂ suplementario (8-12 L/min)</li>
                                                    <li>• Frecuencia respiratoria</li>
                                                    <li>• Saturación de O₂ (objetivo &gt;94%)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border">
                                                <h4 className="font-bold text-red-600 mb-2">C - Circulation</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Pulso y presión arterial</li>
                                                    <li>• Acceso IV de grueso calibre</li>
                                                    <li>• Monitorización cardíaca</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                                            <div className="bg-white p-4 rounded-lg border">
                                                <h4 className="font-bold text-purple-600 mb-2">D - Disability</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Escala de Glasgow</li>
                                                    <li>• Pupilas y reflejos</li>
                                                    <li>• Glucemia capilar</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border">
                                                <h4 className="font-bold text-orange-600 mb-2">E - Exposure</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Temperatura corporal</li>
                                                    <li>• Examen físico dirigido</li>
                                                    <li>• Prevenir hipotermia</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Protocolo de SCA */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4">Protocolo para Síndrome Coronario Agudo</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Medidas Inmediatas (Primeros 10 min):</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>O₂ suplementario</strong> si SatO₂ &lt;90%</li>
                                                    <li><strong>AAS 300mg masticable</strong> (contraindicaciones: alergia, sangrado activo)</li>
                                                    <li><strong>Nitroglicerina SL 0.4mg</strong> (si PA sistólica &gt;100 mmHg)</li>
                                                    <li><strong>Morfina 2-4mg IV</strong> para dolor severo</li>
                                                    <li><strong>ECG de 12 derivaciones</strong></li>
                                                    <li><strong>Acceso IV</strong> y monitorización</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Contraindicaciones Importantes:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-red-700">Nitroglicerina NO dar si:</h5>
                                                        <ul className="text-sm text-gray-600 mt-1">
                                                            <li>• PA sistólica &lt;100 mmHg</li>
                                                            <li>• Uso de sildenafil en 24h</li>
                                                            <li>• Infarto de VD (V4R elevado)</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border">
                                                        <h5 className="font-medium text-orange-700">AAS NO dar si:</h5>
                                                        <ul className="text-sm text-gray-600 mt-1">
                                                            <li>• Alergia conocida</li>
                                                            <li>• Sangrado activo</li>
                                                            <li>• Úlcera péptica activa</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RCP y SVA */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-yellow-700 mb-4">Protocolo de Paro Cardiorrespiratorio</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">RCP de Alta Calidad:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>Frecuencia:</strong> 100-120 compresiones/min</li>
                                                    <li><strong>Profundidad:</strong> 5-6 cm (adultos)</li>
                                                    <li><strong>Retroceso completo:</strong> Permitir expansión torácica</li>
                                                    <li><strong>Interrupciones mínimas:</strong> &lt;10 segundos</li>
                                                    <li><strong>Relación:</strong> 30:2 (sin vía aérea avanzada)</li>
                                                    <li><strong>Cambio de operador:</strong> Cada 2 minutos</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3">Desfibrilación:</h4>
                                                <div className="space-y-2 text-gray-700">
                                                    <p><strong>Ritmos desfibrilables:</strong></p>
                                                    <ul className="list-disc list-inside ml-4 text-sm">
                                                        <li>Fibrilación ventricular (FV)</li>
                                                        <li>Taquicardia ventricular sin pulso (TVSP)</li>
                                                    </ul>
                                                    <p><strong>Energía:</strong> Bifásico 120-200J inicial</p>
                                                    <p><strong>Secuencia:</strong> Descarga → RCP inmediata × 2 min → Reevaluar</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Medicamentos de emergencia */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4">Medicamentos de Emergencia Cardiovascular</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-300">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Medicamento</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Indicación</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Dosis</th>
                                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Vía</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Epinefrina</td>
                                                        <td className="px-4 py-2 text-sm">Asistolia, AESP</td>
                                                        <td className="px-4 py-2 text-sm">1mg cada 3-5 min</td>
                                                        <td className="px-4 py-2 text-sm">IV/IO</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Amiodarona</td>
                                                        <td className="px-4 py-2 text-sm">FV/TVSP refractaria</td>
                                                        <td className="px-4 py-2 text-sm">300mg → 150mg</td>
                                                        <td className="px-4 py-2 text-sm">IV/IO</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Atropina</td>
                                                        <td className="px-4 py-2 text-sm">Bradicardia sintomática</td>
                                                        <td className="px-4 py-2 text-sm">0.5mg cada 3-5 min</td>
                                                        <td className="px-4 py-2 text-sm">IV/IO</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Adenosina</td>
                                                        <td className="px-4 py-2 text-sm">TSV estable</td>
                                                        <td className="px-4 py-2 text-sm">6mg → 12mg</td>
                                                        <td className="px-4 py-2 text-sm">IV rápida</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-4 py-2 font-medium">Furosemida</td>
                                                        <td className="px-4 py-2 text-sm">Edema pulmonar</td>
                                                        <td className="px-4 py-2 text-sm">40-80mg</td>
                                                        <td className="px-4 py-2 text-sm">IV</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Puntos clave de tratamiento */}
                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4">Recordatorios Críticos</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    Siempre hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Evaluación ABCDE sistemática</li>
                                                    <li>Monitorización continua</li>
                                                    <li>Comunicación con hospital receptor</li>
                                                    <li>Documentación detallada</li>
                                                    <li>Reevaluación frecuente</li>
                                                    <li>Preparar para deterioro súbito</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    Errores comunes a evitar:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Retrasar el traslado por procedimientos</li>
                                                    <li>No reconocer contraindicaciones</li>
                                                    <li>Compresiones inadecuadas en RCP</li>
                                                    <li>Interrupciones prolongadas para ECG</li>
                                                    <li>No comunicar hallazgos al hospital</li>
                                                    <li>Subestimar la gravedad del paciente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiUser className="w-6 h-6 mr-2 text-orange-500"/>
                                        Casos Clínicos para Práctica
                                    </h2>

                                    {/* Caso 1: STEMI */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4">Caso 1: Infarto Agudo (STEMI)</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Presentación:</h4>
                                                <div className="bg-white p-4 rounded border">
                                                    <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Hombre, 58 años</p>
                                                    <p className="text-gray-700 mb-2"><strong>Motivo:</strong> Dolor torácico intenso hace 45 minutos</p>
                                                    <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> Dolor opresivo retroesternal, irradiación a brazo izquierdo, diaforesis, náusea</p>
                                                    <p className="text-gray-700 mb-2"><strong>Antecedentes:</strong> Hipertensión, diabetes, tabaquismo</p>
                                                    <p className="text-gray-700"><strong>Signos vitales:</strong> PA 140/90, FC 95, FR 22, SatO₂ 96%</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Tu manejo paso a paso:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                                    <li>Evaluación ABCDE - vía aérea permeable</li>
                                                    <li>O₂ suplementario 4L/min por cánula nasal</li>
                                                    <li>Acceso IV 14G en brazo derecho</li>
                                                    <li>Monitorización cardíaca continua</li>
                                                    <li>ECG 12 derivaciones → STEMI anterior</li>
                                                    <li>AAS 300mg masticable</li>
                                                    <li>Nitroglicerina SL 0.4mg</li>
                                                    <li>Morfina 2mg IV para dolor</li>
                                                    <li>Traslado emergente a hospital con hemodinamia</li>
                                                    <li>Preactivación de código STEMI</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-red-100 rounded">
                                            <p className="text-sm text-red-800"><strong>Tiempo puerta-balón objetivo:</strong> &lt;90 minutos. Tu rapidez en el diagnóstico y traslado es crucial.</p>
                                        </div>
                                    </div>

                                    {/* Caso 2: Paro cardíaco */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-700 mb-4">Caso 2: Paro Cardiorrespiratorio</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3">Escenario:</h4>
                                                <div className="bg-white p-4 rounded border">
                                                    <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Mujer, 65 años</p>
                                                    <p className="text-gray-700 mb-2"><strong>Situación:</strong> Colapso súbito en domicilio</p>
                                                    <p className="text-gray-700 mb-2"><strong>Hallazgos:</strong> Inconsciente, sin respiración, sin pulso</p>
                                                    <p className="text-gray-700 mb-2"><strong>Monitor:</strong> Fibrilación ventricular</p>
                                                    <p className="text-gray-700"><strong>Tiempo de colapso:</strong> 5 minutos (estimado por familiar)</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3">Secuencia de RCP:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                                    <li>Verificar seguridad de escena</li>
                                                    <li>Confirmar inconsciencia e inexistencia de pulso</li>
                                                    <li>Iniciar RCP de alta calidad (30:2)</li>
                                                    <li>Aplicar parches del DEA</li>
                                                    <li>1ª descarga (150J bifásico)</li>
                                                    <li>RCP inmediata × 2 minutos</li>
                                                    <li>Reevaluar ritmo → persiste FV</li>
                                                    <li>2ª descarga + epinefrina 1mg IV</li>
                                                    <li>RCP × 2 min + amiodarona 300mg</li>
                                                    <li>Continuar algoritmo hasta ROSC</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                                            <div className="p-3 bg-green-100 rounded">
                                                <p className="text-sm text-green-800"><strong>Meta:</strong> Tiempo desde colapso hasta primera descarga &lt;5 minutos</p>
                                            </div>
                                            <div className="p-3 bg-blue-100 rounded">
                                                <p className="text-sm text-blue-800"><strong>Calidad RCP:</strong> 100-120/min, 5-6cm profundidad, retroceso completo</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3: Insuficiencia cardíaca */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4">Caso 3: Insuficiencia Cardíaca Aguda</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-blue-800 mb-3">Presentación:</h4>
                                                <div className="bg-white p-4 rounded border">
                                                    <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Hombre, 72 años</p>
                                                    <p className="text-gray-700 mb-2"><strong>Motivo:</strong> Disnea severa y ortopnea</p>
                                                    <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> No puede caminar, disnea paroxística nocturna</p>
                                                    <p className="text-gray-700 mb-2"><strong>Examen físico:</strong> Estertores bibasales, edema en MMII, YVD</p>
                                                    <p className="text-gray-700"><strong>Signos vitales:</strong> PA 180/110, FC 115, FR 28, SatO₂ 88%</p>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-blue-800 mb-3">Plan de tratamiento:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                                    <li>Posición sentado (Fowler 90°)</li>
                                                    <li>O₂ de alto flujo (15L/min con reservorio)</li>
                                                    <li>Considerar CPAP si disponible</li>
                                                    <li>Acceso IV 18G</li>
                                                    <li>Furosemida 40-80mg IV</li>
                                                    <li>Nitroglicerina SL (cuidado con PA)</li>
                                                    <li>Monitor continuo + ECG 12 derivaciones</li>
                                                    <li>Traslado en posición sentado</li>
                                                    <li>Evitar fluidos IV</li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-blue-100 rounded">
                                            <p className="text-sm text-blue-800"><strong>Clave:</strong> La posición sentado y el O₂ son prioritarios. El paciente puede descompensarse rápidamente.</p>
                                        </div>
                                    </div>

                                    {/* Preguntas de autoevaluación */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4">Preguntas de Autoevaluación</h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded border">
                                                <p className="font-medium text-gray-800 mb-2">1. ¿Cuál es la primera prioridad en un paciente con sospecha de SCA?</p>
                                                <p className="text-sm text-gray-600">Respuesta: ECG de 12 derivaciones en los primeros 10 minutos para identificar STEMI</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border">
                                                <p className="font-medium text-gray-800 mb-2">2. ¿Cuándo NO debes dar nitroglicerina en un paciente con dolor torácico?</p>
                                                <p className="text-sm text-gray-600">Respuesta: PA sistólica &lt;100 mmHg, uso reciente de sildenafil, sospecha de infarto de VD</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border">
                                                <p className="font-medium text-gray-800 mb-2">3. ¿Cuál es la profundidad correcta de compresiones en RCP para adultos?</p>
                                                <p className="text-sm text-gray-600">Respuesta: 5-6 cm (al menos 5 cm, no más de 6 cm)</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border">
                                                <p className="font-medium text-gray-800 mb-2">4. ¿Qué posición es ideal para un paciente con edema pulmonar agudo?</p>
                                                <p className="text-sm text-gray-600">Respuesta: Sentado (Fowler 90°) para reducir retorno venoso y mejorar ventilación</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'diseases' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FiHeart className="w-6 h-6 mr-2 text-orange-500"/>
                                    Enfermedades Cardiovasculares Comunes en México (2025)
                                </h2>
                                
                                {/* Principales causas */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-red-700 mb-4">Principales Causas de Muerte Cardiovascular</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-3">Estadísticas México 2025:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li><strong>1°.</strong> Enfermedad isquémica del corazón (28.5%)</li>
                                                <li><strong>2°.</strong> Enfermedad cerebrovascular (15.2%)</li>
                                                <li><strong>3°.</strong> Insuficiencia cardíaca (12.8%)</li>
                                                <li><strong>4°.</strong> Hipertensión arterial (8.9%)</li>
                                                <li><strong>5°.</strong> Miocardiopatías (6.4%)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-3">Factores de Riesgo Prevalentes:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li>• <strong>Obesidad:</strong> 75.2% adultos con sobrepeso</li>
                                                <li>• <strong>Diabetes:</strong> 14.4% población adulta</li>
                                                <li>• <strong>Hipertensión:</strong> 30.2% población adulta</li>
                                                <li>• <strong>Tabaquismo:</strong> 16.4% población adulta</li>
                                                <li>• <strong>Sedentarismo:</strong> 58.3% población adulta</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tabla detallada de enfermedades */}
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4 p-6 pb-0">Enfermedades Cardiovasculares - Guía de Referencia</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Enfermedad</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Fisiopatología</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Signos/Síntomas</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Medicamento Principal</th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-red-600">Infarto Agudo al Miocardio</td>
                                                    <td className="px-4 py-3 text-sm">Oclusión coronaria → necrosis miocárdica</td>
                                                    <td className="px-4 py-3 text-sm">Dolor torácico, diaforesis, disnea, náusea</td>
                                                    <td className="px-4 py-3 text-sm">AAS, clopidogrel, atorvastatina</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-blue-600">Hipertensión Arterial</td>
                                                    <td className="px-4 py-3 text-sm">↑ Resistencia vascular + ↑ gasto cardíaco</td>
                                                    <td className="px-4 py-3 text-sm">Cefalea, tinnitus, fosfenos, epistaxis</td>
                                                    <td className="px-4 py-3 text-sm">IECA (enalapril), diuréticos</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-purple-600">Insuficiencia Cardíaca</td>
                                                    <td className="px-4 py-3 text-sm">↓ Contractilidad → ↓ gasto cardíaco</td>
                                                    <td className="px-4 py-3 text-sm">Disnea, ortopnea, edema, fatiga</td>
                                                    <td className="px-4 py-3 text-sm">Furosemida, digoxina, IECA</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-green-600">Fibrilación Auricular</td>
                                                    <td className="px-4 py-3 text-sm">Despolarización auricular desorganizada</td>
                                                    <td className="px-4 py-3 text-sm">Palpitaciones, disnea, fatiga, mareo</td>
                                                    <td className="px-4 py-3 text-sm">Warfarina, amiodarona, metoprolol</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-yellow-600">Angina de Pecho</td>
                                                    <td className="px-4 py-3 text-sm">Isquemia miocárdica transitoria</td>
                                                    <td className="px-4 py-3 text-sm">Dolor torácico con esfuerzo, disnea</td>
                                                    <td className="px-4 py-3 text-sm">Nitratos, betabloqueadores, AAS</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-indigo-600">EVC Isquémico</td>
                                                    <td className="px-4 py-3 text-sm">Oclusión cerebrovascular → isquemia cerebral</td>
                                                    <td className="px-4 py-3 text-sm">Hemiparesia, afasia, disartria, diplopia</td>
                                                    <td className="px-4 py-3 text-sm">Alteplasa (tPA), AAS, clopidogrel</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-pink-600">Miocardiopatía Dilatada</td>
                                                    <td className="px-4 py-3 text-sm">Dilatación ventricular + ↓ contractilidad</td>
                                                    <td className="px-4 py-3 text-sm">ICC, arritmias, muerte súbita</td>
                                                    <td className="px-4 py-3 text-sm">IECA, betabloqueadores, diuréticos</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="px-4 py-3 font-medium text-teal-600">Enfermedad Vascular Periférica</td>
                                                    <td className="px-4 py-3 text-sm">Aterosclerosis en arterias periféricas</td>
                                                    <td className="px-4 py-3 text-sm">Claudicación, dolor en reposo, úlceras</td>
                                                    <td className="px-4 py-3 text-sm">Clopidogrel, cilostazol, estatinas</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Emergencias específicas por región */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-yellow-700 mb-4">Particularidades Regionales en México</h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3">Norte (Frontera):</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• ↑ Obesidad y diabetes tipo 2</li>
                                                <li>• ↑ Consumo de alimentos procesados</li>
                                                <li>• ↑ Estrés laboral (maquiladoras)</li>
                                                <li>• ↑ Cardiopatía isquémica temprana</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3">Centro (CDMX, EdoMex):</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• ↑ Hipertensión (estrés urbano)</li>
                                                <li>• ↑ Enfermedad cerebrovascular</li>
                                                <li>• Exposición a contaminación</li>
                                                <li>• ↑ Sedentarismo</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3">Sur (Rural):</h4>
                                            <ul className="space-y-1 text-gray-700 text-sm">
                                                <li>• ↑ Cardiopatía reumática</li>
                                                <li>• ↑ Hipertensión no controlada</li>
                                                <li>• Acceso limitado a especialistas</li>
                                                <li>• ↑ Mortalidad por retraso diagnóstico</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Grupos de alto riesgo */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-700 mb-4">Grupos de Alto Riesgo en México</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-3">Demográficos:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li><strong>Hombres 45-65 años:</strong> IAM, muerte súbita</li>
                                                <li><strong>Mujeres &gt;55 años:</strong> Hipertensión, EVC</li>
                                                <li><strong>Población indígena:</strong> Diabetes, hipertensión</li>
                                                <li><strong>Trabajadores de turno nocturno:</strong> Arritmias</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-3">Ocupacionales:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li><strong>Conductores:</strong> IAM por estrés, sedentarismo</li>
                                                <li><strong>Personal de salud:</strong> Estrés, turnos largos</li>
                                                <li><strong>Trabajadores de altura:</strong> Policitemia, hipertensión pulmonar</li>
                                                <li><strong>Migrantes:</strong> Estrés, acceso limitado a salud</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Recomendaciones para EMT */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-green-700 mb-4">Recomendaciones Específicas para EMT en México</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Consideraciones Culturales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>Respetar medicina tradicional</li>
                                                <li>Comunicación empática</li>
                                                <li>Involucrar a la familia</li>
                                                <li>Considerar barreras idiomáticas</li>
                                                <li>Sensibilidad religiosa</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                                                <FiAlertTriangle className="w-4 h-4 mr-2"/>
                                                Desafíos Frecuentes:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>Retraso en solicitar ayuda</li>
                                                <li>Automedicación previa</li>
                                                <li>Comorbilidades múltiples</li>
                                                <li>Falta de seguimiento médico</li>
                                                <li>Recursos limitados en zonas rurales</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                
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
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-products/cardiac-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias cardíacas</a></li>
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

