import {useEffect, useState} from "react";
import {caseStudies, CaseStudy} from "./StudyCase.constants.ts";
import {AllRoutes} from "../Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {NavLink} from "react-router";
import {jsPDF} from "jspdf";
import logo from '../../assets/logo.png';
import {FaFilePdf} from "react-icons/fa";
import {IoMdRefresh} from "react-icons/io";
import {FaSearch} from "react-icons/fa";
import {IoClose} from "react-icons/io5";

export default function StudyCase(){
    const [currentCase, setCurrentCase] = useState<CaseStudy | null>(null);
    const [logoBase64, setLogoBase64] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'descripcion' | 'preguntas' | 'referencias'>('descripcion');
    const [showCaseSelector, setShowCaseSelector] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    // Filtrar casos de estudio basados en el término de búsqueda
    const filteredCases = caseStudies.filter(
        (caseStudy) =>
            caseStudy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            caseStudy.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const loadRandomCase = () => {
        const random = Math.floor(Math.random() * caseStudies.length);
        setCurrentCase(caseStudies[random]);
        setShowCaseSelector(false);
    };

    const selectSpecificCase = (caseStudy: CaseStudy) => {
        setCurrentCase(caseStudy);
        setShowCaseSelector(false);
        setSearchTerm('');
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
        doc.text("Reporte de Caso Clínico", 105, yPosition + 10, { align: "center" });
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
        doc.text("Generado automáticamente para Alumnos R1", 105, 290, { align: "center" });

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
                    <IoReturnDownBack className="w-5 h-5 my-auto text-blue-700" />
                    <p className="text-blue-700 font-medium">Regresar</p>
                </NavLink>

                <div className="flex gap-3">
                    <button
                        onClick={() => setShowCaseSelector(true)}
                        className="flex md:flex-row flex-col cursor-pointer items-center gap-2 text-sm bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition shadow-md"
                    >
                        <FaSearch className="w-4 h-4" />
                        <span>Buscar casos</span>
                    </button>
                    <button
                        onClick={loadRandomCase}
                        className="flex md:flex-row flex-col cursor-pointer items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                    >
                        <IoMdRefresh className="w-5 h-5" />
                        <span>Nuevo caso</span>
                    </button>
                    <button
                        onClick={downloadPDF}
                        className="flex md:flex-row flex-col cursor-pointer items-center gap-2 text-sm bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition shadow-md"
                    >
                        <FaFilePdf className="w-5 h-5" />
                        <span>Descargar PDF</span>
                    </button>
                </div>
            </div>

            {/* Modal de selección de casos */}
            {showCaseSelector && (
                <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-10 p-4">
                    <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] flex flex-col">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-gray-800">Seleccionar Caso de Estudio</h2>
                            <button
                                onClick={() => {
                                    setShowCaseSelector(false);
                                    setSearchTerm('');
                                }}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <IoClose className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="p-4">
                            <div className="relative mb-4">
                                <input
                                    type="text"
                                    placeholder="Buscar por título o descripción..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>

                            <div className="overflow-y-auto max-h-[60vh]">
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
                                                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                                            {finding.split(' ').slice(0, 3).join(' ')}...
                                                        </span>
                                                    ))}
                                                    {caseStudy.findings.length > 2 && (
                                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
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

            <div className="bg-blue-50 p-4 rounded-xl mb-6 border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold text-blue-700 mb-2">{currentCase.title}</h2>
                <p className="text-gray-700">{currentCase.description}</p>
            </div>

            {/* Tabs para navegar entre secciones */}
            <div className="border-b border-gray-200 mb-6">
                <nav className="flex space-x-8">
                    <button
                        onClick={() => setActiveTab('descripcion')}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'descripcion'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        Información del Caso
                    </button>
                    <button
                        onClick={() => setActiveTab('preguntas')}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'preguntas'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        Preguntas
                    </button>
                    <button
                        onClick={() => setActiveTab('referencias')}
                        className={`py-2 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'referencias'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        Referencias
                    </button>
                </nav>
            </div>

            {/* Contenido según la pestaña activa */}
            {activeTab === 'descripcion' && (
                <div className="space-y-6">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-blue-600 mb-2 text-lg">Evaluación inicial</h3>
                        <p className="text-gray-800">{currentCase.initialAssessment}</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-blue-600 mb-2 text-lg">Signos vitales</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {Object.entries(currentCase.vitalSigns).map(([key, val]) => (
                                <div key={key} className="flex items-center p-2 bg-gray-50 rounded">
                                    <span className="font-medium text-gray-700">{key}:</span>
                                    <span className="ml-2 text-gray-900">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-blue-600 mb-2 text-lg">Hallazgos clínicos</h3>
                        <ul className="space-y-2">
                            {currentCase.findings.map((f, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-blue-500 mr-2">•</span>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'preguntas' && (
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-blue-600 mb-4 text-lg">Preguntas para reflexionar</h3>
                    <ol className="space-y-4">
                        {currentCase.questions.map((q, i) => (
                            <li key={i} className="bg-gray-50 p-3 rounded-lg">
                                <div className="flex">
                                    <span className="font-semibold text-blue-700 mr-2">{i + 1}.</span>
                                    <span>{q.question}</span>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            )}

            {activeTab === 'referencias' && (
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-blue-600 mb-2 text-lg">Referencias bibliográficas</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {currentCase.references.map((ref, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-gray-400 mr-2">•</span>
                                <span>{ref}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

