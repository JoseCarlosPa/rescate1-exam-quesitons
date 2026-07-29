import { FaLevelDownAlt, FaLungs } from "react-icons/fa";
import { MdSwitchAccount } from "react-icons/md";

export default function Technique() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Técnicas de Cuidador (Litter Tending)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El Tender es los ojos, oídos y manos del equipo de rescate. Debe mantenerse ágil y listo para guiar la camilla a través del terreno escarpado.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                
                {/* Movilidad */}
                <div className="bg-white border-2 border-indigo-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b border-indigo-200 pb-2">
                        <MdSwitchAccount className="w-5 h-5 text-indigo-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Tender Line Independiente</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        El Tender NO se amarra fijo a la camilla. Se ancla a una línea paralela de ~3 metros que nace de la araña (Litter Harness).
                    </p>
                    <p className="text-xs text-indigo-700 font-bold">
                        Usando bloqueadores de ascenso (Ascenders) o un polipasto AZTEK, el Tender puede deslizarse arriba y abajo de la camilla a voluntad para maniobrar o asomarse.
                    </p>
                </div>

                {/* Transición de Borde */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                        <FaLevelDownAlt className="w-5 h-5 text-slate-600" />
                        <h3 className="font-bold text-gray-800 text-lg">El Paso del Borde (Edgework)</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        Pasar una camilla de 150kg por un filo de 90° es durísimo para un solo Tender. 
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                        <strong>Solución:</strong> Dos 'Edgemen' en cuerdas de rapel bajan la camilla primero. Otra solución es instalar un Direccional Alto (Arizona Vortex) para levantar las cuerdas y quitar fricción al borde.
                    </p>
                </div>

            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b border-red-200 pb-2">
                    <FaLungs className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-red-900 text-lg">Protección de la Vía Aérea</h3>
                </div>
                <p className="text-sm text-red-900 mb-2">
                    Si el paciente está inmovilizado bocarriba en la camilla y comienza a vomitar, se ahogará con sus fluidos en el aire si no puedes ladear la camilla.
                </p>
                <ul className="text-sm text-red-900 space-y-1 list-disc list-inside">
                    <li>Debes llevar siempre un succionador portátil (V-VAC).</li>
                    <li>Si no hay succión, el paciente DEBE ser empaquetado de lado (recumbente lateral). La vida (vía aérea) tiene prioridad sobre la inmovilización espinal.</li>
                </ul>
            </div>
            
        </div>
    );
}
