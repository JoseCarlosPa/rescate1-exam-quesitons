import {FaFirstAid, FaLungsVirus} from "react-icons/fa";
import {FiCheckCircle, FiX} from "react-icons/fi";
import {MdWarning} from "react-icons/md";

export default function Treatment(){
    return(
        <div className="space-y-8">
            {/* Preparación para parto */}
            <div
                className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaFirstAid className="w-8 h-8 text-green-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-green-700">Preparación para Parto de
                        Emergencia</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-green-700">Kit Obstétrico
                            Esencial</h3>
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Sábanas/toallas estériles</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span
                                    className="text-sm">Guantes estériles (varios pares)</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Clamps para cordón umbilical</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Tijeras estériles</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Jeringa de perilla (succión)</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Mantas/toallas secas</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Bolsa para placenta</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span className="text-sm">Equipo de reanimación neonatal</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-blue-700">Preparación del
                            Ambiente</h3>
                        <div className="space-y-2">
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Área privada y cálida</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Buena iluminación</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Superficie firme y limpia</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Acceso para personal médico</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Oxígeno y equipo IV disponible</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Comunicación con hospital</span>
                            </div>
                            <div className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span className="text-sm">Apoyo emocional para la madre</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Procedimiento de parto paso a paso */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Procedimiento
                    de Parto Normal - Paso a Paso</h2>
                <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-bold text-xl mb-3 text-blue-700 flex items-center">
                                                    <span
                                                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                            Preparación Inicial
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-blue-600 mb-2">Evaluación
                                    rápida:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Confirmar inminencia del parto</li>
                                    <li>• Verificar signos vitales maternos</li>
                                    <li>• Evaluar historia obstétrica</li>
                                    <li>• Solicitar apoyo médico adicional</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-600 mb-2">Preparación:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Lavado de manos y EPP</li>
                                    <li>• Preparar kit obstétrico</li>
                                    <li>• Posicionar a la paciente</li>
                                    <li>• Establecer acceso IV</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-bold text-xl mb-3 text-green-700 flex items-center">
                                                    <span
                                                        className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                            Nacimiento de la Cabeza
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-green-600 mb-2">Técnica:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>NO tirar</strong> nunca de la cabeza</li>
                                    <li>• Apoyar suavemente mientras emerge</li>
                                    <li>• Permitir restitución natural</li>
                                    <li>• Controlar velocidad de salida</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-green-600 mb-2">Verificar:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Cordón alrededor del cuello</li>
                                    <li>• Si hay cordón: pasar sobre cabeza</li>
                                    <li>• Si no se puede: clampear y cortar</li>
                                    <li>• Succionar boca, luego nariz</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-white rounded border border-green-200">
                            <p className="text-sm text-green-800">
                                <strong>Recuerda:</strong> La cabeza rotará naturalmente
                                (restitución). No fuerces este movimiento.
                            </p>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                        <h3 className="font-bold text-xl mb-3 text-orange-700 flex items-center">
                                                    <span
                                                        className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                            Nacimiento del Cuerpo
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-orange-600 mb-2">Hombros:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Sostener cabeza y cuello firmemente</li>
                                    <li>• Presión suave hacia abajo (hombro anterior)</li>
                                    <li>• Presión suave hacia arriba (hombro posterior)</li>
                                    <li>• No aplicar fuerza excesiva</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium text-orange-600 mb-2">Cuerpo:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• El resto del cuerpo saldrá rápidamente</li>
                                    <li>• <strong>¡El bebé estará resbaloso!</strong></li>
                                    <li>• Sostener firmemente pero gentil</li>
                                    <li>• Mantener al nivel de la vagina</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-4 p-3 bg-white rounded border border-orange-200">
                            <p className="text-sm text-orange-800">
                                <strong>Importante:</strong> Una vez que salen los hombros, el
                                bebé puede salir rápidamente. ¡Estate preparado!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cuidados inmediatos del recién nacido */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Cuidados
                    Inmediatos del Recién Nacido</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                        <h3 className="font-bold text-lg mb-3 text-yellow-700">Pasos Iniciales
                            (30 segundos)</h3>
                        <ol className="space-y-2 text-sm text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">1</span>
                                <span><strong>Secar vigorosamente:</strong> Usa toalla seca, frota espalda y extremidades</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">2</span>
                                <span><strong>Mantener caliente:</strong> Piel con piel, cubrir con manta seca</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">3</span>
                                <span><strong>Posicionar:</strong> Cabeza en posición neutral, cuello ligeramente extendido</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">4</span>
                                <span><strong>Succionar:</strong> Solo si hay secreciones visibles (boca primero, luego nariz)</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2 text-xs">5</span>
                                <span><strong>Estimular:</strong> Frotar plantas de los pies o espalda</span>
                            </li>
                        </ol>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                        <h3 className="font-bold text-lg mb-3 text-purple-700">Evaluación
                            APGAR</h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-purple-600 mb-1">Parámetros
                                    (0-1-2 puntos):</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>A</strong>pariencia: Azul/rosado
                                        extremidades/completamente rosado
                                    </li>
                                    <li>• <strong>P</strong>ulso: Ausente/&lt;100/&gt;100 lpm
                                    </li>
                                    <li>• <strong>G</strong>esticulación: Sin
                                        respuesta/mueca/llanto
                                    </li>
                                    <li>• <strong>A</strong>ctividad: Flácido/algo
                                        flexión/activo
                                    </li>
                                    <li>• <strong>R</strong>espiración: Ausente/irregular/llanto
                                        fuerte
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-purple-600 mb-1">Interpretación:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>7-10:</strong> Normal</li>
                                    <li>• <strong>4-6:</strong> Depresión moderada</li>
                                    <li>• <strong>0-3:</strong> Depresión severa</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Algoritmo de reanimación neonatal */}
            <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="font-bold text-xl mb-4 text-red-700 flex items-center">
                    <FaLungsVirus className="w-6 h-6 mr-2"/>
                    Algoritmo de Reanimación Neonatal
                </h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-medium text-red-600 mb-2">Evaluación inicial (30
                            segundos):</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="text-center">
                                <div className="bg-green-100 p-3 rounded mb-2">
                                    <FiCheckCircle className="w-6 h-6 text-green-600 mx-auto"/>
                                </div>
                                <p className="text-sm font-medium">Respiración presente</p>
                                <p className="text-sm">FC &gt; 100</p>
                                <p className="text-sm">Rosado</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-yellow-100 p-3 rounded mb-2">
                                    <MdWarning className="w-6 h-6 text-yellow-600 mx-auto"/>
                                </div>
                                <p className="text-sm font-medium">Respiración irregular</p>
                                <p className="text-sm">FC &lt; 100</p>
                                <p className="text-sm">Cianosis</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-red-100 p-3 rounded mb-2">
                                    <FiX className="w-6 h-6 text-red-600 mx-auto"/>
                                </div>
                                <p className="text-sm font-medium">Sin respiración</p>
                                <p className="text-sm">FC &lt; 60</p>
                                <p className="text-sm">Azul/pálido</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-medium text-red-600 mb-2">Acciones por
                            condición:</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-green-50 p-3 rounded">
                                <h5 className="font-medium text-green-700 mb-1">Bebé
                                    Normal:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Mantener caliente</li>
                                    <li>• Piel con piel</li>
                                    <li>• Observar respiración</li>
                                    <li>• Clampear cordón</li>
                                </ul>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded">
                                <h5 className="font-medium text-yellow-700 mb-1">Depresión
                                    Moderada:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Estimular más</li>
                                    <li>• Succionar si necesario</li>
                                    <li>• Oxígeno libre</li>
                                    <li>• Reevaluar en 30 seg</li>
                                </ul>
                            </div>
                            <div className="bg-red-50 p-3 rounded">
                                <h5 className="font-medium text-red-700 mb-1">Depresión
                                    Severa:</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• VPP inmediata</li>
                                    <li>• 40-60 ventilaciones/min</li>
                                    <li>• Si FC &lt; 60: RCP</li>
                                    <li>• Ratio 3:1</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manejo del cordón y placenta */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Manejo del Cordón
                        Umbilical</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded">
                            <h4 className="font-medium text-gray-700 mb-1">Timing:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Esperar 1-3 minutos si bebé está bien</li>
                                <li>• Clampear inmediatamente si depresión severa</li>
                                <li>• Permitir transfusión placentaria</li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 rounded">
                            <h4 className="font-medium text-gray-700 mb-1">Técnica:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Primer clamp a 15 cm del bebé</li>
                                <li>• Segundo clamp a 5 cm del primero</li>
                                <li>• Cortar entre los dos clamps</li>
                                <li>• Verificar hemostasia</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Alumbramiento</h3>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded">
                            <h4 className="font-medium text-gray-700 mb-1">Signos de
                                separación:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Sangrado vaginal</li>
                                <li>• Alargamiento del cordón</li>
                                <li>• Útero se eleva y globuliza</li>
                                <li>• Contracciones uterinas</li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 rounded">
                            <h4 className="font-medium text-gray-700 mb-1">Manejo:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• <strong>NO</strong> tirar del cordón</li>
                                <li>• Masaje uterino suave</li>
                                <li>• Guardar placenta completa</li>
                                <li>• Evaluar sangrado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Complicaciones del parto */}
            <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                <h3 className="font-bold text-xl mb-4 text-orange-700">🚨 Complicaciones Durante
                    el Parto</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-600 mb-2">Presentación
                            pélvica:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• NO tirar del bebé</li>
                            <li>• Permitir nacimiento espontáneo</li>
                            <li>• Apoyar cuerpo conforme emerge</li>
                            <li>• Cuidado con la cabeza (última)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-600 mb-2">Hemorragia
                            postparto:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Masaje uterino bimanual</li>
                            <li>• Compresas en periné</li>
                            <li>• IV de gran calibre</li>
                            <li>• Transporte inmediato</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-600 mb-2">Prolapso de
                            cordón:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Posición genupectoral</li>
                            <li>• Elevar presentación fetal</li>
                            <li>• Oxígeno materno alto flujo</li>
                            <li>• Transporte emergente</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-medium text-orange-600 mb-2">Bebé sin
                            respiración:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Secar y estimular vigorosamente</li>
                            <li>• Posicionar vía aérea</li>
                            <li>• VPP si no mejora</li>
                            <li>• RCP si FC &lt; 60</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}