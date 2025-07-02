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
    const [activeTab, setActiveTab] = useState<'overview' | 'scene' | 'primary' | 'secondary' | 'tools' | 'practice'>('overview');
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
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
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                        <a href="https://www.jems.com/patient-care/assessment/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Recursos JEMS</p>
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
                                onClick={() => setActiveTab('scene')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'scene'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación de la Escena
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
                                    <p className="text-gray-700 leading-relaxed">
                                        Es un proceso sistemático y dinámico que permite identificar lesiones o enfermedades que amenazan la vida y requieren intervención inmediata. La evaluación del paciente es la base de la atención prehospitalaria y debe realizarse de manera ordenada, eficiente y continua.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fases principales</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Evaluación de la escena:</strong> Seguridad, mecanismo de lesión o naturaleza de la enfermedad, número de pacientes y recursos.</li>
                                            <li><strong>Evaluación primaria:</strong> Detección de amenazas inmediatas a la vida (ABCDE).</li>
                                            <li><strong>Evaluación secundaria:</strong> Examen físico completo o enfocado, historia clínica y signos vitales.</li>
                                            <li><strong>Reevaluación:</strong> Monitoreo y ajuste de intervenciones según evolución.</li>
                                        </ul>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Importancia</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Permite priorizar intervenciones.</li>
                                                <li>Reduce errores y omisiones.</li>
                                                <li>Mejora la comunicación con el equipo y hospitales.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'scene' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación de la Escena</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Seguridad de la escena:</strong> Identificar peligros para el personal, pacientes y testigos.</li>
                                            <li><strong>Mecanismo de lesión o naturaleza de la enfermedad:</strong> Trauma vs. médico.</li>
                                            <li><strong>Número de pacientes:</strong> Determina si se requiere apoyo adicional.</li>
                                            <li><strong>Recursos adicionales:</strong> Bomberos, policía, ambulancias extra, etc.</li>
                                            <li><strong>Uso de EPP:</strong> Guantes, gafas, mascarilla, bata según riesgo.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Tips prácticos</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Evalúa la escena antes de acercarte.</li>
                                            <li>Reevalúa la seguridad constantemente.</li>
                                            <li>Identifica rutas de acceso y escape.</li>
                                            <li>Observa el entorno: posición del paciente, objetos, testigos.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'primary' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación Primaria (ABCDE)</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>A - Vía aérea:</strong> Verifica permeabilidad y protege columna cervical si hay trauma.</li>
                                            <li><strong>B - Respiración:</strong> Evalúa frecuencia, esfuerzo, ruidos anormales, SpO₂.</li>
                                            <li><strong>C - Circulación:</strong> Pulso, color, temperatura, hemorragias, relleno capilar.</li>
                                            <li><strong>D - Discapacidad:</strong> Estado neurológico (AVDI, Glasgow, pupilas).</li>
                                            <li><strong>E - Exposición:</strong> Descubre al paciente para buscar lesiones, previene hipotermia.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-green-700">Intervenciones inmediatas</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Control de hemorragias graves.</li>
                                            <li>Oxígeno suplementario si está indicado.</li>
                                            <li>Inmovilización cervical si hay sospecha de trauma.</li>
                                            <li>Ventilación asistida si hay insuficiencia respiratoria.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'secondary' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación Secundaria</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Examen físico:</strong> Completo o enfocado según el caso (cabeza a pies).</li>
                                            <li><strong>Historia clínica:</strong> Utiliza SAMPLE y OPQRST.</li>
                                            <li><strong>Signos vitales:</strong> Frecuencia cardiaca, respiratoria, presión arterial, temperatura, SpO₂, glucosa.</li>
                                            <li><strong>Evaluación neurológica:</strong> Glasgow, pupilas, lateralización.</li>
                                            <li><strong>Revisión de intervenciones previas:</strong> Efectividad y complicaciones.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Herramientas útiles</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Termómetro, oxímetro, glucómetro.</li>
                                            <li>Tablas de valores normales por edad.</li>
                                            <li>Escalas de dolor y conciencia.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tools' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Herramientas de Evaluación</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>SAMPLE:</strong> Signos y síntomas, Alergias, Medicamentos, Pasado médico, Última comida, Eventos previos.</li>
                                            <li><strong>OPQRST:</strong> Inicio, Provocación, Calidad, Radiación, Severidad, Tiempo (para dolor).</li>
                                            <li><strong>AVDI:</strong> Alerta, responde a Voz, responde a Dolor, Inconsciente.</li>
                                            <li><strong>Glasgow Coma Scale (GCS):</strong> Valora respuesta ocular, verbal y motora.</li>
                                        </ul>
                                    </div>
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
                                                    <td className="py-2 px-4 border font-medium">Frecuencia cardiaca</td>
                                                    <td className="py-2 px-4 border">60-100/min</td>
                                                    <td className="py-2 px-4 border">80-120/min</td>
                                                    <td className="py-2 px-4 border">100-160/min</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Frecuencia respiratoria</td>
                                                    <td className="py-2 px-4 border">12-20/min</td>
                                                    <td className="py-2 px-4 border">20-30/min</td>
                                                    <td className="py-2 px-4 border">30-60/min</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Presión arterial sistólica</td>
                                                    <td className="py-2 px-4 border">{'>'}90 mmHg</td>
                                                    <td className="py-2 px-4 border">{'>'}80 mmHg</td>
                                                    <td className="py-2 px-4 border">{'>'}70 mmHg</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">SpO₂</td>
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
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Politrauma en accidente vial</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 30 años, accidente automovilístico, inconsciente, atrapado en el vehículo.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea comprometida, sangre en boca</li>
                                            <li>B: FR 8/min, SpO₂ 85%</li>
                                            <li>C: FC 120/min, TA 90/60 mmHg, hemorragia activa</li>
                                            <li>D: No responde a estímulos</li>
                                            <li>E: Fractura expuesta en fémur</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control de vía aérea y aspiración</li>
                                            <li>Control de hemorragia</li>
                                            <li>Oxígeno alto flujo y ventilación asistida</li>
                                            <li>Inmovilización y traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Dolor abdominal agudo</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 45 años, dolor abdominal súbito, palidez, sudoración, TA 80/50 mmHg.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24/min, SpO₂ 96%</li>
                                            <li>C: FC 130/min, TA 80/50 mmHg, piel fría</li>
                                            <li>D: Alerta, ansiosa</li>
                                            <li>E: Abdomen distendido, doloroso</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Oxígeno suplementario</li>
                                            <li>Acceso venoso y líquidos si está indicado</li>
                                            <li>Monitorización y traslado inmediato</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paciente pediátrico febril</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 4 años, fiebre, letargia, dificultad respiratoria, SpO₂ 92%.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 38/min, uso de músculos accesorios</li>
                                            <li>C: FC 140/min, piel pálida</li>
                                            <li>D: Somnoliento, responde a estímulos</li>
                                            <li>E: Temperatura 39°C</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización y traslado</li>
                                            <li>Control de temperatura</li>
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
