export default function Tools(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                🧰 Herramientas de Evaluación
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-medium text-lg mb-3 text-blue-800 flex items-center gap-2">
                            📋 Nemotecnias esenciales
                        </h3>

                        <div className="space-y-3">
                            <div className="p-3 bg-white rounded border">
                                <h4 className="font-bold text-blue-700 mb-2">SAMPLE (Historia
                                    clínica)</h4>
                                <div className="text-sm space-y-1">
                                    <div><strong>S</strong>ignos y síntomas</div>
                                    <div><strong>A</strong>lergias</div>
                                    <div><strong>M</strong>edicamentos</div>
                                    <div><strong>P</strong>asado médico relevante</div>
                                    <div><strong>L</strong>ast meal (última comida)</div>
                                    <div><strong>E</strong>ventos previos</div>
                                </div>
                            </div>

                            <div className="p-3 bg-white rounded border">
                                <h4 className="font-bold text-blue-700 mb-2">OPQRST (Análisis
                                    del dolor)</h4>
                                <div className="text-sm space-y-1">
                                    <div><strong>O</strong>nset (inicio/tiempo)</div>
                                    <div><strong>P</strong>rovocación/paliación</div>
                                    <div><strong>Q</strong>uality (calidad/tipo)</div>
                                    <div><strong>R</strong>adiación/región</div>
                                    <div><strong>S</strong>everity (severidad/escala)</div>
                                    <div><strong>T</strong>ime (duración/temporal)</div>
                                </div>
                            </div>

                            <div className="p-3 bg-white rounded border">
                                <h4 className="font-bold text-blue-700 mb-2">AVDI (Estado de
                                    conciencia)</h4>
                                <div className="text-sm space-y-1">
                                    <div><strong>A</strong>lerta</div>
                                    <div><strong>V</strong>oz (responde a estímulos verbales)
                                    </div>
                                    <div><strong>D</strong>olor (responde a estímulos dolorosos)
                                    </div>
                                    <div><strong>I</strong>nconsciente</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="font-medium text-lg mb-3 text-green-800 flex items-center gap-2">
                            🧠 Escala de Glasgow
                        </h3>

                        <div className="space-y-3">
                            <div className="p-3 bg-white rounded border">
                                <h4 className="font-bold text-green-700 mb-2">Respuesta Ocular
                                    (1-4)</h4>
                                <div className="text-sm space-y-1">
                                    <div><strong>4:</strong> Espontánea</div>
                                    <div><strong>3:</strong> A la voz</div>
                                    <div><strong>2:</strong> Al dolor</div>
                                    <div><strong>1:</strong> Sin respuesta</div>
                                </div>
                            </div>

                            <div className="p-3 bg-white rounded border">
                                <h4 className="font-bold text-green-700 mb-2">Respuesta Verbal
                                    (1-5)</h4>
                                <div className="text-sm space-y-1">
                                    <div><strong>5:</strong> Orientada</div>
                                    <div><strong>4:</strong> Confusa</div>
                                    <div><strong>3:</strong> Palabras inapropiadas</div>
                                    <div><strong>2:</strong> Sonidos incomprensibles</div>
                                    <div><strong>1:</strong> Sin respuesta</div>
                                </div>
                            </div>

                            <div className="p-3 bg-white rounded border">
                                <h4 className="font-bold text-green-700 mb-2">Respuesta Motora
                                    (1-6)</h4>
                                <div className="text-sm space-y-1">
                                    <div><strong>6:</strong> Obedece órdenes</div>
                                    <div><strong>5:</strong> Localiza dolor</div>
                                    <div><strong>4:</strong> Retira al dolor</div>
                                    <div><strong>3:</strong> Flexión anormal</div>
                                    <div><strong>2:</strong> Extensión anormal</div>
                                    <div><strong>1:</strong> Sin respuesta</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-3 p-2 bg-green-100 rounded text-center">
                            <span className="text-green-800 font-medium">Puntuación total: 3-15 puntos</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="font-medium text-lg mb-4 text-yellow-800 flex items-center gap-2">
                    📏 Escalas de evaluación adicionales
                </h3>

                <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded border">
                        <h4 className="font-bold text-gray-800 mb-3">Escala de Dolor (0-10)</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>0-2:</span>
                                <span className="text-green-600">Leve</span>
                            </div>
                            <div className="flex justify-between">
                                <span>3-6:</span>
                                <span className="text-yellow-600">Moderado</span>
                            </div>
                            <div className="flex justify-between">
                                <span>7-10:</span>
                                <span className="text-red-600">Severo</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded border">
                        <h4 className="font-bold text-gray-800 mb-3">Relleno Capilar</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>{'<'}2 seg:</span>
                                <span className="text-green-600">Normal</span>
                            </div>
                            <div className="flex justify-between">
                                <span>2-3 seg:</span>
                                <span className="text-yellow-600">Retardado</span>
                            </div>
                            <div className="flex justify-between">
                                <span>{'>'}3 seg:</span>
                                <span className="text-red-600">Anormal</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-white rounded border">
                        <h4 className="font-bold text-gray-800 mb-3">Pupilas (PERRL)</h4>
                        <div className="space-y-2 text-sm">
                            <div><strong>P</strong>upilas</div>
                            <div><strong>E</strong>quales</div>
                            <div><strong>R</strong>edondas</div>
                            <div><strong>R</strong>eactivas a la</div>
                            <div><strong>L</strong>uz</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-lg mb-4 text-gray-800">🎯 Consejos de aplicación
                    práctica</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Memoriza las nemotecnias hasta que sean automáticas</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Practica la escala de Glasgow con compañeros</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>Usa tarjetas de referencia hasta dominar los valores</span>
                        </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>Documenta hallazgos negativos importantes</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>Compara valores con evaluaciones previas</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-1">•</span>
                            <span>Contextualiza los hallazgos con la historia clínica</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}