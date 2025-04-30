import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es la hipoglucemia?",
        answer: "Una disminución anormal del nivel de glucosa en sangre, que puede causar pérdida de conciencia si no se trata rápidamente.",
    },
    {
        question: "¿Qué síntomas presenta un paciente con hiperglucemia?",
        answer: "Sed excesiva, micción frecuente, aliento afrutado, respiración rápida y profunda, piel seca.",
    },
    {
        question: "¿Qué debe hacer un TAMP ante un paciente con hipoglucemia consciente?",
        answer: "Administrar glucosa oral si puede tragar y mantener la vía aérea segura.",
    },
    {
        question: "¿Qué es la enfermedad de células falciformes?",
        answer: "Una enfermedad hereditaria donde los glóbulos rojos se deforman y obstruyen los vasos sanguíneos, causando dolor y daño a órganos.",
    },
    {
        question: "¿Qué precaución especial se debe tener con pacientes con hemofilia?",
        answer: "Evitar procedimientos invasivos y controlar el sangrado con presión firme y transporte rápido.",
    },
    {
        question: "¿Qué diferencia a la cetoacidosis diabética del estado hiperosmolar?",
        answer: "La CAD ocurre en pacientes con diabetes tipo 1 y presenta acidosis, mientras que el estado hiperosmolar ocurre en tipo 2 y rara vez presenta cetonas.",
    },
];

