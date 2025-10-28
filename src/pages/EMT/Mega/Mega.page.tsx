import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {FaQrcode} from "react-icons/fa";
import {faqData} from "./Mega.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Steps from "./components/Steps.component.tsx";
import Practice from "./components/Practice.component.tsx";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function Mega() {
    const [activeTab, setActiveTab] = useState<'overview' | 'steps' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaQrcode className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Código Mega</h1>
                        <p className="text-lg text-gray-600 mb-2">Simulación de Paro Cardíaco</p>
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to="/mega/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/15fdQZsSUuF9ViCqGwilGhDpF4zVoU5f8/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <a href="https://www.ems1.com/ems-products/assessment/articles/what-is-the-mega-code-and-how-do-you-use-it-1e1b1b1b/"
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
                                conocimientos</h3>
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
                                Roles y Secuencia
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios de Práctica
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <Overview />
                        )}
                        {activeTab === 'steps' && (
                            <Steps />
                        )}
                        {activeTab === 'practice' && (
                            <Practice />
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
                    {/* Foro de Discusión */}
                    <ForumSection
                        pagina="mega"
                        titulo="Foro de Discusión - Mega"
                    />


                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>American Heart Association. (2020). <em>Soporte Vital Cardiovascular Avanzado (ACLS/SVAA)</em>.
                                        Guía del Proveedor.
                                    </li>
                                    <li>American Heart Association. (2020). <em>Aspectos Destacados de las Guías de la American Heart
                                        Association para RCP y ACE</em>.
                                    </li>
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones
                                        & Bartlett Learning. Capítulo sobre Emergencias Cardiovasculares.
                                    </li>
                                    <li>Link, M. S., et al. (2020). <em>Parte 7: Soporte vital avanzado cardiovascular del adulto</em>.
                                        Circulation, 142(16_suppl_2).
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a
                                        href="https://www.ems1.com/ems-products/assessment/articles/what-is-the-mega-code-and-how-do-you-use-it-1e1b1b1b/"
                                        target="_blank" rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline">EMS1 - What is the Mega Code and How Do You Use It?</a>
                                    </li>
                                    <li><a href="https://cpr.heart.org/" target="_blank"
                                           rel="noopener noreferrer" className="text-blue-600 hover:underline">American Heart Association
                                           - Recursos de RCP y ACE</a>
                                    </li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                           rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                        - Canal de YouTube con simulaciones de Código Mega</a>
                                    </li>
                                    <li><a href="https://www.resus.org.uk/" target="_blank"
                                           rel="noopener noreferrer" className="text-blue-600 hover:underline">Resuscitation Council UK
                                        - Guías y algoritmos de reanimación</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><strong>ACLS Sim 2023</strong> - Simulador de escenarios ACLS con Código Mega</li>
                                    <li><strong>Resuscitation!</strong> - Práctica de algoritmos de paro cardíaco</li>
                                    <li><strong>PulsePoint</strong> - Notificaciones de emergencias cardíacas cercanas</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

