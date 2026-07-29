import { ReactNode, useState } from "react";
import { NavLink } from "react-router";
import { MdOutlineShield, MdMenuBook, MdQuiz, MdLoop } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import SEOWrapper from "../../../../components/SEOWrapper/SEOWrapper.component";
import { ForumSection } from "../../../../components/ForumSection";
import { edgeProtectionFaqData } from "./EdgeProtection.questions";
import Overview from "./components/Overview.component";
import EdgePadsGuards from "./components/EdgePadsGuards.component";
import RollersSliding from "./components/RollersSliding.component";

type EdgeTab = "overview" | "padsguards" | "rollers";

export default function EdgeProtection() {
    const [activeTab, setActiveTab] = useState<EdgeTab>("overview");

    const tabs: { id: EdgeTab; label: string; icon: ReactNode }[] = [
        { id: "overview",   label: "Metas Principales", icon: <MdMenuBook className="w-4 h-4" /> },
        { id: "padsguards", label: "Pads & Guards",     icon: <FaLayerGroup className="w-4 h-4" /> },
        { id: "rollers",    label: "Rollers y Fricción",icon: <MdLoop className="w-4 h-4" /> },
    ];

    return (
        <SEOWrapper
            title="Protección de Bordes | Lección 11"
            description="Lección 11 del curso de Rescate con Cuerdas: Protección de Bordes. Descubre cómo reducir la fricción con edge rollers, Ultra-Pro y canvas pads para aumentar la seguridad del rescate."
            keywords="edge protection, rope guards, edge rollers, fricción de borde, rescate vertical, rescate cuerdas"
            section="ropes"
            difficulty="Intermediate"
            timeRequired="PT1H15M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-5xl">

                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <MdOutlineShield className="w-14 h-14 text-white" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-yellow-600 mb-1">Lección 11</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent">
                                Protección de Bordes
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-yellow-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto" />
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Examen */}
                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${AllRoutes.ROPE_EDGE_PROTECTION}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-yellow-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-yellow-500 mb-2" />
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                        </div>

                        {/* Tabs */}
                        <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                            <nav className="flex space-x-1 overflow-x-auto pb-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? "border-yellow-500 text-yellow-600"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Contenido */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === "overview"   && <Overview />}
                            {activeTab === "padsguards" && <EdgePadsGuards />}
                            {activeTab === "rollers"    && <RollersSliding />}
                        </div>

                        {/* FAQ */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {edgeProtectionFaqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({ open }) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-yellow-100 transition">
                                                    <span>{faq.question}</span>
                                                    <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`} />
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
                            pagina="rope-edge-protection"
                            titulo="Foro de Discusión - Protección de Bordes"
                        />

                        {/* Referencias */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>CMC Rescue. (2020). <em>CMC Rope Rescue Technician Manual, 6th Edition</em> — Cap. 11: "Edge Protection".</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}
