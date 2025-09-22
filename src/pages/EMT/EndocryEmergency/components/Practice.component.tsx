import {FiActivity, FiUser} from "react-icons/fi";
import {FaEye} from "react-icons/fa";
import {BsLightbulb} from "react-icons/bs";
import {MdCheckCircle} from "react-icons/md";

export default function Practice() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiUser className="w-6 h-6 mr-2 text-blue-500"/>
                    Casos Clínicos Interactivos - Aprende Haciendo
                </h2>
                <p className="text-gray-700 mb-4">
                    Analiza cada caso, identifica signos clave y determina el manejo apropiado paso a paso.
                    Recuerda seguir el protocolo ABCDE y priorizar las intervenciones que salvan vidas.
                </p>
            </div>

            {/* Caso 1: Hipoglucemia severa */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1
                    </div>
                    <h3 className="text-xl font-semibold text-red-700">Caso Clínico: Hipoglucemia Severa</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <div className="bg-white p-5 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                                <FaEye className="w-4 h-4 mr-2"/>
                                Presentación del Caso
                            </h4>
                            <p className="text-gray-700 mb-3 italic">
                                "Mujer de 65 años diabética tipo 2, encontrada por su hija en casa,
                                inconsciente en el suelo de la cocina. La hija refiere que su madre
                                se inyectó insulina esta mañana pero no desayunó porque 'no tenía hambre'."
                            </p>
                            <div className="bg-gray-50 p-3 rounded">
                                <h5 className="font-medium text-gray-800 mb-2">Hallazgos iniciales:</h5>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    <li>• Paciente inconsciente, no responde a estímulos verbales</li>
                                    <li>• Piel fría, pálida y sudorosa</li>
                                    <li>• Respiración superficial pero presente</li>
                                    <li>• Pulso radial débil pero regular</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h4 className="font-semibold text-blue-600 mb-2">Pregunta de Reflexión</h4>
                            <p className="text-sm text-gray-700 mb-2">
                                ¿Cuál debe ser tu PRIMERA acción antes de cualquier intervención?
                            </p>
                            <div className="bg-white p-2 rounded text-xs text-gray-600">
                                <strong>Respuesta:</strong> Asegurar vía aérea y verificar respiración.
                                Aunque sospechemos hipoglucemia, el ABC siempre va primero.
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white p-5 rounded-lg mb-4">
                            <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                                <FiActivity className="w-4 h-4 mr-2"/>
                                Evaluación ABCDE
                            </h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex items-center">
                                    <span
                                        className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium mr-2">A</span>
                                    <span>Vía aérea permeable, sin secreciones</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium mr-2">B</span>
                                    <span>FR: 16/min, SpO₂: 97%, sin ruidos anormales</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium mr-2">C</span>
                                    <span>FC: 110/min, TA: 100/60 mmHg, pulso débil</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium mr-2">D</span>
                                    <span>Glasgow 6 (E1V1M4), pupilas reactivas</span>
                                </div>
                                <div className="flex items-center">
                                    <span
                                        className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium mr-2">E</span>
                                    <span>Glucosa capilar: 35 mg/dL, T° 36.2°C</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h4 className="font-semibold text-green-600 mb-3">Manejo Correcto Paso a Paso</h4>
                            <ol className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span
                                        className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">1</span>
                                    <span>Posición lateral de seguridad (proteger vía aérea)</span>
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">2</span>
                                    <span><strong>NO</strong> administrar glucosa oral (riesgo aspiración)</span>
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">3</span>
                                    <span>Glucagón 1mg IM si está autorizado</span>
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">4</span>
                                    <span>Traslado inmediato con monitoreo continuo</span>
                                </li>
                                <li className="flex items-start">
                                    <span
                                        className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">5</span>
                                    <span>Reevaluar glucosa y estado mental cada 5 min</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                        <BsLightbulb className="w-4 h-4 mr-2"/>
                        Perlas Educativas
                    </h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                        <li>• La hipoglucemia puede simular intoxicación o ACV</li>
                        <li>• La sudoración fría es un signo temprano y confiable</li>
                        <li>• El daño neurológico es reversible si se trata rápidamente</li>
                        <li>• Siempre informar al hospital sobre la administración de glucagón</li>
                    </ul>
                </div>
            </div>

            {/* Caso 2: Cetoacidosis diabética */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2
                    </div>
                    <h3 className="text-xl font-semibold text-orange-700">Caso Clínico: Cetoacidosis Diabética
                        (CAD)</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <div className="bg-white p-5 rounded-lg mb-4">
                            <h4 className="font-semibold text-orange-600 mb-3">Presentación del Caso</h4>
                            <p className="text-gray-700 mb-3 italic">
                                "Adolescente de 16 años llevado por sus padres después de 2 días con
                                vómito, sed excesiva y micción frecuente. Los padres refieren que
                                'respira muy rápido y profundo' y su aliento huele extraño."
                            </p>
                            <div className="bg-gray-50 p-3 rounded">
                                <h5 className="font-medium text-gray-800 mb-2">Signos vitales:</h5>
                                <ul className="text-sm space-y-1 text-gray-700">
                                    <li>• FC: 120/min, TA: 90/50 mmHg</li>
                                    <li>• FR: 28/min (respiración profunda y rápida)</li>
                                    <li>• T°: 37.8°C, glucosa: 450 mg/dL</li>
                                    <li>• Glasgow: 13 (confuso pero despierto)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white p-5 rounded-lg">
                            <h4 className="font-semibold text-red-600 mb-3">Manejo Prehospitalario</h4>
                            <div className="space-y-3">
                                <div className="bg-red-50 p-3 rounded border border-red-200">
                                    <h5 className="font-medium text-red-700 mb-1">❌ NO hacer:</h5>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• NO administrar insulina</li>
                                        <li>• NO dar bicarbonato</li>
                                        <li>• NO dar fluidos orales si vomita</li>
                                    </ul>
                                </div>
                                <div className="bg-green-50 p-3 rounded border border-green-200">
                                    <h5 className="font-medium text-green-700 mb-1">✅ SÍ hacer:</h5>
                                    <ul className="text-sm space-y-1 text-gray-700">
                                        <li>• Oxígeno suplementario</li>
                                        <li>• Monitoreo continuo</li>
                                        <li>• Posición de confort</li>
                                        <li>• Traslado urgente</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 3: Crisis de células falciformes */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700">Caso Clínico: Crisis Falciforme</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <div className="bg-white p-5 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-3">Presentación del Caso</h4>
                            <p className="text-gray-700 mb-3 italic">
                                "Joven de 22 años con antecedente conocido de anemia falciforme,
                                presenta dolor intenso 9/10 en brazos y piernas desde hace 6 horas.
                                Refiere que el dolor comenzó después de jugar fútbol en un día caluroso."
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white p-5 rounded-lg">
                            <h4 className="font-semibold text-green-600 mb-3">Factores Desencadenantes</h4>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Deshidratación (ejercicio + calor)</li>
                                <li>• Hipoxia</li>
                                <li>• Estrés físico</li>
                                <li>• Infecciones</li>
                                <li>• Cambios de temperatura</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 4: Hemofilia con sangrado */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700">Caso Clínico: Hemofilia con Sangrado</h3>
                </div>

                <div className="bg-white p-5 rounded-lg">
                    <h4 className="font-semibold text-purple-600 mb-3">Presentación del Caso</h4>
                    <p className="text-gray-700 mb-3 italic">
                        "Niño de 10 años con hemofilia A conocida, se golpeó la rodilla jugando.
                        La madre refiere sangrado que no se detiene después de 2 horas de presión.
                        El niño está pálido y la rodilla muy hinchada."
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-red-50 p-3 rounded">
                            <h5 className="font-medium text-red-700 mb-2">Precauciones Especiales</h5>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Manipulación muy suave</li>
                                <li>• Evitar inyecciones IM</li>
                                <li>• No aspirina ni anticoagulantes</li>
                                <li>• Proteger articulaciones</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <h5 className="font-medium text-green-700 mb-2">Manejo Correcto</h5>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Presión directa continua</li>
                                <li>• Aplicación de hielo</li>
                                <li>• Inmovilización suave</li>
                                <li>• Traslado urgente</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ejercicio de autoevaluación */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                    <MdCheckCircle className="w-6 h-6 mr-2"/>
                    Autoevaluación: Puntos Clave para Recordar
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-700 mb-3">Emergencias Endocrinas</h4>
                        <div className="space-y-2 text-sm">
                            <div className="bg-white p-3 rounded">
                                <p className="font-medium">¿Cuándo NO dar glucosa oral?</p>
                                <p className="text-gray-600 text-xs mt-1">Cuando el paciente está inconsciente o no
                                    puede tragar</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="font-medium">Signo patognomónico de CAD:</p>
                                <p className="text-gray-600 text-xs mt-1">Respiración de Kussmaul + aliento afrutado</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-700 mb-3">Emergencias Hematológicas</h4>
                        <div className="space-y-2 text-sm">
                            <div className="bg-white p-3 rounded">
                                <p className="font-medium">Primera acción en hemofilia:</p>
                                <p className="text-gray-600 text-xs mt-1">Presión directa firme y prolongada</p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="font-medium">Crisis falciforme - evitar:</p>
                                <p className="text-gray-600 text-xs mt-1">Frío, deshidratación, hipoxia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}