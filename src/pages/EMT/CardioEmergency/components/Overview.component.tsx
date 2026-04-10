import {FaExclamationTriangle} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {FiActivity, FiAlertTriangle, FiEye, FiHeart, FiUser} from "react-icons/fi";
import {BsLightbulb, BsShield} from "react-icons/bs";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-linear-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Prioridad Absoluta!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las emergencias cardiovasculares son la <strong>principal causa de muerte</strong> a nivel mundial.
                    El reconocimiento temprano y la intervención rápida pueden ser la diferencia entre la vida y la
                    muerte.
                    <span className="text-red-600 font-bold"> Cada minuto cuenta.</span>
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Primeros 10 min</p>
                        <p className="text-sm">Tiempo crítico para intervención</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FiHeart className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">90 min</p>
                        <p className="text-sm">Ventana terapéutica óptima</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">4-6 horas</p>
                        <p className="text-sm">Daño miocárdico irreversible</p>
                    </div>
                </div>
            </div>

            {/* Cadena de supervivencia */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Cadena de Supervivencia Cardiovascular
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="bg-linear-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-blue-700 mb-3 text-center">1. Reconocimiento</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Identificar signos de alerta</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Activar SEM inmediatamente</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Evaluar estado del paciente</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-linear-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-green-700 mb-3 text-center">2. RCP Precoz</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Compresiones de alta calidad</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>100-120 compresiones/min</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Profundidad 5-6 cm</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-linear-to-b from-yellow-50 to-yellow-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-yellow-700 mb-3 text-center">3. Desfibrilación</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span>DEA lo antes posible</span>
                            </li>
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span>Seguir indicaciones del equipo</span>
                            </li>
                            <li className="flex items-start">
                                <FiHeart className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span>Minimizar interrupciones</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-linear-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-red-700 mb-3 text-center">4. SVA</h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Manejo avanzado de vía aérea</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Medicamentos vasoactivos</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Cuidados post-paro</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Principales patologías cardiovasculares - Nueva sección del resumen */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiHeart className="w-6 h-6 text-orange-600 mr-2"/>
                    <h3 className="text-xl font-bold text-orange-800">📌 Principales Patologías Cardiovasculares</h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border border-orange-200">
                        <h4 className="font-bold text-red-700 mb-2">🟠 Aterosclerosis</h4>
                        <p className="text-sm text-gray-700 mb-2">Acumulación de placa en arterias coronarias, reduce el
                            flujo sanguíneo.</p>
                        <p className="text-xs text-orange-600"><strong>Base para:</strong> IAM y otras afecciones
                            coronarias</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-200">
                        <h4 className="font-bold text-red-700 mb-2">🟠 Síndrome Coronario Agudo</h4>
                        <p className="text-sm text-gray-700 mb-2"><strong>Angina:</strong> Dolor por isquemia
                            transitoria, se alivia con reposo.</p>
                                <p className="text-sm text-gray-700"><strong>IAM:</strong> Oclusión completa, dolor mayor 15
                                        min, no mejora con reposo.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-bold text-gray-700 mb-2">🟠 Shock Cardiogénico</h4>
                        <p className="text-sm text-gray-700 mb-2">↓ Capacidad de bombeo → hipoperfusión sistémica.</p>
                        <p className="text-xs text-gray-600"><strong>Signos:</strong> Hipotensión, piel fría/húmeda,
                            pulso débil</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                        <h4 className="font-bold text-blue-700 mb-2">🟠 Insuficiencia Cardíaca</h4>
                        <p className="text-sm text-gray-700 mb-2"><strong>Falla izquierda:</strong> Edema pulmonar,
                            disnea, esputo rosado.</p>
                        <p className="text-sm text-gray-700"><strong>Falla derecha:</strong> Edema periférico,
                            distensión yugular.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-red-300">
                        <h4 className="font-bold text-red-800 mb-2">🟠 Emergencias Hipertensivas</h4>
                        <p className="text-sm text-gray-700 mb-2">PA sistólica mayor a 180 mmHg con daño a órganos.</p>
                        <p className="text-xs text-red-600"><strong>Síntomas:</strong> Cefalea intensa, visión borrosa,
                            náuseas</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-300">
                        <h4 className="font-bold text-gray-800 mb-2">⚡ Paro Cardíaco</h4>
                        <p className="text-sm text-gray-700 mb-2">FV u otras arritmias letales. RCP inmediata + DEA.</p>
                        <p className="text-xs text-gray-600"><strong>Protocolo:</strong> 5 ciclos (2 min) entre análisis
                        </p>
                    </div>
                </div>
            </div>

            {/* Protocolo de tratamiento prehospitalario específico */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsShield className="w-6 h-6 text-blue-600 mr-2"/>
                    <h3 className="text-xl font-bold text-blue-800">Tratamiento Prehospitalario - Resumen Ejecutivo</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-3">🩺 SCA - Síndrome Coronario Agudo:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• <strong>O₂:</strong> Solo si dificultad respiratoria o hipoxia</li>
                            <li>• <strong>Nitroglicerina:</strong> Si prescrita y no hay contraindicaciones</li>
                            <li>• <strong>Aspirina:</strong> Si está protocolizado (160-325mg)</li>
                            <li>• <strong>ECG:</strong> Monitoreo si disponible</li>
                            <li>• <strong>Traslado:</strong> Inmediato a centro con intervencionismo</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-3">💨 ICC - Insuficiencia Cardíaca:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• <strong>CPAP:</strong> Excelente para edema pulmonar (si disponible)</li>
                            <li>• <strong>O₂ suplementario:</strong> Alto flujo</li>
                            <li>• <strong>Ventilación asistida:</strong> Si dificultad respiratoria severa</li>
                            <li>• <strong>Posición:</strong> Fowler alta</li>
                            <li>• <strong>Traslado:</strong> Urgente</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-sm text-blue-800"><strong>🔺 Tríada de Beck (Taponamiento):</strong> Distensión
                        yugular + tonos apagados + presión de pulso ↓. Requiere intervención quirúrgica urgente.</p>
                </div>
            </div>

            {/* Gasto cardíaco y conceptos fisiológicos */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiActivity className="w-6 h-6 text-purple-600 mr-2"/>
                    <h3 className="text-xl font-bold text-purple-800">🫀 Relevancia del Gasto Cardíaco</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-purple-700 mb-2">Gasto Cardíaco (GC)</h4>
                        <p className="text-sm text-gray-700 mb-2"><strong>GC = FC × VS</strong></p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Normal: 4-8 L/min</li>
                            <li>• Determinante clave de perfusión</li>
                            <li>• Se compromete en shock cardiogénico</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-purple-700 mb-2">Sistema de Conducción</h4>
                        <p className="text-sm text-gray-700 mb-2"><strong>Automatismo del Tejido Cardíaco</strong></p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Nodo SA: Marcapasos natural</li>
                            <li>• Genera impulsos eléctricos automáticos</li>
                            <li>• Arritmias alteran la conducción</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-purple-700 mb-2">Perfusión Coronaria</h4>
                        <p className="text-sm text-gray-700 mb-2"><strong>Irrigación del Miocardio</strong></p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Ocurre principalmente en diástole</li>
                            <li>• Se compromete en isquemia</li>
                            <li>• Base fisiopatológica del SCA</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Emergencia Cardiovascular - Actúa
                        INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Síntomas Clásicos:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Dolor torácico opresivo</strong> - Como peso en el pecho</li>
                            <li><strong>Irradiación del dolor</strong> - Brazo izquierdo, cuello, mandíbula</li>
                            <li><strong>Disnea súbita</strong> - Dificultad respiratoria severa</li>
                            <li><strong>Diaforesis profusa</strong> - Sudoración fría excesiva</li>
                            <li><strong>Náusea y vómito</strong> - Especialmente en mujeres</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Signos de Gravedad:</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Pérdida de conciencia</strong> - Síncope o colapso súbito</li>
                            <li><strong>Piel fría y pegajosa</strong> - Signos de shock</li>
                            <li><strong>Cianosis</strong> - Coloración azulada de labios/uñas</li>
                            <li><strong>Pulso irregular</strong> - Arritmias evidentes</li>
                            <li><strong>Hipotensión severa</strong> - Presión sistólica &lt;90 mmHg</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para Paramédicos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evaluar ABC inmediatamente</li>
                            <li>Administrar oxígeno suplementario</li>
                            <li>Monitorización cardíaca continua</li>
                            <li>Acceso IV temprano</li>
                            <li>ECG de 12 derivaciones</li>
                            <li>Aspirina 300mg masticable (si no alergia)</li>
                            <li>Tranquilizar al paciente</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dejar al paciente solo</li>
                            <li>Permitir que camine o se esfuerce</li>
                            <li>Dar medicamentos sublinguales si hipotensión</li>
                            <li>Asumir que es "solo ansiedad"</li>
                            <li>Retrasarse en el traslado</li>
                            <li>Olvidar la historia clínica</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}