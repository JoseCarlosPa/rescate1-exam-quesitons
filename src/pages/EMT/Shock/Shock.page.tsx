import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Shock.questions.ts";
import {TbMedicalCrossCircle} from "react-icons/tb";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf} from "react-icons/bs";
import {useState} from "react";

export default function Shock(){
    const [activeTab, setActiveTab] = useState<'overview' | 'types' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <TbMedicalCrossCircle className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Shock en Atención Prehospitalaria</h1>
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
                            to="/shock/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1cshonwi1NXgFzcxxmJYUUDFBMNabtgjg/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://www.jems.com/patient-care/shock/"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos JEMS</p>
                        </a>
                        <a href="https://drive.google.com/file/d/13sYGkmyQRfZ3N-Au6yqZFdG-Aigmg4gl/view?usp=drive_link"
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
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Repasa tus conocimientos sobre shock</h3>
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
                                onClick={() => setActiveTab('types')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'types'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Tipos de Shock
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
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el Shock?</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>El shock es un estado de perfusión inadecuada de los tejidos y órganos del cuerpo.</li>
                                    <li>Resulta en falta de oxígeno y nutrientes esenciales, llevando a disfunción celular y muerte si no se trata a tiempo.</li>
                                </ul>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y Síntomas de Shock</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Piel fría, pálida y sudorosa.</li>
                                    <li>Taquicardia.</li>
                                    <li>Hipotensión.</li>
                                    <li>Estado mental alterado (confusión, ansiedad, pérdida de conciencia).</li>
                                    <li>Respiración rápida y superficial.</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'types' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos Principales de Shock</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-orange-700">Shock hipovolémico</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Pérdida de volumen sanguíneo o líquidos (hemorragia, deshidratación severa)</li>
                                            <li>Signos: piel fría, taquicardia, hipotensión, llenado capilar lento</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Shock cardiogénico</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Fallo de la bomba cardiaca (infarto, arritmias, insuficiencia cardiaca)</li>
                                            <li>Signos: disnea, estertores, hipotensión, piel fría</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-green-700">Shock obstructivo</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Obstrucción al flujo sanguíneo (neumotórax a tensión, taponamiento cardiaco, embolia pulmonar)</li>
                                            <li>Signos: ingurgitación yugular, hipotensión, disnea súbita</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">Shock distributivo</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Alteración en la distribución del flujo (anafilaxia, sépsis, shock neurogénico)</li>
                                            <li>Signos: piel caliente (al inicio), hipotensión, taquicardia, eritema</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo Prehospitalario Básico del Shock</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Controlar hemorragias externas de inmediato.</li>
                                    <li>Administrar oxígeno suplementario si está indicado.</li>
                                    <li>Colocar al paciente en posición supina si es posible (excepto contraindicaciones).</li>
                                    <li>Mantener la temperatura corporal adecuada (evitar la hipotermia).</li>
                                    <li>Transportar rápidamente a un centro médico adecuado.</li>
                                </ul>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios fisiológicos clave</h2>
                                <div className="space-y-4">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-orange-700">Principio de Fick</h3>
                                        <p className="text-gray-700 mb-2">El principio de Fick establece que la entrega de oxígeno a los tejidos depende de:</p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>El gasto cardiaco (volumen de sangre bombeado por el corazón por minuto)</li>
                                            <li>La concentración de oxígeno en la sangre arterial</li>
                                        </ul>
                                        <p className="text-gray-700 mt-2">Fórmula: <span className="font-mono">VO₂ = GC × (CaO₂ - CvO₂)</span>, donde VO₂ es el consumo de oxígeno, GC el gasto cardiaco, CaO₂ el contenido arterial y CvO₂ el contenido venoso de oxígeno.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Presión Arterial Media (PAM)</h3>
                                        <p className="text-gray-700 mb-2">La PAM es un parámetro clave para valorar la perfusión tisular.</p>
                                        <p className="text-gray-700">Fórmula: <span className="font-mono">PAM = (PAS + 2 × PAD) / 3</span></p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                                            <li>PAS: Presión arterial sistólica</li>
                                            <li>PAD: Presión arterial diastólica</li>
                                            <li>Valor normal: 70-105 mmHg</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-green-700">Presión de pulso</h3>
                                        <p className="text-gray-700 mb-2">Diferencia entre la presión sistólica y diastólica.</p>
                                        <p className="text-gray-700">Fórmula: <span className="font-mono">Presión de pulso = PAS - PAD</span></p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                                            <li>Normal: 30-50 mmHg</li>
                                            <li>Disminuida en shock hipovolémico</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">Índice de choque</h3>
                                        <p className="text-gray-700 mb-2">Relación entre la frecuencia cardiaca y la presión arterial sistólica.</p>
                                        <p className="text-gray-700">Fórmula: <span className="font-mono">Índice de choque = FC / PAS</span></p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                                            <li>Normal: 0.5-0.7</li>
                                            <li>Mayor a 0.9 indica shock</li>
                                        </ul>
                                    </div>
                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-purple-700">Índice de choque modificado</h3>
                                        <p className="text-gray-700 mb-2">Utiliza la presión arterial media en vez de la sistólica.</p>
                                        <p className="text-gray-700">Fórmula: <span className="font-mono">Índice de choque modificado = FC / PAM</span></p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2">
                                            <li>Más sensible para detectar shock en etapas tempranas</li>
                                            <li>Valores normales: 0.5-0.7</li>
                                        </ul>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tabla de parámetros útiles</h2>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Parámetro</th>
                                                <th className="py-2 px-4 border">Adultos</th>
                                                <th className="py-2 px-4 border">Niños</th>
                                                <th className="py-2 px-4 border">Lactantes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Frecuencia cardiaca</td>
                                                <td className="py-2 px-4 border">60-100/min</td>
                                                <td className="py-2 px-4 border">80-120/min</td>
                                                <td className="py-2 px-4 border">100-160/min</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Presión arterial sistólica</td>
                                                <td className="py-2 px-4 border"> mayor 90 mmHg</td>
                                                <td className="py-2 px-4 border"> mayor 80 mmHg</td>
                                                <td className="py-2 px-4 border"> mayor 70 mmHg</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Llenado capilar</td>
                                                <td className="py-2 px-4 border"> menor 2 seg</td>
                                                <td className="py-2 px-4 border">menor 2 seg</td>
                                                <td className="py-2 px-4 border">menor 2 seg</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Shock hipovolémico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 30 años con herida cortante en muslo, sangrado activo, piel fría y sudorosa.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>TA 80/50 mmHg, FC 130/min, FR 28/min</li>
                                            <li>Piel pálida, sudorosa, llenado capilar mayor 2 seg</li>
                                            <li>Confusión, ansiedad</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control de hemorragia con presión directa y torniquete si es necesario</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Colocar en posición supina</li>
                                            <li>Evitar hipotermia</li>
                                            <li>Traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Shock anafiláctico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 25 años tras picadura de abeja, dificultad respiratoria, eritema y edema facial.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>TA 85/60 mmHg, FC 120/min, FR 30/min</li>
                                            <li>Piel caliente, eritema, urticaria</li>
                                            <li>Edema facial, estridor</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Administrar epinefrina IM</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización y traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Shock séptico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 70 años con fiebre, confusión, TA 90/60 mmHg, piel caliente y seca.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>TA 90/60 mmHg, FC 110/min, FR 24/min</li>
                                            <li>Piel caliente, seca</li>
                                            <li>Confusión, fiebre</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización y traslado urgente</li>
                                            <li>Evitar hipotermia</li>
                                        </ol>
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
                                    <li><a href="https://www.ems1.com/shock/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre shock</a></li>
                                    <li><a href="https://www.jems.com/patient-care/shock/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de shock</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Videos educativos</a></li>
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

