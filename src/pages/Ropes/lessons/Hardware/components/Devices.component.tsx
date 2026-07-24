import { useState } from "react";
import { MdOutlineDevicesOther } from "react-icons/md";
import { MdCheckCircle, MdCancel } from "react-icons/md";

type DeviceKey = "figure8" | "brakeBar" | "autolocking" | "mpd" | "clutch" | "ascender" | "belay540" | "anchorPlate" | "swivel";

const DEVICES: Record<DeviceKey, {
    name: string; icon: string; category: string;
    desc: string; pros: string[]; cons: string[];
    inspection: string[]; bg: string; accent: string;
}> = {
    figure8: {
        name: "Figura 8 (Figure 8 Descender)",
        icon: "8️⃣", category: "Descendedor",
        desc: "El descendedor más simple y versátil. Carece de piezas móviles pequeñas — fácil de inspeccionar y mantener.",
        pros: ["Muy simple — sin piezas móviles", "Versátil: rapel, descenso, control de cuerda", "Bajo costo", "Fácil de limpiar"],
        cons: ["Puede retorcer la cuerda", "Sin función autobloqueante — requiere control manual constante", "Genera más calor que dispositivos más eficientes"],
        inspection: ["Verificar 10% de material faltante por abrasión → retirar", "Suavizar bordes o puntos agudos con papel de lija", "Lavar con agua y jabón si está sucio, secar antes de guardar"],
        bg: "bg-gray-50 border-gray-200", accent: "text-gray-700",
    },
    brakeBar: {
        name: "Brake Bar Rack (Rack de Barras de Freno)",
        icon: "🎚️", category: "Descendedor",
        desc: "Proporciona control variable de la velocidad de descenso añadiendo o quitando barras. Muy usado en rescate vertical.",
        pros: ["Control variable de fricción (añadir/quitar barras)", "Versátil para diferentes diámetros de cuerda", "No retuerece la cuerda", "Bajo costo relativo"],
        cons: ["Más complejo que el Figura 8", "Puede confundirse si las barras no están correctamente colocadas", "Más pesado que algunos dispositivos modernos"],
        inspection: [
            "Verificar ambas tuercas del U-rack — que no estén sueltas",
            "Verificar la tuerca autobloqueante que sostiene las barras en el marco",
            "Si tiene ojo soldado, buscar grietas en la soldadura",
            "Enderezar dobleces menores en el marco",
            "Asegurar que las barras deslicen libremente",
            "Retirar si falta 10% del material por abrasión",
        ],
        bg: "bg-slate-50 border-slate-200", accent: "text-slate-700",
    },
    autolocking: {
        name: "Descendedor Autobloqueante",
        icon: "🔐", category: "Descendedor",
        desc: "Se bloquea automáticamente cuando se suelta la manija. Ideal para operaciones que requieren paradas frecuentes o transición de arista.",
        pros: ["Bloqueo automático al soltar la manija", "Seguridad adicional en paradas frecuentes", "Útil en transición de arista (ambas manos libres)"],
        cons: ["Más complejo y costoso", "Modelos actuales solo para una persona (salvo indicación del fabricante)", "Requiere entrenamiento adicional"],
        inspection: ["Verificar que las piezas móviles no estén dobladas ni con riesgo de atascarse", "Limpiar y secar tras cada uso", "En freno simple: ¡cuidado! Apretar más puede ACELERAR el descenso"],
        bg: "bg-indigo-50 border-indigo-200", accent: "text-indigo-700",
    },
    mpd: {
        name: "MPD (Multi-Purpose Device)",
        icon: "🔧", category: "Multipropósito",
        desc: "Dispositivo multipropósito de CMC. Combina polea de cambio de dirección, trinquete, control de descenso y dispositivo de aseguramiento.",
        pros: ["Cuatro funciones en uno: polea CD + trinquete + descenso + belay", "Certificado NFPA 1983", "Freno de estacionamiento (parking brake) único", "Eficiente en sistemas de izado"],
        cons: ["Más pesado y costoso que dispositivos individuales", "Requiere entrenamiento específico para uso correcto"],
        inspection: ["Revisar antes de cada uso: grietas, desgaste excesivo, corrosión", "Mover el Handle por todo su rango de movimiento", "Verificar que la roldana gira libremente solo en dirección antihoraria", "Mantener limpio y seco; alejar de ácidos, álcalis y químicos fuertes"],
        bg: "bg-orange-50 border-orange-200", accent: "text-orange-700",
    },
    clutch: {
        name: "CLUTCH (CMC/Harken Industrial)",
        icon: "🤜", category: "Multipropósito",
        desc: "Dispositivo multipropósito con polea incorporada. Certificado G-rated para cargas de dos personas. Doble seguro de placa lateral.",
        pros: ["Puede cargarse sin desconectar del anclaje o arnés", "Control de descenso para rapel o descenso", "Polea incorporada para sistemas de izado eficientes", "Certificado: NFPA 1983 (G), ANSI Z359.4, EN 12841/C, 341/2A, 15151/B"],
        cons: ["Más complejo que dispositivos simples", "Mayor costo y peso"],
        inspection: ["Verificar grietas, desgaste excesivo, corrosión o material extraño antes de cada uso", "Mover el Control Handle por todo su rango de movimiento", "Verificar que la roldana gira libremente solo en dirección antihoraria", "Proteger de llama, altas temperaturas y luz solar directa"],
        bg: "bg-red-50 border-red-200", accent: "text-red-700",
    },
    ascender: {
        name: "Ascendedor Mecánico (Gibbs, CMC Ascender)",
        icon: "⬆️", category: "Ascenso",
        desc: "Dispositivo de cam para ascender por una cuerda fija. Algunos se usan como trinquete en sistemas de VM por su función autobloqueante.",
        pros: ["Autobloqueante — útil como trinquete en sistemas VM", "Más eficiente que el nudo Prusik en sistemas de izado (no requiere ser atendido)"],
        cons: ["⚠️ NO usar como leva de izaje (haul cam) — podría dañar la cuerda si la carga aumenta", "Más pesado y costoso que un nudo Prusik", "El Prusik es más ligero, económico y aguanta más choque si hay carga de impacto"],
        inspection: ["Verificar cam: grietas, desgaste, bordes agudos", "Verificar cuerpo: bordes agudos, grietas, elongación del agujero del pin", "Verificar que el pin no esté doblado y que los encastres lo sostengan en posición", "Verificar cables, resortes, cuerdas o cadenas por función o deformación"],
        bg: "bg-emerald-50 border-emerald-200", accent: "text-emerald-700",
    },
    belay540: {
        name: "540° Rescue Belay",
        icon: "🛡️", category: "Aseguramiento",
        desc: "Dispositivo diseñado para arrestar y sostener una carga en caída. Más fácil de operar consistentemente que el doble Prusik en tándem y puede liberarse bajo carga.",
        pros: ["Mucho más fácil de configurar y operar que el doble Prusik en tándem", "Puede liberarse bajo carga — ventaja crítica en rescate", "Operación consistente"],
        cons: ["Significativamente más pesado y costoso que dos lazos de cordín", "Requiere mantenimiento específico del fabricante"],
        inspection: ["Ver instrucciones del fabricante para uso, cuidado y mantenimiento específico", "Verificar especialmente el resorte en la parte posterior"],
        bg: "bg-teal-50 border-teal-200", accent: "text-teal-700",
    },
    anchorPlate: {
        name: "Placa de Anclaje (Anchor Plate / RPM Plate)",
        icon: "🔩", category: "Organización",
        desc: "Placa con 4–5 agujeros pequeños y un agujero grande. Organiza el hardware del anclaje, evita que los mosquetones se aprieten y facilita el setup del sistema.",
        pros: ["Organiza el hardware del anclaje", "Los agujeros pequeños evitan que los mosquetones se aprieten entre sí", "El agujero grande es punto de recolección para anclajes multipunto", "Permite pre-rigging del sistema (método RPM: Rack-Pulley-Mariner)"],
        cons: ["Añade peso al sistema", "Requiere un mosquetón adicional para conectarse al anclaje"],
        inspection: ["Buscar abolladuras, grietas o distorsión en los agujeros", "Suavizar bordes o puntos agudos con papel de lija", "Se pueden enderezar dobleces menores en la placa de acero inoxidable", "Lavar con agua y jabón según sea necesario"],
        bg: "bg-amber-50 border-amber-200", accent: "text-amber-700",
    },
    swivel: {
        name: "Swivel (Pivote Giratorio)",
        icon: "🔀", category: "Accesorios",
        desc: "Previene el enredo y retorcimiento de las líneas del sistema. Permite girar la carga fácilmente para mejor manejo.",
        pros: ["Previene enredo de líneas", "Permite girar la carga para pasar por aperturas pequeñas", "Swivel-pulley: combina pivote + polea ahorrando altura de trabajo"],
        cons: ["La mayoría cumple NFPA MBS, pero cargas menores a la MBS pueden dañar el rodamiento de bolas con pérdida de eficiencia", "Para cargas altas, buscar swivel con rodamientos diseñados para altas cargas"],
        inspection: ["Igual que la inspección de poleas de rescate", "Verificar que el pivote gira libremente sin juego excesivo"],
        bg: "bg-violet-50 border-violet-200", accent: "text-violet-700",
    },
};

