import { Question } from "../../../../question";

export const pickOffFaqData = [
    {
        question: "¿Cuándo es apropiado realizar un Pick-Off en lugar de armar todo un sistema con camilla?",
        answer: "Cuando el sujeto está ileso o tiene heridas muy menores (ej. un escalador atascado), o cuando hay un peligro inminente (ej. fuego, ataque o un ataque cardíaco colgando) y la velocidad de evacuación inmediata es más importante que empaquetarlo en una camilla."
    },
    {
        question: "¿Por qué el 'Lowering Pick-Off' (bajado por el equipo) es superior al 'Rappel Pick-Off' (rapel individual)?",
        answer: "Porque en el Lowering Pick-Off, el equipo arriba controla el descenso (y el belay). Esto deja al rescatista con AMBAS manos libres para lidiar con el paciente tan pronto hace contacto, aumentando drásticamente la seguridad y velocidad de la maniobra."
    },
    {
        question: "¿Cómo transfiero el peso de la víctima a mi sistema sin cortar su cuerda?",
        answer: "NUNCA cortes la cuerda de la víctima (es un riesgo extremo de corte equivocado y genera 'shock load'). Debes levantar a la víctima ligeramente usando un polipasto pequeño (ej. AZTEK LT) o haciendo que tu equipo arriba haga un 'Vector Pull' para quitarle tensión a su equipo y así poder desengancharlo con seguridad."
    },
    {
        question: "¿Cómo debe ir posicionado el sujeto respecto al rescatista en un Pick-Off?",
        answer: "El sujeto debe quedar colgado de la cinta (Pick-Off Strap) ligeramente por encima de los muslos del rescatista. Así, el rescatista puede sujetarlo de lado o abrazarlo, manteniendo sus piernas libres para empujar la pared y controlar el descenso."
    },
    {
        question: "¿Qué precaución debo tener si hago un Rappel Pick-Off usando el CLUTCH?",
        answer: "El CLUTCH soporta cargas de 2 personas (hasta 272 kg / 600 lbs), pero la velocidad de descenso debe ser muy controlada, no excediendo 1.5 pies por segundo (0.5 metros por segundo), y está reservado para usuarios expertos."
    }
];

