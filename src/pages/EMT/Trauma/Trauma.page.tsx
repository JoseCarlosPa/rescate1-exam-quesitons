import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Trauma.questions.ts";
import {FaCarCrash, FaExclamationTriangle, FaFirstAid, FaHeartbeat} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdCheckCircle, MdLocalHospital, MdOutlineTimer, MdQuiz, MdWarning} from "react-icons/md";
import {BsBookHalf, BsClockHistory, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {GiBodyHeight, GiMedicalDrip, GiStethoscope} from "react-icons/gi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function Trauma() {
    const [activeTab, setActiveTab] = useState<'overview' | 'mechanism' | 'assessment' | 'management' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Trauma Prehospitalario para EMT | Conceptos, Evaluación y Manejo | Curso TAMP"
            description="Aprende sobre trauma prehospitalario: mecanismos de lesión, evaluación XABCDE, manejo inicial y casos clínicos para Técnicos en Atención Médica Prehospitalaria. Incluye recursos, ejercicios y preguntas frecuentes."
            keywords="trauma EMT, trauma prehospitalario, mecanismos de lesión, XABCDE, manejo inicial, casos clínicos, TAMP, curso emergencias médicas, evaluación de trauma, PHTLS"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
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
                                <FaCarCrash className="w-24 h-24 mb-1 text-orange-500 drop-shadow-lg"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center text-orange-700">Conceptos Generales de
                                Trauma</h1>
                            <p className="text-sm italic mb-4 text-gray-600">Basado en AAOS 11ª edición | Alumnos
                                Generación 2025 Sábados Rescate 1</p>
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/trauma/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1cshonwi1NXgFzcxxmJYUUDFBMNabtgjg/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://www.naemt.org/education/phtls"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Recursos PHTLS</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1WWdqHL8PZF7E3K3_Nsa74O7MMgEQBc2a/view?usp=drive_link"
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
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'overview' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                >Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('mechanism')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'mechanism' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                >Mecanismos y Tipos
                                </button>
                                <button
                                    onClick={() => setActiveTab('assessment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'assessment' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                >Evaluación
                                </button>
                                <button
                                    onClick={() => setActiveTab('management')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'management' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                >Manejo Inicial
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'practice' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                                >Casos Clínicos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-8">
                                    {/* Importancia crítica del trauma */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Prioridad Absoluta en
                                                Emergencias!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            El trauma es la <strong>principal causa de muerte</strong> en personas
                                            menores de 45 años.
                                            La atención prehospitalaria rápida y sistemática puede <span
                                            className="text-red-600 font-bold">salvar vidas en minutos</span>.
                                        </p>
                                        <div className="mt-4 grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <BsClockHistory className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">Hora Dorada</p>
                                                <p className="text-sm">Primera hora crítica</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">10 Minutos Platino</p>
                                                <p className="text-sm">Tiempo prehospitalario ideal</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdLocalHospital className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                                <p className="font-bold text-blue-600">Centro de Trauma</p>
                                                <p className="text-sm">Destino adecuado</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Protocolo XABCDE */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Protocolo XABCDE - Evaluación Sistemática
                                        </h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-red-700 mb-3 text-center">X -
                                                    EXANGUINACIÓN</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Control inmediato de hemorragias externas masivas</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Aplicar presión directa o torniquete</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">A -
                                                    AIRWAY</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Vía aérea permeable</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Control cervical</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-green-700 mb-3 text-center">B -
                                                    BREATHING</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Ventilación efectiva</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Oxigenación adecuada</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-purple-700 mb-3 text-center">C -
                                                    CIRCULATION</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                        <span>Pulso y perfusión</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                        <span>Control de shock</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-yellow-700 mb-3 text-center">D -
                                                    DISABILITY</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span>Nivel de conciencia</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span>Escala de Glasgow</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-gray-50 to-gray-100 p-4 rounded-lg border">
                                                <h3 className="text-lg font-bold text-gray-700 mb-3 text-center">E -
                                                    EXPOSURE</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <GiStethoscope className="w-4 h-4 mt-1 mr-2 text-gray-600"/>
                                                        <span>Exposición completa</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <GiStethoscope className="w-4 h-4 mt-1 mr-2 text-gray-600"/>
                                                        <span>Prevenir hipotermia</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de alarma */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa
                                                INMEDIATAMENTE</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Respiratorios:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>FR &lt;10 o &gt;29</li>
                                                    <li>SatO₂ &lt;90%</li>
                                                    <li>Cianosis central</li>
                                                    <li>Uso músculos accesorios</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Hemodinámicos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>TAS &lt;90 mmHg</li>
                                                    <li>FC &gt;120 lpm</li>
                                                    <li>Pulso débil o ausente</li>
                                                    <li>Llenado capilar &gt;2 seg</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Neurológicos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Glasgow &lt;13</li>
                                                    <li>Pupilas asimétricas</li>
                                                    <li>Déficit motor focal</li>
                                                    <li>Convulsiones</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos clave para recordar */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-green-800">Puntos Clave para
                                                Recordar</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    Hacer SIEMPRE:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Seguir protocolo XABCDE sistemáticamente</li>
                                                    <li>Proteger columna cervical si hay sospecha</li>
                                                    <li>Controlar hemorragias antes que nada</li>
                                                    <li>Evaluar el mecanismo de lesión</li>
                                                    <li>Transportar al centro de trauma adecuado</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <MdWarning className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Mover paciente sin inmovilización</li>
                                                    <li>Perder tiempo en maniobras innecesarias</li>
                                                    <li>Transportar sin control de hemorragias</li>
                                                    <li>Ignorar el mecanismo de lesión</li>
                                                    <li>Subestimar lesiones ocultas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'mechanism' && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                            Mecanismos de Lesión (MOI) y Cinética del Trauma
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            El mecanismo de lesión describe cómo la energía se transfiere al cuerpo y
                                            determina el tipo y gravedad de las lesiones.
                                            Comprender el MOI permite <strong>anticipar lesiones ocultas</strong> y
                                            priorizar intervenciones de manera efectiva.
                                        </p>

                                        {/* Principios físicos del trauma */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4">Principios Físicos
                                                Fundamentales</h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Energía
                                                        Cinética</h4>
                                                    <p className="text-sm text-gray-700 mb-2">EC = ½ × masa ×
                                                        velocidad²</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>La <strong>velocidad</strong> es el factor más determinante
                                                        </li>
                                                        <li>Duplicar velocidad = 4 veces más energía</li>
                                                        <li>Mayor energía = mayor daño potencial</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Leyes de
                                                        Newton</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li><strong>1ª Ley:</strong> Cuerpo en movimiento tiende a
                                                            seguir en movimiento
                                                        </li>
                                                        <li><strong>2ª Ley:</strong> Fuerza = masa × aceleración</li>
                                                        <li><strong>3ª Ley:</strong> Toda acción tiene una reacción
                                                            igual y opuesta
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tipos de trauma */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación
                                            del Trauma</h2>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-orange-700 mb-4">Trauma
                                                    Contuso</h3>
                                                <p className="text-gray-700 mb-4">Transferencia de energía <strong>sin
                                                    penetración</strong> de la piel</p>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="font-semibold text-orange-800">Colisiones
                                                            Vehiculares:</h4>
                                                        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                                                            <li>Frontal: lesiones cabeza, tórax, abdomen</li>
                                                            <li>Lateral: lesiones torácicas, pélvicas</li>
                                                            <li>Trasera: lesiones cervicales</li>
                                                            <li>Volcadura: lesiones múltiples impredecibles</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-orange-800">Caídas:</h4>
                                                        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                                                            <li>&gt;6 metros: alta energía</li>
                                                            <li>3-6 metros: energía moderada</li>
                                                            <li>&lt;3 metros: baja energía</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-orange-800">Otros:</h4>
                                                        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                                                            <li>Atropellamientos</li>
                                                            <li>Agresiones (golpes)</li>
                                                            <li>Deportes de contacto</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-red-700 mb-4">Trauma
                                                    Penetrante</h3>
                                                <p className="text-gray-700 mb-4">Objeto atraviesa la piel y penetra en
                                                    tejidos</p>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h4 className="font-semibold text-red-800">Arma de Fuego:</h4>
                                                        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                                                            <li><strong>Alta velocidad:</strong> &gt;700 m/s (rifles)
                                                            </li>
                                                            <li><strong>Baja velocidad:</strong> &lt;700 m/s (pistolas)
                                                            </li>
                                                            <li>Cavitación temporal y permanente</li>
                                                            <li>Trayectoria impredecible</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-red-800">Arma Blanca:</h4>
                                                        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                                                            <li>Cuchillos, navajas, destornilladores</li>
                                                            <li>Daño limitado al trayecto</li>
                                                            <li>Evaluar profundidad y órganos en riesgo</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-red-800">Otros:</h4>
                                                        <ul className="list-disc list-inside text-sm text-gray-700 ml-4">
                                                            <li>Empalamientos</li>
                                                            <li>Fragmentos de explosión</li>
                                                            <li>Objetos proyectados</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Patrones de lesión específicos */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Patrones
                                            de Lesión por Región Anatómica</h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <div className="bg-purple-50 p-4 rounded-lg border">
                                                <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                                                    <GiBodyHeight className="w-5 h-5 mr-2"/>
                                                    Cabeza y Cuello
                                                </h3>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Traumatismo craneoencefálico</li>
                                                    <li>Lesión cervical</li>
                                                    <li>Lesión vascular cervical</li>
                                                    <li>Trauma facial</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg border">
                                                <h3 className="font-bold text-blue-700 mb-3 flex items-center">
                                                    <FiActivity className="w-5 h-5 mr-2"/>
                                                    Tórax
                                                </h3>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Neumotórax a tensión</li>
                                                    <li>Hemotórax masivo</li>
                                                    <li>Volet costal</li>
                                                    <li>Contusión pulmonar</li>
                                                    <li>Lesión cardíaca</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg border">
                                                <h3 className="font-bold text-green-700 mb-3 flex items-center">
                                                    <GiMedicalDrip className="w-5 h-5 mr-2"/>
                                                    Abdomen
                                                </h3>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Hemorragia intraabdominal</li>
                                                    <li>Lesión esplénica</li>
                                                    <li>Lesión hepática</li>
                                                    <li>Lesión renal</li>
                                                    <li>Perforación intestinal</li>
                                                </ul>
                                            </div>
                                            <div className="bg-yellow-50 p-4 rounded-lg border">
                                                <h3 className="font-bold text-yellow-700 mb-3">Pelvis</h3>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Fractura pélvica</li>
                                                    <li>Lesión genitourinaria</li>
                                                    <li>Hemorragia retroperitoneal</li>
                                                    <li>Lesión vascular</li>
                                                </ul>
                                            </div>
                                            <div className="bg-indigo-50 p-4 rounded-lg border">
                                                <h3 className="font-bold text-indigo-700 mb-3">Extremidades</h3>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Fracturas abiertas</li>
                                                    <li>Luxaciones</li>
                                                    <li>Amputaciones</li>
                                                    <li>Síndrome compartimental</li>
                                                </ul>
                                            </div>
                                            <div className="bg-pink-50 p-4 rounded-lg border">
                                                <h3 className="font-bold text-pink-700 mb-3">Columna</h3>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Lesión medular</li>
                                                    <li>Fractura vertebral</li>
                                                    <li>Luxación cervical</li>
                                                    <li>Hernia discal traumática</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Indicadores de trauma severo */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                            Indicadores de Trauma Severo - Criterios de Centro de Trauma
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2">Criterios
                                                    Fisiológicos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Glasgow ≤13</li>
                                                    <li>TAS &lt;90 mmHg</li>
                                                    <li>FR &lt;10 o &gt;29/min</li>
                                                    <li>Compromiso de vía aérea</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2">Criterios
                                                    Anatómicos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Fractura pélvica inestable</li>
                                                    <li>Volet costal</li>
                                                    <li>Trauma penetrante toraco-abdominal</li>
                                                    <li>Amputación proximal</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'assessment' && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <GiStethoscope className="w-6 h-6 mr-2 text-orange-500"/>
                                            Evaluación Sistemática del Paciente Traumatizado
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            La evaluación prehospitalaria del trauma sigue un enfoque estructurado y
                                            sistemático para identificar y tratar
                                            amenazas vitales inmediatas. La rapidez y precisión en esta fase <strong>determinan
                                            el pronóstico del paciente</strong>.
                                        </p>
                                    </div>

                                    {/* Evaluación primaria detallada */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2"/>
                                            Evaluación Primaria XABCDE - Paso a Paso
                                        </h3>

                                        <div className="space-y-6">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-red-700 mb-3 text-lg">X - EXANGUINACIÓN
                                                    (Control de Hemorragias)</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-red-800 mb-2">¿Qué
                                                            evaluar?</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Hemorragias externas visibles</li>
                                                            <li>Sangrado activo masivo</li>
                                                            <li>Charcos de sangre en escena</li>
                                                            <li>Ropa empapada de sangre</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-red-800 mb-2">Acción
                                                            inmediata:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Presión directa</li>
                                                            <li>Torniquete si es extremidad</li>
                                                            <li>Vendaje compresivo</li>
                                                            <li>Elevación de extremidad</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-blue-700 mb-3 text-lg">A - AIRWAY (Vía
                                                    Aérea)</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800 mb-2">¿Qué
                                                            evaluar?</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>¿Puede hablar claramente?</li>
                                                            <li>Sonidos anormales (estridor, ronquidos)</li>
                                                            <li>Cuerpos extraños visibles</li>
                                                            <li>Posición de cuello y mandíbula</li>
                                                            <li>Secreciones, sangre, vómito</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800 mb-2">Acción
                                                            inmediata:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Control cervical manual</li>
                                                            <li>Aspiración si es necesario</li>
                                                            <li>Maniobra frente-mentón o tracción mandibular</li>
                                                            <li>Dispositivos de vía aérea</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-green-700 mb-3 text-lg">B - BREATHING
                                                    (Respiración)</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-green-800 mb-2">¿Qué
                                                            evaluar?</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Frecuencia respiratoria</li>
                                                            <li>Expansión torácica simétrica</li>
                                                            <li>Uso de músculos accesorios</li>
                                                            <li>Saturación de oxígeno</li>
                                                            <li>Ruidos respiratorios</li>
                                                            <li>Deformidades torácicas</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-green-800 mb-2">Acción
                                                            inmediata:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Oxígeno alto flujo</li>
                                                            <li>Ventilación asistida si necesario</li>
                                                            <li>Descompresión torácica si indicado</li>
                                                            <li>Sellado de heridas aspirantes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-purple-700 mb-3 text-lg">C - CIRCULATION
                                                    (Circulación)</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-purple-800 mb-2">¿Qué
                                                            evaluar?</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Pulso radial y calidad</li>
                                                            <li>Color de piel y mucosas</li>
                                                            <li>Perfusión capilar</li>
                                                            <li>Presión arterial</li>
                                                            <li>Signos de shock</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-purple-800 mb-2">Acción
                                                            inmediata:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Control definitivo de hemorragias</li>
                                                            <li>Acceso vascular</li>
                                                            <li>Reposición de fluidos</li>
                                                            <li>Monitorización continua</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-yellow-700 mb-3 text-lg">D - DISABILITY
                                                    (Déficit Neurológico)</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-yellow-800 mb-2">¿Qué
                                                            evaluar?</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Nivel de conciencia (AVDI)</li>
                                                            <li>Escala de Glasgow</li>
                                                            <li>Pupilas (tamaño, reactivity, simetría)</li>
                                                            <li>Déficit motor focal</li>
                                                            <li>Respuesta al dolor</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-yellow-800 mb-2">Acción
                                                            inmediata:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Protección de vía aérea</li>
                                                            <li>Inmovilización cervical</li>
                                                            <li>Prevenir hipoxia e hipotensión</li>
                                                            <li>Monitorización neurológica</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-gray-700 mb-3 text-lg">E -
                                                    EXPOSURE/ENVIRONMENT (Exposición)</h4>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h5 className="font-semibold text-gray-800 mb-2">¿Qué
                                                            evaluar?</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Exposición completa del paciente</li>
                                                            <li>Lesiones ocultas</li>
                                                            <li>Deformidades adicionales</li>
                                                            <li>Temperatura corporal</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-gray-800 mb-2">Acción
                                                            inmediata:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Examinar de pies a cabeza</li>
                                                            <li>Cubrir y calentar al paciente</li>
                                                            <li>Prevenir hipotermia</li>
                                                            <li>Preservar privacidad</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Escalas de evaluación */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Escalas y Herramientas
                                            de Evaluación</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h4 className="font-bold text-blue-700 mb-3">Escala de Glasgow
                                                    (GCS)</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800">Apertura Ocular (4
                                                            puntos):</h5>
                                                        <ul className="text-sm text-gray-700 ml-4">
                                                            <li>4 - Espontánea</li>
                                                            <li>3 - Al hablar</li>
                                                            <li>2 - Al dolor</li>
                                                            <li>1 - No abre</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800">Respuesta Verbal (5
                                                            puntos):</h5>
                                                        <ul className="text-sm text-gray-700 ml-4">
                                                            <li>5 - Orientado</li>
                                                            <li>4 - Confuso</li>
                                                            <li>3 - Palabras inapropiadas</li>
                                                            <li>2 - Sonidos incomprensibles</li>
                                                            <li>1 - No responde</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800">Respuesta Motora (6
                                                            puntos):</h5>
                                                        <ul className="text-sm text-gray-700 ml-4">
                                                            <li>6 - Obedece órdenes</li>
                                                            <li>5 - Localiza dolor</li>
                                                            <li>4 - Retira al dolor</li>
                                                            <li>3 - Flexión anormal</li>
                                                            <li>2 - Extensión anormal</li>
                                                            <li>1 - No responde</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-4 p-3 bg-blue-100 rounded">
                                                    <p className="text-sm font-semibold text-blue-800">
                                                        Total: 15 puntos máximo | GCS ≤13 = Trauma severo
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h4 className="font-bold text-green-700 mb-3">Otras Escalas
                                                    Importantes</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-semibold text-green-800">AVDI:</h5>
                                                        <ul className="text-sm text-gray-700 ml-4">
                                                            <li><strong>A</strong> - Alerta</li>
                                                            <li><strong>V</strong> - Responde a voz</li>
                                                            <li><strong>D</strong> - Responde a dolor</li>
                                                            <li><strong>I</strong> - Inconsciente</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-green-800">SAMPLE:</h5>
                                                        <ul className="text-sm text-gray-700 ml-4">
                                                            <li><strong>S</strong> - Síntomas</li>
                                                            <li><strong>A</strong> - Alergias</li>
                                                            <li><strong>M</strong> - Medicamentos</li>
                                                            <li><strong>P</strong> - Patologías previas</li>
                                                            <li><strong>L</strong> - Última comida</li>
                                                            <li><strong>E</strong> - Eventos previos</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-green-800">OPQRST:</h5>
                                                        <ul className="text-sm text-gray-700 ml-4">
                                                            <li><strong>O</strong> - Onset (inicio)</li>
                                                            <li><strong>P</strong> - Provocación/Paliación</li>
                                                            <li><strong>Q</strong> - Calidad</li>
                                                            <li><strong>R</strong> - Radiación</li>
                                                            <li><strong>S</strong> - Severidad</li>
                                                            <li><strong>T</strong> - Tiempo</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Reevaluación */}
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                            <BsClockHistory className="w-5 h-5 mr-2"/>
                                            Evaluación Secundaria y Reevaluación Continua
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-orange-800 mb-2">Evaluación
                                                    Secundaria:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Examen físico detallado de pies a cabeza</li>
                                                    <li>Inspección, palpación, auscultación</li>
                                                    <li>Signos vitales completos</li>
                                                    <li>Historia clínica detallada (SAMPLE)</li>
                                                    <li>Buscar lesiones no identificadas</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-orange-800 mb-2">Reevaluación (cada 5
                                                    min):</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Repetir evaluación primaria</li>
                                                    <li>Verificar efectividad de intervenciones</li>
                                                    <li>Monitorear deterioro o mejoría</li>
                                                    <li>Ajustar tratamiento según evolución</li>
                                                    <li>Documentar cambios</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'management' && (
                                <div className="space-y-8">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                            Manejo Prehospitalario del Trauma
                                        </h2>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            El manejo prehospitalario efectivo del trauma se basa en
                                            intervenciones <strong>rápidas,
                                            sistemáticas y basadas en evidencia</strong> para reducir la mortalidad y
                                            morbilidad.
                                            Cada minuto cuenta para salvar vidas.
                                        </p>
                                    </div>

                                    {/* Principios fundamentales */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2"/>
                                            Principios Fundamentales del Manejo
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-blue-600 mb-2 flex items-center">
                                                    <MdOutlineTimer className="w-5 h-5 mr-2"/>
                                                    Tiempo Crítico
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• "Scoop and run" vs "Stay and play"</li>
                                                    <li>• Tiempo en escena &lt;10 minutos</li>
                                                    <li>• Priorizar transporte</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-green-600 mb-2 flex items-center">
                                                    <FaFirstAid className="w-5 h-5 mr-2"/>
                                                    Intervenciones Vitales
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Control de hemorragias</li>
                                                    <li>• Manejo de vía aérea</li>
                                                    <li>• Soporte respiratorio</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-purple-600 mb-2 flex items-center">
                                                    <MdLocalHospital className="w-5 h-5 mr-2"/>
                                                    Destino Apropiado
                                                </h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Centro de trauma adecuado</li>
                                                    <li>• Notificación previa</li>
                                                    <li>• Activación de equipo</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo específico por sistema */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Manejo Específico por
                                            Sistema</h3>
                                        <div className="space-y-6">
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                                <h4 className="font-bold text-red-700 mb-4 flex items-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    Control de Hemorragias (Prioridad #1)
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h5 className="font-semibold text-red-800 mb-2">Hemorragias
                                                            Externas:</h5>
                                                        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                                            <li><strong>Presión directa:</strong> Primera línea, aplicar
                                                                firmemente
                                                            </li>
                                                            <li><strong>Elevación:</strong> Si no hay fractura</li>
                                                            <li><strong>Puntos de presión:</strong> Arterias principales
                                                            </li>
                                                            <li><strong>Torniquete:</strong> Hemorragia masiva en
                                                                extremidades
                                                            </li>
                                                            <li><strong>Agentes hemostáticos:</strong> En heridas
                                                                profundas
                                                            </li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-red-800 mb-2">Hemorragias
                                                            Internas:</h5>
                                                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                                                            <li>Reconocer signos de shock</li>
                                                            <li>Posición adecuada (Trendelenburg modificado)</li>
                                                            <li>Acceso vascular temprano</li>
                                                            <li>Transporte urgente</li>
                                                            <li>Monitorización estrecha</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mt-4 p-3 bg-red-100 rounded">
                                                    <p className="text-sm font-semibold text-red-800">
                                                        ⚠️ Recordar: El shock hemorrágico puede estar presente sin
                                                        hipotensión inicial
                                                        (shock compensado)
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h4 className="font-bold text-blue-700 mb-4 flex items-center">
                                                    <FiActivity className="w-5 h-5 mr-2"/>
                                                    Manejo de Vía Aérea y Respiración
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800 mb-2">Vía Aérea:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Control cervical manual inmediato</li>
                                                            <li>Aspiración de secreciones</li>
                                                            <li>Maniobras manuales (tracción mandibular)</li>
                                                            <li>Dispositivos básicos (OPA, NPA)</li>
                                                            <li>Dispositivos avanzados si indicado</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-blue-800 mb-2">Respiración:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Oxígeno alto flujo (15L/min)</li>
                                                            <li>Ventilación asistida si FR &lt;10 o &gt;29</li>
                                                            <li>BVM con reservorio</li>
                                                            <li>Monitorización SatO₂</li>
                                                            <li>Sellado de heridas aspirantes</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h4 className="font-bold text-green-700 mb-4 flex items-center">
                                                    <GiMedicalDrip className="w-5 h-5 mr-2"/>
                                                    Manejo Circulatorio y Shock
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h5 className="font-semibold text-green-800 mb-2">Acceso
                                                            Vascular:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Dos accesos IV periféricos calibre 14-16G</li>
                                                            <li>Acceso intraóseo si IV no factible</li>
                                                            <li>Obtener laboratorios si es posible</li>
                                                            <li>Inicio temprano de fluidos</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-green-800 mb-2">Reposición de
                                                            Fluidos:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Solución salina 0.9% o Ringer lactato</li>
                                                            <li>Bolo inicial: 20ml/kg (adultos 1-2L)</li>
                                                            <li>Reevaluar respuesta cada 500ml</li>
                                                            <li>Objetivo: TAS &gt;90 mmHg</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                                <h4 className="font-bold text-yellow-700 mb-4 flex items-center">
                                                    <FiUser className="w-5 h-5 mr-2"/>
                                                    Manejo Neurológico
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h5 className="font-semibold text-yellow-800 mb-2">Traumatismo
                                                            Craneoencefálico:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Mantener SatO₂ &gt;95%</li>
                                                            <li>Mantener TAS &gt;90 mmHg</li>
                                                            <li>Evitar hiperventilación</li>
                                                            <li>Elevar cabecera 30° si es posible</li>
                                                            <li>Monitorizar Glasgow</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-yellow-800 mb-2">Lesión
                                                            Medular:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Inmovilización espinal completa</li>
                                                            <li>Control cervical manual</li>
                                                            <li>Tabla espinal o dispositivo de inmovilización</li>
                                                            <li>Evitar movimientos innecesarios</li>
                                                            <li>Vigilar deterioro neurológico</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                                <h4 className="font-bold text-purple-700 mb-4 flex items-center">
                                                    <GiStethoscope className="w-5 h-5 mr-2"/>
                                                    Inmovilización y Transporte
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h5 className="font-semibold text-purple-800 mb-2">Inmovilización
                                                            Espinal:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Criterios de inmovilización selectiva</li>
                                                            <li>Dispositivos de inmovilización cervical</li>
                                                            <li>Tabla espinal o camilla tipo cuchara</li>
                                                            <li>Almohadillado adecuado</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold text-purple-800 mb-2">Inmovilización
                                                            de Fracturas:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                            <li>Férulas rígidas o neumáticas</li>
                                                            <li>Inmovilizar articulación superior e inferior</li>
                                                            <li>Verificar pulsos distales</li>
                                                            <li>Control del dolor</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Conceptos de tiempo crítico */}
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                            <BsClockHistory className="w-6 h-6 mr-2"/>
                                            Conceptos de Tiempo Crítico
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <h4 className="font-bold text-orange-600 mb-2">Minutos Platino</h4>
                                                <p className="text-2xl font-bold text-orange-500">0-10 min</p>
                                                <p className="text-sm text-gray-700">Tiempo ideal en escena para trauma
                                                    severo</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <h4 className="font-bold text-yellow-600 mb-2">Hora Dorada</h4>
                                                <p className="text-2xl font-bold text-yellow-500">0-60 min</p>
                                                <p className="text-sm text-gray-700">Tiempo crítico desde lesión hasta
                                                    cirugía</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <h4 className="font-bold text-red-600 mb-2">Tiempo Transporte</h4>
                                                <p className="text-2xl font-bold text-red-500">&lt;15 min</p>
                                                <p className="text-sm text-gray-700">Meta para llegar al hospital</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-4 bg-orange-100 rounded">
                                            <h4 className="font-semibold text-orange-800 mb-2">Decisión de
                                                Transporte:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li><strong>Transporte inmediato:</strong> Amenazas vitales no
                                                    controlables
                                                </li>
                                                <li><strong>Transporte urgente:</strong> Trauma severo pero estable</li>
                                                <li><strong>Transporte rutinario:</strong> Trauma menor, estable</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Monitorización y reevaluación */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-700 mb-4">Monitorización y
                                            Documentación</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Monitorización
                                                    Continua:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Signos vitales cada 5 minutos</li>
                                                    <li>Nivel de conciencia</li>
                                                    <li>Saturación de oxígeno</li>
                                                    <li>Perfusión y color de piel</li>
                                                    <li>Respuesta a intervenciones</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Documentación
                                                    Crítica:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Mecanismo de lesión detallado</li>
                                                    <li>Hallazgos de evaluación inicial</li>
                                                    <li>Intervenciones realizadas</li>
                                                    <li>Respuesta del paciente</li>
                                                    <li>Tiempos críticos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'practice' && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiStethoscope className="w-6 h-6 mr-2 text-orange-500"/>
                                        Casos Clínicos de Trauma - Aplicación Práctica
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Estos casos clínicos te ayudarán a aplicar los conceptos aprendidos en
                                        situaciones reales.
                                        Analiza cada caso paso a paso siguiendo el protocolo XABCDE.
                                    </p>

                                    {/* Caso 1: Trauma multisistémico */}
                                    <div
                                        className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-md border-l-4 border-red-500">
                                        <h3 className="text-xl font-semibold mb-3 text-red-700 flex items-center">
                                            <FaCarCrash className="w-6 h-6 mr-2"/>
                                            Caso 1: Colisión Vehicular de Alta Energía
                                        </h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                            <p className="text-gray-700 italic mb-4">
                                                Hombre de 28 años, conductor de motocicleta, colisiona contra un
                                                automóvil a 60 km/h.
                                                Encontrado consciente pero desorientado, con sangrado activo en muslo
                                                derecho y dificultad respiratoria.
                                                No llevaba casco. Vehículo con deformación significativa.
                                            </p>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-red-800 mb-2">Evaluación Inicial
                                                    (XABCDE):</h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li><strong>X:</strong> Hemorragia activa en muslo derecho,
                                                        aproximadamente 300ml perdidos
                                                    </li>
                                                    <li><strong>A:</strong> Vía aérea permeable, responde preguntas pero
                                                        confuso
                                                    </li>
                                                    <li><strong>B:</strong> FR 28/min, ruidos respiratorios disminuidos
                                                        en hemitórax derecho, SatO₂ 88%
                                                    </li>
                                                    <li><strong>C:</strong> Pulso radial débil 120 lpm, piel fría y
                                                        pálida, TAS 95 mmHg
                                                    </li>
                                                    <li><strong>D:</strong> Glasgow 13 (O4V4M5), pupilas iguales y
                                                        reactivas
                                                    </li>
                                                    <li><strong>E:</strong> Fractura abierta de fémur derecho,
                                                        abrasiones múltiples
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-green-800 mb-2">Manejo Correcto -
                                                    Secuencia:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>Control de hemorragia:</strong> Aplicar torniquete en
                                                        muslo derecho
                                                    </li>
                                                    <li><strong>Control cervical:</strong> Inmovilización manual
                                                        inmediata
                                                    </li>
                                                    <li><strong>Oxígeno:</strong> Alto flujo 15L/min con mascarilla
                                                        reservorio
                                                    </li>
                                                    <li><strong>Acceso vascular:</strong> IV 16G en brazo izquierdo</li>
                                                    <li><strong>Inmovilización:</strong> Tabla espinal, collarín
                                                        cervical
                                                    </li>
                                                    <li><strong>Transporte:</strong> Código rojo a centro de trauma</li>
                                                    <li><strong>Notificación:</strong> Activar equipo de trauma</li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="mt-4 p-4 bg-red-100 rounded">
                                            <h4 className="font-semibold text-red-800 mb-2">Puntos de Aprendizaje:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Trauma de alta energía sugiere lesiones múltiples</li>
                                                <li>Ruidos respiratorios disminuidos + trauma = posible neumotórax</li>
                                                <li>Control de hemorragias antes que acceso vascular</li>
                                                <li>Glasgow 13 indica traumatismo craneoencefálico</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Caso 2: Trauma penetrante */}
                                    <div
                                        className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md border-l-4 border-blue-500">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-700 flex items-center">
                                            <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                                            Caso 2: Trauma Penetrante Abdominal
                                        </h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                            <p className="text-gray-700 italic mb-4">
                                                Varón de 35 años víctima de agresión con arma blanca. Presenta herida
                                                penetrante en epigastrio
                                                de aproximadamente 3 cm. Paciente consciente, refiere dolor abdominal
                                                intenso.
                                                Objeto agresor no se encuentra en escena.
                                            </p>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-blue-800 mb-2">Evaluación
                                                    Inicial:</h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li><strong>X:</strong> Hemorragia externa controlada con apósito
                                                    </li>
                                                    <li><strong>A:</strong> Vía aérea permeable, paciente hablando</li>
                                                    <li><strong>B:</strong> FR 24/min, ventilación simétrica, SatO₂ 96%
                                                    </li>
                                                    <li><strong>C:</strong> Pulso 110 lpm, piel fría y sudorosa, TAS 85
                                                        mmHg
                                                    </li>
                                                    <li><strong>D:</strong> Alerta, orientado pero ansioso, Glasgow 15
                                                    </li>
                                                    <li><strong>E:</strong> Herida penetrante 3cm epigastrio, abdomen
                                                        rígido
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-green-800 mb-2">Manejo
                                                    Específico:</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>NO explorar herida:</strong> Riesgo de hemorragia
                                                        adicional
                                                    </li>
                                                    <li><strong>Apósito estéril:</strong> Oclusivo si hay signos de
                                                        aspiración
                                                    </li>
                                                    <li><strong>Posición:</strong> Fowler si tolera, o supino</li>
                                                    <li><strong>Acceso vascular:</strong> Dos IV 16G, iniciar
                                                        cristaloides
                                                    </li>
                                                    <li><strong>Analgesia:</strong> Según protocolo, evitar opioides si
                                                        posible
                                                    </li>
                                                    <li><strong>Transporte urgente:</strong> Centro con cirugía
                                                        disponible
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="mt-4 p-4 bg-blue-100 rounded">
                                            <h4 className="font-semibold text-blue-800 mb-2">Consideraciones
                                                Especiales:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Signos de shock compensado (taquicardia, piel fría)</li>
                                                <li>Abdomen rígido sugiere irritación peritoneal</li>
                                                <li>Hipotensión + trauma abdominal = hemorragia interna</li>
                                                <li>Tiempo crítico: "scoop and run"</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Caso 3: Trauma geriátrico */}
                                    <div
                                        className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-md border-l-4 border-green-500">
                                        <h3 className="text-xl font-semibold mb-3 text-green-700 flex items-center">
                                            <GiBodyHeight className="w-6 h-6 mr-2"/>
                                            Caso 3: Caída en Adulto Mayor
                                        </h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                            <p className="text-gray-700 italic mb-4">
                                                Mujer de 78 años con antecedente de osteoporosis, cae de escalera
                                                doméstica (1.5 metros).
                                                Refiere dolor lumbar intenso y no puede mover las piernas. Toma
                                                warfarina por fibrilación auricular.
                                                Familiar refiere que perdió conocimiento brevemente.
                                            </p>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-green-800 mb-2">Evaluación
                                                    Detallada:</h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li><strong>X:</strong> Sin hemorragias externas evidentes</li>
                                                    <li><strong>A:</strong> Vía aérea permeable, habla claramente</li>
                                                    <li><strong>B:</strong> FR 18/min, ventilación adecuada, SatO₂ 94%
                                                    </li>
                                                    <li><strong>C:</strong> Pulso 88 lpm irregular, piel normoperfundida
                                                    </li>
                                                    <li><strong>D:</strong> Alerta, sin déficit motor en MS, ausente en
                                                        MI
                                                    </li>
                                                    <li><strong>E:</strong> Dolor lumbar L2-L3, sin deformidades
                                                        evidentes
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-purple-800 mb-2">Consideraciones
                                                    Geriátricas:</h4>
                                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>Anticoagulación:</strong> Riesgo de hemorragia
                                                        intracraneal
                                                    </li>
                                                    <li><strong>Osteoporosis:</strong> Fracturas con trauma menor</li>
                                                    <li><strong>Pérdida de conciencia:</strong> Evaluar causa primaria
                                                    </li>
                                                    <li><strong>Fragilidad:</strong> Manejo gentil, almohadillado</li>
                                                    <li><strong>Comorbilidades:</strong> Múltiples factores de riesgo
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-green-100 rounded">
                                                <h4 className="font-semibold text-green-800 mb-2">Manejo Inmediato:</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Inmovilización espinal completa</li>
                                                    <li>Oxígeno suplementario</li>
                                                    <li>Acceso vascular, laboratorios</li>
                                                    <li>Analgesia multimodal</li>
                                                    <li>Prevención de hipotermia</li>
                                                </ol>
                                            </div>
                                            <div className="p-4 bg-green-100 rounded">
                                                <h4 className="font-semibold text-green-800 mb-2">Evaluación
                                                    Especial:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Causa de la caída (síncope, mareo)</li>
                                                    <li>Estado neurológico baseline</li>
                                                    <li>Medicamentos actuales</li>
                                                    <li>Signos de lesión medular</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 4: Trauma pediátrico */}
                                    <div
                                        className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-md border-l-4 border-purple-500">
                                        <h3 className="text-xl font-semibold mb-3 text-purple-700 flex items-center">
                                            <FiUser className="w-6 h-6 mr-2"/>
                                            Caso 4: Trauma Pediátrico
                                        </h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                                            <p className="text-gray-700 italic mb-4">
                                                Niño de 8 años atropellado por automóvil a baja velocidad en zona
                                                escolar.
                                                Presenta llanto inconsolable, deformidad en antebrazo izquierdo y
                                                abrasiones en cara.
                                                Padres muy ansiosos en escena. Impacto inicial en piernas, secundario al
                                                suelo.
                                            </p>
                                        </div>

                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-purple-800 mb-2">Evaluación
                                                    Pediátrica:</h4>
                                                <ul className="space-y-2 text-sm text-gray-700">
                                                    <li><strong>X:</strong> Sangrado menor en abrasiones faciales</li>
                                                    <li><strong>A:</strong> Llanto fuerte, vía aérea permeable</li>
                                                    <li><strong>B:</strong> FR 32/min (normal para edad), SatO₂ 97%</li>
                                                    <li><strong>C:</strong> Pulso 140 lpm, perfusión capilar 2 seg</li>
                                                    <li><strong>D:</strong> Alerta, llanto apropiado, moviliza
                                                        extremidades
                                                    </li>
                                                    <li><strong>E:</strong> Fractura antebrazo izq, abrasiones múltiples
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-pink-800 mb-2">Consideraciones
                                                    Especiales:</h4>
                                                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>Anatomía:</strong> Cabeza proporcionalmente mayor</li>
                                                    <li><strong>Fisiología:</strong> Compensación mejor del shock</li>
                                                    <li><strong>Psicológico:</strong> Separación de padres genera estrés
                                                    </li>
                                                    <li><strong>Mecanismo:</strong> Atropello = lesiones múltiples</li>
                                                    <li><strong>Hipotermia:</strong> Mayor riesgo por superficie
                                                        corporal
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-4 grid md:grid-cols-2 gap-4">
                                            <div className="p-4 bg-purple-100 rounded">
                                                <h4 className="font-semibold text-purple-800 mb-2">Manejo
                                                    Específico:</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Permitir acompañamiento parental si es posible</li>
                                                    <li>Inmovilización cervical con almohadillado</li>
                                                    <li>Férula de antebrazo, verificar pulsos</li>
                                                    <li>Oxígeno húmedo y tibio</li>
                                                    <li>Acceso IV o IO según tolerancia</li>
                                                    <li>Prevención activa de hipotermia</li>
                                                </ol>
                                            </div>
                                            <div className="p-4 bg-purple-100 rounded">
                                                <h4 className="font-semibold text-purple-800 mb-2">Vigilar
                                                    Deterioro:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Cambios en nivel de conciencia</li>
                                                    <li>Signos de shock (taquicardia tardía)</li>
                                                    <li>Dificultad respiratoria</li>
                                                    <li>Dolor abdominal</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Resumen de aprendizaje */}
                                    <div
                                        className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2"/>
                                            Puntos Clave de Aprendizaje
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Evaluación
                                                    Consistente:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Siempre seguir protocolo XABCDE</li>
                                                    <li>No omitir pasos por aparente estabilidad</li>
                                                    <li>Reevaluar frecuentemente</li>
                                                    <li>Documentar cambios</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Consideraciones
                                                    Especiales:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Edad afecta presentación y manejo</li>
                                                    <li>Comorbilidades modifican riesgo</li>
                                                    <li>Mecanismo predice lesiones</li>
                                                    <li>Tiempo crítico es fundamental</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* FAQ Section */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes sobre Trauma</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({open}) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                        {/* Foro de Discusión */}
                        <ForumSection
                            pagina="trauma"
                            titulo="Foro de Discusión - Trauma"
                        />


                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Jones
                                            & Bartlett Learning. (Capítulos relevantes sobre trauma)
                                        </li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición).
                                        </li>
                                        <li>American College of Surgeons Committee on Trauma. (2018). <em>ATLS: Advanced
                                            Trauma Life Support Student Course Manual</em> (10ª edición).
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/trauma/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre Trauma</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/categories/trauma-care/"
                                               target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">JEMS - Sección de Trauma</a>
                                        </li>
                                        <li><a href="https://www.trauma.org/" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">Trauma.org - Recursos e
                                            información</a></li>
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

