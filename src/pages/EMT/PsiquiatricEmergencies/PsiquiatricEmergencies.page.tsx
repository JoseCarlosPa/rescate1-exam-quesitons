import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./PsiquiatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiBrainFill, PiChalkboardTeacher} from "react-icons/pi";

export default function PsiquiatricEmergencies(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <PiBrainFill className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Psiquiatricas</h1>
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
                            to={`${AllRoutes.PSIQUIATRIC_EMERGENCY}/exam`}
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
                        <a href="https://drive.google.com/file/d/1GKXb9xUjTFbxmwqSmy-mHv35XK4c0vE3/view?usp=drive_link"
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
                                Evaluación y Causas
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo y Comunicación
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios Específicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias psiquiátricas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias psiquiátricas son situaciones en las que el comportamiento de una persona es tan perturbado que ella, su familia, 
                                        o la comunidad consideran el comportamiento alarmante, intolerable o peligroso. Estas situaciones pueden ser resultado de 
                                        trastornos mentales, abuso de sustancias, o condiciones médicas que afectan el comportamiento.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Es fundamental distinguir entre una crisis conductual y una emergencia psiquiátrica verdadera, así como descartar 
                                        causas médicas antes de asumir un origen puramente psiquiátrico.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas de alarma</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Agitación o agresividad extrema</li>
                                            <li>Ideas o amenazas suicidas u homicidas</li>
                                            <li>Alucinaciones (visuales, auditivas, táctiles)</li>
                                            <li>Delirios o ideas paranoides</li>
                                            <li>Comportamiento autodestructivo</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Pérdida total del contacto con la realidad</li>
                                            <li>Violencia hacia otros o amenazas</li>
                                            <li>Fuerza inusual o sobrehumana</li>
                                            <li>Incapacidad para cooperar con el cuidado</li>
                                            <li>Síntomas de intoxicación o abstinencia</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de emergencias psiquiátricas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Relacionadas con sustancias</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Intoxicación aguda</li>
                                                <li>Síndrome de abstinencia</li>
                                                <li>Delirio agitado</li>
                                                <li>Psicosis inducida por drogas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Trastornos mentales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Episodios psicóticos</li>
                                                <li>Crisis de ansiedad severa</li>
                                                <li>Episodios maníacos</li>
                                                <li>Depresión mayor con ideación suicida</li>
                                                <li>Trastorno bipolar descompensado</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación inicial de la escena</h2>
                                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">⚠️ Seguridad es la prioridad #1</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Evalúe la escena desde una distancia segura antes de acercarse</li>
                                            <li>Identifique rutas de escape y posiciones de seguridad</li>
                                            <li>Solicite apoyo policial si hay amenazas de violencia</li>
                                            <li>Considere la presencia de armas u objetos peligrosos</li>
                                            <li>Evalúe la necesidad de personal adicional</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Causas médicas que imitan emergencias psiquiátricas</h2>
                                    <p className="text-gray-700 mb-4">
                                        Antes de asumir que una emergencia es puramente psiquiátrica, siempre descarte causas médicas:
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Causas metabólicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Hipoglucemia o hiperglucemia</li>
                                                <li>Desequilibrios electrolíticos</li>
                                                <li>Insuficiencia hepática o renal</li>
                                                <li>Trastornos tiroideos</li>
                                                <li>Hipoxia o hipercapnia</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Causas neurológicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Traumatismo craneoencefálico</li>
                                                <li>Accidente cerebrovascular</li>
                                                <li>Convulsiones (post-ictal)</li>
                                                <li>Infecciones del SNC</li>
                                                <li>Tumores cerebrales</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Toxicológicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Intoxicación por alcohol o drogas</li>
                                                <li>Síndrome de abstinencia</li>
                                                <li>Envenenamiento por CO</li>
                                                <li>Sobredosis de medicamentos</li>
                                                <li>Reacciones adversas a fármacos</li>
                                            </ul>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Otras causas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Infecciones sistémicas</li>
                                                <li>Shock o hipotensión</li>
                                                <li>Hipertermia o hipotermia</li>
                                                <li>Deficiencias nutricionales</li>
                                                <li>Efectos secundarios de medicamentos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación ABC modificada</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white border">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border text-left">Componente</th>
                                                    <th className="py-2 px-4 border text-left">Evaluación específica</th>
                                                    <th className="py-2 px-4 border text-left">Signos de alarma</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Vía aérea (A)</td>
                                                    <td className="py-2 px-4 border">Capacidad de hablar, obstrucción</td>
                                                    <td className="py-2 px-4 border">Estridor, incapacidad para hablar</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Respiración (B)</td>
                                                    <td className="py-2 px-4 border">Frecuencia, calidad, saturación</td>
                                                    <td className="py-2 px-4 border">Bradipnea, desaturación, cianosis</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Circulación (C)</td>
                                                    <td className="py-2 px-4 border">Pulso, presión arterial, perfusión</td>
                                                    <td className="py-2 px-4 border">Taquicardia, hipotensión, diaforesis</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Discapacidad (D)</td>
                                                    <td className="py-2 px-4 border">Nivel de conciencia, pupilas</td>
                                                    <td className="py-2 px-4 border">Deterioro del estado mental, pupilas anormales</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Exposición (E)</td>
                                                    <td className="py-2 px-4 border">Signos de trauma, temperatura</td>
                                                    <td className="py-2 px-4 border">Hipertermia, lesiones ocultas</td>
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios de comunicación terapéutica</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">✅ Qué hacer</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Preséntese y explique su papel</li>
                                                <li>Hable con calma y voz suave</li>
                                                <li>Mantenga contacto visual adecuado</li>
                                                <li>Use lenguaje simple y directo</li>
                                                <li>Escuche activamente sin juzgar</li>
                                                <li>Respete el espacio personal del paciente</li>
                                                <li>Sea honesto y directo</li>
                                                <li>Muestre empatía y comprensión</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">❌ Qué NO hacer</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>No "siga el juego" a las alucinaciones</li>
                                                <li>No discuta con delirios</li>
                                                <li>No haga movimientos bruscos</li>
                                                <li>No dé la espalda al paciente</li>
                                                <li>No haga promesas que no puede cumplir</li>
                                                <li>No use jerga médica compleja</li>
                                                <li>No juzgue o critique</li>
                                                <li>No invada el espacio personal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación del riesgo suicida</h2>
                                    <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Factores de alto riesgo</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Plan específico y detallado</li>
                                                <li>Medios disponibles para llevarlo a cabo</li>
                                                <li>Intentos previos de suicidio</li>
                                                <li>Historia familiar de suicidio</li>
                                                <li>Aislamiento social</li>
                                            </ul>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Abuso de sustancias</li>
                                                <li>Depresión mayor</li>
                                                <li>Pérdidas recientes significativas</li>
                                                <li>Enfermedades terminales</li>
                                                <li>Acceso a armas de fuego</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-blue-700">Preguntas de evaluación</h3>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>¿Ha pensado en hacerse daño a sí mismo?</li>
                                            <li>¿Tiene pensamientos de quitarse la vida?</li>
                                            <li>¿Tiene un plan específico?</li>
                                            <li>¿Cuándo planea hacerlo?</li>
                                            <li>¿Ha intentado suicidarse antes?</li>
                                            <li>¿Qué le ha impedido hacerlo hasta ahora?</li>
                                        </ol>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Restricciones físicas: último recurso</h2>
                                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                                        <h3 className="font-medium text-lg mb-2 text-red-700">Indicaciones para restricciones</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Peligro inmediato para el paciente o personal</li>
                                            <li>Paciente violento que no responde a comunicación</li>
                                            <li>Necesidad de proteger vía aérea o accesos vasculares</li>
                                            <li>Cuando otras técnicas de contención han fallado</li>
                                        </ul>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Técnica segura</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Usar personal suficiente (5 personas idealmente)</li>
                                                <li>Asignar una persona por extremidad + cabeza</li>
                                                <li>Aproximación coordinada y simultánea</li>
                                                <li>Usar restricciones suaves, no rígidas</li>
                                                <li>NUNCA colocar en posición prona</li>
                                                <li>Posición supina o lateral de seguridad</li>
                                            </ol>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Monitorización post-restricción</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluación continua ABC</li>
                                                <li>Verificar pulsos distales</li>
                                                <li>Evaluar circulación de extremidades</li>
                                                <li>Vigilar estado respiratorio</li>
                                                <li>Reevaluar necesidad cada 15 minutos</li>
                                                <li>Documentar todo el procedimiento</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones farmacológicas</h2>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <p className="text-gray-700 mb-2">
                                            <strong>Nota importante:</strong> La administración de medicamentos psiquiátricos en el ámbito prehospitalario 
                                            debe seguir protocolos médicos locales y requiere orden médica.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <h4 className="font-medium mb-2">Sedación de emergencia</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Haloperidol (antipsicótico)</li>
                                                    <li>Lorazepam (benzodiacepina)</li>
                                                    <li>Midazolam (sedación rápida)</li>
                                                    <li>Ketamina (en casos específicos)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2">Precauciones</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Evaluar contraindicaciones</li>
                                                    <li>Monitorizar signos vitales</li>
                                                    <li>Tener naloxona disponible</li>
                                                    <li>Documentar dosis y efectos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escenarios específicos de emergencias psiquiátricas</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Escenario 1: Paciente con ideación suicida</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 45 años con historia de depresión. Familiares reportan que ha expresado deseos de "terminar con todo" 
                                        y ha estado organizando sus pertenencias. Tiene antecedente de intento de sobredosis hace 2 años.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación del riesgo:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Historia previa de intento suicida (alto riesgo)</li>
                                            <li>Organizando pertenencias (preparación)</li>
                                            <li>Verbalización de ideación suicida</li>
                                            <li>Trastorno depresivo conocido</li>
                                            <li>Signos vitales estables inicialmente</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar la escena y remover medios letales</li>
                                            <li>Aproximación calmada y no amenazante</li>
                                            <li>Establecer rapport y comunicación empática</li>
                                            <li>Evaluar plan específico y medios disponibles</li>
                                            <li>Nunca dejar al paciente solo</li>
                                            <li>Transporte inmediato para evaluación psiquiátrica</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Escenario 2: Delirio agitado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 28 años encontrado en la calle, extremadamente agitado, sudoroso, con fuerza inusual. 
                                        Presenta paranoia, alucinaciones y requiere múltiples oficiales para contenerlo. Temperatura de 39.5°C.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Signos de alarma:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Hipertermia significativa (39.5°C)</li>
                                            <li>Agitación extrema con fuerza sobrehumana</li>
                                            <li>Diaforesis profusa</li>
                                            <li>Comportamiento violento y paranoia</li>
                                            <li>Posible uso de estimulantes</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Prioridades de manejo:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Seguridad de la escena - apoyo policial</li>
                                            <li>Restricción física segura (evitar posición prona)</li>
                                            <li>Manejo agresivo de la hipertermia</li>
                                            <li>Monitorización continua ABC</li>
                                            <li>Considerar sedación según protocolos</li>
                                            <li>Transporte INMEDIATO - alto riesgo de muerte súbita</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Escenario 3: Psicosis con alucinaciones</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 32 años con esquizofrenia conocida, suspendió medicación hace 1 semana. Habla con personas inexistentes, 
                                        ve "insectos" en su piel y cree que "la están siguiendo". Se muestra desconfiada pero no violenta.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Presentación clínica:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Alucinaciones auditivas y visuales</li>
                                            <li>Ideas paranoides (delirios de persecución)</li>
                                            <li>Abandono de medicación antipsicótica</li>
                                            <li>Comportamiento desorganizado pero cooperativo</li>
                                            <li>Sin signos de violencia inmediata</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Estrategias de comunicación:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>No confrontar ni negar las alucinaciones</li>
                                            <li>Usar frases como "entiendo que eso debe ser muy angustiante"</li>
                                            <li>Evitar movimientos bruscos o gestos amenazantes</li>
                                            <li>Mantener distancia de seguridad pero mostrar interés</li>
                                            <li>Explicar cada acción antes de realizarla</li>
                                            <li>Obtener información sobre medicación habitual</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Escenario 4: Crisis de ansiedad severa</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 35 años en oficina, presenta súbitamente palpitaciones, dificultad respiratoria, sudoración, 
                                        temblor y sensación de muerte inminente. Colegas reportan que "parecía que se estaba muriendo".
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Diagnóstico diferencial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Síndrome coronario agudo</li>
                                            <li>Embolia pulmonar</li>
                                            <li>Hipertiroidismo</li>
                                            <li>Hipoglucemia</li>
                                            <li>Ataque de pánico</li>
                                            <li>Intoxicación por estimulantes</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo integral:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Descartar causas orgánicas (ECG, glucometría, signos vitales)</li>
                                            <li>Crear ambiente tranquilo y seguro</li>
                                            <li>Técnicas de relajación y respiración</li>
                                            <li>Tranquilizar sin minimizar los síntomas</li>
                                            <li>Monitorización continua durante el episodio</li>
                                            <li>Evaluar necesidad de transporte según evolución</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg mt-6">
                                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">Puntos clave para todos los escenarios</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li><strong>Seguridad primero:</strong> Evalúe la escena antes de acercarse</li>
                                        <li><strong>Descarte causas médicas:</strong> Siempre evalúe ABC y signos vitales</li>
                                        <li><strong>Comunicación terapéutica:</strong> Mantenga calma y respeto</li>
                                        <li><strong>Documentación:</strong> Registre comportamiento, declaraciones y acciones tomadas</li>
                                        <li><strong>Transporte apropiado:</strong> Determine el destino más adecuado</li>
                                        <li><strong>Seguimiento:</strong> Informe al personal receptor del estado y manejo realizado</li>
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

