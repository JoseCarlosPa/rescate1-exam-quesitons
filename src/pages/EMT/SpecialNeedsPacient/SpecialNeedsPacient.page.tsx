import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SpecialNeedsPacient.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {TbDisabled} from "react-icons/tb";
import { ForumSection } from "../../../components/ForumSection";

export default function SpecialNeedsPacient(){
    const [activeTab, setActiveTab] = useState<'overview' | 'conditions' | 'considerations' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <TbDisabled className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Pacientes con necesidades especiales</h1>
                        <p className="text-sm italic mb-4">Alumnos Rescate 1</p>
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
                            to={`${AllRoutes.SPECIAL_NEEDS_PACIENT}/exam`}
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
                        <a href="https://drive.google.com/file/d/1-iHa2SSMpY9GtNbLvjNdvCL51DgVphmz/view?usp=drive_link"
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
                                onClick={() => setActiveTab('conditions')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'conditions' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Condiciones Específicas
                            </button>
                            <button
                                onClick={() => setActiveTab('considerations')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'considerations' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Consideraciones de Atención
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son los pacientes con necesidades especiales?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Los pacientes con necesidades especiales son aquellos que requieren consideraciones adicionales debido a condiciones físicas, 
                                        mentales, emocionales o sociales que pueden afectar su capacidad para comunicarse, cooperar o recibir atención médica de manera estándar.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Estos pacientes presentan desafíos únicos para el personal de EMS y requieren adaptaciones en el abordaje, 
                                        comunicación y tratamiento para brindar una atención de calidad y segura.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Categorías principales</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Discapacidades físicas (parálisis, amputaciones)</li>
                                            <li>Discapacidades sensoriales (ceguera, sordera)</li>
                                            <li>Discapacidades intelectuales</li>
                                            <li>Trastornos del espectro autista</li>
                                            <li>Enfermedad mental</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Dependencia tecnológica (ventiladores, ostomías)</li>
                                            <li>Obesidad mórbida</li>
                                            <li>Pacientes geriátricos con demencia</li>
                                            <li>Pacientes pediátricos con necesidades especiales</li>
                                            <li>Pacientes con barreras del idioma</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios fundamentales de atención</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Respeto y dignidad</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Tratar al paciente como persona, no como su condición</li>
                                                <li>Mantener la privacidad y confidencialidad</li>
                                                <li>Respetar sus preferencias y autonomía</li>
                                                <li>Evitar términos despectivos o discriminatorios</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Comunicación efectiva</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Hablar directamente al paciente</li>
                                                <li>Usar lenguaje claro y simple</li>
                                                <li>Permitir tiempo adicional para respuestas</li>
                                                <li>Utilizar métodos alternativos de comunicación</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones legales y éticas</h2>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Ley de Estadounidenses con Discapacidades (ADA):</strong> Prohíbe la discriminación y garantiza acceso equitativo</li>
                                            <li><strong>Consentimiento informado:</strong> Adaptado a la capacidad de comprensión del paciente</li>
                                            <li><strong>Tutores legales:</strong> Identificar quién tiene autoridad para tomar decisiones médicas</li>
                                            <li><strong>Confidencialidad:</strong> Proteger la información de salud mental y discapacidades</li>
                                            <li><strong>No discriminación:</strong> Brindar el mismo nivel de atención médica a todos los pacientes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'conditions' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Discapacidades físicas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Parálisis y lesiones de médula espinal</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Paraplejia:</strong> Parálisis de extremidades inferiores</li>
                                                <li><strong>Cuadriplejia:</strong> Parálisis de las cuatro extremidades</li>
                                                <li><strong>Hemiplejia:</strong> Parálisis de un lado del cuerpo</li>
                                                <li>Pérdida de sensibilidad en áreas afectadas</li>
                                                <li>Problemas de termorregulación</li>
                                                <li>Mayor riesgo de úlceras por presión</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Amputaciones</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Extremidades superiores o inferiores</li>
                                                <li>Uso de prótesis</li>
                                                <li>Alteraciones en el equilibrio</li>
                                                <li>Posible dolor fantasma</li>
                                                <li>Adaptaciones para movilidad</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Discapacidades sensoriales</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Discapacidad visual</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Ceguera total o parcial</li>
                                                <li>Uso de perros guía</li>
                                                <li>Bastón blanco para movilidad</li>
                                                <li>Mayor dependencia de otros sentidos</li>
                                                <li>Necesidad de descripción verbal del entorno</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Discapacidad auditiva</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sordera total o hipoacusia</li>
                                                <li>Uso de aparatos auditivos</li>
                                                <li>Comunicación por señas</li>
                                                <li>Lectura de labios</li>
                                                <li>Posible necesidad de intérprete</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Condiciones mentales y neurológicas</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Discapacidad intelectual</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Limitaciones significativas en funcionamiento intelectual</li>
                                                <li>Dificultades en habilidades adaptativas</li>
                                                <li>Variabilidad en el grado de afectación</li>
                                                <li>Posible necesidad de cuidador</li>
                                                <li>Comunicación simplificada requerida</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Trastorno del espectro autista (TEA)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dificultades en comunicación social</li>
                                                <li>Comportamientos repetitivos</li>
                                                <li>Sensibilidad sensorial (luces, sonidos)</li>
                                                <li>Necesidad de rutinas predecibles</li>
                                                <li>Posible ansiedad en situaciones nuevas</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Enfermedad mental</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Depresión, ansiedad, trastorno bipolar</li>
                                                <li>Esquizofrenia y otros trastornos psicóticos</li>
                                                <li>Trastornos de la personalidad</li>
                                                <li>Posible uso de medicamentos psicotrópicos</li>
                                                <li>Riesgo de crisis de agitación o agresividad</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Dependencia tecnológica</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Dispositivo</th>
                                                    <th className="py-2 px-4 border">Función</th>
                                                    <th className="py-2 px-4 border">Consideraciones EMS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Ventilador domiciliario</td>
                                                    <td className="py-2 px-4 border">Soporte respiratorio</td>
                                                    <td className="py-2 px-4 border">Mantener funcionamiento, tener BVM de respaldo</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Traqueostomía</td>
                                                    <td className="py-2 px-4 border">Vía aérea artificial</td>
                                                    <td className="py-2 px-4 border">Aspiración frecuente, kit de traqueostomía</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Sonda de gastrostomía</td>
                                                    <td className="py-2 px-4 border">Alimentación</td>
                                                    <td className="py-2 px-4 border">Evitar tracción, verificar posición</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Catéter urinario</td>
                                                    <td className="py-2 px-4 border">Drenaje urinario</td>
                                                    <td className="py-2 px-4 border">Mantener bolsa por debajo del paciente</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Shunt ventriculoperitoneal</td>
                                                    <td className="py-2 px-4 border">Drenaje de LCR</td>
                                                    <td className="py-2 px-4 border">Monitorizar signos de aumento de PIC</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'considerations' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estrategias de comunicación</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Comunicación general</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Hablar directamente al paciente, no al cuidador</li>
                                                <li>Usar un tono de voz normal</li>
                                                <li>Hacer contacto visual cuando sea apropiado</li>
                                                <li>Ser paciente y permitir tiempo extra</li>
                                                <li>Preguntar sobre sus necesidades específicas</li>
                                                <li>Respetar el espacio personal y los dispositivos de asistencia</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Adaptaciones específicas</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Discapacidad visual:</strong> Describir acciones y entorno</li>
                                                <li><strong>Discapacidad auditiva:</strong> Usar gestos, escribir, contacto visual</li>
                                                <li><strong>Discapacidad intelectual:</strong> Lenguaje simple, instrucciones cortas</li>
                                                <li><strong>Autismo:</strong> Mantener calma, evitar cambios bruscos</li>
                                                <li><strong>Enfermedad mental:</strong> Ser empático, no confrontativo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación médica adaptada</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Evaluación primaria (ABCDE)</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>A (Vía aérea):</strong> Verificar permeabilidad, considerar traqueostomía</li>
                                                <li><strong>B (Respiración):</strong> Evaluar trabajo respiratorio, ventiladores</li>
                                                <li><strong>C (Circulación):</strong> Acceso vascular puede ser limitado</li>
                                                <li><strong>D (Discapacidad):</strong> Establecer nivel basal de función</li>
                                                <li><strong>E (Exposición):</strong> Respetar dignidad, buscar dispositivos</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Historia clínica</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Obtener información del paciente cuando sea posible</li>
                                                <li>Consultar con cuidadores familiares</li>
                                                <li>Revisar alertas médicas (brazaletes, tarjetas)</li>
                                                <li>Preguntar sobre medicamentos y alergias</li>
                                                <li>Conocer el nivel de función basal</li>
                                                <li>Identificar necesidades especiales de cuidado</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de dispositivos médicos</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Ventiladores portátiles</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>No desconectar sin BVM listo</li>
                                                <li>Transportar con el ventilador si es posible</li>
                                                <li>Conocer configuraciones básicas</li>
                                                <li>Tener plan de respaldo para fallo eléctrico</li>
                                                <li>Monitorizar alarmas</li>
                                            </ul>
                                        </div>

                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Sillas de ruedas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Considerar transporte en la silla cuando sea seguro</li>
                                                <li>Verificar sistemas de sujeción</li>
                                                <li>Evaluar la necesidad de traslado a camilla</li>
                                                <li>Respetar la independencia del paciente</li>
                                                <li>Asegurar dispositivos durante el transporte</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones de transporte</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Condición</th>
                                                    <th className="py-2 px-4 border">Consideraciones especiales</th>
                                                    <th className="py-2 px-4 border">Equipamiento adicional</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Obesidad mórbida</td>
                                                    <td className="py-2 px-4 border">Camilla bariátrica, personal adicional</td>
                                                    <td className="py-2 px-4 border">Dispositivo de levantamiento, rampa</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Autismo severo</td>
                                                    <td className="py-2 px-4 border">Minimizar estímulos, permitir cuidador</td>
                                                    <td className="py-2 px-4 border">Sedación si está indicada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Dependiente de ventilador</td>
                                                    <td className="py-2 px-4 border">Transporte con ventilador</td>
                                                    <td className="py-2 px-4 border">BVM, batería de respaldo</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Silla de ruedas</td>
                                                    <td className="py-2 px-4 border">Evaluar traslado vs transporte en silla</td>
                                                    <td className="py-2 px-4 border">Sistema de sujeción de silla</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de crisis conductuales</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Desescalamiento</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Mantener la calma y hablar con voz suave</li>
                                                <li>Dar espacio personal al paciente</li>
                                                <li>Escuchar activamente sus preocupaciones</li>
                                                <li>Evitar movimientos bruscos o amenazantes</li>
                                                <li>Ofrecer opciones cuando sea posible</li>
                                                <li>Involucrar a cuidadores familiares</li>
                                                <li>Considerar la necesidad de apoyo policial</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Intervenciones físicas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Usar restricciones solo cuando sea absolutamente necesario</li>
                                                <li>Seguir protocolos locales para restricciones</li>
                                                <li>Monitorizar continuamente la respiración y circulación</li>
                                                <li>Documentar la razón médica para las restricciones</li>
                                                <li>Considerar sedación química según protocolo</li>
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
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Paciente con autismo en crisis</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 12 años con trastorno del espectro autista. Durante una visita al centro comercial, 
                                        se presenta agitado, gritando y autolesionándose tras un ruido fuerte. Los padres reportan 
                                        que no responde a su nombre y presenta movimientos repetitivos.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR elevada por agitación, saturación normal</li>
                                            <li>C: FC elevada, perfusión adecuada</li>
                                            <li>D: Agitado, no responde a comandos verbales</li>
                                            <li>E: Heridas menores por autolesión en brazos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Minimizar estímulos sensoriales (luces, sonidos)</li>
                                            <li>Permitir que los padres permanezcan cerca</li>
                                            <li>Evitar contacto físico innecesario</li>
                                            <li>Usar tono de voz calmado y consistente</li>
                                            <li>Considerar sedación solo si hay riesgo inmediato</li>
                                            <li>Transporte con un padre acompañante</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Paciente con ventilador domiciliario</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 45 años con esclerosis lateral amiotrófica (ELA), dependiente de ventilador domiciliario. 
                                        La familia llama por falla en el equipo. Al llegar, encuentran a la paciente consciente pero 
                                        con dificultad respiratoria evidente.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Traqueostomía permeable</li>
                                            <li>B: FR 30/min, ventilador con alarma, SpO₂ 89%</li>
                                            <li>C: FC 110/min, TA estable</li>
                                            <li>D: Consciente, ansiosa, comunicación por parpadeo</li>
                                            <li>E: Paciente en cama, múltiples dispositivos médicos</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Verificar conexiones del ventilador y fuente de energía</li>
                                            <li>Tener BVM conectado a oxígeno listo para usar</li>
                                            <li>Aspirar secreciones de traqueostomía si es necesario</li>
                                            <li>Comunicarse directamente con la paciente</li>
                                            <li>Obtener información de cuidadores sobre configuraciones</li>
                                            <li>Transportar con ventilador portátil si está disponible</li>
                                            <li>Monitorización continua durante transporte</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paciente con discapacidad intelectual</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 30 años con síndrome de Down que vive en un hogar grupal. Presenta dolor abdominal agudo. 
                                        El personal reporta que ha estado inquieto y se niega a comer desde la mañana. 
                                        Tiene dificultad para expresar lo que le duele.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: Respiración normal</li>
                                            <li>C: FC 95/min, TA dentro de parámetros normales</li>
                                            <li>D: Consciente, limitaciones cognitivas evidentes</li>
                                            <li>E: Protege región abdominal, no fiebre</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Usar lenguaje simple y directo</li>
                                            <li>Obtener historia del cuidador familiar</li>
                                            <li>Permitir que cuidador acompañe durante evaluación</li>
                                            <li>Explicar procedimientos en términos simples</li>
                                            <li>Ser paciente y permitir tiempo extra</li>
                                            <li>Evaluar dolor usando escalas visuales apropiadas</li>
                                            <li>Considerar condiciones médicas asociadas al síndrome</li>
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
                        {/* Foro de Discusión */}
                        <ForumSection 
                            pagina="special-needs-pacient" 
                            titulo="Foro de Discusión - Special Needs Pacient"
                        />

                        

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Capítulo: Pacientes con Necesidades Especiales. Jones & Bartlett Learning.</li>
                                    <li>U.S. Department of Justice. (2010). <em>2010 ADA Standards for Accessible Design</em>.</li>
                                    <li>National Association of Emergency Medical Technicians. (2019). <em>AMLS: Advanced Medical Life Support</em> (2ª edición).</li>
                                    <li>Centers for Disease Control and Prevention. (2020). <em>Disability and Health Promotion</em>.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ada.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ADA.gov - Información oficial sobre Americans with Disabilities Act</a></li>
                                    <li><a href="https://www.cdc.gov/disabilities/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC - Disability and Health</a></li>
                                    <li><a href="https://www.emsworld.com/special-populations" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS World - Poblaciones Especiales</a></li>
                                    <li><a href="https://www.autism-society.org/living-with-autism/health-wellness/emergency-medical-services/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Autism Society - Guía para servicios médicos de emergencia</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Organizaciones y recursos adicionales</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>National Down Syndrome Society - Recursos médicos</li>
                                    <li>Spinal Cord Injury Association - Guías de atención</li>
                                    <li>American Foundation for the Blind - Protocolos de emergencia</li>
                                    <li>National Association of the Deaf - Comunicación en emergencias</li>
                                    <li>United Spinal Association - Recursos de transporte médico</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

