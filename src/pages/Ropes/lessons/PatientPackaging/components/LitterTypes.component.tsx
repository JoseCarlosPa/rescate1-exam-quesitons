import { useState } from "react";
import { FaBed } from "react-icons/fa6";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { MdSettingsInputComponent } from "react-icons/md";

type LitterTab = "basket" | "plastic" | "semirigid" | "accessories";

export default function LitterTypes() {
    const [tab, setTab] = useState<LitterTab>("basket");

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Camillas y Accesorios de Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    No todas las camillas sirven para suspensión vertical. Conozca las diferencias críticas.
                </p>
            </div>

            <div className="flex gap-2 flex-wrap border-b border-gray-200 pb-2">
                {[
                    { id: "basket", label: "Basket/Stokes", icon: <FaBed className="w-4 h-4 mr-1" /> },
                    { id: "plastic", label: "Plásticas", icon: <MdSettingsInputComponent className="w-4 h-4 mr-1" /> },
                    { id: "semirigid", label: "Semi-rígidas", icon: <FaCompressArrowsAlt className="w-4 h-4 mr-1" /> },
                ].map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setTab(t.id as LitterTab)}
                        className={`flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            tab === t.id ? "bg-blue-600 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-blue-50"
                        }`}
                    >
                        {t.icon}
                        {t.label}
                    </button>
                ))}
            </div>

            {tab === "basket" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Basket Litter (Estilo Stokes)</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        El estándar militar e industrial para rescate pesado. Ofrecen una jaula protectora robusta alrededor del paciente.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Materiales:</strong> Acero Inoxidable (pesadas) o Titanio (fuertes pero pesan la mitad).</li>
                        <li>Las que tienen flejes planos de metal (correas de base) son comunes en desastres pero no ideales en cuerdas porque se doblan hacia la espalda del paciente.</li>
                        <li>Existen versiones de dos piezas encastrables para llevarlas en mochila (back-packing).</li>
                    </ul>
                </div>
            )}

            {tab === "plastic" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Camillas Plásticas</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Son excelentes protegiendo contra roces en terrenos húmedos o llenos de arbustos (actúan como un trineo).
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-3 text-sm text-gray-800 mb-3">
                        <strong>Advertencia Crítica:</strong> Para usar una camilla plástica en rescate con cuerdas, <strong>DEBE tener un marco estructural metálico completo</strong>. Las versiones "solo de baranda superior" colapsarán y se partirán bajo cargas de torsión o rescate aéreo.
                    </div>
                </div>
            )}

            {tab === "semirigid" && (
                <div className="bg-white border border-gray-200 rounded-xl p-5 animate-in fade-in">
                    <h3 className="font-bold text-gray-800 mb-3 text-lg">Camillas Semi-Rígidas (Sked®)</h3>
                    <p className="text-sm text-gray-700 mb-3">
                        Plástico flexible que se almacena enrollado y se vuelve rígido al apretarlo alrededor del paciente.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm">
                        <li><strong>Ventajas:</strong> Perfectas para espacios confinados (tuberías, ductos) y para extracción de pozos en orientación completamente vertical.</li>
                        <li><strong>Desventajas:</strong> Al no tener barandas rígidas perimetrales, son extremadamente difíciles de maniobrar o cargar a mano por rescatistas en posición horizontal (no hay de dónde agarrarlas bien sin pellizcar al paciente).</li>
                    </ul>
                </div>
            )}
            
            <div className="bg-gray-100 p-5 rounded-xl border border-gray-200 mt-6">
                <h3 className="font-bold text-gray-800 mb-2">Prueba Estructural NFPA (ASTM F2821)</h3>
                <p className="text-sm text-gray-700">
                    Las camillas certificadas se suspenden de las cuatro esquinas (como una araña de rescate) y se les coloca un peso de prueba interno de <strong>2,500 lbf (11 kN)</strong> midiendo que la deformación no sobrepase los márgenes de seguridad.
                </p>
            </div>
        </div>
    );
}
