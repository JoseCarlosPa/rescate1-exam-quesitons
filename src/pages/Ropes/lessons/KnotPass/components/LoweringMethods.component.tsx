import { FaPaw } from "react-icons/fa";
import { MdOutlineAirlineSeatLegroomExtra } from "react-icons/md";

export default function LoweringMethods() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Métodos durante el Descenso (Lowering)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Técnicas que implican transferir la tensión de la cuerda principal a un sistema de puente.
                </p>
            </div>

            {/* Dog and Tails */}
            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <FaPaw className="w-5 h-5 text-slate-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Método "Dog & Tails"</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Es el método menos intensivo en equipos. Usa un cordín de 8mm (15 pies / 4.6m). Funciona como una trampa de dedos china:
                </p>
                <ol className="text-sm space-y-2 text-gray-800 list-decimal list-inside">
                    <li>Hacer un Figura 8 en el centro del cordín y mosquetonearlo al anclaje.</li>
                    <li>Frente al CLUTCH, cruzar ambos cabos del cordín por encima y por debajo de la cuerda tensa al menos 10 veces ("crisscross").</li>
                    <li>Finalizar con un nudo plano (Square knot) y jalar los nudos apretándolos hacia la carga.</li>
                    <li>Rotar el CLUTCH para que baje la cuerda hasta que el tejido Dog&Tails soporte la tensión. La cuerda ahora está floja.</li>
                    <li><strong>Pasar el nudo:</strong> sacar la cuerda floja del CLUTCH y meterla más allá del nudo.</li>
                    <li>Agarrar el tejido del Dog&Tails y masajearlo hacia el anclaje ("milking") para que suelte su agarre lentamente y le devuelva la tensión al CLUTCH.</li>
                </ol>
            </div>

            {/* Piggyback Lowering */}
            <div className="bg-white border-2 border-indigo-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <MdOutlineAirlineSeatLegroomExtra className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Piggyback Lowering Method</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Este método involucra anclar un CLUTCH (u otro descensor paralelo) a la cuerda principal usando un Prusik como puente temporal.
                </p>
                <ol className="text-sm space-y-2 text-gray-800 list-decimal list-inside">
                    <li>Anclar el descensor Piggyback al anclaje y colocarle un Prusik a la línea principal, quitando toda la holgura (slack).</li>
                    <li>Liberar despacio la tensión en el CLUTCH principal original. La tensión pasará a chocar contra el Prusik del Piggyback.</li>
                    <li>Pasar el nudo a través del CLUTCH principal ahora suelto y bloquear el CLUTCH ("Stop").</li>
                    <li>Con el descensor Piggyback, darle "Lowering" (bajar lentamente) a ese sistema temporal para que la tensión se vuelva a apoyar en el CLUTCH principal.</li>
                    <li>Desconectar el Piggyback y seguir bajando.</li>
                </ol>
            </div>
            
        </div>
    );
}
