import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ToraxInjuries.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdCheckCircle, MdOutlineTimer, MdQuiz} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {GiTrenchBodyArmor} from "react-icons/gi";
import {FaExclamationTriangle, FaFirstAid, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {FiActivity, FiAlertTriangle, FiEye} from "react-icons/fi";
import {RiStethoscopeLine} from "react-icons/ri";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function ToraxInjuries() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Lesiones Torácicas EMT | Neumotórax, Hemotórax y Trauma de Tórax"
            description="Guía completa sobre lesiones torácicas para Técnicos en Atención Médica Prehospitalaria: evaluación, manejo de neumotórax, hemotórax, tórax inestable y casos clínicos. Aprende a reconocer y tratar emergencias torácicas."
            keywords="lesiones torácicas, EMT, paramédicos, neumotórax, hemotórax, tórax inestable, taponamiento cardíaco, trauma torácico, emergencias médicas, casos clínicos, XABCDE, trauma penetrante"
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
                                <GiTrenchBodyArmor className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Lesiones en el Tórax</h1>
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
                                to={`${AllRoutes.TORAX_INJURIES}/exam`}
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
                            <a href="https://drive.google.com/file/d/1I7KSMNRJJuFEDqTvrVCr2ccWfgehH8Ff/view?usp=drive_link"
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
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Emergencia Potencialmente
                                                Mortal!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                            Las lesiones torácicas son responsables del <strong
                                            className="text-red-600">25% de las muertes traumáticas</strong>.
                                            Tu evaluación y manejo inmediato puede ser la diferencia entre la vida y la
                                            muerte.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">Primeros 5 min</p>
                                                <p className="text-sm">Reconocimiento crítico</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <FaFirstAid className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">Intervención</p>
                                                <p className="text-sm">Manejo inmediato</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <FaHeartbeat className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                                <p className="font-bold text-green-600">Supervivencia</p>
                                                <p className="text-sm">Traslado rápido</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Protocolo XABCDE específico para trauma torácico */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Protocolo XABCDE para Trauma Torácico
                                        </h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-red-700 mb-2 text-center">X -
                                                    Control</h3>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-3 h-3 mt-1 mr-1 text-red-600"/>
                                                        <span>Hemorragias externas</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-3 h-3 mt-1 mr-1 text-red-600"/>
                                                        <span>Heridas penetrantes</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-blue-700 mb-2 text-center">A -
                                                    Airway</h3>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-3 h-3 mt-1 mr-1 text-blue-600"/>
                                                        <span>¿Puede hablar?</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-3 h-3 mt-1 mr-1 text-blue-600"/>
                                                        <span>Protección cervical</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-green-700 mb-2 text-center">B -
                                                    Breathing</h3>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaLungsVirus className="w-3 h-3 mt-1 mr-1 text-green-600"/>
                                                        <span>FR y calidad</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaLungsVirus className="w-3 h-3 mt-1 mr-1 text-green-600"/>
                                                        <span>Ruidos respiratorios</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaLungsVirus className="w-3 h-3 mt-1 mr-1 text-green-600"/>
                                                        <span>Movimiento paradójico</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-purple-700 mb-2 text-center">C -
                                                    Circulation</h3>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-3 h-3 mt-1 mr-1 text-purple-600"/>
                                                        <span>Pulso y TA</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-3 h-3 mt-1 mr-1 text-purple-600"/>
                                                        <span>Signos de shock</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-3 h-3 mt-1 mr-1 text-purple-600"/>
                                                        <span>Ingurgitación yugular</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-yellow-700 mb-2 text-center">D &
                                                    E</h3>
                                                <ul className="space-y-1 text-sm text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-3 h-3 mt-1 mr-1 text-yellow-600"/>
                                                        <span>Estado neurológico</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-3 h-3 mt-1 mr-1 text-yellow-600"/>
                                                        <span>Exposición completa</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clasificación crítica de lesiones */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación
                                            por Prioridad de Tratamiento</h2>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                                                <div className="flex items-center mb-4">
                                                    <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                                                    <h3 className="text-xl font-bold text-red-800">Amenaza Inmediata
                                                        para la Vida</h3>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-red-700">Neumotórax a
                                                            Tensión</h4>
                                                        <p className="text-sm text-gray-600">Acumulación progresiva de
                                                            aire con compromiso circulatorio</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-red-700">Hemotórax Masivo</h4>
                                                        <p className="text-sm text-gray-600">&gt;1500ml de sangre en
                                                            espacio pleural</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-red-700">Tórax Inestable</h4>
                                                        <p className="text-sm text-gray-600">Fracturas múltiples con
                                                            movimiento paradójico</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-red-700">Taponamiento
                                                            Cardíaco</h4>
                                                        <p className="text-sm text-gray-600">Compresión del corazón por
                                                            sangre pericárdica</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                                                <div className="flex items-center mb-4">
                                                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                                    <h3 className="text-xl font-bold text-yellow-800">Potencialmente
                                                        Graves</h3>
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-yellow-700">Neumotórax
                                                            Simple</h4>
                                                        <p className="text-sm text-gray-600">Aire en espacio pleural sin
                                                            tensión</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-yellow-700">Hemotórax
                                                            Menor</h4>
                                                        <p className="text-sm text-gray-600">&lt;1500ml de sangre</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-yellow-700">Contusión
                                                            Pulmonar</h4>
                                                        <p className="text-sm text-gray-600">Magulladura del tejido
                                                            pulmonar</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h4 className="font-semibold text-yellow-700">Fracturas
                                                            Costales</h4>
                                                        <p className="text-sm text-gray-600">Lesiones óseas simples</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de alarma críticos */}
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <RiStethoscopeLine className="w-6 h-6 text-orange-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-orange-800">Signos de Alarma - Evalúa
                                                INMEDIATAMENTE</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-orange-800 mb-2">Signos
                                                    Respiratorios:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Disnea severa o taquipnea</li>
                                                    <li>Cianosis (labios, uñas azules)</li>
                                                    <li>Uso de músculos accesorios</li>
                                                    <li>Ruidos respiratorios ausentes</li>
                                                    <li>Movimiento paradójico del tórax</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-orange-800 mb-2">Signos
                                                    Circulatorios:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Hipotensión progresiva</li>
                                                    <li>Taquicardia</li>
                                                    <li>Ingurgitación yugular</li>
                                                    <li>Piel pálida, fría y húmeda</li>
                                                    <li>Pulso débil o ausente</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-orange-800 mb-2">Signos
                                                    Neurológicos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Alteración del estado mental</li>
                                                    <li>Agitación o confusión</li>
                                                    <li>Ansiedad extrema</li>
                                                    <li>Disminución del nivel de conciencia</li>
                                                    <li>Sensación de muerte inminente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos clave para recordar */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-green-800">Principios Fundamentales de
                                                Manejo</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    SIEMPRE hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Protocolo XABCDE sistemático</li>
                                                    <li>Oxígeno a alto flujo inmediato</li>
                                                    <li>Monitorización continua de signos vitales</li>
                                                    <li>Posición de comodidad (generalmente semisentado)</li>
                                                    <li>Preparación para deterioro rápido</li>
                                                    <li>Comunicación temprana con hospital receptor</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Retirar objetos empalados</li>
                                                    <li>Aplicar presión sobre tórax inestable</li>
                                                    <li>Sellar completamente heridas torácicas</li>
                                                    <li>Administrar fluidos excesivos</li>
                                                    <li>Transportar en posición supina si no es necesario</li>
                                                    <li>Subestimar la severidad del trauma</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'anatomy' && (
                                <div className="space-y-8">
                                    {/* Anatomía visual interactiva */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaLungsVirus className="w-6 h-6 mr-2 text-orange-500"/>
                                            Anatomía Torácica y Espacios
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-8">
                                            <div>
                                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                    <h3 className="text-xl font-bold text-blue-700 mb-4">Estructura de
                                                        la Caja Torácica</h3>
                                                    <div className="space-y-4">
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Pared Torácica</h4>
                                                                <p className="text-sm text-gray-600">12 pares de
                                                                    costillas, esternón, músculos intercostales</p>
                                                                <p className="text-sm text-blue-600 font-medium">Función:
                                                                    Protección y mecánica respiratoria</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Espacio Pleural</h4>
                                                                <p className="text-sm text-gray-600">Cavidad virtual
                                                                    entre pleura parietal y visceral</p>
                                                                <p className="text-sm text-green-600 font-medium">Presión:
                                                                    -5 mmHg (negativa)</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Mediastino</h4>
                                                                <p className="text-sm text-gray-600">Compartimento
                                                                    central: corazón, grandes vasos, esófago</p>
                                                                <p className="text-sm text-purple-600 font-medium">Crucial
                                                                    para función cardiopulmonar</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                                    <h3 className="text-xl font-bold text-red-700 mb-4">Puntos
                                                        Anatómicos Críticos</h3>
                                                    <div className="space-y-3">
                                                        <div className="bg-white p-3 rounded shadow-sm">
                                                            <h4 className="font-semibold text-red-600">Línea
                                                                Medio-Clavicular</h4>
                                                            <p className="text-sm">2º espacio intercostal -
                                                                Descompresión de neumotórax</p>
                                                        </div>
                                                        <div className="bg-white p-3 rounded shadow-sm">
                                                            <h4 className="font-semibold text-red-600">Línea Axilar
                                                                Anterior</h4>
                                                            <p className="text-sm">5º espacio intercostal - Toracostomía
                                                                alternativa</p>
                                                        </div>
                                                        <div className="bg-white p-3 rounded shadow-sm">
                                                            <h4 className="font-semibold text-red-600">Ángulo de
                                                                Louis</h4>
                                                            <p className="text-sm">Referencia anatómica para 2º
                                                                cartílago costal</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-start">
                                                <div className="text-center">
                                                    <img
                                                        src="/src/assets/netter.webp"
                                                        alt="Anatomía del tórax"
                                                        className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                                                    />
                                                    <p className="text-sm text-gray-600 italic">Anatomía detallada del
                                                        tórax</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fisiopatología de lesiones */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Fisiopatología
                                            de Lesiones Críticas</h2>
                                        <div className="space-y-6">
                                            <div
                                                className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-red-700 mb-4">Neumotórax a
                                                    Tensión</h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Mecanismo:</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Lesión pleural actúa como válvula unidireccional</li>
                                                            <li>Aire entra durante inspiración</li>
                                                            <li>No puede salir durante espiración</li>
                                                            <li>Presión intratorácica aumenta progresivamente</li>
                                                            <li>Colapso pulmonar y desviación mediastínica</li>
                                                            <li>Compresión de vena cava → ↓ retorno venoso</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Consecuencias:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Hipoxemia severa</li>
                                                            <li>Shock obstructivo</li>
                                                            <li>Paro cardiorrespiratorio</li>
                                                            <li>Muerte en minutos si no se trata</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Hemotórax
                                                    Masivo</h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Fuentes de sangrado:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Vasos intercostales (más común)</li>
                                                            <li>Arteria mamaria interna</li>
                                                            <li>Grandes vasos (aorta, vena cava)</li>
                                                            <li>Corazón</li>
                                                            <li>Vasos pulmonares</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Criterios de masividad:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>&gt;1500 ml inicial</li>
                                                            <li>&gt;200 ml/hora durante 4 horas</li>
                                                            <li>Signos de shock hipovolémico</li>
                                                            <li>Compromiso respiratorio</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-yellow-700 mb-4">Taponamiento
                                                    Cardíaco</h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Fisiopatología:</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Acumulación de sangre en saco pericárdico</li>
                                                            <li>Pericardio no distensible</li>
                                                            <li>↑ Presión pericárdica</li>
                                                            <li>Compresión ventrículos</li>
                                                            <li>↓ Llenado diastólico</li>
                                                            <li>↓ Gasto cardíaco</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Tríada de Beck (tardía):</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Ingurgitación yugular</li>
                                                            <li>Ruidos cardíacos apagados</li>
                                                            <li>Hipotensión</li>
                                                        </ul>
                                                        <p className="text-sm text-yellow-700 font-medium mt-2">
                                                            *Solo presente en 10% de casos
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'treatment' && (
                                <div className="space-y-8">
                                    {/* Algoritmo de manejo */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                            Algoritmo de Manejo Prehospitalario
                                        </h2>
                                        <div className="bg-gray-50 p-6 rounded-lg">
                                            <div className="grid md:grid-cols-3 gap-6">
                                                <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
                                                    <h3 className="font-bold text-red-700 mb-2">1. Evaluación
                                                        Inicial</h3>
                                                    <ul className="text-sm space-y-1">
                                                        <li>• Protocolo XABCDE</li>
                                                        <li>• Control de hemorragias</li>
                                                        <li>• Oxígeno alto flujo</li>
                                                        <li>• Monitorización continua</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                                                    <h3 className="font-bold text-yellow-700 mb-2">2.
                                                        Intervenciones</h3>
                                                    <ul className="text-sm space-y-1">
                                                        <li>• Sellado de heridas</li>
                                                        <li>• Soporte ventilatorio</li>
                                                        <li>• Acceso vascular</li>
                                                        <li>• Manejo del dolor</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                                                    <h3 className="font-bold text-green-700 mb-2">3. Transporte</h3>
                                                    <ul className="text-sm space-y-1">
                                                        <li>• Centro de trauma</li>
                                                        <li>• Comunicación temprana</li>
                                                        <li>• Monitorización continua</li>
                                                        <li>• Preparar para deterioro</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tratamientos específicos */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo
                                            Específico por Lesión</h2>
                                        <div className="space-y-6">
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                                <div className="flex items-center mb-4">
                                                    <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                                                    <h3 className="text-xl font-bold text-red-800">Neumotórax
                                                        Abierto</h3>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Objetivo:</h4>
                                                        <p className="text-sm text-gray-700 mb-3">Convertir neumotórax
                                                            abierto en cerrado, evitando tensión</p>
                                                        <h4 className="font-semibold mb-2">Procedimiento:</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Sellar inmediatamente con apósito oclusivo</li>
                                                            <li>Fijar en 3 lados (válvula unidireccional)</li>
                                                            <li>Monitorizar signos de tensión</li>
                                                            <li>Si se desarrolla tensión: levantar un lado</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-white p-4 rounded">
                                                        <h4 className="font-semibold mb-2 text-red-700">Material
                                                            preferido:</h4>
                                                        <ul className="text-sm space-y-1">
                                                            <li>• Parche torácico comercial con válvula</li>
                                                            <li>• Plástico estéril + cinta adhesiva</li>
                                                            <li>• Gasas vaselinadas</li>
                                                        </ul>
                                                        <p className="text-xs text-red-600 mt-2 font-medium">
                                                            ⚠️ NUNCA sellar completamente
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                                <div className="flex items-center mb-4">
                                                    <FiAlertTriangle className="w-6 h-6 text-orange-600 mr-2"/>
                                                    <h3 className="text-xl font-bold text-orange-800">Neumotórax a
                                                        Tensión</h3>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Reconocimiento:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Disnea severa progresiva</li>
                                                            <li>Taquicardia</li>
                                                            <li>Hipotensión</li>
                                                            <li>Ingurgitación yugular</li>
                                                            <li>Ausencia de ruidos respiratorios</li>
                                                            <li>Desviación traqueal (tardío)</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Manejo inmediato:</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Si hay sello: levantar momentáneamente</li>
                                                            <li>Oxígeno a alto flujo</li>
                                                            <li>Preparar para descompresión</li>
                                                            <li>Si paramédico autorizado: descompresión con aguja</li>
                                                            <li>Transporte inmediato</li>
                                                        </ol>
                                                        <div className="bg-orange-100 p-2 rounded mt-3">
                                                            <p className="text-xs text-orange-700 font-medium">
                                                                Localización: 2º EIC línea medio-clavicular o 5º EIC
                                                                línea axilar anterior
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                                <div className="flex items-center mb-4">
                                                    <FiActivity className="w-6 h-6 text-yellow-600 mr-2"/>
                                                    <h3 className="text-xl font-bold text-yellow-800">Tórax
                                                        Inestable</h3>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Principio clave:</h4>
                                                        <p className="text-sm text-gray-700 bg-yellow-100 p-3 rounded">
                                                            La amenaza principal NO es el segmento inestable, sino la
                                                            contusión pulmonar subyacente
                                                        </p>
                                                        <h4 className="font-semibold mb-2 mt-3">Objetivos:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Mejorar oxigenación</li>
                                                            <li>Soporte ventilatorio</li>
                                                            <li>Manejo del dolor</li>
                                                            <li>Prevenir complicaciones</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Manejo:</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Oxígeno a alto flujo</li>
                                                            <li>Ventilación con presión positiva si es necesario</li>
                                                            <li>Posición de comodidad</li>
                                                            <li>Evitar inmovilización externa</li>
                                                            <li>Analgesia según protocolo</li>
                                                        </ol>
                                                        <div className="bg-red-100 p-2 rounded mt-3">
                                                            <p className="text-xs text-red-700 font-medium">
                                                                ❌ NO colocar objetos pesados sobre el segmento
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <div className="flex items-center mb-4">
                                                    <FaHeartbeat className="w-6 h-6 text-blue-600 mr-2"/>
                                                    <h3 className="text-xl font-bold text-blue-800">Hemotórax
                                                        Masivo</h3>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Reconocimiento:</h4>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Signos de shock hipovolémico</li>
                                                            <li>Ruidos respiratorios disminuidos</li>
                                                            <li>Matidez a la percusión</li>
                                                            <li>Disnea</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold mb-2">Manejo prehospitalario:</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Oxígeno a alto flujo</li>
                                                            <li>Dos vías IV o IO de gran calibre</li>
                                                            <li>Reanimación con fluidos controlada</li>
                                                            <li>Mantener TAS &gt;90 mmHg</li>
                                                            <li>Transporte inmediato a trauma center</li>
                                                        </ol>
                                                        <div className="bg-blue-100 p-2 rounded mt-3">
                                                            <p className="text-xs text-blue-700 font-medium">
                                                                Hipotensión permisiva hasta control quirúrgico
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Medicamentos y soporte */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-800 mb-4">Soporte Farmacológico y No
                                            Farmacológico</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-700 mb-2">Oxigenoterapia:</h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Mascarilla no recirculante 15L/min</li>
                                                    <li>• Objetivo SpO₂ &gt;94%</li>
                                                    <li>• BVM si ventilación inadecuada</li>
                                                    <li>• CPAP si disponible y apropiado</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700 mb-2">Analgesia (según
                                                    protocolo):</h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Morfina 2-4mg IV/IO</li>
                                                    <li>• Fentanilo 50-100mcg IV/IO</li>
                                                    <li>• Evitar depresión respiratoria</li>
                                                    <li>• Monitorización estrecha</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700 mb-2">Posicionamiento:</h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Semisentado si tolera</li>
                                                    <li>• Lado afectado hacia abajo</li>
                                                    <li>• Evitar supino si es posible</li>
                                                    <li>• Inmovilización espinal si indica</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'practice' && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Casos
                                        Clínicos Interactivos</h2>

                                    <div
                                        className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                                        <h3 className="text-xl font-semibold mb-3 text-red-700">Caso 1: Trauma
                                            Penetrante - Herida por Arma Blanca</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-2">Escenario:</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Masculino de 25 años con herida por arma blanca en hemitórax
                                                    derecho, 4º espacio intercostal.
                                                    Consciente, dificultad respiratoria severa, se escucha "succión" de
                                                    la herida.
                                                </p>
                                                <h4 className="font-semibold mb-2">Hallazgos iniciales:</h4>
                                                <div className="bg-white p-4 rounded shadow-sm">
                                                    <ul className="space-y-1 text-sm">
                                                        <li><strong>A:</strong> Permeable, habla con frases cortas</li>
                                                        <li><strong>B:</strong> FR 32/min, SpO₂ 89%, ruidos ↓ derecho
                                                        </li>
                                                        <li><strong>C:</strong> FC 125/min, TA 100/65, piel pálida</li>
                                                        <li><strong>D:</strong> Glasgow 15, ansioso</li>
                                                        <li><strong>E:</strong> Herida "soplante" 3cm</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Tu secuencia de manejo:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                    <li className="bg-green-100 p-2 rounded">Oxígeno a alto flujo
                                                        (15L/min mascarilla no recirculante)
                                                    </li>
                                                    <li className="bg-green-100 p-2 rounded">Sellar herida con apósito
                                                        oclusivo fijado en 3 lados
                                                    </li>
                                                    <li className="bg-green-100 p-2 rounded">Posición semisentado</li>
                                                    <li className="bg-green-100 p-2 rounded">Monitorización continua
                                                    </li>
                                                    <li className="bg-green-100 p-2 rounded">Acceso vascular</li>
                                                    <li className="bg-green-100 p-2 rounded">Transporte inmediato</li>
                                                </ol>
                                                <div className="mt-4 bg-yellow-100 p-3 rounded">
                                                    <h5 className="font-semibold text-yellow-800">Punto clave:</h5>
                                                    <p className="text-sm text-yellow-700">
                                                        Monitorizar estrechamente por desarrollo de neumotórax a
                                                        tensión.
                                                        Si empeora: levantar una esquina del sello temporalmente.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Caso 2: Accidente de
                                            Tránsito - Tórax Inestable</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-2">Escenario:</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Conductor de 45 años, colisión frontal sin cinturón. Impacto
                                                    torácico contra volante.
                                                    Dolor intenso, "no puedo respirar bien".
                                                </p>
                                                <h4 className="font-semibold mb-2">Evolución del caso:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="text-sm"><strong>Minuto 1:</strong> Movimiento
                                                            paradójico visible en hemitórax izquierdo</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="text-sm"><strong>Minuto 3:</strong> SpO₂ cae a
                                                            85%, respiración cada vez más superficial</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="text-sm"><strong>Minuto 5:</strong> Paciente
                                                            fatigado, necesita soporte ventilatorio</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Decisiones críticas:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-green-100 p-3 rounded">
                                                        <h5 className="font-semibold text-green-800">✓ Correcto:</h5>
                                                        <p className="text-sm">Ventilación con presión positiva (BVM)
                                                            para estabilizar segmento desde adentro</p>
                                                    </div>
                                                    <div className="bg-red-100 p-3 rounded">
                                                        <h5 className="font-semibold text-red-800">✗ Incorrecto:</h5>
                                                        <p className="text-sm">Colocar peso o vendaje sobre el segmento
                                                            inestable</p>
                                                    </div>
                                                </div>
                                                <h4 className="font-semibold mb-2 mt-4">Manejo integral:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Soporte ventilatorio inmediato</li>
                                                    <li>Analgesia adecuada</li>
                                                    <li>Monitorización de contusión pulmonar</li>
                                                    <li>Preparación para intubación</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                                        <h3 className="text-xl font-semibold mb-3 text-purple-700">Caso 3: Deterioro
                                            Rápido - Desarrollo de Tensión</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-2">Escenario:</h4>
                                                <p className="text-gray-700 mb-4">
                                                    Durante transporte del Caso 1, el paciente deteriora rápidamente.
                                                    Extreme ansiedad, cianosis, dificultad respiratoria severa.
                                                </p>
                                                <h4 className="font-semibold mb-2">Cambios en signos vitales:</h4>
                                                <div className="bg-white p-4 rounded shadow-sm">
                                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                                        <div>
                                                            <h5 className="font-semibold">Inicial:</h5>
                                                            <ul>
                                                                <li>FR: 32/min</li>
                                                                <li>FC: 125/min</li>
                                                                <li>TA: 100/65</li>
                                                                <li>SpO₂: 89%</li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h5 className="font-semibold text-red-600">Actual:</h5>
                                                            <ul>
                                                                <li>FR: 40/min</li>
                                                                <li>FC: 150/min</li>
                                                                <li>TA: 70/40</li>
                                                                <li>SpO₂: 78%</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Acción inmediata requerida:</h4>
                                                <div className="bg-red-100 p-4 rounded border border-red-300">
                                                    <h5 className="font-bold text-red-800 mb-2">¡EMERGENCIA!</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-red-700">
                                                        <li>Reconocer neumotórax a tensión</li>
                                                        <li>Levantar esquina del sello inmediatamente</li>
                                                        <li>Debería escucharse escape de aire</li>
                                                        <li>Mejoría inmediata de signos vitales</li>
                                                        <li>Re-sellar con válvula funcional</li>
                                                    </ol>
                                                </div>
                                                <div className="mt-4 bg-blue-100 p-3 rounded">
                                                    <h5 className="font-semibold text-blue-800">Lección aprendida:</h5>
                                                    <p className="text-sm text-blue-700">
                                                        El neumotórax abierto puede evolucionar a tensión si el sello no
                                                        funciona como válvula.
                                                        La vigilancia continua es crítica.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ejercicio de toma de decisiones */}
                                    <div className="bg-gray-50 p-6 rounded-lg border">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Ejercicio de Toma de
                                            Decisiones Rápidas</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-3">Escenario rápido:</h4>
                                                <p className="text-gray-700 mb-3">
                                                    Paciente con trauma torácico. Presenta ingurgitación yugular,
                                                    ruidos cardíacos apagados e hipotensión progresiva.
                                                </p>
                                                <h4 className="font-semibold mb-2">¿Cuál es tu sospecha
                                                    diagnóstica?</h4>
                                                <div className="space-y-2">
                                                    <button
                                                        className="w-full text-left p-2 bg-white rounded border hover:bg-gray-100">
                                                        A) Neumotórax a tensión
                                                    </button>
                                                    <button
                                                        className="w-full text-left p-2 bg-white rounded border hover:bg-gray-100">
                                                        B) Hemotórax masivo
                                                    </button>
                                                    <button
                                                        className="w-full text-left p-2 bg-green-100 rounded border border-green-300">
                                                        C) Taponamiento cardíaco ✓
                                                    </button>
                                                    <button
                                                        className="w-full text-left p-2 bg-white rounded border hover:bg-gray-100">
                                                        D) Tórax inestable
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2">Explicación:</h4>
                                                <p className="text-sm text-gray-700 mb-3">
                                                    La combinación de ingurgitación yugular, ruidos cardíacos apagados e
                                                    hipotensión
                                                    forma la "Tríada de Beck", clásica del taponamiento cardíaco.
                                                </p>
                                                <h4 className="font-semibold mb-2">Manejo prehospitalario:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Soporte hemodinámico</li>
                                                    <li>• Fluidos IV controlados</li>
                                                    <li>• Transporte inmediato</li>
                                                    <li>• Comunicación con cirujano</li>
                                                </ul>
                                                <div className="mt-3 p-2 bg-yellow-100 rounded">
                                                    <p className="text-xs text-yellow-700">
                                                        <strong>Nota:</strong> La pericardiocentesis es procedimiento
                                                        hospitalario
                                                    </p>
                                                </div>
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
                            pagina="torax-injuries"
                            titulo="Foro de Discusión - Torax Injuries"
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
                                        <li>Colegio Americano de Cirujanos. (2018). <em>ATLS: Advanced Trauma Life
                                            Support</em> (10ª edición).
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea especializados</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.trauma.org" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">Trauma.org - Base de datos de
                                            trauma</a></li>
                                        <li><a href="https://www.east.org" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">Eastern Association for Surgery
                                            of Trauma</a></li>
                                        <li><a href="https://www.jems.com/trauma/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de Trauma</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones y simuladores</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Trauma Team Dynamics - Simulador de casos</li>
                                        <li>PHTLS Mobile - Guías de bolsillo</li>
                                        <li>Medscape Emergency Medicine - Referencias rápidas</li>
                                        <li>EMS Pocket Drug Guide - Medicamentos de emergencia</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Footer */}
                        <footer className="mt-8 text-center text-gray-500 text-sm">
                            <p>© 2023 - Todos los derechos reservados</p>
                        </footer>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}
