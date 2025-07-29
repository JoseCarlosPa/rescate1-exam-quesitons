import {FaExclamationTriangle, FaEye, FaHeartbeat} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {FiActivity, FiAlertTriangle, FiTarget} from "react-icons/fi";
import {BsLightbulb} from "react-icons/bs";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Trauma de Alto Riesgo!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las lesiones abdominales y genitourinarias pueden <strong>comprometer la vida</strong> rápidamente.
                    La hemorragia interna puede causar shock hipovolémico en <span
                    className="text-red-600 font-bold">minutos</span>.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Clase I</p>
                        <p className="text-sm">&lt;15% pérdida sangre</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Clase II</p>
                        <p className="text-sm">15-30% pérdida sangre</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">Clase III-IV</p>
                        <p className="text-sm">&gt;30% pérdida sangre</p>
                    </div>
                </div>
            </div>

            {/* Mecanismo de lesión */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiTarget className="w-6 h-6 mr-2 text-orange-500"/>
                    Mecanismos de Lesión Comunes
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">Trauma Cerrado</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Accidentes automovilísticos (impacto con volante)</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Caídas desde altura</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Golpes directos (deportes, peleas)</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Compresión por objetos pesados</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center">Trauma Penetrante</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Heridas por arma blanca</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Heridas por arma de fuego</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Empalamiento</span>
                            </li>
                            <li className="flex items-start">
                                <FiAlertTriangle className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Fragmentos de explosión</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Evaluación Inmediata</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FaEye className="w-4 h-4 mr-2"/>
                            Signos Visuales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Distensión abdominal (barriga hinchada)</li>
                            <li>Hematomas en flancos (signo de Grey-Turner)</li>
                            <li>Hematoma periumbilical (signo de Cullen)</li>
                            <li>Palidez, diaforesis (sudoración)</li>
                            <li>Evisceración (órganos expuestos)</li>
                            <li>Hematuria visible (orina con sangre)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FaHeartbeat className="w-4 h-4 mr-2"/>
                            Signos Vitales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Taquicardia (FC &gt; 100 lpm)</li>
                            <li>Hipotensión (TA &lt; 90/60 mmHg)</li>
                            <li>Taquipnea (FR &gt; 20 rpm)</li>
                            <li>Piel fría y húmeda</li>
                            <li>Llenado capilar &gt; 2 segundos</li>
                            <li>Alteración del estado mental</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evaluar ABC (Airway, Breathing, Circulation)</li>
                            <li>Controlar hemorragias externas</li>
                            <li>Monitorizar signos vitales frecuentemente</li>
                            <li>Mantener al paciente NPO (nada por boca)</li>
                            <li>Preparar para traslado rápido</li>
                            <li>Proteger de hipotermia</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Reintroducir órganos eviscerados</li>
                            <li>Retirar objetos incrustados</li>
                            <li>Administrar líquidos por vía oral</li>
                            <li>Aplicar presión directa sobre evisceración</li>
                            <li>Ignorar signos de shock temprano</li>
                            <li>Demorar el traslado</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}