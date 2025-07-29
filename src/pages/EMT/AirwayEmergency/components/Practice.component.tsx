import {BsLightbulb} from "react-icons/bs";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {FaExclamationTriangle, FaFirstAid, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";

export default function Practice() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Casos Clínicos Interactivos
                </h2>
                <p className="text-blue-700 mb-4">
                    Analiza cada caso siguiendo el protocolo ABCDE. Piensa en cada paso antes de ver la solución.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                        <FiEye className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <h4 className="font-semibold">Observa</h4>
                        <p className="text-sm text-gray-600">Signos y síntomas del paciente</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                        <FiActivity className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <h4 className="font-semibold">Evalúa</h4>
                        <p className="text-sm text-gray-600">Aplica protocolo ABCDE</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                        <FaFirstAid className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <h4 className="font-semibold">Actúa</h4>
                        <p className="text-sm text-gray-600">Implementa el tratamiento</p>
                    </div>
                </div>
            </div>

            {/* Caso 1: Crisis asmática severa */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">1
                    </div>
                    <h3 className="text-xl font-semibold text-orange-700">Crisis Asmática Severa</h3>
                </div>

                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FiUser className="w-4 h-4 mr-2"/>
                        Escenario Clínico:
                    </h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Mujer de 28 años con antecedente de asma bronquial.<br/>
                        <strong>Motivo de consulta:</strong> Dificultad respiratoria severa tras exposición a gato.<br/>
                        <strong>Tiempo de evolución:</strong> 2 horas, empeoramiento progresivo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-600 mb-2">Evaluación ABCDE:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><strong>A:</strong> Vía aérea permeable, sibilancias audibles</li>
                            <li><strong>B:</strong> FR 32/min, SpO₂ 88%, uso músculos accesorios</li>
                            <li><strong>C:</strong> FC 125/min, TA 145/90 mmHg, piel sudorosa</li>
                            <li><strong>D:</strong> Consciente, ansiosa, habla palabras sueltas</li>
                            <li><strong>E:</strong> Temp 36.8°C, posición de trípode</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-600 mb-2">Hallazgos Adicionales:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Sibilancias espiratorias difusas</li>
                            <li>• Retracciones intercostales marcadas</li>
                            <li>• Pulso paradójico presente</li>
                            <li>• No puede completar frases</li>
                            <li>• Sensación de "ahogo"</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                        <MdCheckCircle className="w-5 h-5 mr-2"/>
                        Manejo Correcto (Crisis Severa):
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ol className="list-decimal list-inside space-y-2 text-sm text-green-800">
                            <li><strong>Posición sentada</strong> (no forzar decúbito)</li>
                            <li><strong>Oxígeno 15 L/min</strong> con mascarilla reservorio</li>
                            <li><strong>Salbutamol nebulizado</strong> 5mg + ipratropio 500mcg</li>
                            <li><strong>Monitoreo continuo</strong> SpO₂, FC, FR</li>
                        </ol>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-green-800" start={5}>
                            <li><strong>Reevaluación a los 15 min</strong></li>
                            <li><strong>Si no mejora:</strong> repetir broncodilatador</li>
                            <li><strong>Considerar esteroides</strong> (hidrocortisona IV)</li>
                            <li><strong>Traslado inmediato</strong> a centro hospitalario</li>
                        </ol>
                    </div>
                    <div className="mt-3 p-2 bg-yellow-100 rounded">
                        <p className="text-xs text-yellow-800"><strong>Nota educativa:</strong> En crisis severa, el
                            objetivo es estabilizar rápidamente. La falta de sibilancias puede indicar obstrucción
                            completa (más grave).</p>
                    </div>
                </div>
            </div>

            {/* Caso 2: Obstrucción completa */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">2
                    </div>
                    <h3 className="text-xl font-semibold text-red-700">Obstrucción Completa de Vía Aérea</h3>
                </div>

                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FiAlertTriangle className="w-4 h-4 mr-2"/>
                        Escenario de Emergencia:
                    </h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Hombre de 68 años cenando en restaurante.<br/>
                        <strong>Situación:</strong> Súbitamente se levanta, lleva las manos al cuello, no puede hablar
                        ni toser.<br/>
                        <strong>Estado:</strong> Cianosis perioral progresiva, pánico evidente.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-600 mb-2">Reconocimiento:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Signo universal de asfixia</li>
                            <li>• No puede hablar ni toser</li>
                            <li>• Cianosis progresiva</li>
                            <li>• Agitación extrema</li>
                            <li>• Silencio respiratorio</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-600 mb-2">Acción Inmediata:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                            <li>Confirmar obstrucción</li>
                            <li>Posicionarse detrás</li>
                            <li>Maniobra de Heimlich</li>
                            <li>Compresiones vigorosas</li>
                            <li>Hasta desobstrucción</li>
                        </ol>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-600 mb-2">Si pierde conciencia:</h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                            <li>Colocar en suelo</li>
                            <li>Iniciar RCP inmediato</li>
                            <li>Revisar boca antes ventilar</li>
                            <li>30 compresiones : 2 ventilaciones</li>
                            <li>Continuar hasta desobstrucción</li>
                        </ol>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <BsLightbulb className="w-5 h-5 mr-2"/>
                        Puntos de Aprendizaje:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                        <div>
                            <p><strong>Técnica Heimlich:</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Puño en epigastrio</li>
                                <li>Compresiones hacia arriba</li>
                                <li>Movimientos separados y distintos</li>
                            </ul>
                        </div>
                        <div>
                            <p><strong>Lactantes (&lt;1 año):</strong></p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>5 golpes en espalda</li>
                                <li>5 compresiones torácicas</li>
                                <li>NO maniobra de Heimlich</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 3: EPOC exacerbado */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">3
                    </div>
                    <h3 className="text-xl font-semibold text-green-700">EPOC Exacerbado</h3>
                </div>

                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FaLungsVirus className="w-4 h-4 mr-2"/>
                        Historia Clínica:
                    </h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Varón de 74 años, fumador de 40 años (2 paquetes/día).<br/>
                        <strong>Antecedentes:</strong> EPOC diagnosticado, oxígeno domiciliario 2L/min nocturno.<br/>
                        <strong>Cuadro actual:</strong> 4 días de empeoramiento, esputo amarillo-verdoso abundante.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600 mb-2">Presentación Clínica:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><strong>A:</strong> Vía aérea permeable</li>
                            <li><strong>B:</strong> FR 26/min, SpO₂ 84% aire ambiente</li>
                            <li><strong>C:</strong> FC 108/min, TA 150/85 mmHg</li>
                            <li><strong>D:</strong> Alerta, orientado, preocupado</li>
                            <li><strong>E:</strong> Temp 38.1°C, esputo purulento</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600 mb-2">Hallazgos Respiratorios:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Tórax en barril (enfisematoso)</li>
                            <li>• Respiración con labios fruncidos</li>
                            <li>• Sibilancias y roncos difusos</li>
                            <li>• Uso moderado músculos accesorios</li>
                            <li>• Habla en frases cortas</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-orange-800 mb-3 flex items-center">
                        <MdWarning className="w-5 h-5 mr-2"/>
                        Manejo Específico EPOC:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Oxigenoterapia Controlada:</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-orange-800">
                                <li>Iniciar con 2 L/min cánula nasal</li>
                                <li>Objetivo SpO₂: 88-92% (¡NO 95%!)</li>
                                <li>Incrementar gradualmente si necesario</li>
                                <li>Monitorear nivel de conciencia</li>
                            </ol>
                        </div>
                        <div>
                            <h5 className="font-semibold text-orange-700 mb-2">Tratamiento Adicional:</h5>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-orange-800">
                                <li>Salbutamol + ipratropio nebulizado</li>
                                <li>Posición semisentada</li>
                                <li>Considerar esteroides</li>
                                <li>Traslado para antibióticos IV</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="bg-red-100 border border-red-300 p-3 rounded">
                    <p className="text-sm text-red-800 flex items-start">
                        <FaExclamationTriangle className="w-4 h-4 mr-2 mt-0.5"/>
                        <span><strong>¡Cuidado!</strong> En pacientes EPOC, el O₂ a alto flujo puede suprimir el estímulo respiratorio (drive hipóxico). Siempre mantener SpO₂ entre 88-92% y monitorear estado neurológico.</span>
                    </p>
                </div>
            </div>

            {/* Caso 4: Edema pulmonar */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <div
                        className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">4
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700">Edema Pulmonar Agudo</h3>
                </div>

                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <FaHeartbeat className="w-4 h-4 mr-2"/>
                        Presentación Dramática:
                    </h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Mujer de 65 años con antecedente de insuficiencia cardíaca.<br/>
                        <strong>Inicio:</strong> Disnea súbita e intensa que despertó del sueño (disnea paroxística
                        nocturna).<br/>
                        <strong>Estado:</strong> Extremadamente angustiada, "sensación de ahogamiento".
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600 mb-2">Evaluación Crítica:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><strong>A:</strong> Vía aérea permeable</li>
                            <li><strong>B:</strong> FR 35/min, SpO₂ 78%, ortopnea severa</li>
                            <li><strong>C:</strong> FC 140/min, TA 180/110 mmHg</li>
                            <li><strong>D:</strong> Ansiosa, inquieta, diaforética</li>
                            <li><strong>E:</strong> Edema en MMII, ingurgitación yugular</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600 mb-2">Signos Característicos:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Esputo rosado espumoso</li>
                            <li>• Crepitantes pulmonares bilaterales</li>
                            <li>• Imposibilidad de estar acostada</li>
                            <li>• Palidez y sudoración profusa</li>
                            <li>• Ansiedad extrema</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                        <MdOutlineTimer className="w-5 h-5 mr-2"/>
                        Manejo de Emergencia (¡Tiempo crítico!):
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ol className="list-decimal list-inside space-y-2 text-sm text-red-800">
                            <li><strong>Posición sentada</strong> con piernas colgando</li>
                            <li><strong>Oxígeno 15 L/min</strong> mascarilla reservorio</li>
                            <li><strong>CPAP</strong> si disponible (5-10 cmH₂O)</li>
                            <li><strong>Nitroglicerina SL</strong> si PAS &gt; 100 mmHg</li>
                        </ol>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-red-800" start={5}>
                            <li><strong>Furosemida IV</strong> si protocolos lo permiten</li>
                            <li><strong>Monitoreo continuo</strong> ECG y SpO₂</li>
                            <li><strong>Acceso venoso</strong> calibre grueso</li>
                            <li><strong>Traslado inmediato</strong> UCI cardiológica</li>
                        </ol>
                    </div>
                    <div className="mt-3 p-2 bg-blue-100 rounded">
                        <p className="text-xs text-blue-800"><strong>Nota:</strong> El CPAP puede ser salvavidas en
                            edema pulmonar. Mejora la oxigenación y reduce el trabajo respiratorio mientras llega el
                            tratamiento definitivo.</p>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <MdCheckCircle className="w-6 h-6 mr-2 text-green-500"/>
                    Puntos Clave para Recordar en Casos Reales
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Principios Universales:</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                            <li><strong>ABC primero:</strong> Siempre evalúa vía aérea, respiración, circulación</li>
                            <li><strong>Posición:</strong> Respeta la posición de comodidad del paciente</li>
                            <li><strong>Oxígeno:</strong> Administra si SpO₂ &lt; 94% (excepto EPOC: 88-92%)</li>
                            <li><strong>Monitoreo:</strong> Vigilancia continua de signos vitales</li>
                            <li><strong>Reevaluación:</strong> Cada 5-15 minutos según gravedad</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-3">Errores Comunes a Evitar:</h4>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                            <li><strong>No subestimar:</strong> Las emergencias respiratorias pueden deteriorarse
                                rápidamente
                            </li>
                            <li><strong>EPOC:</strong> No dar O₂ alto flujo sin monitoreo neurológico</li>
                            <li><strong>Posición:</strong> No forzar decúbito en pacientes con disnea</li>
                            <li><strong>Medicación:</strong> No retrasar broncodilatadores en broncoespasmo</li>
                            <li><strong>Traslado:</strong> No demorar en casos críticos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}