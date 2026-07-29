import { MdSecurity } from "react-icons/md";
import { FaHardHat } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdSecurity className="w-8 h-8 text-yellow-600 mr-3" />
                    <h2 className="text-2xl font-bold text-yellow-800">Principios de Protección (Fall Protection)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    En el rescate por cuerdas y el trabajo en alturas, la prevención de caídas dicta las reglas de operación cerca de cualquier precipicio. El objetivo siempre es <strong>evitar la caída</strong> en lugar de tener que detenerla.
                </p>
                <div className="bg-yellow-100 p-4 rounded flex items-start gap-3 border border-yellow-200">
                    <FaHardHat className="w-6 h-6 text-yellow-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-yellow-900 mb-1">
                            Restricción vs Detención
                        </p>
                        <ul className="text-sm text-yellow-800 space-y-1">
                            <li><strong>Travel Restraint (Restricción):</strong> Una línea que es físicamente demasiado corta para dejarte llegar al borde y caer. Es 100% segura.</li>
                            <li><strong>Fall Arrest (Detención):</strong> Una línea larga donde se asume que CAERÁS al vacío. Requiere cálculos, absorbedores de energía y un protocolo de rescate inmediato.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Zonificación (Edge Mitigation)</h3>
                
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-2">Marcaje Perimetral</h4>
                    <p className="text-sm text-gray-700 mb-2">
                        La forma más simple de evitar caídas cuando hay muchas personas jalando cuerdas es demarcar el área de riesgo con cinta (flagging tape). Quien cruce la cinta hacia el vacío, <strong>debe estar anclado</strong>.
                    </p>
                    <p className="text-sm text-slate-800 font-semibold italic">
                        "La restricción de viaje (Travel Restraint) es la herramienta de seguridad por excelencia para el Triage inicial y para los paramédicos que se asoman al barranco."
                    </p>
                </div>
            </div>
        </div>
    );
}
