import { useState } from "react";
import { GiKnot } from "react-icons/gi";

type FiberKey = "nylon" | "polyester" | "polyprop" | "aramid" | "hmpe" | "lcap";

interface FiberInfo {
    name: string;
    brands: string;
    emoji: string;
    meltPoint: string;
    strength: string;
    stretch: string;
    uvResistance: string;
    sg: string;
    pros: string[];
    cons: string[];
    uses: string;
    color: string;
    accent: string;
}

const FIBERS: Record<FiberKey, FiberInfo> = {
    nylon: {
        name: "Nylon",
        brands: "Fibra estándar en la mayoría de cuerdas de rescate",
        emoji: "🟡",
        meltPoint: "219–254 °C",
        strength: "Alta",
        stretch: "Moderada",
        uvResistance: "Moderada",
        sg: "1.14",
        pros: [
            "Alta resistencia",
            "Alta resistencia a la abrasión",
            "Capacidad de absorber cargas de impacto (shock loads)",
            "Costo razonable",
        ],
        cons: [
            "Pérdida de resistencia de hasta 23% al absorber agua",
            "Aumento de peso cuando está mojado",
            "Sensible a los ácidos",
        ],
        uses: "Cuerda principal de rescate y rapel. Núcleo de la mayoría de cuerdas kernmantle de rescate.",
        color: "bg-yellow-50 border-yellow-300",
        accent: "border-yellow-500",
    },
    polyester: {
        name: "Poliéster",
        brands: "CMC G11 Lifeline (cubierta de poliéster)",
        emoji: "🔵",
        meltPoint: "256 °C",
        strength: "Alta",
        stretch: "Baja",
        uvResistance: "Muy alta",
        sg: "1.38",
        pros: [
            "Absorción de agua mínima — rendimiento mojado casi igual al seco",
            "Alta resistencia a la degradación UV",
            "Resistencia y abrasión similares al nylon",
        ],
        cons: [
            "Baja elongación reduce la capacidad de absorber cargas de impacto",
            "Ligeramente más pesado que el nylon",
            "Menor fricción que el nylon",
        ],
        uses: "Cubierta de cuerdas de rescate. Cuerdas de baja elongación para sistemas. CMC G11 Lifeline.",
        color: "bg-blue-50 border-blue-300",
        accent: "border-blue-500",
    },
    polyprop: {
        name: "Polipropileno / Polietileno",
        brands: "Cuerdas de lanzamiento para rescate acuático",
        emoji: "🟢",
        meltPoint: "135 °C",
        strength: "Baja",
        stretch: "Baja",
        uvResistance: "Muy baja",
        sg: "0.91–0.96 (¡flota!)",
        pros: [
            "Flota en el agua",
            "Buena resistencia a la mayoría de químicos",
        ],
        cons: [
            "Baja resistencia y durabilidad",
            "No apta para rapel, izar cargas pesadas o sistemas de rescate",
            "Muy baja resistencia a la degradación UV",
        ],
        uses: "EXCLUSIVAMENTE cuerdas de lanzamiento (throwlines) para rescate acuático. No usar en sistemas de rescate vertical.",
        color: "bg-green-50 border-green-300",
        accent: "border-green-500",
    },
    aramid: {
        name: "Aramidas (Kevlar®, Technora®, Twaron®)",
        brands: "Technora® → líneas de escape resistentes al fuego",
        emoji: "🔴",
        meltPoint: "~500 °C (¡descompone, no se derrite!)",
        strength: "Muy alta",
        stretch: "Muy baja",
        uvResistance: "Baja",
        sg: "1.41",
        pros: [
            "Alta resistencia",
            "Alta resistencia a altas temperaturas",
            "No se derrite — se descompone a ~500°C",
            "Technora®/Twaron® sobreviven bien las flexiones repetidas",
        ],
        cons: [
            "Elongación extremadamente baja",
            "Kevlar® no sobrevivía las flexiones repetidas (reemplazado)",
            "Muy alto costo",
        ],
        uses: "Technora® es la fibra de elección para líneas de escape resistentes al fuego y cuerdas de seguridad de vida para aplicaciones en incendios.",
        color: "bg-red-50 border-red-300",
        accent: "border-red-500",
    },
    hmpe: {
        name: "HMPE (Spectra®, Dyneema®)",
        brands: "Spectra® (Honeywell), Dyneema® (DSM)",
        emoji: "⚪",
        meltPoint: "135 °C (MUY BAJO)",
        strength: "Muy alta",
        stretch: "Muy baja",
        uvResistance: "Muy alta",
        sg: "0.91",
        pros: [
            "Muy alta resistencia",
            "Muy liviana (SG < 1 — ¡flota!)",
            "Alta resistencia UV",
        ],
        cons: [
            "Propiedades térmicas muy bajas — se derrite fácilmente con la fricción",
            "NO recomendadas para rapel o sistemas de rescate",
        ],
        uses: "Se añaden a cuerdas de rescate acuático para mayor resistencia en diámetros pequeños donde la flotabilidad también importa. NO usar en sistemas de rescate vertical.",
        color: "bg-gray-50 border-gray-300",
        accent: "border-gray-500",
    },
    lcap: {
        name: "LCAP (Vectran®)",
        brands: "Vectran® — Liquid Crystal Aromatic Polyester",
        emoji: "🟣",
        meltPoint: "330 °C",
        strength: "Muy alta",
        stretch: "Muy baja",
        uvResistance: "Baja",
        sg: "1.41",
        pros: [
            "Alta resistencia",
            "Alta resistencia a temperaturas elevadas",
        ],
        cons: [
            "Fibra muy rígida",
            "Precio extremadamente alto",
            "Uso limitado en rescate",
        ],
        uses: "Uso limitado y experimental en rescate. Similar a las aramidas pero aún más caro y rígido.",
        color: "bg-purple-50 border-purple-300",
        accent: "border-purple-500",
    },
};

