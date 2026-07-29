import { Question } from "../../../../question";

export const belaySystemsFaqData = [
    {
        question: "¿Qué es la prueba BCCTR / ASTM F2436 para sistemas de Belay?",
        answer: "Es un estándar de prueba dinámica (caída) que exige que un dispositivo detenga una masa de 200 kg (440 lb) cayendo 1 metro en una cuerda de 3 metros, limitando la distancia de frenado a menos de 1 metro y la fuerza de impacto pico a máximo 15 kN."
    },
    {
        question: "¿Cuál es la principal ventaja de un dispositivo de aseguramiento mecánico (CLUTCH, MPD) sobre los Prusiks en tándem?",
        answer: "Los dispositivos mecánicos manejan altas cargas de impacto de manera efectiva y consistente, no dependen del diámetro exacto ni de la fricción del cordín, y cuentan con un mecanismo de liberación de carga integrado (no requieren un Load Release Hitch para transferir el peso si se bloquean)."
    },
    {
        question: "¿Por qué el exceso de elongación (estiramiento) en la cuerda de belay es peligroso?",
        answer: "Demasiada elongación en la cuerda estática reduce el impacto, pero incrementa dramáticamente la distancia de caída. El riesgo principal es que el rescatista y la camilla puedan golpear contra una saliente (cornisa) antes de que la caída sea detenida por completo."
    },
    {
        question: "¿Qué es el 'Whistle Test' (Prueba del Silbato)?",
        answer: "Es un criterio de seguridad vital que dicta que si el operador se asusta, suelta la cuerda y 'se tapa los oídos', el sistema debe detener la carga de manera automática sin intervención manual (Activación Automática)."
    },
    {
        question: "¿Cómo se debe operar un Belay de Prusik en tándem durante un descenso (Lowering)?",
        answer: "El belayer (asegurador) debe acompañar los nudos sintiendo un poco de fricción, asegurándose de no agarrarlos tan flojo que no funcionen, ni tan apretado que interfieran con la cuerda. La posición correcta de la mano es como un 'hitchhiker' (autoestopista), con los pulgares arriba para no golpearse si los nudos se tensan de golpe."
    }
];

