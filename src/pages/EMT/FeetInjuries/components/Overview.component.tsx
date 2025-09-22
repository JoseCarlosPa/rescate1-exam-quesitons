import {FaExclamationTriangle} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {RiEmotionSadLine} from "react-icons/ri";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {AiOutlineCheck} from "react-icons/ai";
import {GiBrokenBone, GiLegArmor} from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Emergencia Ortopédica!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las lesiones ortopédicas pueden ser <strong>potencialmente
                    mortales</strong> cuando comprometen
                    la circulación, causan sangrado masivo o afectan estructuras vitales. El
                    tiempo es crítico
                    para preservar la función y prevenir complicaciones.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Minutos</p>
                        <p className="text-sm">Pérdida de irrigación</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Horas</p>
                        <p className="text-sm">Daño irreversible</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <RiEmotionSadLine className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">Días</p>
                        <p className="text-sm">Discapacidad permanente</p>
                    </div>
                </div>
            </div>

            {/* Evaluación sistemática */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Evaluación Sistemática de Lesiones Ortopédicas
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">INSPECCIÓN</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Deformidad obvia</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Heridas abiertas</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Edema e inflamación</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Coloración anormal</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">PALPACIÓN</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Dolor localizado</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Crepitación ósea</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Temperatura local</span>
                            </li>
                            <li className="flex items-start">
                                <FiUser className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Pulsos distales</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-purple-700 mb-3 text-center">FUNCIÓN</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Movimiento activo</span>
                            </li>
                            <li className="flex items-start">
                                <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Movimiento pasivo</span>
                            </li>
                            <li className="flex items-start">
                                <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Sensibilidad</span>
                            </li>
                            <li className="flex items-start">
                                <AiOutlineCheck className="w-4 h-4 mt-1 mr-2 text-purple-600"/>
                                <span>Fuerza muscular</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma -
                        Traslado URGENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Compromiso
                            Vascular:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Ausencia de pulso distal</li>
                            <li>Extremidad fría y pálida</li>
                            <li>Relleno capilar &gt; 2 segundos</li>
                            <li>Parestesias o entumecimiento</li>
                            <li>Parálisis distal</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Compromiso
                            Sistémico:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Signos de shock (hipotensión, taquicardia)</li>
                            <li>Sangrado activo significativo</li>
                            <li>Fractura expuesta con hueso visible</li>
                            <li>Deformidad grave</li>
                            <li>Síndrome compartimental</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Clasificación de lesiones */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos de
                    Lesiones Ortopédicas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <div className="flex items-center mb-3">
                            <GiBrokenBone className="w-6 h-6 text-red-600 mr-2"/>
                            <h3 className="font-bold text-lg text-red-700">Fracturas</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white p-3 rounded border">
                                <h4 className="font-semibold text-red-600">Cerrada</h4>
                                <p className="text-sm text-gray-600">Piel intacta, menor riesgo
                                    de infección</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <h4 className="font-semibold text-red-600">Expuesta</h4>
                                <p className="text-sm text-gray-600">Comunicación con exterior,
                                    alto riesgo</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <h4 className="font-semibold text-red-600">Conminuta</h4>
                                <p className="text-sm text-gray-600">Múltiples fragmentos
                                    óseos</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <div className="flex items-center mb-3">
                            <GiLegArmor className="w-6 h-6 text-blue-600 mr-2"/>
                            <h3 className="font-bold text-lg text-blue-700">Lesiones
                                Articulares</h3>
                        </div>
                        <div className="space-y-2">
                            <div className="bg-white p-3 rounded border">
                                <h4 className="font-semibold text-blue-600">Luxación</h4>
                                <p className="text-sm text-gray-600">Desplazamiento articular
                                    completo</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <h4 className="font-semibold text-blue-600">Subluxación</h4>
                                <p className="text-sm text-gray-600">Desplazamiento parcial</p>
                            </div>
                            <div className="bg-white p-3 rounded border">
                                <h4 className="font-semibold text-blue-600">Esguince</h4>
                                <p className="text-sm text-gray-600">Lesión ligamentaria</p>
                            </div>
                        </div>
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
                            <li>Evaluar circulación, sensibilidad y movimiento</li>
                            <li>Inmovilizar articulación proximal y distal</li>
                            <li>Controlar hemorragias activas</li>
                            <li>Documentar evaluación neurovascular</li>
                            <li>Reevaluar tras inmovilización</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Intentar reducir luxaciones</li>
                            <li>Realinear fracturas expuestas</li>
                            <li>Aplicar presión sobre hueso expuesto</li>
                            <li>Remover objetos empalados</li>
                            <li>Dar analgésicos sin evaluación</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mnemotécnicos útiles */}
            <div
                className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-purple-600 mr-2"/>
                    <h3 className="text-xl font-bold text-purple-800">Mnemotécnicos para
                        Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-purple-700 mb-2">Las 6 P&apos;s del
                            Síndrome Compartimental</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><strong>P</strong>ain (Dolor desproporcionado)</li>
                            <li><strong>P</strong>aresthesias (Hormigueo/entumecimiento)</li>
                            <li><strong>P</strong>allor (Palidez)</li>
                            <li><strong>P</strong>aralysis (Parálisis/debilidad)</li>
                            <li><strong>P</strong>ulselessness (Ausencia de pulso)</li>
                            <li><strong>P</strong>ressure (Presión en compartimentos)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                        <h4 className="font-bold text-purple-700 mb-2">RICE para Esguinces</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li><strong>R</strong>est (Reposo)</li>
                            <li><strong>I</strong>ce (Hielo 15-20 min)</li>
                            <li><strong>C</strong>ompression (Compresión)</li>
                            <li><strong>E</strong>levation (Elevación)</li>
                        </ul>
                        <p className="text-xs text-purple-600 mt-2">Protocolo estándar para
                            lesiones de tejidos blandos</p>
                    </div>
                </div>
            </div>
        </div>
    );
}