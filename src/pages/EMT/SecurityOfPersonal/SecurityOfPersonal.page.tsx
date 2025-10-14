import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SecurityOfPersonal.questions.ts";
import {GiProtectionGlasses} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz,} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Epp from "./components/Epp.component.tsx";
import Stress from "./components/Stress.component.tsx";
import Practice from "./components/Practice.component.tsx";

export default function SecurityOfPersonal() {
    const [activeTab, setActiveTab] = useState<'overview' | 'epp' | 'stress' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Seguridad y Bienestar del Personal | Curso EMT"
            description="Aprende sobre la seguridad, uso de EPP, manejo del estrés y bienestar del personal en emergencias médicas. Incluye casos prácticos, recursos y preguntas frecuentes para Técnicos en Atención Médica Prehospitalaria."
            keywords="seguridad personal EMT, EPP, bienestar rescatista, estrés prehospitalario, TAMP, curso emergencias médicas, casos prácticos, seguridad en escena"
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
                                <GiProtectionGlasses className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Seguridad y bienestar del personal</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-6xl mx-auto">
                            <NavLink
                                to="/security-of-personal/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://drive.google.com/file/d/120HbN2u4g0MvykZG64998IRQy8X12HWW/view?usp=drive_link"
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
                                    Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('epp')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'epp'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    EPP y Seguridad en Escena
                                </button>
                                <button
                                    onClick={() => setActiveTab('stress')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'stress'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Estrés y Bienestar
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-300'
                                    }`}>
                                    Casos Prácticos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (<Overview/>)}
                            {activeTab === 'epp' && (<Epp/>)}
                            {activeTab === 'stress' && (<Stress/>)}
                            {activeTab === 'practice' && (<Practice/>)}
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
                            pagina="security-of-personal"
                            titulo="Foro de Discusión - Security Of Personal"
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
                                        <li>NOM-035-STPS-2018. <a
                                            href="https://www.gob.mx/cms/uploads/attachment/file/484604/NOM-035-STPS-2018.pdf"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">Norma Oficial Mexicana</a></li>
                                        <li>NOM-034-SSA3-2013. <a
                                            href="https://www.gob.mx/cms/uploads/attachment/file/512076/NOM-034-SSA3-2013.pdf"
                                            target="_blank" rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline">Norma de ambulancias</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-safety/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Seguridad en EMS</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/ems-safety/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Seguridad y bienestar</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Canal de YouTube con videos educativos</a></li>
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
        </SEOWrapper>
    );
}

