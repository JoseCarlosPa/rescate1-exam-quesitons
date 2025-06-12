import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre un neumotórax abierto y un neumotórax a tensión?",
        answer: "Un neumotórax abierto ('herida torácica succionante') es una herida abierta en la pared torácica que permite que el aire entre y salga del espacio pleural. Un neumotórax a tensión es una emergencia en la que el aire entra al espacio pleural pero no puede salir, acumulando presión que colapsa el pulmón y desplaza al corazón, lo que compromete la circulación. ",
    },
    {
        question: "¿Qué es el movimiento paradójico y en qué lesión se observa?",
        answer: "El movimiento paradójico es cuando un segmento de la pared torácica se mueve en dirección opuesta al resto durante la respiración (se hunde al inhalar y sobresale al exhalar). Es el signo característico del tórax inestable (volet costal), que ocurre cuando tres o más costillas adyacentes se fracturan en dos o más lugares. ",
    },
    {
        question: "¿Cuál es el propósito de usar un apósito oclusivo sellado por tres lados?",
        answer: "Se utiliza para tratar un neumotórax abierto. El apósito sella la herida para evitar que entre más aire al espacio pleural durante la inspiración, pero el lado no sellado actúa como una válvula unidireccional, permitiendo que el aire atrapado salga durante la espiración. Esto previene la evolución hacia un neumotórax a tensión. ",
    },
    {
        question: "¿Qué es el taponamiento cardíaco y cuáles son sus signos clásicos?",
        answer: "El taponamiento cardíaco es la compresión del corazón causada por la acumulación de líquido (generalmente sangre) en el saco pericárdico. Esto impide que el corazón se llene adecuadamente. Sus signos clásicos forman la 'Tríada de Beck': 1) Ingurgitación yugular, 2) Ruidos cardíacos apagados o velados, y 3) Hipotensión con presión de pulso estrecha. ",
    },
    {
        question: "¿Qué diferencia a un hemotórax de un neumotórax en su presentación clínica?",
        answer: "Ambos pueden presentar dificultad para respirar y ruidos respiratorios disminuidos. Sin embargo, un neumotórax es aire en el espacio pleural, mientras que un hemotórax es sangre. Por lo tanto, un paciente con un hemotórax masivo presentará signos de shock hipovolémico (piel pálida, fría y húmeda; taquicardia) debido a la pérdida de sangre, lo cual no es característico de un neumotórax simple. ",
    },
    {
        question: "¿Qué es la asfixia traumática?",
        answer: "Es una condición causada por una compresión súbita y severa del tórax, que fuerza la sangre desde el corazón hacia los vasos de la cabeza y el cuello. Los signos incluyen cianosis en la cara y el cuello, ingurgitación yugular y hemorragias en los ojos. ",
    },
    {
        question: "¿Cuál es la principal amenaza para la vida en un paciente con tórax inestable (volet costal)?",
        answer: "Aunque el movimiento paradójico es el signo más visible, la principal amenaza es la lesión pulmonar subyacente (contusión pulmonar). Esta contusión afecta el intercambio de gases y puede llevar a una insuficiencia respiratoria grave. Por eso, el manejo incluye ventilación con presión positiva. ",
    },
    {
        question: "¿Qué es 'Commotio Cordis'?",
        answer: "Es un paro cardíaco súbito causado por un golpe directo, no penetrante, en el pecho, que ocurre en un momento crítico del ciclo cardíaco. No hay daño estructural al corazón, pero la arritmia resultante (generalmente fibrilación ventricular) es mortal si no se trata inmediatamente con desfibrilación. ",
    },
];


