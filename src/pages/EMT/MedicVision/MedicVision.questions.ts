import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la visión médica general?",
        answer: "Es la evaluación estructurada y rápida del estado general de un paciente con condición médica no traumática.",
    },
    {
        question: "¿Qué herramientas se usan para valorar signos y síntomas médicos?",
        answer: "Se utilizan herramientas como OPQRST y SAMPLE.",
    },
    {
        question: "¿Por qué es importante la evaluación médica general en el prehospitalario?",
        answer: "Porque permite detectar condiciones médicas críticas que pueden comprometer la vida si no se interviene a tiempo.",
    },
    {
        question: "¿Qué datos se deben obtener durante la historia clínica rápida?",
        answer: "Alergias, medicamentos actuales, antecedentes médicos, eventos relacionados y últimos alimentos.",
    },
    {
        question: "¿Qué diferencia hay entre paciente médico y traumático?",
        answer: "El paciente médico presenta condiciones internas (cardíacas, neurológicas, respiratorias), mientras que el traumático tiene lesiones físicas externas.",
    },
];


export const visionMedicGeneralQuestions: Question[] = [
    {
        question: "¿Qué define a un paciente médico?",
        options: [
            { letter: "a", text: "Aquel que ha sufrido un accidente automovilístico" },
            { letter: "b", text: "Aquel que presenta una condición interna no traumática" },
            { letter: "c", text: "Aquel que tiene una fractura expuesta" },
            { letter: "d", text: "Aquel que requiere cirugía de emergencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal de la evaluación de la naturaleza de la enfermedad (NE)?",
        options: [
            { letter: "a", text: "Determinar el historial médico familiar del paciente" },
            { letter: "b", text: "Identificar la queja principal del paciente y el tipo de emergencia médica" },
            { letter: "c", text: "Evaluar la seguridad de la escena para el personal" },
            { letter: "d", text: "Definir el método de transporte más adecuado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué mnemotecnia se utiliza para obtener información sobre los signos y síntomas del paciente?",
        options: [
            { letter: "a", text: "AVPU" },
            { letter: "b", text: "SAMPLE" },
            { letter: "c", text: "OPQRST" },
            { letter: "d", text: "DUMBELS" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué mnemotecnia se utiliza para recopilar el historial médico del paciente?",
        options: [
            { letter: "a", text: "AVPU" },
            { letter: "b", text: "SAMPLE" },
            { letter: "c", text: "OPQRST" },
            { letter: "d", text: "TACOS" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuándo se debe tomar la decisión de transporte de un paciente médico?",
        options: [
            { letter: "a", text: "Después de la evaluación secundaria" },
            { letter: "b", text: "Basada en el historial médico pasado" },
            { letter: "c", text: "Durante la evaluación primaria, si el paciente está inestable o hay una amenaza a la vida" },
            { letter: "d", text: "Luego de administrar todos los medicamentos posibles" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes es una indicación de un paciente que necesita intervención inmediata?",
        options: [
            { letter: "a", text: "Paciente estable con signos vitales normales" },
            { letter: "b", text: "Paciente inconsciente" },
            { letter: "c", text: "Paciente con náuseas leves" },
            { letter: "d", text: "Paciente con diabetes controlada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se recomienda hacer con un paciente con signos de EVC (ictus)?",
        options: [
            { letter: "a", text: "Administrar líquidos orales" },
            { letter: "b", text: "Colocar en decúbito prono" },
            { letter: "c", text: "Traslado urgente y soporte ABC" },
            { letter: "d", text: "Esperar 15 minutos para ver si mejora" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una piel fría y pegajosa en un paciente médico?",
        options: [
            { letter: "a", text: "Signo de normalidad" },
            { letter: "b", text: "Síntoma leve sin importancia" },
            { letter: "c", text: "Posible respuesta al estrés o shock" },
            { letter: "d", text: "Buena perfusión cutánea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué herramienta ayuda a decidir si un paciente debe ser trasladado como prioridad?",
        options: [
            { letter: "a", text: "El electrocardiograma" },
            { letter: "b", text: "La evaluación de la condición del paciente y la presencia de amenazas a la vida" },
            { letter: "c", text: "La edad del paciente" },
            { letter: "d", "text": "El color de la ambulancia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué precauciones estándar se deben tomar al tratar a un paciente con posible enfermedad infecciosa?",
        options: [
            { letter: "a", text: "Solamente guantes" },
            { letter: "b", text: "Guantes y mascarilla" },
            { letter: "c", text: "Guantes, mascarilla y protección ocular" },
            { letter: "d", text: "Solamente mascarilla" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la definición más precisa de una enfermedad transmisible?",
        options: [
            { letter: "a", text: "El crecimiento y la propagación de pequeños organismos dañinos en el cuerpo." },
            { letter: "b", text: "Una enfermedad que no se puede propagar de una persona a otra." },
            { letter: "c", text: "Presencia de organismos infecciosos en objetos inanimados." },
            { letter: "d", text: "Una enfermedad que se puede propagar de una persona o especie a otra." },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué acción se debe realizar después de evaluar los ABC (vía aérea, respiración, circulación) en un paciente médico?",
        options: [
            { letter: "a", text: "Transportarlo inmediatamente sin más evaluación." },
            { letter: "b", text: "Realizar una evaluación secundaria." },
            { letter: "c", text: "Tomar solamente los signos vitales." },
            { letter: "d", text: "Esperar a que el paciente mejore por sí mismo." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué información NO es parte de la historia clínica rápida (SAMPLE)?",
        options: [
            { letter: "a", text: "Medicamentos actuales" },
            { letter: "b", text: "Alergias conocidas" },
            { letter: "c", text: "Eventos financieros recientes del paciente" },
            { letter: "d", text: "Última ingesta oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Por qué es crucial la selección del destino apropiado para un paciente médico?",
        options: [
            { letter: "a", text: "Para ahorrar tiempo al equipo de paramédicos." },
            { letter: "b", text: "Para asegurar que el paciente reciba la atención especializada necesaria rápidamente." },
            { letter: "c", text: "Porque todos los hospitales ofrecen el mismo nivel de atención." },
            { letter: "d", text: "Solo es relevante para pacientes con trauma." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de las siguientes enfermedades infecciosas es de particular preocupación para el personal de SEM (Servicios de Emergencias Médicas)?",
        options: [
            { letter: "a", text: "Resfriado común" },
            { letter: "b", text: "Gripe (Influenza)" },
            { letter: "c", text: "Varicela" },
            { letter: "d", text: "Conjuntivitis" },
        ],
        correctAnswer: "b",
    },
];
