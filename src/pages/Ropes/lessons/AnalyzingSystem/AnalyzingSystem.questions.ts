import { Question } from "../../../../question";

export const analyzingSystemFaqData = [
    {
        question: "¿Qué es el 'Critical Point Analysis' (Análisis del Punto Crítico)?",
        answer: "Es una evaluación del sistema donde te preguntas si la falla de un componente específico (un punto crítico) causaría una falla catastrófica de todo el sistema. Si existe, se debe eliminar o respaldar con un sistema redundante."
    },
    {
        question: "¿En qué consiste la 'Prueba del Silbato' (Whistle Test)?",
        answer: "Es un análisis teórico donde te preguntas: ¿qué pasaría si todos los operadores soltaran la cuerda al mismo tiempo? (por ejemplo, si les ataca un enjambre de abejas). Si el sistema está bien diseñado y usa Ratchets o Belays automáticos, la carga NO debería caer."
    },
    {
        question: "¿Qué es el Factor de Seguridad de Sistema Estático (SSSF)?",
        answer: "El SSSF (Static System Safety Factor) es el resultado de dividir la resistencia del componente MÁS DÉBIL del sistema entre la fuerza estática total de la carga. Nos da una relación o margen de seguridad antes de que algo se rompa."
    },
    {
        question: "¿Qué nos enseña el Análisis de Pizarra Blanca (White Board Analysis)?",
        answer: "Nos enseña a calcular visualmente qué fuerzas actúan en cada componente de la cadena de rescate. Nos ayuda a descubrir cuál es el 'eslabón más débil' que define la resistencia global de todo el sistema."
    },
    {
        question: "¿Cómo afecta una polea de cambio de dirección (Change-of-direction pulley) a las fuerzas en el anclaje?",
        answer: "Una polea que cambia la dirección de la cuerda puede actuar como multiplicador de fuerza. Si el ángulo interior es muy cerrado (ej. 0°), puede transmitir hasta el DOBLE del peso de la carga tanto a la polea como al anclaje."
    }
];

