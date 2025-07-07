import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AirwayEmergency.questions.ts";
import {FaExclamationTriangle, FaLungsVirus, FaFirstAid, FaHeartbeat} from "react-icons/fa";
import {FaMaskVentilator} from "react-icons/fa6";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning, MdLocalHospital} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsGraphUp} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiAlertTriangle, FiUser, FiEye, FiActivity} from "react-icons/fi";
import {GiLungs} from "react-icons/gi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function AirwayEmergency(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return(
        <SEOWrapper
            title="Emergencias Respiratorias EMT | Manejo, Patologías y Casos Clínicos"
            description="Guía completa sobre emergencias respiratorias para Técnicos en Atención Médica Prehospitalaria: evaluación, fisiopatología, tratamiento de asma, EPOC, obstrucción de vía aérea y casos clínicos prácticos."
            keywords="emergencias respiratorias, EMT, paramédicos, asma, EPOC, obstrucción vía aérea, disnea, hipoxia, oxigenoterapia, broncodilatadores, casos clínicos, protocolo ABC"
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
                            <FaMaskVentilator className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Respiratorias</h1>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to={`${AllRoutes.AIRWAY_EMERGENCY}/exam`}
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

                        <a href="https://www.jems.com/patient-care/airway-respiratory/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos JEMS</p>
                        </a>
                        <a href="https://drive.google.com/file/d/119EtY1BRKxtaDuRTYmPxWhNiDmg0BEuQ/view?usp=drive_link"
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
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">¡Emergencia Crítica!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las emergencias respiratorias pueden comprometer la vida en minutos. La hipoxia severa 
                                        puede causar daño cerebral irreversible en <span className="text-red-600 font-bold">4-6 minutos</span> 
                                        y muerte en <span className="text-red-600 font-bold">10 minutos</span>.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                            <p className="font-bold text-green-600">0-2 min</p>
                                            <p className="text-sm">Tiempo óptimo de respuesta</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">4-6 min</p>
                                            <p className="text-sm">Daño cerebral posible</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">+10 min</p>
                                            <p className="text-sm">Riesgo de muerte</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Definición y conceptos clave */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiLungs className="w-6 h-6 mr-2 text-orange-500"/>
                                        ¿Qué son las emergencias respiratorias?
                                    </h2>
                                    <div className="bg-blue-50 p-6 rounded-lg mb-4">
                                        <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                            Son condiciones agudas donde el sistema respiratorio no puede proporcionar 
                                            suficiente oxígeno al cuerpo o eliminar adecuadamente el dióxido de carbono, 
                                            poniendo en riesgo la vida del paciente.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-blue-700 mb-2">Hipoxia</h4>
                                                <p className="text-sm text-gray-700">Disminución del oxígeno en los tejidos</p>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-blue-700 mb-2">Hipoxemia</h4>
                                                <p className="text-sm text-gray-700">Disminución del oxígeno en la sangre</p>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-blue-700 mb-2">Hipercapnia</h4>
                                                <p className="text-sm text-gray-700">Acumulación de CO₂ en la sangre</p>
                                            </div>
                                            <div className="bg-white p-4 rounded">
                                                <h4 className="font-semibold text-blue-700 mb-2">Insuficiencia respiratoria</h4>
                                                <p className="text-sm text-gray-700">Falla del sistema respiratorio</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Protocolo de evaluación ABCDE */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Protocolo ABCDE - Evaluación Sistemática
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A - AIRWAY</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>¿Puede hablar claramente?</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Sonidos anormales (estridor, ronquidos)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Cuerpos extraños visibles</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Posición anatómica</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B - BREATHING</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Frecuencia respiratoria</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Expansión torácica</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Uso de músculos accesorios</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Saturación de oxígeno</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 text-center">C - CIRCULATION</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Pulso y calidad</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Color de piel y mucosas</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Perfusión capilar</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Estado neurológico</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos y síntomas de alerta */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                <FiEye className="w-4 h-4 mr-2"/>
                                                Signos Visuales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Cianosis:</strong> Labios, uñas o piel azulada</li>
                                                <li><strong>Retracciones:</strong> Intercostales o supraclaviculares</li>
                                                <li><strong>Músculos accesorios:</strong> Cuello y abdomen</li>
                                                <li><strong>Posición de trípode:</strong> Inclinado hacia adelante</li>
                                                <li><strong>Alteración mental:</strong> Agitación o confusión</li>
                                                <li><strong>Sudoración profusa:</strong> Diaforesis</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                <FiActivity className="w-4 h-4 mr-2"/>
                                                Signos Auditivos y Funcionales:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Estridor:</strong> Obstrucción alta (inspiratorio)</li>
                                                <li><strong>Sibilancias:</strong> Broncoespasmo (espiratorio)</li>
                                                <li><strong>Ronquidos:</strong> Obstrucción por lengua</li>
                                                <li><strong>Gorgoteo:</strong> Presencia de secreciones</li>
                                                <li><strong>Silencio respiratorio:</strong> Obstrucción completa</li>
                                                <li><strong>Habla entrecortada:</strong> No completa frases</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Clasificación de patologías */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <MdLocalHospital className="w-6 h-6 mr-2 text-orange-500"/>
                                        Principales Patologías Respiratorias
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                                            <h3 className="font-medium text-xl mb-3 text-orange-700 flex items-center">
                                                <BsGraphUp className="w-5 h-5 mr-2"/>
                                                Patologías Obstructivas
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-orange-600">Asma</h4>
                                                    <p className="text-sm text-gray-700">Inflamación y broncoespasmo reversible</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-orange-600">EPOC</h4>
                                                    <p className="text-sm text-gray-700">Obstrucción progresiva irreversible</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-orange-600">Obstrucción de vía aérea</h4>
                                                    <p className="text-sm text-gray-700">Cuerpo extraño o edema</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-orange-600">Bronquiolitis</h4>
                                                    <p className="text-sm text-gray-700">Inflamación de bronquiolos (niños)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                                            <h3 className="font-medium text-xl mb-3 text-blue-700 flex items-center">
                                                <GiLungs className="w-5 h-5 mr-2"/>
                                                Patologías Restrictivas
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Neumonía</h4>
                                                    <p className="text-sm text-gray-700">Infección del parénquima pulmonar</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Edema pulmonar</h4>
                                                    <p className="text-sm text-gray-700">Acumulación de líquido en alvéolos</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Neumotórax</h4>
                                                    <p className="text-sm text-gray-700">Aire en el espacio pleural</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-semibold text-blue-600">Derrame pleural</h4>
                                                    <p className="text-sm text-gray-700">Líquido en el espacio pleural</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Puntos Clave para Recordar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                                                <MdCheckCircle className="w-5 h-5 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Evaluar vía aérea como primera prioridad</li>
                                                <li>Administrar oxígeno si SpO₂ &lt; 94%</li>
                                                <li>Mantener posición cómoda (sentado si tolera)</li>
                                                <li>Monitorizar signos vitales continuamente</li>
                                                <li>Considerar broncodilatadores en broncoespasmo</li>
                                                <li>Reevaluar respuesta al tratamiento</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                                                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Forzar posición supina en disnea severa</li>
                                                <li>Administrar sedantes en dificultad respiratoria</li>
                                                <li>Dar oxígeno a alto flujo en EPOC sin monitoreo</li>
                                                <li>Ignorar cambios en el nivel de conciencia</li>
                                                <li>Retrasar el traslado en emergencias críticas</li>
                                                <li>Subestimar la gravedad en pacientes geriátricos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                {/* Anatomía del sistema respiratorio */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                                        <GiLungs className="w-6 h-6 mr-2"/>
                                        Anatomía del Sistema Respiratorio
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-xl font-semibold mb-3 text-blue-700">Vía Aérea Superior</h3>
                                            <div className="bg-white p-4 rounded-lg space-y-3">
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                    <div>
                                                        <h4 className="font-semibold">Nariz y boca</h4>
                                                        <p className="text-sm text-gray-600">Filtración, humidificación y calentamiento</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                    <div>
                                                        <h4 className="font-semibold">Faringe</h4>
                                                        <p className="text-sm text-gray-600">Nasofaringe, orofaringe, laringofaringe</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                                    <div>
                                                        <h4 className="font-semibold">Laringe</h4>
                                                        <p className="text-sm text-gray-600">Cuerdas vocales, protección vía aérea</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-3 text-blue-700">Vía Aérea Inferior</h3>
                                            <div className="bg-white p-4 rounded-lg space-y-3">
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                    <div>
                                                        <h4 className="font-semibold">Tráquea</h4>
                                                        <p className="text-sm text-gray-600">Tubo cartilaginoso, 10-12 cm</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                    <div>
                                                        <h4 className="font-semibold">Bronquios</h4>
                                                        <p className="text-sm text-gray-600">Principales, lobares, segmentarios</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                                    <div>
                                                        <h4 className="font-semibold">Bronquiolos y alvéolos</h4>
                                                        <p className="text-sm text-gray-600">Intercambio gaseoso, 300 millones</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Fisiología respiratoria */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiActivity className="w-6 h-6 mr-2 text-orange-500"/>
                                        Fisiología Respiratoria
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                                            <h3 className="font-medium text-lg mb-3 text-purple-700 text-center">Ventilación</h3>
                                            <p className="text-gray-700 leading-relaxed mb-3">
                                                Proceso mecánico de mover aire hacia y desde los pulmones.
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Inspiración: Diafragma desciende</li>
                                                <li>Espiración: Diafragma asciende</li>
                                                <li>Músculos intercostales</li>
                                                <li>Control del tronco cerebral</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-teal-50 to-teal-100 p-6 rounded-lg border">
                                            <h3 className="font-medium text-lg mb-3 text-teal-700 text-center">Perfusión</h3>
                                            <p className="text-gray-700 leading-relaxed mb-3">
                                                Flujo sanguíneo a través de los capilares pulmonares.
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>Circulación pulmonar</li>
                                                <li>Relación V/Q (ventilación/perfusión)</li>
                                                <li>Presión arterial pulmonar</li>
                                                <li>Retorno venoso</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                                            <h3 className="font-medium text-lg mb-3 text-orange-700 text-center">Difusión</h3>
                                            <p className="text-gray-700 leading-relaxed mb-3">
                                                Intercambio gaseoso a nivel alveolar.
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                <li>O₂: Alvéolo → Sangre</li>
                                                <li>CO₂: Sangre → Alvéolo</li>
                                                <li>Membrana respiratoria</li>
                                                <li>Gradientes de presión</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Control de la respiración */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <FiUser className="w-5 h-5 mr-2 text-orange-500"/>
                                        Control Neural de la Respiración
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Centros Respiratorios</h4>
                                            <div className="bg-white p-4 rounded space-y-2">
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>Bulbo raquídeo:</strong> Control automático</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>Puente:</strong> Modulación del ritmo</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>Corteza:</strong> Control voluntario</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-2">Estímulos Respiratorios</h4>
                                            <div className="bg-white p-4 rounded space-y-2">
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>CO₂ elevado:</strong> Estímulo principal</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>O₂ bajo:</strong> Estímulo secundario</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>pH ácido:</strong> Estimula respiración</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Valores normales actualizados */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsGraphUp className="w-6 h-6 mr-2 text-orange-500"/>
                                        Valores Normales por Grupo Etario
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white rounded-lg shadow">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                    <th className="py-3 px-4 border text-left font-semibold">Parámetro</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Adultos</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Niños (1-12 años)</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Lactantes (&lt;1 año)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Frecuencia respiratoria</td>
                                                    <td className="py-3 px-4 border text-center">12-20/min</td>
                                                    <td className="py-3 px-4 border text-center">15-30/min</td>
                                                    <td className="py-3 px-4 border text-center">25-50/min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Saturación O₂</td>
                                                    <td className="py-3 px-4 border text-center">≥95%</td>
                                                    <td className="py-3 px-4 border text-center">≥95%</td>
                                                    <td className="py-3 px-4 border text-center">≥95%</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Volumen corriente</td>
                                                    <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                                                    <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                                                    <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Capacidad pulmonar total</td>
                                                    <td className="py-3 px-4 border text-center">6000 ml</td>
                                                    <td className="py-3 px-4 border text-center">Variable</td>
                                                    <td className="py-3 px-4 border text-center">300-400 ml</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Fisiopatología de las emergencias respiratorias */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                        Fisiopatología de las Emergencias Respiratorias
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-3">Hipoxemia (↓ O₂ en sangre)</h4>
                                            <div className="bg-white p-4 rounded">
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li><strong>Hipoventilación:</strong> ↓ Ventilación alveolar</li>
                                                    <li><strong>Alteración V/Q:</strong> Desajuste ventilación/perfusión</li>
                                                    <li><strong>Shunt:</strong> Sangre no oxigenada</li>
                                                    <li><strong>Difusión alterada:</strong> Membrana engrosada</li>
                                                    <li><strong>Baja FiO₂:</strong> Altitud, ambiente cerrado</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-3">Hipercapnia (↑ CO₂ en sangre)</h4>
                                            <div className="bg-white p-4 rounded">
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li><strong>Hipoventilación:</strong> ↓ Eliminación de CO₂</li>
                                                    <li><strong>Obstrucción:</strong> ↑ Espacio muerto</li>
                                                    <li><strong>Fatiga respiratoria:</strong> Músculos agotados</li>
                                                    <li><strong>Depresión SNC:</strong> Medicamentos, lesiones</li>
                                                    <li><strong>Acidosis respiratoria:</strong> pH &lt; 7.35</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                {/* Algoritmo de evaluación inicial */}
                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold mb-4 text-green-800 flex items-center">
                                        <FaFirstAid className="w-6 h-6 mr-2"/>
                                        Algoritmo de Evaluación y Manejo Inicial
                                    </h2>
                                    <div className="grid md:grid-cols-4 gap-4">
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                                            <h3 className="font-bold text-blue-700 mb-2">1. EVALUACIÓN</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• ABC primario</li>
                                                <li>• Estado mental</li>
                                                <li>• Signos vitales</li>
                                                <li>• SpO₂</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                                            <h3 className="font-bold text-orange-700 mb-2">2. OXIGENACIÓN</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• SpO₂ &lt; 94% = O₂</li>
                                                <li>• Posición cómoda</li>
                                                <li>• Monitoreo continuo</li>
                                                <li>• Vía aérea permeable</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                                            <h3 className="font-bold text-purple-700 mb-2">3. TRATAMIENTO</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Broncodilatadores</li>
                                                <li>• Aspiración si necesario</li>
                                                <li>• Soporte ventilatorio</li>
                                                <li>• Medicación específica</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                                            <h3 className="font-bold text-red-700 mb-2">4. TRASLADO</h3>
                                            <ul className="text-sm space-y-1">
                                                <li>• Reevaluación</li>
                                                <li>• Monitoreo</li>
                                                <li>• Centro apropiado</li>
                                                <li>• Comunicación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Dispositivos de oxigenoterapia */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaMaskVentilator className="w-6 h-6 mr-2 text-orange-500"/>
                                        Dispositivos de Oxigenoterapia
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white rounded-lg shadow">
                                            <thead>
                                                <tr className="bg-gradient-to-r from-orange-100 to-red-100">
                                                    <th className="py-3 px-4 border text-left font-semibold">Dispositivo</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">FiO₂</th>
                                                    <th className="py-3 px-4 border text-center font-semibold">Flujo (L/min)</th>
                                                    <th className="py-3 px-4 border text-left font-semibold">Indicaciones</th>
                                                    <th className="py-3 px-4 border text-left font-semibold">Consideraciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Cánula nasal</td>
                                                    <td className="py-3 px-4 border text-center">24-44%</td>
                                                    <td className="py-3 px-4 border text-center">1-6</td>
                                                    <td className="py-3 px-4 border">Hipoxia leve, EPOC estable</td>
                                                    <td className="py-3 px-4 border">Cómoda, permite hablar y comer</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Mascarilla simple</td>
                                                    <td className="py-3 px-4 border text-center">35-50%</td>
                                                    <td className="py-3 px-4 border text-center">5-10</td>
                                                    <td className="py-3 px-4 border">Hipoxia moderada</td>
                                                    <td className="py-3 px-4 border">Flujo mínimo 5 L/min</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Mascarilla con reservorio</td>
                                                    <td className="py-3 px-4 border text-center">60-95%</td>
                                                    <td className="py-3 px-4 border text-center">10-15</td>
                                                    <td className="py-3 px-4 border">Hipoxia severa, trauma, shock</td>
                                                    <td className="py-3 px-4 border">Reservorio siempre inflado</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Venturi</td>
                                                    <td className="py-3 px-4 border text-center">24-60%</td>
                                                    <td className="py-3 px-4 border text-center">Variable</td>
                                                    <td className="py-3 px-4 border">EPOC, necesidad de FiO₂ precisa</td>
                                                    <td className="py-3 px-4 border">Concentración exacta</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">BVM con reservorio</td>
                                                    <td className="py-3 px-4 border text-center">90-100%</td>
                                                    <td className="py-3 px-4 border text-center">15</td>
                                                    <td className="py-3 px-4 border">Ventilación asistida, paro respiratorio</td>
                                                    <td className="py-3 px-4 border">10-12 vent/min en adultos</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Protocolos específicos por patología */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <MdLocalHospital className="w-6 h-6 mr-2 text-orange-500"/>
                                        Protocolos de Tratamiento por Patología
                                    </h2>
                                    <div className="space-y-6">
                                        {/* Obstrucción de vía aérea */}
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                            <h3 className="font-medium text-xl mb-3 text-red-700 flex items-center">
                                                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                Obstrucción de Vía Aérea
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-red-600 mb-2">Obstrucción Parcial</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Evaluar efectividad de la tos</li>
                                                        <li>Si tos efectiva: animar a toser</li>
                                                        <li>Posición cómoda, oxígeno</li>
                                                        <li>Monitoreo continuo</li>
                                                        <li>Preparar para obstrucción completa</li>
                                                    </ol>
                                                </div>
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-red-600 mb-2">Obstrucción Completa</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li><strong>Adulto consciente:</strong> Heimlich</li>
                                                        <li><strong>Lactante:</strong> 5 golpes espalda + 5 compresiones torácicas</li>
                                                        <li><strong>Inconsciente:</strong> RCP inmediato</li>
                                                        <li>Revisar boca antes de ventilar</li>
                                                        <li>Continuar hasta desobstrucción</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Crisis asmática */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                            <h3 className="font-medium text-xl mb-3 text-blue-700 flex items-center">
                                                <GiLungs className="w-5 h-5 mr-2"/>
                                                Crisis Asmática
                                            </h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-green-600 mb-2">Leve a Moderada</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>SpO₂ &gt; 92%</li>
                                                        <li>Puede hablar frases</li>
                                                        <li>FC &lt; 100/min</li>
                                                        <li>FR &lt; 25/min</li>
                                                    </ul>
                                                    <p className="text-xs text-green-600 font-semibold mt-2">Tratamiento: O₂ + Broncodilatador</p>
                                                </div>
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-orange-600 mb-2">Severa</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>SpO₂ 88-92%</li>
                                                        <li>Habla palabras sueltas</li>
                                                        <li>FC 100-120/min</li>
                                                        <li>FR 25-30/min</li>
                                                    </ul>
                                                    <p className="text-xs text-orange-600 font-semibold mt-2">Tratamiento: O₂ alto flujo + Broncodilatador continuo</p>
                                                </div>
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-red-600 mb-2">Crítica</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>SpO₂ &lt; 88%</li>
                                                        <li>No puede hablar</li>
                                                        <li>FC &gt; 120/min</li>
                                                        <li>FR &gt; 30/min o &lt; 10/min</li>
                                                    </ul>
                                                    <p className="text-xs text-red-600 font-semibold mt-2">Tratamiento: BVM + Traslado inmediato</p>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-3 bg-blue-100 rounded">
                                                <p className="text-sm"><strong>Protocolo:</strong> Salbutamol 2.5-5mg nebulizado, puede repetirse cada 20 min. Considerar esteroides según protocolos locales.</p>
                                            </div>
                                        </div>

                                        {/* EPOC exacerbado */}
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                            <h3 className="font-medium text-xl mb-3 text-green-700 flex items-center">
                                                <FaLungsVirus className="w-5 h-5 mr-2"/>
                                                EPOC Exacerbado
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-green-600 mb-2">Evaluación Específica</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Historia de EPOC conocido</li>
                                                        <li>Cambio en esputo (color/cantidad)</li>
                                                        <li>Empeoramiento de disnea basal</li>
                                                        <li>Factores desencadenantes</li>
                                                        <li>Uso de oxígeno domiciliario</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-green-600 mb-2">Manejo Cuidadoso</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li><strong>Oxígeno controlado:</strong> Inicio 2 L/min</li>
                                                        <li><strong>Objetivo SpO₂:</strong> 88-92%</li>
                                                        <li>Broncodilatadores nebulizados</li>
                                                        <li>Posición semisentada</li>
                                                        <li>Monitoreo nivel de conciencia</li>
                                                    </ol>
                                                </div>
                                            </div>
                                            <div className="mt-4 p-3 bg-yellow-100 rounded flex items-start">
                                                <MdWarning className="w-5 h-5 text-yellow-600 mr-2 mt-0.5"/>
                                                <p className="text-sm"><strong>¡CUIDADO!</strong> El oxígeno alto flujo puede suprimir el estímulo respiratorio en pacientes con EPOC. Monitorear CO₂ si está disponible.</p>
                                            </div>
                                        </div>

                                        {/* Edema pulmonar */}
                                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                            <h3 className="font-medium text-xl mb-3 text-purple-700 flex items-center">
                                                <FaHeartbeat className="w-5 h-5 mr-2"/>
                                                Edema Pulmonar Agudo
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-purple-600 mb-2">Signos Característicos</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Disnea súbita y severa</li>
                                                        <li>Ortopnea marcada</li>
                                                        <li>Esputo rosado espumoso</li>
                                                        <li>Crepitantes pulmonares</li>
                                                        <li>Ansiedad extrema</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-semibold text-purple-600 mb-2">Manejo Inmediato</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li><strong>Posición:</strong> Sentado, piernas colgando</li>
                                                        <li><strong>Oxígeno:</strong> Alto flujo (15 L/min)</li>
                                                        <li>CPAP si disponible</li>
                                                        <li>Nitroglicerina (si PAS &gt; 100 mmHg)</li>
                                                        <li>Traslado inmediato</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Técnicas de soporte ventilatorio */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <FaFirstAid className="w-5 h-5 mr-2 text-orange-500"/>
                                        Técnicas de Soporte Ventilatorio
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-3">Ventilación con BVM</h4>
                                            <div className="bg-white p-4 rounded space-y-2">
                                                <div className="flex items-start">
                                                    <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">1</span>
                                                    <span className="text-sm">Sellado hermético de la mascarilla</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">2</span>
                                                    <span className="text-sm">Volumen 6-8 ml/kg (evitar hiperventilación)</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">3</span>
                                                    <span className="text-sm">Frecuencia: 10-12/min adultos, 12-20/min niños</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded-full mr-2 mt-0.5">4</span>
                                                    <span className="text-sm">Observar elevación del tórax</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-3">Dispositivos Supraglóticos</h4>
                                            <div className="bg-white p-4 rounded space-y-2">
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>i-gel:</strong> Fácil inserción, no requiere inflado</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>Mascarilla laríngea:</strong> Balón inflable</span>
                                                </div>
                                                <div className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span className="text-sm"><strong>King LT:</strong> Doble balón</span>
                                                </div>
                                                <p className="text-xs text-gray-600 mt-2"><strong>Indicación:</strong> Ventilación difícil con BVM, paciente inconsciente</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                                        <BsLightbulb className="w-6 h-6 mr-2"/>
                                        Casos Clínicos Interactivos
                                    </h2>
                                    <p className="text-blue-700 mb-4">
                                        Analiza cada caso siguiendo el protocolo ABCDE. Piensa en cada paso antes de ver la solución.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg text-center">
                                            <FiEye className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <h4 className="font-semibold">Observa</h4>
                                            <p className="text-sm text-gray-600">Signos y síntomas del paciente</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg text-center">
                                            <FiActivity className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <h4 className="font-semibold">Evalúa</h4>
                                            <p className="text-sm text-gray-600">Aplica protocolo ABCDE</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg text-center">
                                            <FaFirstAid className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <h4 className="font-semibold">Actúa</h4>
                                            <p className="text-sm text-gray-600">Implementa el tratamiento</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 1: Crisis asmática severa */}
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">1</div>
                                        <h3 className="text-xl font-semibold text-orange-700">Crisis Asmática Severa</h3>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <FiUser className="w-4 h-4 mr-2"/>
                                            Escenario Clínico:
                                        </h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Mujer de 28 años con antecedente de asma bronquial.<br/>
                                            <strong>Motivo de consulta:</strong> Dificultad respiratoria severa tras exposición a gato.<br/>
                                            <strong>Tiempo de evolución:</strong> 2 horas, empeoramiento progresivo.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-orange-600 mb-2">Evaluación ABCDE:</h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li><strong>A:</strong> Vía aérea permeable, sibilancias audibles</li>
                                                <li><strong>B:</strong> FR 32/min, SpO₂ 88%, uso músculos accesorios</li>
                                                <li><strong>C:</strong> FC 125/min, TA 145/90 mmHg, piel sudorosa</li>
                                                <li><strong>D:</strong> Consciente, ansiosa, habla palabras sueltas</li>
                                                <li><strong>E:</strong> Temp 36.8°C, posición de trípode</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-orange-600 mb-2">Hallazgos Adicionales:</h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li>• Sibilancias espiratorias difusas</li>
                                                <li>• Retracciones intercostales marcadas</li>
                                                <li>• Pulso paradójico presente</li>
                                                <li>• No puede completar frases</li>
                                                <li>• Sensación de "ahogo"</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                                            <MdCheckCircle className="w-5 h-5 mr-2"/>
                                            Manejo Correcto (Crisis Severa):
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-green-800">
                                                <li><strong>Posición sentada</strong> (no forzar decúbito)</li>
                                                <li><strong>Oxígeno 15 L/min</strong> con mascarilla reservorio</li>
                                                <li><strong>Salbutamol nebulizado</strong> 5mg + ipratropio 500mcg</li>
                                                <li><strong>Monitoreo continuo</strong> SpO₂, FC, FR</li>
                                            </ol>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-green-800" start={5}>
                                                <li><strong>Reevaluación a los 15 min</strong></li>
                                                <li><strong>Si no mejora:</strong> repetir broncodilatador</li>
                                                <li><strong>Considerar esteroides</strong> (hidrocortisona IV)</li>
                                                <li><strong>Traslado inmediato</strong> a centro hospitalario</li>
                                            </ol>
                                        </div>
                                        <div className="mt-3 p-2 bg-yellow-100 rounded">
                                            <p className="text-xs text-yellow-800"><strong>Nota educativa:</strong> En crisis severa, el objetivo es estabilizar rápidamente. La falta de sibilancias puede indicar obstrucción completa (más grave).</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 2: Obstrucción completa */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">2</div>
                                        <h3 className="text-xl font-semibold text-red-700">Obstrucción Completa de Vía Aérea</h3>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <FiAlertTriangle className="w-4 h-4 mr-2"/>
                                            Escenario de Emergencia:
                                        </h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Hombre de 68 años cenando en restaurante.<br/>
                                            <strong>Situación:</strong> Súbitamente se levanta, lleva las manos al cuello, no puede hablar ni toser.<br/>
                                            <strong>Estado:</strong> Cianosis perioral progresiva, pánico evidente.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-600 mb-2">Reconocimiento:</h4>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li>• Signo universal de asfixia</li>
                                                <li>• No puede hablar ni toser</li>
                                                <li>• Cianosis progresiva</li>
                                                <li>• Agitación extrema</li>
                                                <li>• Silencio respiratorio</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-600 mb-2">Acción Inmediata:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li>Confirmar obstrucción</li>
                                                <li>Posicionarse detrás</li>
                                                <li>Maniobra de Heimlich</li>
                                                <li>Compresiones vigorosas</li>
                                                <li>Hasta desobstrucción</li>
                                            </ol>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-600 mb-2">Si pierde conciencia:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                <li>Colocar en suelo</li>
                                                <li>Iniciar RCP inmediato</li>
                                                <li>Revisar boca antes ventilar</li>
                                                <li>30 compresiones : 2 ventilaciones</li>
                                                <li>Continuar hasta desobstrucción</li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                            <BsLightbulb className="w-5 h-5 mr-2"/>
                                            Puntos de Aprendizaje:
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                                            <div>
                                                <p><strong>Técnica Heimlich:</strong></p>
                                                <ul className="list-disc list-inside space-y-1">
                                                    <li>Puño en epigastrio</li>
                                                    <li>Compresiones hacia arriba</li>
                                                    <li>Movimientos separados y distintos</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p><strong>Lactantes (&lt;1 año):</strong></p>
                                                <ul className="list-disc list-inside space-y-1">
                                                    <li>5 golpes en espalda</li>
                                                    <li>5 compresiones torácicas</li>
                                                    <li>NO maniobra de Heimlich</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 3: EPOC exacerbado */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">3</div>
                                        <h3 className="text-xl font-semibold text-green-700">EPOC Exacerbado</h3>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <FaLungsVirus className="w-4 h-4 mr-2"/>
                                            Historia Clínica:
                                        </h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Varón de 74 años, fumador de 40 años (2 paquetes/día).<br/>
                                            <strong>Antecedentes:</strong> EPOC diagnosticado, oxígeno domiciliario 2L/min nocturno.<br/>
                                            <strong>Cuadro actual:</strong> 4 días de empeoramiento, esputo amarillo-verdoso abundante.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-600 mb-2">Presentación Clínica:</h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li><strong>A:</strong> Vía aérea permeable</li>
                                                <li><strong>B:</strong> FR 26/min, SpO₂ 84% aire ambiente</li>
                                                <li><strong>C:</strong> FC 108/min, TA 150/85 mmHg</li>
                                                <li><strong>D:</strong> Alerta, orientado, preocupado</li>
                                                <li><strong>E:</strong> Temp 38.1°C, esputo purulento</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-600 mb-2">Hallazgos Respiratorios:</h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li>• Tórax en barril (enfisematoso)</li>
                                                <li>• Respiración con labios fruncidos</li>
                                                <li>• Sibilancias y roncos difusos</li>
                                                <li>• Uso moderado músculos accesorios</li>
                                                <li>• Habla en frases cortas</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                                            <MdWarning className="w-5 h-5 mr-2"/>
                                            Manejo Específico EPOC:
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h5 className="font-semibold text-orange-700 mb-2">Oxigenoterapia Controlada:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-orange-800">
                                                    <li>Iniciar con 2 L/min cánula nasal</li>
                                                    <li>Objetivo SpO₂: 88-92% (¡NO 95%!)</li>
                                                    <li>Incrementar gradualmente si necesario</li>
                                                    <li>Monitorear nivel de conciencia</li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h5 className="font-semibold text-orange-700 mb-2">Tratamiento Adicional:</h5>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-orange-800">
                                                    <li>Salbutamol + ipratropio nebulizado</li>
                                                    <li>Posición semisentada</li>
                                                    <li>Considerar esteroides</li>
                                                    <li>Traslado para antibióticos IV</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-red-100 border border-red-300 p-3 rounded">
                                        <p className="text-sm text-red-800 flex items-start">
                                            <FaExclamationTriangle className="w-4 h-4 mr-2 mt-0.5"/>
                                            <span><strong>¡Cuidado!</strong> En pacientes EPOC, el O₂ a alto flujo puede suprimir el estímulo respiratorio (drive hipóxico). Siempre mantener SpO₂ entre 88-92% y monitorear estado neurológico.</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Caso 4: Edema pulmonar */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">4</div>
                                        <h3 className="text-xl font-semibold text-purple-700">Edema Pulmonar Agudo</h3>
                                    </div>
                                    
                                    <div className="bg-white p-4 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                                            <FaHeartbeat className="w-4 h-4 mr-2"/>
                                            Presentación Dramática:
                                        </h4>
                                        <p className="text-gray-700 mb-3">
                                            <strong>Paciente:</strong> Mujer de 65 años con antecedente de insuficiencia cardíaca.<br/>
                                            <strong>Inicio:</strong> Disnea súbita e intensa que despertó del sueño (disnea paroxística nocturna).<br/>
                                            <strong>Estado:</strong> Extremadamente angustiada, "sensación de ahogamiento".
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-600 mb-2">Evaluación Crítica:</h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li><strong>A:</strong> Vía aérea permeable</li>
                                                <li><strong>B:</strong> FR 35/min, SpO₂ 78%, ortopnea severa</li>
                                                <li><strong>C:</strong> FC 140/min, TA 180/110 mmHg</li>
                                                <li><strong>D:</strong> Ansiosa, inquieta, diaforética</li>
                                                <li><strong>E:</strong> Edema en MMII, ingurgitación yugular</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-600 mb-2">Signos Característicos:</h4>
                                            <ul className="space-y-2 text-sm text-gray-700">
                                                <li>• Esputo rosado espumoso</li>
                                                <li>• Crepitantes pulmonares bilaterales</li>
                                                <li>• Imposibilidad de estar acostada</li>
                                                <li>• Palidez y sudoración profusa</li>
                                                <li>• Ansiedad extrema</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-lg">
                                        <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                                            <MdOutlineTimer className="w-5 h-5 mr-2"/>
                                            Manejo de Emergencia (¡Tiempo crítico!):
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-red-800">
                                                <li><strong>Posición sentada</strong> con piernas colgando</li>
                                                <li><strong>Oxígeno 15 L/min</strong> mascarilla reservorio</li>
                                                <li><strong>CPAP</strong> si disponible (5-10 cmH₂O)</li>
                                                <li><strong>Nitroglicerina SL</strong> si PAS &gt; 100 mmHg</li>
                                            </ol>
                                            <ol className="list-decimal list-inside space-y-2 text-sm text-red-800" start={5}>
                                                <li><strong>Furosemida IV</strong> si protocolos lo permiten</li>
                                                <li><strong>Monitoreo continuo</strong> ECG y SpO₂</li>
                                                <li><strong>Acceso venoso</strong> calibre grueso</li>
                                                <li><strong>Traslado inmediato</strong> UCI cardiológica</li>
                                            </ol>
                                        </div>
                                        <div className="mt-3 p-2 bg-blue-100 rounded">
                                            <p className="text-xs text-blue-800"><strong>Nota:</strong> El CPAP puede ser salvavidas en edema pulmonar. Mejora la oxigenación y reduce el trabajo respiratorio mientras llega el tratamiento definitivo.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                        <MdCheckCircle className="w-6 h-6 mr-2 text-green-500"/>
                                        Puntos Clave para Recordar en Casos Reales
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-3">Principios Universales:</h4>
                                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                <li><strong>ABC primero:</strong> Siempre evalúa vía aérea, respiración, circulación</li>
                                                <li><strong>Posición:</strong> Respeta la posición de comodidad del paciente</li>
                                                <li><strong>Oxígeno:</strong> Administra si SpO₂ &lt; 94% (excepto EPOC: 88-92%)</li>
                                                <li><strong>Monitoreo:</strong> Vigilancia continua de signos vitales</li>
                                                <li><strong>Reevaluación:</strong> Cada 5-15 minutos según gravedad</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-700 mb-3">Errores Comunes a Evitar:</h4>
                                            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                                                <li><strong>No subestimar:</strong> Las emergencias respiratorias pueden deteriorarse rápidamente</li>
                                                <li><strong>EPOC:</strong> No dar O₂ alto flujo sin monitoreo neurológico</li>
                                                <li><strong>Posición:</strong> No forzar decúbito en pacientes con disnea</li>
                                                <li><strong>Medicación:</strong> No retrasar broncodilatadores en broncoespasmo</li>
                                                <li><strong>Traslado:</strong> No demorar en casos críticos</li>
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
            </div>
        </div>
        </SEOWrapper>
    );
}

