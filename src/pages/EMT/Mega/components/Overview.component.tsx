import {FaHeartbeat} from "react-icons/fa";
import {MdGroupWork} from "react-icons/md";
import {AiOutlineWarning} from "react-icons/ai";
import {GiHealthNormal} from "react-icons/gi";
import {BsClipboardCheck} from "react-icons/bs";
import {BiTimer} from "react-icons/bi";

export default function Overview(){
    return(
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el
                    Código Mega?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    El Código Mega (Mega Code) es un escenario de simulación de alto realismo diseñado para evaluar
                    y practicar las habilidades de un equipo de reanimación durante un paro cardiorrespiratorio.
                    Se enfoca en el trabajo en equipo, la comunicación efectiva y la aplicación correcta de
                    algoritmos de Soporte Vital Básico (BLS) y Soporte Vital Avanzado Cardiovascular (ACLS/SVAA).
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                    <div className="flex">
                        <div className="ml-3">
                            <p className="text-sm text-red-700">
                                <strong>Punto crítico:</strong> Durante un paro cardíaco, cada segundo cuenta.
                                La calidad de las compresiones y la coordinación del equipo son factores determinantes
                                para la supervivencia del paciente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-blue-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <FaHeartbeat className="w-6 h-6 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-blue-700">Objetivos principales</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Mejorar el rendimiento del equipo:</strong> Identificar fallos en comunicación y coordinación.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Aplicar protocolos correctamente:</strong> Reforzar algoritmos BLS/ACLS en entorno seguro.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Desarrollar habilidades críticas:</strong> Práctica de RCP de alta calidad y manejo de vía aérea.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Evaluación objetiva:</strong> Medir competencias en situaciones de alta presión.
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white border border-green-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <MdGroupWork className="w-6 h-6 text-green-500 mr-3"/>
                        <h3 className="text-xl font-semibold text-green-700">Componentes clave</h3>
                    </div>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Trabajo en equipo:</strong> Roles definidos y coordinación efectiva entre todos los miembros.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Comunicación de circuito cerrado:</strong> Confirmación verbal de órdenes para prevenir errores.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>RCP de alta calidad:</strong> Compresiones a 100-120/min con profundidad de 5-6 cm.
                            </div>
                        </li>
                        <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <div>
                                <strong>Identificación de causas:</strong> Búsqueda activa de las H's y T's reversibles.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                    <AiOutlineWarning className="mr-2 text-xl"/>
                    Elementos esenciales del Código Mega
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <GiHealthNormal className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Liderazgo efectivo</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            El líder dirige sin realizar tareas físicas, asigna roles y asegura seguimiento de algoritmos.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <BiTimer className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Minimizar interrupciones</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Mantener FCT mayor a 80%, pausas menor a 10 segundos para preservar presión de perfusión coronaria.
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <div className="flex items-center mb-2">
                            <BsClipboardCheck className="text-yellow-600 mr-2"/>
                            <strong className="text-yellow-800">Evaluación continua</strong>
                        </div>
                        <p className="text-sm text-yellow-700">
                            Revisar ritmo cada 2 minutos y reevaluar estrategia según respuesta del paciente.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Tip profesional</h3>
                <p className="text-blue-700">
                    "La práctica regular del Código Mega en simulación mejora significativamente el desempeño
                    real durante emergencias. La familiaridad con roles, algoritmos y comunicación efectiva
                    puede ser la diferencia entre la vida y la muerte del paciente."
                </p>
            </div>
        </div>
    );
}