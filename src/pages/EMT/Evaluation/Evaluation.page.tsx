import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Evaluation.questions.ts";
import {FaNotesMedical} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {useState} from "react";

export default function Evaluation(){
    const [activeTab, setActiveTab] = useState<'overview' | 'primary' | 'secondary' | 'tools' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaNotesMedical className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Evaluación del Paciente</h1>
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
                            to="/evaluation/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1ZLfoRXcQoyOmvRactfLobvZjLogyKY9S/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Capitulo</p>
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
                                onClick={() => setActiveTab('primary')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'primary'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación Primaria
                            </button>
                            <button
                                onClick={() => setActiveTab('secondary')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'secondary'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación Secundaria
                            </button>
                            <button
                                onClick={() => setActiveTab('tools')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'tools'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Herramientas
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es la Evaluación del Paciente?</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Es un proceso sistemático que permite identificar lesiones o enfermedades que amenazan la vida y requieren intervención inmediata.</li>
                                        <li>Es una habilidad crítica en la atención prehospitalaria para brindar el tratamiento adecuado.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Pasos Principales en la Evaluación</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Evaluación de la escena:</strong> Seguridad de la escena, mecanismo de lesión o naturaleza de la enfermedad, número de pacientes y necesidad de recursos adicionales.</li>
                                        <li><strong>Evaluación primaria:</strong> Detectar amenazas inmediatas a la vida (ABC: vía aérea, respiración, circulación).</li>
                                        <li><strong>Evaluación secundaria:</strong> Examen físico completo o enfocado según el caso, historial SAMPLE y medición de signos vitales.</li>
                                        <li><strong>Reevaluación:</strong> Monitoreo continuo para detectar cambios en el estado del paciente.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'primary' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación Primaria</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Impresión general del paciente</li>
                                        <li>Evaluación del nivel de conciencia (AVDI)</li>
                                        <li>Valoración rápida de ABCDE:
                                            <ul className="list-disc ml-6">
                                                <li><strong>A:</strong> Vía aérea y control de columna cervical</li>
                                                <li><strong>B:</strong> Respiración y ventilación</li>
                                                <li><strong>C:</strong> Circulación, control de hemorragias</li>
                                                <li><strong>D:</strong> Discapacidad, estado neurológico</li>
                                                <li><strong>E:</strong> Exposición y control ambiental</li>
                                            </ul>
                                        </li>
                                        <li>Identificación de amenazas inmediatas a la vida</li>
                                        <li>Intervenciones inmediatas según hallazgos</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'secondary' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación Secundaria</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Examen físico detallado o enfocado según el caso</li>
                                        <li>Obtención de historia clínica (SAMPLE)</li>
                                        <li>Valoración del dolor (OPQRST)</li>
                                        <li>Medición de signos vitales:
                                            <ul className="list-disc ml-6 mt-2">
                                                <li><strong>Frecuencia cardiaca</strong> (pulso)</li>
                                                <li><strong>Frecuencia respiratoria</strong></li>
                                                <li><strong>Presión arterial</strong></li>
                                                <li><strong>Temperatura</strong></li>
                                                <li><strong>Saturación de oxígeno (SpO₂)</strong></li>
                                                <li><strong>Glucosa capilar</strong> (si está indicado)</li>
                                            </ul>
                                        </li>
                                        <li>Evaluación neurológica (Glasgow, pupilas, lateralización)</li>
                                        <li>Revisión de intervenciones previas</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tools' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Herramientas de Evaluación</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>SAMPLE:</strong> Signos y síntomas, Alergias, Medicamentos, Pasado médico, Última comida, Eventos previos.</li>
                                        <li><strong>OPQRST:</strong> Inicio, Provocación, Calidad, Radiación, Severidad, Tiempo (para dolor).</li>
                                        <li><strong>Glasgow Coma Scale (GCS):</strong> Valora el estado neurológico (respuesta ocular, verbal y motora).</li>
                                        <li><strong>AVDI:</strong> Alerta, responde a Voz, responde a Dolor, No responde.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Trauma en vía pública</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 35 años, motociclista, colisiona contra un automóvil. Se encuentra en el suelo, consciente, con sangrado en pierna derecha.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable, responde preguntas</li>
                                            <li>B: FR 22/min, SpO₂ 97%</li>
                                            <li>C: FC 110/min, TA 120/80 mmHg, sangrado activo en pierna</li>
                                            <li>D: Alerta, orientado</li>
                                            <li>E: Exposición muestra fractura abierta en tibia</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control de hemorragia con compresión directa</li>
                                            <li>Inmovilización de la extremidad</li>
                                            <li>Oxígeno suplementario si es necesario</li>
                                            <li>Monitorización y traslado rápido</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Dolor torácico súbito</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 58 años, dolor torácico súbito, irradiado a brazo izquierdo, sudoración y náusea.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 18/min, SpO₂ 95%</li>
                                            <li>C: FC 98/min, TA 135/85 mmHg</li>
                                            <li>D: Alerta, ansiosa</li>
                                            <li>E: Piel fría y sudorosa</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Monitorización cardíaca</li>
                                            <li>Oxígeno si SpO₂ &lt; 94%</li>
                                            <li>Administrar aspirina si no hay contraindicación</li>
                                            <li>Traslado urgente a hospital</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paciente inconsciente</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Joven de 19 años encontrado inconsciente en la calle, sin testigos.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea comprometida, secreciones</li>
                                            <li>B: FR 8/min, SpO₂ 82%</li>
                                            <li>C: FC 60/min, TA 100/60 mmHg</li>
                                            <li>D: No responde a estímulos</li>
                                            <li>E: Pupilas puntiformes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Aspiración de secreciones</li>
                                            <li>Ventilación asistida con BVM</li>
                                            <li>Administrar oxígeno</li>
                                            <li>Monitorización y traslado inmediato</li>
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
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/patient-assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre evaluación del paciente</a></li>
                                    <li><a href="https://www.jems.com/patient-care/assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de evaluación</a></li>
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