export const endocrineHematologicQuestions: Question[] = [
    {
        question: "¿Cuál es el nivel de glucosa en sangre típicamente considerado como hipoglucemia en adultos?",
        options: [
            { letter: "a", text: "Mayor a 140 mg/dL" },
            { letter: "b", text: "Menor a 70 mg/dL" },
            { letter: "c", text: "Entre 90-120 mg/dL" },
            { letter: "d", text: "Menor a 110 mg/dL" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con respiración de Kussmaul probablemente presenta:",
        options: [
            { letter: "a", text: "Hipoglucemia" },
            { letter: "b", text: "Cetoacidosis diabética" },
            { letter: "c", text: "Insuficiencia cardíaca congestiva" },
            { letter: "d", text: "Asma grave" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En pacientes con hipoglucemia, uno de los primeros síntomas es:",
        options: [
            { letter: "a", text: "Piel seca y caliente" },
            { letter: "b", text: "Letargo profundo" },
            { letter: "c", text: "Irritabilidad o confusión" },
            { letter: "d", text: "Respiración ruidosa" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes NO es un signo común de hiperglucemia?",
        options: [
            { letter: "a", text: "Polidipsia" },
            { letter: "b", text: "Poliuria" },
            { letter: "c", text: "Sudoración profusa" },
            { letter: "d", text: "Aliento afrutado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La enfermedad de células falciformes afecta principalmente a:",
        options: [
            { letter: "a", text: "La coagulación de la sangre" },
            { letter: "b", text: "La producción de insulina" },
            { letter: "c", text: "La forma y función de los glóbulos rojos" },
            { letter: "d", text: "La presión arterial" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El tratamiento prehospitalario inicial para un paciente inconsciente con sospecha de hipoglucemia incluye:",
        options: [
            { letter: "a", text: "Administrar glucosa oral" },
            { letter: "b", text: "Esperar al hospital" },
            { letter: "c", text: "Administrar glucosa intravenosa si está permitido y capacitado" },
            { letter: "d", text: "Ofrecer alimentos sólidos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es un hallazgo típico en una crisis de células falciformes?",
        options: [
            { letter: "a", text: "Hipoglucemia severa" },
            { letter: "b", text: "Dolor torácico y articular intenso" },
            { letter: "c", text: "Hipotermia" },
            { letter: "d", text: "Edema cerebral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una posible complicación de una crisis de células falciformes?",
        options: [
            { letter: "a", text: "Hiperglucemia" },
            { letter: "b", text: "Hemorragia nasal" },
            { letter: "c", text: "Accidente cerebrovascular (ACV)" },
            { letter: "d", text: "Diuresis osmótica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con hemofilia, debes evitar:",
        options: [
            { letter: "a", text: "El transporte rápido" },
            { letter: "b", text: "Las inyecciones intramusculares innecesarias" },
            { letter: "c", text: "El uso de glucosa oral" },
            { letter: "d", text: "La toma de signos vitales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué signo distingue a un paciente con hipoglucemia de uno con hiperglucemia?",
        options: [
            { letter: "a", text: "Respiración de Kussmaul" },
            { letter: "b", text: "Sudoración y confusión súbita" },
            { letter: "c", text: "Piel seca" },
            { letter: "d", text: "Sed excesiva" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de respiración es característica de la cetoacidosis diabética?",
        options: [
            { letter: "a", text: "Cheyne-Stokes" },
            { letter: "b", text: "Biot" },
            { letter: "c", text: "Kussmaul" },
            { letter: "d", text: "Apneusica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La causa más común de hipoglucemia en diabéticos es:",
        options: [
            { letter: "a", text: "Infección" },
            { letter: "b", text: "Comida en exceso" },
            { letter: "c", text: "Ejercicio sin ajustar la dosis de insulina" },
            { letter: "d", text: "Deshidratación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes signos clínicos puede observarse en una crisis hiperglucémica?",
        options: [
            { letter: "a", text: "Sudoración fría" },
            { letter: "b", text: "Convulsiones" },
            { letter: "c", text: "Poliuria y polidipsia" },
            { letter: "d", text: "Pupilas puntiformes" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La hiperglucemia se desarrolla típicamente:",
        options: [
            { letter: "a", text: "En cuestión de minutos" },
            { letter: "b", text: "En segundos tras una comida" },
            { letter: "c", text: "Gradualmente en horas o días" },
            { letter: "d", text: "Únicamente durante la noche" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con hipoglucemia severa puede presentar:",
        options: [
            { letter: "a", text: "Aliento afrutado" },
            { letter: "b", text: "Somnolencia o coma" },
            { letter: "c", text: "Respiración de Kussmaul" },
            { letter: "d", text: "Pulso lento y fuerte" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un nivel de glucosa en sangre superior a 250 mg/dL?",
        options: [
            { letter: "a", text: "Hipoglucemia leve" },
            { letter: "b", text: "Normalidad" },
            { letter: "c", text: "Hiperglucemia potencialmente grave" },
            { letter: "d", text: "Estado hiperosmolar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El tratamiento definitivo de la enfermedad de células falciformes es:",
        options: [
            { letter: "a", text: "Aspirina" },
            { letter: "b", text: "Oxígeno y transporte" },
            { letter: "c", text: "Transfusión de sangre y control médico" },
            { letter: "d", text: "Reposo y líquidos orales" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un signo temprano de hipoglucemia es:",
        options: [
            { letter: "a", text: "Sed extrema" },
            { letter: "b", text: "Convulsión" },
            { letter: "c", text: "Irritabilidad o hambre intensa" },
            { letter: "d", text: "Respiración lenta" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El estado hiperosmolar hiperglucémico se diferencia de la CAD por:",
        options: [
            { letter: "a", text: "Presentarse en diabetes tipo 1" },
            { letter: "b", text: "Presencia de cetonas en orina" },
            { letter: "c", text: "Ausencia de cetoacidosis" },
            { letter: "d", text: "Inicio súbito" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una complicación potencial de la hemofilia no tratada adecuadamente?",
        options: [
            { letter: "a", text: "Hiperglucemia" },
            { letter: "b", text: "Hemorragia interna grave" },
            { letter: "c", text: "Hipotermia" },
            { letter: "d", text: "Infección bacteriana" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la acción más importante ante una sospecha de cetoacidosis diabética?",
        options: [
            { letter: "a", text: "Administrar glucosa" },
            { letter: "b", text: "Oxigenar y trasladar rápidamente" },
            { letter: "c", text: "Dar líquidos orales" },
            { letter: "d", text: "Esperar a que el paciente se recupere" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La administración de glucosa oral en paciente inconsciente puede provocar:",
        options: [
            { letter: "a", text: "Hipoglucemia" },
            { letter: "b", text: "Aumento de la presión arterial" },
            { letter: "c", text: "Aspiración y obstrucción de vía aérea" },
            { letter: "d", text: "Deshidratación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El sistema endocrino regula funciones como:",
        options: [
            { letter: "a", text: "Digestión únicamente" },
            { letter: "b", text: "Movimiento voluntario" },
            { letter: "c", text: "Metabolismo, crecimiento y desarrollo" },
            { letter: "d", text: "Reflejos automáticos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El páncreas es responsable de la secreción de:",
        options: [
            { letter: "a", text: "Hemoglobina" },
            { letter: "b", text: "Insulina y glucagón" },
            { letter: "c", text: "Adrenalina" },
            { letter: "d", text: "Testosterona" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El glucagón tiene el efecto de:",
        options: [
            { letter: "a", text: "Disminuir la glucosa en sangre" },
            { letter: "b", text: "Aumentar la producción de glóbulos blancos" },
            { letter: "c", text: "Elevar los niveles de glucosa en sangre" },
            { letter: "d", text: "Reducir la presión arterial" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La principal prioridad en un paciente con enfermedad hematológica y dificultad respiratoria es:",
        options: [
            { letter: "a", text: "Control del sangrado" },
            { letter: "b", text: "Control de la glucosa" },
            { letter: "c", text: "Administración de oxígeno" },
            { letter: "d", text: "Manejo del dolor" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El principal objetivo del tratamiento prehospitalario en pacientes con hipoglucemia es:",
        options: [
            { letter: "a", text: "Disminuir la insulina" },
            { letter: "b", text: "Aumentar la insulina" },
            { letter: "c", text: "Elevar los niveles de glucosa" },
            { letter: "d", text: "Reducir el pH sanguíneo" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es un signo importante que puede indicar una crisis por células falciformes?",
        options: [
            { letter: "a", text: "Dolor abdominal súbito y severo" },
            { letter: "b", text: "Piel fría y húmeda" },
            { letter: "c", text: "Sangrado nasal profuso" },
            { letter: "d", text: "Visión borrosa" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué debe hacer un TAMP si el paciente con hipoglucemia no responde a la glucosa oral y está inconsciente?",
        options: [
            { letter: "a", text: "Administrar más glucosa oral" },
            { letter: "b", text: "Iniciar RCP" },
            { letter: "c", text: "Administrar glucosa IV si está autorizado o transportar rápidamente" },
            { letter: "d", text: "Esperar 10 minutos más" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué trastorno hematológico se caracteriza por sangrados prolongados y dificultad para coagular?",
        options: [
            { letter: "a", text: "Anemia" },
            { letter: "b", text: "Hemofilia" },
            { letter: "c", text: "Leucemia" },
            { letter: "d", text: "Trombocitosis" },
        ],
        correctAnswer: "b",
    }
];