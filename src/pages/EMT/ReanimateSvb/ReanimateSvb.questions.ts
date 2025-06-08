import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el SVB (Soporte Vital Básico)?",
        answer: "El SVB se refiere a las acciones y maniobras iniciales que se realizan para mantener la vida de una persona en situaciones de emergencia médica, como un paro cardíaco o respiratorio. Se enfoca en la reanimación cardiopulmonar (RCP) y el uso temprano de un desfibrilador externo automático (DEA), sin necesidad de equipos invasivos."
    },
    {
        question: "¿Cuáles son los componentes clave de la Cadena de Supervivencia de la AHA (American Heart Association)?",
        answer: "La Cadena de Supervivencia para adultos fuera del hospital consta de cinco eslabones: 1) Reconocimiento inmediato del paro cardíaco y activación del sistema de respuesta a emergencias, 2) RCP temprana de alta calidad, 3) Desfibrilación rápida, 4) Servicios de emergencias médicas avanzados y transporte, y 5) Cuidados post-paro cardíaco integrados."
    },
    {
        question: "¿Cuál es la profundidad y frecuencia recomendada para las compresiones torácicas en RCP en adultos?",
        answer: "Las compresiones torácicas en adultos deben tener una profundidad de al menos 5 cm (2 pulgadas) y no más de 6 cm (2.4 pulgadas). La frecuencia ideal es de 100 a 120 compresiones por minuto."
    },
    {
        question: "¿Por qué es crucial minimizar las interrupciones durante las compresiones torácicas?",
        answer: "Minimizar las interrupciones en las compresiones torácicas es fundamental para mantener una perfusión adecuada al cerebro y al corazón. Cada interrupción reduce la presión de perfusión coronaria, lo que disminuye la probabilidad de éxito de la reanimación."
    },
    {
        question: "¿Cuándo se debe usar un Desfibrilador Externo Automático (DEA)?",
        answer: "Un DEA debe usarse tan pronto como esté disponible en un paciente que se encuentre en paro cardíaco (inconsciente, sin respiración normal y sin pulso). La desfibrilación temprana es clave para revertir ritmos cardíacos letales como la fibrilación ventricular."
    },
    {
        question: "¿Cuál es la técnica preferida para abrir la vía aérea en un paciente adulto con sospecha de trauma cervical?",
        answer: "En un paciente adulto con sospecha de lesión en la columna cervical, la técnica preferida para abrir la vía aérea es la tracción mandibular (jaw thrust). Esta maniobra permite abrir la vía aérea con un movimiento mínimo del cuello."
    },
    {
        question: "¿Cuál es la relación compresión-ventilación para RCP de un solo reanimador en un adulto?",
        answer: "La relación compresión-ventilación para RCP de un solo reanimador en un adulto es de 30 compresiones por cada 2 ventilaciones."
    },
    {
        question: "¿Qué se debe hacer si el pecho del paciente está mojado antes de aplicar los parches del DEA?",
        answer: "Si el pecho del paciente está mojado, debe secarse rápidamente antes de colocar los parches del DEA para asegurar una buena conductividad eléctrica y la adherencia de los parches."
    },
    {
        question: "¿Qué es la posición de recuperación y cuándo se utiliza?",
        answer: "La posición de recuperación se utiliza para pacientes inconscientes que respiran normalmente y tienen pulso. Ayuda a mantener la vía aérea permeable y previene la aspiración de vómito. Se debe colocar al paciente de lado, con la cabeza apoyada en un brazo y una pierna flexionada para mayor estabilidad."
    },
];

