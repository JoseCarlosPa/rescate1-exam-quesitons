import {FaStethoscope} from "react-icons/fa";

export default function Secondary(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2 flex items-center gap-2">
                <FaStethoscope className="text-green-500"/>
                Evaluación Secundaria
            </h2>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                <h3 className="font-medium text-lg mb-2 text-green-700">🎯 Objetivo</h3>
                <p className="text-green-600">Realizar una evaluación detallada para identificar
                    lesiones o condiciones que no fueron evidentes en la evaluación
                    primaria.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-medium text-lg mb-3 text-blue-800 flex items-center gap-2">
                            👁️ Examen físico sistemático
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="p-2 bg-white rounded border">
                                <h4 className="font-medium text-gray-800">Cabeza y cuello</h4>
                                <p className="text-gray-600">Deformidades, contusiones,
                                    abrasiones, penetraciones, quemaduras, dolor,
                                    crepitación</p>
                            </div>
                            <div className="p-2 bg-white rounded border">
                                <h4 className="font-medium text-gray-800">Tórax</h4>
                                <p className="text-gray-600">Movimiento simétrico, ruidos
                                    respiratorios, dolor, crepitación</p>
                            </div>
                            <div className="p-2 bg-white rounded border">
                                <h4 className="font-medium text-gray-800">Abdomen</h4>
                                <p className="text-gray-600">Distensión, dolor, rigidez, masa
                                    pulsátil</p>
                            </div>
                            <div className="p-2 bg-white rounded border">
                                <h4 className="font-medium text-gray-800">Extremidades</h4>
                                <p className="text-gray-600">Deformidades, pulsos, función
                                    motora y sensitiva</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <h3 className="font-medium text-lg mb-3 text-purple-800 flex items-center gap-2">
                            📊 Signos vitales completos
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                <span>Presión arterial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                <span>Frecuencia cardíaca</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Frecuencia respiratoria</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                <span>Temperatura</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                <span>SpO₂</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                                <span>Glucosa sanguínea</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                        <h3 className="font-medium text-lg mb-3 text-orange-800 flex items-center gap-2">
                            📝 Historia clínica (SAMPLE)
                        </h3>
                        <div className="space-y-2 text-sm">
                            {[
                                {
                                    letter: 'S',
                                    term: 'SIGNS & SYMPTOMS',
                                    desc: 'Signos y síntomas actuales'
                                },
                                {letter: 'A', term: 'ALLERGIES', desc: 'Alergias conocidas'},
                                {
                                    letter: 'M',
                                    term: 'MEDICATIONS',
                                    desc: 'Medicamentos actuales'
                                },
                                {
                                    letter: 'P',
                                    term: 'PAST HISTORY',
                                    desc: 'Historia médica relevante'
                                },
                                {
                                    letter: 'L',
                                    term: 'LAST MEAL',
                                    desc: 'Última ingesta de alimentos'
                                },
                                {
                                    letter: 'E',
                                    term: 'EVENTS',
                                    desc: 'Eventos que llevaron al incidente'
                                }
                            ].map((item, index) => (
                                <div key={index}
                                     className="flex items-start gap-3 p-2 bg-white rounded border">
                                                        <span
                                                            className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                                                            {item.letter}
                                                        </span>
                                    <div>
                                        <div
                                            className="font-medium text-gray-800">{item.term}</div>
                                        <div className="text-gray-600">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                        <h3 className="font-medium text-lg mb-3 text-yellow-800">⚡ Tips de
                            eficiencia</h3>
                        <ul className="text-yellow-700 space-y-1 text-sm">
                            <li>• Enfócate en la queja principal si el paciente está estable
                            </li>
                            <li>• Usa un enfoque de cabeza a pies en trauma significativo</li>
                            <li>• Obtén signos vitales mientras realizas el examen físico</li>
                            <li>• Pregunta la historia mientras examinas</li>
                            <li>• Documenta hallazgos negativos importantes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto">
                <h3 className="text-lg font-semibold mb-3">📈 Valores normales por grupo
                    etario</h3>
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="py-3 px-4 border-b font-medium text-left">Parámetro</th>
                        <th className="py-3 px-4 border-b font-medium text-center">Adultos</th>
                        <th className="py-3 px-4 border-b font-medium text-center">Niños (1-12
                            años)
                        </th>
                        <th className="py-3 px-4 border-b font-medium text-center">Lactantes
                            ({'<'}1 año)
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Frecuencia cardíaca</td>
                        <td className="py-3 px-4 border-b text-center">60-100/min</td>
                        <td className="py-3 px-4 border-b text-center">80-120/min</td>
                        <td className="py-3 px-4 border-b text-center">100-160/min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Frecuencia respiratoria
                        </td>
                        <td className="py-3 px-4 border-b text-center">12-20/min</td>
                        <td className="py-3 px-4 border-b text-center">20-30/min</td>
                        <td className="py-3 px-4 border-b text-center">30-60/min</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">Presión arterial
                            sistólica
                        </td>
                        <td className="py-3 px-4 border-b text-center">{'>'}90 mmHg</td>
                        <td className="py-3 px-4 border-b text-center">{'>'}80 + (2 × edad)
                            mmHg
                        </td>
                        <td className="py-3 px-4 border-b text-center">{'>'}70 mmHg</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 border-b font-medium">SpO₂</td>
                        <td className="py-3 px-4 border-b text-center">≥95%</td>
                        <td className="py-3 px-4 border-b text-center">≥95%</td>
                        <td className="py-3 px-4 border-b text-center">≥95%</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Temperatura</td>
                        <td className="py-3 px-4 text-center">36.5-37.5°C</td>
                        <td className="py-3 px-4 text-center">36.5-37.5°C</td>
                        <td className="py-3 px-4 text-center">36.5-37.5°C</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}