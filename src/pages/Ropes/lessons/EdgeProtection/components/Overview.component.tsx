import { MdOutlineShield } from "react-icons/md";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Objetivo */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdOutlineShield className="w-8 h-8 text-yellow-600 mr-3" />
                    <h2 className="text-2xl font-bold text-yellow-800">Principios de Edge Protection</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    La protección de bordes salva vidas y facilita el rescate. Su propósito no es solo cuidar la cuerda, sino optimizar la eficiencia completa del sistema.
                </p>
            </div>

            {/* Metas */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">4 Metas de la Protección de Bordes</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-semibold text-yellow-800 mb-1">1. Proteger la Cuerda</p>
                        <p className="text-sm text-gray-700">
                            Evita la abrasión y los dobleces agudos que reducen enormemente la resistencia a la tracción (tensile strength).
                        </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-semibold text-yellow-800 mb-1">2. Proteger la Superficie</p>
                        <p className="text-sm text-gray-700">
                            Evita tirar escombros o piedras sobre la gente abajo, y protege edificios o infraestructura.
                        </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-semibold text-yellow-800 mb-1">3. Reducir la Fricción</p>
                        <p className="text-sm text-gray-700">
                            <strong>Crítico:</strong> La fricción del borde roba energía. Reducirla evita tener que sumar más rescatistas jalando o aumentar la ventaja mecánica (MA).
                        </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="font-semibold text-yellow-800 mb-1">4. Mantener la Cuerda Limpia</p>
                        <p className="text-sm text-gray-700">
                            Vital para que los bloqueadores (ascenders), poleas o nudos Prusik no resbalen por lodo o hielo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-amber-100 border-l-4 border-amber-500 p-5 rounded-r-lg">
                <p className="font-semibold text-amber-900 mb-2">Equipos de Protección vs. Movimiento de Cuerda</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                    Cuanto más se mueva una cuerda bajo tensión (como en un sistema de descenso o elevación), mayor será el nivel de protección requerido. Una cuerda estática puede protegerse con un simple pad, pero una cuerda móvil pesada requiere rodillos (rollers) o superficies deslizantes de baja fricción.
                </p>
            </div>
        </div>
    );
}
