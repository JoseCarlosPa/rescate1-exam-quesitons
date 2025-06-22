import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./FeetInjuries.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {GiMorgueFeet} from "react-icons/gi";

export default function FeetInjuries(){
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <GiMorgueFeet className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones Ortopédicas</h1>
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
                            to={`${AllRoutes.FEET_INJURIES}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1hA3-7Yh-8XEeliOwZYnRbLHdM8KQ8_Vi/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        <a href="https://drive.google.com/file/d/1Q2OoOsnAwDOagRetzk2_5x-gVg3tuxDG/view?usp=share_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Pon a prueba tus conocimientos</h3>
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las lesiones ortopédicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las lesiones ortopédicas comprenden daños en huesos, articulaciones, músculos, tendones y ligamentos, siendo frecuentes en el entorno prehospitalario. Incluyen fracturas, luxaciones, esguinces y lesiones musculares, y pueden comprometer la función y la vida si no se tratan adecuadamente.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        El reconocimiento temprano y el manejo correcto son esenciales para prevenir complicaciones como hemorragia, shock, daño neurovascular o discapacidad permanente.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dolor localizado</li>
                                            <li>Deformidad visible</li>
                                            <li>Inflamación y edema</li>
                                            <li>Impotencia funcional</li>
                                            <li>Crepitación ósea</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Hematoma o equimosis</li>
                                            <li>Heridas abiertas (fracturas expuestas)</li>
                                            <li>Pérdida de sensibilidad o movimiento</li>
                                            <li>Acortamiento o rotación de la extremidad</li>
                                            <li>Sangrado activo</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Lesiones ortopédicas frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Fracturas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Fractura cerrada</li>
                                                <li>Fractura expuesta</li>
                                                <li>Fractura conminuta</li>
                                                <li>Fractura en tallo verde (niños)</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Otras lesiones</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Luxaciones</li>
                                                <li>Esguinces</li>
                                                <li>Lesiones musculares y tendinosas</li>
                                                <li>Lesiones por aplastamiento</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía musculoesquelética básica</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El sistema musculoesquelético está formado por huesos, músculos, articulaciones, tendones y ligamentos. Los huesos proporcionan soporte y protección, mientras que los músculos permiten el movimiento. Las articulaciones conectan los huesos y los ligamentos estabilizan estas uniones.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Huesos:</strong> Estructuras rígidas que forman el esqueleto.</li>
                                            <li><strong>Articulaciones:</strong> Unen dos o más huesos y permiten el movimiento.</li>
                                            <li><strong>Músculos:</strong> Permiten el movimiento voluntario e involuntario.</li>
                                            <li><strong>Ligamentos:</strong> Bandas de tejido que unen hueso con hueso.</li>
                                            <li><strong>Tendones:</strong> Unen músculo con hueso.</li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            La irrigación sanguínea y la inervación son fundamentales para la función y recuperación de los tejidos.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Human_skeleton_front_es.svg"
                                            alt="Anatomía del sistema musculoesquelético"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiología y función</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Función ósea</h3>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Sostén y protección de órganos vitales</li>
                                                <li>Producción de células sanguíneas (médula ósea)</li>
                                                <li>Almacenamiento de minerales</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Función muscular y articular</h3>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Movimiento y locomoción</li>
                                                <li>Estabilidad articular</li>
                                                <li>Absorción de impactos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación neurovascular</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Parámetro</th>
                                                <th className="py-2 px-4 border">¿Qué evaluar?</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Circulación</td>
                                                <td className="py-2 px-4 border">Color, temperatura, pulso distal, relleno capilar</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Sensibilidad</td>
                                                <td className="py-2 px-4 border">Respuesta al tacto, dolor, parestesias</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border font-medium">Movimiento</td>
                                                <td className="py-2 px-4 border">Movimientos activos y pasivos de la extremidad</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo prehospitalario básico</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación inicial</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Seguridad de la escena</li>
                                                <li>Evaluación primaria (ABCDE)</li>
                                                <li>Control de hemorragias</li>
                                                <li>Evaluación neurovascular distal</li>
                                                <li>Inmovilización adecuada</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Principios de inmovilización</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Inmovilizar articulación proximal y distal a la lesión</li>
                                                <li>No intentar realinear fracturas expuestas</li>
                                                <li>Colocar férulas según el tipo de lesión</li>
                                                <li>Revaluar circulación, sensibilidad y movimiento tras inmovilizar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Lesión</th>
                                                <th className="py-2 px-4 border">Manejo inicial</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border">Fractura cerrada</td>
                                                <td className="py-2 px-4 border">Inmovilizar, aplicar frío local, elevar extremidad</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Fractura expuesta</td>
                                                <td className="py-2 px-4 border">Cubrir con apósito estéril, controlar hemorragia, inmovilizar</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Luxación</td>
                                                <td className="py-2 px-4 border">Inmovilizar en la posición encontrada, no reducir</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Esguince</td>
                                                <td className="py-2 px-4 border">Reposo, hielo, compresión, elevación (RICE)</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Lesión muscular</td>
                                                <td className="py-2 px-4 border">Reposo, hielo, compresión, elevación</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Complicaciones y traslado</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Complicaciones</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Shock hipovolémico</li>
                                                <li>Daño neurovascular</li>
                                                <li>Infección (fracturas expuestas)</li>
                                                <li>Síndrome compartimental</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Criterios de traslado urgente</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Fracturas expuestas</li>
                                                <li>Lesiones con sangrado activo</li>
                                                <li>Compromiso neurovascular</li>
                                                <li>Politraumatismo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Fractura expuesta de pierna</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Masculino de 30 años sufre accidente en motocicleta. Presenta deformidad y sangrado activo en pierna derecha, con hueso visible.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Dolor intenso, deformidad y exposición ósea</li>
                                            <li>Sangrado activo</li>
                                            <li>Pulso distal débil</li>
                                            <li>Movilidad limitada</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Controlar hemorragia con presión directa y apósito estéril</li>
                                            <li>Inmovilizar extremidad sin intentar realinear</li>
                                            <li>Evaluar y documentar pulso distal antes y después</li>
                                            <li>Traslado urgente a hospital</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Luxación de hombro</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 22 años cae durante partido de voleibol. Presenta dolor intenso y deformidad en hombro derecho, no puede mover el brazo.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Dolor intenso y deformidad en hombro</li>
                                            <li>Impotencia funcional</li>
                                            <li>Pulso radial presente</li>
                                            <li>Sin heridas abiertas</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Inmovilizar en la posición encontrada</li>
                                            <li>Colocar cabestrillo y vendaje</li>
                                            <li>Revaluar pulso distal</li>
                                            <li>Traslado a hospital</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Esguince de tobillo</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Adolescente de 16 años sufre torcedura de tobillo durante actividad deportiva. Presenta dolor, inflamación y dificultad para apoyar el pie.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Dolor localizado en tobillo</li>
                                            <li>Edema y equimosis</li>
                                            <li>Movilidad limitada</li>
                                            <li>Pulso pedio presente</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Reposo e inmovilización</li>
                                            <li>Aplicar hielo local</li>
                                            <li>Elevar extremidad</li>
                                            <li>Traslado si hay duda diagnóstica o dolor intenso</li>
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
                                    <Disclosure key={idx}>
                                        {({ open }) => (
                                            <div className="border rounded-lg overflow-hidden">
                                                <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                                            </div>
                                        )}
                                    </Disclosure>
                                ))}
                            </div>
                        </section>

                        {/* Referencias y Recursos */}
                        <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                        <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                        <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.ems1.com/airway-management/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre manejo de vía aérea</a></li>
                                        <li><a href="https://www.jems.com/patient-care/airway-respiratory/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de cuidado respiratorio</a></li>
                                        <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Medscape - Referencias médicas y calculadoras</li>
                                        <li>ALS Simulator - Escenarios de práctica</li>
                                        <li>Paramedicine - Guías clínicas y medicamentos</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Footer */}
                    <footer className="mt-12 text-center text-gray-500 text-sm">
                        <p>© 2023 - Todos los derechos reservados</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

