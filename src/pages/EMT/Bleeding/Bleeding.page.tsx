import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Bleeding.questions.ts";
import {MdBloodtype, MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaBandAid, FaExclamationTriangle} from "react-icons/fa";

import {useState} from "react";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Pathophysiology from "./components/Pathophysiology.component.tsx";
import Treatment from "./components/Treatment.component.tsx";
import Practice from "./components/Practice.component.tsx";

export default function Bleeding() {
    const [activeTab, setActiveTab] = useState<'overview' | 'pathophysiology' | 'treatment' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Hemorragias y Shock EMT | Control de Sangrado y Manejo de Emergencias"
            description="Guía completa sobre hemorragias y shock para Técnicos en Atención Médica Prehospitalaria: tipos de sangrado, control de hemorragias, shock hipovolémico, torniquetes y casos clínicos. Aprende a salvar vidas controlando sangrados masivos."
            keywords="hemorragias, shock hipovolémico, control de sangrado, torniquete, EMT, paramédicos, presión directa, sangrado arterial, sangrado venoso, trauma, emergencias médicas, casos clínicos, hipotensión permisiva"
            section="emt"
            difficulty="Intermediate"
            timeRequired="PT120M"
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
                                <MdBloodtype className="w-24 h-24 mb-1 text-red-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Hemorragias y Shock</h1>
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

                        {/* Alerta crítica */}
                        <div
                            className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                            <div className="flex items-center mb-4">
                                <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                                <h2 className="text-2xl font-bold text-red-700">¡RECUERDA: XABCDE!</h2>
                            </div>
                            <p className="text-gray-800 leading-relaxed text-lg">
                                La hemorragia exanguinante (que mata) es lo <strong>PRIMERO</strong> que debes
                                controlar.
                                Puede causar muerte por shock en <span className="text-red-600 font-bold">minutos</span>.
                                <br/>
                                <strong>X = eXanguinante</strong> viene ANTES que A, B, C.
                            </p>
                        </div>

                        {/* Menú rápido de recursos */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                            <NavLink
                                to="/bleeding/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-red-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-red-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1U1uWAN79D7XnF-JxwkNCOryENnRlcsxO/edit?usp=sharing&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-red-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-red-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://www.stopthebleed.org/es"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-red-50 transition duration-300 hover:shadow-md">
                                <FaBandAid className="w-10 h-10 text-red-500 mb-2"/>
                                <p className="text-center font-medium">Stop The Bleed</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1X1gyH116wqPUNylkZ5b_VG6LHjB5vZcT/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-red-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-red-500 mb-2"/>
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
                                            ? 'border-red-500 text-red-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Generalidades
                                </button>
                                <button
                                    onClick={() => setActiveTab('pathophysiology')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'pathophysiology'
                                            ? 'border-red-500 text-red-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Fisiopatología y Shock
                                </button>
                                <button
                                    onClick={() => setActiveTab('treatment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'treatment'
                                            ? 'border-red-500 text-red-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Control y Tratamiento
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-red-500 text-red-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Clínicos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (<Overview/>)}

                            {activeTab === 'pathophysiology' && (<Pathophysiology/>)}

                            {activeTab === 'treatment' && (
                                <Treatment/>
                            )}

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
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-red-100 transition">
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
                            pagina="bleeding"
                            titulo="Foro de Discusión - Bleeding"
                        />
                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y Recursos Adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía Principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>NAEMT. (2023). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (10ª
                                            edición). Jones & Bartlett Learning.
                                        </li>
                                        <li>American College of Surgeons Committee on Trauma. (2018). <em>Advanced
                                            Trauma Life Support (ATLS) Student Course Manual</em> (10ª edición).
                                        </li>
                                        <li>AAOS. (2021). <em>Nancy Caroline's Emergency Care in the Streets</em> (11ª
                                            edición). Jones & Bartlett Learning.
                                        </li>
                                        <li>Comité de Trauma del Colegio Americano de Cirujanos. (2022). <em>Recursos
                                            para el Cuidado Óptimo del Paciente Traumatizado</em>.
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en Línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.stopthebleed.org/es" target="_blank"
                                               rel="noopener noreferrer" className="text-red-600 hover:underline">Stop
                                            the Bleed Campaign (Español)</a></li>
                                        <li><a href="https://www.ems1.com/hemorrhage-control" target="_blank"
                                               rel="noopener noreferrer" className="text-red-600 hover:underline">EMS1 -
                                            Artículos sobre Control de Hemorragias</a></li>
                                        <li><a href="https://www.jems.com/patient-care/trauma/hemorrhage-control/"
                                               target="_blank" rel="noopener noreferrer"
                                               className="text-red-600 hover:underline">JEMS - Control de
                                            Hemorragias</a></li>
                                        <li><a href="https://www.tc3sim.com" target="_blank" rel="noopener noreferrer"
                                               className="text-red-600 hover:underline">TC3 Simulator - Entrenamiento
                                            táctico</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Videos Educativos Recomendados</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://youtu.be/6s3VKhJNn6Y" target="_blank"
                                               rel="noopener noreferrer" className="text-red-600 hover:underline">Aplicación
                                            correcta de torniquete (Stop the Bleed)</a></li>
                                        <li><a href="https://youtu.be/oFqP4JbZnec" target="_blank"
                                               rel="noopener noreferrer" className="text-red-600 hover:underline">Control
                                            de hemorragias en trauma (PHTLS)</a></li>
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
