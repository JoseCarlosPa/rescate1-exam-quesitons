import { MdLightbulbOutline } from "react-icons/md";

export default function LASTOverview() {
    const phases = [
        {
            letter: "L", name: "Locate (Localizar)", color: "blue",
            desc: "Confirmar la ubicación exacta del sujeto. Comienza desde el despacho. El Jefe de Operaciones empieza a construir el checklist de tareas en el camino."
        },
        {
            letter: "A", name: "Access (Acceder)", color: "green",
            desc: "Llegar de forma SEGURA al sujeto. El Equipo Médico hace primer contacto de voz. El Equipo de Rigging monta sistemas de cuerdas en paralelo."
        },
        {
            letter: "S", name: "Stabilize (Estabilizar)", color: "amber",
            desc: "El Equipo Médico trata la condición del sujeto. Si la condición es grave y el hospital es el tratamiento definitivo, la evacuación RÁPIDA puede ser mejor que la estabilización perfecta."
        },
        {
            letter: "T", name: "Transport (Transportar)", color: "orange",
            desc: "La fase más variable — depende completamente del terreno. La táctica de evacuación (pick-off, camilla, alto/bajo ángulo, highline) varía en cada rescate."
        }
    ];
    const cMap: Record<string, string> = {
        blue: "border-blue-300 bg-blue-50",
        green: "border-green-300 bg-green-50",
        amber: "border-amber-300 bg-amber-50",
        orange: "border-orange-300 bg-orange-50",
    };
    const textMap: Record<string, string> = {
        blue: "text-blue-900", green: "text-green-900", amber: "text-amber-900", orange: "text-orange-900"
    };

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 p-6 rounded-lg flex items-start gap-3">
                <MdLightbulbOutline className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-2xl font-bold text-emerald-800 mb-2">El Marco L.A.S.T.</h2>
                    <p className="text-gray-800">
                        Desarrollado para búsqueda y rescate genérico, el marco L.A.S.T. organiza cualquier operación de rescate en 4 fases secuenciales y lógicas. Todos los integrantes del equipo conocen en qué fase se encuentran y qué se espera de ellos.
                    </p>
                </div>
            </div>

            <div className="space-y-3">
                {phases.map((p) => (
                    <div key={p.letter} className={`border-2 rounded-xl p-5 ${cMap[p.color]}`}>
                        <div className="flex items-center gap-3 mb-2">
                            <span className={`text-4xl font-black ${textMap[p.color]}`}>{p.letter}</span>
                            <h3 className={`font-bold text-lg ${textMap[p.color]}`}>{p.name}</h3>
                        </div>
                        <p className="text-sm text-gray-700">{p.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
