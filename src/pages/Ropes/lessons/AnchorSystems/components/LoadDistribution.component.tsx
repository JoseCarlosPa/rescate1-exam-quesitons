import { MdLink } from "react-icons/md";

export default function LoadDistribution() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <MdLink className="w-6 h-6 mr-2 text-teal-600" />
                    Sistema Load-Distributing de 2 Puntos
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El método más rápido y flexible para igualar cargas usando una cinta o cordín (Prusik loop). 
                </p>
            </div>

            <div className="bg-white border-2 border-teal-100 rounded-xl p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-teal-100 text-teal-800 px-3 py-1 rounded-bl-lg font-bold text-xs">
                    Técnica Clave
                </div>
                
                <h3 className="font-bold text-gray-800 text-lg mb-4">Construcción paso a paso:</h3>
                
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                    <li className="pl-2">Conecte los extremos del anillo de cinta a los mosquetones de ambos puntos de anclaje.</li>
                    <li className="pl-2">Tire de los dos tramos de cinta hacia la dirección de la carga formando una "V".</li>
                    <li className="pl-2 bg-teal-50 border-l-4 border-teal-400 p-2 rounded">
                        <strong>Gire (twist)</strong> una de las hebras medias (180 grados) para formar una cruz ("X") y crear un pequeño bucle.
                    </li>
                    <li className="pl-2">Clip el mosquetón de recolección principal a través de ese pequeño bucle.</li>
                </ol>

                <div className="mt-6 border-t border-gray-100 pt-4">
                    <h4 className="font-bold text-red-600 mb-2">⚠️ El Peligro de omitir el "Twist" (Giro)</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Si no tuerce la cinta formando una X antes de poner el mosquetón, y uno de los anclajes falla, <strong>el lazo se abrirá por completo</strong> y el mosquetón resbalará hasta salirse de la cinta, provocando el colapso total del sistema.
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Ventaja:</strong> Muy usado en nieve o escenarios dinámicos, es no direccional y se auto-ecualiza razonablemente bien ante oscilaciones.
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-700">
                    <strong>Limitación:</strong> Típicamente restringido a solo 2 puntos de anclaje. Para 3 puntos se necesitan configuraciones más elaboradas con la misma cuerda.
                </div>
            </div>
        </div>
    );
}
