import { MdCheckCircle } from "react-icons/md";
import { GiMetalBar } from "react-icons/gi";

export default function HardwareOverview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <GiMetalBar className="w-8 h-8 text-orange-500 mr-3" />
                    <h2 className="text-2xl font-bold text-orange-700">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante será capaz de <strong>describir los materiales, usos e inspección</strong>{" "}
                    del hardware de rescate con cuerdas — los componentes metálicos del sistema.
                </p>
            </div>

            {/* NFPA JOB PERFORMANCE */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-orange-300 mb-2">NFPA® Objetivos de Aprendizaje</p>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        "Describir los materiales y características del hardware de rescate",
                        "Describir los usos del hardware en sistemas de rescate",
                        "Describir la inspección y mantenimiento del hardware de rescate",
                    ].map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 bg-slate-700 rounded-lg p-3 text-sm">
                            <MdCheckCircle className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-200">{obj}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categorías del capítulo */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">🗺️ Equipo que cubre este capítulo</h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        { icon: "🪝", name: "Mosquetones", desc: "Tipos, materiales, clasificación NFPA, resistencia en eje mayor/menor/puerta abierta, gate flutter, inspección." },
                        { icon: "🛑", name: "Descendedores y Frenos", desc: "Figura 8, Brake Bar Rack, descendedores autobloqueantes, doble freno, criterios de retiro." },
                        { icon: "⚙️", name: "Poleas", desc: "Poleas fijas vs. móviles, VM, Prusik-Minding, tipos especiales (swivel, self-tending, knot-pass)." },
                        { icon: "🔀", name: "Swivels y Placas de Anclaje", desc: "Prevención de enredos, organización del sistema, pre-rigging con placa de anclaje." },
                        { icon: "🔧", name: "Ascendedores Mecánicos", desc: "Gibbs, CMC Ascender, uso correcto y limitaciones en sistemas de ventaja mecánica." },
                        { icon: "🛡️", name: "Dispositivos Multipropósito", desc: "MPD, CLUTCH, MAESTRO — descenso, izado, aseguramiento y rapel en un solo dispositivo." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                                <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dato clave */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-5 rounded-lg">
                <p className="font-semibold text-orange-800 mb-2">⚡ Principio fundamental del hardware de rescate</p>
                <p className="text-sm text-orange-700 leading-relaxed">
                    El hardware de rescate es diferente al hardware de escalada deportiva o espeleología.
                    Siempre usa equipo <strong>diseñado y construido específicamente para rescate</strong>{" "}
                    que cumpla con NFPA 1983. Mucho hardware etiquetado como "de rescate" en el mercado
                    son realmente modelos de escalada ligera no aptos para las cargas del rescate.
                </p>
            </div>

            {/* NFPA clasificación */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">📊 Clasificación NFPA 1983 del Hardware</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-orange-100">
                                <th className="p-3 text-left font-semibold text-orange-800">Elemento</th>
                                <th className="p-3 text-right font-semibold text-orange-800">Uso General (G)</th>
                                <th className="p-3 text-right font-semibold text-orange-800">Uso Técnico (T)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { item: "Mosquetón — eje mayor", g: "40 kN (8,992 lbf)", t: "20 kN (4,496 lbf)" },
                                { item: "Mosquetón — eje menor", g: "10 kN (2,248 lbf)", t: "7 kN (1,574 lbf)" },
                                { item: "Mosquetón — puerta abierta", g: "10 kN (2,248 lbf)", t: "6 kN (1,349 lbf)" },
                                { item: "Polea", g: "36 kN (8,093 lbf)", t: "18 kN (4,046 lbf)" },
                            ].map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                    <td className="p-3 text-gray-700">{row.item}</td>
                                    <td className="p-3 text-right font-mono text-gray-800">{row.g}</td>
                                    <td className="p-3 text-right font-mono text-gray-600">{row.t}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-gray-400 italic mt-2">
                    * G = Uso General (1–2 personas) | T = Uso Técnico (1 persona). Valores mínimos calculados con 3 sigma.
                </p>
            </div>
        </div>
    );
}
