import { Question } from "../../../../question";

export const highAngleFaqData = [
    {
        question: "¿Qué define técnicamente una evacuación como 'High Angle' (Alto Ángulo)?",
        answer: "Es cualquier terreno tan empinado que el peso de la camilla y sus cuidadores (tenders) es soportado total o principalmente por el sistema de cuerdas, no por el suelo."
    },
    {
        question: "¿Por qué el 'Tender' (cuidador de la camilla) no va amarrado rígidamente a la camilla?",
        answer: "El Tender va atado a una 'Línea de Tender' (Tender Line) usando bloqueadores mecánicos (ascenders) o un mini-polipasto (AZTEK LT). Esto le permite deslizarse hacia arriba o abajo independientemente para esquivar salientes, revisar al paciente o ayudar a pasar el borde."
    },
    {
        question: "¿Cuál es la táctica recomendada por el manual para pasar una camilla pesada sobre un borde de 90 grados?",
        answer: "Poner a dos 'Edgemen' (hombres de borde) en cuerdas de rapel separadas para que asistan bajando físicamente la camilla sobre el borde. Luego, el Tender (que estaba esperando abajo o arriba) se coloca en posición para el descenso."
    },
    {
        question: "¿Por qué se evita usar múltiples 'Tenders' colgando de la misma camilla en un rescate vertical?",
        answer: "Cada Tender adicional suma más de 100 kilos al sistema, incrementando masivamente la fricción y el esfuerzo físico requerido por el equipo de tracción (haul team). Solo se justifica si se requiere soporte médico constante avanzado (ej. RCP o vía aérea inestable)."
    },
    {
        question: "¿Qué se hace si el paciente vomita mientras cuelga inmovilizado en la camilla vertical?",
        answer: "Es vital llevar un succionador portátil (ej. V-VAC). Si no hay uno, el paciente tendría que haber sido empaquetado en posición recumbente lateral (de lado), sacrificando algo de inmovilización espinal a cambio de proteger su vía aérea (la vida siempre gana sobre la columna)."
    }
];

