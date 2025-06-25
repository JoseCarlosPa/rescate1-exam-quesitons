import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es una emergencia respiratoria?",
        answer: "Es una situación donde el paciente no respira adecuadamente o no obtiene suficiente oxígeno para satisfacer las necesidades de su cuerpo.",
    },
    {
        question: "¿Qué signos clave indican una obstrucción de la vía aérea en un paciente consciente?",
        answer: "Ronquidos, estridor (sonido agudo al inhalar), sibilancias (silbido al exhalar), tos débil o ausente, dificultad para hablar y cianosis (coloración azulada de piel/mucosas).",
    },
    {
        question: "¿Cuál es la primera acción ante una obstrucción completa de la vía aérea en un paciente consciente y adulto?",
        answer: "Realizar compresiones abdominales, comúnmente conocidas como la maniobra de Heimlich, de manera enérgica y repetitiva hasta que el objeto sea expulsado o el paciente pierda el conocimiento.",
    },
    {
        question: "¿Qué significa EPOC y cuáles son sus características principales?",
        answer: "EPOC significa Enfermedad Pulmonar Obstructiva Crónica. Se caracteriza por una obstrucción persistente del flujo de aire en los pulmones, generalmente progresiva y asociada a una respuesta inflamatoria crónica de las vías respiratorias y el parénquima pulmonar, causada por la exposición significativa a partículas o gases nocivos (ej., tabaquismo).",
    },
    {
        question: "¿Qué equipo puede utilizar el Técnico en Atención Médica Prehospitalaria (TAMP) para asistir la ventilación?",
        answer: "Principalmente, la bolsa-válvula-mascarilla (BVM) con reservorio de oxígeno. Otros equipos incluyen cánulas orofaríngeas (OPA) o nasofaríngeas (NPA) para mantener la vía aérea permeable.",
    },
    {
        question: "¿Cuándo se administra oxígeno a alto flujo?",
        answer: "Se administra oxígeno a alto flujo en casos de dificultad respiratoria severa, hipoxia evidente (SpO2 < 94%), trauma mayor, shock o cualquier condición que comprometa gravemente la oxigenación del paciente.",
    },
    {
        question: "¿Cuáles son las diferencias clave entre el asma y la EPOC en cuanto a su fisiopatología?",
        answer: "El asma es una enfermedad inflamatoria crónica de las vías respiratorias caracterizada por hiperreactividad bronquial y obstrucción reversible del flujo de aire. La EPOC implica una obstrucción progresiva y generalmente irreversible del flujo de aire, con destrucción del parénquima pulmonar (enfisema) y/o inflamación crónica de los bronquios (bronquitis crónica).",
    },
    {
        question: "¿Qué consideraciones especiales se deben tener al evaluar y manejar a pacientes geriátricos con dificultad respiratoria?",
        answer: "Los pacientes geriátricos pueden presentar síntomas atípicos, tener múltiples comorbilidades que complican el cuadro, una menor reserva fisiológica y una respuesta disminuida a hipoxia. La evaluación debe ser minuciosa y el manejo cuidadoso, prestando atención a la hidratación y a los efectos secundarios de los medicamentos.",
    },
];

