import { FaHardHat } from "react-icons/fa";

const HELMET_TYPES = [
    {
        name: "Cascos de Rescate / Escalada",
        icon: "🧗",
        desc: "Ligeros, compactos y de perfil bajo. Diseñados para proteger de peligros sin estorbar.",
        pros: ["Caben en áreas estrechas (espacios confinados, cuevas)", "Muy ligeros", "Aptos para mirar hacia arriba sin que el borde trasero choque con el cuello"],
        cons: ["Menor protección contra objetos punzantes muy pesados", "Sin visera para el sol por defecto"],
        cert: "EN 397, EN 12492, NFPA 1951, ANSI Z89.1",
        color: "bg-teal-50 border-teal-200",
        accent: "text-teal-700"
    },
    {
        name: "Cascos de Bomberos (Structural)",
        icon: "🚒",
        desc: "Cascos tradicionales para combate de incendios estructurales.",
        pros: ["Excelente protección térmica", "Protección contra impactos pesados"],
        cons: ["Muy pesados y calurosos para trabajo con cuerdas", "El ala ancha choca con la espalda al mirar hacia arriba", "Reducen visibilidad en espacios confinados", "No aptos para la mayoría de rescates verticales"],
        cert: "NFPA 1971",
        color: "bg-red-50 border-red-200",
        accent: "text-red-700"
    },
    {
        name: "Cascos de Seguridad Industrial",
        icon: "🏗️",
        desc: "Cascos comunes en la industria y construcción.",
        pros: ["Disponibles con clasificación dieléctrica (ANSI Z89.1 Tipo 1, Clase E) para trabajo en torres eléctricas", "Aceptados por normativas industriales (OSHA)"],
        cons: ["Muchos carecen de barboquejo adecuado", "El diseño de suspensión puede no estar pensado para impactos laterales", "Perfil alto en algunos modelos"],
        cert: "ANSI Z89.1",
        color: "bg-amber-50 border-amber-200",
        accent: "text-amber-700"
    }
];

export default function Helmets() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaHardHat className="w-5 h-5 mr-2 text-teal-600" />
                    Cascos de Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El casco es esencial no solo por la caída de objetos o rocas, sino también por el equipo que otro compañero 
                    pueda dejar caer, o para prevenir choques de cabezas al inclinarse sobre la camilla.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {HELMET_TYPES.map((h, i) => (
                    <div key={i} className={`rounded-xl border-2 p-4 ${h.color}`}>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-2xl">{h.icon}</span>
                            <h3 className={`font-bold ${h.accent}`}>{h.name}</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{h.desc}</p>
                        
                        <div className="mb-3">
                            <p className="text-xs font-semibold text-green-700">Ventajas</p>
                            <ul className="space-y-1 mt-1">
                                {h.pros.map((p, j) => <li key={j} className="text-xs text-gray-600">✓ {p}</li>)}
                            </ul>
                        </div>
                        
                        <div className="mb-3">
                            <p className="text-xs font-semibold text-red-700">Consideraciones</p>
                            <ul className="space-y-1 mt-1">
                                {h.cons.map((c, j) => <li key={j} className="text-xs text-gray-600">✗ {c}</li>)}
                            </ul>
                        </div>

                        <div className="bg-white/60 p-2 rounded border border-white/40 mt-auto">
                            <p className="text-xs text-gray-500 font-mono text-center">{h.cert}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-800 mb-2">⚡ El Barboquejo (Chin Strap)</h3>
                    <p className="text-sm text-gray-600">
                        Busque un barboquejo de tres o cuatro puntos que sea fácil de ajustar. Un casco sin un buen barboquejo 
                        <strong> se saldrá de la cabeza durante una caída o impacto</strong>, volviéndose inútil.
                    </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-5">
                    <h3 className="font-bold text-gray-800 mb-2">☀️ Accesorios (Sunbrero / Viseras)</h3>
                    <p className="text-sm text-gray-600">
                        Accesorios como el Salamander Beak o el CMC Sunbrero protegen del sol (360°) y la lluvia. 
                        Están diseñados para flexionarse o desprenderse fácilmente si el casco impacta, reduciendo así la tensión en el cuello.
                    </p>
                </div>
            </div>
        </div>
    );
}
