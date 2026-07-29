import { useState } from "react";
import { FaTree, FaBuilding, FaCar, FaHammer } from "react-icons/fa";

type SelectionTab = "natural" | "structural" | "vehicles" | "pickets";

export default function Selection() {
    const [tab, setTab] = useState<SelectionTab>("natural");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Selección de Puntos de Anclaje
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    Evaluación y consideraciones para los diferentes tipos de anclajes en el terreno.
                </p>
            </div>

            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {[
                    { id: "natural", label: "Naturales", icon: <FaTree className="w-4 h-4 mr-1" /> },
                    { id: "structural", label: "Estructurales", icon: <FaBuilding className="w-4 h-4 mr-1" /> },
                    { id: "vehicles", label: "Vehículos", icon: <FaCar className="w-4 h-4 mr-1" /> },
                    { id: "pickets", label: "Estacas (Pickets)", icon: <FaHammer className="w-4 h-4 mr-1" /> },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id as SelectionTab)}
                        className={`flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            tab === t.id ? "bg-red-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-red-50"
                        }`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "natural" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Anclajes Naturales (Árboles y Rocas)</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Árboles:</strong> Considere al menos 4 pulgadas de diámetro mínimo. Evalúe si está vivo, tipo de suelo (húmedo o seco reduce soporte), sistema de raíces y posibles plagas. Ate <strong>lo más bajo posible</strong> al suelo para reducir la palanca.</li>
                        <li><strong>Rocas / Boulders:</strong> Verifique que sean inamovibles. Las rocas lisas pueden requerir el "High-Strength Tie-Off". Tenga cuidado en áreas de piedra arenisca tras las lluvias, ya que el suelo cede.</li>
                        <li>Siempre proteja la corteza o los bordes filosos usando protectores (padding).</li>
                    </ul>
                </div>
            )}

            {tab === "structural" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Anclajes Estructurales</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Evitar:</strong> Barandales (diseñados solo para fuerzas hacia abajo de ~200 lbs), tuberías de PVC, conductos eléctricos, conductos de HVAC (aire acondicionado).</li>
                        <li><strong>Puntos Fuertes:</strong> Columnas de concreto, vigas principales, bases de maquinaria industrial.</li>
                        <li><strong>Precauciones (Lockout/Tagout):</strong> Cuidado con químicos, vapor, superficies calientes o electricidad. Si es necesario, bloquee y etiquete los interruptores de la zona.</li>
                    </ul>
                </div>
            )}

            {tab === "vehicles" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Uso de Vehículos como Anclaje</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Puntos de sujeción:</strong> Ganchos de remolque sólidos, rieles del chasis (frame), rines.</li>
                        <li>Atar lo más bajo posible para no volcar el vehículo con la palanca.</li>
                        <li><strong>Seguridad Crítica:</strong> Retirar las llaves del vehículo, bloquear las ruedas (wheel chocks) o pararlo de costado a la carga. Levantar el capó (hood) es una buena señal visual de que el vehículo está fuera de servicio.</li>
                    </ul>
                </div>
            )}

            {tab === "pickets" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Sistemas de Estacas (Pickets)</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Usados cuando no hay anclajes naturales o estructurales. Suelen ser barras de acero de 1"x48".
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Ángulo:</strong> Clavadas a 15° alejándose (hacia atrás) de la carga.</li>
                        <li><strong>Profundidad:</strong> Clavar 2/3 de su longitud en el suelo.</li>
                        <li><strong>Separación:</strong> 4 pies (1.2m) entre estacas.</li>
                        <li><strong>Spanish Windlass:</strong> Se usa para unir y tensar múltiples estacas. Se ata en la base de la estaca de atrás y en la parte superior de la delantera, luego se tuerce la cinta con una palanca hasta transferir la carga.</li>
                    </ul>
                </div>
            )}
        </div>
    );
}
