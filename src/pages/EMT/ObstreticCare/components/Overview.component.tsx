import {FaExclamationTriangle, FaHeartbeat} from "react-icons/fa";
import {PiBabyBold} from "react-icons/pi";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {HiOutlineClipboardList} from "react-icons/hi";
import {FiAlertTriangle, FiEye} from "react-icons/fi";
import {MdCheckCircle} from "react-icons/md";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-pink-50 to-orange-50 border-l-4 border-pink-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-pink-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-pink-700">¡Emergencia
                        Obstétrica!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las emergencias obstétricas requieren <strong>acción rápida y
                    coordinada</strong>.
                    El tiempo es crítico tanto para la madre como para el bebé.
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <FaHeartbeat className="w-8 h-8 text-pink-500 mb-2"/>
                        <p className="font-bold text-pink-600">Bienestar Materno</p>
                        <p className="text-sm">Prevenir shock hemorrágico</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <PiBabyBold className="w-8 h-8 text-blue-500 mb-2"/>
                        <p className="font-bold text-blue-600">Bienestar Fetal</p>
                        <p className="text-sm">Oxigenación adecuada</p>
                    </div>
                </div>
            </div>

            {/* Evaluación obstétrica rápida */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Evaluación Obstétrica Rápida - OPQRST Modificado
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-blue-700 mb-2">O - Onset</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• ¿Cuándo comenzaron las contracciones?</li>
                            <li>• ¿Cuándo fue su última menstruación?</li>
                            <li>• ¿Cuántas semanas de embarazo?</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-green-700 mb-2">P -
                            Provocación</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• ¿Qué mejora/empeora el dolor?</li>
                            <li>• ¿Ruptura de membranas?</li>
                            <li>• ¿Sangrado vaginal?</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-purple-700 mb-2">Q - Calidad</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• ¿Cómo son las contracciones?</li>
                            <li>• ¿Dolor constante o intermitente?</li>
                            <li>• ¿Siente ganas de pujar?</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-red-700 mb-2">R - Región</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• ¿Dónde siente el dolor?</li>
                            <li>• ¿Se irradia a la espalda?</li>
                            <li>• ¿Dolor abdominal?</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-yellow-700 mb-2">S -
                            Severidad</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Escala del dolor 1-10</li>
                            <li>• ¿Puede caminar/hablar?</li>
                            <li>• ¿Intensidad creciente?</li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-orange-50 to-orange-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-orange-700 mb-2">T - Tiempo</h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Frecuencia de contracciones</li>
                            <li>• Duración de cada contracción</li>
                            <li>• ¿Patrón regular?</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Historia obstétrica GPAC */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <HiOutlineClipboardList className="w-6 h-6 mr-2"/>
                    Historia Obstétrica - GPAC
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-blue-700">G - Gestaciones</h4>
                        <p className="text-sm text-gray-600">Número total de embarazos</p>
                        <p className="text-xs text-gray-500">Incluye actual</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-green-700">P - Partos</h4>
                        <p className="text-sm text-gray-600">Embarazos ≥20 semanas</p>
                        <p className="text-xs text-gray-500">Vivos o muertos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-yellow-700">A - Abortos</h4>
                        <p className="text-sm text-gray-600">Pérdidas &lt;20 semanas</p>
                        <p className="text-xs text-gray-500">Espontáneos o inducidos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-bold text-red-700">C - Cesáreas</h4>
                        <p className="text-sm text-gray-600">Partos quirúrgicos</p>
                        <p className="text-xs text-gray-500">Indica factores de riesgo</p>
                    </div>
                </div>
            </div>

            {/* Signos de parto inminente */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">🚨 Signos de Parto
                        Inminente</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Signos
                            Objetivos:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span className="text-gray-700"><strong>Coronamiento:</strong> Cabeza visible en introito</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span className="text-gray-700"><strong>Contracciones:</strong> Cada 2-3 min, 45-60 seg</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span
                                    className="text-gray-700"><strong>Ruptura de membranas:</strong> Líquido amniótico</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Signos
                            Subjetivos:</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span
                                    className="text-gray-700"><strong>Urgencia de pujar:</strong> Sensación irresistible</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span
                                    className="text-gray-700"><strong>Sensación rectal:</strong> "Ganas de evacuar"</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-yellow-600"/>
                                <span className="text-gray-700"><strong>Multípara:</strong> Partos rápidos previos</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Puntos Clave para
                        Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Evaluar signos vitales maternos</li>
                            <li>Obtener historia obstétrica (GPAC)</li>
                            <li>Evaluar inminencia del parto</li>
                            <li>Preparar equipo obstétrico</li>
                            <li>Establecer acceso IV</li>
                            <li>Administrar oxígeno si necesario</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Examinar vagina si hay sangrado</li>
                            <li>Forzar o acelerar el parto</li>
                            <li>Tirar del bebé o cordón</li>
                            <li>Retrasar transporte si necesario</li>
                            <li>Separar al bebé innecesariamente</li>
                            <li>Dar medicamentos sin indicación</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}