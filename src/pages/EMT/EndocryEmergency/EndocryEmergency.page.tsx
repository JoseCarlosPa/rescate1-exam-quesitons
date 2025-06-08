import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./EndocryEmergency.questions.ts";
import {CiMedicalCross} from "react-icons/ci";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function EndocryEmergency(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Endocrinas y Hematológicas</h1>
                        <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto"  />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>
                    {/* Menú rápido de recursos */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to="/endocrine-emergency/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1vI8Dc6pfyv3jVunQdy99BFJlJ4dpdBiy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://drive.google.com/file/d/11yKcENtm8rdmhicNn9oHX2sroyjEqi26/view?usp=drive_link"
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias endocrinas y hematológicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Son condiciones que afectan al sistema hormonal (endocrino) y a la sangre (hematológico), y pueden poner en peligro la vida si no se reconocen y tratan rápidamente en el entorno prehospitalario.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Según la AAOS (11ª edición), el reconocimiento temprano y la intervención adecuada son clave para mejorar el pronóstico del paciente.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Alteración del estado mental</li>
                                            <li>Síntomas neurológicos (convulsiones, debilidad)</li>
                                            <li>Piel fría, sudorosa o seca</li>
                                            <li>Palpitaciones, taquicardia</li>
                                            <li>Poliuria, polidipsia, polifagia</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Pérdida de conciencia</li>
                                            <li>Sangrado espontáneo o excesivo</li>
                                            <li>Petequias, equimosis</li>
                                            <li>Palidez, fatiga, disnea</li>
                                            <li>Dolor abdominal o torácico</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Patologías frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Endocrinas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Hipoglucemia</li>
                                                <li>Hiperglucemia (CAD, estado hiperosmolar)</li>
                                                <li>Crisis tiroidea</li>
                                                <li>Insuficiencia suprarrenal aguda</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Hematológicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Anemia aguda o crónica</li>
                                                <li>Hemofilia y coagulopatías</li>
                                                <li>Enfermedad de células falciformes</li>
                                                <li>Púrpura trombocitopénica</li>
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema endocrino</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El sistema endocrino está formado por glándulas que secretan hormonas: páncreas, tiroides, suprarrenales, hipófisis, entre otras. Las hormonas regulan el metabolismo, el crecimiento y la respuesta al estrés.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Páncreas:</strong> Regula glucosa (insulina y glucagón)</li>
                                            <li><strong>Tiroides:</strong> Controla metabolismo basal</li>
                                            <li><strong>Suprarrenales:</strong> Estrés, presión arterial, metabolismo</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Endocrine_system_diagram_es.svg/500px-Endocrine_system_diagram_es.svg.png"
                                            alt="Sistema endocrino"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema hematológico</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Incluye la sangre y órganos hematopoyéticos (médula ósea, bazo). La sangre transporta oxígeno, nutrientes y células de defensa, y participa en la coagulación.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Glóbulos rojos:</strong> Transporte de oxígeno</li>
                                            <li><strong>Glóbulos blancos:</strong> Defensa inmunológica</li>
                                            <li><strong>Plaquetas:</strong> Coagulación</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Blood_components_diagram_es.svg/500px-Blood_components_diagram_es.svg.png"
                                            alt="Sistema hematológico"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología relevante</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Regulación de glucosa</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La insulina y el glucagón mantienen la glucosa en rangos normales. La hipoglucemia y la hiperglucemia pueden causar alteraciones graves del estado mental y daño orgánico.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Hemostasia y coagulación</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La coagulación previene hemorragias. Las alteraciones pueden causar sangrado espontáneo o trombosis.
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
                                        <li>Evaluar nivel de conciencia y signos vitales</li>
                                        <li>Glucosa capilar en todo paciente con alteración mental</li>
                                        <li>Buscar signos de sangrado o palidez</li>
                                        <li>Identificar factores de riesgo (diabetes, anticoagulantes, enfermedades previas)</li>
                                        <li>Reevaluación continua</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo prehospitalario</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Administrar glucosa oral si el paciente está consciente y puede tragar</li>
                                        <li>Oxígeno suplementario si hay hipoxia</li>
                                        <li>Control de hemorragias externas</li>
                                        <li>Evitar manipulación excesiva en hemofilia</li>
                                        <li>Traslado urgente a hospital</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Perlas AAOS para el manejo</h2>
                                    <ul className="list-disc list-inside space-y-2 text-orange-700">
                                        <li>La hipoglucemia es la causa más frecuente de alteración mental reversible en el entorno prehospitalario</li>
                                        <li>En pacientes diabéticos, siempre descartar hipoglucemia antes de administrar glucosa</li>
                                        <li>En hemofilia, evitar inyecciones intramusculares y punciones innecesarias</li>
                                        <li>La fiebre y el dolor intenso en células falciformes pueden indicar crisis grave</li>
                                        <li>La reevaluación frecuente es clave para detectar deterioro</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Hipoglucemia severa</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 60 años diabética, encontrada inconsciente, piel fría y sudorosa, glucosa capilar 38 mg/dL.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 18/min, SpO₂ 97%</li>
                                            <li>C: FC 110/min, TA 120/70 mmHg</li>
                                            <li>D: Inconsciente, no responde a estímulos</li>
                                            <li>E: Piel fría, sudorosa</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Administrar glucosa oral si recupera conciencia</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización continua</li>
                                            <li>Traslado urgente a hospital</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Crisis de células falciformes</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Adolescente con dolor intenso en extremidades, fiebre y palidez. Antecedente de anemia falciforme.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 22/min, SpO₂ 98%</li>
                                            <li>C: FC 120/min, TA 110/65 mmHg</li>
                                            <li>D: Alerta, dolor intenso</li>
                                            <li>E: Palidez, fiebre</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Oxígeno suplementario</li>
                                            <li>Alivio del dolor según protocolo</li>
                                            <li>Monitorización continua</li>
                                            <li>Traslado urgente a hospital</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Hemofilia y sangrado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 8 años con hemofilia, presenta sangrado persistente tras caída menor.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 20/min, SpO₂ 99%</li>
                                            <li>C: FC 105/min, TA 110/70 mmHg</li>
                                            <li>D: Alerta, ansioso</li>
                                            <li>E: Sangrado persistente en rodilla</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control local del sangrado (presión directa)</li>
                                            <li>Evitar manipulación excesiva</li>
                                            <li>Oxígeno si hay signos de hipoperfusión</li>
                                            <li>Traslado urgente a hospital</li>
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
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/endocrine-emergencies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias endocrinas</a></li>
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

