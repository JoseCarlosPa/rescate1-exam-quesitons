import {GiBrokenBone} from "react-icons/gi";
import {FaExclamationTriangle, FaEye, FaHeartbeat} from "react-icons/fa";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Anatomía interactiva */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiBrokenBone className="w-6 h-6 mr-2 text-orange-500"/>
                    Anatomía y Fisiología del Sistema Musculoesquelético
                </h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                            <h3 className="text-xl font-bold text-blue-700 mb-4">Componentes
                                Óseos</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Hueso Cortical</h4>
                                        <p className="text-sm text-gray-600">Capa externa densa,
                                            proporciona resistencia estructural</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Hueso Esponjoso</h4>
                                        <p className="text-sm text-gray-600">Interior poroso,
                                            contiene médula ósea</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Periostio</h4>
                                        <p className="text-sm text-gray-600">Membrana que cubre
                                            el hueso, rica en vasos sanguíneos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                            <h3 className="text-xl font-bold text-green-700 mb-4">Tejidos
                                Blandos</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Músculos</h4>
                                        <p className="text-sm text-gray-600">Generan movimiento
                                            y estabilidad</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Tendones</h4>
                                        <p className="text-sm text-gray-600">Conectan músculo
                                            con hueso</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Ligamentos</h4>
                                        <p className="text-sm text-gray-600">Conectan hueso con
                                            hueso</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <h3 className="text-xl font-bold text-purple-700 mb-4">Articulaciones</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Sinoviales</h4>
                                        <p className="text-sm text-gray-600">Móviles, con
                                            líquido sinovial</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Cartilaginosas</h4>
                                        <p className="text-sm text-gray-600">Semimóviles, unidas
                                            por cartílago</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div
                                        className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
                                    <div>
                                        <h4 className="font-semibold">Fibrosas</h4>
                                        <p className="text-sm text-gray-600">Inmóviles, unidas
                                            por tejido fibroso</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-start">
                        <div className="text-center">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Human_skeleton_front_es.svg"
                                alt="Anatomía del sistema musculoesquelético"
                                className="rounded-lg shadow-lg max-w-full h-auto mb-4"
                            />
                            <p className="text-sm text-gray-600 italic">Sistema
                                musculoesquelético completo</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Datos críticos de anatomía */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-6 h-6 text-red-600 mr-2"/>
                    <h3 className="text-xl font-bold text-red-800">Datos Críticos - Irrigación y
                        Inervación</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3">Irrigación
                            Sanguínea</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Arteria femoral: irriga extremidad inferior</span>
                            </li>
                            <li className="flex items-start">
                                <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Arteria braquial: irriga extremidad superior</span>
                            </li>
                            <li className="flex items-start">
                                <FaHeartbeat className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Circulación colateral: vías alternativas</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-3">Inervación</h4>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Nervio ciático: extremidad inferior</span>
                            </li>
                            <li className="flex items-start">
                                <FaEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Nervio radial: extremidad superior</span>
                            </li>
                            <li className="flex items-start">
                                <FaEye className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span>Compromiso = pérdida de función</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Evaluación neurovascular */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Evaluación
                    Neurovascular - Las 5 P&apos;s</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-red-700 mb-2">Pain (Dolor)</h3>
                        <p className="text-sm text-gray-600">Desproporcionado al tipo de
                            lesión</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-orange-50 to-orange-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-orange-700 mb-2">Paresthesias</h3>
                        <p className="text-sm text-gray-600">Hormigueo, entumecimiento</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-yellow-700 mb-2">Pallor (Palidez)</h3>
                        <p className="text-sm text-gray-600">Extremidad fría y pálida</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-green-700 mb-2">Paralysis (Parálisis)</h3>
                        <p className="text-sm text-gray-600">Pérdida de movimiento</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-blue-700 mb-2">Pulselessness</h3>
                        <p className="text-sm text-gray-600">Ausencia de pulso distal</p>
                    </div>
                    <div
                        className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                        <h3 className="font-bold text-purple-700 mb-2">Pressure (Presión)</h3>
                        <p className="text-sm text-gray-600">Compartimentos tensos</p>
                    </div>
                </div>
            </div>

            {/* Patofisiología de las fracturas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Patofisiología
                    de las Fracturas</h2>
                <div
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border">
                    <h3 className="text-xl font-bold text-indigo-700 mb-4">Proceso de Curación
                        Ósea</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded border text-center">
                            <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                            <h4 className="font-semibold text-red-600">Fase 1</h4>
                            <p className="text-xs text-gray-600">Hematoma e inflamación</p>
                        </div>
                        <div className="bg-white p-4 rounded border text-center">
                            <div
                                className="w-8 h-8 bg-orange-500 rounded-full mx-auto mb-2"></div>
                            <h4 className="font-semibold text-orange-600">Fase 2</h4>
                            <p className="text-xs text-gray-600">Formación de callo blando</p>
                        </div>
                        <div className="bg-white p-4 rounded border text-center">
                            <div
                                className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                            <h4 className="font-semibold text-yellow-600">Fase 3</h4>
                            <p className="text-xs text-gray-600">Formación de callo duro</p>
                        </div>
                        <div className="bg-white p-4 rounded border text-center">
                            <div
                                className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                            <h4 className="font-semibold text-green-600">Fase 4</h4>
                            <p className="text-xs text-gray-600">Remodelación</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}