import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./AmbientalEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaFireAlt} from "react-icons/fa";

export default function AmbientalEmergencies() {
    const [activeTab, setActiveTab] = useState<'overview' | 'types' | 'management' | 'cases'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaFireAlt className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Ambientales</h1>
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
                            to={`${AllRoutes.AMBIENTAL_EMERGENCIES}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1utfOyujyHM2iEtHtRh-ySFS6dIy9zk-M/view?usp=drive_link"
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
                                onClick={() => setActiveTab('types')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'types'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Tipos de Emergencias
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación y Manejo
                            </button>
                            <button
                                onClick={() => setActiveTab('cases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'cases'
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias ambientales?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias ambientales son situaciones en las que factores externos como el clima, animales, plantas o sustancias tóxicas ponen en peligro la vida o salud de una persona. Incluyen desde exposición al calor o frío extremos, ahogamiento, hasta mordeduras, picaduras y envenenamientos ambientales.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Son frecuentes en el entorno prehospitalario y requieren una evaluación y manejo rápido para prevenir complicaciones graves o la muerte.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia y epidemiología</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias ambientales representan una causa significativa de morbilidad y mortalidad a nivel mundial. Los grupos más vulnerables son niños, adultos mayores y personas con enfermedades crónicas o exposición ocupacional.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'types' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principales tipos de emergencias ambientales</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-orange-700">Emergencias por calor</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Calambres por calor</li>
                                            <li>Agotamiento por calor</li>
                                            <li>Golpe de calor</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Emergencias por frío</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Hipotermia</li>
                                            <li>Congelación</li>
                                            <li>Perniosis</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-green-700">Ahogamiento y sumersión</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Ahogamiento en agua dulce o salada</li>
                                            <li>Lesiones asociadas a inmersión</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Mordeduras y picaduras</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Serpientes</li>
                                            <li>Arañas</li>
                                            <li>Escorpiones</li>
                                            <li>Abejas, avispas</li>
                                            <li>Animales domésticos y silvestres</li>
                                        </ul>
                                    </div>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">Intoxicaciones ambientales</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Monóxido de carbono</li>
                                            <li>Gases tóxicos</li>
                                            <li>Plaguicidas y químicos industriales</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación y manejo inicial</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación primaria y secundaria</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Seguridad de la escena y protección personal</li>
                                            <li>Evaluación ABCDE</li>
                                            <li>Identificación rápida del tipo de emergencia ambiental</li>
                                            <li>Historia clínica dirigida (exposición, tiempo, síntomas)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-2 text-gray-800">Manejo general</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Retiro del paciente del ambiente peligroso</li>
                                            <li>Soporte vital básico y avanzado según necesidad</li>
                                            <li>Control de temperatura corporal</li>
                                            <li>Oxigenoterapia si está indicada</li>
                                            <li>Monitorización y traslado oportuno</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico según tipo</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Golpe de calor</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Retirar al paciente del calor</li>
                                                <li>Enfriamiento activo (paños húmedos, ventiladores, hielo en axilas e ingles)</li>
                                                <li>Oxígeno suplementario</li>
                                                <li>Monitorización de signos vitales</li>
                                                <li>Traslado rápido a hospital</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Hipotermia</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Retirar ropa húmeda y proteger del frío</li>
                                                <li>Recalentamiento pasivo o activo según gravedad</li>
                                                <li>Oxígeno caliente y humidificado si es posible</li>
                                                <li>Evitar movimientos bruscos</li>
                                                <li>Monitorización y traslado</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Ahogamiento</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Rescate seguro (sin poner en riesgo al rescatista)</li>
                                                <li>Evaluación y apertura de vía aérea</li>
                                                <li>Ventilación y RCP si es necesario</li>
                                                <li>Oxígeno suplementario</li>
                                                <li>Prevención de hipotermia</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Mordeduras y picaduras</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Identificar el animal/agente</li>
                                                <li>Lavar la zona con agua y jabón</li>
                                                <li>Inmovilizar la extremidad afectada</li>
                                                <li>No succionar ni cortar la herida</li>
                                                <li>Traslado para antídoto o manejo avanzado</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Intoxicaciones ambientales</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Retirar al paciente de la fuente tóxica</li>
                                                <li>Oxígeno de alto flujo</li>
                                                <li>Monitorización cardíaca</li>
                                                <li>Soporte vital avanzado según toxina</li>
                                                <li>Traslado urgente</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cases' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-orange-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Golpe de calor</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 19 años, atleta, colapsa durante una carrera bajo el sol. Presenta piel caliente y seca, confusión y taquicardia.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 30/min, piel caliente y seca</li>
                                            <li>C: FC 140/min, TA 100/60 mmHg</li>
                                            <li>D: Confuso</li>
                                            <li>E: Sin lesiones visibles</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Retirar del ambiente caluroso</li>
                                            <li>Enfriamiento activo</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización y traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-blue-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Hipotermia moderada</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 68 años encontrada en la calle durante una noche fría, con temblores, confusión y piel fría.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 16/min, piel fría</li>
                                            <li>C: FC 60/min, TA 110/70 mmHg</li>
                                            <li>D: Confusa, responde a estímulos</li>
                                            <li>E: Extremidades frías</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Retirar del frío y proteger del viento</li>
                                            <li>Recalentamiento pasivo (mantas, ambiente cálido)</li>
                                            <li>Oxígeno si es necesario</li>
                                            <li>Monitorización y traslado</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-green-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Mordedura de serpiente</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 35 años mordido en la pierna por serpiente mientras trabajaba en el campo. Presenta dolor, edema y equimosis local.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 20/min, sin dificultad respiratoria</li>
                                            <li>C: FC 90/min, TA 120/80 mmHg</li>
                                            <li>D: Alerta</li>
                                            <li>E: Edema y equimosis en pierna</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Inmovilizar la extremidad</li>
                                            <li>No succionar ni cortar la herida</li>
                                            <li>Traslado urgente para antiveneno</li>
                                            <li>Monitorización de signos vitales</li>
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
                            {[{
                                question: '¿Cuál es la diferencia entre agotamiento por calor y golpe de calor?',
                                answer: 'El agotamiento por calor es menos grave y se caracteriza por sudoración abundante, debilidad y náuseas. El golpe de calor es una emergencia vital, con alteración del estado mental y piel caliente y seca.'
                            }, {
                                question: '¿Qué hacer ante una mordedura de serpiente?',
                                answer: 'Inmovilizar la extremidad, evitar succionar o cortar la herida y trasladar al paciente para manejo especializado y antiveneno.'
                            }, {
                                question: '¿Cómo prevenir intoxicaciones por monóxido de carbono?',
                                answer: 'Mantener ventilados los espacios cerrados, revisar instalaciones de gas y evitar el uso de braseros o estufas en lugares sin ventilación.'
                            }].map((faq, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
                                                <span>{faq.question}</span>
                                                <ChevronUpIcon className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`} />
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
                                    <li><a href="https://www.ems1.com/environmental/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Emergencias ambientales</a></li>
                                    <li><a href="https://www.jems.com/patient-care/environmental/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de emergencias ambientales</a></li>
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

