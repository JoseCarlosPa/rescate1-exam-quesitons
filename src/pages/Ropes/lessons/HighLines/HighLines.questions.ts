import { Question } from "../../../../question";

export const highLinesFaqData = [
    {
        question: "¿Qué es una Línea Alta (Highline o Tyrolean) y cuándo se usa?",
        answer: "Es un sistema de cuerdas suspendido horizontalmente (o en ángulo) entre dos puntos elevados, permitiendo cruzar un obstáculo infranqueable como un cañón, río de corriente rápida, o terreno rocoso muy peligroso. La carga (camilla + tender) viaja suspendida de una polea que rueda sobre la cuerda tensada."
    },
    {
        question: "¿Cuál es la diferencia entre un Highline Kootenay y un Highline de Re-enrollado (Reeving)?",
        answer: "En el Kootenay, la tensión de la cuerda-riel se reduce para bajar la carga en el punto medio del span. En el sistema Reeving, la cuerda-riel siempre permanece tensada y se usan cuerdas de control adicionales (Control Lines) que actúan como sistema de izado/descenso para bajar la carga en el punto medio."
    },
    {
        question: "¿Por qué las cuerdas de control (Control Lines) deben tener siempre sus Prusiks bien apretados y sin holgura?",
        answer: "Las Control Lines también actúan como Belay Line. Si la cuerda-riel (Track Line) falla, las Control Lines atrapan la carga. Sin embargo, las pruebas del CMC mostraron que la carga puede caer hasta un 20% del largo del span antes de que el belay la detenga. La holgura innecesaria empeora esa caída libre potencial."
    },
    {
        question: "¿Qué son los 'festones' (Festoons) en un sistema de Highline y para qué sirven?",
        answer: "Son tiras de cinta conectadas a las Control Lines (cuerdas de control) cada ~9 metros mediante nudos tipo llave (girth hitch). En su otro extremo se anclan a la Track Line con un mosquetón. Sirven para evitar que las Control Lines cuelguen demasiado y rozen o se enreden con el terreno, especialmente cuando la carga está lejos del punto de festón."
    },
    {
        question: "¿Qué es una 'Messenger Line' en el contexto de un Highline?",
        answer: "Es un cordón delgado que se lanza o dispara (con pistola de cuerdas) a través del vano del cañón. Una vez en el otro lado, se usa para jalar las cuerdas principales (Track Line) más pesadas y gruesas que no pueden ser lanzadas por sí solas a esa distancia."
    }
];

