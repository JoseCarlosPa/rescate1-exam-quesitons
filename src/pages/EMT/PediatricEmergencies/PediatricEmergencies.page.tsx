import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./PediatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdOutlineTimer, MdCheckCircle, MdWarning, MdHealthAndSafety} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaChild, FaExclamationTriangle, FaBaby, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {FiAlertTriangle, FiEye, FiActivity, FiUsers} from "react-icons/fi";
import {TbEmergencyBed, TbScale, TbMedicalCross, TbStethoscope} from "react-icons/tb";
import {RiThermometerLine, RiLungsLine, RiHeartPulseLine, RiMentalHealthLine} from "react-icons/ri";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import { ForumSection } from "../../../components/ForumSection";

export default function PediatricEmergencies(){
    const [activeTab, setActiveTab] = useState<'evaluation' | 'pathologies' | 'treatment' | 'cases'>('evaluation');

    return(
        <SEOWrapper
            title="Emergencias Pediátricas EMT | Evaluación, Manejo y Casos Clínicos"
            description="Guía completa de emergencias pediátricas para Técnicos en Atención Médica Prehospitalaria: TEP, patologías comunes, manejo emergente y casos clínicos. Aprende a evaluar y tratar niños en situaciones críticas."
            keywords="emergencias pediátricas, EMT, paramédicos, TEP, triángulo evaluación pediátrica, bronquiolitis, epiglotitis, convulsiones febriles, shock pediátrico, vía aérea pediátrica, casos clínicos, pediatría prehospitalaria"
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
                            <FaChild  className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias pediátricas</h1>
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
                            to={`${AllRoutes.PEDIATRIC_EMERGENCIES}/exam`}
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

                        <a href="https://drive.google.com/file/d/1iQup0XcRar5cBBdgab0mCvK0GNqtK7l-/view?usp=drive_link"
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
                                onClick={() => setActiveTab('evaluation')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'evaluation' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación TEP
                            </button>
                            <button
                                onClick={() => setActiveTab('pathologies')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'pathologies' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Patologías Críticas
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Protocolos de Manejo
                            </button>
                            <button
                                onClick={() => setActiveTab('cases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'cases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'evaluation' && (
                            <div className="space-y-8">
                                {/* Importancia crítica */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">Los niños NO son adultos pequeños</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        Los niños tienen diferencias anatómicas, fisiológicas y psicológicas que requieren 
                                        un enfoque especializado en el manejo de emergencias médicas.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaBaby className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <p className="font-bold text-blue-600">Anatomía</p>
                                            <p className="text-sm">Diferencias estructurales críticas</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaHeartbeat className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                            <p className="font-bold text-green-600">Fisiología</p>
                                            <p className="text-sm">Respuestas compensatorias únicas</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <RiMentalHealthLine className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                                            <p className="font-bold text-purple-600">Psicología</p>
                                            <p className="text-sm">Desarrollo cognitivo variable</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Triángulo de Evaluación Pediátrica */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Triángulo de Evaluación Pediátrica (TEP)
                                    </h2>
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <p className="text-gray-700 font-medium">
                                            Herramienta de evaluación rápida que permite formar una impresión general del niño 
                                            en <strong>10-15 segundos</strong>, evaluando "desde la puerta" antes del contacto físico.
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                                            <div className="text-center mb-4">
                                                <RiMentalHealthLine className="w-12 h-12 text-blue-600 mx-auto mb-2"/>
                                                <h3 className="text-xl font-bold text-blue-700">APARIENCIA</h3>
                                                <p className="text-sm text-blue-600">Estado neurológico</p>
                                            </div>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Tono muscular:</strong> Flácido vs. Normal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Interactividad:</strong> Responde a estímulos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Consuelo:</strong> Se calma con padres</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Mirada:</strong> Contacto visual apropiado</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Habla/Llanto:</strong> Fuerte vs. Débil</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                                            <div className="text-center mb-4">
                                                <RiLungsLine className="w-12 h-12 text-green-600 mx-auto mb-2"/>
                                                <h3 className="text-xl font-bold text-green-700">RESPIRACIÓN</h3>
                                                <p className="text-sm text-green-600">Trabajo respiratorio</p>
                                            </div>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>Sonidos anormales:</strong> Estridor, sibilancias</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>Retracciones:</strong> Intercostales, subcostales</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>Aleteo nasal:</strong> Esfuerzo respiratorio</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>Posición anormal:</strong> Trípode, fowler</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span><strong>Frecuencia:</strong> Taquipnea, bradipnea</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-200">
                                            <div className="text-center mb-4">
                                                <RiHeartPulseLine className="w-12 h-12 text-red-600 mx-auto mb-2"/>
                                                <h3 className="text-xl font-bold text-red-700">CIRCULACIÓN</h3>
                                                <p className="text-sm text-red-600">Perfusión cutánea</p>
                                            </div>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Palidez:</strong> Pérdida de color normal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Moteado:</strong> Patrón reticulado</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Cianosis:</strong> Coloración azulada</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Relleno capilar:</strong> &gt;2 segundos anormal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Temperatura:</strong> Extremidades frías</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Clasificación según TEP */}
                                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                                        <TbMedicalCross className="w-6 h-6 mr-2"/>
                                        Clasificación según TEP
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-green-100 p-4 rounded-lg text-center">
                                            <MdCheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                                            <h4 className="font-bold text-green-700">NIÑO SANO</h4>
                                            <p className="text-sm text-green-600">Todos los lados del triángulo normales</p>
                                        </div>
                                        <div className="bg-yellow-100 p-4 rounded-lg text-center">
                                            <MdWarning className="w-8 h-8 text-yellow-600 mx-auto mb-2"/>
                                            <h4 className="font-bold text-yellow-700">NIÑO EN RIESGO</h4>
                                            <p className="text-sm text-yellow-600">Un lado del triángulo anormal</p>
                                        </div>
                                        <div className="bg-red-100 p-4 rounded-lg text-center">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-600 mx-auto mb-2"/>
                                            <h4 className="font-bold text-red-700">NIÑO ENFERMO</h4>
                                            <p className="text-sm text-red-600">Dos o más lados anormales</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos vitales por edad */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <TbStethoscope className="w-6 h-6 mr-2 text-orange-500"/>
                                        Signos Vitales Normales por Edad
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                            <thead className="bg-orange-100">
                                                <tr>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">Grupo de Edad</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">FC (lpm)</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">FR (rpm)</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">PAS (mmHg)</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">Peso (kg)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-blue-700">Recién nacido (0-1 mes)</td>
                                                    <td className="py-3 px-4 border-b text-center">120-160</td>
                                                    <td className="py-3 px-4 border-b text-center">30-50</td>
                                                    <td className="py-3 px-4 border-b text-center">60-90</td>
                                                    <td className="py-3 px-4 border-b text-center">3-5</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-green-700">Lactante (1-12 meses)</td>
                                                    <td className="py-3 px-4 border-b text-center">100-160</td>
                                                    <td className="py-3 px-4 border-b text-center">25-40</td>
                                                    <td className="py-3 px-4 border-b text-center">70-100</td>
                                                    <td className="py-3 px-4 border-b text-center">6-12</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-purple-700">Preescolar (1-6 años)</td>
                                                    <td className="py-3 px-4 border-b text-center">90-150</td>
                                                    <td className="py-3 px-4 border-b text-center">20-30</td>
                                                    <td className="py-3 px-4 border-b text-center">80-110</td>
                                                    <td className="py-3 px-4 border-b text-center">10-20</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-orange-700">Escolar (6-12 años)</td>
                                                    <td className="py-3 px-4 border-b text-center">70-120</td>
                                                    <td className="py-3 px-4 border-b text-center">15-25</td>
                                                    <td className="py-3 px-4 border-b text-center">90-120</td>
                                                    <td className="py-3 px-4 border-b text-center">20-40</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium text-red-700">Adolescente (12+ años)</td>
                                                    <td className="py-3 px-4 border-b text-center">60-100</td>
                                                    <td className="py-3 px-4 border-b text-center">12-20</td>
                                                    <td className="py-3 px-4 border-b text-center">100-120</td>
                                                    <td className="py-3 px-4 border-b text-center">40-70</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Diferencias anatómicas clave */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaBaby className="w-6 h-6 mr-2 text-orange-500"/>
                                        Diferencias Anatómicas Críticas
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                                                <RiLungsLine className="w-5 h-5 mr-2"/>
                                                Vía Aérea Pediátrica
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Cabeza:</strong> Más grande proporcionalmente</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Lengua:</strong> Más grande en relación a la boca</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Tráquea:</strong> Más pequeña, flexible y blanda</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Estrechez:</strong> A nivel del cricoides</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Occipucio:</strong> Prominente (flexión natural)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                                                <RiHeartPulseLine className="w-5 h-5 mr-2"/>
                                                Sistema Cardiovascular
                                            </h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Compensación:</strong> Excelente capacidad inicial</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Hipotensión:</strong> Signo tardío y ominoso</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Superficie corporal:</strong> Mayor relativa</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Hipotermia:</strong> Predisposición aumentada</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                                    <span><strong>Metabolismo:</strong> Más rápido y demandante</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación ABCDE pediátrica */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <BsLightbulb className="w-6 h-6 mr-2 text-yellow-500"/>
                                        Evaluación ABCDE Pediátrica
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start p-4 bg-red-50 rounded-lg">
                                            <div className="bg-red-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">A</div>
                                            <div>
                                                <h4 className="font-semibold text-red-700">Vía aérea (Airway)</h4>
                                                <p className="text-gray-600">Permeabilidad, posicionamiento adecuado según edad, sonidos anormales</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                                            <div className="bg-blue-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">B</div>
                                            <div>
                                                <h4 className="font-semibold text-blue-700">Respiración (Breathing)</h4>
                                                <p className="text-gray-600">Frecuencia, calidad, esfuerzo respiratorio, retracciones, oximetría</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-green-50 rounded-lg">
                                            <div className="bg-green-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">C</div>
                                            <div>
                                                <h4 className="font-semibold text-green-700">Circulación (Circulation)</h4>
                                                <p className="text-gray-600">Pulsos, relleno capilar, color, presión arterial (signo tardío)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                                            <div className="bg-purple-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">D</div>
                                            <div>
                                                <h4 className="font-semibold text-purple-700">Discapacidad (Disability)</h4>
                                                <p className="text-gray-600">Nivel de conciencia (AVPU), respuesta pupilar, función neurológica</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                                            <div className="bg-yellow-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">E</div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-700">Exposición (Exposure)</h4>
                                                <p className="text-gray-600">Examen completo manteniendo temperatura, prevenir hipotermia</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'pathologies' && (
                            <div className="space-y-8">
                                {/* Importancia de reconocimiento temprano */}
                                <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <MdOutlineTimer className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">Reconocimiento Temprano = Vida</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        En pediatría, el reconocimiento temprano de patologías críticas es fundamental. 
                                        Los niños pueden compensar inicialmente, pero la descompensación es rápida y catastrófica.
                                    </p>
                                </div>

                                {/* Emergencias respiratorias */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <RiLungsLine className="w-6 h-6 mr-2 text-blue-500"/>
                                        Emergencias Respiratorias Pediátricas
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                                            <div className="flex items-center mb-3">
                                                <TbEmergencyBed className="w-8 h-8 text-red-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-red-700">Crup (Laringotraqueobronquitis)</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Infección viral, inicio gradual</li>
                                                        <li>• Edad: 6 meses a 6 años</li>
                                                        <li>• Empeora durante la noche</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos clave:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Tos característica de "foca"</li>
                                                        <li>• Estridor inspiratorio</li>
                                                        <li>• Fiebre baja-moderada</li>
                                                        <li>• Disfonia (voz ronca)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
                                            <div className="flex items-center mb-3">
                                                <FaExclamationTriangle className="w-8 h-8 text-orange-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-orange-700">Epiglotitis</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Infección bacteriana súbita</li>
                                                        <li>• Emergencia que amenaza la vida</li>
                                                        <li>• Puede obstruir completamente</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos clave:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Fiebre alta súbita</li>
                                                        <li>• Posición de trípode</li>
                                                        <li>• Babeo excesivo</li>
                                                        <li>• Voz amortiguada</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-center mb-3">
                                                <FaLungsVirus className="w-8 h-8 text-blue-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">Bronquiolitis</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Inflamación de bronquiolos</li>
                                                        <li>• Edad: &lt;2 años (pico 2-8 meses)</li>
                                                        <li>• Virus sincicial respiratorio</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos clave:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Sibilancias y retracciones</li>
                                                        <li>• Dificultad para alimentarse</li>
                                                        <li>• Taquipnea progresiva</li>
                                                        <li>• Irritabilidad</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                                            <div className="flex items-center mb-3">
                                                <RiLungsLine className="w-8 h-8 text-green-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-green-700">Asma Pediátrica</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Inflamación y broncoconstricción</li>
                                                        <li>• Desencadenantes identificables</li>
                                                        <li>• Historia familiar común</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos clave:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Sibilancias espiratorias</li>
                                                        <li>• Tos persistente</li>
                                                        <li>• Opresión torácica</li>
                                                        <li>• Disnea de esfuerzo</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Emergencias neurológicas */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <RiMentalHealthLine className="w-6 h-6 mr-2 text-purple-500"/>
                                        Emergencias Neurológicas
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-center mb-3">
                                                <RiThermometerLine className="w-8 h-8 text-purple-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-purple-700">Convulsiones Febriles</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Edad: 6 meses a 5 años</li>
                                                        <li>• Asociadas a fiebre alta</li>
                                                        <li>• Generalmente benignas</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Tipos:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Simples:</strong> &lt;15 min, generalizadas</li>
                                                        <li>• <strong>Complejas:</strong> &gt;15 min, focales</li>
                                                        <li>• <strong>Recurrentes:</strong> &gt;1 en 24h</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-500">
                                            <div className="flex items-center mb-3">
                                                <MdWarning className="w-8 h-8 text-indigo-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-indigo-700">Status Epiléptico</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Definición:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Convulsión &gt;5 minutos</li>
                                                        <li>• Convulsiones sin recuperación</li>
                                                        <li>• Emergencia neurológica</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Riesgos:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Daño cerebral permanente</li>
                                                        <li>• Compromiso respiratorio</li>
                                                        <li>• Acidosis metabólica</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Shock pediátrico */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <RiHeartPulseLine className="w-6 h-6 mr-2 text-red-500"/>
                                        Shock Pediátrico
                                    </h2>
                                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                                        <p className="text-yellow-800 font-medium">
                                            <strong>Concepto clave:</strong> Los niños mantienen la presión arterial normal hasta las etapas finales. 
                                            ¡La hipotensión es un signo tardío y ominoso!
                                        </p>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
                                            <div className="flex items-center mb-3">
                                                <MdHealthAndSafety className="w-8 h-8 text-yellow-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-yellow-700">Shock Compensado</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos tempranos:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Taquicardia (signo más temprano)</li>
                                                        <li>• Relleno capilar &gt;2 segundos</li>
                                                        <li>• Piel fría y pegajosa</li>
                                                        <li>• Alteración mental sutil</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-green-100 p-3 rounded">
                                                    <p className="text-sm font-medium text-green-700 mb-1">Pronóstico:</p>
                                                    <p className="text-sm text-green-600">Excelente si se trata rápidamente</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                                            <div className="flex items-center mb-3">
                                                <FaExclamationTriangle className="w-8 h-8 text-red-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-red-700">Shock Descompensado</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos tardíos:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Hipotensión</strong> (crítico)</li>
                                                        <li>• Pulsos débiles/ausentes</li>
                                                        <li>• Cianosis</li>
                                                        <li>• Alteración severa conciencia</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-100 p-3 rounded">
                                                    <p className="text-sm font-medium text-red-700 mb-1">Pronóstico:</p>
                                                    <p className="text-sm text-red-600">Riesgo inmediato de paro cardíaco</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Causas comunes por edad */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <TbScale className="w-6 h-6 mr-2 text-orange-500"/>
                                        Causas de Shock por Grupo de Edad
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Lactantes (0-12 meses)</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Gastroenteritis con deshidratación</li>
                                                <li>• Sepsis</li>
                                                <li>• Síndrome del niño sacudido</li>
                                                <li>• Falla cardíaca congénita</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-700 mb-2">Preescolares (1-6 años)</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Traumatismo</li>
                                                <li>• Gastroenteritis</li>
                                                <li>• Intoxicaciones</li>
                                                <li>• Infecciones severas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-purple-700 mb-2">Escolares (6+ años)</h4>
                                            <ul className="text-sm text-gray-700 space-y-1">
                                                <li>• Traumatismo (principal causa)</li>
                                                <li>• Anafilaxia</li>
                                                <li>• Diabéticos (DKA)</li>
                                                <li>• Hemorragias</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Condiciones especiales */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiUsers className="w-6 h-6 mr-2 text-pink-500"/>
                                        Condiciones Especiales
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border-l-4 border-pink-500">
                                            <div className="flex items-center mb-3">
                                                <FiAlertTriangle className="w-8 h-8 text-pink-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-pink-700">Maltrato Infantil</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Signos de sospecha:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Lesiones en diferentes etapas</li>
                                                        <li>• Patrones sugestivos</li>
                                                        <li>• Historia inconsistente</li>
                                                        <li>• Comportamiento del niño</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-100 p-3 rounded">
                                                    <p className="text-sm font-medium text-red-700 mb-1">Obligación legal:</p>
                                                    <p className="text-sm text-red-600">Reportar sospechas a autoridades</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-center mb-3">
                                                <FaBaby className="w-8 h-8 text-blue-600 mr-3"/>
                                                <h3 className="text-xl font-bold text-blue-700">SMSL</h3>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Muerte súbita e inexplicable</li>
                                                        <li>• Lactantes aparentemente sanos</li>
                                                        <li>• Pico: 2-4 meses de edad</li>
                                                        <li>• Durante el sueño</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-blue-100 p-3 rounded">
                                                    <p className="text-sm font-medium text-blue-700 mb-1">Manejo:</p>
                                                    <p className="text-sm text-blue-600">RCP + apoyo emocional familia</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                            

                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                {/* Principios generales */}
                                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <TbMedicalCross className="w-8 h-8 text-blue-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-blue-700">Principios del Manejo Pediátrico</h2>
                                    </div>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg text-center">
                                            <FiUsers className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <p className="font-bold text-blue-600">Familia</p>
                                            <p className="text-sm">Incluir a los padres siempre que sea posible</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg text-center">
                                            <RiThermometerLine className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                            <p className="font-bold text-green-600">Hipotermia</p>
                                            <p className="text-sm">Prevenir pérdida de calor corporal</p>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg text-center">
                                            <TbScale className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                                            <p className="font-bold text-purple-600">Peso</p>
                                            <p className="text-sm">Base para cálculos de dosis</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo de vía aérea pediátrica */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <RiLungsLine className="w-6 h-6 mr-2 text-blue-500"/>
                                        Manejo de Vía Aérea Pediátrica
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                                                <MdHealthAndSafety className="w-5 h-5 mr-2"/>
                                                Posicionamiento según Edad
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-blue-600">Lactantes (0-12 meses)</h4>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Posición neutra (sin almohada)</li>
                                                        <li>• Occipucio prominente compensa</li>
                                                        <li>• Evitar flexión/extensión excesiva</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-blue-600">Niños (1+ años)</h4>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Ligera extensión del cuello</li>
                                                        <li>• Almohada pequeña bajo cabeza</li>
                                                        <li>• Posición de "olfateo"</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-blue-600">Con sospecha de trauma</h4>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Inmovilización cervical</li>
                                                        <li>• Elevación mandibular</li>
                                                        <li>• Evitar movimientos del cuello</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                                                <FaLungsVirus className="w-5 h-5 mr-2"/>
                                                Dispositivos de Vía Aérea
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-green-600">Cánulas Orofaríngeas</h4>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Solo en pacientes inconscientes</li>
                                                        <li>• Tamaño: esquina boca a ángulo mandíbula</li>
                                                        <li>• Inserción directa (NO rotar)</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-green-600">Cánulas Nasofaríngeas</h4>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Semiconscientes o conscientes</li>
                                                        <li>• Contraindicadas en trauma facial</li>
                                                        <li>• Lubricar bien antes de insertar</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <h4 className="font-medium text-green-600">BVM Pediátrico</h4>
                                                    <ul className="text-sm text-gray-700 mt-1">
                                                        <li>• Volumen: 450-500 ml</li>
                                                        <li>• Sellado: puente nasal a mentón</li>
                                                        <li>• Ventilaciones suaves y lentas</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Oxigenoterapia pediátrica */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaLungsVirus className="w-6 h-6 mr-2 text-green-500"/>
                                        Oxigenoterapia Pediátrica
                                    </h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                                            <thead className="bg-green-100">
                                                <tr>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">Dispositivo</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">Concentración O₂</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">Flujo</th>
                                                    <th className="py-3 px-4 border-b font-semibold text-gray-700">Indicaciones Pediátricas</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium">Cánula nasal</td>
                                                    <td className="py-3 px-4 border-b text-center">24-40%</td>
                                                    <td className="py-3 px-4 border-b text-center">0.25-4 L/min</td>
                                                    <td className="py-3 px-4 border-b">Niños cooperativos, hipoxia leve</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium">Mascarilla simple</td>
                                                    <td className="py-3 px-4 border-b text-center">35-60%</td>
                                                    <td className="py-3 px-4 border-b text-center">6-10 L/min</td>
                                                    <td className="py-3 px-4 border-b">Hipoxia moderada, niños cooperativos</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium">Mascarilla con reservorio</td>
                                                    <td className="py-3 px-4 border-b text-center">85-95%</td>
                                                    <td className="py-3 px-4 border-b text-center">10-15 L/min</td>
                                                    <td className="py-3 px-4 border-b">Emergencias respiratorias graves</td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b font-medium">Oxígeno por soplado</td>
                                                    <td className="py-3 px-4 border-b text-center">Variable</td>
                                                    <td className="py-3 px-4 border-b text-center">10-15 L/min</td>
                                                    <td className="py-3 px-4 border-b">Niños no cooperativos, epiglotitis</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* Protocolos específicos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsLightbulb className="w-6 h-6 mr-2 text-yellow-500"/>
                                        Protocolos de Manejo Específico
                                    </h2>
                                    <div className="space-y-6">
                                        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                                            <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                                                <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                                                Epiglotitis - Protocolo Crítico
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-red-600 mb-2">QUÉ HACER:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Mantener al niño calmado</li>
                                                        <li>Posición cómoda (brazos del padre)</li>
                                                        <li>Oxígeno por soplado (no invasivo)</li>
                                                        <li>Preparar equipo de vía aérea</li>
                                                        <li>Traslado inmediato CODE 3</li>
                                                        <li>Notificar hospital receptor</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-red-600 mb-2">QUÉ NO HACER:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>NO examinar garganta</li>
                                                        <li>NO acostar al niño</li>
                                                        <li>NO separar de padres</li>
                                                        <li>NO procedimientos invasivos</li>
                                                        <li>NO agitarlos o estresarlos</li>
                                                        <li>NO forzar oxígeno con mascarilla</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                                            <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                                                <RiMentalHealthLine className="w-6 h-6 mr-2"/>
                                                Manejo de Convulsiones
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-blue-600 mb-2">Convulsiones Febriles:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Proteger vía aérea</li>
                                                        <li>Posición de recuperación</li>
                                                        <li>NO introducir objetos en boca</li>
                                                        <li>Medidas de enfriamiento gradual</li>
                                                        <li>Oxígeno si SpO₂ &lt;94%</li>
                                                        <li>Monitorizar para nuevas convulsiones</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-blue-600 mb-2">Status Epiléptico:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Asegurar vía aérea</li>
                                                        <li>Oxígeno alto flujo</li>
                                                        <li>Acceso vascular (IV/IO)</li>
                                                        <li>Considerar midazolam</li>
                                                        <li>Monitorización continua</li>
                                                        <li>Traslado urgente</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                                            <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                                                <RiHeartPulseLine className="w-6 h-6 mr-2"/>
                                                Manejo de Shock Pediátrico
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded">
                                                    <h4 className="font-medium text-green-600 mb-2">Protocolo de Reanimación:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Acceso vascular temprano (IV/IO)</li>
                                                        <li>Bolo inicial: 20 ml/kg de solución salina</li>
                                                        <li>Reevaluar después de cada bolo</li>
                                                        <li>Repetir bolos según respuesta</li>
                                                        <li>Oxígeno de alto flujo</li>
                                                        <li>Control de temperatura</li>
                                                        <li>Traslado a centro pediátrico</li>
                                                    </ol>
                                                </div>
                                                <div className="bg-yellow-100 p-4 rounded">
                                                    <h4 className="font-medium text-yellow-700 mb-2">⚠️ Puntos Críticos:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                                                        <li>Máximo 60 ml/kg total de cristaloides</li>
                                                        <li>Reevaluar después de cada bolo</li>
                                                        <li>Si no mejora: considerar otras causas</li>
                                                        <li>Hipotensión = descompensación tardía</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                                            <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                                                <FaLungsVirus className="w-6 h-6 mr-2"/>
                                                Obstrucción de Vía Aérea por Cuerpo Extraño
                                            </h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-purple-600 mb-2">Lactantes (&lt;1 año):</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Posición prona sobre antebrazo</li>
                                                        <li>5 golpes en espalda (entre omóplatos)</li>
                                                        <li>Voltear: 5 compresiones torácicas</li>
                                                        <li>Repetir secuencia hasta desobstrucción</li>
                                                        <li>Si inconsciente: iniciar RCP</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium text-purple-600 mb-2">Niños (&gt;1 año):</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Maniobra de Heimlich (compresiones abdominales)</li>
                                                        <li>Posición: detrás del niño</li>
                                                        <li>Compresiones hacia arriba y adentro</li>
                                                        <li>Repetir hasta desobstrucción</li>
                                                        <li>Si inconsciente: RCP + revisar boca</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Consideraciones especiales */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <MdHealthAndSafety className="w-6 h-6 mr-2 text-orange-500"/>
                                        Consideraciones Especiales en Manejo Pediátrico
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-medium text-yellow-700 mb-2 flex items-center">
                                                    <RiThermometerLine className="w-5 h-5 mr-2"/>
                                                    Control de Temperatura
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Los niños pierden calor rápidamente</li>
                                                    <li>Mantener ambiente cálido</li>
                                                    <li>Cubrir cabeza y extremidades</li>
                                                    <li>Limitar exposición durante examen</li>
                                                    <li>Usar mantas térmicas cuando sea necesario</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-medium text-pink-700 mb-2 flex items-center">
                                                    <FiUsers className="w-5 h-5 mr-2"/>
                                                    Apoyo Psicológico
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Permitir presencia de padres</li>
                                                    <li>Explicar procedimientos apropiados para edad</li>
                                                    <li>Mantener calma y paciencia</li>
                                                    <li>Usar técnicas de distracción</li>
                                                    <li>Considerar desarrollo cognitivo</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-medium text-indigo-700 mb-2 flex items-center">
                                                    <TbScale className="w-5 h-5 mr-2"/>
                                                    Dosificación de Medicamentos
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Calcular basándose en peso corporal</li>
                                                    <li>Usar cintas de medición pediátricas</li>
                                                    <li>Verificar dosis con protocolos</li>
                                                    <li>Documentar peso estimado</li>
                                                    <li>Considerar vías alternativas</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                                                    <TbStethoscope className="w-5 h-5 mr-2"/>
                                                    Comunicación Efectiva
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Hablar directamente al niño si es apropiado</li>
                                                    <li>Usar lenguaje simple y claro</li>
                                                    <li>Obtener historia de los padres</li>
                                                    <li>Observar interacciones familiares</li>
                                                    <li>Respetar vínculos afectivos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                          

                        {activeTab === 'cases' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos pediátricos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Dificultad respiratoria en lactante</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Lactante de 8 meses con 3 días de síntomas respiratorios. Los padres reportan tos persistente, 
                                        dificultad para alimentarse y episodios de cianosis perioral. Presenta retracciones subcostales 
                                        y sibilancias audibles.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación usando TEP:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Irritable, difícil de consolar, tono muscular disminuido</li>
                                            <li><strong>Trabajo respiratorio:</strong> Retracciones evidentes, sibilancias, aleteo nasal</li>
                                            <li><strong>Circulación cutánea:</strong> Cianosis perioral intermitente, relleno capilar 3 seg</li>
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Signos vitales:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>FC: 170/min (taquicárdico)</li>
                                            <li>FR: 55/min (taquipneico)</li>
                                            <li>SpO₂: 89% aire ambiente</li>
                                            <li>Temperatura: 38.1°C</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Clasificación: Niño "enfermo" (todos los componentes del TEP alterados)</li>
                                            <li>Oxígeno por mascarilla o soplado para mantener SpO₂ &gt;94%</li>
                                            <li>Posición cómoda (brazos del cuidador)</li>
                                            <li>Considerar broncodilatadores si hay sibilancias</li>
                                            <li>Monitorización continua</li>
                                            <li>Traslado rápido a centro con cuidados pediátricos</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 2: Sospecha de epiglotitis</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 4 años que desarrolló súbitamente fiebre alta, dolor de garganta severo y dificultad para tragar. 
                                        Se encuentra sentado inclinado hacia adelante, babea constantemente y su voz suena apagada. 
                                        Los padres están muy preocupados porque empeoró rápidamente.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Ansioso, alerta pero en evidente distress</li>
                                            <li><strong>Trabajo respiratorio:</strong> Posición de trípode, estridor leve</li>
                                            <li><strong>Circulación cutánea:</strong> Color normal, pero diaforético</li>
                                            <li>Temperatura: 39.8°C</li>
                                            <li>Voz amortiguada ("papa caliente")</li>
                                            <li>Babeo excesivo</li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-red-700">⚠️ Qué NO hacer:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-red-700">
                                            <li>NO examinar la garganta con abatelenguas</li>
                                            <li>NO acostar al niño</li>
                                            <li>NO separar al niño de los padres</li>
                                            <li>NO realizar procedimientos invasivos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Mantener al niño calmado en posición cómoda</li>
                                            <li>Oxígeno por soplado (técnica no invasiva)</li>
                                            <li>Permitir que un padre acompañe en todo momento</li>
                                            <li>Preparar equipo de vía aérea avanzada pero NO usar a menos que sea absolutamente necesario</li>
                                            <li>Traslado CODE 3 a hospital con capacidad pediátrica</li>
                                            <li>Notificar al hospital para que tengan equipo listo</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 3: Convulsión febril</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 2 años que presentó una convulsión generalizada de aproximadamente 3 minutos de duración. 
                                        Los padres reportan que había tenido fiebre desde la mañana. Al llegar, el niño está postictal, 
                                        somnoliento pero responde a estímulos.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación postictal:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Somnoliento pero despierta con estímulos</li>
                                            <li><strong>Trabajo respiratorio:</strong> Frecuencia y calidad normales</li>
                                            <li><strong>Circulación cutánea:</strong> Rubicundo por fiebre, relleno capilar normal</li>
                                            <li>FC: 130/min</li>
                                            <li>FR: 28/min</li>
                                            <li>Temperatura: 39.5°C</li>
                                            <li>SpO₂: 97%</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar vía aérea permeable</li>
                                            <li>Posición de recuperación si está inconsciente</li>
                                            <li>Medidas de enfriamiento: retirar ropa excesiva, ambiente fresco</li>
                                            <li>Oxígeno si SpO₂ &lt;94%</li>
                                            <li>Obtener historia detallada de la convulsión</li>
                                            <li>Monitorización para detectar nuevas convulsiones</li>
                                            <li>Traslado para evaluación médica completa</li>
                                            <li>Educación a padres sobre convulsiones febriles</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 4: Lactante con signos de shock</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Lactante de 6 meses con historia de vómitos y diarrea por 2 días. Los padres reportan que 
                                        ha estado "muy decaído" y no ha querido comer. Al evaluarlo, está letárgico y difícil de despertar.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Letárgico, hipotónico, respuesta disminuida</li>
                                            <li><strong>Trabajo respiratorio:</strong> Taquipnea, respiración superficial</li>
                                            <li><strong>Circulación cutánea:</strong> Pálido, moteado, relleno capilar 4 seg</li>
                                            <li>FC: 180/min (taquicardia significativa)</li>
                                            <li>FR: 45/min</li>
                                            <li>PA: 65/40 mmHg (hipotensión - signo tardío)</li>
                                            <li>Fontanela anterior hundida</li>
                                            <li>Mucosas secas</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-yellow-700">⚠️ Signos de alarma:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-yellow-700">
                                            <li>Hipotensión en pediatría = shock descompensado</li>
                                            <li>Cambio en el nivel de conciencia</li>
                                            <li>Relleno capilar prolongado</li>
                                            <li>Taquicardia extrema</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo urgente:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Clasificación: Shock descompensado - emergencia crítica</li>
                                            <li>Acceso vascular inmediato (IV/IO)</li>
                                            <li>Bolo de solución salina normal 20 ml/kg rápido</li>
                                            <li>Reevaluar respuesta después del bolo</li>
                                            <li>Repetir bolos según respuesta (hasta 60 ml/kg total)</li>
                                            <li>Oxígeno de alto flujo</li>
                                            <li>Control de temperatura</li>
                                            <li>Traslado CODE 3 a centro con UCIP</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 5: Obstrucción de vía aérea en preescolar</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 3 años que súbitamente desarrolló dificultad respiratoria mientras comía palomitas. 
                                        La madre refiere que empezó a toser violentamente y luego se puso "azul". 
                                        Al llegar, el niño está consciente pero con estridor y cianosis.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Ansioso, agitado, en evidente distress</li>
                                            <li><strong>Trabajo respiratorio:</strong> Estridor inspiratorio marcado, retracciones</li>
                                            <li><strong>Circulación cutánea:</strong> Cianosis central y perioral</li>
                                            <li>Tos débil e inefectiva</li>
                                            <li>No puede hablar claramente</li>
                                            <li>SpO₂: 78%</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo de obstrucción severa:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Reconocer obstrucción de vía aérea por cuerpo extraño</li>
                                            <li>Si está consciente y puede toser: animar a toser</li>
                                            <li>Si no puede toser efectivamente: compresiones abdominales (Heimlich)</li>
                                            <li>Posicionar al niño de pie o sentado, inclinar hacia adelante</li>
                                            <li>5 compresiones abdominales hacia arriba y adentro</li>
                                            <li>Verificar boca para objetos visibles (NO barrido a ciegas)</li>
                                            <li>Continuar hasta desobstracción o pérdida de conciencia</li>
                                            <li>Si pierde conciencia: RCP con verificación de cavidad oral antes de ventilaciones</li>
                                            <li>Transporte inmediato durante maniobras</li>
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
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="pediatric-emergencies" 
                            titulo="Foro de Discusión - Pediatric Emergencies"
                        />

                        

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Capítulo 32: Emergencias Pediátricas. Jones & Bartlett Learning.</li>
                                    <li>American Heart Association. (2020). <em>Pediatric Advanced Life Support (PALS)</em>.</li>
                                    <li>NAEMT. (2020). <em>Emergency Medical Services for Children (EMSC)</em>.</li>
                                    <li>American Academy of Pediatrics. (2019). <em>Pediatric Education for Prehospital Professionals (PEPP)</em> (4ª edición).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea especializados en pediatría</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.aap.org/en-us/advocacy-and-policy/aap-health-initiatives/7-great-achievements/Pages/Emergency-Medical-Services-for-Children.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AAP - Emergency Medical Services for Children</a></li>
                                    <li><a href="https://www.ems.gov/pediatrics.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NHTSA - EMS for Children</a></li>
                                    <li><a href="https://www.emsc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMSC National Resource Center</a></li>
                                    <li><a href="https://www.pepp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PEPP - Pediatric Education for Prehospital Professionals</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Herramientas de referencia rápida</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Cintas de medición pediátricas (Broselow Tape)</li>
                                    <li>Calculadoras de dosis pediátricas</li>
                                    <li>Tarjetas de referencia de signos vitales por edad</li>
                                    <li>Algoritmos de manejo del TEP (Triángulo de Evaluación Pediátrica)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>PediCalc - Calculadora de dosis pediátricas</li>
                                    <li>PALS Guidelines - Algoritmos de PALS</li>
                                    <li>Pediatric Emergency Medicine - Referencia rápida</li>
                                    <li>EMSC Mobile - Recursos de emergencias pediátricas</li>
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

