export default function Considerations(){
    return(
        <div className="space-y-6">
            {/* Estrategias de comunicación mejoradas */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-blue-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">💬</span>
                    Estrategias de comunicación efectiva
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                            <span>📢</span> Principios generales
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">1.</span>
                                <div>
                                    <strong className="text-blue-800">Hablar directamente al paciente:</strong>
                                    <p className="text-gray-600 mt-1">No al cuidador como intermediario, a menos que sea absolutamente necesario</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">2.</span>
                                <div>
                                    <strong className="text-blue-800">Tono y volumen apropiado:</strong>
                                    <p className="text-gray-600 mt-1">Voz normal, no gritar. Solo aumentar si hay problemas auditivos</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">3.</span>
                                <div>
                                    <strong className="text-blue-800">Contacto visual:</strong>
                                    <p className="text-gray-600 mt-1">Mantener cuando sea culturalmente apropiado. Agacharse a su nivel</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">4.</span>
                                <div>
                                    <strong className="text-blue-800">Paciencia y tiempo:</strong>
                                    <p className="text-gray-600 mt-1">Permitir tiempo extra para procesar y responder. No apurar</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">5.</span>
                                <div>
                                    <strong className="text-blue-800">Preguntar necesidades:</strong>
                                    <p className="text-gray-600 mt-1">"¿Cómo puedo ayudarle mejor?" - Ellos son expertos en su condición</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold mt-1">6.</span>
                                <div>
                                    <strong className="text-blue-800">Respetar dispositivos:</strong>
                                    <p className="text-gray-600 mt-1">Pedir permiso antes de tocar sillas, perros guía, o equipos personales</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                        <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
                            <span>🎯</span> Adaptaciones específicas
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-blue-800 text-sm mb-2">👁️ Discapacidad visual</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Identificarse al acercarse ("Soy paramédico Juan")</li>
                                    <li>• Describir todas las acciones antes de realizarlas</li>
                                    <li>• Orientar sobre entorno ("Está en la ambulancia")</li>
                                    <li>• Usar referencias de reloj ("Su brazo a las 3 en punto")</li>
                                    <li>• Avisar antes de tocar al paciente</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-green-800 text-sm mb-2">👂 Discapacidad auditiva</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Contacto visual directo, hablar de frente</li>
                                    <li>• Articular claramente sin exagerar</li>
                                    <li>• Usar gestos y lenguaje corporal</li>
                                    <li>• Escribir información crítica</li>
                                    <li>• Considerar intérprete de señas</li>
                                    <li>• Verificar comprensión frecuentemente</li>
                                </ul>
                            </div>

                            <div className="bg-purple-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-purple-800 text-sm mb-2">🧠 Discapacidad intelectual</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Lenguaje simple, concreto, sin jerga médica</li>
                                    <li>• Instrucciones cortas, una a la vez</li>
                                    <li>• Confirmar comprensión con preguntas simples</li>
                                    <li>• No infantilizar o ser condescendiente</li>
                                    <li>• Usar ayudas visuales si es posible</li>
                                </ul>
                            </div>

                            <div className="bg-indigo-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-indigo-800 text-sm mb-2">🔷 Autismo</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Mantener calma, voz suave y constante</li>
                                    <li>• Evitar cambios bruscos y sorpresas</li>
                                    <li>• Comunicación literal, evitar sarcasmo</li>
                                    <li>• Reducir estímulos sensoriales (luces, sirenas)</li>
                                    <li>• Permitir objetos de confort</li>
                                    <li>• Explicar cada paso con anticipación</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-3 rounded-lg">
                                <h4 className="font-semibold text-red-800 text-sm mb-2">💊 Salud mental</h4>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Ser empático, validar sentimientos</li>
                                    <li>• No confrontar delirios o alucinaciones</li>
                                    <li>• Mantener distancia segura si hay agitación</li>
                                    <li>• Técnicas de desescalada verbal</li>
                                    <li>• Evitar juicios o estigmatización</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                    <p className="text-sm text-gray-700">
                        <strong className="text-yellow-700">💡 Recordatorio clave:</strong> La mejor comunicación es la que se adapta
                        a las necesidades individuales del paciente. Siempre pregunta "¿Cuál es la mejor manera de comunicarme con usted?"
                    </p>
                </div>
            </div>

            {/* Evaluación médica adaptada mejorada */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-green-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">🩺</span>
                    Evaluación médica adaptada
                </h2>
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-500">
                        <h3 className="font-bold text-lg mb-4 text-red-700 flex items-center gap-2">
                            <span>🚨</span> Evaluación primaria (ABCDE) - Adaptaciones especiales
                        </h3>
                        <div className="grid md:grid-cols-5 gap-3">
                            <div className="bg-red-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-red-600">A</span>
                                    <strong className="text-red-800 text-sm">Vía aérea</strong>
                                </div>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Verificar permeabilidad</li>
                                    <li>• Buscar traqueostomía</li>
                                    <li>• Considerar anatomía alterada</li>
                                    <li>• Evaluar dispositivos de vía aérea existentes</li>
                                    <li>• Problemas de comunicación verbal</li>
                                </ul>
                            </div>

                            <div className="bg-orange-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-orange-600">B</span>
                                    <strong className="text-orange-800 text-sm">Respiración</strong>
                                </div>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Evaluar trabajo respiratorio</li>
                                    <li>• Verificar ventiladores domiciliarios</li>
                                    <li>• Parámetros basales del paciente</li>
                                    <li>• Deformidades torácicas</li>
                                    <li>• Oxigenoterapia crónica</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-yellow-600">C</span>
                                    <strong className="text-yellow-800 text-sm">Circulación</strong>
                                </div>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Acceso vascular limitado</li>
                                    <li>• Verificar dispositivos implantables</li>
                                    <li>• Marcapasos/DAI presentes</li>
                                    <li>• Catéteres centrales (PICC, port)</li>
                                    <li>• Shunts de diálisis</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-green-600">D</span>
                                    <strong className="text-green-800 text-sm">Discapacidad</strong>
                                </div>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• <strong>Establecer nivel basal</strong></li>
                                    <li>• Estado neurológico normal del paciente</li>
                                    <li>• Déficits preexistentes</li>
                                    <li>• Capacidad cognitiva basal</li>
                                    <li>• Comparar con función actual</li>
                                </ul>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-2xl font-bold text-blue-600">E</span>
                                    <strong className="text-blue-800 text-sm">Exposición</strong>
                                </div>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Respetar dignidad y privacidad</li>
                                    <li>• Buscar dispositivos ocultos</li>
                                    <li>• Úlceras por presión</li>
                                    <li>• Ostomías y tubos</li>
                                    <li>• Alertas médicas</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-sm text-gray-700">
                                <strong className="text-yellow-700">⚠️ Crítico:</strong> El concepto más importante es determinar el <strong>nivel basal de función</strong>.
                                Pregunta: "¿Cómo estaba el paciente antes de este evento?" Esto es esencial para detectar cambios agudos.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                        <h3 className="font-bold text-lg mb-4 text-purple-700 flex items-center gap-2">
                            <span>📋</span> Historia clínica (SAMPLE modificado)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800 flex items-center gap-2 mb-2">
                                        <span className="text-purple-600">S</span> Signos y síntomas
                                    </strong>
                                    <p className="text-xs text-gray-700">Obtener del paciente primero, luego del cuidador. Distinguir síntomas nuevos vs crónicos</p>
                                </div>

                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800 flex items-center gap-2 mb-2">
                                        <span className="text-purple-600">A</span> Alergias
                                    </strong>
                                    <p className="text-xs text-gray-700">Preguntar sobre alergias a medicamentos, látex, alimentos. Verificar brazalete de alerta médica</p>
                                </div>

                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800 flex items-center gap-2 mb-2">
                                        <span className="text-purple-600">M</span> Medicamentos
                                    </strong>
                                    <p className="text-xs text-gray-700">Lista completa (puede ser extensa). Llevar frascos al hospital. Incluir medicamentos psiquiátricos</p>
                                </div>

                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800 flex items-center gap-2 mb-2">
                                        <span className="text-purple-600">P</span> Historia médica pasada
                                    </strong>
                                    <p className="text-xs text-gray-700">Condiciones crónicas, cirugías, hospitalizaciones previas. Obtener de registros médicos si disponible</p>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800 flex items-center gap-2 mb-2">
                                        <span className="text-purple-600">L</span> Última ingesta oral
                                    </strong>
                                    <p className="text-xs text-gray-700">Considerar nutrición enteral (G-tube). Importante para sedación o anestesia</p>
                                </div>

                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800 flex items-center gap-2 mb-2">
                                        <span className="text-purple-600">E</span> Eventos previos
                                    </strong>
                                    <p className="text-xs text-gray-700">¿Qué pasó? ¿Cambios recientes en condición? ¿Episodios similares antes?</p>
                                </div>

                                <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                                    <strong className="text-green-800 flex items-center gap-2 mb-2">
                                        <span className="text-green-600">+</span> Información adicional clave
                                    </strong>
                                    <ul className="text-xs text-gray-700 space-y-1 mt-2">
                                        <li>• <strong>Nivel basal de función</strong> (movilidad, comunicación, cognición)</li>
                                        <li>• Dispositivos médicos y su funcionamiento normal</li>
                                        <li>• Cuidadores principales y contactos</li>
                                        <li>• Plan de atención médica y directivas avanzadas</li>
                                        <li>• Desencadenantes o factores estresantes conocidos</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                            <span>🎯</span> Fuentes de información
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3 text-sm text-gray-700">
                            <div>
                                <strong className="text-blue-700">1. Paciente:</strong>
                                <p className="text-xs mt-1">Fuente primaria cuando sea posible. Respetar su capacidad de decisión</p>
                            </div>
                            <div>
                                <strong className="text-blue-700">2. Cuidadores/Familia:</strong>
                                <p className="text-xs mt-1">Conocen nivel basal y necesidades específicas del paciente</p>
                            </div>
                            <div>
                                <strong className="text-blue-700">3. Alertas médicas:</strong>
                                <p className="text-xs mt-1">Brazaletes, collares, tarjetas de billetera, apps móviles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manejo de dispositivos médicos mejorado */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-orange-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    Manejo de dispositivos médicos en campo
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                            <span>🫁</span> Ventiladores portátiles
                        </h3>
                        <div className="space-y-2">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-xs font-semibold text-blue-800 mb-1">✓ Protocolo de manejo:</p>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>1. Evaluar función del ventilador</li>
                                    <li>2. Verificar alarmas y configuración</li>
                                    <li>3. Tener BVM listo ANTES de cambios</li>
                                    <li>4. Documentar parámetros actuales</li>
                                    <li>5. Planear transporte con ventilador</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                                <p className="text-xs text-gray-700">
                                    <strong className="text-red-700">⚠️ Nunca desconectar</strong> sin plan de ventilación alternativo inmediato
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                        <h3 className="font-bold text-lg mb-3 text-purple-700 flex items-center gap-2">
                            <span>🦽</span> Sillas de ruedas
                        </h3>
                        <div className="space-y-2">
                            <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-xs font-semibold text-purple-800 mb-1">Decisión: ¿Trasladar o no?</p>
                                <div className="text-xs text-gray-700 space-y-2 mt-2">
                                    <div>
                                        <strong className="text-green-700">✓ Transportar en silla si:</strong>
                                        <ul className="ml-4 mt-1 space-y-1">
                                            <li>• Condición no crítica</li>
                                            <li>• Sistema de sujeción disponible</li>
                                            <li>• Paciente lo prefiere</li>
                                            <li>• Riesgo de lesión al trasladar</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <strong className="text-red-700">✗ Trasladar a camilla si:</strong>
                                        <ul className="ml-4 mt-1 space-y-1">
                                            <li>• Condición crítica/inestable</li>
                                            <li>• Necesita posición supina</li>
                                            <li>• Requiere procedimientos</li>
                                            <li>• Sin sistema de sujeción</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                        <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
                            <span>📱</span> Dispositivos de comunicación
                        </h3>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <p className="text-xs font-semibold text-green-800 mb-2">Dispositivos comunes:</p>
                            <ul className="text-xs text-gray-700 space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    <span><strong>Tabletas de comunicación:</strong> Apps con pictogramas</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    <span><strong>Dispositivos de texto a voz:</strong> Para pacientes no verbales</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    <span><strong>Libros de comunicación:</strong> Imágenes y símbolos</span>
                                </li>
                            </ul>
                            <p className="text-xs text-gray-600 mt-3 italic">
                                💡 Siempre llevar dispositivos de comunicación del paciente al hospital
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consideraciones de transporte mejoradas */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-indigo-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">🚑</span>
                    Consideraciones especiales de transporte
                </h2>
                <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-orange-500">
                            <h3 className="font-bold text-lg mb-3 text-orange-700 flex items-center gap-2">
                                <span>⚖️</span> Obesidad mórbida
                            </h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="bg-orange-50 p-3 rounded-lg">
                                    <strong className="text-orange-800">Equipamiento necesario:</strong>
                                    <ul className="text-xs mt-2 space-y-1">
                                        <li>• Camilla bariátrica (capacidad 500-1000 lbs)</li>
                                        <li>• Personal adicional (mínimo 4-6 personas)</li>
                                        <li>• Dispositivos de levantamiento mecánico</li>
                                        <li>• Rampa o plataforma de carga</li>
                                        <li>• Manguitos de PA de tamaño apropiado</li>
                                    </ul>
                                </div>
                                <div className="bg-yellow-50 p-2 rounded border-l-4 border-yellow-400">
                                    <p className="text-xs"><strong className="text-yellow-700">⚠️ Seguridad:</strong> Planificar movimiento, usar mecánica corporal adecuada, solicitar recursos adicionales temprano</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500">
                            <h3 className="font-bold text-lg mb-3 text-indigo-700 flex items-center gap-2">
                                <span>🔷</span> Autismo severo
                            </h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="bg-indigo-50 p-3 rounded-lg">
                                    <strong className="text-indigo-800">Estrategias de transporte:</strong>
                                    <ul className="text-xs mt-2 space-y-1">
                                        <li>• Minimizar estímulos sensoriales (luces, sirenas)</li>
                                        <li>• Permitir que cuidador acompañe</li>
                                        <li>• Llevar objetos de confort del paciente</li>
                                        <li>• Mantener rutinas predecibles</li>
                                        <li>• Considerar sedación si medicamente indicada</li>
                                        <li>• Explicar procedimientos con anticipación</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                                <span>🫁</span> Dependiente de ventilador
                            </h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <strong className="text-blue-800">Checklist de transporte:</strong>
                                    <ul className="text-xs mt-2 space-y-1">
                                        <li>☐ Ventilador cargado y funcionando</li>
                                        <li>☐ Batería de respaldo verificada</li>
                                        <li>☐ BVM disponible y probado</li>
                                        <li>☐ Oxígeno suficiente para viaje + 30 min</li>
                                        <li>☐ Aspirador portátil (si traqueostomía)</li>
                                        <li>☐ Documentación de parámetros</li>
                                        <li>☐ Plan de contingencia discutido</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-purple-500">
                            <h3 className="font-bold text-lg mb-3 text-purple-700 flex items-center gap-2">
                                <span>🦽</span> Usuario de silla de ruedas
                            </h3>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <strong className="text-purple-800">Opciones de transporte:</strong>
                                    <div className="text-xs mt-2 space-y-2">
                                        <div>
                                            <strong className="text-green-700">Opción 1: En silla</strong>
                                            <ul className="ml-4 mt-1 space-y-1">
                                                <li>• Usar sistema de sujeción de 4 puntos</li>
                                                <li>• Cinturón de seguridad al paciente</li>
                                                <li>• Verificar frenos de silla</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <strong className="text-blue-700">Opción 2: Traslado</strong>
                                            <ul className="ml-4 mt-1 space-y-1">
                                                <li>• Técnica de traslado apropiada</li>
                                                <li>• Considerar tabla de transferencia</li>
                                                <li>• Llevar silla separadamente si es posible</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-5 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                            <span>📝</span> Consideraciones generales de transporte
                        </h3>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <div className="bg-white p-3 rounded-lg">
                                <strong className="text-blue-700 flex items-center gap-1 mb-2">
                                    <span>👨‍👩‍👧</span> Familia y cuidadores
                                </strong>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Permitir acompañamiento cuando sea seguro</li>
                                    <li>• Obtener contactos importantes</li>
                                    <li>• Información sobre cuidados especiales</li>
                                </ul>
                            </div>

                            <div className="bg-white p-3 rounded-lg">
                                <strong className="text-green-700 flex items-center gap-1 mb-2">
                                    <span>📦</span> Equipamiento del paciente
                                </strong>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Llevar medicamentos al hospital</li>
                                    <li>• Dispositivos de asistencia esenciales</li>
                                    <li>• Registros médicos si disponibles</li>
                                </ul>
                            </div>

                            <div className="bg-white p-3 rounded-lg">
                                <strong className="text-purple-700 flex items-center gap-1 mb-2">
                                    <span>📞</span> Comunicación hospitalaria
                                </strong>
                                <ul className="text-xs text-gray-700 space-y-1">
                                    <li>• Notificar necesidades especiales temprano</li>
                                    <li>• Informar sobre dispositivos médicos</li>
                                    <li>• Alertar si se requiere equipo especial</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manejo de crisis conductuales mejorado */}
            <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-red-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">🛡️</span>
                    Manejo de crisis conductuales y agitación
                </h2>
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-green-500">
                        <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
                            <span>🗣️</span> Técnicas de desescalamiento verbal
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="font-semibold text-green-800 mb-3 text-sm">✓ Estrategias efectivas:</p>
                                <ol className="space-y-2 text-xs text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">1.</span>
                                        <div>
                                            <strong>Mantener la calma:</strong> Tu tranquilidad puede contagiarse al paciente
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">2.</span>
                                        <div>
                                            <strong>Voz suave y constante:</strong> Tono no amenazante, volumen moderado
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">3.</span>
                                        <div>
                                            <strong>Espacio personal:</strong> Mantener distancia de 6-8 pies, no acorralar
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">4.</span>
                                        <div>
                                            <strong>Escucha activa:</strong> Permitir que expresen preocupaciones, validar sentimientos
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">5.</span>
                                        <div>
                                            <strong>Lenguaje corporal:</strong> Postura abierta, no cruzar brazos, gestos lentos
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">6.</span>
                                        <div>
                                            <strong>Ofrecer opciones:</strong> "¿Prefiere sentarse aquí o allá?" - dar sensación de control
                                        </div>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="font-bold text-green-600 min-w-[20px]">7.</span>
                                        <div>
                                            <strong>Involucrar cuidadores:</strong> Personas familiares pueden ayudar a calmar
                                        </div>
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-red-50 p-4 rounded-lg">
                                <p className="font-semibold text-red-800 mb-3 text-sm">✗ Evitar estas acciones:</p>
                                <ul className="space-y-2 text-xs text-gray-700">
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Gritar o levantar la voz</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Movimientos bruscos o amenazantes</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Tocar al paciente sin advertencia</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Confrontar o discutir</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Hacer promesas que no puedes cumplir</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Rodear o acorralar al paciente</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Minimizar o invalidar sus sentimientos</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-red-600">✗</span>
                                        <span>Usar jerga médica compleja</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-yellow-500">
                        <h3 className="font-bold text-lg mb-3 text-yellow-700 flex items-center gap-2">
                            <span>🔒</span> Restricciones físicas - Último recurso
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <div className="bg-yellow-50 p-3 rounded-lg mb-3">
                                    <p className="font-semibold text-yellow-800 mb-2 text-sm">Criterios para restricciones:</p>
                                    <p className="text-xs text-gray-700 mb-2">Solo cuando el paciente representa peligro <strong>inmediato</strong> para:</p>
                                    <ul className="text-xs text-gray-700 space-y-1">
                                        <li>• Sí mismo (conducta autolesiva activa)</li>
                                        <li>• Personal de EMS o público</li>
                                        <li>• Necesidad médica urgente que no puede esperar</li>
                                    </ul>
                                </div>
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <p className="font-semibold text-blue-800 mb-2 text-sm">Procedimiento:</p>
                                    <ol className="text-xs text-gray-700 space-y-1">
                                        <li>1. Seguir protocolos locales</li>
                                        <li>2. Personal suficiente (mínimo 5 personas)</li>
                                        <li>3. Plan coordinado antes de actuar</li>
                                        <li>4. Proteger cabeza y vía aérea</li>
                                        <li>5. Nunca posición prona prolongada</li>
                                    </ol>
                                </div>
                            </div>

                            <div>
                                <div className="bg-red-50 p-3 rounded-lg mb-3 border-l-4 border-red-500">
                                    <p className="font-semibold text-red-800 mb-2 text-sm">⚠️ Monitoreo continuo:</p>
                                    <ul className="text-xs text-gray-700 space-y-1">
                                        <li>• <strong>Vía aérea y respiración:</strong> Verificar constantemente</li>
                                        <li>• <strong>Circulación:</strong> Pulsos distales, color de piel</li>
                                        <li>• <strong>Signos vitales:</strong> Cada 5-10 minutos</li>
                                        <li>• <strong>Posición:</strong> Supina o lateral, nunca prona</li>
                                        <li>• <strong>Ajustar restricciones:</strong> No demasiado apretadas</li>
                                    </ul>
                                </div>
                                <div className="bg-purple-50 p-3 rounded-lg">
                                    <p className="font-semibold text-purple-800 mb-2 text-sm">📝 Documentación requerida:</p>
                                    <ul className="text-xs text-gray-700 space-y-1">
                                        <li>• Razón médica específica</li>
                                        <li>• Métodos de desescalada intentados</li>
                                        <li>• Tipo de restricciones usadas</li>
                                        <li>• Tiempos de aplicación y monitoreo</li>
                                        <li>• Signos vitales frecuentes</li>
                                        <li>• Condición del paciente</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-indigo-500">
                        <h3 className="font-bold text-lg mb-3 text-indigo-700 flex items-center gap-2">
                            <span>💉</span> Sedación química
                        </h3>
                        <div className="grid md:grid-cols-3 gap-3 text-xs">
                            <div className="bg-indigo-50 p-3 rounded-lg">
                                <strong className="text-indigo-800 block mb-2">Indicaciones:</strong>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• Agitación severa refractaria</li>
                                    <li>• Peligro inminente</li>
                                    <li>• Desescalada verbal fallida</li>
                                    <li>• Necesidad de procedimiento urgente</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <strong className="text-green-800 block mb-2">Medicamentos comunes:</strong>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• Midazolam (Versed) IM/IN</li>
                                    <li>• Haloperidol (Haldol) IM</li>
                                    <li>• Ketamina IM (según protocolo)</li>
                                    <li>• Lorazepam (Ativan) IM/IV</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg">
                                <strong className="text-yellow-800 block mb-2">Precauciones:</strong>
                                <ul className="text-gray-700 space-y-1">
                                    <li>• Monitoreo respiratorio continuo</li>
                                    <li>• Equipo de reanimación listo</li>
                                    <li>• Documentar dosis y hora</li>
                                    <li>• Seguir órdenes médicas/protocolo</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-lg">
                        <p className="text-sm text-gray-800">
                            <strong className="text-blue-800">🚔 Apoyo policial:</strong> No dudes en solicitar ayuda policial cuando:
                        </p>
                        <ul className="text-sm text-gray-700 mt-2 grid md:grid-cols-2 gap-2">
                            <li>• La escena no es segura</li>
                            <li>• Hay armas presentes</li>
                            <li>• Paciente violento o combativo</li>
                            <li>• Necesidad de transporte involuntario</li>
                            <li>• Personal insuficiente para restricciones</li>
                            <li>• Amenazas de violencia credibles</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}