import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es el primer paso al evaluar la vía aérea?",
        answer: "Verificar si el paciente puede hablar o respirar adecuadamente.",
    },
    {
        question: "¿Qué maniobra se utiliza para abrir la vía aérea en pacientes sin sospecha de trauma?",
        answer: "Inclinación de cabeza y elevación del mentón.",
    },
    {
        question: "¿Qué maniobra se usa si sospechas lesión cervical?",
        answer: "Tracción mandibular (jaw thrust).",
    },
    {
        question: "¿Cuándo se debe usar una cánula orofaríngea (OPA)?",
        answer: "En pacientes inconscientes sin reflejo nauseoso activo.",
    },
    {
        question: "¿Qué dispositivos ayudan a eliminar secreciones de la vía aérea?",
        answer: "Sondas de aspiración (manuales o eléctricas).",
    },
    {
        question: "¿Qué dispositivo de oxígeno proporciona la mayor concentración?",
        answer: "La bolsa-válvula-mascarilla (BVM) conectada a oxígeno al 100%.",
    },
    {
        question: "¿Cuándo se prefiere una cánula nasofaríngea sobre una orofaríngea?",
        answer: "Cuando el paciente tiene reflejo nauseoso conservado pero requiere ayuda para mantener la vía aérea.",
    },
];

