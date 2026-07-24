import { Question } from "../../../../question";

export const faqData = [
    {
        question: "¿Cuáles son los tres tipos de falla que se deben analizar en un rescate con cuerdas?",
        answer: "Falla del sistema (¿los anclajes y componentes son suficientemente fuertes?), falla humana (¿el entrenamiento es apropiado y las habilidades están vigentes?), y falla de comunicación (¿existe un plan y el equipo se está comunicando?).",
    },
    {
        question: "¿Qué determina la resistencia de un sistema de rescate con cuerdas?",
        answer: "La resistencia de un sistema es esencialmente la resistencia de su eslabón más débil. Cada componente se determina por su resistencia a la tracción cuando es nuevo, menos lo que la edad y el uso han debilitado, más los efectos de su ubicación en el sistema (por ejemplo, un nudo reduce significativamente la resistencia de una cuerda).",
    },
    {
        question: "¿Qué es la redundancia en un sistema de rescate con cuerdas?",
        answer: "Es el uso de un sistema de doble cuerda donde cada anclaje está respaldado por otro y cada cuerda principal está asegurada por otra (belay), de modo que si el sistema principal falla, el sistema de respaldo detiene la caída.",
    },
    {
        question: "¿Cuándo se debe usar un sistema de aseguramiento (belay)?",
        answer: "Cuando la falla del sistema de soporte principal, para el rescatista, la víctima o ambos, tiene el potencial de causar una lesión. El belay debe soportar el peso completo del sistema más la fuerza dinámica de una falla de la línea principal.",
    },
    {
        question: "¿Qué es la Técnica de Cuerda Simple (SRT) y por qué se usa?",
        answer: "Es una excepción a usar siempre un sistema de aseguramiento. Se desarrolló porque en rapeles y ascensos largos la línea de aseguramiento puede enredarse con la línea principal y detener el movimiento. Se reduce la redundancia a cambio de un sistema funcional, pero requiere mayor meticulosidad y la regla de los dos puntos de contacto con la cuerda.",
    },
    {
        question: "¿Cuáles son los dos sistemas recomendados para verificar la seguridad de un montaje?",
        answer: "La Verificación de Seguridad (otra persona revisa tu montaje con un par de ojos diferente) y el Sistema del Tacto (tocar físicamente cada parte del sistema al revisarla, como hacen los pilotos con sus instrumentos, para no omitir ningún paso).",
    },
    {
        question: "¿Cómo se maneja el miedo a la altura durante el entrenamiento?",
        answer: "El miedo es una respuesta normal a la altura que se supera con confianza en el equipo y las habilidades. Se recomienda cambiar el enfoque de la altura hacia los fundamentos del trabajo con cuerdas, y comenzar el entrenamiento de nuevos miembros en alturas bajas antes de progresar a rapeles altos.",
    },
    {
        question: "¿Cuál es el factor decisivo entre usar una carga viva o un maniquí durante el entrenamiento?",
        answer: "La percepción del riesgo: si es demasiado peligroso que una persona esté en la camilla, probablemente es igual de peligroso ser quien opera esa camilla, lo cual señala que se necesita entrenamiento adicional antes de poner a cualquiera en la cuerda.",
    },
];

