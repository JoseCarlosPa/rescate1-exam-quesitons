import { GiGloves, GiFlashlight } from "react-icons/gi";
import { FaScissors } from "react-icons/fa6";
import { MdDirectionsWalk } from "react-icons/md";

export default function OtherEquipment() {
    return (
        <div className="space-y-8">
            <p className="text-gray-600 text-sm">
                Además de cascos y arneses, hay equipo personal esencial que cada rescatista debe llevar para mantener la operatividad y seguridad.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                
                {/* Guantes */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <GiGloves className="w-6 h-6 text-teal-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Guantes de Rescate</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Siempre que la cuerda pase por sus manos, se deben usar guantes. Existe un compromiso entre protección y destreza (tacto).
                    </p>
                    <ul className="text-sm space-y-2 text-gray-600">
                        <li><strong className="text-gray-800">Doble palma:</strong> Tienen una capa extra de cuero en la palma y zonas de alta fricción (como la pinza entre pulgar e índice).</li>
                        <li><strong className="text-gray-800">Hilo de Kevlar:</strong> El agua y el torque del rapel destruyen las costuras estándar. El Kevlar permite que las costuras duren más que el propio cuero.</li>
                        <li><strong className="text-gray-800">Cuero suave:</strong> El ciervo o la cabra permiten un ajuste más apretado, logrando mejor destreza sin perder la protección.</li>
                    </ul>
                </div>

                {/* Calzado */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <MdDirectionsWalk className="w-6 h-6 text-teal-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Calzado / Botas</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Protegen y soportan los pies y tobillos, brindando tracción.
                    </p>
                    <ul className="text-sm space-y-2 text-gray-600">
                        <li><strong className="text-gray-800">Terreno Agreste:</strong> Botas de montañismo moderadamente pesadas. La suela rígida ayuda a proteger el pie al cargar equipo pesado o una camilla, y permite hacer pasos en nieve o grava suelta.</li>
                        <li><strong className="text-gray-800">Rescate Industrial:</strong> Botas más ligeras pueden ser suficientes. Algunas regulaciones pueden requerir bota con punta de acero.</li>
                    </ul>
                </div>

                {/* Iluminación */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <GiFlashlight className="w-6 h-6 text-teal-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Iluminación</h3>
                    </div>
                    <ul className="text-sm space-y-2 text-gray-600">
                        <li><strong className="text-gray-800">Frontal (Headlamp):</strong> Luz primaria que mantiene las manos libres. Fundamental que tenga niveles ajustables para maximizar batería y no deslumbrar en espacios cerrados por rebote de luz.</li>
                        <li><strong className="text-gray-800">Luz de respaldo:</strong> Crítica. Si su única luz falla, usted se convierte en paciente.</li>
                        <li><strong className="text-gray-800">Luces estroboscópicas:</strong> Altamente visibles, vitales para localizar equipos en humo denso, lluvia pesada o vegetación tupida.</li>
                        <li><strong className="text-gray-800">Luces químicas (Light sticks):</strong> Seguras en ambientes inflamables, no son fuentes primarias pero son excelentes para marcar equipo o rutas de salida.</li>
                    </ul>
                </div>

                {/* Herramientas de Corte */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                        <FaScissors className="w-6 h-6 text-teal-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Herramientas de Corte</h3>
                    </div>
                    <div className="bg-red-50 text-red-800 p-3 rounded text-sm mb-3 font-medium">
                        Cualquiera cerca de cuerdas debe tener una herramienta de corte. ¡Y una cuerda bajo carga se corta extremadamente fácil!
                    </div>
                    <p className="text-sm text-gray-700">
                        <strong className="text-gray-800">Tijeras utilitarias (Trauma shears):</strong> Son mucho más seguras alrededor de cuerdas tensionadas que un cuchillo con punta/filo expuesto. Pueden cortar una cuerda cargada de 7/16" en un solo corte sin riesgo de pinchar a un paciente o cortar la línea equivocada accidentalmente.
                    </p>
                </div>

            </div>

            {/* Extras */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <h3 className="font-bold text-teal-300 text-lg mb-3">Hidratación y Extras Recomendados</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                        <p className="font-semibold text-white mb-1">Agua y Comida</p>
                        <p className="text-sm text-slate-300">
                            Los rescates técnicos pueden tomar horas. La fatiga por baja azúcar o deshidratación reduce la seguridad dramáticamente. Las mochilas de hidratación (Camelbak) facilitan tomar agua sin usar manos.
                        </p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                        <p className="font-semibold text-white mb-1">El "Kit de Bolsillo"</p>
                        <p className="text-sm text-slate-300">
                            Siempre lleve: <strong>tijeras utilitarias, un mosquetón extra y al menos 2 cordines Prusik</strong> (uno normal y uno largo de ~10 pies). Los Prusik son multiusos vitales (pedal, auto-seguro, nudo de liberación).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
