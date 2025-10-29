import {FaBaby, FaExclamationTriangle, FaHeartbeat, FaLungsVirus} from "react-icons/fa";
import {RiHeartPulseLine, RiLungsLine, RiMentalHealthLine} from "react-icons/ri";
import {BsLightbulb, BsShield} from "react-icons/bs";
import {FiActivity, FiEye} from "react-icons/fi";
import {TbMedicalCross, TbStethoscope} from "react-icons/tb";
import {MdCheckCircle, MdWarning} from "react-icons/md";

export default function Evaluation() {
    return(
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div
                className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">Los niños NO son adultos
                        pequeños</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Los niños tienen diferencias anatómicas, fisiológicas y psicológicas que
                    requieren
                    un enfoque especializado en el manejo de emergencias médicas.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaBaby className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold text-blue-600">Anatomía</p>
                        <p className="text-sm">Diferencias estructurales críticas</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaHeartbeat className="w-8 h-8 text-green-500 mx-auto mb-2"/>
                        <p className="font-bold text-green-600">Fisiología</p>
                        <p className="text-sm">Respuestas compensatorias únicas</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <RiMentalHealthLine className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
                        <p className="font-bold text-purple-600">Psicología</p>
                        <p className="text-sm">Desarrollo cognitivo variable</p>
                    </div>
                </div>
            </div>

            {/* Triángulo de Evaluación Pediátrica */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Triángulo de Evaluación Pediátrica (TEP)
                </h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-700 font-medium">
                        Herramienta de evaluación rápida que permite formar una impresión
                        general del niño
                        en <strong>10-15 segundos</strong>, evaluando "desde la puerta" antes
                        del contacto físico.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div
                        className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border-2 border-blue-200">
                        <div className="text-center mb-4">
                            <RiMentalHealthLine
                                className="w-12 h-12 text-blue-600 mx-auto mb-2"/>
                            <h3 className="text-xl font-bold text-blue-700">APARIENCIA</h3>
                            <p className="text-sm text-blue-600">Estado neurológico</p>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>Tono muscular:</strong> Flácido vs. Normal</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>Interactividad:</strong> Responde a estímulos</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>Consuelo:</strong> Se calma con padres</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>Mirada:</strong> Contacto visual apropiado</span>
                            </li>
                            <li className="flex items-start">
                                <FiEye className="w-4 h-4 mt-1 mr-2 text-blue-600"/>
                                <span><strong>Habla/Llanto:</strong> Fuerte vs. Débil</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-lg border-2 border-green-200">
                        <div className="text-center mb-4">
                            <RiLungsLine className="w-12 h-12 text-green-600 mx-auto mb-2"/>
                            <h3 className="text-xl font-bold text-green-700">RESPIRACIÓN</h3>
                            <p className="text-sm text-green-600">Trabajo respiratorio</p>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Sonidos anormales:</strong> Estridor, sibilancias</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Retracciones:</strong> Intercostales, subcostales</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Aleteo nasal:</strong> Esfuerzo respiratorio</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Posición anormal:</strong> Trípode, fowler</span>
                            </li>
                            <li className="flex items-start">
                                <FaLungsVirus className="w-4 h-4 mt-1 mr-2 text-green-600"/>
                                <span><strong>Frecuencia:</strong> Taquipnea, bradipnea</span>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="bg-gradient-to-b from-red-50 to-red-100 p-6 rounded-lg border-2 border-red-200">
                        <div className="text-center mb-4">
                            <RiHeartPulseLine className="w-12 h-12 text-red-600 mx-auto mb-2"/>
                            <h3 className="text-xl font-bold text-red-700">CIRCULACIÓN</h3>
                            <p className="text-sm text-red-600">Perfusión cutánea</p>
                        </div>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span><strong>Palidez:</strong> Pérdida de color normal</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span><strong>Moteado:</strong> Patrón reticulado</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span><strong>Cianosis:</strong> Coloración azulada</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span><strong>Relleno capilar:</strong> &gt;2 segundos anormal</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-4 h-4 mt-1 mr-2 text-red-600"/>
                                <span><strong>Temperatura:</strong> Extremidades frías</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Clasificación según TEP */}
            <div
                className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                    <TbMedicalCross className="w-6 h-6 mr-2"/>
                    Clasificación según TEP
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-green-100 p-4 rounded-lg text-center">
                        <MdCheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2"/>
                        <h4 className="font-bold text-green-700">NIÑO SANO</h4>
                        <p className="text-sm text-green-600">Todos los lados del triángulo
                            normales</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg text-center">
                        <MdWarning className="w-8 h-8 text-yellow-600 mx-auto mb-2"/>
                        <h4 className="font-bold text-yellow-700">NIÑO EN RIESGO</h4>
                        <p className="text-sm text-yellow-600">Un lado del triángulo anormal</p>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg text-center">
                        <FaExclamationTriangle className="w-8 h-8 text-red-600 mx-auto mb-2"/>
                        <h4 className="font-bold text-red-700">NIÑO ENFERMO</h4>
                        <p className="text-sm text-red-600">Dos o más lados anormales</p>
                    </div>
                </div>
            </div>

            {/* Signos vitales por edad */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <TbStethoscope className="w-6 h-6 mr-2 text-orange-500"/>
                    Signos Vitales Normales por Edad
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead className="bg-orange-100">
                        <tr>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">Grupo
                                de Edad
                            </th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">FC
                                (lpm)
                            </th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">FR
                                (rpm)
                            </th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">PAS
                                (mmHg)
                            </th>
                            <th className="py-3 px-4 border-b font-semibold text-gray-700">Peso
                                (kg)
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium text-blue-700">Recién
                                nacido (0-1 mes)
                            </td>
                            <td className="py-3 px-4 border-b text-center">120-160</td>
                            <td className="py-3 px-4 border-b text-center">30-50</td>
                            <td className="py-3 px-4 border-b text-center">60-90</td>
                            <td className="py-3 px-4 border-b text-center">3-5</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium text-green-700">Lactante
                                (1-12 meses)
                            </td>
                            <td className="py-3 px-4 border-b text-center">100-160</td>
                            <td className="py-3 px-4 border-b text-center">25-40</td>
                            <td className="py-3 px-4 border-b text-center">70-100</td>
                            <td className="py-3 px-4 border-b text-center">6-12</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium text-purple-700">Preescolar
                                (1-6 años)
                            </td>
                            <td className="py-3 px-4 border-b text-center">90-150</td>
                            <td className="py-3 px-4 border-b text-center">20-30</td>
                            <td className="py-3 px-4 border-b text-center">80-110</td>
                            <td className="py-3 px-4 border-b text-center">10-20</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium text-orange-700">Escolar
                                (6-12 años)
                            </td>
                            <td className="py-3 px-4 border-b text-center">70-120</td>
                            <td className="py-3 px-4 border-b text-center">15-25</td>
                            <td className="py-3 px-4 border-b text-center">90-120</td>
                            <td className="py-3 px-4 border-b text-center">20-40</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border-b font-medium text-red-700">Adolescente
                                (12+ años)
                            </td>
                            <td className="py-3 px-4 border-b text-center">60-100</td>
                            <td className="py-3 px-4 border-b text-center">12-20</td>
                            <td className="py-3 px-4 border-b text-center">100-120</td>
                            <td className="py-3 px-4 border-b text-center">40-70</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Diferencias anatómicas clave */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaBaby className="w-6 h-6 mr-2 text-orange-500"/>
                    Diferencias Anatómicas Críticas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-700 mb-3 flex items-center">
                            <RiLungsLine className="w-5 h-5 mr-2"/>
                            Vía Aérea Pediátrica
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Cabeza:</strong> Más grande proporcionalmente</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Lengua:</strong> Más grande en relación a la boca</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Tráquea:</strong> Más pequeña, flexible y blanda</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Estrechez:</strong> A nivel del cricoides</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Occipucio:</strong> Prominente (flexión natural)</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                            <RiHeartPulseLine className="w-5 h-5 mr-2"/>
                            Sistema Cardiovascular
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Compensación:</strong> Excelente capacidad inicial</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Hipotensión:</strong> Signo tardío y ominoso</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Superficie corporal:</strong> Mayor relativa</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Hipotermia:</strong> Predisposición aumentada</span>
                            </li>
                            <li className="flex items-start">
                                <div
                                    className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2"></div>
                                <span><strong>Metabolismo:</strong> Más rápido y demandante</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Evaluación ABCDE pediátrica */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2 text-yellow-500"/>
                    Evaluación ABCDE Pediátrica
                </h3>
                <div className="space-y-4">
                    <div className="flex items-start p-4 bg-red-50 rounded-lg">
                        <div
                            className="bg-red-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">A
                        </div>
                        <div>
                            <h4 className="font-semibold text-red-700">Vía aérea (Airway)</h4>
                            <p className="text-gray-600">Permeabilidad, posicionamiento adecuado
                                según edad, sonidos anormales</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-blue-50 rounded-lg">
                        <div
                            className="bg-blue-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">B
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-700">Respiración
                                (Breathing)</h4>
                            <p className="text-gray-600">Frecuencia, calidad, esfuerzo
                                respiratorio, retracciones, oximetría</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-green-50 rounded-lg">
                        <div
                            className="bg-green-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">C
                        </div>
                        <div>
                            <h4 className="font-semibold text-green-700">Circulación
                                (Circulation)</h4>
                            <p className="text-gray-600">Pulsos, relleno capilar, color, presión
                                arterial (signo tardío)</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-purple-50 rounded-lg">
                        <div
                            className="bg-purple-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">D
                        </div>
                        <div>
                            <h4 className="font-semibold text-purple-700">Discapacidad
                                (Disability)</h4>
                            <p className="text-gray-600">Nivel de conciencia (AVPU), respuesta
                                pupilar, función neurológica</p>
                        </div>
                    </div>
                    <div className="flex items-start p-4 bg-yellow-50 rounded-lg">
                        <div
                            className="bg-yellow-500 text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center mr-4">E
                        </div>
                        <div>
                            <h4 className="font-semibold text-yellow-700">Exposición
                                (Exposure)</h4>
                            <p className="text-gray-600">Examen completo manteniendo
                                temperatura, prevenir hipotermia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}