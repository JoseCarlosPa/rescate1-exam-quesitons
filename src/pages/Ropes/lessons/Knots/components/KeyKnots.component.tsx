import { GiRopeCoil } from "react-icons/gi";

export default function KeyKnots() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <GiRopeCoil className="w-6 h-6 mr-2 text-blue-600" />
                    Los 4 Nudos Clave para Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Según el manual CMC, hay cuatro nudos fundamentales que se usan frecuentemente en incidentes de rescate.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                
                {/* 1. Nudo de Agua */}
                <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm hover:border-blue-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">1</span>
                        <h3 className="font-bold text-gray-800 text-lg">Nudo de Agua (Water Knot)</h3>
                    </div>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Water_knot_ab.jpg" 
                        alt="Nudo de Agua" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-3 flex-grow">
                        También llamado "Overhand bend" o "Ring bend". Se usa exclusivamente para conectar dos extremos de cinta tubular (webbing).
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 mt-auto">
                        <strong>Eficiencia:</strong> ~ 64% <br/>
                        <strong>Uso:</strong> Crear anillas de cinta (runners) para anclajes.
                    </div>
                </div>

                {/* 2. Round Turn & 2 Half Hitches */}
                <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm hover:border-blue-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">2</span>
                        <h3 className="font-bold text-gray-800 text-lg">Vuelta Redonda y Dos Cotes</h3>
                    </div>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Round_turn_and_two_half_hitches.jpg" 
                        alt="Vuelta Redonda y Dos Cotes" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-3 flex-grow">
                        Round Turn and Two Half-Hitches. Se usa para conectar cinta al riel de una camilla al atar a un paciente. La carga principal va a la vuelta redonda (fricción).
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 mt-auto">
                        <strong>Ventaja:</strong> Puede apretarse bien antes de terminar el nudo. A veces se sustituye por el Ballestrinque (Clove Hitch) rematado.
                    </div>
                </div>

                {/* 3. Prusik Hitch */}
                <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm hover:border-blue-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">3</span>
                        <h3 className="font-bold text-gray-800 text-lg">Prusik Hitch</h3>
                    </div>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Prusik_knot.jpg" 
                        alt="Prusik Hitch" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-3 flex-grow">
                        El nudo de fricción / agarre preferido. Es compacto y muerde la cuerda cuando se tira en cualquier dirección.
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 mt-auto">
                        <strong>Uso:</strong> Trinquete (ratchet), auto-aseguramiento, pedales. <br/>
                        <strong>Técnica:</strong> Suele usarse la versión de 3 vueltas (3-wrap) en rescate para mayor mordida.
                    </div>
                </div>

                {/* 4. Figure 8 on a Bight */}
                <div className="bg-white border-2 border-blue-100 rounded-xl p-5 shadow-sm hover:border-blue-300 transition-colors flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">4</span>
                        <h3 className="font-bold text-gray-800 text-lg">Figura 8 en Gasa (On a Bight)</h3>
                    </div>
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Figure-eight_loop.jpg" 
                        alt="Figura 8 en Gasa" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-600 mb-3 flex-grow">
                        Crea un lazo (loop) súper seguro en el extremo o medio de la cuerda para conectar un mosquetón.
                    </p>
                    <div className="bg-gray-50 p-3 rounded text-xs text-gray-700 mt-auto">
                        <strong>Familia 8:</strong> Básicos, fáciles de inspeccionar, retienen buena resistencia (aprox. 80%). <br/>
                        <strong>Variantes:</strong> Follow-Through (para atar alrededor de árboles), Bend (para unir cuerdas).
                    </div>
                </div>

            </div>
        </div>
    );
}
