export default function Practice() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escenarios de
                incidentes terroristas</h2>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-red-600">Escenario 1: Ataque con
                    agente nervioso</h3>
                <p className="italic text-gray-600 mb-4">
                    Explosión en estación de metro seguida de múltiples víctimas con síntomas
                    similares:
                    miosis, sudoración excesiva, vómito y dificultad respiratoria.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Hallazgos iniciales:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>20+ víctimas con síntomas similares</li>
                        <li>Olor a almendras amargas en el área</li>
                        <li>Personal de primera respuesta reporta irritación ocular</li>
                        <li>Múltiples víctimas con convulsiones</li>
                        <li>Salivación y lagrimeo excesivos generalizados</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Secuencia de respuesta correcta:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Declinar ingreso hasta que la escena sea declarada segura por HAZMAT
                        </li>
                        <li>Establecer perímetro de al menos 100 metros en dirección contraria al
                            viento
                        </li>
                        <li>Coordinar con autoridades para establecer zonas caliente, tibia y fría
                        </li>
                        <li>Preparar estaciones de descontaminación en zona tibia</li>
                        <li>Administrar atropina según protocolo a víctimas sintomáticas</li>
                        <li>Implementar triaje START modificado para agentes químicos</li>
                        <li>Mantener comunicación con centros hospitalarios sobre tipo y número de
                            víctimas
                        </li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">Escenario 2: Bomba sucia
                    (RDD)</h3>
                <p className="italic text-gray-600 mb-4">
                    Explosión en edificio comercial con detector de radiación activado.
                    Múltiples víctimas con trauma por explosión y posible exposición radiológica.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Consideraciones especiales:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Lesiones traumáticas inmediatas vs. exposición radiológica a largo
                            plazo
                        </li>
                        <li>Necesidad de monitorización con detectores de radiación</li>
                        <li>Descontaminación externa prioritaria</li>
                        <li>Documentación cuidadosa de niveles de exposición</li>
                        <li>Consideraciones psicológicas por miedo a radiación</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Protocolos específicos:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Evaluación inicial de trauma siguiendo ABCDE</li>
                        <li>Remoción de ropa (elimina 90% de contaminación externa)</li>
                        <li>Irrigación con agua tibia y jabón suave</li>
                        <li>Monitorización con detector de radiación</li>
                        <li>Documentar lecturas antes y después de descontaminación</li>
                        <li>Consideración de yoduro de potasio si hay I-131</li>
                        <li>Transporte a centro médico con capacidad radiológica</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-blue-600">Escenario 3: Brote
                    biológico sospechoso</h3>
                <p className="italic text-gray-600 mb-4">
                    Múltiples pacientes en un edificio de oficinas presentan inicio súbito de fiebre
                    alta,
                    malestar general y síntomas respiratorios. Sospecha de liberación intencional de
                    agente biológico.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Indicadores de bioterrorismo:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Enfermedad inusual en población sana</li>
                        <li>Patrón epidemiológico atípico</li>
                        <li>Múltiples víctimas con síntomas similares</li>
                        <li>Síntomas severos de progresión rápida</li>
                        <li>Ausencia de vector natural conocido</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Implementar precauciones universales estrictas</li>
                        <li>Aislar víctimas según tipo de transmisión sospechado</li>
                        <li>Notificar inmediatamente a autoridades de salud pública</li>
                        <li>Documentar cuidadosamente síntomas y cronología</li>
                        <li>Obtener muestras según protocolo epidemiológico</li>
                        <li>Proporcionar tratamiento sintomático</li>
                        <li>Iniciar profilaxis post-exposición si está indicada</li>
                    </ol>
                </div>
            </div>

            <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                <h3 className="text-xl font-semibold mb-2 text-green-600">Escenario 4: Incidente con
                    múltiples dispositivos</h3>
                <p className="italic text-gray-600 mb-4">
                    Primera explosión en centro comercial con múltiples víctimas.
                    20 minutos después, segunda explosión en área de evacuación dirigida a personal
                    de primera respuesta.
                </p>

                <div className="mb-4">
                    <h4 className="font-medium mb-2">Amenazas secundarias:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Dispositivos explosivos secundarios dirigidos a rescatistas</li>
                        <li>Estructuras debilitadas propensas a colapso</li>
                        <li>Incendios secundarios</li>
                        <li>Liberación de materiales peligrosos</li>
                        <li>Tiradores activos en la confusión</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-medium mb-2">Protocolo de seguridad:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Suspender todas las operaciones de rescate</li>
                        <li>Evacuar personal de primera respuesta del área</li>
                        <li>Establecer nuevo perímetro más amplio</li>
                        <li>Esperar inspección completa por equipos de explosivos</li>
                        <li>Reorganizar zonas operacionales en área segura</li>
                        <li>Reevaluar rutas de escape y comunicaciones</li>
                        <li>Continuar operaciones solo después de autorización oficial</li>
                    </ol>
                </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-700">Lecciones clave para
                    recordar</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Seguridad primero:</strong> Nunca comprometer la seguridad personal
                        por el rescate
                    </li>
                    <li><strong>Múltiples amenazas:</strong> Estar siempre alerta a dispositivos
                        secundarios
                    </li>
                    <li><strong>Descontaminación:</strong> Crítica antes del tratamiento en
                        incidentes CBRNE
                    </li>
                    <li><strong>Comunicación:</strong> Mantener contacto constante con comando del
                        incidente
                    </li>
                    <li><strong>Documentación:</strong> Registrar exposiciones y tratamientos
                        cuidadosamente
                    </li>
                    <li><strong>Recursos:</strong> Solicitar recursos especializados tempranamente
                    </li>
                    <li><strong>Entrenamiento:</strong> Practicar regularmente con equipos
                        multi-agencias
                    </li>
                </ul>
            </div>
        </div>
    );
}