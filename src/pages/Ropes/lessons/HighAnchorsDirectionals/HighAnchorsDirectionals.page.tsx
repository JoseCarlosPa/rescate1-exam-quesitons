import { ReactNode, useState } from "react";
import { NavLink } from "react-router";
import { MdMenuBook, MdQuiz, MdOutlineConstruction, MdFireTruck } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import SEOWrapper from "../../../../components/SEOWrapper/SEOWrapper.component";
import { ForumSection } from "../../../../components/ForumSection";
import { highAnchorsFaqData } from "./HighAnchorsDirectionals.questions";
import Overview from "./components/Overview.component";
import Aerials from "./components/Aerials.component";

type HighAnchorsTab = "overview" | "aerials";

export default function HighAnchorsDirectionals() {
    const [activeTab, setActiveTab] = useState<HighAnchorsTab>("overview");

    const tabs: { id: HighAnchorsTab; label: string; icon: ReactNode }[] = [
        { id: "overview", label: "Dispositivos AHD", icon: <MdMenuBook className="w-4 h-4" /> },
        { id: "aerials", label: "Aeriales y Grúas", icon: <MdFireTruck className="w-4 h-4" /> },
    ];

    return (
        <SEOWrapper
            title="Anclajes Altos y Direccionales | Lección 29"
            description="Lección 29 del curso de Rescate con Cuerdas: High Anchors & Directionals. Trípodes, Arizona Vortex, Davit Arms, Gin Poles y uso de aeriales de bomberos."
            keywords="tripode rescate, arizona vortex, davit arm rescate, gin pole, high directional rescue"
            section="ropes"
            difficulty="Advanced"
            timeRequired="PT1H20M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-5xl">

                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-slate-600 to-gray-700 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <MdOutlineConstruction className="w-14 h-14 text-white" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-slate-600 mb-1">Lección 29</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-slate-600 to-gray-700 bg-clip-text text-transparent">
                                Anclajes Altos y Direccionales
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1 (Capítulo 30)</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-slate-50 transition duration-300"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto" />
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${AllRoutes.ROPE_HIGH_ANCHORS_DIRECTIONALS}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-slate-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-slate-500 mb-2" />
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                        </div>

                        <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                            <nav className="flex space-x-1 overflow-x-auto pb-1">
                                {tabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`flex items-center gap-2 py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                            activeTab === tab.id
                                                ? "border-slate-600 text-slate-700"
                                                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                    >
                                        {tab.icon}
                                        {tab.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === "overview" && <Overview />}
                            {activeTab === "aerials" && <Aerials />}
                        </div>

                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {highAnchorsFaqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({ open }) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-slate-100 transition">
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

                        <ForumSection
                            pagina="rope-high-anchors-directionals"
                            titulo="Foro de Discusión - Anclajes Altos"
                        />

                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>CMC Rescue. (2020). <em>CMC Rope Rescue Technician Manual, 6th Edition</em> — Cap. 30: "High Anchors & Directionals".</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}
