import {GiLungs} from "react-icons/gi";
import {FiActivity, FiUser} from "react-icons/fi";
import {BsGraphUp} from "react-icons/bs";
import {FaExclamationTriangle} from "react-icons/fa";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Anatomía del sistema respiratorio */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4 text-blue-800 flex items-center">
                    <GiLungs className="w-6 h-6 mr-2"/>
                    Anatomía del Sistema Respiratorio
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Vía Aérea Superior</h3>
                        <div className="bg-white p-4 rounded-lg space-y-3">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Nariz y boca</h4>
                                    <p className="text-sm text-gray-600">Filtración, humidificación y calentamiento</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Faringe</h4>
                                    <p className="text-sm text-gray-600">Nasofaringe, orofaringe, laringofaringe</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Laringe</h4>
                                    <p className="text-sm text-gray-600">Cuerdas vocales, protección vía aérea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-700">Vía Aérea Inferior</h3>
                        <div className="bg-white p-4 rounded-lg space-y-3">
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Tráquea</h4>
                                    <p className="text-sm text-gray-600">Tubo cartilaginoso, 10-12 cm</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Bronquios</h4>
                                    <p className="text-sm text-gray-600">Principales, lobares, segmentarios</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                <div>
                                    <h4 className="font-semibold">Bronquiolos y alvéolos</h4>
                                    <p className="text-sm text-gray-600">Intercambio gaseoso, 300 millones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fisiología respiratoria */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FiActivity className="w-6 h-6 mr-2 text-orange-500"/>
                    Fisiología Respiratoria
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                        <h3 className="font-medium text-lg mb-3 text-purple-700 text-center">Ventilación</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Proceso mecánico de mover aire hacia y desde los pulmones.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Inspiración: Diafragma desciende</li>
                            <li>Espiración: Diafragma asciende</li>
                            <li>Músculos intercostales</li>
                            <li>Control del tronco cerebral</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-teal-50 to-teal-100 p-6 rounded-lg border">
                        <h3 className="font-medium text-lg mb-3 text-teal-700 text-center">Perfusión</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Flujo sanguíneo a través de los capilares pulmonares.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Circulación pulmonar</li>
                            <li>Relación V/Q (ventilación/perfusión)</li>
                            <li>Presión arterial pulmonar</li>
                            <li>Retorno venoso</li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                        <h3 className="font-medium text-lg mb-3 text-orange-700 text-center">Difusión</h3>
                        <p className="text-gray-700 leading-relaxed mb-3">
                            Intercambio gaseoso a nivel alveolar.
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>O₂: Alvéolo → Sangre</li>
                            <li>CO₂: Sangre → Alvéolo</li>
                            <li>Membrana respiratoria</li>
                            <li>Gradientes de presión</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Control de la respiración */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <FiUser className="w-5 h-5 mr-2 text-orange-500"/>
                    Control Neural de la Respiración
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Centros Respiratorios</h4>
                        <div className="bg-white p-4 rounded space-y-2">
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>Bulbo raquídeo:</strong> Control automático</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>Puente:</strong> Modulación del ritmo</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>Corteza:</strong> Control voluntario</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Estímulos Respiratorios</h4>
                        <div className="bg-white p-4 rounded space-y-2">
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>CO₂ elevado:</strong> Estímulo principal</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>O₂ bajo:</strong> Estímulo secundario</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                                <span className="text-sm"><strong>pH ácido:</strong> Estimula respiración</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nueva sección sobre fisiopatología del control respiratorio */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-3">Estímulo Hipóxico (Drive Hipóxico)</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Mecanismo normal:</strong></p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>PaO₂ &lt; 60 mmHg activa quimiorreceptores periféricos</li>
                                <li>Estimula respiración cuando O₂ está muy bajo</li>
                                <li>Mecanismo de seguridad secundario</li>
                            </ul>
                            <p className="mt-2"><strong>En pacientes EPOC:</strong></p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Retención crónica de CO₂</li>
                                <li>Dependencia del estímulo hipóxico</li>
                                <li>Riesgo con O₂ alto flujo</li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-700 mb-3">Retención de CO₂ (Hipercapnia)</h4>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Causas principales:</strong></p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Hipoventilación alveolar</li>
                                <li>Obstrucción de vía aérea</li>
                                <li>Fatiga de músculos respiratorios</li>
                                <li>Depresión del SNC</li>
                            </ul>
                            <p className="mt-2"><strong>Efectos clínicos:</strong></p>
                            <ul className="list-disc list-inside space-y-1 ml-2">
                                <li>Acidosis respiratoria</li>
                                <li>Vasodilatación cerebral</li>
                                <li>Alteración del estado mental</li>
                                <li>Eventual depresión respiratoria</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Valores normales actualizados */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsGraphUp className="w-6 h-6 mr-2 text-orange-500"/>
                    Valores Normales por Grupo Etario
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead>
                        <tr className="bg-gradient-to-r from-gray-100 to-gray-200">
                            <th className="py-3 px-4 border text-left font-semibold">Parámetro</th>
                            <th className="py-3 px-4 border text-center font-semibold">Adultos</th>
                            <th className="py-3 px-4 border text-center font-semibold">Niños (1-12 años)</th>
                            <th className="py-3 px-4 border text-center font-semibold">Lactantes (&lt;1 año)</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Frecuencia respiratoria</td>
                            <td className="py-3 px-4 border text-center">12-20/min</td>
                            <td className="py-3 px-4 border text-center">15-30/min</td>
                            <td className="py-3 px-4 border text-center">25-50/min</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Saturación O₂</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Volumen corriente</td>
                            <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                            <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                            <td className="py-3 px-4 border text-center">6-8 ml/kg</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium">Capacidad pulmonar total</td>
                            <td className="py-3 px-4 border text-center">6000 ml</td>
                            <td className="py-3 px-4 border text-center">Variable</td>
                            <td className="py-3 px-4 border text-center">300-400 ml</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Fisiopatología de las emergencias respiratorias */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                    <FaExclamationTriangle className="w-5 h-5 mr-2"/>
                    Fisiopatología de las Emergencias Respiratorias
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-700 mb-3">Hipoxemia (↓ O₂ en sangre)</h4>
                        <div className="bg-white p-4 rounded">
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li><strong>Hipoventilación:</strong> ↓ Ventilación alveolar</li>
                                <li><strong>Alteración V/Q:</strong> Desajuste ventilación/perfusión</li>
                                <li><strong>Shunt:</strong> Sangre no oxigenada</li>
                                <li><strong>Difusión alterada:</strong> Membrana engrosada</li>
                                <li><strong>Baja FiO₂:</strong> Altitud, ambiente cerrado</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-700 mb-3">Hipercapnia (↑ CO₂ en sangre)</h4>
                        <div className="bg-white p-4 rounded">
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                                <li><strong>Hipoventilación:</strong> ↓ Eliminación de CO₂</li>
                                <li><strong>Obstrucción:</strong> ↑ Espacio muerto</li>
                                <li><strong>Fatiga respiratoria:</strong> Músculos agotados</li>
                                <li><strong>Depresión SNC:</strong> Medicamentos, lesiones</li>
                                <li><strong>Acidosis respiratoria:</strong> pH &lt; 7.35</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Nueva sección sobre mecanismos compensatorios */}
                <div className="mt-6">
                    <h4 className="font-semibold text-red-700 mb-3">Mecanismos Compensatorios y Falla</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded">
                            <h5 className="font-medium text-orange-600 mb-2">Compensación Respiratoria</h5>
                            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                <li>↑ Frecuencia respiratoria</li>
                                <li>↑ Volumen corriente</li>
                                <li>Uso músculos accesorios</li>
                                <li>Posición de trípode</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h5 className="font-medium text-orange-600 mb-2">Compensación Cardiovascular</h5>
                            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                <li>↑ Frecuencia cardíaca</li>
                                <li>↑ Gasto cardíaco</li>
                                <li>Vasoconstricción periférica</li>
                                <li>↑ Presión arterial</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded">
                            <h5 className="font-medium text-red-600 mb-2">Signos de Falla</h5>
                            <ul className="list-disc list-inside space-y-1 text-xs text-gray-700">
                                <li>↓ Frecuencia respiratoria</li>
                                <li>Respiración paradójica</li>
                                <li>Bradicardia</li>
                                <li>Alteración mental</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}