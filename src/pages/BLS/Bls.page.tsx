import {FaHeartbeat} from "react-icons/fa";
import chain from '../../assets/chain.png'
import nineone from '../../assets/911.jpeg'
import comp from '../../assets/comp.jpg'
import parches from '../../assets/parches.jpg'
import heim from '../../assets/heim.webp'
import {NavLink} from "react-router";


export default function Bls(){
    return (
        <div className="bg-gray-100   min-h-screen">
            <header className="bg-red-700 text-white p-6 shadow-md">
                <div className="flex items-center justify-center gap-4">
                    <FaHeartbeat className="text-white h-12 w-12 " />
                    <div className="container">
                        <h1 className="text-3xl font-bold">Soporte Vital Básico (BLS)</h1>
                        <p className="text-lg">Guía Informativa</p>
                    </div>
                </div>

            </header>


            <main className="container mx-auto p-6 md:p-8">
                <NavLink
                    to="/"
                    className="bg-red-700 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-300 "
                >
                    Regresar
                </NavLink>
                {/* Introducción */}
                <section className="mb-10 mt-4 bg-white  p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800  mb-4 border-b pb-2">¿Qué es el Soporte Vital Básico (BLS)?</h2>
                    <p className="text-gray-700  leading-relaxed mb-4">
                        El Soporte Vital Básico (BLS) se refiere al conjunto de técnicas y procedimientos de emergencia que se realizan para mantener la vida de una persona hasta que pueda recibir atención médica avanzada. El objetivo principal del BLS es proporcionar oxígeno al cerebro y al corazón para prevenir o minimizar el daño cerebral y la muerte. Estas técnicas no requieren equipo médico sofisticado y pueden ser realizadas por cualquier persona con entrenamiento básico.
                    </p>
                    <p className="text-gray-700  leading-relaxed">
                        El BLS es un componente crucial de la "Cadena de Supervivencia", una serie de acciones que, si se realizan a tiempo y correctamente, aumentan significativamente las posibilidades de supervivencia de una persona que sufre un paro cardíaco súbito u otra emergencia potencialmente mortal.
                    </p>
                    <div className="flex justify-center w-full">
                        <img
                            src={chain}
                            alt="Cadena de Supervivencia - Ilustración conceptual"
                            className="mt-4 rounded-lg shadow-sm w-[50rem]  "
                        />
                    </div>

                </section>

                {/* Importancia del BLS */}
                <section className="mb-10 bg-white  p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800  mb-4 border-b pb-2">Importancia del BLS</h2>
                    <p className="text-gray-700  leading-relaxed mb-4">
                        El tiempo es crítico en una emergencia médica como un paro cardíaco. Cada minuto que pasa sin RCP (Reanimación Cardiopulmonar) reduce las posibilidades de supervivencia en aproximadamente un 10%. La intervención temprana por parte de testigos presenciales que inician BLS puede duplicar o triplicar las tasas de supervivencia.
                    </p>
                    <p className="text-gray-700  leading-relaxed">
                        Saber realizar BLS te convierte en un primer interviniente vital. Puedes marcar la diferencia entre la vida y la muerte mientras esperas la llegada de los servicios de emergencia profesionales (SEM).
                    </p>
                </section>

                {/* Componentes Clave del BLS */}
                <section className="mb-10 bg-white  p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800  mb-4 border-b pb-2">Componentes Clave del BLS</h2>

                    {/* 1. Seguridad de la Escena */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">1. Asegurar la Escena</h3>
                        <p className="text-gray-700  leading-relaxed">
                            Antes de acercarte a la víctima, evalúa rápidamente el entorno para asegurarte de que sea seguro para ti y para la persona. Busca peligros como tráfico, fuego, cables eléctricos caídos, materiales peligrosos, etc. No te conviertas tú también en una víctima.
                        </p>
                    </div>

                    {/* 2. Evaluar Respuesta y Respiración */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">2. Evaluar la Capacidad de Respuesta y la Respiración</h3>
                        <p className="text-gray-700  leading-relaxed mb-2">
                            Acércate a la víctima y tócala suavemente en los hombros preguntando en voz alta: "¿Estás bien?". Observa si hay respuesta verbal o movimiento.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Simultáneamente, evalúa la respiración durante no más de 10 segundos. Mira si el pecho se eleva y desciende. Escucha si hay sonidos respiratorios normales. Ignora los jadeos o respiraciones agónicas (boqueadas), ya que no son respiraciones efectivas. Si la persona no responde y no respira normalmente (o solo jadea), asume que está en paro cardíaco.
                        </p>
                    </div>

                    {/* 3. Activar el Sistema de Emergencias Médicas (SEM) */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">3. Activar el Sistema de Emergencias Médicas (SEM)</h3>
                        <p className="text-gray-700  leading-relaxed">
                            Si estás solo, llama inmediatamente al número de emergencia local (ej., 911, 112) antes de iniciar la RCP en adultos. Si hay alguien más contigo, pídele que llame y que busque un Desfibrilador Externo Automático (DEA) si hay uno disponible, mientras tú comienzas la RCP. Para niños y bebés, si estás solo y no presenciaste el colapso, realiza 5 ciclos (aproximadamente 2 minutos) de RCP antes de llamar.
                        </p>
                        <img
                            src={nineone}
                            alt="Persona llamando a emergencias"
                            className="mt-4 rounded-lg shadow-sm w-full max-w-md h-auto object-cover mx-auto"
                        />
                    </div>

                    {/* 4. Reanimación Cardiopulmonar (RCP) */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">4. Reanimación Cardiopulmonar (RCP)</h3>
                        <p className="text-gray-700  leading-relaxed mb-3">
                            La RCP consiste en compresiones torácicas y, si estás entrenado y dispuesto, ventilaciones de rescate. El objetivo es mantener la sangre oxigenada circulando hacia los órganos vitales.
                        </p>
                        <h4 className="text-lg font-semibold text-gray-700  mb-2">Compresiones Torácicas:</h4>
                        <ul className="list-disc ml-6 text-gray-700  leading-relaxed space-y-1">
                            <li>Coloca a la víctima boca arriba sobre una superficie firme y plana.</li>
                            <li>Arrodíllate a un lado de la víctima.</li>
                            <li>Coloca el talón de una mano en el centro del pecho, sobre la mitad inferior del esternón. Coloca la otra mano encima y entrelaza los dedos.</li>
                            <li>Mantén los brazos rectos y los hombros directamente sobre las manos.</li>
                            <li>Comprime el pecho hacia abajo al menos 5 cm (2 pulgadas) pero no más de 6 cm (2.4 pulgadas) para adultos.</li>
                            <li>Realiza compresiones a una frecuencia de 100 a 120 por minuto.</li>
                            <li>Permite que el pecho se reexpanda completamente después de cada compresión. Minimiza las interrupciones.</li>
                        </ul>
                        <img
                            src={comp}
                            alt="Ilustración de compresiones torácicas en RCP"
                            className="mt-4 rounded-lg shadow-sm w-full max-w-lg h-auto object-cover mx-auto"
                        />
                        <h4 className="text-lg font-semibold text-gray-700  mt-4 mb-2">Ventilaciones de Rescate (si estás entrenado):</h4>
                        <ul className="list-disc ml-6 text-gray-700  leading-relaxed space-y-1">
                            <li>Después de 30 compresiones, si estás entrenado y dispuesto, administra 2 ventilaciones.</li>
                            <li>Abre la vía aérea inclinando la cabeza hacia atrás y levantando el mentón (maniobra frente-mentón).</li>
                            <li>Pinza la nariz de la víctima.</li>
                            <li>Cubre completamente la boca de la víctima con la tuya y administra una respiración de aproximadamente 1 segundo, observando que el pecho se eleve.</li>
                            <li>Deja que el aire salga y administra la segunda respiración.</li>
                            <li>Continúa ciclos de 30 compresiones y 2 ventilaciones.</li>
                            <li>Si no estás entrenado o no te sientes cómodo dando ventilaciones, realiza RCP solo con compresiones (Hands-Only CPR) de forma continua.</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-600 italic">
                            Nota: Las profundidades y técnicas de compresión/ventilación varían para niños e infantes. Se requiere formación específica.
                        </p>
                    </div>

                    {/* 5. Uso del Desfibrilador Externo Automático (DEA) */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">5. Uso del Desfibrilador Externo Automático (DEA)</h3>
                        <p className="text-gray-700  leading-relaxed mb-3">
                            Un DEA es un dispositivo portátil que analiza el ritmo cardíaco y puede administrar una descarga eléctrica (desfibrilación) si detecta un ritmo anormal potencialmente mortal (como la fibrilación ventricular).
                        </p>
                        <ul className="list-disc ml-6 text-gray-700  leading-relaxed space-y-1">
                            <li>Tan pronto como llegue un DEA, enciéndelo y sigue las instrucciones de voz y visuales.</li>
                            <li>Coloca los parches adhesivos en el pecho desnudo de la víctima como se indica en los diagramas del DEA o los parches.</li>
                            <li>Asegúrate de que nadie toque a la víctima mientras el DEA analiza el ritmo.</li>
                            <li>Si el DEA indica una descarga, asegúrate nuevamente de que nadie toque a la víctima y presiona el botón de descarga.</li>
                            <li>Inmediatamente después de la descarga (o si no se indica descarga), reanuda la RCP comenzando con las compresiones torácicas.</li>
                            <li>Sigue las indicaciones del DEA hasta que lleguen los profesionales de la salud.</li>
                        </ul>
                        <img
                            src={parches}
                            alt="Colocación de parches de DEA"
                            className="mt-4 rounded-lg shadow-sm w-full max-w-md h-auto object-cover mx-auto"
                        />
                    </div>

                    {/* 6. Manejo de la Obstrucción de la Vía Aérea (Atragantamiento) */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-red-600 mb-2">6. Manejo de la Obstrucción de la Vía Aérea (Atragantamiento)</h3>
                        <p className="text-gray-700   leading-relaxed mb-3">
                            El BLS también incluye el manejo del atragantamiento (obstrucción de la vía aérea por cuerpo extraño - OVACE).
                        </p>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Adultos y Niños (mayores de 1 año) conscientes:</h4>
                        <ul className="list-disc ml-6 text-gray-700  leading-relaxed space-y-1">
                            <li>Pregunta "¿Te estás atragantando?". Si la persona asiente o no puede hablar, toser o respirar, actúa.</li>
                            <li>Realiza compresiones abdominales (Maniobra de Heimlich):</li>
                            <li>Párate detrás de la persona y rodea su cintura con tus brazos.</li>
                            <li>Forma un puño con una mano y colócalo por encima del ombligo y debajo del esternón.</li>
                            <li>Agarra tu puño con la otra mano y realiza compresiones rápidas hacia adentro y hacia arriba.</li>
                            <li>Continúa hasta que el objeto sea expulsado o la persona quede inconsciente.</li>
                        </ul>
                        <h4 className="text-lg font-semibold text-gray-700  mt-4 mb-2">Si la persona queda inconsciente:</h4>
                        <ul className="list-disc ml-6 text-gray-700  leading-relaxed space-y-1">
                            <li>Colócala cuidadosamente en el suelo.</li>
                            <li>Activa el SEM (si aún no lo has hecho).</li>
                            <li>Inicia la RCP comenzando con compresiones torácicas.</li>
                            <li>Cada vez que abras la vía aérea para dar ventilaciones, busca el objeto en la boca y extráelo si lo ves.</li>
                        </ul>
                        <p className="mt-3 text-sm text-gray-600  italic">
                            Nota: Las técnicas para infantes (menores de 1 año) son diferentes (golpes en la espalda y compresiones torácicas). Se requiere formación específica.
                        </p>
                        <img
                            src={heim}
                            alt="Ilustración de la Maniobra de Heimlich"
                            className="mt-4 rounded-lg shadow-sm w-full max-w-md h-auto object-cover mx-auto"
                        />
                    </div>
                </section>

                {/* Entrenamiento y Certificación */}
                <section className="mb-10 bg-white  p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800  mb-4 border-b pb-2">Entrenamiento y Certificación</h2>
                    <p className="text-gray-700   leading-relaxed mb-4">
                        Si bien esta página proporciona información general, **no sustituye a un curso de formación práctico y certificado**. Organizaciones como la American Heart Association (AHA), la Cruz Roja, el European Resuscitation Council (ERC) y otras entidades locales ofrecen cursos de BLS/RCP/DEA.
                    </p>
                    <p className="text-gray-700  leading-relaxed">
                        Estos cursos incluyen instrucción teórica y práctica supervisada con maniquíes, lo que te permite desarrollar las habilidades y la confianza necesarias para actuar eficazmente en una emergencia. La certificación suele tener una validez de 1 a 2 años, y se recomienda realizar cursos de actualización periódicos.
                    </p>
                </section>

                {/* Consideraciones Legales */}
                <section className="mb-10 bg-white  p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">Consideraciones Legales (Leyes del Buen Samaritano)</h2>
                    <p className="text-gray-700 leading-relaxed">
                        En muchas regiones existen "Leyes del Buen Samaritano" que protegen legalmente a las personas que brindan asistencia razonable a quienes están lesionados, enfermos, en peligro o incapacitados. El propósito de estas leyes es alentar a las personas a ayudar a otros en situaciones de emergencia sin temor a ser demandadas si involuntariamente causan algún daño mientras actúan de buena fe. Infórmate sobre las leyes específicas de tu localidad.
                    </p>
                </section>

                {/* Referencias */}
                <section className="bg-gray-200  p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b border-gray-400 pb-2">Referencias y Recursos Adicionales</h2>
                    <ul className="list-disc ml-6 text-gray-700 space-y-2">
                        <li>
                            <a href="https://cpr.heart.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                American Heart Association (AHA) - CPR & First Aid
                            </a>
                        </li>
                        <li>
                            <a href="https://www.erc.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                European Resuscitation Council (ERC)
                            </a>
                        </li>
                        <li>
                            <a href="https://www.redcross.org/take-a-class/cpr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                Cruz Roja Americana - Clases de RCP
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                [Otra fuente autorizada como Mayo Clinic, Guías Nacionales de Salud, etc.]
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                [Enlace a Guías de BLS Pediátrico]
                            </a>
                        </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600 italic">
                        Nota: Consulta siempre las guías de reanimación más actualizadas publicadas por las organizaciones reconocidas internacionalmente, ya que pueden cambiar con el tiempo según la nueva evidencia científica.
                    </p>
                </section>
            </main>

        </div>
    );
}