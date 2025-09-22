import {BsShield} from "react-icons/bs";
import {MdCheckCircle} from "react-icons/md";
import {FaExclamationTriangle} from "react-icons/fa";

export default function Treatment() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Manejo y Tratamiento Prehospitalario
                </h2>

                {/* Evaluación inicial */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Evaluación ABCDE</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="font-bold text-blue-600 mb-2">A - Airway</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Permeabilidad de vía aérea</li>
                                <li>• Posición de recuperación si inconsciente</li>
                                <li>• Protección cervical si trauma</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="font-bold text-green-600 mb-2">B - Breathing</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• O₂ suplementario (8-12 L/min)</li>
                                <li>• Frecuencia respiratoria</li>
                                <li>• Saturación de O₂ (objetivo &gt;94%)</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="font-bold text-red-600 mb-2">C - Circulation</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Pulso y presión arterial</li>
                                <li>• Acceso IV de grueso calibre</li>
                                <li>• Monitorización cardíaca</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="font-bold text-purple-600 mb-2">D - Disability</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Escala de Glasgow</li>
                                <li>• Pupilas y reflejos</li>
                                <li>• Glucemia capilar</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg border">
                            <h4 className="font-bold text-orange-600 mb-2">E - Exposure</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Temperatura corporal</li>
                                <li>• Examen físico dirigido</li>
                                <li>• Prevenir hipotermia</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Protocolo de SCA */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Protocolo para Síndrome Coronario Agudo</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Medidas Inmediatas (Primeros 10 min):</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li><strong>O₂ suplementario</strong> si SatO₂ &lt;90%</li>
                                <li><strong>AAS 300mg masticable</strong> (contraindicaciones: alergia, sangrado activo)
                                </li>
                                <li><strong>Nitroglicerina SL 0.4mg</strong> (si PA sistólica &gt;100 mmHg)</li>
                                <li><strong>Morfina 2-4mg IV</strong> para dolor severo</li>
                                <li><strong>ECG de 12 derivaciones</strong></li>
                                <li><strong>Acceso IV</strong> y monitorización</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Contraindicaciones Importantes:</h4>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-red-700">Nitroglicerina NO dar si:</h5>
                                    <ul className="text-sm text-gray-600 mt-1">
                                        <li>• PA sistólica &lt;100 mmHg</li>
                                        <li>• Uso de sildenafil en 24h</li>
                                        <li>• Infarto de VD (V4R elevado)</li>
                                    </ul>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-orange-700">AAS NO dar si:</h5>
                                    <ul className="text-sm text-gray-600 mt-1">
                                        <li>• Alergia conocida</li>
                                        <li>• Sangrado activo</li>
                                        <li>• Úlcera péptica activa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RCP y SVA */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4">Protocolo de Paro Cardiorrespiratorio</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">RCP de Alta Calidad:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Frecuencia:</strong> 100-120 compresiones/min</li>
                                <li><strong>Profundidad:</strong> 5-6 cm (adultos)</li>
                                <li><strong>Retroceso completo:</strong> Permitir expansión torácica</li>
                                <li><strong>Interrupciones mínimas:</strong> &lt;10 segundos</li>
                                <li><strong>Relación:</strong> 30:2 (sin vía aérea avanzada)</li>
                                <li><strong>Cambio de operador:</strong> Cada 2 minutos</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">Desfibrilación:</h4>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Ritmos desfibrilables:</strong></p>
                                <ul className="list-disc list-inside ml-4 text-sm">
                                    <li>Fibrilación ventricular (FV)</li>
                                    <li>Taquicardia ventricular sin pulso (TVSP)</li>
                                </ul>
                                <p><strong>Energía:</strong> Bifásico 120-200J inicial</p>
                                <p><strong>Secuencia:</strong> Descarga → RCP inmediata × 2 min → Reevaluar</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicamentos de emergencia */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Medicamentos de Emergencia Cardiovascular</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Medicamento</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Indicación</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Dosis</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Vía</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-2 font-medium">Epinefrina</td>
                                <td className="px-4 py-2 text-sm">Asistolia, AESP</td>
                                <td className="px-4 py-2 text-sm">1mg cada 3-5 min</td>
                                <td className="px-4 py-2 text-sm">IV/IO</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">Amiodarona</td>
                                <td className="px-4 py-2 text-sm">FV/TVSP refractaria</td>
                                <td className="px-4 py-2 text-sm">300mg → 150mg</td>
                                <td className="px-4 py-2 text-sm">IV/IO</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">Atropina</td>
                                <td className="px-4 py-2 text-sm">Bradicardia sintomática</td>
                                <td className="px-4 py-2 text-sm">0.5mg cada 3-5 min</td>
                                <td className="px-4 py-2 text-sm">IV/IO</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">Adenosina</td>
                                <td className="px-4 py-2 text-sm">TSV estable</td>
                                <td className="px-4 py-2 text-sm">6mg → 12mg</td>
                                <td className="px-4 py-2 text-sm">IV rápida</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 font-medium">Furosemida</td>
                                <td className="px-4 py-2 text-sm">Edema pulmonar</td>
                                <td className="px-4 py-2 text-sm">40-80mg</td>
                                <td className="px-4 py-2 text-sm">IV</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Puntos clave de tratamiento */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Recordatorios Críticos</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3 flex items-center">
                                <MdCheckCircle className="w-4 h-4 mr-2"/>
                                Siempre hacer:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Evaluación ABCDE sistemática</li>
                                <li>Monitorización continua</li>
                                <li>Comunicación con hospital receptor</li>
                                <li>Documentación detallada</li>
                                <li>Reevaluación frecuente</li>
                                <li>Preparar para deterioro súbito</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                                <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                                Errores comunes a evitar:
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Retrasar el traslado por procedimientos</li>
                                <li>No reconocer contraindicaciones</li>
                                <li>Compresiones inadecuadas en RCP</li>
                                <li>Interrupciones prolongadas para ECG</li>
                                <li>No comunicar hallazgos al hospital</li>
                                <li>Subestimar la gravedad del paciente</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Manejo específico de emergencias hipertensivas */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Emergencias Hipertensivas</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Criterios Diagnósticos:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>PA sistólica &gt;180 mmHg</strong></li>
                                <li><strong>Síntomas de daño orgánico:</strong></li>
                                <ul className="list-disc list-inside ml-4 text-sm">
                                    <li>Cefalea intensa</li>
                                    <li>Visión borrosa o diplopia</li>
                                    <li>Náuseas y vómitos</li>
                                    <li>Confusión o alteración mental</li>
                                    <li>Disnea por edema pulmonar</li>
                                </ul>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Protocolo de Manejo:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li><strong>NO administrar medicación antihipertensiva</strong> en campo</li>
                                <li><strong>O₂ suplementario</strong> si hipoxia</li>
                                <li><strong>Posición semi-Fowler</strong> para comodidad</li>
                                <li><strong>Monitoreo continuo</strong> de signos vitales</li>
                                <li><strong>Minimizar estrés</strong> físico y emocional</li>
                                <li><strong>Traslado inmediato</strong> evitando movimientos bruscos</li>
                            </ol>
                            <div className="mt-3 p-2 bg-red-100 rounded">
                                <p className="text-sm text-red-800"><strong>⚠️ Importante:</strong> La reducción rápida
                                    de PA puede causar isquemia cerebral o coronaria</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Protocolo de paro cardíaco actualizado */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Paro Cardíaco Súbito - Protocolo
                        Actualizado</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Secuencia Inicial:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li><strong>Verificar responsividad</strong> y respiración</li>
                                <li><strong>Activar SEM</strong> y solicitar DEA</li>
                                <li><strong>Verificar pulso</strong> (&lt;10 segundos)</li>
                                <li><strong>Iniciar RCP</strong> inmediatamente si no hay pulso</li>
                                <li><strong>Aplicar DEA</strong> tan pronto esté disponible</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Protocolo DEA:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Análisis cada 2 minutos</strong> (5 ciclos de RCP)</li>
                                <li><strong>Ritmos desfibrilables:</strong> FV, TVSP</li>
                                <li><strong>Continuar hasta:</strong></li>
                                <ul className="list-disc list-inside ml-4 text-sm">
                                    <li>Recuperación de signos vitales</li>
                                    <li>Llegada de SVA</li>
                                    <li>Agotamiento del rescatista</li>
                                </ul>
                            </ul>
                            <div className="mt-3 p-2 bg-gray-100 rounded">
                                <p className="text-sm text-gray-800"><strong>Meta:</strong> Minimizar interrupciones de
                                    compresiones (&lt;10 segundos)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Evaluación prehospitalaria específica */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">🩺 Evaluación Prehospitalaria Específica</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">ECG de 12 Derivaciones:</h4>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Objetivo:</strong> &lt;10 min desde contacto</li>
                                <li>• <strong>Buscar:</strong> Elevación ST, depresión ST</li>
                                <li>• <strong>Transmitir:</strong> A hospital receptor</li>
                                <li>• <strong>Repetir:</strong> Si cambio clínico</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">Escalas de Dolor Torácico:</h4>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Intensidad:</strong> 0-10 (escala numérica)</li>
                                <li>• <strong>Características:</strong> Opresivo, punzante</li>
                                <li>• <strong>Irradiación:</strong> Brazo, cuello, mandíbula</li>
                                <li>• <strong>Factores:</strong> Alivio/empeoramiento</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">Dispositivos Implantables:</h4>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Marcapasos:</strong> No afecta DEA</li>
                                <li>• <strong>DAI:</strong> Puede descargar automáticamente</li>
                                <li>• <strong>Colocación parches:</strong> &gt;8cm del dispositivo</li>
                                <li>• <strong>Si descarga DAI:</strong> Esperar y continuar RCP</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}