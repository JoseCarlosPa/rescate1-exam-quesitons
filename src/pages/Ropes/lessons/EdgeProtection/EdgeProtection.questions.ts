import { Question } from "../../../../question";

export const edgeProtectionFaqData = [
    {
        question: "¿Cuáles son los 4 objetivos principales de la protección de bordes?",
        answer: "1) Proteger la cuerda de abrasión y dobleces agudos. 2) Proteger la superficie (evitar desprendimientos de rocas o daños al edificio). 3) Reducir la fricción, lo que disminuye drásticamente el esfuerzo para subir la carga. 4) Mantener la cuerda limpia para que equipos como poleas y Prusiks funcionen correctamente."
    },
    {
        question: "¿Qué material recomienda CMC para los Edge Pads (Protectores de borde planos)?",
        answer: "Lona gruesa (Canvas). CMC no recomienda materiales de nylon puro ni plásticos blandos para estos pads simples, ya que pueden derretirse por el calor generado si la cuerda fricciona mucho sobre ellos."
    },
    {
        question: "¿Cuál es el principal peligro de usar Edge Rollers (rodillos de borde)?",
        answer: "La inestabilidad. Si la cuerda se desplaza hacia un lado del centro (muy común cuando la camilla llega arriba y los ángulos cambian), el rodillo puede voltearse (flip) de lado. Por eso, SIEMPRE deben anclarse para evitar que caigan y lastimen a alguien abajo, y es útil poner un pad debajo por si la cuerda se sale."
    },
    {
        question: "¿Qué es un Edge Guard (Protector de cuerda)?",
        answer: "A diferencia de un pad que va sobre la superficie, el Edge Guard se envuelve alrededor de la propia cuerda (usualmente cerrado con velcro). Se amarra a la cuerda con un cordín (Prusik) para poder deslizarlo o apartarlo a medida que el rescatista desciende."
    },
    {
        question: "¿Qué es un sistema Ultra-Pro?",
        answer: "Son protectores de borde hechos de un plástico espacial resbaladizo. Protegen la cuerda al mismo tiempo que reducen muchísimo la fricción. Su ventaja frente a los rodillos es que no tienden a volcarse y es mucho más fácil pasar la camilla por encima de ellos."
    }
];

