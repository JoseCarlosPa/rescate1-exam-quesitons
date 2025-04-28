import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un fármaco?",
        answer: "Es cualquier sustancia química que altera funciones corporales normales.",
    },
    {
        question: "¿Cuál es la diferencia entre un fármaco y un medicamento?",
        answer: "El medicamento es una preparación que contiene uno o más fármacos destinados a prevenir, tratar o curar enfermedades.",
    },
    {
        question: "¿Cuáles son los 5 correctos de la administración de medicamentos?",
        answer: "Paciente correcto, medicamento correcto, dosis correcta, hora correcta y vía correcta.",
    },
    {
        question: "¿Qué medicamento prehospitalario se utiliza en reacciones anafilácticas graves?",
        answer: "Epinefrina.",
    },
    {
        question: "¿Qué vía de administración permite el efecto más rápido de un medicamento?",
        answer: "La vía intravenosa.",
    },
    {
        question: "¿Qué medicamento se administra para hipoglucemia consciente?",
        answer: "Glucosa oral.",
    },
    {
        question: "¿Qué medicamento inhibe la agregación plaquetaria en infartos agudos al miocardio?",
        answer: "Aspirina.",
    },
];

export const pharmacologyQuestions: Question[] = [
    {
        question: "¿Qué término describe el estudio de cómo actúan los medicamentos en el cuerpo?",
        options: [
            { letter: "a", text: "Toxicología" },
            { letter: "b", text: "Farmacología" },
            { letter: "c", text: "Inmunología" },
            { letter: "d", text: "Microbiología" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento prehospitalario se usa para tratar la hipoglucemia en un paciente consciente?",
        options: [
            { letter: "a", text: "Aspirina" },
            { letter: "b", text: "Glucosa oral" },
            { letter: "c", text: "Epinefrina" },
            { letter: "d", text: "Oxígeno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué vía de administración proporciona absorción más rápida?",
        options: [
            { letter: "a", text: "Oral" },
            { letter: "b", text: "Sublingual" },
            { letter: "c", text: "Intramuscular" },
            { letter: "d", text: "Intravenosa" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué se busca cumplir con los '5 correctos'?",
        options: [
            { letter: "a", text: "Reducción de efectos adversos" },
            { letter: "b", text: "Agilizar la administración" },
            { letter: "c", text: "Mejorar la documentación" },
            { letter: "d", text: "Disminuir costos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué medicamento se usa para adsorber sustancias tóxicas en el sistema digestivo?",
        options: [
            { letter: "a", text: "Glucosa oral" },
            { letter: "b", text: "Aspirina" },
            { letter: "c", text: "Carbón activado" },
            { letter: "d", text: "Epinefrina" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué medicamento prehospitalario es considerado un gas?",
        options: [
            { letter: "a", text: "Epinefrina" },
            { letter: "b", text: "Oxígeno" },
            { letter: "c", text: "Aspirina" },
            { letter: "d", text: "Carbón activado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa 'vía sublingual'?",
        options: [
            { letter: "a", text: "Aplicación en la piel" },
            { letter: "b", text: "Debajo de la lengua" },
            { letter: "c", text: "A través de inyección" },
            { letter: "d", text: "Por inhalación nasal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué efecto busca la administración de epinefrina en anafilaxia?",
        options: [
            { letter: "a", text: "Reducir la fiebre" },
            { letter: "b", text: "Reducir broncoespasmo y vasodilatación" },
            { letter: "c", text: "Bajar la presión arterial" },
            { letter: "d", text: "Aumentar la producción de saliva" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento prehospitalario se contraindica en sangrado gastrointestinal activo?",
        options: [
            { letter: "a", text: "Carbón activado" },
            { letter: "b", text: "Aspirina" },
            { letter: "c", text: "Oxígeno" },
            { letter: "d", text: "Glucosa oral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de medicamento es la aspirina?",
        options: [
            { letter: "a", text: "Antiagregante plaquetario" },
            { letter: "b", text: "Broncodilatador" },
            { letter: "c", text: "Antihipertensivo" },
            { letter: "d", text: "Analéptico respiratorio" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué vía de administración implica inyectar medicamento en el músculo?",
        options: [
            { letter: "a", text: "Intravenosa" },
            { letter: "b", text: "Intradérmica" },
            { letter: "c", text: "Intramuscular" },
            { letter: "d", text: "Subcutánea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué significa la farmacodinamia?",
        options: [
            { letter: "a", text: "Cómo el cuerpo absorbe un medicamento" },
            { letter: "b", text: "Efectos de un medicamento sobre el cuerpo" },
            { letter: "c", text: "Eliminación de un medicamento del cuerpo" },
            { letter: "d", text: "Conservación de medicamentos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes medicamentos se administra para reacciones alérgicas graves?",
        options: [
            { letter: "a", text: "Carbón activado" },
            { letter: "b", text: "Glucosa oral" },
            { letter: "c", text: "Epinefrina" },
            { letter: "d", text: "Aspirina" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parámetro afecta la absorción de un medicamento administrado oralmente?",
        options: [
            { letter: "a", text: "Velocidad respiratoria" },
            { letter: "b", text: "Tiempo de vaciamiento gástrico" },
            { letter: "c", text: "Saturación de oxígeno" },
            { letter: "d", text: "Nivel de glucosa en sangre" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento prehospitalario es una forma de azúcar simple?",
        options: [
            { letter: "a", text: "Oxígeno" },
            { letter: "b", text: "Aspirina" },
            { letter: "c", text: "Glucosa oral" },
            { letter: "d", text: "Carbón activado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué vía de administración permite un efecto más lento pero más duradero?",
        options: [
            { letter: "a", text: "Intravenosa" },
            { letter: "b", text: "Oral" },
            { letter: "c", text: "Sublingual" },
            { letter: "d", text: "Inhalada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica 'indicación' de un medicamento?",
        options: [
            { letter: "a", text: "Cuándo no debe administrarse" },
            { letter: "b", text: "Motivo para administrarlo" },
            { letter: "c", text: "Posible efecto adverso" },
            { letter: "d", text: "Marca comercial" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué efecto produce la administración sublingual de medicamentos?",
        options: [
            { letter: "a", text: "Absorción lenta" },
            { letter: "b", text: "Absorción rápida hacia la sangre" },
            { letter: "c", text: "Inhalación directa a pulmones" },
            { letter: "d", text: "Metabolización hepática inmediata" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué representa una contraindicación?",
        options: [
            { letter: "a", text: "Razón para administrar un medicamento" },
            { letter: "b", text: "Condición que hace inapropiado usar un medicamento" },
            { letter: "c", text: "Dosis adecuada" },
            { letter: "d", text: "Efecto terapéutico buscado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento puede administrarse en inhalación para hipoxia severa?",
        options: [
            { letter: "a", text: "Glucosa oral" },
            { letter: "b", text: "Oxígeno" },
            { letter: "c", text: "Carbón activado" },
            { letter: "d", text: "Aspirina" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué precaución se debe tener al administrar glucosa oral?",
        options: [
            { letter: "a", text: "Paciente inconsciente" },
            { letter: "b", text: "Paciente con dolor torácico" },
            { letter: "c", text: "Paciente con presión arterial elevada" },
            { letter: "d", text: "Paciente con fiebre" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué sustancia bloquea la absorción intestinal de ciertos tóxicos?",
        options: [
            { letter: "a", text: "Oxígeno" },
            { letter: "b", text: "Aspirina" },
            { letter: "c", text: "Carbón activado" },
            { letter: "d", text: "Glucosa oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué se entiende por efecto adverso de un medicamento?",
        options: [
            { letter: "a", text: "Efecto terapéutico esperado" },
            { letter: "b", text: "Efecto no deseado o perjudicial" },
            { letter: "c", text: "Absorción lenta" },
            { letter: "d", text: "Interacción con oxígeno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué vía requiere aspirar medicamento directamente a los pulmones?",
        options: [
            { letter: "a", text: "Oral" },
            { letter: "b", text: "Inhalada" },
            { letter: "c", text: "Intravenosa" },
            { letter: "d", text: "Sublingual" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué medicamento prehospitalario puede salvar una vida en anafilaxia?",
        options: [
            { letter: "a", text: "Carbón activado" },
            { letter: "b", text: "Oxígeno" },
            { letter: "c", text: "Epinefrina" },
            { letter: "d", text: "Glucosa oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué propiedad tiene el carbón activado?",
        options: [
            { letter: "a", text: "Absorber gases" },
            { letter: "b", text: "Adsorber sustancias químicas" },
            { letter: "c", text: "Producir insulina" },
            { letter: "d", text: "Reducir inflamación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué efecto busca la administración de aspirina en infarto?",
        options: [
            { letter: "a", text: "Aumentar la frecuencia cardiaca" },
            { letter: "b", text: "Disminuir el dolor torácico" },
            { letter: "c", text: "Prevenir la formación de coágulos" },
            { letter: "d", text: "Bajar la fiebre" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué vía se usa para administrar medicamentos debajo de la piel?",
        options: [
            { letter: "a", text: "Intramuscular" },
            { letter: "b", text: "Intravenosa" },
            { letter: "c", text: "Subcutánea" },
            { letter: "d", text: "Oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué medicamento requiere receta médica y control estricto en servicios avanzados?",
        options: [
            { letter: "a", text: "Oxígeno" },
            { letter: "b", text: "Epinefrina" },
            { letter: "c", text: "Morfina" },
            { letter: "d", text: "Carbón activado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué parámetro es vital monitorear después de administrar epinefrina?",
        options: [
            { letter: "a", text: "Temperatura corporal" },
            { letter: "b", text: "Frecuencia respiratoria" },
            { letter: "c", text: "Frecuencia cardiaca y presión arterial" },
            { letter: "d", text: "Nivel de glucosa" },
        ],
        correctAnswer: "c",
    },
];