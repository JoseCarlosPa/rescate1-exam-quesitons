export default function Practice(){
    return(
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Casos
                Clínicos Interactivos</h2>

            <div
                className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-3 text-red-700">Caso 1: Trauma
                    Penetrante - Herida por Arma Blanca</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Escenario:</h4>
                        <p className="text-gray-700 mb-4">
                            Masculino de 25 años con herida por arma blanca en hemitórax
                            derecho, 4º espacio intercostal.
                            Consciente, dificultad respiratoria severa, se escucha "succión" de
                            la herida.
                        </p>
                        <h4 className="font-semibold mb-2">Hallazgos iniciales:</h4>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <ul className="space-y-1 text-sm">
                                <li><strong>A:</strong> Permeable, habla con frases cortas</li>
                                <li><strong>B:</strong> FR 32/min, SpO₂ 89%, ruidos ↓ derecho
                                </li>
                                <li><strong>C:</strong> FC 125/min, TA 100/65, piel pálida</li>
                                <li><strong>D:</strong> Glasgow 15, ansioso</li>
                                <li><strong>E:</strong> Herida "soplante" 3cm</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Tu secuencia de manejo:</h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                            <li className="bg-green-100 p-2 rounded">Oxígeno a alto flujo
                                (15L/min mascarilla no recirculante)
                            </li>
                            <li className="bg-green-100 p-2 rounded">Sellar herida con apósito
                                oclusivo fijado en 3 lados
                            </li>
                            <li className="bg-green-100 p-2 rounded">Posición semisentado</li>
                            <li className="bg-green-100 p-2 rounded">Monitorización continua
                            </li>
                            <li className="bg-green-100 p-2 rounded">Acceso vascular</li>
                            <li className="bg-green-100 p-2 rounded">Transporte inmediato</li>
                        </ol>
                        <div className="mt-4 bg-yellow-100 p-3 rounded">
                            <h5 className="font-semibold text-yellow-800">Punto clave:</h5>
                            <p className="text-sm text-yellow-700">
                                Monitorizar estrechamente por desarrollo de neumotórax a
                                tensión.
                                Si empeora: levantar una esquina del sello temporalmente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Caso 2: Accidente de
                    Tránsito - Tórax Inestable</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Escenario:</h4>
                        <p className="text-gray-700 mb-4">
                            Conductor de 45 años, colisión frontal sin cinturón. Impacto
                            torácico contra volante.
                            Dolor intenso, "no puedo respirar bien".
                        </p>
                        <h4 className="font-semibold mb-2">Evolución del caso:</h4>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="text-sm"><strong>Minuto 1:</strong> Movimiento
                                    paradójico visible en hemitórax izquierdo</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="text-sm"><strong>Minuto 3:</strong> SpO₂ cae a
                                    85%, respiración cada vez más superficial</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <p className="text-sm"><strong>Minuto 5:</strong> Paciente
                                    fatigado, necesita soporte ventilatorio</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Decisiones críticas:</h4>
                        <div className="space-y-3">
                            <div className="bg-green-100 p-3 rounded">
                                <h5 className="font-semibold text-green-800">✓ Correcto:</h5>
                                <p className="text-sm">Ventilación con presión positiva (BVM)
                                    para estabilizar segmento desde adentro</p>
                            </div>
                            <div className="bg-red-100 p-3 rounded">
                                <h5 className="font-semibold text-red-800">✗ Incorrecto:</h5>
                                <p className="text-sm">Colocar peso o vendaje sobre el segmento
                                    inestable</p>
                            </div>
                        </div>
                        <h4 className="font-semibold mb-2 mt-4">Manejo integral:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Soporte ventilatorio inmediato</li>
                            <li>Analgesia adecuada</li>
                            <li>Monitorización de contusión pulmonar</li>
                            <li>Preparación para intubación</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-3 text-purple-700">Caso 3: Deterioro
                    Rápido - Desarrollo de Tensión</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2">Escenario:</h4>
                        <p className="text-gray-700 mb-4">
                            Durante transporte del Caso 1, el paciente deteriora rápidamente.
                            Extreme ansiedad, cianosis, dificultad respiratoria severa.
                        </p>
                        <h4 className="font-semibold mb-2">Cambios en signos vitales:</h4>
                        <div className="bg-white p-4 rounded shadow-sm">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <h5 className="font-semibold">Inicial:</h5>
                                    <ul>
                                        <li>FR: 32/min</li>
                                        <li>FC: 125/min</li>
                                        <li>TA: 100/65</li>
                                        <li>SpO₂: 89%</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-semibold text-red-600">Actual:</h5>
                                    <ul>
                                        <li>FR: 40/min</li>
                                        <li>FC: 150/min</li>
                                        <li>TA: 70/40</li>
                                        <li>SpO₂: 78%</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Acción inmediata requerida:</h4>
                        <div className="bg-red-100 p-4 rounded border border-red-300">
                            <h5 className="font-bold text-red-800 mb-2">¡EMERGENCIA!</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-red-700">
                                <li>Reconocer neumotórax a tensión</li>
                                <li>Levantar esquina del sello inmediatamente</li>
                                <li>Debería escucharse escape de aire</li>
                                <li>Mejoría inmediata de signos vitales</li>
                                <li>Re-sellar con válvula funcional</li>
                            </ol>
                        </div>
                        <div className="mt-4 bg-blue-100 p-3 rounded">
                            <h5 className="font-semibold text-blue-800">Lección aprendida:</h5>
                            <p className="text-sm text-blue-700">
                                El neumotórax abierto puede evolucionar a tensión si el sello no
                                funciona como válvula.
                                La vigilancia continua es crítica.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ejercicio de toma de decisiones */}
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ejercicio de Toma de
                    Decisiones Rápidas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-3">Escenario rápido:</h4>
                        <p className="text-gray-700 mb-3">
                            Paciente con trauma torácico. Presenta ingurgitación yugular,
                            ruidos cardíacos apagados e hipotensión progresiva.
                        </p>
                        <h4 className="font-semibold mb-2">¿Cuál es tu sospecha
                            diagnóstica?</h4>
                        <div className="space-y-2">
                            <button
                                className="w-full text-left p-2 bg-white rounded border hover:bg-gray-100">
                                A) Neumotórax a tensión
                            </button>
                            <button
                                className="w-full text-left p-2 bg-white rounded border hover:bg-gray-100">
                                B) Hemotórax masivo
                            </button>
                            <button
                                className="w-full text-left p-2 bg-green-100 rounded border border-green-300">
                                C) Taponamiento cardíaco ✓
                            </button>
                            <button
                                className="w-full text-left p-2 bg-white rounded border hover:bg-gray-100">
                                D) Tórax inestable
                            </button>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2">Explicación:</h4>
                        <p className="text-sm text-gray-700 mb-3">
                            La combinación de ingurgitación yugular, ruidos cardíacos apagados e
                            hipotensión
                            forma la "Tríada de Beck", clásica del taponamiento cardíaco.
                        </p>
                        <h4 className="font-semibold mb-2">Manejo prehospitalario:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Soporte hemodinámico</li>
                            <li>• Fluidos IV controlados</li>
                            <li>• Transporte inmediato</li>
                            <li>• Comunicación con cirujano</li>
                        </ul>
                        <div className="mt-3 p-2 bg-yellow-100 rounded">
                            <p className="text-xs text-yellow-700">
                                <strong>Nota:</strong> La pericardiocentesis es procedimiento
                                hospitalario
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}