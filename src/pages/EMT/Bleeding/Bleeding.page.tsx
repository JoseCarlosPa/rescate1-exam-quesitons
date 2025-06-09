import { NavLink } from "react-router";
import { AllRoutes } from "../../../components/Router/Router.constants.ts";
import { IoReturnDownBack } from "react-icons/io5";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { faqData } from "./Bleeding.questions.ts";
import { MdBloodtype, MdQuiz } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { PiChalkboardTeacher } from "react-icons/pi";
import { useState } from "react";

export default function Bleeding() {
    const [activeTab, setActiveTab] = useState<'overview' | 'pathophysiology' | 'treatment' | 'practice'>('overview');

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <MdBloodtype className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Hemorragias y Shock</h1>
                        <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto" />
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>

                    {/* Menú rápido de recursos */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to="/bleeding/exam" // Asegúrate que esta ruta exista o ajústala
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true" // Reemplazar con link específico de hemorragias si existe
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://www.stopthebleed.org" // Ejemplo, reemplazar con recurso específico
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Stop The Bleed</p>
                        </a>
                    </div>

                    {/* Navegación por pestañas */}
                    <div className="mb-6 border-b border-gray-200 max-w-5xl mx-auto">
                        <nav className="flex space-x-2 overflow-x-auto">
                            <button
                                onClick={() => setActiveTab('overview')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'overview' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Generalidades
                            </button>
                            <button
                                onClick={() => setActiveTab('pathophysiology')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'pathophysiology' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Fisiopatología
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo y Tratamiento
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Casos Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es una hemorragia?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Una hemorragia es la pérdida aguda de sangre del sistema circulatorio. Puede ser externa (visible) o interna (oculta), y su gravedad depende del volumen de sangre perdido, la velocidad de la pérdida y la localización. El reconocimiento y control temprano son vitales.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de Hemorragia</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Según el vaso afectado:</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Arterial:</strong> Sangre de color rojo brillante, sale a presión (pulsátil) sincronizada con el pulso. Es la más peligrosa y requiere control inmediato.</li>
                                                <li><strong>Venosa:</strong> Sangre de color rojo oscuro, fluye de manera continua. Puede ser abundante y también grave.</li>
                                                <li><strong>Capilar:</strong> Sangrado superficial, en "sábana", generalmente menos grave y se controla más fácilmente.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Según la localización:</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Externa:</strong> La sangre sale al exterior del cuerpo a través de una herida.</li>
                                                <li><strong>Interna:</strong> La sangre se acumula dentro de cavidades corporales (abdomen, tórax, pelvis) o en tejidos. Requiere alta sospecha.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y Síntomas Comunes</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Palidez de piel y mucosas.</li>
                                        <li>Piel fría y húmeda (diaforesis).</li>
                                        <li>Taquicardia (pulso rápido).</li>
                                        <li>Hipotensión (presión arterial baja) - puede ser un signo tardío.</li>
                                        <li>Taquipnea (respiración rápida).</li>
                                        <li>Alteración del estado mental: ansiedad, confusión, agitación, somnolencia o inconsciencia.</li>
                                        <li>Sed intensa.</li>
                                        <li>Llenado capilar retardado (&gt;2 segundos).</li>
                                        <li>En hemorragias internas: hematomas, distensión abdominal, dolor, rigidez.</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'pathophysiology' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Respuesta Fisiológica a la Pérdida de Sangre</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El cuerpo intenta compensar la pérdida de sangre mediante varios mecanismos:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>Vasoconstricción periférica:</strong> Para redirigir la sangre a órganos vitales.</li>
                                        <li><strong>Aumento de la frecuencia cardíaca (taquicardia):</strong> Para mantener el gasto cardíaco.</li>
                                        <li><strong>Aumento de la contractilidad cardíaca.</strong></li>
                                        <li><strong>Liberación de catecolaminas (adrenalina, noradrenalina):</strong> Potencian la respuesta cardiovascular.</li>
                                        <li><strong>Activación del sistema renina-angiotensina-aldosterona:</strong> Para retener sodio y agua.</li>
                                        <li><strong>Activación de la cascada de coagulación:</strong> Para formar un coágulo y detener el sangrado.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Shock Hipovolémico</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Es un estado de perfusión tisular inadecuada causado por un volumen intravascular insuficiente (pérdida de sangre o fluidos). Es una emergencia potencialmente mortal.
                                    </p>
                                    <h3 className="font-medium text-lg mt-4 mb-2 text-gray-800">Etapas del Shock (Clasificación ATLS simplificada):</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Parámetro</th>
                                                    <th className="py-2 px-4 border">Clase I (&lt;15%)</th>
                                                    <th className="py-2 px-4 border">Clase II (15-30%)</th>
                                                    <th className="py-2 px-4 border">Clase III (30-40%)</th>
                                                    <th className="py-2 px-4 border">Clase IV (&gt;40%)</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr><td className="py-2 px-4 border font-medium">Pérdida de sangre (ml)</td><td className="py-2 px-4 border">&lt;750</td><td className="py-2 px-4 border">750-1500</td><td className="py-2 px-4 border">1500-2000</td><td className="py-2 px-4 border">&gt;2000</td></tr>
                                                <tr><td className="py-2 px-4 border font-medium">Frecuencia Cardíaca</td><td className="py-2 px-4 border">&lt;100</td><td className="py-2 px-4 border">&gt;100</td><td className="py-2 px-4 border">&gt;120</td><td className="py-2 px-4 border">&gt;140</td></tr>
                                                <tr><td className="py-2 px-4 border font-medium">Presión Arterial</td><td className="py-2 px-4 border">Normal</td><td className="py-2 px-4 border">Normal/Disminuida</td><td className="py-2 px-4 border">Disminuida</td><td className="py-2 px-4 border">Muy Disminuida</td></tr>
                                                <tr><td className="py-2 px-4 border font-medium">Frecuencia Respiratoria</td><td className="py-2 px-4 border">14-20</td><td className="py-2 px-4 border">20-30</td><td className="py-2 px-4 border">30-40</td><td className="py-2 px-4 border">&gt;35</td></tr>
                                                <tr><td className="py-2 px-4 border font-medium">Estado Mental</td><td className="py-2 px-4 border">Ansioso leve</td><td className="py-2 px-4 border">Ansioso moderado</td><td className="py-2 px-4 border">Ansioso, confuso</td><td className="py-2 px-4 border">Confuso, letárgico</td></tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        <strong>Shock Compensado:</strong> El cuerpo aún puede mantener la presión arterial y la perfusión a órganos vitales. Signos sutiles.
                                        <br/>
                                        <strong>Shock Descompensado:</strong> Los mecanismos compensatorios fallan, la presión arterial cae y la perfusión tisular se ve comprometida. Signos evidentes.
                                        <br/>
                                        <strong>Shock Irreversible:</strong> Daño celular extenso, fallo multiorgánico. Alta mortalidad a pesar del tratamiento.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios del Manejo (XABCDE)</h2>
                                     <p className="text-gray-700 leading-relaxed">
                                        La prioridad en trauma con hemorragia es el control de la misma. Se sigue la nemotecnia XABCDE:
                                    </p>
                                    <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                        <li><strong>X:</strong> Control de Hemorragia Exanguinante (la que mata primero).</li>
                                        <li><strong>A:</strong> Vía Aérea permeable con control cervical.</li>
                                        <li><strong>B:</strong> Ventilación y oxigenación adecuadas.</li>
                                        <li><strong>C:</strong> Circulación (control de otras hemorragias, pulso, perfusión, accesos venosos).</li>
                                        <li><strong>D:</strong> Déficit Neurológico (evaluación neurológica).</li>
                                        <li><strong>E:</strong> Exposición y Entorno (desvestir para evaluar, prevenir hipotermia).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Control de Hemorragias Externas</h2>
                                    <ol className="list-decimal list-inside space-y-3 text-gray-700">
                                        <li>
                                            <strong>Presión Directa:</strong> Aplicar presión firme y constante sobre la herida con un apósito limpio o la mano enguantada. Es la primera y más efectiva medida. Mantener por varios minutos.
                                        </li>
                                        <li>
                                            <strong>Elevación:</strong> Elevar la extremidad lesionada por encima del nivel del corazón (si no hay sospecha de fractura), junto con la presión directa.
                                        </li>
                                        <li>
                                            <strong>Apósitos y Vendajes:</strong>
                                            <ul className="list-disc list-inside ml-4 space-y-1">
                                                <li>Utilizar apósitos estériles o limpios.</li>
                                                <li>Aplicar un vendaje compresivo si la presión directa manual no es suficiente o se necesita liberar las manos. No debe ser tan apretado que corte la circulación distal.</li>
                                                <li><strong>Agentes Hemostáticos:</strong> Si están disponibles y protocolizados, pueden usarse en heridas profundas o juncionales donde el torniquete no es aplicable. Se aplican directamente en la herida y se combinan con presión directa.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Torniquete:</strong>
                                            <ul className="list-disc list-inside ml-4 space-y-1">
                                                <li><strong>Indicaciones:</strong> Hemorragia arterial masiva en una extremidad que no se controla con presión directa. Amputaciones traumáticas con sangrado activo.</li>
                                                <li><strong>Aplicación:</strong> Colocar 5-7 cm (2-3 pulgadas) proximal a la herida (más cerca del torso), nunca sobre una articulación. Apretar hasta que el sangrado se detenga y desaparezca el pulso distal. Anotar la hora de aplicación. Un segundo torniquete puede ser necesario.</li>
                                                <li>Considerar el dolor asociado y manejarlo según protocolo.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <strong>Puntos de Presión Arterial:</strong> Aplicar presión sobre la arteria principal que irriga la zona lesionada (ej. femoral, braquial). Es una medida temporal mientras se prepara otro método.
                                        </li>
                                    </ol>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de Hemorragias Internas</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Sospechar en todo paciente traumatizado con signos de shock sin hemorragia externa evidente.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li>Manejo del shock (ver abajo).</li>
                                        <li>Inmovilización de fracturas (especialmente pelvis y fémur, que pueden sangrar profusamente).</li>
                                        <li>Transporte rápido y prioritario a un centro con capacidad quirúrgica.</li>
                                        <li>No retrasar el traslado con procedimientos innecesarios en la escena.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo del Shock Hipovolémico</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Posición:</strong> Decúbito supino. Trendelenburg modificado (elevar piernas) puede considerarse si no hay trauma abdominal o craneal.</li>
                                        <li><strong>Oxigenoterapia:</strong> Administrar oxígeno a alto flujo (10-15 L/min con mascarilla con reservorio).</li>
                                        <li><strong>Control de la Temperatura:</strong> Prevenir la hipotermia cubriendo al paciente con mantas (incluso en climas cálidos). La hipotermia empeora la coagulopatía.</li>
                                        <li><strong>Acceso Vascular:</strong> Canalizar una o dos vías venosas periféricas de grueso calibre (ej. 14G, 16G).</li>
                                        <li>
                                            <strong>Fluidoterapia (Resucitación con fluidos):</strong>
                                            <ul className="list-disc list-inside ml-4 space-y-1">
                                                <li>Administrar cristaloides isotónicos (Solución Salina 0.9% o Ringer Lactato) tibios si es posible.</li>
                                                <li>En trauma, se aboga por la "hipotensión permisiva" en pacientes sin Traumatismo Craneoencefálico (TCE) severo, administrando bolos de 250-500 ml hasta alcanzar una PAS de 80-90 mmHg o la recuperación del pulso radial. El objetivo es mantener perfusión, no normalizar la TA, hasta el control quirúrgico de la hemorragia.</li>
                                                <li>En pacientes con TCE, se busca una PAS mayor a 100-110 mmHg.</li>
                                                <li>Monitorizar la respuesta a los fluidos (mejoría de FC, TA, estado mental, llenado capilar).</li>
                                            </ul>
                                        </li>
                                        <li><strong>Transporte Rápido:</strong> El tratamiento definitivo del shock hemorrágico severo es quirúrgico.</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos Clínicos para Análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Herida por arma blanca en muslo</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Joven de 25 años encontrado en la calle con una herida punzante en la cara anterior del muslo derecho. Presenta sangrado activo, rojo brillante y pulsátil. Está pálido y ansioso.
                                    </p>
                                    <h4 className="font-medium mb-2">Evaluación Inicial (XABCDE):</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>X: Hemorragia arterial exanguinante en muslo derecho.</li>
                                        <li>A: Vía aérea permeable, habla frases cortas.</li>
                                        <li>B: FR 26/min, superficial. SpO2 94% (aire ambiente).</li>
                                        <li>C: FC 120/min, filiforme. TA 90/60 mmHg. Piel pálida, fría y sudorosa. Llenado capilar 3 seg.</li>
                                        <li>D: Alerta, orientado pero ansioso (GCS 15).</li>
                                        <li>E: Herida visible en muslo, resto del cuerpo sin lesiones evidentes inicialmente. Temperatura 36.0°C.</li>
                                    </ul>
                                    <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>Aplicar presión directa firme sobre la herida con apósitos.</li>
                                        <li>Si no cede, aplicar torniquete proximal a la herida. Anotar hora.</li>
                                        <li>Administrar oxígeno a alto flujo.</li>
                                        <li>Posición supina. Prevenir hipotermia.</li>
                                        <li>Canalizar acceso IV de grueso calibre. Iniciar fluidoterapia según protocolo (hipotensión permisiva).</li>
                                        <li>Monitorización continua de signos vitales y estado neurológico.</li>
                                        <li>Traslado urgente a centro hospitalario con capacidad quirúrgica.</li>
                                    </ol>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Caída de altura con sospecha de hemorragia interna</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Varón de 50 años que cayó de un andamio (aprox. 3 metros). Se queja de dolor abdominal intenso. No hay sangrado externo visible.
                                    </p>
                                    <h4 className="font-medium mb-2">Evaluación Inicial (XABCDE):</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                        <li>X: No hemorragia externa exanguinante.</li>
                                        <li>A: Vía aérea permeable. Control cervical manual.</li>
                                        <li>B: FR 28/min. Murmullo vesicular presente bilateral. SpO2 95% (aire ambiente).</li>
                                        <li>C: FC 130/min, débil. TA 85/50 mmHg. Piel pálida y fría. Abdomen distendido y doloroso a la palpación. Pelvis estable.</li>
                                        <li>D: Consciente, orientado, quejumbroso (GCS 14 - confusión leve).</li>
                                        <li>E: Exponer abdomen, buscar otros traumatismos. Prevenir hipotermia.</li>
                                    </ul>
                                    <h4 className="font-medium mt-3 mb-2">Manejo Correcto:</h4>
                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                        <li>Alta sospecha de hemorragia interna (abdominal/pélvica).</li>
                                        <li>Inmovilización espinal completa (collarín, tabla espinal).</li>
                                        <li>Administrar oxígeno a alto flujo.</li>
                                        <li>Canalizar dos accesos IV de grueso calibre. Iniciar fluidoterapia con precaución (objetivo PAS 80-90 mmHg).</li>
                                        <li>Manejo de la hipotermia.</li>
                                        <li>Monitorización continua.</li>
                                        <li>Traslado prioritario a un centro de trauma. Notificar al hospital receptor.</li>
                                    </ol>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* FAQ Section */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
                                                <span>{faq.question}</span>
                                                <ChevronUpIcon
                                                    className={`${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700">
                                                {faq.answer}
                                            </Disclosure.Panel>
                                        </div>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    </section>

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y Recursos Adicionales</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía Principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>NAEMT. (2023). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (10ª edición). Jones & Bartlett Learning.</li>
                                    <li>American College of Surgeons Committee on Trauma. (2018). <em>Advanced Trauma Life Support (ATLS) Student Course Manual</em> (10ª edición).</li>
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en Línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.stopthebleed.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Stop the Bleed Campaign</a></li>
                                    <li><a href="https://www.ems1.com/hemorrhage-control" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre Control de Hemorragias</a></li>
                                    <li><a href="https://www.jems.com/patient-care/trauma/hemorrhage-control/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de Control de Hemorragias</a></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
