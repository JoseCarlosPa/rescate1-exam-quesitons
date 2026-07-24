import {useState} from "react";
import {GiLinkedRings, GiBreakingChain} from "react-icons/gi";
import {MdCheckCircle} from "react-icons/md";
import {FaExclamationTriangle} from "react-icons/fa";

export default function Redundancy() {
    const [primaryFailed, setPrimaryFailed] = useState(false);

    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiLinkedRings className="w-6 h-6 mr-2 text-red-500"/>
                    Redundancia
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                    Las habilidades de rescate con cuerdas que enseñamos se basan en sistemas respaldados por
                    otro sistema — a esto se le llama sistema de doble cuerda (o dos cuerdas). Cada punto de
                    anclaje está respaldado por otro, y cada cuerda principal está asegurada (belay) por otra.
                    Pregúntate siempre: <strong>"Si esta parte del sistema o este punto de conexión falla, ¿qué me detendrá?"</strong>
                </p>

                <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                    <div className="flex justify-center mb-4">
                        <button
                            onClick={() => setPrimaryFailed(!primaryFailed)}
                            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2 rounded-lg shadow transition"
                        >
                            {primaryFailed ? 'Restablecer sistema' : 'Simular falla del sistema principal'}
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <div className={`flex-1 rounded-lg p-5 text-center border-2 transition-all ${
                            primaryFailed ? 'bg-red-50 border-red-400' : 'bg-blue-50 border-blue-300'
                        }`}>
                            {primaryFailed
                                ? <GiBreakingChain className="w-12 h-12 text-red-500 mx-auto mb-2"/>
                                : <GiLinkedRings className="w-12 h-12 text-blue-500 mx-auto mb-2"/>}
                            <p className="font-bold text-gray-800">Sistema Principal</p>
                            <p className="text-sm text-gray-600 mt-1">
                                {primaryFailed ? '¡Ha fallado!' : 'Cargando el peso normalmente'}
                            </p>
                        </div>

                        <div className="text-2xl text-gray-400 font-bold">+</div>

                        <div className={`flex-1 rounded-lg p-5 text-center border-2 transition-all ${
                            primaryFailed ? 'bg-green-50 border-green-400 scale-105' : 'bg-gray-50 border-gray-300'
                        }`}>
                            <MdCheckCircle className={`w-12 h-12 mx-auto mb-2 ${primaryFailed ? 'text-green-500' : 'text-gray-400'}`}/>
                            <p className="font-bold text-gray-800">Sistema de Aseguramiento (Belay)</p>
                            <p className="text-sm text-gray-600 mt-1">
                                {primaryFailed ? '¡Detiene la caída — el rescatista está seguro!' : 'En espera, listo como respaldo'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-lg">
                <div className="flex items-center mb-2">
                    <FaExclamationTriangle className="w-5 h-5 text-amber-600 mr-2"/>
                    <p className="font-bold text-amber-700">Los límites de la redundancia</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Existen límites en cuánto se puede llevar este enfoque. Puedes obsesionarte tanto con
                    respaldar todo que el sistema se vuelva tan complicado o tarde tanto en armarse que deje de
                    ser funcional. Mantener a tu operador de camilla colgado en el arnés mientras el sistema está
                    sobre-diseñado para el izado puede aumentar el riesgo para el rescatista y retrasar el
                    rescate de la víctima. Debes equilibrar la probabilidad de falla, las formas de minimizarla y
                    tus opciones de respaldo. Si decides continuar sin un respaldo, debes estar consciente de que
                    existe un eslabón débil crítico en tu cadena de seguridad.
                </p>
            </div>
        </div>
    );
}
