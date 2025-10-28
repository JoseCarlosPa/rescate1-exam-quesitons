import {HiOutlineClipboardCheck} from "react-icons/hi";
import {FiActivity, FiCheckCircle, FiEye} from "react-icons/fi";
import {FaExclamationTriangle, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {PiBabyBold} from "react-icons/pi";
import {MdOutlineTimer} from "react-icons/md";

export default function Anatomy(){
    return(
        <div className="space-y-8">
            {/* Evaluación sistemática */}
            <div
                className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <HiOutlineClipboardCheck className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Evaluación Sistemática de
                        la Paciente Obstétrica</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-lg mb-3 text-blue-700">Evaluación
                            Primaria</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiCheckCircle className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>A:</strong> Vía aérea permeable</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>B:</strong> Respiración adecuada</span>
                            </li>
                            <li className="flex items-start">
                                <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>C:</strong> Circulación y pulso</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>D:</strong> Estado neurológico</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>E:</strong> Exposición controlada</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h3 className="font-medium text-lg mb-3 text-green-700">Evaluación
                            Obstétrica</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <PiBabyBold className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Historia GPAC</strong></span>
                            </li>
                            <li className="flex items-start">
                                <MdOutlineTimer className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Edad gestacional</strong></span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Patrón de contracciones</strong></span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Sangrado vaginal</strong></span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Ruptura de membranas</strong></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Complicaciones obstétricas críticas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Complicaciones
                    Obstétricas Críticas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                        <h3 className="font-bold text-xl mb-3 text-red-700 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Placenta Previa
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-red-600 mb-1">Signos
                                    Clínicos:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Sangrado rojo brillante</li>
                                    <li>• SIN dolor abdominal</li>
                                    <li>• Tercer trimestre</li>
                                    <li>• Puede ser masivo</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-red-600 mb-1">Manejo:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>NO</strong> examen vaginal</li>
                                    <li>• IV de gran calibre</li>
                                    <li>• Transporte inmediato</li>
                                    <li>• Preparar para cesárea</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
                        <h3 className="font-bold text-xl mb-3 text-purple-700 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Desprendimiento de Placenta
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-purple-600 mb-1">Signos
                                    Clínicos:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Sangrado rojo oscuro</li>
                                    <li>• <strong>CON</strong> dolor severo</li>
                                    <li>• Útero rígido, hipersensible</li>
                                    <li>• Contracciones tetánicas</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-purple-600 mb-1">Manejo:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Posición lateral izquierda</li>
                                    <li>• Oxígeno alto flujo</li>
                                    <li>• Dos IVs gran calibre</li>
                                    <li>• Transporte emergente</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-2 border-yellow-200">
                        <h3 className="font-bold text-xl mb-3 text-yellow-700 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Preeclampsia / Eclampsia
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-yellow-600 mb-1">Signos
                                    Clínicos:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• PA ≥140/90 mmHg</li>
                                    <li>• Cefalea intensa</li>
                                    <li>• Visión borrosa</li>
                                    <li>• Dolor epigástrico</li>
                                    <li>• Edema facial/manos</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-yellow-600 mb-1">Manejo:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Control frecuente PA</li>
                                    <li>• Ambiente tranquilo</li>
                                    <li>• Preparar anticonvulsivos</li>
                                    <li>• Posición lateral izquierda</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-2 border-orange-200">
                        <h3 className="font-bold text-xl mb-3 text-orange-700 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Prolapso de Cordón
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-orange-600 mb-1">Signos
                                    Clínicos:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Cordón visible en vagina</li>
                                    <li>• Después ruptura membranas</li>
                                    <li>• Sufrimiento fetal agudo</li>
                                    <li>• Cambios en FC fetal</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-medium text-orange-600 mb-1">Manejo:</h4>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Posición genupectoral</li>
                                    <li>• Elevar presentación fetal</li>
                                    <li>• Oxígeno alto flujo</li>
                                    <li>• Transporte CODE 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla de signos de alarma */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tabla de
                    Signos de Alarma</h2>
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="min-w-full">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Sistema</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Signo
                                Normal
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Signo
                                de Alarma
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Acción
                                Inmediata
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Cardiovascular</td>
                            <td className="px-6 py-4 text-sm text-gray-700">FC: 60-100,
                                PA: &lt;140/90
                            </td>
                            <td className="px-6 py-4 text-sm text-red-600">Taquicardia,
                                hipotensión, PA ≥140/90
                            </td>
                            <td className="px-6 py-4 text-sm text-blue-600">IV, monitorización,
                                posición lateral
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Respiratorio</td>
                            <td className="px-6 py-4 text-sm text-gray-700">FR: 12-20, SatO₂
                                ≥95%
                            </td>
                            <td className="px-6 py-4 text-sm text-red-600">Disnea, taquipnea,
                                SatO₂ &lt;95%
                            </td>
                            <td className="px-6 py-4 text-sm text-blue-600">Oxígeno, posición
                                semi-Fowler
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Neurológico</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Alerta, orientada
                            </td>
                            <td className="px-6 py-4 text-sm text-red-600">Confusión,
                                convulsiones, cefalea
                            </td>
                            <td className="px-6 py-4 text-sm text-blue-600">Ambiente tranquilo,
                                anticonvulsivos
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Obstétrico</td>
                            <td className="px-6 py-4 text-sm text-gray-700">Sin sangrado,
                                contracciones regulares
                            </td>
                            <td className="px-6 py-4 text-sm text-red-600">Sangrado abundante,
                                dolor severo
                            </td>
                            <td className="px-6 py-4 text-sm text-blue-600">Control sangrado,
                                transporte urgente
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Factores de riesgo */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Factores de Riesgo
                        Materno</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-medium text-gray-700">Demográficos:</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                                <li>• Edad &lt;18 o &gt;35 años</li>
                                <li>• Bajo nivel socioeconómico</li>
                                <li>• Falta de control prenatal</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700">Médicos:</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                                <li>• Diabetes mellitus</li>
                                <li>• Hipertensión crónica</li>
                                <li>• Enfermedad cardíaca</li>
                                <li>• Anemia severa</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700">Obstétricos:</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                                <li>• Cesáreas previas</li>
                                <li>• Abortos recurrentes</li>
                                <li>• Partos prematuros</li>
                                <li>• Muerte fetal previa</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-gray-800">Factores de Riesgo
                        Fetal</h3>
                    <div className="space-y-3">
                        <div>
                            <h4 className="font-medium text-gray-700">Crecimiento:</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                                <li>• Macrosomía fetal (&gt;4000g)</li>
                                <li>• Restricción crecimiento</li>
                                <li>• Embarazo múltiple</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700">Presentación:</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                                <li>• Presentación pélvica</li>
                                <li>• Presentación transversa</li>
                                <li>• Situación oblicua</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700">Líquido amniótico:</h4>
                            <ul className="text-sm text-gray-600 ml-4">
                                <li>• Oligohidramnios</li>
                                <li>• Polihidramnios</li>
                                <li>• Líquido teñido meconio</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}