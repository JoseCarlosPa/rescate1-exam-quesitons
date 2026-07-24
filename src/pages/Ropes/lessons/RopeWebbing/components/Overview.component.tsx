import { MdCheckCircle } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-l-4 border-violet-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <GiRolledCloth className="w-8 h-8 text-violet-500 mr-3" />
                    <h2 className="text-2xl font-bold text-violet-700">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante será capaz de <strong>describir la construcción, materiales y usos</strong> del
                    equipo de software para rescate con cuerdas — es decir, la cuerda y el webbing de
                    seguridad de vida — incluyendo cómo limpiarlos, almacenarlos y retirarlos del servicio.
                </p>
            </div>

            {/* NFPA JOB PERFORMANCE */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-violet-300 mb-2">NFPA® Requisitos de Desempeño Laboral</p>
                <p className="text-slate-200 leading-relaxed mb-3">
                    Este capítulo aborda los requisitos <strong className="text-white">5.2.3 y 5.2.7</strong> de NFPA® 1006 (2021).
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        "Describir las características de la cuerda y el webbing de seguridad de vida",
                        "Describir el uso y cuidado de la cuerda de seguridad de vida",
                        "Describir cómo limpiar, almacenar y retirar la cuerda y el webbing de seguridad de vida",
                    ].map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 bg-slate-700 rounded-lg p-3 text-sm">
                            <MdCheckCircle className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-200">{obj}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Historia */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-3 text-lg">📜 Breve Historia de la Cuerda de Rescate</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                    El ser humano ha usado cuerdas para moverse en entornos verticales desde la prehistoria.
                    Las primeras cuerdas eran de algodón, cuero crudo, cáñamo o cualquier material fibroso disponible.
                    La Segunda Guerra Mundial trajo como subproducto el desarrollo de las fibras sintéticas — una mejora
                    significativa, ya que la cuerda de fibra natural comienza a degradarse desde que la planta es cosechada.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    {[
                        {
                            era: "Antes de WWII",
                            desc: "Cuerdas de manila, cáñamo, algodón. Resistencia limitada, alta degradación con el tiempo.",
                            icon: "🌿",
                            bg: "bg-amber-50 border-amber-200",
                        },
                        {
                            era: "Post WWII",
                            desc: "Aparecen las fibras sintéticas (nylon). Desarrollo del mercado de escalada deportiva y espeleología.",
                            icon: "⚗️",
                            bg: "bg-blue-50 border-blue-200",
                        },
                        {
                            era: "Últimas 3 décadas",
                            desc: "Múltiples fibras y construcciones refinadas. Cuerdas especializadas por aplicación (rescate, escalada, trabajo en altura).",
                            icon: "🔬",
                            bg: "bg-violet-50 border-violet-200",
                        },
                    ].map((item, i) => (
                        <div key={i} className={`rounded-lg p-4 border ${item.bg}`}>
                            <div className="text-2xl mb-2">{item.icon}</div>
                            <p className="font-semibold text-gray-800 text-sm mb-1">{item.era}</p>
                            <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Estructura del capítulo */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg flex items-center gap-2">
                    🗺️ Contenido de este Capítulo
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        { tab: "Fibras y Construcción", desc: "Tipos de fibras (nylon, poliéster, aramidas, HMPE, LCAP) y sus propiedades. Tipos de construcción (laid, kernmantle, braid on braid, block-creel).", icon: "🧵" },
                        { tab: "Especificaciones", desc: "Resistencia tensil, elongación, resistencia a la abrasión, sheath slippage, diámetros, knotability y manejo.", icon: "📐" },
                        { tab: "Webbing", desc: "Webbing tubular vs plano, estándares aplicables, longitudes y código de colores estándar.", icon: "🎗️" },
                        { tab: "Uso y Cuidado", desc: "Registro de uso, inspección visual y táctil, almacenamiento, despliegue, limpieza y reglas de seguridad.", icon: "🔍" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{item.tab}</p>
                                <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
