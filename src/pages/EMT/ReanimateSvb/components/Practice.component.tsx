import {FaUserMd} from "react-icons/fa";

export default function Practice() {
    return (<div className="space-y-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
            <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
            Casos Clínicos y Escenarios de Práctica
        </h2>

        {/* Caso 1: Paro cardíaco en adulto */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-red-700 flex items-center">
                                            <span
                                                className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">1</span>
                Paro Cardíaco en Vía Pública - Adulto
            </h3>
            <div className="bg-white p-4 rounded mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                <p className="text-gray-700 italic mb-4">
                    Hombre de 55 años colapsa súbitamente mientras camina en la calle. Un
                    transeúnte lo ve caer
                    y pide ayuda. Al llegar, el paciente no responde, no respira normalmente
                    y no tiene pulso palpable.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h5 className="font-semibold text-green-700 mb-2">Manejo
                            Correcto:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Verificar seguridad de la escena (tráfico)</li>
                            <li>Confirmar ausencia de respuesta</li>
                            <li>Activar SEM (911) y solicitar DEA</li>
                            <li>Iniciar compresiones inmediatamente</li>
                            <li>RCP continuo hasta llegada del DEA</li>
                            <li>Usar DEA según protocolo</li>
                            <li>Continuar hasta llegada de SVM</li>
                        </ol>
                    </div>
                    <div>
                        <h5 className="font-semibold text-blue-700 mb-2">Puntos Clave:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Tiempo es crítico - no dudar</li>
                            <li>Compresiones de alta calidad</li>
                            <li>Minimizar interrupciones</li>
                            <li>Coordinar con otros rescatistas</li>
                            <li>Comunicación constante con SEM</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded">
                <h5 className="font-semibold text-yellow-800 mb-2">Reflexión y
                    Aprendizaje:</h5>
                <p className="text-gray-700">
                    Este es el escenario más común de paro cardíaco. La clave está en el
                    reconocimiento rápido
                    y la acción inmediata. El retraso en iniciar RCP reduce
                    significativamente las posibilidades de supervivencia.
                </p>
            </div>
        </div>

        {/* Caso 2: Paro presenciado en casa */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-blue-700 flex items-center">
                                            <span
                                                className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">2</span>
                Paro Presenciado en Domicilio
            </h3>
            <div className="bg-white p-4 rounded mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                <p className="text-gray-700 italic mb-4">
                    Mujer de 68 años con antecedentes cardíacos colapsa en casa durante la
                    cena. Su esposo inmediatamente
                    llama al 911 y comienza RCP básico. Llegan EMTs tras 8 minutos de RCP
                    familiar.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h5 className="font-semibold text-green-700 mb-2">Manejo al
                            Llegar:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Evaluar la escena rápidamente</li>
                            <li>Relevar al familiar amablemente</li>
                            <li>Verificar calidad del RCP previo</li>
                            <li>Colocar DEA inmediatamente</li>
                            <li>Seguir protocolo estándar</li>
                            <li>Preparar para transporte</li>
                            <li>Comunicar con hospital receptor</li>
                        </ol>
                    </div>
                    <div>
                        <h5 className="font-semibold text-purple-700 mb-2">Consideraciones
                            Especiales:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Valorar el RCP previo realizado</li>
                            <li>Mantener calma del familiar</li>
                            <li>Historia clínica rápida</li>
                            <li>Medicamentos del paciente</li>
                            <li>Tiempo de paro conocido</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-green-50 p-4 rounded">
                <h5 className="font-semibold text-green-800 mb-2">Ventaja del RCP
                    Inmediato:</h5>
                <p className="text-gray-700">
                    El RCP iniciado inmediatamente por testigos aumenta las posibilidades de
                    supervivencia.
                    Tu papel es mejorar la calidad del RCP y agregar desfibrilación
                    temprana.
                </p>
            </div>
        </div>

        {/* Caso 3: Paro pediátrico */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-green-700 flex items-center">
                                            <span
                                                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">3</span>
                Paro Respiratorio en Niño
            </h3>
            <div className="bg-white p-4 rounded mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                <p className="text-gray-700 italic mb-4">
                    Niño de 6 años encontrado inconsciente en la piscina por sus padres. Fue
                    sacado del agua
                    inmediatamente. No responde, respiración ausente, pulso débil pero
                    presente.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h5 className="font-semibold text-green-700 mb-2">Protocolo
                            Pediátrico:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Abrir vía aérea cuidadosamente</li>
                            <li>5 ventilaciones de rescate iniciales</li>
                            <li>Verificar pulso (braquial/carotídeo)</li>
                            <li>Si hay pulso: ventilación 12-20/min</li>
                            <li>Si no hay pulso: RCP 15:2</li>
                            <li>DEA pediátrico si disponible</li>
                            <li>Transporte con ventilación continua</li>
                        </ol>
                    </div>
                    <div>
                        <h5 className="font-semibold text-orange-700 mb-2">Diferencias
                            Pediátricas:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Paro respiratorio más común</li>
                            <li>Anatomía diferente (cabeza grande)</li>
                            <li>Compresiones con una mano</li>
                            <li>Profundidad 1/3 del tórax</li>
                            <li>Relación 15:2 (dos rescatistas)</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-blue-50 p-4 rounded">
                <h5 className="font-semibold text-blue-800 mb-2">Prevención de
                    Ahogamiento:</h5>
                <p className="text-gray-700">
                    Los ahogamientos en niños son prevenibles. Como EMT, también educas
                    sobre supervisión constante,
                    barreras físicas y enseñanza de natación.
                </p>
            </div>
        </div>

        {/* Caso 4: Sobredosis con RCP */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3 text-purple-700 flex items-center">
                                            <span
                                                className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3 text-white text-sm">4</span>
                Paro por Sobredosis de Opioides
            </h3>
            <div className="bg-white p-4 rounded mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                <p className="text-gray-700 italic mb-4">
                    Adulto joven encontrado inconsciente en baño público. Evidencia de uso
                    de drogas presente.
                    Respiración muy superficial e irregular, cianosis peribucal, pulso
                    débil.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <h5 className="font-semibold text-green-700 mb-2">Manejo
                            Integrado:</h5>
                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                            <li>Seguridad de la escena (drogas/jeringuillas)</li>
                            <li>Evaluación rápida ABC</li>
                            <li>Ventilación asistida inmediata</li>
                            <li>Administrar Naloxona (si disponible)</li>
                            <li>Preparar para RCP completo</li>
                            <li>Monitor continuo post-Naloxona</li>
                            <li>Transporte para monitoreo hospitalario</li>
                        </ol>
                    </div>
                    <div>
                        <h5 className="font-semibold text-red-700 mb-2">Precauciones
                            Especiales:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>Seguridad personal (agujas, contaminación)</li>
                            <li>Riesgo de aspiración (vómito)</li>
                            <li>Posible politraumatismo asociado</li>
                            <li>Re-narcotización post-Naloxona</li>
                            <li>Agitación al despertar</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-orange-50 p-4 rounded">
                <h5 className="font-semibold text-orange-800 mb-2">Enfoque Compasivo:</h5>
                <p className="text-gray-700">
                    La adicción es una enfermedad. Mantén profesionalismo y compasión. Tu
                    objetivo es salvar vidas,
                    no juzgar. Estos pacientes tienen familias que los aman.
                </p>
            </div>
        </div>

        {/* Ejercicios de simulación */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Ejercicios de Práctica y
                Simulación</h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Simulación
                        Individual:</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>• Practica secuencia completa en maniquí</li>
                        <li>• Cronometra tus intervenciones</li>
                        <li>• Practica colocación de DEA</li>
                        <li>• Simula llamadas a control médico</li>
                        <li>• Pratica cambios de rescatista</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-700 mb-3">Simulación en
                        Equipo:</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>• Roles rotativos entre compañeros</li>
                        <li>• Comunicación efectiva durante RCP</li>
                        <li>• Coordinación con otros servicios</li>
                        <li>• Escenarios con complicaciones</li>
                        <li>• Debriefing post-simulación</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>);
}