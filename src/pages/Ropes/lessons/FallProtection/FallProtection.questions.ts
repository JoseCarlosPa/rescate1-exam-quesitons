import { Question } from "../../../../question";

export const fallProtectionFaqData = [
    {
        question: "¿Cuál es la diferencia principal entre 'Travel Restraint' y 'Fall Arrest'?",
        answer: "El Travel Restraint (restricción de viaje) evita físicamente que llegues al borde donde podrías caer (evita la caída por completo). El Fall Arrest (detención de caídas) asume que la caída sí ocurrirá y usa equipo dinámico o absorbedores de energía para frenarte en el aire."
    },
    {
        question: "¿Qué es el 'Factor de Caída' (Fall Factor)?",
        answer: "Es la relación matemática que dicta la severidad de una caída. Se calcula dividiendo la Distancia de Caída Libre entre la Longitud de Cuerda/Eslinga disponible para absorber el impacto. A mayor número, más destructiva es la caída."
    },
    {
        question: "¿Por qué un Factor de Caída 2 es tan peligroso?",
        answer: "Un Factor de Caída 2 ocurre cuando anclas tu línea a nivel de tus pies. Si caes, caes el doble de la longitud de tu cuerda antes de que se tense (ej. eslinga de 2m = caída de 4m). Esto genera fuerzas tan inmensas que pueden romper arneses o anclajes si no hay absorbedor de energía."
    },
    {
        question: "¿Qué recomienda el manual si necesitas movilidad en el borde del abismo?",
        answer: "Si necesitas trabajar justo en el borde o rebasarlo, el 'Travel Restraint' ya no sirve. Debes transicionar a un sistema de 'Belay' (aseguramiento) manejado por un operador que mantenga tu cuerda sin holgura (slack) en todo momento para mantener tu caída potencial cercana al Factor 0."
    },
    {
        question: "¿Qué tipo de cuerda debe usar un escalador de punta (Lead Climber) ascendiendo una torre?",
        answer: "Dado que el 'Lead Climbing' genera caídas severas por encima del último punto de anclaje, se DEBE usar cuerda dinámica (high-stretch) para absorber el impacto."
    }
];

