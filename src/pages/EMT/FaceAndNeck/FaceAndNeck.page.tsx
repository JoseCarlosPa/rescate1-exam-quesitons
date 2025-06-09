import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./FaceAndNeck.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdFace6, MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function FaceAndNeck(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <MdFace6 className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones de Cara y Cuello</h1>
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
                            to={`${AllRoutes.FACE_AND_NECK}/exam`}
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
                        <a href="https://drive.google.com/file/d/1qfls7WXgF2-4p3Ogg5X0cMJC_wpc-XkI/view?usp=drive_link"
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Introducción a las Lesiones de Cara y Cuello</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las lesiones en la cara y el cuello son comunes en pacientes traumatizados y pueden variar desde heridas superficiales hasta condiciones que amenazan la vida. Estas áreas albergan estructuras vitales para la respiración, la circulación cerebral y funciones sensoriales.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        La principal preocupación en estas lesiones es el compromiso de la vía aérea, ya sea por obstrucción directa (sangre, tejidos, cuerpos extraños) o por edema. Además, la rica vascularización de la cara y la presencia de grandes vasos en el cuello implican un alto riesgo de hemorragia severa. Siempre se debe sospechar y manejar una posible lesión de la columna cervical.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Peligros Principales</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Compromiso de la Vía Aérea:</strong> Obstrucción por sangre, vómito, dientes, edema, hematoma expansivo o desplazamiento de tejidos.</li>
                                        <li><strong>Hemorragia Severa:</strong> Lesiones en arterias carótidas, venas yugulares o la vascularizada cara pueden causar sangrado masivo.</li>
                                        <li><strong>Lesión de Columna Cervical:</strong> Alta incidencia en traumatismos faciales y de cuello. Requiere inmovilización temprana.</li>
                                        <li><strong>Lesión Cerebral Traumática (LCT):</strong> Frecuentemente asociada con traumatismos faciales significativos.</li>
                                        <li><strong>Lesiones Penetrantes de Cuello:</strong> Pueden afectar múltiples estructuras vitales (vía aérea, vasos, esófago, médula espinal).</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos Comunes de Lesiones</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Lesiones Faciales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Contusiones y laceraciones.</li>
                                                <li>Fracturas: mandibulares, maxilares, nasales, orbitales (suelo de la órbita), cigomáticas.</li>
                                                <li>Lesiones oculares: contusiones, penetrantes, quemaduras, avulsiones.</li>
                                                <li>Avulsiones dentales.</li>
                                                <li>Epistaxis (sangrado nasal).</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Lesiones de Cuello</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Heridas penetrantes (arma blanca, proyectil de arma de fuego).</li>
                                                <li>Trauma contuso (compresión, hiperextensión, hiperflexión).</li>
                                                <li>Lesiones de laringe o tráquea (fracturas, disrupción).</li>
                                                <li>Lesiones vasculares (disección, hematoma).</li>
                                                <li>Enfisema subcutáneo.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía de la Cara</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La cara está compuesta por múltiples huesos que protegen el cerebro y albergan los órganos sensoriales:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>Huesos:</strong> Frontal, nasales, maxilares (superior e inferior/mandíbula), cigomáticos (malares), palatinos, etmoides, esfenoides, lacrimales. Las órbitas protegen los ojos.</li>
                                        <li><strong>Tejidos Blandos:</strong> Piel, músculos de la masticación y expresión facial, nervios (facial, trigémino), vasos sanguíneos.</li>
                                        <li><strong>Órganos Sensoriales:</strong> Ojos (visión), oídos (audición y equilibrio), nariz (olfato y vía aérea inicial), boca (gusto, masticación, habla, vía aérea).</li>
                                    </ul>
                                </div>
                                 <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del Cuello</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El cuello es una estructura compleja que conecta la cabeza con el torso y contiene:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>Vía Aérea Superior:</strong> Laringe (cuerdas vocales) y tráquea.</li>
                                        <li><strong>Tubo Digestivo:</strong> Faringe y esófago.</li>
                                        <li><strong>Grandes Vasos Sanguíneos:</strong> Arterias carótidas (suministro principal de sangre al cerebro) y venas yugulares (drenaje principal).</li>
                                        <li><strong>Columna Cervical:</strong> Siete vértebras (C1-C7) que protegen la médula espinal cervical.</li>
                                        <li><strong>Nervios:</strong> Médula espinal, plexo braquial, nervios craneales inferiores.</li>
                                        <li><strong>Músculos:</strong> Esternocleidomastoideo, trapecio, escalenos, etc.</li>
                                        <li><strong>Glándulas:</strong> Tiroides, paratiroides, salivales.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología Relevante</h2>
                                     <p className="text-gray-700 leading-relaxed">
                                        Las lesiones en cara y cuello pueden comprometer funciones vitales:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                        <li><strong>Respiración:</strong> Mantener una vía aérea permeable es primordial. La obstrucción o lesión directa a la laringe/tráquea es letal.</li>
                                        <li><strong>Circulación Cerebral:</strong> Las arterias carótidas y vertebrales son cruciales. Su lesión puede causar isquemia cerebral.</li>
                                        <li><strong>Función Neurológica:</strong> Lesiones cerebrales por trauma directo o secundarias a hipoxia/hipoperfusión. Lesión medular cervical con consecuencias devastadoras.</li>
                                        <li><strong>Funciones Sensoriales:</strong> Visión, audición, olfato, gusto pueden afectarse.</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación Primaria (XABCDE) Enfocada</h2>
                                    <p className="text-gray-700 leading-relaxed mb-2">
                                        Priorizar el manejo de amenazas vitales:
                                    </p>
                                    <ul className="list-disc list-inside space-y-3 text-gray-700">
                                        <li><strong>X - Control de Hemorragia Exanguinante:</strong> Aplicar presión directa firme. Considerar agentes hemostáticos si están disponibles y protocolizados para sangrado masivo no controlable.</li>
                                        <li><strong>A - Vía Aérea con Control Cervical:</strong>
                                            <ul className="list-disc list-inside ml-4 space-y-1 mt-1">
                                                <li>Asumir lesión cervical en todo trauma significativo de cara/cuello. Inmovilización manual inmediata, seguida de collarín cervical y fijación a tabla larga.</li>
                                                <li>Evaluar permeabilidad: buscar sangre, vómito, dientes rotos, edema, deformidad. Aspirar según sea necesario.</li>
                                                <li>Maniobra de elevación mandibular para abrir la vía aérea.</li>
                                                <li>Considerar cánula orofaríngea (paciente inconsciente sin reflejo nauseoso) o nasofaríngea (con precaución en trauma facial severo).</li>
                                            </ul>
                                        </li>
                                        <li><strong>B - Ventilación:</strong> Administrar oxígeno a alto flujo. Evaluar frecuencia, profundidad y calidad de la respiración. Asistir ventilaciones con BVM si es inadecuada. Buscar signos de neumotórax.</li>
                                        <li><strong>C - Circulación:</strong> Controlar todas las hemorragias. Evaluar pulso (calidad, frecuencia, regularidad), color, temperatura y humedad de la piel, llenado capilar. Manejar el shock (fluidoterapia IV juiciosa según protocolo).</li>
                                        <li><strong>D - Déficit Neurológico:</strong> Evaluar nivel de conciencia (AVDI, Glasgow). Examinar pupilas. Evaluar función motora y sensorial en extremidades.</li>
                                        <li><strong>E - Exposición y Entorno:</strong> Exponer completamente al paciente para identificar todas las lesiones. Prevenir la hipotermia.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo Específico de Lesiones Faciales</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Lesiones Oculares</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Objeto Empalado:</strong> NO retirar. Estabilizar el objeto. Cubrir AMBOS ojos para minimizar el movimiento del ojo afectado.</li>
                                                <li><strong>Avulsión del Globo Ocular:</strong> NO intentar reintroducir. Cubrir con un apósito estéril húmedo (solución salina). Proteger de la presión.</li>
                                                <li><strong>Quemaduras Químicas:</strong> Irrigar abundantemente con agua o solución salina por al menos 20 minutos, desde el canto interno hacia el externo.</li>
                                                <li><strong>Laceraciones Palpebrales:</strong> Cubrir con apósito estéril.</li>
                                                <li><strong>Contusión Ocular (Ojo morado):</strong> Sospechar fractura orbitaria o lesión interna.</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Otras Lesiones Faciales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Heridas en Tejidos Blandos:</strong> Controlar sangrado con presión directa. Cubrir con apósito estéril.</li>
                                                <li><strong>Avulsión de Tejido:</strong> Si se recupera el tejido avulsionado, envolverlo en gasa estéril húmeda y transportarlo con el paciente.</li>
                                                <li><strong>Epistaxis (Sangrado Nasal):</strong> Paciente sentado e inclinado hacia adelante. Comprimir fosas nasales. Considerar taponamiento anterior si está protocolizado.</li>
                                                <li><strong>Fracturas Faciales (Mandíbula, Maxilar, Nasal, Cigomático):</strong> Mantener vía aérea permeable. Vigilar edema. Controlar sangrado.</li>
                                                <li><strong>Avulsión Dental:</strong> Recuperar el diente, manipularlo por la corona. Transportar en solución salina, leche o saliva del paciente.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                 <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo Específico de Lesiones de Cuello</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Heridas Penetrantes de Cuello</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Alto índice de mortalidad y morbilidad. NO sondear la herida. NO retirar objetos empalados.</li>
                                                <li>Control de hemorragia: Presión directa sobre el sitio de sangrado. Cuidado de no comprimir la tráquea o ambas carótidas simultáneamente.</li>
                                                <li>Si hay herida soplante (sospecha de lesión vascular mayor o vía aérea): aplicar vendaje oclusivo de tres lados o completo según protocolo para prevenir embolia aérea.</li>
                                                <li>Vigilar signos de compromiso de vía aérea (estridor, disfonía, enfisema subcutáneo, hematoma expansivo).</li>
                                                <li>Inmovilización cervical estricta. Transporte rápido.</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Trauma Contuso de Cuello</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Puede causar fracturas laríngeas/traqueales, lesiones vasculares ocultas.</li>
                                                <li>Signos de alerta: disfonía, enfisema subcutáneo en cuello, dificultad respiratoria, estridor, hematoma.</li>
                                                <li>Manejo cuidadoso de la vía aérea. Inmovilización cervical.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos Clínicos para Análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Trauma Facial Contuso</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 30 años involucrado en una riña, recibe múltiples golpes en la cara. Presenta hinchazón facial significativa, deformidad en la mandíbula, epistaxis y dificultad para tragar saliva. Está consciente pero agitado.
                                    </p>
                                    <h4 className="font-medium mb-2">Evaluación (XABCDE):</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>X: Epistaxis moderada, controlable con presión.</li>
                                        <li>A: Vía aérea comprometida por sangre y posible edema. Ruidos de gorgoteo. Control cervical manual.</li>
                                        <li>B: FR 22/min, SpO₂ 95% con oxígeno por mascarilla. Murmullo vesicular presente.</li>
                                        <li>C: FC 110/min, TA 130/80 mmHg. Piel pálida.</li>
                                        <li>D: GCS 14 (agitado, confuso). Pupilas reactivas.</li>
                                        <li>E: Hematomas y laceraciones en cara. Resto sin hallazgos.</li>
                                    </ul>
                                    <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>Inmovilización cervical completa (collarín y fijación).</li>
                                        <li>Aspiración de la vía aérea.</li>
                                        <li>Administrar oxígeno a alto flujo.</li>
                                        <li>Control de epistaxis (presión, inclinación).</li>
                                        <li>Evaluar necesidad de vía aérea avanzada si el compromiso aumenta.</li>
                                        <li>Transporte rápido a centro de trauma.</li>
                                    </ol>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Herida Penetrante en Cuello</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 25 años con herida por arma blanca en la región lateral derecha del cuello. Presenta sangrado activo, enfisema subcutáneo palpable y disfonía.
                                    </p>
                                    <h4 className="font-medium mb-2">Evaluación (XABCDE):</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>X: Sangrado arterial moderado de la herida.</li>
                                        <li>A: Dificultad para hablar (disfonía), posible hematoma en expansión. Control cervical.</li>
                                        <li>B: FR 24/min, SpO₂ 96% con O₂. Enfisema subcutáneo en cuello.</li>
                                        <li>C: FC 120/min, TA 100/70 mmHg. Piel pálida y fría.</li>
                                        <li>D: GCS 15, ansiosa.</li>
                                        <li>E: Herida penetrante visible.</li>
                                    </ul>
                                    <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>Control de hemorragia con presión directa firme sobre la herida.</li>
                                        <li>Administrar oxígeno a alto flujo.</li>
                                        <li>Inmovilización cervical completa.</li>
                                        <li>NO sondear la herida.</li>
                                        <li>Considerar vendaje oclusivo si hay sospecha de lesión vascular mayor (herida soplante).</li>
                                        <li>Transporte urgente a centro de trauma, notificando posible vía aérea quirúrgica.</li>
                                    </ol>
                                </div>
                                 <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Lesión Ocular Penetrante</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Trabajador de la construcción de 40 años sufre impacto de un fragmento metálico en el ojo derecho. Refiere dolor intenso y visión borrosa. Se observa un pequeño fragmento incrustado en la córnea.
                                    </p>
                                    <h4 className="font-medium mb-2">Evaluación (XABCDE):</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>X: Sin hemorragia exanguinante.</li>
                                        <li>A: Vía aérea permeable. Control cervical si el mecanismo lo sugiere (caída asociada, etc.).</li>
                                        <li>B: FR 18/min, SpO₂ 99% aire ambiente.</li>
                                        <li>C: FC 90/min, TA 140/85 mmHg (dolor).</li>
                                        <li>D: GCS 15. Dolor ocular intenso.</li>
                                        <li>E: Fragmento visible en córnea derecha.</li>
                                    </ul>
                                    <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>NO intentar retirar el objeto.</li>
                                        <li>Estabilizar el objeto si es grande; si es pequeño como en este caso, no manipular.</li>
                                        <li>Cubrir el ojo afectado con un protector ocular rígido (no un parche compresivo).</li>
                                        <li>Cubrir TAMBIÉN el ojo sano para minimizar movimientos oculares simpáticos.</li>
                                        <li>Colocar al paciente en posición semisentada si es tolerada.</li>
                                        <li>Transporte cuidadoso al hospital, preferiblemente a uno con servicio de oftalmología.</li>
                                    </ol>
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

