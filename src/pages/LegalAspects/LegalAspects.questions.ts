import {Question} from "../../question";


export const faqData = [
    {
        question: "¿Qué es una Orden de No Reanimación (ONR)?",
        answer: "Es un documento legal que indica que no deben realizarse maniobras de resucitación en caso de paro cardiorrespiratorio.",
    },
    {
        question: "¿Quién puede otorgar consentimiento en menores de edad?",
        answer: "Un progenitor o tutor legal debe otorgarlo, salvo que la menor esté embarazada, en cuyo caso puede dar consentimiento propio.",
    },
    {
        question: "¿Qué hacer si un detenido necesita atención médica?",
        answer: "Se debe respetar su derecho a recibir atención médica independientemente de su situación legal.",
    },
    {
        question: "¿Puede un paciente rechazar atención médica?",
        answer: "Sí, siempre que sea competente para tomar decisiones. Debe ser informado de los riesgos antes de rechazar.",
    },
    {
        question: "¿Qué hacer ante sospecha de abuso infantil?",
        answer: "Reportarlo inmediatamente a las autoridades competentes, es una obligación legal para el TAMP.",
    },
    {
        question: "¿Qué pasa si el paciente no puede dar consentimiento y no hay familiares?",
        answer: "Se asume consentimiento implícito para salvar su vida o estabilizarlo según protocolos de urgencia.",
    },
    {
        question: "¿Qué establece el Código Nacional de Procedimientos Penales respecto al TAMP?",
        answer: "El TAMP es considerado primer respondiente y responsable de proteger la escena y mantener la cadena de custodia.",
    },
];

