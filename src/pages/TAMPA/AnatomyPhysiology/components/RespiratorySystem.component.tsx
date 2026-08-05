import { FaLungs, FaWind, FaSyringe, FaLungsVirus, FaChartLine } from "react-icons/fa";
import { TbWindmill } from "react-icons/tb";

export default function RespiratorySystem() {
    return (
        <div className="space-y-6 text-gray-800">
            <h2 className="text-3xl font-bold text-blue-700 border-b-2 border-blue-200 pb-2 flex items-center gap-3">
                <FaLungs className="text-4xl" />
                Sistema Respiratorio Avanzado
            </h2>
            <p className="text-lg">
                El sistema respiratorio no solo oxigena la sangre, sino que es el principal regulador rápido del equilibrio ácido-base. La comprensión de los volúmenes pulmonares y el intercambio gaseoso es crucial en el manejo avanzado de la vía aérea.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg shadow-sm border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <TbWindmill className="text-2xl" /> Anatomía y Vía Aérea
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Vía aérea superior:</strong> Nariz, faringe, laringe. Calienta, filtra y humidifica el aire.</li>
                        <li><strong>Vía aérea inferior:</strong> Tráquea, bronquios, bronquiolos. Conducen el aire.</li>
                        <li><strong>Zona respiratoria:</strong> Bronquiolos respiratorios y <strong>~300 millones de alvéolos</strong> (0.33mm diámetro).</li>
                        <li><strong>Surfactante pulmonar:</strong> Sustancia producida por neumocitos tipo II. Reduce la tensión superficial, evitando el colapso alveolar (atelectasia).</li>
                        <li><strong>Membrana alveolocapilar:</strong> Muy delgada, permite el intercambio gaseoso (O2 y CO2) por simple gradiente de difusión.</li>
                    </ul>
                    <div className="mt-4 p-3 bg-white rounded border border-blue-200">
                        <strong className="text-blue-900 text-sm">Consideraciones Pediátricas:</strong>
                        <ul className="text-xs list-disc pl-5 mt-1 text-gray-700">
                            <li>La lengua ocupa proporcionalmente más espacio y puede obstruir la vía aérea fácilmente.</li>
                            <li>Laringe, cartílago cricoides y tráquea son más pequeños y flexibles.</li>
                            <li>Pared torácica más blanda; dependen del diafragma (respiración abdominal).</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <FaWind className="text-green-600 text-2xl" /> Fisiología e Intercambio
                    </h3>
                    <div className="mb-3">
                        <strong className="block text-gray-900 mb-1">Ventilación vs. Respiración:</strong>
                        <p className="text-sm mb-2"><strong>Ventilación</strong> es el proceso mecánico de mover aire. <strong>Respiración Externa</strong> es el intercambio de gases en los alvéolos (pulmonar). <strong>Respiración Interna</strong> es el intercambio de gases en los tejidos.</p>
                        
                        <strong className="block text-gray-900 mb-1">Intercambio Gaseoso (Ley de Fick y Dalton):</strong>
                        <p className="text-sm">El O2 se difunde desde los alvéolos (alta presión parcial) hacia los capilares (baja presión), mientras que el CO2 hace lo opuesto. La difusión depende del grosor de la membrana y el área de superficie.</p>

                        <strong className="block text-gray-900 mb-1 mt-2">Control Respiratorio:</strong>
                        <p className="text-sm">El centro respiratorio reside en el <strong>tallo cerebral (bulbo raquídeo y puente)</strong>. En personas sanas, el estímulo principal para respirar es un <strong>nivel elevado de CO2 (hipercapnia)</strong> detectado en el LCR por quimiorreceptores centrales.</p>
                        <p className="text-sm text-gray-500 mt-1 italic">En algunos pacientes con EPOC crónico, el estímulo cambia a la hipoxemia (impulso hipóxico) a través de quimiorreceptores periféricos.</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                    <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <FaChartLine className="text-2xl" /> Volúmenes y Capacidades Pulmonares
                    </h3>
                    <ul className="text-sm space-y-3">
                        <li><strong>Volumen Corriente (Tidal Volume, VT):</strong> Volumen de aire que entra y sale en una respiración normal en reposo (~500 mL).</li>
                        <li><strong>Volumen de Reserva Inspiratoria (VRI):</strong> Aire adicional que se puede inhalar forzadamente tras una inspiración normal (~3000 mL).</li>
                        <li><strong>Volumen de Reserva Espiratoria (VRE):</strong> Aire adicional que se puede exhalar forzadamente (~1200 mL).</li>
                        <li><strong>Volumen Residual (VR):</strong> Aire que queda en los pulmones tras una espiración forzada máxima, evitando el colapso pulmonar (~1200 mL).</li>
                        <li><strong>Capacidad Vital (CV):</strong> Suma de VT + VRI + VRE. Máximo volumen de aire exhalado tras una inspiración máxima (~4700 mL).</li>
                        <li><strong>Espacio Muerto:</strong> Volumen de aire en las vías que no participa en el intercambio gaseoso (~150 mL anatómico).</li>
                    </ul>
                </div>

                <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                    <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center gap-2">
                        <FaLungsVirus className="text-2xl" /> Aplicación Clínica: Patologías
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-orange-100 text-orange-900">
                                <tr>
                                    <th className="p-3 border-b border-orange-200">Patología</th>
                                    <th className="p-3 border-b border-orange-200">Fisiopatología</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-orange-100">
                                    <td className="p-3 font-semibold">EPOC (Enfisema)</td>
                                    <td className="p-3">Destrucción alveolar, pérdida de elasticidad. Tórax en tonel.</td>
                                </tr>
                                <tr className="border-b border-orange-100">
                                    <td className="p-3 font-semibold">EPOC (Bronquitis Crónica)</td>
                                    <td className="p-3">Inflamación crónica bronquial, mucho moco. Tos, cianosis (blue bloater).</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-semibold">Asma</td>
                                    <td className="p-3">Reversible. Broncoespasmo, edema, moco. Sibilancias.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 flex items-start gap-4">
                <FaSyringe className="text-3xl text-teal-600 mt-1" />
                <div>
                    <h4 className="font-bold text-teal-900 mb-2">Consideración TAMP-A: Ventilación Mecánica y Hemodinámica</h4>
                    <ul className="text-sm space-y-2 text-teal-900">
                        <li><strong>Presión Negativa Fisiológica:</strong> La respiración normal funciona por presión negativa (el diafragma baja, creando un vacío). Esta presión negativa intratorácica también actúa como "bomba", succionando sangre venosa hacia el corazón y favoreciendo el retorno venoso (precarga).</li>
                        <li><strong>Presión Positiva (VPP/CPAP/BiPAP):</strong> La ventilación mecánica introduce aire a presión en los pulmones. Si bien esto previene el colapso alveolar (aumentando la Capacidad Residual Funcional y mejorando la oxigenación), invierte la fisiología normal.</li>
                        <li><strong>Impacto en el Gasto Cardíaco:</strong> Al aumentar la presión intratorácica de forma positiva, se comprimen las venas cavas, <strong>disminuyendo drásticamente el retorno venoso (precarga)</strong>. Esto reduce el volumen sistólico, el gasto cardíaco y provoca <strong>hipotensión</strong>.</li>
                        <li><strong>Relevancia Clínica:</strong> En un paciente hipovolémico (ej. trauma, sangrado), aplicar presión positiva excesiva (o hiperventilar) puede precipitar un choque severo o un paro cardíaco obstructivo al cancelar por completo el retorno venoso.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
