import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./HumanBody.questions.ts";
import {IoIosBody} from "react-icons/io";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaHeart, FaLungs, FaBrain, FaBone, FaEye, FaHandSparkles} from "react-icons/fa";
import {GiKidneys, GiStomach, GiLiver} from "react-icons/gi";
import {MdBloodtype, MdThermostat} from "react-icons/md";
import {BiBody} from "react-icons/bi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function HumanBody() {
    const [activeTab, setActiveTab] = useState<'overview' | 'systems' | 'anatomy' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <SEOWrapper
            title="El Cuerpo Humano para EMT | Anatomía y Fisiología | Curso TAMP"
            description="Estudia la anatomía, fisiología, sistemas principales y valores normales del cuerpo humano para Técnicos en Atención Médica Prehospitalaria. Incluye recursos, ejercicios, preguntas frecuentes y material de apoyo."
            keywords="cuerpo humano EMT, anatomía prehospitalaria, fisiología, sistemas del cuerpo, valores normales, TAMP, curso emergencias médicas, casos prácticos, atención prehospitalaria"
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
                                <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">El Cuerpo Humano</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/human-body/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1Rnfsa9yfGk1X8vWPptTCUSNO46Snf2nq/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://www.visiblebody.com/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BiBody className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Atlas 3D</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1kn1kR7VDQJMblqg4uc37LoLHUCvGL2Hf/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                        </div>

                        {/* Quiz rápido */}
                        {showQuickQuiz && (
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - El cuerpo humano</h3>
                                <button
                                    onClick={() => setShowQuickQuiz(false)}
                                    className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                                    Cerrar Quiz
                                </button>
                            </div>
                        )}

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
                                    onClick={() => setActiveTab('systems')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'systems'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Sistemas Principales
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
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Prácticos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué es fundamental conocer el cuerpo humano?</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Para un paramédico, comprender la anatomía y fisiología es esencial para identificar rápidamente qué sistema está comprometido en una emergencia. 
                                            Esta base de conocimiento permite tomar decisiones críticas que pueden marcar la diferencia entre la vida y la muerte del paciente.
                                        </p>
                                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                                            <div className="flex">
                                                <div className="ml-3">
                                                    <p className="text-sm text-orange-700">
                                                        <strong>Punto clave:</strong> Un paramédico no solo trata síntomas, sino que evalúa el funcionamiento integral del cuerpo para proporcionar la atención más efectiva.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Niveles de organización biológica</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <ul className="space-y-3 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <div>
                                                            <strong>Célula:</strong> Unidad básica de la vida. Contiene orgánulos especializados para funciones específicas.
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <div>
                                                            <strong>Tejido:</strong> Conjunto de células similares que trabajan juntas (ej: tejido muscular, nervioso).
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <div>
                                                            <strong>Órgano:</strong> Estructura formada por diferentes tejidos con función específica (corazón, pulmones).
                                                        </div>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                        <div>
                                                            <strong>Sistema:</strong> Conjunto de órganos que realizan funciones complejas (sistema cardiovascular).
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-800 mb-2">Ejemplo práctico:</h4>
                                                <p className="text-blue-700 text-sm">
                                                    Un infarto (daño celular) → afecta el tejido cardíaco → compromete el órgano (corazón) → 
                                                    altera todo el sistema cardiovascular → impacta otros sistemas del organismo.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Posición anatómica y terminología médica</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-2 text-gray-800">Posición anatómica estándar:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li>• Persona de pie, erguida</li>
                                                    <li>• Vista hacia el frente</li>
                                                    <li>• Brazos a los costados</li>
                                                    <li>• Palmas hacia adelante</li>
                                                    <li>• Pies juntos y paralelos</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-2 text-gray-800">Términos direccionales clave:</h4>
                                                <div className="grid grid-cols-2 gap-2 text-sm">
                                                    <div className="bg-gray-100 p-2 rounded">
                                                        <strong>Superior:</strong> Hacia arriba
                                                    </div>
                                                    <div className="bg-gray-100 p-2 rounded">
                                                        <strong>Inferior:</strong> Hacia abajo
                                                    </div>
                                                    <div className="bg-gray-100 p-2 rounded">
                                                        <strong>Anterior:</strong> Hacia adelante
                                                    </div>
                                                    <div className="bg-gray-100 p-2 rounded">
                                                        <strong>Posterior:</strong> Hacia atrás
                                                    </div>
                                                    <div className="bg-gray-100 p-2 rounded">
                                                        <strong>Medial:</strong> Hacia el centro
                                                    </div>
                                                    <div className="bg-gray-100 p-2 rounded">
                                                        <strong>Lateral:</strong> Hacia los lados
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                        <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Tip para paramédicos</h3>
                                        <p className="text-green-700">
                                            Practica describir hallazgos usando terminología anatómica precisa. En lugar de decir "herida en el brazo", 
                                            di "laceración en la región anterior del antebrazo derecho, tercio distal". Esto mejora la comunicación con el equipo médico.
                                        </p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'systems' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistemas principales del cuerpo humano</h2>
                                    <p className="text-gray-600 mb-6">
                                        Como paramédico, es crucial entender cómo cada sistema puede verse afectado en emergencias y las interconexiones entre ellos.
                                    </p>
                                    
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Sistema Cardiovascular */}
                                        <div className="bg-white border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaHeart className="w-8 h-8 text-red-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-red-700">Sistema Cardiovascular</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Compuesto por corazón, sangre y vasos sanguíneos. Transporta oxígeno, nutrientes y hormonas.
                                            </p>
                                            <div className="bg-red-50 p-3 rounded">
                                                <strong className="text-red-800">Emergencias comunes:</strong>
                                                <ul className="text-sm text-red-700 mt-1">
                                                    <li>• Infarto agudo de miocardio</li>
                                                    <li>• Shock hemorrágico</li>
                                                    <li>• Arritmias cardíacas</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Sistema Respiratorio */}
                                        <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaLungs className="w-8 h-8 text-blue-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">Sistema Respiratorio</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Incluye vías aéreas, pulmones y músculos respiratorios. Intercambia oxígeno y CO₂.
                                            </p>
                                            <div className="bg-blue-50 p-3 rounded">
                                                <strong className="text-blue-800">Emergencias comunes:</strong>
                                                <ul className="text-sm text-blue-700 mt-1">
                                                    <li>• Obstrucción de vía aérea</li>
                                                    <li>• Asma severa/broncoespasmo</li>
                                                    <li>• Neumotórax</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Sistema Nervioso */}
                                        <div className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaBrain className="w-8 h-8 text-purple-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-purple-700">Sistema Nervioso</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Cerebro, médula espinal y nervios. Controla y coordina todas las funciones corporales.
                                            </p>
                                            <div className="bg-purple-50 p-3 rounded">
                                                <strong className="text-purple-800">Emergencias comunes:</strong>
                                                <ul className="text-sm text-purple-700 mt-1">
                                                    <li>• Accidente cerebrovascular (ACV)</li>
                                                    <li>• Traumatismo craneoencefálico</li>
                                                    <li>• Convulsiones</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Sistema Musculoesquelético */}
                                        <div className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <FaBone className="w-8 h-8 text-green-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-green-700">Sistema Musculoesquelético</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Huesos, músculos, ligamentos y tendones. Proporciona soporte, protección y movimiento.
                                            </p>
                                            <div className="bg-green-50 p-3 rounded">
                                                <strong className="text-green-800">Emergencias comunes:</strong>
                                                <ul className="text-sm text-green-700 mt-1">
                                                    <li>• Fracturas y luxaciones</li>
                                                    <li>• Lesiones de columna vertebral</li>
                                                    <li>• Trauma de extremidades</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Sistema Digestivo */}
                                        <div className="bg-white border border-yellow-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <GiStomach className="w-8 h-8 text-yellow-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-yellow-700">Sistema Digestivo</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Órganos que procesan alimentos: boca, esófago, estómago, intestinos, hígado, páncreas.
                                            </p>
                                            <div className="bg-yellow-50 p-3 rounded">
                                                <strong className="text-yellow-800">Emergencias comunes:</strong>
                                                <ul className="text-sm text-yellow-700 mt-1">
                                                    <li>• Abdomen agudo</li>
                                                    <li>• Hemorragia gastrointestinal</li>
                                                    <li>• Obstrucción intestinal</li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Sistema Genitourinario */}
                                        <div className="bg-white border border-indigo-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                                            <div className="flex items-center mb-3">
                                                <GiKidneys className="w-8 h-8 text-indigo-500 mr-3"/>
                                                <h3 className="text-xl font-bold text-indigo-700">Sistema Genitourinario</h3>
                                            </div>
                                            <p className="text-gray-700 mb-3">
                                                Riñones, vejiga, uréteres y órganos reproductivos. Filtra desechos y mantiene equilibrio.
                                            </p>
                                            <div className="bg-indigo-50 p-3 rounded">
                                                <strong className="text-indigo-800">Emergencias comunes:</strong>
                                                <ul className="text-sm text-indigo-700 mt-1">
                                                    <li>• Insuficiencia renal aguda</li>
                                                    <li>• Retención urinaria</li>
                                                    <li>• Emergencias obstétricas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                                            <FaHandSparkles className="mr-2"/>
                                            Integración de sistemas en emergencias
                                        </h3>
                                        <p className="text-orange-700 mb-4">
                                            Recuerda: Los sistemas del cuerpo están interconectados. Un problema en un sistema afecta a otros.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                                                <strong className="text-orange-800">Ejemplo 1:</strong>
                                                <p className="text-sm text-orange-700 mt-1">
                                                    Shock hemorrágico → Sistema cardiovascular comprometido → 
                                                    Hipoxia cerebral → Alteración del estado mental
                                                </p>
                                            </div>
                                            <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                                                <strong className="text-orange-800">Ejemplo 2:</strong>
                                                <p className="text-sm text-orange-700 mt-1">
                                                    Neumotórax → Sistema respiratorio afectado → 
                                                    Disminución del retorno venoso → Compromiso cardiovascular
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'anatomy' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía y fisiología crítica para paramédicos</h2>
                                    
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                                <FaHeart className="text-red-500 mr-2"/>
                                                Órganos vitales - Prioridad A
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                                                    <strong className="text-red-800">Cerebro:</strong>
                                                    <p className="text-red-700 text-sm mt-1">
                                                        Controla funciones vitales. Sin oxígeno: daño irreversible en 4-6 minutos.
                                                        Localización: cráneo. Signos de compromiso: alteración del estado mental.
                                                    </p>
                                                </div>
                                                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                                                    <strong className="text-blue-800">Corazón:</strong>
                                                    <p className="text-blue-700 text-sm mt-1">
                                                        Bomba muscular de 4 cámaras. Localización: mediastino, entre pulmones.
                                                        Frecuencia normal adulto: 60-100 lpm.
                                                    </p>
                                                </div>
                                                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                                                    <strong className="text-green-800">Pulmones:</strong>
                                                    <p className="text-green-700 text-sm mt-1">
                                                        Intercambio gaseoso. Frecuencia respiratoria normal adulto: 12-20 rpm.
                                                        Signos de compromiso: disnea, cianosis, uso de músculos accesorios.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-center">
                                            <div className="bg-gray-100 p-4 rounded-lg">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Respiratory_system_complete_es.svg/300px-Respiratory_system_complete_es.svg.png"
                                                    alt="Sistema respiratorio"
                                                    className="rounded-lg shadow-md max-w-full h-auto"
                                                />
                                                <p className="text-center text-sm text-gray-600 mt-2">Sistema respiratorio</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                                        <div className="bg-white border border-orange-200 rounded-lg p-4">
                                            <div className="flex items-center mb-2">
                                                <GiKidneys className="text-orange-500 mr-2"/>
                                                <strong className="text-orange-800">Riñones</strong>
                                            </div>
                                            <p className="text-sm text-gray-700">
                                                Filtran 180L de sangre/día. Regulan líquidos y electrolitos. 
                                                Ubicación: retroperitoneal, a ambos lados de la columna.
                                            </p>
                                        </div>
                                        <div className="bg-white border border-purple-200 rounded-lg p-4">
                                            <div className="flex items-center mb-2">
                                                <GiLiver className="text-purple-500 mr-2"/>
                                                <strong className="text-purple-800">Hígado</strong>
                                            </div>
                                            <p className="text-sm text-gray-700">
                                                Órgano más grande. Metabolismo, síntesis de proteínas, detoxificación.
                                                Ubicación: cuadrante superior derecho del abdomen.
                                            </p>
                                        </div>
                                        <div className="bg-white border border-blue-200 rounded-lg p-4">
                                            <div className="flex items-center mb-2">
                                                <FaEye className="text-blue-500 mr-2"/>
                                                <strong className="text-blue-800">Órganos de los sentidos</strong>
                                            </div>
                                            <p className="text-sm text-gray-700">
                                                Ojos, oídos, nariz. Evaluación neurológica. 
                                                Pupilas: tamaño, reactividad a la luz.
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                            <MdThermostat className="text-orange-500 mr-2"/>
                                            Valores fisiológicos normales - Referencia rápida
                                        </h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Parámetro vital</th>
                                                        <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Adultos</th>
                                                        <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Niños (2-12 años)</th>
                                                        <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Lactantes (0-2 años)</th>
                                                        <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Alerta clínica</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border-b font-medium flex items-center">
                                                            <FaHeart className="text-red-500 mr-2 w-4 h-4"/>
                                                            Frecuencia cardíaca
                                                        </td>
                                                        <td className="py-3 px-4 border-b text-center">60-100/min</td>
                                                        <td className="py-3 px-4 border-b text-center">80-120/min</td>
                                                        <td className="py-3 px-4 border-b text-center">100-160/min</td>
                                                        <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                                            &lt;50 o &gt;150 adultos
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border-b font-medium flex items-center">
                                                            <FaLungs className="text-blue-500 mr-2 w-4 h-4"/>
                                                            Frecuencia respiratoria
                                                        </td>
                                                        <td className="py-3 px-4 border-b text-center">12-20/min</td>
                                                        <td className="py-3 px-4 border-b text-center">15-30/min</td>
                                                        <td className="py-3 px-4 border-b text-center">25-50/min</td>
                                                        <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                                            &lt;10 o &gt;30 adultos
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border-b font-medium flex items-center">
                                                            <MdBloodtype className="text-purple-500 mr-2 w-4 h-4"/>
                                                            Presión arterial sistólica
                                                        </td>
                                                        <td className="py-3 px-4 border-b text-center">90-140 mmHg</td>
                                                        <td className="py-3 px-4 border-b text-center">80-110 mmHg</td>
                                                        <td className="py-3 px-4 border-b text-center">70-100 mmHg</td>
                                                        <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                                            &lt;90 mmHg shock
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border-b font-medium flex items-center">
                                                            <MdThermostat className="text-orange-500 mr-2 w-4 h-4"/>
                                                            Temperatura corporal
                                                        </td>
                                                        <td className="py-3 px-4 border-b text-center">36-37.5°C</td>
                                                        <td className="py-3 px-4 border-b text-center">36-37.5°C</td>
                                                        <td className="py-3 px-4 border-b text-center">36-37.5°C</td>
                                                        <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                                            &lt;35°C o &gt;39°C
                                                        </td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border-b font-medium">
                                                            Saturación de O₂
                                                        </td>
                                                        <td className="py-3 px-4 border-b text-center">95-100%</td>
                                                        <td className="py-3 px-4 border-b text-center">95-100%</td>
                                                        <td className="py-3 px-4 border-b text-center">95-100%</td>
                                                        <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                                            &lt;90% hipoxemia
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                            ⚠️ Evaluación rápida de sistemas vitales
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <strong className="text-yellow-800">Neurológico (AVPU):</strong>
                                                <ul className="text-yellow-700 mt-1">
                                                    <li>• A: Alerta</li>
                                                    <li>• V: Responde a estímulos verbales</li>
                                                    <li>• P: Responde solo al dolor</li>
                                                    <li>• U: No responde (unconscious)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <strong className="text-yellow-800">Circulatorio (Pulso):</strong>
                                                <ul className="text-yellow-700 mt-1">
                                                    <li>• Radial: Sistólica &gt;80 mmHg</li>
                                                    <li>• Femoral: Sistólica &gt;70 mmHg</li>
                                                    <li>• Carotídeo: Sistólica &gt;60 mmHg</li>
                                                    <li>• Sin pulso: PCR</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                    <p className="text-gray-600 mb-6">
                                        Analiza estos casos aplicando tus conocimientos de anatomía y fisiología. Piensa en qué sistemas están comprometidos y cómo se relacionan entre sí.
                                    </p>

                                    <div className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                                            <h3 className="text-xl font-semibold text-red-700">Caso: Dolor torácico agudo</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> Hombre de 55 años, dolor opresivo en el pecho que se irradia al brazo izquierdo y mandíbula. 
                                                Sudoración profusa, náuseas. FC: 110 lpm, PA: 160/95 mmHg, FR: 24 rpm, SatO₂: 96%.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-red-800 mb-2">🧠 Análisis anatómico:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Sistema cardiovascular comprometido</li>
                                                    <li>• Posible obstrucción coronaria</li>
                                                    <li>• Miocardio isquémico</li>
                                                    <li>• Dolor referido por inervación compartida</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-red-800 mb-2">⚡ Fisiopatología:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Disminución del flujo sanguíneo coronario</li>
                                                    <li>• Hipoxia del tejido cardíaco</li>
                                                    <li>• Activación del sistema simpático</li>
                                                    <li>• Liberación de catecolaminas</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-red-100 rounded">
                                            <strong className="text-red-800">Prioridad de tratamiento:</strong>
                                            <span className="text-red-700 text-sm"> Oxígeno, nitroglicerina, aspirina, monitorización cardíaca, traslado urgente.</span>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                                            <h3 className="text-xl font-semibold text-blue-700">Caso: Dificultad respiratoria severa</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> Mujer de 28 años con asma, crisis asmática severa. Habla por palabras sueltas, 
                                                sibilancias audibles, uso de músculos accesorios. FC: 130 lpm, PA: 140/90 mmHg, FR: 35 rpm, SatO₂: 88%.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-800 mb-2">🫁 Anatomía afectada:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Bronquios y bronquiolos (constricción)</li>
                                                    <li>• Músculos lisos de vías aéreas</li>
                                                    <li>• Alvéolos (intercambio gaseoso comprometido)</li>
                                                    <li>• Músculos accesorios activados</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-800 mb-2">🔬 Mecanismo:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Broncoconstricción e inflamación</li>
                                                    <li>• Aumento de resistencia al flujo aéreo</li>
                                                    <li>• Hipoxemia e hipercapnia</li>
                                                    <li>• Respuesta compensatoria cardiovascular</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-blue-100 rounded">
                                            <strong className="text-blue-800">Prioridad de tratamiento:</strong>
                                            <span className="text-blue-700 text-sm"> Broncodilatadores (salbutamol), oxígeno, corticoides, posición de tripié.</span>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg shadow-sm mb-6">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                                            <h3 className="text-xl font-semibold text-purple-700">Caso: Trauma de cráneo</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                                            <p className="text-gray-700 mb-3">
                                                <strong>Escenario:</strong> Motociclista de 25 años, impacto frontal. Glasgow 10 (O3, V3, M4), 
                                                pupilas anisocóricas (derecha 5mm, izquierda 3mm). FC: 60 lpm, PA: 180/100 mmHg, FR: 10 rpm irregular.
                                            </p>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-purple-800 mb-2">🧠 Anatomía comprometida:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Posible hematoma intracraneal</li>
                                                    <li>• Compresión del tronco cerebral</li>
                                                    <li>• Herniación tentorial (pupila midriática)</li>
                                                    <li>• Centros vitales comprometidos</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-purple-800 mb-2">📊 Signos de Cushing:</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Hipertensión arterial (↑ presión intracraneal)</li>
                                                    <li>• Bradicardia (reflejo compensatorio)</li>
                                                    <li>• Respiración irregular (compromiso del tronco)</li>
                                                    <li>• Pupila dilatada (compresión del III par)</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-purple-100 rounded">
                                            <strong className="text-purple-800">Prioridad de tratamiento:</strong>
                                            <span className="text-purple-700 text-sm"> Manejo de vía aérea, hiperventilación moderada, manitol, traslado emergente a neurocirugía.</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                                        <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                                            🎯 Ejercicio de integración sistémica
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                                                <h4 className="font-semibold text-orange-800 mb-2">Pregunta de análisis:</h4>
                                                <p className="text-gray-700 text-sm mb-3">
                                                    Un paciente en shock hemorrágico presenta taquicardia, hipotensión, piel fría y pálida, 
                                                    y disminución del estado mental. ¿Qué sistemas están involucrados y cómo se relacionan?
                                                </p>
                                                <div className="bg-orange-50 p-3 rounded">
                                                    <strong className="text-orange-800 text-xs">Sistemas afectados:</strong>
                                                    <ul className="text-orange-700 text-xs mt-1 space-y-1">
                                                        <li>• Cardiovascular: ↓ volumen → ↓ precarga → ↓ gasto cardíaco</li>
                                                        <li>• Nervioso: ↓ perfusión cerebral → alteración mental</li>
                                                        <li>• Tegumentario: vasoconstricción → piel fría y pálida</li>
                                                        <li>• Renal: ↓ filtración glomerular → oliguria</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                                                <h4 className="font-semibold text-orange-800 mb-2">Mecanismos compensatorios:</h4>
                                                <ul className="text-orange-700 text-sm space-y-2">
                                                    <li>• <strong>Simpático:</strong> liberación de catecolaminas</li>
                                                    <li>• <strong>Cardiovascular:</strong> taquicardia compensatoria</li>
                                                    <li>• <strong>Vascular:</strong> vasoconstricción periférica</li>
                                                    <li>• <strong>Renal:</strong> retención de agua y sodio</li>
                                                    <li>• <strong>Respiratorio:</strong> taquipnea (acidosis metabólica)</li>
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
                                        {({open}) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición).
                                            Jones & Bartlett Learning.
                                        </li>
                                        <li>Netter, F. (2018). <em>Anatomía Humana Atlas Ilustrado</em>.</li>
                                        <li>Guyton & Hall. (2021). <em>Tratado de Fisiología Médica</em>.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-education/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Educación y anatomía</a></li>
                                        <li><a href="https://www.visiblebody.com/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">Visible
                                            Body - Atlas anatómico interactivo</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Videos educativos</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Complete Anatomy - App de anatomía 3D</li>
                                        <li>Human Anatomy Atlas</li>
                                        <li>Medscape - Referencias médicas</li>
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

