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
            {"letter": "a", "text": "Proporcionar tantos detalles como sea posible, siendo objetivo e imparcial."},
            {"letter": "b", "text": "Usar palabras codificadas para proteger la identidad del paciente."},
            {"letter": "c", "text": "Hablar lo más rápido posible para ahorrar tiempo."},
            {"letter": "d", "text": "Incluir tu opinión personal sobre la condición del paciente."}
        ],
        "correctAnswer": "a",
        "explanation": "La comunicación efectiva con el hospital requiere transmitir información clara, precisa y objetiva. El personal receptor necesita todos los datos relevantes (signos vitales, historia, intervenciones) para prepararse adecuadamente. Las opiniones personales deben evitarse; la comunicación debe basarse en hechos y hallazgos objetivos."
    },
    {
        "question": "¿Qué información *debe* incluir en su informe al hospital?",
        "options": [
            {"letter": "a", "text": "Su hora estimada de llegada, queja principal, signos vitales y tratamientos."},
            {"letter": "b", "text": "El nombre completo y la fecha de nacimiento del paciente."},
            {"letter": "c", "text": "La dirección exacta del lugar de donde viene."},
            {"letter": "d", "text": "Su opinión personal sobre la condición del paciente."}
        ],
        "correctAnswer": "a",
        "explanation": "Un reporte de radio efectivo debe ser conciso y centrarse en la información clínica esencial. Esto incluye la unidad de identificación, la edad y sexo del paciente, la queja principal, los hallazgos clave (como signos vitales), las intervenciones realizadas y la hora estimada de llegada (ETA). Esto permite al hospital movilizar los recursos necesarios."
    },
    {
        "question": "Al escribir la narrativa para un informe de atención prehospitalaria (FRAP), es importante incluir:",
        "options": [
            {"letter": "a", "text": "Opiniones personales y suposiciones."},
            {"letter": "b", "text": "Muchas abreviaturas que solo el personal de su agencia entienda."},
            {"letter": "c", "text": "Hallazgos objetivos de la evaluación física y las intervenciones realizadas."},
            {"letter": "d", "text": "La dirección exacta de su ubicación al momento de escribir el informe."}
        ],
        "correctAnswer": "c",
        "explanation": "La narrativa del Formato de Registro de Atención Prehospitalaria (FRAP o PCR) es un documento médico-legal. Debe contener una descripción cronológica y objetiva de los hechos, desde el despacho hasta la transferencia del paciente. Incluir solo hallazgos observables y las acciones realizadas garantiza un registro profesional y defendible."
    },
    {
        "question": "Después de enviar un FRAP electrónico, se da cuenta de que documentó los signos vitales incorrectos. ¿Qué debe hacer?",
        "options": [
            {"letter": "a", "text": "Dejar el registro como está y buscar consejo legal."},
            {
                "letter": "b",
                "text": "Notificar al departamento de tecnología de la información de su agencia para que lo corrijan."
            },
            {
                "letter": "c",
                "text": "Seguir las instrucciones de su agencia para hacer una enmienda o adenda al registro."
            },
            {"letter": "d", "text": "No decir nada y esperar que el error pase desapercibido."}
        ],
        "correctAnswer": "c",
        "explanation": "La forma correcta y ética de corregir un error en un registro médico completo es mediante una enmienda o adenda. Este es un agregado al reporte original que aclara la información incorrecta, indica la información correcta, y es fechado y firmado por la persona que hace la corrección. Ocultar un error compromete la atención del paciente y la integridad del documento."
    },
    {
        "question": "Su compañero toma varias fotos del paciente y la escena para publicarlas en línea y compartirlas con amigos. Esto podría ser una violación de:",
        "options": [
            {"letter": "a", "text": "Las leyes de Internet."},
            {"letter": "b", "text": "El protocolo de informe de atención del paciente."},
            {"letter": "c", "text": "NEMSIS (en EE.UU.)."},
            {"letter": "d", "text": "HIPAA (o leyes de confidencialidad equivalentes)."}
        ],
        "correctAnswer": "d",
        "explanation": "HIPAA (Ley de Portabilidad y Responsabilidad de Seguros Médicos de EE. UU.) y leyes de confidencialidad similares en otros países protegen la información de salud del paciente. Tomar y compartir fotos de un paciente sin su consentimiento explícito es una violación grave de su privacidad y tiene serias consecuencias legales y profesionales."
    },
    {
        "question": "¿Cuál de los siguientes es un componente de la información administrativa que se puede encontrar en un FRAP?",
        "options": [
            {"letter": "a", "text": "Datos del paciente (nombre, edad, sexo)."},
            {"letter": "b", "text": "Evaluación física del paciente."},
            {"letter": "c", "text": "Detalles del tratamiento aplicado."},
            {"letter": "d", "text": "Hallazgos de la evaluación del paciente."}
        ],
        "correctAnswer": "a",
        "explanation": "El FRAP se divide en secciones. Los datos demográficos y administrativos incluyen información como el nombre del paciente, edad, sexo, fecha de nacimiento y los tiempos del incidente. Los otros elementos (evaluación, tratamiento) corresponden a la sección de datos clínicos del paciente."
    },
    {
        "question": "¿Cuál es el objetivo principal del reporte oral al personal hospitalario al entregar un paciente?",
        "options": [
            {"letter": "a", "text": "Conocer su experiencia médica y pedir consejos."},
            {"letter": "b", "text": "Transferir adecuadamente el cuidado del paciente y asegurar la continuidad."},
            {"letter": "c", "text": "Obtener opiniones sobre el tratamiento que se aplicó."},
            {"letter": "d", "text": "Solicitar propinas por el servicio brindado."}
        ],
        "correctAnswer": "b",
        "explanation": "El reporte oral al lado de la cama es un paso crítico para la seguridad del paciente. Su propósito es transferir formalmente la responsabilidad del paciente al personal del hospital, proporcionando un resumen conciso de la situación, las intervenciones y la respuesta del paciente para que no haya interrupciones en su atención."
    },
    {
        "question": "Cuando se transmite un reporte por radio, se debe hablar:",
        "options": [
            {"letter": "a", "text": "Rápido y sin pausas para ser eficiente."},
            {"letter": "b", "text": "Con tono firme, claro y pausado para facilitar la comprensión."},
            {"letter": "c", "text": "Utilizando solo abreviaciones para ahorrar tiempo."},
            {"letter": "d", "text": "En voz baja para mantener la confidencialidad."}
        ],
        "correctAnswer": "b",
        "explanation": "Las comunicaciones por radio deben ser claras y fáciles de entender, ya que la transmisión puede tener interferencias. Hablar de forma pausada, con un volumen adecuado y enunciando claramente las palabras, minimiza los malentendidos y asegura que la información crítica sea recibida correctamente."
    },
    {
        "question": "¿Qué es la evaluación SAMPLE?",
        "options": [
            {"letter": "a", "text": "Un protocolo para la administración de medicamentos."},
            {"letter": "b", "text": "Una herramienta para la evaluación rápida de la escena."},
            {"letter": "c", "text": "Un método para recopilar información clave sobre el paciente."},
            {"letter": "d", "text": "Una técnica para inmovilizar a pacientes agresivos."}
        ],
        "correctAnswer": "c",
        "explanation": "SAMPLE es un acrónimo mnemotécnico utilizado para obtener el historial médico de un paciente. Significa: Signos y Síntomas, Alergias, Medicamentos, Padecimientos previos (historial médico pertinente), Última ingesta oral (comida o bebida), y Eventos previos al incidente."
    },
    {
        "question": "La documentación precisa y completa en el FRAP es esencial porque:",
        "options": [
            {"letter": "a", "text": "Solo sirve como registro para el personal de la agencia."},
            {
                "letter": "b",
                "text": "Es un requisito legal y ayuda a garantizar la continuidad de la atención al paciente."
            },
            {"letter": "c", "text": "Permite al paramédico expresar sus opiniones personales sobre el caso."},
            {"letter": "d", "text": "Es útil para generar estadísticas sobre la hora de llegada de las ambulancias."}
        ],
        "correctAnswer": "b",
        "explanation": "El FRAP tiene múltiples propósitos cruciales: es un documento legal que refleja la atención brindada, asegura la continuidad del cuidado al informar al siguiente nivel de atención, y se utiliza para la mejora de la calidad, la facturación y la investigación. Su precisión es vital para la atención del paciente y la protección legal del proveedor."
    }
];

