import {FiAlertTriangle, FiHeart} from "react-icons/fi";
import {MdCheckCircle} from "react-icons/md";

export default function Diseases() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <FiHeart className="w-6 h-6 mr-2 text-orange-500"/>
                Enfermedades Cardiovasculares Comunes en México (2025)
            </h2>

            {/* Principales causas */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4">Principales Causas de Muerte Cardiovascular</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3">Estadísticas México 2025:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>1°.</strong> Enfermedad isquémica del corazón (28.5%)</li>
                            <li><strong>2°.</strong> Enfermedad cerebrovascular (15.2%)</li>
                            <li><strong>3°.</strong> Insuficiencia cardíaca (12.8%)</li>
                            <li><strong>4°.</strong> Hipertensión arterial (8.9%)</li>
                            <li><strong>5°.</strong> Miocardiopatías (6.4%)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3">Factores de Riesgo Prevalentes:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li>• <strong>Obesidad:</strong> 75.2% adultos con sobrepeso</li>
                            <li>• <strong>Diabetes:</strong> 14.4% población adulta</li>
                            <li>• <strong>Hipertensión:</strong> 30.2% población adulta</li>
                            <li>• <strong>Tabaquismo:</strong> 16.4% población adulta</li>
                            <li>• <strong>Sedentarismo:</strong> 58.3% población adulta</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tabla detallada de enfermedades */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <h3 className="text-xl font-bold text-gray-700 mb-4 p-6 pb-0">Enfermedades Cardiovasculares - Guía de
                    Referencia</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Enfermedad</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Fisiopatología</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Signos/Síntomas</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Medicamento
                                Principal
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 text-gray-700">
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-red-600">Infarto Agudo al Miocardio</td>
                            <td className="px-4 py-3 text-sm">Oclusión coronaria → necrosis miocárdica</td>
                            <td className="px-4 py-3 text-sm">Dolor torácico, diaforesis, disnea, náusea</td>
                            <td className="px-4 py-3 text-sm">AAS, clopidogrel, atorvastatina</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-blue-600">Hipertensión Arterial</td>
                            <td className="px-4 py-3 text-sm">↑ Resistencia vascular + ↑ gasto cardíaco</td>
                            <td className="px-4 py-3 text-sm">Cefalea, tinnitus, fosfenos, epistaxis</td>
                            <td className="px-4 py-3 text-sm">IECA (enalapril), diuréticos</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-purple-600">Insuficiencia Cardíaca</td>
                            <td className="px-4 py-3 text-sm">↓ Contractilidad → ↓ gasto cardíaco</td>
                            <td className="px-4 py-3 text-sm">Disnea, ortopnea, edema, fatiga</td>
                            <td className="px-4 py-3 text-sm">Furosemida, digoxina, IECA</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-green-600">Fibrilación Auricular</td>
                            <td className="px-4 py-3 text-sm">Despolarización auricular desorganizada</td>
                            <td className="px-4 py-3 text-sm">Palpitaciones, disnea, fatiga, mareo</td>
                            <td className="px-4 py-3 text-sm">Warfarina, amiodarona, metoprolol</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-yellow-600">Angina de Pecho</td>
                            <td className="px-4 py-3 text-sm">Isquemia miocárdica transitoria</td>
                            <td className="px-4 py-3 text-sm">Dolor torácico con esfuerzo, disnea</td>
                            <td className="px-4 py-3 text-sm">Nitratos, betabloqueadores, AAS</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-indigo-600">EVC Isquémico</td>
                            <td className="px-4 py-3 text-sm">Oclusión cerebrovascular → isquemia cerebral</td>
                            <td className="px-4 py-3 text-sm">Hemiparesia, afasia, disartria, diplopia</td>
                            <td className="px-4 py-3 text-sm">Alteplasa (tPA), AAS, clopidogrel</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-pink-600">Miocardiopatía Dilatada</td>
                            <td className="px-4 py-3 text-sm">Dilatación ventricular + ↓ contractilidad</td>
                            <td className="px-4 py-3 text-sm">ICC, arritmias, muerte súbita</td>
                            <td className="px-4 py-3 text-sm">IECA, betabloqueadores, diuréticos</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-teal-600">Enfermedad Vascular Periférica</td>
                            <td className="px-4 py-3 text-sm">Aterosclerosis en arterias periféricas</td>
                            <td className="px-4 py-3 text-sm">Claudicación, dolor en reposo, úlceras</td>
                            <td className="px-4 py-3 text-sm">Clopidogrel, cilostazol, estatinas</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Emergencias específicas por región */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-700 mb-4">Particularidades Regionales en México</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Norte (Frontera):</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• ↑ Obesidad y diabetes tipo 2</li>
                            <li>• ↑ Consumo de alimentos procesados</li>
                            <li>• ↑ Estrés laboral (maquiladoras)</li>
                            <li>• ↑ Cardiopatía isquémica temprana</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Centro (CDMX, EdoMex):</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• ↑ Hipertensión (estrés urbano)</li>
                            <li>• ↑ Enfermedad cerebrovascular</li>
                            <li>• Exposición a contaminación</li>
                            <li>• ↑ Sedentarismo</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3">Sur (Rural):</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                            <li>• ↑ Cardiopatía reumática</li>
                            <li>• ↑ Hipertensión no controlada</li>
                            <li>• Acceso limitado a especialistas</li>
                            <li>• ↑ Mortalidad por retraso diagnóstico</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Grupos de alto riesgo */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Grupos de Alto Riesgo en México</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Demográficos:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Hombres 45-65 años:</strong> IAM, muerte súbita</li>
                            <li><strong>Mujeres &gt;55 años:</strong> Hipertensión, EVC</li>
                            <li><strong>Población indígena:</strong> Diabetes, hipertensión</li>
                            <li><strong>Trabajadores de turno nocturno:</strong> Arritmias</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-3">Ocupacionales:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Conductores:</strong> IAM por estrés, sedentarismo</li>
                            <li><strong>Personal de salud:</strong> Estrés, turnos largos</li>
                            <li><strong>Trabajadores de altura:</strong> Policitemia, hipertensión pulmonar</li>
                            <li><strong>Migrantes:</strong> Estrés, acceso limitado a salud</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Recomendaciones para EMT */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">Recomendaciones Específicas para EMT en
                    México</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Consideraciones Culturales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Respetar medicina tradicional</li>
                            <li>Comunicación empática</li>
                            <li>Involucrar a la familia</li>
                            <li>Considerar barreras idiomáticas</li>
                            <li>Sensibilidad religiosa</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                            <FiAlertTriangle className="w-4 h-4 mr-2"/>
                            Desafíos Frecuentes:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Retraso en solicitar ayuda</li>
                            <li>Automedicación previa</li>
                            <li>Comorbilidades múltiples</li>
                            <li>Falta de seguimiento médico</li>
                            <li>Recursos limitados en zonas rurales</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}