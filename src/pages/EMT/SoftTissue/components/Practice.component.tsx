export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                Clínicos:
                Lesiones de Tejido Blando</h2>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 1: Laceración
                    Profunda
                    con Hemorragia Arterial</h3>
                <p className="italic text-gray-600 mb-4">
                    Un trabajador de construcción de 35 años sufre una laceración en el
                    antebrazo
                    derecho con una sierra circular. Presenta sangrado rojo brillante y
                    pulsátil.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>X (Hemorragia Exanguinante):</strong> Hemorragia arterial
                            activa
                            visible en antebrazo.
                        </li>
                        <li><strong>A (Vía Aérea):</strong> Permeable, hablando con frases
                            completas.
                        </li>
                        <li><strong>B (Ventilación):</strong> FR 20/min, adecuada profundidad.
                            SpO₂
                            98% (aire ambiente inicial).
                        </li>
                        <li><strong>C (Circulación):</strong> FC 110/min, pulso radial derecho
                            débil, piel pálida y fría distal a la lesión. Relleno capilar mayor
                            a 2
                            seg en mano derecha.
                        </li>
                        <li><strong>D (Déficit Neurológico):</strong> Alerta (AVDI), orientado,
                            ansioso.
                        </li>
                        <li><strong>E (Exposición/Ambiente):</strong> Laceración de
                            aproximadamente
                            10 cm, profunda, en cara anterior del antebrazo derecho.
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                        (AAOS):</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Asegurar BSI y seguridad de la escena.</li>
                        <li>Aplicar presión directa firme sobre la herida con apósitos
                            estériles.
                        </li>
                        <li>Si la hemorragia persiste, aplicar un vendaje compresivo sobre los
                            apósitos.
                        </li>
                        <li>Si la hemorragia arterial no se controla, aplicar un torniquete
                            comercial proximal a la herida en el brazo. Anotar la hora de
                            aplicación.
                        </li>
                        <li>Elevar la extremidad por encima del nivel del corazón (si no hay
                            sospecha de fractura asociada que lo contraindique).
                        </li>
                        <li>Administrar oxígeno a alto flujo (ej. mascarilla no recirculante a
                            15
                            L/min).
                        </li>
                        <li>Tratar para shock: mantener al paciente abrigado, colocar en
                            posición
                            supina (si es tolerada y no hay otras lesiones).
                        </li>
                        <li>Traslado rápido al centro útil más cercano. Reevaluar estado
                            hemodinámico y torniquete durante el traslado.
                        </li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Objeto Empalado
                    en
                    Muslo</h3>
                <p className="italic text-gray-600 mb-4">
                    Un joven de 18 años cae de su bicicleta sobre una valla rota, resultando con
                    una
                    varilla metálica empalada en la cara anterior de su muslo izquierdo.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>A, B:</strong> Vía aérea permeable, ventilación espontánea y
                            adecuada.
                        </li>
                        <li><strong>C:</strong> FC 90/min, TA 120/80 mmHg. Pulsos pedio y tibial
                            posterior izquierdos presentes y simétricos con el lado no
                            lesionado. No
                            hay sangrado externo masivo visible alrededor del objeto.
                        </li>
                        <li><strong>D:</strong> Alerta y orientado, refiere dolor intenso en el
                            muslo.
                        </li>
                        <li><strong>E:</strong> Varilla metálica de aproximadamente 1 cm de
                            diámetro
                            empalada en el muslo izquierdo. La zona circundante está tensa pero
                            sin
                            hematoma expansivo inmediato.
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                        (AAOS):</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Asegurar BSI y seguridad de la escena.</li>
                        <li>NO intentar retirar el objeto empalado.</li>
                        <li>Estabilizar el objeto en su lugar utilizando apósitos voluminosos y
                            vendajes para minimizar el movimiento. Se puede usar un vaso de
                            cartón
                            cortado o similar para proteger el objeto.
                        </li>
                        <li>Controlar cualquier sangrado visible aplicando presión directa
                            alrededor
                            del sitio de entrada, sin ejercer presión sobre el objeto mismo.
                        </li>
                        <li>Evaluar y documentar el estado neurovascular distal (pulsos, color,
                            temperatura, sensibilidad, motricidad) de la extremidad lesionada
                            antes
                            y después de la inmovilización.
                        </li>
                        <li>Administrar oxígeno según necesidad.</li>
                        <li>Inmovilizar la extremidad afectada en una férula si es necesario
                            para
                            prevenir el movimiento del objeto durante el traslado.
                        </li>
                        <li>Traslado cuidadoso y rápido al hospital apropiado. Notificar al
                            hospital
                            receptor sobre la naturaleza de la lesión.
                        </li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Evisceración
                    Abdominal</h3>
                <p className="italic text-gray-600 mb-4">
                    Un hombre de 40 años es encontrado tras una agresión con arma blanca en el
                    abdomen. Presenta una herida abierta con exposición de asas intestinales.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li><strong>A:</strong> Vía aérea permeable.</li>
                        <li><strong>B:</strong> FR 22/min, superficial.</li>
                        <li><strong>C:</strong> FC 115/min, TA 100/60 mmHg. Piel pálida y
                            sudorosa.
                        </li>
                        <li><strong>D:</strong> Responde a estímulos verbales, desorientado en
                            tiempo.
                        </li>
                        <li><strong>E:</strong> Herida abdominal de ~8 cm en cuadrante inferior
                            izquierdo con asas intestinales visibles y expuestas. No hay
                            sangrado
                            masivo activo de la herida en sí, pero sí de los tejidos
                            circundantes.
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                        (AAOS):</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Asegurar BSI y seguridad de la escena.</li>
                        <li>NO intentar reintroducir los órganos expuestos en la cavidad
                            abdominal.
                        </li>
                        <li>NO aplicar presión directa sobre los órganos eviscerados.</li>
                        <li>Cubrir los órganos expuestos con un apósito estéril grande
                            humedecido
                            con solución salina estéril.
                        </li>
                        <li>Luego, cubrir el apósito húmedo con un vendaje oclusivo seco y
                            grande
                            (ej. plástico limpio o un campo estéril seco) para mantener la
                            humedad y
                            el calor, y para prevenir mayor contaminación. Asegurar los bordes
                            del
                            vendaje oclusivo.
                        </li>
                        <li>Administrar oxígeno a alto flujo.</li>
                        <li>Tratar para shock: mantener al paciente caliente, colocar en
                            posición
                            supina con las rodillas flexionadas si ayuda a reducir la tensión en
                            el
                            abdomen (si no hay otras lesiones que lo contraindiquen).
                        </li>
                        <li>Establecer acceso IV según protocolo y considerar la administración
                            de
                            fluidos si hay signos de hipoperfusión.
                        </li>
                        <li>Traslado rápido y urgente al centro de trauma apropiado.</li>
                    </ol>
                </div>
            </div>

        </div>
    );
}