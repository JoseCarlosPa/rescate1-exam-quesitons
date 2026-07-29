import { Question } from "../../../../question";

export const twinTensionFaqData = [
    {
        question: "¿Qué es un Sistema de Doble Tensión (Twin-Tension System)?",
        answer: "Es un sistema de rescate donde ambas cuerdas comparten la carga equitativamente (50/50) en lugar del esquema tradicional donde una cuerda recibe el 100% (Main) y la otra va floja como seguridad (Belay). Ambas cuerdas se mantienen tensas y se operan simultáneamente."
    },
    {
        question: "¿Qué significa el término 'Capacidad Dual' (Dual Capability) en estos sistemas?",
        answer: "Significa que cada lado del sistema debe ser individualmente capaz no solo de soportar toda la carga, sino también de funcionar automáticamente como un seguro (belay) deteniendo la caída en caso de que el otro lado falle repentinamente."
    },
    {
        question: "¿Quién es el 'Tailer' y cuál es su función?",
        answer: "El 'Tailer' es un tercer rescatista ubicado detrás de los operadores de descenso (ej. CLUTCH o MPD) que sujeta las cuerdas sobrantes (tails) de ambas líneas. Su función es asegurar que ambas cuerdas se muevan a la misma velocidad y servir de freno/seguro absoluto si los operadores pierden el control."
    },
    {
        question: "¿Cuál es la principal desventaja de los sistemas Twin-Tension?",
        answer: "La sincronización. Puede ser difícil mantener la tensión perfectamente equitativa en ambas líneas, especialmente si los anclajes y operadores no pueden estar juntos físicamente, o al momento de traccionar (haul) si los equipos de jalado tiran a diferentes velocidades."
    },
    {
        question: "¿Cómo funciona el Double CLUTCH TTRS?",
        answer: "Es una configuración donde dos dispositivos CLUTCH se anclan uno al lado del otro, permitiendo que un solo operador controle ambas palancas de descenso simultáneamente. Usualmente se apoya de un 'tailer' o de dispositivos mecánicos de respaldo en la línea tensa."
    }
];

