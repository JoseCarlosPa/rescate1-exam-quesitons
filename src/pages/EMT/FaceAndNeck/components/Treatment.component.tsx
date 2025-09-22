import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiEye} from "react-icons/fi";
import {FaFirstAid} from "react-icons/fa";
import {MdCheckCircle, MdWarning} from "react-icons/md";

export default function Treatment() {
    return (
        <div className="space-y-8">
            {/* Algoritmo de evaluación */}
            <div
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-blue-500"/>
                    Algoritmo de Evaluación y Manejo Sistemático
                </h2>
                <div className="grid lg:grid-cols-5 gap-4">
                    <div
                        className="bg-red-100 p-4 rounded-lg text-center border-2 border-red-300">
                        <h3 className="font-bold text-red-700 mb-2">X</h3>
                        <h4 className="font-semibold text-red-800 mb-2">HEMORRAGIA</h4>
                        <ul className="text-xs space-y-1 text-gray-700">
                            <li>• Presión directa</li>
                            <li>• Control arterial</li>
                            <li>• Vendaje oclusivo si aplica</li>
                        </ul>
                    </div>
                    <div
                        className="bg-blue-100 p-4 rounded-lg text-center border-2 border-blue-300">
                        <h3 className="font-bold text-blue-700 mb-2">A</h3>
                        <h4 className="font-semibold text-blue-800 mb-2">VÍA AÉREA</h4>
                        <ul className="text-xs space-y-1 text-gray-700">
                            <li>• Control cervical</li>
                            <li>• Aspiración</li>
                            <li>• Tracción mandibular</li>
                        </ul>
                    </div>
                    <div
                        className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-300">
                        <h3 className="font-bold text-green-700 mb-2">B</h3>
                        <h4 className="font-semibold text-green-800 mb-2">RESPIRACIÓN</h4>
                        <ul className="text-xs space-y-1 text-gray-700">
                            <li>• O₂ alto flujo</li>
                            <li>• Evaluar neumotórax</li>
                            <li>• Enfisema subcutáneo</li>
                        </ul>
                    </div>
                    <div
                        className="bg-purple-100 p-4 rounded-lg text-center border-2 border-purple-300">
                        <h3 className="font-bold text-purple-700 mb-2">C</h3>
                        <h4 className="font-semibold text-purple-800 mb-2">CIRCULACIÓN</h4>
                        <ul className="text-xs space-y-1 text-gray-700">
                            <li>• Pulso/TA</li>
                            <li>• Perfusión</li>
                            <li>• Acceso IV</li>
                        </ul>
                    </div>
                    <div
                        className="bg-orange-100 p-4 rounded-lg text-center border-2 border-orange-300">
                        <h3 className="font-bold text-orange-700 mb-2">D</h3>
                        <h4 className="font-semibold text-orange-800 mb-2">NEUROLÓGICO</h4>
                        <ul className="text-xs space-y-1 text-gray-700">
                            <li>• Glasgow</li>
                            <li>• Pupilas</li>
                            <li>• Función motora</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Manejo específico por tipo de lesión */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo
                    Específico por Tipo de Lesión</h2>

                {/* Lesiones oculares */}
                <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                            <FiEye className="w-5 h-5 mr-2"/>
                            Lesiones Oculares - Protocolo Específico
                        </h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <h4 className="font-bold text-red-600 mb-2">Objeto Empalado
                                        en Ojo</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                        <li>NO retirar el objeto</li>
                                        <li>Estabilizar con vendajes voluminosos</li>
                                        <li>Cubrir AMBOS ojos</li>
                                        <li>Posición semisentada</li>
                                        <li>Transporte inmediato</li>
                                    </ol>
                                    <p className="text-xs text-red-600 mt-2">
                                        <strong>Razón:</strong> Movimientos simpáticos pueden
                                        agravar la lesión</p>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <h4 className="font-bold text-blue-600 mb-2">Quemadura
                                        Química Ocular</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                        <li>Irrigación inmediata con SSN o agua</li>
                                        <li>Mínimo 20 minutos continuos</li>
                                        <li>Desde canto interno hacia externo</li>
                                        <li>Continuar durante transporte</li>
                                        <li>Proteger ojo no afectado</li>
                                    </ol>
                                    <p className="text-xs text-blue-600 mt-2"><strong>Tiempo
                                        crítico:</strong> Cada segundo cuenta</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <h4 className="font-bold text-green-600 mb-2">Avulsión del
                                        Globo Ocular</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                        <li>NO intentar reintroducir</li>
                                        <li>Cubrir con gasa estéril húmeda</li>
                                        <li>Proteger de la presión</li>
                                        <li>Cubrir ojo contralateral</li>
                                        <li>Posición cómoda para el paciente</li>
                                    </ol>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <h4 className="font-bold text-purple-600 mb-2">Contusión
                                        Ocular Severa</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                        <li>Evaluación visual básica</li>
                                        <li>Protector ocular rígido</li>
                                        <li>Sospechar fractura orbitaria</li>
                                        <li>No aplicar presión</li>
                                        <li>Evaluar signos neurológicos</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Lesiones de cuello */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                            <FaFirstAid className="w-5 h-5 mr-2"/>
                            Lesiones de Cuello - Manejo Crítico
                        </h3>
                        <div className="grid lg:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-red-800 mb-3">Heridas
                                    Penetrantes</h4>
                                <div className="bg-white p-4 rounded shadow-sm mb-4">
                                    <h5 className="font-medium mb-2">Protocolo Inmediato:</h5>
                                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                        <li>Control cervical manual inmediato</li>
                                        <li>NO retirar objetos empalados</li>
                                        <li>Control hemorragia con presión directa</li>
                                        <li>NO comprimir ambas carótidas simultáneamente</li>
                                        <li>Vendaje oclusivo según protocolo</li>
                                    </ol>
                                </div>
                                <div className="bg-yellow-100 p-3 rounded">
                                    <h5 className="font-medium text-yellow-800 mb-1">Vendaje
                                        Oclusivo:</h5>
                                    <p className="text-sm text-gray-700">Aplicar si hay herida
                                        soplante o sospecha de lesión vascular mayor para
                                        prevenir embolia aérea</p>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-800 mb-3">Trauma
                                    Contuso</h4>
                                <div className="bg-white p-4 rounded shadow-sm mb-4">
                                    <h5 className="font-medium mb-2">Evaluación Específica:</h5>
                                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                        <li>Cambios en la voz (disfonía)</li>
                                        <li>Enfisema subcutáneo palpable</li>
                                        <li>Dolor al tragar</li>
                                        <li>Estridor o dificultad respiratoria</li>
                                        <li>Hematoma en expansión</li>
                                    </ul>
                                </div>
                                <div className="bg-orange-100 p-3 rounded">
                                    <h5 className="font-medium text-orange-800 mb-1">Alerta:</h5>
                                    <p className="text-sm text-gray-700">Cualquier signo =
                                        lesión de vía aérea potencial. Preparar para vía aérea
                                        quirúrgica</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Otras lesiones faciales */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-4">Otras Lesiones
                            Faciales</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-blue-600 mb-2">Epistaxis
                                    Severa</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Paciente sentado, inclinado adelante</li>
                                    <li>Comprimir fosas nasales 10-15 min</li>
                                    <li>Aplicar hielo en dorso nasal</li>
                                    <li>Aspirar coágulos si es necesario</li>
                                    <li>Considerar taponamiento anterior</li>
                                </ol>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-green-600 mb-2">Avulsión
                                    Dental</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Recuperar el diente</li>
                                    <li>Manipular solo por la corona</li>
                                    <li>NO limpiar la raíz</li>
                                    <li>Guardar en SSN, leche o saliva</li>
                                    <li>Transporte en 30 min si es posible</li>
                                </ol>
                            </div>
                            <div className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-purple-600 mb-2">Fracturas
                                    Faciales</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Mantener vía aérea permeable</li>
                                    <li>Control de hemorragia</li>
                                    <li>Vigilar edema progresivo</li>
                                    <li>Inmovilizar si es posible</li>
                                    <li>Evaluación neurológica</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Técnicas avanzadas */}
            <div
                className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                    <BsLightbulb className="w-5 h-5 mr-2"/>
                    Técnicas Avanzadas y Consideraciones Especiales
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Manejo de Vía Aérea
                            Difícil:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>Posición de olfateo modificada (con control cervical)</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>Técnica BURP para mejorar visualización</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>Aspiración continua durante procedimientos</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>Preparar vía aérea quirúrgica de emergencia</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-purple-800 mb-3">Errores Críticos a
                            Evitar:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>Sondear heridas de cuello con dedos o instrumentos</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>Aplicar presión sobre hematoma del cuello</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>Limpiar dientes avulsionados</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>Forzar movimientos en fractura mandibular</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}