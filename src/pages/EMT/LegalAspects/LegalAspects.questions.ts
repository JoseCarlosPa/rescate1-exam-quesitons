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
            {"letter": "a", "text": "Consentimiento implícito"},
            {"letter": "b", "text": "Autonomía del paciente"},
            {"letter": "c", "text": "Deber de actuar"},
            {"letter": "d", "text": "Negligencia"}
        ],
        "correctAnswer": "b",
        "explanation": "El principio de autonomía del paciente establece que un adulto competente (consciente, orientado y capaz de tomar decisiones) tiene el derecho de aceptar o rechazar un tratamiento o transporte, incluso si esa decisión puede parecer perjudicial para su salud. El rol del paramédico es informar claramente los riesgos, documentar la negativa y no forzar el tratamiento."
    },
    {
        "question": "Llegas a la escena de una colisión vehicular y comienzas a atender a un paciente. Una segunda ambulancia llega y su tripulación asume el cuidado. Te retiras sin dar un reporte verbal al nuevo equipo. ¿Qué figura legal podría configurarse?",
        "options": [
            {"letter": "a", "text": "Asalto"},
            {"letter": "b", "text": "Agresión"},
            {"letter": "c", "text": "Abandono"},
            {"letter": "d", "text": "Incumplimiento de la confidencialidad"}
        ],
        "correctAnswer": "c",
        "explanation": "El abandono ocurre cuando un proveedor de atención médica inicia el cuidado de un paciente y luego lo termina sin asegurar la continuidad del cuidado con otra persona de igual o mayor nivel de capacitación. Una transferencia formal, que incluye un reporte verbal detallado, es crucial para evitar esta figura legal."
    },
    {
        "question": "Encuentras a un paciente inconsciente con una herida grave en la cabeza. No hay familiares presentes. El tratamiento de emergencia que proporcionas se justifica bajo el principio de:",
        "options": [
            {"letter": "a", "text": "Consentimiento informado"},
            {"letter": "b", "text": "Consentimiento expreso"},
            {"letter": "c", "text": "Doctrina de emergencia (consentimiento implícito)"},
            {"letter": "d", "text": "Ley del Buen Samaritano"}
        ],
        "correctAnswer": "c",
        "explanation": "El consentimiento implícito (o doctrina de emergencia) se aplica cuando un paciente está incapacitado y necesita atención de emergencia. La ley asume que una persona razonable en esa situación querría recibir ayuda para salvar su vida o evitar un daño grave, por lo que el tratamiento está justificado."
    },
    {
        "question": "Para que un paciente pueda demandar exitosamente por negligencia, debe probar cuatro elementos. ¿Cuál de los siguientes NO es uno de ellos?",
        "options": [
            {"letter": "a", "text": "Deber de actuar"},
            {"letter": "b", "text": "Incumplimiento del deber"},
            {"letter": "c", "text": "Intención maliciosa"},
            {"letter": "d", "text": "Daños y causalidad"}
        ],
        "correctAnswer": "c",
        "explanation": "La negligencia se prueba con cuatro elementos: 1) Deber de actuar, 2) Incumplimiento del deber (no actuar según el estándar de cuidado), 3) Daños (el paciente sufrió una lesión), y 4) Causalidad (la falta fue la causa directa del daño). La intención maliciosa no es un requisito; la negligencia puede ser un error no intencionado."
    },
    {
        "question": "Al explicar un procedimiento, sus riesgos y beneficios, y luego obtener el permiso verbal de un paciente para realizarlo, usted ha obtenido un:",
        "options": [
            {"letter": "a", "text": "Consentimiento implícito"},
            {"letter": "b", "text": "Consentimiento informado y expreso"},
            {"letter": "c", "text": "Consentimiento involuntario"},
            {"letter": "d", "text": "Poder notarial duradero"}
        ],
        "correctAnswer": "b",
        "explanation": "Este es un ejemplo de consentimiento informado (porque se explicaron riesgos y beneficios) y expreso (porque el paciente dio un permiso claro y directo, en este caso, verbal). Es la base para realizar procedimientos en pacientes competentes."
    },
    {
        "question": "Un niño de 10 años tiene una fractura expuesta en un parque. Los padres no son localizables. ¿Bajo qué principio puede tratar al niño?",
        "options": [
            {"letter": "a", "text": "Consentimiento del personal del parque"},
            {"letter": "b", "text": "Consentimiento implícito"},
            {"letter": "c", "text": "Debe esperar a los padres sin excepción"},
            {"letter": "d", "text": "In loco parentis (si un maestro está presente)"}
        ],
        "correctAnswer": "b",
        "explanation": "En una emergencia que amenaza la vida o una extremidad de un menor y sin un tutor disponible, se aplica el consentimiento implícito. La ley asume que los padres querrían que su hijo recibiera la atención necesaria. Esperar sería peligroso y contrario al estándar de cuidado."
    },
    {
        "question": "Colocar una férula en el brazo de un paciente competente que ha dicho claramente 'No me toquen', podría constituir:",
        "options": [
            {"letter": "a", "text": "Negligencia"},
            {"letter": "b", "text": "Agresión (battery)"},
            {"letter": "c", "text": "Difamación"},
            {"letter": "d", "text": "Abandono"}
        ],
        "correctAnswer": "b",
        "explanation": "En términos legales, la agresión (battery) es el contacto físico intencionado y no consentido con otra persona. Si un paciente competente rechaza la atención, tocarlo en contra de su voluntad para administrar tratamiento, sin importar la buena intención, constituye agresión."
    },
    {
        "question": "Un documento que especifica los deseos de tratamiento de un paciente en caso de que pierda la capacidad de tomar decisiones se conoce como:",
        "options": [
            {"letter": "a", "text": "Informe de atención prehospitalaria (RAPP)"},
            {"letter": "b", "text": "Instrucción anticipada (testamento vital)"},
            {"letter": "c", "text": "Certificado de defunción"},
            {"letter": "d", "text": "Formulario de consentimiento"}
        ],
        "correctAnswer": "b",
        "explanation": "Una instrucción anticipada (también llamada directiva avanzada o testamento vital) es un documento legal que permite a una persona establecer sus deseos sobre el tratamiento médico. Puede incluir una Orden de No Reanimar (ONR) y asegura que su autonomía se respete incluso si pierde la capacidad de decisión."
    },
    {
        "question": "Un paciente con una ONR válida y firmada entra en paro cardíaco. La familia, en pánico, le exige que inicie RCP. ¿Cuál es su acción más apropiada?",
        "options": [
            {"letter": "a", "text": "Iniciar RCP para calmar a la familia"},
            {
                "letter": "b",
                "text": "Explicar calmadamente que la ONR debe ser respetada y proporcionar cuidados de confort"
            },
            {"letter": "c", "text": "Ignorar la ONR porque la familia lo exige"},
            {"letter": "d", "text": "Retirarse de la escena inmediatamente"}
        ],
        "correctAnswer": "b",
        "explanation": "Una Orden de No Reanimar (ONR) válida es un mandato legal que debe ser respetado por encima de los deseos de la familia. La acción correcta y ética es honrar la voluntad del paciente, explicar con empatía a la familia la situación y proporcionar cuidados de confort y apoyo."
    },
    {
        "question": "La transferencia de cuidado de un paciente debe realizarse a un proveedor de atención médica que sea:",
        "options": [
            {"letter": "a", "text": "Cualquier persona dispuesta en el hospital"},
            {"letter": "b", "text": "Un oficial de policía o de seguridad"},
            {"letter": "c", "text": "De un nivel de capacitación igual o superior al suyo"},
            {"letter": "d", "text": "El familiar más cercano del paciente"}
        ],
        "correctAnswer": "c",
        "explanation": "Para evitar el abandono, la transferencia de cuidado debe ser a una persona con una certificación o licencia de nivel igual o superior (ej. paramédico a enfermera o médico). Esta persona debe ser capaz de comprender el reporte y asumir la responsabilidad completa del paciente."
    },
    {
        "question": "Usted está obligado por la ley HIPAA a proteger la información de salud del paciente (PHI). ¿Cuál de las siguientes acciones es una violación de HIPAA?",
        "options": [
            {"letter": "a", "text": "Dar un reporte por radio al hospital receptor"},
            {"letter": "b", "text": "Publicar una foto de la escena (sin el paciente) en redes sociales"},
            {"letter": "c", "text": "Discutir el caso con su compañero en la ambulancia"},
            {"letter": "d", "text": "Comentar con su cónyuge el nombre y diagnóstico de un paciente que atendió"}
        ],
        "correctAnswer": "d",
        "explanation": "La información de salud protegida (PHI) solo debe compartirse con quienes están directamente involucrados en el cuidado del paciente (círculo de atención). Compartir detalles que puedan identificar a un paciente (nombre, diagnóstico) con personas no autorizadas, como familiares o amigos, es una clara violación de la confidencialidad."
    },
    {
        "question": "Amenazar a un paciente diciéndole 'Si no se calma, lo voy a amarrar a la camilla' podría ser considerado:",
        "options": [
            {"letter": "a", "text": "Agresión (battery)"},
            {"letter": "b", "text": "Asalto (assault)"},
            {"letter": "c", "text": "Práctica estándar"},
            {"letter": "d", "text": "Difamación"}
        ],
        "correctAnswer": "b",
        "explanation": "Legalmente, el asalto (assault) consiste en crear en una persona el temor razonable de un contacto físico dañino o no deseado. La amenaza verbal es el ejemplo clásico de asalto. Si después de la amenaza se realiza el contacto físico sin consentimiento, se convierte en agresión (battery)."
    }
];

