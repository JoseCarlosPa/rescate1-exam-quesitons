import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MedicVision.questions.ts";
import {CiMedicalCross} from "react-icons/ci";
import { AllRoutes } from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning, MdHealthAndSafety} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsEye, BsHeart} from "react-icons/bs";
import {PiChalkboardTeacher, PiStethoscope} from "react-icons/pi";
import {FaUserMd, FaExclamationTriangle, FaFirstAid, FaThermometerHalf} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye, FiActivity} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function MedicVision(){
    const [activeTab, setActiveTab] = useState<'overview' | 'approach' | 'practice'>('overview');
    
    return(
        <SEOWrapper
            title="Visión Médica General EMT | Evaluación Completa del Paciente Médico"
            description="Guía completa sobre visión médica general para Técnicos en Atención Médica Prehospitalaria: evaluación sistemática, herramientas SAMPLE y OPQRST, signos vitales y casos clínicos prácticos."
            keywords="visión médica general, EMT, paramédicos, evaluación del paciente, SAMPLE, OPQRST, signos vitales, casos clínicos, emergencias médicas, diagnóstico prehospitalario"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center  justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4   p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Visión Médica General</h1>
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
                            to="/medic-vision/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1zEIo1hIbfVHgW14HMe1GoLSouQqf-qqE/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://drive.google.com/file/d/100JgEU2s_DwwMyHll7S0k9p_yLWmrjAn/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
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
                                onClick={() => setActiveTab('approach')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'approach' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Herramientas y Técnicas
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
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaUserMd className="w-8 h-8 text-blue-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-blue-700">¿Qué es la Visión Médica General?</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        Es la capacidad del <strong>Técnico en Atención Médica Prehospitalaria (TAMP)</strong> para realizar una 
                                        valoración completa, rápida y estructurada del estado general de un paciente médico (no traumático).
                                    </p>
                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                        <p className="text-gray-700">
                                            <strong>Objetivo:</strong> Identificar condiciones que requieren intervención urgente como IAM, EVC, 
                                            crisis hipertensivas, disnea severa y alteraciones metabólicas siguiendo el enfoque ABCDE.
                                        </p>
                                    </div>
                                </div>

                                {/* Proceso de evaluación sistemática */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Evaluación Sistemática del Paciente Médico
                                    </h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <div className="text-center mb-4">
                                                <MdOutlineTimer className="w-12 h-12 text-red-500 mx-auto mb-2"/>
                                                <h3 className="text-xl font-bold text-red-700">1. Evaluación de Escena</h3>
                                            </div>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Seguridad del entorno</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Número de pacientes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Recursos necesarios</span>
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <div className="text-center mb-4">
                                                <FaFirstAid className="w-12 h-12 text-blue-500 mx-auto mb-2"/>
                                                <h3 className="text-xl font-bold text-blue-700">2. Evaluación Primaria</h3>
                                            </div>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>ABCDE sistemático</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Estado de conciencia</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Signos evidentes</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <div className="text-center mb-4">
                                                <PiStethoscope className="w-12 h-12 text-green-500 mx-auto mb-2"/>
                                                <h3 className="text-xl font-bold text-green-700">3. Signos Vitales</h3>
                                            </div>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <BsHeart className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>FC, FR, PA</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaThermometerHalf className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Temperatura</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdHealthAndSafety className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Oximetría de pulso</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Importancia clínica */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Importancia Clínica</h3>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                            <p className="font-bold text-green-600">Identificación Temprana</p>
                                            <p className="text-sm">Detecta emergencias que requieren intervención urgente</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <p className="font-bold text-blue-600">Priorización</p>
                                            <p className="text-sm">Establece prioridades de traslado y tratamiento</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">Reducción de Errores</p>
                                            <p className="text-sm">Mejora el pronóstico del paciente</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Componentes clave */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Componentes Clave de la Evaluación</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Evaluación Objetiva:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Escena segura y recursos disponibles</li>
                                                <li>Nivel de conciencia (AVDI/Glasgow)</li>
                                                <li>Posición y apariencia del paciente</li>
                                                <li>Signos vitales completos</li>
                                                <li>Examen físico dirigido por sistema</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <FiUser className="w-4 h-4 mr-2"/>
                                                Información del Paciente:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Historia clínica relevante (SAMPLE)</li>
                                                <li>Síntomas actuales (OPQRST)</li>
                                                <li>Medicamentos y alergias</li>
                                                <li>Antecedentes médicos importantes</li>
                                                <li>Eventos relacionados al episodio</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'approach' && (
                            <div className="space-y-8">
                                {/* Abordaje sistemático */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                        Abordaje Sistemático del Paciente Médico
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                    <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                                                    Evaluación de la Escena
                                                </h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Seguridad del entorno</li>
                                                    <li>• Número de pacientes</li>
                                                    <li>• Recursos necesarios</li>
                                                    <li>• Mecanismo de la enfermedad</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                                                    Evaluación Primaria (ABCDE)
                                                </h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• <strong>A:</strong> Vía aérea permeable</li>
                                                    <li>• <strong>B:</strong> Respiración adecuada</li>
                                                    <li>• <strong>C:</strong> Circulación y control de hemorragias</li>
                                                    <li>• <strong>D:</strong> Déficit neurológico</li>
                                                    <li>• <strong>E:</strong> Exposición y entorno</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                                                    Signos Vitales
                                                </h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Medición completa y documentación</li>
                                                    <li>• Monitoreo continuo</li>
                                                    <li>• Tendencias y cambios</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                                <h3 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                    <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">4</span>
                                                    Historia Clínica (SAMPLE)
                                                </h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Uso sistemático de SAMPLE</li>
                                                    <li>• Información del paciente/familia</li>
                                                    <li>• Síntomas con OPQRST</li>
                                                </ul>
                                            </div>
                                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                                <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                                                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">5</span>
                                                    Evaluación Secundaria
                                                </h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Examen físico dirigido</li>
                                                    <li>• Por sistemas afectados</li>
                                                    <li>• Hallazgos adicionales</li>
                                                </ul>
                                            </div>
                                            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                                                <h3 className="font-bold text-indigo-700 mb-2 flex items-center">
                                                    <span className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">6</span>
                                                    Reevaluación Continua
                                                </h3>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Cambios en el estado</li>
                                                    <li>• Respuesta al tratamiento</li>
                                                    <li>• Preparación para traslado</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Herramientas diagnósticas */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Herramientas Diagnósticas Esenciales</h2>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="font-bold text-2xl mb-4 text-blue-700 text-center flex items-center justify-center">
                                                <BsEye className="w-6 h-6 mr-2"/>
                                                SAMPLE
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">S</div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800">Signos y síntomas</h4>
                                                        <p className="text-sm text-gray-600">¿Qué siente el paciente? Dolor, malestar, sensaciones</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">A</div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800">Alergias</h4>
                                                        <p className="text-sm text-gray-600">Medicamentos, alimentos, ambientales</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">M</div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800">Medicamentos</h4>
                                                        <p className="text-sm text-gray-600">Actuales, dosis, adherencia al tratamiento</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">P</div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800">Patologías previas</h4>
                                                        <p className="text-sm text-gray-600">Antecedentes médicos relevantes</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">L</div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800">Última ingesta</h4>
                                                        <p className="text-sm text-gray-600">Comidas, líquidos, tiempo transcurrido</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">E</div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-800">Eventos relacionados</h4>
                                                        <p className="text-sm text-gray-600">Qué estaba haciendo cuando inició</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="font-bold text-2xl mb-4 text-green-700 text-center flex items-center justify-center">
                                                <FiActivity className="w-6 h-6 mr-2"/>
                                                OPQRST
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">O</div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800">Origen/Aparición</h4>
                                                        <p className="text-sm text-gray-600">¿Cuándo y cómo comenzó? ¿Súbito o gradual?</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">P</div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800">Provocación/Alivio</h4>
                                                        <p className="text-sm text-gray-600">¿Qué lo empeora o mejora?</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">Q</div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800">Calidad</h4>
                                                        <p className="text-sm text-gray-600">¿Cómo se siente? Opresivo, punzante, quemante</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">R</div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800">Región/Irradiación</h4>
                                                        <p className="text-sm text-gray-600">¿Dónde duele? ¿Se extiende a otras áreas?</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">S</div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800">Severidad</h4>
                                                        <p className="text-sm text-gray-600">Escala del 1-10, comparación con dolores previos</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">T</div>
                                                    <div>
                                                        <h4 className="font-semibold text-green-800">Tiempo</h4>
                                                        <p className="text-sm text-gray-600">¿Cuánto tiempo lleva así? ¿Es constante o intermitente?</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Valores normales de signos vitales */}
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                                        <PiStethoscope className="w-6 h-6 mr-2 text-orange-500"/>
                                        Valores Normales de Signos Vitales
                                    </h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                            <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left font-semibold">Parámetro</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Adultos</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Niños (1-12 años)</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Lactantes (&lt;1 año)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium flex items-center">
                                                        <BsHeart className="w-4 h-4 mr-2 text-red-500"/>
                                                        Frecuencia cardíaca
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">60-100/min</td>
                                                    <td className="py-3 px-4 border text-center">80-120/min</td>
                                                    <td className="py-3 px-4 border text-center">100-160/min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium flex items-center">
                                                        <FiActivity className="w-4 h-4 mr-2 text-blue-500"/>
                                                        Frecuencia respiratoria
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">12-20/min</td>
                                                    <td className="py-3 px-4 border text-center">15-30/min</td>
                                                    <td className="py-3 px-4 border text-center">25-50/min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium flex items-center">
                                                        <MdHealthAndSafety className="w-4 h-4 mr-2 text-green-500"/>
                                                        Presión arterial sistólica
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">90-140 mmHg</td>
                                                    <td className="py-3 px-4 border text-center">80-110 mmHg</td>
                                                    <td className="py-3 px-4 border text-center">70-100 mmHg</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium flex items-center">
                                                        <FaThermometerHalf className="w-4 h-4 mr-2 text-orange-500"/>
                                                        Temperatura
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">36-37.5°C</td>
                                                    <td className="py-3 px-4 border text-center">36-37.5°C</td>
                                                    <td className="py-3 px-4 border text-center">36-37.5°C</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium flex items-center">
                                                        <MdHealthAndSafety className="w-4 h-4 mr-2 text-purple-500"/>
                                                        Saturación O₂
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">≥95%</td>
                                                    <td className="py-3 px-4 border text-center">≥95%</td>
                                                    <td className="py-3 px-4 border text-center">≥95%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
                                    Casos Clínicos Interactivos
                                </h2>
                                
                                {/* Caso 1: Síndrome Coronario Agudo */}
                                <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">1</span>
                                        <h3 className="text-xl font-semibold text-red-700">Caso Crítico: Síndrome Coronario Agudo</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Hombre de 54 años, ejecutivo<br/>
                                            <strong>Evento:</strong> Dolor torácico súbito en oficina durante reunión estresante<br/>
                                            <strong>Presentación:</strong> Dolor opresivo retroesternal 8/10, irradiado a brazo izquierdo y mandíbula, diaforesis profusa, náusea
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                                                <BsLightbulb className="w-4 h-4 mr-2"/>
                                                Evaluación SAMPLE:
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li><strong>S:</strong> Dolor opresivo, diaforesis, náusea</li>
                                                <li><strong>A:</strong> Ninguna conocida</li>
                                                <li><strong>M:</strong> Atorvastatina, Aspirina ocasional</li>
                                                <li><strong>P:</strong> Hipertensión, dislipidemia</li>
                                                <li><strong>L:</strong> Café hace 2 horas</li>
                                                <li><strong>E:</strong> Reunión estresante, sedentario</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                                                <FiActivity className="w-4 h-4 mr-2"/>
                                                Evaluación OPQRST:
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li><strong>O:</strong> Súbito, durante estrés</li>
                                                <li><strong>P:</strong> Empeora con movimiento</li>
                                                <li><strong>Q:</strong> Opresivo, "como peso"</li>
                                                <li><strong>R:</strong> Brazo izquierdo y mandíbula</li>
                                                <li><strong>S:</strong> 8/10</li>
                                                <li><strong>T:</strong> 15 minutos, constante</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 bg-red-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-2">Abordaje Correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición semi-Fowler, O₂ si SpO₂ &lt;94%</li>
                                            <li>Signos vitales: PA, FC, FR, temperatura</li>
                                            <li>Aspirina 325mg masticable (si no contraindicada)</li>
                                            <li>Acceso venoso, monitoreo cardíaco</li>
                                            <li>Traslado URGENTE a hospital con hemodinamia</li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Caso 2: Emergencia Respiratoria */}
                                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">2</span>
                                        <h3 className="text-xl font-semibold text-blue-700">Emergencia Respiratoria: Neumonía Severa</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Mujer de 68 años, jubilada<br/>
                                            <strong>Evento:</strong> Disnea progresiva en 3 días, fiebre<br/>
                                            <strong>Presentación:</strong> Dificultad respiratoria marcada, tos productiva con esputo amarillo, fiebre 39°C
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Signos Vitales:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>PA: 90/60 mmHg</li>
                                                <li>FC: 110 lpm</li>
                                                <li>FR: 28 rpm</li>
                                                <li>Temp: 39°C</li>
                                                <li>SpO₂: 88% aire ambiente</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Hallazgos Físicos:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>Crepitantes en base derecha</li>
                                                <li>Uso de músculos accesorios</li>
                                                <li>Cianosis perioral leve</li>
                                                <li>Confusión moderada</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Datos SAMPLE:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li><strong>S:</strong> Disnea, fiebre, tos</li>
                                                <li><strong>M:</strong> Losartán, Furosemida</li>
                                                <li><strong>P:</strong> HTA, ICC</li>
                                                <li><strong>E:</strong> Resfriado previo</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-800 mb-2">Abordaje Correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>O₂ suplementario inmediato (alto flujo)</li>
                                            <li>Posición semi-Fowler (si tolera)</li>
                                            <li>Monitoreo continuo de SpO₂</li>
                                            <li>Acceso venoso, considerar líquidos (cauteloso por ICC)</li>
                                            <li>Evaluación de sepsis (qSOFA)</li>
                                            <li>Traslado urgente, notificar hospital</li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Caso 3: Emergencia Metabólica */}
                                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                                    <div className="flex items-center mb-4">
                                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">3</span>
                                        <h3 className="text-xl font-semibold text-green-700">Emergencia Metabólica: Hipoglucemia Severa</h3>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Hombre de 80 años, diabético tipo 2<br/>
                                            <strong>Evento:</strong> Encontrado confuso en casa por familiar<br/>
                                            <strong>Presentación:</strong> Alteración del estado mental, diaforesis, temblor, agitación
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-700 mb-2">Evaluación Neurológica:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li><strong>Glasgow:</strong> 12 (O4, V3, M5)</li>
                                                <li><strong>Orientación:</strong> Desorientado en tiempo/lugar</li>
                                                <li><strong>Síntomas:</strong> Temblor, diaforesis</li>
                                                <li><strong>Glucometría:</strong> 35 mg/dL</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-700 mb-2">Historia Médica:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li><strong>DM2:</strong> 15 años evolución</li>
                                                <li><strong>Medicamentos:</strong> Metformina, Glibenclamida</li>
                                                <li><strong>Último alimento:</strong> Hace 12 horas</li>
                                                <li><strong>Evento:</strong> Dosis normal, no desayunó</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4 bg-green-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-2">Protocolo de Tratamiento:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Confirmar hipoglucemia (&lt;70 mg/dL)</li>
                                            <li>Si consciente y puede deglutir: Glucosa oral 15g</li>
                                            <li>Si inconsciente o no puede deglutir: Glucosa IV (Dextrosa 50% 25ml)</li>
                                            <li>Reevaluar en 15 minutos</li>
                                            <li>Repetir tratamiento si glucemia &lt;70 mg/dL</li>
                                            <li>Monitoreo continuo durante traslado</li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Puntos de aprendizaje clave */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Puntos de Aprendizaje Clave</h3>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Comunicación Efectiva:
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Preguntas abiertas iniciales</li>
                                                <li>• SAMPLE y OPQRST sistemático</li>
                                                <li>• Involucrar a familiares/testigos</li>
                                                <li>• Documentación precisa</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                Priorización:
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• ABC siempre primero</li>
                                                <li>• Signos de gravedad</li>
                                                <li>• Tratamiento vs traslado</li>
                                                <li>• Reevaluación continua</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm">
                                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                <MdWarning className="w-4 h-4 mr-2"/>
                                                Errores Comunes:
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Saltar evaluación primaria</li>
                                                <li>• Historia incompleta</li>
                                                <li>• No monitorear tendencias</li>
                                                <li>• Asumir diagnósticos</li>
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
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="medic-vision" 
                            titulo="Foro de Discusión - Medic Vision"
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
                                    <li><a href="https://www.ems1.com/ems-products/assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre valoración médica</a></li>
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

