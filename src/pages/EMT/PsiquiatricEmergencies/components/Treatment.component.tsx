import {RiMentalHealthLine} from "react-icons/ri";
import {BsLightbulb, BsPersonCheck, BsShield} from "react-icons/bs";
import {MdCheckCircle, MdWarning} from "react-icons/md";
import {FaExclamationTriangle, FaRegHandPaper, FaUserMd} from "react-icons/fa";

export default function Treatment(){
    return(
        <div className="space-y-8">
            {/* Introducción a la comunicación terapéutica */}
            <div
                className="bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <RiMentalHealthLine className="w-8 h-8 text-green-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-green-700">Comunicación Terapéutica:
                        Tu Herramienta Más Poderosa</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    En emergencias psiquiátricas, <strong>cómo te comunicas puede ser la
                    diferencia entre el éxito y el fracaso</strong>.
                    Tu voz, tu lenguaje corporal y tu actitud son tan importantes como cualquier
                    medicamento.
                </p>
            </div>

            {/* Principios fundamentales de comunicación */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsPersonCheck className="w-6 h-6 mr-2 text-orange-500"/>
                    Principios Fundamentales de Comunicación
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                            <MdCheckCircle className="w-6 h-6 mr-2"/>
                            ✅ Qué SÍ Hacer
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                                <span><strong>Preséntate claramente:</strong> "Hola, soy Juan, paramédico. Estoy aquí para ayudarte"</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                                <span><strong>Usa voz calmada y suave:</strong> El tono es más importante que las palabras</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                                <span><strong>Mantén contacto visual:</strong> Demuestra interés genuino</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                                <span><strong>Escucha activamente:</strong> "Entiendo que te sientes..."</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                                <span><strong>Respeta el espacio personal:</strong> Mantén 1.5-2 metros de distancia</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                                <span><strong>Sé honesto y directo:</strong> No hagas promesas que no puedes cumplir</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                            <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                            ❌ Qué NO Hacer
                        </h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                                <span><strong>No "sigas el juego":</strong> No valides alucinaciones como reales</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                                <span><strong>No discutas delirios:</strong> No trates de convencer con lógica</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                                <span><strong>No hagas movimientos bruscos:</strong> Mantén calma en tus acciones</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                                <span><strong>No juzgues o critiques:</strong> Evita frases como "eso está mal"</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">5</span>
                                <span><strong>No invadas el espacio:</strong> El contacto físico puede ser amenazante</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">6</span>
                                <span><strong>No uses jerga médica:</strong> Habla en lenguaje simple</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Técnicas de desescalada */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Técnicas de Desescalada
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-blue-700 mb-3">📢 Técnicas Verbales:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Validación emocional:</strong> "Puedo ver que estás muy preocupado"</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Reflejo de sentimientos:</strong> "Te escucho decir que te sientes asustado"</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Ofrecer opciones:</strong> "¿Te gustaría sentarte o prefieres caminar?"</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Establecer límites claros:</strong> "Puedo ayudarte, pero necesito que no grites"</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-blue-700 mb-3">🤝 Técnicas No
                            Verbales:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Postura abierta:</strong> Brazos a los lados, palmas visibles</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Nivel de ojos:</strong> Siéntate si el paciente está sentado</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Movimientos lentos:</strong> Evita gestos bruscos o rápidos</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Expresión facial:</strong> Mantén expresión neutral y empática</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Evaluación específica del riesgo suicida */}
            <div
                className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border border-red-300">
                <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center">
                    <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                    Evaluación Específica del Riesgo Suicida
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">Escala de Riesgo Suicida
                            (SAD PERSONS):</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>S</strong> - Sexo (hombres mayor riesgo)</li>
                                <li><strong>A</strong> - Edad (adolescentes y ancianos)</li>
                                <li><strong>D</strong> - Depresión</li>
                                <li><strong>P</strong> - Intentos Previos</li>
                                <li><strong>E</strong> - Etanol/sustancias</li>
                                <li><strong>R</strong> - Pensamiento Racional perdido</li>
                                <li><strong>S</strong> - Soporte social ausente</li>
                                <li><strong>O</strong> - Plan Organizado</li>
                                <li><strong>N</strong> - No hay cónyuge</li>
                                <li><strong>S</strong> - Seriedad del intento</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">Preguntas Directas
                            Efectivas:</h3>
                        <div className="bg-white p-4 rounded-lg">
                            <ol className="space-y-2 text-gray-700">
                                <li><strong>1.</strong> "¿Ha pensado en hacerse daño?"</li>
                                <li><strong>2.</strong> "¿Con qué frecuencia tiene estos
                                    pensamientos?"
                                </li>
                                <li><strong>3.</strong> "¿Tiene un plan específico?"</li>
                                <li><strong>4.</strong> "¿Cuándo planea hacerlo?"</li>
                                <li><strong>5.</strong> "¿Qué le impide hacerlo ahora?"</li>
                                <li><strong>6.</strong> "¿Ha preparado algo para llevarlo a
                                    cabo?"
                                </li>
                                <li><strong>7.</strong> "¿Ha intentado suicidarse antes?"</li>
                                <li><strong>8.</strong> "¿Hay algo por lo que vale la pena
                                    vivir?"
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manejo de restricciones físicas */}
            <div
                className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-300">
                <h2 className="text-2xl font-semibold mb-4 text-orange-800 flex items-center">
                    <FaRegHandPaper className="w-6 h-6 mr-2"/>
                    Restricciones Físicas: Último Recurso
                </h2>

                <div className="bg-red-100 p-4 rounded-lg mb-4 border border-red-300">
                    <h3 className="font-bold text-red-700 mb-2">⚠️ Indicaciones Estrictas:</h3>
                    <ul className="space-y-1 text-gray-700">
                        <li>• <strong>Peligro inmediato</strong> para el paciente o personal
                        </li>
                        <li>• <strong>Paciente violento</strong> que no responde a comunicación
                        </li>
                        <li>• <strong>Protección de vía aérea</strong> o accesos vasculares
                            críticos
                        </li>
                        <li>• <strong>Falla de todas las técnicas</strong> de desescalada</li>
                    </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-orange-700 mb-3">📋 Protocolo de
                            Restricción Segura:</h3>
                        <ol className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">1</span>
                                <span><strong>Personal suficiente:</strong> Mínimo 5 personas (1 por extremidad + cabeza)</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">2</span>
                                <span><strong>Aproximación coordinada:</strong> Señal clara para acción simultánea</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">3</span>
                                <span><strong>Restricciones suaves:</strong> Nunca usar esposas metálicas</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">4</span>
                                <span><strong>Posición supina:</strong> NUNCA posición prona (boca abajo)</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-2 mt-0.5">5</span>
                                <span><strong>Monitorización continua:</strong> ABC y signos vitales</span>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">💀 Peligros de Asfixia
                            Posicional:</h3>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <ul className="space-y-2 text-gray-700">
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Posición prona:</strong> Comprime el diafragma</span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Peso sobre espalda:</strong> Impide expansión torácica</span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Flexión del cuello:</strong> Obstrucción de vía aérea</span>
                                </li>
                                <li className="flex items-start">
                                    <MdWarning className="w-4 h-4 text-red-500 mt-1 mr-2"/>
                                    <span><strong>Muerte súbita:</strong> Puede ocurrir en minutos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consideraciones farmacológicas */}
            <div
                className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
                <h2 className="text-2xl font-semibold mb-4 text-purple-800 flex items-center">
                    <FaUserMd className="w-6 h-6 mr-2"/>
                    Consideraciones Farmacológicas
                </h2>

                <div className="bg-yellow-100 p-4 rounded-lg mb-4 border border-yellow-300">
                    <p className="text-gray-800">
                        <strong>Importante:</strong> La administración de medicamentos
                        psiquiátricos requiere <strong>orden médica</strong>
                        y debe seguir protocolos locales específicos. No todos los servicios de
                        EMS tienen autorización para estos medicamentos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-bold text-purple-700 mb-3">💊 Medicamentos
                            Comunes:</h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded-lg border">
                                <h4 className="font-semibold text-purple-600">Haloperidol
                                    (Haldol)</h4>
                                <p className="text-sm text-gray-700">Antipsicótico para
                                    agitación severa</p>
                                <p className="text-sm text-gray-600">Dosis: 2.5-10mg IM</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border">
                                <h4 className="font-semibold text-purple-600">Lorazepam
                                    (Ativan)</h4>
                                <p className="text-sm text-gray-700">Benzodiazepina para
                                    ansiedad/agitación</p>
                                <p className="text-sm text-gray-600">Dosis: 0.5-2mg IM/IV</p>
                            </div>
                            <div className="bg-white p-3 rounded-lg border">
                                <h4 className="font-semibold text-purple-600">Midazolam
                                    (Versed)</h4>
                                <p className="text-sm text-gray-700">Sedación rápida para
                                    agitación extrema</p>
                                <p className="text-sm text-gray-600">Dosis: 2-5mg IM/IV</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-red-700 mb-3">⚠️ Precauciones
                            Críticas:</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Depresión respiratoria:</strong> Monitorizar saturación O2</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Hipotensión:</strong> Especialmente en ancianos</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Interacciones:</strong> Alcohol potencia los efectos</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Síndrome neuroléptico:</strong> Raro pero letal</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span><strong>Naloxona disponible:</strong> Para reversión si es necesario</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Algoritmo de manejo */}
            <div
                className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                    <BsShield className="w-6 h-6 mr-2"/>
                    Algoritmo de Manejo: Paso a Paso
                </h2>
                <div className="bg-white p-4 rounded-lg">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-700">Evaluación de
                                    Seguridad</h3>
                                <p className="text-gray-700">Escena segura → Apoyo disponible →
                                    Rutas de escape</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-700">Aproximación
                                    Inicial</h3>
                                <p className="text-gray-700">Presentación → Establecer rapport →
                                    Evaluación visual</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-700">Evaluación Médica</h3>
                                <p className="text-gray-700">ABC → Signos vitales → Glucometría
                                    → Descartar causas orgánicas</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-700">Comunicación
                                    Terapéutica</h3>
                                <p className="text-gray-700">Desescalada → Evaluación de riesgo
                                    → Establecer confianza</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">5
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-700">Intervención
                                    Específica</h3>
                                <p className="text-gray-700">Medicación (si está indicada) →
                                    Restricción física (último recurso)</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div
                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">6
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-700">Transporte y
                                    Monitorización</h3>
                                <p className="text-gray-700">Destino apropiado → Monitorización
                                    continua → Documentación detallada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}