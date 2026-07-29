import { FaLink } from "react-icons/fa6";
import { FaHandRock } from "react-icons/fa";

export default function TraditionalConversions() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Conversiones Convencionales (Brake Bar Racks)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Cuando se usan descensores clásicos, el proceso requiere "transferir la carga" físicamente de un hardware a otro mediante correas de liberación (LRH).
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* De Descenso a Izado (Rack) */}
                <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaHandRock className="w-5 h-5 text-orange-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Descenso a Izado (Rack a Poleas)</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        El Rack no atrapa el progreso, por lo que se debe instalar un seguro temporal antes de quitarlo.
                    </p>
                    <ol className="text-sm space-y-2 text-gray-700 list-decimal list-inside">
                        <li>Bloquear el Rack completamente (Tie-off).</li>
                        <li>Instalar un "Rope Grab" (Prusik/Ascendedor) en la cuerda cargada, anclado al sistema principal.</li>
                        <li>Desbloquear el Rack y dejar correr cuerda lentamente hasta que el Prusik atrape y soporte el peso.</li>
                        <li>Sacar la cuerda floja del Rack.</li>
                        <li>Reemplazar el Rack por poleas y armar el Z-Rig (3:1).</li>
                    </ol>
                </div>

                {/* De Izado a Descenso (Rack) */}
                <div className="bg-white border-2 border-indigo-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaLink className="w-5 h-5 text-indigo-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Izado a Descenso (Poleas a Rack)</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                        Se transfiere el peso masivo desde el Ratchet (sostenido por el Load Release Strap) hacia el nuevo descensor.
                    </p>
                    <ol className="text-sm space-y-2 text-gray-700 list-decimal list-inside">
                        <li>Aflojar el tiro hasta que la carga quede reposando en el Ratchet principal.</li>
                        <li>Desarmar las poleas y el Prusik tractor.</li>
                        <li>Armar el Rack de barras en la cuerda, anclado cerca del Ratchet, y <strong>bloquear el Rack (Tie-off)</strong>.</li>
                        <li>Sacar toda la holgura de la cuerda (slack).</li>
                        <li><strong className="text-red-700">Paso Crítico:</strong> Liberar LENTAMENTE el Load Release Strap para transferir el peso desde el Ratchet hacia el Rack.</li>
                    </ol>
                </div>

            </div>

        </div>
    );
}
