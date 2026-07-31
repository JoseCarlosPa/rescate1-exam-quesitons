import { Question } from "../../../../question";

export const highAnchorsFaqData = [
    {
        question: "¿Por qué un trípode de rescate debe tener sus patas desplegadas lo más ampliamente posible?",
        answer: "Las patas abiertas al máximo crean la base más ancha, lo que maximiza la estabilidad del trípode contra el volcamiento. Al mayor ángulo de apertura, mayor es la resistencia a que el trípode se caiga cuando la carga no está perfectamente centrada."
    },
    {
        question: "¿Cuál es la regla de oro sobre la posición del belay cuando se usa un trípode o AHD (Artificial High Directional)?",
        answer: "La cuerda de belay NO debe pasar por la polea del trípode/AHD. Debe anclarse a nivel del suelo de forma independiente. Si el trípode se cae y el belay pasa por su polea, la carga caería el doble de la altura del trípode (más la elongación de la cuerda) antes de que el belay la detenga."
    },
    {
        question: "¿Qué diferencia fundamental existe entre un trípode estándar y el Arizona Vortex?",
        answer: "Un trípode estándar tiene patas telescópicas integradas (plegables pero unidas). El Arizona Vortex tiene patas completamente desmontables (easel A-frame). Esto lo hace más pequeño para transportar, pero el montaje es más complejo y tarda más tiempo. Su ventaja es que puede configurarse en múltiples posiciones que un trípode normal no puede lograr."
    },
    {
        question: "¿Qué son los brazos Davit y en qué se diferencian de un trípode?",
        answer: "Un Davit Arm es una grúa portátil que se instala sobre el borde de una abertura (como una grúa de barco). A diferencia del trípode (que se para sobre sus propias patas), el Davit necesita una base/socket fijo instalada en la estructura. Su ventaja es que puede girar fuera del área de trabajo. Su desventaja es que suele ser más bajo que un trípode, dificultando la transición de borde."
    },
    {
        question: "¿Cuándo está PROHIBIDO usar los controles hidráulicos/eléctricos de una grúa o aparato aéreo de bomberos para subir una carga de rescate?",
        answer: "SIEMPRE. Los controles de grúas y aeriales son solo para posicionar el dispositivo como punto de anclaje alto, NUNCA como mecanismo de izado. Estas máquinas están diseñadas para cargas masivas y sus controles son demasiado bruscos; podrían desmembrar a una víctima si la cuerda se enredara sin que el operador lo notara a tiempo."
    }
];

