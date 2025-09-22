import {RiFileList3Line} from "react-icons/ri";

export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                prácticos y análisis legal</h2>
            <p className="text-gray-600 mb-6">
                Analiza estos casos desde la perspectiva legal y ética. Cada situación presenta
                dilemas reales que enfrentan los TAMP en campo.
            </p>

            <div
                className="p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1
                    </div>
                    <h3 className="text-xl font-semibold text-red-700">Caso: Negligencia por
                        documentación deficiente</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> TAMP atiende paciente con dolor torácico
                        intenso. Administra oxígeno y nitroglicerina,
                        pero no registra signos vitales iniciales ni finales en el FRAP. Solo
                        anota "dolor torácico, trasladado estable".
                        Paciente fallece en hospital por IAM.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">⚖️ Problemas legales
                            identificados:</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                            <li>• Documentación inadecuada e incompleta</li>
                            <li>• Falta de registro de signos vitales</li>
                            <li>• No documenta medicamentos administrados</li>
                            <li>• Imposible probar calidad de atención</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">✅ Cómo prevenir:</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                            <li>• Registrar signos vitales completos</li>
                            <li>• Documentar todos los medicamentos</li>
                            <li>• Anotar horarios de administración</li>
                            <li>• Describir respuesta del paciente</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-red-100 rounded">
                    <strong className="text-red-800">Consecuencias legales:</strong>
                    <span className="text-red-700 text-sm"> Demanda por negligencia, suspensión de certificación, responsabilidad civil.</span>
                </div>
            </div>

            <div
                className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2
                    </div>
                    <h3 className="text-xl font-semibold text-blue-700">Caso: Rechazo de
                        atención por paciente competente</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> Motociclista de 35 años, accidente menor con
                        abrasiones superficiales.
                        Paciente consciente, orientado, camina sin dificultad. Rechaza traslado
                        a hospital alegando "estar bien".
                        TAMP insiste pero paciente se molesta y amenaza con irse.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">⚖️ Aspectos legales
                            clave:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Paciente competente tiene derecho a rechazar</li>
                            <li>• Debe comprender riesgos de no tratarse</li>
                            <li>• TAMP debe informar consecuencias posibles</li>
                            <li>• Documentación del rechazo es esencial</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">✅ Protocolo
                            correcto:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Evaluar competencia mental</li>
                            <li>• Explicar riesgos (lesión interna, sangrado)</li>
                            <li>• Documentar conversación en FRAP</li>
                            <li>• Obtener firma de rechazo si es posible</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded">
                    <strong className="text-blue-800">Resultado legal:</strong>
                    <span className="text-blue-700 text-sm"> Rechazo válido si está bien documentado. TAMP protegido legalmente.</span>
                </div>
            </div>

            <div
                className="p-6 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3
                    </div>
                    <h3 className="text-xl font-semibold text-orange-700">Caso: Abandono del
                        paciente</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-orange-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> TAMP responde a emergencia psiquiátrica.
                        Paciente agitado pero cooperativo tras medicación.
                        Al llegar al hospital, la sala de emergencias está saturada. TAMP deja
                        al paciente en la recepción con enfermera
                        de triage y se retira sin entregar formalmente el reporte.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">❌ Errores
                            cometidos:</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                            <li>• No transferir cuidado formalmente</li>
                            <li>• No entregar reporte médico completo</li>
                            <li>• Dejar paciente psiquiátrico sin supervisión</li>
                            <li>• No asegurar continuidad de cuidado</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">✅ Procedimiento
                            correcto:</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                            <li>• Esperar a entregar a médico o enfermero</li>
                            <li>• Dar reporte verbal completo</li>
                            <li>• Entregar documentación escrita</li>
                            <li>• Confirmar que personal acepta cuidado</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-orange-100 rounded">
                    <strong className="text-orange-800">Consecuencias legales:</strong>
                    <span className="text-orange-700 text-sm"> Demanda por abandono, responsabilidad si paciente sufre daños posteriores.</span>
                </div>
            </div>

            <div
                className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg shadow-sm mb-6">
                <div className="flex items-center mb-3">
                    <div
                        className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4
                    </div>
                    <h3 className="text-xl font-semibold text-purple-700">Caso: Violación de
                        confidencialidad</h3>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-400 mb-4">
                    <p className="text-gray-700 mb-3">
                        <strong>Escenario:</strong> TAMP atiende a personalidad pública por
                        sobredosis de drogas.
                        Posteriormente, en reunión social, comenta detalles del caso con amigos.
                        La información llega a medios
                        de comunicación y se publica la historia.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">⚖️ Violaciones
                            legales:</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Violación de confidencialidad médica</li>
                            <li>• Incumplimiento de Ley de Protección de Datos</li>
                            <li>• Falta profesional grave</li>
                            <li>• Posible daño a la reputación del paciente</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-800 mb-2">📋 Principios de
                            confidencialidad:</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Información médica es siempre privada</li>
                            <li>• No comentar casos fuera del ámbito médico</li>
                            <li>• Proteger identidad de pacientes</li>
                            <li>• Solo divulgar con autorización o por ley</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 p-3 bg-purple-100 rounded">
                    <strong className="text-purple-800">Consecuencias legales:</strong>
                    <span className="text-purple-700 text-sm"> Demanda civil, multas por protección de datos, suspensión de certificación.</span>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
                    <RiFileList3Line className="mr-2"/>
                    Ejercicio de autoevaluación legal
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-semibold text-green-800 mb-2">🤔 Pregunta de
                            reflexión:</h4>
                        <p className="text-gray-700 text-sm mb-3">
                            Un menor de 16 años, consciente y orientado, rechaza traslado tras
                            accidente automovilístico.
                            Sus padres no están presentes. ¿Qué harías?
                        </p>
                        <div className="bg-green-50 p-3 rounded">
                            <strong className="text-green-800 text-xs">Consideraciones
                                legales:</strong>
                            <ul className="text-green-700 text-xs mt-1 space-y-1">
                                <li>• Menores no pueden rechazar tratamiento</li>
                                <li>• Consentimiento de padres es requerido</li>
                                <li>• En emergencia: consentimiento implícito</li>
                                <li>• Priorizar bienestar del menor</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-semibold text-green-800 mb-2">✅ Plan de acción
                            recomendado:</h4>
                        <ol className="text-green-700 text-sm space-y-2">
                            <li>1. <strong>Evaluar:</strong> ¿Hay lesiones evidentes o riesgo?
                            </li>
                            <li>2. <strong>Contactar:</strong> Padres/tutores inmediatamente
                            </li>
                            <li>3. <strong>Explicar:</strong> Importancia de evaluación médica
                            </li>
                            <li>4. <strong>Documentar:</strong> Todo el proceso en FRAP</li>
                            <li>5. <strong>Trasladar:</strong> Si hay cualquier duda sobre
                                lesiones
                            </li>
                            <li>6. <strong>Notificar:</strong> Autoridades si padres no
                                localizables
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}