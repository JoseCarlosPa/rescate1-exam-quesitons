import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MedicVision.questions.ts";
import {CiMedicalCross} from "react-icons/ci";
import { AllRoutes } from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function MedicVision(){
    const [activeTab, setActiveTab] = useState<'overview' | 'approach' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center  justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4   p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Visión Médica General</h1>
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
                            to="/medic-vision/exam"
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
                        
                        <a href="https://drive.google.com/file/d/100JgEU2s_DwwMyHll7S0k9p_yLWmrjAn/view?usp=drive_link" target="_blank" rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
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
                                onClick={() => setActiveTab('approach')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'approach' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Abordaje y Herramientas
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es la Visión Médica General?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Es la capacidad del Técnico en Atención Médica Prehospitalaria (TAMP) para realizar una valoración completa, rápida y estructurada del estado general de un paciente médico (no traumático). Inicia con la evaluación del entorno y culmina con un abordaje diagnóstico basado en signos y síntomas, siguiendo el enfoque ABCDE y las guías de la AAOS 11ª edición.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Permite identificar enfermedades que requieren intervención urgente (IAM, EVC, crisis hipertensivas, disnea severa, alteraciones metabólicas).</li>
                                        <li>Prioriza el traslado y tratamiento adecuado.</li>
                                        <li>Reduce errores en la atención inicial y mejora el pronóstico.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Componentes Clave</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Escena segura:</strong> Verificar que no existan riesgos.</li>
                                        <li><strong>Evaluación inicial:</strong> Nivel de conciencia, posición del paciente, signos evidentes.</li>
                                        <li><strong>Signos vitales:</strong> FC, FR, PA, temperatura, oximetría.</li>
                                        <li><strong>Signos y síntomas:</strong> Información subjetiva y objetiva del paciente.</li>
                                        <li><strong>Historial médico relevante:</strong> Medicamentos, alergias, antecedentes.</li>
                                        <li><strong>Abordaje sistemático:</strong> Aplicar herramientas como OPQRST, SAMPLE.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'approach' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Abordaje sistemático del paciente médico</h2>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li><strong>Evaluación de la escena:</strong> Seguridad, número de pacientes, recursos necesarios.</li>
                                        <li><strong>Evaluación primaria (ABCDE):</strong> Vía aérea, respiración, circulación, estado neurológico, exposición.</li>
                                        <li><strong>Signos vitales:</strong> Medición y monitoreo.</li>
                                        <li><strong>Historia clínica dirigida:</strong> Uso de SAMPLE y OPQRST.</li>
                                        <li><strong>Evaluación secundaria:</strong> Examen físico detallado según el sistema afectado.</li>
                                        <li><strong>Reevaluación continua:</strong> Cambios en el estado del paciente y respuesta al tratamiento.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Herramientas útiles para el TAMP</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">SAMPLE</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>S:</strong> Signos y síntomas</li>
                                                <li><strong>A:</strong> Alergias</li>
                                                <li><strong>M:</strong> Medicamentos</li>
                                                <li><strong>P:</strong> Patologías previas</li>
                                                <li><strong>L:</strong> Última ingesta</li>
                                                <li><strong>E:</strong> Eventos relacionados</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">OPQRST</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>O:</strong> Origen</li>
                                                <li><strong>P:</strong> Provocación o alivio</li>
                                                <li><strong>Q:</strong> Calidad</li>
                                                <li><strong>R:</strong> Región o irradiación</li>
                                                <li><strong>S:</strong> Severidad</li>
                                                <li><strong>T:</strong> Tiempo de evolución</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Valores normales de signos vitales</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Parámetro</th>
                                                    <th className="py-2 px-4 border">Adultos</th>
                                                    <th className="py-2 px-4 border">Niños</th>
                                                    <th className="py-2 px-4 border">Lactantes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Frecuencia cardíaca</td>
                                                    <td className="py-2 px-4 border">60-100/min</td>
                                                    <td className="py-2 px-4 border">80-120/min</td>
                                                    <td className="py-2 px-4 border">100-160/min</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Frecuencia respiratoria</td>
                                                    <td className="py-2 px-4 border">12-20/min</td>
                                                    <td className="py-2 px-4 border">15-30/min</td>
                                                    <td className="py-2 px-4 border">25-50/min</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Presión arterial sistólica</td>
                                                    <td className="py-2 px-4 border">90-140 mmHg</td>
                                                    <td className="py-2 px-4 border">80-110 mmHg</td>
                                                    <td className="py-2 px-4 border">70-100 mmHg</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Temperatura</td>
                                                    <td className="py-2 px-4 border">36-37.5°C</td>
                                                    <td className="py-2 px-4 border">36-37.5°C</td>
                                                    <td className="py-2 px-4 border">36-37.5°C</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Saturación O₂</td>
                                                    <td className="py-2 px-4 border">≥95%</td>
                                                    <td className="py-2 px-4 border">≥95%</td>
                                                    <td className="py-2 px-4 border">≥95%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Dolor torácico súbito</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 54 años, dolor torácico opresivo súbito, irradiado a brazo izquierdo, diaforesis y náusea.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Abordaje correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluar ABCDE y signos vitales</li>
                                            <li>Administrar oxígeno si SpO₂ &lt;94%</li>
                                            <li>Monitorear y preparar para traslado urgente</li>
                                            <li>Aplicar OPQRST y SAMPLE</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Disnea y fiebre</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 68 años, disnea progresiva, fiebre, tos productiva, crepitantes a la auscultación.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Abordaje correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluar ABCDE y saturación O₂</li>
                                            <li>Oxígeno suplementario si SpO₂ &lt;94%</li>
                                            <li>Buscar datos de sepsis</li>
                                            <li>Aplicar SAMPLE y OPQRST</li>
                                            <li>Traslado a hospital</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Alteración del estado mental</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 80 años, confuso, con antecedentes de diabetes, glucosa capilar 45 mg/dL.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Abordaje correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluar ABCDE y glucosa capilar</li>
                                            <li>Administrar glucosa oral o IV según protocolo</li>
                                            <li>Monitorizar signos vitales</li>
                                            <li>Aplicar SAMPLE</li>
                                            <li>Traslado a hospital</li>
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
                                    <li><a href="https://www.ems1.com/ems-products/assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre valoración médica</a></li>
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

