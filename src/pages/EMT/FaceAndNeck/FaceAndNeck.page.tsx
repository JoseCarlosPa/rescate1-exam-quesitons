import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./FaceAndNeck.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdFace6, MdQuiz, MdWarning, MdCheckCircle, MdOutlineTimer} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaFirstAid, FaHeadSideVirus} from "react-icons/fa";
import {FiAlertTriangle, FiUser, FiEye} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function FaceAndNeck(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return(
        <SEOWrapper
            title="Lesiones de Cara y Cuello EMT | Evaluación, Manejo y Casos Clínicos"
            description="Guía completa sobre lesiones de cara y cuello para Técnicos en Atención Médica Prehospitalaria: evaluación XABCDE, manejo de vía aérea, lesiones oculares, heridas penetrantes y casos clínicos."
            keywords="lesiones faciales, trauma de cuello, manejo vía aérea, lesiones oculares, hemorragia facial, enfisema subcutáneo, fractura mandibular, heridas penetrantes, emergencias médicas"
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
                                <MdFace6 className="w-24 h-24 mb-1 text-orange-500" />
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Lesiones de Cara y Cuello</h1>
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
                                to={`${AllRoutes.FACE_AND_NECK}/exam`}
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
                            <a href="https://drive.google.com/file/d/1qfls7WXgF2-4p3Ogg5X0cMJC_wpc-XkI/view?usp=drive_link"
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
                                    Evaluación y Manejo
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
                                    {/* Alerta de importancia crítica */}
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                            <div className="flex items-center mb-4">
                                <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                <h2 className="text-2xl font-bold text-red-700">¡Atención Crítica!</h2>
                            </div>
                            <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                Las lesiones de cara y cuello pueden <strong>comprometer la vida</strong> en minutos debido a obstrucción de vía aérea y hemorragia masiva.
                            </p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded shadow-sm text-center">
                                    <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                    <p className="font-bold text-red-600">Vía Aérea</p>
                                    <p className="text-sm">Primera prioridad absoluta</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm text-center">
                                    <FaHeadSideVirus className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                    <p className="font-bold text-orange-600">Control Cervical</p>
                                    <p className="text-sm">Asumir lesión medular</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm text-center">
                                    <FaFirstAid className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                                    <p className="font-bold text-red-700">Hemorragia</p>
                                    <p className="text-sm">Control inmediato</p>
                                </div>
                            </div>
                        </div>
                                    {/* Protocolo XABCDE específico */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Protocolo XABCDE en Lesiones de Cara y Cuello
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-red-700 mb-3 text-center">X - HEMORRAGIA</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Control inmediato con presión directa</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Identificar hemorragia exanguinante</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Cuidado con grandes vasos del cuello</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A - VÍA AÉREA</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Asumir lesión cervical siempre</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Aspirar sangre y secreciones</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Tracción mandibular con control C-spine</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B - RESPIRACIÓN</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Oxígeno a alto flujo</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Evaluar neumotórax</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Buscar enfisema subcutáneo</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de alarma inmediatos */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                    <FaFirstAid className="w-4 h-4 mr-2"/>
                                                    Compromiso de Vía Aérea:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Estridor (obstrucción alta)</li>
                                                    <li>Gorgoteo por sangre/secreciones</li>
                                                    <li>Disfonía (cambio en la voz)</li>
                                                    <li>Enfisema subcutáneo palpable</li>
                                                    <li>Hematoma en expansión en cuello</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    Hemorragia Crítica:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Sangrado arterial pulsátil</li>
                                                    <li>Epistaxis masiva no controlable</li>
                                                    <li>Herida soplante en cuello</li>
                                                    <li>Palidez y signos de shock</li>
                                                    <li>Hematoma orbitario (ojo de mapache)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mecanismos de lesión comunes */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Mecanismos de Lesión y Patrones Esperados</h2>
                                        <div className="grid lg:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <h3 className="font-medium text-lg mb-2 text-blue-700">Trauma Contuso Facial</h3>
                                                    <p className="text-sm text-gray-600 mb-2"><strong>Mecanismos:</strong> Peleas, deportes, accidentes vehiculares</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Fracturas nasales (más comunes)</li>
                                                        <li>Fractura mandibular</li>
                                                        <li>Contusión orbitaria</li>
                                                        <li>Avulsión dental</li>
                                                        <li>Posible LCT asociada</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <h3 className="font-medium text-lg mb-2 text-red-700">Heridas Penetrantes</h3>
                                                    <p className="text-sm text-gray-600 mb-2"><strong>Mecanismos:</strong> Arma blanca, PAF, objetos punzocortantes</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Lesión vascular (carótida, yugular)</li>
                                                        <li>Lesión de vía aérea (laringe, tráquea)</li>
                                                        <li>Lesión esofágica</li>
                                                        <li>Lesión medular cervical</li>
                                                        <li>Riesgo de embolia aérea</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <h3 className="font-medium text-lg mb-2 text-green-700">Quemaduras</h3>
                                                    <p className="text-sm text-gray-600 mb-2"><strong>Mecanismos:</strong> Térmicas, químicas, eléctricas</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Edema progresivo de vía aérea</li>
                                                        <li>Lesiones oculares por químicos</li>
                                                        <li>Quemaduras de córnea</li>
                                                        <li>Inhalación de humo</li>
                                                        <li>Deterioro respiratorio tardío</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-purple-50 p-4 rounded-lg">
                                                    <h3 className="font-medium text-lg mb-2 text-purple-700">Trauma por Estallido</h3>
                                                    <p className="text-sm text-gray-600 mb-2"><strong>Mecanismos:</strong> Explosiones, descompresión</p>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Ruptura timpánica</li>
                                                        <li>Lesión ocular por presión</li>
                                                        <li>Barotrauma pulmonar</li>
                                                        <li>Fracturas faciales múltiples</li>
                                                        <li>LCT por onda expansiva</li>
                                                    </ul>
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
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    Hacer SIEMPRE:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Inmovilización cervical temprana</li>
                                                    <li>Aspiración frecuente de vía aérea</li>
                                                    <li>Control directo de hemorragia</li>
                                                    <li>Evaluación neurológica seriada</li>
                                                    <li>Cubrir ambos ojos en lesión ocular</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <MdWarning className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Retirar objetos empalados</li>
                                                    <li>Sondear heridas penetrantes</li>
                                                    <li>Comprimir ambas carótidas</li>
                                                    <li>Hiperextender cuello en trauma</li>
                                                    <li>Intentar reintroducir globo ocular</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'anatomy' && (
                                <div className="space-y-8">
                                    {/* Anatomía visual mejorada */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaHeadSideVirus className="w-6 h-6 mr-2 text-orange-500"/>
                                            Anatomía Clínica de Cara y Cuello
                                        </h2>
                                        <div className="grid lg:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                    <h3 className="text-xl font-bold text-blue-700 mb-4">Estructuras Faciales Críticas</h3>
                                                    <div className="space-y-4">
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Huesos de la Cara</h4>
                                                                <p className="text-sm text-gray-600">Maxilar superior, mandíbula, nasales, cigomáticos, orbitales</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Órbitas Oculares</h4>
                                                                <p className="text-sm text-gray-600">7 huesos que protegen el globo ocular, músculos extraoculares, nervio óptico</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Cavidad Nasal</h4>
                                                                <p className="text-sm text-gray-600">Septum nasal, cornetes, conexión con senos paranasales</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Cavidad Oral</h4>
                                                                <p className="text-sm text-gray-600">32 dientes en adulto, lengua, paladar duro y blando</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                                    <h3 className="text-xl font-bold text-red-700 mb-4">Estructuras del Cuello</h3>
                                                    <div className="space-y-4">
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Vía Aérea</h4>
                                                                <p className="text-sm text-gray-600">Laringe (epiglotis, cuerdas vocales), tráquea</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Grandes Vasos</h4>
                                                                <p className="text-sm text-gray-600">Arterias carótidas, venas yugulares internas/externas</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Columna Cervical</h4>
                                                                <p className="text-sm text-gray-600">7 vértebras cervicales (C1-C7), médula espinal</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-3">
                                                            <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                                            <div>
                                                                <h4 className="font-semibold">Otras Estructuras</h4>
                                                                <p className="text-sm text-gray-600">Esófago, glándula tiroides, nervios craneales</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="flex justify-center items-start">
                                                <div className="text-center">
                                                    <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                                        <div className="text-6xl mb-2">👤</div>
                                                        <p className="text-sm text-gray-600">Anatomía de cabeza y cuello</p>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                                        <div className="bg-blue-100 p-2 rounded text-blue-700">Cara</div>
                                                        <div className="bg-red-100 p-2 rounded text-red-700">Cuello</div>
                                                        <div className="bg-green-100 p-2 rounded text-green-700">Vía Aérea</div>
                                                        <div className="bg-purple-100 p-2 rounded text-purple-700">Vasos</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Zonas anatómicas del cuello */}
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                                            <FaFirstAid className="w-5 h-5 mr-2"/>
                                            Zonas Anatómicas del Cuello (Importancia Clínica)
                                        </h3>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-orange-800 mb-2">Zona I (Base)</h4>
                                                <p className="text-sm text-gray-600 mb-2">Desde clavículas hasta cartílago cricoides</p>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Vasos subclavios</li>
                                                    <li>• Vértice pulmonar</li>
                                                    <li>• Esófago superior</li>
                                                    <li>• Tráquea inferior</li>
                                                </ul>
                                                <p className="text-xs text-red-600 mt-2"><strong>Alta mortalidad</strong></p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-orange-800 mb-2">Zona II (Media)</h4>
                                                <p className="text-sm text-gray-600 mb-2">Desde cricoides hasta ángulo mandibular</p>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Carótidas</li>
                                                    <li>• Yugulares</li>
                                                    <li>• Laringe</li>
                                                    <li>• Faringe/esófago</li>
                                                </ul>
                                                <p className="text-xs text-green-600 mt-2"><strong>Más accesible</strong></p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-bold text-orange-800 mb-2">Zona III (Superior)</h4>
                                                <p className="text-sm text-gray-600 mb-2">Desde ángulo mandibular hasta base del cráneo</p>
                                                <ul className="text-sm space-y-1 text-gray-700">
                                                    <li>• Carótida interna</li>
                                                    <li>• Vértebras cervicales altas</li>
                                                    <li>• Nervios craneales</li>
                                                    <li>• Faringe superior</li>
                                                </ul>
                                                <p className="text-xs text-orange-600 mt-2"><strong>Difícil acceso</strong></p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Diferencias anatómicas por edad */}
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Diferencias Anatómicas Importantes por Edad</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border rounded-lg shadow-sm">
                                                <thead className="bg-gray-100">
                                                    <tr>
                                                        <th className="py-3 px-4 border text-left">Estructura</th>
                                                        <th className="py-3 px-4 border text-center">Lactantes/Niños</th>
                                                        <th className="py-3 px-4 border text-center">Adultos</th>
                                                        <th className="py-3 px-4 border text-center">Adultos Mayores</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border font-medium">Cabeza</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Proporcionalmente más grande</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Proporcional</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Menor masa muscular</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border font-medium">Lengua</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Más grande relativamente</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Normal</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Pérdida de tono</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border font-medium">Laringe</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Más alta y anterior</td>
                                                        <td className="py-3 px-4 border text-center text-sm">C5-C6</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Cartílagos calcificados</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border font-medium">Epiglotis</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Más grande y blanda</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Firme</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Rígida</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 border font-medium">Vía aérea</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Estrecha a nivel cricoides</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Estrecha a nivel cuerdas</td>
                                                        <td className="py-3 px-4 border text-center text-sm">Reducida elasticidad</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Puntos vulnerables */}
                                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                            <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                            Puntos Anatómicos Vulnerables - Conocimiento Critical
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Estructuras de Alto Riesgo:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                                        <span><strong>Triángulo anterior del cuello:</strong> Carótidas, yugulares, tráquea</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                                        <span><strong>Órbita ocular:</strong> Fractura por estallido común</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                                        <span><strong>Hueso nasal:</strong> Fractura facial más común</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                                        <span><strong>Mandíbula:</strong> Fractura bilateral frecuente</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-3">Implicaciones Clínicas:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Trauma facial severo = sospechar LCT</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Lesión por encima de clavículas = C-spine</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Ojo de mapache = fractura base cráneo</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Battle sign = fractura temporal</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'treatment' && (
                                <div className="space-y-8">
                                    {/* Algoritmo de evaluación */}
                                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-blue-500"/>
                                            Algoritmo de Evaluación y Manejo Sistemático
                                        </h2>
                                        <div className="grid lg:grid-cols-5 gap-4">
                                            <div className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-300">
                                                <h3 className="font-bold text-red-700 mb-2">X</h3>
                                                <h4 className="font-semibold text-red-800 mb-2">HEMORRAGIA</h4>
                                                <ul className="text-xs space-y-1 text-gray-700">
                                                    <li>• Presión directa</li>
                                                    <li>• Control arterial</li>
                                                    <li>• Vendaje oclusivo si aplica</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-100 p-4 rounded-lg text-center border-2 border-blue-300">
                                                <h3 className="font-bold text-blue-700 mb-2">A</h3>
                                                <h4 className="font-semibold text-blue-800 mb-2">VÍA AÉREA</h4>
                                                <ul className="text-xs space-y-1 text-gray-700">
                                                    <li>• Control cervical</li>
                                                    <li>• Aspiración</li>
                                                    <li>• Tracción mandibular</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-300">
                                                <h3 className="font-bold text-green-700 mb-2">B</h3>
                                                <h4 className="font-semibold text-green-800 mb-2">RESPIRACIÓN</h4>
                                                <ul className="text-xs space-y-1 text-gray-700">
                                                    <li>• O₂ alto flujo</li>
                                                    <li>• Evaluar neumotórax</li>
                                                    <li>• Enfisema subcutáneo</li>
                                                </ul>
                                            </div>
                                            <div className="bg-purple-100 p-4 rounded-lg text-center border-2 border-purple-300">
                                                <h3 className="font-bold text-purple-700 mb-2">C</h3>
                                                <h4 className="font-semibold text-purple-800 mb-2">CIRCULACIÓN</h4>
                                                <ul className="text-xs space-y-1 text-gray-700">
                                                    <li>• Pulso/TA</li>
                                                    <li>• Perfusión</li>
                                                    <li>• Acceso IV</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-100 p-4 rounded-lg text-center border-2 border-orange-300">
                                                <h3 className="font-bold text-orange-700 mb-2">D</h3>
                                                <h4 className="font-semibold text-orange-800 mb-2">NEUROLÓGICO</h4>
                                                <ul className="text-xs space-y-1 text-gray-700">
                                                    <li>• Glasgow</li>
                                                    <li>• Pupilas</li>
                                                    <li>• Función motora</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo específico por tipo de lesión */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo Específico por Tipo de Lesión</h2>
                                        
                                        {/* Lesiones oculares */}
                                        <div className="space-y-6">
                                            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                                                    <FiEye className="w-5 h-5 mr-2"/>
                                                    Lesiones Oculares - Protocolo Específico
                                                </h3>
                                                <div className="grid lg:grid-cols-2 gap-6">
                                                    <div className="space-y-4">
                                                        <div className="bg-white p-4 rounded shadow-sm">
                                                            <h4 className="font-bold text-red-600 mb-2">Objeto Empalado en Ojo</h4>
                                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                                <li>NO retirar el objeto</li>
                                                                <li>Estabilizar con vendajes voluminosos</li>
                                                                <li>Cubrir AMBOS ojos</li>
                                                                <li>Posición semisentada</li>
                                                                <li>Transporte inmediato</li>
                                                            </ol>
                                                            <p className="text-xs text-red-600 mt-2"><strong>Razón:</strong> Movimientos simpáticos pueden agravar la lesión</p>
                                                        </div>
                                                        <div className="bg-white p-4 rounded shadow-sm">
                                                            <h4 className="font-bold text-blue-600 mb-2">Quemadura Química Ocular</h4>
                                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                                <li>Irrigación inmediata con SSN o agua</li>
                                                                <li>Mínimo 20 minutos continuos</li>
                                                                <li>Desde canto interno hacia externo</li>
                                                                <li>Continuar durante transporte</li>
                                                                <li>Proteger ojo no afectado</li>
                                                            </ol>
                                                            <p className="text-xs text-blue-600 mt-2"><strong>Tiempo crítico:</strong> Cada segundo cuenta</p>
                                                        </div>
                                                    </div>
                                                    <div className="space-y-4">
                                                        <div className="bg-white p-4 rounded shadow-sm">
                                                            <h4 className="font-bold text-green-600 mb-2">Avulsión del Globo Ocular</h4>
                                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                                <li>NO intentar reintroducir</li>
                                                                <li>Cubrir con gasa estéril húmeda</li>
                                                                <li>Proteger de la presión</li>
                                                                <li>Cubrir ojo contralateral</li>
                                                                <li>Posición cómoda para el paciente</li>
                                                            </ol>
                                                        </div>
                                                        <div className="bg-white p-4 rounded shadow-sm">
                                                            <h4 className="font-bold text-purple-600 mb-2">Contusión Ocular Severa</h4>
                                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                                <li>Evaluación visual básica</li>
                                                                <li>Protector ocular rígido</li>
                                                                <li>Sospechar fractura orbitaria</li>
                                                                <li>No aplicar presión</li>
                                                                <li>Evaluar signos neurológicos</li>
                                                            </ol>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Lesiones de cuello */}
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                                                    <FaFirstAid className="w-5 h-5 mr-2"/>
                                                    Lesiones de Cuello - Manejo Crítico
                                                </h3>
                                                <div className="grid lg:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="font-semibold text-red-800 mb-3">Heridas Penetrantes</h4>
                                                        <div className="bg-white p-4 rounded shadow-sm mb-4">
                                                            <h5 className="font-medium mb-2">Protocolo Inmediato:</h5>
                                                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                                <li>Control cervical manual inmediato</li>
                                                                <li>NO retirar objetos empalados</li>
                                                                <li>Control hemorragia con presión directa</li>
                                                                <li>NO comprimir ambas carótidas simultáneamente</li>
                                                                <li>Vendaje oclusivo según protocolo</li>
                                                            </ol>
                                                        </div>
                                                        <div className="bg-yellow-100 p-3 rounded">
                                                            <h5 className="font-medium text-yellow-800 mb-1">Vendaje Oclusivo:</h5>
                                                            <p className="text-sm text-gray-700">Aplicar si hay herida soplante o sospecha de lesión vascular mayor para prevenir embolia aérea</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-red-800 mb-3">Trauma Contuso</h4>
                                                        <div className="bg-white p-4 rounded shadow-sm mb-4">
                                                            <h5 className="font-medium mb-2">Evaluación Específica:</h5>
                                                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                                <li>Cambios en la voz (disfonía)</li>
                                                                <li>Enfisema subcutáneo palpable</li>
                                                                <li>Dolor al tragar</li>
                                                                <li>Estridor o dificultad respiratoria</li>
                                                                <li>Hematoma en expansión</li>
                                                            </ul>
                                                        </div>
                                                        <div className="bg-orange-100 p-3 rounded">
                                                            <h5 className="font-medium text-orange-800 mb-1">Alerta:</h5>
                                                            <p className="text-sm text-gray-700">Cualquier signo = lesión de vía aérea potencial. Preparar para vía aérea quirúrgica</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Otras lesiones faciales */}
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                                <h3 className="text-xl font-bold text-blue-700 mb-4">Otras Lesiones Faciales</h3>
                                                <div className="grid md:grid-cols-3 gap-4">
                                                    <div className="bg-white p-4 rounded shadow-sm">
                                                        <h4 className="font-bold text-blue-600 mb-2">Epistaxis Severa</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Paciente sentado, inclinado adelante</li>
                                                            <li>Comprimir fosas nasales 10-15 min</li>
                                                            <li>Aplicar hielo en dorso nasal</li>
                                                            <li>Aspirar coágulos si es necesario</li>
                                                            <li>Considerar taponamiento anterior</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-white p-4 rounded shadow-sm">
                                                        <h4 className="font-bold text-green-600 mb-2">Avulsión Dental</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Recuperar el diente</li>
                                                            <li>Manipular solo por la corona</li>
                                                            <li>NO limpiar la raíz</li>
                                                            <li>Guardar en SSN, leche o saliva</li>
                                                            <li>Transporte en 30 min si es posible</li>
                                                        </ol>
                                                    </div>
                                                    <div className="bg-white p-4 rounded shadow-sm">
                                                        <h4 className="font-bold text-purple-600 mb-2">Fracturas Faciales</h4>
                                                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                            <li>Mantener vía aérea permeable</li>
                                                            <li>Control de hemorragia</li>
                                                            <li>Vigilar edema progresivo</li>
                                                            <li>Inmovilizar si es posible</li>
                                                            <li>Evaluación neurológica</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Técnicas avanzadas */}
                                    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-5 h-5 mr-2"/>
                                            Técnicas Avanzadas y Consideraciones Especiales
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Manejo de Vía Aérea Difícil:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>Posición de olfateo modificada (con control cervical)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>Técnica BURP para mejorar visualización</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>Aspiración continua durante procedimientos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                                        <span>Preparar vía aérea quirúrgica de emergencia</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-purple-800 mb-3">Errores Críticos a Evitar:</h4>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>Sondear heridas de cuello con dedos o instrumentos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>Aplicar presión sobre hematoma del cuello</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>Limpiar dientes avulsionados</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                                        <span>Forzar movimientos en fractura mandibular</span>
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
                                        <FiUser className="w-6 h-6 mr-2 text-orange-500"/>
                                        Casos Clínicos Interactivos para Análisis
                                    </h2>

                                    <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
                                        <h3 className="font-bold text-yellow-800 mb-2">📋 Instrucciones para el Análisis</h3>
                                        <p className="text-sm text-gray-700">
                                            Para cada caso, aplica el protocolo XABCDE sistemáticamente. Identifica las prioridades, 
                                            analiza los hallazgos críticos y desarrolla un plan de manejo paso a paso.
                                        </p>
                                    </div>

                                    {/* Caso 1 - Mejorado */}
                                    <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-md border border-red-200">
                                        <h3 className="text-xl font-semibold mb-3 text-red-600 flex items-center">
                                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                            Caso 1: Politraumatismo con Lesiones Faciales Complejas
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <p className="italic text-gray-700 mb-4">
                                                <strong>Escenario:</strong> Motociclista de 28 años sin casco impacta contra vehículo a 60 km/h. 
                                                Paciente masculino encontrado semiconsciente en el pavimento con deformidad facial severa 
                                                y sangrado abundante de boca y nariz.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2 text-red-700">Hallazgos Iniciales:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Consciente pero confuso (GCS 13)</li>
                                                        <li>Epistaxis profusa bilateral</li>
                                                        <li>Deformidad en región mandibular</li>
                                                        <li>Hematoma periorbitario bilateral</li>
                                                        <li>Dientes visiblemente fracturados</li>
                                                        <li>Dificultad para hablar (disartria)</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2 text-red-700">Signos Vitales:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>FC: 115/min</li>
                                                        <li>TA: 100/65 mmHg</li>
                                                        <li>FR: 24/min</li>
                                                        <li>SpO₂: 92% aire ambiente</li>
                                                        <li>Temp: 36.2°C</li>
                                                        <li>Glicemia: 140 mg/dl</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-red-100 p-4 rounded">
                                                <h4 className="font-medium mb-2 flex items-center">
                                                    <MdOutlineTimer className="w-4 h-4 mr-2 text-red-600"/>
                                                    Análisis Crítico - Prioridades Inmediatas:
                                                </h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li><strong>X:</strong> Control de epistaxis con presión directa y posicionamiento</li>
                                                    <li><strong>A:</strong> Compromiso de vía aérea por sangre + posible LCT = Control cervical + aspiración urgente</li>
                                                    <li><strong>B:</strong> Hipoxemia (SpO₂ 92%) = O₂ alto flujo + evaluar neumotórax</li>
                                                    <li><strong>C:</strong> Taquicardia + hipotensión = shock hemorrágico incipiente</li>
                                                    <li><strong>D:</strong> GCS 13 + hematoma periorbitario bilateral = fractura base cráneo probable</li>
                                                </ol>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded">
                                                <h4 className="font-medium mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2 text-green-600"/>
                                                    Plan de Manejo Correcto:
                                                </h4>
                                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                                    <li>Inmovilización cervical completa inmediata</li>
                                                    <li>Aspiración de vía aérea + O₂ 15L/min con mascarilla con reservorio</li>
                                                    <li>Control de epistaxis: posición lateral si es tolerada, presión directa</li>
                                                    <li>Acceso IV x2 + fluidoterapia juiciosa</li>
                                                    <li>Reevaluación neurológica cada 5 minutos</li>
                                                    <li>Transporte código rojo a centro de trauma</li>
                                                    <li>Preparar para vía aérea definitiva en hospital</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 2 - Nuevo y complejo */}
                                    <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md border border-blue-200">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center">
                                            <FaFirstAid className="w-5 h-5 mr-2"/>
                                            Caso 2: Lesión Penetrante de Cuello con Compromiso Multiorgánico
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <p className="italic text-gray-700 mb-4">
                                                <strong>Escenario:</strong> Mujer de 22 años víctima de agresión con arma blanca. 
                                                Herida penetrante en región lateral izquierda del cuello. La paciente está consciente, 
                                                ansiosa y con dificultad para hablar.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2 text-blue-700">Evaluación Física:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Herida de 3cm en zona II del cuello</li>
                                                        <li>Sangrado arterial moderado</li>
                                                        <li>Enfisema subcutáneo palpable</li>
                                                        <li>Voz ronca y disfonía progresiva</li>
                                                        <li>Disfagia (dificultad para tragar)</li>
                                                        <li>Hematoma en lenta expansión</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2 text-blue-700">Signos Vitales (10 min):</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>FC: 110 → 125/min</li>
                                                        <li>TA: 110/70 → 95/60 mmHg</li>
                                                        <li>FR: 22 → 28/min</li>
                                                        <li>SpO₂: 96 → 93%</li>
                                                        <li>Estridor inspiratorio leve</li>
                                                        <li>Ansiedad creciente</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
                                                <h4 className="font-medium mb-2 flex items-center">
                                                    <FiAlertTriangle className="w-4 h-4 mr-2 text-yellow-600"/>
                                                    Signos de Alerta Identificados:
                                                </h4>
                                                <div className="grid md:grid-cols-3 gap-3 text-sm">
                                                    <div className="bg-red-50 p-2 rounded">
                                                        <strong className="text-red-700">Vía Aérea:</strong>
                                                        <ul className="mt-1 text-gray-700">
                                                            <li>• Disfonía progresiva</li>
                                                            <li>• Enfisema subcutáneo</li>
                                                            <li>• Estridor leve</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-blue-50 p-2 rounded">
                                                        <strong className="text-blue-700">Vascular:</strong>
                                                        <ul className="mt-1 text-gray-700">
                                                            <li>• Sangrado arterial</li>
                                                            <li>• Deterioro hemodinámico</li>
                                                            <li>• Hematoma expansivo</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-green-50 p-2 rounded">
                                                        <strong className="text-green-700">Digestivo:</strong>
                                                        <ul className="mt-1 text-gray-700">
                                                            <li>• Disfagia</li>
                                                            <li>• Posible lesión esofágica</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-blue-100 p-4 rounded">
                                                <h4 className="font-medium mb-2 flex items-center">
                                                    <FaFirstAid className="w-4 h-4 mr-2 text-blue-600"/>
                                                    Manejo Correcto Paso a Paso:
                                                </h4>
                                                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>Inmediato:</strong> Control cervical + control hemorragia con presión directa lateral</li>
                                                    <li><strong>Vía aérea:</strong> Preparar para intubación de secuencia rápida o cricotirotomía</li>
                                                    <li><strong>Hemorragia:</strong> Vendaje compresivo SIN comprimir tráquea o carótida contralateral</li>
                                                    <li><strong>Acceso vascular:</strong> 2 vías IV de gran calibre + tipo y cruce</li>
                                                    <li><strong>Monitoreo:</strong> Continuo de la vía aérea y estado hemodinámico</li>
                                                    <li><strong>Transporte:</strong> Inmediato a centro de trauma con quirófano disponible</li>
                                                    <li><strong>Comunicación:</strong> Alerta previa: "lesión penetrante zona II, compromiso de vía aérea"</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3 - Pediátrico */}
                                    <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg shadow-md border border-green-200">
                                        <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center">
                                            <FiEye className="w-5 h-5 mr-2"/>
                                            Caso 3: Trauma Ocular Complejo en Paciente Pediátrico
                                        </h3>
                                        <div className="bg-white p-4 rounded-lg mb-4">
                                            <p className="italic text-gray-700 mb-4">
                                                <strong>Escenario:</strong> Niño de 8 años jugando con fuegos artificiales. 
                                                Explosión a corta distancia con proyección de fragmentos metálicos. 
                                                Padres muy alterados, niño llorando y cubriendo su ojo derecho.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2 text-green-700">Hallazgos al Examen:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>Fragmento metálico visible en córnea derecha</li>
                                                        <li>Sangrado activo del ojo derecho</li>
                                                        <li>Quemaduras superficiales en cara</li>
                                                        <li>El niño no permite examen ocular</li>
                                                        <li>Dolor severo (escala 9/10)</li>
                                                        <li>Fotofobia marcada</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2 text-green-700">Signos Vitales:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                        <li>FC: 130/min (taquicardia por dolor)</li>
                                                        <li>TA: 95/60 mmHg (normal para edad)</li>
                                                        <li>FR: 28/min</li>
                                                        <li>SpO₂: 99% aire ambiente</li>
                                                        <li>Temp: 37.1°C</li>
                                                        <li>Muy ansioso y no cooperativo</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-orange-100 p-4 rounded border border-orange-300">
                                                <h4 className="font-medium mb-2 flex items-center">
                                                    <FiUser className="w-4 h-4 mr-2 text-orange-600"/>
                                                    Consideraciones Especiales Pediátricas:
                                                </h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <strong className="text-orange-700">Manejo Psicológico:</strong>
                                                        <ul className="mt-1 text-gray-700 list-disc list-inside">
                                                            <li>Permitir presencia de padres si es posible</li>
                                                            <li>Explicar procedimientos con lenguaje simple</li>
                                                            <li>Minimizar manipulación innecesaria</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <strong className="text-orange-700">Manejo Técnico:</strong>
                                                        <ul className="mt-1 text-gray-700 list-disc list-inside">
                                                            <li>Protector ocular pediátrico si disponible</li>
                                                            <li>Sedación leve si está protocolizada</li>
                                                            <li>Monitoreo constante de signos vitales</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded">
                                                <h4 className="font-medium mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2 text-green-600"/>
                                                    Protocolo de Manejo Óptimo:
                                                </h4>
                                                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                                                    <li><strong>Estabilización psicológica:</strong> Calmar al niño y padres, explicar que se puede salvar el ojo</li>
                                                    <li><strong>NO retirar el fragmento:</strong> Estabilizar con vendajes suaves alrededor</li>
                                                    <li><strong>Protección ocular:</strong> Cubrir AMBOS ojos con protectores rígidos o vasos plásticos</li>
                                                    <li><strong>Posición:</strong> Semisentado o posición de comodidad</li>
                                                    <li><strong>Manejo del dolor:</strong> Analgesia apropiada para edad y peso</li>
                                                    <li><strong>Prevención de vómito:</strong> Antieméticos si están disponibles</li>
                                                    <li><strong>Transporte suave:</strong> Evitar movimientos bruscos, sirenas si es posible</li>
                                                    <li><strong>Destino:</strong> Hospital con servicio de oftalmología pediátrica</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Sección de autoevaluación */}
                                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                                        <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                                            <BsLightbulb className="w-5 h-5 mr-2"/>
                                            Preguntas de Autoevaluación
                                        </h3>
                                        <div className="space-y-4">
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-medium text-purple-800 mb-2">💭 Reflexiona sobre estos puntos:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                                    <li>¿En qué casos considerarías realizar una cricotirotomía de emergencia?</li>
                                                    <li>¿Cuál es la diferencia entre un vendaje oclusivo de 3 lados vs. 4 lados?</li>
                                                    <li>¿Qué signos te harían sospechar una fractura de base de cráneo?</li>
                                                    <li>¿Cuándo está contraindicada una cánula nasofaríngea?</li>
                                                    <li>¿Cómo manejarías un paciente con lesión ocular bilateral?</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm">
                                                <h4 className="font-medium text-purple-800 mb-2">🎯 Puntos Clave para Recordar:</h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <strong className="text-purple-700">Prioridades Siempre:</strong>
                                                        <ol className="list-decimal list-inside mt-1 text-gray-700">
                                                            <li>Vía aérea con control cervical</li>
                                                            <li>Control de hemorragia exanguinante</li>
                                                            <li>Evaluación neurológica seriada</li>
                                                        </ol>
                                                    </div>
                                                    <div>
                                                        <strong className="text-purple-700">Errores Fatales:</strong>
                                                        <ol className="list-decimal list-inside mt-1 text-gray-700">
                                                            <li>Retirar objetos empalados</li>
                                                            <li>Sondear heridas de cuello</li>
                                                            <li>Comprimir ambas carótidas</li>
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
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                    <li>American College of Surgeons. (2018). <em>ATLS: Advanced Trauma Life Support</em> (10ª edición).</li>
                                    <li>Caroline, N. L. (2019). <em>Nancy Caroline's Emergency Care in the Streets</em> (8ª edición).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.emdocs.net/facial-trauma-pearls-pitfalls/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMDocs - Facial Trauma Pearls and Pitfalls</a></li>
                                    <li><a href="https://emcrit.org/ibcc/penetrating-neck-trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMCrit - Penetrating Neck Trauma</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Medscape - Referencias médicas y calculadoras de trauma</li>
                                    <li>PHTLS - Aplicación oficial con algoritmos</li>
                                    <li>Trauma Team Dynamics - Simuladores de casos</li>
                                    <li>Paramedicine - Protocolos y medicamentos</li>
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

