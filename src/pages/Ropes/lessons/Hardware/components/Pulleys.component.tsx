import { useState } from "react";
import { GiGears } from "react-icons/gi";

type PulleyKey = "fixed" | "moving" | "prusikMinding" | "swivel" | "selfTending" | "knotPass";

const PULLEY_TYPES: Record<PulleyKey, { name: string; icon: string; vm: string; desc: string; details: string[]; bg: string; accent: string }> = {
    fixed: {
        name: "Polea Fija (Cambio de Dirección)",
        icon: "🔵",
        vm: "1:1 — NO aumenta la VM",
        desc: "Actúa como palanca de primer orden. El fulcro está en el eje; ambos brazos son iguales. Solo cambia la dirección de la fuerza.",
        details: [
            "El eje es el fulcro de la palanca.",
            "El brazo hacia la carga (FR) = brazo hacia el esfuerzo (FE).",
            "VM = 1:1 — ideal para cambiar la dirección sin ganar ventaja mecánica.",
            "Cuando se usa como cambio de dirección, la carga puede multiplicarse hasta 2x en el punto de anclaje de la polea.",
        ],
        bg: "bg-blue-50 border-blue-200", accent: "text-blue-700",
    },
    moving: {
        name: "Polea Móvil",
        icon: "🟢",
        vm: "2:1 — DUPLICA la VM",
        desc: "Actúa como palanca de segundo orden. El fulcro está en el borde de la roldana; el brazo de esfuerzo es el doble del brazo de resistencia.",
        details: [
            "El fulcro está en el borde de la roldana, directamente debajo del punto donde la cuerda va al anclaje.",
            "El brazo de esfuerzo (FE) = 2 × brazo de resistencia (FR).",
            "VM = 2:1 — las poleas móviles AUMENTAN la ventaja mecánica.",
            "Si la cuerda pasa por la polea móvil a menos de 180°, el brazo de esfuerzo se acorta y la VM real disminuye.",
        ],
        bg: "bg-green-50 border-green-200", accent: "text-green-700",
    },
    prusikMinding: {
        name: "Polea Prusik-Minding",
        icon: "🟡",
        vm: "Misma que el tipo de polea",
        desc: "Diseño con base cuadrada que evita que el nudo Prusik se atasque en la parte superior de la polea mientras el sistema avanza.",
        details: [
            "Con una polea de base redonda, la fricción de la cuerda jala el nudo Prusik hacia la cima — atascando el sistema.",
            "Arnor Larson propuso en los años 80 usar una polea con base cuadrada.",
            "La forma cuadrada mantiene el Prusik en la base, evitando el atascamiento.",
            "La mayoría de los diseños modernos de poleas incorporan esta característica.",
            "También funciona mejor con ascendedores tipo Gibbs.",
        ],
        bg: "bg-yellow-50 border-yellow-200", accent: "text-yellow-700",
    },
    swivel: {
        name: "Polea Swivel",
        icon: "🔄",
        vm: "Según configuración",
        desc: "Combinación de polea y pivote giratorio. Mantiene la cuerda en línea recta y previene el torcimiento de las líneas en el sistema.",
        details: [
            "Especialmente útil en directrices altas (high directionals).",
            "Al integrar el pivote y la polea, no se pierde la altura de trabajo que usaría un pivote y mosquetón separados.",
            "Ayuda a prevenir el torcimiento de líneas en sistemas de ventaja mecánica.",
            "Típicamente tiene una placa lateral que puede abrirse sin retirar la polea del mosquetón.",
        ],
        bg: "bg-purple-50 border-purple-200", accent: "text-purple-700",
    },
    selfTending: {
        name: "Polea Autobloqueante (Self-Tending)",
        icon: "🔒",
        vm: "Típicamente en sistema 4:1",
        desc: "Polea de doble roldana con cam integrado. Permite que la cuerda avance en un sentido pero la retiene cuando se suelta.",
        details: [
            "La cam integrada hace que la polea sea autobloqueante — no necesita un Prusik separado como trinquete.",
            "Se usa principalmente en sistemas 4:1 para acceso vertical en espacios confinados.",
            "Un sistema 4:1 con esta polea generalmente no requiere descendedor para el descenso.",
            "Como generalmente se conecta a un anclaje alto, la mayoría de los modelos usan una cuerda guía para liberar el mecanismo de bloqueo.",
        ],
        bg: "bg-indigo-50 border-indigo-200", accent: "text-indigo-700",
    },
    knotPass: {
        name: "Kootenay Ultra Pulley (Knot-Pass)",
        icon: "🔑",
        vm: "Según configuración",
        desc: "Polea sobredimensionada diseñada originalmente por Russ Anderson para pasar el nudo de unión entre dos cuerdas.",
        details: [
            "La roldana extra ancha permite pasar el nudo de unión de dos cuerdas.",
            "Excelente para líneas altas (highlines), especialmente con múltiples cuerdas de pista.",
            "Agujeros de mosquetón en la base proveen puntos de conexión para cuerdas guía.",
            "La base plana permite usarla como rodillo de arista.",
            "Algunos modelos tienen mecanismo de bloqueo de roldana para usarla como punto de amarre de alta resistencia.",
        ],
        bg: "bg-orange-50 border-orange-200", accent: "text-orange-700",
    },
};

