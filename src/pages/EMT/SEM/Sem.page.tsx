import {NavLink} from "react-router";
import {FaAmbulance} from "react-icons/fa";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Sem.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function Sem() {
    const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'activation' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <SEOWrapper
            title="Sistema de Emergencias Médicas (SEM) | Curso EMT"
            description="Conoce el funcionamiento, estructura, protocolos y casos prácticos del Sistema de Emergencias Médicas (SEM) para Técnicos en Atención Médica Prehospitalaria. Incluye recursos, preguntas frecuentes y material de estudio."
            keywords="SEM, sistema de emergencias médicas, estructura SEM, protocolos SEM, ambulancias, TAMP, EMT, curso emergencias médicas, casos prácticos, atención prehospitalaria"
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
                                <FaAmbulance className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Sistema SEM</h1>
                            <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
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
                                to="/sem/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1z_yrMHjG6PCtLZkRgKFEoZKRE-zcD-BV/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://drive.google.com/file/d/1DDHTjUDjx6yYCR3UA4apObjgoHw-wTEf/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                        </div>

                        {/* Quiz rápido */}
                        {showQuickQuiz && (
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus
                                    conocimientos sobre el SEM</h3>
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
                                    onClick={() => setActiveTab('structure')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'structure'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Estructura y Componentes
                                </button>
                                <button
                                    onClick={() => setActiveTab('activation')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'activation'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Activación y Protocolo
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es
                                            el Sistema de Emergencias Médicas (SEM)?</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El SEM es un conjunto organizado de recursos, personal y protocolos que
                                            permite la atención inmediata y coordinada de emergencias médicas fuera del
                                            hospital. Su objetivo es salvar vidas, reducir secuelas y garantizar
                                            atención profesional desde el primer contacto hasta la llegada al hospital.
                                        </p>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia
                                            del SEM</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Reduce la mortalidad y morbilidad en situaciones críticas.</li>
                                            <li>Permite atención rápida y profesional en el lugar del incidente.</li>
                                            <li>Coordina recursos y personal para una respuesta eficiente.</li>
                                            <li>Incluye atención prehospitalaria, transporte, comunicación y
                                                coordinación hospitalaria.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Historia
                                            y evolución</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>El concepto de SEM surge en la década de 1960 en EE.UU. y Europa,
                                                evolucionando hacia sistemas integrados y normados.
                                            </li>
                                            <li>En México, el SEM se ha fortalecido con la NOM-034-SSA3-2013 y la
                                                integración del 911 como número nacional de emergencias.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'structure' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estructura
                                            y componentes del SEM</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Centro regulador de urgencias médicas (CRUM):</strong> Recibe
                                                llamadas, coordina recursos y prioriza incidentes.
                                            </li>
                                            <li><strong>Ambulancias:</strong> Básicas, avanzadas y de cuidados
                                                intensivos, equipadas según la NOM-034-SSA3-2013.
                                            </li>
                                            <li><strong>Personal:</strong> TUM, paramédicos, médicos, operadores y
                                                radio-operadores.
                                            </li>
                                            <li><strong>Hospitales receptores:</strong> Coordinación para traslado y
                                                recepción de pacientes.
                                            </li>
                                            <li><strong>Comunicación:</strong> Sistemas de radio, telefonía y datos para
                                                coordinación efectiva.
                                            </li>
                                            <li><strong>Protocolos y guías:</strong> Normas oficiales, algoritmos y
                                                procedimientos estandarizados.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cadena
                                            de supervivencia prehospitalaria</h2>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Reconocimiento temprano de la emergencia y activación del SEM.</li>
                                            <li>Atención inicial y soporte vital básico.</li>
                                            <li>Despliegue y llegada de la ambulancia.</li>
                                            <li>Atención avanzada y estabilización.</li>
                                            <li>Transporte y transferencia al hospital.</li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de
                                            ambulancias y personal</h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white">
                                                <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Tipo</th>
                                                    <th className="py-2 px-4 border">Características</th>
                                                    <th className="py-2 px-4 border">Personal mínimo</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Básica</td>
                                                    <td className="py-2 px-4 border">Atención prehospitalaria básica,
                                                        soporte vital básico
                                                    </td>
                                                    <td className="py-2 px-4 border">TUM, operador</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Avanzada</td>
                                                    <td className="py-2 px-4 border">Soporte vital avanzado, equipo
                                                        especializado
                                                    </td>
                                                    <td className="py-2 px-4 border">Paramédico, médico, operador</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Cuidados intensivos</td>
                                                    <td className="py-2 px-4 border">Traslado de pacientes críticos,
                                                        monitoreo avanzado
                                                    </td>
                                                    <td className="py-2 px-4 border">Médico, enfermero, operador</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'activation' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Activación
                                            y protocolo del SEM</h2>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Llamada al 911 o número local de emergencias.</li>
                                            <li>Proporcionar información clara: ubicación, tipo de incidente, número de
                                                víctimas, estado de conciencia, riesgos presentes.
                                            </li>
                                            <li>El CRUM prioriza y despacha la ambulancia adecuada.</li>
                                            <li>El personal de SEM puede dar indicaciones telefónicas para primeros
                                                auxilios.
                                            </li>
                                            <li>Seguimiento y coordinación hasta la llegada de la ambulancia y traslado
                                                seguro.
                                            </li>
                                        </ol>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mejora
                                            continua y evaluación</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>El SEM realiza simulacros, capacitaciones y auditorías para mejorar la
                                                calidad.
                                            </li>
                                            <li>Se promueve la retroalimentación y reporte de incidentes para
                                                aprendizaje institucional.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Nuevas
                                            tendencias y tecnología</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Telemedicina prehospitalaria: consulta remota con médicos
                                                especialistas.
                                            </li>
                                            <li>Apps móviles para geolocalización y coordinación de recursos.</li>
                                            <li>Simulación clínica y realidad virtual para entrenamiento.</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                                        prácticos para análisis</h2>
                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Múltiples
                                            víctimas</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Se reporta un accidente vehicular con 5 víctimas en una carretera federal.
                                            El primer respondiente activa el SEM y proporciona información precisa al
                                            CRUM.
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">¿Qué acciones son prioritarias?</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluar la seguridad de la escena.</li>
                                                <li>Clasificar a las víctimas (triaje).</li>
                                                <li>Solicitar recursos adicionales si es necesario.</li>
                                                <li>Coordinar el traslado según prioridad clínica.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Activación
                                            inadecuada</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Un ciudadano llama al 911 por dolor abdominal leve sin datos de gravedad. Se
                                            envía una ambulancia básica, pero el recurso queda ocupado y no disponible
                                            para emergencias reales.
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">¿Qué aprendizaje deja este caso?</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>La importancia de la correcta priorización y uso racional de
                                                    recursos.
                                                </li>
                                                <li>Educar a la población sobre cuándo activar el SEM.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Coordinación
                                            interinstitucional</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Durante un incendio en una fábrica, el SEM coordina con bomberos y
                                            protección civil para la evacuación y atención de heridos.
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">¿Por qué es clave la coordinación?</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Permite una respuesta integral y segura.</li>
                                                <li>Optimiza recursos y reduce riesgos para víctimas y rescatistas.</li>
                                            </ul>
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
                                        <li>NOM-034-SSA3-2013. <a
                                            href="https://www.gob.mx/cms/uploads/attachment/file/512076/NOM-034-SSA3-2013.pdf"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">Norma Oficial Mexicana</a></li>
                                        <li>Secretariado Técnico del Consejo Nacional para la Prevención de Accidentes
                                            (STCONAPRA).
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-education/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Educación y sistemas de emergencias</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-systems/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sistemas de EMS</a></li>
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

