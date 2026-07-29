import { MdPeopleOutline, MdWarningAmber } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaUserPlus className="w-8 h-8 text-orange-600 mr-3" />
                    <h2 className="text-2xl font-bold text-orange-800">Recogida de Persona (Pick-Off)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Un rescate Pick-Off es la extracción ultra rápida de una persona atrapada, atascada o bajo riesgo inminente. A diferencia de una evacuación con camilla, el Pick-Off requiere una víctima sin lesiones de columna severas, ya que colgará en un arnés.
                </p>
                <div className="bg-orange-100 p-4 rounded flex items-start gap-3 border border-orange-200">
                    <MdWarningAmber className="w-6 h-6 text-orange-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-orange-900 mb-1">
                            El Peligro de Cortar (Never Cut!)
                        </p>
                        <p className="text-sm text-orange-800">
                            La regla de oro del Pick-Off: Nunca liberes al paciente cortando su cuerda tensa o eslinga. Un corte genera un choque dinámico masivo (shock load) y podrías cortar la cuerda equivocada. <strong>Siempre DEBES levantar (unweight) a la víctima mecánicamente</strong> para desenganchar sus mosquetones con las manos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Tipos de Pick-Off</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MdPeopleOutline className="w-6 h-6 text-emerald-600" />
                            <h4 className="font-bold text-emerald-900">Lowering Pick-Off (En Equipo)</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                            El estándar de oro. El equipo de arriba baja al rescatista. Al no tener que operar un descensor, el rescatista llega con <strong>las dos manos libres</strong>, permitiendo sujetar y empaquetar a la víctima en segundos.
                        </p>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MdWarningAmber className="w-6 h-6 text-red-600" />
                            <h4 className="font-bold text-red-900">Rappel Pick-Off (Individual)</h4>
                        </div>
                        <p className="text-sm text-gray-700">
                            Alta dificultad. El rescatista baja por sus propios medios controlando su peso más el del paciente (carga doble). Se exige uso de descensores autobloqueantes (CLUTCH/MPD) y extrema lentitud para no quemar la cuerda.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
