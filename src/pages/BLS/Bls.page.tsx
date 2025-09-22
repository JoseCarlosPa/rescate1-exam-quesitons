import {
    FaArrowLeft,
    FaArrowUp,
    FaBookMedical,
    FaChalkboardTeacher,
    FaChevronDown,
    FaChevronUp,
    FaClipboardCheck,
    FaExternalLinkAlt,
    FaHandsHelping,
    FaHeartbeat,
    FaInfoCircle,
    FaLink,
    FaListUl,
    FaTasks,
    FaUserMd
} from "react-icons/fa";
import chain from '../../assets/chain.png'
import nineone from '../../assets/911.jpeg'
import comp from '../../assets/comp.jpg'
import parches from '../../assets/parches.jpg'
import heim from '../../assets/heim.webp'
import {NavLink} from "react-router";
import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component.tsx";

// Tipos para la tabla de contenidos
interface TOCItem {
    id: string;
    title: string;
    isSection?: boolean;
}

interface AccordionSectionProps {
    title: string;
    id: string;
    children: React.ReactNode;
    isOpen: boolean;
    toggleSection: (id: string) => void;
    icon?: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
                                                               title,
                                                               id,
                                                               children,
                                                               isOpen,
                                                               toggleSection,
                                                               icon
                                                           }) => {
    return (
        <motion.div
            className="mb-6"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.3}}
        >
            <button
                onClick={() => toggleSection(id)}
                className="w-full flex justify-between items-center text-left text-xl font-semibold text-red-600 hover:text-red-700 focus:outline-none p-4 bg-red-50 rounded-lg shadow hover:shadow-md transition-all duration-300"
                id={id}
            >
                <div className="flex items-center gap-2">
                    {icon && <span className="text-red-500">{icon}</span>}
                    {title}
                </div>
                {isOpen ? <FaChevronUp className="text-red-600 transition-transform duration-300"/> :
                    <FaChevronDown className="text-red-600 transition-transform duration-300"/>}
            </button>
            {isOpen && (
                <motion.div
                    className="mt-2 p-4 bg-white rounded-b-lg shadow-inner"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    transition={{duration: 0.3}}
                >
                    {children}
                </motion.div>
            )}
        </motion.div>
    );
};

