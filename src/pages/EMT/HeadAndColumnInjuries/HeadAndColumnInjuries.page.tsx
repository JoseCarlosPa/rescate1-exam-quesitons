import {NavLink} from "react-router";
import {AllRoutes} from "../../../components/Router/Router.constants.ts";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/16/solid";
import {faqData} from "./HeadAndColumnInjuries.questions.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {useState} from "react";
import {MdQuiz} from "react-icons/md";
import {BsBookHalf} from "react-icons/bs";
import {PiChalkboardTeacher} from "react-icons/pi";
import {SiSpine} from "react-icons/si";
import { useSEO } from "../../../hooks/useSEO.hook.ts";

export default function HeadAndColumnInjuries(){
    // SEO específico para lesiones de cabeza y columna
    useSEO({
        publishedTime: '2025-01-15T10:00:00Z',
        modifiedTime: new Date().toISOString()
    });

    const [activeTab, setActiveTab] = useState<'overview' | 'anatomy' | 'assessment' | 'management' | 'practice'>('overview');
    const [showQuickQuiz, setShowQuickQuiz] = useState(false);

    return(
        <div className="min-h-screen bg-gray-50">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white pb-12 px-4 p-4">
                <div className="w-full max-w-7xl">
                    {/* Cabecera */}
                    <header className="mb-8 text-center">
                        <div className="flex justify-center">
                            <SiSpine className="w-24 h-24 mb-1 text-orange-500" />
                        </div>
                        <h1 className="text-5xl font-bold mb-2 text-center">Lesiones de cabeza y columna vertebral</h1>
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
                            to={`${AllRoutes.HEAD_AND_COLUMN_INJURIES}/exam`}
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
                        <a href="https://drive.google.com/file/d/1jgRybulRoQmZgGaGFJjVnbnXzrStGIwD/view?usp=drive_link"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:bg-orange-50 transition duration-300 hover:shadow-md">
                            <BsBookHalf className="w-10 h-10 text-orange-500 mb-2" />
                            <p className="text-center font-medium">Capítulo</p>
                        </a>
                    </div>

                    {/* Quiz rápido */}
                    {showQuickQuiz && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                            <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full relative">
                                <h3 className="text-xl font-bold mb-4 text-gray-800">Quiz Rápido - Lesiones de cabeza y columna</h3>
                                <p className="mb-4 text-gray-700">¿Cuál de los siguientes signos NO indica una posible lesión de columna cervical?</p>
                                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                                    <li>Dolor a la palpación de la columna cervical</li>
                                    <li>Déficit neurológico en extremidades</li>
                                    <li>Fiebre alta (39°C) y dolor de garganta</li>
                                    <li>Mecanismo de lesión de alto impacto</li>
                                </ul>
                                <p className="text-gray-700 mb-4">Respuesta: La fiebre alta con dolor de garganta no es un signo directo de lesión cervical traumática, sino más bien de un proceso infeccioso.</p>
                                <button
                                    onClick={() => setShowQuickQuiz(false)}
                                    className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded transition">
                                    Cerrar Quiz
                                </button>
                            </div>
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
                                Anatomía y Fisiología
                            </button>
                            <button
                                onClick={() => setActiveTab('assessment')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'assessment' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Evaluación
                            </button>
                            <button
                                onClick={() => setActiveTab('management')}
                                className={`py-3 px-4 font-medium text-sm border-b-2 transition ${
                                    activeTab === 'management' 
                                        ? 'border-orange-500 text-orange-600' 
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}>
                                Manejo y Tratamiento
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
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">¿Qué son las lesiones de cabeza y columna vertebral?</h2>
                                    <p className="text-gray-700 leading-relaxed">
                                        Las lesiones de cabeza y columna vertebral son traumatismos que afectan al cráneo, el encéfalo, las vértebras y la médula espinal. Representan emergencias potencialmente graves que pueden causar discapacidad permanente o muerte si no se manejan adecuadamente.
                                    </p>
                                    <p className="text-gray-700 mt-2 leading-relaxed">
                                        El manejo adecuado prehospitalario es crucial, ya que muchas lesiones secundarias ocurren durante el manejo inicial y el transporte, siendo prevenibles con técnicas adecuadas.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Mecanismos de lesión comunes</h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Accidentes de tráfico</li>
                                            <li>Caídas de altura</li>
                                            <li>Lesiones deportivas (buceo, deportes de contacto)</li>
                                            <li>Impactos directos a la cabeza o columna</li>
                                            <li>Heridas penetrantes</li>
                                        </ul>
                                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                                            <li>Lesiones por aceleración-desaceleración</li>
                                            <li>Compresión axial</li>
                                            <li>Flexión-extensión forzada</li>
                                            <li>Rotación excesiva</li>
                                            <li>Lesiones por explosión</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Tipos de lesiones</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Lesiones craneales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Trauma craneoencefálico (TCE) leve/moderado/severo</li>
                                                <li>Conmoción cerebral</li>
                                                <li>Contusión cerebral</li>
                                                <li>Fracturas de cráneo</li>
                                                <li>Hematomas (epidural, subdural, intraparenquimatoso)</li>
                                                <li>Hemorragia subaracnoidea</li>
                                            </ul>
                                        </div>
                                        <div className="bg-blue-50 p-4 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Lesiones espinales</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Fracturas vertebrales</li>
                                                <li>Luxaciones y subluxaciones</li>
                                                <li>Lesiones por compresión</li>
                                                <li>Lesiones ligamentosas</li>
                                                <li>Lesión medular completa/incompleta</li>
                                                <li>Síndromes medulares específicos</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'anatomy' && (
                            <div className="space-y-6">
                                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                                    <div className="md:w-1/2">
                                        <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía del cráneo y el encéfalo</h2>
                                        <p className="text-gray-700 leading-relaxed">
                                            El cráneo es una estructura ósea que protege al encéfalo:
                                        </p>
                                        <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                                            <li><strong>Bóveda craneal:</strong> Frontal, parietales, occipital, temporales.</li>
                                            <li><strong>Base del cráneo:</strong> Forma la plataforma sobre la que descansa el encéfalo.</li>
                                            <li><strong>Meninges:</strong> Duramadre, aracnoides y piamadre.</li>
                                            <li><strong>Encéfalo:</strong> Cerebro, cerebelo y tronco encefálico.</li>
                                        </ul>
                                    </div>
                                    <div className="md:w-1/2 flex justify-center">
                                        <img
                                            src="/src/assets/netter.webp"
                                            alt="Anatomía del cráneo y columna vertebral"
                                            className="rounded-lg shadow-md max-w-full h-auto"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Anatomía de la columna vertebral</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Estructura vertebral</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La columna vertebral consta de 33 vértebras divididas en:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li><strong>7 vértebras cervicales (C1-C7)</strong></li>
                                                <li><strong>12 vértebras torácicas (T1-T12)</strong></li>
                                                <li><strong>5 vértebras lumbares (L1-L5)</strong></li>
                                                <li><strong>5 vértebras sacras (fusionadas)</strong></li>
                                                <li><strong>4 vértebras coccígeas (fusionadas)</strong></li>
                                            </ul>
                                            <p className="text-gray-700 mt-4">
                                                Las vértebras C1 (atlas) y C2 (axis) tienen una anatomía especial para permitir la rotación y flexión de la cabeza.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Médula espinal</h3>
                                            <p className="text-gray-700 leading-relaxed">
                                                La médula espinal es la vía principal de comunicación entre el encéfalo y el resto del cuerpo:
                                            </p>
                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-700">
                                                <li>Se extiende desde el foramen magno hasta L1-L2</li>
                                                <li>Protegida por las vértebras y las meninges</li>
                                                <li>Contiene sustancia gris (cuerpos neuronales) y sustancia blanca (axones)</li>
                                                <li>Las raíces nerviosas salen por los forámenes intervertebrales formando 31 pares de nervios espinales</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Fisiopatología de las lesiones</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Tipo de lesión</th>
                                                    <th className="py-2 px-4 border">Mecanismo</th>
                                                    <th className="py-2 px-4 border">Consecuencias</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Lesión primaria</td>
                                                    <td className="py-2 px-4 border">Daño directo por el trauma inicial</td>
                                                    <td className="py-2 px-4 border">Disrupción neuronal, vascular y tisular inmediata</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Lesión secundaria</td>
                                                    <td className="py-2 px-4 border">Procesos que siguen a la lesión inicial</td>
                                                    <td className="py-2 px-4 border">Hipoxia, isquemia, edema, inflamación, aumento PIC</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border font-medium">Shock neurogénico</td>
                                                    <td className="py-2 px-4 border">Pérdida del tono simpático</td>
                                                    <td className="py-2 px-4 border">Hipotensión, bradicardia, vasodilatación periférica</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'assessment' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación inicial</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación de la escena</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>Seguridad:</strong> Evaluar riesgos para rescatadores y paciente</li>
                                                <li><strong>Mecanismo de lesión:</strong> Identificar fuerzas involucradas</li>
                                                <li><strong>Cinemática del trauma:</strong> Dirección del impacto, energías</li>
                                                <li><strong>Número de pacientes:</strong> Priorizar según triage</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Evaluación primaria (ABCDE)</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>A:</strong> Vía aérea con control cervical</li>
                                                <li><strong>B:</strong> Respiración y ventilación</li>
                                                <li><strong>C:</strong> Circulación y control de hemorragias</li>
                                                <li><strong>D:</strong> Déficit neurológico (AVDI, pupilas, GCS)</li>
                                                <li><strong>E:</strong> Exposición y entorno</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Evaluación neurológica</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Escala de Glasgow</th>
                                                    <th className="py-2 px-4 border">Apertura ocular</th>
                                                    <th className="py-2 px-4 border">Respuesta verbal</th>
                                                    <th className="py-2 px-4 border">Respuesta motora</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">6</td>
                                                    <td className="py-2 px-4 border">-</td>
                                                    <td className="py-2 px-4 border">-</td>
                                                    <td className="py-2 px-4 border">Obedece órdenes</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">5</td>
                                                    <td className="py-2 px-4 border">-</td>
                                                    <td className="py-2 px-4 border">Orientado</td>
                                                    <td className="py-2 px-4 border">Localiza dolor</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">4</td>
                                                    <td className="py-2 px-4 border">Espontánea</td>
                                                    <td className="py-2 px-4 border">Confuso</td>
                                                    <td className="py-2 px-4 border">Retirada al dolor</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">3</td>
                                                    <td className="py-2 px-4 border">A la voz</td>
                                                    <td className="py-2 px-4 border">Palabras inapropiadas</td>
                                                    <td className="py-2 px-4 border">Flexión anormal</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">2</td>
                                                    <td className="py-2 px-4 border">Al dolor</td>
                                                    <td className="py-2 px-4 border">Sonidos incomprensibles</td>
                                                    <td className="py-2 px-4 border">Extensión anormal</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">1</td>
                                                    <td className="py-2 px-4 border">No responde</td>
                                                    <td className="py-2 px-4 border">No responde</td>
                                                    <td className="py-2 px-4 border">No responde</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Signos y síntomas a valorar</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-orange-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-orange-700">Signos de lesión craneal</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Alteración del nivel de conciencia</li>
                                                <li>Amnesia del evento</li>
                                                <li>Cefalea progresiva</li>
                                                <li>Vómitos en proyectil</li>
                                                <li>Otorragia/otorrea (sangre/LCR por oído)</li>
                                                <li>Rinorragia/rinorrea (sangre/LCR por nariz)</li>
                                                <li>Signo de Battle (equimosis mastoidea)</li>
                                                <li>Ojos de mapache (equimosis periorbitaria)</li>
                                                <li>Anisocoria o pupilas no reactivas</li>
                                            </ul>
                                        </div>

                                        <div className="p-4 bg-blue-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-blue-700">Signos de lesión medular</h3>
                                            <ul className="list-disc list-inside space-y-1 text-gray-700">
                                                <li>Dolor cervical o de espalda</li>
                                                <li>Debilidad o parálisis de extremidades</li>
                                                <li>Pérdida de sensibilidad</li>
                                                <li>Hormigueo o sensaciones anormales</li>
                                                <li>Dificultad respiratoria (lesiones cervicales altas)</li>
                                                <li>Priapismo (erección involuntaria persistente)</li>
                                                <li>Incontinencia o retención urinaria/fecal</li>
                                                <li>Hipotensión con bradicardia (shock neurogénico)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'management' && (
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo de lesiones craneales</h2>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">Principios generales</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li>Mantener vía aérea permeable con control cervical</li>
                                                <li>Asegurar oxigenación adecuada (SpO₂ ≥94%)</li>
                                                <li>Evitar hipotensión (PAS ≥90 mmHg en adultos)</li>
                                                <li>Elevación de la cabeza 30° (si no hay contraindicación)</li>
                                                <li>Control de crisis convulsivas</li>
                                                <li>Traslado rápido a centro con neurocirugía</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2 text-gray-800">TCE según severidad</h3>
                                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                                <li><strong>TCE leve (GCS 14-15):</strong> Observación, evaluación seriada</li>
                                                <li><strong>TCE moderado (GCS 9-13):</strong> Oxígeno, monitorización, traslado</li>
                                                <li><strong>TCE severo (GCS ≤8):</strong> Manejo avanzado de vía aérea, evitar hiperventilación</li>
                                                <li><strong>Fracturas abiertas:</strong> No retirar objetos penetrantes, cubrir con apósitos estériles</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Inmovilización espinal</h2>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full bg-white">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="py-2 px-4 border">Técnica</th>
                                                    <th className="py-2 px-4 border">Indicaciones</th>
                                                    <th className="py-2 px-4 border">Consideraciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="py-2 px-4 border">Estabilización manual</td>
                                                    <td className="py-2 px-4 border">Inicio inmediato, se mantiene hasta inmovilización completa</td>
                                                    <td className="py-2 px-4 border">Evitar tracción, mantener posición neutra</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Collarín cervical</td>
                                                    <td className="py-2 px-4 border">Complemento a la estabilización manual</td>
                                                    <td className="py-2 px-4 border">No reemplaza estabilización manual, elegir talla adecuada</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Inmovilizador de cabeza</td>
                                                    <td className="py-2 px-4 border">Limita movimiento lateral</td>
                                                    <td className="py-2 px-4 border">Usar con tabla espinal, asegurar con cintas</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-2 px-4 border">Tabla espinal larga</td>
                                                    <td className="py-2 px-4 border">Cuando la evaluación indica riesgo de lesión espinal</td>
                                                    <td className="py-2 px-4 border">Uso selectivo, riesgo de úlceras por presión</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Manejo específico de columna</h2>
                                    <div className="space-y-4">
                                        <div className="p-4 bg-green-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-green-700">Criterios de inmovilización selectiva</h3>
                                            <p className="text-gray-700 mb-2">Según AAOS 11ª edición, considerar inmovilización si:</p>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Mecanismo de lesión de alto riesgo</li>
                                                <li>Dolor o sensibilidad en la línea media cervical/dorsal</li>
                                                <li>Déficit o síntomas neurológicos</li>
                                                <li>Alteración del nivel de conciencia</li>
                                                <li>Intoxicación o incapacidad para comunicarse</li>
                                                <li>Lesiones distractoras dolorosas</li>
                                            </ol>
                                        </div>

                                        <div className="p-4 bg-red-50 rounded-lg">
                                            <h3 className="font-medium text-lg mb-2 text-red-700">Maniobras de extricación</h3>
                                            <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                                <li>Estabilización manual inmediata</li>
                                                <li>Colocación de collarín cervical</li>
                                                <li>Rotación en bloque coordinada</li>
                                                <li>En vehículos: considerar técnica de Rautek modificada</li>
                                                <li>Evitar flexión, extensión o rotación cervical</li>
                                                <li>Mínimo personal necesario: 3-4 rescatadores</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'practice' && (
                            <div className="space-y-6">
                                <h2 className="text-2xl font-semibold mb-3 text-gray-800 border-b pb-2">Casos clínicos para análisis</h2>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-600">Caso 1: Trauma craneoencefálico</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Hombre de 42 años que sufre caída desde 2 metros de altura, golpeándose la cabeza contra el suelo.
                                        A su llegada, presenta pérdida intermitente de consciencia y sangrado por oído derecho.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable con riesgo</li>
                                            <li>B: FR 22/min, SpO₂ 94%</li>
                                            <li>C: FC 62/min, TA 152/88 mmHg</li>
                                            <li>D: GCS 12 (O3, V4, M5), pupilas anisocóricas</li>
                                            <li>E: Otorragia derecha, contusión occipital</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Estabilización cervical inmediata</li>
                                            <li>Oxígeno a alto flujo (10-15 L/min)</li>
                                            <li>Elevación de cabeza 30° si no hay hipotensión</li>
                                            <li>Monitorización neurológica continua</li>
                                            <li>Traslado urgente a centro con neurocirugía</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm mb-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-600">Caso 2: Sospecha de lesión medular</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Mujer de 28 años, accidente de moto. No puede mover las piernas y refiere sensación de hormigueo en manos.
                                        Está consciente y orientada.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable</li>
                                            <li>B: FR 18/min, SpO₂ 96%</li>
                                            <li>C: FC 95/min, TA 90/60 mmHg</li>
                                            <li>D: GCS 15, paraplejía, hipoestesia en miembros inferiores</li>
                                            <li>E: Dolor a la palpación en columna dorsal media</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Inmovilización espinal completa</li>
                                            <li>Oxígeno para mantener SpO₂ ≥94%</li>
                                            <li>Líquidos IV para mantener TA ≥90 mmHg (posible shock neurogénico)</li>
                                            <li>Evitar hipotermia</li>
                                            <li>Traslado a centro con unidad de columna</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className="p-5 bg-gray-50 rounded-lg shadow-sm">
                                    <h3 className="text-xl font-semibold mb-2 text-green-600">Caso 3: Paciente con casco</h3>
                                    <p className="italic text-gray-600 mb-4">
                                        Ciclista de 35 años que colisiona con automóvil. Lleva casco, está consciente pero confuso.
                                        Refiere dolor cervical intenso.
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-medium mb-2">Evaluación:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            <li>A: Vía aérea permeable con casco puesto</li>
                                            <li>B: FR 20/min, SpO₂ 95%</li>
                                            <li>C: FC 88/min, TA 130/85 mmHg</li>
                                            <li>D: GCS 14 (O4, V4, M6), pupilas isocóricas reactivas</li>
                                            <li>E: Dolor cervical, sin déficit motor aparente</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-medium mb-2">Manejo correcto:</h4>
                                        <ol className="list-decimal list-inside space-y-1 text-gray-700">
                                            <li>Estabilización manual de cabeza sobre el casco</li>
                                            <li>Valorar retirada del casco (técnica de 2 rescatadores)</li>
                                            <li>Aplicar collarín cervical inmediatamente tras retirada</li>
                                            <li>Inmovilización espinal completa</li>
                                            <li>Monitorización y traslado a centro hospitalario</li>
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
                                    <li>AAOS. (2021). <em>Atención Médica Prehospitalaria</em> (11ª edición). Jones & Bartlett Learning.</li>
                                    <li>NAEMT. (2020). <em>PHTLS: Soporte Vital de Trauma Prehospitalario</em> (9ª edición).</li>
                                    <li>American College of Surgeons. (2018). <em>Advanced Trauma Life Support</em> (10ª edición).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Recursos en línea</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li><a href="https://www.ems1.com/trauma-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">EMS1 - Artículos sobre manejo de trauma</a></li>
                                    <li><a href="https://www.jems.com/patient-care/trauma/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">JEMS - Sección de trauma</a></li>
                                    <li><a href="https://www.braintrauma.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Brain Trauma Foundation - Guías de manejo</a></li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium mb-2">Aplicaciones recomendadas</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-700">
                                    <li>GCS App - Cálculo de Escala de Glasgow</li>
                                    <li>Trauma Reference - Algoritmos de manejo</li>
                                    <li>Medscape - Referencias médicas y calculadoras</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
