import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./GastroEmergency.questions.ts";
import {GiStomach} from "react-icons/gi";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function GastroEmergency() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <GiStomach className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias gastrointestinales y urológicas</h1>
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
                            to="/gastro-emergency/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen Completo</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
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

                        <a href="https://www.ems1.com/gastrointestinal-emergencies/"
                           target="_blank"
                           rel="noopener noreferrer"
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias gastrointestinales y urológicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Son afecciones que involucran órganos del sistema digestivo o del aparato urinario, que pueden representar emergencias potencialmente graves si no se identifican y tratan a tiempo. El dolor abdominal es el síntoma principal, pero pueden presentarse otros signos según el órgano afectado.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Según la AAOS (11ª edición), las emergencias abdominales requieren una evaluación sistemática y un manejo prehospitalario enfocado en la estabilización y el traslado oportuno.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dolor abdominal localizado o generalizado</li>
                                            <li>Náuseas, vómitos y diarrea</li>
                                            <li>Distensión abdominal o abdomen rígido</li>
                                            <li>Hematemesis (vómito con sangre) o melena (heces negras)</li>
                                            <li>Disuria (dolor al orinar), hematuria (sangre en la orina)</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Síntomas acompañantes: fiebre, taquicardia, hipotensión</li>
                                            <li>Pérdida de apetito</li>
                                            <li>Ictericia (coloración amarilla)</li>
                                            <li>Palidez o sudoración</li>
                                            <li>Alteración del estado de conciencia en casos graves</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Patologías frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Gastrointestinales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Apendicitis aguda</li>
                                                <li>Hemorragia digestiva alta o baja</li>
                                                <li>Gastritis y úlcera péptica</li>
                                                <li>Obstrucción intestinal</li>
                                                <li>Pancreatitis</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Urológicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Cólico renal</li>
                                                <li>Infección urinaria aguda</li>
                                                <li>Retención urinaria</li>
                                                <li>Hematuria</li>
                                                <li>Trauma renal o vesical</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del sistema gastrointestinal</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Incluye boca, esófago, estómago, intestino delgado, intestino grueso, hígado, vesícula biliar y páncreas. Cada órgano cumple funciones específicas en la digestión y absorción de nutrientes.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Estómago:</strong> Digestión inicial de proteínas</li>
                                            <li><strong>Intestino delgado:</strong> Absorción de nutrientes</li>
                                            <li><strong>Intestino grueso:</strong> Absorción de agua y formación de heces</li>
                                            <li><strong>Hígado y vesícula:</strong> Metabolismo y almacenamiento</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Digestive_system_diagram_es.svg/500px-Digestive_system_diagram_es.svg.png"
                                            alt="Sistema digestivo"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del sistema urinario</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Incluye riñones, uréteres, vejiga y uretra. Los riñones filtran la sangre, regulan líquidos y electrolitos, y eliminan desechos.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Riñones:</strong> Filtración y producción de orina</li>
                                            <li><strong>Vejiga:</strong> Almacenamiento de orina</li>
                                            <li><strong>Uréteres y uretra:</strong> Transporte y excreción</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Urinary_system_diagram_es.svg/500px-Urinary_system_diagram_es.svg.png"
                                            alt="Sistema urinario"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología relevante</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Digestión y absorción</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La digestión transforma alimentos en nutrientes y energía. El sistema digestivo también elimina desechos no absorbidos.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Eliminación urinaria</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                El sistema urinario elimina desechos y regula líquidos/electrolitos. La diuresis y la homeostasis son esenciales para el equilibrio corporal.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación prehospitalaria</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Aplicar el Código MEGA para evaluar la gravedad inicial</li>
                                        <li>Identificar el tipo de dolor: somático, visceral o referido</li>
                                        <li>Realizar una evaluación detallada con enfoque en OPQRST y SAMPLE</li>
                                        <li>Monitorizar signos vitales con frecuencia</li>
                                        <li>Evitar dar comida, agua o medicamentos sin indicación médica</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tratamiento prehospitalario</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Colocar al paciente en posición de confort (decúbito supino con rodillas flexionadas)</li>
                                        <li>Administrar oxígeno si hay hipoxia</li>
                                        <li>Evitar aplicar calor en abdomen</li>
                                        <li>Preparar para traslado inmediato si hay signos de shock</li>
                                        <li>Notificar al hospital receptor sobre la condición del paciente</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Perlas AAOS para el manejo</h2>
                                    <ul className="list-disc list-inside space-y-2 text-orange-700">
                                        <li>El dolor abdominal súbito y severo siempre es una emergencia hasta demostrar lo contrario</li>
                                        <li>La evaluación repetida es clave: los síntomas pueden evolucionar rápidamente</li>
                                        <li>La hemorragia digestiva puede ser oculta: buscar signos de shock</li>
                                        <li>En cólico renal, el dolor puede irradiar a la ingle y acompañarse de hematuria</li>
                                        <li>En pacientes con vómito persistente, vigilar signos de deshidratación</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Dolor abdominal agudo</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 35 años con dolor abdominal intenso en fosa iliaca derecha, náuseas y fiebre.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 20/min, SpO₂ 98%</li>
                                            <li>C: FC 110/min, TA 100/60 mmHg</li>
                                            <li>D: Alerta, orientada</li>
                                            <li>E: Dolor a la palpación en fosa iliaca derecha</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Monitorización de signos vitales</li>
                                            <li>Posición de confort</li>
                                            <li>Evitar alimentos y líquidos</li>
                                            <li>Oxígeno si hay hipoxia</li>
                                            <li>Traslado urgente a hospital</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Hematemesis</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 60 años con vómito con sangre roja, antecedente de cirrosis hepática.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 22/min, SpO₂ 97%</li>
                                            <li>C: FC 120/min, TA 90/60 mmHg</li>
                                            <li>D: Somnoliento</li>
                                            <li>E: Abdomen distendido</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Vía aérea permeable</li>
                                            <li>Oxígeno si hay hipoxia</li>
                                            <li>Monitorización de signos vitales</li>
                                            <li>Posición semisentada si no hay hipotensión severa</li>
                                            <li>Traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Cólico renal</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 45 años con dolor lumbar intenso, hematuria y náuseas.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 18/min, SpO₂ 99%</li>
                                            <li>C: FC 95/min, TA 130/80 mmHg</li>
                                            <li>D: Alerta, ansioso</li>
                                            <li>E: Dolor a la palpación en fosa lumbar derecha</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Monitorización de signos vitales</li>
                                            <li>Posición de confort</li>
                                            <li>Evitar alimentos y líquidos</li>
                                            <li>Oxígeno si hay hipoxia</li>
                                            <li>Traslado para valoración</li>
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
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/gastrointestinal-emergencies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias gastrointestinales</a></li>
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

