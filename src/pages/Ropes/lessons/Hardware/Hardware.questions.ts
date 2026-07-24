import { Question } from "../../../../question";

export const hardwareFaqData = [
    {
        question: "¿Por qué los mosquetones de acero son preferibles para ciertas aplicaciones frente a los de aluminio?",
        answer: "Los mosquetones de acero son más resistentes a la abrasión y al desgaste por deslizamiento de cuerda — por ejemplo, cuando se usan como polea de cambio de dirección con la cuerda pasando constantemente. Los de aluminio son más livianos y suficientes para la mayoría de usos de rescate.",
    },
    {
        question: "¿Por qué el 'gate flutter' (vibración de la puerta) es un riesgo?",
        answer: "El 'gate flutter' ocurre cuando un mosquetón sin bloqueo está expuesto a vibraciones, como las de un helicóptero o de una cuerda vibrando. La vibración puede abrir el seguro temporalmente, reduciendo drasticamente la resistencia del mosquetón. Por eso se usan mosquetones de bloqueo en todas las aplicaciones de rescate críticas.",
    },
    {
        question: "¿Cuándo se debe retirar un mosquetón de servicio?",
        answer: "Se debe retirar cuando: (1) la puerta no cierra o bloquea correctamente, (2) hay grietas visibles, (3) hay desgaste excesivo por deslizamiento de cuerda que haya creado una ranura, (4) los remaches o partes móviles están flojos o dañados, o (5) hay cualquier duda sobre su integridad estructural.",
    },
    {
        question: "¿Por qué las poleas de rescate deben tener rodamientos metálicos?",
        answer: "Las ruedas de plástico o nylon sin rodamiento tienden a deformarse bajo carga, lo que puede aumentar la fricción, detener el giro de la rueda y provocar que la cuerda roce y cree una ranura en la roldana. Las poleas de rescate deben tener una roldana metálica montada sobre rodamientos (preferiblemente de bolas sellados).",
    },
    {
        question: "¿Cuál es la diferencia entre una polea fija y una polea móvil en cuanto a ventaja mecánica?",
        answer: "Una polea fija (de cambio de dirección) actúa como palanca de primer orden: los brazos de palanca son iguales, por lo que la VM es 1:1 — no aumenta la ventaja mecánica. Una polea móvil actúa como palanca de segundo orden: el brazo de esfuerzo es el doble del brazo de resistencia, creando una VM de 2:1.",
    },
    {
        question: "¿Qué ventaja tienen los dispositivos multipropósito (MPD, CLUTCH, MAESTRO) sobre los descendedores simples?",
        answer: "Integran múltiples funciones en un solo dispositivo: control de descenso, polea de cambio de dirección con trinquete para sistemas de izado, dispositivo de aseguramiento (belay), y dispositivo de rapel — todo con certificación NFPA. Esto simplifica el sistema y reduce el equipo necesario.",
    },
    {
        question: "¿Cuándo se debe retirar un descendedor Figura 8 o una barra de freno (brake bar)?",
        answer: "La regla empírica de la industria es retirarlos cuando falta el 10% del material por desgaste de abrasión. Los bordes o puntos agudos pueden suavizarse con papel de lija (emery paper). Los descendedores autobloqueantes deben verificarse para asegurar que las piezas móviles no estén dobladas ni con riesgo de atascarse.",
    },
];

