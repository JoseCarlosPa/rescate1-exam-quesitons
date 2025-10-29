import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./PediatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import { MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import { FaChild} from "react-icons/fa";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Evaluation from "./components/Evaluation.component.tsx";
import Pathologies from "./components/Pathologies.component.tsx";
import Treatment from "./components/Treatment.component.tsx";
import Cases from "./components/Cases.component.tsx";

export default function PediatricEmergencies() {
    const [activeTab, setActiveTab] = useState<'evaluation' | 'pathologies' | 'treatment' | 'cases'>('evaluation');

    return (
        <SEOWrapper
            title="Emergencias Pediátricas EMT | Evaluación, Manejo y Casos Clínicos"
            description="Guía completa de emergencias pediátricas para Técnicos en Atención Médica Prehospitalaria: TEP, patologías comunes, manejo emergente y casos clínicos. Aprende a evaluar y tratar niños en situaciones críticas."
            keywords="emergencias pediátricas, EMT, paramédicos, TEP, triángulo evaluación pediátrica, bronquiolitis, epiglotitis, convulsiones febriles, shock pediátrico, vía aérea pediátrica, casos clínicos, pediatría prehospitalaria"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div
                    className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <FaChild className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Emergencias pediátricas</h1>
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
                                to={`${AllRoutes.PEDIATRIC_EMERGENCIES}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://drive.google.com/file/d/1iQup0XcRar5cBBdgab0mCvK0GNqtK7l-/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('evaluation')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'evaluation'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación TEP
                                </button>
                                <button
                                    onClick={() => setActiveTab('pathologies')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'pathologies'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Patologías Críticas
                                </button>
                                <button
                                    onClick={() => setActiveTab('treatment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'treatment'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Protocolos de Manejo
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
                            {activeTab === 'evaluation' && (<Evaluation />)}
                            {activeTab === 'pathologies' && (<Pathologies />)}
                            {activeTab === 'treatment' && (<Treatment />)}
                            {activeTab === 'cases' && (<Cases />)}
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
                            pagina="pediatric-emergencies"
                            titulo="Foro de Discusión - Pediatric Emergencies"
                        />


                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición).
                                            Capítulo 32: Emergencias Pediátricas. Jones & Bartlett Learning.
                                        </li>
                                        <li>American Heart Association. (2020). <em>Pediatric Advanced Life Support
                                            (PALS)</em>.
                                        </li>
                                        <li>NAEMT. (2020). <em>Emergency Medical Services for Children (EMSC)</em>.</li>
                                        <li>American Academy of Pediatrics. (2019). <em>Pediatric Education for
                                            Prehospital Professionals (PEPP)</em> (4ª edición).
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea especializados en
                                        pediatría</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a
                                            href="https://www.aap.org/en-us/advocacy-and-policy/aap-health-initiatives/7-great-achievements/Pages/Emergency-Medical-Services-for-Children.aspx"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">AAP - Emergency Medical Services
                                            for Children</a></li>
                                        <li><a href="https://www.ems.gov/pediatrics.html" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">NHTSA
                                            - EMS for Children</a></li>
                                        <li><a href="https://www.emsc.org/" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">EMSC National Resource
                                            Center</a></li>
                                        <li><a href="https://www.pepp.com/" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">PEPP - Pediatric Education for
                                            Prehospital Professionals</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Herramientas de referencia rápida</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Cintas de medición pediátricas (Broselow Tape)</li>
                                        <li>Calculadoras de dosis pediátricas</li>
                                        <li>Tarjetas de referencia de signos vitales por edad</li>
                                        <li>Algoritmos de manejo del TEP (Triángulo de Evaluación Pediátrica)</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>PediCalc - Calculadora de dosis pediátricas</li>
                                        <li>PALS Guidelines - Algoritmos de PALS</li>
                                        <li>Pediatric Emergency Medicine - Referencia rápida</li>
                                        <li>EMSC Mobile - Recursos de emergencias pediátricas</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