// Componente para la tabla de contenidos
const TableOfContents: React.FC<{ items: TOCItem[], activeSection: string | null, onClick: (id: string) => void }> = ({
                                                                                                                          items,
                                                                                                                          activeSection,
                                                                                                                          onClick
                                                                                                                      }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow sticky top-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <FaListUl className="text-red-500"/>
                Contenido
            </h3>
            <ul className="space-y-2">
                {items.map((item) => (
                    <li key={item.id} className={item.isSection ? "mt-2" : "ml-4"}>
                        <a
                            href={`#${item.id}`}
                            className={`${
                                activeSection === item.id
                                    ? "text-red-600 font-medium"
                                    : "text-gray-700 hover:text-red-500"
                            } ${item.isSection ? "font-semibold" : ""} transition-colors duration-200 flex items-center`}
                            onClick={(e) => {
                                e.preventDefault();
                                onClick(item.id);
                            }}
                        >
                            {item.isSection && <FaBookMedical className="text-red-500 mr-2 h-3 w-3"/>}
                            {!item.isSection && <span className="text-red-300 mr-2">•</span>}
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Componente para el botón de volver arriba
const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <motion.button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 p-3 rounded-full bg-red-600 text-white shadow-lg z-10 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 ${
                isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
            } transition-opacity duration-300`}
            aria-label="Volver arriba"
            initial={{scale: 0.8}}
            animate={{scale: isVisible ? 1 : 0.8}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
        >
            <FaArrowUp/>
        </motion.button>
    );
};

export default function Bls() {
    const [openSection, setOpenSection] = useState<string | null>(null);
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    // Definir elementos de la tabla de contenidos
    const tocItems: TOCItem[] = [
        {id: "intro", title: "Introducción", isSection: true},
        {id: "importance", title: "Importancia del BLS", isSection: true},
        {id: "components", title: "Componentes Clave", isSection: true},
        {id: "sceneSafety", title: "1. Asegurar la Escena"},
        {id: "responseBreathing", title: "2. Evaluar Respuesta y Respiración"},
        {id: "activateEMS", title: "3. Activar el SEM"},
        {id: "cpr", title: "4. RCP"},
        {id: "aed", title: "5. Uso del DEA"},
        {id: "choking", title: "6. Manejo de Atragantamiento"},
        {id: "training", title: "Entrenamiento y Certificación", isSection: true},
        {id: "resources", title: "Recursos Adicionales", isSection: true}
    ];

    const toggleSection = (id: string) => {
        setOpenSection(openSection === id ? null : id);

        // Scroll a la sección si se abre
        if (openSection !== id) {
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({behavior: 'smooth', block: 'start'});
                }
            }, 100);
        }
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});

            // Si es una sección de acordeón, la abrimos
            if (tocItems.find(item => !item.isSection && item.id === id)) {
                setOpenSection(id);
            }

            setActiveSection(id);
        }
    };

    // Observar qué sección está en la vista
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {rootMargin: "-100px 0px -300px 0px"}
        );

        // Observar secciones principales y subsecciones
        tocItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                sectionRefs.current[item.id] = element;
                observer.observe(element);
            }
        });

        return () => {
            tocItems.forEach(item => {
                if (sectionRefs.current[item.id]) {
                    observer.unobserve(sectionRefs.current[item.id]!);
                }
            });
        };
    }, []);

    return (
        <SEOWrapper
            title="BLS (Basic Life Support) - Soporte Vital Básico | EMT EXAM"
            description="Aprende BLS paso a paso: RCP, uso del AED, desfibrilador, cadena de supervivencia y maniobra de Heimlich. Guía completa de soporte vital básico."
            keywords="bls, soporte vital básico, rcp, reanimación cardiopulmonar, aed, desfibrilador, heimlich, cadena supervivencia"
            section="bls"
            difficulty="Intermediate"
            timeRequired="PT60M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="bg-gray-50 min-h-screen font-sans">
                <header className="bg-gradient-to-r from-red-700 to-red-600 text-white p-6 shadow-lg">
                    <div className="container mx-auto flex items-center justify-center gap-4">
                        <motion.div
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{duration: 0.5}}
                        >
                            <FaHeartbeat className="text-white h-14 w-14"/>
                        </motion.div>
                        <div className="flex-1 max-w-4xl">
                            <motion.h1
                                className="text-4xl font-bold tracking-tight"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.5}}
                            >
                                Soporte Vital Básico (BLS)
                            </motion.h1>
                            <motion.p
                                className="text-xl text-red-100"
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.5, delay: 0.2}}
                            >
                                Guía Informativa Completa
                            </motion.p>
                        </div>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8 md:px-8 lg:flex lg:gap-8">
                    {/* Sidebar con tabla de contenidos en pantallas grandes */}
                    <div className="hidden lg:block lg:w-1/4">
                        <TableOfContents
                            items={tocItems}
                            activeSection={activeSection}
                            onClick={scrollToSection}
                        />
                    </div>

                    {/* Contenido principal */}
                    <div className="lg:w-3/4">
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 0.3}}
                        >
                            <NavLink
                                to="/"
                                className="inline-flex items-center gap-2 bg-red-700 text-white px-5 py-2.5 rounded-lg shadow hover:bg-red-600 transition duration-300 font-medium mb-6"
                            >
                                <FaArrowLeft className="h-4 w-4"/> Regresar
                            </NavLink>
                        </motion.div>

                        {/* Tabla de contenidos móvil desplegable */}
                        <div className="lg:hidden mb-6">
                            <AccordionSection
                                title="Tabla de Contenidos"
                                id="mobile-toc"
                                isOpen={openSection === "mobile-toc"}
                                toggleSection={toggleSection}
                                icon={<FaListUl/>}
                            >
                                <ul className="space-y-2.5">
                                    {tocItems.map((item) => (
                                        <li key={item.id} className={item.isSection ? "mt-3" : "ml-4"}>
                                            <a
                                                href={`#${item.id}`}
                                                className={`${
                                                    activeSection === item.id
                                                        ? "text-red-600 font-medium"
                                                        : "text-gray-700"
                                                } ${item.isSection ? "font-semibold" : ""} hover:text-red-500 transition-colors duration-200 flex items-center`}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollToSection(item.id);
                                                    setOpenSection(null);
                                                }}
                                            >
                                                {item.isSection &&
                                                    <FaBookMedical className="text-red-500 mr-2 h-3 w-3"/>}
                                                {!item.isSection && <span className="text-red-300 mr-2">•</span>}
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionSection>
                        </div>

                        {/* Introducción */}
                        <motion.section
                            id="intro"
                            className="mb-10 bg-white p-8 rounded-xl shadow-md"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                                <FaInfoCircle className="text-red-500"/>
                                ¿Qué es el Soporte Vital Básico (BLS)?
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="leading-relaxed mb-4">
                                    El Soporte Vital Básico (BLS) se refiere al conjunto de técnicas y procedimientos de
                                    emergencia que se realizan para mantener la vida de una persona hasta que pueda
                                    recibir atención médica avanzada. El objetivo principal del BLS es proporcionar
                                    oxígeno al cerebro y al corazón para prevenir o minimizar el daño cerebral y la
                                    muerte. Estas técnicas no requieren equipo médico sofisticado y pueden ser
                                    realizadas por cualquier persona con entrenamiento básico.
                                </p>
                                <p className="leading-relaxed mb-6">
                                    El BLS es un componente crucial de la "Cadena de Supervivencia", una serie de
                                    acciones que, si se realizan a tiempo y correctamente, aumentan significativamente
                                    las posibilidades de supervivencia de una persona que sufre un paro cardíaco súbito
                                    u otra emergencia potencialmente mortal.
                                </p>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                                    <p className="font-medium text-red-800">
                                        La rápida aplicación del BLS puede duplicar o incluso triplicar las
                                        probabilidades de supervivencia en un paro cardíaco.
                                    </p>
                                </div>
                                <motion.div
                                    className="flex justify-center w-full overflow-hidden rounded-xl shadow-lg"
                                    whileHover={{scale: 1.02}}
                                    transition={{duration: 0.3}}
                                >
                                    <img
                                        src={chain}
                                        alt="Cadena de Supervivencia - Ilustración conceptual"
                                        className="w-full max-w-3xl object-cover"
                                    />
                                </motion.div>
                            </div>
                        </motion.section>

                        {/* Importancia del BLS */}
                        <motion.section
                            id="importance"
                            className="mb-10 bg-white p-8 rounded-xl shadow-md"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                                <FaHandsHelping className="text-red-500"/>
                                Importancia del BLS
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <div
                                    className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg shadow-inner mb-6">
                                    <h3 className="text-xl font-semibold text-red-700 mb-3">Datos Clave</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-red-500 font-bold mr-2">•</span>
                                            Cada minuto sin RCP reduce las posibilidades de supervivencia en un 10%.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 font-bold mr-2">•</span>
                                            La mayoría de los paros cardíacos ocurren fuera del hospital, donde la
                                            intervención inmediata es crucial.
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-red-500 font-bold mr-2">•</span>
                                            La RCP de alta calidad por testigos puede duplicar o triplicar las tasas de
                                            supervivencia.
                                        </li>
                                    </ul>
                                </div>
                                <p className="leading-relaxed mb-4">
                                    El tiempo es crítico en una emergencia médica como un paro cardíaco. Cada minuto que
                                    pasa sin RCP (Reanimación Cardiopulmonar) reduce las posibilidades de supervivencia
                                    en aproximadamente un 10%. La intervención temprana por parte de testigos
                                    presenciales que inician BLS puede duplicar o triplicar las tasas de supervivencia.
                                </p>
                                <p className="leading-relaxed font-medium">
                                    Saber realizar BLS te convierte en un primer interviniente vital. Puedes marcar la
                                    diferencia entre la vida y la muerte mientras esperas la llegada de los servicios de
                                    emergencia profesionales (SEM).
                                </p>
                            </div>
                        </motion.section>

                        {/* Componentes Clave del BLS */}
                        <section id="components" className="mb-10">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 bg-white p-4 rounded-xl shadow-md">
                                <FaListUl className="text-red-500"/>
                                Componentes Clave del BLS
                            </h2>

                            <AccordionSection
                                title="1. Asegurar la Escena"
                                id="sceneSafety"
                                isOpen={openSection === 'sceneSafety'}
                                toggleSection={toggleSection}
                                icon={<FaInfoCircle/>}
                            >
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="leading-relaxed">
                                        Antes de acercarte a la víctima, evalúa rápidamente el entorno para asegurarte
                                        de que sea seguro para ti y para la persona. Busca peligros como tráfico, fuego,
                                        cables eléctricos caídos, materiales peligrosos, etc. No te conviertas tú
                                        también en una víctima.
                                    </p>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                        <p className="text-yellow-800">
                                            <strong>¡Recuerda!</strong> Tu seguridad es la prioridad número uno. No
                                            puedes ayudar si también te conviertes en víctima.
                                        </p>
                                    </div>
                                    <h4 className="text-lg font-semibold text-gray-800 mt-4">Puntos clave para evaluar
                                        la seguridad:</h4>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Verifica si hay tráfico o vehículos en movimiento</li>
                                        <li>Observa si hay fuego, humo o materiales peligrosos</li>
                                        <li>Comprueba si hay cables eléctricos caídos</li>
                                        <li>Evalúa la estabilidad estructural (en caso de derrumbes)</li>
                                        <li>Busca objetos que puedan caer o cualquier otro peligro potencial</li>
                                    </ul>
                                </div>
                            </AccordionSection>

                            <AccordionSection
                                title="2. Evaluar la Capacidad de Respuesta y la Respiración"
                                id="responseBreathing"
                                isOpen={openSection === 'responseBreathing'}
                                toggleSection={toggleSection}
                                icon={<FaInfoCircle/>}
                            >
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="leading-relaxed mb-3">
                                        Acércate a la víctima y tócala suavemente en los hombros preguntando en voz
                                        alta: "¿Estás bien?". Observa si hay respuesta verbal o movimiento.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                                        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
                                            <h4 className="text-lg font-semibold text-red-700 mb-2">Evaluación de la
                                                respuesta</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Toca los hombros de la víctima</li>
                                                <li>Pregunta en voz alta "¿Estás bien?"</li>
                                                <li>Observa cualquier respuesta verbal o movimiento</li>
                                            </ul>
                                        </div>
                                        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
                                            <h4 className="text-lg font-semibold text-red-700 mb-2">Evaluación de la
                                                respiración</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Observa si el pecho se eleva y desciende</li>
                                                <li>Escucha si hay sonidos respiratorios normales</li>
                                                <li>No más de 10 segundos para evaluar</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <p className="leading-relaxed">
                                        Simultáneamente, evalúa la respiración durante no más de 10 segundos. Mira si el
                                        pecho se eleva y desciende. Escucha si hay sonidos respiratorios normales.
                                        Ignora los jadeos o respiraciones agónicas (boqueadas), ya que no son
                                        respiraciones efectivas. Si la persona no responde y no respira normalmente (o
                                        solo jadea), asume que está en paro cardíaco.
                                    </p>
                                    <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                                        <p className="text-red-800">
                                            <strong>Importante:</strong> Los jadeos o respiraciones agónicas NO son
                                            respiraciones normales y son un signo de paro cardíaco.
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>

                            <AccordionSection
                                title="3. Activar el Sistema de Emergencias Médicas (SEM)"
                                id="activateEMS"
                                isOpen={openSection === 'activateEMS'}
                                toggleSection={toggleSection}
                                icon={<FaInfoCircle/>}
                            >
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="leading-relaxed mb-4">
                                        Si estás solo, llama inmediatamente al número de emergencia local (ej., 911,
                                        112) antes de iniciar la RCP en adultos. Si hay alguien más contigo, pídele que
                                        llame y que busque un Desfibrilador Externo Automático (DEA) si hay uno
                                        disponible, mientras tú comienzas la RCP. Para niños y bebés, si estás solo y no
                                        presenciaste el colapso, realiza 5 ciclos (aproximadamente 2 minutos) de RCP
                                        antes de llamar.
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                                        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
                                            <h4 className="text-lg font-semibold text-red-700 mb-2">Para adultos</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Si estás solo: llama primero, luego inicia RCP</li>
                                                <li>Si hay más personas: asigna tareas (llamar, buscar DEA, iniciar
                                                    RCP)
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex-1 bg-gray-50 p-4 rounded-lg shadow-inner">
                                            <h4 className="text-lg font-semibold text-red-700 mb-2">Para niños y
                                                bebés</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Si no presenciaste el colapso: 2 minutos de RCP antes de llamar</li>
                                                <li>Si presenciaste el colapso: sigue el protocolo de adultos</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <motion.div
                                        className="flex justify-center w-full"
                                        whileHover={{scale: 1.02}}
                                        transition={{duration: 0.3}}
                                    >
                                        <img
                                            src={nineone}
                                            alt="Persona llamando a emergencias"
                                            className="rounded-lg shadow-md w-full max-w-lg h-auto object-cover"
                                        />
                                    </motion.div>
                                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                                        <p className="text-blue-800">
                                            <strong>Recuerda:</strong> Al llamar a emergencias, indica claramente la
                                            ubicación, qué ocurrió, el estado de la víctima y sigue las instrucciones
                                            del operador.
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>

                            <AccordionSection
                                title="4. Reanimación Cardiopulmonar (RCP)"
                                id="cpr"
                                isOpen={openSection === 'cpr'}
                                toggleSection={toggleSection}
                                icon={<FaInfoCircle/>}
                            >
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="leading-relaxed mb-3">
                                        La RCP consiste en compresiones torácicas y, si estás entrenado y dispuesto,
                                        ventilaciones de rescate. El objetivo es mantener la sangre oxigenada circulando
                                        hacia los órganos vitales.
                                    </p>
                                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 mb-6">
                                        <h4 className="text-lg font-semibold text-red-800 mb-2">Principios clave de la
                                            RCP de alta calidad:</h4>
                                        <ul className="list-disc ml-6 space-y-1 text-red-800">
                                            <li>Compresiones rápidas (100-120/min)</li>
                                            <li>Compresiones profundas (5-6 cm en adultos)</li>
                                            <li>Permitir la reexpansión completa del tórax</li>
                                            <li>Minimizar las interrupciones</li>
                                            <li>Evitar la hiperventilación</li>
                                        </ul>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Compresiones
                                        Torácicas:</h4>
                                    <ul className="list-disc ml-6 leading-relaxed space-y-2">
                                        <li>Coloca a la víctima boca arriba sobre una superficie firme y plana.</li>
                                        <li>Arrodíllate a un lado de la víctima.</li>
                                        <li>Coloca el talón de una mano en el centro del pecho, sobre la mitad inferior
                                            del esternón. Coloca la otra mano encima y entrelaza los dedos.
                                        </li>
                                        <li>Mantén los brazos rectos y los hombros directamente sobre las manos.</li>
                                        <li>Comprime el pecho hacia abajo al menos 5 cm (2 pulgadas) pero no más de 6 cm
                                            (2.4 pulgadas) para adultos.
                                        </li>
                                        <li>Realiza compresiones a una frecuencia de 100 a 120 por minuto.</li>
                                        <li>Permite que el pecho se reexpanda completamente después de cada compresión.
                                            Minimiza las interrupciones.
                                        </li>
                                    </ul>
                                    <motion.div
                                        className="flex justify-center w-full my-6"
                                        whileHover={{scale: 1.02}}
                                        transition={{duration: 0.3}}
                                    >
                                        <img
                                            src={comp}
                                            alt="Ilustración de compresiones torácicas en RCP"
                                            className="rounded-lg shadow-md w-full max-w-xl h-auto object-cover"
                                        />
                                    </motion.div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Ventilaciones de Rescate
                                        (si estás entrenado):</h4>
                                    <ul className="list-disc ml-6 leading-relaxed space-y-2">
                                        <li>Después de 30 compresiones, si estás entrenado y dispuesto, administra 2
                                            ventilaciones.
                                        </li>
                                        <li>Abre la vía aérea inclinando la cabeza hacia atrás y levantando el mentón
                                            (maniobra frente-mentón).
                                        </li>
                                        <li>Pinza la nariz de la víctima.</li>
                                        <li>Cubre completamente la boca de la víctima con la tuya y administra una
                                            respiración de aproximadamente 1 segundo, observando que el pecho se eleve.
                                        </li>
                                        <li>Deja que el aire salga y administra la segunda respiración.</li>
                                        <li>Continúa ciclos de 30 compresiones y 2 ventilaciones.</li>
                                        <li>Si no estás entrenado o no te sientes cómodo dando ventilaciones, realiza
                                            RCP solo con compresiones (Hands-Only CPR) de forma continua.
                                        </li>
                                    </ul>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                        <p className="text-yellow-800">
                                            <strong>Nota:</strong> Las profundidades y técnicas de
                                            compresión/ventilación varían para niños e infantes. Se requiere formación
                                            específica.
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>

                            <AccordionSection
                                title="5. Uso del Desfibrilador Externo Automático (DEA)"
                                id="aed"
                                isOpen={openSection === 'aed'}
                                toggleSection={toggleSection}
                                icon={<FaInfoCircle/>}
                            >
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="leading-relaxed mb-4">
                                        Un DEA es un dispositivo portátil que analiza el ritmo cardíaco y puede
                                        administrar una descarga eléctrica (desfibrilación) si detecta un ritmo anormal
                                        potencialmente mortal (como la fibrilación ventricular).
                                    </p>
                                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                                        <h4 className="text-lg font-semibold text-blue-800 mb-2">Secuencia del DEA -
                                            "ABCD"</h4>
                                        <ul className="space-y-2 text-blue-800">
                                            <li><strong>A</strong>ctiva el DEA (encenderlo)</li>
                                            <li><strong>B</strong>arre el pecho (secar si está mojado)</li>
                                            <li><strong>C</strong>oloca los parches (según indican los diagramas)</li>
                                            <li><strong>D</strong>espejar y presionar el botón (cuando lo indique)</li>
                                        </ul>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Pasos para usar el
                                        DEA:</h4>
                                    <ol className="list-decimal ml-6 leading-relaxed space-y-2">
                                        <li>Tan pronto como llegue un DEA, enciéndelo y sigue las instrucciones de voz y
                                            visuales.
                                        </li>
                                        <li>Coloca los parches adhesivos en el pecho desnudo de la víctima como se
                                            indica en los diagramas del DEA o los parches.
                                        </li>
                                        <li>Asegúrate de que nadie toque a la víctima mientras el DEA analiza el
                                            ritmo.
                                        </li>
                                        <li>Si el DEA indica una descarga, asegúrate nuevamente de que nadie toque a la
                                            víctima y presiona el botón de descarga.
                                        </li>
                                        <li>Inmediatamente después de la descarga (o si no se indica descarga), reanuda
                                            la RCP comenzando con las compresiones torácicas.
                                        </li>
                                        <li>Sigue las indicaciones del DEA hasta que lleguen los profesionales de la
                                            salud.
                                        </li>
                                    </ol>
                                    <motion.div
                                        className="flex justify-center w-full my-6"
                                        whileHover={{scale: 1.02}}
                                        transition={{duration: 0.3}}
                                    >
                                        <img
                                            src={parches}
                                            alt="Colocación de parches de DEA"
                                            className="rounded-lg shadow-md w-full max-w-xl h-auto object-cover"
                                        />
                                    </motion.div>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                        <p className="text-yellow-800">
                                            <strong>Importante:</strong> Los DEA modernos son muy fáciles de usar y
                                            guían al usuario con instrucciones de voz y visuales claras. No tengas miedo
                                            de usarlo; no puede hacer daño a alguien que no lo necesita.
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>

                            <AccordionSection
                                title="6. Manejo de la Obstrucción de la Vía Aérea (Atragantamiento)"
                                id="choking"
                                isOpen={openSection === 'choking'}
                                toggleSection={toggleSection}
                                icon={<FaInfoCircle/>}
                            >
                                <div className="prose prose-lg max-w-none text-gray-700">
                                    <p className="leading-relaxed mb-4">
                                        El BLS también incluye el manejo del atragantamiento (obstrucción de la vía
                                        aérea por cuerpo extraño - OVACE).
                                    </p>
                                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                                        <div className="flex-1 bg-red-50 p-4 rounded-lg shadow-inner">
                                            <h4 className="text-lg font-semibold text-red-700 mb-2">Signos de
                                                atragantamiento:</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Incapacidad para hablar o respirar</li>
                                                <li>Sonidos de asfixia o jadeos</li>
                                                <li>Agarre de la garganta con las manos (señal universal de
                                                    atragantamiento)
                                                </li>
                                                <li>Coloración azulada (cianosis)</li>
                                                <li>Pérdida de consciencia eventual si no se trata</li>
                                            </ul>
                                        </div>
                                        <div className="flex-1 bg-green-50 p-4 rounded-lg shadow-inner">
                                            <h4 className="text-lg font-semibold text-green-700 mb-2">Acciones
                                                inmediatas:</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Pregunta: "¿Te estás atragantando?"</li>
                                                <li>Si puede hablar, toser o respirar: anima a toser</li>
                                                <li>Si no puede hablar, toser o respirar: aplica la Maniobra de
                                                    Heimlich
                                                </li>
                                                <li>Si pierde la consciencia: inicia RCP</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Adultos y Niños (mayores de
                                        1 año) conscientes:</h4>
                                    <ul className="list-disc ml-6 leading-relaxed space-y-2">
                                        <li>Pregunta "¿Te estás atragantando?". Si la persona asiente o no puede hablar,
                                            toser o respirar, actúa.
                                        </li>
                                        <li>Realiza compresiones abdominales (Maniobra de Heimlich):
                                            <ul className="list-disc ml-6 space-y-1 mt-1">
                                                <li>Párate detrás de la persona y rodea su cintura con tus brazos.</li>
                                                <li>Forma un puño con una mano y colócalo por encima del ombligo y
                                                    debajo del esternón.
                                                </li>
                                                <li>Agarra tu puño con la otra mano y realiza compresiones rápidas hacia
                                                    adentro y hacia arriba.
                                                </li>
                                                <li>Continúa hasta que el objeto sea expulsado o la persona quede
                                                    inconsciente.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <motion.div
                                        className="flex justify-center w-full my-6"
                                        whileHover={{scale: 1.02}}
                                        transition={{duration: 0.3}}
                                    >
                                        <img
                                            src={heim}
                                            alt="Ilustración de la Maniobra de Heimlich"
                                            className="rounded-lg shadow-md w-full max-w-xl h-auto object-cover"
                                        />
                                    </motion.div>
                                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Si la persona queda
                                        inconsciente:</h4>
                                    <ul className="list-disc ml-6 leading-relaxed space-y-2">
                                        <li>Colócala cuidadosamente en el suelo.</li>
                                        <li>Activa el SEM (si aún no lo has hecho).</li>
                                        <li>Inicia la RCP comenzando con compresiones torácicas.</li>
                                        <li>Cada vez que abras la vía aérea para dar ventilaciones, busca el objeto en
                                            la boca y extráelo si lo ves.
                                        </li>
                                    </ul>
                                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                        <p className="text-yellow-800">
                                            <strong>Nota:</strong> Las técnicas para infantes (menores de 1 año) son
                                            diferentes (golpes en la espalda y compresiones torácicas). Se requiere
                                            formación específica.
                                        </p>
                                    </div>
                                </div>
                            </AccordionSection>
                        </section>

                        {/* Entrenamiento y Certificación */}
                        <motion.section
                            id="training"
                            className="mb-10 bg-white p-8 rounded-xl shadow-md"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                                <FaChalkboardTeacher className="text-red-500"/>
                                Entrenamiento y Certificación
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="leading-relaxed mb-4">
                                    Realizar un curso de BLS acreditado es la mejor manera de aprender y practicar estas
                                    habilidades vitales. Organizaciones como la American Heart Association (AHA), la
                                    Cruz Roja Americana y otros organismos locales ofrecen cursos de certificación.
                                </p>
                                <div
                                    className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-inner mb-6">
                                    <h3 className="text-xl font-semibold text-blue-700 mb-3">Beneficios del
                                        entrenamiento formal</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-2">•</span>
                                            Desarrollo de confianza para actuar en emergencias reales
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-2">•</span>
                                            Práctica supervisada con retroalimentación de instructores
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-2">•</span>
                                            Conocimiento de los últimos protocolos y técnicas
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-500 font-bold mr-2">•</span>
                                            Certificación reconocida para entornos profesionales
                                        </li>
                                    </ul>
                                </div>
                                <p className="leading-relaxed mb-4">
                                    Estos cursos suelen incluir:
                                </p>
                                <ul className="space-y-4 mb-6">
                                    <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <FaChalkboardTeacher className="text-red-500 mr-3 mt-1 flex-shrink-0 h-6 w-6"/>
                                        <div>
                                            <span className="font-medium">Instrucción teórica</span>
                                            <p className="text-sm text-gray-600 mt-1">Principios fundamentales del BLS y
                                                comprensión de la anatomía básica.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <FaUserMd className="text-red-500 mr-3 mt-1 flex-shrink-0 h-6 w-6"/>
                                        <div>
                                            <span className="font-medium">Práctica de habilidades</span>
                                            <p className="text-sm text-gray-600 mt-1">Entrenamiento con maniquíes para
                                                compresiones, ventilaciones y uso del DEA.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <FaTasks className="text-red-500 mr-3 mt-1 flex-shrink-0 h-6 w-6"/>
                                        <div>
                                            <span className="font-medium">Escenarios simulados</span>
                                            <p className="text-sm text-gray-600 mt-1">Práctica en situaciones de
                                                emergencia realistas para desarrollar confianza.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <FaClipboardCheck className="text-red-500 mr-3 mt-1 flex-shrink-0 h-6 w-6"/>
                                        <div>
                                            <span className="font-medium">Evaluación de competencias</span>
                                            <p className="text-sm text-gray-600 mt-1">Verificación de conocimientos y
                                                habilidades para obtener la certificación.</p>
                                        </div>
                                    </li>
                                </ul>
                                <p className="leading-relaxed font-medium">
                                    La certificación en BLS generalmente es válida por dos años, después de los cuales
                                    se requiere un curso de actualización para mantenerse al día con los últimos
                                    protocolos.
                                </p>
                            </div>
                        </motion.section>

                        {/* Recursos Adicionales */}
                        <motion.section
                            id="resources"
                            className="mb-10 bg-white p-8 rounded-xl shadow-md"
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5}}
                        >
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2 border-b pb-2">
                                <FaLink className="text-red-500"/>
                                Recursos Adicionales
                            </h2>
                            <div className="prose prose-lg max-w-none text-gray-700">
                                <p className="leading-relaxed mb-6">
                                    Para más información y para encontrar cursos de BLS cerca de ti, puedes visitar los
                                    siguientes sitios web (ten en cuenta que los enlaces pueden variar según tu región):
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <motion.a
                                        href="https://cpr.heart.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                        whileHover={{scale: 1.02, backgroundColor: "#fee2e2"}}
                                        transition={{duration: 0.2}}
                                    >
                                        <FaExternalLinkAlt className="text-red-500 mr-3 flex-shrink-0 h-5 w-5"/>
                                        <div>
                                            <span
                                                className="font-medium text-red-700">American Heart Association (AHA)</span>
                                            <p className="text-sm text-gray-600 mt-1">Cursos, materiales de formación y
                                                recursos de BLS</p>
                                        </div>
                                    </motion.a>
                                    <motion.a
                                        href="https://www.redcross.org/take-a-class/cpr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                        whileHover={{scale: 1.02, backgroundColor: "#fee2e2"}}
                                        transition={{duration: 0.2}}
                                    >
                                        <FaExternalLinkAlt className="text-red-500 mr-3 flex-shrink-0 h-5 w-5"/>
                                        <div>
                                            <span className="font-medium text-red-700">Cruz Roja Americana - Cursos de RCP</span>
                                            <p className="text-sm text-gray-600 mt-1">Formación en RCP, primeros
                                                auxilios y DEA</p>
                                        </div>
                                    </motion.a>
                                    <motion.a
                                        href="https://www.mayoclinic.org/first-aid"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                        whileHover={{scale: 1.02, backgroundColor: "#fee2e2"}}
                                        transition={{duration: 0.2}}
                                    >
                                        <FaExternalLinkAlt className="text-red-500 mr-3 flex-shrink-0 h-5 w-5"/>
                                        <div>
                                            <span
                                                className="font-medium text-red-700">Mayo Clinic - Primeros Auxilios</span>
                                            <p className="text-sm text-gray-600 mt-1">Guías de primeros auxilios y
                                                soporte vital</p>
                                        </div>
                                    </motion.a>
                                    <motion.a
                                        href="https://cpr.heart.org/en/cpr-courses-and-kits/pediatric-first-aid-cpr-aed"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                                        whileHover={{scale: 1.02, backgroundColor: "#fee2e2"}}
                                        transition={{duration: 0.2}}
                                    >
                                        <FaExternalLinkAlt className="text-red-500 mr-3 flex-shrink-0 h-5 w-5"/>
                                        <div>
                                            <span className="font-medium text-red-700">AHA - RCP Pediátrica y Primeros Auxilios</span>
                                            <p className="text-sm text-gray-600 mt-1">Formación especializada en soporte
                                                vital pediátrico</p>
                                        </div>
                                    </motion.a>
                                </div>
                                <div className="bg-yellow-50 border border-yellow-200 p-5 rounded-lg">
                                    <h3 className="text-lg font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                                        <FaInfoCircle className="text-yellow-600"/>
                                        Nota importante
                                    </h3>
                                    <p className="text-yellow-800">
                                        La información proporcionada en esta guía es solo para fines educativos y no
                                        sustituye la formación profesional. Se recomienda encarecidamente realizar un
                                        curso de BLS acreditado para obtener la certificación y la práctica necesarias.
                                    </p>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </main>

                {/* Botón de volver arriba */}
                <ScrollToTopButton/>
            </div>
        </SEOWrapper>
    );
}

