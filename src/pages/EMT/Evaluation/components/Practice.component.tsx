export default function Practice() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                🏥 Casos Clínicos Interactivos
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
                <h3 className="font-medium text-lg mb-2 text-blue-700">🎯 Objetivo del
                    ejercicio</h3>
                <p className="text-blue-600">Analiza cada caso siguiendo el protocolo
                    sistemático de evaluación. Identifica los pasos clave y las intervenciones
                    prioritarias.</p>
            </div>

            <div className="space-y-6">
                {/* Caso 1 */}
                <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-red-500">
                    <div className="flex items-start gap-4 mb-4">
                        <div
                            className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-red-600">Politrauma
                                en accidente vehicular</h3>
                            <div className="bg-red-50 p-3 rounded-lg mb-4">
                                <p className="italic text-red-800 font-medium">Escenario:</p>
                                <p className="text-red-700">Hombre de 30 años, accidente
                                    automovilístico de alta velocidad, impacto frontal. Paciente
                                    inconsciente, atrapado en el vehículo. Airbag desplegado,
                                    volante deformado.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <h4 className="font-medium mb-2 text-gray-800">🔍 Evaluación
                                    inicial encontrada:</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-red-500 text-white rounded px-2 py-1 text-xs">A</span>
                                        <span>Vía aérea comprometida, sangre visible en boca</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-blue-500 text-white rounded px-2 py-1 text-xs">B</span>
                                        <span>FR 8/min, respiración superficial, SpO₂ 85%</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-green-500 text-white rounded px-2 py-1 text-xs">C</span>
                                        <span>FC 120/min débil, TA 90/60 mmHg, piel pálida y fría</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-purple-500 text-white rounded px-2 py-1 text-xs">D</span>
                                        <span>No responde a estímulos, Glasgow 6</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                                                <span
                                                                    className="bg-orange-500 text-white rounded px-2 py-1 text-xs">E</span>
                                        <span>Fractura expuesta en fémur derecho, deformidad torácica</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                                <h4 className="font-medium mb-2 text-red-800">⚠️ Amenazas
                                    inmediatas identificadas:</h4>
                                <ul className="text-red-700 text-sm space-y-1">
                                    <li>• Compromiso de vía aérea con riesgo de aspiración</li>
                                    <li>• Insuficiencia respiratoria severa</li>
                                    <li>• Shock hipovolémico (probable hemorragia interna)</li>
                                    <li>• Traumatismo craneoencefálico severo</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                <h4 className="font-medium mb-2 text-green-800">✅ Secuencia de
                                    manejo correcto:</h4>
                                <ol className="text-green-700 text-sm space-y-2">
                                    <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">1</span>
                                        <span><strong>Seguridad:</strong> Estabilizar vehículo, desconectar batería</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">2</span>
                                        <span><strong>Vía aérea:</strong> Aspiración inmediata + protección cervical</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">3</span>
                                        <span><strong>Respiración:</strong> Ventilación asistida con BVM</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">4</span>
                                        <span><strong>Circulación:</strong> Control de hemorragia externa</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">5</span>
                                        <span><strong>Inmovilización:</strong> Extricación rápida con tabla larga</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                                                <span
                                                                    className="bg-green-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">6</span>
                                        <span><strong>Traslado:</strong> Código rojo a centro de trauma</span>
                                    </li>
                                </ol>
                            </div>

                            <div
                                className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                <h4 className="font-medium mb-2 text-yellow-800">💡 Puntos clave
                                    de aprendizaje:</h4>
                                <ul className="text-yellow-700 text-sm space-y-1">
                                    <li>• El manejo de vía aérea es prioritario pero debe
                                        proteger columna cervical
                                    </li>
                                    <li>• La regla de oro: "Load and Go" para trauma severo</li>
                                    <li>• Tiempo en escena {'<'} 10 minutos para politrauma</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 2 */}
                <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
                    <div className="flex items-start gap-4 mb-4">
                        <div
                            className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-blue-600">Emergencia
                                abdominal en mujer joven</h3>
                            <div className="bg-blue-50 p-3 rounded-lg mb-4">
                                <p className="italic text-blue-800 font-medium">Escenario:</p>
                                <p className="text-blue-700">Mujer de 28 años, dolor abdominal
                                    súbito e intenso hace 2 horas. Palidez marcada, sudoración
                                    profusa, ansiosa. Refiere posible embarazo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <h4 className="font-medium mb-2 text-gray-800">🔍 Hallazgos de
                                    evaluación:</h4>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Primaria:</strong> A/B normales, C: FC 130/min,
                                        TA 85/50 mmHg
                                    </div>
                                    <div><strong>Dolor:</strong> 9/10, localizado en cuadrante
                                        inferior derecho
                                    </div>
                                    <div><strong>SAMPLE:</strong> Sin alergias, no medicamentos,
                                        FUM hace 6 semanas
                                    </div>
                                    <div><strong>Examen:</strong> Abdomen distendido, defensa
                                        muscular
                                    </div>
                                </div>
                            </div>

                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="font-medium mb-2 text-blue-800">🤔 Diagnóstico
                                    diferencial:</h4>
                                <ul className="text-blue-700 text-sm space-y-1">
                                    <li>• Embarazo ectópico roto (más probable)</li>
                                    <li>• Apendicitis aguda</li>
                                    <li>• Quiste ovárico roto</li>
                                    <li>• Torsión ovárica</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                <h4 className="font-medium mb-2 text-green-800">🚨 Manejo de
                                    emergencia:</h4>
                                <ol className="text-green-700 text-sm space-y-2">
                                    <li><strong>1.</strong> Oxígeno suplementario</li>
                                    <li><strong>2.</strong> Dos accesos venosos calibre 18G</li>
                                    <li><strong>3.</strong> Posición de semi-Fowler o lateral
                                        izquierdo
                                    </li>
                                    <li><strong>4.</strong> Monitorización continua</li>
                                    <li><strong>5.</strong> Traslado inmediato a hospital con
                                        ginecología
                                    </li>
                                    <li><strong>6.</strong> Preparar para posible reanimación
                                    </li>
                                </ol>
                            </div>

                            <div
                                className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                                <h4 className="font-medium mb-2 text-yellow-800">⚡
                                    Consideraciones especiales:</h4>
                                <ul className="text-yellow-700 text-sm space-y-1">
                                    <li>• Embarazo ectópico puede causar shock rápidamente</li>
                                    <li>• Evitar palpación abdominal profunda</li>
                                    <li>• Informar hallazgos al hospital receptor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Caso 3 */}
                <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500">
                    <div className="flex items-start gap-4 mb-4">
                        <div
                            className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3
                        </div>
                        <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2 text-green-600">Emergencia
                                pediátrica respiratoria</h3>
                            <div className="bg-green-50 p-3 rounded-lg mb-4">
                                <p className="italic text-green-800 font-medium">Escenario:</p>
                                <p className="text-green-700">Niño de 4 años, fiebre alta,
                                    dificultad respiratoria progresiva, letargo. Madre refiere
                                    que "respira raro" desde hace unas horas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                            <div className="p-3 bg-gray-50 rounded-lg">
                                <h4 className="font-medium mb-2 text-gray-800">🔍 Evaluación
                                    pediátrica:</h4>
                                <div className="space-y-2 text-sm">
                                    <div><strong>Vía aérea:</strong> Permeable, sin estridor
                                    </div>
                                    <div><strong>Respiración:</strong> FR 45/min, tirajes, SpO₂
                                        88%
                                    </div>
                                    <div><strong>Circulación:</strong> FC 160/min, piel moteada
                                    </div>
                                    <div><strong>Neurológico:</strong> Letárgico, responde a voz
                                    </div>
                                    <div><strong>Temperatura:</strong> 39.5°C</div>
                                </div>
                            </div>

                            <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                                <h4 className="font-medium mb-2 text-red-800">🚨 Signos de alarma
                                    presentes:</h4>
                                <ul className="text-red-700 text-sm space-y-1">
                                    <li>• Uso de músculos accesorios</li>
                                    <li>• Hipoxemia significativa</li>
                                    <li>• Taquicardia compensatoria</li>
                                    <li>• Alteración del estado mental</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                                <h4 className="font-medium mb-2 text-green-800">👶 Manejo
                                    pediátrico específico:</h4>
                                <ol className="text-green-700 text-sm space-y-2">
                                    <li><strong>1.</strong> Oxígeno húmedo al 100% (mascarilla
                                        pediátrica)
                                    </li>
                                    <li><strong>2.</strong> Posición de comodidad (sentado si
                                        tolera)
                                    </li>
                                    <li><strong>3.</strong> Acceso venoso periférico si es
                                        posible
                                    </li>
                                    <li><strong>4.</strong> Monitorización completa</li>
                                    <li><strong>5.</strong> Control de fiebre (destaparlo)</li>
                                    <li><strong>6.</strong> Traslado rápido a hospital
                                        pediátrico
                                    </li>
                                </ol>
                            </div>

                            <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <h4 className="font-medium mb-2 text-blue-800">📊 Valores
                                    normales pediátricos (4 años):</h4>
                                <div className="text-blue-700 text-sm space-y-1">
                                    <div><strong>FR:</strong> 20-30/min</div>
                                    <div><strong>FC:</strong> 80-120/min</div>
                                    <div><strong>TA sistólica:</strong> {'>'}88 mmHg</div>
                                    <div><strong>SpO₂:</strong> ≥95%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4 text-gray-800 flex items-center gap-2">
                    🧩 Ejercicio de reflexión
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <h4 className="font-medium text-gray-800">Preguntas para
                            autoevaluación:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• ¿Qué pasos del protocolo ABCDE fueron críticos en cada caso?
                            </li>
                            <li>• ¿Cuáles fueron las intervenciones que no debías retrasar?</li>
                            <li>• ¿Cómo modificarías tu evaluación si los hallazgos fueran
                                diferentes?
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h4 className="font-medium text-gray-800">Puntos clave para
                            recordar:</h4>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• La evaluación sistemática salva vidas</li>
                            <li>• Identifica y trata amenazas inmediatas primero</li>
                            <li>• Adapta tu enfoque según el tipo de paciente</li>
                            <li>• La práctica constante mejora la velocidad y precisión</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}