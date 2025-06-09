import { BsSignStopFill } from "react-icons/bs";
import { NavLink } from "react-router";
import { useState } from "react";
import { FaArrowLeft, FaChevronDown, FaChevronUp } from "react-icons/fa";
import stop from '../../assets/stop.png'
import hemo from '../../assets/hemo.jpg'
import pres from '../../assets/pres.png'
import empac from '../../assets/empac.jpg'
import torni from '../../assets/torni.jpg'
import pack from '../../assets/pack.jpg'

// Definimos un tipo para nuestras secciones
type SectionName = 'introduccion' | 'importancia' | 'pasosClave' | 'kits' | 'entrenamiento' | 'legal' | 'recursos';

// Definimos la interfaz para el estado de las secciones
interface OpenSectionsState {
    introduccion: boolean;
    importancia: boolean;
    pasosClave: boolean;
    kits: boolean;
    entrenamiento: boolean;
    legal: boolean;
    recursos: boolean;
}

export default function StopTheBleed(){
    // Estado para las secciones colapsables
    const [openSections, setOpenSections] = useState<OpenSectionsState>({
        introduccion: true,
        importancia: true,
        pasosClave: true,
        kits: true,
        entrenamiento: true,
        legal: true,
        recursos: true
    });

    // Función para alternar la visibilidad de una sección
    const toggleSection = (section: SectionName) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Hero Section */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 shadow-lg">
                <div className="container mx-auto">
                    <div className="flex items-center justify-center gap-6 max-w-5xl mx-auto">
                        <BsSignStopFill className="text-red-500 h-16 w-16 bg-white p-2 rounded-full shadow-md" />
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Stop the Bleed®</h1>
                            <p className="text-xl md:text-2xl mt-2 font-light">Cómo Salvar una Vida Controlando Hemorragias Graves</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Barra de navegación rápida */}
            <div className="sticky top-0 z-10 bg-white shadow-md py-3 px-4">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <NavLink
                        to="/"
                        className="flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition duration-300"
                    >
                        <FaArrowLeft /> Regresar
                    </NavLink>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8 max-w-5xl">
                {/* Introducción */}
                <section id="introduccion" className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('introduccion')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                            ¿Qué es "Stop the Bleed"?
                        </h2>
                        {openSections.introduccion ? <FaChevronUp className="text-blue-800" /> : <FaChevronDown className="text-blue-800" />}
                    </div>

                    {openSections.introduccion && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="md:w-3/5">
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        "Stop the Bleed" (Detener el Sangrado) es una campaña nacional de concienciación y un llamado a la acción. Su objetivo es capacitar, equipar y empoderar a testigos presenciales (ciudadanos comunes) para ayudar en una emergencia de sangrado antes de que llegue la ayuda profesional.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        La premisa es simple: en situaciones de sangrado masivo, los minutos cuentan. Un testigo presencial en la escena es quien tiene la mejor oportunidad de salvar una vida aplicando técnicas básicas de control de hemorragias.
                                    </p>
                                </div>
                                <img
                                    src={stop}
                                    alt="Logo de Stop the Bleed"
                                    className="md:w-2/5 rounded-lg shadow-sm h-auto object-cover"
                                />
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                                <p className="text-blue-800 font-medium">
                                    Fue iniciada por el gobierno de EE.UU. y diversas organizaciones médicas tras eventos traumáticos, reconociendo que la hemorragia no controlada es la principal causa de muerte prevenible por trauma.
                                </p>
                            </div>
                        </div>
                    )}
                </section>

                {/* Importancia */}
                <section id="importancia" className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('importancia')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                            ¿Por Qué es Importante?
                        </h2>
                        {openSections.importancia ? <FaChevronUp className="text-blue-800" /> : <FaChevronDown className="text-blue-800" />}
                    </div>

                    {openSections.importancia && (
                        <div className="mt-4 space-y-4 animate-fadeIn">
                            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500 mb-4">
                                <p className="text-red-800 font-bold text-xl">
                                    Una persona puede morir desangrada en tan solo 5 minutos.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed">
                                Los servicios de emergencia profesionales, aunque rápidos, pueden tardar más tiempo en llegar, especialmente en incidentes a gran escala o en áreas remotas. Saber identificar y controlar una hemorragia potencialmente mortal puede marcar la diferencia entre la vida y la muerte.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-blue-800 mb-2">En el hogar</h3>
                                    <p className="text-sm">Accidentes con cuchillos, herramientas, vidrios rotos o caídas graves pueden causar hemorragias.</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-blue-800 mb-2">En la vía pública</h3>
                                    <p className="text-sm">Accidentes de tráfico, caídas o incidentes violentos pueden resultar en heridas sangrantes.</p>
                                </div>
                                <div className="bg-blue-50 p-4 rounded-lg shadow-sm">
                                    <h3 className="font-semibold text-blue-800 mb-2">En lugares públicos</h3>
                                    <p className="text-sm">Emergencias masivas, desastres naturales o accidentes pueden requerir acción inmediata.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Pasos Clave (ABC) */}
                <section id="pasos" className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('pasosClave')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                            Los Pasos Clave: A-B-C
                        </h2>
                        {openSections.pasosClave ? <FaChevronUp className="text-blue-800" /> : <FaChevronDown className="text-blue-800" />}
                    </div>

                    {openSections.pasosClave && (
                        <div className="mt-6 space-y-6 animate-fadeIn">
                            <p className="text-gray-700 leading-relaxed mb-4">
                                La iniciativa "Stop the Bleed" enseña tres pasos rápidos y fáciles de recordar:
                            </p>

                            {/* A - Alertar / Asegurar */}
                            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                                    <span className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">A</span>
                                    Asegurar la Escena y Alertar
                                </h3>
                                <div className="pl-4 border-l-4 border-blue-300">
                                    <p className="text-gray-700 leading-relaxed mb-3">
                                        <strong className="text-blue-800">Tu seguridad es primero.</strong> Antes de ayudar, evalúa rápidamente si el entorno es seguro para ti. Si hay peligro activo (tirador, fuego, tráfico), resguárdate y espera a que lleguen los profesionales.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        <strong className="text-blue-800">Llama al número de emergencia local</strong> (ej., 911 en México y EE.UU., 112 en Europa, etc.) o pide a alguien cercano que lo haga. Proporciona tu ubicación y la naturaleza de la emergencia.
                                    </p>
                                </div>
                            </div>

                            {/* B - Buscar la Hemorragia */}
                            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                                    <span className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">B</span>
                                    Buscar la Hemorragia (Bleeding)
                                </h3>

                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-3/5 pl-4 border-l-4 border-blue-300">
                                        <p className="text-gray-700 leading-relaxed mb-3">
                                            Localiza la fuente del sangrado que pone en peligro la vida. Busca:
                                        </p>
                                        <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
                                            <li>Sangre que <strong className="text-red-600">brota (chorrea)</strong> de la herida.</li>
                                            <li>Sangre que <strong className="text-red-600">no deja de salir</strong> de la herida.</li>
                                            <li>Sangre que <strong className="text-red-600">empapa la ropa</strong> o se acumula en el suelo.</li>
                                            <li>Pérdida total o parcial de un <strong className="text-red-600">brazo o pierna</strong>.</li>
                                            <li>Víctima confundida o inconsciente después de una lesión sangrante.</li>
                                        </ul>
                                        <p className="text-gray-700 leading-relaxed mt-3 italic">
                                            Puede ser necesario quitar o cortar la ropa para encontrar la herida exacta.
                                        </p>
                                    </div>
                                    <div className="md:w-2/5">
                                        <img
                                            src={hemo}
                                            alt="Signos de hemorragia grave"
                                            className="rounded-lg shadow-md w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* C - Comprimir */}
                            <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm border border-blue-100">
                                <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center">
                                    <span className="bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3">C</span>
                                    Comprimir para Detener el Sangrado
                                </h3>

                                <p className="text-gray-700 leading-relaxed mb-6 pl-4 border-l-4 border-blue-300">
                                    Existen varias formas de aplicar presión para controlar la hemorragia, dependiendo del tipo y ubicación de la herida:
                                </p>

                                {/* Métodos de compresión */}
                                <div className="space-y-8">
                                    {/* 1. Presión Directa */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b border-blue-100">
                                            1. Presión Directa
                                        </h4>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="md:w-1/2">
                                                <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
                                                    <li>Usa tus manos (preferiblemente con guantes), un paño limpio, o gasa/apósito.</li>
                                                    <li>Aplica presión <strong>firme y constante</strong> directamente sobre la herida sangrante.</li>
                                                    <li>Si la sangre empapa el primer apósito, <strong>no lo quites</strong>. Coloca otro encima y sigue presionando con más fuerza.</li>
                                                    <li>Mantén la presión hasta que llegue la ayuda médica.</li>
                                                </ul>
                                            </div>
                                            <div className="md:w-1/2">
                                                <img
                                                    src={pres}
                                                    alt="Aplicación de presión directa"
                                                    className="rounded-lg shadow-sm w-full h-auto object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2. Empaquetamiento */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b border-blue-100">
                                            2. Empaquetamiento de la Herida
                                        </h4>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="md:w-1/2">
                                                <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
                                                    <li>Para heridas profundas en brazos, piernas, cuello, axilas o ingles.</li>
                                                    <li>Introduce gasa o un paño limpio <strong>directamente DENTRO de la herida</strong>, rellenándola lo más posible.</li>
                                                    <li>Una vez llena, aplica presión directa firme sobre la gasa empaquetada.</li>
                                                    <li className="text-red-600 font-semibold">Esta técnica es avanzada y se aprende mejor en un curso práctico.</li>
                                                </ul>
                                            </div>
                                            <div className="md:w-1/2">
                                                <img
                                                    src={empac}
                                                    alt="Empaquetamiento de herida"
                                                    className="rounded-lg shadow-sm w-full h-auto object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* 3. Torniquete */}
                                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                                        <h4 className="text-xl font-bold text-blue-700 mb-3 pb-2 border-b border-blue-100">
                                            3. Aplicación de Torniquete
                                        </h4>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="md:w-1/2">
                                                <div className="bg-red-50 p-3 rounded-lg mb-3 border-l-4 border-red-500">
                                                    <p className="text-red-800 font-semibold">
                                                        Solo para hemorragias graves en brazos o piernas que no se controlan con presión directa.
                                                    </p>
                                                </div>
                                                <ul className="list-disc ml-6 text-gray-700 leading-relaxed space-y-2">
                                                    <li>Coloca el torniquete "alto y apretado", unos 5-7 cm por encima de la herida.</li>
                                                    <li><strong>NUNCA</strong> sobre una articulación (codo o rodilla).</li>
                                                    <li>Aprieta hasta que el sangrado se detenga (será doloroso).</li>
                                                    <li>Anota la hora en que se aplicó.</li>
                                                    <li><strong>No quites</strong> el torniquete una vez aplicado.</li>
                                                </ul>
                                            </div>
                                            <div className="md:w-1/2">
                                                <img
                                                    src={torni}
                                                    alt="Aplicación de torniquete"
                                                    className="rounded-lg shadow-sm w-full h-auto object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Kits de Control de Hemorragias */}
                <section id="kits" className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('kits')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                            Kits de Control de Hemorragias
                        </h2>
                        {openSections.kits ? <FaChevronUp className="text-blue-800" /> : <FaChevronDown className="text-blue-800" />}
                    </div>

                    {openSections.kits && (
                        <div className="mt-6 animate-fadeIn">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-3/5">
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Los kits de control de hemorragias ("Bleeding Control Kits" o "Stop the Bleed Kits") contienen suministros esenciales para tratar sangrados graves. Se recomienda tenerlos en lugares públicos, escuelas, empresas y vehículos.
                                    </p>

                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-blue-800 mb-2">Un kit básico incluye:</h3>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            <li className="flex items-center gap-2">
                                                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">✓</span>
                                                Guantes protectores (sin látex)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">✓</span>
                                                Torniquete comercial (CAT, SOFTT-W)
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">✓</span>
                                                Gasa compresiva o apósitos hemostáticos
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">✓</span>
                                                Gasa para empaquetar heridas
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">✓</span>
                                                Tijeras de trauma
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <span className="bg-blue-800 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">✓</span>
                                                Marcador permanente
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:w-2/5">
                                    <img
                                        src={pack}
                                        alt="Kit de control de hemorragias"
                                        className="rounded-lg shadow-md w-full h-auto object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Entrenamiento */}
                <section id="entrenamiento" className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('entrenamiento')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">5</span>
                            ¡Entrénate!
                        </h2>
                        {openSections.entrenamiento ? <FaChevronUp className="text-blue-800" /> : <FaChevronDown className="text-blue-800" />}
                    </div>

                    {openSections.entrenamiento && (
                        <div className="mt-6 animate-fadeIn">
                            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500 mb-6">
                                <p className="text-yellow-800 font-medium text-lg">
                                    Leer sobre cómo detener el sangrado es un primer paso importante, pero <strong>la práctica es crucial</strong>.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                Busca cursos presenciales de "Stop the Bleed" o control de hemorragias en tu comunidad. Estos cursos ofrecen instrucción práctica sobre cómo aplicar presión directa, empaquetar heridas y usar un torniquete correctamente.
                            </p>

                            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                                <h3 className="font-semibold text-blue-800 mb-3">Organizaciones que ofrecen formación:</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-3">
                                        <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center mt-0.5">+</span>
                                        <span>Cruz Roja (Mexicana e Internacional)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                                        <span>American College of Surgeons (stopthebleed.org)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                                        <span>Entidades locales de protección civil</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="bg-blue-800 text-white rounded-full w-5 h-5 flex items-center justify-center mt-0.5">✓</span>
                                        <span>Servicios médicos de emergencia</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </section>

                {/* Consideraciones Legales */}
                <section className="mb-8 bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('legal')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 flex items-center gap-3">
                            <span className="bg-blue-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">6</span>
                            Consideraciones Legales
                        </h2>
                        {openSections.legal ? <FaChevronUp className="text-blue-800" /> : <FaChevronDown className="text-blue-800" />}
                    </div>

                    {openSections.legal && (
                        <div className="mt-6 animate-fadeIn">
                            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                                <h3 className="text-xl font-semibold text-blue-800 mb-3">Leyes del Buen Samaritano</h3>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    En muchas jurisdicciones existen "Leyes del Buen Samaritano" que ofrecen protección legal a los ciudadanos que prestan ayuda de emergencia de buena fe.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Estas leyes buscan reducir el miedo a demandas y animar a la gente a intervenir. Investiga las leyes específicas de tu país o estado (como México o Querétaro, en tu caso).
                                </p>
                            </div>
                        </div>
                    )}
                </section>

                {/* Referencias */}
                <section className="bg-gradient-to-b from-gray-100 to-gray-200 p-6 rounded-xl shadow-md">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection('recursos')}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Recursos y Referencias</h2>
                        {openSections.recursos ? <FaChevronUp className="text-gray-800" /> : <FaChevronDown className="text-gray-800" />}
                    </div>

                    {openSections.recursos && (
                        <div className="mt-4 space-y-2 animate-fadeIn">
                            <a
                                href="https://www.stopthebleed.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="bg-blue-800 text-white p-2 rounded-lg mr-3">
                                    <span className="font-bold">SB</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800">Stop the Bleed Official Website</h3>
                                    <p className="text-sm text-gray-600">American College of Surgeons</p>
                                </div>
                            </a>

                            <a
                                href="https://www.dhs.gov/stopthebleed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="bg-blue-800 text-white p-2 rounded-lg mr-3">
                                    <span className="font-bold">DHS</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800">Stop the Bleed</h3>
                                    <p className="text-sm text-gray-600">U.S. Department of Homeland Security</p>
                                </div>
                            </a>

                            <a
                                href="https://www.cruzrojamexicana.org.mx/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                <div className="bg-red-600 text-white p-2 rounded-lg mr-3">
                                    <span className="font-bold">CR</span>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800">Cruz Roja Mexicana</h3>
                                    <p className="text-sm text-gray-600">Cursos de primeros auxilios/control de hemorragias</p>
                                </div>
                            </a>

                            <p className="mt-4 text-sm text-gray-600 italic">
                                La información y las técnicas pueden actualizarse. Consulta siempre fuentes oficiales y considera tomar un curso certificado.
                            </p>
                        </div>
                    )}
                </section>
            </main>
        </div>
    );
}
