import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {FaQrcode} from "react-icons/fa";
import {faqData} from "./Mega.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function Mega() {
    const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaQrcode className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Código MEGA</h1>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to="/mega/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen Completo</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/15fdQZsSUuF9ViCqGwilGhDpF4zVoU5f8/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <button
                            onClick={() => setShowQuickQuiz(!showQuickQuiz)}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <TbNotebook className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Quiz Rápido</p>
                        </button>
                        <a href="https://www.ems1.com/ems-products/assessment/articles/what-is-the-mega-code-and-how-do-you-use-it-1e1b1b1b/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos EMS1</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus conocimientos</h3>
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
                                onClick={() => setActiveTab('steps')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'steps' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Pasos del Código MEGA
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
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el Código MEGA?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El Código MEGA es una herramienta para la evaluación inicial prehospitalaria rápida, estructurada y segura del paciente en situaciones de emergencia. Es una estrategia para tomar decisiones clínicas priorizadas y reducir el riesgo tanto para el paciente como para el TAMP.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Significado de MEGA</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>M:</strong> Mecanismo de lesión o naturaleza de la enfermedad.</li>
                                        <li><strong>E:</strong> Entorno seguro para el equipo y la víctima.</li>
                                        <li><strong>G:</strong> Generalidades del paciente: nivel de conciencia, posición, edad, sexo, etc.</li>
                                        <li><strong>A:</strong> ABCDE – Evaluación primaria (A: Vía aérea, B: Respiración, C: Circulación, D: Déficit neurológico, E: Exposición).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia del Código MEGA</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Establece prioridades en la atención de pacientes críticos.</li>
                                        <li>Previene riesgos adicionales para el personal y los pacientes.</li>
                                        <li>Facilita una revaluación constante del estado del paciente.</li>
                                        <li>Permite una transición clara a la evaluación secundaria.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'steps' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Pasos del Código MEGA</h2>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Mecanismo de lesión / naturaleza de la enfermedad:</strong> ¿Qué sucedió? ¿Trauma, enfermedad súbita, accidente?</li>
                                    <li><strong>Entorno seguro:</strong> Evalúa riesgos para el equipo y la víctima (tráfico, fuego, armas, etc.).</li>
                                    <li><strong>Generalidades del paciente:</strong> Observa nivel de conciencia, posición, edad, sexo, signos evidentes de gravedad.</li>
                                    <li><strong>ABCDE:</strong> Realiza evaluación primaria:
                                        <ul className="list-disc list-inside ml-6 mt-2">
                                            <li><strong>A:</strong> Vía aérea permeable</li>
                                            <li><strong>B:</strong> Respiración: frecuencia, esfuerzo, ruidos</li>
                                            <li><strong>C:</strong> Circulación: pulso, sangrado, color</li>
                                            <li><strong>D:</strong> Déficit neurol��gico: respuesta, Glasgow</li>
                                            <li><strong>E:</strong> Exposición: busca lesiones, hipotermia, etc.</li>
                                        </ul>
                                    </li>
                                </ol>
                                <div className="flex justify-center mt-4">
                                    <img src="/codes.png" alt="Código MEGA" className="max-h-64 rounded shadow" />
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Accidente vehicular</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 30 años, conductor de motocicleta, colisiona contra un automóvil. Se encuentra en el suelo, inconsciente, con sangrado visible en la pierna.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Aplicación del Código MEGA:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>M: Trauma por colisión vehicular</li>
                                            <li>E: Evaluar tráfico, derrames, riesgo de incendio</li>
                                            <li>G: Paciente masculino, inconsciente, sangrado activo</li>
                                            <li>A: Vía aérea permeable, B: FR rápida, C: Sangrado activo, pulso débil, D: Inconsciente, E: Exponer para buscar más lesiones</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Dolor torácico súbito</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 58 años, súbitamente presenta dolor torácico intenso y dificultad respiratoria en su domicilio.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Aplicación del Código MEGA:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>M: Enfermedad súbita, posible infarto</li>
                                            <li>E: Entorno seguro en domicilio</li>
                                            <li>G: Paciente femenina, consciente, pálida, sudorosa</li>
                                            <li>A: Vía aérea permeable, B: Disnea, C: Pulso rápido, D: Alerta, E: Exponer tórax para buscar signos</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Intoxicación en vía pública</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Adolescente encontrado en la calle, inconsciente, con olor a alcohol y vómito en la ropa.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Aplicación del Código MEGA:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>M: Intoxicación aguda</li>
                                            <li>E: Evaluar seguridad (agresores, tráfico)</li>
                                            <li>G: Adolescente masculino, inconsciente, vómito</li>
                                            <li>A: Vía aérea con riesgo, B: Respiración lenta, C: Pulso débil, D: Glasgow bajo, E: Exponer para buscar lesiones</li>
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
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-products/assessment/articles/what-is-the-mega-code-and-how-do-you-use-it-1e1b1b1b/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículo sobre Código MEGA</a></li>
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

