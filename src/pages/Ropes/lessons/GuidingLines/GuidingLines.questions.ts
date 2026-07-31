import { Question } from "../../../../question";

export const guidingLinesFaqData = [
    {
        question: "¿Cuál es la diferencia principal entre una Línea Guía (Guiding Line) y un sistema de cuerdas convencional de bajada?",
        answer: "En un sistema convencional de bajada, la camilla cuelga directamente de la línea principal y el cuidador (Tender) la aleja físicamente de la pared. La Línea Guía es una cuerda adicional tensada desde abajo que actúa como 'riel invisible', manteniendo la camilla alejada de la pared automáticamente durante todo el trayecto."
    },
    {
        question: "¿Cuándo se usa una Línea Guía vs un sistema convencional?",
        answer: "La Línea Guía es ideal cuando el terreno de bajo está relativamente abierto y se puede tensar una cuerda desde abajo, especialmente en acantilados con mucha inclinación hacia atrás (overhanging) donde el tender no puede pararse en la pared. Sin Línea Guía, la camilla quedaría colgando libre en el vacío."
    },
    {
        question: "¿Qué es el sistema Skate Block y en qué se diferencia de una Línea Guía tradicional?",
        answer: "El Skate Block es una variante que no usa una cuerda adicional separada como Línea Guía. En cambio, una polea adicional (el 'skate block') se monta en la misma cuerda de descenso y se conecta también a la carga, haciendo que la carga ruede a lo largo de esa cuerda en diagonal, alejándose automáticamente de la estructura."
    },
    {
        question: "¿Qué regla de orientación (Rule of Thumb) da el manual sobre el ángulo del anclaje inferior de un sistema Skate Block?",
        answer: "El anclaje inferior del Skate Block debe estar entre 15° y 30° de angulación respecto a la línea de descenso. Si el ángulo es muy pequeño, el sistema no puede alejar la carga de la estructura. Si el ángulo es demasiado grande, las fuerzas se vuelven inmanejables y el sistema falla."
    },
    {
        question: "¿Por qué el manual dice que, al operar la Línea Guía, se debe usar 'solo la tensión necesaria para separar la carga del obstáculo' y no más?",
        answer: "Porque tensionar en exceso la Línea Guía incrementa las cargas en los anclajes exponencialmente (efecto vector/polea). A mayor tensión, más fuerza soportan los anclajes. El exceso de tensión puede sobrecargar anclajes que eran seguros, o dificultar enormemente el trabajo del equipo de tracción de la línea principal."
    }
];

