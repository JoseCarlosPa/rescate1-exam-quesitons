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
        "question": "¿Qué vía de administración permite absorción más rápida sin necesidad de aguja?",
        "options": [
            { "letter": "a", "text": "Oral" },
            { "letter": "b", "text": "Intramuscular" },
            { "letter": "c", "text": "Sublingual" },
            { "letter": "d", "text": "Subcutánea" }
        ],
        "correctAnswer": "c",
        "explanation": "La vía sublingual (debajo de la lengua) aprovecha la rica red de capilares de la zona para permitir que el medicamento se absorba directamente en el torrente sanguíneo. Esto evita el paso por el sistema digestivo y el hígado, logrando un efecto muy rápido sin necesidad de una inyección."
    },
    {
        "question": "¿Qué información es crítica antes de administrar cualquier medicamento?",
        "options": [
            { "letter": "a", "text": "Presión arterial" },
            { "letter": "b", "text": "Nivel de conciencia" },
            { "letter": "c", "text": "Alergias del paciente" },
            { "letter": "d", "text": "Color de la piel" }
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad del paciente es la máxima prioridad. Antes de administrar cualquier fármaco, es absolutamente crucial confirmar que el paciente no tiene alergias conocidas al mismo, ya que una reacción alérgica puede ser grave y potencialmente mortal (anafilaxia)."
    },
    {
        "question": "¿Qué vía es usada para administrar epinefrina en anafilaxia fuera del hospital?",
        "options": [
            { "letter": "a", "text": "Intravenosa" },
            { "letter": "b", "text": "Intramuscular" },
            { "letter": "c", "text": "Sublingual" },
            { "letter": "d", "text": "Oral" }
        ],
        "correctAnswer": "b",
        "explanation": "La vía intramuscular (IM) es la ruta estándar y recomendada para la administración de epinefrina en casos de anafilaxia, especialmente mediante autoinyectores. Ofrece una absorción rápida y confiable a través de los músculos grandes."
    },
    {
        "question": "¿Qué vía se emplea al administrar oxígeno suplementario?",
        "options": [
            { "letter": "a", "text": "Oral" },
            { "letter": "b", "text": "Sublingual" },
            { "letter": "c", "text": "Inhalada" },
            { "letter": "d", "text": "Intramuscular" }
        ],
        "correctAnswer": "c",
        "explanation": "El oxígeno es un gas que debe ser administrado por vía inhalada para que llegue a los pulmones, donde se produce el intercambio gaseoso y pasa al torrente sanguíneo. Se utiliza para tratar o prevenir la hipoxia."
    },
    {
        "question": "¿Qué se debe hacer inmediatamente después de administrar un medicamento?",
        "options": [
            { "letter": "a", "text": "Abandonar la escena" },
            { "letter": "b", "text": "Anotar administración y observar respuesta" },
            { "letter": "c", "text": "Tomar presión arterial únicamente" },
            { "letter": "d", "text": "Iniciar ventilación con bolsa-mascarilla" }
        ],
        "correctAnswer": "b",
        "explanation": "Después de la administración, es fundamental documentar la dosis, la hora y la vía. Igualmente importante es reevaluar continuamente al paciente para observar los efectos terapéuticos deseados y vigilar la aparición de cualquier efecto secundario adverso."
    },
    {
        "question": "¿Qué medicamento suele administrarse por vía oral para hipoglucemia?",
        "options": [
            { "letter": "a", "text": "Aspirina" },
            { "letter": "b", "text": "Glucosa oral" },
            { "letter": "c", "text": "Oxígeno" },
            { "letter": "d", "text": "Epinefrina" }
        ],
        "correctAnswer": "b",
        "explanation": "Para un paciente consciente con hipoglucemia (bajo nivel de azúcar en sangre), la glucosa oral (en forma de gel, tabletas o líquido) es el tratamiento de elección. Es un azúcar simple que se absorbe rápidamente para elevar la glucemia."
    },
    {
        "question": "¿Qué medicamento administrado por vía inhalada puede salvar a un paciente hipoxémico?",
        "options": [
            { "letter": "a", "text": "Aspirina" },
            { "letter": "b", "text": "Glucosa" },
            { "letter": "c", "text": "Oxígeno" },
            { "letter": "d", "text": "Carbón activado" }
        ],
        "correctAnswer": "c",
        "explanation": "Un paciente hipoxémico sufre de bajos niveles de oxígeno en la sangre. El tratamiento directo y que salva la vida es la administración de oxígeno suplementario por vía inhalada para aumentar la concentración de oxígeno en los pulmones y, por ende, en la sangre."
    },
    {
        "question": "¿Qué paso es parte de los '5 correctos' en la administración de medicamentos?",
        "options": [
            { "letter": "a", "text": "Correcto proveedor médico" },
            { "letter": "b", "text": "Correcto diagnóstico" },
            { "letter": "c", "text": "Paciente correcto" },
            { "letter": "d", "text": "Correcto lugar de traslado" }
        ],
        "correctAnswer": "c",
        "explanation": "Los '5 correctos' (o más, según la guía) son una regla de seguridad fundamental. Incluyen: Paciente correcto, Medicamento correcto, Dosis correcta, Vía correcta y Hora correcta. Asegurarse de que se está tratando al paciente correcto es el primer paso."
    },
    {
        "question": "¿Qué vía requiere técnica estéril estricta para la administración de medicamentos?",
        "options": [
            { "letter": "a", "text": "Oral" },
            { "letter": "b", "text": "Subcutánea" },
            { "letter": "c", "text": "Intravenosa" },
            { "letter": "d", "text": "Sublingual" }
        ],
        "correctAnswer": "c",
        "explanation": "La vía intravenosa (IV) introduce el medicamento directamente en el torrente sanguíneo, saltándose las barreras protectoras de la piel y las mucosas. Por ello, requiere una técnica aséptica estricta para prevenir infecciones graves en el torrente sanguíneo (sepsis)."
    },
    {
        "question": "¿Qué vía permite una absorción gradual y sostenida del medicamento?",
        "options": [
            { "letter": "a", "text": "Intramuscular" },
            { "letter": "b", "text": "Sublingual" },
            { "letter": "c", "text": "Inhalada" },
            { "letter": "d", "text": "Intravenosa" }
        ],
        "correctAnswer": "a",
        "explanation": "La absorción desde el tejido muscular (vía IM) es más lenta que la intravenosa o sublingual, pero más rápida que la oral. La rica vascularización del músculo permite que el medicamento se libere de forma gradual y sostenida en la circulación."
    },
    {
        "question": "¿Cuál es el sitio anatómico recomendado para la administración de epinefrina intramuscular?",
        "options": [
            { "letter": "a", "text": "Brazo" },
            { "letter": "b", "text": "Muslo lateral" },
            { "letter": "c", "text": "Glúteo" },
            { "letter": "d", "text": "Antebrazo" }
        ],
        "correctAnswer": "b",
        "explanation": "El músculo vasto lateral, en la cara externa del muslo, es el sitio preferido para la administración de epinefrina con autoinyector. Es un músculo grande, con buena irrigación sanguínea y de fácil acceso, lo que asegura una absorción rápida y efectiva."
    },
    {
        "question": "¿Qué paso debe realizarse antes de administrar cualquier medicamento?",
        "options": [
            { "letter": "a", "text": "Tomar presión arterial" },
            { "letter": "b", "text": "Revisar alergias" },
            { "letter": "c", "text": "Medir glucosa" },
            { "letter": "d", "text": "Realizar RCP" }
        ],
        "correctAnswer": "b",
        "explanation": "Repitiendo un punto crucial de seguridad: antes de administrar cualquier fármaco, es imperativo preguntar y confirmar si el paciente tiene alguna alergia conocida para prevenir una reacción adversa grave. '¿Es usted alérgico a algún medicamento?' es una pregunta obligatoria."
    },
    {
        "question": "¿Qué vía NO utiliza aguja para administrar medicamentos?",
        "options": [
            { "letter": "a", "text": "Intramuscular" },
            { "letter": "b", "text": "Intravenosa" },
            { "letter": "c", "text": "Sublingual" },
            { "letter": "d", "text": "Subcutánea" }
        ],
        "correctAnswer": "c",
        "explanation": "Las vías intramuscular, intravenosa y subcutánea son todas vías parenterales, lo que significa que requieren una inyección (aguja). La vía sublingual, al igual que la oral o la inhalada, es una vía no parenteral que no necesita aguja."
    },
    {
        "question": "¿Qué efecto busca la administración sublingual?",
        "options": [
            { "letter": "a", "text": "Liberación prolongada" },
            { "letter": "b", "text": "Absorción rápida" },
            { "letter": "c", "text": "Protección contra infecciones" },
            { "letter": "d", "text": "Control de temperatura corporal" }
        ],
        "correctAnswer": "b",
        "explanation": "La principal ventaja y el motivo para elegir la vía sublingual es la rapidez de su efecto. Al evitar el sistema digestivo, el medicamento llega rápidamente a la circulación sistémica, siendo ideal para emergencias como un dolor torácico de origen cardíaco (nitroglicerina)."
    }
]