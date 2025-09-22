import {FiAlertTriangle, FiEye, FiUser} from "react-icons/fi";
import {FaExclamationTriangle, FaFirstAid} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer} from "react-icons/md";
import {BsLightbulb} from "react-icons/bs";

export default function Practice() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <FiUser className="w-6 h-6 mr-2 text-orange-500"/>
                Casos Clínicos Interactivos para Análisis
            </h2>

            <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4 mb-6">
                <h3 className="font-bold text-yellow-800 mb-2">📋 Instrucciones para el
                    Análisis</h3>
                <p className="text-sm text-gray-700">
                    Para cada caso, aplica el protocolo XABCDE sistemáticamente. Identifica las
                    prioridades,
                    analiza los hallazgos críticos y desarrolla un plan de manejo paso a paso.
                </p>
            </div>

            {/* Caso 1 - Mejorado */}
            <div
                className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg shadow-md border border-red-200">
                <h3 className="text-xl font-semibold mb-3 text-red-600 flex items-center">
                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                    Caso 1: Politraumatismo con Lesiones Faciales Complejas
                </h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700 mb-4">
                        <strong>Escenario:</strong> Motociclista de 28 años sin casco impacta
                        contra vehículo a 60 km/h.
                        Paciente masculino encontrado semiconsciente en el pavimento con
                        deformidad facial severa
                        y sangrado abundante de boca y nariz.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2 text-red-700">Hallazgos
                                Iniciales:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Consciente pero confuso (GCS 13)</li>
                                <li>Epistaxis profusa bilateral</li>
                                <li>Deformidad en región mandibular</li>
                                <li>Hematoma periorbitario bilateral</li>
                                <li>Dientes visiblemente fracturados</li>
                                <li>Dificultad para hablar (disartria)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2 text-red-700">Signos Vitales:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>FC: 115/min</li>
                                <li>TA: 100/65 mmHg</li>
                                <li>FR: 24/min</li>
                                <li>SpO₂: 92% aire ambiente</li>
                                <li>Temp: 36.2°C</li>
                                <li>Glicemia: 140 mg/dl</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-red-100 p-4 rounded">
                        <h4 className="font-medium mb-2 flex items-center">
                            <MdOutlineTimer className="w-4 h-4 mr-2 text-red-600"/>
                            Análisis Crítico - Prioridades Inmediatas:
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                            <li><strong>X:</strong> Control de epistaxis con presión directa y
                                posicionamiento
                            </li>
                            <li><strong>A:</strong> Compromiso de vía aérea por sangre + posible
                                LCT = Control cervical + aspiración urgente
                            </li>
                            <li><strong>B:</strong> Hipoxemia (SpO₂ 92%) = O₂ alto flujo +
                                evaluar neumotórax
                            </li>
                            <li><strong>C:</strong> Taquicardia + hipotensión = shock
                                hemorrágico incipiente
                            </li>
                            <li><strong>D:</strong> GCS 13 + hematoma periorbitario bilateral =
                                fractura base cráneo probable
                            </li>
                        </ol>
                    </div>
                    <div className="bg-green-100 p-4 rounded">
                        <h4 className="font-medium mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2 text-green-600"/>
                            Plan de Manejo Correcto:
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                            <li>Inmovilización cervical completa inmediata</li>
                            <li>Aspiración de vía aérea + O₂ 15L/min con mascarilla con
                                reservorio
                            </li>
                            <li>Control de epistaxis: posición lateral si es tolerada, presión
                                directa
                            </li>
                            <li>Acceso IV x2 + fluidoterapia juiciosa</li>
                            <li>Reevaluación neurológica cada 5 minutos</li>
                            <li>Transporte código rojo a centro de trauma</li>
                            <li>Preparar para vía aérea definitiva en hospital</li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Caso 2 - Nuevo y complejo */}
            <div
                className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md border border-blue-200">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center">
                    <FaFirstAid className="w-5 h-5 mr-2"/>
                    Caso 2: Lesión Penetrante de Cuello con Compromiso Multiorgánico
                </h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700 mb-4">
                        <strong>Escenario:</strong> Mujer de 22 años víctima de agresión con
                        arma blanca.
                        Herida penetrante en región lateral izquierda del cuello. La paciente
                        está consciente,
                        ansiosa y con dificultad para hablar.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2 text-blue-700">Evaluación
                                Física:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Herida de 3cm en zona II del cuello</li>
                                <li>Sangrado arterial moderado</li>
                                <li>Enfisema subcutáneo palpable</li>
                                <li>Voz ronca y disfonía progresiva</li>
                                <li>Disfagia (dificultad para tragar)</li>
                                <li>Hematoma en lenta expansión</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2 text-blue-700">Signos Vitales (10
                                min):</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>FC: 110 → 125/min</li>
                                <li>TA: 110/70 → 95/60 mmHg</li>
                                <li>FR: 22 → 28/min</li>
                                <li>SpO₂: 96 → 93%</li>
                                <li>Estridor inspiratorio leve</li>
                                <li>Ansiedad creciente</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-yellow-100 p-4 rounded border border-yellow-300">
                        <h4 className="font-medium mb-2 flex items-center">
                            <FiAlertTriangle className="w-4 h-4 mr-2 text-yellow-600"/>
                            Signos de Alerta Identificados:
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                            <div className="bg-red-50 p-2 rounded">
                                <strong className="text-red-700">Vía Aérea:</strong>
                                <ul className="mt-1 text-gray-700">
                                    <li>• Disfonía progresiva</li>
                                    <li>• Enfisema subcutáneo</li>
                                    <li>• Estridor leve</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-2 rounded">
                                <strong className="text-blue-700">Vascular:</strong>
                                <ul className="mt-1 text-gray-700">
                                    <li>• Sangrado arterial</li>
                                    <li>• Deterioro hemodinámico</li>
                                    <li>• Hematoma expansivo</li>
                                </ul>
                            </div>
                            <div className="bg-green-50 p-2 rounded">
                                <strong className="text-green-700">Digestivo:</strong>
                                <ul className="mt-1 text-gray-700">
                                    <li>• Disfagia</li>
                                    <li>• Posible lesión esofágica</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-blue-100 p-4 rounded">
                        <h4 className="font-medium mb-2 flex items-center">
                            <FaFirstAid className="w-4 h-4 mr-2 text-blue-600"/>
                            Manejo Correcto Paso a Paso:
                        </h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                            <li><strong>Inmediato:</strong> Control cervical + control
                                hemorragia con presión directa lateral
                            </li>
                            <li><strong>Vía aérea:</strong> Preparar para intubación de
                                secuencia rápida o cricotirotomía
                            </li>
                            <li><strong>Hemorragia:</strong> Vendaje compresivo SIN comprimir
                                tráquea o carótida contralateral
                            </li>
                            <li><strong>Acceso vascular:</strong> 2 vías IV de gran calibre +
                                tipo y cruce
                            </li>
                            <li><strong>Monitoreo:</strong> Continuo de la vía aérea y estado
                                hemodinámico
                            </li>
                            <li><strong>Transporte:</strong> Inmediato a centro de trauma con
                                quirófano disponible
                            </li>
                            <li><strong>Comunicación:</strong> Alerta previa: "lesión penetrante
                                zona II, compromiso de vía aérea"
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Caso 3 - Pediátrico */}
            <div
                className="p-6 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg shadow-md border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center">
                    <FiEye className="w-5 h-5 mr-2"/>
                    Caso 3: Trauma Ocular Complejo en Paciente Pediátrico
                </h3>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700 mb-4">
                        <strong>Escenario:</strong> Niño de 8 años jugando con fuegos
                        artificiales.
                        Explosión a corta distancia con proyección de fragmentos metálicos.
                        Padres muy alterados, niño llorando y cubriendo su ojo derecho.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium mb-2 text-green-700">Hallazgos al
                                Examen:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Fragmento metálico visible en córnea derecha</li>
                                <li>Sangrado activo del ojo derecho</li>
                                <li>Quemaduras superficiales en cara</li>
                                <li>El niño no permite examen ocular</li>
                                <li>Dolor severo (escala 9/10)</li>
                                <li>Fotofobia marcada</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium mb-2 text-green-700">Signos Vitales:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>FC: 130/min (taquicardia por dolor)</li>
                                <li>TA: 95/60 mmHg (normal para edad)</li>
                                <li>FR: 28/min</li>
                                <li>SpO₂: 99% aire ambiente</li>
                                <li>Temp: 37.1°C</li>
                                <li>Muy ansioso y no cooperativo</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="bg-orange-100 p-4 rounded border border-orange-300">
                        <h4 className="font-medium mb-2 flex items-center">
                            <FiUser className="w-4 h-4 mr-2 text-orange-600"/>
                            Consideraciones Especiales Pediátricas:
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <strong className="text-orange-700">Manejo Psicológico:</strong>
                                <ul className="mt-1 text-gray-700 list-disc list-inside">
                                    <li>Permitir presencia de padres si es posible</li>
                                    <li>Explicar procedimientos con lenguaje simple</li>
                                    <li>Minimizar manipulación innecesaria</li>
                                </ul>
                            </div>
                            <div>
                                <strong className="text-orange-700">Manejo Técnico:</strong>
                                <ul className="mt-1 text-gray-700 list-disc list-inside">
                                    <li>Protector ocular pediátrico si disponible</li>
                                    <li>Sedación leve si está protocolizada</li>
                                    <li>Monitoreo constante de signos vitales</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bg-green-100 p-4 rounded">
                        <h4 className="font-medium mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2 text-green-600"/>
                            Protocolo de Manejo Óptimo:
                        </h4>
                        <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                            <li><strong>Estabilización psicológica:</strong> Calmar al niño y
                                padres, explicar que se puede salvar el ojo
                            </li>
                            <li><strong>NO retirar el fragmento:</strong> Estabilizar con
                                vendajes suaves alrededor
                            </li>
                            <li><strong>Protección ocular:</strong> Cubrir AMBOS ojos con
                                protectores rígidos o vasos plásticos
                            </li>
                            <li><strong>Posición:</strong> Semisentado o posición de comodidad
                            </li>
                            <li><strong>Manejo del dolor:</strong> Analgesia apropiada para edad
                                y peso
                            </li>
                            <li><strong>Prevención de vómito:</strong> Antieméticos si están
                                disponibles
                            </li>
                            <li><strong>Transporte suave:</strong> Evitar movimientos bruscos,
                                sirenas si es posible
                            </li>
                            <li><strong>Destino:</strong> Hospital con servicio de oftalmología
                                pediátrica
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Sección de autoevaluación */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center">
                    <BsLightbulb className="w-5 h-5 mr-2"/>
                    Preguntas de Autoevaluación
                </h3>
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-medium text-purple-800 mb-2">💭 Reflexiona sobre
                            estos puntos:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>¿En qué casos considerarías realizar una cricotirotomía de
                                emergencia?
                            </li>
                            <li>¿Cuál es la diferencia entre un vendaje oclusivo de 3 lados vs.
                                4 lados?
                            </li>
                            <li>¿Qué signos te harían sospechar una fractura de base de
                                cráneo?
                            </li>
                            <li>¿Cuándo está contraindicada una cánula nasofaríngea?</li>
                            <li>¿Cómo manejarías un paciente con lesión ocular bilateral?</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-medium text-purple-800 mb-2">🎯 Puntos Clave para
                            Recordar:</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <strong className="text-purple-700">Prioridades
                                    Siempre:</strong>
                                <ol className="list-decimal list-inside mt-1 text-gray-700">
                                    <li>Vía aérea con control cervical</li>
                                    <li>Control de hemorragia exanguinante</li>
                                    <li>Evaluación neurológica seriada</li>
                                </ol>
                            </div>
                            <div>
                                <strong className="text-purple-700">Errores Fatales:</strong>
                                <ol className="list-decimal list-inside mt-1 text-gray-700">
                                    <li>Retirar objetos empalados</li>
                                    <li>Sondear heridas de cuello</li>
                                    <li>Comprimir ambas carótidas</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}