const CONSTRUCTIONS = [
    {
        name: "Trenzado (Laid / Tres Hebras)",
        icon: "〰️",
        desc: "Construcción tradicional usada históricamente (cuerda Goldline, manila). Las hebras se tuercen entre sí.",
        pros: ["Bajo costo", "Disponibilidad"],
        cons: [
            "Fibras de carga expuestas en la superficie — la abrasión las corta",
            "Tiende a enredarse",
            "Gira durante rapeles libres",
            "Mayor elongación",
        ],
        note: "Ya no se usa en rescate moderno.",
        bg: "bg-amber-50",
        border: "border-amber-300",
    },
    {
        name: "Kernmantle",
        icon: "🪢",
        desc: "Núcleo (kern) de haces de fibras paralelas + cubierta (mantle) protectora. Construcción estándar hoy en día.",
        pros: [
            "Alta resistencia a la abrasión",
            "El núcleo (70-90% de la carga) queda protegido",
            "Buen manejo (handling)",
            "Disponible en baja elongación para rescate",
        ],
        cons: ["Más costoso que la cuerda trenzada", "Deslizamiento de cubierta posible en algunos modelos"],
        note: "NFPA 1983 exige construcción block-creel (fibras sin empalmes en toda la longitud).",
        bg: "bg-violet-50",
        border: "border-violet-300",
    },
    {
        name: "Doble Trenzado (Braid on Braid)",
        icon: "🔄",
        desc: "Un trenzado hueco dentro de otro. El núcleo puede llevar solo el 50% de la carga.",
        pros: ["Suave y fácil de manejar"],
        cons: [
            "Núcleo lleva solo ~50% de la carga",
            "Rara vez usada en sistemas de rescate",
        ],
        note: "Común en cuerdas náuticas, cuerdas de lanzamiento y drizas de escalera.",
        bg: "bg-blue-50",
        border: "border-blue-300",
    },
];

