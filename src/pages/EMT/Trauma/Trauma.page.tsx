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

export default function Trauma() {
    const [activeTab, setActiveTab] = useState<'overview' | 'mechanism' | 'assessment' | 'management' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaCarCrash className="w-24 h-24 mb-1 text-orange-500 drop-shadow-lg" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center text-orange-700">Conceptos Generales de Trauma</h1>
                        <p className="text-sm italic mb-4 text-gray-600">Basado en AAOS 11ª edición | Alumnos Generación 2025 Sábados Rescate 1</p>
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
                        <a href="https://www.naemt.org/education/phtls"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos PHTLS</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1WWdqHL8PZF7E3K3_Nsa74O7MMgEQBc2a/view?usp=drive_link"
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
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'overview' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >Generalidades</button>
                            <button
                                onClick={() => setActiveTab('mechanism')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'mechanism' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >Mecanismos y Tipos</button>
                            <button
                                onClick={() => setActiveTab('assessment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'assessment' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >Evaluación</button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'management' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >Manejo Inicial</button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'practice' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                            >Casos Clínicos</button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el trauma?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El trauma es una lesión o daño físico producido por la transferencia de energía al cuerpo, resultado de accidentes, caídas, agresiones, colisiones, entre otros. Es la principal causa de muerte en personas menores de 45 años y una de las principales causas de discapacidad. La atención prehospitalaria rápida y sistemática es fundamental para mejorar el pronóstico.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-orange-700">Importancia del trauma</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Principal causa de muerte en jóvenes y adultos jóvenes.</li>
                                            <li>Impacto social y económico significativo.</li>
                                            <li>La "hora dorada" es crítica para la supervivencia.</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Cadena de supervivencia en trauma</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Prevención</li>
                                            <li>Activación temprana del SEM</li>
                                            <li>Atención prehospitalaria eficiente</li>
                                            <li>Transporte rápido y seguro</li>
                                            <li>Atención hospitalaria especializada</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'mechanism' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mecanismos de lesión (MOI)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El mecanismo de lesión describe cómo la energía se transfiere al cuerpo y determina el tipo y gravedad de las lesiones. Comprender el MOI ayuda a anticipar lesiones ocultas y priorizar intervenciones.
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                        <li><strong>Trauma contuso:</strong> Impacto sin penetración de la piel (colisiones, caídas, agresiones).</li>
                                        <li><strong>Trauma penetrante:</strong> Objeto atraviesa la piel (heridas por arma blanca o de fuego).</li>
                                        <li><strong>Otros mecanismos:</strong> Explosiones, quemaduras, ahogamiento, asfixia.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cinética del trauma</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Principios clave</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Energía cinética = ½ masa x velocidad² (la velocidad es el factor más determinante).</li>
                                                <li>Intercambio de energía: mayor velocidad, mayor daño potencial.</li>
                                                <li>Cavitación: en trauma penetrante, se forman cavidades temporales y permanentes.</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Ejemplos de MOI</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Colisión vehicular (frontal, lateral, trasera, atropellamiento)</li>
                                                <li>Caídas de altura</li>
                                                <li>Heridas por arma blanca o de fuego</li>
                                                <li>Explosiones</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Lesiones específicas por región</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Cabeza y columna</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Traumatismo craneoencefálico (TCE)</li>
                                                <li>Lesión medular</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Tórax y abdomen</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Neumotórax, hemotórax, contusión pulmonar</li>
                                                <li>Lesiones cardíacas, abdominales y pélvicas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Extremidades y piel</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Fracturas, luxaciones, amputaciones</li>
                                                <li>Lesiones por aplastamiento, quemaduras</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'assessment' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación inicial del paciente de trauma</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La evaluación prehospitalaria sigue el enfoque XABCDE para identificar y tratar amenazas vitales de inmediato. Cada paso es fundamental para la supervivencia:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>X (Exanguinación):</strong> Control inmediato de hemorragias externas masivas.</li>
                                        <li><strong>A (Airway):</strong> Asegurar vía aérea permeable y proteger columna cervical.</li>
                                        <li><strong>B (Breathing):</strong> Evaluar ventilación, oxigenación y lesiones torácicas.</li>
                                        <li><strong>C (Circulation):</strong> Control de hemorragias, pulso, perfusión y choque.</li>
                                        <li><strong>D (Disability):</strong> Valoración neurológica rápida (AVDI, Glasgow).</li>
                                        <li><strong>E (Exposure/Environment):</strong> Exposición completa, búsqueda de lesiones ocultas y prevención de hipotermia.</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <h3 className="font-medium text-lg mb-2 text-orange-700">Evaluación secundaria</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>Examen físico detallado de pies a cabeza</li>
                                        <li>Recopilación de antecedentes (SAMPLE, OPQRST)</li>
                                        <li>Monitorización continua y reevaluación</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escalas y herramientas útiles</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Escala</th>
                                                    <th className="py-2 px-4 border">Uso</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">AVDI</td>
                                                    <td className="py-2 px-4 border">Nivel de conciencia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Glasgow</td>
                                                    <td className="py-2 px-4 border">Valoración neurológica</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">SAMPLE</td>
                                                    <td className="py-2 px-4 border">Antecedentes relevantes</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">OPQRST</td>
                                                    <td className="py-2 px-4 border">Caracterización del dolor</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo inicial y estabilización</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El manejo prehospitalario del trauma se basa en intervenciones rápidas y efectivas para reducir la mortalidad y morbilidad. Basado en AAOS 11ª edición y PHTLS.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-orange-700">Prioridades iniciales</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Control inmediato de hemorragias externas</li>
                                            <li>Inmovilización cervical si hay sospecha de lesión</li>
                                            <li>Evaluación y manejo de la vía aérea</li>
                                            <li>Oxigenoterapia según necesidad</li>
                                            <li>Ventilación asistida si es necesario</li>
                                        </ul>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Manejo avanzado</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Acceso vascular o intraóseo</li>
                                            <li>Reposición de líquidos (según protocolo local)</li>
                                            <li>Control del shock y prevención de hipotermia</li>
                                            <li>Inmovilización de fracturas y lesiones</li>
                                            <li>Transporte rápido al centro de trauma adecuado</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">La "hora dorada" y el transporte</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La "hora dorada" es el periodo crítico tras una lesión grave donde la intervención médica oportuna mejora significativamente el pronóstico. El transporte debe ser expedito y seguro, priorizando el centro de trauma más adecuado.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos de trauma</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Accidente vehicular de alta energía</h3>
                                    <p className="italic text-gray-600 mb-4">Hombre de 28 años, conductor de motocicleta, colisiona contra un automóvil a alta velocidad. Presenta inconsciencia breve, sangrado activo en pierna derecha y dificultad respiratoria.</p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>X: Hemorragia activa en muslo derecho</li>
                                            <li>A: Vía aérea permeable, requiere control cervical</li>
                                            <li>B: FR 28, ruidos respiratorios disminuidos en hemitórax derecho</li>
                                            <li>C: Pulso débil, piel fría y pálida</li>
                                            <li>D: Glasgow 13, responde a estímulos</li>
                                            <li>E: Exposición revela fractura abierta de fémur</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control de hemorragia con torniquete</li>
                                            <li>Inmovilización cervical y de extremidad</li>
                                            <li>Oxígeno alto flujo</li>
                                            <li>Transporte urgente a centro de trauma</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Caída de altura</h3>
                                    <p className="italic text-gray-600 mb-4">Mujer de 65 años cae de una escalera (2 metros). Presenta dolor lumbar intenso, deformidad en tobillo izquierdo y dificultad para moverse.</p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>X: Sin hemorragias externas</li>
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 20, ventilación adecuada</li>
                                            <li>C: Pulso regular, piel normoperfundida</li>
                                            <li>D: Alerta, orientada</li>
                                            <li>E: Dolor lumbar, deformidad en tobillo</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Inmovilización espinal completa</li>
                                            <li>Inmovilización de extremidad afectada</li>
                                            <li>Monitorización y analgesia según protocolo</li>
                                            <li>Transporte a hospital</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Herida por arma blanca</h3>
                                    <p className="italic text-gray-600 mb-4">Varón de 35 años con herida penetrante en abdomen tras agresión. Presenta dolor abdominal intenso y signos de shock.</p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>X: Hemorragia controlada con apósito</li>
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24, ventilación adecuada</li>
                                            <li>C: Pulso rápido, piel fría y sudorosa</li>
                                            <li>D: Alerta, ansioso</li>
                                            <li>E: Herida penetrante en abdomen</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control local de hemorragia</li>
                                            <li>Oxígeno alto flujo</li>
                                            <li>Monitorización y prevención de hipotermia</li>
                                            <li>Transporte urgente a centro quirúrgico</li>
                                        </ol>
                                    </div>
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
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
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

