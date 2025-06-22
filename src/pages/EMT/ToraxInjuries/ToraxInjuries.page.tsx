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
                                        Las lesiones torácicas son una causa importante de mortalidad en trauma, siendo responsables del 25% de las muertes traumáticas. El reconocimiento y manejo prehospitalario adecuado puede ser determinante para la supervivencia.
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
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Principios Generales de Manejo Prehospitalario</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación Primaria Focalizada (XABCDE)</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>X:</strong> Control de hemorragias externas exanguinantes (si aplica).</li>
                                                <li><strong>A:</strong> Vía aérea permeable con control de columna cervical.</li>
                                                <li><strong>B:</strong> Ventilación y oxigenación. Evaluar frecuencia, profundidad, simetría, ruidos respiratorios y buscar signos de lesiones específicas (heridas soplantes, movimiento paradójico).</li>
                                                <li><strong>C:</strong> Circulación. Evaluar pulso, coloración de la piel, temperatura, llenado capilar y buscar signos de shock (hipotensión, taquicardia).</li>
                                                <li><strong>D:</strong> Déficit neurológico (escala de Glasgow).</li>
                                                <li><strong>E:</strong> Exposición completa del tórax, buscando lesiones y protegiendo de la hipotermia.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Intervenciones Fundamentales</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Administración de oxígeno a alto flujo para mantener SpO₂ &gt; 94%.</li>
                                                <li>Manejo avanzado de la vía aérea si es necesario (BVM, intubación).</li>
                                                <li>Control de hemorragias visibles.</li>
                                                <li>Monitorización continua de signos vitales (ECG, SpO₂, ETCO₂).</li>
                                                <li>Traslado rápido y comunicación con el hospital receptor.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo Específico de Lesiones Críticas</h2>
                                    <div className="space-y-6">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-semibold text-lg text-red-800 mb-2">Neumotórax Abierto (Herida Torácica Aspirante)</h3>
                                            <p className="text-gray-700"><strong>Objetivo:</strong> Sellar el defecto y prevenir el neumotórax a tensión.</p>
                                            <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Sellar la herida con un apósito oclusivo comercial (parche torácico con válvula) o uno improvisado fijado en 3 lados.</li>
                                                <li>Vigilar de cerca al paciente por si desarrolla un neumotórax a tensión. Si ocurre, levantar el apósito momentáneamente.</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-semibold text-lg text-red-800 mb-2">Neumotórax a Tensión</h3>
                                            <p className="text-gray-700"><strong>Objetivo:</strong> Liberar la presión del espacio pleural.</p>
                                            <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Reconocimiento inmediato basado en signos clínicos: dificultad respiratoria severa, hipotensión, ingurgitación yugular, desviación traqueal (tardío).</li>
                                                <li>Si la causa es un sello oclusivo, levantarlo momentáneamente.</li>
                                                <li>Si el proveedor está autorizado (Paramédico), realizar descompresión torácica con aguja.</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-semibold text-lg text-yellow-800 mb-2">Tórax Inestable (Volet Costal)</h3>
                                            <p className="text-gray-700"><strong>Objetivo:</strong> Mejorar la ventilación y tratar el dolor.</p>
                                            <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
                                                <li>La principal amenaza es la contusión pulmonar subyacente, no el segmento inestable en sí.</li>
                                                <li>Asegurar una oxigenación adecuada. La ventilación con presión positiva (BVM) es el tratamiento más efectivo para estabilizar el segmento desde adentro.</li>
                                                <li>Evitar la inmovilización externa con objetos pesados o vendajes compresivos que restrinjan la respiración.</li>
                                                <li>Manejo del dolor si está permitido por el protocolo.</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-semibold text-lg text-blue-800 mb-2">Hemotórax Masivo</h3>
                                            <p className="text-gray-700"><strong>Objetivo:</strong> Tratar el shock hipovolémico y transporte rápido.</p>
                                            <ol className="list-decimal list-inside space-y-1 mt-2 text-gray-700">
                                                <li>El manejo prehospitalario es de soporte. No se puede drenar la sangre en el campo.</li>
                                                <li>Tratar el shock con oxígeno a alto flujo.</li>
                                                <li>Establecer acceso intravenoso (IV) o intraóseo (IO) y administrar fluidos según protocolo (hipotensión permisiva).</li>
                                                <li>Transporte inmediato a un centro de trauma.</li>
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
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Neumotórax Abierto</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Masculino de 25 años que sufre una herida por arma blanca en el hemitórax derecho durante una riña. A su llegada, lo encuentra consciente, con dificultad respiratoria y se escucha un sonido de "succión" proveniente de la herida.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable, habla con frases cortas.</li>
                                            <li>B: FR 30/min, SpO₂ 91%, ruidos respiratorios disminuidos en hemitórax derecho, herida "soplante".</li>
                                            <li>C: FC 120/min, TA 110/70 mmHg, piel pálida y fría.</li>
                                            <li>D: Alerta, ansioso.</li>
                                            <li>E: Herida penetrante de 3 cm en 4º espacio intercostal, línea medio-clavicular derecha.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Administrar oxígeno a alto flujo con mascarilla no recirculante.</li>
                                            <li>Sellar la herida con un parche torácico oclusivo con válvula (o un apósito oclusivo fijado en 3 lados).</li>
                                            <li>Colocar al paciente en posición de comodidad, usualmente semisentado.</li>
                                            <li>Monitorizar signos vitales y vigilar desarrollo de neumotórax a tensión.</li>
                                            <li>Traslado rápido al hospital.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Tórax Inestable</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Conductor de 45 años involucrado en colisión frontal sin cinturón de seguridad. Impactó el tórax contra el volante. Se queja de dolor torácico intenso y "falta de aire".
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable.</li>
                                            <li>B: FR 28/min, respiraciones superficiales, se observa un segmento del tórax izquierdo que se hunde durante la inspiración (movimiento paradójico). Crepitación a la palpación.</li>
                                            <li>C: FC 115/min, TA 100/60 mmHg.</li>
                                            <li>D: Consciente, orientado, adolorido.</li>
                                            <li>E: Equimosis grande en la pared torácica anterolateral izquierda.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Estabilización manual de la vía aérea y control cervical si se sospecha trauma espinal.</li>
                                            <li>Administrar oxígeno a alto flujo. Considerar ventilación con presión positiva (BVM) si la respiración es inadecuada para estabilizar el segmento.</li>
                                            <li>No colocar objetos pesados (ej. bolsas de arena) sobre el segmento inestable.</li>
                                            <li>Monitorización continua de SpO₂ y estado ventilatorio.</li>
                                            <li>Traslado urgente, notificando al hospital sobre la sospecha de tórax inestable.</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Neumotórax a Tensión</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Durante el traslado del paciente del Caso 1, su estado se deteriora rápidamente. Presenta marcada ansiedad, cianosis peribucal y su dificultad respiratoria es extrema.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable.</li>
                                            <li>B: FR 35/min, ruidos respiratorios ausentes en hemitórax derecho. SpO₂ cae a 82%.</li>
                                            <li>C: FC 140/min, TA 80/50 mmHg, ingurgitación yugular visible.</li>
                                            <li>D: Disminución del nivel de conciencia, agitado.</li>
                                            <li>E: Desviación traqueal hacia el lado izquierdo (signo tardío).</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>¡Emergencia inmediata! Levantar momentáneamente una esquina del parche oclusivo para permitir que el aire atrapado escape ("eructar" el sello).</li>
                                            <li>Si está capacitado y autorizado (nivel paramédico), realizar descompresión con aguja en el 2º espacio intercostal, línea medioclavicular, o 5º espacio intercostal, línea axilar anterior.</li>
                                            <li>Reevaluar continuamente ABCs. Debería haber una mejora casi inmediata.</li>
                                            <li>Notificar al hospital sobre el desarrollo de neumotórax a tensión y el procedimiento realizado.</li>
                                            <li>Continuar traslado de emergencia.</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        )}

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

                    {/* Footer */}
                    <footer className="mt-8 text-center text-gray-500 text-sm">
                        <p>© 2023 - Todos los derechos reservados</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
