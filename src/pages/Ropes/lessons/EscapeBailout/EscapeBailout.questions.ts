import { Question } from "../../../../question";

export const escapeBailoutFaqData = [
    {
        question: "¿Por qué un escape (bailout) se considera una maniobra de 'alto riesgo' según el manual?",
        answer: "No es por el equipo o la técnica en sí, sino por el contexto: se realiza con extrema urgencia, pánico, falta de visibilidad y distracciones masivas (calor, fuego). Se debe elegir un anclaje, montarlo y saltar por una ventana en segundos, sin margen de error."
    },
    {
        question: "¿Qué características debe tener una cuerda de escape según la NFPA 1983 para bomberos?",
        answer: "Debe ser pequeña (entre 7.5mm y 9.5mm), con elongación baja (1% a 10%), y tener una resistencia al calor extrema: no fundirse a menos de 204°C (400°F), y soportar 600°C por 45 segundos bajo 300 lbs de carga."
    },
    {
        question: "¿Por qué el manual enfatiza tanto practicar las maniobras de bailout?",
        answer: "Porque el pánico destruye la capacidad cognitiva. Solo la 'memoria muscular' construida a través de la repetición constante permite a un bombero armar un anclaje y salir por una ventana sin pensar cuando el cuarto está envuelto en llamas a su espalda."
    },
    {
        question: "¿Cuáles son los materiales más comunes usados en cuerdas de escape modernas?",
        answer: "Las mezclas híbridas: un núcleo de nylon para fuerza y flexibilidad, rodeado de fibras de alta tecnología y resistencia al fuego (como Kevlar, Technora, o poliéster especial) que resisten temperaturas extremas y bordes filosos (vidrios rotos en ventanas)."
    },
    {
        question: "¿Cómo se debe entrenar el bailout inicialmente según el manual?",
        answer: "Empezar lento y 'en frío' para sentir el equipo. Luego, aumentar la velocidad. Finalmente, practicarlo con equipo de protección completo (turnouts) y conectado al tanque de aire, siempre con una línea de belay externa de seguridad durante la práctica."
    }
];

