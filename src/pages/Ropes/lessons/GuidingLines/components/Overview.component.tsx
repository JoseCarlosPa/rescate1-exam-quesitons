import { MdAltRoute } from "react-icons/md";
import { FaNetworkWired } from "react-icons/fa";

export default function GuidingLinesOverview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-50 to-sky-50 border-l-4 border-cyan-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdAltRoute className="w-8 h-8 text-cyan-600 mr-3" />
                    <h2 className="text-2xl font-bold text-cyan-800">¿Qué es una Línea Guía?</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Una Línea Guía (Guiding Line) es una cuerda tensada en diagonal desde un anclaje en la base del rescate hasta la polea que lleva la camilla. Funciona como un "riel invisible" que mantiene la camilla alejada de la pared o superficie durante todo el descenso, sin necesitar un Tender dedicado solo a empujar.
                </p>
                <div className="bg-cyan-100 p-4 rounded flex items-start gap-3 border border-cyan-200">
                    <FaNetworkWired className="w-5 h-5 text-cyan-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-cyan-900 mb-1">¿Cuándo usarla?</p>
                        <p className="text-sm text-cyan-800">
                            Especialmente en acantilados con salientes (overhangs) donde la camilla quedaría libre en el vacío, o en terrenos muy inclinados hacia afuera donde el Tender no puede pararse en la pared.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Guiding Line vs Sistema Convencional</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                        <h4 className="font-bold text-slate-900 mb-2">Sistema Convencional</h4>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                            <li>Tender fisicamente empuja la camilla.</li>
                            <li>Requiere que el Tender pueda pararse en la pared.</li>
                            <li>Fácil de montar, menos equipamiento.</li>
                        </ul>
                    </div>
                    <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-lg">
                        <h4 className="font-bold text-cyan-900 mb-2">Con Línea Guía</h4>
                        <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                            <li>La cuerda dirige la camilla automáticamente.</li>
                            <li>Funciona incluso sobre vacíos totales (overhangs).</li>
                            <li>Requiere anclaje inferior + M/A de tensión (5:1).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
