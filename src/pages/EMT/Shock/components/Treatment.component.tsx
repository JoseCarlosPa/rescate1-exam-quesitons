import {FaExclamationTriangle, FaHeartbeat, FaTachometerAlt, FaUserMd} from "react-icons/fa";
import {GiBlood} from "react-icons/gi";
import {BsShield} from "react-icons/bs";
import {BiPulse} from "react-icons/bi";


export default function Treatment(){
    return(
        <div className="space-y-8">
            {/* Protocolo de manejo inmediato */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Protocolo de Manejo
                        Inmediato</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                    <span
                                                        className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                            AIRWAY
                        </h3>
                        <ul className="text-sm space-y-1">
                            <li>• Asegurar vía aérea</li>
                            <li>• Aspirar secreciones</li>
                            <li>• Proteger columna cervical</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                    <span
                                                        className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                            BREATHING
                        </h3>
                        <ul className="text-sm space-y-1">
                            <li>• Oxígeno 15 L/min mascarilla</li>
                            <li>• Evaluar ventilación</li>
                            <li>• Asistir si es necesario</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                    <span
                                                        className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                            CIRCULATION
                        </h3>
                        <ul className="text-sm space-y-1">
                            <li>• Controlar hemorragias</li>
                            <li>• Evaluar perfusión</li>
                            <li>• Posición adecuada</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Manejo específico por tipo */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
                    Manejo Específico por Tipo de Shock
                </h2>
                <div className="space-y-6">
                    {/* Shock Hipovolémico */}
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                            <GiBlood className="w-6 h-6 mr-2"/>
                            Shock Hipovolémico
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-red-800 mb-3">Intervenciones
                                    Inmediatas:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Control de hemorragias:</strong>
                                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                            <li>Presión directa</li>
                                            <li>Elevación si es posible</li>
                                            <li>Torniquete si es necesario</li>
                                            <li>Vendaje de presión</li>
                                        </ul>
                                    </li>
                                    <li><strong>Posición:</strong> Supina con piernas elevadas
                                        8-12 pulgadas
                                    </li>
                                    <li><strong>Oxígeno:</strong> Alto flujo (15 L/min)</li>
                                    <li><strong>Temperatura:</strong> Mantener normotermia</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold text-red-800 mb-3">Monitorización:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Signos vitales cada 5 minutos</li>
                                    <li>Estado neurológico</li>
                                    <li>Llenado capilar</li>
                                    <li>Diuresis si es posible</li>
                                    <li>Saturación de oxígeno</li>
                                </ul>
                                <div className="bg-white p-3 rounded mt-4">
                                    <p className="text-sm font-medium text-red-700">
                                        ⚠️ NUNCA: Dar líquidos por vía oral en shock
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shock Cardiogénico */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                            <FaHeartbeat className="w-6 h-6 mr-2"/>
                            Shock Cardiogénico
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-3">Intervenciones
                                    Específicas:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Posición:</strong> Fowler (semi-sentado) si está
                                        consciente
                                    </li>
                                    <li><strong>Oxígeno:</strong> Alto flujo, considerar CPAP si
                                        disponible
                                    </li>
                                    <li><strong>Monitoreo cardiaco:</strong> ECG de 12
                                        derivaciones
                                    </li>
                                    <li><strong>Nitrogligerina:</strong> Solo si PAS {'>'} 100
                                        mmHg
                                    </li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-800 mb-3">Contraindicaciones:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Posición Trendelenburg</li>
                                    <li>Sobrecarga de líquidos</li>
                                    <li>Nitrogligerina si TA {'<'} 100</li>
                                </ul>
                                <div className="bg-white p-3 rounded mt-4">
                                    <p className="text-sm font-medium text-blue-700">
                                        💡 Objetivo: Reducir precarga y facilitar respiración
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shock Distributivo */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                            <FaUserMd className="w-6 h-6 mr-2"/>
                            Shock Distributivo (Anafiláctico)
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold text-green-800 mb-3">Protocolo
                                    Anafilaxia:</h4>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li><strong>Epinefrina IM:</strong>
                                        <ul className="list-disc list-inside ml-4 mt-1 space-y-1 text-sm">
                                            <li>Adultos: 0.3-0.5 mg (1:1000)</li>
                                            <li>Muslo anterolateral</li>
                                            <li>Repetir cada 5-15 min si necesario</li>
                                        </ul>
                                    </li>
                                    <li><strong>Oxígeno:</strong> Alto flujo</li>
                                    <li><strong>Posición:</strong> Supina si está hipotensa</li>
                                    <li><strong>Retirar alérgeno</strong> si es posible</li>
                                </ol>
                            </div>
                            <div>
                                <h4 className="font-semibold text-green-800 mb-3">Signos de
                                    Alarma:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Estridor o dificultad respiratoria</li>
                                    <li>Edema facial o de lengua</li>
                                    <li>Hipotensión severa</li>
                                    <li>Urticaria generalizada</li>
                                </ul>
                                <div className="bg-white p-3 rounded mt-4">
                                    <p className="text-sm font-medium text-green-700">
                                        🚨 La epinefrina es el medicamento de primera línea
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Índices y Calculadoras */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaTachometerAlt className="w-6 h-6 mr-2 text-orange-500"/>
                    Índices Hemodinámicos Importantes
                </h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-orange-700 mb-4">Índice de
                            Shock</h3>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <p className="text-center text-lg font-mono font-bold text-orange-800">
                                IS = FC / PAS
                            </p>
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li><strong>Normal:</strong> 0.5 - 0.7</li>
                            <li><strong>Shock leve:</strong> 0.7 - 0.9</li>
                            <li><strong>Shock severo:</strong> {'>'} 0.9</li>
                            <li><strong>Crítico:</strong> {'>'} 1.3</li>
                        </ul>
                    </div>

                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-blue-700 mb-4">Presión Arterial
                            Media</h3>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <p className="text-center text-lg font-mono font-bold text-blue-800">
                                PAM = (PAS + 2×PAD) / 3
                            </p>
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li><strong>Normal:</strong> 70-105 mmHg</li>
                            <li><strong>Perfusión mínima:</strong> {'>'} 65 mmHg</li>
                            <li><strong>Shock:</strong> {'<'} 65 mmHg</li>
                            <li><strong>Crítico:</strong> {'<'} 55 mmHg</li>
                        </ul>
                    </div>

                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                        <h3 className="text-lg font-bold text-purple-700 mb-4">Presión de
                            Pulso</h3>
                        <div className="bg-white p-4 rounded-lg mb-4">
                            <p className="text-center text-lg font-mono font-bold text-purple-800">
                                PP = PAS - PAD
                            </p>
                        </div>
                        <ul className="space-y-2 text-gray-700 text-sm">
                            <li><strong>Normal:</strong> 30-50 mmHg</li>
                            <li><strong>Estrecha:</strong> {'<'} 25 mmHg</li>
                            <li><strong>Amplia:</strong> {'>'} 60 mmHg</li>
                            <li><strong>Shock hipovolémico:</strong> Estrecha</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Algoritmo de decisión */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Algoritmo de Decisión de Transporte
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
                        <h4 className="font-bold text-yellow-800 mb-2">TRANSPORTE INMEDIATO</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• PAS {'<'} 90 mmHg</li>
                            <li>• Índice shock {'>'} 0.9</li>
                            <li>• Alteración consciencia</li>
                            <li>• Hemorragia no controlada</li>
                            <li>• Disnea severa</li>
                        </ul>
                    </div>
                    <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                        <h4 className="font-bold text-orange-800 mb-2">TRANSPORTE URGENTE</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• PAS 90-100 mmHg</li>
                            <li>• Índice shock 0.7-0.9</li>
                            <li>• Taquicardia persistente</li>
                            <li>• Llenado capilar {'>'} 2 seg</li>
                            <li>• Signos tempranos</li>
                        </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                        <h4 className="font-bold text-green-800 mb-2">MONITOREO CONTINUO</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Signos vitales normales</li>
                            <li>• Índice shock {'<'} 0.7</li>
                            <li>• Paciente estable</li>
                            <li>• Sin factores de riesgo</li>
                            <li>• Reevaluación frecuente</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Medicamentos y dosis */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BiPulse className="w-6 h-6 mr-2 text-orange-500"/>
                    Medicamentos de Emergencia
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-4 text-left">Medicamento</th>
                            <th className="py-3 px-4 text-left">Indicación</th>
                            <th className="py-3 px-4 text-left">Dosis</th>
                            <th className="py-3 px-4 text-left">Vía</th>
                            <th className="py-3 px-4 text-left">Precauciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Epinefrina</td>
                            <td className="py-3 px-4">Shock anafiláctico</td>
                            <td className="py-3 px-4">0.3-0.5 mg (1:1000)</td>
                            <td className="py-3 px-4">IM muslo</td>
                            <td className="py-3 px-4">Repetir cada 5-15 min</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Oxígeno</td>
                            <td className="py-3 px-4">Todos los tipos</td>
                            <td className="py-3 px-4">15 L/min</td>
                            <td className="py-3 px-4">Mascarilla</td>
                            <td className="py-3 px-4">Monitorizar saturación</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-3 px-4 font-medium">Nitroglicerina</td>
                            <td className="py-3 px-4">Shock cardiogénico</td>
                            <td className="py-3 px-4">0.4 mg SL</td>
                            <td className="py-3 px-4">Sublingual</td>
                            <td className="py-3 px-4">Solo si PAS {'>'} 100 mmHg</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium">Aspirina</td>
                            <td className="py-3 px-4">IAM con shock</td>
                            <td className="py-3 px-4">160-325 mg</td>
                            <td className="py-3 px-4">Oral (masticar)</td>
                            <td className="py-3 px-4">No si alergia o sangrado</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}