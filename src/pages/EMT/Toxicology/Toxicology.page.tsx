import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Toxicology.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdCheckCircle, MdOutlineTimer} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaWineBottle, FaExclamationTriangle, FaSkull, FaFirstAid, FaEye} from "react-icons/fa";
import {FiEye} from "react-icons/fi";
import {GiPoisonBottle, GiDeathNote, GiMedicines} from "react-icons/gi";
import {RiVirusLine} from "react-icons/ri";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function Toxicology(){
    const [activeTab, setActiveTab] = useState<'overview' | 'classification' | 'management' | 'antidotes'>('overview');

    return(
        <SEOWrapper
            title="Toxicología EMT | Intoxicaciones y Envenenamientos Prehospitalarios"
            description="Guía completa sobre toxicología prehospitalaria para EMTs: identificación de toxidromes, manejo de intoxicaciones, antídotos específicos y casos clínicos. Aprende a reconocer y tratar emergencias toxicológicas."
            keywords="toxicología, intoxicaciones, envenenamientos, EMT, paramédicos, antídotos, naloxona, carbón activado, toxidromes, emergencias toxicológicas, overdosis, manejo prehospitalario"
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
                                <FaWineBottle className="w-24 h-24 mb-1 text-orange-500" />
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Toxicología</h1>
                            <p className="text-sm italic mb-4">Basado en AAOS 11ª Edición - Alumnos Generación 2025 Sábados Rescate 1</p>
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
                            to="/toxicology/exam"
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
                        <a href="https://drive.google.com/file/d/1t313YIiaxBoZCTMtrr-yYnOTQqJacCQh/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                        <a href="https://www.poison.org/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <GiPoisonBottle className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Poison Control</p>
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
                                onClick={() => setActiveTab('classification')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'classification' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Clasificación y Toxidromes
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
                                onClick={() => setActiveTab('antidotes')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'antidotes' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Antídotos y Casos Clínicos
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Prioridad Crítica!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg">
                                        Las intoxicaciones constituyen una <strong>emergencia médica</strong> que requiere 
                                        evaluación y manejo inmediato. El tiempo es crítico para prevenir daño permanente o muerte.
                                    </p>
                                    <div className="mt-4 grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Minutos</p>
                                            <p className="text-sm">Ventana terapéutica</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaSkull className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">Dosis</p>
                                            <p className="text-sm">"La dosis hace el veneno"</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <FaFirstAid className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                                            <p className="font-bold text-green-600">Soporte</p>
                                            <p className="text-sm">ABC + antídoto específico</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Vías de exposición */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiDeathNote className="w-6 h-6 mr-2 text-orange-500"/>
                                        Vías de Exposición - Evaluación RAPID
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">RESPIRATORIA</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Gases, vapores, aerosoles</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Absorción rápida por alvéolos</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                    <span>Evita metabolismo hepático</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-green-700 mb-3 text-center">DIGESTIVA</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Vía más común</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Absorción variable</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                    <span>Metabolismo de primer paso</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">CUTÁNEA</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Absorción lenta pero sostenida</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Organofosforados, solventes</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                                    <span>Descontaminación crítica</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                            <h3 className="text-xl font-bold text-red-700 mb-3 text-center">PARENTERAL</h3>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Inyección, mordedura, picadura</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Absorción directa y rápida</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                    <span>Imposible descontaminación</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Principios de Paracelso */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Principios Fundamentales</h3>
                                    </div>
                                    <blockquote className="text-lg italic text-center text-gray-700 mb-4">
                                        "Sola dosis facit venenum" - "Solo la dosis hace el veneno"
                                        <footer className="text-sm text-gray-500 mt-2">- Paracelso (1493-1541)</footer>
                                    </blockquote>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Factores que determinan la toxicidad:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dosis (cantidad absorbida)</li>
                                                <li>Vía de exposición</li>
                                                <li>Tiempo de exposición</li>
                                                <li>Edad y peso del paciente</li>
                                                <li>Estado de salud previo</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-2">Fases de la intoxicación:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Absorción (entrada al organismo)</li>
                                                <li>Distribución (transporte)</li>
                                                <li>Metabolismo (biotransformación)</li>
                                                <li>Excreción (eliminación)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Evaluación inicial */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsShield className="w-6 h-6 text-blue-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-blue-800">Evaluación Inicial - Protocolo HAZMAT</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Seguridad de la Escena:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluar peligros ambientales</li>
                                                <li>Equipo de protección personal</li>
                                                <li>Ventilación adecuada</li>
                                                <li>Identificar múltiples víctimas</li>
                                                <li>Aislar la fuente si es posible</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                                                <FaEye className="w-4 h-4 mr-2"/>
                                                Evaluación del Paciente:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>ABC + control de vía aérea</li>
                                                <li>Signos vitales completos</li>
                                                <li>Estado neurológico (Glasgow)</li>
                                                <li>Reconocimiento de toxidromes</li>
                                                <li>Historia SAMPLE detallada</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'classification' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiMedicines className="w-6 h-6 mr-2 text-orange-500"/>
                                        Toxidromes - Síndromes Toxicológicos
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        Los toxidromes son constelaciones de signos y síntomas que permiten identificar 
                                        grupos de sustancias tóxicas y orientar el tratamiento específico.
                                    </p>
                                    
                                    <div className="grid gap-6">
                                        {/* Toxidrome Opiáceo */}
                                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-purple-700 mb-4">🔵 Toxidrome Opiáceo</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Tríada Clásica:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Coma/estupor</li>
                                                        <li>Miosis (pupilas puntiformes)</li>
                                                        <li>Depresión respiratoria</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Otros signos:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Bradipnea</li>
                                                        <li>Hipotensión</li>
                                                        <li>Bradicardia</li>
                                                        <li>Hipotermia</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Sustancias:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Morfina, heroína</li>
                                                        <li>Fentanilo, oxicodona</li>
                                                        <li>Tramadol, codeína</li>
                                                        <li>Metadona</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Toxidrome Simpaticomimético */}
                                        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-red-700 mb-4">🔴 Toxidrome Simpaticomimético</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-2">Signos principales:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Taquicardia</li>
                                                        <li>Hipertensión</li>
                                                        <li>Midriasis</li>
                                                        <li>Hipertermia</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-2">Síntomas:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Agitación</li>
                                                        <li>Alucinaciones</li>
                                                        <li>Convulsiones</li>
                                                        <li>Sudoración</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-red-800 mb-2">Sustancias:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Cocaína, anfetaminas</li>
                                                        <li>Metanfetaminas</li>
                                                        <li>MDMA (éxtasis)</li>
                                                        <li>Efedrina, pseudoefedrina</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Toxidrome Anticolinérgico */}
                                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-orange-700 mb-4">🟠 Toxidrome Anticolinérgico</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">Mnemotecnia:</h4>
                                                    <div className="bg-orange-100 p-3 rounded">
                                                        <p className="text-sm font-medium">"Loco como una cabra"</p>
                                                        <p className="text-sm font-medium">"Caliente como un horno"</p>
                                                        <p className="text-sm font-medium">"Rojo como un tomate"</p>
                                                        <p className="text-sm font-medium">"Seco como un hueso"</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">Signos clínicos:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Delirium, agitación</li>
                                                        <li>Hipertermia</li>
                                                        <li>Piel seca y enrojecida</li>
                                                        <li>Midriasis</li>
                                                        <li>Retención urinaria</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-orange-800 mb-2">Sustancias:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Atropina, escopolamina</li>
                                                        <li>Antihistamínicos</li>
                                                        <li>Antipsicóticos</li>
                                                        <li>Plantas (estramonio)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Toxidrome Colinérgico */}
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-green-700 mb-4">🟢 Toxidrome Colinérgico</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-green-800 mb-2">Mnemotecnia SLUDGE:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li><strong>S</strong>alivación</li>
                                                        <li><strong>L</strong>acrimación</li>
                                                        <li><strong>U</strong>rinación</li>
                                                        <li><strong>D</strong>efecación</li>
                                                        <li><strong>G</strong>astrointestinal</li>
                                                        <li><strong>E</strong>mesis</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-green-800 mb-2">Signos muscarínicos:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Miosis</li>
                                                        <li>Bradicardia</li>
                                                        <li>Broncoespasmo</li>
                                                        <li>Hipotensión</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-green-800 mb-2">Sustancias:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Organofosforados</li>
                                                        <li>Carbamatos</li>
                                                        <li>Fisostigmina</li>
                                                        <li>Hongos muscarínicos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Toxidrome Sedante-Hipnótico */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4">🔵 Toxidrome Sedante-Hipnótico</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Signos principales:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Depresión del SNC</li>
                                                        <li>Sedación profunda</li>
                                                        <li>Ataxia</li>
                                                        <li>Confusión</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Complicaciones:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Depresión respiratoria</li>
                                                        <li>Hipotensión</li>
                                                        <li>Hipotermia</li>
                                                        <li>Coma</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-blue-800 mb-2">Sustancias:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Benzodiacepinas</li>
                                                        <li>Barbitúricos</li>
                                                        <li>Alcohol etílico</li>
                                                        <li>Zolpidem, zaleplon</li>
                                                    </ul>
                                                </div>
                                            </div>
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
                                        Manejo Prehospitalario de Intoxicaciones
                                    </h2>
                                    
                                    {/* Algoritmo de manejo */}
                                    <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6 mb-6">
                                        <h3 className="text-xl font-bold text-blue-700 mb-4">🔄 Algoritmo de Manejo</h3>
                                        <div className="grid md:grid-cols-5 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                                                <p className="font-semibold text-red-700">SEGURIDAD</p>
                                                <p className="text-sm">Escena y personal</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                                                <p className="font-semibold text-blue-700">ABC</p>
                                                <p className="text-sm">Soporte vital</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                                                <p className="font-semibold text-yellow-700">IDENTIFICA</p>
                                                <p className="text-sm">Tóxico y dosis</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                                                <p className="font-semibold text-purple-700">DESCONTAMINA</p>
                                                <p className="text-sm">Según vía</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold">5</div>
                                                <p className="font-semibold text-green-700">TRASLADA</p>
                                                <p className="text-sm">Antídoto específico</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Descontaminación por vía */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Descontaminación por Vía de Exposición</h3>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h4 className="font-bold text-blue-700 mb-3">💧 Vía Digestiva (Ingestión)</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-green-100 p-3 rounded">
                                                        <h5 className="font-semibold text-green-800">✅ Carbón Activado</h5>
                                                        <ul className="text-sm text-gray-700 mt-1">
                                                            <li>• Dosis: 1-2 g/kg (máx. 50-100g)</li>
                                                            <li>• Dentro de 1-2 horas post-ingesta</li>
                                                            <li>• Paciente consciente y cooperativo</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-red-100 p-3 rounded">
                                                        <h5 className="font-semibold text-red-800">❌ Contraindicaciones</h5>
                                                        <ul className="text-sm text-gray-700 mt-1">
                                                            <li>• Ácidos o álcalis cáusticos</li>
                                                            <li>• Hidrocarburos</li>
                                                            <li>• Metales pesados</li>
                                                            <li>• Alteración del estado mental</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                                <h4 className="font-bold text-purple-700 mb-3">🧴 Vía Cutánea</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h5 className="font-semibold text-purple-800">Procedimiento:</h5>
                                                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                                            <li>Protección personal (guantes, gafas)</li>
                                                            <li>Retirar ropa contaminada</li>
                                                            <li>Polvos: cepillar en seco primero</li>
                                                            <li>Irrigar con agua tibia 15-20 min</li>
                                                            <li>Evitar fricción excesiva</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-yellow-100 p-3 rounded">
                                                        <p className="text-sm text-yellow-800">
                                                            <strong>Precaución:</strong> No usar agua en contacto con metales reactivos (sodio, potasio)
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h4 className="font-bold text-green-700 mb-3">👁️ Vía Ocular</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h5 className="font-semibold text-green-800">Irrigación ocular:</h5>
                                                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                                            <li>Posición: paciente supino o sentado</li>
                                                            <li>Separar párpados suavemente</li>
                                                            <li>Irrigar de nasal a temporal</li>
                                                            <li>Solución salina o agua limpia</li>
                                                            <li>Continuar 15-20 minutos</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-red-100 p-3 rounded">
                                                        <p className="text-sm text-red-800">
                                                            <strong>Urgente:</strong> Ácidos y álcalis requieren irrigación inmediata y prolongada
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                                <h4 className="font-bold text-orange-700 mb-3">🫁 Vía Respiratoria</h4>
                                                <div className="space-y-3">
                                                    <div>
                                                        <h5 className="font-semibold text-orange-800">Medidas:</h5>
                                                        <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                                            <li>Retirar del ambiente tóxico</li>
                                                            <li>Administrar oxígeno al 100%</li>
                                                            <li>Ventilación asistida si necesario</li>
                                                            <li>Monitorización continua</li>
                                                            <li>Considerar intubación</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-blue-100 p-3 rounded">
                                                        <p className="text-sm text-blue-800">
                                                            <strong>Especial:</strong> CO requiere O₂ hiperbárico si disponible
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Medidas de soporte */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-4">🩺 Medidas de Soporte Vital</h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Vía Aérea:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Posición lateral de seguridad</li>
                                                    <li>Aspiración de secreciones</li>
                                                    <li>Dispositivos de vía aérea</li>
                                                    <li>Intubación si GCS ≤8</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Respiración:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Oxígeno suplementario</li>
                                                    <li>Ventilación con BVM</li>
                                                    <li>Monitorización SpO₂</li>
                                                    <li>CPAP si broncoespasmo</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-2">Circulación:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Acceso venoso (2 vías)</li>
                                                    <li>Monitorización cardíaca</li>
                                                    <li>Manejo de arritmias</li>
                                                    <li>Soporte inotrópico</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'antidotes' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <RiVirusLine className="w-6 h-6 mr-2 text-orange-500"/>
                                        Antídotos Específicos Prehospitalarios
                                    </h2>
                                    
                                    <div className="grid gap-6">
                                        {/* Naloxona */}
                                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-purple-700 mb-4">💜 Naloxona (Narcan®)</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Indicaciones:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Sospecha de intoxicación por opioides</li>
                                                        <li>Depresión respiratoria</li>
                                                        <li>Coma de origen desconocido</li>
                                                        <li>Miosis + bradipnea</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Dosis:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>IV/IM: 0.4-2 mg</li>
                                                        <li>Intranasal: 2-4 mg</li>
                                                        <li>Repetir cada 2-3 min</li>
                                                        <li>Máximo: 10 mg total</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-purple-800 mb-2">Precauciones:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Síndrome de abstinencia</li>
                                                        <li>Duración corta (30-90 min)</li>
                                                        <li>Re-narcotización</li>
                                                        <li>Monitorización continua</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Atropina */}
                                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-green-700 mb-4">💚 Atropina</h3>
                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-green-800 mb-2">Indicaciones:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Intoxicación por organofosforados</li>
                                                        <li>Toxidrome colinérgico</li>
                                                        <li>Bradiarritmias tóxicas</li>
                                                        <li>Broncoespasmo severo</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-green-800 mb-2">Dosis:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Inicial: 1-2 mg IV</li>
                                                        <li>Organofosforados: 2-6 mg</li>
                                                        <li>Repetir cada 5-10 min</li>
                                                        <li>Hasta atropinización</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-green-800 mb-2">Objetivo:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Secar secreciones</li>
                                                        <li>Mejorar ventilación</li>
                                                        <li>Normalizar FC</li>
                                                        <li>Mantener PA</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Antídotos hospitalarios */}
                                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                            <h3 className="text-xl font-bold text-blue-700 mb-4">🏥 Antídotos Hospitalarios Importantes</h3>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full bg-white rounded-lg">
                                                    <thead className="bg-gray-100">
                                                        <tr>
                                                            <th className="py-3 px-4 text-left">Tóxico</th>
                                                            <th className="py-3 px-4 text-left">Antídoto</th>
                                                            <th className="py-3 px-4 text-left">Mecanismo</th>
                                                            <th className="py-3 px-4 text-left">Comentarios</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border-b">
                                                            <td className="py-3 px-4 font-medium">Paracetamol</td>
                                                            <td className="py-3 px-4">N-acetilcisteína</td>
                                                            <td className="py-3 px-4">Precursor glutatión</td>
                                                            <td className="py-3 px-4">Más efectivo &lt;8h</td>
                                                        </tr>
                                                        <tr className="border-b">
                                                            <td className="py-3 px-4 font-medium">Warfarina</td>
                                                            <td className="py-3 px-4">Vitamina K</td>
                                                            <td className="py-3 px-4">Cofactor síntesis</td>
                                                            <td className="py-3 px-4">Efecto en 6-24h</td>
                                                        </tr>
                                                        <tr className="border-b">
                                                            <td className="py-3 px-4 font-medium">Metanol/Etilenglicol</td>
                                                            <td className="py-3 px-4">Fomepizol</td>
                                                            <td className="py-3 px-4">Inhibe alcohol DH</td>
                                                            <td className="py-3 px-4">Alternativa: etanol</td>
                                                        </tr>
                                                        <tr className="border-b">
                                                            <td className="py-3 px-4 font-medium">Cianuro</td>
                                                            <td className="py-3 px-4">Hidroxicobalamina</td>
                                                            <td className="py-3 px-4">Quelante directo</td>
                                                            <td className="py-3 px-4">Seguro y efectivo</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="py-3 px-4 font-medium">Digoxina</td>
                                                            <td className="py-3 px-4">Fab antidigoxina</td>
                                                            <td className="py-3 px-4">Anticuerpo específico</td>
                                                            <td className="py-3 px-4">Reversión completa</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Casos clínicos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Casos Clínicos para Análisis</h2>
                                    <div className="grid gap-6">
                                        <div className="p-5 bg-red-50 rounded-lg shadow-sm border border-red-200">
                                            <h3 className="text-xl font-semibold mb-2 text-red-600">🚨 Caso 1: Intoxicación por Fentanilo</h3>
                                            <p className="italic text-gray-600 mb-4">
                                                Hombre de 32 años encontrado inconsciente en baño público. Presente jeringa, miosis marcada, 
                                                respiraciones 6/min superficiales, SpO₂ 78%.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Vía aérea: permeable</li>
                                                        <li>Respiración: bradipnea severa</li>
                                                        <li>Pulso: 58 lpm, regular</li>
                                                        <li>PA: 90/60 mmHg</li>
                                                        <li>Glasgow: 3</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>Ventilación con BVM + O₂</li>
                                                        <li>Naloxona 2 mg IV/IM</li>
                                                        <li>Repetir naloxona si no respuesta</li>
                                                        <li>Monitorización continua</li>
                                                        <li>Traslado urgente</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 bg-green-50 rounded-lg shadow-sm border border-green-200">
                                            <h3 className="text-xl font-semibold mb-2 text-green-600">🌿 Caso 2: Intoxicación por Organofosforados</h3>
                                            <p className="italic text-gray-600 mb-4">
                                                Agricultor de 45 años tras fumigación sin EPP. Presenta salivación excesiva, 
                                                miosis, diarrea, vómitos, y dificultad respiratoria.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <h4 className="font-medium mb-2">Signos SLUDGE:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Salivación aumentada</li>
                                                        <li>Lacrimación</li>
                                                        <li>Micción frecuente</li>
                                                        <li>Diarrea</li>
                                                        <li>Emesis</li>
                                                        <li>Miosis bilateral</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Tratamiento:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>Descontaminación (ropa, piel)</li>
                                                        <li>Atropina 2-6 mg IV</li>
                                                        <li>Repetir hasta atropinización</li>
                                                        <li>O₂ + aspiración secreciones</li>
                                                        <li>Traslado para pralidoxima</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 bg-blue-50 rounded-lg shadow-sm border border-blue-200">
                                            <h3 className="text-xl font-semibold mb-2 text-blue-600">🔥 Caso 3: Intoxicación por Monóxido de Carbono</h3>
                                            <p className="italic text-gray-600 mb-4">
                                                Familia de 4 personas en vivienda con calefacción a gas defectuosa. 
                                                Cefalea, náuseas, confusión progresiva.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div className="mb-4">
                                                    <h4 className="font-medium mb-2">Manifestaciones:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Cefalea intensa</li>
                                                        <li>Náuseas y vómitos</li>
                                                        <li>Confusión mental</li>
                                                        <li>Fatiga extrema</li>
                                                        <li>Posible color rojo cereza</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Tratamiento:</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>Retirar del ambiente</li>
                                                        <li>Oxígeno al 100%</li>
                                                        <li>Monitorización SpO₂</li>
                                                        <li>Evaluación neurológica</li>
                                                        <li>Traslado para O₂ hiperbárico</li>
                                                    </ol>
                                                </div>
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
                                    <li>Goldfrank's Toxicologic Emergencies (11th Ed.)</li>
                                    <li>Manual de Toxicología Clínica - SEUP</li>
                                    <li>Olson, K. R. (2019). Poisoning & Drug Overdose (7th Ed.)</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.poison.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Poison Control - Centro de información toxicológica</a></li>
                                    <li><a href="https://www.cdc.gov/niosh/topics/toxicology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC - Temas de toxicología ocupacional</a></li>
                                    <li><a href="https://www.ncbi.nlm.nih.gov/books/NBK537034/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">StatPearls - Toxicología de emergencia</a></li>
                                    <li><a href="https://www.ems1.com/toxicology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos de toxicología prehospitalaria</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Medscape - Referencias médicas y calculadoras de dosis</li>
                                    <li>Poison Control (App oficial) - Guía de emergencias toxicológicas</li>
                                    <li>Paramedic Protocol Provider - Protocolos de medicamentos</li>
                                    <li>EMT Review Plus - Casos clínicos y práctica</li>
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

