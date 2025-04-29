import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es una emergencia respiratoria?",
        answer: "Es una situación donde el paciente no respira adecuadamente o no obtiene suficiente oxígeno.",
    },
    {
        question: "¿Qué signos indican una obstrucción de vía aérea?",
        answer: "Ronquidos, estridor, sibilancias, tos débil o ausencia de sonido respiratorio.",
    },
    {
        question: "¿Cuál es la primera acción ante una obstrucción completa en paciente consciente?",
        answer: "Realizar compresiones abdominales (maniobra de Heimlich).",
    },
    {
        question: "¿Qué significa EPOC?",
        answer: "Enfermedad Pulmonar Obstructiva Crónica.",
    },
    {
        question: "¿Qué equipo puede utilizar el TAMP para asistir la ventilación?",
        answer: "Bolsa-válvula-mascarilla (BVM) con reservorio de oxígeno.",
    },
    {
        question: "¿Cuándo se administra oxígeno a alto flujo?",
        answer: "En casos de dificultad respiratoria severa, trauma o hipoxia evidente.",
    },
];

export const respiratoryEmergenciesExam: Question[] = [
    {
        question: "¿Cuál es una causa común de dificultad respiratoria en adultos mayores?",
        options: [
            { letter: "a", text: "Asma" },
            { letter: "b", text: "Enfisema" },
            { letter: "c", text: "Bronquitis crónica" },
            { letter: "d", text: "Todas las anteriores" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué signo es indicativo de una obstrucción parcial de la vía aérea?",
        options: [
            { letter: "a", text: "Silencio torácico" },
            { letter: "b", text: "Ronquidos" },
            { letter: "c", text: "Cianosis" },
            { letter: "d", text: "Ausencia de esfuerzo respiratorio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con sibilancias audibles y antecedentes de asma probablemente necesita:",
        options: [
            { letter: "a", text: "Oxígeno de bajo flujo" },
            { letter: "b", text: "Ventilación con bolsa-válvula-mascarilla" },
            { letter: "c", text: "Un broncodilatador" },
            { letter: "d", text: "Intubación inmediata" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La hipoxia es una condición en la que:",
        options: [
            { letter: "a", text: "Hay exceso de dióxido de carbono en sangre" },
            { letter: "b", text: "No hay suficiente oxígeno en los tejidos" },
            { letter: "c", text: "Los pulmones colapsan por completo" },
            { letter: "d", text: "El diafragma se paraliza" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El tratamiento inmediato para una persona con obstrucción completa de la vía aérea consciente es:",
        options: [
            { letter: "a", text: "Ventilación con bolsa-válvula" },
            { letter: "b", text: "Compresiones torácicas" },
            { letter: "c", text: "Maniobras de desobstrucción (compresiones abdominales)" },
            { letter: "d", text: "Administración de oxígeno" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el principal estímulo respiratorio en un paciente con EPOC avanzado?",
        options: [
            { letter: "a", text: "Altos niveles de oxígeno" },
            { letter: "b", text: "Niveles bajos de oxígeno (hipoxia)" },
            { letter: "c", text: "Niveles elevados de CO2" },
            { letter: "d", text: "Dolor torácico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un sonido agudo al inspirar, generalmente causado por una obstrucción en la vía aérea superior, se llama:",
        options: [
            { letter: "a", text: "Estridor" },
            { letter: "b", text: "Ronquido" },
            { letter: "c", text: "Sibilancia" },
            { letter: "d", text: "Crepitación" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el nivel mínimo aceptable de saturación de oxígeno en un adulto sano?",
        options: [
            { letter: "a", text: "80%" },
            { letter: "b", text: "85%" },
            { letter: "c", text: "90%" },
            { letter: "d", text: "95%" },
        ],
        correctAnswer: "d",
    },
    {
        question: "El tratamiento con BVM está indicado cuando:",
        options: [
            { letter: "a", text: "El paciente está en paro cardíaco" },
            { letter: "b", text: "Hay respiración agónica o inefectiva" },
            { letter: "c", text: "El paciente no responde y tiene mala ventilación" },
            { letter: "d", text: "Todas las anteriores" },
        ],
        correctAnswer: "d",
    },
    {
        question: "La administración de oxígeno en pacientes con sospecha de infarto agudo al miocardio con saturación <94% debe ser:",
        options: [
            { letter: "a", text: "Inmediata y a alto flujo" },
            { letter: "b", text: "Solo si tiene disnea o hipoxia evidente" },
            { letter: "c", text: "Siempre con cánula nasal" },
            { letter: "d", text: "Nunca indicada" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes síntomas es típico de un edema agudo de pulmón?",
        options: [
            { letter: "a", text: "Sibilancias" },
            { letter: "b", text: "Esputo rosado espumoso" },
            { letter: "c", text: "Dolor torácico punzante" },
            { letter: "d", text: "Fiebre" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La obstrucción respiratoria en un niño puede deberse más comúnmente a:",
        options: [
            { letter: "a", text: "Asma" },
            { letter: "b", text: "Atragantamiento con cuerpo extraño" },
            { letter: "c", text: "Neumonía" },
            { letter: "d", text: "Trauma craneal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente que solo emite sonidos guturales y no puede hablar probablemente tiene:",
        options: [
            { letter: "a", text: "Vía aérea permeable" },
            { letter: "b", text: "Ansiedad leve" },
            { letter: "c", text: "Obstrucción parcial o completa de la vía aérea" },
            { letter: "d", text: "Crisis epiléptica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El uso de músculos accesorios al respirar indica:",
        options: [
            { letter: "a", text: "Respiración normal" },
            { letter: "b", text: "Fatiga muscular" },
            { letter: "c", text: "Dificultad respiratoria" },
            { letter: "d", text: "Buen esfuerzo respiratorio" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué dispositivo se recomienda para administrar oxígeno en un paciente con disnea moderada y saturación de 89%?",
        options: [
            { letter: "a", text: "Cánula nasal a 2 L/min" },
            { letter: "b", text: "Mascarilla sin reinhalación a 15 L/min" },
            { letter: "c", text: "Mascarilla simple a 6 L/min" },
            { letter: "d", text: "Ninguno, se observa solamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una causa de respiración rápida (taquipnea) puede ser:",
        options: [
            { letter: "a", text: "Fiebre" },
            { letter: "b", text: "Acidosis metabólica" },
            { letter: "c", text: "Ansiedad" },
            { letter: "d", text: "Todas las anteriores" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué patología puede causar disminución unilateral del murmullo vesicular?",
        options: [
            { letter: "a", text: "Asma" },
            { letter: "b", text: "Neumotórax" },
            { letter: "c", text: "Edema pulmonar" },
            { letter: "d", text: "Bronquitis crónica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente en paro respiratorio necesita:",
        options: [
            { letter: "a", text: "Oxígeno suplementario" },
            { letter: "b", text: "Ventilación asistida inmediata" },
            { letter: "c", text: "Reanimación cardiopulmonar sin ventilación" },
            { letter: "d", text: "Evaluación con esfigmomanómetro" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué condición respiratoria se asocia frecuentemente con el uso de inhaladores broncodilatadores?",
        options: [
            { letter: "a", text: "Neumonía" },
            { letter: "b", text: "Asma" },
            { letter: "c", text: "Tuberculosis" },
            { letter: "d", text: "Neumotórax" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El estridor es más común en:",
        options: [
            { letter: "a", text: "Obstrucción de vía aérea inferior" },
            { letter: "b", text: "Obstrucción de vía aérea superior" },
            { letter: "c", text: "Neumonía avanzada" },
            { letter: "d", text: "Asma severa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un signo de insuficiencia respiratoria inminente en un niño es:",
        options: [
            { letter: "a", text: "Retracciones intercostales leves" },
            { letter: "b", text: "Taquipnea leve" },
            { letter: "c", text: "Bradipnea y letargo" },
            { letter: "d", text: "Cianosis distal leve" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la mejor posición para un paciente consciente con disnea severa?",
        options: [
            { letter: "a", text: "Decúbito supino" },
            { letter: "b", text: "Decúbito lateral izquierdo" },
            { letter: "c", text: "Posición de Fowler o semi-Fowler" },
            { letter: "d", text: "Trendelemburg" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué herramienta ayuda a evaluar la oxigenación de un paciente en forma no invasiva?",
        options: [
            { letter: "a", text: "Glucómetro" },
            { letter: "b", text: "Pulsioxímetro" },
            { letter: "c", text: "Esfigmomanómetro" },
            { letter: "d", text: "Electrocardiograma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La dificultad respiratoria súbita con dolor torácico y disminución unilateral de ruidos puede ser indicativa de:",
        options: [
            { letter: "a", text: "Edema pulmonar" },
            { letter: "b", text: "Neumotórax espontáneo" },
            { letter: "c", text: "Asma leve" },
            { letter: "d", text: "Hipoglucemia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La cianosis peribucal indica:",
        options: [
            { letter: "a", text: "Buena perfusión" },
            { letter: "b", text: "Hipoxia significativa" },
            { letter: "c", text: "Temperatura corporal elevada" },
            { letter: "d", text: "Hiperglucemia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué acción debes tomar primero ante un paciente consciente con obstrucción grave de la vía aérea?",
        options: [
            { letter: "a", text: "Administrar respiraciones de rescate" },
            { letter: "b", text: "Aplicar compresiones torácicas" },
            { letter: "c", text: "Realizar maniobras de desobstrucción (compresiones abdominales)" },
            { letter: "d", text: "Colocar al paciente en posición lateral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes signos indica una obstrucción completa de la vía aérea en un adulto?",
        options: [
            { letter: "a", text: "El paciente tose enérgicamente" },
            { letter: "b", text: "Produce sonidos sibilantes" },
            { letter: "c", text: "Está cianótico y no puede hablar" },
            { letter: "d", text: "Respira con dificultad leve" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El sonido de burbujeo o gorgoteo al respirar puede deberse a:",
        options: [
            { letter: "a", text: "Aire atrapado en pleura" },
            { letter: "b", text: "Líquidos o secreciones en la vía aérea" },
            { letter: "c", text: "Espasmo bronquial" },
            { letter: "d", text: "Contracción del diafragma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con respiraciones rápidas y superficiales probablemente presenta:",
        options: [
            { letter: "a", text: "Ventilación adecuada" },
            { letter: "b", text: "Hiperventilación efectiva" },
            { letter: "c", text: "Ventilación ineficaz" },
            { letter: "d", text: "Paro respiratorio" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el objetivo principal de la evaluación respiratoria durante la valoración primaria (ABCDE)?",
        options: [
            { letter: "a", text: "Detectar signos de intoxicación" },
            { letter: "b", text: "Determinar la necesidad de inmovilización espinal" },
            { letter: "c", text: "Identificar problemas que comprometan la oxigenación y ventilación" },
            { letter: "d", text: "Calcular el índice de masa corporal del paciente" },
        ],
        correctAnswer: "c",
    }
];