import { ReactNode, useState } from "react";
import { NavLink } from "react-router";
import { FaClipboardCheck, FaChartBar, FaWrench, FaLightbulb } from "react-icons/fa";
import { IoReturnDownBack } from "react-icons/io5";
import { MdQuiz, MdMenuBook } from "react-icons/md";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import SEOWrapper from "../../../../components/SEOWrapper/SEOWrapper.component";
import { ForumSection } from "../../../../components/ForumSection";
import { faqData } from "./EquipmentTesting.questions";
import Overview from "./components/Overview.component";
import ThreeSigma from "./components/ThreeSigma.component";
import TestMethods from "./components/TestMethods.component";
import KeyConcepts from "./components/KeyConcepts.component";

type EquipmentTestingTab = "overview" | "sigma" | "methods" | "concepts";

export default function EquipmentTesting() {
    const [activeTab, setActiveTab] = useState<EquipmentTestingTab>("overview");

    const tabs: { id: EquipmentTestingTab; label: string; icon: ReactNode }[] = [
        { id: "overview", label: "Generalidades", icon: <MdMenuBook className="w-4 h-4" /> },
        { id: "sigma", label: "Método 3 Sigma", icon: <FaChartBar className="w-4 h-4" /> },
        { id: "methods", label: "Métodos de Prueba", icon: <FaWrench className="w-4 h-4" /> },
        { id: "concepts", label: "Conceptos Clave", icon: <FaLightbulb className="w-4 h-4" /> },
    ];

    return (
        <SEOWrapper
            title="Pruebas de Equipo de Seguridad de Vida | Lección 4"
            description="Lección 4 del curso de Rescate con Cuerdas: métodos de prueba NFPA 1983, cálculo estadístico de 3 sigma, pruebas de cuerda, arneses, mosquetones, poleas, dispositivos de aseguramiento y descenso. Basado en CMC Rope Rescue Technician Manual."
            keywords="pruebas equipo rescate, NFPA 1983, 3 sigma, resistencia equipo rescate, prueba arnés, prueba carabiner, belay device test, cuerda seguridad de vida"
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
                                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <FaClipboardCheck className="w-14 h-14 text-white" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-emerald-600 mb-1">Lección 4</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                Pruebas de Equipo de Seguridad de Vida
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-emerald-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto" />
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Acceso al examen */}
                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${AllRoutes.ROPE_EQUIPMENT_TESTING}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-emerald-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-emerald-500 mb-2" />
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
                                                ? "border-emerald-500 text-emerald-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
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
                            {activeTab === "overview" && <Overview />}
                            {activeTab === "sigma" && <ThreeSigma />}
                            {activeTab === "methods" && <TestMethods />}
                            {activeTab === "concepts" && <KeyConcepts />}
                        </div>

                        {/* FAQ */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({ open }) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-emerald-100 transition">
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
                            pagina="rope-pruebas-equipo"
                            titulo="Foro de Discusión - Pruebas de Equipo de Seguridad de Vida"
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
                                            Capítulo 04: "Life Safety Equipment Testing". CMC Rescue, Inc.
                                        </li>
                                        <li>
                                            NFPA. (2018). <em>NFPA 1983: Standard on Life Safety Rope and Equipment for Emergency Services</em>.
                                            National Fire Protection Association.
                                        </li>
                                        <li>
                                            Cordage Institute. <em>CI 1800: Test Method for Life Safety Rope and Accessory Cords
                                            for Life Safety Applications</em>.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>
                                            <a href="https://www.nfpa.org/codes-and-standards/1/9/8/3" target="_blank" rel="noopener noreferrer"
                                               className="text-emerald-600 hover:underline">
                                                NFPA 1983 — Standard on Life Safety Rope and Equipment
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.ropecord.com" target="_blank" rel="noopener noreferrer"
                                               className="text-emerald-600 hover:underline">
                                                Cordage Institute — Estándares CI 1800, CI 1801, CI 1803
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.astm.org/f2436-05r21.html" target="_blank" rel="noopener noreferrer"
                                               className="text-emerald-600 hover:underline">
                                                ASTM F2436 — Test Method for Rope Rescue Belay Systems
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
