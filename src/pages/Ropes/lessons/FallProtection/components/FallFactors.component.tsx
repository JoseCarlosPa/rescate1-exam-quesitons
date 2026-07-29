import { MdShowChart } from "react-icons/md";
import { FaHeartBroken } from "react-icons/fa";

export default function FallFactors() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Factor de Caída (Fall Factor)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El Factor de Caída es una ecuación matemática simple para predecir cuán destructivo será el impacto sobre tu cuerpo y tus anclajes. Se calcula dividiendo la <strong>Distancia de Caída Libre</strong> entre la <strong>Longitud de Cuerda Activa</strong>.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
                
                {/* Factor 0 */}
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-emerald-800 text-lg mb-2">Factor 0 (Ideal)</h3>
                    <p className="text-xs text-emerald-900 mb-2">Anclaje directamente arriba de ti, cuerda sin holgura.</p>
                    <p className="text-sm text-gray-700">
                        Si resbalas, la distancia de caída es virtualmente 0 metros porque la cuerda ya te está sosteniendo. Las fuerzas de impacto son nulas.
                    </p>
                </div>

                {/* Factor 1 */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-yellow-800 text-lg mb-2">Factor 1 (Peligroso)</h3>
                    <p className="text-xs text-yellow-900 mb-2">Anclaje a la altura de la cintura.</p>
                    <p className="text-sm text-gray-700">
                        Si tu eslinga mide 2 metros, caerás 2 metros enteros antes de frenar. El impacto es severo y requiere arnés y cuerdas especiales para absorber la energía.
                    </p>
                </div>

                {/* Factor 2 */}
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 shadow-sm">
                    <h3 className="font-bold text-red-800 text-lg mb-2">Factor 2 (Mortal)</h3>
                    <p className="text-xs text-red-900 mb-2">Anclaje a la altura de los pies.</p>
                    <p className="text-sm text-gray-700">
                        Si tu eslinga mide 2 metros, caerás 4 metros en total pasando de largo por tu anclaje. Destruye cuerdas estáticas y quiebra espinas dorsales si no hay un absorbedor de energía masivo.
                    </p>
                </div>

            </div>

            <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <FaHeartBroken className="w-5 h-5 text-red-500" />
                    <h3 className="font-bold text-gray-800 text-lg">La Línea Horizontal Mortal (High Line accidental)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    El manual advierte fuertemente contra amarrar una cuerda de extremo a extremo a lo largo del borde del acantilado a nivel del piso, para que el equipo se enganche ahí con sus eslingas. 
                </p>
                <div className="bg-red-50 p-3 rounded-lg text-sm border border-red-200 text-red-900 font-medium">
                    Si alguien resbala, no solo sufre un letal <strong>Factor de Caída 2</strong> (anclaje en los pies), sino que al tensar la cuerda horizontal en 90 grados, ésta actuará como una tirolesa (High Line). El choque dinámico multiplicará la fuerza sobre los anclajes y los arrancará de la pared.
                </div>
            </div>

            <div className="bg-white border-2 border-blue-200 rounded-xl p-5 shadow-sm mt-4">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <MdShowChart className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Lead Climbing (Escalada de Punta)</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Cuando un rescatista tiene que trepar por una antena o estructura desde abajo, usando bloqueadores y subiendo sus propios seguros (Fall Arrest).
                </p>
                <div className="text-sm text-gray-800 space-y-2">
                    <p>
                        Dado que siempre estará por encima de su último seguro, las caídas son violentas. <strong>Nunca uses cuerdas de rescate estáticas para Lead Climbing.</strong> Debes usar Cuerdas Dinámicas (High-stretch) de alpinismo para que estiren y absorban el colosal impacto.
                    </p>
                </div>
            </div>
            
        </div>
    );
}
