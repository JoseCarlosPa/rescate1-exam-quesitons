import { MdBuildCircle } from "react-icons/md";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";

export default function ModernConversions() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Conversiones con CLUTCH y MPD
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    La tecnología auto-bloqueante elimina la necesidad de transferir peso entre múltiples dispositivos (no se requieren correas LRH).
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* De Descenso a Izado */}
                <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaLongArrowAltUp className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-bold text-gray-800 text-lg">De Descenso a Izado (Lower to Raise)</h3>
                    </div>
                    <ol className="text-sm space-y-3 text-gray-700 list-decimal list-inside">
                        <li>
                            <strong className="text-emerald-900">Asegurar Carga:</strong> 
                            Rotar la manivela del CLUTCH a "Stop" (o activar el Parking Brake del MPD). Esto soporta la carga al 100%.
                        </li>
                        <li>
                            <strong className="text-emerald-900">Agregar Poleas:</strong> 
                            Enganchar un Prusik con una polea móvil sobre la línea principal.
                        </li>
                        <li>
                            <strong className="text-emerald-900">Preparar Tracción:</strong> 
                            Pasar la cuerda que sale del CLUTCH por la polea móvil (armando un 3:1).
                        </li>
                        <li>
                            <strong className="text-emerald-900">Liberar Seguro:</strong> 
                            Girar el CLUTCH a "Standby" para permitir el modo Trinquete/Polea y comenzar a jalar.
                        </li>
                    </ol>
                </div>

                {/* De Izado a Descenso */}
                <div className="bg-white border-2 border-rose-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaLongArrowAltDown className="w-5 h-5 text-rose-600" />
                        <h3 className="font-bold text-gray-800 text-lg">De Izado a Descenso (Raise to Lower)</h3>
                    </div>
                    <ol className="text-sm space-y-3 text-gray-700 list-decimal list-inside">
                        <li>
                            <strong className="text-rose-900">Atrapar Carga:</strong> 
                            Girar la manivela del CLUTCH a "Stop". Asegurarse de que el dispositivo soportó el peso (las poleas de izado se aflojarán).
                        </li>
                        <li>
                            <strong className="text-rose-900">Desarmar Poleas:</strong> 
                            Quitar el nudo Prusik tractor y la polea móvil de la cuerda principal. 
                        </li>
                        <li>
                            <strong className="text-rose-900">Alistarse para Bajar:</strong> 
                            Volver a girar la manivela a "Standby" (o abrir el MPD) mientras se sujeta firmemente el cabo de freno.
                        </li>
                    </ol>
                </div>

            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mt-4">
                <div className="flex items-center gap-2 mb-2">
                    <MdBuildCircle className="w-5 h-5 text-slate-700" />
                    <h4 className="font-bold text-slate-800">Notas Críticas</h4>
                </div>
                <p className="text-sm text-slate-700">
                    Como los dispositivos modernos hacen la transición <em>internamente</em> gracias a su leva (cam), el rescatista NUNCA tiene que manipular nudos de liberación bajo tensión. Esto recorta el tiempo de conversión de varios minutos a apenas unos segundos, siendo el estándar dorado actual en operaciones de rescate complejas.
                </p>
            </div>
            
        </div>
    );
}
