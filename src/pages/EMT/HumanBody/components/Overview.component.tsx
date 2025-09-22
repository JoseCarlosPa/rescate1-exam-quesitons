export default function Overview(){
    return(
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Por qué
                    es fundamental conocer el cuerpo humano?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    Para un paramédico, comprender la anatomía y fisiología es esencial para
                    identificar rápidamente qué sistema está comprometido en una emergencia.
                    Esta base de conocimiento permite tomar decisiones críticas que pueden
                    marcar la diferencia entre la vida y la muerte del paciente.
                </p>
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-orange-700">
                                <strong>Punto clave:</strong> Un paramédico no solo trata
                                síntomas, sino que evalúa el funcionamiento integral del cuerpo
                                para proporcionar la atención más efectiva.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Niveles
                    de organización biológica</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong>Célula:</strong> Unidad básica de la vida. Contiene
                                    orgánulos especializados para funciones específicas.
                                </div>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong>Tejido:</strong> Conjunto de células similares que
                                    trabajan juntas (ej: tejido muscular, nervioso).
                                </div>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong>Órgano:</strong> Estructura formada por diferentes
                                    tejidos con función específica (corazón, pulmones).
                                </div>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <div>
                                    <strong>Sistema:</strong> Conjunto de órganos que realizan
                                    funciones complejas (sistema cardiovascular).
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Ejemplo práctico:</h4>
                        <p className="text-blue-700 text-sm">
                            Un infarto (daño celular) → afecta el tejido cardíaco → compromete
                            el órgano (corazón) →
                            altera todo el sistema cardiovascular → impacta otros sistemas del
                            organismo.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Posición
                    anatómica y terminología médica</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Posición anatómica
                            estándar:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Persona de pie, erguida</li>
                            <li>• Vista hacia el frente</li>
                            <li>• Brazos a los costados</li>
                            <li>• Palmas hacia adelante</li>
                            <li>• Pies juntos y paralelos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-2 text-gray-800">Términos direccionales
                            clave:</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="bg-gray-100 p-2 rounded">
                                <strong>Superior:</strong> Hacia arriba
                            </div>
                            <div className="bg-gray-100 p-2 rounded">
                                <strong>Inferior:</strong> Hacia abajo
                            </div>
                            <div className="bg-gray-100 p-2 rounded">
                                <strong>Anterior:</strong> Hacia adelante
                            </div>
                            <div className="bg-gray-100 p-2 rounded">
                                <strong>Posterior:</strong> Hacia atrás
                            </div>
                            <div className="bg-gray-100 p-2 rounded">
                                <strong>Medial:</strong> Hacia el centro
                            </div>
                            <div className="bg-gray-100 p-2 rounded">
                                <strong>Lateral:</strong> Hacia los lados
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-800 mb-2">💡 Tip para
                    paramédicos</h3>
                <p className="text-green-700">
                    Practica describir hallazgos usando terminología anatómica precisa. En lugar
                    de decir "herida en el brazo",
                    di "laceración en la región anterior del antebrazo derecho, tercio distal".
                    Esto mejora la comunicación con el equipo médico.
                </p>
            </div>
        </div>
    );
}