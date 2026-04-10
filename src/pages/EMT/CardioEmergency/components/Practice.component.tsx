import {FiUser} from "react-icons/fi";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/24/outline";

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

                {/* Caso 4: Fibrilación Auricular con RVR */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">Caso 4: FA con Respuesta Ventricular Rápida</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-3">Presentación:</h4>
                            <div className="bg-white p-4 rounded border">
                                <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Mujer, 67 años</p>
                                <p className="text-gray-700 mb-2"><strong>Motivo:</strong> Palpitaciones y disnea de inicio súbito hace 2 horas</p>
                                <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> Palpitaciones irregulares, disnea moderada, mareo leve</p>
                                <p className="text-gray-700 mb-2"><strong>Antecedentes:</strong> HTA, niega FA previa</p>
                                <p className="text-gray-700"><strong>Signos vitales:</strong> PA 118/74, FC 148 irregular, FR 20, SpO₂ 97%</p>
                            </div>
                            <div className="mt-3 p-3 bg-orange-100 rounded">
                                <p className="text-sm text-orange-800"><strong>Monitor:</strong> Ausencia de ondas P definidas, intervalos R-R irregulares, QRS estrecho — compatible con <strong>FA con RVR</strong></p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-3">Manejo prehospitalario:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                <li>Evaluación ABCDE — paciente estable hemodinámicamente</li>
                                <li>Monitorización cardíaca continua + SpO₂</li>
                                <li>Acceso IV 18G — no iniciar fluidos de rutina</li>
                                <li>ECG 12 derivaciones — confirmar FA, descartar WPW</li>
                                <li>O₂ solo si SpO₂ &lt; 94% (actualmente 97% → no requiere)</li>
                                <li>Traslado urgente — control de frecuencia en hospital</li>
                                <li>Comunicar hallazgos al servicio receptor</li>
                                <li>Reevaluación continua (riesgo de descompensación)</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div className="p-3 bg-yellow-100 rounded">
                            <p className="text-sm text-yellow-800"><strong>⚠️ Cardioversión eléctrica:</strong> Indicada si FA con inestabilidad hemodinámica (hipotensión, sincope, dolor torácico severo). En campo, solo si hay protocolo y DEA con función de cardioversión sincronizada.</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded">
                            <p className="text-sm text-blue-800"><strong>Riesgo de ACV:</strong> FA aumenta 5× el riesgo embólico. Toda FA nueva &gt;48h requiere anticoagulación antes de cardioversión. Documentar hora de inicio.</p>
                        </div>
                    </div>
                </div>

                {/* Caso 5: Bradicardia Sintomática */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4">Caso 5: Bradicardia Sintomática</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Presentación:</h4>
                            <div className="bg-white p-4 rounded border">
                                <p className="text-gray-700 mb-2"><strong>Paciente:</strong> Hombre, 74 años</p>
                                <p className="text-gray-700 mb-2"><strong>Motivo:</strong> Síncope presenciado, confusión al recuperar la conciencia</p>
                                <p className="text-gray-700 mb-2"><strong>Síntomas:</strong> Mareo severo, diaforesis, debilidad generalizada</p>
                                <p className="text-gray-700 mb-2"><strong>Antecedentes:</strong> Cardiopatía isquémica, beta-bloqueadores</p>
                                <p className="text-gray-700"><strong>Signos vitales:</strong> PA 84/56, FC 36, FR 16, SpO₂ 95%</p>
                            </div>
                            <div className="mt-3 p-3 bg-purple-100 rounded">
                                <p className="text-sm text-purple-800"><strong>Monitor:</strong> Ondas P visibles sin relación con QRS ancho — <strong>Bloqueo AV 3er grado</strong></p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Protocolo paso a paso:</h4>
                            <ol className="list-decimal list-inside space-y-2 text-gray-700 text-sm">
                                <li>Posición supina — no incorporar al paciente</li>
                                <li>O₂ 4 L/min cánula nasal (SpO₂ 95%)</li>
                                <li>Acceso IV 16G en ambos brazos</li>
                                <li>Monitoreo continuo — confirmar Bloqueo AV 3°</li>
                                <li><strong>Atropina 0.5 mg IV</strong> — repetir c/3-5 min hasta 3 mg máximo</li>
                                <li>Si no responde a atropina → <strong>marcapasos transcutáneo</strong> (si disponible)</li>
                                <li>Traslado inmediato a centro con cardiólogo</li>
                                <li>Comunicar tipo de bloqueo al hospital receptor</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-red-100 rounded">
                        <p className="text-sm text-red-800">
                            <strong>⚠️ Atropina en bloqueo AV infranodal:</strong> La atropina puede ser <em>ineficaz o perjudicial</em> en bloqueo AV 3° con escape infranodal (QRS ancho). En ese caso, priorizar el marcapasos transcutáneo y traslado inmediato.
                        </p>
                    </div>
                </div>

                {/* Preguntas de autoevaluación — colapsables */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Preguntas de Autoevaluación</h3>
                    <div className="space-y-3">
                        {[
                            {
                                q: '1. ¿Cuál es la primera prioridad en un paciente con sospecha de SCA?',
                                a: 'ECG de 12 derivaciones en los primeros 10 minutos para identificar STEMI. El diagnóstico temprano activa el código STEMI y reduce el tiempo puerta-balón.'
                            },
                            {
                                q: '2. ¿Cuándo NO debes dar nitroglicerina en un paciente con dolor torácico?',
                                a: 'PA sistólica < 100 mmHg, uso de sildenafil/tadalafil en las últimas 24-48 h, o sospecha de infarto de ventrículo derecho (verificar con V4R). La hipotensión resultante puede ser grave.'
                            },
                            {
                                q: '3. ¿Cuál es la profundidad correcta de compresiones torácicas en adultos?',
                                a: '5-6 cm (al menos 5 cm, no más de 6 cm). Compresiones inadecuadas (muy superficiales o demasiado profundas) reducen significativamente el gasto cardíaco generado.'
                            },
                            {
                                q: '4. ¿Qué posición es ideal para un paciente con edema pulmonar agudo?',
                                a: 'Sentado (Fowler 90°) para reducir el retorno venoso al corazón derecho, disminuir la presión hidrostática pulmonar y mejorar la ventilación. Nunca dejar acostado.'
                            },
                            {
                                q: '5. ¿Cuándo está indicado el O₂ suplementario en SCA según las guías AHA 2020?',
                                a: 'Solo cuando la SpO₂ < 94%. El O₂ de rutina en pacientes con saturación normal no mejora los resultados y puede generar vasoconstricción coronaria por hiperóxia.'
                            },
                            {
                                q: '6. ¿Qué hace a la FA diferente hemodinámicamente de otras taquicardias?',
                                a: 'En FA se pierde la "patada auricular" (contribución auricular al llenado ventricular), lo que reduce el volumen sistólico hasta un 25%. En pacientes con cardiopatía previa, esto puede precipitar falla cardíaca aguda.'
                            },
                        ].map((item, idx) => (
                            <Disclosure key={idx}>
                                {({open}) => (
                                    <div className="border border-green-200 rounded-lg overflow-hidden">
                                        <Disclosure.Button className="flex w-full justify-between items-center bg-white px-4 py-3 text-left text-sm font-medium hover:bg-green-50 transition">
                                            <span>{item.q}</span>
                                            <ChevronUpIcon className={`${open ? 'rotate-180' : ''} h-4 w-4 text-green-600 ml-2 shrink-0 transition-transform`}/>
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-4 pt-2 bg-green-50 text-sm text-gray-700">
                                            {item.a}
                                        </Disclosure.Panel>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}