import { MdOutlineCellTower } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-sky-50 to-blue-100 border-l-4 border-sky-500 p-6 rounded-lg flex items-start gap-3">
                <MdOutlineCellTower className="w-8 h-8 text-sky-700 flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-2xl font-bold text-sky-900 mb-2">Rescate en Torres y Antenas</h2>
                    <p className="text-gray-800 text-lg">
                        El aumento de torres de telecomunicaciones y las normativas de detención de caídas (fall arrest) han incrementado la necesidad de rescates técnicos en estructuras artificiales.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-slate-200 rounded-xl p-5 shadow-sm bg-white">
                    <h3 className="font-bold text-slate-800 mb-3 border-b pb-2">Reglas de Oro</h3>
                    <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
                        <li><strong>Trabajar desde el suelo:</strong> Mantén al mínimo el número de rescatistas en altura. Opera los sistemas de descenso desde abajo.</li>
                        <li><strong>Asegurar a la víctima primero:</strong> Al llegar, fija a la víctima a la estructura inmediatamente. Puede soltarse por agotamiento.</li>
                        <li><strong>Usar Drop Lines:</strong> Escala ligero con una cuerda delgada (8-9mm), luego jala el sistema de rescate pesado desde el suelo.</li>
                    </ul>
                </div>

                <div className="border-2 border-red-200 rounded-xl p-5 shadow-sm bg-red-50">
                    <div className="flex gap-2 items-center mb-3 border-b border-red-200 pb-2">
                        <FaUserShield className="w-5 h-5 text-red-600" />
                        <h3 className="font-bold text-red-900">Peligros Específicos</h3>
                    </div>
                    <ul className="text-sm text-red-900 space-y-3 list-disc list-inside">
                        <li><strong>Escaleras enjauladas (Caged Ladders):</strong> El espacio es para una persona. Cruzar a la víctima es muy difícil; requiere salir de la jaula.</li>
                        <li><strong>Sistemas Fall Protection:</strong> No son sistemas de rescate. El rescatista debe montar su propio Main/Belay independiente.</li>
                        <li><strong>Riesgo eléctrico/RF:</strong> En torres de transmisión, las antenas activas son un peligro invisible.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
