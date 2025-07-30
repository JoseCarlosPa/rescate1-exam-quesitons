import React, {useState} from "react";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SoftTissue.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz, MdCheckCircle, MdWarning} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {CiMedicalCross} from "react-icons/ci";
import {FaExclamationTriangle, FaFirstAid, FaBandAid, FaHeartbeat} from "react-icons/fa";
import {FiAlertTriangle, FiEye, FiClock} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function SoftTissue() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Lesiones de Tejido Blando EMT | Evaluación, Manejo y Casos Clínicos"
            description="Guía completa sobre lesiones de tejido blando para Técnicos en Atención Médica Prehospitalaria: control de hemorragias, cuidado de heridas, manejo de shock y casos clínicos. Aprende técnicas críticas para el manejo de trauma."
            keywords="lesiones tejido blando, EMT, paramédicos, control hemorragia, heridas abiertas, heridas cerradas, torniquetes, hemostasia, trauma, emergencias médicas, casos clínicos, protocolo XABCDE"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT75M"
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
                            <CiMedicalCross className="w-24 h-24 mb-1 text-red-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones de Tejido Blando</h1>
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
                            to={`${AllRoutes.SOFT_TISSUE}/exam`}
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
                        <a href="https://drive.google.com/file/d/1XxadP7wDFrYoGun4VOk-ZFKi0PeDyZWy/view?usp=drive_link"
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
                                onClick={() => setActiveTab('anatomy')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'anatomy'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Anatomía y Fisiología
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Prioridad en la Evaluación!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las lesiones de tejido blando pueden ser <strong>mortales</strong> si no se controlan adecuadamente.
                                        Una hemorragia no controlada puede causar shock hipovolémico en <span className="text-red-600 font-bold">minutos</span>.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FiClock className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Hemorragia Arterial</p>
                                            <p className="text-sm">Pérdida rápida de volumen</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">Contaminación</p>
                                            <p className="text-sm">Riesgo de infección severa</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaHeartbeat className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">Shock</p>
                                            <p className="text-sm">Compromiso hemodinámico</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Protocolo XABCDE */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Protocolo XABCDE - Evaluación Sistemática
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 text-center">X - HEMORRAGIA</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Identificar hemorragias exanguinantes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Aplicar presión directa inmediata</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Considerar torniquete si es necesario</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Controlar ANTES del ABC</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">ABC - PRIMARIO</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>A:</strong> Vía aérea permeable</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>B:</strong> Respiración adecuada</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>C:</strong> Circulación y pulso</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">DE - NEUROLÓGICO</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>D:</strong> Déficit neurológico (AVDI)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>E:</strong> Exposición completa</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Control de temperatura</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Clasificación de heridas */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación de Lesiones</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                <FaBandAid className="w-5 h-5 mr-2"/>
                                                Heridas Cerradas
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Contusiones</h4>
                                                    <p className="text-sm text-gray-600">Daño a capilares sin ruptura de piel</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Hematomas</h4>
                                                    <p className="text-sm text-gray-600">Acumulación de sangre en tejidos</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Lesiones por Aplastamiento</h4>
                                                    <p className="text-sm text-gray-600">Compresión severa de tejidos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                <FaFirstAid className="w-5 h-5 mr-2"/>
                                                Heridas Abiertas
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-red-600">Abrasiones</h4>
                                                    <p className="text-sm text-gray-600">Pérdida superficial de epidermis</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-red-600">Laceraciones</h4>
                                                    <p className="text-sm text-gray-600">Cortes lineales o irregulares</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-red-600">Punciones</h4>
                                                    <p className="text-sm text-gray-600">Heridas pequeñas y profundas</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-red-600">Avulsiones</h4>
                                                    <p className="text-sm text-gray-600">Desprendimiento parcial/total de tejido</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-red-600">Amputaciones</h4>
                                                    <p className="text-sm text-gray-600">Separación completa de estructuras</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Hemorragia Severa:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sangrado arterial (rojo brillante, pulsátil)</li>
                                                <li>Pérdida &gt;500ml en adultos</li>
                                                <li>Empapamiento de apósitos</li>
                                                <li>Formación de charcos</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Shock Hipovolémico:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Taquicardia (&gt;100 lpm)</li>
                                                <li>Hipotensión (&lt;90 mmHg sistólica)</li>
                                                <li>Piel fría, pálida, sudorosa</li>
                                                <li>Alteración del estado mental</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Complicaciones:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Síndrome compartimental</li>
                                                <li>Infección severa</li>
                                                <li>Compromiso neurovascular</li>
                                                <li>Hipotermia</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Principios Fundamentales</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>BSI y seguridad de escena PRIMERO</li>
                                                <li>Controlar hemorragias antes que ABC</li>
                                                <li>Evaluar pulsos distales</li>
                                                <li>Documentar hallazgos iniciales</li>
                                                <li>Reevaluar constantemente</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Retirar objetos empalados</li>
                                                <li>Reintroducir órganos eviscerados</li>
                                                <li>Aplicar torniquetes en cuello/tronco</li>
                                                <li>Usar hielo directamente sobre piel</li>
                                                <li>Subestimar pérdida de sangre</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                {/* Anatomía de la piel */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaBandAid className="w-6 h-6 mr-2 text-orange-500"/>
                                        Anatomía de la Piel y Tejidos Blandos
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Capas de la Piel</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Epidermis</h4>
                                                            <p className="text-sm text-gray-600">Capa externa, protectora. Contiene melanocitos y células de Langerhans</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Dermis</h4>
                                                            <p className="text-sm text-gray-600">Contiene folículos pilosos, glándulas sebáceas, vasos sanguíneos y nervios</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Hipodermis</h4>
                                                            <p className="text-sm text-gray-600">Tejido subcutáneo con grasa, aislamiento térmico y almacén energético</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                <h3 className="text-xl font-bold text-green-700 mb-4">Estructuras Asociadas</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Vasos Sanguíneos</h4>
                                                            <p className="text-sm text-gray-600">Red capilar, arterias y venas que nutren los tejidos</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Nervios</h4>
                                                            <p className="text-sm text-gray-600">Terminaciones sensitivas para dolor, tacto, temperatura</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Músculos</h4>
                                                            <p className="text-sm text-gray-600">Fibras musculares estriadas y lisas</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-start">
                                            <div className="text-center">
                                                <img
                                                    src="/src/assets/aaos.jpg"
                                                    alt="Anatomía de la piel y tejidos blandos"
                                                    className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                                                />
                                                <p className="text-sm text-gray-600 italic">Estructura anatómica de los tejidos blandos</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Funciones vitales */}
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                        <FaFirstAid className="w-5 h-5 mr-2"/>
                                        Funciones Vitales de la Piel
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-orange-600 mb-2">Protección</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Barrera contra patógenos</li>
                                                <li>• Protección UV</li>
                                                <li>• Prevención de pérdida de fluidos</li>
                                                <li>• Resistencia mecánica</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-orange-600 mb-2">Regulación</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Termorregulación</li>
                                                <li>• Control de sudoración</li>
                                                <li>• Vasodilatación/constricción</li>
                                                <li>• Balance hídrico</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-orange-600 mb-2">Sensación</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Tacto y presión</li>
                                                <li>• Dolor y temperatura</li>
                                                <li>• Vibración</li>
                                                <li>• Propioceptión</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Proceso de cicatrización */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Fisiología de la Cicatrización</h2>
                                    <div className="grid lg:grid-cols-4 gap-6">
                                        <div className="bg-red-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-red-700 mb-3 text-center">HEMOSTASIA</h3>
                                            <p className="text-sm text-gray-600 mb-3">0-30 minutos</p>
                                            <ul className="text-sm space-y-1">
                                                <li>• Vasoconstricción</li>
                                                <li>• Agregación plaquetaria</li>
                                                <li>• Formación de coágulo</li>
                                                <li>• Fibrina y fibrinógeno</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-yellow-700 mb-3 text-center">INFLAMACIÓN</h3>
                                            <p className="text-sm text-gray-600 mb-3">1-5 días</p>
                                            <ul className="text-sm space-y-1">
                                                <li>• Vasodilatación</li>
                                                <li>• Migración de neutrófilos</li>
                                                <li>• Llegada de macrófagos</li>
                                                <li>• Limpieza de detritos</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-green-700 mb-3 text-center">PROLIFERACIÓN</h3>
                                            <p className="text-sm text-gray-600 mb-3">5-21 días</p>
                                            <ul className="text-sm space-y-1">
                                                <li>• Angiogénesis</li>
                                                <li>• Formación de colágeno</li>
                                                <li>• Granulación</li>
                                                <li>• Epitelización</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-lg">
                                            <h3 className="font-bold text-blue-700 mb-3 text-center">REMODELACIÓN</h3>
                                            <p className="text-sm text-gray-600 mb-3">21 días - 2 años</p>
                                            <ul className="text-sm space-y-1">
                                                <li>• Reorganización del colágeno</li>
                                                <li>• Aumento de resistencia</li>
                                                <li>• Reducción del tamaño</li>
                                                <li>• Maduración cicatriz</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Factores que afectan la cicatrización */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-yellow-800 mb-4">Factores que Afectan la Cicatrización</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Factores Intrínsecos:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Edad:</strong> Cicatrización más lenta en ancianos</li>
                                                <li><strong>Nutrición:</strong> Proteínas, vitamina C, zinc</li>
                                                <li><strong>Circulación:</strong> Perfusión tisular adecuada</li>
                                                <li><strong>Diabetes:</strong> Compromete la cicatrización</li>
                                                <li><strong>Medicamentos:</strong> Esteroides, anticoagulantes</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Factores Extrínsecos:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Infección:</strong> Prolonga la fase inflamatoria</li>
                                                <li><strong>Cuerpos extraños:</strong> Impiden la curación</li>
                                                <li><strong>Tensión:</strong> Movimiento excesivo de bordes</li>
                                                <li><strong>Hipoxia:</strong> Falta de oxígeno tisular</li>
                                                <li><strong>Temperatura:</strong> Frío ralentiza el proceso</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación neurovascular */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Evaluación Neurovascular Crítica</h2>
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4">Las 5 P del Compromiso Neurovascular</h3>
                                        <div className="grid md:grid-cols-5 gap-4">
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <h4 className="font-bold text-red-600 mb-2">PAIN</h4>
                                                <p className="text-sm">Dolor desproporcionado</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <h4 className="font-bold text-red-600 mb-2">PALLOR</h4>
                                                <p className="text-sm">Palidez distal</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <h4 className="font-bold text-red-600 mb-2">PARESTHESIAS</h4>
                                                <p className="text-sm">Hormigueo o entumecimiento</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <h4 className="font-bold text-red-600 mb-2">PARALYSIS</h4>
                                                <p className="text-sm">Pérdida de función motora</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <h4 className="font-bold text-red-600 mb-2">PULSELESSNESS</h4>
                                                <p className="text-sm">Ausencia de pulsos distales</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-red-100 rounded">
                                            <p className="text-sm text-red-800"><strong>¡ALERTA!</strong> La presencia de cualquiera de estas 5 P indica compromiso neurovascular grave que requiere atención inmediata.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo
                                        General de Lesiones de Tejido Blando (AAOS)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        El manejo prehospitalario de las lesiones de tejido blando se centra en
                                        controlar la hemorragia, prevenir la contaminación, preservar el tejido dañado y
                                        tratar el shock. Siga siempre los protocolos locales y las directrices de la
                                        AAOS.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Control de
                                                Hemorragia</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Presión directa:</strong> Aplicar con una gasa estéril sobre
                                                    la herida.
                                                </li>
                                                <li><strong>Elevación:</strong> Elevar la extremidad lesionada por
                                                    encima del nivel del corazón (si no hay sospecha de fractura).
                                                </li>
                                                <li><strong>Vendaje compresivo:</strong> Aplicar un vendaje firme sobre
                                                    el apósito para mantener la presión.
                                                </li>
                                                <li><strong>Torniquete:</strong> Utilizar para hemorragias arteriales
                                                    severas en extremidades que no se controlan con otros métodos.
                                                    Anotar la hora de aplicación.
                                                </li>
                                                <li><strong>Agentes hemostáticos:</strong> Considerar según protocolo
                                                    para hemorragias difíciles de controlar.
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Cuidado de Heridas
                                                Abiertas Específicas</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Abrasiones:</strong> Limpiar si es posible, cubrir con
                                                    apósito estéril.
                                                </li>
                                                <li><strong>Laceraciones:</strong> Controlar hemorragia, cubrir. Evaluar
                                                    profundidad y posible daño a estructuras subyacentes.
                                                </li>
                                                <li><strong>Punciones:</strong> No retirar objetos empalados;
                                                    estabilizarlos en su lugar. Cubrir la herida alrededor del objeto.
                                                </li>
                                                <li><strong>Avulsiones:</strong> Si el colgajo de piel está presente,
                                                    reposicionarlo cuidadosamente en su lugar (si está limpio) antes de
                                                    vendar. Si está separado, tratar como amputación parcial.
                                                </li>
                                                <li><strong>Amputaciones:</strong> Controlar hemorragia del muñón.
                                                    Envolver la parte amputada en gasa estéril humedecida con solución
                                                    salina, colocar en bolsa plástica y luego en hielo (no directamente
                                                    sobre el hielo).
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de
                                        Heridas Cerradas</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Aunque la piel no esté rota, las heridas cerradas pueden ser graves. El manejo
                                        se enfoca en el acrónimo RICES (o PRICE):
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>R</strong>est (Reposo): Evitar el movimiento de la zona afectada.
                                        </li>
                                        <li><strong>I</strong>ce (Hielo): Aplicar frío local para reducir hinchazón y
                                            dolor (no directamente sobre la piel).
                                        </li>
                                        <li><strong>C</strong>ompression (Compresión): Aplicar un vendaje elástico para
                                            limitar la hinchazón.
                                        </li>
                                        <li><strong>E</strong>levation (Elevación): Elevar la parte lesionada.</li>
                                        <li><strong>S</strong>plinting (Inmovilización): Inmovilizar si se sospecha
                                            fractura o lesión grave.
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Vigilar signos de síndrome compartimental en lesiones por aplastamiento o
                                        hematomas extensos (dolor desproporcionado, palidez, ausencia de pulso,
                                        parestesias, parálisis).
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                                        Especiales</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Heridas Penetrantes
                                                en Tórax (Neumotórax Abierto)</h3>
                                            <p className="text-gray-700">Cubrir con un sello torácico oclusivo de tres
                                                lados (o según protocolo local) para permitir la salida de aire y
                                                prevenir la entrada.</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Evisceración
                                                Abdominal</h3>
                                            <p className="text-gray-700">No intentar reintroducir los órganos. Cubrir
                                                con un apósito estéril grande humedecido con solución salina y luego con
                                                un vendaje oclusivo seco para mantener el calor y la humedad.</p>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Lesiones por
                                                Mordedura</h3>
                                            <p className="text-gray-700">Alto riesgo de infección. Controlar hemorragia,
                                                limpiar si es posible y cubrir. Considerar la necesidad de profilaxis
                                                antirrábica y antitetánica.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos Clínicos:
                                    Lesiones de Tejido Blando</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 1: Laceración Profunda
                                        con Hemorragia Arterial</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un trabajador de construcción de 35 años sufre una laceración en el antebrazo
                                        derecho con una sierra circular. Presenta sangrado rojo brillante y pulsátil.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>X (Hemorragia Exanguinante):</strong> Hemorragia arterial activa
                                                visible en antebrazo.
                                            </li>
                                            <li><strong>A (Vía Aérea):</strong> Permeable, hablando con frases
                                                completas.
                                            </li>
                                            <li><strong>B (Ventilación):</strong> FR 20/min, adecuada profundidad. SpO₂
                                                98% (aire ambiente inicial).
                                            </li>
                                            <li><strong>C (Circulación):</strong> FC 110/min, pulso radial derecho
                                                débil, piel pálida y fría distal a la lesión. Relleno capilar mayor a 2
                                                seg en mano derecha.
                                            </li>
                                            <li><strong>D (Déficit Neurológico):</strong> Alerta (AVDI), orientado,
                                                ansioso.
                                            </li>
                                            <li><strong>E (Exposición/Ambiente):</strong> Laceración de aproximadamente
                                                10 cm, profunda, en cara anterior del antebrazo derecho.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                                            (AAOS):</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar BSI y seguridad de la escena.</li>
                                            <li>Aplicar presión directa firme sobre la herida con apósitos estériles.
                                            </li>
                                            <li>Si la hemorragia persiste, aplicar un vendaje compresivo sobre los
                                                apósitos.
                                            </li>
                                            <li>Si la hemorragia arterial no se controla, aplicar un torniquete
                                                comercial proximal a la herida en el brazo. Anotar la hora de
                                                aplicación.
                                            </li>
                                            <li>Elevar la extremidad por encima del nivel del corazón (si no hay
                                                sospecha de fractura asociada que lo contraindique).
                                            </li>
                                            <li>Administrar oxígeno a alto flujo (ej. mascarilla no recirculante a 15
                                                L/min).
                                            </li>
                                            <li>Tratar para shock: mantener al paciente abrigado, colocar en posición
                                                supina (si es tolerada y no hay otras lesiones).
                                            </li>
                                            <li>Traslado rápido al centro útil más cercano. Reevaluar estado
                                                hemodinámico y torniquete durante el traslado.
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Objeto Empalado en
                                        Muslo</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un joven de 18 años cae de su bicicleta sobre una valla rota, resultando con una
                                        varilla metálica empalada en la cara anterior de su muslo izquierdo.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>A, B:</strong> Vía aérea permeable, ventilación espontánea y
                                                adecuada.
                                            </li>
                                            <li><strong>C:</strong> FC 90/min, TA 120/80 mmHg. Pulsos pedio y tibial
                                                posterior izquierdos presentes y simétricos con el lado no lesionado. No
                                                hay sangrado externo masivo visible alrededor del objeto.
                                            </li>
                                            <li><strong>D:</strong> Alerta y orientado, refiere dolor intenso en el
                                                muslo.
                                            </li>
                                            <li><strong>E:</strong> Varilla metálica de aproximadamente 1 cm de diámetro
                                                empalada en el muslo izquierdo. La zona circundante está tensa pero sin
                                                hematoma expansivo inmediato.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                                            (AAOS):</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar BSI y seguridad de la escena.</li>
                                            <li>NO intentar retirar el objeto empalado.</li>
                                            <li>Estabilizar el objeto en su lugar utilizando apósitos voluminosos y
                                                vendajes para minimizar el movimiento. Se puede usar un vaso de cartón
                                                cortado o similar para proteger el objeto.
                                            </li>
                                            <li>Controlar cualquier sangrado visible aplicando presión directa alrededor
                                                del sitio de entrada, sin ejercer presión sobre el objeto mismo.
                                            </li>
                                            <li>Evaluar y documentar el estado neurovascular distal (pulsos, color,
                                                temperatura, sensibilidad, motricidad) de la extremidad lesionada antes
                                                y después de la inmovilización.
                                            </li>
                                            <li>Administrar oxígeno según necesidad.</li>
                                            <li>Inmovilizar la extremidad afectada en una férula si es necesario para
                                                prevenir el movimiento del objeto durante el traslado.
                                            </li>
                                            <li>Traslado cuidadoso y rápido al hospital apropiado. Notificar al hospital
                                                receptor sobre la naturaleza de la lesión.
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Evisceración
                                        Abdominal</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un hombre de 40 años es encontrado tras una agresión con arma blanca en el
                                        abdomen. Presenta una herida abierta con exposición de asas intestinales.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>A:</strong> Vía aérea permeable.</li>
                                            <li><strong>B:</strong> FR 22/min, superficial.</li>
                                            <li><strong>C:</strong> FC 115/min, TA 100/60 mmHg. Piel pálida y sudorosa.
                                            </li>
                                            <li><strong>D:</strong> Responde a estímulos verbales, desorientado en
                                                tiempo.
                                            </li>
                                            <li><strong>E:</strong> Herida abdominal de ~8 cm en cuadrante inferior
                                                izquierdo con asas intestinales visibles y expuestas. No hay sangrado
                                                masivo activo de la herida en sí, pero sí de los tejidos circundantes.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                                            (AAOS):</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar BSI y seguridad de la escena.</li>
                                            <li>NO intentar reintroducir los órganos expuestos en la cavidad
                                                abdominal.
                                            </li>
                                            <li>NO aplicar presión directa sobre los órganos eviscerados.</li>
                                            <li>Cubrir los órganos expuestos con un apósito estéril grande humedecido
                                                con solución salina estéril.
                                            </li>
                                            <li>Luego, cubrir el apósito húmedo con un vendaje oclusivo seco y grande
                                                (ej. plástico limpio o un campo estéril seco) para mantener la humedad y
                                                el calor, y para prevenir mayor contaminación. Asegurar los bordes del
                                                vendaje oclusivo.
                                            </li>
                                            <li>Administrar oxígeno a alto flujo.</li>
                                            <li>Tratar para shock: mantener al paciente caliente, colocar en posición
                                                supina con las rodillas flexionadas si ayuda a reducir la tensión en el
                                                abdomen (si no hay otras lesiones que lo contraindiquen).
                                            </li>
                                            <li>Establecer acceso IV según protocolo y considerar la administración de
                                                fluidos si hay signos de hipoperfusión.
                                            </li>
                                            <li>Traslado rápido y urgente al centro de trauma apropiado.</li>
                                        </ol>
                                    </div>
                                </div>

                            </div>
                        )}

                        {/* FAQ Section */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>

                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx} as="div" className="border rounded-lg overflow-hidden">
                                        {({open}) => ( // Type inference for open and return type
                                            <React.Fragment>
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
                                            </React.Fragment>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        </section>
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="soft-tissue" 
                            titulo="Foro de Discusión - Soft Tissue"
                        />

                        

                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales para Lesiones de
                                Tejido Blando</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal y
                                        complementaria</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición).
                                            Jones & Bartlett Learning. (Referencia principal para este módulo)
                                        </li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición). (Relevante para el manejo de trauma en tejidos blandos)
                                        </li>
                                        <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.
                                            (Principios generales aplicables en el manejo del paciente traumatizado)
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea (URLs a
                                        verificar/actualizar)</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/trauma" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre manejo de trauma y heridas</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/category/trauma/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de trauma y cuidado de heridas</a></li>
                                        <li><a href="https://www.stopthebleed.org" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">Stop
                                            the Bleed - Recursos para el control de hemorragias</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Videos educativos (buscar listas de reproducción sobre trauma/heridas)</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Medscape - Referencias médicas, información sobre medicamentos y
                                            calculadoras
                                        </li>
                                        <li>Guías de Práctica Clínica para Trauma (buscar en tiendas de apps) -
                                            Protocolos y guías actualizadas
                                        </li>
                                        <li>Simuladores de Casos de Trauma (buscar en tiendas de apps) - Para practicar
                                            escenarios de lesiones de tejidos blandos
                                        </li>
                                        <li>Paramedicine Clinical Guidelines - Guías clínicas y referencias para
                                            paramédicos
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        </SEOWrapper>
    );
}

