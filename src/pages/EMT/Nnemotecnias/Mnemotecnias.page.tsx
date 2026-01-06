import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {RxLetterSpacing} from "react-icons/rx";
import {faqData} from "./Mnemotecnias.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf} from "react-icons/bs";
import {FaBrain, FaClipboardCheck, FaUserMd} from "react-icons/fa";
import {useState} from "react";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";

export default function Mnemotecnias() {
    const [activeTab, setActiveTab] = useState<'overview' | 'main' | 'examples' | 'clinical'>('overview');

    return (
        <SEOWrapper
            title="Mnemotecnias EMT | Acrónimos y Técnicas de Memorización en Atención Prehospitalaria"
            description="Descubre las mnemotecnias esenciales para paramédicos: acrónimos, técnicas de memorización, casos prácticos y recursos para mejorar la atención prehospitalaria. Aprende a aplicar ABCDE, SAMPLE, OPQRST, DCAP-BTLS y más."
            keywords="mnemotecnias, EMT, paramédicos, atención prehospitalaria, acrónimos médicos, ABCDE, SAMPLE, OPQRST, DCAP-BTLS, técnicas de memorización, casos clínicos, protocolos, emergencias médicas"
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
                                <RxLetterSpacing className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Mnemotecnias en Atención
                                Prehospitalaria</h1>
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
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/mnemotecnias/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
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
                                    onClick={() => setActiveTab('main')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'main'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Principales Mnemotecnias
                                </button>
                                <button
                                    onClick={() => setActiveTab('examples')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'examples'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Prácticos
                                </button>
                                <button
                                    onClick={() => setActiveTab('clinical')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'clinical'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Aplicación Clínica
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son
                                            las mnemotecnias en medicina de emergencia?</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            Las mnemotecnias son herramientas de memorización que utilizan acrónimos,
                                            palabras o frases para recordar
                                            secuencias importantes, pasos críticos o listas de verificación en la
                                            atención prehospitalaria. Son fundamentales
                                            para garantizar una evaluación sistemática y completa del paciente.
                                        </p>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold text-blue-800 mb-2">💡 Dato importante:</h4>
                                            <p className="text-blue-700">
                                                Estudios demuestran que el uso de mnemotecnias reduce errores
                                                diagnósticos hasta en un 40%
                                                y mejora la retención de información crítica durante situaciones de alta
                                                presión.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué
                                            son esenciales para paramédicos?</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <h4 className="font-semibold text-lg mb-2 flex items-center">
                                                    <FaClipboardCheck className="text-green-500 mr-2"/>
                                                    Beneficios Clínicos
                                                </h4>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li>Evaluación sistemática y consistente</li>
                                                    <li>Reducción de errores por omisión</li>
                                                    <li>Mejora en la comunicación con el equipo médico</li>
                                                    <li>Toma de decisiones más rápida bajo presión</li>
                                                    <li>Mayor confianza en situaciones críticas</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-lg mb-2 flex items-center">
                                                    <FaBrain className="text-blue-500 mr-2"/>
                                                    Beneficios Cognitivos
                                                </h4>
                                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                    <li>Facilita la retención de información compleja</li>
                                                    <li>Automatiza procesos de evaluación</li>
                                                    <li>Mejora el rendimiento bajo estrés</li>
                                                    <li>Estandariza protocolos de atención</li>
                                                    <li>Optimiza el tiempo de respuesta</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estándares
                                            internacionales</h2>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="text-gray-700 mb-2">
                                                <strong>AAOS (American Academy of Orthopaedic
                                                    Surgeons):</strong> Recomienda el uso sistemático de mnemotecnias
                                                para la evaluación primaria y secundaria.
                                            </p>
                                            <p className="text-gray-700 mb-2">
                                                <strong>NAEMT (National Association of EMTs):</strong> Incluye
                                                mnemotecnias como parte integral del currículo PHTLS.
                                            </p>
                                            <p className="text-gray-700">
                                                <strong>AHA (American Heart Association):</strong> Incorpora
                                                mnemotecnias en los protocolos de BLS y ACLS.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'main' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mnemotecnias
                                        esenciales por categoría</h2>

                                    {/* Evaluación Primaria */}
                                    <div className="bg-red-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-red-700 flex items-center">
                                            <FaUserMd className="mr-2"/>
                                            Evaluación Primaria
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">ABC / XABCDE</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>X:</strong> Hemorragia exanguinante</li>
                                                    <li><strong>A:</strong> Airway (vía aérea)</li>
                                                    <li><strong>B:</strong> Breathing (respiración)</li>
                                                    <li><strong>C:</strong> Circulation (circulación)</li>
                                                    <li><strong>D:</strong> Disability (neurológico)</li>
                                                    <li><strong>E:</strong> Exposure (exposición/ambiente)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">AVDI / AVPU</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>A:</strong> Alerta</li>
                                                    <li><strong>V:</strong> Responde a la Voz</li>
                                                    <li><strong>P:</strong> Responde al Dolor (Pain)</li>
                                                    <li><strong>U:</strong> No responde (Unresponsive)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Historia Clínica */}
                                    <div className="bg-blue-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Historia Clínica</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">SAMPLE</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>S:</strong> Signs/Symptoms (signos/síntomas)</li>
                                                    <li><strong>A:</strong> Allergies (alergias)</li>
                                                    <li><strong>M:</strong> Medications (medicamentos)</li>
                                                    <li><strong>P:</strong> Past medical history (antecedentes)</li>
                                                    <li><strong>L:</strong> Last oral intake (última ingesta)</li>
                                                    <li><strong>E:</strong> Events (eventos previos)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">OPQRST</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>O:</strong> Onset (inicio)</li>
                                                    <li><strong>P:</strong> Provocation (provocación/paliación)</li>
                                                    <li><strong>Q:</strong> Quality (calidad)</li>
                                                    <li><strong>R:</strong> Radiation (irradiación)</li>
                                                    <li><strong>S:</strong> Severity (severidad 1-10)</li>
                                                    <li><strong>T:</strong> Time (tiempo/duración)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Examen Físico */}
                                    <div className="bg-green-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-green-700">Examen Físico</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">DCAP-BTLS</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>D:</strong> Deformities (deformidades)</li>
                                                    <li><strong>C:</strong> Contusions (contusiones)</li>
                                                    <li><strong>A:</strong> Abrasions (abrasiones)</li>
                                                    <li><strong>P:</strong> Punctures (punciones)</li>
                                                    <li><strong>B:</strong> Burns (quemaduras)</li>
                                                    <li><strong>T:</strong> Tenderness (sensibilidad)</li>
                                                    <li><strong>L:</strong> Lacerations (laceraciones)</li>
                                                    <li><strong>S:</strong> Swelling (hinchazón)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">PEARL</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>P:</strong> Pupils (pupilas)</li>
                                                    <li><strong>E:</strong> Equal (iguales)</li>
                                                    <li><strong>A:</strong> And (y)</li>
                                                    <li><strong>R:</strong> Reactive (reactivas)</li>
                                                    <li><strong>L:</strong> Light (a la luz)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Condiciones Específicas */}
                                    <div className="bg-purple-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-purple-700">Condiciones
                                            Específicas</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">AEIOU-TIPS (Estado Mental
                                                    Alterado)</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>A:</strong> Alcohol/Acidosis</li>
                                                    <li><strong>E:</strong> Epilepsy/Endocrino</li>
                                                    <li><strong>I:</strong> Insulin (hipo/hiperglucemia)</li>
                                                    <li><strong>O:</strong> Overdose/Oxygen</li>
                                                    <li><strong>U:</strong> Uremia</li>
                                                    <li><strong>T:</strong> Trauma/Temperature</li>
                                                    <li><strong>I:</strong> Infection</li>
                                                    <li><strong>P:</strong> Psychiatric</li>
                                                    <li><strong>S:</strong> Stroke</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg mb-2">FAST (ACV)</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>F:</strong> Face (caída facial)</li>
                                                    <li><strong>A:</strong> Arm (debilidad en brazo)</li>
                                                    <li><strong>S:</strong> Speech (habla alterada)</li>
                                                    <li><strong>T:</strong> Time (tiempo crítico)</li>
                                                </ul>
                                                <br/>
                                                <h4 className="font-medium text-lg mb-2">RICE (Lesiones
                                                    Musculoesqueléticas)</h4>
                                                <ul className="space-y-1 text-sm">
                                                    <li><strong>R:</strong> Rest (reposo)</li>
                                                    <li><strong>I:</strong> Ice (hielo)</li>
                                                    <li><strong>C:</strong> Compression (compresión)</li>
                                                    <li><strong>E:</strong> Elevation (elevación)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Técnicas de Memorización */}
                                    <div className="bg-orange-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-orange-700">Técnicas de
                                            Memorización Efectivas</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-2">Métodos de Estudio</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm">
                                                    <li>Repetición espaciada (flashcards)</li>
                                                    <li>Asociación visual e imágenes mentales</li>
                                                    <li>Práctica en simulacros realistas</li>
                                                    <li>Enseñar a otros compañeros</li>
                                                    <li>Crear historias con las letras</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2">Aplicación Práctica</h4>
                                                <ul className="list-disc list-inside space-y-1 text-sm">
                                                    <li>Usar en cada llamada real</li>
                                                    <li>Verbalizar durante la evaluación</li>
                                                    <li>Practicar bajo presión de tiempo</li>
                                                    <li>Revisar casos después del turno</li>
                                                    <li>Adaptar al contexto específico</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'examples' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                                        prácticos paso a paso</h2>

                                    {/* Caso 1 */}
                                    <div className="bg-red-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-red-700">Caso 1: Accidente de
                                            tráfico - Evaluación con XABCDE</h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <p className="italic text-gray-600 mb-3">
                                                <strong>Escenario:</strong> Conductor masculino de 35 años tras colisión
                                                frontal. Consciente, quejándose de dolor torácico.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold mb-2">Aplicación sistemática:</h4>
                                                    <ul className="space-y-2 text-sm">
                                                        <li><strong>X:</strong> "¿Hay hemorragia externa masiva?" → No
                                                            visible
                                                        </li>
                                                        <li><strong>A:</strong> "¿Puede hablar claramente?" → Sí, vía
                                                            aérea permeable
                                                        </li>
                                                        <li><strong>B:</strong> "Respiración: frecuencia, profundidad" →
                                                            22/min, superficial
                                                        </li>
                                                        <li><strong>C:</strong> "Pulso, perfusión, hemorragias" → Pulso
                                                            110/min, piel pálida
                                                        </li>
                                                        <li><strong>D:</strong> "Evaluación neurológica" → GCS 15,
                                                            pupilas PEARL
                                                        </li>
                                                        <li><strong>E:</strong> "Exposición controlada" → Revisar
                                                            lesiones ocultas
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Hallazgos y acciones:</h4>
                                                    <ul className="space-y-2 text-sm">
                                                        <li>Posible lesión torácica (dolor + respiración superficial)
                                                        </li>
                                                        <li>Signos de compensación (taquicardia, palidez)</li>
                                                        <li>Necesidad de O₂ suplementario</li>
                                                        <li>Inmovilización cervical</li>
                                                        <li>Transporte prioritario</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 2 */}
                                    <div className="bg-blue-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Caso 2: Dolor torácico
                                            - Historia con SAMPLE + OPQRST</h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <p className="italic text-gray-600 mb-3">
                                                <strong>Escenario:</strong> Mujer de 58 años con dolor torácico súbito
                                                en reposo.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold mb-2">SAMPLE:</h4>
                                                    <ul className="space-y-1 text-sm">
                                                        <li><strong>S:</strong> Dolor torácico opresivo, sudoración</li>
                                                        <li><strong>A:</strong> Alergia a penicilina</li>
                                                        <li><strong>M:</strong> Metformina, atorvastatina</li>
                                                        <li><strong>P:</strong> Diabetes tipo 2, hipertensión</li>
                                                        <li><strong>L:</strong> Desayuno hace 2 horas</li>
                                                        <li><strong>E:</strong> Viendo TV, sin esfuerzo</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">OPQRST:</h4>
                                                    <ul className="space-y-1 text-sm">
                                                        <li><strong>O:</strong> Inicio súbito hace 30 min</li>
                                                        <li><strong>P:</strong> Nada lo alivia, empeora con movimiento
                                                        </li>
                                                        <li><strong>Q:</strong> Opresivo, "como un peso"</li>
                                                        <li><strong>R:</strong> Se irradia a brazo izquierdo y mandíbula
                                                        </li>
                                                        <li><strong>S:</strong> 8/10 en escala de dolor</li>
                                                        <li><strong>T:</strong> Continuo por 30 minutos</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-3 p-3 bg-yellow-100 rounded">
                                                <strong>Interpretación:</strong> Cuadro compatible con síndrome
                                                coronario agudo.
                                                Alto riesgo por: diabetes, edad, características del dolor, irradiación
                                                típica.
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 3 */}
                                    <div className="bg-green-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-green-700">Caso 3: Estado mental
                                            alterado - AEIOU-TIPS</h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <p className="italic text-gray-600 mb-3">
                                                <strong>Escenario:</strong> Hombre de 45 años encontrado confuso en la
                                                calle por transeúntes.
                                            </p>
                                            <div className="space-y-3">
                                                <h4 className="font-semibold">Proceso de eliminación sistemática:</h4>
                                                <div className="grid md:grid-cols-3 gap-3 text-sm">
                                                    <div>
                                                        <strong>A - Alcohol:</strong> ¿Olor a alcohol? ¿Historia de
                                                        alcoholismo?
                                                    </div>
                                                    <div>
                                                        <strong>E - Epilepsia:</strong> ¿Signos post-ictal? ¿Mordedura
                                                        de lengua?
                                                    </div>
                                                    <div>
                                                        <strong>I - Insulina:</strong> ¿Diabético conocido?
                                                        ¿Glucometría?
                                                    </div>
                                                    <div>
                                                        <strong>O - Overdose:</strong> ¿Pupilas? ¿Parafernalia?
                                                        ¿Medicamentos?
                                                    </div>
                                                    <div>
                                                        <strong>U - Uremia:</strong> ¿Diálisis? ¿Problemas renales?
                                                    </div>
                                                    <div>
                                                        <strong>T - Trauma:</strong> ¿Signos de trauma craneal?
                                                    </div>
                                                    <div>
                                                        <strong>I - Infección:</strong> ¿Fiebre? ¿Signos de sepsis?
                                                    </div>
                                                    <div>
                                                        <strong>P - Psiquiátrico:</strong> ¿Historia psiquiátrica?
                                                    </div>
                                                    <div>
                                                        <strong>S - Stroke:</strong> ¿FAST positivo? ¿Déficits focales?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Caso 4 */}
                                    <div className="bg-purple-50 p-5 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-purple-700">Caso 4: Examen físico
                                            sistemático - DCAP-BTLS</h3>
                                        <div className="bg-white p-4 rounded mb-4">
                                            <p className="italic text-gray-600 mb-3">
                                                <strong>Escenario:</strong> Motociclista tras caída, evaluación
                                                secundaria de extremidades.
                                            </p>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-semibold mb-2">Inspección visual:</h4>
                                                    <ul className="space-y-1 text-sm">
                                                        <li><strong>D:</strong> Deformidad en antebrazo derecho</li>
                                                        <li><strong>C:</strong> Contusión en muslo izquierdo</li>
                                                        <li><strong>A:</strong> Abrasiones múltiples en brazo</li>
                                                        <li><strong>P:</strong> Sin punciones evidentes</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold mb-2">Palpación sistemática:</h4>
                                                    <ul className="space-y-1 text-sm">
                                                        <li><strong>B:</strong> Sin quemaduras</li>
                                                        <li><strong>T:</strong> Dolor a la palpación en antebrazo</li>
                                                        <li><strong>L:</strong> Laceración menor en rodilla</li>
                                                        <li><strong>S:</strong> Hinchazón progresiva en muñeca</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mt-3 p-3 bg-yellow-100 rounded">
                                                <strong>Plan de manejo:</strong> Inmovilización de antebrazo, control de
                                                hemorragia menor,
                                                evaluación neurovascular distal, analgesia según protocolo.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'clinical' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Aplicación
                                        clínica avanzada</h2>

                                    {/* Tabla de Prioridades */}
                                    <div className="bg-white border rounded-lg overflow-hidden">
                                        <h3 className="text-lg font-semibold p-4 bg-gray-100">Priorización según
                                            mnemotecnias</h3>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full">
                                                <thead className="bg-gray-50">
                                                <tr>
                                                    <th className="px-4 py-2 text-left">Prioridad</th>
                                                    <th className="px-4 py-2 text-left">Mnemotecnia</th>
                                                    <th className="px-4 py-2 text-left">Aplicación</th>
                                                    <th className="px-4 py-2 text-left">Tiempo objetivo</th>
                                                </tr>
                                                </thead>
                                                <tbody className="divide-y">
                                                <tr>
                                                    <td className="px-4 py-2 font-medium text-red-600">Crítica</td>
                                                    <td className="px-4 py-2">XABCDE</td>
                                                    <td className="px-4 py-2">Evaluación primaria completa</td>
                                                    <td className="px-4 py-2">&lt; 60 segundos</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-medium text-orange-600">Alta</td>
                                                    <td className="px-4 py-2">SAMPLE rápido</td>
                                                    <td className="px-4 py-2">Historia esencial</td>
                                                    <td className="px-4 py-2">2-3 minutos</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-medium text-yellow-600">Media</td>
                                                    <td className="px-4 py-2">DCAP-BTLS</td>
                                                    <td className="px-4 py-2">Examen físico detallado</td>
                                                    <td className="px-4 py-2">3-5 minutos</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-2 font-medium text-green-600">Baja</td>
                                                    <td className="px-4 py-2">OPQRST completo</td>
                                                    <td className="px-4 py-2">Caracterización de síntomas</td>
                                                    <td className="px-4 py-2">5+ minutos</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Adaptación por Edad */}
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2 text-blue-700">Pediátrico (0-16 años)</h4>
                                            <ul className="text-sm space-y-1">
                                                <li><strong>SAMPLE:</strong> Información de padres/cuidadores</li>
                                                <li><strong>AVPU:</strong> Adaptado a nivel de desarrollo</li>
                                                <li><strong>DCAP-BTLS:</strong> Búsqueda de maltrato infantil</li>
                                                <li><strong>Consideración:</strong> Diferentes valores normales</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2 text-green-700">Adulto (17-64 años)</h4>
                                            <ul className="text-sm space-y-1">
                                                <li><strong>Aplicación estándar</strong> de todas las mnemotecnias</li>
                                                <li><strong>SAMPLE:</strong> Historia detallada posible</li>
                                                <li><strong>OPQRST:</strong> Descripción precisa del dolor</li>
                                                <li><strong>Enfoque:</strong> Eficiencia y precisión</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h4 className="font-semibold mb-2 text-orange-700">Geriátrico (65+
                                                años)</h4>
                                            <ul className="text-sm space-y-1">
                                                <li><strong>SAMPLE:</strong> Polifarmacia común</li>
                                                <li><strong>AVPU:</strong> Baseline cognitivo variable</li>
                                                <li><strong>DCAP-BTLS:</strong> Piel frágil, fácil equimosis</li>
                                                <li><strong>Consideración:</strong> Presentación atípica</li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Errores Comunes */}
                                    <div className="bg-red-50 p-5 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-3 text-red-700">Errores comunes y cómo
                                            evitarlos</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-2">❌ Errores frecuentes:</h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>Saltarse pasos en situaciones críticas</li>
                                                    <li>No adaptar al contexto del paciente</li>
                                                    <li>Memorizar sin entender el propósito</li>
                                                    <li>Usar mnemotecnias inadecuadas para la situación</li>
                                                    <li>No verbalizar durante la evaluación</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2">✅ Mejores prácticas:</h4>
                                                <ul className="text-sm space-y-1">
                                                    <li>Practicar hasta automatizar</li>
                                                    <li>Verbalizar cada paso en voz alta</li>
                                                    <li>Adaptar velocidad según criticidad</li>
                                                    <li>Combinar mnemotecnias según necesidad</li>
                                                    <li>Revisar y mejorar constantemente</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Integración con Protocolos */}
                                    <div className="bg-gray-50 p-5 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-3">Integración con protocolos
                                            médicos</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <h4 className="font-medium">Soporte Vital Básico (BLS):</h4>
                                                <p className="text-sm text-gray-700">
                                                    XABCDE proporciona la estructura para la evaluación primaria en BLS,
                                                    asegurando que no se omitan pasos críticos durante la reanimación.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Trauma (PHTLS):</h4>
                                                <p className="text-sm text-gray-700">
                                                    DCAP-BTLS es fundamental en el examen físico del paciente
                                                    traumatizado,
                                                    complementando la evaluación biomecánica del mecanismo de lesión.
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Emergencias Médicas:</h4>
                                                <p className="text-sm text-gray-700">
                                                    SAMPLE y OPQRST permiten recopilar información crucial para la toma
                                                    de
                                                    decisiones terapéuticas y comunicación con el hospital receptor.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* FAQ Section */}
                        <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
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
                            pagina="nnemotecnias"
                            titulo="Foro de Discusión - Nnemotecnias"
                        />


                        {/* Referencias y Recursos */}
                        <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
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
                                        <li><a href="https://www.ems1.com/patient-assessment/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre evaluación y mnemotecnias</a></li>
                                        <li><a href="https://www.jems.com/patient-care/assessment/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de evaluación</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Canal de YouTube con videos educativos</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Medscape - Referencias médicas y calculadoras</li>
                                        <li>Paramedicine - Guías clínicas y medicamentos</li>
                                        <li>Quizlet - Tarjetas de estudio de mnemotecnias</li>
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

