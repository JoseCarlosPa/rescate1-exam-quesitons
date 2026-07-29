import { FaBookReader } from "react-icons/fa";

export default function Terminology() {
    const terms = [
        { term: "Punto de Anclaje (Anchor Point)", desc: "Un solo objeto seguro (ej. un árbol, una columna) al que se sujeta el sistema." },
        { term: "Sistema de Anclaje (Anchor System)", desc: "La conexión de múltiples puntos de anclaje para crear un anclaje superior que distribuye la carga o provee redundancia." },
        { term: "Anclaje Respaldado (Backed-Up)", desc: "Un anclaje que tiene un segundo anclaje independiente conectado a él. Si el principal falla, el secundario asume la carga." },
        { term: "Load-Distributing Anchor System", desc: "Sistema que reparte la carga entre dos o más puntos, ajustándose automáticamente si la dirección de la carga cambia (antes llamado self-equalizing)." },
        { term: "Load-Sharing Anchor System", desc: "Sistema de múltiples puntos cuyas patas se ajustan de antemano. No se auto-ajusta si cambia el ángulo de tiro." },
        { term: "Sistema Contingente (Contingency Anchor)", desc: "Un anclaje que incorpora un sistema de ventaja mecánica o rapel (ej. Radium Release Hitch). Permite soltar inmediatamente a la víctima o rescatista bajo tensión." },
        { term: "Back-Tie (Pretensioned)", desc: "Amarrar el anclaje principal (punto focal) hacia un anclaje secundario detrás de él. El anclaje trasero toma la mayoría de la carga." },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaBookReader className="w-5 h-5 mr-2 text-red-600" />
                    Terminología Específica de Anclajes
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Definiciones clave de la 6ta edición del CMC Rope Rescue Technician Manual.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {terms.map((t, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-red-800 mb-1">{t.term}</h3>
                        <p className="text-sm text-gray-700">{t.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
