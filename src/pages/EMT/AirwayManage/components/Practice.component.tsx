import {FaExclamationTriangle, FaFirstAid, FaLungsVirus} from "react-icons/fa";
import {FiAlertTriangle, FiUser} from "react-icons/fi";
import {BsLightbulb} from "react-icons/bs";
import {MdCheckCircle} from "react-icons/md";

export default function Practice() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                Casos Clínicos - Simulación de Escenarios Reales
            </h2>

            {/* Caso 1: Obstrucción por cuerpo extraño */}
            <div
                className="bg-gradient-to-r from-red-50 to-red-100 border-l-4 border-red-500 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-600 mr-3"/>
                    <h3 className="text-2xl font-bold text-red-700">Caso 1: Obstrucción por
                        Cuerpo Extraño</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">🚨 Escenario:</h4>
                    <p className="text-gray-700 mb-4">
                        Hombre de 65 años cenando en restaurante. Súbitamente se lleva las manos
                        al cuello,
                        no puede hablar, toser, ni respirar. Está cianótico y angustiado.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Signos
                                presentes:</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>✗ No puede hablar</li>
                                <li>✗ No puede toser</li>
                                <li>✗ Signo universal de asfixia (manos al cuello)</li>
                                <li>✗ Cianosis progresiva</li>
                                <li>✗ Sin entrada de aire audible</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Signos
                                vitales:</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Consciente, angustiado</li>
                                <li>• FC: 120 lpm</li>
                                <li>• SpO₂: No se obtiene lectura</li>
                                <li>• Movimientos respiratorios sin entrada de aire</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-3">💡 Manejo Correcto
                        (Secuencial):</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-semibold mb-2">Paciente CONSCIENTE:</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Preguntar "¿Se está ahogando?"</li>
                                <li>Posicionarse detrás del paciente</li>
                                <li>5 compresiones abdominales (Heimlich)</li>
                                <li>Verificar si expulsa el objeto</li>
                                <li>Repetir hasta expulsión o pérdida de conciencia</li>
                            </ol>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-2">Si pierde CONCIENCIA:</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Activar SME inmediatamente</li>
                                <li>Posicionar en superficie dura</li>
                                <li>30 compresiones torácicas (RCP)</li>
                                <li>Abrir vía aérea y verificar objeto visible</li>
                                <li>Si visible: remover con pinza McGill</li>
                                <li>2 ventilaciones de rescate</li>
                                <li>Continuar RCP hasta que llegue ayuda</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 2: Paciente inconsciente con secreciones */}
            <div
                className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                    <FaLungsVirus className="w-8 h-8 text-blue-600 mr-3"/>
                    <h3 className="text-2xl font-bold text-blue-700">Caso 2: Paciente
                        Inconsciente con Secreciones</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">🚨 Escenario:</h4>
                    <p className="text-gray-700 mb-4">
                        Mujer de 52 años encontrada inconsciente en casa por familiar. Presenta
                        respiración
                        ruidosa con gorgoteo, secreciones visibles en boca, y nivel de
                        conciencia disminuido.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Evaluación
                                inicial:</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• GCS: 6 (O2V1M3)</li>
                                <li>• Ruidos respiratorios: gorgoteo</li>
                                <li>• Secreciones y saliva en boca</li>
                                <li>• Respiración irregular</li>
                                <li>• No responde a estímulos verbales</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Signos
                                vitales:</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• FC: 95 lpm</li>
                                <li>• FR: 8/min irregular</li>
                                <li>• SpO₂: 85% aire ambiente</li>
                                <li>• TA: 160/90 mmHg</li>
                                <li>• Piel pálida y húmeda</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-3">💡 Manejo Correcto (Prioridades
                        ABC):</h4>
                    <div className="space-y-4">
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h5 className="font-semibold text-red-600 mb-2">A - AIRWAY
                                (Prioridad 1):</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Posición lateral de seguridad (si no hay trauma)</li>
                                <li>Aspiración de secreciones (máx 15 seg)</li>
                                <li>Maniobra frente-mentón</li>
                                <li>Colocar OPA (sin reflejo nauseoso)</li>
                            </ol>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h5 className="font-semibold text-blue-600 mb-2">B - BREATHING
                                (Prioridad 2):</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Ventilación asistida con BVM</li>
                                <li>O₂ alto flujo (15 L/min)</li>
                                <li>Frecuencia: 10-12/min</li>
                                <li>Monitoreo SpO₂ continuo</li>
                            </ol>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h5 className="font-semibold text-purple-600 mb-2">Monitoreo
                                continuo:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Reevaluar vía aérea constantemente</li>
                                <li>Aspirar PRN (según necesidad)</li>
                                <li>Preparar para intubación si es necesario</li>
                                <li>Traslado rápido con soporte avanzado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 3: Trauma facial con compromiso de vía aérea */}
            <div
                className="bg-gradient-to-r from-yellow-50 to-orange-100 border-l-4 border-yellow-500 rounded-lg p-6 shadow-md">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-8 h-8 text-yellow-600 mr-3"/>
                    <h3 className="text-2xl font-bold text-yellow-700">Caso 3: Trauma Facial con
                        Compromiso de Vía Aérea</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-bold text-gray-800 mb-2">🚨 Escenario:</h4>
                    <p className="text-gray-700 mb-4">
                        Joven de 22 años, accidente en motocicleta sin casco. Trauma facial
                        severo,
                        sangrado oral activo, dificultad respiratoria y nivel de conciencia
                        alterado.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-semibold text-blue-700 mb-2">Evaluación del
                                trauma:</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• Fractura maxilofacial evidente</li>
                                <li>• Sangrado oral activo</li>
                                <li>• Posible fractura mandibular</li>
                                <li>• Dientes rotos/ausentes</li>
                                <li>• Mecanismo de alta energía</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Signos
                                vitales:</h5>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li>• GCS: 12 (O3V3M6)</li>
                                <li>• FC: 110 lpm</li>
                                <li>• FR: 22/min laboriosa</li>
                                <li>• SpO₂: 90% aire ambiente</li>
                                <li>• Uso músculos accesorios</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold text-green-700 mb-3">💡 Manejo Especializado (Trauma
                        + Vía Aérea):</h4>
                    <div className="space-y-4">
                        <div className="bg-red-100 p-3 rounded border border-red-300">
                            <h5 className="font-semibold text-red-700 mb-2">⚠️ Prioridades
                                críticas:</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li><strong>Inmovilización cervical INMEDIATA</strong></li>
                                <li>Control de vía aérea con protección C-spine</li>
                                <li>Aspiración continua de sangre</li>
                                <li>Posición Trendelenburg si está indicado</li>
                            </ol>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h5 className="font-semibold text-blue-600 mb-2">Manejo vía
                                    aérea:</h5>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Tracción mandibular (NO frente-mentón)</li>
                                    <li>Aspiración selectiva con Yankauer</li>
                                    <li>NPA bilateral si es posible</li>
                                    <li>BVM con dos operadores</li>
                                    <li>Preparar para vía aérea quirúrgica</li>
                                </ol>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h5 className="font-semibold text-purple-600 mb-2">Consideraciones
                                    especiales:</h5>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Alto riesgo de obstrucción súbita</li>
                                    <li>Posible lesión asociada C-spine</li>
                                    <li>Monitoreo neurológico continuo</li>
                                    <li>Traslado CÓDIGO ROJO</li>
                                    <li>Notificar a centro de trauma</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Puntos de aprendizaje clave */}
            <div
                className="bg-gradient-to-r from-purple-50 to-indigo-100 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Puntos Clave de Aprendizaje
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Toma de decisiones
                            rápida:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                <span>Evalúa ABC en primeros 30 segundos</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                <span>Identifica amenaza inmediata a la vida</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                <span>Aplica algoritmo apropiado inmediatamente</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 mt-1 mr-2 text-green-500"/>
                                <span>Reevalúa frecuentemente</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Trabajo en
                            equipo:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                <span>Comunicación clara y directa</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                <span>Asignación específica de roles</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                <span>Pedido temprano de soporte avanzado</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-5 h-5 mt-1 mr-2 text-blue-500"/>
                                <span>Documentación precisa durante atención</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Simulador de decisiones */}
            <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-700 mb-4 text-center">
                    🎯 Ejercicio de Simulación Mental
                </h3>
                <p className="text-gray-600 text-center mb-4">
                    Antes del próximo caso real, repasa mentalmente estos escenarios.
                    ¿Qué harías en los primeros 60 segundos de cada caso?
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border text-center">
                        <h4 className="font-semibold text-blue-600 mb-2">Escenario A</h4>
                        <p className="text-sm text-gray-700">Niño de 3 años con objeto pequeño
                            en boca, tosiendo débilmente</p>
                    </div>
                    <div className="bg-white p-4 rounded border text-center">
                        <h4 className="font-semibold text-green-600 mb-2">Escenario B</h4>
                        <p className="text-sm text-gray-700">Adulto mayor inconsciente,
                            respiración agonal, vómito en boca</p>
                    </div>
                    <div className="bg-white p-4 rounded border text-center">
                        <h4 className="font-semibold text-orange-600 mb-2">Escenario C</h4>
                        <p className="text-sm text-gray-700">Paciente obeso, estridor
                            inspiratorio, sat 88%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}