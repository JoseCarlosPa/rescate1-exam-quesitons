import { FaWalking, FaCaretSquareDown } from "react-icons/fa";

export default function Technique() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Técnicas de Descenso
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Postura, control de fricción y resolución de problemas al cruzar el borde (The Edge).
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Postura Correcta */}
                <div className="bg-white border-2 border-stone-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaWalking className="w-5 h-5 text-stone-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Postura Biomecánica</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Rapelear debería sentirse como una "caminata suave hacia atrás", no como un acto de riesgo acrobático.
                    </p>
                    <ul className="text-sm space-y-2 text-gray-800 list-disc list-inside">
                        <li><strong>Forma de 'L':</strong> Dobla la cintura de modo que tu cuerpo y piernas formen una L.</li>
                        <li><strong>Piernas a 90°:</strong> Tus piernas deben apuntar directamente hacia la pared, perpendiculares a esta.</li>
                        <li><strong>Pies Altos:</strong> Mantén los pies casi a la altura de tu cintura. Si los bajas demasiado, resbalarán por falta de fricción contra el muro.</li>
                        <li><strong>Apertura:</strong> Separa los pies a lo ancho de tus hombros para máxima estabilidad lateral.</li>
                    </ul>
                </div>

                {/* Saltos y Velocidad */}
                <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaCaretSquareDown className="w-5 h-5 text-red-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Velocidad y Bounding</h3>
                    </div>
                    <p className="text-sm text-red-800 mb-3 font-semibold">
                        Evita los rápeles de "comando" o con saltos (Bounding).
                    </p>
                    <ul className="text-sm space-y-2 text-gray-700 list-disc list-inside">
                        <li>La alta velocidad sobrecalienta drásticamente los descensores y derrite o daña el alma de la cuerda.</li>
                        <li>Frenar en seco después de un salto genera <strong>Cargas de Choque (Shock Loads)</strong> que pueden arrancar los anclajes de la pared o destruir la cuerda.</li>
                        <li>Caminar suave (Smooth Walk) salva vidas y equipo.</li>
                    </ul>
                </div>

            </div>

            {/* Inicios Difíciles */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5 mt-4">
                <h4 className="font-bold text-orange-900 mb-2">Inicios Difíciles en Bordes a 90°</h4>
                <p className="text-sm text-orange-800 mb-2">
                    Cruzar la esquina de un techo con el anclaje a la altura de la cintura es el momento más propenso a caídas faciales. 
                </p>
                <div className="text-sm text-orange-900 space-y-2">
                    <p><strong>El Método de Rotación:</strong> Pon los arcos de tus pies justo en la esquina (el borde). Tensa la cuerda, y poco a poco pivota (recuesta) tu peso hacia el vacío hasta que la cuerda soporte tu masa. Recién ahí da el primer paso corto hacia abajo.</p>
                    <p><strong>El Método Sentado (Parapetos):</strong> Si hay un muro perimetral, siéntate en él con las piernas colgando hacia el vacío. Tensa el sistema al 100% mientras estás sentado. Luego solo rueda o empuja hacia afuera.</p>
                </div>
            </div>
            
        </div>
    );
}
