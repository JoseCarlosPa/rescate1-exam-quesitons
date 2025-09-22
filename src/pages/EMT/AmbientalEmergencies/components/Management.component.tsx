import {MdThermostat} from "react-icons/md";
import {FaBug, FaSnowflake, FaWater} from "react-icons/fa";
import {GiPoisonBottle} from "react-icons/gi";

export default function Management() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Protocolos de Evaluación y
                Manejo</h2>

            {/* Protocolo general */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Protocolo General de Manejo</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-3">1. Evaluación Inicial</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Seguridad de la escena:</strong> Evaluar riesgos ambientales</li>
                            <li><strong>Evaluación primaria:</strong> ABCDE sistemático</li>
                            <li><strong>Signos vitales:</strong> Incluir temperatura corporal</li>
                            <li><strong>Estado neurológico:</strong> Escala de Glasgow</li>
                            <li><strong>Exposición:</strong> Evaluar toda la superficie corporal</li>
                        </ol>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-3">2. Manejo Inmediato</h4>
                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                            <li><strong>Retirar del ambiente:</strong> Eliminar la fuente de exposición</li>
                            <li><strong>Soporte vital básico:</strong> Oxígeno, acceso vascular</li>
                            <li><strong>Control de temperatura:</strong> Prevenir hipo/hipertermia</li>
                            <li><strong>Monitorización:</strong> Continua de signos vitales</li>
                            <li><strong>Preparar transporte:</strong> Notificar al hospital</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Manejo específico por temperatura */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                        <MdThermostat className="w-6 h-6 mr-2"/>
                        Manejo de Emergencias por Calor
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                            <h4 className="font-semibold text-red-700 mb-2">Golpe de Calor - Protocolo</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Retirar al paciente del ambiente caluroso</li>
                                <li>Quitar ropa y exponer la piel</li>
                                <li>Enfriamiento agresivo:
                                    <ul className="list-disc list-inside ml-4 mt-1">
                                        <li>Paños húmedos + ventilador</li>
                                        <li>Bolsas de hielo en cuello, axilas, ingles</li>
                                        <li>Objetivo: reducir 1-2°C cada 5 min</li>
                                    </ul>
                                </li>
                                <li>Oxígeno suplementario (15L/min)</li>
                                <li>Acceso vascular (2 vías de gran calibre)</li>
                                <li>Solución salina normal 500ml en bolo</li>
                                <li>Monitorizar temperatura rectal</li>
                                <li>Traslado código rojo</li>
                            </ol>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-700 mb-2">Agotamiento por Calor</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Enfriamiento pasivo (sombra, ventilación)</li>
                                <li>Rehidratación oral si está consciente</li>
                                <li>Solución salina IV si hay vómitos</li>
                                <li>Monitorización continua</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                        <FaSnowflake className="w-6 h-6 mr-2"/>
                        Manejo de Emergencias por Frío
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                            <h4 className="font-semibold text-blue-700 mb-2">Hipotermia - Protocolo</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Retirar del ambiente frío</li>
                                <li>Manipular con cuidado (evitar arritmias)</li>
                                <li>Quitar ropa húmeda</li>
                                <li>Recalentamiento:
                                    <ul className="list-disc list-inside ml-4 mt-1">
                                        <li>Pasivo: mantas, ambiente cálido</li>
                                        <li>Activo: bolsas de agua tibia (40-42°C)</li>
                                        <li>Objetivo: 1-2°C por hora</li>
                                    </ul>
                                </li>
                                <li>Oxígeno caliente y humidificado</li>
                                <li>Acceso vascular (fluidos tibios)</li>
                                <li>Monitorización cardíaca</li>
                                <li>Traslado con precaución</li>
                            </ol>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-cyan-700 mb-2">Congelación</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>NO frotar la zona afectada</li>
                                <li>Recalentamiento con agua tibia (40-42°C)</li>
                                <li>Analgesia (dolor intenso)</li>
                                <li>Proteger con gasas secas</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Manejo de otras emergencias */}
            <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                        <FaWater className="w-6 h-6 mr-2"/>
                        Manejo de Ahogamiento
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-green-800 mb-3">Rescate Seguro</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Seguridad del rescatista PRIMERO</li>
                                <li>Usar equipo de flotación</li>
                                <li>Rescate desde la orilla si es posible</li>
                                <li>Mantener alineación cervical</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-800 mb-3">Manejo Médico</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Evaluación ABCDE inmediata</li>
                                <li>Oxígeno alto flujo (15L/min)</li>
                                <li>Ventilación con presión positiva</li>
                                <li>Prevenir hipotermia</li>
                                <li>RCP si está indicado</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
                        <FaBug className="w-6 h-6 mr-2"/>
                        Manejo de Mordeduras y Picaduras
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">Evaluación Inicial</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Identificar el animal/artrópodo</li>
                                <li>Hora y circunstancias</li>
                                <li>Síntomas locales y sistémicos</li>
                                <li>Alergias previas</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-800 mb-3">Manejo General</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Lavar con agua y jabón</li>
                                <li>Inmovilizar extremidad</li>
                                <li>Hielo local (no directo)</li>
                                <li>Analgesia según dolor</li>
                                <li>Vigilar signos sistémicos</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                        <GiPoisonBottle className="w-6 h-6 mr-2"/>
                        Manejo de Intoxicaciones
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Intoxicación por CO</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Retirar del ambiente contaminado</li>
                                <li>Oxígeno alto flujo (15L/min)</li>
                                <li>Evaluación neurológica</li>
                                <li>Monitorización cardíaca</li>
                                <li>Considerar cámara hiperbárica</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-800 mb-3">Intoxicación General</h4>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                                <li>Identificar la sustancia</li>
                                <li>Contactar centro toxicológico</li>
                                <li>Descontaminación si está indicada</li>
                                <li>Soporte vital según síntomas</li>
                                <li>Traslado con muestra del tóxico</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* Criterios de transporte */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Criterios de Transporte y Destino</h3>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2">Código Rojo - Emergente</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Golpe de calor</li>
                            <li>Hipotermia severa</li>
                            <li>Ahogamiento con PCR</li>
                            <li>Mordedura con shock</li>
                            <li>Intoxicación severa</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-700 mb-2">Código Amarillo - Urgente</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Agotamiento por calor</li>
                            <li>Hipotermia moderada</li>
                            <li>Ahogamiento sin PCR</li>
                            <li>Mordedura local</li>
                            <li>Intoxicación leve</li>
                        </ul>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Código Verde - Demorable</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Calambres por calor</li>
                            <li>Congelación superficial</li>
                            <li>Picaduras locales</li>
                            <li>Exposición mínima</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}