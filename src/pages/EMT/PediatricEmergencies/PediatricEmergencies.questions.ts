import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el Triángulo de Evaluación Pediátrica (TEP)?",
        answer: "Es una herramienta de evaluación rápida que se realiza 'desde la puerta' para formar una impresión general del niño en segundos. Evalúa tres componentes: \n1. Apariencia (tono, interactividad, consuelo, mirada, habla/llanto). \n2. Trabajo Respiratorio (sonidos anormales, retracciones, aleteo nasal). \n3. Circulación Cutánea (color de la piel: palidez, moteado, cianosis).",
    },
    {
        question: "¿Cuál es la principal diferencia anatómica en la vía aérea de un niño comparada con la de un adulto?",
        answer: "La vía aérea de un niño es más pequeña y estrecha, con forma de embudo. Tienen una lengua proporcionalmente más grande y una tráquea más flexible y blanda. Estas diferencias hacen que la vía aérea pediátrica sea mucho más fácil de obstruir.",
    },
    {
        question: "¿Cuál es la diferencia clave entre el crup y la epiglotitis?",
        answer: "El crup es una infección viral de inicio gradual con fiebre baja y una tos característica de 'foca'. La epiglotitis es una infección bacteriana de inicio súbito con fiebre alta, babeo, y el niño a menudo se sienta en posición de trípode. La epiglotitis es una emergencia que amenaza la vida de forma inmediata.",
    },
    {
        question: "¿Por qué la hipotensión es un signo tardío y ominoso de shock en los niños?",
        answer: "Los niños tienen una gran capacidad para compensar la pérdida de volumen o la mala perfusión. Pueden mantener una presión arterial normal durante mucho tiempo aumentando drásticamente su frecuencia cardíaca y contrayendo sus vasos sanguíneos. Cuando finalmente presentan hipotensión, significa que sus mecanismos de compensación han fallado y están cerca de un paro cardiopulmonar.",
    },
    {
        question: "¿Qué es una convulsión febril?",
        answer: "Es una convulsión que ocurre en lactantes o niños pequeños, causada por un aumento rápido de la temperatura corporal. Aunque son alarmantes para los padres, la mayoría de las convulsiones febriles simples son breves y no causan daño a largo plazo.",
    },
    {
        question: "¿Cuál es el manejo de un niño con sospecha de epiglotitis?",
        answer: "La prioridad es mantener la calma del niño y no hacer nada que pueda agitarlo, como inspeccionar la garganta con un abatelenguas. Se debe administrar oxígeno de la manera menos invasiva posible (por soplado) y transportarlo rápidamente en una posición cómoda, generalmente sentado.",
    },
    {
        question: "¿Cuáles son algunos signos de maltrato infantil que un paramédico debe reconocer?",
        answer: "Los signos incluyen lesiones en diferentes etapas de curación, hematomas con patrones específicos (como la forma de una mano o un cinturón), quemaduras con líneas de demarcación claras (como las de inmersión) y una historia del incidente que no coincide con las lesiones observadas.",
    },
    {
        question: "¿Cuál es la causa más común de paro cardíaco en la población pediátrica?",
        answer: "A diferencia de los adultos, donde la causa suele ser cardíaca, el paro cardíaco en los niños es más comúnmente el resultado final de una insuficiencia respiratoria o un shock progresivo.",
    },
];


