import {FaExclamationTriangle, FaFirstAid, FaHandHoldingMedical} from "react-icons/fa";

export default function Techniques(){
    return(<div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
            <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
            Técnicas y Dispositivos en SVB
        </h2>

        {/* Técnicas de compresión */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                <FaHandHoldingMedical className="w-5 h-5 mr-2"/>
                Compresiones Torácicas de Alta Calidad
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Posicionamiento
                        Correcto:</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>Ubicación:</strong> Centro del pecho, mitad inferior del esternón</span>
                        </li>
                        <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>Manos:</strong> Talón de una mano, la otra entrelazada</span>
                        </li>
                        <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>Brazos:</strong> Rectos, hombros sobre las manos</span>
                        </li>
                        <li className="flex items-start">
                                                        <span
                                                            className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span><strong>Cuerpo:</strong> Usar peso corporal, no solo brazos</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Parámetros de
                        Calidad:</h4>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-green-500">
                            <p className="font-bold text-green-700">Profundidad</p>
                            <p className="text-sm">Al menos 5 cm, no más de 6 cm</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                            <p className="font-bold text-orange-700">Frecuencia</p>
                            <p className="text-sm">100-120 compresiones/minuto</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                            <p className="font-bold text-purple-700">Descompresión</p>
                            <p className="text-sm">Completa entre compresiones</p>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-red-500">
                            <p className="font-bold text-red-700">Interrupciones</p>
                            <p className="text-sm">Menos de 10 segundos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Ventilación y vía aérea */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-green-800 mb-4">Manejo de Vía Aérea y
                Ventilación</h3>
            <div className="grid lg:grid-cols-3 gap-6">
                <div>
                    <h4 className="font-semibold text-green-700 mb-3">Apertura de Vía
                        Aérea:</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Frente-mentón:</strong> Paciente no traumático</li>
                        <li>• <strong>Elevación mandibular:</strong> Sospecha de trauma</li>
                        <li>• <strong>Aspiración:</strong> Si hay secreciones</li>
                        <li>• <strong>Dispositivos:</strong> OPA/NPA según indicación</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-green-700 mb-3">Técnicas de
                        Ventilación:</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Boca-barrera:</strong> Con mascarilla</li>
                        <li>• <strong>BVM:</strong> Bolsa-válvula-mascarilla</li>
                        <li>• <strong>Relación:</strong> 30:2 en adultos</li>
                        <li>• <strong>Duración:</strong> 1 segundo por ventilación</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-green-700 mb-3">Signos de Ventilación
                        Efectiva:</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li>• Elevación visible del pecho</li>
                        <li>• Resistencia y compliance normales</li>
                        <li>• Mejora en color de piel</li>
                        <li>• Saturación de oxígeno creciente</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* DEA y Desfibrilación */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">Desfibrilador Externo
                Automático (DEA)</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-yellow-700 mb-3">Pasos para Usar
                        DEA:</h4>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Encender el DEA (automático o botón)</li>
                        <li>Exponer el pecho del paciente</li>
                        <li>Colocar parches según diagrama</li>
                        <li>Conectar cables si es necesario</li>
                        <li>Alejarse durante el análisis</li>
                        <li>Seguir instrucciones de voz</li>
                        <li>Reanudar RCP inmediatamente</li>
                    </ol>
                </div>
                <div>
                    <h4 className="font-semibold text-yellow-700 mb-3">Consideraciones
                        Especiales:</h4>
                    <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Agua:</strong> Secar el pecho completamente</li>
                        <li>• <strong>Marcapasos:</strong> Colocar parches a 2.5 cm</li>
                        <li>• <strong>Medicamentos:</strong> Remover parches transdérmicos
                        </li>
                        <li>• <strong>Vello:</strong> Afeitar si interfiere con adhesión
                        </li>
                        <li>• <strong>Niños:</strong> Usar parches pediátricos si
                            disponibles
                        </li>
                        <li>• <strong>Embarazo:</strong> Misma colocación, inclinar a la
                            izquierda
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Trabajo en equipo */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-purple-800 mb-4">RCP en Equipo - Roles y
                Coordinación</h3>
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border">
                    <h4 className="font-bold text-purple-700 mb-2">Líder del Equipo</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Coordina las actividades</li>
                        <li>• Supervisa calidad del RCP</li>
                        <li>• Comunica con servicios médicos</li>
                        <li>• Toma decisiones clínicas</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                    <h4 className="font-bold text-purple-700 mb-2">Rescatista Principal</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Realiza compresiones torácicas</li>
                        <li>• Cuenta en voz alta</li>
                        <li>• Cambia cada 2 minutos</li>
                        <li>• Mantiene calidad constante</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                    <h4 className="font-bold text-purple-700 mb-2">Rescatista de Vía
                        Aérea</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Maneja vía aérea</li>
                        <li>• Proporciona ventilaciones</li>
                        <li>• Opera el DEA</li>
                        <li>• Prepara medicamentos</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Errores comunes */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                Errores Comunes que Debes Evitar
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-red-700 mb-2">En Compresiones:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Posición incorrecta de manos</li>
                        <li>Profundidad insuficiente (&lt;5 cm)</li>
                        <li>Frecuencia muy lenta o rápida</li>
                        <li>No permitir descompresión completa</li>
                        <li>Inclinarse sobre el pecho</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-red-700 mb-2">En Ventilación:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Ventilaciones muy rápidas o fuertes</li>
                        <li>No abrir vía aérea adecuadamente</li>
                        <li>Interrupciones prolongadas</li>
                        <li>No verificar elevación del pecho</li>
                        <li>Hiperintensión en trauma cervical</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}