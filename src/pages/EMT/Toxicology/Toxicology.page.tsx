import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Toxicology.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaWineBottle} from "react-icons/fa";

export default function Toxicology(){
    // Cambiar el tipo de activeTab para coincidir con los nuevos tabs
    const [activeTab, setActiveTab] = useState<'intro' | 'principles' | 'management' | 'cases'>('intro');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaWineBottle className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Toxicología</h1>
                        <p className="text-sm italic mb-4">Basado en AAOS 11ª Edición - Alumnos Generación 2025 Sábados Rescate 1</p>
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
                            to="/toxicology/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1t313YIiaxBoZCTMtrr-yYnOTQqJacCQh/view?usp=drive_link"
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
                                onClick={() => setActiveTab('intro')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'intro' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Introducción
                            </button>
                            <button
                                onClick={() => setActiveTab('principles')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'principles' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Principios de Toxicología
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo Prehospitalario
                            </button>
                            <button
                                onClick={() => setActiveTab('cases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'cases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'intro' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es la toxicología?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La toxicología es la ciencia que estudia los efectos adversos de sustancias químicas sobre los organismos vivos. En el ámbito prehospitalario, se enfoca en la identificación, evaluación y manejo de pacientes expuestos a tóxicos, incluyendo medicamentos, drogas, productos del hogar, plantas y animales venenosos.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Las intoxicaciones pueden ser accidentales, intencionales o laborales, y constituyen una causa frecuente de consulta en los servicios de emergencia.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Clasificación de los tóxicos</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Medicamentos (analgésicos, psicotrópicos, etc.)</li>
                                            <li>Drogas de abuso (opioides, cocaína, etc.)</li>
                                            <li>Productos del hogar (limpiadores, pesticidas)</li>
                                            <li>Plantas y hongos tóxicos</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Metales pesados (plomo, mercurio)</li>
                                            <li>Gases y vapores (monóxido de carbono, cianuro)</li>
                                            <li>Venenos animales (serpientes, insectos)</li>
                                            <li>Alcoholes y solventes</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas generales de intoxicación</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Alteración del estado mental (confusión, coma)</li>
                                            <li>Náusea, vómito</li>
                                            <li>Convulsiones</li>
                                            <li>Alteraciones respiratorias (bradipnea, taquipnea)</li>
                                            <li>Arritmias cardíacas</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Miosis o midriasis</li>
                                            <li>Piel húmeda o seca, enrojecida o pálida</li>
                                            <li>Olor inusual en aliento o ropa</li>
                                            <li>Quemaduras en boca o labios</li>
                                            <li>Otros según el tóxico específico</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'principles' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios generales de toxicología</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El efecto de un tóxico depende de la dosis, vía de entrada, tiempo de exposición y características del paciente. Los mecanismos de toxicidad incluyen alteración enzimática, daño celular directo, hipoxia, y alteraciones en el sistema nervioso.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Vías de exposición</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Oral (ingestión)</li>
                                        <li>Inhalatoria</li>
                                        <li>Dérmica o mucosa</li>
                                        <li>Parenteral (inyección, mordedura, picadura)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación inicial del paciente intoxicado</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Seguridad de la escena y del personal</li>
                                        <li>Evaluación ABCDE</li>
                                        <li>Identificación del tóxico (envases, testigos, historia clínica)</li>
                                        <li>Valoración de signos vitales y estado neurológico</li>
                                        <li>Búsqueda de pistas físicas (olor, lesiones, residuos)</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo prehospitalario de intoxicaciones</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Garantizar la seguridad del rescatista y la escena</li>
                                        <li>Soporte vital básico y avanzado según necesidad</li>
                                        <li>Descontaminación (retirar ropa, irrigar piel/mucosas)</li>
                                        <li>Evitar provocar el vómito salvo indicación médica</li>
                                        <li>Administrar oxígeno si hay hipoxia</li>
                                        <li>Monitorización continua</li>
                                        <li>Identificar antídotos específicos si están indicados (ej. naloxona, carbón activado, atropina)</li>
                                        <li>Traslado rápido a centro hospitalario</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Antídotos y medidas específicas</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Tóxico</th>
                                                    <th className="py-2 px-4 border">Antídoto/Medida</th>
                                                    <th className="py-2 px-4 border">Comentarios</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Opioides</td>
                                                    <td className="py-2 px-4 border">Naloxona</td>
                                                    <td className="py-2 px-4 border">Administrar si hay depresión respiratoria</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Benzodiacepinas</td>
                                                    <td className="py-2 px-4 border">Flumazenil (uso hospitalario)</td>
                                                    <td className="py-2 px-4 border">Precaución: riesgo de convulsiones</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Paracetamol</td>
                                                    <td className="py-2 px-4 border">N-acetilcisteína</td>
                                                    <td className="py-2 px-4 border">Efectivo si se administra temprano</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Organofosforados</td>
                                                    <td className="py-2 px-4 border">Atropina + pralidoxima</td>
                                                    <td className="py-2 px-4 border">Atropina disponible prehospitalario</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Monóxido de carbono</td>
                                                    <td className="py-2 px-4 border">Oxígeno al 100%</td>
                                                    <td className="py-2 px-4 border">Traslado urgente</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cases' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escenarios clínicos para análisis</h2>
                                <div className="p-5 bg-orange-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Intoxicación por paracetamol</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 19 años ingiere 20 tabletas de paracetamol en intento autolítico. Acude 2 horas después, asintomática.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>ABC normales</li>
                                            <li>Sin síntomas iniciales</li>
                                            <li>Antecedente claro de ingesta</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluación ABCDE</li>
                                            <li>Monitorización</li>
                                            <li>Considerar carbón activado si han pasado menos de 2 horas</li>
                                            <li>Traslado urgente para valoración y N-acetilcisteína</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-blue-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Intoxicación por monóxido de carbono</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Familia encontrada inconsciente en casa con calefacción de gas encendida y ventilación deficiente.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Alteración del estado de conciencia</li>
                                            <li>Taquicardia, taquipnea</li>
                                            <li>Piel rosada o normal</li>
                                            <li>Ambiente con olor a gas</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Retirar a la familia del ambiente tóxico</li>
                                            <li>Administrar oxígeno al 100%</li>
                                            <li>Monitorización y traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-green-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Intoxicación por opioides</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 28 años hallado inconsciente, con miosis marcada y respiración superficial. Se encuentra jeringa cerca.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Vía aérea permeable</li>
                                            <li>Bradipnea, hipoventilación</li>
                                            <li>Miosis</li>
                                            <li>Sin respuesta verbal</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Soporte vital básico</li>
                                            <li>Administrar naloxona si está disponible</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización y traslado</li>
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
                                    <li>Goldfrank's Toxicologic Emergencies (11th Ed.)</li>
                                    <li>Manual de Toxicología Clínica - SEUP</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.poison.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Poison Control - Información para intoxicaciones</a></li>
                                    <li><a href="https://www.cdc.gov/niosh/topics/toxicology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC - Temas de toxicología</a></li>
                                    <li><a href="https://www.ems1.com/toxicology/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos de toxicología</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Medscape - Referencias médicas y calculadoras</li>
                                    <li>ToxApp - Guía rápida de tóxicos y antídotos</li>
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

