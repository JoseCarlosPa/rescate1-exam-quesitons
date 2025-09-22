import {GiHeatHaze, GiIceCube, GiPoisonBottle, GiSpiderWeb} from "react-icons/gi";
import {BsDropletHalf} from "react-icons/bs";

export default function Types() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Clasificación de Emergencias
                Ambientales</h2>

            {/* Emergencias por temperatura */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-gradient-to-b from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                    <div className="flex items-center mb-4">
                        <GiHeatHaze className="w-8 h-8 text-red-500 mr-3"/>
                        <h3 className="text-xl font-bold text-red-700">Emergencias por Calor</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-red-600 mb-2">Calambres por Calor</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Espasmos musculares dolorosos</li>
                                <li>• Sudoración profusa</li>
                                <li>• Piel húmeda y caliente</li>
                                <li>• Paciente alerta</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-orange-600 mb-2">Agotamiento por Calor</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Debilidad y mareo</li>
                                <li>• Náuseas y vómitos</li>
                                <li>• Piel pálida y húmeda</li>
                                <li>• Temperatura normal o elevada</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-red-500">
                            <h4 className="font-semibold text-red-700 mb-2">⚠️ Golpe de Calor</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <strong>Alteración del estado mental</strong></li>
                                <li>• Temperatura corporal &gt;40°C</li>
                                <li>• Piel caliente y seca o húmeda</li>
                                <li>• ¡EMERGENCIA MÉDICA!</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-4">
                        <GiIceCube className="w-8 h-8 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">Emergencias por Frío</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-blue-600 mb-2">Congelación (Frostbite)</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Entumecimiento y hormigueo</li>
                                <li>• Piel enrojecida, después pálida</li>
                                <li>• Ampollas en casos severos</li>
                                <li>• Afecta extremidades</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <h4 className="font-semibold text-cyan-600 mb-2">Hipotermia Leve</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Escalofríos incontrolables</li>
                                <li>• Temperatura 32-35°C</li>
                                <li>• Pérdida de coordinación</li>
                                <li>• Paciente alerta</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-700 mb-2">⚠️ Hipotermia Severa</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• <strong>Alteración del estado mental</strong></li>
                                <li>• Temperatura &lt;32°C</li>
                                <li>• Rigidez muscular</li>
                                <li>• ¡EMERGENCIA MÉDICA!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Otras emergencias ambientales */}
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                    <div className="flex items-center mb-4">
                        <BsDropletHalf className="w-6 h-6 text-blue-600 mr-2"/>
                        <h3 className="text-lg font-bold text-blue-700">Ahogamiento</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-blue-600 text-sm mb-1">Agua Dulce</h4>
                            <p className="text-xs text-gray-600">Hemólisis, hipocalemia</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-blue-600 text-sm mb-1">Agua Salada</h4>
                            <p className="text-xs text-gray-600">Edema pulmonar, hipernatremia</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                            <p className="text-xs font-medium text-yellow-800">⚠️ Ambas pueden causar hipotermia</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border">
                    <div className="flex items-center mb-4">
                        <GiSpiderWeb className="w-6 h-6 text-green-600 mr-2"/>
                        <h3 className="text-lg font-bold text-green-700">Mordeduras y Picaduras</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-green-600 text-sm mb-1">Serpientes</h4>
                            <p className="text-xs text-gray-600">Coralillos, víboras</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-green-600 text-sm mb-1">Arañas</h4>
                            <p className="text-xs text-gray-600">Viuda negra, violinista</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-green-600 text-sm mb-1">Escorpiones</h4>
                            <p className="text-xs text-gray-600">Neurotoxinas</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-green-600 text-sm mb-1">Himenópteros</h4>
                            <p className="text-xs text-gray-600">Abejas, avispas</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                    <div className="flex items-center mb-4">
                        <GiPoisonBottle className="w-6 h-6 text-purple-600 mr-2"/>
                        <h3 className="text-lg font-bold text-purple-700">Intoxicaciones</h3>
                    </div>
                    <div className="space-y-2">
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-purple-600 text-sm mb-1">Monóxido de Carbono</h4>
                            <p className="text-xs text-gray-600">CO, incoloro, inodoro</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-purple-600 text-sm mb-1">Gases Industriales</h4>
                            <p className="text-xs text-gray-600">H₂S, NH₃, cloro</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-purple-600 text-sm mb-1">Plaguicidas</h4>
                            <p className="text-xs text-gray-600">Organofosforados</p>
                        </div>
                        <div className="bg-white p-3 rounded shadow-sm">
                            <h4 className="font-semibold text-purple-600 text-sm mb-1">Plantas</h4>
                            <p className="text-xs text-gray-600">Ricino, cicuta</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla de comparación rápida */}
            <div className="bg-gray-50 p-6 rounded-lg border">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Comparación Rápida - Signos Clave</h3>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">Emergencia</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Temperatura</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Piel</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Estado Mental</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Prioridad</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Golpe de Calor</td>
                            <td className="border border-gray-300 px-4 py-2">&gt;40°C</td>
                            <td className="border border-gray-300 px-4 py-2">Caliente, seca/húmeda</td>
                            <td className="border border-gray-300 px-4 py-2">Alterado</td>
                            <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">ALTA</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Hipotermia Severa</td>
                            <td className="border border-gray-300 px-4 py-2">&lt;32°C</td>
                            <td className="border border-gray-300 px-4 py-2">Fría, pálida</td>
                            <td className="border border-gray-300 px-4 py-2">Alterado</td>
                            <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">ALTA</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Ahogamiento</td>
                            <td className="border border-gray-300 px-4 py-2">Variable</td>
                            <td className="border border-gray-300 px-4 py-2">Cianótica, fría</td>
                            <td className="border border-gray-300 px-4 py-2">Alterado/Inconsciente</td>
                            <td className="border border-gray-300 px-4 py-2 text-red-600 font-bold">ALTA</td>
                        </tr>
                        <tr>
                            <td className="border border-gray-300 px-4 py-2 font-medium">Intoxicación CO</td>
                            <td className="border border-gray-300 px-4 py-2">Normal</td>
                            <td className="border border-gray-300 px-4 py-2">Rosada, normal</td>
                            <td className="border border-gray-300 px-4 py-2">Confusión</td>
                            <td className="border border-gray-300 px-4 py-2 text-orange-600 font-bold">MEDIA</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}