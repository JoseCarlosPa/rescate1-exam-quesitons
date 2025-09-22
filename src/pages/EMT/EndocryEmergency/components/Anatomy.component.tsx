import {GiMedicines} from "react-icons/gi";
import {FaBrain} from "react-icons/fa";
import {BsDropletHalf} from "react-icons/bs";
import {FiUser} from "react-icons/fi";

export default function Anatomy() {
    return (<div className="space-y-8">
        {/* Sistema endocrino interactivo */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <GiMedicines className="w-6 h-6 mr-2 text-orange-500"/>
                Sistema Endocrino - Red de Comunicación Hormonal
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                        <h3 className="text-xl font-bold text-blue-700 mb-4 flex items-center">
                            <FaBrain className="w-5 h-5 mr-2"/>
                            Glándulas Principales
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-blue-700">Páncreas</h4>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>Insulina:</strong> Reduce glucosa (células beta)
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Glucagón:</strong> Aumenta glucosa (células alfa)
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-green-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-green-700">Tiroides</h4>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>T3/T4:</strong> Metabolismo basal, termogénesis
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Calcitonina:</strong> Regula calcio sérico
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-red-700">Suprarrenales</h4>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>Cortisol:</strong> Respuesta al estrés, gluconeogénesis
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>Aldosterona:</strong> Balance hidro-electrolítico
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-purple-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-purple-700">Hipófisis</h4>
                                    <p className="text-sm text-gray-600 mb-1">
                                        <strong>ADH:</strong> Retención de agua
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        <strong>TSH, ACTH:</strong> Regulación de otras glándulas
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                        <h3 className="text-xl font-bold text-orange-700 mb-4">Fisiopatología de la Diabetes</h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-orange-600 mb-1">Tipo 1 (DMID)</h4>
                                <p className="text-sm text-gray-700">
                                    Destrucción autoinmune de células beta → Deficiencia absoluta de insulina
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-orange-600 mb-1">Tipo 2 (DMNID)</h4>
                                <p className="text-sm text-gray-700">
                                    Resistencia a la insulina + Deficiencia relativa de insulina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4">
                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Endocrine_system_diagram_es.svg/400px-Endocrine_system_diagram_es.svg.png"
                            alt="Sistema endocrino"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                        <p className="text-sm text-gray-600 italic mt-2">Sistema endocrino humano</p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 w-full">
                        <h4 className="font-semibold text-yellow-800 mb-2">Regulación de la Glucosa</h4>
                        <div className="text-sm space-y-1">
                            <p><span className="text-green-600">Alimentación:</span> ↑ Glucosa → ↑ Insulina</p>
                            <p><span className="text-red-600">Ayuno:</span> ↓ Glucosa → ↑ Glucagón</p>
                            <p><span className="text-blue-600">Estrés:</span> ↑ Cortisol → ↑ Glucosa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Sistema hematológico */}
        <div>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2 flex items-center">
                <BsDropletHalf className="w-6 h-6 mr-2 text-red-500"/>
                Sistema Hematológico - Transporte y Defensa
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
                <div>
                    <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                        <h3 className="text-xl font-bold text-red-700 mb-4">Componentes Sanguíneos</h3>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-red-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-red-700">Eritrocitos (GR)</h4>
                                    <p className="text-sm text-gray-600">
                                        Hemoglobina, transporte O₂/CO₂, vida útil 120 días
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-blue-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-blue-700">Leucocitos (GB)</h4>
                                    <p className="text-sm text-gray-600">
                                        Neutrófilos, linfocitos, monocitos - defensa inmune
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-yellow-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-yellow-700">Plaquetas</h4>
                                    <p className="text-sm text-gray-600">
                                        Hemostasia primaria, agregación, vida útil 7-10 días
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <div className="w-4 h-4 bg-orange-500 rounded-full mt-1"></div>
                                <div>
                                    <h4 className="font-semibold text-orange-700">Plasma</h4>
                                    <p className="text-sm text-gray-600">
                                        Factores de coagulación, proteínas, electrolitos
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">Hematopoyesis</h3>
                        <p className="text-sm text-gray-700 mb-3">
                            Producción de células sanguíneas en médula ósea roja
                        </p>
                        <div className="space-y-2 text-sm">
                            <p><span className="text-red-600">Eritropoyesis:</span> Estimulada por EPO (riñón)</p>
                            <p><span className="text-blue-600">Leucopoyesis:</span> Respuesta a infecciones</p>
                            <p><span className="text-yellow-600">Trombopoyesis:</span> Regulada por TPO (hígado)</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="text-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Blood_cells_diagram_es.svg/500px-Blood_cells_diagram_es.svg.png"
                            alt="Células sanguíneas"
                            className="rounded-lg shadow-lg max-w-full h-auto"
                        />
                        <p className="text-sm text-gray-600 italic mt-2">Componentes celulares de la sangre</p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                        <h3 className="text-xl font-bold text-green-700 mb-4">Cascada de Coagulación</h3>
                        <div className="space-y-3">
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-green-600 mb-1">1. Hemostasia Primaria</h4>
                                <p className="text-sm text-gray-700">
                                    Vasoconstricción + agregación plaquetaria
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-green-600 mb-1">2. Hemostasia Secundaria</h4>
                                <p className="text-sm text-gray-700">
                                    Activación factores coagulación → fibrina
                                </p>
                            </div>
                            <div className="bg-white p-3 rounded">
                                <h4 className="font-semibold text-green-600 mb-1">3. Fibrinólisis</h4>
                                <p className="text-sm text-gray-700">
                                    Disolución del coágulo por plasmina
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Patologías específicas */}
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FiUser className="w-5 h-5 mr-2"/>
                Fisiopatología de Condiciones Críticas
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-red-700 mb-3">Células Falciformes</h4>
                    <div className="bg-white p-4 rounded space-y-2 text-sm">
                        <p><strong>Defecto:</strong> Hemoglobina S (HbS) en lugar de HbA</p>
                        <p><strong>Resultado:</strong> GR rígidos en forma de hoz</p>
                        <p><strong>Consecuencia:</strong> Oclusión vascular → isquemia</p>
                        <p><strong>Crisis:</strong> Dolor, hipoxia, deshidratación</p>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold text-blue-700 mb-3">Hemofilia</h4>
                    <div className="bg-white p-4 rounded space-y-2 text-sm">
                        <p><strong>Tipo A:</strong> Deficiencia Factor VIII (85%)</p>
                        <p><strong>Tipo B:</strong> Deficiencia Factor IX (15%)</p>
                        <p><strong>Herencia:</strong> Ligada al X (varones afectados)</p>
                        <p><strong>Clínica:</strong> Sangrado prolongado, hemartrosis</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}