import { Question } from "../../../../question";

export const anchorsFaqData = [
    {
        question: "¿Qué es un BFR en rescate?",
        answer: "BFR es un término de jerga (Big Freaking Rock) que se refiere a un objeto inamovible muy grande como una roca gigante, un árbol inmenso, un camión de bomberos o un tanque de agua. La clave no es siempre el tamaño, sino la inmovilidad."
    },
    {
        question: "¿Cuál es el 'Ángulo Crítico' máximo recomendado para un anclaje?",
        answer: "El manual recomienda usar 90° como guía general para el ángulo máximo interior. A los 90°, la fuerza en cada pata es solo el 70% de la carga. Si se alcanza un ángulo de 120°, la fuerza en cada pata es del 100% de la carga total. Superar los 90° indica que el anclaje debe reforzarse para cargas adicionales."
    },
    {
        question: "¿Cómo se debe evitar la carga triaxial en un mosquetón de anclaje?",
        answer: "Al reunir varias cintas de anclajes separados, el mosquetón puede sufrir carga en tres direcciones (triaxial loading), lo cual compromete su resistencia. Para evitarlo, se recomienda usar un eslabón rápido triangular (triangular screw link) o dos mosquetones conectados a una placa de anclaje (anchor plate)."
    },
    {
        question: "¿Es seguro usar vehículos como anclajes?",
        answer: "Sí, pero con precauciones críticas. Se deben bloquear las llantas (chock wheels), quitar las llaves de ignición, conectar lo más bajo posible (ejes, ganchos de remolque sólidos) para evitar volcar el vehículo, y poner un letrero o capó abierto indicando que el vehículo es parte del sistema y NO debe moverse."
    },
    {
        question: "¿A qué ángulo se deben clavar las estacas (pickets)?",
        answer: "Las estacas deben clavarse a 2/3 de su longitud total y estar inclinadas a 15° alejándose (hacia atrás) de la dirección de la carga."
    },
    {
        question: "¿Cómo funciona un sistema de estacas unidos por un 'Spanish Windlass'?",
        answer: "Para sistemas de múltiples estacas, se unen con cinta o cuerda atada abajo (a ras de piso) de la estaca trasera y arriba de la delantera. Luego se coloca una barra en medio y se gira para trenzar y tensar la cinta hasta que la primera estaca apenas empiece a moverse. Esto distribuye la carga entre ambas estacas."
    }
];