export const highAngleEvacuationsQuestions: Question[] = [
    {
        question: "¿Cuál es la característica principal que diferencia una evacuación de Alto Ángulo (High Angle) de una de Bajo Ángulo (Low Angle)?",
        options: [
            { letter: "a", text: "El uso de cuerdas sintéticas en lugar de acero." },
            { letter: "b", text: "En el alto ángulo, el peso de la camilla y el rescatista es soportado principalmente por el sistema de cuerdas; en el bajo ángulo, el peso recae principalmente sobre el terreno." },
            { letter: "c", text: "El alto ángulo solo se hace de noche." },
            { letter: "d", text: "En el alto ángulo nunca se usa camilla." }
        ],
        correctAnswer: "b",
        explanation: "La distinción no es por un grado de inclinación específico, sino por quién carga el peso. Si sueltas la camilla y se desliza o cae colgando de la cuerda, estás en Alto Ángulo."
    },
    {
        question: "Al configurar la conexión del cuidador (Litter Tender) a la camilla en un rescate de Alto Ángulo, ¿qué método permite la mayor movilidad y seguridad?",
        options: [
            { letter: "a", text: "Amarrarse con un nudo fijo a las barandillas de la camilla." },
            { letter: "b", text: "Usar un sistema pre-ensamblado de restricción rígido." },
            { letter: "c", text: "Conectar su arnés a una 'Línea de Tender' (Tender Line) usando bloqueadores (ascenders) o un polipasto AZTEK LT, permitiéndole subir y bajar a voluntad respecto a la camilla." },
            { letter: "d", text: "Ir sentado sobre el pecho del paciente." }
        ],
        correctAnswer: "c",
        explanation: "Un rescatista pegado rígidamente a la camilla chocará contra salientes y no podrá posicionarse óptimamente para pasar bordes. La movilidad vertical independiente es clave."
    },
    {
        question: "El manual recomienda usar dos mosquetones (separados o redundantes) para conectar las líneas principales (Main) y de seguridad (Belay) a la araña de la camilla (Litter Harness) porque:",
        options: [
            { letter: "a", text: "Hace que el sistema se vea más profesional." },
            { letter: "b", text: "Ayuda a que las cuerdas giren." },
            { letter: "c", text: "Facilita desconectar una de las líneas mientras la otra sigue cargada si hay algún problema o transición, además de proveer redundancia si un mosquetón falla." },
            { letter: "d", text: "Aumenta la fricción aerodinámica." }
        ],
        correctAnswer: "c",
        explanation: "Tener la Main Line y el Belay colgados del MISMO mosquetón crea un punto único de fallo (single point of failure) y un enredo terrible si necesitas hacer ajustes bajo tensión."
    },
    {
        question: "Al pasar una camilla sobre un borde (edge) complicado desde el techo hacia el vacío, una técnica sumamente eficiente y segura descrita en el manual es:",
        options: [
            { letter: "a", text: "Empujar la camilla con los pies y esperar que no voltee." },
            { letter: "b", text: "Asignar a dos 'Edgemen' (Hombres de Borde) anclados en sus propias cuerdas de rapel para que guíen físicamente la camilla sobre el borde, mientras el Tender se posiciona después." },
            { letter: "c", text: "Cubrir el borde con grasa." },
            { letter: "d", text: "Dejar caer la camilla un metro de golpe para saltar el borde." }
        ],
        correctAnswer: "b",
        explanation: "Tratar de que un solo Tender jale y manipule la camilla contra la fricción del borde y la tensión de las cuerdas es agotador y peligroso. Dos Edgemen extra hacen el trabajo suave y estable."
    },
    {
        question: "En un rescate en pozo estrecho, chimenea o grieta vertical (crevasse) donde la camilla tradicional horizontal no entra, la camilla se debe colgar verticalmente. ¿Qué desventaja importante tiene esto?",
        options: [
            { letter: "a", text: "Se ve menos heroico." },
            { letter: "b", text: "El paciente ya no estará acostado, sino COLGANDO. El peso de su cuerpo recaerá totalmente sobre su arnés pélvico interno, lo cual es muy incómodo y agrava lesiones pélvicas o de piernas." },
            { letter: "c", text: "Las cuerdas se rompen." },
            { letter: "d", text: "La camilla levita." }
        ],
        correctAnswer: "b",
        explanation: "En un 'Inline Litter' (camilla vertical), el paciente está esencialmente colgado de su arnés interno. Si tiene traumas en extremidades inferiores, el dolor será inmenso."
    },
    {
        question: "Al añadir a un segundo cuidador (Tender) colgando junto a la camilla en un rescate vertical, ¿qué consecuencia directa sufre todo el sistema?",
        options: [
            { letter: "a", text: "Sube la moral del paciente." },
            { letter: "b", text: "Disminuye la fricción." },
            { letter: "c", text: "La carga total soportada por los anclajes y tirada por el equipo de tracción (Haul Team) se incrementa en aproximadamente un 50% (más de 100 kg), volviendo la operación mucho más pesada y lenta." },
            { letter: "d", text: "La camilla vuela con el viento." }
        ],
        correctAnswer: "c",
        explanation: "Un rescatista con equipo pesado pesa fácilmente 100 kg. Añadir a otro solo para que 'haga compañía' destruye la eficiencia mecánica del Haul Team arriba. Solo se justifica por emergencias médicas."
    },
    {
        question: "Si el paciente está empaquetado rígidamente en la camilla vertical (supino) para proteger su espina dorsal, y repentinamente vomita o sus vías respiratorias colapsan, ¿cómo se protege su vida según el manual?",
        options: [
            { letter: "a", text: "Dándole reanimación boca a boca." },
            { letter: "b", text: "Usando un succionador portátil (V-VAC). Si no hay uno disponible, la prioridad de Vía Aérea gana sobre la columna: el paciente debió ser empaquetado de lado (recumbente lateral) desde el principio." },
            { letter: "c", text: "Girando la cuerda rápido." },
            { letter: "d", text: "Sacudiendo la camilla." }
        ],
        correctAnswer: "b",
        explanation: "Un paciente inmovilizado boca arriba que vomita se ahogará con sus propios fluidos en segundos. Sin equipo de succión en la camilla, inmovilizarlo de lado es la única defensa."
    },
    {
        question: "La escuela CMC y la ITRA hacen una fuerte recomendación de seguridad para los cuidadores de camilla (Litter Tenders) respecto a su conexión:",
        options: [
            { letter: "a", text: "Usar siempre cascos rojos." },
            { letter: "b", text: "Deben contar SIEMPRE con una línea de seguridad (Belay) independiente al Main Line. El hecho de estar anclados a dos puntos diferentes de la misma Tender Line NO constituye un Belay independiente." },
            { letter: "c", text: "Ir siempre por encima de la camilla." },
            { letter: "d", text: "Bajar con los ojos cerrados." }
        ],
        correctAnswer: "b",
        explanation: "La redundancia real significa que si el cable principal falla por fricción o corte en el borde, hay un segundo cable (Belay) totalmente independiente que atrapará al Tender y al Paciente."
    },
    {
        question: "Para que un Tender pueda moverse fácilmente hacia ARRIBA (alejarse de la camilla) usando la Línea de Tender (Tender Line) equipada con bloqueadores (ascenders), la técnica recomendada es:",
        options: [
            { letter: "a", text: "Usar pura fuerza de brazos." },
            { letter: "b", text: "Tener un segundo bloqueador por encima con un pedal (etrier). Se pone de pie en el pedal para liberar peso, y desliza su bloqueador de arnés hacia arriba." },
            { letter: "c", text: "Pisar la cara del paciente." },
            { letter: "d", text: "Pedir que lo icen con grúa." }
        ],
        correctAnswer: "b",
        explanation: "Las maniobras de cuerda en una Tender Line son idénticas a las maniobras de 'Ascenso' por cuerdas fijas (Capítulo 22). Se usa la fuerza de las piernas con un pedal para avanzar."
    },
    {
        question: "¿Cuál es un beneficio táctico de usar un trípode (Arizona Vortex) configurado como direccional alto (High Directional) en el borde de un acantilado?",
        options: [
            { letter: "a", text: "Sirve de sombrilla." },
            { letter: "b", text: "Eleva el punto de tracción de las cuerdas, permitiendo que la camilla libre fácilmente la fricción del borde (edge transition) sin rasparse y sin requerir tanto esfuerzo de los Edgemen." },
            { letter: "c", text: "Se ve imponente." },
            { letter: "d", text: "Aumenta la fuerza de gravedad." }
        ],
        correctAnswer: "b",
        explanation: "Las transiciones de borde (pasar de pared vertical a piso plano horizontal) son el punto más duro de un rescate. Un direccional alto tira de la camilla hacia arriba y adentro, haciéndola flotar sobre el borde."
    }
];
