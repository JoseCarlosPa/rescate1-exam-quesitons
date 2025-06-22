import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AirwayEmergency.questions.ts";
import {FaMaskVentilator} from "react-icons/fa6";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function AirwayEmergency(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaMaskVentilator className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Respiratorias</h1>
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
                            to="/airway-emergency/exam"
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

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus conocimientos</h3>
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
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias respiratorias?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias respiratorias son condiciones en las que el cuerpo no recibe suficiente oxígeno, lo que puede resultar en hipoxia, hipoxemia o paro respiratorio si no se actúa a tiempo.
                                        Incluyen desde obstrucción de la vía aérea hasta enfermedades crónicas como EPOC, asma, neumonía o edema pulmonar.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        las emergencias respiratorias son una de las principales causas de llamadas a los servicios de emergencia y constituyen una prioridad en la evaluación del paciente (ABCDE).
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dificultad para respirar (disnea)</li>
                                            <li>Ruidos respiratorios anormales (sibilancias, estridor, ronquidos)</li>
                                            <li>Cianosis (coloración azulada)</li>
                                            <li>Taquipnea o bradipnea</li>
                                            <li>Uso de músculos accesorios para respirar</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Retracciones intercostales o supraclaviculares</li>
                                            <li>Alteración del nivel de conciencia</li>
                                            <li>Posición de trípode</li>
                                            <li>Incapacidad para hablar en frases completas</li>
                                            <li>Ansiedad o sensación de muerte inminente</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Patologías frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Obstructivas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Asma</li>
                                                <li>EPOC (enfisema y bronquitis crónica)</li>
                                                <li>Obstrucción de vía aérea por cuerpo extraño</li>
                                                <li>Bronquiolitis (en niños)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Restrictivas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Neumonía</li>
                                                <li>Edema pulmonar</li>
                                                <li>Neumotórax</li>
                                                <li>Derrame pleural</li>
                                                <li>Síndrome de distrés respiratorio</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía de la vía aérea</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            La vía aérea se divide en superior e inferior:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Vía aérea superior:</strong> Nariz, boca, faringe y laringe hasta las cuerdas vocales.</li>
                                            <li><strong>Vía aérea inferior:</strong> Tráquea, bronquios, bronquiolos y alvéolos.</li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            Los pulmones son los órganos principales del sistema respiratorio, formados por lóbulos (3 en el derecho, 2 en el izquierdo) y recubiertos por la pleura.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Respiratory_system_complete_es.svg/500px-Respiratory_system_complete_es.svg.png"
                                            alt="Anatomía del sistema respiratorio"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología respiratoria</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Ventilación</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Es el proceso mecánico de mover el aire hacia dentro y fuera de los pulmones. Requiere:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Vía aérea permeable</li>
                                                <li>Diafragma y músculos intercostales funcionales</li>
                                                <li>Caja torácica íntegra</li>
                                                <li>Control neurológico adecuado</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Respiración celular</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Es el intercambio gaseoso a nivel alveolar:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>El oxígeno pasa de los alvéolos a la sangre</li>
                                                <li>El CO₂ pasa de la sangre a los alvéolos</li>
                                                <li>Requiere membrana alvéolo-capilar intacta</li>
                                                <li>Dependiente de gradientes de presión parcial</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Valores normales y evaluación</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Parámetro</th>
                                                    <th className="py-2 px-4 border">Adultos</th>
                                                    <th className="py-2 px-4 border">Niños</th>
                                                    <th className="py-2 px-4 border">Lactantes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Frecuencia respiratoria</td>
                                                    <td className="py-2 px-4 border">12-20/min</td>
                                                    <td className="py-2 px-4 border">15-30/min</td>
                                                    <td className="py-2 px-4 border">25-50/min</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Saturación O₂</td>
                                                    <td className="py-2 px-4 border">≥95%</td>
                                                    <td className="py-2 px-4 border">≥95%</td>
                                                    <td className="py-2 px-4 border">≥95%</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Volumen corriente</td>
                                                    <td className="py-2 px-4 border">6-8 ml/kg</td>
                                                    <td className="py-2 px-4 border">6-8 ml/kg</td>
                                                    <td className="py-2 px-4 border">6-8 ml/kg</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo básico de la vía aérea</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Técnicas manuales</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Maniobra frente-mentón:</strong> Estándar para abrir vía aérea</li>
                                                <li><strong>Elevación mandibular:</strong> Indicada en trauma</li>
                                                <li><strong>Posicionamiento:</strong> Posición de recuperación en pacientes inconscientes</li>
                                                <li><strong>Aspiración:</strong> Eliminar secreciones o cuerpos extraños</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Dispositivos básicos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Cánulas orofaríngeas:</strong> Evitan la caída de la lengua</li>
                                                <li><strong>Cánulas nasofaríngeas:</strong> Útiles en pacientes semiconscientes</li>
                                                <li><strong>BVM (bolsa-válvula-mascarilla):</strong> Para ventilación asistida</li>
                                                <li><strong>Mascarillas de oxígeno:</strong> Simple, con reservorio, etc.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Administración de oxígeno</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Dispositivo</th>
                                                    <th className="py-2 px-4 border">FiO₂ aproximada</th>
                                                    <th className="py-2 px-4 border">Flujo (L/min)</th>
                                                    <th className="py-2 px-4 border">Indicaciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Cánula nasal</td>
                                                    <td className="py-2 px-4 border">24-44%</td>
                                                    <td className="py-2 px-4 border">1-6</td>
                                                    <td className="py-2 px-4 border">Hipoxia leve, EPOC</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Mascarilla simple</td>
                                                    <td className="py-2 px-4 border">35-50%</td>
                                                    <td className="py-2 px-4 border">5-10</td>
                                                    <td className="py-2 px-4 border">Hipoxia moderada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Mascarilla con reservorio</td>
                                                    <td className="py-2 px-4 border">60-95%</td>
                                                    <td className="py-2 px-4 border">10-15</td>
                                                    <td className="py-2 px-4 border">Hipoxia severa, trauma</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">BVM con reservorio</td>
                                                    <td className="py-2 px-4 border">90-100%</td>
                                                    <td className="py-2 px-4 border">15</td>
                                                    <td className="py-2 px-4 border">Ventilación asistida</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico por patologías</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Obstrucción de vía aérea</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Identifica obstrucción parcial vs. completa</li>
                                                <li>En obstrucción parcial con buena ventilación: permita que el paciente tosa</li>
                                                <li>En obstrucción completa en adulto/niño consciente: compresiones abdominales (Heimlich)</li>
                                                <li>En obstrucción completa en lactante consciente: golpes en espalda y compresiones torácicas</li>
                                                <li>En paciente inconsciente: iniciar RCP</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Asma</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Posición cómoda (generalmente sentado)</li>
                                                <li>Oxígeno para mantener saturación ≥94%</li>
                                                <li>Broncodilatadores inhalados (salbutamol)</li>
                                                <li>Considerar esteroides según protocolos locales</li>
                                                <li>Monitorización continua y reevaluación</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">EPOC</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Oxígeno controlado (mantener SpO₂ 88-92%)</li>
                                                <li>Broncodilatadores inhalados</li>
                                                <li>Evaluar necesidad de ventilación no invasiva</li>
                                                <li>Traslado en posición semisentada</li>
                                                <li>Precaución: la hipoxia es su estímulo respiratorio principal</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Edema pulmonar</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Posición sentada con piernas colgando</li>
                                                <li>Oxígeno a alto flujo</li>
                                                <li>CPAP si está disponible y hay indicación</li>
                                                <li>Considerar nitroglicerina (si PAS mayor 100 mmHg)</li>
                                                <li>Tratamiento rápido y traslado inmediato</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Asma severa</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 23 años con antecedente de asma. Tras exposición a alérgeno presenta disnea progresiva,
                                        sibilancias audibles y uso de músculos accesorios. No puede completar frases.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable con sibilancias</li>
                                            <li>B: FR 28/min, SpO₂ 88%, uso de músculos accesorios</li>
                                            <li>C: FC 125/min, TA 140/90 mmHg</li>
                                            <li>D: Alerta, ansiosa</li>
                                            <li>E: Sin hallazgos relevantes</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición sentada</li>
                                            <li>Oxígeno con mascarilla (10-15 L/min)</li>
                                            <li>Broncodilatador (salbutamol) con cámara espaciadora</li>
                                            <li>Monitorización continua</li>
                                            <li>Traslado rápido a centro hospitalario</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Obstrucción de vía aérea</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 65 años que durante una comida súbitamente se levanta, lleva las manos al cuello y no puede hablar ni toser.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Obstrucción completa de vía aérea</li>
                                            <li>B: No hay entrada de aire</li>
                                            <li>C: Signos de buena perfusión inicial</li>
                                            <li>D: Consciente, agitado</li>
                                            <li>E: Signo universal de asfixia (manos al cuello)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Confirmar obstrucción completa (preguntando "¿se está atragantando?")</li>
                                            <li>Realizar compresiones abdominales (maniobra de Heimlich)</li>
                                            <li>Continuar hasta desobstrucción o pérdida de conciencia</li>
                                            <li>Si pierde conciencia, iniciar RCP</li>
                                            <li>Durante RCP, verificar cavidad oral antes de ventilaciones</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: EPOC exacerbado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 72 años con antecedente de EPOC y oxígeno domiciliario. Presenta aumento de disnea y
                                        expectoración purulenta desde hace 3 días.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24/min, SpO₂ 84%, uso moderado de músculos accesorios</li>
                                            <li>C: FC 110/min, TA 145/85 mmHg</li>
                                            <li>D: Alerta, orientado</li>
                                            <li>E: Temperatura 38.2°C, esputo verdoso</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición semisentada</li>
                                            <li>Oxígeno controlado (iniciar a 2-3 L/min) para mantener SpO₂ 88-92%</li>
                                            <li>Broncodilatador en nebulización o inhalador</li>
                                            <li>Monitorización continua, vigilando nivel de conciencia</li>
                                            <li>Traslado al hospital para tratamiento definitivo</li>
                                        </ol>
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
    );
}

