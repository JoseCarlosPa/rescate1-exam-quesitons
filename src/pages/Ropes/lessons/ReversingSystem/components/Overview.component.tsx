import { MdSwapVerticalCircle } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 border-l-4 border-violet-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdSwapVerticalCircle className="w-8 h-8 text-violet-600 mr-3" />
                    <h2 className="text-2xl font-bold text-violet-800">Revertir un Sistema (System Reversal)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Revertir un sistema significa <strong>cambiar su dirección operativa principal (de Descenso a Izado, o de Izado a Descenso)</strong> sin comprometer nunca la seguridad de la carga. 
                </p>
                <div className="bg-white p-4 rounded text-sm text-gray-800 shadow-sm border border-violet-100">
                    <p className="font-semibold text-violet-900 mb-2">¿Por qué revertir?</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>La camilla se atasca en una grieta durante un descenso y hay que subirla un poco para liberarla.</li>
                        <li>La operación requería bajar rescatistas hasta la víctima, y luego subirlos a ambos (Lower to Raise).</li>
                        <li>Un obstáculo de terreno hace más fácil bajar al paciente que seguir subiéndolo (Raise to Lower).</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Reglas Generales de Conversión</h3>
                
                <div className="space-y-4">
                    <div className="border border-violet-200 bg-violet-50 p-4 rounded-lg flex gap-3">
                        <FaShieldAlt className="w-6 h-6 text-violet-700 flex-shrink-0" />
                        <div>
                            <h4 className="font-bold text-violet-900 mb-1">1. La Línea de Belay SIEMPRE ACTIVA</h4>
                            <p className="text-sm text-gray-700">
                                La línea de seguridad (Belay) no debe soltarse nunca. Durante las conversiones en la línea principal, el operador de Belay debe mantener su sistema tenso, o amarrado (tied-off). 
                            </p>
                            <p className="text-xs text-violet-800 mt-2 font-semibold">
                                Ventaja: Sistemas como el Tandem Prusik no necesitan reconfigurarse; funcionan bi-direccionalmente.
                            </p>
                        </div>
                    </div>

                    <div className="border border-gray-200 bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-900 mb-1">2. Comunicación Crítica</h4>
                        <p className="text-sm text-gray-700">
                            El operador de la línea principal jamás debe mover la carga hasta que la conversión esté terminada y haya reportado en voz alta al Líder del Equipo: <em>"Listo para Bajar" (Ready to Lower)</em> o <em>"Listo para Subir" (Ready to Raise)</em>.
                        </p>
                    </div>

                    <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
                        <h4 className="font-bold text-red-900 mb-1">3. El "Load Release Strap" (Sistemas Convencionales)</h4>
                        <p className="text-sm text-gray-700">
                            Si no usas MPD/CLUTCH, tu Ratchet (Trinquete) debe estar atado a una correa de liberación de carga (LRH). Para pasar de subir a bajar, necesitarás liberar este nudo muy lentamente para transferir las 400 lbs de peso desde el trinquete hacia el Rack de barras. <strong>¡Nunca de golpe!</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
