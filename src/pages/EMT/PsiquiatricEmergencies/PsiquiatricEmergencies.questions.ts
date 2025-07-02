import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una crisis conductual y una emergencia psiquiátrica?",
        answer: "Una crisis conductual es cuando una persona reacciona a eventos de una manera que interfiere con su vida diaria o se vuelve inaceptable para su entorno. Se convierte en una emergencia psiquiátrica cuando el comportamiento de la persona la pone en riesgo de hacerse daño a sí misma o a otros.",
    },
    {
        question: "Antes de concluir que una emergencia es de origen psiquiátrico, ¿qué se debe descartar primero?",
        answer: "Siempre se deben descartar primero las causas médicas u orgánicas. Condiciones como la hipoxia (falta de oxígeno), la hipoglucemia (azúcar baja en sangre), un traumatismo craneoencefálico, el abuso de sustancias o una infección pueden presentarse con cambios de comportamiento que imitan un problema psiquiátrico.",
    },
    {
        question: "¿Cuál es la prioridad número uno al responder a una llamada por una emergencia conductual?",
        answer: "La seguridad de la escena. El rescatador debe evaluar si hay amenazas, identificar una ruta de salida y solicitar la presencia de la policía si el paciente es violento o la escena es insegura.",
    },
    {
        question: "¿Qué es la psicosis?",
        answer: "La psicosis es un estado mental en el que la persona pierde el contacto con la realidad. Puede manifestarse a través de delirios (creencias falsas), alucinaciones (ver o escuchar cosas que no existen) y un pensamiento o discurso desorganizado.",
    },
    {
        question: "¿Qué es el delirio agitado y por qué es una emergencia médica grave?",
        answer: "El delirio agitado es un estado de agitación extrema, violencia, paranoia y fuerza inusual, a menudo asociado con el abuso de estimulantes. Es una emergencia médica grave porque los pacientes tienen un alto riesgo de muerte súbita debido a acidosis, rabdomiólisis o paro cardíaco.",
    },
    {
        question: "Al evaluar a un paciente con ideas suicidas, ¿cuál es uno de los factores más importantes a determinar?",
        answer: "Uno de los factores más importantes es determinar si el paciente tiene un plan específico y los medios para llevarlo a cabo. Un plan detallado aumenta significativamente el riesgo de un intento de suicidio.",
    },
    {
        question: "¿Cuáles son los principios clave para la comunicación con un paciente en crisis conductual?",
        answer: "Los principios clave incluyen hablar con calma, ser honesto y directo, escuchar activamente sin juzgar, mantener contacto visual y un lenguaje corporal abierto, y no 'seguirle el juego' a las alucinaciones, pero tampoco discutir sobre ellas.",
    },
    {
        question: "¿Cuándo y cómo se debe restringir a un paciente?",
        answer: "La restricción física es el último recurso, usado solo para proteger al paciente o a otros de un daño inminente. Requiere personal suficiente (idealmente uno por cada extremidad), el uso de restricciones blandas y nunca se debe colocar al paciente en posición prona (boca abajo) debido al riesgo de asfixia posicional. Se debe monitorizar constantemente al paciente después de la restricción.",
    },
];


