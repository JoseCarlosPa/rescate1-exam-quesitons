import { Question } from "../../../../question";

export const anchorSystemsFaqData = [
    {
        question: "¿Cuál es el principal problema de los sistemas de anclaje Load-Sharing (Reparto de Carga)?",
        answer: "Aunque la longitud de cada pata se ajusta para repartir el peso, las pruebas demuestran que rara vez la carga se reparte equitativamente. Además, si la dirección del tiro (pull) cambia durante el rescate, una sola pata del sistema absorberá casi toda la carga."
    },
    {
        question: "¿Qué limita la capacidad de un sistema Load-Distributing para auto-ecualizarse?",
        answer: "La fricción en el punto de recolección (normalmente el mosquetón) impide que las cintas se deslicen libremente, lo que reduce su capacidad teórica de 'auto-ecualizarse'. Por eso, se recomienda ajustar el sistema a mano antes de aplicarle la carga."
    },
    {
        question: "¿Qué es la regla de 'Un Pie' (One-foot rule) en los anclajes Load-Distributing?",
        answer: "Es una pauta de seguridad que sugiere mantener cada pata del anclaje por debajo de las 12 pulgadas (30 cm). Si un punto de anclaje falla, el mosquetón recolector caerá una distancia igual a la extensión de la pata. Mantenerlas cortas minimiza la caída y, por ende, el shock de carga en el sistema remanente."
    },
    {
        question: "¿Cómo se construye un sistema Load-Distributing de dos puntos rápido con cinta?",
        answer: "Se hace un lazo de cinta enganchado a ambos puntos, se tira de los dos tramos y se gira uno de ellos (media vuelta / twist) para formar una 'X' y un bucle pequeño central. El mosquetón se pasa por este bucle. El giro asegura que si falla un anclaje, el mosquetón no se deslice fuera del lazo y caiga."
    },
    {
        question: "¿Cuándo se usa un Pretensioned Back Tie (Anclaje trasero pretensado)?",
        answer: "Se utiliza cuando el anclaje que está en la mejor posición (focal point) es demasiado débil por sí solo (ej. un árbol pequeño o barandal). Se conecta este anclaje débil hacia un anclaje a prueba de bombas ('bombproof') ubicado detrás, y se pretensa fuertemente mediante un sistema 3:1."
    },
    {
        question: "¿Por qué un Contingency Anchor requiere el doble de cuerda?",
        answer: "Un anclaje de contingencia es básicamente un sistema de descenso atado. Si ocurre un problema, se destraba y se baja a la persona hasta el suelo. Para que esto funcione, la cuerda anclada debe ser suficientemente larga para cubrir toda la distancia restante de caída."
    }
];

