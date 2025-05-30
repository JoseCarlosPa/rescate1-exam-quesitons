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
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
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
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias cardiovasculares?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Son afecciones críticas que comprometen el sistema cardiovascular, como el infarto agudo al miocardio, arritmias graves, paro cardíaco, insuficiencia cardíaca y taponamiento cardíaco. Estas emergencias requieren una evaluación y tratamiento inmediato para preservar la vida y reducir el daño al miocardio.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dolor torácico opresivo, irradiado o persistente</li>
                                            <li>Disnea (dificultad para respirar)</li>
                                            <li>Palpitaciones o pérdida súbita del pulso</li>
                                            <li>Sudoración profusa, náuseas o mareo</li>
                                            <li>Cambios en el estado de conciencia</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Coloración azulada (cianosis) o palidez</li>
                                            <li>Ansiedad o sensación de muerte inminente</li>
                                            <li>Edema en extremidades</li>
                                            <li>Taquicardia o bradicardia</li>
                                            <li>Presión arterial anormal</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia de la intervención prehospitalaria</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Reconocer signos tempranos de infarto o paro cardíaco puede salvar vidas.</li>
                                        <li>Las compresiones torácicas de alta calidad aumentan las posibilidades de supervivencia.</li>
                                        <li>El uso rápido de un DEA (desfibrilador externo automático) es crucial en ritmos desfibrilables.</li>
                                        <li>El monitoreo continuo y el traslado oportuno mejoran los resultados clínicos.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del sistema cardiovascular</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El sistema cardiovascular está compuesto por el corazón y los vasos sanguíneos (arterias, venas y capilares). El corazón es una bomba muscular dividida en cuatro cavidades: dos aurículas y dos ventrículos.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Corazón:</strong> Aurícula derecha, ventrículo derecho, aurícula izquierda, ventrículo izquierdo</li>
                                            <li><strong>Vasos sanguíneos:</strong> Arterias (llevan sangre del corazón a los tejidos), venas (devuelven sangre al corazón), capilares (intercambio de gases y nutrientes)</li>
                                            <li><strong>Válvulas cardíacas:</strong> Tricúspide, pulmonar, mitral y aórtica</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="/aaos.jpg"
                                            alt="Anatomía del sistema cardiovascular"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología básica</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Ciclo cardíaco</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sístole: contracción y vaciado de los ventrículos</li>
                                                <li>Diástole: relajación y llenado de los ventrículos</li>
                                                <li>El gasto cardíaco depende de la frecuencia y el volumen sistólico</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Conducción eléctrica</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Nódulo SA (marcapasos natural)</li>
                                                <li>Nódulo AV</li>
                                                <li>Haz de His y fibras de Purkinje</li>
                                                <li>Permite la contracción coordinada del corazón</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Valores normales y evaluación</h2>
                                    <div className="overflow-x-auto">
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
                                                    <td className="py-2 px-4 border font-medium">Frecuencia cardíaca</td>
                                                    <td className="py-2 px-4 border">60-100/min</td>
                                                    <td className="py-2 px-4 border">80-120/min</td>
                                                    <td className="py-2 px-4 border">100-160/min</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Presión arterial sistólica</td>
                                                    <td className="py-2 px-4 border">90-140 mmHg</td>
                                                    <td className="py-2 px-4 border">80-110 mmHg</td>
                                                    <td className="py-2 px-4 border">70-100 mmHg</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Presión arterial diastólica</td>
                                                    <td className="py-2 px-4 border">60-90 mmHg</td>
                                                    <td className="py-2 px-4 border">50-80 mmHg</td>
                                                    <td className="py-2 px-4 border">40-60 mmHg</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo inicial prehospitalario</h2>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li>Evaluar ABCDE y signos vitales</li>
                                        <li>Administrar oxígeno si SpO₂ &lt;94%</li>
                                        <li>Monitorización cardíaca si está disponible</li>
                                        <li>Identificar y tratar arritmias o paro cardíaco</li>
                                        <li>Preparar para traslado urgente</li>
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico por patologías</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Infarto agudo al miocardio (IAM)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Oxígeno si SpO₂ &lt;94%</li>
                                                <li>Aspirina (160-325 mg, masticable, si no hay contraindicación)</li>
                                                <li>Monitoreo y traslado urgente</li>
                                                <li>Considerar nitroglicerina sublingual si está indicado</li>
                                                <li>Alerta a hospital receptor</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Arritmias</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Monitorización cardíaca</li>
                                                <li>Identificar bradiarritmias o taquiarritmias</li>
                                                <li>Tratar según protocolo local (DEA, medicamentos, RCP)</li>
                                                <li>Preparar para traslado</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Insuficiencia cardíaca</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Oxígeno a alto flujo</li>
                                                <li>Posición semisentada</li>
                                                <li>Monitorización y traslado urgente</li>
                                                <li>Considerar CPAP si está disponible</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Paro cardíaco</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Iniciar RCP de alta calidad</li>
                                                <li>Desfibrilación precoz con DEA si está indicado</li>
                                                <li>Ventilación con BVM</li>
                                                <li>Relevo de compresiones cada 2 minutos</li>
                                                <li>Traslado inmediato tras retorno de circulación</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Dolor torácico típico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 58 años, dolor torácico opresivo irradiado a brazo izquierdo, sudoración y náusea.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Abordaje correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluar ABCDE y signos vitales</li>
                                            <li>Administrar oxígeno si SpO₂ &lt;94%</li>
                                            <li>Aspirina masticable</li>
                                            <li>Monitorización y traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Paro cardíaco presenciado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 65 años colapsa súbitamente, no responde, no respira y no tiene pulso.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Abordaje correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Iniciar RCP de alta calidad</li>
                                            <li>Solicitar y usar DEA</li>
                                            <li>Ventilación con BVM</li>
                                            <li>Relevo de compresiones cada 2 minutos</li>
                                            <li>Traslado inmediato tras retorno de circulación</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Insuficiencia cardíaca aguda</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 72 años, disnea súbita, ortopnea, estertores pulmonares y edema en miembros inferiores.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Abordaje correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición semisentada</li>
                                            <li>Oxígeno a alto flujo</li>
                                            <li>Monitorización y traslado urgente</li>
                                            <li>Considerar CPAP si está disponible</li>
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

