import { FaBalanceScale, FaShieldAlt, FaArrowsAltH } from "react-icons/fa";

export default function Advantages() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Ventajas y Desventajas
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    ¿Por qué el ITRS y la NFPA impulsan el cambio hacia configuraciones Twin-Tension?
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                
                {/* Ventajas */}
                <div className="bg-white border-2 border-green-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaShieldAlt className="w-5 h-5 text-green-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Ventajas (Pros)</h3>
                    </div>
                    <ul className="text-sm space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span><strong>Menor impacto (Shock load):</strong> Al fallar una línea, el peso se transfiere a una cuerda ya tensada, reduciendo la caída libre al mínimo.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span><strong>Resistencia al corte:</strong> Pruebas del ITRS demostraron que una cuerda soportando la MITAD del peso sobre un borde filoso resiste el corte mucho mejor que una cuerda soportando TODO el peso.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span><strong>Estandarización:</strong> Se usan los mismos equipos y nudos en ambas cuerdas (ej. dos CLUTCH idénticos), simplificando la capacitación y hardware necesario.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-500 font-bold">✓</span>
                            <span><strong>Operación limpia:</strong> Ambas cuerdas tensas se mantienen en el aire. No arrastran piedras hacia los rescatistas abajo (como lo hace el belay tradicional).</span>
                        </li>
                    </ul>
                </div>

                {/* Desventajas */}
                <div className="bg-white border-2 border-red-200 rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3 border-b pb-2">
                        <FaBalanceScale className="w-5 h-5 text-red-600" />
                        <h3 className="font-bold text-gray-800 text-lg">Desventajas / Retos</h3>
                    </div>
                    <ul className="text-sm space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 font-bold">✗</span>
                            <span><strong>Sincronización:</strong> Mantener la tensión igualada requiere comunicación perfecta. Si una cuerda baja muy rápido, toda la carga pasa a la otra, volviéndolo un sistema Main/Belay de facto.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 font-bold">✗</span>
                            <span><strong>Espacio en anclajes:</strong> Si los anclajes están muy separados físicamente, es muy difícil que los dos operadores escuchen y sientan el ritmo del otro para coordinarse.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-red-500 font-bold">✗</span>
                            <span><strong>Desafío en Hauling (Tracción):</strong> Al subir, agrupar a toda la gente para jalar ambas cuerdas juntas mantiene la tensión igual, pero hace que los últimos en la fila pierdan eficiencia. Si se divide el equipo en dos (para jalar cada cuerda), se puede perder la paridad de tensión.</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg mt-4 border border-purple-100 flex items-start gap-3">
                <FaArrowsAltH className="w-8 h-8 text-purple-600 mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Resumen:</strong> El TTRS requiere un mayor nivel de habilidad, concentración y comunicación por parte de los operadores de los dispositivos. Pero a cambio, ofrece el esquema técnico más seguro y redundante frente a fallas catastróficas.
                </p>
            </div>
        </div>
    );
}
