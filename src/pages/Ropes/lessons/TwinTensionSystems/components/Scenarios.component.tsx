import { useState } from "react";
import { FaUsers, FaUserCog, FaUserShield } from "react-icons/fa";

type ScenarioTab = "s1" | "s2" | "s3" | "s4";

export default function Scenarios() {
    const [tab, setTab] = useState<ScenarioTab>("s1");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Escenarios de Configuración TTRS (CLUTCH)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Diferentes formas de organizar al equipo de rescate operando dispositivos Twin-Tension para el descenso.
                </p>
            </div>

            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {[
                    { id: "s1", label: "Escenario 1 (2 Op)", icon: <FaUsers className="w-4 h-4 mr-1" /> },
                    { id: "s2", label: "Escenario 2 (3 Op)", icon: <FaUserShield className="w-4 h-4 mr-1" /> },
                    { id: "s3", label: "Escenario 3 (1 Op + ASAPs)", icon: <FaUserCog className="w-4 h-4 mr-1" /> },
                    { id: "s4", label: "Escenario 4 (1 Op + 1 Tailer)", icon: <FaUsers className="w-4 h-4 mr-1" /> },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id as ScenarioTab)}
                        className={`flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            tab === t.id ? "bg-purple-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-purple-50"
                        }`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "s1" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-purple-800 mb-3 text-lg">Escenario 1: Dos Operadores Independientes</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Dos rescatistas, cada uno operando la palanca de su propio CLUTCH/MPD y sujetando la cuerda sobrante (tail) de su dispositivo.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>El Reto:</strong> Coordinar la velocidad. Ambos deben mirarse y escuchar las cuerdas pasando, comunicándose constantemente para equilibrar la tensión 50/50.</li>
                        <li><strong>Edge Transition:</strong> Durante el paso inicial por el borde (donde aún no hay mucho peso colgado), a menudo es más eficiente tratar el sistema brevemente como slack/tension (Main/Belay) hasta pasar la cornisa, y de inmediato reasumir el 50/50.</li>
                    </ul>
                </div>
            )}

            {tab === "s2" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-purple-800 mb-3 text-lg">Escenario 2: Dos Operadores + Tailer (Mitigador)</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Igual al Escenario 1 (dos operadores de palanca), pero se añade un TERCER rescatista ("Tailer") que se ubica detrás y sujeta ambos cabos sobrantes (tails) redirigidos.
                    </p>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-3 text-sm text-gray-800 mb-3">
                        <strong>Reducción de Riesgo:</strong> El Tailer sirve como un seguro absoluto. Si uno o ambos operadores pierden el control y abren las palancas al máximo, el Tailer simplemente sujeta firme ambos cabos parando la caída al instante. Además, al sentir ambas cuerdas, ayuda vocalmente a sincronizar las velocidades.
                    </div>
                </div>
            )}

            {tab === "s3" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-purple-800 mb-3 text-lg">Escenario 3: "Reemplazando Personal con Equipo"</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Llamado <strong>Double CLUTCH TTRS</strong>. Dos aparatos anclados lado a lado operados por UN SOLO rescatista (una mano en cada palanca y sosteniendo ambos cabos).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Equipamiento adicional:</strong> Como no hay Tailer humano, se instalan dispositivos de respaldo mecánicos para 2 personas (ej. ASAP con absolvedor de choque) en las cuerdas tensas de salida.</li>
                        <li><strong>Uso:</strong> Ideal cuando la cantidad de rescatistas en la escena es críticamente baja. Si el único operador suelta o acelera demasiado, los dispositivos ASAP frenarán la carga automáticamente (unattended belay).</li>
                    </ul>
                </div>
            )}

            {tab === "s4" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-purple-800 mb-3 text-lg">Escenario 4: Double CLUTCH + Tailer Humano</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Igual al Escenario 3 (un operador manejando ambas palancas lado a lado), pero en lugar de aparatos mecánicos de backup, hay un SEGUNDO rescatista detrás haciendo de Tailer con ambas cuerdas.
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong>Ventaja:</strong> La mejor defensa contra un descenso descontrolado (un operador seguro + un tailer seguro). Al tener el Tailer ambas cuerdas en la mano, promueve una perfecta distribución de tensión porque las siente directamente.
                    </p>
                </div>
            )}
        </div>
    );
}
