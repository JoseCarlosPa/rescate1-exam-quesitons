import { useState } from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import { FaLightbulb } from "react-icons/fa";

const MISCONCEPTIONS = [
    {
        wrong: "El número marcado en mi mosquetón es el valor promedio de las 5 pruebas.",
        correct: "El número marcado es el valor de 3 sigma — tres desviaciones estándar por debajo del promedio. Esto garantiza que el 99.87% de los productos igualarán o superarán ese valor.",
        category: "Interpretación del marcado",
    },
    {
        wrong: "Si mi arnés no tiene un número de resistencia, es porque no ha sido probado.",
        correct: "Los arneses SÍ son probados — con pruebas estáticas y dinámicas de caída — pero no se prueban hasta la falla, por lo que no tienen una calificación de resistencia marcada.",
        category: "Arneses",
    },
    {
        wrong: "La eficiencia de una polea puede determinarse a partir de las pruebas de NFPA 1983.",
        correct: "NFPA 1983 no incluye una prueba de eficiencia para poleas. Se ha discutido durante años pero aún no existe un método confiable y repetible propuesto.",
        category: "Poleas",
    },
    {
        wrong: "Un descensor en el que la cuerda falle en la prueba tensil significa que el dispositivo es defectuoso.",
        correct: "En la mayoría de los casos, es la cuerda la que falla antes que el dispositivo de descenso. Esto es esperado y no indica un defecto del dispositivo.",
        category: "Dispositivos de descenso",
    },
    {
        wrong: "El test de caída para dispositivos belay simula exactamente las condiciones reales de uso.",
        correct: "El test es intencionalmente más severo: la masa cae 60 cm en 3 m de cuerda, lo que crea fuerzas de impacto mayores que la mayoría de escenarios de campo reales.",
        category: "Dispositivos belay",
    },
    {
        wrong: "Los productos probados bajo NFPA 1983 y ANSI Z359 se marcan con el mismo tipo de valor.",
        correct: "ANSI Z359 marca el mínimo requerido (que todos los 5 ejemplares deben superar). NFPA 1983 marca el mínimo de desempeño O el valor de 3 sigma, a elección del fabricante.",
        category: "Comparación de estándares",
    },
    {
        wrong: "Una cuerda estática no tiene elongación alguna.",
        correct: "Una cuerda 'estática' o de baja elongación sí tiene elongación — debe estar entre 1% y 10% al 10% de su resistencia al rompimiento. Cero elongación no es el objetivo ni es posible.",
        category: "Cuerda de seguridad de vida",
    },
];

export default function KeyConcepts() {
    const [revealed, setRevealed] = useState<Record<number, boolean>>({});

    const toggle = (idx: number) => {
        setRevealed((prev) => ({ ...prev, [idx]: !prev[idx] }));
    };

    const allRevealed = Object.keys(revealed).length === MISCONCEPTIONS.length;

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaLightbulb className="w-6 h-6 mr-2 text-emerald-500" />
                    Conceptos Clave: Verdad vs. Malentendido
                </h2>
                <p className="text-gray-700 leading-relaxed mb-2">
                    Existen malentendidos comunes sobre cómo interpretar las pruebas de equipo. Haz clic
                    en cada tarjeta para revelar la verdad:
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                    <span>Reveladas: <strong className="text-emerald-600">{Object.values(revealed).filter(Boolean).length}</strong> de {MISCONCEPTIONS.length}</span>
                    {allRevealed && (
                        <span className="ml-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-semibold">
                            ¡Completado! 🎉
                        </span>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {MISCONCEPTIONS.map((item, idx) => (
                    <button
                        key={idx}
                        onClick={() => toggle(idx)}
                        className="text-left rounded-xl p-5 shadow-sm transition-all duration-300 border-2 hover:shadow-md"
                        style={{
                            borderColor: revealed[idx] ? "#22c55e" : "#fca5a5",
                            backgroundColor: revealed[idx] ? "#f0fdf4" : "#fff1f2",
                        }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span
                                className="text-xs font-semibold px-2 py-0.5 rounded-full"
                                style={{
                                    backgroundColor: revealed[idx] ? "#dcfce7" : "#fee2e2",
                                    color: revealed[idx] ? "#15803d" : "#dc2626",
                                }}
                            >
                                {item.category}
                            </span>
                            {revealed[idx] ? (
                                <MdCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            ) : (
                                <MdCancel className="w-5 h-5 text-red-400 flex-shrink-0" />
                            )}
                        </div>

                        <p
                            className="text-sm leading-relaxed font-medium"
                            style={{ color: revealed[idx] ? "#166534" : "#7f1d1d" }}
                        >
                            {revealed[idx] ? "✓ " + item.correct : "✗ " + item.wrong}
                        </p>

                        {!revealed[idx] && (
                            <p className="text-xs text-gray-400 mt-2 italic">
                                Haz clic para ver la respuesta correcta
                            </p>
                        )}
                    </button>
                ))}
            </div>

            {/* Progress bar */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progreso</span>
                    <span>
                        {Object.values(revealed).filter(Boolean).length}/{MISCONCEPTIONS.length}
                    </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full transition-all duration-500"
                        style={{
                            width: `${(Object.values(revealed).filter(Boolean).length / MISCONCEPTIONS.length) * 100}%`,
                        }}
                    />
                </div>
                {allRevealed && (
                    <p className="text-center text-emerald-700 font-semibold mt-3 text-sm">
                        🏆 ¡Excelente! Has revisado todos los conceptos clave del capítulo.
                    </p>
                )}
            </div>

            {/* Quick reference */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-emerald-300 mb-4">📋 Referencia Rápida</p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-slate-700 rounded-lg p-3">
                        <p className="font-semibold text-emerald-300 mb-1">3 sigma =</p>
                        <p className="text-slate-200">x̄ − 3σ con 99.87% confiabilidad</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-3">
                        <p className="font-semibold text-emerald-300 mb-1">Belay (Técnico) =</p>
                        <p className="text-slate-200">136 kg, caída 60 cm, &lt;15 kN</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-3">
                        <p className="font-semibold text-emerald-300 mb-1">Elongación estática =</p>
                        <p className="text-slate-200">Entre 1% y 10% al 10% MBS</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
