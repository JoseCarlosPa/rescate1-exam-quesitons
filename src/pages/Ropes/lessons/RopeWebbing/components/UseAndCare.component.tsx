import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdCancel, MdCheckCircle } from "react-icons/md";

const RESCUE_RULES = [
    {
        number: 1,
        rule: "No Pisar la Cuerda",
        icon: "🚫👟",
        detail: "Pisar una cuerda tendida sobre rejillas de acero abiertas u otras superficies con aristas puede dañarla. También debes saber dónde están tus pies en el entorno vertical por tu propia protección. Pisar o caer dentro de una cuerda en espera de un descenso podría enredarte en un lazo cuando la cuerda se mueva.",
        color: "bg-red-50 border-red-200",
        accent: "text-red-700",
    },
    {
        number: 2,
        rule: "No Pasar a Horcajadas sobre la Cuerda",
        icon: "⚠️🦵",
        detail: "Estar encima o muy cerca de una cuerda cargada te expone a posibles lesiones si el sistema falla y la cuerda azota. Incluso estar encima de una cuerda sin carga puede ser doloroso si la cuerda se carga sin que te des cuenta. Nunca permitas que nadie esté en línea con la cuerda ni a ninguno de sus lados cuando está bajo tensión.",
        color: "bg-orange-50 border-orange-200",
        accent: "text-orange-700",
    },
    {
        number: 3,
        rule: "Proteger la Cuerda de Aristas",
        icon: "🗡️🛡️",
        detail: "Las curvas pronunciadas reducen la resistencia de la cuerda. Cuando la cuerda está cargada, las curvas amplifican los efectos de la abrasión y pueden cortarla. Usa protección de arista o cambia el ángulo de rigging.",
        color: "bg-amber-50 border-amber-200",
        accent: "text-amber-700",
    },
    {
        number: 4,
        rule: "Evitar Exposición a Químicos",
        icon: "🧪☠️",
        detail: "Cualquier cosa perjudicial para el nylon o el poliéster es mala para tu cuerda. Almacena las cuerdas de rescate en un lugar donde no estén expuestas a luz solar, calor ni químicos. Si no es seguro para tus manos, probablemente tampoco es seguro para tu cuerda.",
        color: "bg-purple-50 border-purple-200",
        accent: "text-purple-700",
    },
];

const INSPECTION_ITEMS = [
    { label: "Inspectar antes de poner en servicio, incluso si es nueva", type: "visual" },
    { label: "Inspeccionar después de cada uso", type: "visual" },
    { label: "Buscar áreas chafadas, superficies vidriadas o variaciones de diámetro", type: "visual" },
    { label: "Identificar decoloración en la cubierta", type: "visual" },
    { label: "Detectar abrasión o cortes donde el núcleo quede expuesto", type: "visual" },
    { label: "Inspección táctil CON tensión en la cuerda", type: "tactile" },
    { label: "Palpar variaciones de tamaño, puntos blandos o duros (daño al núcleo)", type: "tactile" },
    { label: "Verificar historial de uso en el registro (rope log)", type: "log" },
    { label: "Retirar si fue sometida a carga de impacto (shock load)", type: "retire" },
    { label: "Retirar si hay CUALQUIER duda sobre la integridad de la cuerda", type: "retire" },
];

const RETIRE_REASONS = [
    "Daño visible en la cubierta: abrasión severa, cortes, decoloración",
    "Puntos blandos o duros al tacto que indiquen daño en el núcleo",
    "Carga de impacto: caída de sistema, impacto de roca, aplastamiento",
    "10 años de vida (NFPA 1858 y ASTM F1740)",
    "Cualquier duda sobre la integridad de la cuerda",
];

