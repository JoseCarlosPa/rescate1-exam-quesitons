import {FiUser} from "react-icons/fi";

export default function Practice() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiUser className="w-6 h-6 mr-2 text-orange-500"/>
                    Casos Clínicos para Práctica
                </h2>

                {/* Caso 1: STEMI */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4">Caso 1: Infarto Agudo (STEMI)</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Presentación:</h4>
                            <div className="bg-white p-4 rounded border">
                                <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Hombre, 58 años</p>
                                <p className="text-gray-700 mb-2"><strong>Motivo:</strong> Dolor torácico intenso hace
                                    45 minutos</p>
                                <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> Dolor opresivo
                                    retroesternal, irradiación a brazo izquierdo, diaforesis, náusea</p>
                                <p className="text-gray-700 mb-2"><strong>Antecedentes:</strong> Hipertensión, diabetes,
                                    tabaquismo</p>
                                <p className="text-gray-700"><strong>Signos vitales:</strong> PA 140/90, FC 95, FR 22,
                                    SatO₂ 96%</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-800 mb-3">Tu manejo paso a paso:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                <li>Evaluación ABCDE - vía aérea permeable</li>
                                <li>O₂ suplementario 4L/min por cánula nasal</li>
                                <li>Acceso IV 14G en brazo derecho</li>
                                <li>Monitorización cardíaca continua</li>
                                <li>ECG 12 derivaciones → STEMI anterior</li>
                                <li>AAS 300mg masticable</li>
                                <li>Nitroglicerina SL 0.4mg</li>
                                <li>Morfina 2mg IV para dolor</li>
                                <li>Traslado emergente a hospital con hemodinamia</li>
                                <li>Preactivación de código STEMI</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-red-100 rounded">
                        <p className="text-sm text-red-800"><strong>Tiempo puerta-balón objetivo:</strong> &lt;90
                            minutos. Tu rapidez en el diagnóstico y traslado es crucial.</p>
                    </div>
                </div>

                {/* Caso 2: Paro cardíaco */}
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Caso 2: Paro Cardiorrespiratorio</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Escenario:</h4>
                            <div className="bg-white p-4 rounded border">
                                <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Mujer, 65 años</p>
                                <p className="text-gray-700 mb-2"><strong>Situación:</strong> Colapso súbito en
                                    domicilio</p>
                                <p className="text-gray-700 mb-2"><strong>Hallazgos:</strong> Inconsciente, sin
                                    respiración, sin pulso</p>
                                <p className="text-gray-700 mb-2"><strong>Monitor:</strong> Fibrilación ventricular</p>
                                <p className="text-gray-700"><strong>Tiempo de colapso:</strong> 5 minutos (estimado por
                                    familiar)</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Secuencia de RCP:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                <li>Verificar seguridad de escena</li>
                                <li>Confirmar inconsciencia e inexistencia de pulso</li>
                                <li>Iniciar RCP de alta calidad (30:2)</li>
                                <li>Aplicar parches del DEA</li>
                                <li>1ª descarga (150J bifásico)</li>
                                <li>RCP inmediata × 2 minutos</li>
                                <li>Reevaluar ritmo → persiste FV</li>
                                <li>2ª descarga + epinefrina 1mg IV</li>
                                <li>RCP × 2 min + amiodarona 300mg</li>
                                <li>Continuar algoritmo hasta ROSC</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="p-3 bg-green-100 rounded">
                            <p className="text-sm text-green-800"><strong>Meta:</strong> Tiempo desde colapso hasta
                                primera descarga &lt;5 minutos</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded">
                            <p className="text-sm text-blue-800"><strong>Calidad RCP:</strong> 100-120/min, 5-6cm
                                profundidad, retroceso completo</p>
                        </div>
                    </div>
                </div>

                {/* Caso 3: Insuficiencia cardíaca */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Caso 3: Insuficiencia Cardíaca Aguda</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">Presentación:</h4>
                            <div className="bg-white p-4 rounded border">
                                <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Hombre, 72 años</p>
                                <p className="text-gray-700 mb-2"><strong>Motivo:</strong> Disnea severa y ortopnea</p>
                                <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> No puede caminar, disnea
                                    paroxística nocturna</p>
                                <p className="text-gray-700 mb-2"><strong>Examen físico:</strong> Estertores bibasales,
                                    edema en MMII, YVD</p>
                                <p className="text-gray-700"><strong>Signos vitales:</strong> PA 180/110, FC 115, FR 28,
                                    SatO₂ 88%</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-3">Plan de tratamiento:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                <li>Posición sentado (Fowler 90°)</li>
                                <li>O₂ de alto flujo (15L/min con reservorio)</li>
                                <li>Considerar CPAP si disponible</li>
                                <li>Acceso IV 18G</li>
                                <li>Furosemida 40-80mg IV</li>
                                <li>Nitroglicerina SL (cuidado con PA)</li>
                                <li>Monitor continuo + ECG 12 derivaciones</li>
                                <li>Traslado en posición sentado</li>
                                <li>Evitar fluidos IV</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 rounded">
                        <p className="text-sm text-blue-800"><strong>Clave:</strong> La posición sentado y el O₂ son
                            prioritarios. El paciente puede descompensarse rápidamente.</p>
                    </div>
                </div>

                {/* Preguntas de autoevaluación */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Preguntas de Autoevaluación</h3>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border">
                            <p className="font-medium text-gray-800 mb-2">1. ¿Cuál es la primera prioridad en un
                                paciente con sospecha de SCA?</p>
                            <p className="text-sm text-gray-600">Respuesta: ECG de 12 derivaciones en los primeros 10
                                minutos para identificar STEMI</p>
                        </div>
                        <div className="bg-white p-4 rounded border">
                            <p className="font-medium text-gray-800 mb-2">2. ¿Cuándo NO debes dar nitroglicerina en un
                                paciente con dolor torácico?</p>
                            <p className="text-sm text-gray-600">Respuesta: PA sistólica &lt;100 mmHg, uso reciente de
                                sildenafil, sospecha de infarto de VD</p>
                        </div>
                        <div className="bg-white p-4 rounded border">
                            <p className="font-medium text-gray-800 mb-2">3. ¿Cuál es la profundidad correcta de
                                compresiones en RCP para adultos?</p>
                            <p className="text-sm text-gray-600">Respuesta: 5-6 cm (al menos 5 cm, no más de 6 cm)</p>
                        </div>
                        <div className="bg-white p-4 rounded border">
                            <p className="font-medium text-gray-800 mb-2">4. ¿Qué posición es ideal para un paciente con
                                edema pulmonar agudo?</p>
                            <p className="text-sm text-gray-600">Respuesta: Sentado (Fowler 90°) para reducir retorno
                                venoso y mejorar ventilación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}