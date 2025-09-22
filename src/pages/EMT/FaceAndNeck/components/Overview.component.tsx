import {FaExclamationTriangle, FaFirstAid, FaHeadSideVirus} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiAlertTriangle, FiEye} from "react-icons/fi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Alerta de importancia crítica */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Atención Crítica!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Las lesiones de cara y cuello pueden <strong>comprometer la vida</strong> en
                    minutos debido a obstrucción de vía aérea y hemorragia masiva.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Vía Aérea</p>
                        <p className="text-sm">Primera prioridad absoluta</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeadSideVirus className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Control Cervical</p>
                        <p className="text-sm">Asumir lesión medular</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaFirstAid className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">Hemorragia</p>
                        <p className="text-sm">Control inmediato</p>
                    </div>
                </div>
            </div>
            {/* Protocolo XABCDE específico */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo XABCDE en Lesiones de Cara y Cuello
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 text-center">X -
                            HEMORRAGIA</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Control inmediato con presión directa</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Identificar hemorragia exanguinante</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Cuidado con grandes vasos del cuello</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-blue-700 mb-3 text-center">A - VÍA
                            AÉREA</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Asumir lesión cervical siempre</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Aspirar sangre y secreciones</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span>Tracción mandibular con control C-spine</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 text-center">B -
                            RESPIRACIÓN</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Oxígeno a alto flujo</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Evaluar neumotórax</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span>Buscar enfisema subcutáneo</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma inmediatos */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa
                        INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <FaFirstAid className="w-4 h-4 mr-2"/>
                            Compromiso de Vía Aérea:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Estridor (obstrucción alta)</li>
                            <li>Gorgoteo por sangre/secreciones</li>
                            <li>Disfonía (cambio en la voz)</li>
                            <li>Enfisema subcutáneo palpable</li>
                            <li>Hematoma en expansión en cuello</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            Hemorragia Crítica:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Sangrado arterial pulsátil</li>
                            <li>Epistaxis masiva no controlable</li>
                            <li>Herida soplante en cuello</li>
                            <li>Palidez y signos de shock</li>
                            <li>Hematoma orbitario (ojo de mapache)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mecanismos de lesión comunes */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Mecanismos
                    de Lesión y Patrones Esperados</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-medium text-lg mb-2 text-blue-700">Trauma
                                Contuso Facial</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Mecanismos:</strong> Peleas, deportes, accidentes
                                vehiculares</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Fracturas nasales (más comunes)</li>
                                <li>Fractura mandibular</li>
                                <li>Contusión orbitaria</li>
                                <li>Avulsión dental</li>
                                <li>Posible LCT asociada</li>
                            </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <h3 className="font-medium text-lg mb-2 text-red-700">Heridas
                                Penetrantes</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Mecanismos:</strong> Arma blanca, PAF, objetos
                                punzocortantes</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Lesión vascular (carótida, yugular)</li>
                                <li>Lesión de vía aérea (laringe, tráquea)</li>
                                <li>Lesión esofágica</li>
                                <li>Lesión medular cervical</li>
                                <li>Riesgo de embolia aérea</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-medium text-lg mb-2 text-green-700">Quemaduras</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Mecanismos:</strong> Térmicas, químicas, eléctricas</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Edema progresivo de vía aérea</li>
                                <li>Lesiones oculares por químicos</li>
                                <li>Quemaduras de córnea</li>
                                <li>Inhalación de humo</li>
                                <li>Deterioro respiratorio tardío</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <h3 className="font-medium text-lg mb-2 text-purple-700">Trauma por
                                Estallido</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                <strong>Mecanismos:</strong> Explosiones, descompresión</p>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Ruptura timpánica</li>
                                <li>Lesión ocular por presión</li>
                                <li>Barotrauma pulmonar</li>
                                <li>Fracturas faciales múltiples</li>
                                <li>LCT por onda expansiva</li>
                            </ul>
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
                            <li>Inmovilización cervical temprana</li>
                            <li>Aspiración frecuente de vía aérea</li>
                            <li>Control directo de hemorragia</li>
                            <li>Evaluación neurológica seriada</li>
                            <li>Cubrir ambos ojos en lesión ocular</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <MdWarning className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Retirar objetos empalados</li>
                            <li>Sondear heridas penetrantes</li>
                            <li>Comprimir ambas carótidas</li>
                            <li>Hiperextender cuello en trauma</li>
                            <li>Intentar reintroducir globo ocular</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}