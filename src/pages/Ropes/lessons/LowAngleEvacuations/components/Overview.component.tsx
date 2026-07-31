import { MdOutlineAirlineSeatFlat } from "react-icons/md";
import { FaPersonWalking } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaPersonWalking className="w-8 h-8 text-green-600 mr-3" />
                    <h2 className="text-2xl font-bold text-green-800">Evacuación en Bajo Ángulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    En el Bajo Ángulo (también llamada <em>Scree Evacuation</em>), el terreno es inclinado pero no tanto como para que la camilla quede colgada. Los cuidadores (<strong>Tenders</strong>) soportan con sus cuerpos la mayor parte del peso de la camilla. Las cuerdas controlan el movimiento y proveen belay de seguridad.
                </p>
                <div className="bg-green-100 p-4 rounded flex items-start gap-3 border border-green-200">
                    <FaChevronDown className="w-5 h-5 text-green-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-green-900 mb-1">
                            Regla de Cuántos Tenders Usar
                        </p>
                        <p className="text-sm text-green-800">
                            3 a 4 Tenders es lo óptimo. Si el terreno es tan plano que necesitas 5 o más para cargar la camilla, ya no es una evacuación técnica de cuerdas — se convierte en un <em>carryout</em> (rescate a pie) con belay de apoyo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Configuraciones de Camilla</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MdOutlineAirlineSeatFlat className="w-6 h-6 text-green-600" />
                            <h4 className="font-bold text-green-900">Horizontal (2-3 Tenders)</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                            Mejor para el confort del paciente y terreno amplio. Los Tenders van del lado bajo del terreno, inclinándose hacia atrás (leanback) para levantar la camilla del suelo.
                        </p>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MdOutlineAirlineSeatFlat className="w-6 h-6 text-teal-600 rotate-90" />
                            <h4 className="font-bold text-teal-900">Vertical / Inline (4+ Tenders)</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                            Para cañadas angostas o terreno estrecho. La línea principal se conecta con un <em>Portuguese Bowline</em> que reparte la carga en múltiples puntos de la estructura.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