export const pediatricQuestions: Question[] = [
    {
        question: "Un niño de 2 años presenta fiebre baja, tos perruna y estridor inspiratorio que empeoró durante la noche. Estos hallazgos son más consistentes con:",
        options: [
            { letter: "a", text: "Asma" },
            { letter: "b", text: "Neumonía" },
            { letter: "c", text: "Crup (laringotraqueobronquitis)" },
            { letter: "d", text: "Epiglotitis" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Al evaluar a un lactante desde la puerta, usted nota que está flácido, tiene la piel moteada y presenta un quejido espiratorio. Según el Triángulo de Evaluación Pediátrica, este niño se clasifica como:",
        options: [
            { letter: "a", text: "Estable" },
            { letter: "b", text: "En dificultad respiratoria" },
            { letter: "c", text: "En shock" },
            { letter: "d", text: "Inestable o 'enfermo'" },
        ],
        correctAnswer: "d", // Los 3 lados del triángulo están alterados.
    },
    {
        question: "Un niño de 4 años se presenta con inicio súbito de fiebre alta, babeo, dolor de garganta y está sentado en posición de trípode. ¿Cuál es la acción más apropiada?",
        options: [
            { letter: "a", text: "Examinar la garganta con una luz y un abatelenguas" },
            { letter: "b", text: "Acostar al niño para evaluar sus pulmones" },
            { letter: "c", text: "Administrar oxígeno de forma no invasiva y transportarlo rápidamente sin agitarlo" },
            { letter: "d", text: "Inducir el vómito para despejar la vía aérea" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es el signo más temprano y confiable de shock compensado en un niño?",
        options: [
            { letter: "a", text: "Hipotensión" },
            { letter: "b", text: "Bradicardia" },
            { letter: "c", text: "Taquicardia" },
            { letter: "d", text: "Ausencia de pulsos periféricos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "El tratamiento inicial para un niño de 18 meses que está teniendo una convulsión febril activa incluye:",
        options: [
            { letter: "a", text: "Sumergir al niño en agua fría para bajar la fiebre rápidamente" },
            { letter: "b", text: "Asegurar la vía aérea, administrar oxígeno y retirar el exceso de ropa" },
            { letter: "c", text: "Introducir un objeto en la boca para evitar que se muerda la lengua" },
            { letter: "d", text: "Restringir los movimientos del niño para detener la convulsión" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Usted es llamado a una escena por un lactante que dejó de respirar. La escena es tranquila y el lactante está en su cuna sin signos evidentes de trauma. Los padres están devastados. Usted debe:",
        options: [
            { letter: "a", text: "Declarar inmediatamente al lactante fallecido y no tocar nada" },
            { letter: "b", text: "Iniciar la reanimación según el protocolo y proporcionar apoyo emocional a la familia" },
            { letter: "c", text: "Separar a los padres e interrogarlos sobre lo que sucedió" },
            { letter: "d", text: "Transportar rápidamente a los padres al hospital y dejar al lactante en la escena" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un niño de 6 años fue atropellado por un coche. Está inconsciente. Para abrir su vía aérea de forma segura, usted debe usar:",
        options: [
            { letter: "a", text: "La maniobra de inclinación de cabeza y elevación de mentón" },
            { letter: "b", text: "La maniobra de empuje mandibular (tracción mandibular)" },
            { letter: "c", text: "La inserción de una cánula orofaríngea sin evaluar el reflejo nauseoso" },
            { letter: "d", text: "Hiperextender el cuello para alinear la tráquea" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Al evaluar a un niño con sospecha de maltrato, usted observa múltiples hematomas en diferentes etapas de curación. Su responsabilidad como paramédico es:",
        options: [
            { letter: "a", text: "Confrontar a los padres y exigir una explicación" },
            { letter: "b", text: "Documentar objetivamente sus hallazgos y reportar sus sospechas a las autoridades apropiadas" },
            { letter: "c", text: "Decidir si el maltrato ocurrió o no antes de tomar cualquier acción" },
            { letter: "d", text: "Ignorar los hallazgos si los padres parecen amables y cooperadores" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Debido a que su cabeza es proporcionalmente más grande, los niños que caen tienden a aterrizar sobre ella. Esto los pone en mayor riesgo de:",
        options: [
            { letter: "a", text: "Lesiones abdominales" },
            { letter: "b", text: "Fracturas de extremidades inferiores" },
            { letter: "c", text: "Lesiones en la cabeza y la columna cervical" },
            { letter: "d", text: "Lesiones torácicas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Los ruidos respiratorios como el quejido, el estridor o las sibilancias en un niño son parte del componente ___________ del Triángulo de Evaluación Pediátrica.",
        options: [
            { letter: "a", text: "Apariencia" },
            { letter: "b", text: "Circulación" },
            { letter: "c", text: "Trabajo Respiratorio" },
            { letter: "d", text: "Tono muscular" },
        ],
        correctAnswer: "c",
    },
];