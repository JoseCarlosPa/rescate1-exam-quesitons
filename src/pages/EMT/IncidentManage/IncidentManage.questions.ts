import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el Sistema de Comando de Incidentes (SCI)?",
        answer: "Es un sistema de manejo estandarizado que permite la coordinación efectiva de recursos, personal y operaciones durante emergencias. Utiliza una estructura organizacional modular que puede expandirse según la complejidad del incidente.",
    },
    {
        question: "¿Cuáles son los principios fundamentales del SCI?",
        answer: "Los principios incluyen: unidad de comando, cadena de comando clara, alcance de control manejable, terminología común, recursos consolidados, comunicaciones integradas, plan de acción definido, perímetros de seguridad y flexibilidad.",
    },
    {
        question: "¿Qué diferencia hay entre un incidente simple y uno complejo?",
        answer: "Un incidente simple requiere una sola unidad de respuesta con recursos limitados y tiempo de resolución corto. Un incidente complejo involucra múltiples víctimas, requiere múltiples agencias, recursos especializados y operaciones prolongadas.",
    },
    {
        question: "¿Cuáles son las principales secciones del SCI?",
        answer: "Las secciones principales son: Comando (responsabilidad general), Operaciones (actividades tácticas), Planificación (recopilación de información), Logística (recursos y apoyo), y Administración/Finanzas (documentación y costos).",
    },
    {
        question: "¿Qué es el triaje START y cuándo se utiliza?",
        answer: "START (Simple Triage And Rapid Treatment) es un método de triaje para incidentes con múltiples víctimas. Evalúa movilidad, respiración, circulación y función neurológica para clasificar víctimas en categorías de prioridad (verde, amarillo, rojo, negro).",
    },
    {
        question: "¿Cómo se establecen las zonas operacionales en un incidente?",
        answer: "Se establecen tres zonas: Zona Caliente (área de mayor peligro, solo personal especializado), Zona Tibia (descontaminación y triaje inicial), y Zona Fría (área segura con comando, tratamiento y logística).",
    },
    {
        question: "¿Qué debe incluir la transferencia de comando?",
        answer: "Debe incluir briefing de la situación actual, estado de objetivos, prioridades y estrategias, recursos disponibles, organización del SCI, problemas de seguridad, instalaciones establecidas y anuncio formal de la transferencia.",
    },
    {
        question: "¿Cuáles son las responsabilidades del Comandante de Incidente?",
        answer: "Sus responsabilidades incluyen: responsabilidad general del incidente, establecer objetivos y prioridades, desarrollar estrategia general, asegurar seguridad del personal, coordinar con otras agencias y autorizar liberación de recursos.",
    },
];

