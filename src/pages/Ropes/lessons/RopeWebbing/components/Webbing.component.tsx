import { GiSewingString } from "react-icons/gi";

const COLOR_CODE = [
    { color: "bg-green-500", label: "Verde", length: "5 ft (1.5 m)" },
    { color: "bg-yellow-400", label: "Amarillo", length: "12 ft (3.5 m)" },
    { color: "bg-blue-500", label: "Azul", length: "15 ft (4.5 m)" },
    { color: "bg-orange-500", label: "Naranja / Rojo", length: "20 ft (6.0 m)" },
];

const WEBBING_TYPES = [
    {
        name: "Webbing Tubular",
        icon: "⭕",
        standard: "PIA-W-5625F (reemplazó Mil-W-5625)",
        strength: "4,000–4,500 lb (17.8–20 kN) — 1 pulgada estándar",
        desc: "Aparece hueco cuando se ve desde el extremo. Más suave que el webbing plano. Resistencia menor al plano del mismo ancho.",
        pros: ["Suave y flexible", "Fácil de anudar", "Cómodo como anclaje de cuerpo"],
        cons: ["Menor resistencia que el webbing plano del mismo ancho"],
        types: [
            {
                sub: "Shuttle loom (espiral)",
                detail: "Las hebras espiralan alrededor del webbing. Aplanado, no tiene costura visible en el borde. Preferido históricamente en rescate.",
            },
            {
                sub: "Needle loom (puntada de bloqueo)",
                detail: "Tiene una costura de punto de bloqueo visible en un borde. Las versiones modernas tienen desempeño muy cercano al shuttle loom, validado por años de uso en campo.",
            },
        ],
        bg: "bg-violet-50",
        border: "border-violet-200",
    },
    {
        name: "Webbing Plano (Flat Web)",
        icon: "▬",
        standard: "Varía por fabricante",
        strength: "6,000 lb (26.7 kN) — 1 pulgada para rescate",
        desc: "Material sólido, plano. Mayor resistencia que el tubular del mismo ancho, pero puede ser muy rígido.",
        pros: ["Mayor resistencia que el tubular del mismo ancho", "Mayor durabilidad en aplicaciones de carga"],
        cons: [
            "Puede ser muy rígido",
            "Verificar que puede mantener nudos antes de poner en servicio",
        ],
        types: [],
        bg: "bg-amber-50",
        border: "border-amber-200",
    },
];

const SEWN_SLINGS = [
    {
        name: "Correas de Anclaje (Anchor Straps)",
        desc: "Generalmente webbing de 1¾ in (44.5 mm) con argollas D en cada extremo. Muy usadas para anclajes rápidos en estructuras.",
        icon: "🔗",
    },
    {
        name: "Cadenas Daisy / Multi-Loop Straps",
        desc: "Slings con lazos cosidos a lo largo de su longitud (Forrest Daisy Chain, CMC Multi-Loop Straps). Muy convenientes para ajustar la longitud sin necesidad de nudos.",
        icon: "🎯",
    },
    {
        name: "Hilo indicador de desgaste",
        desc: "Algunos fabricantes usan hilo de color contrastante en puntos clave para identificar desgaste en la costura. Muy útil en inspección visual.",
        icon: "🧵",
    },
];

export default function Webbing() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiSewingString className="w-6 h-6 mr-2 text-violet-500" />
                    Webbing de Seguridad de Vida
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                    El webbing es esencialmente una tela estrecha. Disponible en nylon y poliéster, con
                    las mismas características de fibra descritas en el capítulo anterior. Se presenta
                    en dos construcciones principales:
                </p>
            </div>

            {/* Tipos principales */}
            <div className="space-y-4">
                {WEBBING_TYPES.map((wt, i) => (
                    <div key={i} className={`rounded-xl border-2 p-6 ${wt.bg} ${wt.border}`}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl">{wt.icon}</span>
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">{wt.name}</h3>
                                <p className="text-xs text-gray-500">Estándar: {wt.standard}</p>
                            </div>
                        </div>

                        <p className="text-sm text-gray-700 mb-4">{wt.desc}</p>

                        <div className="grid md:grid-cols-3 gap-3 mb-4">
                            <div className="bg-white rounded-lg p-3 border border-gray-200 col-span-1">
                                <p className="text-xs font-semibold text-gray-500 mb-1">RESISTENCIA</p>
                                <p className="text-sm font-bold text-gray-800">{wt.strength}</p>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-green-600 mb-1">VENTAJAS</p>
                                <ul className="space-y-0.5">
                                    {wt.pros.map((p, j) => (
                                        <li key={j} className="text-xs text-gray-700">▸ {p}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-red-600 mb-1">CONSIDERACIONES</p>
                                <ul className="space-y-0.5">
                                    {wt.cons.map((c, j) => (
                                        <li key={j} className="text-xs text-gray-700">▸ {c}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {wt.types.length > 0 && (
                            <div>
                                <p className="text-xs font-semibold text-gray-600 uppercase mb-2">Subtipos de fabricación:</p>
                                <div className="grid md:grid-cols-2 gap-3">
                                    {wt.types.map((t, j) => (
                                        <div key={j} className="bg-white rounded-lg p-3 border border-gray-200">
                                            <p className="font-semibold text-gray-800 text-sm mb-1">{t.sub}</p>
                                            <p className="text-xs text-gray-600">{t.detail}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Código de colores por longitud */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-1 text-lg">🎨 Código de Colores por Longitud</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Estándar usado por la mayoría de departamentos contactados (puede variar):
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {COLOR_CODE.map((cc, i) => (
                        <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`w-full h-10 rounded-lg ${cc.color} shadow-inner`} />
                            <p className="text-xs font-semibold text-gray-700">{cc.label}</p>
                            <p className="text-xs text-gray-500 text-center">{cc.length}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-400 italic mt-3">
                    * En algunos casos el webbing de 20 ft será rojo en lugar de naranja.
                </p>
            </div>

            {/* Slings cosidos */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">🧷 Slings Cosidos</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Los slings cosidos comerciales llevan años de uso en rescate. Los fabricantes
                    reputados prueban sus productos exhaustivamente y proveen especificaciones de
                    resistencia con calidad consistente.
                </p>
                <div className="space-y-3">
                    {SEWN_SLINGS.map((s, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <span className="text-2xl flex-shrink-0">{s.icon}</span>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{s.name}</p>
                                <p className="text-xs text-gray-600 mt-1">{s.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Nota importante */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
                <p className="font-semibold text-amber-800 mb-1">⚡ Dato importante sobre webbing plano</p>
                <p className="text-sm text-amber-700">
                    Algunos webbing planos pueden ser muy rígidos. <strong>Verifica siempre la capacidad
                    del webbing para mantener un nudo antes de ponerlo en servicio.</strong> Un webbing
                    que no retiene el nudo correctamente no es apropiado para rescate.
                </p>
            </div>
        </div>
    );
}
