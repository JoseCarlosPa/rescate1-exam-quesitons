import {NavLink} from "react-router";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./Pharmacology.questions.ts";
import {GiMedicines} from "react-icons/gi";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {FaPills} from "react-icons/fa";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {TbNotebook} from "react-icons/tb";
import {PiChalkboardTeacher} from "react-icons/pi";

export default function Pharmacology(){
    const [activeTab, setActiveTab] = useState<'overview' | 'rights' | 'drugs' | 'tables'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);
    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center  justify-center bg-gradient-to-b from-gray-100 to-white pb-12 md:px-0 px-4   p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <GiMedicines className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Principios de la Farmacología</h1>
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
                            to="/pharmacology/exam"
                            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <MdQuiz className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Examen</p>
                        </NavLink>
                        <a href="https://docs.google.com/presentation/d/1qr0_uoihdOoUbp2bYr91hPmWs7hAnFXC/edit?usp=drive_link&ouid=107287742628985461156&rtpof=true&sd=true"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <PiChalkboardTeacher className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Presentación</p>
                        </a>
                        
                        <a href="https://www.medicamentosplm.com/Home/Medicamento/A/1"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <FaPills className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Diccionario PLM</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="bg-white p-6 rounded-lg shadow-md mb-8 max-w-4xl mx-auto">
                            <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Repasa tus conocimientos de farmacología</h3>
                            <button
                                onClick={() => setShowQuickQuiz(false)}
                                className="mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded transition">
                                Cerrar Quiz
                            </button>
                        </div>
                    )}

                    {/* Navegación por pestañas */}
                    <div className="mb-6 border-b border-gray-200 max-w-4xl mx-auto">
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
                                onClick={() => setActiveTab('rights')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'rights'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                6 Correctos
                            </button>
                            <button
                                onClick={() => setActiveTab('drugs')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'drugs'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Medicamentos Comunes
                            </button>
                            <button
                                onClick={() => setActiveTab('tables')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'tables'
                                        ? 'border-orange-500 text-orange-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Tablas Útiles
                            </button>
                        </nav>
                    </div>

                    {/* Contenido de pestañas */}
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 mb-8">
                        {activeTab === 'overview' && (
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">¿Qué es la Farmacología?</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Es la ciencia que estudia las propiedades, acciones y uso de los medicamentos en el cuerpo.</li>
                                        <li>Incluye el conocimiento de indicaciones, contraindicaciones, dosis, efectos secundarios y vías de administración.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Conceptos Básicos</h2>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li><strong>Fármaco:</strong> Sustancia química que modifica funciones corporales.</li>
                                        <li><strong>Medicamento:</strong> Preparado que contiene uno o más fármacos para prevenir, tratar o curar enfermedades.</li>
                                        <li><strong>Dosis:</strong> Cantidad específica que se debe administrar.</li>
                                        <li><strong>Vía de administración:</strong> Método por el cual un medicamento entra al cuerpo (oral, sublingual, intramuscular, intravenosa, etc.).</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        {activeTab === 'rights' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-2">6 Correctos de la Administración de Medicamentos</h2>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Paciente correcto</li>
                                    <li>Medicamento correcto</li>
                                    <li>Dosis correcta</li>
                                    <li>Hora correcta</li>
                                    <li>Vía correcta</li>
                                    <li>Registro correcto</li>
                                </ul>
                                <div className="mt-6">
                                    <h3 className="text-lg font-semibold mb-2">Tabla resumen de los 6 correctos</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Correcto</th>
                                                    <th className="py-2 px-4 border">Descripción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Paciente</td>
                                                    <td className="py-2 px-4 border">Verificar identidad antes de administrar</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Medicamento</td>
                                                    <td className="py-2 px-4 border">Confirmar nombre y presentación</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Dosis</td>
                                                    <td className="py-2 px-4 border">Corroborar cantidad y concentración</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Hora</td>
                                                    <td className="py-2 px-4 border">Administrar en el momento indicado</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Vía</td>
                                                    <td className="py-2 px-4 border">Asegurar la vía de administración adecuada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Registro</td>
                                                    <td className="py-2 px-4 border">Documentar todo lo administrado</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}
                        {activeTab === 'drugs' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-2">Medicamentos Comunes en el Ámbito Prehospitalario y Más Recetados en México (2025)</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Medicamento</th>
                                                <th className="py-2 px-4 border">Indicaciones</th>
                                                <th className="py-2 px-4 border">Dosis Adulto</th>
                                                <th className="py-2 px-4 border">Vía</th>
                                                <th className="py-2 px-4 border">Contraindicaciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border">Aspirina</td>
                                                <td className="py-2 px-4 border">Síndrome coronario agudo, dolor torácico</td>
                                                <td className="py-2 px-4 border">160-325 mg</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Alergia, sangrado activo, úlcera péptica</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Paracetamol</td>
                                                <td className="py-2 px-4 border">Fiebre, dolor leve a moderado</td>
                                                <td className="py-2 px-4 border">500-1000 mg c/6-8h</td>
                                                <td className="py-2 px-4 border">Oral, IV</td>
                                                <td className="py-2 px-4 border">Hepatopatía grave</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Ibuprofeno</td>
                                                <td className="py-2 px-4 border">Dolor, fiebre, inflamación</td>
                                                <td className="py-2 px-4 border">400-600 mg c/8h</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Úlcera péptica, insuficiencia renal</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Amoxicilina</td>
                                                <td className="py-2 px-4 border">Infecciones bacterianas</td>
                                                <td className="py-2 px-4 border">500 mg c/8h</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Alergia a penicilinas</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Metformina</td>
                                                <td className="py-2 px-4 border">Diabetes tipo 2</td>
                                                <td className="py-2 px-4 border">500-850 mg c/12h</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Insuficiencia renal, acidosis láctica</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Salbutamol</td>
                                                <td className="py-2 px-4 border">Crisis asmática, EPOC</td>
                                                <td className="py-2 px-4 border">2 inhalaciones (100 mcg c/u) o nebulización</td>
                                                <td className="py-2 px-4 border">Inhalada, nebulizada</td>
                                                <td className="py-2 px-4 border">Taquiarritmias, hipersensibilidad</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Omeprazol</td>
                                                <td className="py-2 px-4 border">Gastritis, reflujo, úlcera</td>
                                                <td className="py-2 px-4 border">20-40 mg/día</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Hipersensibilidad</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Loratadina</td>
                                                <td className="py-2 px-4 border">Alergias</td>
                                                <td className="py-2 px-4 border">10 mg/día</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Hipersensibilidad</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Oxígeno</td>
                                                <td className="py-2 px-4 border">Hipoxia, dificultad respiratoria</td>
                                                <td className="py-2 px-4 border">Titulada a SpO₂</td>
                                                <td className="py-2 px-4 border">Inhalada</td>
                                                <td className="py-2 px-4 border">EPOC (precaución), intoxicación por parafina</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Glucosa oral</td>
                                                <td className="py-2 px-4 border">Hipoglucemia</td>
                                                <td className="py-2 px-4 border">15-25 g</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Alteración del estado de conciencia</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Epinefrina</td>
                                                <td className="py-2 px-4 border">Anafilaxia, paro cardíaco</td>
                                                <td className="py-2 px-4 border">0.3-0.5 mg</td>
                                                <td className="py-2 px-4 border">IM, SC</td>
                                                <td className="py-2 px-4 border">Hipertensión, cardiopatía</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Carbón activado</td>
                                                <td className="py-2 px-4 border">Intoxicaciones orales recientes</td>
                                                <td className="py-2 px-4 border">1 g/kg</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Ingesta de ácidos, álcalis, disminución del estado de alerta</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Losartán</td>
                                                <td className="py-2 px-4 border">Hipertensión arterial, insuficiencia cardiaca</td>
                                                <td className="py-2 px-4 border">50-100 mg/día</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Embarazo, hipersensibilidad, insuficiencia renal severa</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Enalapril</td>
                                                <td className="py-2 px-4 border">Hipertensión arterial, insuficiencia cardiaca</td>
                                                <td className="py-2 px-4 border">5-20 mg/día</td>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Embarazo, angioedema previo, estenosis bilateral de arterias renales</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {activeTab === 'tables' && (
                            <div className="space-y-8">
                                <h2 className="text-2xl font-semibold mb-2">Tablas útiles para el paramédico</h2>
                                <div className="overflow-x-auto mb-6">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Vía de administración</th>
                                                <th className="py-2 px-4 border">Ventajas</th>
                                                <th className="py-2 px-4 border">Desventajas</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border">Oral</td>
                                                <td className="py-2 px-4 border">Fácil, no invasiva</td>
                                                <td className="py-2 px-4 border">Absorción lenta, no en inconscientes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Sublingual</td>
                                                <td className="py-2 px-4 border">Rápida absorción</td>
                                                <td className="py-2 px-4 border">No en pacientes inconscientes</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Intramuscular (IM)</td>
                                                <td className="py-2 px-4 border">Absorción rápida, útil en emergencias</td>
                                                <td className="py-2 px-4 border">Dolor, riesgo de lesión</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Intravenosa (IV)</td>
                                                <td className="py-2 px-4 border">Efecto inmediato</td>
                                                <td className="py-2 px-4 border">Requiere acceso venoso, riesgo de complicaciones</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Inhalada</td>
                                                <td className="py-2 px-4 border">Rápida, directa a pulmones</td>
                                                <td className="py-2 px-4 border">Difícil dosificación precisa</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full bg-white">
                                        <thead>
                                            <tr className="bg-gray-100">
                                                <th className="py-2 px-4 border">Término</th>
                                                <th className="py-2 px-4 border">Definición</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="py-2 px-4 border">Farmacocinética</td>
                                                <td className="py-2 px-4 border">Procesos de absorción, distribución, metabolismo y excreción del fármaco</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Farmacodinamia</td>
                                                <td className="py-2 px-4 border">Efectos y mecanismos de acción del fármaco en el organismo</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Biodisponibilidad</td>
                                                <td className="py-2 px-4 border">Porcentaje de fármaco que llega a la circulación sistémica</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2 px-4 border">Vida media</td>
                                                <td className="py-2 px-4 border">Tiempo necesario para reducir la concentración plasmática a la mitad</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* FAQ Section */}
                    <section className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm mb-8">
                        <h2 className="text-3xl font-bold mb-6 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, idx) => (
                                <Disclosure key={idx}>
                                    {({ open }) => (
                                        <div className="border rounded-lg overflow-hidden">
                                            <Disclosure.Button className="flex w-full justify-between items-center bg-gray-100  px-4 py-3 text-left text-lg font-medium hover:bg-orange-100 ">
                                                <span>{faq.question}</span>
                                                <ChevronUpIcon
                                                    className={`${
                                                        open ? "transform rotate-180" : ""
                                                    } h-5 w-5 text-gray-500`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pb-4 pt-2 text-gray-700 ">
                                                {faq.answer}
                                            </Disclosure.Panel>
                                        </div>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

