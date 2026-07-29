import { Question } from "../../../../question";

export const knotPassFaqData = [
    {
        question: "¿Por qué podría haber un nudo en la mitad de nuestra cuerda que debamos pasar por el sistema?",
        answer: "Generalmente ocurre si unimos dos cuerdas para ganar longitud, o si hubo que hacer un 'Nudo Mariposa Alpino' (Alpine Butterfly) para aislar un segmento dañado o cortado de la cuerda en medio de la operación."
    },
    {
        question: "¿Qué es el método 'Dog and Tails'?",
        answer: "Es el método más sencillo para pasar un nudo durante un descenso. Se amarra un cordín de 8mm (de 15 pies) al anclaje y luego se envuelve trenzándolo unas 10 veces (crisscross) sobre la cuerda principal. Sujeta la cuerda bajo tensión para que podamos desarmar el dispositivo y pasar el nudo."
    },
    {
        question: "¿Cómo simplifica el sistema Twin-Tension el paso de nudos?",
        answer: "Dado que ambas cuerdas (Twin-Tension) manejan carga, simplemente se transfiere el 100% del peso temporalmente a una de las cuerdas, dejando la otra libre de tensión para poder sacarla de su CLUTCH/MPD, saltar el nudo, volver a armarla y re-equilibrar tensiones."
    },
    {
        question: "¿Qué ocurre con el CLUTCH o MPD al prepararse para pasar el nudo durante un Descenso?",
        answer: "Se debe detener el descenso cuando el nudo quede a unas 18 pulgadas (0.5m) del dispositivo, luego la manivela del CLUTCH/MPD se gira a la posición 'Stop' para que asuma la carga mientras armamos el anclaje temporal (Piggyback o Dog and Tails)."
    },
    {
        question: "¿A qué distancia del dispositivo se recomienda detenerse para hacer un paso de nudo seguro?",
        answer: "Aproximadamente a 18 pulgadas (0.5 metros) de distancia del dispositivo. En Racks de barras (Brake Bar Racks) puede ser necesario dejar esa distancia para tener cuerda suficiente para hacer el bloqueo (tie-off) seguro."
    }
];

