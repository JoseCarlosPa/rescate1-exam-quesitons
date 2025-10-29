import {MdHealthAndSafety, MdOutlineTimer, MdWarning} from "react-icons/md";
import {RiHeartPulseLine, RiLungsLine, RiMentalHealthLine, RiThermometerLine} from "react-icons/ri";
import {TbEmergencyBed, TbScale} from "react-icons/tb";
import {FaBaby, FaExclamationTriangle, FaLungsVirus} from "react-icons/fa";
import {FiAlertTriangle, FiUsers} from "react-icons/fi";

export default function Pathologies(){
    return(
        <div className="space-y-8">
            {/* Importancia de reconocimiento temprano */}
            <div
                className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdOutlineTimer className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Reconocimiento Temprano =
                        Vida</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    En pediatría, el reconocimiento temprano de patologías críticas es
                    fundamental.
                    Los niños pueden compensar inicialmente, pero la descompensación es rápida y
                    catastrófica.
                </p>
            </div>

            {/* Emergencias respiratorias */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <RiLungsLine className="w-6 h-6 mr-2 text-blue-500"/>
                    Emergencias Respiratorias Pediátricas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div
                        className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center mb-3">
                            <TbEmergencyBed className="w-8 h-8 text-red-600 mr-3"/>
                            <h3 className="text-xl font-bold text-red-700">Crup
                                (Laringotraqueobronquitis)</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Infección viral, inicio gradual</li>
                                    <li>• Edad: 6 meses a 6 años</li>
                                    <li>• Empeora durante la noche</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos
                                    clave:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Tos característica de "foca"</li>
                                    <li>• Estridor inspiratorio</li>
                                    <li>• Fiebre baja-moderada</li>
                                    <li>• Disfonia (voz ronca)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
                        <div className="flex items-center mb-3">
                            <FaExclamationTriangle className="w-8 h-8 text-orange-600 mr-3"/>
                            <h3 className="text-xl font-bold text-orange-700">Epiglotitis</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Infección bacteriana súbita</li>
                                    <li>• Emergencia que amenaza la vida</li>
                                    <li>• Puede obstruir completamente</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos
                                    clave:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Fiebre alta súbita</li>
                                    <li>• Posición de trípode</li>
                                    <li>• Babeo excesivo</li>
                                    <li>• Voz amortiguada</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center mb-3">
                            <FaLungsVirus className="w-8 h-8 text-blue-600 mr-3"/>
                            <h3 className="text-xl font-bold text-blue-700">Bronquiolitis</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Inflamación de bronquiolos</li>
                                    <li>• Edad: &lt;2 años (pico 2-8 meses)</li>
                                    <li>• Virus sincicial respiratorio</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos
                                    clave:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Sibilancias y retracciones</li>
                                    <li>• Dificultad para alimentarse</li>
                                    <li>• Taquipnea progresiva</li>
                                    <li>• Irritabilidad</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center mb-3">
                            <RiLungsLine className="w-8 h-8 text-green-600 mr-3"/>
                            <h3 className="text-xl font-bold text-green-700">Asma
                                Pediátrica</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Inflamación y broncoconstricción</li>
                                    <li>• Desencadenantes identificables</li>
                                    <li>• Historia familiar común</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos
                                    clave:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Sibilancias espiratorias</li>
                                    <li>• Tos persistente</li>
                                    <li>• Opresión torácica</li>
                                    <li>• Disnea de esfuerzo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Emergencias neurológicas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <RiMentalHealthLine className="w-6 h-6 mr-2 text-purple-500"/>
                    Emergencias Neurológicas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div
                        className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-center mb-3">
                            <RiThermometerLine className="w-8 h-8 text-purple-600 mr-3"/>
                            <h3 className="text-xl font-bold text-purple-700">Convulsiones
                                Febriles</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Edad: 6 meses a 5 años</li>
                                    <li>• Asociadas a fiebre alta</li>
                                    <li>• Generalmente benignas</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Tipos:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Simples:</strong> &lt;15 min, generalizadas
                                    </li>
                                    <li>• <strong>Complejas:</strong> &gt;15 min, focales</li>
                                    <li>• <strong>Recurrentes:</strong> &gt;1 en 24h</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-lg border-l-4 border-indigo-500">
                        <div className="flex items-center mb-3">
                            <MdWarning className="w-8 h-8 text-indigo-600 mr-3"/>
                            <h3 className="text-xl font-bold text-indigo-700">Status
                                Epiléptico</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Definición:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Convulsión &gt;5 minutos</li>
                                    <li>• Convulsiones sin recuperación</li>
                                    <li>• Emergencia neurológica</li>
                                </ul>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Riesgos:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Daño cerebral permanente</li>
                                    <li>• Compromiso respiratorio</li>
                                    <li>• Acidosis metabólica</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shock pediátrico */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <RiHeartPulseLine className="w-6 h-6 mr-2 text-red-500"/>
                    Shock Pediátrico
                </h2>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 font-medium">
                        <strong>Concepto clave:</strong> Los niños mantienen la presión arterial
                        normal hasta las etapas finales.
                        ¡La hipotensión es un signo tardío y ominoso!
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div
                        className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
                        <div className="flex items-center mb-3">
                            <MdHealthAndSafety className="w-8 h-8 text-yellow-600 mr-3"/>
                            <h3 className="text-xl font-bold text-yellow-700">Shock
                                Compensado</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos
                                    tempranos:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Taquicardia (signo más temprano)</li>
                                    <li>• Relleno capilar &gt;2 segundos</li>
                                    <li>• Piel fría y pegajosa</li>
                                    <li>• Alteración mental sutil</li>
                                </ul>
                            </div>
                            <div className="bg-green-100 p-3 rounded">
                                <p className="text-sm font-medium text-green-700 mb-1">Pronóstico:</p>
                                <p className="text-sm text-green-600">Excelente si se trata
                                    rápidamente</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-lg border-l-4 border-red-500">
                        <div className="flex items-center mb-3">
                            <FaExclamationTriangle className="w-8 h-8 text-red-600 mr-3"/>
                            <h3 className="text-xl font-bold text-red-700">Shock
                                Descompensado</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos
                                    tardíos:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• <strong>Hipotensión</strong> (crítico)</li>
                                    <li>• Pulsos débiles/ausentes</li>
                                    <li>• Cianosis</li>
                                    <li>• Alteración severa conciencia</li>
                                </ul>
                            </div>
                            <div className="bg-red-100 p-3 rounded">
                                <p className="text-sm font-medium text-red-700 mb-1">Pronóstico:</p>
                                <p className="text-sm text-red-600">Riesgo inmediato de paro
                                    cardíaco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Causas comunes por edad */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <TbScale className="w-6 h-6 mr-2 text-orange-500"/>
                    Causas de Shock por Grupo de Edad
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Lactantes (0-12
                            meses)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Gastroenteritis con deshidratación</li>
                            <li>• Sepsis</li>
                            <li>• Síndrome del niño sacudido</li>
                            <li>• Falla cardíaca congénita</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Preescolares (1-6
                            años)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Traumatismo</li>
                            <li>• Gastroenteritis</li>
                            <li>• Intoxicaciones</li>
                            <li>• Infecciones severas</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Escolares (6+
                            años)</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Traumatismo (principal causa)</li>
                            <li>• Anafilaxia</li>
                            <li>• Diabéticos (DKA)</li>
                            <li>• Hemorragias</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Condiciones especiales */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiUsers className="w-6 h-6 mr-2 text-pink-500"/>
                    Condiciones Especiales
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div
                        className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border-l-4 border-pink-500">
                        <div className="flex items-center mb-3">
                            <FiAlertTriangle className="w-8 h-8 text-pink-600 mr-3"/>
                            <h3 className="text-xl font-bold text-pink-700">Maltrato
                                Infantil</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Signos de
                                    sospecha:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Lesiones en diferentes etapas</li>
                                    <li>• Patrones sugestivos</li>
                                    <li>• Historia inconsistente</li>
                                    <li>• Comportamiento del niño</li>
                                </ul>
                            </div>
                            <div className="bg-red-100 p-3 rounded">
                                <p className="text-sm font-medium text-red-700 mb-1">Obligación
                                    legal:</p>
                                <p className="text-sm text-red-600">Reportar sospechas a
                                    autoridades</p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center mb-3">
                            <FaBaby className="w-8 h-8 text-blue-600 mr-3"/>
                            <h3 className="text-xl font-bold text-blue-700">SMSL</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <p className="text-sm font-medium text-gray-600 mb-1">Características:</p>
                                <ul className="text-sm text-gray-700 space-y-1">
                                    <li>• Muerte súbita e inexplicable</li>
                                    <li>• Lactantes aparentemente sanos</li>
                                    <li>• Pico: 2-4 meses de edad</li>
                                    <li>• Durante el sueño</li>
                                </ul>
                            </div>
                            <div className="bg-blue-100 p-3 rounded">
                                <p className="text-sm font-medium text-blue-700 mb-1">Manejo:</p>
                                <p className="text-sm text-blue-600">RCP + apoyo emocional
                                    familia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}