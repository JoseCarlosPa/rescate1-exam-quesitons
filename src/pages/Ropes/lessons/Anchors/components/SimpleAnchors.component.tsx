import { MdAnchor } from "react-icons/md";

export default function SimpleAnchors() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <MdAnchor className="w-5 h-5 mr-2 text-red-600" />
                    Anclajes Simples (con Cinta Tubular)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Resultados de las pruebas de CMC sobre configuraciones de anclajes simples utilizando webbing tubular de 1 pulgada (resistencia base ~4,340 lbf).
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                
                {/* Choker */}
                <div className="bg-white border-2 border-red-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Choker (Nudo de Alondra)</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Rápido, aprieta bien contra el poste para evitar que deslice hacia arriba, pero crea puntos de pellizco severos en la cinta.
                    </p>
                    <div className="bg-gray-50 p-2 rounded text-xs font-mono text-center">
                        Rotura probada: ~4,799 lbf
                    </div>
                </div>

                {/* Wrap 3, Pull 2 */}
                <div className="bg-white border-2 border-red-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Wrap 3, Pull 2</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Tres vueltas alrededor, sacas dos asas. El nudo de agua debe colocarse del lado de la carga, presionado contra el poste para que no reciba tensión.
                    </p>
                    <div className="bg-gray-50 p-2 rounded text-xs font-mono text-center">
                        Rotura probada: ~7,899 lbf
                    </div>
                </div>

                {/* Basket */}
                <div className="bg-white border-2 border-red-100 rounded-xl p-5">
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Basket (U o 3-bight)</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Forma de U. Si bien tiene mucha resistencia teórica (4 patas en el eslabón), si una falla, todo el anclaje se desarma.
                    </p>
                    <div className="bg-gray-50 p-2 rounded text-xs font-mono text-center">
                        Rotura probada: ~8,464 lbf
                    </div>
                </div>

                {/* Redundant Wrap 2, Pull 1 */}
                <div className="bg-white border-2 border-red-500 rounded-xl p-5 relative shadow-md">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-xl">
                        MÁS FUERTE
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">Redundant Wrap 2, Pull 1</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Se usa un lazo redundante (doble cinta). Envolvió dos veces y sacó un asa. Fue el método <strong>más fuerte</strong> en las pruebas del manual CMC para webbing tubular de 1 pulgada.
                    </p>
                    <div className="bg-red-50 p-2 rounded text-sm font-mono text-center text-red-700 font-bold border border-red-200">
                        Rotura probada: ~9,700 lbf
                    </div>
                </div>

            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mt-6 rounded-r-lg text-sm text-gray-700">
                <strong>¿Dónde fallan?</strong> Las pruebas revelaron que la cinta casi siempre se rompe en el mosquetón donde <strong>dos capas de cinta se pellizcan entre sí</strong>.
            </div>
        </div>
    );
}
