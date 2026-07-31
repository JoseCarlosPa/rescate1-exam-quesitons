import { MdWarningAmber } from "react-icons/md";
import { FaFire } from "react-icons/fa";

export default function Aerials() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2">
                    Aparatos Aéreos y Grúas como Direccionales
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Las escaleras aéreas y grúas de bomberos ofrecen una altura de anclaje excepcional, pero su uso como direccionales en rescate requiere conocer sus limitaciones físicas.
                </p>
            </div>

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b border-red-200 pb-2">
                    <MdWarningAmber className="w-5 h-5 text-red-600" />
                    <h3 className="font-bold text-red-900 text-lg">Lo que NUNCA se Debe Hacer</h3>
                </div>
                <ul className="text-sm text-red-900 space-y-2 list-disc list-inside">
                    <li><strong>Nunca usar los controles hidráulicos/eléctricos del aparato</strong> para izar la carga. Solo se usa como punto de anclaje físico.</li>
                    <li><strong>Nunca mover el vehículo</strong> mientras hay una carga suspendida en la punta de la escalera.</li>
                    <li><strong>Nunca pasar el belay por la polea del aerial.</strong> Si el aerial falla o se mueve, la cuerda de belay pierde tensión y la caída se multiplica.</li>
                    <li><strong>Nunca anclar cuerdas en los estabilizadores/gatos</strong> del vehículo.</li>
                </ul>
            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b border-slate-200 pb-2">
                    <FaFire className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-gray-800 text-lg">Buenas Prácticas con Aeriales</h3>
                </div>
                <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                    <li>Maximizar el ángulo de escalada (climbing angle) — lo más empinado posible.</li>
                    <li>Anclar con cintas en <strong>ambos beams</strong> (largueros), no en un solo punto lateral, para evitar torsión.</li>
                    <li>Usar 4+ rescatistas en el haul team para evitar jalones bruscos (shock loads).</li>
                    <li>Consultar los charts de capacidad del fabricante antes de cada operación.</li>
                    <li>Nunca confundir el aerial como solución automática: un equipo de rescate bien entrenado con cuerdas es a veces más rápido y seguro.</li>
                </ul>
            </div>
        </div>
    );
}
