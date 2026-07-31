import { MdAcUnit } from "react-icons/md";
import { FaSnowflake } from "react-icons/fa6";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500 p-6 rounded-lg flex items-start gap-3">
                <MdAcUnit className="w-8 h-8 text-cyan-700 flex-shrink-0 mt-1" />
                <div>
                    <h2 className="text-2xl font-bold text-cyan-900 mb-2">Evacuaciones en Nieve y Superficies Lisas</h2>
                    <p className="text-gray-800 text-lg">
                        Al deslizar una camilla sobre nieve, escaleras o laderas de pasto, la carga sobre el sistema de cuerdas se reduce dramáticamente. Esto cambia por completo las reglas de equipo y fuerza.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-cyan-200 rounded-xl p-5 shadow-sm bg-white">
                    <div className="flex gap-2 items-center mb-3 border-b border-cyan-200 pb-2">
                        <FaSnowflake className="w-5 h-5 text-cyan-600" />
                        <h3 className="font-bold text-cyan-800">El Rol de la Nieve</h3>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-3 list-disc list-inside">
                        <li><strong>Gravedad Reducida:</strong> La camilla se desliza como trineo; los tenders ya no cargan el peso.</li>
                        <li><strong>Equipo más ligero:</strong> Se pueden usar cuerdas de menor diámetro y descensores de rescate ligero (Petzl GriGri).</li>
                        <li><strong>Pérdida de eficiencia:</strong> No importa tanto no usar poleas eficientes; la carga a jalar es muy baja (ej. 30 kg vs 100 kg).</li>
                    </ul>
                </div>

                <div className="border-2 border-indigo-200 rounded-xl p-5 shadow-sm bg-indigo-50">
                    <h3 className="font-bold text-indigo-900 mb-3 border-b border-indigo-200 pb-2">Seguridad y Tenders</h3>
                    <ul className="text-sm text-indigo-900 space-y-3 list-disc list-inside">
                        <li><strong>Ice-Axe Arrest (Frenado con hacha):</strong> En pendientes suaves de nieve, los Tenders actúan como el sistema de belay. Frenan clavando sus piolets.</li>
                        <li><strong>Belay de Cuerda:</strong> Solo es obligatorio cuando hay <em>hielo duro</em>, la pendiente es muy fuerte, o los Tenders no tienen control.</li>
                        <li><strong>Direccionalidad:</strong> En terrenos angostos (ridge lines), se usan 4 Tenders (2 tirando frente, 2 estabilizando cola).</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
