import { Question } from "../../../../question";

export const snowSlopeFaqData = [
    {
        question: "¿Por qué un rescate en nieve o hielo requiere cuerdas más delgadas (menor diámetro) que un rescate vertical tradicional?",
        answer: "Al deslizarse la camilla sobre la nieve suave, la fricción y el peso percibido se reducen dramáticamente comparado con colgarla en el aire. La fuerza requerida para moverla es mínima. Esto permite usar cuerdas más delgadas y equipo más liviano, lo cual es vital ya que los rescatistas suelen caminar largas distancias cargando el equipo."
    },
    {
        question: "¿Cuál es el rol de los 'Tenders' (guías de camilla) en un rescate en nieve?",
        answer: "A diferencia del rescate vertical donde los tenders cargan o empujan la camilla, en nieve la camilla se desliza sola. Los tenders (normalmente amarrados con líneas guía largas) caminan al lado o adelante/atrás de la camilla para dirigir su camino, actuar como frenos manuales y evitar que vuelque."
    },
    {
        question: "¿Por qué en ocasiones no se considera 'esencial' una cuerda de belay separada en pendientes de nieve?",
        answer: "Si la pendiente es suave, la nieve es blanda y los tenders tienen hachas de hielo (ice axes), ellos mismos actúan como el belay. Si la línea principal falla, los tenders pueden hacer un 'ice-axe arrest' (frenado con hacha) y detener la camilla manualmente sin necesidad de un sistema de cuerda de respaldo completo."
    },
    {
        question: "¿Qué herramienta es obligatoria para los tenders que actúan como sistema de frenado en nieve?",
        answer: "El piolet o hacha de hielo (Ice Axe). Les permite ejecutar la maniobra de 'ice-axe arrest', clavando el pico en la nieve usando el peso de su cuerpo para detener un deslizamiento incontrolado de la camilla."
    },
    {
        question: "¿Qué tipo de descensor es ideal para operaciones ligeras en nieve?",
        answer: "Descensores diseñados para cargas de una sola persona, como el Petzl GriGri o el Micro-rack. Son ligeros y suficientes para la baja tensión que genera una camilla deslizando en nieve."
    }
];