export const hardwareQuestions: Question[] = [
    // ── MOSQUETONES ──
    {
        question: "¿Cuáles son los tres ejes en que se prueba la resistencia de un mosquetón según NFPA 1983?",
        options: [
            { letter: "a", text: "Eje mayor, eje menor y con la puerta abierta" },
            { letter: "b", text: "Eje mayor, eje transversal y eje diagonal" },
            { letter: "c", text: "Horizontal, vertical y torsión" },
            { letter: "d", text: "Solo eje mayor y con puerta abierta" },
        ],
        correctAnswer: "a",
        explanation: "NFPA 1983 requiere pruebas en tres configuraciones: eje mayor (carga normal de trabajo), eje menor (carga perpendicular — los mosquetones pueden rotar en el sistema) y con puerta abierta (situación que puede ocurrir accidentalmente).",
    },
    {
        question: "¿Cuál es el requisito de resistencia en eje mayor para un mosquetón de 'Uso General' según NFPA 1983?",
        options: [
            { letter: "a", text: "27 kN (6,070 lbf)" },
            { letter: "b", text: "40 kN (8,992 lbf)" },
            { letter: "c", text: "18 kN (4,046 lbf)" },
            { letter: "d", text: "36 kN (8,093 lbf)" },
        ],
        correctAnswer: "b",
        explanation: "NFPA 1983 requiere 40 kN (8,992 lbf) en eje mayor para mosquetones de 'Uso General'. Los de 'Uso Técnico' requieren 20 kN (4,496 lbf). Estas son las resistencias mínimas que deben alcanzarse con el cálculo de 3 sigma.",
    },
    {
        question: "¿Qué es el 'gate flutter' y por qué representa un riesgo en rescate?",
        options: [
            { letter: "a", text: "El desgaste progresivo de la puerta por fricción con la cuerda" },
            { letter: "b", text: "Vibración que puede abrir momentáneamente un mosquetón sin bloqueo, reduciendo su resistencia" },
            { letter: "c", text: "El sonido metálico que indica fatiga del metal" },
            { letter: "d", text: "La apertura accidental de la puerta por impacto con rocas" },
        ],
        correctAnswer: "b",
        explanation: "El 'gate flutter' ocurre cuando un mosquetón sin bloqueo está expuesto a vibraciones (por ejemplo, de un helicóptero o cuerda bajo tensión). La vibración puede abrir momentáneamente la puerta, reduciendo drásticamente la resistencia del mosquetón. Por esto se usan mosquetones de bloqueo en rescate.",
    },
    {
        question: "¿Cuál es la principal ventaja de los mosquetones de acero sobre los de aluminio?",
        options: [
            { letter: "a", text: "Mayor resistencia en eje mayor" },
            { letter: "b", text: "Menor peso por unidad" },
            { letter: "c", text: "Mayor resistencia al desgaste por abrasión — ideal cuando la cuerda pasa continuamente" },
            { letter: "d", text: "Mayor apertura de puerta" },
        ],
        correctAnswer: "c",
        explanation: "Los mosquetones de acero son preferibles cuando la cuerda pasa continuamente a través de ellos (como cambio de dirección), ya que resisten mejor el desgaste por abrasión. Los de aluminio son más livianos y suficientes para la mayoría de usos de rescate donde no hay fricción continua.",
    },
    {
        question: "¿Qué significa que un mosquetón esté marcado 'G' o 'T' según NFPA 1983?",
        options: [
            { letter: "a", text: "G = Galvanizado, T = Titanio" },
            { letter: "b", text: "G = Uso General (cargas de una o dos personas), T = Uso Técnico (una persona)" },
            { letter: "c", text: "G = Gancho, T = Trapezoidal" },
            { letter: "d", text: "G = Grado certificado, T = Grado de prueba" },
        ],
        correctAnswer: "b",
        explanation: "NFPA 1983 clasifica el equipo en G (Uso General) para cargas de una o dos personas, y T (Uso Técnico) para cargas de una persona. Los mosquetones G tienen requisitos de resistencia más altos que los T.",
    },
    // ── DESCENDEDORES ──
    {
        question: "¿Cuál es la principal ventaja del Figura 8 y el Brake Bar Rack sobre los descendedores modernos más complejos?",
        options: [
            { letter: "a", text: "Mayor resistencia al calor generado por la fricción" },
            { letter: "b", text: "Simplicidad, versatilidad, bajo costo y permiten familiarizarse con los fundamentos del rescate" },
            { letter: "c", text: "Funcionan como dispositivo de ascenso en caso de emergencia" },
            { letter: "d", text: "Son los únicos certificados bajo NFPA 1983 para uso en rescate" },
        ],
        correctAnswer: "b",
        explanation: "El Figura 8 y el Brake Bar Rack ofrecen simplicidad y versatilidad a bajo costo. Además permiten a los rescatistas familiarizarse con los fundamentos de las técnicas de rescate con cuerdas. Los descendedores más modernos pueden ser más complejos, costosos, pesados y menos versátiles.",
    },
    {
        question: "¿Qué característica diferencia a un descendedor autobloqueante con 'doble freno' de uno de 'freno simple'?",
        options: [
            { letter: "a", text: "El doble freno tiene dos manijas independientes en lugar de una" },
            { letter: "b", text: "En el freno simple, apretar más la manija detiene el descenso; en el doble freno, tanto soltar como apretar más detiene el descenso" },
            { letter: "c", text: "El doble freno tiene dos posiciones de bloqueo automático" },
            { letter: "d", text: "En el freno simple, la cuerda se carga por ambos lados; en el doble, solo por uno" },
        ],
        correctAnswer: "b",
        explanation: "En un descendedor autobloqueante de freno simple, si el usuario aprieta o jala más la manija intentando frenar, el descenso en realidad se acelera. En el diseño de doble freno, tanto soltar la manija como jalarla más fuertemente causan que el descenso se detenga — una característica de seguridad importante.",
    },
    {
        question: "¿Cuándo debe retirarse un descendedor Figura 8 o una barra de freno?",
        options: [
            { letter: "a", text: "Después de cada operación de rescate, independientemente del estado" },
            { letter: "b", text: "Cuando el 10% del material falta por desgaste de abrasión" },
            { letter: "c", text: "Cuando cumple 5 años de servicio" },
            { letter: "d", text: "Cuando muestra cualquier marca de uso en la superficie" },
        ],
        correctAnswer: "b",
        explanation: "La regla empírica de la industria indica retirar un descendedor Figura 8 o una barra de freno cuando falta el 10% del material por desgaste. Los bordes o puntos agudos pueden suavizarse con papel de lija. Los descendedores autobloqueantes deben verificarse para que sus partes móviles no estén dobladas.",
    },
    {
        question: "Cuando un dispositivo MPD, CLUTCH o MAESTRO se usa en lugar de la polea de cambio de dirección en un sistema 3:1, ¿qué función cumple su mecanismo de bloqueo?",
        options: [
            { letter: "a", text: "Actúa como absorbedor de energía del sistema" },
            { letter: "b", text: "Actúa como el trinquete (ratchet) del sistema, eliminando la necesidad de un nudo Prusik separado" },
            { letter: "c", text: "Actúa como polea de ventaja mecánica adicional" },
            { letter: "d", text: "Actúa como dispositivo de aseguramiento (belay) del rescatista" },
        ],
        correctAnswer: "b",
        explanation: "Cuando se usa en lugar de la polea de cambio de dirección en un sistema 3:1, el mecanismo de bloqueo actúa como el trinquete del sistema. Esto elimina convenientemente la necesidad de usar un agarre de cuerda separado (como un nudo Prusik) para sostener el sistema mientras se restablece.",
    },
    // ── POLEAS ──
    {
        question: "¿Cuál es el requisito de resistencia de NFPA 1983 para una polea de 'Uso General'?",
        options: [
            { letter: "a", text: "20 kN (4,496 lbf)" },
            { letter: "b", text: "18 kN (4,046 lbf)" },
            { letter: "c", text: "36 kN (8,093 lbf)" },
            { letter: "d", text: "40 kN (8,992 lbf)" },
        ],
        correctAnswer: "c",
        explanation: "NFPA 1983 establece 36 kN (8,093 lbf) para poleas de 'Uso General' y 18 kN (4,046 lbf) para 'Uso Técnico'. Un punto crítico: cuando se usa una polea como cambio de dirección, la carga puede multiplicarse hasta el doble de la carga del sistema.",
    },
    {
        question: "¿Qué diámetro mínimo de roldana recomienda el Cordage Institute para minimizar el desgaste de la cuerda?",
        options: [
            { letter: "a", text: "3 veces el diámetro de la cuerda" },
            { letter: "b", text: "5 veces el diámetro de la cuerda" },
            { letter: "c", text: "8 veces el diámetro de la cuerda" },
            { letter: "d", text: "10 veces el diámetro de la cuerda" },
        ],
        correctAnswer: "c",
        explanation: "El Cordage Institute recomienda un diámetro de roldana mínimo de 8 veces el diámetro de la cuerda para minimizar el desgaste. Para una cuerda de ½ in (12.5 mm), esto requeriría una roldana de 4 in (102 mm). Un diámetro de 3 veces solo causa una pérdida mínima de resistencia.",
    },
    {
        question: "¿Por qué una polea de cambio de dirección (fija) NO incrementa la ventaja mecánica del sistema?",
        options: [
            { letter: "a", text: "Porque solo puede usarse con una sola cuerda a la vez" },
            { letter: "b", text: "Porque actúa como palanca de primer orden con brazos iguales, resultando en VM 1:1" },
            { letter: "c", text: "Porque su roldana de aluminio absorbe energía por fricción" },
            { letter: "d", text: "Porque está fija al anclaje y no puede moverse con la carga" },
        ],
        correctAnswer: "b",
        explanation: "Una polea fija actúa como palanca de primer orden: el fulcro está en el eje de la roldana, y los dos brazos de palanca (hacia la carga y hacia el esfuerzo) son iguales. Brazos iguales = VM 1:1. Solo cambia la dirección de la fuerza, no la magnifica.",
    },
    {
        question: "¿Cuál es la ventaja mecánica creada por una polea MÓVIL?",
        options: [
            { letter: "a", text: "1:1 — igual que la polea fija" },
            { letter: "b", text: "2:1 — el brazo de esfuerzo es el doble del brazo de resistencia" },
            { letter: "c", text: "3:1 — por la configuración de palanca de tercer orden" },
            { letter: "d", text: "4:1 — por la doble roldana incorporada" },
        ],
        correctAnswer: "b",
        explanation: "Una polea móvil actúa como palanca de segundo orden. El brazo de esfuerzo (FE) es el doble del brazo de resistencia (FR), resultando en una ventaja mecánica de 2:1. Las poleas móviles aumentan la ventaja mecánica del sistema.",
    },
    {
        question: "¿Qué son las 'Prusik-Minding Pulleys' y cuál es su función?",
        options: [
            { letter: "a", text: "Poleas con roldana de acero diseñadas para soportar nudos Prusik" },
            { letter: "b", text: "Poleas con placa inferior cuadrada que evitan que el nudo Prusik se atasque en la parte superior de la polea" },
            { letter: "c", text: "Poleas con mecanismo de trinquete integrado que reemplaza al nudo Prusik" },
            { letter: "d", text: "Poleas dobles diseñadas para sistemas con doble Prusik en tándem" },
        ],
        correctAnswer: "b",
        explanation: "Con una polea de base redonda, la fricción de la cuerda jala el nudo Prusik hacia la parte superior de la polea, atascando el sistema. En los años 80, Arnor Larson propuso usar una polea con base cuadrada. Esta forma mantiene el Prusik en la base de la polea, evitando el atascamiento.",
    },
    {
        question: "¿Cuál es el factor más significativo en la eficiencia de una polea, según los estudios de NFPA?",
        options: [
            { letter: "a", text: "El tipo de rodamiento (bolas selladas vs. bujes de Oilite)" },
            { letter: "b", text: "El diámetro de la roldana" },
            { letter: "c", text: "La cuerda — más que el tipo de rodamiento o el tamaño de la roldana" },
            { letter: "d", text: "El material de la placa lateral (aluminio vs. acero)" },
        ],
        correctAnswer: "c",
        explanation: "Las pruebas para el desarrollo del estándar NFPA de eficiencia de poleas indicaron que el factor más significativo fue la cuerda, más que el tipo de rodamiento o el tamaño de la roldana. La mayoría de las poleas de rescate actuales tienen niveles de eficiencia muy similares.",
    },
    // ── OTROS DISPOSITIVOS ──
    {
        question: "¿Cuál es la función principal de una placa de anclaje (anchor plate) en un sistema de rescate?",
        options: [
            { letter: "a", text: "Aumentar la resistencia total del anclaje" },
            { letter: "b", text: "Organizar los mosquetones y hardware del anclaje, evitar que se aprieten entre sí y facilitar el setup del sistema" },
            { letter: "c", text: "Distribuir la carga entre múltiples puntos de anclaje independientes" },
            { letter: "d", text: "Servir como absorbedor de energía en caso de falla del anclaje" },
        ],
        correctAnswer: "b",
        explanation: "La placa de anclaje organiza los mosquetones y hardware, impidiendo que se aprieten entre sí y facilitando el acceso cuando se cambia o añade hardware bajo carga. El agujero grande actúa como punto de recolección para sistemas de anclaje multipunto. Agiliza el setup y reduce errores.",
    },
    {
        question: "¿Por qué los ascendedores mecánicos NO deben usarse como la leva de izaje (haul cam) en un sistema de ventaja mecánica?",
        options: [
            { letter: "a", text: "Porque no tienen suficiente resistencia para soportar la carga del sistema" },
            { letter: "b", text: "Porque podrían dañar la cuerda si la carga aumenta" },
            { letter: "c", text: "Porque solo funcionan correctamente en posición vertical" },
            { letter: "d", text: "Porque sus dimensiones no son compatibles con las poleas estándar de rescate" },
        ],
        correctAnswer: "b",
        explanation: "Los ascendedores mecánicos están diseñados para soportar la carga de una persona mientras sube por una cuerda fija. No deben usarse como leva de izaje en un sistema de ventaja mecánica porque podrían dañar la cuerda si la carga aumenta.",
    },
    {
        question: "¿Cuál es la ventaja principal del swivel en un sistema de rescate?",
        options: [
            { letter: "a", text: "Aumentar la resistencia del punto de anclaje" },
            { letter: "b", text: "Permite cambios de dirección de 360° sin pérdida de resistencia" },
            { letter: "c", text: "Previene que las líneas del sistema se enreden y permite girar la carga fácilmente" },
            { letter: "d", text: "Actúa como absorbedor de energía en caso de carga de impacto" },
        ],
        correctAnswer: "c",
        explanation: "Un swivel en el sistema ayuda a prevenir que las líneas se enreden y se retuerzan entre sí. También permite girar fácilmente la carga para mejor manejo a través de aberturas pequeñas. El swivel-pulley combina ambas funciones en un solo componente.",
    },
    {
        question: "¿Cuál es la diferencia principal entre una Kootenay Ultra Pulley (knot pass pulley) y una polea estándar?",
        options: [
            { letter: "a", text: "La Kootenay tiene rodamientos de bolas más eficientes" },
            { letter: "b", text: "La Kootenay tiene una roldana sobredimensionada para pasar nudos de unión de cuerdas, y puede usarse como rodillo de arista" },
            { letter: "c", text: "La Kootenay tiene un mecanismo de bloqueo autobloqueante integrado" },
            { letter: "d", text: "La Kootenay puede funcionar tanto como polea fija como polea móvil" },
        ],
        correctAnswer: "b",
        explanation: "La Kootenay Ultra Pulley fue diseñada con una roldana extra ancha para pasar el nudo de unión entre dos cuerdas. También es buena para líneas de alta (highlines) con múltiples cuerdas de pista. Su base plana la hace estable y permite usarla como rodillo de arista. Algunos modelos incluyen mecanismo de bloqueo de roldana.",
    },
    {
        question: "¿Qué tipo de rodamiento es preferible en poleas de rescate y por qué?",
        options: [
            { letter: "a", text: "Bujes de Oilite, porque son más baratos y resistentes" },
            { letter: "b", text: "Rodamientos de bolas sellados, por mayor eficiencia y bajo mantenimiento" },
            { letter: "c", text: "Bujes de bronce, por su capacidad de lubricarse automáticamente" },
            { letter: "d", text: "Rodamientos abiertos de bolas, por mayor eficiencia bajo carga" },
        ],
        correctAnswer: "b",
        explanation: "Las poleas de rescate modernas prefieren rodamientos de bolas sellados por su mayor eficiencia y bajo mantenimiento — no requieren lubricación ya que están sellados permanentemente. Los bujes de Oilite fueron populares por su menor costo, pero la mayor eficiencia de los rodamientos de bolas compensó la diferencia de precio.",
    },
    {
        question: "¿Por qué NO se recomienda 'reevear' (pasar la cuerda) por solo un lado de una polea doble?",
        options: [
            { letter: "a", text: "Porque reduce la eficiencia de la polea en un 50%" },
            { letter: "b", text: "Porque puede crear una fuerza lateral en la placa lateral que ha causado fallas" },
            { letter: "c", text: "Porque el nudo Prusik no puede funcionar correctamente en ese caso" },
            { letter: "d", text: "Porque viola los requisitos de certificación de NFPA 1983" },
        ],
        correctAnswer: "b",
        explanation: "Reevar solo un lado de una polea doble puede crear una fuerza lateral en la placa lateral y ha causado fallas en algunos casos. No se recomienda esta práctica.",
    },
    {
        question: "¿Qué debe verificarse al inspeccionar las poleas laterales giratorias de una polea de rescate?",
        options: [
            { letter: "a", text: "Que giren libremente pero que no se sientan sueltas; buscar distorsión, grietas, dobleces o elongación del agujero del mosquetón" },
            { letter: "b", text: "Que estén correctamente lubricadas con aceite de máquina" },
            { letter: "c", text: "Que los rodamientos hagan un sonido suave y continuo al girar" },
            { letter: "d", text: "Que el material sea de acero inoxidable, no de aluminio" },
        ],
        correctAnswer: "a",
        explanation: "Las placas laterales que giran deben hacerlo fácilmente pero sin sentirse sueltas. Verificar distorsión, grietas, dobleces o elongación del agujero del mosquetón. Si la polea tiene tuercas de eje, verificar su apriete. Los rodamientos sellados no requieren lubricación.",
    },
];
