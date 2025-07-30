import {MdWarning} from "react-icons/md";
import {FaExclamationTriangle} from "react-icons/fa";
import {BsLightbulb} from "react-icons/bs";

export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Casos Clínicos Interactivos</h2>

            {/* Caso 1: ACV isquémico */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-sm border border-blue-200">
                <div className="flex items-center mb-4">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
                    <h3 className="text-xl font-semibold text-blue-700">Caso: ACV Isquémico</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-blue-800 mb-2">Escenario:</h4>
                    <p className="italic text-gray-700 mb-3">
                        Mujer de 68 años, despierta con debilidad en hemicuerpo derecho y dificultad para hablar.
                        Familia refiere que ayer en la noche estaba normal. Última vez vista normal: 08:00 hrs. Hora actual: 10:30 hrs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Hallazgos Vitales:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Conciencia:</strong> Alerta, orientada</li>
                            <li>• <strong>Vía aérea:</strong> Permeable</li>
                            <li>• <strong>Respiración:</strong> FR 18/min, SpO₂ 96%</li>
                            <li>• <strong>Circulación:</strong> FC 90/min regular, TA 150/90</li>
                            <li>• <strong>Glasgow:</strong> 13 (O4-V4-M5)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Examen Neurológico:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Habla:</strong> Disártrica, comprende órdenes</li>
                            <li>• <strong>Cara:</strong> Paresia facial derecha</li>
                            <li>• <strong>Brazo derecho:</strong> Deriva al elevar</li>
                            <li>• <strong>Pierna derecha:</strong> Debilidad leve</li>
                            <li>• <strong>Pupilas:</strong> Normales, reactivas</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Análisis del Caso:</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-medium text-yellow-700 mb-1">Escala de Cincinnati:</h5>
                            <ul className="text-sm text-gray-700">
                                <li>✓ Parálisis facial: <span className="text-red-600">ANORMAL</span></li>
                                <li>✓ Debilidad brazo: <span className="text-red-600">ANORMAL</span></li>
                                <li>✓ Habla anormal: <span className="text-red-600">ANORMAL</span></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-medium text-yellow-700 mb-1">Manejo Correcto:</h5>
                            <ol className="text-sm text-gray-700 list-decimal list-inside">
                                <li>Oxígeno si SpO₂ &lt;94%</li>
                                <li>Control glucosa capilar</li>
                                <li>Traslado URGENTE código ACV</li>
                                <li>Notificación hospital</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 2: Estado epiléptico */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-sm border border-green-200">
                <div className="flex items-center mb-4">
                    <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
                    <h3 className="text-xl font-semibold text-green-700">Caso: Estado Epiléptico</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-green-800 mb-2">Escenario:</h4>
                    <p className="italic text-gray-700 mb-3">
                        Hombre de 25 años, historia de epilepsia. Familiar reporta convulsión generalizada que inició
                        hace 7 minutos y continúa. No ha recuperado conciencia entre episodios.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Hallazgos Durante Convulsión:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Tipo:</strong> Tónico-clónica generalizada</li>
                            <li>• <strong>Duración:</strong> &gt; 7 minutos continua</li>
                            <li>• <strong>Respiración:</strong> Irregular, cianosis perioral</li>
                            <li>• <strong>SpO₂:</strong> 88% durante convulsión</li>
                            <li>• <strong>Incontinencia:</strong> Presente</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Post-Convulsión (min 10):</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Conciencia:</strong> Estuporoso</li>
                            <li>• <strong>Vía aérea:</strong> Permeable, secreciones</li>
                            <li>• <strong>Respiración:</strong> FR 24/min, SpO₂ 92%</li>
                            <li>• <strong>FC:</strong> 110/min, TA 140/85</li>
                            <li>• <strong>Glasgow:</strong> 9 (O2-V2-M5)</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <MdWarning className="w-5 h-5 mr-2"/>
                        Estado Epiléptico - Manejo Prioritario:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-medium text-red-700 mb-1">Intervenciones Inmediatas:</h5>
                            <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                                <li>Proteger vía aérea (aspiración)</li>
                                <li>Oxígeno alto flujo</li>
                                <li>Acceso IV si posible</li>
                                <li>Control glucosa capilar STAT</li>
                                <li>Posición lateral segura</li>
                            </ol>
                        </div>
                        <div>
                            <h5 className="font-medium text-red-700 mb-1">Consideraciones:</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Emergencia neurológica</li>
                                <li>• Riesgo de aspiración</li>
                                <li>• Traslado inmediato</li>
                                <li>• Medicación anticonvulsiva</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Caso 3: TCE con deterioro */}
            <div className="p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-sm border border-purple-200">
                <div className="flex items-center mb-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
                    <h3 className="text-xl font-semibold text-purple-700">Caso: TCE con Deterioro Neurológico</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-purple-800 mb-2">Escenario:</h4>
                    <p className="italic text-gray-700 mb-3">
                        Motociclista de 30 años, accidente a alta velocidad. Inicialmente consciente y orientado,
                        pero durante traslado presenta deterioro progresivo del nivel de conciencia.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">Evaluación Inicial:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Glasgow:</strong> 15</li>
                            <li>• <strong>Pupilas:</strong> 3mm reactivas</li>
                            <li>• <strong>Queja:</strong> Cefalea intensa</li>
                            <li>• <strong>TA:</strong> 120/70</li>
                            <li>• <strong>FC:</strong> 90/min</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">15 minutos después:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Glasgow:</strong> 11 (O3-V3-M5)</li>
                            <li>• <strong>Pupilas:</strong> Derecha 5mm fija</li>
                            <li>• <strong>Vómito:</strong> En proyectil x2</li>
                            <li>• <strong>TA:</strong> 160/90</li>
                            <li>• <strong>FC:</strong> 60/min</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">25 minutos después:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Glasgow:</strong> 6 (O1-V1-M4)</li>
                            <li>• <strong>Pupilas:</strong> Bilaterales fijas</li>
                            <li>• <strong>Respiración:</strong> Irregular</li>
                            <li>• <strong>TA:</strong> 180/110</li>
                            <li>• <strong>FC:</strong> 45/min</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-red-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                        Análisis: Herniación Cerebral Inminente
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h5 className="font-medium text-red-700 mb-1">Signos de Herniación:</h5>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Deterioro Glasgow progresivo</li>
                                <li>• Anisocoria → pupilas fijas</li>
                                <li>• Triada de Cushing: ↑TA, ↓FC, resp. irregular</li>
                                <li>• Vómito en proyectil</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-medium text-red-700 mb-1">Manejo Crítico:</h5>
                            <ol className="text-sm text-gray-700 list-decimal list-inside space-y-1">
                                <li>Intubación inmediata</li>
                                <li>Hiperventilación controlada</li>
                                <li>Posición cabecera 30°</li>
                                <li>Traslado urgente neurocirugía</li>
                                <li>Comunicación médica</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Puntos de aprendizaje */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-400 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Puntos Clave de Aprendizaje
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Reconocimiento Temprano:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• La ventana terapéutica es crítica</li>
                            <li>• Los síntomas pueden ser sutiles inicialmente</li>
                            <li>• La evaluación seriada es fundamental</li>
                            <li>• Documentar hora exacta de inicio</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Principios de Manejo:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• ABC siempre primero</li>
                            <li>• Evitar hipoxia e hipotensión</li>
                            <li>• Traslado rápido pero seguro</li>
                            <li>• Comunicación efectiva con hospital</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}