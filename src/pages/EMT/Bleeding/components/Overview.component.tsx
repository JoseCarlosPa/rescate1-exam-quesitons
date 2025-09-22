import {BsDroplet, BsLightbulb, BsShield} from "react-icons/bs";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {RiDropLine, RiHeart2Line} from "react-icons/ri";
import {FiActivity, FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {FaExclamationTriangle} from "react-icons/fa";
import {GiTornado} from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Definición y tipos críticos */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsDroplet className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">¿Qué es una Hemorragia?</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Pérdida <strong>aguda</strong> de sangre del sistema circulatorio. Su gravedad depende del
                    <strong> volumen perdido</strong>, <strong>velocidad de
                    pérdida</strong> y <strong>localización</strong>.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Clase IV</p>
                        <p className="text-sm">&gt;40% pérdida = CRÍTICO</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Clase III</p>
                        <p className="text-sm">30-40% = SEVERO</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdCheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">Clase I-II</p>
                        <p className="text-sm">&lt;30% = MODERADO</p>
                    </div>
                </div>
            </div>

            {/* Tipos de hemorragia con características visuales */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-red-500"/>
                    Tipos de Hemorragia - Reconocimiento Visual
                </h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center flex items-center justify-center">
                            <GiTornado className="w-6 h-6 mr-2"/>
                            ARTERIAL
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-red-600 mb-2">Características:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Color rojo <strong>brillante</strong></li>
                                    <li>• Sale a <strong>presión pulsátil</strong></li>
                                    <li>• Sincronizado con pulso</li>
                                    <li>• <strong>MÁS PELIGROSA</strong></li>
                                </ul>
                            </div>
                            <div className="bg-red-100 p-3 rounded">
                                <p className="text-sm font-semibold text-red-800">⚠️ PRIORIDAD ABSOLUTA</p>
                                <p className="text-xs">Control inmediato o muerte</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200">
                        <h3 className="text-xl font-bold text-purple-700 mb-3 text-center flex items-center justify-center">
                            <RiDropLine className="w-6 h-6 mr-2"/>
                            VENOSA
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-purple-600 mb-2">Características:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Color rojo <strong>oscuro</strong></li>
                                    <li>• Flujo <strong>continuo</strong></li>
                                    <li>• Sin pulsaciones</li>
                                    <li>• Puede ser abundante</li>
                                </ul>
                            </div>
                            <div className="bg-purple-100 p-3 rounded">
                                <p className="text-sm font-semibold text-purple-800">Controlable con presión</p>
                                <p className="text-xs">Responde bien a compresión</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center flex items-center justify-center">
                            <RiHeart2Line className="w-6 h-6 mr-2"/>
                            CAPILAR
                        </h3>
                        <div className="space-y-3">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-blue-600 mb-2">Características:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Color rojo medio</li>
                                    <li>• Rezuma en <strong>"sábana"</strong></li>
                                    <li>• Superficial</li>
                                    <li>• Menos peligrosa</li>
                                </ul>
                            </div>
                            <div className="bg-blue-100 p-3 rounded">
                                <p className="text-sm font-semibold text-blue-800">Control fácil</p>
                                <p className="text-xs">Presión directa suficiente</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signos de alarma mejorados */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Shock - Actúa YA</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FiEye className="w-4 h-4 mr-1"/>
                            Lo que VES:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li><strong>Palidez</strong> de piel/mucosas</li>
                            <li><strong>Diaforesis</strong> (sudor frío)</li>
                            <li><strong>Inquietud</strong> o confusión</li>
                            <li>Llenado capilar &gt;2 seg</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FiActivity className="w-4 h-4 mr-1"/>
                            Signos Vitales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li><strong>Taquicardia</strong> (FC &gt;100)</li>
                            <li><strong>Hipotensión</strong> (signo tardío)</li>
                            <li><strong>Taquipnea</strong> (FR &gt;20)</li>
                            <li>Pulso débil/filiforme</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FiUser className="w-4 h-4 mr-1"/>
                            Síntomas:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li><strong>Sed intensa</strong></li>
                            <li><strong>Náuseas</strong></li>
                            <li><strong>Debilidad</strong></li>
                            <li>Alteración mental</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Reglas de Oro del Control de Hemorragias</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            HACER SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>X</strong> antes de ABC en trauma</li>
                            <li>Presión directa FIRME</li>
                            <li>Proteger de hipotermia</li>
                            <li>Anotar hora del torniquete</li>
                            <li>Monitorear signos vitales</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA HACER:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Levantar apósitos para "ver"</li>
                            <li>Dar líquidos por boca</li>
                            <li>Aflojar torniquete en campo</li>
                            <li>Retrasar transporte</li>
                            <li>Presión arterial normal = estable</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}