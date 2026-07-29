import { MdAccessibilityNew } from "react-icons/md";
import { useState } from "react";

type HarnessTab = "belts" | "class2" | "class3" | "points";

export default function Harnesses() {
    const [tab, setTab] = useState<HarnessTab>("class2");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <MdAccessibilityNew className="w-6 h-6 mr-2 text-teal-600" />
                    Arneses de Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Un arnés puede proporcionar un punto de conexión rápido, una plataforma de trabajo para el rescatista o un medio para transportar al sujeto. Selecciona una categoría:
                </p>
            </div>

            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {[
                    { id: "belts", label: "Cinturones / Improvisados" },
                    { id: "class2", label: "Arnés de Asiento (Clase II)" },
                    { id: "class3", label: "Cuerpo Completo (Clase III)" },
                    { id: "points", label: "Puntos de Conexión (NFPA)" },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id as HarnessTab)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            tab === t.id ? "bg-teal-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-teal-50"
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "belts" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                        <h3 className="font-bold text-red-800 mb-2">🚫 Cinturones (Swami Belt / Pompier)</h3>
                        <p className="text-sm text-gray-700 mb-3">
                            <strong>Ya no se consideran aceptables</strong> como plataformas de trabajo o para arresto de caídas. 
                            Si el peso es soportado por un cinturón, la caja torácica y el diafragma se comprimen, restringiendo la respiración.
                        </p>
                        <p className="text-sm text-gray-700">
                            <em>Nota:</em> Un cinturón de rapel de uniforme sirve para un rapel de emergencia rápido, pero no para colgar por períodos prolongados.
                        </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                        <h3 className="font-bold text-amber-800 mb-2">🪢 Arnés Improvisado (Hasty Harness / Swiss Seat)</h3>
                        <p className="text-sm text-gray-700">
                            Un asiento tipo pañal o arnés rápido que se puede atar con webbing tubular de 1 pulgada (o 2 pulgadas para más confort, aunque el nudo es más abultado) o cuerda (ej. 3/8 in). 
                            Útil para rapeles de emergencia o como asiento para un sujeto cuando no hay arneses comerciales disponibles.
                        </p>
                    </div>
                </div>
            )}

            {tab === "class2" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-teal-50 border border-teal-200 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">🩳</span>
                            <h3 className="font-bold text-teal-800 text-lg">Arnés de Asiento (Sit/Pelvic Harness) - Clase II</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">
                            Diseñado para rescate, transfiere el peso a las piernas y mantiene al rescatista sentado. Recomendado para la mayoría de operaciones de rescate en ángulo bajo o alto.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-teal-700 mb-1">Comodidad y Circulación</p>
                                <p className="text-xs text-gray-600">
                                    Se recomienda un ancho mínimo de 3 pulgadas (webbing o acolchado) en las perneras y cintura para evitar la restricción de circulación. Los arneses de escalada deportiva con perneras de 2 pulgadas no dan el soporte necesario para largos periodos suspendidos.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-teal-700 mb-1">Pruebas NFPA 1983</p>
                                <p className="text-xs text-gray-600">
                                    Deben pasar la prueba de caída tanto <strong>cabeza arriba</strong> como <strong>cabeza abajo</strong>, verificando que el rescatista no caerá del arnés incluso si se invierte (siempre que esté bien ajustado).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === "class3" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">🦺</span>
                            <h3 className="font-bold text-indigo-800 text-lg">Arnés de Cuerpo Completo - Clase III</h3>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">
                            Ofrece más puntos de conexión. Las correas en los hombros disminuyen la probabilidad de caer si el usuario se invierte.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-indigo-700 mb-1">Combo Harness (Pecho + Asiento)</p>
                                <p className="text-xs text-gray-600">
                                    Combinar un arnés de asiento con uno de pecho da la misma estabilidad que un arnés integral. NFPA 1983 permite que un combo sea certificado Clase III, pero ANSI Z359.11 no lo permite para arresto de caídas industrial porque se pueden separar.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg p-3 border border-gray-200">
                                <p className="text-xs font-semibold text-indigo-700 mb-1">Rescate vs. Industrial</p>
                                <p className="text-xs text-gray-600">
                                    Los arneses de caída industrial no están diseñados para colgar sentado cómodamente. Un arnés Clase III de rescate permite sentarse para el trabajo en cuerdas gracias a su conexión frontal en la cintura, sin sacrificar los anclajes de protección contra caídas.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === "points" && (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Puntos Dorsales (Espalda)</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Ubicado entre los omóplatos. Es el mejor punto para detener una caída (fall arrest) ya que absorbe bien el impacto, <strong>pero deja al usuario colgado de la espalda, en una posición muy incómoda para el auto-rescate</strong>.
                            </p>
                        </div>
                        
                        <div className="bg-white border border-gray-200 rounded-xl p-4">
                            <h3 className="font-bold text-gray-800 mb-2">Puntos Esternales (Pecho)</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Evita que la cabeza rote y golpee la estructura en una caída (ej. subiendo una escalera). Deja al rescatista en una posición sentada más favorable para efectuar un auto-rescate.
                            </p>
                        </div>
                    </div>
                    
                    <div className="bg-slate-800 text-white rounded-xl p-5">
                        <p className="font-bold text-teal-300 mb-2">NFPA: Load-Bearing vs. Positioning</p>
                        <ul className="text-sm space-y-2 text-slate-300">
                            <li><strong className="text-white">Load-bearing (Soporte de carga):</strong> Cumplen con los requisitos de protección contra caídas (alto impacto).</li>
                            <li><strong className="text-white">Positioning (Posicionamiento):</strong> Fuertes para soportar al usuario mientras trabaja en tensión, pero <strong>no</strong> previstos para absorber el choque de una gran caída.</li>
                        </ul>
                    </div>
                </div>
            )}
            
            {/* Inspección */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-6">
                <h3 className="font-bold text-orange-800 text-sm mb-2">🔍 Inspección de Arneses</h3>
                <p className="text-xs text-orange-800">
                    Inspeccionar cintas y costuras por cortes, deshilachados o decoloración química. 
                    <strong>Retirar inmediatamente</strong> si hay fallas, si el indicador de caída se activó, o si sufrió una carga de impacto anormal (shock load).
                </p>
            </div>
        </div>
    );
}
