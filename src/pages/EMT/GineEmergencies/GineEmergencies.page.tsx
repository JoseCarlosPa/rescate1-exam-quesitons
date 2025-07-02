import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./GineEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {AiOutlineWoman} from "react-icons/ai";

export default function GineEmergencies(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <AiOutlineWoman className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Ginecologicas</h1>
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
                            to={`${AllRoutes.GINE_EMERGENCY}/exam`}
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
                        <a href="https://drive.google.com/file/d/1z4e_fIy2QadxeD9nWT1k-MRBd_mkl1uv/view?usp=drive_link"
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
                                Anatomía y Evaluación
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo Prehospitalario
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias ginecológicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias ginecológicas son condiciones que afectan el sistema reproductivo femenino y requieren 
                                        atención médica inmediata. Estas emergencias pueden presentarse en cualquier mujer en edad reproductiva 
                                        y pueden ser potencialmente mortales si no se tratan adecuadamente.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        La evaluación debe incluir siempre la pregunta sobre la última menstruación (FUM) en mujeres en edad fértil, 
                                        ya que muchas emergencias ginecológicas están relacionadas con el embarazo.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas de alarma</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dolor abdominal o pélvico severo y súbito</li>
                                            <li>Sangrado vaginal abundante o prolongado</li>
                                            <li>Amenorrea (ausencia de menstruación)</li>
                                            <li>Fiebre con dolor pélvico</li>
                                            <li>Náuseas y vómitos con dolor abdominal</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Signos de shock (palidez, taquicardia, hipotensión)</li>
                                            <li>Flujo vaginal purulento o maloliente</li>
                                            <li>Dolor durante la micción o defecación</li>
                                            <li>Masa palpable en abdomen o pelvis</li>
                                            <li>Síncope o mareo asociado con dolor</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principales emergencias ginecológicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Relacionadas con embarazo</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Embarazo ectópico</li>
                                                <li>Aborto espontáneo</li>
                                                <li>Placenta previa</li>
                                                <li>Desprendimiento de placenta</li>
                                                <li>Mola hidatiforme</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">No relacionadas con embarazo</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Enfermedad pélvica inflamatoria (EPI)</li>
                                                <li>Torsión ovárica</li>
                                                <li>Ruptura de quiste ovárico</li>
                                                <li>Endometriosis severa</li>
                                                <li>Trauma ginecológico/agresión sexual</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">⚠️ Regla de oro en emergencias ginecológicas</h3>
                                    <p className="text-gray-700">
                                        <strong>Toda mujer en edad reproductiva con dolor abdominal debe considerarse embarazada hasta que se demuestre lo contrario.</strong> 
                                        La primera pregunta debe ser siempre: "¿Cuándo fue su última menstruación?"
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía básica del sistema reproductivo femenino</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Órganos internos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Ovarios:</strong> Producen óvulos y hormonas (estrógeno, progesterona)</li>
                                                <li><strong>Trompas de Falopio:</strong> Transportan el óvulo desde el ovario al útero</li>
                                                <li><strong>Útero:</strong> Órgano muscular donde se desarrolla el feto</li>
                                                <li><strong>Cérvix:</strong> Parte inferior del útero que se abre hacia la vagina</li>
                                                <li><strong>Vagina:</strong> Canal que conecta el cérvix con el exterior</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Estructuras de soporte</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Ligamentos:</strong> Sostienen los órganos pélvicos en posición</li>
                                                <li><strong>Peritoneo:</strong> Membrana que recubre la cavidad pélvica</li>
                                                <li><strong>Músculos del piso pélvico:</strong> Proporcionan soporte estructural</li>
                                                <li><strong>Irrigación:</strong> Rica vascularización arterial y venosa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Historia clínica ginecológica</h2>
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Preguntas esenciales en la evaluación</h3>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li><strong>FUM (Fecha de Última Menstruación):</strong> "¿Cuándo fue su última menstruación?"</li>
                                            <li><strong>Actividad sexual:</strong> "¿Es sexualmente activa?" (con tacto y privacidad)</li>
                                            <li><strong>Métodos anticonceptivos:</strong> "¿Utiliza algún método anticonceptivo?"</li>
                                            <li><strong>Embarazos previos:</strong> "¿Ha estado embarazada antes?"</li>
                                            <li><strong>Cirugías ginecológicas:</strong> "¿Ha tenido alguna cirugía ginecológica?"</li>
                                        </ol>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación del dolor pélvico</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Características del dolor</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Inicio:</strong> Súbito vs. gradual</li>
                                                <li><strong>Localización:</strong> Unilateral vs. bilateral</li>
                                                <li><strong>Calidad:</strong> Sordo, agudo, cólico, constante</li>
                                                <li><strong>Irradiación:</strong> Hacia hombros, espalda, piernas</li>
                                                <li><strong>Factores agravantes/aliviantes</strong></li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Síntomas asociados</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sangrado vaginal anormal</li>
                                                <li>Náuseas y vómitos</li>
                                                <li>Fiebre y escalofríos</li>
                                                <li>Síncope o mareo</li>
                                                <li>Cambios en la micción</li>
                                                <li>Flujo vaginal anormal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos vitales y evaluación física</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border text-left">Parámetro</th>
                                                    <th className="py-2 px-4 border text-left">Evaluación</th>
                                                    <th className="py-2 px-4 border text-left">Significado clínico</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Presión arterial</td>
                                                    <td className="py-2 px-4 border">Hipotensión, PA ortostática</td>
                                                    <td className="py-2 px-4 border">Pérdida de volumen/hemorragia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Frecuencia cardíaca</td>
                                                    <td className="py-2 px-4 border">Taquicardia</td>
                                                    <td className="py-2 px-4 border">Shock, dolor, ansiedad</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Temperatura</td>
                                                    <td className="py-2 px-4 border">Fiebre</td>
                                                    <td className="py-2 px-4 border">Proceso infeccioso (EPI)</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Color de piel</td>
                                                    <td className="py-2 px-4 border">Palidez, diaforesis</td>
                                                    <td className="py-2 px-4 border">Pérdida sanguínea, shock</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Abdomen</td>
                                                    <td className="py-2 px-4 border">Distensión, rigidez, rebote</td>
                                                    <td className="py-2 px-4 border">Hemoperitoneo, peritonitis</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-red-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-red-700">⚠️ Signos de emergencia ginecológica grave</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>Tríada de embarazo ectópico:</strong> Dolor abdominal + amenorrea + sangrado vaginal</li>
                                        <li><strong>Signos de shock:</strong> Hipotensión, taquicardia, palidez, diaforesis</li>
                                        <li><strong>Dolor en hombro:</strong> Indica irritación diafragmática por sangre en abdomen</li>
                                        <li><strong>Signo de Cullen:</strong> Equimosis periumbilical (hemoperitoneo)</li>
                                        <li><strong>Abdomen rígido:</strong> Indica irritación peritoneal</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios generales del manejo prehospitalario</h2>
                                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Prioridades ABC</h3>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li><strong>Vía aérea:</strong> Mantener permeabilidad, posición cómoda</li>
                                            <li><strong>Respiración:</strong> Oxígeno si hay signos de shock o distress</li>
                                            <li><strong>Circulación:</strong> Control de hemorragia, acceso IV, tratamiento del shock</li>
                                            <li><strong>Discapacidad:</strong> Evaluación neurológica, niveles de dolor</li>
                                            <li><strong>Exposición:</strong> Evaluación discreta, preservación de la dignidad</li>
                                        </ol>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo del sangrado vaginal</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">✅ Qué hacer</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Usar toallas sanitarias para absorber sangre</li>
                                                <li>Contar y guardar todos los materiales usados</li>
                                                <li>Elevar las piernas si hay signos de shock</li>
                                                <li>Establecer acceso IV con solución salina</li>
                                                <li>Monitorizar signos vitales frecuentemente</li>
                                                <li>Administrar oxígeno si es necesario</li>
                                                <li>Proporcionar apoyo emocional</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">❌ Qué NO hacer</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>NUNCA empacar la vagina</strong> con gasas o tampones</li>
                                                <li>No realizar examen pélvico interno</li>
                                                <li>No insertar nada en la vagina</li>
                                                <li>No asumir que el sangrado es "normal"</li>
                                                <li>No administrar medicamentos orales</li>
                                                <li>No permitir que el paciente se bañe</li>
                                                <li>No juzgar o hacer comentarios inapropiados</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico por condición</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Embarazo ectópico sospechado</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Tratar como emergencia potencialmente mortal</li>
                                                <li>Establecer 2 accesos IV de gran calibre</li>
                                                <li>Posición de Trendelenburg si hay shock</li>
                                                <li>Administrar cristaloides para mantener presión</li>
                                                <li>Monitorización cardíaca continua</li>
                                                <li>Transporte INMEDIATO a centro con capacidad quirúrgica</li>
                                                <li>Notificar al hospital de llegada inminente</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Enfermedad Pélvica Inflamatoria (EPI)</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Posición de comodidad (generalmente semisentada)</li>
                                                <li>Control del dolor según protocolos</li>
                                                <li>Monitorizar temperatura y signos vitales</li>
                                                <li>Buscar signos de sepsis (fiebre, taquicardia, hipotensión)</li>
                                                <li>Acceso IV para hidratación</li>
                                                <li>Protección del paciente contra hipotermia</li>
                                                <li>Transporte para tratamiento antibiótico</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Torsión ovárica</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Reconocer como emergencia quirúrgica</li>
                                                <li>Control agresivo del dolor</li>
                                                <li>Posición de comodidad</li>
                                                <li>Establecer acceso IV</li>
                                                <li>Administrar antieméticos si hay náuseas</li>
                                                <li>Transporte RÁPIDO - el tiempo es crucial</li>
                                                <li>Avisar al hospital sobre la sospecha diagnóstica</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Agresión sexual</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Priorizar el bienestar médico y emocional</li>
                                                <li>Ser empático, no juzgar, profesional</li>
                                                <li>Tratar lesiones que pongan en peligro la vida</li>
                                                <li>Preservar evidencia cuando sea posible</li>
                                                <li>No permitir cambio de ropa, baño o lavado</li>
                                                <li>Documentar objetivamente (citas textuales)</li>
                                                <li>Involucrar servicios sociales/policía según protocolos</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones especiales</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Privacidad y dignidad</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Cubrir al paciente adecuadamente</li>
                                                <li>Limitar el número de personal presente</li>
                                                <li>Permitir acompañante si el paciente lo desea</li>
                                                <li>Explicar todos los procedimientos</li>
                                                <li>Respetar las decisiones del paciente</li>
                                                <li>Mantener confidencialidad</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Documentación</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Registrar FUM y síntomas ginecológicos</li>
                                                <li>Cuantificar sangrado (número de toallas)</li>
                                                <li>Documentar signos vitales seriados</li>
                                                <li>Anotar tratamientos administrados</li>
                                                <li>Registrar respuesta a tratamiento</li>
                                                <li>Ser objetivo y factual</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-orange-700">⚠️ Indicaciones para transporte inmediato</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>Signos de shock hemorrágico (taquicardia, hipotensión, palidez)</li>
                                        <li>Dolor abdominal severo y súbito</li>
                                        <li>Sangrado vaginal abundante (&gt;1 toalla por hora)</li>
                                        <li>Signos de sepsis (fiebre alta, alteración mental)</li>
                                        <li>Sospecha de embarazo ectópico roto</li>
                                        <li>Trauma significativo en área pélvica</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos de emergencias ginecológicas</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 1: Embarazo ectópico roto</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 26 años, G2P1, se presenta con dolor abdominal severo y súbito en fosa ilíaca derecha. 
                                        Refiere amenorrea de 6 semanas y sangrado vaginal escaso. Presenta palidez, diaforesis y taquicardia.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable, habla con frases cortas</li>
                                            <li>B: FR 24/min, SpO₂ 96%</li>
                                            <li>C: FC 118/min, TA 88/56 mmHg, pulsos débiles</li>
                                            <li>D: Alerta pero ansiosa, dolor 9/10</li>
                                            <li>E: Piel pálida, fría y diaforética; rigidez abdominal</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo de emergencia:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Reconocimiento inmediato como emergencia quirúrgica</li>
                                            <li>Establecer 2 accesos IV de gran calibre (14-16G)</li>
                                            <li>Administrar cristaloides en bolo (500-1000ml)</li>
                                            <li>Posición de Trendelenburg modificada</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Transporte INMEDIATO con notificación al hospital</li>
                                            <li>Monitorización continua de signos vitales</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 2: Enfermedad Pélvica Inflamatoria (EPI)</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 22 años, sexualmente activa, presenta dolor pélvico bilateral de 3 días de evolución, 
                                        fiebre de 38.8°C, flujo vaginal purulento y maloliente. Refiere dispareunia y disuria.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación clínica:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 20/min, SpO₂ 98%</li>
                                            <li>C: FC 105/min, TA 110/70 mmHg</li>
                                            <li>D: Alerta, dolor moderado-severo</li>
                                            <li>E: Temperatura 38.8°C, dolor a la palpación pélvica</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Posición de comodidad (semisentada)</li>
                                            <li>Establecer acceso IV para hidratación</li>
                                            <li>Control de temperatura con antipiréticos</li>
                                            <li>Manejo del dolor según protocolos</li>
                                            <li>Monitorización para signos de sepsis</li>
                                            <li>Transporte para evaluación y antibióticos IV</li>
                                            <li>Educación sobre la importancia del tratamiento</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 3: Torsión ovárica</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Adolescente de 16 años presenta dolor abdominal bajo derecho de inicio súbito y severo 
                                        mientras practicaba deportes. Asocia náuseas, vómitos y no ha tenido la menstruación este mes.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Presentación clínica:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Dolor unilateral severo, colicky, de inicio súbito</li>
                                            <li>Náuseas y vómitos persistentes</li>
                                            <li>Masa palpable en fosa ilíaca derecha</li>
                                            <li>Signos vitales: FC 95/min, TA 120/75 mmHg</li>
                                            <li>Paciente en posición fetal por el dolor</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo urgente:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Reconocer como emergencia quirúrgica urgente</li>
                                            <li>Control agresivo del dolor (morfina o fentanilo)</li>
                                            <li>Administrar antieméticos para náuseas</li>
                                            <li>Establecer acceso IV</li>
                                            <li>Posición de comodidad</li>
                                            <li>Transporte INMEDIATO - tiempo es crucial para salvar ovario</li>
                                            <li>Notificar al hospital sobre sospecha diagnóstica</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 4: Hemorragia uterina disfuncional</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 35 años presenta sangrado vaginal abundante y prolongado de 10 días de duración. 
                                        Ha empapado múltiples toallas por hora. Se siente mareada y débil.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación de pérdida sanguínea:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Sangrado abundante (&gt;1 toalla por hora por &gt;24 horas)</li>
                                            <li>Signos de anemia: palidez, fatiga, mareo</li>
                                            <li>FC 110/min, TA 100/65 mmHg</li>
                                            <li>Hipotensión ortostática presente</li>
                                            <li>Mucosas pálidas, llenado capilar &gt;3 segundos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Protocolo de manejo:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Cuantificar y documentar sangrado (contar toallas)</li>
                                            <li>Usar toallas sanitarias, NO empacar vagina</li>
                                            <li>Establecer acceso IV de gran calibre</li>
                                            <li>Administrar cristaloides para reponer volumen</li>
                                            <li>Posición de Trendelenburg si hay shock</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Transporte para evaluación ginecológica urgente</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 5: Agresión sexual</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 28 años encontrada por amigas después de una agresión sexual. 
                                        Presenta trauma físico visible y estado emocional alterado.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Consideraciones especiales:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Trauma físico: laceraciones perineales, equimosis</li>
                                            <li>Estado emocional: ansiedad severa, llanto</li>
                                            <li>Ropa desgarrada, signos de lucha</li>
                                            <li>Paciente solicita no ir al hospital</li>
                                            <li>Signos vitales estables</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo sensible y apropiado:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Priorizar bienestar médico y emocional</li>
                                            <li>Ser empático, no juzgar, mantener profesionalismo</li>
                                            <li>Preservar evidencia: no cambiar ropa, no lavar</li>
                                            <li>Tratar lesiones que amenacen la vida</li>
                                            <li>Ofrecer acompañante femenino si está disponible</li>
                                            <li>Documentar objetivamente con citas textuales</li>
                                            <li>Involucrar servicios apropiados (policía, trabajo social)</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">Puntos clave para emergencias ginecológicas</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>Historia crucial:</strong> Siempre preguntar FUM en mujeres en edad reproductiva</li>
                                        <li><strong>Considerar embarazo:</strong> Hasta que se demuestre lo contrario</li>
                                        <li><strong>Manejo del sangrado:</strong> Nunca empacar la vagina, usar toallas externas</li>
                                        <li><strong>Privacidad y dignidad:</strong> Mantener en todo momento</li>
                                        <li><strong>Documentación:</strong> Ser objetivo, especialmente en casos de agresión</li>
                                        <li><strong>Transporte oportuno:</strong> Muchas emergencias ginecológicas requieren intervención quirúrgica</li>
                                    </ul>
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

