import {FaFileAlt} from "react-icons/fa";
import {HiDocumentText} from "react-icons/hi";
import {RiFileList3Line, RiUserVoiceLine} from "react-icons/ri";
import {AiOutlineWarning} from "react-icons/ai";
import {BsFileText} from "react-icons/bs";

export default function Documentation() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Documentación prehospitalaria y
                FRAP</h2>
            <p className="text-gray-600 mb-6">
                La documentación no es solo un requisito legal; es una herramienta que protege al paciente, al
                paramédico y mejora la continuidad de la atención.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Importancia del FRAP */}
                <div className="bg-white border border-blue-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <FaFileAlt className="w-8 h-8 text-blue-500 mr-3"/>
                        <h3 className="text-xl font-bold text-blue-700">¿Qué es el FRAP?</h3>
                    </div>
                    <p className="text-gray-700 mb-3">
                        Formato de Registro de Atención Prehospitalaria: documento oficial que registra toda la atención
                        médica brindada.
                    </p>
                    <div className="bg-blue-50 p-3 rounded">
                        <strong className="text-blue-800">Funciones del FRAP:</strong>
                        <ul className="text-sm text-blue-700 mt-1">
                            <li>• Continuidad de atención médica</li>
                            <li>• Protección legal del TAMP</li>
                            <li>• Registro para facturación</li>
                            <li>• Análisis de calidad de servicio</li>
                            <li>• Investigación y estadísticas</li>
                        </ul>
                    </div>
                </div>

                {/* Principios de documentación */}
                <div className="bg-white border border-green-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center mb-3">
                        <HiDocumentText className="w-8 h-8 text-green-500 mr-3"/>
                        <h3 className="text-xl font-bold text-green-700">Principios de documentación</h3>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded">
                            <strong className="text-green-800">Las 6 C's de la documentación:</strong>
                            <ul className="text-sm text-green-700 mt-1 space-y-1">
                                <li>• <strong>Clara:</strong> Legible y comprensible</li>
                                <li>• <strong>Concisa:</strong> Información esencial</li>
                                <li>• <strong>Completa:</strong> Todos los datos relevantes</li>
                                <li>• <strong>Cronológica:</strong> Orden temporal correcto</li>
                                <li>• <strong>Correcta:</strong> Información precisa</li>
                                <li>• <strong>Confidencial:</strong> Proteger privacidad</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4 flex items-center">
                    <RiFileList3Line className="mr-2"/>
                    Componentes esenciales del FRAP
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                            <strong className="text-yellow-800">Datos administrativos:</strong>
                            <ul className="text-sm text-yellow-700 mt-1">
                                <li>• Fecha y hora de llamada</li>
                                <li>• Ubicación del incidente</li>
                                <li>• Número de unidad y personal</li>
                                <li>• Tiempos de respuesta</li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                            <strong className="text-yellow-800">Datos del paciente:</strong>
                            <ul className="text-sm text-yellow-700 mt-1">
                                <li>• Información demográfica</li>
                                <li>• Queja principal</li>
                                <li>• Historia clínica (SAMPLE)</li>
                                <li>• Signos vitales seriados</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                            <strong className="text-yellow-800">Evaluación clínica:</strong>
                            <ul className="text-sm text-yellow-700 mt-1">
                                <li>• Evaluación primaria (ABCDE)</li>
                                <li>• Evaluación secundaria</li>
                                <li>• Impresión diagnóstica</li>
                                <li>• Evolución del paciente</li>
                            </ul>
                        </div>
                        <div className="bg-white p-3 rounded border-l-4 border-yellow-400">
                            <strong className="text-yellow-800">Tratamiento y destino:</strong>
                            <ul className="text-sm text-yellow-700 mt-1">
                                <li>• Intervenciones realizadas</li>
                                <li>• Medicamentos administrados</li>
                                <li>• Respuesta al tratamiento</li>
                                <li>• Hospital de destino</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Errores de documentación */}
                <div className="bg-white border border-red-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <AiOutlineWarning className="w-6 h-6 text-red-500 mr-3"/>
                        <h3 className="text-lg font-semibold text-red-700">Errores graves a evitar</h3>
                    </div>
                    <ul className="space-y-2 text-red-700 text-sm">
                        <li>• <strong>Información subjetiva:</strong> "Paciente parece borracho"</li>
                        <li>• <strong>Abreviaturas no estándar:</strong> Usar solo abreviaturas aprobadas</li>
                        <li>• <strong>Tachaduras ilegibles:</strong> Una línea, inicial y fecha</li>
                        <li>• <strong>Espacios en blanco:</strong> Llenar todos los campos</li>
                        <li>• <strong>Letra ilegible:</strong> Usar letra de molde clara</li>
                        <li>• <strong>Demora en documentación:</strong> Documentar inmediatamente</li>
                    </ul>
                </div>

                {/* Buenas prácticas */}
                <div className="bg-white border border-green-200 rounded-lg p-5">
                    <div className="flex items-center mb-3">
                        <BsFileText className="w-6 h-6 text-green-500 mr-3"/>
                        <h3 className="text-lg font-semibold text-green-700">Buenas prácticas y estándares</h3>
                    </div>
                    <ul className="space-y-2 text-green-700 text-sm">
                        <li>• <strong>Horario Militar:</strong> Usar formato de 24 hrs (ej. 14:00) para evitar confusiones (am/pm).</li>
                        <li>• <strong>Información objetiva:</strong> Reportar lo que observa ("aliento a alcohol") y no juicios ("está borracho").</li>
                        <li>• <strong>NEMSIS:</strong> Sistema Nacional de Información del SEM. Permite recopilar y analizar datos a gran escala para mejorar protocolos.</li>
                        <li>• <strong>Correcciones apropiadas:</strong> Nunca usar corrector. Trace una sola línea horizontal sobre el error, escriba la información correcta, sus iniciales y fecha.</li>
                        <li>• <strong>Métodos (SOAP/CHART):</strong> Siga la estructura local (Subjetivo/Objetivo o Queja/Historia/Evaluación) para ordenar la narrativa.</li>
                    </ul>
                </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                    <RiUserVoiceLine className="mr-2"/>
                    Documentación de situaciones especiales
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-800 mb-2">🚫 Rechazo de atención</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Estado mental del paciente</li>
                            <li>• Riesgos explicados al paciente</li>
                            <li>• Testigos presentes</li>
                            <li>• Firma del paciente y testigos</li>
                            <li>• Cita textual del paciente</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-800 mb-2">💊 Administración de medicamentos</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Nombre del medicamento</li>
                            <li>• Dosis exacta administrada</li>
                            <li>• Vía de administración</li>
                            <li>• Hora de administración</li>
                            <li>• Respuesta del paciente</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-800 mb-2">⚰️ Declaración de muerte</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Signos evidentes de muerte</li>
                            <li>• Hora de confirmación</li>
                            <li>• Personal que declara</li>
                            <li>• Autoridades notificadas</li>
                            <li>• Preservación de la escena</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Recordatorio legal</h3>
                <p className="text-blue-700 text-sm">
                    <strong>"Si no está documentado, no se hizo"</strong> - En términos legales, cualquier intervención
                    no documentada
                    se considera como no realizada. Tu documentación puede ser la diferencia entre protección legal y
                    responsabilidad civil.
                </p>
            </div>
        </div>
    );
}