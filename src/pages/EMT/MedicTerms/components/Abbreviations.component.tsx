import {FaBrain, FaHeart, FaLungs} from "react-icons/fa";
import {MdLightbulb, MdSchool} from "react-icons/md";
import {BsLightning} from "react-icons/bs";

export default function Abbreviations() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Abreviaturas
                    críticas para paramédicos</h2>
                <p className="text-gray-700 mb-4">
                    Las abreviaturas son esenciales en la documentación rápida y comunicación en
                    emergencias.
                    Aquí están organizadas por categorías para facilitar su memorización.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Signos vitales */}
                <div className="bg-red-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-red-700 mb-3 flex items-center">
                        <FaHeart className="w-5 h-5 mr-2"/>
                        Signos Vitales
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-red-600 font-bold">TA/PA</span>
                            <span
                                className="text-sm text-gray-700">Tensión/Presión Arterial</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-red-600 font-bold">FC</span>
                            <span className="text-sm text-gray-700">Frecuencia Cardíaca</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-red-600 font-bold">FR</span>
                            <span
                                className="text-sm text-gray-700">Frecuencia Respiratoria</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-red-600 font-bold">SpO₂</span>
                            <span className="text-sm text-gray-700">Saturación de Oxígeno</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-red-600 font-bold">T°</span>
                            <span className="text-sm text-gray-700">Temperatura</span>
                        </div>
                    </div>
                </div>

                {/* Emergencias cardiovasculares */}
                <div className="bg-blue-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-blue-700 mb-3 flex items-center">
                        <FaHeart className="w-5 h-5 mr-2"/>
                        Cardiovascular
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-blue-600 font-bold">IAM</span>
                            <span
                                className="text-sm text-gray-700">Infarto Agudo de Miocardio</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-blue-600 font-bold">PCR</span>
                            <span
                                className="text-sm text-gray-700">Paro Cardiorrespiratorio</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-blue-600 font-bold">EVC</span>
                            <span
                                className="text-sm text-gray-700">Evento Vascular Cerebral</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-blue-600 font-bold">TEP</span>
                            <span
                                className="text-sm text-gray-700">Tromboembolismo Pulmonar</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-blue-600 font-bold">TVP</span>
                            <span
                                className="text-sm text-gray-700">Trombosis Venosa Profunda</span>
                        </div>
                    </div>
                </div>

                {/* Respiratorio */}
                <div className="bg-green-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-green-700 mb-3 flex items-center">
                        <FaLungs className="w-5 h-5 mr-2"/>
                        Respiratorio
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-green-600 font-bold">EPOC</span>
                            <span className="text-sm text-gray-700">Enfermedad Pulmonar Obstructiva Crónica</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-green-600 font-bold">SDRA</span>
                            <span className="text-sm text-gray-700">Síndrome de Dificultad Respiratoria Aguda</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-green-600 font-bold">NAC</span>
                            <span className="text-sm text-gray-700">Neumonía Adquirida en Comunidad</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-green-600 font-bold">OVA</span>
                            <span
                                className="text-sm text-gray-700">Obstrucción de Vía Aérea</span>
                        </div>
                    </div>
                </div>

                {/* Neurológico */}
                <div className="bg-purple-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-purple-700 mb-3 flex items-center">
                        <FaBrain className="w-5 h-5 mr-2"/>
                        Neurológico
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-purple-600 font-bold">ECG</span>
                            <span
                                className="text-sm text-gray-700">Escala de Coma de Glasgow</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-purple-600 font-bold">TEC</span>
                            <span className="text-sm text-gray-700">Traumatismo Encéfalo Craneano</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-purple-600 font-bold">HIC</span>
                            <span
                                className="text-sm text-gray-700">Hipertensión Intracraneal</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-purple-600 font-bold">AIT</span>
                            <span
                                className="text-sm text-gray-700">Ataque Isquémico Transitorio</span>
                        </div>
                    </div>
                </div>

                {/* Procedimientos */}
                <div className="bg-orange-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-orange-700 mb-3 flex items-center">
                        <MdSchool className="w-5 h-5 mr-2"/>
                        Procedimientos
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-orange-600 font-bold">RCP</span>
                            <span
                                className="text-sm text-gray-700">Reanimación Cardiopulmonar</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-orange-600 font-bold">SVB</span>
                            <span className="text-sm text-gray-700">Soporte Vital Básico</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-orange-600 font-bold">SVA</span>
                            <span
                                className="text-sm text-gray-700">Soporte Vital Avanzado</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-orange-600 font-bold">IOT</span>
                            <span
                                className="text-sm text-gray-700">Intubación Orotraqueal</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-orange-600 font-bold">DEA</span>
                            <span className="text-sm text-gray-700">Desfibrilador Externo Automático</span>
                        </div>
                    </div>
                </div>

                {/* Medicamentos y vías */}
                <div className="bg-yellow-50 p-5 rounded-lg">
                    <h3 className="font-semibold text-yellow-700 mb-3 flex items-center">
                        <MdLightbulb className="w-5 h-5 mr-2"/>
                        Medicamentos y Vías
                    </h3>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-yellow-600 font-bold">IV</span>
                            <span className="text-sm text-gray-700">Intravenoso</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-yellow-600 font-bold">IM</span>
                            <span className="text-sm text-gray-700">Intramuscular</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-yellow-600 font-bold">SC</span>
                            <span className="text-sm text-gray-700">Subcutáneo</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-yellow-600 font-bold">SL</span>
                            <span className="text-sm text-gray-700">Sublingual</span>
                        </div>
                        <div className="bg-white p-3 rounded flex justify-between items-center">
                            <span className="font-mono text-yellow-600 font-bold">VO</span>
                            <span className="text-sm text-gray-700">Vía Oral</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <BsLightning className="w-6 h-6 mr-2 text-yellow-500"/>
                    Consejos para memorizar abreviaturas
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            Agrupa por sistemas (cardiovascular, respiratorio, etc.)
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            Practica con casos clínicos reales
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            Crea tarjetas de memoria (flashcards)
                        </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">⚠</span>
                            Usa solo abreviaturas estándar y reconocidas
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">⚠</span>
                            En caso de duda, escribe el término completo
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-2">⚠</span>
                            Verifica que el contexto sea claro
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}