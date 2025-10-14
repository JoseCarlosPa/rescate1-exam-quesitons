import {FaEye, FaHeart, FaLungs} from "react-icons/fa";
import {GiKidneys, GiLiver} from "react-icons/gi";
import {MdBloodtype, MdThermostat} from "react-icons/md";

export default function Anatomy() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía y
                fisiología crítica para paramédicos</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                        <FaHeart className="text-red-500 mr-2"/>
                        Órganos vitales - Prioridad A
                    </h3>
                    <div className="space-y-3">
                        <div className="bg-red-50 border-l-4 border-red-400 p-4">
                            <strong className="text-red-800">Cerebro:</strong>
                            <p className="text-red-700 text-sm mt-1">
                                Controla funciones vitales. Sin oxígeno: daño irreversible en
                                4-6 minutos.
                                Localización: cráneo. Signos de compromiso: alteración del
                                estado mental.
                            </p>
                        </div>
                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                            <strong className="text-blue-800">Corazón:</strong>
                            <p className="text-blue-700 text-sm mt-1">
                                Bomba muscular de 4 cámaras. Localización: mediastino, entre
                                pulmones.
                                Frecuencia normal adulto: 60-100 lpm.
                            </p>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                            <strong className="text-green-800">Pulmones:</strong>
                            <p className="text-green-700 text-sm mt-1">
                                Intercambio gaseoso. Frecuencia respiratoria normal adulto:
                                12-20 rpm.
                                Signos de compromiso: disnea, cianosis, uso de músculos
                                accesorios.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="bg-gray-100 p-4 rounded-lg">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Respiratory_system_complete_es.svg/300px-Respiratory_system_complete_es.svg.png"
                            alt="Sistema respiratorio"
                            className="rounded-lg shadow-md max-w-full h-auto"
                        />
                        <p className="text-center text-sm text-gray-600 mt-2">Sistema
                            respiratorio</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white border border-orange-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                        <GiKidneys className="text-orange-500 mr-2"/>
                        <strong className="text-orange-800">Riñones</strong>
                    </div>
                    <p className="text-sm text-gray-700">
                        Filtran 180L de sangre/día. Regulan líquidos y electrolitos.
                        Ubicación: retroperitoneal, a ambos lados de la columna.
                    </p>
                </div>
                <div className="bg-white border border-purple-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                        <GiLiver className="text-purple-500 mr-2"/>
                        <strong className="text-purple-800">Hígado</strong>
                    </div>
                    <p className="text-sm text-gray-700">
                        Órgano más grande. Metabolismo, síntesis de proteínas, detoxificación.
                        Ubicación: cuadrante superior derecho del abdomen.
                    </p>
                </div>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                        <FaEye className="text-blue-500 mr-2"/>
                        <strong className="text-blue-800">Órganos de los sentidos</strong>
                    </div>
                    <p className="text-sm text-gray-700">
                        Ojos, oídos, nariz. Evaluación neurológica.
                        Pupilas: tamaño, reactividad a la luz.
                    </p>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <MdThermostat className="text-orange-500 mr-2"/>
                    Valores fisiológicos normales - Referencia rápida
                </h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 border-b text-left font-semibold text-gray-700">Parámetro
                                vital
                            </th>
                            <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Adultos</th>
                            <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Niños
                                (2-12 años)
                            </th>
                            <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Lactantes
                                (0-2 años)
                            </th>
                            <th className="py-3 px-4 border-b text-center font-semibold text-gray-700">Alerta
                                clínica
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium flex items-center">
                                <FaHeart className="text-red-500 mr-2 w-4 h-4"/>
                                Frecuencia cardíaca
                            </td>
                            <td className="py-3 px-4 border-b text-center">60-100/min</td>
                            <td className="py-3 px-4 border-b text-center">80-120/min</td>
                            <td className="py-3 px-4 border-b text-center">100-160/min</td>
                            <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                &lt;50 o &gt;150 adultos
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium flex items-center">
                                <FaLungs className="text-blue-500 mr-2 w-4 h-4"/>
                                Frecuencia respiratoria
                            </td>
                            <td className="py-3 px-4 border-b text-center">12-20/min</td>
                            <td className="py-3 px-4 border-b text-center">15-30/min</td>
                            <td className="py-3 px-4 border-b text-center">25-50/min</td>
                            <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                &lt;10 o &gt;30 adultos
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium flex items-center">
                                <MdBloodtype className="text-purple-500 mr-2 w-4 h-4"/>
                                Presión arterial sistólica
                            </td>
                            <td className="py-3 px-4 border-b text-center">90-140 mmHg</td>
                            <td className="py-3 px-4 border-b text-center">80-110 mmHg</td>
                            <td className="py-3 px-4 border-b text-center">70-100 mmHg</td>
                            <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                &lt;90 mmHg shock
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium flex items-center">
                                <MdThermostat className="text-orange-500 mr-2 w-4 h-4"/>
                                Temperatura corporal
                            </td>
                            <td className="py-3 px-4 border-b text-center">36-37.5°C</td>
                            <td className="py-3 px-4 border-b text-center">36-37.5°C</td>
                            <td className="py-3 px-4 border-b text-center">36-37.5°C</td>
                            <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                &lt;35°C o &gt;39°C
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium">
                                Saturación de O₂
                            </td>
                            <td className="py-3 px-4 border-b text-center">95-100%</td>
                            <td className="py-3 px-4 border-b text-center">95-100%</td>
                            <td className="py-3 px-4 border-b text-center">95-100%</td>
                            <td className="py-3 px-4 border-b text-center text-red-600 text-sm">
                                &lt;90% hipoxemia
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                    ⚠️ Evaluación rápida de sistemas vitales
                </h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <strong className="text-yellow-800">Neurológico (AVPU):</strong>
                        <ul className="text-yellow-700 mt-1">
                            <li>• A: Alerta</li>
                            <li>• V: Responde a estímulos verbales</li>
                            <li>• P: Responde solo al dolor</li>
                            <li>• U: No responde (unconscious)</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-yellow-800">Circulatorio (Pulso):</strong>
                        <ul className="text-yellow-700 mt-1">
                            <li>• Radial: Sistólica &gt;80 mmHg</li>
                            <li>• Femoral: Sistólica &gt;70 mmHg</li>
                            <li>• Carotídeo: Sistólica &gt;60 mmHg</li>
                            <li>• Sin pulso: PCR</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}