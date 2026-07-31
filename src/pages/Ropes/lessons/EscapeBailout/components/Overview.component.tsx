import { MdOutlineRunCircle } from "react-icons/md";
import { FaFire } from "react-icons/fa6";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg flex items-start gap-3">
                <MdOutlineRunCircle className="w-8 h-8 text-red-700 flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-2xl font-bold text-red-900 mb-2">Escape y Bailout (Bomberos)</h2>
                    <p className="text-gray-800 text-lg">
                        El 'bailout' es la técnica de escape de emergencia por una ventana cuando un bombero queda atrapado en un incendio estructural. Es una maniobra de <strong>alto riesgo</strong> por el entorno de pánico, no por la complejidad técnica.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-orange-200 rounded-xl p-5 shadow-sm bg-white">
                    <h3 className="font-bold text-orange-800 mb-3 border-b pb-2">Materiales (NFPA 1983)</h3>
                    <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
                        <li><strong>Resistencia al calor:</strong> 600°C por 45s (con 300 lbs carga).</li>
                        <li><strong>Tamaño:</strong> Cuerdas de 7.5mm a 9.5mm.</li>
                        <li><strong>Webbing vs Cuerda:</strong> La cinta tubular (webbing) se empaca más plana en el equipo.</li>
                        <li><strong>Fibras:</strong> Mezclas híbridas (Technora/Kevlar) para resistir bordes de vidrio roto y calor.</li>
                    </ul>
                </div>

                <div className="border-2 border-red-200 rounded-xl p-5 shadow-sm bg-red-50">
                    <div className="flex gap-2 items-center mb-3 border-b border-red-200 pb-2">
                        <FaFire className="w-5 h-5 text-red-600" />
                        <h3 className="font-bold text-red-900">Entrenamiento Crítico</h3>
                    </div>
                    <ul className="text-sm text-red-900 space-y-3 list-disc list-inside">
                        <li><strong>Memoria Muscular:</strong> Bajo pánico, se pierde capacidad cognitiva. Solo la repetición salva.</li>
                        <li><strong>Fases:</strong> Empezar lento, aumentar velocidad, finalizar con <em>Turnouts + SCBA (Aire)</em>.</li>
                        <li><strong>Seguridad Obligatoria:</strong> Toda práctica REQUIERE una línea de belay independiente.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