export const edgeProtectionQuestions: Question[] = [
    {
        question: "Además de proteger la cuerda de cortes o abrasión, ¿cuál es otra razón CRÍTICA para mitigar la fricción del borde en un rescate vertical?",
        options: [
            { letter: "a", text: "Para evitar que la cuerda se estire más allá de su límite elástico." },
            { letter: "b", text: "Porque una alta fricción incrementa drásticamente la fuerza necesaria en el sistema de ventaja mecánica para subir la carga." },
            { letter: "c", text: "Para asegurar que la cuerda se mantenga totalmente limpia." },
            { letter: "d", text: "Para que el descensor no se caliente tanto." }
        ],
        correctAnswer: "b",
        explanation: "Superar la fricción en el borde requiere energía adicional enorme. Si no se reduce, se necesitará sumar más personas para jalar o aumentar la ventaja mecánica, reduciendo el margen de seguridad."
    },
    {
        question: "¿Qué material es el recomendado por CMC para la fabricación de 'Edge Pads' (Protectores tipo lona plana)?",
        options: [
            { letter: "a", text: "Plástico PVC ligero." },
            { letter: "b", text: "Nylon rip-stop 100%." },
            { letter: "c", text: "Canvas (Lona gruesa resistente)." },
            { letter: "d", text: "Neopreno para amortiguar el peso." }
        ],
        correctAnswer: "c",
        explanation: "CMC recomienda el uso de lona (canvas) gruesa. Ciertos nylons y plásticos corren el riesgo de derretirse por el calor extremo generado por el roce continuo de una cuerda en tensión."
    },
    {
        question: "Los 'Edge Guards' (o Rope guards) comerciales típicamente tienen un cierre de velcro y se colocan directamente alrededor de la cuerda. ¿Cómo se deben asegurar para que no se deslicen fuera de posición?",
        options: [
            { letter: "a", text: "Atornillándolos a la pared del edificio." },
            { letter: "b", text: "Usando pegamento o cinta adhesiva industrial." },
            { letter: "c", text: "Dejándolos sueltos, la fricción los mantiene en su lugar." },
            { letter: "d", text: "Atándolos con un trozo de cordín fijado a un Prusik, un nudo ballestrinque o un anclaje separado." }
        ],
        correctAnswer: "d",
        explanation: "Debe usarse un cordín largo atado al protector para anclarlo, idealmente conectado a la cuerda con un Prusik, permitiendo así aflojarlo y deslizarlo para hacer espacio a los descensores cuando la persona arranca el rapel."
    },
    {
        question: "Usted está usando un 'Edge Roller' metálico en el borde de un techo. ¿Qué paso de seguridad es absolutamente innegociable antes de cargarlo?",
        options: [
            { letter: "a", text: "Anclar el Edge Roller con cinta o cuerda para que no pueda caer al vacío." },
            { letter: "b", text: "Soldarlo o fijarlo al suelo usando taladro y pernos." },
            { letter: "c", text: "Engrasar los rodamientos." },
            { letter: "d", text: "Anclarlo usando clavos o estacas de tienda de campaña a través de los agujeros." }
        ],
        correctAnswer: "a",
        explanation: "Si la cuerda resbala, o el rodillo vuelca, el aparato de metal podría caer directamente sobre los rescatistas o el paciente. Siempre se debe atar el Edge Roller (ej. con cinta de 1 pulgada) a un anclaje superior."
    },
    {
        question: "En relación a los Edge Rollers en techos y barrancos, el manual menciona un problema común cuando la camilla se acerca mucho a la cima. ¿Cuál es?",
        options: [
            { letter: "a", text: "La cuerda principal y la de seguridad se frotan juntas." },
            { letter: "b", text: "El rodillo no aguanta el peso y se dobla." },
            { letter: "c", text: "El ángulo entre la línea principal y el belay aumenta, haciendo que la cuerda se mueva descentrada y el rodillo se vuelque (flip) de lado." },
            { letter: "d", text: "Los rescatistas resbalan al pisar el rodillo." }
        ],
        correctAnswer: "c",
        explanation: "Al subir la camilla y ensancharse los ángulos, las cuerdas tienden a moverse lateralmente fuera del centro del rodillo, lo que puede causar que todo el dispositivo se vuelque de costado."
    },
    {
        question: "¿Cuál es la principal ventaja de las almohadillas deslizantes como el sistema 'Ultra-Pro Edge Protectors' frente a los tradicionales Edge Rollers?",
        options: [
            { letter: "a", text: "Eliminan la fricción al 100%." },
            { letter: "b", text: "Son de perfil bajo, no son propensos a volcarse lateralmente y facilitan pasar la camilla sobre el borde." },
            { letter: "c", text: "Están fabricados de metal pesado para que el viento no los levante." },
            { letter: "d", text: "Son extremadamente baratos por estar hechos de tela canvas." }
        ],
        correctAnswer: "b",
        explanation: "Los Ultra-Pro (plástico resbaladizo especial) no levantan la cuerda pulgadas arriba del suelo, lo que los hace muy estables contra volcaduras y simplifica el paso de la camilla (edge transition) comparado con el obstáculo que supone un rodillo alto."
    },
    {
        question: "¿Cómo se llama al equipo que usa poleas y mástiles portátiles (o grúas) para mantener la cuerda completamente en el aire por encima del borde?",
        options: [
            { letter: "a", text: "High-Anchor Device (Anclajes Altos Portátiles o Artificiales)." },
            { letter: "b", text: "Ultra-Pro Edge." },
            { letter: "c", text: "Spanish Windlass." },
            { letter: "d", text: "Bombproof Edge Guard." }
        ],
        correctAnswer: "a",
        explanation: "Llevar la cuerda completamente lejos del borde usando dispositivos de anclaje alto portátiles o plumas (booms) en vehículos elimina totalmente el rozamiento en el borde."
    },
    {
        question: "Para evitar que la cuerda suelta rompa rocas, levante tierra suelta o dañe la pintura de un edificio (Proteger la Superficie), ¿qué tipo de protección básica es más útil?",
        options: [
            { letter: "a", text: "Un Edge Guard que cubre solo la cuerda de 3 pies." },
            { letter: "b", text: "Poleas dobles." },
            { letter: "c", text: "Un Edge Pad (lona/tarpaulin) ancho que cubra el borde y el suelo adyacente." },
            { letter: "d", text: "No es responsabilidad de los rescatistas proteger las superficies." }
        ],
        correctAnswer: "c",
        explanation: "Un pad o lona extendida protege el terreno suelto y previene la caída de piedras hacia abajo, protegiendo tanto la cuerda como la infraestructura / personas abajo."
    },
    {
        question: "Si durante un rescate de pared muy largo (Big Wall o cañón profundo) hay múltiples puntos de abrasión en la ruta, ¿cómo lo gestiona el equipo según el manual?",
        options: [
            { letter: "a", text: "Solo se protege el borde superior, el resto se ignora." },
            { letter: "b", text: "Se designa un 'Edge Protection Team' que desciende colocando y gestionando protección en cada punto crítico." },
            { letter: "c", text: "Se arrojan docenas de lonas y se confía en que caigan donde deben." },
            { letter: "d", text: "Se usa exclusivamente cable de acero para el descenso." }
        ],
        correctAnswer: "b",
        explanation: "En descensos largos y complejos, un grupo de rescate especializado bajará primero solo para instalar y gestionar múltiples protecciones de borde y facilitar el paso durante el rescate o evacuación."
    },
    {
        question: "Alguien sugiere anclar el 'Edge Roller' al piso de tierra usando clavos o estacas de carpa pasándolos por los agujeros del rodillo. ¿Por qué el manual desaconseja esto?",
        options: [
            { letter: "a", text: "Porque daña el rodillo." },
            { letter: "b", text: "Porque se tardaría mucho tiempo." },
            { letter: "c", text: "Porque no evitará que el rodillo se vuelque, y si lo hace, saldrá volando lanzando las estacas por el aire como proyectiles." },
            { letter: "d", text: "Porque viola las leyes de uso de suelo." }
        ],
        correctAnswer: "c",
        explanation: "Las estacas cortas no detendrán la enorme fuerza de palanca si la cuerda vuelca el rodillo, convirtiendo las estacas en un peligro extremo si salen volando bajo la tensión liberada. Se debe atar a un anclaje usando webbing."
    }
];
