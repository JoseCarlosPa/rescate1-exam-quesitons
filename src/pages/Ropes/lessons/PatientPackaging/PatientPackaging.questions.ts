import { Question } from "../../../../question";

export const patientPackagingFaqData = [
    {
        question: "¿Por qué no se recomienda usar camillas plásticas sin marco metálico para rescate con cuerdas?",
        answer: "Las camillas plásticas de tipo 'solo riel superior' o sin chasis metálico completo no están diseñadas ni probadas para resistir las fuerzas de torsión, flexión y cargas laterales extremas que ocurren durante una evacuación técnica difícil. El marco metálico proporciona la rigidez estructural necesaria."
    },
    {
        question: "¿Cuál es la función del arnés pélvico (Pelvic Harness) dentro de la camilla?",
        answer: "Su función es prevenir el movimiento del paciente hacia los extremos de la camilla (deslizamiento) cuando esta se inclina. La intención NO es suspender al paciente en el arnés pélvico, sino mantenerlo posicionado de forma segura."
    },
    {
        question: "¿Por qué se desaconseja atar las manos del paciente al principio del empaquetamiento?",
        answer: "Tener las manos atadas o inmovilizadas rápidamente puede causar severa claustrofobia y ansiedad en el paciente. Se recomienda dejar este paso para el último momento justo antes de comenzar el movimiento, e idealmente proveer un cordín para que el paciente pueda agarrarlo y sentir algo de control."
    },
    {
        question: "¿Qué es el 'Litter Shield' y qué ventajas tiene sobre un casco?",
        answer: "Es un escudo protector transparente que se fija a la cabecera de la camilla. A diferencia de un casco (que es incómodo acostado y deja la cara expuesta), el Litter Shield protege toda la cabeza y el rostro de caída de rocas, ramas, lluvia y rotor wash de helicópteros, permitiendo a la vez que el paramédico pueda ver la cara del paciente."
    },
    {
        question: "¿Cuándo es ventajoso usar una camilla Semi-rígida tipo Sked®?",
        answer: "Es ideal para rescates en espacios confinados, arrastres (drags), tubos o pozos angostos, ya que se enrolla fuertemente alrededor del paciente tomando un perfil muy delgado. Sin embargo, su falta de rieles rígidos la hace difícil de maniobrar en posiciones horizontales aéreas convencionales."
    }
];