export const respiratoryEmergenciesExam: Question[] = [
    {
        question: "¿Cuál de las siguientes es una característica de la respiración adecuada en un adulto?",
        options: [
            { letter: "a", text: "Uso de músculos accesorios al respirar" },
            { letter: "b", text: "Frecuencia respiratoria de 24 respiraciones/min" },
            { letter: "c", text: "Sonidos respiratorios claros y uniformes" },
            { letter: "d", text: "Respiración con labios fruncidos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente presenta cianosis perioral y un esfuerzo respiratorio notable. Estos son signos de:",
        options: [
            { letter: "a", text: "Ventilación adecuada" },
            { letter: "b", text: "Hiperventilación efectiva" },
            { letter: "c", text: "Ventilación ineficaz" },
            { letter: "d", text: "Recuperación de la dificultad respiratoria" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el objetivo principal de la evaluación respiratoria durante la valoración primaria (ABCDE)?",
        options: [
            { letter: "a", text: "Detectar signos de intoxicación" },
            { letter: "b", text: "Determinar la necesidad de inmovilización espinal" },
            { letter: "c", text: "Identificar problemas que comprometen la vida inmediatamente y tratarlos" },
            { letter: "d", text: "Establecer un diagnóstico definitivo de la enfermedad subyacente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El sonido de burbujeo o gorgoteo al respirar (roncus) puede deberse a:",
        options: [
            { letter: "a", text: "Aire atrapado en el espacio pleural" },
            { letter: "b", text: "Líquidos o secreciones en la vía aérea superior o grandes bronquios" },
            { letter: "c", text: "Espasmo bronquial de las vías aéreas pequeñas" },
            { letter: "d", text: "Contracción excesiva del diafragma" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente asmático presenta sibilancias audibles y dificultad para hablar en frases completas. ¿Qué indica este hallazgo?",
        options: [
            { letter: "a", text: "El asma está bien controlada." },
            { letter: "b", text: "Hay una acumulación de líquido en los alvéolos." },
            { letter: "c", text: "Indica un estrechamiento significativo de las vías aéreas." },
            { letter: "d", text: "Se debe a una infección viral leve." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes condiciones es MENOS probable que cause sibilancias?",
        options: [
            { letter: "a", text: "Bronquitis" },
            { letter: "b", text: "Enfisema" },
            { letter: "c", text: "Epiglotitis" },
            { letter: "d", text: "Asma" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Durante la administración de albuterol nebulizado, ¿cuál de los siguientes NO es un efecto secundario esperado?",
        options: [
            { letter: "a", text: "Aumento de la frecuencia cardíaca" },
            { letter: "b", text: "Nerviosismo" },
            { letter: "c", text: "Bradicardia severa" },
            { letter: "d", text: "Temblores musculares" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con EPOC presenta una exacerbación. Además de la dificultad respiratoria, ¿cuál es un signo común en estos pacientes debido a la retención crónica de CO2?",
        options: [
            { letter: "a", text: "Piel seca y caliente" },
            { letter: "b", text: "Distensión venosa yugular" },
            { letter: "c", text: "Dedos en palillo de tambor (acropaquia)" },
            { letter: "d", text: "Respiración de Cheyne-Stokes" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con posible edema pulmonar, ¿qué sonido respiratorio esperaría escuchar y cuál es su causa?",
        options: [
            { letter: "a", text: "Sibilancias, por espasmo bronquial" },
            { letter: "b", text: "Estridor, por obstrucción de vía aérea superior" },
            { letter: "c", text: "Crepitantes (estertores), por líquido en los alvéolos" },
            { letter: "d", text: "Ronquidos, por relajación de la base de la lengua" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la velocidad de flujo de oxígeno apropiada para un paciente con dificultad respiratoria severa que necesita alto flujo?",
        options: [
            { letter: "a", text: "2 L/min por cánula nasal" },
            { letter: "b", text: "4 L/min por mascarilla simple" },
            { letter: "c", "text": "10-15 L/min por mascarilla con reservorio no recirculante" },
            { letter: "d", text: "6 L/min por cánula nasal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Cuando se evalúa a un paciente con tos persistente y producción de esputo, ¿qué condición se debe considerar especialmente si hay antecedentes de tabaquismo crónico?",
        options: [
            { letter: "a", text: "Neumonía aguda" },
            { letter: "b", text: "Asma bronquial" },
            { letter: "c", text: "Bronquitis crónica (parte de EPOC)" },
            { letter: "d", text: "Laringitis" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes NO es una medida de manejo inicial para un paciente con dificultad respiratoria aguda?",
        options: [
            { letter: "a", text: "Asegurar una vía aérea permeable" },
            { letter: "b", text: "Administrar oxígeno suplementario" },
            { letter: "c", text: "Obtener un historial médico completo detallado antes de cualquier intervención" },
            { letter: "d", text: "Posicionar al paciente para facilitar la respiración" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La tos perruna (tos 'de perro') y el estridor inspiratorio en un niño son signos clásicos de:",
        options: [
            { letter: "a", text: "Asma aguda" },
            { letter: "b", text: "Bronquiolitis" },
            { letter: "c", text: "Crup (laringotraqueobronquitis)" },
            { letter: "d", text: "Neumonía bacteriana" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes NO es una complicación potencial de la intubación endotraqueal?",
        options: [
            { letter: "a", text: "Intubación esofágica" },
            { letter: "b", text: "Trauma dental o de las vías aéreas" },
            { letter: "c", text: "Hipocapnia severa" },
            { letter: "d", text: "Barotrauma pulmonar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En un paciente con neumotórax espontáneo, ¿qué hallazgos esperaría encontrar en la evaluación primaria?",
        options: [
            { letter: "a", text: "Sonidos pulmonares aumentados bilateralmente" },
            { letter: "b", text: "Desviación traqueal hacia el lado afectado" },
            { letter: "c", text: "Dolor torácico súbito y disnea, con disminución o ausencia de ruidos pulmonares en el lado afectado" },
            { letter: "d", text: "Crepitantes difusos en ambos campos pulmonares" },
        ],
        correctAnswer: "c",
    },
];