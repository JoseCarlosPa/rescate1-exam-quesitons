import { MdOutlineAirlineSeatFlat, MdWarningAmber } from "react-icons/md";
import { FaMountain } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-stone-50 to-neutral-50 border-l-4 border-stone-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaMountain className="w-8 h-8 text-stone-600 mr-3" />
                    <h2 className="text-2xl font-bold text-stone-800">Evacuación en Alto Ángulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Consideramos un "Alto Ángulo" (High Angle o Vertical) a cualquier inclinación donde la <strong>totalidad del peso</strong> de la camilla y del rescatista es sostenida por las cuerdas y anclajes, no por el suelo.
                </p>
                <div className="bg-stone-100 p-4 rounded flex items-start gap-3 border border-stone-200">
                    <MdWarningAmber className="w-6 h-6 text-stone-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-stone-900 mb-1">
                            Sobrecarga del Sistema
                        </p>
                        <p className="text-sm text-stone-800">
                            Añadir múltiples Tenders (cuidadores) colgando junto a la camilla incrementa drásticamente la fuerza que el equipo de tracción debe jalar arriba. Nunca uses más de un Tender a menos que se requiera soporte médico avanzado constante.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Tipos de Configuración de Camilla</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MdOutlineAirlineSeatFlat className="w-6 h-6 text-slate-600" />
                            <h4 className="font-bold text-slate-900">Camilla Horizontal</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                            Es la posición estándar. El paciente viaja acostado boca arriba, maximizando el confort y permitiendo la inmovilización espinal completa y el manejo de vía aérea.
                        </p>
                    </div>

                    <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MdOutlineAirlineSeatFlat className="w-6 h-6 text-zinc-600 rotate-90" />
                            <h4 className="font-bold text-zinc-900">Camilla Vertical (Inline)</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                            Usada para grietas, chimeneas o ductos estrechos. El paciente viaja "colgado" dentro de la camilla, sostenido por su arnés pélvico interno. Muy doloroso si hay lesiones en extremidades inferiores.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
