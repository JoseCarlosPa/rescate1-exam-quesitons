import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ReanimateSvb.questions.ts";
import {FaHandHoldingMedical, FaExclamationTriangle, FaHeartbeat, FaUserMd, FaFirstAid} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning, MdSpeed} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsStopwatch} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiActivity, FiClock} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function ReanimateSvb() {
    const [activeTab, setActiveTab] = useState<'overview' | 'algorithm' | 'techniques' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Reanimación Cardiopulmonar (RCP) - Soporte Vital Básico | Guía EMT Completa"
            description="Guía completa de RCP y Soporte Vital Básico para EMT: algoritmos, técnicas, cadena de supervivencia, desfibrilación y casos clínicos. Aprende las maniobras que salvan vidas."
            keywords="RCP, reanimación cardiopulmonar, soporte vital básico, SVB, paro cardíaco, desfibrilación, DEA, compresiones torácicas, cadena de supervivencia, emergencias médicas, casos clínicos"
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
                            <FaHandHoldingMedical className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Reanimación: Soporte Vital Básico (SVB)</h1>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to={`${AllRoutes.REANIMATE_SVB}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <a href="https://www.heart.org/es/cpr" target="_blank" rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos AHA</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1pbbYSd30hpY_78U7rxiQn2HQHaqM3gqE/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
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
                                onClick={() => setActiveTab('algorithm')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'algorithm' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Algoritmo SVB
                            </button>
                            <button
                                onClick={() => setActiveTab('techniques')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'techniques' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Técnicas y Dispositivos
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
                                {/* Importancia crítica del RCP */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">¡El RCP Salva Vidas!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        El Soporte Vital Básico es el conjunto de maniobras destinadas a <strong>mantener la circulación y oxigenación</strong> 
                                        hasta que llegue ayuda avanzada. Un RCP de alta calidad puede <span className="text-red-600 font-bold">triplicar</span> 
                                        las posibilidades de supervivencia.
                                    </p>
                                    <div className="grid md:grid-cols-4 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">0-4 min</p>
                                            <p className="text-sm">RCP inmediato</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FiActivity className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">4-6 min</p>
                                            <p className="text-sm">Daño cerebral</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">6-10 min</p>
                                            <p className="text-sm">Daño severo</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaExclamationTriangle className="w-8 h-8 text-black mx-auto mb-2"/>
                                            <p className="font-bold text-black">+10 min</p>
                                            <p className="text-sm">Muerte cerebral</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Cadena de Supervivencia */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Cadena de Supervivencia - Cada Eslabón Cuenta
                                    </h2>
                                    <div className="grid md:grid-cols-5 gap-4 mb-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border text-center">
                                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white font-bold text-xl">1</span>
                                            </div>
                                            <h3 className="font-bold text-blue-700 mb-2">Reconocimiento</h3>
                                            <p className="text-sm text-gray-600">Identificar paro cardíaco y activar SEM</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border text-center">
                                            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white font-bold text-xl">2</span>
                                            </div>
                                            <h3 className="font-bold text-green-700 mb-2">RCP Inmediato</h3>
                                            <p className="text-sm text-gray-600">Compresiones de alta calidad</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border text-center">
                                            <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white font-bold text-xl">3</span>
                                            </div>
                                            <h3 className="font-bold text-yellow-700 mb-2">Desfibrilación</h3>
                                            <p className="text-sm text-gray-600">DEA lo antes posible</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border text-center">
                                            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white font-bold text-xl">4</span>
                                            </div>
                                            <h3 className="font-bold text-purple-700 mb-2">SVA</h3>
                                            <p className="text-sm text-gray-600">Soporte vital avanzado</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border text-center">
                                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <span className="text-white font-bold text-xl">5</span>
                                            </div>
                                            <h3 className="font-bold text-red-700 mb-2">Post-Paro</h3>
                                            <p className="text-sm text-gray-600">Cuidados especializados</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src="/chain.png" alt="Cadena de supervivencia" className="max-h-48 rounded shadow" />
                                    </div>
                                </div>

                                {/* Estadísticas clave */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FaHeartbeat className="w-6 h-6 text-blue-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-blue-800">Estadísticas que Debes Conocer</h3>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                                            <p className="text-gray-700">de paros cardíacos ocurren en el hogar</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
                                            <p className="text-gray-700">de supervivencia sin RCP inmediato</p>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                                            <p className="text-gray-700">de supervivencia con RCP de calidad</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Principios Fundamentales del SVB</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Verificar seguridad de la escena</li>
                                                <li>Comprobar respuesta y respiración</li>
                                                <li>Pedir ayuda inmediatamente</li>
                                                <li>Iniciar compresiones de calidad</li>
                                                <li>Usar DEA en cuanto esté disponible</li>
                                                <li>Minimizar interrupciones</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dudar en iniciar RCP</li>
                                                <li>Hacer compresiones superficiales</li>
                                                <li>Interrumpir innecesariamente</li>
                                                <li>Tocar al paciente durante análisis DEA</li>
                                                <li>Ventilar excesivamente</li>
                                                <li>Rendirse antes de que llegue ayuda</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'algorithm' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
                                    Algoritmo de Soporte Vital Básico (SVB) - AHA 2020
                                </h2>

                                {/* Algoritmo visual paso a paso */}
                                <div className="space-y-6">
                                    <div className="flex justify-center mb-6">
                                        <img src="/bls.jpg" alt="Algoritmo SVB" className="max-h-80 rounded shadow" />
                                    </div>

                                    {/* Pasos detallados */}
                                    <div className="grid gap-4">
                                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-bold">1</span>
                                                </div>
                                                <h3 className="font-bold text-red-700">Verificar Seguridad y Respuesta</h3>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 ml-11">
                                                <li>Asegurar la escena (tráfico, fuego, violencia)</li>
                                                <li>Tocar hombros y gritar "¿Está bien?"</li>
                                                <li>Verificar si respira normalmente (no más de 10 segundos)</li>
                                            </ul>
                                        </div>

                                        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-bold">2</span>
                                                </div>
                                                <h3 className="font-bold text-orange-700">Activar Sistema de Emergencias</h3>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 ml-11">
                                                <li>Llamar al 911 o pedir a alguien que lo haga</li>
                                                <li>Solicitar DEA si está disponible</li>
                                                <li>Si está solo con teléfono: activar altavoz</li>
                                            </ul>
                                        </div>

                                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-bold">3</span>
                                                </div>
                                                <h3 className="font-bold text-green-700">Verificar Pulso (Solo Personal Entrenado)</h3>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 ml-11">
                                                <li>Pulso carotídeo en adultos (máximo 10 segundos)</li>
                                                <li>Si no hay pulso o no está seguro: iniciar RCP</li>
                                                <li>Personal no entrenado: si no respira = RCP</li>
                                            </ul>
                                        </div>

                                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-bold">4</span>
                                                </div>
                                                <h3 className="font-bold text-blue-700">Iniciar Compresiones Torácicas</h3>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 ml-11">
                                                <li>Posición: centro del pecho, entre pezones</li>
                                                <li>Profundidad: al menos 5 cm, no más de 6 cm</li>
                                                <li>Frecuencia: 100-120 compresiones por minuto</li>
                                                <li>Permitir descompresión completa</li>
                                            </ul>
                                        </div>

                                        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-bold">5</span>
                                                </div>
                                                <h3 className="font-bold text-purple-700">Ventilaciones (Si está entrenado)</h3>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 ml-11">
                                                <li>Relación 30:2 en adultos</li>
                                                <li>Apertura de vía aérea: frente-mentón</li>
                                                <li>Ventilaciones de 1 segundo cada una</li>
                                                <li>Ver elevación del pecho</li>
                                            </ul>
                                        </div>

                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                            <div className="flex items-center mb-2">
                                                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-bold">6</span>
                                                </div>
                                                <h3 className="font-bold text-yellow-700">Usar DEA</h3>
                                            </div>
                                            <ul className="list-disc list-inside text-gray-700 ml-11">
                                                <li>Encender y seguir instrucciones de voz</li>
                                                <li>Colocar parches según diagrama</li>
                                                <li>Asegurar que nadie toque al paciente</li>
                                                <li>Presionar botón de descarga si se indica</li>
                                                <li>Reanudar RCP inmediatamente después</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Recordatorios importantes */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                                            <BsStopwatch className="w-5 h-5 mr-2"/>
                                            Recordatorios de Tiempo Críticos
                                        </h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="text-center p-3 bg-white rounded">
                                                <FiClock className="w-6 h-6 text-blue-500 mx-auto mb-2"/>
                                                <p className="font-bold">≤ 10 seg</p>
                                                <p className="text-sm text-gray-600">Verificar pulso</p>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded">
                                                <MdSpeed className="w-6 h-6 text-green-500 mx-auto mb-2"/>
                                                <p className="font-bold">100-120/min</p>
                                                <p className="text-sm text-gray-600">Compresiones</p>
                                            </div>
                                            <div className="text-center p-3 bg-white rounded">
                                                <FaFirstAid className="w-6 h-6 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold">≤ 10 seg</p>
                                                <p className="text-sm text-gray-600">Cambio de rescatista</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'techniques' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                    Técnicas y Dispositivos en SVB
                                </h2>

                                {/* Técnicas de compresión */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                        <FaHandHoldingMedical className="w-5 h-5 mr-2"/>
                                        Compresiones Torácicas de Alta Calidad
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-700 mb-3">Posicionamiento Correcto:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span><strong>Ubicación:</strong> Centro del pecho, mitad inferior del esternón</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span><strong>Manos:</strong> Talón de una mano, la otra entrelazada</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span><strong>Brazos:</strong> Rectos, hombros sobre las manos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span><strong>Cuerpo:</strong> Usar peso corporal, no solo brazos</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-700 mb-3">Parámetros de Calidad:</h4>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                    <p className="font-bold text-green-700">Profundidad</p>
                                                    <p className="text-sm">Al menos 5 cm, no más de 6 cm</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                                                    <p className="font-bold text-orange-700">Frecuencia</p>
                                                    <p className="text-sm">100-120 compresiones/minuto</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                                                    <p className="font-bold text-purple-700">Descompresión</p>
                                                    <p className="text-sm">Completa entre compresiones</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                                    <p className="font-bold text-red-700">Interrupciones</p>
                                                    <p className="text-sm">Menos de 10 segundos</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ventilación y vía aérea */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-green-800 mb-4">Manejo de Vía Aérea y Ventilación</h3>
                                    <div className="grid lg:grid-cols-3 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-3">Apertura de Vía Aérea:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li>• <strong>Frente-mentón:</strong> Paciente no traumático</li>
                                                <li>• <strong>Elevación mandibular:</strong> Sospecha de trauma</li>
                                                <li>• <strong>Aspiración:</strong> Si hay secreciones</li>
                                                <li>• <strong>Dispositivos:</strong> OPA/NPA según indicación</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-3">Técnicas de Ventilación:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li>• <strong>Boca-barrera:</strong> Con mascarilla</li>
                                                <li>• <strong>BVM:</strong> Bolsa-válvula-mascarilla</li>
                                                <li>• <strong>Relación:</strong> 30:2 en adultos</li>
                                                <li>• <strong>Duración:</strong> 1 segundo por ventilación</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-3">Signos de Ventilación Efectiva:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li>• Elevación visible del pecho</li>
                                                <li>• Resistencia y compliance normales</li>
                                                <li>• Mejora en color de piel</li>
                                                <li>• Saturación de oxígeno creciente</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* DEA y Desfibrilación */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-yellow-800 mb-4">Desfibrilador Externo Automático (DEA)</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-700 mb-3">Pasos para Usar DEA:</h4>
                                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                <li>Encender el DEA (automático o botón)</li>
                                                <li>Exponer el pecho del paciente</li>
                                                <li>Colocar parches según diagrama</li>
                                                <li>Conectar cables si es necesario</li>
                                                <li>Alejarse durante el análisis</li>
                                                <li>Seguir instrucciones de voz</li>
                                                <li>Reanudar RCP inmediatamente</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-700 mb-3">Consideraciones Especiales:</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li>• <strong>Agua:</strong> Secar el pecho completamente</li>
                                                <li>• <strong>Marcapasos:</strong> Colocar parches a 2.5 cm</li>
                                                <li>• <strong>Medicamentos:</strong> Remover parches transdérmicos</li>
                                                <li>• <strong>Vello:</strong> Afeitar si interfiere con adhesión</li>
                                                <li>• <strong>Niños:</strong> Usar parches pediátricos si disponibles</li>
                                                <li>• <strong>Embarazo:</strong> Misma colocación, inclinar a la izquierda</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Trabajo en equipo */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-purple-800 mb-4">RCP en Equipo - Roles y Coordinación</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded border">
                                            <h4 className="font-bold text-purple-700 mb-2">Líder del Equipo</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Coordina las actividades</li>
                                                <li>• Supervisa calidad del RCP</li>
                                                <li>• Comunica con servicios médicos</li>
                                                <li>• Toma decisiones clínicas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded border">
                                            <h4 className="font-bold text-purple-700 mb-2">Rescatista Principal</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Realiza compresiones torácicas</li>
                                                <li>• Cuenta en voz alta</li>
                                                <li>• Cambia cada 2 minutos</li>
                                                <li>• Mantiene calidad constante</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded border">
                                            <h4 className="font-bold text-purple-700 mb-2">Rescatista de Vía Aérea</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Maneja vía aérea</li>
                                                <li>• Proporciona ventilaciones</li>
                                                <li>• Opera el DEA</li>
                                                <li>• Prepara medicamentos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Errores comunes */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                        Errores Comunes que Debes Evitar
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-2">En Compresiones:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Posición incorrecta de manos</li>
                                                <li>Profundidad insuficiente (&lt;5 cm)</li>
                                                <li>Frecuencia muy lenta o rápida</li>
                                                <li>No permitir descompresión completa</li>
                                                <li>Inclinarse sobre el pecho</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-2">En Ventilación:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Ventilaciones muy rápidas o fuertes</li>
                                                <li>No abrir vía aérea adecuadamente</li>
                                                <li>Interrupciones prolongadas</li>
                                                <li>No verificar elevación del pecho</li>
                                                <li>Hiperintensión en trauma cervical</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                    <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
                                    Casos Clínicos y Escenarios de Práctica
                                </h2>

                                {/* Caso 1: Paro cardíaco en adulto */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-3 text-red-700 flex items-center">
                                        <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
                                        Paro Cardíaco en Vía Pública - Adulto
                                    </h3>
                                    <div className="bg-white p-4 rounded mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 italic mb-4">
                                            Hombre de 55 años colapsa súbitamente mientras camina en la calle. Un transeúnte lo ve caer 
                                            y pide ayuda. Al llegar, el paciente no responde, no respira normalmente y no tiene pulso palpable.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-green-700 mb-2">Manejo Correcto:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li>Verificar seguridad de la escena (tráfico)</li>
                                                    <li>Confirmar ausencia de respuesta</li>
                                                    <li>Activar SEM (911) y solicitar DEA</li>
                                                    <li>Iniciar compresiones inmediatamente</li>
                                                    <li>RCP continuo hasta llegada del DEA</li>
                                                    <li>Usar DEA según protocolo</li>
                                                    <li>Continuar hasta llegada de SVM</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-blue-700 mb-2">Puntos Clave:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Tiempo es crítico - no dudar</li>
                                                    <li>Compresiones de alta calidad</li>
                                                    <li>Minimizar interrupciones</li>
                                                    <li>Coordinar con otros rescatistas</li>
                                                    <li>Comunicación constante con SEM</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded">
                                        <h5 className="font-semibold text-yellow-800 mb-2">Reflexión y Aprendizaje:</h5>
                                        <p className="text-gray-700">
                                            Este es el escenario más común de paro cardíaco. La clave está en el reconocimiento rápido 
                                            y la acción inmediata. El retraso en iniciar RCP reduce significativamente las posibilidades de supervivencia.
                                        </p>
                                    </div>
                                </div>

                                {/* Caso 2: Paro presenciado en casa */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-3 text-blue-700 flex items-center">
                                        <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
                                        Paro Presenciado en Domicilio
                                    </h3>
                                    <div className="bg-white p-4 rounded mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 italic mb-4">
                                            Mujer de 68 años con antecedentes cardíacos colapsa en casa durante la cena. Su esposo inmediatamente 
                                            llama al 911 y comienza RCP básico. Llegan EMTs tras 8 minutos de RCP familiar.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-green-700 mb-2">Manejo al Llegar:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li>Evaluar la escena rápidamente</li>
                                                    <li>Relevar al familiar amablemente</li>
                                                    <li>Verificar calidad del RCP previo</li>
                                                    <li>Colocar DEA inmediatamente</li>
                                                    <li>Seguir protocolo estándar</li>
                                                    <li>Preparar para transporte</li>
                                                    <li>Comunicar con hospital receptor</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-purple-700 mb-2">Consideraciones Especiales:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Valorar el RCP previo realizado</li>
                                                    <li>Mantener calma del familiar</li>
                                                    <li>Historia clínica rápida</li>
                                                    <li>Medicamentos del paciente</li>
                                                    <li>Tiempo de paro conocido</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded">
                                        <h5 className="font-semibold text-green-800 mb-2">Ventaja del RCP Inmediato:</h5>
                                        <p className="text-gray-700">
                                            El RCP iniciado inmediatamente por testigos aumenta las posibilidades de supervivencia. 
                                            Tu papel es mejorar la calidad del RCP y agregar desfibrilación temprana.
                                        </p>
                                    </div>
                                </div>

                                {/* Caso 3: Paro pediátrico */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-3 text-green-700 flex items-center">
                                        <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">3</span>
                                        Paro Respiratorio en Niño
                                    </h3>
                                    <div className="bg-white p-4 rounded mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 italic mb-4">
                                            Niño de 6 años encontrado inconsciente en la piscina por sus padres. Fue sacado del agua 
                                            inmediatamente. No responde, respiración ausente, pulso débil pero presente.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-green-700 mb-2">Protocolo Pediátrico:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li>Abrir vía aérea cuidadosamente</li>
                                                    <li>5 ventilaciones de rescate iniciales</li>
                                                    <li>Verificar pulso (braquial/carotídeo)</li>
                                                    <li>Si hay pulso: ventilación 12-20/min</li>
                                                    <li>Si no hay pulso: RCP 15:2</li>
                                                    <li>DEA pediátrico si disponible</li>
                                                    <li>Transporte con ventilación continua</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-orange-700 mb-2">Diferencias Pediátricas:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Paro respiratorio más común</li>
                                                    <li>Anatomía diferente (cabeza grande)</li>
                                                    <li>Compresiones con una mano</li>
                                                    <li>Profundidad 1/3 del tórax</li>
                                                    <li>Relación 15:2 (dos rescatistas)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded">
                                        <h5 className="font-semibold text-blue-800 mb-2">Prevención de Ahogamiento:</h5>
                                        <p className="text-gray-700">
                                            Los ahogamientos en niños son prevenibles. Como EMT, también educas sobre supervisión constante, 
                                            barreras físicas y enseñanza de natación.
                                        </p>
                                    </div>
                                </div>

                                {/* Caso 4: Sobredosis con RCP */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold mb-3 text-purple-700 flex items-center">
                                        <span className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">4</span>
                                        Paro por Sobredosis de Opioides
                                    </h3>
                                    <div className="bg-white p-4 rounded mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                        <p className="text-gray-700 italic mb-4">
                                            Adulto joven encontrado inconsciente en baño público. Evidencia de uso de drogas presente. 
                                            Respiración muy superficial e irregular, cianosis peribucal, pulso débil.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-green-700 mb-2">Manejo Integrado:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li>Seguridad de la escena (drogas/jeringuillas)</li>
                                                    <li>Evaluación rápida ABC</li>
                                                    <li>Ventilación asistida inmediata</li>
                                                    <li>Administrar Naloxona (si disponible)</li>
                                                    <li>Preparar para RCP completo</li>
                                                    <li>Monitor continuo post-Naloxona</li>
                                                    <li>Transporte para monitoreo hospitalario</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-red-700 mb-2">Precauciones Especiales:</h5>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Seguridad personal (agujas, contaminación)</li>
                                                    <li>Riesgo de aspiración (vómito)</li>
                                                    <li>Posible politraumatismo asociado</li>
                                                    <li>Re-narcotización post-Naloxona</li>
                                                    <li>Agitación al despertar</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded">
                                        <h5 className="font-semibold text-orange-800 mb-2">Enfoque Compasivo:</h5>
                                        <p className="text-gray-700">
                                            La adicción es una enfermedad. Mantén profesionalismo y compasión. Tu objetivo es salvar vidas, 
                                            no juzgar. Estos pacientes tienen familias que los aman.
                                        </p>
                                    </div>
                                </div>

                                {/* Ejercicios de simulación */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Ejercicios de Práctica y Simulación</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-3">Simulación Individual:</h4>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>• Practica secuencia completa en maniquí</li>
                                                <li>• Cronometra tus intervenciones</li>
                                                <li>• Practica colocación de DEA</li>
                                                <li>• Simula llamadas a control médico</li>
                                                <li>• Pratica cambios de rescatista</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-3">Simulación en Equipo:</h4>
                                            <ul className="space-y-2 text-gray-600">
                                                <li>• Roles rotativos entre compañeros</li>
                                                <li>• Comunicación efectiva durante RCP</li>
                                                <li>• Coordinación con otros servicios</li>
                                                <li>• Escenarios con complicaciones</li>
                                                <li>• Debriefing post-simulación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Panel de Tips Rápidos para Aprendizaje */}
                    <section className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-sm mb-8 border-l-4 border-orange-500">
                        <h2 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                            <BsLightbulb className="w-6 h-6 mr-2"/>
                            Tips Rápidos para Recordar en Campo
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-center mb-2">
                                    <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto"/>
                                </div>
                                <h3 className="font-bold text-red-700 text-center mb-2">Regla de 10</h3>
                                <p className="text-sm text-gray-700 text-center">
                                    ≤10 seg para verificar pulso
                                    <br/>≤10 seg para cambio de rescatista
                                    <br/>≤10 seg interrupciones máx
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-center mb-2">
                                    <FaHeartbeat className="w-8 h-8 text-blue-500 mx-auto"/>
                                </div>
                                <h3 className="font-bold text-blue-700 text-center mb-2">30:2</h3>
                                <p className="text-sm text-gray-700 text-center">
                                    30 compresiones
                                    <br/>2 ventilaciones
                                    <br/>Ritmo constante
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-center mb-2">
                                    <MdSpeed className="w-8 h-8 text-green-500 mx-auto"/>
                                </div>
                                <h3 className="font-bold text-green-700 text-center mb-2">100-120</h3>
                                <p className="text-sm text-gray-700 text-center">
                                    Compresiones por minuto
                                    <br/>Ritmo de "Staying Alive"
                                    <br/>Profundidad 5-6 cm
                                </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <div className="text-center mb-2">
                                    <BsStopwatch className="w-8 h-8 text-purple-500 mx-auto"/>
                                </div>
                                <h3 className="font-bold text-purple-700 text-center mb-2">Cada 2 min</h3>
                                <p className="text-sm text-gray-700 text-center">
                                    Cambiar rescatista
                                    <br/>Verificar pulso
                                    <br/>Analizar ritmo (DEA)
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 bg-white p-4 rounded-lg">
                            <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                                <FaUserMd className="w-4 h-4 mr-2"/>
                                Frase Mnemónica: "PARC"
                            </h4>
                            <div className="grid md:grid-cols-4 gap-4 text-sm">
                                <div className="text-center">
                                    <span className="font-bold text-blue-600">P</span>osición correcta
                                </div>
                                <div className="text-center">
                                    <span className="font-bold text-green-600">A</span>profundidad adecuada
                                </div>
                                <div className="text-center">
                                    <span className="font-bold text-orange-600">R</span>itmo constante
                                </div>
                                <div className="text-center">
                                    <span className="font-bold text-purple-600">C</span>ambio frecuente
                                </div>
                            </div>
                        </div>
                    </section>

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
                                    <li><a href="https://cpr.heart.org/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AHA - Recursos de RCP y SVB</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
                                    <li><a href="https://www.ems1.com/cpr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre RCP</a></li>
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

