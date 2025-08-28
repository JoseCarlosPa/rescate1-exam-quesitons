import {Question} from "../../../question.ts";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre 'capacidad' y 'competencia'?",
        answer: "La 'capacidad de tomar decisiones' es un término médico que evalúa si un paciente puede comprender, procesar y decidir sobre su atención médica. La 'competencia' es un término legal que determina un tribunal, aunque a menudo se usan indistintamente en el campo. Como TAMP, tu función es evaluar la capacidad de toma de decisiones del paciente.",
    },
    {
        question: "¿Qué es una Orden de No Reanimar (ONR) y cómo debo actuar?",
        answer: "Es un documento legal escrito por un médico que autoriza al personal de salud a no intentar la reanimación en caso de paro cardíaco. Debes respetar una ONR válida. Sin embargo, aun con una ONR, sigues obligado a proporcionar cuidados paliativos como oxígeno y manejo del dolor. Si tienes dudas sobre su validez, contacta al control médico. En ausencia de una orden, tienes la obligación de reanimar.",
    },
    {
        question: "¿Qué debo hacer si un paciente competente rechaza la atención, pero creo que su vida está en riesgo?",
        answer: "Un adulto competente tiene derecho a rechazar la atención, incluso si eso resulta en la muerte. Tu deber es explicarle claramente los riesgos, beneficios y alternativas, y las posibles consecuencias de su negativa. Documenta todo exhaustivamente, haz que firme un formulario de rechazo (si es posible con un testigo) y notifica al control médico.",
    },
    {
        question: "¿Cuándo aplica el consentimiento implícito?",
        answer: "El consentimiento implícito se asume legalmente cuando un paciente está inconsciente, tiene una capacidad mental alterada (p. ej., por drogas, alcohol o una lesión en la cabeza) o no puede tomar una decisión racional, y tiene una condición que amenaza su vida o integridad física. Este principio se conoce como la 'doctrina de emergencia'.",
    },
    {
        question: "¿Cómo debo manejar el consentimiento en menores de edad?",
        answer: "La ley requiere que un padre o tutor legal otorgue el consentimiento para un menor. Si no puedes localizar a los padres en una emergencia, puedes tratar al niño bajo consentimiento implícito. Los menores emancipados (casados, padres, o en las fuerzas armadas) pueden dar su propio consentimiento.",
    },
    {
        question: "¿Qué es el abandono y cómo puedo evitarlo?",
        answer: "El abandono es la terminación del cuidado sin el consentimiento del paciente y sin transferir la atención a un profesional de nivel igual o superior. Para evitarlo, asegúrate de que la transferencia del cuidado en el hospital sea recibida por personal adecuado (p. ej., una enfermera) y documenta esta transferencia, idealmente con una firma en tu reporte.",
    },
    {
        question: "¿Estoy obligado a reportar sospechas de abuso o un crimen?",
        answer: "Sí. Tienes la obligación legal de reportar sospechas de abuso infantil y, en muchas jurisdicciones, de abuso a personas mayores o 'en riesgo'. También debes reportar lesiones ocurridas durante la comisión de un delito grave, como heridas por arma de fuego. Al mismo tiempo, debes proteger la escena del crimen tanto como sea posible sin comprometer la atención al paciente.",
    }
];

