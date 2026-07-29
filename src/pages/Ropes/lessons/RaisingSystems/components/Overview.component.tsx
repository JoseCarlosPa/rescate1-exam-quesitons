import { MdArrowUpward } from "react-icons/md";
import { FaCompressAlt } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdArrowUpward className="w-8 h-8 text-teal-600 mr-3" />
                    <h2 className="text-2xl font-bold text-teal-800">Principios de Izado y Ventaja Mecánica (M/A)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    La ventaja mecánica permite multiplicar la fuerza de un rescatista para levantar cargas pesadas usando sistemas de poleas y cuerdas. La regla base es: <strong>para ganar fuerza, debes sacrificar distancia</strong> (jalar más metros de cuerda).
                </p>
                <div className="bg-white p-4 rounded text-sm text-gray-800 shadow-sm">
                    <strong className="block text-teal-900 mb-1">El Sistema 1:1 vs Dinámica de Grupo</strong>
                    Aunque requiere fuerza bruta (ej. 10+ rescatistas disponibles), un tiro directo "mano sobre mano" (1:1) sin poleas móviles es el más rápido, pues avanza la camilla 1 metro por cada metro de cuerda que se jala. Sin embargo, sistemas con alto número de rescatistas tardan más en obedecer órdenes de frenado.
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Anatomía del Sistema</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-teal-200 bg-teal-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <FaCompressAlt className="w-5 h-5 text-teal-700" />
                            <h4 className="font-bold text-teal-900">1. Poleas (Fijas vs Móviles)</h4>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside mt-2">
                            <li><strong>Polea Fija (Change-of-direction):</strong> Anclada a un punto fijo. No da ventaja mecánica, solo cambia la dirección de la cuerda para jalar más cómodamente.</li>
                            <li><strong>Polea Móvil (M/A Pulley):</strong> Se ancla directamente a la cuerda que soporta la carga y viaja con ella. Es la que crea la multiplicación de fuerza.</li>
                        </ul>
                    </div>
                    
                    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-bold text-gray-900">2. El Ratchet (Trinquete)</h4>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">
                            Elemento crucial. Es el dispositivo de captura de progreso (PCD).
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>TODO sistema</strong>, desde un 1:1 hasta un 9:1, necesita un Ratchet (Prusik, Ascensor, CLUTCH o MPD) para sostener la carga y evitar que se devuelva cuando el equipo de tracción suelta la cuerda (por orden o por cansancio).
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <h4 className="font-bold text-orange-900 mb-2">El Problema del "Reset" (Colapso del sistema)</h4>
                <p className="text-sm text-orange-900">
                    A medida que el equipo jala, las poleas móviles viajan por la cuerda acercándose al anclaje principal. Cuando chocan o no pueden avanzar más (<em>two-blocking</em>), el sistema colapsa.
                </p>
                <p className="text-sm text-orange-900 mt-2 font-semibold">
                    El "Reset" implica:
                </p>
                <ol className="list-decimal list-inside text-sm text-orange-800 mt-1 space-y-1">
                    <li>Soltar la cuerda despacio para que el Ratchet capture la tensión y soporte el peso.</li>
                    <li>Agarrar la polea móvil/Prusik tractor y correrlo ("extenderlo") de regreso hacia abajo por la cuerda.</li>
                    <li>Tensar y volver a jalar.</li>
                </ol>
            </div>
        </div>
    );
}
