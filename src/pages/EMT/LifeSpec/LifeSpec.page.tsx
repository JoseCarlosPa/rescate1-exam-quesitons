import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./LifeSpec.questions.ts";
import {FaBaby } from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import { MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Vitals from "./components/Vitals.component.tsx";
import Prehospital from "./components/Prehospital.component.tsx";
import Practice from "./components/Practice.component.tsx";

export default function LifeSpec() {
    const [activeTab, setActiveTab] = useState<'overview' | 'vitals' | 'prehospital' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Desarrollo Humano y Esperanza de Vida | Curso EMT"
            description="Explora las etapas del desarrollo humano, constantes fisiológicas y consideraciones prehospitalarias para Técnicos en Atención Médica Prehospitalaria. Incluye ejercicios, casos prácticos y recursos recomendados."
            keywords="desarrollo humano EMT, etapas de vida, constantes fisiológicas, atención prehospitalaria, TAMP, curso emergencias médicas, casos prácticos, pediatría, geriatría"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
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
                                <FaBaby className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Desarrollo y esperanza de vida</h1>
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
                                to={`${AllRoutes.LIFE_SPEC}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/1Jw5ONtWNz3ajHTwdxvTE3fS8JanopiVy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://drive.google.com/file/d/1ERUNCs4ZsMiCDHeYwuoS6SWJOPpY6iW3/view?usp=drive_link"
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
                                    Etapas del Desarrollo
                                </button>
                                <button
                                    onClick={() => setActiveTab('vitals')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'vitals'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Constantes y Esperanza de Vida
                                </button>
                                <button
                                    onClick={() => setActiveTab('prehospital')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'prehospital'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Atención Prehospitalaria
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
                            {activeTab === 'overview' && (<Overview />)}
                            {activeTab === 'vitals' && (<Vitals />)}
                            {activeTab === 'prehospital' && (<Prehospital />)}
                            {activeTab === 'practice' && (<Practice />)}
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
                                                        className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`}
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
                            pagina="life-spec"
                            titulo="Foro de Discusión - Life Spec"
                        />


                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición).
                                            Jones & Bartlett Learning.
                                        </li>
                                        <li>American Academy of Pediatrics. (2020). <em>Pediatric Education for
                                            Prehospital Professionals (PEPP)</em> (4ª edición).
                                        </li>
                                        <li>Geriatric Emergency Medicine. (2022). <em>Prehospital Care of the Elderly
                                            Patient</em>. Springer.
                                        </li>
                                        <li>National Association of EMS Physicians. (2019). <em>Position Statements on
                                            Age-Specific Care</em>.
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea especializados</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.pepp.com/" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">PEPP - Educación pediátrica
                                            prehospitalaria</a></li>
                                        <li><a href="https://www.ems1.com/pediatric/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Sección de pediatría</a></li>
                                        <li><a href="https://www.jems.com/patient-care/pediatric/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Cuidado pediátrico</a></li>
                                        <li><a
                                            href="https://www.saem.org/about-saem/academies-interest-groups-affiliates2/interest-groups/geriatric-emergency-medicine"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">SAEM - Medicina geriátrica de
                                            emergencia</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Herramientas y calculadoras</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Pedi STAT - Cálculos pediátricos y dosis de medicamentos</li>
                                        <li>Geriatrics At Your Fingertips - Guía de referencia geriátrica</li>
                                        <li>Pediatric Advanced Life Support (PALS) - Algoritmos y protocolos</li>
                                        <li>Medscape - Referencias médicas por grupo etario</li>
                                        <li>Age-appropriate vital signs reference cards</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Cursos de capacitación recomendados</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>PEPP (Pediatric Education for Prehospital Professionals)</li>
                                        <li>GEMS (Geriatric Education for EMS)</li>
                                        <li>PALS (Pediatric Advanced Life Support)</li>
                                        <li>NRP (Neonatal Resuscitation Program)</li>
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

