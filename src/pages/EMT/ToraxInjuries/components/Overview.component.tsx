import {FaExclamationTriangle, FaFirstAid, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer} from "react-icons/md";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiActivity, FiAlertTriangle, FiEye} from "react-icons/fi";
import {RiStethoscopeLine} from "react-icons/ri";

export default function Overview(){
    return(
        <div className="space-y-8">
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-8 max-w-5xl mx-auto">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Emergencia Potencialmente
                        Mortal!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Las lesiones torácicas son responsables del <strong
                    className="text-red-600">25% de las muertes traumáticas</strong>.
                    Tu evaluación y manejo inmediato puede ser la diferencia entre la vida y la
                    muerte.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Primeros 5 min</p>
                        <p className="text-sm">Reconocimiento crítico</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaFirstAid className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">Intervención</p>
                        <p className="text-sm">Manejo inmediato</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeartbeat className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">Supervivencia</p>
                        <p className="text-sm">Traslado rápido</p>
                    </div>
                </div>
            </div>
            {/* Protocolo XABCDE específico para trauma torácico */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo XABCDE para Trauma Torácico
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-red-700 mb-2 text-center">X -
                            Control</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-3 h-3 mt-1 mr-1 text-red-600"/>
                                <span>Hemorragias externas</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-3 h-3 mt-1 mr-1 text-red-600"/>
                                <span>Heridas penetrantes</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-blue-700 mb-2 text-center">A -
                            Airway</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-3 h-3 mt-1 mr-1 text-blue-600"/>
                                <span>¿Puede hablar?</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-3 h-3 mt-1 mr-1 text-blue-600"/>
                                <span>Protección cervical</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-green-700 mb-2 text-center">B -
                            Breathing</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaLungsVirus className="w-3 h-3 mt-1 mr-1 text-green-600"/>
                                <span>FR y calidad</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-3 h-3 mt-1 mr-1 text-green-600"/>
                                <span>Ruidos respiratorios</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-3 h-3 mt-1 mr-1 text-green-600"/>
                                <span>Movimiento paradójico</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-purple-700 mb-2 text-center">C -
                            Circulation</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaHeartbeat className="w-3 h-3 mt-1 mr-1 text-purple-600"/>
                                <span>Pulso y TA</span>
                            </li>
                            <li className="flex items-start">
                                <FaHeartbeat className="w-3 h-3 mt-1 mr-1 text-purple-600"/>
                                <span>Signos de shock</span>
                            </li>
                            <li className="flex items-start">
                                <FaHeartbeat className="w-3 h-3 mt-1 mr-1 text-purple-600"/>
                                <span>Ingurgitación yugular</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-yellow-700 mb-2 text-center">D &
                            E</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiActivity className="w-3 h-3 mt-1 mr-1 text-yellow-600"/>
                                <span>Estado neurológico</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-3 h-3 mt-1 mr-1 text-yellow-600"/>
                                <span>Exposición completa</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Clasificación crítica de lesiones */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación
                    por Prioridad de Tratamiento</h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                            <h3 className="text-xl font-bold text-red-800">Amenaza Inmediata
                                para la Vida</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-red-700">Neumotórax a
                                    Tensión</h4>
                                <p className="text-sm text-gray-600">Acumulación progresiva de
                                    aire con compromiso circulatorio</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-red-700">Hemotórax Masivo</h4>
                                <p className="text-sm text-gray-600">&gt;1500ml de sangre en
                                    espacio pleural</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-red-700">Tórax Inestable</h4>
                                <p className="text-sm text-gray-600">Fracturas múltiples con
                                    movimiento paradójico</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-red-700">Taponamiento
                                    Cardíaco</h4>
                                <p className="text-sm text-gray-600">Compresión del corazón por
                                    sangre pericárdica</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                        <div className="flex items-center mb-4">
                            <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                            <h3 className="text-xl font-bold text-yellow-800">Potencialmente
                                Graves</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-yellow-700">Neumotórax
                                    Simple</h4>
                                <p className="text-sm text-gray-600">Aire en espacio pleural sin
                                    tensión</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-yellow-700">Hemotórax
                                    Menor</h4>
                                <p className="text-sm text-gray-600">&lt;1500ml de sangre</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-yellow-700">Contusión
                                    Pulmonar</h4>
                                <p className="text-sm text-gray-600">Magulladura del tejido
                                    pulmonar</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h4 className="font-semibold text-yellow-700">Fracturas
                                    Costales</h4>
                                <p className="text-sm text-gray-600">Lesiones óseas simples</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Signos de alarma críticos */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <RiStethoscopeLine className="w-6 h-6 text-orange-600 mr-2"/>
                    <h3 className="text-xl font-bold text-orange-800">Signos de Alarma - Evalúa
                        INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Signos
                            Respiratorios:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Disnea severa o taquipnea</li>
                            <li>Cianosis (labios, uñas azules)</li>
                            <li>Uso de músculos accesorios</li>
                            <li>Ruidos respiratorios ausentes</li>
                            <li>Movimiento paradójico del tórax</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Signos
                            Circulatorios:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Hipotensión progresiva</li>
                            <li>Taquicardia</li>
                            <li>Ingurgitación yugular</li>
                            <li>Piel pálida, fría y húmeda</li>
                            <li>Pulso débil o ausente</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Signos
                            Neurológicos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Alteración del estado mental</li>
                            <li>Agitación o confusión</li>
                            <li>Ansiedad extrema</li>
                            <li>Disminución del nivel de conciencia</li>
                            <li>Sensación de muerte inminente</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Principios Fundamentales de
                        Manejo</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            SIEMPRE hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Protocolo XABCDE sistemático</li>
                            <li>Oxígeno a alto flujo inmediato</li>
                            <li>Monitorización continua de signos vitales</li>
                            <li>Posición de comodidad (generalmente semisentado)</li>
                            <li>Preparación para deterioro rápido</li>
                            <li>Comunicación temprana con hospital receptor</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Retirar objetos empalados</li>
                            <li>Aplicar presión sobre tórax inestable</li>
                            <li>Sellar completamente heridas torácicas</li>
                            <li>Administrar fluidos excesivos</li>
                            <li>Transportar en posición supina si no es necesario</li>
                            <li>Subestimar la severidad del trauma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}