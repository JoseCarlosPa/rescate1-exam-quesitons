import {FaExclamationTriangle, FaHeartbeat} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {FiActivity} from "react-icons/fi";
import {BsLightbulb, BsShield} from "react-icons/bs";

export default function Overview(){
    return(
        <div className="space-y-8">
            {/* Importancia crítica del RCP */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡El RCP Salva Vidas!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    El Soporte Vital Básico es el conjunto de maniobras destinadas a <strong>mantener
                    la circulación y oxigenación</strong>
                    hasta que llegue ayuda avanzada. Un RCP de alta calidad puede <span
                    className="text-red-600 font-bold">triplicar</span>
                    las posibilidades de supervivencia.
                </p>
                <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">0-4 min</p>
                        <p className="text-sm">RCP inmediato</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FiActivity className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">4-6 min</p>
                        <p className="text-sm">Daño cerebral</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-red-700 mx-auto mb-2"/>
                        <p className="font-bold text-red-700">6-10 min</p>
                        <p className="text-sm">Daño severo</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaExclamationTriangle className="w-8 h-8 text-black mx-auto mb-2"/>
                        <p className="font-bold text-black">+10 min</p>
                        <p className="text-sm">Muerte cerebral</p>
                    </div>
                </div>
            </div>

            {/* Cadena de Supervivencia */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Cadena de Supervivencia - Cada Eslabón Cuenta
                </h2>
                <div className="grid md:grid-cols-5 gap-4 mb-6">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border text-center">
                        <div
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">1</span>
                        </div>
                        <h3 className="font-bold text-blue-700 mb-2">Reconocimiento</h3>
                        <p className="text-sm text-gray-600">Identificar paro cardíaco y activar
                            SEM</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border text-center">
                        <div
                            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">2</span>
                        </div>
                        <h3 className="font-bold text-green-700 mb-2">RCP Inmediato</h3>
                        <p className="text-sm text-gray-600">Compresiones de alta calidad</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border text-center">
                        <div
                            className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">3</span>
                        </div>
                        <h3 className="font-bold text-yellow-700 mb-2">Desfibrilación</h3>
                        <p className="text-sm text-gray-600">DEA lo antes posible</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border text-center">
                        <div
                            className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">4</span>
                        </div>
                        <h3 className="font-bold text-purple-700 mb-2">SVA</h3>
                        <p className="text-sm text-gray-600">Soporte vital avanzado</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border text-center">
                        <div
                            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-white font-bold text-xl">5</span>
                        </div>
                        <h3 className="font-bold text-red-700 mb-2">Post-Paro</h3>
                        <p className="text-sm text-gray-600">Cuidados especializados</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src="/chain.png" alt="Cadena de supervivencia"
                         className="max-h-48 rounded shadow"/>
                </div>
            </div>

            {/* Estadísticas clave */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaHeartbeat className="w-6 h-6 text-blue-600 mr-2"/>
                    <h3 className="text-xl font-bold text-blue-800">Estadísticas que Debes
                        Conocer</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">70%</div>
                        <p className="text-gray-700">de paros cardíacos ocurren en el hogar</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">10%</div>
                        <p className="text-gray-700">de supervivencia sin RCP inmediato</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                        <p className="text-gray-700">de supervivencia con RCP de calidad</p>
                    </div>
                </div>
            </div>

            {/* Puntos clave */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Principios Fundamentales
                        del SVB</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Hacer SIEMPRE:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Verificar seguridad de la escena</li>
                            <li>Comprobar respuesta y respiración</li>
                            <li>Pedir ayuda inmediatamente</li>
                            <li>Iniciar compresiones de calidad</li>
                            <li>Usar DEA en cuanto esté disponible</li>
                            <li>Minimizar interrupciones</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            NUNCA hacer:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Dudar en iniciar RCP</li>
                            <li>Hacer compresiones superficiales</li>
                            <li>Interrumpir innecesariamente</li>
                            <li>Tocar al paciente durante análisis DEA</li>
                            <li>Ventilar excesivamente</li>
                            <li>Rendirse antes de que llegue ayuda</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}