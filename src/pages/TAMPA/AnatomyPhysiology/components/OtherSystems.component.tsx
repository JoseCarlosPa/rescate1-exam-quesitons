import { FaWater } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";
import { MdOutlineWaterDrop, MdCleanHands } from "react-icons/md";

export default function OtherSystems() {
    return (
        <div className="space-y-6 text-gray-800">
            <h2 className="text-3xl font-bold text-indigo-700 border-b-2 border-indigo-200 pb-2 flex items-center gap-3">
                <MdOutlineWaterDrop className="text-4xl" />
                Sistemas Digestivo, Urinario y Tegumentario
            </h2>
            <p className="text-lg">
                Comprender la fisiología avanzada de los sistemas digestivo, urinario y tegumentario es crucial para el TAMP-A en la evaluación de choque, peritonitis, equilibrio hidroelectrolítico y emergencias metabólicas.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
                {/* Sistema Digestivo */}
                <div className="bg-indigo-50 p-5 rounded-lg shadow-sm border border-indigo-100">
                    <h3 className="text-xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
                        <GiStomach className="text-2xl" /> Sistema Digestivo
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Función:</strong> Ingestión, digestión (mecánica y química), absorción de nutrientes y agua, y eliminación de desechos sólidos.</li>
                        <li><strong>Tracto GI:</strong> Boca (masticación), esófago (peristalsis), estómago (jugos gástricos y quimo), intestino delgado (duodeno, yeyuno, íleon - donde ocurre la mayor absorción), intestino grueso (absorbe agua, forma heces), recto y ano.</li>
                        <li><strong>Órganos Sólidos (Accesorios):</strong> 
                            <ul className="list-disc pl-5 mt-1 text-gray-700">
                                <li><strong>Hígado:</strong> Metabolismo de carbohidratos, desintoxicación, producción de bilis y factores de coagulación. Un órgano sólido muy vascularizado propenso a sangrado en trauma.</li>
                                <li><strong>Páncreas (exocrino):</strong> Secreta enzimas digestivas (amilasa, lipasa) al duodeno.</li>
                                <li><strong>Bazo:</strong> Órgano linfoide en cuadrante superior izquierdo. Filtra sangre. Alta vascularidad, sangra mucho en trauma cerrado.</li>
                            </ul>
                        </li>
                        <li><strong>Órganos Huecos:</strong> Estómago, intestinos, vesícula biliar, vejiga urinaria. Su ruptura causa filtración de contenidos al peritoneo provocando peritonitis y sepsis.</li>
                    </ul>
                </div>

                {/* Sistema Urinario */}
                <div className="bg-cyan-50 p-5 rounded-lg shadow-sm border border-cyan-100">
                    <h3 className="text-xl font-bold text-cyan-800 mb-3 flex items-center gap-2">
                        <FaWater className="text-2xl" /> Sistema Urinario
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li><strong>Riñones:</strong> Órganos retroperitoneales sólidos. Filtran la sangre, eliminan desechos (urea, ácido úrico, creatinina) y regulan el equilibrio hidroelectrolítico (sodio, potasio) y el pH sanguíneo. Reciben aprox. 20% del gasto cardíaco.</li>
                        <li><strong>Vías urinarias:</strong> Uréteres (transportan orina), vejiga (órgano hueco de almacenamiento) y uretra.</li>
                        <li><strong>Regulación Hemodinámica:</strong> 
                            <ul className="list-disc pl-5 mt-1 text-gray-700">
                                <li><strong>Sistema SRAA:</strong> Ante hipotensión, el riñón libera renina. Esto convierte el angiotensinógeno en angiotensina I, luego angiotensina II (potente vasoconstrictor), que estimula la aldosterona (retiene sodio y agua, aumentando presión arterial).</li>
                            </ul>
                        </li>
                        <li><strong>Consideración prehospitalaria:</strong> Insuficiencia renal, desequilibrio ácido-base, emergencias hipertensivas, retención urinaria.</li>
                    </ul>
                </div>
            </div>

            {/* Sistema Tegumentario */}
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center gap-2">
                    <MdCleanHands className="text-2xl" /> Sistema Tegumentario (Piel)
                </h3>
                <p className="text-sm mb-3">La piel es el órgano más grande del cuerpo, vital para el mantenimiento del medio interno (homeostasis).</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <p className="font-semibold text-gray-900 mb-2">Capas de la Piel:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Epidermis:</strong> Capa externa, avascular, compuesta por células muertas y queratina. Protección impermeable.</li>
                            <li><strong>Dermis:</strong> Contiene vasos sanguíneos, terminaciones nerviosas, glándulas sudoríparas (sudor) y sebáceas (sebo/grasa), folículos pilosos. Brinda elasticidad.</li>
                            <li><strong>Tejido Subcutáneo (Hipodermis):</strong> Compuesto por tejido adiposo (grasa). Proporciona aislamiento, protección y reserva de energía.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-900 mb-2">Funciones y Relevancia Clínica:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Regulación térmica:</strong> Vasodilatación/sudoración para disipar calor; vasoconstricción/escalofríos para retener calor.</li>
                            <li><strong>Protección:</strong> Barrera primaria contra patógenos, deshidratación y trauma mecánico.</li>
                            <li><strong>Evaluación del Choque:</strong> El color (pálido, cianótico, moteado), temperatura y humedad (diaforesis) son indicadores críticos del estado de perfusión tisular y oxigenación.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
