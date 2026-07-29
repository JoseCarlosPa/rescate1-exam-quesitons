import { FaLayerGroup, FaLink } from "react-icons/fa6";

export default function EdgePadsGuards() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Edge Pads y Edge Guards
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Soluciones básicas de protección estática que suavizan bordes ásperos y protegen de suciedad, aunque ofrecen poca reducción de fricción real.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                
                {/* Edge Pads */}
                <div className="bg-white border-2 border-yellow-200 rounded-xl p-5 shadow-sm hover:border-yellow-400 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <FaLayerGroup className="w-6 h-6 text-yellow-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Edge Pads (Lonas de Borde)</h3>
                    </div>
                    <ul className="text-sm space-y-2 text-gray-700">
                        <li>Láminas de material pesado puestas <em>sobre la superficie</em> del terreno o edificio.</li>
                        <li><strong>Material:</strong> CMC recomienda <strong>Lona (Canvas)</strong>. Materiales sintéticos como nylon y plástico corren el riesgo de derretirse por el calor de fricción de la cuerda.</li>
                        <li>Ancle siempre el pad en terreno empinado para que no caiga al vacío.</li>
                        <li>También se usa como base debajo de los Edge Rollers para protección de respaldo si la cuerda se sale.</li>
                    </ul>
                </div>

                {/* Edge Guards */}
                <div className="bg-white border-2 border-yellow-200 rounded-xl p-5 shadow-sm hover:border-yellow-400 transition-colors">
                    <div className="flex items-center gap-2 mb-3">
                        <FaLink className="w-6 h-6 text-yellow-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Edge Guards (Rope Guards)</h3>
                    </div>
                    <ul className="text-sm space-y-2 text-gray-700">
                        <li>Protectores tubulares que <em>envuelven la cuerda</em>, cerrados usualmente con velcro. Antiguamente se hacían con mangueras de bombero recicladas.</li>
                        <li>No se anclan a la pared, se anclan <strong>a la cuerda</strong> usando un cordín y un nudo Prusik (o ballestrinque).</li>
                        <li><strong>La ventaja:</strong> Al estar con un Prusik, el rescatista puede "deslizarlo" hacia arriba cuando comienza a rapelar para hacerle espacio a su descendedor, y devolverlo al lugar del roce.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-xl">
                <h3 className="font-bold text-yellow-800 mb-2">Equipos de Protección de Borde en Paredes Largas (Edge Protection Team)</h3>
                <p className="text-sm text-gray-700">
                    En rescates muy largos (Big Wall, Cañones) donde la cuerda roza en muchísimos puntos, no basta con proteger desde arriba. Se designa un <strong>Edge Protection Team</strong>: rescatistas que bajan antes, instalando protección en cada saliente para sí mismos y para el sistema principal, desarmándolos conforme suben de último.
                </p>
            </div>
        </div>
    );
}
