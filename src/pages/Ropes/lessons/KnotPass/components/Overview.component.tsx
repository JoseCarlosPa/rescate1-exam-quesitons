import { MdLink } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdLink className="w-8 h-8 text-cyan-600 mr-3" />
                    <h2 className="text-2xl font-bold text-cyan-800">Paso de Nudos (Knot Pass)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    A veces, la cuerda principal puede tener un nudo en medio (ya sea para unir dos cuerdas o para aislar un daño mediante un nudo Mariposa). Puesto que los descensores y poleas de ventaja mecánica no admiten nudos gruesos, el equipo debe aplicar maniobras para "saltar" o "pasar" el nudo sin que la carga se caiga.
                </p>
                <div className="bg-cyan-100 p-4 rounded text-sm text-cyan-900 border border-cyan-200">
                    <strong className="block mb-1">El Principio de Transferencia de Carga</strong>
                    Cualquier método para pasar un nudo exige <strong>crear un puente temporal</strong> (otro dispositivo, un nudo Dog & Tails, o un Piggyback) que soporte el 100% de la carga de la camilla. Solo cuando la cuerda principal quede completamente libre de tensión, se puede desarmar el dispositivo principal (CLUTCH/MPD), meter la cuerda más allá del nudo, cerrarlo, y devolverle el peso.
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Reglas Generales y Distancias</h3>
                
                <div className="space-y-4">
                    <div className="border border-orange-200 bg-orange-50 p-4 rounded-lg flex gap-3 items-start">
                        <FaExclamationTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                        <div>
                            <h4 className="font-bold text-orange-900 mb-1">Detenerse a 18 Pulgadas (0.5m)</h4>
                            <p className="text-sm text-gray-700">
                                Si el nudo entra a la garganta del CLUTCH o Rack de barras, el dispositivo se trabará catastróficamente. <strong>Obligatoriamente</strong> hay que frenar el descenso o izado cuando el nudo esté al menos a 18 pulgadas de chocar con el dispositivo.
                            </p>
                            <p className="text-xs text-orange-800 mt-2">
                                En los Racks de barras (Brake Bar Racks), esta distancia adicional es crítica porque se necesita ese tramo suelto de cuerda para hacer los nudos de seguridad (Tie-off) antes de iniciar la transferencia de carga.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-bold text-gray-900 mb-2">La Solución Twin-Tension (La más fácil)</h4>
                        <p className="text-sm text-gray-700">
                            Si se operan dos cuerdas tensas gemelas (TTRS), pasar un nudo es lo más rápido posible: como ambas aguantan la camilla simultáneamente, simplemente transfiere el peso entero (bajando un poco la cuerda del nudo y sosteniendo fuerte la otra) para que la otra cuerda soporte el peso. Luego sacas el CLUTCH sin tensión, saltas el nudo, y retomas.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
