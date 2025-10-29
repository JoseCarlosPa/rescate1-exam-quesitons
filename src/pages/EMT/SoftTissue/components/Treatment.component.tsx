export default function Treatment(){
    return(<div className="space-y-6">
        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo
                General de Lesiones de Tejido Blando (AAOS)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
                El manejo prehospitalario de las lesiones de tejido blando se centra en
                controlar la hemorragia, prevenir la contaminación, preservar el tejido
                dañado y
                tratar el shock. Siga siempre los protocolos locales y las directrices de la
                AAOS.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-800">Control de
                        Hemorragia</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Presión directa:</strong> Aplicar con una gasa estéril
                            sobre
                            la herida.
                        </li>
                        <li><strong>Elevación:</strong> Elevar la extremidad lesionada por
                            encima del nivel del corazón (si no hay sospecha de fractura).
                        </li>
                        <li><strong>Vendaje compresivo:</strong> Aplicar un vendaje firme
                            sobre
                            el apósito para mantener la presión.
                        </li>
                        <li><strong>Torniquete:</strong> Utilizar para hemorragias
                            arteriales
                            severas en extremidades que no se controlan con otros métodos.
                            Anotar la hora de aplicación.
                        </li>
                        <li><strong>Agentes hemostáticos:</strong> Considerar según
                            protocolo
                            para hemorragias difíciles de controlar.
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-lg mb-2 text-gray-800">Cuidado de
                        Heridas
                        Abiertas Específicas</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li><strong>Abrasiones:</strong> Limpiar si es posible, cubrir con
                            apósito estéril.
                        </li>
                        <li><strong>Laceraciones:</strong> Controlar hemorragia, cubrir.
                            Evaluar
                            profundidad y posible daño a estructuras subyacentes.
                        </li>
                        <li><strong>Punciones:</strong> No retirar objetos empalados;
                            estabilizarlos en su lugar. Cubrir la herida alrededor del
                            objeto.
                        </li>
                        <li><strong>Avulsiones:</strong> Si el colgajo de piel está
                            presente,
                            reposicionarlo cuidadosamente en su lugar (si está limpio) antes
                            de
                            vendar. Si está separado, tratar como amputación parcial.
                        </li>
                        <li><strong>Amputaciones:</strong> Controlar hemorragia del muñón.
                            Envolver la parte amputada en gasa estéril humedecida con
                            solución
                            salina, colocar en bolsa plástica y luego en hielo (no
                            directamente
                            sobre el hielo).
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo
                de
                Heridas Cerradas</h2>
            <p className="text-gray-700 leading-relaxed">
                Aunque la piel no esté rota, las heridas cerradas pueden ser graves. El
                manejo
                se enfoca en el acrónimo RICES (o PRICE):
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                <li><strong>R</strong>est (Reposo): Evitar el movimiento de la zona
                    afectada.
                </li>
                <li><strong>I</strong>ce (Hielo): Aplicar frío local para reducir hinchazón
                    y
                    dolor (no directamente sobre la piel).
                </li>
                <li><strong>C</strong>ompression (Compresión): Aplicar un vendaje elástico
                    para
                    limitar la hinchazón.
                </li>
                <li><strong>E</strong>levation (Elevación): Elevar la parte lesionada.</li>
                <li><strong>S</strong>plinting (Inmovilización): Inmovilizar si se sospecha
                    fractura o lesión grave.
                </li>
            </ul>
            <p className="text-gray-700 mt-2 leading-relaxed">
                Vigilar signos de síndrome compartimental en lesiones por aplastamiento o
                hematomas extensos (dolor desproporcionado, palidez, ausencia de pulso,
                parestesias, parálisis).
            </p>
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                Especiales</h2>
            <div className="space-y-4">
                <div className="p-4 bg-orange-50 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-orange-700">Heridas
                        Penetrantes
                        en Tórax (Neumotórax Abierto)</h3>
                    <p className="text-gray-700">Cubrir con un sello torácico oclusivo de
                        tres
                        lados (o según protocolo local) para permitir la salida de aire y
                        prevenir la entrada.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-blue-700">Evisceración
                        Abdominal</h3>
                    <p className="text-gray-700">No intentar reintroducir los órganos.
                        Cubrir
                        con un apósito estéril grande humedecido con solución salina y luego
                        con
                        un vendaje oclusivo seco para mantener el calor y la humedad.</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-green-700">Lesiones por
                        Mordedura</h3>
                    <p className="text-gray-700">Alto riesgo de infección. Controlar
                        hemorragia,
                        limpiar si es posible y cubrir. Considerar la necesidad de
                        profilaxis
                        antirrábica y antitetánica.</p>
                </div>
            </div>
        </div>
    </div>);
}