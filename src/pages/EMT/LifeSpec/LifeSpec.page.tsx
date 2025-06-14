import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./LifeSpec.questions.ts";
import {FaBaby} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function LifeSpec(){
    const [activeTab, setActiveTab] = useState<'overview' | 'vitals' | 'prehospital' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaBaby className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Desarrollo y esperanza de vida</h1>
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to={`${AllRoutes.LIFE_SPEC}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1Jw5ONtWNz3ajHTwdxvTE3fS8JanopiVy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://drive.google.com/file/d/1ERUNCs4ZsMiCDHeYwuoS6SWJOPpY6iW3/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Desarrollo y esperanza de vida</h3>
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
                                Etapas del Desarrollo
                            </button>
                            <button
                                onClick={() => setActiveTab('vitals')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'vitals' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Constantes y Esperanza de Vida
                            </button>
                            <button
                                onClick={() => setActiveTab('prehospital')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'prehospital' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Atención Prehospitalaria
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
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Etapas del Desarrollo Humano</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Neonatos (0-1 mes):</strong> Alta dependencia, reflejos primitivos, respiración nasal.</li>
                                        <li><strong>Lactantes (1 mes - 1 año):</strong> Desarrollo rápido de habilidades motoras y sensoriales.</li>
                                        <li><strong>Niños pequeños (1-3 años):</strong> Desarrollo del lenguaje y autonomía inicial.</li>
                                        <li><strong>Niños en edad preescolar (3-6 años):</strong> Crecimiento emocional y social significativo.</li>
                                        <li><strong>Niños escolares (6-12 años):</strong> Mayor coordinación, socialización y razonamiento lógico.</li>
                                        <li><strong>Adolescentes (12-18 años):</strong> Pubertad, identidad personal y pensamiento abstracto.</li>
                                        <li><strong>Adultos jóvenes (19-40 años):</strong> Máxima condición física, formación de familia y carrera.</li>
                                        <li><strong>Adultos de mediana edad (41-60 años):</strong> Disminución gradual de capacidades físicas.</li>
                                        <li><strong>Adultos mayores (mayor 60 años):</strong> Disminución marcada de la función fisiológica, importancia del apoyo social.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'vitals' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Constantes fisiológicas y esperanza de vida</h2>
                                    <div className="overflow-x-auto mb-4">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Edad</th>
                                                <th className="py-2 px-4 border">FC (lat/min)</th>
                                                <th className="py-2 px-4 border">FR (resp/min)</th>
                                                <th className="py-2 px-4 border">PA sistólica (mmHg)</th>
                                                <th className="py-2 px-4 border">Temp (°C)</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border">Neonato (0 a 1 mes)</td>
                                                <td className="py-2 px-4 border">90-180</td>
                                                <td className="py-2 px-4 border">30-60</td>
                                                <td className="py-2 px-4 border">50-70</td>
                                                <td className="py-2 px-4 border">37-38</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Lactante (1mes a 1 año)</td>
                                                <td className="py-2 px-4 border">100-160</td>
                                                <td className="py-2 px-4 border">25-50</td>
                                                <td className="py-2 px-4 border">70-95</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Niño pequeño (1 a 3 años) </td>
                                                <td className="py-2 px-4 border">90-150</td>
                                                <td className="py-2 px-4 border">20-30</td>
                                                <td className="py-2 px-4 border">80-100</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">PreEscolar (3 a 6 años)</td>
                                                <td className="py-2 px-4 border">80-140</td>
                                                <td className="py-2 px-4 border">20-25</td>
                                                <td className="py-2 px-4 border">80-100</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Escolar (6 a 12 años)</td>
                                                <td className="py-2 px-4 border">70-120</td>
                                                <td className="py-2 px-4 border">15-20</td>
                                                <td className="py-2 px-4 border">80-110</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Adolescente (12 a 18 años)</td>
                                                <td className="py-2 px-4 border">60-100</td>
                                                <td className="py-2 px-4 border">12-20</td>
                                                <td className="py-2 px-4 border">90-110</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Adulto Joven (19 a 40 años)</td>
                                                <td className="py-2 px-4 border">60-100</td>
                                                <td className="py-2 px-4 border">12-20</td>
                                                <td className="py-2 px-4 border">90-140</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Adulto de edad media(41 a 60 años)</td>
                                                <td className="py-2 px-4 border">60-100</td>
                                                <td className="py-2 px-4 border">12-20</td>
                                                <td className="py-2 px-4 border">90-140</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Adulto mayor (mayor a 61 años)</td>
                                                <td className="py-2 px-4 border">60-100</td>
                                                <td className="py-2 px-4 border">12-20</td>
                                                <td className="py-2 px-4 border">90-140</td>
                                                <td className="py-2 px-4 border">36-37.5</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>La frecuencia respiratoria y cardiaca disminuye progresivamente con la edad.</li>
                                        <li>La presión arterial tiende a aumentar a medida que la persona envejece.</li>
                                        <li>El sistema inmunológico madura en la infancia y declina en la vejez.</li>
                                        <li>La esperanza de vida promedio en muchos países supera los 70 años.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'prehospital' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones en Atención Prehospitalaria</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>En neonatos y lactantes, la vía aérea es más pequeña y flexible: se requiere un manejo delicado.</li>
                                        <li>En niños, la cabeza es proporcionalmente más grande, aumentando el riesgo de trauma craneal.</li>
                                        <li>En adultos mayores, considerar comorbilidades, fragilidad ósea y comunicación clara.</li>
                                        <li>La evaluación y el tratamiento deben adaptarse a la etapa de desarrollo y condición fisiológica.</li>
                                        <li>La comunicación con familiares y cuidadores es clave en pediatría y geriatría.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos y ejercicios</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Ejercicio 1: Identifica la etapa</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un paciente de 2 años acude por fiebre y dificultad respiratoria. ¿A qué etapa del desarrollo pertenece y qué consideraciones especiales debes tener?
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Niño pequeño (1-3 años)</li>
                                            <li>Vía aérea pequeña, riesgo de deshidratación, comunicación limitada</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Ejercicio 2: Valores normales</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        ¿Cuál es la frecuencia cardiaca y respiratoria normal en un lactante?
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>FC: 100-160 lat/min</li>
                                            <li>FR: 30-53 resp/min</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Ejercicio 3: Adulto mayor</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un adulto mayor con antecedentes de hipertensión y diabetes sufre una caída en casa. ¿Qué factores debes considerar en la atención prehospitalaria?
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Fragilidad ósea, riesgo de fracturas</li>
                                            <li>Comorbilidades y polifarmacia</li>
                                            <li>Evaluar estado mental y apoyo social</li>
                                        </ul>
                                    </div>
                                </div>
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
                                    <li>Nelson, W. (2020). <em>Pediatría Esencial</em>.</li>
                                    <li>Manual de Geriatría. (2022). SSA México.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Educación y desarrollo humano</a></li>
                                    <li><a href="https://www.jems.com/ems-insider/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Educación y pediatría</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Videos educativos</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Pedi STAT - Cálculos pediátricos</li>
                                    <li>Geriatrics At Your Fingertips</li>
                                    <li>Medscape - Referencias médicas</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

