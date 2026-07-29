import { GiRopeCoil } from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <GiRopeCoil className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-800">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante identificará la terminología de nudos, comprenderá el concepto de <strong>eficiencia de nudos</strong>, 
                    y demostrará la habilidad de atar de manera segura y eficiente los nudos fundamentales para el rescate con cuerdas.
                </p>
            </div>

            {/* ¿Qué hace a un buen nudo? */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">¿Qué hace a un "Buen Nudo" de Rescate?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">1. Mínima pérdida de resistencia</p>
                        <p className="text-sm text-gray-700">
                            Los nudos crean dobleces. Dobleces agudos debilitan la cuerda. Los buenos nudos tienen dobleces amplios para retener la mayor eficiencia posible.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">2. Fáciles de atar e inspeccionar</p>
                        <p className="text-sm text-gray-700">
                            Deben ser visualmente distintivos. Un Figura 8 mal atado resalta de inmediato. "Vestir" el nudo (acomodarlo) es vital para esto.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">3. Fáciles de desatar</p>
                        <p className="text-sm text-gray-700">
                            Después de soportar la carga de un rescate, el nudo debe poder desatarse en el terreno sin tener que cortar la cuerda.
                        </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-blue-800 mb-1">4. Intrínsecamente Seguros</p>
                        <p className="text-sm text-gray-700">
                            No necesitan un "nudo de seguridad" extra, porque se aprietan al cargarlos y no se aflojan solos (pero deben tener una cola mínima de 6").
                        </p>
                    </div>
                </div>
            </div>

            {/* Eficiencia */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <h3 className="font-bold text-blue-300 text-lg mb-3">📊 Eficiencia de Nudos Comunes</h3>
                <p className="text-sm text-slate-300 mb-4">
                    La eficiencia es el % de resistencia a la tracción que retiene la cuerda anudada. Por ej. un Tensionless Hitch conserva el 100%, 
                    mientras que un nudo común retiene entre el 60% y el 80%.
                </p>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse text-left">
                        <thead>
                            <tr className="border-b border-slate-600">
                                <th className="p-2 font-semibold">Nudo</th>
                                <th className="p-2 font-semibold text-right">Eficiencia (aprox)</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-200">
                            <tr className="border-b border-slate-700">
                                <td className="p-2">Tensionless Hitch / High-Strength Tie-Off</td>
                                <td className="p-2 text-right text-green-400 font-bold">100%</td>
                            </tr>
                            <tr className="border-b border-slate-700">
                                <td className="p-2">Figure 8 on a Bight (Ocho con Gasa)</td>
                                <td className="p-2 text-right font-mono">~ 77 - 80%</td>
                            </tr>
                            <tr className="border-b border-slate-700">
                                <td className="p-2">Double Loop Figure 8</td>
                                <td className="p-2 text-right font-mono">~ 77%</td>
                            </tr>
                            <tr className="border-b border-slate-700">
                                <td className="p-2">Alpine Butterfly (Mariposa)</td>
                                <td className="p-2 text-right font-mono">~ 69 - 80%</td>
                            </tr>
                            <tr className="border-b border-slate-700">
                                <td className="p-2">Bowline (As de Guía)</td>
                                <td className="p-2 text-right font-mono">~ 71%</td>
                            </tr>
                            <tr className="border-b border-slate-700">
                                <td className="p-2">Water Knot (Nudo de Agua en cinta)</td>
                                <td className="p-2 text-right font-mono text-orange-300">~ 64%</td>
                            </tr>
                            <tr>
                                <td className="p-2">Figure 8 Bend (Ocho de Unión)</td>
                                <td className="p-2 text-right font-mono text-orange-300">~ 54 - 60%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            
            <div className="bg-blue-50 border-l-4 border-blue-400 p-5 rounded-lg">
                <p className="font-semibold text-blue-800 mb-2">📏 Regla de la Cola (Tail)</p>
                <p className="text-sm text-blue-700 leading-relaxed">
                    Todo nudo debe tener suficiente cuerda sobrante: <strong>al menos 6 pulgadas (15 cm) para cuerdas</strong> y <strong>3 pulgadas (8 cm) para cinta tubular (webbing)</strong> después de ser apretado.
                </p>
            </div>
        </div>
    );
}
