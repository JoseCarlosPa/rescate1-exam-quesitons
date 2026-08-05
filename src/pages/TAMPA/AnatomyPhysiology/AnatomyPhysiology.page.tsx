import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AnatomyPhysiology.questions.ts";
import {FaGraduationCap} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz, MdOutlineMenuBook} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf} from "react-icons/bs";
import {useState} from "react";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import CardiovascularSystem from "./components/CardiovascularSystem.component.tsx";
import RespiratorySystem from "./components/RespiratorySystem.component.tsx";
import NervousSystem from "./components/NervousSystem.component.tsx";
import MusculoskeletalEndocrine from "./components/MusculoskeletalEndocrine.component.tsx";
import OtherSystems from "./components/OtherSystems.component.tsx";

export default function AnatomyPhysiology() {
    const [activeTab, setActiveTab] = useState<'cardiovascular' | 'respiratory' | 'nervous' | 'musculoendocrine' | 'other'>('cardiovascular');

    return (
        <SEOWrapper
            title="Anatomía y Fisiología II TAMP-A | Cardiovascular, Respiratorio, Nervioso"
            description="Módulo de Anatomía y Fisiología II para el Técnico en Atención Médica Prehospitalaria Avanzado (TAMP-A). Profundiza en sistemas cardiovascular, respiratorio, nervioso, musculoesquelético y endocrino."
            keywords="TAMP-A, paramédico, anatomía, fisiología, sistema cardiovascular, sistema respiratorio, sistema nervioso, sistema endocrino, fisiopatología"
            section="tampa"
            difficulty="Advanced"
            timeRequired="PT90M"
            educationalLevel="Advanced"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <FaGraduationCap className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Anatomía y Fisiología II</h1>
                            <p className="text-sm italic mb-4">Alumnos Rescate 1 — Técnico Avanzado (TAMP-A)</p>
                            <div className="flex justify-center">
                                <NavLink
                                    to={AllRoutes.TAMPA}
                                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                    <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                    <p className="text-lg">Regresar a TAMP-A</p>
                                </NavLink>
                            </div>
                        </header>

                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to={AllRoutes.TAMPA_ANATOMY_PHYSIOLOGY + '/exam'}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="#"
                               onClick={(e) => { e.preventDefault(); alert("Presentación en desarrollo"); }}
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="#"
                               onClick={(e) => { e.preventDefault(); alert("Manual en desarrollo"); }}
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdOutlineMenuBook className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Manual</p>
                            </a>

                            <a href="#"
                               onClick={(e) => { e.preventDefault(); alert("Capítulo en desarrollo"); }}
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                        </div>

                        {/* Navegación por pestañas */}
                        <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                            <nav className="flex space-x-2 overflow-x-auto pb-1">
                                <button
                                    onClick={() => setActiveTab('cardiovascular')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                        activeTab === 'cardiovascular'
                                            ? 'border-red-500 text-red-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Cardiovascular
                                </button>
                                <button
                                    onClick={() => setActiveTab('respiratory')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                        activeTab === 'respiratory'
                                            ? 'border-blue-500 text-blue-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Respiratorio
                                </button>
                                <button
                                    onClick={() => setActiveTab('nervous')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                        activeTab === 'nervous'
                                            ? 'border-purple-500 text-purple-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Nervioso
                                </button>
                                <button
                                    onClick={() => setActiveTab('musculoendocrine')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                        activeTab === 'musculoendocrine'
                                            ? 'border-emerald-500 text-emerald-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Musculoesquelético y Endocrino
                                </button>
                                <button
                                    onClick={() => setActiveTab('other')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition whitespace-nowrap ${
                                        activeTab === 'other'
                                            ? 'border-indigo-500 text-indigo-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Otros Sistemas
                                </button>
                            </nav>
                        </div>

                        {/* Contenido de pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'cardiovascular' && (<CardiovascularSystem/>)}
                            {activeTab === 'respiratory' && (<RespiratorySystem/>)}
                            {activeTab === 'nervous' && (<NervousSystem/>)}
                            {activeTab === 'musculoendocrine' && (<MusculoskeletalEndocrine/>)}
                            {activeTab === 'other' && (<OtherSystems/>)}
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
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100">
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

                            {/* Foro de Discusión */}
                            <div className="mt-8">
                                <ForumSection
                                    pagina="tampa-anatomy-physiology"
                                    titulo="Foro de Discusión - Anatomía y Fisiología II"
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}