export const legalQuestions: Question[] = [
    {
        question: "La obligación legal de un Técnico en Atención Médica Prehospitalaria (TAMP) de brindar atención de acuerdo con un estándar razonable de cuidado se conoce como:",
        options: [
            { letter: "a", text: "Negligencia" },
            { letter: "b", text: "Obligación de actuar" },
            { letter: "c", text: "Consentimiento informado" },
            { letter: "d", text: "Autonomía" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes escenarios representa abandono?",
        options: [
            { letter: "a", text: "Trasladar al paciente a un hospital" },
            { letter: "b", text: "Dejar a un paciente en la escena sin transferir el cuidado a personal calificado" },
            { letter: "c", text: "Solicitar ayuda médica adicional" },
            { letter: "d", text: "Rehusarse a tratar a un paciente violento por seguridad personal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente inconsciente que requiere atención urgente recibe tratamiento bajo el principio de:",
        options: [
            { letter: "a", text: "Consentimiento informado" },
            { letter: "b", text: "Consentimiento implícito" },
            { letter: "c", text: "Negligencia" },
            { letter: "d", text: "Obligación de confidencialidad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La incapacidad de actuar o brindar atención adecuada, que resulta en daño al paciente, se denomina:",
        options: [
            { letter: "a", text: "Negligencia" },
            { letter: "b", text: "Consentimiento informado" },
            { letter: "c", text: "Maleficencia" },
            { letter: "d", text: "Inmunidad" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Cuando un TAMP explica los riesgos, beneficios y alternativas de un tratamiento a un paciente consciente y obtiene su aprobación, se refiere a:",
        options: [
            { letter: "a", text: "Consentimiento implícito" },
            { letter: "b", text: "Consentimiento informado" },
            { letter: "c", text: "Negligencia médica" },
            { letter: "d", text: "Autonomía" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un menor de edad que requiere atención médica urgente pero no tiene un tutor disponible puede ser tratado bajo:",
        options: [
            { letter: "a", text: "Consentimiento por sustitución" },
            { letter: "b", text: "Consentimiento implícito" },
            { letter: "c", text: "Consentimiento informado" },
            { letter: "d", text: "Confidencialidad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El acto de tocar a un paciente sin su consentimiento puede considerarse:",
        options: [
            { letter: "a", text: "Negligencia" },
            { letter: "b", text: "Agresión" },
            { letter: "c", text: "Inmunidad" },
            { letter: "d", text: "Confidencialidad" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Los documentos legales que expresan los deseos de un paciente respecto a su atención médica futura, como una orden de no resucitar (ONR), se denominan:",
        options: [
            { letter: "a", text: "Consentimiento informado" },
            { letter: "b", text: "Testamento vital" },
            { letter: "c", text: "Autonomía médica" },
            { letter: "d", text: "Obligación de actuar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Si un paciente competente rechaza tratamiento, el TAMP debe:",
        options: [
            { letter: "a", text: "Forzar el tratamiento" },
            { letter: "b", text: "Respetar su decisión tras documentar el rechazo" },
            { letter: "c", text: "Ignorar su rechazo y proceder" },
            { letter: "d", text: "Esperar la llegada de familiares" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La transferencia de cuidado debe hacerse siempre a:",
        options: [
            { letter: "a", text: "Cualquier testigo presente" },
            { letter: "b", text: "Un proveedor de atención médica de nivel igual o superior" },
            { letter: "c", text: "Un familiar del paciente" },
            { letter: "d", text: "La policía" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de las siguientes opciones es un ejemplo de una excepción a la obligación de confidencialidad médica?",
        options: [
            { letter: "a", text: "Curiosidad de los vecinos" },
            { letter: "b", text: "Amenaza de daño hacia otros" },
            { letter: "c", text: "Solicitud de un amigo" },
            { letter: "d", text: "Interés de los medios de comunicación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El consentimiento que se asume que un paciente daría si pudiera hacerlo se llama:",
        options: [
            { letter: "a", text: "Consentimiento informado" },
            { letter: "b", text: "Consentimiento implícito" },
            { letter: "c", text: "Consentimiento escrito" },
            { letter: "d", text: "Negligencia implícita" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En qué momento puede un TAMP divulgar información sobre un paciente sin su consentimiento:",
        options: [
            { letter: "a", text: "Nunca" },
            { letter: "b", text: "Cuando es necesario para la atención médica" },
            { letter: "c", text: "Cuando un periodista pregunta" },
            { letter: "d", text: "Cuando un amigo lo solicita" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La ley que protege la confidencialidad de la información médica del paciente en Estados Unidos es:",
        options: [
            { letter: "a", text: "HIPAA" },
            { letter: "b", text: "OSHA" },
            { letter: "c", text: "FEMA" },
            { letter: "d", text: "NAEMT" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Cuando un TAMP no proporciona el mismo nivel de atención que un colega razonable en circunstancias similares, se le puede acusar de:",
        options: [
            { letter: "a", text: "Consentimiento informado" },
            { letter: "b", text: "Abandono" },
            { letter: "c", text: "Negligencia" },
            { letter: "d", text: "Confidencialidad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La principal prioridad legal y ética de un TAMP es:",
        options: [
            { letter: "a", text: "Proteger su equipo" },
            { letter: "b", text: "Proteger su seguridad personal" },
            { letter: "c", text: "Proporcionar el mejor cuidado posible" },
            { letter: "d", text: "Satisfacer a los familiares del paciente" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Si un paciente rechaza tratamiento, el TAMP debe documentarlo cuidadosamente incluyendo:",
        options: [
            { letter: "a", text: "La opinión del jefe" },
            { letter: "b", text: "Una firma de testigo si es posible" },
            { letter: "c", text: "El diagnóstico final" },
            { letter: "d", text: "Opinión de familiares" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué elemento debe estar presente para que ocurra negligencia?",
        options: [
            { letter: "a", text: "Daño al paciente" },
            { letter: "b", text: "Consentimiento informado" },
            { letter: "c", text: "Negación del servicio" },
            { letter: "d", text: "Confidencialidad" },
        ],
        correctAnswer: "a",
    },
    {
        question: "Un TAMP que intenta proporcionar atención más allá de su capacitación podría ser culpable de:",
        options: [
            { letter: "a", text: "Negligencia" },
            { letter: "b", text: "Extralimitación" },
            { letter: "c", text: "Confidencialidad" },
            { letter: "d", text: "Abandono" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La jurisdicción específica bajo la cual un TAMP puede operar está determinada por:",
        options: [
            { letter: "a", text: "La capacitación" },
            { letter: "b", text: "La licencia y protocolos locales" },
            { letter: "c", text: "El deseo personal" },
            { letter: "d", text: "Las instrucciones de familiares" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cómo se denomina cuando un proveedor de atención prehospitalaria inicia tratamiento sin el consentimiento de un paciente consciente y competente?",
        options: [
            { letter: "a", text: "Negligencia" },
            { letter: "b", text: "Consentimiento implícito" },
            { letter: "c", text: "Agresión" },
            { letter: "d", text: "Inmunidad soberana" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El término que describe la cesión de responsabilidad del cuidado de un paciente a otro proveedor calificado es:",
        options: [
            { letter: "a", text: "Abandono" },
            { letter: "b", text: "Transferencia de cuidado" },
            { letter: "c", text: "Negligencia" },
            { letter: "d", text: "Autonomía" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la mejor defensa contra una reclamación de negligencia para un TAMP?",
        options: [
            { letter: "a", text: "Actuar bajo protocolos y documentar todo adecuadamente" },
            { letter: "b", text: "Hacer caso omiso de la situación" },
            { letter: "c", text: "Delegar tareas sin supervisión" },
            { letter: "d", text: "No brindar tratamiento" },
        ],
        correctAnswer: "a",
    },
    {
        question: "La incapacidad para obtener el consentimiento antes del tratamiento podría resultar en:",
        options: [
            { letter: "a", text: "Confidencialidad" },
            { letter: "b", text: "Agresión" },
            { letter: "c", text: "Inmunidad" },
            { letter: "d", text: "Obligación de actuar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El deber legal de un TAMP de actuar o intervenir en una situación de emergencia depende de:",
        options: [
            { letter: "a", text: "La disponibilidad de equipo" },
            { letter: "b", text: "Un contrato o su rol en servicio" },
            { letter: "c", text: "El deseo del paciente" },
            { letter: "d", text: "La severidad del accidente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La ley que protege a los socorristas de demandas cuando actúan de buena fe en situaciones de emergencia se conoce como:",
        options: [
            { letter: "a", text: "Ley de Buen Samaritano" },
            { letter: "b", text: "Ley de Confidencialidad" },
            { letter: "c", text: "Ley de Responsabilidad Médica" },
            { letter: "d", text: "Ley HIPAA" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué debe hacer un TAMP si sospecha de abuso infantil durante una llamada?",
        options: [
            { letter: "a", text: "Ignorar la situación" },
            { letter: "b", text: "Reportarlo de inmediato a las autoridades correspondientes" },
            { letter: "c", text: "Esperar la aprobación de los padres" },
            { letter: "d", text: "Documentarlo y no hacer nada más" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es la competencia en un paciente?",
        options: [
            { letter: "a", text: "La capacidad de tomar decisiones informadas sobre su atención médica" },
            { letter: "b", text: "La habilidad de comunicarse" },
            { letter: "c", text: "El conocimiento médico del paciente" },
            { letter: "d", text: "La edad del paciente" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El consentimiento otorgado verbalmente o mediante gestos se denomina:",
        options: [
            { letter: "a", text: "Consentimiento escrito" },
            { letter: "b", text: "Consentimiento expreso" },
            { letter: "c", text: "Consentimiento implícito" },
            { letter: "d", text: "Consentimiento informado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el primer paso que debe tomar un TAMP cuando un paciente rechaza atención?",
        options: [
            { letter: "a", text: "Llamar a la policía" },
            { letter: "b", text: "Informarle los riesgos de su decisión" },
            { letter: "c", text: "Ignorar el rechazo" },
            { letter: "d", text: "Obligarlo a recibir atención" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La documentación de un incidente debe ser:",
        options: [
            { letter: "a", text: "General y resumida" },
            { letter: "b", text: "Específica, precisa y objetiva" },
            { letter: "c", text: "Basada en la opinión personal" },
            { letter: "d", text: "Lo más breve posible" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La información escrita o verbal que daña la reputación de una persona se conoce como:",
        options: [
            { letter: "a", text: "Difamación" },
            { letter: "b", text: "Agresión" },
            { letter: "c", text: "Negligencia" },
            { letter: "d", text: "Abandono" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué documento autoriza a los proveedores de atención médica a no realizar maniobras de reanimación en un paciente?",
        options: [
            { letter: "a", text: "Historia clínica" },
            { letter: "b", text: "Orden de no resucitar (ONR)" },
            { letter: "c", text: "Testamento" },
            { letter: "d", text: "Informe de traslado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un TAMP puede ser considerado culpable de abandono si:",
        options: [
            { letter: "a", text: "Entrega el paciente a otro proveedor de nivel igual o superior" },
            { letter: "b", text: "Deja al paciente sin asegurarse de la continuidad del cuidado" },
            { letter: "c", text: "Solicita ayuda adicional" },
            { letter: "d", text: "Informa a su supervisor" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes sería un ejemplo de negligencia por omisión?",
        options: [
            { letter: "a", text: "Aplicar torniquete cuando no es necesario" },
            { letter: "b", text: "No inmovilizar adecuadamente una fractura" },
            { letter: "c", text: "Informar a los familiares sobre el estado del paciente" },
            { letter: "d", text: "Documentar excesivamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un TAMP que actúa en una situación fuera de servicio, sin equipo, pero intenta ayudar bajo principios de buena fe, está protegido principalmente por:",
        options: [
            { letter: "a", text: "Ley de Confidencialidad" },
            { letter: "b", text: "Ley de Buen Samaritano" },
            { letter: "c", text: "Ley de Negligencia Médica" },
            { letter: "d", text: "HIPAA" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿En qué casos un TAMP está obligado a informar hallazgos relacionados con un paciente?",
        options: [
            { letter: "a", text: "Sospecha de abuso" },
            { letter: "b", text: "El paciente es famoso" },
            { letter: "c", text: "Se le solicita información por un conocido" },
            { letter: "d", text: "Ninguno" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El proceso legal mediante el cual se evalúan los estándares de cuidado de un TAMP es conocido como:",
        options: [
            { letter: "a", text: "Evaluación de desempeño" },
            { letter: "b", text: "Estándar de cuidado" },
            { letter: "c", text: "Responsabilidad profesional" },
            { letter: "d", text: "Evaluación de incidentes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "El abandono puede ocurrir solamente si:",
        options: [
            { letter: "a", text: "El paciente está en estado crítico" },
            { letter: "b", text: "El paciente no ha firmado su alta voluntaria" },
            { letter: "c", text: "Un proveedor interrumpe el cuidado sin asegurarse de la transferencia adecuada" },
            { letter: "d", text: "El paciente se niega a colaborar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es la responsabilidad de un TAMP respecto a una orden de no resucitar válida (ONR)?",
        options: [
            { letter: "a", text: "Ignorarla y brindar RCP" },
            { letter: "b", text: "Respetarla si es válida" },
            { letter: "c", text: "Confirmarla con la familia" },
            { letter: "d", text: "Pedir autorización médica" },
        ],
        correctAnswer: "b",
    },
];