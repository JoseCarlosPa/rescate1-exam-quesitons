import {BsLightbulb} from "react-icons/bs";
import {FaBug, FaSnowflake, FaThermometerHalf, FaWater} from "react-icons/fa";
import {MdCheckCircle} from "react-icons/md";
import {FiAlertTriangle, FiUser} from "react-icons/fi";

export default function Prevention() {
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Prevención y Educación
                Comunitaria</h2>

            {/* Educación para la prevención */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-8 h-8 text-blue-500 mr-3"/>
                    <h3 className="text-xl font-bold text-blue-700">Educación Preventiva</h3>
                </div>
                <p className="text-gray-700 mb-4">
                    Como paramédico, tu papel educativo es fundamental para prevenir emergencias ambientales.
                    La educación comunitaria puede salvar vidas y reducir la incidencia de estos eventos.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-700 mb-2">Grupos de Riesgo</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Niños menores de 5 años</li>
                            <li>Adultos mayores de 65 años</li>
                            <li>Trabajadores al aire libre</li>
                            <li>Personas con enfermedades crónicas</li>
                            <li>Deportistas y atletas</li>
                            <li>Personas sin hogar</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold text-blue-700 mb-2">Factores de Riesgo</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Medicamentos que alteran termorregulación</li>
                            <li>Deshidratación crónica</li>
                            <li>Obesidad o desnutrición</li>
                            <li>Alcohol y sustancias</li>
                            <li>Exposición ocupacional</li>
                            <li>Falta de aclimatación</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Prevención por tipo */}
            <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                        <FaThermometerHalf className="w-6 h-6 mr-2"/>
                        Prevención - Emergencias por Calor
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-red-600 mb-2">Medidas Preventivas</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Hidratación adecuada (antes, durante y después)</li>
                                <li>Ropa ligera, de colores claros y transpirable</li>
                                <li>Evitar actividades en horas de mayor calor</li>
                                <li>Buscar sombra y ambientes frescos</li>
                                <li>Aclimatación gradual al calor</li>
                                <li>Reconocer signos tempranos</li>
                            </ul>
                        </div>
                        <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-orange-600 mb-2">Signos de Alerta</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Sed excesiva</li>
                                <li>Fatiga inusual</li>
                                <li>Dolor de cabeza</li>
                                <li>Mareo o náuseas</li>
                                <li>Disminución de la sudoración</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                        <FaSnowflake className="w-6 h-6 mr-2"/>
                        Prevención - Emergencias por Frío
                    </h3>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg">
                            <h4 className="font-semibold text-blue-600 mb-2">Medidas Preventivas</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Vestimenta en capas (sistema de 3 capas)</li>
                                <li>Proteger extremidades (guantes, calcetines)</li>
                                <li>Mantener ropa seca</li>
                                <li>Nutrición e hidratación adecuada</li>
                                <li>Evitar alcohol y cigarrillos</li>
                                <li>Planificar actividades al aire libre</li>
                            </ul>
                        </div>
                        <div className="bg-cyan-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-cyan-600 mb-2">Signos de Alerta</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li>Escalofríos persistentes</li>
                                <li>Entumecimiento</li>
                                <li>Pérdida de destreza</li>
                                <li>Confusión o irritabilidad</li>
                                <li>Fatiga extrema</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seguridad acuática */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <FaWater className="w-6 h-6 mr-2"/>
                    Prevención - Seguridad Acuática
                </h3>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600 mb-2">Nadadores</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Nunca nadar solo</li>
                            <li>Conocer las corrientes</li>
                            <li>Respetar las señales</li>
                            <li>No nadar bajo efectos del alcohol</li>
                            <li>Usar chaleco salvavidas</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600 mb-2">Supervisión Infantil</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Supervisión constante</li>
                            <li>Barreras físicas en piscinas</li>
                            <li>Enseñar a nadar temprano</li>
                            <li>Flotadores apropiados</li>
                            <li>Clases de seguridad acuática</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-green-600 mb-2">Actividades Acuáticas</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Equipo de seguridad certificado</li>
                            <li>Verificar condiciones climáticas</li>
                            <li>Plan de emergencia</li>
                            <li>Comunicación con tierra</li>
                            <li>Conocimiento de rescate</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Prevención de mordeduras */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-700 mb-4 flex items-center">
                    <FaBug className="w-6 h-6 mr-2"/>
                    Prevención - Mordeduras y Picaduras
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-600 mb-2">Medidas Generales</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Usar ropa protectora en áreas rurales</li>
                            <li>Revisar zapatos y ropa antes de usar</li>
                            <li>Usar repelente de insectos</li>
                            <li>Evitar caminar descalzo</li>
                            <li>Usar linterna en la noche</li>
                            <li>Mantener áreas limpias</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-600 mb-2">Educación Específica</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Identificar especies peligrosas locales</li>
                            <li>Conocer hábitats de riesgo</li>
                            <li>Evitar molestar nidos o madrigueras</li>
                            <li>Primeros auxilios básicos</li>
                            <li>Cuándo buscar atención médica</li>
                            <li>Números de emergencia</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Recursos educativos */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Recursos Educativos y Herramientas</h3>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600 mb-2">Materiales Educativos</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Folletos informativos ilustrados</li>
                            <li>Videos educativos cortos</li>
                            <li>Demostraciones prácticas</li>
                            <li>Simulacros de emergencia</li>
                            <li>Aplicaciones móviles</li>
                            <li>Charlas comunitarias</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-600 mb-2">Colaboración Institucional</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Escuelas y universidades</li>
                            <li>Centros de trabajo</li>
                            <li>Clubes deportivos</li>
                            <li>Organizaciones comunitarias</li>
                            <li>Servicios de salud</li>
                            <li>Medios de comunicación</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Mensajes clave */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mensajes Clave para la Comunidad</h3>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-green-100 p-4 rounded-lg text-center">
                        <MdCheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                        <h4 className="font-semibold text-green-700 mb-2">PREVENCIÓN</h4>
                        <p className="text-sm text-gray-700">
                            "La mayoría de emergencias ambientales son prevenibles con educación y preparación"
                        </p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                        <FiAlertTriangle className="w-8 h-8 text-blue-600 mx-auto mb-2"/>
                        <h4 className="font-semibold text-blue-700 mb-2">RECONOCIMIENTO</h4>
                        <p className="text-sm text-gray-700">
                            "Conocer los signos tempranos puede salvar vidas"
                        </p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                        <FiUser className="w-8 h-8 text-red-600 mx-auto mb-2"/>
                        <h4 className="font-semibold text-red-700 mb-2">ACCIÓN</h4>
                        <p className="text-sm text-gray-700">
                            "Actuar rápido y buscar ayuda profesional es crucial"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}