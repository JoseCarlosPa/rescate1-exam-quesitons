export default function Response(){
    return(
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Establecimiento
                    de zonas operacionales</h2>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                        <h3 className="font-medium text-lg mb-2 text-red-700">Zona Caliente</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Área de máximo
                            peligro</strong></p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Contaminación presente</li>
                            <li>Solo personal especializado</li>
                            <li>EPP nivel A o B</li>
                            <li>Tiempo limitado de exposición</li>
                            <li>Sistema de comunicación especial</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Zona Tibia</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Área de
                            descontaminación</strong></p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Estaciones de descontaminación</li>
                            <li>Control de acceso</li>
                            <li>EPP nivel C</li>
                            <li>Personal de apoyo</li>
                            <li>Triaje inicial</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                        <h3 className="font-medium text-lg mb-2 text-green-700">Zona Fría</h3>
                        <p className="text-sm text-gray-700 mb-2"><strong>Área segura</strong></p>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Sin contaminación</li>
                            <li>Centro de comando</li>
                            <li>Área de tratamiento</li>
                            <li>Logística y apoyo</li>
                            <li>EPP estándar</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Triaje en
                    incidentes de múltiples víctimas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Sistema START (Simple
                            Triage and Rapid Treatment)</h3>
                        <div className="space-y-3">
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                                <h4 className="font-medium text-green-700">VERDE -
                                    Leve/Ambulatorio</h4>
                                <p className="text-sm text-gray-700">Puede caminar, lesiones
                                    menores, no urgente</p>
                            </div>
                            <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                                <h4 className="font-medium text-yellow-700">AMARILLO - Urgente</h4>
                                <p className="text-sm text-gray-700">FR &lt;30, pulso radial
                                    presente, sigue órdenes simples</p>
                            </div>
                            <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                                <h4 className="font-medium text-red-700">ROJO - Inmediato</h4>
                                <p className="text-sm text-gray-700">FR &gt;30, sin pulso radial, o
                                    no sigue órdenes</p>
                            </div>
                            <div className="bg-black p-3 rounded border-l-4 border-black">
                                <h4 className="font-medium text-white">NEGRO - Expectante</h4>
                                <p className="text-sm text-gray-300">Sin respiración espontánea
                                    después de abrir vía aérea</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Algoritmo de decisión
                            START</h3>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li><strong>¿Puede caminar?</strong>
                                    <p className="text-sm ml-4">Sí → VERDE</p>
                                </li>
                                <li><strong>¿Respira?</strong>
                                    <p className="text-sm ml-4">No → Abrir vía aérea</p>
                                    <p className="text-sm ml-4">Aún no respira → NEGRO</p>
                                </li>
                                <li><strong>Frecuencia respiratoria</strong>
                                    <p className="text-sm ml-4">&gt;30/min → ROJO</p>
                                </li>
                                <li><strong>Perfusión (pulso radial)</strong>
                                    <p className="text-sm ml-4">Ausente → ROJO</p>
                                </li>
                                <li><strong>Estado mental</strong>
                                    <p className="text-sm ml-4">No sigue órdenes → ROJO</p>
                                    <p className="text-sm ml-4">Sigue órdenes → AMARILLO</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Descontaminación</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Principios
                            generales</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li><strong>Prioridad:</strong> Salvamento de vidas antes que
                                descontaminación completa
                            </li>
                            <li><strong>Secuencia:</strong> Descontaminación gruesa → fina → médica
                            </li>
                            <li><strong>Flujo unidireccional:</strong> De zona caliente a fría</li>
                            <li><strong>Separación por género:</strong> Líneas separadas
                                hombres/mujeres
                            </li>
                            <li><strong>Privacidad:</strong> Carpas o biombos cuando sea posible
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-medium text-lg mb-2 text-gray-800">Proceso de
                            descontaminación</h3>
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                <li><strong>Registro de entrada:</strong> Identificación y
                                    documentación
                                </li>
                                <li><strong>Remoción de ropa:</strong> Cortar si es necesario, no
                                    por encima de la cabeza
                                </li>
                                <li><strong>Lavado grueso:</strong> Agua tibia, jabón suave, 2-3
                                    minutos
                                </li>
                                <li><strong>Enjuague:</strong> Abundante agua limpia</li>
                                <li><strong>Verificación:</strong> Monitor de radiación si aplica
                                </li>
                                <li><strong>Vestimenta limpia:</strong> Ropa/mantas limpias</li>
                                <li><strong>Evaluación médica:</strong> Triaje y tratamiento</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tratamiento
                    específico por agente</h2>
                <div className="space-y-4">
                    <div className="p-4 bg-red-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-red-700">Agentes Nerviosos</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-medium mb-2">Antídotos:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li><strong>Atropina:</strong> 2-6 mg IV/IM inicial, repetir
                                        según necesidad
                                    </li>
                                    <li><strong>Pralidoxima (2-PAM):</strong> 1-2 g IV en 15-30 min
                                    </li>
                                    <li><strong>Diazepam:</strong> 10 mg IM para convulsiones</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-medium mb-2">Signos de mejoría:</h4>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    <li>Disminución de secreciones</li>
                                    <li>Mejora de la respiración</li>
                                    <li>Pupilas menos contraídas</li>
                                    <li>Menos fasciculaciones</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-orange-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-orange-700">Agentes
                            Vesicantes</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Descontaminación inmediata:</strong> Irrigación copiosa con
                                agua
                            </li>
                            <li><strong>Manejo de quemaduras:</strong> Como quemaduras térmicas</li>
                            <li><strong>Protección ocular:</strong> Irrigación y protección</li>
                            <li><strong>Cuidado respiratorio:</strong> Oxígeno, broncodilatadores si
                                es necesario
                            </li>
                            <li><strong>Analgesia:</strong> Control del dolor importante</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-blue-700">Exposición
                            radiológica</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Descontaminación externa:</strong> Remover ropa (90% de
                                contaminación)
                            </li>
                            <li><strong>Lavado:</strong> Agua tibia y jabón suave</li>
                            <li><strong>Monitorización:</strong> Detector de radiación</li>
                            <li><strong>Yoduro de potasio:</strong> Si hay yodo radiactivo (I-131)
                            </li>
                            <li><strong>Soporte sintomático:</strong> Náusea, vómito, diarrea</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-green-50 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-green-700">Agentes
                            biológicos</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Precauciones universales:</strong> Aislamiento apropiado
                            </li>
                            <li><strong>Antibióticos profilácticos:</strong> Según protocolo de
                                salud pública
                            </li>
                            <li><strong>Vacunación:</strong> Si está disponible (ej. viruela)</li>
                            <li><strong>Soporte sintomático:</strong> Manejo de fiebre,
                                deshidratación
                            </li>
                            <li><strong>Notificación:</strong> Autoridades de salud pública</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Equipo de
                    protección personal (EPP)</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="py-2 px-4 border">Nivel</th>
                            <th className="py-2 px-4 border">Protección respiratoria</th>
                            <th className="py-2 px-4 border">Protección corporal</th>
                            <th className="py-2 px-4 border">Uso recomendado</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Nivel A</td>
                            <td className="py-2 px-4 border">SCBA presión positiva</td>
                            <td className="py-2 px-4 border">Traje encapsulado</td>
                            <td className="py-2 px-4 border">Máxima protección química</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Nivel B</td>
                            <td className="py-2 px-4 border">SCBA presión positiva</td>
                            <td className="py-2 px-4 border">Traje químico resistente</td>
                            <td className="py-2 px-4 border">Vapor conocido, menor riesgo dérmico
                            </td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Nivel C</td>
                            <td className="py-2 px-4 border">Respirador purificador</td>
                            <td className="py-2 px-4 border">Traje químico</td>
                            <td className="py-2 px-4 border">Concentraciones conocidas</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border font-medium">Nivel D</td>
                            <td className="py-2 px-4 border">Ninguna</td>
                            <td className="py-2 px-4 border">Uniforme estándar</td>
                            <td className="py-2 px-4 border">Sin peligros atmosféricos</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}