export const airwayManagementQuestions: Question[] = [
    {
        question: "¿Cuál es la causa más común de obstrucción de la vía aérea en pacientes inconscientes?",
        options: [
            { letter: "a", text: "Sangrado nasal" },
            { letter: "b", text: "Colapso pulmonar" },
            { letter: "c", text: "Lengua caída hacia atrás" },
            { letter: "d", text: "Broncoaspiración" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué maniobra se usa para abrir la vía aérea si no se sospecha lesión en la columna cervical?",
        options: [
            { letter: "a", text: "Tracción mandibular" },
            { letter: "b", text: "Inclinación de cabeza y elevación del mentón" },
            { letter: "c", text: "Inmovilización cervical" },
            { letter: "d", text: "Presión cricoidea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué dispositivo se usa para evitar la obstrucción de la lengua en un paciente inconsciente sin reflejo de vómito?",
        options: [
            { letter: "a", text: "Cánula nasofaríngea" },
            { letter: "b", text: "Cánula orofaríngea" },
            { letter: "c", text: "Mascarilla de oxígeno" },
            { letter: "d", text: "Bolsa-válvula-mascarilla" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es un signo de obstrucción parcial de la vía aérea?",
        options: [
            { letter: "a", text: "Ausencia de sonidos respiratorios" },
            { letter: "b", text: "Estridor" },
            { letter: "c", text: "Cianosis central inmediata" },
            { letter: "d", text: "Ausencia de pulso" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un sonido de ronquido en un paciente inconsciente?",
        options: [
            { letter: "a", text: "Obstrucción parcial de vía aérea superior" },
            { letter: "b", text: "Neumotórax" },
            { letter: "c", text: "Hipertensión pulmonar" },
            { letter: "d", text: "Fractura costal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué flujo de oxígeno se utiliza típicamente con una cánula nasal?",
        options: [
            { letter: "a", text: "1-6 litros por minuto" },
            { letter: "b", text: "6-10 litros por minuto" },
            { letter: "c", text: "10-15 litros por minuto" },
            { letter: "d", text: "15-20 litros por minuto" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de paciente es ideal para usar una cánula nasofaríngea (NPA)?",
        options: [
            { letter: "a", text: "Paciente despierto con dificultad respiratoria" },
            { letter: "b", text: "Paciente inconsciente sin reflejo de tos" },
            { letter: "c", text: "Paciente en paro cardiaco" },
            { letter: "d", text: "Paciente sin reflejo nauseoso" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué complicación puede ocurrir al insertar mal una cánula orofaríngea?",
        options: [
            { letter: "a", text: "Facilitar el paso de oxígeno" },
            { letter: "b", text: "Estimular el vómito" },
            { letter: "c", text: "Aumentar el nivel de conciencia" },
            { letter: "d", text: "Aumentar la saturación inmediatamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué signo puede indicar hipoxia en un paciente?",
        options: [
            { letter: "a", text: "Piel enrojecida" },
            { letter: "b", text: "Sudoración leve" },
            { letter: "c", text: "Cianosis" },
            { letter: "d", text: "Hipertensión" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué equipo proporciona ventilaciones con presión positiva?",
        options: [
            { letter: "a", text: "Cánula nasal" },
            { letter: "b", text: "Mascarilla simple" },
            { letter: "c", text: "Bolsa-válvula-mascarilla (BVM)" },
            { letter: "d", text: "Mascarilla de no reinhalación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué indica una respiración rápida y superficial?",
        options: [
            { letter: "a", text: "Hiperventilación" },
            { letter: "b", text: "Obstrucción total de vía aérea" },
            { letter: "c", text: "Estado normal" },
            { letter: "d", text: "Shock hipovolémico" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué material se usa más comúnmente para una cánula nasofaríngea?",
        options: [
            { letter: "a", text: "Metal" },
            { letter: "b", text: "Plástico flexible" },
            { letter: "c", text: "Vidrio templado" },
            { letter: "d", text: "Silicona rígida" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué situación NO se debe usar una cánula nasofaríngea?",
        options: [
            { letter: "a", text: "Paciente consciente" },
            { letter: "b", text: "Paciente inconsciente" },
            { letter: "c", text: "Paciente con fractura de base de cráneo sospechada" },
            { letter: "d", text: "Paciente con dificultad respiratoria" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el principal riesgo de una obstrucción completa de la vía aérea?",
        options: [
            { letter: "a", text: "Hiperglucemia" },
            { letter: "b", text: "Hipoxia severa y paro cardiorrespiratorio" },
            { letter: "c", text: "Hipertermia" },
            { letter: "d", text: "Hipotermia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué flujo de oxígeno usa una mascarilla de no reinhalación?",
        options: [
            { letter: "a", text: "1-2 L/min" },
            { letter: "b", text: "2-6 L/min" },
            { letter: "c", text: "10-15 L/min" },
            { letter: "d", text: "15-20 L/min" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué maniobra se debe aplicar si un paciente presenta cuerpo extraño obstruyendo la vía aérea?",
        options: [
            { letter: "a", text: "Compresiones torácicas" },
            { letter: "b", text: "Maniobra de Heimlich" },
            { letter: "c", text: "Inclinación de cabeza" },
            { letter: "d", text: "Uso de cánula orofaríngea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué complicación puede producir una ventilación excesiva con BVM?",
        options: [
            { letter: "a", text: "Aumento de presión intracraneal" },
            { letter: "b", text: "Reducción del retorno venoso" },
            { letter: "c", text: "Hipotermia" },
            { letter: "d", text: "Hiperglucemia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la mejor posición para ventilar manualmente a un paciente?",
        options: [
            { letter: "a", text: "Decúbito lateral" },
            { letter: "b", text: "Decúbito prono" },
            { letter: "c", text: "Decúbito supino" },
            { letter: "d", text: "Posición de Trendelenburg" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes dispositivos proporciona el mayor flujo de oxígeno?",
        options: [
            { letter: "a", text: "Mascarilla simple" },
            { letter: "b", text: "Cánula nasal" },
            { letter: "c", text: "Mascarilla de no reinhalación" },
            { letter: "d", text: "Bolsa-válvula-mascarilla (BVM)" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué señal indica obstrucción de vía aérea superior?",
        options: [
            { letter: "a", text: "Tórax se mueve simétricamente" },
            { letter: "b", text: "Silencio respiratorio y retracciones" },
            { letter: "c", text: "Pulso normal" },
            { letter: "d", text: "Coloración rosada de la piel" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indica un estridor inspiratorio en un paciente pediátrico?",
        options: [
            { letter: "a", text: "Obstrucción en la vía aérea superior" },
            { letter: "b", text: "Edema pulmonar" },
            { letter: "c", text: "Obstrucción en la vía aérea inferior" },
            { letter: "d", text: "Hiperventilación" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el tamaño correcto de la cánula orofaríngea?",
        options: [
            { letter: "a", text: "De la barbilla al ombligo" },
            { letter: "b", text: "De la comisura labial al lóbulo de la oreja" },
            { letter: "c", text: "De la frente a la barbilla" },
            { letter: "d", text: "De la nariz al omóplato" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué técnica se utiliza para insertar una cánula orofaríngea en adultos?",
        options: [
            { letter: "a", text: "Inserción recta" },
            { letter: "b", text: "Rotación de 180 grados" },
            { letter: "c", text: "Rotación de 90 grados" },
            { letter: "d", text: "Colocación lateral" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué situación se debe utilizar succión inmediata de la vía aérea?",
        options: [
            { letter: "a", text: "Paciente con ventilación espontánea normal" },
            { letter: "b", text: "Presencia de vómito o secreciones que obstruyen la vía" },
            { letter: "c", text: "Paciente inconsciente con pupilas reactivas" },
            { letter: "d", text: "Paciente con fractura de extremidad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parámetro clínico indica la necesidad urgente de oxígeno suplementario?",
        options: [
            { letter: "a", text: "Presión arterial elevada" },
            { letter: "b", text: "Saturación de oxígeno menor a 94%" },
            { letter: "c", text: "Temperatura corporal baja" },
            { letter: "d", text: "Nivel de glucosa alto" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué maniobra se utiliza para desalojar un cuerpo extraño en un lactante?",
        options: [
            { letter: "a", text: "Maniobra de Heimlich" },
            { letter: "b", text: "Compresiones abdominales" },
            { letter: "c", text: "Golpes interescapulares y compresiones torácicas" },
            { letter: "d", text: "Tracción mandibular" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué signo indica ventilación efectiva al usar una BVM?",
        options: [
            { letter: "a", text: "Distensión gástrica" },
            { letter: "b", text: "Movimientos torácicos adecuados" },
            { letter: "c", text: "Coloración azulada persistente" },
            { letter: "d", text: "Ausencia de sonidos respiratorios" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué volumen tidal se debe usar al ventilar manualmente a un adulto con BVM?",
        options: [
            { letter: "a", text: "Suficiente para ver expansión torácica visible" },
            { letter: "b", text: "Todo el contenido de la bolsa" },
            { letter: "c", text: "El doble de la capacidad pulmonar" },
            { letter: "d", text: "Volumen máximo posible" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué debe hacerse primero si un paciente no responde y no respira normalmente?",
        options: [
            { letter: "a", text: "Revisar vía aérea y empezar RCP" },
            { letter: "b", text: "Buscar un pulso radial" },
            { letter: "c", text: "Iniciar ventilación con BVM" },
            { letter: "d", text: "Colocar una cánula nasal" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la principal causa de hipoxia prehospitalaria?",
        options: [
            { letter: "a", text: "Trauma de cráneo" },
            { letter: "b", text: "Obstrucción de la vía aérea" },
            { letter: "c", text: "Hipotensión" },
            { letter: "d", text: "Hiperglucemia" },
        ],
        correctAnswer: "b",
    },
];