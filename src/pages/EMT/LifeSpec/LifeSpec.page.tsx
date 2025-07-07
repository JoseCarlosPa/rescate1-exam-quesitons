import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./LifeSpec.questions.ts";
import {FaBaby, FaChild, FaUserMd, FaHeartbeat} from "react-icons/fa";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz, MdAccessibility} from "react-icons/md";
import {BsBookHalf, BsPersonCheck} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FiUsers, FiActivity} from "react-icons/fi";
import SEOWrapper from "../../../components/SEOWrapper/SEOWrapper.component.tsx";

export default function LifeSpec() {
    const [activeTab, setActiveTab] = useState<'overview' | 'vitals' | 'prehospital' | 'practice'>('overview');

    return (
        <SEOWrapper
            title="Desarrollo Humano y Esperanza de Vida | Curso EMT"
            description="Explora las etapas del desarrollo humano, constantes fisiológicas y consideraciones prehospitalarias para Técnicos en Atención Médica Prehospitalaria. Incluye ejercicios, casos prácticos y recursos recomendados."
            keywords="desarrollo humano EMT, etapas de vida, constantes fisiológicas, atención prehospitalaria, TAMP, curso emergencias médicas, casos prácticos, pediatría, geriatría"
            section="emt"
            difficulty="Beginner"
            timeRequired="PT90M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="min-h-screen bg-gray-50">
                <div
                    className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                    <div className="w-full max-w-7xl">
                        {/* Cabecera */}
                        <header className="mb-8 text-center">
                            <div className="flex justify-center">
                                <FaBaby className="w-24 h-24 mb-1 text-orange-500"/>
                            </div>
                            <h1 className="text-5xl font-bold mb-2 text-center">Desarrollo y esperanza de vida</h1>
                            <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
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
                                to={`${AllRoutes.LIFE_SPEC}/exam`}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Examen</p>
                            </NavLink>
                            
                            <a href="https://docs.google.com/presentation/d/1Jw5ONtWNz3ajHTwdxvTE3fS8JanopiVy/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Presentación</p>
                            </a>

                            <a href="https://drive.google.com/file/d/1ERUNCs4ZsMiCDHeYwuoS6SWJOPpY6iW3/view?usp=drive_link"
                               target="_blank"
                               rel="noopener noreferrer"
                               className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                                <BsBookHalf className="w-10 h-10 text-orange-500 mb-2"/>
                                <p className="text-center font-medium">Capítulo</p>
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
                                    Etapas del Desarrollo
                                </button>
                                <button
                                    onClick={() => setActiveTab('vitals')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'vitals'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Constantes y Esperanza de Vida
                                </button>
                                <button
                                    onClick={() => setActiveTab('prehospital')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'prehospital'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Atención Prehospitalaria
                                </button>
                                <button
                                    onClick={() => setActiveTab('practice')}
                                    className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                        activeTab === 'practice'
                                            ? 'border-orange-500 text-orange-600'
                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                    }`}>
                                    Casos Prácticos
                                </button>
                            </nav>
                        </div>

                        {/* Contenido principal basado en pestañas */}
                        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                            {activeTab === 'overview' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el desarrollo humano?</h2>
                                        <p className="text-gray-700 leading-relaxed mb-4">
                                            El desarrollo humano es un proceso continuo que abarca cambios físicos, cognitivos, emocionales y sociales 
                                            desde el nacimiento hasta la muerte. Para los paramédicos, comprender estas etapas es crucial para 
                                            proporcionar atención médica apropiada y efectiva.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed">
                                            Cada etapa presenta características únicas en anatomía, fisiología, psicología y vulnerabilidades específicas 
                                            que afectan directamente las estrategias de evaluación, comunicación y tratamiento prehospitalario.
                                        </p>
                                    </div>

                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Etapas del Desarrollo Humano</h2>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Infancia */}
                                            <div className="space-y-4">
                                                <div className="bg-blue-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <FaBaby className="w-6 h-6 text-blue-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-blue-700">Neonatos (0-1 mes)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Respiradores nasales obligados</li>
                                                        <li>Reflejos primitivos presentes</li>
                                                        <li>Sistema inmune inmaduro</li>
                                                        <li>Termorregulación deficiente</li>
                                                        <li>Fontanelas abiertas</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-cyan-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <FaBaby className="w-6 h-6 text-cyan-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-cyan-700">Lactantes (1 mes - 1 año)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Crecimiento rápido peso/talla</li>
                                                        <li>Desarrollo motor progresivo</li>
                                                        <li>Mayor superficie corporal relativa</li>
                                                        <li>Vulnerable a deshidratación</li>
                                                        <li>Ansiedad ante extraños (6+ meses)</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-green-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <FaChild className="w-6 h-6 text-green-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-green-700">Niños pequeños (1-3 años)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Desarrollo del lenguaje explosivo</li>
                                                        <li>Autonomía inicial (caminar, hablar)</li>
                                                        <li>Curiosidad y exploración activa</li>
                                                        <li>Miedo a separación de padres</li>
                                                        <li>Control de esfínteres en desarrollo</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-yellow-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <FaChild className="w-6 h-6 text-yellow-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-yellow-700">Preescolares (3-6 años)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Pensamiento mágico y fantasioso</li>
                                                        <li>Mayor cooperación con adultos</li>
                                                        <li>Habilidades motoras refinadas</li>
                                                        <li>Comprenden explicaciones simples</li>
                                                        <li>Pueden verbalizar síntomas básicos</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            {/* Niñez y adolescencia */}
                                            <div className="space-y-4">
                                                <div className="bg-purple-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <FiUsers className="w-6 h-6 text-purple-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-purple-700">Escolares (6-12 años)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Pensamiento lógico concreto</li>
                                                        <li>Comprenden causa-efecto</li>
                                                        <li>Pueden seguir instrucciones complejas</li>
                                                        <li>Miedo al dolor y procedimientos</li>
                                                        <li>Importancia del grupo de pares</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-pink-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <BsPersonCheck className="w-6 h-6 text-pink-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-pink-700">Adolescentes (12-18 años)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Cambios puberales significativos</li>
                                                        <li>Búsqueda de identidad personal</li>
                                                        <li>Pensamiento abstracto desarrollado</li>
                                                        <li>Conductas de riesgo aumentadas</li>
                                                        <li>Privacidad y autonomía importantes</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-orange-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <FaUserMd className="w-6 h-6 text-orange-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-orange-700">Adultos jóvenes (19-40 años)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Máxima condición física</li>
                                                        <li>Sistemas orgánicos en plenitud</li>
                                                        <li>Formación de relaciones íntimas</li>
                                                        <li>Establecimiento profesional</li>
                                                        <li>Estrés laboral y social</li>
                                                    </ul>
                                                </div>

                                                <div className="bg-gray-50 p-4 rounded-lg">
                                                    <div className="flex items-center mb-3">
                                                        <MdAccessibility className="w-6 h-6 text-gray-600 mr-2"/>
                                                        <h3 className="font-medium text-lg text-gray-700">Adultos mayores (65+ años)</h3>
                                                    </div>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Declino fisiológico progresivo</li>
                                                        <li>Comorbilidades múltiples</li>
                                                        <li>Polifarmacia frecuente</li>
                                                        <li>Fragilidad ósea aumentada</li>
                                                        <li>Cambios sensoriales (visión, audición)</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-orange-800">💡 Punto clave para paramédicos</h3>
                                        <p className="text-gray-700">
                                            Cada etapa del desarrollo requiere un enfoque específico en la evaluación, comunicación y tratamiento. 
                                            La comprensión de estas diferencias mejora significativamente la calidad de la atención prehospitalaria 
                                            y la cooperación del paciente.
                                        </p>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'vitals' && (
                                <div className="space-y-6">
                                    <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                        <div className="md:w-1/2">
                                            <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Constantes fisiológicas por edad</h2>
                                            <p className="text-gray-700 leading-relaxed">
                                                Los signos vitales varían significativamente según la edad y el desarrollo. Conocer estos rangos normales 
                                                es fundamental para identificar alteraciones y determinar la gravedad de la condición del paciente.
                                            </p>
                                            <p className="text-gray-700 mt-2 leading-relaxed">
                                                Recuerda que estos valores son rangos de referencia y siempre deben considerarse en el contexto clínico 
                                                del paciente, incluyendo su condición base y factores ambientales.
                                            </p>
                                        </div>
                                        <div className="md:w-1/2 flex justify-center">
                                            <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg shadow-sm">
                                                <FaHeartbeat className="w-16 h-16 text-orange-500 mx-auto mb-3"/>
                                                <h3 className="text-center font-semibold text-orange-700">Signos Vitales</h3>
                                                <p className="text-center text-sm text-gray-600">Evaluación fundamental</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Tabla de referencia rápida</h3>
                                        <div className="overflow-x-auto mb-6">
                                            <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow">
                                                <thead>
                                                    <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                                                        <th className="py-3 px-4 text-left font-semibold">Edad</th>
                                                        <th className="py-3 px-4 text-center font-semibold">FC (lat/min)</th>
                                                        <th className="py-3 px-4 text-center font-semibold">FR (resp/min)</th>
                                                        <th className="py-3 px-4 text-center font-semibold">PA sistólica (mmHg)</th>
                                                        <th className="py-3 px-4 text-center font-semibold">Temp (°C)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-gray-200 hover:bg-blue-50">
                                                        <td className="py-3 px-4 font-medium text-blue-700">Neonato (0 a 1 mes)</td>
                                                        <td className="py-3 px-4 text-center">90-180</td>
                                                        <td className="py-3 px-4 text-center">30-60</td>
                                                        <td className="py-3 px-4 text-center">50-70</td>
                                                        <td className="py-3 px-4 text-center">37-38</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-cyan-50">
                                                        <td className="py-3 px-4 font-medium text-cyan-700">Lactante (1mes a 1 año)</td>
                                                        <td className="py-3 px-4 text-center">100-160</td>
                                                        <td className="py-3 px-4 text-center">25-50</td>
                                                        <td className="py-3 px-4 text-center">70-95</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-green-50">
                                                        <td className="py-3 px-4 font-medium text-green-700">Niño pequeño (1 a 3 años)</td>
                                                        <td className="py-3 px-4 text-center">90-150</td>
                                                        <td className="py-3 px-4 text-center">20-30</td>
                                                        <td className="py-3 px-4 text-center">80-100</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-yellow-50">
                                                        <td className="py-3 px-4 font-medium text-yellow-700">PreEscolar (3 a 6 años)</td>
                                                        <td className="py-3 px-4 text-center">80-140</td>
                                                        <td className="py-3 px-4 text-center">20-25</td>
                                                        <td className="py-3 px-4 text-center">80-100</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-purple-50">
                                                        <td className="py-3 px-4 font-medium text-purple-700">Escolar (6 a 12 años)</td>
                                                        <td className="py-3 px-4 text-center">70-120</td>
                                                        <td className="py-3 px-4 text-center">15-20</td>
                                                        <td className="py-3 px-4 text-center">80-110</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-pink-50">
                                                        <td className="py-3 px-4 font-medium text-pink-700">Adolescente (12 a 18 años)</td>
                                                        <td className="py-3 px-4 text-center">60-100</td>
                                                        <td className="py-3 px-4 text-center">12-20</td>
                                                        <td className="py-3 px-4 text-center">90-110</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-orange-50">
                                                        <td className="py-3 px-4 font-medium text-orange-700">Adulto Joven (19 a 40 años)</td>
                                                        <td className="py-3 px-4 text-center">60-100</td>
                                                        <td className="py-3 px-4 text-center">12-20</td>
                                                        <td className="py-3 px-4 text-center">90-140</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="border-b border-gray-200 hover:bg-red-50">
                                                        <td className="py-3 px-4 font-medium text-red-700">Adulto de edad media (41 a 60 años)</td>
                                                        <td className="py-3 px-4 text-center">60-100</td>
                                                        <td className="py-3 px-4 text-center">12-20</td>
                                                        <td className="py-3 px-4 text-center">90-140</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                    <tr className="hover:bg-gray-50">
                                                        <td className="py-3 px-4 font-medium text-gray-700">Adulto mayor (mayor a 61 años)</td>
                                                        <td className="py-3 px-4 text-center">60-100</td>
                                                        <td className="py-3 px-4 text-center">12-20</td>
                                                        <td className="py-3 px-4 text-center">90-140</td>
                                                        <td className="py-3 px-4 text-center">36-37.5</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Patrones importantes a recordar</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-4">
                                                <div className="p-4 bg-blue-50 rounded-lg">
                                                    <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                                                        <FiActivity className="w-5 h-5 mr-2"/>
                                                        Frecuencia Cardíaca
                                                    </h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Disminuye progresivamente con la edad</li>
                                                        <li>Neonatos: más alta (90-180)</li>
                                                        <li>Adultos: estabiliza (60-100)</li>
                                                        <li>Respuesta al estrés varía por edad</li>
                                                    </ul>
                                                </div>

                                                <div className="p-4 bg-green-50 rounded-lg">
                                                    <h4 className="font-medium text-green-800 mb-2">💨 Frecuencia Respiratoria</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>También disminuye con la edad</li>
                                                        <li>Neonatos: hasta 60 resp/min</li>
                                                        <li>Adultos: 12-20 resp/min</li>
                                                        <li>Indicador temprano de deterioro</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <div className="p-4 bg-red-50 rounded-lg">
                                                    <h4 className="font-medium text-red-800 mb-2">🩸 Presión Arterial</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Aumenta progresivamente con la edad</li>
                                                        <li>Neonatos: PA muy baja (50-70 mmHg)</li>
                                                        <li>Adultos: rangos más altos</li>
                                                        <li>Último signo en deterioro pediátrico</li>
                                                    </ul>
                                                </div>

                                                <div className="p-4 bg-yellow-50 rounded-lg">
                                                    <h4 className="font-medium text-yellow-800 mb-2">🌡️ Temperatura</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Relativamente estable en todas las edades</li>
                                                        <li>Neonatos: ligeramente más alta</li>
                                                        <li>Termorregulación inmadura en extremos</li>
                                                        <li>Control ambiental crucial</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-red-800">⚠️ Alertas clínicas importantes</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="font-medium text-red-700 mb-2">En pediatría:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>La hipotensión es signo tardío de shock</li>
                                                    <li>Taquicardia sostenida es signo de alarma</li>
                                                    <li>Cambios en FR son indicadores tempranos</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-red-700 mb-2">En adultos mayores:</h4>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                    <li>Pueden no desarrollar fiebre ante infección</li>
                                                    <li>Medicamentos afectan respuesta vital</li>
                                                    <li>Compensación limitada ante estrés</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'prehospital' && (
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones especiales en atención prehospitalaria</h2>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            La atención prehospitalaria debe adaptarse a las características específicas de cada grupo etario. 
                                            Cada etapa del desarrollo presenta desafíos únicos que requieren conocimientos, técnicas y 
                                            aproximaciones específicas para optimizar el cuidado del paciente.
                                        </p>
                                    </div>

                                    <div className="grid gap-6">
                                        {/* Pediatría */}
                                        <div className="bg-blue-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-blue-800 flex items-center">
                                                <FaBaby className="w-6 h-6 mr-3"/>
                                                Pediatría (0-12 años)
                                            </h3>
                                            
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-blue-700 mb-2">🫁 Vía aérea y respiración</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Vía aérea proporcionalmente más pequeña</li>
                                                        <li>Laringe más anterior y superior</li>
                                                        <li>Lengua relativamente más grande</li>
                                                        <li>Respiradores nasales obligados (lactantes)</li>
                                                        <li>Tórax más flexible, respiración diafragmática</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-blue-700 mb-2">🩸 Circulación</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Volemia menor: 80ml/kg (vs 70ml/kg adulto)</li>
                                                        <li>Compensación cardíaca excelente</li>
                                                        <li>Hipotensión = signo tardío de shock</li>
                                                        <li>Pérdidas insensibles mayores</li>
                                                        <li>Riesgo alto de deshidratación</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-blue-700 mb-2">🧠 Aspectos neurológicos</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Cabeza proporcionalmente más grande</li>
                                                        <li>Fontanelas abiertas (hasta 18 meses)</li>
                                                        <li>Mayor riesgo de trauma craneal</li>
                                                        <li>Desarrollo cognitivo variable</li>
                                                        <li>Escalas neurológicas específicas</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-blue-700 mb-2">🗣️ Comunicación y manejo</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Lenguaje apropiado para la edad</li>
                                                        <li>Presencia de cuidadores esencial</li>
                                                        <li>Objetos de confort (juguetes)</li>
                                                        <li>Minimizar separación familiar</li>
                                                        <li>Explicaciones honestas y simples</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Adolescentes */}
                                        <div className="bg-purple-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-purple-800 flex items-center">
                                                <BsPersonCheck className="w-6 h-6 mr-3"/>
                                                Adolescentes (12-18 años)
                                            </h3>
                                            
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-purple-700 mb-2">🔍 Consideraciones especiales</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Anatomía en transición a adulto</li>
                                                        <li>Cambios hormonales significativos</li>
                                                        <li>Conductas de riesgo aumentadas</li>
                                                        <li>Lesiones deportivas frecuentes</li>
                                                        <li>Problemas de salud mental emergentes</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-purple-700 mb-2">🤝 Comunicación</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Respeto a la privacidad</li>
                                                        <li>Comunicación directa y honesta</li>
                                                        <li>Involucrar en decisiones</li>
                                                        <li>Confidencialidad apropiada</li>
                                                        <li>Considerar autonomía emergente</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Adultos */}
                                        <div className="bg-green-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
                                                <FaUserMd className="w-6 h-6 mr-3"/>
                                                Adultos (19-64 años)
                                            </h3>
                                            
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-green-700 mb-2">💪 Características fisiológicas</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Sistemas orgánicos en plenitud funcional</li>
                                                        <li>Capacidad de compensación óptima</li>
                                                        <li>Respuesta predecible al estrés</li>
                                                        <li>Signos vitales estables</li>
                                                        <li>Recuperación generalmente favorable</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-green-700 mb-2">⚠️ Factores de riesgo comunes</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Estrés laboral y familiar</li>
                                                        <li>Factores de riesgo cardiovascular</li>
                                                        <li>Accidentes laborales</li>
                                                        <li>Traumatismos de alta energía</li>
                                                        <li>Patologías crónicas emergentes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Adultos mayores */}
                                        <div className="bg-orange-50 p-6 rounded-lg">
                                            <h3 className="text-xl font-semibold mb-4 text-orange-800 flex items-center">
                                                <MdAccessibility className="w-6 h-6 mr-3"/>
                                                Adultos mayores (65+ años)
                                            </h3>
                                            
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium text-orange-700 mb-2">🏥 Consideraciones médicas</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Comorbilidades múltiples</li>
                                                        <li>Polifarmacia (múltiples medicamentos)</li>
                                                        <li>Fragilidad ósea aumentada</li>
                                                        <li>Respuesta inmune disminuida</li>
                                                        <li>Capacidad de reserva limitada</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-orange-700 mb-2">👂 Comunicación especial</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Posible deterioro auditivo/visual</li>
                                                        <li>Tiempo adicional para respuestas</li>
                                                        <li>Dignidad y respeto esenciales</li>
                                                        <li>Involucrar cuidadores cuando necesario</li>
                                                        <li>Considerar capacidad cognitiva</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-orange-700 mb-2">🚨 Presentaciones atípicas</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Infarto sin dolor torácico típico</li>
                                                        <li>Infección sin fiebre</li>
                                                        <li>Depresión como presentación física</li>
                                                        <li>Caídas como síntoma de enfermedad</li>
                                                        <li>Síntomas vagos e inespecíficos</li>
                                                    </ul>
                                                </div>
                                                
                                                <div>
                                                    <h4 className="font-medium text-orange-700 mb-2">📋 Evaluación integral</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                        <li>Historia medicamentosa completa</li>
                                                        <li>Estado funcional baseline</li>
                                                        <li>Evaluación de riesgo de caídas</li>
                                                        <li>Soporte social disponible</li>
                                                        <li>Directivas avanzadas existentes</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-yellow-800">🎯 Principios universales para todas las edades</h3>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Evaluar ABCDE de manera sistemática</li>
                                                <li>Adaptar comunicación a la edad y condición</li>
                                                <li>Considerar el contexto familiar y social</li>
                                                <li>Documentar antecedentes médicos relevantes</li>
                                            </ul>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Monitorizar signos vitales apropiados</li>
                                                <li>Aplicar medidas de confort específicas</li>
                                                <li>Planificar transporte más adecuado</li>
                                                <li>Comunicar hallazgos al equipo receptor</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'practice' && (
                                <div className="space-y-6">
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 1: Lactante con dificultad respiratoria</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Lactante de 8 meses, presenta tos, fiebre de 38.5°C y dificultad respiratoria progresiva. 
                                            Los padres refieren que "respira muy rápido" y tiene dificultad para alimentarse.
                                            Al examen: FR 55, FC 160, irritable, tirajes subcostales.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">🔍 Evaluación sistemática:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>A (Vía aérea):</strong> Permeable, sin estridor</li>
                                                <li><strong>B (Respiración):</strong> FR elevada (normal: 25-50), tirajes presentes</li>
                                                <li><strong>C (Circulación):</strong> FC elevada pero dentro de rango (normal: 100-160)</li>
                                                <li><strong>D (Neurológico):</strong> Irritable, responde a estímulos</li>
                                                <li><strong>E (Exposición):</strong> Fiebre 38.5°C</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">🎯 Manejo apropiado:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Mantener al niño calmado (evitar separación de padres)</li>
                                                <li>Posición de confort (semi-sentado o en brazos del cuidador)</li>
                                                <li>Oxigenoterapia según tolerancia (mascarilla vs. blow-by)</li>
                                                <li>Monitorización continua de signos vitales</li>
                                                <li>Considerar nebulización según protocolo local</li>
                                                <li>Transporte prioritario con padre/madre acompañante</li>
                                            </ol>
                                        </div>

                                        <div className="mt-4 p-3 bg-blue-100 rounded">
                                            <p className="text-blue-800 text-sm">
                                                <strong>💡 Punto clave:</strong> En lactantes, la taquipnea es un signo temprano de distrés respiratorio. 
                                                La presencia de tirajes indica esfuerzo respiratorio aumentado.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 2: Adolescente inconsciente</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Adolescente de 16 años encontrada inconsciente en una fiesta. Amigos refieren consumo de alcohol. 
                                            Al examen: Glasgow 9 (O2, V2, M5), FR 8, FC 50, PA 90/60, hipotermia 35°C, 
                                            pupilas puntiformes, olor a alcohol en aliento.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">🚨 Evaluación crítica:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Vía aérea:</strong> Riesgo por disminución del nivel de conciencia</li>
                                                <li><strong>Respiración:</strong> Bradipnea significativa (normal: 12-20)</li>
                                                <li><strong>Circulación:</strong> Bradicardia y hipotensión relativa</li>
                                                <li><strong>Neurológico:</strong> Glasgow moderado, pupilas sugieren opiáceos</li>
                                                <li><strong>Exposición:</strong> Hipotermia, posible intoxicación mixta</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">⚡ Manejo de emergencia:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Asegurar vía aérea (posición lateral de seguridad)</li>
                                                <li>Oxigenoterapia de alto flujo</li>
                                                <li>Considerar ventilación asistida si FR &lt; 8</li>
                                                <li>Acceso IV y dextrosa si glucemia baja</li>
                                                <li>Naloxona si sospecha de opiáceos (pupilas puntiformes)</li>
                                                <li>Calentamiento activo para hipotermia</li>
                                                <li>Transporte inmediato con monitorización continua</li>
                                            </ol>
                                        </div>

                                        <div className="mt-4 p-3 bg-green-100 rounded">
                                            <p className="text-green-800 text-sm">
                                                <strong>💡 Punto clave:</strong> En adolescentes, siempre considerar intoxicación múltiple. 
                                                La privacidad es importante, pero la seguridad es prioridad.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                        <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 3: Adulto mayor con caída</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Mujer de 82 años con caída en domicilio. Antecedentes: HTA, DM2, osteoporosis. 
                                            Medicamentos: amlodipino, metformina, calcio. Familia refiere confusión reciente. 
                                            Al examen: PA 180/100, FC 90, FR 18, Temp 37.8°C, dolor en cadera derecha, desorientada en tiempo.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">🔍 Evaluación geriátrica integral:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Trauma:</strong> Posible fractura de cadera (mecanismo + dolor)</li>
                                                <li><strong>Causa de caída:</strong> ¿Sincope? ¿Infección? ¿Medicamentos?</li>
                                                <li><strong>Comorbilidades:</strong> HTA no controlada, diabetes</li>
                                                <li><strong>Función cognitiva:</strong> Confusión nueva (posible delirium)</li>
                                                <li><strong>Estado funcional:</strong> Evaluar independencia previa</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">🏥 Manejo integral:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Inmovilización completa por sospecha de fractura</li>
                                                <li>Manejo cuidadoso por fragilidad ósea</li>
                                                <li>Control de dolor apropiado</li>
                                                <li>Investigar causa subyacente de la caída</li>
                                                <li>Glucemia, ECG si disponible</li>
                                                <li>Lista completa de medicamentos al hospital</li>
                                                <li>Información de soporte social y funcionalidad previa</li>
                                            </ol>
                                        </div>

                                        <div className="mt-4 p-3 bg-orange-100 rounded">
                                            <p className="text-orange-800 text-sm">
                                                <strong>💡 Punto clave:</strong> En adultos mayores, una caída rara vez es "accidental". 
                                                Siempre buscar causas médicas subyacentes y evaluar el contexto integral.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                        <h3 className="text-xl font-semibold mb-2 text-purple-600">Caso 4: Neonato con dificultad respiratoria</h3>
                                        <p className="italic text-gray-600 mb-4">
                                            Neonato de 2 semanas, parto domiciliario sin complicaciones. 
                                            Presenta dificultad respiratoria súbita, cianosis peribucal, 
                                            llanto débil. FR 65, FC 180, temp 36.8°C. Aleteo nasal presente.
                                        </p>

                                        <div className="mb-4">
                                            <h4 className="font-medium mb-2">🚨 Evaluación neonatal especializada:</h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Trabajo respiratorio:</strong> FR elevada (normal: 30-60), aleteo nasal</li>
                                                <li><strong>Coloración:</strong> Cianosis peribucal (signo de hipoxemia)</li>
                                                <li><strong>Circulación:</strong> Taquicardia compensatoria</li>
                                                <li><strong>Termorregulación:</strong> Temperatura en límite inferior normal</li>
                                                <li><strong>Respuesta:</strong> Llanto débil (posible fatiga respiratoria)</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-medium mb-2">🍼 Manejo neonatal específico:</h4>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Asegurar vía aérea (recordar respirador nasal obligado)</li>
                                                <li>Succión suave de secreciones si necesario</li>
                                                <li>Oxigenoterapia con FiO2 titulada (evitar hiperoxia)</li>
                                                <li>Posición neutra (evitar hiperextensión cervical)</li>
                                                <li>Control térmico estricto (incubadora/calentador)</li>
                                                <li>Monitorización continua SatO2, FC, temperatura</li>
                                                <li>Transporte inmediato a centro con UCIN</li>
                                            </ol>
                                        </div>

                                        <div className="mt-4 p-3 bg-purple-100 rounded">
                                            <p className="text-purple-800 text-sm">
                                                <strong>💡 Punto clave:</strong> Los neonatos se descompensan rápidamente. 
                                                El control térmico y la oxigenación adecuada son fundamentales para prevenir el deterioro.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg">
                                        <h3 className="text-xl font-semibold mb-3 text-blue-800">📚 Ejercicios de autoevaluación</h3>
                                        <div className="space-y-3">
                                            <div className="p-3 bg-white rounded">
                                                <p className="font-medium text-blue-700">Pregunta 1:</p>
                                                <p className="text-gray-700 text-sm">¿Cuál es la principal diferencia en el manejo de vía aérea entre un lactante y un adulto?</p>
                                            </div>
                                            <div className="p-3 bg-white rounded">
                                                <p className="font-medium text-blue-700">Pregunta 2:</p>
                                                <p className="text-gray-700 text-sm">¿Por qué la hipotensión es un signo tardío de shock en pediatría?</p>
                                            </div>
                                            <div className="p-3 bg-white rounded">
                                                <p className="font-medium text-blue-700">Pregunta 3:</p>
                                                <p className="text-gray-700 text-sm">¿Qué factores adicionales debes considerar al evaluar un adulto mayor con síntomas vagos?</p>
                                            </div>
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
                                        {({open}) => (
                                            <div className="border rounded-lg overflow-hidden">
                                <Disclosure.Button
                                                    className="flex w-full justify-between items-center bg-gray-100 px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 transition">
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
                            <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                        <li>American Academy of Pediatrics. (2020). <em>Pediatric Education for Prehospital Professionals (PEPP)</em> (4ª edición).</li>
                                        <li>Geriatric Emergency Medicine. (2022). <em>Prehospital Care of the Elderly Patient</em>. Springer.</li>
                                        <li>National Association of EMS Physicians. (2019). <em>Position Statements on Age-Specific Care</em>.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Recursos en línea especializados</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><a href="https://www.pepp.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">PEPP - Educación pediátrica prehospitalaria</a></li>
                                        <li><a href="https://www.ems1.com/pediatric/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Sección de pediatría</a></li>
                                        <li><a href="https://www.jems.com/patient-care/pediatric/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Cuidado pediátrico</a></li>
                                        <li><a href="https://www.saem.org/about-saem/academies-interest-groups-affiliates2/interest-groups/geriatric-emergency-medicine" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SAEM - Medicina geriátrica de emergencia</a></li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h3 className="text-lg font-medium mb-2">Herramientas y calculadoras</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Pedi STAT - Cálculos pediátricos y dosis de medicamentos</li>
                                        <li>Geriatrics At Your Fingertips - Guía de referencia geriátrica</li>
                                        <li>Pediatric Advanced Life Support (PALS) - Algoritmos y protocolos</li>
                                        <li>Medscape - Referencias médicas por grupo etario</li>
                                        <li>Age-appropriate vital signs reference cards</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-2">Cursos de capacitación recomendados</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>PEPP (Pediatric Education for Prehospital Professionals)</li>
                                        <li>GEMS (Geriatric Education for EMS)</li>
                                        <li>PALS (Pediatric Advanced Life Support)</li>
                                        <li>NRP (Neonatal Resuscitation Program)</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}