export const highLinesQuestions: Question[] = [
    {
        question: "Un sistema de Línea Alta (Highline) se usa principalmente cuando:",
        options: [
            { letter: "a", text: "El paciente está a solo 10 metros de profundidad en un pozo." },
            { letter: "b", text: "Hay que cruzar un obstáculo infranqueable (cañón, río caudaloso, rocas peligrosas) y es más seguro o rápido suspender la camilla sobre él en lugar de bajar por el obstáculo." },
            { letter: "c", text: "No hay cuerdas suficientes para un sistema de bajada normal." },
            { letter: "d", text: "El paciente pesa más de 100 kg." }
        ],
        correctAnswer: "b",
        explanation: "El Highline permite atravesar horizontalmente un espacio en el aire. Si cruzar el fondo de un cañón con la camilla tomaría horas o sería extremadamente peligroso, suspenderla sobre él en un Highline puede ser la opción táctica más inteligente."
    },
    {
        question: "En un Highline de tipo Reeving (Re-enrollado), ¿cómo se baja la carga en el punto medio del vano (mid-span)?",
        options: [
            { letter: "a", text: "Reduciendo la tensión en la cuerda-riel hasta que ceda." },
            { letter: "b", text: "Usando cuerdas de control (Control Lines) que corren desde cada anclaje hasta la polea de carga. Al controlar estas líneas desde cada lado, se sube o baja la carga en el punto medio sin afectar la tensión de la cuerda-riel." },
            { letter: "c", text: "Haciendo que el tender salte de la camilla." },
            { letter: "d", text: "La carga no puede bajarse en el punto medio de un Highline Reeving." }
        ],
        correctAnswer: "b",
        explanation: "El sistema Reeving mantiene siempre tensada la Track Line (cuerda-riel) para que no se doble. Las Control Lines adicionales operan como sistemas de izado/bajada independientes. Una se frena mientras la otra suelta, bajando la carga."
    },
    {
        question: "La 'Cuerda Riel' (Track Line) de un Highline debe ser de:",
        options: [
            { letter: "a", text: "Cuerda dinámica (alta elongación) para absorber choques." },
            { letter: "b", text: "Cuerda de baja elongación (Low-stretch) para minimizar el sag (caída) del punto medio bajo carga. La elongación de una cuerda dinámica haría que la carga cayera demasiado en el centro." },
            { letter: "c", text: "Cuerda estática de 8mm." },
            { letter: "d", text: "Cuerda de acero inoxidable." }
        ],
        correctAnswer: "b",
        explanation: "La elongación bajo carga hace que la Track Line se doble demasiado en el centro (el 'sag'). Una cuerda dinámica que alarga un 5% en un span de 30m crearía un sag de 1.5m adicional bajo la carga del paciente. Las cuerdas low-stretch minimizan este problema."
    },
    {
        question: "¿Cuándo se recomienda usar DOS cuerdas paralelas como Track Line en un Highline?",
        options: [
            { letter: "a", text: "Nunca, siempre se usa una sola Track Line." },
            { letter: "b", text: "Cuando el span es muy largo o la carga es muy pesada. Dos Track Lines dividen la carga entre ellas (reduciendo el estrés en cada una) y también reducen el sag total sin aumentar la tensión individual." },
            { letter: "c", text: "Solo si el belay es muy corto." },
            { letter: "d", text: "Si las cuerdas son de diferentes colores." }
        ],
        correctAnswer: "b",
        explanation: "Dos cuerdas en paralelo tienen el doble de resistencia estructural. Dividir la carga reduce el sag y la tensión en cada cuerda, aumentando el margen de seguridad total del sistema."
    },
    {
        question: "El 'Anclaje Estático' (Static Anchor) en un Highline es:",
        options: [
            { letter: "a", text: "El lado donde se opera el sistema de tensión." },
            { letter: "b", text: "El extremo fijo de la Track Line, donde se ata firmemente la cuerda con un high-strength tie-off. Este lado no tiene sistemas mecánicos, solo el anclaje de la cuerda." },
            { letter: "c", text: "El anclaje del tender." },
            { letter: "d", text: "Un anclaje que se mueve con la carga." }
        ],
        correctAnswer: "b",
        explanation: "El Highline tiene dos lados. El Estático es el fijo. El de Tensión (Tensioning Anchor) es donde se usa el polipasto para estirar y poner rígida la Track Line. Siempre se requiere más espacio de trabajo en el lado de tensión."
    },
    {
        question: "Las 'Cuerdas de Control' (Control Lines) en un Highline Reeving también cumplen la función de:",
        options: [
            { letter: "a", text: "Servir como cuerdas de rappel para los rescatistas." },
            { letter: "b", text: "Actuar como línea de Belay: si la Track Line (cuerda-riel) falla, las Control Lines, con sus sistemas de Prusik o MPDs, deben detener la caída de la carga." },
            { letter: "c", text: "Servir de señal visual para el equipo en tierra." },
            { letter: "d", text: "Tensar la Track Line." }
        ],
        correctAnswer: "b",
        explanation: "La Control Line es a la vez la 'motriz' y el 'freno de emergencia'. Sin embargo, el CMC advierte que incluso con buenas Control Lines, la carga puede caer hasta el 20% del span antes de que el Prusik la detenga, dependiendo de la holgura."
    },
    {
        question: "¿Para qué sirven los 'Festones' (Festoons) en las Control Lines de un Highline?",
        options: [
            { letter: "a", text: "Para decorar la cuerda y hacerla visible." },
            { letter: "b", text: "Son tiras de cinta que cuelgan cada ~9m de la Control Line y se anclan a la Track Line con mosquetón. Evitan que la Control Line se doble demasiado o se enrede con el terreno conforme la carga viaja por el span." },
            { letter: "c", text: "Son sujetadores de la Track Line al anclaje." },
            { letter: "d", text: "Sirven como grips para el tender." }
        ],
        correctAnswer: "b",
        explanation: "Las Control Lines corren paralelas a la Track Line. Sin festones, al moverse la carga, la cuerda de control del lado contrario se iría acumulando y colgando hasta el suelo, enredándose. Los festones la mantienen elevada y ordenada."
    },
    {
        question: "¿Qué es una 'Messenger Line' y cuándo se necesita en un Highline?",
        options: [
            { letter: "a", text: "Es un radio portátil." },
            { letter: "b", text: "Es un cordón delgado y ligero que se lanza primero a través del span (a mano o con pistola de cuerdas). Una vez en el otro lado, se usa para jalar las cuerdas principales pesadas que sería imposible lanzar directamente." },
            { letter: "c", text: "Es la cuerda del tender." },
            { letter: "d", text: "Es la segunda Track Line." }
        ],
        correctAnswer: "b",
        explanation: "Nadie puede lanzar a mano una cuerda de 11mm de 30-50 metros. Pero sí puedes lanzar un cordón de 3mm. Ese cordón cruza el span y sirve como 'anzuelo' para jalar la cuerda principal más pesada."
    },
    {
        question: "¿Por qué los equipos de rescate frecuentemente evitan usar Highlines incluso cuando sería la mejor opción táctica?",
        options: [
            { letter: "a", text: "Porque están prohibidos por las normas NFPA." },
            { letter: "b", text: "Por la curva de aprendizaje: si el equipo no practica regularmente los Highlines, la configuración tarda demasiado (tiempo crítico en una emergencia) y hay mayor riesgo de cometer errores fatales de carga en los anclajes." },
            { letter: "c", text: "Porque no existen cuerdas suficientemente fuertes." },
            { letter: "d", text: "Son técnicas solo para marines." }
        ],
        correctAnswer: "b",
        explanation: "El CMC señala esto explícitamente: los Highlines son poderosos pero complejos. Los equipos que practican regularmente los montan RÁPIDO y los usan con confianza. Los que no practican los evitan, perdiendo una herramienta táctica valiosa."
    },
    {
        question: "Al conectar las Control Lines a la polea de carga (Track Pulley/Carriage) de un Highline, el método recomendado para mantener la integridad de la cuerda es:",
        options: [
            { letter: "a", text: "Con un nudo de ocho directamente a la polea." },
            { letter: "b", text: "Con nudos Prusik en tándem alrededor de la Track Line, que se conectan luego a la polea. Los Prusik no dañan la resistencia de la cuerda y, si el sistema se sobrecarga, los Prusik resbalan antes de que la cuerda se rompa." },
            { letter: "c", text: "Con cinta adhesiva de alta resistencia." },
            { letter: "d", text: "Con un mosquetón simple directo en el ojo de la cuerda." }
        ],
        correctAnswer: "b",
        explanation: "El Prusik en tándem es el método correcto porque: 1) No hace un punto débil en la cuerda (como lo haría un nudo permanente), 2) actúa como fusible mecánico: desliza bajo sobrecarga antes de que el equipo falle catastróficamente."
    }
];
