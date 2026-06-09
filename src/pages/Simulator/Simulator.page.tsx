import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { 
    FaArrowLeft, 
    FaHeartbeat, 
    FaSyringe, 
    FaLungs, 
    FaInfoCircle, 
    FaVoteYea, 
    FaRegLightbulb 
} from "react-icons/fa";
import { GiLungs, GiHeartOrgan } from "react-icons/gi";
import { MdBloodtype, MdClose } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import SEOWrapper from "../../components/SEOWrapper/SEOWrapper.component.tsx";
import { AllRoutes } from "../../components/Router/Router.constants.ts";
import { toast } from "sonner";
import Confetti from "react-confetti";

interface SimulatorOption {
    id: string;
    title: string;
    description: string;
    detailedDescription: string;
    icon: React.ReactNode;
    category: "Equipamiento" | "Fisiología" | "Anatomía" | "Farmacología";
    difficulty: "Principiante" | "Intermedio" | "Avanzado";
    status: "en desarrollo" | "próximamente";
    features: string[];
    baseVotes: number;
    colorTheme: {
        bgLight: string;
        bgHover: string;
        border: string;
        text: string;
        iconBg: string;
        badgeBg: string;
        badgeText: string;
        gradient: string;
        shadowGlow: string;
    };
}

export default function Simulator() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    const [selectedSimulator, setSelectedSimulator] = useState<SimulatorOption | null>(null);
    const [votes, setVotes] = useState<Record<string, number>>({});
    const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({});
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    // Handle window resize for Confetti
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Load votes from LocalStorage on mount
    useEffect(() => {
        const storedVotes = localStorage.getItem("simulator_votes");
        const storedHasVoted = localStorage.getItem("simulator_has_voted");
        if (storedVotes) {
            try {
                setVotes(JSON.parse(storedVotes));
            } catch (e) {
                console.error("Error loading votes", e);
            }
        }
        if (storedHasVoted) {
            try {
                setHasVoted(JSON.parse(storedHasVoted));
            } catch (e) {
                console.error("Error loading voting history", e);
            }
        }
    }, []);

    const handleVote = (id: string) => {
        if (hasVoted[id]) {
            toast.info("Ya has votado por este simulador", {
                description: "¡Agradecemos tu entusiasmo por verlo listo!"
            });
            return;
        }

        const newVotes = { ...votes, [id]: (votes[id] || 0) + 1 };
        const newHasVoted = { ...hasVoted, [id]: true };

        setVotes(newVotes);
        setHasVoted(newHasVoted);
        localStorage.setItem("simulator_votes", JSON.stringify(newVotes));
        localStorage.setItem("simulator_has_voted", JSON.stringify(newHasVoted));

        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3500);

        toast.success("¡Voto registrado con éxito!", {
            description: "Estamos acelerando el desarrollo de los módulos más votados."
        });
    };

    const simulators: SimulatorOption[] = [
        {
            id: "cardiac-monitor",
            title: "Monitor de Ritmos y ECG",
            description: "Simulación de monitor de signos vitales interactivo. Identifica arritmias y practica desfibrilación y cardioversión.",
            detailedDescription: "Una recreación virtual completa de una pantalla de monitor-desfibrilador clínico de transporte. Te permite interactuar con controles de carga de energía, sincronización para cardioversión eléctrica y entrega de descargas en situaciones críticas de reanimación.",
            icon: <FaHeartbeat className="w-12 h-12" />,
            category: "Equipamiento",
            difficulty: "Intermedio",
            status: "en desarrollo",
            features: [
                "Simulación dinámica de ritmos ECG en derivaciones de 3 y 12 puntos",
                "Generador interactivo de más de 20 arritmias comunes (paro, FV, TV, bloqueos, etc.)",
                "Simulador de desfibrilador manual y cardioversión sincrónica",
                "Modificación de constantes vitales en vivo: FC, FR, SpO2, Temperatura y Presión Arterial",
                "Marcapasos transcutáneo interactivo con ajuste de frecuencia (ppm) y corriente (mA)"
            ],
            baseVotes: 142,
            colorTheme: {
                bgLight: "bg-rose-50",
                bgHover: "hover:bg-rose-100",
                border: "border-rose-100",
                text: "text-rose-600",
                iconBg: "bg-rose-100 text-rose-500",
                badgeBg: "bg-rose-500/10 text-rose-600 border border-rose-200",
                badgeText: "text-rose-700",
                gradient: "from-rose-500 to-red-600",
                shadowGlow: "shadow-rose-100 hover:shadow-rose-200/50"
            }
        },
        {
            id: "infusion-pump",
            title: "Bombas de Infusión Continua",
            description: "Calculadora y configuradora de bombas de infusión volumétrica. Practica la programación de dosis y resolución de alarmas.",
            detailedDescription: "Replica el comportamiento exacto de una bomba de infusión volumétrica de uso clínico. Los estudiantes deben realizar cálculos de dosis, configurar límites de volumen total a infundir (VTBI), velocidades de flujo y solucionar alarmas operativas.",
            icon: <FaSyringe className="w-12 h-12" />,
            category: "Farmacología",
            difficulty: "Avanzado",
            status: "próximamente",
            features: [
                "Programación de flujo en mL/h y dosificación por peso (mcg/kg/min)",
                "Vademécum prehospitalario incorporado (Adrenalina, Dopamina, Fentanilo, Amiodarona, etc.)",
                "Gestión de alarmas comunes: Aire en la línea, Oclusión proximal, Batería baja, Fin de infusión",
                "Escenarios interactivos para bolos de emergencia y purga del equipo"
            ],
            baseVotes: 94,
            colorTheme: {
                bgLight: "bg-cyan-50",
                bgHover: "hover:bg-cyan-100",
                border: "border-cyan-100",
                text: "text-cyan-600",
                iconBg: "bg-cyan-100 text-cyan-500",
                badgeBg: "bg-cyan-500/10 text-cyan-600 border border-cyan-200",
                badgeText: "text-cyan-700",
                gradient: "from-cyan-500 to-blue-600",
                shadowGlow: "shadow-cyan-100 hover:shadow-cyan-200/50"
            }
        },
        {
            id: "mechanical-ventilator",
            title: "Ventilador Mecánico de Emergencia",
            description: "Ajuste de parámetros ventilatorios avanzados. Configura volúmenes, presiones, frecuencias y resuelve asincronías.",
            detailedDescription: "Un simulador avanzado de ventilación de transporte prehospitalario. Diseñado para que los estudiantes de medicina de urgencias dominen la configuración de volumen corriente, presiones inspiratorias, PEEP y el manejo de fallas ventilatorias comunes.",
            icon: <GiLungs className="w-12 h-12" />,
            category: "Equipamiento",
            difficulty: "Avanzado",
            status: "próximamente",
            features: [
                "Ajustes mecánicos: Volumen Corriente (Vt), Frecuencia (FR), PEEP, FiO2 y Sensibilidad de disparo",
                "Monitoreo visual mediante curvas dinámicas de Presión/Tiempo y Flujo/Tiempo",
                "Simulador de resistencia del circuito y distensibilidad pulmonar (compliance)",
                "Alarmas de alta presión por neumotórax, tapón de moco o desconexión del circuito"
            ],
            baseVotes: 118,
            colorTheme: {
                bgLight: "bg-sky-50",
                bgHover: "hover:bg-sky-100",
                border: "border-sky-100",
                text: "text-sky-600",
                iconBg: "bg-sky-100 text-sky-500",
                badgeBg: "bg-sky-500/10 text-sky-600 border border-sky-200",
                badgeText: "text-sky-700",
                gradient: "from-sky-500 to-indigo-600",
                shadowGlow: "shadow-sky-100 hover:shadow-sky-200/50"
            }
        },
        {
            id: "heart-physiology",
            title: "Fisiología y Conducción Cardíaca",
            description: "Visualización en tiempo real de la conducción eléctrica cardíaca y su acoplamiento mecánico mecánico de bombeo.",
            detailedDescription: "Un modelo interactivo anatómico que muestra de forma dinámica la progresión del potencial de acción desde el nodo sinusal, pasando por el nodo AV, haz de His y las fibras de Purkinje, ilustrando la contracción de aurículas y ventrículos simultáneamente.",
            icon: <GiHeartOrgan className="w-12 h-12" />,
            category: "Anatomía",
            difficulty: "Principiante",
            status: "próximamente",
            features: [
                "Esquema de conducción eléctrica cardíaca 2D animado e interactivo",
                "Controles de velocidad para pausar y analizar cada segmento del ciclo cardíaco",
                "Efectos de la estimulación simpática y parasimpática en el ritmo y contractilidad",
                "Correlación visual paso a paso entre la conducción eléctrica cardíaca y el registro en el papel milimetrado del ECG"
            ],
            baseVotes: 86,
            colorTheme: {
                bgLight: "bg-emerald-50",
                bgHover: "hover:bg-emerald-100",
                border: "border-emerald-100",
                text: "text-emerald-600",
                iconBg: "bg-emerald-100 text-emerald-500",
                badgeBg: "bg-emerald-500/10 text-emerald-600 border border-emerald-200",
                badgeText: "text-emerald-700",
                gradient: "from-emerald-500 to-teal-600",
                shadowGlow: "shadow-emerald-100 hover:shadow-emerald-200/50"
            }
        },
        {
            id: "circulatory-system",
            title: "Sistema Circulatorio y Hemodinámica",
            description: "Modela la resistencia vascular periférica, el gasto cardíaco y la presión arterial ante estados de shock.",
            detailedDescription: "Simulación de las leyes físicas que gobiernan el flujo sanguíneo y la perfusión del organismo. Te permite experimentar cómo reacciona el cuerpo de manera autónoma ante hemorragias, shocks distributivos, o fallas en el bombeo del miocardio.",
            icon: <MdBloodtype className="w-12 h-12" />,
            category: "Fisiología",
            difficulty: "Intermedio",
            status: "próximamente",
            features: [
                "Control de precarga (líquidos), contractilidad y poscarga (resistencia vascular)",
                "Simulador de shock hipovolémico, cardiogénico, anafiláctico y neurogénico",
                "Algoritmos de compensación refleja: taquicardia simpática, vasoconstricción periférica",
                "Monitoreo interactivo de la Presión Arterial Media (PAM) y respuesta a vasopresores o volumen"
            ],
            baseVotes: 73,
            colorTheme: {
                bgLight: "bg-amber-50",
                bgHover: "hover:bg-amber-100",
                border: "border-amber-100",
                text: "text-amber-600",
                iconBg: "bg-amber-100 text-amber-500",
                badgeBg: "bg-amber-500/10 text-amber-600 border border-amber-200",
                badgeText: "text-amber-700",
                gradient: "from-amber-500 to-orange-600",
                shadowGlow: "shadow-amber-100 hover:shadow-amber-200/50"
            }
        },
        {
            id: "respiratory-system",
            title: "Mecánica Respiratoria y Gasometría",
            description: "Estudia el intercambio gaseoso alveolar, las presiones pulmonares y la interpretación de gases arteriales.",
            detailedDescription: "Simulación de la mecánica ventilatoria y del transporte de oxígeno/dióxido de carbono a nivel alveolar. Permite comprender el impacto del espacio muerto anatómico y las variaciones de la relación ventilación/perfusión (V/Q).",
            icon: <FaLungs className="w-12 h-12" />,
            category: "Fisiología",
            difficulty: "Intermedio",
            status: "próximamente",
            features: [
                "Visualización interactiva del gradiente de presión alveolar de O2 y CO2",
                "Modelado de patologías: Neumotórax (cambios en presión intrapleural), EPOC y crisis asmática severa",
                "Generador dinámico de gasometría arterial con compensación renal/respiratoria",
                "Simulador de oxigenoterapia con cánulas, mascarillas con reservorio y BVM"
            ],
            baseVotes: 81,
            colorTheme: {
                bgLight: "bg-indigo-50",
                bgHover: "hover:bg-indigo-100",
                border: "border-indigo-100",
                text: "text-indigo-600",
                iconBg: "bg-indigo-100 text-indigo-500",
                badgeBg: "bg-indigo-500/10 text-indigo-600 border border-indigo-200",
                badgeText: "text-indigo-700",
                gradient: "from-indigo-500 to-purple-600",
                shadowGlow: "shadow-indigo-100 hover:shadow-indigo-200/50"
            }
        }
    ];

    const categories = ["Todos", "Equipamiento", "Anatomía", "Fisiología", "Farmacología"];

    // Filter simulators
    const filteredSimulators = simulators.filter((sim) => {
        const matchesSearch = sim.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              sim.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "Todos" || sim.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const getVotesCount = (id: string, base: number) => {
        return base + (votes[id] || 0);
    };

    return (
        <SEOWrapper
            title="Simuladores Clínicos y Médicos - EMT EXAM"
            description="Entrenamiento práctico interactivo para paramédicos y técnicos en urgencias médicas. Simuladores de ECG, ventiladores, bombas de infusión y más."
            keywords="simulador medico, monitor cardiaco, ventilador mecanico, bomba de infusion, paramedicos, emt, fisiologia, electrocardiograma"
            section="simulator"
            difficulty="Intermediate"
            timeRequired="PT20M"
            educationalLevel="Technical"
            includeEducationalSchema={true}
        >
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-100 pb-16">
                {showConfetti && <Confetti width={windowSize.width} height={windowSize.height} style={{ zIndex: 100 }} />}

                {/* Header/Hero Section */}
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-800 text-white py-12 px-4 md:px-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-8 left-12 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-6 right-16 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl"></div>
                    </div>

                    <div className="container mx-auto relative z-10">
                        <div className="flex justify-center mb-5">
                            <div className="relative p-4 bg-white/10 rounded-3xl backdrop-blur-md border border-white/20">
                                <RiComputerLine className="text-yellow-400 w-16 h-16 drop-shadow-md" />
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                            Centro de Simuladores Clínicos
                        </h1>
                        <p className="text-center text-blue-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Potencia tus destrezas prehospitalarias. Visualiza la anatomía y entrena con el equipamiento clínico digital que integrarás próximamente en tu formación.
                        </p>
                        <div className="flex justify-center">
                            <NavLink 
                                to={AllRoutes.MAIN}
                                className="flex items-center gap-3 bg-white text-indigo-700 shadow-lg hover:shadow-xl rounded-full px-6 py-3 hover:bg-yellow-50 transition-all duration-300 transform hover:scale-105 font-bold"
                            >
                                <FaArrowLeft className="text-base" />
                                <span>Regresar al menú principal</span>
                            </NavLink>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <section className="container mx-auto px-4 md:px-8 mt-10">
                    
                    {/* Search and Category Filters */}
                    <div className="bg-white rounded-3xl shadow-xl p-6 mb-10 border border-slate-100 max-w-5xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-5 items-center justify-between">
                            {/* Search bar */}
                            <div className="w-full md:w-5/12 relative">
                                <input
                                    type="text"
                                    placeholder="Buscar simulador..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-slate-700 bg-slate-50"
                                />
                            </div>

                            {/* Category buttons */}
                            <div className="w-full md:w-7/12 flex flex-wrap gap-2 md:justify-end">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                                            selectedCategory === cat
                                                ? "bg-indigo-600 text-white shadow-lg scale-105"
                                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {filteredSimulators.length > 0 ? (
                            filteredSimulators.map((sim, index) => {
                                const voted = hasVoted[sim.id];
                                return (
                                    <div
                                        key={sim.id}
                                        style={{ animationDelay: `${index * 0.08}s` }}
                                        className={`bg-white rounded-3xl border ${sim.colorTheme.border} ${sim.colorTheme.shadowGlow} shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-2`}
                                    >
                                        {/* Card Top Banner / Badge Row */}
                                        <div className="p-6 pb-2 flex justify-between items-center">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${sim.colorTheme.badgeBg}`}>
                                                {sim.category}
                                            </span>
                                            <div className="flex items-center gap-1.5">
                                                {sim.status === "en desarrollo" ? (
                                                    <span className="flex h-2 w-2 relative">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                    </span>
                                                ) : null}
                                                <span className={`text-xs font-bold uppercase ${sim.status === "en desarrollo" ? "text-green-600" : "text-amber-500"}`}>
                                                    {sim.status}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Icon Container & Title */}
                                        <div className="px-6 py-4 flex flex-col items-center text-center">
                                            <div className={`p-4 rounded-2xl ${sim.colorTheme.iconBg} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                                                {sim.icon}
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">
                                                {sim.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed min-h-[60px] line-clamp-3">
                                                {sim.description}
                                            </p>
                                        </div>

                                        {/* Bottom Details & Button Grid */}
                                        <div className="mt-auto p-6 pt-2 border-t border-slate-50 bg-slate-50/50 flex flex-col gap-4">
                                            <div className="flex items-center justify-between text-xs font-semibold text-slate-400">
                                                <span>Dificultad: <strong className="text-slate-600 font-bold">{sim.difficulty}</strong></span>
                                                <span className="flex items-center gap-1">
                                                    <FaVoteYea className="text-indigo-500 text-sm" /> 
                                                    <strong className="text-slate-600 font-bold">{getVotesCount(sim.id, sim.baseVotes)}</strong> votos
                                                </span>
                                            </div>

                                            <div className="flex gap-2">
                                                {sim.id === "cardiac-monitor" ? (
                                                    <NavLink
                                                        to={AllRoutes.ECG_MONITOR_SIMULATOR}
                                                        className="flex-1 py-2.5 bg-gradient-to-r from-rose-500 to-red-600 hover:opacity-90 text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 shadow-md"
                                                    >
                                                        <FaHeartbeat className="text-sm" />
                                                        <span>Abrir Simulador</span>
                                                    </NavLink>
                                                ) : (
                                                    <button
                                                        onClick={() => setSelectedSimulator(sim)}
                                                        className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5"
                                                    >
                                                        <FaInfoCircle className="text-sm" />
                                                        <span>Detalles</span>
                                                    </button>
                                                )}
                                                <button
                                                    onClick={() => handleVote(sim.id)}
                                                    className={`flex-1 py-2.5 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-1.5 ${
                                                        voted 
                                                            ? "bg-green-500 text-white shadow-inner cursor-default" 
                                                            : `bg-gradient-to-r ${sim.colorTheme.gradient} hover:opacity-90 text-white shadow-md shadow-indigo-100`
                                                    }`}
                                                >
                                                    <FaVoteYea className="text-sm" />
                                                    <span>{voted ? "Votado" : "Votar"}</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-16 bg-white rounded-3xl shadow-md border border-slate-100 p-8 max-w-xl mx-auto">
                                <p className="text-slate-500 text-xl font-bold mb-2">No se encontraron simuladores</p>
                                <p className="text-slate-400 mb-6">Prueba a buscar con otra palabra o selecciona una categoría distinta.</p>
                                <button
                                    onClick={() => {
                                        setSearchTerm("");
                                        setSelectedCategory("Todos");
                                    }}
                                    className="px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 font-bold transition-all shadow-md"
                                >
                                    Mostrar todos
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Dynamic Feature Modal */}
                {selectedSimulator && (
                    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-100 flex flex-col relative animate-scaleIn">
                            
                            {/* Modal Close Button */}
                            <button
                                onClick={() => setSelectedSimulator(null)}
                                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
                            >
                                <MdClose className="w-6 h-6" />
                            </button>

                            {/* Modal Header */}
                            <div className={`p-8 pb-4 bg-gradient-to-r ${selectedSimulator.colorTheme.gradient} text-white rounded-t-3xl`}>
                                <div className="flex items-center gap-4 mb-3">
                                    <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                                        {selectedSimulator.icon}
                                    </div>
                                    <div>
                                        <span className="text-xs uppercase font-extrabold tracking-wider bg-white/20 text-white border border-white/10 px-2.5 py-0.5 rounded-full">
                                            {selectedSimulator.category}
                                        </span>
                                        <h2 className="text-2xl font-extrabold mt-1">{selectedSimulator.title}</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8 space-y-6 flex-1 overflow-y-auto">
                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Descripción del simulador</h4>
                                    <p className="text-slate-600 leading-relaxed text-sm">
                                        {selectedSimulator.detailedDescription}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Características Planificadas</h4>
                                    <ul className="space-y-2.5">
                                        {selectedSimulator.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm leading-snug">
                                                <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-indigo-50 text-indigo-600 text-[10px] font-bold`}>
                                                    {i + 1}
                                                </span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-indigo-50 rounded-2xl p-4 flex gap-3.5 items-start">
                                    <FaRegLightbulb className="text-indigo-600 text-lg shrink-0 mt-0.5" />
                                    <div>
                                        <h5 className="font-bold text-indigo-900 text-sm mb-0.5">Siguiente paso: Votaciones</h5>
                                        <p className="text-indigo-700/80 text-xs leading-relaxed">
                                            Tu voto nos permite saber qué simuladores te interesan más para acelerar su lanzamiento y priorizar el desarrollo de las herramientas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-3xl flex gap-3 items-center">
                                <div className="text-slate-500 text-xs font-semibold flex items-center gap-1.5">
                                    <FaVoteYea className="text-indigo-500 text-sm" />
                                    <span>{getVotesCount(selectedSimulator.id, selectedSimulator.baseVotes)} personas interesadas</span>
                                </div>
                                <button
                                    onClick={() => {
                                        handleVote(selectedSimulator.id);
                                    }}
                                    className={`ml-auto px-5 py-2.5 font-bold rounded-xl text-sm transition-all flex items-center gap-1.5 ${
                                        hasVoted[selectedSimulator.id]
                                            ? "bg-green-500 text-white cursor-default"
                                            : `bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-100`
                                    }`}
                                >
                                    <FaVoteYea className="text-base" />
                                    <span>{hasVoted[selectedSimulator.id] ? "Votado" : "Votar por este"}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Educational Info Section */}
                <div className="container mx-auto px-4 md:px-8 mt-12">
                    <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg border border-blue-100/50">
                        <div className="flex justify-center mb-4">
                            <div className="bg-indigo-600 rounded-full p-3 shadow-md">
                                <RiComputerLine className="text-white w-7 h-7" />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold text-indigo-900 mb-3">La Importancia de la Simulación en la Formación</h3>
                        <p className="text-slate-600 text-base leading-relaxed mb-6">
                            La educación prehospitalaria basada en simulación clínica digital ofrece un entorno de aprendizaje seguro y controlado. Permite ensayar protocolos críticos repetidamente, mejorando el reconocimiento rápido de patologías y reduciendo la tasa de errores de dosificación o manipulación en la práctica real.
                        </p>
                        <div className="bg-white rounded-2xl p-5 border border-indigo-100 shadow-sm inline-flex items-center gap-3 text-slate-600 text-left max-w-2xl mx-auto">
                            <span className="text-2xl">💡</span>
                            <p className="text-sm">
                                <strong>Vota por tus simuladores prioritarios:</strong> Monitorizaremos los votos de los alumnos de Rescate 1 para enfocar nuestros esfuerzos de programación en las herramientas que más necesitas.
                              </p>
                        </div>
                    </div>
                </div>
            </div>
        </SEOWrapper>
    );
}