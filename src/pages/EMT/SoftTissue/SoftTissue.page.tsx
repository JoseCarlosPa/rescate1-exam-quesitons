import React, {useState} from "react";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SoftTissue.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {CiMedicalCross} from "react-icons/ci";

export default function SoftTissue() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div
                className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <CiMedicalCross
                                className="w-24 h-24 mb-1 text-red-500"/> {/* Changed color for visual distinction of topic */}
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones de Tejido Blando</h1>
                        <p className="text-sm italic mb-4">Guía de estudio para Técnicos en Emergencias Médicas</p>
                        <div className="flex justify-center">
                            <NavLink
                                to={AllRoutes.EMT}
                                className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                                <IoReturnDownBack className="w-5 h-5 my-auto"/>
                                <p className="text-lg">Regresar</p>
                            </NavLink>
                        </div>
                    </header>

                    {/* Menú rápido de recursos */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to={`${AllRoutes.SOFT_TISSUE}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1XxadP7wDFrYoGun4VOk-ZFKi0PeDyZWy/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus
                                conocimientos</h3>
                            <button
                                onClick={() => setShowQuickQuiz(false)}
                                className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                                Cerrar Quiz
                            </button>
                        </div>
                    )}

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
                                onClick={() => setActiveTab('anatomy')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'anatomy'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Anatomía y Fisiología
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Introducción
                                        a las Lesiones de Tejido Blando</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las lesiones de tejido blando son algunas de las emergencias más comunes que
                                        atienden los TMEs. Comprenden una amplia gama de heridas que afectan la piel,
                                        músculos, nervios, vasos sanguíneos y órganos subyacentes. Estas pueden variar
                                        desde abrasiones menores y contusiones hasta laceraciones severas, avulsiones y
                                        amputaciones que amenazan la vida.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Según el libro de AAOS (Atención Médica Prehospitalaria de Emergencia, 11ª
                                        edición), un manejo adecuado de estas lesiones es crucial para prevenir
                                        infecciones, controlar hemorragias, minimizar el dolor y preservar la función.
                                        Este módulo se enfoca en la evaluación y el manejo prehospitalario de las
                                        lesiones de tejido blando.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Clasificación
                                        General de Heridas</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Heridas cerradas:</strong> La piel permanece intacta, pero hay
                                                daño en los tejidos subyacentes. Ejemplos: contusiones, hematomas,
                                                lesiones por aplastamiento internas.
                                            </li>
                                            <li><strong>Heridas abiertas:</strong> La piel está rota, exponiendo los
                                                tejidos internos. Ejemplos: abrasiones, laceraciones, punciones,
                                                avulsiones, amputaciones.
                                            </li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Quemaduras:</strong> Lesiones causadas por calor, químicos,
                                                electricidad o radiación. Se clasifican por profundidad y extensión. (Se
                                                tratan en detalle en otro módulo, pero es importante reconocerlas).
                                            </li>
                                        </ul>
                                    </div>
                                    <p className="text-gray-700 mt-3 leading-relaxed">
                                        La evaluación precisa del tipo de herida, su profundidad, la extensión del daño
                                        y el potencial de contaminación son pasos fundamentales para el TME.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios
                                        de Evaluación y Manejo (Según AAOS)</h2>
                                    <div className="space-y-3">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-1 text-orange-700">1. Seguridad de la
                                                Escena y BSI</h3>
                                            <p className="text-gray-700">Priorizar la seguridad personal y utilizar el
                                                equipo de protección individual adecuado.</p>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-1 text-blue-700">2. Evaluación
                                                Primaria (XABCDE)</h3>
                                            <p className="text-gray-700">Identificar y tratar hemorragias exanguinantes
                                                (X), asegurar vía aérea (A), ventilación (B), circulación (C), déficit
                                                neurológico (D) y exposición/ambiente (E).</p>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-1 text-green-700">3. Control de
                                                Hemorragia</h3>
                                            <p className="text-gray-700">Aplicar presión directa, elevación, vendajes
                                                compresivos, y considerar torniquetes o agentes hemostáticos para
                                                hemorragias severas.</p>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-1 text-yellow-700">4. Cuidado de la
                                                Herida</h3>
                                            <p className="text-gray-700">Limpiar la herida si es posible (según
                                                protocolos), cubrir con apósitos estériles y vendar adecuadamente para
                                                protegerla de mayor contaminación.</p>
                                        </div>
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-1 text-purple-700">5. Manejo del
                                                Shock</h3>
                                            <p className="text-gray-700">Reconocer y tratar el shock hipovolémico
                                                manteniendo la temperatura corporal, administrando oxígeno y realizando
                                                un traslado rápido.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía
                                            de los Tejidos Blandos</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            Los tejidos blandos del cuerpo incluyen la piel, músculos, tejido graso,
                                            vasos sanguíneos, nervios, tendones y ligamentos. La piel es el órgano más
                                            grande y cumple funciones vitales:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Epidermis:</strong> Capa externa, protectora y resistente al
                                                agua.
                                            </li>
                                            <li><strong>Dermis:</strong> Capa intermedia que contiene folículos pilosos,
                                                glándulas sebáceas y sudoríparas, vasos sanguíneos y terminaciones
                                                nerviosas.
                                            </li>
                                            <li><strong>Hipodermis (Tejido subcutáneo):</strong> Capa más profunda,
                                                compuesta por tejido adiposo y conectivo, que aísla y almacena energía.
                                            </li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            Los músculos permiten el movimiento, los vasos sanguíneos transportan
                                            nutrientes y oxígeno, y los nervios transmiten sensaciones e impulsos
                                            motores. El conocimiento de estas estructuras es esencial para comprender el
                                            impacto de las lesiones.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                                        <img
                                            src="/src/assets/aaos.jpg" // Placeholder - Consider using a more specific image for skin layers or soft tissues
                                            alt="Capas de la piel y tejidos blandos"
                                            className="rounded-lg shadow-md max-w-full h-auto max-h-80 object-contain"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología
                                        de la Lesión y Curación</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Respuesta a la
                                                Lesión</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Cuando los tejidos blandos se lesionan, el cuerpo inicia una respuesta
                                                inflamatoria caracterizada por:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li><strong>Hemostasia:</strong> Vasoconstricción y formación de
                                                    coágulos para detener el sangrado.
                                                </li>
                                                <li><strong>Inflamación:</strong> Aumento del flujo sanguíneo (causando
                                                    enrojecimiento y calor), llegada de células inmunitarias y
                                                    liberación de mediadores químicos (causando dolor e hinchazón).
                                                </li>
                                                <li><strong>Proliferación:</strong> Formación de nuevo tejido
                                                    (granulación) y vasos sanguíneos.
                                                </li>
                                                <li><strong>Remodelación:</strong> Maduración y reorganización del
                                                    tejido cicatricial.
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Factores que Afectan
                                                la Curación</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La capacidad de curación puede verse afectada por diversos factores:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Edad del paciente</li>
                                                <li>Estado nutricional</li>
                                                <li>Enfermedades crónicas (diabetes, enfermedad vascular)</li>
                                                <li>Infección</li>
                                                <li>Tipo y severidad de la herida</li>
                                                <li>Medicación (ej. esteroides, anticoagulantes)</li>
                                                <li>Tabaquismo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                                        Importantes para TMEs</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Para el TME, es crucial entender que una lesión aparentemente superficial puede
                                        ocultar daños significativos en estructuras más profundas. La evaluación debe
                                        incluir la búsqueda de signos de lesión vascular (pulsos distales, color,
                                        temperatura) y nerviosa (sensibilidad, motricidad).
                                        La AAOS enfatiza la importancia de una evaluación sistemática para no pasar por
                                        alto lesiones ocultas que puedan comprometer la extremidad o la vida del
                                        paciente.
                                    </p>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo
                                        General de Lesiones de Tejido Blando (AAOS)</h2>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        El manejo prehospitalario de las lesiones de tejido blando se centra en
                                        controlar la hemorragia, prevenir la contaminación, preservar el tejido dañado y
                                        tratar el shock. Siga siempre los protocolos locales y las directrices de la
                                        AAOS.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Control de
                                                Hemorragia</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Presión directa:</strong> Aplicar con una gasa estéril sobre
                                                    la herida.
                                                </li>
                                                <li><strong>Elevación:</strong> Elevar la extremidad lesionada por
                                                    encima del nivel del corazón (si no hay sospecha de fractura).
                                                </li>
                                                <li><strong>Vendaje compresivo:</strong> Aplicar un vendaje firme sobre
                                                    el apósito para mantener la presión.
                                                </li>
                                                <li><strong>Torniquete:</strong> Utilizar para hemorragias arteriales
                                                    severas en extremidades que no se controlan con otros métodos.
                                                    Anotar la hora de aplicación.
                                                </li>
                                                <li><strong>Agentes hemostáticos:</strong> Considerar según protocolo
                                                    para hemorragias difíciles de controlar.
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Cuidado de Heridas
                                                Abiertas Específicas</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Abrasiones:</strong> Limpiar si es posible, cubrir con
                                                    apósito estéril.
                                                </li>
                                                <li><strong>Laceraciones:</strong> Controlar hemorragia, cubrir. Evaluar
                                                    profundidad y posible daño a estructuras subyacentes.
                                                </li>
                                                <li><strong>Punciones:</strong> No retirar objetos empalados;
                                                    estabilizarlos en su lugar. Cubrir la herida alrededor del objeto.
                                                </li>
                                                <li><strong>Avulsiones:</strong> Si el colgajo de piel está presente,
                                                    reposicionarlo cuidadosamente en su lugar (si está limpio) antes de
                                                    vendar. Si está separado, tratar como amputación parcial.
                                                </li>
                                                <li><strong>Amputaciones:</strong> Controlar hemorragia del muñón.
                                                    Envolver la parte amputada en gasa estéril humedecida con solución
                                                    salina, colocar en bolsa plástica y luego en hielo (no directamente
                                                    sobre el hielo).
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de
                                        Heridas Cerradas</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Aunque la piel no esté rota, las heridas cerradas pueden ser graves. El manejo
                                        se enfoca en el acrónimo RICES (o PRICE):
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                        <li><strong>R</strong>est (Reposo): Evitar el movimiento de la zona afectada.
                                        </li>
                                        <li><strong>I</strong>ce (Hielo): Aplicar frío local para reducir hinchazón y
                                            dolor (no directamente sobre la piel).
                                        </li>
                                        <li><strong>C</strong>ompression (Compresión): Aplicar un vendaje elástico para
                                            limitar la hinchazón.
                                        </li>
                                        <li><strong>E</strong>levation (Elevación): Elevar la parte lesionada.</li>
                                        <li><strong>S</strong>plinting (Inmovilización): Inmovilizar si se sospecha
                                            fractura o lesión grave.
                                        </li>
                                    </ul>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Vigilar signos de síndrome compartimental en lesiones por aplastamiento o
                                        hematomas extensos (dolor desproporcionado, palidez, ausencia de pulso,
                                        parestesias, parálisis).
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones
                                        Especiales</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Heridas Penetrantes
                                                en Tórax (Neumotórax Abierto)</h3>
                                            <p className="text-gray-700">Cubrir con un sello torácico oclusivo de tres
                                                lados (o según protocolo local) para permitir la salida de aire y
                                                prevenir la entrada.</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Evisceración
                                                Abdominal</h3>
                                            <p className="text-gray-700">No intentar reintroducir los órganos. Cubrir
                                                con un apósito estéril grande humedecido con solución salina y luego con
                                                un vendaje oclusivo seco para mantener el calor y la humedad.</p>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Lesiones por
                                                Mordedura</h3>
                                            <p className="text-gray-700">Alto riesgo de infección. Controlar hemorragia,
                                                limpiar si es posible y cubrir. Considerar la necesidad de profilaxis
                                                antirrábica y antitetánica.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos Clínicos:
                                    Lesiones de Tejido Blando</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 1: Laceración Profunda
                                        con Hemorragia Arterial</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un trabajador de construcción de 35 años sufre una laceración en el antebrazo
                                        derecho con una sierra circular. Presenta sangrado rojo brillante y pulsátil.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>X (Hemorragia Exanguinante):</strong> Hemorragia arterial activa
                                                visible en antebrazo.
                                            </li>
                                            <li><strong>A (Vía Aérea):</strong> Permeable, hablando con frases
                                                completas.
                                            </li>
                                            <li><strong>B (Ventilación):</strong> FR 20/min, adecuada profundidad. SpO₂
                                                98% (aire ambiente inicial).
                                            </li>
                                            <li><strong>C (Circulación):</strong> FC 110/min, pulso radial derecho
                                                débil, piel pálida y fría distal a la lesión. Relleno capilar mayor a 2
                                                seg en mano derecha.
                                            </li>
                                            <li><strong>D (Déficit Neurológico):</strong> Alerta (AVDI), orientado,
                                                ansioso.
                                            </li>
                                            <li><strong>E (Exposición/Ambiente):</strong> Laceración de aproximadamente
                                                10 cm, profunda, en cara anterior del antebrazo derecho.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                                            (AAOS):</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar BSI y seguridad de la escena.</li>
                                            <li>Aplicar presión directa firme sobre la herida con apósitos estériles.
                                            </li>
                                            <li>Si la hemorragia persiste, aplicar un vendaje compresivo sobre los
                                                apósitos.
                                            </li>
                                            <li>Si la hemorragia arterial no se controla, aplicar un torniquete
                                                comercial proximal a la herida en el brazo. Anotar la hora de
                                                aplicación.
                                            </li>
                                            <li>Elevar la extremidad por encima del nivel del corazón (si no hay
                                                sospecha de fractura asociada que lo contraindique).
                                            </li>
                                            <li>Administrar oxígeno a alto flujo (ej. mascarilla no recirculante a 15
                                                L/min).
                                            </li>
                                            <li>Tratar para shock: mantener al paciente abrigado, colocar en posición
                                                supina (si es tolerada y no hay otras lesiones).
                                            </li>
                                            <li>Traslado rápido al centro útil más cercano. Reevaluar estado
                                                hemodinámico y torniquete durante el traslado.
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Objeto Empalado en
                                        Muslo</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un joven de 18 años cae de su bicicleta sobre una valla rota, resultando con una
                                        varilla metálica empalada en la cara anterior de su muslo izquierdo.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>A, B:</strong> Vía aérea permeable, ventilación espontánea y
                                                adecuada.
                                            </li>
                                            <li><strong>C:</strong> FC 90/min, TA 120/80 mmHg. Pulsos pedio y tibial
                                                posterior izquierdos presentes y simétricos con el lado no lesionado. No
                                                hay sangrado externo masivo visible alrededor del objeto.
                                            </li>
                                            <li><strong>D:</strong> Alerta y orientado, refiere dolor intenso en el
                                                muslo.
                                            </li>
                                            <li><strong>E:</strong> Varilla metálica de aproximadamente 1 cm de diámetro
                                                empalada en el muslo izquierdo. La zona circundante está tensa pero sin
                                                hematoma expansivo inmediato.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                                            (AAOS):</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar BSI y seguridad de la escena.</li>
                                            <li>NO intentar retirar el objeto empalado.</li>
                                            <li>Estabilizar el objeto en su lugar utilizando apósitos voluminosos y
                                                vendajes para minimizar el movimiento. Se puede usar un vaso de cartón
                                                cortado o similar para proteger el objeto.
                                            </li>
                                            <li>Controlar cualquier sangrado visible aplicando presión directa alrededor
                                                del sitio de entrada, sin ejercer presión sobre el objeto mismo.
                                            </li>
                                            <li>Evaluar y documentar el estado neurovascular distal (pulsos, color,
                                                temperatura, sensibilidad, motricidad) de la extremidad lesionada antes
                                                y después de la inmovilización.
                                            </li>
                                            <li>Administrar oxígeno según necesidad.</li>
                                            <li>Inmovilizar la extremidad afectada en una férula si es necesario para
                                                prevenir el movimiento del objeto durante el traslado.
                                            </li>
                                            <li>Traslado cuidadoso y rápido al hospital apropiado. Notificar al hospital
                                                receptor sobre la naturaleza de la lesión.
                                            </li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Evisceración
                                        Abdominal</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Un hombre de 40 años es encontrado tras una agresión con arma blanca en el
                                        abdomen. Presenta una herida abierta con exposición de asas intestinales.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2 text-gray-700">Evaluación Clave (AAOS):</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>A:</strong> Vía aérea permeable.</li>
                                            <li><strong>B:</strong> FR 22/min, superficial.</li>
                                            <li><strong>C:</strong> FC 115/min, TA 100/60 mmHg. Piel pálida y sudorosa.
                                            </li>
                                            <li><strong>D:</strong> Responde a estímulos verbales, desorientado en
                                                tiempo.
                                            </li>
                                            <li><strong>E:</strong> Herida abdominal de ~8 cm en cuadrante inferior
                                                izquierdo con asas intestinales visibles y expuestas. No hay sangrado
                                                masivo activo de la herida en sí, pero sí de los tejidos circundantes.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2 text-gray-700">Manejo Prehospitalario
                                            (AAOS):</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar BSI y seguridad de la escena.</li>
                                            <li>NO intentar reintroducir los órganos expuestos en la cavidad
                                                abdominal.
                                            </li>
                                            <li>NO aplicar presión directa sobre los órganos eviscerados.</li>
                                            <li>Cubrir los órganos expuestos con un apósito estéril grande humedecido
                                                con solución salina estéril.
                                            </li>
                                            <li>Luego, cubrir el apósito húmedo con un vendaje oclusivo seco y grande
                                                (ej. plástico limpio o un campo estéril seco) para mantener la humedad y
                                                el calor, y para prevenir mayor contaminación. Asegurar los bordes del
                                                vendaje oclusivo.
                                            </li>
                                            <li>Administrar oxígeno a alto flujo.</li>
                                            <li>Tratar para shock: mantener al paciente caliente, colocar en posición
                                                supina con las rodillas flexionadas si ayuda a reducir la tensión en el
                                                abdomen (si no hay otras lesiones que lo contraindiquen).
                                            </li>
                                            <li>Establecer acceso IV según protocolo y considerar la administración de
                                                fluidos si hay signos de hipoperfusión.
                                            </li>
                                            <li>Traslado rápido y urgente al centro de trauma apropiado.</li>
                                        </ol>
                                    </div>
                                </div>

                            </div>
                        )}

                        {/* FAQ Section */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                            <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>

                            <div className="space-y-4">
                                {faqData.map((faq, idx) => (
                                    <Disclosure key={idx} as="div" className="border rounded-lg overflow-hidden">
                                        {({open}) => ( // Type inference for open and return type
                                            <React.Fragment>
                                                <Disclosure.Button
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
                                                    <span>{faq.question}</span>
                                                    <ChevronUpIcon
                                                        className={`${
                                                            open ? "transform rotate-180" : ""
                                                        } h-5 w-5 text-gray-500`}
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700">
                                                    {faq.answer}
                                                </Disclosure.Panel>
                                            </React.Fragment>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        </section>

                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales para Lesiones de
                                Tejido Blando</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal y
                                        complementaria</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición).
                                            Jones & Bartlett Learning. (Referencia principal para este módulo)
                                        </li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª
                                            edición). (Relevante para el manejo de trauma en tejidos blandos)
                                        </li>
                                        <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.
                                            (Principios generales aplicables en el manejo del paciente traumatizado)
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea (URLs a
                                        verificar/actualizar)</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/trauma" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1
                                            - Artículos sobre manejo de trauma y heridas</a></li>
                                        <li><a href="https://www.jems.com/ems-insider/category/trauma/" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS
                                            - Sección de trauma y cuidado de heridas</a></li>
                                        <li><a href="https://www.stopthebleed.org" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">Stop
                                            the Bleed - Recursos para el control de hemorragias</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank"
                                               rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests
                                            - Videos educativos (buscar listas de reproducción sobre trauma/heridas)</a>
                                        </li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Medscape - Referencias médicas, información sobre medicamentos y
                                            calculadoras
                                        </li>
                                        <li>Guías de Práctica Clínica para Trauma (buscar en tiendas de apps) -
                                            Protocolos y guías actualizadas
                                        </li>
                                        <li>Simuladores de Casos de Trauma (buscar en tiendas de apps) - Para practicar
                                            escenarios de lesiones de tejidos blandos
                                        </li>
                                        <li>Paramedicine Clinical Guidelines - Guías clínicas y referencias para
                                            paramédicos
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

