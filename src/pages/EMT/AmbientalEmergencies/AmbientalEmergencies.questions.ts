import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuáles son las cinco formas en que el cuerpo pierde calor?",
        answer: "El cuerpo pierde calor a través de conducción (contacto directo), convección (aire circulante), evaporación (sudor), radiación (hacia objetos más fríos) y respiración (exhalar aire caliente). "
    },
    {
        question: "¿Cuál es la diferencia principal entre el agotamiento por calor y el golpe de calor?",
        answer: "El agotamiento por calor es causado por deshidratación y se presenta con piel fría, húmeda y pálida, y debilidad.  El golpe de calor es una emergencia que pone en riesgo la vida, donde los mecanismos de enfriamiento fallan, resultando en una temperatura corporal muy alta, estado mental alterado, y piel que puede estar caliente y seca o húmeda. "
    },
    {
        question: "¿A qué temperatura corporal se diagnostica la hipotermia?",
        answer: "Se diagnostica hipotermia cuando la temperatura central del cuerpo desciende por debajo de 35°C (95°F). "
    },
    {
        question: "¿Qué es la 'clasificación inversa' en un incidente con múltiples víctimas por un rayo?",
        answer: "Es un proceso donde los esfuerzos se centran primero en las víctimas que están en paro respiratorio o cardíaco, ya que tienen mayor probabilidad de sobrevivir si se les atiende de inmediato, a diferencia de los protocolos de clasificación convencionales. "
    },
    {
        question: "¿Cuáles son las dos arañas de importancia médica en Estados Unidos mencionadas en el texto?",
        answer: "La araña viuda negra hembra y la araña reclusa parda. "
    },
    {
        question: "¿Cómo se debe tratar la picadura de una medusa o fragata portuguesa?",
        answer: "Retirar al paciente del agua, raspar los tentáculos restantes con un objeto de borde duro (como una tarjeta de crédito) sin usar las manos descubiertas, y considerar la inmersión en agua caliente o vinagre. "
    },
    {
        question: "¿Cuál es la diferencia clave entre una embolia aérea y la enfermedad por descompresión en el buceo?",
        answer: "La embolia aérea ocurre de manera inmediata al retornar a la superficie tras un ascenso rápido.  Los síntomas de la enfermedad por descompresión (enfermedad del buzo) pueden no aparecer hasta varias horas después del buceo. "
    },
];

