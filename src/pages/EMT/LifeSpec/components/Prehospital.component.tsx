import {FaBaby, FaUserMd} from "react-icons/fa";
import {BsPersonCheck} from "react-icons/bs";
import {MdAccessibility} from "react-icons/md";

export default function Prehospital() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                    especiales en atención prehospitalaria</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    La atención prehospitalaria debe adaptarse a las características específicas
                    de cada grupo etario.
                    Cada etapa del desarrollo presenta desafíos únicos que requieren
                    conocimientos, técnicas y
                    aproximaciones específicas para optimizar el cuidado del paciente.
                </p>
            </div>

            <div className="grid gap-6">
                {/* Pediatría */}
                <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                        <FaBaby className="w-6 h-6 mr-3"/>
                        Pediatría (0-12 años)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-blue-700 mb-2">🫁 Vía aérea y
                                respiración</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Vía aérea proporcionalmente más pequeña</li>
                                <li>Laringe más anterior y superior</li>
                                <li>Lengua relativamente más grande</li>
                                <li>Respiradores nasales obligados (lactantes)</li>
                                <li>Tórax más flexible, respiración diafragmática</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-blue-700 mb-2">🩸 Circulación</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Volemia menor: 80ml/kg (vs 70ml/kg adulto)</li>
                                <li>Compensación cardíaca excelente</li>
                                <li>Hipotensión = signo tardío de shock</li>
                                <li>Pérdidas insensibles mayores</li>
                                <li>Riesgo alto de deshidratación</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-blue-700 mb-2">🧠 Aspectos
                                neurológicos</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Cabeza proporcionalmente más grande</li>
                                <li>Fontanelas abiertas (hasta 18 meses)</li>
                                <li>Mayor riesgo de trauma craneal</li>
                                <li>Desarrollo cognitivo variable</li>
                                <li>Escalas neurológicas específicas</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-blue-700 mb-2">🗣️ Comunicación y
                                manejo</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Lenguaje apropiado para la edad</li>
                                <li>Presencia de cuidadores esencial</li>
                                <li>Objetos de confort (juguetes)</li>
                                <li>Minimizar separación familiar</li>
                                <li>Explicaciones honestas y simples</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Adolescentes */}
                <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
                        <BsPersonCheck className="w-6 h-6 mr-3"/>
                        Adolescentes (12-18 años)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-purple-700 mb-2">🔍 Consideraciones
                                especiales</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Anatomía en transición a adulto</li>
                                <li>Cambios hormonales significativos</li>
                                <li>Conductas de riesgo aumentadas</li>
                                <li>Lesiones deportivas frecuentes</li>
                                <li>Problemas de salud mental emergentes</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-purple-700 mb-2">🤝 Comunicación</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Respeto a la privacidad</li>
                                <li>Comunicación directa y honesta</li>
                                <li>Involucrar en decisiones</li>
                                <li>Confidencialidad apropiada</li>
                                <li>Considerar autonomía emergente</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Adultos */}
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                        <FaUserMd className="w-6 h-6 mr-3"/>
                        Adultos (19-64 años)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-green-700 mb-2">💪 Características
                                fisiológicas</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Sistemas orgánicos en plenitud funcional</li>
                                <li>Capacidad de compensación óptima</li>
                                <li>Respuesta predecible al estrés</li>
                                <li>Signos vitales estables</li>
                                <li>Recuperación generalmente favorable</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-green-700 mb-2">⚠️ Factores de
                                riesgo comunes</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Estrés laboral y familiar</li>
                                <li>Factores de riesgo cardiovascular</li>
                                <li>Accidentes laborales</li>
                                <li>Traumatismos de alta energía</li>
                                <li>Patologías crónicas emergentes</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Adultos mayores */}
                <div className="bg-orange-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
                        <MdAccessibility className="w-6 h-6 mr-3"/>
                        Adultos mayores (65+ años)
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-orange-700 mb-2">🏥 Consideraciones
                                médicas</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Comorbilidades múltiples</li>
                                <li>Polifarmacia (múltiples medicamentos)</li>
                                <li>Fragilidad ósea aumentada</li>
                                <li>Respuesta inmune disminuida</li>
                                <li>Capacidad de reserva limitada</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-orange-700 mb-2">👂 Comunicación
                                especial</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Posible deterioro auditivo/visual</li>
                                <li>Tiempo adicional para respuestas</li>
                                <li>Dignidad y respeto esenciales</li>
                                <li>Involucrar cuidadores cuando necesario</li>
                                <li>Considerar capacidad cognitiva</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-orange-700 mb-2">🚨 Presentaciones
                                atípicas</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Infarto sin dolor torácico típico</li>
                                <li>Infección sin fiebre</li>
                                <li>Depresión como presentación física</li>
                                <li>Caídas como síntoma de enfermedad</li>
                                <li>Síntomas vagos e inespecíficos</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium text-orange-700 mb-2">📋 Evaluación
                                integral</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Historia medicamentosa completa</li>
                                <li>Estado funcional baseline</li>
                                <li>Evaluación de riesgo de caídas</li>
                                <li>Soporte social disponible</li>
                                <li>Directivas avanzadas existentes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-yellow-800">🎯 Principios
                    universales para todas las edades</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Evaluar ABCDE de manera sistemática</li>
                        <li>Adaptar comunicación a la edad y condición</li>
                        <li>Considerar el contexto familiar y social</li>
                        <li>Documentar antecedentes médicos relevantes</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Monitorizar signos vitales apropiados</li>
                        <li>Aplicar medidas de confort específicas</li>
                        <li>Planificar transporte más adecuado</li>
                        <li>Comunicar hallazgos al equipo receptor</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}