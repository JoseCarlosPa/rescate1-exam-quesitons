import { MdDownhillSkiing } from "react-icons/md";
import { FaBan } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-stone-50 to-neutral-50 border-l-4 border-stone-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdDownhillSkiing className="w-8 h-8 text-stone-600 mr-3" />
                    <h2 className="text-2xl font-bold text-stone-800">Principios del Rapel (Rappelling)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Rapelear es el descenso controlado por una cuerda usando la fricción de un dispositivo. A diferencia del rapel deportivo, en el rescate se debe maximizar el control, minimizar el impacto al sistema (shock loads) y siempre tener en cuenta a las víctimas o compañeros ubicados abajo.
                </p>
                <div className="bg-stone-100 p-4 rounded flex items-start gap-3 border border-stone-200">
                    <FaBan className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                        <p className="text-sm font-bold text-stone-900 mb-1">
                            Regla de Oro: NO tires la cuerda
                        </p>
                        <p className="text-sm text-stone-800">
                            Aventar el rollo de cuerda por el precipicio (como se ve en películas) es una práctica altamente desaconsejada en rescate. Podrías golpear al paciente, soltar rocas sobre él, enganchar ramas inalcanzables, o delatar tu posición en un entorno táctico. <strong>La bolsa se lleva contigo.</strong>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Verificaciones Previas (The Buddy Check)</h3>
                
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-900 mb-2">Sistema Táctil (Touch System)</h4>
                    <p className="text-sm text-gray-700">
                        Estar parado al borde del precipicio (The Edge) puede jugar trucos psicológicos. La vista engaña. Para verificar un sistema, debes usar el sistema táctil: 
                    </p>
                    <ul className="list-disc list-inside mt-2 text-sm text-blue-800 font-semibold space-y-1">
                        <li>Toca y exprime (squeeze) con tu mano cada mosquetón para confirmar que bloqueó.</li>
                        <li>Toca cada nudo.</li>
                        <li>Revisa a tu compañero (Buddy check) y deja que él te revise a ti de la misma forma física antes de decir "En Rapel".</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
