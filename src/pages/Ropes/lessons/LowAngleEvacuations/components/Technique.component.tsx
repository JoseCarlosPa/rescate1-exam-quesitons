import { FaCircle } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";

export default function Technique() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2">
                    Técnicas de los Cuidadores (Litter Tenders)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El éxito de una evacuación de bajo ángulo depende de la coordinación de los Tenders. Deben dominar su conexión a la camilla, el ritmo de movimiento y el uso del leanback para maximizar la eficiencia.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b border-green-200 pb-2">
                        <MdArrowUpward className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Técnica Leanback (Inclinarse Hacia Atrás)</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">
                        El Tender se conecta al poste de la camilla con una cinta ajustable (CMC Litter Strap) por delante de su posición y se inclina hacia atrás, como si estuviera en rapel.
                    </p>
                    <div className="bg-green-50 p-3 rounded text-sm text-green-800 font-medium">
                        Su peso corporal se convierte en fuerza de <strong>elevación</strong> sobre la camilla. Sus piernas trabajan; sus brazos descansan. Esta es la forma más eficiente de sostener la camilla en una pendiente.
                    </div>
                </div>

                <div className="bg-white border-2 border-teal-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b border-teal-200 pb-2">
                        <FaCircle className="w-5 h-5 text-teal-600" />
                        <h3 className="font-bold text-gray-800 text-lg">La Rueda de Camilla (Litter Wheel)</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Opcional pero muy útil en terreno limpio. Levanta la camilla del suelo y rueda sobre él, reduciendo la fricción y el número de Tenders.
                    </p>
                    <div className="space-y-1 text-xs text-gray-600">
                        <p className="font-bold text-red-600">⚠ No usar si hay:</p>
                        <p>• Muchas rocas, troncos o arbustos densos</p>
                        <p>• Cañadas angostas (sin espacio para la rueda y pies)</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-blue-900 text-lg mb-2">Posición del Médico (Medic)</h3>
                <p className="text-sm text-blue-800">
                    El médico debe ir en la cabecera del paciente. Se conecta como Tender adicional usando su propia Litter Strap. Si la camilla debe girarse (ej. vomita el paciente), el equipo libera las cintas de los tenders de ese lado para ceder espacio al médico para maniobrar.
                </p>
            </div>
        </div>
    );
}
