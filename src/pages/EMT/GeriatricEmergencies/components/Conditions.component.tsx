export default function Conditions() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias
                    cardiovasculares en geriatría</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-red-700">Síndrome coronario
                            agudo</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Presentación atípica frecuente</li>
                            <li>Puede manifestarse como disnea</li>
                            <li>Confusión o síncope</li>
                            <li>Fatiga o debilidad</li>
                            <li>Dolor epigástrico</li>
                            <li>Mayor mortalidad</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-blue-700">Insuficiencia
                            cardíaca</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Disnea progresiva</li>
                            <li>Edema en extremidades inferiores</li>
                            <li>Ortopnea y disnea paroxística nocturna</li>
                            <li>Fatiga y debilidad</li>
                            <li>Distensión venosa yugular</li>
                            <li>Tos nocturna persistente</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-purple-700">Arritmias</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Fibrilación auricular más común</li>
                            <li>Síncope o presíncope</li>
                            <li>Palpitaciones</li>
                            <li>Alteración del estado mental</li>
                            <li>Mayor riesgo embólico</li>
                            <li>Intolerancia al ejercicio</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-orange-700">Crisis
                            hipertensiva</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>PA &gt;180/120 mmHg</li>
                            <li>Cefalea severa</li>
                            <li>Alteraciones visuales</li>
                            <li>Confusión o cambios neurológicos</li>
                            <li>Disnea por edema pulmonar</li>
                            <li>Náuseas y vómitos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias
                    respiratorias geriátricas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-green-700">Neumonía</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Presentación atípica frecuente</li>
                            <li>Puede no haber fiebre</li>
                            <li>Confusión como síntoma principal</li>
                            <li>Deterioro funcional agudo</li>
                            <li>Taquipnea sin disnea evidente</li>
                            <li>Mayor riesgo de complicaciones</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-yellow-700">EPOC
                            exacerbado</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Aumento de disnea basal</li>
                            <li>Cambio en características del esputo</li>
                            <li>Tos más frecuente</li>
                            <li>Uso de músculos accesorios</li>
                            <li>Cianosis central</li>
                            <li>Alteración del estado mental</li>
                        </ul>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-indigo-700">Embolia
                            pulmonar</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Disnea súbita</li>
                            <li>Dolor torácico pleurítico</li>
                            <li>Hemoptisis</li>
                            <li>Taquicardia</li>
                            <li>Síncope</li>
                            <li>Factores de riesgo: inmovilidad, cirugía</li>
                        </ul>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-teal-700">Aspiración</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Reflejo de deglución alterado</li>
                            <li>Disfagia por enfermedades neurológicas</li>
                            <li>Tos débil o ausente</li>
                            <li>Deterioro del estado de conciencia</li>
                            <li>Fiebre tardía</li>
                            <li>Infiltrados en lóbulos dependientes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias
                    neurológicas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-red-700">Evento
                            cerebrovascular (ACV)</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Déficit neurológico súbito</li>
                            <li>Alteración del habla o comprensión</li>
                            <li>Debilidad o parálisis facial/corporal</li>
                            <li>Alteración de la visión</li>
                            <li>Pérdida de equilibrio o coordinación</li>
                            <li>Cefalea severa súbita</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-orange-700">Delirium</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Alteración aguda del estado mental</li>
                            <li>Fluctuación durante el día</li>
                            <li>Desorganización del pensamiento</li>
                            <li>Alteración de la atención</li>
                            <li>Alucinaciones visuales o auditivas</li>
                            <li>Agitación o letargo</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-purple-700">Convulsiones</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Primera convulsión después de los 60 años</li>
                            <li>Estado postictal prolongado</li>
                            <li>Factores precipitantes múltiples</li>
                            <li>Hipoglucemia, hipoxia, infección</li>
                            <li>Interacciones medicamentosas</li>
                            <li>Mayor riesgo de complicaciones</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-blue-700">Síncope</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Pérdida transitoria de conciencia</li>
                            <li>Causas cardiogénicas frecuentes</li>
                            <li>Hipotensión ortostática</li>
                            <li>Efectos medicamentosos</li>
                            <li>Deshidratación</li>
                            <li>Arritmias cardíacas</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias
                    endocrinas y metabólicas</h2>
                <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Alteraciones
                            glucémicas</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium mb-2">Hipoglucemia:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Confusión o alteración del comportamiento</li>
                                    <li>Sudoración fría</li>
                                    <li>Temblor o convulsiones</li>
                                    <li>Coma</li>
                                    <li>Síntomas pueden ser atípicos</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Hiperglucemia:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Deshidratación severa</li>
                                    <li>Poliuria y polidipsia</li>
                                    <li>Alteración del estado mental</li>
                                    <li>Náuseas y vómitos</li>
                                    <li>Respiración de Kussmaul</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-blue-700">Alteraciones
                            electrolíticas</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div>
                                <h4 className="font-medium mb-2">Hiponatremia:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Confusión</li>
                                    <li>Letargo</li>
                                    <li>Convulsiones</li>
                                    <li>Coma</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Hiperkalemia:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Arritmias</li>
                                    <li>Debilidad muscular</li>
                                    <li>Parestesias</li>
                                    <li>Paro cardíaco</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Hipokalemia:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Debilidad muscular</li>
                                    <li>Fatiga</li>
                                    <li>Arritmias</li>
                                    <li>Parálisis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Problemas
                    geriátricos específicos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Caídas</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Principal causa de lesión en &gt;65 años</li>
                            <li>Factores intrínsecos: debilidad, mareo</li>
                            <li>Factores extrínsecos: medicamentos, entorno</li>
                            <li>Complicaciones: fracturas, TCE</li>
                            <li>Síndrome postcaída: miedo a caer</li>
                            <li>Evaluación multifactorial necesaria</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Hipotermia</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Temperatura corporal &lt;35°C</li>
                            <li>Termorregulación alterada</li>
                            <li>Factores de riesgo: medicamentos, alcohol</li>
                            <li>Bradicardia, hipotensión</li>
                            <li>Alteración del estado mental</li>
                            <li>Mortalidad alta si no se trata</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Maltrato del
                            adulto mayor</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Físico: golpes, heridas, fracturas</li>
                            <li>Psicológico: amenazas, humillación</li>
                            <li>Financiero: apropiación de bienes</li>
                            <li>Negligencia: falta de cuidados básicos</li>
                            <li>Sexual: contacto no consensuado</li>
                            <li>Signos: lesiones inconsistentes, miedo</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Polifarmacia y
                            efectos adversos</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Uso de múltiples medicamentos</li>
                            <li>Interacciones medicamentosas</li>
                            <li>Efectos adversos aumentados</li>
                            <li>Cascada terapéutica</li>
                            <li>No adherencia al tratamiento</li>
                            <li>Medicamentos potencialmente inapropiados</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}