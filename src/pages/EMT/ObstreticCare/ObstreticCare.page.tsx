import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ObstreticCare.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiBabyBold, PiChalkboardTeacher} from "react-icons/pi";

export default function ObstreticCare(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <PiBabyBold className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Cuidados Obstétricos y neonatales</h1>
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
                            to={`${AllRoutes.OBSTETRIC_CARE}/exam`}
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
                        <a href="https://drive.google.com/file/d/1lwFtdw_vrblfCEgu8w23Yxoij3DmK3Jm/view?usp=drive_link"
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
                                Evaluación y Complicaciones
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Parto y Cuidados Neonatales
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son los cuidados obstétricos y neonatales?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Los cuidados obstétricos se refieren a la atención médica proporcionada a las mujeres durante el embarazo, 
                                        el trabajo de parto y el parto. Los cuidados neonatales involucran la atención inmediata del recién nacido 
                                        durante los primeros minutos y horas de vida.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        En el ámbito prehospitalario, estos cuidados incluyen la evaluación de emergencias obstétricas, 
                                        la asistencia durante el parto de emergencia y la reanimación neonatal básica.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias obstétricas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Sangrado durante el embarazo</li>
                                            <li>Trabajo de parto prematuro</li>
                                            <li>Ruptura prematura de membranas</li>
                                            <li>Presentaciones anormales del feto</li>
                                            <li>Prolapso de cordón umbilical</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Preeclampsia y eclampsia</li>
                                            <li>Placenta previa</li>
                                            <li>Desprendimiento prematuro de placenta</li>
                                            <li>Retención de placenta</li>
                                            <li>Hemorragia postparto</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Etapas del trabajo de parto</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Primera etapa: Dilatación</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Comienza con contracciones regulares</li>
                                                <li>Dilatación del cérvix hasta 10 cm</li>
                                                <li>Duración: 6-12 horas (primípara)</li>
                                                <li>2-7 horas (multípara)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Segunda etapa: Expulsión</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dilatación completa hasta nacimiento</li>
                                                <li>Descenso y rotación del feto</li>
                                                <li>Duración: 30 min-3 horas (primípara)</li>
                                                <li>5-30 minutos (multípara)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Tercera etapa: Alumbramiento</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Separación y expulsión de placenta</li>
                                                <li>Contracción uterina para hemostasia</li>
                                                <li>Duración: 5-30 minutos</li>
                                                <li>Evaluación de placenta completa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">🚨 Indicadores de parto inminente</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>Contracciones:</strong> Cada 2-3 minutos, duración 45-60 segundos</li>
                                        <li><strong>Coronamiento:</strong> Visualización de la cabeza del bebé</li>
                                        <li><strong>Urgencia de pujar:</strong> Sensación irresistible de evacuar</li>
                                        <li><strong>Ruptura de membranas:</strong> "Se rompió la fuente"</li>
                                        <li><strong>Multípara:</strong> Antecedente de partos rápidos previos</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación de la paciente obstétrica</h2>
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Historia obstétrica esencial</h3>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li><strong>GPAC:</strong> Gestaciones, Partos, Abortos, Cesáreas</li>
                                            <li><strong>Edad gestacional:</strong> Fecha de última menstruación (FUM)</li>
                                            <li><strong>Contracciones:</strong> Frecuencia, duración, intensidad</li>
                                            <li><strong>Sangrado:</strong> Cantidad, color, momento de inicio</li>
                                            <li><strong>Ruptura de membranas:</strong> "¿Se rompió la fuente?"</li>
                                            <li><strong>Movimientos fetales:</strong> Actividad del bebé</li>
                                            <li><strong>Complicaciones previas:</strong> Diabetes, hipertensión</li>
                                        </ol>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principales complicaciones obstétricas</h2>
                                    <div className="space-y-4">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-red-700">Placenta Previa</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Sangrado:</strong> Rojo brillante, indoloro</li>
                                                    <li><strong>Inicio:</strong> Tercer trimestre</li>
                                                    <li><strong>Manejo:</strong> NO examen vaginal</li>
                                                    <li><strong>Transporte:</strong> Inmediato para cesárea</li>
                                                </ul>
                                            </div>
                                            <div className="bg-purple-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-purple-700">Desprendimiento de Placenta</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Sangrado:</strong> Rojo oscuro, CON dolor</li>
                                                    <li><strong>Dolor:</strong> Abdominal constante y severo</li>
                                                    <li><strong>Útero:</strong> Rígido, hipersensible</li>
                                                    <li><strong>Riesgo:</strong> Shock materno y fetal</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="bg-yellow-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-yellow-700">Preeclampsia</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Triada:</strong> Hipertensión, proteinuria, edema</li>
                                                    <li><strong>Síntomas:</strong> Cefalea, visión borrosa</li>
                                                    <li><strong>Dolor:</strong> Epigástrico</li>
                                                    <li><strong>Riesgo:</strong> Convulsiones (eclampsia)</li>
                                                </ul>
                                            </div>
                                            <div className="bg-orange-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-orange-700">Prolapso de Cordón</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Emergencia:</strong> Crítica, asfixia fetal</li>
                                                    <li><strong>Manejo:</strong> Levantar presentación fetal</li>
                                                    <li><strong>Posición:</strong> Trendelenburg o genupectoral</li>
                                                    <li><strong>Oxígeno:</strong> Alto flujo a la madre</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos de alarma durante el embarazo</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border text-left">Síntoma</th>
                                                    <th className="py-2 px-4 border text-left">Posible causa</th>
                                                    <th className="py-2 px-4 border text-left">Acción inmediata</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Sangrado vaginal abundante</td>
                                                    <td className="py-2 px-4 border">Placenta previa, desprendimiento</td>
                                                    <td className="py-2 px-4 border">Transporte inmediato, IV</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Dolor abdominal severo</td>
                                                    <td className="py-2 px-4 border">Desprendimiento, ruptura uterina</td>
                                                    <td className="py-2 px-4 border">Evaluación rápida, O₂</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Cefalea + visión borrosa</td>
                                                    <td className="py-2 px-4 border">Preeclampsia/eclampsia</td>
                                                    <td className="py-2 px-4 border">Control PA, anticonvulsivos</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Convulsiones</td>
                                                    <td className="py-2 px-4 border">Eclampsia</td>
                                                    <td className="py-2 px-4 border">Proteger vía aérea, magnesio</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Ausencia movimientos fetales</td>
                                                    <td className="py-2 px-4 border">Sufrimiento fetal</td>
                                                    <td className="py-2 px-4 border">O₂ materno, posición lateral</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Factores de riesgo obstétrico</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Factores maternos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Edad &lt;18 o &gt;35 años</li>
                                                <li>Diabetes mellitus</li>
                                                <li>Hipertensión crónica</li>
                                                <li>Obesidad mórbida</li>
                                                <li>Abuso de sustancias</li>
                                                <li>Historia de pérdidas previas</li>
                                                <li>Cirugías uterinas previas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Factores fetales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Embarazo múltiple (gemelos)</li>
                                                <li>Crecimiento intrauterino retardado</li>
                                                <li>Macrosomía fetal</li>
                                                <li>Malformaciones congénitas</li>
                                                <li>Presentaciones anormales</li>
                                                <li>Oligohidramnios/polihidramnios</li>
                                                <li>Incompatibilidad Rh</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-red-700">⚠️ Signos de emergencia obstétrica inmediata</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>Shock materno:</strong> Hipotensión, taquicardia, palidez, diaforesis</li>
                                        <li><strong>Sangrado masivo:</strong> &gt;500ml o empapa &gt;1 toalla/hora</li>
                                        <li><strong>Convulsiones:</strong> En paciente con hipertensión del embarazo</li>
                                        <li><strong>Prolapso de cordón:</strong> Cordón visible en introito vaginal</li>
                                        <li><strong>Ruptura uterina:</strong> Dolor súbito con cese de contracciones</li>
                                        <li><strong>Embolia de líquido amniótico:</strong> Dificultad respiratoria súbita</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Preparación para parto de emergencia</h2>
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Kit obstétrico básico</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sábanas estériles o limpias</li>
                                                <li>Guantes estériles</li>
                                                <li>Clampeo y tijeras para cordón</li>
                                                <li>Jeringa de perilla para succión</li>
                                                <li>Toallas para secar al bebé</li>
                                            </ul>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Mantas para abrigar</li>
                                                <li>Bolsas para placenta</li>
                                                <li>Toallas sanitarias</li>
                                                <li>Oxígeno para madre y bebé</li>
                                                <li>Material para IV</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Procedimiento del parto normal</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Paso 1: Preparación</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Llamar para apoyo médico adicional</li>
                                                <li>Posicionar a la madre cómodamente (semi-sentada)</li>
                                                <li>Preparar área estéril bajo las caderas</li>
                                                <li>Lavarse las manos y usar guantes estériles</li>
                                                <li>Verificar materiales del kit obstétrico</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Paso 2: Nacimiento de la cabeza</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Observar el coronamiento (aparición de la cabeza)</li>
                                                <li><strong>NO tirar</strong> de la cabeza del bebé</li>
                                                <li>Apoyar suavemente la cabeza mientras emerge</li>
                                                <li>Verificar si hay cordón alrededor del cuello</li>
                                                <li>Si hay cordón: intentar pasarlo sobre la cabeza o clampear y cortar</li>
                                                <li>Succionar boca primero, luego nariz (solo si es necesario)</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Paso 3: Nacimiento del cuerpo</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>La cabeza rotará naturalmente (restitución)</li>
                                                <li>Sostener la cabeza y cuello firmemente</li>
                                                <li>Aplicar presión suave hacia abajo para el hombro anterior</li>
                                                <li>Luego presión suave hacia arriba para el hombro posterior</li>
                                                <li>El resto del cuerpo saldrá rápidamente</li>
                                                <li><strong>¡El bebé estará resbaloso!</strong> Sostener firmemente</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cuidados inmediatos del recién nacido</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Pasos iniciales (30 segundos)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>Secar vigorosamente</strong> al bebé</li>
                                                <li><strong>Mantener caliente</strong> (piel con piel)</li>
                                                <li><strong>Estimular respiración</strong> (frotar espalda/pies)</li>
                                                <li><strong>Posicionar</strong> para abrir vía aérea</li>
                                                <li><strong>Succionar</strong> solo si hay secreciones visibles</li>
                                            </ol>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Evaluación APGAR (1 y 5 min)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>A</strong>pariencia (color de piel)</li>
                                                <li><strong>P</strong>ulso (frecuencia cardíaca)</li>
                                                <li><strong>G</strong>esticulación (reflejos)</li>
                                                <li><strong>A</strong>ctividad (tono muscular)</li>
                                                <li><strong>R</strong>espiración (esfuerzo respiratorio)</li>
                                                <li>Cada parámetro: 0, 1 o 2 puntos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Reanimación neonatal</h2>
                                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">Indicaciones para reanimación</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Ausencia de respiración después de secar y estimular</li>
                                            <li>Frecuencia cardíaca &lt;100 latidos por minuto</li>
                                            <li>Cianosis central persistente</li>
                                            <li>Tono muscular flácido</li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Ventilación con presión positiva (VPP)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Frecuencia:</strong> 40-60 ventilaciones por minuto</li>
                                                <li><strong>Presión:</strong> 20-25 cmH₂O inicialmente</li>
                                                <li><strong>Técnica:</strong> Sellado hermético con mascarilla</li>
                                                <li><strong>Evaluación:</strong> Cada 30 segundos</li>
                                                <li><strong>Oxígeno:</strong> Iniciar con aire ambiente</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Compresiones cardíacas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Indicación:</strong> FC &lt;60 después de 30 seg de VPP</li>
                                                <li><strong>Técnica:</strong> Dos pulgares en tercio inferior del esternón</li>
                                                <li><strong>Profundidad:</strong> 1/3 del diámetro anteroposterior</li>
                                                <li><strong>Relación:</strong> 3 compresiones : 1 ventilación</li>
                                                <li><strong>Frecuencia:</strong> 120 eventos por minuto</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo del cordón umbilical y placenta</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Clampeo del cordón</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Esperar al menos 1-3 minutos (si bebé está bien)</li>
                                                <li>Primer clamp a 15 cm del bebé</li>
                                                <li>Segundo clamp a 5 cm del primero</li>
                                                <li>Cortar entre los dos clamps</li>
                                                <li>Verificar hemostasia</li>
                                            </ol>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Alumbramiento</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>NO tirar</strong> del cordón</li>
                                                <li>Esperar signos de separación</li>
                                                <li>Masaje uterino suave si es necesario</li>
                                                <li>Guardar placenta para examen</li>
                                                <li>Evaluar sangrado postparto</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">🚨 Complicaciones que requieren acción inmediata</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>Presentación de nalgas:</strong> No tirar, permitir nacimiento espontáneo hasta los hombros</li>
                                        <li><strong>Prolapso de cordón:</strong> Levantar presentación, posición genupectoral</li>
                                        <li><strong>Hemorragia postparto:</strong> Masaje uterino, IV, oxitocina si disponible</li>
                                        <li><strong>Retención de placenta:</strong> No tirar del cordón, transporte inmediato</li>
                                        <li><strong>Bebé sin respiración:</strong> Secar, estimular, VPP según protocolo</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Parto precipitado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 28 años, G3P2, embarazo de 38 semanas. Llama al 911 refiriendo contracciones intensas cada 2 minutos.
                                        Al llegar, observas coronamiento de la cabeza del bebé. Es su tercer embarazo y sus partos anteriores fueron rápidos.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable, gritando con contracciones</li>
                                            <li>B: FR 22/min, respiración adecuada</li>
                                            <li>C: FC 95/min, TA 125/80 mmHg, piel rosada</li>
                                            <li>D: Alerta, ansiosa pero cooperativa</li>
                                            <li>E: Contracciones cada 2 min, coronamiento visible</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Preparar kit obstétrico inmediatamente</li>
                                            <li>Posicionar a la paciente semi-sentada</li>
                                            <li>Usar guantes estériles y preparar área estéril</li>
                                            <li>NO tirar de la cabeza, solo apoyar mientras emerge</li>
                                            <li>Verificar cordón alrededor del cuello</li>
                                            <li>Asistir nacimiento de hombros y cuerpo</li>
                                            <li>Secar y estimular al bebé inmediatamente</li>
                                            <li>Clampear y cortar cordón después de 1-3 minutos</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Hemorragia postparto</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 32 años que tuvo un parto vaginal exitoso hace 20 minutos. La placenta fue expulsada completa,
                                        pero ahora presenta sangrado vaginal abundante empapando múltiples toallas sanitarias.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24/min, respiración adecuada</li>
                                            <li>C: FC 115/min, TA 100/60 mmHg, palidez</li>
                                            <li>D: Alerta pero débil, ligera confusión</li>
                                            <li>E: Sangrado vaginal abundante, útero blando</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Masaje uterino vigoroso para promover contracción</li>
                                            <li>Establecer acceso IV con catéter grande (14G-16G)</li>
                                            <li>Administrar solución salina isotónica</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Posición de Trendelenburg si hipotensión</li>
                                            <li>Compresas en periné para tamponar sangrado externo</li>
                                            <li>Transporte inmediato con notificación previa</li>
                                            <li>Monitorización continua de signos vitales</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Reanimación neonatal</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Recién nacido de término nacido tras parto vaginal. El bebé nace flácido, sin esfuerzo respiratorio,
                                        y con cianosis central. Tras secar y estimular por 30 segundos, no hay mejoría. FC: 80 latidos por minuto.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación APGAR (1 minuto):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Apariencia: Cianosis central (0 puntos)</li>
                                            <li>Pulso: 80 latidos por minuto (1 punto)</li>
                                            <li>Gesticulación: Sin respuesta a estímulos (0 puntos)</li>
                                            <li>Actividad: Flácido (0 puntos)</li>
                                            <li>Respiración: No hay esfuerzo respiratorio (0 puntos)</li>
                                            <li><strong>Total: 1/10 (depresión severa)</strong></li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Continuar secado y estimulación táctil</li>
                                            <li>Posicionar cabeza en extensión leve (posición de olfateo)</li>
                                            <li>Succionar boca y nariz si hay secreciones visibles</li>
                                            <li>Iniciar ventilación con presión positiva (VPP) a 40-60/min</li>
                                            <li>Usar bolsa y mascarilla con aire ambiente inicialmente</li>
                                            <li>Reevaluar FC cada 30 segundos</li>
                                            <li>Si FC permanece &lt;60, iniciar compresiones cardíacas</li>
                                            <li>Relación 3:1 (3 compresiones : 1 ventilación)</li>
                                            <li>Transporte inmediato con soporte continuo</li>
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

