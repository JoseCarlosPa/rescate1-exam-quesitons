export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos Clínicos para Análisis</h2>
            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Herida por arma blanca en muslo</h3>
                <p className="italic text-gray-600 mb-4">
                    Joven de 25 años encontrado en la calle con una herida punzante en la cara anterior del muslo derecho. Presenta sangrado activo, rojo brillante y pulsátil. Está pálido y ansioso.
                </p>
                <h4 className="font-medium mb-2">Evaluación Inicial (XABCDE):</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>X: Hemorragia arterial exanguinante en muslo derecho.</li>
                    <li>A: Vía aérea permeable, habla frases cortas.</li>
                    <li>B: FR 26/min, superficial. SpO2 94% (aire ambiente).</li>
                    <li>C: FC 120/min, filiforme. TA 90/60 mmHg. Piel pálida, fría y sudorosa. Llenado capilar 3 seg.</li>
                    <li>D: Alerta, orientado pero ansioso (GCS 15).</li>
                    <li>E: Herida visible en muslo, resto del cuerpo sin lesiones evidentes inicialmente. Temperatura 36.0°C.</li>
                </ul>
                <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    <li>Aplicar presión directa firme sobre la herida con apósitos.</li>
                    <li>Si no cede, aplicar torniquete proximal a la herida. Anotar hora.</li>
                    <li>Administrar oxígeno a alto flujo.</li>
                    <li>Posición supina. Prevenir hipotermia.</li>
                    <li>Canalizar acceso IV de grueso calibre. Iniciar fluidoterapia según protocolo (hipotensión permisiva).</li>
                    <li>Monitorización continua de signos vitales y estado neurológico.</li>
                    <li>Traslado urgente a centro hospitalario con capacidad quirúrgica.</li>
                </ol>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Caída de altura con sospecha de hemorragia interna</h3>
                <p className="italic text-gray-600 mb-4">
                    Varón de 50 años que cayó de un andamio (aprox. 3 metros). Se queja de dolor abdominal intenso. No hay sangrado externo visible.
                </p>
                <h4 className="font-medium mb-2">Evaluación Inicial (XABCDE):</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>X: No hemorragia externa exanguinante.</li>
                    <li>A: Vía aérea permeable. Control cervical manual.</li>
                    <li>B: FR 28/min. Murmullo vesicular presente bilateral. SpO2 95% (aire ambiente).</li>
                    <li>C: FC 130/min, débil. TA 85/50 mmHg. Piel pálida y fría. Abdomen distendido y doloroso a la palpación. Pelvis estable.</li>
                    <li>D: Consciente, orientado, quejumbroso (GCS 14 - confusión leve).</li>
                    <li>E: Exponer abdomen, buscar otros traumatismos. Prevenir hipotermia.</li>
                </ul>
                <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                    <li>Alta sospecha de hemorragia interna (abdominal/pélvica).</li>
                    <li>Inmovilización espinal completa (collarín, tabla espinal).</li>
                    <li>Administrar oxígeno a alto flujo.</li>
                    <li>Canalizar dos accesos IV de grueso calibre. Iniciar fluidoterapia con precaución (objetivo PAS 80-90 mmHg).</li>
                    <li>Manejo de la hipotermia.</li>
                    <li>Monitorización continua.</li>
                    <li>Traslado prioritario a un centro de trauma. Notificar al hospital receptor.</li>
                </ol>
            </div>
        </div>
    );
}