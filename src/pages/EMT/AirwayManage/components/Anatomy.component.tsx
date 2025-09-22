import {FaExclamationTriangle, FaLungsVirus} from "react-icons/fa";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Anatomía interactiva */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaLungsVirus className="w-6 h-6 mr-2 text-orange-500"/>
                    Anatomía del Sistema Respiratorio
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Vía Aérea
                                Superior</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Nariz y Boca</h4>
                                        <p className="text-sm text-gray-600">Filtración,
                                            calentamiento y humidificación del aire</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Faringe</h4>
                                        <p className="text-sm text-gray-600">Naso, oro e
                                            hipofaringe - zona común digestiva/respiratoria</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Laringe</h4>
                                        <p className="text-sm text-gray-600">Cuerdas vocales,
                                            epiglotis - protección de vía aérea inferior</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                            <h3 className="text-xl font-bold text-green-700 mb-4">Vía Aérea
                                Inferior</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Tráquea</h4>
                                        <p className="text-sm text-gray-600">Tubo de 10-12 cm,
                                            anillos cartilaginosos en forma de C</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Bronquios</h4>
                                        <p className="text-sm text-gray-600">Bronquio principal
                                            derecho e izquierdo</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Alvéolos</h4>
                                        <p className="text-sm text-gray-600">300 millones de
                                            alvéolos - intercambio gaseoso</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start">
                        <div className="text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Respiratory_system_complete_es.svg/500px-Respiratory_system_complete_es.svg.png"
                                alt="Anatomía del sistema respiratorio"
                                className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                            />
                            <p className="text-sm text-gray-600 italic">Sistema respiratorio
                                completo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Datos críticos de anatomía */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                    Datos Críticos para Paramédicos
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2">Diferencias por
                            Edad:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Lactantes:</strong> Cabeza grande, cuello corto, lengua
                                proporcionalmente más grande
                            </li>
                            <li><strong>Niños:</strong> Laringe más alta y anterior, epiglotis
                                más grande
                            </li>
                            <li><strong>Adultos mayores:</strong> Pérdida de elasticidad
                                pulmonar, cartílagos calcificados
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2">Puntos de Obstrucción
                            Común:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li><strong>Lengua:</strong> Causa #1 en pacientes inconscientes
                            </li>
                            <li><strong>Epiglotis:</strong> Inflamación por infección
                                (epiglotitis)
                            </li>
                            <li><strong>Cuerdas vocales:</strong> Edema, espasmo, cuerpos
                                extraños
                            </li>
                            <li><strong>Bronquios:</strong> Broncoespasmo, secreciones</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Fisiología respiratoria */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Fisiología
                    Respiratoria</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-3 text-center">VENTILACIÓN</h3>
                        <p className="text-sm text-gray-600 mb-3">Movimiento mecánico del
                            aire</p>
                        <ul className="text-sm space-y-1">
                            <li>• Inspiración activa (diafragma)</li>
                            <li>• Espiración pasiva (normal)</li>
                            <li>• Volumen corriente: 500ml</li>
                            <li>• FR normal: 12-20/min</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-3 text-center">PERFUSIÓN</h3>
                        <p className="text-sm text-gray-600 mb-3">Flujo sanguíneo pulmonar</p>
                        <ul className="text-sm space-y-1">
                            <li>• Circulación pulmonar</li>
                            <li>• Relación V/Q óptima</li>
                            <li>• Presión capilar pulmonar</li>
                            <li>• Retorno venoso</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-lg">
                        <h3 className="font-bold text-orange-700 mb-3 text-center">DIFUSIÓN</h3>
                        <p className="text-sm text-gray-600 mb-3">Intercambio gaseoso
                            alveolar</p>
                        <ul className="text-sm space-y-1">
                            <li>• O₂ → sangre</li>
                            <li>• CO₂ → alvéolo</li>
                            <li>• Membrana alveolocapilar</li>
                            <li>• Superficie: 70 m²</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Valores normales expandidos */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Valores Normales por Edad</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 border text-left">Parámetro</th>
                            <th className="py-3 px-4 border text-center">Adultos</th>
                            <th className="py-3 px-4 border text-center">Niños (1-12 años)</th>
                            <th className="py-3 px-4 border text-center">Lactantes (&lt;1 año)
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Frecuencia
                                respiratoria
                            </td>
                            <td className="py-3 px-4 border text-center">12-20/min</td>
                            <td className="py-3 px-4 border text-center">15-30/min</td>
                            <td className="py-3 px-4 border text-center">25-50/min</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Saturación O₂</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Volumen corriente</td>
                            <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                            <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                            <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">ETCO₂ (si disponible)
                            </td>
                            <td className="py-3 px-4 border text-center">35-45 mmHg</td>
                            <td className="py-3 px-4 border text-center">35-45 mmHg</td>
                            <td className="py-3 px-4 border text-center">35-45 mmHg</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}