export default function Pathophysiology() {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Respuesta Fisiológica a la
                    Pérdida de Sangre</h2>
                <p className="text-gray-700 leading-relaxed">
                    El cuerpo intenta compensar la pérdida de sangre mediante varios mecanismos:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li><strong>Vasoconstricción periférica:</strong> Para redirigir la sangre a órganos vitales.</li>
                    <li><strong>Aumento de la frecuencia cardíaca (taquicardia):</strong> Para mantener el gasto
                        cardíaco.
                    </li>
                    <li><strong>Aumento de la contractilidad cardíaca.</strong></li>
                    <li><strong>Liberación de catecolaminas (adrenalina, noradrenalina):</strong> Potencian la respuesta
                        cardiovascular.
                    </li>
                    <li><strong>Activación del sistema renina-angiotensina-aldosterona:</strong> Para retener sodio y
                        agua.
                    </li>
                    <li><strong>Activación de la cascada de coagulación:</strong> Para formar un coágulo y detener el
                        sangrado.
                    </li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Shock Hipovolémico</h2>
                <p className="text-gray-700 leading-relaxed">
                    Es un estado de perfusión tisular inadecuada causado por un volumen intravascular insuficiente
                    (pérdida de sangre o fluidos). Es una emergencia potencialmente mortal.
                </p>
                <h3 className="font-medium text-lg mt-4 mb-2 text-gray-800">Etapas del Shock (Clasificación ATLS
                    simplificada):</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Parámetro</th>
                            <th className="py-2 px-4 border">Clase I (&lt;15%)</th>
                            <th className="py-2 px-4 border">Clase II (15-30%)</th>
                            <th className="py-2 px-4 border">Clase III (30-40%)</th>
                            <th className="py-2 px-4 border">Clase IV (&gt;40%)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Pérdida de sangre (ml)</td>
                            <td className="py-2 px-4 border">&lt;750</td>
                            <td className="py-2 px-4 border">750-1500</td>
                            <td className="py-2 px-4 border">1500-2000</td>
                            <td className="py-2 px-4 border">&gt;2000</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Frecuencia Cardíaca</td>
                            <td className="py-2 px-4 border">&lt;100</td>
                            <td className="py-2 px-4 border">&gt;100</td>
                            <td className="py-2 px-4 border">&gt;120</td>
                            <td className="py-2 px-4 border">&gt;140</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Presión Arterial</td>
                            <td className="py-2 px-4 border">Normal</td>
                            <td className="py-2 px-4 border">Normal/Disminuida</td>
                            <td className="py-2 px-4 border">Disminuida</td>
                            <td className="py-2 px-4 border">Muy Disminuida</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Frecuencia Respiratoria</td>
                            <td className="py-2 px-4 border">14-20</td>
                            <td className="py-2 px-4 border">20-30</td>
                            <td className="py-2 px-4 border">30-40</td>
                            <td className="py-2 px-4 border">&gt;35</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Estado Mental</td>
                            <td className="py-2 px-4 border">Ansioso leve</td>
                            <td className="py-2 px-4 border">Ansioso moderado</td>
                            <td className="py-2 px-4 border">Ansioso, confuso</td>
                            <td className="py-2 px-4 border">Confuso, letárgico</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-700 mt-2 leading-relaxed">
                    <strong>Shock Compensado:</strong> El cuerpo aún puede mantener la presión arterial y la perfusión a
                    órganos vitales. Signos sutiles.
                    <br/>
                    <strong>Shock Descompensado:</strong> Los mecanismos compensatorios fallan, la presión arterial cae
                    y la perfusión tisular se ve comprometida. Signos evidentes.
                    <br/>
                    <strong>Shock Irreversible:</strong> Daño celular extenso, fallo multiorgánico. Alta mortalidad a
                    pesar del tratamiento.
                </p>
            </div>
        </div>
    );
}