import {FaBaby, FaChild, FaUserMd} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {BsPersonCheck} from "react-icons/bs";
import {MdAccessibility} from "react-icons/md";

export default function Overview() {
    return(
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es
                    el desarrollo humano?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    El desarrollo humano es un proceso continuo que abarca cambios físicos,
                    cognitivos, emocionales y sociales
                    desde el nacimiento hasta la muerte. Para los paramédicos, comprender estas
                    etapas es crucial para
                    proporcionar atención médica apropiada y efectiva.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Cada etapa presenta características únicas en anatomía, fisiología,
                    psicología y vulnerabilidades específicas
                    que afectan directamente las estrategias de evaluación, comunicación y
                    tratamiento prehospitalario.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Etapas
                    del Desarrollo Humano</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Infancia */}
                    <div className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaBaby className="w-6 h-6 text-blue-600 mr-2"/>
                                <h3 className="font-medium text-lg text-blue-700">Neonatos (0-1
                                    mes)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Respiradores nasales obligados</li>
                                <li>Reflejos primitivos presentes</li>
                                <li>Sistema inmune inmaduro</li>
                                <li>Termorregulación deficiente</li>
                                <li>Fontanelas abiertas</li>
                            </ul>
                        </div>

                        <div className="bg-cyan-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaBaby className="w-6 h-6 text-cyan-600 mr-2"/>
                                <h3 className="font-medium text-lg text-cyan-700">Lactantes (1
                                    mes - 1 año)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Crecimiento rápido peso/talla</li>
                                <li>Desarrollo motor progresivo</li>
                                <li>Mayor superficie corporal relativa</li>
                                <li>Vulnerable a deshidratación</li>
                                <li>Ansiedad ante extraños (6+ meses)</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaChild className="w-6 h-6 text-green-600 mr-2"/>
                                <h3 className="font-medium text-lg text-green-700">Niños
                                    pequeños (1-3 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Desarrollo del lenguaje explosivo</li>
                                <li>Autonomía inicial (caminar, hablar)</li>
                                <li>Curiosidad y exploración activa</li>
                                <li>Miedo a separación de padres</li>
                                <li>Control de esfínteres en desarrollo</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaChild className="w-6 h-6 text-yellow-600 mr-2"/>
                                <h3 className="font-medium text-lg text-yellow-700">Preescolares
                                    (3-6 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Pensamiento mágico y fantasioso</li>
                                <li>Mayor cooperación con adultos</li>
                                <li>Habilidades motoras refinadas</li>
                                <li>Comprenden explicaciones simples</li>
                                <li>Pueden verbalizar síntomas básicos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Niñez y adolescencia */}
                    <div className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FiUsers className="w-6 h-6 text-purple-600 mr-2"/>
                                <h3 className="font-medium text-lg text-purple-700">Escolares
                                    (6-12 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Pensamiento lógico concreto</li>
                                <li>Comprenden causa-efecto</li>
                                <li>Pueden seguir instrucciones complejas</li>
                                <li>Miedo al dolor y procedimientos</li>
                                <li>Importancia del grupo de pares</li>
                            </ul>
                        </div>

                        <div className="bg-pink-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <BsPersonCheck className="w-6 h-6 text-pink-600 mr-2"/>
                                <h3 className="font-medium text-lg text-pink-700">Adolescentes
                                    (12-18 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Cambios puberales significativos</li>
                                <li>Búsqueda de identidad personal</li>
                                <li>Pensamiento abstracto desarrollado</li>
                                <li>Conductas de riesgo aumentadas</li>
                                <li>Privacidad y autonomía importantes</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaUserMd className="w-6 h-6 text-orange-600 mr-2"/>
                                <h3 className="font-medium text-lg text-orange-700">Adultos
                                    jóvenes (19-40 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Máxima condición física</li>
                                <li>Sistemas orgánicos en plenitud</li>
                                <li>Formación de relaciones íntimas</li>
                                <li>Establecimiento profesional</li>
                                <li>Estrés laboral y social</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <MdAccessibility className="w-6 h-6 text-gray-600 mr-2"/>
                                <h3 className="font-medium text-lg text-gray-700">Adultos
                                    mayores (65+ años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Declino fisiológico progresivo</li>
                                <li>Comorbilidades múltiples</li>
                                <li>Polifarmacia frecuente</li>
                                <li>Fragilidad ósea aumentada</li>
                                <li>Cambios sensoriales (visión, audición)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-orange-800">💡 Punto clave para
                    paramédicos</h3>
                <p className="text-gray-700">
                    Cada etapa del desarrollo requiere un enfoque específico en la evaluación,
                    comunicación y tratamiento.
                    La comprensión de estas diferencias mejora significativamente la calidad de
                    la atención prehospitalaria
                    y la cooperación del paciente.
                </p>
            </div>
        </div>
    );
}