import {FaExclamationTriangle, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {MdCheckCircle, MdLocalHospital, MdOutlineTimer, MdWarning} from "react-icons/md";
import {GiLungs} from "react-icons/gi";
import {BsGraphUp, BsLightbulb, BsShield} from "react-icons/bs";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Emergencia Crítica!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las emergencias respiratorias pueden comprometer la vida en minutos. La hipoxia severa
                    puede causar daño cerebral irreversible en <span
                    className="text-red-600 font-bold">4-6 minutos</span>
                    y muerte en <span className="text-red-600 font-bold">10 minutos</span>.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">0-2 min</p>
                        <p className="text-sm">Tiempo óptimo de respuesta</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">4-6 min</p>
                        <p className="text-sm">Daño cerebral posible</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">+10 min</p>
                        <p className="text-sm">Riesgo de muerte</p>
                    </div>
                </div>
            </div>

            {/* Definición y conceptos clave */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiLungs className="w-6 h-6 mr-2 text-orange-500"/>
                    ¿Qué son las emergencias respiratorias?
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                    <p className="text-gray-800 leading-relaxed text-lg mb-4">
                        Son condiciones agudas donde el sistema respiratorio no puede proporcionar
                        suficiente oxígeno al cuerpo o eliminar adecuadamente el dióxido de carbono,
                        poniendo en riesgo la vida del paciente.
                    </p>

                    {/* Nueva sección sobre disnea */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <h4 className="font-semibold text-blue-700 mb-2">La Disnea: Síntoma Central</h4>
                        <p className="text-gray-700 mb-3">
                            La disnea (dificultad para respirar) es un síntoma común que puede tener múltiples causas,
                            desde leves (como un resfriado) hasta graves (como embolia pulmonar o insuficiencia cardíaca).
                            Aunque no siempre se puede hacer un diagnóstico definitivo en el entorno prehospitalario,
                            los profesionales pueden tomar medidas efectivas para aliviar síntomas o salvar vidas.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div className="bg-white p-4 rounded">
                            <h4 className="font-semibold text-blue-700 mb-2">Hipoxia</h4>
                            <p className="text-sm text-gray-700">Disminución del oxígeno en los tejidos</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h4 className="font-semibold text-blue-700 mb-2">Hipoxemia</h4>
                            <p className="text-sm text-gray-700">Disminución del oxígeno en la sangre</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h4 className="font-semibold text-blue-700 mb-2">Hipercapnia</h4>
                            <p className="text-sm text-gray-700">Acumulación de CO₂ en la sangre</p>
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h4 className="font-semibold text-blue-700 mb-2">Insuficiencia respiratoria</h4>
                            <p className="text-sm text-gray-700">Falla del sistema respiratorio</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nueva sección: Causas comunes de disnea */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaLungsVirus className="w-6 h-6 mr-2 text-orange-500"/>
                    Causas Comunes de Disnea
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Cardiovasculares</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Edema pulmonar agudo</li>
                            <li>Insuficiencia cardíaca</li>
                            <li>Embolia pulmonar</li>
                            <li>Infarto agudo de miocardio</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Infecciosas</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Infecciones respiratorias superiores</li>
                            <li>Neumonía</li>
                            <li>Bronquitis aguda</li>
                            <li>Sepsis con SDRA</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Obstructivas</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Asma bronquial</li>
                            <li>EPOC (enfisema/bronquitis crónica)</li>
                            <li>Obstrucción de vía aérea</li>
                            <li>Bronquiolitis (niños)</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Pleural/Torácicas</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Neumotórax espontáneo</li>
                            <li>Derrame pleural</li>
                            <li>Hemotórax</li>
                            <li>Fracturas costales múltiples</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 mb-2">Tóxicas/Ambientales</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Inhalación de humo</li>
                            <li>Intoxicación por CO</li>
                            <li>Exposición a gases tóxicos</li>
                            <li>Aspiración de cuerpo extraño</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-700 mb-2">Alérgicas/Inmunológicas</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Anafilaxia</li>
                            <li>Fiebre del heno severa</li>
                            <li>Angioedema</li>
                            <li>Reacciones alérgicas</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Protocolo de evaluación ABCDE */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo ABCDE - Evaluación Sistemática
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A - AIRWAY</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>¿Puede hablar claramente?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Sonidos anormales (estridor, ronquidos)</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Cuerpos extraños visibles</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Posición anatómica</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B - BREATHING</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Frecuencia respiratoria</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Expansión torácica</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Uso de músculos accesorios</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Saturación de oxígeno</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center">C - CIRCULATION</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Pulso y calidad</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Color de piel y mucosas</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Perfusión capilar</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Estado neurológico</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos y síntomas de alerta */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <FiEye className="w-4 h-4 mr-2"/>
                            Signos Visuales:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Cianosis:</strong> Labios, uñas o piel azulada</li>
                            <li><strong>Retracciones:</strong> Intercostales o supraclaviculares</li>
                            <li><strong>Músculos accesorios:</strong> Cuello y abdomen</li>
                            <li><strong>Posición de trípode:</strong> Inclinado hacia adelante</li>
                            <li><strong>Alteración mental:</strong> Agitación o confusión</li>
                            <li><strong>Sudoración profusa:</strong> Diaforesis</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <FiActivity className="w-4 h-4 mr-2"/>
                            Signos Auditivos y Funcionales:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Estridor:</strong> Obstrucción alta (inspiratorio)</li>
                            <li><strong>Sibilancias:</strong> Broncoespasmo (espiratorio)</li>
                            <li><strong>Ronquidos:</strong> Obstrucción por lengua</li>
                            <li><strong>Gorgoteo:</strong> Presencia de secreciones</li>
                            <li><strong>Silencio respiratorio:</strong> Obstrucción completa</li>
                            <li><strong>Habla entrecortada:</strong> No completa frases</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Clasificación de patologías */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <MdLocalHospital className="w-6 h-6 mr-2 text-orange-500"/>
                    Principales Patologías Respiratorias
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                        <h3 className="font-medium text-xl mb-3 text-orange-700 flex items-center">
                            <BsGraphUp className="w-5 h-5 mr-2"/>
                            Patologías Obstructivas
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-orange-600">Asma</h4>
                                <p className="text-sm text-gray-700">Inflamación y broncoespasmo reversible</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-orange-600">EPOC</h4>
                                <p className="text-sm text-gray-700">Obstrucción progresiva irreversible</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-orange-600">Obstrucción de vía aérea</h4>
                                <p className="text-sm text-gray-700">Cuerpo extraño o edema</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-orange-600">Bronquiolitis</h4>
                                <p className="text-sm text-gray-700">Inflamación de bronquiolos (niños)</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                        <h3 className="font-medium text-xl mb-3 text-blue-700 flex items-center">
                            <GiLungs className="w-5 h-5 mr-2"/>
                            Patologías Restrictivas
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Neumonía</h4>
                                <p className="text-sm text-gray-700">Infección del parénquima pulmonar</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Edema pulmonar</h4>
                                <p className="text-sm text-gray-700">Acumulación de líquido en alvéolos</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Neumotórax</h4>
                                <p className="text-sm text-gray-700">Aire en el espacio pleural</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-blue-600">Derrame pleural</h4>
                                <p className="text-sm text-gray-700">Líquido en el espacio pleural</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                            <MdCheckCircle className="w-5 h-5 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Evaluar vía aérea como primera prioridad</li>
                            <li>Administrar oxígeno si SpO₂ &lt; 94%</li>
                            <li>Mantener posición cómoda (sentado si tolera)</li>
                            <li>Monitorizar signos vitales continuamente</li>
                            <li>Considerar broncodilatadores en broncoespasmo</li>
                            <li>Reevaluar respuesta al tratamiento</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Forzar posición supina en disnea severa</li>
                            <li>Administrar sedantes en dificultad respiratoria</li>
                            <li>Dar oxígeno a alto flujo en EPOC sin monitoreo</li>
                            <li>Ignorar cambios en el nivel de conciencia</li>
                            <li>Retrasar el traslado en emergencias críticas</li>
                            <li>Subestimar la gravedad en pacientes geriátricos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}