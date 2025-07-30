export default function Anatomy(){
    return(
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema Nervioso Central</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        El SNC está protegido por las meninges y el líquido cefalorraquídeo, pero es vulnerable
                        a lesiones por trauma, isquemia y hemorragia.
                    </p>
                    <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded">
                            <h4 className="font-semibold text-blue-800">Cerebro</h4>
                            <p className="text-sm text-gray-700">Control ejecutivo, memoria, lenguaje, movimiento voluntario</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                            <h4 className="font-semibold text-green-800">Cerebelo</h4>
                            <p className="text-sm text-gray-700">Coordinación, equilibrio, control motor fino</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded">
                            <h4 className="font-semibold text-red-800">Tronco Encefálico</h4>
                            <p className="text-sm text-gray-700">Funciones vitales: respiración, frecuencia cardíaca, presión arterial</p>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Brain_human_normal_inferior_view_with_labels_es.svg/500px-Brain_human_normal_inferior_view_with_labels_es.svg.png"
                        alt="Anatomía del sistema nervioso"
                        className="rounded-lg shadow-md max-w-full h-auto"
                    />
                </div>
            </div>

            {/* Circulación cerebral */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Circulación Cerebral y Territorios Vasculares</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-blue-600 mb-2">Arteria Cerebral Anterior</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Corteza frontal medial</li>
                            <li>• Control motor piernas</li>
                            <li>• Personalidad, juicio</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-red-600 mb-2">Arteria Cerebral Media</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Corteza frontal lateral</li>
                            <li>• Control motor cara/brazo</li>
                            <li>• Lenguaje (hemisferio dominante)</li>
                        </ul>
                    </div>
                    <div className="bg-white p-4 rounded shadow-sm">
                        <h4 className="font-semibold text-green-600 mb-2">Arteria Cerebral Posterior</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Lóbulo occipital</li>
                            <li>• Corteza visual primaria</li>
                            <li>• Tálamo, tronco encefálico</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Fisiopatología */}
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiopatología de las Lesiones Neurológicas</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-red-50 border-l-4 border-red-400 p-4">
                            <h4 className="font-semibold text-red-800 mb-2">Isquemia Cerebral</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Reducción flujo sanguíneo</li>
                                <li>• Falta de oxígeno y glucosa</li>
                                <li>• Muerte neuronal progresiva</li>
                                <li>• Zona de penumbra isquémica</li>
                            </ul>
                        </div>
                        <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                            <h4 className="font-semibold text-purple-800 mb-2">Convulsiones</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Actividad neuronal anormal</li>
                                <li>• Descargas eléctricas sincronizadas</li>
                                <li>• Alteración neurotransmisores</li>
                                <li>• Agotamiento energético neuronal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                            <h4 className="font-semibold text-orange-800 mb-2">Hemorragia Cerebral</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Ruptura vascular</li>
                                <li>• Efecto masa por hematoma</li>
                                <li>• Aumento presión intracraneal</li>
                                <li>• Herniación cerebral</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border-l-4 border-green-400 p-4">
                            <h4 className="font-semibold text-green-800 mb-2">Trauma Craneal</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Lesión primaria: impacto directo</li>
                                <li>• Lesión secundaria: hipoxia, edema</li>
                                <li>• Aumento PIC</li>
                                <li>• Compromiso perfusión cerebral</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Escalas neurológicas */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Escalas de Evaluación Neurológica</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-orange-100">
                        <tr>
                            <th className="py-3 px-4 text-left font-semibold">Escala</th>
                            <th className="py-3 px-4 text-left font-semibold">Uso Principal</th>
                            <th className="py-3 px-4 text-left font-semibold">Componentes</th>
                            <th className="py-3 px-4 text-left font-semibold">Interpretación</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="py-3 px-4 font-medium text-blue-600">AVDI</td>
                            <td className="py-3 px-4">Nivel de conciencia</td>
                            <td className="py-3 px-4">Alerta, Voz, Dolor, No responde</td>
                            <td className="py-3 px-4">Evaluación rápida inicial</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-green-600">Glasgow</td>
                            <td className="py-3 px-4">TCE, coma</td>
                            <td className="py-3 px-4">Ocular (4) + Verbal (5) + Motora (6)</td>
                            <td className="py-3 px-4">3-8: Grave, 9-12: Moderado, 13-15: Leve</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-red-600">Cincinnati</td>
                            <td className="py-3 px-4">Sospecha de ACV</td>
                            <td className="py-3 px-4">Cara, Brazo, Habla</td>
                            <td className="py-3 px-4">1+ anormal = ACV probable</td>
                        </tr>
                        <tr>
                            <td className="py-3 px-4 font-medium text-purple-600">NIHSS</td>
                            <td className="py-3 px-4">Severidad ACV</td>
                            <td className="py-3 px-4">15 ítems neurológicos</td>
                            <td className="py-3 px-4">0-42: Mayor puntaje = mayor déficit</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
}