export const safetyQuestions: Question[] = [
    {
        question: "¿Cuáles son los tres tipos de falla que deben analizarse en un sistema de rescate con cuerdas?",
        options: [
            { letter: "a", text: "Falla de presupuesto, falla de tiempo, falla de clima" },
            { letter: "b", text: "Falla del sistema, falla humana y falla de comunicación" },
            { letter: "c", text: "Falla de transporte, falla de personal, falla legal" },
            { letter: "d", text: "Falla de anclaje únicamente" },
        ],
        correctAnswer: "b",
        explanation: "Las cosas que pueden causar daño incluyen: falla del sistema (¿son suficientemente fuertes los anclajes y componentes?), falla humana (¿el entrenamiento es apropiado?) y falla de comunicación (¿existe un plan y se está comunicando el equipo?).",
    },
    {
        question: "¿Cómo se determina la resistencia de un sistema completo de rescate con cuerdas?",
        options: [
            { letter: "a", text: "Es el promedio de la resistencia de todos sus componentes" },
            { letter: "b", text: "Es la resistencia del componente más fuerte del sistema" },
            { letter: "c", text: "Es esencialmente la resistencia de su eslabón más débil" },
            { letter: "d", text: "Depende únicamente del precio del equipo" },
        ],
        correctAnswer: "c",
        explanation: "La resistencia de un sistema de rescate con cuerdas es esencialmente la resistencia de su eslabón más débil, considerando la resistencia original menos el desgaste por edad y uso, más los efectos de su colocación en el sistema.",
    },
    {
        question: "¿Qué norma NFPA ofrece una guía para organizaciones que desean brindar servicios de rescate técnico a su comunidad?",
        options: [
            { letter: "a", text: "NFPA 1006" },
            { letter: "b", text: "NFPA 1670" },
            { letter: "c", text: "NFPA 1983" },
            { letter: "d", text: "NFPA 1500" },
        ],
        correctAnswer: "b",
        explanation: "NFPA 1670, Estándar sobre Operaciones y Entrenamiento para Incidentes de Búsqueda y Rescate Técnico, ofrece una guía sobre las capacidades que una organización debe tener para realizar rescates a nivel operacional o técnico.",
    },
    {
        question: "¿Qué se entiende por 'redundancia' en un sistema de rescate con cuerdas?",
        options: [
            { letter: "a", text: "Usar equipo duplicado sin necesidad" },
            { letter: "b", text: "Un sistema de doble cuerda donde cada anclaje y cuerda principal tiene un respaldo" },
            { letter: "c", text: "Repetir el mismo rescate varias veces" },
            { letter: "d", text: "Contratar personal adicional para cada rescate" },
        ],
        correctAnswer: "b",
        explanation: "La redundancia se basa en sistemas de doble cuerda: cada punto de anclaje está respaldado por otro, y cada cuerda principal está asegurada (belay) por otra, de forma que si el sistema principal falla, el respaldo detiene la caída.",
    },
    {
        question: "¿Cuál es el riesgo de llevar la redundancia a un extremo excesivo?",
        options: [
            { letter: "a", text: "El sistema se vuelve más económico" },
            { letter: "b", text: "El sistema puede volverse tan complicado o lento de armar que deja de ser funcional, retrasando el rescate" },
            { letter: "c", text: "No existe ningún riesgo en agregar más respaldos" },
            { letter: "d", text: "El sistema se vuelve automáticamente más seguro sin desventajas" },
        ],
        correctAnswer: "b",
        explanation: "Se puede llevar la redundancia tan lejos que el sistema se vuelva engorroso o tarde demasiado en armarse, dejando de ser funcional y potencialmente aumentando el riesgo o retrasando el rescate de la víctima.",
    },
    {
        question: "¿En qué situación es crítico que el sistema de aseguramiento (belay) pueda soportar la carga por sí solo en cada lado?",
        options: [
            { letter: "a", text: "En rapeles cortos de menos de 5 metros" },
            { letter: "b", text: "En Sistemas de Doble Tensión (Twin-Tension Systems)" },
            { letter: "c", text: "Solo cuando se usa cuerda dinámica" },
            { letter: "d", text: "Nunca es necesario en ningún caso" },
        ],
        correctAnswer: "b",
        explanation: "Con los Sistemas de Doble Tensión, cada lado debe tener la capacidad de soportar la carga por sí mismo, ya que ambos lados están diseñados para trabajar de forma simultánea y equivalente.",
    },
    {
        question: "¿Por qué desarrollaron los espeleólogos (cavers) la Técnica de Cuerda Simple (SRT)?",
        options: [
            { letter: "a", text: "Porque las cuerdas dobles eran demasiado costosas" },
            { letter: "b", text: "Porque la línea de aseguramiento se enredaba con la línea principal en rapeles y ascensos largos, deteniendo el movimiento" },
            { letter: "c", text: "Porque estaba prohibido usar dos cuerdas en cuevas" },
            { letter: "d", text: "Porque reduce el peso del equipo a la mitad" },
        ],
        correctAnswer: "b",
        explanation: "Al rapelar y ascender por caídas largas, los espeleólogos descubrieron que la línea de aseguramiento se enredaba con la línea principal, deteniendo el movimiento. Por eso desarrollaron la SRT, reduciendo la redundancia a cambio de un sistema funcional.",
    },
    {
        question: "¿Cuál es la 'regla de los dos puntos de contacto' en la Técnica de Cuerda Simple?",
        options: [
            { letter: "a", text: "Usar dos cuerdas separadas siempre" },
            { letter: "b", text: "Mantener siempre dos puntos de contacto con la cuerda, agregando un tercero antes de remover uno" },
            { letter: "c", text: "Tener dos rescatistas en la escena en todo momento" },
            { letter: "d", text: "Verificar el sistema dos veces al día" },
        ],
        correctAnswer: "b",
        explanation: "En SRT se usa la regla de dos puntos de contacto con la cuerda en todo momento, lo que permite que un punto falle sin caer. Si se necesita remover un punto (como al cambiar de descensor a ascensor), se agrega primero un tercer punto de contacto.",
    },
    {
        question: "¿Cuáles son los dos sistemas de verificación recomendados para revisar un montaje de rescate?",
        options: [
            { letter: "a", text: "Verificación de Seguridad y Sistema del Tacto" },
            { letter: "b", text: "Revisión anual y prueba de carga" },
            { letter: "c", text: "Inspección visual únicamente" },
            { letter: "d", text: "Verificación por GPS y por radio" },
        ],
        correctAnswer: "a",
        explanation: "La Verificación de Seguridad implica que otra persona revise tu montaje con un par de ojos diferente, mientras que el Sistema del Tacto consiste en tocar físicamente cada componente para asegurarse de verlo realmente y no omitir ningún paso, tal como hacen los pilotos con sus instrumentos.",
    },
    {
        question: "Según el manual, ¿cómo se supera normalmente el miedo a la altura durante el entrenamiento?",
        options: [
            { letter: "a", text: "Evitando por completo hablar del tema" },
            { letter: "b", text: "Con confianza en el equipo y las habilidades, cambiando el enfoque hacia los fundamentos del trabajo con cuerdas" },
            { letter: "c", text: "Obligando a la persona a hacer un rapel alto de inmediato" },
            { letter: "d", text: "Usando medicamentos para la ansiedad antes de la práctica" },
        ],
        correctAnswer: "b",
        explanation: "El miedo es una respuesta normal a la altura que se supera con confianza en el equipo y las habilidades, cambiando el enfoque de la altura hacia los fundamentos: el montaje, la verificación de seguridad y la técnica de rapel.",
    },
    {
        question: "¿Cuál es el factor decisivo para elegir entre usar una carga viva (persona real) o un maniquí en el entrenamiento?",
        options: [
            { letter: "a", text: "El costo del maniquí disponible" },
            { letter: "b", text: "La percepción del riesgo: si es peligroso estar en la camilla, es igual de peligroso operarla" },
            { letter: "c", text: "La opinión personal del instructor, sin otro criterio" },
            { letter: "d", text: "El clima del día de entrenamiento" },
        ],
        correctAnswer: "b",
        explanation: "El factor decisivo es la percepción del riesgo: si es tan peligroso estar en la camilla, probablemente es igual de peligroso estar a cargo de tenderla, lo que indica que se necesita entrenamiento adicional antes de poner a cualquiera en la cuerda.",
    },
    {
        question: "En una respuesta multiagencia, ¿quién sigue siendo responsable de la seguridad de tu propio equipo, sin importar quién dirija el incidente?",
        options: [
            { letter: "a", text: "El comandante general del incidente" },
            { letter: "b", text: "La agencia con más experiencia en la escena" },
            { letter: "c", text: "El líder de tu propio equipo" },
            { letter: "d", text: "Nadie, la responsabilidad se transfiere automáticamente" },
        ],
        correctAnswer: "c",
        explanation: "No importa quién esté a cargo del incidente: el líder de tu equipo sigue siendo responsable de la seguridad de tu propio equipo, y puede tener que negarse a participar si no puede garantizar un nivel de seguridad aceptable.",
    },
    {
        question: "En un rescate de ángulo bajo donde no hay un aseguramiento (belay) instalado, ¿qué se recomienda que hagan los primeros rescatistas que bajan a la escena?",
        options: [
            { letter: "a", text: "Esperar a que llegue más personal antes de moverse" },
            { letter: "b", text: "Bajar con la línea de aseguramiento para usarla como línea de mano o rapel y establecerla para el paciente al llegar" },
            { letter: "c", text: "Ignorar el aseguramiento si el terreno parece fácil" },
            { letter: "d", text: "Solicitar que otra agencia se encargue del aseguramiento" },
        ],
        correctAnswer: "b",
        explanation: "Si no hay un belay instalado en un rescate de ángulo bajo, los primeros rescatistas deben bajar con él — es útil como línea de mano o de rapel en el descenso, y el aseguramiento del paciente puede establecerse en cuanto lleguen.",
    },
];
