import { Question } from "../../../../question";

export const puttingFaqData = [
    {
        question: "¿Qué significa el acrónimo L.A.S.T. y de dónde viene?",
        answer: "L.A.S.T. = Locate (Localizar), Access (Acceder), Stabilize (Estabilizar), Transport (Transportar). Fue desarrollado originalmente para la respuesta genérica de búsqueda y rescate (SAR) pero aplica perfectamente para rescates con cuerdas."
    },
    {
        question: "¿Cuál es el papel del Equipo de Rigging durante la fase de 'Access' (Acceso)?",
        answer: "El Equipo de Rigging monta los sistemas de anclaje y cuerdas necesarios para que el Equipo Médico pueda llegar de forma segura al sujeto. Trabajan en paralelo: médicos acceden mientras el rigging team prepara el sistema de extracción."
    },
    {
        question: "¿Por qué los primeros rescates reales de un equipo son esencialmente 'entrenamiento en tiempo real'?",
        answer: "Porque sin importar cuánto se planee, el primer contacto con condiciones reales (terreno real, víctima real, tiempo real de presión) siempre revela problemas que el entrenamiento no hizo evidentes. El manual llama a eso 'pulir la respuesta y descubrir problemas críticos no anticipados en el planeamiento'."
    },
    {
        question: "¿Qué hace el Equipo Médico durante la fase de 'Stabilize' y qué hace el Rigging Team simultáneamente?",
        answer: "El Equipo Médico evalúa, trata y estabiliza la condición médica del paciente (control de hemorragia, inmovilización, vía aérea). Simultáneamente, el Equipo de Rigging termina de montar el sistema de extracción y el Equipo de Camilla prepara el empaquetamiento para el transporte."
    },
    {
        question: "¿Cuál es la fase más variable y dependiente del terreno en el proceso L.A.S.T.?",
        answer: "La fase 'Transport' (Transporte) es la más dependiente del terreno, porque la táctica de evacuación (pick-off, camilla horizontal, vertical, low angle, high angle, highline) cambia radicalmente según el entorno. Las otras fases son relativamente predecibles."
    }
];

