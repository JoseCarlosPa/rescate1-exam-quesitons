import { FaUserInjured, FaAmbulance, FaStethoscope, FaExclamationTriangle } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { GiScalpel, GiMedicalPack } from "react-icons/gi";

export default function Practice(){
    return(
        <div className="space-y-6">
            <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                    <FaUserInjured className="w-16 h-16 text-orange-500"/>
                </div>
                <h2 className="text-3xl font-bold mb-2 text-gray-800">Casos Clínicos</h2>
                <p className="text-gray-600">Lesiones de Tejido Blando</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-50 to-white rounded-xl shadow-md border-l-4 border-red-500 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                    <MdBloodtype className="w-8 h-8 text-red-600 flex-shrink-0 mt-1"/>
                    <h3 className="text-2xl font-bold text-red-700">Caso 1: Laceración Profunda con Hemorragia Arterial</h3>
                </div>
                <div className="bg-white/70 p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700 flex items-start gap-2">
                        <FaExclamationTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                        <span>Un trabajador de construcción de 35 años sufre una laceración en el
                        antebrazo derecho con una sierra circular. Presenta sangrado rojo brillante y
                        pulsátil.</span>
                    </p>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <FaStethoscope className="w-6 h-6 text-blue-600"/>
                        <h4 className="font-bold text-lg text-gray-800">Evaluación Clave (AAOS):</h4>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-red-600 min-w-fit">X (Hemorragia Exanguinante):</span>
                                <span>Hemorragia arterial activa visible en antebrazo.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 min-w-fit">A (Vía Aérea):</span>
                                <span>Permeable, hablando con frases completas.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-green-600 min-w-fit">B (Ventilación):</span>
                                <span>FR 20/min, adecuada profundidad. SpO₂ 98% (aire ambiente inicial).</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-orange-600 min-w-fit">C (Circulación):</span>
                                <span>FC 110/min, pulso radial derecho débil, piel pálida y fría distal a la lesión. Relleno capilar mayor a 2 seg en mano derecha.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 min-w-fit">D (Déficit Neurológico):</span>
                                <span>Alerta (AVDI), orientado, ansioso.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-pink-600 min-w-fit">E (Exposición/Ambiente):</span>
                                <span>Laceración de aproximadamente 10 cm, profunda, en cara anterior del antebrazo derecho.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <FaAmbulance className="w-6 h-6 text-green-600"/>
                        <h4 className="font-bold text-lg text-gray-800">Manejo Prehospitalario (AAOS):</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Asegurar BSI y seguridad de la escena.</li>
                        <li>Aplicar presión directa firme sobre la herida con apósitos estériles.</li>
                        <li>Si la hemorragia persiste, aplicar un vendaje compresivo sobre los apósitos.</li>
                        <li className="font-semibold text-red-700">Si la hemorragia arterial no se controla, aplicar un torniquete comercial proximal a la herida en el brazo. Anotar la hora de aplicación.</li>
                        <li>Elevar la extremidad por encima del nivel del corazón (si no hay sospecha de fractura asociada que lo contraindique).</li>
                        <li>Administrar oxígeno a alto flujo (ej. mascarilla no recirculante a 15 L/min).</li>
                        <li>Tratar para shock: mantener al paciente abrigado, colocar en posición supina (si es tolerada y no hay otras lesiones).</li>
                        <li>Traslado rápido al centro útil más cercano. Reevaluar estado hemodinámico y torniquete durante el traslado.</li>
                    </ol>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-md border-l-4 border-blue-500 mb-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                    <GiScalpel className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1"/>
                    <h3 className="text-2xl font-bold text-blue-700">Caso 2: Objeto Empalado en Muslo</h3>
                </div>
                <div className="bg-white/70 p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700 flex items-start gap-2">
                        <FaExclamationTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                        <span>Un joven de 18 años cae de su bicicleta sobre una valla rota, resultando con
                        una varilla metálica empalada en la cara anterior de su muslo izquierdo.</span>
                    </p>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <FaStethoscope className="w-6 h-6 text-blue-600"/>
                        <h4 className="font-bold text-lg text-gray-800">Evaluación Clave (AAOS):</h4>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 min-w-fit">A, B:</span>
                                <span>Vía aérea permeable, ventilación espontánea y adecuada.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-orange-600 min-w-fit">C:</span>
                                <span>FC 90/min, TA 120/80 mmHg. Pulsos pedio y tibial posterior izquierdos presentes y simétricos con el lado no lesionado. No hay sangrado externo masivo visible alrededor del objeto.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 min-w-fit">D:</span>
                                <span>Alerta y orientado, refiere dolor intenso en el muslo.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-pink-600 min-w-fit">E:</span>
                                <span>Varilla metálica de aproximadamente 1 cm de diámetro empalada en el muslo izquierdo. La zona circundante está tensa pero sin hematoma expansivo inmediato.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <FaAmbulance className="w-6 h-6 text-green-600"/>
                        <h4 className="font-bold text-lg text-gray-800">Manejo Prehospitalario (AAOS):</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Asegurar BSI y seguridad de la escena.</li>
                        <li className="font-semibold text-red-700">NO intentar retirar el objeto empalado.</li>
                        <li>Estabilizar el objeto en su lugar utilizando apósitos voluminosos y vendajes para minimizar el movimiento. Se puede usar un vaso de cartón cortado o similar para proteger el objeto.</li>
                        <li>Controlar cualquier sangrado visible aplicando presión directa alrededor del sitio de entrada, sin ejercer presión sobre el objeto mismo.</li>
                        <li>Evaluar y documentar el estado neurovascular distal (pulsos, color, temperatura, sensibilidad, motricidad) de la extremidad lesionada antes y después de la inmovilización.</li>
                        <li>Administrar oxígeno según necesidad.</li>
                        <li>Inmovilizar la extremidad afectada en una férula si es necesario para prevenir el movimiento del objeto durante el traslado.</li>
                        <li>Traslado cuidadoso y rápido al hospital apropiado. Notificar al hospital receptor sobre la naturaleza de la lesión.</li>
                    </ol>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                    <GiMedicalPack className="w-8 h-8 text-green-600 flex-shrink-0 mt-1"/>
                    <h3 className="text-2xl font-bold text-green-700">Caso 3: Evisceración Abdominal</h3>
                </div>
                <div className="bg-white/70 p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700 flex items-start gap-2">
                        <FaExclamationTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1"/>
                        <span>Un hombre de 40 años es encontrado tras una agresión con arma blanca en el
                        abdomen. Presenta una herida abierta con exposición de asas intestinales.</span>
                    </p>
                </div>

                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <FaStethoscope className="w-6 h-6 text-blue-600"/>
                        <h4 className="font-bold text-lg text-gray-800">Evaluación Clave (AAOS):</h4>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg space-y-2">
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-blue-600 min-w-fit">A:</span>
                                <span>Vía aérea permeable.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-green-600 min-w-fit">B:</span>
                                <span>FR 22/min, superficial.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-orange-600 min-w-fit">C:</span>
                                <span>FC 115/min, TA 100/60 mmHg. Piel pálida y sudorosa.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-purple-600 min-w-fit">D:</span>
                                <span>Responde a estímulos verbales, desorientado en tiempo.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold text-pink-600 min-w-fit">E:</span>
                                <span>Herida abdominal de ~8 cm en cuadrante inferior izquierdo con asas intestinales visibles y expuestas. No hay sangrado masivo activo de la herida en sí, pero sí de los tejidos circundantes.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                        <FaAmbulance className="w-6 h-6 text-green-600"/>
                        <h4 className="font-bold text-lg text-gray-800">Manejo Prehospitalario (AAOS):</h4>
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>Asegurar BSI y seguridad de la escena.</li>
                        <li className="font-semibold text-red-700">NO intentar reintroducir los órganos expuestos en la cavidad abdominal.</li>
                        <li className="font-semibold text-red-700">NO aplicar presión directa sobre los órganos eviscerados.</li>
                        <li>Cubrir los órganos expuestos con un apósito estéril grande humedecido con solución salina estéril.</li>
                        <li>Luego, cubrir el apósito húmedo con un vendaje oclusivo seco y grande (ej. plástico limpio o un campo estéril seco) para mantener la humedad y el calor, y para prevenir mayor contaminación. Asegurar los bordes del vendaje oclusivo.</li>
                        <li>Administrar oxígeno a alto flujo.</li>
                        <li>Tratar para shock: mantener al paciente caliente, colocar en posición supina con las rodillas flexionadas si ayuda a reducir la tensión en el abdomen (si no hay otras lesiones que lo contraindiquen).</li>
                        <li>Establecer acceso IV según protocolo y considerar la administración de fluidos si hay signos de hipoperfusión.</li>
                        <li>Traslado rápido y urgente al centro de trauma apropiado.</li>
                    </ol>
                </div>
            </div>

        </div>
    );
}