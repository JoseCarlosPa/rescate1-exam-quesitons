import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./MedAdmin.questions.ts";
import {GiTripleNeedle} from "react-icons/gi";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaPills} from "react-icons/fa";
import {useState} from "react";

export default function MedAdmin(){
    const [activeTab, setActiveTab] = useState<'overview' | 'routes' | 'rights' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <GiTripleNeedle className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Administración de Medicamentos</h1>
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
                            to="/med-admin/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1gwDn5-fcA1qLFbYfkqIPET6kvnzZAvmu/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
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
                        <a href="https://www.medicamentosplm.com/Home/Medicamento/A/1"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <FaPills className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Diccionario PLM</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Repasa la administración de medicamentos</h3>
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
                                onClick={() => setActiveTab('routes')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'routes'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Vías de Administración
                            </button>
                            <button
                                onClick={() => setActiveTab('rights')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'rights'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                6 Correctos
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
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué es importante la administración correcta?</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Permite un tratamiento seguro y efectivo para el paciente.</li>
                                    <li>Disminuye riesgos de errores, reacciones adversas y complicaciones.</li>
                                    <li>Es una habilidad crítica en la atención prehospitalaria y hospitalaria.</li>
                                </ul>
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones generales</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Verificar alergias y antecedentes antes de administrar cualquier medicamento.</li>
                                    <li>Conocer indicaciones, dosis, efectos secundarios y precauciones.</li>
                                    <li>Documentar todo lo administrado: medicamento, dosis, vía, hora y respuesta.</li>
                                    <li>Observar signos de efectos adversos tras la administración.</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'routes' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principales vías de administración en el ámbito prehospitalario</h2>
                                <div className="overflow-x-auto mb-4">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Vía</th>
                                                <th className="py-2 px-4 border">Descripción</th>
                                                <th className="py-2 px-4 border">Ventajas</th>
                                                <th className="py-2 px-4 border">Desventajas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Por boca, deglución</td>
                                                <td className="py-2 px-4 border">Fácil, no invasiva</td>
                                                <td className="py-2 px-4 border">Absorción lenta, no en inconscientes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Sublingual</td>
                                                <td className="py-2 px-4 border">Debajo de la lengua</td>
                                                <td className="py-2 px-4 border">Rápida absorción</td>
                                                <td className="py-2 px-4 border">No en pacientes inconscientes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Inhalada</td>
                                                <td className="py-2 px-4 border">Por vía respiratoria</td>
                                                <td className="py-2 px-4 border">Rápida, directa a pulmones</td>
                                                <td className="py-2 px-4 border">Difícil dosificación precisa</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Intramuscular (IM)</td>
                                                <td className="py-2 px-4 border">Inyección en músculo</td>
                                                <td className="py-2 px-4 border">Absorción rápida, útil en emergencias</td>
                                                <td className="py-2 px-4 border">Dolor, riesgo de lesión</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Subcutánea (SC)</td>
                                                <td className="py-2 px-4 border">Inyección bajo la piel</td>
                                                <td className="py-2 px-4 border">Fácil, menos dolor que IM</td>
                                                <td className="py-2 px-4 border">Absorción más lenta que IM</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Intravenosa (IV)</td>
                                                <td className="py-2 px-4 border">Directo al torrente sanguíneo</td>
                                                <td className="py-2 px-4 border">Efecto inmediato</td>
                                                <td className="py-2 px-4 border">Requiere acceso venoso, riesgo de complicaciones</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>La vía de administración depende del estado del paciente y del medicamento.</li>
                                    <li>En prehospitalario, las más usadas: oral, sublingual, inhalada, IM, SC.</li>
                                    <li>IV suele ser para personal avanzado.</li>
                                </ul>
                            </div>
                        )}
                        {activeTab === 'rights' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">6 Correctos de la administración de medicamentos</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Paciente correcto</li>
                                    <li>Medicamento correcto</li>
                                    <li>Dosis correcta</li>
                                    <li>Hora correcta</li>
                                    <li>Vía correcta</li>
                                    <li>Registro correcto</li>
                                </ul>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-2">Tabla resumen de los 6 correctos</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Correcto</th>
                                                    <th className="py-2 px-4 border">Descripción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Paciente</td>
                                                    <td className="py-2 px-4 border">Verificar identidad antes de administrar</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Medicamento</td>
                                                    <td className="py-2 px-4 border">Confirmar nombre y presentación</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Dosis</td>
                                                    <td className="py-2 px-4 border">Corroborar cantidad y concentración</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Hora</td>
                                                    <td className="py-2 px-4 border">Administrar en el momento indicado</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Vía</td>
                                                    <td className="py-2 px-4 border">Asegurar la vía de administración adecuada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Registro</td>
                                                    <td className="py-2 px-4 border">Documentar todo lo administrado</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos de administración</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Hipoglucemia</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente diabético, consciente pero desorientado, glucosa capilar 48 mg/dL.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Intervención:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Administrar glucosa oral (si puede deglutir)</li>
                                            <li>Monitorizar respuesta</li>
                                            <li>Documentar dosis, hora y respuesta</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Dolor torácico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 60 años con dolor torácico opresivo, sospecha de infarto.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Intervención:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Administrar aspirina oral (160-325 mg, masticable)</li>
                                            <li>Monitorizar signos vitales</li>
                                            <li>Documentar todo</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Anafilaxia</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 35 años con dificultad respiratoria, urticaria y edema facial tras picadura de abeja.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Intervención:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Administrar epinefrina IM (0.3-0.5 mg)</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorizar y trasladar</li>
                                            <li>Registrar todo lo realizado</li>
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
                                    <li><a href="https://www.ems1.com/patient-assessment/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Administración de medicamentos</a></li>
                                    <li><a href="https://www.jems.com/patient-care/medications/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Medicamentos y farmacología</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Videos educativos</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Medscape - Referencias médicas y calculadoras</li>
                                    <li>Paramedicine - Guías clínicas y medicamentos</li>
                                    <li>Quizlet - Tarjetas de estudio de farmacología</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

