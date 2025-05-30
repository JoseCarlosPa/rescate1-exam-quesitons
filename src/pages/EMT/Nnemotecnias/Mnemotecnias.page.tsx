import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {RxLetterSpacing} from "react-icons/rx";
import {faqData} from "./Mnemotecnias.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {PiChalkboardTeacher} from "react-icons/pi";
import {useState} from "react";

export default function Mnemotecnias(){
    const [activeTab, setActiveTab] = useState<'overview' | 'main' | 'examples'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <RxLetterSpacing className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Mnemotecnias en Atención Prehospitalaria</h1>
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
                        <NavLink
                            to="/mnemotecnias/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
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
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-3xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Repasa tus mnemotecnias</h3>
                            <button
                                onClick={() => setShowQuickQuiz(false)}
                                className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                                Cerrar Quiz
                            </button>
                        </div>
                    )}

                    {/* Navegación por pestañas */}
                    <div className="mb-6 border-b border-gray-200 max-w-4xl mx-auto">
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
                                Ejemplos Prácticos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las mnemotecnias?</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Herramientas para recordar secuencias, pasos críticos o listas en la atención prehospitalaria.</li>
                                        <li>Facilitan respuestas rápidas, organizadas y sistemáticas en situaciones de alta presión.</li>
                                        <li>Mejoran la seguridad del paciente y la comunicación en el equipo.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué son importantes?</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Permiten evaluaciones rápidas bajo presión.</li>
                                        <li>Disminuyen errores y omisiones en la atención del paciente.</li>
                                        <li>Mejoran la comunicación con otros proveedores de salud.</li>
                                        <li>Son recomendadas por la AAOS y guías internacionales.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'main' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principales mnemotecnias en atención prehospitalaria</h2>
                                <ul className="list-disc list-inside space-y-3">
                                    <li><strong>ABC:</strong> Airway (vía aérea), Breathing (respiración), Circulation (circulación).</li>
                                    <li><strong>SAMPLE:</strong> Signos/Síntomas, Alergias, Medicamentos, Pasado médico, Última comida, Eventos previos.</li>
                                    <li><strong>OPQRST:</strong> Inicio (Onset), Provocación, Calidad (Quality), Irradiación, Severidad, Tiempo.</li>
                                    <li><strong>AVPU:</strong> Alerta, Responde a Voz, Responde a Dolor, Inconsciente (Unresponsive).</li>
                                    <li><strong>DCAP-BTLS:</strong> Deformidades, Contusiones, Abrasiones, Punciones, Quemaduras (Burns), Sensibilidad (Tenderness), Laceraciones, Hinchazón (Swelling).</li>
                                    <li><strong>PEARL:</strong> Pupilas Iguales y Reactivas a la Luz.</li>
                                    <li><strong>AEIOU-TIPS:</strong> Causas comunes de alteración del estado mental: Alcohol, Epilepsia, Insulina, Sobredosis, Trauma, Infección, Psicógenos, Stroke (ACV).</li>
                                    <li><strong>FAST:</strong> Face (cara caída), Arm (debilidad en brazo), Speech (habla alterada), Time (tiempo de inicio, para ACV).</li>
                                    <li><strong>GCS:</strong> Glasgow Coma Scale (escala para valorar el estado neurológico).</li>
                                </ul>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-2">Consejos para memorizar mnemotecnias</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Relaciona cada letra con una imagen mental.</li>
                                        <li>Repite las mnemotecnias en voz alta durante simulaciones.</li>
                                        <li>Haz tarjetas de estudio y repásalas regularmente.</li>
                                        <li>Aplica las mnemotecnias en casos clínicos reales o simulados.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'examples' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Ejemplos prácticos de uso</h2>
                                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-medium text-lg mb-2 text-orange-700">Ejemplo 1: Evaluación rápida con ABC</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>A:</strong> Verifica si la vía aérea está libre.</li>
                                        <li><strong>B:</strong> Observa la respiración y frecuencia respiratoria.</li>
                                        <li><strong>C:</strong> Evalúa el pulso y presencia de hemorragias.</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                    <h3 className="font-medium text-lg mb-2 text-blue-700">Ejemplo 2: Historia clínica con SAMPLE</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>S:</strong> ¿Qué síntomas presenta?</li>
                                        <li><strong>A:</strong> ¿Es alérgico a algo?</li>
                                        <li><strong>M:</strong> ¿Toma algún medicamento?</li>
                                        <li><strong>P:</strong> ¿Antecedentes médicos?</li>
                                        <li><strong>L:</strong> ¿Cuándo fue la última comida/bebida?</li>
                                        <li><strong>E:</strong> ¿Qué ocurrió antes del evento?</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-lg mb-2 text-green-700">Ejemplo 3: Dolor torácico con OPQRST</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>O:</strong> ¿Cuándo inició el dolor?</li>
                                        <li><strong>P:</strong> ¿Qué lo provoca o alivia?</li>
                                        <li><strong>Q:</strong> ¿Cómo describiría el dolor?</li>
                                        <li><strong>R:</strong> ¿El dolor se irradia?</li>
                                        <li><strong>S:</strong> ¿Qué tan intenso es (escala 0-10)?</li>
                                        <li><strong>T:</strong> ¿Cuánto tiempo lleva con el dolor?</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-lg mb-2 text-gray-700">Ejemplo 4: Estado neurológico con AVPU</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>A:</strong> ¿El paciente está alerta?</li>
                                        <li><strong>V:</strong> ¿Responde a la voz?</li>
                                        <li><strong>P:</strong> ¿Responde al dolor?</li>
                                        <li><strong>U:</strong> ¿No responde a ningún estímulo?</li>
                                    </ul>
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
                    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
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
                                    <li><a href="https://www.ems1.com/patient-assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre evaluación y mnemotecnias</a></li>
                                    <li><a href="https://www.jems.com/patient-care/assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de evaluación</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
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
    );
}