export const knotPassQuestions: Question[] = [
    {
        question: "¿Cuál es el principio mecánico básico detrás de cualquier método para 'Pasar un Nudo' (Knot Pass) en un sistema de descenso o izado?",
        options: [
            { letter: "a", text: "Empujar el nudo a la fuerza por la garganta del dispositivo." },
            { letter: "b", text: "Transferir temporalmente la carga de la cuerda principal a un sistema auxiliar, desarmar la cuerda del dispositivo, rearmarla del otro lado del nudo, y devolver el peso al dispositivo principal." },
            { letter: "c", text: "Desatar el nudo, pasar la cuerda por el dispositivo, y volver a atarlo rápidamente." },
            { letter: "d", text: "Cortar la cuerda." }
        ],
        correctAnswer: "b",
        explanation: "La única manera segura de pasar un nudo grueso por un aparato que no lo admite, es transferir la tensión a otra cosa (como un Dog and Tails, Piggyback, o Twin-tension), liberar el dispositivo, y reinstalarlo pasada la obstrucción."
    },
    {
        question: "En el método 'Dog and Tails' para un descenso (Lowering), ¿qué material específico se necesita y cuántas veces se debe cruzar la cuerda?",
        options: [
            { letter: "a", text: "Un cordín de 8mm; debe cruzarse en forma de X (crisscross) al menos 10 veces, rematando con un nudo plano (Square knot)." },
            { letter: "b", text: "Una cinta tubular; debe atarse un nudo Prusik." },
            { letter: "c", text: "Un mosquetón de acero; dar 5 vueltas en forma de 8." },
            { letter: "d", text: "Cable de acero; 2 vueltas." }
        ],
        correctAnswer: "a",
        explanation: "El cordín de 8mm tejido unas 10 veces y rematado con un nudo plano proporciona la fricción ideal para agarrar la cuerda fuertemente ('Chinese finger trap style') y luego es fácil de aflojar."
    },
    {
        question: "Al utilizar un Sistema de Ventaja Mecánica en Piggyback para ayudar a pasar un nudo en un DESCENSO, ¿qué se hace después de enganchar el Piggyback a la cuerda con un Prusik?",
        options: [
            { letter: "a", text: "Se levanta el paciente." },
            { letter: "b", text: "Se gira el dispositivo principal a 'Release' y se baja suavemente para que el Piggyback absorba toda la tensión." },
            { letter: "c", text: "Se corta el Prusik." },
            { letter: "d", text: "Se desengancha el anclaje." }
        ],
        correctAnswer: "b",
        explanation: "Al aflojar el sistema principal (CLUTCH/MPD), la tensión viaja por la cuerda hasta estrellarse en el Prusik del Piggyback. Una vez que este tiene la tensión total, la cuerda principal queda floja en el dispositivo."
    },
    {
        question: "En un sistema Twin-Tension que está BAJANDO a una víctima, ¿qué requisito previo de diseño facilita el paso de nudos en comparación con un Main/Belay tradicional?",
        options: [
            { letter: "a", text: "No tienen nudos." },
            { letter: "b", text: "Ambas cuerdas tienen dispositivos idénticos y soportan carga; por lo que el peso total se puede volcar temporalmente al 100% sobre una de las cuerdas, dejando la otra floja para pasar el nudo." },
            { letter: "c", text: "Que las cuerdas son más delgadas." },
            { letter: "d", text: "Que ambos dispositivos se abren por la mitad sin desarmarse." }
        ],
        correctAnswer: "b",
        explanation: "En TTRS, al estar ambas cuerdas tensionadas (50/50), basta con detener el descenso en la cuerda que tiene el nudo y seguir bajando 10 cm más con la otra cuerda. El peso se transfiere al 100% a la cuerda sana, permitiendo abrir el otro CLUTCH."
    },
    {
        question: "Si estás IZANDO (Raising) y notas que el nudo en la cuerda está a unos 5 pies (1.5 m) debajo del CLUTCH, decides usar el método de 'Figura de 8' (Twin-Tension con Loop). ¿Cuál es el paso correcto?",
        options: [
            { letter: "a", text: "Soltar toda la carga." },
            { letter: "b", text: "Jalar cuerda de sobra de tu sistema 3:1, amarrar un lazo en Figura 8 en esa holgura, mosquetonearlo al anclaje, e izar con la OTRA cuerda hasta que la de figura 8 afloje el CLUTCH." },
            { letter: "c", text: "Amarrar el nudo al rescatista." },
            { letter: "d", text: "Hacer rapel hasta el nudo." }
        ],
        correctAnswer: "b",
        explanation: "Al anclar físicamente un nudo tipo bucle en la cuerda principal hacia el anclaje, obligas a que ese punto soporte la tensión cuando el otro sistema levante un poco más la camilla, creando holgura para el dispositivo principal."
    },
    {
        question: "Después de haber transferido el peso al sistema 'Dog and Tails' y haber cruzado el nudo al otro lado del dispositivo CLUTCH, ¿cómo logras que la tensión regrese al CLUTCH suavemente?",
        options: [
            { letter: "a", text: "Cortando el cordín con un cuchillo." },
            { letter: "b", text: "Agarrando el tejido 'Dog and Tails' por el lado que mira hacia la carga y trabajando ('milking') el tejido empujándolo lentamente hacia el anclaje." },
            { letter: "c", text: "Desatando el nudo plano rápidamente." },
            { letter: "d", text: "Aflojando el CLUTCH." }
        ],
        correctAnswer: "b",
        explanation: "Para devolver la tensión, se desliza ('milking' o muñequeo) el tejido de cordín por encima de la cuerda hacia atrás (hacia el anclaje). Esto afloja gradualmente su mordida sobre la cuerda principal, devolviendo el peso al CLUTCH."
    },
    {
        question: "Al utilizar un Rack de barras para el paso del nudo, el manual recomienda detenerse con el nudo a 18 pulgadas (0.5m) arriba del dispositivo en descenso. ¿Por qué 18 pulgadas?",
        options: [
            { letter: "a", text: "Porque la normativa ASTM lo dice." },
            { letter: "b", text: "Para asegurar suficiente longitud de cuerda libre por debajo del nudo para poder hacer el bloqueo de seguridad ('Tie-off') del Rack de Barras con comodidad y espacio." },
            { letter: "c", text: "Porque el nudo se deshace a esa distancia." },
            { letter: "d", text: "Para que no estorbe visualmente." }
        ],
        correctAnswer: "b",
        explanation: "Un Rack de barras requiere cruzar la cuerda por arriba y amarrar medias llaves para bloquearse seguro; para hacer este amarre necesitas al menos ese medio metro de cuerda despejada entre el nudo y el Rack."
    },
    {
        question: "Durante un paso de nudo IZANDO (Raising) con el método de Piggyback, si ya anclaste el Piggyback y su Prusik a la cuerda por DEBAJO del CLUTCH, ¿qué debes hacer con el Piggyback para transferirle el peso?",
        options: [
            { letter: "a", text: "Soltarlo totalmente." },
            { letter: "b", text: "Jalar y tensionar el sistema Piggyback ('Raise con Piggyback') hasta que la carga suba un poco, superando al CLUTCH, logrando que el tramo del CLUTCH quede sin tensión." },
            { letter: "c", text: "Empujarlo hacia abajo." },
            { letter: "d", text: "Bajarlo un metro." }
        ],
        correctAnswer: "b",
        explanation: "Al levantar la camilla un par de centímetros extras utilizando la fuerza del M/A del Piggyback auxiliar, la cuerda entre el Piggyback y el CLUTCH (donde está el nudo a pasar) quedará completamente floja."
    },
    {
        question: "Al usar el método 'Lowering Piggyback' (un segundo dispositivo de descenso tipo CLUTCH/MPD paralelo) para pasar el nudo en bajada, luego de transferir la tensión al segundo dispositivo y pasar el nudo en el primero, ¿cómo se regresa la carga?",
        options: [
            { letter: "a", text: "Se rompe el Prusik." },
            { letter: "b", text: "Usando el dispositivo secundario (Piggyback) en modo descenso, se baja la cuerda lentamente hasta que el CLUTCH principal original vuelva a tensarse y retome la carga." },
            { letter: "c", text: "Se saca la cuerda a la fuerza." },
            { letter: "d", text: "Se jala la camilla hacia arriba." }
        ],
        correctAnswer: "b",
        explanation: "El segundo CLUTCH (el Piggyback anclado temporalmente al Prusik) actúa como un descensor provisional. Al darle 'bajar' a ese dispositivo, le regresa el peso al CLUTCH primario."
    },
    {
        question: "¿Qué ventaja logística tiene usar equipos como el 'AZTEK' (Mini-sistemas 4:1 o 5:1 pre-ensamblados) en la técnica de Mechanical Advantage Piggyback para paso de nudos?",
        options: [
            { letter: "a", text: "Funcionan sin anclajes." },
            { letter: "b", text: "Son auto-contenidos, rápidos de anclar mediante su Prusik incluido, y muy útiles tanto para pasar nudos subiendo como bajando sin requerir poleas sueltas grandes." },
            { letter: "c", text: "Tienen motores integrados." },
            { letter: "d", text: "Cortan los nudos automáticamente." }
        ],
        correctAnswer: "b",
        explanation: "Sistemas como el AZTEK ahorran el tiempo valioso de estar armando complejos Z-Rigs con piezas sueltas para un paso de nudo temporal; simplemente se saca del bolso, se amarra el cordín y se jala."
    }
];
