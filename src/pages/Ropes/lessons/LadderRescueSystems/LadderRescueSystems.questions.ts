import { Question } from "../../../../question";

export const ladderFaqData = [
    {
        question: "¿Qué ventaja principal ofrece el Ladder A-Frame sobre un trípode comercial en ciertas situaciones?",
        answer: "El A-Frame con escaleras se puede construir con material que la mayoría de los cuerpos de bomberos ya llevan en sus unidades: dos escaleras de extensión. No requiere equipo especializado adicional. Permite crear un punto de anclaje alto improvisado en segundos cuando no se tiene un trípode disponible."
    },
    {
        question: "¿Cuál es la función del Ladder Slide y cómo convierte una evacuación vertical en una de bajo ángulo?",
        answer: "El Ladder Slide inclina una escalera contra la estructura. La camilla se desliza sobre los peldaños de la escalera en lugar de colgar libremente en el aire. Al apoyar la camilla sobre la escalera, se convierte una bajada vertical (carga suspendida 100%) en una especie de tobogán de bajo ángulo, reduciendo la carga sobre el sistema de cuerdas."
    },
    {
        question: "¿Qué es el sistema de Cantilever Ladder y cuál es la restricción más importante de peso?",
        answer: "Es una escalera colocada dentro de un edificio pero proyectada hacia afuera por una ventana o sobre un parapeto, actuando como grúa improvisada. La restricción crítica es que mínimo 7 peldaños deben permanecer DENTRO del edificio, y un rescatista debe colocarse sobre los peldaños interiores como contrapeso para que la escalera no vuelque hacia afuera."
    },
    {
        question: "¿Cómo se diferencia una Escalera Gin (Ladder Gin) de una escalera apoyada normalmente?",
        answer: "En el Ladder Gin, la escalera se posiciona verticalmente o casi vertical (como un mástil) y se ancla desde la cima a puntos externos (vehículo, piquetes, terreno). La base se apuntala contra algo sólido (llanta, bordillo). El resultado es un mástil de un solo poste que actúa como punto de dirección alto, similar al concepto del Gin Pole."
    },
    {
        question: "En el sistema de Escalera Interior Reclinada (Interior Leaning Ladder), ¿qué función cumplen los peldaños de la escalera?",
        answer: "Los peldaños actúan como dispositivo de control de fricción (fricción brake). La cuerda se pasa en zigzag específico entre los peldaños (bajo el primero, entre el 2do y 3ro, de vuelta, etc.) generando suficiente fricción para controlar la bajada de la camilla sin necesitar un descensor mecánico tradicional."
    }
];

