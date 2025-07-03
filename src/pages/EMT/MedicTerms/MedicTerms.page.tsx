import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MediTerms.questions.ts";
import {FaBookMedical, FaHeart, FaLungs, FaBrain, FaEye, FaUser} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdPlayArrow, MdLightbulb, MdSchool} from "react-icons/md";
import {BsBookHalf, BsLightning} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {HiDocumentText, HiAcademicCap} from "react-icons/hi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function MedicTerms(){
    const [activeTab, setActiveTab] = useState<'overview' | 'roots' | 'abbreviations' | 'practice'>('overview');

    // Datos para la sección interactiva
    const anatomicalTerms = [
        { system: "Cardiovascular", icon: FaHeart, color: "text-red-500", terms: ["Cardio-", "Angio-", "Vaso-"] },
        { system: "Respiratorio", icon: FaLungs, color: "text-blue-500", terms: ["Pneumo-", "Pulmo-", "Bronco-"] },
        { system: "Neurológico", icon: FaBrain, color: "text-purple-500", terms: ["Neuro-", "Cerebro-", "Encefalo-"] },
        { system: "Oftalmológico", icon: FaEye, color: "text-green-500", terms: ["Oftalmo-", "Oculo-", "Irido-"] },
    ];

    return(
        <SEOWrapper
            title="Terminología Médica para Técnicos en Urgencias"
            description="Glosario completo de terminología médica esencial para EMT. Prefijos, sufijos, raíces médicas, anatomía básica y términos de posición y dirección."
            keywords="terminología médica EMT, glosario médico, prefijos médicos, anatomía básica, términos posición anatómica"
            section="Terminología"
            difficulty="Beginner"
            timeRequired="PT30M"
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <FaBookMedical className="w-24 h-24 mb-1 text-orange-500" />
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Terminología Médica</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to={`${AllRoutes.MEDIC_TERMS}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            
                            <a href="https://docs.google.com/presentation/d/1zEIo1hIbfVHgW14HMe1GoLSouQqf-qqE/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            
                
                            
                            <a href="https://drive.google.com/file/d/1kh9WRrupQ7fR37P96nH99nM8u8hy2wtS/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('roots')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'roots' 
                                            ? 'border-orange-500 text-orange-600' 
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Raíces, Prefijos y Sufijos
                                </button>
                                <button
                                    onClick={() => setActiveTab('abbreviations')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'abbreviations' 
                                            ? 'border-orange-500 text-orange-600' 
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Abreviaturas y Siglas
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es la terminología médica?</h2>
                                        <div className="flex flex-col md:flex-row gap-6 items-center">
                                            <div className="md:w-2/3">
                                                <p className="text-gray-700 leading-relaxed mb-4">
                                                    La terminología médica es el lenguaje universal de la medicina, basado principalmente en raíces griegas y latinas. 
                                                    Es un sistema estandarizado que permite a los profesionales de la salud comunicarse de manera precisa y 
                                                    sin ambigüedades sobre enfermedades, procedimientos, anatomía y tratamientos.
                                                </p>
                                                <p className="text-gray-700 leading-relaxed">
                                                    Para los paramédicos, dominar este lenguaje es fundamental para la documentación clínica, 
                                                    comunicación con otros profesionales y reporte de hallazgos en el sistema de emergencias médicas.
                                                </p>
                                            </div>
                                            <div className="md:w-1/3 flex justify-center">
                                                <div className="bg-orange-100 p-6 rounded-full">
                                                    <HiDocumentText className="w-20 h-20 text-orange-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia en la atención prehospitalaria</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                                                    <BsLightning className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium text-blue-800">Comunicación eficaz</h4>
                                                        <p className="text-sm text-gray-700">Facilita el entendimiento entre médicos, enfermeros y paramédicos</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                                                    <HiDocumentText className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium text-green-800">Documentación precisa</h4>
                                                        <p className="text-sm text-gray-700">Permite registrar hallazgos y procedimientos de manera estandarizada</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                                                    <MdLightbulb className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium text-red-800">Reducción de errores</h4>
                                                        <p className="text-sm text-gray-700">Minimiza malentendidos y mejora la seguridad del paciente</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                                                    <HiAcademicCap className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                                                    <div>
                                                        <h4 className="font-medium text-purple-800">Desarrollo profesional</h4>
                                                        <p className="text-sm text-gray-700">Base para el crecimiento y especialización en el área médica</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estructura de los términos médicos</h2>
                                        <div className="grid md:grid-cols-3 gap-4 mb-4">
                                            <div className="bg-orange-50 p-4 rounded-lg text-center">
                                                <h3 className="font-bold text-orange-700 mb-2">PREFIJO</h3>
                                                <p className="text-sm text-gray-700 mb-2">Se antepone para modificar</p>
                                                <div className="bg-white p-2 rounded text-orange-600 font-mono">taqui-</div>
                                                <p className="text-xs text-gray-600 mt-1">Significa "rápido"</p>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg text-center">
                                                <h3 className="font-bold text-blue-700 mb-2">RAÍZ</h3>
                                                <p className="text-sm text-gray-700 mb-2">Parte principal del término</p>
                                                <div className="bg-white p-2 rounded text-blue-600 font-mono">-cardi-</div>
                                                <p className="text-xs text-gray-600 mt-1">Significa "corazón"</p>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                                <h3 className="font-bold text-green-700 mb-2">SUFIJO</h3>
                                                <p className="text-sm text-gray-700 mb-2">Se añade al final</p>
                                                <div className="bg-white p-2 rounded text-green-600 font-mono">-ia</div>
                                                <p className="text-xs text-gray-600 mt-1">Indica condición</p>
                                            </div>
                                        </div>
                                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                                            <p className="text-lg font-semibold text-gray-800 mb-2">
                                                <span className="text-orange-600">taqui</span><span className="text-blue-600">cardi</span><span className="text-green-600">a</span>
                                            </p>
                                            <p className="text-gray-700">= Frecuencia cardíaca rápida</p>
                                        </div>
                                    </div>

                                    {/* Sistemas anatómicos */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Raíces por sistemas anatómicos</h2>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            {anatomicalTerms.map((system, idx) => (
                                                <div key={idx} className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
                                                    <div className="flex items-center mb-3">
                                                        <system.icon className={`w-6 h-6 ${system.color} mr-3`} />
                                                        <h3 className="font-semibold text-gray-800">{system.system}</h3>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {system.terms.map((term, termIdx) => (
                                                            <span key={termIdx} className="bg-white px-3 py-1 rounded-full text-sm font-mono text-gray-700 border">
                                                                {term}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'roots' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Prefijos más comunes en emergencias</h2>
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-red-700 mb-2">Velocidad y Frecuencia</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">taqui-</span>
                                                        <span className="text-xs text-gray-600">rápido</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">bradi-</span>
                                                        <span className="text-xs text-gray-600">lento</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-blue-700 mb-2">Cantidad</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">hiper-</span>
                                                        <span className="text-xs text-gray-600">exceso</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">hipo-</span>
                                                        <span className="text-xs text-gray-600">déficit</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">poli-</span>
                                                        <span className="text-xs text-gray-600">muchos</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-green-700 mb-2">Posición</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">epi-</span>
                                                        <span className="text-xs text-gray-600">sobre</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">sub-</span>
                                                        <span className="text-xs text-gray-600">debajo</span>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="font-mono text-sm">inter-</span>
                                                        <span className="text-xs text-gray-600">entre</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Raíces esenciales por sistemas</h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Sistema</th>
                                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Raíz</th>
                                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Significado</th>
                                                        <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Ejemplo EMT</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200">
                                                    <tr className="hover:bg-red-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-red-600">Cardiovascular</td>
                                                        <td className="py-3 px-4 text-sm font-mono">cardi-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Corazón</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Cardiopatía, Pericarditis</td>
                                                    </tr>
                                                    <tr className="hover:bg-red-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-red-600">Cardiovascular</td>
                                                        <td className="py-3 px-4 text-sm font-mono">angio-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Vaso sanguíneo</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Angina, Angioplastia</td>
                                                    </tr>
                                                    <tr className="hover:bg-blue-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-blue-600">Respiratorio</td>
                                                        <td className="py-3 px-4 text-sm font-mono">pneumo-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Pulmón/aire</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Neumonía, Neumotórax</td>
                                                    </tr>
                                                    <tr className="hover:bg-blue-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-blue-600">Respiratorio</td>
                                                        <td className="py-3 px-4 text-sm font-mono">bronco-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Bronquio</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Broncoespasmo, Bronquitis</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-purple-600">Neurológico</td>
                                                        <td className="py-3 px-4 text-sm font-mono">neuro-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Nervio/sistema nervioso</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Neuropatía, Neurología</td>
                                                    </tr>
                                                    <tr className="hover:bg-purple-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-purple-600">Neurológico</td>
                                                        <td className="py-3 px-4 text-sm font-mono">cerebro-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Cerebro</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Cerebrovascular, Cerebroespinal</td>
                                                    </tr>
                                                    <tr className="hover:bg-green-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-green-600">Gastrointestinal</td>
                                                        <td className="py-3 px-4 text-sm font-mono">gastro-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Estómago</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Gastritis, Gastroenteritis</td>
                                                    </tr>
                                                    <tr className="hover:bg-orange-50">
                                                        <td className="py-3 px-4 text-sm font-medium text-orange-600">Sangre</td>
                                                        <td className="py-3 px-4 text-sm font-mono">hemo-/hema-</td>
                                                        <td className="py-3 px-4 text-sm text-gray-700">Sangre</td>
                                                        <td className="py-3 px-4 text-sm text-gray-600">Hemorragia, Hematoma</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sufijos críticos para paramédicos</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-lg">
                                                <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                                                    <MdLightbulb className="w-5 h-5 mr-2" />
                                                    Condiciones Patológicas
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-mono text-red-600">-itis</span>
                                                            <span className="text-sm text-gray-600">inflamación</span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">Ej: Gastritis, Bronquitis, Meningitis</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-mono text-orange-600">-algia</span>
                                                            <span className="text-sm text-gray-600">dolor</span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">Ej: Neuralgia, Mialgia, Cefalgia</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-mono text-yellow-600">-emia</span>
                                                            <span className="text-sm text-gray-600">en la sangre</span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">Ej: Hipoglucemia, Anemia, Septicemia</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-5 rounded-lg">
                                                <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                                                    <MdSchool className="w-5 h-5 mr-2" />
                                                    Procedimientos y Estudios
                                                </h3>
                                                <div className="space-y-3">
                                                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-mono text-blue-600">-scopia</span>
                                                            <span className="text-sm text-gray-600">observar</span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">Ej: Endoscopia, Laparoscopia</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-mono text-green-600">-grafía</span>
                                                            <span className="text-sm text-gray-600">registro/imagen</span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">Ej: Radiografía, Ecografía</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                                                        <div className="flex justify-between items-center mb-1">
                                                            <span className="font-mono text-purple-600">-tomía</span>
                                                            <span className="text-sm text-gray-600">corte/incisión</span>
                                                        </div>
                                                        <p className="text-xs text-gray-700">Ej: Traqueotomía, Cricotiroidotomía</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-orange-800 flex items-center">
                                            <MdPlayArrow className="w-6 h-6 mr-2" />
                                            Ejercicio práctico: Construye términos
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div className="bg-white p-4 rounded-lg">
                                                <p className="font-medium text-gray-800 mb-2">Frecuencia cardíaca lenta:</p>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="bg-red-100 px-2 py-1 rounded text-red-700">bradi-</span>
                                                    <span className="text-gray-500">+</span>
                                                    <span className="bg-blue-100 px-2 py-1 rounded text-blue-700">-cardia</span>
                                                    <span className="text-gray-500">=</span>
                                                    <span className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">bradicardia</span>
                                                </div>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg">
                                                <p className="font-medium text-gray-800 mb-2">Inflamación de los bronquios:</p>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="bg-blue-100 px-2 py-1 rounded text-blue-700">bronco-</span>
                                                    <span className="text-gray-500">+</span>
                                                    <span className="bg-red-100 px-2 py-1 rounded text-red-700">-itis</span>
                                                    <span className="text-gray-500">=</span>
                                                    <span className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">bronquitis</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'abbreviations' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Abreviaturas críticas para paramédicos</h2>
                                        <p className="text-gray-700 mb-4">
                                            Las abreviaturas son esenciales en la documentación rápida y comunicación en emergencias. 
                                            Aquí están organizadas por categorías para facilitar su memorización.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Signos vitales */}
                                        <div className="bg-red-50 p-5 rounded-lg">
                                            <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                                                <FaHeart className="w-5 h-5 mr-2" />
                                                Signos Vitales
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-red-600 font-bold">TA/PA</span>
                                                    <span className="text-sm text-gray-700">Tensión/Presión Arterial</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-red-600 font-bold">FC</span>
                                                    <span className="text-sm text-gray-700">Frecuencia Cardíaca</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-red-600 font-bold">FR</span>
                                                    <span className="text-sm text-gray-700">Frecuencia Respiratoria</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-red-600 font-bold">SpO₂</span>
                                                    <span className="text-sm text-gray-700">Saturación de Oxígeno</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-red-600 font-bold">T°</span>
                                                    <span className="text-sm text-gray-700">Temperatura</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Emergencias cardiovasculares */}
                                        <div className="bg-blue-50 p-5 rounded-lg">
                                            <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                                                <FaHeart className="w-5 h-5 mr-2" />
                                                Cardiovascular
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-blue-600 font-bold">IAM</span>
                                                    <span className="text-sm text-gray-700">Infarto Agudo de Miocardio</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-blue-600 font-bold">PCR</span>
                                                    <span className="text-sm text-gray-700">Paro Cardiorrespiratorio</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-blue-600 font-bold">EVC</span>
                                                    <span className="text-sm text-gray-700">Evento Vascular Cerebral</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-blue-600 font-bold">TEP</span>
                                                    <span className="text-sm text-gray-700">Tromboembolismo Pulmonar</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-blue-600 font-bold">TVP</span>
                                                    <span className="text-sm text-gray-700">Trombosis Venosa Profunda</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Respiratorio */}
                                        <div className="bg-green-50 p-5 rounded-lg">
                                            <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                                                <FaLungs className="w-5 h-5 mr-2" />
                                                Respiratorio
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-green-600 font-bold">EPOC</span>
                                                    <span className="text-sm text-gray-700">Enfermedad Pulmonar Obstructiva Crónica</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-green-600 font-bold">SDRA</span>
                                                    <span className="text-sm text-gray-700">Síndrome de Dificultad Respiratoria Aguda</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-green-600 font-bold">NAC</span>
                                                    <span className="text-sm text-gray-700">Neumonía Adquirida en Comunidad</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-green-600 font-bold">OVA</span>
                                                    <span className="text-sm text-gray-700">Obstrucción de Vía Aérea</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Neurológico */}
                                        <div className="bg-purple-50 p-5 rounded-lg">
                                            <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                                                <FaBrain className="w-5 h-5 mr-2" />
                                                Neurológico
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-purple-600 font-bold">ECG</span>
                                                    <span className="text-sm text-gray-700">Escala de Coma de Glasgow</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-purple-600 font-bold">TEC</span>
                                                    <span className="text-sm text-gray-700">Traumatismo Encéfalo Craneano</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-purple-600 font-bold">HIC</span>
                                                    <span className="text-sm text-gray-700">Hipertensión Intracraneal</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-purple-600 font-bold">AIT</span>
                                                    <span className="text-sm text-gray-700">Ataque Isquémico Transitorio</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Procedimientos */}
                                        <div className="bg-orange-50 p-5 rounded-lg">
                                            <h3 className="font-semibold text-orange-700 mb-3 flex items-center">
                                                <MdSchool className="w-5 h-5 mr-2" />
                                                Procedimientos
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-orange-600 font-bold">RCP</span>
                                                    <span className="text-sm text-gray-700">Reanimación Cardiopulmonar</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-orange-600 font-bold">SVB</span>
                                                    <span className="text-sm text-gray-700">Soporte Vital Básico</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-orange-600 font-bold">SVA</span>
                                                    <span className="text-sm text-gray-700">Soporte Vital Avanzado</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-orange-600 font-bold">IOT</span>
                                                    <span className="text-sm text-gray-700">Intubación Orotraqueal</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-orange-600 font-bold">DEA</span>
                                                    <span className="text-sm text-gray-700">Desfibrilador Externo Automático</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Medicamentos y vías */}
                                        <div className="bg-yellow-50 p-5 rounded-lg">
                                            <h3 className="font-semibold text-yellow-700 mb-3 flex items-center">
                                                <MdLightbulb className="w-5 h-5 mr-2" />
                                                Medicamentos y Vías
                                            </h3>
                                            <div className="space-y-2">
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-yellow-600 font-bold">IV</span>
                                                    <span className="text-sm text-gray-700">Intravenoso</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-yellow-600 font-bold">IM</span>
                                                    <span className="text-sm text-gray-700">Intramuscular</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-yellow-600 font-bold">SC</span>
                                                    <span className="text-sm text-gray-700">Subcutáneo</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-yellow-600 font-bold">SL</span>
                                                    <span className="text-sm text-gray-700">Sublingual</span>
                                                </div>
                                                <div className="bg-white p-3 rounded flex justify-between items-center">
                                                    <span className="font-mono text-yellow-600 font-bold">VO</span>
                                                    <span className="text-sm text-gray-700">Vía Oral</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                            <BsLightning className="w-6 h-6 mr-2 text-yellow-500" />
                                            Consejos para memorizar abreviaturas
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-green-500 mr-2">✓</span>
                                                    Agrupa por sistemas (cardiovascular, respiratorio, etc.)
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-green-500 mr-2">✓</span>
                                                    Practica con casos clínicos reales
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-green-500 mr-2">✓</span>
                                                    Crea tarjetas de memoria (flashcards)
                                                </li>
                                            </ul>
                                            <ul className="space-y-2 text-gray-700">
                                                <li className="flex items-start">
                                                    <span className="text-red-500 mr-2">⚠</span>
                                                    Usa solo abreviaturas estándar y reconocidas
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-red-500 mr-2">⚠</span>
                                                    En caso de duda, escribe el término completo
                                                </li>
                                                <li className="flex items-start">
                                                    <span className="text-red-500 mr-2">⚠</span>
                                                    Verifica que el contexto sea claro
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos interactivos</h2>

                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-2 text-orange-600 flex items-center">
                                                <FaUser className="w-5 h-5 mr-2" />
                                                Caso 1: Construcción de términos
                                            </h3>
                                            <div className="bg-white p-4 rounded-lg mb-4">
                                                <p className="italic text-gray-600 mb-3">
                                                    <strong>Escenario:</strong> Paciente masculino de 65 años presenta dolor en el pecho y frecuencia cardíaca de 45 lpm.
                                                </p>
                                                <div className="space-y-3">
                                                    <div className="p-3 bg-orange-50 rounded">
                                                        <p className="font-medium text-orange-800 mb-2">¿Cómo describes la frecuencia cardíaca?</p>
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <span className="bg-blue-100 px-2 py-1 rounded text-blue-700">bradi-</span>
                                                            <span className="text-gray-500">+</span>
                                                            <span className="bg-red-100 px-2 py-1 rounded text-red-700">-cardia</span>
                                                            <span className="text-gray-500">=</span>
                                                            <span className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">bradicardia</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 bg-blue-50 rounded">
                                                        <p className="font-medium text-blue-800 mb-2">¿Cómo describes el dolor en el pecho?</p>
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <span className="bg-purple-100 px-2 py-1 rounded text-purple-700">torac-</span>
                                                            <span className="text-gray-500">+</span>
                                                            <span className="bg-red-100 px-2 py-1 rounded text-red-700">-algia</span>
                                                            <span className="text-gray-500">=</span>
                                                            <span className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">toracalgia</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-2 text-blue-600 flex items-center">
                                                <FaLungs className="w-5 h-5 mr-2" />
                                                Caso 2: Análisis de abreviaturas
                                            </h3>
                                            <div className="bg-white p-4 rounded-lg mb-4">
                                                <p className="italic text-gray-600 mb-3">
                                                    <strong>Reporte:</strong> "Paciente con PCR, se inicia RCP y SVB. TA: 0/0, FC: 0, FR: 0, SpO₂: indetectable."
                                                </p>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                                                        <span className="font-mono font-bold text-red-600">PCR</span>
                                                        <span className="text-sm text-gray-700">Paro Cardiorrespiratorio</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-2 bg-orange-50 rounded">
                                                        <span className="font-mono font-bold text-orange-600">RCP</span>
                                                        <span className="text-sm text-gray-700">Reanimación Cardiopulmonar</span>
                                                    </div>
                                                    <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                                                        <span className="font-mono font-bold text-blue-600">SVB</span>
                                                        <span className="text-sm text-gray-700">Soporte Vital Básico</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-purple-600 flex items-center">
                                            <MdLightbulb className="w-6 h-6 mr-2" />
                                            Ejercicio 3: Descompón el término médico
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-gray-800 mb-3">Gastroenteritis</h4>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between p-2 bg-orange-100 rounded">
                                                        <span className="font-mono text-orange-700">gastro-</span>
                                                        <span className="text-sm text-gray-600">estómago</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-blue-100 rounded">
                                                        <span className="font-mono text-blue-700">enter-</span>
                                                        <span className="text-sm text-gray-600">intestino</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-red-100 rounded">
                                                        <span className="font-mono text-red-700">-itis</span>
                                                        <span className="text-sm text-gray-600">inflamación</span>
                                                    </div>
                                                    <div className="mt-3 p-3 bg-green-100 rounded text-center">
                                                        <span className="font-semibold text-green-800">
                                                            = Inflamación del estómago e intestino
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg">
                                                <h4 className="font-semibold text-gray-800 mb-3">Polineuropatía</h4>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between p-2 bg-purple-100 rounded">
                                                        <span className="font-mono text-purple-700">poli-</span>
                                                        <span className="text-sm text-gray-600">muchos/múltiple</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-blue-100 rounded">
                                                        <span className="font-mono text-blue-700">neuro-</span>
                                                        <span className="text-sm text-gray-600">nervio</span>
                                                    </div>
                                                    <div className="flex items-center justify-between p-2 bg-red-100 rounded">
                                                        <span className="font-mono text-red-700">-patía</span>
                                                        <span className="text-sm text-gray-600">enfermedad</span>
                                                    </div>
                                                    <div className="mt-3 p-3 bg-green-100 rounded text-center">
                                                        <span className="font-semibold text-green-800">
                                                            = Enfermedad de múltiples nervios
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                                            <MdQuiz className="w-6 h-6 mr-2" />
                                            Ejercicio 4: Documenta como paramédico
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg">
                                            <p className="text-gray-700 mb-4">
                                                <strong>Situación:</strong> Paciente femenina de 45 años con dificultad respiratoria, frecuencia respiratoria de 32/min, 
                                                saturación de oxígeno del 88%, presión arterial de 160/95 mmHg y frecuencia cardíaca de 110 lpm.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2">Términos médicos correctos:</h4>
                                                    <ul className="space-y-1 text-sm text-gray-700">
                                                        <li><strong>Taquipnea:</strong> FR 32/min (normal: 12-20)</li>
                                                        <li><strong>Hipoxemia:</strong> SpO₂ 88% (normal: &gt;95%)</li>
                                                        <li><strong>Hipertensión:</strong> TA 160/95 mmHg</li>
                                                        <li><strong>Taquicardia:</strong> FC 110 lpm (normal: 60-100)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-800 mb-2">Reporte usando abreviaturas:</h4>
                                                    <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                                                        <p>"Mujer 45a con disnea"</p>
                                                        <p>"TA: 160/95 mmHg"</p>
                                                        <p>"FC: 110 lpm (taquicardia)"</p>
                                                        <p>"FR: 32/min (taquipnea)"</p>
                                                        <p>"SpO₂: 88% (hipoxemia)"</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                                            <HiAcademicCap className="w-6 h-6 mr-2" />
                                            Consejos para mejorar tu terminología médica
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <MdSchool className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                                                <h4 className="font-semibold text-gray-800 mb-2">Practica diariamente</h4>
                                                <p className="text-sm text-gray-600">Dedica 15 minutos diarios a repasar términos nuevos</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <HiDocumentText className="w-12 h-12 text-green-500 mx-auto mb-2" />
                                                <h4 className="font-semibold text-gray-800 mb-2">Documenta casos</h4>
                                                <p className="text-sm text-gray-600">Usa terminología correcta en tus reportes de práctica</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg text-center">
                                                <MdLightbulb className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                                                <h4 className="font-semibold text-gray-800 mb-2">Crea asociaciones</h4>
                                                <p className="text-sm text-gray-600">Relaciona términos con casos que hayas vivido</p>
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
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                        <li>Tablas y glosarios médicos oficiales de la SSA y la Cruz Roja Mexicana.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Educación y glosarios médicos</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Educación y terminología</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Medscape - Diccionario médico y calculadoras</li>
                                        <li>Tabers Medical Dictionary</li>
                                        <li>Paramedicine - Glosarios y guías clínicas</li>
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