export const communicationsChallengingQuestions: Question[] = [
    {
        question: "Durante un incidente de múltiples víctimas, usted es el oficial de comunicaciones en el puesto de comando. Recibe simultáneamente reportes de 3 unidades con pacientes críticos, el hospital reporta saturación de su departamento de emergencias, y el centro de despacho solicita actualización del estado de la escena. Su radio principal falla parcialmente. ¿Cuál es la prioridad de comunicación más crítica?",
        options: [
            {letter: "a", text: "Reportar inmediatamente el estado de la escena al centro de despacho"},
            {
                letter: "b",
                text: "Coordinar el desvío de pacientes críticos a hospitales alternativos con capacidad disponible"
            },
            {letter: "c", text: "Solicitar reparación inmediata del equipo de radio principal"},
            {letter: "d", text: "Establecer comunicación directa con cada unidad para obtener reportes detallados"}
        ],
        correctAnswer: "b",
        explanation: "En un incidente de múltiples víctimas, la prioridad absoluta es asegurar que los pacientes críticos reciban atención hospitalaria oportuna. Si el hospital está saturado, coordinar el desvío a centros alternativos es crucial para salvar vidas. Los reportes administrativos y reparaciones de equipo son secundarios cuando vidas están en riesgo inmediato."
    },
    {
        question: "Está documentando la atención de un paciente de 35 años que inicialmente presentaba dolor torácico severo y negaba cualquier consumo de drogas. Durante el transporte, encuentra evidencia de uso reciente de cocaína y el paciente admite haber mentido por temor a consecuencias legales. Sus signos vitales mejoraron significativamente después de la administración de nitroglicerina. ¿Cómo debe documentar esta información en el FRAP?",
        options: [
            {letter: "a", text: "Omitir la información sobre drogas ya que el paciente inicialmente la negó"},
            {
                letter: "b",
                text: "Documentar objetivamente la información inicial negativa y la subsecuente admisión, explicando el cambio"
            },
            {letter: "c", text: "Solo documentar la información final verdadera para evitar contradicciones"},
            {letter: "d", text: "Reportar inmediatamente a las autoridades antes de completar la documentación"}
        ],
        correctAnswer: "b",
        explanation: "La documentación médica debe reflejar cronológicamente toda la información obtenida. Es importante documentar tanto la negativa inicial como la admisión posterior, explicando las circunstancias del cambio. Esto proporciona un registro completo y honesto que es crucial para la atención médica continuada, especialmente considerando las contraindicaciones de la nitroglicerina con el uso de cocaína."
    },
    {
        question: "Durante el transporte de un paciente psiquiátrico agitado, él le confía que planea lastimar a una persona específica cuando sea dado de alta. El paciente muestra signos de mejora con la medicación y solicita que mantenga esta información confidencial. Al llegar al hospital, el personal le pregunta sobre el comportamiento del paciente durante el transporte. ¿Cuál es su obligación de comunicación?",
        options: [
            {letter: "a", text: "Mantener la confidencialidad absoluta según los deseos del paciente"},
            {
                letter: "b",
                text: "Reportar la amenaza específica al personal hospitalario y seguir los protocolos de amenaza"
            },
            {letter: "c", text: "Solo mencionar la agitación general sin detalles específicos"},
            {letter: "d", text: "Esperar hasta completar la documentación escrita para revelar la información"}
        ],
        correctAnswer: "b",
        explanation: "El deber de advertir (Tarasoff duty) anula la confidencialidad del paciente cuando existe una amenaza específica y creíble contra una persona identificable. Esta información es crucial para la evaluación psiquiátrica y las medidas de protección necesarias. El personal hospitalario necesita esta información para tomar decisiones apropiadas sobre el alta y la seguridad pública."
    },
    {
        question: "Responde a una emergencia en una zona rural donde un trabajador agrícola de 28 años cayó de una altura considerable. Su supervisor, que habla inglés limitado, intenta traducir para el paciente que solo habla un dialecto local. La información traducida parece inconsistente y el paciente muestra signos neurológicos preocupantes. El hospital más cercano está a 45 minutos y no tiene servicio de traducción. ¿Cuál es su estrategia de comunicación más efectiva?",
        options: [
            {letter: "a", text: "Confiar completamente en el supervisor como traductor para ahorrar tiempo"},
            {
                letter: "b",
                text: "Utilizar comunicación no verbal y evaluación física exhaustiva mientras contacta servicios de traducción telefónica"
            },
            {letter: "c", text: "Transportar inmediatamente sin obtener historia adicional"},
            {letter: "d", text: "Esperar hasta encontrar un traductor competente antes de continuar"}
        ],
        correctAnswer: "b",
        explanation: "En situaciones de barrera idiomática crítica, la combinación de evaluación física exhaustiva, comunicación no verbal, y servicios de traducción telefónica es la más segura. Los signos neurológicos requieren evaluación cuidadosa que no puede depender de traducción inadecuada. Los servicios de traducción telefónica están disponibles 24/7 y proporcionan traducción médica certificada."
    },
    {
        question: "Durante una emergencia cardíaca nocturna, el médico de control médico le ordena administrar un medicamento que según su protocolo local requiere una dosis diferente a la indicada. Hay interferencia significativa en la comunicación por radio y no está seguro si escuchó correctamente la orden. El paciente está en deterioro rápido y cada minuto cuenta. ¿Cuál es su acción de comunicación más apropiada?",
        options: [
            {letter: "a", text: "Administrar el medicamento según el protocolo local sin consultar nuevamente"},
            {
                letter: "b",
                text: "Repetir la orden recibida palabra por palabra al control médico para confirmación antes de administrar"
            },
            {letter: "c", text: "Pedir que cambien de frecuencia para mejor recepción antes de proceder"},
            {letter: "d", text: "Administrar según la orden escuchada ya que el médico tiene autoridad superior"}
        ],
        correctAnswer: "b",
        explanation: "La técnica de 'eco' o repetición de órdenes verbales es un estándar de seguridad crítico en medicina de emergencia. Repetir la orden permite confirmar que se escuchó correctamente, especialmente con interferencia de radio. Esta práctica previene errores de medicación potencialmente fatales y asegura que tanto el médico como el paramédico estén de acuerdo en el tratamiento."
    },
    {
        question: "Está completando un FRAP para un paciente que sufrió un infarto agudo durante el cual su compañero cometió un error en la administración de medicamentos que temporalmente empeoró la condición del paciente. El error fue corregido y el paciente se estabilizó antes de llegar al hospital. Su compañero le pide que no mencione el error en la documentación. ¿Cuál es su responsabilidad profesional?",
        options: [
            {letter: "a", text: "Omitir el error para proteger a su compañero y evitar problemas legales"},
            {
                letter: "b",
                text: "Documentar objetivamente todos los medicamentos administrados, incluyendo las correcciones realizadas"
            },
            {letter: "c", text: "Reportar el error solo al supervisor, no en el FRAP"},
            {letter: "d", text: "Permitir que su compañero complete su propia documentación sin intervenir"}
        ],
        correctAnswer: "b",
        explanation: "La documentación médica debe ser completa, precisa y objetiva. Todos los medicamentos administrados, incluyendo errores y correcciones, deben documentarse para la seguridad del paciente y la continuidad del cuidado. Esta información es crucial para el personal hospitalario que continuará el tratamiento. La omisión de información médicamente relevante compromete la atención del paciente y viola los estándares profesionales."
    },
    {
        question: "Durante el transporte de una adolescente de 16 años con una sobredosis, sus padres llegan al hospital y demandan conocer exactamente qué sustancias consumió su hija y todos los detalles de lo que ella dijo durante el transporte. La menor había solicitado específicamente que no se lo dijeran a sus padres. El personal del hospital le pregunta qué información puede compartir de su reporte. ¿Cuál es el equilibrio apropiado entre confidencialidad y derechos parentales?",
        options: [
            {letter: "a", text: "Compartir toda la información con los padres ya que es menor de edad"},
            {
                letter: "b",
                text: "Proporcionar solo información médica necesaria para el tratamiento continuo, respetando la privacidad solicitada por la menor"
            },
            {letter: "c", text: "Negarse a proporcionar cualquier información sin una orden judicial"},
            {letter: "d", text: "Permitir que solo el personal hospitalario decida qué compartir"}
        ],
        correctAnswer: "b",
        explanation: "En casos de adolescentes con temas de sustancias, existe un equilibrio delicado entre los derechos parentales y la privacidad del menor. La información médicamente necesaria para el tratamiento continuo debe compartirse, pero los detalles específicos de conversaciones privadas pueden requerir consideración cuidadosa. Esto fomenta la confianza del menor en el sistema de salud mientras asegura que reciba el tratamiento adecuado."
    },
    {
        question: "Está atendiendo un accidente vehicular donde un conductor ebrio impactó a una familia. La madre de la familia está crítica, el padre está histérico demandando información constante, y los medios de comunicación han llegado solicitando detalles del accidente. Debe comunicar con múltiples hospitales para coordinar el destino de las víctimas mientras maneja la situación emocional. ¿Cuál es su prioridad de comunicación en esta situación compleja?",
        options: [
            {letter: "a", text: "Proporcionar información inmediata a los medios para controlar la narrativa"},
            {letter: "b", text: "Enfocar toda la atención en calmar al padre histérico"},
            {
                letter: "c",
                text: "Coordinar silenciosamente los destinos hospitalarios mientras designa a otro personal para manejar la familia y los medios"
            },
            {letter: "d", text: "Evacuar inmediatamente a todos los pacientes al hospital más cercano"}
        ],
        correctAnswer: "c",
        explanation: "En situaciones de múltiples demandas de comunicación, la triage de prioridades es esencial. La coordinación hospitalaria para pacientes críticos es la prioridad médica absoluta. La delegación efectiva permite que otros manejen los aspectos emocionales y de medios mientras el paramédico senior se enfoca en decisiones médicas críticas que determinan los resultados de los pacientes."
    },
    {
        question: "Su sistema electrónico de FRAP falla durante un turno especialmente ocupado con múltiples llamadas críticas. Debe documentar manualmente en papel y luego transferir la información cuando el sistema se restaure. Al día siguiente, se da cuenta de que algunos detalles específicos de uno de los casos se están volviendo borrosos en su memoria. ¿Cuál es la mejor práctica para manejar esta situación de documentación?",
        options: [
            {
                letter: "a",
                text: "Llenar los detalles faltantes basándose en lo que 'probablemente ocurrió' en situaciones similares"
            },
            {
                letter: "b",
                text: "Documentar solo la información que recuerda con certeza y anotar que algunos detalles no están disponibles debido a la falla del sistema"
            },
            {letter: "c", text: "Contactar al hospital para obtener información de su documentación"},
            {letter: "d", text: "Reconstruir la información consultando con su compañero y combinando recuerdos"}
        ],
        correctAnswer: "b",
        explanation: "La integridad de la documentación médica requiere absoluta honestidad. Es mejor documentar solo información que se recuerda con certeza y explicar las limitaciones del registro debido a circunstancias técnicas. Inventar o aproximar información compromete la validez legal del documento y puede afectar negativamente la atención futura del paciente. La transparencia sobre las limitaciones del registro es profesional y legalmente apropriada."
    },
    {
        question: "Durante una emergencia pediátrica, una madre extremadamente ansiosa interrumpe constantemente mientras intenta obtener información vital del niño de 8 años que está consciente pero asustado. La madre proporciona información contradictoria sobre alergias y medicamentos, y el niño se agita más cuando ella habla. Necesita información precisa para proporcionar tratamiento seguro. ¿Cuál es su estrategia de comunicación más efectiva?",
        options: [
            {letter: "a", text: "Pedirle a la madre que se retire temporalmente de la escena"},
            {
                letter: "b",
                text: "Separar gentilmente la obtención de historia: asignar a un miembro del equipo para hablar con la madre mientras usted obtiene información del niño"
            },
            {letter: "c", text: "Confiar únicamente en la información de la madre por ser la tutora legal"},
            {letter: "d", text: "Proceder sin obtener historia completa para evitar mayor agitación"}
        ],
        correctAnswer: "b",
        explanation: "La separación controlada de fuentes de información permite obtener datos más precisos de ambas partes sin crear más ansiedad. Un niño de 8 años puede proporcionar información valiosa sobre sus síntomas cuando no está abrumado por la ansiedad parental. Simultáneamente, un miembro del equipo puede obtener información de la madre en un ambiente más calmado. Esto optimiza la calidad de la información mientras mantiene a la familia unida."
    }
];
