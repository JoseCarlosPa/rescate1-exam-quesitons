import { MdShield } from "react-icons/md";
import { FaWind, FaSun } from "react-icons/fa";


export default function Protection() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Protección Ambiental y Física
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Una persona atada en una camilla es vulnerable a factores que estando de pie no representarían un peligro grave.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                {/* Clima */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaWind className="w-5 h-5 text-blue-500" />
                        <h3 className="font-bold text-gray-800">El Clima y la Hipotermia</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Al no poder moverse, un paciente mojado no puede generar calor temblando eficientemente. 
                    </p>
                    <ul className="text-sm list-disc list-inside space-y-1 text-gray-600">
                        <li><strong>Helicópteros:</strong> El aire a alta velocidad del "Rotor Wash" acelera la hipotermia severa y lanza escombros.</li>
                        <li><strong>Lluvia:</strong> Envuelva en mantas y cobertor plástico/bivouac en climas adversos.</li>
                    </ul>
                </div>

                {/* Sol */}
                <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaSun className="w-5 h-5 text-orange-500" />
                        <h3 className="font-bold text-gray-800">Cuidado del Sol</h3>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                        Estar mirando hacia arriba sin poder cubrirse los ojos causa dolor y quemaduras solares graves en una evacuación larga.
                    </p>
                    <ul className="text-sm list-disc list-inside space-y-1 text-gray-600">
                        <li>Dele gafas de sol si no usa un escudo opaco.</li>
                        <li>Posicione a los rescatistas para hacerle sombra si están detenidos.</li>
                        <li><em>Evite telas opacas directo sobre la cara que induzcan pánico asfixiante.</em></li>
                    </ul>
                </div>

                {/* Litter Shield */}
                <div className="md:col-span-2 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-xl p-6 text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-3 border-b border-blue-700 pb-2">
                        <MdShield className="w-6 h-6 text-blue-300" />
                        <h3 className="font-bold text-lg">El Uso del Litter Shield</h3>
                    </div>
                    <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                        El Litter Shield es un domo transparente que se coloca en la cabecera. Es preferible al casco porque protege toda la cara, deflacta ramas ("brush") y rocas ("rockfall") y permite visualizar la vía aérea del paciente.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-blue-800 bg-opacity-50 p-3 rounded text-sm">
                            <span className="font-bold text-white block mb-1">Efecto Invernadero:</span>
                            En días calurosos, el plástico genera un efecto de horno. Levántelo frecuentemente para ventilar si es seguro hacerlo.
                        </div>
                        <div className="bg-blue-800 bg-opacity-50 p-3 rounded text-sm">
                            <span className="font-bold text-white block mb-1">Impactos Fuertes:</span>
                            Si una roca grande lo golpea (incluso si se agrieta), desvió la energía letal, pero el tender (asistente de camilla) debe estar atento al rebote.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
