import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Communications.questions.ts";
import { LuRadioTower } from "react-icons/lu";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function Communications() {
    const [activeTab, setActiveTab] = useState<'overview' | 'radio' | 'doc' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <LuRadioTower className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Comunicaciones y documentación</h1>
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
                            to="/communications/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1QLxi0ZwT-HKVApjDc507J36D4nPRH8TO/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1OTcc62vhqmZ3OGLya7OItQL6FNwImOnm/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus conocimientos en comunicación</h3>
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
                                onClick={() => setActiveTab('radio')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'radio' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Comunicación en Radio
                            </button>
                            <button
                                onClick={() => setActiveTab('doc')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'doc' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Documentación
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia de la comunicación</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>La comunicación efectiva es esencial para coordinar la atención, transmitir información precisa y brindar seguridad al paciente.</li>
                                        <li>Incluye comunicación verbal (palabras habladas) y no verbal (gestos, expresiones, postura).</li>
                                        <li>La escucha activa y el lenguaje corporal positivo generan confianza en el paciente.</li>
                                    </ul>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Herramientas de comunicación</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>SAMPLE:</strong> Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Última ingesta, Eventos previos.</li>
                                            <li><strong>OPQRST:</strong> Inicio, Provocación, Calidad, Irradiación, Severidad, Tiempo.</li>
                                            <li>Permiten obtener información estructurada y relevante durante la evaluación inicial.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios AAOS</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>La comunicación debe ser clara, concisa, completa y cortés.</li>
                                            <li>Evitar tecnicismos innecesarios con pacientes y familiares.</li>
                                            <li>Respetar la confidencialidad en todo momento.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'radio' && (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicación en radio y verbal</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Antes de hablar, presionar el botón de transmisión y esperar un segundo.</li>
                                            <li>Transmitir de forma clara, breve y pausada.</li>
                                            <li>Utilizar códigos de radio si están autorizados, para facilitar la comunicación.</li>
                                            <li>Confirmar recepción de mensajes importantes repitiéndolos de vuelta.</li>
                                            <li>Evitar opiniones personales, enfocarse en datos objetivos y relevantes.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Reporte verbal al hospital</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Al llegar al hospital, el TAMP debe entregar un reporte verbal breve pero completo al personal de salud.</li>
                                            <li>Debe incluir: edad del paciente, quejas principales, signos vitales, tratamientos realizados y respuesta a tratamientos.</li>
                                            <li>Utilizar la estructura SBAR (Situación, Breve historia, Evaluación, Recomendación) para reportes claros.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'doc' && (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Documentación (FRAP)</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>El Formato de Registro de Atención Prehospitalaria (FRAP) es el documento oficial que detalla toda la atención brindada.</li>
                                            <li>Debe ser objetivo, claro, preciso, sin tachaduras ni enmiendas indebidas.</li>
                                            <li>Errores deben corregirse con una línea simple, inicialar y añadir la corrección.</li>
                                            <li>Todo rechazo de tratamiento debe ser documentado cuidadosamente, incluyendo advertencia de riesgos y firma de testigos.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Buenas prácticas</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Documentar todas las observaciones relevantes, tratamientos y cambios en la condición del paciente.</li>
                                            <li>Conservar la confidencialidad del paciente en todo momento.</li>
                                            <li>Informar cualquier error o corrección de manera formal mediante adendas oficiales.</li>
                                            <li>Utilizar letra legible y evitar abreviaturas no estandarizadas.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos para análisis</h2>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="p-5 bg-orange-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Error de comunicación en radio</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Un TAMP transmite un reporte de paciente politraumatizado, pero omite mencionar la saturación de oxígeno y el tratamiento administrado.
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">Errores:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Falta de información relevante para la recepción hospitalaria.</li>
                                                <li>Puede retrasar la preparación del equipo de salud.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-blue-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Documentación incompleta</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Un paciente rechaza el traslado, pero el TAMP no documenta la advertencia de riesgos ni obtiene la firma del paciente.
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">Consecuencias:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Riesgo legal para el TAMP y la institución.</li>
                                                <li>No se protege adecuadamente al personal ante posibles reclamaciones.</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="p-5 bg-green-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Comunicación efectiva</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            El equipo de ambulancia utiliza el sistema SAMPLE y OPQRST para obtener información precisa y transmite un reporte claro y completo al hospital.
                                        </p>
                                        <div>
                                            <h4 className="font-medium mb-2">Beneficios:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Mejor preparación del hospital para recibir al paciente.</li>
                                                <li>Reducción de errores y mejora en la atención.</li>
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
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-communications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre comunicaciones en EMS</a></li>
                                    <li><a href="https://www.jems.com/ems-insider/ems-communications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de comunicaciones</a></li>
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
    );
}

