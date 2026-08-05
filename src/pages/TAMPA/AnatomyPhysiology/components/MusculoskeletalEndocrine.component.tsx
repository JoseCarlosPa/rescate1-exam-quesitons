import { FaBone } from "react-icons/fa";
import { MdOutlineScience, MdHealing } from "react-icons/md";

export default function MusculoskeletalEndocrine() {
    return (
        <div className="space-y-6 text-gray-800">
            <h2 className="text-3xl font-bold text-emerald-700 border-b-2 border-emerald-200 pb-2 flex items-center gap-3">
                <FaBone className="text-4xl" />
                Sistemas Musculoesquelético y Endocrino
            </h2>
            <p className="text-lg">
                El sistema musculoesquelético da estructura, protege órganos y produce sangre. El endocrino regula funciones metabólicas clave, y sus emergencias (hipoglucemia, crisis tiroidea) son críticas en la atención prehospitalaria.
            </p>

            {/* Musculoesquelético */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <MdHealing className="text-emerald-600" /> Sistema Musculoesquelético
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <strong className="block text-gray-900 mb-2">Anatomía Ósea: Esqueleto Axial</strong>
                        <ul className="text-sm list-disc pl-5 space-y-1 mb-4">
                            <li><strong>Cráneo:</strong> Bóveda craneal y huesos faciales. Protege el encéfalo.</li>
                            <li><strong>Columna Vertebral (33 vértebras):</strong> Cervicales (7), Torácicas (12), Lumbares (5), Sacras (5 fusionadas), Coccígeas (4 fusionadas).</li>
                            <li><strong>Caja Torácica:</strong> Esternón y 12 pares de costillas (1-7 verdaderas, 8-10 falsas, 11-12 flotantes). Protege corazón y pulmones.</li>
                        </ul>
                        
                        <strong className="block text-gray-900 mb-2">Anatomía Ósea: Esqueleto Apendicular</strong>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                            <li><strong>Cintura Escapular y Brazo:</strong> Clavícula, Escápula. Brazo: <strong>Húmero</strong>. Antebrazo: <strong>Radio</strong> (lateral/pulgar) y <strong>Cúbito/Ulna</strong> (medial/meñique). Mano: Carpianos, metacarpianos, falanges.</li>
                            <li><strong>Pelvis y Pierna:</strong> Huesos pélvicos (íleon, isquion, pubis). Muslo: <strong>Fémur</strong> (el más largo y fuerte). Pierna: <strong>Tibia</strong> (anterior/soporta peso) y <strong>Peroné/Fíbula</strong> (lateral). Rótula/Patela (rodilla). Pie: Tarsianos (calcáneo), metatarsianos, falanges.</li>
                        </ul>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-emerald-50 p-4 rounded border border-emerald-100">
                            <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">Estructura Ósea y Articulaciones</h4>
                            <ul className="text-sm list-disc pl-5 space-y-1">
                                <li><strong>Huesos Largos:</strong> Diáfisis (cuerpo compacto), Epífisis (extremos esponjosos), placa epifisial (crecimiento en niños).</li>
                                <li><strong>Médula Ósea:</strong> Roja (produce glóbulos rojos, blancos y plaquetas - hematopoyesis) vs Amarilla (almacena grasa).</li>
                                <li><strong>Articulaciones (Sinoviales):</strong> Esfera y cuenca (hombro, cadera), bisagra (codo, rodilla). Tienen cápsula articular y líquido sinovial.</li>
                            </ul>
                        </div>
                        
                        <div className="bg-red-50 p-4 rounded border border-red-100">
                            <strong className="block text-red-900 mb-2">Lesiones y Músculos:</strong>
                            <ul className="text-sm space-y-2">
                                <li><span className="font-bold text-red-600">Esguince:</span> Desgarro o estiramiento de <strong>LIGAMENTOS</strong> (unen hueso a hueso).</li>
                                <li><span className="font-bold text-red-600">Desgarro / Distensión:</span> Lesión en <strong>MÚSCULO</strong> o <strong>TENDÓN</strong> (unen músculo a hueso).</li>
                                <li><span className="font-bold text-red-600">Fractura de Fémur/Pelvis:</span> Puede causar hemorragia masiva (1-2 litros) y choque hipovolémico severo.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Endocrino */}
            <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-100">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
                    <MdOutlineScience className="text-indigo-600" /> Sistema Endocrino Avanzado
                </h3>
                <p className="text-sm mb-4">
                    Compuesto por glándulas sin conductos que secretan hormonas directamente al torrente sanguíneo. Controlado en gran medida por el eje <strong>Hipotálamo-Hipófisis</strong>, que actúa como el "termostato maestro".
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white p-3 rounded shadow-sm border-t-4 border-blue-500">
                        <strong className="block text-indigo-800 text-lg border-b pb-1 mb-2">Páncreas (Islotes)</strong>
                        <ul className="text-sm space-y-1">
                            <li><strong>Insulina</strong> (Células Beta): Hormona anabólica. Facilita entrada de glucosa a células.</li>
                            <li><strong>Glucagón</strong> (Células Alfa): Catabólica. Estimula glucogenólisis y gluconeogénesis hepática.</li>
                            <li className="text-red-500 mt-2 text-xs font-bold">Emergencias: Hipo/Hiperglucemia, Cetoacidosis (CAD), Estado Hiperosmolar (HHS).</li>
                        </ul>
                    </div>

                    <div className="bg-white p-3 rounded shadow-sm border-t-4 border-yellow-500">
                        <strong className="block text-indigo-800 text-lg border-b pb-1 mb-2">G. Suprarrenales</strong>
                        <ul className="text-sm space-y-1">
                            <li><strong>Médula:</strong> Adrenalina y noradrenalina (estrés agudo, simpático).</li>
                            <li><strong>Corteza:</strong> Glucocorticoides (Cortisol, estrés crónico, metabolismo glucosa), Mineralocorticoides (Aldosterona, retiene Na y H2O).</li>
                            <li className="text-red-500 mt-2 text-xs font-bold">Emergencias: Crisis de Addison (insuficiencia adrenal, hipotensión refractaria).</li>
                        </ul>
                    </div>

                    <div className="bg-white p-3 rounded shadow-sm border-t-4 border-purple-500">
                        <strong className="block text-indigo-800 text-lg border-b pb-1 mb-2">Tiroides y Paratiroides</strong>
                        <ul className="text-sm space-y-1">
                            <li><strong>T3 / T4:</strong> Regulan el índice metabólico basal. Requieren yodo.</li>
                            <li><strong>Calcitonina:</strong> Disminuye Ca en sangre.</li>
                            <li><strong>Parathormona (PTH):</strong> Aumenta Ca en sangre (resorción ósea).</li>
                            <li className="text-red-500 mt-2 text-xs font-bold">Emergencias: Tormenta tiroidea, coma mixedematoso.</li>
                        </ul>
                    </div>

                    <div className="bg-white p-3 rounded shadow-sm border-t-4 border-green-500">
                        <strong className="block text-indigo-800 text-lg border-b pb-1 mb-2">Hipotálamo/Pituitaria</strong>
                        <ul className="text-sm space-y-1">
                            <li><strong>Hipotálamo:</strong> Conecta SN con endocrino. Secreta factores liberadores.</li>
                            <li><strong>Neurohipófisis:</strong> Almacena y libera ADH (Antidiurética, retiene agua, vasoconstricción) y Oxitocina.</li>
                            <li><strong>Adenohipófisis:</strong> ACTH, TSH, GH, FSH, LH, Prolactina.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
