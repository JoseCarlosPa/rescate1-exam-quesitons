import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./HumanBody.questions.ts";
import {IoIosBody} from "react-icons/io";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function HumanBody() {
    const [activeTab, setActiveTab] = useState<'overview' | 'systems' | 'anatomy' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">El Cuerpo Humano</h1>
                        <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
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
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
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
                        <button
                            onClick={() => setShowQuickQuiz(!showQuickQuiz)}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <TbNotebook className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Quiz Rápido</p>
                        </button>
                        <a href="https://www.ems1.com/ems-education/"
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
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el cuerpo humano?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El cuerpo humano es una estructura compleja formada por células, tejidos, órganos y sistemas que trabajan en conjunto para mantener la vida y la homeostasis. Su estudio es fundamental para la atención prehospitalaria, permitiendo identificar alteraciones y actuar de forma rápida y eficaz.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Niveles de organización</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Célula:</strong> Unidad básica de la vida.</li>
                                        <li><strong>Tejido:</strong> Conjunto de células con función similar.</li>
                                        <li><strong>Órgano:</strong> Estructura formada por varios tejidos.</li>
                                        <li><strong>Sistema:</strong> Conjunto de órganos que cumplen una función.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Planos y posiciones anatómicas</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Posición anatómica:</strong> Persona de pie, vista al frente, palmas hacia adelante.</li>
                                        <li><strong>Planos:</strong> Sagital (izq-der), frontal (ant-post), transversal (sup-inf).</li>
                                        <li><strong>Direcciones:</strong> Superior, inferior, medial, lateral, proximal, distal, anterior, posterior.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'systems' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistemas principales del cuerpo humano</h2>
                                <ul className="space-y-4">
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Circulatorio</h3>
                                        <p>Compuesto por el corazón, la sangre y los vasos sanguíneos. Su función principal es transportar oxígeno, nutrientes, hormonas y desechos a través del cuerpo.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Respiratorio</h3>
                                        <p>Compuesto por los pulmones y las vías respiratorias. Su principal función es intercambiar oxígeno y dióxido de carbono entre el cuerpo y el aire.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Nervioso</h3>
                                        <p>Incluye el cerebro, la médula espinal y los nervios. Controla y coordina las funciones del cuerpo, además de permitir la percepción sensorial y la respuesta a estímulos.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Muscular</h3>
                                        <p>Comprende los músculos esqueléticos, lisos y cardíacos. Es responsable del movimiento y la estabilidad corporal.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Esquelético</h3>
                                        <p>Está formado por huesos y articulaciones. Proporciona soporte, protección y movimiento al cuerpo.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Digestivo</h3>
                                        <p>Incluye órganos como el estómago, los intestinos y el hígado. Su función es descomponer los alimentos y absorber los nutrientes necesarios para el cuerpo.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Endocrino</h3>
                                        <p>Se compone de glándulas que producen hormonas. Regula procesos como el metabolismo, el crecimiento y la función reproductiva.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Urinario</h3>
                                        <p>Incluye los riñones, la vejiga y los conductos urinarios. Su función es filtrar los desechos del cuerpo y mantener el equilibrio hídrico y electrolítico.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Inmunológico</h3>
                                        <p>Protege al cuerpo contra infecciones y enfermedades a través de una red de células y órganos que identifican y destruyen patógenos.</p>
                                    </li>
                                    <li>
                                        <h3 className="text-lg font-bold">Sistema Tegumentario</h3>
                                        <p>Formado por la piel, cabello y uñas, protege al cuerpo de los agentes externos y regula la temperatura.</p>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía y fisiología básica</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-lg mb-2 text-gray-800">Órganos vitales</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Cerebro:</strong> Controla funciones vitales y cognitivas.</li>
                                            <li><strong>Corazón:</strong> Bombea sangre a todo el cuerpo.</li>
                                            <li><strong>Pulmones:</strong> Intercambio de oxígeno y CO₂.</li>
                                            <li><strong>Riñones:</strong> Filtran desechos y regulan líquidos.</li>
                                            <li><strong>Hígado:</strong> Metaboliza sustancias y almacena energía.</li>
                                        </ul>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img
                                            src="/src/assets/netter.webp"
                                            alt="Anatomía básica"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg mb-2 text-gray-800">Funciones fisiológicas clave</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Homeostasis:</strong> Mantenimiento del equilibrio interno.</li>
                                        <li><strong>Respiración:</strong> Proceso de intercambio gaseoso.</li>
                                        <li><strong>Circulación:</strong> Transporte de sangre y nutrientes.</li>
                                        <li><strong>Excreción:</strong> Eliminación de desechos.</li>
                                        <li><strong>Regulación térmica:</strong> Control de la temperatura corporal.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg mb-2 text-gray-800">Valores fisiológicos normales</h3>
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
                                                <td className="py-2 px-4 border font-medium">Frecuencia cardiaca</td>
                                                <td className="py-2 px-4 border">60-100/min</td>
                                                <td className="py-2 px-4 border">80-120/min</td>
                                                <td className="py-2 px-4 border">100-160/min</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Frecuencia respiratoria</td>
                                                <td className="py-2 px-4 border">12-20/min</td>
                                                <td className="py-2 px-4 border">15-30/min</td>
                                                <td className="py-2 px-4 border">25-50/min</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Presión arterial sistólica</td>
                                                <td className="py-2 px-4 border">90-140 mmHg</td>
                                                <td className="py-2 px-4 border">80-110 mmHg</td>
                                                <td className="py-2 px-4 border">70-100 mmHg</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Temperatura</td>
                                                <td className="py-2 px-4 border">36-37.5°C</td>
                                                <td className="py-2 px-4 border">36-37.5°C</td>
                                                <td className="py-2 px-4 border">36-37.5°C</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos y ejercicios</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Ejercicio 1: Identifica el sistema</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un paciente presenta dificultad para respirar y cianosis. ¿Qué sistema está principalmente afectado?
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Sistema respiratorio</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Ejercicio 2: Relaciona órganos y función</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Relaciona: Corazón, riñón, pulmón, hígado con su función principal.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Corazón: Bombeo de sangre</li>
                                            <li>Riñón: Filtrado de desechos</li>
                                            <li>Pulmón: Intercambio gaseoso</li>
                                            <li>Hígado: Metabolismo y detoxificación</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Ejercicio 3: Valores normales</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        ¿Cuál es la frecuencia cardiaca normal en un adulto sano en reposo?
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">Respuesta:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>60-100 latidos por minuto</li>
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
                                    <li>Netter, F. (2018). <em>Anatomía Humana Atlas Ilustrado</em>.</li>
                                    <li>Guyton & Hall. (2021). <em>Tratado de Fisiología Médica</em>.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-education/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Educación y anatomía</a></li>
                                    <li><a href="https://www.visiblebody.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Visible Body - Atlas anatómico interactivo</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Videos educativos</a></li>
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
    );
}

