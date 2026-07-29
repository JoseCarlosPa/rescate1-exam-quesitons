import { MdSettingsApplications } from "react-icons/md";

export default function Pretensioned() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <MdSettingsApplications className="w-6 h-6 mr-2 text-teal-600" />
                    Pretensioned Back Tie
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Utilizado cuando el anclaje idealmente ubicado (focal point) no es lo suficientemente fuerte para soportar la carga por sí solo.
                </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    Un árbol pequeño o un barandal industrial justo en el borde del acantilado es perfecto direccionalmente, pero es <strong>marginal</strong> en fuerza. Atrás, a 10 metros, hay un árbol enorme ("bombproof") pero está muy lejos o en un ángulo malo que arrastraría la cuerda por el suelo. 
                </p>

                <div className="bg-teal-50 border border-teal-200 rounded-lg p-5 mb-4">
                    <h3 className="font-bold text-teal-800 mb-2">Construcción del Sistema (3:1)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-teal-900">
                        <li>Coloque cinta/anclaje en el objeto débil frontal y en el fuerte trasero. Deben estar alineados con el vector de la carga (bisecar el ángulo si es necesario).</li>
                        <li>Ancle la cuerda en el punto frontal, llévela al punto trasero y pásela por un mosquetón, tráigala de vuelta al punto frontal por otro mosquetón y luego atrás otra vez.</li>
                        <li>Esto forma una <strong>Ventaja Mecánica 3:1 (Z-rig)</strong> con la misma cuerda de anclaje.</li>
                        <li>Tense fuertemente hasta que el anclaje frontal se mueva un poco hacia atrás y asegure la cuerda (tie-off con dos Cotes o remate de seguridad) en el mosquetón trasero.</li>
                    </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 text-sm text-gray-700">
                    <strong>Importante:</strong> El sistema de rescate debe atarse al mosquetón (o cinta) en el anclaje frontal (punto focal), pero <strong>entrelazado (interlocked)</strong> con el bucle que sostiene el sistema pretensado. Así, si el árbol frontal se arranca por completo, el sistema de rescate quedará colgando directamente del pretensado hacia el anclaje trasero fuerte.
                </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-800 mb-2">Pretensioned Front Tie (Variación)</h3>
                <p className="text-sm text-gray-600">
                    Coloca el punto focal <em>detrás</em> del anclaje frontal. La tensión se usa principalmente para eliminar la elongación (stretch) elástica de un sistema de anclaje muy largo, de modo que el sistema se sienta rígido al instante.
                </p>
            </div>
        </div>
    );
}
