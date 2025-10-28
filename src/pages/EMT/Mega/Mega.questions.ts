import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es un 'Código Mega' (Mega Code)?",
        answer: "Es un escenario de simulación de alto realismo diseñado para evaluar y practicar las habilidades de un equipo de reanimación (usualmente ACLS/SVAA) durante un paro cardiorrespiratorio. Se enfoca en el trabajo en equipo, la comunicación y la aplicación correcta de algoritmos."
    },
    {
        question: "¿Cuál es el objetivo principal de una simulación de paro cardíaco?",
        answer: "El objetivo principal es mejorar el rendimiento del equipo, identificar fallos en la comunicación y reforzar la aplicación correcta de los protocolos de Soporte Vital Básico (BLS) y Soporte Vital Avanzado (ACLS), todo en un entorno seguro y controlado."
    },
    {
        question: "¿Qué es la 'comunicación de circuito cerrado' (closed-loop communication)?",
        answer: "Es una técnica de comunicación vital en la reanimación. El líder da una orden clara (ej. 'Administra 1mg de adrenalina'), el miembro del equipo repite la orden en voz alta (ej. 'Entendido, administro 1mg de adrenalina') y luego confirma cuando la tarea está hecha (ej. 'Adrenalina administrada'). Esto previene errores."
    },
    {
        question: "¿Cuál es el rol más importante en un Código Mega?",
        answer: "Aunque todos los roles son cruciales, el 'Líder del Equipo' es fundamental. El líder no realiza tareas (como compresiones o manejo de vía aérea), sino que dirige la escena, asigna roles, se asegura de que se sigan los algoritmos y fomenta la comunicación de circuito cerrado."
    },
    {
        question: "¿Por qué es crucial minimizar las interrupciones en las compresiones torácicas?",
        answer: "Cada pausa en las compresiones (para analizar ritmo, intubar, etc.) provoca que la presión de perfusión coronaria (PPC) caiga drásticamente. Se necesita tiempo para volver a alcanzar una PPC adecuada. Minimizar las pausas (idealmente <10 segundos) es uno de los factores más importantes para el éxito de la reanimación."
    },
    {
        question: "¿Qué son las 'H y T' en el contexto de un paro cardíaco?",
        answer: "Son las causas reversibles de un paro cardíaco. El equipo debe considerarlas activamente, especialmente en ritmos no desfibrilables (AESP/Asistolia). Incluyen: Hipovolemia, Hipoxia, Hidrogenión (acidosis), Hipo/Hiperkalemia, Hipotermia; y Taponamiento cardíaco, Trombosis (coronaria/pulmonar), Tóxicos, Tórax a tensión (Neumotórax)."
    }
];

