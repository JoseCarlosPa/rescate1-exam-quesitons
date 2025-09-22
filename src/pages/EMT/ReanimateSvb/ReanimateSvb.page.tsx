import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ReanimateSvb.questions.ts";
import { FaHandHoldingMedical, FaHeartbeat, FaUserMd} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import { MdOutlineTimer, MdQuiz, MdSpeed} from "react-icons/md";
import {BsBookHalf, BsLightbulb, BsStopwatch} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Algorithm from "./components/Algorithm.component.tsx";
import Techniques from "./components/Techniques.component.tsx";
import Practice from "./components/Practice.component.tsx";

export default function ReanimateSvb() {
    const [activeTab, setActiveTab] = useState<'overview' | 'algorithm' | 'techniques' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Reanimación Cardiopulmonar (RCP) - Soporte Vital Básico | Guía EMT Completa"
            description="Guía completa de RCP y Soporte Vital Básico para EMT: algoritmos, técnicas, cadena de supervivencia, desfibrilación y casos clínicos. Aprende las maniobras que salvan vidas."
            keywords="RCP, reanimación cardiopulmonar, soporte vital básico, SVB, paro cardíaco, desfibrilación, DEA, compresiones torácicas, cadena de supervivencia, emergencias médicas, casos clínicos"
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
                                <FaHandHoldingMedical className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Reanimación: Soporte Vital Básico
                                (SVB)</h1>
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
                                to={`${AllRoutes.REANIMATE_SVB}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href={AllRoutes.BLS}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">BLS</p>
                            </a>

                            <a href="https://www.heart.org/es/cpr" target="_blank" rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Recursos AHA</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1pbbYSd30hpY_78U7rxiQn2HQHaqM3gqE/view?usp=drive_link"
                               target="_blank" rel="noopener noreferrer"
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
                                    onClick={() => setActiveTab('algorithm')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'algorithm'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Algoritmo SVB
                                </button>
                                <button
                                    onClick={() => setActiveTab('techniques')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'techniques'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Técnicas y Dispositivos
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Clínicos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <Overview />
                            )}
                            {activeTab === 'algorithm' && (
                                <Algorithm />
                            )}
                            {activeTab === 'techniques' && (
                                <Techniques />
                            )}
                            {activeTab === 'practice' && (
                                <Practice />
                            )}
                        </div>

                        {/* Panel de Tips Rápidos para Aprendizaje */}
                        <section
                            className="max-w-5xl mx-auto p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-sm mb-8 border-l-4 border-orange-500">
                            <h2 className="text-2xl font-bold mb-4 text-orange-800 flex items-center">
                                <BsLightbulb className="w-6 h-6 mr-2"/>
                                Tips Rápidos para Recordar en Campo
                            </h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-center mb-2">
                                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto"/>
                                    </div>
                                    <h3 className="font-bold text-red-700 text-center mb-2">Regla de 10</h3>
                                    <p className="text-sm text-gray-700 text-center">
                                        ≤10 seg para verificar pulso
                                        <br/>≤10 seg para cambio de rescatista
                                        <br/>≤10 seg interrupciones máx
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-center mb-2">
                                        <FaHeartbeat className="w-8 h-8 text-blue-500 mx-auto"/>
                                    </div>
                                    <h3 className="font-bold text-blue-700 text-center mb-2">30:2</h3>
                                    <p className="text-sm text-gray-700 text-center">
                                        30 compresiones
                                        <br/>2 ventilaciones
                                        <br/>Ritmo constante
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-center mb-2">
                                        <MdSpeed className="w-8 h-8 text-green-500 mx-auto"/>
                                    </div>
                                    <h3 className="font-bold text-green-700 text-center mb-2">100-120</h3>
                                    <p className="text-sm text-gray-700 text-center">
                                        Compresiones por minuto
                                        <br/>Ritmo de "Staying Alive"
                                        <br/>Profundidad 5-6 cm
                                    </p>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="text-center mb-2">
                                        <BsStopwatch className="w-8 h-8 text-purple-500 mx-auto"/>
                                    </div>
                                    <h3 className="font-bold text-purple-700 text-center mb-2">Cada 2 min</h3>
                                    <p className="text-sm text-gray-700 text-center">
                                        Cambiar rescatista
                                        <br/>Verificar pulso
                                        <br/>Analizar ritmo (DEA)
                                    </p>
                                </div>
                            </div>
                            <div className="mt-6 bg-white p-4 rounded-lg">
                                <h4 className="font-bold text-orange-800 mb-2 flex items-center">
                                    <FaUserMd className="w-4 h-4 mr-2"/>
                                    Frase Mnemónica: "PARC"
                                </h4>
                                <div className="grid md:grid-cols-4 gap-4 text-sm">
                                    <div className="text-center">
                                        <span className="font-bold text-blue-600">P</span>osición correcta
                                    </div>
                                    <div className="text-center">
                                        <span className="font-bold text-green-600">A</span>profundidad adecuada
                                    </div>
                                    <div className="text-center">
                                        <span className="font-bold text-orange-600">R</span>itmo constante
                                    </div>
                                    <div className="text-center">
                                        <span className="font-bold text-purple-600">C</span>ambio frecuente
                                    </div>
                                </div>
                            </div>
                        </section>

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
                            pagina="reanimate-svb"
                            titulo="Foro de Discusión - Reanimate Svb"
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
                                        <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.
                                        </li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición).
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://cpr.heart.org/es" target="_blank" rel="noopener noreferrer"
                                               className="text-blue-600 hover:underline">AHA - Recursos de RCP y SVB</a>
                                        </li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Canal de YouTube con videos educativos</a></li>
                                        <li><a href="https://www.ems1.com/cpr/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre RCP</a></li>
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

