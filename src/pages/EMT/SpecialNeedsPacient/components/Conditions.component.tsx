export default function Conditions(){
    return(
        <div className="space-y-6">
            {/* Discapacidades físicas */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-blue-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">♿</span>
                    Discapacidades físicas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                            <span>🦽</span> Parálisis y lesiones de médula espinal
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Paraplejia:</strong>
                                <p className="text-gray-700 text-sm mt-1">Parálisis de extremidades inferiores. Nivel de lesión generalmente T1-L2</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Cuadriplejia/Tetraplejia:</strong>
                                <p className="text-gray-700 text-sm mt-1">Parálisis de las cuatro extremidades. Lesión cervical C1-C8</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Hemiplejia:</strong>
                                <p className="text-gray-700 text-sm mt-1">Parálisis de un lado del cuerpo. Común en accidentes cerebrovasculares</p>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                            <p className="text-sm text-gray-700"><strong>⚠️ Consideraciones:</strong></p>
                            <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Pérdida de sensibilidad en áreas afectadas</li>
                                <li>• Problemas de termorregulación</li>
                                <li>• Mayor riesgo de úlceras por presión</li>
                                <li>• Posible disreflexia autonómica (emergencia)</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-lg mb-3 text-cyan-700 flex items-center gap-2">
                            <span>🦿</span> Amputaciones
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-cyan-50 p-3 rounded-lg">
                                <strong className="text-cyan-800">Extremidades superiores:</strong>
                                <p className="text-gray-700 text-sm mt-1">Afecta movilidad, agarre y actividades diarias</p>
                            </div>
                            <div className="bg-cyan-50 p-3 rounded-lg">
                                <strong className="text-cyan-800">Extremidades inferiores:</strong>
                                <p className="text-gray-700 text-sm mt-1">Impacta equilibrio, marcha y transferencias</p>
                            </div>
                        </div>
                        <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-cyan-600 font-bold">•</span>
                                <span><strong>Uso de prótesis:</strong> No remover sin permiso del paciente</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-cyan-600 font-bold">•</span>
                                <span><strong>Dolor fantasma:</strong> Sensaciones en miembro ausente (real para el paciente)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-cyan-600 font-bold">•</span>
                                <span><strong>Alteraciones del equilibrio:</strong> Mayor riesgo de caídas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-cyan-600 font-bold">•</span>
                                <span><strong>Muñón:</strong> Verificar condición de la piel y ajuste protésico</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Discapacidades sensoriales */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-purple-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">👁️👂</span>
                    Discapacidades sensoriales
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-400">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                            <span>👁️</span> Discapacidad visual
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Ceguera total:</strong>
                                <p className="text-gray-700 text-sm mt-1">Ausencia completa de percepción de luz</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Baja visión:</strong>
                                <p className="text-gray-700 text-sm mt-1">Visión parcial que no se corrige con lentes</p>
                            </div>
                        </div>

                        <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                            <p className="font-semibold text-blue-800 mb-2">🐕 Dispositivos de asistencia:</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">•</span>
                                    <span><strong>Perros guía:</strong> No distraer o tocar sin permiso</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">•</span>
                                    <span><strong>Bastón blanco:</strong> Indica ceguera o baja visión</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600">•</span>
                                    <span><strong>Dispositivos electrónicos:</strong> Apps de navegación y lectura</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                            <p className="text-sm font-semibold text-green-800 mb-2">✓ Tips de comunicación:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Identificarse al acercarse</li>
                                <li>• Describir verbalmente todas las acciones</li>
                                <li>• Orientar sobre el entorno y ubicación</li>
                                <li>• Avisar antes de tocar al paciente</li>
                                <li>• Usar referencias de reloj para ubicación</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-400">
                        <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
                            <span>👂</span> Discapacidad auditiva
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-green-50 p-3 rounded-lg">
                                <strong className="text-green-800">Sordera total:</strong>
                                <p className="text-gray-700 text-sm mt-1">Pérdida completa de audición bilateral</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <strong className="text-green-800">Hipoacusia:</strong>
                                <p className="text-gray-700 text-sm mt-1">Pérdida parcial de audición (leve a profunda)</p>
                            </div>
                        </div>

                        <div className="mt-4 bg-green-50 p-4 rounded-lg">
                            <p className="font-semibold text-green-800 mb-2">🔧 Dispositivos de asistencia:</p>
                            <ul className="space-y-2 text-sm text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    <span><strong>Aparatos auditivos:</strong> Amplificadores de sonido (no remover)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    <span><strong>Implante coclear:</strong> Dispositivo electrónico (precaución con RMI)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">•</span>
                                    <span><strong>Dispositivos de texto:</strong> Tabletas o teléfonos para comunicación</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm font-semibold text-blue-800 mb-2">✓ Tips de comunicación:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Hacer contacto visual directo</li>
                                <li>• Hablar de frente, nunca de espaldas</li>
                                <li>• Articular claramente sin exagerar</li>
                                <li>• Usar gestos y lenguaje corporal</li>
                                <li>• Escribir información importante</li>
                                <li>• Considerar intérprete de lenguaje de señas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Discapacidades cognitivas */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-green-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">🧠</span>
                    Discapacidades cognitivas e intelectuales
                </h2>
                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400">
                        <h3 className="font-bold text-lg mb-3 text-purple-700 flex items-center gap-2">
                            <span>🎓</span> Discapacidad intelectual
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600 mb-3">
                                    Limitaciones significativas en funcionamiento intelectual y conducta adaptativa.
                                </p>
                                <div className="bg-purple-50 p-3 rounded-lg mb-3">
                                    <p className="font-semibold text-purple-800 text-sm mb-2">Niveles de severidad:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• <strong>Leve:</strong> CI 50-70 (mayoría de casos)</li>
                                        <li>• <strong>Moderado:</strong> CI 35-50</li>
                                        <li>• <strong>Severo:</strong> CI 20-35</li>
                                        <li>• <strong>Profundo:</strong> CI menor a 20</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <p className="font-semibold text-green-800 text-sm mb-2">✓ Estrategias de atención:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Usar lenguaje simple y concreto</li>
                                        <li>• Dar instrucciones paso a paso</li>
                                        <li>• Permitir tiempo adicional para responder</li>
                                        <li>• Confirmar comprensión constantemente</li>
                                        <li>• Involucrar a cuidadores familiares</li>
                                        <li>• Evitar infantilizar al paciente</li>
                                        <li>• Usar ayudas visuales cuando sea posible</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-400">
                        <h3 className="font-bold text-lg mb-3 text-indigo-700 flex items-center gap-2">
                            <span>🔷</span> Trastornos del espectro autista (TEA)
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-indigo-800 mb-2 text-sm">Características principales</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Dificultades comunicativas</li>
                                    <li>• Interacción social limitada</li>
                                    <li>• Comportamientos repetitivos</li>
                                    <li>• Intereses muy específicos</li>
                                    <li>• Necesidad de rutinas</li>
                                </ul>
                            </div>

                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-yellow-800 mb-2 text-sm">⚠️ Sensibilidades sensoriales</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Luces:</strong> Brillantes o parpadeantes</li>
                                    <li>• <strong>Sonidos:</strong> Sirenas, alarmas, voces fuertes</li>
                                    <li>• <strong>Tacto:</strong> Texturas, presión, temperatura</li>
                                    <li>• <strong>Olores:</strong> Intensos o químicos</li>
                                    <li>• <strong>Movimiento:</strong> Cambios bruscos</li>
                                </ul>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h4 className="font-semibold text-green-800 mb-2 text-sm">✓ Manejo en emergencias</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Ambiente tranquilo y predecible</li>
                                    <li>• Reducir estímulos sensoriales</li>
                                    <li>• Comunicación directa y literal</li>
                                    <li>• Evitar metáforas o sarcasmo</li>
                                    <li>• Permitir objetos de confort</li>
                                    <li>• Respetar espacio personal</li>
                                    <li>• Anticipar y explicar acciones</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                            <p className="text-sm text-gray-700">
                                <strong className="text-blue-700">💡 Nota:</strong> Algunos pacientes con TEA pueden tener tarjetas de comunicación
                                o dispositivos de comunicación alternativa (CAA). Pregunte al cuidador sobre métodos preferidos de comunicación.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-orange-400">
                        <h3 className="font-bold text-lg mb-3 text-orange-700 flex items-center gap-2">
                            <span>👴</span> Demencia y Alzheimer
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <div className="bg-orange-50 p-3 rounded-lg mb-3">
                                    <p className="font-semibold text-orange-800 text-sm mb-2">Etapas de demencia:</p>
                                    <ul className="text-sm text-gray-700 space-y-2">
                                        <li className="flex items-start gap-2">
                                            <span className="text-orange-600 font-bold">1.</span>
                                            <div>
                                                <strong>Leve:</strong> Olvidos ocasionales, dificultad con palabras
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-orange-600 font-bold">2.</span>
                                            <div>
                                                <strong>Moderada:</strong> Confusión de tiempo/lugar, cambios de personalidad
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-orange-600 font-bold">3.</span>
                                            <div>
                                                <strong>Severa:</strong> Dependencia completa, comunicación muy limitada
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="bg-green-50 p-3 rounded-lg">
                                    <p className="font-semibold text-green-800 text-sm mb-2">✓ Abordaje efectivo:</p>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Mantener la calma y paciencia</li>
                                        <li>• Usar tono de voz suave y tranquilizador</li>
                                        <li>• Presentarse cada vez que sea necesario</li>
                                        <li>• Evitar corregir o confrontar</li>
                                        <li>• Usar oraciones cortas y simples</li>
                                        <li>• Permitir tiempo para procesar</li>
                                        <li>• Obtener historia de familiares</li>
                                        <li>• Documentar nivel basal de función</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                            <p className="text-sm text-gray-700">
                                <strong className="text-red-700">⚠️ Alerta:</strong> El delirium (confusión aguda) es diferente de la demencia.
                                Un cambio súbito en el estado mental puede indicar infección, deshidratación u otra emergencia médica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Salud mental mejorada */}
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-red-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">💊</span>
                    Condiciones de salud mental
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-400">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                            <span>😔</span> Depresión y Ansiedad
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Depresión mayor:</strong>
                                <p className="text-gray-700 text-sm mt-1">Tristeza persistente, pérdida de interés, fatiga, riesgo suicida</p>
                            </div>
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <strong className="text-blue-800">Trastornos de ansiedad:</strong>
                                <p className="text-gray-700 text-sm mt-1">Ataques de pánico, fobias, ansiedad generalizada, TEPT</p>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1 mt-3">
                                <li>• Validar sentimientos del paciente</li>
                                <li>• Ambiente tranquilo y no amenazante</li>
                                <li>• Preguntar sobre ideación suicida directamente</li>
                                <li>• Conocer medicamentos psiquiátricos actuales</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-400">
                        <h3 className="font-bold text-lg mb-3 text-purple-700 flex items-center gap-2">
                            <span>🔄</span> Trastorno Bipolar
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-purple-50 p-3 rounded-lg">
                                <strong className="text-purple-800">Fase maníaca:</strong>
                                <p className="text-gray-700 text-sm mt-1">Energía excesiva, habla rápida, conductas de riesgo, disminución del sueño</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                                <strong className="text-purple-800">Fase depresiva:</strong>
                                <p className="text-gray-700 text-sm mt-1">Similar a depresión mayor, pero parte de ciclo</p>
                            </div>
                            <ul className="text-sm text-gray-700 space-y-1 mt-3">
                                <li>• Evaluar estado actual (maníaco/depresivo/mixto)</li>
                                <li>• Medicamentos estabilizadores del ánimo (litio, etc.)</li>
                                <li>• Riesgo de agitación en fase maníaca</li>
                                <li>• Mayor riesgo suicida en cambios de fase</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-red-400">
                        <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center gap-2">
                            <span>🌀</span> Esquizofrenia y Psicosis
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-red-50 p-3 rounded-lg">
                                <p className="font-semibold text-red-800 text-sm mb-2">Síntomas positivos:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Alucinaciones (auditivas, visuales)</li>
                                    <li>• Delirios (ideas falsas fijas)</li>
                                    <li>• Pensamiento desorganizado</li>
                                    <li>• Comportamiento agitado o catatónico</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded-lg border-l-4 border-yellow-400">
                                <p className="text-sm text-gray-700">
                                    <strong className="text-yellow-700">⚠️ Manejo:</strong> No confrontar delirios, mantener distancia segura,
                                    ambiente no estimulante, medicamentos antipsicóticos
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-400">
                        <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
                            <span>📋</span> Consideraciones generales
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span><strong>Medicamentos:</strong> ISRS, antipsicóticos, benzodiacepinas - conocer efectos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span><strong>Crisis de agitación:</strong> Técnicas de desescalada verbal primero</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span><strong>Hospitalización involuntaria:</strong> Conocer leyes locales y criterios</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span><strong>Estigma:</strong> Tratar con mismo respeto que enfermedades físicas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">•</span>
                                <span><strong>Comorbilidades:</strong> Mayor riesgo de abuso de sustancias y condiciones médicas</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Dependencia tecnológica mejorada */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 border-b-2 border-orange-200 pb-3 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    Dependencia tecnológica y dispositivos médicos
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-blue-500">
                        <h3 className="font-bold text-lg mb-3 text-blue-700 flex items-center gap-2">
                            <span>🫁</span> Ventilador domiciliario
                        </h3>
                        <div className="bg-blue-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-700 mb-2">
                                <strong className="text-blue-800">Función:</strong> Proporciona soporte respiratorio mecánico para pacientes
                                con insuficiencia respiratoria crónica (enfermedad neuromuscular, EPOC severo, apnea del sueño)
                            </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <p className="font-semibold text-green-800 text-sm mb-2">✓ Consideraciones EMS:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Mantener funcionamiento del ventilador si es posible</li>
                                <li>• Tener BVM de respaldo disponible</li>
                                <li>• Conocer parámetros: modo, volumen tidal, FR, FiO₂</li>
                                <li>• Batería de respaldo (usualmente 30-60 min)</li>
                                <li>• Transportar con ventilador o transferir a ventilador de transporte</li>
                                <li>• No desconectar sin tener plan de ventilación alternativo</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-purple-500">
                        <h3 className="font-bold text-lg mb-3 text-purple-700 flex items-center gap-2">
                            <span>🔘</span> Traqueostomía
                        </h3>
                        <div className="bg-purple-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-700 mb-2">
                                <strong className="text-purple-800">Función:</strong> Apertura quirúrgica en tráquea para vía aérea artificial.
                                Puede estar conectada a ventilador o ser de respiración espontánea
                            </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <p className="font-semibold text-green-800 text-sm mb-2">✓ Consideraciones EMS:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Aspiración frecuente de secreciones (cada 2-4 horas o PRN)</li>
                                <li>• Kit de traqueostomía: tubos de reemplazo, aspirador, lubricante</li>
                                <li>• Obstrucción: retirar cánula interna y aspirar</li>
                                <li>• Si se desaloja: reemplazar con tubo del mismo tamaño o menor</li>
                                <li>• Oxígeno directo a traqueostomía, no a nariz/boca</li>
                                <li>• Verificar posición y permeabilidad del tubo</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-green-500">
                        <h3 className="font-bold text-lg mb-3 text-green-700 flex items-center gap-2">
                            <span>🍽️</span> Sonda de gastrostomía (G-tube/PEG)
                        </h3>
                        <div className="bg-green-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-700 mb-2">
                                <strong className="text-green-800">Función:</strong> Tubo que va directamente al estómago a través de la pared
                                abdominal para alimentación enteral en pacientes que no pueden tragar
                            </p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                            <p className="font-semibold text-yellow-800 text-sm mb-2">⚠️ Consideraciones EMS:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <strong>No remover</strong> incluso si se desaloja parcialmente</li>
                                <li>• Evitar tracción o tensión del tubo</li>
                                <li>• Verificar posición y signos de infección en sitio</li>
                                <li>• Si hay sangrado o fugas, cubrir con gasas estériles</li>
                                <li>• Mantener cabecera elevada 30-45° si es posible</li>
                                <li>• Detener alimentación si hay vómitos o distensión</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-yellow-500">
                        <h3 className="font-bold text-lg mb-3 text-yellow-700 flex items-center gap-2">
                            <span>💧</span> Catéter urinario (Foley)
                        </h3>
                        <div className="bg-yellow-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-700 mb-2">
                                <strong className="text-yellow-800">Función:</strong> Drenaje continuo de orina de la vejiga. Común en lesiones
                                de médula espinal, retención urinaria, o pacientes encamados
                            </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                            <p className="font-semibold text-green-800 text-sm mb-2">✓ Consideraciones EMS:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Mantener bolsa colectora <strong>siempre</strong> por debajo del nivel de la vejiga</li>
                                <li>• No permitir que la bolsa toque el suelo</li>
                                <li>• Evitar acodamientos del tubo</li>
                                <li>• Observar color y cantidad de orina (hematuria, oliguria)</li>
                                <li>• Asegurar durante transporte para evitar tracción</li>
                                <li>• Vaciar bolsa si está muy llena antes de transporte</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-indigo-500">
                        <h3 className="font-bold text-lg mb-3 text-indigo-700 flex items-center gap-2">
                            <span>🧠</span> Shunt ventriculoperitoneal (VP shunt)
                        </h3>
                        <div className="bg-indigo-50 p-3 rounded-lg mb-3">
                            <p className="text-sm text-gray-700 mb-2">
                                <strong className="text-indigo-800">Función:</strong> Drena exceso de líquido cefalorraquídeo (LCR) desde los
                                ventrículos cerebrales hacia el abdomen. Común en hidrocefalia
                            </p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                            <p className="font-semibold text-red-800 text-sm mb-2">⚠️ Signos de malfunción del shunt:</p>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Dolor de cabeza severo</li>
                                <li>• Náuseas y vómitos (especialmente matutinos)</li>
                                <li>• Alteración del estado mental</li>
                                <li>• Cambios visuales</li>
                                <li>• Convulsiones</li>
                                <li>• Fontanela abombada (en bebés)</li>
                            </ul>
                            <p className="text-sm text-gray-700 mt-2">
                                <strong className="text-red-700">🚨 Emergencia:</strong> La malfunción del shunt puede causar aumento de PIC rápidamente
                            </p>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow border-l-4 border-teal-500">
                        <h3 className="font-bold text-lg mb-3 text-teal-700 flex items-center gap-2">
                            <span>⚡</span> Otros dispositivos importantes
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-teal-50 p-3 rounded-lg">
                                <strong className="text-teal-800">Marcapasos/DAI:</strong>
                                <p className="text-gray-700 text-sm mt-1">Precaución con desfibrilación (colocar parches lejos del dispositivo)</p>
                            </div>
                            <div className="bg-teal-50 p-3 rounded-lg">
                                <strong className="text-teal-800">Bombas de infusión:</strong>
                                <p className="text-gray-700 text-sm mt-1">Insulina, nutrición parenteral, medicamentos. Mantener funcionamiento</p>
                            </div>
                            <div className="bg-teal-50 p-3 rounded-lg">
                                <strong className="text-teal-800">Colostomía/Ileostomía:</strong>
                                <p className="text-gray-700 text-sm mt-1">Apertura intestinal en abdomen. Verificar bolsa colectora</p>
                            </div>
                            <div className="bg-teal-50 p-3 rounded-lg">
                                <strong className="text-teal-800">CPAP/BiPAP:</strong>
                                <p className="text-gray-700 text-sm mt-1">Presión positiva continua. Común en apnea del sueño</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700">
                        <strong className="text-blue-700">💡 Recordatorio importante:</strong> Siempre pregunte al paciente o cuidador sobre
                        el funcionamiento normal de sus dispositivos. Los pacientes y familiares son expertos en su propio equipo y pueden
                        proporcionarte información valiosa sobre el funcionamiento basal y problemas comunes.
                    </p>
                </div>
            </div>
        </div>
    );
}