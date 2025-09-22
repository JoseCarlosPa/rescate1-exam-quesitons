import {FaExclamationTriangle, FaHeartbeat} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiActivity, FiAlertTriangle} from "react-icons/fi";
import {FaBrain, FaThermometer} from "react-icons/fa6";

export default function Fundamentals(){
    return(<div className="space-y-8">
        {/* Importancia crítica del tema */}
        <div
            className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-center mb-4">
                <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                <h2 className="text-2xl font-bold text-red-700">¡Realidad Demográfica!</h2>
            </div>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
                Para 2030, el <strong>20% de la población</strong> será mayor de 65 años.
                Los adultos mayores representan el <span
                className="text-red-600 font-bold">40-50%</span>
                de las emergencias médicas.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow-sm text-center">
                    <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                    <p className="font-bold text-red-600">3x más</p>
                    <p className="text-sm">Probabilidad de hospitalización</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                    <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                    <p className="font-bold text-orange-600">5x más</p>
                    <p className="text-sm">Tiempo de recuperación</p>
                </div>
                <div className="bg-white p-4 rounded shadow-sm text-center">
                    <FaExclamationTriangle className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                    <p className="font-bold text-red-700">2x más</p>
                    <p className="text-sm">Mortalidad por emergencias</p>
                </div>
            </div>
        </div>

        {/* Envejecimiento vs Enfermedad */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                Envejecimiento Normal vs Patológico
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div
                    className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-green-700 mb-3 text-center">
                        ✓ ENVEJECIMIENTO NORMAL
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                            <span>Disminución gradual de funciones</span>
                        </li>
                        <li className="flex items-start">
                            <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                            <span>Mantiene independencia funcional</span>
                        </li>
                        <li className="flex items-start">
                            <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                            <span>Adaptación a cambios</span>
                        </li>
                        <li className="flex items-start">
                            <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                            <span>Funciones cognitivas preservadas</span>
                        </li>
                    </ul>
                </div>
                <div
                    className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-red-700 mb-3 text-center">
                        ⚠️ ENVEJECIMIENTO PATOLÓGICO
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                            <FaExclamationTriangle
                                className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                            <span>Deterioro funcional significativo</span>
                        </li>
                        <li className="flex items-start">
                            <FaExclamationTriangle
                                className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                            <span>Pérdida de independencia</span>
                        </li>
                        <li className="flex items-start">
                            <FaExclamationTriangle
                                className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                            <span>Enfermedades múltiples</span>
                        </li>
                        <li className="flex items-start">
                            <FaExclamationTriangle
                                className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                            <span>Deterioro cognitivo</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Principales cambios fisiológicos */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Cambios Fisiológicos del Envejecimiento
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-blue-700 flex items-center">
                        <FaHeartbeat className="w-5 h-5 mr-2"/>
                        Sistema Cardiovascular
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Disminución del gasto cardíaco (25-30%)</li>
                        <li>Rigidez arterial aumentada</li>
                        <li>Hipertensión sistólica aislada</li>
                        <li>Menor respuesta a catecolaminas</li>
                        <li>Arritmias más frecuentes</li>
                    </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-green-700 flex items-center">
                        <FiActivity className="w-5 h-5 mr-2"/>
                        Sistema Respiratorio
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Pérdida de elasticidad pulmonar</li>
                        <li>Disminución de la capacidad vital (40%)</li>
                        <li>Debilitamiento muscular respiratorio</li>
                        <li>Menor eficiencia del intercambio gaseoso</li>
                        <li>Reducción del reflejo de tos</li>
                    </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-purple-700 flex items-center">
                        <FaBrain className="w-5 h-5 mr-2"/>
                        Sistema Nervioso
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Pérdida de masa cerebral (10%)</li>
                        <li>Disminución de neurotransmisores</li>
                        <li>Alteración de reflejos</li>
                        <li>Cambios en memoria a corto plazo</li>
                        <li>Alteración del equilibrio</li>
                    </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-orange-700 flex items-center">
                        <FaThermometer className="w-5 h-5 mr-2"/>
                        Sistema Renal/Endocrino
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Reducción de la filtración glomerular</li>
                        <li>Pérdida de la capacidad de concentración</li>
                        <li>Termorregulación alterada</li>
                        <li>Metabolismo de medicamentos más lento</li>
                        <li>Deshidratación más frecuente</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Conceptos clave para paramédicos */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
                <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                <h3 className="text-xl font-bold text-yellow-800">Conceptos Clave para
                    Paramédicos</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Reserva
                        Funcional:</h4>
                    <p className="text-gray-700 mb-2">
                        Los adultos mayores tienen menor capacidad de respuesta al estrés.
                        Una enfermedad menor puede descompensar múltiples sistemas.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-yellow-800 mb-2">Presentación
                        Atípica:</h4>
                    <p className="text-gray-700 mb-2">
                        Los síntomas clásicos pueden estar ausentes. La confusión puede ser
                        el único signo de infección, infarto o crisis metabólica.
                    </p>
                </div>
            </div>
        </div>

        {/* Principios de atención */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
                <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                <h3 className="text-xl font-bold text-green-800">Principios de Atención
                    Geriátrica</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                        <MdCheckCircle className="w-4 h-4 mr-2"/>
                        Enfoque Integral:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Evaluación completa de sistemas</li>
                        <li>Considerar múltiples diagnósticos</li>
                        <li>Valorar estado funcional previo</li>
                        <li>Incluir al cuidador en la evaluación</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                        <MdCheckCircle className="w-4 h-4 mr-2"/>
                        Prevención de Complicaciones:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Prevenir caídas durante el transporte</li>
                        <li>Mantener temperatura corporal</li>
                        <li>Proteger la integridad de la piel</li>
                        <li>Preservar la dignidad del paciente</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}