export default function Overview(){
    return(
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son los
                    incidentes terroristas?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Los incidentes terroristas son eventos intencionales que utilizan violencia o
                    amenazas de violencia para generar terror,
                    causar daño masivo y desestabilizar la sociedad. Estos eventos requieren una
                    respuesta coordinada y especializada
                    que involucra múltiples agencias y protocolos específicos de seguridad.
                </p>
                <p className="text-gray-700 mt-2 leading-relaxed">
                    Para el personal prehospitalario, estos incidentes presentan desafíos únicos
                    debido a los riesgos de seguridad
                    continuos, la posibilidad de múltiples víctimas y la necesidad de protocolos
                    especiales de descontaminación.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Características
                    de los ataques terroristas</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Intencionalidad: Diseñados para causar máximo daño y terror</li>
                        <li>Múltiples víctimas: Gran número de personas afectadas</li>
                        <li>Escena insegura: Riesgo continuo para respondientes</li>
                        <li>Dispositivos secundarios: Bombas adicionales dirigidas a rescatistas
                        </li>
                        <li>Medios de comunicación: Búsqueda de publicidad</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Pánico masivo: Reacciones psicológicas extremas</li>
                        <li>Infraestructura dañada: Servicios básicos comprometidos</li>
                        <li>Agentes especiales: Químicos, biológicos o radiológicos</li>
                        <li>Coordinación compleja: Múltiples agencias involucradas</li>
                        <li>Investigación criminal: Preservación de evidencia</li>
                    </ul>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de
                    amenazas</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-red-700">Explosivos
                            Convencionales</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Bombas caseras (IED)</li>
                            <li>Explosivos comerciales</li>
                            <li>Vehículos bomba</li>
                            <li>Artefactos suicidas</li>
                        </ul>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-orange-700">Armas CBRNE</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Químicos tóxicos</li>
                            <li>Agentes biológicos</li>
                            <li>Material radiológico</li>
                            <li>Armas nucleares</li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <h3 className="font-medium text-lg mb-2 text-blue-700">Otros Métodos</h3>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Armas de fuego</li>
                            <li>Vehículos como armas</li>
                            <li>Armas blancas</li>
                            <li>Cyberataques a infraestructura</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios
                    de seguridad para el personal prehospitalario</h2>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-medium text-lg mb-2 text-yellow-700">Reglas
                        fundamentales</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li><strong>No ingresar hasta que la escena sea declarada
                            segura</strong> por las autoridades competentes
                        </li>
                        <li><strong>Establecer y mantener perímetros de seguridad</strong> amplios
                            inicialmente
                        </li>
                        <li><strong>Usar el EPP apropiado</strong> según el tipo de amenaza
                            identificada
                        </li>
                        <li><strong>Mantener comunicación constante</strong> con el comando del
                            incidente
                        </li>
                        <li><strong>Estar alerta a dispositivos secundarios</strong> y amenazas
                            adicionales
                        </li>
                        <li><strong>Trabajar en equipos</strong> y establecer rutas de escape</li>
                        <li><strong>Seguir las cadenas de comando</strong> establecidas por el SCI
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
}