export const ladderRescueSystemsQuestions: Question[] = [
    {
        question: "El Ladder A-Frame se construye con dos escaleras. ¿Cuál es el ángulo de apertura recomendado entre las bases (butts) de las dos escaleras para maximizar su estabilidad?",
        options: [
            { letter: "a", text: "90 grados (perpendicular)." },
            { letter: "b", text: "45 grados aproximadamente." },
            { letter: "c", text: "10 grados (casi paralelas)." },
            { letter: "d", text: "180 grados (en línea recta)." }
        ],
        correctAnswer: "b",
        explanation: "45° de apertura en las bases crea un triángulo estable. Abrirlas menos las hace inestables lateralmente. Abrirlas más reduce la altura útil del A-Frame y también las desestabiliza."
    },
    {
        question: "Al construir un Ladder A-Frame, las cimas de las dos escaleras se unen firmemente y se añaden cuerdas de tensión laterales (guy lines). ¿Cuál es la función de esas guy lines?",
        options: [
            { letter: "a", text: "Elevar la cima del A-Frame." },
            { letter: "b", text: "Evitar que las bases de las escaleras se abran más allá del ángulo deseado, manteniendo la estructura rígida y estable en todas las direcciones." },
            { letter: "c", text: "Reemplazar a la cuerda de belay." },
            { letter: "d", text: "Conectar la camilla a la cima." }
        ],
        correctAnswer: "b",
        explanation: "Sin guy lines tensadas, la carga que cuelga de la cima del A-Frame intenta separar las bases aún más. Las guy lines anclan las bases al suelo o entre sí, manteniendo el ángulo de 45° constante."
    },
    {
        question: "¿Cuál es la ventaja principal de usar un Ladder Slide en lugar de colgar la camilla libremente de un sistema de cuerdas?",
        options: [
            { letter: "a", text: "La escalera protege al paciente del sol." },
            { letter: "b", text: "Al deslizarse la camilla sobre los peldaños de la escalera inclinada, parte del peso es soportado por la estructura, reduciendo la carga en la cuerda y eliminando la necesidad de un Tender para alejar la camilla de la pared." },
            { letter: "c", text: "Permite al paciente bajarse por sus propios medios." },
            { letter: "d", text: "Elimina la necesidad de anclajes." }
        ],
        correctAnswer: "b",
        explanation: "Una camilla colgando libremente necesita un Tender empujándola lejos de la pared constantemente. Al deslizar sobre la escalera, el contacto controlado con los peldaños hace el trabajo del Tender automáticamente."
    },
    {
        question: "Para el sistema de Escalera Exterior Reclinada (Exterior Leaning Ladder), el manual indica que se debe posicionar la escalera 'lo más alto posible'. ¿Por qué?",
        options: [
            { letter: "a", text: "Para que se vea desde más lejos." },
            { letter: "b", text: "Para crear un punto de anclaje alto que permita evacuar TODAS las ventanas y pisos por debajo de ese nivel sin tener que mover o reposicionar la escalera." },
            { letter: "c", text: "Para que la cuerda sea más larga." },
            { letter: "d", text: "Para que el A-Frame sea más estable." }
        ],
        correctAnswer: "b",
        explanation: "En un edificio con múltiples pisos, si posicionas la escalera en el piso 8, puedes evacuar ventanas del 1 al 7 sin reposicionar nada. Si la pones en el piso 4, solo alcanzas del 1 al 3."
    },
    {
        question: "En la Escalera de Cantilever (Cantilever Ladder), ¿cuántos peldaños mínimo deben permanecer DENTRO del edificio y por qué?",
        options: [
            { letter: "a", text: "Al menos 3 peldaños, solo como soporte estructural." },
            { letter: "b", text: "Al menos 7 peldaños, porque un rescatista debe estar parado sobre ellos como contrapeso para que la escalera no vuelque hacia afuera por el peso de la carga colgante." },
            { letter: "c", text: "Al menos 2 peldaños para el anclaje." },
            { letter: "d", text: "Todos los peldaños deben estar adentro." }
        ],
        correctAnswer: "b",
        explanation: "Sin el contrapeso humano del rescatista (aprox 100 kg sobre los peldaños interiores), la carga exterior que cuelga de la punta de la escalera vencería el momento de volteo y lanzaría la escalera (y el rescatista) hacia afuera."
    },
    {
        question: "El sistema de Escalera Interior Reclinada (Interior Leaning Ladder) usa los peldaños para controlar la bajada de una camilla. ¿Cómo genera control la cuerda reeveada en los peldaños?",
        options: [
            { letter: "a", text: "Usando nudos en cada peldaño." },
            { letter: "b", text: "La cuerda se pasa en un zigzag específico entre varios peldaños consecutivos (bajo el primero, entre el 2do y 3ro, de regreso, entre el 1ro y 2do desde arriba), generando fricción progresiva suficiente para controlar la bajada." },
            { letter: "c", text: "Se amarra la cuerda directamente a los beams." },
            { letter: "d", text: "Solo se usa el primer peldaño como polea." }
        ],
        correctAnswer: "b",
        explanation: "Es el mismo principio que un freno de fricción (brake rack o figure-8). Cada cambio de dirección de la cuerda alrededor de un peldaño agrega fricción. El patrón específico da el control adecuado para la carga de una camilla."
    },
    {
        question: "El Moving Ladder Slide (Escalera Deslizante Móvil) es útil cuando:",
        options: [
            { letter: "a", text: "La camilla es demasiado larga para moverse." },
            { letter: "b", text: "El terreno no permite acercar la camilla directamente a la víctima. Al amarrar la camilla a la escalera, se 'alarga' efectivamente la camilla para poder colocarla sobre obstáculos (parapetos, huecos) que de otro modo bloquearían el acceso." },
            { letter: "c", text: "El paciente pesa más de 200 kg." },
            { letter: "d", text: "No hay cuerdas disponibles." }
        ],
        correctAnswer: "b",
        explanation: "Imagina evacuar a alguien de un rooftop con un parapeto de 1 metro de alto. La camilla sola no pasa bien. Amarrada a la escalera, puedes deslizarla sobre el parapeto fácilmente, peldaño a peldaño."
    },
    {
        question: "En cualquier sistema de escalera como punto de anclaje alto (Ladder Gin, A-Frame, etc.), ¿cuál es el tipo de escalera más adecuado para usar como base estructural?",
        options: [
            { letter: "a", text: "Escaleras de madera de 6 peldaños domésticas." },
            { letter: "b", text: "Escaleras tipo 1A de servicio de bomberos (fire service) o comerciales de aluminio grado 1A, que están construidas para soportar cargas estructurales significativas." },
            { letter: "c", text: "Escaleras de fibra de vidrio para electricistas." },
            { letter: "d", text: "Escaleras de cuerda de nudos." }
        ],
        correctAnswer: "b",
        explanation: "Las escaleras domésticas o de uso general (Tipo III o II) tienen una resistencia máxima de 200-225 lbs de carga individual. Las Tipo 1A de bomberos están clasificadas para 300 lbs+. Para cargas de rescate (paciente + rescatista + equipo) solo se usan escaleras de grado profesional."
    },
    {
        question: "¿Cuál sistema de cuerdas recomienda el manual para los sistemas de Ladder Slide, Exterior Leaning Ladder y Cantilever Ladder?",
        options: [
            { letter: "a", text: "Una sola cuerda sin belay para simplificar el sistema." },
            { letter: "b", text: "Un sistema de Doble Tensión (Twin Tension) o de Línea Principal con Belay Independiente (Main/Belay System). La redundancia es siempre necesaria." },
            { letter: "c", text: "Solo se requiere un belay, sin línea principal." },
            { letter: "d", text: "Un sistema de 3 cuerdas con 3 descensores." }
        ],
        correctAnswer: "b",
        explanation: "Ningún sistema de escalera elimina la necesidad de doble protección de cuerdas. La escalera solo modifica CÓMO se mueve la camilla (sobre la escalera vs libre), pero el sistema de seguridad twin/main-belay sigue siendo obligatorio."
    },
    {
        question: "¿Por qué las Roof Ladders (escaleras de techo con ganchos) deben invertirse (hooks hacia abajo) cuando se usan para construir un Ladder A-Frame?",
        options: [
            { letter: "a", text: "Para que los ganchos no arañen la cuerda." },
            { letter: "b", text: "Los ganchos apuntando hacia abajo en el suelo actúan como anclas que evitan que las bases de las escaleras deslicen hacia afuera. También evitan que los ganchos dañen las cuerdas o equipos conectados en la cima del A-Frame." },
            { letter: "c", text: "Es una preferencia estética." },
            { letter: "d", text: "Para que la altura del A-Frame sea menor." }
        ],
        correctAnswer: "b",
        explanation: "Los ganchos de las roof ladders están diseñados para agarrar el caballete de los techos. Invertida, el gancho apunta al suelo y actúa como freno contra deslizamiento. Apuntando hacia arriba, sería un peligro para cuerdas y trabajadores."
    }
];
