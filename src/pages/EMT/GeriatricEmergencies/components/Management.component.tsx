export default function Management() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                    farmacológicas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Cambios
                            farmacocinéticos</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Absorción:</strong> Reducción del ácido gástrico</li>
                            <li><strong>Distribución:</strong> Aumento de grasa corporal,
                                disminución de agua
                            </li>
                            <li><strong>Metabolismo:</strong> Función hepática reducida</li>
                            <li><strong>Eliminación:</strong> Función renal disminuida</li>
                            <li><strong>Resultado:</strong> Mayor duración y efectos de
                                medicamentos
                            </li>
                            <li><strong>Principio:</strong> "Comenzar lento, ir despacio"</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-red-700">Medicamentos de
                            alto riesgo</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Benzodiacepinas:</strong> Riesgo de caídas y confusión
                            </li>
                            <li><strong>Anticolinérgicos:</strong> Confusión, retención urinaria
                            </li>
                            <li><strong>Opioides:</strong> Depresión respiratoria, confusión
                            </li>
                            <li><strong>Antipsicóticos:</strong> Síntomas extrapiramidales</li>
                            <li><strong>Diuréticos:</strong> Desequilibrio electrolítico</li>
                            <li><strong>Anticoagulantes:</strong> Riesgo de sangrado</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Dosificación
                    de medicamentos de emergencia</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Medicamento</th>
                            <th className="py-2 px-4 border">Dosis estándar adulto</th>
                            <th className="py-2 px-4 border">Ajuste geriátrico</th>
                            <th className="py-2 px-4 border">Consideraciones especiales</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Morfina</td>
                            <td className="py-2 px-4 border">2-5 mg IV</td>
                            <td className="py-2 px-4 border">1-2 mg IV</td>
                            <td className="py-2 px-4 border">Monitorear función respiratoria
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Lorazepam</td>
                            <td className="py-2 px-4 border">2-4 mg IV</td>
                            <td className="py-2 px-4 border">0.5-1 mg IV</td>
                            <td className="py-2 px-4 border">Evitar si es posible</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Furosemida</td>
                            <td className="py-2 px-4 border">20-40 mg IV</td>
                            <td className="py-2 px-4 border">20 mg IV inicial</td>
                            <td className="py-2 px-4 border">Vigilar función renal</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Nitroglicerina</td>
                            <td className="py-2 px-4 border">0.4 mg SL</td>
                            <td className="py-2 px-4 border">0.4 mg SL</td>
                            <td className="py-2 px-4 border">Precaución con hipotensión</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo
                    de la vía aérea en geriatría</h2>
                <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-blue-700">Consideraciones
                            anatómicas</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Pérdida de dientes puede complicar el sellado de mascarilla</li>
                            <li>Artritis cervical limita la extensión del cuello</li>
                            <li>Pérdida de elasticidad de tejidos</li>
                            <li>Edema de glotis más frecuente</li>
                            <li>Calcificación de cartílagos laríngeos</li>
                            <li>Atrofia de músculos respiratorios</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-green-700">Técnicas
                            adaptadas</h3>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Posicionamiento cuidadoso evitando hiperextensión</li>
                            <li>Uso de cánulas orofaríngeas de tamaño apropiado</li>
                            <li>BVM con presiones más bajas para evitar distensión gástrica</li>
                            <li>Aspiración frecuente por mayor producción de secreciones</li>
                            <li>Oxigenación previa prolongada antes de procedimientos</li>
                            <li>Considerar dispositivos supraglóticos como primera línea</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Acceso
                    vascular y líquidos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-orange-700">Acceso IV en
                            geriatría</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Venas frágiles:</strong> Usar catéteres de menor calibre
                            </li>
                            <li><strong>Piel delgada:</strong> Mayor riesgo de hematomas</li>
                            <li><strong>Deshidratación frecuente:</strong> Venas colapsadas</li>
                            <li><strong>Alternativas:</strong> Acceso intraóseo más frecuente
                            </li>
                            <li><strong>Sitios preferidos:</strong> Antebrazo, evitar dorso de
                                mano
                            </li>
                            <li><strong>Técnica:</strong> Tracción suave de la piel</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-purple-700">Administración
                            de líquidos</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Precaución:</strong> Menor capacidad de manejar
                                sobrecarga
                            </li>
                            <li><strong>Bolos pequeños:</strong> 250-500 ml máximo inicial</li>
                            <li><strong>Monitorización:</strong> Signos de sobrecarga
                                (crepitantes)
                            </li>
                            <li><strong>Velocidad controlada:</strong> Evitar infusión rápida
                            </li>
                            <li><strong>Tipo de solución:</strong> Cristaloides isotónicos</li>
                            <li><strong>Reevaluación continua:</strong> Respuesta hemodinámica
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Transporte
                    y movilización</h2>
                <div className="space-y-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-indigo-700">Prevención de
                            lesiones durante el transporte</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Acolchado adicional para proteger prominencias óseas</li>
                                <li>Evitar hiperextensión de articulaciones</li>
                                <li>Mantener alineación de la columna</li>
                                <li>Protección contra hipotermia</li>
                                <li>Fijación suave pero segura</li>
                            </ul>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Monitorización continua de signos vitales</li>
                                <li>Posicionamiento para optimizar ventilación</li>
                                <li>Acceso fácil para intervenciones</li>
                                <li>Comunicación tranquilizadora</li>
                                <li>Evaluación frecuente del dolor</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-teal-700">Dispositivos de
                            asistencia</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Tabla espinal:</strong> Usar almohadillado extra</li>
                            <li><strong>Collarín cervical:</strong> Ajuste cuidadoso por
                                artritis
                            </li>
                            <li><strong>Férulas:</strong> Considerar osteoporosis</li>
                            <li><strong>Camilla:</strong> Posición Fowler para disnea</li>
                            <li><strong>Oxígeno:</strong> Dispositivos cómodos y seguros</li>
                            <li><strong>Mantas térmicas:</strong> Prevención de hipotermia</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicación
                    y aspectos psicosociales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-pink-50 p-4 rounded-lg">
                            <h3 className="font-medium text-lg mb-2 text-pink-700">Técnicas de
                                comunicación</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Hablar lenta y claramente</li>
                                <li>Mantener contacto visual</li>
                                <li>Verificar comprensión</li>
                                <li>Usar lenguaje simple y directo</li>
                                <li>Permitir tiempo para respuestas</li>
                                <li>Mostrar respeto y dignidad</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-cyan-50 p-4 rounded-lg">
                            <h3 className="font-medium text-lg mb-2 text-cyan-700">Manejo de la
                                ansiedad</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li>Explicar procedimientos antes de realizarlos</li>
                                <li>Incluir a familiares cuando sea apropiado</li>
                                <li>Proporcionar tranquilidad constante</li>
                                <li>Respetar preferencias culturales</li>
                                <li>Manejar dolor y malestar físico</li>
                                <li>Evitar procedimientos innecesarios</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Decisiones
                    de fin de vida</h2>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-medium text-lg mb-2 text-gray-800">Directivas
                                anticipadas</h3>
                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                <li><strong>DNR (Do Not Resuscitate):</strong> No realizar RCP
                                </li>
                                <li><strong>POLST:</strong> Órdenes para tratamiento de soporte
                                    vital
                                </li>
                                <li><strong>Testamento vital:</strong> Preferencias del paciente
                                </li>
                                <li><strong>Poder legal médico:</strong> Designación de tomador
                                    de decisiones
                                </li>
                            </ul>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded">
                            <h4 className="font-medium text-yellow-800 mb-2">⚠️ Principios
                                importantes:</h4>
                            <ul className="list-disc list-inside space-y-1 text-yellow-800 text-sm">
                                <li>Siempre proporcionar cuidado de confort</li>
                                <li>Respetar la autonomía del paciente</li>
                                <li>Consultar con dirección médica cuando haya dudas</li>
                                <li>Documentar decisiones y acciones claramente</li>
                                <li>En duda, actuar para preservar la vida</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}