export const fallProtectionQuestions: Question[] = [
    {
        question: "De acuerdo con el manual, ¿cuál es el enfoque más seguro para proteger a un rescatista (ej. el paramédico inicial) que solo necesita asomarse al borde para ubicar a la víctima?",
        options: [
            { letter: "a", text: "Usar un sistema de detención de caídas (Fall Arrest) con un arnés industrial." },
            { letter: "b", text: "Usar un sistema de restricción de viaje (Travel Restraint) anclado lejos del borde, con una longitud ajustada exactamente para impedir que su cuerpo rebase el abismo." },
            { letter: "c", text: "Usar cuerdas dinámicas atadas al tobillo." },
            { letter: "d", text: "Sostenerlo de la mano." }
        ],
        correctAnswer: "b",
        explanation: "La restricción de viaje (Travel Restraint) es la prevención definitiva: previene físicamente que la persona alcance el punto de caída, eliminando el riesgo de impacto por completo."
    },
    {
        question: "Si estás anclado a un punto que está exactamente a la misma altura que el anillo D de tu arnés (ej. a nivel de la cintura), y caes, ¿cuál será tu Factor de Caída?",
        options: [
            { letter: "a", text: "Factor 0" },
            { letter: "b", text: "Factor 1" },
            { letter: "c", text: "Factor 2" },
            { letter: "d", text: "Factor 0.5" }
        ],
        correctAnswer: "b",
        explanation: "Si el anclaje está a tu misma altura, caerás una distancia igual a la longitud de tu cuerda (Distancia = Longitud de Cuerda). Caída / Cuerda = Factor 1."
    },
    {
        question: "En un escenario de rescate, observas que un compañero ató su línea de seguridad a un tubo que está a nivel del piso (a la altura de sus botas). Si resbala, experimentará una caída de:",
        options: [
            { letter: "a", text: "Factor 0" },
            { letter: "b", text: "Factor 1" },
            { letter: "c", text: "Factor 2, la caída más severa posible en rescate tradicional, ya que caerá el doble de la longitud de su línea." },
            { letter: "d", text: "Factor 3" }
        ],
        correctAnswer: "c",
        explanation: "Caer con el anclaje en los pies (Factor 2) es extremadamente destructivo. La distancia de caída será el largo de su eslinga HACIA ABAJO del anclaje, más el mismo largo de eslinga desde su cintura hasta el anclaje (el doble de distancia)."
    },
    {
        question: "Para los equipos de rescate (Tenders) trabajando cerca del borde manipulando la camilla, el manual menciona una práctica común para delimitar zonas. Consiste en:",
        options: [
            { letter: "a", text: "Poner letreros de 'No Pasar'." },
            { letter: "b", text: "Colocar cinta de marcaje (flagging tape) o una línea perimetral de cinta tubular plana (web) en el piso para demarcar el área de peligro; quien cruce esa línea debe estar forzosamente anclado a un sistema." },
            { letter: "c", text: "Cerrar los ojos de los que no están trabajando." },
            { letter: "d", text: "Pintar el piso con aerosol rojo." }
        ],
        correctAnswer: "b",
        explanation: "Las 'líneas cálidas' o zonas calientes marcadas físicamente en el suelo le recuerdan instintivamente al equipo de apoyo (que no lleva protección) que no pueden dar ni un paso más hacia el abismo."
    },
    {
        question: "¿Qué componente crítico DEBE existir en un sistema de Detención de Caídas (Fall Arrest) industrial (como el usado en antenas o estructuras) debido a las inmensas fuerzas generadas por la caída libre?",
        options: [
            { letter: "a", text: "Guantes de kevlar." },
            { letter: "b", text: "Un Absorbedor de Energía (Energy Absorber) diseñado para desgarrarse y disipar la fuerza máxima de impacto (Maximum Arrest Force) y salvar los órganos del trabajador." },
            { letter: "c", text: "Poleas de aluminio." },
            { letter: "d", text: "Silbatos de emergencia." }
        ],
        correctAnswer: "b",
        explanation: "Si caes 2 o 3 metros enganchado a una eslinga estática (cable o cinta), tu columna vertebral se rompería. El absorbedor de impacto es mandatorio para mitigar el choque (shock load)."
    },
    {
        question: "Un rescatista está haciendo escalada de punta (Lead Climbing) en una antena para alcanzar a un paciente porque no hay acceso desde arriba. ¿Qué tipo de cuerda DEBE usar para su seguridad?",
        options: [
            { letter: "a", text: "Cuerda 100% estática (Bajo estiramiento) para que no rebote." },
            { letter: "b", text: "Cuerda Dinámica (Alto estiramiento) para que la propia elongación de la cuerda absorba la brutal energía de una caída por encima del último seguro." },
            { letter: "c", text: "Cable de acero galvanizado." },
            { letter: "d", text: "Cinta tubular amarrada." }
        ],
        correctAnswer: "b",
        explanation: "El Lead Climbing siempre conlleva riesgos de caídas graves (Factor 1 a 2). Usar una cuerda estática para lead climbing es mortal. Se usan cuerdas dinámicas de alpinismo."
    },
    {
        question: "¿Por qué el manual condena tajantemente la práctica de 'tender una cuerda horizontal paralela al borde del acantilado' a nivel de los pies, para que los rescatistas se enganchen a ella con eslingas cortas?",
        options: [
            { letter: "a", text: "Porque se ensucia rápido." },
            { letter: "b", text: "Porque esa configuración garantiza una caída de Factor 2 en caso de resbalón, y la línea horizontal actuaría como una 'High Line' no planeada, multiplicando masivamente las fuerzas sobre los anclajes hasta arrancarlos." },
            { letter: "c", text: "Porque estorba para caminar." },
            { letter: "d", text: "Porque se necesita cuerda muy larga." }
        ],
        correctAnswer: "b",
        explanation: "Es una trampa mortal. Al caer, el rescatista aplicaría una altísima fuerza de choque en ángulo recto sobre esa línea tensa (multiplicador de vector), arrancando los anclajes de ambos extremos y cayendo al vacío."
    },
    {
        question: "¿Dónde se ubica el punto de conexión ('D-ring') ideal y obligatorio en el arnés para detener caídas en un trabajador industrial estándar (no rescate)?",
        options: [
            { letter: "a", text: "En la cintura (Waist)." },
            { letter: "b", text: "En la región dorsal (Dorsal D-ring, entre los omóplatos) para mantener al caído en posición vertical." },
            { letter: "c", text: "En el esternón (Sternal)." },
            { letter: "d", text: "En los muslos." }
        ],
        correctAnswer: "b",
        explanation: "Los sistemas Fall Arrest (ANSI Z359) dictan el anclaje dorsal para que, en caso de un impacto brutal, la persona cuelgue en posición recta y segura sin que su espina dorsolumbar sufra dobleces extremos."
    },
    {
        question: "Al configurar un sistema de restricción de viaje (Travel Restraint) para ti mismo, ¿qué equipo o nudo recomienda el manual para ajustar la longitud de tu cuerda de forma rápida y precisa?",
        options: [
            { letter: "a", text: "Desatar y re-atar nudos ocho múltiples veces." },
            { letter: "b", text: "Usar un 'Rope Grab' (Bloqueador mecánico o Prusik) en la línea fija para ajustar milimétricamente qué tan cerca puedes llegar al borde." },
            { letter: "c", text: "Caminar hacia atrás y soltar lastre." },
            { letter: "d", text: "Amarrarse con cinta adhesiva." }
        ],
        correctAnswer: "b",
        explanation: "Intentar atar nudos de la longitud exacta es difícil e ineficiente. Un Prusik o un AZTEK permiten soltar holgura gradualmente hasta llegar al punto exacto donde alcanzas a ver, y ahí bloquearse."
    },
    {
        question: "¿Cuál es el Factor de Caída ideal al que siempre debemos apuntar al asegurar (Belay) a una víctima o rescatista?",
        options: [
            { letter: "a", text: "Factor 2." },
            { letter: "b", text: "Factor 0. El anclaje siempre debe estar por encima y el belayer debe mantener la línea tensa (sin slack) en todo momento." },
            { letter: "c", text: "Factor 10." },
            { letter: "d", text: "Factor 1.5." }
        ],
        correctAnswer: "b",
        explanation: "Al mantener la cuerda tirante desde un anclaje alto, la distancia de caída libre se reduce literalmente a 0, previniendo cualquier choque o impacto (shock load)."
    }
];
