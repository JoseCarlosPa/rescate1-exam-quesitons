import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./HumanBody.questions.ts";
import {IoIosBody} from "react-icons/io";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BiBody} from "react-icons/bi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Systems from "./components/Systems.component.tsx";
import Anatomy from "./components/Anatomy.component.tsx";
import Practice from "./components/Practice.component.tsx";

export default function HumanBody() {
    const [activeTab, setActiveTab] = useState<'overview' | 'systems' | 'anatomy' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <SEOWrapper
            title="El Cuerpo Humano para EMT | Anatomía y Fisiología | Curso TAMP"
            description="Estudia la anatomía, fisiología, sistemas principales y valores normales del cuerpo humano para Técnicos en Atención Médica Prehospitalaria. Incluye recursos, ejercicios, preguntas frecuentes y material de apoyo."
            keywords="cuerpo humano EMT, anatomía prehospitalaria, fisiología, sistemas del cuerpo, valores normales, TAMP, curso emergencias médicas, casos prácticos, atención prehospitalaria"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
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
                                <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">El Cuerpo Humano</h1>
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
                                to="/human-body/exam"
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            <a href="https://docs.google.com/presentation/d/1Rnfsa9yfGk1X8vWPptTCUSNO46Snf2nq/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>
                            <a href="https://www.visiblebody.com/"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BiBody className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Atlas 3D</p>
                            </a>
                            <a href="https://drive.google.com/file/d/1kn1kR7VDQJMblqg4uc37LoLHUCvGL2Hf/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
                            </a>
                        </div>

                        {/* Quiz rápido */}
                        {showQuickQuiz && (
                            <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - El cuerpo humano</h3>
                                <button
                                    onClick={() => setShowQuickQuiz(false)}
                                    className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                                    Cerrar Quiz
                                </button>
                            </div>
                        )}

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
                                    onClick={() => setActiveTab('systems')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'systems'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Sistemas Principales
                                </button>
                                <button
                                    onClick={() => setActiveTab('anatomy')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'anatomy'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Anatomía y Fisiología
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Prácticos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (<Overview/>)}
                            {activeTab === 'systems' && (<Systems/>)}
                            {activeTab === 'anatomy' && (<Anatomy/>)}
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
                            pagina="human-body"
                            titulo="Foro de Discusión - Human Body"
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
                                        <li>Netter, F. (2018). <em>Anatomía Humana Atlas Ilustrado</em>.</li>
                                        <li>Guyton & Hall. (2021). <em>Tratado de Fisiología Médica</em>.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/ems-education/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Educación y anatomía</a></li>
                                        <li><a href="https://www.visiblebody.com/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">Visible
                                            Body - Atlas anatómico interactivo</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Videos educativos</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Complete Anatomy - App de anatomía 3D</li>
                                        <li>Human Anatomy Atlas</li>
                                        <li>Medscape - Referencias médicas</li>
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

