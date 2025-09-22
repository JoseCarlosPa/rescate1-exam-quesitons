import {FaFirstAid} from "react-icons/fa";
import {MdCheckCircle, MdWarning} from "react-icons/md";
import {FiAlertTriangle} from "react-icons/fi";

export default function Treatment() {
    return (
        <div className="space-y-8">
            {/* Algoritmo de manejo */}
            <div
                className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaFirstAid className="w-6 h-6 text-green-600 mr-2"/>
                    <h2 className="text-2xl font-bold text-green-800">Algoritmo de Manejo
                        Prehospitalario</h2>
                </div>
                <div className="grid md:grid-cols-5 gap-3">
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <div
                            className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">1
                        </div>
                        <h3 className="font-semibold text-red-600">Evaluación</h3>
                        <p className="text-xs text-gray-600">ABC, estado neurológico</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <div
                            className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">2
                        </div>
                        <h3 className="font-semibold text-orange-600">Control</h3>
                        <p className="text-xs text-gray-600">Hemorragias activas</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <div
                            className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">3
                        </div>
                        <h3 className="font-semibold text-yellow-600">Evaluación</h3>
                        <p className="text-xs text-gray-600">Neurovascular</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <div
                            className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">4
                        </div>
                        <h3 className="font-semibold text-green-600">Inmovilización</h3>
                        <p className="text-xs text-gray-600">Férulas apropiadas</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border text-center">
                        <div
                            className="w-8 h-8 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">5
                        </div>
                        <h3 className="font-semibold text-blue-600">Traslado</h3>
                        <p className="text-xs text-gray-600">Hospital apropiado</p>
                    </div>
                </div>
            </div>

            {/* Técnicas de inmovilización */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Técnicas
                    de Inmovilización</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-4">Principios
                            Básicos</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5"/>
                                <span>Inmovilizar articulación proximal y distal</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5"/>
                                <span>Evaluar pulso, sensibilidad y movimiento</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5"/>
                                <span>Alinear extremidad si no hay resistencia</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5"/>
                                <span>Aplicar tracción suave y constante</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5"/>
                                <span>Reevaluar después de inmovilizar</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-4">Contraindicaciones</h3>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start">
                                <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5"/>
                                <span>Fractura expuesta con fragmentos visibles</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5"/>
                                <span>Resistencia significativa al movimiento</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5"/>
                                <span>Pérdida de pulso durante la maniobra</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5"/>
                                <span>Luxaciones (inmovilizar como se encuentra)</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-5 h-5 text-red-500 mr-2 mt-0.5"/>
                                <span>Objetos empalados</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tipos de férulas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Tipos de
                    Férulas y Dispositivos</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-green-700 mb-2">Férulas Rígidas</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Tablillas de madera/metal</li>
                            <li>• Férulas de vacío</li>
                            <li>• Férulas inflables</li>
                        </ul>
                        <p className="text-xs text-green-600 mt-2">Mejor para fracturas de
                            huesos largos</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-blue-700 mb-2">Férulas Flexibles</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Vendajes elásticos</li>
                            <li>• Cabestrillos</li>
                            <li>• Férulas SAM</li>
                        </ul>
                        <p className="text-xs text-blue-600 mt-2">Ideal para lesiones
                            articulares</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-purple-700 mb-2">Férulas Especiales</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Férula de tracción</li>
                            <li>• Collares cervicales</li>
                            <li>• Tablero espinal</li>
                        </ul>
                        <p className="text-xs text-purple-600 mt-2">Para lesiones
                            específicas</p>
                    </div>
                </div>
            </div>

            {/* Manejo específico por lesión */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Manejo
                    Específico por Tipo de Lesión</h2>
                <div className="space-y-4">
                    <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-red-100 px-4 py-3 border-b">
                            <h3 className="font-bold text-red-700">Fracturas Expuestas</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Manejo
                                        inicial:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>1. Controlar hemorragia con presión directa</li>
                                        <li>2. Cubrir herida con apósito estéril húmedo</li>
                                        <li>3. NO intentar empujar hueso hacia adentro</li>
                                        <li>4. Inmovilizar en posición encontrada</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Consideraciones:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Alto riesgo de infección</li>
                                        <li>• Traslado urgente</li>
                                        <li>• Antibióticos en hospital</li>
                                        <li>• Documentar hora de lesión</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-blue-100 px-4 py-3 border-b">
                            <h3 className="font-bold text-blue-700">Luxaciones</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Manejo
                                        prehospitalario:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>1. Evaluar pulso distal inmediatamente</li>
                                        <li>2. Inmovilizar EN LA POSICIÓN ENCONTRADA</li>
                                        <li>3. NUNCA intentar reducir</li>
                                        <li>4. Aplicar hielo si es posible</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Signos de
                                        alerta:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Pérdida de pulso distal</li>
                                        <li>• Extremidad fría y pálida</li>
                                        <li>• Pérdida de sensibilidad</li>
                                        <li>• Deformidad severa</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-lg overflow-hidden">
                        <div className="bg-green-100 px-4 py-3 border-b">
                            <h3 className="font-bold text-green-700">Esguinces y
                                Distensiones</h3>
                        </div>
                        <div className="p-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Protocolo
                                        RICE:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li><strong>R</strong>eposo - Evitar movimiento</li>
                                        <li><strong>I</strong>ce - Hielo 15-20 minutos</li>
                                        <li><strong>C</strong>ompresión - Vendaje elástico</li>
                                        <li><strong>E</strong>levación - Elevar extremidad</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-2">Grados de
                                        severidad:</h4>
                                    <ul className="text-sm text-gray-700 space-y-1">
                                        <li>• Grado I: Estiramiento leve</li>
                                        <li>• Grado II: Desgarro parcial</li>
                                        <li>• Grado III: Desgarro completo</li>
                                        <li>• Evaluar necesidad de traslado</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Complicaciones */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Complicaciones a
                        Vigilar</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Inmediatas:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Shock hipovolémico</li>
                            <li>Daño neurovascular</li>
                            <li>Síndrome compartimental</li>
                            <li>Embolia grasa</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-2">Tardías:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Infección</li>
                            <li>Pseudoartrosis</li>
                            <li>Rigidez articular</li>
                            <li>Atrofia muscular</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}