export const legalChallengingQuestions: Question[] = [
    {
        question: "Un paciente de 45 años con antecedentes de esquizofrenia presenta comportamiento agresivo tras un accidente vehicular. Está desorientado, grita incoherencias y tiene una laceración sangrante en el cuero cabelludo. Su hermana llega y dice que él 'nunca acepta tratamiento médico' y presenta un documento que parece ser una directiva anticipada. ¿Cuál es el manejo legal más apropiado?",
        options: [
            {letter: "a", text: "Respetar la directiva anticipada y no tratar al paciente"},
            {
                letter: "b",
                text: "Evaluar la capacidad actual del paciente y actuar bajo consentimiento implícito si está incapacitado"
            },
            {letter: "c", text: "Esperar a que llegue la policía para autorizar el tratamiento"},
            {letter: "d", text: "Solo tratar si la hermana firma un formulario de responsabilidad"}
        ],
        correctAnswer: "b",
        explanation: "Las directivas anticipadas no se aplican en situaciones de emergencia aguda cuando el paciente está incapacitado debido a una lesión traumática. La desorientación y comportamiento alterado sugieren incapacidad temporal. El consentimiento implícito permite el tratamiento necesario para salvar la vida, especialmente con una laceración sangrante que requiere atención inmediata."
    },
    {
        question: "Durante una emergencia médica en una escuela, una maestra de 16 años que está embarazada de 7 meses presenta trabajo de parto prematuro. Los padres de la menor no están disponibles y ella rechaza el transporte diciendo 'puedo esperar hasta mañana'. La directora de la escuela dice que autorizará el tratamiento. ¿Qué principio legal aplicaría?",
        options: [
            {letter: "a", text: "La directora puede dar consentimiento como autoridad escolar"},
            {letter: "b", text: "La menor embarazada puede dar su propio consentimiento médico"},
            {letter: "c", text: "Debe esperar a los padres sin excepción"},
            {letter: "d", text: "Solo puede actuar si hay riesgo inmediato de muerte"}
        ],
        correctAnswer: "b",
        explanation: "En la mayoría de jurisdicciones, una menor embarazada se considera emancipada para asuntos relacionados con su embarazo y puede dar consentimiento médico. Sin embargo, si su negativa pone en riesgo tanto su vida como la del feto (trabajo de parto prematuro), se debe evaluar cuidadosamente su capacidad de tomar decisiones informadas y documentar exhaustivamente mientras se busca asesoría médica."
    },
    {
        question: "Responde a una llamada donde un hombre de 70 años con demencia avanzada está en paro cardíaco. Su esposa presenta una ONR firmada hace 2 años, pero su hijo adulto argumenta que 'papá había mejorado últimamente' y demanda RCP. El documento ONR no especifica las condiciones de la demencia. ¿Cuál es la acción más apropiada?",
        options: [
            {letter: "a", text: "Iniciar RCP porque la ONR es muy antigua"},
            {letter: "b", text: "No iniciar RCP y proporcionar solo cuidados de confort"},
            {
                letter: "c",
                text: "Contactar control médico para orientación mientras proporciona cuidados básicos de soporte"
            },
            {letter: "d", text: "Permitir que la familia vote sobre el tratamiento"}
        ],
        correctAnswer: "c",
        explanation: "Esta situación presenta un dilema ético-legal complejo. Una ONR válida debe respetarse, pero cuando hay disputas familiares y circunstancias cambiantes en la condición del paciente, es prudente contactar al control médico. Mientras tanto, se pueden proporcionar cuidados básicos de soporte (oxígeno, vía aérea) que no constituyen RCP completa, documentando todo el proceso."
    },
    {
        question: "Un paramédico fuera de servicio presencia un accidente vehicular. Inicia atención de emergencia y estabiliza a un paciente crítico. Cuando llega la ambulancia oficial, el paramédico de turno tiene menos experiencia y comete un error en el manejo de la vía aérea, resultando en hipoxia prolongada. El paciente posteriormente demanda por daños. ¿Cuál es la situación legal del paramédico fuera de servicio?",
        options: [
            {letter: "a", text: "Es completamente responsable por no supervisar al paramédico menos experimentado"},
            {letter: "b", text: "No tiene responsabilidad legal una vez que transfiere el cuidado apropiadamente"},
            {letter: "c", text: "Comparte responsabilidad por no intervenir cuando vio el error"},
            {letter: "d", text: "Solo es responsable si no documentó la transferencia adecuadamente"}
        ],
        correctAnswer: "b",
        explanation: "Una vez que el paramédico fuera de servicio transfiere apropiadamente el cuidado al personal oficial con un reporte completo, su responsabilidad legal termina. No tiene autoridad para supervisar o interferir con el personal oficial en servicio, y hacerlo podría crear confusión en la cadena de mando. La responsabilidad por errores subsecuentes recae en el personal que asumió oficialmente el cuidado."
    },
    {
        question: "Atiende a una mujer de 28 años víctima de violencia doméstica con m��ltiples contusiones y una posible fractura de costillas. Ella suplica que no llame a la policía porque 'él me matará si se entera'. Su esposo llega a la escena y insiste en acompañarla, mostrándose muy controlador. La paciente cambia su historia y minimiza sus lesiones. ¿Cuál es su obligación legal y ética?",
        options: [
            {letter: "a", text: "Respetar los deseos de la paciente y no reportar"},
            {letter: "b", text: "Reportar inmediatamente a la policía sin consentimiento de la paciente"},
            {
                letter: "c",
                text: "Seguir los protocolos de reporte de violencia doméstica de su jurisdicción mientras garantiza la seguridad de la paciente"
            },
            {letter: "d", text: "Solo documentar las lesiones sin tomar acción adicional"}
        ],
        correctAnswer: "c",
        explanation: "Las leyes de reporte de violencia doméstica varían por jurisdicción, pero generalmente los proveedores de salud tienen obligaciones específicas de reporte. Es crucial seguir los protocolos locales mientras se prioriza la seguridad de la paciente. Esto puede incluir coordinación discreta con las fuerzas del orden, documentación fotográfica si está permitida, y conexión con recursos de violencia doméstica."
    },
    {
        question: "Un adolescente de 17 años busca tratamiento por una overdosis de drogas. Sus padres, al llegar, se niegan al transporte diciendo que 'solo necesita dormir' y amenazan con demandarlo si transporta a su hijo contra su voluntad. El adolescente está semiconsciente, con depresión respiratoria leve pero estable. ¿Cuál es el conflicto legal principal y cómo debe resolverse?",
        options: [
            {letter: "a", text: "Los derechos de los padres prevalecen; debe respetar su decisión"},
            {letter: "b", text: "El bienestar del menor prevalece; debe transportar bajo consentimiento implícito"},
            {letter: "c", text: "Debe esperar hasta que el adolescente esté completamente consciente para decidir"},
            {letter: "d", text: "Solo puede actuar con una orden judicial"}
        ],
        correctAnswer: "b",
        "explanation": "Cuando existe un conflicto entre el consentimiento parental y el bienestar del menor en una situación que amenaza la vida, el principio del 'mejor interés del menor' prevalece. La overdose con depresión respiratoria requiere evaluación médica hospitalaria. Los padres no pueden negar legalmente el tratamiento que salva vidas, y el paramédico debe actuar bajo consentimiento implícito para proteger al menor."
    },
    {
        question: "Durante el transporte de un paciente psiquiátrico bajo custodia policial, el paciente alega que un oficial lo golpeó durante la detención y le pide que documente las lesiones como evidencia. El oficial niega las acusaciones. El paciente tiene contusiones visibles pero está confundido sobre cuándo ocurrieron. ¿Cuál es su responsabilidad profesional y legal?",
        options: [
            {letter: "a", text: "Ignorar las alegaciones por tratarse de un paciente psiquiátrico"},
            {letter: "b", text: "Documentar objetivamente todas las lesiones observadas sin especular sobre su origen"},
            {letter: "c", text: "Confrontar directamente al oficial sobre las alegaciones"},
            {letter: "d", text: "Negarse a documentar para evitar problemas legales"}
        ],
        correctAnswer: "b",
        explanation: "El deber profesional es documentar objetivamente todas las lesiones observadas, ubicación, tamaño, color, y tiempo aproximado de ocurrencia cuando sea posible, sin especular sobre la causa. Esta documentación imparcial protege tanto al paciente como al proveedor de atención médica. Las investigaciones sobre el uso de fuerza son responsabilidad de las autoridades apropiadas, no del personal médico."
    },
    {
        question: "Un paciente de 85 años con deterioro cognitivo leve vive solo y presenta signos de negligencia personal severa (desnutrición, mala higiene, condiciones insalubres en el hogar). Su nieta, quien vive en otro estado, tiene poder notarial y rechaza el transporte por teléfono, preocupada por los costos médicos. El paciente está confundido pero no en peligro inmediato. ¿Cuál es la consideración legal más importante?",
        options: [
            {letter: "a", text: "El poder notarial de la nieta es absoluto y debe respetarse"},
            {
                letter: "b",
                text: "Evaluar la capacidad actual del paciente para tomar decisiones sobre su propio cuidado"
            },
            {letter: "c", text: "La negligencia personal no constituye una emergencia médica"},
            {letter: "d", text: "Solo los servicios sociales pueden intervenir en estos casos"}
        ],
        correctAnswer: "b",
        explanation: "Un poder notarial solo es válido cuando el individuo no puede tomar decisiones por sí mismo. Se debe evaluar la capacidad actual del paciente para tomar decisiones sobre su atención médica. Si tiene capacidad residual, sus deseos pueden prevalecer sobre el poder notarial. Además, la negligencia personal severa puede requerir reporte a servicios de protección para adultos."
    },
    {
        question: "Responde a un accidente donde el conductor ebrio que causó la colisión está gravemente herido y requiere intubación inmediata. Una víctima del otro vehículo, menos grave pero consciente, le grita que 'no ayude al borracho asesino' y otros testigos expresan sentimientos similares. ¿Cuál es su obligación ética y legal principal?",
        options: [
            {
                letter: "a",
                text: "Priorizar al conductor según la severidad de sus lesiones, independientemente de las circunstancias"
            },
            {letter: "b", text: "Atender primero a la víctima inocente por razones éticas"},
            {letter: "c", text: "Esperar a que llegue otra ambulancia para evitar el conflicto"},
            {letter: "d", text: "Permitir que la comunidad decida a quién atender primero"}
        ],
        correctAnswer: "a",
        explanation: "El deber ético y legal fundamental es proporcionar atención médica basada únicamente en la necesidad médica, sin discriminación por raza, religión, estatus social, o circunstancias del incidente. El triage médico debe ser imparcial. La responsabilidad legal del accidente se determinará posteriormente por el sistema judicial, no por el personal médico en la escena."
    },
    {
        question: "Un compañero paramédico habitualmente llega tarde, parece estar bajo influencia de sustancias y recientemente cometió varios errores en el manejo de medicamentos. Los pacientes no han resultado dañados, pero usted está preocupado por la seguridad futura. Cuando lo confronta, él niega cualquier problema y lo amenaza con 'arruinar su carrera' si reporta algo. ¿Cuál es su obligación ética y legal?",
        options: [
            {letter: "a", text: "Mantener la lealtad profesional y no reportar sin evidencia definitiva"},
            {letter: "b", text: "Reportar las preocupaciones a la supervisión médica y administrativa apropiada"},
            {letter: "c", text: "Confrontarlo nuevamente y darle una última oportunidad"},
            {letter: "d", text: "Solo actuar si ocurre un daño real a un paciente"}
        ],
        correctAnswer: "b",
        explanation: "La seguridad del paciente es la prioridad absoluta y supera cualquier lealtad personal o profesional. Existe una obligación ética y legal de reportar comportamientos que ponen en riesgo la seguridad del paciente. El reporte debe hacerse a través de los canales apropiados (supervisor médico, director del servicio) para que se pueda investigar y tomar medidas correctivas antes de que ocurra un daño."
    }
];
