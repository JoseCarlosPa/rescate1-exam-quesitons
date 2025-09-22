export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                clínicos para análisis</h2>
            <p className="text-gray-600 mb-6">
                Analiza estos casos aplicando tus conocimientos de anatomía y fisiología. Piensa
                en qué sistemas están comprometidos y cómo se relacionan entre sí.
            </p>

            <div
                className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1
                    </div>
                    <h3 className="text-xl font-semibold text-red-700">Caso: Dolor torácico
                        agudo</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> Hombre de 55 años, dolor opresivo en el
                        pecho que se irradia al brazo izquierdo y mandíbula.
                        Sudoración profusa, náuseas. FC: 110 lpm, PA: 160/95 mmHg, FR: 24 rpm,
                        SatO₂: 96%.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">🧠 Análisis
                            anatómico:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Sistema cardiovascular comprometido</li>
                            <li>• Posible obstrucción coronaria</li>
                            <li>• Miocardio isquémico</li>
                            <li>• Dolor referido por inervación compartida</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">⚡ Fisiopatología:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Disminución del flujo sanguíneo coronario</li>
                            <li>• Hipoxia del tejido cardíaco</li>
                            <li>• Activación del sistema simpático</li>
                            <li>• Liberación de catecolaminas</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-red-100 rounded">
                    <strong className="text-red-800">Prioridad de tratamiento:</strong>
                    <span className="text-red-700 text-sm"> Oxígeno, nitroglicerina, aspirina, monitorización cardíaca, traslado urgente.</span>
                </div>
            </div>

            <div
                className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700">Caso: Dificultad
                        respiratoria severa</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> Mujer de 28 años con asma, crisis asmática
                        severa. Habla por palabras sueltas,
                        sibilancias audibles, uso de músculos accesorios. FC: 130 lpm, PA:
                        140/90 mmHg, FR: 35 rpm, SatO₂: 88%.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">🫁 Anatomía
                            afectada:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Bronquios y bronquiolos (constricción)</li>
                            <li>• Músculos lisos de vías aéreas</li>
                            <li>• Alvéolos (intercambio gaseoso comprometido)</li>
                            <li>• Músculos accesorios activados</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">🔬 Mecanismo:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Broncoconstricción e inflamación</li>
                            <li>• Aumento de resistencia al flujo aéreo</li>
                            <li>• Hipoxemia e hipercapnia</li>
                            <li>• Respuesta compensatoria cardiovascular</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                    <strong className="text-blue-800">Prioridad de tratamiento:</strong>
                    <span className="text-blue-700 text-sm"> Broncodilatadores (salbutamol), oxígeno, corticoides, posición de tripié.</span>
                </div>
            </div>

            <div
                className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700">Caso: Trauma de
                        cráneo</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> Motociclista de 25 años, impacto frontal.
                        Glasgow 10 (O3, V3, M4),
                        pupilas anisocóricas (derecha 5mm, izquierda 3mm). FC: 60 lpm, PA:
                        180/100 mmHg, FR: 10 rpm irregular.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">🧠 Anatomía
                            comprometida:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Posible hematoma intracraneal</li>
                            <li>• Compresión del tronco cerebral</li>
                            <li>• Herniación tentorial (pupila midriática)</li>
                            <li>• Centros vitales comprometidos</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">📊 Signos de
                            Cushing:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Hipertensión arterial (↑ presión intracraneal)</li>
                            <li>• Bradicardia (reflejo compensatorio)</li>
                            <li>• Respiración irregular (compromiso del tronco)</li>
                            <li>• Pupila dilatada (compresión del III par)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                    <strong className="text-purple-800">Prioridad de tratamiento:</strong>
                    <span className="text-purple-700 text-sm"> Manejo de vía aérea, hiperventilación moderada, manitol, traslado emergente a neurocirugía.</span>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center">
                    🎯 Ejercicio de integración sistémica
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                        <h4 className="font-semibold text-orange-800 mb-2">Pregunta de
                            análisis:</h4>
                        <p className="text-gray-700 text-sm mb-3">
                            Un paciente en shock hemorrágico presenta taquicardia, hipotensión,
                            piel fría y pálida,
                            y disminución del estado mental. ¿Qué sistemas están involucrados y
                            cómo se relacionan?
                        </p>
                        <div className="bg-orange-50 p-3 rounded">
                            <strong className="text-orange-800 text-xs">Sistemas
                                afectados:</strong>
                            <ul className="text-orange-700 text-xs mt-1 space-y-1">
                                <li>• Cardiovascular: ↓ volumen → ↓ precarga → ↓ gasto
                                    cardíaco
                                </li>
                                <li>• Nervioso: ↓ perfusión cerebral → alteración mental</li>
                                <li>• Tegumentario: vasoconstricción → piel fría y pálida</li>
                                <li>• Renal: ↓ filtración glomerular → oliguria</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400">
                        <h4 className="font-semibold text-orange-800 mb-2">Mecanismos
                            compensatorios:</h4>
                        <ul className="text-orange-700 text-sm space-y-2">
                            <li>• <strong>Simpático:</strong> liberación de catecolaminas</li>
                            <li>• <strong>Cardiovascular:</strong> taquicardia compensatoria
                            </li>
                            <li>• <strong>Vascular:</strong> vasoconstricción periférica</li>
                            <li>• <strong>Renal:</strong> retención de agua y sodio</li>
                            <li>• <strong>Respiratorio:</strong> taquipnea (acidosis metabólica)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}