export const anchorSystemsQuestions: Question[] = [
    {
        question: "¿Qué característica diferencia principalmente a un sistema Load-Distributing de un Load-Sharing?",
        options: [
            { letter: "a", text: "El Load-Sharing se ajusta automáticamente si cambia la dirección, el Distributing no." },
            { letter: "b", text: "El Load-Distributing está diseñado para deslizarse y auto-ajustarse a los cambios de dirección, mientras que el Load-Sharing tiene patas de longitud fija." },
            { letter: "c", text: "El Load-Sharing siempre garantiza un 50/50 de carga; el Distributing no." },
            { letter: "d", text: "El Load-Distributing solo se puede usar con 3 puntos de anclaje." }
        ],
        correctAnswer: "b",
        explanation: "Un sistema Load-Distributing usa una cinta continua o corredera para auto-ecualizarse teóricamente cuando el ángulo cambia. El Load-Sharing bloquea la longitud de cada pata con nudos (longitud fija)."
    },
    {
        question: "Al crear un sistema Load-Distributing, ¿qué factor real limita severamente su capacidad para distribuir equitativamente la carga si esta cambia de dirección?",
        options: [
            { letter: "a", text: "La elasticidad del nylon." },
            { letter: "b", text: "El grosor de los mosquetones." },
            { letter: "c", text: "La fricción." },
            { letter: "d", text: "El peso del paciente." }
        ],
        correctAnswer: "c",
        explanation: "La fricción en los mosquetones y la cinta impide que el sistema se deslice con suavidad bajo tensión. Por eso se recomienda siempre preajustarlos a mano."
    },
    {
        question: "En un sistema Load-Distributing, ¿cuál es el propósito de la regla de 'Un Pie' (One-foot rule) limitando las patas a 12 pulgadas o menos?",
        options: [
            { letter: "a", text: "Ahorrar cinta para otros usos." },
            { letter: "b", text: "Reducir la distancia de caída (shock load) en caso de que uno de los puntos de anclaje falle." },
            { letter: "c", text: "Garantizar un ángulo de 90 grados siempre." },
            { letter: "d", text: "Aumentar la resistencia a la fricción." }
        ],
        correctAnswer: "b",
        explanation: "Si un anclaje cede, el anillo de carga deslizará (caerá) a través de la holgura del sistema. Si las patas son cortas (menos de 1 pie), la caída (y la carga de choque resultante) se reduce drásticamente."
    },
    {
        question: "Para armar un anclaje Load-Distributing de 2 puntos, es VITAL torcer (twist) uno de los lados de la cinta formando una 'X' antes de colocar el mosquetón. ¿Por qué?",
        options: [
            { letter: "a", text: "Para aumentar el roce y generar un freno." },
            { letter: "b", text: "Porque evita que el mosquetón deslice demasiado rápido." },
            { letter: "c", text: "Para evitar que el mosquetón se salga completamente del lazo si uno de los anclajes falla." },
            { letter: "d", text: "Simplemente por estética y facilidad de inspección." }
        ],
        correctAnswer: "c",
        explanation: "Esa 'media vuelta' encierra el mosquetón en un bucle cerrado. Si no se hace y un anclaje falla, todo el bucle principal se abriría y el mosquetón de carga resbalaría cayendo al vacío."
    },
    {
        question: "Usted tiene un anclaje ideal justo en el borde, pero es un poste metálico delgado y dudoso (marginal). Detrás hay un camión pesado ('bombproof'). ¿Qué configuración debe usar?",
        options: [
            { letter: "a", text: "Contingency Anchor System." },
            { letter: "b", text: "Pretensioned Back Tie (Anclaje trasero pretensado)." },
            { letter: "c", text: "Load-Sharing de dos puntos." },
            { letter: "d", text: "Pickets con Spanish Windlass." }
        ],
        correctAnswer: "b",
        explanation: "El Pretensioned Back Tie convierte al poste débil en un punto focal direccionador, transfiriendo la mayor parte de la fuerza trasera de manera ajustada al camión."
    },
    {
        question: "¿Qué sistema mecánico se utiliza comúnmente para apretar un 'Pretensioned Back Tie' entre el anclaje débil delantero y el fuerte trasero?",
        options: [
            { letter: "a", text: "Spanish Windlass." },
            { letter: "b", text: "Polea direccional simple 1:1." },
            { letter: "c", text: "Un sistema 3:1 de ventaja mecánica con cuerda." },
            { letter: "d", text: "Sólo tirar con la mano y atar nudos de agua." }
        ],
        correctAnswer: "c",
        explanation: "El manual describe pasar la cuerda hacia el mosquetón trasero, volver al delantero y de regreso (ida y vuelta), creando un sistema en Z (3:1) que permite apretar fuertemente la línea antes de rematarla."
    },
    {
        question: "¿Qué es un Contingency Anchor System (Anclaje de contingencia)?",
        options: [
            { letter: "a", text: "Un anclaje que se rompe intencionalmente a altas cargas para amortiguar el impacto." },
            { letter: "b", text: "Un sistema que usa un descensor atado para permitir descender o recuperar la línea bajo tensión de forma inmediata." },
            { letter: "c", text: "Un anclaje secundario que se sujeta solo al arnés del rescatista." },
            { letter: "d", text: "Un sistema automático que bloquea la cuerda." }
        ],
        correctAnswer: "b",
        explanation: "El Contingency Anchor emplea equipos como un CLUTCH o un descensor en 8 bloqueado en el anclaje para bajar inmediatamente al rescatista si algo sale mal (muy usado en entornos tácticos o con novatos)."
    },
    {
        question: "Al configurar un sistema de Cambio de Dirección (Change-of-Direction) con poleas, ¿qué principio físico nos indica hacia dónde debe apuntar el anclaje de la polea para soportar bien el peso?",
        options: [
            { letter: "a", text: "El vector de fuerza debe ir a 90° exactos de la cuerda de entrada." },
            { letter: "b", text: "El vector de fuerza de la polea biseca (divide a la mitad) el ángulo formado por las cuerdas de entrada y salida." },
            { letter: "c", text: "La fuerza debe ir en dirección contraria a la gravedad." },
            { letter: "d", text: "La polea no transfiere fuerza al anclaje." }
        ],
        correctAnswer: "b",
        explanation: "El anclaje debe estar alineado con la bisectriz del ángulo que forman las cuerdas que entran y salen de la polea, ya que es allí hacia donde empujará la fuerza resultante."
    },
    {
        question: "¿Para qué sirve un 'Counterforce Anchor System' (Anclaje de contrafuerza)?",
        options: [
            { letter: "a", text: "Para duplicar la tensión en sistemas 2:1." },
            { letter: "b", text: "Para separar o alejar una camilla de una superficie en estructuras abiertas (como torres) modificando la dirección del tirón." },
            { letter: "c", text: "Para anclar vehículos pesados." },
            { letter: "d", text: "Para amortiguar una caída." }
        ],
        correctAnswer: "b",
        explanation: "El sistema de contrafuerza se ancla lateralmente para jalar (alejar) la carga de obstáculos o de la pared en espacios de estructuras abiertas o jaulas de escalera."
    },
    {
        question: "En un Load-Sharing anchor (anclaje de distribución fija), si el ángulo (dirección) de la cuerda de la carga se desvía levemente hacia la izquierda, ¿qué ocurrirá?",
        options: [
            { letter: "a", text: "El anclaje izquierdo tomará casi toda la carga y el derecho se aflojará." },
            { letter: "b", text: "Ambos anclajes seguirán soportando 50/50 de la carga." },
            { letter: "c", text: "El mosquetón recolector se deslizará para compensarlo." },
            { letter: "d", text: "El sistema fallará." }
        ],
        correctAnswer: "a",
        explanation: "Al tener longitudes fijas, cualquier desalineamiento direccional causa que el peso se cargue desproporcionadamente en la pata de cinta que quede más tensa, vaciando la carga de las otras."
    }
];