export const analyzingSystemQuestions: Question[] = [
    {
        question: "¿Cuáles son los tres componentes principales para el Análisis de un Sistema de Rescate con Cuerdas (Rope Rescue System Analysis) según el manual?",
        options: [
            { letter: "a", text: "Prueba de tensión, Inspección visual y Pesaje de la carga." },
            { letter: "b", text: "Análisis del Punto Crítico (Critical Point Analysis), Prueba del Silbato (Whistle Test) y Análisis de Pizarra Blanca (White Board Analysis)." },
            { letter: "c", text: "Verificación de nudos, Análisis Dinámico y Revisión de Software." },
            { letter: "d", text: "Cálculo de Vectores, Prueba de Caída (Drop Test) y Certificación de Hardware." }
        ],
        correctAnswer: "b",
        explanation: "El manual define estas tres metodologías como la tríada fundamental para analizar la seguridad de un sistema de rescate."
    },
    {
        question: "Durante un 'Análisis del Punto Crítico', descubres que si un solo mosquetón se rompe, la camilla y el paciente caerían al vacío. ¿Cuál es la acción recomendada?",
        options: [
            { letter: "a", text: "Rezar para que no se rompa." },
            { letter: "b", text: "Cambiarlo por un mosquetón de aluminio de menor libraje." },
            { letter: "c", text: "Eliminar ese punto crítico añadiendo redundancia o respaldándolo (ej. con la línea de Belay o anclajes dobles)." },
            { letter: "d", text: "Bajar a la víctima más rápido." }
        ],
        correctAnswer: "c",
        explanation: "La regla del punto crítico es simple: ningún fallo de un solo punto ('single point of failure') debe resultar en un desenlace fatal; debe haber redundancia."
    },
    {
        question: "De acuerdo con el 'Whistle Test' (Prueba del Silbato), si usas un nudo Dinámico (Munter Hitch) puro como tu sistema de Belay y ocurre un accidente donde el belayer suelta la cuerda, ¿qué pasará?",
        options: [
            { letter: "a", text: "El sistema falla la prueba del silbato, porque el Munter Hitch requiere que el operador sostenga la cuerda para frenar, así que la carga caerá." },
            { letter: "b", text: "El sistema pasa la prueba porque el nudo se bloquea solo." },
            { letter: "c", text: "El sistema pasa si la cuerda es estática." },
            { letter: "d", text: "El Munter Hitch saltará a la posición de 'Stop'." }
        ],
        correctAnswer: "a",
        explanation: "El Whistle Test asume que todos sueltan la cuerda. Un nudo Munter sin tensión manual no frena, por lo que reprueba categóricamente el test. Por eso se usan Prusiks en tándem o MPDs/CLUTCHs."
    },
    {
        question: "¿Cuál es la regla fundamental sobre la resistencia general (SSSF) de un sistema de rescate de múltiples componentes?",
        options: [
            { letter: "a", text: "El sistema es tan fuerte como la suma de las fuerzas de todos los mosquetones." },
            { letter: "b", text: "El sistema es tan fuerte como la fuerza de ruptura de la cuerda principal." },
            { letter: "c", text: "La fuerza general (y el Factor de Seguridad) está determinada única y exclusivamente por el eslabón MÁS DÉBIL del sistema." },
            { letter: "d", text: "El anclaje siempre es el eslabón más fuerte." }
        ],
        correctAnswer: "c",
        explanation: "Un sistema es una cadena. No importa si tu cuerda soporta 40 kN y tu anclaje 50 kN, si usas un mosquetón dañado que soporta solo 10 kN, la resistencia de tu sistema es de 10 kN."
    },
    {
        question: "Si calculas que tu carga (camilla y paciente) ejerce una fuerza estática de 2 kN, y tu componente más débil en todo el sistema es un nudo en la cuerda que resiste 20 kN. ¿Cuál es el SSSF (Factor de Seguridad Estático)?",
        options: [
            { letter: "a", text: "20:1" },
            { letter: "b", text: "10:1" },
            { letter: "c", text: "40:1" },
            { letter: "d", text: "2:1" }
        ],
        correctAnswer: "b",
        explanation: "El Factor de Seguridad Estático se calcula dividiendo la resistencia mínima por la carga (20 kN / 2 kN = 10). Tienes un factor de 10 a 1."
    },
    {
        question: "Haciendo un Análisis de Pizarra (White Board Analysis), ¿qué efecto tiene hacerle un nudo (ej. Nudo de Ocho) a una cuerda clasificada en 40 kN?",
        options: [
            { letter: "a", text: "Aumenta la resistencia al doble." },
            { letter: "b", text: "No afecta su resistencia de ruptura." },
            { letter: "c", text: "Disminuye la resistencia de la cuerda en ese punto. El manual estima una pérdida de resistencia de aproximadamente el 25% para propósitos de cálculo de análisis de sistemas." },
            { letter: "d", text: "La cuerda se vuelve dinámica." }
        ],
        correctAnswer: "c",
        explanation: "Al hacer curvas cerradas como en un nudo de Ocho, las fibras exteriores de la cuerda se tensan desigualmente, reduciendo la capacidad total de carga de la cuerda alrededor de un 20% a 30%."
    },
    {
        question: "Al analizar una polea direccional fija ('Change-of-direction pulley') que está re-direccionando la cuerda 180° completos (ángulo interior de 0°), si la carga es de 2 kN, ¿cuánta fuerza recibe esa polea y su anclaje?",
        options: [
            { letter: "a", text: "1 kN (se divide el peso)" },
            { letter: "b", text: "2 kN" },
            { letter: "c", text: "4 kN" },
            { letter: "d", text: "0 kN" }
        ],
        correctAnswer: "c",
        explanation: "A un ángulo de 0° (una vuelta en 'U' perfecta), la polea direccional recibe el peso de la carga (2 kN) PLUS el esfuerzo del equipo jalando o sosteniendo la carga (otros 2 kN), totalizando el DOBLE del peso (4 kN)."
    },
    {
        question: "Según el texto, cuando calculas un 'Factor de Seguridad del Sistema Estático' (SSSF) en el campo en vez de un 'Factor Dinámico' (DSSF), ¿por qué se requiere que tu SSSF sea un número razonablemente alto (como 10:1)?",
        options: [
            { letter: "a", text: "Para cumplir con requerimientos de la aseguradora." },
            { letter: "b", text: "Porque el análisis estático ignora la energía destructiva de un impacto dinámico (shock load). Se necesita un margen extra de SSSF alto para amortiguar cualquier imprevisto dinámico." },
            { letter: "c", text: "Porque las cuerdas estáticas no se estiran." },
            { letter: "d", text: "Para evitar que la carga gire por el viento." }
        ],
        correctAnswer: "b",
        explanation: "Un cálculo estático es fácil (peso vs ruptura), pero las verdaderas fallas ocurren si algo da un tirón súbito (choque dinámico). Un margen estático de 10:1 suele dar suficiente 'colchón' para sobrevivir a un choque moderado."
    },
    {
        question: "Descubres que la cinta perimetral (webbing) tubular de 1 pulgada atada como anclaje (Wrap 1, Pull 1) es tu eslabón más débil (21 kN). ¿Cómo la modificas para que deje de ser el eslabón débil?",
        options: [
            { letter: "a", text: "Cambias a 'Wrap 2, Pull 1' (Múltiples envolturas redundantes) incrementando masivamente su resistencia a 43 kN." },
            { letter: "b", text: "Le echas agua para enfriarla." },
            { letter: "c", text: "Le haces un nudo dinámico en el medio." },
            { letter: "d", text: "Lo dejas igual, 21 kN es indestructible." }
        ],
        correctAnswer: "a",
        explanation: "Envolver la cinta múltiples veces sobre el anclaje antes de unirla duplica el material que soporta la carga y elimina la cinta como el eslabón más débil, transfiriendo ese punto crítico al mosquetón o al nudo de la cuerda."
    },
    {
        question: "Durante un 'Análisis del Punto Crítico', ¿por qué a veces el manual dice que se permite conscientemente dejar un punto crítico sin redundancia en el sistema?",
        options: [
            { letter: "a", text: "Por pereza de armar un segundo anclaje." },
            { letter: "b", text: "Porque a veces, añadir componentes redundantes en lugares hacinados (como en espeleología / cave rescue) incrementa el peligro de enredos, roce y fricción a un nivel de riesgo MAYOR que la pequeña probabilidad de fallo del equipo único." },
            { letter: "c", text: "Para ahorrar dinero en cuerdas." },
            { letter: "d", text: "Porque la ley de gravedad no aplica en barrancos cortos." }
        ],
        correctAnswer: "b",
        explanation: "El análisis debe sopesar riesgo vs beneficio. A veces, la complejidad extra de un Belay en un pozo apretado (causando caída de rocas) es más peligrosa que confiar en una técnica de cuerda simple impecablemente operada."
    }
];
