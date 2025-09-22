import {FaBrain, FaExclamationTriangle, FaEye, FaHeartbeat, FaThermometerHalf} from "react-icons/fa";
import {MdCheckCircle, MdOutlineTimer, MdWarning} from "react-icons/md";
import {BsDropletHalf, BsLightbulb, BsShield} from "react-icons/bs";
import {FiActivity, FiAlertTriangle} from "react-icons/fi";
import {GiMedicines, GiTestTubes} from "react-icons/gi";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Importancia crítica */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-8 h-8 text-red-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-red-700">¡Emergencias que Salvan Vidas!</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    Las emergencias endocrinas y hematológicas pueden <strong>progresar rápidamente</strong> hacia
                    el colapso cardiovascular y la muerte si no se reconocen y tratan oportunamente.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2"/>
                        <p className="font-bold text-red-600">Hipoglucemia</p>
                        <p className="text-sm">Coma en 30-60 min</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-orange-500 mx-auto mb-2"/>
                        <p className="font-bold text-orange-600">CAD</p>
                        <p className="text-sm">Shock en 6-12 horas</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <BsDropletHalf className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
                        <p className="font-bold text-blue-600">Anemia severa</p>
                        <p className="text-sm">Falla cardiaca</p>
                    </div>
                </div>
            </div>

            {/* Protocolo de evaluación ABC modificado */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500"/>
                    Protocolo ABCDE - Evaluación Sistemática
                </h2>
                <div className="grid lg:grid-cols-5 gap-4">
                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-blue-700 mb-2 text-center">A - AIRWAY</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaEye className="w-3 h-3 mt-1 mr-2 text-blue-600"/>
                                <span>Vía aérea permeable</span>
                            </li>
                            <li className="flex items-start">
                                <FaEye className="w-3 h-3 mt-1 mr-2 text-blue-600"/>
                                <span>Alteración mental</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-green-50 to-green-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-green-700 mb-2 text-center">B - BREATHING</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FiActivity className="w-3 h-3 mt-1 mr-2 text-green-600"/>
                                <span>Kussmaul (CAD)</span>
                            </li>
                            <li className="flex items-start">
                                <FiActivity className="w-3 h-3 mt-1 mr-2 text-green-600"/>
                                <span>Frecuencia y calidad</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-red-50 to-red-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-red-700 mb-2 text-center">C - CIRCULATION</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaHeartbeat className="w-3 h-3 mt-1 mr-2 text-red-600"/>
                                <span>Pulso y perfusión</span>
                            </li>
                            <li className="flex items-start">
                                <FaHeartbeat className="w-3 h-3 mt-1 mr-2 text-red-600"/>
                                <span>Palidez, hemorragia</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-purple-700 mb-2 text-center">D - DISABILITY</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaBrain className="w-3 h-3 mt-1 mr-2 text-purple-600"/>
                                <span>Glasgow, pupilas</span>
                            </li>
                            <li className="flex items-start">
                                <FaBrain className="w-3 h-3 mt-1 mr-2 text-purple-600"/>
                                <span>Glucosa capilar</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 p-4 rounded-lg border">
                        <h3 className="text-lg font-bold text-yellow-700 mb-2 text-center">E - EXPOSURE</h3>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li className="flex items-start">
                                <FaThermometerHalf className="w-3 h-3 mt-1 mr-2 text-yellow-600"/>
                                <span>Temperatura</span>
                            </li>
                            <li className="flex items-start">
                                <FaThermometerHalf className="w-3 h-3 mt-1 mr-2 text-yellow-600"/>
                                <span>Petequias, equimosis</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Signos de alarma críticos */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FiAlertTriangle className="w-6 h-6 text-yellow-600 mr-2"/>
                    <h3 className="text-xl font-bold text-yellow-800">Signos de Alarma - Actúa INMEDIATAMENTE</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <GiTestTubes className="w-4 h-4 mr-2"/>
                            Emergencias Endocrinas:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Hipoglucemia:</strong> Confusión, sudoración fría, temblor</li>
                            <li><strong>CAD:</strong> Respiración de Kussmaul, aliento afrutado</li>
                            <li><strong>EHH:</strong> Deshidratación severa, alteración mental</li>
                            <li><strong>Crisis tiroidea:</strong> Fiebre alta, taquicardia</li>
                            <li><strong>Insuficiencia suprarrenal:</strong> Hipotensión, dolor abdominal</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-yellow-800 mb-3 flex items-center">
                            <BsDropletHalf className="w-4 h-4 mr-2"/>
                            Emergencias Hematológicas:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>Anemia severa:</strong> Palidez extrema, disnea, taquicardia</li>
                            <li><strong>Crisis falciforme:</strong> Dolor intenso, fiebre, priapismo</li>
                            <li><strong>Hemorragia:</strong> Sangrado espontáneo, petequias</li>
                            <li><strong>Hemofilia:</strong> Sangrado prolongado tras trauma menor</li>
                            <li><strong>PTT:</strong> Púrpura, sangrado mucoso</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Puntos clave para recordar */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-green-600 mr-2"/>
                    <h3 className="text-xl font-bold text-green-800">Perlas Clínicas para Paramédicos</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Mnemotecnicas AAOS:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li><strong>GLUCOSE:</strong> Todo paciente inconsciente</li>
                            <li><strong>DIABETIC:</strong> Siempre preguntar historia</li>
                            <li><strong>INSULIN:</strong> Última dosis y horario</li>
                            <li><strong>FOOD:</strong> Última comida y cantidad</li>
                            <li><strong>BLEEDING:</strong> Buscar signos hemorrágicos</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            Errores Comunes a Evitar:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                            <li>NO administrar glucosa si el paciente no puede tragar</li>
                            <li>NO asumir que toda alteración mental es hipoglucemia</li>
                            <li>NO forzar inyecciones IM en hemofílicos</li>
                            <li>NO subestimar el dolor en crisis falciforme</li>
                            <li>NO olvidar reevaluar después de intervenciones</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Valores normales de referencia */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                    <GiMedicines className="w-6 h-6 mr-2"/>
                    Valores de Referencia Críticos
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Glucosa</h4>
                        <ul className="text-sm space-y-1">
                            <li><span className="text-green-600">Normal:</span> 70-110 mg/dL</li>
                            <li><span className="text-yellow-600">Hipoglucemia:</span> &lt;70 mg/dL</li>
                            <li><span className="text-red-600">Crítica:</span> &lt;50 mg/dL</li>
                            <li><span className="text-red-600">Hiperglucemia:</span> &gt;200 mg/dL</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Hemoglobina</h4>
                        <ul className="text-sm space-y-1">
                            <li><span className="text-green-600">Hombres:</span> 14-18 g/dL</li>
                            <li><span className="text-green-600">Mujeres:</span> 12-16 g/dL</li>
                            <li><span className="text-yellow-600">Anemia leve:</span> 10-12 g/dL</li>
                            <li><span className="text-red-600">Anemia severa:</span> &lt;8 g/dL</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Plaquetas</h4>
                        <ul className="text-sm space-y-1">
                            <li><span className="text-green-600">Normal:</span> 150-450 K/μL</li>
                            <li><span className="text-yellow-600">Trombocitopenia:</span> &lt;100 K/μL</li>
                            <li><span className="text-red-600">Crítica:</span> &lt;50 K/μL</li>
                            <li><span className="text-red-600">Sangrado:</span> &lt;20 K/μL</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}