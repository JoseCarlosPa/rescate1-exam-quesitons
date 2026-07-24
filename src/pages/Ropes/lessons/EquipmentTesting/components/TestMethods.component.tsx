import { useState } from "react";
import { FaWrench } from "react-icons/fa";

type EquipmentKey =
    | "rope"
    | "harness"
    | "extrication"
    | "carabiner"
    | "pulley"
    | "belay"
    | "ascender";

interface EquipmentInfo {
    label: string;
    emoji: string;
    standard: string;
    method: string;
    details: string[];
    note?: string;
    color: string;
    highlight: string;
}

const EQUIPMENT: Record<EquipmentKey, EquipmentInfo> = {
    rope: {
        label: "Cuerda de Seguridad de Vida",
        emoji: "🪢",
        standard: "CI 1800 (referenciado por NFPA 1983)",
        method: "Prueba tensil hasta la falla + medición de elongación",
        details: [
            "Se prueban 5 muestras con el método CI 1800.",
            "Se aplica el cálculo de 3 sigma para determinar la resistencia mínima al rompimiento (MBS).",
            "La elongación al 10% de la MBS debe estar entre 1% y 10% para cuerda estática/baja elongación.",
            "Ediciones recientes añadieron reporte de elongación a 1.35 kN (300 lbf), 2.7 kN (600 lbf) y 4.4 kN (1,000 lbf) — datos útiles para uso en campo.",
        ],
        note: "La elongación es tan importante como la resistencia para el uso operacional.",
        color: "bg-amber-50 border-amber-200",
        highlight: "border-amber-500",
    },
    harness: {
        label: "Arneses y Cinturones",
        emoji: "🦺",
        standard: "NFPA 1983",
        method: "Prueba estática + prueba dinámica de caída",
        details: [
            "Prueba ESTÁTICA: cada punto de unión se somete a una fuerza prescrita por un tiempo especificado. Puntos de par (hombros/caderas) se prueban en par.",
            "Prueba DINÁMICA: caída de 1 metro relativa al punto de unión usando cable de acero (sin absorción de energía como en un sistema real).",
            "La caída se realiza dos veces: cabeza arriba y cabeza abajo.",
            "Los arneses y cinturones NO tienen calificación de resistencia marcada porque no se prueban hasta la falla.",
        ],
        note: "La prueba con cable de acero es más severa que el uso real con cuerda.",
        color: "bg-blue-50 border-blue-200",
        highlight: "border-blue-500",
    },
    extrication: {
        label: "Dispositivos de Extricación",
        emoji: "🔒",
        standard: "NFPA 1983",
        method: "Igual que arneses (estático + dinámico)",
        details: [
            "Se tratan igual que un arnés.",
            "Clase II: prueba cabeza arriba.",
            "Clase III: prueba cabeza arriba y cabeza abajo.",
            "Se aplica tanto la prueba estática como la dinámica de caída.",
        ],
        color: "bg-purple-50 border-purple-200",
        highlight: "border-purple-500",
    },
    carabiner: {
        label: "Mosquetones",
        emoji: "🪝",
        standard: "NFPA 1983",
        method: "Prueba tensil en 3 ejes hasta la falla",
        details: [
            "Se prueban en eje mayor (carga normal de trabajo).",
            "Se prueban en eje menor (carga perpendicular — los mosquetones pueden rotar en el sistema).",
            "Se prueban con puerta abierta (situación que puede ocurrir accidentalmente).",
            "Se aplica el cálculo de 3 sigma con 5 muestras por tipo de prueba.",
            "ANSI Z359 prueba 5 muestras pero todas deben superar el mínimo; el producto se marca con ese mínimo.",
        ],
        note: "El eje menor y con puerta abierta existen porque los mosquetones pueden cargarse de formas inesperadas.",
        color: "bg-red-50 border-red-200",
        highlight: "border-red-500",
    },
    pulley: {
        label: "Poleas",
        emoji: "⚙️",
        standard: "NFPA 1983",
        method: "Cable de acero alrededor de la roldana",
        details: [
            "Se usa cable de acero (no cuerda) para eliminar la variabilidad entre marcas y tipos de cuerda.",
            "La resistencia de la estructura se mide de forma repetible e independiente del tipo de cuerda.",
            "Se ha discutido durante años incluir una prueba de eficiencia de poleas, pero aún no existe un método confiable y repetible propuesto.",
            "Las poleas sí tienen calificación de resistencia (se prueba hasta la falla con 3 sigma).",
        ],
        note: "La eficiencia de la polea no forma parte de las pruebas actuales de NFPA 1983.",
        color: "bg-gray-50 border-gray-200",
        highlight: "border-gray-500",
    },
    belay: {
        label: "Dispositivos de Aseguramiento (Belay)",
        emoji: "🛡️",
        standard: "ASTM F2436 (modificado por NFPA 1983)",
        method: "Prueba de caída con masa estándar",
        details: [
            "Masa de prueba: 136 kg (300 lb) para 'Uso Técnico', 280 kg (617 lb) para 'Uso General'.",
            "La masa se deja caer 60 cm (23 in) en 3 m (9.8 ft) de cuerda de seguridad de vida.",
            "La fuerza de impacto resultante debe ser < 15 kN (3,372 lbf).",
            "El dispositivo debe liberar la masa de prueba de forma controlada.",
            "La extensión máxima del sistema no debe superar 1 metro (3.28 ft).",
        ],
        note: "El límite de 15 kN protege al usuario real de fuerzas de detención excesivas.",
        color: "bg-indigo-50 border-indigo-200",
        highlight: "border-indigo-500",
    },
    ascender: {
        label: "Ascendedores, Tomacuerdas y Descensores",
        emoji: "🔧",
        standard: "NFPA 1983",
        method: "Prueba de Manera de Función (Manner of Function)",
        details: [
            "Evalúa si el dispositivo retiene correctamente la carga en condiciones normales.",
            "Evalúa si el dispositivo tiene margen de seguridad suficiente cuando es sobrecargado.",
            "Los dispositivos autobloqueantes se prueban directamente.",
            "Los dispositivos NO autobloqueantes (como el Ocho o el Rack) deben 'amarrarse' para poder aplicar carga suficiente hasta la falla en la prueba tensil.",
            "En la mayoría de los casos, es la cuerda la que falla antes que el dispositivo en sí.",
        ],
        note: "Para descensores no autobloqueantes: están diseñados para deslizar con carga excesiva, por lo que deben fijarse para la prueba.",
        color: "bg-emerald-50 border-emerald-200",
        highlight: "border-emerald-500",
    },
};

