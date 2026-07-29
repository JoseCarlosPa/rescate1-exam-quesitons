import { Question } from "../../../../question";

export const knotsFaqData = [
    {
        question: "¿Qué significa 'eficiencia de un nudo'?",
        answer: "La eficiencia de un nudo es el porcentaje de resistencia que le queda a la cuerda después de atar el nudo. Como los nudos crean dobleces en la cuerda, siempre reducen su resistencia a la tracción (tensile strength). Por ejemplo, un nudo con 80% de eficiencia en una cuerda de 10 kN hará que la cuerda se rompa a los 8 kN.",
    },
    {
        question: "¿Por qué se prefiere la familia del Nudo en 8 en rescate?",
        answer: "Los nudos de la familia del 8 (Figura 8) se prefieren porque son fáciles de aprender, fáciles de atar, fáciles de inspeccionar visualmente (se nota rápido si están mal atados), y mantienen una buena eficiencia en la cuerda.",
    },
    {
        question: "¿Qué es 'vestir' o 'peinar' un nudo (dressing a knot)?",
        answer: "Vestir un nudo significa acomodar las hebras de la cuerda para que corran suavemente paralelas sin giros innecesarios dentro del nudo. Esto hace que el nudo sea más fuerte, más fácil de inspeccionar visualmente y más fácil de desatar después de haber sido cargado.",
    },
    {
        question: "¿Se requieren nudos de seguridad (safety knots) en todos los nudos de rescate?",
        answer: "Ya no se enfatiza el uso de un nudo de seguridad extra para todos los nudos, siempre que se elijan nudos intrínsecamente seguros (como el Figura 8) que se aprietan bajo carga y no se aflojan solos. Sin embargo, DEBE dejarse suficiente 'cola' (tail): al menos 6 pulgadas (15 cm) para cuerdas y 3 pulgadas (8 cm) para webbing, después de que el nudo esté apretado.",
    },
    {
        question: "¿Cuál es la diferencia entre un 'Bight' y un 'Loop'?",
        answer: "Un 'Bight' (seno) se forma cuando la cuerda se dobla sobre sí misma en forma de U pero las partes NO se cruzan. Un 'Loop' (bucle o gaza) se forma cuando la cuerda se dobla y se cruza sobre sí misma.",
    },
    {
        question: "¿Por qué el 'Tensionless Hitch' tiene un 100% de eficiencia?",
        answer: "El amarre sin tensión (Tensionless hitch) se envuelve alrededor de un anclaje liso y grande (mínimo 4 pulgadas de diámetro). La fricción a lo largo de las vueltas absorbe toda la carga antes de que llegue al mosquetón o al nudo final. Como la cuerda principal no tiene nudos (dobleces cerrados) que soporten la carga principal, retiene el 100% de su resistencia original.",
    },
    {
        question: "¿Para qué sirve el 'Radium Release Hitch'?",
        answer: "El Radium Release Hitch (nudo de liberación de radio) se utiliza en los sistemas de aseguramiento (Tandem Prusik Belay) para permitir que el sistema se libere y transfiera la carga a otra cuerda de manera controlada, sin tener que levantar la carga para aflojar el sistema. Al estar hecho de cordín, también ayuda a absorber impacto si ocurre una carga de choque.",
    }
];

