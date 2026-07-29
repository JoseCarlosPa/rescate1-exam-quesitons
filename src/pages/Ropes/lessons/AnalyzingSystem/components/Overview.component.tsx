import { MdAnalytics } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";

export default function Overview() {
    return (
        <div className="space-y-8">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdAnalytics className="w-8 h-8 text-pink-600 mr-3" />
                    <h2 className="text-2xl font-bold text-pink-800">Análisis del Sistema (System Analysis)</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Un sistema de rescate es solo una cadena. No importa cuántos eslabones de titanio tenga, si un eslabón es de plástico, todo fallará bajo peso. El análisis es la disciplina matemática y visual de calcular esa resistencia en el campo.
                </p>
                <div className="bg-pink-100 p-4 rounded flex items-start gap-3 border border-pink-200">
                    <FaShieldAlt className="w-6 h-6 text-pink-700 flex-shrink-0 mt-1" />
                    <p className="text-sm text-pink-900">
                        <strong>Static vs Dynamic:</strong> Usualmente en campo, hacemos análisis "estáticos" rápidos asumiendo que no habrá impactos. Debido a que la verdadera destrucción ocurre en golpes dinámicos ("shock loads"), el Factor de Seguridad Estático (SSSF) que calculemos <strong>debe ser siempre alto (ej. 10:1)</strong> para dar suficiente margen si algo salta o cae de golpe.
                    </p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-800 mb-4 text-lg">Los Tres Exámenes del Rescatista</h3>
                
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-900 mb-2">1. Punto Crítico</h4>
                        <p className="text-xs text-blue-800">
                            ¿Si corto esta cinta o mosquetón, alguien muere? Si la respuesta es sí, es un punto crítico. La regla es respaldarlo o añadir redundancia (salvo raras excepciones tácticas).
                        </p>
                    </div>
                    
                    <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg">
                        <h4 className="font-bold text-teal-900 mb-2">2. El Test del Silbato</h4>
                        <p className="text-xs text-teal-800">
                            Teoría de campo: Alguien toca el silbato de alarma y <em>absolutamente todos sueltan la cuerda</em>. Si la camilla cae, reprobaste el diseño de tu sistema. Necesitas trinquetes (Ratchets).
                        </p>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h4 className="font-bold text-purple-900 mb-2">3. Pizarra Blanca</h4>
                        <p className="text-xs text-purple-800">
                            Dibujar las fuerzas. Un análisis de eslabón por eslabón dividiendo Carga Total vs Fuerza de Ruptura Mínima (MBS).
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
