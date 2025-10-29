import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./PsiquiatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import { MdPsychology, MdQuiz} from "react-icons/md";
import {BsBookHalf, } from "react-icons/bs";
import {PiBrainFill, PiChalkboardTeacher} from "react-icons/pi";
import {FaExclamationTriangle, FaUserMd} from "react-icons/fa";
import {RiMentalHealthLine} from "react-icons/ri";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";
import {ForumSection} from "../../../components/ForumSection";
import Overview from "./components/Overview.component.tsx";
import Evaluation from "./components/Evaluation.component.tsx";
import Treatment from "./components/Treatment.component.tsx";
import Scenarios from "./components/Scenarios.component.tsx";

export default function PsiquiatricEmergencies() {
    const [activeTab, setActiveTab] = useState<'overview' | 'evaluation' | 'treatment' | 'scenarios'>('overview');

    return (
        <SEOWrapper
            title="Emergencias Psiquiátricas EMT | Evaluación, Manejo y Comunicación Terapéutica"
            description="Guía completa sobre emergencias psiquiátricas para Técnicos en Atención Médica Prehospitalaria: evaluación de crisis conductuales, manejo de pacientes agitados, comunicación terapéutica y escenarios específicos. Aprende a actuar ante emergencias de salud mental."
            keywords="emergencias psiquiátricas, EMT, paramédicos, crisis conductual, salud mental, delirio agitado, ideación suicida, psicosis, comunicación terapéutica, restricciones físicas, manejo de pacientes agitados"
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
                                <PiBrainFill className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Psiquiatricas</h1>
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
                                to={`${AllRoutes.PSIQUIATRIC_EMERGENCY}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>

                            <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <RiMentalHealthLine className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Recursos</p>
                            </a>

                            <a href="https://drive.google.com/file/d/1GKXb9xUjTFbxmwqSmy-mHv35XK4c0vE3/view?usp=drive_link"
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
                                    Fundamentos
                                </button>
                                <button
                                    onClick={() => setActiveTab('evaluation')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'evaluation'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Evaluación y Seguridad
                                </button>
                                <button
                                    onClick={() => setActiveTab('treatment')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'treatment'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Manejo y Comunicación
                                </button>
                                <button
                                    onClick={() => setActiveTab('scenarios')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'scenarios'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Clínicos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (<Overview />)}
                            {activeTab === 'evaluation' && (<Evaluation />)}
                            {activeTab === 'treatment' && (<Treatment />)}
                            {activeTab === 'scenarios' && (<Scenarios />)}
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
                        </section>
                        {/* Foro de Discusión */}
                        <ForumSection
                            pagina="psiquiatric-emergencies"
                            titulo="Foro de Discusión - Psiquiatric Emergencies"
                        />


                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <div className="flex items-center mb-6">
                                <BsBookHalf className="w-8 h-8 text-orange-500 mr-3"/>
                                <h2 className="text-2xl font-bold">Referencias y Recursos Adicionales</h2>
                            </div>

                            <div className="space-y-6">
                                {/* Recursos de emergencia */}
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <h3 className="text-lg font-semibold mb-3 text-red-700 flex items-center">
                                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                                        Recursos de Crisis 24/7
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h4 className="font-medium text-red-600 mb-2">Líneas de Crisis
                                                Nacional:</h4>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• <strong>Línea Nacional de Prevención del
                                                    Suicidio:</strong> 1-800-273-8255
                                                </li>
                                                <li>• <strong>Crisis Text Line:</strong> Texto HOME al 741741</li>
                                                <li>• <strong>SAMHSA National Helpline:</strong> 1-800-662-4357</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-red-600 mb-2">Aplicaciones de Crisis:</h4>
                                            <ul className="space-y-1 text-gray-700">
                                                <li>• <strong>MY3 App:</strong> Plan de seguridad personal</li>
                                                <li>• <strong>PTSD Coach:</strong> Manejo de síntomas</li>
                                                <li>• <strong>MindShift:</strong> Manejo de ansiedad</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-medium mb-3 flex items-center">
                                            <BsBookHalf className="w-5 h-5 mr-2 text-blue-500"/>
                                            Bibliografía Científica
                                        </h3>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <ul className="space-y-3 text-gray-700">
                                                <li>
                                                    <strong>AAOS.</strong> (2021). <em>Emergencias Médicas
                                                    Prehospitalarias</em> (11ª edición).
                                                    Jones & Bartlett Learning.
                                                </li>
                                                <li>
                                                    <strong>American Psychiatric Association.</strong> (2022). <em>Diagnostic
                                                    and Statistical Manual
                                                    of Mental Disorders</em> (5th ed., text rev.).
                                                </li>
                                                <li>
                                                    <strong>NAEMT.</strong> (2020). <em>PHTLS: Soporte Vital de Trauma
                                                    Prehospitalario</em> (9ª edición).
                                                </li>
                                                <li>
                                                    <strong>Kaplan & Sadock.</strong> (2021). <em>Synopsis of
                                                    Psychiatry: Behavioral Sciences/Clinical Psychiatry</em> (12th ed.).
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium mb-3 flex items-center">
                                            <RiMentalHealthLine className="w-5 h-5 mr-2 text-green-500"/>
                                            Recursos Profesionales
                                        </h3>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <ul className="space-y-2 text-gray-700">
                                                <li>
                                                    <strong>NAMI (National Alliance on Mental Illness):</strong>
                                                    <br/>
                                                    <a href="https://www.nami.org" target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-blue-600 hover:underline">www.nami.org</a>
                                                </li>
                                                <li>
                                                    <strong>SAMHSA (Substance Abuse and Mental Health
                                                        Services):</strong>
                                                    <br/>
                                                    <a href="https://www.samhsa.gov" target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-blue-600 hover:underline">www.samhsa.gov</a>
                                                </li>
                                                <li>
                                                    <strong>Crisis Prevention Institute (CPI):</strong>
                                                    <br/>
                                                    <a href="https://www.crisisprevention.com" target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-blue-600 hover:underline">www.crisisprevention.com</a>
                                                </li>
                                                <li>
                                                    <strong>International Association of Fire Chiefs (IAFC):</strong>
                                                    <br/>
                                                    <a href="https://www.iafc.org" target="_blank"
                                                       rel="noopener noreferrer"
                                                       className="text-blue-600 hover:underline">www.iafc.org</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3 flex items-center">
                                        <MdPsychology className="w-5 h-5 mr-2 text-purple-500"/>
                                        Educación Continua y Certificaciones
                                    </h3>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-purple-700 mb-2">Cursos
                                                    Recomendados:</h4>
                                                <ul className="space-y-1 text-gray-700">
                                                    <li>• Mental Health First Aid</li>
                                                    <li>• Crisis Prevention Institute (CPI) Training</li>
                                                    <li>• Applied Suicide Intervention Skills Training (ASIST)</li>
                                                    <li>• Psychological First Aid (PFA)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-purple-700 mb-2">Certificaciones:</h4>
                                                <ul className="space-y-1 text-gray-700">
                                                    <li>• Certified Crisis Counselor (CCC)</li>
                                                    <li>• Mental Health First Aid Instructor</li>
                                                    <li>• Trauma-Informed Care Specialist</li>
                                                    <li>• Crisis Response Team Member</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Mensaje final motivacional */}
                                <div
                                    className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                                    <div className="flex items-center mb-4">
                                        <FaUserMd className="w-8 h-8 text-orange-500 mr-3"/>
                                        <h3 className="text-xl font-bold text-orange-700">Tu Papel Como Profesional de
                                            la Salud Mental</h3>
                                    </div>
                                    <p className="text-gray-800 leading-relaxed">
                                        Como paramédico, eres a menudo el <strong>primer contacto médico</strong> para
                                        personas en crisis de salud mental.
                                        Tu compasión, profesionalismo y conocimiento pueden marcar la diferencia entre
                                        la vida y la muerte.
                                        Cada interacción es una oportunidad para <strong>salvar vidas</strong> y reducir
                                        el estigma asociado con la salud mental.
                                    </p>
                                    <div className="mt-4 p-4 bg-white rounded-lg">
                                        <p className="text-center text-gray-700 italic">
                                            "No siempre podemos construir el futuro para nuestra juventud, pero podemos
                                            construir nuestra juventud para el futuro."
                                            <br/>
                                            <strong>— Franklin D. Roosevelt</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

