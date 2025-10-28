export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escenarios de simulación de Código Mega</h2>

            <div className="p-5 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg shadow-sm mb-4 border-l-4 border-red-500">
                <h3 className="text-xl font-semibold mb-2 text-red-700">Escenario 1: Fibrilación Ventricular (FV)</h3>
                <p className="italic text-gray-600 mb-4">
                    Hombre de 55 años colapsa en el gimnasio. Al llegar, el paciente está inconsciente,
                    no responde, sin respiración normal. El monitor muestra Fibrilación Ventricular.
                </p>
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-red-800">Acciones esperadas del equipo:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded">
                        <li><strong>Líder:</strong> Confirma paro, asigna roles, ordena inicio de RCP</li>
                        <li><strong>Compresores:</strong> Inician RCP de alta calidad (100-120/min, 5-6 cm profundidad)</li>
                        <li><strong>Desfibrilador:</strong> Prepara y administra descarga (120-200J bifásica)</li>
                        <li><strong>Líder:</strong> "Todos atrás, descarga en 3... 2... 1... DESCARGA"</li>
                        <li><strong>Compresores:</strong> Reanudan RCP inmediatamente post-descarga</li>
                        <li><strong>Acceso vascular:</strong> Establece vía IV/IO durante RCP</li>
                        <li><strong>Líder:</strong> Después de 2ª descarga, ordena Adrenalina 1mg IV</li>
                        <li><strong>Medicamentos:</strong> "Entendido, administro 1mg de Adrenalina IV... Adrenalina administrada"</li>
                        <li><strong>Líder:</strong> Después de 3ª descarga, ordena Amiodarona 300mg IV</li>
                        <li><strong>Vía aérea:</strong> Asegura oxigenación con BVM o tubo endotraqueal</li>
                        <li><strong>Líder:</strong> Cada 2 min, pausa menor a 10 seg para análisis de ritmo</li>
                        <li><strong>Equipo:</strong> Continúa ciclos hasta retorno de circulación espontánea (RCE)</li>
                    </ol>
                </div>
                <div className="bg-red-100 p-3 rounded mt-3">
                    <p className="text-sm text-red-800">
                        <strong>Puntos clave:</strong> Minimizar interrupciones, descargas rápidas,
                        comunicación clara, RCP de alta calidad continua.
                    </p>
                </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-sm mb-4 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Escenario 2: Actividad Eléctrica Sin Pulso (AESP)</h3>
                <p className="italic text-gray-600 mb-4">
                    Mujer de 68 años con antecedente de insuficiencia renal. Familiar reporta que "dejó de respirar".
                    Monitor muestra ritmo sinusal a 90 lpm, pero no hay pulso palpable.
                </p>
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-blue-800">Acciones esperadas del equipo:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded">
                        <li><strong>Líder:</strong> Confirma AESP (ritmo presente, sin pulso), inicia algoritmo no desfibrilable</li>
                        <li><strong>Compresores:</strong> RCP de alta calidad continua</li>
                        <li><strong>Acceso vascular:</strong> Vía IV/IO rápida</li>
                        <li><strong>Líder:</strong> Ordena Adrenalina 1mg IV inmediata</li>
                        <li><strong>Medicamentos:</strong> Administra Adrenalina cada 3-5 minutos</li>
                        <li><strong>Líder:</strong> "Equipo, busquemos causas reversibles. ¿Hipovolemia?"</li>
                        <li><strong>Vía aérea:</strong> Asegura oxigenación adecuada (descarta Hipoxia)</li>
                        <li><strong>Líder:</strong> "Antecedente renal... ¿Hiperkalemia? Preparen Calcio y Bicarbonato"</li>
                        <li><strong>Líder:</strong> Revisa todas las H's y T's sistemáticamente</li>
                        <li><strong>Equipo:</strong> Monitoriza capnografía, considera causas metabólicas</li>
                        <li><strong>Líder:</strong> Cada 2 min verifica ritmo y pulso</li>
                        <li><strong>Equipo:</strong> Continúa hasta identificar/tratar causa o determinar cese de esfuerzos</li>
                    </ol>
                </div>
                <div className="bg-blue-100 p-3 rounded mt-3">
                    <p className="text-sm text-blue-800">
                        <strong>Puntos clave:</strong> NO desfibrilar en AESP. Buscar activamente causas reversibles (H's y T's).
                        Considerar contexto clínico del paciente.
                    </p>
                </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg shadow-sm mb-4 border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-2 text-green-700">Escenario 3: Asistolia</h3>
                <p className="italic text-gray-600 mb-4">
                    Paciente anciano de 82 años con cáncer terminal. Familiar llama al 911 diciendo que
                    "dejó de respirar hace 5 minutos". Monitor muestra línea plana.
                </p>
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-green-800">Acciones esperadas del equipo:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded">
                        <li><strong>Líder:</strong> Confirma asistolia, verifica en 2 derivaciones (no FV fina)</li>
                        <li><strong>Líder:</strong> Pregunta por voluntades anticipadas o DNR (No Reanimación)</li>
                        <li><strong>Si procede reanimación:</strong> Inicia RCP inmediata</li>
                        <li><strong>Compresores:</strong> RCP de alta calidad</li>
                        <li><strong>Acceso vascular:</strong> Vía IV/IO</li>
                        <li><strong>Líder:</strong> Adrenalina 1mg IV cada 3-5 min</li>
                        <li><strong>Líder:</strong> Busca causas reversibles (H's y T's)</li>
                        <li><strong>Vía aérea:</strong> Asegura vía aérea avanzada y ventilación</li>
                        <li><strong>Líder:</strong> Considera calidad de vida previa y pronóstico</li>
                        <li><strong>Líder:</strong> Si no hay cambio después de múltiples ciclos, considera cese de esfuerzos</li>
                        <li><strong>Líder:</strong> Comunica decisión al equipo y familia con empatía</li>
                    </ol>
                </div>
                <div className="bg-green-100 p-3 rounded mt-3">
                    <p className="text-sm text-green-800">
                        <strong>Puntos clave:</strong> Asistolia tiene peor pronóstico. Importante considerar
                        tiempo de paro, comorbilidades y calidad de vida. Verificar que no sea FV fina.
                        Respetar voluntades anticipadas.
                    </p>
                </div>
            </div>

            <div className="p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h3 className="text-xl font-semibold mb-2 text-purple-700">Escenario 4: Taquicardia Ventricular sin pulso (TVsp)</h3>
                <p className="italic text-gray-600 mb-4">
                    Paciente de 47 años con historial de infarto previo. Testigos reportan que se quejó
                    de dolor torácico y colapsó. Monitor muestra TV de complejo ancho a 180 lpm sin pulso.
                </p>
                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-purple-800">Acciones esperadas del equipo:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 bg-white p-4 rounded">
                        <li><strong>Líder:</strong> Identifica TVsp (ritmo desfibrilable), ordena RCP</li>
                        <li><strong>Compresores:</strong> Inician compresiones de alta calidad</li>
                        <li><strong>Desfibrilador:</strong> Carga desfibrilador durante RCP</li>
                        <li><strong>Líder:</strong> "Pausa para descarga... todos atrás... DESCARGA"</li>
                        <li><strong>Compresores:</strong> RCP inmediata post-descarga (2 minutos)</li>
                        <li><strong>Acceso vascular:</strong> Vía IV/IO durante RCP</li>
                        <li><strong>Líder:</strong> Tras 2ª descarga, ordena Adrenalina 1mg IV</li>
                        <li><strong>Líder:</strong> Tras 3ª descarga, ordena Amiodarona 300mg IV</li>
                        <li><strong>Vía aérea:</strong> Intubación endotraqueal, ventilación continua</li>
                        <li><strong>Líder:</strong> Busca causas (probable IAM - Trombosis coronaria)</li>
                        <li><strong>Líder:</strong> Si hay RCE, prepara para cateterismo urgente</li>
                        <li><strong>Equipo:</strong> Monitoriza signos de RCE (pulso, capnografía, presión arterial)</li>
                    </ol>
                </div>
                <div className="bg-purple-100 p-3 rounded mt-3">
                    <p className="text-sm text-purple-800">
                        <strong>Puntos clave:</strong> TVsp se trata igual que FV (ritmo desfibrilable).
                        Contexto clínico sugiere IAM agudo. Si hay RCE, considerar terapia de reperfusión urgente.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6 mt-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">📋 Evaluación del desempeño del equipo</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-orange-700 mb-2">Aspectos técnicos:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>✓ Calidad de compresiones (frecuencia, profundidad)</li>
                            <li>✓ Minimización de pausas (FCT &gt;80%)</li>
                            <li>✓ Manejo apropiado de vía aérea</li>
                            <li>✓ Administración correcta de medicamentos</li>
                            <li>✓ Uso apropiado del desfibrilador</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-orange-700 mb-2">Aspectos no técnicos:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>✓ Liderazgo efectivo del líder</li>
                            <li>✓ Comunicación de circuito cerrado</li>
                            <li>✓ Trabajo en equipo y coordinación</li>
                            <li>✓ Manejo del estrés</li>
                            <li>✓ Toma de decisiones bajo presión</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Consejo para la práctica</h3>
                <p className="text-blue-700 text-sm">
                    "La simulación es un espacio seguro para cometer errores y aprender. Después de cada escenario,
                    realiza un debriefing constructivo donde el equipo identifique fortalezas y áreas de mejora.
                    La práctica repetida de estos escenarios mejora dramáticamente el desempeño real en situaciones críticas."
                </p>
            </div>
        </div>
    );
}

