import { Question } from "../../../../question";

export const raisingSystemsFaqData = [
    {
        question: "¿Cuál es la diferencia entre una Polea Fija (Change-of-direction) y una Polea Móvil (M/A pulley)?",
        answer: "Una polea fija está anclada directamente al anclaje principal y solo cambia la dirección del tiro sin aportar ventaja mecánica. Una polea móvil viaja junto con la carga a lo largo de la cuerda hacia el anclaje, y es la que realmente multiplica o genera la ventaja mecánica."
    },
    {
        question: "¿Qué es un trinquete (Ratchet / Progress Capture Device)?",
        answer: "Es un dispositivo 'atrapa-progreso' o seguro unidireccional (como un nudo Prusik, Ascendedor, CLUTCH o MPD) fijado al anclaje que sostiene la carga en su lugar cada vez que el equipo de tracción deja de jalar o suelta la cuerda, evitando que esta se devuelva."
    },
    {
        question: "¿Qué es un Sistema Compuesto (Compound System)?",
        answer: "Es cuando un sistema de poleas simple jala o tracciona a otro sistema simple. Sus ventajas mecánicas se multiplican. Por ejemplo, conectar un sistema 2:1 jalando a un sistema 3:1 genera una ventaja final de 6:1 (2 x 3 = 6)."
    },
    {
        question: "¿Qué caracteriza a un Sistema Complejo (Complex System) como el 5:1 complejo?",
        answer: "A diferencia del sistema simple donde las poleas se acercan al anclaje, en los complejos las poleas viajan en direcciones opuestas hacia sí mismas. Son más eficientes en equipo y cuerda requerida, pero el 'reseteo' (reset) es más difícil porque deben retroceder dos poleas distintas."
    },
    {
        question: "¿Qué es un Sistema 'Piggyback' (a cuestas)?",
        answer: "Es un sistema de ventaja mecánica que se arma con una cuerda auxiliar separada de la línea principal (Main Line) y se conecta a ésta mediante un nudo Prusik. Es ideal cuando se necesita izar y luego bajar varias veces, manteniendo la carga segura en el Ratchet principal."
    }
];