export const anchorsQuestions: Question[] = [
    {
        question: "¿Cuál es la diferencia entre un 'Anchor Point' y un 'Anchor System'?",
        options: [
            { letter: "a", text: "Un punto de anclaje es para cuerda principal; el sistema de anclaje es para la cuerda de seguridad (belay)." },
            { letter: "b", text: "Un punto de anclaje es un objeto único; un sistema de anclaje conecta múltiples puntos de anclaje juntos para distribuir la carga." },
            { letter: "c", text: "Un punto de anclaje siempre es artificial; el sistema siempre es natural." },
            { letter: "d", text: "No hay diferencia, son sinónimos." }
        ],
        correctAnswer: "b",
        explanation: "Un 'Anchor Point' (punto de anclaje) es un objeto individual (ej. un árbol). Un 'Anchor System' se forma conectando múltiples puntos para distribuir la carga y dar redundancia."
    },
    {
        question: "¿A qué se le llama un anclaje 'Bombproof' (A prueba de bombas)?",
        options: [
            { letter: "a", text: "Un anclaje hecho exclusivamente de materiales de titanio." },
            { letter: "b", text: "Un anclaje cuyo punto es tan fuerte que no hay duda de que soportará mucho más de las cargas esperadas e inesperadas del rescate." },
            { letter: "c", text: "Cualquier anclaje estructural." },
            { letter: "d", text: "Un sistema de anclaje con al menos 4 estacas." }
        ],
        correctAnswer: "b",
        explanation: "Bombproof es el término para un anclaje indudablemente fuerte, que a menudo se logra amarrándose a un 'BFR' (Big Freaking Rock/objeto masivo)."
    },
    {
        question: "Al amarrar una cinta alrededor de un anclaje, se crea un ángulo interior ('Ángulo Crítico'). Según el manual, ¿cuál es el ángulo máximo preferido como guía general?",
        options: [
            { letter: "a", text: "45°" },
            { letter: "b", text: "90°" },
            { letter: "c", text: "120°" },
            { letter: "d", text: "180°" }
        ],
        correctAnswer: "b",
        explanation: "Aunque algunos en la industria usan 120° como el máximo permitido (donde cada pata soporta el 100% de la carga), el manual recomienda mantenerlo en o por debajo de 90° como guía general para mayor seguridad (a 90° soporta ~70%)."
    },
    {
        question: "¿Qué efecto tiene un Cambio de Dirección (Change of Direction) de 180° sobre el anclaje de la polea?",
        options: [
            { letter: "a", text: "La fuerza en el anclaje es igual a la carga." },
            { letter: "b", text: "La fuerza en el anclaje es la mitad de la carga." },
            { letter: "c", text: "La fuerza en el anclaje es el doble (2x) de la carga del sistema." },
            { letter: "d", text: "La polea anula la fuerza." }
        ],
        correctAnswer: "c",
        explanation: "Cuando una cuerda entra y sale paralela en la misma dirección (180° de cambio de dirección, ángulo interior 0°), la fuerza en el anclaje de la polea es exactamente el doble (2x) de la tensión de la cuerda."
    },
    {
        question: "¿Por qué se debe evitar el uso de barandales (railings) como puntos de anclaje estructurales?",
        options: [
            { letter: "a", text: "Son muy resbalosos para la cinta." },
            { letter: "b", text: "Están diseñados sólo para una fuerza descendente o hacia afuera de unas 200 lbs, no para cargas de rescate." },
            { letter: "c", text: "Ponen una carga excesiva sobre los mosquetones." },
            { letter: "d", text: "Siempre están electrificados." }
        ],
        correctAnswer: "b",
        explanation: "Los barandales normales están diseñados para resistir apoyos de personas (aprox 200 Ibf). Podrían fallar catastróficamente con la carga de un sistema de rescate, a menos que se usen solo como punto direccional (focal point) con un anclaje trasero pretensado (back tie) hacia un pilar estructural."
    },
    {
        question: "Al usar un vehículo como punto de anclaje, ¿dónde NO se recomienda atar la cuerda/cinta?",
        options: [
            { letter: "a", text: "El parachoques o partes altas sin verificar." },
            { letter: "b", text: "Ganchos de remolque robustos (Tow hooks)." },
            { letter: "c", text: "El riel del chasis (Frame rails)." },
            { letter: "d", text: "Los rines (Wheels) con bordes protegidos." }
        ],
        correctAnswer: "a",
        explanation: "Se debe atar lo más bajo posible en componentes estructurales sólidos como chasis, ruedas o ganchos reforzados para evitar arrancar partes cosméticas y prevenir que el vehículo vuelque por palanca alta."
    },
    {
        question: "¿Cuál es el procedimiento de seguridad estándar para el conductor/llaves cuando se usa un vehículo como anclaje?",
        options: [
            { letter: "a", text: "Mantener el motor encendido en neutral." },
            { letter: "b", text: "Quitar las llaves, bloquear las ruedas (chocks) y opcionalmente dejar el capó levantado." },
            { letter: "c", text: "El conductor debe estar en el asiento frenando." },
            { letter: "d", text: "Enganchar la cuerda al volante." }
        ],
        correctAnswer: "b",
        explanation: "Es crítico asegurarse de que el vehículo no pueda ser movido accidentalmente. Quitar las llaves, poner bloqueos en las ruedas y levantar el capó son prácticas excelentes de 'Lockout/Tagout' vehicular."
    },
    {
        question: "En un sistema de estacas (pickets), ¿a qué ángulo y qué profundidad deben clavarse en el suelo?",
        options: [
            { letter: "a", text: "90° (vertical) y mitad de profundidad." },
            { letter: "b", text: "15° alejándose de la carga, clavadas 2/3 de su longitud." },
            { letter: "c", text: "45° hacia la carga, clavadas 1/3 de su longitud." },
            { letter: "d", text: "15° hacia la carga, clavadas 2/3 de su longitud." }
        ],
        correctAnswer: "b",
        explanation: "Las estacas deben clavarse con una inclinación de 15° hacia atrás (alejándose de la dirección del tirón) y deben penetrar aproximadamente dos tercios (2/3) de su longitud total para máximo agarre."
    },
    {
        question: "¿Qué sistema se usa típicamente para unir y tensar múltiples estacas en línea (como en un sistema 1-1-1)?",
        options: [
            { letter: "a", text: "Tensionless Hitch" },
            { letter: "b", text: "Spanish Windlass (Torno español)" },
            { letter: "c", text: "Radium Release Hitch" },
            { letter: "d", text: "Munter Hitch" }
        ],
        correctAnswer: "b",
        explanation: "El Spanish Windlass usa un lazo de cinta o cuerda que se tuerce con una palanca para transferir tensión entre las estacas y asegurar que trabajen en conjunto de manera eficiente."
    },
    {
        question: "Al reunir las cintas de múltiples anclajes, puede ocurrir una carga triaxial (triaxial loading) en el mosquetón recolector. ¿Cómo se previene esto de la mejor manera?",
        options: [
            { letter: "a", text: "Apretando muy fuerte el mosquetón." },
            { letter: "b", text: "Usando un 'triangular screw link' (eslabón rápido triangular) o una placa de anclajes (anchor plate)." },
            { letter: "c", text: "Usando un mosquetón tipo D simétrico." },
            { letter: "d", text: "Eliminando un anclaje para que solo queden dos." }
        ],
        correctAnswer: "b",
        explanation: "Un mosquetón no está diseñado para carga en tres direcciones; usar un maillón triangular o una placa de anclajes permite distribuir las direcciones de fuerza adecuadamente sin debilitar el conector."
    },
    {
        question: "De las configuraciones de anclajes simples (Wrap 3 Pull 2, Wrap 2 Pull 1, etc) probadas por CMC con cinta tubular de 1 pulgada, ¿cuál fue consistentemente la MÁS fuerte?",
        options: [
            { letter: "a", text: "Choker / Girth Hitch (Nudo de alondra)" },
            { letter: "b", text: "Single Loop (Bucle simple)" },
            { letter: "c", text: "Basket (En U / 3-bight)" },
            { letter: "d", text: "Redundant Wrap 2, Pull 1" }
        ],
        correctAnswer: "d",
        explanation: "El anclaje 'Redundant Wrap 2, Pull 1' (usando cinta redundada/doble) alcanzó más de 9,700 lbf en pruebas, siendo la opción más fuerte y favorita para ahorrar tiempo en puntos de anclaje masivos (BFR)."
    },
    {
        question: "¿Dónde suele fallar la cinta (webbing) en un anclaje simple llevado hasta su punto de rotura en el laboratorio?",
        options: [
            { letter: "a", text: "En el nudo de agua (Water knot)." },
            { letter: "b", text: "En la fricción contra el árbol/poste." },
            { letter: "c", text: "Donde dos capas de cinta quedan pellizcadas (pinched) dentro del mosquetón." },
            { letter: "d", text: "En el centro del tramo recto." }
        ],
        correctAnswer: "c",
        explanation: "Las pruebas revelaron que la cinta casi siempre se rompe en el punto de contacto dentro del mosquetón donde las capas se comprimen y pellizcan mutuamente bajo tensión extrema."
    },
    {
        question: "¿Qué precaución se menciona al usar anclajes naturales vivos (árboles)?",
        options: [
            { letter: "a", text: "Tienen que estar secos." },
            { letter: "b", text: "Evaluar sus raíces, si está vivo/quemado, la condición del suelo, y considerar al menos 4 pulgadas de diámetro como mínimo general." },
            { letter: "c", text: "Nunca atar cerca del suelo." },
            { letter: "d", text: "Siempre retirar la corteza." }
        ],
        correctAnswer: "b",
        explanation: "Los árboles de al menos 4 pulgadas bien enraizados suelen ser adecuados, pero siempre hay que evaluar humedad del suelo, plagas, y de hecho se deben atar LO MÁS BAJO posible al suelo para reducir la fuerza de palanca."
    },
    {
        question: "¿Por qué el 'Tensionless Hitch' no se lista como el anclaje universal para todo en vez de requerir cintas?",
        options: [
            { letter: "a", text: "Porque es un nudo muy difícil de inspeccionar." },
            { letter: "b", text: "Requiere un objeto cilíndrico grande (al menos 4\"), consume mucha cuerda útil y el anclaje no debe ser afilado." },
            { letter: "c", text: "Porque reduce la fuerza de la cuerda en un 40%." },
            { letter: "d", text: "Solo funciona en operaciones de nieve." }
        ],
        correctAnswer: "b",
        explanation: "Aunque tiene 100% de eficiencia, el tensionless hitch demanda mucha cuerda que a menudo se necesita para el rescate y requiere de un objeto liso de al menos 4 pulgadas (para no generar un radio de curvatura agresivo)."
    },
    {
        question: "Al realizar un 'Wrap 3, Pull 2' con cinta, ¿dónde debe quedar posicionado idealmente el nudo de agua (Water Knot)?",
        options: [
            { letter: "a", text: "Tocando el mosquetón." },
            { letter: "b", text: "En la parte trasera (opuesta a la carga) del poste/árbol." },
            { letter: "c", text: "En el lado de la carga del poste/árbol, presionado contra él." },
            { letter: "d", text: "Fuera del sistema por completo." }
        ],
        correctAnswer: "c",
        explanation: "Se recomienda posicionar el nudo en la cinta de modo que quede en el lado que mira hacia la carga. Así, la fricción de la parte trasera del árbol toma la mayoría del esfuerzo y el nudo apenas recibe tensión, manteniendo su fuerza."
    }
];
