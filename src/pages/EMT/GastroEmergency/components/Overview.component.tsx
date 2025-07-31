import { FaExclamationTriangle, FaStethoscope, FaAmbulance } from "react-icons/fa";
import {  MdOutlineTimer, MdWarning, MdPerson } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { BsShield, BsLightbulb } from "react-icons/bs";
import { GiStomach, GiKidneys } from "react-icons/gi";
import { RiAlarmWarningLine } from "react-icons/ri";

export default function Overview() {
    return (
        <div className="space-y-8">
            {/* Introducción */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <RiAlarmWarningLine className="w-8 h-8 text-orange-500 mr-3" />
                    <h2 className="text-2xl font-bold text-orange-700">Emergencias Gastrointestinales y Urológicas</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg mb-4">
                    El dolor abdominal es una <strong>causa común</strong> de llamadas a emergencias, pero identificar su causa exacta es difícil incluso para médicos.
                    Como <span className="text-orange-600 font-bold">Proveedor de Atención Prehospitalaria (PAP)</span>, tu papel es reconocer condiciones potencialmente mortales y actuar con rapidez, más que diagnosticar con precisión.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-orange-600 mb-2">Objetivo Principal del PAP:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Reconocer condiciones potencialmente mortales</li>
                        <li>Actuar con rapidez y eficiencia</li>
                        <li>Estabilizar y transportar adecuadamente</li>
                        <li>Documentar hallazgos importantes</li>
                    </ul>
                </div>
            </div>

            {/* Sistemas involucrados */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <BsShield className="w-6 h-6 mr-2 text-orange-500" />
                    Sistemas Anatómicos Involucrados
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-b from-orange-50 to-orange-100 p-6 rounded-lg border">
                        <div className="flex items-center mb-3">
                            <GiStomach className="w-8 h-8 text-orange-600 mr-2" />
                            <h3 className="text-xl font-bold text-orange-700">Gastrointestinal</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Boca y esófago</li>
                            <li>• Estómago</li>
                            <li>• Intestinos (delgado y grueso)</li>
                            <li>• Hígado y vesícula biliar</li>
                            <li>• Páncreas</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-lg border">
                        <div className="flex items-center mb-3">
                            <GiKidneys className="w-8 h-8 text-blue-600 mr-2" />
                            <h3 className="text-xl font-bold text-blue-700">Urinario</h3>
                        </div>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Riñones</li>
                            <li>• Uréteres</li>
                            <li>• Vejiga</li>
                            <li>• Uretra</li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-lg border">
                        <div className="flex items-center mb-3">
                            <MdPerson className="w-8 h-8 text-purple-600 mr-2" />
                            <h3 className="text-xl font-bold text-purple-700">Reproductor</h3>
                        </div>
                        <p className="text-sm text-gray-700">
                            Centrado en emergencias uroginecológicas y complicaciones reproductivas que requieren atención inmediata.
                        </p>
                    </div>
                </div>
            </div>

            {/* Abdomen Agudo - Concepto Clave */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <FaExclamationTriangle className="w-6 h-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold text-red-700">Abdomen Agudo - Concepto Crítico</h3>
                </div>
                <p className="text-gray-800 mb-4">
                    <strong>Definición:</strong> Dolor abdominal repentino asociado a irritación peritoneal que requiere tratamiento urgente.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Peritonitis</h4>
                        <p className="text-sm text-gray-600">Inflamación del peritoneo</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Obstrucción Intestinal</h4>
                        <p className="text-sm text-gray-600">Bloqueo del tránsito intestinal</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Apendicitis</h4>
                        <p className="text-sm text-gray-600">Inflamación del apéndice</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">AAA Roto</h4>
                        <p className="text-sm text-gray-600">Aneurisma aórtico abdominal</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Sangrado GI</h4>
                        <p className="text-sm text-gray-600">Hemorragia gastrointestinal</p>
                    </div>
                </div>
            </div>

            {/* Tipos de dolor abdominal */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaStethoscope className="w-6 h-6 mr-2 text-orange-500" />
                    Tipos de Dolor Abdominal
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-2">Visceral</h3>
                        <p className="text-sm text-gray-700">
                            Dolor sordo, mal localizado, originado en órganos internos. Puede irradiarse.
                        </p>
                    </div>
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-2">Somático</h3>
                        <p className="text-sm text-gray-700">
                            Dolor agudo, bien localizado, originado en pared abdominal o peritoneo parietal.
                        </p>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-2">Referido</h3>
                        <p className="text-sm text-gray-700">
                            Dolor percibido en área distante del origen real. Ejemplo: vesícula → hombro derecho.
                        </p>
                    </div>
                </div>
            </div>

            {/* Evaluación del dolor */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsLightbulb className="w-6 h-6 text-blue-500 mr-2" />
                    <h3 className="text-xl font-bold text-blue-700">Evaluación Integral del Dolor</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Características del Dolor:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Localización:</strong> Dónde duele exactamente</li>
                            <li>• <strong>Calidad:</strong> Tipo de dolor (punzante, sordo, cólico)</li>
                            <li>• <strong>Irradiación:</strong> Hacia dónde se extiende</li>
                            <li>• <strong>Duración:</strong> Cuánto tiempo ha durado</li>
                            <li>• <strong>Factores modificadores:</strong> Qué lo mejora o empeora</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Síntomas Asociados:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Náusea y vómito:</strong> Frecuencia y características</li>
                            <li>• <strong>Heces anormales:</strong> Diarrea, sangre, color</li>
                            <li>• <strong>Fiebre:</strong> Indica posible infección</li>
                            <li>• <strong>Cambios urinarios:</strong> Disuria, hematuria</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Banderas rojas */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <MdWarning className="w-8 h-8 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-red-700">Banderas Rojas - Transporte Inmediato</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdOutlineTimer className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-600">Signos de Shock</p>
                        <p className="text-sm">Hipotensión, taquicardia, piel fría</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaDroplet className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-600">Abdomen en Tabla</p>
                        <p className="text-sm">Rigidez muscular involuntaria</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <MdWarning className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-600">Hemorragia</p>
                        <p className="text-sm">Hematemesis, melena, hematuria</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm text-center">
                        <FaAmbulance className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <p className="font-bold text-red-600">Masa Pulsátil</p>
                        <p className="text-sm">Sospecha de AAA</p>
                    </div>
                </div>
            </div>
        </div>
    );
}