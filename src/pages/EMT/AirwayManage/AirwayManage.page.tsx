import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {FaHeadSideMask} from "react-icons/fa";
import {faqData} from "./AirwayManage.questions.ts";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {PiChalkboardTeacher} from "react-icons/pi";
import {BsBookHalf} from "react-icons/bs";
import {useState} from "react";

export default function AirwayManage(){
    const [activeTab, setActiveTab] = useState<'overview' | 'techniques' | 'devices' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaHeadSideMask className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Manejo de la Vía Aérea</h1>
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
                            to="/airway-manage/exam"
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
                        
                        <a href="https://www.easyauscultation.com/lung-sounds"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Práctica Auscultación</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Repasa el manejo de la vía aérea</h3>
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
                                onClick={() => setActiveTab('techniques')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'techniques'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Técnicas
                            </button>
                            <button
                                onClick={() => setActiveTab('devices')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'devices'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Dispositivos
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué es importante el manejo de la vía aérea?</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Garantizar una vía aérea abierta y funcional es la prioridad absoluta en la atención prehospitalaria.</li>
                                        <li>La obstrucción de la vía aérea puede llevar rápidamente a hipoxia y muerte si no se maneja adecuadamente.</li>
                                        <li>La evaluación y manejo oportuno salvan vidas y previenen secuelas neurológicas.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación inicial</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Valora si el paciente puede hablar o respirar normalmente.</li>
                                        <li>Busca sonidos anormales: estridor, ronquidos, gorgoteo.</li>
                                        <li>Observa movimientos torácicos y signos de dificultad respiratoria.</li>
                                        <li>Evalúa el color de piel y nivel de conciencia.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'techniques' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Técnicas de apertura y protección de la vía aérea</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Inclinación de cabeza y elevación del mentón:</strong> Técnica estándar en pacientes sin trauma.</li>
                                    <li><strong>Tracción mandibular:</strong> Técnica utilizada si se sospecha lesión cervical.</li>
                                    <li><strong>Posición lateral de seguridad:</strong> Para pacientes inconscientes con respiración espontánea.</li>
                                    <li><strong>Aspiración:</strong> Para eliminar secreciones, sangre o vómito.</li>
                                </ul>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Consejos prácticos</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Siempre proteger la columna cervical en trauma.</li>
                                        <li>Evitar hiperextensión en niños pequeños.</li>
                                        <li>Revisar la cavidad oral antes de ventilar.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'devices' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Dispositivos básicos de manejo de vía aérea</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li><strong>Aspirador:</strong> Para eliminar secreciones o vómito.</li>
                                    <li><strong>Cánula orofaríngea (OPA):</strong> Evita la obstrucción por la lengua en pacientes inconscientes sin reflejo de vómito.</li>
                                    <li><strong>Cánula nasofaríngea (NPA):</strong> Para mantener la vía aérea en pacientes conscientes o semiconscientes.</li>
                                    <li><strong>BVM (bolsa-válvula-mascarilla):</strong> Para ventilación asistida.</li>
                                    <li><strong>Mascarillas de oxígeno:</strong> Cánula nasal, mascarilla simple, mascarilla de no reinhalación.</li>
                                </ul>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Tabla de FiO₂ suministrada por dispositivos</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Dispositivo</th>
                                                    <th className="py-2 px-4 border">FiO₂ aproximada</th>
                                                    <th className="py-2 px-4 border">Flujo (L/min)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Cánula nasal</td>
                                                    <td className="py-2 px-4 border">24-44%</td>
                                                    <td className="py-2 px-4 border">1-6</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Mascarilla simple</td>
                                                    <td className="py-2 px-4 border">35-50%</td>
                                                    <td className="py-2 px-4 border">5-10</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Mascarilla con reservorio</td>
                                                    <td className="py-2 px-4 border">60-95%</td>
                                                    <td className="py-2 px-4 border">10-15</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">BVM con reservorio</td>
                                                    <td className="py-2 px-4 border">90-100%</td>
                                                    <td className="py-2 px-4 border">15</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Oxigenoterapia</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Administrar oxígeno suplementario según necesidad clínica del paciente.</li>
                                        <li>Dispositivos: cánula nasal, mascarilla simple, mascarilla de no reinhalación, bolsa-válvula-mascarilla (BVM).</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Obstrucción de vía aérea</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 60 años, súbitamente deja de hablar y lleva las manos al cuello durante una comida.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>No puede hablar ni toser</li>
                                            <li>Signo universal de asfixia</li>
                                            <li>Sin entrada de aire</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Compresiones abdominales (Heimlich)</li>
                                            <li>Si pierde conciencia, iniciar RCP</li>
                                            <li>Revisar cavidad oral antes de ventilar</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Paciente inconsciente con secreciones</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 45 años encontrada inconsciente, con ruidos de gorgoteo y secreciones en la boca.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Vía aérea obstruida por secreciones</li>
                                            <li>Respiración ruidosa</li>
                                            <li>Disminución del nivel de conciencia</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Aspirar secreciones</li>
                                            <li>Colocar cánula orofaríngea</li>
                                            <li>Ventilar con BVM si es necesario</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Trauma facial</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Joven de 20 años con trauma facial, sangrado oral y dificultad respiratoria tras accidente en motocicleta.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Sangrado activo en boca</li>
                                            <li>Ruidos respiratorios anormales</li>
                                            <li>Uso de músculos accesorios</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Aspirar sangre y secreciones</li>
                                            <li>Proteger columna cervical</li>
                                            <li>Ventilar con BVM si es necesario</li>
                                            <li>Traslado urgente</li>
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
                </div>
            </div>
        </div>
    );
}

