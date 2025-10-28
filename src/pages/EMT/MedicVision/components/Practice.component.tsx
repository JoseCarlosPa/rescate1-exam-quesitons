import {MdCheckCircle, MdWarning} from "react-icons/md";
import {FaExclamationTriangle, FaUserMd} from "react-icons/fa";
import {BsLightbulb} from "react-icons/bs";
import {FiActivity} from "react-icons/fi";

export default function Practice(){
    return(
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <FaUserMd className="w-6 h-6 mr-2 text-orange-500"/>
                Casos Clínicos Interactivos
            </h2>

            {/* Caso 1: Síndrome Coronario Agudo */}
            <div
                className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                <div className="flex items-center mb-4">
                                            <span
                                                className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">1</span>
                    <h3 className="text-xl font-semibold text-red-700">Caso Crítico: Síndrome
                        Coronario Agudo</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Hombre de 54 años, ejecutivo<br/>
                        <strong>Evento:</strong> Dolor torácico súbito en oficina durante
                        reunión estresante<br/>
                        <strong>Presentación:</strong> Dolor opresivo retroesternal 8/10,
                        irradiado a brazo izquierdo y mandíbula, diaforesis profusa, náusea
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                            <BsLightbulb className="w-4 h-4 mr-2"/>
                            Evaluación SAMPLE:
                        </h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>S:</strong> Dolor opresivo, diaforesis, náusea</li>
                            <li><strong>A:</strong> Ninguna conocida</li>
                            <li><strong>M:</strong> Atorvastatina, Aspirina ocasional</li>
                            <li><strong>P:</strong> Hipertensión, dislipidemia</li>
                            <li><strong>L:</strong> Café hace 2 horas</li>
                            <li><strong>E:</strong> Reunión estresante, sedentario</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                            <FiActivity className="w-4 h-4 mr-2"/>
                            Evaluación OPQRST:
                        </h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>O:</strong> Súbito, durante estrés</li>
                            <li><strong>P:</strong> Empeora con movimiento</li>
                            <li><strong>Q:</strong> Opresivo, "como peso"</li>
                            <li><strong>R:</strong> Brazo izquierdo y mandíbula</li>
                            <li><strong>S:</strong> 8/10</li>
                            <li><strong>T:</strong> 15 minutos, constante</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 bg-red-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Abordaje Correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Posición semi-Fowler, O₂ si SpO₂ &lt;94%</li>
                        <li>Signos vitales: PA, FC, FR, temperatura</li>
                        <li>Aspirina 325mg masticable (si no contraindicada)</li>
                        <li>Acceso venoso, monitoreo cardíaco</li>
                        <li>Traslado URGENTE a hospital con hemodinamia</li>
                    </ol>
                </div>
            </div>

            {/* Caso 2: Emergencia Respiratoria */}
            <div
                className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="flex items-center mb-4">
                                            <span
                                                className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">2</span>
                    <h3 className="text-xl font-semibold text-blue-700">Emergencia Respiratoria:
                        Neumonía Severa</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Mujer de 68 años, jubilada<br/>
                        <strong>Evento:</strong> Disnea progresiva en 3 días, fiebre<br/>
                        <strong>Presentación:</strong> Dificultad respiratoria marcada, tos
                        productiva con esputo amarillo, fiebre 39°C
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Signos Vitales:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>PA: 90/60 mmHg</li>
                            <li>FC: 110 lpm</li>
                            <li>FR: 28 rpm</li>
                            <li>Temp: 39°C</li>
                            <li>SpO₂: 88% aire ambiente</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Hallazgos Físicos:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>Crepitantes en base derecha</li>
                            <li>Uso de músculos accesorios</li>
                            <li>Cianosis perioral leve</li>
                            <li>Confusión moderada</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Datos SAMPLE:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>S:</strong> Disnea, fiebre, tos</li>
                            <li><strong>M:</strong> Losartán, Furosemida</li>
                            <li><strong>P:</strong> HTA, ICC</li>
                            <li><strong>E:</strong> Resfriado previo</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Abordaje Correcto:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>O₂ suplementario inmediato (alto flujo)</li>
                        <li>Posición semi-Fowler (si tolera)</li>
                        <li>Monitoreo continuo de SpO₂</li>
                        <li>Acceso venoso, considerar líquidos (cauteloso por ICC)</li>
                        <li>Evaluación de sepsis (qSOFA)</li>
                        <li>Traslado urgente, notificar hospital</li>
                    </ol>
                </div>
            </div>

            {/* Caso 3: Emergencia Metabólica */}
            <div
                className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <div className="flex items-center mb-4">
                                            <span
                                                className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">3</span>
                    <h3 className="text-xl font-semibold text-green-700">Emergencia Metabólica:
                        Hipoglucemia Severa</h3>
                </div>
                <div className="bg-white p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Escenario:</h4>
                    <p className="text-gray-700 mb-3">
                        <strong>Paciente:</strong> Hombre de 80 años, diabético tipo 2<br/>
                        <strong>Evento:</strong> Encontrado confuso en casa por familiar<br/>
                        <strong>Presentación:</strong> Alteración del estado mental, diaforesis,
                        temblor, agitación
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Evaluación
                            Neurológica:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>Glasgow:</strong> 12 (O4, V3, M5)</li>
                            <li><strong>Orientación:</strong> Desorientado en tiempo/lugar</li>
                            <li><strong>Síntomas:</strong> Temblor, diaforesis</li>
                            <li><strong>Glucometría:</strong> 35 mg/dL</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Historia Médica:</h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li><strong>DM2:</strong> 15 años evolución</li>
                            <li><strong>Medicamentos:</strong> Metformina, Glibenclamida</li>
                            <li><strong>Último alimento:</strong> Hace 12 horas</li>
                            <li><strong>Evento:</strong> Dosis normal, no desayunó</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4 bg-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Protocolo de
                        Tratamiento:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                        <li>Confirmar hipoglucemia (&lt;70 mg/dL)</li>
                        <li>Si consciente y puede deglutir: Glucosa oral 15g</li>
                        <li>Si inconsciente o no puede deglutir: Glucosa IV (Dextrosa 50%
                            25ml)
                        </li>
                        <li>Reevaluar en 15 minutos</li>
                        <li>Repetir tratamiento si glucemia &lt;70 mg/dL</li>
                        <li>Monitoreo continuo durante traslado</li>
                    </ol>
                </div>
            </div>

            {/* Puntos de aprendizaje clave */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Puntos de Aprendizaje
                        Clave</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Comunicación Efectiva:
                        </h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Preguntas abiertas iniciales</li>
                            <li>• SAMPLE y OPQRST sistemático</li>
                            <li>• Involucrar a familiares/testigos</li>
                            <li>• Documentación precisa</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            Priorización:
                        </h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• ABC siempre primero</li>
                            <li>• Signos de gravedad</li>
                            <li>• Tratamiento vs traslado</li>
                            <li>• Reevaluación continua</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                            <MdWarning className="w-4 h-4 mr-2"/>
                            Errores Comunes:
                        </h4>
                        <ul className="text-sm space-y-1 text-gray-700">
                            <li>• Saltar evaluación primaria</li>
                            <li>• Historia incompleta</li>
                            <li>• No monitorear tendencias</li>
                            <li>• Asumir diagnósticos</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}