export default function FibersConstruction() {
    const [selectedFiber, setSelectedFiber] = useState<FiberKey>("nylon");
    const fiber = FIBERS[selectedFiber];

    return (
        <div className="space-y-8">
            {/* FIBRAS */}
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiKnot className="w-6 h-6 mr-2 text-violet-500" />
                    Tipos de Fibras para Cuerdas de Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Selecciona una fibra para ver sus propiedades detalladas:
                </p>

                {/* Fiber selector */}
                <div className="flex flex-wrap gap-2 mb-5">
                    {(Object.entries(FIBERS) as [FiberKey, FiberInfo][]).map(([key, f]) => (
                        <button
                            key={key}
                            onClick={() => setSelectedFiber(key)}
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                                selectedFiber === key
                                    ? `${f.accent} bg-white shadow-md scale-105`
                                    : "border-gray-200 bg-white hover:border-gray-300"
                            }`}
                        >
                            <span>{f.emoji}</span>
                            <span>{f.name.split(" ")[0]}</span>
                        </button>
                    ))}
                </div>

                {/* Fiber detail */}
                <div className={`rounded-xl border-2 p-6 ${fiber.color} ${fiber.accent} transition-all duration-300`}>
                    <div className="flex items-start gap-4 mb-5">
                        <span className="text-4xl">{fiber.emoji}</span>
                        <div>
                            <h3 className="text-xl font-bold text-gray-800">{fiber.name}</h3>
                            <p className="text-sm text-gray-500 italic">{fiber.brands}</p>
                        </div>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                        {[
                            { label: "Punto de fusión", value: fiber.meltPoint },
                            { label: "Resistencia", value: fiber.strength },
                            { label: "Elongación", value: fiber.stretch },
                            { label: "Resistencia UV", value: fiber.uvResistance },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white rounded-lg p-3 border border-gray-200 text-center">
                                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                                <p className="font-semibold text-gray-800 text-sm">{stat.value}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-xs font-semibold text-green-700 uppercase mb-2">✅ Ventajas</p>
                            <ul className="space-y-1">
                                {fiber.pros.map((p, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-1">
                                        <span className="text-green-500 flex-shrink-0">▸</span> {p}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-red-700 uppercase mb-2">❌ Desventajas</p>
                            <ul className="space-y-1">
                                {fiber.cons.map((c, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-1">
                                        <span className="text-red-500 flex-shrink-0">▸</span> {c}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="text-xs font-semibold text-violet-700 mb-1">🎯 Usos principales</p>
                        <p className="text-sm text-gray-700">{fiber.uses}</p>
                    </div>
                </div>
            </div>

            {/* CONSTRUCCIONES */}
            <div>
                <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                    🏗️ Tipos de Construcción
                </h2>
                <div className="space-y-4">
                    {CONSTRUCTIONS.map((c, i) => (
                        <div key={i} className={`rounded-xl border-2 p-5 ${c.bg} ${c.border}`}>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-2xl">{c.icon}</span>
                                <h3 className="font-bold text-gray-800">{c.name}</h3>
                            </div>
                            <p className="text-sm text-gray-700 mb-3">{c.desc}</p>
                            <div className="grid md:grid-cols-2 gap-3 mb-3">
                                <div>
                                    <p className="text-xs font-semibold text-green-700 mb-1">✅ Ventajas</p>
                                    <ul className="space-y-0.5">
                                        {c.pros.map((p, j) => (
                                            <li key={j} className="text-xs text-gray-700">▸ {p}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-semibold text-red-700 mb-1">❌ Desventajas</p>
                                    <ul className="space-y-0.5">
                                        {c.cons.map((cn, j) => (
                                            <li key={j} className="text-xs text-gray-700">▸ {cn}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg px-3 py-2 border border-gray-200">
                                <p className="text-xs text-gray-600 italic">📌 {c.note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
