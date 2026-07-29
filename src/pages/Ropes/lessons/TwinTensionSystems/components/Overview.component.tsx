import { MdToll } from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Concepto */}
            <div className="bg-gradient-to-r from-purple-50 to-fuchsia-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdToll className="w-8 h-8 text-purple-600 mr-3" />
                    <h2 className="text-2xl font-bold text-purple-800">Twin-Tension Rope Systems (TTRS)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Históricamente, los rescates usaban una línea Principal (Main) con 100% de la carga, y una línea de Seguridad (Belay) floja. 
                    Con la llegada de dispositivos auto-bloqueantes modernos (CLUTCH, MPD), ha resurgido el sistema <strong>Twin-Tension</strong>.
                </p>
                <div className="bg-purple-100 p-4 rounded text-sm text-purple-900 border border-purple-200">
                    <strong>Dual Capability (Capacidad Dual):</strong> Significa que ambas cuerdas comparten la carga 50/50 durante todo el rescate. Pero es <em>absolutamente requerido</em> que CADA lado sea capaz por sí solo no solo de soportar el peso total, sino de funcionar como freno de seguridad (belay) deteniendo la caída sin falla si el otro lado colapsa.
                </div>
            </div>

            {/* Main/Belay vs Twin Tension */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Diferencia Crítica de Impacto</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Main / Belay */}
                    <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                        <h4 className="font-bold text-gray-700 mb-2 border-b border-gray-200 pb-1">Main / Belay (100 / 0)</h4>
                        <p className="text-sm text-gray-600 mb-3">
                            Solo la principal tiene carga. La cuerda de belay viaja floja o semi-tensa.
                        </p>
                        <ul className="text-sm space-y-2 text-gray-600">
                            <li>💥 Si falla la Main, la carga <strong>cae libremente</strong> hasta que el Belay se estire y frene (Shock Load severo).</li>
                            <li>🪨 La cuerda floja del Belay arrastra por el piso, pudiendo tumbar rocas hacia la camilla.</li>
                        </ul>
                    </div>

                    {/* Twin Tension */}
                    <div className="bg-purple-50 border border-purple-200 p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-purple-800 mb-2 border-b border-purple-300 pb-1">Twin-Tension (50 / 50)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                            Ambas cuerdas bajan o suben tensas repartiendo el peso de la camilla.
                        </p>
                        <ul className="text-sm space-y-2 text-gray-700">
                            <li>🛡️ Si una falla, la otra ya estaba tensa. El impacto transferido es drásticamente menor y la caída más corta.</li>
                            <li>⚖️ Requiere atención constante para mantener la misma velocidad en ambas cuerdas.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-fuchsia-900 text-white p-6 rounded-xl">
                <h3 className="font-bold text-fuchsia-300 mb-2 text-lg">⚖️ Requisitos de Anclaje</h3>
                <p className="text-sm text-fuchsia-100 leading-relaxed">
                    Aunque la carga operativa se divide en dos (cada anclaje sufre la mitad de estrés normalmente), <strong>CADA ANCLAJE debe ser "bombproof" (A prueba de bombas)</strong> y estar diseñado para soportar el 100% de la fuerza de impacto de choque si la línea contraria se rompe.
                </p>
            </div>
        </div>
    );
}
