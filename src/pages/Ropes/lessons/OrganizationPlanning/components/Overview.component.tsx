import { MdOutlineAccountTree } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";

export default function Overview() {
    const roles = [
        { title: "Comandante del Incidente", desc: "Autoridad final del incidente. Delega a jefes de sección.", color: "blue" },
        { title: "Oficial de Seguridad", desc: "Autoridad para PARAR cualquier acción insegura. Independiente del chain of command.", color: "red" },
        { title: "Jefe de Operaciones", desc: "Dirige todas las operaciones tácticas en el campo.", color: "orange" },
        { title: "Supervisor de Grupo de Rescate", desc: "Supervisa directamente a los 3 equipos de campo.", color: "amber" },
        { title: "Equipo de Rigging", desc: "Monta anclajes y sistemas de cuerdas para el acceso y extracción.", color: "green" },
        { title: "Equipo Médico", desc: "Accede al sujeto. Estabiliza y trata su condición.", color: "teal" },
        { title: "Equipo de Camilla", desc: "Empaqueta y acompaña al paciente durante el transporte.", color: "violet" },
    ];
    const cMap: Record<string, string> = {
        blue: "bg-blue-50 border-blue-200 text-blue-900",
        red: "bg-red-50 border-red-200 text-red-900",
        orange: "bg-orange-50 border-orange-200 text-orange-900",
        amber: "bg-amber-50 border-amber-200 text-amber-900",
        green: "bg-green-50 border-green-200 text-green-900",
        teal: "bg-teal-50 border-teal-200 text-teal-900",
        violet: "bg-violet-50 border-violet-200 text-violet-900",
    };

    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdOutlineAccountTree className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-800">Comando de Incidente (ICS) en Rescate</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El ICS (Incident Command System) define quién manda qué en el rescate. La clave: <strong>el rescate no puede hacerse por comité</strong>. Una cadena de mando clara permite decisiones rápidas bajo presión.
                </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <FaUsersGear className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-sm text-amber-900">
                    <strong>Rescue Preplan:</strong> Plan predeterminado donde cada miembro ya conoce su posición antes de llegar a la escena. Elimina la "reunión de discusión" al llegar, crítico para equipos de baja frecuencia.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-3">
                {roles.map((r) => (
                    <div key={r.title} className={`border-2 rounded-xl p-4 shadow-sm ${cMap[r.color]}`}>
                        <h4 className="font-bold text-sm mb-1">{r.title}</h4>
                        <p className="text-xs text-gray-700">{r.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-3">Señales de Cuerda Estándar</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                    {[["1 jalón", "STOP", "red"], ["2 jalones", "BAJAR", "blue"], ["3 jalones", "SUBIR", "green"]].map(([s, a, c]) => (
                        <div key={s} className={`bg-${c}-50 border border-${c}-200 rounded-lg p-3`}>
                            <p className="text-2xl font-bold text-gray-800">{s}</p>
                            <p className={`text-sm font-bold text-${c}-700`}>{a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
