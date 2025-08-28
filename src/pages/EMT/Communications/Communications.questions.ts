import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el FRAP y cuál es su importancia?",
        answer: "El Formato de Registro de Atención Prehospitalaria (FRAP) es el documento legal donde se registra de forma detallada toda la información relevante de la atención brindada a un paciente, desde el contacto inicial hasta la transferencia o finalización de los cuidados. Su importancia radica en ser un registro legal, médico y administrativo que asegura la continuidad de la atención, protege al personal y sirve para investigación y mejora continua."
    },
    {
        question: "¿Cómo se debe corregir un error en un FRAP ya documentado?",
        answer: "Si se detecta un error en un FRAP ya enviado, se debe trazar una línea simple sobre el error, inicialar la corrección y registrar la hora. Nunca se deben usar correctores o borrar información. Para errores en registros electrónicos ya enviados, se deben seguir las instrucciones específicas de la agencia para hacer una enmienda o adenda, notificando el error y registrando la corrección de manera clara y con fecha y hora."
    },
    {
        question: "¿Qué información clave debe incluir un reporte verbal al personal hospitalario al entregar un paciente?",
        answer: "Un reporte verbal al hospital debe ser conciso y directo, incluyendo la edad y sexo del paciente, la queja principal, el mecanismo de lesión o naturaleza de la enfermedad, los signos vitales obtenidos, los tratamientos aplicados en el campo y la respuesta del paciente a dichos tratamientos. El objetivo es transferir el cuidado del paciente de manera efectiva y asegurar la continuidad de la atención."
    },
    {
        question: "¿Qué estrategias se deben seguir si la comunicación por radio es deficiente?",
        answer: "Ante una comunicación por radio deficiente, se debe hablar despacio y claro, asegurándose de que el canal de comunicación sea el correcto. Es fundamental repetir el mensaje para confirmación y utilizar un tono de voz firme y modulado para facilitar la comprensión."
    },
    {
        question: "¿Qué es la evaluación SAMPLE y qué información recopila?",
        answer: "La evaluación SAMPLE es una herramienta mnemotécnica utilizada para recopilar información esencial sobre el paciente. Sus siglas significan: \n- **S**ignos y síntomas: Lo que el paciente siente y lo que el paramédico observa. \n- **A**lergias: A medicamentos, alimentos u otras sustancias. \n- **M**edicamentos: Los que el paciente está tomando actualmente. \n- **P**asado médico: Enfermedades o condiciones preexistentes. \n- **Ú**ltima comida o bebida: Hora de la última ingesta. \n- **E**ventos: Circunstancias que precedieron a la emergencia."
    },
    {
        question: "¿Por qué es crucial documentar el rechazo de atención por parte de un paciente?",
        answer: "Documentar el rechazo de atención es crucial porque protege legalmente al proveedor de atención prehospitalaria. Demuestra que el paciente fue informado de los riesgos asociados con el rechazo, que entendió las consecuencias y que la decisión fue voluntaria. Además, es un requisito legal y ético para la buena práctica."
    },
    {
        question: "¿Cuál es la importancia de la comunicación terapéutica con el paciente?",
        answer: "La comunicación terapéutica es fundamental para establecer una relación de confianza con el paciente, obtener información vital, reducir su ansiedad, y asegurar su cooperación durante la atención. Implica escuchar activamente, usar un lenguaje comprensible, ser empático y mantener la calma."
    }
];

