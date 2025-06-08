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
        question: "Al comunicar información sobre un paciente al hospital, es fundamental:",
        options: [
            { letter: "a", text: "Proporcionar tantos detalles como sea posible, siendo objetivo e imparcial." },
            { letter: "b", text: "Usar palabras codificadas para proteger la identidad del paciente." },
            { letter: "c", text: "Hablar lo más rápido posible para ahorrar tiempo." },
            { letter: "d", text: "Incluir tu opinión personal sobre la condición del paciente." }
        ],
        correctAnswer: "a"
    },
    {
        question: "¿Qué información *debe* incluir en su informe al hospital?",
        options: [
            { letter: "a", text: "Su hora estimada de llegada, queja principal, signos vitales y tratamientos." },
            { letter: "b", text: "El nombre completo y la fecha de nacimiento del paciente." },
            { letter: "c", text: "La dirección exacta del lugar de donde viene." },
            { letter: "d", text: "Su opinión personal sobre la condición del paciente." }
        ],
        correctAnswer: "a"
    },
    {
        question: "Al escribir la narrativa para un informe de atención prehospitalaria (FRAP), es importante incluir:",
        options: [
            { letter: "a", text: "Opiniones personales y suposiciones." },
            { letter: "b", text: "Muchas abreviaturas que solo el personal de su agencia entienda." },
            { letter: "c", text: "Hallazgos objetivos de la evaluación física y las intervenciones realizadas." },
            { letter: "d", text: "La dirección exacta de su ubicación al momento de escribir el informe." }
        ],
        correctAnswer: "c"
    },
    {
        question: "Después de enviar un FRAP electrónico, se da cuenta de que documentó los signos vitales incorrectos. ¿Qué debe hacer?",
        options: [
            { letter: "a", text: "Dejar el registro como está y buscar consejo legal." },
            { letter: "b", text: "Notificar al departamento de tecnología de la información de su agencia para que lo corrijan." },
            { letter: "c", text: "Seguir las instrucciones de su agencia para hacer una enmienda o adenda al registro." },
            { letter: "d", text: "No decir nada y esperar que el error pase desapercibido." }
        ],
        correctAnswer: "c"
    },
    {
        question: "Su compañero toma varias fotos del paciente y la escena para publicarlas en línea y compartirlas con amigos. Esto podría ser una violación de:",
        options: [
            { letter: "a", text: "Las leyes de Internet." },
            { letter: "b", text: "El protocolo de informe de atención del paciente." },
            { letter: "c", text: "NSEMIS." },
            { letter: "d", text: "HIPAA." }
        ],
        correctAnswer: "d"
    },
    {
        question: "¿Cuál de los siguientes es un componente de la información administrativa que se puede encontrar en un FRAP?",
        options: [
            { letter: "a", text: "Datos del paciente (nombre, edad, sexo)." },
            { letter: "b", text: "Evaluación física del paciente." },
            { letter: "c", text: "Detalles del tratamiento aplicado." },
            { letter: "d", text: "Hallazgos de la evaluación del paciente." }
        ],
        correctAnswer: "a"
    },
    {
        question: "¿Cuál es el objetivo principal del reporte oral al personal hospitalario al entregar un paciente?",
        options: [
            { letter: "a", text: "Conocer su experiencia médica y pedir consejos." },
            { letter: "b", text: "Transferir adecuadamente el cuidado del paciente y asegurar la continuidad." },
            { letter: "c", text: "Obtener opiniones sobre el tratamiento que se aplicó." },
            { letter: "d", text: "Solicitar propinas por el servicio brindado." }
        ],
        correctAnswer: "b"
    },
    {
        question: "Cuando se transmite un reporte por radio, se debe hablar:",
        options: [
            { letter: "a", text: "Rápido y sin pausas para ser eficiente." },
            { letter: "b", text: "Con tono firme, claro y pausado para facilitar la comprensión." },
            { letter: "c", text: "Utilizando solo abreviaciones para ahorrar tiempo." },
            { letter: "d", text: "En voz baja para mantener la confidencialidad." }
        ],
        correctAnswer: "b"
    },
    {
        question: "¿Qué es la evaluación SAMPLE?",
        options: [
            { letter: "a", text: "Un protocolo para la administración de medicamentos." },
            { letter: "b", text: "Una herramienta para la evaluación rápida de la escena." },
            { letter: "c", text: "Un método para recopilar información clave sobre el paciente." },
            { letter: "d", text: "Una técnica para inmovilizar a pacientes agresivos." }
        ],
        correctAnswer: "c"
    },
    {
        question: "La documentación precisa y completa en el FRAP es esencial porque:",
        options: [
            { letter: "a", text: "Solo sirve como registro para el personal de la agencia." },
            { letter: "b", text: "Es un requisito legal y ayuda a garantizar la continuidad de la atención al paciente." },
            { letter: "c", text: "Permite al paramédico expresar sus opiniones personales sobre el caso." },
            { letter: "d", text: "Es útil para generar estadísticas sobre la hora de llegada de las ambulancias." }
        ],
        correctAnswer: "b"
    }
];