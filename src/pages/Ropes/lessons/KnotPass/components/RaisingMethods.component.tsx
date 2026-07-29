import { MdOutlineAirlineSeatLegroomNormal } from "react-icons/md";
import { FaLink } from "react-icons/fa6";

export default function RaisingMethods() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Métodos durante el Izado (Raising)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Al izar, los nudos vienen de abajo. El principio sigue siendo crear holgura en el dispositivo principal "levantando" la cuerda un poco más.
                </p>
            </div>

            {/* M/A Piggyback con AZTEK */}
            <div className="bg-white border-2 border-emerald-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <MdOutlineAirlineSeatLegroomNormal className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Mechanical Advantage Piggyback Method</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Es la técnica ideal si posees un sistema pre-armado (como el AZTEK o sistema 4:1 o 5:1 contenido en un bolso).
                </p>
                <ol className="text-sm space-y-2 text-gray-800 list-decimal list-inside">
                    <li>Izar hasta que el nudo casi llegue al CLUTCH (abajo de él) y trabar el CLUTCH en "Stop".</li>
                    <li>Anclar el sistema Piggyback a la pared, y con un Prusik, conectarlo a la cuerda principal <strong>por DEBAJO</strong> del nudo.</li>
                    <li>Izar usando este Piggyback hasta que el nudo suba por encima de donde está anclado el CLUTCH. La cuerda dentro del CLUTCH quedará floja.</li>
                    <li>Sacar la cuerda floja del CLUTCH, y enhebrarla saltándose el nudo.</li>
                    <li>Bajar suavemente el sistema Piggyback para transferir la carga de regreso al CLUTCH principal.</li>
                </ol>
            </div>

            {/* Twin Tension con Bucle */}
            <div className="bg-white border-2 border-amber-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <FaLink className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Twin-Tension con Nudo Figura de 8 (Loop)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Si no cuentas con Prusiks extra y tienes holgura, puedes crear el anclaje bloqueante en la propia cuerda.
                </p>
                <ol className="text-sm space-y-2 text-gray-800 list-decimal list-inside">
                    <li>Izar hasta que el nudo esté unos 5 pies (1.5 m) debajo del CLUTCH.</li>
                    <li>Jalar holgura suelta detrás del sistema 3:1 de la línea afectada, armarle un bucle en Figura 8 y conectarlo al anclaje.</li>
                    <li>Continuar izando <strong>sólo usando la SEGUNDA CUERDA (Twin-tension)</strong>, lo cual forzará a que el Figura de 8 en el anclaje atrape y asuma el peso residual. Esto deja la cuerda primaria holgada en el CLUTCH.</li>
                    <li>Pasar el nudo a través del CLUTCH suelto.</li>
                    <li>Desarmar el bucle Figura de 8, ajustar las poleas y reanudar el izado en tándem.</li>
                </ol>
            </div>

        </div>
    );
}
