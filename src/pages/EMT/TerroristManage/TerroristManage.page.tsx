import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./TerroristManage.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaBomb} from "react-icons/fa";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Threats from "./components/Threats.component.tsx";
import Response from "./components/Response.component.tsx";
import Practice from "./components/Practice.component.tsx";

export default function TerroristManage() {
    const [activeTab, setActiveTab] = useState<'overview' | 'threats' | 'response' | 'practice'>('overview');

    return (
        <div className="min-h-screen bg-gray-50">
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaBomb className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Respuesta al terrorismo y manejo de
                            desastres</h1>
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
                            to={`${AllRoutes.TERRORIST_MANAGEMENT}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1PBNn6VSoZEUenLS5v2_hBIM-Q04aaGiW/edit?usp=sharing&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <a href="https://drive.google.com/file/d/1IOjxavD04ibDyE6uvcvJiuLZk8pkgX6R/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>
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
                                Introducción al Terrorismo
                            </button>
                            <button
                                onClick={() => setActiveTab('threats')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'threats'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Amenazas CBRNE
                            </button>
                            <button
                                onClick={() => setActiveTab('response')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'response'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Respuesta y Manejo
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios y Casos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && <Overview />}
                        {activeTab === 'threats' && <Threats />}
                        {activeTab === 'response' && <Response />}
                        {activeTab === 'practice' && <Practice />}
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
                    {/* Foro de Discusión */}
                    <ForumSection
                        pagina="terrorist-manage"
                        titulo="Foro de Discusión - Terrorist Manage"
                    />


                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Capítulo:
                                        Respuesta al terrorismo y manejo de desastres. Jones & Bartlett Learning.
                                    </li>
                                    <li>FEMA. (2017). <em>National Incident Management System (NIMS)</em>. 3ª edición.
                                    </li>
                                    <li>CDC. (2020). <em>Emergency Preparedness and Response - Chemical, Biological,
                                        Radiological, Nuclear, and Explosives (CBRNE)</em>.
                                    </li>
                                    <li>NAEMT. (2019). <em>All-Hazards Disaster Response (AHDR)</em>. 2ª edición.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ready.gov/chemical" target="_blank"
                                           rel="noopener noreferrer" className="text-blue-600 hover:underline">Ready.gov
                                        - Preparación para emergencias químicas</a></li>
                                    <li><a href="https://www.cdc.gov/cpr/index.htm" target="_blank"
                                           rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC -
                                        Preparación y respuesta de emergencia</a></li>
                                    <li><a href="https://www.fema.gov/emergency-managers/nims" target="_blank"
                                           rel="noopener noreferrer" className="text-blue-600 hover:underline">FEMA -
                                        Sistema Nacional de Manejo de Incidentes</a></li>
                                    <li><a href="https://chemm.nlm.nih.gov/" target="_blank" rel="noopener noreferrer"
                                           className="text-blue-600 hover:underline">CHEMM - Countermeasures and
                                        Response</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Protocolos y guías</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Protocolo START para triaje de múltiples víctimas</li>
                                    <li>Guías de descontaminación para agentes CBRNE</li>
                                    <li>Protocolos de administración de antídotos (atropina, pralidoxima)</li>
                                    <li>Procedimientos de EPP según nivel de amenaza</li>
                                    <li>Algoritmos de comunicación en incidentes de múltiples víctimas</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

