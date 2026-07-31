import { FaArrowsAltH } from "react-icons/fa";
import { MdOutlineCable } from "react-icons/md";

export default function Components() {
    const parts = [
        {
            name: "Track Line (Cuerda Riel)",
            desc: "Cuerda de baja elongación tensada entre los dos anclajes. Soporta el peso de la carga. Debe ser Low-Stretch para minimizar el sag."
        },
        {
            name: "Track Pulley / Carriage",
            desc: "La polea principal que rueda sobre la Track Line y de la cual cuelga la carga (camilla + tender). Debe ser suficientemente grande para no rozar la cuerda."
        },
        {
            name: "Control Lines",
            desc: "Cuerdas que van de cada anclaje a la carga. Controlan el movimiento de la carga (izar/bajar). También actúan como belay si la Track Line falla."
        },
        {
            name: "Festoons",
            desc: "Cintas de ~30cm cada 9m que conectan las Control Lines a la Track Line. Evitan que las Control Lines se enreden con el terreno al desplegar."
        },
        {
            name: "Messenger Line",
            desc: "Cordón delgado y ligero lanzado primero a través del vano. Una vez en el otro lado, sirve para jalar las cuerdas principales pesadas."
        },
        {
            name: "Tensioning System",
            desc: "Polipasto (M/A) instalado en el lado de tensión para estirar la Track Line. Las Prusiks en tándem conectan el polipasto a la cuerda sin debilitarla."
        }
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2">
                    Componentes de un Highline Reeving
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Un Highline tiene más componentes que cualquier otro sistema de rescate vertical. Conocer cada parte y su función es esencial para montarlo correctamente y con seguridad.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {parts.map((part) => (
                    <div key={part.name} className="bg-white border-2 border-violet-100 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-2">
                            <MdOutlineCable className="w-5 h-5 text-violet-500 flex-shrink-0" />
                            <h4 className="font-bold text-violet-900 text-sm">{part.name}</h4>
                        </div>
                        <p className="text-xs text-gray-700">{part.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <FaArrowsAltH className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-amber-900 text-lg">El Peligro del Sag (Caída del Centro)</h3>
                </div>
                <p className="text-sm text-amber-900">
                    Las pruebas CMC mostraron que, incluso con Control Lines bien apretadas, si la Track Line falla, la carga puede caer hasta el <strong>20% del largo del vano</strong> antes de que el belay la atrape. En un span de 30m, eso son 6 metros de caída libre. Siempre verifica la distancia real al suelo u obstáculos bajo el punto de carga.
                </p>
            </div>
        </div>
    );
}
