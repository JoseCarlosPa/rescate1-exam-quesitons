import {FaExclamationTriangle, FaFirstAid} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {BsLightbulb} from "react-icons/bs";
import {MdCheckCircle} from "react-icons/md";

export default function Techniques() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                Técnicas y Dispositivos para Manejo de Vía Aérea
            </h2>

            {/* Maniobras manuales */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                    <FiUser className="w-5 h-5 mr-2"/>
                    Maniobras Manuales Básicas
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-green-700 mb-3">✅ SIN Trauma Cervical</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-semibold mb-2">Maniobra Frente-Mentón</h5>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Una mano en la frente del paciente</li>
                                    <li>Inclinar la cabeza hacia atrás suavemente</li>
                                    <li>Dos dedos bajo el mentón, elevar</li>
                                    <li>Evitar presión en tejidos blandos del cuello</li>
                                </ol>
                            </div>
                            <div className="bg-green-50 p-3 rounded">
                                <p className="text-sm"><strong>Eficacia:</strong> 90% de
                                    obstrucciones por lengua</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                        <h4 className="font-bold text-red-700 mb-3">⚠️ CON Trauma Cervical</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-semibold mb-2">Tracción Mandibular</h5>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Mantener inmovilización cervical</li>
                                    <li>Colocar dedos en ángulos mandibulares</li>
                                    <li>Traccionar mandíbula hacia adelante</li>
                                    <li>NO mover la cabeza ni el cuello</li>
                                </ol>
                            </div>
                            <div className="bg-red-50 p-3 rounded">
                                <p className="text-sm"><strong>Cuidado:</strong> Mantener
                                    alineación cervical en todo momento</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dispositivos básicos */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dispositivos Básicos de Vía
                    Aérea</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h4 className="font-bold text-orange-700 mb-3">Cánula Orofaríngea
                            (OPA)</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-semibold mb-2">Indicaciones:</h5>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Paciente inconsciente (GCS ≤8)</li>
                                    <li>Sin reflejo nauseoso</li>
                                    <li>Obstrucción por relajación de lengua</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Medición:</h5>
                                <p className="text-sm text-gray-700">Desde comisura labial hasta
                                    ángulo mandibular</p>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Técnica de inserción:</h5>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Medir el dispositivo</li>
                                    <li>Abrir la boca (tijera o dedos cruzados)</li>
                                    <li>Insertar con curvatura hacia arriba</li>
                                    <li>Rotar 180° al llegar a paladar duro</li>
                                    <li>Avanzar hasta que el reborde quede en los labios</li>
                                </ol>
                            </div>
                            <div className="bg-red-100 p-3 rounded">
                                <p className="text-sm text-red-700">
                                    <strong>Contraindicación:</strong> Paciente consciente o con
                                    reflejo nauseoso activo</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="font-bold text-blue-700 mb-3">Cánula Nasofaríngea
                            (NPA)</h4>
                        <div className="space-y-4">
                            <div>
                                <h5 className="font-semibold mb-2">Indicaciones:</h5>
                                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                    <li>Paciente semiconsciente</li>
                                    <li>Con reflejo nauseoso presente</li>
                                    <li>Trauma facial que impide OPA</li>
                                    <li>Trismus (mandíbula cerrada)</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Medición:</h5>
                                <p className="text-sm text-gray-700">Desde punta de nariz hasta
                                    lóbulo de oreja</p>
                            </div>
                            <div>
                                <h5 className="font-semibold mb-2">Técnica de inserción:</h5>
                                <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                    <li>Lubricar con gel hidrosoluble</li>
                                    <li>Insertar con bisel hacia septum</li>
                                    <li>Avanzar con movimiento rotatorio suave</li>
                                    <li>Si hay resistencia, intentar otra fosa</li>
                                    <li>El reborde debe quedar en la fosa nasal</li>
                                </ol>
                            </div>
                            <div className="bg-red-100 p-3 rounded">
                                <p className="text-sm text-red-700">
                                    <strong>Contraindicación:</strong> Trauma facial severo,
                                    fractura de base de cráneo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ventilación con BVM */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4">Ventilación con
                    Bolsa-Válvula-Mascarilla (BVM)</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold mb-3">Técnica de sellado (EC)</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>E:</strong> Formar "E" con dedos 3, 4 y 5 en mandíbula
                            </li>
                            <li><strong>C:</strong> Formar "C" con pulgar e índice sobre
                                mascarilla
                            </li>
                            <li>Sellado hermético nariz-boca-mentón</li>
                            <li>Elevar mandíbula hacia mascarilla (no presionar mascarilla hacia
                                abajo)
                            </li>
                        </ol>
                        <div className="bg-yellow-100 p-3 rounded mt-4">
                            <p className="text-sm"><strong>Parámetros:</strong></p>
                            <ul className="text-sm space-y-1">
                                <li>• Adultos: 500-600ml cada 6-8 segundos</li>
                                <li>• Niños: 6-8ml/kg cada 3-5 segundos</li>
                                <li>• Observar elevación torácica</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Problemas comunes y soluciones</h4>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h5 className="font-medium text-red-600">Problema: Fuga de
                                    aire</h5>
                                <p className="text-sm">Solución: Reajustar sellado EC, verificar
                                    tamaño de mascarilla</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h5 className="font-medium text-red-600">Problema: No se eleva
                                    el tórax</h5>
                                <p className="text-sm">Solución: Verificar permeabilidad vía
                                    aérea, aspirar secreciones</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <h5 className="font-medium text-red-600">Problema: Distensión
                                    gástrica</h5>
                                <p className="text-sm">Solución: Reducir volumen, ventilación
                                    más lenta</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Oxigenoterapia */}
            <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dispositivos de
                    Oxigenoterapia</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 border text-left">Dispositivo</th>
                            <th className="py-3 px-4 border text-center">FiO₂</th>
                            <th className="py-3 px-4 border text-center">Flujo (L/min)</th>
                            <th className="py-3 px-4 border text-left">Indicaciones</th>
                            <th className="py-3 px-4 border text-left">Consideraciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Cánula nasal</td>
                            <td className="py-3 px-4 border text-center text-blue-600">24-44%</td>
                            <td className="py-3 px-4 border text-center">1-6</td>
                            <td className="py-3 px-4 border">Hipoxemia leve, paciente
                                consciente
                            </td>
                            <td className="py-3 px-4 border">Cómoda, permite hablar y comer</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Mascarilla simple</td>
                            <td className="py-3 px-4 border text-center text-green-600">35-50%</td>
                            <td className="py-3 px-4 border text-center">5-10</td>
                            <td className="py-3 px-4 border">Hipoxemia moderada</td>
                            <td className="py-3 px-4 border">Mínimo 5L/min para evitar
                                rebreathing
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Mascarilla con
                                reservorio
                            </td>
                            <td className="py-3 px-4 border text-center text-orange-600">60-95%</td>
                            <td className="py-3 px-4 border text-center">10-15</td>
                            <td className="py-3 px-4 border">Hipoxemia severa</td>
                            <td className="py-3 px-4 border">Mantener bolsa inflada durante
                                espiración
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">BVM con reservorio</td>
                            <td className="py-3 px-4 border text-center text-red-600">90-100%</td>
                            <td className="py-3 px-4 border text-center">15</td>
                            <td className="py-3 px-4 border">Insuficiencia respiratoria, apnea
                            </td>
                            <td className="py-3 px-4 border">Ventilación asistida/controlada
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Consejos prácticos mejorados */}
            <div
                className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                    <BsLightbulb className="w-5 h-5 mr-2"/>
                    Consejos Prácticos del Experto
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Técnicas
                            avanzadas:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>Técnica de dos operadores para BVM si es posible</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>BURP (Backward, Upward, Rightward Pressure) para visualización</span>
                            </li>
                            <li className="flex items-start">
                                <MdCheckCircle className="w-4 h-4 mt-1 mr-2 text-green-500"/>
                                <span>Posición olfateo en lactantes (sin hiperextensión)</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Errores a
                            evitar:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaExclamationTriangle
                                    className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>Ventilación demasiado rápida o con mucho volumen</span>
                            </li>
                            <li className="flex items-start">
                                <FaExclamationTriangle
                                    className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>Presión excesiva en mascarilla (causa fugas)</span>
                            </li>
                            <li className="flex items-start">
                                <FaExclamationTriangle
                                    className="w-4 h-4 mt-1 mr-2 text-red-500"/>
                                <span>No reevaluar permeabilidad constantemente</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}