export const twinTensionQuestions: Question[] = [
    {
        question: "¿Cuál es la principal ventaja de seguridad de un sistema Twin-Tension (50/50) en comparación con un sistema Main/Belay tradicional (100/0) si ocurre una falla?",
        options: [
            { letter: "a", text: "Usa menos metros de cuerda." },
            { letter: "b", text: "Al fallar una línea, la línea restante solo recibe un impacto menor porque ya estaba tensa y soportando la mitad del peso." },
            { letter: "c", text: "Evita tener que usar poleas." },
            { letter: "d", text: "No requiere el uso de cascos." }
        ],
        correctAnswer: "b",
        explanation: "En un sistema Twin-Tension, si una cuerda falla, la otra ya está bajo tensión, por lo que la fuerza de impacto de choque (shock load) y la distancia de caída son mucho menores que en un sistema Main/Belay flojo."
    },
    {
        question: "Según el ITRS (International Technical Rescue Symposium), ¿qué ocurre con la resistencia a los cortes sobre bordes filosos al usar sistemas Twin-Tension?",
        options: [
            { letter: "a", text: "Las cuerdas se cortan más fácil porque están más tensas." },
            { letter: "b", text: "Las cuerdas tensadas equitativamente (50/50) demostraron una MAYOR resistencia al corte sobre un borde que en un sistema Main/Belay." },
            { letter: "c", text: "No hay diferencia en la resistencia al corte." },
            { letter: "d", text: "Las cuerdas se derriten por la fricción compartida." }
        ],
        correctAnswer: "b",
        explanation: "Las pruebas mostraron que al compartir la carga (menos peso por cuerda), ambas tienen mejor resistencia a cortarse accidentalmente por abrasión que una sola cuerda soportando todo el peso."
    },
    {
        question: "En un sistema Twin-Tension, ¿qué requisito indispensable deben cumplir los ANCLAJES de cada una de las dos líneas?",
        options: [
            { letter: "a", text: "Pueden ser de la mitad de la resistencia normal (ej. 1,250 lbs)." },
            { letter: "b", text: "Cada anclaje debe estar construido para soportar la CARGA TOTAL (100%) por sí solo, en caso de que el otro lado falle." },
            { letter: "c", text: "Tienen que estar anclados al mismo árbol obligatoriamente." },
            { letter: "d", text: "No requieren protección de bordes." }
        ],
        correctAnswer: "b",
        explanation: "Aunque operativamente la carga se divide, cada pata y cada anclaje debe ser 'bombproof' y capaz de soportar a todo el sistema si ocurre una falla catastrófica en el lado opuesto."
    },
    {
        question: "En una operación de descenso Twin-Tension, ¿cuál es el rol principal del 'Tailer'?",
        options: [
            { letter: "a", text: "Ir bajando en la camilla con el paciente." },
            { letter: "b", text: "Sujetar las cuerdas sobrantes por detrás de los operadores, asegurarse de que ambas se muevan a la misma velocidad y actuar como freno de emergencia." },
            { letter: "c", text: "Tomar fotografías y comunicarse por radio exclusivamente." },
            { letter: "d", text: "Ajustar las poleas en el borde." }
        ],
        correctAnswer: "b",
        explanation: "El tailer maneja ambos cabos de salida (tails) y su labor es mitigar riesgos: sincronizar el flujo y detener el descenso agarrando fuerte las cuerdas si un operador suelta o acelera demasiado el descendedor."
    },
    {
        question: "¿Qué configuración permite reemplazar personal con equipo ('replace people with gear') al hacer un descenso Twin-Tension cuando el personal es limitado?",
        options: [
            { letter: "a", text: "El uso de la Figura en 8." },
            { letter: "b", text: "Un Load-Sharing Anchor." },
            { letter: "c", text: "El 'Double CLUTCH TTRS', donde un solo operador maneja ambas palancas a la vez, utilizando dispositivos de respaldo (back-ups mecánicos)." },
            { letter: "d", text: "Dejar una cuerda amarrada a un árbol." }
        ],
        correctAnswer: "c",
        explanation: "Al montar dos dispositivos auto-frenantes muy juntos (Double CLUTCH), un solo rescatista puede operar ambas cuerdas con una mano en cada palanca."
    },
    {
        question: "En un escenario Double CLUTCH con un solo operador controlando ambas palancas, ¿cómo se maximiza la seguridad para prevenir una caída descontrolada?",
        options: [
            { letter: "a", text: "Agregando un segundo rescatista como 'Tailer' que sostenga las cuerdas salientes de ambos dispositivos." },
            { letter: "b", text: "Usando cuerdas más delgadas." },
            { letter: "c", text: "Cerrando los ojos y confiando en el equipo." },
            { letter: "d", text: "Atando nudos cada 3 metros." }
        ],
        correctAnswer: "a",
        explanation: "Incluso con dispositivos auto-frenantes, el manual recomienda añadir un Tailer detrás del operador único. Es la mejor defensa contra una bajada fuera de control."
    },
    {
        question: "Al realizar una TRACCIÓN (Hauling) usando Twin-Tension, hay dos opciones de organización para el equipo que jala las cuerdas. Si decides poner a todo el equipo a jalar AMBAS cuerdas agrupadas, ¿qué ventaja tiene?",
        options: [
            { letter: "a", text: "Reduce la fricción en el borde." },
            { letter: "b", text: "Es excelente para mantener la tensión igual y uniforme en ambas cuerdas al mismo tiempo." },
            { letter: "c", text: "Duplica la ventaja mecánica." },
            { letter: "d", text: "Usa menos cuerda." }
        ],
        correctAnswer: "b",
        explanation: "Jalar ambas líneas agrupadas como si fueran una sola garantiza que se muevan a la misma velocidad y tensión, aunque sacrifica algo de eficiencia biomecánica de los rescatistas que queden más atrás en la fila."
    },
    {
        question: "Al realizar una TRACCIÓN (Hauling) Twin-Tension, si divides al equipo a la mitad (unos jalan la cuerda A y otros la B), ¿cuál es el mayor desafío o riesgo?",
        options: [
            { letter: "a", text: "Las cuerdas se pueden enredar." },
            { letter: "b", text: "Prestar atención para mantener la misma tasa de viaje y tensión pareja, ya que un equipo podría jalar más rápido que el otro." },
            { letter: "c", text: "Se rompen las poleas más fácil." },
            { letter: "d", text: "No hay forma de comunicarse." }
        ],
        correctAnswer: "b",
        explanation: "Aunque dividir el equipo es más eficiente biomecánicamente, requiere gran coordinación; si el equipo A jala más rápido, la cuerda A asume el 100% de la carga."
    },
    {
        question: "Un beneficio adicional del Twin-Tension sobre el Main/Belay en zonas inestables o pedregosas es:",
        options: [
            { letter: "a", text: "Que las cuerdas pesan menos." },
            { letter: "b", text: "Evita que la cuerda de belay floja vaya arrastrándose y derribe rocas sueltas hacia la camilla." },
            { letter: "c", text: "No se requiere protección de borde." },
            { letter: "d", text: "Se pueden usar cuerdas dinámicas." }
        ],
        correctAnswer: "b",
        explanation: "Al estar ambas cuerdas bajo tensión, ninguna queda floja ni arrastra sobre el terreno suelto, minimizando el riesgo de dislocar piedras sobre las personas abajo."
    },
    {
        question: "¿Qué requisito define que un dispositivo (ej. CLUTCH o MPD) es apto para usarse en un sistema TTRS 'Dual Capability'?",
        options: [
            { letter: "a", text: "Que pueda frenar manualmente." },
            { letter: "b", text: "Que actúe como dispositivo de descenso capaz de soportar la carga, Y TAMBIÉN pueda detener automáticamente un impacto de caída funcionando como Belay si el otro falla." },
            { letter: "c", text: "Que cueste más de $500." },
            { letter: "d", text: "Que esté hecho de acero forjado." }
        ],
        correctAnswer: "b",
        explanation: "La 'capacidad dual' exige que el dispositivo sirva tanto para soportar carga (Main) como para frenado automático de choque (Belay), eliminando la necesidad de cambiar aparatos."
    }
];
