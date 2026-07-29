import { MdAccountTree } from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdAccountTree className="w-8 h-8 text-teal-600 mr-3" />
                    <h2 className="text-2xl font-bold text-teal-800">Sistemas de Anclaje Múltiples</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Un sistema de anclaje agrupa múltiples puntos de anclaje (Anchor Points) para distribuir la carga o proveer redundancia cuando un solo anclaje no es suficientemente fuerte ("bombproof").
                </p>
            </div>

            {/* Load Sharing vs Load Distributing */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Comparativa de Sistemas Principales</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Load-Sharing */}
                    <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg">
                        <h4 className="font-bold text-teal-700 mb-2 border-b border-teal-200 pb-1">Load-Sharing (Patas fijas)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                            Se ajusta el tamaño de cada pata con nudos fijos tratando de igualar la tensión.
                        </p>
                        <ul className="text-sm space-y-1 text-gray-600">
                            <li>🔴 <strong>Desventaja principal:</strong> Si el tiro de la carga cambia de dirección, una sola pata puede recibir toda la fuerza.</li>
                            <li>🔴 <strong>Falta de precisión:</strong> Es muy difícil lograr en terreno que ambas patas compartan la carga 50/50.</li>
                        </ul>
                    </div>

                    {/* Load-Distributing */}
                    <div className="bg-teal-50 border border-teal-200 p-5 rounded-lg shadow-sm">
                        <h4 className="font-bold text-teal-800 mb-2 border-b border-teal-300 pb-1">Load-Distributing (Deslizante)</h4>
                        <p className="text-sm text-gray-700 mb-3">
                            Usa una cinta o cuerda continua que se desliza por los puntos para auto-ecualizarse si la dirección de la carga cambia.
                        </p>
                        <ul className="text-sm space-y-1 text-gray-600">
                            <li>🟢 <strong>Ventaja principal:</strong> Se acomoda direccionalmente.</li>
                            <li>⚠️ <strong>Precaución (Fricción):</strong> La fricción en los nudos/mosquetones impide una distribución perfecta. Ajuste siempre el sistema a mano antes de cargarlo.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="bg-teal-900 text-white p-6 rounded-xl">
                <h3 className="font-bold text-teal-300 mb-2 text-lg">📏 La Regla de 1 Pie (The 1-Foot Rule)</h3>
                <p className="text-sm text-teal-100 leading-relaxed mb-4">
                    Al construir un sistema <strong>Load-Distributing</strong>, asegúrese de que las patas libres de cinta sean menores a 12 pulgadas (30 cm).
                </p>
                <div className="bg-teal-800 p-4 rounded text-sm text-teal-50">
                    <strong>¿Por qué?</strong> Si un punto de anclaje falla, el sistema resbalará y caerá la longitud de esa pata antes de tensarse en el punto sobreviviente. Mantener las patas cortas minimiza la distancia de caída libre (shock load) evitando un daño catastrófico.
                </div>
            </div>
        </div>
    );
}
