import {FaExclamationTriangle} from "react-icons/fa";
import {FiTarget} from "react-icons/fi";
import {MdCheckCircle, MdWarning} from "react-icons/md";

export default function Assessment(){
    return(
        <div className="space-y-8">
            {/* Evaluación primaria sistemática */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Evaluación Primaria Neurológica</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-blue-700 mb-2">A - Vía Aérea</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Protección cervical</li>
                            <li>• Aspiración si necesario</li>
                            <li>• Posición lateral si vómito</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-green-700 mb-2">B - Respiración</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• FR, ritmo, profundidad</li>
                            <li>• SpO₂ &gt; 94%</li>
                            <li>• Patrones anormales</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-700 mb-2">C - Circulación</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Pulso, TA</li>
                            <li>• Perfusión</li>
                            <li>• Hemorragias</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-purple-700 mb-2">D - Neurológico</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• AVDI/Glasgow</li>
                            <li>• Pupilas</li>
                            <li>• Déficit focal</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Evaluación específica por patología */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Protocolos de Evaluación Específica</h2>
                <div className="space-y-6">

                    {/* Protocolo ACV */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                            <FiTarget className="w-6 h-6 mr-2"/>
                            Protocolo ACV - Escala de Cincinnati
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded border">
                                <h4 className="font-semibold text-blue-800 mb-2">1. Parálisis Facial</h4>
                                <p className="text-sm text-gray-700 mb-2"><strong>Instrucción:</strong> "Sonría o muestre los dientes"</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• Normal: Ambos lados se mueven igual</li>
                                    <li>• Anormal: Un lado no se mueve o se mueve menos</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded border">
                                <h4 className="font-semibold text-blue-800 mb-2">2. Debilidad en Brazo</h4>
                                <p className="text-sm text-gray-700 mb-2"><strong>Instrucción:</strong> "Cierre los ojos y mantenga ambos brazos arriba por 10 segundos"</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• Normal: Ambos brazos se mantienen arriba</li>
                                    <li>• Anormal: Un brazo cae o deriva hacia abajo</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded border">
                                <h4 className="font-semibold text-blue-800 mb-2">3. Habla Anormal</h4>
                                <p className="text-sm text-gray-700 mb-2"><strong>Instrucción:</strong> "Repita: 'El cielo es azul en Cincinnati'"</p>
                                <ul className="text-xs text-gray-600 space-y-1">
                                    <li>• Normal: Palabras claras y correctas</li>
                                    <li>• Anormal: Arrastra palabras, usa palabras incorrectas o no puede hablar</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 bg-yellow-100 p-3 rounded">
                            <p className="text-sm font-medium text-yellow-800">
                                <strong>Interpretación:</strong> Si cualquier signo es anormal = 72% probabilidad de ACV
                            </p>
                        </div>
                    </div>

                    {/* Protocolo Convulsiones */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-green-700 mb-4">Manejo de Convulsiones</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-green-800 mb-3">Durante la Convulsión:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li>Proteger cabeza del paciente</li>
                                    <li>Mover objetos peligrosos</li>
                                    <li>NO restringir movimientos</li>
                                    <li>NO introducir objetos en boca</li>
                                    <li>Cronometrar duración</li>
                                    <li>Observar tipo de movimientos</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-800 mb-3">Post-ictal (Después):</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li>Posición de recuperación</li>
                                    <li>Evaluación vía aérea</li>
                                    <li>Aspiración si necesario</li>
                                    <li>Oxígeno si SpO₂ &lt; 94%</li>
                                    <li>Control de glucosa</li>
                                    <li>Evaluación neurológica</li>
                                </ol>
                            </div>
                        </div>
                        <div className="mt-4 bg-red-100 p-3 rounded">
                            <p className="text-sm font-medium text-red-800 flex items-center">
                                <MdWarning className="w-4 h-4 mr-2"/>
                                <strong>Estado Epiléptico:</strong> Convulsión &gt; 5 minutos o convulsiones repetidas sin recuperación
                            </p>
                        </div>
                    </div>

                    {/* Protocolo TCE */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">Evaluación Traumatismo Craneoencefálico</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-purple-800 mb-3">Escala de Glasgow:</h4>
                                <div className="space-y-2">
                                    <div className="bg-white p-3 rounded border">
                                        <h5 className="font-medium text-sm">Apertura Ocular (1-4)</h5>
                                        <ul className="text-xs text-gray-600 mt-1">
                                            <li>4: Espontánea</li>
                                            <li>3: A la voz</li>
                                            <li>2: Al dolor</li>
                                            <li>1: No abre</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded border">
                                        <h5 className="font-medium text-sm">Respuesta Verbal (1-5)</h5>
                                        <ul className="text-xs text-gray-600 mt-1">
                                            <li>5: Orientado</li>
                                            <li>4: Confuso</li>
                                            <li>3: Palabras inapropiadas</li>
                                            <li>2: Sonidos incomprensibles</li>
                                            <li>1: Sin respuesta</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white p-3 rounded border">
                                        <h5 className="font-medium text-sm">Respuesta Motora (1-6)</h5>
                                        <ul className="text-xs text-gray-600 mt-1">
                                            <li>6: Obedece órdenes</li>
                                            <li>5: Localiza dolor</li>
                                            <li>4: Retirada normal</li>
                                            <li>3: Flexión anormal</li>
                                            <li>2: Extensión anormal</li>
                                            <li>1: Sin respuesta</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-purple-800 mb-3">Interpretación y Manejo:</h4>
                                <div className="space-y-3">
                                    <div className="bg-red-100 p-3 rounded">
                                        <h5 className="font-medium text-red-800">TCE Grave (3-8)</h5>
                                        <ul className="text-sm text-gray-700 mt-1">
                                            <li>• Manejo avanzado vía aérea</li>
                                            <li>• Hiperventilación controlada</li>
                                            <li>• Prevenir hipotensión</li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-100 p-3 rounded">
                                        <h5 className="font-medium text-yellow-800">TCE Moderado (9-12)</h5>
                                        <ul className="text-sm text-gray-700 mt-1">
                                            <li>• Monitorización estrecha</li>
                                            <li>• Oxígeno suplementario</li>
                                            <li>• Reevaluación frecuente</li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-100 p-3 rounded">
                                        <h5 className="font-medium text-green-800">TCE Leve (13-15)</h5>
                                        <ul className="text-sm text-gray-700 mt-1">
                                            <li>• Evaluación completa</li>
                                            <li>• Observación síntomas</li>
                                            <li>• Educación al paciente</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manejo farmacológico básico */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Consideraciones de Manejo Prehospitalario</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <MdCheckCircle className="w-5 h-5 mr-2 text-green-600"/>
                            Intervenciones Esenciales:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span><strong>Control de glucosa:</strong> Descartar hipoglucemia en todo paciente con alteración neurológica</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span><strong>Oxigenoterapia:</strong> Mantener SpO₂ &gt; 94%, evitar hiperoxia</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span><strong>Posicionamiento:</strong> Cabecera 30° si no hay contraindicación</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span><strong>Control TA:</strong> Evitar hipotensión, hipertensión extrema</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span><strong>Tiempo:</strong> Documentar hora exacta de inicio síntomas</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                            <MdWarning className="w-5 h-5 mr-2 text-red-600"/>
                            Errores a Evitar:
                        </h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Administrar glucosa sin confirmar hipoglucemia</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Hiperventilación agresiva en TCE</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Retrasar traslado por estabilización</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Asumir intoxicación sin evaluar</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Olvidar protección cervical en trauma</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}