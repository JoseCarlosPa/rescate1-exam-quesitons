import {FaExclamationTriangle, FaPills} from "react-icons/fa";
import {TbMedicineSyrup, TbReportMedical} from "react-icons/tb";
import {GiMedicines} from "react-icons/gi";
import {BsLightbulb} from "react-icons/bs";

export default function Drugs(){
    return(
        <div className="space-y-8">
            <div
                className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                    <FaPills className="w-8 h-8 text-purple-500 mr-3"/>
                    <h2 className="text-2xl font-bold text-purple-700">Medicamentos Esenciales
                        en Emergencias</h2>
                </div>
                <p className="text-gray-800 leading-relaxed text-lg">
                    Estos son los medicamentos más críticos que todo paramédico debe conocer a
                    la perfección.
                    <span className="text-purple-600 font-semibold"> Su correcta administración puede salvar vidas</span>.
                </p>
            </div>

            {/* Medicamentos por categorías */}
            <div className="space-y-6">
                {/* Medicamentos cardiovasculares de emergencia */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center">
                        <TbReportMedical className="w-6 h-6 mr-2"/>
                        Emergencias Cardiovasculares
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-red-600 mr-2"/>
                                <h4 className="font-bold text-red-700">ASPIRINA (Ácido
                                    Acetilsalicílico)</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación principal:</strong> Síndrome coronario
                                    agudo, dolor torácico de origen cardíaco</p>
                                <p><strong>Mecanismo:</strong> Inhibición irreversible de la
                                    agregación plaquetaria</p>
                                <p><strong>Dosis EMT:</strong> 160-325 mg (masticar, no tragar
                                    entero)</p>
                                <p><strong>Vía:</strong> Oral (sublingual para absorción rápida)
                                </p>
                                <div className="bg-red-100 p-2 rounded">
                                    <p className="font-semibold text-red-800">⚠️
                                        Contraindicaciones:</p>
                                    <p>Alergia conocida, sangrado activo, úlcera péptica activa,
                                        edad &lt;18 años</p>
                                </div>
                                <div className="bg-green-100 p-2 rounded">
                                    <p className="font-semibold text-green-800">💡 Consejo:</p>
                                    <p>Administrar lo antes posible en IAM - "tiempo es músculo
                                        cardíaco"</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-red-600 mr-2"/>
                                <h4 className="font-bold text-red-700">NITROGLICERINA</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación:</strong> Dolor torácico, angina de pecho,
                                    edema pulmonar</p>
                                <p><strong>Mecanismo:</strong> Vasodilatación coronaria y venosa
                                </p>
                                <p><strong>Dosis:</strong> 0.4 mg sublingual cada 3-5 min (máx 3
                                    dosis)</p>
                                <p><strong>Vía:</strong> Sublingual (spray o tablet)</p>
                                <div className="bg-red-100 p-2 rounded">
                                    <p className="font-semibold text-red-800">⚠️ Precaución:</p>
                                    <p>TA sistólica &lt;90 mmHg, uso reciente de sildenafil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicamentos respiratorios */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                        <GiMedicines className="w-6 h-6 mr-2"/>
                        Emergencias Respiratorias
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-blue-600 mr-2"/>
                                <h4 className="font-bold text-blue-700">SALBUTAMOL
                                    (Albuterol)</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación:</strong> Crisis asmática, broncoespasmo,
                                    EPOC agudizado</p>
                                <p><strong>Mecanismo:</strong> Broncodilatador β2-agonista
                                    selectivo</p>
                                <p><strong>Dosis inhalador:</strong> 2-4 puffs (100 mcg c/u) con
                                    espaciador</p>
                                <p><strong>Dosis nebulización:</strong> 2.5-5 mg en 3 ml de
                                    solución salina</p>
                                <div className="bg-blue-100 p-2 rounded">
                                    <p className="font-semibold text-blue-800">💡 Técnica:</p>
                                    <p>Usar espaciador siempre que sea posible, respiración
                                        lenta y profunda</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-blue-600 mr-2"/>
                                <h4 className="font-bold text-blue-700">OXÍGENO</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación:</strong> Hipoxemia, dificultad
                                    respiratoria, shock</p>
                                <p><strong>Objetivo:</strong> SpO₂ ≥94% (88-92% en EPOC
                                    conocido)</p>
                                <p><strong>Dispositivos:</strong> Cánula nasal, mascarilla, BVM
                                </p>
                                <div className="bg-blue-100 p-2 rounded">
                                    <p className="font-semibold text-blue-800">⚠️ EPOC:</p>
                                    <p>Titular cuidadosamente, riesgo de depresión
                                        respiratoria</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicamentos neurológicos y analgésicos */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                        <TbMedicineSyrup className="w-6 h-6 mr-2"/>
                        Analgesia y Emergencias Neurológicas
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-green-600 mr-2"/>
                                <h4 className="font-bold text-green-700">PARACETAMOL
                                    (Acetaminofén)</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación:</strong> Fiebre, dolor leve a moderado
                                </p>
                                <p><strong>Dosis oral:</strong> 500-1000 mg cada 6-8h (máx
                                    4g/día)</p>
                                <p><strong>Dosis IV:</strong> 15 mg/kg cada 6h</p>
                                <p><strong>Ventajas:</strong> Seguro, no afecta agregación
                                    plaquetaria</p>
                                <div className="bg-green-100 p-2 rounded">
                                    <p className="font-semibold text-green-800">⚠️
                                        Hepatotoxicidad:</p>
                                    <p>Evitar en enfermedad hepática severa o alcoholismo</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-green-600 mr-2"/>
                                <h4 className="font-bold text-green-700">GLUCOSA ORAL</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación:</strong> Hipoglucemia en paciente
                                    consciente</p>
                                <p><strong>Dosis:</strong> 15-25 g (gel oral o tabletas)</p>
                                <p><strong>Efectos:</strong> Aumento rápido de glucemia</p>
                                <div className="bg-red-100 p-2 rounded">
                                    <p className="font-semibold text-red-800">⚠️
                                        Contraindicación:</p>
                                    <p>Paciente inconsciente o con reflejo deglutorio
                                        alterado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Medicamentos de emergencia crítica */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-orange-700 mb-4 flex items-center">
                        <FaExclamationTriangle className="w-6 h-6 mr-2"/>
                        Emergencias Críticas
                    </h3>
                    <div className="grid lg:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-orange-600 mr-2"/>
                                <h4 className="font-bold text-orange-700">EPINEFRINA
                                    (Adrenalina)</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación principal:</strong> Anafilaxia, paro
                                    cardíaco</p>
                                <p><strong>Anafilaxia:</strong> 0.3-0.5 mg IM en muslo</p>
                                <p><strong>Paro cardíaco:</strong> 1 mg IV cada 3-5 min</p>
                                <p><strong>Mecanismo:</strong> Agonista α y β adrenérgico</p>
                                <div className="bg-orange-100 p-2 rounded">
                                    <p className="font-semibold text-orange-800">🕐 Tiempo
                                        crítico:</p>
                                    <p>En anafilaxia: administrar inmediatamente, no
                                        retrasar</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                            <div className="flex items-center mb-3">
                                <FaPills className="w-5 h-5 text-orange-600 mr-2"/>
                                <h4 className="font-bold text-orange-700">CARBÓN ACTIVADO</h4>
                            </div>
                            <div className="space-y-2 text-sm">
                                <p><strong>Indicación:</strong> Intoxicaciones orales agudas
                                    (&lt;1 hora)</p>
                                <p><strong>Dosis:</strong> 1 g/kg (25-50 g adulto, 12.5-25 g
                                    niño)</p>
                                <p><strong>Mecanismo:</strong> Adsorción de toxinas en TGI</p>
                                <div className="bg-red-100 p-2 rounded">
                                    <p className="font-semibold text-red-800">⚠️ NO usar en:</p>
                                    <p>Ácidos, álcalis, hidrocarburos, estado de conciencia
                                        alterado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabla resumen de medicamentos esenciales */}
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Tabla de Referencia Rápida -
                    Medicamentos EMT</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border rounded-lg shadow-sm">
                        <thead className="bg-gradient-to-r from-gray-100 to-gray-200">
                        <tr>
                            <th className="py-3 px-4 border text-left">Medicamento</th>
                            <th className="py-3 px-4 border text-left">Indicación Principal</th>
                            <th className="py-3 px-4 border text-left">Dosis Adulto</th>
                            <th className="py-3 px-4 border text-left">Vía</th>
                            <th className="py-3 px-4 border text-left">Contraindicación
                                Principal
                            </th>
                            <th className="py-3 px-4 border text-left">Tiempo de Acción</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="hover:bg-red-50">
                            <td className="py-3 px-4 border font-medium text-red-700">Aspirina</td>
                            <td className="py-3 px-4 border">Síndrome coronario agudo</td>
                            <td className="py-3 px-4 border">160-325 mg</td>
                            <td className="py-3 px-4 border">Oral (masticar)</td>
                            <td className="py-3 px-4 border">Alergia, sangrado activo</td>
                            <td className="py-3 px-4 border">15-30 min</td>
                        </tr>
                        <tr className="hover:bg-blue-50">
                            <td className="py-3 px-4 border font-medium text-blue-700">Salbutamol</td>
                            <td className="py-3 px-4 border">Crisis asmática, broncoespasmo</td>
                            <td className="py-3 px-4 border">2-4 puffs (100 mcg c/u)</td>
                            <td className="py-3 px-4 border">Inhalada</td>
                            <td className="py-3 px-4 border">Taquiarritmias severas</td>
                            <td className="py-3 px-4 border">5-15 min</td>
                        </tr>
                        <tr className="hover:bg-green-50">
                            <td className="py-3 px-4 border font-medium text-green-700">Paracetamol</td>
                            <td className="py-3 px-4 border">Fiebre, dolor leve-moderado</td>
                            <td className="py-3 px-4 border">500-1000 mg c/6-8h</td>
                            <td className="py-3 px-4 border">Oral, IV</td>
                            <td className="py-3 px-4 border">Hepatopatía grave</td>
                            <td className="py-3 px-4 border">30-60 min</td>
                        </tr>
                        <tr className="hover:bg-orange-50">
                            <td className="py-3 px-4 border font-medium text-orange-700">Epinefrina</td>
                            <td className="py-3 px-4 border">Anafilaxia</td>
                            <td className="py-3 px-4 border">0.3-0.5 mg</td>
                            <td className="py-3 px-4 border">IM (muslo)</td>
                            <td className="py-3 px-4 border">Relativa: HTA severa</td>
                            <td className="py-3 px-4 border">1-5 min</td>
                        </tr>
                        <tr className="hover:bg-purple-50">
                            <td className="py-3 px-4 border font-medium text-purple-700">Glucosa
                                oral
                            </td>
                            <td className="py-3 px-4 border">Hipoglucemia consciente</td>
                            <td className="py-3 px-4 border">15-25 g</td>
                            <td className="py-3 px-4 border">Oral</td>
                            <td className="py-3 px-4 border">Alteración conciencia</td>
                            <td className="py-3 px-4 border">10-20 min</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                            <td className="py-3 px-4 border font-medium text-gray-700">Carbón
                                activado
                            </td>
                            <td className="py-3 px-4 border">Intoxicación oral reciente</td>
                            <td className="py-3 px-4 border">1 g/kg (25-50 g)</td>
                            <td className="py-3 px-4 border">Oral</td>
                            <td className="py-3 px-4 border">Ácidos, álcalis, inconsciente</td>
                            <td className="py-3 px-4 border">Inmediato</td>
                        </tr>
                        <tr className="hover:bg-cyan-50">
                            <td className="py-3 px-4 border font-medium text-cyan-700">Oxígeno</td>
                            <td className="py-3 px-4 border">Hipoxemia, disnea</td>
                            <td className="py-3 px-4 border">Titulado a SpO₂</td>
                            <td className="py-3 px-4 border">Inhalada</td>
                            <td className="py-3 px-4 border">Ninguna absoluta</td>
                            <td className="py-3 px-4 border">1-3 min</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Consejos prácticos */}
            <div
                className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center">
                    <BsLightbulb className="w-6 h-6 mr-2"/>
                    Consejos Prácticos para Paramédicos
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-green-800 mb-2">Preparación y
                            administración:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Verifica fecha de vencimiento antes de cada turno</li>
                            <li>• Mantén medicamentos a temperatura adecuada</li>
                            <li>• Ten calculadora lista para cálculos de dosis</li>
                            <li>• Conoce las equivalencias más comunes</li>
                            <li>• Practica técnicas de administración regularmente</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Monitoreo
                            post-administración:</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                            <li>• Evalúa respuesta clínica en 5-10 minutos</li>
                            <li>• Monitoriza signos vitales continuamente</li>
                            <li>• Observa efectos adversos inmediatos</li>
                            <li>• Documenta hora exacta y respuesta</li>
                            <li>• Comunica al hospital receptor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}