export default function Devices() {
    const [selected, setSelected] = useState<DeviceKey>("figure8");
    const dev = DEVICES[selected];

    const categories: Record<string, DeviceKey[]> = {
        "Descendedores": ["figure8", "brakeBar", "autolocking"],
        "Multipropósito": ["mpd", "clutch"],
        "Ascenso / Aseguramiento": ["ascender", "belay540"],
        "Organización": ["anchorPlate", "swivel"],
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <MdOutlineDevicesOther className="w-6 h-6 mr-2 text-orange-500" />
                    Descendedores, Ascendedores y Dispositivos Especiales
                </h2>
                <p className="text-gray-600 text-sm mb-5">Selecciona un dispositivo para ver sus características e inspección:</p>
            </div>

            {/* Category selector */}
            <div className="space-y-3">
                {Object.entries(categories).map(([cat, keys]) => (
                    <div key={cat}>
                        <p className="text-xs font-semibold text-gray-500 uppercase mb-2">{cat}</p>
                        <div className="flex flex-wrap gap-2">
                            {keys.map(key => {
                                const d = DEVICES[key];
                                return (
                                    <button key={key} onClick={() => setSelected(key)}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 text-sm font-medium transition-all ${selected === key ? `${d.bg} shadow-md scale-105 border-current ${d.accent}` : "border-gray-200 bg-white hover:border-gray-300"}`}>
                                        <span>{d.icon}</span>
                                        <span className="text-xs">{d.name.split("(")[0].trim().substring(0, 20)}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Detail */}
            <div className={`rounded-xl border-2 p-6 ${dev.bg} transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl">{dev.icon}</span>
                    <div>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-white border ${dev.accent} mb-1 inline-block`}>{dev.category}</span>
                        <h3 className="text-xl font-bold text-gray-800">{dev.name}</h3>
                    </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{dev.desc}</p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-xs font-semibold text-green-700 mb-2 flex items-center gap-1"><MdCheckCircle className="w-4 h-4"/>Ventajas</p>
                        <ul className="space-y-1">{dev.pros.map((p, i) => <li key={i} className="text-xs text-gray-700">▸ {p}</li>)}</ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-xs font-semibold text-red-700 mb-2 flex items-center gap-1"><MdCancel className="w-4 h-4"/>Desventajas / Consideraciones</p>
                        <ul className="space-y-1">{dev.cons.map((c, i) => <li key={i} className="text-xs text-gray-700">▸ {c}</li>)}</ul>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-xs font-semibold text-orange-700 mb-2">🔍 Inspección y Cuidado</p>
                    <ul className="space-y-1">{dev.inspection.map((item, i) => <li key={i} className="text-xs text-gray-700">▸ {item}</li>)}</ul>
                </div>
            </div>

            {/* Comparative note */}
            <div className="bg-slate-800 text-white rounded-xl p-5">
                <p className="text-sm font-semibold text-orange-300 mb-2">📌 Comparación: Dispositivos Multipropósito vs. Simples</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-slate-700 rounded-lg p-3">
                        <p className="font-semibold text-orange-200 mb-1">MPD / CLUTCH / MAESTRO</p>
                        <p className="text-slate-300 text-xs">Primer dispositivo en combinar: descenso + polea CD con trinquete + belay + rapel. Todo con certificación NFPA. Simplifica el equipo del sistema.</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-3">
                        <p className="font-semibold text-orange-200 mb-1">Figura 8 / Brake Bar Rack</p>
                        <p className="text-slate-300 text-xs">Simplicidad, versatilidad y bajo costo. Permiten familiarizarse con fundamentos. Los nuevos descendedores pueden ser más complejos, costosos, pesados y menos versátiles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
