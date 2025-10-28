import {FaFirstAid, FaThermometerHalf} from "react-icons/fa";
import {BsEye, BsHeart} from "react-icons/bs";
import {FiActivity} from "react-icons/fi";
import {PiStethoscope} from "react-icons/pi";
import {MdHealthAndSafety} from "react-icons/md";

export default function Approach(){
    return(
        <div className="space-y-8">
            {/* Abordaje sistemático */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaFirstAid className="w-6 h-6 mr-2 text-orange-500"/>
                    Abordaje Sistemático del Paciente Médico
                </h2>
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <h3 className="font-bold text-red-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                                Evaluación de la Escena
                            </h3>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Seguridad del entorno</li>
                                <li>• Número de pacientes</li>
                                <li>• Recursos necesarios</li>
                                <li>• Mecanismo de la enfermedad</li>
                            </ul>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                                Evaluación Primaria (ABCDE)
                            </h3>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• <strong>A:</strong> Vía aérea permeable</li>
                                <li>• <strong>B:</strong> Respiración adecuada</li>
                                <li>• <strong>C:</strong> Circulación y control de hemorragias
                                </li>
                                <li>• <strong>D:</strong> Déficit neurológico</li>
                                <li>• <strong>E:</strong> Exposición y entorno</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <h3 className="font-bold text-green-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                                Signos Vitales
                            </h3>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Medición completa y documentación</li>
                                <li>• Monitoreo continuo</li>
                                <li>• Tendencias y cambios</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h3 className="font-bold text-yellow-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">4</span>
                                Historia Clínica (SAMPLE)
                            </h3>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Uso sistemático de SAMPLE</li>
                                <li>• Información del paciente/familia</li>
                                <li>• Síntomas con OPQRST</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                            <h3 className="font-bold text-purple-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">5</span>
                                Evaluación Secundaria
                            </h3>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Examen físico dirigido</li>
                                <li>• Por sistemas afectados</li>
                                <li>• Hallazgos adicionales</li>
                            </ul>
                        </div>
                        <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                            <h3 className="font-bold text-indigo-700 mb-2 flex items-center">
                                                        <span
                                                            className="bg-indigo-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">6</span>
                                Reevaluación Continua
                            </h3>
                            <ul className="text-sm space-y-1 text-gray-700">
                                <li>• Cambios en el estado</li>
                                <li>• Respuesta al tratamiento</li>
                                <li>• Preparación para traslado</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Herramientas diagnósticas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Herramientas
                    Diagnósticas Esenciales</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div
                        className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <h3 className="font-bold text-2xl mb-4 text-blue-700 text-center flex items-center justify-center">
                            <BsEye className="w-6 h-6 mr-2"/>
                            SAMPLE
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">S
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Signos y
                                        síntomas</h4>
                                    <p className="text-sm text-gray-600">¿Qué siente el
                                        paciente? Dolor, malestar, sensaciones</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">A
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Alergias</h4>
                                    <p className="text-sm text-gray-600">Medicamentos,
                                        alimentos, ambientales</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">M
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Medicamentos</h4>
                                    <p className="text-sm text-gray-600">Actuales, dosis,
                                        adherencia al tratamiento</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">P
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Patologías
                                        previas</h4>
                                    <p className="text-sm text-gray-600">Antecedentes médicos
                                        relevantes</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">L
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Última
                                        ingesta</h4>
                                    <p className="text-sm text-gray-600">Comidas, líquidos,
                                        tiempo transcurrido</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">E
                                </div>
                                <div>
                                    <h4 className="font-semibold text-blue-800">Eventos
                                        relacionados</h4>
                                    <p className="text-sm text-gray-600">Qué estaba haciendo
                                        cuando inició</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border">
                        <h3 className="font-bold text-2xl mb-4 text-green-700 text-center flex items-center justify-center">
                            <FiActivity className="w-6 h-6 mr-2"/>
                            OPQRST
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">O
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Origen/Aparición</h4>
                                    <p className="text-sm text-gray-600">¿Cuándo y cómo comenzó?
                                        ¿Súbito o gradual?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">P
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Provocación/Alivio</h4>
                                    <p className="text-sm text-gray-600">¿Qué lo empeora o
                                        mejora?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">Q
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Calidad</h4>
                                    <p className="text-sm text-gray-600">¿Cómo se siente?
                                        Opresivo, punzante, quemante</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">R
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Región/Irradiación</h4>
                                    <p className="text-sm text-gray-600">¿Dónde duele? ¿Se
                                        extiende a otras áreas?</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">S
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Severidad</h4>
                                    <p className="text-sm text-gray-600">Escala del 1-10,
                                        comparación con dolores previos</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div
                                    className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">T
                                </div>
                                <div>
                                    <h4 className="font-semibold text-green-800">Tiempo</h4>
                                    <p className="text-sm text-gray-600">¿Cuánto tiempo lleva
                                        así? ¿Es constante o intermitente?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Valores normales de signos vitales */}
            <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <PiStethoscope className="w-6 h-6 mr-2 text-orange-500"/>
                    Valores Normales de Signos Vitales
                </h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="py-3 px-4 border text-left font-semibold">Parámetro</th>
                            <th className="py-3 px-4 border text-center font-semibold">Adultos</th>
                            <th className="py-3 px-4 border text-center font-semibold">Niños
                                (1-12 años)
                            </th>
                            <th className="py-3 px-4 border text-center font-semibold">Lactantes
                                (&lt;1 año)
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium flex items-center">
                                <BsHeart className="w-4 h-4 mr-2 text-red-500"/>
                                Frecuencia cardíaca
                            </td>
                            <td className="py-3 px-4 border text-center">60-100/min</td>
                            <td className="py-3 px-4 border text-center">80-120/min</td>
                            <td className="py-3 px-4 border text-center">100-160/min</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium flex items-center">
                                <FiActivity className="w-4 h-4 mr-2 text-blue-500"/>
                                Frecuencia respiratoria
                            </td>
                            <td className="py-3 px-4 border text-center">12-20/min</td>
                            <td className="py-3 px-4 border text-center">15-30/min</td>
                            <td className="py-3 px-4 border text-center">25-50/min</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium flex items-center">
                                <MdHealthAndSafety className="w-4 h-4 mr-2 text-green-500"/>
                                Presión arterial sistólica
                            </td>
                            <td className="py-3 px-4 border text-center">90-140 mmHg</td>
                            <td className="py-3 px-4 border text-center">80-110 mmHg</td>
                            <td className="py-3 px-4 border text-center">70-100 mmHg</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium flex items-center">
                                <FaThermometerHalf className="w-4 h-4 mr-2 text-orange-500"/>
                                Temperatura
                            </td>
                            <td className="py-3 px-4 border text-center">36-37.5°C</td>
                            <td className="py-3 px-4 border text-center">36-37.5°C</td>
                            <td className="py-3 px-4 border text-center">36-37.5°C</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium flex items-center">
                                <MdHealthAndSafety className="w-4 h-4 mr-2 text-purple-500"/>
                                Saturación O₂
                            </td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                            <td className="py-3 px-4 border text-center">≥95%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}