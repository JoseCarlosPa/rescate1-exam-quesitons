import { MdCheckCircle } from "react-icons/md";
import { GiSafetyPin } from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-l-4 border-teal-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <GiSafetyPin className="w-8 h-8 text-teal-600 mr-3" />
                    <h2 className="text-2xl font-bold text-teal-800">Objetivo del Capítulo</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El estudiante identificará y seleccionará el <strong>equipo de seguridad personal adecuado</strong>{" "}
                    para las operaciones de rescate con cuerdas, considerando los estándares NFPA y la seguridad individual.
                </p>
            </div>

            {/* NFPA JOB PERFORMANCE */}
            <div className="bg-slate-800 text-white rounded-xl p-6">
                <p className="text-sm font-semibold text-teal-300 mb-2">NFPA® Objetivos de Aprendizaje</p>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        "Describir las características importantes de los cascos para rescate.",
                        "Describir la diferencia entre arneses Clase II y Clase III, su cuidado e inspección.",
                        "Describir el cuidado y mantenimiento adecuado de un arnés de rescate.",
                        "Describir los tipos de guantes utilizados en el rescate con cuerdas."
                    ].map((obj, i) => (
                        <div key={i} className="flex items-start gap-2 bg-slate-700 rounded-lg p-3 text-sm">
                            <MdCheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-200">{obj}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categorías del capítulo */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">🗺️ Equipo que cubre este capítulo</h3>
                <div className="grid md:grid-cols-2 gap-3">
                    {[
                        { icon: "⛑️", name: "Cascos", desc: "Tipos (rescate, escalada, bomberos, industria) y certificaciones." },
                        { icon: "🦺", name: "Arneses", desc: "Arneses improvisados, de asiento (Clase II), de pecho y cuerpo completo (Clase III)." },
                        { icon: "🧤", name: "Guantes", desc: "Guantes de rescate vs. industriales, protección vs. destreza." },
                        { icon: "🥾", name: "Calzado", desc: "Botas para terreno agreste y rescate industrial." },
                        { icon: "🔦", name: "Iluminación", desc: "Lámparas frontales, luces de respaldo (strobes, químicas)." },
                        { icon: "✂️", name: "Corte y Extras", desc: "Tijeras de trauma, hidratación y equipo personal extra." },
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100">
                            <span className="text-2xl">{item.icon}</span>
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                                <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dato clave */}
            <div className="bg-teal-50 border-l-4 border-teal-400 p-5 rounded-lg">
                <p className="font-semibold text-teal-800 mb-2">⚡ Principio fundamental del Equipo Personal (PPE)</p>
                <p className="text-sm text-teal-700 leading-relaxed">
                    A medida que aumenta el nivel de exposición al daño, <strong>el nivel de protección que proporciona el EPP debe aumentar</strong>. 
                    El terreno, clima, tipo de llamada y duración influyen en la selección. Un rescatista que no puede valerse por sí mismo debido a equipo inadecuado se convierte en otra víctima más.
                </p>
            </div>
        </div>
    );
}