export const raisingSystemsQuestions: Question[] = [
    {
        question: "¿Qué función cumple una polea fijada directamente al anclaje principal en un sistema de izado?",
        options: [
            { letter: "a", text: "Multiplica la fuerza por dos." },
            { letter: "b", text: "Actúa únicamente como un cambio de dirección (Change-of-direction) para que el equipo jale desde un ángulo más cómodo, sin agregar Ventaja Mecánica." },
            { letter: "c", text: "Aumenta la fuerza pero reduce la velocidad." },
            { letter: "d", text: "Evita que la carga retroceda." }
        ],
        correctAnswer: "b",
        explanation: "Las poleas que no se mueven hacia el anclaje (estáticas) no proporcionan ventaja mecánica, simplemente re-direccionan el tiro o esfuerzo del equipo."
    },
    {
        question: "¿Qué dispositivo es obligatorio en TODO sistema de tracción o izado (desde un 1:1 hasta el más complejo) para prevenir que la carga caiga si los rescatistas sueltan la cuerda?",
        options: [
            { letter: "a", text: "Un tensor de resorte." },
            { letter: "b", text: "Un Ratchet (Dispositivo de captura de progreso o seguro anti-retorno)." },
            { letter: "c", text: "Una polea doble." },
            { letter: "d", text: "Un nudo de remate suelto." }
        ],
        correctAnswer: "b",
        explanation: "El Ratchet (trinquete/seguro) garantiza que el esfuerzo y avance ganado en la cuerda no se pierda al detener el tiro, protegiendo tanto la carga como al equipo."
    },
    {
        question: "El sistema simple más común usado en rescate, el cual forma una letra 'Z' con la cuerda, otorga una ventaja mecánica teórica de:",
        options: [
            { letter: "a", text: "2:1" },
            { letter: "b", text: "3:1 (Z-rig)" },
            { letter: "c", text: "4:1" },
            { letter: "d", text: "5:1" }
        ],
        correctAnswer: "b",
        explanation: "El sistema en 'Z' (Z-rig) es un sistema simple de 3:1 que triplica (en teoría) la fuerza del equipo de tracción."
    },
    {
        question: "Al agregar un sistema simple 3:1 (ej. Z-rig) jalando al final de OTRO sistema simple 3:1, ¿qué ventaja mecánica total y tipo de sistema se obtiene?",
        options: [
            { letter: "a", text: "Sistema Simple de 6:1 (3 + 3 = 6)" },
            { letter: "b", text: "Sistema Compuesto de 9:1 (3 x 3 = 9)" },
            { letter: "c", text: "Sistema Complejo de 4:1" },
            { letter: "d", text: "Sistema Piggyback de 3:1" }
        ],
        correctAnswer: "b",
        explanation: "En los sistemas compuestos (compound), la ventaja se multiplica (3 x 3 = 9). El esfuerzo necesario se divide entre 9, aunque la distancia que hay que jalar de cuerda se multiplica por 9."
    },
    {
        question: "De acuerdo al manual, al usar sistemas con MUCHAS poleas y alta ventaja mecánica (ej. 9:1 o superiores), ¿qué riesgo se introduce respecto a la percepción física del equipo de tracción?",
        options: [
            { letter: "a", text: "La cuerda se calentará demasiado rápido." },
            { letter: "b", text: "El equipo pierde totalmente la sensación o 'feel' de la carga; si la camilla se atora contra un borde o roca, el equipo no lo notará a tiempo y podrían lastimar al paciente o dañar el equipo." },
            { letter: "c", text: "Las poleas pierden lubricación." },
            { letter: "d", text: "La carga empezará a girar rápidamente." }
        ],
        correctAnswer: "b",
        explanation: "Con altas ventajas, jalar es tan suave que los rescatistas arriba no sentirían resistencia si el paciente choca fuertemente contra algo abajo, por lo que podrían forzar el sistema causando daños."
    },
    {
        question: "En un Sistema Simple de 3:1, ¿cuántos metros de cuerda debe jalar el equipo de tracción para que la carga suba 1 metro?",
        options: [
            { letter: "a", text: "1 metro" },
            { letter: "b", text: "2 metros" },
            { letter: "c", text: "3 metros" },
            { letter: "d", text: "4 metros" }
        ],
        correctAnswer: "c",
        explanation: "La regla de la ventaja mecánica dicta que para ganar fuerza, sacrificas distancia. Si reduces el esfuerzo a una tercera parte (3:1), debes jalar tres veces la distancia que avanzará la carga (3 metros)."
    },
    {
        question: "El término 'Reseteo' (Reset) en un sistema de izado ocurre cuando:",
        options: [
            { letter: "a", text: "Las baterías de las poleas se descargan." },
            { letter: "b", text: "La carga choca y hay que bajarla un poco." },
            { letter: "c", text: "Las poleas móviles llegan a chocar contra las poleas fijas del anclaje y el sistema colapsa; por lo que el trinquete debe soportar el peso mientras se extienden las poleas móviles por la cuerda nuevamente hacia abajo." },
            { letter: "d", text: "Se desata el nudo ocho y se vuelve a atar." }
        ],
        correctAnswer: "c",
        explanation: "Cuando un sistema colapsa ('two-blocking'), ya no hay espacio en la cuerda para que las poleas se acerquen. Se debe liberar tensión para re-extender ('resetear') el Prusik/Polea a la posición inicial."
    },
    {
        question: "¿Cuál es una ventaja operativa de un Sistema Complejo (Complex System) frente a los demás tipos de sistemas M/A?",
        options: [
            { letter: "a", text: "No necesitan Ratchet (trinquete)." },
            { letter: "b", text: "Requieren mucho menos equipo (hardware) y el equipo de tracción jala hacia la carga (útil en laderas), requiriendo recoger menos cuerda que en un sistema simple del mismo nivel." },
            { letter: "c", text: "Son los más fáciles y rápidos de resetear." },
            { letter: "d", text: "Solo funcionan con cuerdas de 13 mm." }
        ],
        correctAnswer: "b",
        explanation: "Los sistemas complejos (ej. 5:1 complejo) logran su alta ventaja porque sus poleas viajan en direcciones opuestas entre ellas. Esto acorta la cantidad total de cuerda a jalar y usa menos poleas, aunque su reset sea tedioso."
    },
    {
        question: "Durante un escenario improvisado donde tienes unas 20 personas en la zona alta (bomberos y voluntarios en una carretera) disponibles para jalar en bloque, ¿qué sistema recomienda el manual para ser rápidos?",
        options: [
            { letter: "a", text: "Un complejo 9:1." },
            { letter: "b", text: "Un sistema 1:1 simple con un cambio de dirección y un Ratchet. Aprovecha la gran fuerza bruta y evita tiempos muertos de reseteo." },
            { letter: "c", text: "Poleas dobles 4:1." },
            { letter: "d", text: "Sistema compuesto 6:1." }
        ],
        correctAnswer: "b",
        explanation: "Si se cuenta con mucha fuerza humana ('meat advantage'), un tiro 1:1 es extremadamente rápido (sube 1 metro por 1 metro de cuerda jalada) y no requiere resetear."
    },
    {
        question: "¿Por qué el dispositivo MPD o el CLUTCH son ampliamente superiores a usar una polea fija con un Prusik como Ratchet?",
        options: [
            { letter: "a", text: "Porque se rompen antes de dañar la cuerda." },
            { letter: "b", text: "Porque evitan tener que cargar mosquetones de acero." },
            { letter: "c", text: "Porque integran la polea de alta eficiencia y el ratchet interno en una sola unidad, y en caso de necesidad permiten transformar (convertir) de Inmediato de izado a descenso (lowering)." },
            { letter: "d", text: "Porque aumentan automáticamente la ventaja mecánica a 5:1." }
        ],
        correctAnswer: "c",
        explanation: "Ambos dispositivos consolidan equipo. Actúan de Ratchet instantáneo de alto desempeño en la subida, y si algo sale mal o la camilla se atora, al girar la manivela se convierte instantáneamente en descensor."
    }
];
