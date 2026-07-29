import { MdSettingsApplications } from "react-icons/md";
import { FaCompressAlt, FaHandPaper } from "react-icons/fa";

export default function MechanicalDevices() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Dispositivos Mecánicos (CLUTCH, MPD, 540°)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Hardware certificado NFPA para aseguramiento. Más consistentes e intuitivos que los nudos manuales.
                </p>
            </div>

            <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm mb-6">
                <div className="flex items-center gap-2 mb-3">
                    <MdSettingsApplications className="w-6 h-6 text-red-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Ventajas de los Sistemas Mecánicos</h3>
                </div>
                <ul className="text-sm space-y-3 text-gray-700">
                    <li className="flex gap-2">
                        <span className="text-red-500 font-bold mt-1">✓</span>
                        <div>
                            <strong>Liberación de Carga Integral (Integral Load Release):</strong> 
                            A diferencia de los Prusiks, si estos dispositivos frenan una caída pesada, no necesitas un Load Release Hitch. Simplemente accionas la palanca (handle) del CLUTCH/MPD para aliviar la tensión y continuar el descenso de inmediato.
                        </div>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-red-500 font-bold mt-1">✓</span>
                        <div>
                            <strong>Consistencia y Manejo de Impacto:</strong> 
                            Soportan altísimas cargas de impacto sin dañar severamente la cuerda y no sufren variaciones de fricción como pasa con los Prusiks cuando se mojan o se desgastan.
                        </div>
                    </li>
                    <li className="flex gap-2">
                        <span className="text-red-500 font-bold mt-1">✓</span>
                        <div>
                            <strong>Función de Polea (CLUTCH/MPD):</strong> 
                            Sirven al mismo tiempo como polea de alta eficiencia y ratchet durante el izado.
                        </div>
                    </li>
                </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {/* Descenso */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 border-b pb-2 mb-3">
                        <FaHandPaper className="w-5 h-5 text-gray-600" />
                        <h4 className="font-bold text-gray-800">Asegurando un Descenso</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        Durante un "lowering", debes mantener la palanca del dispositivo ABIERTA para permitir que la cuerda de belay fluya, mientras usas la fricción del dispositivo (ej. la ranura en V del MPD) para imitar la velocidad del Main.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-2 mt-2">
                        <p className="text-xs text-red-900 font-bold">REACCIÓN CRÍTICA:</p>
                        <p className="text-xs text-red-800">Si la línea principal falla, el asegurador debe SOLTAR INMEDIATAMENTE la palanca (desenganchar) para que el mecanismo automático atrape la carga en la menor distancia posible.</p>
                    </div>
                </div>

                {/* Izado */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center gap-2 border-b pb-2 mb-3">
                        <FaCompressAlt className="w-5 h-5 text-gray-600" />
                        <h4 className="font-bold text-gray-800">Asegurando un Izado</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        Simplemente se jala la cuerda (mano sobre mano) a través del dispositivo a medida que el equipo principal eleva la carga. El ratchet interno evitará que retroceda.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-2 mt-2">
                        <p className="text-xs text-blue-900 font-bold">Tip de Eficiencia:</p>
                        <p className="text-xs text-blue-800">Si el izado es de más de 30 metros (100 ft), se recomienda convertir la línea de belay en un sistema 3:1 (M/A simple). Esto ayuda enormemente a jalar la cuerda, sacar el "slack" (comba) y asiste indirectamente a la carga principal.</p>
                    </div>
                </div>
            </div>
            
            <p className="text-xs text-gray-500 mt-5 italic">
                Nota: Algunas desventajas incluyen mayor peso, mayor costo, y el hecho de que cuerdas estáticas con camisa (sheath) muy lisa podrían patinar ligeramente en ciertos dispositivos.
            </p>
        </div>
    );
}
