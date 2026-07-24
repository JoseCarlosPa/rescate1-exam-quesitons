import { FaRuler } from "react-icons/fa";

const SPECS = [
    {
        title: "Resistencia Tensil",
        icon: "💪",
        color: "bg-violet-50 border-violet-200",
        accent: "text-violet-700",
        content: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    La resistencia tensil es la fuerza que la cuerda soporta antes de romperse. Varía
                    directamente con el diámetro: a mayor diámetro, mayor resistencia, pero también
                    mayor peso y volumen.
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="font-semibold text-gray-800 mb-2">Cuerda 7/16" (11mm) — ¡Nuevo estándar!</p>
                    <p>NFPA 1983 fue modificado para permitir una cuerda de 7/16" (11mm) calificada para
                    "Uso General". Ejemplos: CMC G11 Lifeline (cubierta de poliéster/núcleo de nylon) y
                    Sterling Tech 11 (cubierta de Technora/núcleo de nylon). Permite kits más livianos
                    manteniendo el nivel de desempeño General.</p>
                </div>
                <p className="italic text-gray-500">
                    Los fabricantes usan el estándar Cordage Institute CI 1800 para medir la resistencia
                    tensil de cuerdas kernmantle estáticas y de baja elongación.
                </p>
            </div>
        ),
    },
    {
        title: "Elongación",
        icon: "↕️",
        color: "bg-blue-50 border-blue-200",
        accent: "text-blue-700",
        content: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    La elongación es el porcentaje de aumento de longitud bajo una carga determinada.
                    Las cuerdas de baja elongación son preferidas en rescate porque minimizan el movimiento
                    cuando se aplica una carga y hacen los sistemas de izado más eficientes.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <p className="font-semibold text-green-700 mb-1">Cuerda Estática (CI 1801)</p>
                        <p>Elongación <strong>máxima de 6%</strong> al 10% de la MBS</p>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                        <p className="font-semibold text-amber-700 mb-1">Cuerda de Baja Elongación (CI 1801)</p>
                        <p>Elongación entre <strong>6% y 10%</strong> al 10% de la MBS</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="font-semibold text-gray-800 mb-1">Datos requeridos por NFPA 1983 en la etiqueta</p>
                    <ul className="space-y-1 text-xs">
                        <li>▸ Elongación a 300 lbf (1.35 kN)</li>
                        <li>▸ Elongación a 600 lbf (2.7 kN)</li>
                        <li>▸ Elongación a 1,000 lbf (4.4 kN)</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-1 italic">Estos valores son útiles para uso en campo.</p>
                </div>
            </div>
        ),
    },
    {
        title: "Resistencia a la Abrasión",
        icon: "🛡️",
        color: "bg-red-50 border-red-200",
        accent: "text-red-700",
        content: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    La historia del montañismo y la espeleología demuestra que las cuerdas cortadas
                    suelen deberse a la abrasión. La falla ocurre por pérdida de resistencia cuando la
                    cuerda se abrade sobre una arista o recibe una carga de impacto doblada sobre una arista.
                </p>
                <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="font-semibold text-gray-800 mb-2">Tendencias observadas en pruebas publicadas:</p>
                    <ul className="space-y-1.5 text-xs">
                        <li className="flex items-start gap-1"><span className="text-violet-500">▸</span> Las cuerdas kernmantle estáticas y de baja elongación se desempeñan mejor que otras construcciones.</li>
                        <li className="flex items-start gap-1"><span className="text-violet-500">▸</span> En general, cuanto más rígida es la cuerda kernmantle, mayor resistencia a la abrasión.</li>
                        <li className="flex items-start gap-1"><span className="text-violet-500">▸</span> Las cuerdas americanas generalmente tienen mejor resistencia a la abrasión que las europeas de rescate/espeleología, probablemente por sus cubiertas más gruesas.</li>
                    </ul>
                </div>
                <p className="text-xs text-gray-500 italic">
                    No existe actualmente un método de prueba estándar de abrasión que todos los fabricantes usen, ni una prueba publicada que involucre todas las cuerdas con un único método.
                </p>
            </div>
        ),
    },
    {
        title: "Cubierta (Sheath) y Deslizamiento",
        icon: "🧤",
        color: "bg-amber-50 border-amber-200",
        accent: "text-amber-700",
        content: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    La cubierta puede tener 16, 32 o 48 hebras y patrón 1-sobre-1-bajo o 2-sobre-2-bajo.
                    Afecta el manejo, la resistencia a la abrasión y la knotabilidad.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-1">48 hebras</p>
                        <ul className="text-xs space-y-1">
                            <li>▸ Superficie muy lisa y suave</li>
                            <li>▸ Cubierta visualmente más delgada</li>
                            <li>▸ Más fácil de manejar</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-1">16 hebras</p>
                        <ul className="text-xs space-y-1">
                            <li>▸ Hebras más gruesas — superficie más rugosa</li>
                            <li>▸ Cubierta visualmente más robusta en corte transversal</li>
                            <li>▸ Algunos dicen mayor resistencia a la abrasión</li>
                        </ul>
                    </div>
                </div>
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                    <p className="font-semibold text-orange-800 mb-1">⚠️ Deslizamiento de cubierta</p>
                    <p className="text-xs">Si la cubierta se desliza sobre el núcleo, puede aumentar el diámetro de la cuerda al entrar en una polea o a través de un prusik — causando un atascamiento. Algunos fabricantes están desarrollando sistemas para unir cubierta y núcleo y evitar este problema.</p>
                </div>
            </div>
        ),
    },
    {
        title: "Knotabilidad y Manejo",
        icon: "✋",
        color: "bg-green-50 border-green-200",
        accent: "text-green-700",
        content: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    En rescate se necesita un equilibrio: el nudo debe ser fácil de atar y de desatar después de usarse bajo carga.
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-green-700 mb-1">Cuerda suave/flexible</p>
                        <ul className="text-xs space-y-1">
                            <li>✅ Fácil de atar y ajustar nudos a mano</li>
                            <li>✅ Se guarda en bolsa más fácilmente</li>
                            <li>❌ Nudos quedan imposibles de desatar después de carga</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-green-700 mb-1">Cuerda rígida</p>
                        <ul className="text-xs space-y-1">
                            <li>✅ Nudos más fáciles de desatar después de carga</li>
                            <li>✅ Más control en rapel y descenso</li>
                            <li>❌ Difícil de atar; nudos no se ajustan bien a mano</li>
                        </ul>
                    </div>
                </div>
                <p className="text-xs text-gray-500 italic">
                    Las cuerdas de espeleología tienden a ser excepcionalmente rígidas para facilitar el ascenso eficiente.
                    Los rescatistas más experimentados suelen preferir cuerdas más rígidas por la durabilidad y el control.
                </p>
            </div>
        ),
    },
    {
        title: "Color",
        icon: "🎨",
        color: "bg-pink-50 border-pink-200",
        accent: "text-pink-700",
        content: (
            <div className="space-y-3 text-sm text-gray-700">
                <p>
                    El color de la cuerda sirve para gestión de múltiples cuerdas y para inspección visual.
                </p>
                <div className="space-y-2">
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-1">🔍 Inspección más fácil</p>
                        <p className="text-xs">Una cubierta de color distinto al blanco facilita detectar daños: si el núcleo blanco queda visible, el daño a la cubierta (y posiblemente al núcleo) es inmediatamente evidente.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-1">📋 Gestión de cuerdas</p>
                        <p className="text-xs">Los diferentes colores permiten identificar qué cuerda halar por nombre. Algunos departamentos usan color para indicar longitud o año de servicio — aunque el manual CMC recomienda poner esa información en el marcador del extremo de la cuerda.</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-gray-200">
                        <p className="font-semibold text-gray-700 mb-1">🌑 Operaciones especiales</p>
                        <p className="text-xs">Los colores vivos son más visibles en condiciones de baja luz. Los colores apagados están disponibles para operaciones militares y de seguridad pública. Un equipo SWAT de sheriff reportó que una cuerda negra colgando de su helicóptero era difícil de ver contra el cielo azul — preferían una cuerda de color brillante.</p>
                    </div>
                </div>
            </div>
        ),
    },
];

export default function Specifications() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    <FaRuler className="w-6 h-6 mr-2 text-violet-500" />
                    Especificaciones de la Cuerda de Rescate
                </h2>
                <p className="text-gray-600 text-sm mb-6">
                    Las especificaciones de una cuerda son un compromiso: mejorar en un área normalmente
                    requiere sacrificar algo en otra. Aquí se explican las características clave:
                </p>
            </div>

            <div className="space-y-4">
                {SPECS.map((spec, idx) => (
                    <div key={idx} className={`rounded-xl border-2 p-5 ${spec.color}`}>
                        <h3 className={`text-lg font-bold mb-3 flex items-center gap-2 ${spec.accent}`}>
                            <span>{spec.icon}</span>
                            {spec.title}
                        </h3>
                        {spec.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