export const puttingItTogetherQuestions: Question[] = [
    {
        question: "El acrónimo L.A.S.T. describe el proceso de respuesta a un rescate. Las 4 etapas en orden correcto son:",
        options: [
            { letter: "a", text: "Lanzar, Amarrar, Sostener, Transportar." },
            { letter: "b", text: "Localizar, Acceder, Estabilizar, Transportar." },
            { letter: "c", text: "Ligar, Aislar, Suturar, Trasladar." },
            { letter: "d", text: "Localizar, Atar, Señalar, Tirar." }
        ],
        correctAnswer: "b",
        explanation: "L=Locate (encontrar al sujeto), A=Access (llegar a él de forma segura), S=Stabilize (tratar su condición), T=Transport (evacuarlo). Este flujo es universal para todo tipo de rescate técnico."
    },
    {
        question: "El Equipo Médico es 'el primero en acceder al sujeto'. ¿Qué hace el Equipo de Rigging MIENTRAS el equipo médico trabaja con el paciente?",
        options: [
            { letter: "a", text: "Espera a que el equipo médico termine para empezar su trabajo." },
            { letter: "b", text: "Trabaja en paralelo: establece anclajes, monta el sistema de cuerdas, y prepara el sistema de extracción necesario para transportar al sujeto una vez estabilizado." },
            { letter: "c", text: "Regresa a la unidad por más equipo." },
            { letter: "d", text: "Coordina con los medios de comunicación." }
        ],
        correctAnswer: "b",
        explanation: "El trabajo paralelo es clave para la velocidad. Si el Rigging Team espera al Medical Team, se pierde un tiempo valioso. Cada equipo trabaja en su dominio simultáneamente."
    },
    {
        question: "En la fase de 'Locate' (Localizar), ¿qué información inicial clave recibe el equipo sobre el incidente?",
        options: [
            { letter: "a", text: "Solo el nombre de la víctima." },
            { letter: "b", text: "La ubicación del incidente desde el despachador, que permite al Jefe de Operaciones comenzar a desarrollar un checklist de lo que cada miembro hará al llegar." },
            { letter: "c", text: "Los datos del seguro médico del paciente." },
            { letter: "d", text: "El pronóstico del tiempo para los próximos 7 días." }
        ],
        correctAnswer: "b",
        explanation: "La ubicación es el primer dato. Con solo esa información, el Ops Chief puede activar el preplan: ¿qué ruta tomar?, ¿qué equipo priorizar?, ¿qué tipo de terreno esperar? La planificación comienza en el camino."
    },
    {
        question: "¿Por qué el manual dice que 'cómo el equipo actúa en rescates de práctica es muy cercano a cómo actuará en el real'?",
        options: [
            { letter: "a", text: "Porque los rescates de práctica son más peligrosos." },
            { letter: "b", text: "Porque los hábitos de comunicación, la velocidad de montaje de sistemas y la coordinación entre equipos son comportamientos aprendidos e instintivos. Bajo presión real, el equipo revierte a lo que practicó." },
            { letter: "c", text: "Porque las víctimas de práctica también están estresadas." },
            { letter: "d", text: "Porque el equipo de práctica es idéntico al de rescate real." }
        ],
        correctAnswer: "b",
        explanation: "Bajo estrés, los humanos caen al nivel de su entrenamiento, no suben al nivel de sus expectativas. Si en el entrenamiento se comunican mal o montan sistemas incorrectos, lo harán igual (o peor) en la emergencia real."
    },
    {
        question: "Durante la fase de 'Access' (Acceso), la primera prioridad al llegar a una posible ubicación de la víctima es:",
        options: [
            { letter: "a", text: "Montar inmediatamente el sistema de cuerdas." },
            { letter: "b", text: "Hacer contacto de voz con el sujeto para confirmar ubicación exacta, evaluar su condición inicial y comenzar la estabilización emocional." },
            { letter: "c", text: "Tomar fotografías para el reporte del incidente." },
            { letter: "d", text: "Pedir que todos los rescatistas firmen el libro de entrada." }
        ],
        correctAnswer: "b",
        explanation: "El contacto de voz temprano cumple 3 funciones: confirma ubicación exacta, proporciona una evaluación inicial del estado del paciente, y comienza a calmarlo para prevenir movimientos peligrosos antes de la llegada del rescatista."
    },
    {
        question: "La fase más variable del proceso L.A.S.T. (dependiente del terreno) es:",
        options: [
            { letter: "a", text: "Locate (Localizar)." },
            { letter: "b", text: "Access (Acceder)." },
            { letter: "c", text: "Stabilize (Estabilizar)." },
            { letter: "d", text: "Transport (Transportar), porque la táctica de evacuación cambia completamente según el terreno: pick-off, alto ángulo, bajo ángulo, highline, etc." }
        ],
        correctAnswer: "d",
        explanation: "Las fases L, A y S tienen un protocolo médico y de seguridad relativamente constante. La 'T' (Transport) depende enteramente del entorno: ¿hay espacio para una camilla horizontal? ¿Hay un barranco que cruzar? ¿Necesitan un highline? Cada rescate es diferente aquí."
    },
    {
        question: "¿Qué es un 'size-up' (evaluación del incidente) y cuándo debe hacerse?",
        options: [
            { letter: "a", text: "Es la revisión del equipo que se hace solo antes de salir de la estación." },
            { letter: "b", text: "Es la evaluación continua de las condiciones del incidente: peligros, recursos necesarios, estado del sujeto y tareas por completar. Comienza desde el despacho y se actualiza constantemente durante toda la operación." },
            { letter: "c", text: "Es la medida del peso del paciente para calcular el M/A necesario." },
            { letter: "d", text: "Solo se hace una vez al llegar a la escena." }
        ],
        correctAnswer: "b",
        explanation: "El size-up es un proceso dinámico y continuo, no un checklist estático. Las condiciones cambian: el estado del paciente empeora, nuevos peligros emergen, el clima cambia. El Ops Chief y Safety Officer deben hacer size-up permanente."
    },
    {
        question: "¿Cómo utiliza el equipo de rigging el 'preplan' para ser más eficiente al llegar a la escena?",
        options: [
            { letter: "a", text: "El preplan solo aplica para el equipo médico." },
            { letter: "b", text: "El preplan pre-asigna los roles dentro del equipo de rigging (quién establece el anclaje principal, quién monta el belay, quién opera el sistema de bajada) para que al llegar, cada persona sepa exactamente qué hacer sin necesidad de debate." },
            { letter: "c", text: "El preplan se discute al llegar, no antes." },
            { letter: "d", text: "Solo el Supervisor del Grupo conoce el preplan." }
        ],
        correctAnswer: "b",
        explanation: "Un equipo de rigging sin preplan llegará al incidente decidiendo 'quién hace qué' en ese momento, perdiendo 5-15 minutos críticos. Con preplan, esa decisión ya está tomada y cada persona toma su posición y actúa."
    },
    {
        question: "¿Qué debe reconocer un rescatista cuando el incidente está en un 'Operations Level' vs. un 'Technical Level'?",
        options: [
            { letter: "a", text: "No hay diferencia entre estos niveles." },
            { letter: "b", text: "En el nivel de Operaciones, el rescatista puede apoyar (tomar señales, cargar equipo, hacer belay básico) pero no debe operar sistemas técnicos avanzados. El nivel Técnico requiere formación especializada certificada." },
            { letter: "c", text: "El nivel técnico se refiere solo a incidentes eléctricos." },
            { letter: "d", text: "Ambos niveles requieren exactamente las mismas destrezas." }
        ],
        correctAnswer: "b",
        explanation: "NFPA 1006 distingue entre rescatistas de nivel Operations (apoyo de primera respuesta) y Technical (formación completa de rescate técnico). Operar más allá de tu nivel de certificación pone en riesgo al paciente y al rescatista."
    },
    {
        question: "En la fase de 'Stabilize', si el paciente tiene una condición médica grave (ej. ataque cardíaco), ¿qué puede justificar iniciar la evacuación ANTES de completar la estabilización ideal?",
        options: [
            { letter: "a", text: "Nada, siempre se estabiliza completamente primero." },
            { letter: "b", text: "El principio de que algunos tratamientos definitivos solo son posibles en el hospital (ej. cirugía cardíaca). Si el tiempo en el campo aumenta la mortalidad, la evacuación RÁPIDA es el mejor tratamiento, aunque sea incómodo o imperfecto." },
            { letter: "c", text: "Solo si el paciente lo solicita." },
            { letter: "d", text: "Solo si hay helicóptero disponible." }
        ],
        correctAnswer: "b",
        explanation: "El concepto de 'Platinum 10 minutes' o 'load and go' aplica aquí: algunas condiciones críticas (trauma masivo, infarto) tienen mejor pronóstico con evacuación rápida e imperfecta que con estabilización perfecta y evacuación tardía."
    }
];
