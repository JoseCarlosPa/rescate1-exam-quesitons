import {BsHeartPulse, BsShield} from "react-icons/bs";
import {MdCheckCircle, MdLocalHospital, MdWarning} from "react-icons/md";
import {FaExclamationTriangle} from "react-icons/fa";

export default function Assessment(){
    return(
        <div className="space-y-8">
            {/* Protocolo de evaluación */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <BsShield className="w-8 h-8 text-blue-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-blue-700">Protocolo de Evaluación Sistemática</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold text-red-600 mb-3 text-center">1. PRIMARIA</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">A</div>
                                <span>Vía aérea + C-spine</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">B</div>
                                <span>Respiración, sat O₂</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">C</div>
                                <span>Circulación, pulsos</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">D</div>
                                <span>Neurológico, Glasgow</span>
                            </li>
                            <li className="flex items-center">
                                <div className="w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center mr-2">E</div>
                                <span>Exposición, temperatura</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold text-orange-600 mb-3 text-center">2. SECUNDARIA</h3>
                        <ul className="space-y-2 text-sm">
                            <li><strong>SAMPLE:</strong> Síntomas, alergias, medicamentos</li>
                            <li><strong>OPQRST:</strong> Dolor abdominal detallado</li>
                            <li><strong>Signos vitales:</strong> Cada 5-15 minutos</li>
                            <li><strong>Examen físico:</strong> Abdomen, genitales</li>
                            <li><strong>Glucometría:</strong> Si alteración mental</li>
                        </ul>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold text-green-600 mb-3 text-center">3. MONITOREO</h3>
                        <ul className="space-y-2 text-sm">
                            <li><strong>Continuo:</strong> Signos vitales, dolor</li>
                            <li><strong>Reevaluación:</strong> Cada 5 minutos</li>
                            <li><strong>Documentación:</strong> Evolución síntomas</li>
                            <li><strong>Comunicación:</strong> Hospital receptor</li>
                            <li><strong>Transporte:</strong> Posición confort</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Examen físico específico */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Examen Físico del Abdomen</h2>
                <div className="grid lg:grid-cols-4 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                        <h3 className="font-bold text-blue-700 mb-3 text-center">1. INSPECCIÓN</h3>
                        <ul className="text-sm space-y-1">
                            <li>• Distensión abdominal</li>
                            <li>• Cicatrices quirúrgicas</li>
                            <li>• Coloración de piel</li>
                            <li>• Movimientos respiratorios</li>
                            <li>• Equimosis (Cullen, Grey-Turner)</li>
                        </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                        <h3 className="font-bold text-green-700 mb-3 text-center">2. AUSCULTACIÓN</h3>
                        <ul className="text-sm space-y-1">
                            <li>• Ruidos intestinales</li>
                            <li>• Ausentes = íleo</li>
                            <li>• Aumentados = obstrucción</li>
                            <li>• Soplos vasculares</li>
                            <li>• Duración: 2 minutos mínimo</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                        <h3 className="font-bold text-yellow-700 mb-3 text-center">3. PERCUSIÓN</h3>
                        <ul className="text-sm space-y-1">
                            <li>• Timpanismo = gas</li>
                            <li>• Matidez = masa/líquido</li>
                            <li>• Límites hepáticos</li>
                            <li>• Puño-percusión renal</li>
                            <li>• Límites de órganos</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                        <h3 className="font-bold text-red-700 mb-3 text-center">4. PALPACIÓN</h3>
                        <ul className="text-sm space-y-1">
                            <li>• Superficial primero</li>
                            <li>• Dolor, defensa</li>
                            <li>• Rigidez muscular</li>
                            <li>• Rebote positivo</li>
                            <li>• Masas palpables</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Maniobras especiales */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-indigo-800 mb-4">Maniobras Especiales para Paramédicos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-indigo-700 mb-3">Dolor Abdominal</h4>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <strong className="text-red-600">Signo de Blumberg:</strong>
                                <p className="text-sm text-gray-700">Dolor al retirar la mano (rebote). Indica irritación peritoneal.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <strong className="text-orange-600">Punto de McBurney:</strong>
                                <p className="text-sm text-gray-700">1/3 entre ombligo y espina iliaca anterior superior. Apendicitis.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <strong className="text-blue-600">Signo de Murphy:</strong>
                                <p className="text-sm text-gray-700">Dolor en inspiración profunda + palpación CSD. Colecistitis.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-indigo-700 mb-3">Evaluación Urológica</h4>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded shadow-sm">
                                <strong className="text-green-600">Puño-percusión:</strong>
                                <p className="text-sm text-gray-700">Dolor costovertebral. Pielonefritis o cólico renal.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <strong className="text-purple-600">Palpación vejiga:</strong>
                                <p className="text-sm text-gray-700">Distensión suprapúbica. Retención urinaria.</p>
                            </div>
                            <div className="bg-white p-3 rounded shadow-sm">
                                <strong className="text-yellow-600">Examen genital:</strong>
                                <p className="text-sm text-gray-700">Testículos, hernias. Torsión testicular = emergencia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Algoritmo de triage */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Algoritmo de Triage Prehospitalario</h2>
                <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-red-100 border-2 border-red-400 p-5 rounded-lg">
                        <h3 className="font-bold text-red-700 mb-3 text-center flex items-center justify-center">
                            <MdLocalHospital className="w-5 h-5 mr-2"/>
                            CRÍTICO - Código Rojo
                        </h3>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                Shock (TAS &lt; 90, FC &gt; 120)
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                Hematemesis masiva
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                Abdomen rígido + signos peritoneales
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                Alteración estado mental
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                                Signos de Cullen/Grey-Turner
                            </li>
                        </ul>
                        <div className="mt-3 p-2 bg-red-200 rounded text-xs font-bold">
                            ⚡ Traslado inmediato, ALS intercept
                        </div>
                    </div>
                    <div className="bg-yellow-100 border-2 border-yellow-400 p-5 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-3 text-center flex items-center justify-center">
                            <MdWarning className="w-5 h-5 mr-2"/>
                            URGENTE - Código Amarillo
                        </h3>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                Dolor severo (8-10/10)
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                Vómito persistente
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                Fiebre alta (&gt; 38.5°C)
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                Deshidratación moderada
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                                Hematuria macroscópica
                            </li>
                        </ul>
                        <div className="mt-3 p-2 bg-yellow-200 rounded text-xs font-bold">
                            🚨 Traslado prioritario (&lt; 30 min)
                        </div>
                    </div>
                    <div className="bg-green-100 border-2 border-green-400 p-5 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-3 text-center flex items-center justify-center">
                            <MdCheckCircle className="w-5 h-5 mr-2"/>
                            ESTABLE - Código Verde
                        </h3>
                        <ul className="text-sm space-y-2">
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Dolor leve-moderado (&lt; 7/10)
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Signos vitales estables
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Síntomas crónicos reagudizados
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                ITU no complicada
                            </li>
                            <li className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Tolerancia oral conservada
                            </li>
                        </ul>
                        <div className="mt-3 p-2 bg-green-200 rounded text-xs font-bold">
                            ✅ Traslado rutinario
                        </div>
                    </div>
                </div>
            </div>

            {/* Tratamiento prehospitalario */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <BsHeartPulse className="w-6 h-6 text-blue-600 mr-2"/>
                    <h3 className="text-xl font-bold text-blue-800">Manejo Prehospitalario por Prioridad</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                            <MdCheckCircle className="w-4 h-4 mr-2"/>
                            Medidas Generales:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>Posición de confort (decúbito con rodillas flexionadas)</li>
                            <li>NPO absoluto - no alimentos ni líquidos</li>
                            <li>Monitorización continua signos vitales</li>
                            <li>Acceso vascular si signos de shock</li>
                            <li>Oxígeno si SpO₂ &lt; 94% o distrés</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                            <FaExclamationTriangle className="w-4 h-4 mr-2"/>
                            Contraindicaciones Absolutas:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                            <li>NO aplicar calor local en abdomen</li>
                            <li>NO administrar analgésicos</li>
                            <li>NO dar antiemético sin orden médica</li>
                            <li>NO palpación profunda repetida</li>
                            <li>NO enemas o laxantes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
