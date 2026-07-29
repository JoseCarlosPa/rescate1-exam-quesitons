import { Question } from "../../../../question";

export const accessFaqData = [
    {
        question: "¿Cuáles son las 3 áreas de estabilización de un paciente?",
        answer: "Física (evitar que caigan o sean golpeados por rocas), Médica (tratar shock, hemorragias o hipotermia) y Emocional (calmar a un sujeto aterrado o suicida)."
    },
    {
        question: "¿Por qué el manual desaconseja acercarte a la víctima con tu cuerda suelta colgando (Rappel Line)?",
        answer: "Porque el paciente, presa del pánico, podría intentar agarrar la cuerda. Si la jala fuertemente, puede bloquear tu rapel o incluso causar una caída. Se recomienda usar una bolsa de cuerda (Rope Bag) y mantener tus manos libres."
    },
    {
        question: "¿Debo anclar a la víctima a mi propio arnés al llegar a ella?",
        answer: "No, en la medida de lo posible. Conectar su peso directamente a tu arnés reduce masivamente tu movilidad y te impide desconectarte para realizar otras maniobras si es necesario. Usa un Pick-Off strap conectado a la línea principal y belay."
    },
    {
        question: "¿Cuál es la ventaja de un 'Lifesaver Victim Harness' sobre un arnés de rescate tradicional?",
        answer: "El arnés de víctima se puede colocar sin que el sujeto tenga que moverse o levantar las piernas (lo cual podría causar que pierda el balance y caiga). Simplemente se envuelve alrededor de ellos y se ajusta."
    },
    {
        question: "¿En qué casos es estrictamente necesario añadir un arnés de pecho (Chest Harness) al paciente?",
        answer: "Siempre que el paciente esté inconsciente o no tenga la fuerza para mantener su torso erguido. El arnés de pecho evita que se inviertan o asfixien por compresión."
    }
];

