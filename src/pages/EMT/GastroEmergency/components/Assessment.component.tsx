import {  FaStethoscope, FaAmbulance, FaEye } from "react-icons/fa";
import { RiFirstAidKitLine, RiAlarmWarningLine } from "react-icons/ri";
import { GiStomach, GiKidneys } from "react-icons/gi";

export default function Assessment() {
    return (
        <div className="space-y-8">
            {/* Evaluación SAMPLE enfocada */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaStethoscope className="w-8 h-8 text-blue-500 mr-3" />
                    <h2 className="text-2xl font-bold text-blue-700">Evaluación SAMPLE Enfocada en Abdomen</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold text-blue-600 mb-3">Historia SAMPLE Específica</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <h4 className="font-semibold text-blue-700">S - Síntomas:</h4>
                                <ul className="ml-4 text-gray-700">
                                    <li>• <strong>Emesis:</strong> Color, cantidad, presencia de sangre</li>
                                    <li>• <strong>Heces:</strong> Diarrea, sangre, color (melena)</li>
                                    <li>• <strong>Dolor:</strong> Inicio, irradiación, severidad</li>
                                    <li>• <strong>Hábitos urinarios:</strong> Disuria, hematuria, frecuencia</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-700">A - Alergias:</h4>
                                <p className="ml-4 text-gray-700">Medicamentos, alimentos, especialmente si hay sospecha de reacción alérgica</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-700">M - Medicamentos:</h4>
                                <p className="ml-4 text-gray-700">Anticoagulantes, AINEs, antibióticos recientes</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm">
                        <h3 className="text-lg font-bold text-blue-600 mb-3">Historia Específica</h3>
                        <div className="space-y-3 text-sm">
                            <div>
                                <h4 className="font-semibold text-blue-700">P - Pasado médico:</h4>
                                <ul className="ml-4 text-gray-700">
                                    <li>• Cirugías abdominales previas</li>
                                    <li>• Enfermedad inflamatoria intestinal</li>
                                    <li>• Diabetes, hipertensión</li>
                                    <li>• Antecedentes de cálculos</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-700">L - Última comida:</h4>
                                <p className="ml-4 text-gray-700">Hora, tipo de alimento, relación con síntomas</p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-blue-700">E - Eventos:</h4>
                                <p className="ml-4 text-gray-700">Qué estaba haciendo cuando comenzó, factores desencadenantes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Evaluación abdominal sistemática */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <FaEye className="w-6 h-6 mr-2 text-orange-500" />
                    Evaluación Abdominal Sistemática
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-3">1. Inspección</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Forma:</strong> Distensión, asimetría</li>
                            <li>• <strong>Piel:</strong> Color, lesiones, cicatrices</li>
                            <li>• <strong>Movimiento:</strong> Respiratorio, peristáltico</li>
                            <li>• <strong>Masas:</strong> Hernias, tumores visibles</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-3">2. Auscultación</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Ruidos intestinales:</strong> Presentes, ausentes, aumentados</li>
                            <li>• <strong>Soplos:</strong> Aórticos, renales</li>
                            <li>• <strong>Ubicación:</strong> 4 cuadrantes mínimo</li>
                            <li>• <strong>Duración:</strong> Al menos 2 minutos si silencio</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-3">3. Palpación Suave</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Comenzar:</strong> Área menos dolorosa</li>
                            <li>• <strong>Evaluar:</strong> Dolor, rigidez, masas</li>
                            <li>• <strong>Rebote:</strong> Signos de irritación peritoneal</li>
                            <li>• <strong>Defensa:</strong> Voluntaria vs involuntaria</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Atención médica de emergencia */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <RiFirstAidKitLine className="w-6 h-6 text-red-500 mr-2" />
                    <h3 className="text-xl font-bold text-red-700">Atención Médica de Emergencia</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2">Intervenciones Generales:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Oxígeno:</strong> Si hay signos de hipoxia o shock</li>
                            <li>• <strong>Nada por vía oral:</strong> NPO estricto</li>
                            <li>• <strong>Posición:</strong> De confort (no forzar supino)</li>
                            <li>• <strong>Movimientos suaves:</strong> Evitar sacudidas</li>
                            <li>• <strong>Monitoreo continuo:</strong> Signos vitales frecuentes</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-800 mb-2">Consideraciones Especiales:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>AAA sospechoso:</strong> Evitar palpación excesiva</li>
                            <li>• <strong>Shock:</strong> Transporte inmediato</li>
                            <li>• <strong>Vómito:</strong> Proteger vía aérea</li>
                            <li>• <strong>Dolor severo:</strong> No administrar analgésicos</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Causas comunes por cuadrante */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiStomach className="w-6 h-6 mr-2 text-orange-500" />
                    Causas Comunes de Dolor por Cuadrante
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <h3 className="font-bold text-orange-700 mb-3">Cuadrante Superior Derecho</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Colecistitis:</strong> Dolor post-prandial, irradiado al hombro</li>
                            <li>• <strong>Hepatitis:</strong> Dolor sordo, ictericia</li>
                            <li>• <strong>Úlcera duodenal:</strong> Dolor con comidas</li>
                            <li>• <strong>Cólico biliar:</strong> Dolor intenso, episódico</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-3">Cuadrante Superior Izquierdo</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Pancreatitis:</strong> Dolor epigástrico irradiado a espalda</li>
                            <li>• <strong>Úlcera gástrica:</strong> Dolor con comidas</li>
                            <li>• <strong>Ruptura esplénica:</strong> Dolor referido a hombro izquierdo</li>
                            <li>• <strong>Infarto esplénico:</strong> Dolor agudo en flanco</li>
                        </ul>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-3">Cuadrante Inferior Derecho</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Apendicitis:</strong> Dolor migratorio, náuseas, fiebre</li>
                            <li>• <strong>Enfermedad de Crohn:</strong> Dolor crónico, diarrea</li>
                            <li>• <strong>Cálculo ureteral:</strong> Dolor cólico hacia ingle</li>
                            <li>• <strong>Torsión ovárica:</strong> Dolor súbito en mujeres</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                        <h3 className="font-bold text-green-700 mb-3">Cuadrante Inferior Izquierdo</h3>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Diverticulitis:</strong> Dolor localizado, fiebre</li>
                            <li>• <strong>Colitis ulcerosa:</strong> Diarrea sanguinolenta</li>
                            <li>• <strong>Cálculo ureteral:</strong> Dolor irradiado</li>
                            <li>• <strong>Embarazo ectópico:</strong> Dolor pélvico en mujeres</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Emergencias urológicas específicas */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                    <GiKidneys className="w-6 h-6 mr-2 text-blue-500" />
                    Emergencias Urinarias Específicas
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h3 className="font-bold text-blue-700 mb-3">Cálculos Renales</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Síntomas:</strong> Dolor lumbar irradiado a ingle, hematuria, náuseas</p>
                            <p><strong>Características:</strong> Dolor cólico, severo, no mejora con posición</p>
                            <p><strong>Manejo:</strong> Posición de confort, oxígeno si hipoxia, transporte para imagenología</p>
                        </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h3 className="font-bold text-purple-700 mb-3">Retención Urinaria Aguda</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Síntomas:</strong> Dolor suprapúbico, necesidad urgente de orinar sin éxito</p>
                            <p><strong>Causas:</strong> Hiperplasia prostática, medicamentos, obstrucción</p>
                            <p><strong>Manejo:</strong> Monitoreo, transporte para cateterismo urgente</p>
                        </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                        <h3 className="font-bold text-red-700 mb-3">Pielonefritis</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Síntomas:</strong> Fiebre alta, dolor en flanco, malestar general</p>
                            <p><strong>Complicaciones:</strong> Sepsis, shock séptico</p>
                            <p><strong>Manejo:</strong> Monitoreo estricto, transporte urgente si sepsis</p>
                        </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                        <h3 className="font-bold text-yellow-700 mb-3">Cistitis</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <p><strong>Síntomas:</strong> Disuria, micción frecuente y dolorosa</p>
                            <p><strong>Gravedad:</strong> Usualmente no requiere intervenciones agresivas</p>
                            <p><strong>Manejo:</strong> Evaluación general, transporte para tratamiento</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Complicaciones en pacientes en diálisis */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                    <RiAlarmWarningLine className="w-6 h-6 text-orange-500 mr-2" />
                    <h3 className="text-xl font-bold text-orange-700">Complicaciones en Pacientes en Diálisis</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Complicaciones Comunes:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>Hipotensión:</strong> Post-diálisis, remoción excesiva de líquido</li>
                            <li>• <strong>Sobrecarga de líquidos:</strong> Edema, disnea, hipertensión</li>
                            <li>• <strong>Infecciones:</strong> En fístulas o catéteres de diálisis</li>
                            <li>• <strong>Uremia:</strong> Acumulación de tóxicos por falla renal</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Manejo Prehospitalario:</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• <strong>No usar fístula</strong> para acceso IV</li>
                            <li>• <strong>Evaluar sobrecarga:</strong> Edema, dificultad respiratoria</li>
                            <li>• <strong>Oxígeno</strong> si hay dificultad respiratoria</li>
                            <li>• <strong>Transporte urgente</strong> si infección o desequilibrio severo</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Criterios de transporte prioritario */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaAmbulance className="w-8 h-8 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-red-700">Criterios de Transporte Prioritario</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Signos de Shock</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Hipotensión</li>
                            <li>• Taquicardia</li>
                            <li>• Piel fría y pegajosa</li>
                            <li>• Alteración mental</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Abdomen Quirúrgico</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Rigidez involuntaria</li>
                            <li>• Rebote positivo</li>
                            <li>• Silencio abdominal</li>
                            <li>• Distensión severa</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Hemorragia</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Hematemesis</li>
                            <li>• Melena</li>
                            <li>• Hematuria masiva</li>
                            <li>• Sangrado rectal activo</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">AAA Sospechoso</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Masa pulsátil</li>
                            <li>• Dolor súbito intenso</li>
                            <li>• Irradiación a espalda</li>
                            <li>• Síncope</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Sepsis</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Fiebre alta</li>
                            <li>• Alteración mental</li>
                            <li>• Taquipnea</li>
                            <li>• Hipotensión</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-bold text-red-600 mb-2">Obstrucción</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Vómito fecaloide</li>
                            <li>• Distensión severa</li>
                            <li>• Ausencia de gases</li>
                            <li>• Dolor cólico intenso</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
