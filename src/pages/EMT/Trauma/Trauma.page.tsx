import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Trauma.questions.ts";
import {FaCarCrash} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function Trauma(){
    const [activeTab, setActiveTab] = useState<'overview' | 'types' | 'management' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaCarCrash className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Conceptos Generales de Trauma</h1>
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
                            to="/trauma/exam"
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

                        

                        <a href="https://www.naemt.org/education/phtls" // Ejemplo, reemplazar con recurso relevante para trauma
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos PHTLS</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1WWdqHL8PZF7E3K3_Nsa74O7MMgEQBc2a/view?usp=drive_link" // Ejemplo, reemplazar con recurso relevante para trauma
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
                            {/* Aquí iría el componente de Quiz Rápido o su lógica */}
                            <p className="text-gray-700">El quiz rápido de trauma estará disponible próximamente.</p>
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
                                Tipos de Trauma
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo y Estabilización
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
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el trauma?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El trauma se define como una lesión física o herida infligida al cuerpo por una fuerza o violencia externa.
                                        Es una de las principales causas de muerte y discapacidad, especialmente en personas jóvenes. La atención prehospitalaria rápida y eficaz es crucial.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mecanismo de lesión (MOI)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El mecanismo de lesión (MOI) describe las fuerzas que actuaron sobre el cuerpo para causar la lesión.
                                        Comprender el MOI es fundamental para anticipar patrones de lesiones. Se clasifica principalmente en:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                        <li><strong>Trauma contuso:</strong> Resulta del impacto de un objeto contra el cuerpo, o del cuerpo contra un objeto, sin penetrar la piel (ej. colisiones vehiculares, caídas, agresiones).</li>
                                        <li><strong>Trauma penetrante:</strong> Ocurre cuando un objeto atraviesa la piel y entra en los tejidos corporales (ej. heridas por arma de fuego, apuñalamientos).</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cinética del trauma</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La cinética es el estudio de la energía en movimiento. En trauma, se refiere a cómo la energía se transfiere durante un incidente y causa lesiones.
                                        Principios clave incluyen:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                        <li>Energía cinética = ½ masa x velocidad². La velocidad es el factor más significativo.</li>
                                        <li>Intercambio de energía: La cantidad de daño depende de cuánta energía se transfiere al cuerpo y cuán rápido.</li>
                                        <li>Cavitación: En trauma penetrante, la trayectoria del objeto crea una cavidad temporal y una permanente.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación del paciente de trauma</h2>
                                     <p className="text-gray-700 leading-relaxed">La evaluación sigue el enfoque XABCDE (o MARCH en algunos contextos tácticos) para identificar y tratar amenazas vitales:</p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>X/Exanguinación:</strong> Control de hemorragias externas masivas.</li>
                                        <li><strong>A (Airway):</strong> Vía aérea permeable con control de columna cervical.</li>
                                        <li><strong>B (Breathing):</strong> Ventilación y oxigenación adecuadas.</li>
                                        <li><strong>C (Circulation):</strong> Control de hemorragias, pulso, perfusión.</li>
                                        <li><strong>D (Disability):</strong> Evaluación neurológica (AVDI, Glasgow).</li>
                                        <li><strong>E (Exposure/Environment):</strong> Exposición completa para buscar lesiones, control de hipotermia.</li>
                                    </ul>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Posteriormente se realiza una evaluación secundaria detallada y se recopilan antecedentes (SAMPLE, OPQRST si aplica).
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">La "Hora Dorada" y el transporte</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La "hora dorada" se refiere al período crítico después de una lesión traumática grave, donde la intervención médica oportuna tiene la mayor probabilidad de mejorar el resultado del paciente.
                                        Esto subraya la importancia de una evaluación rápida, manejo inicial y transporte expedito al centro de trauma apropiado.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'types' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de Trauma y Lesiones Específicas</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    El contenido sobre los diferentes tipos de trauma (contuso, penetrante) y lesiones específicas por región corporal (cabeza, columna, tórax, abdomen, extremidades, quemaduras) se añadirá aquí, basándose en la AAOS 11ª ed.
                                </p>
                                {/* Aquí se desarrollaría el contenido detallado */}
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo y Estabilización del Paciente de Trauma</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Esta sección detallará el manejo prehospitalario específico para diferentes tipos de lesiones traumáticas, incluyendo control avanzado de la vía aérea en trauma, manejo del shock, inmovilización espinal y de extremidades, y consideraciones especiales. Basado en AAOS 11ª ed. y PHTLS.
                                </p>
                                {/* Aquí se desarrollaría el contenido detallado */}
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos Clínicos de Trauma</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Se presentarán casos clínicos interactivos o para análisis, cubriendo diversos escenarios de trauma, para aplicar los conocimientos adquiridos.
                                </p>
                                {/* Ejemplo de estructura de caso clínico */}
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso Próximamente: Colisión Vehicular</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Descripción del escenario del caso...
                                    </p>
                                    {/* Más detalles del caso */}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* FAQ Section */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes sobre Trauma</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
                                                <span>{faq.question}</span>
                                                <ChevronUpIcon
                                                    className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`}
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
                        <h2 className="text-2xl font-bold mb-4">Referencias y Recursos Adicionales</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía Principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Jones & Bartlett Learning. (Capítulos relevantes sobre trauma)</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                    <li>American College of Surgeons Committee on Trauma. (2018). <em>ATLS: Advanced Trauma Life Support Student Course Manual</em> (10ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre Trauma</a></li>
                                    <li><a href="https://www.jems.com/ems-insider/categories/trauma-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de Trauma</a></li>
                                    <li><a href="https://www.trauma.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Trauma.org - Recursos e información</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

