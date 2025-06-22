import {IoIosBody} from "react-icons/io";
import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Immobilization.questionts.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function Immobilization() {
    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'treatment' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <IoIosBody className="w-24 h-24 mb-1 text-orange-500"/>
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Inmovilización</h1>
                        <p className="text-sm italic mb-4">Alumnos Generación 2025 Sábados Rescate 1</p>
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
                            to="/inmobilization/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1Rnfsa9yfGk1X8vWPptTCUSNO46Snf2nq/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2"/>
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <a href="https://drive.google.com/file/d/1FZXY1nS20I6bRHkskioGiJgygitK4VWu/view?usp=drive_link"
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
                                Materiales y Equipo
                            </button>
                            <button
                                onClick={() => setActiveTab('treatment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'treatment'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Técnicas de Inmovilización
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es la inmovilización?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        La inmovilización es el proceso mediante el cual se restringe el movimiento de una parte del cuerpo lesionada para prevenir daños adicionales, reducir el dolor y facilitar el traslado del paciente en el entorno prehospitalario.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        La inmovilización adecuada es esencial para prevenir la conversión de lesiones cerradas en abiertas y proteger estructuras neurovasculares durante el traslado del paciente.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios fundamentales</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Inmovilizar articulaciones adyacentes</li>
                                            <li>Evaluar pulsos distales antes y después</li>
                                            <li>Mantener extremidad en posición funcional</li>
                                            <li>Retirar joyas y ropa que pueda comprometer</li>
                                            <li>Exponer zona lesionada para evaluación</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>No intentar realinear fracturas con deformidad severa</li>
                                            <li>Evaluar circulación, sensibilidad y movimiento (CSM)</li>
                                            <li>Utilizar el dispositivo adecuado según lesión</li>
                                            <li>Considerar la comodidad del paciente</li>
                                            <li>Documentar hallazgos antes y después</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Indicaciones comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Trauma musculoesquelético</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Fracturas óseas sospechadas o confirmadas</li>
                                                <li>Luxaciones articulares</li>
                                                <li>Lesiones de tejidos blandos graves</li>
                                                <li>Traumatismos por aplastamiento</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Trauma espinal</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Sospecha de lesión cervical</li>
                                                <li>Trauma espinal por mecanismo de alta energía</li>
                                                <li>Pacientes inconscientes con trauma</li>
                                                <li>Déficit neurológico tras traumatismo</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Objetivos de la inmovilización</h2>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li><strong>Prevenir mayor daño:</strong> Evitar que fragmentos óseos lesionen tejidos, vasos o nervios.</li>
                                        <li><strong>Reducir dolor:</strong> Limitar el movimiento disminuye la estimulación dolorosa.</li>
                                        <li><strong>Prevenir complicaciones:</strong> Como síndrome compartimental, embolia grasa o shock neurogénico.</li>
                                        <li><strong>Facilitar el transporte:</strong> Permitir mover al paciente sin causar daño adicional.</li>
                                        <li><strong>Favorecer la recuperación:</strong> Una inmovilización adecuada es el primer paso para la cicatrización ósea.</li>
                                    </ol>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Dispositivos de inmovilización</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Inmovilización espinal</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Collarín cervical:</strong> Limita flexión/extensión y rotación.</li>
                                                <li><strong>Tabla espinal larga:</strong> Inmovilización completa de columna.</li>
                                                <li><strong>Camilla de cuchara:</strong> Permite transferencia con mínimo movimiento.</li>
                                                <li><strong>Inmovilizador de cabeza:</strong> Complementa al collarín cervical.</li>
                                                <li><strong>Chaleco de extricación (KED):</strong> Para extracción vehicular.</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Férulas para extremidades</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Férulas rígidas:</strong> De plástico, metal o madera.</li>
                                                <li><strong>Férulas neumáticas:</strong> Se inflan para inmovilizar.</li>
                                                <li><strong>Férulas de vacío:</strong> Moldean al extraer el aire.</li>
                                                <li><strong>Férulas de tracción:</strong> Para fracturas de fémur.</li>
                                                <li><strong>Vendajes y cabestrillos:</strong> Para inmovilizaciones simples.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Equipo adicional</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Dispositivo</th>
                                                    <th className="py-2 px-4 border">Uso principal</th>
                                                    <th className="py-2 px-4 border">Ventajas</th>
                                                    <th className="py-2 px-4 border">Consideraciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Férula de tracción</td>
                                                    <td className="py-2 px-4 border">Fracturas de fémur</td>
                                                    <td className="py-2 px-4 border">Reduce dolor y sangrado</td>
                                                    <td className="py-2 px-4 border">Contraindicada en fracturas de cadera o rodilla</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Collarín cervical</td>
                                                    <td className="py-2 px-4 border">Trauma cervical</td>
                                                    <td className="py-2 px-4 border">Limita movimiento cervical</td>
                                                    <td className="py-2 px-4 border">Requiere talla adecuada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Férula de vacío</td>
                                                    <td className="py-2 px-4 border">Extremidades</td>
                                                    <td className="py-2 px-4 border">Se adapta a deformidades</td>
                                                    <td className="py-2 px-4 border">Mantener bomba a mano para reajustes</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Chaleco KED</td>
                                                    <td className="py-2 px-4 border">Extricación vehicular</td>
                                                    <td className="py-2 px-4 border">Inmovilización torácica y cervical</td>
                                                    <td className="py-2 px-4 border">Tiempo de colocación prolongado</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Materiales de sujeción</h2>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-700">Cintas y correas</h3>
                                            <ul className="list-disc list-inside text-gray-600 text-sm">
                                                <li>Araña para tabla espinal</li>
                                                <li>Cinturones con velcro</li>
                                                <li>Correas con hebillas</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-700">Vendajes</h3>
                                            <ul className="list-disc list-inside text-gray-600 text-sm">
                                                <li>Vendas elásticas</li>
                                                <li>Vendas de gasa</li>
                                                <li>Vendas cohesivas</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-gray-700">Materiales de relleno</h3>
                                            <ul className="list-disc list-inside text-gray-600 text-sm">
                                                <li>Almohadillas</li>
                                                <li>Toallas o mantas</li>
                                                <li>Rollos de gasa</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'treatment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Técnicas de inmovilización</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Inmovilización de extremidades</h3>
                                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                <li>Evaluar CSM (circulación, sensibilidad, movimiento)</li>
                                                <li>Exponer la zona lesionada completamente</li>
                                                <li>Aplicar tracción manual suave si es necesario</li>
                                                <li>Inmovilizar en posición anatómica o encontrada</li>
                                                <li>Incluir articulaciones proximal y distal</li>
                                                <li>Reevaluar CSM tras la inmovilización</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Inmovilización espinal</h3>
                                            <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                                <li>Mantener alineación neutra de columna</li>
                                                <li>Aplicar estabilización manual inicial</li>
                                                <li>Colocar collarín cervical de tamaño adecuado</li>
                                                <li>Transferir al paciente a dispositivo de inmovilización</li>
                                                <li>Asegurar torso, pelvis y extremidades</li>
                                                <li>Fijar cabeza y reevaluar</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Inmovilización por regiones</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Miembro superior</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>Hombro y clavícula:</strong> Cabestrillo y vendaje en ocho</li>
                                                <li><strong>Húmero:</strong> Férula rígida o de vacío más cabestrillo</li>
                                                <li><strong>Codo:</strong> Férula en posición encontrada, nunca forzar</li>
                                                <li><strong>Antebrazo:</strong> Férula que incluya muñeca y codo</li>
                                                <li><strong>Mano:</strong> Posición funcional con férula palmar</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Miembro inferior</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>Pelvis:</strong> Estabilización con sábanas o faja pélvica</li>
                                                <li><strong>Fémur:</strong> Férula de tracción (si no hay contraindicaciones)</li>
                                                <li><strong>Rodilla:</strong> Férula rígida o de vacío en posición encontrada</li>
                                                <li><strong>Tibia/peroné:</strong> Férula que incluya rodilla y tobillo</li>
                                                <li><strong>Tobillo/pie:</strong> Férula en L o de vacío en posición neutral</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Columna vertebral</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li><strong>Columna cervical:</strong> Collarín rígido + inmovilizadores laterales</li>
                                                <li><strong>Politraumatizado:</strong> Tabla espinal completa con sujeción</li>
                                                <li><strong>Extricación:</strong> Chaleco KED + collarín cervical</li>
                                                <li><strong>Transferencias:</strong> Camilla de cuchara para minimizar movimientos</li>
                                                <li><strong>Decúbito prono:</strong> Técnica de log-roll para volteo seguro</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones especiales</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2">Pacientes pediátricos</h3>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>Usar dispositivos pediátricos adecuados</li>
                                                <li>Considerar mayor tamaño proporcional de cabeza</li>
                                                <li>Mayor elasticidad ósea (deformidad sin fractura)</li>
                                                <li>Mayor riesgo de hipotermia</li>
                                                <li>Mantener comunicación tranquilizadora</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 bg-gray-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2">Adultos mayores</h3>
                                            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                                                <li>Mayor fragilidad ósea</li>
                                                <li>Considerar comorbilidades (osteoporosis)</li>
                                                <li>Piel más frágil (riesgo de úlceras por presión)</li>
                                                <li>Acolchar puntos de presión</li>
                                                <li>Evaluar más frecuentemente el estado neurovascular</li>
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
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Fractura de tibia</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 35 años que sufre caída mientras juega fútbol. Presenta dolor intenso en pierna derecha, deformidad
                                        evidente en tercio medio de tibia y ligera exposición ósea.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: Respiración normal</li>
                                            <li>C: Pulsos distales presentes pero débiles, llenado capilar 3 segundos</li>
                                            <li>D: Alerta, orientado, dolor intenso (8/10)</li>
                                            <li>E: Deformidad tibia, sangrado moderado, exposición ósea de 1 cm</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Control de hemorragia con presión directa y apósito estéril</li>
                                            <li>Evaluación de CSM distal (pulso, sensibilidad, movimiento)</li>
                                            <li>Aplicación de férula rígida o de vacío incluyendo rodilla y tobillo</li>
                                            <li>Elevación de la extremidad tras inmovilización</li>
                                            <li>Reevaluación de CSM y transporte prioritario</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Trauma cervical</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 24 años en accidente automovilístico. Se encuentra dentro del vehículo, consciente, con dolor cervical intenso
                                        e imposibilidad para mover el cuello.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 22/min, sin dificultad respiratoria</li>
                                            <li>C: FC 95/min, buena perfusión</li>
                                            <li>D: Consciente, orientada, refiere parestesias en extremidad superior derecha</li>
                                            <li>E: Dolor a la palpación cervical, sin deformidades evidentes</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Estabilización manual inmediata de columna cervical</li>
                                            <li>Colocación de collarín cervical de tamaño adecuado</li>
                                            <li>Extricación con chaleco KED (manteniendo alineación)</li>
                                            <li>Transferencia a tabla espinal con técnica de puente</li>
                                            <li>Inmovilización completa incluyendo cabeza y reevaluación neurológica</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Fractura de fémur</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Adolescente de 16 años tras caída de bicicleta. Presenta deformidad evidente en muslo izquierdo, dolor intenso,
                                        acortamiento del miembro y rotación externa.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: Taquipnea leve (24/min)</li>
                                            <li>C: FC 110/min, TA 100/70 mmHg</li>
                                            <li>D: Alerta, ansiedad por dolor severo (9/10)</li>
                                            <li>E: Deformidad en muslo, hematoma extenso, pulso pedio débil</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Administración de analgesia según protocolo</li>
                                            <li>Evaluación neurovascular distal (CSM)</li>
                                            <li>Medición y preparación de férula de tracción</li>
                                            <li>Aplicación de tracción manual suave durante colocación</li>
                                            <li>Ajuste de tracción hasta alivio del dolor y reevaluación de CSM</li>
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
                                    <li>AAOS. (2021). <em>Emergencias Médicas Prehospitalarias</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                    <li>American Academy of Orthopaedic Surgeons. (2022). <em>Manejo de fracturas en entorno prehospitalario</em>.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.jems.com/patient-care/how-to-use-traction-splints/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Uso de férulas de tracción</a></li>
                                    <li><a href="https://www.ems1.com/ems-products/ambulance-disposable-supplies/articles/immobilization-device-for-spinal-injuries-aGcHE5GHYj2TmzLZ/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Dispositivos para lesiones espinales</a></li>
                                    <li><a href="https://www.youtube.com/c/EMTprep" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMT Prep - Canal de YouTube con técnicas de inmovilización</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>Complete Anatomy - Visualización 3D de lesiones óseas</li>
                                    <li>EMT Review Plus - Protocolos de inmovilización</li>
                                    <li>Traumapedia - Referencias sobre manejo de trauma</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

