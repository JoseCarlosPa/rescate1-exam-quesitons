import {TbMedicalCross, TbScale, TbStethoscope} from "react-icons/tb";
import {FiUsers} from "react-icons/fi";
import {RiHeartPulseLine, RiLungsLine, RiMentalHealthLine, RiThermometerLine} from "react-icons/ri";
import {MdHealthAndSafety} from "react-icons/md";
import {FaExclamationTriangle, FaLungsVirus} from "react-icons/fa";
import {BsLightbulb} from "react-icons/bs";

export default function Treatment(){
    return(
        <div className="space-y-8">
            {/* Principios generales */}
            <div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <TbMedicalCross className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Principios del Manejo
                        Pediátrico</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                        <FiUsers className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold text-blue-600">Familia</p>
                        <p className="text-sm">Incluir a los padres siempre que sea posible</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                        <RiThermometerLine className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">Hipotermia</p>
                        <p className="text-sm">Prevenir pérdida de calor corporal</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                        <TbScale className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                        <p className="font-bold text-purple-600">Peso</p>
                        <p className="text-sm">Base para cálculos de dosis</p>
                    </div>
                </div>
            </div>

            {/* Manejo de vía aérea pediátrica */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <RiLungsLine className="w-6 h-6 mr-2 text-blue-500"/>
                    Manejo de Vía Aérea Pediátrica
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-700 mb-4 flex items-center">
                            <MdHealthAndSafety className="w-5 h-5 mr-2"/>
                            Posicionamiento según Edad
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-blue-600">Lactantes (0-12
                                    meses)</h4>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Posición neutra (sin almohada)</li>
                                    <li>• Occipucio prominente compensa</li>
                                    <li>• Evitar flexión/extensión excesiva</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-blue-600">Niños (1+ años)</h4>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Ligera extensión del cuello</li>
                                    <li>• Almohada pequeña bajo cabeza</li>
                                    <li>• Posición de "olfateo"</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-blue-600">Con sospecha de
                                    trauma</h4>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Inmovilización cervical</li>
                                    <li>• Elevación mandibular</li>
                                    <li>• Evitar movimientos del cuello</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                            <FaLungsVirus className="w-5 h-5 mr-2"/>
                            Dispositivos de Vía Aérea
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-green-600">Cánulas
                                    Orofaríngeas</h4>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Solo en pacientes inconscientes</li>
                                    <li>• Tamaño: esquina boca a ángulo mandíbula</li>
                                    <li>• Inserción directa (NO rotar)</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-green-600">Cánulas
                                    Nasofaríngeas</h4>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Semiconscientes o conscientes</li>
                                    <li>• Contraindicadas en trauma facial</li>
                                    <li>• Lubricar bien antes de insertar</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-green-600">BVM Pediátrico</h4>
                                <ul className="text-sm text-gray-700 mt-1">
                                    <li>• Volumen: 450-500 ml</li>
                                    <li>• Sellado: puente nasal a mentón</li>
                                    <li>• Ventilaciones suaves y lentas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Oxigenoterapia pediátrica */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaLungsVirus className="w-6 h-6 mr-2 text-green-500"/>
                    Oxigenoterapia Pediátrica
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead className="bg-green-100">
                        <tr>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">Dispositivo</th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">Concentración
                                O₂
                            </th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">Flujo</th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">Indicaciones
                                Pediátricas
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium">Cánula nasal</td>
                            <td className="py-3 px-4 border-b text-center">24-40%</td>
                            <td className="py-3 px-4 border-b text-center">0.25-4 L/min</td>
                            <td className="py-3 px-4 border-b">Niños cooperativos, hipoxia
                                leve
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium">Mascarilla simple
                            </td>
                            <td className="py-3 px-4 border-b text-center">35-60%</td>
                            <td className="py-3 px-4 border-b text-center">6-10 L/min</td>
                            <td className="py-3 px-4 border-b">Hipoxia moderada, niños
                                cooperativos
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium">Mascarilla con
                                reservorio
                            </td>
                            <td className="py-3 px-4 border-b text-center">85-95%</td>
                            <td className="py-3 px-4 border-b text-center">10-15 L/min</td>
                            <td className="py-3 px-4 border-b">Emergencias respiratorias
                                graves
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium">Oxígeno por soplado
                            </td>
                            <td className="py-3 px-4 border-b text-center">Variable</td>
                            <td className="py-3 px-4 border-b text-center">10-15 L/min</td>
                            <td className="py-3 px-4 border-b">Niños no cooperativos,
                                epiglotitis
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Protocolos específicos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2 text-yellow-500"/>
                    Protocolos de Manejo Específico
                </h2>
                <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                        <h3 className="text-xl font-semibold text-red-700 mb-4 flex items-center">
                            <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                            Epiglotitis - Protocolo Crítico
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-red-600 mb-2">QUÉ HACER:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Mantener al niño calmado</li>
                                    <li>Posición cómoda (brazos del padre)</li>
                                    <li>Oxígeno por soplado (no invasivo)</li>
                                    <li>Preparar equipo de vía aérea</li>
                                    <li>Traslado inmediato CODE 3</li>
                                    <li>Notificar hospital receptor</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-medium text-red-600 mb-2">QUÉ NO HACER:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>NO examinar garganta</li>
                                    <li>NO acostar al niño</li>
                                    <li>NO separar de padres</li>
                                    <li>NO procedimientos invasivos</li>
                                    <li>NO agitarlos o estresarlos</li>
                                    <li>NO forzar oxígeno con mascarilla</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4 flex items-center">
                            <RiMentalHealthLine className="w-6 h-6 mr-2"/>
                            Manejo de Convulsiones
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-blue-600 mb-2">Convulsiones
                                    Febriles:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Proteger vía aérea</li>
                                    <li>Posición de recuperación</li>
                                    <li>NO introducir objetos en boca</li>
                                    <li>Medidas de enfriamiento gradual</li>
                                    <li>Oxígeno si SpO₂ &lt;94%</li>
                                    <li>Monitorizar para nuevas convulsiones</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-medium text-blue-600 mb-2">Status
                                    Epiléptico:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Asegurar vía aérea</li>
                                    <li>Oxígeno alto flujo</li>
                                    <li>Acceso vascular (IV/IO)</li>
                                    <li>Considerar midazolam</li>
                                    <li>Monitorización continua</li>
                                    <li>Traslado urgente</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                        <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center">
                            <RiHeartPulseLine className="w-6 h-6 mr-2"/>
                            Manejo de Shock Pediátrico
                        </h3>
                        <div className="space-y-4">
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-medium text-green-600 mb-2">Protocolo de
                                    Reanimación:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Acceso vascular temprano (IV/IO)</li>
                                    <li>Bolo inicial: 20 ml/kg de solución salina</li>
                                    <li>Reevaluar después de cada bolo</li>
                                    <li>Repetir bolos según respuesta</li>
                                    <li>Oxígeno de alto flujo</li>
                                    <li>Control de temperatura</li>
                                    <li>Traslado a centro pediátrico</li>
                                </ol>
                            </div>
                            <div className="bg-yellow-100 p-4 rounded">
                                <h4 className="font-medium text-yellow-700 mb-2">⚠️ Puntos
                                    Críticos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-yellow-700">
                                    <li>Máximo 60 ml/kg total de cristaloides</li>
                                    <li>Reevaluar después de cada bolo</li>
                                    <li>Si no mejora: considerar otras causas</li>
                                    <li>Hipotensión = descompensación tardía</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                        <h3 className="text-xl font-semibold text-purple-700 mb-4 flex items-center">
                            <FaLungsVirus className="w-6 h-6 mr-2"/>
                            Obstrucción de Vía Aérea por Cuerpo Extraño
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium text-purple-600 mb-2">Lactantes
                                    (&lt;1 año):</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Posición prona sobre antebrazo</li>
                                    <li>5 golpes en espalda (entre omóplatos)</li>
                                    <li>Voltear: 5 compresiones torácicas</li>
                                    <li>Repetir secuencia hasta desobstrucción</li>
                                    <li>Si inconsciente: iniciar RCP</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-medium text-purple-600 mb-2">Niños (&gt;1
                                    año):</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Maniobra de Heimlich (compresiones abdominales)</li>
                                    <li>Posición: detrás del niño</li>
                                    <li>Compresiones hacia arriba y adentro</li>
                                    <li>Repetir hasta desobstrucción</li>
                                    <li>Si inconsciente: RCP + revisar boca</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consideraciones especiales */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdHealthAndSafety className="w-6 h-6 mr-2 text-orange-500"/>
                    Consideraciones Especiales en Manejo Pediátrico
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-medium text-yellow-700 mb-2 flex items-center">
                                <RiThermometerLine className="w-5 h-5 mr-2"/>
                                Control de Temperatura
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Los niños pierden calor rápidamente</li>
                                <li>Mantener ambiente cálido</li>
                                <li>Cubrir cabeza y extremidades</li>
                                <li>Limitar exposición durante examen</li>
                                <li>Usar mantas térmicas cuando sea necesario</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-medium text-pink-700 mb-2 flex items-center">
                                <FiUsers className="w-5 h-5 mr-2"/>
                                Apoyo Psicológico
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Permitir presencia de padres</li>
                                <li>Explicar procedimientos apropiados para edad</li>
                                <li>Mantener calma y paciencia</li>
                                <li>Usar técnicas de distracción</li>
                                <li>Considerar desarrollo cognitivo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-medium text-indigo-700 mb-2 flex items-center">
                                <TbScale className="w-5 h-5 mr-2"/>
                                Dosificación de Medicamentos
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Calcular basándose en peso corporal</li>
                                <li>Usar cintas de medición pediátricas</li>
                                <li>Verificar dosis con protocolos</li>
                                <li>Documentar peso estimado</li>
                                <li>Considerar vías alternativas</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-medium text-gray-700 mb-2 flex items-center">
                                <TbStethoscope className="w-5 h-5 mr-2"/>
                                Comunicación Efectiva
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Hablar directamente al niño si es apropiado</li>
                                <li>Usar lenguaje simple y claro</li>
                                <li>Obtener historia de los padres</li>
                                <li>Observar interacciones familiares</li>
                                <li>Respetar vínculos afectivos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}