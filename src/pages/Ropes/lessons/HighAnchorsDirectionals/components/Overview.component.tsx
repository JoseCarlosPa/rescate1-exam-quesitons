import { MdOutlineConstruction } from "react-icons/md";
import { FaTriangleExclamation } from "react-icons/fa6";

const devices = [
    {
        name: "Trípode",
        color: "blue",
        pros: ["Más estable — 3 patas", "Se monta solo (free-standing)", "Versátil en superficies inclinadas"],
        cons: ["Requiere espacio para 3 patas", "Patas telescópicas integradas (no desmontable)"],
    },
    {
        name: "Arizona Vortex",
        color: "indigo",
        pros: ["Patas completamente desmontables (menor tamaño)", "Múltiples configuraciones imposibles para trípode", "Útil en espacios contra paredes"],
        cons: ["Mayor tiempo de montaje", "Mayor complejidad operativa"],
    },
    {
        name: "Davit Arm",
        color: "teal",
        pros: ["Puede pivotar/girar lateralmente", "Base permanente multi-sitio en plantas", "No ocupa espacio sobre la abertura"],
        cons: ["Necesita base fija instalada", "Generalmente más bajo que trípode"],
    },
    {
        name: "Gin Pole",
        color: "amber",
        pros: ["Mínima huella (1 sola pata)", "El más ligero y portátil", "Cabe donde no entra nada más"],
        cons: ["Requiere 3-4 guy lines para estabilizar", "Más lento de montar"],
    }
];

export default function Overview() {
    const colorMap: Record<string, string> = {
        blue: "border-blue-200 bg-blue-50",
        indigo: "border-indigo-200 bg-indigo-50",
        teal: "border-teal-200 bg-teal-50",
        amber: "border-amber-200 bg-amber-50",
    };
    const titleMap: Record<string, string> = {
        blue: "text-blue-900", indigo: "text-indigo-900", teal: "text-teal-900", amber: "text-amber-900"
    };

    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 border-l-4 border-slate-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdOutlineConstruction className="w-8 h-8 text-slate-600 mr-3" />
                    <h2 className="text-2xl font-bold text-slate-800">Anclajes Altos Artificiales (AHD)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Un AHD (Artificial High Directional) es cualquier estructura fabricada o improvisada que eleva el punto de anclaje sobre la abertura o borde, permitiendo que la camilla suba/baje sin trabarse en el filo.
                </p>
                <div className="bg-red-50 p-4 rounded flex items-start gap-3 border border-red-200">
                    <FaTriangleExclamation className="w-5 h-5 text-red-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-red-900 mb-1">Regla #1: Centrar la Carga</p>
                        <p className="text-sm text-red-800">
                            Toda carga debe permanecer DENTRO del perímetro de las patas del trípode. Si alguien jala la camilla hacia afuera de las patas, el trípode vuelca.
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {devices.map((d) => (
                    <div key={d.name} className={`border-2 rounded-xl p-4 shadow-sm ${colorMap[d.color]}`}>
                        <h4 className={`font-bold mb-3 ${titleMap[d.color]}`}>{d.name}</h4>
                        <div className="space-y-2">
                            <div>
                                <p className="text-xs font-bold text-green-700 mb-1">✅ Ventajas</p>
                                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                    {d.pros.map(p => <li key={p}>{p}</li>)}
                                </ul>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-red-600 mb-1">⚠ Limitaciones</p>
                                <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                                    {d.cons.map(c => <li key={c}>{c}</li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
