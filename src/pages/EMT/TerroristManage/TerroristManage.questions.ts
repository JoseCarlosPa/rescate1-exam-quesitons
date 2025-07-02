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
        question: "¿Cuál es la primera prioridad del personal prehospitalario al llegar a la escena de un posible ataque terrorista?",
        options: [
            { letter: "a", text: "Iniciar inmediatamente el triaje de víctimas" },
            { letter: "b", text: "Establecer un perímetro de seguridad" },
            { letter: "c", text: "Evaluar la seguridad de la escena y esperar autorización para ingresar" },
            { letter: "d", text: "Comunicarse con los medios de comunicación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En el sistema de triaje START, una víctima que puede caminar se clasifica como:",
        options: [
            { letter: "a", text: "Prioridad roja (inmediato)" },
            { letter: "b", text: "Prioridad amarilla (urgente)" },
            { letter: "c", text: "Prioridad verde (leve/ambulatorio)" },
            { letter: "d", text: "Prioridad negra (expectante)" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué significa la sigla CBRNE en el contexto de armas de destrucción masiva?",
        options: [
            { letter: "a", text: "Cardiovascular, Biológico, Radiológico, Nuclear, Explosivo" },
            { letter: "b", text: "Químico, Biológico, Radiológico, Nuclear, Explosivo" },
            { letter: "c", text: "Civil, Biológico, Respiratorio, Nuclear, Eléctrico" },
            { letter: "d", text: "Químico, Bacterial, Radiológico, Natural, Explosivo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un incidente CBRNE, ¿cuál es la función principal de la zona tibia?",
        options: [
            { letter: "a", text: "Área donde se realiza la atención médica definitiva" },
            { letter: "b", text: "Zona de mayor contaminación donde trabajan los especialistas" },
            { letter: "c", text: "Área de descontaminación y control de acceso" },
            { letter: "d", text: "Lugar donde se establece el centro de comando" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente víctima de un ataque químico presenta miosis, sudoración excesiva, salivación y fasciculaciones musculares. Estos síntomas sugieren exposición a:",
        options: [
            { letter: "a", text: "Agentes vesicantes" },
            { letter: "b", text: "Agentes nerviosos (organofosforados)" },
            { letter: "c", text: "Agentes asfixiantes" },
            { letter: "d", text: "Agentes incapacitantes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el antídoto principal para la intoxicación por agentes nerviosos?",
        options: [
            { letter: "a", text: "Naloxona" },
            { letter: "b", text: "Flumazenil" },
            { letter: "c", text: "Atropina" },
            { letter: "d", text: "Epinefrina" },
        ],
        correctAnswer: "c",
    },
    {
        question: "En el triaje START, una víctima inconsciente con respiración espontánea a 35/min y pulso radial presente se clasifica como:",
        options: [
            { letter: "a", text: "Verde (leve)" },
            { letter: "b", text: "Amarillo (urgente)" },
            { letter: "c", text: "Rojo (inmediato)" },
            { letter: "d", text: "Negro (expectante)" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de las siguientes acciones NO debe realizar el personal prehospitalario en una escena de atentado con explosivos?",
        options: [
            { letter: "a", text: "Buscar dispositivos secundarios" },
            { letter: "b", text: "Ingresar inmediatamente para ayudar a las víctimas" },
            { letter: "c", text: "Establecer un perímetro de seguridad" },
            { letter: "d", text: "Coordinar con fuerzas del orden" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un desastre natural, ¿cuál es la secuencia correcta de las fases de manejo?",
        options: [
            { letter: "a", text: "Respuesta, Prevención, Preparación, Recuperación" },
            { letter: "b", text: "Prevención, Preparación, Respuesta, Recuperación" },
            { letter: "c", text: "Preparación, Respuesta, Prevención, Recuperación" },
            { letter: "d", text: "Recuperación, Prevención, Preparación, Respuesta" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué tipo de EPP es esencial para el personal que trabaja en la zona tibia de un incidente químico?",
        options: [
            { letter: "a", text: "Solo guantes y mascarilla quirúrgica" },
            { letter: "b", text: "Traje completo de protección química con SCBA" },
            { letter: "c", text: "Ropa de trabajo estándar con gafas de seguridad" },
            { letter: "d", text: "Bata desechable y guantes de nitrilo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente presenta quemaduras químicas en la piel después de exposición a un agente vesicante. El manejo inicial incluye:",
        options: [
            { letter: "a", text: "Aplicar hielo directamente en las quemaduras" },
            { letter: "b", text: "Irrigación copiosa con agua durante al menos 20 minutos" },
            { letter: "c", text: "Aplicar ungüento antibiótico inmediatamente" },
            { letter: "d", text: "Vendar las heridas sin lavar" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal del triaje en incidentes de múltiples víctimas?",
        options: [
            { letter: "a", text: "Tratar primero a los pacientes más graves" },
            { letter: "b", text: "Hacer el mayor bien para el mayor número de personas" },
            { letter: "c", text: "Evacuar rápidamente a todos los pacientes" },
            { letter: "d", text: "Identificar a las víctimas mortales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "En un incidente con múltiples víctimas, ¿cuándo se debe reevaluar el triaje de un paciente?",
        options: [
            { letter: "a", text: "Solo al final del incidente" },
            { letter: "b", text: "Nunca, una vez clasificado permanece igual" },
            { letter: "c", text: "Continuamente según cambie su condición" },
            { letter: "d", text: "Solo si el paciente lo solicita" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué información es crítica comunicar al hospital receptor durante un incidente terrorista?",
        options: [
            { letter: "a", text: "Solo el número de víctimas" },
            { letter: "b", text: "Tipo de agente, número de víctimas, severidad y ETA" },
            { letter: "c", text: "Únicamente la hora estimada de llegada" },
            { letter: "d", text: "Los nombres de las víctimas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Los síntomas de exposición a agentes biológicos generalmente se presentan:",
        options: [
            { letter: "a", text: "Inmediatamente después de la exposición" },
            { letter: "b", text: "Dentro de los primeros 5 minutos" },
            { letter: "c", text: "Horas a días después de la exposición (período de incubación)" },
            { letter: "d", text: "Solo en personas inmunocomprometidas" },
        ],
        correctAnswer: "c",
    },
];