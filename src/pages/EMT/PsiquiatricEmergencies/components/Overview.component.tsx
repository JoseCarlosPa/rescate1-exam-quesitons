import {FaExclamationTriangle, FaEye, FaHeartbeat, FaUserMd} from "react-icons/fa";
import {MdCheckCircle, MdPsychology, MdWarning} from "react-icons/md";
import {PiBrainFill} from "react-icons/pi";
import {HiOutlineEmojiHappy, HiOutlineEmojiSad} from "react-icons/hi";
import {RiMentalHealthLine} from "react-icons/ri";
import {BsLightbulb} from "react-icons/bs";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-purple-50 to-pink-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-purple-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-purple-700">¡Emergencia de Salud
                        Mental!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Las emergencias psiquiátricas representan el <strong>12-15% de todas las
                    llamadas de emergencia</strong>.
                    Tu respuesta profesional puede <span className="text-purple-600 font-bold">salvar vidas</span> y
                    reducir el estigma asociado con la salud mental.
                </p>
                <div className="mt-4 grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdPsychology className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                        <p className="font-bold text-purple-600">1 de cada 5</p>
                        <p className="text-sm">Adultos vive con enfermedad mental</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeartbeat className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Cada 11 min</p>
                        <p className="text-sm">Muere una persona por suicidio</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaUserMd className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold text-blue-600">Primeros en responder</p>
                        <p className="text-sm">Somos el primer contacto médico</p>
                    </div>
                </div>
            </div>

            {/* Definición y tipos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <PiBrainFill className="w-6 h-6 mr-2 text-orange-500"/>
                    ¿Qué es una Emergencia Psiquiátrica?
                </h2>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <p className="text-gray-800 leading-relaxed text-lg">
                        Una emergencia psiquiátrica es cualquier situación donde el <strong>comportamiento
                        de una persona</strong>
                        es tan perturbado que pone en <strong>peligro su seguridad o la de
                        otros</strong>, o cuando requiere
                        intervención médica inmediata.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-green-700 mb-3 flex items-center">
                            <MdCheckCircle className="w-5 h-5 mr-2"/>
                            Crisis Conductual
                        </h3>
                        <p className="text-gray-700 mb-3">Reacción temporal a eventos
                            estresantes</p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                <span>Interfiere con la vida diaria</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                <span>Puede ser inaceptable para el entorno</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></span>
                                <span>Generalmente no hay peligro inmediato</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border">
                        <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                            <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                            Emergencia Psiquiátrica
                        </h3>
                        <p className="text-gray-700 mb-3">Situación que requiere intervención
                            inmediata</p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span>Peligro para sí mismo o para otros</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span>Pérdida del contacto con la realidad</span>
                            </li>
                            <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></span>
                                <span>Necesita intervención médica urgente</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tipos principales */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos
                    Principales de Emergencias</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <h3 className="font-bold text-yellow-700 mb-2 flex items-center">
                            <HiOutlineEmojiSad className="w-5 h-5 mr-2"/>
                            Ideación Suicida
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Pensamientos de muerte</li>
                            <li>• Plan específico</li>
                            <li>• Medios disponibles</li>
                            <li>• Aislamiento social</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <h3 className="font-bold text-red-700 mb-2 flex items-center">
                            <MdWarning className="w-5 h-5 mr-2"/>
                            Delirio Agitado
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Agitación extrema</li>
                            <li>• Fuerza sobrehumana</li>
                            <li>• Hipertermia</li>
                            <li>• Riesgo de muerte súbita</li>
                        </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                        <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                            <FaEye className="w-5 h-5 mr-2"/>
                            Psicosis
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Alucinaciones</li>
                            <li>• Delirios</li>
                            <li>• Pensamiento desorganizado</li>
                            <li>• Pérdida del contacto con la realidad</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                        <h3 className="font-bold text-orange-700 mb-2 flex items-center">
                            <FaHeartbeat className="w-5 h-5 mr-2"/>
                            Crisis de Ansiedad
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Palpitaciones</li>
                            <li>• Dificultad respiratoria</li>
                            <li>• Sensación de muerte</li>
                            <li>• Despersonalización</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                            <RiMentalHealthLine className="w-5 h-5 mr-2"/>
                            Depresión Severa
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Ánimo deprimido</li>
                            <li>• Pérdida de interés</li>
                            <li>• Sentimientos de culpa</li>
                            <li>• Ideación suicida</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h3 className="font-bold text-green-700 mb-2 flex items-center">
                            <HiOutlineEmojiHappy className="w-5 h-5 mr-2"/>
                            Episodio Maníaco
                        </h3>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Euforia excesiva</li>
                            <li>• Hiperactividad</li>
                            <li>• Insomnio</li>
                            <li>• Juicio deficiente</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Conceptos clave */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-blue-600 mr-2"/>
                    <h3 className="text-xl font-bold text-blue-800">Conceptos Clave para
                        Recordar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Principios Fundamentales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>La seguridad es la prioridad absoluta</li>
                            <li>Siempre descartar causas médicas primero</li>
                            <li>Mantener un enfoque empático y sin juicio</li>
                            <li>La comunicación es tu herramienta más importante</li>
                            <li>Cada persona es un individuo único</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            Errores Comunes a Evitar:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Asumir que "solo es psiquiátrico"</li>
                            <li>Minimizar o ignorar los síntomas</li>
                            <li>Usar fuerza como primera opción</li>
                            <li>Juzgar o estigmatizar al paciente</li>
                            <li>Comprometer la seguridad de la escena</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}