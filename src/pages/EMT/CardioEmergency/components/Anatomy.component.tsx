import {FiHeart} from "react-icons/fi";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiHeart className="w-6 h-6 mr-2 text-orange-500"/>
                    Anatomía y Fisiología Cardiovascular
                </h2>

                {/* Anatomía del corazón */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Estructura Cardíaca</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Aurículas (Cavidades Superiores)</h4>
                                        <p className="text-sm text-gray-600">Aurícula derecha: recibe sangre venosa.
                                            Aurícula izquierda: recibe sangre oxigenada de pulmones</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Ventrículos (Cavidades Inferiores)</h4>
                                        <p className="text-sm text-gray-600">Ventrículo derecho: bombea a pulmones.
                                            Ventrículo izquierdo: bombea a circulación sistémica</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Válvulas Cardíacas</h4>
                                        <p className="text-sm text-gray-600">Tricúspide, Pulmonar, Mitral (Bicúspide),
                                            Aórtica - controlan flujo unidireccional</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                            <h3 className="text-xl font-bold text-red-700 mb-4">Sistema de Conducción</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Nodo Sinoauricular (SA)</h4>
                                        <p className="text-sm text-gray-600">Marcapasos natural - 60-100 latidos/min</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Nodo Auriculoventricular (AV)</h4>
                                        <p className="text-sm text-gray-600">Retarda el impulso - permite llenado
                                            ventricular</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Haz de His y Fibras de Purkinje</h4>
                                        <p className="text-sm text-gray-600">Distribuyen impulso eléctrico a
                                            ventrículos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Circulación */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4">Circulación Sistémica vs Pulmonar</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-green-800 mb-3">Circulación Pulmonar (Menor)</h4>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center"><span
                                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Ventrículo derecho →
                                    Arteria pulmonar</p>
                                <p className="flex items-center"><span
                                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Pulmones (intercambio
                                    gaseoso)</p>
                                <p className="flex items-center"><span
                                    className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Venas pulmonares → Aurícula
                                    izquierda</p>
                                <p className="text-sm text-green-700 font-medium">Presión baja (25/10 mmHg)</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-800 mb-3">Circulación Sistémica (Mayor)</h4>
                            <div className="space-y-2 text-gray-700">
                                <p className="flex items-center"><span
                                    className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Ventrículo izquierdo → Aorta
                                </p>
                                <p className="flex items-center"><span
                                    className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Órganos y tejidos corporales
                                </p>
                                <p className="flex items-center"><span
                                    className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>Venas cavas → Aurícula
                                    derecha</p>
                                <p className="text-sm text-green-700 font-medium">Presión alta (120/80 mmHg)</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fisiología cardíaca */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Conceptos Fisiológicos Clave</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-purple-50 p-4 rounded-lg border">
                            <h4 className="font-bold text-purple-700 mb-2">Gasto Cardíaco</h4>
                            <p className="text-sm text-gray-700 mb-2">GC = FC × VS</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• FC: Frecuencia cardíaca</li>
                                <li>• VS: Volumen sistólico</li>
                                <li>• Normal: 4-8 L/min</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg border">
                            <h4 className="font-bold text-indigo-700 mb-2">Presión Arterial</h4>
                            <p className="text-sm text-gray-700 mb-2">PA = GC × RVP</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• GC: Gasto cardíaco</li>
                                <li>• RVP: Resistencia vascular periférica</li>
                                <li>• Normal: 120/80 mmHg</li>
                            </ul>
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg border">
                            <h4 className="font-bold text-pink-700 mb-2">Perfusión Tisular</h4>
                            <p className="text-sm text-gray-700 mb-2">Depende de:</p>
                            <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Presión de perfusión</li>
                                <li>• Contenido de oxígeno</li>
                                <li>• Demanda metabólica</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Arterias coronarias */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4">Circulación Coronaria - Irrigación del
                        Corazón</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">Arteria Coronaria Izquierda</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Tronco principal:</strong> Se divide en LAD y LCX</li>
                                <li><strong>LAD (Descendente anterior):</strong> Pared anterior del VI, parte del septum
                                </li>
                                <li><strong>LCX (Circunfleja):</strong> Pared lateral del VI, parte de la aurícula
                                    izquierda
                                </li>
                            </ul>
                            <p className="text-sm text-yellow-700 mt-2 font-medium">Irriga ~75% del miocardio</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">Arteria Coronaria Derecha</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>RCA principal:</strong> Pared inferior del VI, VD, aurícula derecha</li>
                                <li><strong>Arteria marginal:</strong> Borde derecho del corazón</li>
                                <li><strong>Descendente posterior:</strong> Pared posterior del VI (en 85% de casos)
                                </li>
                            </ul>
                            <p className="text-sm text-yellow-700 mt-2 font-medium">Irriga ~25% del miocardio</p>
                        </div>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-100 rounded">
                        <p className="text-sm text-yellow-800"><strong>Nota clínica:</strong> La oclusión de LAD ("widow
                            maker") es especialmente peligrosa por la extensión del territorio que irriga.</p>
                    </div>
                </div>

                {/* Ciclo Cardíaco */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4">Ciclo Cardíaco y Perfusión</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-indigo-800 mb-3">Fases del Ciclo Cardíaco:</h4>
                            <div className="space-y-3">
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-indigo-700">Diástole (Relajación)</h5>
                                    <p className="text-sm text-gray-600">Llenado ventricular - presión baja, válvulas AV
                                        abiertas</p>
                                    <p className="text-xs text-indigo-600">Duración: ~60% del ciclo</p>
                                </div>
                                <div className="bg-white p-3 rounded border">
                                    <h5 className="font-medium text-red-700">Sístole (Contracción)</h5>
                                    <p className="text-sm text-gray-600">Eyección ventricular - presión alta, válvulas
                                        semilunares abiertas</p>
                                    <p className="text-xs text-red-600">Duración: ~40% del ciclo</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-indigo-800 mb-3">Perfusión Coronaria:</h4>
                            <ul className="space-y-2 text-gray-700">
                                <li><strong>Perfusión subendocárdica:</strong> Mayor durante diástole</li>
                                <li><strong>Perfusión epicárdica:</strong> Continua durante todo el ciclo</li>
                                <li><strong>Presión de perfusión coronaria:</strong> PA diastólica - presión AI</li>
                                <li><strong>Autorregulación:</strong> Flujo constante pese a cambios de presión</li>
                            </ul>
                            <div className="mt-3 p-2 bg-indigo-100 rounded">
                                <p className="text-sm text-indigo-800"><strong>Clave clínica:</strong> La taquicardia
                                    reduce el tiempo de diástole, comprometiendo la perfusión coronaria</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Automatismo del tejido cardíaco */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4">Automatismo y Conducción Eléctrica</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-3">Jerarquía de Marcapasos:</h4>
                            <div className="space-y-2">
                                <div className="bg-white p-2 rounded text-sm">
                                    <strong>Nodo SA:</strong> 60-100 lpm (dominante)
                                </div>
                                <div className="bg-white p-2 rounded text-sm">
                                    <strong>Nodo AV:</strong> 40-60 lpm (escape)
                                </div>
                                <div className="bg-white p-2 rounded text-sm">
                                    <strong>Ventrículos:</strong> 20-40 lpm (último recurso)
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-3">Propiedades Eléctricas:</h4>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Automaticidad:</strong> Generación espontánea de impulsos</li>
                                <li>• <strong>Excitabilidad:</strong> Respuesta a estímulos</li>
                                <li>• <strong>Conductividad:</strong> Transmisión de impulsos</li>
                                <li>• <strong>Contractilidad:</strong> Acortamiento de fibras</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-orange-800 mb-3">Velocidad de Conducción:</h4>
                            <ul className="space-y-1 text-gray-700 text-sm">
                                <li>• <strong>Fibras de Purkinje:</strong> 4 m/s (más rápida)</li>
                                <li>• <strong>Músculo auricular:</strong> 1 m/s</li>
                                <li>• <strong>Nodo AV:</strong> 0.05 m/s (más lenta)</li>
                                <li>• <strong>Músculo ventricular:</strong> 0.4 m/s</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}