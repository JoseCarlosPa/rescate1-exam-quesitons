import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./TransportOperations.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaTruckMedical} from "react-icons/fa6";
import { ForumSection } from "../../../components/ForumSection";

export default function TransportOperations(){
    const [activeTab, setActiveTab] = useState<'overview' | 'equipment' | 'procedures' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaTruckMedical className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Operaciones de transporte</h1>
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
                            to={`${AllRoutes.TRANSPORT_OPERATIONS}/exam`}
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

                        <a href="https://drive.google.com/file/d/1J8zWezlri9siMl9q2vv1reGGy8l39VsU/view?usp=drive_link"
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
                                onClick={() => setActiveTab('equipment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'equipment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Ambulancia y Equipamiento
                            </button>
                            <button
                                onClick={() => setActiveTab('procedures')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'procedures' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Procedimientos de Transporte
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
                        {/* Tab de Generalidades */}
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fases del transporte médico</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">1. Preparación</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Inspección diaria de la ambulancia</li>
                                                <li>Verificación del equipo médico</li>
                                                <li>Revisión de suministros</li>
                                                <li>Comunicaciones operativas</li>
                                                <li>Documentación y registros</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">2. Respuesta</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Recepción del llamado</li>
                                                <li>Traslado seguro al lugar</li>
                                                <li>Evaluación inicial de la escena</li>
                                                <li>Acceso al paciente</li>
                                                <li>Establecimiento de zona segura</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">3. Atención en escena</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluación primaria del paciente</li>
                                                <li>Estabilización inicial</li>
                                                <li>Evaluación secundaria</li>
                                                <li>Preparación para el transporte</li>
                                                <li>Documentación de hallazgos</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">4. Transporte</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Carga segura del paciente</li>
                                                <li>Monitorización continua</li>
                                                <li>Comunicación con hospital</li>
                                                <li>Manejo de complicaciones</li>
                                                <li>Conducción defensiva</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de ambulancias</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Tipo I - Convencional</h3>
                                            <p className="text-gray-700 mb-2">Construida sobre chasis de camión con módulo de paciente montado.</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                <li>Mayor espacio de trabajo</li>
                                                <li>Mejor aislamiento de ruido y vibración</li>
                                                <li>Ideal para servicios rurales de largo alcance</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Tipo II - Van</h3>
                                            <p className="text-gray-700 mb-2">Basada en van estándar con techo elevado.</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                <li>Más económica de operar</li>
                                                <li>Mejor maniobrabilidad urbana</li>
                                                <li>Espacio limitado para procedimientos complejos</li>
                                            </ul>
                                        </div>
                                        
                                        <div className="p-4 bg-teal-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-teal-700">Tipo III - Van modificada</h3>
                                            <p className="text-gray-700 mb-2">Van con compartimento de paciente ampliado hacia atrás.</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                                <li>Equilibrio entre espacio y maniobrabilidad</li>
                                                <li>Diseño más popular actualmente</li>
                                                <li>Configuración flexible del interior</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Responsabilidades del personal</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Conductor/Operador</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Conducción segura y defensiva</li>
                                                <li>Conocimiento de rutas y hospitales</li>
                                                <li>Mantenimiento básico del vehículo</li>
                                                <li>Comunicación por radio</li>
                                                <li>Asistencia en carga/descarga</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Técnico de atención</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Evaluación y cuidado del paciente</li>
                                                <li>Monitorización durante el transporte</li>
                                                <li>Administración de medicamentos</li>
                                                <li>Documentación médica</li>
                                                <li>Comunicación con control médico</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab de Ambulancia y Equipamiento */}
                        {activeTab === 'equipment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Configuración de la ambulancia</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Compartimento del paciente</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Camilla principal con sistemas de sujeción</li>
                                                <li>Asiento del técnico con cinturón</li>
                                                <li>Gabinetes de suministros organizados</li>
                                                <li>Sistema de oxígeno central</li>
                                                <li>Iluminación de trabajo adecuada</li>
                                                <li>Sistema de ventilación/calefacción</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Cabina del conductor</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Equipo de comunicación dual</li>
                                                <li>GPS y sistema de navegación</li>
                                                <li>Controles de luces y sirena</li>
                                                <li>Documentos del vehículo</li>
                                                <li>Equipo de seguridad personal</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Equipamiento médico esencial</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Vía aérea y ventilación</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Cánulas orofaríngeas (todos los tamaños)</li>
                                                    <li>Cánulas nasofaríngeas</li>
                                                    <li>Tubos endotraqueales</li>
                                                    <li>Laringoscopio con hojas</li>
                                                    <li>Dispositivos supraglóticos</li>
                                                </ul>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Mascarillas de ventilación</li>
                                                    <li>Bolsa válvula mascarilla</li>
                                                    <li>Aspirador portátil</li>
                                                    <li>Sondas de aspiración</li>
                                                    <li>Oxígeno portátil</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Circulación y acceso vascular</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Catéteres IV (14G, 16G, 18G, 20G)</li>
                                                    <li>Jeringas de diversos tamaños</li>
                                                    <li>Equipos de infusión</li>
                                                    <li>Soluciones cristaloides</li>
                                                    <li>Vendajes hemostáticos</li>
                                                </ul>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Torniquetes</li>
                                                    <li>Gasas y vendajes</li>
                                                    <li>Esfigmomanómetros</li>
                                                    <li>Monitor de signos vitales</li>
                                                    <li>Pulsioxímetro</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Inmovilización y transporte</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Tabla espinal larga</li>
                                                    <li>Collarines cervicales</li>
                                                    <li>Inmovilizadores laterales</li>
                                                    <li>Férulas de tracción</li>
                                                    <li>Férulas de vacío</li>
                                                </ul>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li>Dispositivo de extracción</li>
                                                    <li>Camillas de cuchara</li>
                                                    <li>Sillas de evacuación</li>
                                                    <li>Correas de sujeción</li>
                                                    <li>Mantas térmicas</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Lista de verificación diaria</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Vehículo</h3>
                                            <div className="space-y-2">
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Niveles de fluidos (aceite, refrigerante, frenos)</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Presión de neumáticos</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Luces y sirenas</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Batería y sistema eléctrico</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Combustible suficiente</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Equipo médico</h3>
                                            <div className="space-y-2">
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Inventario de medicamentos</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Funcionamiento del monitor</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Suministros descartables</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Sistema de oxígeno</span>
                                                </label>
                                                <label className="flex items-center space-x-2">
                                                    <input type="checkbox" className="rounded" />
                                                    <span className="text-gray-700">Equipo de comunicación</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab de Procedimientos de Transporte */}
                        {activeTab === 'procedures' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Preparación para el transporte</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Evaluación previa</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Estabilizar condición del paciente</li>
                                                <li>Completar evaluación secundaria</li>
                                                <li>Establecer accesos venosos necesarios</li>
                                                <li>Administrar medicamentos urgentes</li>
                                                <li>Documentar hallazgos iniciales</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Selección del hospital</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Hospital más cercano apropiado</li>
                                                <li>Capacidades específicas requeridas</li>
                                                <li>Disponibilidad de camas</li>
                                                <li>Preferencia del paciente (si estable)</li>
                                                <li>Protocolos del sistema de emergencias</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Técnicas de carga y posicionamiento</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Posiciones de transporte</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Supina:</strong> Trauma, shock, inconsciente</li>
                                                <li><strong>Fowler:</strong> Dificultad respiratoria, IAM</li>
                                                <li><strong>Trendelenburg:</strong> Shock hipovolémico</li>
                                                <li><strong>Decúbito lateral:</strong> Vómito, inconsciente</li>
                                                <li><strong>Posición de shock:</strong> Elevar piernas 6-12"</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Técnicas de carga</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Uso de mecánica corporal adecuada</li>
                                                <li>Coordinación del equipo</li>
                                                <li>Verificar seguros de la camilla</li>
                                                <li>Asegurar accesos venosos</li>
                                                <li>Proteger dispositivos médicos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Monitorización durante el transporte</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Signos vitales continuos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Presión arterial cada 5 minutos en pacientes críticos</li>
                                                <li>Frecuencia cardíaca y ritmo continuo</li>
                                                <li>Saturación de oxígeno continua</li>
                                                <li>Frecuencia respiratoria y calidad</li>
                                                <li>Nivel de conciencia (Escala de Glasgow)</li>
                                                <li>Temperatura cuando sea relevante</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Observación clínica</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Color y temperatura de la piel</li>
                                                <li>Calidad y simetría del pulso</li>
                                                <li>Patrón respiratorio y esfuerzo</li>
                                                <li>Dolor (escala 1-10)</li>
                                                <li>Respuesta a tratamientos</li>
                                                <li>Complicaciones emergentes</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicación durante el transporte</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Con el hospital receptor</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dar reporte inicial al salir de la escena</li>
                                                <li>Comunicar tiempo estimado de llegada</li>
                                                <li>Reportar cambios significativos en el estado</li>
                                                <li>Solicitar órdenes médicas si es necesario</li>
                                                <li>Confirmar preparación para recibir al paciente</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Con central de despacho</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Confirmar salida de la escena</li>
                                                <li>Reportar destino y ruta</li>
                                                <li>Comunicar necesidad de escolta policial</li>
                                                <li>Confirmar llegada al hospital</li>
                                                <li>Reportar disponibilidad para nuevo servicio</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Tab de Casos Clínicos */}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos de transporte</h2>
                                    <p className="text-gray-600 mb-4">Estudia estos casos para mejorar tu comprensión sobre las operaciones de transporte médico.</p>
                                </div>

                                {/* Caso 1: IAM durante transporte */}
                                <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-500">
                                    <h3 className="text-xl font-bold mb-3 text-red-700">Caso 1: Infarto agudo de miocardio durante transporte</h3>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Situación inicial:</h4>
                                        <p className="text-gray-700 mb-2">
                                            Masculino de 58 años con dolor torácico, transportado desde domicilio a hospital. 
                                            Durante el transporte, presenta deterioro súbito con dolor intenso y cambios en el ECG.
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 22/min, SpO₂ 94%</li>
                                            <li>C: FC 95/min irregular, TA 85/50 mmHg</li>
                                            <li>D: Ansioso, diaforético</li>
                                            <li>E: Dolor torácico 9/10, irradiado a brazo izquierdo</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo durante transporte:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Notificar inmediatamente al hospital receptor del deterioro</li>
                                            <li>Administrar oxígeno para mantener SpO₂ &gt;94%</li>
                                            <li>Establecer acceso IV si no existe</li>
                                            <li>Administrar nitroglicerina SL según protocolo</li>
                                            <li>Preparar para posible paro cardíaco</li>
                                            <li>Considerar cambio a hospital con cateterismo</li>
                                            <li>Documentar todos los cambios y tratamientos</li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Caso 2: Trauma múltiple */}
                                <div className="p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                                    <h3 className="text-xl font-bold mb-3 text-orange-700">Caso 2: Trauma múltiple con complicaciones</h3>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Situación inicial:</h4>
                                        <p className="text-gray-700 mb-2">
                                            Accidente vehicular, conductor de 32 años extraído con dispositivo de extracción. 
                                            Trauma torácico y abdominal, inmovilizado en tabla espinal.
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable con C-spine</li>
                                            <li>B: FR 28/min, SpO₂ 88%, movimiento torácico asimétrico</li>
                                            <li>C: FC 125/min, TA 90/60 mmHg, llenado capilar 3 seg</li>
                                            <li>D: GCS 13 (O4 V4 M5)</li>
                                            <li>E: Abdomen distendido, dolor difuso</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Decisiones de transporte:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Traslado inmediato a centro de trauma nivel I</li>
                                            <li>Notificación previa al equipo de trauma</li>
                                            <li>Dos accesos IV de gran calibre</li>
                                            <li>Oxígeno de alto flujo</li>
                                            <li>Monitorización continua de signos vitales</li>
                                            <li>Preparación para descompensación hemodinámica</li>
                                            <li>Considerar activación de protocolo de transfusión masiva</li>
                                        </ol>
                                    </div>
                                </div>

                                {/* Caso 3: Emergencia obstétrica */}
                                <div className="p-6 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                                    <h3 className="text-xl font-bold mb-3 text-pink-700">Caso 3: Parto precipitado en ambulancia</h3>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Situación inicial:</h4>
                                        <p className="text-gray-700 mb-2">
                                            Primigesta de 38 semanas con contracciones fuertes cada 2 minutos. 
                                            Durante el transporte, presenta descenso de la presentación.
                                        </p>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 24/min, SpO₂ 98%</li>
                                            <li>C: FC 110/min, TA 130/80 mmHg</li>
                                            <li>D: Alerta, ansiosa pero cooperativa</li>
                                            <li>E: Contracciones intensas, pujos involuntarios</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo del parto en ambulancia:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Detener la ambulancia en lugar seguro</li>
                                            <li>Notificar al hospital del parto inminente</li>
                                            <li>Preparar kit de parto estéril</li>
                                            <li>Posicionar a la paciente cómodamente</li>
                                            <li>Controlar la salida de la cabeza fetal</li>
                                            <li>Aspirar vía aérea del recién nacido</li>
                                            <li>Clampar y cortar cordón umbilical</li>
                                            <li>Cuidados inmediatos del recién nacido</li>
                                            <li>Manejar la expulsión de la placenta</li>
                                            <li>Control de hemorragia posparto</li>
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
                            pagina="transport-operations" 
                            titulo="Foro de Discusión - Transport Operations"
                        />

                        

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Capítulo 37: Operaciones de transporte. Jones & Bartlett Learning.</li>
                                    <li>American Ambulance Association. (2020). <em>Estándares de operación de ambulancias</em>.</li>
                                    <li>NHTSA. (2019). <em>Estándares federales para ambulancias</em> (KKK-A-1822F).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ambulance.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Ambulance Association</a></li>
                                    <li><a href="https://www.ems1.com/ambulance-design/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Diseño y operación de ambulancias</a></li>
                                    <li><a href="https://www.jems.com/operations/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Operaciones EMS</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>EMS Protocols - Protocolos de transporte por región</li>
                                    <li>Hospital Finder - Localizador de hospitales especializados</li>
                                    <li>Vehicle Inspector - Lista de verificación digital</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