export const accessStabilizationQuestions: Question[] = [
    {
        question: "Durante las fases iniciales de un rescate, la 'Estabilización' del paciente se divide en tres categorías. ¿Cuáles son?",
        options: [
            { letter: "a", text: "Hidratación, Nutrición y Extricación." },
            { letter: "b", text: "Física, Médica y Emocional." },
            { letter: "c", text: "Mecánica, Eléctrica y Química." },
            { letter: "d", text: "Aérea, Terrestre y Subterránea." }
        ],
        correctAnswer: "b",
        explanation: "Física (prevenir caídas y rocas), Médica (tratar el trauma/shock) y Emocional (calmar y comunicarse con la víctima)."
    },
    {
        question: "Al acceder a un sujeto en un acantilado usando rapel, ¿cuál es la mejor forma de manejar tu cuerda (Rappel Line)?",
        options: [
            { letter: "a", text: "Lanzarla toda hacia abajo para que el sujeto la vea." },
            { letter: "b", text: "Llevar la cuerda en una bolsa (Rope Bag) contigo para mantenerla fuera del alcance del sujeto hasta que estés listo, evitando que en su pánico la agarre y afecte tu descenso." },
            { letter: "c", text: "Amarrar la punta de la cuerda a una piedra grande." },
            { letter: "d", text: "Pedirle al sujeto que la atrape por ti." }
        ],
        correctAnswer: "b",
        explanation: "Si lanzas la cuerda, un sujeto en pánico podría agarrarla. Si tiran de ella, pueden detener tu avance como si fuera un 'bottom belay', o peor, desestabilizarse a sí mismos y caer."
    },
    {
        question: "Antes de siquiera tocar al paciente, mientras te acercas a él, ¿qué acción inicial recomienda el manual?",
        options: [
            { letter: "a", text: "Hacer contacto de voz, presentarte, calmarlo, pedirle que no se mueva e indicarle qué vas a hacer. Mantente fuera de su alcance hasta estar listo." },
            { letter: "b", text: "Lanzarle un casco para que se lo ponga él solo." },
            { letter: "c", text: "Tomarle una foto para documentar la escena." },
            { letter: "d", text: "Llegar por sorpresa por la espalda para que no se asuste." }
        ],
        correctAnswer: "a",
        explanation: "La estabilización emocional empieza antes del contacto físico. Hablarle previene movimientos bruscos impulsados por la ansiedad o el intento de saltar hacia ti."
    },
    {
        question: "¿Por qué el manual desaconseja fuertemente conectar físicamente al paciente directo al anillo D de TU arnés durante la estabilización inicial?",
        options: [
            { letter: "a", text: "Porque se rompe el arnés." },
            { letter: "b", text: "Porque la suma del peso en tu cuerpo destruye completamente tu movilidad, y te impide dejar al paciente anclado al sistema para moverte a hacer otras maniobras." },
            { letter: "c", text: "Porque viola las leyes de la física." },
            { letter: "d", text: "Porque es antihigiénico." }
        ],
        correctAnswer: "b",
        explanation: "Si están amarrados juntos, tú eres el anclaje. Si necesitas pararte a acomodar un nudo, levantarás su peso con tus caderas. Es mejor conectarlo al sistema de cuerdas (Main/Belay) usando un Pick-Off Strap."
    },
    {
        question: "Si el plan es realizar un rescate tipo 'Pick-Off' donde tú y el paciente serán bajados (Lowering System) desde arriba, ¿cómo se conecta idealmente al paciente?",
        options: [
            { letter: "a", text: "Abrazándolo." },
            { letter: "b", text: "Conectando una correa de Pick-Off (Pick-Off Strap) desde el arnés del paciente hacia un Prusik en la línea principal (Main Line) y otro Prusik en la línea de Belay." },
            { letter: "c", text: "Amarrándolo a tu pierna." },
            { letter: "d", text: "Usando cinta adhesiva." }
        ],
        correctAnswer: "b",
        explanation: "Al conectarlo directo a las líneas que vienen de arriba, su peso es sostenido por el sistema, no por ti. Tú tienes movilidad para maniobrar durante el descenso."
    },
    {
        question: "¿Cuál es la principal ventaja de usar un Arnés de Víctima especializado (ej. CMC Lifesaver Victim Harness) sobre un arnés de rescate tradicional o deportivo de escalada?",
        options: [
            { letter: "a", text: "Que es mucho más barato." },
            { letter: "b", text: "Se puede colocar rápidamente abrazándolo alrededor de la víctima SIN que el sujeto tenga que levantar las piernas o cambiar su posición, lo cual evita riesgos de caída." },
            { letter: "c", text: "Tiene bolsas para equipo médico." },
            { letter: "d", text: "Viene en tallas para mascotas." }
        ],
        correctAnswer: "b",
        explanation: "Pedirle a alguien que cuelga de un risco que 'levante un pie' para pasarlo por la pernera de un arnés normal es una receta para el desastre. Un arnés tipo pañal o envolvente se coloca alrededor de ellos."
    },
    {
        question: "Si llegas a una víctima y decides amarrarle rápidamente un trozo de cinta tubular alrededor de la cintura (Hasty Harness) porque es urgente estabilizarla:",
        options: [
            { letter: "a", text: "Esa es la solución final y puedes izarlo así." },
            { letter: "b", text: "Cumple la función rápida de evitar que caiga al vacío, pero la falta de soporte real requiere que, en cuanto sea seguro, le coloques un arnés completo adecuado antes de suspenderlo." },
            { letter: "c", text: "Debes amarrarlo al cuello." },
            { letter: "d", text: "Esa cinta debe medir 15 metros." }
        ],
        correctAnswer: "b",
        explanation: "Un arnés improvisado de cintura lo salvará si resbala en ese instante (estabilización), pero si lo dejas colgando de una sola cinta en la cintura, podría sufrir lesiones graves u asfixia por compresión."
    },
    {
        question: "Si descubres que tu paciente está inconsciente (o podría perder la consciencia durante el trayecto), ¿qué elemento de arnesado se vuelve OBLIGATORIO?",
        options: [
            { letter: "a", text: "Rodilleras tácticas." },
            { letter: "b", text: "Un arnés de pecho (Chest Harness) anclado alto, para evitar que su torso caiga hacia atrás y quede colgado de cabeza o se comprima su diafragma." },
            { letter: "c", text: "Zapatos de escalada." },
            { letter: "d", text: "Un cinturón porta-herramientas." }
        ],
        correctAnswer: "b",
        explanation: "Una persona inconsciente en un arnés de asiento (pélvico) tenderá a irse hacia atrás o hacia adelante como un muñeco de trapo. El arnés de pecho garantiza que el peso y la vía aérea se mantengan alineados."
    },
    {
        question: "Regla número uno al aproximarse al paciente según el manual:",
        options: [
            { letter: "a", text: "Proteger al rescatista, Proteger al paciente." },
            { letter: "b", text: "Llamar a la prensa." },
            { letter: "c", text: "Bajar rápido sin importar las rocas." },
            { letter: "d", text: "Cortar la cuerda extra." }
        ],
        correctAnswer: "a",
        explanation: "Si el rescatista se convierte en una víctima por un error de aproximación o por desprendimiento de rocas, la misión fracasa y el paciente original queda peor."
    },
    {
        question: "Al evaluar la ruta de acceso al paciente, el manual menciona que generalmente es más fácil y seguro:",
        options: [
            { letter: "a", text: "Escalar (Lead Climb) desde abajo hacia la víctima, colocando anclajes intermedios en la roca suelta." },
            { letter: "b", text: "Bajar a un rescatista (Lowering) o que baje en Rapel desde un punto seguro por encima del paciente." },
            { letter: "c", text: "Saltar desde un helicóptero." },
            { letter: "d", text: "Lanzar una escalera de cuerda." }
        ],
        correctAnswer: "b",
        explanation: "El acceso desde arriba permite establecer sistemas anclados a prueba de bombas y descender de forma controlada. Escalar de punta (lead climbing) requiere muchísimo más tiempo, equipo especializado y conlleva riesgos enormes de caídas."
    }
];
