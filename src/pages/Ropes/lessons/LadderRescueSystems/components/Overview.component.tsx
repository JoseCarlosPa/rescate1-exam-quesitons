import { MdOutlineFireTruck } from "react-icons/md";
import { FaTriangleExclamation } from "react-icons/fa6";

const systems = [
    {
        name: "Ladder A-Frame",
        desc: "Dos escaleras unidas por la cima (45° de apertura). El sistema más estable. Guy lines anclan las bases para evitar que se abran. Ideal como reemplazo de trípode.",
        color: "red"
    },
    {
        name: "Ladder Gin",
        desc: "Una escalera vertical anclada desde la cima a vehículo o piquetes. La base apuntala contra algo sólido (llanta/bordillo). Solución rápida para espacios angostos.",
        color: "orange"
    },
    {
        name: "Ladder Slide",
        desc: "Escalera reclinada fija sobre la estructura. La camilla desliza sobre los peldaños en vez de colgar libre. Convierte una bajada vertical en bajo ángulo, eliminando la necesidad de Tender.",
        color: "amber"
    },
    {
        name: "Moving Ladder Slide",
        desc: "La camilla se amarra a la escalera (no la escalera fija). 'Alarga' la camilla para colocarla sobre parapetos u obstáculos que bloquean el acceso directo.",
        color: "yellow"
    },
    {
        name: "Exterior Leaning Ladder",
        desc: "Escalera exterior reclinada lo más alto posible. Permite evacuar todos los pisos inferiores sin reposicionarla. Requiere Twin Tension o Main/Belay.",
        color: "green"
    },
    {
        name: "Interior Leaning Ladder",
        desc: "Escalera interior apoyada en pared/techo. La cuerda se pasa en zigzag por los peldaños generando fricción que controla la bajada. Sin descensor mecánico.",
        color: "blue"
    },
    {
        name: "Cantilever Ladder",
        desc: "Escalera proyectada hacia afuera por ventana o parapeto. Mínimo 7 peldaños adentro. Un rescatista como contrapeso obligatorio hasta terminar la evacuación.",
        color: "violet"
    }
];

const colorMap: Record<string, string> = {
    red: "border-red-200 bg-red-50", orange: "border-orange-200 bg-orange-50",
    amber: "border-amber-200 bg-amber-50", yellow: "border-yellow-200 bg-yellow-50",
    green: "border-green-200 bg-green-50", blue: "border-blue-200 bg-blue-50",
    violet: "border-violet-200 bg-violet-50"
};
const titleMap: Record<string, string> = {
    red: "text-red-900", orange: "text-orange-900", amber: "text-amber-900",
    yellow: "text-yellow-900", green: "text-green-900", blue: "text-blue-900",
    violet: "text-violet-900"
};

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdOutlineFireTruck className="w-8 h-8 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-red-800">Sistemas de Rescate con Escaleras</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las escaleras de bomberos (Tipo 1A) pueden transformarse en sistemas de rescate verticales improvisados: trípodes, rampas de deslizamiento, y puntos de anclaje estructurales de gran capacidad — sin necesitar equipo especializado adicional.
                </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <FaTriangleExclamation className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-sm text-amber-900">
                    <strong>Solo escaleras Tipo 1A</strong> de bomberos o comerciales son adecuadas para los sistemas de rescate. Las escaleras domésticas (Tipo II/III) no tienen la capacidad de carga estructural necesaria.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
                {systems.map((s) => (
                    <div key={s.name} className={`border-2 rounded-xl p-4 shadow-sm ${colorMap[s.color]}`}>
                        <h4 className={`font-bold mb-2 text-sm ${titleMap[s.color]}`}>{s.name}</h4>
                        <p className="text-xs text-gray-700">{s.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
