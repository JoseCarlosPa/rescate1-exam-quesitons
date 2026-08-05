import { FaHeartbeat, FaVial, FaStethoscope } from "react-icons/fa";
import { MdBloodtype, MdOutlineSettingsInputComponent } from "react-icons/md";
import { BiPulse } from "react-icons/bi";
import { GiDrop } from "react-icons/gi";

export default function CardiovascularSystem() {
    return (
        <div className="space-y-6 text-gray-800">
            <h2 className="text-3xl font-bold text-red-700 border-b-2 border-red-200 pb-2 flex items-center gap-3">
                <FaHeartbeat className="text-4xl" />
                Sistema Cardiovascular Avanzado
            </h2>
            <p className="text-lg">
                El sistema cardiovascular es el motor de la perfusión tisular. Para el TAMP-A, entender la anatomía profunda, los componentes sanguíneos y la electrofisiología es esencial para interpretar ECG, reconocer arritmias y manejar el shock o insuficiencia cardíaca.
            </p>

            <div className="bg-red-50 p-5 rounded-lg shadow-sm border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center gap-2">
                    <MdBloodtype className="text-2xl" /> Anatomía Cardíaca Detallada
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><strong>Cámaras:</strong> 4 cámaras (aurículas derecha/izquierda, ventrículos derecho/izquierdo). Separadas por el septo interauricular e interventricular.</li>
                            <li><strong>Válvulas AV (Auriculoventriculares):</strong> Tricúspide (derecha) y Mitral/Bicúspide (izquierda).</li>
                            <li><strong>Válvulas Semilunares:</strong> Aórtica y Pulmonar.</li>
                            <li><strong>Estructuras de soporte:</strong> Cuerdas tendinosas y músculos papilares evitan la eversión de las válvulas AV durante la sístole.</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-red-700 mb-2">Flujo Sanguíneo:</h4>
                        <ol className="list-decimal pl-5 space-y-1 text-sm">
                            <li>Venas cavas (sangre desoxigenada)</li>
                            <li>Aurícula derecha → Válvula tricúspide</li>
                            <li>Ventrículo derecho → Válvula pulmonar</li>
                            <li>Arteria pulmonar → Pulmones (oxigenación)</li>
                            <li>Venas pulmonares → Aurícula izquierda</li>
                            <li>Válvula mitral → Ventrículo izquierdo</li>
                            <li>Válvula aórtica → Aorta (circulación sistémica)</li>
                        </ol>
                        <h4 className="font-semibold text-red-700 mb-2 mt-4">Circulación Coronaria:</h4>
                        <p className="text-sm">
                            El miocardio (músculo cardíaco) recibe su propio suministro de sangre oxigenada a través de las <strong>arterias coronarias</strong> que nacen de la base de la aorta. El bloqueo de una arteria coronaria causa isquemia y, si es total, produce un <strong>infarto agudo de miocardio (IAM)</strong>, que resulta en la muerte del tejido miocárdico.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-rose-50 p-5 rounded-lg shadow-sm border border-rose-100">
                <h3 className="text-xl font-bold text-rose-800 mb-3 flex items-center gap-2">
                    <GiDrop className="text-2xl" /> Componentes de la Sangre
                </h3>
                <p className="text-sm mb-3">La sangre es un tejido conectivo líquido que transporta oxígeno, nutrientes y desechos, además de ser crucial para la inmunidad y coagulación.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Plasma:</strong> Constituye el ~55% de la sangre. Es un líquido amarillento compuesto por agua (90%), proteínas (albúmina, fibrinógeno, globulinas), electrolitos y nutrientes.</li>
                        <li><strong>Eritrocitos (Glóbulos Rojos):</strong> ~45% de la sangre. Contienen hemoglobina para transportar oxígeno. Su producción está regulada por la eritropoyetina (riñones).</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Leucocitos (Glóbulos Blancos):</strong> Parte del &lt;1% (Capa leucocitaria). Esenciales para la respuesta inmunitaria (neutrófilos, linfocitos, monocitos, eosinófilos, basófilos).</li>
                        <li><strong>Plaquetas (Trombocitos):</strong> Parte del &lt;1%. Fragmentos celulares fundamentales para la hemostasia primaria (formación del tapón plaquetario).</li>
                    </ul>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <MdOutlineSettingsInputComponent className="text-blue-600 text-2xl" /> Sistema de Conducción
                    </h3>
                    <p className="text-sm mb-3">Las células miocárdicas poseen automatismo, excitabilidad, conductibilidad y contractilidad.</p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                            <div className="bg-blue-100 p-1 rounded mt-1"><BiPulse className="text-blue-600" /></div>
                            <div>
                                <strong className="block text-gray-900">Nodo Sinoauricular (SA)</strong>
                                <span className="text-sm text-gray-600">Marcapasos natural (60-100 lpm). Ubicado en la aurícula derecha.</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="bg-blue-100 p-1 rounded mt-1"><BiPulse className="text-blue-600" /></div>
                            <div>
                                <strong className="block text-gray-900">Nodo Auriculoventricular (AV)</strong>
                                <span className="text-sm text-gray-600">Retrasa el impulso para permitir el llenado ventricular (40-60 lpm).</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="bg-blue-100 p-1 rounded mt-1"><BiPulse className="text-blue-600" /></div>
                            <div>
                                <strong className="block text-gray-900">Haz de His y Fibras de Purkinje</strong>
                                <span className="text-sm text-gray-600">Distribuyen el impulso por los ventrículos (20-40 lpm).</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <FaStethoscope className="text-green-600 text-2xl" /> Fisiología y Hemodinámica
                    </h3>
                    <div className="mb-4">
                        <strong className="text-gray-900">Gasto Cardíaco (GC):</strong>
                        <p className="bg-gray-100 p-2 rounded text-center font-mono my-2 border border-gray-300">
                            GC = Frecuencia Cardíaca × Volumen Sistólico
                        </p>
                        <ul className="text-sm list-disc pl-5 text-gray-600 space-y-1">
                            <li><strong>Precarga:</strong> Estiramiento ventricular al final de la diástole (volumen).</li>
                            <li><strong>Poscarga:</strong> Resistencia vascular periférica que el ventrículo debe vencer.</li>
                            <li><strong>Contractilidad:</strong> Fuerza de la contracción inotrópica.</li>
                        </ul>
                    </div>
                    <div>
                        <strong className="text-gray-900">Sonidos Cardíacos:</strong>
                        <ul className="text-sm mt-1 space-y-1">
                            <li><span className="font-bold">S1 (Lub):</span> Cierre de válvulas AV. Inicio de sístole.</li>
                            <li><span className="font-bold">S2 (Dub):</span> Cierre de semilunares. Fin de sístole.</li>
                            <li><span className="font-bold text-red-600">S3 / S4:</span> Galopes anormales asociados a insuficiencia y sobrecarga.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                    <h3 className="text-lg font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <FaVial /> Vasos Sanguíneos
                    </h3>
                    <ul className="text-sm list-disc pl-5 space-y-2">
                        <li><strong>Arterias:</strong> Paredes gruesas, elásticas y musculares (túnica íntima, media, adventicia). Llevan sangre a alta presión desde el corazón.</li>
                        <li><strong>Arteriolas:</strong> Vasos de resistencia, regulan el flujo a los capilares.</li>
                        <li><strong>Capilares:</strong> Vasos de intercambio celular. Tienen una sola capa (endotelio) para permitir difusión de O2 y CO2.</li>
                        <li><strong>Vénulas y Venas:</strong> Tienen paredes delgadas y baja presión. Las venas contienen válvulas unidireccionales y actúan como reservorio de capacitancia (almacenan ~60% de la sangre).</li>
                    </ul>
                </div>

                <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-bold text-yellow-900 mb-2 flex items-center gap-2">
                        <BiPulse /> Evaluación de Pulsos
                    </h3>
                    <ul className="text-sm list-disc pl-5 space-y-2 text-yellow-900">
                        <li><strong>Pulsos Centrales:</strong> Carotídeo y femoral. Reflejan mejor el gasto cardíaco real y la presión aórtica. Permanecen palpables aún en estados de shock severo y centralización del flujo.</li>
                        <li><strong>Pulsos Periféricos:</strong> Radial, braquial, pedio, tibial posterior. Son los primeros en desaparecer en caso de shock (hipovolémico/cardiogénico) por la vasoconstricción periférica compensatoria.</li>
                        <li><strong>Regulación PA:</strong> Barorreceptores (presión rápida), quimiorreceptores, SRAA (largo plazo con renina) y ADH.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
