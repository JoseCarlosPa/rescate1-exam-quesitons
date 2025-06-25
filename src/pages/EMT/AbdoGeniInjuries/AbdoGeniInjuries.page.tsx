import { NavLink } from "react-router";
import { AllRoutes } from "../../../components/Router/Router.constants.ts";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/16/solid";
import { faqData } from "./AbdoGeniInjuries.questions.ts";
import { IoReturnDownBack } from "react-icons/io5";
import { useState } from "react";
import { MdQuiz } from "react-icons/md";
import { BsBookHalf } from "react-icons/bs";
import { PiChalkboardTeacher } from "react-icons/pi";
import { CiMedicalCross } from "react-icons/ci";

export default function AbdoGeniInjuries() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <CiMedicalCross className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones abdominales y genitourinarias</h1>
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
                            to={`${AllRoutes.ABDO_GENI_INJURIES}/exam`}
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
                        <a href="https://drive.google.com/file/d/1qc1Y1h4Vhe90OGsIonMFQ1aSPp5fRBB4/view?usp=drive_link"
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
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'overview'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                Generalidades
                            </button>
                            <button
                                onClick={() => setActiveTab('anatomy')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'anatomy'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                Anatomía y Fisiología
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'treatment'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                Manejo Prehospitalario
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${activeTab === 'practice'
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las lesiones abdominales y genitourinarias?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las lesiones abdominales y genitourinarias comprenden un grupo de emergencias traumáticas que afectan los órganos internos del abdomen y el sistema genitourinario. Estas lesiones pueden ser resultado de traumatismos cerrados (como accidentes automovilísticos o caídas) o penetrantes (heridas por arma blanca o de fuego), y representan una causa importante de morbilidad y mortalidad en el ámbito prehospitalario.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        El reconocimiento temprano y el manejo adecuado son fundamentales para prevenir complicaciones graves como hemorragia interna, shock, peritonitis e insuficiencia orgánica.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas de alarma</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dolor abdominal localizado o difuso</li>
                                            <li>Distensión abdominal</li>
                                            <li>Rigidez o defensa muscular</li>
                                            <li>Hematuria (sangre en orina)</li>
                                            <li>Hematomas en flancos o región periumbilical</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Signos de shock (palidez, diaforesis, taquicardia, hipotensión)</li>
                                            <li>Heridas penetrantes o evisceración</li>
                                            <li>Vómito con sangre (hematemesis)</li>
                                            <li>Disuria o dificultad para orinar</li>
                                            <li>Lesiones visibles en genitales o periné</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos frecuentes de lesiones</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Abdominales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Lesión de bazo</li>
                                                <li>Lesión hepática</li>
                                                <li>Lesión intestinal</li>
                                                <li>Lesión de grandes vasos</li>
                                                <li>Perforación gástrica o intestinal</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Genitourinarias</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Lesión renal</li>
                                                <li>Lesión vesical (vejiga)</li>
                                                <li>Lesión uretral</li>
                                                <li>Lesión testicular o escrotal</li>
                                                <li>Lesión vulvar o vaginal</li>
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
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía relevante</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El abdomen se divide en cuatro cuadrantes y contiene órganos sólidos (hígado, bazo, riñones, páncreas) y órganos huecos (estómago, intestinos, vejiga). El retroperitoneo alberga estructuras como los riñones, grandes vasos y parte del páncreas.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Órganos sólidos:</strong> Mayor riesgo de hemorragia interna</li>
                                            <li><strong>Órganos huecos:</strong> Riesgo de peritonitis por derrame de contenido</li>
                                            <li><strong>Genitourinario:</strong> Riñones, uréteres, vejiga, uretra, órganos reproductores</li>
                                        </ul>
                                        <p className="text-gray-700 mt-4">
                                            Las lesiones pueden afectar uno o varios órganos, y la localización del dolor puede orientar el diagnóstico.
                                        </p>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Gray1220-es.png"
                                            alt="Anatomía abdominal y genitourinaria"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiopatología del trauma abdominal</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Trauma cerrado</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Generalmente causado por golpes directos, accidentes vehiculares o caídas. Puede provocar hemorragia interna sin signos externos evidentes.
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Lesión de órganos sólidos (bazo, hígado, riñón)</li>
                                                <li>Desgarros vasculares</li>
                                                <li>Hematomas retroperitoneales</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Trauma penetrante</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                Producido por objetos punzocortantes o proyectiles. Mayor riesgo de perforación de órganos huecos y evisceración.
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Heridas por arma blanca</li>
                                                <li>Heridas por arma de fuego</li>
                                                <li>Evisceración</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación prehospitalaria</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Parámetro</th>
                                                    <th className="py-2 px-4 border">Hallazgos clave</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Inspección</td>
                                                    <td className="py-2 px-4 border">Heridas, hematomas, distensión, evisceración</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Palpación</td>
                                                    <td className="py-2 px-4 border">Dolor, defensa, rigidez, crepitación</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Percusión</td>
                                                    <td className="py-2 px-4 border">Timpanismo, matidez</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Genitourinario</td>
                                                    <td className="py-2 px-4 border">Hematuria, sangre en meato uretral, lesiones genitales</td>
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo prehospitalario inicial</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Valoración y prioridades</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Evaluación ABCDE y control de hemorragias externas</li>
                                                <li>Oxigenoterapia si hay signos de shock</li>
                                                <li>Colocar al paciente en posición supina con piernas elevadas si hay hipotensión</li>
                                                <li>Evitar dar líquidos por vía oral</li>
                                                <li>Monitorización de signos vitales</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Intervenciones específicas</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>En evisceración: cubrir vísceras con apósitos húmedos estériles</li>
                                                <li>No intentar reintroducir órganos eviscerados</li>
                                                <li>En heridas penetrantes: no retirar objetos incrustados</li>
                                                <li>Inmovilización de pelvis si hay sospecha de fractura</li>
                                                <li>Rápido traslado a centro hospitalario</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tabla de intervenciones y consideraciones</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Situación</th>
                                                    <th className="py-2 px-4 border">Intervención</th>
                                                    <th className="py-2 px-4 border">Consideraciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Evisceración</td>
                                                    <td className="py-2 px-4 border">Cubrir con apósito húmedo estéril</td>
                                                    <td className="py-2 px-4 border">No reintroducir órganos, evitar hipotermia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Herida penetrante</td>
                                                    <td className="py-2 px-4 border">No retirar objeto, estabilizar</td>
                                                    <td className="py-2 px-4 border">Traslado urgente</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Hematuria</td>
                                                    <td className="py-2 px-4 border">Monitorizar, traslado</td>
                                                    <td className="py-2 px-4 border">Sospechar lesión renal o vesical</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Shock</td>
                                                    <td className="py-2 px-4 border">Oxígeno, posición supina, traslado rápido</td>
                                                    <td className="py-2 px-4 border">Evitar hipotermia, monitorizar</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo según tipo de lesión</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Trauma cerrado</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Evaluar mecanismo de lesión y signos de hemorragia interna</li>
                                                <li>Monitorizar signos vitales y nivel de conciencia</li>
                                                <li>Oxígeno suplementario si hay hipoxia</li>
                                                <li>Evitar movimientos bruscos</li>
                                                <li>Traslado inmediato</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Trauma penetrante</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>No retirar objetos incrustados</li>
                                                <li>Control de hemorragia externa</li>
                                                <li>Cubrir heridas abiertas</li>
                                                <li>Evitar presión directa sobre órganos eviscerados</li>
                                                <li>Traslado urgente</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Lesión genitourinaria</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Buscar sangre en orina o meato uretral</li>
                                                <li>No colocar sonda urinaria si hay sospecha de lesión uretral</li>
                                                <li>Control local de hemorragia</li>
                                                <li>Proteger genitales lesionados con apósitos estériles</li>
                                                <li>Traslado a centro especializado</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Trauma abdominal cerrado</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 30 años, motociclista, sufre accidente y presenta dolor abdominal intenso, palidez y taquicardia. No hay heridas externas evidentes.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24/min, SpO₂ 96%</li>
                                            <li>C: FC 120/min, TA 90/60 mmHg, piel fría y sudorosa</li>
                                            <li>D: Alerta, ansioso</li>
                                            <li>E: Dolor y distensión abdominal, sin heridas visibles</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Oxígeno suplementario</li>
                                            <li>Monitorización continua</li>
                                            <li>Evitar líquidos por vía oral</li>
                                            <li>Traslado urgente a hospital</li>
                                            <li>Evitar hipotermia</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Evisceración abdominal</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 25 años, herida por arma blanca en abdomen, presenta vísceras expuestas y sangrado moderado.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 22/min, SpO₂ 98%</li>
                                            <li>C: FC 110/min, TA 100/70 mmHg</li>
                                            <li>D: Alerta, orientada</li>
                                            <li>E: Evisceración, sangrado activo</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Cubrir vísceras con apósito húmedo estéril</li>
                                            <li>No reintroducir órganos</li>
                                            <li>Control de hemorragia externa</li>
                                            <li>Monitorización y traslado urgente</li>
                                            <li>Evitar hipotermia</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Lesión genitourinaria</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Adolescente de 16 años, accidente en bicicleta, presenta dolor en región lumbar y hematuria visible tras el evento.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 20/min, SpO₂ 99%</li>
                                            <li>C: FC 105/min, TA 110/75 mmHg</li>
                                            <li>D: Alerta, orientado</li>
                                            <li>E: Hematuria, dolor lumbar, sin heridas externas</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Monitorización de signos vitales</li>
                                            <li>No colocar sonda urinaria</li>
                                            <li>Oxígeno si hay signos de shock</li>
                                            <li>Traslado a hospital</li>
                                            <li>Evitar manipulación innecesaria</li>
                                        </ol>
                                    </div>
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
                                                    className={`${open ? "transform rotate-180" : ""
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
                                    <li><a href="https://www.ems1.com/trauma-care/abdominal-trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre trauma abdominal</a></li>
                                    <li><a href="https://www.jems.com/patient-care/trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de trauma</a></li>
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
            </div>
        </div>
    );
}

