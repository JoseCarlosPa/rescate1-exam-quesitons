import { useState } from "react";
import { FaLink } from "react-icons/fa";

type KnotTab = "anchors" | "joining" | "loops" | "hitches";

export default function OtherKnots() {
    const [tab, setTab] = useState<KnotTab>("anchors");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaLink className="w-5 h-5 mr-2 text-blue-600" />
                    Otros Nudos y Amarres Comunes
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Categorizados según su función en los sistemas de rescate vertical.
                </p>
            </div>

            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {[
                    { id: "anchors", label: "Anclajes" },
                    { id: "joining", label: "Unión de Cuerdas" },
                    { id: "loops", label: "Lazos (Loops)" },
                    { id: "hitches", label: "Fricción y Liberación" },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id as KnotTab)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            tab === t.id ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-blue-50"
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "anchors" && (
                <div className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Tensionless Hitch (Amarre sin tensión)</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Tensionless_hitch.jpg" alt="Tensionless Hitch" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            Anclaje rapidísimo y extremadamente fuerte. La cuerda se envuelve varias veces alrededor de un objeto cilíndrico grande (mínimo 4" diámetro, ej. árbol grueso o tubo). La fricción toma la carga.
                        </p>
                        <div className="mt-auto">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded inline-block">100% Eficiencia</span>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">High-Strength Tie-Off</h3>
                        <img src="https://images.unsplash.com/photo-1515281239448-2aa5a07bdb61?auto=format&fit=crop&q=80&w=800" alt="High-Strength Tie-Off" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            Versión mejorada del Tensionless para superficies más lisas. Después de las vueltas, la cuerda se ata con un medio nudo alrededor de la línea principal para añadir un poco de tensión extra a las vueltas.
                        </p>
                        <div className="mt-auto">
                            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded inline-block">100% Eficiencia</span>
                        </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Figure 8 Follow-Through</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Figure-eight_follow_through.jpg" alt="Figure 8 Follow-Through" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 flex-grow">
                            Usado para anclar la cuerda alrededor de un objeto (como un árbol) donde no se puede deslizar un lazo cerrado por arriba.
                        </p>
                    </div>
                </div>
            )}

            {tab === "joining" && (
                <div className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Double Fisherman's Bend</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Double_fisherman%27s_knot.jpg" alt="Double Fisherman's Bend" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            (Pescador Doble). Nudo muy seguro y autobloqueante. Ideal para atar el cordín y formar lazos para Prusik. En cuerdas principales, hace un nudo muy compacto que pasa bien por poleas "knot-pass", pero puede ser muy difícil de desatar bajo carga.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Figure 8 Bend</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Flemish_bend.jpg" alt="Figure 8 Bend" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            (Ocho de Unión). Es más voluminoso que el Pescador Doble, pero los dobleces amplios del ocho lo hacen mucho más fácil de desatar después de recibir una carga pesada.
                        </p>
                    </div>
                </div>
            )}

            {tab === "loops" && (
                <div className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Alpine Butterfly (Mariposa)</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Alpine_butterfly_knot.jpg" alt="Alpine Butterfly" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            El mejor nudo para hacer un lazo en el medio de una cuerda. Soporta perfectamente tracción en 3 direcciones sin deformarse ni volcarse.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Bowline (As de Guía)</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Bowline_ab.jpg" alt="Bowline" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            Fácil de atar alrededor de un ancla. <strong>¡PRECAUCIÓN!</strong> Es susceptible a volcarse (toppling) si la carga no es constante (carga cíclica). SIEMPRE debe llevar un nudo de seguridad extra, o usarse variantes seguras (Long Tail Bowline).
                        </p>
                    </div>
                </div>
            )}

            {tab === "hitches" && (
                <div className="grid md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-2">
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Munter Hitch & Mule Tie-Off</h3>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Munter_hitch.jpg" alt="Munter Hitch" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            <strong>Munter Hitch (Nudo dinámico):</strong> Enganche de fricción deslizante para asegurar/rapelar una persona.<br/>
                            <strong>Mule Tie-Off (Cote de mula):</strong> Se usa para bloquear el Munter Hitch; la gran ventaja es que puede atarse y desatarse MIENTRAS el Munter está bajo tensión.
                        </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col h-full">
                        <h3 className="font-bold text-gray-800 mb-2">Radium Release Hitch</h3>
                        <img src="https://images.unsplash.com/photo-1544258673-896895ce492c?auto=format&fit=crop&q=80&w=800" alt="Radium Release Hitch" className="w-full h-40 object-cover rounded-lg mb-3" />
                        <p className="text-sm text-gray-600 mb-2 flex-grow">
                            Nudo de liberación atado con cordín. Permite soltar un sistema de belay bajo tensión pesada para transferir la carga. Las pruebas demostraron que es más fácil de desatar bajo gran carga que las versiones atadas con cinta tubular (webbing), y absorbe mejor el impacto.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