export const snowSlopeEvacuationsQuestions: Question[] = [
    {
        question: "La diferencia fundamental entre un sistema de bajo ángulo tradicional y un sistema sobre nieve es que en la nieve:",
        options: [
            { letter: "a", text: "La cuerda nunca toca el suelo." },
            { letter: "b", text: "Los tenders no están soportando ni levantando el peso de la camilla. La camilla se desliza sobre la superficie por lo que el sistema solo tiene que vencer la tendencia a deslizarse (gravedad reducida por el plano inclinado suave)." },
            { letter: "c", text: "Se usan poleas de plástico." },
            { letter: "d", text: "Se prohíbe el uso de cuerdas." }
        ],
        correctAnswer: "b",
        explanation: "La nieve convierte la camilla en un trineo. El trabajo duro lo hace la superficie. Por esto, las fuerzas en el sistema de cuerdas caen dramáticamente."
    },
    {
        question: "Debido a la reducción significativa de las cargas en un sistema de evacuación por nieve, ¿qué ajuste recomienda el manual para el equipo?",
        options: [
            { letter: "a", text: "Usar cuerdas de acero." },
            { letter: "b", text: "Usar equipo mucho más liviano y cuerdas de diámetro más pequeño para la línea principal. Esto es crucial porque el equipo se debe cargar en mochilas durante la aproximación a pie por la nieve." },
            { letter: "c", text: "Llevar el doble de mosquetones pesados." },
            { letter: "d", text: "Eliminar todos los descensores mecánicos." }
        ],
        correctAnswer: "b",
        explanation: "Cargar una cuerda NFPA de 12.5mm (G-rated) por kilómetros en nieve profunda es agotador e innecesario cuando la carga real en la cuerda apenas superará los 50 kg por el deslizamiento."
    },
    {
        question: "En pendientes de nieve moderadas, ¿quién asume a menudo el rol de 'sistema de belay' primario en caso de que la línea principal falle?",
        options: [
            { letter: "a", text: "Un árbol en la base." },
            { letter: "b", text: "Los Tenders (guías) que caminan con la camilla. Usan sus hachas de hielo (ice axes) para realizar un arresto rápido y detener el deslizamiento manualmente." },
            { letter: "c", text: "El paciente." },
            { letter: "d", text: "Un helicóptero en vuelo estacionario." }
        ],
        correctAnswer: "b",
        explanation: "El 'Self-Arrest' o arresto de camilla con hacha de hielo es una técnica alpina estándar. Si la pendiente no es extrema y la nieve tiene buena consistencia, 2 o 4 tenders clavando sus hachas pueden frenar una camilla fácilmente."
    },
    {
        question: "¿En qué situación de nieve SIEMPRE se debe instalar una cuerda de Belay independiente (sistema tradicional) en lugar de depender de los Tenders?",
        options: [
            { letter: "a", text: "En nieve suave (powder)." },
            { letter: "b", text: "Cuando hay nieve muy dura, hielo superficial, o la pendiente es extremadamente pronunciada, condiciones donde los tenders no podrían detener la camilla con sus hachas si la línea principal falla." },
            { letter: "c", text: "Cuando hay luz solar directa." },
            { letter: "d", text: "Cuando la víctima es un niño." }
        ],
        correctAnswer: "b",
        explanation: "El hielo duro no permite clavar un piolet rápidamente. En esas condiciones, si la cuerda principal se rompe, la camilla acelerará incontrolablemente. Ahí el belay mecánico es obligatorio."
    },
    {
        question: "Si la evacuación en nieve debe hacerse a lo largo de una cresta (ridge line) angosta donde la estabilidad direccional es crítica para no caer por los lados, ¿cuál es la mejor configuración de Tenders?",
        options: [
            { letter: "a", text: "Un tender sentado sobre la camilla." },
            { letter: "b", text: "Cuatro tenders en total: dos adelante para dirigir el frente y tirar, y dos atrás para actuar como timón y mantener la camilla alineada con la dirección de viaje." },
            { letter: "c", text: "Ningún tender, dejarla deslizar sola." },
            { letter: "d", text: "Dos tenders a un solo lado." }
        ],
        correctAnswer: "b",
        explanation: "En una cresta, un pequeño desvío lateral puede mandar la camilla por un precipicio. Dos atrás actúan como timón de un barco, y dos adelante aseguran la tracción direccional perfecta."
    },
    {
        question: "¿Qué ventaja tiene usar un dispositivo como el Petzl GriGri en una evacuación en nieve?",
        options: [
            { letter: "a", text: "Es más pesado y da estabilidad." },
            { letter: "b", text: "Sirve un doble propósito: actúa como freno para el descenso y, en caso de cambiar a un sistema de ascenso, actúa como el ratchet (captura de progreso) del polipasto, todo en un paquete pequeño y ligero." },
            { letter: "c", text: "Viene en colores brillantes que se ven en la nieve." },
            { letter: "d", text: "Funciona mejor cuando se congela." }
        ],
        correctAnswer: "b",
        explanation: "El GriGri es ideal para las cargas ligeras de la nieve. Frena bien, y su mecanismo de bloqueo automático actúa como Prusik de captura cuando el equipo tira de la cuerda."
    },
    {
        question: "En una pendiente de nieve suave, la posición ideal para que los Tenders asistan es:",
        options: [
            { letter: "a", text: "Atrás, empujando." },
            { letter: "b", text: "Al frente de la camilla, tirando de ella para equilibrar la tracción con la gravedad, a menudo amarrados con líneas guía (tag lines) que les dan distancia." },
            { letter: "c", text: "A un lado, cargando." },
            { letter: "d", text: "Abajo, esperando que llegue." }
        ],
        correctAnswer: "b",
        explanation: "Adelante, los tenders pueden ver el terreno que viene y corregir la trayectoria antes de golpear obstáculos. Las líneas guía (tag lines) largas los mantienen fuera de la zona de peligro si la camilla resbala."
    },
    {
        question: "Además de la nieve, ¿qué otras superficies mencionadas en el manual permiten aplicar estas tácticas de 'evacuación deslizante' (Smooth Slope)?",
        options: [
            { letter: "a", text: "Rocas volcánicas afiladas." },
            { letter: "b", text: "Escaleras de concreto (stairways), escaleras aéreas de bomberos (aerial ladders) o colinas de hierba húmeda suave." },
            { letter: "c", text: "Asfalto de carretera seca." },
            { letter: "d", text: "Paredes verticales de ladrillo." }
        ],
        correctAnswer: "b",
        explanation: "La física de una camilla deslizándose en escaleras de concreto lisas no difiere mucho de la nieve compacta: no hay caída vertical libre, y la fricción absorbe gran parte de la carga de la cuerda."
    },
    {
        question: "¿Cuál es la regla sobre la 'pérdida de eficiencia' por falta de poleas de cambio de dirección en operaciones de nieve?",
        options: [
            { letter: "a", text: "Se compensa usando más rescatistas." },
            { letter: "b", text: "Es menos preocupante que en sistemas verticales debido a la gran reducción de la carga. La fricción adicional de usar anclajes menos eficientes rara vez sobrecarga el sistema." },
            { letter: "c", text: "Hace imposible el rescate." },
            { letter: "d", text: "Requiere usar cuerdas de 16mm." }
        ],
        correctAnswer: "b",
        explanation: "En un polipasto vertical, rozar un mosquetón sin polea suma mucha fricción y fatiga. En nieve, como estás jalando quizás solo 30 kg de carga neta, perder algo de eficiencia en un mosquetón es un precio aceptable por no cargar pesadas poleas a la montaña."
    },
    {
        question: "¿Qué peligro ambiental requiere que la camilla usada en nieve tenga protección adicional debajo?",
        options: [
            { letter: "a", text: "La lluvia." },
            { letter: "b", text: "El frío extremo (hipotermia de contacto). El fondo de la camilla metálica o plástica transmite el frío de la nieve directamente al paciente, requiriendo aislamiento extra debajo de él (colchonetas aislantes, sleeping bags)." },
            { letter: "c", text: "Los rayos UV de la nieve." },
            { letter: "d", text: "La electricidad estática." }
        ],
        correctAnswer: "b",
        explanation: "Acostar a un herido en una camilla de acero deslizándose sobre nieve es como ponerlo en un refrigerador. Aislar al paciente por DEBAJO es tan importante como taparlo por encima."
    }
];
