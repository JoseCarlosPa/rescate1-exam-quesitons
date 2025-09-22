import {FaLungs, FaUser} from "react-icons/fa";
import {MdLightbulb, MdQuiz, MdSchool} from "react-icons/md";
import {HiAcademicCap, HiDocumentText} from "react-icons/hi";

export default function Practice(){
    return(
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos
                prácticos interactivos</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-orange-600 flex items-center">
                        <FaUser className="w-5 h-5 mr-2"/>
                        Caso 1: Construcción de términos
                    </h3>
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <p className="italic text-gray-600 mb-3">
                            <strong>Escenario:</strong> Paciente masculino de 65 años presenta
                            dolor en el pecho y frecuencia cardíaca de 45 lpm.
                        </p>
                        <div className="space-y-3">
                            <div className="p-3 bg-orange-50 rounded">
                                <p className="font-medium text-orange-800 mb-2">¿Cómo describes
                                    la frecuencia cardíaca?</p>
                                <div className="flex items-center gap-2 text-sm">
                                                            <span
                                                                className="bg-blue-100 px-2 py-1 rounded text-blue-700">bradi-</span>
                                    <span className="text-gray-500">+</span>
                                    <span
                                        className="bg-red-100 px-2 py-1 rounded text-red-700">-cardia</span>
                                    <span className="text-gray-500">=</span>
                                    <span
                                        className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">bradicardia</span>
                                </div>
                            </div>
                            <div className="p-3 bg-blue-50 rounded">
                                <p className="font-medium text-blue-800 mb-2">¿Cómo describes el
                                    dolor en el pecho?</p>
                                <div className="flex items-center gap-2 text-sm">
                                                            <span
                                                                className="bg-purple-100 px-2 py-1 rounded text-purple-700">torac-</span>
                                    <span className="text-gray-500">+</span>
                                    <span
                                        className="bg-red-100 px-2 py-1 rounded text-red-700">-algia</span>
                                    <span className="text-gray-500">=</span>
                                    <span
                                        className="bg-green-100 px-2 py-1 rounded text-green-700 font-semibold">toracalgia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-blue-600 flex items-center">
                        <FaLungs className="w-5 h-5 mr-2"/>
                        Caso 2: Análisis de abreviaturas
                    </h3>
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <p className="italic text-gray-600 mb-3">
                            <strong>Reporte:</strong> "Paciente con PCR, se inicia RCP y SVB.
                            TA: 0/0, FC: 0, FR: 0, SpO₂: indetectable."
                        </p>
                        <div className="space-y-2">
                            <div
                                className="flex justify-between items-center p-2 bg-red-50 rounded">
                                <span className="font-mono font-bold text-red-600">PCR</span>
                                <span
                                    className="text-sm text-gray-700">Paro Cardiorrespiratorio</span>
                            </div>
                            <div
                                className="flex justify-between items-center p-2 bg-orange-50 rounded">
                                <span className="font-mono font-bold text-orange-600">RCP</span>
                                <span className="text-sm text-gray-700">Reanimación Cardiopulmonar</span>
                            </div>
                            <div
                                className="flex justify-between items-center p-2 bg-blue-50 rounded">
                                <span className="font-mono font-bold text-blue-600">SVB</span>
                                <span
                                    className="text-sm text-gray-700">Soporte Vital Básico</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-600 flex items-center">
                    <MdLightbulb className="w-6 h-6 mr-2"/>
                    Ejercicio 3: Descompón el término médico
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Gastroenteritis</h4>
                        <div className="space-y-2">
                            <div
                                className="flex items-center justify-between p-2 bg-orange-100 rounded">
                                <span className="font-mono text-orange-700">gastro-</span>
                                <span className="text-sm text-gray-600">estómago</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-2 bg-blue-100 rounded">
                                <span className="font-mono text-blue-700">enter-</span>
                                <span className="text-sm text-gray-600">intestino</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-2 bg-red-100 rounded">
                                <span className="font-mono text-red-700">-itis</span>
                                <span className="text-sm text-gray-600">inflamación</span>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 rounded text-center">
                                                        <span className="font-semibold text-green-800">
                                                            = Inflamación del estómago e intestino
                                                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-3">Polineuropatía</h4>
                        <div className="space-y-2">
                            <div
                                className="flex items-center justify-between p-2 bg-purple-100 rounded">
                                <span className="font-mono text-purple-700">poli-</span>
                                <span className="text-sm text-gray-600">muchos/múltiple</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-2 bg-blue-100 rounded">
                                <span className="font-mono text-blue-700">neuro-</span>
                                <span className="text-sm text-gray-600">nervio</span>
                            </div>
                            <div
                                className="flex items-center justify-between p-2 bg-red-100 rounded">
                                <span className="font-mono text-red-700">-patía</span>
                                <span className="text-sm text-gray-600">enfermedad</span>
                            </div>
                            <div className="mt-3 p-3 bg-green-100 rounded text-center">
                                                        <span className="font-semibold text-green-800">
                                                            = Enfermedad de múltiples nervios
                                                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                    <MdQuiz className="w-6 h-6 mr-2"/>
                    Ejercicio 4: Documenta como paramédico
                </h3>
                <div className="bg-white p-4 rounded-lg">
                    <p className="text-gray-700 mb-4">
                        <strong>Situación:</strong> Paciente femenina de 45 años con dificultad
                        respiratoria, frecuencia respiratoria de 32/min,
                        saturación de oxígeno del 88%, presión arterial de 160/95 mmHg y
                        frecuencia cardíaca de 110 lpm.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Términos médicos
                                correctos:</h4>
                            <ul className="space-y-1 text-sm text-gray-700">
                                <li><strong>Taquipnea:</strong> FR 32/min (normal: 12-20)</li>
                                <li><strong>Hipoxemia:</strong> SpO₂ 88% (normal: &gt;95%)</li>
                                <li><strong>Hipertensión:</strong> TA 160/95 mmHg</li>
                                <li><strong>Taquicardia:</strong> FC 110 lpm (normal: 60-100)
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Reporte usando
                                abreviaturas:</h4>
                            <div className="p-3 bg-gray-50 rounded font-mono text-sm">
                                <p>"Mujer 45a con disnea"</p>
                                <p>"TA: 160/95 mmHg"</p>
                                <p>"FC: 110 lpm (taquicardia)"</p>
                                <p>"FR: 32/min (taquipnea)"</p>
                                <p>"SpO₂: 88% (hipoxemia)"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                    <HiAcademicCap className="w-6 h-6 mr-2"/>
                    Consejos para mejorar tu terminología médica
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                        <MdSchool className="w-12 h-12 text-blue-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-gray-800 mb-2">Practica
                            diariamente</h4>
                        <p className="text-sm text-gray-600">Dedica 15 minutos diarios a repasar
                            términos nuevos</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                        <HiDocumentText className="w-12 h-12 text-green-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-gray-800 mb-2">Documenta casos</h4>
                        <p className="text-sm text-gray-600">Usa terminología correcta en tus
                            reportes de práctica</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                        <MdLightbulb className="w-12 h-12 text-orange-500 mx-auto mb-2"/>
                        <h4 className="font-semibold text-gray-800 mb-2">Crea asociaciones</h4>
                        <p className="text-sm text-gray-600">Relaciona términos con casos que
                            hayas vivido</p>
                    </div>
                </div>
            </div>
        </div>
    );
}