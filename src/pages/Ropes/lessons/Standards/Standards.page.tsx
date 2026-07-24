import {ReactNode, useState} from "react";
import {NavLink} from "react-router";
import {MdSecurity, MdMenuBook} from "react-icons/md";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {FaFileContract, FaBuilding, FaCertificate, FaExclamationTriangle} from "react-icons/fa";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {AllRoutes} from "../../../../components/Router/Router.constants";
import SEOWrapper from "../../../../components/SEOWrapper/SEOWrapper.component";
import {ForumSection} from "../../../../components/ForumSection";
import {faqData} from "./Standards.questions";
import Overview from "./components/Overview.component";
import StandardVsRegulation from "./components/StandardVsRegulation.component";
import Organizations from "./components/Organizations.component";
import NfpaExplorer from "./components/NfpaExplorer.component";
import MythsVsFacts from "./components/MythsVsFacts.component";

type StandardsTab = 'overview' | 'comparison' | 'organizations' | 'nfpa' | 'myths';

export default function Standards() {
    const [activeTab, setActiveTab] = useState<StandardsTab>('overview');

    const tabs: {id: StandardsTab; label: string; icon: ReactNode}[] = [
        {id: 'overview', label: 'Generalidades', icon: <MdMenuBook className="w-4 h-4"/>},
        {id: 'comparison', label: 'Estándar vs. Regulación', icon: <FaFileContract className="w-4 h-4"/>},
        {id: 'organizations', label: 'Organizaciones', icon: <FaBuilding className="w-4 h-4"/>},
        {id: 'nfpa', label: 'Normas NFPA', icon: <FaCertificate className="w-4 h-4"/>},
        {id: 'myths', label: 'Mito vs. Realidad', icon: <FaExclamationTriangle className="w-4 h-4"/>},
    ];

    return (
        <SEOWrapper
            title="Normativas y Estándares en Rescate con Cuerdas | Lección 3"
            description="Lección 3 del curso de Rescate con Cuerdas: diferencia entre estándares y regulaciones, organizaciones que los crean (OSHA, ASTM, Cordage Institute, NFPA, ASSP, ANSI, ITRA), normas NFPA clave (1983, 1858, 1500, 1006, 1670) y mitos comunes sobre NFPA 1983. Basado en CMC Rope Rescue Technician Manual."
            keywords="normativas rescate con cuerdas, NFPA 1006, NFPA 1983, NFPA 1670, OSHA rescate, ASTM rescate, estándares equipo de rescate"
            section="ropes"
            difficulty="Beginner"
            timeRequired="PT1H"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-5xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-slate-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <MdSecurity className="w-14 h-14 text-white"/>
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-blue-600 mb-1">Lección 3</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-slate-600 bg-clip-text text-transparent">
                                Normativas y Estándares
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-blue-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Acceso al examen */}
                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${AllRoutes.ROPE_STANDARDS}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-blue-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-blue-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                        </div>

                        {/* Navegación por pestañas */}
                        <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                            <nav className="flex space-x-1 overflow-x-auto pb-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && <Overview/>}
                            {activeTab === 'comparison' && <StandardVsRegulation/>}
                            {activeTab === 'organizations' && <Organizations/>}
                            {activeTab === 'nfpa' && <NfpaExplorer/>}
                            {activeTab === 'myths' && <MythsVsFacts/>}
                        </div>

                        {/* FAQ */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({open}) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-blue-100 transition">
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
                            pagina="rope-normativas"
                            titulo="Foro de Discusión - Normativas y Estándares"
                        />

                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            CMC Rescue. (2020). <em>CMC Rope Rescue Technician Manual, 6th Edition</em> — Parte 01,
                                            Capítulo 03: "Standards and Regulations". CMC Rescue, Inc.
                                        </li>
                                        <li>
                                            NFPA. (2021). <em>NFPA 1006: Standard for Technical Rescue Personnel Professional
                                            Qualifications</em> — Requisito 5.2.3.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            <a href="https://www.osha.gov" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">
                                                OSHA — Occupational Safety and Health Administration
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.astm.org" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">
                                                ASTM International
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">
                                                NFPA — National Fire Protection Association
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.ropecord.com" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">
                                                Cordage Institute
                                            </a>
                                        </li>
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
