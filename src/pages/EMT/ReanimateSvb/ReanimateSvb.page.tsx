import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./ReanimateSvb.questions.ts";
import {FaHandHoldingMedical} from "react-icons/fa";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function ReanimateSvb() {
    const [activeTab, setActiveTab] = useState<'overview' | 'algorithm' | 'techniques' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaHandHoldingMedical className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Reanimación: Soporte Vital Básico (SVB)</h1>
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
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                        <NavLink
                            to={`${AllRoutes.REANIMATE_SVB}/exam`}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen Completo</p>
                        </NavLink>

                        <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>

                        <button
                            onClick={() => setShowQuickQuiz(!showQuickQuiz)}
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <TbNotebook className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Quiz Rápido</p>
                        </button>

                        <a href="https://www.heart.org/es/cpr" target="_blank" rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Recursos AHA</p>
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
                                onClick={() => setActiveTab('algorithm')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'algorithm' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Algoritmo SVB
                            </button>
                            <button
                                onClick={() => setActiveTab('techniques')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'techniques' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Técnicas y Dispositivos
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué es el Soporte Vital Básico (SVB)?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        El SVB es el conjunto de maniobras y técnicas destinadas a reconocer un paro cardiorrespiratorio (PCR) y mantener la circulación y oxigenación hasta la llegada de ayuda avanzada. Incluye RCP, desfibrilación temprana y manejo básico de la vía aérea.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Cadena de Supervivencia</h2>
                                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                        <li>Reconocimiento temprano y activación del sistema de emergencias</li>
                                        <li>RCP de alta calidad e inmediata</li>
                                        <li>Desfibrilación temprana</li>
                                        <li>Soporte vital avanzado</li>
                                        <li>Cuidados post paro cardíaco</li>
                                    </ol>
                                    <div className="flex justify-center mt-4">
                                        <img src="/chain.png" alt="Cadena de supervivencia" className="max-h-48 rounded shadow" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'algorithm' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Algoritmo de Soporte Vital Básico (SVB)</h2>
                                <div className="flex justify-center mb-4">
                                    <img src="/bls.jpg" alt="Algoritmo SVB" className="max-h-80 rounded shadow" />
                                </div>
                                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                                    <li>Verificar seguridad de la escena</li>
                                    <li>Comprobar respuesta de la víctima</li>
                                    <li>Pedir ayuda y activar el SEM</li>
                                    <li>Buscar pulso y respiración (máx. 10 seg)</li>
                                    <li>Si no respira o no hay pulso, iniciar RCP (30:2 adultos)</li>
                                    <li>Solicitar y usar DEA lo antes posible</li>
                                    <li>Seguir instrucciones del DEA</li>
                                    <li>Continuar RCP hasta llegada de ayuda o recuperación</li>
                                </ol>
                            </div>
                        )}
                        {activeTab === 'techniques' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Técnicas y Dispositivos en SVB</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-medium text-lg mb-2 text-gray-800">Compresiones torácicas</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Profundidad: al menos 5 cm en adultos</li>
                                            <li>Frecuencia: 100-120 por minuto</li>
                                            <li>Permitir descompresión completa</li>
                                            <li>Minimizar interrupciones</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-lg mb-2 text-gray-800">Ventilación y vía aérea</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Maniobra frente-mentón o elevación mandibular</li>
                                            <li>Uso de barrera (mascarilla, bolsa-válvula-mascarilla)</li>
                                            <li>Relación compresión:ventilación 30:2 en adultos</li>
                                            <li>Evitar ventilación excesiva</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-lg mb-2 text-gray-800">Desfibrilador Externo Automático (DEA)</h3>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Encender y seguir instrucciones</li>
                                        <li>Colocar parches adhesivos</li>
                                        <li>No tocar a la víctima durante el análisis</li>
                                        <li>Administrar descarga si es indicado</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Paro cardíaco en vía pública</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 55 años colapsa súbitamente en la calle. No responde, no respira y no tiene pulso.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Verificar seguridad de la escena</li>
                                            <li>Comprobar respuesta y pedir ayuda</li>
                                            <li>Iniciar RCP (30:2)</li>
                                            <li>Solicitar DEA y usarlo en cuanto llegue</li>
                                            <li>Continuar hasta llegada de SEM</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Paro en domicilio con testigos</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 68 años colapsa en casa. Un familiar inicia RCP mientras otro llama al 911. Al llegar, la paciente sigue sin pulso.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Relevar al familiar y continuar RCP de alta calidad</li>
                                            <li>Colocar DEA y seguir instrucciones</li>
                                            <li>Ventilar con bolsa-válvula-mascarilla si hay personal entrenado</li>
                                            <li>Traslado inmediato tras retorno de circulación</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paro en niño</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Niño de 7 años encontrado inconsciente en la alberca. No respira y no responde.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Retirar del agua y verificar respuesta</li>
                                            <li>Iniciar RCP (5 ventilaciones iniciales, luego 15:2)</li>
                                            <li>Solicitar DEA pediátrico</li>
                                            <li>Continuar hasta llegada de SEM</li>
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
                                                    className={`$${open ? "transform rotate-180" : ""} h-5 w-5 text-gray-500`}
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
                                    <li><a href="https://cpr.heart.org/es" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AHA - Recursos de RCP y SVB</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Canal de YouTube con videos educativos</a></li>
                                    <li><a href="https://www.ems1.com/cpr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre RCP</a></li>
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