export const escapeBailoutQuestions: Question[] = [
    {
        question: "¿Cuál de las siguientes condiciones de incendio modernas hace que el 'bailout' (escape de emergencia por ventanas) sea una habilidad cada vez más crítica para los bomberos?",
        options: [
            { letter: "a", text: "El uso exclusivo de mangueras de alta presión." },
            { letter: "b", text: "La combinación de equipo de protección moderno (que permite entrar más profundo) y construcción moderna ligera (trusses de madera que colapsan rápido), exponiendo al bombero a flashovers repentinos o colapsos estructurales sin ruta de escape interna." },
            { letter: "c", text: "La falta de camiones escalera." },
            { letter: "d", text: "El aumento de incendios en rascacielos." }
        ],
        correctAnswer: "b",
        explanation: "Los bomberos hoy penetran más profundo porque sus trajes aguantan más calor. Pero las casas modernas se queman y colapsan más rápido. Esto crea la tormenta perfecta donde un cuarto puede envolverse en llamas cerrando la salida, dejando la ventana como única opción."
    },
    {
        question: "Según el manual, la maniobra de bailout es de 'alto riesgo' principalmente debido a:",
        options: [
            { letter: "a", text: "La mala calidad de las cuerdas de escape." },
            { letter: "b", text: "La falta de anclajes en los edificios." },
            { letter: "c", text: "Las circunstancias en las que se realiza: gran urgencia, pánico, calor extremo, visibilidad cero y la necesidad de ejecutar pasos técnicos impecablemente en segundos." },
            { letter: "d", text: "El peso del bombero." }
        ],
        correctAnswer: "c",
        explanation: "El riesgo no es mecánico (el equipo funciona), el riesgo es humano: hacer un nudo de anclaje perfecto y salir por una ventana cuando el cuarto está literalmente en llamas a tus espaldas requiere nervios de acero."
    },
    {
        question: "Para una cuerda clasificada como 'Fire Escape Rope' por la NFPA, ¿cuál es el requerimiento de resistencia a altas temperaturas?",
        options: [
            { letter: "a", text: "Soportar 100°C por 10 minutos." },
            { letter: "b", text: "Debe soportar 600°C (1112°F) durante al menos 45 segundos mientras sostiene una carga de 300 libras sin fallar, y 400°C durante 5 minutos." },
            { letter: "c", text: "Ser completamente incombustible." },
            { letter: "d", text: "Resistir 1000°C por 1 hora." }
        ],
        correctAnswer: "b",
        explanation: "Las cuerdas de bombero requieren pruebas térmicas extremas. 45 segundos a 600°C da el margen vital para que el bombero baje y escape de la zona de calor radiante de la ventana antes de que la cuerda se funda."
    },
    {
        question: "¿Por qué el uso de cinta tubular (webbing) plana para sistemas de escape está ganando popularidad sobre la cuerda tradicional?",
        options: [
            { letter: "a", text: "Porque es más barata." },
            { letter: "b", text: "Porque la cinta se empaqueta mucho más plana y pequeña en los bolsillos del equipo de protección personal del bombero, ahorrando espacio vital." },
            { letter: "c", text: "Porque resiste más el calor que la cuerda." },
            { letter: "d", text: "Porque es más fácil de anudar." }
        ],
        correctAnswer: "b",
        explanation: "El bombero carga mucho equipo. Un sistema de escape voluminoso estorba. La cinta tubular plana se dobla de forma muy compacta en una bolsa pequeña de bolsillo en comparación con una cuerda redonda."
    },
    {
        question: "Durante los entrenamientos de práctica para maniobras de escape o bailout, ¿cuál es una regla de seguridad inquebrantable?",
        options: [
            { letter: "a", text: "Practicar siempre en edificios en llamas." },
            { letter: "b", text: "Todas las prácticas de descenso o bailout deben contar SIEMPRE con una línea de belay independiente asegurando al estudiante." },
            { letter: "c", text: "Practicar sin guantes para sentir la cuerda." },
            { letter: "d", text: "Solo practicar en el primer piso." }
        ],
        correctAnswer: "b",
        explanation: "En los entrenamientos de bailout se simulan situaciones de pánico y saltos rápidos por ventanas. El error humano es altamente probable durante el aprendizaje. El belay externo es obligatorio."
    },
    {
        question: "¿Qué diámetros de cuerda especifica la NFPA 1983 para 'Escape Rope'?",
        options: [
            { letter: "a", text: "11mm a 13mm." },
            { letter: "b", text: "Mínimo de 7.5mm (19/64 in) hasta un máximo menor a 9.5mm (3/8 in)." },
            { letter: "c", text: "Menos de 6mm." },
            { letter: "d", text: "Cualquier diámetro es aceptable." }
        ],
        correctAnswer: "b",
        explanation: "El diámetro es un compromiso: debe ser lo suficientemente gruesa para resistir cortes y calor, pero lo suficientemente delgada para no ser voluminosa y pesada en el cinturón del bombero."
    },
    {
        question: "Al seleccionar una cuerda de escape, ¿por qué es importante considerar el material de las fibras de la funda (sheath)?",
        options: [
            { letter: "a", text: "Por el color estético." },
            { letter: "b", text: "Los escapes suelen ser por ventanas, exponiendo la cuerda a bordes afilados de vidrio roto y metal caliente. Las fibras de alta tecnología ofrecen mayor resistencia al corte y al calor que el nylon estándar." },
            { letter: "c", text: "Solo para que el nudo sea más fácil." },
            { letter: "d", text: "Para abaratar costos." }
        ],
        correctAnswer: "b",
        explanation: "Cuando un bombero salta por una ventana, la cuerda inevitablemente se frota violentamente contra el marco (a menudo aluminio o vidrio roto) mientras está bajo tensión. Una cuerda que se corta significa caída libre."
    },
    {
        question: "¿Qué efecto tiene un diámetro mayor (ej. 9mm vs 7.5mm) en un sistema de escape que utiliza un descensor de fricción como el 'Figura 8' personal?",
        options: [
            { letter: "a", text: "Ningún efecto." },
            { letter: "b", text: "La cuerda de mayor diámetro provee más fricción inherente en el dispositivo y facilita el agarre (grip) de la mano del bombero con sus guantes gruesos, mejorando el control del descenso." },
            { letter: "c", text: "Hace el descenso más rápido e incontrolable." },
            { letter: "d", text: "Derrite el descensor." }
        ],
        correctAnswer: "b",
        explanation: "Los guantes de bombero son gruesos y torpes. Intentar frenar una cuerda delgada de 7.5mm requiere mucha fuerza de agarre. Una cuerda ligeramente más gruesa llena mejor el dispositivo y la mano, dando más control."
    },
    {
        question: "El éxito de un bailout bajo presión extrema depende de la 'memoria muscular'. ¿Cómo se desarrolla esto según el manual?",
        options: [
            { letter: "a", text: "Viendo videos de instrucción." },
            { letter: "b", text: "A través de entrenamiento estructurado y práctica repetitiva: primero lento para sentir el sistema, luego agregando velocidad, y finalmente practicando con todo el equipo de protección pesado y la máscara de aire conectada." },
            { letter: "c", text: "Memorizando el manual." },
            { letter: "d", text: "Haciendo un solo salto de prueba al año." }
        ],
        correctAnswer: "b",
        explanation: "Bailar el equipo en camiseta en el gimnasio es diferente a hacerlo con 30 kg de turnouts gruesos, guantes enormes, sin ver nada por el humo y respirando de un tanque. La memoria muscular debe entrenarse con el equipo real."
    },
    {
        question: "¿Qué es un 'Bailout Anchor' y cuál es su desafío principal?",
        options: [
            { letter: "a", text: "Es un ancla pesada que se lanza por la ventana." },
            { letter: "b", text: "Es el punto de anclaje (un marco, una herramienta clavada, un mueble pesado) que el bombero debe encontrar o improvisar en cuestión de segundos dentro de la habitación incendiada antes de saltar." },
            { letter: "c", text: "Es el gancho del camión de bomberos." },
            { letter: "d", text: "Es el arnés del bombero." }
        ],
        correctAnswer: "b",
        explanation: "El bombero tiene su cuerda y su arnés, pero para bajar necesita amarrar la cuerda a algo. En un cuarto lleno de humo, encontrar algo lo suficientemente sólido para aguantar su peso y atarlo en 5 segundos es el paso más difícil del bailout."
    }
];
