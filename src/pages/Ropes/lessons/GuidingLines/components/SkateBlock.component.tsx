import { MdWarningAmber } from "react-icons/md";
import { FaCircleNodes } from "react-icons/fa6";

export default function SkateBlock() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2">
                    Sistema Skate Block
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El Skate Block es la versión más elegante y eficiente de la Línea Guía: no necesita una cuerda de guía separada. La misma cuerda de descenso guía la carga lejos de la estructura mediante una polea adicional.
                </p>
            </div>

            <div className="bg-white border-2 border-cyan-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b border-cyan-200 pb-2">
                    <FaCircleNodes className="w-5 h-5 text-cyan-600" />
                    <h3 className="font-bold text-gray-800 text-lg">¿Cómo Funciona el Skate Block?</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    1. La cuerda principal sube desde el suelo hasta una polea de cambio de dirección en la cima de la estructura.<br/>
                    2. El extremo de la cuerda se conecta a la carga (camilla/paciente).<br/>
                    3. Una segunda polea (el "Skate Block") se monta también en esa cuerda descendente y se conecta a la carga desde otro punto.<br/>
                    4. Conforme la cuerda baja, la carga "rueda" diagonalmente alejándose de la estructura hacia los anclajes del suelo.
                </p>
                <div className="bg-cyan-50 p-3 rounded text-sm text-cyan-900 font-medium border border-cyan-200">
                    Regla del ángulo: El anclaje inferior debe estar entre <strong>15° y 30°</strong> de la línea de descenso. Menos de 15° no aleja suficientemente la carga. Más de 30° hace el sistema inoperable.
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-bold text-green-900 mb-2">✅ Ventajas del Skate Block</h4>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>No requiere cuerda guía separada.</li>
                        <li>1 operador puede controlar Twin-Tension desde el suelo.</li>
                        <li>Ideal para torres de comunicaciones y estructuras verticales.</li>
                    </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <div className="flex items-center gap-1 mb-2">
                        <MdWarningAmber className="w-4 h-4 text-red-600" />
                        <h4 className="font-bold text-red-900">Limitaciones</h4>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                        <li>No funciona para sistemas de izado (raising) desde arriba.</li>
                        <li>Ambas líneas en Twin-Tension deben moverse sincronizadas.</li>
                        <li>Sensible al ángulo del anclaje inferior (15-30°).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
