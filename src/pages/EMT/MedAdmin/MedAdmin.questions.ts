import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué son los 5 correctos de la administración de medicamentos?",
        answer: "Paciente correcto, medicamento correcto, dosis correcta, hora correcta y vía correcta.",
    },
    {
        question: "¿Qué vía proporciona absorción más rápida entre las básicas?",
        answer: "La vía sublingual, seguida por la inhalada.",
    },
    {
        question: "¿Qué se debe confirmar antes de administrar un medicamento?",
        answer: "Alergias conocidas del paciente.",
    },
    {
        question: "¿Qué vía es adecuada para administración de epinefrina en un paciente con anafilaxia?",
        answer: "Vía intramuscular (IM), generalmente en el muslo lateral.",
    },
    {
        question: "¿Qué vía usa el oxígeno suplementario?",
        answer: "Vía inhalada.",
    },
    {
        question: "¿Qué registro se debe hacer después de administrar un medicamento?",
        answer: "Medicamento administrado, dosis, vía, hora y la respuesta del paciente.",
    },
    {
        question: "¿Qué medicamento se administra generalmente por vía oral en casos de hipoglucemia consciente?",
        answer: "Glucosa oral.",
    },
];

export const medicationAdministrationQuestions: Question[] = [
    {
        question: "¿Qué vía de administración permite absorción más rápida sin necesidad de aguja?",
        options: [
            { letter: "a", text: "Oral" },
            { letter: "b", text: "Intramuscular" },
            { letter: "c", text: "Sublingual" },
            { letter: "d", text: "Subcutánea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué información es crítica antes de administrar cualquier medicamento?",
        options: [
            { letter: "a", text: "Presión arterial" },
            { letter: "b", text: "Nivel de conciencia" },
            { letter: "c", text: "Alergias del paciente" },
            { letter: "d", text: "Color de la piel" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué vía es usada para administrar epinefrina en anafilaxia fuera del hospital?",
        options: [
            { letter: "a", text: "Intravenosa" },
            { letter: "b", text: "Intramuscular" },
            { letter: "c", text: "Sublingual" },
            { letter: "d", text: "Oral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué vía se emplea al administrar oxígeno suplementario?",
        options: [
            { letter: "a", text: "Oral" },
            { letter: "b", text: "Sublingual" },
            { letter: "c", text: "Inhalada" },
            { letter: "d", text: "Intramuscular" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se debe hacer inmediatamente después de administrar un medicamento?",
        options: [
            { letter: "a", text: "Abandonar la escena" },
            { letter: "b", text: "Anotar administración y observar respuesta" },
            { letter: "c", text: "Tomar presión arterial únicamente" },
            { letter: "d", text: "Iniciar ventilación con bolsa-mascarilla" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento suele administrarse por vía oral para hipoglucemia?",
        options: [
            { letter: "a", text: "Aspirina" },
            { letter: "b", text: "Glucosa oral" },
            { letter: "c", text: "Oxígeno" },
            { letter: "d", text: "Epinefrina" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento administrado por vía inhalada puede salvar a un paciente hipoxémico?",
        options: [
            { letter: "a", text: "Aspirina" },
            { letter: "b", text: "Glucosa" },
            { letter: "c", text: "Oxígeno" },
            { letter: "d", text: "Carbón activado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué paso es parte de los '5 correctos' en la administración de medicamentos?",
        options: [
            { letter: "a", text: "Correcto proveedor médico" },
            { letter: "b", text: "Correcto diagnóstico" },
            { letter: "c", text: "Paciente correcto" },
            { letter: "d", text: "Correcto lugar de traslado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué vía requiere técnica estéril estricta para la administración de medicamentos?",
        options: [
            { letter: "a", text: "Oral" },
            { letter: "b", text: "Subcutánea" },
            { letter: "c", text: "Intravenosa" },
            { letter: "d", text: "Sublingual" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué vía permite una absorción gradual y sostenida del medicamento?",
        options: [
            { letter: "a", text: "Intramuscular" },
            { letter: "b", text: "Sublingual" },
            { letter: "c", text: "Inhalada" },
            { letter: "d", text: "Intravenosa" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el sitio anatómico recomendado para la administración de epinefrina intramuscular?",
        options: [
            { letter: "a", text: "Brazo" },
            { letter: "b", text: "Muslo lateral" },
            { letter: "c", text: "Glúteo" },
            { letter: "d", text: "Antebrazo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué paso debe realizarse antes de administrar cualquier medicamento?",
        options: [
            { letter: "a", text: "Tomar presión arterial" },
            { letter: "b", text: "Revisar alergias" },
            { letter: "c", text: "Medir glucosa" },
            { letter: "d", text: "Realizar RCP" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué vía NO utiliza aguja para administrar medicamentos?",
        options: [
            { letter: "a", text: "Intramuscular" },
            { letter: "b", text: "Intravenosa" },
            { letter: "c", text: "Sublingual" },
            { letter: "d", text: "Subcutánea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué efecto busca la administración sublingual?",
        options: [
            { letter: "a", text: "Liberación prolongada" },
            { letter: "b", text: "Absorción rápida" },
            { letter: "c", text: "Protección contra infecciones" },
            { letter: "d", text: "Control de temperatura corporal" },
        ],
        correctAnswer: "b",
    },
];