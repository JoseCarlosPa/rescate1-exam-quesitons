import {TbStethoscope} from "react-icons/tb";
import {MdCheckCircle, MdWarning} from "react-icons/md";
import {FiAlertTriangle, FiTarget, FiUser} from "react-icons/fi";
import {FaExclamationTriangle} from "react-icons/fa";
import {GiKidneys} from "react-icons/gi";
import {BsLightbulb} from "react-icons/bs";

export default function Practice() {
    return (
        <div className="space-y-8">
            {/* Introducción a casos clínicos */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-l-4 border-teal-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <TbStethoscope className="w-8 h-8 text-teal-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-teal-700">Casos Clínicos Prácticos</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Analiza estos casos reales para <strong>desarrollar tu capacidad de evaluación</strong> y <strong>toma
                    de decisiones</strong> en el manejo de lesiones abdominales y genitourinarias.
                </p>
            </div>

            {/* Caso 1: Trauma cerrado con shock */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg shadow-lg border border-red-200">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold flex items-center">
                        <MdWarning className="w-6 h-6 mr-2"/>
                        Caso 1: Trauma Abdominal Cerrado con Shock
                    </h3>
                </div>
                <div className="p-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <h4 className="font-bold text-red-700 mb-2 flex items-center">
                            <FiUser className="w-5 h-5 mr-2"/>
                            Información del Paciente:
                        </h4>
                        <p className="text-gray-700 mb-3">
                            <strong>Hombre, 28 años, motociclista</strong> - Colisión frontal a 60 km/h sin casco.
                            Se queja de dolor abdominal severo y dificultad para respirar.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="font-semibold text-red-600 mb-1">Signos Vitales:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• FC: 130 lpm (taquicardia)</li>
                                    <li>• TA: 85/50 mmHg (hipotensión)</li>
                                    <li>• FR: 28 rpm (taquipnea)</li>
                                    <li>• SpO₂: 94% (hipoxia leve)</li>
                                    <li>• Temperatura: 36.2°C</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold text-red-600 mb-1">Examen Físico:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Consciente, ansioso, pálido</li>
                                    <li>• Piel fría y sudorosa</li>
                                    <li>• Abdomen distendido</li>
                                    <li>• Dolor a la palpación en CSD</li>
                                    <li>• Llenado capilar: 4 segundos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                                <FiAlertTriangle className="w-4 h-4 mr-2"/>
                                Análisis del Caso:
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <strong>Mecanismo:</strong> Trauma cerrado de alta energía</li>
                                <li>• <strong>Lesión probable:</strong> Ruptura hepática</li>
                                <li>• <strong>Complicación:</strong> Shock hipovolémico clase III</li>
                                <li>• <strong>Riesgo:</strong> Hemorragia interna masiva</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                Manejo Correcto:
                            </h4>
                            <ol className="text-sm text-gray-700 space-y-1">
                                <li>1. Oxígeno al 100% con mascarilla</li>
                                <li>2. Dos accesos venosos calibre 14-16G</li>
                                <li>3. Posición supina con piernas elevadas</li>
                                <li>4. Monitorización continua</li>
                                <li>5. Traslado código rojo a trauma center</li>
                                <li>6. Comunicación con hospital receptor</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-red-100 rounded-lg border border-red-300">
                        <h4 className="font-bold text-red-800 mb-2">Puntos Clave de Aprendizaje:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• La hipotensión + distensión abdominal + mecanismo de alta energía = sospecha de
                                hemorragia interna
                            </li>
                            <li>• El shock clase III requiere intervención inmediata y traslado urgente</li>
                            <li>• No hay tiempo para procedimientos no esenciales en campo</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Caso 2: Evisceración traumática */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg shadow-lg border border-orange-200">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold flex items-center">
                        <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                        Caso 2: Evisceración Abdominal
                    </h3>
                </div>
                <div className="p-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                            <FiUser className="w-5 h-5 mr-2"/>
                            Información del Paciente:
                        </h4>
                        <p className="text-gray-700 mb-3">
                            <strong>Mujer, 32 años</strong> - Agresión con arma blanca (cuchillo) en abdomen.
                            Se observan asas intestinales protruidas de la herida.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="font-semibold text-orange-600 mb-1">Signos Vitales:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• FC: 105 lpm (taquicardia leve)</li>
                                    <li>• TA: 110/75 mmHg (normal)</li>
                                    <li>• FR: 22 rpm (taquipnea leve)</li>
                                    <li>• SpO₂: 98% (normal)</li>
                                    <li>• Escala de dolor: 8/10</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold text-orange-600 mb-1">Examen Físico:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Consciente, cooperativa, ansiosa</li>
                                    <li>• Herida de 8 cm en línea media</li>
                                    <li>• Intestino delgado eviscerado</li>
                                    <li>• Sangrado moderado controlable</li>
                                    <li>• Resto del abdomen blando</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                Errores Comunes a Evitar:
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• ❌ Intentar reintroducir el intestino</li>
                                <li>• ❌ Lavar las vísceras con suero</li>
                                <li>• ❌ Usar apósitos secos</li>
                                <li>• ❌ Aplicar presión directa</li>
                                <li>• ❌ Dar líquidos por vía oral</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                Técnica Correcta:
                            </h4>
                            <ol className="text-sm text-gray-700 space-y-1">
                                <li>1. Cubrir vísceras con apósito estéril húmedo</li>
                                <li>2. Colocar apósito oclusivo por encima</li>
                                <li>3. Fijar sin comprimir</li>
                                <li>4. Posición supina con rodillas flexionadas</li>
                                <li>5. Oxígeno suplementario</li>
                                <li>6. Analgesia según protocolos</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-orange-100 rounded-lg border border-orange-300">
                        <h4 className="font-bold text-orange-800 mb-2">Puntos Clave de Aprendizaje:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• La evisceración requiere manejo específico para prevenir infección y desecación</li>
                            <li>• Los apósitos húmedos mantienen la viabilidad de los tejidos</li>
                            <li>• La posición con rodillas flexionadas reduce la tensión abdominal</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Caso 3: Lesión genitourinaria */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg border border-blue-200">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold flex items-center">
                        <GiKidneys className="w-6 h-6 mr-2"/>
                        Caso 3: Lesión Renal con Hematuria
                    </h3>
                </div>
                <div className="p-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                            <FiUser className="w-5 h-5 mr-2"/>
                            Información del Paciente:
                        </h4>
                        <p className="text-gray-700 mb-3">
                            <strong>Adolescente, 16 años</strong> - Accidente en bicicleta de montaña, caída desde 3
                            metros.
                            Impacto en flanco derecho contra roca. Orina con sangre visible.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h5 className="font-semibold text-blue-600 mb-1">Signos Vitales:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• FC: 100 lpm (límite alto normal)</li>
                                    <li>• TA: 125/80 mmHg (normal)</li>
                                    <li>• FR: 18 rpm (normal)</li>
                                    <li>• SpO₂: 99% (normal)</li>
                                    <li>• Dolor: 6/10 en flanco derecho</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold text-blue-600 mb-1">Examen Físico:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Consciente, orientado, colaborador</li>
                                    <li>• Dolor y sensibilidad en flanco derecho</li>
                                    <li>• Hematuria macroscópica</li>
                                    <li>• Abdomen blando, no distendido</li>
                                    <li>• Sin hematomas externos visibles</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
                                <FiTarget className="w-4 h-4 mr-2"/>
                                Diagnóstico Diferencial:
                            </h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <strong>Probable:</strong> Contusión renal</li>
                                <li>• <strong>Posible:</strong> Laceración renal menor</li>
                                <li>• <strong>Descartar:</strong> Lesión de grandes vasos</li>
                                <li>• <strong>Considerar:</strong> Lesión vesical</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                Manejo Apropiado:
                            </h4>
                            <ol className="text-sm text-gray-700 space-y-1">
                                <li>1. Monitorización continua de signos vitales</li>
                                <li>2. Posición de comodidad</li>
                                <li>3. Analgesia según protocolos</li>
                                <li>4. NO colocar sonda urinaria</li>
                                <li>5. Conservar muestra de orina</li>
                                <li>6. Traslado para evaluación urológica</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-100 rounded-lg border border-blue-300">
                        <h4 className="font-bold text-blue-800 mb-2">Puntos Clave de Aprendizaje:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• La hematuria después de trauma siempre requiere evaluación hospitalaria</li>
                            <li>• NO colocar sonda urinaria si hay sospecha de lesión uretral</li>
                            <li>• La estabilidad hemodinámica no excluye lesión renal significativa</li>
                            <li>• El dolor en flanco puede irradiarse a genitales</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Ejercicio de toma de decisiones */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg shadow-lg border border-purple-200">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-t-lg">
                    <h3 className="text-xl font-bold flex items-center">
                        <BsLightbulb className="w-6 h-6 mr-2"/>
                        Ejercicio de Toma de Decisiones
                    </h3>
                </div>
                <div className="p-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                        <h4 className="font-bold text-purple-700 mb-2">Escenario Complejo:</h4>
                        <p className="text-gray-700">
                            Múltiples pacientes en accidente de tráfico. Debes priorizar el tratamiento y transporte.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <h4 className="font-semibold text-red-700 mb-2">Paciente A</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Evisceración abdominal</li>
                                <li>• FC: 120, TA: 100/60</li>
                                <li>• Consciente, dolor 9/10</li>
                                <li>• Sangrado moderado</li>
                            </ul>
                            <div className="mt-2 p-2 bg-red-100 rounded text-xs">
                                <strong>Prioridad:</strong> ¿Roja, Amarilla o Verde?
                            </div>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-yellow-700 mb-2">Paciente B</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Dolor abdominal moderado</li>
                                <li>• FC: 85, TA: 130/80</li>
                                <li>• Hematuria leve</li>
                                <li>• Estable</li>
                            </ul>
                            <div className="mt-2 p-2 bg-yellow-100 rounded text-xs">
                                <strong>Prioridad:</strong> ¿Roja, Amarilla o Verde?
                            </div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-700 mb-2">Paciente C</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Herida penetrante</li>
                                <li>• FC: 140, TA: 70/40</li>
                                <li>• Disminución conciencia</li>
                                <li>• Piel fría y pálida</li>
                            </ul>
                            <div className="mt-2 p-2 bg-blue-100 rounded text-xs">
                                <strong>Prioridad:</strong> ¿Roja, Amarilla o Verde?
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 p-4 bg-purple-100 rounded-lg border border-purple-300">
                        <h4 className="font-bold text-purple-800 mb-2">Respuesta Correcta:</h4>
                        <p className="text-sm text-gray-700">
                            <strong>Orden de prioridad:</strong> C (Roja - shock severo), A (Roja - evisceración), B
                            (Amarilla - estable).
                            El paciente C tiene signos de shock clase III-IV y requiere atención inmediata.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}