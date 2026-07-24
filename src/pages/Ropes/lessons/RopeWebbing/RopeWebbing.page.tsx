import { ReactNode, useState } from "react";
import { NavLink } from "react-router";
import { GiRolledCloth, GiKnot, GiSewingString } from "react-icons/gi";
import { IoReturnDownBack } from "react-icons/io5";
import { MdQuiz, MdMenuBook } from "react-icons/md";
import { FaRuler, FaSearch } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import SEOWrapper from "../../../../components/SEOWrapper/SEOWrapper.component";
import { ForumSection } from "../../../../components/ForumSection";
import { faqData } from "./RopeWebbing.questions";
import Overview from "./components/Overview.component";
import FibersConstruction from "./components/FibersConstruction.component";
import Specifications from "./components/Specifications.component";
import Webbing from "./components/Webbing.component";
import UseAndCare from "./components/UseAndCare.component";

type RopeWebbingTab = "overview" | "fibers" | "specs" | "webbing" | "care";

export default function RopeWebbing() {
    const [activeTab, setActiveTab] = useState<RopeWebbingTab>("overview");

    const tabs: { id: RopeWebbingTab; label: string; icon: ReactNode }[] = [
        { id: "overview", label: "Generalidades", icon: <MdMenuBook className="w-4 h-4" /> },
        { id: "fibers", label: "Fibras y Construcción", icon: <GiKnot className="w-4 h-4" /> },
        { id: "specs", label: "Especificaciones", icon: <FaRuler className="w-4 h-4" /> },
        { id: "webbing", label: "Webbing", icon: <GiSewingString className="w-4 h-4" /> },
        { id: "care", label: "Uso y Cuidado", icon: <FaSearch className="w-4 h-4" /> },
    ];

    return (
        <SEOWrapper
            title="Cuerda y Webbing de Seguridad de Vida | Lección 5"
            description="Lección 5 del curso de Rescate con Cuerdas: fibras sintéticas (nylon, poliéster, aramidas, HMPE), construcción kernmantle, especificaciones de elongación y resistencia, webbing tubular y plano, inspección, almacenamiento y retiro de servicio. Basado en CMC Rope Rescue Technician Manual."
            keywords="cuerda rescate, kernmantle, nylon poliéster rescate, fibras sintéticas, elongación cuerda, webbing rescate, inspección cuerda, NFPA 1983 cuerda"
            section="ropes"
            difficulty="Intermediate"
            timeRequired="PT1H30M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-5xl">

                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <GiRolledCloth className="w-14 h-14 text-white" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-violet-600 mb-1">Lección 5</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                                Cuerda y Webbing de Seguridad de Vida
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-violet-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto" />
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Acceso al examen */}
                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${AllRoutes.ROPE_WEBBING}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-violet-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-violet-500 mb-2" />
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
                                                ? "border-violet-500 text-violet-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Contenido por pestaña */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === "overview"  && <Overview />}
                            {activeTab === "fibers"    && <FibersConstruction />}
                            {activeTab === "specs"     && <Specifications />}
                            {activeTab === "webbing"   && <Webbing />}
                            {activeTab === "care"      && <UseAndCare />}
                        </div>

                        {/* FAQ */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({ open }) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-violet-100 transition">
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

                        {/* Foro */}
                        <ForumSection
                            pagina="rope-cuerdas-cintas"
                            titulo="Foro de Discusión - Cuerda y Webbing de Seguridad de Vida"
                        />

                        {/* Referencias */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            CMC Rescue. (2020). <em>CMC Rope Rescue Technician Manual, 6th Edition</em> — Parte 02,
                                            Capítulo 05: "Life Safety Rope &amp; Webbing". CMC Rescue, Inc.
                                        </li>
                                        <li>
                                            NFPA. (2018). <em>NFPA 1983: Standard on Life Safety Rope and Equipment for Emergency Services</em>.
                                        </li>
                                        <li>
                                            NFPA. (2021). <em>NFPA 1858: Standard on Selection, Care, and Maintenance of Life Safety Rope and Equipment</em>.
                                        </li>
                                        <li>
                                            Cordage Institute. <em>CI 1800 / CI 1801: Test Methods for Life Safety Rope</em>.
                                        </li>
                                        <li>
                                            ASTM. <em>F1740: Standard Guide for Inspection of Nylon, Polyester, or Nylon/Polyester Blend Kernmantle Rope</em>.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            <a href="https://www.cmcpro.com" target="_blank" rel="noopener noreferrer"
                                               className="text-violet-600 hover:underline">
                                                CMC Rescue — Manuales y recursos de rescate con cuerdas
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.ropecord.com" target="_blank" rel="noopener noreferrer"
                                               className="text-violet-600 hover:underline">
                                                Cordage Institute — CI 1800, CI 1801, CI 1803
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.nfpa.org" target="_blank" rel="noopener noreferrer"
                                               className="text-violet-600 hover:underline">
                                                NFPA — NFPA 1983 y NFPA 1858
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
