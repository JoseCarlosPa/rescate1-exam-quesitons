import { MdCalculate } from "react-icons/md";
import { FaCompressArrowsAlt } from "react-icons/fa";

export default function Calculations() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Cálculo de Fuerzas (White Board Analysis)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Para este cálculo siempre buscaremos la pieza más débil. Para el estándar se asume que una camilla tipo rescate con 2 personas ejerce una fuerza de 2 kN (aprox 450 lbs / 200kg).
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Pérdida por nudos */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <MdCalculate className="w-5 h-5 text-slate-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Pérdida por Nudos</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Toda cuerda pierde capacidad de carga cuando la doblas apretadamente en un nudo, ya que las fibras exteriores se sobretensan antes que las interiores.
                    </p>
                    <div className="bg-slate-50 p-3 rounded-lg text-sm border border-slate-200">
                        <strong>Regla Estándar del Manual:</strong> 
                        <p className="mt-1">
                            Para análisis teórico rápido en campo, se asume que una cuerda pierde alrededor del <strong>25%</strong> de su resistencia total (MBS) justo en el punto donde se hace el nudo.
                        </p>
                        <p className="mt-2 text-xs text-slate-600">
                            Ej: Una cuerda de 40 kN resiste solo 30 kN en su nudo de anclaje. Ese suele ser tu eslabón débil principal.
                        </p>
                    </div>
                </div>

                {/* Poleas de Redirección */}
                <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaCompressArrowsAlt className="w-5 h-5 text-orange-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Poleas Direccionales</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Si pasas una cuerda por una polea anclada a un árbol SÓLO para cambiar la dirección hacia donde jalas, esa polea se convierte en un <strong>multiplicador de fuerzas.</strong>
                    </p>
                    <div className="bg-orange-50 p-3 rounded-lg text-sm border border-orange-200">
                        <p>
                            Si el ángulo que forma la cuerda entrando y saliendo de la polea es 0° (una 'U' cerrada):
                        </p>
                        <ul className="list-disc list-inside mt-2 text-orange-900 font-bold">
                            <li>La polea soporta el peso de la carga (2 kN)</li>
                            <li>MÁS la tensión humana sosteniéndola (2 kN)</li>
                            <li><strong>TOTAL AL ANCLAJE: 4 kN (Doble Fuerza)</strong></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 mt-4">
                <h4 className="font-bold text-emerald-900 mb-2">Eliminando Eslabones Débiles (Ejemplo de Cinta)</h4>
                <p className="text-sm text-emerald-800">
                    Si tu anclaje primario es una cinta tubular anudada con un nudo de agua, su resistencia (MBS) es aprox 21 kN. Es probable que sea tu punto débil frente a cuerdas de 40kN. 
                </p>
                <p className="text-sm text-emerald-900 font-semibold mt-2">
                    Solución Inmediata:
                </p>
                <p className="text-sm text-emerald-800">
                    Envolver la cinta múltiples veces (Wrap 2, Pull 1). Esto duplica el material portante, elevando la resistencia base de 21 kN a unos masivos 43 kN, sacando automáticamente a tu anclaje de la ecuación de riesgo.
                </p>
            </div>
            
        </div>
    );
}
