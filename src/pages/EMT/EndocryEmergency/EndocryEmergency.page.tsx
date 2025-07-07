import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./EndocryEmergency.questions.ts";
import {CiMedicalCross} from "react-icons/ci";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdWarning, MdCheckCircle, MdOutlineTimer} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield, BsDropletHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaHeartbeat, FaThermometerHalf, FaBrain, FaEye} from "react-icons/fa";
import {FiAlertTriangle, FiActivity, FiUser} from "react-icons/fi";
import {GiMedicines, GiTestTubes} from "react-icons/gi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function EndocryEmergency(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    
    return(
        <SEOWrapper
            title="Emergencias Endocrinas y Hematológicas EMT | Diabetes, Hipoglucemia, Hiperglucemia"
            description="Guía completa sobre emergencias endocrinas y hematológicas para Técnicos en Atención Médica Prehospitalaria: diabetes, hipoglucemia, hiperglucemia, anemia, hemofilia, células falciformes y protocolos de manejo."
            keywords="emergencias endocrinas, emergencias hematológicas, diabetes, hipoglucemia, hiperglucemia, EMT, paramédicos, glucosa, insulina, anemia, hemofilia, células falciformes, CAD, EHH"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Endocrinas y Hematológicas</h1>
                        <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto"  />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/endocrine-emergency/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://diabetesatlas.org/en/sections/prevalence-of-diabetes-in-adults.html"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <GiTestTubes className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Atlas Diabetes</p>
                            </a>
                            <a href="https://drive.google.com/file/d/11yKcENtm8rdmhicNn9oHX2sroyjEqi26/view?usp=drive_link"
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
                                        <h2 className="text-2xl font-bold text-red-700">¡Emergencias que Salvan Vidas!</h2>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                        Las emergencias endocrinas y hematológicas pueden <strong>progresar rápidamente</strong> hacia 
                                        el colapso cardiovascular y la muerte si no se reconocen y tratan oportunamente.
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                            <p className="font-bold text-red-600">Hipoglucemia</p>
                                            <p className="text-sm">Coma en 30-60 min</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                            <p className="font-bold text-orange-600">CAD</p>
                                            <p className="text-sm">Shock en 6-12 horas</p>
                                        </div>
                                        <div className="bg-white p-4 rounded shadow-sm text-center">
                                            <BsDropletHalf className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                                            <p className="font-bold text-blue-600">Anemia severa</p>
                                            <p className="text-sm">Falla cardiaca</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Protocolo de evaluación ABC modificado */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                        Protocolo ABCDE - Evaluación Sistemática
                                    </h2>
                                    <div className="grid lg:grid-cols-5 gap-4">
                                        <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                                            <h3 className="text-lg font-bold text-blue-700 mb-2 text-center">A - AIRWAY</h3>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <FaEye className="w-3 h-3 mt-1 mr-2 text-blue-600"/>
                                                    <span>Vía aérea permeable</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaEye className="w-3 h-3 mt-1 mr-2 text-blue-600"/>
                                                    <span>Alteración mental</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                                            <h3 className="text-lg font-bold text-green-700 mb-2 text-center">B - BREATHING</h3>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <FiActivity className="w-3 h-3 mt-1 mr-2 text-green-600"/>
                                                    <span>Kussmaul (CAD)</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FiActivity className="w-3 h-3 mt-1 mr-2 text-green-600"/>
                                                    <span>Frecuencia y calidad</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                                            <h3 className="text-lg font-bold text-red-700 mb-2 text-center">C - CIRCULATION</h3>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <FaHeartbeat className="w-3 h-3 mt-1 mr-2 text-red-600"/>
                                                    <span>Pulso y perfusión</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaHeartbeat className="w-3 h-3 mt-1 mr-2 text-red-600"/>
                                                    <span>Palidez, hemorragia</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                                            <h3 className="text-lg font-bold text-purple-700 mb-2 text-center">D - DISABILITY</h3>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <FaBrain className="w-3 h-3 mt-1 mr-2 text-purple-600"/>
                                                    <span>Glasgow, pupilas</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaBrain className="w-3 h-3 mt-1 mr-2 text-purple-600"/>
                                                    <span>Glucosa capilar</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                                            <h3 className="text-lg font-bold text-yellow-700 mb-2 text-center">E - EXPOSURE</h3>
                                            <ul className="space-y-1 text-sm text-gray-700">
                                                <li className="flex items-start">
                                                    <FaThermometerHalf className="w-3 h-3 mt-1 mr-2 text-yellow-600"/>
                                                    <span>Temperatura</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <FaThermometerHalf className="w-3 h-3 mt-1 mr-2 text-yellow-600"/>
                                                    <span>Petequias, equimosis</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Signos de alarma críticos */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                <GiTestTubes className="w-4 h-4 mr-2"/>
                                                Emergencias Endocrinas:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Hipoglucemia:</strong> Confusión, sudoración fría, temblor</li>
                                                <li><strong>CAD:</strong> Respiración de Kussmaul, aliento afrutado</li>
                                                <li><strong>EHH:</strong> Deshidratación severa, alteración mental</li>
                                                <li><strong>Crisis tiroidea:</strong> Fiebre alta, taquicardia</li>
                                                <li><strong>Insuficiencia suprarrenal:</strong> Hipotensión, dolor abdominal</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                <BsDropletHalf className="w-4 h-4 mr-2"/>
                                                Emergencias Hematológicas:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Anemia severa:</strong> Palidez extrema, disnea, taquicardia</li>
                                                <li><strong>Crisis falciforme:</strong> Dolor intenso, fiebre, priapismo</li>
                                                <li><strong>Hemorragia:</strong> Sangrado espontáneo, petequias</li>
                                                <li><strong>Hemofilia:</strong> Sangrado prolongado tras trauma menor</li>
                                                <li><strong>PTT:</strong> Púrpura, sangrado mucoso</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Puntos clave para recordar */}
                                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                        <h3 className="text-xl font-bold text-green-800">Perlas Clínicas para Paramédicos</h3>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                Mnemotecnicas AAOS:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>GLUCOSE:</strong> Todo paciente inconsciente</li>
                                                <li><strong>DIABETIC:</strong> Siempre preguntar historia</li>
                                                <li><strong>INSULIN:</strong> Última dosis y horario</li>
                                                <li><strong>FOOD:</strong> Última comida y cantidad</li>
                                                <li><strong>BLEEDING:</strong> Buscar signos hemorrágicos</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                Errores Comunes a Evitar:
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>NO administrar glucosa si el paciente no puede tragar</li>
                                                <li>NO asumir que toda alteración mental es hipoglucemia</li>
                                                <li>NO forzar inyecciones IM en hemofílicos</li>
                                                <li>NO subestimar el dolor en crisis falciforme</li>
                                                <li>NO olvidar reevaluar después de intervenciones</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Valores normales de referencia */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                        <GiMedicines className="w-6 h-6 mr-2"/>
                                        Valores de Referencia Críticos
                                    </h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Glucosa</h4>
                                            <ul className="text-sm space-y-1">
                                                <li><span className="text-green-600">Normal:</span> 70-110 mg/dL</li>
                                                <li><span className="text-yellow-600">Hipoglucemia:</span> &lt;70 mg/dL</li>
                                                <li><span className="text-red-600">Crítica:</span> &lt;50 mg/dL</li>
                                                <li><span className="text-red-600">Hiperglucemia:</span> &gt;200 mg/dL</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Hemoglobina</h4>
                                            <ul className="text-sm space-y-1">
                                                <li><span className="text-green-600">Hombres:</span> 14-18 g/dL</li>
                                                <li><span className="text-green-600">Mujeres:</span> 12-16 g/dL</li>
                                                <li><span className="text-yellow-600">Anemia leve:</span> 10-12 g/dL</li>
                                                <li><span className="text-red-600">Anemia severa:</span> &lt;8 g/dL</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-2">Plaquetas</h4>
                                            <ul className="text-sm space-y-1">
                                                <li><span className="text-green-600">Normal:</span> 150-450 K/μL</li>
                                                <li><span className="text-yellow-600">Trombocitopenia:</span> &lt;100 K/μL</li>
                                                <li><span className="text-red-600">Crítica:</span> &lt;50 K/μL</li>
                                                <li><span className="text-red-600">Sangrado:</span> &lt;20 K/μL</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-8">
                                {/* Sistema endocrino interactivo */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiMedicines className="w-6 h-6 mr-2 text-orange-500"/>
                                        Sistema Endocrino - Red de Comunicación Hormonal
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div className="space-y-6">
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                                                    <FaBrain className="w-5 h-5 mr-2"/>
                                                    Glándulas Principales
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-blue-700">Páncreas</h4>
                                                            <p className="text-sm text-gray-600 mb-1">
                                                                <strong>Insulina:</strong> Reduce glucosa (células beta)
                                                            </p>
                                                            <p className="text-sm text-gray-600">
                                                                <strong>Glucagón:</strong> Aumenta glucosa (células alfa)
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-green-700">Tiroides</h4>
                                                            <p className="text-sm text-gray-600 mb-1">
                                                                <strong>T3/T4:</strong> Metabolismo basal, termogénesis
                                                            </p>
                                                            <p className="text-sm text-gray-600">
                                                                <strong>Calcitonina:</strong> Regula calcio sérico
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-red-700">Suprarrenales</h4>
                                                            <p className="text-sm text-gray-600 mb-1">
                                                                <strong>Cortisol:</strong> Respuesta al estrés, gluconeogénesis
                                                            </p>
                                                            <p className="text-sm text-gray-600">
                                                                <strong>Aldosterona:</strong> Balance hidro-electrolítico
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-purple-700">Hipófisis</h4>
                                                            <p className="text-sm text-gray-600 mb-1">
                                                                <strong>ADH:</strong> Retención de agua
                                                            </p>
                                                            <p className="text-sm text-gray-600">
                                                                <strong>TSH, ACTH:</strong> Regulación de otras glándulas
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                                <h3 className="text-xl font-bold text-orange-700 mb-4">Fisiopatología de la Diabetes</h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-semibold text-orange-600 mb-1">Tipo 1 (DMID)</h4>
                                                        <p className="text-sm text-gray-700">
                                                            Destrucción autoinmune de células beta → Deficiencia absoluta de insulina
                                                        </p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-semibold text-orange-600 mb-1">Tipo 2 (DMNID)</h4>
                                                        <p className="text-sm text-gray-700">
                                                            Resistencia a la insulina + Deficiencia relativa de insulina
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-col items-center space-y-4">
                                            <div className="text-center">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Endocrine_system_diagram_es.svg/400px-Endocrine_system_diagram_es.svg.png"
                                                    alt="Sistema endocrino"
                                                    className="rounded-lg shadow-lg max-w-full h-auto"
                                                />
                                                <p className="text-sm text-gray-600 italic mt-2">Sistema endocrino humano</p>
                                            </div>
                                            
                                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 w-full">
                                                <h4 className="font-semibold text-yellow-800 mb-2">Regulación de la Glucosa</h4>
                                                <div className="text-sm space-y-1">
                                                    <p><span className="text-green-600">Alimentación:</span> ↑ Glucosa → ↑ Insulina</p>
                                                    <p><span className="text-red-600">Ayuno:</span> ↓ Glucosa → ↑ Glucagón</p>
                                                    <p><span className="text-blue-600">Estrés:</span> ↑ Cortisol → ↑ Glucosa</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Sistema hematológico */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <BsDropletHalf className="w-6 h-6 mr-2 text-red-500"/>
                                        Sistema Hematológico - Transporte y Defensa
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-8">
                                        <div>
                                            <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                                                <h3 className="text-xl font-bold text-red-700 mb-4">Componentes Sanguíneos</h3>
                                                <div className="space-y-3">
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-red-700">Eritrocitos (GR)</h4>
                                                            <p className="text-sm text-gray-600">
                                                                Hemoglobina, transporte O₂/CO₂, vida útil 120 días
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-blue-700">Leucocitos (GB)</h4>
                                                            <p className="text-sm text-gray-600">
                                                                Neutrófilos, linfocitos, monocitos - defensa inmune
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-yellow-700">Plaquetas</h4>
                                                            <p className="text-sm text-gray-600">
                                                                Hemostasia primaria, agregación, vida útil 7-10 días
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start space-x-3">
                                                        <div className="w-4 h-4 bg-orange-500 rounded-full mt-1"></div>
                                                        <div>
                                                            <h4 className="font-semibold text-orange-700">Plasma</h4>
                                                            <p className="text-sm text-gray-600">
                                                                Factores de coagulación, proteínas, electrolitos
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                                                <h3 className="text-xl font-bold text-purple-700 mb-4">Hematopoyesis</h3>
                                                <p className="text-sm text-gray-700 mb-3">
                                                    Producción de células sanguíneas en médula ósea roja
                                                </p>
                                                <div className="space-y-2 text-sm">
                                                    <p><span className="text-red-600">Eritropoyesis:</span> Estimulada por EPO (riñón)</p>
                                                    <p><span className="text-blue-600">Leucopoyesis:</span> Respuesta a infecciones</p>
                                                    <p><span className="text-yellow-600">Trombopoyesis:</span> Regulada por TPO (hígado)</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-6">
                                            <div className="text-center">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Blood_cells_diagram_es.svg/500px-Blood_cells_diagram_es.svg.png"
                                                    alt="Células sanguíneas"
                                                    className="rounded-lg shadow-lg max-w-full h-auto"
                                                />
                                                <p className="text-sm text-gray-600 italic mt-2">Componentes celulares de la sangre</p>
                                            </div>

                                            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                                                <h3 className="text-xl font-bold text-green-700 mb-4">Cascada de Coagulación</h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-semibold text-green-600 mb-1">1. Hemostasia Primaria</h4>
                                                        <p className="text-sm text-gray-700">
                                                            Vasoconstricción + agregación plaquetaria
                                                        </p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-semibold text-green-600 mb-1">2. Hemostasia Secundaria</h4>
                                                        <p className="text-sm text-gray-700">
                                                            Activación factores coagulación → fibrina
                                                        </p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <h4 className="font-semibold text-green-600 mb-1">3. Fibrinólisis</h4>
                                                        <p className="text-sm text-gray-700">
                                                            Disolución del coágulo por plasmina
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Patologías específicas */}
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                                        <FiUser className="w-5 h-5 mr-2"/>
                                        Fisiopatología de Condiciones Críticas
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-3">Células Falciformes</h4>
                                            <div className="bg-white p-4 rounded space-y-2 text-sm">
                                                <p><strong>Defecto:</strong> Hemoglobina S (HbS) en lugar de HbA</p>
                                                <p><strong>Resultado:</strong> GR rígidos en forma de hoz</p>
                                                <p><strong>Consecuencia:</strong> Oclusión vascular → isquemia</p>
                                                <p><strong>Crisis:</strong> Dolor, hipoxia, deshidratación</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-700 mb-3">Hemofilia</h4>
                                            <div className="bg-white p-4 rounded space-y-2 text-sm">
                                                <p><strong>Tipo A:</strong> Deficiencia Factor VIII (85%)</p>
                                                <p><strong>Tipo B:</strong> Deficiencia Factor IX (15%)</p>
                                                <p><strong>Herencia:</strong> Ligada al X (varones afectados)</p>
                                                <p><strong>Clínica:</strong> Sangrado prolongado, hemartrosis</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'treatment' && (
                            <div className="space-y-8">
                                {/* Protocolos de evaluación inicial */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                                        <h2 className="text-2xl font-bold text-red-700">Protocolos de Emergencia - Algoritmos AAOS</h2>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-5 rounded-lg">
                                            <h3 className="font-bold text-red-600 mb-3 flex items-center">
                                                <FaBrain className="w-5 h-5 mr-2"/>
                                                Paciente con Alteración Mental
                                            </h3>
                                            <ol className="space-y-2 text-sm">
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                                    <span>Asegurar vía aérea y ventilación</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                                    <span>Glucosa capilar INMEDIATA</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                                    <span>Si &lt;70 mg/dL y consciente → glucosa oral</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                                    <span>Si inconsciente → NO dar nada por boca</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                                    <span>Reevaluar cada 5 minutos</span>
                                                </li>
                                            </ol>
                                        </div>
                                        <div className="bg-white p-5 rounded-lg">
                                            <h3 className="font-bold text-blue-600 mb-3 flex items-center">
                                                <BsDropletHalf className="w-5 h-5 mr-2"/>
                                                Paciente con Sangrado/Palidez
                                            </h3>
                                            <ol className="space-y-2 text-sm">
                                                <li className="flex items-start">
                                                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                                    <span>Control inmediato de hemorragia externa</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                                    <span>Evaluar signos de shock</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                                    <span>Oxígeno si SpO₂ &lt;94%</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                                    <span>Posición de shock si no hay trauma</span>
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                                    <span>Traslado URGENTE</span>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                {/* Tratamientos específicos */}
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <GiMedicines className="w-6 h-6 mr-2 text-green-500"/>
                                        Tratamientos Específicos por Condición
                                    </h2>
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        {/* Emergencias endocrinas */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-green-700 mb-3">Emergencias Endocrinas</h3>
                                            
                                            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                                                <h4 className="font-bold text-green-600 mb-3 flex items-center">
                                                    <MdOutlineTimer className="w-4 h-4 mr-2"/>
                                                    Hipoglucemia (&lt;70 mg/dL)
                                                </h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-green-700 mb-1">Si consciente y puede tragar:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>15g glucosa oral (3-4 tabletas)</li>
                                                            <li>120ml jugo de naranja</li>
                                                            <li>1 tubo gel de glucosa</li>
                                                            <li>Reevaluar en 15 minutos</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                                        <p className="font-semibold text-yellow-700 mb-1">Si inconsciente:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>NO administrar nada por boca</li>
                                                            <li>Posición lateral de seguridad</li>
                                                            <li>Glucagón IM si autorizado</li>
                                                            <li>Traslado inmediato</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                                                <h4 className="font-bold text-red-600 mb-3 flex items-center">
                                                    <FaThermometerHalf className="w-4 h-4 mr-2"/>
                                                    Cetoacidosis Diabética (CAD)
                                                </h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-red-700 mb-1">Signos clave:</p>
                                                        <p className="text-gray-700">Respiración Kussmaul, aliento afrutado, deshidratación</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-red-700 mb-1">Manejo prehospitalario:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>NO administrar insulina</li>
                                                            <li>Oxígeno si hipoxia</li>
                                                            <li>Monitoreo continuo</li>
                                                            <li>Traslado urgente para fluidos IV</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                                                <h4 className="font-bold text-yellow-600 mb-3">Crisis Tiroidea</h4>
                                                <div className="bg-white p-3 rounded text-sm">
                                                    <p className="font-semibold text-yellow-700 mb-1">Manejo de soporte:</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Control de hipertermia (métodos físicos)</li>
                                                        <li>Oxígeno suplementario</li>
                                                        <li>Monitoreo cardiaco</li>
                                                        <li>Traslado inmediato</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Emergencias hematológicas */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-red-700 mb-3">Emergencias Hematológicas</h3>
                                            
                                            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                                                <h4 className="font-bold text-red-600 mb-3 flex items-center">
                                                    <BsDropletHalf className="w-4 h-4 mr-2"/>
                                                    Hemofilia - Sangrado
                                                </h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-red-700 mb-1">Precauciones especiales:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>EVITAR inyecciones IM</li>
                                                            <li>Manipulación suave</li>
                                                            <li>NO aspirina o anticoagulantes</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-red-700 mb-1">Manejo del sangrado:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>Presión directa firme y prolongada</li>
                                                            <li>Aplicar hielo en articulaciones</li>
                                                            <li>Inmovilización si hay hemartrosis</li>
                                                            <li>Traslado urgente para factor VIII/IX</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                                                <h4 className="font-bold text-blue-600 mb-3 flex items-center">
                                                    <FaHeartbeat className="w-4 h-4 mr-2"/>
                                                    Crisis Células Falciformes
                                                </h4>
                                                <div className="space-y-2 text-sm">
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-blue-700 mb-1">Manejo del dolor:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>Analgesia según protocolo</li>
                                                            <li>Aplicación de calor local</li>
                                                            <li>Posición de confort</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-3 rounded">
                                                        <p className="font-semibold text-blue-700 mb-1">Soporte general:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                            <li>Oxígeno suplementario</li>
                                                            <li>Hidratación oral si puede</li>
                                                            <li>Evitar frío y deshidratación</li>
                                                            <li>Traslado para manejo hospitalario</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                                                <h4 className="font-bold text-purple-600 mb-3">Anemia Severa</h4>
                                                <div className="bg-white p-3 rounded text-sm">
                                                    <p className="font-semibold text-purple-700 mb-1">Soporte hemodinámico:</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Oxígeno de alto flujo</li>
                                                        <li>Posición semi-Fowler</li>
                                                        <li>Monitoreo cardiaco</li>
                                                        <li>Minimizar actividad física</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Medicamentos y dosis */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                                        <GiMedicines className="w-5 h-5 mr-2"/>
                                        Medicamentos y Dosis - Nivel TAMP
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-700 mb-3">Hipoglucemia</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between border-b pb-1">
                                                    <span className="font-medium">Glucosa oral 15g</span>
                                                    <span className="text-gray-600">1 dosis, repetir PRN</span>
                                                </div>
                                                <div className="flex justify-between border-b pb-1">
                                                    <span className="font-medium">Glucagón IM</span>
                                                    <span className="text-gray-600">1mg (si autorizado)</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">Jugo naranja</span>
                                                    <span className="text-gray-600">120ml (4 oz)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white p-4 rounded-lg">
                                            <h4 className="font-semibold text-red-700 mb-3">Oxigenoterapia</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between border-b pb-1">
                                                    <span className="font-medium">Cánula nasal</span>
                                                    <span className="text-gray-600">2-6 L/min</span>
                                                </div>
                                                <div className="flex justify-between border-b pb-1">
                                                    <span className="font-medium">Mascarilla simple</span>
                                                    <span className="text-gray-600">6-10 L/min</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="font-medium">Mascarilla reservorio</span>
                                                    <span className="text-gray-600">10-15 L/min</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contraindicaciones y precauciones */}
                                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                                        <MdWarning className="w-5 h-5 mr-2"/>
                                        Contraindicaciones y Precauciones Críticas
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-red-700 mb-3">NUNCA hacer:</h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Dar glucosa oral a paciente inconsciente</li>
                                                <li>Administrar insulina en campo</li>
                                                <li>Inyecciones IM en hemofílicos</li>
                                                <li>Aspirina en trastornos hemorrágicos</li>
                                                <li>Subestimar dolor en crisis falciforme</li>
                                                <li>Forzar fluidos orales si vómito</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-3">SIEMPRE recordar:</h4>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Reevaluar glucosa después de tratamiento</li>
                                                <li>Monitorear vía aérea en alteración mental</li>
                                                <li>Buscar identificación médica del paciente</li>
                                                <li>Preguntar por medicamentos actuales</li>
                                                <li>Documentar todos los signos vitales</li>
                                                <li>Comunicar hallazgos al hospital receptor</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border">
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                        <FiUser className="w-6 h-6 mr-2 text-blue-500"/>
                                        Casos Clínicos Interactivos - Aprende Haciendo
                                    </h2>
                                    <p className="text-gray-700 mb-4">
                                        Analiza cada caso, identifica signos clave y determina el manejo apropiado paso a paso.
                                        Recuerda seguir el protocolo ABCDE y priorizar las intervenciones que salvan vidas.
                                    </p>
                                </div>

                                {/* Caso 1: Hipoglucemia severa */}
                                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                                        <h3 className="text-xl font-semibold text-red-700">Caso Clínico: Hipoglucemia Severa</h3>
                                    </div>
                                    
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <div className="bg-white p-5 rounded-lg mb-4">
                                                <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                                                    <FaEye className="w-4 h-4 mr-2"/>
                                                    Presentación del Caso
                                                </h4>
                                                <p className="text-gray-700 mb-3 italic">
                                                    "Mujer de 65 años diabética tipo 2, encontrada por su hija en casa, 
                                                    inconsciente en el suelo de la cocina. La hija refiere que su madre 
                                                    se inyectó insulina esta mañana pero no desayunó porque 'no tenía hambre'."
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded">
                                                    <h5 className="font-medium text-gray-800 mb-2">Hallazgos iniciales:</h5>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• Paciente inconsciente, no responde a estímulos verbales</li>
                                                        <li>• Piel fría, pálida y sudorosa</li>
                                                        <li>• Respiración superficial pero presente</li>
                                                        <li>• Pulso radial débil pero regular</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                                <h4 className="font-semibold text-blue-600 mb-2">Pregunta de Reflexión</h4>
                                                <p className="text-sm text-gray-700 mb-2">
                                                    ¿Cuál debe ser tu PRIMERA acción antes de cualquier intervención?
                                                </p>
                                                <div className="bg-white p-2 rounded text-xs text-gray-600">
                                                    <strong>Respuesta:</strong> Asegurar vía aérea y verificar respiración. 
                                                    Aunque sospechemos hipoglucemia, el ABC siempre va primero.
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="bg-white p-5 rounded-lg mb-4">
                                                <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                                                    <FiActivity className="w-4 h-4 mr-2"/>
                                                    Evaluación ABCDE
                                                </h4>
                                                <div className="space-y-3 text-sm">
                                                    <div className="flex items-center">
                                                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mr-2">A</span>
                                                        <span>Vía aérea permeable, sin secreciones</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mr-2">B</span>
                                                        <span>FR: 16/min, SpO₂: 97%, sin ruidos anormales</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium mr-2">C</span>
                                                        <span>FC: 110/min, TA: 100/60 mmHg, pulso débil</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium mr-2">D</span>
                                                        <span>Glasgow 6 (E1V1M4), pupilas reactivas</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium mr-2">E</span>
                                                        <span>Glucosa capilar: 35 mg/dL, T° 36.2°C</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <h4 className="font-semibold text-green-600 mb-3">Manejo Correcto Paso a Paso</h4>
                                                <ol className="space-y-2 text-sm">
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                                        <span>Posición lateral de seguridad (proteger vía aérea)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                                        <span><strong>NO</strong> administrar glucosa oral (riesgo aspiración)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                                        <span>Glucagón 1mg IM si está autorizado</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                                        <span>Traslado inmediato con monitoreo continuo</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                                        <span>Reevaluar glucosa y estado mental cada 5 min</span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                            <BsLightbulb className="w-4 h-4 mr-2"/>
                                            Perlas Educativas
                                        </h4>
                                        <ul className="text-sm space-y-1 text-gray-700">
                                            <li>• La hipoglucemia puede simular intoxicación o ACV</li>
                                            <li>• La sudoración fría es un signo temprano y confiable</li>
                                            <li>• El daño neurológico es reversible si se trata rápidamente</li>
                                            <li>• Siempre informar al hospital sobre la administración de glucagón</li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Caso 2: Cetoacidosis diabética */}
                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                                        <h3 className="text-xl font-semibold text-orange-700">Caso Clínico: Cetoacidosis Diabética (CAD)</h3>
                                    </div>
                                    
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <div className="bg-white p-5 rounded-lg mb-4">
                                                <h4 className="font-semibold text-orange-600 mb-3">Presentación del Caso</h4>
                                                <p className="text-gray-700 mb-3 italic">
                                                    "Adolescente de 16 años llevado por sus padres después de 2 días con 
                                                    vómito, sed excesiva y micción frecuente. Los padres refieren que 
                                                    'respira muy rápido y profundo' y su aliento huele extraño."
                                                </p>
                                                <div className="bg-gray-50 p-3 rounded">
                                                    <h5 className="font-medium text-gray-800 mb-2">Signos vitales:</h5>
                                                    <ul className="text-sm space-y-1 text-gray-700">
                                                        <li>• FC: 120/min, TA: 90/50 mmHg</li>
                                                        <li>• FR: 28/min (respiración profunda y rápida)</li>
                                                        <li>• T°: 37.8°C, glucosa: 450 mg/dL</li>
                                                        <li>• Glasgow: 13 (confuso pero despierto)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="bg-white p-5 rounded-lg">
                                                <h4 className="font-semibold text-red-600 mb-3">Manejo Prehospitalario</h4>
                                                <div className="space-y-3">
                                                    <div className="bg-red-50 p-3 rounded border border-red-200">
                                                        <h5 className="font-medium text-red-700 mb-1">❌ NO hacer:</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• NO administrar insulina</li>
                                                            <li>• NO dar bicarbonato</li>
                                                            <li>• NO dar fluidos orales si vomita</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-green-50 p-3 rounded border border-green-200">
                                                        <h5 className="font-medium text-green-700 mb-1">✅ SÍ hacer:</h5>
                                                        <ul className="text-sm space-y-1 text-gray-700">
                                                            <li>• Oxígeno suplementario</li>
                                                            <li>• Monitoreo continuo</li>
                                                            <li>• Posición de confort</li>
                                                            <li>• Traslado urgente</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 3: Crisis de células falciformes */}
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                                        <h3 className="text-xl font-semibold text-blue-700">Caso Clínico: Crisis Falciforme</h3>
                                    </div>
                                    
                                    <div className="grid lg:grid-cols-2 gap-6">
                                        <div>
                                            <div className="bg-white p-5 rounded-lg">
                                                <h4 className="font-semibold text-blue-600 mb-3">Presentación del Caso</h4>
                                                <p className="text-gray-700 mb-3 italic">
                                                    "Joven de 22 años con antecedente conocido de anemia falciforme, 
                                                    presenta dolor intenso 9/10 en brazos y piernas desde hace 6 horas. 
                                                    Refiere que el dolor comenzó después de jugar fútbol en un día caluroso."
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="bg-white p-5 rounded-lg">
                                                <h4 className="font-semibold text-green-600 mb-3">Factores Desencadenantes</h4>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Deshidratación (ejercicio + calor)</li>
                                                    <li>• Hipoxia</li>
                                                    <li>• Estrés físico</li>
                                                    <li>• Infecciones</li>
                                                    <li>• Cambios de temperatura</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Caso 4: Hemofilia con sangrado */}
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
                                        <h3 className="text-xl font-semibold text-purple-700">Caso Clínico: Hemofilia con Sangrado</h3>
                                    </div>
                                    
                                    <div className="bg-white p-5 rounded-lg">
                                        <h4 className="font-semibold text-purple-600 mb-3">Presentación del Caso</h4>
                                        <p className="text-gray-700 mb-3 italic">
                                            "Niño de 10 años con hemofilia A conocida, se golpeó la rodilla jugando. 
                                            La madre refiere sangrado que no se detiene después de 2 horas de presión. 
                                            El niño está pálido y la rodilla muy hinchada."
                                        </p>
                                        
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-red-50 p-3 rounded">
                                                <h5 className="font-medium text-red-700 mb-2">Precauciones Especiales</h5>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Manipulación muy suave</li>
                                                    <li>• Evitar inyecciones IM</li>
                                                    <li>• No aspirina ni anticoagulantes</li>
                                                    <li>• Proteger articulaciones</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-50 p-3 rounded">
                                                <h5 className="font-medium text-green-700 mb-2">Manejo Correcto</h5>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Presión directa continua</li>
                                                    <li>• Aplicación de hielo</li>
                                                    <li>• Inmovilización suave</li>
                                                    <li>• Traslado urgente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Ejercicio de autoevaluación */}
                                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                                        <MdCheckCircle className="w-6 h-6 mr-2"/>
                                        Autoevaluación: Puntos Clave para Recordar
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold text-green-700 mb-3">Emergencias Endocrinas</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="font-medium">¿Cuándo NO dar glucosa oral?</p>
                                                    <p className="text-gray-600 text-xs mt-1">Cuando el paciente está inconsciente o no puede tragar</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="font-medium">Signo patognomónico de CAD:</p>
                                                    <p className="text-gray-600 text-xs mt-1">Respiración de Kussmaul + aliento afrutado</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-blue-700 mb-3">Emergencias Hematológicas</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="bg-white p-3 rounded">
                                                    <p className="font-medium">Primera acción en hemofilia:</p>
                                                    <p className="text-gray-600 text-xs mt-1">Presión directa firme y prolongada</p>
                                                </div>
                                                <div className="bg-white p-3 rounded">
                                                    <p className="font-medium">Crisis falciforme - evitar:</p>
                                                    <p className="text-gray-600 text-xs mt-1">Frío, deshidratación, hipoxia</p>
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
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/endocrine-emergencies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias endocrinas</a></li>
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

