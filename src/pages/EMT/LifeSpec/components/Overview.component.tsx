import {FaBaby, FaChild, FaUserMd} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {BsPersonCheck} from "react-icons/bs";
import {MdAccessibility} from "react-icons/md";

export default function Overview() {
    return (
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
                                <li>Reflejos primitivos: Moro (sobresalto), palmar, búsqueda y succión</li>
                                <li>Sistema inmune inmaduro (depende de inmunidad pasiva materna)</li>
                                <li>Termorregulación deficiente</li>
                                <li>Fontanelas abiertas (permiten moldear el cráneo)</li>
                            </ul>
                        </div>

                        <div className="bg-cyan-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaBaby className="w-6 h-6 text-cyan-600 mr-2"/>
                                <h3 className="font-medium text-lg text-cyan-700">Lactantes (1
                                    mes - 1 año)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Crecimiento rápido: triplican su peso al primer año</li>
                                <li>Llanto como método principal de comunicación</li>
                                <li>Mayor superficie corporal relativa y vulnerables a deshidratación</li>
                                <li>Desarrollan apego seguro, ansioso o evitativo</li>
                                <li>Confianza vs desconfianza (hasta los 18 meses)</li>
                            </ul>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaChild className="w-6 h-6 text-green-600 mr-2"/>
                                <h3 className="font-medium text-lg text-green-700">Niños
                                    pequeños (1-3 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Pérdida de la inmunidad pasiva materna (más resfriados)</li>
                                <li>Desarrollo de motricidad fina y gruesa</li>
                                <li>Empiezan a entender causa y efecto</li>
                                <li>Miedo a la separación de sus padres</li>
                                <li>Control neuromuscular de esfínteres (12-15 meses), pero preparación psicológica más tarde</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaChild className="w-6 h-6 text-yellow-600 mr-2"/>
                                <h3 className="font-medium text-lg text-yellow-700">Preescolares
                                    (3-6 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Dominan el lenguaje básico y oraciones completas</li>
                                <li>Aprenden interactuando con sus pares</li>
                                <li>Cerebro alcanza el 90% de su peso adulto final</li>
                                <li>Aumenta la masa muscular y densidad ósea</li>
                                <li>Siguen rutinas y comprenden explicaciones simples</li>
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
                                <li>Desarrollo de autoconcepto y autoestima</li>
                                <li>Razonamiento moral: preconvencional, convencional y posconvencional</li>
                                <li>Crecen aprox. 6 cm y 2 kg cada año</li>
                                <li>Los dientes de leche son reemplazados por los permanentes</li>
                                <li>Causa principal de muerte: lesiones involuntarias</li>
                            </ul>
                        </div>

                        <div className="bg-pink-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <BsPersonCheck className="w-6 h-6 text-pink-600 mr-2"/>
                                <h3 className="font-medium text-lg text-pink-700">Adolescentes
                                    (12-18 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Crecimiento repentino (2 a 3 años) muscular y óseo</li>
                                <li>Maduración reproductiva (menarquia, hormonas sexuales)</li>
                                <li>Conflicto por independencia e identidad personal</li>
                                <li>Alto riesgo de depresión, suicidio y trastornos alimenticios</li>
                                <li>Privacidad y autoimagen son muy importantes</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <FaUserMd className="w-6 h-6 text-orange-600 mr-2"/>
                                <h3 className="font-medium text-lg text-orange-700">Adultos
                                    jóvenes (19-40 años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Cuerpo funciona a su máxima eficiencia</li>
                                <li>Formación de hábitos de por vida (dieta, ejercicio)</li>
                                <li>Asentamiento de discos vertebrales (encogimiento sutil)</li>
                                <li>Enfoque principal: trabajo, familia, estrés</li>
                                <li>Causa principal de muerte: lesión no intencional</li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center mb-3">
                                <MdAccessibility className="w-6 h-6 text-gray-600 mr-2"/>
                                <h3 className="font-medium text-lg text-gray-700">Adultos
                                    mayores (65+ años)</h3>
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                <li>Envejecimiento y declive fisiológico progresivo</li>
                                <li>Disminución en filtración renal (50%) y peso cerebral</li>
                                <li>Enfermedad cardíaca es la principal causa de muerte</li>
                                <li>Enfrentan retos psicosociales: depresión y aislamiento</li>
                                <li>Requieren cuidado paciente: tienen sabiduría y experiencia invaluables</li>
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