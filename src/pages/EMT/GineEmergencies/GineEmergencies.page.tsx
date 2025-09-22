import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./GineEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdCheckCircle, MdOutlineTimer, MdQuiz, MdWarning} from "react-icons/md";
import {BsBookHalf, BsExclamationTriangle, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {AiOutlineWoman} from "react-icons/ai";
import {FaExclamationTriangle, FaEye, FaFirstAid, FaHeartbeat, FaStethoscope, FaUserMd} from "react-icons/fa";
import {FiActivity, FiAlertTriangle, FiEye, FiHeart, FiUser} from "react-icons/fi";
import {RiAlarmWarningLine, RiFlashlightLine} from "react-icons/ri";
import {TbMoodSad, TbNurse, TbStethoscope} from "react-icons/tb";
import {HiOutlineClipboardList} from "react-icons/hi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function GineEmergencies() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Emergencias Ginecológicas EMT | Guía Completa para Paramédicos"
            description="Guía completa de emergencias ginecológicas para Técnicos en Atención Médica Prehospitalaria: embarazo ectópico, EPI, torsión ovárica, hemorragias uterinas y protocolos de manejo prehospitalario."
            keywords="emergencias ginecológicas, EMT, paramédicos, embarazo ectópico, EPI, torsión ovárica, hemorragia uterina, agresión sexual, protocolo ginecológico, evaluación pélvica, FUM"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
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
                                <AiOutlineWoman className="w-24 h-24 mb-1 text-pink-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Ginecológicas</h1>
                            <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.EMT}
                                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-pink-100 transition duration-300 ease-in-out">
                                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                    <p className="text-lg">Regresar</p>
                                </NavLink>
                            </div>
                        </header>


                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to={`${AllRoutes.GINE_EMERGENCY}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-pink-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-pink-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-pink-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-pink-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1z4e_fIy2QadxeD9nWT1k-MRBd_mkl1uv/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-pink-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-pink-500 mb-2"/>
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
                                            ? 'border-pink-500 text-pink-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('anatomy')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'anatomy'
                                            ? 'border-pink-500 text-pink-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Anatomía y Evaluación
                                </button>
                                <button
                                    onClick={() => setActiveTab('treatment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'treatment'
                                            ? 'border-pink-500 text-pink-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Manejo Prehospitalario
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-pink-500 text-pink-600'
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
                                    {/* Alerta de Prioridad */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Regla de Oro!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg">
                                            <strong>Toda mujer en edad reproductiva con dolor abdominal debe
                                                considerarse embarazada hasta que se demuestre lo contrario.</strong>
                                            La primera pregunta siempre debe ser: <span
                                            className="text-red-600 font-bold">"¿Cuándo fue su última menstruación?"</span>
                                        </p>
                                    </div>

                                    {/* Importancia crítica */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Emergencias Potencialmente
                                                Mortales!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                            Las emergencias ginecológicas pueden ser <strong>silenciosas pero
                                            mortales</strong>.
                                            El <span
                                            className="text-red-600 font-bold">embarazo ectópico roto</span> puede
                                            causar
                                            shock hemorrágico en minutos.
                                        </p>
                                        <div className="mt-4 grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">Minutos</p>
                                                <p className="text-sm">Tiempo para shock hemorrágico</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">15-20%</p>
                                                <p className="text-sm">Mortalidad sin tratamiento</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <RiAlarmWarningLine className="w-8 h-8 text-yellow-500 mx-auto mb-2"/>
                                                <p className="font-bold text-yellow-600">Primera causa</p>
                                                <p className="text-sm">Muerte materna 1er trimestre</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Clasificación por urgencia */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-pink-500"/>
                                            Clasificación por Nivel de Urgencia
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                                                <h3 className="text-xl font-bold text-red-700 mb-3 text-center flex items-center justify-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    CRÍTICA
                                                </h3>
                                                <p className="text-center text-red-600 font-semibold mb-3">Potencialmente
                                                    mortal</p>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Embarazo ectópico roto</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Hemorragia uterina severa</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Sepsis por EPI</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Torsión ovárica</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border border-orange-200">
                                                <h3 className="text-xl font-bold text-orange-700 mb-3 text-center flex items-center justify-center">
                                                    <MdWarning className="w-5 h-5 mr-2"/>
                                                    URGENTE
                                                </h3>
                                                <p className="text-center text-orange-600 font-semibold mb-3">Requiere
                                                    atención inmediata</p>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                        <span>EPI sin sepsis</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                        <span>Aborto espontáneo</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                        <span>Quiste ovárico roto</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-orange-600"/>
                                                        <span>Trauma genital severo</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg border border-yellow-200">
                                                <h3 className="text-xl font-bold text-yellow-700 mb-3 text-center flex items-center justify-center">
                                                    <RiFlashlightLine className="w-5 h-5 mr-2"/>
                                                    PRIORITARIA
                                                </h3>
                                                <p className="text-center text-yellow-600 font-semibold mb-3">Evaluación
                                                    temprana</p>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span>Dolor pélvico crónico</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span>Sangrado menstrual anormal</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span>Agresión sexual (estable)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                                        <span>Infecciones vaginales</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signos de alarma */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma -
                                                Reconocimiento Inmediato</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FaEye className="w-4 h-4 mr-2"/>
                                                    Signos Clínicos:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Tríada de Embarazo Ectópico:</strong> Dolor + amenorrea
                                                        + sangrado
                                                    </li>
                                                    <li><strong>Dolor en hombro:</strong> Irritación diafragmática por
                                                        hemoperitoneo
                                                    </li>
                                                    <li><strong>Signo de Cullen:</strong> Equimosis periumbilical</li>
                                                    <li><strong>Abdomen en tabla:</strong> Irritación peritoneal</li>
                                                    <li><strong>Masa pélvica palpable:</strong> Hematoma o masa ovárica
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FaStethoscope className="w-4 h-4 mr-2"/>
                                                    Signos Vitales:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Hipotensión ortostática:</strong> Pérdida de volumen
                                                    </li>
                                                    <li><strong>Taquicardia:</strong> Compensación por shock</li>
                                                    <li><strong>Fiebre &gt;38.3°C:</strong> Proceso infeccioso</li>
                                                    <li><strong>Palidez y diaforesis:</strong> Shock hipovolémico</li>
                                                    <li><strong>Alteración del estado mental:</strong> Shock o sepsis
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mnemotecnia para evaluación */}
                                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-6 h-6 text-blue-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-blue-800">Mnemotecnia: "PREGNANT"</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-3">
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">P</span>
                                                    <div>
                                                        <p className="font-semibold">Pain (Dolor)</p>
                                                        <p className="text-sm text-gray-600">Localización, intensidad,
                                                            irradiación</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">R</span>
                                                    <div>
                                                        <p className="font-semibold">Reproductive history (Historia
                                                            reproductiva)</p>
                                                        <p className="text-sm text-gray-600">Embarazos, partos,
                                                            abortos</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">E</span>
                                                    <div>
                                                        <p className="font-semibold">Emergency symptoms (Síntomas de
                                                            emergencia)</p>
                                                        <p className="text-sm text-gray-600">Sangrado, dolor severo,
                                                            shock</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">G</span>
                                                    <div>
                                                        <p className="font-semibold">Gynecological history (Historia
                                                            ginecológica)</p>
                                                        <p className="text-sm text-gray-600">Cirugías, infecciones
                                                            previas</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">N</span>
                                                    <div>
                                                        <p className="font-semibold">Nausea/vomiting
                                                            (Náuseas/vómitos)</p>
                                                        <p className="text-sm text-gray-600">Asociados con embarazo o
                                                            dolor</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">A</span>
                                                    <div>
                                                        <p className="font-semibold">Amenorrhea (Amenorrea)</p>
                                                        <p className="text-sm text-gray-600">FUM - Fecha de última
                                                            menstruación</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">N</span>
                                                    <div>
                                                        <p className="font-semibold">Neurological status (Estado
                                                            neurológico)</p>
                                                        <p className="text-sm text-gray-600">Nivel de conciencia,
                                                            confusión</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">T</span>
                                                    <div>
                                                        <p className="font-semibold">Temperature (Temperatura)</p>
                                                        <p className="text-sm text-gray-600">Fiebre indica proceso
                                                            infeccioso</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos clave para recordar */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <MdCheckCircle className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-green-800">Puntos Clave para
                                                Recordar</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                                    <MdCheckCircle className="w-4 h-4 mr-2"/>
                                                    Siempre HACER:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Preguntar FUM en todas las mujeres en edad fértil</li>
                                                    <li>Considerar embarazo hasta demostrarlo contrario</li>
                                                    <li>Mantener privacidad y dignidad del paciente</li>
                                                    <li>Cuantificar y documentar el sangrado vaginal</li>
                                                    <li>Buscar signos de shock hipovolémico</li>
                                                    <li>Ser empático y no juzgar</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <BsExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Empacar la vagina con gasas o tampones</li>
                                                    <li>Realizar examen pélvico interno</li>
                                                    <li>Insertar objetos en la vagina</li>
                                                    <li>Asumir que el sangrado es "normal"</li>
                                                    <li>Hacer comentarios inapropiados o juicios</li>
                                                    <li>Subestimar el dolor de la paciente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'anatomy' && (
                                <div className="space-y-8">
                                    {/* Anatomía del sistema reproductivo */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <TbStethoscope className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-blue-700">Anatomía Reproductiva
                                                Femenina</h2>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-3 text-blue-800">Órganos
                                                    Internos</h3>
                                                <div className="space-y-4">
                                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                                        <h4 className="font-semibold text-gray-800 mb-2">Ovarios</h4>
                                                        <ul className="text-sm text-gray-600 space-y-1">
                                                            <li>• Producen óvulos y hormonas</li>
                                                            <li>• Tamaño: 3-5 cm</li>
                                                            <li>• Muy vascularizados</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                                        <h4 className="font-semibold text-gray-800 mb-2">Trompas de
                                                            Falopio</h4>
                                                        <ul className="text-sm text-gray-600 space-y-1">
                                                            <li>• Transportan óvulos al útero</li>
                                                            <li>• Sitio común de embarazo ectópico</li>
                                                            <li>• Longitud: 10-13 cm</li>
                                                        </ul>
                                                    </div>
                                                    <div className="bg-white p-4 rounded-lg shadow-sm">
                                                        <h4 className="font-semibold text-gray-800 mb-2">Útero</h4>
                                                        <ul className="text-sm text-gray-600 space-y-1">
                                                            <li>• Órgano muscular</li>
                                                            <li>• Tamaño: 7.5 x 5 x 2.5 cm</li>
                                                            <li>• Peso: 30-40 g (no embarazada)</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-3 text-blue-800">Vascularización</h3>
                                                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                    <h4 className="font-semibold text-gray-800 mb-2 text-red-600">⚠️
                                                        Importancia Clínica</h4>
                                                    <p className="text-sm text-gray-600 mb-2">
                                                        La <strong>rica vascularización</strong> del área pélvica
                                                        explica por qué las
                                                        emergencias ginecológicas pueden causar hemorragias masivas
                                                        rápidamente.
                                                    </p>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Arterias uterinas</li>
                                                        <li>• Arterias ováricas</li>
                                                        <li>• Plexo venoso pélvico</li>
                                                        <li>• Flujo sanguíneo: 50-100 ml/min</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                                    <h4 className="font-semibold text-gray-800 mb-2">Inervación</h4>
                                                    <ul className="text-sm text-gray-600 space-y-1">
                                                        <li>• Nervios simpáticos y parasimpáticos</li>
                                                        <li>• Dolor referido común</li>
                                                        <li>• Dolor en hombro: irritación diafragmática</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evaluación SAMPLE específica */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <HiOutlineClipboardList className="w-6 h-6 mr-2 text-pink-500"/>
                                            Evaluación SAMPLE Ginecológica
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">S</span>
                                                        Síntomas
                                                    </h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Dolor: localización, irradiación, intensidad</li>
                                                        <li>• Sangrado: cantidad, duración, color</li>
                                                        <li>• Náuseas/vómitos</li>
                                                        <li>• Mareos/síncope</li>
                                                        <li>• Flujo vaginal anormal</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">A</span>
                                                        Alergias
                                                    </h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Medicamentos (antibióticos, analgésicos)</li>
                                                        <li>• Látex (importante para examen)</li>
                                                        <li>• Productos de higiene femenina</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-yellow-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">M</span>
                                                        Medicamentos
                                                    </h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Anticonceptivos hormonales</li>
                                                        <li>• Medicamentos para fertilidad</li>
                                                        <li>• Anticoagulantes</li>
                                                        <li>• Antibióticos recientes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-purple-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">P</span>
                                                        Patologías Pasadas
                                                    </h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Cirugías ginecológicas previas</li>
                                                        <li>• Embarazos ectópicos anteriores</li>
                                                        <li>• Infecciones pélvicas</li>
                                                        <li>• Endometriosis</li>
                                                        <li>• Trastornos de coagulación</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-red-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">L</span>
                                                        Última Ingesta
                                                    </h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Importancia para cirugía de emergencia</li>
                                                        <li>• Medicamentos tomados recientemente</li>
                                                        <li>• Drogas/alcohol (puede afectar juicio)</li>
                                                    </ul>
                                                </div>
                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-orange-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2">E</span>
                                                        Eventos
                                                    </h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• Actividad al inicio del dolor</li>
                                                        <li>• Actividad sexual reciente</li>
                                                        <li>• Trauma/ejercicio intenso</li>
                                                        <li>• Procedimientos ginecológicos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Historia ginecológica específica */}
                                    <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <AiOutlineWoman className="w-6 h-6 text-pink-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-pink-800">Historia Ginecológica
                                                Específica</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-pink-800 mb-3">Preguntas Esenciales
                                                    (G-PPAL)</h4>
                                                <div className="space-y-2">
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold text-gray-800">G - Gravida</p>
                                                        <p className="text-sm text-gray-600">Número total de
                                                            embarazos</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold text-gray-800">P - Para</p>
                                                        <p className="text-sm text-gray-600">Partos a término</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold text-gray-800">P - Prematuros</p>
                                                        <p className="text-sm text-gray-600">Partos prematuros</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold text-gray-800">A - Abortos</p>
                                                        <p className="text-sm text-gray-600">Espontáneos o inducidos</p>
                                                    </div>
                                                    <div className="bg-white p-3 rounded shadow-sm">
                                                        <p className="font-semibold text-gray-800">L - Living</p>
                                                        <p className="text-sm text-gray-600">Hijos vivos actualmente</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-pink-800 mb-3">Información
                                                    Adicional</h4>
                                                <div className="bg-white p-4 rounded shadow-sm">
                                                    <ul className="space-y-2 text-gray-700">
                                                        <li className="flex items-start">
                                                            <span className="text-pink-600 mr-2">•</span>
                                                            <span><strong>FUM:</strong> Fecha de última menstruación</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-pink-600 mr-2">•</span>
                                                            <span><strong>Ciclo menstrual:</strong> Duración y regularidad</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-pink-600 mr-2">•</span>
                                                            <span><strong>Métodos anticonceptivos:</strong> Tipo y duración</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-pink-600 mr-2">•</span>
                                                            <span><strong>Actividad sexual:</strong> Frecuencia y parejas</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-pink-600 mr-2">•</span>
                                                            <span><strong>ITS previas:</strong> Infecciones de transmisión sexual</span>
                                                        </li>
                                                        <li className="flex items-start">
                                                            <span className="text-pink-600 mr-2">•</span>
                                                            <span><strong>Cirugías ginecológicas:</strong> Tipo y fecha</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Evaluación física sistemática */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaUserMd className="w-6 h-6 mr-2 text-blue-500"/>
                                            Evaluación Física Sistemática
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div
                                                    className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border">
                                                    <h3 className="font-bold text-blue-700 mb-2">1. Signos Vitales</h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Presión arterial:</strong> Sentada y supina</li>
                                                        <li>• <strong>Frecuencia cardíaca:</strong> Ritmo y calidad</li>
                                                        <li>• <strong>Temperatura:</strong> Indicador de infección</li>
                                                        <li>• <strong>Saturación O₂:</strong> Estado respiratorio</li>
                                                        <li>• <strong>Dolor:</strong> Escala 1-10</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border">
                                                    <h3 className="font-bold text-green-700 mb-2">2. Evaluación
                                                        General</h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Aspecto general:</strong> Nivel de distress</li>
                                                        <li>• <strong>Color de piel:</strong> Palidez, cianosis</li>
                                                        <li>• <strong>Diaforesis:</strong> Sudoración excesiva</li>
                                                        <li>• <strong>Nivel de conciencia:</strong> Alerta, confusa</li>
                                                        <li>• <strong>Posición:</strong> Antálgica, fetal</li>
                                                    </ul>
                                                </div>
                                                <div
                                                    className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                                                    <h3 className="font-bold text-yellow-700 mb-2">3. Examen
                                                        Abdominal</h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Inspección:</strong> Distensión, cicatrices</li>
                                                        <li>• <strong>Auscultación:</strong> Ruidos intestinales</li>
                                                        <li>• <strong>Palpación:</strong> Dolor, rigidez, masas</li>
                                                        <li>• <strong>Percusión:</strong> Timpanismo, matidez</li>
                                                        <li>• <strong>Signos especiales:</strong> Rebote, defensa</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                    <h3 className="font-bold text-red-700 mb-2">⚠️ Signos de Alarma</h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Hipotensión:</strong> &lt;90/60 mmHg</li>
                                                        <li>• <strong>Taquicardia:</strong> &gt;100 lpm</li>
                                                        <li>• <strong>Fiebre:</strong> &gt;38.3°C</li>
                                                        <li>• <strong>Hipotensión ortostática:</strong> ↓&gt;20 mmHg
                                                        </li>
                                                        <li>• <strong>Alteración mental:</strong> Confusión, agitación
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                                                    <h3 className="font-bold text-purple-700 mb-2">Signos
                                                        Específicos</h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Signo de Cullen:</strong> Equimosis periumbilical
                                                        </li>
                                                        <li>• <strong>Signo de Turner:</strong> Equimosis en flancos
                                                        </li>
                                                        <li>• <strong>Dolor en hombro:</strong> Irritación diafragmática
                                                        </li>
                                                        <li>• <strong>Masa palpable:</strong> Hematoma, quiste</li>
                                                        <li>• <strong>Abdomen en tabla:</strong> Irritación peritoneal
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                                                    <h3 className="font-bold text-orange-700 mb-2">Evaluación del
                                                        Sangrado</h3>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>Cantidad:</strong> Número de toallas/hora</li>
                                                        <li>• <strong>Color:</strong> Rojo brillante, oscuro</li>
                                                        <li>• <strong>Coágulos:</strong> Tamaño y frecuencia</li>
                                                        <li>• <strong>Duración:</strong> Tiempo transcurrido</li>
                                                        <li>• <strong>Patrón:</strong> Continuo, intermitente</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Algoritmo de evaluación */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <RiFlashlightLine className="w-6 h-6 text-gray-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-gray-800">Algoritmo de Evaluación
                                                Rápida</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-center text-blue-600 mb-2">PASO 1</h4>
                                                <h5 className="font-semibold text-gray-800 mb-2">Estabilización</h5>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• ABC primario</li>
                                                    <li>• Signos vitales</li>
                                                    <li>• Acceso IV si inestable</li>
                                                    <li>• Monitorización</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-center text-green-600 mb-2">PASO 2</h4>
                                                <h5 className="font-semibold text-gray-800 mb-2">Historia Rápida</h5>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• FUM (pregunta clave)</li>
                                                    <li>• Dolor: OPQRST</li>
                                                    <li>• Sangrado: cantidad</li>
                                                    <li>• Síntomas asociados</li>
                                                </ul>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                                <h4 className="font-bold text-center text-orange-600 mb-2">PASO 3</h4>
                                                <h5 className="font-semibold text-gray-800 mb-2">Examen Físico</h5>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• Abdomen completo</li>
                                                    <li>• Búsqueda de signos</li>
                                                    <li>• Evaluación del sangrado</li>
                                                    <li>• Decisión de transporte</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'treatment' && (
                                <div className="space-y-8">
                                    {/* Protocolo ABC ginecológico */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaFirstAid className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-blue-700">Protocolo ABC - Enfoque
                                                Ginecológico</h2>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A -
                                                    AIRWAY</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Evaluar capacidad de hablar</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Posición cómoda (semisupina)</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Aspirar si náuseas/vómitos</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Oxígeno si compromiso</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B -
                                                    BREATHING</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Frecuencia respiratoria</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Calidad de la respiración</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>Oximetría de pulso</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span>O₂ supl. si SpO₂ &lt;94%</span>
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
                                                        <span>Pulso: calidad y frecuencia</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Presión arterial</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Perfusión capilar</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Control de hemorragias</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo específico del sangrado */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <TbMoodSad className="w-6 h-6 mr-2 text-red-500"/>
                                            Manejo del Sangrado Vaginal
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                                <h3 className="font-medium text-lg mb-2 text-green-700 flex items-center">
                                                    <MdCheckCircle className="w-5 h-5 mr-2"/>
                                                    ✅ Protocolo Correcto
                                                </h3>
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>Usar toallas sanitarias externas</strong> para absorber
                                                        sangre
                                                    </li>
                                                    <li><strong>Contar y documentar</strong> número de toallas usadas
                                                    </li>
                                                    <li><strong>Guardar toallas usadas</strong> para evaluación médica
                                                    </li>
                                                    <li><strong>Elevar miembros inferiores</strong> si signos de shock
                                                    </li>
                                                    <li><strong>Establecer acceso IV</strong> (14-16G) si hemorragia
                                                        severa
                                                    </li>
                                                    <li><strong>Administrar cristaloides</strong> (NS o LR) según
                                                        protocolo
                                                    </li>
                                                    <li><strong>Monitorizar signos vitales</strong> cada 5 minutos</li>
                                                    <li><strong>Oxígeno suplementario</strong> si SpO₂ &lt;94%</li>
                                                    <li><strong>Apoyo emocional</strong> y explicar procedimientos</li>
                                                </ol>
                                            </div>
                                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                                <h3 className="font-medium text-lg mb-2 text-red-700 flex items-center">
                                                    <BsExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    ❌ Errores Críticos - NUNCA Hacer
                                                </h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li><strong className="text-red-600">NUNCA empacar la
                                                        vagina</strong> con gasas, tampones o cualquier material
                                                    </li>
                                                    <li><strong className="text-red-600">NO realizar examen
                                                        pélvico</strong> interno en campo
                                                    </li>
                                                    <li><strong className="text-red-600">NO insertar objetos</strong> en
                                                        la vagina
                                                    </li>
                                                    <li><strong className="text-red-600">NO aplicar presión
                                                        directa</strong> sobre genitales externos
                                                    </li>
                                                    <li><strong className="text-red-600">NO asumir
                                                        normalidad</strong> del sangrado
                                                    </li>
                                                    <li><strong className="text-red-600">NO administrar
                                                        medicamentos</strong> orales si puede requerir cirugía
                                                    </li>
                                                    <li><strong className="text-red-600">NO permitir baño</strong> o
                                                        ducha antes de evaluación
                                                    </li>
                                                    <li><strong className="text-red-600">NO hacer
                                                        comentarios</strong> inapropiados o juicios
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Algoritmos de manejo por patología */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <TbNurse className="w-6 h-6 mr-2 text-pink-500"/>
                                            Algoritmos de Manejo por Patología
                                        </h2>
                                        <div className="space-y-6">
                                            <div
                                                className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-200">
                                                <h3 className="font-medium text-xl mb-4 text-red-700 flex items-center">
                                                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                                    EMBARAZO ECTÓPICO (Sospecha)
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-red-600 mb-2">Reconocimiento:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Tríada clásica: dolor + amenorrea + sangrado</li>
                                                            <li>• Mujer en edad reproductiva</li>
                                                            <li>• Dolor unilateral súbito y severo</li>
                                                            <li>• Signos de shock hipovolémico</li>
                                                            <li>• Dolor referido al hombro</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-red-600 mb-2">Manejo
                                                            Inmediato:</h4>
                                                        <ol className="text-sm text-gray-700 space-y-1">
                                                            <li>1. <strong>Prioridad 1:</strong> Potencialmente mortal
                                                            </li>
                                                            <li>2. <strong>Dos accesos IV</strong> grandes (14-16G)</li>
                                                            <li>3. <strong>Cristaloides en bolo</strong> 500-1000ml</li>
                                                            <li>4. <strong>Posición anti-shock</strong> (Trendelenburg)
                                                            </li>
                                                            <li>5. <strong>Monitorización continua</strong></li>
                                                            <li>6. <strong>Transporte INMEDIATO</strong></li>
                                                            <li>7. <strong>Preaviso hospitalario</strong></li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                                                <h3 className="font-medium text-xl mb-4 text-orange-700 flex items-center">
                                                    <MdWarning className="w-5 h-5 mr-2"/>
                                                    ENFERMEDAD PÉLVICA INFLAMATORIA (EPI)
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-orange-600 mb-2">Reconocimiento:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Dolor pélvico bilateral sordo</li>
                                                            <li>• Fiebre &gt;38.3°C</li>
                                                            <li>• Flujo vaginal purulento/maloliente</li>
                                                            <li>• Dispareunia (dolor durante coito)</li>
                                                            <li>• Disuria (dolor al orinar)</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-orange-600 mb-2">Manejo:</h4>
                                                        <ol className="text-sm text-gray-700 space-y-1">
                                                            <li>1. <strong>Posición cómoda</strong> (semi-fowler)</li>
                                                            <li>2. <strong>Acceso IV</strong> para hidratación</li>
                                                            <li>3. <strong>Control de temperatura</strong></li>
                                                            <li>4. <strong>Manejo del dolor</strong> según protocolo
                                                            </li>
                                                            <li>5. <strong>Monitorizar sepsis</strong> (FC, PA, temp)
                                                            </li>
                                                            <li>6. <strong>Transporte para antibióticos</strong></li>
                                                            <li>7. <strong>Apoyo emocional</strong></li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                                                <h3 className="font-medium text-xl mb-4 text-blue-700 flex items-center">
                                                    <RiAlarmWarningLine className="w-5 h-5 mr-2"/>
                                                    TORSIÓN OVÁRICA
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-blue-600 mb-2">Reconocimiento:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Dolor unilateral súbito e intenso</li>
                                                            <li>• Náuseas y vómitos profusos</li>
                                                            <li>• Posición antálgica (fetal)</li>
                                                            <li>• Masa palpable en anexos</li>
                                                            <li>• Más común en mujeres jóvenes</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-blue-600 mb-2">Manejo
                                                            Urgente:</h4>
                                                        <ol className="text-sm text-gray-700 space-y-1">
                                                            <li>1. <strong>Emergencia quirúrgica</strong> - tiempo
                                                                crucial
                                                            </li>
                                                            <li>2. <strong>Control agresivo del dolor</strong></li>
                                                            <li>3. <strong>Antieméticos</strong> para náuseas</li>
                                                            <li>4. <strong>Acceso IV</strong> para medicamentos</li>
                                                            <li>5. <strong>Posición de comodidad</strong></li>
                                                            <li>6. <strong>Transporte RÁPIDO</strong></li>
                                                            <li>7. <strong>Comunicar sospecha</strong> al hospital</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                                                <h3 className="font-medium text-xl mb-4 text-purple-700 flex items-center">
                                                    <FaUserMd className="w-5 h-5 mr-2"/>
                                                    AGRESIÓN SEXUAL
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <div>
                                                        <h4 className="font-semibold text-purple-600 mb-2">Consideraciones
                                                            Especiales:</h4>
                                                        <ul className="text-sm text-gray-700 space-y-1">
                                                            <li>• Trauma físico + trauma psicológico</li>
                                                            <li>• Preservación de evidencia</li>
                                                            <li>• Aspectos legales</li>
                                                            <li>• Consentimiento informado</li>
                                                            <li>• Confidencialidad</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold text-purple-600 mb-2">Protocolo
                                                            Sensible:</h4>
                                                        <ol className="text-sm text-gray-700 space-y-1">
                                                            <li>1. <strong>Prioridad médica</strong> sobre evidencia
                                                            </li>
                                                            <li>2. <strong>Ser empático</strong> y no juzgar</li>
                                                            <li>3. <strong>Preservar evidencia:</strong> no
                                                                bañar/cambiar ropa
                                                            </li>
                                                            <li>4. <strong>Tratar lesiones</strong> amenazantes</li>
                                                            <li>5. <strong>Acompañante</strong> femenino si disponible
                                                            </li>
                                                            <li>6. <strong>Documentar objetivamente</strong></li>
                                                            <li>7. <strong>Servicios de apoyo</strong> (trabajo social)
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decisiones de transporte */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-yellow-800">Criterios de
                                                Transporte</h3>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="bg-red-100 p-4 rounded-lg">
                                                <h4 className="font-bold text-red-700 mb-2 text-center">🚨 TRANSPORTE
                                                    INMEDIATO</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Signos de shock hemorrágico</li>
                                                    <li>• Sospecha de embarazo ectópico</li>
                                                    <li>• Hemorragia vaginal severa</li>
                                                    <li>• Signos de sepsis</li>
                                                    <li>• Dolor abdominal severo súbito</li>
                                                    <li>• Alteración del estado mental</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-100 p-4 rounded-lg">
                                                <h4 className="font-bold text-orange-700 mb-2 text-center">⚠️ TRANSPORTE
                                                    URGENTE</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Fiebre &gt;38.3°C con dolor pélvico</li>
                                                    <li>• Vómitos persistentes</li>
                                                    <li>• Dolor pélvico moderado-severo</li>
                                                    <li>• Sangrado vaginal moderado</li>
                                                    <li>• Signos vitales limítrofes</li>
                                                    <li>• Agresión sexual reciente</li>
                                                </ul>
                                            </div>
                                            <div className="bg-yellow-100 p-4 rounded-lg">
                                                <h4 className="font-bold text-yellow-700 mb-2 text-center">📋 TRANSPORTE
                                                    PRIORITARIO</h4>
                                                <ul className="text-sm text-gray-700 space-y-1">
                                                    <li>• Dolor pélvico leve-moderado</li>
                                                    <li>• Sangrado vaginal leve</li>
                                                    <li>• Síntomas ginecológicos crónicos</li>
                                                    <li>• Signos vitales estables</li>
                                                    <li>• Paciente ambulatoria</li>
                                                    <li>• Seguimiento programado</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Consideraciones especiales */}
                                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-green-800">Consideraciones
                                                Especiales</h3>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2">Privacidad y
                                                    Dignidad</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Mantener cubierta la paciente adecuadamente</li>
                                                    <li>Limitar personal presente al mínimo necesario</li>
                                                    <li>Permitir acompañante si la paciente lo desea</li>
                                                    <li>Explicar todos los procedimientos antes de realizarlos</li>
                                                    <li>Respetar las decisiones de la paciente</li>
                                                    <li>Mantener confidencialidad absoluta</li>
                                                    <li>Usar lenguaje profesional y apropiado</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-green-800 mb-2">Documentación
                                                    Clínica</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Registrar FUM y síntomas ginecológicos específicos</li>
                                                    <li>Cuantificar sangrado (número de toallas por tiempo)</li>
                                                    <li>Documentar signos vitales seriados cada 5 minutos</li>
                                                    <li>Anotar medicamentos administrados y dosis</li>
                                                    <li>Registrar respuesta al tratamiento</li>
                                                    <li>Ser objetivo y factual en descripciones</li>
                                                    <li>Usar terminología médica apropiada</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'practice' && (
                                <div className="space-y-8">
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaUserMd className="w-8 h-8 text-blue-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-blue-700">Casos Clínicos - Escenarios
                                                Reales</h2>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Practica con casos reales de emergencias ginecológicas. Cada caso incluye
                                            presentación clínica,
                                            proceso de evaluación y manejo step-by-step basado en protocolos actuales.
                                        </p>
                                    </div>

                                    <div className="grid gap-8">
                                        <div
                                            className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg shadow-lg p-6 border border-red-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                                                <h3 className="text-xl font-semibold text-red-700">Embarazo Ectópico
                                                    Roto - Código Rojo</h3>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">📋 Presentación del
                                                    Caso</h4>
                                                <p className="text-gray-700 mb-3">
                                                    <strong>Paciente:</strong> Mujer de 26 años, G2P1, llama al 911 por
                                                    dolor abdominal severo y súbito.
                                                    Al llegar, la encuentran en el piso del baño, pálida, sudorosa, con
                                                    dolor intenso en fosa ilíaca derecha.
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p><strong>Historia:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>FUM: Hace 7 semanas</li>
                                                            <li>Sangrado vaginal leve x 3 días</li>
                                                            <li>Dolor pélvico intermitente x 1 semana</li>
                                                            <li>Episodio de mareo esta mañana</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p><strong>Signos Vitales:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>FC: 118 lpm, débil</li>
                                                            <li>PA: 88/56 mmHg</li>
                                                            <li>FR: 24/min</li>
                                                            <li>Temp: 37.2°C</li>
                                                            <li>SpO₂: 96%</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">🔍 Hallazgos Clínicos
                                                    Clave</h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="font-medium text-red-600">Signos de Alarma:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Piel fría, pálida y diaforética</li>
                                                            <li>Pulsos periféricos débiles</li>
                                                            <li>Dolor referido al hombro derecho</li>
                                                            <li>Abdomen rígido y doloroso</li>
                                                            <li>Hipotensión ortostática</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-red-600">Tríada Clásica:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>✅ Dolor abdominal agudo</li>
                                                            <li>✅ Amenorrea (7 semanas)</li>
                                                            <li>✅ Sangrado vaginal</li>
                                                            <li>+ Signos de shock</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-red-100 p-4 rounded-lg">
                                                <h4 className="font-semibold text-red-700 mb-2">🚨 Manejo de
                                                    Emergencia</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li><strong>Reconocimiento inmediato:</strong> Embarazo ectópico
                                                        roto con shock
                                                    </li>
                                                    <li><strong>Posición anti-shock:</strong> Trendelenburg modificado
                                                    </li>
                                                    <li><strong>Dos accesos IV:</strong> 14G, cristaloides en bolo
                                                        1000ml
                                                    </li>
                                                    <li><strong>Oxígeno:</strong> 15L por mascarilla no-rebreather</li>
                                                    <li><strong>Monitorización:</strong> Continua de signos vitales</li>
                                                    <li><strong>Comunicación:</strong> Preaviso inmediato al hospital
                                                    </li>
                                                    <li><strong>Transporte:</strong> Código rojo a centro con cirugía
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg shadow-lg p-6 border border-orange-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                                                <h3 className="text-xl font-semibold text-orange-700">Enfermedad Pélvica
                                                    Inflamatoria Severa</h3>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">📋 Presentación del
                                                    Caso</h4>
                                                <p className="text-gray-700 mb-3">
                                                    <strong>Paciente:</strong> Mujer de 22 años, sexualmente activa, con
                                                    dolor pélvico de 4 días de evolución que ha empeorado
                                                    progresivamente.
                                                    Presenta fiebre, escalofríos y flujo vaginal maloliente.
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p><strong>Historia:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Dolor pélvico bilateral x 4 días</li>
                                                            <li>Fiebre y escalofríos x 2 días</li>
                                                            <li>Flujo vaginal amarillento y maloliente</li>
                                                            <li>Dispareunia (dolor durante coito)</li>
                                                            <li>Disuria (dolor al orinar)</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p><strong>Signos Vitales:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>FC: 105 lpm</li>
                                                            <li>PA: 110/70 mmHg</li>
                                                            <li>FR: 20/min</li>
                                                            <li>Temp: 38.8°C</li>
                                                            <li>SpO₂: 98%</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">⚠️ Evaluación de
                                                    Riesgo</h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="font-medium text-orange-600">Factores de
                                                            Riesgo:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Múltiples parejas sexuales</li>
                                                            <li>No uso de preservativo</li>
                                                            <li>Historia de ITS previa</li>
                                                            <li>Edad joven (&lt;25 años)</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-orange-600">Signos de Sepsis:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Fiebre &gt;38.3°C ✅</li>
                                                            <li>Taquicardia &gt;90 lpm ✅</li>
                                                            <li>Taquipnea &gt;20/min ✅</li>
                                                            <li>Alteración mental ❌</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-orange-100 p-4 rounded-lg">
                                                <h4 className="font-semibold text-orange-700 mb-2">🩺 Manejo Clínico</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li><strong>Posición cómoda:</strong> Semi-fowler para aliviar dolor
                                                    </li>
                                                    <li><strong>Acceso IV:</strong> 18G para hidratación y medicamentos
                                                    </li>
                                                    <li><strong>Control de temperatura:</strong> Medidas físicas +
                                                        antitérmicos
                                                    </li>
                                                    <li><strong>Manejo del dolor:</strong> Analgésicos según protocolo
                                                    </li>
                                                    <li><strong>Monitorización:</strong> Signos vitales cada 15 minutos
                                                    </li>
                                                    <li><strong>Hidratación:</strong> Cristaloides para mantener
                                                        perfusión
                                                    </li>
                                                    <li><strong>Transporte:</strong> A centro con capacidad de manejo de
                                                        sepsis
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-lg p-6 border border-blue-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                                                <h3 className="text-xl font-semibold text-blue-700">Torsión Ovárica -
                                                    Emergencia Quirúrgica</h3>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">📋 Presentación del
                                                    Caso</h4>
                                                <p className="text-gray-700 mb-3">
                                                    <strong>Paciente:</strong> Adolescente de 16 años, atleta, presenta
                                                    dolor abdominal súbito e intenso en fosa ilíaca derecha
                                                    después de hacer ejercicio. Náuseas y vómitos profusos.
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p><strong>Historia:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Dolor súbito durante ejercicio</li>
                                                            <li>Intensidad 10/10, tipo cólico</li>
                                                            <li>Náuseas y vómitos x 3 episodios</li>
                                                            <li>Posición fetal para alivio</li>
                                                            <li>FUM: Hace 2 semanas</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p><strong>Signos Vitales:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>FC: 95 lpm</li>
                                                            <li>PA: 125/80 mmHg</li>
                                                            <li>FR: 22/min</li>
                                                            <li>Temp: 37.1°C</li>
                                                            <li>SpO₂: 99%</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">⏰ Factor Tiempo -
                                                    Crítico</h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="font-medium text-blue-600">Signos
                                                            Diagnósticos:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Dolor unilateral severo y súbito</li>
                                                            <li>Náuseas y vómitos persistentes</li>
                                                            <li>Masa palpable en fosa ilíaca</li>
                                                            <li>Posición antálgica preferida</li>
                                                            <li>Mujer joven/adolescente</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-red-600">Tiempo = Ovario:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>&lt;6 horas: Salvable 90%</li>
                                                            <li>6-12 horas: Salvable 70%</li>
                                                            <li>12-24 horas: Salvable 20%</li>
                                                            <li>&gt;24 horas: Necrosis total</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-blue-100 p-4 rounded-lg">
                                                <h4 className="font-semibold text-blue-700 mb-2">🏃‍♂️ Manejo Rápido</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li><strong>Reconocimiento:</strong> Emergencia quirúrgica
                                                        tiempo-dependiente
                                                    </li>
                                                    <li><strong>Control del dolor:</strong> Analgésicos potentes
                                                        (morfina/fentanilo)
                                                    </li>
                                                    <li><strong>Antieméticos:</strong> Ondansetrón para náuseas</li>
                                                    <li><strong>Acceso IV:</strong> Para medicamentos y fluidos</li>
                                                    <li><strong>Posición:</strong> De comodidad (generalmente lateral)
                                                    </li>
                                                    <li><strong>Comunicación:</strong> Preaviso urgente - sospecha
                                                        torsión
                                                    </li>
                                                    <li><strong>Transporte:</strong> Código amarillo a centro quirúrgico
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-lg p-6 border border-purple-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                                                <h3 className="text-xl font-semibold text-purple-700">Hemorragia Uterina
                                                    Disfuncional</h3>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">📋 Presentación del
                                                    Caso</h4>
                                                <p className="text-gray-700 mb-3">
                                                    <strong>Paciente:</strong> Mujer de 35 años con sangrado vaginal
                                                    abundante de 12 días de duración.
                                                    Refiere debilidad, mareos y ha empapado &gt;2 toallas por hora en
                                                    las últimas 6 horas.
                                                </p>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p><strong>Historia:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Sangrado abundante x 12 días</li>
                                                            <li>Coágulos grandes frecuentes</li>
                                                            <li>Debilidad progresiva</li>
                                                            <li>Mareos al levantarse</li>
                                                            <li>Última menstruación normal hace 2 meses</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p><strong>Signos Vitales:</strong></p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>FC: 110 lpm</li>
                                                            <li>PA: 100/65 mmHg</li>
                                                            <li>FR: 18/min</li>
                                                            <li>Temp: 36.8°C</li>
                                                            <li>SpO₂: 97%</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">📊 Evaluación de Pérdida
                                                    Sanguínea</h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="font-medium text-purple-600">Cuantificación:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>2-3 toallas completamente empapadas/hora</li>
                                                            <li>Coágulos &gt;2.5 cm de diámetro</li>
                                                            <li>Duración &gt;7 días</li>
                                                            <li>Cambio de actividades diarias</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-purple-600">Signos de Anemia:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Palidez de mucosas</li>
                                                            <li>Fatiga y debilidad</li>
                                                            <li>Mareos ortostáticos</li>
                                                            <li>Taquicardia compensatoria</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-purple-100 p-4 rounded-lg">
                                                <h4 className="font-semibold text-purple-700 mb-2">🩸 Manejo de
                                                    Hemorragia</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li><strong>Cuantificación:</strong> Contar y pesar toallas usadas
                                                    </li>
                                                    <li><strong>Posición:</strong> Semi-fowler, elevar piernas si shock
                                                    </li>
                                                    <li><strong>Acceso IV:</strong> 16G para reposición de volumen</li>
                                                    <li><strong>Cristaloides:</strong> Infusión según pérdida estimada
                                                    </li>
                                                    <li><strong>Monitorización:</strong> Signos vitales cada 10 minutos
                                                    </li>
                                                    <li><strong>Oxígeno:</strong> Si signos de hipoxemia</li>
                                                    <li><strong>Transporte:</strong> A centro con banco de sangre</li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div
                                            className="bg-gradient-to-r from-gray-50 to-indigo-50 rounded-lg shadow-lg p-6 border border-gray-200">
                                            <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                                                <h3 className="text-xl font-semibold text-gray-700">Agresión Sexual -
                                                    Manejo Integral</h3>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">📋 Presentación del
                                                    Caso</h4>
                                                <p className="text-gray-700 mb-3">
                                                    <strong>Situación:</strong> Mujer de 28 años encontrada por amigas
                                                    en estado de shock emocional,
                                                    con ropa desgarrada y evidencia de trauma físico. Refiere haber sido
                                                    agredida sexualmente.
                                                </p>
                                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                                    <p className="text-sm text-yellow-800">
                                                        <strong>Nota:</strong> Este caso requiere manejo especializado
                                                        con consideraciones médicas,
                                                        legales y psicológicas específicas.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                                                <h4 className="font-semibold text-gray-800 mb-2">🤝 Enfoque
                                                    Multidisciplinario</h4>
                                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                                    <div>
                                                        <p className="font-medium text-indigo-600">Prioridades
                                                            Médicas:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Estabilización hemodinámica</li>
                                                            <li>Evaluación de lesiones</li>
                                                            <li>Control del dolor</li>
                                                            <li>Prevención de infecciones</li>
                                                            <li>Apoyo psicológico</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <p className="font-medium text-indigo-600">Consideraciones
                                                            Legales:</p>
                                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                            <li>Preservación de evidencia</li>
                                                            <li>Documentación objetiva</li>
                                                            <li>Cadena de custodia</li>
                                                            <li>Consentimiento informado</li>
                                                            <li>Confidencialidad</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-indigo-100 p-4 rounded-lg">
                                                <h4 className="font-semibold text-indigo-700 mb-2">🏥 Protocolo
                                                    Especializado</h4>
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li><strong>Prioridad médica:</strong> Estabilizar antes que
                                                        preservar evidencia
                                                    </li>
                                                    <li><strong>Comunicación:</strong> Empática, no juzgar, profesional
                                                    </li>
                                                    <li><strong>Privacidad:</strong> Ambiente seguro y confidencial</li>
                                                    <li><strong>Preservación:</strong> No cambiar ropa, no bañar, no
                                                        lavar
                                                    </li>
                                                    <li><strong>Documentación:</strong> Objetiva, con citas textuales
                                                    </li>
                                                    <li><strong>Servicios:</strong> Activar trabajo social y policía
                                                    </li>
                                                    <li><strong>Transporte:</strong> A centro con protocolo SANE</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tabla de decisiones rápidas */}
                                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                        <div className="flex items-center mb-4">
                                            <FaEye className="w-6 h-6 text-gray-600 mr-2"/>
                                            <h3 className="text-xl font-bold text-gray-800">Guía de Decisiones
                                                Rápidas</h3>
                                        </div>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-3 px-4 border-b text-left font-semibold">Presentación</th>
                                                    <th className="py-3 px-4 border-b text-left font-semibold">Sospecha
                                                        Diagnóstica
                                                    </th>
                                                    <th className="py-3 px-4 border-b text-left font-semibold">Prioridad</th>
                                                    <th className="py-3 px-4 border-b text-left font-semibold">Acción
                                                        Inmediata
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b">Dolor súbito + amenorrea +
                                                        shock
                                                    </td>
                                                    <td className="py-3 px-4 border-b">Embarazo ectópico roto</td>
                                                    <td className="py-3 px-4 border-b">
                                                        <span
                                                            className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">CRÍTICA</span>
                                                    </td>
                                                    <td className="py-3 px-4 border-b">2 IV + cristaloides + transporte
                                                        inmediato
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b">Dolor pélvico + fiebre + flujo
                                                    </td>
                                                    <td className="py-3 px-4 border-b">EPI</td>
                                                    <td className="py-3 px-4 border-b">
                                                        <span
                                                            className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">URGENTE</span>
                                                    </td>
                                                    <td className="py-3 px-4 border-b">IV + analgesia + antibióticos
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b">Dolor unilateral súbito +
                                                        náuseas
                                                    </td>
                                                    <td className="py-3 px-4 border-b">Torsión ovárica</td>
                                                    <td className="py-3 px-4 border-b">
                                                        <span
                                                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">QUIRÚRGICA</span>
                                                    </td>
                                                    <td className="py-3 px-4 border-b">Analgesia + antieméticos +
                                                        transporte rápido
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b">Sangrado abundante + anemia</td>
                                                    <td className="py-3 px-4 border-b">Hemorragia uterina</td>
                                                    <td className="py-3 px-4 border-b">
                                                        <span
                                                            className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">MODERADA</span>
                                                    </td>
                                                    <td className="py-3 px-4 border-b">Cuantificar + IV + reposición
                                                        volumen
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-gray-50">
                                                    <td className="py-3 px-4 border-b">Trauma + shock emocional</td>
                                                    <td className="py-3 px-4 border-b">Agresión sexual</td>
                                                    <td className="py-3 px-4 border-b">
                                                        <span
                                                            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">ESPECIAL</span>
                                                    </td>
                                                    <td className="py-3 px-4 border-b">Preservar evidencia + apoyo +
                                                        protocolo
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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
                            pagina="gine-emergencies"
                            titulo="Foro de Discusión - Gine Emergencies"
                        />


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
                                        <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.
                                        </li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición).
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/airway-management/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre manejo de vía aérea</a></li>
                                        <li><a href="https://www.jems.com/patient-care/airway-respiratory/"
                                               target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">JEMS - Sección de cuidado
                                            respiratorio</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Canal de YouTube con videos educativos</a></li>
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

