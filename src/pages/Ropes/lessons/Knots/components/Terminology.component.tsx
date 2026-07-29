import { FaBookOpen } from "react-icons/fa";

export default function Terminology() {
    const terms = [
        { term: "Seno (Bight)", desc: "Se forma cuando la cuerda se dobla sobre sí misma pero las partes NO se cruzan (forma de U)." },
        { term: "Gaza / Bucle (Loop)", desc: "Se forma cuando la cuerda se dobla hacia atrás y se cruza sobre sí misma (360 grados)." },
        { term: "Extremo Libre (Working End)", desc: "La punta de la cuerda que se utiliza para atar el nudo." },
        { term: "Parte Fija (Standing Part)", desc: "La parte de la cuerda que va hacia el anclaje o que recibe la carga. La parte inactiva al atar el nudo." },
        { term: "Nudo (Knot)", desc: "Término genérico, pero específicamente usado para cualquier nudo que no sea un amarre (hitch) o una unión (bend)." },
        { term: "Unión / Empalme (Bend)", desc: "Un nudo que conecta los extremos de dos cuerdas o cintas tubulares juntas." },
        { term: "Amarre / Enganche (Hitch)", desc: "Un nudo que sujeta una cuerda a otro objeto (un poste, mosquetón, o incluso otra cuerda si no es parte del nudo en sí)." },
        { term: "Cola (Tail)", desc: "El extremo libre de cuerda o cinta que sobresale del nudo ya terminado." },
        { term: "Vuelta Redonda (Round Turn)", desc: "Una vuelta completa (540 grados) de la cuerda rodeando un poste o barra." },
        { term: "Vestir / Peinar (Dressing)", desc: "Acomodar los cabos del nudo para que queden suaves y paralelos, sin dobleces extras ni cruces internos." },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaBookOpen className="w-5 h-5 mr-2 text-blue-600" />
                    Terminología de Nudos
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Entender el lenguaje de las cuerdas es fundamental para poder comunicar, enseñar y aprender nudos en operaciones de rescate.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {terms.map((t, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                        <h3 className="font-bold text-blue-800 mb-1">{t.term}</h3>
                        <p className="text-sm text-gray-700">{t.desc}</p>
                    </div>
                ))}
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mt-6">
                <h3 className="font-bold text-orange-800 mb-2">💡 La importancia de "Vestir" (Dressing) un Nudo</h3>
                <p className="text-sm text-gray-700">
                    Un nudo mal peinado, con hebras cruzadas en su interior, es más débil (los cruces añaden puntos de fricción y dobleces extra), 
                    es más difícil de inspeccionar (el inspector no puede ver el patrón limpio) y puede ser imposible de desatar una vez que se le ha aplicado la carga.
                </p>
            </div>
        </div>
    );
}
