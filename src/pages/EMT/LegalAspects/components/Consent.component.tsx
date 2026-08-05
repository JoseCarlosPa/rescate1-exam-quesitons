import {FaExclamationTriangle, FaHandshake} from "react-icons/fa";
import {MdHealthAndSafety, MdSecurity} from "react-icons/md";
import {AiOutlineWarning} from "react-icons/ai";
import {BsFileText} from "react-icons/bs";

export default function Consent() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consentimiento
                informado y ética profesional</h2>
            <p className="text-gray-600 mb-6">
                El consentimiento es la base legal que autoriza cualquier intervención médica.
                Su ausencia puede constituir agresión legal.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Tipos de consentimiento */}
                <div
                    className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaHandshake className="w-8 h-8 text-green-500 mr-3"/>
                        <h3 className="text-xl font-bold text-green-700">Consentimiento
                            Expreso</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Autorización clara, verbal o escrita, otorgada por el paciente después
                        de recibir información.
                    </p>
                    <div className="bg-green-50 p-3 rounded">
                        <strong className="text-green-800">Elementos requeridos:</strong>
                        <ul className="text-sm text-green-700 mt-1">
                            <li>• Explicar naturaleza del tratamiento</li>
                            <li>• Informar riesgos y beneficios</li>
                            <li>• Mencionar alternativas disponibles</li>
                            <li>• Explicar consecuencias de no tratar</li>
                        </ul>
                    </div>
                </div>

                {/* Consentimiento implícito */}
                <div
                    className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <MdHealthAndSafety className="w-8 h-8 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">Consentimiento
                            Implícito</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Se asume cuando existe emergencia que amenaza la vida y el paciente no
                        puede dar consentimiento.
                    </p>
                    <div className="bg-blue-50 p-3 rounded">
                        <strong className="text-blue-800">Condiciones aplicables:</strong>
                        <ul className="text-sm text-blue-700 mt-1">
                            <li>• Paciente inconsciente</li>
                            <li>• Emergencia que amenaza la vida</li>
                            <li>• No hay tiempo para obtener consentimiento</li>
                            <li>• Persona razonable daría consentimiento</li>
                        </ul>
                    </div>
                </div>

                {/* Consentimiento involuntario */}
                <div
                    className="bg-white border border-purple-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <BsFileText className="w-8 h-8 text-purple-500 mr-3"/>
                        <h3 className="text-xl font-bold text-purple-700">Consentimiento
                            Involuntario</h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                        Aplica a pacientes incompetentes mentalmente o en custodia policial. Debe obtenerse de alguien legalmente responsable.
                    </p>
                    <div className="bg-purple-50 p-3 rounded">
                        <strong className="text-purple-800 text-sm">Consideraciones:</strong>
                        <ul className="text-sm text-purple-700 mt-1">
                            <li>• Custodio, tutor legal u oficial a cargo.</li>
                            <li>• Prisioneros o arrestados (si están conscientes/competentes, aún pueden rechazar).</li>
                            <li>• Consultar control médico en línea.</li>
                        </ul>
                    </div>
                </div>

                {/* Restricción forzada */}
                <div
                    className="bg-white border border-orange-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <AiOutlineWarning className="w-8 h-8 text-orange-500 mr-3"/>
                        <h3 className="text-xl font-bold text-orange-700">Restricción Forzada</h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                        Paciente combativo que representa riesgo para sí mismo o el equipo.
                    </p>
                    <div className="bg-orange-50 p-3 rounded">
                        <strong className="text-orange-800 text-sm">Lineamientos:</strong>
                        <ul className="text-sm text-orange-700 mt-1">
                            <li>• Proteger vía aérea en todo momento.</li>
                            <li>• Solicitar apoyo de autoridades (policía).</li>
                            <li>• Consultar protocolo y control médico.</li>
                            <li>• Nunca remover restricciones en trayecto sin evaluar riesgo.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-yellow-50 to-red-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                    <AiOutlineWarning className="mr-2"/>
                    Situaciones especiales de consentimiento
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-800 mb-2">👶 Menores de
                            edad</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• Requieren consentimiento de padres/tutores</li>
                            <li>• Emergencia: consentimiento implícito</li>
                            <li>• Menores emancipados: pueden consentir</li>
                            <li>• Embarazadas menores: casos especiales</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-800 mb-2">🧠 Incapacidad
                            mental</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• Evaluar capacidad de decisión</li>
                            <li>• Buscar representante legal</li>
                            <li>• Emergencia: actuar en beneficio</li>
                            <li>• Documentar evaluación</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                        <h4 className="font-semibold text-yellow-800 mb-2">🍺 Intoxicación</h4>
                        <ul className="text-sm text-yellow-700 space-y-1">
                            <li>• Evaluar nivel de alteración</li>
                            <li>• Si hay riesgo vital: actuar</li>
                            <li>• Buscar familiares responsables</li>
                            <li>• Documentar estado mental</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Rechazo de atención */}
                <div className="bg-white border border-red-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <FaExclamationTriangle className="w-6 h-6 text-red-500 mr-3"/>
                        <h3 className="text-lg font-semibold text-red-700">Rechazo de
                            Atención</h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                        El paciente competente tiene derecho a rechazar tratamiento, incluso si
                        puede resultar en muerte.
                    </p>
                    <div className="bg-red-50 p-3 rounded">
                        <strong className="text-red-800 text-sm">Protocolo de rechazo:</strong>
                        <ol className="text-sm text-red-700 mt-1 space-y-1">
                            <li>1. Verificar competencia mental</li>
                            <li>2. Explicar riesgos claramente</li>
                            <li>3. Ofrecer alternativas</li>
                            <li>4. Documentar en FRAP detalladamente</li>
                            <li>5. Obtener firma si es posible</li>
                            <li>6. Dejar vía de contacto</li>
                        </ol>
                    </div>
                </div>

                {/* Documentación ética */}
                <div className="bg-white border border-purple-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <BsFileText className="w-6 h-6 text-purple-500 mr-3"/>
                        <h3 className="text-lg font-semibold text-purple-700">Documentación
                            Ética</h3>
                    </div>
                    <p className="text-gray-700 mb-3 text-sm">
                        La documentación debe ser veraz, completa y proteger la confidencialidad
                        del paciente.
                    </p>
                    <div className="bg-purple-50 p-3 rounded">
                        <strong className="text-purple-800 text-sm">Principios de
                            documentación:</strong>
                        <ul className="text-sm text-purple-700 mt-1 space-y-1">
                            <li>• Escribir de forma legible</li>
                            <li>• Usar tinta, no lápiz</li>
                            <li>• Corregir errores apropiadamente</li>
                            <li>• Incluir fecha, hora y firma</li>
                            <li>• Ser objetivos, no subjetivos</li>
                            <li>• Proteger confidencialidad</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div
                className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                    <MdSecurity className="mr-2"/>
                    Dilemas éticos comunes en campo
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                            <h4 className="font-semibold text-blue-800 mb-2">🤔 Caso: Recursos
                                limitados</h4>
                            <p className="text-sm text-blue-700">
                                <strong>Dilema:</strong> Múltiples pacientes críticos, una
                                ambulancia.<br/>
                                <strong>Principio ético:</strong> Triage - mayor beneficio para
                                más personas.<br/>
                                <strong>Acción:</strong> Aplicar criterios de triage
                                establecidos.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-blue-400">
                            <h4 className="font-semibold text-blue-800 mb-2">👨‍👩‍👧‍👦 Caso:
                                Familia vs paciente</h4>
                            <p className="text-sm text-blue-700">
                                <strong>Dilema:</strong> Familia exige información confidencial.<br/>
                                <strong>Principio ético:</strong> Confidencialidad del paciente.<br/>
                                <strong>Acción:</strong> Solo información general, proteger
                                privacidad.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border-l-4 border-green-400">
                            <h4 className="font-semibold text-green-800 mb-2">⛪ Caso: Creencias
                                religiosas</h4>
                            <p className="text-sm text-green-700">
                                <strong>Dilema:</strong> Paciente rechaza transfusión por
                                religión.<br/>
                                <strong>Principio ético:</strong> Autonomía y respeto a
                                creencias.<br/>
                                <strong>Acción:</strong> Respetar decisión, buscar alternativas.
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-green-400">
                            <h4 className="font-semibold text-green-800 mb-2">⚖️ Caso: Menor vs
                                padres</h4>
                            <p className="text-sm text-green-700">
                                <strong>Dilema:</strong> Menor necesita atención, padres se
                                oponen.<br/>
                                <strong>Principio ético:</strong> Beneficencia hacia el
                                menor.<br/>
                                <strong>Acción:</strong> Priorizar bienestar del menor,
                                notificar autoridades.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}