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
        explanation: "La vía sublingual permite una absorción rápida de medicamentos sin el uso de agujas, ya que los fármacos se absorben directamente a través de la mucosa oral hacia el torrente sanguíneo, evitando el metabolismo hepático inicial."
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
        explanation: "Conocer las alergias del paciente es fundamental antes de administrar cualquier medicamento para evitar reacciones adversas graves, como la anafilaxia."
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
        explanation: "La epinefrina se administra por vía intramuscular, generalmente en el muslo, porque esta vía permite una absorción rápida y es segura en el entorno prehospitalario."
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
        explanation: "El oxígeno suplementario se administra por vía inhalada, permitiendo que el gas llegue directamente a los pulmones para mejorar la oxigenación."
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
        explanation: "Después de administrar un medicamento, es esencial registrar la acción y observar la respuesta del paciente para identificar efectos terapéuticos o adversos, según la AAOS."
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
        explanation: "La glucosa oral es el tratamiento de elección para pacientes conscientes con hipoglucemia, ya que eleva rápidamente los niveles de glucosa en sangre."
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
        explanation: "El oxígeno administrado por vía inhalada es fundamental para tratar la hipoxemia, mejorando la oxigenación tisular de manera inmediata."
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
        explanation: "Uno de los '5 correctos' es asegurarse de que el medicamento se administre al paciente correcto, lo que previene errores y garantiza la seguridad del paciente, según la AAOS."
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
        explanation: "La vía intravenosa requiere una técnica estéril estricta para evitar infecciones, ya que el medicamento se administra directamente al torrente sanguíneo."
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
        explanation: "La vía intramuscular permite una absorción gradual y sostenida, ya que el medicamento se libera lentamente desde el músculo hacia la circulación."
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
        explanation: "El muslo lateral (cara anterolateral del muslo) es el sitio recomendado para la administración de epinefrina IM, ya que permite una absorción rápida y es seguro."
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
        explanation: "Siempre se deben revisar las alergias del paciente antes de administrar cualquier medicamento para evitar reacciones adversas graves."
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
        explanation: "La vía sublingual no requiere el uso de agujas, ya que el medicamento se coloca debajo de la lengua para su absorción."
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
        explanation: "La administración sublingual busca una absorción rápida del medicamento, ya que la mucosa oral permite el paso directo a la circulación sistémica."
    },
];