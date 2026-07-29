import { Question } from "../../../../question";

export const loweringSystemsFaqData = [
    {
        question: "¿Por qué el descensor Tipo 'Ocho' (Figure 8) ya no es común para sistemas de descenso con camilla?",
        answer: "Porque su capacidad de fricción y frenado es insuficiente para sostener cargas pesadas (camilla, paciente y rescatista). Además, produce demasiada torsión ('twist') en la cuerda que termina generando enredos severos."
    },
    {
        question: "¿Cuál es la velocidad máxima segura para descender cargas?",
        answer: "Para cargas de 30 a 200 kg (hasta 440 lbs), la velocidad se debe limitar por debajo de 2 m/s. Para cargas pesadas mayores a 200 kg, debe ser muy lento: por debajo de 0.5 m/s."
    },
    {
        question: "¿Cómo funciona el dispositivo '3D' de CMC para descensos?",
        answer: "Funciona similar a un micro-rack (rack de barras), pero incluye una barra central de bloqueo ('locking center bar'). Esto permite montarlo desde cualquier lado sin que las barras salten, admitiendo cuerdas desde 9.5 mm hasta 13 mm."
    },
    {
        question: "¿Por qué se forma la cuerda en una 'S' al usar el MPD para bajar (lowering)?",
        answer: "Al llevar el cabo de freno (running end) paralelo a la cuerda que soporta la carga (load end) pasando sobre la garganta en 'V', la cuerda hace una curva en 'S' dentro del MPD, lo cual maximiza la fricción de frenado y previene el desgaste del freno interno móvil."
    },
    {
        question: "¿Cómo se bloquea o asegura totalmente ('tie-off') un descensor 3D de CMC?",
        answer: "Cruzando la cuerda por encima del dispositivo y rematando con un nudo de media llave (Half-Hitch) alrededor del cuerno superior (horn). Para mayor seguridad, se puede cruzar al otro lado y hacer otra media llave."
    }
];

