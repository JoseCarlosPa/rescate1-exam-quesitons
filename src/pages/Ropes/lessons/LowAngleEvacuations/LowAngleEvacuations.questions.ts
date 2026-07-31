import { Question } from "../../../../question";

export const lowAngleFaqData = [
    {
        question: "¿Cuál es la diferencia fundamental entre una evacuación de Bajo Ángulo (Low Angle) y una de Alto Ángulo (High Angle)?",
        answer: "En la evacuación de Bajo Ángulo, los pies de los cuidadores (Tenders) tocan el suelo y ellos soportan la mayor parte del peso de la camilla. Las cuerdas se usan para controlar el movimiento y dar seguridad (belay), pero no suspenden la camilla en el vacío como en el Alto Ángulo."
    },
    {
        question: "¿Para qué sirve la Rueda de Camilla (Litter Wheel) en una evacuación de bajo ángulo y cuándo NO se recomienda?",
        answer: "Reduce drásticamente el esfuerzo porque levanta la camilla del suelo y rueda sobre él. No se recomienda en terrenos con muchas rocas grandes, troncos o vegetación densa, ya que la rueda se atascará constantemente. Tampoco es práctica en gullys (cañadas estrechas en V) donde no hay espacio para la rueda y los pies de los tenders al mismo tiempo."
    },
    {
        question: "¿Cuántos Tenders se necesitan típicamente en un rescate de bajo ángulo?",
        answer: "Generalmente entre 3 y 4 cuidadores es lo óptimo. A un ángulo más plano (casi horizontal), pueden necesitarse más, pero cuando se requieren más de 4 cuidadores, la operación ya se parece más a un 'carryout' (rescate a pie) con belay que a una evacuación técnica en cuerdas."
    },
    {
        question: "¿Cómo se conecta un Tender (cuidador) a la camilla en una evacuación de Bajo Ángulo y por qué puede usar la técnica de 'leanback'?",
        answer: "Se conecta con una cinta ajustable (CMC Litter Strap, Multi-Loop Strap o Prusik) al poste vertical de la camilla, por delante de su posición. Al inclinarse hacia atrás (leanback), el tender usa su propio peso corporal para LEVANTAR la camilla del suelo, lo que ayuda al sistema de cuerdas a halar desde arriba."
    },
    {
        question: "¿Qué configuración de camilla se usa cuando el terreno es muy angosto (ej. una cañada estrecha)?",
        answer: "Se usa una Camilla Vertical (Inline Litter), orientada en línea con la dirección de movimiento. Se conecta la línea principal usando un 'Portuguese Bowline' que distribuye la carga en varios puntos de la estructura de la camilla en lugar de en un solo punto."
    }
];

