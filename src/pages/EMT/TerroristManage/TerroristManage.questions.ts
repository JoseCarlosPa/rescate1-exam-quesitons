import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un incidente terrorista desde la perspectiva prehospitalaria?",
        answer: "Es un evento intencional que involucra el uso de violencia, sustancias químicas, biológicas, radiológicas o explosivos para causar daño masivo, generar terror y desestabilizar la sociedad, requiriendo una respuesta coordinada de múltiples agencias.",
    },
    {
        question: "¿Cuáles son los tipos principales de armas de destrucción masiva (ADM)?",
        answer: "Los tipos principales son: Químicas (gases tóxicos, agentes nerviosos), Biológicas (bacterias, virus, toxinas), Radiológicas (materiales radioactivos), Nucleares (armas nucleares) y Explosivas (bombas convencionales, IED). Se conocen como agentes CBRNE.",
    },
    {
        question: "¿Qué es el concepto de 'zona caliente, tibia y fría' en un incidente CBRNE?",
        answer: "Zona Caliente: área de mayor contaminación/peligro, acceso solo a personal especializado con EPP completo. Zona Tibia: área de descontaminación y control, personal con EPP. Zona Fría: área segura donde se establece el comando, tratamiento y logística.",
    },
    {
        question: "¿Cuáles son las fases principales de respuesta a un desastre?",
        answer: "Las fases son: Prevención/Mitigación (reducir riesgos), Preparación (planes y entrenamientos), Respuesta (acciones inmediatas durante el evento) y Recuperación (restauración de servicios y comunidad a largo plazo). Cada fase requiere coordinación específica.",
    },
    {
        question: "¿Qué principios de seguridad debe seguir el personal prehospitalario en escenas de terrorismo?",
        answer: "Evaluar la escena antes del ingreso, usar EPP apropiado, mantener comunicación constante, establecer rutas de escape, trabajar en parejas, seguir protocolos de descontaminación y no ingresar hasta que la escena sea declarada segura por autoridades competentes.",
    },
    {
        question: "¿Qué es el triaje en incidentes de múltiples víctimas y cuál es su objetivo?",
        answer: "Es el proceso de clasificación rápida de víctimas según la gravedad de sus lesiones y probabilidad de supervivencia para optimizar el uso de recursos limitados. El objetivo es hacer el mayor bien para el mayor número de personas.",
    },
    {
        question: "¿Cuáles son las categorías del triaje START?",
        answer: "Verde (ambulatorio/leve): pueden caminar. Amarillo (urgente): necesitan atención pero no inmediata. Rojo (inmediato): requieren atención inmediata para sobrevivir. Negro (expectante): lesiones incompatibles con la vida o muerte.",
    },
    {
        question: "¿Qué consideraciones especiales se deben tener con víctimas de ataques químicos?",
        answer: "Descontaminación inmediata antes del tratamiento, uso de EPP adecuado, identificación del agente cuando sea posible, administración de antídotos específicos si están disponibles, y manejo de síntomas según el tipo de agente químico involucrado.",
    },
];