export const svbQuestions: Question[] = [
    {
        question: "¿Cuál es la principal diferencia entre el Soporte Vital Básico (SVB) y el Soporte Vital Avanzado (SVA)?",
        options: [
            { letter: "a", text: "El SVB utiliza medicamentos inyectables, mientras que el SVA no." },
            { letter: "b", text: "El SVB se enfoca en maniobras no invasivas, mientras que el SVA incluye procedimientos invasivos y farmacología." },
            { letter: "c", text: "El SVB solo es realizado por personal médico, el SVA por paramédicos." },
            { letter: "d", text: "El SVA se realiza siempre antes del SVB." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes es el primer paso crítico en la Cadena de Supervivencia de la AHA para un adulto en paro cardíaco fuera del hospital?",
        options: [
            { letter: "a", text: "Activación del sistema de respuesta a emergencias y RCP de alta calidad." },
            { letter: "b", text: "Desfibrilación rápida con un DEA." },
            { letter: "c", text: "Administración de medicamentos avanzados." },
            { letter: "d", text: "Transporte inmediato al hospital." },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es la profundidad mínima y máxima recomendada para las compresiones torácicas en un adulto?",
        options: [
            { letter: "a", text: "Mínimo 3 cm, máximo 4 cm." },
            { letter: "b", text: "Mínimo 5 cm, máximo 6 cm." },
            { letter: "c", text: "Mínimo 4 cm, máximo 5 cm." },
            { letter: "d", text: "Mínimo 6 cm, máximo 7 cm." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la frecuencia de compresiones torácicas recomendada para RCP en adultos?",
        options: [
            { letter: "a", text: "60 a 80 compresiones por minuto." },
            { letter: "b", text: "80 a 100 compresiones por minuto." },
            { letter: "c", text: "100 a 120 compresiones por minuto." },
            { letter: "d", "text": "Más de 120 compresiones por minuto." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué acción se debe evitar durante la RCP para no reducir la efectividad de las compresiones torácicas?",
        options: [
            { letter: "a", text: "Permitir la descompresión completa del tórax después de cada compresión." },
            { letter: "b", text: "Realizar compresiones a una frecuencia constante." },
            { letter: "c", text: "Interrumpir las compresiones por más de 10 segundos para las ventilaciones o el DEA." },
            { letter: "d", text: "Aplicar compresiones en el centro del tórax." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuándo es apropiado activar el sistema de respuesta a emergencias (llamar al 911/número local) en un adulto con sospecha de paro cardíaco?",
        options: [
            { letter: "a", text: "Después de 5 minutos de RCP." },
            { letter: "b", text: "Inmediatamente después de determinar que el paciente no responde y no respira normalmente." },
            { letter: "c", text: "Solo si hay un DEA disponible." },
            { letter: "d", text: "Cuando el paciente presente distensión gástrica." },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la relación compresión-ventilación para RCP de dos reanimadores en un niño?",
        options: [
            { letter: "a", text: "30:2" },
            { letter: "b", text: "15:2" },
            { letter: "c", text: "5:1" },
            { letter: "d", text: "10:1" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es lo primero que debe hacer un reanimador al encontrarse con una persona colapsada y aparentemente inconsciente?",
        options: [
            { letter: "a", text: "Iniciar inmediatamente las compresiones torácicas." },
            { letter: "b", text: "Buscar un DEA." },
            { letter: "c", text: "Verificar la seguridad de la escena y evaluar la respuesta del paciente." },
            { letter: "d", text: "Abrir la vía aérea y buscar signos de respiración." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué puede indicar la distensión gástrica durante la RCP y por qué es peligrosa?",
        options: [
            { letter: "a", text: "Indica una ventilación efectiva y es beneficiosa." },
            { letter: "b", text: "Es un signo de que el paciente está recuperando la consciencia." },
            { letter: "c", text: "Puede indicar una ventilación excesiva o inadecuada, aumentando el riesgo de regurgitación y aspiración pulmonar." },
            { letter: "d", text: "Significa que las compresiones torácicas no son lo suficientemente profundas." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuándo se debe reevaluar al paciente en cuanto al regreso de las respiraciones y/o circulación durante la RCP?",
        options: [
            { letter: "a", text: "Cada 5 minutos." },
            { letter: "b", text: "Cada 3 minutos." },
            { letter: "c", text: "Aproximadamente cada 2 minutos o después de 5 ciclos de RCP." },
            { letter: "d", text: "Solo cuando el DEA lo indique." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el pulso que se debe palpar para evaluar la circulación en un infante?",
        options: [
            { letter: "a", text: "Carótida." },
            { letter: "b", text: "Radial." },
            { letter: "c", text: "Braquial." },
            { letter: "d", text: "Femoral." },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el método preferido de remoción de un cuerpo extraño en un niño sin capacidad de respuesta y sin pulso?",
        options: [
            { letter: "a", text: "Palmadas en la espalda." },
            { letter: "b", text: "Compresiones abdominales." },
            { letter: "c", text: "Compresiones torácicas." },
            { letter: "d", text: "Remoción manual a ciegas." },
        ],
        correctAnswer: "c",
    }
];