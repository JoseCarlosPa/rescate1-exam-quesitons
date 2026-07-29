import { MdArrowUpward } from "react-icons/md";
import { FaAnchor } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdArrowUpward className="w-8 h-8 text-teal-600 mr-3" />
                    <h2 className="text-2xl font-bold text-teal-800">Ascenso por Cuerdas (Ascending)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Ascender por una cuerda colgante requiere un sistema mecánico que "capture" tu progreso cada vez que te pones de pie. Es una habilidad esencial tanto para rescatistas (Tenders) como para técnicos de acceso por cuerdas (SPRAT/IRATA).
                </p>
                <div className="bg-teal-100 p-4 rounded flex items-start gap-3 border border-teal-200">
                    <FaAnchor className="w-6 h-6 text-teal-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-teal-900 mb-1">
                            Regla de Vida: Dos Puntos de Conexión Constantes
                        </p>
                        <p className="text-sm text-teal-800">
                            Nunca, bajo ninguna circunstancia, debes depender de un solo punto de fijación al ascender en una cuerda simple. <strong>Debes tener DOS líneas/conectores separados atados directamente a tu ARNÉS</strong>. <em>Nota: Los pedales (Foot Loops) NO cuentan como conexión de vida.</em>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Entrenamiento y Dispositivos</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                        <h4 className="font-bold text-slate-900 mb-2">Entrenamiento Seguro</h4>
                        <p className="text-sm text-slate-800">
                            Debido a que el alumno debe abrir y cerrar levas dentadas de bloqueadores mientras cuelga, el riesgo de error es altísimo. La escuela CMC prohíbe las prácticas de ascenso sin una <strong>línea de Belay independiente (Top Belay)</strong> que respalde al estudiante en caso de caída libre.
                        </p>
                    </div>
                    
                    <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-lg">
                        <h4 className="font-bold text-cyan-900 mb-2">CLUTCH para Ascenso</h4>
                        <p className="text-sm text-cyan-800">
                            Dispositivos como el CLUTCH o MPD pueden usarse como tu conexión principal al arnés. Actúan como un trinquete automático. Solo necesitas añadir arriba un bloqueador de mano con un pedal, pararte en él, y jalar rápido la cuerda que sale de tu CLUTCH para "comer" esa distancia.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
