import { MdCalculate } from "react-icons/md";
import { FaProjectDiagram, FaLayerGroup } from "react-icons/fa";

export default function Systems() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Tipos de Sistemas de Ventaja Mecánica (M/A)
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Clasificación según la forma en la que se integran y mueven las poleas.
                </p>
            </div>

            {/* Simples */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <MdCalculate className="w-6 h-6 text-blue-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Sistemas Simples</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    En un sistema simple, <strong>todas las poleas móviles se desplazan a la misma velocidad que la carga</strong> (se acercan juntas al anclaje principal). 
                </p>
                <div className="bg-gray-50 p-3 rounded border border-gray-200">
                    <p className="text-sm text-gray-800 font-semibold mb-1">El "Z-Rig" (3:1 Simple)</p>
                    <p className="text-sm text-gray-600">
                        Es el caballo de batalla del rescate. Para levantar la carga 1 metro, el equipo debe tirar de 3 metros de cuerda. El sistema forma una "Z" visual al montarse con un Prusik tractor y una polea móvil.
                    </p>
                </div>
            </div>

            {/* Compuestos */}
            <div className="bg-white border-2 border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                    <FaLayerGroup className="w-5 h-5 text-indigo-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Sistemas Compuestos</h3>
                </div>
                <p className="text-sm text-gray-700 mb-3">
                    Ocurren cuando <strong>un sistema simple jala la cuerda de tracción de OTRO sistema simple</strong>. Sus ventajas se MULTIPLICAN.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                        <p className="text-sm text-indigo-900 font-bold mb-1">Ejemplo: 6:1 Compuesto</p>
                        <p className="text-xs text-indigo-800">
                            Armas un 3:1 (Z-rig). A la cuerda de donde tú jalas, le conectas el final de un 2:1 nuevo. (3 x 2 = 6).
                        </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                        <p className="text-sm text-indigo-900 font-bold mb-1">Ejemplo: 9:1 Compuesto</p>
                        <p className="text-xs text-indigo-800">
                            Conectar un Z-rig tirando de otro Z-rig (3 x 3 = 9).
                        </p>
                    </div>
                </div>
                <div className="mt-3 bg-yellow-50 border-l-4 border-yellow-500 p-2 text-xs text-yellow-900">
                    <strong>Peligro Táctil:</strong> En ventajas tan altas, los operadores pierden sensibilidad. Si la camilla se atora contra un saliente, el equipo arriba ni lo sentirá y puede romper el sistema o lastimar al paciente al forzarlo.
                </div>
            </div>

            {/* Complejos y Piggyback */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-purple-200 bg-purple-50 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                        <FaProjectDiagram className="w-4 h-4 text-purple-600" />
                        <h4 className="font-bold text-purple-900">Sistemas Complejos</h4>
                    </div>
                    <p className="text-sm text-purple-800 mb-2">
                        Las poleas viajan en direcciones opuestas entre sí (ej. el complejo 5:1).
                    </p>
                    <ul className="text-xs space-y-1 text-purple-800 list-disc list-inside">
                        <li>Requieren menos poleas.</li>
                        <li>Se jala menos cantidad total de cuerda.</li>
                        <li><strong>Contra:</strong> El reset es muy tedioso, porque debes extender dos poleas que van en sentidos contrarios.</li>
                    </ul>
                </div>
                
                <div className="border border-emerald-200 bg-emerald-50 rounded-xl p-5">
                    <h4 className="font-bold text-emerald-900 mb-2 border-b border-emerald-200 pb-1">Sistemas "Piggyback" (A Cuestas)</h4>
                    <p className="text-sm text-emerald-800 mb-2">
                        El sistema M/A se arma aparte y se conecta a la línea principal (cargada) con un Prusik.
                    </p>
                    <ul className="text-xs space-y-1 text-emerald-800 list-disc list-inside">
                        <li>Excelente para pasar nudos.</li>
                        <li>Permite transición rápida de subir a bajar si el Ratchet principal lo permite.</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}