export default function Pulleys() {
    const [selected, setSelected] = useState<PulleyKey>("fixed");
    const pulley = PULLEY_TYPES[selected];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiGears className="w-6 h-6 mr-2 text-orange-500" />
                    Poleas de Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Las poleas se usan para cambiar la dirección de las cuerdas y construir sistemas de ventaja
                    mecánica. Selecciona un tipo para ver sus características:
                </p>
            </div>

            {/* Selector */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {(Object.entries(PULLEY_TYPES) as [PulleyKey, typeof PULLEY_TYPES[PulleyKey]][]).map(([key, p]) => (
                    <button key={key} onClick={() => setSelected(key)}
                        className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all text-center ${selected === key ? `${p.bg} ${p.accent.replace("text-", "border-")} shadow-md scale-105` : "border-gray-200 bg-white hover:border-gray-300"}`}>
                        <span className="text-2xl mb-1">{p.icon}</span>
                        <span className="text-xs font-medium text-gray-700 leading-tight">{p.name.split("(")[0].trim()}</span>
                    </button>
                ))}
            </div>

            {/* Detail panel */}
            <div className={`rounded-xl border-2 p-6 ${pulley.bg} transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{pulley.icon}</span>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{pulley.name}</h3>
                        <span className={`text-sm font-semibold px-3 py-0.5 rounded-full bg-white border ${pulley.accent}`}>
                            VM: {pulley.vm}
                        </span>
                    </div>
                </div>
                <p className="text-sm text-gray-700 mb-4 italic">{pulley.desc}</p>
                <ul className="space-y-2">
                    {pulley.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className={`${pulley.accent} mt-0.5 flex-shrink-0`}>▸</span>
                            <span>{d}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Tamaño y eficiencia */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4">
                <h3 className="font-bold text-gray-800 text-lg">📐 Tamaño y Eficiencia de la Roldana</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <p className="font-semibold text-orange-700 mb-2">Pérdida mínima de resistencia</p>
                        <p className="text-gray-700">Diámetro de roldana = <strong>3× diámetro de cuerda</strong></p>
                        <p className="text-xs text-gray-500 mt-1">Ej: cuerda ½" (12.5mm) → roldana mín. 1½" (38.1mm)</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                        <p className="font-semibold text-orange-700 mb-2">Mínimo Cordage Institute</p>
                        <p className="text-gray-700">Diámetro de roldana = <strong>8× diámetro de cuerda</strong></p>
                        <p className="text-xs text-gray-500 mt-1">Ej: cuerda ½" (12.5mm) → roldana ideal 4" (102mm)</p>
                    </div>
                </div>
                <div className="bg-slate-800 text-white rounded-lg p-4">
                    <p className="text-xs font-semibold text-orange-300 mb-2">🔬 Hallazgo clave de los estudios NFPA</p>
                    <p className="text-sm text-slate-200">La variable más significativa en la eficiencia de una polea es <strong className="text-white">la cuerda</strong> — más que el tipo de rodamiento o el tamaño de la roldana. La mayoría de las poleas de rescate modernas tienen niveles de eficiencia muy similares entre sí.</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-xs font-semibold text-red-700 mb-1">⚠️ Advertencia sobre poleas dobles</p>
                    <p className="text-xs text-red-700">NO pasar la cuerda por solo un lado de una polea doble (reevado parcial). Puede crear fuerza lateral en la placa lateral y ha causado fallas en campo.</p>
                </div>
            </div>
        </div>
    );
}
