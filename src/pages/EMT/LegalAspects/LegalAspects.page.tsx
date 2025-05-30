import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./LegalAspects.questions.ts";
import {IoMdBriefcase} from "react-icons/io";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";

export default function LegalAspects() {
    const [activeTab, setActiveTab] = useState<'overview' | 'responsibility' | 'consent' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <IoMdBriefcase className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Aspectos Médicos, Legales y Éticos</h1>
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
                            to="/legal/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen Completo</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1a2LmZGb5lIg9ZN__5t0sspwiev13kUpj/edit?usp=sharing&ouid=107287742628985461156&rtpof=true&sd=true"
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
                        <a href="https://www.ems1.com/ems-legal/"
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
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus conocimientos legales</h3>
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
                                onClick={() => setActiveTab('responsibility')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'responsibility' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Responsabilidad y Deber
                            </button>
                            <button
                                onClick={() => setActiveTab('consent')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'consent' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Consentimiento y Ética
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué son importantes los aspectos legales y éticos?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Los aspectos legales y éticos en la atención prehospitalaria garantizan que el personal actúe bajo normas que protegen tanto al paciente como al profesional. La AAOS enfatiza la importancia de conocer el marco legal, el deber de actuar, la confidencialidad, el consentimiento y la documentación adecuada.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios básicos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>No ocasionar daño (primun non nocere).</li>
                                        <li>Actuar siempre bajo estándares éticos y legales.</li>
                                        <li>Respetar la autonomía y dignidad del paciente.</li>
                                        <li>Documentar todo procedimiento.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Normas y reglamentos relevantes</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Modelo de Atención Prehospitalaria:</strong> Define alcances y objetivos del TAMP.</li>
                                        <li><strong>NOM-034-SSA3-2013:</strong> Establece equipamiento mínimo de ambulancias.</li>
                                        <li><strong>Recertificación:</strong> El TAMP debe recertificarse cada 3 años.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'responsibility' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Responsabilidad profesional y deber de actuar</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Deber de actuar:</strong> Obligación legal y moral de prestar ayuda.</li>
                                        <li><strong>Negligencia:</strong> No proporcionar cuidados adecuados.</li>
                                        <li><strong>Impericia:</strong> Falta de conocimientos técnicos.</li>
                                        <li><strong>Abandono:</strong> Interrumpir el cuidado sin transferencia adecuada.</li>
                                        <li><strong>Confidencialidad:</strong> Proteger la información del paciente.</li>
                                        <li><strong>Documentación:</strong> Registrar todo en FRAP o medios digitales.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Muerte y reanimación</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Signos negativos de vida:</strong> Ausencia de pulso, respiración y actividad cerebral.</li>
                                        <li><strong>Signos positivos de muerte:</strong> Livor mortis, rigor mortis, decapitación, putrefacción.</li>
                                        <li><strong>RCP:</strong> Solo si los signos de muerte no están presentes y la causa puede ser reversible.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'consent' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consentimiento y ética</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Consentimiento informado:</strong> El paciente autoriza el tratamiento tras recibir información adecuada.</li>
                                        <li><strong>Consentimiento implícito:</strong> En casos de inconsciencia o amenaza grave a la vida.</li>
                                        <li><strong>Menores de edad:</strong> Requieren consentimiento de padres o tutores, salvo riesgo vital.</li>
                                        <li><strong>Rechazo de atención:</strong> El paciente puede rechazar atención si está orientado y comprende riesgos.</li>
                                        <li><strong>Ética profesional:</strong> Actuar con honestidad, respeto y sin discriminación.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Confidencialidad y derechos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Proteger la privacidad del paciente.</li>
                                        <li>No divulgar información sin autorización.</li>
                                        <li>Respetar derechos humanos y dignidad.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Negligencia</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un TAMP atiende a un paciente con dolor torácico, pero omite registrar los signos vitales y no documenta el traslado.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">¿Qué errores legales se cometieron?</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Falta de documentación adecuada.</li>
                                            <li>Posible negligencia por omisión de cuidados.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Consentimiento</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente adulto consciente rechaza ser trasladado tras accidente menor, comprende riesgos y firma el FRAP.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">¿Es válido el rechazo?</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Sí, si el paciente está orientado y comprende riesgos.</li>
                                            <li>Debe documentarse el rechazo y la firma.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Abandono</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un TAMP deja a un paciente en la escena sin transferir el cuidado a personal médico o familiar responsable.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">¿Qué implica esto?</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Constituye abandono, con posibles consecuencias legales.</li>
                                            <li>Siempre debe transferirse el cuidado adecuadamente.</li>
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
                                    <li><a href="https://www.ems1.com/ems-legal/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre aspectos legales en EMS</a></li>
                                    <li><a href="https://www.jems.com/ems-insider/ems-law/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección legal</a></li>
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

