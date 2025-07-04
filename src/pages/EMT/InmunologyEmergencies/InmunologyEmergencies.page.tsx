import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./InmunologyEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdCheckCircle, MdWarning, MdOutlineLocalHospital} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsExclamationTriangle} from "react-icons/bs";
import {PiChalkboardTeacher, PiSyringeFill} from "react-icons/pi";
import {FaBacteria, FaExclamationTriangle, FaHeartbeat, FaLungsVirus, FaFirstAid, FaAllergies} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye, FiClock} from "react-icons/fi";
import {TbEmergencyBed} from "react-icons/tb";
import {GiMedicines} from "react-icons/gi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function InmunologyEmergencies(){
    const [activeTab, setActiveTab] = useState<'general' | 'physiology' | 'management' | 'cases'>('general');

    return(
        <SEOWrapper
            title="Emergencias Inmunológicas EMT | Anafilaxia, Reacciones Alérgicas y Manejo Prehospitalario"
            description="Guía completa sobre emergencias inmunológicas para Técnicos en Atención Médica Prehospitalaria: anafilaxia, reacciones alérgicas, uso de epinefrina, signos y síntomas críticos. Casos clínicos y protocolos de actuación."
            keywords="emergencias inmunológicas, anafilaxia, reacciones alérgicas, epinefrina, EpiPen, urticaria, angioedema, shock anafiláctico, alérgenos, histamina, broncoespasmo, estridor, EMT, paramédicos"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT75M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaBacteria className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Inmunológicas</h1>
                        <p className="text-sm italic mb-4">Basado en AAOS 11ª Edición - Atención Médica Prehospitalaria</p>
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
                            to={`${AllRoutes.INMUNO_EMERGENCY}/exam`}
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
                        <a href="https://drive.google.com/file/d/1dAOAb1_lf5dCRanA_eszIrQASSC11Krs/view?usp=drive_link"
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
                                onClick={() => setActiveTab('general')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'general' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Generalidades
                            </button>
                            <button
                                onClick={() => setActiveTab('physiology')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'physiology' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Fisiopatología y Anatomía
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo Prehospitalario
                            </button>
                            <button
                                onClick={() => setActiveTab('cases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'cases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Casos Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'general' && (
                            <div className="space-y-8">
                                {/* Importancia crítica */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">¡Emergencia Potencialmente Mortal!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        La anafilaxia es una <strong>reacción alérgica sistémica grave</strong> que puede 
                                        causar la muerte en cuestión de minutos. El reconocimiento inmediato y la 
                                        administración de <span className="text-red-600 font-bold">epinefrina</span> pueden salvar vidas.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FiClock className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">1-15 min</p>
                                            <p className="text-sm">Inicio de síntomas</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">15-30 min</p>
                                            <p className="text-sm">Deterioro rápido</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <TbEmergencyBed className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                            <p className="font-bold text-red-700">Sin tratamiento</p>
                                            <p className="text-sm">Paro cardiorrespiratorio</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Definición y conceptos básicos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaBacteria className="w-6 h-6 mr-2 text-orange-500"/>
                                        ¿Qué es una emergencia inmunológica?
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-4">
                                                <h3 className="font-bold text-blue-700 mb-3">Sistema Inmunológico Normal</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <BsShield className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Protege contra patógenos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <BsShield className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Reconoce sustancias extrañas</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <BsShield className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Respuesta proporcional</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                                <h3 className="font-bold text-red-700 mb-3">Reacción Alérgica</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaAllergies className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Respuesta exagerada</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaAllergies className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Contra sustancias inofensivas</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaAllergies className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Liberación masiva de histamina</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className="text-center">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Allergic_reaction_es.svg/400px-Allergic_reaction_es.svg.png"
                                                    alt="Proceso de reacción alérgica"
                                                    className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                                                />
                                                <p className="text-sm text-gray-600 italic">Proceso de reacción alérgica</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos y síntomas críticos */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos y Síntomas de Anafilaxia - Reconocimiento Inmediato</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                                                <FaLungsVirus className="w-4 h-4 mr-2"/>
                                                Respiratorio
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Dificultad respiratoria</li>
                                                <li>• Sibilancias</li>
                                                <li>• Estridor (¡CRÍTICO!)</li>
                                                <li>• Tos persistente</li>
                                                <li>• Sensación de ahogo</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold text-blue-700 mb-2 flex items-center">
                                                <FaHeartbeat className="w-4 h-4 mr-2"/>
                                                Cardiovascular
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Hipotensión severa</li>
                                                <li>• Taquicardia</li>
                                                <li>• Pulso débil</li>
                                                <li>• Palidez, cianosis</li>
                                                <li>• Shock</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                                                <FiUser className="w-4 h-4 mr-2"/>
                                                Cutáneo
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Urticaria generalizada</li>
                                                <li>• Angioedema</li>
                                                <li>• Prurito intenso</li>
                                                <li>• Enrojecimiento</li>
                                                <li>• Hinchazón facial</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-semibold text-purple-700 mb-2 flex items-center">
                                                <FiEye className="w-4 h-4 mr-2"/>
                                                Neurológico
                                            </h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Ansiedad extrema</li>
                                                <li>• Sensación de muerte</li>
                                                <li>• Confusión</li>
                                                <li>• Disminución de conciencia</li>
                                                <li>• Convulsiones</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Alérgenos más comunes */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Alérgenos más comunes en emergencias</h2>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                            <h3 className="font-bold text-orange-700 mb-3">🍤 Alimentos</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                                    <span>Mariscos (camarones, cangrejos)</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                                    <span>Nueces y maní</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                                    <span>Huevos, leche</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                                    <span>Frutas (fresas, kiwi)</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <h3 className="font-bold text-red-700 mb-3">💊 Medicamentos</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                                    <span>Penicilina y antibióticos</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                                    <span>Aspirina y AINEs</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                                    <span>Medios de contraste</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                                    <span>Anestésicos locales</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                            <h3 className="font-bold text-green-700 mb-3">🐝 Otros</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span>Picaduras de insectos</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span>Látex</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span>Ejercicio (anafilaxia inducida)</span>
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                                    <span>Frío extremo</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-blue-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-blue-800">Puntos Clave para Recordar</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Hacer SIEMPRE:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Preguntar sobre alergias conocidas</li>
                                                <li>Buscar EpiPen o medicación del paciente</li>
                                                <li>Evaluar ABC inmediatamente</li>
                                                <li>Documentar hora de inicio de síntomas</li>
                                                <li>Transportar SIEMPRE al hospital</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                NUNCA hacer:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Subestimar la gravedad</li>
                                                <li>Dar antihistamínicos como único tratamiento</li>
                                                <li>Dejar al paciente solo</li>
                                                <li>Retrasar la epinefrina si está indicada</li>
                                                <li>Asumir que "ya pasó lo peor"</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'physiology' && (
                            <div className="space-y-8">
                                {/* Fisiopatología de la anafilaxia */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FaBacteria className="w-6 h-6 mr-2 text-orange-500"/>
                                        Fisiopatología de la Anafilaxia
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Mecanismo de Reacción</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                                        <div>
                                                            <h4 className="font-semibold">Sensibilización Inicial</h4>
                                                            <p className="text-sm text-gray-600">Primera exposición al alérgeno. El sistema inmunológico produce anticuerpos IgE específicos.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                                        <div>
                                                            <h4 className="font-semibold">Activación de Mastocitos</h4>
                                                            <p className="text-sm text-gray-600">Los anticuerpos IgE se unen a mastocitos y basófilos, preparándolos para futuras exposiciones.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                                                        <div>
                                                            <h4 className="font-semibold">Degranulación Masiva</h4>
                                                            <p className="text-sm text-gray-600">Nueva exposición causa liberación súbita de mediadores inflamatorios.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center">
                                            <div className="text-center">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Degranulation_of_mast_cell.png/400px-Degranulation_of_mast_cell.png"
                                                    alt="Degranulación de mastocitos"
                                                    className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                                                />
                                                <p className="text-sm text-gray-600 italic">Liberación de mediadores inflamatorios</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mediadores químicos */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                        <GiMedicines className="w-5 h-5 mr-2"/>
                                        Mediadores Químicos y sus Efectos
                                    </h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-red-700 mb-2">Histamina</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Vasodilatación</li>
                                                <li>• Aumento permeabilidad vascular</li>
                                                <li>• Broncoconstricción</li>
                                                <li>• Prurito y urticaria</li>
                                                <li>• Secreción de moco</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-orange-700 mb-2">Leucotrienos</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Broncoconstricción severa</li>
                                                <li>• Vasodilatación</li>
                                                <li>• Aumento permeabilidad</li>
                                                <li>• Secreción mucosa</li>
                                                <li>• Efectos prolongados</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg shadow-sm">
                                            <h4 className="font-bold text-blue-700 mb-2">Prostaglandinas</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Broncoconstricción</li>
                                                <li>• Vasodilatación</li>
                                                <li>• Dolor</li>
                                                <li>• Inflamación</li>
                                                <li>• Fiebre</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Efectos sistémicos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Efectos Sistémicos de la Anafilaxia</h2>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                                <h3 className="font-bold text-red-700 mb-3 flex items-center">
                                                    <FaLungsVirus className="w-5 h-5 mr-2"/>
                                                    Sistema Respiratorio
                                                </h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-red-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Broncoconstricción:</strong> Cierre de vías aéreas pequeñas</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-red-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Edema laríngeo:</strong> Obstrucción de vía aérea superior</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-red-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Hipersecreción:</strong> Moco y secreciones abundantes</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-red-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Resultado:</strong> Hipoxia severa, cianosis</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                <h3 className="font-bold text-blue-700 mb-3 flex items-center">
                                                    <FaHeartbeat className="w-5 h-5 mr-2"/>
                                                    Sistema Cardiovascular
                                                </h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-blue-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Vasodilatación:</strong> Pérdida del tono vascular</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-blue-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Pérdida de líquidos:</strong> Paso al espacio intersticial</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-blue-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Disminución precarga:</strong> Retorno venoso reducido</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-blue-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Resultado:</strong> Shock distributivo</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                <h3 className="font-bold text-green-700 mb-3 flex items-center">
                                                    <FiUser className="w-5 h-5 mr-2"/>
                                                    Sistema Cutáneo
                                                </h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-green-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Vasodilatación:</strong> Enrojecimiento, calor</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-green-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Aumento permeabilidad:</strong> Urticaria, angioedema</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-green-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Estimulación nerviosa:</strong> Prurito intenso</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                                <h3 className="font-bold text-purple-700 mb-3 flex items-center">
                                                    <FiEye className="w-5 h-5 mr-2"/>
                                                    Sistema Nervioso
                                                </h3>
                                                <div className="space-y-2">
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-purple-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Hipoxia cerebral:</strong> Confusión, agitación</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-purple-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Hipotensión:</strong> Mareo, síncope</span>
                                                    </div>
                                                    <div className="flex items-start space-x-2">
                                                        <span className="text-purple-600 font-bold">•</span>
                                                        <span className="text-sm"><strong>Liberación catecolaminas:</strong> Ansiedad, pánico</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Progresión temporal */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-700 mb-4">Progresión Temporal de la Anafilaxia</h3>
                                    <div className="space-y-4">
                                        <div className="grid md:grid-cols-4 gap-4">
                                            <div className="bg-yellow-100 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-yellow-700 mb-2">1-5 min</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Fase inicial:</strong> Prurito, urticaria localizada, sensación extraña
                                                </div>
                                            </div>
                                            <div className="bg-orange-100 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-orange-700 mb-2">5-15 min</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Desarrollo:</strong> Urticaria generalizada, dificultad respiratoria leve
                                                </div>
                                            </div>
                                            <div className="bg-red-100 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-red-700 mb-2">15-30 min</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Crítica:</strong> Broncoespasmo, hipotensión, edema laríngeo
                                                </div>
                                            </div>
                                            <div className="bg-red-200 p-4 rounded-lg text-center">
                                                <div className="text-2xl font-bold text-red-800 mb-2">30+ min</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Colapso:</strong> Shock, paro cardiorrespiratorio
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <p className="text-red-700 font-semibold text-center">
                                                ⚠️ La progresión puede ser MUY rápida: desde síntomas leves hasta shock en minutos
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Factores que influyen en la gravedad */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Factores que Influyen en la Gravedad</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <h3 className="font-bold text-red-700 mb-3">Factores que Empeoran</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Asma preexistente:</strong> Mayor riesgo de broncoespasmo fatal</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Medicamentos:</strong> Betabloqueadores, IECA</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Edad:</strong> Menores de 16 años y mayores de 65</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span><strong>Vía de exposición:</strong> Intravenosa &gt; inhalatoria &gt; oral</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <h3 className="font-bold text-blue-700 mb-3">Factores Protectores</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Tratamiento precoz:</strong> Epinefrina en primeros 30 min</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Posición adecuada:</strong> Decúbito supino con piernas elevadas</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Oxígeno:</strong> Soporte respiratorio temprano</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span><strong>Acceso vascular:</strong> Líquidos de reposición</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-8">
                                {/* Algoritmo de manejo */}
                                <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <FaFirstAid className="w-8 h-8 text-red-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-red-700">Algoritmo de Manejo Prehospitalario</h2>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="grid md:grid-cols-5 gap-4">
                                            <div className="bg-red-100 p-3 rounded-lg text-center">
                                                <div className="text-xl font-bold text-red-700 mb-2">1</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Reconocer</strong><br/>
                                                    Signos y síntomas
                                                </div>
                                            </div>
                                            <div className="bg-orange-100 p-3 rounded-lg text-center">
                                                <div className="text-xl font-bold text-orange-700 mb-2">2</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Evaluar</strong><br/>
                                                    ABC primario
                                                </div>
                                            </div>
                                            <div className="bg-green-100 p-3 rounded-lg text-center">
                                                <div className="text-xl font-bold text-green-700 mb-2">3</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Epinefrina</strong><br/>
                                                    Inmediatamente
                                                </div>
                                            </div>
                                            <div className="bg-blue-100 p-3 rounded-lg text-center">
                                                <div className="text-xl font-bold text-blue-700 mb-2">4</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Soporte</strong><br/>
                                                    O₂, IV, monitoreo
                                                </div>
                                            </div>
                                            <div className="bg-purple-100 p-3 rounded-lg text-center">
                                                <div className="text-xl font-bold text-purple-700 mb-2">5</div>
                                                <div className="text-sm text-gray-700">
                                                    <strong>Transportar</strong><br/>
                                                    Siempre al hospital
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación inicial */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiEye className="w-6 h-6 mr-2 text-orange-500"/>
                                        Evaluación Inicial Sistemática
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <h3 className="font-bold text-blue-700 mb-3 flex items-center">
                                                <FiUser className="w-5 h-5 mr-2"/>
                                                Evaluación Primaria (ABC)
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-semibold text-red-700 mb-2">A - Vía Aérea</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• ¿Puede hablar normalmente?</li>
                                                        <li>• ¿Hay estridor o ronquera?</li>
                                                        <li>• ¿Edema de labios, lengua, cara?</li>
                                                        <li>• ¿Salivación excesiva?</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-semibold text-green-700 mb-2">B - Respiración</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Frecuencia y calidad respiratoria</li>
                                                        <li>• Sibilancias, tiraje, retracciones</li>
                                                        <li>• Saturación de oxígeno</li>
                                                        <li>• Uso de músculos accesorios</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-semibold text-blue-700 mb-2">C - Circulación</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Pulso: frecuencia, calidad</li>
                                                        <li>• Presión arterial</li>
                                                        <li>• Perfusión: color, llenado capilar</li>
                                                        <li>• Nivel de conciencia</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                            <h3 className="font-bold text-orange-700 mb-3 flex items-center">
                                                <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                                Historia Clínica Rápida
                                            </h3>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-semibold text-orange-700 mb-2">SAMPLE</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li><strong>S:</strong> Síntomas (¿cuándo iniciaron?)</li>
                                                        <li><strong>A:</strong> Alergias conocidas</li>
                                                        <li><strong>M:</strong> Medicamentos actuales</li>
                                                        <li><strong>P:</strong> Problemas médicos previos</li>
                                                        <li><strong>L:</strong> Última comida</li>
                                                        <li><strong>E:</strong> Eventos previos a síntomas</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-yellow-50 p-4 rounded-lg">
                                                    <h4 className="font-semibold text-yellow-700 mb-2">Preguntas Clave</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• ¿Qué comió/tomó/se aplicó?</li>
                                                        <li>• ¿Cuándo fue la exposición?</li>
                                                        <li>• ¿Tiene EpiPen/medicamentos?</li>
                                                        <li>• ¿Ha tenido reacciones antes?</li>
                                                        <li>• ¿Mejoran o empeoran los síntomas?</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tratamiento con epinefrina */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                        <PiSyringeFill className="w-6 h-6 mr-2"/>
                                        Epinefrina: Medicamento Salvavidas
                                    </h3>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-3">Mecanismo de Acción</h4>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded-lg">
                                                    <strong>Alfa-1 agonista:</strong> Vasoconstricción → mejora hipotensión
                                                </div>
                                                <div className="bg-white p-3 rounded-lg">
                                                    <strong>Beta-1 agonista:</strong> Cronotropismo e inotropismo positivo
                                                </div>
                                                <div className="bg-white p-3 rounded-lg">
                                                    <strong>Beta-2 agonista:</strong> Broncodilatación → mejora respiración
                                                </div>
                                                <div className="bg-white p-3 rounded-lg">
                                                    <strong>Estabiliza mastocitos:</strong> Reduce liberación de histamina
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-3">Dosificación y Administración</h4>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white border rounded-lg">
                                                    <thead className="bg-gray-100">
                                                        <tr>
                                                            <th className="py-2 px-3 border text-left">Edad</th>
                                                            <th className="py-2 px-3 border text-center">Dosis</th>
                                                            <th className="py-2 px-3 border text-center">Vía</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className="py-2 px-3 border font-medium">Adultos</td>
                                                            <td className="py-2 px-3 border text-center">0.3-0.5 mg</td>
                                                            <td className="py-2 px-3 border text-center">IM</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-2 px-3 border font-medium">Niños</td>
                                                            <td className="py-2 px-3 border text-center">0.01 mg/kg</td>
                                                            <td className="py-2 px-3 border text-center">IM</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-2 px-3 border font-medium">Repetir si</td>
                                                            <td className="py-2 px-3 border text-center">5-15 min</td>
                                                            <td className="py-2 px-3 border text-center">Sin mejoría</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="mt-4 bg-green-100 p-3 rounded-lg">
                                                <p className="text-sm text-green-800">
                                                    <strong>Sitio de aplicación:</strong> Cara anterolateral del muslo (vasto lateral)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Autoinyectores */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Autoinyectores de Epinefrina</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                            <h3 className="font-bold text-blue-700 mb-3">Uso del EpiPen</h3>
                                            <div className="space-y-3">
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                                                    <div>
                                                        <h4 className="font-semibold">Remover el seguro</h4>
                                                        <p className="text-sm text-gray-600">Quitar la tapa de seguridad azul</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                                                    <div>
                                                        <h4 className="font-semibold">Formar puño</h4>
                                                        <p className="text-sm text-gray-600">Sostener firmemente con punta naranja hacia abajo</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                                                    <div>
                                                        <h4 className="font-semibold">Aplicar en muslo</h4>
                                                        <p className="text-sm text-gray-600">Presionar firmemente hasta escuchar "click"</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start space-x-3">
                                                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                                                    <div>
                                                        <h4 className="font-semibold">Mantener 10 segundos</h4>
                                                        <p className="text-sm text-gray-600">Mantener presionado para completar inyección</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                            <h3 className="font-bold text-orange-700 mb-3">Consideraciones Importantes</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <BsExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Puede aplicarse a través de la ropa</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BsExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>NUNCA en nalgas o venas</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BsExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Masajear área por 10 segundos después</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BsExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Llevar el autoinyector usado al hospital</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <BsExclamationTriangle className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                    <span>Verificar fecha de vencimiento</span>
                                                </li>
                                            </ul>
                                            <div className="mt-4 bg-red-50 p-3 rounded-lg">
                                                <p className="text-sm text-red-700 font-semibold">
                                                    ⚠️ Si no hay mejoría en 5-15 minutos, administrar segunda dosis
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Manejo de complicaciones */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo de Complicaciones</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <h3 className="font-bold text-red-700 mb-3 flex items-center">
                                                <MdOutlineLocalHospital className="w-5 h-5 mr-2"/>
                                                Shock Anafiláctico
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded-lg">
                                                    <h4 className="font-semibold text-red-700 mb-2">Signos</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Hipotensión severa (PAS &lt; 90 mmHg)</li>
                                                        <li>• Taquicardia o bradicardia</li>
                                                        <li>• Alteración del estado mental</li>
                                                        <li>• Extremidades frías y húmedas</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded-lg">
                                                    <h4 className="font-semibold text-red-700 mb-2">Manejo</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Epinefrina IM inmediatamente</li>
                                                        <li>• Posición supina con piernas elevadas</li>
                                                        <li>• Líquidos IV cristaloides</li>
                                                        <li>• Oxígeno de alto flujo</li>
                                                        <li>• Transporte urgente</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                            <h3 className="font-bold text-red-700 mb-3 flex items-center">
                                                <FaLungsVirus className="w-5 h-5 mr-2"/>
                                                Compromiso Respiratorio
                                            </h3>
                                            <div className="space-y-3">
                                                <div className="bg-white p-3 rounded-lg">
                                                    <h4 className="font-semibold text-red-700 mb-2">Signos</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Estridor (edema laríngeo)</li>
                                                        <li>• Sibilancias (broncoespasmo)</li>
                                                        <li>• Cianosis, SpO₂ &lt; 90%</li>
                                                        <li>• Incapacidad para hablar</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-3 rounded-lg">
                                                    <h4 className="font-semibold text-red-700 mb-2">Manejo</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Epinefrina IM inmediatamente</li>
                                                        <li>• Posición de confort (sentado)</li>
                                                        <li>• Oxígeno de alto flujo</li>
                                                        <li>• Considerar ventilación asistida</li>
                                                        <li>• Preparar para soporte avanzado</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Medicamentos de segunda línea */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-700 mb-4">Medicamentos de Segunda Línea (Solo si protocolos lo permiten)</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border rounded-lg">
                                            <thead className="bg-gray-100">
                                                <tr>
                                                    <th className="py-3 px-4 border text-left">Medicamento</th>
                                                    <th className="py-3 px-4 border text-center">Indicación</th>
                                                    <th className="py-3 px-4 border text-center">Dosis</th>
                                                    <th className="py-3 px-4 border text-center">Notas</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-3 px-4 border font-medium">Difenhidramina</td>
                                                    <td className="py-3 px-4 border text-center">Urticaria, prurito</td>
                                                    <td className="py-3 px-4 border text-center">25-50 mg IV/IM</td>
                                                    <td className="py-3 px-4 border text-center">NUNCA como único tratamiento</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border font-medium">Hidrocortisona</td>
                                                    <td className="py-3 px-4 border text-center">Prevención recaída</td>
                                                    <td className="py-3 px-4 border text-center">125-250 mg IV</td>
                                                    <td className="py-3 px-4 border text-center">Efecto tardío (4-6 hrs)</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 border font-medium">Salbutamol</td>
                                                    <td className="py-3 px-4 border text-center">Broncoespasmo</td>
                                                    <td className="py-3 px-4 border text-center">2.5-5 mg nebulizado</td>
                                                    <td className="py-3 px-4 border text-center">Adjunto, NO sustituto</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="mt-4 bg-yellow-50 p-3 rounded-lg">
                                        <p className="text-sm text-yellow-800 font-semibold">
                                            ⚠️ Recordar: La EPINEFRINA es el único medicamento que puede detener la anafilaxia
                                        </p>
                                    </div>
                                </div>

                                {/* Monitorización y transporte */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Monitorización y Transporte</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                            <h3 className="font-bold text-green-700 mb-3">Monitorización Continua</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Signos vitales cada 5 minutos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Saturación de oxígeno continua</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Nivel de conciencia</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Calidad de la voz</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Coloración de piel y mucosas</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                            <h3 className="font-bold text-orange-700 mb-3">Criterios de Transporte</h3>
                                            <div className="space-y-4">
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-semibold text-red-700 mb-2">TRANSPORTE URGENTE</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Compromiso respiratorio</li>
                                                        <li>• Hipotensión</li>
                                                        <li>• Alteración del estado mental</li>
                                                        <li>• Empeoramiento de síntomas</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-semibold text-green-700 mb-2">SIEMPRE TRANSPORTAR</h4>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Incluso si mejora con epinefrina</li>
                                                        <li>• Posible reacción bifásica</li>
                                                        <li>• Necesita observación médica</li>
                                                        <li>• Puede requerir más medicamentos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cases' && (
                            <div className="space-y-8">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                                        <h2 className="text-2xl font-bold text-blue-700">Casos Clínicos para Aprendizaje</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Analiza estos casos reales adaptados para practicar tu toma de decisiones. 
                                        Cada caso incluye presentación clínica, evaluación paso a paso y puntos de aprendizaje.
                                    </p>
                                </div>

                                {/* Caso 1: Anafilaxia alimentaria */}
                                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                                    <div className="bg-red-50 p-6 rounded-t-lg border-b border-red-200">
                                        <h3 className="text-2xl font-bold text-red-700 mb-2 flex items-center">
                                            <FaAllergies className="w-6 h-6 mr-2"/>
                                            Caso 1: Anafilaxia por Mariscos
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-800 mb-2">Presentación del Caso</h4>
                                            <p className="text-gray-700 italic">
                                                Mujer de 24 años, sin antecedentes médicos conocidos, cenando en un restaurante de mariscos. 
                                                Aproximadamente 10 minutos después de consumir camarones, comienza con prurito intenso en 
                                                palmas y plantas. Rápidamente desarrolla urticaria generalizada, dificultad respiratoria 
                                                y edema facial. Sus acompañantes llaman al 911.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-blue-700 mb-3">A tu llegada encuentras:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-red-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-red-700 mb-2">Apariencia General</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Paciente consciente, muy ansiosa</li>
                                                            <li>• Posición de trípode</li>
                                                            <li>• Edema facial evidente</li>
                                                            <li>• Urticaria en brazos y tronco</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-orange-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-orange-700 mb-2">Signos Vitales</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• FC: 125/min, regular</li>
                                                            <li>• FR: 28/min, laboriosa</li>
                                                            <li>• TA: 85/50 mmHg</li>
                                                            <li>• SpO₂: 89% aire ambiente</li>
                                                            <li>• Temperatura: 36.8°C</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-700 mb-3">Evaluación Sistemática:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-blue-700 mb-2">A - Vía Aérea</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Habla con frases cortas</li>
                                                            <li>• Voz ligeramente ronca</li>
                                                            <li>• Edema de labios y lengua</li>
                                                            <li>• No estridor audible</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-green-700 mb-2">B - Respiración</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Taquipnea marcada</li>
                                                            <li>• Sibilancias bilaterales</li>
                                                            <li>• Uso de músculos accesorios</li>
                                                            <li>• Tiraje intercostal leve</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-purple-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-purple-700 mb-2">C - Circulación</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Pulso rápido y débil</li>
                                                            <li>• Hipotensión significativa</li>
                                                            <li>• Piel caliente y húmeda</li>
                                                            <li>• Llenado capilar: 3 segundos</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-yellow-800 mb-2">Tu Manejo (Paso a Paso)</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-green-700 mb-2">Acciones Inmediatas:</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Reconocer anafilaxia</li>
                                                        <li>Epinefrina 0.3 mg IM en muslo</li>
                                                        <li>Oxígeno de alto flujo</li>
                                                        <li>Posición supina con piernas elevadas</li>
                                                        <li>Establecer acceso IV</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-blue-700 mb-2">Seguimiento:</h5>
                                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Monitorizar signos vitales</li>
                                                        <li>Preparar segunda dosis epinefrina</li>
                                                        <li>Líquidos IV (cristaloides)</li>
                                                        <li>Transporte urgente</li>
                                                        <li>Notificar al hospital</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-800 mb-2">Evolución del Caso:</h4>
                                            <p className="text-sm text-gray-700">
                                                <strong>A los 5 minutos:</strong> Mejoría notable de la disnea, SpO₂ 94%, TA 100/60 mmHg. 
                                                Urticaria persiste pero menos intensa. Paciente más tranquila.
                                            </p>
                                            <p className="text-sm text-gray-700 mt-2">
                                                <strong>Durante transporte:</strong> Mantiene mejoría, signos vitales estables. 
                                                Llega al hospital en condiciones estables para observación.
                                            </p>
                                        </div>

                                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Puntos de Aprendizaje:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Los mariscos son una de las causas más comunes de anafilaxia alimentaria</li>
                                                <li>• El inicio rápido de síntomas sistémicos requiere acción inmediata</li>
                                                <li>• La combinación de síntomas cutáneos + respiratorios + cardiovasculares = anafilaxia</li>
                                                <li>• La epinefrina es el tratamiento de primera línea y debe administrarse sin demora</li>
                                                <li>• La posición supina ayuda a mejorar el retorno venoso en el shock</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 2: Anafilaxia por picadura */}
                                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                                    <div className="bg-orange-50 p-6 rounded-t-lg border-b border-orange-200">
                                        <h3 className="text-2xl font-bold text-orange-700 mb-2 flex items-center">
                                            <FaBacteria className="w-6 h-6 mr-2"/>
                                            Caso 2: Anafilaxia por Picadura de Abeja
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-800 mb-2">Presentación del Caso</h4>
                                            <p className="text-gray-700 italic">
                                                Hombre de 45 años, jardinero, picado por una abeja en el brazo izquierdo mientras 
                                                trabajaba. Refiere que hace años tuvo una reacción "fuerte" a una picadura, pero 
                                                no recuerda detalles. Aproximadamente 3 minutos después de la picadura, desarrolla 
                                                rápidamente urticaria generalizada, dificultad respiratoria severa y mareo intenso.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-orange-700 mb-3">Evaluación Inicial:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-red-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-red-700 mb-2">Signos Críticos</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• <strong>Estridor inspiratorio audible</strong></li>
                                                            <li>• Edema severo de lengua y labios</li>
                                                            <li>• Cianosis perioral</li>
                                                            <li>• Extrema ansiedad</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-orange-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-orange-700 mb-2">Signos Vitales</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• FC: 140/min, irregular</li>
                                                            <li>• FR: 35/min, superficial</li>
                                                            <li>• TA: 70/40 mmHg</li>
                                                            <li>• SpO₂: 82% aire ambiente</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-700 mb-3">¡SITUACIÓN CRÍTICA!</h4>
                                                <div className="bg-red-100 p-4 rounded-lg">
                                                    <h5 className="font-semibold text-red-800 mb-2">Amenaza Inmediata a la Vida</h5>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Obstrucción de vía aérea superior (estridor)</li>
                                                        <li>• Shock anafiláctico severo</li>
                                                        <li>• Hipoxia significativa</li>
                                                        <li>• Riesgo de paro cardiorrespiratorio</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg border-2 border-red-200 mt-4">
                                                    <h5 className="font-semibold text-red-800 mb-2">Acción Inmediata:</h5>
                                                    <ol className="text-sm space-y-1 text-gray-700">
                                                        <li><strong>1. Epinefrina 0.5 mg IM INMEDIATAMENTE</strong></li>
                                                        <li><strong>2. Oxígeno de alto flujo</strong></li>
                                                        <li><strong>3. Posición de confort (sentado)</strong></li>
                                                        <li><strong>4. Acceso IV urgente</strong></li>
                                                        <li><strong>5. Preparar segunda dosis epinefrina</strong></li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-yellow-800 mb-2">Evolución - Primeros 10 minutos:</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-green-700 mb-2">Mejoría Gradual:</h5>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Estridor disminuye notablemente</li>
                                                        <li>• SpO₂ mejora a 91%</li>
                                                        <li>• TA sube a 95/55 mmHg</li>
                                                        <li>• Paciente menos ansioso</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-blue-700 mb-2">Manejo Continuo:</h5>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Monitorización continua</li>
                                                        <li>• Líquidos IV</li>
                                                        <li>• Transporte urgente</li>
                                                        <li>• Comunicación con hospital</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Puntos Clave de este Caso:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• El estridor es un signo de alarma que requiere acción inmediata</li>
                                                <li>• La anafilaxia por picaduras puede ser más severa que la alimentaria</li>
                                                <li>• La historia previa de reacciones aumenta el riesgo</li>
                                                <li>• En casos críticos, no dudar en usar dosis más alta de epinefrina</li>
                                                <li>• La posición puede variar según el compromiso predominante</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 3: Anafilaxia medicamentosa */}
                                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                                    <div className="bg-green-50 p-6 rounded-t-lg border-b border-green-200">
                                        <h3 className="text-2xl font-bold text-green-700 mb-2 flex items-center">
                                            <GiMedicines className="w-6 h-6 mr-2"/>
                                            Caso 3: Anafilaxia Medicamentosa
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-800 mb-2">Presentación del Caso</h4>
                                            <p className="text-gray-700 italic">
                                                Mujer de 65 años con antecedentes de hipertensión arterial, recibió antibiótico 
                                                (amoxicilina) para infección urinaria hace 20 minutos en la consulta médica. 
                                                Mientras esperaba en la sala, desarrolla súbitamente urticaria, disnea y 
                                                alteración del estado mental. El personal médico solicita ambulancia.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-700 mb-3">Hallazgos Clínicos:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-purple-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-purple-700 mb-2">Estado Mental</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Confusión moderada</li>
                                                            <li>• Desorientación temporal</li>
                                                            <li>• Responde a estímulos verbales</li>
                                                            <li>• Agitación psicomotora</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-blue-700 mb-2">Signos Vitales</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• FC: 115/min, regular</li>
                                                            <li>• FR: 24/min</li>
                                                            <li>• TA: 80/45 mmHg</li>
                                                            <li>• SpO₂: 90% aire ambiente</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-orange-700 mb-3">Desafíos Específicos:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-yellow-700 mb-2">Complicaciones</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Toma antihipertensivos (IECA)</li>
                                                            <li>• Edad avanzada</li>
                                                            <li>• Alteración del estado mental</li>
                                                            <li>• Dificulta evaluación</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-red-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-red-700 mb-2">Consideraciones</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Los IECA empeoran la anafilaxia</li>
                                                            <li>• Respuesta a epinefrina puede ser menor</li>
                                                            <li>• Mayor riesgo de complicaciones</li>
                                                            <li>• Requiere monitorización estrecha</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Manejo Modificado:</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h5 className="font-semibold text-green-700 mb-2">Tratamiento Inicial:</h5>
                                                    <ol className="text-sm space-y-1 text-gray-700">
                                                        <li>1. Epinefrina 0.3 mg IM</li>
                                                        <li>2. Oxígeno suplementario</li>
                                                        <li>3. Acceso IV inmediato</li>
                                                        <li>4. Líquidos IV agresivos</li>
                                                        <li>5. Monitorización continua</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h5 className="font-semibold text-blue-700 mb-2">Preparación para:</h5>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Segunda dosis epinefrina</li>
                                                        <li>• Posible respuesta limitada</li>
                                                        <li>• Deterioro rápido</li>
                                                        <li>• Soporte avanzado</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-green-800 mb-2">Evolución:</h4>
                                            <p className="text-sm text-gray-700">
                                                <strong>Respuesta parcial:</strong> Mejoría leve de la urticaria y estado mental, 
                                                pero persistencia de hipotensión. Se administra segunda dosis de epinefrina a 
                                                los 10 minutos. Con líquidos IV y epinefrina, logra estabilización para transporte.
                                            </p>
                                        </div>

                                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Lecciones Aprendidas:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Los medicamentos son la segunda causa más común de anafilaxia</li>
                                                <li>• Los IECA pueden empeorar la respuesta anafiláctica</li>
                                                <li>• Los pacientes mayores pueden tener respuesta atenuada</li>
                                                <li>• La alteración del estado mental puede ser el síntoma predominante</li>
                                                <li>• No dudar en usar múltiples dosis de epinefrina</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 4: Anafilaxia pediatrica */}
                                <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                                    <div className="bg-purple-50 p-6 rounded-t-lg border-b border-purple-200">
                                        <h3 className="text-2xl font-bold text-purple-700 mb-2 flex items-center">
                                            <FiUser className="w-6 h-6 mr-2"/>
                                            Caso 4: Anafilaxia Pediátrica
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-gray-800 mb-2">Presentación del Caso</h4>
                                            <p className="text-gray-700 italic">
                                                Niño de 8 años, en una fiesta de cumpleaños, consume una galleta que contenía 
                                                nueces sin que los padres lo supieran. Tiene antecedentes de alergia severa 
                                                a frutos secos. Desarrolla rápidamente urticaria, vómitos y dificultad 
                                                respiratoria. Los padres tienen EpiPen Jr. pero están muy alterados.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-700 mb-3">Particularidades Pediátricas:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-yellow-700 mb-2">Diferencias en Niños</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Síntomas pueden ser más sutiles</li>
                                                            <li>• Deterioro puede ser más rápido</li>
                                                            <li>• Menor reserva fisiológica</li>
                                                            <li>• Comunicación limitada</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-blue-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-blue-700 mb-2">Evaluación</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Llanto inconsolable</li>
                                                            <li>• Urticaria generalizada</li>
                                                            <li>• Vómitos repetidos</li>
                                                            <li>• Sibilancias audibles</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-700 mb-3">Manejo Pediátrico:</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-green-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-green-700 mb-2">Dosis Pediátrica</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Peso: 25 kg</li>
                                                            <li>• Epinefrina: 0.25 mg IM</li>
                                                            <li>• EpiPen Jr: 0.15 mg</li>
                                                            <li>• Repetir si es necesario</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-orange-50 p-4 rounded-lg">
                                                        <h5 className="font-semibold text-orange-700 mb-2">Consideraciones</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Tranquilizar al niño</li>
                                                            <li>• Permitir posición cómoda</li>
                                                            <li>• Involucrar a los padres</li>
                                                            <li>• Monitorizar estrechamente</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Puntos Especiales en Pediatría:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Los niños pueden deteriorarse más rápidamente</li>
                                                <li>• La dosis de epinefrina se calcula por peso (0.01 mg/kg)</li>
                                                <li>• Los EpiPen Jr son para niños &lt; 25 kg</li>
                                                <li>• El apoyo emocional es crucial</li>
                                                <li>• Los padres pueden ser una fuente valiosa de información</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Resumen de casos */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4">Resumen de Conceptos Clave</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-2">Patrones Comunes:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Inicio rápido tras exposición</li>
                                                <li>• Múltiples sistemas afectados</li>
                                                <li>• Progresión puede ser muy rápida</li>
                                                <li>• Respuesta dramática a epinefrina</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-700 mb-2">Factores de Mal Pronóstico:</h4>
                                            <ul className="text-sm space-y-1 text-gray-700">
                                                <li>• Estridor (obstrucción alta)</li>
                                                <li>• Hipotensión severa</li>
                                                <li>• Alteración del estado mental</li>
                                                <li>• Retraso en el tratamiento</li>
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
                                    <li><a href="https://www.ems1.com/allergy-anaphylaxis/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre anafilaxia y alergias</a></li>
                                    <li><a href="https://www.jems.com/patient-care/allergy-anaphylaxis/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de alergias y anafilaxia</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Videos educativos sobre emergencias</a></li>
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

