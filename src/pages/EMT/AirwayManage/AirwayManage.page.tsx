import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AirwayManage.questions.ts";
import {FaHeadSideMask, FaExclamationTriangle, FaLungsVirus, FaFirstAid} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiAlertTriangle, FiUser, FiEye} from "react-icons/fi";
import {useState} from "react";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function AirwayManage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'techniques' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Manejo de la Vía Aérea EMT | Técnicas, Dispositivos y Casos Clínicos"
            description="Guía completa sobre el manejo de la vía aérea para Técnicos en Atención Médica Prehospitalaria: evaluación, técnicas manuales, dispositivos, oxigenoterapia y casos clínicos. Aprende a actuar ante emergencias respiratorias."
            keywords="manejo de la vía aérea, EMT, paramédicos, dispositivos de vía aérea, oxigenoterapia, técnicas manuales, BVM, OPA, NPA, emergencias médicas, casos clínicos, protocolo ABC, respiración, trauma facial"
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
                                <FaHeadSideMask className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Manejo de la Vía Aérea</h1>
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
                                to="/airway-manage/exam"
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
                            <a href="https://www.easyauscultation.com/lung-sounds"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Auscultación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1X1gyH116wqPUNylkZ5b_VG6LHjB5vZcT/view?usp=drive_link"
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
                                    {/* Importancia crítica */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Prioridad Absoluta!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            El manejo de la vía aérea es la <strong>primera prioridad</strong> en
                                            cualquier emergencia médica.
                                            Una obstrucción puede causar muerte cerebral en <span
                                            className="text-red-600 font-bold">4-6 minutos</span>.
                                        </p>
                                        <div className="mt-4 grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">0-4 min</p>
                                                <p className="text-sm">Daño cerebral reversible</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">4-6 min</p>
                                                <p className="text-sm">Daño cerebral irreversible</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                                <p className="font-bold text-red-700">+10 min</p>
                                                <p className="text-sm">Muerte cerebral</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ABC Primario */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Protocolo ABC - Evaluación Sistemática
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A -
                                                    AIRWAY</h3>
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
                                                        <span>Posición del cuello</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B -
                                                    BREATHING</h3>
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
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-red-700 mb-3 text-center">C -
                                                    CIRCULATION</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Pulso y calidad</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Color de piel y mucosas</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
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

                                    {/* Signos de alarma */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa
                                                INMEDIATAMENTE</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Signos Visuales:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Cianosis (labios, uñas azules)</li>
                                                    <li>Retracciones intercostales</li>
                                                    <li>Uso de músculos accesorios</li>
                                                    <li>Posición de trípode</li>
                                                    <li>Agitación o confusión</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2">Signos
                                                    Auditivos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Estridor (obstrucción alta)</li>
                                                    <li>Sibilancias (broncoespasmo)</li>
                                                    <li>Ronquidos (obstrucción por lengua)</li>
                                                    <li>Gorgoteo (secreciones)</li>
                                                    <li>Silencio total (obstrucción completa)</li>
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
                                                    <li>Evaluar vía aérea PRIMERO</li>
                                                    <li>Proteger columna cervical si hay trauma</li>
                                                    <li>Mantener la calma y ser sistemático</li>
                                                    <li>Aspirar antes de ventilar</li>
                                                    <li>Monitorizar saturación de oxígeno</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Forzar la apertura de la boca</li>
                                                    <li>Insertar dedos a ciegas</li>
                                                    <li>Hiperextender el cuello en trauma</li>
                                                    <li>Ventilar sin revisar la vía aérea</li>
                                                    <li>Dejar al paciente sin supervisión</li>
                                                </ul>
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
                                            <FaLungsVirus className="w-6 h-6 mr-2 text-orange-500"/>
                                            Anatomía del Sistema Respiratorio
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-8">
                                            <div>
                                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                    <h3 className="text-xl font-bold text-blue-700 mb-4">Vía Aérea
                                                        Superior</h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Nariz y Boca</h4>
                                                                <p className="text-sm text-gray-600">Filtración,
                                                                    calentamiento y humidificación del aire</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Faringe</h4>
                                                                <p className="text-sm text-gray-600">Naso, oro e
                                                                    hipofaringe - zona común digestiva/respiratoria</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Laringe</h4>
                                                                <p className="text-sm text-gray-600">Cuerdas vocales,
                                                                    epiglotis - protección de vía aérea inferior</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                    <h3 className="text-xl font-bold text-green-700 mb-4">Vía Aérea
                                                        Inferior</h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Tráquea</h4>
                                                                <p className="text-sm text-gray-600">Tubo de 10-12 cm,
                                                                    anillos cartilaginosos en forma de C</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Bronquios</h4>
                                                                <p className="text-sm text-gray-600">Bronquio principal
                                                                    derecho e izquierdo</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div
                                                                className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Alvéolos</h4>
                                                                <p className="text-sm text-gray-600">300 millones de
                                                                    alvéolos - intercambio gaseoso</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-start">
                                                <div className="text-center">
                                                    <img
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Respiratory_system_complete_es.svg/500px-Respiratory_system_complete_es.svg.png"
                                                        alt="Anatomía del sistema respiratorio"
                                                        className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                                                    />
                                                    <p className="text-sm text-gray-600 italic">Sistema respiratorio
                                                        completo</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Datos críticos de anatomía */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                            Datos Críticos para Paramédicos
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2">Diferencias por
                                                    Edad:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>Lactantes:</strong> Cabeza grande, cuello corto, lengua
                                                        proporcionalmente más grande
                                                    </li>
                                                    <li><strong>Niños:</strong> Laringe más alta y anterior, epiglotis
                                                        más grande
                                                    </li>
                                                    <li><strong>Adultos mayores:</strong> Pérdida de elasticidad
                                                        pulmonar, cartílagos calcificados
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2">Puntos de Obstrucción
                                                    Común:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li><strong>Lengua:</strong> Causa #1 en pacientes inconscientes
                                                    </li>
                                                    <li><strong>Epiglotis:</strong> Inflamación por infección
                                                        (epiglotitis)
                                                    </li>
                                                    <li><strong>Cuerdas vocales:</strong> Edema, espasmo, cuerpos
                                                        extraños
                                                    </li>
                                                    <li><strong>Bronquios:</strong> Broncoespasmo, secreciones</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fisiología respiratoria */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Fisiología
                                            Respiratoria</h2>
                                        <div className="grid lg:grid-cols-3 gap-6">
                                            <div className="bg-blue-50 p-6 rounded-lg">
                                                <h3 className="font-bold text-blue-700 mb-3 text-center">VENTILACIÓN</h3>
                                                <p className="text-sm text-gray-600 mb-3">Movimiento mecánico del
                                                    aire</p>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Inspiración activa (diafragma)</li>
                                                    <li>• Espiración pasiva (normal)</li>
                                                    <li>• Volumen corriente: 500ml</li>
                                                    <li>• FR normal: 12-20/min</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-6 rounded-lg">
                                                <h3 className="font-bold text-green-700 mb-3 text-center">PERFUSIÓN</h3>
                                                <p className="text-sm text-gray-600 mb-3">Flujo sanguíneo pulmonar</p>
                                                <ul className="text-sm space-y-1">
                                                    <li>• Circulación pulmonar</li>
                                                    <li>• Relación V/Q óptima</li>
                                                    <li>• Presión capilar pulmonar</li>
                                                    <li>• Retorno venoso</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-50 p-6 rounded-lg">
                                                <h3 className="font-bold text-orange-700 mb-3 text-center">DIFUSIÓN</h3>
                                                <p className="text-sm text-gray-600 mb-3">Intercambio gaseoso
                                                    alveolar</p>
                                                <ul className="text-sm space-y-1">
                                                    <li>• O₂ → sangre</li>
                                                    <li>• CO₂ → alvéolo</li>
                                                    <li>• Membrana alveolocapilar</li>
                                                    <li>• Superficie: 70 m²</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Valores normales expandidos */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Valores Normales por Edad</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg">
                                                <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Parámetro</th>
                                                    <th className="py-3 px-4 border text-center">Adultos</th>
                                                    <th className="py-3 px-4 border text-center">Niños (1-12 años)</th>
                                                    <th className="py-3 px-4 border text-center">Lactantes (&lt;1 año)
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Frecuencia
                                                        respiratoria
                                                    </td>
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
                                                    <td className="py-3 px-4 border font-medium">ETCO₂ (si disponible)
                                                    </td>
                                                    <td className="py-3 px-4 border text-center">35-45 mmHg</td>
                                                    <td className="py-3 px-4 border text-center">35-45 mmHg</td>
                                                    <td className="py-3 px-4 border text-center">35-45 mmHg</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'techniques' && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                        Técnicas y Dispositivos para Manejo de Vía Aérea
                                    </h2>

                                    {/* Maniobras manuales */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                            <FiUser className="w-5 h-5 mr-2"/>
                                            Maniobras Manuales Básicas
                                        </h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-green-700 mb-3">✅ SIN Trauma Cervical</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Maniobra Frente-Mentón</h5>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Una mano en la frente del paciente</li>
                                                            <li>Inclinar la cabeza hacia atrás suavemente</li>
                                                            <li>Dos dedos bajo el mentón, elevar</li>
                                                            <li>Evitar presión en tejidos blandos del cuello</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-green-50 p-3 rounded">
                                                        <p className="text-sm"><strong>Eficacia:</strong> 90% de
                                                            obstrucciones por lengua</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-red-700 mb-3">⚠️ CON Trauma Cervical</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Tracción Mandibular</h5>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Mantener inmovilización cervical</li>
                                                            <li>Colocar dedos en ángulos mandibulares</li>
                                                            <li>Traccionar mandíbula hacia adelante</li>
                                                            <li>NO mover la cabeza ni el cuello</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-red-50 p-3 rounded">
                                                        <p className="text-sm"><strong>Cuidado:</strong> Mantener
                                                            alineación cervical en todo momento</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dispositivos básicos */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Dispositivos Básicos de Vía
                                            Aérea</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                                <h4 className="font-bold text-orange-700 mb-3">Cánula Orofaríngea
                                                    (OPA)</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Indicaciones:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Paciente inconsciente (GCS ≤8)</li>
                                                            <li>Sin reflejo nauseoso</li>
                                                            <li>Obstrucción por relajación de lengua</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Medición:</h5>
                                                        <p className="text-sm text-gray-700">Desde comisura labial hasta
                                                            ángulo mandibular</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Técnica de inserción:</h5>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Medir el dispositivo</li>
                                                            <li>Abrir la boca (tijera o dedos cruzados)</li>
                                                            <li>Insertar con curvatura hacia arriba</li>
                                                            <li>Rotar 180° al llegar a paladar duro</li>
                                                            <li>Avanzar hasta que el reborde quede en los labios</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-red-100 p-3 rounded">
                                                        <p className="text-sm text-red-700">
                                                            <strong>Contraindicación:</strong> Paciente consciente o con
                                                            reflejo nauseoso activo</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h4 className="font-bold text-blue-700 mb-3">Cánula Nasofaríngea
                                                    (NPA)</h4>
                                                <div className="space-y-4">
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Indicaciones:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Paciente semiconsciente</li>
                                                            <li>Con reflejo nauseoso presente</li>
                                                            <li>Trauma facial que impide OPA</li>
                                                            <li>Trismus (mandíbula cerrada)</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Medición:</h5>
                                                        <p className="text-sm text-gray-700">Desde punta de nariz hasta
                                                            lóbulo de oreja</p>
                                                    </div>
                                                    <div>
                                                        <h5 className="font-semibold mb-2">Técnica de inserción:</h5>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Lubricar con gel hidrosoluble</li>
                                                            <li>Insertar con bisel hacia septum</li>
                                                            <li>Avanzar con movimiento rotatorio suave</li>
                                                            <li>Si hay resistencia, intentar otra fosa</li>
                                                            <li>El reborde debe quedar en la fosa nasal</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-red-100 p-3 rounded">
                                                        <p className="text-sm text-red-700">
                                                            <strong>Contraindicación:</strong> Trauma facial severo,
                                                            fractura de base de cráneo</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ventilación con BVM */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-green-700 mb-4">Ventilación con
                                            Bolsa-Válvula-Mascarilla (BVM)</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold mb-3">Técnica de sellado (EC)</h4>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>E:</strong> Formar "E" con dedos 3, 4 y 5 en mandíbula
                                                    </li>
                                                    <li><strong>C:</strong> Formar "C" con pulgar e índice sobre
                                                        mascarilla
                                                    </li>
                                                    <li>Sellado hermético nariz-boca-mentón</li>
                                                    <li>Elevar mandíbula hacia mascarilla (no presionar mascarilla hacia
                                                        abajo)
                                                    </li>
                                                </ol>
                                                <div className="bg-yellow-100 p-3 rounded mt-4">
                                                    <p className="text-sm"><strong>Parámetros:</strong></p>
                                                    <ul className="text-sm space-y-1">
                                                        <li>• Adultos: 500-600ml cada 6-8 segundos</li>
                                                        <li>• Niños: 6-8ml/kg cada 3-5 segundos</li>
                                                        <li>• Observar elevación torácica</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold mb-3">Problemas comunes y soluciones</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h5 className="font-medium text-red-600">Problema: Fuga de
                                                            aire</h5>
                                                        <p className="text-sm">Solución: Reajustar sellado EC, verificar
                                                            tamaño de mascarilla</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h5 className="font-medium text-red-600">Problema: No se eleva
                                                            el tórax</h5>
                                                        <p className="text-sm">Solución: Verificar permeabilidad vía
                                                            aérea, aspirar secreciones</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h5 className="font-medium text-red-600">Problema: Distensión
                                                            gástrica</h5>
                                                        <p className="text-sm">Solución: Reducir volumen, ventilación
                                                            más lenta</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Oxigenoterapia */}
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">Dispositivos de
                                            Oxigenoterapia</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                                <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Dispositivo</th>
                                                    <th className="py-3 px-4 border text-center">FiO₂</th>
                                                    <th className="py-3 px-4 border text-center">Flujo (L/min)</th>
                                                    <th className="py-3 px-4 border text-left">Indicaciones</th>
                                                    <th className="py-3 px-4 border text-left">Consideraciones</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Cánula nasal</td>
                                                    <td className="py-3 px-4 border text-center text-blue-600">24-44%</td>
                                                    <td className="py-3 px-4 border text-center">1-6</td>
                                                    <td className="py-3 px-4 border">Hipoxemia leve, paciente
                                                        consciente
                                                    </td>
                                                    <td className="py-3 px-4 border">Cómoda, permite hablar y comer</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Mascarilla simple</td>
                                                    <td className="py-3 px-4 border text-center text-green-600">35-50%</td>
                                                    <td className="py-3 px-4 border text-center">5-10</td>
                                                    <td className="py-3 px-4 border">Hipoxemia moderada</td>
                                                    <td className="py-3 px-4 border">Mínimo 5L/min para evitar
                                                        rebreathing
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">Mascarilla con
                                                        reservorio
                                                    </td>
                                                    <td className="py-3 px-4 border text-center text-orange-600">60-95%</td>
                                                    <td className="py-3 px-4 border text-center">10-15</td>
                                                    <td className="py-3 px-4 border">Hipoxemia severa</td>
                                                    <td className="py-3 px-4 border">Mantener bolsa inflada durante
                                                        espiración
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border font-medium">BVM con reservorio</td>
                                                    <td className="py-3 px-4 border text-center text-red-600">90-100%</td>
                                                    <td className="py-3 px-4 border text-center">15</td>
                                                    <td className="py-3 px-4 border">Insuficiencia respiratoria, apnea
                                                    </td>
                                                    <td className="py-3 px-4 border">Ventilación asistida/controlada
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Consejos prácticos mejorados */}
                                    <div
                                        className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-5 h-5 mr-2"/>
                                            Consejos Prácticos del Experto
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-2">Técnicas
                                                    avanzadas:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>Técnica de dos operadores para BVM si es posible</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>BURP (Backward, Upward, Rightward Pressure) para visualización</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>Posición olfateo en lactantes (sin hiperextensión)</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-2">Errores a
                                                    evitar:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaExclamationTriangle
                                                            className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>Ventilación demasiado rápida o con mucho volumen</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaExclamationTriangle
                                                            className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>Presión excesiva en mascarilla (causa fugas)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaExclamationTriangle
                                                            className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>No reevaluar permeabilidad constantemente</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-8">
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                                        Casos Clínicos - Simulación de Escenarios Reales
                                    </h2>

                                    {/* Caso 1: Obstrucción por cuerpo extraño */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-6 shadow-md">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-600 mr-3"/>
                                            <h3 className="text-2xl font-bold text-red-700">Caso 1: Obstrucción por
                                                Cuerpo Extraño</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <h4 className="font-bold text-gray-800 mb-2">🚨 Escenario:</h4>
                                            <p className="text-gray-700 mb-4">
                                                Hombre de 65 años cenando en restaurante. Súbitamente se lleva las manos
                                                al cuello,
                                                no puede hablar, toser, ni respirar. Está cianótico y angustiado.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-blue-700 mb-2">Signos
                                                        presentes:</h5>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>✗ No puede hablar</li>
                                                        <li>✗ No puede toser</li>
                                                        <li>✗ Signo universal de asfixia (manos al cuello)</li>
                                                        <li>✗ Cianosis progresiva</li>
                                                        <li>✗ Sin entrada de aire audible</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-orange-700 mb-2">Signos
                                                        vitales:</h5>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• Consciente, angustiado</li>
                                                        <li>• FC: 120 lpm</li>
                                                        <li>• SpO₂: No se obtiene lectura</li>
                                                        <li>• Movimientos respiratorios sin entrada de aire</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-700 mb-3">💡 Manejo Correcto
                                                (Secuencial):</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold mb-2">Paciente CONSCIENTE:</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Preguntar "¿Se está ahogando?"</li>
                                                        <li>Posicionarse detrás del paciente</li>
                                                        <li>5 compresiones abdominales (Heimlich)</li>
                                                        <li>Verificar si expulsa el objeto</li>
                                                        <li>Repetir hasta expulsión o pérdida de conciencia</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold mb-2">Si pierde CONCIENCIA:</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Activar SME inmediatamente</li>
                                                        <li>Posicionar en superficie dura</li>
                                                        <li>30 compresiones torácicas (RCP)</li>
                                                        <li>Abrir vía aérea y verificar objeto visible</li>
                                                        <li>Si visible: remover con pinza McGill</li>
                                                        <li>2 ventilaciones de rescate</li>
                                                        <li>Continuar RCP hasta que llegue ayuda</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 2: Paciente inconsciente con secreciones */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-6 shadow-md">
                                        <div className="flex items-center mb-4">
                                            <FaLungsVirus className="w-8 h-8 text-blue-600 mr-3"/>
                                            <h3 className="text-2xl font-bold text-blue-700">Caso 2: Paciente
                                                Inconsciente con Secreciones</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <h4 className="font-bold text-gray-800 mb-2">🚨 Escenario:</h4>
                                            <p className="text-gray-700 mb-4">
                                                Mujer de 52 años encontrada inconsciente en casa por familiar. Presenta
                                                respiración
                                                ruidosa con gorgoteo, secreciones visibles en boca, y nivel de
                                                conciencia disminuido.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-blue-700 mb-2">Evaluación
                                                        inicial:</h5>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• GCS: 6 (O2V1M3)</li>
                                                        <li>• Ruidos respiratorios: gorgoteo</li>
                                                        <li>• Secreciones y saliva en boca</li>
                                                        <li>• Respiración irregular</li>
                                                        <li>• No responde a estímulos verbales</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-orange-700 mb-2">Signos
                                                        vitales:</h5>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• FC: 95 lpm</li>
                                                        <li>• FR: 8/min irregular</li>
                                                        <li>• SpO₂: 85% aire ambiente</li>
                                                        <li>• TA: 160/90 mmHg</li>
                                                        <li>• Piel pálida y húmeda</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-700 mb-3">💡 Manejo Correcto (Prioridades
                                                ABC):</h4>
                                            <div className="space-y-4">
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <h5 className="font-semibold text-red-600 mb-2">A - AIRWAY
                                                        (Prioridad 1):</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Posición lateral de seguridad (si no hay trauma)</li>
                                                        <li>Aspiración de secreciones (máx 15 seg)</li>
                                                        <li>Maniobra frente-mentón</li>
                                                        <li>Colocar OPA (sin reflejo nauseoso)</li>
                                                    </ol>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <h5 className="font-semibold text-blue-600 mb-2">B - BREATHING
                                                        (Prioridad 2):</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Ventilación asistida con BVM</li>
                                                        <li>O₂ alto flujo (15 L/min)</li>
                                                        <li>Frecuencia: 10-12/min</li>
                                                        <li>Monitoreo SpO₂ continuo</li>
                                                    </ol>
                                                </div>
                                                <div className="bg-white p-3 rounded shadow-sm">
                                                    <h5 className="font-semibold text-purple-600 mb-2">Monitoreo
                                                        continuo:</h5>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Reevaluar vía aérea constantemente</li>
                                                        <li>Aspirar PRN (según necesidad)</li>
                                                        <li>Preparar para intubación si es necesario</li>
                                                        <li>Traslado rápido con soporte avanzado</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3: Trauma facial con compromiso de vía aérea */}
                                    <div
                                        className="bg-gradient-to-r from-yellow-50 to-orange-100 border-l-4 border-yellow-500 rounded-lg p-6 shadow-md">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-8 h-8 text-yellow-600 mr-3"/>
                                            <h3 className="text-2xl font-bold text-yellow-700">Caso 3: Trauma Facial con
                                                Compromiso de Vía Aérea</h3>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <h4 className="font-bold text-gray-800 mb-2">🚨 Escenario:</h4>
                                            <p className="text-gray-700 mb-4">
                                                Joven de 22 años, accidente en motocicleta sin casco. Trauma facial
                                                severo,
                                                sangrado oral activo, dificultad respiratoria y nivel de conciencia
                                                alterado.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-blue-700 mb-2">Evaluación del
                                                        trauma:</h5>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• Fractura maxilofacial evidente</li>
                                                        <li>• Sangrado oral activo</li>
                                                        <li>• Posible fractura mandibular</li>
                                                        <li>• Dientes rotos/ausentes</li>
                                                        <li>• Mecanismo de alta energía</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-orange-700 mb-2">Signos
                                                        vitales:</h5>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li>• GCS: 12 (O3V3M6)</li>
                                                        <li>• FC: 110 lpm</li>
                                                        <li>• FR: 22/min laboriosa</li>
                                                        <li>• SpO₂: 90% aire ambiente</li>
                                                        <li>• Uso músculos accesorios</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-bold text-green-700 mb-3">💡 Manejo Especializado (Trauma
                                                + Vía Aérea):</h4>
                                            <div className="space-y-4">
                                                <div className="bg-red-100 p-3 rounded border border-red-300">
                                                    <h5 className="font-semibold text-red-700 mb-2">⚠️ Prioridades
                                                        críticas:</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li><strong>Inmovilización cervical INMEDIATA</strong></li>
                                                        <li>Control de vía aérea con protección C-spine</li>
                                                        <li>Aspiración continua de sangre</li>
                                                        <li>Posición Trendelenburg si está indicado</li>
                                                    </ol>
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h5 className="font-semibold text-blue-600 mb-2">Manejo vía
                                                            aérea:</h5>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Tracción mandibular (NO frente-mentón)</li>
                                                            <li>Aspiración selectiva con Yankauer</li>
                                                            <li>NPA bilateral si es posible</li>
                                                            <li>BVM con dos operadores</li>
                                                            <li>Preparar para vía aérea quirúrgica</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <h5 className="font-semibold text-purple-600 mb-2">Consideraciones
                                                            especiales:</h5>
                                                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Alto riesgo de obstrucción súbita</li>
                                                            <li>Posible lesión asociada C-spine</li>
                                                            <li>Monitoreo neurológico continuo</li>
                                                            <li>Traslado CÓDIGO ROJO</li>
                                                            <li>Notificar a centro de trauma</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos de aprendizaje clave */}
                                    <div
                                        className="bg-gradient-to-r from-purple-50 to-indigo-100 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-6 h-6 mr-2"/>
                                            Puntos Clave de Aprendizaje
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Toma de decisiones
                                                    rápida:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                                        <span>Evalúa ABC en primeros 30 segundos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                                        <span>Identifica amenaza inmediata a la vida</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                                        <span>Aplica algoritmo apropiado inmediatamente</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                                        <span>Reevalúa frecuentemente</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Trabajo en
                                                    equipo:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                                        <span>Comunicación clara y directa</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                                        <span>Asignación específica de roles</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                                        <span>Pedido temprano de soporte avanzado</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                                        <span>Documentación precisa durante atención</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Simulador de decisiones */}
                                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                                            🎯 Ejercicio de Simulación Mental
                                        </h3>
                                        <p className="text-gray-600 text-center mb-4">
                                            Antes del próximo caso real, repasa mentalmente estos escenarios.
                                            ¿Qué harías en los primeros 60 segundos de cada caso?
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded border text-center">
                                                <h4 className="font-semibold text-blue-600 mb-2">Escenario A</h4>
                                                <p className="text-sm text-gray-700">Niño de 3 años con objeto pequeño
                                                    en boca, tosiendo débilmente</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border text-center">
                                                <h4 className="font-semibold text-green-600 mb-2">Escenario B</h4>
                                                <p className="text-sm text-gray-700">Adulto mayor inconsciente,
                                                    respiración agonal, vómito en boca</p>
                                            </div>
                                            <div className="bg-white p-4 rounded border text-center">
                                                <h4 className="font-semibold text-orange-600 mb-2">Escenario C</h4>
                                                <p className="text-sm text-gray-700">Paciente obeso, estridor
                                                    inspiratorio, sat 88%</p>
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
                                        <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Jones
                                            & Bartlett Learning.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/airway-management/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre manejo de vía aérea</a></li>
                                        <li><a href="https://www.easyauscultation.com/lung-sounds" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">Easy
                                            Auscultation - Sonidos pulmonares</a></li>
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

