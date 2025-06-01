import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./CardioEmergency.questions.ts";
import {FaHeartPulse} from "react-icons/fa6";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function CardioEmergency() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice' | 'diseases'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaHeartPulse className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Cardiovasculares</h1>
                        <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto" />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>

                    {/* Menú rápido de recursos */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to="/cardio-emergency/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen Completo</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <button
                            onClick={() => setShowQuickQuiz(!showQuickQuiz)}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <TbNotebook className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Quiz Rápido</p>
                        </button>
                        <a href="https://www.ems1.com/ems-products/cardiac-care/" target="_blank" rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos EMS1</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus conocimientos</h3>
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
                                onClick={() => setActiveTab('anatomy')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'anatomy' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Anatomía y Fisiología
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo y Tratamiento
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
                            <button
                                onClick={() => setActiveTab('diseases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'diseases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Enfermedades Comunes
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias cardiovasculares?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias cardiovasculares comprenden todas aquellas situaciones en las que el corazón o los vasos sanguíneos sufren una alteración aguda que pone en peligro la vida. Incluyen el paro cardíaco súbito, el síndrome coronario agudo (SCA), arritmias, insuficiencia cardíaca y shock cardiogénico.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Según la AAOS (11ª edición), el reconocimiento temprano y la intervención rápida son fundamentales para mejorar la supervivencia. La cadena de supervivencia es clave en la atención prehospitalaria.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cadena de Supervivencia</h2>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li>Reconocimiento inmediato del paro cardíaco y activación del sistema de emergencias.</li>
                                        <li>RCP de alta calidad precoz, con énfasis en compresiones torácicas efectivas.</li>
                                        <li>Desfibrilación rápida con DEA.</li>
                                        <li>Soporte vital avanzado y cuidados post-paro.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dolor torácico opresivo</li>
                                            <li>Dificultad para respirar (disnea)</li>
                                            <li>Palpitaciones o arritmias</li>
                                            <li>Pérdida súbita de la conciencia</li>
                                            <li>Piel fría, sudorosa y pálida</li>
                                            <li>Debilidad extrema</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Hipotensión</li>
                                            <li>Náusea o vómito</li>
                                            <li>Ansiedad o sensación de muerte inminente</li>
                                            <li>Edema pulmonar agudo</li>
                                            <li>Signos de shock</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Enfermedades cardiovasculares más comunes en México (2025)</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Enfermedad isquémica del corazón (infarto agudo al miocardio, angina de pecho)</li>
                                        <li>Hipertensión arterial sistémica</li>
                                        <li>Insuficiencia cardíaca</li>
                                        <li>Arritmias cardíacas (fibrilación auricular, taquicardias, bradicardias)</li>
                                        <li>Enfermedad cerebrovascular (accidente vascular cerebral)</li>
                                        <li>Cardiopatía hipertensiva</li>
                                        <li>Miocardiopatías</li>
                                        <li>Enfermedad vascular periférica</li>
                                    </ul>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Estas enfermedades representan la principal causa de muerte en México y requieren atención prehospitalaria oportuna. Factores de riesgo frecuentes incluyen obesidad, diabetes, tabaquismo, sedentarismo y dislipidemia.
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía y Fisiología Cardiovascular</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El sistema cardiovascular está compuesto por el corazón y los vasos sanguíneos. El corazón es una bomba muscular dividida en cuatro cámaras (dos aurículas y dos ventrículos) que impulsa la sangre a través de la circulación pulmonar y sistémica.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                                        <li>El nodo sinoauricular (SA) inicia el impulso eléctrico.</li>
                                        <li>El nodo auriculoventricular (AV) regula el paso a los ventrículos.</li>
                                        <li>El sistema de His-Purkinje distribuye el impulso para la contracción ventricular.</li>
                                    </ul>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        La perfusión tisular depende de un gasto cardíaco adecuado y de la integridad vascular. Cualquier alteración puede llevar a hipoperfusión y shock.
                                    </p>
                                </div>
                            </div>
                        )}
                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación y Manejo Inicial</h2>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li>Evaluación de la seguridad de la escena y uso de EPP.</li>
                                        <li>Valoración primaria: respuesta, respiración y pulso.</li>
                                        <li>Activación del SEM y solicitud de DEA.</li>
                                        <li>Inicio inmediato de RCP de alta calidad si no hay pulso.</li>
                                        <li>Desfibrilación precoz si está indicado.</li>
                                        <li>Soporte vital avanzado según protocolos locales.</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Algoritmo básico de RCP y DEA (adulto)</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Comprobar respuesta y respiración.</li>
                                        <li>Llamar al SEM y pedir DEA.</li>
                                        <li>Iniciar compresiones torácicas (100-120/min, profundidad 5-6 cm).</li>
                                        <li>Ventilar 2 veces cada 30 compresiones si hay personal capacitado.</li>
                                        <li>Aplicar DEA en cuanto esté disponible y seguir instrucciones.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Caso Clínico</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Paciente masculino de 55 años, se desploma súbitamente durante una reunión. No responde, no respira y no tiene pulso. ¿Qué acciones debe realizar el primer respondiente?
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700 mt-2">
                                        <li>Verificar seguridad de la escena.</li>
                                        <li>Solicitar ayuda y pedir un DEA.</li>
                                        <li>Iniciar RCP de alta calidad.</li>
                                        <li>Aplicar DEA en cuanto esté disponible.</li>
                                        <li>Continuar hasta llegada de SEM o recuperación del paciente.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Preguntas frecuentes (FAQ)</h2>
                                    {faqData.map((faq, idx) => (
                                        <Disclosure key={idx}>
                                            {({ open }) => (
                                                <div className="border rounded-lg overflow-hidden">
                                                    <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                            </div>
                        )}
                        {activeTab === 'diseases' && (
                            <div>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Enfermedades cardiovasculares más comunes en México (2025)</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-100">
                                            <tr>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Enfermedad</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Descripción</th>
                                                <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Medicamento más común</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Enfermedad isquémica del corazón</td>
                                                <td className="px-4 py-2">Incluye infarto agudo al miocardio y angina de pecho. Oclusión de arterias coronarias.</td>
                                                <td className="px-4 py-2">AAS (ácido acetilsalicílico)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Hipertensión arterial sistémica</td>
                                                <td className="px-4 py-2">Presión arterial elevada de forma crónica.</td>
                                                <td className="px-4 py-2">IECA (ej. enalapril)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Insuficiencia cardíaca</td>
                                                <td className="px-4 py-2">Incapacidad del corazón para bombear sangre suficiente.</td>
                                                <td className="px-4 py-2">Furosemida</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Arritmias cardíacas</td>
                                                <td className="px-4 py-2">Alteraciones en el ritmo cardíaco (fibrilación auricular, taquicardias, bradicardias).</td>
                                                <td className="px-4 py-2">Amiodarona</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Enfermedad cerebrovascular</td>
                                                <td className="px-4 py-2">Accidente vascular cerebral (isquémico o hemorrágico).</td>
                                                <td className="px-4 py-2">Alteplasa (en casos seleccionados de EVC isquémico)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Cardiopatía hipertensiva</td>
                                                <td className="px-4 py-2">Daño cardíaco secundario a hipertensión crónica.</td>
                                                <td className="px-4 py-2">IECA (ej. enalapril)</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Miocardiopatías</td>
                                                <td className="px-4 py-2">Enfermedades del músculo cardíaco (dilatada, hipertrófica, restrictiva).</td>
                                                <td className="px-4 py-2">Betabloqueadores</td>
                                            </tr>
                                            <tr>
                                                <td className="px-4 py-2 font-medium">Enfermedad vascular periférica</td>
                                                <td className="px-4 py-2">Afectación de arterias periféricas, principalmente en extremidades.</td>
                                                <td className="px-4 py-2">Clopidogrel</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <p className="text-gray-700 mt-4 leading-relaxed">
                                    Estas enfermedades representan la principal causa de muerte en México y requieren atención prehospitalaria oportuna. Factores de riesgo frecuentes incluyen obesidad, diabetes, tabaquismo, sedentarismo y dislipidemia.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* FAQ Section */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-products/cardiac-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias cardíacas</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
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
    );
}