export const belaySystemsQuestions: Question[] = [
    {
        question: "Bajo los estándares de prueba del BCCTR (ahora ASTM F2436), un sistema de belay de rescate debe ser capaz de atrapar una masa cayendo de 200 kg. ¿Cuál es la fuerza de impacto (peak impact force) MÁXIMA permitida que el sistema puede transferir?",
        options: [
            { letter: "a", text: "5 kN" },
            { letter: "b", text: "10 kN" },
            { letter: "c", text: "15 kN (3,375 lbf)" },
            { letter: "d", text: "22 kN" }
        ],
        correctAnswer: "c",
        explanation: "Para prevenir fallas catastróficas del equipo o lesiones graves a los rescatistas, la prueba BCCTR / ASTM exige que el sistema de belay absorba parte de la energía y limite la fuerza pico a 15 kN."
    },
    {
        question: "De acuerdo a la misma norma ASTM F2436, ¿cuál es la DISTANCIA MÁXIMA de frenado permitida una vez que el sistema atrapa la masa de 200kg cayendo 1 metro?",
        options: [
            { letter: "a", text: "Menos de 1 metro (3.28 ft)" },
            { letter: "b", text: "2 metros" },
            { letter: "c", text: "3 metros" },
            { letter: "d", text: "5 metros" }
        ],
        correctAnswer: "a",
        explanation: "El sistema debe detener la caída en menos de 1 metro para prevenir colisiones contra el entorno, lo cual es el mayor riesgo al tener una cuerda con mucha elongación."
    },
    {
        question: "Cuando se configura un Sistema de Belay de Prusiks en Tándem, ¿por qué es CRÍTICO conectarlos al anclaje usando un 'Load Release Hitch' (Nudo de Liberación de Carga) o correa similar?",
        options: [
            { letter: "a", text: "Para aumentar la ventaja mecánica." },
            { letter: "b", text: "Para transferir o liberar la tensión si los Prusiks se bloquean con carga fuerte, permitiendo destrabar el sistema." },
            { letter: "c", text: "Para evitar que la cuerda se derrita." },
            { letter: "d", text: "Porque lo exige el fabricante de la cuerda." }
        ],
        correctAnswer: "b",
        explanation: "Si el belay de Prusiks detiene una caída pesada, se trabarán fuertemente (hard lock). Sin un Load Release Hitch, sería casi imposible quitarles la tensión para continuar operando el rescate."
    },
    {
        question: "¿Qué tamaño de cordín y tipo de nudo recomienda el manual para obtener el mejor desempeño deteniendo cargas pesadas en cuerdas de 7/16 in o 1/2 in?",
        options: [
            { letter: "a", text: "Cordín de 6 mm con Prusik de doble vuelta." },
            { letter: "b", text: "Cinta tubular con Nudo Klemheist." },
            { letter: "c", text: "Cordín fabricado específicamente de 8 mm usando nudos Prusik de triple vuelta (Triple-wrap)." },
            { letter: "d", text: "Cordín de 9 mm con nudo Machard." }
        ],
        correctAnswer: "c",
        explanation: "Las pruebas indican que el cordín especial para Prusik de 8 mm con 3 vueltas (triple-wrap) en tándem ofrece la mejor confiabilidad para amortiguar y atrapar cargas grandes de manera segura."
    },
    {
        question: "¿Cuál es una DESVENTAJA técnica u operativa de los Sistemas de Belay con Prusik en Tándem?",
        options: [
            { letter: "a", text: "Son demasiado pesados y voluminosos." },
            { letter: "b", text: "Su activación automática depende de la posición correcta de la mano del operador y del diámetro exacto de la cuerda, y requiere mucha habilidad para no dejar holgura (slack)." },
            { letter: "c", text: "No pasan el Whistle Test." },
            { letter: "d", text: "Rompen la camisa (sheath) de la cuerda estática instantáneamente." }
        ],
        correctAnswer: "b",
        explanation: "Los Prusiks son muy sensibles a errores humanos. Si el operador los agarra muy fuerte por pánico (Panic grab) o permite demasiada holgura, pueden fallar y dejar caer la carga."
    },
    {
        question: "Al utilizar un dispositivo MPD como seguro (Belay) durante una maniobra de descenso (Lowering) con doble cuerda, ¿qué DEBE hacer el asegurador si hay un cambio repentino en la velocidad (ej. la línea principal falla)?",
        options: [
            { letter: "a", text: "Jalar fuerte de la manija de liberación." },
            { letter: "b", text: "Soltar INMEDIATAMENTE la manija de liberación y mantener un agarre firme en el cabo de freno." },
            { letter: "c", text: "Gritar '¡Cayendo!' y alejarse." },
            { letter: "d", text: "Apretar un nudo de retención detrás del MPD." }
        ],
        correctAnswer: "b",
        explanation: "Durante un descenso, al tener abierta la manija del MPD se anula su capacidad autobloqueante primaria. Ante un fallo rápido, se debe soltar la manija de golpe para que el mecanismo se active y atrape la carga."
    },
    {
        question: "Durante una TRACCIÓN (Raising) muy larga de más de 100 pies (30 metros), jalar de la cuerda del MPD usado como Belay (mano sobre mano) puede volverse cansado. ¿Qué recomienda el manual?",
        options: [
            { letter: "a", text: "Dejar de asegurar esa línea." },
            { letter: "b", text: "Convertir la línea de Belay en un sistema simple de ventaja mecánica 3:1 para ayudar con la tracción y evitar que se acumule holgura." },
            { letter: "c", text: "Cortar la cuerda extra." },
            { letter: "d", text: "Cambiar el MPD por un Prusik simple." }
        ],
        correctAnswer: "b",
        explanation: "Si el peso es mucho y la distancia larga, un 3:1 en el Belay ayuda enormemente al equipo principal y facilita sacar la comba (slack) del sistema, manteniendo la línea de seguro bien ajustada."
    },
    {
        question: "Una gran VENTAJA de los dispositivos mecánicos (MPD, CLUTCH) sobre los Prusiks es su función de 'Integral Load Release' (Liberación Integrada de Carga). ¿Qué significa esto?",
        options: [
            { letter: "a", text: "Pueden soltar la carga automáticamente si es muy pesada." },
            { letter: "b", text: "Tienen un cuchillo para cortar la cuerda." },
            { letter: "c", text: "Una vez que detienen una caída y quedan bajo mucha tensión, pueden liberar esa tensión manipulando su propia palanca, sin requerir un Nudo de Liberación de Carga (LRH) externo." },
            { letter: "d", text: "Se desarman con un solo botón." }
        ],
        correctAnswer: "c",
        explanation: "Si el CLUTCH o MPD se bloquea deteniendo una carga fuerte, basta con destrabar su palanca con cuidado para continuar descendiendo la carga, haciendo al sistema mucho más eficiente que los Prusiks atascados."
    },
    {
        question: "¿Cómo se previene el riesgo de lastimarse las manos si los Prusiks de Belay se activan súbitamente (Whistle Test) durante un descenso?",
        options: [
            { letter: "a", text: "Cerrando los ojos." },
            { letter: "b", text: "Usando guantes de acero." },
            { letter: "c", text: "Colocando las manos en posición de 'Autoestopista' (Hitchhiker) con los pulgares apuntando hacia arriba y sin apretar fuerte los nudos." },
            { letter: "d", text: "Amarrando los Prusiks a una rama de árbol." }
        ],
        correctAnswer: "c",
        explanation: "La posición de hitchhiker permite 'sentir' los nudos empujándolos ligeramente, asegurando que si la cuerda tira fuertemente, los Prusiks pasen libremente escapando del agarre de la mano y se anuden a la cuerda principal."
    },
    {
        question: "Si una cuerda tiene demasiada elongación (estiramiento dinámico extremo), un riesgo durante una falla es que el sistema de belay logre activarse pero...",
        options: [
            { letter: "a", text: "La cuerda se corte instantáneamente por exceso de elasticidad." },
            { letter: "b", text: "La carga igual golpee un saliente antes de que el estiramiento de la cuerda logre detener totalmente la caída." },
            { letter: "c", text: "La polea estalle." },
            { letter: "d", text: "El dispositivo se derrita por rebote." }
        ],
        correctAnswer: "b",
        explanation: "Elongación absorbe energía pero aumenta la distancia que la carga recorrerá hacia abajo. En un acantilado o espacio confinado, 1 o 2 metros adicionales de estiramiento pueden significar un impacto letal contra el entorno."
    }
];