export const highAnchorsDirectionalsQuestions: Question[] = [
    {
        question: "La regla más importante de estabilidad de un Trípode dice que para evitar que vuelque, el rescatista debe asegurarse de que:",
        options: [
            { letter: "a", text: "Las patas del trípode estén completamente retraídas (más cortas posible)." },
            { letter: "b", text: "La carga y todos los sistemas de rescate conectados estén siempre DENTRO del perímetro delimitado por las patas del trípode (la carga no debe sobresalir por afuera de los pies)." },
            { letter: "c", text: "El trípode siempre esté en una superficie perfectamente horizontal." },
            { letter: "d", text: "Solo un rescatista opere el sistema a la vez." }
        ],
        correctAnswer: "b",
        explanation: "El centrado de la carga es la regla #1 del trípode. Si alguien jala la camilla hacia afuera del perímetro de las patas, el resultante de la fuerza sale de la base de soporte y el trípode vuelca. Es el error más común en rescates industriales reales."
    },
    {
        question: "Según las regulaciones OSHA para uso industrial (manejo de trabajadores), los trípodes tienen una carga de trabajo mínima de 310 lb (141 kg). Para el rescate técnico donde se puede necesitar izar a un rescatista y a un paciente simultáneamente, el manual recomienda:",
        options: [
            { letter: "a", text: "Usar siempre dos trípodes en paralelo." },
            { letter: "b", text: "El manual señala que esta situación (izar sujeto + rescatista juntos) debe EVITARSE con trípodes industriales estándar, ya que el rating de 310 lb es solo para una persona y el real breaking strength puede ser insuficiente." },
            { letter: "c", text: "Es perfectamente seguro izar a dos personas en cualquier trípode." },
            { letter: "d", text: "Siempre usar trípodes de acero inoxidable." }
        ],
        correctAnswer: "b",
        explanation: "310 lb es el mínimo de OSHA para personas ambulatorias. Un rescatista + víctima con equipo puede superar los 300 kg fácilmente. El manual es explícito: esa situación debe evitarse con trípodes de clase industrial."
    },
    {
        question: "Al usar un Aparato Aéreo de Bomberos (ladder truck/aerial) como punto direccional alto para un rescate, ¿cuál es la regla ESENCIAL sobre el ángulo de trabajo?",
        options: [
            { letter: "a", text: "El ángulo de la escalera debe ser lo más bajo posible (casi horizontal) para mayor alcance." },
            { letter: "b", text: "El ángulo de escalada (climbing angle) debe ser lo más alto (empinado) posible, para que la fuerza resultante esté lo más alineada con la longitud de la escalera y se genere compresión en los beams, no torsión lateral." },
            { letter: "c", text: "El ángulo no importa si la carga es menor de 100 kg." },
            { letter: "d", text: "La escalera siempre debe estar a 45 grados exactos." }
        ],
        correctAnswer: "b",
        explanation: "La escalera es una palanca. Mientras más horizontal esté, más torque intenta volcar el camión. El ángulo pronunciado (empinado) lleva las fuerzas hacia el eje longitudinal de los beams (su punto más fuerte) y minimiza la carga en los gatos hidráulicos."
    },
    {
        question: "¿Por qué está ABSOLUTAMENTE PROHIBIDO mover un aparato aéreo (ladder truck) mientras tiene una carga de rescate suspendida en la punta de su escalera?",
        options: [
            { letter: "a", text: "Porque el conductor no puede ver bien." },
            { letter: "b", text: "Un movimiento del vehículo genera shock loads masivos e impredecibles en el tip de la escalera, en los gatos hidráulicos y en la carga. El aparato no está diseñado para cargas dinámicas y podría colapsar la escalera o lanzar la carga al suelo." },
            { letter: "c", text: "Porque viola la licencia del conductor." },
            { letter: "d", text: "El manual no lo prohíbe." }
        ],
        correctAnswer: "b",
        explanation: "Es un principio básico de grúas: NUNCA mover la base mientras hay una carga suspendida en el extremo del brazo. En un aerial de bomberos, incluso un pequeño movimiento del chasis amplifica la fuerza en el tip de la escalera varias veces."
    },
    {
        question: "¿Qué es la 'Resultante de Fuerza' (Resultant Force) y por qué es crítico para la seguridad del trípode?",
        options: [
            { letter: "a", text: "Es el nombre de la cuerda principal del sistema." },
            { letter: "b", text: "Es la dirección y magnitud de la fuerza combinada que actúa sobre el punto de anclaje alto. Debe caer DENTRO del perímetro de las patas del trípode (dentro del 'footprint'). Si la resultante sale afuera, el trípode vuelca." },
            { letter: "c", text: "Es la fuerza de tracción del equipo haul team." },
            { letter: "d", text: "Es la fuerza del belay en caso de falla." }
        ],
        correctAnswer: "b",
        explanation: "Cuando hay múltiples cuerdas conectadas a un trípode, la fuerza real que experimenta es la suma vectorial de todas ellas. Esa fuerza combinada (la Resultante) puede apuntar en una dirección inesperada y sacar la carga del footprint."
    },
    {
        question: "El belay en sistemas con trípode o AHD debe anclarse al nivel del suelo (independiente del trípode) porque:",
        options: [
            { letter: "a", text: "El suelo siempre es más resistente que el trípode." },
            { letter: "b", text: "Si el belay pasa por la polea del trípode y el trípode colapsa, la carga caería el doble de la altura del trípode antes de que el belay la detenga — suficiente para causar la muerte." },
            { letter: "c", text: "Facilita el trabajo del operador del belay." },
            { letter: "d", text: "Porque las normativas OSHA lo requieren específicamente." }
        ],
        correctAnswer: "b",
        explanation: "Si el trípode mide 2.7m (9 ft) y el belay pasa por su polea, al colapsar el trípode la cuerda de belay se afloja 2.7m antes de comenzar a tensar. Con la elongación de la cuerda, la caída total podría ser de 3-4m — fatal en un rescate de espacio confinado."
    },
    {
        question: "¿Qué es el sistema AZORP y cuál es su ventaja principal?",
        options: [
            { letter: "a", text: "Es un arnés de rescate de víctima." },
            { letter: "b", text: "Es el Arizona Omni Rigging Pod: un accesorio de la Arizona Vortex que provee múltiples puntos de anclaje en todas las direcciones para sus guy lines, haciendo mucho más rápido y versátil el montaje de la Vortex o de un Gin Pole." },
            { letter: "c", text: "Es un sistema de polipasto 6:1." },
            { letter: "d", text: "Es un tipo de correa de sujeción para víctimas." }
        ],
        correctAnswer: "b",
        explanation: "El montaje rápido de guy lines (cuerdas de retenida) es el punto débil del Gin Pole — normalmente necesitas 3-4 cuerdas en ángulos precisos. El AZORP tiene múltiples puntos de anclaje pre-posicionados a 360° para resolver esto rápidamente."
    },
    {
        question: "Un Davit Arm tiene una ventaja operacional importante sobre un trípode en ciertos entornos industriales. ¿Cuál es?",
        options: [
            { letter: "a", text: "Es más alto que un trípode." },
            { letter: "b", text: "Puede pivotar o girar alejándose de la abertura, permitiendo retirar la carga lateralmente una vez en la superficie sin tener que moverla verticalmente a través del mismo hoyo por donde subió." },
            { letter: "c", text: "Pesa menos que un trípode." },
            { letter: "d", text: "No requiere cuerda de belay." }
        ],
        correctAnswer: "b",
        explanation: "En plantas industriales con múltiples tanques (tratamiento de aguas, alimentos), los Davit tienen una base fija permanente en cada abertura y solo se traslada el brazo. La capacidad de pivotar permite sacar una camilla del hoyo sin tener que pasar por todos los bordes."
    },
    {
        question: "Al conectar una carga de rescate a la grúa de un aparato aéreo de bomberos, ¿cuál es la forma correcta de distribuir la carga para no retorcer (torque) la escalera?",
        options: [
            { letter: "a", text: "Conectar solo al punto central de la barandilla." },
            { letter: "b", text: "Usar correas o cintas de anclaje (anchor straps) alrededor de AMBOS beams (largueros) de la escalera, creando un sistema multipoint que centra y reparte la carga simétricamente entre los dos largueros." },
            { letter: "c", text: "Conectar a un solo beam, el más cercano." },
            { letter: "d", text: "Usar los ojos de la plataforma superior únicamente." }
        ],
        correctAnswer: "b",
        explanation: "Si conectas a un solo punto lateral, creas un par de torsión (torque) que intenta retorcer la escalera sobre su eje longitudinal. Los beams de una escalera están diseñados para resistir flexión vertical, no torsión."
    },
    {
        question: "¿Cuál es la ventaja operacional del Gin Pole (poste de 1 sola pata) sobre un trípode?",
        options: [
            { letter: "a", text: "Es más estable que un trípode." },
            { letter: "b", text: "Es la opción más liviana y con la huella más pequeña (solo un punto de apoyo), ideal cuando el espacio es muy limitado para las tres patas de un trípode. Su desventaja es que requiere múltiples guy lines para estabilizarse en todas las direcciones." },
            { letter: "c", text: "Puede cargar más peso que un trípode." },
            { letter: "d", text: "No necesita guy lines." }
        ],
        correctAnswer: "b",
        explanation: "Un solo pie = mínima huella. Es perfecto para espacios donde instalar tres patas es imposible. El costo es la instalación de 3-4 guy lines (cuerdas de retenida laterales) para evitar que caiga hacia cualquier lado."
    }
];