export const environmentalEmergencyQuestions: Question[] = [
    {
        question: "Usted atiende a un paciente con sospecha de golpe de calor. ¿Cuál de los siguientes hallazgos es el signo MÁS característico de esta condición?",
        options: [
            { letter: "a", text: "Calambres musculares en las piernas" },
            { letter: "b", text: "Piel pálida, fría y húmeda" },
            { letter: "c", text: "Alteración del estado mental" },
            { letter: "d", "text": "Pulso lento y débil" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Según el documento, la hipotermia se diagnostica cuando la temperatura corporal central desciende por debajo de:",
        options: [
            { letter: "a", text: "36.7 °C (98 °F)" },
            { letter: "b", text: "35 °C (95 °F)" },
            { letter: "c", text: "32.2 °C (90 °F)" },
            { letter: "d", text: "29.4 °C (85 °F)" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el tratamiento de emergencia inicial recomendado para una mordedura de serpiente de foseta (crotalina)?",
        options: [
            { letter: "a", text: "Aplicar un torniquete por encima de la mordedura" },
            { letter: "b", text: "Calmar al paciente, limpiar la herida y mantener la extremidad por debajo del nivel del corazón" },
            { letter: "c", text: "Realizar una incisión sobre la mordedura y succionar el veneno" },
            { letter: "d", text: "Aplicar hielo directamente sobre la herida para neutralizar el veneno" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente es mordido por una araña reclusa parda. ¿Qué manifestación local es característica de esta mordedura?",
        options: [
            { letter: "a", text: "Espasmos musculares intensos y rigidez abdominal" },
            { letter: "b", text: "Una lesión que se vuelve entumecida inmediatamente" },
            { letter: "c", text: "Una úlcera necrótica que se desarrolla días después de la mordedura" },
            { letter: "d", text: "Parálisis del sistema nervioso y dificultad para respirar" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al tratar a un paciente con congelación profunda en una extremidad, ¿cuál de las siguientes acciones está CONTRAINDICADA en el campo?",
        options: [
            { letter: "a", text: "Retirar la ropa húmeda y las joyas" },
            { letter: "b", text: "Cubrir la parte afectada con un apósito estéril y seco" },
            { letter: "c", text: "Frotar o masajear la zona congelada para restablecer la circulación" },
            { letter: "d", text: "Inmovilizar la extremidad para prevenir más lesiones" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La emergencia de buceo más peligrosa y frecuente, causada por sostener la respiración durante un ascenso rápido, es:",
        options: [
            { letter: "a", text: "Enfermedad por descompresión" },
            { letter: "b", text: "Embolia aérea" },
            { letter: "c", text: "Narcosis por nitrógeno" },
            { letter: "d", text: "Barotrauma de oído" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Atiende a una víctima de ahogamiento que ha sido rescatada del agua. Se sospecha una lesión de columna vertebral. ¿Cuál es el paso prioritario?",
        options: [
            { letter: "a", text: "Retirar toda la ropa mojada inmediatamente" },
            { letter: "b", text: "Estabilizar la columna vertebral mientras la víctima todavía está en el agua" },
            { letter: "c", text: "Realizar compresiones abdominales para sacar el agua de los pulmones" },
            { letter: "d", text: "Esperar a que llegue el equipo especializado para sacarla del agua" },
        ],
        correctAnswer: "b",
    },
    {
        question: "La regla mnemotécnica 'rojo sobre amarillo matará a un amigo' ayuda a identificar a cuál de las siguientes serpientes venenosas:",
        options: [
            { letter: "a", text: "Serpiente de cascabel" },
            { letter: "b", text: "Boca de algodón (mocasín de agua)" },
            { letter: "c", text: "Cabeza de cobre" },
            { letter: "d", text: "Serpiente de coral" },
        ],
        correctAnswer: "d",
    },
    {
        question: "La pérdida de calor corporal causada por el movimiento del aire sobre la piel se conoce como:",
        options: [
            { letter: "a", text: "Conducción" },
            { letter: "b", text: "Convección" },
            { letter: "c", text: "Radiación" },
            { letter: "d", text: "Evaporación" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente que presenta una reacción alérgica grave (anafilaxia) a una picadura de abeja debe ser tratado prioritariamente con:",
        options: [
            { letter: "a", text: "Oxígeno y transporte rápido" },
            { letter: "b", text: "Aplicación de compresas frías en el sitio de la picadura" },
            { letter: "c", text: "Asistencia con la administración de un autoinyector de epinefrina" },
            { letter: "d", text: "Administración de líquidos por vía oral" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es el principio fundamental al tratar a un paciente con hipotermia severa que parece no tener pulso?",
        options: [
            { letter: "a", text: "Asumir que está muerto y no iniciar RCP" },
            { letter: "b", text: "Realizar solo compresiones torácicas sin ventilaciones" },
            { letter: "c", text: "No considerar al paciente muerto hasta que esté 'tibio y muerto'" },
            { letter: "d", text: "Enfriar activamente al paciente para preservar el cerebro" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente que sufre de calambres por calor después de ejercitarse debe ser tratado inicialmente mediante:",
        options: [
            { letter: "a", text: "Transporte inmediato al hospital" },
            { letter: "b", text: "Administración de comprimidos de sal" },
            { letter: "c", text: "Retirarlo del ambiente cálido, poner en reposo los músculos y reponer líquidos por vía oral" },
            { letter: "d", text: "Sumergirlo en un baño de agua helada" },
        ],
        correctAnswer: "c",
    }
];