import {PiChalkboardTeacher} from "react-icons/pi";
import {HiOutlineExclamationTriangle} from "react-icons/hi2";
import {FiAlertTriangle} from "react-icons/fi";
import {MdPsychology, MdTipsAndUpdates, MdWarning} from "react-icons/md";
import {FaAmbulance, FaBrain, FaHeart, FaMask, FaUsers} from "react-icons/fa";

export default function Practice() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <PiChalkboardTeacher className="inline mr-3 text-orange-500"/>
                Casos Prácticos de Seguridad
            </h2>

            {/* Caso 1: Escena insegura */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                    <HiOutlineExclamationTriangle className="mr-2"/>
                    Caso 1: Accidente Vehicular en Carretera
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-red-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> 23:45 hrs. Colisión múltiple en autopista.
                        Lluvia intensa, visibilidad reducida, tráfico pesado a alta velocidad.
                        Dos vehículos volcados, uno en llamas. Reportan 4 víctimas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3 flex items-center">
                            <FiAlertTriangle className="mr-2"/>
                            Riesgos Identificados
                        </h4>
                        <ul className="space-y-2">
                            <li className="flex items-start text-gray-700">
                                <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                <span
                                    className="text-sm">Tráfico vehicular a alta velocidad</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                <span className="text-sm">Condiciones climáticas adversas</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                <span className="text-sm">Incendio vehicular activo</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                <span className="text-sm">Visibilidad reducida</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <MdWarning className="mr-2 text-red-600 mt-0.5"/>
                                <span className="text-sm">Posible derrame de combustible</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-red-700 mb-3">Acciones Prioritarias</h4>
                        <ol className="space-y-2">
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">1
                                </div>
                                <span
                                    className="text-sm">Solicitar apoyo policial inmediato para control de tráfico</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">2
                                </div>
                                <span
                                    className="text-sm">Colocarse chaleco reflectante y activar luces de emergencia</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">3
                                </div>
                                <span className="text-sm">Solicitar bomberos por incendio vehicular</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">4
                                </div>
                                <span className="text-sm">NO aproximarse hasta que la escena sea segura</span>
                            </li>
                            <li className="flex items-start text-gray-700">
                                <div
                                    className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs mr-2 mt-0.5">5
                                </div>
                                <span className="text-sm">Establecer zona de seguridad 100m antes del accidente</span>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="mt-4 bg-red-100 p-3 rounded">
                    <h4 className="font-bold text-red-800 mb-2">Lección Clave</h4>
                    <p className="text-sm text-red-700">
                        <strong>"La escena no es segura hasta que esté confirmadamente
                            segura."</strong>
                        Nunca comprometas tu seguridad por la urgencia de atender pacientes.
                        Un rescatista herido no puede ayudar a nadie más.
                    </p>
                </div>
            </div>

            {/* Caso 2: Exposición biológica */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <FaMask className="mr-2"/>
                    Caso 2: Exposición a Material Biológico
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-blue-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Durante la atención de un paciente con
                        hemorragia digestiva alta,
                        el TUM sufre una salpicadura de sangre en el ojo derecho al momento que
                        el paciente vomita.
                        El paciente tiene antecedentes de hepatitis B.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-blue-700 mb-3">Acciones Inmediatas</h4>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                                <h5 className="font-bold text-blue-600 text-sm">1. Lavado
                                    Inmediato (Primeros 15 minutos)</h5>
                                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                    <li>• Irrigación abundante con solución salina estéril</li>
                                    <li>• Si no disponible, usar agua limpia</li>
                                    <li>• Irrigar desde el ángulo interno hacia externo</li>
                                    <li>• Duración mínima: 15 minutos</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                                <h5 className="font-bold text-blue-600 text-sm">2.
                                    Notificación</h5>
                                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                    <li>• Informar inmediatamente al supervisor</li>
                                    <li>• Documentar hora, lugar y tipo de exposición</li>
                                    <li>• Notificar al centro de despacho</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-blue-700 mb-3">Seguimiento
                            Post-Exposición</h4>
                        <div className="space-y-3">
                            <div
                                className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                                <h5 className="font-bold text-green-600 text-sm">Evaluación
                                    Médica (&lt; 2 horas)</h5>
                                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                    <li>• Acudir a urgencias del hospital base</li>
                                    <li>• Llevar información del paciente fuente</li>
                                    <li>• Evaluación por infectología</li>
                                </ul>
                            </div>
                            <div
                                className="bg-orange-50 p-3 rounded border-l-4 border-orange-500">
                                <h5 className="font-bold text-orange-600 text-sm">Laboratorios</h5>
                                <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                    <li>• Serología basal (VHB, VHC, VIH)</li>
                                    <li>• Seguimiento a 6 semanas, 3 y 6 meses</li>
                                    <li>• Considerar profilaxis post-exposición</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-100 p-3 rounded">
                        <h4 className="font-bold text-yellow-800 mb-2">Prevención</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• Uso obligatorio de protección ocular</li>
                            <li>• Mascarilla facial completa en alto riesgo</li>
                            <li>• Posicionamiento lateral del rescatista</li>
                            <li>• Aspiración temprana de secreciones</li>
                        </ul>
                    </div>
                    <div className="bg-blue-100 p-3 rounded">
                        <h4 className="font-bold text-blue-800 mb-2">Documentación
                            Requerida</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Formato de exposición ocupacional</li>
                            <li>• Reporte de incidente</li>
                            <li>• Evaluación médica inicial</li>
                            <li>• Plan de seguimiento</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Caso 3: Estrés post-incidente */}
            <div
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                    <FaBrain className="mr-2"/>
                    Caso 3: Estrés Agudo Post-Incidente Crítico
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-purple-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Tras atender un accidente que involucró
                        niños con múltiples
                        víctimas fatales, un paramédico experimentado comienza a presentar
                        insomnio,
                        pesadillas recurrentes y evita turnos nocturnos. Su rendimiento laboral
                        ha disminuido.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-purple-700 mb-3">Signos de Alerta</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <MdPsychology className="mr-2 text-purple-600"/>
                                Alteraciones del sueño
                            </li>
                            <li className="flex items-center">
                                <MdPsychology className="mr-2 text-purple-600"/>
                                Reviviscencia del evento
                            </li>
                            <li className="flex items-center">
                                <MdPsychology className="mr-2 text-purple-600"/>
                                Evitación de situaciones similares
                            </li>
                            <li className="flex items-center">
                                <MdPsychology className="mr-2 text-purple-600"/>
                                Disminución del rendimiento
                            </li>
                            <li className="flex items-center">
                                <MdPsychology className="mr-2 text-purple-600"/>
                                Aislamiento social
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-purple-700 mb-3">Intervención
                            Inmediata</h4>
                        <div className="space-y-2">
                            <div className="bg-purple-50 p-2 rounded text-sm">
                                <strong>24-48 horas:</strong> Defusing - ventilación emocional
                                informal
                            </div>
                            <div className="bg-purple-50 p-2 rounded text-sm">
                                <strong>72 horas:</strong> CISD formal si los síntomas persisten
                            </div>
                            <div className="bg-purple-50 p-2 rounded text-sm">
                                <strong>1 semana:</strong> Evaluación psicológica profesional
                            </div>
                            <div className="bg-purple-50 p-2 rounded text-sm">
                                <strong>Continuo:</strong> Seguimiento y apoyo entre pares
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-purple-700 mb-3">Recursos de Apoyo</h4>
                        <ul className="text-sm text-gray-600 space-y-2">
                            <li className="flex items-center">
                                <FaUsers className="mr-2 text-purple-600"/>
                                Equipo CISM
                            </li>
                            <li className="flex items-center">
                                <FaHeart className="mr-2 text-purple-600"/>
                                Psicólogo especializado
                            </li>
                            <li className="flex items-center">
                                <FaAmbulance className="mr-2 text-purple-600"/>
                                Programa de asistencia al empleado
                            </li>
                            <li className="flex items-center">
                                <FaUsers className="mr-2 text-purple-600"/>
                                Grupos de apoyo
                            </li>
                            <li className="flex items-center">
                                <FaBrain className="mr-2 text-purple-600"/>
                                Línea de crisis 24/7
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 bg-purple-100 p-3 rounded">
                    <h4 className="font-bold text-purple-800 mb-2">Mensaje Importante</h4>
                    <p className="text-sm text-purple-700">
                        Las reacciones de estrés post-incidente crítico
                        son <strong>normales</strong>
                        ante situaciones anormales. Buscar ayuda es signo de fortaleza, no de
                        debilidad.
                        El estigma asociado con la salud mental en servicios de emergencia debe
                        ser eliminado.
                    </p>
                </div>
            </div>

            {/* Caso 4: Agresión en escena */}
            <div
                className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                    <FaUsers className="mr-2"/>
                    Caso 4: Agresión y Violencia en Escena
                </h3>
                <div className="bg-white p-4 rounded border-l-4 border-orange-500 mb-4">
                    <p className="text-gray-700 italic">
                        <strong>Escenario:</strong> Llamada por intoxicación etílica en zona
                        conflictiva.
                        Al llegar, el paciente está agresivo y los familiares muestran
                        hostilidad hacia
                        la ambulancia. Se observan personas sospechosas merodeando el área.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-orange-700 mb-3">Evaluación de
                            Seguridad</h4>
                        <div className="space-y-2">
                            <div className="bg-red-50 p-2 rounded text-sm">
                                <strong>Señales de peligro:</strong>
                                <ul className="mt-1 text-xs text-gray-600">
                                    <li>• Hostilidad abierta hacia personal médico</li>
                                    <li>• Presencia de individuos sospechosos</li>
                                    <li>• Paciente agresivo y desorientado</li>
                                    <li>• Zona conocida por violencia</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-2 rounded text-sm">
                                <strong>Decisión:</strong> NO ingresar hasta que policía asegure
                                la escena
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-orange-700 mb-3">Protocolo de
                            Seguridad</h4>
                        <ol className="text-sm text-gray-600 space-y-1">
                            <li>1. Mantener distancia segura (&gt; 2 cuadras)</li>
                            <li>2. Solicitar apoyo policial inmediato</li>
                            <li>3. Comunicar situación al despachador</li>
                            <li>4. Preparar ruta de escape rápida</li>
                            <li>5. NO intentar dialogar o mediar</li>
                            <li>6. Esperar "escena segura" de policía</li>
                            <li>7. Mantener radio encendida</li>
                        </ol>
                    </div>
                </div>

                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700 mb-2">Nunca Hagas</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Ingresar a escena sin policía</li>
                            <li>• Confrontar a personas agresivas</li>
                            <li>• Dar la espalda a multitudes hostiles</li>
                            <li>• Separarte de tu compañero</li>
                        </ul>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-2">Siempre Haz</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Mantener comunicación constante</li>
                            <li>• Posicionar ambulancia para escape</li>
                            <li>• Confiar en tu instinto</li>
                            <li>• Reportar amenazas</li>
                        </ul>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-2">Post-Incidente</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Reportar amenazas a supervisión</li>
                            <li>• Documentar evento completo</li>
                            <li>• Debriefing con el equipo</li>
                            <li>• Considerar apoyo psicológico</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Reflexiones finales */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdTipsAndUpdates className="mr-2 text-orange-500"/>
                    Principios Fundamentales de Seguridad
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                        <h4 className="font-bold text-orange-700 mb-2">Prevención</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• La seguridad es responsabilidad de todos</li>
                            <li>• Capacitación continua</li>
                            <li>• Actualización de protocolos</li>
                            <li>• Cultura de seguridad organizacional</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-700 mb-2">Preparación</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• EPP siempre disponible y funcional</li>
                            <li>• Planes de emergencia claros</li>
                            <li>• Comunicación efectiva</li>
                            <li>• Trabajo en equipo</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <h4 className="font-bold text-green-700 mb-2">Respuesta</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Evaluación constante de riesgos</li>
                            <li>• Adaptabilidad ante cambios</li>
                            <li>• Toma de decisiones informada</li>
                            <li>• Apoyo mutuo entre compañeros</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}