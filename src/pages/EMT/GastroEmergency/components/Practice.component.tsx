import {FaFirstAid} from "react-icons/fa";
import {MdWarning} from "react-icons/md";
import {FaDroplet} from "react-icons/fa6";
import {GiKidneys} from "react-icons/gi";
import {BsLightbulb} from "react-icons/bs";

export default function Practice(){
    return(<div className="space-y-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
            <FaFirstAid className="w-6 h-6 mr-2 text-red-500"/>
            Casos Clínicos Interactivos - Aprende con Experiencias Reales
        </h2>

        {/* Caso 1: Apendicitis */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
            <div className="flex items-center mb-3">
                <MdWarning className="w-6 h-6 text-red-500 mr-2"/>
                <h3 className="text-xl font-semibold text-red-700">Caso 1: Apendicitis Aguda</h3>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4 border">
                <p className="italic text-gray-600 mb-3">
                    <strong>Escenario:</strong> Mujer de 22 años, estudiante universitaria. Llamada por dolor abdominal que inició hace 12 horas.
                    Inicialmente periumbilical, ahora localizado en fosa iliaca derecha. Náuseas y un episodio de vómito.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Evaluación Inicial:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>A:</strong> Vía aérea permeable, habla con frases completas</li>
                            <li><strong>B:</strong> FR 22/min, SpO₂ 98% aire ambiente</li>
                            <li><strong>C:</strong> FC 105/min, TA 120/75 mmHg, pulsos fuertes</li>
                            <li><strong>D:</strong> Alerta, orientada, Glasgow 15/15</li>
                            <li><strong>E:</strong> Temp 38.1°C, posición antálgica</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">OPQRST:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>O:</strong> Inicio gradual hace 12 hrs</li>
                            <li><strong>P:</strong> Empeora con movimiento, tos</li>
                            <li><strong>Q:</strong> Constante, punzante</li>
                            <li><strong>R:</strong> FID, sin irradiación</li>
                            <li><strong>S:</strong> 8/10</li>
                            <li><strong>T:</strong> Empeorando progresivamente</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-100 rounded">
                    <h4 className="font-semibold text-yellow-800 mb-2">Hallazgos Físicos:</h4>
                    <p className="text-sm text-gray-700">
                        Dolor intenso a la palpación en punto de McBurney. Rebote positivo. Defensa muscular localizada.
                        Signo de Rovsing positivo (dolor en FID al palpar FII).
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">✅ Manejo Correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        <li>Posición de confort (rodillas flexionadas)</li>
                        <li>NPO absoluto</li>
                        <li>Monitoreo signos vitales cada 5 min</li>
                        <li>Preparar equipo para vómito</li>
                        <li>Notificación inmediata hospital</li>
                        <li>Traslado código amarillo</li>
                    </ol>
                </div>
                <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">❌ Errores Comunes:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Dar analgésicos "para el dolor"</li>
                        <li>Aplicar calor local</li>
                        <li>Palpación abdominal repetida</li>
                        <li>Subestimar por la edad</li>
                        <li>Permitir ingesta oral</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded">
                <h4 className="font-semibold text-blue-800">💡 Perla Educativa:</h4>
                <p className="text-sm text-gray-700">
                    La apendicitis es la urgencia quirúrgica abdominal más común en jóvenes. El dolor migra de periumbilical a FID en el 65% de casos.
                    La perforación ocurre en 12-24 horas, especialmente en extremos de edad.
                </p>
            </div>
        </div>

        {/* Caso 2: Hemorragia Digestiva */}
        <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg shadow-md border-l-4 border-red-600">
            <div className="flex items-center mb-3">
                <FaDroplet className="w-6 h-6 text-red-600 mr-2"/>
                <h3 className="text-xl font-semibold text-red-700">Caso 2: Hemorragia Digestiva Alta</h3>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4 border">
                <p className="italic text-gray-600 mb-3">
                    <strong>Escenario:</strong> Hombre de 58 años, antecedente de cirrosis hepática por alcohol. Llamada por vómito con sangre.
                    Familiar reporta 3 episodios de hematemesis en las últimas 2 horas.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Evaluación Inicial:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>A:</strong> Permeable, respiraciones laboriosas</li>
                            <li><strong>B:</strong> FR 28/min, SpO₂ 94% aire ambiente</li>
                            <li><strong>C:</strong> FC 125/min, TA 85/50 mmHg, pulsos débiles</li>
                            <li><strong>D:</strong> Somnoliento, responde a estímulos</li>
                            <li><strong>E:</strong> Piel fría, húmeda, palidez marcada</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Hallazgos Adicionales:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>Abdomen distendido, ascitis</li>
                            <li>Ictericia escleral</li>
                            <li>Telangiectasias (arañas vasculares)</li>
                            <li>Melena en ropa del paciente</li>
                            <li>Llenado capilar &gt; 3 segundos</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">🚨 Manejo Emergente:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        <li>Oxígeno alto flujo (15L mascarilla)</li>
                        <li>Posición lateral de seguridad</li>
                        <li>Dos accesos IV calibre grueso</li>
                        <li>Aspiración continua disponible</li>
                        <li>Monitoreo intensivo</li>
                        <li>Traslado código rojo + ALS intercept</li>
                    </ol>
                </div>
                <div className="bg-orange-100 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 mb-2">⚠️ Signos de Shock:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Taquicardia compensatoria</li>
                        <li>Hipotensión (pérdida &gt; 30% volemia)</li>
                        <li>Alteración estado mental</li>
                        <li>Oliguria/anuria</li>
                        <li>Piel fría, húmeda</li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 p-3 bg-purple-100 rounded">
                <h4 className="font-semibold text-purple-800">📚 Fisiopatología:</h4>
                <p className="text-sm text-gray-700">
                    En cirrosis, la hipertensión portal causa varices esofágicas. Su ruptura puede ser masiva (2-6L sangre).
                    La mortalidad es del 30-50% en primer episodio.
                </p>
            </div>
        </div>

        {/* Caso 3: Cólico Renal */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center mb-3">
                <GiKidneys className="w-6 h-6 text-blue-500 mr-2"/>
                <h3 className="text-xl font-semibold text-blue-700">Caso 3: Cólico Renal</h3>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4 border">
                <p className="italic text-gray-600 mb-3">
                    <strong>Escenario:</strong> Hombre de 35 años, ejecutivo. Despertó a las 3 AM con dolor lumbar derecho severo
                    que se irradia a ingle. Se encuentra inquieto, no puede encontrar posición cómoda.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Evaluación:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>A:</strong> Permeable, quejidos de dolor</li>
                            <li><strong>B:</strong> FR 20/min, SpO₂ 99%</li>
                            <li><strong>C:</strong> FC 98/min, TA 145/90 mmHg</li>
                            <li><strong>D:</strong> Alerta, ansioso por el dolor</li>
                            <li><strong>E:</strong> Inquieto, sudoroso, temp normal</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Características del Dolor:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>Inicio súbito</li>
                            <li>Tipo cólico (ondas)</li>
                            <li>Intensidad 9/10</li>
                            <li>Irradiación flanco → ingle → testículo</li>
                            <li>Náuseas sin vómito</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">Hallazgos:</h4>
                    <p className="text-sm text-gray-700">
                        Puño-percusión positiva derecha. Hematuria microscópica. Sin fiebre.
                        Antecedente de cálculos renales hace 2 años.
                    </p>
                </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">✅ Manejo Adecuado:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                        <li>Posición de confort (cualquiera que alivie)</li>
                        <li>Monitoreo signos vitales</li>
                        <li>Preparar antiemético si disponible</li>
                        <li>NPO por las náuseas</li>
                        <li>Traslado para analgesia</li>
                        <li>Documentar características orina</li>
                    </ol>
                </div>
                <div className="bg-yellow-100 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-800 mb-2">🎯 Puntos Clave:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                        <li>Dolor más severo que IAM</li>
                        <li>Inquietud vs rigidez (apendicitis)</li>
                        <li>Hematuria presente 85% casos</li>
                        <li>Puede simular otras patologías</li>
                        <li>Complicación: hidronefrosis</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Desafío de Triage */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
                <BsLightbulb className="w-6 h-6 text-purple-500 mr-2"/>
                <h3 className="text-xl font-semibold text-purple-700">🎯 Desafío de Triage - ¿Puedes Decidir Correctamente?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Paciente A</h4>
                    <p className="text-sm text-gray-600 mb-2">♀ 45 años, dolor epigástrico post-comida, náuseas, signos vitales normales</p>
                    <div className="text-xs bg-gray-100 p-2 rounded">¿Código Verde, Amarillo o Rojo?</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Paciente B</h4>
                    <p className="text-sm text-gray-600 mb-2">♂ 70 años, melena, FC 110, TA 100/60, mareo al incorporarse</p>
                    <div className="text-xs bg-gray-100 p-2 rounded">¿Código Verde, Amarillo o Rojo?</div>
                </div>
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Paciente C</h4>
                    <p className="text-sm text-gray-600 mb-2">♂ 28 años, dolor testicular súbito 10/10, náuseas, testículo elevado</p>
                    <div className="text-xs bg-gray-100 p-2 rounded">¿Código Verde, Amarillo o Rojo?</div>
                </div>
            </div>
            <div className="mt-4 p-3 bg-purple-100 rounded text-sm">
                <strong>Respuestas:</strong> A = Verde (probable dispepsia), B = Amarillo/Rojo (sangrado GI con ortostatismo),
                C = Rojo (posible torsión testicular = emergencia urológica)
            </div>
        </div>
    </div>);
}