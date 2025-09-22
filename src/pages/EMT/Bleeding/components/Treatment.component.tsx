export default function Treatment() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios del Manejo
                    (XABCDE)</h2>
                <p className="text-gray-700 leading-relaxed">
                    La prioridad en trauma con hemorragia es el control de la misma. Se sigue la nemotecnia XABCDE:
                </p>
                <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                    <li><strong>X:</strong> Control de Hemorragia Exanguinante (la que mata primero).</li>
                    <li><strong>A:</strong> Vía Aérea permeable con control cervical.</li>
                    <li><strong>B:</strong> Ventilación y oxigenación adecuadas.</li>
                    <li><strong>C:</strong> Circulación (control de otras hemorragias, pulso, perfusión, accesos
                        venosos).
                    </li>
                    <li><strong>D:</strong> Déficit Neurológico (evaluación neurológica).</li>
                    <li><strong>E:</strong> Exposición y Entorno (desvestir para evaluar, prevenir hipotermia).</li>
                </ul>
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Control de Hemorragias
                    Externas</h2>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                        <strong>Presión Directa:</strong> Aplicar presión firme y constante sobre la herida con un
                        apósito limpio o la mano enguantada. Es la primera y más efectiva medida. Mantener por varios
                        minutos.
                    </li>
                    <li>
                        <strong>Elevación:</strong> Elevar la extremidad lesionada por encima del nivel del corazón (si
                        no hay sospecha de fractura), junto con la presión directa.
                    </li>
                    <li>
                        <strong>Apósitos y Vendajes:</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Utilizar apósitos estériles o limpios.</li>
                            <li>Aplicar un vendaje compresivo si la presión directa manual no es suficiente o se
                                necesita liberar las manos. No debe ser tan apretado que corte la circulación distal.
                            </li>
                            <li><strong>Agentes Hemostáticos:</strong> Si están disponibles y protocolizados, pueden
                                usarse en heridas profundas o juncionales donde el torniquete no es aplicable. Se
                                aplican directamente en la herida y se combinan con presión directa.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Torniquete:</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li><strong>Indicaciones:</strong> Hemorragia arterial masiva en una extremidad que no se
                                controla con presión directa. Amputaciones traumáticas con sangrado activo.
                            </li>
                            <li><strong>Aplicación:</strong> Colocar 5-7 cm (2-3 pulgadas) proximal a la herida (más
                                cerca del torso), nunca sobre una articulación. Apretar hasta que el sangrado se detenga
                                y desaparezca el pulso distal. Anotar la hora de aplicación. Un segundo torniquete puede
                                ser necesario.
                            </li>
                            <li>Considerar el dolor asociado y manejarlo según protocolo.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Puntos de Presión Arterial:</strong> Aplicar presión sobre la arteria principal que
                        irriga la zona lesionada (ej. femoral, braquial). Es una medida temporal mientras se prepara
                        otro método.
                    </li>
                </ol>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de Hemorragias
                    Internas</h2>
                <p className="text-gray-700 leading-relaxed">
                    Sospechar en todo paciente traumatizado con signos de shock sin hemorragia externa evidente.
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Manejo del shock (ver abajo).</li>
                    <li>Inmovilización de fracturas (especialmente pelvis y fémur, que pueden sangrar profusamente).
                    </li>
                    <li>Transporte rápido y prioritario a un centro con capacidad quirúrgica.</li>
                    <li>No retrasar el traslado con procedimientos innecesarios en la escena.</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo del Shock
                    Hipovolémico</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Posición:</strong> Decúbito supino. Trendelenburg modificado (elevar piernas) puede
                        considerarse si no hay trauma abdominal o craneal.
                    </li>
                    <li><strong>Oxigenoterapia:</strong> Administrar oxígeno a alto flujo (10-15 L/min con mascarilla
                        con reservorio).
                    </li>
                    <li><strong>Control de la Temperatura:</strong> Prevenir la hipotermia cubriendo al paciente con
                        mantas (incluso en climas cálidos). La hipotermia empeora la coagulopatía.
                    </li>
                    <li><strong>Acceso Vascular:</strong> Canalizar una o dos vías venosas periféricas de grueso calibre
                        (ej. 14G, 16G).
                    </li>
                    <li>
                        <strong>Fluidoterapia (Resucitación con fluidos):</strong>
                        <ul className="list-disc list-inside ml-4 space-y-1">
                            <li>Administrar cristaloides isotónicos (Solución Salina 0.9% o Ringer Lactato) tibios si es
                                posible.
                            </li>
                            <li>En trauma, se aboga por la "hipotensión permisiva" en pacientes sin Traumatismo
                                Craneoencefálico (TCE) severo, administrando bolos de 250-500 ml hasta alcanzar una PAS
                                de 80-90 mmHg o la recuperación del pulso radial. El objetivo es mantener perfusión, no
                                normalizar la TA, hasta el control quirúrgico de la hemorragia.
                            </li>
                            <li>En pacientes con TCE, se busca una PAS mayor a 100-110 mmHg.</li>
                            <li>Monitorizar la respuesta a los fluidos (mejoría de FC, TA, estado mental, llenado
                                capilar).
                            </li>
                        </ul>
                    </li>
                    <li><strong>Transporte Rápido:</strong> El tratamiento definitivo del shock hemorrágico severo es
                        quirúrgico.
                    </li>
                </ul>
            </div>
        </div>
    );
}