export const lowAngleEvacuationsQuestions: Question[] = [
    {
        question: "En una evacuación de Bajo Ángulo (Low Angle o Scree Evacuation), ¿cuál es la función principal del sistema de cuerdas?",
        options: [
            { letter: "a", text: "Suspender la camilla completamente en el aire para que los tenders descansen." },
            { letter: "b", text: "Controlar el movimiento de la camilla (halar o frenar) y proveer seguridad de belay. Los Tenders soportan la mayor parte del peso físico de la camilla en sus espaldas y piernas." },
            { letter: "c", text: "Solo decorar el acantilado." },
            { letter: "d", text: "Reemplazar a los Tenders completamente." }
        ],
        correctAnswer: "b",
        explanation: "Contrario al Alto Ángulo (donde las cuerdas soportan TODO el peso), en el Bajo Ángulo los Tenders son el motor de soporte. Las cuerdas controlan el ritmo y la seguridad, pero el trabajo físico recae en el equipo."
    },
    {
        question: "Al usar la configuración de camilla horizontal en bajo ángulo, ¿en qué posición deben estar los Tenders (cuidadores) respecto a la camilla?",
        options: [
            { letter: "a", text: "Por encima del paciente." },
            { letter: "b", text: "Del lado de la cuerda (la parte alta del terreno)." },
            { letter: "c", text: "Del lado bajo del terreno (downhill side), para soportar el peso de la camilla y equilibrarla contra la pendiente." },
            { letter: "d", text: "En horizontal exacta, a los costados." }
        ],
        correctAnswer: "c",
        explanation: "En un terreno inclinado, la gravedad inclina la camilla. Los Tenders van del lado más bajo para contrarrestar esa inclinación, manteniendo al paciente lo más horizontal posible."
    },
    {
        question: "Cuando un Tender se conecta a la camilla con una Cinta de Camilla (CMC Litter Strap) y se inclina hacia atrás (Leanback Technique), el efecto mecánico es:",
        options: [
            { letter: "a", text: "Reduce la velocidad del haul team." },
            { letter: "b", text: "Su peso corporal actúa como contrapeso, ayudando a LEVANTAR la camilla del suelo y reduciendo la fricción que el equipo de tracción (Haul Team) debe vencer." },
            { letter: "c", text: "Bloquea el sistema de cuerdas." },
            { letter: "d", text: "El tender sale volando." }
        ],
        correctAnswer: "b",
        explanation: "Si el tender empuja la camilla o la carga de frente, solo agrega fricción al sistema. Al inclinarse hacia atrás usando la cinta como eslinga, convierte su masa corporal en una fuerza que ELEVA la camilla."
    },
    {
        question: "¿Cuándo está indicado usar la configuración de Camilla Vertical (Inline Litter) en una evacuación de Bajo Ángulo?",
        options: [
            { letter: "a", text: "Siempre que hay más de 2 rescatistas." },
            { letter: "b", text: "Cuando el terreno es demasiado angosto para que la camilla horizontal pase (ej. cañadas, grietas) o cuando se requieren más de 3 tenders y no hay espacio para tenerlos de lado." },
            { letter: "c", text: "Cuando el paciente solicita viajar de pie." },
            { letter: "d", text: "Solo se usa de noche." }
        ],
        correctAnswer: "b",
        explanation: "La Camilla Inline (vertical, cabeza de frente en la dirección del movimiento) permite caber en espacios imposibles para la configuración horizontal. El trade-off es que el paciente cuelga de su arnés pélvico, lo cual es incómodo."
    },
    {
        question: "Para conectar directamente la línea principal a una camilla vertical (Inline Litter) de forma que no se concentre la carga en un solo punto de su estructura, el manual recomienda:",
        options: [
            { letter: "a", text: "Usar tape (cinta adhesiva) alrededor de la barandilla." },
            { letter: "b", text: "Conectar un solo mosquetón al tubo central." },
            { letter: "c", text: "Atar la línea con un 'Portuguese Bowline' (Ballestrinque Portugués) que distribuye la tensión a lo largo de varios puntos estructurales de la camilla." },
            { letter: "d", text: "Colgar la camilla de los pies del paciente." }
        ],
        correctAnswer: "c",
        explanation: "El Portuguese Bowline crea lazos múltiples que se aprietan alrededor de los rieles de la camilla, distribuyendo la fuerza de tracción en área, no en un punto concentrado que podría doblarse o romperse."
    },
    {
        question: "La principal ventaja de añadir una Rueda de Camilla (Litter Wheel) en una evacuación de bajo ángulo es:",
        options: [
            { letter: "a", text: "Hace que la camilla vaya más rápido de forma incontrolable." },
            { letter: "b", text: "Levanta la camilla del suelo y la rueda sobre el terreno, reduciendo drásticamente la fricción y el número de Tenders necesarios, ya que su función principal de 'levantar' la hace la rueda." },
            { letter: "c", text: "Permite transportar al paciente en posición sentada." },
            { letter: "d", text: "Es solo para superficies mojadas." }
        ],
        correctAnswer: "b",
        explanation: "Sin rueda, los Tenders deben levantar 80-150 kg a cada paso. Con rueda, esa carga se convierte en fricción rodante, que es dramáticamente menor. Se pueden necesitar la mitad de Tenders."
    },
    {
        question: "El uso de la Rueda de Camilla está CONTRAINDICADO (no recomendado) en los siguientes escenarios, EXCEPTO:",
        options: [
            { letter: "a", text: "Terreno con muchos troncos y rocas grandes que bloquean la rueda." },
            { letter: "b", text: "Gullys angostos en V donde no hay espacio para la rueda Y los pies de los Tenders al mismo tiempo." },
            { letter: "c", text: "Pendiente relativamente limpia con pasto o tierra compacta, sin obstáculos mayores." },
            { letter: "d", text: "Terreno con vegetación muy densa o arbustos." }
        ],
        correctAnswer: "c",
        explanation: "La rueda funciona perfectamente en terrenos relativamente despejados. En terrenos irregulares con muchos obstáculos, la rueda se atascará más de lo que ayudará."
    },
    {
        question: "Cuando un médico (medic) necesita estar constantemente junto al paciente en una evacuación de bajo ángulo mientras la camilla se mueve, ¿cómo se maneja su conexión?",
        options: [
            { letter: "a", text: "Corre al lado de la camilla sin cuerda." },
            { letter: "b", text: "Se ata al paciente." },
            { letter: "c", text: "El médico se conecta como un Tender adicional, usando su propia línea de tender conectada a la camilla. Si en algún momento la camilla debe rodarse para limpiar la vía aérea, la línea de los tenders de un lado se libera para ceder espacio." },
            { letter: "d", text: "Debe esperar abajo hasta que la camilla llegue." }
        ],
        correctAnswer: "c",
        explanation: "El médico conectado a su Tender Line tiene total libertad de moverse junto a la camilla. El ajuste rápido de las Litter Straps permite al médico alejarse instantáneamente si necesitan rotar la camilla para el paciente."
    },
    {
        question: "¿Qué combinación de variables determina cuántos Tenders son necesarios en una evacuación de bajo ángulo?",
        options: [
            { letter: "a", text: "El color de la cuerda y el modelo de la camilla." },
            { letter: "b", text: "La inclinación del terreno, el peso del paciente y la longitud de la evacuación." },
            { letter: "c", text: "Siempre exactamente cuatro, sin excepción." },
            { letter: "d", text: "El número depende de cuántos rescatistas llegaron al rescate ese día." }
        ],
        correctAnswer: "b",
        explanation: "A mayor ángulo del terreno, las cuerdas ayudan más y se necesitan menos Tenders. A menor ángulo (más plano), los Tenders cargan más peso. Un paciente más pesado también requiere más Tenders."
    },
    {
        question: "¿Cuándo una evacuación de bajo ángulo con cuerdas deja de ser técnicamente una evacuación 'técnica en cuerdas' y se convierte en un simple 'carryout' con belay?",
        options: [
            { letter: "a", text: "Cuando se usan más de 4 Tenders por la planitud del terreno, porque entonces los cargadores soportan casi todo el peso y la cuerda solo actúa como belay de seguridad ante una caída del grupo." },
            { letter: "b", text: "Cuando se usa un trípode." },
            { letter: "c", text: "Cuando el paciente pesa más de 100 kg." },
            { letter: "d", text: "Cuando hay niebla." }
        ],
        correctAnswer: "a",
        explanation: "Si el terreno es tan plano que 4+ personas deben cargar físicamente la camilla sin que las cuerdas ayuden a su movimiento, estás esencialmente haciendo un carryout (rescate a pie). El belay sigue siendo válido como protección ante tropiezos o caídas."
    }
];