export default function UseAndCare() {
    const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
    const [activeRule, setActiveRule] = useState<number | null>(null);

    const toggleItem = (idx: number) => {
        setCheckedItems((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    const checkedCount = Object.values(checkedItems).filter(Boolean).length;

    return (
        <div className="space-y-8">
            {/* REGLAS DE SEGURIDAD */}
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaSearch className="w-5 h-5 mr-2 text-violet-500" />
                    Reglas de Seguridad para la Cuerda de Rescate
                </h2>
                <p className="text-sm text-gray-600 mb-5">
                    Estas reglas se relacionan directamente con acciones que reducen la resistencia de la
                    cuerda y la seguridad del rescatista. Haz clic en cada regla para ver el detalle:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    {RESCUE_RULES.map((rule) => (
                        <button
                            key={rule.number}
                            onClick={() => setActiveRule(activeRule === rule.number ? null : rule.number)}
                            className={`text-left rounded-xl border-2 p-4 transition-all duration-200 hover:shadow-md ${rule.color} ${activeRule === rule.number ? "shadow-md ring-2 ring-offset-1 ring-violet-300" : ""}`}
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-2xl">{rule.icon}</span>
                                <div>
                                    <p className="text-xs font-semibold text-gray-400 uppercase">Regla #{rule.number}</p>
                                    <p className={`font-bold text-base ${rule.accent}`}>{rule.rule}</p>
                                </div>
                            </div>
                            {activeRule === rule.number && (
                                <p className="text-sm text-gray-700 mt-2 leading-relaxed border-t border-gray-200 pt-2">
                                    {rule.detail}
                                </p>
                            )}
                            {activeRule !== rule.number && (
                                <p className="text-xs text-gray-400 italic mt-1">Toca para ver el detalle →</p>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* CHECKLIST DE INSPECCIÓN */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-1 text-lg">🔍 Lista de Inspección Interactiva</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Marca cada punto completado para revisar el protocolo de inspección:
                </p>
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${(checkedCount / INSPECTION_ITEMS.length) * 100}%` }}
                        />
                    </div>
                    <span className="text-sm font-semibold text-violet-700">
                        {checkedCount}/{INSPECTION_ITEMS.length}
                    </span>
                </div>

                <div className="space-y-2">
                    {INSPECTION_ITEMS.map((item, idx) => (
                        <button
                            key={idx}
                            onClick={() => toggleItem(idx)}
                            className={`w-full flex items-center gap-3 p-3 rounded-lg border text-left transition-all duration-200 ${
                                checkedItems[idx]
                                    ? "bg-green-50 border-green-200"
                                    : "bg-gray-50 border-gray-200 hover:border-violet-200"
                            }`}
                        >
                            {checkedItems[idx] ? (
                                <MdCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${checkedItems[idx] ? "line-through text-gray-400" : "text-gray-700"}`}>
                                {item.label}
                            </span>
                            <span className={`ml-auto text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                                item.type === "visual" ? "bg-blue-100 text-blue-600" :
                                item.type === "tactile" ? "bg-amber-100 text-amber-600" :
                                item.type === "log" ? "bg-purple-100 text-purple-600" :
                                "bg-red-100 text-red-600"
                            }`}>
                                {item.type === "visual" ? "Visual" :
                                 item.type === "tactile" ? "Táctil" :
                                 item.type === "log" ? "Historial" : "Retiro"}
                            </span>
                        </button>
                    ))}
                </div>

                {checkedCount === INSPECTION_ITEMS.length && (
                    <p className="text-center text-green-700 font-semibold mt-4 text-sm">
                        ✅ ¡Inspección completa! La cuerda está lista para usarse si no se detectaron anomalías.
                    </p>
                )}
            </div>

            {/* CRITERIOS DE RETIRO */}
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <h3 className="font-bold text-red-800 mb-3 text-lg flex items-center gap-2">
                    <MdCancel className="w-6 h-6" />
                    Criterios de Retiro de Servicio
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                    Es imposible establecer cuándo retirar una cuerda por la variedad de situaciones.
                    Sin embargo, existen criterios claros que exigen el retiro inmediato:
                </p>
                <ul className="space-y-2">
                    {RETIRE_REASONS.map((reason, i) => (
                        <li key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-red-200">
                            <MdCancel className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{reason}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 bg-red-800 text-white rounded-lg p-4 text-center">
                    <p className="font-bold text-lg">
                        "Si tienes alguna duda sobre la integridad de tu cuerda de seguridad de vida —{" "}
                        <span className="underline">¡retírala!</span>"
                    </p>
                    <p className="text-red-200 text-sm mt-1">
                        Ningún costo de reposición de equipo vale poner en riesgo la vida de un rescatista.
                    </p>
                </div>
            </div>

            {/* ALMACENAMIENTO Y DESPLIEGUE */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">📦 Almacenamiento y Despliegue</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                        <p className="font-semibold text-violet-700 mb-2">🎒 Bolsa para Cuerda (Rope Bag)</p>
                        <ul className="space-y-1.5 text-sm text-gray-700">
                            <li>▸ Protege la cuerda y la mantiene lista para uso inmediato</li>
                            <li>▸ Ata la cuerda a la base de la bolsa para no perderla al lanzar</li>
                            <li>▸ Empieza a llenar empujando la cuerda — compacta periódicamente</li>
                            <li>▸ Marca longitud, diámetro y número en el exterior de la bolsa</li>
                            <li>▸ Usa bolsas ligeramente más grandes para facilitar el llenado</li>
                        </ul>
                    </div>
                    <div className="bg-violet-50 rounded-lg p-4 border border-violet-200">
                        <p className="font-semibold text-violet-700 mb-2">🚀 Despliegue</p>
                        <ul className="space-y-1.5 text-sm text-gray-700">
                            <li>▸ Para rapel: ancla el extremo y lanza la bolsa — la cuerda se alimenta sola</li>
                            <li>▸ Si hay riesgo de golpear al sujeto o hay vegetación: lleva la bolsa contigo</li>
                            <li>▸ La bolsa se alimenta mejor si está sujeta a tu arnés o se lleva en la espalda en terreno menos vertical</li>
                            <li>▸ En sistemas de rescate: la bolsa permanece en el sistema mientras la cuerda se alimenta</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 bg-slate-800 text-white rounded-lg p-4">
                    <p className="text-sm font-semibold text-violet-300 mb-2">🧹 Protocolo de Limpieza (CMC School)</p>
                    <ol className="text-sm text-slate-200 space-y-1 list-decimal list-inside">
                        <li>Enjuagar el exceso de suciedad con una manguera</li>
                        <li>Remojar ~30 min en tina de plástico con agua y jabón suave (no detergente)</li>
                        <li>Enjuagar pasando la cuerda 2 veces por un lavador de cuerdas</li>
                        <li>Colgar en lugar fresco y sombreado para secar</li>
                    </ol>
                </div>
            </div>

            {/* REGISTRO DE USO */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">📋 Registro de Uso (Rope Log)</h3>
                <p className="text-sm text-gray-600 mb-4">
                    NFPA 1983 requiere que las instrucciones del usuario de la cuerda de seguridad de vida
                    incluyan un modelo de registro de uso. Llevar el historial es fundamental para saber
                    si la cuerda está en buenas condiciones.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-2 text-sm">📝 Qué registrar</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>▸ Fecha de salida y regreso del vehículo</li>
                            <li>▸ Tipo de uso (sistema principal, línea de seguridad, entrenamiento…)</li>
                            <li>▸ Problemas detectados o sospechados</li>
                            <li>▸ Cargas de impacto reportadas</li>
                            <li>▸ Resultado de inspección al regresar</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-2 text-sm">🏷️ Marcado del extremo</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                            <li>▸ Número de cuerda</li>
                            <li>▸ Nombre del departamento</li>
                            <li>▸ Fecha de entrada en servicio</li>
                            <li>▸ Diámetro y longitud</li>
                            <li>▸ Extremo A y extremo B para rastreo de daños</li>
                            <li>▸ Cubrir con termocontráctil o sellador transparente</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
