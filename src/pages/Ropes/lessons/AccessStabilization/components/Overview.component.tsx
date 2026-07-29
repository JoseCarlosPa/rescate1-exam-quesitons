import { MdMedicalServices, MdOutlinePsychology } from "react-icons/md";
import { FaUserShield, FaHandsHelping } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaHandsHelping className="w-8 h-8 text-blue-600 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-800">Acceso y Estabilización Inicial</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    El primer paso crítico de todo rescate vertical. Antes de sacar poleas o camillas, debes llegar a la víctima y estabilizar su condición para evitar que empeore.
                </p>
                <div className="bg-blue-100 p-4 rounded flex items-start gap-3 border border-blue-200">
                    <FaUserShield className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-blue-900 mb-1">
                            Regla #1: Protege al rescatista, luego protege al sujeto.
                        </p>
                        <p className="text-sm text-blue-800">
                            Nunca te acerques a un sujeto en pánico con cuerdas sueltas que puedan jalar, y elige siempre rutas de acceso que no desprendan rocas sobre ellos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Los 3 Pilares de la Estabilización</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex flex-col items-center text-center">
                        <MdMedicalServices className="w-8 h-8 text-red-500 mb-2" />
                        <h4 className="font-bold text-red-900 mb-1">Médica</h4>
                        <p className="text-xs text-gray-700">Tratamiento inmediato de hemorragias, shock o protección contra la hipotermia.</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-300 p-4 rounded-lg flex flex-col items-center text-center">
                        <FaUserShield className="w-8 h-8 text-slate-600 mb-2" />
                        <h4 className="font-bold text-slate-900 mb-1">Física</h4>
                        <p className="text-xs text-gray-700">Evitar caídas inminentes y protegerlos de peligros ambientales (rocas).</p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg flex flex-col items-center text-center">
                        <MdOutlinePsychology className="w-8 h-8 text-purple-600 mb-2" />
                        <h4 className="font-bold text-purple-900 mb-1">Emocional</h4>
                        <p className="text-xs text-gray-700">Contacto de voz temprano. Calmar el pánico evita movimientos bruscos o instintos suicidas.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