export const incidentManageQuestions: Question[] = [
    {
        "question": "¿Cuál es el primer paso al llegar a un incidente con múltiples víctimas?",
        "options": [
            {"letter": "a", "text": "Comenzar inmediatamente la atención médica"},
            {"letter": "b", "text": "Establecer el comando de incidente"},
            {"letter": "c", "text": "Evaluar la escena y establecer la seguridad"},
            {"letter": "d", "text": "Realizar triaje de todas las víctimas"}
        ],
        "correctAnswer": "c",
        "explanation": "La prioridad número uno al llegar a cualquier escena es la seguridad del personal de respuesta y de los pacientes. Antes de iniciar cualquier otra acción, se debe realizar una evaluación 360° para identificar peligros (tráfico, fuego, materiales peligrosos) y establecer un perímetro seguro."
    },
    {
        "question": "En el Sistema de Comando de Incidentes, ¿cuál es la función principal del Comandante de Incidente?",
        "options": [
            {"letter": "a", "text": "Proporcionar atención médica directa"},
            {"letter": "b", "text": "Responsabilidad general del incidente y establecer objetivos"},
            {"letter": "c", "text": "Manejar únicamente las comunicaciones"},
            {"letter": "d", "text": "Supervisar solo las operaciones de rescate"}
        ],
        "correctAnswer": "b",
        "explanation": "El Comandante de Incidente (CI) es la persona con la máxima autoridad y responsabilidad sobre la escena. Su función es la gestión estratégica general: evaluar la situación, establecer los objetivos, desarrollar el plan de acción y asignar los recursos necesarios."
    },
    {
        "question": "¿Cuál de las siguientes NO es una de las secciones principales del SCI?",
        "options": [
            {"letter": "a", "text": "Operaciones"},
            {"letter": "b", "text": "Planificación"},
            {"letter": "c", "text": "Investigación"},
            {"letter": "d", "text": "Logística"}
        ],
        "correctAnswer": "c",
        "explanation": "Las cuatro secciones principales del Sistema de Comando de Incidentes (SCI) bajo el mando del Comandante son: Operaciones, Planificación, Logística y Finanzas/Administración. La investigación del incidente es una función que se realiza generalmente después de que el incidente ha concluido."
    },
    {
        "question": "En el triaje START, una víctima que puede caminar se clasifica como:",
        "options": [
            {"letter": "a", "text": "Prioridad inmediata (rojo)"},
            {"letter": "b", "text": "Prioridad urgente (amarillo)"},
            {"letter": "c", "text": "Prioridad demorada (verde)"},
            {"letter": "d", "text": "Sin prioridad (negro)"}
        ],
        "correctAnswer": "c",
        "explanation": "El primer paso del triaje START es pedir a todas las víctimas que puedan caminar que se dirijan a un área designada. A estas víctimas ('walking wounded') se les asigna automáticamente la categoría de prioridad demorada (Verde), ya que se asume que sus lesiones no amenazan la vida de forma inmediata."
    },
    {
        "question": "¿Qué color de triaje se asigna a víctimas con lesiones críticas pero salvables con atención inmediata?",
        "options": [
            {"letter": "a", "text": "Verde"},
            {"letter": "b", "text": "Amarillo"},
            {"letter": "c", "text": "Rojo"},
            {"letter": "d", "text": "Negro"}
        ],
        "correctAnswer": "c",
        "explanation": "La categoría Rojo (Prioridad Inmediata) se reserva para pacientes con lesiones que amenazan la vida y que tienen una alta probabilidad de sobrevivir si reciben tratamiento médico inmediato. Estos pacientes son la máxima prioridad para el tratamiento y el transporte."
    },
    {
        "question": "La Zona Caliente en un incidente se caracteriza por:",
        "options": [
            {"letter": "a", "text": "Ser el área de tratamiento médico"},
            {"letter": "b", "text": "Ser el área de mayor peligro inmediato"},
            {"letter": "c", "text": "Ser donde se ubica el puesto de comando"},
            {"letter": "d", "text": "Ser el área de reunión familiar"}
        ],
        "correctAnswer": "b",
        "explanation": "La Zona Caliente (o Zona de Exclusión) es el área inmediatamente alrededor del peligro (fuego, derrame químico, etc.). El acceso está restringido únicamente al personal con el equipo de protección adecuado para realizar tareas de rescate o mitigación del peligro. No se realiza tratamiento médico en esta zona."
    },
    {
        "question": "¿Cuál es el alcance de control recomendado para un supervisor en el SCI?",
        "options": [
            {"letter": "a", "text": "3-7 subordinados"},
            {"letter": "b", "text": "5-10 subordinados"},
            {"letter": "c", "text": "10-15 subordinados"},
            {"letter": "d", "text": "No hay límite específico"}
        ],
        "correctAnswer": "a",
        "explanation": "El principio de 'alcance de control' establece que un supervisor puede manejar eficazmente entre 3 y 7 subordinados. El número óptimo es 5. Esto asegura que el supervisor no se sobrecargue y pueda mantener una comunicación y supervisión efectivas."
    },
    {
        "question": "En un incidente HAZMAT, ¿desde qué dirección debe aproximarse la primera unidad?",
        "options": [
            {"letter": "a", "text": "Desde cualquier dirección disponible"},
            {"letter": "b", "text": "Desde la dirección del viento"},
            {"letter": "c", "text": "Desde una dirección favorable al viento (viento a sus espaldas)"},
            {"letter": "d", "text": "Siempre desde el norte"}
        ],
        "correctAnswer": "c",
        "explanation": "La regla de seguridad en incidentes con materiales peligrosos (HAZMAT) es aproximarse desde una posición 'cuesta arriba y con el viento a favor'. Esto significa que el viento debe soplar desde su espalda hacia el incidente, alejando de usted cualquier vapor, humo o partícula peligrosa."
    },
    {
        "question": "¿Qué significa el principio de 'unidad de comando' en el SCI?",
        "options": [
            {"letter": "a", "text": "Todos los recursos deben ser similares"},
            {"letter": "b", "text": "Una sola persona tiene la responsabilidad general del incidente"},
            {"letter": "c", "text": "Solo una agencia puede responder al incidente"},
            {"letter": "d", "text": "Todos deben usar el mismo equipo"}
        ],
        "correctAnswer": "b",
        "explanation": "El principio de 'Unidad de Comando' establece que hay un solo Comandante de Incidente con la responsabilidad general del manejo del evento. Esto asegura un liderazgo claro y evita la confusión que surgiría con múltiples personas dando órdenes contradictorias. Nota: No confundir con 'Cadena de Mando', donde cada persona reporta a un solo supervisor."
    },
    {
        "question": "Durante la transferencia de comando, ¿qué información NO es esencial incluir?",
        "options": [
            {"letter": "a", "text": "Situación actual del incidente"},
            {"letter": "b", "text": "Recursos disponibles y asignados"},
            {"letter": "c", "text": "Información personal del comandante saliente"},
            {"letter": "d", "text": "Problemas de seguridad identificados"}
        ],
        "correctAnswer": "c",
        "explanation": "La transferencia de comando debe ser un informe breve y conciso centrado en el estado operativo del incidente. La información personal del comandante que se retira (como su número de teléfono o dirección) no es relevante para la gestión táctica y estratégica del evento."
    },
    {
        "question": "¿Cuál es la función principal de la Sección de Operaciones en el SCI?",
        "options": [
            {"letter": "a", "text": "Manejar las finanzas del incidente"},
            {"letter": "b", "text": "Realizar todas las actividades tácticas del incidente"},
            {"letter": "c", "text": "Recopilar y evaluar información"},
            {"letter": "d", "text": "Proporcionar recursos y servicios de apoyo"}
        ],
        "correctAnswer": "b",
        "explanation": "La Sección de Operaciones es el 'brazo ejecutor' del plan. Es responsable de llevar a cabo todas las acciones tácticas directamente relacionadas con el control del incidente, como el rescate, la extinción de incendios y la atención médica a las víctimas."
    },
    {
        "question": "En el triaje START, si una víctima tiene una frecuencia respiratoria de 35/min, se clasifica como:",
        "options": [
            {"letter": "a", "text": "Verde"},
            {"letter": "b", "text": "Amarillo"},
            {"letter": "c", "text": "Rojo"},
            {"letter": "d", "text": "Negro"}
        ],
        "correctAnswer": "c",
        "explanation": "Según el algoritmo START, después de abrir la vía aérea de una víctima que no respira, se evalúa la frecuencia respiratoria. Si es superior a 30 respiraciones por minuto, se considera un signo de shock o dificultad respiratoria grave y se clasifica inmediatamente como Rojo (Prioridad Inmediata)."
    },
    {
        "question": "¿Qué instalación es responsable de la clasificación inicial de víctimas en un MCI?",
        "options": [
            {"letter": "a", "text": "Puesto de comando"},
            {"letter": "b", "text": "Área de triaje"},
            {"letter": "c", "text": "Área de tratamiento"},
            {"letter": "d", "text": "Área de transporte"}
        ],
        "correctAnswer": "b",
        "explanation": "El Área de Triaje es el lugar designado donde las víctimas son evaluadas y clasificadas por primera vez según la gravedad de sus lesiones utilizando un sistema como START. Desde aquí, son dirigidas a las áreas de tratamiento correspondientes."
    },
    {
        "question": "El Oficial de Seguridad tiene la autoridad para:",
        "options": [
            {"letter": "a", "text": "Solo hacer recomendaciones de seguridad"},
            {"letter": "b", "text": "Detener operaciones que considere inseguras"},
            {"letter": "c", "text": "Únicamente documentar problemas de seguridad"},
            {"letter": "d", "text": "Solo reportar al comandante"}
        ],
        "correctAnswer": "b",
        "explanation": "El Oficial de Seguridad es una de las posiciones más importantes del personal de comando. Tiene la autoridad total para detener o modificar cualquier operación o acción en la escena que represente un peligro inminente para la vida o la salud del personal, incluso pasando por alto la cadena de mando si es necesario."
    },
    {
        "question": "¿Cuál es la principal ventaja del Sistema de Comando de Incidentes?",
        "options": [
            {"letter": "a", "text": "Reduce el número de personal necesario"},
            {"letter": "b", "text": "Elimina la necesidad de entrenamiento"},
            {"letter": "c", "text": "Proporciona un enfoque estandarizado y escalable para el manejo de incidentes"},
            {"letter": "d", "text": "Garantiza que solo una agencia responda"}
        ],
        "correctAnswer": "c",
        "explanation": "La mayor fortaleza del SCI es su flexibilidad. Proporciona una estructura de gestión común y estandarizada que puede ser utilizada para cualquier tipo de incidente, desde una pequeña colisión de tráfico hasta un gran desastre natural, expandiéndose o contrayéndose según las necesidades del evento."
    }
]