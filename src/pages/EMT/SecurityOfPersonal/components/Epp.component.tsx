import {FaAmbulance, FaEye, FaHandsWash, FaHardHat, FaMask, FaUsers} from "react-icons/fa";
import {BsPersonCheck, BsShieldCheck} from "react-icons/bs";
import {MdEmergency, MdHealthAndSafety, MdSecurity, MdWarning} from "react-icons/md";
import {FiAlertTriangle, FiCheckCircle, FiHeart} from "react-icons/fi";

export default function Epp() {
    return (
        <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-3">
                <FaHardHat className="inline mr-3 text-blue-500"/>
                EPP y Seguridad en Escena
            </h2>

            {/* Equipo de Protección Personal */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <BsShieldCheck className="mr-2"/>
                    Equipo de Protección Personal (EPP)
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center mb-3">
                            <FaHandsWash className="mr-2 text-blue-600"/>
                            <h4 className="font-bold text-blue-700">Guantes</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Nitrilo (recomendado)</li>
                            <li>• Látex (si no hay alergia)</li>
                            <li>• Doble guante en alto riesgo</li>
                            <li>• Cambio entre pacientes</li>
                        </ul>
                        <div className="mt-2 p-2 bg-blue-50 rounded text-xs text-blue-700">
                            <strong>Uso:</strong> Contacto con sangre, fluidos corporales o
                            superficies contaminadas
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center mb-3">
                            <FaMask className="mr-2 text-green-600"/>
                            <h4 className="font-bold text-green-700">Protección
                                Respiratoria</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Mascarilla quirúrgica</li>
                            <li>• N95 (enfermedades aéreas)</li>
                            <li>• P100 (químicos/humo)</li>
                            <li>• Respirador completo</li>
                        </ul>
                        <div className="mt-2 p-2 bg-green-50 rounded text-xs text-green-700">
                            <strong>Uso:</strong> Protección contra gotículas, aerosoles y
                            contaminantes
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center mb-3">
                            <FaEye className="mr-2 text-yellow-600"/>
                            <h4 className="font-bold text-yellow-700">Protección Ocular</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Gafas de seguridad</li>
                            <li>• Gafas con protección lateral</li>
                            <li>• Careta facial completa</li>
                            <li>• Resistentes a impactos</li>
                        </ul>
                        <div className="mt-2 p-2 bg-yellow-50 rounded text-xs text-yellow-700">
                            <strong>Uso:</strong> Protección contra salpicaduras y proyectiles
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center mb-3">
                            <MdHealthAndSafety className="mr-2 text-purple-600"/>
                            <h4 className="font-bold text-purple-700">Bata/Traje Protector</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Bata impermeable</li>
                            <li>• Traje Tyvek (químicos)</li>
                            <li>• Delantal de plástico</li>
                            <li>• Manga larga preferible</li>
                        </ul>
                        <div className="mt-2 p-2 bg-purple-50 rounded text-xs text-purple-700">
                            <strong>Uso:</strong> Protección corporal contra contaminación
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center mb-3">
                            <BsPersonCheck className="mr-2 text-orange-600"/>
                            <h4 className="font-bold text-orange-700">Calzado de Seguridad</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Botas impermeables</li>
                            <li>• Suela antideslizante</li>
                            <li>• Puntera reforzada</li>
                            <li>• Fácil descontaminación</li>
                        </ul>
                        <div className="mt-2 p-2 bg-orange-50 rounded text-xs text-orange-700">
                            <strong>Uso:</strong> Protección contra fluidos y objetos
                            punzocortantes
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                        <div className="flex items-center mb-3">
                            <MdSecurity className="mr-2 text-red-600"/>
                            <h4 className="font-bold text-red-700">EPP Adicional</h4>
                        </div>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Chaleco reflectante</li>
                            <li>• Casco de seguridad</li>
                            <li>• Chaleco balístico</li>
                            <li>• Linterna/iluminación</li>
                        </ul>
                        <div className="mt-2 p-2 bg-red-50 rounded text-xs text-red-700">
                            <strong>Uso:</strong> Situaciones especiales de alto riesgo
                        </div>
                    </div>
                </div>
            </div>

            {/* Procedimiento de colocación y retiro */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                        <FiCheckCircle className="mr-2"/>
                        Colocación del EPP
                    </h3>
                    <div className="space-y-3">
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                            <div
                                className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1
                            </div>
                            <div>
                                <h4 className="font-bold text-green-700 text-sm">Higiene de
                                    manos</h4>
                                <p className="text-xs text-gray-600">Lavado con agua y jabón o
                                    gel antibacterial</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                            <div
                                className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2
                            </div>
                            <div>
                                <h4 className="font-bold text-green-700 text-sm">Bata/Traje</h4>
                                <p className="text-xs text-gray-600">Cubrir torso desde cuello
                                    hasta rodillas</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                            <div
                                className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3
                            </div>
                            <div>
                                <h4 className="font-bold text-green-700 text-sm">Mascarilla</h4>
                                <p className="text-xs text-gray-600">Ajustar sobre nariz y boca,
                                    sin tocar la parte frontal</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                            <div
                                className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4
                            </div>
                            <div>
                                <h4 className="font-bold text-green-700 text-sm">Protección
                                    ocular</h4>
                                <p className="text-xs text-gray-600">Gafas o careta ajustadas
                                    correctamente</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-green-500">
                            <div
                                className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5
                            </div>
                            <div>
                                <h4 className="font-bold text-green-700 text-sm">Guantes</h4>
                                <p className="text-xs text-gray-600">Cubrir puños de la bata,
                                    verificar integridad</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                        <FiAlertTriangle className="mr-2"/>
                        Retiro del EPP
                    </h3>
                    <div className="space-y-3">
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                            <div
                                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1
                            </div>
                            <div>
                                <h4 className="font-bold text-red-700 text-sm">Guantes
                                    externos</h4>
                                <p className="text-xs text-gray-600">Retirar sin tocar la
                                    superficie externa</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                            <div
                                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2
                            </div>
                            <div>
                                <h4 className="font-bold text-red-700 text-sm">Protección
                                    ocular</h4>
                                <p className="text-xs text-gray-600">Tomar desde la parte
                                    posterior</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                            <div
                                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3
                            </div>
                            <div>
                                <h4 className="font-bold text-red-700 text-sm">Bata/Traje</h4>
                                <p className="text-xs text-gray-600">Enrollar hacia adentro, no
                                    sacudir</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                            <div
                                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4
                            </div>
                            <div>
                                <h4 className="font-bold text-red-700 text-sm">Mascarilla</h4>
                                <p className="text-xs text-gray-600">Tocar solo las cintas, no
                                    la parte frontal</p>
                            </div>
                        </div>
                        <div
                            className="flex items-center bg-white p-3 rounded border-l-4 border-red-500">
                            <div
                                className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm mr-3">5
                            </div>
                            <div>
                                <h4 className="font-bold text-red-700 text-sm">Higiene
                                    final</h4>
                                <p className="text-xs text-gray-600">Lavado de manos inmediato y
                                    completo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seguridad en diferentes escenas */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <MdWarning className="mr-2 text-orange-600"/>
                    Seguridad por Tipo de Escena
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border-l-4 border-red-500">
                            <h4 className="font-bold text-red-700 mb-2 flex items-center">
                                <FaAmbulance className="mr-1"/>
                                Accidentes Vehiculares
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Chaleco reflectante obligatorio</li>
                                <li>• Señalización a 100m mínimo</li>
                                <li>• Apoyo policial para control de tráfico</li>
                                <li>• Evaluar estabilidad de vehículos</li>
                                <li>• Atención a derrames de combustible</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                            <h4 className="font-bold text-orange-700 mb-2 flex items-center">
                                <MdEmergency className="mr-1"/>
                                Violencia/Crimen
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Esperar liberación policial</li>
                                <li>• Mantener rutas de escape</li>
                                <li>• Comunicación constante</li>
                                <li>• No tocar evidencia</li>
                                <li>• Chaleco balístico si disponible</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                            <h4 className="font-bold text-yellow-700 mb-2 flex items-center">
                                <FaMask className="mr-1"/>
                                Materiales Peligrosos
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Identificar placas HAZMAT</li>
                                <li>• Viento a favor, cuesta arriba</li>
                                <li>• EPP nivel apropiado</li>
                                <li>• Descontaminación obligatoria</li>
                                <li>• Apoyo de bomberos/HAZMAT</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                            <h4 className="font-bold text-blue-700 mb-2 flex items-center">
                                <FaUsers className="mr-1"/>
                                Multitudes/Eventos
                            </h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Identificación visible del personal</li>
                                <li>• Comunicación con organizadores</li>
                                <li>• Rutas alternativas planificadas</li>
                                <li>• Trabajo en equipos de 2 mínimo</li>
                                <li>• Evaluación de estado de ánimo</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ergonomía y prevención de lesiones */}
            <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-teal-800 mb-4 flex items-center">
                    <FiHeart className="mr-2"/>
                    Ergonomía y Prevención de Lesiones
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-teal-700 mb-3">Levantamiento Seguro</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Flexionar rodillas, no espalda</li>
                            <li>• Mantener carga cerca del cuerpo</li>
                            <li>• Evitar giros con peso</li>
                            <li>• Trabajar en equipo</li>
                            <li>• Usar dispositivos mecánicos</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-teal-700 mb-3">Traslado de Pacientes</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Camillas con ruedas cuando sea posible</li>
                            <li>• Mínimo 4 personas para traslados</li>
                            <li>• Altura adecuada de camilla</li>
                            <li>• Comunicación durante el movimiento</li>
                            <li>• Descansos frecuentes</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded">
                        <h4 className="font-bold text-teal-700 mb-3">Cuidado Personal</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Calentamiento antes del turno</li>
                            <li>• Ejercicios de estiramiento</li>
                            <li>• Fortalecimiento del core</li>
                            <li>• Calzado ergonómico</li>
                            <li>• Revisiones médicas regulares</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}