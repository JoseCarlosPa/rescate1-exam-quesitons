import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué define a un paciente con necesidades especiales?",
        answer: "Son aquellos pacientes que requieren consideraciones adicionales debido a condiciones físicas, mentales, emocionales o sociales que pueden afectar su capacidad para comunicarse, cooperar o recibir atención médica estándar.",
    },
    {
        question: "¿Cuáles son los principios fundamentales para atender a pacientes con necesidades especiales?",
        answer: "Los principios incluyen: respeto y dignidad, comunicación efectiva, no discriminación, adaptación de técnicas según las necesidades, trabajo con cuidadores familiares, y considerar las limitaciones específicas de cada condición.",
    },
    {
        question: "¿Cómo debo comunicarme con un paciente con discapacidad intelectual?",
        answer: "Use lenguaje simple y directo, hable despacio, dé una instrucción a la vez, permita tiempo extra para respuestas, sea paciente, y confirme comprensión. Evite hablar como si fuera un niño pequeño.",
    },
    {
        question: "¿Qué consideraciones especiales debo tener con pacientes autistas?",
        answer: "Minimice estímulos sensoriales (luces brillantes, ruidos fuertes), mantenga rutinas predecibles, evite cambios bruscos, permita que cuidadores familiares permanezcan cerca, y respete su espacio personal.",
    },
    {
        question: "¿Cómo manejo a un paciente dependiente de ventilador domiciliario?",
        answer: "Nunca desconecte sin tener BVM listo, transporte con el ventilador si es posible, conozca configuraciones básicas, tenga plan de respaldo para fallas eléctricas, y monitorice alarmas continuamente.",
    },
    {
        question: "¿Qué debo hacer si un paciente con necesidades especiales se encuentra agitado o agresivo?",
        answer: "Mantenga la calma, hable con voz suave, dé espacio personal, evite movimientos amenazantes, involucre a cuidadores familiares, ofrezca opciones cuando sea posible, y considere apoyo policial si es necesario.",
    },
    {
        question: "¿Cuándo está indicado el uso de restricciones físicas?",
        answer: "Solo cuando sea absolutamente necesario para la seguridad del paciente o personal, siguiendo protocolos locales. Debe monitorizarse continuamente la respiración y circulación, y documentar la razón médica.",
    },
    {
        question: "¿Qué consideraciones especiales tengo para el transporte de pacientes obesos mórbidos?",
        answer: "Use camilla bariátrica, solicite personal adicional, considere dispositivos de levantamiento especiales, evalúe vía aérea cuidadosamente (riesgo aumentado), y planifique rutas de acceso apropiadas.",
    },
];

export const specialNeedsPacientQuestions: Question[] = [
    {
        question: "¿Cuál es el principio más importante al atender a un paciente con necesidades especiales?",
        options: [
            { letter: "a", text: "Completar la evaluación lo más rápido posible" },
            { letter: "b", text: "Hablar únicamente con el cuidador familiar" },
            { letter: "c", text: "Tratar al paciente con respeto y dignidad" },
            { letter: "d", text: "Aplicar restricciones físicas preventivamente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al comunicarse con un paciente con discapacidad auditiva, la estrategia MÁS apropiada es:",
        options: [
            { letter: "a", text: "Hablar muy fuerte y lentamente" },
            { letter: "b", text: "Dirigirse únicamente al intérprete" },
            { letter: "c", text: "Usar gestos simples y contacto visual directo" },
            { letter: "d", text: "Evitar cualquier contacto visual" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente con trastorno del espectro autista se encuentra agitado durante la evaluación. ¿Cuál es la intervención inicial más apropiada?",
        options: [
            { letter: "a", text: "Aplicar restricciones físicas inmediatamente" },
            { letter: "b", text: "Minimizar estímulos sensoriales en el ambiente" },
            { letter: "c", text: "Aumentar la velocidad de la evaluación" },
            { letter: "d", text: "Separar al paciente de sus cuidadores" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al encontrar un paciente dependiente de ventilador domiciliario con falla del equipo, la acción INMEDIATA es:",
        options: [
            { letter: "a", text: "Intentar reparar el ventilador" },
            { letter: "b", text: "Desconectar al paciente y llamar al hospital" },
            { letter: "c", text: "Conectar BVM y ventilar manualmente" },
            { letter: "d", text: "Esperar a que llegue personal técnico especializado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes NO es una consideración apropiada para pacientes con discapacidad intelectual?",
        options: [
            { letter: "a", text: "Usar lenguaje simple y directo" },
            { letter: "b", text: "Permitir tiempo extra para respuestas" },
            { letter: "c", text: "Hablar como si fuera un niño pequeño" },
            { letter: "d", text: "Confirmar comprensión frecuentemente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Las restricciones físicas en pacientes con necesidades especiales están indicadas:",
        options: [
            { letter: "a", text: "En todos los casos para facilitar el examen" },
            { letter: "b", text: "Solo cuando sea absolutamente necesario para la seguridad" },
            { letter: "c", text: "Cuando el paciente tiene discapacidad intelectual" },
            { letter: "d", text: "Como medida preventiva estándar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al evaluar a un paciente con síndrome de Down que presenta dolor abdominal, es importante considerar:",
        options: [
            { letter: "a", text: "Que no puede sentir dolor debido a su condición" },
            { letter: "b", text: "Condiciones médicas asociadas comunes en este síndrome" },
            { letter: "c", text: "Que siempre requiere sedación" },
            { letter: "d", text: "Que no puede dar consentimiento informado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la consideración MÁS importante al transportar a un paciente obeso mórbido?",
        options: [
            { letter: "a", text: "Usar la camilla estándar con correas adicionales" },
            { letter: "b", text: "Solicitar personal adicional y equipo bariátrico" },
            { letter: "c", text: "Evitar el transporte y tratar en el lugar" },
            { letter: "d", text: "Trasladar únicamente en posición supina" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al atender a un paciente con discapacidad visual, es apropiado:",
        options: [
            { letter: "a", text: "Mover su bastón blanco sin avisar" },
            { letter: "b", text: "Describir verbalmente las acciones que va a realizar" },
            { letter: "c", text: "Hablar más fuerte de lo normal" },
            { letter: "d", text: "Evitar mencionar palabras como 'ver' o 'mirar'" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con traqueostomía presenta secreciones abundantes. La acción prioritaria es:",
        options: [
            { letter: "a", text: "Administrar oxígeno por mascarilla facial" },
            { letter: "b", text: "Aspirar secreciones del estoma de traqueostomía" },
            { letter: "c", text: "Posicionar al paciente en decúbito supino" },
            { letter: "d", text: "Cambiar la cánula de traqueostomía inmediatamente" },
        ],
        correctAnswer: "b",
    }
];