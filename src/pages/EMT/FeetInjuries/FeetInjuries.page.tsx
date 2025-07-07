import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./FeetInjuries.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdWarning, MdCheckCircle, MdOutlineTimer} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {GiMorgueFeet, GiBrokenBone, GiLegArmor} from "react-icons/gi";
import {FaExclamationTriangle, FaFirstAid, FaHeartbeat, FaEye} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye} from "react-icons/fi";
import {RiEmotionSadLine} from "react-icons/ri";
import {AiOutlineCheck} from "react-icons/ai";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function FeetInjuries(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return(
        <SEOWrapper
            title="Lesiones Ortopédicas EMT | Fracturas, Luxaciones y Manejo Prehospitalario"
            description="Guía completa sobre lesiones ortopédicas para Técnicos en Atención Médica Prehospitalaria: evaluación, clasificación, inmovilización, manejo de fracturas expuestas, luxaciones, esguinces y casos clínicos prácticos."
            keywords="lesiones ortopédicas, fracturas, luxaciones, esguinces, EMT, paramédicos, inmovilización, férulas, manejo prehospitalario, trauma ortopédico, evaluación neurovascular, síndrome compartimental, casos clínicos, emergencias médicas"
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
                            <GiMorgueFeet className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones Ortopédicas</h1>
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
                            to={`${AllRoutes.FEET_INJURIES}/exam`}
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
                        <a href="https://drive.google.com/file/d/1Q2OoOsnAwDOagRetzk2_5x-gVg3tuxDG/view?usp=share_link"
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
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3" />
                                        <h2 className="text-2xl font-bold text-red-700">¡Emergencia Ortopédica!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las lesiones ortopédicas pueden ser <strong>potencialmente mortales</strong> cuando comprometen 
                                        la circulación, causan sangrado masivo o afectan estructuras vitales. El tiempo es crítico 
                                        para preservar la función y prevenir complicaciones.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2" />
                                            <p className="font-bold text-red-600">Minutos</p>
                                            <p className="text-sm">Pérdida de irrigación</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                            <p className="font-bold text-orange-600">Horas</p>
                                            <p className="text-sm">Daño irreversible</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <RiEmotionSadLine className="w-8 h-8 text-red-700 mx-auto mb-2" />
                                            <p className="font-bold text-red-700">Días</p>
                                            <p className="text-sm">Discapacidad permanente</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación sistemática */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500" />
                                        Evaluación Sistemática de Lesiones Ortopédicas
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">INSPECCIÓN</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Deformidad obvia</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Heridas abiertas</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Edema e inflamación</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600" />
                                                    <span>Coloración anormal</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">PALPACIÓN</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600" />
                                                    <span>Dolor localizado</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600" />
                                                    <span>Crepitación ósea</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600" />
                                                    <span>Temperatura local</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600" />
                                                    <span>Pulsos distales</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">FUNCIÓN</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600" />
                                                    <span>Movimiento activo</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600" />
                                                    <span>Movimiento pasivo</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600" />
                                                    <span>Sensibilidad</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600" />
                                                    <span>Fuerza muscular</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Traslado URGENTE</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Compromiso Vascular:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Ausencia de pulso distal</li>
                                                <li>Extremidad fría y pálida</li>
                                                <li>Relleno capilar &gt; 2 segundos</li>
                                                <li>Parestesias o entumecimiento</li>
                                                <li>Parálisis distal</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Compromiso Sistémico:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Signos de shock (hipotensión, taquicardia)</li>
                                                <li>Sangrado activo significativo</li>
                                                <li>Fractura expuesta con hueso visible</li>
                                                <li>Deformidad grave</li>
                                                <li>Síndrome compartimental</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Clasificación de lesiones */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos de Lesiones Ortopédicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <div className="flex items-center mb-3">
                                                <GiBrokenBone className="w-6 h-6 text-red-600 mr-2" />
                                                <h3 className="font-bold text-lg text-red-700">Fracturas</h3>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded border">
                                                    <h4 className="font-semibold text-red-600">Cerrada</h4>
                                                    <p className="text-sm text-gray-600">Piel intacta, menor riesgo de infección</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border">
                                                    <h4 className="font-semibold text-red-600">Expuesta</h4>
                                                    <p className="text-sm text-gray-600">Comunicación con exterior, alto riesgo</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border">
                                                    <h4 className="font-semibold text-red-600">Conminuta</h4>
                                                    <p className="text-sm text-gray-600">Múltiples fragmentos óseos</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <div className="flex items-center mb-3">
                                                <GiLegArmor className="w-6 h-6 text-blue-600 mr-2" />
                                                <h3 className="font-bold text-lg text-blue-700">Lesiones Articulares</h3>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded border">
                                                    <h4 className="font-semibold text-blue-600">Luxación</h4>
                                                    <p className="text-sm text-gray-600">Desplazamiento articular completo</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border">
                                                    <h4 className="font-semibold text-blue-600">Subluxación</h4>
                                                    <p className="text-sm text-gray-600">Desplazamiento parcial</p>
                                                </div>
                                                <div className="bg-white p-3 rounded border">
                                                    <h4 className="font-semibold text-blue-600">Esguince</h4>
                                                    <p className="text-sm text-gray-600">Lesión ligamentaria</p>
                                                </div>
                                            </div>
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
                                                <li>Evaluar circulación, sensibilidad y movimiento</li>
                                                <li>Inmovilizar articulación proximal y distal</li>
                                                <li>Controlar hemorragias activas</li>
                                                <li>Documentar evaluación neurovascular</li>
                                                <li>Reevaluar tras inmovilización</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2" />
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Intentar reducir luxaciones</li>
                                                <li>Realinear fracturas expuestas</li>
                                                <li>Aplicar presión sobre hueso expuesto</li>
                                                <li>Remover objetos empalados</li>
                                                <li>Dar analgésicos sin evaluación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Mnemotécnicos útiles */}
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-purple-600 mr-2" />
                                        <h3 className="text-xl font-bold text-purple-800">Mnemotécnicos para Recordar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg border">
                                            <h4 className="font-bold text-purple-700 mb-2">Las 6 P&apos;s del Síndrome Compartimental</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li><strong>P</strong>ain (Dolor desproporcionado)</li>
                                                <li><strong>P</strong>aresthesias (Hormigueo/entumecimiento)</li>
                                                <li><strong>P</strong>allor (Palidez)</li>
                                                <li><strong>P</strong>aralysis (Parálisis/debilidad)</li>
                                                <li><strong>P</strong>ulselessness (Ausencia de pulso)</li>
                                                <li><strong>P</strong>ressure (Presión en compartimentos)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border">
                                            <h4 className="font-bold text-purple-700 mb-2">RICE para Esguinces</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li><strong>R</strong>est (Reposo)</li>
                                                <li><strong>I</strong>ce (Hielo 15-20 min)</li>
                                                <li><strong>C</strong>ompression (Compresión)</li>
                                                <li><strong>E</strong>levation (Elevación)</li>
                                            </ul>
                                            <p className="text-xs text-purple-600 mt-2">Protocolo estándar para lesiones de tejidos blandos</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                {/* Anatomía interactiva */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiBrokenBone className="w-6 h-6 mr-2 text-orange-500" />
                                        Anatomía y Fisiología del Sistema Musculoesquelético
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Componentes Óseos</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Hueso Cortical</h4>
                                                            <p className="text-sm text-gray-600">Capa externa densa, proporciona resistencia estructural</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Hueso Esponjoso</h4>
                                                            <p className="text-sm text-gray-600">Interior poroso, contiene médula ósea</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Periostio</h4>
                                                            <p className="text-sm text-gray-600">Membrana que cubre el hueso, rica en vasos sanguíneos</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                                                <h3 className="text-xl font-bold text-green-700 mb-4">Tejidos Blandos</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Músculos</h4>
                                                            <p className="text-sm text-gray-600">Generan movimiento y estabilidad</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Tendones</h4>
                                                            <p className="text-sm text-gray-600">Conectan músculo con hueso</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Ligamentos</h4>
                                                            <p className="text-sm text-gray-600">Conectan hueso con hueso</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                                <h3 className="text-xl font-bold text-purple-700 mb-4">Articulaciones</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Sinoviales</h4>
                                                            <p className="text-sm text-gray-600">Móviles, con líquido sinovial</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Cartilaginosas</h4>
                                                            <p className="text-sm text-gray-600">Semimóviles, unidas por cartílago</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                                        <div>
                                                            <h4 className="font-semibold">Fibrosas</h4>
                                                            <p className="text-sm text-gray-600">Inmóviles, unidas por tejido fibroso</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-start">
                                            <div className="text-center">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Human_skeleton_front_es.svg"
                                                    alt="Anatomía del sistema musculoesquelético"
                                                    className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                                                />
                                                <p className="text-sm text-gray-600 italic">Sistema musculoesquelético completo</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Datos críticos de anatomía */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2" />
                                        <h3 className="text-xl font-bold text-red-800">Datos Críticos - Irrigación y Inervación</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-3">Irrigación Sanguínea</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Arteria femoral: irriga extremidad inferior</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Arteria braquial: irriga extremidad superior</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Circulación colateral: vías alternativas</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-3">Inervación</h4>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaEye className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Nervio ciático: extremidad inferior</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaEye className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Nervio radial: extremidad superior</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaEye className="w-4 h-4 mt-1 mr-2 text-red-600" />
                                                    <span>Compromiso = pérdida de función</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación neurovascular */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Evaluación Neurovascular - Las 5 P&apos;s</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-red-700 mb-2">Pain (Dolor)</h3>
                                            <p className="text-sm text-gray-600">Desproporcionado al tipo de lesión</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-orange-700 mb-2">Paresthesias</h3>
                                            <p className="text-sm text-gray-600">Hormigueo, entumecimiento</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-yellow-700 mb-2">Pallor (Palidez)</h3>
                                            <p className="text-sm text-gray-600">Extremidad fría y pálida</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-green-700 mb-2">Paralysis (Parálisis)</h3>
                                            <p className="text-sm text-gray-600">Pérdida de movimiento</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-blue-700 mb-2">Pulselessness</h3>
                                            <p className="text-sm text-gray-600">Ausencia de pulso distal</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-purple-700 mb-2">Pressure (Presión)</h3>
                                            <p className="text-sm text-gray-600">Compartimentos tensos</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Patofisiología de las fracturas */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Patofisiología de las Fracturas</h2>
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
                                        <h3 className="text-xl font-bold text-indigo-700 mb-4">Proceso de Curación Ósea</h3>
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-white p-4 rounded border text-center">
                                                <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                                                <h4 className="font-semibold text-red-600">Fase 1</h4>
                                                <p className="text-xs text-gray-600">Hematoma e inflamación</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border text-center">
                                                <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                                                <h4 className="font-semibold text-orange-600">Fase 2</h4>
                                                <p className="text-xs text-gray-600">Formación de callo blando</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border text-center">
                                                <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                                                <h4 className="font-semibold text-yellow-600">Fase 3</h4>
                                                <p className="text-xs text-gray-600">Formación de callo duro</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border text-center">
                                                <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                                                <h4 className="font-semibold text-green-600">Fase 4</h4>
                                                <p className="text-xs text-gray-600">Remodelación</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                {/* Algoritmo de manejo */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FaFirstAid className="w-6 h-6 text-green-600 mr-2" />
                                        <h2 className="text-2xl font-bold text-green-800">Algoritmo de Manejo Prehospitalario</h2>
                                    </div>
                                    <div className="grid md:grid-cols-5 gap-3">
                                        <div className="bg-white p-4 rounded-lg border text-center">
                                            <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">1</div>
                                            <h3 className="font-semibold text-red-600">Evaluación</h3>
                                            <p className="text-xs text-gray-600">ABC, estado neurológico</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border text-center">
                                            <div className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">2</div>
                                            <h3 className="font-semibold text-orange-600">Control</h3>
                                            <p className="text-xs text-gray-600">Hemorragias activas</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border text-center">
                                            <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">3</div>
                                            <h3 className="font-semibold text-yellow-600">Evaluación</h3>
                                            <p className="text-xs text-gray-600">Neurovascular</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border text-center">
                                            <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">4</div>
                                            <h3 className="font-semibold text-green-600">Inmovilización</h3>
                                            <p className="text-xs text-gray-600">Férulas apropiadas</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border text-center">
                                            <div className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">5</div>
                                            <h3 className="font-semibold text-blue-600">Traslado</h3>
                                            <p className="text-xs text-gray-600">Hospital apropiado</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Técnicas de inmovilización */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Técnicas de Inmovilización</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4">Principios Básicos</h3>
                                            <ul className="space-y-3 text-gray-700">
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                                    <span>Inmovilizar articulación proximal y distal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                                    <span>Evaluar pulso, sensibilidad y movimiento</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                                    <span>Alinear extremidad si no hay resistencia</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                                    <span>Aplicar tracción suave y constante</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                                                    <span>Reevaluar después de inmovilizar</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <h3 className="text-xl font-bold text-red-700 mb-4">Contraindicaciones</h3>
                                            <ul className="space-y-3 text-gray-700">
                                                <li className="flex items-start">
                                                    <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                                                    <span>Fractura expuesta con fragmentos visibles</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                                                    <span>Resistencia significativa al movimiento</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                                                    <span>Pérdida de pulso durante la maniobra</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                                                    <span>Luxaciones (inmovilizar como se encuentra)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                                                    <span>Objetos empalados</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Tipos de férulas */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos de Férulas y Dispositivos</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-green-700 mb-2">Férulas Rígidas</h3>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Tablillas de madera/metal</li>
                                                <li>• Férulas de vacío</li>
                                                <li>• Férulas inflables</li>
                                            </ul>
                                            <p className="text-xs text-green-600 mt-2">Mejor para fracturas de huesos largos</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-blue-700 mb-2">Férulas Flexibles</h3>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Vendajes elásticos</li>
                                                <li>• Cabestrillos</li>
                                                <li>• Férulas SAM</li>
                                            </ul>
                                            <p className="text-xs text-blue-600 mt-2">Ideal para lesiones articulares</p>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                                            <h3 className="font-bold text-purple-700 mb-2">Férulas Especiales</h3>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Férula de tracción</li>
                                                <li>• Collares cervicales</li>
                                                <li>• Tablero espinal</li>
                                            </ul>
                                            <p className="text-xs text-purple-600 mt-2">Para lesiones específicas</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo específico por lesión */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo Específico por Tipo de Lesión</h2>
                                    <div className="space-y-4">
                                        <div className="bg-white border rounded-lg overflow-hidden">
                                            <div className="bg-red-100 px-4 py-3 border-b">
                                                <h3 className="font-bold text-red-700">Fracturas Expuestas</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-2">Manejo inicial:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>1. Controlar hemorragia con presión directa</li>
                                                            <li>2. Cubrir herida con apósito estéril húmedo</li>
                                                            <li>3. NO intentar empujar hueso hacia adentro</li>
                                                            <li>4. Inmovilizar en posición encontrada</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-2">Consideraciones:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Alto riesgo de infección</li>
                                                            <li>• Traslado urgente</li>
                                                            <li>• Antibióticos en hospital</li>
                                                            <li>• Documentar hora de lesión</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white border rounded-lg overflow-hidden">
                                            <div className="bg-blue-100 px-4 py-3 border-b">
                                                <h3 className="font-bold text-blue-700">Luxaciones</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-2">Manejo prehospitalario:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>1. Evaluar pulso distal inmediatamente</li>
                                                            <li>2. Inmovilizar EN LA POSICIÓN ENCONTRADA</li>
                                                            <li>3. NUNCA intentar reducir</li>
                                                            <li>4. Aplicar hielo si es posible</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-2">Signos de alerta:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Pérdida de pulso distal</li>
                                                            <li>• Extremidad fría y pálida</li>
                                                            <li>• Pérdida de sensibilidad</li>
                                                            <li>• Deformidad severa</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-white border rounded-lg overflow-hidden">
                                            <div className="bg-green-100 px-4 py-3 border-b">
                                                <h3 className="font-bold text-green-700">Esguinces y Distensiones</h3>
                                            </div>
                                            <div className="p-4">
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-2">Protocolo RICE:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li><strong>R</strong>eposo - Evitar movimiento</li>
                                                            <li><strong>I</strong>ce - Hielo 15-20 minutos</li>
                                                            <li><strong>C</strong>ompresión - Vendaje elástico</li>
                                                            <li><strong>E</strong>levación - Elevar extremidad</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-2">Grados de severidad:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Grado I: Estiramiento leve</li>
                                                            <li>• Grado II: Desgarro parcial</li>
                                                            <li>• Grado III: Desgarro completo</li>
                                                            <li>• Evaluar necesidad de traslado</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Complicaciones */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                                        <h3 className="text-xl font-bold text-yellow-800">Complicaciones a Vigilar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Inmediatas:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Shock hipovolémico</li>
                                                <li>Daño neurovascular</li>
                                                <li>Síndrome compartimental</li>
                                                <li>Embolia grasa</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Tardías:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Infección</li>
                                                <li>Pseudoartrosis</li>
                                                <li>Rigidez articular</li>
                                                <li>Atrofia muscular</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-purple-600 mr-2" />
                                        <h2 className="text-2xl font-bold text-purple-800">Casos Clínicos Interactivos</h2>
                                    </div>
                                    <p className="text-gray-700">
                                        Analiza cada caso siguiendo el protocolo de evaluación sistemática. 
                                        Piensa paso a paso antes de ver las respuestas.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {/* Caso 1 */}
                                    <div className="bg-white border-2 border-red-200 rounded-lg overflow-hidden">
                                        <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                                            <div className="flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-3" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-red-700">Caso 1: Fractura Expuesta de Tibia</h3>
                                                    <p className="text-red-600 text-sm">Alta prioridad - Traslado urgente</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Escenario:</h4>
                                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                        <p className="text-gray-700 leading-relaxed">
                                                            <strong>Paciente:</strong> Masculino, 25 años, motociclista<br />
                                                            <strong>Mecanismo:</strong> Colisión frontal a 60 km/h<br />
                                                            <strong>Hallazgos:</strong> Deformidad evidente en pierna derecha, 
                                                            hueso visible, sangrado activo moderado, dolor intenso 9/10
                                                        </p>
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Signos vitales:</h4>
                                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• FC: 110 lpm</li>
                                                            <li>• PA: 130/85 mmHg</li>
                                                            <li>• FR: 20 rpm</li>
                                                            <li>• Saturación: 98%</li>
                                                            <li>• Temperatura: 36.8°C</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Evaluación neurovascular:</h4>
                                                    <div className="space-y-3">
                                                        <div className="bg-blue-50 p-3 rounded">
                                                            <h5 className="font-semibold text-blue-700">Circulación:</h5>
                                                            <p className="text-sm text-gray-600">Pulso pedio débil, extremidad fría</p>
                                                        </div>
                                                        <div className="bg-orange-50 p-3 rounded">
                                                            <h5 className="font-semibold text-orange-700">Sensibilidad:</h5>
                                                            <p className="text-sm text-gray-600">Disminuida en dorso del pie</p>
                                                        </div>
                                                        <div className="bg-red-50 p-3 rounded">
                                                            <h5 className="font-semibold text-red-700">Movimiento:</h5>
                                                            <p className="text-sm text-gray-600">Limitado por dolor, no evaluado</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                                                <h4 className="font-bold text-green-800 mb-3">Manejo Correcto:</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-green-700 mb-2">Acciones inmediatas:</h5>
                                                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                                            <li>Control de hemorragia con presión directa</li>
                                                            <li>Cubrir herida con apósito estéril húmedo</li>
                                                            <li>Documentar estado neurovascular</li>
                                                            <li>Inmovilizar extremidad completa</li>
                                                            <li>Acceso venoso y líquidos</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-green-700 mb-2">Consideraciones especiales:</h5>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Traslado a centro de trauma</li>
                                                            <li>• Notificar cirujano ortopédico</li>
                                                            <li>• Fotografiar lesión si es posible</li>
                                                            <li>• Documentar hora exacta de lesión</li>
                                                            <li>• Preparar para posible cirugía</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 2 */}
                                    <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden">
                                        <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                                            <div className="flex items-center">
                                                <GiBrokenBone className="w-6 h-6 text-blue-600 mr-3" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-blue-700">Caso 2: Luxación de Hombro</h3>
                                                    <p className="text-blue-600 text-sm">Prioridad media - Manejo cuidadoso</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Escenario:</h4>
                                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                        <p className="text-gray-700 leading-relaxed">
                                                            <strong>Paciente:</strong> Femenino, 22 años, deportista<br />
                                                            <strong>Mecanismo:</strong> Caída durante voleibol<br />
                                                            <strong>Hallazgos:</strong> Deformidad en hombro derecho, 
                                                            brazo en posición fija, dolor intenso 8/10
                                                        </p>
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Presentación clínica:</h4>
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Brazo en abducción y rotación externa</li>
                                                            <li>• Paciente sostiene brazo con mano contraria</li>
                                                            <li>• Pérdida del contorno normal del hombro</li>
                                                            <li>• Resistencia al movimiento pasivo</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Evaluación neurovascular:</h4>
                                                    <div className="space-y-3">
                                                        <div className="bg-green-50 p-3 rounded">
                                                            <h5 className="font-semibold text-green-700">Circulación:</h5>
                                                            <p className="text-sm text-gray-600">Pulso radial presente y fuerte</p>
                                                        </div>
                                                        <div className="bg-yellow-50 p-3 rounded">
                                                            <h5 className="font-semibold text-yellow-700">Sensibilidad:</h5>
                                                            <p className="text-sm text-gray-600">Leve entumecimiento en deltoides</p>
                                                        </div>
                                                        <div className="bg-red-50 p-3 rounded">
                                                            <h5 className="font-semibold text-red-700">Movimiento:</h5>
                                                            <p className="text-sm text-gray-600">Severamente limitado por dolor</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                                                <h4 className="font-bold text-green-800 mb-3">Manejo Correcto:</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-green-700 mb-2">Pasos críticos:</h5>
                                                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                                            <li>NO intentar reducir la luxación</li>
                                                            <li>Evaluar y documentar pulso radial</li>
                                                            <li>Inmovilizar EN LA POSICIÓN ENCONTRADA</li>
                                                            <li>Aplicar cabestrillo y vendaje</li>
                                                            <li>Reevaluar estado neurovascular</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-green-700 mb-2">Errores comunes a evitar:</h5>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Intentar &quot;acomodar&quot; el hombro</li>
                                                            <li>• Forzar el movimiento</li>
                                                            <li>• Aplicar tracción</li>
                                                            <li>• Ignorar evaluación neurovascular</li>
                                                            <li>• Subestimar necesidad de traslado</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3 */}
                                    <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden">
                                        <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                                            <div className="flex items-center">
                                                <GiLegArmor className="w-6 h-6 text-green-600 mr-3" />
                                                <div>
                                                    <h3 className="text-xl font-bold text-green-700">Caso 3: Síndrome Compartimental</h3>
                                                    <p className="text-green-600 text-sm">Emergencia vascular - Reconocimiento crítico</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Escenario:</h4>
                                                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                                        <p className="text-gray-700 leading-relaxed">
                                                            <strong>Paciente:</strong> Masculino, 35 años, obrero<br />
                                                            <strong>Mecanismo:</strong> Aplastamiento por objeto pesado<br />
                                                            <strong>Evolución:</strong> Lesión hace 4 horas, dolor creciente<br />
                                                            <strong>Hallazgos:</strong> Antebrazo muy inflamado, dolor extremo
                                                        </p>
                                                    </div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Presentación clínica:</h4>
                                                    <div className="bg-red-50 p-4 rounded-lg">
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Dolor desproporcionado al tipo de lesión</li>
                                                            <li>• Antebrazo tenso y muy inflamado</li>
                                                            <li>• Dolor que aumenta con movimiento pasivo</li>
                                                            <li>• Parestesias en los dedos</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-800 mb-3">Las 6 P&apos;s del Síndrome Compartimental:</h4>
                                                    <div className="space-y-2">
                                                        <div className="bg-red-100 p-2 rounded text-center">
                                                            <span className="font-bold text-red-700">Pain</span>
                                                            <p className="text-xs text-gray-600">Desproporcionado</p>
                                                        </div>
                                                        <div className="bg-orange-100 p-2 rounded text-center">
                                                            <span className="font-bold text-orange-700">Paresthesias</span>
                                                            <p className="text-xs text-gray-600">Hormigueo presente</p>
                                                        </div>
                                                        <div className="bg-yellow-100 p-2 rounded text-center">
                                                            <span className="font-bold text-yellow-700">Pallor</span>
                                                            <p className="text-xs text-gray-600">Palidez evidente</p>
                                                        </div>
                                                        <div className="bg-green-100 p-2 rounded text-center">
                                                            <span className="font-bold text-green-700">Paralysis</span>
                                                            <p className="text-xs text-gray-600">Debilidad motora</p>
                                                        </div>
                                                        <div className="bg-blue-100 p-2 rounded text-center">
                                                            <span className="font-bold text-blue-700">Pulselessness</span>
                                                            <p className="text-xs text-gray-600">Pulso débil</p>
                                                        </div>
                                                        <div className="bg-purple-100 p-2 rounded text-center">
                                                            <span className="font-bold text-purple-700">Pressure</span>
                                                            <p className="text-xs text-gray-600">Compartimento tenso</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                                                <h4 className="font-bold text-red-800 mb-3">Manejo de Emergencia:</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-red-700 mb-2">Acciones inmediatas:</h5>
                                                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                                            <li>TRASLADO URGENTE - Tiempo es músculo</li>
                                                            <li>Elevar extremidad ligeramente</li>
                                                            <li>Remover vendajes restrictivos</li>
                                                            <li>Acceso venoso - líquidos isotónicos</li>
                                                            <li>Notificar cirujano vascular</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-red-700 mb-2">Puntos críticos:</h5>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Fasciotomía urgente en hospital</li>
                                                            <li>• Ventana terapéutica: 6-8 horas</li>
                                                            <li>• Riesgo de pérdida de extremidad</li>
                                                            <li>• Posible rabdomiólisis</li>
                                                            <li>• Monitoreo renal necesario</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ejercicio de toma de decisiones */}
                                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-indigo-800 mb-4">Ejercicio de Toma de Decisiones</h3>
                                    <div className="bg-white p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-800 mb-2">Pregunta de reflexión:</h4>
                                        <p className="text-gray-700 mb-4">
                                            ¿Cuál es el factor más importante para determinar la prioridad de traslado 
                                            en una lesión ortopédica?
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-indigo-700 mb-2">Factores a considerar:</h5>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Estado neurovascular</li>
                                                    <li>• Tipo de fractura</li>
                                                    <li>• Mecanismo de lesión</li>
                                                    <li>• Signos vitales</li>
                                                    <li>• Tiempo de evolución</li>
                                                </ul>
                                            </div>
                                            <div className="bg-indigo-50 p-3 rounded">
                                                <p className="text-sm text-indigo-700">
                                                    <strong>Respuesta:</strong> El compromiso neurovascular es el factor 
                                                    más crítico. Una extremidad sin irrigación o inervación tiene 
                                                    una ventana terapéutica limitada antes de sufrir daño irreversible.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

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

                    {/* Footer */}
                    <footer className="mt-12 text-center text-gray-500 text-sm">
                        <p>© 2023 - Todos los derechos reservados</p>
                    </footer>
                </div>
            </div>
            </div>
        </SEOWrapper>
    );
}

