import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MediTerms.questions.ts";
import {FaBookMedical} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function MedicTerms(){
    const [activeTab, setActiveTab] = useState<'overview' | 'roots' | 'abbreviations' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaBookMedical className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Terminología Médica</h1>
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
                            to={`${AllRoutes.MEDIC_TERMS}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1zEIo1hIbfVHgW14HMe1GoLSouQqf-qqE/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://www.ems1.com/ems-education/"
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
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Terminología Médica</h3>
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
                                onClick={() => setActiveTab('roots')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'roots' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Raíces, Prefijos y Sufijos
                            </button>
                            <button
                                onClick={() => setActiveTab('abbreviations')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'abbreviations' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Abreviaturas y Siglas
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es la terminología médica?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Es el lenguaje universal de la medicina, basado en raíces griegas y latinas, que permite describir de forma precisa enfermedades, procedimientos, anatomía y tratamientos. Su dominio es esencial para la comunicación efectiva y la documentación clínica.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia en la atención prehospitalaria</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Facilita la comunicación entre profesionales de la salud.</li>
                                        <li>Permite documentar hallazgos y procedimientos de manera clara y estandarizada.</li>
                                        <li>Reduce errores y mejora la seguridad del paciente.</li>
                                        <li>Es clave para el reporte verbal y escrito en el SEM.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estructura de los términos médicos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Raíz:</strong> Parte principal que indica el órgano, sistema o estructura.</li>
                                        <li><strong>Prefijo:</strong> Se antepone para modificar el significado (ej. <em>taqui-</em> = rápido).</li>
                                        <li><strong>Sufijo:</strong> Se añade al final para indicar condición, procedimiento o especialidad (ej. <em>-itis</em> = inflamación).</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'roots' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Raíces, prefijos y sufijos más comunes</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Elemento</th>
                                                    <th className="py-2 px-4 border">Significado</th>
                                                    <th className="py-2 px-4 border">Ejemplo</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">cardi-</td>
                                                    <td className="py-2 px-4 border">Corazón</td>
                                                    <td className="py-2 px-4 border">Cardiopatía</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">neuro-</td>
                                                    <td className="py-2 px-4 border">Sistema nervioso</td>
                                                    <td className="py-2 px-4 border">Neurología</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">hemo-/hema-</td>
                                                    <td className="py-2 px-4 border">Sangre</td>
                                                    <td className="py-2 px-4 border">Hemorragia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">derm-</td>
                                                    <td className="py-2 px-4 border">Piel</td>
                                                    <td className="py-2 px-4 border">Dermatitis</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">-itis</td>
                                                    <td className="py-2 px-4 border">Inflamación</td>
                                                    <td className="py-2 px-4 border">Gastritis</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">-algia</td>
                                                    <td className="py-2 px-4 border">Dolor</td>
                                                    <td className="py-2 px-4 border">Neuralgia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">hiper-</td>
                                                    <td className="py-2 px-4 border">Exceso</td>
                                                    <td className="py-2 px-4 border">Hipertensión</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">hipo-</td>
                                                    <td className="py-2 px-4 border">Déficit</td>
                                                    <td className="py-2 px-4 border">Hipoglucemia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">bradi-</td>
                                                    <td className="py-2 px-4 border">Lento</td>
                                                    <td className="py-2 px-4 border">Bradicardia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">taqui-</td>
                                                    <td className="py-2 px-4 border">Rápido</td>
                                                    <td className="py-2 px-4 border">Taquicardia</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cómo construir y analizar términos médicos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Identifica la raíz, prefijo y sufijo para comprender el significado.</li>
                                        <li>Ejemplo: <strong>Polineuropatía</strong> = poli- (muchos) + neuro- (nervio) + -patía (enfermedad).</li>
                                        <li>Ejemplo: <strong>Gastroenteritis</strong> = gastro- (estómago) + enter- (intestino) + -itis (inflamación).</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'abbreviations' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Abreviaturas y siglas más usadas</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Abreviatura</th>
                                                    <th className="py-2 px-4 border">Significado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">TA</td>
                                                    <td className="py-2 px-4 border">Tensión arterial</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">FC</td>
                                                    <td className="py-2 px-4 border">Frecuencia cardiaca</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">FR</td>
                                                    <td className="py-2 px-4 border">Frecuencia respiratoria</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">SpO₂</td>
                                                    <td className="py-2 px-4 border">Saturación de oxígeno</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">RCP</td>
                                                    <td className="py-2 px-4 border">Reanimación cardiopulmonar</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">IAM</td>
                                                    <td className="py-2 px-4 border">Infarto agudo de miocardio</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">EPOC</td>
                                                    <td className="py-2 px-4 border">Enfermedad pulmonar obstructiva crónica</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">PCR</td>
                                                    <td className="py-2 px-4 border">Paro cardiorrespiratorio</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">SVB</td>
                                                    <td className="py-2 px-4 border">Soporte vital básico</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">SVA</td>
                                                    <td className="py-2 px-4 border">Soporte vital avanzado</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consejos para el uso correcto de abreviaturas</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Utiliza solo abreviaturas reconocidas y estandarizadas.</li>
                                        <li>Evita abreviaturas ambiguas o poco claras.</li>
                                        <li>En caso de duda, escribe el término completo.</li>
                                        <li>Consulta la lista oficial de tu institución o la AAOS.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos y ejercicios</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Ejercicio 1: Analiza el término</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Analiza el término <strong>bradicardia</strong> y explica su significado.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>bradi- = lento</li>
                                            <li>-cardia = corazón/latido</li>
                                            <li><strong>Bradicardia:</strong> Frecuencia cardiaca lenta</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Ejercicio 2: Construye un término</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Construye un término médico que signifique "inflamación del estómago y del intestino".
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>gastro- = estómago</li>
                                            <li>enter- = intestino</li>
                                            <li>-itis = inflamación</li>
                                            <li><strong>Gastroenteritis</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Ejercicio 3: Abreviaturas en contexto</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un paciente presenta PCR y requiere SVB inmediato. Explica el significado de estas siglas y su importancia.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>PCR = Paro cardiorrespiratorio</li>
                                            <li>SVB = Soporte vital básico</li>
                                            <li>La identificación rápida de PCR y la aplicación de SVB aumentan la supervivencia.</li>
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
                                    <li>Tablas y glosarios médicos oficiales de la SSA y la Cruz Roja Mexicana.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Educación y glosarios médicos</a></li>
                                    <li><a href="https://www.jems.com/ems-insider/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Educación y terminología</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Medscape - Diccionario médico y calculadoras</li>
                                    <li>Tabers Medical Dictionary</li>
                                    <li>Paramedicine - Glosarios y guías clínicas</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