export default function TestMethods() {
    const [selected, setSelected] = useState<EquipmentKey>("rope");
    const eq = EQUIPMENT[selected];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaWrench className="w-6 h-6 mr-2 text-emerald-500" />
                    Métodos de Prueba por Tipo de Equipo
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    NFPA 1983 define métodos de prueba específicos para cada tipo de equipo. Selecciona
                    un tipo para ver cómo se prueba:
                </p>
            </div>

            {/* Equipment selector grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {(Object.entries(EQUIPMENT) as [EquipmentKey, EquipmentInfo][]).map(([key, val]) => (
                    <button
                        key={key}
                        onClick={() => setSelected(key)}
                        className={`flex flex-col items-center p-3 rounded-xl border-2 transition-all duration-200 text-center ${
                            selected === key
                                ? `${val.highlight} bg-white shadow-md scale-105`
                                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                        }`}
                    >
                        <span className="text-2xl mb-1">{val.emoji}</span>
                        <span className="text-xs font-medium text-gray-700 leading-tight">{val.label}</span>
                    </button>
                ))}
            </div>

            {/* Detail panel */}
            <div className={`rounded-xl p-6 border-2 ${eq.color} ${eq.highlight} transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{eq.emoji}</span>
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{eq.label}</h3>
                        <p className="text-sm text-gray-500">Estándar: <span className="font-medium">{eq.standard}</span></p>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Método de prueba</p>
                    <p className="text-gray-800 font-medium">{eq.method}</p>
                </div>

                <ul className="space-y-2 mb-4">
                    {eq.details.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="text-emerald-500 mt-0.5 flex-shrink-0">▸</span>
                            <span>{d}</span>
                        </li>
                    ))}
                </ul>

                {eq.note && (
                    <div className="bg-white border border-amber-200 rounded-lg p-3">
                        <p className="text-sm text-amber-800">
                            <strong>⚡ Nota importante:</strong> {eq.note}
                        </p>
                    </div>
                )}
            </div>

            {/* General note */}
            <div className="bg-slate-800 text-white rounded-xl p-5">
                <p className="text-sm font-semibold text-emerald-300 mb-2">📖 Nota del Manual</p>
                <p className="text-slate-200 text-sm leading-relaxed">
                    Esta es una visión general de algunos métodos de prueba. Para una comprensión completa,
                    debes leer el estándar actual de NFPA 1983:{" "}
                    <em>Standard on Life Safety Rope and Equipment for Emergency Services</em>.
                </p>
            </div>
        </div>
    );
}