export const guidingLinesQuestions: Question[] = [
    {
        question: "La función principal de una Línea Guía (Guiding Line) en un rescate vertical es:",
        options: [
            { letter: "a", text: "Reemplazar completamente al sistema principal de cuerdas." },
            { letter: "b", text: "Actuar como un 'riel' tensado desde abajo que mantiene la camilla alejada automáticamente de la pared o superficie, sin necesitar un tender dedicado solo a empujar." },
            { letter: "c", text: "Izar al paciente directamente desde el fondo." },
            { letter: "d", text: "Servir como cuerda de vida para el rescatista." }
        ],
        correctAnswer: "b",
        explanation: "La Guiding Line tensa una cuerda en diagonal desde abajo creando un 'riel invisible' que desplaza la camilla horizontalmente conforme baja, eliminando el constante empuje manual de un tender."
    },
    {
        question: "¿En qué situación es especialmente ventajosa una Línea Guía sobre un sistema convencional con tender?",
        options: [
            { letter: "a", text: "Cuando el terreno es perfectamente vertical y el tender puede pararse cómodamente en la pared." },
            { letter: "b", text: "En acantilados con salientes (overhangs) o superficies donde el tender no tiene donde pararse, o en terrenos muy inclinados donde la camilla quedaría libre en el vacío sin guía." },
            { letter: "c", text: "En rescates planos de 0 grados." },
            { letter: "d", text: "Cuando no hay suficiente cuerda." }
        ],
        correctAnswer: "b",
        explanation: "Si la pared tiene un saliente (overhang), la camilla cuelga libremente en el aire. Un tender no puede pararse en nada. La Guiding Line tensada desde el suelo es la única forma de dirigir la camilla horizontalmente en ese caso."
    },
    {
        question: "Para la tensión de una Línea Guía desde el anclaje inferior, el manual recomienda generalmente utilizar:",
        options: [
            { letter: "a", text: "La fuerza manual de dos rescatistas sin polipasto." },
            { letter: "b", text: "Un sistema de ventaja mecánica (M/A) de 5:1 o más cuando hay cuerdas sin nudos (factor 18 para cuerdas NFPA G-rated), ya que se requieren fuerzas considerables para tensar el sistema." },
            { letter: "c", text: "Una grúa automovil." },
            { letter: "d", text: "Ninguna tensión adicional, la gravedad lo hace sola." }
        ],
        correctAnswer: "b",
        explanation: "Tensar una Guiding Line en diagonal requiere vencer las fuerzas de la cuerda cargada + el ángulo del vector. Sin polipasto, el trabajo manual es agotador e inadecuado para un sistema seguro."
    },
    {
        question: "Al operar la Línea Guía durante el descenso, la regla de tensión es:",
        options: [
            { letter: "a", text: "Tensarla al máximo posible siempre." },
            { letter: "b", text: "Usar solo la tensión mínima necesaria para que la camilla evite la pared u obstáculos. Tensar en exceso sobrecarga innecesariamente los anclajes y el equipo de tracción." },
            { letter: "c", text: "Nunca tensar la Línea Guía durante el descenso." },
            { letter: "d", text: "Solo tensarla al llegar al punto medio." }
        ],
        correctAnswer: "b",
        explanation: "Por el efecto de vector de fuerza, cada aumento de tensión en una cuerda en ángulo incrementa exponencialmente la carga en los anclajes. 'Solo lo necesario' es la regla de oro."
    },
    {
        question: "¿Qué es el sistema Skate Block?",
        options: [
            { letter: "a", text: "Un sistema de escalada en hielo." },
            { letter: "b", text: "Una variante de la Línea Guía donde una polea adicional montada en la misma cuerda de descenso actúa como guía, alejando la carga de la estructura sin necesitar una cuerda guía separada." },
            { letter: "c", text: "Un tipo de casco de rescate." },
            { letter: "d", text: "Una técnica de rappel acrobático." }
        ],
        correctAnswer: "b",
        explanation: "El 'skate block' es una segunda polea que monta sobre la cuerda principal descendente. Al colgarse también de la carga, hace que la carga 'ruede' diagonalmente lejos de la estructura conforme baja."
    },
    {
        question: "¿Cuál es el ángulo recomendado para el anclaje inferior en un sistema Skate Block según el manual?",
        options: [
            { letter: "a", text: "0-5 grados (casi horizontal)." },
            { letter: "b", text: "45-90 grados (casi perpendicular)." },
            { letter: "c", text: "15-30 grados respecto a la línea de descenso." },
            { letter: "d", text: "Exactamente 60 grados siempre." }
        ],
        correctAnswer: "c",
        explanation: "Menos de 15° y el sistema no aleja suficientemente la carga. Más de 30° y las fuerzas en las cuerdas se vuelven tan grandes que el sistema deja de funcionar prácticamente."
    },
    {
        question: "Para el Skate Block en sistema de doble tensión (Twin-Tension), la segunda cuerda:",
        options: [
            { letter: "a", text: "Va al mismo anclaje que la primera, en el mismo punto." },
            { letter: "b", text: "Es un espejo de la primera, con su propio dispositivo de control y su propia polea 'skate block' conectada a la carga, y debe tensarse simultáneamente para evitar balanceos." },
            { letter: "c", text: "No existe, siempre es de cuerda simple." },
            { letter: "d", text: "Solo se usa para el belay y no lleva skate block." }
        ],
        correctAnswer: "b",
        explanation: "En un sistema Twin-Tension ambas cuerdas llevan carga. Si se usa Skate Block en doble tensión, ambas cuerdas deben ir sincronizadas (mismo ritmo) y conectarse al mismo punto de la carga para evitar voltear al paciente."
    },
    {
        question: "Al operar un sistema Skate Block para BAJAR una carga, ¿dónde se ubica el sistema de control (lowering device)?",
        options: [
            { letter: "a", text: "Arriba del acantilado, donde están los anclajes principales." },
            { letter: "b", text: "En el anclaje inferior al nivel del suelo, ya que la cuerda pasa por una polea de cambio de dirección arriba y baja al control abajo, lo que permite operar toda la evacuación desde el suelo." },
            { letter: "c", text: "A la mitad del acantilado." },
            { letter: "d", text: "Lo lleva el rescatista en su arnés." }
        ],
        correctAnswer: "b",
        explanation: "El Skate Block es especialmente eficiente porque permite a 1-2 operadores controlar el descenso completamente desde el suelo, sin necesitar personal en la cima ni un tender en la pared."
    },
    {
        question: "Si se usan dos dispositivos CLUTCH como controles de descenso en un sistema Skate Block Twin-Tension, ¿cómo se maximiza la eficiencia de operación con personal mínimo?",
        options: [
            { letter: "a", text: "Se necesitan dos rescatistas, uno por CLUTCH, operando en paralelo." },
            { letter: "b", text: "Ambos CLUTCH se anclan a la misma placa de anclaje de forma que un solo operador puede alcanzar ambas palancas con sus manos y controlar las dos líneas simultáneamente." },
            { letter: "c", text: "Se atan los dos CLUTCH entre sí y solo uno de ellos trabaja." },
            { letter: "d", text: "Un CLUTCH controla el descenso y el otro controla la Guiding Line." }
        ],
        correctAnswer: "b",
        explanation: "La eficiencia es la clave del Skate Block. Montar ambos CLUTCH en la misma placa de anclaje permite a un rescatista solitario operar un sistema completo Twin-Tension, ideal para equipos pequeños en torres."
    },
    {
        question: "¿Para qué se usan las torres de comunicaciones (comm towers) específicamente en el contexto del sistema Skate Block?",
        options: [
            { letter: "a", text: "Las torres no son relevantes para el Skate Block." },
            { letter: "b", text: "El Skate Block fue diseñado específicamente para este entorno: rescatar a un trabajador atascado en una estructura vertical sin que la carga roce constantemente la estructura metálica durante el descenso." },
            { letter: "c", text: "Solo se usa en torres para hacer rappel." },
            { letter: "d", text: "La torre sirve como ancla para la Guiding Line." }
        ],
        correctAnswer: "b",
        explanation: "En una torre metálica, el peligro de que la carga y la cuerda se enreden en las escalerillas, refuerzos y soportes es enorme. El Skate Block resuelve esto manteniendo la carga alejada de la estructura durante todo el descenso."
    }
];