export const personPickOffQuestions: Question[] = [
    {
        question: "De las siguientes opciones, ¿en cuál escenario está indicado realizar un Pick-Off Rescue en lugar de una evacuación completa con camilla?",
        options: [
            { letter: "a", text: "Un paciente con sospecha de fractura de fémur y lesión espinal." },
            { letter: "b", text: "Un paciente politraumatizado al fondo de un barranco." },
            { letter: "c", text: "Un trabajador de ventanas ileso cuyo andamio colapsó y ahora cuelga de su arnés, o un oficial SWAT bajo fuego hostil." },
            { letter: "d", text: "Un paciente en paro cardíaco en el piso de un bosque plano." }
        ],
        correctAnswer: "c",
        explanation: "El Pick-Off es ideal para sujetos ilesos pero atascados, o para situaciones donde la necesidad de sacarlos INMEDIATAMENTE de un entorno letal supera los beneficios de inmovilizarlos lentamente."
    },
    {
        question: "Históricamente, el Pick-Off clásico se hacía en rapel por un solo rescatista. Hoy en día, muchos equipos prefieren el 'Lowering Pick-Off' (basado en equipo) porque:",
        options: [
            { letter: "a", text: "Usa menos cuerdas." },
            { letter: "b", text: "El rescatista es bajado por el equipo desde arriba, lo que significa que llega a la víctima con ambas manos completamente libres para asegurar y manejar al paciente de inmediato." },
            { letter: "c", text: "Es la única forma aprobada por la policía." },
            { letter: "d", text: "Es más emocionante para el rescatista." }
        ],
        correctAnswer: "b",
        explanation: "Si estás en rapel, una mano tuya siempre está ocupada controlando tu propio descenso. En un lowering, tú solo eres 'carga'; tienes total libertad de usar ambas manos para amarrar, tranquilizar y jalar a la víctima."
    },
    {
        question: "En un 'Team Based Lowering Pick-Off', ¿cómo conecta el rescatista a la víctima al sistema para que su peso no cuelgue de su propio arnés?",
        options: [
            { letter: "a", text: "Amarrándolo a sus botas." },
            { letter: "b", text: "Abrazándolo fuertemente durante la bajada." },
            { letter: "c", text: "Conectando una correa Pick-Off (Pick-Off Strap) desde el arnés de la víctima hacia Prusiks atados en la línea principal y de belay por encima del rescatista." },
            { letter: "d", text: "Usando cinta de ductos." }
        ],
        correctAnswer: "c",
        explanation: "Al conectar el Pick-Off Strap directamente a las cuerdas del sistema por encima de ti, el peso del paciente viaja por la cuerda hacia arriba, dejándote libre de esa carga física."
    },
    {
        question: "Al llegar a la víctima durante un Pick-Off por descenso (Lowering), la altura ideal para detenerte y empezar a conectar su arnés es:",
        options: [
            { letter: "a", text: "Con tu cabeza aproximadamente al nivel de los hombros del sujeto." },
            { letter: "b", text: "Tres metros arriba de la víctima." },
            { letter: "c", text: "Debajo de los pies de la víctima." },
            { letter: "d", text: "De espaldas a la víctima." }
        ],
        correctAnswer: "a",
        explanation: "Esta altura te da la palanca perfecta para manipular su torso, colocarle un arnés de víctima (tipo pañal) y conectar el Pick-Off strap a su cintura sin estirarte de más."
    },
    {
        question: "Una vez que ya conectaste el sistema a la víctima, pero ella sigue colgando de su propia cuerda atorada, ¿cómo transfieres su peso a tu sistema para poder desengancharla?",
        options: [
            { letter: "a", text: "Sacas tus tijeras de trauma y cortas su cuerda atorada." },
            { letter: "b", text: "Pides al equipo de arriba que haga un 'Vector Pull' (jalar la cuerda lateralmente) o usas un polipasto corto (AZTEK LT) para levantar un poco a la víctima, crear holgura en su sistema original y desengancharlo limpiamente." },
            { letter: "c", text: "Le pides que dé un salto." },
            { letter: "d", text: "Dejas que caiga y el belay lo detenga." }
        ],
        correctAnswer: "b",
        explanation: "Cortar cuerdas bajo tensión es tabú (puede generar shock loads o podrías cortar la cuerda incorrecta). Levantar (unweighting) a la víctima mecánicamente permite abrir sus mosquetones con seguridad."
    },
    {
        question: "¿Cuál es la posición colgante ideal para la víctima respecto a ti durante el viaje de descenso conjunto?",
        options: [
            { letter: "a", text: "Que cuelgue por encima de tu cabeza." },
            { letter: "b", text: "Que cuelgue a tu espalda como mochila." },
            { letter: "c", text: "Que cuelgue por delante, suspendida a la altura de tus muslos, permitiéndote maniobrar tus piernas contra la pared para separarlos a ambos de la roca." },
            { letter: "d", text: "Agarrada de tus tobillos." }
        ],
        correctAnswer: "c",
        explanation: "Tus piernas son tus 'amortiguadores' contra la pared. Si el sujeto cuelga muy alto, sus piernas chocarán con la pared en lugar de las tuyas. A la altura de tus muslos, tú conduces y lo proteges de raspaduras."
    },
    {
        question: "Estás forzado a hacer un 'Rappel Pick-Off' (bajando por tu cuenta, controlando tu propio descensor) con carga de 2 personas. Usando el CLUTCH, la restricción principal es:",
        options: [
            { letter: "a", text: "El CLUTCH solo soporta 1 persona." },
            { letter: "b", text: "El CLUTCH soporta la carga pesada, pero la velocidad de descenso debe ser controlada por un experto y NO exceder 1.5 pies por segundo (0.5 m/s) para no sobrecalentarlo." },
            { letter: "c", text: "Debes mojar el CLUTCH con agua fría constantemente." },
            { letter: "d", text: "No se requiere restricción, se usa igual que con 1 persona." }
        ],
        correctAnswer: "b",
        explanation: "El peso de dos personas genera el cuádruple de calor por fricción. Ir demasiado rápido puede quemar la cuerda internamente. Debe ser un descenso lento y deliberado."
    },
    {
        question: "Si debes realizar un Rappel Pick-Off, el manual recomienda encarecidamente utilizar:",
        options: [
            { letter: "a", text: "Cuerdas dinámicas para rebotar." },
            { letter: "b", text: "Un dispositivo de descenso de bloqueo automático (auto-locking) como el CLUTCH o el MPD, para que al soltar la mano, frene solo y tengas las dos manos libres para la víctima." },
            { letter: "c", text: "Un mosquetón simple (Munter Hitch) para mayor velocidad." },
            { letter: "d", text: "Guantes de carnaza." }
        ],
        correctAnswer: "b",
        explanation: "Usar un 'Ocho' tradicional requiere amarrarlo a mano cada vez que te detienes. Un dispositivo auto-bloqueante es infinitamente más seguro cuando tienes que manipular a una víctima en el aire."
    },
    {
        question: "En un rescate de torre (Tower Rescue), frecuentemente el trabajador está colgando de sus cortas eslingas de protección contra caídas. La herramienta ideal para levantar al trabajador y desengancharlo de la torre es:",
        options: [
            { letter: "a", text: "Una grúa automotriz." },
            { letter: "b", text: "Un polipasto compacto pre-ensamblado como el AZTEK LT, atado a tu descensor y a la víctima, dándote ventaja mecánica 4:1 o 5:1 en un paquete mínimo." },
            { letter: "c", text: "Pedirle que haga dominadas (pull-ups)." },
            { letter: "d", text: "Cortar el metal de la torre." }
        ],
        correctAnswer: "b",
        explanation: "El AZTEK es el estándar de la industria para levantar cargas pesadas (unweighting) en distancias muy cortas (como eslingas tensas) permitiéndote abrir los mosquetones del paciente."
    },
    {
        question: "¿Qué condición haría que la evacuación MÁS SEGURA y sencilla sea simplemente asegurar (Belay) a la víctima y dejar que escale o baje por sus propios medios?",
        options: [
            { letter: "a", text: "Víctima con fractura expuesta." },
            { letter: "b", text: "Víctima inconsciente." },
            { letter: "c", text: "Víctima ilesa (ej. escalador asustado o extraviado) que está en perfectas condiciones físicas pero simplemente necesita protección contra caídas para moverse." },
            { letter: "d", text: "Víctima con pánico ciego e inmovilidad histérica." }
        ],
        correctAnswer: "c",
        explanation: "Si el paciente puede moverse, no necesitas cargarlo. Al colocarle un arnés y asegurarlo por cuerda (Belay), transformas una compleja operación de descenso de carga pesada en una simple caminata protegida."
    }
];
