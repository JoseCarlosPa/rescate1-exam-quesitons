import { BsSignStopFill } from "react-icons/bs";
import {NavLink} from "react-router";
import stop from '../../assets/stop.png'
import hemo from '../../assets/hemo.jpg'
import pres from '../../assets/pres.png'
import empac from '../../assets/empac.jpg'
import torni from '../../assets/torni.jpg'
import pack from '../../assets/pack.jpg'

export default function StopTheBleed(){
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <header className="bg-blue-800 text-white p-6 shadow-md">
                <div className="flex items-center justify-center gap-4">
                    <BsSignStopFill className="text-white h-12 w-12" />
                    <div className="container">
                        <h1 className="text-3xl font-bold">Stop the Bleed® / Detener el Sangrado</h1>
                        <p className="text-lg">Cómo Salvar una Vida Controlando Hemorragias Graves</p>
                    </div>
                </div>

            </header>

            <main className="container mx-auto p-6 md:p-8">
                <NavLink
                    to="/"
                    className="bg-blue-800 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300 "
                >
                    Regresar
                </NavLink>
                {/* Introducción */}
                <section className="mb-10 mt-4 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">¿Qué es "Stop the Bleed"?</h2>
                    <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                        "Stop the Bleed" (Detener el Sangrado) es una campaña nacional de concienciación y un llamado a la acción. Su objetivo es capacitar, equipar y empoderar a testigos presenciales (ciudadanos comunes) para ayudar en una emergencia de sangrado antes de que llegue la ayuda profesional. Fue iniciada por el gobierno de EE.UU. y diversas organizaciones médicas tras eventos traumáticos, reconociendo que la hemorragia no controlada es la principal causa de muerte prevenible por trauma.
                    </p>
                    <p className="text-gray-700 dark:text-white leading-relaxed">
                        La premisa es simple: en situaciones de sangrado masivo, los minutos cuentan. Un testigo presencial en la escena es quien tiene la mejor oportunidad de salvar una vida aplicando técnicas básicas de control de hemorragias.
                    </p>
                    <img
                        src={stop}
                        alt="Logo o banner conceptual de Stop the Bleed"
                        className="mt-4 rounded-lg shadow-sm w-full max-w-lg h-auto object-cover mx-auto"
                    />
                </section>

                {/* Importancia */}
                <section className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">¿Por Qué es Importante Saber Detener el Sangrado?</h2>
                    <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                        Una persona puede morir desangrada en tan solo 5 minutos. Los servicios de emergencia profesionales, aunque rápidos, pueden tardar más tiempo en llegar, especialmente en incidentes a gran escala o en áreas remotas. Saber identificar y controlar una hemorragia potencialmente mortal puede marcar la diferencia entre la vida y la muerte.
                    </p>
                    <p className="text-gray-700 dark:text-white leading-relaxed">
                        Las lesiones que causan sangrado grave pueden ocurrir en cualquier lugar: en casa, en el trabajo, en la carretera o durante desastres naturales o actos de violencia. Estar preparado para actuar es fundamental.
                    </p>
                </section>

                {/* Pasos Clave (ABC) */}
                <section className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">Los Pasos Clave: A-B-C del Control de Hemorragias</h2>
                    <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                        La iniciativa "Stop the Bleed" enseña tres pasos rápidos y fáciles de recordar:
                    </p>

                    {/* A - Alertar / Asegurar */}
                    <div className="mb-6 p-4 border border-blue-200 rounded-md bg-blue-50 dark:bg-gray-700">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="text-3xl font-bold mr-3">A</span> - Asegurar la Escena y Alertar
                        </h3>
                        <p className="text-gray-700 dark:text-white leading-relaxed mb-2">
                            <strong>Tu seguridad es primero.</strong> Antes de ayudar, evalúa rápidamente si el entorno es seguro para ti. Si hay peligro activo (tirador, fuego, tráfico), resguárdate y espera a que lleguen los profesionales.
                        </p>
                        <p className="text-gray-700 dark:text-white leading-relaxed">
                            <strong>Llama al número de emergencia local</strong> (ej., 911 en México y EE.UU., 112 en Europa, etc.) o pide a alguien cercano que lo haga. Proporciona tu ubicación y la naturaleza de la emergencia.
                        </p>
                    </div>

                    {/* B - Buscar la Hemorragia */}
                    <div className="mb-6 p-4 border border-blue-200 rounded-md bg-blue-50 dark:bg-gray-700">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="text-3xl font-bold mr-3">B</span> - Buscar la Hemorragia (Bleeding)
                        </h3>
                        <p className="text-gray-700 dark:text-white leading-relaxed mb-2">
                            Localiza la fuente del sangrado que pone en peligro la vida. Busca:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-white leading-relaxed space-y-1">
                            <li>Sangre que <strong>brota (chorrea)</strong> de la herida.</li>
                            <li>Sangre que <strong>no deja de salir</strong> de la herida.</li>
                            <li>Sangre que <strong>empapa la ropa</strong> o se acumula en el suelo (forma charcos).</li>
                            <li>Pérdida total o parcial de un <strong>brazo o pierna</strong>.</li>
                            <li>Víctima confundida o inconsciente después de una lesión sangrante.</li>
                        </ul>
                        <p className="text-gray-700 dark:text-white leading-relaxed mt-2">
                            Puede ser necesario quitar o cortar la ropa para encontrar la herida exacta.
                        </p>
                        <img
                            src={hemo}
                            alt="Ilustración de signos de hemorragia grave"
                            className="mt-4 rounded-lg shadow-sm w-full max-w-md h-auto object-cover mx-auto"
                        />
                    </div>

                    {/* C - Comprimir */}
                    <div className="mb-6 p-4 border border-blue-200 rounded-md bg-blue-50 dark:bg-gray-700">
                        <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center">
                            <span className="text-3xl font-bold mr-3">C</span> - Comprimir para Detener el Sangrado
                        </h3>
                        <p className="text-gray-700 dark:text-white leading-relaxed mb-3">
                            Existen varias formas de aplicar presión para controlar la hemorragia, dependiendo del tipo y ubicación de la herida:
                        </p>

                        <h4 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">1. Presión Directa:</h4>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-white leading-relaxed space-y-1 mb-3">
                            <li>Usa tus manos (preferiblemente con guantes si tienes), un paño limpio, o gasa/apósito.</li>
                            <li>Aplica presión firme y constante directamente sobre la herida sangrante.</li>
                            <li>Si la sangre empapa el primer apósito, no lo quites. Coloca otro encima y sigue presionando con más fuerza.</li>
                            <li>Mantén la presión hasta que llegue la ayuda médica.</li>
                        </ul>
                        <img
                            src={pres}
                            alt="Ilustración de aplicación de presión directa sobre una herida"
                            className="mb-4 rounded-lg shadow-sm w-[50rem]  h-auto object-cover mx-auto"
                        />

                        <h4 className="text-lg font-semibold text-gray-700 dark:text-white mt-4 mb-2">2. Empaquetamiento de la Herida (Wound Packing):</h4>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-white leading-relaxed space-y-1 mb-3">
                            <li>Para heridas profundas en brazos, piernas, cuello, axilas o ingles donde no se puede usar un torniquete o la presión directa no es suficiente.</li>
                            <li>Introduce gasa o un paño limpio directamente DENTRO de la herida, rellenándola lo más posible.</li>
                            <li>Una vez llena, aplica presión directa firme sobre la gasa empaquetada.</li>
                            <li>Esta técnica es avanzada y se aprende mejor en un curso práctico.</li>
                        </ul>
                        <img
                            src={empac}
                            alt="Diagrama conceptual de empaquetamiento de herida"
                            className="mb-4 rounded-lg shadow-sm w-[50rem]  h-auto object-cover mx-auto"
                        />

                        <h4 className="text-lg font-semibold text-gray-700 dark:text-white mt-4 mb-2">3. Aplicación de Torniquete:</h4>
                        <ul className="list-disc ml-6 text-gray-700 dark:text-white leading-relaxed space-y-1 mb-3">
                            <li>**Solo para hemorragias graves en brazos o piernas** que no se controlan con presión directa.</li>
                            <li>Coloca el torniquete lo más arriba posible en la extremidad lesionada ("alto y apretado"), unos 5-7 cm (2-3 pulgadas) por encima de la herida, NUNCA sobre una articulación (codo o rodilla).</li>
                            <li>Aprieta el torniquete hasta que el sangrado se detenga. Puede ser doloroso para la víctima.</li>
                            <li>Asegura el molinete o la correa para que no se afloje.</li>
                            <li>**Anota la hora** en que se aplicó el torniquete (escríbela en el torniquete o en la frente de la víctima si es posible).</li>
                            <li>**No quites** el torniquete una vez aplicado. Deja que lo hagan los profesionales médicos.</li>
                            <li>Usa un torniquete comercial si está disponible. Los improvisados (cinturones, etc.) suelen ser menos efectivos y pueden causar daño tisular si no se aplican correctamente.</li>
                        </ul>
                        <img
                            src={torni}
                            alt="Ilustración de aplicación correcta de un torniquete en un brazo"
                            className="mb-4 rounded-lg shadow-sm w-[50rem] h-full object-cover mx-auto"
                        />
                    </div>
                </section>

                {/* Kits de Control de Hemorragias */}
                <section className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">Kits de Control de Hemorragias</h2>
                    <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                        Los kits de control de hemorragias ("Bleeding Control Kits" o "Stop the Bleed Kits") contienen suministros esenciales para tratar sangrados graves. Se recomienda tenerlos en lugares públicos, escuelas, empresas y vehículos. Un kit básico suele incluir:
                    </p>
                    <ul className="list-disc ml-6 text-gray-700 dark:text-white leading-relaxed space-y-1">
                        <li>Guantes protectores (sin látex).</li>
                        <li>Torniquete comercial recomendado (ej. CAT, SOFTT-W).</li>
                        <li>Gasa compresiva o apósitos hemostáticos (que ayudan a coagular).</li>
                        <li>Gasa enrollada para empaquetar heridas.</li>
                        <li>Tijeras de trauma (para cortar ropa).</li>
                        <li>Manta de emergencia (opcional).</li>
                        <li>Marcador permanente (para anotar la hora del torniquete).</li>
                    </ul>
                    <img
                        src={pack}
                        alt="Ejemplo del contenido de un kit de control de hemorragias"
                        className="mt-4 rounded-lg shadow-sm w-[30rem] h-auto object-cover mx-auto"
                    />
                </section>

                {/* Entrenamiento */}
                <section className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">¡Entrénate!</h2>
                    <p className="text-gray-700 dark:text-white leading-relaxed mb-4">
                        Leer sobre cómo detener el sangrado es un primer paso importante, pero **la práctica es crucial**. Busca cursos presenciales de "Stop the Bleed" o control de hemorragias en tu comunidad. Estos cursos ofrecen instrucción práctica sobre cómo aplicar presión directa, empaquetar heridas y usar un torniquete correctamente.
                    </p>
                    <p className="text-gray-700 dark:text-white leading-relaxed">
                        Organizaciones como la Cruz Roja, el American College of Surgeons (a través de stopthebleed.org), y entidades locales de protección civil o servicios médicos de emergencia suelen ofrecer esta formación.
                    </p>
                </section>

                {/* Consideraciones Legales */}
                <section className="mb-10 bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2">Consideraciones Legales (Leyes del Buen Samaritano)</h2>
                    <p className="text-gray-700 dark:text-white leading-relaxed">
                        Al igual que con el BLS, en muchas jurisdicciones existen "Leyes del Buen Samaritano" que ofrecen protección legal a los ciudadanos que prestan ayuda de emergencia de buena fe. Estas leyes buscan reducir el miedo a demandas y animar a la gente a intervenir. Investiga las leyes específicas de tu país o estado (como México o Querétaro, en tu caso).
                    </p>
                </section>

                {/* Referencias */}
                <section className="bg-gray-200 dark:bg-gray-400 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-400 pb-2">Recursos y Referencias</h2>
                    <ul className="list-disc ml-6 text-gray-700 dark:text-white space-y-2">
                        <li>
                            <a href="https://www.stopthebleed.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Stop the Bleed Official Website (American College of Surgeons)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.dhs.gov/stopthebleed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Stop the Bleed (U.S. Department of Homeland Security)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.redcross.org/take-a-class/first-aid/first-aid-training/first-aid-online" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Cruz Roja Americana - Formación en Primeros Auxilios
                            </a> (Buscar cursos locales o de la Cruz Roja Mexicana)
                        </li>
                        <li>
                            <a href="https://www.cruzrojamexicana.org.mx/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Cruz Roja Mexicana
                            </a> (Consultar por cursos de primeros auxilios/control de hemorragias)
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                [Secretaría de Salud / Protección Civil Local o Nacional - Buscar guías]
                            </a>
                        </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600 italic">
                        La información y las técnicas pueden actualizarse. Consulta siempre fuentes oficiales y considera tomar un curso certificado.
                    </p>
                </section>
            </main>
        </div>
    );
}