export const patientPackagingQuestions: Question[] = [
    {
        question: "Al preparar la camilla para un rescate prolongado o en clima frío, ¿qué accesorio interno ofrece la mayor ventaja al conformarse a la forma del paciente y proveer aislamiento?",
        options: [
            { letter: "a", text: "Inserto de malla (Mesh insert)." },
            { letter: "b", text: "Férula de vacío de cuerpo entero (Full-body vacuum splint)." },
            { letter: "c", text: "Espuma de poliestireno rígido." },
            { letter: "d", text: "Solo la tabla espinal plástica." }
        ],
        correctAnswer: "b",
        explanation: "La férula de vacío se amolda perfectamente al cuerpo del paciente ofreciendo excelente confort e inmovilización, además de ser un gran aislante térmico en clima frío (aunque puede ser demasiado calurosa en verano)."
    },
    {
        question: "Durante un empaquetamiento comercial, el paciente es asegurado primero con un arnés pélvico. ¿Cuál es el propósito principal de este paso?",
        options: [
            { letter: "a", text: "Permitir izar al paciente fuera de la camilla en caso de emergencia." },
            { letter: "b", text: "Evitar el movimiento longitudinal (deslizamiento) del paciente cuando la camilla se incline." },
            { letter: "c", text: "Transferir el peso de la camilla al paciente." },
            { letter: "d", text: "Actuar como torniquete pélvico." }
        ],
        correctAnswer: "b",
        explanation: "El arnés pélvico anclado a la cabecera de la camilla evita que el paciente se deslice hacia los pies al poner la camilla en posición vertical o en ángulo."
    },
    {
        question: "Para improvisar un amarre exterior completo (External Lashing) que asegure el torso y las piernas en la camilla, ¿qué longitud de cinta tubular de 1 pulgada recomienda el manual?",
        options: [
            { letter: "a", text: "10 pies (3 m)" },
            { letter: "b", text: "20 pies (6 m)" },
            { letter: "c", text: "30 pies (9 m)" },
            { letter: "d", text: "5 pies (1.5 m)" }
        ],
        correctAnswer: "b",
        explanation: "El manual recomienda usar un tramo de 20 pies (6 m) de cinta tubular insertado desde los pies, cruzando en una gran 'X' sobre el paciente hacia los postes verticales del pecho/hombros."
    },
    {
        question: "Al realizar un amarre improvisado externo (Tie-In), usted tensa fuertemente la cinta mientras la camilla plástica está suspendida en el aire. ¿Qué problema puede ocurrir al posar la camilla en el suelo?",
        options: [
            { letter: "a", text: "Las cintas se aflojarán y el paciente podría caerse." },
            { letter: "b", text: "La camilla se romperá por la mitad." },
            { letter: "c", text: "Las cintas se volverán excesivamente apretadas sobre el paciente, ya que la camilla pierde la flexión que tenía suspendida." },
            { letter: "d", text: "No ocurre nada, las cintas mantienen la misma tensión." }
        ],
        correctAnswer: "c",
        explanation: "Las camillas plásticas y de canastilla se comban/flexionan al estar suspendidas. Si las amarras muy apretadas en el aire, al apoyarlas en el suelo la camilla se endereza y aprieta aplastando al paciente."
    },
    {
        question: "¿Qué precaución psicológica es vital respecto al manejo de las MANOS del paciente consciente durante el empaquetamiento?",
        options: [
            { letter: "a", text: "Dejarlas sueltas fuera de la camilla para que pueda apartar las ramas." },
            { letter: "b", text: "Atarlas con firmeza al inicio del proceso para que no interrumpa." },
            { letter: "c", text: "Tener las manos atadas genera claustrofobia, por lo que debe hacerse en el último momento, e idealmente proveerles un trozo de cinta para agarrar." },
            { letter: "d", text: "Forzarlo a cruzar los brazos sobre el pecho permanentemente." }
        ],
        correctAnswer: "c",
        explanation: "Cualquier dedo fuera de la baranda sufrirá golpes contra rocas. Hay que meter las manos, pero atarlas causa ansiedad severa, así que se pospone hasta el final y se le da algo a lo que aferrarse por confort emocional."
    },
    {
        question: "Al rescatar a un paciente que cuelga de un arnés en pared vertical, si decide aflojar una pata de la camilla para deslizarla debajo del sujeto, ¿qué paso de seguridad es INNEGOCIABLE?",
        options: [
            { letter: "a", text: "Asegurarse de que el paciente esté inconsciente primero." },
            { letter: "b", text: "Mantener una línea de belay independiente unida al paciente en todo momento (ej. con un Pick-Off Strap)." },
            { letter: "c", text: "Cortar el arnés del paciente." },
            { letter: "d", text: "Bajar la camilla al suelo antes de subir al paciente." }
        ],
        correctAnswer: "b",
        explanation: "Nunca se debe desconectar la protección primaria de un paciente suspendido sin tener una seguridad de respaldo absoluta conectada a él, para evitar una caída libre si la maniobra falla."
    },
    {
        question: "Con respecto a la protección del paciente en el entorno, ¿cuál es el peligro térmico principal si el paciente se moja por lluvia o rocío del helicóptero?",
        options: [
            { letter: "a", text: "Deshidratación." },
            { letter: "b", text: "Hipertermia severa." },
            { letter: "c", text: "Hipotermia, dado que pierde su capacidad de generar calor por movimiento." },
            { letter: "d", text: "Infecciones por agua." }
        ],
        correctAnswer: "c",
        explanation: "Un paciente empaquetado no puede temblar vigorosamente ni moverse. El agua y el alto viento (Rotor wash) roban calor rápido y pueden llevar a una hipotermia crítica rápidamente."
    },
    {
        question: "Un 'Litter Shield' transparente es preferido por sobre un casco para proteger la cabeza del paciente. ¿Por qué?",
        options: [
            { letter: "a", text: "El Litter Shield es aprueba de balas." },
            { letter: "b", text: "Un casco deja la cara expuesta a ramas y tierra, es incómodo al estar acostado y puede interferir con la inmovilización espinal." },
            { letter: "c", text: "El casco pesa demasiado para la camilla." },
            { letter: "d", text: "El Litter Shield es más barato." }
        ],
        correctAnswer: "b",
        explanation: "El escudo desvía la maleza, polvo y viento lejos del rostro y cuello, y no requiere levantar ni manipular la cabeza del paciente para colocarse."
    },
    {
        question: "Según el estándar de la NFPA mencionado, cuando se prueba una camilla (Litter) de rescate estáticamente desde sus esquinas, ¿qué cantidad de carga se le aplica típicamente para verificar su deformación?",
        options: [
            { letter: "a", text: "300 lbf" },
            { letter: "b", text: "2,500 lbf (11 kN)" },
            { letter: "c", text: "9,000 lbf (40 kN)" },
            { letter: "d", text: "10,000 lbf" }
        ],
        correctAnswer: "b",
        explanation: "Las especificaciones originales y los métodos de prueba modernos (ASTM/NFPA) suspenden la camilla y le aplican una carga de prueba de 2,500 libras para garantizar que la deformación no exceda límites críticos."
    },
    {
        question: "¿Qué ventaja funcional provee un Arnés de Camilla tipo 'Spider' (Horizontal) respecto a los amarres fijos en una evacuación?",
        options: [
            { letter: "a", text: "Agrega 50 kg de contrapeso." },
            { letter: "b", text: "No requiere nudos Prusik." },
            { letter: "c", text: "Permite ajustar la longitud de cada pata de forma independiente para nivelar al paciente y facilitar las transiciones de bordes." },
            { letter: "d", text: "Permite que la camilla ruede como un carro." }
        ],
        correctAnswer: "c",
        explanation: "Los arneses comerciales tipo araña permiten alargar o acortar rápidamente cada lado para subir la camilla sobre el borde o inclinarla de acuerdo al terreno."
    }
];
