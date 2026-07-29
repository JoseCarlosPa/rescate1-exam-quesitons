import { useState } from "react";
import { FaShieldAlt, FaArrowsAlt, FaDirections } from "react-icons/fa";

type AdvTab = "contingency" | "cod" | "counterforce";

export default function AdvancedAnchors() {
    const [tab, setTab] = useState<AdvTab>("contingency");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Anclajes Avanzados
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Sistemas que proveen flexibilidad dinámica o cambios en las fuerzas aplicadas en el rescate.
                </p>
            </div>

            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {[
                    { id: "contingency", label: "Contingencia", icon: <FaShieldAlt className="w-4 h-4 mr-1" /> },
                    { id: "cod", label: "Cambio de Dirección", icon: <FaDirections className="w-4 h-4 mr-1" /> },
                    { id: "counterforce", label: "Counterforce", icon: <FaArrowsAlt className="w-4 h-4 mr-1" /> },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id as AdvTab)}
                        className={`flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            tab === t.id ? "bg-teal-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-teal-50"
                        }`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "contingency" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Contingency Anchor Systems</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Esencialmente es un sistema de descenso atado que sostiene una línea. Permite una rápida extracción (bajar o subir inmediatamente) a la persona colgando.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Doble de cuerda:</strong> Como el plan es poder bajar al rescatista que ya está descendiendo, debes asegurarte de tener el doble de cuerda instalada (una para llegar al suelo, otra igual amarrada al anclaje).</li>
                        <li><strong>Hardware:</strong> Se usa un descendedor (Ocho bloqueado) o equipos multipropósito (CLUTCH, MPD) fijados al anclaje en vez de una persona.</li>
                        <li>Común en equipos tácticos para responder rápido si un oficial queda atrapado en rapel, o para instruir principiantes.</li>
                    </ul>
                </div>
            )}

            {tab === "cod" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Change-of-Direction (COD) Anchor</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Usado para desviar el recorrido de la cuerda. La fuerza resultante en la polea <strong>biseca (corta a la mitad)</strong> el ángulo entre la cuerda de entrada y la de salida.
                    </p>
                    <div className="bg-orange-50 border border-orange-200 p-3 rounded-lg text-sm text-gray-700">
                        <strong>Truco de posicionamiento:</strong> Si no está seguro de la distancia ideal de la polea COD, ancle el dispositivo de desviación con un pequeño nudo de descenso bloqueado. Cuando el sistema tome carga, desbloquee y deje deslizar la polea hacia su posición ideal, luego vuelva a bloquear.
                    </div>
                </div>
            )}

            {tab === "counterforce" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Counterforce Anchor System</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Muy utilizado al trabajar en estructuras abiertas (jaulas de escaleras, torres, antenas).
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Objetivo:</strong> Mover la camilla <strong>alejándola</strong> de la pared de la estructura durante la elevación o descenso para que no choque.</li>
                        <li>Se ancla lateralmente para "tirar" el sistema fuera de su eje vertical y mantener la carga en el aire lejos del obstáculo.</li>
                        <li>Usando un dispositivo de fricción en la línea de contrafuerza, el operador puede extender o recoger la cuerda para dirigir la trayectoria de descenso/ascenso de forma fluida.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
