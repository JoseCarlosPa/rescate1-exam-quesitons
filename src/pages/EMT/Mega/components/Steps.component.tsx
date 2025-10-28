import {FaUserMd, FaChartLine} from "react-icons/fa";
import {MdPeople} from "react-icons/md";

export default function Steps(){
    return(
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Roles del equipo en un Código Mega</h2>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <div className="flex items-center mb-2">
                            <FaUserMd className="text-blue-600 mr-2 text-xl"/>
                            <h3 className="text-lg font-semibold text-blue-800">Líder del equipo</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• No realiza tareas físicas (compresiones, vía aérea)</li>
                            <li>• Dirige la escena y asigna roles</li>
                            <li>• Asegura seguimiento de algoritmos</li>
                            <li>• Fomenta comunicación de circuito cerrado</li>
                            <li>• Toma decisiones clínicas críticas</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                        <div className="flex items-center mb-2">
                            <MdPeople className="text-green-600 mr-2 text-xl"/>
                            <h3 className="text-lg font-semibold text-green-800">Miembros del equipo</h3>
                        </div>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• <strong>Compresor 1 y 2:</strong> RCP de alta calidad, rotación cada 2 min</li>
                            <li>• <strong>Vía aérea:</strong> Manejo de oxigenación y ventilación</li>
                            <li>• <strong>Desfibrilador:</strong> Análisis de ritmo y descargas</li>
                            <li>• <strong>Acceso vascular/Medicamentos:</strong> Vías IV/IO y administración</li>
                            <li>• <strong>Registro:</strong> Documentación de intervenciones y tiempos</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Secuencia del Código Mega</h2>
                <div className="space-y-4">
                    <div className="bg-white border-l-4 border-orange-500 p-4 shadow-sm">
                        <h4 className="font-semibold text-orange-700 mb-2">1. Reconocimiento y activación</h4>
                        <p className="text-gray-700 text-sm">
                            • Verificar ausencia de respuesta y respiración normal<br/>
                            • Activar sistema de emergencias<br/>
                            • Solicitar DEA/desfibrilador<br/>
                            • Verificar ausencia de pulso (≤10 segundos)
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-red-500 p-4 shadow-sm">
                        <h4 className="font-semibold text-red-700 mb-2">2. Inicio de RCP de alta calidad</h4>
                        <p className="text-gray-700 text-sm">
                            • Frecuencia: 100-120 compresiones/minuto<br/>
                            • Profundidad: 5-6 cm (adultos)<br/>
                            • Permitir expansión torácica completa<br/>
                            • Minimizar interrupciones (FCT &gt;80%)<br/>
                            • Relación 30:2 sin vía aérea avanzada / continuas con vía avanzada
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-purple-500 p-4 shadow-sm">
                        <h4 className="font-semibold text-purple-700 mb-2">3. Análisis de ritmo y desfibrilación</h4>
                        <p className="text-gray-700 text-sm mb-2">
                            <strong className="text-purple-700">Ritmos desfibrilables (FV/TVsp):</strong><br/>
                            • Administrar descarga (120-200 J bifásica)<br/>
                            • Reanudar RCP inmediatamente (2 minutos)<br/>
                            • Establecer acceso IV/IO<br/>
                            • Adrenalina 1mg cada 3-5 min después de 2ª descarga<br/>
                            • Amiodarona 300mg después de 3ª descarga<br/><br/>

                            <strong className="text-purple-700">Ritmos NO desfibrilables (AESP/Asistolia):</strong><br/>
                            • RCP de alta calidad (2 minutos)<br/>
                            • Adrenalina 1mg cada 3-5 min<br/>
                            • Buscar causas reversibles (H's y T's)
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-blue-500 p-4 shadow-sm">
                        <h4 className="font-semibold text-blue-700 mb-2">4. Vía aérea y ventilación</h4>
                        <p className="text-gray-700 text-sm">
                            • Oxígeno al 100%<br/>
                            • Vía aérea básica o avanzada según habilidades<br/>
                            • Confirmar colocación de tubo (capnografía)<br/>
                            • Ventilación: 1 respiración cada 6 seg con vía avanzada
                        </p>
                    </div>

                    <div className="bg-white border-l-4 border-yellow-500 p-4 shadow-sm">
                        <h4 className="font-semibold text-yellow-700 mb-2">5. Causas reversibles (H's y T's)</h4>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <div>
                                <p className="font-semibold text-yellow-700">Las H's:</p>
                                <ul className="text-gray-700">
                                    <li>• Hipovolemia</li>
                                    <li>• Hipoxia</li>
                                    <li>• Hidrogenión (acidosis)</li>
                                    <li>• Hipo/Hiperkalemia</li>
                                    <li>• Hipotermia</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-semibold text-yellow-700">Las T's:</p>
                                <ul className="text-gray-700">
                                    <li>• Tórax a tensión (neumotórax)</li>
                                    <li>• Taponamiento cardíaco</li>
                                    <li>• Tóxicos</li>
                                    <li>• Trombosis (coronaria/pulmonar)</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border-l-4 border-green-500 p-4 shadow-sm">
                        <h4 className="font-semibold text-green-700 mb-2">6. Reevaluación continua</h4>
                        <p className="text-gray-700 text-sm">
                            • Cada 2 minutos: análisis de ritmo y verificación de pulso<br/>
                            • Rotación de compresores para mantener calidad<br/>
                            • Verificar colocación de dispositivos<br/>
                            • Considerar transporte si no hay retorno de circulación espontánea (RCE)
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-4 mt-6">
                <div className="flex items-center mb-2">
                    <FaChartLine className="text-purple-600 mr-2 text-xl"/>
                    <h3 className="text-lg font-semibold text-purple-800">Comunicación de circuito cerrado</h3>
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-purple-400 mt-3">
                    <p className="text-sm text-gray-700 mb-2">
                        <strong className="text-purple-700">Líder:</strong> "Administra 1mg de Adrenalina IV"
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                        <strong className="text-green-700">Miembro:</strong> "Entendido, administro 1mg de Adrenalina IV"
                    </p>
                    <p className="text-sm text-gray-700">
                        <strong className="text-blue-700">Miembro:</strong> "Adrenalina 1mg IV administrada"
                    </p>
                </div>
            </div>
        </div>
    );
}

