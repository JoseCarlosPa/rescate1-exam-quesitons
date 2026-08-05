import { FaStarOfLife } from "react-icons/fa";
import { MdTimer, MdHealthAndSafety } from "react-icons/md";

export default function PrimaryAssessment() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdHealthAndSafety className="w-8 h-8 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-red-700">Evaluación Primaria (ABCDE)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    El propósito de la evaluación primaria es identificar y tratar de inmediato cualquier condición que ponga en peligro la vida. Se debe realizar en menos de 60-90 segundos.
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm font-semibold text-red-800 bg-red-100 p-3 rounded">
                    <FaStarOfLife className="w-4 h-4" />
                    <span>Si hay sangrado masivo, el protocolo cambia a X-ABCDE (control de hemorragia exanguinante primero).</span>
                </div>
            </div>

            <div className="grid gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-blue-600 mb-2 flex items-center">
                        <span className="bg-blue-100 text-blue-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">A</span>
                        Vía Aérea (Airway)
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">Evaluar permeabilidad y asegurar la vía aérea.</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>Maniobras manuales: Inclinación de cabeza (médico) / Tracción mandibular (trauma).</li>
                        <li>Limpiar y succionar (sangre, vómito).</li>
                        <li>Dispositivos: Cánulas orofaríngeas/nasofaríngeas, o vía aérea avanzada si está indicado.</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-teal-600 mb-2 flex items-center">
                        <span className="bg-teal-100 text-teal-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">B</span>
                        Ventilación (Breathing)
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">Evaluar si el paciente está respirando adecuadamente.</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>Frecuencia, ritmo, calidad y profundidad.</li>
                        <li>Auscultar ruidos pulmonares (bilaterales).</li>
                        <li>Proporcionar oxígeno o ventilación asistida (BVM) si la respiración es inadecuada.</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-red-600 mb-2 flex items-center">
                        <span className="bg-red-100 text-red-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">C</span>
                        Circulación (Circulation)
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">Evaluar el estado hemodinámico y controlar sangrados.</p>
                    <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>Pulsos: presencia, frecuencia, regularidad, calidad (radial vs carotídeo).</li>
                        <li>Piel: color (pálida, cianótica), temperatura (fría, caliente), humedad (diaforética).</li>
                        <li>Control de hemorragias mayores.</li>
                        <li>Llenado capilar (especialmente útil en pediatría).</li>
                    </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-purple-600 mb-2 flex items-center">
                        <span className="bg-purple-100 text-purple-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">D</span>
                        Déficit Neurológico (Disability)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                        <div>
                            <h4 className="font-semibold text-gray-800 text-sm">Escala AVPU</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                <li><strong>A</strong>lerta</li>
                                <li>Respuesta a estímulo <strong>V</strong>erbal</li>
                                <li>Respuesta a estímulo <strong>D</strong>oloroso</li>
                                <li><strong>I</strong>nconsciente (Unresponsive)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 text-sm">Escala de Glasgow (GCS)</h4>
                            <ul className="text-sm text-gray-600 list-disc list-inside">
                                <li><strong>Ocular (1-4):</strong> Espontánea, a la voz, al dolor, ninguna.</li>
                                <li><strong>Verbal (1-5):</strong> Orientado, confuso, inapropiadas, incomprensibles, ninguna.</li>
                                <li><strong>Motor (1-6):</strong> Obedece, localiza dolor, retira, flexión (decorticación), extensión (descerebración), ninguna.</li>
                            </ul>
                            <p className="text-xs text-red-600 mt-1 font-semibold">GCS ≤ 8 = intubación / vía aérea avanzada</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-orange-600 mb-2 flex items-center">
                        <span className="bg-orange-100 text-orange-800 w-8 h-8 rounded-full flex items-center justify-center mr-2">E</span>
                        Exposición (Exposure)
                    </h3>
                    <p className="text-sm text-gray-700">
                        Exponer áreas del cuerpo según sea necesario para encontrar lesiones ocultas (ej. trauma contuso o penetrante), manteniendo el pudor del paciente y previniendo la hipotermia (cubrir inmediatamente).
                    </p>
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center">
                    <MdTimer className="w-6 h-6 mr-2" />
                    Decisión de Transporte y Tiempos Críticos
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Pacientes Prioritarios</h4>
                        <ul className="text-sm text-gray-700 list-disc list-inside">
                            <li>Estado mental alterado</li>
                            <li>Dificultad respiratoria</li>
                            <li>Shock / Hipoperfusión</li>
                            <li>Trauma multisistémico o ML grave</li>
                            <li>Parto complicado o dolor torácico (IAM)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Conceptos de Tiempo</h4>
                        <ul className="text-sm text-gray-700 list-disc list-inside">
                            <li><strong>Periodo Dorado:</strong> 1 hora desde la lesión hasta cuidado definitivo.</li>
                            <li><strong>10 minutos de platino:</strong> El tiempo máximo que TAMP-A debería pasar en la escena en traumas graves.</li>
                            <li><strong>Revaluación:</strong> Cada 5 min (inestables) o 15 min (estables).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
