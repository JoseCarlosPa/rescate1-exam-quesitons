import { MdSafetyCheck } from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Concepto */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdSafetyCheck className="w-8 h-8 text-red-600 mr-3" />
                    <h2 className="text-2xl font-bold text-red-800">Sistemas de Aseguramiento (Belay Systems)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    El sistema de Belay es la <strong>línea de vida (backup)</strong> diseñada específicamente para atrapar la carga si la línea principal o el anclaje principal fallan. Debe ser infalible y actuar de inmediato.
                </p>
                <div className="bg-red-100 p-4 rounded text-sm text-red-900 border border-red-200">
                    <strong>Whistle Test (Prueba del Silbato):</strong> Un sistema de belay de grado de rescate debe pasar esta prueba: si suena el silbato de alarma y el operador suelta la cuerda por pánico o distracción (tapándose los oídos), el sistema <em>debe bloquearse y detener la carga automáticamente</em> sin ninguna acción adicional.
                </div>
            </div>

            {/* ASTM F2436 */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Estándares de Prueba BCCTR / ASTM F2436</h3>
                <p className="text-sm text-gray-700 mb-4">
                    Para certificar un sistema o dispositivo como apto para Belay de Rescate, se le somete a una prueba de caída dinámica con los peores escenarios posibles (worst-case scenario):
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg text-center">
                        <p className="font-bold text-orange-800 text-xl mb-1">200 kg</p>
                        <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">Masa de Prueba</p>
                        <p className="text-[10px] text-gray-500 mt-1">(440 lbs)</p>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg text-center">
                        <p className="font-bold text-orange-800 text-xl mb-1">1 m</p>
                        <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">Distancia de Caída</p>
                        <p className="text-[10px] text-gray-500 mt-1">Con 3m de cuerda</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-center">
                        <p className="font-bold text-red-800 text-xl mb-1">&lt; 1 m</p>
                        <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">Distancia Arresto</p>
                        <p className="text-[10px] text-gray-500 mt-1">Límite para frenar</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-3 rounded-lg text-center">
                        <p className="font-bold text-red-800 text-xl mb-1">15 kN</p>
                        <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">Fuerza Pico Max</p>
                        <p className="text-[10px] text-gray-500 mt-1">(3,375 lbf)</p>
                    </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4 italic">
                    * El control de la elongación de la cuerda es crítico. Mucha elongación baja la fuerza pico, pero aumenta la distancia de caída, arriesgando un choque contra una cornisa.
                </p>
            </div>
        </div>
    );
}
