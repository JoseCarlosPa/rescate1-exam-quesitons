import { MdExpandMore, MdLoop, MdArrowUpward } from "react-icons/md";

export default function RollersSliding() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Reducción Avanzada de Fricción
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Para sistemas de ventaja mecánica (tracción de cargas), reducir la fricción es igual de importante que proteger de la abrasión.
                </p>
            </div>

            {/* Sliding Surfaces */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <MdExpandMore className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Superficies Deslizantes (Ej. Ultra-Pro Edge Protectors)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Protectores de plásticos aeroespaciales resbaladizos. Reducen drásticamente la fricción y conservan la fuerza de la cuerda porque obligan a crear una curvatura amplia sobre el borde (en vez de un ángulo agudo de 90° de concreto).
                </p>
                <div className="bg-yellow-50 p-3 rounded-lg text-sm text-gray-700">
                    <strong>Gran Ventaja:</strong> A diferencia de los rodillos, mantienen un perfil muy bajo. Son extremadamente estables y no se vuelcan lateralmente, lo que facilita muchísimo que el equipo y la camilla suban y pasen el borde.
                </div>
            </div>

            {/* Rolling Surfaces */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <MdLoop className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Rodillos (Edge Rollers)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Dispositivos como el SMC Edge Roller o Roof Roller separan la cuerda varias pulgadas de la superficie haciéndola rodar. Es la reducción de fricción máxima, pero tiene una desventaja grave: la inestabilidad lateral.
                </p>
                <ul className="text-sm space-y-2 text-gray-700 bg-red-50 p-4 rounded-lg border border-red-100">
                    <li className="font-bold text-red-700">Peligros de los Rodillos:</li>
                    <li><strong>El vuelco (Flipping):</strong> Cuando la camilla llega arriba, el ángulo entre la línea principal y la de seguridad crece (las cuerdas se separan en "V"). Esto saca la cuerda del centro del rodillo, haciéndolo volcar sobre su costado.</li>
                    <li><strong>Requisito absoluto:</strong> ¡Tienen que estar fuertemente anclados! Usar clavos o estacas cortas pasándolos por sus orificios NO detendrá el vuelco; solo los convertirá en proyectiles peligrosos. Ancle con cinta a un punto firme superior.</li>
                </ul>
            </div>

            {/* Moving Rope Away */}
            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <MdArrowUpward className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Alejar la Cuerda (Portable High Anchors)</h3>
                </div>
                <p className="text-sm text-gray-700">
                    La mejor protección de borde es <strong>no tocar el borde</strong>. Utilizar trípodes, anclajes artificiales elevados (High-Anchor Devices) o grúas de vehículos coloca el punto direccional alto en el aire, eliminando la fricción y permitiendo al rescatista superar obstáculos o barreras físicas cómodamente parado en vez de arrastrándose sobre el borde.
                </p>
            </div>
        </div>
    );
}
