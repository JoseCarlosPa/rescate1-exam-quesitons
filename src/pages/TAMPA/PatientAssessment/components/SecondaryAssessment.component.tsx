import { FaStethoscope, FaHeartbeat } from "react-icons/fa";
import { BsClipboard2HeartFill } from "react-icons/bs";
import { MdQuestionAnswer } from "react-icons/md";
import { GiBodyHeight } from "react-icons/gi";

export default function SecondaryAssessment() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaStethoscope className="w-8 h-8 text-blue-500 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-700">Evaluación Secundaria</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    La evaluación secundaria se realiza después de tratar problemas que amenazan la vida. Consiste en una anamnesis estructurada (historial médico), toma de signos vitales completos y un examen físico minucioso enfocado o de cabeza a pies.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Historial SAMPLE */}
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-indigo-700 mb-3 flex items-center border-b pb-2">
                        <BsClipboard2HeartFill className="w-5 h-5 mr-2" />
                        Historial SAMPLE
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-3">
                        <li className="flex items-start">
                            <span className="font-bold text-indigo-600 w-6">S</span>
                            <div><strong>Síntomas:</strong> ¿Qué siente? (Signos = lo que vemos, Síntomas = lo que siente el paciente)</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-indigo-600 w-6">A</span>
                            <div><strong>Alergias:</strong> A medicamentos, alimentos, insectos, ambientales.</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-indigo-600 w-6">M</span>
                            <div><strong>Medicamentos:</strong> ¿Toma algún medicamento, suplemento o droga recreativa?</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-indigo-600 w-6">P</span>
                            <div><strong>Padecimientos / Pertinentes antecedentes:</strong> Enfermedades crónicas, cirugías previas.</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-indigo-600 w-6">L</span>
                            <div><strong>Last meal (Última comida):</strong> ¿Qué y cuándo comió/bebió por última vez?</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-indigo-600 w-6">E</span>
                            <div><strong>Eventos:</strong> ¿Qué estaba haciendo cuando comenzaron los síntomas o el accidente?</div>
                        </li>
                    </ul>
                </div>

                {/* Historial OPQRST */}
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-purple-700 mb-3 flex items-center border-b pb-2">
                        <MdQuestionAnswer className="w-5 h-5 mr-2" />
                        Evaluación del Dolor (OPQRST)
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-3">
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 w-6">O</span>
                            <div><strong>Onset (Inicio):</strong> ¿Fue repentino o gradual? ¿Qué estaba haciendo?</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 w-6">P</span>
                            <div><strong>Provoca/Palia:</strong> ¿Algo lo empeora o lo mejora? (ej. posición, esfuerzo).</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 w-6">Q</span>
                            <div><strong>Quality (Calidad):</strong> Describa el dolor (opresivo, punzante, ardor, desgarro).</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 w-6">R</span>
                            <div><strong>Región/Radiación:</strong> ¿Dónde le duele exactamente? ¿Se mueve hacia otra parte?</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 w-6">S</span>
                            <div><strong>Severidad:</strong> En una escala del 1 al 10 (donde 10 es el peor dolor).</div>
                        </li>
                        <li className="flex items-start">
                            <span className="font-bold text-purple-600 w-6">T</span>
                            <div><strong>Tiempo/Tendencia:</strong> ¿Cuánto tiempo lleva doliendo? ¿Ha cambiado?</div>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <FaHeartbeat className="w-5 h-5 mr-2 text-red-500" />
                    Signos Vitales Normales (Adulto)
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 p-3 rounded border">
                        <div className="text-xs text-gray-500 font-semibold">Respiración (FR)</div>
                        <div className="font-bold text-lg">12 - 20 rpm</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border">
                        <div className="text-xs text-gray-500 font-semibold">Pulso (FC)</div>
                        <div className="font-bold text-lg">60 - 100 lpm</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border">
                        <div className="text-xs text-gray-500 font-semibold">Presión Arterial (TA)</div>
                        <div className="font-bold text-lg">90/60 - 140/90</div>
                    </div>
                    <div className="bg-gray-50 p-3 rounded border">
                        <div className="text-xs text-gray-500 font-semibold">SpO2</div>
                        <div className="font-bold text-lg">≥ 95%</div>
                    </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                    <em>Nota:</em> Signos vitales normales NO descartan choque compensado en sus fases iniciales.
                </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                    <GiBodyHeight className="w-6 h-6 mr-2" />
                    Examen Físico y DCAP-BTLS
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                    Para pacientes de trauma o médicos inconsistentes, realizar examen detallado de cabeza a pies usando la mnemotecnia <strong>DCAP-BTLS</strong>:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <ul className="text-sm font-semibold text-gray-800 space-y-1">
                            <li><span className="text-orange-600">D</span>eformidad</li>
                            <li><span className="text-orange-600">C</span>ontusión</li>
                            <li><span className="text-orange-600">A</span>brasión</li>
                            <li><span className="text-orange-600">P</span>enetración / Punción</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="text-sm font-semibold text-gray-800 space-y-1">
                            <li><span className="text-orange-600">B</span>urns (Quemaduras)</li>
                            <li><span className="text-orange-600">T</span>enderness (Sensibilidad)</li>
                            <li><span className="text-orange-600">L</span>aceración</li>
                            <li><span className="text-orange-600">S</span>welling (Hinchazón)</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-700">
                    <strong>Hallazgos específicos:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><strong>Cabeza:</strong> Pupilas PERRL (iguales, redondas, reactivas), Signo de Battle (equimosis retroauricular = fractura base cráneo), ojos de mapache.</li>
                        <li><strong>Cuello:</strong> Venas yugulares distendidas (taponamiento, neumotórax), desviación traqueal.</li>
                        <li><strong>Tórax:</strong> Ruidos pulmonares ausentes (neumotórax), crepitación subcutánea.</li>
                        <li><strong>Abdomen:</strong> Rigidez, defensa, masas pulsátiles.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
