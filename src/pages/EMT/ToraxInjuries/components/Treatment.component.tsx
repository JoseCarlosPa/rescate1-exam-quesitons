import {FaExclamationTriangle, FaFirstAid, FaHeartbeat} from "react-icons/fa";
import {FiActivity, FiAlertTriangle} from "react-icons/fi";

export default function Treatment(){
    return (
        <div className="space-y-8">
            {/* Algoritmo de manejo */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                    Algoritmo de Manejo Prehospitalario
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-red-100 p-4 rounded-lg border-l-4 border-red-500">
                            <h3 className="font-bold text-red-700 mb-2">1. Evaluación
                                Inicial</h3>
                            <ul className="text-sm space-y-1">
                                <li>• Protocolo XABCDE</li>
                                <li>• Control de hemorragias</li>
                                <li>• Oxígeno alto flujo</li>
                                <li>• Monitorización continua</li>
                            </ul>
                        </div>
                        <div
                            className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
                            <h3 className="font-bold text-yellow-700 mb-2">2.
                                Intervenciones</h3>
                            <ul className="text-sm space-y-1">
                                <li>• Sellado de heridas</li>
                                <li>• Soporte ventilatorio</li>
                                <li>• Acceso vascular</li>
                                <li>• Manejo del dolor</li>
                            </ul>
                        </div>
                        <div
                            className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                            <h3 className="font-bold text-green-700 mb-2">3. Transporte</h3>
                            <ul className="text-sm space-y-1">
                                <li>• Centro de trauma</li>
                                <li>• Comunicación temprana</li>
                                <li>• Monitorización continua</li>
                                <li>• Preparar para deterioro</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tratamientos específicos */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo
                    Específico por Lesión</h2>
                <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                            <h3 className="text-xl font-bold text-red-800">Neumotórax
                                Abierto</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Objetivo:</h4>
                                <p className="text-sm text-gray-700 mb-3">Convertir neumotórax
                                    abierto en cerrado, evitando tensión</p>
                                <h4 className="font-semibold mb-2">Procedimiento:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Sellar inmediatamente con apósito oclusivo</li>
                                    <li>Fijar en 3 lados (válvula unidireccional)</li>
                                    <li>Monitorizar signos de tensión</li>
                                    <li>Si se desarrolla tensión: levantar un lado</li>
                                </ol>
                            </div>
                            <div className="bg-white p-4 rounded">
                                <h4 className="font-semibold mb-2 text-red-700">Material
                                    preferido:</h4>
                                <ul className="text-sm space-y-1">
                                    <li>• Parche torácico comercial con válvula</li>
                                    <li>• Plástico estéril + cinta adhesiva</li>
                                    <li>• Gasas vaselinadas</li>
                                </ul>
                                <p className="text-xs text-red-600 mt-2 font-medium">
                                    ⚠️ NUNCA sellar completamente
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <FiAlertTriangle className="w-6 h-6 text-orange-600 mr-2"/>
                            <h3 className="text-xl font-bold text-orange-800">Neumotórax a
                                Tensión</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Reconocimiento:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Disnea severa progresiva</li>
                                    <li>Taquicardia</li>
                                    <li>Hipotensión</li>
                                    <li>Ingurgitación yugular</li>
                                    <li>Ausencia de ruidos respiratorios</li>
                                    <li>Desviación traqueal (tardío)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Manejo inmediato:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Si hay sello: levantar momentáneamente</li>
                                    <li>Oxígeno a alto flujo</li>
                                    <li>Preparar para descompresión</li>
                                    <li>Si paramédico autorizado: descompresión con aguja</li>
                                    <li>Transporte inmediato</li>
                                </ol>
                                <div className="bg-orange-100 p-2 rounded mt-3">
                                    <p className="text-xs text-orange-700 font-medium">
                                        Localización: 2º EIC línea medio-clavicular o 5º EIC
                                        línea axilar anterior
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <FiActivity className="w-6 h-6 text-yellow-600 mr-2"/>
                            <h3 className="text-xl font-bold text-yellow-800">Tórax
                                Inestable</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Principio clave:</h4>
                                <p className="text-sm text-gray-700 bg-yellow-100 p-3 rounded">
                                    La amenaza principal NO es el segmento inestable, sino la
                                    contusión pulmonar subyacente
                                </p>
                                <h4 className="font-semibold mb-2 mt-3">Objetivos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Mejorar oxigenación</li>
                                    <li>Soporte ventilatorio</li>
                                    <li>Manejo del dolor</li>
                                    <li>Prevenir complicaciones</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Manejo:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Oxígeno a alto flujo</li>
                                    <li>Ventilación con presión positiva si es necesario</li>
                                    <li>Posición de comodidad</li>
                                    <li>Evitar inmovilización externa</li>
                                    <li>Analgesia según protocolo</li>
                                </ol>
                                <div className="bg-red-100 p-2 rounded mt-3">
                                    <p className="text-xs text-red-700 font-medium">
                                        ❌ NO colocar objetos pesados sobre el segmento
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-center mb-4">
                            <FaHeartbeat className="w-6 h-6 text-blue-600 mr-2"/>
                            <h3 className="text-xl font-bold text-blue-800">Hemotórax
                                Masivo</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold mb-2">Reconocimiento:</h4>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Signos de shock hipovolémico</li>
                                    <li>Ruidos respiratorios disminuidos</li>
                                    <li>Matidez a la percusión</li>
                                    <li>Disnea</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Manejo prehospitalario:</h4>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Oxígeno a alto flujo</li>
                                    <li>Dos vías IV o IO de gran calibre</li>
                                    <li>Reanimación con fluidos controlada</li>
                                    <li>Mantener TAS &gt;90 mmHg</li>
                                    <li>Transporte inmediato a trauma center</li>
                                </ol>
                                <div className="bg-blue-100 p-2 rounded mt-3">
                                    <p className="text-xs text-blue-700 font-medium">
                                        Hipotensión permisiva hasta control quirúrgico
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Medicamentos y soporte */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-800 mb-4">Soporte Farmacológico y No
                    Farmacológico</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-700 mb-2">Oxigenoterapia:</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Mascarilla no recirculante 15L/min</li>
                            <li>• Objetivo SpO₂ &gt;94%</li>
                            <li>• BVM si ventilación inadecuada</li>
                            <li>• CPAP si disponible y apropiado</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-700 mb-2">Analgesia (según
                            protocolo):</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Morfina 2-4mg IV/IO</li>
                            <li>• Fentanilo 50-100mcg IV/IO</li>
                            <li>• Evitar depresión respiratoria</li>
                            <li>• Monitorización estrecha</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-green-700 mb-2">Posicionamiento:</h4>
                        <ul className="text-sm space-y-1">
                            <li>• Semisentado si tolera</li>
                            <li>• Lado afectado hacia abajo</li>
                            <li>• Evitar supino si es posible</li>
                            <li>• Inmovilización espinal si indica</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}