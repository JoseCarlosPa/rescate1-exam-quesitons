import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./TerroristManage.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaBomb} from "react-icons/fa";

export default function TerroristManage(){
    const [activeTab, setActiveTab] = useState<'overview' | 'threats' | 'response' | 'practice'>('overview');

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaBomb className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Respuesta al terrorismo y manejo de desastres</h1>
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
                            to={`${AllRoutes.TERRORIST_MANAGEMENT}/exam`}
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

                        <a href="https://drive.google.com/file/d/1IOjxavD04ibDyE6uvcvJiuLZk8pkgX6R/view?usp=drive_link"
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
                                Introducción al Terrorismo
                            </button>
                            <button
                                onClick={() => setActiveTab('threats')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'threats' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Amenazas CBRNE
                            </button>
                            <button
                                onClick={() => setActiveTab('response')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'response' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Respuesta y Manejo
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Escenarios y Casos
                            </button>
                        </nav>
                    </div>

                    {/* Contenido principal basado en pestañas */}
                    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son los incidentes terroristas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Los incidentes terroristas son eventos intencionales que utilizan violencia o amenazas de violencia para generar terror, 
                                        causar daño masivo y desestabilizar la sociedad. Estos eventos requieren una respuesta coordinada y especializada 
                                        que involucra múltiples agencias y protocolos específicos de seguridad.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        Para el personal prehospitalario, estos incidentes presentan desafíos únicos debido a los riesgos de seguridad 
                                        continuos, la posibilidad de múltiples víctimas y la necesidad de protocolos especiales de descontaminación.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Características de los ataques terroristas</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Intencionalidad: Diseñados para causar máximo daño y terror</li>
                                            <li>Múltiples víctimas: Gran número de personas afectadas</li>
                                            <li>Escena insegura: Riesgo continuo para respondientes</li>
                                            <li>Dispositivos secundarios: Bombas adicionales dirigidas a rescatistas</li>
                                            <li>Medios de comunicación: Búsqueda de publicidad</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Pánico masivo: Reacciones psicológicas extremas</li>
                                            <li>Infraestructura dañada: Servicios básicos comprometidos</li>
                                            <li>Agentes especiales: Químicos, biológicos o radiológicos</li>
                                            <li>Coordinación compleja: Múltiples agencias involucradas</li>
                                            <li>Investigación criminal: Preservación de evidencia</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de amenazas</h2>
                                    <div className="grid md:grid-cols-3 gap-6">
                                        <div className="bg-red-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Explosivos Convencionales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Bombas caseras (IED)</li>
                                                <li>Explosivos comerciales</li>
                                                <li>Vehículos bomba</li>
                                                <li>Artefactos suicidas</li>
                                            </ul>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Armas CBRNE</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Químicos tóxicos</li>
                                                <li>Agentes biológicos</li>
                                                <li>Material radiológico</li>
                                                <li>Armas nucleares</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Otros Métodos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Armas de fuego</li>
                                                <li>Vehículos como armas</li>
                                                <li>Armas blancas</li>
                                                <li>Cyberataques a infraestructura</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios de seguridad para el personal prehospitalario</h2>
                                    <div className="bg-yellow-50 p-4 rounded-lg">
                                        <h3 className="font-medium text-lg mb-2 text-yellow-700">Reglas fundamentales</h3>
                                        <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                            <li><strong>No ingresar hasta que la escena sea declarada segura</strong> por las autoridades competentes</li>
                                            <li><strong>Establecer y mantener perímetros de seguridad</strong> amplios inicialmente</li>
                                            <li><strong>Usar el EPP apropiado</strong> según el tipo de amenaza identificada</li>
                                            <li><strong>Mantener comunicación constante</strong> con el comando del incidente</li>
                                            <li><strong>Estar alerta a dispositivos secundarios</strong> y amenazas adicionales</li>
                                            <li><strong>Trabajar en equipos</strong> y establecer rutas de escape</li>
                                            <li><strong>Seguir las cadenas de comando</strong> establecidas por el SCI</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'threats' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Armas de Destrucción Masiva (CBRNE)</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        CBRNE son las siglas que representan los cinco tipos principales de armas de destrucción masiva: 
                                        <strong> Químicas, Biológicas, Radiológicas, Nucleares y Explosivas</strong>. Cada tipo presenta 
                                        desafíos únicos para el personal prehospitalario y requiere protocolos específicos de respuesta.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Agentes Químicos</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Tipos principales</h3>
                                            <div className="space-y-3">
                                                <div className="bg-red-50 p-3 rounded">
                                                    <h4 className="font-medium text-red-700">Agentes Nerviosos</h4>
                                                    <p className="text-sm text-gray-700">Sarín, VX, Tabún - Inhiben la colinesterasa</p>
                                                </div>
                                                <div className="bg-orange-50 p-3 rounded">
                                                    <h4 className="font-medium text-orange-700">Agentes Vesicantes</h4>
                                                    <p className="text-sm text-gray-700">Gas mostaza - Causan quemaduras severas</p>
                                                </div>
                                                <div className="bg-blue-50 p-3 rounded">
                                                    <h4 className="font-medium text-blue-700">Agentes Asfixiantes</h4>
                                                    <p className="text-sm text-gray-700">Cloro, Fosgeno - Afectan la respiración</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Signos y síntomas de agentes nerviosos</h3>
                                            <div className="bg-yellow-50 p-4 rounded-lg">
                                                <p className="font-medium text-yellow-700 mb-2">Nemotecnia: SLUDGEM</p>
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>S</strong>alivación excesiva</li>
                                                    <li><strong>L</strong>agrimeo (lágrimas)</li>
                                                    <li><strong>U</strong>rinación involuntaria</li>
                                                    <li><strong>D</strong>efecación involuntaria</li>
                                                    <li><strong>G</strong>astrointestinal (vómito, diarrea)</li>
                                                    <li><strong>E</strong>mesis (vómito)</li>
                                                    <li><strong>M</strong>iosis (pupilas puntiformes)</li>
                                                </ul>
                                                <p className="text-sm text-gray-600 mt-2">También: Fasciculaciones musculares, broncoespasmo, convulsiones</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Agentes Biológicos</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-purple-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-purple-700">Bacterias</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Ántrax (Bacillus anthracis)</li>
                                                <li>Peste (Yersinia pestis)</li>
                                                <li>Tularemia</li>
                                                <li>Brucelosis</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Virus</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Viruela</li>
                                                <li>Fiebres hemorrágicas virales</li>
                                                <li>Encefalitis viral</li>
                                                <li>Influenza modificada</li>
                                            </ul>
                                        </div>
                                        <div className="bg-pink-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-pink-700">Toxinas</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Ricina</li>
                                                <li>Toxina botulínica</li>
                                                <li>Enterotoxina B</li>
                                                <li>Toxina T-2</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                                        <h4 className="font-medium text-yellow-700 mb-2">Características importantes:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Período de incubación: Los síntomas pueden aparecer horas o días después</li>
                                            <li>Transmisión: Pueden ser contagiosos de persona a persona</li>
                                            <li>Detección: Difíciles de detectar inicialmente</li>
                                            <li>Tratamiento: Requieren antibióticos específicos o antivirales</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Amenazas Radiológicas y Nucleares</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Tipos de eventos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Bomba sucia (RDD):</strong> Explosivo convencional con material radiactivo</li>
                                                <li><strong>Dispositivo nuclear improvisado (IND):</strong> Arma nuclear casera</li>
                                                <li><strong>Ataque a instalación nuclear:</strong> Sabotaje a planta nuclear</li>
                                                <li><strong>Fuente radiológica dispersa:</strong> Contaminación intencional</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Síndrome de radiación aguda</h3>
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                    <li><strong>Fase prodrómica:</strong> Náusea, vómito, diarrea (minutos-horas)</li>
                                                    <li><strong>Fase latente:</strong> Síntomas mejoran (días-semanas)</li>
                                                    <li><strong>Fase manifiesta:</strong> Síntomas severos reaparecen</li>
                                                    <li><strong>Recuperación o muerte:</strong> Depende de la dosis</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Explosivos</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Tipos de explosivos</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Dispositivos explosivos improvisados (IED):</strong> Bombas caseras</li>
                                                <li><strong>Explosivos comerciales:</strong> Dinamita, TNT</li>
                                                <li><strong>Explosivos militares:</strong> C4, Semtex</li>
                                                <li><strong>Vehículos bomba:</strong> Coche bomba, camión bomba</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Patrones de lesiones</h3>
                                            <div className="bg-red-50 p-4 rounded-lg">
                                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                    <li><strong>Primarias:</strong> Onda expansiva (pulmón, oído, intestino)</li>
                                                    <li><strong>Secundarias:</strong> Fragmentos proyectados</li>
                                                    <li><strong>Terciarias:</strong> Víctima proyectada contra objetos</li>
                                                    <li><strong>Cuaternarias:</strong> Quemaduras, inhalación, aplastamiento</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'response' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Establecimiento de zonas operacionales</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Zona Caliente</h3>
                                            <p className="text-sm text-gray-700 mb-2"><strong>Área de máximo peligro</strong></p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>Contaminación presente</li>
                                                <li>Solo personal especializado</li>
                                                <li>EPP nivel A o B</li>
                                                <li>Tiempo limitado de exposición</li>
                                                <li>Sistema de comunicación especial</li>
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
                                            <h3 className="font-medium text-lg mb-2 text-yellow-700">Zona Tibia</h3>
                                            <p className="text-sm text-gray-700 mb-2"><strong>Área de descontaminación</strong></p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>Estaciones de descontaminación</li>
                                                <li>Control de acceso</li>
                                                <li>EPP nivel C</li>
                                                <li>Personal de apoyo</li>
                                                <li>Triaje inicial</li>
                                            </ul>
                                        </div>
                                        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Zona Fría</h3>
                                            <p className="text-sm text-gray-700 mb-2"><strong>Área segura</strong></p>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                                <li>Sin contaminación</li>
                                                <li>Centro de comando</li>
                                                <li>Área de tratamiento</li>
                                                <li>Logística y apoyo</li>
                                                <li>EPP estándar</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Triaje en incidentes de múltiples víctimas</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Sistema START (Simple Triage and Rapid Treatment)</h3>
                                            <div className="space-y-3">
                                                <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                                                    <h4 className="font-medium text-green-700">VERDE - Leve/Ambulatorio</h4>
                                                    <p className="text-sm text-gray-700">Puede caminar, lesiones menores, no urgente</p>
                                                </div>
                                                <div className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-500">
                                                    <h4 className="font-medium text-yellow-700">AMARILLO - Urgente</h4>
                                                    <p className="text-sm text-gray-700">FR &lt;30, pulso radial presente, sigue órdenes simples</p>
                                                </div>
                                                <div className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                                                    <h4 className="font-medium text-red-700">ROJO - Inmediato</h4>
                                                    <p className="text-sm text-gray-700">FR &gt;30, sin pulso radial, o no sigue órdenes</p>
                                                </div>
                                                <div className="bg-black p-3 rounded border-l-4 border-black">
                                                    <h4 className="font-medium text-white">NEGRO - Expectante</h4>
                                                    <p className="text-sm text-gray-300">Sin respiración espontánea después de abrir vía aérea</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Algoritmo de decisión START</h3>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>¿Puede caminar?</strong>
                                                        <p className="text-sm ml-4">Sí → VERDE</p>
                                                    </li>
                                                    <li><strong>¿Respira?</strong>
                                                        <p className="text-sm ml-4">No → Abrir vía aérea</p>
                                                        <p className="text-sm ml-4">Aún no respira → NEGRO</p>
                                                    </li>
                                                    <li><strong>Frecuencia respiratoria</strong>
                                                        <p className="text-sm ml-4">&gt;30/min → ROJO</p>
                                                    </li>
                                                    <li><strong>Perfusión (pulso radial)</strong>
                                                        <p className="text-sm ml-4">Ausente → ROJO</p>
                                                    </li>
                                                    <li><strong>Estado mental</strong>
                                                        <p className="text-sm ml-4">No sigue órdenes → ROJO</p>
                                                        <p className="text-sm ml-4">Sigue órdenes → AMARILLO</p>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Descontaminación</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Principios generales</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Prioridad:</strong> Salvamento de vidas antes que descontaminación completa</li>
                                                <li><strong>Secuencia:</strong> Descontaminación gruesa → fina → médica</li>
                                                <li><strong>Flujo unidireccional:</strong> De zona caliente a fría</li>
                                                <li><strong>Separación por género:</strong> Líneas separadas hombres/mujeres</li>
                                                <li><strong>Privacidad:</strong> Carpas o biombos cuando sea posible</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Proceso de descontaminación</h3>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                    <li><strong>Registro de entrada:</strong> Identificación y documentación</li>
                                                    <li><strong>Remoción de ropa:</strong> Cortar si es necesario, no por encima de la cabeza</li>
                                                    <li><strong>Lavado grueso:</strong> Agua tibia, jabón suave, 2-3 minutos</li>
                                                    <li><strong>Enjuague:</strong> Abundante agua limpia</li>
                                                    <li><strong>Verificación:</strong> Monitor de radiación si aplica</li>
                                                    <li><strong>Vestimenta limpia:</strong> Ropa/mantas limpias</li>
                                                    <li><strong>Evaluación médica:</strong> Triaje y tratamiento</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tratamiento específico por agente</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Agentes Nerviosos</h3>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <h4 className="font-medium mb-2">Antídotos:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li><strong>Atropina:</strong> 2-6 mg IV/IM inicial, repetir según necesidad</li>
                                                        <li><strong>Pralidoxima (2-PAM):</strong> 1-2 g IV en 15-30 min</li>
                                                        <li><strong>Diazepam:</strong> 10 mg IM para convulsiones</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4 className="font-medium mb-2">Signos de mejoría:</h4>
                                                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                        <li>Disminución de secreciones</li>
                                                        <li>Mejora de la respiración</li>
                                                        <li>Pupilas menos contraídas</li>
                                                        <li>Menos fasciculaciones</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Agentes Vesicantes</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Descontaminación inmediata:</strong> Irrigación copiosa con agua</li>
                                                <li><strong>Manejo de quemaduras:</strong> Como quemaduras térmicas</li>
                                                <li><strong>Protección ocular:</strong> Irrigación y protección</li>
                                                <li><strong>Cuidado respiratorio:</strong> Oxígeno, broncodilatadores si es necesario</li>
                                                <li><strong>Analgesia:</strong> Control del dolor importante</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Exposición radiológica</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Descontaminación externa:</strong> Remover ropa (90% de contaminación)</li>
                                                <li><strong>Lavado:</strong> Agua tibia y jabón suave</li>
                                                <li><strong>Monitorización:</strong> Detector de radiación</li>
                                                <li><strong>Yoduro de potasio:</strong> Si hay yodo radiactivo (I-131)</li>
                                                <li><strong>Soporte sintomático:</strong> Náusea, vómito, diarrea</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Agentes biológicos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li><strong>Precauciones universales:</strong> Aislamiento apropiado</li>
                                                <li><strong>Antibióticos profilácticos:</strong> Según protocolo de salud pública</li>
                                                <li><strong>Vacunación:</strong> Si está disponible (ej. viruela)</li>
                                                <li><strong>Soporte sintomático:</strong> Manejo de fiebre, deshidratación</li>
                                                <li><strong>Notificación:</strong> Autoridades de salud pública</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Equipo de protección personal (EPP)</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Nivel</th>
                                                    <th className="py-2 px-4 border">Protección respiratoria</th>
                                                    <th className="py-2 px-4 border">Protección corporal</th>
                                                    <th className="py-2 px-4 border">Uso recomendado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Nivel A</td>
                                                    <td className="py-2 px-4 border">SCBA presión positiva</td>
                                                    <td className="py-2 px-4 border">Traje encapsulado</td>
                                                    <td className="py-2 px-4 border">Máxima protección química</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Nivel B</td>
                                                    <td className="py-2 px-4 border">SCBA presión positiva</td>
                                                    <td className="py-2 px-4 border">Traje químico resistente</td>
                                                    <td className="py-2 px-4 border">Vapor conocido, menor riesgo dérmico</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Nivel C</td>
                                                    <td className="py-2 px-4 border">Respirador purificador</td>
                                                    <td className="py-2 px-4 border">Traje químico</td>
                                                    <td className="py-2 px-4 border">Concentraciones conocidas</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Nivel D</td>
                                                    <td className="py-2 px-4 border">Ninguna</td>
                                                    <td className="py-2 px-4 border">Uniforme estándar</td>
                                                    <td className="py-2 px-4 border">Sin peligros atmosféricos</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Escenarios de incidentes terroristas</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-red-600">Escenario 1: Ataque con agente nervioso</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Explosión en estación de metro seguida de múltiples víctimas con síntomas similares: 
                                        miosis, sudoración excesiva, vómito y dificultad respiratoria.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Hallazgos iniciales:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>20+ víctimas con síntomas similares</li>
                                            <li>Olor a almendras amargas en el área</li>
                                            <li>Personal de primera respuesta reporta irritación ocular</li>
                                            <li>Múltiples víctimas con convulsiones</li>
                                            <li>Salivación y lagrimeo excesivos generalizados</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Secuencia de respuesta correcta:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Declinar ingreso hasta que la escena sea declarada segura por HAZMAT</li>
                                            <li>Establecer perímetro de al menos 100 metros en dirección contraria al viento</li>
                                            <li>Coordinar con autoridades para establecer zonas caliente, tibia y fría</li>
                                            <li>Preparar estaciones de descontaminación en zona tibia</li>
                                            <li>Administrar atropina según protocolo a víctimas sintomáticas</li>
                                            <li>Implementar triaje START modificado para agentes químicos</li>
                                            <li>Mantener comunicación con centros hospitalarios sobre tipo y número de víctimas</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Escenario 2: Bomba sucia (RDD)</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Explosión en edificio comercial con detector de radiación activado. 
                                        Múltiples víctimas con trauma por explosión y posible exposición radiológica.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Consideraciones especiales:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Lesiones traumáticas inmediatas vs. exposición radiológica a largo plazo</li>
                                            <li>Necesidad de monitorización con detectores de radiación</li>
                                            <li>Descontaminación externa prioritaria</li>
                                            <li>Documentación cuidadosa de niveles de exposición</li>
                                            <li>Consideraciones psicológicas por miedo a radiación</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Protocolos específicos:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Evaluación inicial de trauma siguiendo ABCDE</li>
                                            <li>Remoción de ropa (elimina 90% de contaminación externa)</li>
                                            <li>Irrigación con agua tibia y jabón suave</li>
                                            <li>Monitorización con detector de radiación</li>
                                            <li>Documentar lecturas antes y después de descontaminación</li>
                                            <li>Consideración de yoduro de potasio si hay I-131</li>
                                            <li>Transporte a centro médico con capacidad radiológica</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Escenario 3: Brote biológico sospechoso</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Múltiples pacientes en un edificio de oficinas presentan inicio súbito de fiebre alta, 
                                        malestar general y síntomas respiratorios. Sospecha de liberación intencional de agente biológico.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Indicadores de bioterrorismo:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Enfermedad inusual en población sana</li>
                                            <li>Patrón epidemiológico atípico</li>
                                            <li>Múltiples víctimas con síntomas similares</li>
                                            <li>Síntomas severos de progresión rápida</li>
                                            <li>Ausencia de vector natural conocido</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo apropiado:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Implementar precauciones universales estrictas</li>
                                            <li>Aislar víctimas según tipo de transmisión sospechado</li>
                                            <li>Notificar inmediatamente a autoridades de salud pública</li>
                                            <li>Documentar cuidadosamente síntomas y cronología</li>
                                            <li>Obtener muestras según protocolo epidemiológico</li>
                                            <li>Proporcionar tratamiento sintomático</li>
                                            <li>Iniciar profilaxis post-exposición si está indicada</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Escenario 4: Incidente con múltiples dispositivos</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Primera explosión en centro comercial con múltiples víctimas. 
                                        20 minutos después, segunda explosión en área de evacuación dirigida a personal de primera respuesta.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Amenazas secundarias:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Dispositivos explosivos secundarios dirigidos a rescatistas</li>
                                            <li>Estructuras debilitadas propensas a colapso</li>
                                            <li>Incendios secundarios</li>
                                            <li>Liberación de materiales peligrosos</li>
                                            <li>Tiradores activos en la confusión</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Protocolo de seguridad:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Suspender todas las operaciones de rescate</li>
                                            <li>Evacuar personal de primera respuesta del área</li>
                                            <li>Establecer nuevo perímetro más amplio</li>
                                            <li>Esperar inspección completa por equipos de explosivos</li>
                                            <li>Reorganizar zonas operacionales en área segura</li>
                                            <li>Reevaluar rutas de escape y comunicaciones</li>
                                            <li>Continuar operaciones solo después de autorización oficial</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 p-4 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-2 text-yellow-700">Lecciones clave para recordar</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>Seguridad primero:</strong> Nunca comprometer la seguridad personal por el rescate</li>
                                        <li><strong>Múltiples amenazas:</strong> Estar siempre alerta a dispositivos secundarios</li>
                                        <li><strong>Descontaminación:</strong> Crítica antes del tratamiento en incidentes CBRNE</li>
                                        <li><strong>Comunicación:</strong> Mantener contacto constante con comando del incidente</li>
                                        <li><strong>Documentación:</strong> Registrar exposiciones y tratamientos cuidadosamente</li>
                                        <li><strong>Recursos:</strong> Solicitar recursos especializados tempranamente</li>
                                        <li><strong>Entrenamiento:</strong> Practicar regularmente con equipos multi-agencias</li>
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

                    {/* Referencias y Recursos */}
                    <section className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="text-2xl font-bold mb-4">Referencias y recursos adicionales</h2>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-medium mb-2">Bibliografía principal</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Capítulo: Respuesta al terrorismo y manejo de desastres. Jones & Bartlett Learning.</li>
                                    <li>FEMA. (2017). <em>National Incident Management System (NIMS)</em>. 3ª edición.</li>
                                    <li>CDC. (2020). <em>Emergency Preparedness and Response - Chemical, Biological, Radiological, Nuclear, and Explosives (CBRNE)</em>.</li>
                                    <li>NAEMT. (2019). <em>All-Hazards Disaster Response (AHDR)</em>. 2ª edición.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ready.gov/chemical" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ready.gov - Preparación para emergencias químicas</a></li>
                                    <li><a href="https://www.cdc.gov/cpr/index.htm" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC - Preparación y respuesta de emergencia</a></li>
                                    <li><a href="https://www.fema.gov/emergency-managers/nims" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FEMA - Sistema Nacional de Manejo de Incidentes</a></li>
                                    <li><a href="https://chemm.nlm.nih.gov/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CHEMM - Countermeasures and Response</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Protocolos y guías</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Protocolo START para triaje de múltiples víctimas</li>
                                    <li>Guías de descontaminación para agentes CBRNE</li>
                                    <li>Protocolos de administración de antídotos (atropina, pralidoxima)</li>
                                    <li>Procedimientos de EPP según nivel de amenaza</li>
                                    <li>Algoritmos de comunicación en incidentes de múltiples víctimas</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

