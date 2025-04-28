import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el SVB?",
        answer: "Son maniobras básicas para mantener circulación y oxigenación en pacientes en paro cardiorrespiratorio.",
    },
    {
        question: "¿Qué componentes integran la cadena de supervivencia?",
        answer: "Reconocimiento temprano, RCP inmediata, desfibrilación temprana, soporte avanzado y cuidados post-paro.",
    },
    {
        question: "¿Qué profundidad deben tener las compresiones en un adulto durante RCP?",
        answer: "Al menos 5 cm.",
    },
    {
        question: "¿Cuál es la frecuencia ideal de compresiones en RCP en adultos?",
        answer: "100 a 120 compresiones por minuto.",
    },
    {
        question: "¿Qué hacer primero al usar un DEA?",
        answer: "Encenderlo y seguir las instrucciones de voz.",
    },
    {
        question: "¿Por qué es importante minimizar interrupciones en las compresiones?",
        answer: "Para mantener la perfusión coronaria y cerebral.",
    },
    {
        question: "¿Qué prioridad tiene el uso del DEA en el paro súbito?",
        answer: "Uso tan pronto como esté disponible.",
    },
];

export const svbQuestions: Question[] = [
    {
        question: "¿Qué significa SVB?",
        options: [
            { letter: "a", text: "Sistema Vital Básico" },
            { letter: "b", text: "Soporte Vital Básico" },
            { letter: "c", text: "Soporte Vascular Básico" },
            { letter: "d", text: "Salud Vital Básica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la primera acción en la cadena de supervivencia?",
        options: [
            { letter: "a", text: "Administrar medicamentos" },
            { letter: "b", text: "Reconocer el paro y activar EMS" },
            { letter: "c", text: "Iniciar ventilaciones" },
            { letter: "d", text: "Transportar inmediatamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué frecuencia deben tener las compresiones torácicas en adultos?",
        options: [
            { letter: "a", text: "60-80 por minuto" },
            { letter: "b", text: "80-100 por minuto" },
            { letter: "c", text: "100-120 por minuto" },
            { letter: "d", text: "120-150 por minuto" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué profundidad debe alcanzar una compresión en adultos?",
        options: [
            { letter: "a", text: "2-3 cm" },
            { letter: "b", text: "5-6 cm" },
            { letter: "c", text: "8-10 cm" },
            { letter: "d", text: "3-4 cm" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué acción permite el DEA al analizar al paciente?",
        options: [
            { letter: "a", text: "Detectar obstrucciones respiratorias" },
            { letter: "b", text: "Identificar arritmias tratables por choque" },
            { letter: "c", text: "Aplicar oxígeno" },
            { letter: "d", text: "Medir saturación de oxígeno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debe hacerse al llegar un DEA a una escena de paro?",
        options: [
            { letter: "a", text: "Continuar solo RCP" },
            { letter: "b", text: "Encender el DEA y seguir instrucciones" },
            { letter: "c", text: "Administrar ventilaciones primero" },
            { letter: "d", text: "Esperar a que llegue más ayuda" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué porcentaje de interrupciones en compresiones reduce la supervivencia?",
        options: [
            { letter: "a", text: "Más del 10%" },
            { letter: "b", text: "Más del 20%" },
            { letter: "c", text: "Más del 5%" },
            { letter: "d", text: "Más del 50%" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué importancia tiene una ventilación adecuada en SVB?",
        options: [
            { letter: "a", text: "Incrementa la resistencia de las vías aéreas" },
            { letter: "b", text: "Garantiza el intercambio de oxígeno y CO₂" },
            { letter: "c", text: "Evita hipotensión arterial" },
            { letter: "d", text: "Eleva la presión intracraneal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué posición deben tener las manos al realizar compresiones en adultos?",
        options: [
            { letter: "a", text: "Sobre el abdomen" },
            { letter: "b", text: "Centro del tórax, en el esternón" },
            { letter: "c", text: "Lateral al pecho" },
            { letter: "d", text: "Sobre el ombligo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué objetivo tiene minimizar las interrupciones durante RCP?",
        options: [
            { letter: "a", text: "Ahorrar energía al reanimador" },
            { letter: "b", text: "Evitar fatiga muscular" },
            { letter: "c", text: "Mantener la perfusión coronaria" },
            { letter: "d", text: "Evitar hiperventilación" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué ritmo es tratable con desfibrilación inmediata?",
        options: [
            { letter: "a", text: "Asistolia" },
            { letter: "b", text: "Fibrilación ventricular" },
            { letter: "c", text: "Bradicardia" },
            { letter: "d", text: "Taquicardia sinusal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe hacer si un paciente no responde y no respira normalmente?",
        options: [
            { letter: "a", text: "Colocar en posición lateral" },
            { letter: "b", text: "Activar EMS y empezar RCP" },
            { letter: "c", text: "Administrar glucosa oral" },
            { letter: "d", text: "Aplicar calor externo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué se debe evitar durante el uso de un DEA?",
        options: [
            { letter: "a", text: "Tocar al paciente durante el análisis" },
            { letter: "b", text: "Colocar los parches" },
            { letter: "c", text: "Seguir instrucciones de voz" },
            { letter: "d", text: "Revisar signos vitales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tamaño debe tener la profundidad de compresiones en un lactante?",
        options: [
            { letter: "a", text: "2 cm" },
            { letter: "b", text: "4 cm o un tercio del diámetro torácico" },
            { letter: "c", text: "6 cm" },
            { letter: "d", text: "8 cm" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la relación compresión-ventilación en RCP de un solo reanimador para adultos?",
        options: [
            { letter: "a", text: "15:2" },
            { letter: "b", text: "30:2" },
            { letter: "c", text: "5:1" },
            { letter: "d", text: "20:2" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes hacer inmediatamente después de un choque con el DEA?",
        options: [
            { letter: "a", text: "Revisar el pulso" },
            { letter: "b", text: "Continuar RCP empezando por compresiones" },
            { letter: "c", text: "Aplicar otra descarga inmediata" },
            { letter: "d", text: "Iniciar ventilaciones exclusivamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuántas ventilaciones se deben dar después de cada 30 compresiones en adultos?",
        options: [
            { letter: "a", text: "1 ventilación" },
            { letter: "b", text: "2 ventilaciones" },
            { letter: "c", text: "5 ventilaciones" },
            { letter: "d", text: "10 ventilaciones" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes hacer si un lactante tiene pulso menor de 60 lpm y signos de mala perfusión?",
        options: [
            { letter: "a", text: "Solo administrar oxígeno" },
            { letter: "b", text: "Iniciar RCP" },
            { letter: "c", text: "Colocar en posición lateral" },
            { letter: "d", text: "Administrar líquidos orales" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué indicación da el DEA cuando detecta un ritmo no desfibrilable?",
        options: [
            { letter: "a", text: "Administrar una descarga" },
            { letter: "b", text: "Continuar RCP" },
            { letter: "c", text: "Esperar" },
            { letter: "d", text: "Retirar los parches" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es crucial hacer al realizar ventilaciones en RCP?",
        options: [
            { letter: "a", text: "Administrar grandes volúmenes de aire" },
            { letter: "b", text: "Observar elevación del pecho" },
            { letter: "c", text: "Aplicar presión sobre el abdomen" },
            { letter: "d", text: "Administrar aire muy rápido" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué representa la A en la evaluación inicial de SVB?",
        options: [
            { letter: "a", text: "Alerta" },
            { letter: "b", text: "Abrir la vía aérea" },
            { letter: "c", text: "Arritmia" },
            { letter: "d", text: "Arteria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué maniobra se utiliza para abrir la vía aérea en un paciente sin sospecha de trauma cervical?",
        options: [
            { letter: "a", text: "Tracción mandibular" },
            { letter: "b", text: "Inclinación de cabeza y elevación del mentón" },
            { letter: "c", text: "Compresión de tórax" },
            { letter: "d", text: "Extensión cervical completa" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es la maniobra indicada para abrir la vía aérea en un trauma?",
        options: [
            { letter: "a", text: "Inclinación de cabeza y mentón" },
            { letter: "b", text: "Tracción mandibular" },
            { letter: "c", text: "Ventilación forzada" },
            { letter: "d", text: "Compresión abdominal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debes evitar durante las ventilaciones para no generar insuflación gástrica?",
        options: [
            { letter: "a", text: "Ventilar lentamente y con poco volumen" },
            { letter: "b", text: "Administrar aire rápido y fuerte" },
            { letter: "c", text: "Cerrar la vía aérea" },
            { letter: "d", text: "Suspender ventilaciones" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué frecuencia de ventilaciones debe mantenerse en paro respiratorio (solo ventilaciones)?",
        options: [
            { letter: "a", text: "Una cada 10 segundos" },
            { letter: "b", text: "Una cada 5-6 segundos" },
            { letter: "c", text: "Una cada 2 segundos" },
            { letter: "d", text: "Una cada 15 segundos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo de usar un DEA en paro cardíaco?",
        options: [
            { letter: "a", text: "Iniciar masaje cardíaco" },
            { letter: "b", text: "Restablecer un ritmo cardiaco efectivo" },
            { letter: "c", text: "Realizar diagnóstico de muerte" },
            { letter: "d", text: "Administrar medicamentos automáticamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué es un paro cardiorrespiratorio?",
        options: [
            { letter: "a", text: "Hipotensión severa" },
            { letter: "b", text: "Ausencia de actividad respiratoria y circulatoria" },
            { letter: "c", text: "Fiebre alta" },
            { letter: "d", text: "Saturación de oxígeno normal" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué debe hacerse antes de colocar los parches del DEA si el pecho está mojado?",
        options: [
            { letter: "a", text: "Aplicar presión" },
            { letter: "b", text: "Secarlo rápidamente" },
            { letter: "c", text: "Esperar a que se seque solo" },
            { letter: "d", text: "Iniciar masaje sin parches" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué error frecuente reduce la efectividad del SVB?",
        options: [
            { letter: "a", text: "Compresiones muy profundas" },
            { letter: "b", text: "Interrupciones frecuentes en compresiones" },
            { letter: "c", text: "Uso de DEA" },
            { letter: "d", text: "Aplicar oxígeno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué pasa si un DEA detecta fibrilación ventricular?",
        options: [
            { letter: "a", text: "Recomienda continuar solo RCP" },
            { letter: "b", text: "Indica administrar descarga" },
            { letter: "c", text: "Recomienda ventilaciones únicamente" },
            { letter: "d", text: "Indica no hacer nada" },
        ],
        correctAnswer: "b",
    },
];