import { FaBrain, FaNetworkWired, FaEye } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

export default function NervousSystem() {
    return (
        <div className="space-y-6 text-gray-800">
            <h2 className="text-3xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 flex items-center gap-3">
                <FaBrain className="text-4xl" />
                Sistema Nervioso Central y Periférico
            </h2>
            <p className="text-lg">
                El sistema nervioso es la red de control maestro del cuerpo. Su evaluación es fundamental en trauma raquimedular, EVC (enfermedad vascular cerebral) y alteraciones del estado mental.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 p-5 rounded-lg shadow-sm border border-purple-100">
                    <h3 className="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
                        <GiBrain className="text-2xl" /> Sistema Nervioso Central (SNC)
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <strong className="block text-purple-900">Encéfalo (Cerebro):</strong>
                            <ul className="text-sm list-disc pl-5 space-y-1">
                                <li><strong>Frontal:</strong> Pensamiento, motricidad voluntaria, personalidad.</li>
                                <li><strong>Parietal:</strong> Sensibilidad (tacto, dolor).</li>
                                <li><strong>Temporal:</strong> Audición, olfato, lenguaje, memoria.</li>
                                <li><strong>Occipital:</strong> Visión.</li>
                            </ul>
                        </div>
                        <div>
                            <strong className="block text-purple-900">Tallo Cerebral:</strong>
                            <p className="text-sm">Controla funciones vitales primitivas. Contiene el mesencéfalo, puente (ritmo respiratorio) y bulbo raquídeo (FC, TA, FR).</p>
                        </div>
                        <div>
                            <strong className="block text-purple-900">Cerebelo & SRA:</strong>
                            <p className="text-sm">El cerebelo coordina el equilibrio y motricidad fina. El <strong>Sistema Reticular Activador (SRA)</strong> o Formación Reticular, ubicado a lo largo del tallo cerebral, es la red neuronal responsable de mantener el nivel de alerta, la conciencia (despierto) y regular los ciclos de sueño-vigilia. Una lesión al SRA causa coma.</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <FaNetworkWired className="text-orange-500 text-2xl" /> Médula Espinal y Meninges
                        </h3>
                        <p className="text-sm mb-2">La médula espinal sale por el foramen magno y termina en L1-L2 (cono medular). Procesa reflejos autónomos y transmite señales.</p>
                        <strong className="text-sm text-gray-900 block mb-1">Meninges (capas protectoras de externa a interna):</strong>
                        <ol className="text-sm list-decimal pl-5 space-y-1 text-gray-700">
                            <li><strong>Duramadre:</strong> Fuerte, fibrosa.</li>
                            <li><strong>Aracnoides:</strong> Red vascular. Debajo fluye el LCR.</li>
                            <li><strong>Piamadre:</strong> Adherida al tejido cerebral.</li>
                        </ol>
                        <div className="bg-yellow-50 p-3 mt-2 border border-yellow-200 rounded">
                            <strong className="text-yellow-900 text-sm">Signo Clínico (Fuga de LCR):</strong>
                            <p className="text-xs text-yellow-800 mt-1">En fracturas de la base del cráneo, el LCR puede fugar por oídos o nariz. Se observa como un <strong>"signo del halo"</strong> (líquido claro rodeando una gota de sangre en gasa).</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-50 p-5 rounded-lg shadow-sm border border-indigo-100">
                    <h3 className="text-xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
                         Nervios Periféricos y Dermatomas
                    </h3>
                    <p className="text-sm mb-3">
                        El SNP consta de 12 pares de nervios craneales (salen del encéfalo) y 31 pares de nervios espinales (salen de la médula espinal).
                    </p>
                    <ul className="text-sm list-disc pl-5 space-y-2">
                        <li><strong>Raíces Sensitivas (Dorsales):</strong> Llevan información aferente de la periferia al cerebro.</li>
                        <li><strong>Raíces Motoras (Ventrales):</strong> Llevan información eferente del cerebro a los músculos.</li>
                        <li><strong>Dermatomas:</strong> Áreas de la piel inervadas por un solo nervio espinal. Son esenciales en trauma para mapear el nivel de lesión medular:
                            <ul className="list-disc pl-5 mt-1 text-gray-600">
                                <li><strong>C3, C4, C5:</strong> Mantienen vivo el diafragma. Lesión por encima causa paro respiratorio.</li>
                                <li><strong>T4:</strong> Nivel de los pezones.</li>
                                <li><strong>T10:</strong> Nivel del ombligo.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                    <h3 className="text-lg font-bold text-red-900 mb-2">Tipos de Hematomas Intracraneales</h3>
                    <ul className="text-sm list-disc pl-5 space-y-2">
                        <li><strong>Epidural:</strong> Sangrado rápido <em>arterial</em> (Arteria meníngea media) entre cráneo y duramadre. Evoluciona rápidamente a herniación con un intervalo lúcido característico.</li>
                        <li><strong>Subdural:</strong> Sangrado lento <em>venoso</em> (Venas puente) debajo de duramadre. Puede tardar días en dar síntomas (frecuente en ancianos/alcohólicos).</li>
                        <li><strong>Subaracnoideo:</strong> Sangrado en el espacio LCR; clásicamente "el peor dolor de cabeza de mi vida".</li>
                    </ul>
                </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg text-white mt-6 shadow-md">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <FaEye /> Sistema Nervioso Autónomo (SNA)
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-yellow-600/30 p-4 rounded bg-gray-700/50">
                        <h4 className="font-bold text-xl text-red-400 mb-2">Simpático (Adrenérgico)</h4>
                        <p className="text-sm italic text-gray-300 mb-3">"Pelea o Huida" (Lucha/Evasión)</p>
                        <ul className="text-sm space-y-2">
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Corazón:</span> <span className="text-red-300 font-bold">↑ FC y Contractilidad</span></li>
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Vascular:</span> <span className="text-purple-300 font-bold">Vasoconstricción (receptores Alfa)</span></li>
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Bronquios:</span> <span className="text-blue-300 font-bold">Broncodilatación (receptores Beta 2)</span></li>
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Pupilas:</span> <span className="text-yellow-300 font-bold">Midriasis (dilatadas)</span></li>
                            <li className="flex justify-between pb-1"><span>Digestión:</span> <span className="text-gray-400">Inhibida</span></li>
                        </ul>
                    </div>
                    <div className="border border-blue-600/30 p-4 rounded bg-gray-700/50">
                        <h4 className="font-bold text-xl text-blue-400 mb-2">Parasimpático (Colinérgico)</h4>
                        <p className="text-sm italic text-gray-300 mb-3">"Descanso y Digestión"</p>
                        <ul className="text-sm space-y-2">
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Corazón:</span> <span className="text-blue-300 font-bold">↓ FC (bradicardia)</span></li>
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Vascular:</span> <span className="text-gray-400">Poco efecto directo</span></li>
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Bronquios:</span> <span className="text-red-300 font-bold">Broncoconstricción</span></li>
                            <li className="flex justify-between border-b border-gray-600 pb-1"><span>Pupilas:</span> <span className="text-green-300 font-bold">Miosis (contraídas)</span></li>
                            <li className="flex justify-between pb-1"><span>Digestión:</span> <span className="text-green-400 font-bold">Estimulada</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
