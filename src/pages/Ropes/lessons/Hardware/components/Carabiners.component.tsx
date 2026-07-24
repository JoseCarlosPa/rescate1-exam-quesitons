import { useState } from "react";
import { FaLink } from "react-icons/fa";

type CarabinerTab = "types" | "materials" | "inspection";

const CARABINER_SHAPES = [
    { name: "Ovalado", icon: "⭕", use: "Uso general, polipastos, poleas — la carga siempre se centra en el eje mayor", pro: "La carga no se desplaza al usar con poleas o mosquetones en tándem", con: "Menor resistencia que el D — más material en el lado de carga" },
    { name: "D modificado", icon: "🔷", use: "Uso general y anclajes — el diseño D desplaza la carga hacia el eje, no a la puerta", pro: "Mayor resistencia que el ovalado con menos peso; la puerta está en el lado de menor esfuerzo", con: "La carga puede desplazarse si se usa con poleas o accesorios" },
    { name: "Pera / HMS", icon: "🍐", use: "Aseguramiento con nudo dinámico (HMS), dispositivos tipo ATC, rapel", pro: "Gran apertura de puerta, excelente para dispositivos de aseguramiento manuales", con: "Puede girar la carga hacia el eje menor en algunos sistemas" },
    { name: "Gancho / Snaplink recto", icon: "📎", use: "Unión rápida en sistemas de rescate, pasos a través", pro: "Apertura recta facilita clipar en barras u objetos rectos", con: "La carga puede ser transversal si no se orienta correctamente" },
];

const GATE_TYPES = [
    { name: "Sin seguro (non-locking)", desc: "Puerta de resorte. Rápido de clipar. Riesgo de gate flutter. NO usar en puntos críticos de sistemas de rescate.", safe: false },
    { name: "Seguro de rosca (screw-lock)", desc: "Manga roscada que bloquea la puerta. El más común en rescate. Fácil de operar pero puede quedar sin roscar accidentalmente.", safe: true },
    { name: "Seguro de torsión (twist-lock)", desc: "Requiere girar y empujar. Más difícil de operar accidentalmente. Muy usado en ascendedores y poleas.", safe: true },
    { name: "Seguro doble (double-action)", desc: "Requiere dos movimientos simultáneos para abrirse. Máxima seguridad contra apertura accidental. Más lento de operar.", safe: true },
];

const INSPECTION_CHECKLIST = [
    { item: "Puerta cierra y bloquea correctamente sin esfuerzo adicional", critical: true },
    { item: "Ausencia de grietas visibles en el cuerpo o la puerta", critical: true },
    { item: "Sin ranuras por desgaste de cuerda (especialmente en el fondo del ojo)", critical: true },
    { item: "Remaches y partes móviles sin juego excesivo", critical: false },
    { item: "Sin corrosión activa que afecte el funcionamiento", critical: false },
    { item: "Superficies sin bordes o puntos agudos que dañen la cuerda", critical: false },
    { item: "El bloqueo de puerta funciona correctamente (no queda abierto)", critical: true },
    { item: "El grabado/marcado NFPA es legible", critical: false },
];

