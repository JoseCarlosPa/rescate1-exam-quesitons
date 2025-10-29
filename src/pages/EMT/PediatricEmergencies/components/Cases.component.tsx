export default function Cases(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                clínicos pediátricos para análisis</h2>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Dificultad
                    respiratoria en lactante</h3>
                <p className="italic text-gray-600 mb-4">
                    Lactante de 8 meses con 3 días de síntomas respiratorios. Los padres
                    reportan tos persistente,
                    dificultad para alimentarse y episodios de cianosis perioral. Presenta
                    retracciones subcostales
                    y sibilancias audibles.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación usando TEP:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Irritable, difícil de consolar, tono
                            muscular disminuido
                        </li>
                        <li><strong>Trabajo respiratorio:</strong> Retracciones evidentes,
                            sibilancias, aleteo nasal
                        </li>
                        <li><strong>Circulación cutánea:</strong> Cianosis perioral
                            intermitente, relleno capilar 3 seg
                        </li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Signos vitales:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>FC: 170/min (taquicárdico)</li>
                        <li>FR: 55/min (taquipneico)</li>
                        <li>SpO₂: 89% aire ambiente</li>
                        <li>Temperatura: 38.1°C</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Clasificación: Niño "enfermo" (todos los componentes del TEP
                            alterados)
                        </li>
                        <li>Oxígeno por mascarilla o soplado para mantener SpO₂ &gt;94%</li>
                        <li>Posición cómoda (brazos del cuidador)</li>
                        <li>Considerar broncodilatadores si hay sibilancias</li>
                        <li>Monitorización continua</li>
                        <li>Traslado rápido a centro con cuidados pediátricos</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 2: Sospecha de
                    epiglotitis</h3>
                <p className="italic text-gray-600 mb-4">
                    Niño de 4 años que desarrolló súbitamente fiebre alta, dolor de garganta
                    severo y dificultad para tragar.
                    Se encuentra sentado inclinado hacia adelante, babea constantemente y su voz
                    suena apagada.
                    Los padres están muy preocupados porque empeoró rápidamente.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Ansioso, alerta pero en evidente
                            distress
                        </li>
                        <li><strong>Trabajo respiratorio:</strong> Posición de trípode, estridor
                            leve
                        </li>
                        <li><strong>Circulación cutánea:</strong> Color normal, pero diaforético
                        </li>
                        <li>Temperatura: 39.8°C</li>
                        <li>Voz amortiguada ("papa caliente")</li>
                        <li>Babeo excesivo</li>
                    </ul>
                </div>

                <div className="bg-red-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-red-700">⚠️ Qué NO hacer:</h4>
                    <ul className="list-disc list-inside space-y-1 text-red-700">
                        <li>NO examinar la garganta con abatelenguas</li>
                        <li>NO acostar al niño</li>
                        <li>NO separar al niño de los padres</li>
                        <li>NO realizar procedimientos invasivos</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Mantener al niño calmado en posición cómoda</li>
                        <li>Oxígeno por soplado (técnica no invasiva)</li>
                        <li>Permitir que un padre acompañe en todo momento</li>
                        <li>Preparar equipo de vía aérea avanzada pero NO usar a menos que sea
                            absolutamente necesario
                        </li>
                        <li>Traslado CODE 3 a hospital con capacidad pediátrica</li>
                        <li>Notificar al hospital para que tengan equipo listo</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 3: Convulsión
                    febril</h3>
                <p className="italic text-gray-600 mb-4">
                    Niño de 2 años que presentó una convulsión generalizada de aproximadamente 3
                    minutos de duración.
                    Los padres reportan que había tenido fiebre desde la mañana. Al llegar, el
                    niño está postictal,
                    somnoliento pero responde a estímulos.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación postictal:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Somnoliento pero despierta con
                            estímulos
                        </li>
                        <li><strong>Trabajo respiratorio:</strong> Frecuencia y calidad normales
                        </li>
                        <li><strong>Circulación cutánea:</strong> Rubicundo por fiebre, relleno
                            capilar normal
                        </li>
                        <li>FC: 130/min</li>
                        <li>FR: 28/min</li>
                        <li>Temperatura: 39.5°C</li>
                        <li>SpO₂: 97%</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Asegurar vía aérea permeable</li>
                        <li>Posición de recuperación si está inconsciente</li>
                        <li>Medidas de enfriamiento: retirar ropa excesiva, ambiente fresco</li>
                        <li>Oxígeno si SpO₂ &lt;94%</li>
                        <li>Obtener historia detallada de la convulsión</li>
                        <li>Monitorización para detectar nuevas convulsiones</li>
                        <li>Traslado para evaluación médica completa</li>
                        <li>Educación a padres sobre convulsiones febriles</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 4: Lactante con
                    signos de shock</h3>
                <p className="italic text-gray-600 mb-4">
                    Lactante de 6 meses con historia de vómitos y diarrea por 2 días. Los padres
                    reportan que
                    ha estado "muy decaído" y no ha querido comer. Al evaluarlo, está letárgico
                    y difícil de despertar.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Letárgico, hipotónico, respuesta
                            disminuida
                        </li>
                        <li><strong>Trabajo respiratorio:</strong> Taquipnea, respiración
                            superficial
                        </li>
                        <li><strong>Circulación cutánea:</strong> Pálido, moteado, relleno
                            capilar 4 seg
                        </li>
                        <li>FC: 180/min (taquicardia significativa)</li>
                        <li>FR: 45/min</li>
                        <li>PA: 65/40 mmHg (hipotensión - signo tardío)</li>
                        <li>Fontanela anterior hundida</li>
                        <li>Mucosas secas</li>
                    </ul>
                </div>

                <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                    <h4 className="font-medium mb-2 text-yellow-700">⚠️ Signos de alarma:</h4>
                    <ul className="list-disc list-inside space-y-1 text-yellow-700">
                        <li>Hipotensión en pediatría = shock descompensado</li>
                        <li>Cambio en el nivel de conciencia</li>
                        <li>Relleno capilar prolongado</li>
                        <li>Taquicardia extrema</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo urgente:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Clasificación: Shock descompensado - emergencia crítica</li>
                        <li>Acceso vascular inmediato (IV/IO)</li>
                        <li>Bolo de solución salina normal 20 ml/kg rápido</li>
                        <li>Reevaluar respuesta después del bolo</li>
                        <li>Repetir bolos según respuesta (hasta 60 ml/kg total)</li>
                        <li>Oxígeno de alto flujo</li>
                        <li>Control de temperatura</li>
                        <li>Traslado CODE 3 a centro con UCIP</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 5: Obstrucción
                    de vía aérea en preescolar</h3>
                <p className="italic text-gray-600 mb-4">
                    Niño de 3 años que súbitamente desarrolló dificultad respiratoria mientras
                    comía palomitas.
                    La madre refiere que empezó a toser violentamente y luego se puso "azul".
                    Al llegar, el niño está consciente pero con estridor y cianosis.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Evaluación:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>Apariencia:</strong> Ansioso, agitado, en evidente distress
                        </li>
                        <li><strong>Trabajo respiratorio:</strong> Estridor inspiratorio
                            marcado, retracciones
                        </li>
                        <li><strong>Circulación cutánea:</strong> Cianosis central y perioral
                        </li>
                        <li>Tos débil e inefectiva</li>
                        <li>No puede hablar claramente</li>
                        <li>SpO₂: 78%</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo de obstrucción severa:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Reconocer obstrucción de vía aérea por cuerpo extraño</li>
                        <li>Si está consciente y puede toser: animar a toser</li>
                        <li>Si no puede toser efectivamente: compresiones abdominales
                            (Heimlich)
                        </li>
                        <li>Posicionar al niño de pie o sentado, inclinar hacia adelante</li>
                        <li>5 compresiones abdominales hacia arriba y adentro</li>
                        <li>Verificar boca para objetos visibles (NO barrido a ciegas)</li>
                        <li>Continuar hasta desobstracción o pérdida de conciencia</li>
                        <li>Si pierde conciencia: RCP con verificación de cavidad oral antes de
                            ventilaciones
                        </li>
                        <li>Transporte inmediato durante maniobras</li>
                    </ol>
                </div>
            </div>
        </div>
    );
}