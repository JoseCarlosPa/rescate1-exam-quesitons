import {MdLightbulb, MdPlayArrow, MdSchool} from "react-icons/md";

export default function Roots() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Prefijos
                    más comunes en emergencias</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-red-700 mb-2">Velocidad y
                            Frecuencia</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">taqui-</span>
                                <span className="text-xs text-gray-600">rápido</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">bradi-</span>
                                <span className="text-xs text-gray-600">lento</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-2">Cantidad</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">hiper-</span>
                                <span className="text-xs text-gray-600">exceso</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">hipo-</span>
                                <span className="text-xs text-gray-600">déficit</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">poli-</span>
                                <span className="text-xs text-gray-600">muchos</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-green-700 mb-2">Posición</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">epi-</span>
                                <span className="text-xs text-gray-600">sobre</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">sub-</span>
                                <span className="text-xs text-gray-600">debajo</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="font-mono text-sm">inter-</span>
                                <span className="text-xs text-gray-600">entre</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Raíces
                    esenciales por sistemas</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Sistema</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Raíz</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Significado</th>
                            <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700 border-b">Ejemplo
                                EMT
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-red-50">
                            <td className="py-3 px-4 text-sm font-medium text-red-600">Cardiovascular</td>
                            <td className="py-3 px-4 text-sm font-mono">cardi-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Corazón</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Cardiopatía,
                                Pericarditis
                            </td>
                        </tr>
                        <tr className="hover:bg-red-50">
                            <td className="py-3 px-4 text-sm font-medium text-red-600">Cardiovascular</td>
                            <td className="py-3 px-4 text-sm font-mono">angio-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Vaso sanguíneo</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Angina,
                                Angioplastia
                            </td>
                        </tr>
                        <tr className="hover:bg-blue-50">
                            <td className="py-3 px-4 text-sm font-medium text-blue-600">Respiratorio</td>
                            <td className="py-3 px-4 text-sm font-mono">pneumo-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Pulmón/aire</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Neumonía,
                                Neumotórax
                            </td>
                        </tr>
                        <tr className="hover:bg-blue-50">
                            <td className="py-3 px-4 text-sm font-medium text-blue-600">Respiratorio</td>
                            <td className="py-3 px-4 text-sm font-mono">bronco-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Bronquio</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Broncoespasmo,
                                Bronquitis
                            </td>
                        </tr>
                        <tr className="hover:bg-purple-50">
                            <td className="py-3 px-4 text-sm font-medium text-purple-600">Neurológico</td>
                            <td className="py-3 px-4 text-sm font-mono">neuro-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Nervio/sistema
                                nervioso
                            </td>
                            <td className="py-3 px-4 text-sm text-gray-600">Neuropatía,
                                Neurología
                            </td>
                        </tr>
                        <tr className="hover:bg-purple-50">
                            <td className="py-3 px-4 text-sm font-medium text-purple-600">Neurológico</td>
                            <td className="py-3 px-4 text-sm font-mono">cerebro-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Cerebro</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Cerebrovascular,
                                Cerebroespinal
                            </td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="py-3 px-4 text-sm font-medium text-green-600">Gastrointestinal</td>
                            <td className="py-3 px-4 text-sm font-mono">gastro-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Estómago</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Gastritis,
                                Gastroenteritis
                            </td>
                        </tr>
                        <tr className="hover:bg-orange-50">
                            <td className="py-3 px-4 text-sm font-medium text-orange-600">Sangre</td>
                            <td className="py-3 px-4 text-sm font-mono">hemo-/hema-</td>
                            <td className="py-3 px-4 text-sm text-gray-700">Sangre</td>
                            <td className="py-3 px-4 text-sm text-gray-600">Hemorragia,
                                Hematoma
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sufijos
                    críticos para paramédicos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 p-5 rounded-lg">
                        <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                            <MdLightbulb className="w-5 h-5 mr-2"/>
                            Condiciones Patológicas
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded border-l-4 border-red-500">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-mono text-red-600">-itis</span>
                                    <span className="text-sm text-gray-600">inflamación</span>
                                </div>
                                <p className="text-xs text-gray-700">Ej: Gastritis, Bronquitis,
                                    Meningitis</p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-mono text-orange-600">-algia</span>
                                    <span className="text-sm text-gray-600">dolor</span>
                                </div>
                                <p className="text-xs text-gray-700">Ej: Neuralgia, Mialgia,
                                    Cefalgia</p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-yellow-500">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-mono text-yellow-600">-emia</span>
                                    <span className="text-sm text-gray-600">en la sangre</span>
                                </div>
                                <p className="text-xs text-gray-700">Ej: Hipoglucemia, Anemia,
                                    Septicemia</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-5 rounded-lg">
                        <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                            <MdSchool className="w-5 h-5 mr-2"/>
                            Procedimientos y Estudios
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-mono text-blue-600">-scopia</span>
                                    <span className="text-sm text-gray-600">observar</span>
                                </div>
                                <p className="text-xs text-gray-700">Ej: Endoscopia,
                                    Laparoscopia</p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-green-500">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-mono text-green-600">-grafía</span>
                                    <span
                                        className="text-sm text-gray-600">registro/imagen</span>
                                </div>
                                <p className="text-xs text-gray-700">Ej: Radiografía,
                                    Ecografía</p>
                            </div>
                            <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-mono text-purple-600">-tomía</span>
                                    <span
                                        className="text-sm text-gray-600">corte/incisión</span>
                                </div>
                                <p className="text-xs text-gray-700">Ej: Traqueotomía,
                                    Cricotiroidotomía</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-800 flex items-center">
                    <MdPlayArrow className="w-6 h-6 mr-2"/>
                    Ejercicio práctico: Construye términos
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <p className="font-medium text-gray-800 mb-2">Frecuencia cardíaca
                            lenta:</p>
                        <div className="flex items-center gap-2 text-sm">
                                                    <span
                                                        className="bg-red-100 px-2 py-1 rounded text-red-700">bradi-</span>
                            <span className="text-gray-500">+</span>
                            <span
                                className="bg-blue-100 px-2 py-1 rounded text-blue-700">-cardia</span>
                            <span className="text-gray-500">=</span>
                            <span
                                className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">bradicardia</span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <p className="font-medium text-gray-800 mb-2">Inflamación de los
                            bronquios:</p>
                        <div className="flex items-center gap-2 text-sm">
                                                    <span
                                                        className="bg-blue-100 px-2 py-1 rounded text-blue-700">bronco-</span>
                            <span className="text-gray-500">+</span>
                            <span
                                className="bg-red-100 px-2 py-1 rounded text-red-700">-itis</span>
                            <span className="text-gray-500">=</span>
                            <span
                                className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">bronquitis</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}