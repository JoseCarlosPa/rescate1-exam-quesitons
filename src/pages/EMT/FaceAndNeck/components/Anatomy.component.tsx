import {FaFirstAid, FaHeadSideVirus} from "react-icons/fa";
import {FiAlertTriangle} from "react-icons/fi";
import {MdWarning} from "react-icons/md";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Anatomía visual mejorada */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaHeadSideVirus className="w-6 h-6 mr-2 text-orange-500"/>
                    Anatomía Clínica de Cara y Cuello
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Estructuras
                                Faciales Críticas</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Huesos de la Cara</h4>
                                        <p className="text-sm text-gray-600">Maxilar superior,
                                            mandíbula, nasales, cigomáticos, orbitales</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Órbitas Oculares</h4>
                                        <p className="text-sm text-gray-600">7 huesos que
                                            protegen el globo ocular, músculos extraoculares,
                                            nervio óptico</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Cavidad Nasal</h4>
                                        <p className="text-sm text-gray-600">Septum nasal,
                                            cornetes, conexión con senos paranasales</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Cavidad Oral</h4>
                                        <p className="text-sm text-gray-600">32 dientes en
                                            adulto, lengua, paladar duro y blando</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                            <h3 className="text-xl font-bold text-red-700 mb-4">Estructuras del
                                Cuello</h3>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Vía Aérea</h4>
                                        <p className="text-sm text-gray-600">Laringe (epiglotis,
                                            cuerdas vocales), tráquea</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Grandes Vasos</h4>
                                        <p className="text-sm text-gray-600">Arterias carótidas,
                                            venas yugulares internas/externas</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Columna Cervical</h4>
                                        <p className="text-sm text-gray-600">7 vértebras
                                            cervicales (C1-C7), médula espinal</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Otras Estructuras</h4>
                                        <p className="text-sm text-gray-600">Esófago, glándula
                                            tiroides, nervios craneales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-start">
                        <div className="text-center">
                            <div className="bg-gray-100 p-4 rounded-lg mb-4">
                                <div className="text-6xl mb-2">👤</div>
                                <p className="text-sm text-gray-600">Anatomía de cabeza y
                                    cuello</p>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="bg-blue-100 p-2 rounded text-blue-700">Cara
                                </div>
                                <div className="bg-red-100 p-2 rounded text-red-700">Cuello
                                </div>
                                <div className="bg-green-100 p-2 rounded text-green-700">Vía
                                    Aérea
                                </div>
                                <div
                                    className="bg-purple-100 p-2 rounded text-purple-700">Vasos
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Zonas anatómicas del cuello */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                    <FaFirstAid className="w-5 h-5 mr-2"/>
                    Zonas Anatómicas del Cuello (Importancia Clínica)
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-orange-800 mb-2">Zona I (Base)</h4>
                        <p className="text-sm text-gray-600 mb-2">Desde clavículas hasta
                            cartílago cricoides</p>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Vasos subclavios</li>
                            <li>• Vértice pulmonar</li>
                            <li>• Esófago superior</li>
                            <li>• Tráquea inferior</li>
                        </ul>
                        <p className="text-xs text-red-600 mt-2"><strong>Alta
                            mortalidad</strong></p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-orange-800 mb-2">Zona II (Media)</h4>
                        <p className="text-sm text-gray-600 mb-2">Desde cricoides hasta ángulo
                            mandibular</p>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Carótidas</li>
                            <li>• Yugulares</li>
                            <li>• Laringe</li>
                            <li>• Faringe/esófago</li>
                        </ul>
                        <p className="text-xs text-green-600 mt-2"><strong>Más
                            accesible</strong></p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-orange-800 mb-2">Zona III (Superior)</h4>
                        <p className="text-sm text-gray-600 mb-2">Desde ángulo mandibular hasta
                            base del cráneo</p>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Carótida interna</li>
                            <li>• Vértebras cervicales altas</li>
                            <li>• Nervios craneales</li>
                            <li>• Faringe superior</li>
                        </ul>
                        <p className="text-xs text-orange-600 mt-2"><strong>Difícil
                            acceso</strong></p>
                    </div>
                </div>
            </div>

            {/* Diferencias anatómicas por edad */}
            <div>
                <h3 className="text-xl font-semibold mb-4">Diferencias Anatómicas Importantes
                    por Edad</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 border text-left">Estructura</th>
                            <th className="py-3 px-4 border text-center">Lactantes/Niños</th>
                            <th className="py-3 px-4 border text-center">Adultos</th>
                            <th className="py-3 px-4 border text-center">Adultos Mayores</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Cabeza</td>
                            <td className="py-3 px-4 border text-center text-sm">Proporcionalmente
                                más grande
                            </td>
                            <td className="py-3 px-4 border text-center text-sm">Proporcional</td>
                            <td className="py-3 px-4 border text-center text-sm">Menor masa
                                muscular
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Lengua</td>
                            <td className="py-3 px-4 border text-center text-sm">Más grande
                                relativamente
                            </td>
                            <td className="py-3 px-4 border text-center text-sm">Normal</td>
                            <td className="py-3 px-4 border text-center text-sm">Pérdida de
                                tono
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Laringe</td>
                            <td className="py-3 px-4 border text-center text-sm">Más alta y
                                anterior
                            </td>
                            <td className="py-3 px-4 border text-center text-sm">C5-C6</td>
                            <td className="py-3 px-4 border text-center text-sm">Cartílagos
                                calcificados
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Epiglotis</td>
                            <td className="py-3 px-4 border text-center text-sm">Más grande y
                                blanda
                            </td>
                            <td className="py-3 px-4 border text-center text-sm">Firme</td>
                            <td className="py-3 px-4 border text-center text-sm">Rígida</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Vía aérea</td>
                            <td className="py-3 px-4 border text-center text-sm">Estrecha a
                                nivel cricoides
                            </td>
                            <td className="py-3 px-4 border text-center text-sm">Estrecha a
                                nivel cuerdas
                            </td>
                            <td className="py-3 px-4 border text-center text-sm">Reducida
                                elasticidad
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Puntos vulnerables */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                    <FiAlertTriangle className="w-5 h-5 mr-2"/>
                    Puntos Anatómicos Vulnerables - Conocimiento Critical
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3">Estructuras de Alto
                            Riesgo:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Triángulo anterior del cuello:</strong> Carótidas, yugulares, tráquea</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Órbita ocular:</strong> Fractura por estallido común</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Hueso nasal:</strong> Fractura facial más común</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Mandíbula:</strong> Fractura bilateral frecuente</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3">Implicaciones
                            Clínicas:</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Trauma facial severo = sospechar LCT</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Lesión por encima de clavículas = C-spine</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Ojo de mapache = fractura base cráneo</span>
                            </li>
                            <li className="flex items-start">
                                <MdWarning className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Battle sign = fractura temporal</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}