export default function Carabiners() {
    const [tab, setTab] = useState<CarabinerTab>("types");
    const [checked, setChecked] = useState<Record<number, boolean>>({});

    const toggle = (i: number) => setChecked(p => ({ ...p, [i]: !p[i] }));
    const checkedCount = Object.values(checked).filter(Boolean).length;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaLink className="w-5 h-5 mr-2 text-orange-500" />
                    Mosquetones (Carabiners)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El mosquetón es el eslabón de conexión fundamental en todos los sistemas de rescate con cuerdas.
                </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {([
                    { id: "types" as CarabinerTab, label: "Formas y Seguros" },
                    { id: "materials" as CarabinerTab, label: "Materiales y NFPA" },
                    { id: "inspection" as CarabinerTab, label: "Inspección" },
                ]).map(t => (
                    <button key={t.id} onClick={() => setTab(t.id)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${tab === t.id ? "bg-orange-500 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-orange-50"}`}>
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "types" && (
                <div className="space-y-5">
                    <div>
                        <h3 className="font-bold text-gray-800 mb-3">Formas de mosquetón</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {CARABINER_SHAPES.map((s, i) => (
                                <div key={i} className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-2xl">{s.icon}</span>
                                        <p className="font-bold text-orange-800">{s.name}</p>
                                    </div>
                                    <p className="text-xs text-gray-600 mb-2 italic">🎯 {s.use}</p>
                                    <p className="text-xs text-green-700">✅ {s.pro}</p>
                                    <p className="text-xs text-red-700 mt-1">❌ {s.con}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-800 mb-3">Tipos de seguro de puerta</h3>
                        <div className="space-y-3">
                            {GATE_TYPES.map((g, i) => (
                                <div key={i} className={`rounded-lg p-4 border-2 ${g.safe ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}`}>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span>{g.safe ? "🔒" : "⚠️"}</span>
                                        <p className={`font-semibold text-sm ${g.safe ? "text-green-700" : "text-red-700"}`}>{g.name}</p>
                                        {!g.safe && <span className="ml-auto bg-red-200 text-red-800 text-xs px-2 py-0.5 rounded-full">No usar en rescate crítico</span>}
                                    </div>
                                    <p className="text-xs text-gray-700">{g.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
                            <p className="font-semibold text-amber-800 text-sm mb-1">⚡ Gate Flutter</p>
                            <p className="text-xs text-amber-700">Los mosquetones sin bloqueo expuestos a vibraciones (helicóptero, cuerda vibrando) pueden tener "gate flutter" — la puerta se abre momentáneamente por vibración, reduciendo drásticamente la resistencia. <strong>Usar siempre mosquetones de bloqueo en todos los puntos críticos del sistema.</strong></p>
                        </div>
                    </div>
                </div>
            )}

            {tab === "materials" && (
                <div className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { mat: "Aluminio", icon: "⬜", pros: ["Muy ligero", "Suficiente resistencia para la mayoría de usos de rescate", "Menor costo"], cons: ["Mayor desgaste por abrasión — la cuerda deslizante puede crear ranuras", "Menos duradero en uso intensivo"], use: "Uso general en sistemas de rescate donde la cuerda no desliza continuamente." },
                            { mat: "Acero / Acero inoxidable", icon: "⬛", pros: ["Mayor resistencia al desgaste por abrasión", "Ideal cuando la cuerda pasa continuamente (cambios de dirección)", "Más duradero"], cons: ["Significativamente más pesado", "Mayor costo"], use: "Uso en puntos donde la cuerda desliza constantemente: cambios de dirección, poleas de sistema." },
                        ].map((m, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">{m.icon}</span>
                                    <h3 className="font-bold text-gray-800">{m.mat}</h3>
                                </div>
                                <div className="mb-3">
                                    <p className="text-xs font-semibold text-green-700 mb-1">✅ Ventajas</p>
                                    <ul className="space-y-0.5">{m.pros.map((p, j) => <li key={j} className="text-xs text-gray-700">▸ {p}</li>)}</ul>
                                </div>
                                <div className="mb-3">
                                    <p className="text-xs font-semibold text-red-700 mb-1">❌ Desventajas</p>
                                    <ul className="space-y-0.5">{m.cons.map((c, j) => <li key={j} className="text-xs text-gray-700">▸ {c}</li>)}</ul>
                                </div>
                                <div className="bg-white rounded-lg p-2 border border-gray-200">
                                    <p className="text-xs text-gray-600"><strong>Uso recomendado:</strong> {m.use}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-800 text-white rounded-xl p-5">
                        <p className="text-sm font-semibold text-orange-300 mb-3">📊 Requisitos NFPA 1983 para Mosquetones</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr>
                                        <th className="text-left p-2 text-orange-200">Eje de prueba</th>
                                        <th className="text-right p-2 text-orange-200">Uso General (G)</th>
                                        <th className="text-right p-2 text-orange-200">Uso Técnico (T)</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-200">
                                    {[
                                        ["Eje mayor", "40 kN (8,992 lbf)", "20 kN (4,496 lbf)"],
                                        ["Eje menor", "10 kN (2,248 lbf)", "7 kN (1,574 lbf)"],
                                        ["Puerta abierta", "10 kN (2,248 lbf)", "6 kN (1,349 lbf)"],
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-slate-700/50" : ""}>
                                            {row.map((cell, j) => <td key={j} className={`p-2 ${j > 0 ? "text-right font-mono" : ""}`}>{cell}</td>)}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-400 mt-2">Los valores se obtienen con el método de 3 sigma (5 muestras). Método ANSI Z359 requiere que las 5 muestras superen el mínimo.</p>
                    </div>
                </div>
            )}

            {tab === "inspection" && (
                <div className="space-y-5">
                    <div className="bg-white border border-gray-200 rounded-xl p-5">
                        <h3 className="font-bold text-gray-800 mb-1">🔍 Lista de Inspección</h3>
                        <p className="text-sm text-gray-500 mb-4">Inspeccionar antes de cada uso:</p>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full transition-all duration-500"
                                    style={{ width: `${(checkedCount / INSPECTION_CHECKLIST.length) * 100}%` }} />
                            </div>
                            <span className="text-sm font-semibold text-orange-700">{checkedCount}/{INSPECTION_CHECKLIST.length}</span>
                        </div>
                        <div className="space-y-2">
                            {INSPECTION_CHECKLIST.map((item, i) => (
                                <button key={i} onClick={() => toggle(i)}
                                    className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all ${checked[i] ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200 hover:border-orange-200"}`}>
                                    <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all ${checked[i] ? "bg-green-500 border-green-500" : "border-gray-300"}`}>
                                        {checked[i] && <span className="text-white text-xs font-bold">✓</span>}
                                    </div>
                                    <span className={`text-sm flex-1 ${checked[i] ? "line-through text-gray-400" : "text-gray-700"}`}>{item.item}</span>
                                    {item.critical && <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full flex-shrink-0">Crítico</span>}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5">
                        <p className="font-bold text-red-800 mb-3">🚫 Retira del servicio inmediatamente si:</p>
                        <ul className="space-y-2">
                            {["La puerta no cierra o no bloquea correctamente", "Hay grietas visibles en cualquier parte", "Hay ranuras por desgaste de cuerda", "Cualquier duda sobre la integridad del mosquetón"].map((r, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-red-800">
                                    <span className="text-red-500 text-lg">•</span>{r}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
