import { FaNotesMedical, FaHeartbeat } from "react-icons/fa";
import { BsLungsFill } from "react-icons/bs";
import { BiMicrochip } from "react-icons/bi";

export default function AdvancedMonitoring() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BiMicrochip className="w-8 h-8 text-purple-500 mr-3" />
                    <h2 className="text-2xl font-bold text-purple-700">Monitoreo Avanzado y Documentación</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    El TAMP-A emplea dispositivos tecnológicos avanzados para monitorear el estado del paciente, al tiempo que es responsable de una comunicación estructurada y documentación legal precisa.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Capnografía */}
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-teal-700 mb-3 flex items-center border-b pb-2">
                        <BsLungsFill className="w-5 h-5 mr-2" />
                        Capnografía (ETCO₂)
                    </h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Es el estándar de oro para confirmar la colocación de tubo endotraqueal y monitorear la ventilación/perfusión.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                        <li><strong>Valor Normal:</strong> 35 - 45 mmHg.</li>
                        <li><strong>ETCO₂ {"<"} 10 mmHg:</strong> RCP de mala calidad o muerte clínica.</li>
                        <li><strong>Hiperventilación:</strong> ETCO₂ bajo (ej. TCE severo, intentando mantener en 35-40 mmHg para evitar isquemia).</li>
                        <li><strong>Colorimetría:</strong> Morado ({"<"}0.5% CO₂) es malo/estómago; <strong>Amarillo ({">"}2% CO₂) es bueno/tráquea</strong>.</li>
                    </ul>
                </div>

                {/* ECG y Monitoreo */}
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
                    <h3 className="text-lg font-bold text-red-700 mb-3 flex items-center border-b pb-2">
                        <FaHeartbeat className="w-5 h-5 mr-2" />
                        ECG y Oximetría
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-3">
                        <li>
                            <strong>ECG 12 derivaciones:</strong> Permite identificar IAMCEST (Elevación ST) y otras arritmias mortales precozmente en el campo.
                        </li>
                        <li>
                            <strong>Oximetría (SpO₂):</strong> Mide % hemoglobina saturada. <em>Precaución:</em> da lecturas falsas normales en intoxicación por Monóxido de Carbono (CO) y es poco confiable en hipoperfusión severa o frío intenso.
                        </li>
                        <li>
                            <strong>Glucosa capilar:</strong> Normal 80-120 mg/dL. Clave medir en todo paciente con estado mental alterado (ej. 45 mg/dL indica hipoglucemia, que imita EVC/intoxicación).
                        </li>
                    </ul>
                </div>
            </div>

            {/* Comunicación y Handoff */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                    <FaNotesMedical className="w-5 h-5 mr-2 text-indigo-500" />
                    Comunicación y Documentación
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Transferencia (Handoff / SBAR)</h4>
                        <p className="text-sm text-gray-600 mb-2">
                            Al llegar al hospital, el reporte verbal debe ser conciso para garantizar la continuidad del cuidado. Formato SBAR:
                        </p>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><strong>S (Situación):</strong> Edad, sexo, queja principal.</li>
                            <li><strong>B (Background):</strong> Historial SAMPLE relevante.</li>
                            <li><strong>A (Assessment):</strong> Signos vitales y hallazgos.</li>
                            <li><strong>R (Recomendación/Respuesta):</strong> Tratamiento dado y respuesta.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Documentación Legal</h4>
                        <p className="text-sm text-gray-600">
                            El Formato de Registro de Atención Prehospitalaria (FRAP) es un documento médico-legal oficial. 
                            <strong>"Lo que no está escrito, no se hizo".</strong> Ayuda a investigaciones, continuidad del cuidado y calidad/auditoría médica.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Triaje */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-red-800 mb-2">Triage en Incidentes de Múltiples Víctimas (IMV)</h3>
                <p className="text-sm text-gray-700 mb-3">
                    Métodos como START (adultos) o JumpSTART (pediátricos) clasifican a los pacientes:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-sm font-semibold">
                    <div className="bg-red-500 text-white p-2 rounded">ROJO (Inmediato)</div>
                    <div className="bg-yellow-400 text-yellow-900 p-2 rounded">AMARILLO (Demorado)</div>
                    <div className="bg-green-500 text-white p-2 rounded">VERDE (Menor)</div>
                    <div className="bg-black text-white p-2 rounded">NEGRO (Fallecido)</div>
                </div>
            </div>
        </div>
    );
}
