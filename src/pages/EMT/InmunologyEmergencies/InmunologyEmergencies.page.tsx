import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./InmunologyEmergencies.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {FaBacteria} from "react-icons/fa";

export default function InmunologyEmergencies(){
    const [activeTab, setActiveTab] = useState<'general' | 'physiology' | 'management' | 'cases'>('general');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <FaBacteria className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Emergencias Inmunológicas</h1>
                        <p className="text-sm italic mb-4">Basado en AAOS 11ª Edición - Atención Médica Prehospitalaria</p>
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
                            to={`${AllRoutes.INMUNO_EMERGENCY}/exam`}
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
                        <a href="https://drive.google.com/file/d/1dAOAb1_lf5dCRanA_eszIrQASSC11Krs/view?usp=drive_link"
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
                                onClick={() => setActiveTab('general')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'general' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Generalidades
                            </button>
                            <button
                                onClick={() => setActiveTab('physiology')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'physiology' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Fisiopatología y Anatomía
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo Prehospitalario
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
                        {activeTab === 'general' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las emergencias inmunológicas?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las emergencias inmunológicas son reacciones graves del sistema inmunitario, como la anafilaxia, que pueden poner en peligro la vida si no se tratan de inmediato. Estas emergencias suelen ser desencadenadas por alérgenos (alimentos, medicamentos, picaduras, etc.) y requieren intervención prehospitalaria rápida.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        La anafilaxia es la forma más grave y puede causar dificultad respiratoria, shock y paro cardíaco. El reconocimiento temprano y el tratamiento inmediato son esenciales para salvar vidas.
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Urticaria, enrojecimiento o hinchazón de piel y mucosas</li>
                                            <li>Dificultad para respirar, sibilancias, estridor</li>
                                            <li>Edema de labios, lengua o glotis</li>
                                            <li>Taquicardia, hipotensión</li>
                                            <li>Náusea, vómito, dolor abdominal</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Mareos, síncope</li>
                                            <li>Ansiedad, sensación de muerte inminente</li>
                                            <li>Disminución del nivel de conciencia</li>
                                            <li>Choque (shock) anafiláctico</li>
                                            <li>Prurito generalizado</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Causas frecuentes</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Alimentos</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Maní, nueces, mariscos, leche, huevo</li>
                                                <li>Frutas y otros alérgenos alimentarios</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Medicamentos y otros</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Antibióticos (penicilinas, cefalosporinas)</li>
                                                <li>AINES, analgésicos</li>
                                                <li>Picaduras de insectos</li>
                                                <li>Látex</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'physiology' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Sistema inmunológico y reacción alérgica</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El sistema inmunológico protege al cuerpo de agentes externos. En las reacciones alérgicas, el sistema responde de forma exagerada a sustancias normalmente inofensivas (alérgenos), liberando histamina y otros mediadores que causan los síntomas.
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Fase de sensibilización:</strong> Exposición inicial al alérgeno, producción de IgE</li>
                                            <li><strong>Fase de reacción:</strong> Nueva exposición, liberación masiva de mediadores</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Allergic_reaction_es.svg/500px-Allergic_reaction_es.svg.png"
                                            alt="Reacción alérgica"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anafilaxia: fisiopatología</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Mecanismos</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La anafilaxia es una reacción sistémica grave, mediada por IgE, que provoca vasodilatación, broncoconstricción y aumento de la permeabilidad capilar.
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Vasodilatación → hipotensión</li>
                                                <li>Broncoconstricción → dificultad respiratoria</li>
                                                <li>Edema de glotis y vías aéreas</li>
                                                <li>Shock distributivo</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Manifestaciones clínicas</h3>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Inicio súbito (minutos a 2 horas tras exposición)</li>
                                                <li>Compromiso cutáneo, respiratorio, cardiovascular y/o digestivo</li>
                                                <li>Puede progresar rápidamente a paro respiratorio/cardiaco</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación prehospitalaria</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Parámetro</th>
                                                    <th className="py-2 px-4 border">Valor esperado</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Frecuencia respiratoria</td>
                                                    <td className="py-2 px-4 border">Elevada o irregular</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Presión arterial</td>
                                                    <td className="py-2 px-4 border">Disminuida (hipotensión)</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Saturación O₂</td>
                                                    <td className="py-2 px-4 border">Baja (&lt;94%)</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo prehospitalario de la anafilaxia</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación inicial</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Evaluar ABCDE (vía aérea, respiración, circulación, estado neurológico, exposición)</li>
                                                <li>Identificar signos de anafilaxia</li>
                                                <li>Retirar alérgeno si es posible</li>
                                                <li>Solicitar ayuda avanzada</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Tratamiento inmediato</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Adrenalina IM (0.3-0.5 mg en adultos, 0.01 mg/kg en niños)</strong></li>
                                                <li>Oxígeno suplementario</li>
                                                <li>Colocar al paciente en decúbito supino con piernas elevadas</li>
                                                <li>Acceso IV si es posible</li>
                                                <li>Monitorización continua</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Medicamentos y dispositivos</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Medicamento</th>
                                                    <th className="py-2 px-4 border">Dosis</th>
                                                    <th className="py-2 px-4 border">Vía</th>
                                                    <th className="py-2 px-4 border">Indicaciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Adrenalina (epinefrina)</td>
                                                    <td className="py-2 px-4 border">0.3-0.5 mg IM (adulto)</td>
                                                    <td className="py-2 px-4 border">Intramuscular</td>
                                                    <td className="py-2 px-4 border">Anafilaxia</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Antihistamínicos</td>
                                                    <td className="py-2 px-4 border">Según protocolo</td>
                                                    <td className="py-2 px-4 border">Oral/IV</td>
                                                    <td className="py-2 px-4 border">Síntomas cutáneos</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Corticoides</td>
                                                    <td className="py-2 px-4 border">Según protocolo</td>
                                                    <td className="py-2 px-4 border">IV/IM</td>
                                                    <td className="py-2 px-4 border">Prevención de recaídas</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Consideraciones especiales</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Pacientes con dispositivos autoinyectores</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Permitir y asistir al paciente a usar su autoinyector (EpiPen, etc.)</li>
                                                <li>Administrar una segunda dosis si no hay mejoría en 5-15 minutos</li>
                                                <li>Transportar siempre a un centro hospitalario</li>
                                            </ol>
                                        </div>
                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Manejo del shock anafiláctico</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Administrar líquidos IV si hay hipotensión</li>
                                                <li>Monitorizar signos vitales y nivel de conciencia</li>
                                                <li>Preparar para soporte avanzado si es necesario</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'cases' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Anafilaxia por alimento</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 19 años, tras ingerir mariscos, presenta urticaria generalizada, dificultad respiratoria y edema facial. TA 85/50 mmHg, FC 120/min, SpO₂ 89%.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Edema de glotis, dificultad para hablar</li>
                                            <li>B: Sibilancias, taquipnea, SpO₂ baja</li>
                                            <li>C: Taquicardia, hipotensión</li>
                                            <li>D: Ansiosa, alerta</li>
                                            <li>E: Urticaria, prurito</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Administrar adrenalina IM de inmediato</li>
                                            <li>Oxígeno suplementario</li>
                                            <li>Colocar en decúbito supino con piernas elevadas</li>
                                            <li>Monitorización y traslado urgente</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Reacción a picadura de abeja</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 45 años, tras picadura de abeja, desarrolla rápidamente dificultad respiratoria, ronquera y urticaria. TA 90/60 mmHg, FC 110/min.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Edema de lengua y labios</li>
                                            <li>B: Estridor, dificultad respiratoria</li>
                                            <li>C: Hipotensión, taquicardia</li>
                                            <li>D: Alerta, ansioso</li>
                                            <li>E: Urticaria en tronco y extremidades</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Administrar adrenalina IM</li>
                                            <li>Oxígeno</li>
                                            <li>Retirar aguijón si es visible</li>
                                            <li>Monitorización y traslado</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Reacción medicamentosa</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Paciente masculino de 60 años, tras recibir antibiótico, presenta prurito, urticaria, disnea y confusión. TA 80/40 mmHg, FC 130/min.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea comprometida</li>
                                            <li>B: Sibilancias, hipoxia</li>
                                            <li>C: Shock, taquicardia</li>
                                            <li>D: Confuso</li>
                                            <li>E: Urticaria, eritema</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Adrenalina IM</li>
                                            <li>Oxígeno</li>
                                            <li>Líquidos IV</li>
                                            <li>Monitorización y traslado urgente</li>
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
                                    <li>American Heart Association. (2020). <em>Soporte Vital Básico y Avanzado</em>.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/allergy-anaphylaxis/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre anafilaxia y alergias</a></li>
                                    <li><a href="https://www.jems.com/patient-care/allergy-anaphylaxis/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de alergias y anafilaxia</a></li>
                                    <li><a href="https://www.youtube.com/c/MedicTests" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">MedicTests - Videos educativos sobre emergencias</a></li>
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

