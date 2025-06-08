import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./SecurityOfPersonal.questions.ts";
import {GiProtectionGlasses} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function SecurityOfPersonal(){
    const [activeTab, setActiveTab] = useState<'overview' | 'epp' | 'stress' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <GiProtectionGlasses className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Seguridad y bienestar del personal</h1>
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
                            to="/security-of-personal/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1OtpAqjIRZ7Gya51-UDNSIl1x46aLJXcU/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://www.ems1.com/ems-safety/"
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
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Seguridad y bienestar</h3>
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
                                onClick={() => setActiveTab('epp')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'epp' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                EPP y Seguridad en Escena
                            </button>
                            <button
                                onClick={() => setActiveTab('stress')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'stress' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Estrés y Bienestar
                            </button>
                            <button
                                onClick={() => setActiveTab('practice')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'practice' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-300'
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Importancia de la seguridad y bienestar</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>La seguridad del personal es la prioridad número uno en cualquier emergencia (AAOS 11ª ed.).</li>
                                        <li>Un rescatista lesionado no puede ayudar a otros y puede convertirse en una víctima más.</li>
                                        <li>El bienestar físico y mental es esencial para un desempeño óptimo y para evitar errores.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Principios básicos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Evaluar la escena antes de entrar.</li>
                                        <li>Identificar riesgos: eléctricos, biológicos, químicos, físicos y sociales.</li>
                                        <li>Utilizar siempre el equipo de protección personal (EPP) adecuado.</li>
                                        <li>Comunicación constante con el equipo y autoridades.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Normas y reglamentos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li><strong>NOM-035-STPS-2018:</strong> Bienestar psicológico y prevención de riesgos psicosociales.</li>
                                        <li><strong>NOM-034-SSA3-2013:</strong> Seguridad y equipamiento en ambulancias.</li>
                                        <li><strong>Protocolos AAOS:</strong> Seguridad en escena, uso de EPP y reporte de incidentes.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'epp' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Equipo de Protección Personal (EPP)</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Guantes, mascarilla, gafas, bata impermeable y botas.</li>
                                        <li>Uso obligatorio en contacto con sangre, fluidos o riesgo biológico.</li>
                                        <li>Revisión y recambio frecuente del EPP.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Seguridad en la escena</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Evaluar peligros antes de acercarse: tráfico, fuego, armas, sustancias químicas.</li>
                                        <li>Coordinar con bomberos, policía y protección civil.</li>
                                        <li>Establecer zonas seguras y rutas de evacuación.</li>
                                        <li>Uso de chaleco reflectante y señalización en accidentes viales.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Prevención de lesiones y riesgos</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Ergonomía: técnicas correctas de levantamiento y traslado de pacientes.</li>
                                        <li>Uso de camillas, tablas y dispositivos de inmovilización.</li>
                                        <li>Capacitación continua en manejo de materiales peligrosos (HAZMAT).</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'stress' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Estrés, fatiga y bienestar psicológico</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>El trabajo prehospitalario es altamente estresante y puede causar fatiga crónica.</li>
                                        <li>Reconocer signos de estrés: insomnio, irritabilidad, ansiedad, dificultad para concentrarse.</li>
                                        <li>Importancia del autocuidado: alimentación, hidratación, descanso y ejercicio.</li>
                                        <li>Buscar apoyo psicológico tras eventos traumáticos (CISM, grupos de apoyo).</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Prevención y manejo del estrés</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Rotación de turnos y pausas programadas.</li>
                                        <li>Capacitación en manejo de estrés y resiliencia.</li>
                                        <li>Promover la comunicación abierta en el equipo.</li>
                                        <li>Uso de técnicas de relajación y mindfulness.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Bienestar integral</h2>
                                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                                        <li>Balance entre vida laboral y personal.</li>
                                        <li>Participar en actividades recreativas y familiares.</li>
                                        <li>Evaluaciones médicas periódicas.</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos prácticos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Escena insegura</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        El equipo llega a un accidente vial en carretera de noche, con tráfico activo y poca visibilidad.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">¿Qué acciones son prioritarias?</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Colocarse chaleco reflectante y señalizar la zona.</li>
                                            <li>Solicitar apoyo policial para control de tráfico.</li>
                                            <li>No ingresar hasta que la escena sea segura.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Exposición a material biológico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Durante la atención de un paciente con hemorragia, un TAMP sufre una salpicadura de sangre en el ojo.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">¿Qué debe hacer el personal?</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Lavar inmediatamente con agua abundante.</li>
                                            <li>Reportar el incidente y acudir a valoración médica.</li>
                                            <li>Completar el formato de exposición laboral.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Estrés agudo tras evento crítico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Tras atender un accidente con víctimas fatales, un miembro del equipo presenta insomnio y ansiedad persistente.
                                    </p>
                                    <div>
                                        <h4 className="font-medium mb-2">¿Cómo debe manejarse?</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>Buscar apoyo psicológico profesional.</li>
                                            <li>Participar en sesiones de descompresión o CISM.</li>
                                            <li>Evitar el estigma y promover el autocuidado.</li>
                                        </ul>
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
                                    <li>NOM-035-STPS-2018. <a href="https://www.gob.mx/cms/uploads/attachment/file/484604/NOM-035-STPS-2018.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Norma Oficial Mexicana</a></li>
                                    <li>NOM-034-SSA3-2013. <a href="https://www.gob.mx/cms/uploads/attachment/file/512076/NOM-034-SSA3-2013.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Norma de ambulancias</a></li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/ems-safety/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Seguridad en EMS</a></li>
                                    <li><a href="https://www.jems.com/ems-insider/ems-safety/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Seguridad y bienestar</a></li>
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

