import {RiFirstAidKitFill} from "react-icons/ri";
import {BsShield} from "react-icons/bs";
import {FaExclamationTriangle, FaHandsHelping} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";
import {FiAlertTriangle} from "react-icons/fi";
import {GiKidneys} from "react-icons/gi";
import {TbEmergencyBed} from "react-icons/tb";

export default function Treatment() {
    return (
        <div className="space-y-8">
            {/* Protocolo de manejo */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <RiFirstAidKitFill className="w-8 h-8 text-emerald-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-emerald-700">Protocolo de Manejo Prehospitalario</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El manejo debe seguir un enfoque <strong>sistemático</strong> y <strong>rápido</strong> para
                    estabilizar al paciente y prevenir complicaciones fatales.
                </p>
            </div>

            {/* ABCDE Protocol */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo ABCDE - Evaluación Sistemática
                </h2>
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border-l-4 border-red-500">
                        <h3 className="text-lg font-bold text-red-700 mb-2 flex items-center">
                            <span
                                className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">A</span>
                            AIRWAY (Vía Aérea)
                        </h3>
                        <ul className="text-gray-700 space-y-1 ml-11">
                            <li>• Verificar permeabilidad</li>
                            <li>• Proteger columna cervical si hay trauma</li>
                            <li>• Aspirar secreciones o sangre</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="text-lg font-bold text-blue-700 mb-2 flex items-center">
                            <span
                                className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">B</span>
                            BREATHING (Respiración)
                        </h3>
                        <ul className="text-gray-700 space-y-1 ml-11">
                            <li>• Evaluar frecuencia y calidad respiratoria</li>
                            <li>• Administrar oxígeno si hay hipoxia</li>
                            <li>• Buscar signos de compromiso respiratorio</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
                        <h3 className="text-lg font-bold text-green-700 mb-2 flex items-center">
                            <span
                                className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">C</span>
                            CIRCULATION (Circulación)
                        </h3>
                        <ul className="text-gray-700 space-y-1 ml-11">
                            <li>• Controlar hemorragias externas</li>
                            <li>• Evaluar pulso y presión arterial</li>
                            <li>• Buscar signos de shock</li>
                            <li>• Monitorizar signos vitales</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                        <h3 className="text-lg font-bold text-yellow-700 mb-2 flex items-center">
                            <span
                                className="bg-yellow-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">D</span>
                            DISABILITY (Discapacidad)
                        </h3>
                        <ul className="text-gray-700 space-y-1 ml-11">
                            <li>• Evaluar nivel de conciencia (AVPU)</li>
                            <li>• Verificar pupilas y respuesta neurológica</li>
                            <li>• Evaluar función motora</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
                        <h3 className="text-lg font-bold text-purple-700 mb-2 flex items-center">
                            <span
                                className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">E</span>
                            EXPOSURE (Exposición)
                        </h3>
                        <ul className="text-gray-700 space-y-1 ml-11">
                            <li>• Exponer completamente el abdomen</li>
                            <li>• Inspeccionar lesiones</li>
                            <li>• Prevenir hipotermia</li>
                            <li>• Examinar genitales si es relevante</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Manejo específico por tipo de lesión */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaHandsHelping className="w-6 h-6 mr-2 text-orange-500"/>
                    Manejo Específico por Tipo de Lesión
                </h2>
                <div className="space-y-6">
                    {/* Evisceración */}
                    <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg border-2 border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                            <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                            Evisceración Abdominal
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                    <MdCheckCircle className="w-4 h-4 mr-2 text-green-600"/>
                                    QUÉ HACER:
                                </h4>
                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                    <li>Cubrir vísceras con apósito estéril <strong>húmedo</strong></li>
                                    <li>Colocar apósito oclusivo encima</li>
                                    <li>Fijar sin presionar</li>
                                    <li>Posición supina con rodillas flexionadas</li>
                                    <li>Traslado inmediato</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                                    <FaExclamationTriangle className="w-4 h-4 mr-2 text-red-600"/>
                                    NUNCA HACER:
                                </h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Reintroducir órganos</li>
                                    <li>Lavar las vísceras</li>
                                    <li>Aplicar presión directa</li>
                                    <li>Usar apósitos secos</li>
                                    <li>Dar líquidos por boca</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Heridas penetrantes */}
                    <div
                        className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border-2 border-orange-200">
                        <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                            <FiAlertTriangle className="w-6 h-6 mr-2"/>
                            Heridas Penetrantes
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-orange-800 mb-2">Con Objeto Incrustado:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                    <li><strong>NO retirar</strong> el objeto</li>
                                    <li>Estabilizar con vendajes voluminosos</li>
                                    <li>Controlar hemorragia alrededor del objeto</li>
                                    <li>Monitorizar signos vitales</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold text-orange-800 mb-2">Sin Objeto Incrustado:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                    <li>Controlar hemorragia externa</li>
                                    <li>Cubrir herida con apósito estéril</li>
                                    <li>Evaluar posible evisceración</li>
                                    <li>Preparar para traslado urgente</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/* Lesiones genitourinarias */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-2 border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                            <GiKidneys className="w-6 h-6 mr-2"/>
                            Lesiones Genitourinarias
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-2">Lesión Renal:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Buscar hematuria</li>
                                    <li>Evaluar dolor en flancos</li>
                                    <li>Monitorizar signos vitales</li>
                                    <li>Posición de comodidad</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-2">Lesión Genital:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Controlar hemorragia con presión directa</li>
                                    <li>Cubrir con apósitos estériles</li>
                                    <li>Conservar partes amputadas en hielo</li>
                                    <li>Manejo del dolor</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Algoritmo de decisión */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <TbEmergencyBed className="w-6 h-6 mr-2 text-orange-500"/>
                    Algoritmo de Decisión de Transporte
                </h2>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border">
                    <div className="space-y-4">
                        <div className="bg-red-100 border-l-4 border-red-500 p-4 rounded">
                            <h3 className="font-bold text-red-700 mb-2">TRANSPORTE INMEDIATO (Código Rojo)</h3>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Evisceración</li>
                                <li>• Heridas penetrantes</li>
                                <li>• Signos de shock</li>
                                <li>• Hematuria con inestabilidad hemodinámica</li>
                                <li>• Distensión abdominal + inestabilidad</li>
                            </ul>
                        </div>
                        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded">
                            <h3 className="font-bold text-yellow-700 mb-2">TRANSPORTE URGENTE (Código Amarillo)</h3>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Dolor abdominal severo</li>
                                <li>• Hematuria sin inestabilidad</li>
                                <li>• Defensa abdominal</li>
                                <li>• Mecanismo de lesión de alto riesgo</li>
                            </ul>
                        </div>
                        <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded">
                            <h3 className="font-bold text-green-700 mb-2">TRANSPORTE RUTINARIO (Código Verde)</h3>
                            <ul className="text-gray-700 space-y-1">
                                <li>• Dolor abdominal leve</li>
                                <li>• Lesiones genitales menores</li>
                                <li>• Signos vitales estables</li>
                                <li>• Sin signos de compromiso</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medicamentos y consideraciones */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <RiFirstAidKitFill className="w-6 h-6 text-indigo-600 mr-2"/>
                    <h3 className="text-xl font-bold text-indigo-800">Consideraciones Especiales</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-indigo-800 mb-2">Manejo del Dolor:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Analgesia según protocolos</li>
                            <li>Evaluar contraindicaciones</li>
                            <li>Monitorizar efectos adversos</li>
                            <li>Documentar administración</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-indigo-800 mb-2">Prevención de Complicaciones:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evitar hipotermia</li>
                            <li>Mantener NPO (nada por boca)</li>
                            <li>Posición antishock si es necesario</li>
                            <li>Comunicación con hospital receptor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}