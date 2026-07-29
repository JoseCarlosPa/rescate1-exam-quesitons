import { FaArrowUp, FaLink } from "react-icons/fa";
import { MdSettingsEthernet } from "react-icons/md";

export default function Technique() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Técnicas de Ejecución y Transferencia
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El verdadero reto del Pick-Off no es llegar a la víctima, sino lograr transferir su peso desde su sistema colapsado hacia tu sistema de rescate de forma suave.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
                
                {/* Transferencia */}
                <div className="bg-white border-2 border-indigo-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b border-indigo-200 pb-2">
                        <FaArrowUp className="w-5 h-5 text-indigo-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Transferencia de Carga (Unweighting)</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Si la víctima cuelga de un cable tenso, debes levantarla unos centímetros para que su mosquetón quede suelto (holgado) y puedas abrirlo a mano.
                    </p>
                    <ul className="text-sm text-indigo-900 space-y-2 list-disc list-inside">
                        <li><strong>Vector Pull:</strong> Tu equipo arriba jala la cuerda hacia un lado fuertemente para izarte a ti y al paciente de un jalón.</li>
                        <li><strong>AZTEK LT:</strong> Conectas este mini-polipasto entre tú y la víctima y la izas manualmente.</li>
                    </ul>
                </div>

                {/* Posicionamiento */}
                <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                        <MdSettingsEthernet className="w-5 h-5 text-slate-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Posición Colgante</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Al conectar la cinta "Pick-Off Strap" al paciente, el ajuste de longitud es crítico para el descenso conjunto.
                    </p>
                    <div className="bg-slate-100 p-3 rounded text-sm text-slate-800 font-medium">
                        El paciente debe quedar colgando ligeramente por encima del nivel de tus muslos. Así lo mantienes entre tus piernas, puedes abrazarlo lateralmente y TUS rodillas actúan como parachoques contra la pared.
                    </div>
                </div>

            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b border-amber-200 pb-2">
                    <FaLink className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-amber-900 text-lg">Belay Directo (Víctima Capaz)</h3>
                </div>
                <p className="text-sm text-amber-900">
                    A veces llegas a una víctima (ej. escalador ileso) y te das cuenta que puede moverse perfectamente, pero está paralizado por el miedo a caer. En ese caso, la táctica más segura y fácil es simplemente <strong>anclarlo al sistema de Belay</strong> y pedirle que camine hacia arriba o abajo mientras le vas quitando holgura (slack).
                </p>
            </div>
            
        </div>
    );
}
