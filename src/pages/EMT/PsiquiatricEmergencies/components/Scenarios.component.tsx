import {FaEye} from "react-icons/fa";
import {MdWarning} from "react-icons/md";
import {BsLightbulb} from "react-icons/bs";

export default function Scenarios(){
    return(
        <div className="space-y-8">
            <div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Casos Clínicos
                        Realistas</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Estos casos están basados en situaciones reales. Cada uno incluye elementos
                    de evaluación,
                    toma de decisiones y manejo específico para prepararte para el campo.
                </p>
            </div>

            <div className="space-y-6">
                {/* Caso 1: Ideación suicida */}
                <div
                    className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg shadow-sm border border-red-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</span>
                        <h3 className="text-2xl font-semibold text-red-700">Caso: Ideación
                            Suicida Activa</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-red-400">
                        <h4 className="font-bold text-red-700 mb-2">📋 Escenario Inicial:</h4>
                        <p className="text-gray-700 italic">
                            "Mujer de 45 años encontrada por su hermana en su departamento. La
                            hermana reporta que la paciente
                            ha estado 'organizando sus cosas' y escribiendo cartas de despedida.
                            Tiene historia de depresión
                            y un intento de sobredosis hace 2 años. Actualmente está sentada en
                            el borde de la cama,
                            llorando y dice 'ya no puedo más, quiero que todo termine'."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-red-700 mb-3">🚨 Factores de Riesgo
                                Identificados:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Historia previa</strong> de intento suicida</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Preparación activa</strong> (organizando cosas, cartas)</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Verbalización directa</strong> de intención</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Depresión conocida</strong> sin tratamiento adecuado</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Desesperanza</strong> expresada</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-700 mb-3">✅ Manejo Paso a
                                Paso:</h4>
                            <ol className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                    <span>Asegurar la escena - remover medios letales</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                    <span>Aproximación calmada, sin movimientos bruscos</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                    <span>Presentarse y establecer rapport</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                    <span>Evaluación médica: signos vitales, glucosa</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                    <span><strong>NUNCA</strong> dejar al paciente solo</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">6</span>
                                    <span>Transporte inmediato para evaluación psiquiátrica</span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-700 mb-2">💬 Frases Terapéuticas
                            Sugeridas:</h4>
                        <ul className="space-y-1 text-gray-700">
                            <li>"Puedo ver que está pasando por un momento muy difícil"</li>
                            <li>"Me preocupo por su seguridad y quiero ayudarla"</li>
                            <li>"¿Puede contarme qué la ha llevado a sentirse así?"</li>
                            <li>"Hay personas que pueden ayudarla a sentirse mejor"</li>
                        </ul>
                    </div>
                </div>

                {/* Caso 2: Delirio agitado */}
                <div
                    className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg shadow-sm border border-red-300">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</span>
                        <h3 className="text-2xl font-semibold text-red-700">Caso: Delirio
                            Agitado Severo</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700 mb-2">🚨 Llamada de
                            Emergencia:</h4>
                        <p className="text-gray-700 italic">
                            "Hombre de 28 años encontrado en parque público, extremadamente
                            agitado. Requirió 4 oficiales para controlarlo.
                            Se quita la ropa, sudoración excesiva, temperatura de 40°C. Presenta
                            paranoia severa, cree que 'lo persiguen los aliens'.
                            Fuerza anormal, rompió las esposas de plástico. Posible uso de
                            metanfetaminas según testigos."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-red-700 mb-3">⚠️ Signos Críticos:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Hipertermia severa</strong> (40°C)</span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Fuerza sobrehumana</strong> (rompió esposas)</span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Diaforesis profusa</strong></span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Paranoia severa</strong> con alucinaciones</span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Comportamiento violento</strong></span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-red-700 mb-3">🚨 Manejo de
                                Emergencia:</h4>
                            <ol className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                    <span><strong>Seguridad</strong> - Apoyo policial completo</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                    <span><strong>Restricción física</strong> - NUNCA posición prona</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                    <span><strong>Enfriamiento agresivo</strong> - Compresas frías</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                    <span><strong>Monitorización continua</strong> ABC</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                    <span><strong>Transporte CÓDIGO ROJO</strong></span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 bg-red-100 p-4 rounded-lg border border-red-300">
                        <h4 className="font-bold text-red-700 mb-2">💀 ¿Por qué es tan
                            peligroso?</h4>
                        <p className="text-gray-700">
                            El delirio agitado tiene una <strong>mortalidad del
                            8-14%</strong> debido a:
                            acidosis metabólica, rabdomiólisis, hipertermia maligna, arritmias
                            cardíacas y paro cardíaco súbito.
                            <strong> Es una verdadera emergencia médica.</strong>
                        </p>
                    </div>
                </div>

                {/* Caso 3: Psicosis con alucinaciones */}
                <div
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg shadow-sm border border-purple-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</span>
                        <h3 className="text-2xl font-semibold text-purple-700">Caso: Episodio
                            Psicótico Agudo</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-purple-400">
                        <h4 className="font-bold text-purple-700 mb-2">👁️ Presentación
                            Clínica:</h4>
                        <p className="text-gray-700 italic">
                            "Mujer de 32 años con esquizofrenia conocida, suspendió medicación
                            antipsicótica hace 1 semana.
                            La encuentran hablando sola en voz alta, dice ver 'insectos que
                            caminan por las paredes' y
                            cree que 'los vecinos la espían através de las cámaras'. No es
                            violenta pero está muy
                            desconfiada y no quiere que se le acerquen."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-purple-700 mb-3">🧠 Síntomas
                                Psicóticos:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                    <span><strong>Alucinaciones visuales</strong> (insectos en paredes)</span>
                                </li>
                                <li className="flex items-start">
                                    <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                    <span><strong>Alucinaciones auditivas</strong> (habla sola)</span>
                                </li>
                                <li className="flex items-start">
                                    <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                    <span><strong>Delirios paranoides</strong> (vecinos la espían)</span>
                                </li>
                                <li className="flex items-start">
                                    <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                    <span><strong>Desorganización</strong> del pensamiento</span>
                                </li>
                                <li className="flex items-start">
                                    <FaEye className="w-4 h-4 text-purple-500 mt-1 mr-2"/>
                                    <span><strong>Desconfianza extrema</strong></span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-green-700 mb-3">🗣️ Técnicas de
                                Comunicación:</h4>
                            <ol className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                    <span><strong>Mantener distancia</strong> respetuosa</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                    <span><strong>Voz calmada</strong> y movimientos lentos</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                    <span><strong>No confrontar</strong> las alucinaciones</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                    <span><strong>Explicar cada acción</strong> antes de realizarla</span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                    <span><strong>Obtener información</strong> sobre medicación</span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-bold text-purple-700 mb-2">💬 Ejemplo de Comunicación
                            Efectiva:</h4>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>❌ NO decir:</strong> "No hay insectos ahí, eso no es
                                real"</p>
                            <p><strong>✅ SÍ decir:</strong> "Entiendo que eso debe ser muy
                                angustiante para usted"</p>
                            <p><strong>❌ NO decir:</strong> "Sus vecinos no la están espiando"
                            </p>
                            <p><strong>✅ SÍ decir:</strong> "Puedo ver que se siente muy
                                preocupada por su seguridad"</p>
                        </div>
                    </div>
                </div>

                {/* Caso 4: Crisis de pánico */}
                <div
                    className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg shadow-sm border border-orange-200">
                    <div className="flex items-center mb-4">
                                                <span
                                                    className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</span>
                        <h3 className="text-2xl font-semibold text-orange-700">Caso: Crisis de
                            Pánico vs Infarto</h3>
                    </div>

                    <div className="bg-white p-4 rounded-lg mb-4 border-l-4 border-orange-400">
                        <h4 className="font-bold text-orange-700 mb-2">💓 Dilema
                            Diagnóstico:</h4>
                        <p className="text-gray-700 italic">
                            "Hombre de 35 años en oficina, súbitamente presenta dolor torácico,
                            palpitaciones, dificultad respiratoria,
                            sudoración intensa y sensación de 'me voy a morir'. Colegas reportan
                            que parecía 'un infarto'.
                            Paciente ansioso, hiperventilando, dice que 'no puede respirar' y
                            que 'algo terrible va a pasar'."
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-red-700 mb-3">🚨 Diagnóstico
                                Diferencial:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Síndrome coronario agudo</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Embolia pulmonar</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Hipertiroidismo</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Hipoglucemia</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Ataque de pánico</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                    <span><strong>Intoxicación por estimulantes</strong></span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-blue-700 mb-3">📊 Evaluación
                                Sistemática:</h4>
                            <ol className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                    <span><strong>ECG de 12 derivaciones</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                    <span><strong>Glucometría capilar</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                    <span><strong>Signos vitales completos</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                    <span><strong>Saturación de oxígeno</strong></span>
                                </li>
                                <li className="flex items-start">
                                                            <span
                                                                className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                    <span><strong>Historia clínica detallada</strong></span>
                                </li>
                            </ol>
                        </div>
                    </div>

                    <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h4 className="font-bold text-yellow-700 mb-2">⚡ Principio Clave:</h4>
                        <p className="text-gray-700">
                            <strong>NUNCA asumas que es "solo ansiedad"</strong> hasta descartar
                            causas orgánicas.
                            Los ataques de pánico son un diagnóstico de exclusión. Trata como
                            emergencia médica hasta
                            demostrar lo contrario.
                        </p>
                    </div>
                </div>
            </div>

            {/* Puntos clave para todos los casos */}
            <div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Principios Universales para Todos los Casos
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="font-bold text-blue-700 mb-2">🛡️ Seguridad Siempre:</h3>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Evalúa la escena desde lejos</li>
                            <li>• Identifica rutas de escape</li>
                            <li>• Solicita apoyo cuando sea necesario</li>
                            <li>• Nunca comprometas tu seguridad</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-green-700 mb-2">🩺 Evaluación Médica:</h3>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Siempre descarta causas orgánicas</li>
                            <li>• ABC y signos vitales completos</li>
                            <li>• Glucometría en todos los casos</li>
                            <li>• Busca signos de trauma oculto</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-purple-700 mb-2">💬 Comunicación:</h3>
                        <ul className="space-y-1 text-gray-700">
                            <li>• Mantén calma y empatía</li>
                            <li>• Escucha sin juzgar</li>
                            <li>• Sé honesto y directo</li>
                            <li>• Respeta la dignidad del paciente</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}