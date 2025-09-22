import {FaMicrophone} from "react-icons/fa";
import {BsChatDots} from "react-icons/bs";
import {MdHeadset, MdRecordVoiceOver} from "react-icons/md";
import {AiOutlineWarning} from "react-icons/ai";

export default function Radio() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicación por radio y reporte
                verbal</h2>
            <p className="text-gray-600 mb-6">
                La radio es tu línea de vida en campo. Una comunicación efectiva por radio puede acelerar el tratamiento
                y salvar vidas.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Técnica de radio */}
                <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaMicrophone className="w-8 h-8 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">Técnica de comunicación por radio</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded">
                            <strong className="text-blue-800">Antes de transmitir:</strong>
                            <ul className="text-sm text-blue-700 mt-1">
                                <li>• Organiza mentalmente tu mensaje</li>
                                <li>• Presiona PTT (Push-To-Talk) y espera 1 segundo</li>
                                <li>• Identifícate claramente</li>
                                <li>• Confirma que el canal está libre</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-3 rounded">
                            <strong className="text-blue-800">Durante la transmisión:</strong>
                            <ul className="text-sm text-blue-700 mt-1">
                                <li>• Habla claro y despacio</li>
                                <li>• Mantén el micrófono 2-3 cm de la boca</li>
                                <li>• Usa frases cortas y pausas</li>
                                <li>• Evita muletillas ("ehh", "umm")</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Estructura SBAR */}
                <div className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <BsChatDots className="w-8 h-8 text-green-500 mr-3"/>
                        <h3 className="text-xl font-bold text-green-700">Estructura SBAR para reportes</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded">
                            <strong className="text-green-800">S - Situación:</strong>
                            <p className="text-sm text-green-700 mt-1">
                                Identifica al paciente, ubicación, y queja principal en una frase.
                            </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <strong className="text-green-800">B - Background (Antecedentes):</strong>
                            <p className="text-sm text-green-700 mt-1">
                                Historia médica relevante, medicamentos, alergias (SAMPLE).
                            </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <strong className="text-green-800">A - Assessment (Evaluación):</strong>
                            <p className="text-sm text-green-700 mt-1">
                                Signos vitales, hallazgos físicos, impresión clínica.
                            </p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <strong className="text-green-800">R - Recommendation (Recomendación):</strong>
                            <p className="text-sm text-green-700 mt-1">
                                Tratamiento realizado, ETA, solicitud de recursos adicionales.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                    <MdHeadset className="mr-2"/>
                    Ejemplo de reporte de radio completo
                </h3>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400">
                    <div className="space-y-2 text-sm">
                        <p><strong className="text-purple-800">TAMP:</strong> <span className="text-gray-700">"Hospital Central, ambulancia 15"</span>
                        </p>
                        <p><strong className="text-purple-800">Hospital:</strong> <span className="text-gray-700">"Ambulancia 15, Hospital Central, adelante"</span>
                        </p>
                        <p><strong className="text-purple-800">TAMP:</strong> <span className="text-gray-700">"Hospital Central, tenemos masculino de 58 años con dolor torácico opresivo de 30 minutos de evolución."</span>
                        </p>
                        <p className="ml-4 text-gray-600">"Antecedentes: hipertensión, diabetes, alérgico a penicilina,
                            toma metformina y enalapril."</p>
                        <p className="ml-4 text-gray-600">"Signos vitales: FC 110, PA 160/95, FR 24, SatO2 94% ambiente.
                            Paciente diaforético, dolor 8/10."</p>
                        <p className="ml-4 text-gray-600">"Administrado oxígeno 4L, nitroglicerina sublingual, aspirina
                            325mg. ETA 8 minutos."</p>
                        <p><strong className="text-purple-800">Hospital:</strong> <span className="text-gray-700">"Copiado ambulancia 15, activando protocolo IAM, trauma 1 preparado"</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Errores comunes */}
                <div className="bg-white border border-red-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <AiOutlineWarning className="w-6 h-6 text-red-500 mr-3"/>
                        <h3 className="text-lg font-semibold text-red-700">Errores comunes a evitar</h3>
                    </div>
                    <ul className="space-y-2 text-red-700 text-sm">
                        <li>• <strong>Hablar muy rápido</strong> - Reduce comprensión</li>
                        <li>• <strong>Información innecesaria</strong> - Satura el canal</li>
                        <li>• <strong>No confirmar recepción</strong> - Genera errores</li>
                        <li>• <strong>Usar jerga o modismos</strong> - Confunde al receptor</li>
                        <li>• <strong>Transmitir emociones</strong> - Mantener profesionalismo</li>
                        <li>• <strong>Violar confidencialidad</strong> - Usar iniciales, no nombres</li>
                    </ul>
                </div>

                {/* Códigos de radio */}
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <MdRecordVoiceOver className="w-6 h-6 text-gray-500 mr-3"/>
                        <h3 className="text-lg font-semibold text-gray-700">Códigos de radio básicos</h3>
                    </div>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="font-medium">10-4:</span>
                            <span className="text-gray-600">Mensaje recibido/entendido</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">10-8:</span>
                            <span className="text-gray-600">En servicio/disponible</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">10-7:</span>
                            <span className="text-gray-600">Fuera de servicio</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">10-19:</span>
                            <span className="text-gray-600">Regresando a base</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">ETA:</span>
                            <span className="text-gray-600">Tiempo estimado de llegada</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Code 3:</span>
                            <span className="text-gray-600">Emergencia (luces y sirena)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚡ Comunicación en situaciones críticas</h3>
                <p className="text-yellow-700 text-sm">
                    <strong>En emergencias extremas:</strong> Usa lenguaje claro y directo. "EMERGENCIA, EMERGENCIA"
                    para prioridad máxima.
                    Reporta estado del paciente, recursos necesarios y ETA. Mantén la calma en tu voz para transmitir
                    confianza al equipo receptor.
                </p>
            </div>
        </div>
    );
}