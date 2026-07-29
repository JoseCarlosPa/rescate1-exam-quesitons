import { MdAnchor } from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdAnchor className="w-8 h-8 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-red-800">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El rescatista comprenderá los principios fundamentales para la selección, evaluación y construcción 
                    de anclajes y sistemas de anclaje que soporten cargas de rescate humano (life safety).
                </p>
            </div>

            {/* Conceptos Clave */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Conceptos Básicos de Anclajes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-800 mb-1">El "BFR" (Bombproof)</p>
                        <p className="text-sm text-gray-700">
                            "Big Freaking Rock" o un anclaje "A prueba de bombas". Es un objeto tan masivo y sólido (roca enorme, árbol gigante, camión de bomberos) que su resistencia está fuera de toda duda.
                        </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-800 mb-1">El Ángulo Crítico</p>
                        <p className="text-sm text-gray-700">
                            El ángulo interior (V) formado al rodear un objeto o unir anclajes. <strong>Regla general: máximo 90°</strong>. A los 120°, la fuerza en cada lado de la pata equivale al 100% de la carga total.
                        </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-800 mb-1">Carga Triaxial</p>
                        <p className="text-sm text-gray-700">
                            Mosquetones tirados en 3 direcciones pierden fuerza. Si unes varias cintas, usa un eslabón triangular o una placa de anclaje (Anchor Plate) en vez de un solo mosquetón regular.
                        </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                        <p className="font-semibold text-red-800 mb-1">Palanca en Anclajes</p>
                        <p className="text-sm text-gray-700">
                            Ata siempre lo más bajo posible (en la base del árbol, base del poste). Amarrar alto crea palanca (leverage) que puede quebrar el anclaje o volcarlo.
                        </p>
                    </div>
                </div>
            </div>

            {/* Consideraciones de Cambios de Dirección */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <h3 className="font-bold text-red-400 text-lg mb-3">⚠️ El efecto del Cambio de Dirección (Poleas)</h3>
                <p className="text-sm text-slate-300 mb-4">
                    Cuando una cuerda pasa por una polea direccional, el anclaje de esa polea sufre mayor carga.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-600">
                                <th className="p-2 font-semibold">Ángulo Interior</th>
                                <th className="p-2 font-semibold">Carga en el Anclaje de la Polea</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-200">
                            <tr className="border-b border-slate-700">
                                <td className="p-2">0° (180° Cambio de Dirección - Paralelas)</td>
                                <td className="p-2 text-red-400 font-bold">2 x Carga (Doble)</td>
                            </tr>
                            <tr className="border-b border-slate-700">
                                <td className="p-2">90° (Ángulo recto)</td>
                                <td className="p-2 text-orange-300">~ 1.4 x Carga</td>
                            </tr>
                            <tr>
                                <td className="p-2">120° (Cambio muy leve)</td>
                                <td className="p-2 text-green-400">1 x Carga</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    );
}
