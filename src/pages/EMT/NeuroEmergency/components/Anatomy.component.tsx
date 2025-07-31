import { RiBrain2Fill } from "react-icons/ri";
import { FaEye, FaComment, FaHandPaper } from "react-icons/fa";
import { GiSpinalCoil } from "react-icons/gi";
import { MdBalance } from "react-icons/md";

export default function Anatomy() {
    return (
        <div className="space-y-8">
            {/* Anatomía del Sistema Nervioso Central */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <RiBrain2Fill className="w-8 h-8 text-orange-500" />
                    <h2 className="text-2xl font-bold text-gray-900">Sistema Nervioso Central</h2>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
                    <p className="text-gray-700 leading-relaxed">
                        El sistema nervioso central está compuesto por el <strong>encéfalo</strong> y la <strong>médula espinal</strong>.
                        El encéfalo controla funciones voluntarias e involuntarias, emociones y percepción.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <RiBrain2Fill className="w-6 h-6 text-purple-500" />
                            <h3 className="font-semibold text-purple-800">Encéfalo</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Controla funciones voluntarias e involuntarias</li>
                            <li>• Procesa emociones y percepción</li>
                            <li>• Se divide en lóbulos y hemisferios</li>
                            <li>• Cada región tiene funciones específicas</li>
                        </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <GiSpinalCoil className="w-6 h-6 text-green-500" />
                            <h3 className="font-semibold text-green-800">Médula Espinal</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Transmite información entre cerebro y cuerpo</li>
                            <li>• Controla reflejos automáticos</li>
                            <li>• Vulnerable a lesiones traumáticas</li>
                            <li>• Protegida por columna vertebral</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Funciones por Lóbulos */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Funciones Específicas por Lóbulos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <FaHandPaper className="w-5 h-5 text-red-500" />
                            <h3 className="font-medium text-red-800">Lóbulo Frontal</h3>
                        </div>
                        <ul className="text-sm text-red-700 space-y-1">
                            <li>• Control motor</li>
                            <li>• Personalidad</li>
                            <li>• Juicio</li>
                            <li>• Toma de decisiones</li>
                            <li>• Área de Broca (habla)</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <MdBalance className="w-5 h-5 text-blue-500" />
                            <h3 className="font-medium text-blue-800">Lóbulo Parietal</h3>
                        </div>
                        <ul className="text-sm text-blue-700 space-y-1">
                            <li>• Sensación táctil</li>
                            <li>• Orientación espacial</li>
                            <li>• Integración sensorial</li>
                            <li>• Percepción del cuerpo</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <FaEye className="w-5 h-5 text-green-500" />
                            <h3 className="font-medium text-green-800">Lóbulo Occipital</h3>
                        </div>
                        <ul className="text-sm text-green-700 space-y-1">
                            <li>• Procesamiento visual</li>
                            <li>• Interpretación de imágenes</li>
                            <li>• Reconocimiento visual</li>
                        </ul>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <FaComment className="w-5 h-5 text-purple-500" />
                            <h3 className="font-medium text-purple-800">Lóbulo Temporal</h3>
                        </div>
                        <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Audición</li>
                            <li>• Memoria</li>
                            <li>• Área de Wernicke (comprensión)</li>
                            <li>• Emociones</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Hemisferios Cerebrales */}
            <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hemisferios Cerebrales</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-800 mb-3">Hemisferio Izquierdo</h3>
                        <p className="text-yellow-700 text-sm mb-2">Dominante en la mayoría de personas</p>
                        <ul className="list-disc list-inside text-yellow-700 text-sm space-y-1">
                            <li>Lenguaje y habla</li>
                            <li>Pensamiento lógico</li>
                            <li>Matemáticas</li>
                            <li>Análisis secuencial</li>
                            <li>Control del lado derecho del cuerpo</li>
                        </ul>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                        <h3 className="font-semibold text-orange-800 mb-3">Hemisferio Derecho</h3>
                        <p className="text-orange-700 text-sm mb-2">Especializado en funciones espaciales</p>
                        <ul className="list-disc list-inside text-orange-700 text-sm space-y-1">
                            <li>Creatividad y arte</li>
                            <li>Reconocimiento de patrones</li>
                            <li>Orientación espacial</li>
                            <li>Procesamiento emocional</li>
                            <li>Control del lado izquierdo del cuerpo</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Sistema Nervioso Periférico */}
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">Sistema Nervioso Periférico</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800 mb-3">Sistema Somático</h3>
                        <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                            <li>Nervios motores voluntarios</li>
                            <li>Nervios sensoriales</li>
                            <li>Control consciente de músculos</li>
                        </ul>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                        <h3 className="font-semibold text-teal-800 mb-3">Sistema Autónomo</h3>
                        <ul className="list-disc list-inside text-teal-700 text-sm space-y-1">
                            <li>Simpático: "lucha o huida"</li>
                            <li>Parasimpático: "descanso y digestión"</li>
                            <li>Control de órganos internos</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Implicaciones Clínicas */}
            <section>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Implicaciones Clínicas para EMT</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-gray-700 mb-2">Reconocimiento de Síntomas</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Alteraciones del habla → Lóbulo frontal/temporal</li>
                                <li>• Pérdida visual → Lóbulo occipital</li>
                                <li>• Debilidad unilateral → Hemisferio contralateral</li>
                                <li>• Cambios de personalidad → Lóbulo frontal</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-700 mb-2">Evaluación Dirigida</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li>• Nivel de conciencia</li>
                                <li>• Función motora bilateral</li>
                                <li>• Capacidad de comunicación</li>
                                <li>• Reflejos pupilares</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}