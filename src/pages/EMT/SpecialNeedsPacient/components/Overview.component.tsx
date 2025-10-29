export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Introducción destacada */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
                    <span className="text-blue-600">🏥</span>
                    ¿Qué son los pacientes con necesidades especiales?
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-3">
                    Los <strong>pacientes con necesidades especiales</strong> son aquellos que requieren
                    consideraciones adicionales debido a condiciones físicas,
                    mentales, emocionales o sociales que pueden afectar su capacidad para
                    comunicarse, cooperar o recibir atención médica de manera estándar.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Estos pacientes presentan desafíos únicos para el personal de EMS y requieren
                    adaptaciones en el abordaje, comunicación y tratamiento para brindar una atención de calidad y segura.
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg">
                    <p className="text-sm text-gray-600 italic">
                        💡 <strong>Punto clave:</strong> Aproximadamente el 26% de los adultos en EE.UU. viven con alguna forma de discapacidad,
                        lo que significa que encontrarás estos pacientes con frecuencia en tu práctica prehospitalaria.
                    </p>
                </div>
            </div>

            {/* Categorías principales con diseño mejorado */}
            <div>
                <h2 className="text-2xl font-bold mb-5 text-gray-900 border-b-2 border-gray-200 pb-3">
                    📋 Categorías principales de pacientes
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                            <span>♿</span> Discapacidades Físicas
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>Parálisis (paraplejia, cuadriplejia)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>Amputaciones</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 mt-1">•</span>
                                <span>Dependencia de dispositivos de movilidad</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                            <span>👁️👂</span> Discapacidades Sensoriales
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>Ceguera o discapacidad visual</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>Sordera o hipoacusia</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span>
                                <span>Pérdida de sensibilidad</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                            <span>🧠</span> Discapacidades Cognitivas
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span>Discapacidad intelectual</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span>Trastornos del espectro autista</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                <span>Demencia y Alzheimer</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                            <span>💊</span> Salud Mental
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>Depresión y ansiedad</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>Trastorno bipolar</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-500 mt-1">•</span>
                                <span>Esquizofrenia y psicosis</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                            <span>⚙️</span> Dependencia Tecnológica
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-orange-500 mt-1">•</span>
                                <span>Ventiladores domiciliarios</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-500 mt-1">•</span>
                                <span>Traqueostomías y ostomías</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-500 mt-1">•</span>
                                <span>Dispositivos implantables</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 hover:shadow-md transition-shadow">
                        <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                            <span>🔄</span> Otras Necesidades
                        </h3>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>Obesidad mórbida</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>Barreras del idioma</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-yellow-600 mt-1">•</span>
                                <span>Pacientes sin hogar</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Principios fundamentales mejorados */}
            <div>
                <h2 className="text-2xl font-bold mb-5 text-gray-900 border-b-2 border-gray-200 pb-3">
                    ⭐ Principios fundamentales de atención
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">🤝</span>
                            <h3 className="font-bold text-lg text-orange-800">Respeto y Dignidad</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 font-bold">✓</span>
                                <span>Tratar al paciente como persona, no como su condición</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 font-bold">✓</span>
                                <span>Mantener la privacidad y confidencialidad en todo momento</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 font-bold">✓</span>
                                <span>Respetar sus preferencias y autonomía</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 font-bold">✓</span>
                                <span>Evitar términos despectivos o estigmatizantes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-orange-600 font-bold">✓</span>
                                <span>Pedir permiso antes de tocar dispositivos de asistencia</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">💬</span>
                            <h3 className="font-bold text-lg text-blue-800">Comunicación Efectiva</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span>Hablar directamente al paciente, no al acompañante</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span>Usar lenguaje claro, simple y sin tecnicismos innecesarios</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span>Permitir tiempo adicional para respuestas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span>Utilizar métodos alternativos cuando sea necesario</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 font-bold">✓</span>
                                <span>Confirmar comprensión mediante retroalimentación</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-3xl">🎯</span>
                            <h3 className="font-bold text-lg text-green-800">Individualización</h3>
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span>Preguntar sobre necesidades específicas del paciente</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span>Adaptar el examen físico a limitaciones individuales</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span>Identificar el nivel basal de función</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span>Obtener historia de cuidadores cuando sea apropiado</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-600 font-bold">✓</span>
                                <span>Reconocer que cada paciente es único</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Consideraciones legales y éticas mejoradas */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 flex items-center gap-2 border-b-2 border-indigo-200 pb-3">
                    <span className="text-2xl">⚖️</span>
                    Consideraciones legales y éticas
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-indigo-700 mb-3 flex items-center gap-2">
                            <span>📜</span> Marco Legal
                        </h3>
                        <ul className="space-y-3 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-500 font-bold mt-1">•</span>
                                <div>
                                    <strong className="text-indigo-700">Ley ADA (Americans with Disabilities Act):</strong>
                                    <p className="text-gray-600 mt-1">Prohíbe la discriminación y garantiza acceso equitativo a servicios de emergencia</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-500 font-bold mt-1">•</span>
                                <div>
                                    <strong className="text-indigo-700">Consentimiento informado:</strong>
                                    <p className="text-gray-600 mt-1">Debe adaptarse a la capacidad de comprensión del paciente</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-500 font-bold mt-1">•</span>
                                <div>
                                    <strong className="text-indigo-700">Tutores legales:</strong>
                                    <p className="text-gray-600 mt-1">Identificar quién tiene autoridad para tomar decisiones médicas</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
                            <span>🛡️</span> Responsabilidades EMS
                        </h3>
                        <ul className="space-y-3 text-gray-700 text-sm">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <div>
                                    <strong className="text-purple-700">Confidencialidad HIPAA:</strong>
                                    <p className="text-gray-600 mt-1">Proteger información de salud mental y discapacidades</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <div>
                                    <strong className="text-purple-700">No discriminación:</strong>
                                    <p className="text-gray-600 mt-1">Brindar el mismo nivel de atención a todos los pacientes</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-500 font-bold mt-1">•</span>
                                <div>
                                    <strong className="text-purple-700">Documentación apropiada:</strong>
                                    <p className="text-gray-600 mt-1">Registrar adaptaciones y consideraciones especiales</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg">
                    <p className="text-sm text-gray-700">
                        <strong className="text-yellow-700">⚠️ Recuerda:</strong> La falta de accesibilidad o discriminación puede resultar
                        en consecuencias legales. Siempre busca maneras de acomodar las necesidades del paciente mientras mantienes
                        la seguridad de todos.
                    </p>
                </div>
            </div>
        </div>
    );
}