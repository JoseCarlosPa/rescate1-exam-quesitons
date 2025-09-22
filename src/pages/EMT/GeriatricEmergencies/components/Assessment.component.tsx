export default function Assessment(){
    return(<div className="space-y-6">
        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cambios
                fisiológicos del envejecimiento</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-blue-700">Sistema
                        cardiovascular</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Disminución de la frecuencia cardíaca máxima</li>
                        <li>Rigidez arterial aumentada</li>
                        <li>Menor capacidad de adaptación al estrés</li>
                        <li>Aumento de la presión arterial sistólica</li>
                        <li>Disminución del gasto cardíaco</li>
                        <li>Mayor riesgo de arritmias</li>
                    </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-green-700">Sistema
                        respiratorio</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Pérdida de elasticidad pulmonar</li>
                        <li>Disminución de la capacidad vital</li>
                        <li>Reducción del intercambio gaseoso</li>
                        <li>Debilitamiento de músculos respiratorios</li>
                        <li>Menor respuesta a hipoxia y hipercapnia</li>
                        <li>Aumento del riesgo de aspiración</li>
                    </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-purple-700">Sistema
                        nervioso</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Disminución de la masa cerebral</li>
                        <li>Reducción de neurotransmisores</li>
                        <li>Alteración de los reflejos</li>
                        <li>Cambios en el equilibrio y coordinación</li>
                        <li>Alteración del ciclo sueño-vigilia</li>
                        <li>Mayor susceptibilidad a delirium</li>
                    </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-orange-700">Sistema
                        renal</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Disminución de la función renal</li>
                        <li>Reducción de la capacidad de concentración</li>
                        <li>Mayor riesgo de deshidratación</li>
                        <li>Alteración del equilibrio electrolítico</li>
                        <li>Metabolismo más lento de medicamentos</li>
                        <li>Menor capacidad de adaptación al estrés</li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación
                específica del paciente geriátrico</h2>
            <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                    <h3 className="font-medium text-lg mb-2 text-yellow-700">Presentación
                        atípica de enfermedades</h3>
                    <p className="text-gray-700 mb-2">
                        Los adultos mayores frecuentemente presentan síntomas atípicos o
                        ausentes:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Infarto al miocardio sin dolor torácico</li>
                        <li>Neumonía sin fiebre</li>
                        <li>Infecciones sin leucocitosis</li>
                        <li>Depresión que simula demencia</li>
                        <li>Delirium que simula demencia</li>
                    </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h3 className="font-medium text-lg mb-2 text-red-700">Signos de alarma
                        específicos</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Cambios súbitos en el estado mental</li>
                            <li>Deterioro funcional agudo</li>
                            <li>Caídas recurrentes</li>
                            <li>Incontinencia de nueva aparición</li>
                            <li>Pérdida de peso inexplicable</li>
                        </ul>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Aislamiento social súbito</li>
                            <li>Descuido del autocuidado</li>
                            <li>Cambios en patrones de sueño</li>
                            <li>Pérdida de apetito</li>
                            <li>Agitación o apatía nuevas</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Historia
                clínica especializada</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-800">Información
                        esencial</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Medicamentos:</strong> Lista completa incluyendo OTC
                        </li>
                        <li><strong>Alergias:</strong> Medicamentos y alimentos</li>
                        <li><strong>Historia médica:</strong> Comorbilidades múltiples</li>
                        <li><strong>Estado funcional basal:</strong> Actividades de la vida
                            diaria
                        </li>
                        <li><strong>Estado cognitivo basal:</strong> Demencia conocida</li>
                        <li><strong>Soporte social:</strong> Cuidadores, familia</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-800">Fuentes de
                        información</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Familia/cuidadores:</strong> Información más confiable
                        </li>
                        <li><strong>Documentos médicos:</strong> Lista de medicamentos</li>
                        <li><strong>Servicios de emergencia previos:</strong> Historial</li>
                        <li><strong>Médico de cabecera:</strong> Contactar si es posible
                        </li>
                        <li><strong>Farmacia:</strong> Lista de medicamentos</li>
                        <li><strong>Observación del entorno:</strong> Signos de descuido
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación
                del estado mental</h2>
            <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-indigo-700">Escala de
                        Glasgow modificada para geriatría</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead>
                            <tr className="bg-gray-100">
                                <th className="py-2 px-4 border">Respuesta</th>
                                <th className="py-2 px-4 border">Puntuación</th>
                                <th className="py-2 px-4 border">Consideraciones
                                    geriátricas
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="py-2 px-4 border font-medium">Apertura
                                    ocular
                                </td>
                                <td className="py-2 px-4 border">1-4</td>
                                <td className="py-2 px-4 border">Considerar problemas
                                    visuales
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-medium">Respuesta
                                    verbal
                                </td>
                                <td className="py-2 px-4 border">1-5</td>
                                <td className="py-2 px-4 border">Considerar problemas
                                    auditivos
                                </td>
                            </tr>
                            <tr>
                                <td className="py-2 px-4 border font-medium">Respuesta
                                    motora
                                </td>
                                <td className="py-2 px-4 border">1-6</td>
                                <td className="py-2 px-4 border">Considerar limitaciones
                                    articulares
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-gray-700">Diferenciación:
                        Delirium vs. Demencia vs. Depresión</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-red-100 p-3 rounded">
                            <h4 className="font-medium text-red-700 mb-2">Delirium</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Inicio agudo</li>
                                <li>• Fluctuante</li>
                                <li>• Alteración de conciencia</li>
                                <li>• Reversible</li>
                                <li>• Causa médica</li>
                            </ul>
                        </div>
                        <div className="bg-blue-100 p-3 rounded">
                            <h4 className="font-medium text-blue-700 mb-2">Demencia</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Inicio gradual</li>
                                <li>• Progresivo</li>
                                <li>• Conciencia normal</li>
                                <li>• Irreversible</li>
                                <li>• Deterioro cognitivo</li>
                            </ul>
                        </div>
                        <div className="bg-green-100 p-3 rounded">
                            <h4 className="font-medium text-green-700 mb-2">Depresión</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Inicio variable</li>
                                <li>• Episódico</li>
                                <li>• Conciencia normal</li>
                                <li>• Tratable</li>
                                <li>• Alteración del ánimo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                especiales en la evaluación</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="bg-pink-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-pink-700">Comunicación
                            efectiva</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Hablar despacio y claramente</li>
                            <li>Mantener contacto visual</li>
                            <li>Usar preguntas simples</li>
                            <li>Permitir tiempo para responder</li>
                            <li>Verificar comprensión auditiva</li>
                            <li>Usar lenguaje apropiado para la edad</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-cyan-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-cyan-700">Examen físico
                            adaptado</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Exposición gradual para evitar hipotermia</li>
                            <li>Movimientos suaves y graduales</li>
                            <li>Consideración de limitaciones articulares</li>
                            <li>Evaluación de la piel (úlceras, hematomas)</li>
                            <li>Atención a signos de maltrato</li>
                            <li>Evaluación del estado nutricional</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}