export const psiquiatricQuestions: Question[] = [
    {
        question: "Usted es llamado a una escena donde un hombre de 30 años está actuando de forma errática. ¿Cuál de las siguientes acciones debe realizar PRIMERO?",
        options: [
            { letter: "a", text: "Acercarse rápidamente al paciente para evaluar su pulso" },
            { letter: "b", text: "Evaluar la seguridad de la escena desde la distancia antes de acercarse" },
            { letter: "c", text: "Preparar inmediatamente las restricciones físicas" },
            { letter: "d", text: "Asumir que es una emergencia puramente psiquiátrica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente diabético de 65 años presenta un inicio súbito de confusión, agresividad y habla incoherente. ¿Qué causa médica debe sospechar y evaluar prioritariamente?",
        options: [
            { letter: "a", text: "Esquizofrenia" },
            { letter: "b", text: "Depresión" },
            { letter: "c", text: "Hipoglucemia" },
            { letter: "d", text: "Trastorno de ansiedad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al hablar con un paciente que expresa el deseo de quitarse la vida, ¿cuál de las siguientes preguntas es más importante para evaluar el riesgo inmediato?",
        options: [
            { letter: "a", text: "¿Por qué se siente así?" },
            { letter: "b", text: "¿Tiene un plan específico para hacerlo?" },
            { letter: "c", text: "¿Ha pensado en buscar ayuda profesional?" },
            { letter: "d", text: "¿Sabe que eso afectaría a su familia?" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente muestra una fuerza física inusual, es insensible al dolor, está muy sudoroso y paranoico. Este cuadro es más consistente con:",
        options: [
            { letter: "a", text: "Psicosis aguda" },
            { letter: "b", text: "Una reacción de duelo" },
            { letter: "c", text: "Delirio agitado" },
            { letter: "d", text: "Un ataque de pánico" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al aplicar restricciones físicas a un paciente violento, ¿cuál de las siguientes acciones es incorrecta y peligrosa?",
        options: [
            { letter: "a", text: "Usar suficiente personal para controlar al paciente de forma segura" },
            { letter: "b", text: "Colocar al paciente en posición prona (boca abajo) para un mejor control" },
            { letter: "c", text: "Evaluar el pulso, la motricidad y la sensibilidad de las extremidades después de la restricción" },
            { letter: "d", text: "Usar restricciones blandas para minimizar el riesgo de lesiones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Usted está tratando a un paciente que experimenta alucinaciones auditivas. La estrategia de comunicación más apropiada es:",
        options: [
            { letter: "a", text: "Confirmar que usted también escucha las voces para ganar su confianza" },
            { letter: "b", text: "Ignorar por completo lo que el paciente dice sobre las voces" },
            { letter: "c", text: "Decirle que las voces no son reales y que está equivocado" },
            { letter: "d", text: "Reconocer que el paciente escucha las voces, pero explicarle que usted no las oye" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Un paciente con un trastorno de estrés postraumático (TEPT) puede presentar una reacción exagerada a estímulos que le recuerden su trauma. Su manejo debe incluir:",
        options: [
            { letter: "a", text: "Un entorno tranquilo y evitar movimientos bruscos o ruidos fuertes" },
            { letter: "b", text: "Hablar en voz alta y con firmeza para mantener el control" },
            { letter: "c", text: "Restringirlo inmediatamente para prevenir una reacción violenta" },
            { letter: "d", text: "Pedirle que describa el evento traumático en detalle para entenderlo mejor" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El consentimiento para tratar a un paciente que no está orientado y representa un peligro para sí mismo se basa generalmente en el principio de:",
        options: [
            { letter: "a", text: "Consentimiento informado" },
            { letter: "b", text: "Consentimiento expresado" },
            { letter: "c", text: "Consentimiento implícito" },
            { letter: "d", text: "Se debe esperar a un familiar para obtener el consentimiento" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La psicosis se diferencia de otras crisis conductuales principalmente por:",
        options: [
            { letter: "a", text: "La presencia de tristeza y desesperanza" },
            { letter: "b", text: "La presencia de un deterioro del contacto con la realidad" },
            { letter: "c", text: "La presencia de ansiedad y miedo" },
            { letter: "d", text: "La presencia de un comportamiento violento" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La principal razón para involucrar a la policía en una emergencia psiquiátrica es:",
        options: [
            { letter: "a", text: "Para que diagnostiquen al paciente" },
            { letter: "b", text: "Para que autoricen el tratamiento médico" },
            { letter: "c", text: "Para garantizar la seguridad del paciente y del equipo de SVA/SEM cuando hay riesgo de violencia" },
            { letter: "d", text: "Para que transporten al paciente en la patrulla" },
        ],
        correctAnswer: "c",
    },
];