export const megaQuestions: Question[] = [
    {
        question: "Durante un Código Mega, el monitor muestra 'Fibrilación Ventricular' (FV). ¿Cuál es la acción prioritaria inmediata?",
        options: [
            { letter: "a", text: "Administrar 1 mg de Adrenalina IV." },
            { letter: "b", text: "Preparar y administrar una descarga (desfibrilación)." },
            { letter: "c", text: "Continuar con compresiones torácicas durante 2 minutos más." },
            { letter: "d", text: "Asegurar la vía aérea con un tubo endotraqueal." }
        ],
        correctAnswer: "b",
        explanation: "La Fibrilación Ventricular (FV) y la Taquicardia Ventricular sin pulso (TVsp) son ritmos desfibrilables. La prioridad absoluta es administrar una descarga lo antes posible."
    },
    {
        question: "Inmediatamente después de administrar una descarga (desfibrilación), ¿cuál es el siguiente paso correcto?",
        options: [
            { letter: "a", text: "Comprobar el pulso carotídeo." },
            { letter: "b", text: "Analizar el ritmo en el monitor." },
            { letter: "c", text: "Reanudar inmediatamente las compresiones torácicas de alta calidad." },
            { letter: "d", text: "Administrar 300 mg de Amiodarona." }
        ],
        correctAnswer: "c",
        explanation: "Para minimizar la interrupción de la perfusión, las compresiones de alta calidad deben reanudarse inmediatamente después de la descarga, continuando por 2 minutos antes de la siguiente comprobación de ritmo."
    },
    {
        question: "¿Cuál es la frecuencia y profundidad correctas para las compresiones torácicas en un adulto?",
        options: [
            { letter: "a", text: "80-100 compresiones por minuto / 3-4 cm de profundidad." },
            { letter: "b", text: "100-120 compresiones por minuto / 5-6 cm de profundidad." },
            { letter: "c", text: "120-140 compresiones por minuto / 4-5 cm de profundidad." },
            { letter: "d", text: "Al menos 100 compresiones por minuto / al menos 7 cm de profundidad." }
        ],
        correctAnswer: "b",
        explanation: "La RCP de alta calidad requiere una frecuencia de 100 a 120 compresiones por minuto y una profundidad de 5 a 6 cm (2 a 2.4 pulgadas), permitiendo la expansión torácica completa."
    },
    {
        question: "El líder del equipo ordena: 'Prepara 1 mg de Adrenalina'. ¿Cuál es la respuesta correcta bajo el principio de 'comunicación de circuito cerrado'?",
        options: [
            { letter: "a", text: "El miembro del equipo asiente y la prepara." },
            { letter: "b", text: "El miembro del equipo dice: '¿Por qué Adrenalina ahora?'" },
            { letter: "c", text: "El miembro del equipo dice: 'Entendido, preparando 1 mg de Adrenalina'." },
            { letter: "d", text: "El miembro del equipo dice: 'Listo'." }
        ],
        correctAnswer: "c",
        explanation: "La comunicación de circuito cerrado exige que el receptor repita la orden para confirmar que la ha entendido correctamente antes de ejecutarla."
    },
    {
        question: "El monitor muestra 'Actividad Eléctrica Sin Pulso' (AESP) y el paciente no tiene pulso. ¿Cuál de las siguientes acciones NO está indicada?",
        options: [
            { letter: "a", text: "Continuar con RCP de alta calidad." },
            { letter: "b", text: "Administrar 1 mg de Adrenalina cada 3-5 minutos." },
            { letter: "c", text: "Buscar y tratar las causas reversibles (H y T)." },
            { letter: "d", text: "Administrar una descarga (desfibrilación) inmediata." }
        ],
        correctAnswer: "d",
        explanation: "La AESP y la Asistolia son ritmos NO desfibrilables. El tratamiento se centra en RCP de alta calidad, adrenalina y la búsqueda de causas reversibles (H y T)."
    },
    {
        question: "¿Cuál de las siguientes es considerada una de las 'T' (causas reversibles) de un paro cardíaco?",
        options: [
            { letter: "a", text: "Hipoxia" },
            { letter: "b", text: "Taponamiento cardíaco" },
            { letter: "c", text: "Hipotermia" },
            { letter: "d", text: "Acidosis (Hidrogenión)" }
        ],
        correctAnswer: "b",
        explanation: "Las 'H' incluyen Hipoxia, Hipotermia, Hidrogenión (acidosis), Hipo/Hiperkalemia, Hipovolemia. Las 'T' incluyen Taponamiento, Tórax a tensión, Trombosis (pulmonar/coronaria) y Tóxicos."
    },
    {
        question: "Durante la simulación, ¿cuál es la fracción de compresión torácica (FCT) objetivo que el equipo debe esforzarse por alcanzar?",
        options: [
            { letter: "a", text: "Al menos 40%" },
            { letter: "b", text: "Al menos 60%" },
            { letter: "c", text: "Al menos 80%" },
            { letter: "d", text: "100%" }
        ],
        correctAnswer: "c",
        explanation: "La FCT es el porcentaje de tiempo durante el paro que se están realizando compresiones. Un objetivo alto (idealmente >80%) se asocia con mejores resultados, minimizando las pausas."
    }
];