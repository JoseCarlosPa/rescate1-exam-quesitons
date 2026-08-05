import {HiAcademicCap, HiDocumentText} from "react-icons/hi";
import {BsLightning} from "react-icons/bs";
import {MdLightbulb} from "react-icons/md";
import {FaBrain, FaEye, FaHeart, FaLungs} from "react-icons/fa";

export default function Overview() {
    const anatomicalTerms = [
        {system: "Cardiovascular", icon: FaHeart, color: "text-red-500", terms: ["Cardio-", "Angio-", "Vaso-"]},
        {system: "Respiratorio", icon: FaLungs, color: "text-blue-500", terms: ["Pneumo-", "Pulmo-", "Bronco-"]},
        {system: "Neurológico", icon: FaBrain, color: "text-purple-500", terms: ["Neuro-", "Cerebro-", "Encefalo-"]},
        {system: "Oftalmológico", icon: FaEye, color: "text-green-500", terms: ["Oftalmo-", "Oculo-", "Irido-"]},
    ];

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es
                    la terminología médica?</h2>
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="md:w-2/3">
                        <p className="text-gray-700 leading-relaxed mb-4">
                            La terminología médica es el lenguaje universal de la medicina,
                            basado principalmente en raíces griegas y latinas.
                            Es un sistema estandarizado que permite a los profesionales de la
                            salud comunicarse de manera precisa y
                            sin ambigüedades sobre enfermedades, procedimientos, anatomía y
                            tratamientos.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Para los paramédicos, dominar este lenguaje es fundamental para la
                            documentación clínica,
                            comunicación con otros profesionales y reporte de hallazgos en el
                            sistema de emergencias médicas.
                        </p>
                    </div>
                    <div className="md:w-1/3 flex justify-center">
                        <div className="bg-orange-100 p-6 rounded-full">
                            <HiDocumentText className="w-20 h-20 text-orange-500"/>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia
                    en la atención prehospitalaria</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <BsLightning className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-medium text-blue-800">Comunicación
                                    eficaz</h4>
                                <p className="text-sm text-gray-700">Facilita el entendimiento
                                    entre médicos, enfermeros y paramédicos</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                            <HiDocumentText
                                className="w-5 h-5 text-green-500 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-medium text-green-800">Documentación
                                    precisa</h4>
                                <p className="text-sm text-gray-700">Permite registrar hallazgos
                                    y procedimientos de manera estandarizada</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                            <MdLightbulb className="w-5 h-5 text-red-500 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-medium text-red-800">Reducción de
                                    errores</h4>
                                <p className="text-sm text-gray-700">Minimiza malentendidos y
                                    mejora la seguridad del paciente</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                            <HiAcademicCap
                                className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0"/>
                            <div>
                                <h4 className="font-medium text-purple-800">Desarrollo
                                    profesional</h4>
                                <p className="text-sm text-gray-700">Base para el crecimiento y
                                    especialización en el área médica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estructura
                    de los términos médicos</h2>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-orange-700 mb-2">PREFIJO</h3>
                        <p className="text-sm text-gray-700 mb-2">Se antepone para modificar</p>
                        <div className="bg-white p-2 rounded text-orange-600 font-mono">taqui-
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Significa "rápido"</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-blue-700 mb-2">RAÍZ</h3>
                        <p className="text-sm text-gray-700 mb-2">Parte principal del
                            término</p>
                        <div className="bg-white p-2 rounded text-blue-600 font-mono">-cardi-
                        </div>
                        <p className="text-xs text-gray-600 mt-1">Significa "corazón"</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                        <h3 className="font-bold text-green-700 mb-2">SUFIJO</h3>
                        <p className="text-sm text-gray-700 mb-2">Se añade al final</p>
                        <div className="bg-white p-2 rounded text-green-600 font-mono">-ia</div>
                        <p className="text-xs text-gray-600 mt-1">Indica condición</p>
                    </div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <p className="text-lg font-semibold text-gray-800 mb-2">
                        <span className="text-orange-600">taqui</span><span
                        className="text-blue-600">cardi</span><span
                        className="text-green-600">a</span>
                    </p>
                    <p className="text-gray-700">= Frecuencia cardíaca rápida</p>
                </div>
            </div>

            {/* Sistemas anatómicos */}
            <div>
                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Raíces
                    por sistemas anatómicos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    {anatomicalTerms.map((system, idx) => (
                        <div key={idx}
                             className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition">
                            <div className="flex items-center mb-3">
                                <system.icon className={`w-6 h-6 ${system.color} mr-3`}/>
                                <h3 className="font-semibold text-gray-800">{system.system}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {system.terms.map((term, termIdx) => (
                                    <span key={termIdx}
                                          className="bg-white px-3 py-1 rounded-full text-sm font-mono text-gray-700 border">
                                                                {term}
                                                            </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Posiciones y direcciones anatómicas */}
            <div className="pt-6 border-t border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b pb-2">Términos de Dirección y Posición</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-indigo-50 p-5 rounded-lg">
                        <h3 className="font-semibold text-indigo-800 mb-3">Términos de Dirección</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li><strong>Anterior (Ventral) / Posterior (Dorsal):</strong> Frente del cuerpo / Atrás del cuerpo.</li>
                            <li><strong>Superior / Inferior:</strong> Más cerca de la cabeza / Más cerca de los pies.</li>
                            <li><strong>Medial / Lateral:</strong> Más cerca de la línea media / Más lejos de la línea media.</li>
                            <li><strong>Proximal / Distal:</strong> Más cerca del tronco o punto de unión / Más lejos del tronco.</li>
                            <li><strong>Superficial / Profundo:</strong> Cerca de la piel / Más adentro del cuerpo.</li>
                            <li><strong>Palmar / Plantar:</strong> Palma de la mano / Planta del pie.</li>
                        </ul>
                    </div>
                    <div className="bg-teal-50 p-5 rounded-lg">
                        <h3 className="font-semibold text-teal-800 mb-3">Posiciones Anatómicas</h3>
                        <ul className="space-y-3 text-sm text-gray-700">
                            <li><strong>Supina:</strong> Acostado boca arriba.</li>
                            <li><strong>Prona:</strong> Acostado boca abajo.</li>
                            <li><strong>Fowler:</strong> Posición sentada o semisentada. Ayuda al paciente a respirar mejor y controlar las vías respiratorias.
                                <ul className="pl-5 mt-1 list-disc text-teal-900">
                                    <li>Semi-Fowler: Ángulo de ~45 grados.</li>
                                    <li>Fowler Alta: Ángulo de 90 grados.</li>
                                </ul>
                            </li>
                            <li><strong>Posición de recuperación:</strong> Recostado sobre el lado izquierdo (o derecho) para mantener la vía aérea permeable en pacientes inconscientes.</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Movimiento */}
            <div className="bg-gray-50 p-5 rounded-lg mt-6">
                <h3 className="font-semibold text-gray-800 mb-3">Términos de Movimiento</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
                    <div className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-400"><strong>Flexión:</strong> Doblar una articulación.</div>
                    <div className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-400"><strong>Extensión:</strong> Enderezar una articulación.</div>
                    <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-400"><strong>Aducción:</strong> Movimiento hacia la línea media.</div>
                    <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-400"><strong>Abducción:</strong> Movimiento que se aleja de la línea media.</div>
                </div>
            </div>

        </div>
    );
}