export const knotsQuestions: Question[] = [
    {
        question: "¿Cuál de las siguientes opciones describe mejor por qué los nudos reducen la resistencia de una cuerda?",
        options: [
            { letter: "a", text: "La fricción genera calor excesivo que derrite el núcleo" },
            { letter: "b", text: "Crean dobleces (bends) en las fibras, y un doblez más cerrado resulta en una mayor pérdida de resistencia" },
            { letter: "c", text: "El nudo estira la cuerda más allá de su elongación máxima" },
            { letter: "d", text: "Comprimen el sheath (funda), cortando los hilos internos" }
        ],
        correctAnswer: "b",
        explanation: "La resistencia a la tracción se mide en una cuerda recta. Cualquier doblez debilita la cuerda; por lo tanto, un nudo (que es una serie de dobleces) reduce la resistencia. Seleccionamos nudos con dobleces amplios para minimizar esta pérdida."
    },
    {
        question: "Si una cuerda tiene una resistencia a la tracción de 40 kN y se ata un nudo con una eficiencia del 75%, ¿a qué tensión fallará la cuerda anudada?",
        options: [
            { letter: "a", text: "40 kN" },
            { letter: "b", text: "30 kN" },
            { letter: "c", text: "25 kN" },
            { letter: "d", text: "10 kN" }
        ],
        correctAnswer: "b",
        explanation: "La eficiencia del nudo es el porcentaje de resistencia restante. 75% de 40 kN es 30 kN (40 x 0.75 = 30)."
    },
    {
        question: "¿Cuál es la medida mínima recomendada para la 'cola' (tail) sobrante después de apretar un nudo en una cuerda de rescate?",
        options: [
            { letter: "a", text: "3 pulgadas (8 cm)" },
            { letter: "b", text: "6 pulgadas (15 cm)" },
            { letter: "c", text: "10 pulgadas (25 cm)" },
            { letter: "d", text: "No importa siempre que haya un nudo de seguridad" }
        ],
        correctAnswer: "b",
        explanation: "Para nudos atados con cuerda de rescate, debe sobrar al menos 6 pulgadas (15 cm) de cola después de apretar bien el nudo (equivale aproximadamente a la longitud de la mano desde la muñeca hasta los dedos)."
    },
    {
        question: "¿Qué es un 'Bight' (seno) en terminología de nudos?",
        options: [
            { letter: "a", text: "Cuando la cuerda se dobla hacia atrás sobre sí misma cruzando la hebra" },
            { letter: "b", text: "Cuando la cuerda se dobla hacia atrás en forma de U sin cruzarse sobre sí misma" },
            { letter: "c", text: "La parte fija de la cuerda que va hacia el anclaje" },
            { letter: "d", text: "El extremo libre (working end) de la cuerda" }
        ],
        correctAnswer: "b",
        explanation: "Un 'Bight' se forma cuando la cuerda simplemente hace un doblez en U pero las partes no se cruzan. Si se cruzan, se forma un 'Loop'."
    },
    {
        question: "De acuerdo con el manual, ¿cuáles son los 4 nudos clave (The Four Key Knots) fundamentales para rescate?",
        options: [
            { letter: "a", text: "Figura 8, Pescador Doble, Nudo de Agua, Bowline" },
            { letter: "b", text: "Nudo de Agua, Vuelta Redonda y dos Cotes (Round Turn and Two Half Hitches), Prusik, Figura 8 en un bight" },
            { letter: "c", text: "Bowline, Munter Hitch, Clove Hitch, Prusik" },
            { letter: "d", text: "Nudo de Agua, Radium Release, Tensionless Hitch, Alpine Butterfly" }
        ],
        correctAnswer: "b",
        explanation: "El manual destaca como los cuatro nudos clave: Water Knot, Round Turn and Two Half Hitches, Prusik Hitch, y Figure 8 on a Bight."
    },
    {
        question: "¿Cuál es el nudo principal utilizado para unir los extremos de una cinta plana tubular (webbing)?",
        options: [
            { letter: "a", text: "Doble Pescador (Double Fisherman's Bend)" },
            { letter: "b", text: "Nudo Cuadrado (Square Knot)" },
            { letter: "c", text: "Figura 8 empalmado (Figure 8 Bend)" },
            { letter: "d", text: "Nudo de Agua (Water Knot o Ring Bend)" }
        ],
        correctAnswer: "d",
        explanation: "El Nudo de Agua (también conocido como overhand bend) es el nudo preferido y más seguro para unir dos extremos de webbing (cinta tubular)."
    },
    {
        question: "¿Qué nudo de fricción se usa típicamente para agarrar la cuerda principal, siendo fácil de atar, compacto y capaz de agarrar en ambas direcciones?",
        options: [
            { letter: "a", text: "Munter Hitch" },
            { letter: "b", text: "Clove Hitch (Ballestrinque)" },
            { letter: "c", text: "Prusik Hitch" },
            { letter: "d", text: "Tensionless Hitch" }
        ],
        correctAnswer: "c",
        explanation: "El Prusik hitch es el nudo de fricción preferido; se agarra firmemente a la cuerda cuando se tira de él en cualquier dirección."
    },
    {
        question: "¿Qué nudo se usa exclusivamente para cerrar el cordín formando un lazo continuo que se usará para hacer Prusiks?",
        options: [
            { letter: "a", text: "Figura 8 Follow-Through" },
            { letter: "b", text: "Double Fisherman's Bend (Pescador Doble)" },
            { letter: "c", text: "Water Knot (Nudo de Agua)" },
            { letter: "d", text: "Poacher's Knot" }
        ],
        correctAnswer: "b",
        explanation: "El Pescador Doble (Double Fisherman's Bend) es un nudo muy seguro, autobloqueante, ideal para cerrar cordines. Al usarlo para Prusiks, se deja una cola corta (2 in / 5 cm) para que no interfiera."
    },
    {
        question: "¿Cuál es la principal ventaja de un amarre 'Tensionless Hitch' (Amarre sin tensión)?",
        options: [
            { letter: "a", text: "Utiliza la menor cantidad de cuerda posible" },
            { letter: "b", text: "Conserva el 100% de la resistencia de la cuerda si se ata alrededor de un ancla suficientemente grande (mínimo 4 pulgadas)" },
            { letter: "c", text: "Puede atarse alrededor de bordes afilados sin protección de aristas" },
            { letter: "d", text: "Funciona perfectamente como un nudo de fricción deslizante" }
        ],
        correctAnswer: "b",
        explanation: "El Tensionless Hitch envuelve el anclaje cilíndrico varias veces; la fricción absorbe la carga, de modo que el nudo final (típicamente un ocho y un mosquetón) no recibe tensión. Esto mantiene la cuerda principal sin dobleces cargados, dándole un 100% de eficiencia."
    },
    {
        question: "¿Qué nudo de fricción puede usarse para un rapel de emergencia o para asegurar (belay) a una sola persona utilizando un mosquetón grande?",
        options: [
            { letter: "a", text: "Munter Hitch (Nudo Dinámico)" },
            { letter: "b", text: "Prusik Hitch" },
            { letter: "c", text: "Trucker's Hitch" },
            { letter: "d", text: "Clove Hitch" }
        ],
        correctAnswer: "a",
        explanation: "El Munter Hitch (nudo dinámico) es un nudo de fricción deslizante que permite controlar el descenso (rapel) o asegurar la caída de una carga de 1 persona."
    },
    {
        question: "¿Qué nudo es muy popular para hacer un lazo seguro y multidireccional en el medio de una cuerda (sin usar los extremos)?",
        options: [
            { letter: "a", text: "Figura 8 en un bight" },
            { letter: "b", text: "Alpine Butterfly (Mariposa Alpina)" },
            { letter: "c", text: "Bowline" },
            { letter: "d", text: "Poacher's Knot" }
        ],
        correctAnswer: "b",
        explanation: "El Alpine Butterfly (mariposa alpina) es ideal para hacer un lazo en el medio de la cuerda; toma tensión perfectamente en las tres direcciones (las dos hebras principales y el lazo)."
    },
    {
        question: "¿Qué precaución obligatoria debe tomarse SIEMPRE que se utilice un nudo 'Bowline' (As de Guía) tradicional en el rescate?",
        options: [
            { letter: "a", text: "Debe estar atado con cordín, nunca con cuerda principal" },
            { letter: "b", text: "Solo puede usarse para levantar cargas menores a 100 lbs" },
            { letter: "c", text: "SIEMPRE debe llevar un nudo de seguridad (safety knot)" },
            { letter: "d", text: "Debe peinarse para que el seno pase por detrás del extremo" }
        ],
        correctAnswer: "c",
        explanation: "El manual advierte que el Bowline no recibe bien la carga cíclica (puede voltearse/aflojarse si la carga no es constante), por lo que siempre requiere un nudo de seguridad."
    },
    {
        question: "¿Qué nudo/enganche se prefiere para configurar un anclaje de un sistema de aseguramiento (Belay) que permite soltar la carga bajo tensión (load-releasing hitch)?",
        options: [
            { letter: "a", text: "Mariner's Knot" },
            { letter: "b", text: "Radium Release Hitch" },
            { letter: "c", text: "Mule Tie-Off" },
            { letter: "d", text: "Double Fisherman's Bend" }
        ],
        correctAnswer: "b",
        explanation: "El Radium Release Hitch está comprobado por pruebas que es capaz de desatarse mejor bajo grandes cargas en comparación a otros nudos basados en webbing, y absorbe mejor la energía de una posible caída en el belay."
    },
    {
        question: "¿Con qué nudo se asegura y bloquea el Munter Hitch (nudo dinámico) para que el rescatista pueda soltar las manos?",
        options: [
            { letter: "a", text: "Mule Tie-Off (Cote de mula)" },
            { letter: "b", text: "Water Knot" },
            { letter: "c", text: "Overhand Knot" },
            { letter: "d", text: "Clove Hitch" }
        ],
        correctAnswer: "a",
        explanation: "El Mule Tie-Off se utiliza junto al Munter Hitch para bloquear el sistema. Su gran ventaja es que puede atarse y desatarse incluso mientras el Munter Hitch está soportando toda la carga."
    },
    {
        question: "Al atar un arnés improvisado tipo pañal (Hasty Harness), ¿qué longitud de cinta plana (webbing) se recomienda para empezar?",
        options: [
            { letter: "a", text: "10 pies (3 metros)" },
            { letter: "b", text: "15 pies (4.5 metros)" },
            { letter: "c", text: "20 pies (6 metros)" },
            { letter: "d", text: "30 pies (9 metros)" }
        ],
        correctAnswer: "c",
        explanation: "El manual recomienda usar unos 20 pies (aprox. 6 metros) de cinta tubular (webbing) de 1 pulgada para atar el Hasty Harness (Swiss seat) alrededor de las piernas y la cintura."
    }
];