export const legalQuestions: Question[] = [
    {
        "question": "Un paciente adulto, consciente y orientado, se niega a ser transportado tras un síncope. Usted le explica los riesgos, pero él insiste en su decisión. ¿Cuál es el principio que protege el derecho del paciente?",
        "options": [
            { "letter": "a", "text": "Consentimiento implícito" },
            { "letter": "b", "text": "Autonomía del paciente" },
            { "letter": "c", "text": "Deber de actuar" },
            { "letter": "d", "text": "Negligencia" }
        ],
        "correctAnswer": "b",
        "explanation": "El principio de autonomía del paciente establece que un adulto competente (consciente, orientado y capaz de tomar decisiones) tiene el derecho de aceptar o rechazar un tratamiento o transporte, incluso si esa decisión puede parecer perjudicial para su salud. El rol del paramédico es informar claramente los riesgos, documentar la negativa y no forzar el tratamiento."
    },
    {
        "question": "Llegas a la escena de una colisión vehicular y comienzas a atender a un paciente. Una segunda ambulancia llega y su tripulación asume el cuidado. Te retiras sin dar un reporte verbal al nuevo equipo. ¿Qué figura legal podría configurarse?",
        "options": [
            { "letter": "a", "text": "Asalto" },
            { "letter": "b", "text": "Agresión" },
            { "letter": "c", "text": "Abandono" },
            { "letter": "d", "text": "Incumplimiento de la confidencialidad" }
        ],
        "correctAnswer": "c",
        "explanation": "El abandono ocurre cuando un proveedor de atención médica inicia el cuidado de un paciente y luego lo termina sin asegurar la continuidad del cuidado con otra persona de igual o mayor nivel de capacitación. Una transferencia formal, que incluye un reporte verbal detallado, es crucial para evitar esta figura legal."
    },
    {
        "question": "Encuentras a un paciente inconsciente con una herida grave en la cabeza. No hay familiares presentes. El tratamiento de emergencia que proporcionas se justifica bajo el principio de:",
        "options": [
            { "letter": "a", "text": "Consentimiento informado" },
            { "letter": "b", "text": "Consentimiento expreso" },
            { "letter": "c", "text": "Doctrina de emergencia (consentimiento implícito)" },
            { "letter": "d", "text": "Ley del Buen Samaritano" }
        ],
        "correctAnswer": "c",
        "explanation": "El consentimiento implícito (o doctrina de emergencia) se aplica cuando un paciente está incapacitado y necesita atención de emergencia. La ley asume que una persona razonable en esa situación querría recibir ayuda para salvar su vida o evitar un daño grave, por lo que el tratamiento está justificado."
    },
    {
        "question": "Para que un paciente pueda demandar exitosamente por negligencia, debe probar cuatro elementos. ¿Cuál de los siguientes NO es uno de ellos?",
        "options": [
            { "letter": "a", "text": "Deber de actuar" },
            { "letter": "b", "text": "Incumplimiento del deber" },
            { "letter": "c", "text": "Intención maliciosa" },
            { "letter": "d", "text": "Daños y causalidad" }
        ],
        "correctAnswer": "c",
        "explanation": "La negligencia se prueba con cuatro elementos: 1) Deber de actuar, 2) Incumplimiento del deber (no actuar según el estándar de cuidado), 3) Daños (el paciente sufrió una lesión), y 4) Causalidad (la falta fue la causa directa del daño). La intención maliciosa no es un requisito; la negligencia puede ser un error no intencionado."
    },
    {
        "question": "Al explicar un procedimiento, sus riesgos y beneficios, y luego obtener el permiso verbal de un paciente para realizarlo, usted ha obtenido un:",
        "options": [
            { "letter": "a", "text": "Consentimiento implícito" },
            { "letter": "b", "text": "Consentimiento informado y expreso" },
            { "letter": "c", "text": "Consentimiento involuntario" },
            { "letter": "d", "text": "Poder notarial duradero" }
        ],
        "correctAnswer": "b",
        "explanation": "Este es un ejemplo de consentimiento informado (porque se explicaron riesgos y beneficios) y expreso (porque el paciente dio un permiso claro y directo, en este caso, verbal). Es la base para realizar procedimientos en pacientes competentes."
    },
    {
        "question": "Un niño de 10 años tiene una fractura expuesta en un parque. Los padres no son localizables. ¿Bajo qué principio puede tratar al niño?",
        "options": [
            { "letter": "a", "text": "Consentimiento del personal del parque" },
            { "letter": "b", "text": "Consentimiento implícito" },
            { "letter": "c", "text": "Debe esperar a los padres sin excepción" },
            { "letter": "d", "text": "In loco parentis (si un maestro está presente)" }
        ],
        "correctAnswer": "b",
        "explanation": "En una emergencia que amenaza la vida o una extremidad de un menor y sin un tutor disponible, se aplica el consentimiento implícito. La ley asume que los padres querrían que su hijo recibiera la atención necesaria. Esperar sería peligroso y contrario al estándar de cuidado."
    },
    {
        "question": "Colocar una férula en el brazo de un paciente competente que ha dicho claramente 'No me toquen', podría constituir:",
        "options": [
            { "letter": "a", "text": "Negligencia" },
            { "letter": "b", "text": "Agresión (battery)" },
            { "letter": "c", "text": "Difamación" },
            { "letter": "d", "text": "Abandono" }
        ],
        "correctAnswer": "b",
        "explanation": "En términos legales, la agresión (battery) es el contacto físico intencionado y no consentido con otra persona. Si un paciente competente rechaza la atención, tocarlo en contra de su voluntad para administrar tratamiento, sin importar la buena intención, constituye agresión."
    },
    {
        "question": "Un documento que especifica los deseos de tratamiento de un paciente en caso de que pierda la capacidad de tomar decisiones se conoce como:",
        "options": [
            { "letter": "a", "text": "Informe de atención prehospitalaria (RAPP)" },
            { "letter": "b", "text": "Instrucción anticipada (testamento vital)" },
            { "letter": "c", "text": "Certificado de defunción" },
            { "letter": "d", "text": "Formulario de consentimiento" }
        ],
        "correctAnswer": "b",
        "explanation": "Una instrucción anticipada (también llamada directiva avanzada o testamento vital) es un documento legal que permite a una persona establecer sus deseos sobre el tratamiento médico. Puede incluir una Orden de No Reanimar (ONR) y asegura que su autonomía se respete incluso si pierde la capacidad de decisión."
    },
    {
        "question": "Un paciente con una ONR válida y firmada entra en paro cardíaco. La familia, en pánico, le exige que inicie RCP. ¿Cuál es su acción más apropiada?",
        "options": [
            { "letter": "a", "text": "Iniciar RCP para calmar a la familia" },
            { "letter": "b", "text": "Explicar calmadamente que la ONR debe ser respetada y proporcionar cuidados de confort" },
            { "letter": "c", "text": "Ignorar la ONR porque la familia lo exige" },
            { "letter": "d", "text": "Retirarse de la escena inmediatamente" }
        ],
        "correctAnswer": "b",
        "explanation": "Una Orden de No Reanimar (ONR) válida es un mandato legal que debe ser respetado por encima de los deseos de la familia. La acción correcta y ética es honrar la voluntad del paciente, explicar con empatía a la familia la situación y proporcionar cuidados de confort y apoyo."
    },
    {
        "question": "La transferencia de cuidado de un paciente debe realizarse a un proveedor de atención médica que sea:",
        "options": [
            { "letter": "a", "text": "Cualquier persona dispuesta en el hospital" },
            { "letter": "b", "text": "Un oficial de policía o de seguridad" },
            { "letter": "c", "text": "De un nivel de capacitación igual o superior al suyo" },
            { "letter": "d", "text": "El familiar más cercano del paciente" }
        ],
        "correctAnswer": "c",
        "explanation": "Para evitar el abandono, la transferencia de cuidado debe ser a una persona con una certificación o licencia de nivel igual o superior (ej. paramédico a enfermera o médico). Esta persona debe ser capaz de comprender el reporte y asumir la responsabilidad completa del paciente."
    },
    {
        "question": "Usted está obligado por la ley HIPAA a proteger la información de salud del paciente (PHI). ¿Cuál de las siguientes acciones es una violación de HIPAA?",
        "options": [
            { "letter": "a", "text": "Dar un reporte por radio al hospital receptor" },
            { "letter": "b", "text": "Publicar una foto de la escena (sin el paciente) en redes sociales" },
            { "letter": "c", "text": "Discutir el caso con su compañero en la ambulancia" },
            { "letter": "d", "text": "Comentar con su cónyuge el nombre y diagnóstico de un paciente que atendió" }
        ],
        "correctAnswer": "d",
        "explanation": "La información de salud protegida (PHI) solo debe compartirse con quienes están directamente involucrados en el cuidado del paciente (círculo de atención). Compartir detalles que puedan identificar a un paciente (nombre, diagnóstico) con personas no autorizadas, como familiares o amigos, es una clara violación de la confidencialidad."
    },
    {
        "question": "Amenazar a un paciente diciéndole 'Si no se calma, lo voy a amarrar a la camilla' podría ser considerado:",
        "options": [
            { "letter": "a", "text": "Agresión (battery)" },
            { "letter": "b", "text": "Asalto (assault)" },
            { "letter": "c", "text": "Práctica estándar" },
            { "letter": "d", "text": "Difamación" }
        ],
        "correctAnswer": "b",
        "explanation": "Legalmente, el asalto (assault) consiste en crear en una persona el temor razonable de un contacto físico dañino o no deseado. La amenaza verbal es el ejemplo clásico de asalto. Si después de la amenaza se realiza el contacto físico sin consentimiento, se convierte en agresión (battery)."
    }
];

export const legalChallengingQuestions: Question[] = [
    {
        question: "¿Cuál es la diferencia legal entre negligencia y mala praxis?",
        options: [
            { letter: "a", text: "La negligencia es intencional, la mala praxis no" },
            { letter: "b", text: "La mala praxis requiere daño comprobable, la negligencia no" },
            { letter: "c", text: "La negligencia es un error involuntario, la mala praxis implica violar estándares profesionales" },
            { letter: "d", text: "Ambas son lo mismo" }
        ],
        correctAnswer: "c",
        explanation: "La negligencia es la falta de cuidado razonable, mientras que la mala praxis implica violar estándares profesionales y causar daño por ello."
    },
    {
        question: "¿En qué situación un menor puede dar consentimiento informado por sí mismo?",
        options: [
            { letter: "a", text: "Nunca" },
            { letter: "b", text: "Si es emancipado legalmente" },
            { letter: "c", text: "Solo si está acompañado de un adulto" },
            { letter: "d", text: "Si tiene más de 16 años" }
        ],
        correctAnswer: "b",
        explanation: "Un menor emancipado (casado, padre, militar) puede dar consentimiento informado por sí mismo."
    }
];
