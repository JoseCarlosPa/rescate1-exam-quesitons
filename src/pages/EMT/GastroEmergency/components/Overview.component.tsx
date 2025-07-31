import {FaExclamationTriangle} from "react-icons/fa";
import {MdCheckCircle, MdLocalHospital, MdOutlineTimer, MdWarning} from "react-icons/md";
import {FaDroplet} from "react-icons/fa6";
import {BsHeartPulse, BsLightbulb, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye} from "react-icons/fi";
import {RiPulseLine} from "react-icons/ri";

export default function Overview() {
    return(<div className="space-y-8">
        {/* Importancia crítica */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                <h2 className="text-2xl font-bold text-red-700">¡Emergencias Abdominales Críticas!</h2>
            </div>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
                El dolor abdominal representa <strong>hasta el 10%</strong> de todas las llamadas de emergencia.
                Condiciones como apendicitis, hemorragia digestiva o torsión testicular pueden ser <span className="text-red-600 font-bold">potencialmente mortales</span> si no se tratan a tiempo.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow-sm text-center">
                    <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                    <p className="font-bold text-red-600">Apendicitis</p>
                    <p className="text-sm">12-24 hrs para perforación</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                    <FaDroplet className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                    <p className="font-bold text-orange-600">Hemorragia GI</p>
                    <p className="text-sm">Shock en minutos</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                    <MdWarning className="w-8 h-8 text-yellow-600 mx-auto mb-2"/>
                    <p className="font-bold text-yellow-600">Obstrucción</p>
                    <p className="text-sm">Necrosis intestinal</p>
                </div>
            </div>
        </div>

        {/* Enfoque OPQRST para dolor abdominal */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                Evaluación OPQRST - Clave en Dolor Abdominal
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-blue-700 mb-3">O-P-Q</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-blue-800">Onset (Inicio)</h4>
                            <p className="text-sm text-gray-600">• Súbito vs gradual<br/>• Qué estaba haciendo</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800">Provocación</h4>
                            <p className="text-sm text-gray-600">• Empeora con movimiento<br/>• Mejora con posición</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800">Calidad</h4>
                            <p className="text-sm text-gray-600">• Cólico, punzante, urente<br/>• Constante vs intermitente</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-green-700 mb-3">R-S</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-green-800">Región/Radiación</h4>
                            <p className="text-sm text-gray-600">• Localización exacta<br/>• ¿Se irradia? ¿Dónde?</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-800">Severidad</h4>
                            <p className="text-sm text-gray-600">• Escala 1-10<br/>• ¿Empeora progresivamente?</p>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-orange-700 mb-3">T</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-orange-800">Tiempo</h4>
                            <p className="text-sm text-gray-600">• ¿Cuándo comenzó?<br/>• ¿Ha tenido antes?<br/>• ¿Está empeorando?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Signos de alarma */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
                <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Traslado INMEDIATO</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                        <FiEye className="w-4 h-4 mr-2"/>
                        Signos Visuales:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Abdomen rígido o distendido</li>
                        <li>Signo de Cullen (periumbilical)</li>
                        <li>Signo de Grey-Turner (flancos)</li>
                        <li>Hematemesis o melena</li>
                        <li>Palidez marcada o diaforesis</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                        <RiPulseLine className="w-4 h-4 mr-2"/>
                        Signos Vitales:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Taquicardia (FC &gt; 100)</li>
                        <li>Hipotensión (TAS &lt; 90)</li>
                        <li>Fiebre alta (&gt; 38.5°C)</li>
                        <li>Taquipnea o bradipnea</li>
                        <li>Alteración del estado mental</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Clasificación del dolor */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos de Dolor Abdominal</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg border">
                    <h3 className="font-bold text-blue-700 mb-3 text-center">VISCERAL</h3>
                    <div className="space-y-2 text-sm">
                        <p><strong>Características:</strong> Difuso, sordo, mal localizado</p>
                        <p><strong>Causa:</strong> Distensión de órganos huecos</p>
                        <p><strong>Ejemplos:</strong> Cólico intestinal, cólico biliar</p>
                        <p><strong>Localización:</strong> Línea media</p>
                    </div>
                </div>
                <div className="bg-red-50 p-6 rounded-lg border">
                    <h3 className="font-bold text-red-700 mb-3 text-center">PARIETAL</h3>
                    <div className="space-y-2 text-sm">
                        <p><strong>Características:</strong> Agudo, punzante, bien localizado</p>
                        <p><strong>Causa:</strong> Irritación peritoneal</p>
                        <p><strong>Ejemplos:</strong> Apendicitis, perforación</p>
                        <p><strong>Localización:</strong> Punto específico</p>
                    </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border">
                    <h3 className="font-bold text-green-700 mb-3 text-center">REFERIDO</h3>
                    <div className="space-y-2 text-sm">
                        <p><strong>Características:</strong> Se siente lejos del órgano</p>
                        <p><strong>Causa:</strong> Inervación compartida</p>
                        <p><strong>Ejemplos:</strong> IAM → epigastrio</p>
                        <p><strong>Localización:</strong> Dermatomas específicos</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Enfermedades abdominales comunes */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Emergencias Abdominales Comunes</h2>
            <div className="grid lg:grid-cols-2 gap-6 mb-6">
                {/* Peritonitis */}
                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-300">
                    <div className="flex items-center mb-3">
                        <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                        <h3 className="font-bold text-red-700 text-lg">PERITONITIS</h3>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-red-800 mb-1">Definición:</h4>
                            <p className="text-sm text-gray-700">Inflamación del peritoneo por infección bacteriana o irritación química</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-1">Causas principales:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Perforación apendicular</li>
                                <li>• Úlcera perforada</li>
                                <li>• Diverticulitis perforada</li>
                                <li>• Trauma abdominal penetrante</li>
                                <li>• Cirugía abdominal (complicación)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-1">Signos clínicos:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Abdomen rígido "en tabla"</li>
                                <li>• Rebote positivo generalizado</li>
                                <li>• Fiebre alta, escalofríos</li>
                                <li>• Taquicardia, hipotensión</li>
                                <li>• Náuseas, vómitos</li>
                            </ul>
                        </div>
                        <div className="bg-red-200 p-2 rounded text-xs font-bold text-red-900">
                            ⚠️ EMERGENCIA QUIRÚRGICA - Traslado inmediato
                        </div>
                    </div>
                </div>

                {/* Obstrucción intestinal */}
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-2 border-orange-300">
                    <div className="flex items-center mb-3">
                        <MdWarning className="w-6 h-6 text-orange-600 mr-2"/>
                        <h3 className="font-bold text-orange-700 text-lg">OBSTRUCCIÓN INTESTINAL</h3>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-1">Tipos:</h4>
                            <p className="text-sm text-gray-700">Mecánica (adherencias, hernias) vs Funcional (íleo paralítico)</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-1">Signos cardinales:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Dolor cólico intermitente</li>
                                <li>• Distensión abdominal</li>
                                <li>• Vómitos (biliosos/fecaloideos)</li>
                                <li>• Ausencia de gases/heces</li>
                                <li>• Ruidos intestinales aumentados</li>
                            </ul>
                        </div>
                        <div className="bg-orange-200 p-2 rounded text-xs font-bold text-orange-900">
                            🕐 Riesgo de necrosis intestinal - Urgente
                        </div>
                    </div>
                </div>

                {/* Pancreatitis */}
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-2 border-purple-300">
                    <div className="flex items-center mb-3">
                        <BsHeartPulse className="w-6 h-6 text-purple-600 mr-2"/>
                        <h3 className="font-bold text-purple-700 text-lg">PANCREATITIS AGUDA</h3>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-1">Causas principales:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Cálculos biliares (40%)</li>
                                <li>• Alcohol (30%)</li>
                                <li>• Medicamentos, trauma</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-1">Presentación clínica:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Dolor epigástrico intenso</li>
                                <li>• Irradiación a la espalda</li>
                                <li>• Náuseas, vómitos persistentes</li>
                                <li>• Fiebre, taquicardia</li>
                                <li>• Posición antálgica (encorvado)</li>
                            </ul>
                        </div>
                        <div className="bg-purple-200 p-2 rounded text-xs font-bold text-purple-900">
                            💉 Requiere manejo del dolor - Hospitalización
                        </div>
                    </div>
                </div>

                {/* Colecistitis */}
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-2 border-yellow-300">
                    <div className="flex items-center mb-3">
                        <MdLocalHospital className="w-6 h-6 text-yellow-600 mr-2"/>
                        <h3 className="font-bold text-yellow-700 text-lg">COLECISTITIS AGUDA</h3>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-1">Triada clásica:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Dolor hipocondrio derecho</li>
                                <li>• Fiebre y escalofríos</li>
                                <li>• Leucocitosis</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-1">Signos específicos:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Signo de Murphy positivo</li>
                                <li>• Dolor post-ingesta grasosa</li>
                                <li>• Ictericia (si hay obstrucción)</li>
                                <li>• Náuseas, intolerancia oral</li>
                            </ul>
                        </div>
                        <div className="bg-yellow-200 p-2 rounded text-xs font-bold text-yellow-900">
                            🏥 Cirugía temprana recomendada
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla de diagnóstico diferencial */}
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h4 className="font-bold text-gray-800 mb-4">Diagnóstico Diferencial Rápido para Paramédicos</h4>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg text-sm">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-3 border text-left">Patología</th>
                            <th className="py-2 px-3 border text-center">Localización</th>
                            <th className="py-2 px-3 border text-center">Tipo de dolor</th>
                            <th className="py-2 px-3 border text-center">Signo clave</th>
                            <th className="py-2 px-3 border text-center">Prioridad</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-3 border font-medium">Apendicitis</td>
                            <td className="py-2 px-3 border text-center">Periumbilical → FID</td>
                            <td className="py-2 px-3 border text-center">Constante, punzante</td>
                            <td className="py-2 px-3 border text-center">McBurney, rebote</td>
                            <td className="py-2 px-3 border text-center bg-yellow-100">ALTA</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-3 border font-medium">Peritonitis</td>
                            <td className="py-2 px-3 border text-center">Generalizado</td>
                            <td className="py-2 px-3 border text-center">Constante, severo</td>
                            <td className="py-2 px-3 border text-center">Abdomen rígido</td>
                            <td className="py-2 px-3 border text-center bg-red-100">CRÍTICA</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-3 border font-medium">Colecistitis</td>
                            <td className="py-2 px-3 border text-center">Hipocondrio D</td>
                            <td className="py-2 px-3 border text-center">Cólico → constante</td>
                            <td className="py-2 px-3 border text-center">Murphy positivo</td>
                            <td className="py-2 px-3 border text-center bg-yellow-100">ALTA</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-3 border font-medium">Pancreatitis</td>
                            <td className="py-2 px-3 border text-center">Epigastrio → espalda</td>
                            <td className="py-2 px-3 border text-center">Constante, intenso</td>
                            <td className="py-2 px-3 border text-center">Posición antálgica</td>
                            <td className="py-2 px-3 border text-center bg-orange-100">ALTA</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-3 border font-medium">Obstrucción</td>
                            <td className="py-2 px-3 border text-center">Periumbilical</td>
                            <td className="py-2 px-3 border text-center">Cólico intermitente</td>
                            <td className="py-2 px-3 border text-center">Distensión, vómitos</td>
                            <td className="py-2 px-3 border text-center bg-orange-100">ALTA</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-2 px-3 border font-medium">Cólico renal</td>
                            <td className="py-2 px-3 border text-center">Flanco → ingle</td>
                            <td className="py-2 px-3 border text-center">Cólico ondulante</td>
                            <td className="py-2 px-3 border text-center">Inquietud, hematuria</td>
                            <td className="py-2 px-3 border text-center bg-yellow-100">MEDIA</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        {/* Puntos clave para recordar */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
                <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                <h3 className="text-xl font-bold text-green-800">Perlas Clínicas para Paramédicos</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                        <MdCheckCircle className="w-4 h-4 mr-2"/>
                        Hacer SIEMPRE:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Evaluación completa SAMPLE</li>
                        <li>Posición de confort (rodillas flexionadas)</li>
                        <li>Monitoreo continuo de signos vitales</li>
                        <li>Preparar para vómito</li>
                        <li>NPO (nada por vía oral)</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                        NUNCA hacer:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Aplicar calor local</li>
                        <li>Dar analgésicos en campo</li>
                        <li>Palpación profunda repetida</li>
                        <li>Permitir alimentos o líquidos</li>
                        <li>Subestimar la gravedad</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}