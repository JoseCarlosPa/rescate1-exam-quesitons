import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./NeuroEmergency.questions.ts";
import {RiBrain2Fill} from "react-icons/ri";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function NeuroEmergency() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <RiBrain2Fill className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Neurológicas</h1>
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
                            to="/neuro-emergency/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/15fdQZsSUuF9ViCqGwilGhDpF4zVoU5f8/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        

                        <a href="https://www.ems1.com/neurological-emergencies/"
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias neurológicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias neurológicas son condiciones que afectan al sistema nervioso central y periférico, y pueden comprometer rápidamente la vida o causar discapacidad permanente. El reconocimiento temprano y la intervención prehospitalaria son clave para mejorar el pronóstico del paciente.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Según la AAOS (11ª edición), las principales emergencias neurológicas incluyen el accidente cerebrovascular (ACV), convulsiones, estado epiléptico, traumatismo craneoencefálico (TCE) y síncope.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Déficit neurológico focal (hemiparesia, afasia, desviación de mirada)</li>
                                            <li>Alteración del nivel de conciencia</li>
                                            <li>Convulsiones</li>
                                            <li>Dolor de cabeza súbito e intenso</li>
                                            <li>Pérdida de fuerza o sensibilidad</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Alteraciones visuales o del habla</li>
                                            <li>Síncope o desmayo</li>
                                            <li>Vómito en proyectil (TCE, hipertensión intracraneal)</li>
                                            <li>Parálisis facial</li>
                                            <li>Desorientación o confusión</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Patologías frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Vasculares</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Accidente cerebrovascular isquémico</li>
                                                <li>Accidente cerebrovascular hemorrágico</li>
                                                <li>AIT (ataque isquémico transitorio)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">No vasculares</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Convulsiones y estado epiléptico</li>
                                                <li>Traumatismo craneoencefálico</li>
                                                <li>Síncope</li>
                                                <li>Infecciones del SNC (meningitis, encefalitis)</li>
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del sistema nervioso</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El sistema nervioso se divide en central (SNC) y periférico (SNP):
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>SNC:</strong> Encéfalo (cerebro, cerebelo, tronco encefálico) y médula espinal.</li>
                                            <li><strong>SNP:</strong> Nervios craneales y espinales, conectan el SNC con el resto del cuerpo.</li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            El encéfalo controla funciones motoras, sensoriales, cognitivas y vitales. La médula espinal transmite impulsos entre el cerebro y el cuerpo.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Brain_human_normal_inferior_view_with_labels_es.svg/500px-Brain_human_normal_inferior_view_with_labels_es.svg.png"
                                            alt="Anatomía del sistema nervioso"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología neurológica básica</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Función cerebral</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                El cerebro procesa información sensorial, controla el movimiento, el lenguaje, la memoria y la conciencia. El tronco encefálico regula funciones vitales como respiración y frecuencia cardíaca.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Fisiopatología</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Las lesiones neurológicas pueden causar alteraciones motoras, sensoriales, cognitivas o del estado de conciencia. La isquemia cerebral y la hipertensión intracraneal son mecanismos frecuentes de daño.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escalas y parámetros de evaluación</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Escala</th>
                                                    <th className="py-2 px-4 border">Uso</th>
                                                    <th className="py-2 px-4 border">Puntaje/Resultado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">AVPU</td>
                                                    <td className="py-2 px-4 border">Nivel de conciencia</td>
                                                    <td className="py-2 px-4 border">Alerta, Voz, Dolor, No responde</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Glasgow</td>
                                                    <td className="py-2 px-4 border">TCE, coma</td>
                                                    <td className="py-2 px-4 border">3-15</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Cincinnati</td>
                                                    <td className="py-2 px-4 border">Sospecha de ACV</td>
                                                    <td className="py-2 px-4 border">Caída facial, debilidad en brazo, habla anormal</td>
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación y manejo inicial</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación primaria</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Seguridad de la escena</li>
                                                <li>Evaluación ABCDE</li>
                                                <li>Control de vía aérea y ventilación</li>
                                                <li>Monitorización de signos vitales</li>
                                                <li>Evaluación neurológica rápida (AVPU, Glasgow)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Manejo prehospitalario</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Oxígeno suplementario si SpO₂ &lt;94%</li>
                                                <li>Control de glucosa capilar</li>
                                                <li>Evitar hiperoxia y manipulación excesiva</li>
                                                <li>Traslado rápido a centro especializado</li>
                                                <li>Reevaluación continua</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico por patologías</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Accidente cerebrovascular (ACV)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Identificar síntomas con escala de Cincinnati</li>
                                                <li>Determinar hora de inicio de síntomas</li>
                                                <li>Oxígeno si SpO₂ &lt;94%</li>
                                                <li>Control de glucosa</li>
                                                <li>Traslado urgente a hospital con tomografía</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Convulsiones y estado epiléptico</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Proteger cabeza y evitar lesiones</li>
                                                <li>No introducir objetos en la boca</li>
                                                <li>Vía aérea permeable tras la convulsión</li>
                                                <li>Oxígeno si es necesario</li>
                                                <li>Control de glucosa</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Traumatismo craneoencefálico (TCE)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Inmovilización cervical si hay sospecha de trauma</li>
                                                <li>Oxígeno suplementario</li>
                                                <li>Monitorización neurológica continua</li>
                                                <li>Evitar hipotensión e hipoxia</li>
                                                <li>Traslado a centro de trauma</li>
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
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: ACV isquémico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 68 años, inicio súbito de debilidad en hemicuerpo derecho y dificultad para hablar. Última vez vista normal hace 1 hora.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 18/min, SpO₂ 96%</li>
                                            <li>C: FC 90/min, TA 150/90 mmHg</li>
                                            <li>D: Glasgow 13, afasia, hemiparesia derecha</li>
                                            <li>E: Sin trauma evidente</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluar con escala de Cincinnati</li>
                                            <li>Oxígeno si SpO₂ &lt;94%</li>
                                            <li>Control de glucosa</li>
                                            <li>Traslado urgente a hospital con tomografía</li>
                                            <li>Monitorización continua</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Convulsión tónico-clónica</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 25 años, presenta convulsión generalizada de 2 minutos, recupera conciencia lentamente.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable tras convulsión</li>
                                            <li>B: FR 20/min, SpO₂ 98%</li>
                                            <li>C: FC 100/min, TA 130/80 mmHg</li>
                                            <li>D: Confuso, orientado en minutos</li>
                                            <li>E: Sin lesiones aparentes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Proteger cabeza y evitar lesiones</li>
                                            <li>No introducir objetos en la boca</li>
                                            <li>Monitorizar signos vitales</li>
                                            <li>Control de glucosa</li>
                                            <li>Traslado para evaluación</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: TCE leve</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 40 años, caída de 2 metros, breve pérdida de conciencia, cefalea intensa.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 16/min, SpO₂ 97%</li>
                                            <li>C: FC 85/min, TA 135/85 mmHg</li>
                                            <li>D: Glasgow 15, orientado</li>
                                            <li>E: Herida en cuero cabelludo</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Inmovilización cervical</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización neurológica</li>
                                            <li>Control de hemorragia</li>
                                            <li>Traslado a centro de trauma</li>
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
                                    <li><a href="https://www.ems1.com/neurological-emergencies/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre emergencias neurológicas</a></li>
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

