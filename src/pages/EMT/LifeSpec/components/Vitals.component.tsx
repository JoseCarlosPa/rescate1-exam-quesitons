import {FaHeartbeat} from "react-icons/fa";
import {FiActivity} from "react-icons/fi";

export default function Vitals(){
    return(
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Constantes
                        fisiológicas por edad</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Los signos vitales varían significativamente según la edad y el
                        desarrollo. Conocer estos rangos normales
                        es fundamental para identificar alteraciones y determinar la gravedad de
                        la condición del paciente.
                    </p>
                    <p className="text-gray-700 mt-2 leading-relaxed">
                        Recuerda que estos valores son rangos de referencia y siempre deben
                        considerarse en el contexto clínico
                        del paciente, incluyendo su condición base y factores ambientales.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div
                        className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg shadow-sm">
                        <FaHeartbeat className="w-16 h-16 text-orange-500 mx-auto mb-3"/>
                        <h3 className="text-center font-semibold text-orange-700">Signos
                            Vitales</h3>
                        <p className="text-center text-sm text-gray-600">Evaluación
                            fundamental</p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Tabla de referencia
                    rápida</h3>
                <div className="overflow-x-auto mb-6">
                    <table
                        className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
                        <thead>
                        <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                            <th className="py-3 px-4 text-left font-semibold">Edad</th>
                            <th className="py-3 px-4 text-center font-semibold">FC (lat/min)
                            </th>
                            <th className="py-3 px-4 text-center font-semibold">FR (resp/min)
                            </th>
                            <th className="py-3 px-4 text-center font-semibold">PA sistólica
                                (mmHg)
                            </th>
                            <th className="py-3 px-4 text-center font-semibold">Temp (°C)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b border-gray-200 hover:bg-blue-50">
                            <td className="py-3 px-4 font-medium text-blue-700">Neonato (0 a 1
                                mes)
                            </td>
                            <td className="py-3 px-4 text-center">90-180</td>
                            <td className="py-3 px-4 text-center">30-60</td>
                            <td className="py-3 px-4 text-center">50-70</td>
                            <td className="py-3 px-4 text-center">37-38</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-cyan-50">
                            <td className="py-3 px-4 font-medium text-cyan-700">Lactante (1mes a
                                1 año)
                            </td>
                            <td className="py-3 px-4 text-center">100-160</td>
                            <td className="py-3 px-4 text-center">25-50</td>
                            <td className="py-3 px-4 text-center">70-95</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-green-50">
                            <td className="py-3 px-4 font-medium text-green-700">Niño pequeño (1
                                a 3 años)
                            </td>
                            <td className="py-3 px-4 text-center">90-150</td>
                            <td className="py-3 px-4 text-center">20-30</td>
                            <td className="py-3 px-4 text-center">80-100</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-yellow-50">
                            <td className="py-3 px-4 font-medium text-yellow-700">PreEscolar (3
                                a 6 años)
                            </td>
                            <td className="py-3 px-4 text-center">80-140</td>
                            <td className="py-3 px-4 text-center">20-25</td>
                            <td className="py-3 px-4 text-center">80-100</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-purple-50">
                            <td className="py-3 px-4 font-medium text-purple-700">Escolar (6 a
                                12 años)
                            </td>
                            <td className="py-3 px-4 text-center">70-120</td>
                            <td className="py-3 px-4 text-center">15-20</td>
                            <td className="py-3 px-4 text-center">80-110</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-pink-50">
                            <td className="py-3 px-4 font-medium text-pink-700">Adolescente (12
                                a 18 años)
                            </td>
                            <td className="py-3 px-4 text-center">60-100</td>
                            <td className="py-3 px-4 text-center">12-20</td>
                            <td className="py-3 px-4 text-center">90-110</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-orange-50">
                            <td className="py-3 px-4 font-medium text-orange-700">Adulto Joven
                                (19 a 40 años)
                            </td>
                            <td className="py-3 px-4 text-center">60-100</td>
                            <td className="py-3 px-4 text-center">12-20</td>
                            <td className="py-3 px-4 text-center">90-140</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-red-50">
                            <td className="py-3 px-4 font-medium text-red-700">Adulto de edad
                                media (41 a 60 años)
                            </td>
                            <td className="py-3 px-4 text-center">60-100</td>
                            <td className="py-3 px-4 text-center">12-20</td>
                            <td className="py-3 px-4 text-center">90-140</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 font-medium text-gray-700">Adulto mayor
                                (mayor a 61 años)
                            </td>
                            <td className="py-3 px-4 text-center">60-100</td>
                            <td className="py-3 px-4 text-center">12-20</td>
                            <td className="py-3 px-4 text-center">90-140</td>
                            <td className="py-3 px-4 text-center">36-37.5</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Patrones importantes a
                    recordar</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                                <FiActivity className="w-5 h-5 mr-2"/>
                                Frecuencia Cardíaca
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Disminuye progresivamente con la edad</li>
                                <li>Neonatos: más alta (90-180)</li>
                                <li>Adultos: estabiliza (60-100)</li>
                                <li>Respuesta al estrés varía por edad</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-medium text-green-800 mb-2">💨 Frecuencia
                                Respiratoria</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>También disminuye con la edad</li>
                                <li>Neonatos: hasta 60 resp/min</li>
                                <li>Adultos: 12-20 resp/min</li>
                                <li>Indicador temprano de deterioro</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg">
                            <h4 className="font-medium text-red-800 mb-2">🩸 Presión
                                Arterial</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Aumenta progresivamente con la edad</li>
                                <li>Neonatos: PA muy baja (50-70 mmHg)</li>
                                <li>Adultos: rangos más altos</li>
                                <li>Último signo en deterioro pediátrico</li>
                            </ul>
                        </div>

                        <div className="p-4 bg-yellow-50 rounded-lg">
                            <h4 className="font-medium text-yellow-800 mb-2">🌡️ Temperatura</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Relativamente estable en todas las edades</li>
                                <li>Neonatos: ligeramente más alta</li>
                                <li>Termorregulación inmadura en extremos</li>
                                <li>Control ambiental crucial</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-red-800">⚠️ Alertas clínicas
                    importantes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-medium text-red-700 mb-2">En pediatría:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>La hipotensión es signo tardío de shock</li>
                            <li>Taquicardia sostenida es signo de alarma</li>
                            <li>Cambios en FR son indicadores tempranos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-medium text-red-700 mb-2">En adultos mayores:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Pueden no desarrollar fiebre ante infección</li>
                            <li>Medicamentos afectan respuesta vital</li>
                            <li>Compensación limitada ante estrés</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}