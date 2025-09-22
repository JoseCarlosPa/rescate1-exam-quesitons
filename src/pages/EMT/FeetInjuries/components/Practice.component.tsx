import {GiBrokenBone, GiLegArmor} from "react-icons/gi";
import {FaExclamationTriangle} from "react-icons/fa";
import {BsLightbulb} from "react-icons/bs";

export default function Practice() {
    return (
        <div className="space-y-8">
            <div
                className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-purple-600 mr-2"/>
                    <h2 className="text-2xl font-bold text-purple-800">Casos Clínicos
                        Interactivos</h2>
                </div>
                <p className="text-gray-700">
                    Analiza cada caso siguiendo el protocolo de evaluación sistemática.
                    Piensa paso a paso antes de ver las respuestas.
                </p>
            </div>

            <div className="space-y-6">
                {/* Caso 1 */}
                <div className="bg-white border-2 border-red-200 rounded-lg overflow-hidden">
                    <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                        <div className="flex items-center">
                            <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-3"/>
                            <div>
                                <h3 className="text-xl font-bold text-red-700">Caso 1: Fractura
                                    Expuesta de Tibia</h3>
                                <p className="text-red-600 text-sm">Alta prioridad - Traslado
                                    urgente</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">Escenario:</h4>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong>Paciente:</strong> Masculino, 25 años,
                                        motociclista<br/>
                                        <strong>Mecanismo:</strong> Colisión frontal a 60
                                        km/h<br/>
                                        <strong>Hallazgos:</strong> Deformidad evidente en
                                        pierna derecha,
                                        hueso visible, sangrado activo moderado, dolor intenso
                                        9/10
                                    </p>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-3">Signos
                                    vitales:</h4>
                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• FC: 110 lpm</li>
                                        <li>• PA: 130/85 mmHg</li>
                                        <li>• FR: 20 rpm</li>
                                        <li>• Saturación: 98%</li>
                                        <li>• Temperatura: 36.8°C</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">Evaluación
                                    neurovascular:</h4>
                                <div className="space-y-3">
                                    <div className="bg-blue-50 p-3 rounded">
                                        <h5 className="font-semibold text-blue-700">Circulación:</h5>
                                        <p className="text-sm text-gray-600">Pulso pedio débil,
                                            extremidad fría</p>
                                    </div>
                                    <div className="bg-orange-50 p-3 rounded">
                                        <h5 className="font-semibold text-orange-700">Sensibilidad:</h5>
                                        <p className="text-sm text-gray-600">Disminuida en dorso
                                            del pie</p>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded">
                                        <h5 className="font-semibold text-red-700">Movimiento:</h5>
                                        <p className="text-sm text-gray-600">Limitado por dolor,
                                            no evaluado</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-bold text-green-800 mb-3">Manejo Correcto:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-semibold text-green-700 mb-2">Acciones
                                        inmediatas:</h5>
                                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                        <li>Control de hemorragia con presión directa</li>
                                        <li>Cubrir herida con apósito estéril húmedo</li>
                                        <li>Documentar estado neurovascular</li>
                                        <li>Inmovilizar extremidad completa</li>
                                        <li>Acceso venoso y líquidos</li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-green-700 mb-2">Consideraciones
                                        especiales:</h5>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Traslado a centro de trauma</li>
                                        <li>• Notificar cirujano ortopédico</li>
                                        <li>• Fotografiar lesión si es posible</li>
                                        <li>• Documentar hora exacta de lesión</li>
                                        <li>• Preparar para posible cirugía</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 2 */}
                <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden">
                    <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
                        <div className="flex items-center">
                            <GiBrokenBone className="w-6 h-6 text-blue-600 mr-3"/>
                            <div>
                                <h3 className="text-xl font-bold text-blue-700">Caso 2: Luxación
                                    de Hombro</h3>
                                <p className="text-blue-600 text-sm">Prioridad media - Manejo
                                    cuidadoso</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">Escenario:</h4>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong>Paciente:</strong> Femenino, 22 años, deportista<br/>
                                        <strong>Mecanismo:</strong> Caída durante voleibol<br/>
                                        <strong>Hallazgos:</strong> Deformidad en hombro
                                        derecho,
                                        brazo en posición fija, dolor intenso 8/10
                                    </p>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-3">Presentación
                                    clínica:</h4>
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Brazo en abducción y rotación externa</li>
                                        <li>• Paciente sostiene brazo con mano contraria</li>
                                        <li>• Pérdida del contorno normal del hombro</li>
                                        <li>• Resistencia al movimiento pasivo</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">Evaluación
                                    neurovascular:</h4>
                                <div className="space-y-3">
                                    <div className="bg-green-50 p-3 rounded">
                                        <h5 className="font-semibold text-green-700">Circulación:</h5>
                                        <p className="text-sm text-gray-600">Pulso radial
                                            presente y fuerte</p>
                                    </div>
                                    <div className="bg-yellow-50 p-3 rounded">
                                        <h5 className="font-semibold text-yellow-700">Sensibilidad:</h5>
                                        <p className="text-sm text-gray-600">Leve entumecimiento
                                            en deltoides</p>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded">
                                        <h5 className="font-semibold text-red-700">Movimiento:</h5>
                                        <p className="text-sm text-gray-600">Severamente
                                            limitado por dolor</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-bold text-green-800 mb-3">Manejo Correcto:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-semibold text-green-700 mb-2">Pasos
                                        críticos:</h5>
                                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                        <li>NO intentar reducir la luxación</li>
                                        <li>Evaluar y documentar pulso radial</li>
                                        <li>Inmovilizar EN LA POSICIÓN ENCONTRADA</li>
                                        <li>Aplicar cabestrillo y vendaje</li>
                                        <li>Reevaluar estado neurovascular</li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-green-700 mb-2">Errores
                                        comunes a evitar:</h5>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Intentar &quot;acomodar&quot; el hombro</li>
                                        <li>• Forzar el movimiento</li>
                                        <li>• Aplicar tracción</li>
                                        <li>• Ignorar evaluación neurovascular</li>
                                        <li>• Subestimar necesidad de traslado</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 3 */}
                <div className="bg-white border-2 border-green-200 rounded-lg overflow-hidden">
                    <div className="bg-green-50 px-6 py-4 border-b border-green-200">
                        <div className="flex items-center">
                            <GiLegArmor className="w-6 h-6 text-green-600 mr-3"/>
                            <div>
                                <h3 className="text-xl font-bold text-green-700">Caso 3:
                                    Síndrome Compartimental</h3>
                                <p className="text-green-600 text-sm">Emergencia vascular -
                                    Reconocimiento crítico</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">Escenario:</h4>
                                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong>Paciente:</strong> Masculino, 35 años,
                                        obrero<br/>
                                        <strong>Mecanismo:</strong> Aplastamiento por objeto
                                        pesado<br/>
                                        <strong>Evolución:</strong> Lesión hace 4 horas, dolor
                                        creciente<br/>
                                        <strong>Hallazgos:</strong> Antebrazo muy inflamado,
                                        dolor extremo
                                    </p>
                                </div>
                                <h4 className="font-bold text-gray-800 mb-3">Presentación
                                    clínica:</h4>
                                <div className="bg-red-50 p-4 rounded-lg">
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Dolor desproporcionado al tipo de lesión</li>
                                        <li>• Antebrazo tenso y muy inflamado</li>
                                        <li>• Dolor que aumenta con movimiento pasivo</li>
                                        <li>• Parestesias en los dedos</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-800 mb-3">Las 6 P&apos;s del
                                    Síndrome Compartimental:</h4>
                                <div className="space-y-2">
                                    <div className="bg-red-100 p-2 rounded text-center">
                                        <span className="font-bold text-red-700">Pain</span>
                                        <p className="text-xs text-gray-600">Desproporcionado</p>
                                    </div>
                                    <div className="bg-orange-100 p-2 rounded text-center">
                                                                <span
                                                                    className="font-bold text-orange-700">Paresthesias</span>
                                        <p className="text-xs text-gray-600">Hormigueo
                                            presente</p>
                                    </div>
                                    <div className="bg-yellow-100 p-2 rounded text-center">
                                                                <span
                                                                    className="font-bold text-yellow-700">Pallor</span>
                                        <p className="text-xs text-gray-600">Palidez
                                            evidente</p>
                                    </div>
                                    <div className="bg-green-100 p-2 rounded text-center">
                                                                <span
                                                                    className="font-bold text-green-700">Paralysis</span>
                                        <p className="text-xs text-gray-600">Debilidad
                                            motora</p>
                                    </div>
                                    <div className="bg-blue-100 p-2 rounded text-center">
                                                                <span
                                                                    className="font-bold text-blue-700">Pulselessness</span>
                                        <p className="text-xs text-gray-600">Pulso débil</p>
                                    </div>
                                    <div className="bg-purple-100 p-2 rounded text-center">
                                                                <span
                                                                    className="font-bold text-purple-700">Pressure</span>
                                        <p className="text-xs text-gray-600">Compartimento
                                            tenso</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                            <h4 className="font-bold text-red-800 mb-3">Manejo de
                                Emergencia:</h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h5 className="font-semibold text-red-700 mb-2">Acciones
                                        inmediatas:</h5>
                                    <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                                        <li>TRASLADO URGENTE - Tiempo es músculo</li>
                                        <li>Elevar extremidad ligeramente</li>
                                        <li>Remover vendajes restrictivos</li>
                                        <li>Acceso venoso - líquidos isotónicos</li>
                                        <li>Notificar cirujano vascular</li>
                                    </ol>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-red-700 mb-2">Puntos
                                        críticos:</h5>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Fasciotomía urgente en hospital</li>
                                        <li>• Ventana terapéutica: 6-8 horas</li>
                                        <li>• Riesgo de pérdida de extremidad</li>
                                        <li>• Posible rabdomiólisis</li>
                                        <li>• Monitoreo renal necesario</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ejercicio de toma de decisiones */}
            <div
                className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Ejercicio de Toma de
                    Decisiones</h3>
                <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-800 mb-2">Pregunta de reflexión:</h4>
                    <p className="text-gray-700 mb-4">
                        ¿Cuál es el factor más importante para determinar la prioridad de
                        traslado
                        en una lesión ortopédica?
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-semibold text-indigo-700 mb-2">Factores a
                                considerar:</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Estado neurovascular</li>
                                <li>• Tipo de fractura</li>
                                <li>• Mecanismo de lesión</li>
                                <li>• Signos vitales</li>
                                <li>• Tiempo de evolución</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded">
                            <p className="text-sm text-indigo-700">
                                <strong>Respuesta:</strong> El compromiso neurovascular es el
                                factor
                                más crítico. Una extremidad sin irrigación o inervación tiene
                                una ventana terapéutica limitada antes de sufrir daño
                                irreversible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}