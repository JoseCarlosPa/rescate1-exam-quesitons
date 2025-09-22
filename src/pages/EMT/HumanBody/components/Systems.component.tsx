import {FaBone, FaBrain, FaHandSparkles, FaHeart, FaLungs} from "react-icons/fa";
import {GiKidneys, GiStomach} from "react-icons/gi";

export default function Systems(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistemas
                principales del cuerpo humano</h2>
            <p className="text-gray-600 mb-6">
                Como paramédico, es crucial entender cómo cada sistema puede verse afectado en
                emergencias y las interconexiones entre ellos.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Sistema Cardiovascular */}
                <div
                    className="bg-white border border-red-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaHeart className="w-8 h-8 text-red-500 mr-3"/>
                        <h3 className="text-xl font-bold text-red-700">Sistema
                            Cardiovascular</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Compuesto por corazón, sangre y vasos sanguíneos. Transporta oxígeno,
                        nutrientes y hormonas.
                    </p>
                    <div className="bg-red-50 p-3 rounded">
                        <strong className="text-red-800">Emergencias comunes:</strong>
                        <ul className="text-sm text-red-700 mt-1">
                            <li>• Infarto agudo de miocardio</li>
                            <li>• Shock hemorrágico</li>
                            <li>• Arritmias cardíacas</li>
                        </ul>
                    </div>
                </div>

                {/* Sistema Respiratorio */}
                <div
                    className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaLungs className="w-8 h-8 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">Sistema
                            Respiratorio</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Incluye vías aéreas, pulmones y músculos respiratorios. Intercambia
                        oxígeno y CO₂.
                    </p>
                    <div className="bg-blue-50 p-3 rounded">
                        <strong className="text-blue-800">Emergencias comunes:</strong>
                        <ul className="text-sm text-blue-700 mt-1">
                            <li>• Obstrucción de vía aérea</li>
                            <li>• Asma severa/broncoespasmo</li>
                            <li>• Neumotórax</li>
                        </ul>
                    </div>
                </div>

                {/* Sistema Nervioso */}
                <div
                    className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaBrain className="w-8 h-8 text-purple-500 mr-3"/>
                        <h3 className="text-xl font-bold text-purple-700">Sistema Nervioso</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Cerebro, médula espinal y nervios. Controla y coordina todas las
                        funciones corporales.
                    </p>
                    <div className="bg-purple-50 p-3 rounded">
                        <strong className="text-purple-800">Emergencias comunes:</strong>
                        <ul className="text-sm text-purple-700 mt-1">
                            <li>• Accidente cerebrovascular (ACV)</li>
                            <li>• Traumatismo craneoencefálico</li>
                            <li>• Convulsiones</li>
                        </ul>
                    </div>
                </div>

                {/* Sistema Musculoesquelético */}
                <div
                    className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaBone className="w-8 h-8 text-green-500 mr-3"/>
                        <h3 className="text-xl font-bold text-green-700">Sistema
                            Musculoesquelético</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Huesos, músculos, ligamentos y tendones. Proporciona soporte, protección
                        y movimiento.
                    </p>
                    <div className="bg-green-50 p-3 rounded">
                        <strong className="text-green-800">Emergencias comunes:</strong>
                        <ul className="text-sm text-green-700 mt-1">
                            <li>• Fracturas y luxaciones</li>
                            <li>• Lesiones de columna vertebral</li>
                            <li>• Trauma de extremidades</li>
                        </ul>
                    </div>
                </div>

                {/* Sistema Digestivo */}
                <div
                    className="bg-white border border-yellow-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <GiStomach className="w-8 h-8 text-yellow-600 mr-3"/>
                        <h3 className="text-xl font-bold text-yellow-700">Sistema Digestivo</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Órganos que procesan alimentos: boca, esófago, estómago, intestinos,
                        hígado, páncreas.
                    </p>
                    <div className="bg-yellow-50 p-3 rounded">
                        <strong className="text-yellow-800">Emergencias comunes:</strong>
                        <ul className="text-sm text-yellow-700 mt-1">
                            <li>• Abdomen agudo</li>
                            <li>• Hemorragia gastrointestinal</li>
                            <li>• Obstrucción intestinal</li>
                        </ul>
                    </div>
                </div>

                {/* Sistema Genitourinario */}
                <div
                    className="bg-white border border-indigo-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <GiKidneys className="w-8 h-8 text-indigo-500 mr-3"/>
                        <h3 className="text-xl font-bold text-indigo-700">Sistema
                            Genitourinario</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Riñones, vejiga, uréteres y órganos reproductivos. Filtra desechos y
                        mantiene equilibrio.
                    </p>
                    <div className="bg-indigo-50 p-3 rounded">
                        <strong className="text-indigo-800">Emergencias comunes:</strong>
                        <ul className="text-sm text-indigo-700 mt-1">
                            <li>• Insuficiencia renal aguda</li>
                            <li>• Retención urinaria</li>
                            <li>• Emergencias obstétricas</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-800 mb-3 flex items-center">
                    <FaHandSparkles className="mr-2"/>
                    Integración de sistemas en emergencias
                </h3>
                <p className="text-orange-700 mb-4">
                    Recuerda: Los sistemas del cuerpo están interconectados. Un problema en un
                    sistema afecta a otros.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                        <strong className="text-orange-800">Ejemplo 1:</strong>
                        <p className="text-sm text-orange-700 mt-1">
                            Shock hemorrágico → Sistema cardiovascular comprometido →
                            Hipoxia cerebral → Alteración del estado mental
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-orange-400">
                        <strong className="text-orange-800">Ejemplo 2:</strong>
                        <p className="text-sm text-orange-700 mt-1">
                            Neumotórax → Sistema respiratorio afectado →
                            Disminución del retorno venoso → Compromiso cardiovascular
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}