export const terroristManageQuestions: Question[] = [
    {
        "question": "¿Cuál es la primera prioridad del personal prehospitalario al llegar a la escena de un posible ataque terrorista?",
        "options": [
            { "letter": "a", "text": "Iniciar inmediatamente el triaje de víctimas" },
            { "letter": "b", "text": "Establecer un perímetro de seguridad" },
            { "letter": "c", "text": "Evaluar la seguridad de la escena y esperar autorización para ingresar" },
            { "letter": "d", "text": "Comunicarse con los medios de comunicación" }
        ],
        "correctAnswer": "c",
        "explanation": "La seguridad del personal es la prioridad número uno. En un ataque terrorista, existe un alto riesgo de peligros continuos, como tiradores activos o dispositivos explosivos secundarios. El personal del SEM debe permanecer en un área segura (zona fría) hasta que las fuerzas del orden declaren la escena segura."
    },
    {
        "question": "En el sistema de triaje START, una víctima que puede caminar se clasifica como:",
        "options": [
            { "letter": "a", "text": "Prioridad roja (inmediato)" },
            { "letter": "b", "text": "Prioridad amarilla (urgente)" },
            { "letter": "c", "text": "Prioridad verde (leve/ambulatorio)" },
            { "letter": "d", "text": "Prioridad negra (expectante)" }
        ],
        "correctAnswer": "c",
        "explanation": "El primer paso del triaje START es instruir a todas las víctimas que puedan caminar para que se dirijan a un área designada. A estas víctimas, conocidas como 'heridos caminantes', se les asigna automáticamente la categoría Verde (leve/demorado) para una evaluación posterior."
    },
    {
        "question": "¿Qué significa la sigla CBRNE en el contexto de armas de destrucción masiva?",
        "options": [
            { "letter": "a", "text": "Cardiovascular, Biológico, Radiológico, Nuclear, Explosivo" },
            { "letter": "b", "text": "Químico, Biológico, Radiológico, Nuclear, Explosivo" },
            { "letter": "c", "text": "Civil, Biológico, Respiratorio, Nuclear, Eléctrico" },
            { "letter": "d", "text": "Químico, Bacterial, Radiológico, Natural, Explosivo" }
        ],
        "correctAnswer": "b",
        "explanation": "CBRNE es un acrónimo que clasifica los tipos de agentes de armas de destrucción masiva: Químico (agentes nerviosos, vesicantes), Biológico (bacterias, virus), Radiológico ('bomba sucia'), Nuclear (dispositivo nuclear) y Explosivo (bombas convencionales)."
    },
    {
        "question": "En un incidente CBRNE, ¿cuál es la función principal de la zona tibia?",
        "options": [
            { "letter": "a", "text": "Área donde se realiza la atención médica definitiva" },
            { "letter": "b", "text": "Zona de mayor contaminación donde trabajan los especialistas" },
            { "letter": "c", "text": "Área de descontaminación y control de acceso" },
            { "letter": "d", "text": "Lugar donde se establece el centro de comando" }
        ],
        "correctAnswer": "c",
        "explanation": "La zona tibia es el corredor de reducción de la contaminación, situado entre la zona caliente (contaminada) y la zona fría (segura). Su propósito es la descontaminación de las víctimas y del personal de rescate antes de que puedan pasar a la zona fría para recibir tratamiento médico."
    },
    {
        "question": "Un paciente víctima de un ataque químico presenta miosis, sudoración excesiva, salivación y fasciculaciones musculares. Estos síntomas sugieren exposición a:",
        "options": [
            { "letter": "a", "text": "Agentes vesicantes" },
            { "letter": "b", "text": "Agentes nerviosos (organofosforados)" },
            { "letter": "c", "text": "Agentes asfixiantes" },
            { "letter": "d", "text": "Agentes incapacitantes" }
        ],
        "correctAnswer": "b",
        "explanation": "Estos son signos clásicos de una crisis colinérgica, causada por agentes nerviosos. Estos agentes inhiben la acetilcolinesterasa, lo que lleva a una sobreestimulación del sistema nervioso parasimpático. El acrónimo SLUDGEM (Salivación, Lagrimeo, Urinación, Defecación, Malestar GI, Emesis, Miosis) describe estos efectos."
    },
    {
        "question": "¿Cuál es el antídoto principal para la intoxicación por agentes nerviosos?",
        "options": [
            { "letter": "a", "text": "Naloxona" },
            { "letter": "b", "text": "Flumazenil" },
            { "letter": "c", "text": "Atropina" },
            { "letter": "d", "text": "Epinefrina" }
        ],
        "correctAnswer": "c",
        "explanation": "La atropina es un anticolinérgico que bloquea los receptores muscarínicos, contrarrestando los efectos de la sobrecarga de acetilcolina causada por el agente nervioso. Se administra en grandes dosis para secar las secreciones y aumentar la frecuencia cardíaca. A menudo se usa junto con pralidoxima."
    },
    {
        "question": "En el triaje START, una víctima inconsciente con respiración espontánea a 35/min y pulso radial presente se clasifica como:",
        "options": [
            { "letter": "a", "text": "Verde (leve)" },
            { "letter": "b", "text": "Amarillo (urgente)" },
            { "letter": "c", "text": "Rojo (inmediato)" },
            { "letter": "d", "text": "Negro (expectante)" }
        ],
        "correctAnswer": "c",
        "explanation": "Según el algoritmo START, se evalúa la respiración (R). Una frecuencia respiratoria superior a 30 por minuto indica una condición crítica que requiere atención inmediata. Por lo tanto, el paciente se clasifica como Rojo (inmediato)."
    },
    {
        "question": "¿Cuál de las siguientes acciones NO debe realizar el personal prehospitalario en una escena de atentado con explosivos?",
        "options": [
            { "letter": "a", "text": "Buscar dispositivos secundarios" },
            { "letter": "b", "text": "Ingresar inmediatamente para ayudar a las víctimas" },
            { "letter": "c", "text": "Establecer un perímetro de seguridad" },
            { "letter": "d", "text": "Coordinar con fuerzas del orden" }
        ],
        "correctAnswer": "b",
        "explanation": "Ingresar a una escena de explosión sin que haya sido declarada segura por la policía o los técnicos en explosivos es extremadamente peligroso. Los ataques terroristas a menudo utilizan dispositivos secundarios diseñados específicamente para dañar a los primeros respondientes."
    },
    {
        "question": "En un desastre natural, ¿cuál es la secuencia correcta de las fases de manejo?",
        "options": [
            { "letter": "a", "text": "Respuesta, Prevención, Preparación, Recuperación" },
            { "letter": "b", "text": "Prevención, Preparación, Respuesta, Recuperación" },
            { "letter": "c", "text": "Preparación, Respuesta, Prevención, Recuperación" },
            { "letter": "d", "text": "Recuperación, Prevención, Preparación, Respuesta" }
        ],
        "correctAnswer": "b",
        "explanation": "El ciclo de manejo de emergencias es un proceso continuo: 1) Prevención/Mitigación (reducir el riesgo), 2) Preparación (planificar y entrenar), 3) Respuesta (acciones durante el evento), y 4) Recuperación (regresar a la normalidad)."
    },
    {
        "question": "¿Qué tipo de EPP es esencial para el personal que trabaja en la zona tibia de un incidente químico?",
        "options": [
            { "letter": "a", "text": "Solo guantes y mascarilla quirúrgica" },
            { "letter": "b", "text": "Traje completo de protección química con SCBA" },
            { "letter": "c", "text": "Ropa de trabajo estándar con gafas de seguridad" },
            { "letter": "d", "text": "Bata desechable y guantes de nitrilo" }
        ],
        "correctAnswer": "b",
        "explanation": "La zona tibia es donde se realiza la descontaminación y todavía existe un alto riesgo de exposición al agente químico. El personal en esta zona requiere un alto nivel de protección, que generalmente incluye un traje resistente a químicos y un equipo de respiración autónoma (SCBA)."
    },
    {
        "question": "Un paciente presenta quemaduras químicas en la piel después de exposición a un agente vesicante. El manejo inicial incluye:",
        "options": [
            { "letter": "a", "text": "Aplicar hielo directamente en las quemaduras" },
            { "letter": "b", "text": "Irrigación copiosa con agua durante al menos 20 minutos" },
            { "letter": "c", "text": "Aplicar ungüento antibiótico inmediatamente" },
            { "letter": "d", "text": "Vendar las heridas sin lavar" }
        ],
        "correctAnswer": "b",
        "explanation": "El tratamiento más importante para la mayoría de las exposiciones químicas cutáneas es la descontaminación inmediata. Esto se logra con una irrigación abundante y prolongada con agua para diluir y eliminar físicamente el agente químico de la piel."
    },
    {
        "question": "¿Cuál es el objetivo principal del triaje en incidentes de múltiples víctimas?",
        "options": [
            { "letter": "a", "text": "Tratar primero a los pacientes más graves" },
            { "letter": "b", "text": "Hacer el mayor bien para el mayor número de personas" },
            { "letter": "c", "text": "Evacuar rápidamente a todos los pacientes" },
            { "letter": "d", "text": "Identificar a las víctimas mortales" }
        ],
        "correctAnswer": "b",
        "explanation": "El triaje en desastres cambia el enfoque de la atención individual al bien colectivo. El objetivo es utilizar los recursos limitados de la manera más efectiva para salvar la mayor cantidad de vidas posible, lo que a veces significa priorizar a un paciente gravemente herido pero salvable sobre otro con lesiones mortales."
    },
    {
        "question": "En un incidente con múltiples víctimas, ¿cuándo se debe reevaluar el triaje de un paciente?",
        "options": [
            { "letter": "a", "text": "Solo al final del incidente" },
            { "letter": "b", "text": "Nunca, una vez clasificado permanece igual" },
            { "letter": "c", "text": "Continuamente según cambie su condición" },
            { "letter": "d", "text": "Solo si el paciente lo solicita" }
        ],
        "correctAnswer": "c",
        "explanation": "El triaje no es un evento único, sino un proceso dinámico. La condición de un paciente puede deteriorarse (o mejorar) con el tiempo. Por lo tanto, los pacientes deben ser reevaluados continuamente, especialmente al moverlos entre las diferentes áreas de tratamiento y antes del transporte."
    },
    {
        "question": "¿Qué información es crítica comunicar al hospital receptor durante un incidente terrorista?",
        "options": [
            { "letter": "a", "text": "Solo el número de víctimas" },
            { "letter": "b", "text": "Tipo de agente, número de víctimas, severidad y ETA" },
            { "letter": "c", "text": "Únicamente la hora estimada de llegada" },
            { "letter": "d", "text": "Los nombres de las víctimas" }
        ],
        "correctAnswer": "b",
        "explanation": "Para que un hospital se prepare para recibir múltiples víctimas de un evento CBRNE, necesita saber: qué tipo de agente está involucrado (para preparar antídotos y descontaminación), cuántos pacientes esperar, la gravedad general de sus lesiones, y cuándo comenzarán a llegar (ETA)."
    },
    {
        "question": "Los síntomas de exposición a agentes biológicos generalmente se presentan:",
        "options": [
            { "letter": "a", "text": "Inmediatamente después de la exposición" },
            { "letter": "b", "text": "Dentro de los primeros 5 minutos" },
            { "letter": "c", "text": "Horas a días después de la exposición (período de incubación)" },
            { "letter": "d", "text": "Solo en personas inmunocomprometidas" }
        ],
        "correctAnswer": "c",
        "explanation": "A diferencia de los agentes químicos, que causan efectos inmediatos, los agentes biológicos (como bacterias o virus) requieren un período de incubación. Durante este tiempo, el agente se replica en el cuerpo antes de que aparezcan los síntomas de la enfermedad, lo que puede dificultar la identificación temprana de un ataque."
    }
]