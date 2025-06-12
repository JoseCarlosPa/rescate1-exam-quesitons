import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ToraxInjuries.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {GiTrenchBodyArmor} from "react-icons/gi";

export default function ToraxInjuries(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <GiTrenchBodyArmor className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones en el tórax</h1>
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
                            to={`${AllRoutes.TORAX_INJURIES}/exam`}
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
                        <a href="https://drive.google.com/file/d/1I7KSMNRJJuFEDqTvrVCr2ccWfgehH8Ff/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full relative">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Lesiones torácicas</h3>
                                <p className="mb-4 text-gray-700">¿Cuál de las siguientes lesiones torácicas requiere intervención inmediata?</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                    <li>Contusión pulmonar</li>
                                    <li>Neumotórax a tensión</li>
                                    <li>Fractura de costilla única</li>
                                    <li>Contusión en pared torácica</li>
                                </ul>
                                <p className="text-gray-700 mb-4">Respuesta: El neumotórax a tensión es una emergencia que requiere descompresión inmediata, ya que puede causar colapso cardiovascular rápidamente.</p>
                                <button
                                    onClick={() => setShowQuickQuiz(false)}
                                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition">
                                    Cerrar Quiz
                                </button>
                            </div>
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las lesiones torácicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las lesiones torácicas son traumatismos que afectan a la caja torácica, los órganos contenidos en ella (pulmones, corazón, grandes vasos) y las estructuras circundantes. Son potencialmente mortales, ya que pueden comprometer rápidamente la función respiratoria y circulatoria.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Según la AAOS (11ª edición), las lesiones torácicas son una causa importante de mortalidad en trauma, siendo responsables del 25% de las muertes traumáticas. El reconocimiento y manejo prehospitalario adecuado puede ser determinante para la supervivencia.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mecanismos de lesión</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Trauma contuso (accidentes de tráfico, caídas)</li>
                                            <li>Trauma penetrante (armas blancas, armas de fuego)</li>
                                            <li>Onda expansiva (explosiones)</li>
                                            <li>Compresión torácica</li>
                                            <li>Desaceleración rápida</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Lesiones por aplastamiento</li>
                                            <li>Lesiones por iatrogenia</li>
                                            <li>Trauma deportivo</li>
                                            <li>Lesiones por inhalación</li>
                                            <li>Barotrauma (cambios de presión)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Clasificación de lesiones torácicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Lesiones que amenazan la vida (prioridad inmediata)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Neumotórax a tensión</li>
                                                <li>Hemotórax masivo</li>
                                                <li>Tórax inestable (volet costal)</li>
                                                <li>Taponamiento cardíaco</li>
                                                <li>Lesiones de vía aérea</li>
                                                <li>Ruptura traumática de aorta</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Lesiones potencialmente graves</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Neumotórax simple</li>
                                                <li>Hemotórax menor</li>
                                                <li>Contusión pulmonar</li>
                                                <li>Fracturas costales</li>
                                                <li>Contusión miocárdica</li>
                                                <li>Lesiones esofágicas</li>
                                                <li>Ruptura diafragmática</li>
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del tórax</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El tórax es la cavidad del cuerpo humano situada entre el cuello y el abdomen, protegiendo órganos vitales:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Pared torácica:</strong> Formada por esternón, 12 pares de costillas, músculos intercostales y columna vertebral dorsal.</li>
                                            <li><strong>Órganos principales:</strong> Pulmones, corazón, grandes vasos sanguíneos, esófago y parte superior de diafragma.</li>
                                            <li><strong>Pleura:</strong> Membrana serosa que recubre los pulmones (visceral) y la cavidad torácica (parietal).</li>
                                            <li><strong>Mediastino:</strong> Compartimento central que contiene corazón, timo, esófago y tráquea.</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="/src/assets/netter.webp"
                                            alt="Anatomía del tórax"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología respiratoria y circulatoria</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Sistema respiratorio</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La ventilación pulmonar requiere:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Integridad de la pared torácica</li>
                                                <li>Diafragma y músculos intercostales funcionales</li>
                                                <li>Espacio pleural con presión negativa</li>
                                                <li>Vía aérea permeable</li>
                                                <li>Adecuada superficie de intercambio gaseoso</li>
                                            </ul>
                                            <p className="text-gray-700 mt-4">
                                                Las lesiones torácicas alteran estos componentes, comprometiendo la ventilación y oxigenación.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Sistema circulatorio intratorácico</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Componentes críticos:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Corazón como bomba principal</li>
                                                <li>Grandes vasos (aorta, vena cava, arterias y venas pulmonares)</li>
                                                <li>Retorno venoso dependiente de presión intratorácica</li>
                                                <li>Pericardio como envoltura protectora del corazón</li>
                                            </ul>
                                            <p className="text-gray-700 mt-4">
                                                El compromiso circulatorio en trauma torácico puede ocurrir por sangrado, compresión cardíaca o alteración de la precarga.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiopatología de lesiones comunes</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Lesión</th>
                                                    <th className="py-2 px-4 border">Mecanismo fisiopatológico</th>
                                                    <th className="py-2 px-4 border">Consecuencias</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Neumotórax a tensión</td>
                                                    <td className="py-2 px-4 border">Acumulación progresiva de aire en espacio pleural con efecto válvula unidireccional</td>
                                                    <td className="py-2 px-4 border">Colapso pulmonar, desviación mediastínica, reducción del retorno venoso</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Hemotórax</td>
                                                    <td className="py-2 px-4 border">Acumulación de sangre en espacio pleural por lesión vascular</td>
                                                    <td className="py-2 px-4 border">Colapso pulmonar, hipovolemia, pérdida de capacidad de intercambio gaseoso</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Tórax inestable</td>
                                                    <td className="py-2 px-4 border">Fracturas múltiples de costillas que causan segmento torácico inestable</td>
                                                    <td className="py-2 px-4 border">Movimiento paradójico, respiración ineficaz, contusión pulmonar subyacente</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Taponamiento cardíaco</td>
                                                    <td className="py-2 px-4 border">Acumulación de sangre en saco pericárdico</td>
                                                    <td className="py-2 px-4 border">Compresión cardíaca, reducción del llenado ventricular, shock obstructivo</td>
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo básico de la vía aérea</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación primaria (ABCDE)</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>A:</strong> Vía aérea con control cervical</li>
                                                <li><strong>B:</strong> Evaluación torácica rápida: movimientos simétricos, heridas, crepitación, enfisema subcutáneo</li>
                                                <li><strong>C:</strong> Circulación y control de hemorragias, valoración de shock</li>
                                                <li><strong>D:</strong> Evaluación neurológica</li>
                                                <li><strong>E:</strong> Exposición y entorno, evitar hipotermia</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Signos y síntomas específicos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Disnea o dificultad respiratoria</li>
                                                <li>Dolor torácico, especialmente al respirar</li>
                                                <li>Desviación traqueal (emergencia inmediata)</li>
                                                <li>Ingurgitación yugular</li>
                                                <li>Ruidos respiratorios ausentes o disminuidos</li>
                                                <li>Cianosis o palidez</li>
                                                <li>Tono cardíaco apagado</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Asma severa</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 23 años con antecedente de asma. Tras exposición a alérgeno presenta disnea progresiva,
                                        sibilancias audibles y uso de músculos accesorios. No puede completar frases.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable con sibilancias</li>
                                            <li>B: FR 28/min, SpO₂ 88%, uso de músculos accesorios</li>
                                            <li>C: FC 125/min, TA 140/90 mmHg</li>
                                            <li>D: Alerta, ansiosa</li>
                                            <li>E: Sin hallazgos relevantes</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición sentada</li>
                                            <li>Oxígeno con mascarilla (10-15 L/min)</li>
                                            <li>Broncodilatador (salbutamol) con cámara espaciadora</li>
                                            <li>Monitorización continua</li>
                                            <li>Traslado rápido a centro hospitalario</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Obstrucción de vía aérea</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 65 años que durante una comida súbitamente se levanta, lleva las manos al cuello y no puede hablar ni toser.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Obstrucción completa de vía aérea</li>
                                            <li>B: No hay entrada de aire</li>
                                            <li>C: Signos de buena perfusión inicial</li>
                                            <li>D: Consciente, agitado</li>
                                            <li>E: Signo universal de asfixia (manos al cuello)</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Confirmar obstrucción completa (preguntando "¿se está atragantando?")</li>
                                            <li>Realizar compresiones abdominales (maniobra de Heimlich)</li>
                                            <li>Continuar hasta desobstrucción o pérdida de conciencia</li>
                                            <li>Si pierde conciencia, iniciar RCP</li>
                                            <li>Durante RCP, verificar cavidad oral antes de ventilaciones</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: EPOC exacerbado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 72 años con antecedente de EPOC y oxígeno domiciliario. Presenta aumento de disnea y
                                        expectoración purulenta desde hace 3 días.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24/min, SpO₂ 84%, uso moderado de músculos accesorios</li>
                                            <li>C: FC 110/min, TA 145/85 mmHg</li>
                                            <li>D: Alerta, orientado</li>
                                            <li>E: Temperatura 38.2°C, esputo verdoso</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición semisentada</li>
                                            <li>Oxígeno controlado (iniciar a 2-3 L/min) para mantener SpO₂ 88-92%</li>
                                            <li>Broncodilatador en nebulización o inhalador</li>
                                            <li>Monitorización continua, vigilando nivel de conciencia</li>
                                            <li>Traslado al hospital para tratamiento definitivo</li>
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
                                    <li><a href="https://www.ems1.com/airway-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre manejo de vía aérea</a></li>
                                    <li><a href="https://www.jems.com/patient-care/airway-respiratory/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de cuidado respiratorio</a></li>
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
