import { MdBackpack, MdOutlineDoNotTouch } from "react-icons/md";
import { FaVest } from "react-icons/fa";

export default function Technique() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Tácticas de Aproximación y Arnesado
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Acercarse a la víctima es el momento de mayor riesgo. Un movimiento en falso del sujeto puede desencadenar una caída doble si no aplicas las tácticas correctas.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                
                {/* Rope Bag */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <MdBackpack className="w-5 h-5 text-slate-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Cuerdas en Bolsa (Rope Bag)</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        Al bajar hacia la víctima, lleva tu cuerda en una mochila/bolsa. Si la cuerda cuelga suelta bajo de ti, el sujeto podría intentar agarrarla por desesperación.
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                        *Si jalan tu cuerda de freno, detendrán tu descenso abruptamente.
                    </p>
                </div>

                {/* No Connect */}
                <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <MdOutlineDoNotTouch className="w-5 h-5 text-red-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Independencia de Peso</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        <strong>Nunca ancles al paciente directo a tu arnés</strong> (salvo emergencias extremas). Hacerlo destruye tu movilidad. 
                    </p>
                    <p className="text-xs text-red-700 font-bold">
                        Usa un Pick-Off Strap conectado directamente a la cuerda principal/belay, para que el "sistema" cargue su peso, no tú.
                    </p>
                </div>

            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b border-blue-200 pb-2">
                    <FaVest className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-blue-900 text-lg">Arnés de Víctima (Victim Harness)</h3>
                </div>
                <p className="text-sm text-blue-800 mb-3">
                    Colocar un arnés de escalada estándar a una víctima colgando es peligroso porque requiere que levante las piernas, rompiendo su balance.
                </p>
                <ul className="text-sm text-blue-900 space-y-2 list-disc list-inside">
                    <li>Se prefieren Arneses de Víctima (tipo pañal) que se envuelven y abrochan alrededor del cuerpo sin moverlos.</li>
                    <li><strong>Arnés de Pecho (Chest Harness):</strong> Obligatorio si la víctima está inconsciente. Evita que caigan hacia atrás (volteándose) o que el arnés de asiento comprima su respiración.</li>
                </ul>
            </div>
            
        </div>
    );
}
