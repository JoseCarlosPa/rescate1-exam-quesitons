import { MdOutlineWork } from "react-icons/md";
import { FaScaleUnbalanced } from "react-icons/fa6";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-gray-50 to-slate-100 border-l-4 border-gray-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdOutlineWork className="w-8 h-8 text-gray-700 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-800">Rope Access vs Rope Rescue</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Rope Access (Acceso por Cuerdas) es el uso de técnicas de cuerdas para realizar un trabajo industrial en altura. Aunque usa equipo similar al rescate, su naturaleza y protocolos son fundamentalmente diferentes.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-3">Rope Access (Trabajo)</h3>
                    <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
                        <li>Trabajo planificado y aprobado previamente.</li>
                        <li>Sitio de trabajo inspeccionado con antelación.</li>
                        <li>Sistema diseñado para soportar <strong>1 persona</strong>.</li>
                        <li>Técnicos certificados (SPRAT / IRATA).</li>
                        <li>Bajo regulaciones de seguridad ocupacional (OSHA).</li>
                        <li>Sin interacción con público, no es crítico en tiempo.</li>
                    </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-red-800 border-b border-red-200 pb-2 mb-3">Rope Rescue (Rescate)</h3>
                    <ul className="text-sm text-red-900 space-y-2 list-disc list-inside">
                        <li>Emergencia no planificada, ubicaciones difíciles.</li>
                        <li>No hay inspección previa del sitio.</li>
                        <li>Sistema soporta a <strong>múltiples personas</strong> (víctima + rescatista).</li>
                        <li>Primeros respondedores, interacción pública.</li>
                        <li>Tratamiento y transporte de pacientes.</li>
                        <li>Crítico en tiempo debido a la condición médica.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
                <FaScaleUnbalanced className="w-5 h-5 text-amber-700 flex-shrink-0 mt-1" />
                <p className="text-sm text-amber-900">
                    <strong>Partner Rescue:</strong> Un técnico de Rope Access debe saber realizar un rescate de compañero (bajar a su colega incapacitado) usando únicamente el equipo que ambos llevan puesto, sin depender de un equipo de rescate externo.
                </p>
            </div>
        </div>
    );
}
