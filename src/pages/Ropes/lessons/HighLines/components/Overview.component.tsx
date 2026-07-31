import { MdWarningAmber } from "react-icons/md";
import { FaArrowsLeftRight } from "react-icons/fa6";

export default function HighLinesOverview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaArrowsLeftRight className="w-8 h-8 text-violet-600 mr-3" />
                    <h2 className="text-2xl font-bold text-violet-800">Líneas Altas (Highlines / Tyrolean)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Un Highline (también llamado Tirolesa o Telpher) es un sistema de cuerdas suspendido entre dos puntos elevados, permitiendo transportar una carga (camilla o persona) horizontalmente sobre un obstáculo infranqueable: un cañón, un río en creciente, o terreno peligroso.
                </p>
                <div className="bg-violet-100 p-4 rounded flex items-start gap-3 border border-violet-200">
                    <MdWarningAmber className="w-5 h-5 text-violet-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-violet-900 mb-1">La trampa del ángulo (Sag y Fuerzas)</p>
                        <p className="text-sm text-violet-800">
                            Mientras más horizontal quieres que quede la cuerda-riel (menos sag), más tensión debes aplicar — y esa tensión crece exponencialmente. Un ángulo de 5° en el punto medio de la cuerda puede generar fuerzas de 11x el peso de la carga en los anclajes. Usa siempre cuerdas de baja elongación (Low-Stretch).
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Tipos de Highline</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-violet-50 border border-violet-200 p-4 rounded-lg">
                        <h4 className="font-bold text-violet-900 mb-2">Kootenay</h4>
                        <p className="text-sm text-gray-700">
                            La tensión de la cuerda-riel se <strong>reduce</strong> para bajar la carga en el punto medio del vano. Requiere liberar la tensión con control desde el anclaje.
                        </p>
                    </div>
                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-2">Reeving (Re-enrollado)</h4>
                        <p className="text-sm text-gray-700">
                            La cuerda-riel permanece siempre tensada. Se usan <strong>cuerdas de control adicionales</strong> (Control Lines) que actúan como sistemas de izado/descenso independientes para mover la carga verticalmente en el punto medio.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
