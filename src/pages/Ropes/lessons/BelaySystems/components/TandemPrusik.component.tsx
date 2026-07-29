import { FaLink } from "react-icons/fa6";

export default function TandemPrusik() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-800 border-b pb-2 flex items-center">
                    Belay con Prusiks en Tándem
                </h2>
                <p className="text-gray-600 text-sm mb-5">
                    El estándar histórico, altamente dependiente de la habilidad humana.
                </p>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3 border-b pb-2">
                    <FaLink className="w-5 h-5 text-orange-600" />
                    <h3 className="font-bold text-gray-800 text-lg">Configuración Óptima</h3>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                    Pruebas exhaustivas demuestran que para cuerdas estáticas de rescate (7/16 in y 1/2 in), el mejor rendimiento para frenar cargas grandes se obtiene usando <strong>cordín específico de 8 mm con Prusiks de triple vuelta (Triple-wrap) en tándem</strong>.
                </p>

                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-4">
                    <h4 className="font-bold text-orange-900 mb-2">El Requisito Crítico: Load Release Hitch (LRH)</h4>
                    <p className="text-sm text-gray-800">
                        Los Prusiks siempre deben conectarse al anclaje mediante un <strong>Nudo de Liberación de Carga (LRH)</strong> o correa (Load Release Strap). Si la línea principal falla, los Prusiks morderán la cuerda de belay bloqueándose fuertemente ("hard lock"). Sin el LRH, sería casi imposible liberar esa tensión para reiniciar el descenso de la carga.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Durante el Izado (Raising)</h4>
                        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                            <li>El asegurador jala la cuerda a través de los nudos a la misma velocidad que el equipo de tracción.</li>
                            <li><strong>Evitar la holgura (slack)</strong> es crítico para reducir la distancia de caída.</li>
                            <li>Usar una polea "Prusik-minding" facilita enormemente el paso de la cuerda.</li>
                        </ul>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                        <h4 className="font-bold text-gray-800 mb-2">Durante el Descenso (Lowering)</h4>
                        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                            <li>El operador debe sentir "un poco de fricción" al empujar los nudos, sin apretarlos demasiado.</li>
                            <li>Si se aprietan mucho o hay "panic grab" (agarre de pánico), no morderán la cuerda.</li>
                            <li><strong>Posición Hitchhiker:</strong> Dedos sueltos, pulgares arriba, empujando suavemente el lomo del nudo para no golpearse si se activan de golpe.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-1">Pros</h4>
                    <ul className="text-sm text-green-900 list-disc list-inside">
                        <li>Coste muy bajo.</li>
                        <li>Se adapta a distintos diámetros de cuerda principal.</li>
                        <li>Pasa el Whistle Test (si están bien configurados).</li>
                    </ul>
                </div>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-1">Contras</h4>
                    <ul className="text-sm text-red-900 list-disc list-inside">
                        <li>Alta dependencia del "factor humano".</li>
                        <li>Requiere entrenamiento intensivo para minimizar la holgura (slack).</li>
                        <li>Obliga a armar un Load Release Hitch adicional.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
