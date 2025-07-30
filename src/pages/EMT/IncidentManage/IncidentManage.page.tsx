import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./IncidentManage.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdOutlineFireTruck, MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import { ForumSection } from "../../../components/ForumSection";

export default function IncidentManage(){
    const [activeTab, setActiveTab] = useState<'overview' | 'structure' | 'operations' | 'practice'>('overview');

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <MdOutlineFireTruck className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Manejo de incidentes</h1>
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
                            to={`${AllRoutes.INCIDENT_MANAGEMENT}/exam`}
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
                        <a href="https://drive.google.com/file/d/13QGO0Wtn0Jgr1t4ZLrcggPH7gFe-_YOc/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
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
                                Introducción
                            </button>
                            <button
                                onClick={() => setActiveTab('structure')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'structure' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Sistema de Comando
                            </button>
                            <button
                                onClick={() => setActiveTab('operations')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'operations' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Operaciones
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios Prácticos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el Manejo de Incidentes?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El manejo de incidentes en servicios médicos de emergencia (SME) es un sistema organizacional que permite la coordinación efectiva 
                                        de recursos, personal y operaciones durante emergencias. Se basa en el Sistema de Comando de Incidentes (SCI) adoptado a nivel nacional 
                                        para garantizar una respuesta estructurada y eficiente.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Este sistema es fundamental para manejar desde incidentes simples con una sola unidad hasta eventos de múltiples víctimas 
                                        que requieren la coordinación de múltiples agencias y recursos especializados.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios Fundamentales del SCI</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Unidad de comando:</strong> Una sola persona al mando</li>
                                            <li><strong>Cadena de comando:</strong> Línea clara de autoridad</li>
                                            <li><strong>Alcance de control:</strong> Número manejable de subordinados</li>
                                            <li><strong>Terminología común:</strong> Lenguaje estandarizado</li>
                                            <li><strong>Recursos consolidados:</strong> Manejo centralizado</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li><strong>Comunicaciones integradas:</strong> Sistema unificado</li>
                                            <li><strong>Plan de acción:</strong> Objetivos claros y alcanzables</li>
                                            <li><strong>Perímetros de seguridad:</strong> Zonas bien definidas</li>
                                            <li><strong>Flexibilidad:</strong> Adaptación a cualquier incidente</li>
                                            <li><strong>Transferencia de comando:</strong> Proceso estructurado</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de Incidentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Incidentes Simples</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Una sola unidad de respuesta</li>
                                                <li>Emergencias médicas rutinarias</li>
                                                <li>Accidentes menores</li>
                                                <li>Tiempo de resolución corto</li>
                                                <li>Recursos limitados requeridos</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Incidentes Complejos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Múltiples víctimas (MCI)</li>
                                                <li>Materiales peligrosos (HAZMAT)</li>
                                                <li>Desastres naturales</li>
                                                <li>Incidentes terroristas</li>
                                                <li>Operaciones de rescate</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Beneficios del Sistema</h2>
                                    <div className="bg-green-50 p-4 rounded-lg">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Mejora la coordinación entre agencias</li>
                                            <li>Optimiza el uso de recursos disponibles</li>
                                            <li>Reduce la duplicación de esfuerzos</li>
                                            <li>Mejora la seguridad del personal</li>
                                            <li>Facilita la comunicación efectiva</li>
                                            <li>Proporciona documentación clara del incidente</li>
                                            <li>Permite evaluación post-incidente para mejoras</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'structure' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estructura Organizacional del SCI</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El Sistema de Comando de Incidentes utiliza una estructura organizacional modular que puede expandirse 
                                            o contraerse según la complejidad del incidente:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Comando:</strong> Responsabilidad general del incidente</li>
                                            <li><strong>Operaciones:</strong> Actividades tácticas</li>
                                            <li><strong>Planificación:</strong> Recopilación y evaluación de información</li>
                                            <li><strong>Logística:</strong> Support y recursos</li>
                                            <li><strong>Administración/Finanzas:</strong> Documentación y costos</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <div className="bg-gray-100 p-4 rounded-lg max-w-full">
                                            <div className="text-center font-bold text-orange-600 mb-2">COMANDANTE DE INCIDENTE</div>
                                            <div className="flex justify-center space-x-2 mb-3">
                                                <div className="bg-orange-200 p-2 rounded text-xs">Información</div>
                                                <div className="bg-orange-200 p-2 rounded text-xs">Seguridad</div>
                                                <div className="bg-orange-200 p-2 rounded text-xs">Enlace</div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-2">
                                                <div className="bg-blue-200 p-2 rounded text-center text-xs">Operaciones</div>
                                                <div className="bg-green-200 p-2 rounded text-center text-xs">Planificación</div>
                                                <div className="bg-yellow-200 p-2 rounded text-center text-xs">Logística</div>
                                                <div className="bg-purple-200 p-2 rounded text-center text-xs">Admin/Finanzas</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Roles y Responsabilidades</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Comandante de Incidente</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Responsabilidad general del incidente</li>
                                                <li>Establece objetivos y prioridades</li>
                                                <li>Desarrolla la estrategia general</li>
                                                <li>Asegura la seguridad del personal</li>
                                                <li>Coordina con otras agencias</li>
                                                <li>Autoriza la liberación de recursos</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Oficial de Seguridad</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Monitorea condiciones peligrosas</li>
                                                <li>Desarrolla medidas de seguridad</li>
                                                <li>Puede detener operaciones inseguras</li>
                                                <li>Investiga accidentes</li>
                                                <li>Revisa el plan de acción del incidente</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Secciones Operativas</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Sección de Operaciones</h3>
                                            <p className="text-gray-700 mb-2">Responsable de todas las actividades tácticas del incidente:</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Supresión, rescate y atención médica</li>
                                                <li>Implementación de tácticas del plan de acción</li>
                                                <li>Coordinación de recursos asignados</li>
                                                <li>Reporte al Comandante sobre progreso</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Sección de Planificación</h3>
                                            <p className="text-gray-700 mb-2">Recopila, evalúa y disemina información:</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Seguimiento de recursos y situación</li>
                                                <li>Preparación del Plan de Acción del Incidente</li>
                                                <li>Proyección de necesidades futuras</li>
                                                <li>Documentación del incidente</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-yellow-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Sección de Logística</h3>
                                            <p className="text-gray-700 mb-2">Proporciona recursos y servicios de apoyo:</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Suministros, equipos y facilidades</li>
                                                <li>Comunicaciones y tecnología</li>
                                                <li>Alimentación y alojamiento</li>
                                                <li>Transporte y mantenimiento</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-purple-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Sección de Administración/Finanzas</h3>
                                            <p className="text-gray-700 mb-2">Maneja aspectos administrativos y financieros:</p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Control de costos y presupuesto</li>
                                                <li>Compensación por lesiones</li>
                                                <li>Análisis de tiempo y documentación</li>
                                                <li>Procesos de adquisición</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Transferencia de Comando</h2>
                                    <div className="bg-red-50 p-4 rounded-lg">
                                        <p className="text-gray-700 mb-3">
                                            La transferencia de comando debe ser un proceso formal que incluye:
                                        </p>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Briefing sobre la situación actual</li>
                                            <li>Estado de los objetivos del incidente</li>
                                            <li>Prioridades y estrategias actuales</li>
                                            <li>Recursos disponibles y asignados</li>
                                            <li>Organización actual del SCI</li>
                                            <li>Problemas de seguridad</li>
                                            <li>Instalaciones establecidas</li>
                                            <li>Anuncio de la transferencia a todo el personal</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'operations' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Zonificación del Incidente</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Zona Caliente (Hot Zone)</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Área de mayor peligro inmediato</strong></li>
                                                <li>Solo personal especializado y equipado</li>
                                                <li>Requiere equipo de protección completo</li>
                                                <li>Acceso controlado y limitado</li>
                                                <li>Actividades de rescate y supresión</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Zona Tibia (Warm Zone)</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Área de descontaminación</strong></li>
                                                <li>Personal con equipo de protección adecuado</li>
                                                <li>Triaje inicial de víctimas</li>
                                                <li>Estabilización básica</li>
                                                <li>Zona de transición controlada</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Zona Fría (Cold Zone)</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Área segura de operaciones</strong></li>
                                                <li>Puesto de comando de incidente</li>
                                                <li>Área de tratamiento médico</li>
                                                <li>Zona de recursos y logística</li>
                                                <li>Centro de operaciones de emergencia</li>
                                                <li>Área de reunión familiar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de Incidentes con Múltiples Víctimas (MCI)</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Categoría</th>
                                                    <th className="py-2 px-4 border">Color</th>
                                                    <th className="py-2 px-4 border">Descripción</th>
                                                    <th className="py-2 px-4 border">Prioridad</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Inmediato</td>
                                                    <td className="py-2 px-4 border bg-red-100">ROJO</td>
                                                    <td className="py-2 px-4 border">Lesiones críticas, salvables con atención inmediata</td>
                                                    <td className="py-2 px-4 border">Primera</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Urgente</td>
                                                    <td className="py-2 px-4 border bg-yellow-100">AMARILLO</td>
                                                    <td className="py-2 px-4 border">Lesiones serias, puede esperar poco tiempo</td>
                                                    <td className="py-2 px-4 border">Segunda</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Demorado</td>
                                                    <td className="py-2 px-4 border bg-green-100">VERDE</td>
                                                    <td className="py-2 px-4 border">Lesiones menores, puede caminar</td>
                                                    <td className="py-2 px-4 border">Tercera</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Fallecido</td>
                                                    <td className="py-2 px-4 border bg-black text-white">NEGRO</td>
                                                    <td className="py-2 px-4 border">Sin signos vitales o lesiones incompatibles con la vida</td>
                                                    <td className="py-2 px-4 border">Última</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Procedimiento START (Simple Triage And Rapid Treatment)</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Paso 1: Evaluación de movilidad</h3>
                                            <p className="text-gray-700 mb-2">
                                                "Todas las personas que puedan caminar, diríjanse al área verde"
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Víctimas que caminan = VERDE (demorado)</li>
                                                <li>Evaluar individualmente a los que no caminan</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Paso 2: Evaluación respiratoria</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>¿Respira espontáneamente? Si NO → abrir vía aérea</li>
                                                <li>Si no respira después de abrir vía aérea → NEGRO</li>
                                                <li>Si respira → evaluar frecuencia respiratoria</li>
                                                <li>FR mayor 30/min → ROJO</li>
                                                <li>FR menor 30/min → continuar evaluación</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Paso 3: Evaluación circulatoria</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Evaluar llenado capilar o pulso radial</li>
                                                <li>Llenado capilar mayor 2 segundos → ROJO</li>
                                                <li>Sin pulso radial palpable → ROJO</li>
                                                <li>Circulación adecuada → continuar evaluación</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Paso 4: Evaluación neurológica</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>¿Puede seguir órdenes simples?</li>
                                                <li>Si NO puede seguir órdenes → ROJO</li>
                                                <li>Si puede seguir órdenes → AMARILLO</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Establecimiento de Instalaciones</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Instalaciones Principales</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Puesto de Comando:</strong> Control del incidente</li>
                                                <li><strong>Área de Triaje:</strong> Clasificación inicial</li>
                                                <li><strong>Área de Tratamiento:</strong> Estabilización</li>
                                                <li><strong>Área de Transporte:</strong> Evacuación</li>
                                                <li><strong>Centro de Información:</strong> Familias y medios</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Consideraciones de Ubicación</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Zona segura y accesible</li>
                                                <li>Suficiente espacio para expansión</li>
                                                <li>Facilidad de comunicación</li>
                                                <li>Acceso vehicular adecuado</li>
                                                <li>Protección de elementos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Comunicaciones de Emergencia</h2>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Protocolo de Comunicación</h3>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li>Identificación clara del comunicador</li>
                                            <li>Confirmación de recepción de mensajes</li>
                                            <li>Uso de terminología estándar</li>
                                            <li>Brevedad y claridad en transmisiones</li>
                                            <li>Priorización de comunicaciones críticas</li>
                                            <li>Registro de comunicaciones importantes</li>
                                            <li>Canales separados para diferentes funciones</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escenarios de Manejo de Incidentes</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Escenario 1: Accidente de Múltiples Vehículos</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Accidente en autopista con 3 vehículos involucrados, 8 víctimas potenciales, derrame de combustible, 
                                        y un vehículo volcado bloqueando dos carriles. Primera unidad en escena.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación inicial de la escena:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Peligros: Tráfico vehicular, derrame de combustible, inestabilidad del vehículo</li>
                                            <li>Acceso: Carril de emergencia disponible</li>
                                            <li>Número de víctimas: 8 confirmadas</li>
                                            <li>Recursos adicionales: Bomberos, policía, ambulancias adicionales</li>
                                            <li>Condiciones meteorológicas: Lluvia ligera</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Acciones inmediatas del primer respondedor:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Establecer comando de incidente</li>
                                            <li>Solicitar recursos adicionales (MCI activación)</li>
                                            <li>Establecer perímetro de seguridad</li>
                                            <li>Realizar triaje rápido de víctimas</li>
                                            <li>Establecer zonas operacionales</li>
                                            <li>Coordinar con bomberos para control de combustible</li>
                                            <li>Mantener comunicación con centro de comando</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Escenario 2: Incendio en Edificio de Apartamentos</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Incendio estructural en edificio de 5 pisos con múltiples víctimas por inhalación de humo. 
                                        Varias personas evacuadas, otras aún en pisos superiores.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Situación al arribo:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Fuego activo en el segundo piso</li>
                                            <li>12 víctimas evacuadas con diferentes grados de inhalación</li>
                                            <li>Personas gritando desde ventanas del cuarto piso</li>
                                            <li>Bomberos ya en escena realizando supresión</li>
                                            <li>Multitud de espectadores</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Estructura de comando establecida:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Comandante de incidente: Jefe de bomberos</li>
                                            <li>Oficial médico: Supervisión del triaje y tratamiento</li>
                                            <li>Oficial de seguridad: Control del perímetro</li>
                                            <li>Área de triaje: Estacionamiento adyacente</li>
                                            <li>Área de tratamiento: Por colores de prioridad</li>
                                            <li>Oficial de transporte: Coordinación con hospitales</li>
                                            <li>Oficial de información: Manejo de medios y familias</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Escenario 3: Colapso de Estructura</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Colapso parcial de un edificio en construcción durante horas laborales. 
                                        Múltiples trabajadores atrapados, algunos evacuados con lesiones.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Desafíos del incidente:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Riesgo de colapso secundario</li>
                                            <li>Víctimas atrapadas bajo escombros</li>
                                            <li>Necesidad de equipos de rescate técnico</li>
                                            <li>Polvo y partículas en el aire</li>
                                            <li>Acceso limitado al área de colapso</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Consideraciones especiales:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluación estructural por ingenieros</li>
                                            <li>Establecimiento de zona caliente amplia</li>
                                            <li>Coordinación con equipos de rescate urbano</li>
                                            <li>Planificación de operaciones prolongadas</li>
                                            <li>Rotación de personal por fatiga</li>
                                            <li>Apoyo psicológico para rescatistas</li>
                                            <li>Comunicación con familias de trabajadores</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Escenario 4: Incidente HAZMAT</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Camión cisterna de químicos industriales volcado en zona residencial. 
                                        Fuga de material desconocido, varias personas con síntomas respiratorios.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Protocolo HAZMAT:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Aproximación desde dirección favorable del viento</li>
                                            <li>Establecimiento de perímetro inicial amplio</li>
                                            <li>Identificación del material (placas, documentos)</li>
                                            <li>Consulta con centro de información toxicológica</li>
                                            <li>Evaluación de víctimas en zona fría únicamente</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Zonificación HAZMAT:</h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <div className="bg-red-100 p-3 rounded">
                                                <h5 className="font-medium text-red-700">Zona Caliente</h5>
                                                <ul className="text-sm text-gray-700 mt-1">
                                                    <li>Solo personal HAZMAT</li>
                                                    <li>Nivel A o B de protección</li>
                                                    <li>Control de la fuente</li>
                                                </ul>
                                            </div>
                                            <div className="bg-yellow-100 p-3 rounded">
                                                <h5 className="font-medium text-yellow-700">Zona Tibia</h5>
                                                <ul className="text-sm text-gray-700 mt-1">
                                                    <li>Descontaminación</li>
                                                    <li>Personal con protección</li>
                                                    <li>Evaluación inicial</li>
                                                </ul>
                                            </div>
                                            <div className="bg-green-100 p-3 rounded">
                                                <h5 className="font-medium text-green-700">Zona Fría</h5>
                                                <ul className="text-sm text-gray-700 mt-1">
                                                    <li>Comando de incidente</li>
                                                    <li>Tratamiento médico</li>
                                                    <li>Área de reunión</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-blue-700">Lecciones Clave de los Escenarios</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Seguridad primero:</strong> Evaluar peligros antes de ingresar</li>
                                        <li><strong>Comando temprano:</strong> Establecer liderazgo desde el inicio</li>
                                        <li><strong>Comunicación clara:</strong> Mantener a todos informados</li>
                                        <li><strong>Flexibilidad:</strong> Adaptar el plan según evoluciona la situación</li>
                                        <li><strong>Documentación:</strong> Registrar decisiones y acciones</li>
                                        <li><strong>Evaluación continua:</strong> Monitorear efectividad de las operaciones</li>
                                    </ul>
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
                            pagina="incident-manage" 
                            titulo="Foro de Discusión - Incident Manage"
                        />

                        

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>FEMA. (2017). <em>National Incident Management System (NIMS)</em>. 3ª edición.</li>
                                    <li>NAEMT. (2020). <em>All-Hazards Disaster Response (AHDR)</em>. 2ª edición.</li>
                                    <li>IAFC. (2019). <em>Incident Command System for Emergency Medical Services</em>.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.fema.gov/emergency-managers/nims" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FEMA - Sistema Nacional de Manejo de Incidentes (NIMS)</a></li>
                                    <li><a href="https://training.fema.gov/is/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FEMA Independent Study - Cursos ICS gratuitos</a></li>
                                    <li><a href="https://www.naemt.org/education/naemt-education-courses/ahdr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NAEMT - All-Hazards Disaster Response</a></li>
                                    <li><a href="https://www.iafc.org/topics-and-tools/resources/resource/incident-command-system-resources" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IAFC - Recursos del Sistema de Comando de Incidentes</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Cursos de certificación recomendados</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>ICS-100: Introducción al Sistema de Comando de Incidentes</li>
                                    <li>ICS-200: Sistema de Comando de Incidentes para Empresas Individuales</li>
                                    <li>ICS-300: Sistema de Comando de Incidentes Intermedio</li>
                                    <li>ICS-400: Sistema de Comando de Incidentes Avanzado</li>
                                    <li>IS-700: Introducción al Sistema Nacional de Manejo de Incidentes</li>
                                    <li>All-Hazards Disaster Response (AHDR)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones y herramientas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>FEMA App - Alertas de emergencia y recursos</li>
                                    <li>Emergency Response Guidebook (ERG) - Para incidentes HAZMAT</li>
                                    <li>Mass Casualty Triage Apps - Para práctica de triaje</li>
                                    <li>Weather Apps - Monitoreo de condiciones</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

