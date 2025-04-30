import {useEffect, useState} from "react";
import {caseStudies, CaseStudy} from "./StudyCase.constants.ts";
import {AllRoutes} from "../Router/Router.constants.ts";
import {IoReturnDownBack} from "react-icons/io5";
import {NavLink} from "react-router";
import {jsPDF} from "jspdf";
import logo from '../../assets/logo.png';

export default function StudyCase(){
    const [currentCase, setCurrentCase] = useState<CaseStudy | null>(null);
    const [logoBase64, setLogoBase64] = useState<string | null>(null);

    const loadRandomCase = () => {
        const random = Math.floor(Math.random() * caseStudies.length);
        setCurrentCase(caseStudies[random]);
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

        // Agregar imagen (base64)
        doc.addImage(logoBase64, "PNG", 10, 10, 20, 20); // (imagen, formato, x, y, ancho, alto)

        // Encabezado
        doc.setFontSize(18);
        doc.text("Reporte de Caso Clínico", 105, 40, { align: "center" });
        doc.setFontSize(12);
        doc.text(`Título: ${currentCase.title}`, 10, 50);

        // Descripción con ajuste de línea
        doc.setFontSize(14);
        doc.text("Descripción:", 10, 60);
        doc.setFontSize(12);
        doc.text(currentCase.description, 10, 70, { maxWidth: 190 });

        // Evaluación inicial
        doc.setFontSize(14);
        doc.text("Evaluación inicial:", 10, 90);
        doc.setFontSize(12);
        doc.text(currentCase.initialAssessment, 10, 100, { maxWidth: 190 });

        // Signos vitales
        doc.setFontSize(14);
        doc.text("Signos vitales:", 10, 120);
        Object.entries(currentCase.vitalSigns).forEach(([key, val], index) => {
            doc.text(`${key}: ${val}`, 10, 130 + index * 10);
        });

        // Pie de página
        doc.setFontSize(10);
        doc.text("Generado automáticamente, Alumnos R1", 105, 290, { align: "center" });

        doc.save(`${currentCase.title}.pdf`);
    };

    useEffect(() => {
        loadRandomCase();
        convertLogoToBase64();
    }, []);

    if (!currentCase) return <p className="text-center text-gray-500">Cargando caso...</p>;

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4 my-8">
            <div className="flex ">
                <NavLink
                    to={AllRoutes.EMT}
                    className="flex gap-2 mb-4 bg-white shadow rounded p-2 hover:bg-orange-100   transition duration-300 ease-in-out4">
                    <IoReturnDownBack className="w-5 h-5 my-auto"  />
                    <p className="text-lg">Regresar</p>
                </NavLink>
            </div>

            <div className="flex justify-end ">
                <div className="flex gap-2">
                    <button
                        onClick={loadRandomCase}
                        className="cursor-pointer text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                        Ver otro caso
                    </button>
                    <button
                        onClick={downloadPDF}
                        className="cursor-pointer text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    >
                        Descargar PDF
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-blue-700">{currentCase.title}</h2>

            </div>

            <p className="text-gray-700 ">{currentCase.description}</p>

            <div>
                <h3 className="font-semibold">Evaluación inicial</h3>
                <p>{currentCase.initialAssessment}</p>
            </div>

            <div>
                <h3 className="font-semibold">Signos vitales</h3>
                <ul className="list-disc ml-5">
                    {Object.entries(currentCase.vitalSigns).map(([key, val]) => (
                        <li key={key}>
                            {key}: {val}
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-semibold">Hallazgos clínicos</h3>
                <ul className="list-disc ml-5">
                    {currentCase.findings.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="font-semibold">Preguntas</h3>
                <ol className="list-decimal ml-5">
                    {currentCase.questions.map((q, i) => (
                        <li key={i}>{q.question}</li>
                    ))}
                </ol>
            </div>

            <div>
                <h3 className="font-semibold">Referencias</h3>
                <ul className="list-disc ml-5 text-sm text-gray-500">
                    {currentCase.references.map((ref, i) => (
                        <li key={i}>{ref}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}