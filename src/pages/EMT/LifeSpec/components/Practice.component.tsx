export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                clínicos para análisis</h2>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 1: Lactante con
                    dificultad respiratoria</h3>
                <p className="italic text-gray-600 mb-4">
                    Lactante de 8 meses, presenta tos, fiebre de 38.5°C y dificultad
                    respiratoria progresiva.
                    Los padres refieren que "respira muy rápido" y tiene dificultad para
                    alimentarse.
                    Al examen: FR 55, FC 160, irritable, tirajes subcostales.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">🔍 Evaluación sistemática:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>A (Vía aérea):</strong> Permeable, sin estridor</li>
                        <li><strong>B (Respiración):</strong> FR elevada (normal: 25-50),
                            tirajes presentes
                        </li>
                        <li><strong>C (Circulación):</strong> FC elevada pero dentro de rango
                            (normal: 100-160)
                        </li>
                        <li><strong>D (Neurológico):</strong> Irritable, responde a estímulos
                        </li>
                        <li><strong>E (Exposición):</strong> Fiebre 38.5°C</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">🎯 Manejo apropiado:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Mantener al niño calmado (evitar separación de padres)</li>
                        <li>Posición de confort (semi-sentado o en brazos del cuidador)</li>
                        <li>Oxigenoterapia según tolerancia (mascarilla vs. blow-by)</li>
                        <li>Monitorización continua de signos vitales</li>
                        <li>Considerar nebulización según protocolo local</li>
                        <li>Transporte prioritario con padre/madre acompañante</li>
                    </ol>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded">
                    <p className="text-blue-800 text-sm">
                        <strong>💡 Punto clave:</strong> En lactantes, la taquipnea es un signo
                        temprano de distrés respiratorio.
                        La presencia de tirajes indica esfuerzo respiratorio aumentado.
                    </p>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 2: Adolescente
                    inconsciente</h3>
                <p className="italic text-gray-600 mb-4">
                    Adolescente de 16 años encontrada inconsciente en una fiesta. Amigos
                    refieren consumo de alcohol.
                    Al examen: Glasgow 9 (O2, V2, M5), FR 8, FC 50, PA 90/60, hipotermia 35°C,
                    pupilas puntiformes, olor a alcohol en aliento.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">🚨 Evaluación crítica:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Vía aérea:</strong> Riesgo por disminución del nivel de
                            conciencia
                        </li>
                        <li><strong>Respiración:</strong> Bradipnea significativa (normal:
                            12-20)
                        </li>
                        <li><strong>Circulación:</strong> Bradicardia y hipotensión relativa
                        </li>
                        <li><strong>Neurológico:</strong> Glasgow moderado, pupilas sugieren
                            opiáceos
                        </li>
                        <li><strong>Exposición:</strong> Hipotermia, posible intoxicación mixta
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">⚡ Manejo de emergencia:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Asegurar vía aérea (posición lateral de seguridad)</li>
                        <li>Oxigenoterapia de alto flujo</li>
                        <li>Considerar ventilación asistida si FR &lt; 8</li>
                        <li>Acceso IV y dextrosa si glucemia baja</li>
                        <li>Naloxona si sospecha de opiáceos (pupilas puntiformes)</li>
                        <li>Calentamiento activo para hipotermia</li>
                        <li>Transporte inmediato con monitorización continua</li>
                    </ol>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded">
                    <p className="text-green-800 text-sm">
                        <strong>💡 Punto clave:</strong> En adolescentes, siempre considerar
                        intoxicación múltiple.
                        La privacidad es importante, pero la seguridad es prioridad.
                    </p>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 3: Adulto mayor
                    con caída</h3>
                <p className="italic text-gray-600 mb-4">
                    Mujer de 82 años con caída en domicilio. Antecedentes: HTA, DM2,
                    osteoporosis.
                    Medicamentos: amlodipino, metformina, calcio. Familia refiere confusión
                    reciente.
                    Al examen: PA 180/100, FC 90, FR 18, Temp 37.8°C, dolor en cadera derecha,
                    desorientada en tiempo.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">🔍 Evaluación geriátrica integral:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Trauma:</strong> Posible fractura de cadera (mecanismo +
                            dolor)
                        </li>
                        <li><strong>Causa de caída:</strong> ¿Sincope? ¿Infección?
                            ¿Medicamentos?
                        </li>
                        <li><strong>Comorbilidades:</strong> HTA no controlada, diabetes</li>
                        <li><strong>Función cognitiva:</strong> Confusión nueva (posible
                            delirium)
                        </li>
                        <li><strong>Estado funcional:</strong> Evaluar independencia previa</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">🏥 Manejo integral:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Inmovilización completa por sospecha de fractura</li>
                        <li>Manejo cuidadoso por fragilidad ósea</li>
                        <li>Control de dolor apropiado</li>
                        <li>Investigar causa subyacente de la caída</li>
                        <li>Glucemia, ECG si disponible</li>
                        <li>Lista completa de medicamentos al hospital</li>
                        <li>Información de soporte social y funcionalidad previa</li>
                    </ol>
                </div>

                <div className="mt-4 p-3 bg-orange-100 rounded">
                    <p className="text-orange-800 text-sm">
                        <strong>💡 Punto clave:</strong> En adultos mayores, una caída rara vez
                        es "accidental".
                        Siempre buscar causas médicas subyacentes y evaluar el contexto
                        integral.
                    </p>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 4: Neonato con
                    dificultad respiratoria</h3>
                <p className="italic text-gray-600 mb-4">
                    Neonato de 2 semanas, parto domiciliario sin complicaciones.
                    Presenta dificultad respiratoria súbita, cianosis peribucal,
                    llanto débil. FR 65, FC 180, temp 36.8°C. Aleteo nasal presente.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">🚨 Evaluación neonatal especializada:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Trabajo respiratorio:</strong> FR elevada (normal: 30-60),
                            aleteo nasal
                        </li>
                        <li><strong>Coloración:</strong> Cianosis peribucal (signo de hipoxemia)
                        </li>
                        <li><strong>Circulación:</strong> Taquicardia compensatoria</li>
                        <li><strong>Termorregulación:</strong> Temperatura en límite inferior
                            normal
                        </li>
                        <li><strong>Respuesta:</strong> Llanto débil (posible fatiga
                            respiratoria)
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">🍼 Manejo neonatal específico:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Asegurar vía aérea (recordar respirador nasal obligado)</li>
                        <li>Succión suave de secreciones si necesario</li>
                        <li>Oxigenoterapia con FiO2 titulada (evitar hiperoxia)</li>
                        <li>Posición neutra (evitar hiperextensión cervical)</li>
                        <li>Control térmico estricto (incubadora/calentador)</li>
                        <li>Monitorización continua SatO2, FC, temperatura</li>
                        <li>Transporte inmediato a centro con UCIN</li>
                    </ol>
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded">
                    <p className="text-purple-800 text-sm">
                        <strong>💡 Punto clave:</strong> Los neonatos se descompensan
                        rápidamente.
                        El control térmico y la oxigenación adecuada son fundamentales para
                        prevenir el deterioro.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">📚 Ejercicios de
                    autoevaluación</h3>
                <div className="space-y-3">
                    <div className="p-3 bg-white rounded">
                        <p className="font-medium text-blue-700">Pregunta 1:</p>
                        <p className="text-gray-700 text-sm">¿Cuál es la principal diferencia en
                            el manejo de vía aérea entre un lactante y un adulto?</p>
                    </div>
                    <div className="p-3 bg-white rounded">
                        <p className="font-medium text-blue-700">Pregunta 2:</p>
                        <p className="text-gray-700 text-sm">¿Por qué la hipotensión es un signo
                            tardío de shock en pediatría?</p>
                    </div>
                    <div className="p-3 bg-white rounded">
                        <p className="font-medium text-blue-700">Pregunta 3:</p>
                        <p className="text-gray-700 text-sm">¿Qué factores adicionales debes
                            considerar al evaluar un adulto mayor con síntomas vagos?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}