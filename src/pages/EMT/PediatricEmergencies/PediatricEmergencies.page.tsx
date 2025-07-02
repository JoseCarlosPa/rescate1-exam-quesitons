import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./PediatricEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaChild} from "react-icons/fa";

export default function PediatricEmergencies(){
    const [activeTab, setActiveTab] = useState<'evaluation' | 'conditions' | 'treatment' | 'cases'>('evaluation');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaChild  className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias pediátricas</h1>
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
                            to={`${AllRoutes.PEDIATRIC_EMERGENCIES}/exam`}
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

                        <a href="https://drive.google.com/file/d/1iQup0XcRar5cBBdgab0mCvK0GNqtK7l-/view?usp=drive_link"
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
                                onClick={() => setActiveTab('evaluation')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'evaluation' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación Pediátrica
                            </button>
                            <button
                                onClick={() => setActiveTab('conditions')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'conditions' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Patologías Comunes
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo Emergente
                            </button>
                            <button
                                onClick={() => setActiveTab('cases')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'cases' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Casos Clínicos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'evaluation' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Triángulo de Evaluación Pediátrica (TEP)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El TEP es una herramienta de evaluación rápida que permite formar una impresión general del niño en segundos, 
                                        evaluando al paciente "desde la puerta" antes del contacto físico. Consta de tres componentes principales:
                                    </p>
                                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Apariencia</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Tono muscular</li>
                                                <li>Interactividad</li>
                                                <li>Consuelo</li>
                                                <li>Mirada/contacto visual</li>
                                                <li>Habla/llanto</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Trabajo Respiratorio</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sonidos respiratorios anormales</li>
                                                <li>Retracciones</li>
                                                <li>Aleteo nasal</li>
                                                <li>Respiración irregular</li>
                                                <li>Posicionamiento anormal</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Circulación Cutánea</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Palidez</li>
                                                <li>Moteado</li>
                                                <li>Cianosis</li>
                                                <li>Color de labios y mucosas</li>
                                                <li>Relleno capilar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Diferencias anatómicas y fisiológicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Vía aérea pediátrica</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Cabeza más grande proporcionalmente</li>
                                                <li>Occipucio prominente (flexión cervical natural)</li>
                                                <li>Lengua más grande en relación a la cavidad oral</li>
                                                <li>Vía aérea más pequeña y estrecha</li>
                                                <li>Tráquea más flexible y blanda</li>
                                                <li>Punto más estrecho a nivel cricoides (no cuerdas)</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Sistema cardiovascular</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Mayor capacidad de compensación</li>
                                                <li>Taquicardia como respuesta inicial al shock</li>
                                                <li>Hipotensión es signo tardío y ominoso</li>
                                                <li>Mayor superficie corporal relativa</li>
                                                <li>Predisposición a hipotermia</li>
                                                <li>Mayor frecuencia metabólica</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos vitales normales por edad</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Grupo de edad</th>
                                                    <th className="py-2 px-4 border">Frecuencia cardíaca</th>
                                                    <th className="py-2 px-4 border">Frecuencia respiratoria</th>
                                                    <th className="py-2 px-4 border">Presión sistólica</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Recién nacido (0-1 mes)</td>
                                                    <td className="py-2 px-4 border">120-160</td>
                                                    <td className="py-2 px-4 border">30-50</td>
                                                    <td className="py-2 px-4 border">60-90</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Lactante (1-12 meses)</td>
                                                    <td className="py-2 px-4 border">100-160</td>
                                                    <td className="py-2 px-4 border">25-40</td>
                                                    <td className="py-2 px-4 border">70-100</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Preescolar (1-6 años)</td>
                                                    <td className="py-2 px-4 border">90-150</td>
                                                    <td className="py-2 px-4 border">20-30</td>
                                                    <td className="py-2 px-4 border">80-110</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Escolar (6-12 años)</td>
                                                    <td className="py-2 px-4 border">70-120</td>
                                                    <td className="py-2 px-4 border">15-25</td>
                                                    <td className="py-2 px-4 border">90-120</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Adolescente (12+ años)</td>
                                                    <td className="py-2 px-4 border">60-100</td>
                                                    <td className="py-2 px-4 border">12-20</td>
                                                    <td className="py-2 px-4 border">100-120</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación ABCDE en pediatría</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">A - Vía aérea</h3>
                                            <p className="text-gray-700">Evaluar permeabilidad, sonidos anormales (estridor, ronquidos). Considerar posicionamiento adecuado según edad.</p>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">B - Respiración</h3>
                                            <p className="text-gray-700">Frecuencia, calidad, esfuerzo respiratorio, retracciones, aleteo nasal, cianosis.</p>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">C - Circulación</h3>
                                            <p className="text-gray-700">Pulsos centrales y periféricos, relleno capilar, presión arterial, color de piel.</p>
                                        </div>
                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">D - Discapacidad</h3>
                                            <p className="text-gray-700">Nivel de conciencia, respuesta pupilar, función neurológica. Usar AVPU modificado.</p>
                                        </div>
                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">E - Exposición</h3>
                                            <p className="text-gray-700">Examen completo manteniendo la temperatura corporal. Prevenir hipotermia.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'conditions' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias respiratorias pediátricas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Crup (Laringotraqueobronquitis)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Infección viral, inicio gradual</li>
                                                <li>Tos característica de "foca"</li>
                                                <li>Estridor inspiratorio</li>
                                                <li>Fiebre baja a moderada</li>
                                                <li>Empeora durante la noche</li>
                                                <li>Más común en 6 meses a 6 años</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Epiglotitis</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Infección bacteriana, inicio súbito</li>
                                                <li>Fiebre alta</li>
                                                <li>Babeo y disfagia</li>
                                                <li>Posición de trípode</li>
                                                <li>Voz amortiguada</li>
                                                <li>Emergencia que amenaza la vida</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Bronquiolitis</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Inflamación de bronquiolos</li>
                                                <li>Más común en lactantes</li>
                                                <li>Sibilancias y retracciones</li>
                                                <li>Dificultad para alimentarse</li>
                                                <li>Virus sincicial respiratorio (VSR)</li>
                                                <li>Puede progresar a insuficiencia respiratoria</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Asma pediátrica</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Inflamación y broncoconstricción</li>
                                                <li>Sibilancias expiratorias</li>
                                                <li>Tos persistente</li>
                                                <li>Opresión torácica</li>
                                                <li>Desencadenantes específicos</li>
                                                <li>Puede ser fatal si no se trata</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Emergencias neurológicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Convulsiones febriles</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Temperatura corporal elevada</li>
                                                <li>Más común entre 6 meses y 5 años</li>
                                                <li>Simples: duran menos de 15 minutos</li>
                                                <li>Complejas: duran más de 15 minutos</li>
                                                <li>Generalmente benignas</li>
                                                <li>Requieren evaluación médica</li>
                                            </ul>
                                        </div>
                                        <div className="bg-indigo-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-indigo-700">Status epiléptico</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Convulsión prolongada (&gt;5 minutos)</li>
                                                <li>Convulsiones repetidas sin recuperación</li>
                                                <li>Emergencia neurológica</li>
                                                <li>Riesgo de daño cerebral</li>
                                                <li>Requiere intervención inmediata</li>
                                                <li>Puede ser refractario a tratamiento</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Shock en pediatría</h2>
                                    <div className="space-y-4">
                                        <div className="bg-yellow-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Shock compensado</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Taquicardia</li>
                                                <li>Vasoconstricción periférica</li>
                                                <li>Relleno capilar prolongado (&gt;2 seg)</li>
                                                <li>Piel fría y pegajosa</li>
                                                <li>Presión arterial normal</li>
                                                <li>Alteración del estado mental</li>
                                            </ul>
                                        </div>
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Shock descompensado</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Hipotensión (signo tardío)</li>
                                                <li>Bradipnea o taquipnea</li>
                                                <li>Cianosis</li>
                                                <li>Disminución del nivel de conciencia</li>
                                                <li>Ausencia de pulsos periféricos</li>
                                                <li>Próximo al paro cardiopulmonar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Maltrato infantil</h2>
                                    <div className="space-y-4">
                                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Signos de sospecha</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Lesiones en diferentes etapas de curación</li>
                                                    <li>Patrones de lesiones sugestivos</li>
                                                    <li>Quemaduras con líneas de demarcación</li>
                                                    <li>Fracturas en espiral en lactantes</li>
                                                    <li>Lesiones en zonas protegidas</li>
                                                </ul>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Historia inconsistente con las lesiones</li>
                                                    <li>Retraso en buscar atención médica</li>
                                                    <li>Comportamiento del niño (miedo, retraimiento)</li>
                                                    <li>Comportamiento de los cuidadores</li>
                                                    <li>Desnutrición o falta de higiene</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Síndrome de muerte súbita del lactante (SMSL)</h2>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="text-gray-700 mb-3">
                                            Muerte súbita e inexplicable de un lactante aparentemente sano, generalmente durante el sueño.
                                        </p>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium mb-2">Factores de riesgo:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Dormir boca abajo</li>
                                                    <li>Exposición al humo</li>
                                                    <li>Prematuridad</li>
                                                    <li>Edad entre 1-4 meses</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium mb-2">Manejo:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Iniciar reanimación según protocolos</li>
                                                    <li>Apoyo emocional a la familia</li>
                                                    <li>Preservar la escena</li>
                                                    <li>Documentación cuidadosa</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de la vía aérea pediátrica</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Posicionamiento según edad</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Lactantes:</strong> Posición neutra (sin almohada)</li>
                                                <li><strong>Niños pequeños:</strong> Ligera extensión</li>
                                                <li><strong>Trauma:</strong> Elevación mandibular</li>
                                                <li><strong>Inconsciente:</strong> Posición de recuperación modificada</li>
                                                <li>Evitar hiperextensión cervical</li>
                                                <li>Considerar el tamaño de la cabeza</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Dispositivos de vía aérea</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Cánulas orofaríngeas:</strong> Solo en pacientes inconscientes</li>
                                                <li><strong>Cánulas nasofaríngeas:</strong> Evitar en trauma facial</li>
                                                <li><strong>BVM pediátrico:</strong> Volumen 450-500 ml</li>
                                                <li><strong>Mascarillas:</strong> Sellar desde el puente nasal hasta el mentón</li>
                                                <li>Succión frecuente si hay secreciones</li>
                                                <li>Considerar intubación en casos severos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Oxigenoterapia pediátrica</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Dispositivo</th>
                                                    <th className="py-2 px-4 border">Concentración O₂</th>
                                                    <th className="py-2 px-4 border">Flujo</th>
                                                    <th className="py-2 px-4 border">Indicaciones en pediatría</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Cánula nasal</td>
                                                    <td className="py-2 px-4 border">24-40%</td>
                                                    <td className="py-2 px-4 border">0.25-4 L/min</td>
                                                    <td className="py-2 px-4 border">Niños cooperativos, hipoxia leve</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Mascarilla simple</td>
                                                    <td className="py-2 px-4 border">35-60%</td>
                                                    <td className="py-2 px-4 border">6-10 L/min</td>
                                                    <td className="py-2 px-4 border">Hipoxia moderada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Mascarilla con reservorio</td>
                                                    <td className="py-2 px-4 border">85-95%</td>
                                                    <td className="py-2 px-4 border">10-15 L/min</td>
                                                    <td className="py-2 px-4 border">Emergencias respiratorias</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Oxígeno por soplado</td>
                                                    <td className="py-2 px-4 border">Variable</td>
                                                    <td className="py-2 px-4 border">10-15 L/min</td>
                                                    <td className="py-2 px-4 border">Niños no cooperativos, epiglotitis</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Protocolos de manejo específico</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Epiglotitis</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>NO examinar la garganta con abatelenguas</li>
                                                <li>Mantener al niño calmado y en posición cómoda</li>
                                                <li>Oxígeno por soplado (no invasivo)</li>
                                                <li>Permitir que el padre/madre acompañe</li>
                                                <li>Traslado inmediato sin demora</li>
                                                <li>Preparar para intubación de emergencia</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Crup</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Mantener al niño calmado</li>
                                                <li>Oxígeno humidificado si es necesario</li>
                                                <li>Posición cómoda (generalmente brazos del padre)</li>
                                                <li>Aire fresco puede ayudar</li>
                                                <li>Considerar nebulización con epinefrina en casos severos</li>
                                                <li>Monitorización continua</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Convulsiones febriles</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Proteger la vía aérea</li>
                                                <li>Posición de recuperación si es posible</li>
                                                <li>NO introducir objetos en la boca</li>
                                                <li>Aspirar secreciones si es necesario</li>
                                                <li>Medidas de enfriamiento gradual</li>
                                                <li>Considerar benzodiazepinas si convulsión &gt;5 min</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Shock pediátrico</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Acceso vascular temprano (IV/IO)</li>
                                                <li>Bolos de solución salina 20 ml/kg</li>
                                                <li>Reevaluar después de cada bolo</li>
                                                <li>Control de la temperatura corporal</li>
                                                <li>Oxígeno de alto flujo</li>
                                                <li>Traslado rápido a centro pediátrico</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Obstrucción de vía aérea por cuerpo extraño</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Lactantes (&lt;1 año):</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>5 golpes en la espalda</li>
                                                        <li>5 compresiones torácicas</li>
                                                        <li>Repetir hasta desobstracción</li>
                                                        <li>Si inconsciente: RCP</li>
                                                    </ol>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Niños (&gt;1 año):</h4>
                                                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                        <li>Compresiones abdominales (Heimlich)</li>
                                                        <li>Repetir hasta desobstracción</li>
                                                        <li>Si inconsciente: RCP</li>
                                                        <li>Examinar cavidad oral antes de ventilaciones</li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones especiales en pediatría</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="bg-yellow-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-yellow-700">Control de temperatura</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Los niños pierden calor rápidamente</li>
                                                    <li>Mantener ambiente cálido</li>
                                                    <li>Cubrir la cabeza</li>
                                                    <li>Limitar exposición durante examen</li>
                                                    <li>Considerar mantas térmicas</li>
                                                </ul>
                                            </div>
                                            <div className="bg-pink-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-pink-700">Apoyo psicológico</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Permitir presencia de padres</li>
                                                    <li>Explicar procedimientos apropiados para la edad</li>
                                                    <li>Mantener calma y paciencia</li>
                                                    <li>Usar técnicas de distracción</li>
                                                    <li>Considerar el desarrollo del niño</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="bg-indigo-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-indigo-700">Dosificación de medicamentos</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Calcular basándose en peso corporal</li>
                                                    <li>Usar cintas de medición pediátricas</li>
                                                    <li>Verificar dosis con protocolos</li>
                                                    <li>Considerar vías de administración alternativas</li>
                                                    <li>Documentar peso estimado</li>
                                                </ul>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="font-medium text-lg mb-2 text-gray-700">Comunicación</h3>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Hablar directamente al niño si es apropiado</li>
                                                    <li>Usar lenguaje simple y claro</li>
                                                    <li>Obtener historia de los padres</li>
                                                    <li>Observar interacciones familiares</li>
                                                    <li>Respetar vínculos afectivos</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cases' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos pediátricos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Dificultad respiratoria en lactante</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Lactante de 8 meses con 3 días de síntomas respiratorios. Los padres reportan tos persistente, 
                                        dificultad para alimentarse y episodios de cianosis perioral. Presenta retracciones subcostales 
                                        y sibilancias audibles.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación usando TEP:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Irritable, difícil de consolar, tono muscular disminuido</li>
                                            <li><strong>Trabajo respiratorio:</strong> Retracciones evidentes, sibilancias, aleteo nasal</li>
                                            <li><strong>Circulación cutánea:</strong> Cianosis perioral intermitente, relleno capilar 3 seg</li>
                                        </ul>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Signos vitales:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>FC: 170/min (taquicárdico)</li>
                                            <li>FR: 55/min (taquipneico)</li>
                                            <li>SpO₂: 89% aire ambiente</li>
                                            <li>Temperatura: 38.1°C</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Clasificación: Niño "enfermo" (todos los componentes del TEP alterados)</li>
                                            <li>Oxígeno por mascarilla o soplado para mantener SpO₂ &gt;94%</li>
                                            <li>Posición cómoda (brazos del cuidador)</li>
                                            <li>Considerar broncodilatadores si hay sibilancias</li>
                                            <li>Monitorización continua</li>
                                            <li>Traslado rápido a centro con cuidados pediátricos</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Caso 2: Sospecha de epiglotitis</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 4 años que desarrolló súbitamente fiebre alta, dolor de garganta severo y dificultad para tragar. 
                                        Se encuentra sentado inclinado hacia adelante, babea constantemente y su voz suena apagada. 
                                        Los padres están muy preocupados porque empeoró rápidamente.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Ansioso, alerta pero en evidente distress</li>
                                            <li><strong>Trabajo respiratorio:</strong> Posición de trípode, estridor leve</li>
                                            <li><strong>Circulación cutánea:</strong> Color normal, pero diaforético</li>
                                            <li>Temperatura: 39.8°C</li>
                                            <li>Voz amortiguada ("papa caliente")</li>
                                            <li>Babeo excesivo</li>
                                        </ul>
                                    </div>

                                    <div className="bg-red-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-red-700">⚠️ Qué NO hacer:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-red-700">
                                            <li>NO examinar la garganta con abatelenguas</li>
                                            <li>NO acostar al niño</li>
                                            <li>NO separar al niño de los padres</li>
                                            <li>NO realizar procedimientos invasivos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Mantener al niño calmado en posición cómoda</li>
                                            <li>Oxígeno por soplado (técnica no invasiva)</li>
                                            <li>Permitir que un padre acompañe en todo momento</li>
                                            <li>Preparar equipo de vía aérea avanzada pero NO usar a menos que sea absolutamente necesario</li>
                                            <li>Traslado CODE 3 a hospital con capacidad pediátrica</li>
                                            <li>Notificar al hospital para que tengan equipo listo</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 3: Convulsión febril</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 2 años que presentó una convulsión generalizada de aproximadamente 3 minutos de duración. 
                                        Los padres reportan que había tenido fiebre desde la mañana. Al llegar, el niño está postictal, 
                                        somnoliento pero responde a estímulos.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación postictal:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Somnoliento pero despierta con estímulos</li>
                                            <li><strong>Trabajo respiratorio:</strong> Frecuencia y calidad normales</li>
                                            <li><strong>Circulación cutánea:</strong> Rubicundo por fiebre, relleno capilar normal</li>
                                            <li>FC: 130/min</li>
                                            <li>FR: 28/min</li>
                                            <li>Temperatura: 39.5°C</li>
                                            <li>SpO₂: 97%</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Asegurar vía aérea permeable</li>
                                            <li>Posición de recuperación si está inconsciente</li>
                                            <li>Medidas de enfriamiento: retirar ropa excesiva, ambiente fresco</li>
                                            <li>Oxígeno si SpO₂ &lt;94%</li>
                                            <li>Obtener historia detallada de la convulsión</li>
                                            <li>Monitorización para detectar nuevas convulsiones</li>
                                            <li>Traslado para evaluación médica completa</li>
                                            <li>Educación a padres sobre convulsiones febriles</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 4: Lactante con signos de shock</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Lactante de 6 meses con historia de vómitos y diarrea por 2 días. Los padres reportan que 
                                        ha estado "muy decaído" y no ha querido comer. Al evaluarlo, está letárgico y difícil de despertar.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Letárgico, hipotónico, respuesta disminuida</li>
                                            <li><strong>Trabajo respiratorio:</strong> Taquipnea, respiración superficial</li>
                                            <li><strong>Circulación cutánea:</strong> Pálido, moteado, relleno capilar 4 seg</li>
                                            <li>FC: 180/min (taquicardia significativa)</li>
                                            <li>FR: 45/min</li>
                                            <li>PA: 65/40 mmHg (hipotensión - signo tardío)</li>
                                            <li>Fontanela anterior hundida</li>
                                            <li>Mucosas secas</li>
                                        </ul>
                                    </div>

                                    <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                                        <h4 className="font-medium mb-2 text-yellow-700">⚠️ Signos de alarma:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-yellow-700">
                                            <li>Hipotensión en pediatría = shock descompensado</li>
                                            <li>Cambio en el nivel de conciencia</li>
                                            <li>Relleno capilar prolongado</li>
                                            <li>Taquicardia extrema</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo urgente:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Clasificación: Shock descompensado - emergencia crítica</li>
                                            <li>Acceso vascular inmediato (IV/IO)</li>
                                            <li>Bolo de solución salina normal 20 ml/kg rápido</li>
                                            <li>Reevaluar respuesta después del bolo</li>
                                            <li>Repetir bolos según respuesta (hasta 60 ml/kg total)</li>
                                            <li>Oxígeno de alto flujo</li>
                                            <li>Control de temperatura</li>
                                            <li>Traslado CODE 3 a centro con UCIP</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 5: Obstrucción de vía aérea en preescolar</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 3 años que súbitamente desarrolló dificultad respiratoria mientras comía palomitas. 
                                        La madre refiere que empezó a toser violentamente y luego se puso "azul". 
                                        Al llegar, el niño está consciente pero con estridor y cianosis.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li><strong>Apariencia:</strong> Ansioso, agitado, en evidente distress</li>
                                            <li><strong>Trabajo respiratorio:</strong> Estridor inspiratorio marcado, retracciones</li>
                                            <li><strong>Circulación cutánea:</strong> Cianosis central y perioral</li>
                                            <li>Tos débil e inefectiva</li>
                                            <li>No puede hablar claramente</li>
                                            <li>SpO₂: 78%</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo de obstrucción severa:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Reconocer obstrucción de vía aérea por cuerpo extraño</li>
                                            <li>Si está consciente y puede toser: animar a toser</li>
                                            <li>Si no puede toser efectivamente: compresiones abdominales (Heimlich)</li>
                                            <li>Posicionar al niño de pie o sentado, inclinar hacia adelante</li>
                                            <li>5 compresiones abdominales hacia arriba y adentro</li>
                                            <li>Verificar boca para objetos visibles (NO barrido a ciegas)</li>
                                            <li>Continuar hasta desobstracción o pérdida de conciencia</li>
                                            <li>Si pierde conciencia: RCP con verificación de cavidad oral antes de ventilaciones</li>
                                            <li>Transporte inmediato durante maniobras</li>
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
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Capítulo 32: Emergencias Pediátricas. Jones & Bartlett Learning.</li>
                                    <li>American Heart Association. (2020). <em>Pediatric Advanced Life Support (PALS)</em>.</li>
                                    <li>NAEMT. (2020). <em>Emergency Medical Services for Children (EMSC)</em>.</li>
                                    <li>American Academy of Pediatrics. (2019). <em>Pediatric Education for Prehospital Professionals (PEPP)</em> (4ª edición).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea especializados en pediatría</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.aap.org/en-us/advocacy-and-policy/aap-health-initiatives/7-great-achievements/Pages/Emergency-Medical-Services-for-Children.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AAP - Emergency Medical Services for Children</a></li>
                                    <li><a href="https://www.ems.gov/pediatrics.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NHTSA - EMS for Children</a></li>
                                    <li><a href="https://www.emsc.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMSC National Resource Center</a></li>
                                    <li><a href="https://www.pepp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PEPP - Pediatric Education for Prehospital Professionals</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Herramientas de referencia rápida</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Cintas de medición pediátricas (Broselow Tape)</li>
                                    <li>Calculadoras de dosis pediátricas</li>
                                    <li>Tarjetas de referencia de signos vitales por edad</li>
                                    <li>Algoritmos de manejo del TEP (Triángulo de Evaluación Pediátrica)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>PediCalc - Calculadora de dosis pediátricas</li>
                                    <li>PALS Guidelines - Algoritmos de PALS</li>
                                    <li>Pediatric Emergency Medicine - Referencia rápida</li>
                                    <li>EMSC Mobile - Recursos de emergencias pediátricas</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

