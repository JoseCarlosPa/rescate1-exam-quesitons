import {useEffect, useState} from "react";
import {caseStudies, CaseStudy} from "./StudyCase.constants.ts";
import {AllRoutes} from "../Router/Router.constants.ts";
import {IoClose, IoReturnDownBack} from "react-icons/io5";
import {NavLink} from "react-router";
import {jsPDF} from "jspdf";
import logo from '../../assets/logo.png';
import {
    FaFilePdf, FaSearch, FaHeartbeat, FaThermometerHalf, FaLungs,
    FaInfoCircle, FaQuestionCircle, FaBook, FaUserMd, FaLock,
    FaUnlock, FaStethoscope, FaPen
} from "react-icons/fa";
import {IoMdRefresh} from "react-icons/io";

export default function StudyCase() {
    const [currentCase, setCurrentCase] = useState<CaseStudy | null>(null);
    const [logoBase64, setLogoBase64] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'preguntas' | 'manejo' | 'referencias'>('preguntas');
    const [showCaseSelector, setShowCaseSelector] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
    const [showResolution, setShowResolution] = useState<boolean>(false);

    const CATEGORIES = ['Todos', 'Trauma', 'Pediatría', 'Obstetricia', 'Neurología', 'Cardiología', 'Toxicología', 'Ambiental', 'Geriatría', 'Médica'];

    const getVitalIcon = (key: string) => {
        const k = key.toLowerCase();
        if (k.includes('fc') || k.includes('frecuencia cardiaca') || k.includes('pulso')) return <FaHeartbeat className="text-red-500" />;
        if (k.includes('fr') || k.includes('frecuencia respiratoria')) return <FaLungs className="text-blue-400" />;
        if (k.includes('temp') || k.includes('tc')) return <FaThermometerHalf className="text-orange-500" />;
        if (k.includes('ta') || k.includes('presion') || k.includes('t/a')) return <FaStethoscope className="text-purple-500" />;
        if (k.includes('spo2') || k.includes('sato2')) return <FaLungs className="text-cyan-500" />;
        return <FaInfoCircle className="text-gray-400" />;
    };

    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    // Filtrar casos de estudio basados en el término de búsqueda y categoría
    const filteredCases = caseStudies.filter((caseStudy) => {
        const searchNormalized = normalizeText(searchTerm);
        const matchesSearch = normalizeText(caseStudy.title).includes(searchNormalized) ||
            normalizeText(caseStudy.description).includes(searchNormalized);
            
        let matchesCategory = true;
        if (selectedCategory !== 'Todos') {
            const cat = normalizeText(selectedCategory);
            const textToSearch = normalizeText(`${caseStudy.id} ${caseStudy.title} ${caseStudy.description}`);
            
            if (cat === 'cardiologia') {
                matchesCategory = textToSearch.includes('iam') || textToSearch.includes('icc') || textToSearch.includes('cardiac') || textToSearch.includes('corazon');
            } else if (cat === 'medica') {
                matchesCategory = textToSearch.includes('medica') || textToSearch.includes('sepsis') || textToSearch.includes('infecciosas') || textToSearch.includes('gastro');
            } else {
                matchesCategory = textToSearch.includes(cat);
            }
        }

        return matchesSearch && matchesCategory;
    });

    const loadRandomCase = () => {
        const random = Math.floor(Math.random() * caseStudies.length);
        setCurrentCase(caseStudies[random]);
        setShowCaseSelector(false);
        setUserAnswers({});
        setShowResolution(false);
        setActiveTab('preguntas');
    };

    const selectSpecificCase = (caseStudy: CaseStudy) => {
        setCurrentCase(caseStudy);
        setShowCaseSelector(false);
        setSearchTerm('');
        setSelectedCategory('Todos');
        setUserAnswers({});
        setShowResolution(false);
        setActiveTab('preguntas');
    };

    const convertLogoToBase64 = async () => {
        const response = await fetch(logo);
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
            setLogoBase64(reader.result as string);
        };

        reader.readAsDataURL(blob);
    };

    const downloadPDF = () => {
        if (!currentCase || !logoBase64) return;

        const doc = new jsPDF();
        const lineHeight = 7;
        let yPosition = 20;

        // Agregar imagen (base64)
        doc.addImage(logoBase64, "PNG", 10, 10, 20, 20);

        // Encabezado
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.text("Reporte de Caso Clínico", 105, yPosition + 10, {align: "center"});
        yPosition += 20;

        doc.setFontSize(16);
        doc.text(`Título: ${currentCase.title}`, 10, yPosition);
        yPosition += 15;

        // Descripción con ajuste de línea
        doc.setFontSize(12);
        doc.setFont("helvetica", "bold");
        doc.text("Descripción:", 10, yPosition);
        yPosition += lineHeight;

        doc.setFont("helvetica", "normal");
        const descriptionLines = doc.splitTextToSize(currentCase.description, 190);
        doc.text(descriptionLines, 10, yPosition);
        yPosition += descriptionLines.length * lineHeight + 5;

        // Evaluación inicial
        doc.setFont("helvetica", "bold");
        doc.text("Evaluación inicial:", 10, yPosition);
        yPosition += lineHeight;

        doc.setFont("helvetica", "normal");
        const assessmentLines = doc.splitTextToSize(currentCase.initialAssessment, 190);
        doc.text(assessmentLines, 10, yPosition);
        yPosition += assessmentLines.length * lineHeight + 5;

        // Signos vitales
        doc.setFont("helvetica", "bold");
        doc.text("Signos vitales:", 10, yPosition);
        yPosition += lineHeight;

        doc.setFont("helvetica", "normal");
        Object.entries(currentCase.vitalSigns).forEach(([key, val]) => {
            doc.text(`${key}: ${val}`, 10, yPosition);
            yPosition += lineHeight;
        });
        yPosition += 5;

        // Hallazgos clínicos
        doc.setFont("helvetica", "bold");
        doc.text("Hallazgos clínicos:", 10, yPosition);
        yPosition += lineHeight;

        doc.setFont("helvetica", "normal");
        currentCase.findings.forEach((finding) => {
            doc.text(`• ${finding}`, 10, yPosition);
            yPosition += lineHeight;
        });
        yPosition += 5;

        // Preguntas
        doc.setFont("helvetica", "bold");
        doc.text("Preguntas:", 10, yPosition);
        yPosition += lineHeight;

        doc.setFont("helvetica", "normal");
        currentCase.questions.forEach((q, i) => {
            const questionLines = doc.splitTextToSize(`${i + 1}. ${q.question}`, 190);
            doc.text(questionLines, 10, yPosition);
            yPosition += questionLines.length * lineHeight;
        });
        yPosition += 5;

        // Referencias
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }

        doc.setFont("helvetica", "bold");
        doc.text("Referencias:", 10, yPosition);
        yPosition += lineHeight;

        doc.setFont("helvetica", "normal");
        doc.setFontSize(10);
        currentCase.references.forEach((ref) => {
            const refLines = doc.splitTextToSize(`• ${ref}`, 190);
            doc.text(refLines, 10, yPosition);
            yPosition += refLines.length * lineHeight;
        });

        // Pie de página
        doc.setFontSize(10);
        doc.text("Generado automáticamente para Alumnos R1", 105, 290, {align: "center"});

        doc.save(`${currentCase.title}.pdf`);
    };

    useEffect(() => {
        loadRandomCase();
        convertLogoToBase64();
    }, []);

    if (!currentCase) return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div className="animate-pulse text-center p-8 rounded-lg bg-white shadow-md">
                <p className="text-lg text-gray-500">Cargando caso de estudio...</p>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl p-6 my-8">
            <div className="md:flex md:flex-row md:justify-between items-center mb-6 flex-col">
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 bg-white shadow-md rounded-lg p-2 hover:bg-orange-100 transition duration-300 ease-in-out">
                    <IoReturnDownBack className="w-5 h-5 my-auto text-blue-700"/>
                    <p className="text-blue-700 font-medium">Regresar</p>
                </NavLink>

                <div className="flex gap-3">
                    <button
                        onClick={() => setShowCaseSelector(true)}
                        className="flex md:flex-row flex-col cursor-pointer items-center gap-2 text-sm bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition shadow-md"
                    >
                        <FaSearch className="w-4 h-4"/>
                        <span>Buscar casos</span>
                    </button>
                    <button
                        onClick={loadRandomCase}
                        className="flex md:flex-row flex-col cursor-pointer items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                    >
                        <IoMdRefresh className="w-5 h-5"/>
                        <span>Nuevo caso</span>
                    </button>
                    <button
                        onClick={downloadPDF}
                        className="flex md:flex-row flex-col cursor-pointer items-center gap-2 text-sm bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md"
                    >
                        <FaFilePdf className="w-5 h-5"/>
                        <span>Descargar PDF</span>
                    </button>
                </div>
            </div>

            {/* Modal de selección de casos */}
            {showCaseSelector && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center shrink-0">
                            <h2 className="text-xl font-bold text-gray-800">Seleccionar Caso de Estudio</h2>
                            <button
                                onClick={() => {
                                    setShowCaseSelector(false);
                                    setSearchTerm('');
                                    setSelectedCategory('Todos');
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <IoClose className="w-6 h-6"/>
                            </button>
                        </div>

                        <div className="p-4 flex flex-col flex-1 min-h-0 overflow-hidden">
                            <div className="shrink-0">
                                <div className="relative mb-4">
                                    <input
                                        type="text"
                                        placeholder="Buscar por título o descripción..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"/>
                                </div>
                                
                                {/* Filtros de Categoría */}
                                <div className="flex gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                                    {CATEGORIES.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                                                selectedCategory === cat 
                                                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-y-auto flex-1 pr-2">
                                {filteredCases.length === 0 ? (
                                    <div className="text-center py-8 text-gray-500">
                                        No se encontraron casos que coincidan con tu búsqueda
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-1 gap-3">
                                        {filteredCases.map((caseStudy) => (
                                            <button
                                                key={caseStudy.id}
                                                onClick={() => selectSpecificCase(caseStudy)}
                                                className="text-left p-4 border border-gray-200 rounded-lg hover:bg-blue-50 transition duration-200 flex flex-col"
                                            >
                                                <h3 className="font-semibold text-blue-700">{caseStudy.title}</h3>
                                                <p className="text-sm text-gray-600 line-clamp-2 mt-1">
                                                    {caseStudy.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {caseStudy.findings.slice(0, 2).map((finding, idx) => (
                                                        <span key={idx}
                                                              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                            {finding.split(' ').slice(0, 3).join(' ')}...
                                                        </span>
                                                    ))}
                                                    {caseStudy.findings.length > 2 && (
                                                        <span
                                                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                            +{caseStudy.findings.length - 2} más
                                                        </span>
                                                    )}
                                                </div>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Panel Izquierdo: Información del Caso */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                        <h2 className="text-2xl font-bold text-blue-800 mb-3">{currentCase.title}</h2>
                        <p className="text-gray-700 leading-relaxed text-lg">{currentCase.description}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-blue-700 mb-3 text-lg flex items-center gap-2">
                            <FaStethoscope /> Evaluación inicial
                        </h3>
                        <p className="text-gray-800 leading-relaxed">{currentCase.initialAssessment}</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-blue-700 mb-4 text-lg flex items-center gap-2">
                            <FaHeartbeat /> Signos vitales
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {Object.entries(currentCase.vitalSigns).map(([key, val]) => (
                                <div key={key} className="flex flex-col p-4 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition">
                                    <div className="flex items-center gap-2 mb-2">
                                        {getVitalIcon(key)}
                                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{key}</span>
                                    </div>
                                    <span className="text-lg font-bold text-gray-900">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-semibold text-blue-700 mb-4 text-lg flex items-center gap-2">
                            <FaInfoCircle /> Hallazgos clínicos
                        </h3>
                        <ul className="space-y-3">
                            {currentCase.findings.map((f, i) => (
                                <li key={i} className="flex items-start bg-blue-50/30 p-3 rounded-lg border border-blue-50">
                                    <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                                    <span className="text-gray-700">{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Panel Derecho: Navegación Interactiva */}
                <div className="w-full lg:w-1/2 flex flex-col">
                    <div className="border-b border-gray-200 mb-6 bg-white sticky top-0 z-10">
                        <nav className="flex space-x-4 md:space-x-8">
                            <button
                                onClick={() => setActiveTab('preguntas')}
                                className={`py-3 px-2 flex items-center gap-2 border-b-2 font-medium text-sm md:text-base transition-colors ${
                                    activeTab === 'preguntas'
                                        ? 'border-blue-500 text-blue-700'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <FaQuestionCircle /> Preguntas
                            </button>
                            <button
                                onClick={() => setActiveTab('manejo')}
                                className={`py-3 px-2 flex items-center gap-2 border-b-2 font-medium text-sm md:text-base transition-colors ${
                                    activeTab === 'manejo'
                                        ? 'border-blue-500 text-blue-700'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <FaUserMd /> Resolución
                            </button>
                            <button
                                onClick={() => setActiveTab('referencias')}
                                className={`py-3 px-2 flex items-center gap-2 border-b-2 font-medium text-sm md:text-base transition-colors ${
                                    activeTab === 'referencias'
                                        ? 'border-blue-500 text-blue-700'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }`}
                            >
                                <FaBook /> Referencias
                            </button>
                        </nav>
                    </div>

                    <div className="flex-grow">
                        {activeTab === 'preguntas' && (
                            <div className="space-y-6">
                                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-4 items-center">
                                    <div className="bg-blue-500 p-3 rounded-full text-white shrink-0">
                                        <FaPen />
                                    </div>
                                    <p className="text-blue-800 text-sm">
                                        Analiza el caso e ingresa tus respuestas. Cuando termines, ve a la pestaña de "Resolución" para compararlas.
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    {currentCase.questions.map((q, i) => (
                                        <div key={i} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-200 focus-within:border-blue-400">
                                            <div className="flex mb-3">
                                                <span className="font-bold text-blue-600 mr-2 text-lg">{i + 1}.</span>
                                                <span className="font-medium text-gray-800 text-lg">{q.question}</span>
                                            </div>
                                            <textarea
                                                rows={3}
                                                placeholder="Escribe tu razonamiento aquí..."
                                                value={userAnswers[i] || ''}
                                                onChange={(e) => setUserAnswers({...userAnswers, [i]: e.target.value})}
                                                className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-0 focus:outline-none text-gray-700 resize-none placeholder-gray-400"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === 'manejo' && (
                            <div className="space-y-6">
                                {!showResolution ? (
                                    <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 text-center px-4">
                                        <FaLock className="w-16 h-16 text-gray-300 mb-4" />
                                        <h3 className="text-2xl font-bold text-gray-700 mb-2">Resolución Oculta</h3>
                                        <p className="text-gray-500 mb-8 max-w-sm">
                                            Intenta responder las preguntas y analizar el caso por tu cuenta antes de ver el manejo correcto.
                                        </p>
                                        <button
                                            onClick={() => setShowResolution(true)}
                                            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            <FaUnlock /> Revelar Resolución
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6 animate-fadeIn">
                                        {currentCase.correctManage && (
                                            <div className="bg-green-50 p-6 rounded-xl border border-green-200 shadow-sm">
                                                <h3 className="font-semibold text-green-800 mb-4 text-xl flex items-center gap-2">
                                                    <FaUserMd /> Manejo Correcto
                                                </h3>
                                                <div className="text-gray-800 whitespace-pre-line leading-relaxed text-lg">{currentCase.correctManage}</div>
                                            </div>
                                        )}

                                        {currentCase.explanation && (
                                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                                <h3 className="font-semibold text-blue-700 mb-4 text-xl flex items-center gap-2">
                                                    <FaInfoCircle /> Explicación del caso
                                                </h3>
                                                <p className="text-gray-700 leading-relaxed text-lg">{currentCase.explanation}</p>
                                            </div>
                                        )}
                                        
                                        {!currentCase.correctManage && !currentCase.explanation && (
                                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                                <p className="text-gray-500 italic text-center">No hay información de manejo disponible para este caso.</p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {activeTab === 'referencias' && (
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                                <h3 className="font-semibold text-blue-700 mb-5 text-xl flex items-center gap-2">
                                    <FaBook /> Referencias bibliográficas
                                </h3>
                                <ul className="space-y-4 text-gray-600">
                                    {currentCase.references.map((ref, i) => (
                                        <li key={i} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                                            <span className="text-gray-400 mr-3 mt-1">•</span>
                                            <span className="leading-relaxed">{ref}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