export const toraxInjuriesQuestions: Question[] = [
    {
        question: "Un paciente apuñalado en el tórax presenta disnea severa, ingurgitación yugular, hipotensión y ausencia de ruidos respiratorios en el lado izquierdo. ¿Qué condición potencialmente mortal es más probable?",
        options: [
            { letter: "a", text: "Hemotórax masivo" },
            { letter: "b", text: "Neumotórax a tensión" },
            { letter: "c", text: "Taponamiento cardíaco" },
            { letter: "d", text: "Tórax inestable" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Usted está tratando a un paciente con una herida succionante en el pecho. ¿Cuál es el manejo inicial correcto para esta herida?",
        options: [
            { letter: "a", text: "Introducir un apósito dentro de la herida para taponarla" },
            { letter: "b", text: "Aplicar un apósito oclusivo sellado por sus cuatro lados" },
            { letter: "c", text: "Dejar la herida abierta al aire para que la presión se iguale" },
            { letter: "d", text: "Aplicar un apósito oclusivo sellado por tres de sus lados" },
        ],
        correctAnswer: "d",
    },
    {
        question: "Un paciente involucrado en un accidente vehicular presenta un segmento de su pared torácica que se hunde durante la inspiración. El manejo más apropiado para esta condición es:",
        options: [
            { letter: "a", text: "Aplicar un vendaje circular apretado alrededor de todo el tórax" },
            { letter: "b", text: "Colocar al paciente sobre el lado lesionado para limitar el movimiento" },
            { letter: "c", text: "Estabilizar el segmento con un apósito voluminoso y considerar la ventilación con presión positiva" },
            { letter: "d", text: "Ignorar el movimiento y concentrarse únicamente en la administración de oxígeno" },
        ],
        correctAnswer: "c",
    },
    {
        question: "La tríada de Beck, un indicador de taponamiento cardíaco, consiste en:",
        options: [
            { letter: "a", text: "Hipertensión, bradicardia y respiración irregular" },
            { letter: "b", text: "Ingurgitación yugular, ruidos cardíacos apagados e hipotensión" },
            { letter: "c", text: "Movimiento paradójico, crepitación y disnea" },
            { letter: "d", text: "Fiebre, taquicardia y dolor torácico pleurítico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con una contusión pulmonar severa está en riesgo de desarrollar insuficiencia respiratoria debido a:",
        options: [
            { letter: "a", text: "La fractura de las costillas que causa dolor" },
            { letter: "b", text: "El sangrado y edema en el tejido pulmonar que afecta el intercambio de gases" },
            { letter: "c", text: "El colapso del diafragma por el impacto" },
            { letter: "d", text: "Una infección bacteriana que se desarrolla rápidamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Un paciente con un hemotórax masivo presentará signos de shock de tipo:",
        options: [
            { letter: "a", text: "Obstructivo" },
            { letter: "b", text: "Distributivo" },
            { letter: "c", "text": "Cardiogénico" },
            { letter: "d", text: "Hipovolémico" },
        ],
        correctAnswer: "d",
    },
    {
        question: "La desviación de la tráquea en un paciente con trauma torácico es un signo tardío y ominoso de:",
        options: [
            { letter: "a", text: "Neumotórax simple" },
            { letter: "b", text: "Contusión cardíaca" },
            { letter: "c", text: "Neumotórax a tensión" },
            { letter: "d", text: "Fractura esternal" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un joven jugador de béisbol recibe un pelotazo en el centro del pecho y colapsa inmediatamente. No tiene pulso. ¿Cuál es la causa más probable de su paro cardíaco?",
        options: [
            { letter: "a", text: "Asfixia traumática" },
            { letter: "b", text: "Taponamiento cardíaco" },
            { letter: "c", text: "Commotio cordis" },
            { letter: "d", text: "Ruptura aórtica" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Usted atiende a un paciente con una herida de bala en el tórax. Durante la evaluación, ausculta los ruidos respiratorios y nota que están disminuidos en el lado derecho. Esta información es crucial para:",
        options: [
            { letter: "a", text: "Determinar la presión arterial del paciente" },
            { letter: "b", text: "Descartar una lesión abdominal" },
            { letter: "c", text: "Sospechar un neumotórax o hemotórax en ese lado" },
            { letter: "d", text: "Decidir si el paciente necesita analgésicos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "Un paciente fue aplastado por una máquina pesada y presenta una marcada cianosis en la cara y el cuello, junto con ojos enrojecidos. Estos hallazgos son característicos de:",
        options: [
            { letter: "a", text: "Shock neurogénico" },
            { letter: "b", text: "Asfixia traumática" },
            { letter: "c", text: "Lesión cerebral anóxica" },
            { letter: "d", text: "Tórax inestable severo" },
        ],
        correctAnswer: "b",
    },
];