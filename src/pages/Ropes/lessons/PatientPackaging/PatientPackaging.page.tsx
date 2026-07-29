import { ReactNode, useState } from "react";
import { NavLink } from "react-router";
import { MdHealing, MdMenuBook, MdQuiz, MdShield } from "react-icons/md";
import { FaStrava, FaBed } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { AllRoutes } from "../../../../components/Router/Router.constants";
import SEOWrapper from "../../../../components/SEOWrapper/SEOWrapper.component";
import { ForumSection } from "../../../../components/ForumSection";
import { patientPackagingFaqData } from "./PatientPackaging.questions";
import Overview from "./components/Overview.component";
import TieInSystems from "./components/TieInSystems.component";
import Protection from "./components/Protection.component";
import LitterTypes from "./components/LitterTypes.component";

type PackagingTab = "overview" | "tiein" | "protection" | "litters";

export default function PatientPackaging() {
    const [activeTab, setActiveTab] = useState<PackagingTab>("overview");

    const tabs: { id: PackagingTab; label: string; icon: ReactNode }[] = [
        { id: "overview",   label: "Principios", icon: <MdMenuBook className="w-4 h-4" /> },
        { id: "tiein",      label: "Amarres (Tie-In)", icon: <FaStrava className="w-4 h-4" /> },
        { id: "protection", label: "Protección", icon: <MdShield className="w-4 h-4" /> },
        { id: "litters",    label: "Tipos de Camillas", icon: <FaBed className="w-4 h-4" /> },
    ];

    return (
        <SEOWrapper
            title="Empaquetamiento de Pacientes | Lección 12"
            description="Lección 12 del curso de Rescate con Cuerdas: Patient Packaging. Aprende el uso del arnés pélvico, Litter Shield, amarres externos e internos, y la selección de la camilla adecuada."
            keywords="patient packaging, rescate con cuerdas, empaquetamiento, stokes litter, sked, litter shield"
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
                                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                                    <MdHealing className="w-14 h-14 text-white" />
                                </div>
                            </div>
                            <p className="text-sm font-semibold text-blue-600 mb-1">Lección 12</p>
                            <h1 className="text-4xl font-bold mb-2 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Empaquetamiento
                            </h1>
                            <p className="text-sm italic mb-4 text-gray-500">Alumnos Rescate 1</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.ROPE_RESCUE}
                                    className="flex gap-2 mb-4 bg-white shadow rounded-lg p-2 hover:bg-blue-50 transition duration-300 ease-in-out"
                                >
                                    <IoReturnDownBack className="w-5 h-5 my-auto" />
                                    <p className="text-lg">Regresar a lecciones</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Examen */}
                        <div className="flex justify-center mb-8">
                            <NavLink
                                to={`${AllRoutes.ROPE_PATIENT_PACKAGING}/exam`}
                                className="flex flex-col items-center justify-center p-4 w-48 bg-white rounded-lg shadow hover:bg-blue-50 transition duration-300 hover:shadow-md"
                            >
                                <MdQuiz className="w-10 h-10 text-blue-500 mb-2" />
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
                                                ? "border-blue-500 text-blue-600"
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
                            {activeTab === "tiein"      && <TieInSystems />}
                            {activeTab === "protection" && <Protection />}
                            {activeTab === "litters"    && <LitterTypes />}
                        </div>

                        {/* FAQ */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                            <div className="space-y-4">
                                {patientPackagingFaqData.map((faq, idx) => (
                                    <Disclosure key={idx}>
                                        {({ open }) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-blue-100 transition">
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
                            pagina="rope-patient-packaging"
                            titulo="Foro de Discusión - Empaquetamiento de Pacientes"
                        />

                        {/* Referencias */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mt-8">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>CMC Rescue. (2020). <em>CMC Rope Rescue Technician Manual, 6th Edition</em> — Cap. 12 y 13: "Patient Packaging" & "Litters & Rigging".</li>
                            </ul>
                        </section>

                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}
