import { useState } from "react";
import { FaChartBar } from "react-icons/fa";

const SIGMA_SAMPLES = [
    { test: "Muestra 1", lbf: 9870, kN: 43.88 },
    { test: "Muestra 2", lbf: 9940, kN: 44.24 },
    { test: "Muestra 3", lbf: 10010, kN: 44.55 },
    { test: "Muestra 4", lbf: 9790, kN: 43.56 },
    { test: "Muestra 5", lbf: 9890, kN: 44.00 },
];

const MEAN_LBF = 9900;
const STD_DEV_LBF = 82;
const SIGMA3_LBF = MEAN_LBF - 3 * STD_DEV_LBF; // 9654

export default function ThreeSigma() {
    const [step, setStep] = useState(0);

    const steps = [
        {
            title: "1. Prueba 5 muestras hasta la falla",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        NFPA 1983 requiere probar <strong>5 muestras</strong> del mismo producto hasta la falla.
                        Incluso productos aparentemente idénticos darán resultados diferentes:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-sm">
                            <thead>
                                <tr className="bg-emerald-100">
                                    <th className="p-3 text-left font-semibold text-emerald-800">Muestra</th>
                                    <th className="p-3 text-right font-semibold text-emerald-800">Resultado (lbf)</th>
                                    <th className="p-3 text-right font-semibold text-emerald-800">Resultado (kN)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {SIGMA_SAMPLES.map((s, i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="p-3 text-gray-700">{s.test}</td>
                                        <td className="p-3 text-right font-mono text-gray-800">{s.lbf.toLocaleString()}</td>
                                        <td className="p-3 text-right font-mono text-gray-600">{s.kN.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-500 italic">
                        Nota: los valores pueden variar ampliamente en sistemas ensamblados y menos en metales simples.
                    </p>
                </div>
            ),
        },
        {
            title: "2. Calcula la media (promedio)",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        La <strong>media (x̄)</strong> se obtiene sumando todos los resultados y dividiéndolos
                        entre el número de muestras:
                    </p>
                    <div className="bg-slate-800 text-white rounded-xl p-6 font-mono text-sm">
                        <div className="text-emerald-300 mb-2">// Suma de todos los resultados</div>
                        <div>9,870 + 9,940 + 10,010 + 9,790 + 9,890 = <span className="text-yellow-300">49,500 lbf</span></div>
                        <div className="mt-3 text-emerald-300">// Media</div>
                        <div>x̄ = 49,500 ÷ 5 = <span className="text-yellow-300 text-lg font-bold">{MEAN_LBF.toLocaleString()} lbf</span></div>
                    </div>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                        <p className="text-emerald-800 text-sm">
                            ⚡ La media representa el centro estadístico de los datos, pero <strong>no es el valor que se marca</strong> en el producto.
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "3. Calcula la desviación estándar (σ)",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        La <strong>desviación estándar (σ)</strong> mide qué tanto se dispersan los resultados
                        alrededor de la media. Se calcula con la siguiente fórmula estadística:
                    </p>
                    <div className="bg-slate-800 text-white rounded-xl p-6 text-center">
                        <div className="text-emerald-300 text-sm mb-3">Fórmula de desviación estándar</div>
                        <div className="text-2xl font-mono mb-2">
                            σ = √[ (n·Σx² − (Σx)²) / n(n−1) ]
                        </div>
                        <div className="text-gray-400 text-sm mt-3">
                            donde n = número de muestras y x = resultado de cada muestra
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <p className="text-gray-700 text-sm">
                            Con los 5 resultados de ejemplo, la desviación estándar resulta en aproximadamente:{" "}
                            <strong className="text-emerald-700">σ ≈ {STD_DEV_LBF} lbf</strong>
                        </p>
                    </div>
                </div>
            ),
        },
        {
            title: "4. Aplica el cálculo de 3 sigma",
            content: (
                <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                        El resultado final se obtiene restando <strong>tres desviaciones estándar</strong> de la media.
                        Esto garantiza que el 99.87% de los productos igualarán o superarán ese valor:
                    </p>
                    <div className="bg-slate-800 text-white rounded-xl p-6 font-mono">
                        <div className="text-emerald-300 mb-2 text-sm">// Cálculo 3 sigma (3σ)</div>
                        <div>MBS = x̄ − (3 × σ)</div>
                        <div className="mt-2">MBS = {MEAN_LBF.toLocaleString()} − (3 × {STD_DEV_LBF})</div>
                        <div className="mt-2">MBS = {MEAN_LBF.toLocaleString()} − {3 * STD_DEV_LBF}</div>
                        <div className="mt-3 text-yellow-300 text-xl font-bold">
                            MBS = {SIGMA3_LBF.toLocaleString()} lbf
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                            <p className="text-sm font-semibold text-emerald-700 mb-1">✅ Lo que se marca</p>
                            <p className="text-sm text-emerald-800">
                                El fabricante puede marcar el valor de 3σ (<strong>{SIGMA3_LBF.toLocaleString()} lbf</strong>) o el
                                mínimo de desempeño requerido, a su elección. La mayoría marca el valor de 3σ, generalmente redondeado hacia abajo.
                            </p>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm font-semibold text-blue-700 mb-1">📊 Confiabilidad estadística</p>
                            <p className="text-sm text-blue-800">
                                Con 3σ hay un <strong>99.87%</strong> de probabilidad de que cualquier
                                unidad producida iguale o supere ese resultado. Solo ~1 de cada 1,000 podría estar por debajo.
                            </p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaChartBar className="w-6 h-6 mr-2 text-emerald-500" />
                    El Método de 3 Sigma (3σ)
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Los distintos estándares usan diferentes enfoques para llegar al número que se marca en el
                    producto. NFPA 1983 usa un cálculo estadístico llamado <strong>3 sigma</strong>. Sigue
                    los pasos para entenderlo:
                </p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
                {steps.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setStep(idx)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                            step === idx
                                ? "bg-emerald-500 text-white shadow-md scale-105"
                                : "bg-gray-100 text-gray-600 hover:bg-emerald-100"
                        }`}
                    >
                        Paso {idx + 1}
                    </button>
                ))}
            </div>

            {/* Step content */}
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-6 min-h-64 transition-all">
                <h3 className="text-lg font-bold text-emerald-700 mb-4">{steps[step].title}</h3>
                {steps[step].content}
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
                <button
                    onClick={() => setStep((prev) => Math.max(0, prev - 1))}
                    disabled={step === 0}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    ← Anterior
                </button>
                <span className="text-sm text-gray-500 self-center">
                    Paso {step + 1} de {steps.length}
                </span>
                <button
                    onClick={() => setStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={step === steps.length - 1}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed transition"
                >
                    Siguiente →
                </button>
            </div>

            {/* ANSI comparison */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
                <p className="font-semibold text-amber-800 mb-2">⚖️ Comparación: NFPA 1983 vs. ANSI Z359</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3 border border-amber-200">
                        <p className="font-semibold text-amber-700 mb-1">ANSI Z359 (mosquetones)</p>
                        <p className="text-gray-700">Prueba 5 muestras. <strong>Todas deben superar el mínimo</strong>.
                            El producto se marca con ese mínimo (ej. 5,000 lbf eje mayor).</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-amber-200">
                        <p className="font-semibold text-amber-700 mb-1">NFPA 1983 (mosquetones y más)</p>
                        <p className="text-gray-700">Prueba 5 muestras. Aplica <strong>cálculo de 3 sigma</strong>.
                            El producto se marca con el mínimo de desempeño o el valor de 3σ.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
