import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Pharmacology.questions.ts";
import {GiMedicines} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import { FaPills} from "react-icons/fa";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf} from "react-icons/bs";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Rights from "./components/Rights.component.tsx";
import Drugs from "./components/Drugs.component.tsx";
import Tables from "./components/Tables.component.tsx";

export default function Pharmacology() {
    const [activeTab, setActiveTab] = useState<'overview' | 'rights' | 'drugs' | 'tables'>('overview');
    return (
        <SEOWrapper
            title="Farmacología EMT | Medicamentos, Dosis y Protocolos en Atención Prehospitalaria"
            description="Guía completa de farmacología para Técnicos en Atención Médica Prehospitalaria: conceptos clave, medicamentos esenciales, cálculo de dosis, vías de administración, tablas de referencia y consejos prácticos para paramédicos."
            keywords="farmacología, EMT, paramédicos, medicamentos, cálculo de dosis, vías de administración, protocolos, emergencias médicas, 6 correctos, epinefrina, aspirina, salbutamol, oxígeno, tablas de referencia, seguridad en medicamentos"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div
                    className="flex flex-col items-center  justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4   p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <GiMedicines className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Principios de la Farmacología</h1>
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
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/pharmacology/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1cETQGwfkN2GVgiQzjaePcki3NkXfhOlH/edit?usp=sharing&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://www.medicamentosplm.com/Home/Medicamento/A/1"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <FaPills className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Diccionario PLM</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1YC7zTwfOHRxItjvd2dh3dTHheoMFY5Y8/view?usp=drive_link"
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
                                    onClick={() => setActiveTab('rights')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'rights'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    6 Correctos
                                </button>
                                <button
                                    onClick={() => setActiveTab('drugs')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'drugs'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Medicamentos Comunes
                                </button>
                                <button
                                    onClick={() => setActiveTab('tables')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'tables'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Tablas Útiles
                                </button>
                            </nav>
                        </div>

                        {/* Contenido de pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (<Overview />)}
                            {activeTab === 'rights' && (<Rights />)}
                            {activeTab === 'drugs' && (<Drugs />)}
                            {activeTab === 'tables' && (<Tables />)}
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
                                                    className="flex w-full justify-between items-center bg-gray-100  px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 ">
                                                    <span>{faq.question}</span>
                                                    <ChevronUpIcon
                                                        className={`${
                                                            open ? "transform rotate-180" : ""
                                                        } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700 ">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </div>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                            {/* Foro de Discusión */}
                            <ForumSection
                                pagina="pharmacology"
                                titulo="Foro de Discusión - Pharmacology"
                            />


                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

