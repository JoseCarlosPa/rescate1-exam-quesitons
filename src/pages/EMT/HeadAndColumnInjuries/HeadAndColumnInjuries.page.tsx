import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./HeadAndColumnInjuries.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdCheckCircle, MdOutlineTimer, MdQuiz, MdWarning} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {SiSpine} from "react-icons/si";
import {FaBrain, FaExclamationTriangle, FaFirstAid} from "react-icons/fa";
import {FiActivity, FiAlertTriangle, FiEye} from "react-icons/fi";
import {GiBrokenBone, GiSpinalCoil} from "react-icons/gi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function HeadAndColumnInjuries() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'assessment' | 'management' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Lesiones de Cabeza y Columna Vertebral EMT | Traumatismo Craneoencefálico y Medular"
            description="Guía completa sobre lesiones de cabeza y columna vertebral para Técnicos en Atención Médica Prehospitalaria: TCE, lesiones medulares, inmovilización espinal, Escala de Glasgow y casos clínicos."
            keywords="lesiones de cabeza, columna vertebral, TCE, traumatismo craneoencefálico, lesión medular, inmovilización espinal, Escala de Glasgow, shock neurogénico, tríada de Cushing, EMT, paramédicos"
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
                                <SiSpine className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Lesiones de cabeza y columna
                                vertebral</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to={`${AllRoutes.HEAD_AND_COLUMN_INJURIES}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/1Qary2ipG-pGay4zfCqMrbdkp4tFqb_Fq/edit?usp=sharing&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1jgRybulRoQmZgGaGFJjVnbnXzrStGIwD/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('assessment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'assessment'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación
                                </button>
                                <button
                                    onClick={() => setActiveTab('management')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'management'
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
                                    {/* Alerta de Importancia Crítica */}
                                    <div
                                        className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                                        <div className="flex items-center mb-4">
                                            <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                            <h2 className="text-2xl font-bold text-red-700">¡Prioridad Crítica!</h2>
                                        </div>
                                        <p className="text-gray-800 leading-relaxed text-lg mb-4">
                                            Las lesiones de cabeza y columna vertebral pueden causar <strong>discapacidad
                                            permanente o muerte</strong>.
                                            El manejo adecuado prehospitalario es crucial para prevenir lesiones
                                            secundarias.
                                        </p>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                                                <p className="font-bold text-red-600">Tiempo crítico</p>
                                                <p className="text-sm">Cada minuto cuenta</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-600">Lesión secundaria</p>
                                                <p className="text-sm">Prevenible con manejo adecuado</p>
                                            </div>
                                            <div className="bg-white p-4 rounded shadow-sm text-center">
                                                <FaFirstAid className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                                                <p className="font-bold text-green-600">Técnicas correctas</p>
                                                <p className="text-sm">Salvan vidas y función</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Protocolo ABCDE */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                                            Evaluación Primaria - Protocolo ABCDE
                                        </h2>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div
                                                className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-red-700 mb-3 text-center">A -
                                                    AIRWAY</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Vía aérea con control cervical</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Evaluar permeabilidad</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                                        <span>Inmovilización cervical</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">B -
                                                    BREATHING</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Frecuencia respiratoria</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Calidad de respiración</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                                        <span>Saturación de oxígeno</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div
                                                className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                                                <h3 className="text-xl font-bold text-green-700 mb-3 text-center">C-D-E</h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <span className="font-bold text-green-600 mr-2">C:</span>
                                                        <span>Circulación y hemorragias</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="font-bold text-green-600 mr-2">D:</span>
                                                        <span>Déficit neurológico</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="font-bold text-green-600 mr-2">E:</span>
                                                        <span>Exposición y entorno</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mecanismos de lesión */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mecanismos
                                            de lesión de alto riesgo</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                                <h3 className="font-medium text-lg mb-3 text-orange-700 flex items-center">
                                                    <GiBrokenBone className="w-5 h-5 mr-2"/>
                                                    Traumatismo directo
                                                </h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li>Accidentes de tráfico (especialmente sin cinturón)</li>
                                                    <li>Caídas de altura &gt; 3 metros o 3 veces la altura del
                                                        paciente
                                                    </li>
                                                    <li>Impactos directos en cabeza o columna</li>
                                                    <li>Accidentes de motocicleta</li>
                                                    <li>Zambullidas en aguas poco profundas</li>
                                                </ul>
                                            </div>
                                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                                                <h3 className="font-medium text-lg mb-3 text-blue-700 flex items-center">
                                                    <GiSpinalCoil className="w-5 h-5 mr-2"/>
                                                    Fuerzas indirectas
                                                </h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li>Aceleración-desaceleración súbita</li>
                                                    <li>Compresión axial (carga sobre la cabeza)</li>
                                                    <li>Flexión-extensión excesiva</li>
                                                    <li>Rotación forzada del cuello</li>
                                                    <li>Lesiones por explosión</li>
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
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <FaBrain className="w-4 h-4 mr-2"/>
                                                    Lesión craneal:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Pérdida o alteración de la conciencia</li>
                                                    <li>Pupilas desiguales o no reactivas</li>
                                                    <li>Sangrado o líquido por oídos/nariz</li>
                                                    <li>Convulsiones</li>
                                                    <li>Vómitos repetidos</li>
                                                    <li>Cefalea intensa y progresiva</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                                    <GiSpinalCoil className="w-4 h-4 mr-2"/>
                                                    Lesión medular:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Debilidad o parálisis de extremidades</li>
                                                    <li>Pérdida de sensibilidad</li>
                                                    <li>Dolor cervical o de espalda</li>
                                                    <li>Dificultad respiratoria</li>
                                                    <li>Hipotensión con bradicardia</li>
                                                    <li>Priapismo en hombres</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Puntos clave */}
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
                                                    <li>Sospechar lesión espinal por mecanismo</li>
                                                    <li>Inmovilizar antes de mover</li>
                                                    <li>Evaluar función neurológica</li>
                                                    <li>Mantener oxigenación adecuada</li>
                                                    <li>Prevenir hipotensión</li>
                                                    <li>Documentar hallazgos</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                                    <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                                    NUNCA hacer:
                                                </h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Mover sin inmovilizar primero</li>
                                                    <li>Hiperextender o flexionar el cuello</li>
                                                    <li>Permitir hipotensión prolongada</li>
                                                    <li>Administrar sedantes sin indicación</li>
                                                    <li>Retirar objetos penetrantes en cabeza</li>
                                                    <li>Subestimar la gravedad</li>
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
                                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía
                                                del cráneo y el encéfalo</h2>
                                            <p className="text-gray-700 leading-relaxed">
                                                El cráneo es una estructura ósea que protege al encéfalo:
                                            </p>
                                            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                                <li><strong>Bóveda craneal:</strong> Frontal, parietales, occipital,
                                                    temporales.
                                                </li>
                                                <li><strong>Base del cráneo:</strong> Forma la plataforma sobre la que
                                                    descansa el encéfalo.
                                                </li>
                                                <li><strong>Meninges:</strong> Duramadre, aracnoides y piamadre.</li>
                                                <li><strong>Encéfalo:</strong> Cerebro, cerebelo y tronco encefálico.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="md:w-1/2 flex justify-center">
                                            <img
                                                src="/src/assets/netter.webp"
                                                alt="Anatomía del cráneo y columna vertebral"
                                                className="rounded-lg shadow-md max-w-full h-auto"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía
                                            de la columna vertebral</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="font-medium text-lg mb-2 text-gray-800">Estructura
                                                    vertebral</h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    La columna vertebral consta de 33 vértebras divididas en:
                                                </p>
                                                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                    <li><strong>7 vértebras cervicales (C1-C7)</strong></li>
                                                    <li><strong>12 vértebras torácicas (T1-T12)</strong></li>
                                                    <li><strong>5 vértebras lumbares (L1-L5)</strong></li>
                                                    <li><strong>5 vértebras sacras (fusionadas)</strong></li>
                                                    <li><strong>4 vértebras coccígeas (fusionadas)</strong></li>
                                                </ul>
                                                <p className="text-gray-700 mt-4">
                                                    Las vértebras C1 (atlas) y C2 (axis) tienen una anatomía especial
                                                    para permitir la rotación y flexión de la cabeza.
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-lg mb-2 text-gray-800">Médula
                                                    espinal</h3>
                                                <p className="text-gray-700 leading-relaxed">
                                                    La médula espinal es la vía principal de comunicación entre el
                                                    encéfalo y el resto del cuerpo:
                                                </p>
                                                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                    <li>Se extiende desde el foramen magno hasta L1-L2</li>
                                                    <li>Protegida por las vértebras y las meninges</li>
                                                    <li>Contiene sustancia gris (cuerpos neuronales) y sustancia blanca
                                                        (axones)
                                                    </li>
                                                    <li>Las raíces nerviosas salen por los forámenes intervertebrales
                                                        formando 31 pares de nervios espinales
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiopatología
                                            de las lesiones</h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white">
                                                <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Tipo de lesión</th>
                                                    <th className="py-2 px-4 border">Mecanismo</th>
                                                    <th className="py-2 px-4 border">Consecuencias</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Lesión primaria</td>
                                                    <td className="py-2 px-4 border">Daño directo por el trauma
                                                        inicial
                                                    </td>
                                                    <td className="py-2 px-4 border">Disrupción neuronal, vascular y
                                                        tisular inmediata
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Lesión secundaria</td>
                                                    <td className="py-2 px-4 border">Procesos que siguen a la lesión
                                                        inicial
                                                    </td>
                                                    <td className="py-2 px-4 border">Hipoxia, isquemia, edema,
                                                        inflamación, aumento PIC
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Shock neurogénico</td>
                                                    <td className="py-2 px-4 border">Pérdida del tono simpático</td>
                                                    <td className="py-2 px-4 border">Hipotensión, bradicardia,
                                                        vasodilatación periférica
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'assessment' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación
                                            inicial</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación de la
                                                    escena</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li><strong>Seguridad:</strong> Evaluar riesgos para rescatadores y
                                                        paciente
                                                    </li>
                                                    <li><strong>Mecanismo de lesión:</strong> Identificar fuerzas
                                                        involucradas
                                                    </li>
                                                    <li><strong>Cinemática del trauma:</strong> Dirección del impacto,
                                                        energías
                                                    </li>
                                                    <li><strong>Número de pacientes:</strong> Priorizar según triage
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación
                                                    primaria (ABCDE)</h3>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li><strong>A:</strong> Vía aérea con control cervical</li>
                                                    <li><strong>B:</strong> Respiración y ventilación</li>
                                                    <li><strong>C:</strong> Circulación y control de hemorragias</li>
                                                    <li><strong>D:</strong> Déficit neurológico (AVDI, pupilas, GCS)
                                                    </li>
                                                    <li><strong>E:</strong> Exposición y entorno</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación
                                            neurológica - Escala de Glasgow</h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border">
                                                <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-3 px-4 border text-left font-semibold">Puntuación</th>
                                                    <th className="py-3 px-4 border text-left font-semibold">Apertura
                                                        ocular
                                                    </th>
                                                    <th className="py-3 px-4 border text-left font-semibold">Respuesta
                                                        verbal
                                                    </th>
                                                    <th className="py-3 px-4 border text-left font-semibold">Respuesta
                                                        motora
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="bg-green-50">
                                                    <td className="py-2 px-4 border font-bold">6</td>
                                                    <td className="py-2 px-4 border">-</td>
                                                    <td className="py-2 px-4 border">-</td>
                                                    <td className="py-2 px-4 border">Obedece órdenes</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-bold">5</td>
                                                    <td className="py-2 px-4 border">-</td>
                                                    <td className="py-2 px-4 border">Orientado</td>
                                                    <td className="py-2 px-4 border">Localiza dolor</td>
                                                </tr>
                                                <tr className="bg-yellow-50">
                                                    <td className="py-2 px-4 border font-bold">4</td>
                                                    <td className="py-2 px-4 border">Espontánea</td>
                                                    <td className="py-2 px-4 border">Confuso</td>
                                                    <td className="py-2 px-4 border">Retirada al dolor</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-bold">3</td>
                                                    <td className="py-2 px-4 border">A la voz</td>
                                                    <td className="py-2 px-4 border">Palabras inapropiadas</td>
                                                    <td className="py-2 px-4 border">Flexión anormal (decorticación)
                                                    </td>
                                                </tr>
                                                <tr className="bg-orange-50">
                                                    <td className="py-2 px-4 border font-bold">2</td>
                                                    <td className="py-2 px-4 border">Al dolor</td>
                                                    <td className="py-2 px-4 border">Sonidos incomprensibles</td>
                                                    <td className="py-2 px-4 border">Extensión anormal
                                                        (descerebración)
                                                    </td>
                                                </tr>
                                                <tr className="bg-red-100">
                                                    <td className="py-2 px-4 border font-bold">1</td>
                                                    <td className="py-2 px-4 border">No responde</td>
                                                    <td className="py-2 px-4 border">No responde</td>
                                                    <td className="py-2 px-4 border">No responde</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">Interpretación de GCS:</h4>
                                            <ul className="space-y-1 text-gray-700">
                                                <li><strong>13-15:</strong> TCE leve</li>
                                                <li><strong>9-12:</strong> TCE moderado</li>
                                                <li><strong>≤8:</strong> TCE severo (requiere manejo avanzado de vía
                                                    aérea)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y
                                            síntomas críticos</h2>
                                        <div className="space-y-4">
                                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-red-700 flex items-center">
                                                    <FaBrain className="w-5 h-5 mr-2"/>
                                                    Signos de lesión craneal
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Alteración del nivel de conciencia</li>
                                                        <li>Amnesia del evento</li>
                                                        <li>Cefalea progresiva</li>
                                                        <li>Vómitos en proyectil</li>
                                                        <li>Convulsiones</li>
                                                    </ul>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Otorragia/otorrea (sangre/LCR por oído)</li>
                                                        <li>Rinorragia/rinorrea (sangre/LCR por nariz)</li>
                                                        <li>Signo de Battle (equimosis mastoidea)</li>
                                                        <li>Ojos de mapache (equimosis periorbitaria)</li>
                                                        <li>Anisocoria o pupilas no reactivas</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-blue-700 flex items-center">
                                                    <GiSpinalCoil className="w-5 h-5 mr-2"/>
                                                    Signos de lesión medular
                                                </h3>
                                                <div className="grid md:grid-cols-2 gap-4">
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Dolor cervical o de espalda</li>
                                                        <li>Debilidad o parálisis de extremidades</li>
                                                        <li>Pérdida de sensibilidad</li>
                                                        <li>Hormigueo o sensaciones anormales</li>
                                                    </ul>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Dificultad respiratoria (lesiones cervicales altas)</li>
                                                        <li>Priapismo (erección involuntaria persistente)</li>
                                                        <li>Incontinencia o retención urinaria/fecal</li>
                                                        <li>Hipotensión con bradicardia (shock neurogénico)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'management' && (
                                <div className="space-y-8">
                                    {/* Principios fundamentales */}
                                    <div
                                        className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                        <div className="flex items-center mb-4">
                                            <FaFirstAid className="w-6 h-6 text-blue-600 mr-2"/>
                                            <h2 className="text-2xl font-bold text-blue-800">Principios Fundamentales
                                                del Manejo</h2>
                                        </div>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <FiActivity className="w-8 h-8 text-blue-600 mx-auto mb-2"/>
                                                <p className="font-bold text-blue-700">ABC + Control cervical</p>
                                                <p className="text-sm text-gray-600">Siempre priorizar</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <MdOutlineTimer className="w-8 h-8 text-orange-600 mx-auto mb-2"/>
                                                <p className="font-bold text-orange-700">Prevenir lesión 2°</p>
                                                <p className="text-sm text-gray-600">Hipoxia e hipotensión</p>
                                            </div>
                                            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                                                <FaFirstAid className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                                                <p className="font-bold text-green-700">Traslado temprano</p>
                                                <p className="text-sm text-gray-600">Centro especializado</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Manejo de TCE */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <FaBrain className="w-6 h-6 mr-2 text-red-500"/>
                                            Manejo de Traumatismo Craneoencefálico
                                        </h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                                                <h3 className="font-semibold text-lg mb-3 text-red-700 flex items-center">
                                                    <MdWarning className="w-5 h-5 mr-2"/>
                                                    Objetivos prioritarios
                                                </h3>
                                                <ul className="space-y-2 text-gray-700">
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>SpO₂ ≥ 94%:</strong> Oxigenación cerebral adecuada</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>PAS ≥ 90 mmHg:</strong> Perfusión cerebral mínima</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Normocapnia:</strong> Evitar hiperventilación</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                                        <span><strong>Control PIC:</strong> Elevación 30° si es posible</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                                                <h3 className="font-semibold text-lg mb-3 text-orange-700 flex items-center">
                                                    <GiBrokenBone className="w-5 h-5 mr-2"/>
                                                    Manejo según severidad
                                                </h3>
                                                <div className="space-y-3">
                                                    <div
                                                        className="p-3 bg-green-100 rounded border-l-4 border-green-500">
                                                        <p className="font-semibold text-green-800">TCE Leve (GCS
                                                            14-15)</p>
                                                        <p className="text-sm text-gray-700">Observación, evaluación
                                                            seriada, traslado para TC</p>
                                                    </div>
                                                    <div
                                                        className="p-3 bg-yellow-100 rounded border-l-4 border-yellow-500">
                                                        <p className="font-semibold text-yellow-800">TCE Moderado (GCS
                                                            9-13)</p>
                                                        <p className="text-sm text-gray-700">O₂, monitorización
                                                            continua, traslado urgente</p>
                                                    </div>
                                                    <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                                                        <p className="font-semibold text-red-800">TCE Severo (GCS
                                                            ≤8)</p>
                                                        <p className="text-sm text-gray-700">Intubación, ventilación
                                                            controlada, traslado inmediato</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Protocolo de inmovilización */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                                            <GiSpinalCoil className="w-6 h-6 mr-2 text-blue-500"/>
                                            Protocolo de Inmovilización Espinal
                                        </h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                                <thead>
                                                <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                                                    <th className="py-3 px-4 border text-left font-semibold text-gray-800">Técnica</th>
                                                    <th className="py-3 px-4 border text-left font-semibold text-gray-800">Indicaciones</th>
                                                    <th className="py-3 px-4 border text-left font-semibold text-gray-800">Consideraciones
                                                        críticas
                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr className="hover:bg-blue-50">
                                                    <td className="py-3 px-4 border font-medium text-blue-700">Estabilización
                                                        manual
                                                    </td>
                                                    <td className="py-3 px-4 border">Inicio inmediato, mantener hasta
                                                        inmovilización completa
                                                    </td>
                                                    <td className="py-3 px-4 border">❌ Sin tracción, posición anatómica
                                                        neutra
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-green-50">
                                                    <td className="py-3 px-4 border font-medium text-green-700">Collarín
                                                        cervical
                                                    </td>
                                                    <td className="py-3 px-4 border">Complemento, NO reemplaza
                                                        estabilización manual
                                                    </td>
                                                    <td className="py-3 px-4 border">✅ Talla correcta, no compromete vía
                                                        aérea
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-orange-50">
                                                    <td className="py-3 px-4 border font-medium text-orange-700">Inmovilizador
                                                        de cabeza
                                                    </td>
                                                    <td className="py-3 px-4 border">Limitar movimiento lateral en tabla
                                                        espinal
                                                    </td>
                                                    <td className="py-3 px-4 border">⚠️ Asegurar con cintas, acceso a
                                                        vía aérea
                                                    </td>
                                                </tr>
                                                <tr className="hover:bg-red-50">
                                                    <td className="py-3 px-4 border font-medium text-red-700">Tabla
                                                        espinal
                                                    </td>
                                                    <td className="py-3 px-4 border">Uso selectivo basado en criterios
                                                        clínicos
                                                    </td>
                                                    <td className="py-3 px-4 border">🕐 Tiempo mínimo, riesgo úlceras por
                                                        presión
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Criterios de decisión */}
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Toma de
                                            Decisiones Críticas</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="p-5 bg-green-50 border border-green-200 rounded-lg">
                                                    <h3 className="font-semibold text-lg mb-3 text-green-700 flex items-center">
                                                        <MdCheckCircle className="w-5 h-5 mr-2"/>
                                                        Criterios de Inmovilización (AAOS)
                                                    </h3>
                                                    <p className="text-gray-700 mb-3 font-medium">Inmovilizar SI existe
                                                        alguno:</p>
                                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                        <li>🚗 <strong>Mecanismo de alto riesgo</strong> (MVA,
                                                            caída &gt;3m, zambullida)
                                                        </li>
                                                        <li>🎯 <strong>Dolor línea media</strong> cervical o dorsal</li>
                                                        <li>🧠 <strong>Déficit neurológico</strong> motor o sensitivo
                                                        </li>
                                                        <li>😵 <strong>Alteración conciencia</strong> (GCS &lt;15,
                                                            intoxicación)
                                                        </li>
                                                        <li>🤕 <strong>Lesión distractora</strong> dolorosa</li>
                                                        <li>🗣️ <strong>Incapacidad comunicarse</strong> (idioma, edad)
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="p-5 bg-orange-50 border border-orange-200 rounded-lg">
                                                    <h3 className="font-semibold text-lg mb-3 text-orange-700 flex items-center">
                                                        <FiAlertTriangle className="w-5 h-5 mr-2"/>
                                                        Técnicas de Extricación Segura
                                                    </h3>
                                                    <div className="space-y-3">
                                                        <div className="flex items-start">
                                                            <span
                                                                className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">1</span>
                                                            <span className="text-gray-700">Estabilización manual inmediata (rescatador principal)</span>
                                                        </div>
                                                        <div className="flex items-start">
                                                            <span
                                                                className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">2</span>
                                                            <span className="text-gray-700">Evaluación inicial ABC manteniendo control</span>
                                                        </div>
                                                        <div className="flex items-start">
                                                            <span
                                                                className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">3</span>
                                                            <span className="text-gray-700">Aplicación de collarín (segundo rescatador)</span>
                                                        </div>
                                                        <div className="flex items-start">
                                                            <span
                                                                className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">4</span>
                                                            <span className="text-gray-700">Rotación en bloque coordinada (mín. 3-4 personas)</span>
                                                        </div>
                                                        <div className="flex items-start">
                                                            <span
                                                                className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-1 rounded mr-2 mt-0.5">5</span>
                                                            <span className="text-gray-700">Inmovilización completa y verificación</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Algoritmo de manejo de cascos */}
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                                        <h3 className="text-xl font-semibold mb-4 text-yellow-800 flex items-center">
                                            <FiEye className="w-5 h-5 mr-2"/>
                                            Algoritmo: ¿Retirar o mantener el casco?
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                                                <h4 className="font-semibold text-red-800 mb-2">🚨 RETIRAR casco si:</h4>
                                                <ul className="space-y-1 text-gray-700 text-sm">
                                                    <li>• Compromete vía aérea o ventilación</li>
                                                    <li>• Impide evaluación neurológica</li>
                                                    <li>• No permite inmovilización neutra</li>
                                                    <li>• Está mal ajustado o dañado</li>
                                                    <li>• Paciente requiere RCP</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                                                <h4 className="font-semibold text-green-800 mb-2">✅ MANTENER casco
                                                    si:</h4>
                                                <ul className="space-y-1 text-gray-700 text-sm">
                                                    <li>• Vía aérea y ventilación adecuadas</li>
                                                    <li>• Permite evaluación neurológica</li>
                                                    <li>• Facilita inmovilización neutra</li>
                                                    <li>• Está bien ajustado y sin daños</li>
                                                    <li>• No compromete manejo médico</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-4 p-3 bg-white rounded border-l-4 border-yellow-500">
                                            <p className="text-sm text-gray-700"><strong>⚠️ Técnica de
                                                retirada:</strong> Siempre con 2 rescatadores: uno mantiene
                                                estabilización cervical mientras el otro retira el casco lentamente.
                                                Aplicar collarín inmediatamente.</p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                                        clínicos para análisis</h2>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Trauma
                                            craneoencefálico</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Hombre de 42 años que sufre caída desde 2 metros de altura, golpeándose la
                                            cabeza contra el suelo.
                                            A su llegada, presenta pérdida intermitente de consciencia y sangrado por
                                            oído derecho.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">Evaluación:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>A: Vía aérea permeable con riesgo</li>
                                                <li>B: FR 22/min, SpO₂ 94%</li>
                                                <li>C: FC 62/min, TA 152/88 mmHg</li>
                                                <li>D: GCS 12 (O3, V4, M5), pupilas anisocóricas</li>
                                                <li>E: Otorragia derecha, contusión occipital</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Estabilización cervical inmediata</li>
                                                <li>Oxígeno a alto flujo (10-15 L/min)</li>
                                                <li>Elevación de cabeza 30° si no hay hipotensión</li>
                                                <li>Monitorización neurológica continua</li>
                                                <li>Traslado urgente a centro con neurocirugía</li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Sospecha de
                                            lesión medular</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Mujer de 28 años, accidente de moto. No puede mover las piernas y refiere
                                            sensación de hormigueo en manos.
                                            Está consciente y orientada.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">Evaluación:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>A: Vía aérea permeable</li>
                                                <li>B: FR 18/min, SpO₂ 96%</li>
                                                <li>C: FC 95/min, TA 90/60 mmHg</li>
                                                <li>D: GCS 15, paraplejía, hipoestesia en miembros inferiores</li>
                                                <li>E: Dolor a la palpación en columna dorsal media</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Inmovilización espinal completa</li>
                                                <li>Oxígeno para mantener SpO₂ ≥94%</li>
                                                <li>Líquidos IV para mantener TA ≥90 mmHg (posible shock neurogénico)
                                                </li>
                                                <li>Evitar hipotermia</li>
                                                <li>Traslado a centro con unidad de columna</li>
                                            </ol>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paciente con
                                            casco</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Ciclista de 35 años que colisiona con automóvil. Lleva casco, está
                                            consciente pero confuso.
                                            Refiere dolor cervical intenso.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">Evaluación:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>A: Vía aérea permeable con casco puesto</li>
                                                <li>B: FR 20/min, SpO₂ 95%</li>
                                                <li>C: FC 88/min, TA 130/85 mmHg</li>
                                                <li>D: GCS 14 (O4, V4, M6), pupilas isocóricas reactivas</li>
                                                <li>E: Dolor cervical, sin déficit motor aparente</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Estabilización manual de cabeza sobre el casco</li>
                                                <li>Valorar retirada del casco (técnica de 2 rescatadores)</li>
                                                <li>Aplicar collarín cervical inmediatamente tras retirada</li>
                                                <li>Inmovilización espinal completa</li>
                                                <li>Monitorización y traslado a centro hospitalario</li>
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
                            pagina="head-and-column-injuries"
                            titulo="Foro de Discusión - Head And Column Injuries"
                        />


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
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición).
                                        </li>
                                        <li>American College of Surgeons. (2018). <em>Advanced Trauma Life
                                            Support</em> (10ª edición).
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/trauma-care/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre manejo de trauma</a></li>
                                        <li><a href="https://www.jems.com/patient-care/trauma/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de trauma</a></li>
                                        <li><a href="https://www.braintrauma.org/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">Brain
                                            Trauma Foundation - Guías de manejo</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>GCS App - Cálculo de Escala de Glasgow</li>
                                        <li>Trauma Reference - Algoritmos de manejo</li>
                                        <li>Medscape - Referencias médicas y calculadoras</li>
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
