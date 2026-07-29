import { MdArrowDownward } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdArrowDownward className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-800">Sistemas de Descenso (Lowering Systems)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Un sistema de descenso es responsable de controlar una carga mientras se baja por efecto de la gravedad. A diferencia de un rappel individual, un <strong>sistema</strong> maneja cargas pesadas (camillas, rescatistas, pacientes).
                </p>
                <div className="bg-blue-100 p-4 rounded flex items-start gap-3 border border-blue-200">
                    <FaShieldAlt className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <p className="text-sm text-blue-900">
                        <strong>Regla de Oro:</strong> TODO sistema de descenso debe contar siempre con un sistema independiente de <em>Aseguramiento (Belay)</em>, independientemente de si incluye o no a una camilla o persona.
                    </p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Velocidades de Descenso (Speed Limits)</h3>
                <p className="text-sm text-gray-700 mb-4">
                    La velocidad aceptable depende enteramente del peso de la carga. La rapidez excesiva puede sobrecalentar dispositivos, generar saltos (shock loads) o dificultar reacciones de emergencia.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Cargas Normales</p>
                            <p className="text-sm font-semibold text-green-900">30 kg – 200 kg</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-green-700 text-xl">&lt; 2.0 m/s</p>
                            <p className="text-[10px] text-green-800">(Máximo 6.5 ft/s)</p>
                        </div>
                    </div>
                    
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase">Cargas Pesadas</p>
                            <p className="text-sm font-semibold text-red-900">&gt; 200 kg (440 lbs)</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-red-700 text-xl">&lt; 0.5 m/s</p>
                            <p className="text-[10px] text-red-800">(Máximo 1.6 ft/s)</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-5 p-4 border border-yellow-300 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-900">
                        <strong>El Problema del Descensor "Ocho" (Figure 8):</strong> 
                        Antiguamente popular, el Ocho ya no se recomienda para sistemas de camillas porque no provee suficiente fricción y causa severa torsión (twist) en la cuerda, originando peligrosos enredos en los bordes.
                    </p>
                </div>
            </div>
        </div>
    );
}