export const communicationsQuestions: Question[] = [
    {
        "question": "Al comunicar información sobre un paciente al hospital, es fundamental:",
        "options": [
            { "letter": "a", "text": "Proporcionar tantos detalles como sea posible, siendo objetivo e imparcial." },
            { "letter": "b", "text": "Usar palabras codificadas para proteger la identidad del paciente." },
            { "letter": "c", "text": "Hablar lo más rápido posible para ahorrar tiempo." },
            { "letter": "d", "text": "Incluir tu opinión personal sobre la condición del paciente." }
        ],
        "correctAnswer": "a",
        "explanation": "La comunicación efectiva con el hospital requiere transmitir información clara, precisa y objetiva. El personal receptor necesita todos los datos relevantes (signos vitales, historia, intervenciones) para prepararse adecuadamente. Las opiniones personales deben evitarse; la comunicación debe basarse en hechos y hallazgos objetivos."
    },
    {
        "question": "¿Qué información *debe* incluir en su informe al hospital?",
        "options": [
            { "letter": "a", "text": "Su hora estimada de llegada, queja principal, signos vitales y tratamientos." },
            { "letter": "b", "text": "El nombre completo y la fecha de nacimiento del paciente." },
            { "letter": "c", "text": "La dirección exacta del lugar de donde viene." },
            { "letter": "d", "text": "Su opinión personal sobre la condición del paciente." }
        ],
        "correctAnswer": "a",
        "explanation": "Un reporte de radio efectivo debe ser conciso y centrarse en la información clínica esencial. Esto incluye la unidad de identificación, la edad y sexo del paciente, la queja principal, los hallazgos clave (como signos vitales), las intervenciones realizadas y la hora estimada de llegada (ETA). Esto permite al hospital movilizar los recursos necesarios."
    },
    {
        "question": "Al escribir la narrativa para un informe de atención prehospitalaria (FRAP), es importante incluir:",
        "options": [
            { "letter": "a", "text": "Opiniones personales y suposiciones." },
            { "letter": "b", "text": "Muchas abreviaturas que solo el personal de su agencia entienda." },
            { "letter": "c", "text": "Hallazgos objetivos de la evaluación física y las intervenciones realizadas." },
            { "letter": "d", "text": "La dirección exacta de su ubicación al momento de escribir el informe." }
        ],
        "correctAnswer": "c",
        "explanation": "La narrativa del Formato de Registro de Atención Prehospitalaria (FRAP o PCR) es un documento médico-legal. Debe contener una descripción cronológica y objetiva de los hechos, desde el despacho hasta la transferencia del paciente. Incluir solo hallazgos observables y las acciones realizadas garantiza un registro profesional y defendible."
    },
    {
        "question": "Después de enviar un FRAP electrónico, se da cuenta de que documentó los signos vitales incorrectos. ¿Qué debe hacer?",
        "options": [
            { "letter": "a", "text": "Dejar el registro como está y buscar consejo legal." },
            { "letter": "b", "text": "Notificar al departamento de tecnología de la información de su agencia para que lo corrijan." },
            { "letter": "c", "text": "Seguir las instrucciones de su agencia para hacer una enmienda o adenda al registro." },
            { "letter": "d", "text": "No decir nada y esperar que el error pase desapercibido." }
        ],
        "correctAnswer": "c",
        "explanation": "La forma correcta y ética de corregir un error en un registro médico completo es mediante una enmienda o adenda. Este es un agregado al reporte original que aclara la información incorrecta, indica la información correcta, y es fechado y firmado por la persona que hace la corrección. Ocultar un error compromete la atención del paciente y la integridad del documento."
    },
    {
        "question": "Su compañero toma varias fotos del paciente y la escena para publicarlas en línea y compartirlas con amigos. Esto podría ser una violación de:",
        "options": [
            { "letter": "a", "text": "Las leyes de Internet." },
            { "letter": "b", "text": "El protocolo de informe de atención del paciente." },
            { "letter": "c", "text": "NEMSIS (en EE.UU.)." },
            { "letter": "d", "text": "HIPAA (o leyes de confidencialidad equivalentes)." }
        ],
        "correctAnswer": "d",
        "explanation": "HIPAA (Ley de Portabilidad y Responsabilidad de Seguros Médicos de EE. UU.) y leyes de confidencialidad similares en otros países protegen la información de salud del paciente. Tomar y compartir fotos de un paciente sin su consentimiento explícito es una violación grave de su privacidad y tiene serias consecuencias legales y profesionales."
    },
    {
        "question": "¿Cuál de los siguientes es un componente de la información administrativa que se puede encontrar en un FRAP?",
        "options": [
            { "letter": "a", "text": "Datos del paciente (nombre, edad, sexo)." },
            { "letter": "b", "text": "Evaluación física del paciente." },
            { "letter": "c", "text": "Detalles del tratamiento aplicado." },
            { "letter": "d", "text": "Hallazgos de la evaluación del paciente." }
        ],
        "correctAnswer": "a",
        "explanation": "El FRAP se divide en secciones. Los datos demográficos y administrativos incluyen información como el nombre del paciente, edad, sexo, fecha de nacimiento y los tiempos del incidente. Los otros elementos (evaluación, tratamiento) corresponden a la sección de datos clínicos del paciente."
    },
    {
        "question": "¿Cuál es el objetivo principal del reporte oral al personal hospitalario al entregar un paciente?",
        "options": [
            { "letter": "a", "text": "Conocer su experiencia médica y pedir consejos." },
            { "letter": "b", "text": "Transferir adecuadamente el cuidado del paciente y asegurar la continuidad." },
            { "letter": "c", "text": "Obtener opiniones sobre el tratamiento que se aplicó." },
            { "letter": "d", "text": "Solicitar propinas por el servicio brindado." }
        ],
        "correctAnswer": "b",
        "explanation": "El reporte oral al lado de la cama es un paso crítico para la seguridad del paciente. Su propósito es transferir formalmente la responsabilidad del paciente al personal del hospital, proporcionando un resumen conciso de la situación, las intervenciones y la respuesta del paciente para que no haya interrupciones en su atención."
    },
    {
        "question": "Cuando se transmite un reporte por radio, se debe hablar:",
        "options": [
            { "letter": "a", "text": "Rápido y sin pausas para ser eficiente." },
            { "letter": "b", "text": "Con tono firme, claro y pausado para facilitar la comprensión." },
            { "letter": "c", "text":"Utilizando solo abreviaciones para ahorrar tiempo." },
            { "letter": "d", "text": "En voz baja para mantener la confidencialidad." }
        ],
        "correctAnswer": "b",
        "explanation": "Las comunicaciones por radio deben ser claras y fáciles de entender, ya que la transmisión puede tener interferencias. Hablar de forma pausada, con un volumen adecuado y enunciando claramente las palabras, minimiza los malentendidos y asegura que la información crítica sea recibida correctamente."
    },
    {
        "question": "¿Qué es la evaluación SAMPLE?",
        "options": [
            { "letter": "a", "text": "Un protocolo para la administración de medicamentos." },
            { "letter": "b", "text": "Una herramienta para la evaluación rápida de la escena." },
            { "letter": "c", "text": "Un método para recopilar información clave sobre el paciente." },
            { "letter": "d", "text": "Una técnica para inmovilizar a pacientes agresivos." }
        ],
        "correctAnswer": "c",
        "explanation": "SAMPLE es un acrónimo mnemotécnico utilizado para obtener el historial médico de un paciente. Significa: Signos y Síntomas, Alergias, Medicamentos, Padecimientos previos (historial médico pertinente), Última ingesta oral (comida o bebida), y Eventos previos al incidente."
    },
    {
        "question": "La documentación precisa y completa en el FRAP es esencial porque:",
        "options": [
            { "letter": "a", "text": "Solo sirve como registro para el personal de la agencia." },
            { "letter": "b", "text": "Es un requisito legal y ayuda a garantizar la continuidad de la atención al paciente." },
            { "letter": "c", "text": "Permite al paramédico expresar sus opiniones personales sobre el caso." },
            { "letter": "d", "text": "Es útil para generar estadísticas sobre la hora de llegada de las ambulancias." }
        ],
        "correctAnswer": "b",
        "explanation": "El FRAP tiene múltiples propósitos cruciales: es un documento legal que refleja la atención brindada, asegura la continuidad del cuidado al informar al siguiente nivel de atención, y se utiliza para la mejora de la calidad, la facturación y la investigación. Su precisión es vital para la atención del paciente y la protección legal del proveedor."
    }
];

export const communicationsChallengingQuestions: Question[] = [
    {
        question: "¿Cuál es la consecuencia legal de omitir información relevante en el FRAP?",
        options: [
            { letter: "a", text: "No tiene consecuencias" },
            { letter: "b", text: "Puede considerarse falsificación de documentos" },
            { letter: "c", text: "Solo afecta la atención médica" },
            { letter: "d", text: "Es responsabilidad del hospital" }
        ],
        correctAnswer: "b",
        explanation: "Omitir información relevante en el FRAP puede considerarse falsificación de documentos y tener consecuencias legales y administrativas graves."
    },
    {
        question: "¿Qué elemento NO es parte de la comunicación terapéutica efectiva?",
        options: [
            { letter: "a", text: "Escucha activa" },
            { letter: "b", text: "Lenguaje técnico sin explicación" },
            { letter: "c", text: "Empatía" },
            { letter: "d", text: "Claridad en el mensaje" }
        ],
        correctAnswer: "b",
        explanation: "El uso de lenguaje técnico sin explicación dificulta la comprensión y no es parte de una comunicación terapéutica efectiva."
    }
];