export const loweringSystemsQuestions: Question[] = [
    {
        question: "¿Qué recomienda el manual técnico para TODOS los sistemas de descenso (Lowering Systems), sin importar si incluyen o no una camilla?",
        options: [
            { letter: "a", text: "Usar siempre un nudo dinámico (Munter Hitch)." },
            { letter: "b", text: "Que todas las bajadas tengan un sistema de seguridad o respaldo (Belay)." },
            { letter: "c", text: "Usar cuerdas gemelas pasadas por un descensor Ocho." },
            { letter: "d", text: "Que el operador ancle el dispositivo a su propio arnés en lugar de a un anclaje fijo." }
        ],
        correctAnswer: "b",
        explanation: "La recomendación fundamental y absoluta del manual es que todo sistema de descenso cuente con un sistema independiente de aseguramiento (Belay) ante cualquier fallo."
    },
    {
        question: "Al utilizar un CLUTCH para un descenso, ¿cómo se añade más fricción si la carga es muy pesada?",
        options: [
            { letter: "a", text: "Apretando más el tornillo lateral." },
            { letter: "b", text: "Cruzando la cuerda por encima de la palanca." },
            { letter: "c", text: "Pasando el cabo de freno ('free end') por un mosquetón extra anclado al dispositivo o al anclaje." },
            { letter: "d", text: "Dando doble vuelta dentro de la leva." }
        ],
        correctAnswer: "c",
        explanation: "Para cargas pesadas, se debe redirigir la cuerda saliente a través de un mosquetón adicional, lo cual multiplica la fricción sin forzar ni sobrecalentar las piezas internas."
    },
    {
        question: "¿Cuál es el proceso correcto para iniciar el descenso de una carga usando el dispositivo MPD?",
        options: [
            { letter: "a", text: "Liberar la palanca y girarla completamente en sentido antihorario." },
            { letter: "b", text: "Desenganchar el Parking Brake (freno de parqueo), jalar hacia afuera la palanca (Release Handle) y rotarla suavemente en sentido antihorario mientras se controla la fricción en la V de frenado." },
            { letter: "c", text: "Jalar la palanca en sentido horario." },
            { letter: "d", text: "Apretar el nudo Prusik y soltar el MPD." }
        ],
        correctAnswer: "b",
        explanation: "El mecanismo de liberación requiere primero desactivar el seguro, luego jalar el mango hacia afuera, y finalmente girar (antihorario). El control principal de la bajada se sigue haciendo sosteniendo firme la cuerda hacia la garganta en 'V'."
    },
    {
        question: "En un Brake Bar Rack (Rack de Barras de Freno) estilo J-frame, ¿sobre qué lado del marco deben pivotar (girar para abrirse) las barras móviles?",
        options: [
            { letter: "a", text: "No importa, mientras estén intercaladas." },
            { letter: "b", text: "Sobre el lado CORTO (short side) del marco (frame)." },
            { letter: "c", text: "Sobre el lado LARGO (long side) del marco." },
            { letter: "d", text: "De forma cruzada; una al lado corto y la otra al lado largo." }
        ],
        correctAnswer: "c",
        explanation: "Para un funcionamiento seguro, todas las barras de fricción (excepto la superior u 'ojillo') deben colgar o pivotar sostenidas por el lado largo de la 'U' metálica, abriendo hacia el lado corto."
    },
    {
        question: "Cuando estás bajando una carga extremadamente pesada (más de 200 kg) utilizando el CLUTCH o el MPD, la velocidad de descenso NUNCA debería sobrepasar:",
        options: [
            { letter: "a", text: "3.5 m/s" },
            { letter: "b", text: "2.0 m/s" },
            { letter: "c", text: "1.0 m/s" },
            { letter: "d", text: "0.5 m/s" }
        ],
        correctAnswer: "d",
        explanation: "Las normas limitan estrictamente las velocidades para poder reaccionar. Cargas 'normales' (30 a 200kg) van hasta 2 m/s, pero para cargas que superan los 200kg (más de 440lbs), la velocidad debe restringirse a 0.5 m/s o menos."
    },
    {
        question: "Si el MPD está manejando una carga alta, ¿qué característica física ('hardware') tiene el aparato para añadir fricción extra?",
        options: [
            { letter: "a", text: "Una barra bloqueable." },
            { letter: "b", text: "El Secondary Friction Post (Poste Secundario de Fricción) o 'pico' frontal." },
            { letter: "c", text: "Un tornillo ajustador en la placa base." },
            { letter: "d", text: "Una polea auxiliar." }
        ],
        correctAnswer: "b",
        explanation: "Pasar la cuerda por encima del Poste Secundario de Fricción (el cuerno de metal que asoma al frente) genera una fricción máxima, recomendada para operaciones con cargas de rescate pesadas."
    },
    {
        question: "¿Qué hace que el descensor 3D de CMC se diferencie de los Racks convencionales a la hora de colocar ('montar') la cuerda?",
        options: [
            { letter: "a", text: "No tiene barras, usa poleas giratorias." },
            { letter: "b", text: "Permite usar un botón rojo para abrir la barra central 90° hacia arriba e introducir un bucle de cuerda, pudiendo cargarse desde cualquier lado." },
            { letter: "c", text: "Sólo se puede montar desconectándolo del arnés." },
            { letter: "d", text: "Su fricción es electrónica." }
        ],
        correctAnswer: "b",
        explanation: "El 3D tiene un 'locking center bar' que se desbloquea con un botón, gira hacia arriba, se ingresa la cuerda y luego se cierra, brindando seguridad y evitando que el dispositivo deba desarmarse."
    },
    {
        question: "En un dispositivo CLUTCH dejado desatendido, o cuando no se realizará un descenso por un buen rato, ¿cuál es la posición más segura para la palanca (Handle)?",
        options: [
            { letter: "a", text: "Release" },
            { letter: "b", text: "Standby" },
            { letter: "c", text: "Stop" },
            { letter: "d", text: "Neutral" }
        ],
        correctAnswer: "c",
        explanation: "Para inactividad extendida o seguridad extra, girar la palanca a la posición 'Stop' traba mecánicamente la cuerda y repliega la palanca para que no estorbe (ni se jale por accidente). También se recomienda asegurar ('tie-off') si se deja sin atención."
    },
    {
        question: "Una gran desventaja del Figure 8 (Ocho de rescate) cuando baja sistemas pesados, además de su falta de fricción, es:",
        options: [
            { letter: "a", text: "Se derrite con el calor." },
            { letter: "b", text: "Tuerce la cuerda agresivamente ('twist') provocando enredos antes de entrar al dispositivo." },
            { letter: "c", text: "Atora los mosquetones simétricos." },
            { letter: "d", text: "Rompe el alma de la cuerda." }
        ],
        correctAnswer: "b",
        explanation: "Por su diseño donde la cuerda entra y sale rotando sobre el metal tubular, el Ocho aplica una fuerte espiral a la cuerda, lo que bajo tensión resulta en enredos catastróficos."
    },
    {
        question: "Durante un descenso con MPD, además de rotar la manija, ¿cuál es la tarea física y fundamental de la mano del operador en la cuerda ('running end')?",
        options: [
            { letter: "a", text: "Empujar cuerda hacia adentro del dispositivo." },
            { letter: "b", text: "Sostenerla y jalarla de vuelta en paralelo ('S-shape') friccionando contra la muesca fija ('fixed brake V-groove')." },
            { letter: "c", text: "Sostenerla estirada a 90 grados hacia arriba." },
            { letter: "d", text: "Dejar que corra libremente." }
        ],
        correctAnswer: "b",
        explanation: "La manija de liberación quita el seguro de mordaza interno, pero es la mano del usuario, forzando la cuerda a hacer fricción contra la ranura en 'V', la que provee el verdadero control de la velocidad (descent rate)."
    }
];
