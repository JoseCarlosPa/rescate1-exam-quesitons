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
        "question": "Usted es llamado a una escena donde un hombre de 30 años está actuando de forma errática. ¿Cuál de las siguientes acciones debe realizar PRIMERO?",
        "options": [
            {"letter": "a", "text": "Acercarse rápidamente al paciente para evaluar su pulso"},
            {"letter": "b", "text": "Evaluar la seguridad de la escena desde la distancia antes de acercarse"},
            {"letter": "c", "text": "Preparar inmediatamente las restricciones físicas"},
            {"letter": "d", "text": "Asumir que es una emergencia puramente psiquiátrica"}
        ],
        "correctAnswer": "b",
        "explanation": "La seguridad del personal es la máxima prioridad en cualquier llamada. Antes de acercarse a un paciente con un comportamiento impredecible, es fundamental evaluar la escena en busca de posibles peligros para usted, su equipo y el paciente."
    },
    {
        "question": "Un paciente diabético de 65 años presenta un inicio súbito de confusión, agresividad y habla incoherente. ¿Qué causa médica debe sospechar y evaluar prioritariamente?",
        "options": [
            {"letter": "a", "text": "Esquizofrenia"},
            {"letter": "b", "text": "Depresión"},
            {"letter": "c", "text": "Hipoglucemia"},
            {"letter": "d", "text": "Trastorno de ansiedad"}
        ],
        "correctAnswer": "c",
        "explanation": "En cualquier paciente con un cambio agudo en el estado mental, es crucial descartar causas médicas reversibles. La hipoglucemia (bajo nivel de azúcar en sangre) puede imitar una crisis psiquiátrica y es una causa común y tratable de comportamiento extraño y agresividad, especialmente en diabéticos."
    },
    {
        "question": "Al hablar con un paciente que expresa el deseo de quitarse la vida, ¿cuál de las siguientes preguntas es más importante para evaluar el riesgo inmediato?",
        "options": [
            {"letter": "a", "text": "¿Por qué se siente así?"},
            {"letter": "b", "text": "¿Tiene un plan específico para hacerlo?"},
            {"letter": "c", "text": "¿Ha pensado en buscar ayuda profesional?"},
            {"letter": "d", "text": "¿Sabe que eso afectaría a su familia?"}
        ],
        "correctAnswer": "b",
        "explanation": "Para evaluar el riesgo inminente de suicidio, es fundamental determinar si la ideación ha progresado a un plan. Un paciente con un plan específico, los medios para llevarlo a cabo y una intención clara presenta un riesgo mucho mayor y requiere una intervención inmediata."
    },
    {
        "question": "Un paciente muestra una fuerza física inusual, es insensible al dolor, está muy sudoroso y paranoico. Este cuadro es más consistente con:",
        "options": [
            {"letter": "a", "text": "Psicosis aguda"},
            {"letter": "b", "text": "Una reacción de duelo"},
            {"letter": "c", "text": "Delirio agitado"},
            {"letter": "d", "text": "Un ataque de pánico"}
        ],
        "correctAnswer": "c",
        "explanation": "El delirio agitado (o síndrome de delirio excitado) es una emergencia médica caracterizada por agitación extrema, comportamiento bizarro, fuerza sobrehumana, insensibilidad al dolor e hipertermia. A menudo se asocia con el abuso de estimulantes y tiene una alta tasa de mortalidad."
    },
    {
        "question": "Al aplicar restricciones físicas a un paciente violento, ¿cuál de las siguientes acciones es incorrecta y peligrosa?",
        "options": [
            {"letter": "a", "text": "Usar suficiente personal para controlar al paciente de forma segura"},
            {"letter": "b", "text": "Colocar al paciente en posición prona (boca abajo) para un mejor control"},
            {
                "letter": "c",
                "text": "Evaluar el pulso, la motricidad y la sensibilidad de las extremidades después de la restricción"
            },
            {"letter": "d", "text": "Usar restricciones blandas para minimizar el riesgo de lesiones"}
        ],
        "correctAnswer": "b",
        "explanation": "Colocar a un paciente restringido en posición prona (boca abajo) está contraindicado debido al alto riesgo de asfixia posicional, especialmente si se ejerce presión sobre su espalda. La posición supina o de lado es más segura."
    },
    {
        "question": "Usted está tratando a un paciente que experimenta alucinaciones auditivas. La estrategia de comunicación más apropiada es:",
        "options": [
            {"letter": "a", "text": "Confirmar que usted también escucha las voces para ganar su confianza"},
            {"letter": "b", "text": "Ignorar por completo lo que el paciente dice sobre las voces"},
            {"letter": "c", "text": "Decirle que las voces no son reales y que está equivocado"},
            {"letter": "d", "text": "Reconocer que el paciente escucha las voces, pero explicarle que usted no las oye"}
        ],
        "correctAnswer": "d",
        "explanation": "La mejor técnica es validar la percepción del paciente sin confirmar la alucinación. Frases como 'Entiendo que usted está escuchando voces, pero yo no las oigo' muestran empatía y establecen la realidad sin ser conflictivo, lo que ayuda a construir una relación de confianza."
    },
    {
        "question": "Un paciente con un trastorno de estrés postraumático (TEPT) puede presentar una reacción exagerada a estímulos que le recuerden su trauma. Su manejo debe incluir:",
        "options": [
            {"letter": "a", "text": "Un entorno tranquilo y evitar movimientos bruscos o ruidos fuertes"},
            {"letter": "b", "text": "Hablar en voz alta y con firmeza para mantener el control"},
            {"letter": "c", "text": "Restringirlo inmediatamente para prevenir una reacción violenta"},
            {"letter": "d", "text": "Pedirle que describa el evento traumático en detalle para entenderlo mejor"}
        ],
        "correctAnswer": "a",
        "explanation": "Los pacientes con TEPT pueden ser hipersensibles a estímulos ambientales. Crear un entorno calmado, explicar los procedimientos antes de realizarlos y evitar sorpresas (como ruidos fuertes o movimientos repentinos) puede ayudar a prevenir una escalada de la ansiedad o una reacción de flashback."
    },
    {
        "question": "El consentimiento para tratar a un paciente que no está orientado y representa un peligro para sí mismo se basa generalmente en el principio de:",
        "options": [
            {"letter": "a", "text": "Consentimiento informado"},
            {"letter": "b", "text": "Consentimiento expresado"},
            {"letter": "c", "text": "Consentimiento implícito"},
            {"letter": "d", "text": "Se debe esperar a un familiar para obtener el consentimiento"}
        ],
        "correctAnswer": "c",
        "explanation": "Cuando un paciente no tiene la capacidad para tomar decisiones (no está alerta y orientado) y su condición representa una amenaza para su vida o su seguridad, la ley opera bajo el principio de consentimiento implícito. Se asume que una persona razonable en esa situación querría recibir ayuda."
    },
    {
        "question": "La psicosis se diferencia de otras crisis conductuales principalmente por:",
        "options": [
            {"letter": "a", "text": "La presencia de tristeza y desesperanza"},
            {"letter": "b", "text": "La presencia de un deterioro del contacto con la realidad"},
            {"letter": "c", "text": "La presencia de ansiedad y miedo"},
            {"letter": "d", "text": "La presencia de un comportamiento violento"}
        ],
        "correctAnswer": "b",
        "explanation": "La característica definitoria de la psicosis es la pérdida de contacto con la realidad. Esto se manifiesta a través de síntomas como alucinaciones (percepciones sensoriales sin estímulo externo) y delirios (creencias falsas y firmemente sostenidas)."
    },
    {
        "question": "La principal razón para involucrar a la policía en una emergencia psiquiátrica es:",
        "options": [
            {"letter": "a", "text": "Para que diagnostiquen al paciente"},
            {"letter": "b", "text": "Para que autoricen el tratamiento médico"},
            {
                "letter": "c",
                "text": "Para garantizar la seguridad del paciente y del equipo de SVA/SEM cuando hay riesgo de violencia"
            },
            {"letter": "d", "text": "Para que transporten al paciente en la patrulla"}
        ],
        "correctAnswer": "c",
        "explanation": "El papel de la policía en una emergencia médica o psiquiátrica es garantizar la seguridad de la escena. Su presencia es necesaria cuando un paciente representa un peligro para sí mismo o para otros, permitiendo que el personal del SEM pueda realizar su trabajo de evaluación y tratamiento de forma segura."
    }
]