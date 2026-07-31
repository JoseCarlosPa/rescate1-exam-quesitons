import { Question } from "../../../../question";

export const organizationFaqData = [
    {
        question: "¿Qué es un 'Rescue Preplan' y por qué es tan valioso para equipos que responden con poca frecuencia?",
        answer: "Es un plan de respuesta predeterminado donde cada miembro del equipo ya sabe su posición y tareas antes de llegar a la escena. Elimina la 'reunión de discusión' al llegar, ahorrando minutos críticos. Es especialmente valioso para equipos voluntarios o de baja frecuencia, donde la práctica constante no repule automáticamente el sistema de comando."
    },
    {
        question: "¿Cuál es la estructura de Comando de Incidente (ICS) para un rescate en cuerdas típico?",
        answer: "Comandante del Incidente → Oficial de Seguridad / Oficial de Enlace / PIO → Jefe de Operaciones → Supervisor del Grupo de Rescate → [Equipo de Rigging / Equipo Médico / Equipo de Camilla]. Los Jefes de Logística, Planeación y Finanzas apoyan en incidentes mayores o prolongados."
    },
    {
        question: "¿Por qué el manual dice que 'el rescate no puede hacerse por comité'?",
        answer: "En una emergencia, la toma de decisiones por consenso de múltiples personas es lenta e ineficiente. El ICS resuelve esto asignando autoridad clara a cada posición. El Comandante del Incidente tiene la autoridad final y toma decisiones rápidas sin necesitar aprobación colectiva."
    },
    {
        question: "¿Qué factores debe evaluar un equipo antes de responder a un rescate técnico?",
        answer: "Sus propias capacidades reales (habilidades + equipo + personal disponible), los recursos externos que puede convocar (otros equipos, agencias), y si el nivel del incidente (Operations vs. Technical) está dentro de su alcance. También debe conocer las limitaciones de sus equipos individuales."
    },
    {
        question: "¿Cuáles son las señales no verbales más importantes en un rescate con cuerdas?",
        answer: "Las señales de cuerda estándar: 1 jalón = STOP, 2 jalones = BAJAR, 3 jalones = SUBIR. También se usan señales de mano y radio. La comunicación no verbal es crítica cuando el ruido, la distancia o la geometría del terreno hacen imposible la comunicación verbal."
    }
];

export const organizationPlanningQuestions: Question[] = [
    {
        question: "Según el sistema ICS para rescate con cuerdas, ¿quién es el responsable DIRECTO de supervisar los equipos de Rigging, Médico y de Camilla en el campo?",
        options: [
            { letter: "a", text: "El Comandante del Incidente." },
            { letter: "b", text: "El Oficial de Seguridad." },
            { letter: "c", text: "El Supervisor del Grupo de Rescate (Rescue Group Supervisor), que reporta al Jefe de Operaciones." },
            { letter: "d", text: "El Jefe de Logística." }
        ],
        correctAnswer: "c",
        explanation: "El Rescue Group Supervisor es el link operativo directo entre el Jefe de Operaciones (que ve el panorama completo) y los equipos tácticos en el campo (Rigging, Medical, Litter Teams)."
    },
    {
        question: "La 'Rescue Preplan' es más valiosa para:",
        options: [
            { letter: "a", text: "Equipos de alta frecuencia que responden diariamente." },
            { letter: "b", text: "Equipos voluntarios o de baja frecuencia que no tienen la práctica rutinaria para pulir automáticamente su sistema de comando ante cada incidente." },
            { letter: "c", text: "Solo se usa en rescates subacuáticos." },
            { letter: "d", text: "Equipos de más de 50 rescatistas." }
        ],
        correctAnswer: "b",
        explanation: "Los bomberos pagados que responden a rescates semanalmente desarrollan fluidez de comando por repetición. Los equipos que responden rara vez necesitan un preplan para compensar la falta de esa práctica implícita."
    },
    {
        question: "En el ICS de rescate, la regla de 'poner al mejor hombre para cada trabajo' implica que:",
        options: [
            { letter: "a", text: "Los nuevos miembros nunca pueden participar en rescates reales." },
            { letter: "b", text: "Los rescates reales son para desplegar las habilidades más refinadas del equipo; las evaluaciones de nuevas habilidades y el desarrollo de miembros inexperimentados se hacen durante los entrenamientos, no durante emergencias con vidas en juego." },
            { letter: "c", text: "El más antiguo siempre manda." },
            { letter: "d", text: "Se necesitan 3 jefes para cada posición." }
        ],
        correctAnswer: "b",
        explanation: "El principio de 'best man for the job' no es discriminatorio — es ético. En una emergencia real, un error por inexperiencia puede costar una vida. El entrenamiento es para crecer; el rescate es para ejecutar."
    },
    {
        question: "¿Cuándo es apropiado que el Comandante del Incidente permita que miembros menos experimentados tomen posiciones activas en una operación real?",
        options: [
            { letter: "a", text: "En cualquier rescate, sin importar la urgencia." },
            { letter: "b", text: "Solo cuando el IC puede determinar que el tiempo ya no es crítico para el resultado (ej. una recuperación de cuerpo), equilibrando la necesidad de entrenamiento con la responsabilidad legal." },
            { letter: "c", text: "Nunca, bajo ninguna circunstancia." },
            { letter: "d", text: "Solo si el paciente lo solicita." }
        ],
        correctAnswer: "b",
        explanation: "Una recuperación de cuerpo (body recovery), donde la urgencia vital ya no existe, puede convertirse en entrenamiento real con supervisión. La clave es que el IC tome esa decisión conscientemente y acepte la responsabilidad."
    },
    {
        question: "Si tu equipo de rescate llega a un incidente que supera sus capacidades técnicas, la acción correcta es:",
        options: [
            { letter: "a", text: "Improvisar hasta resolverlo solos." },
            { letter: "b", text: "Activar recursos externos previamente identificados (otros equipos, agencias especializadas) que tengan las habilidades, equipo o personal que tu equipo no tiene. La preparación incluye conocer QUIÉN puede apoyarte." },
            { letter: "c", text: "Retirarse del incidente sin intentar nada." },
            { letter: "d", text: "Solo el Comandante del Incidente puede pedir apoyo, nunca el equipo en campo." }
        ],
        correctAnswer: "b",
        explanation: "Conocer tus limitaciones Y las fuentes de apoyo disponibles es tan importante como conocer tus capacidades. Un equipo que sabe cuándo y cómo pedir ayuda protege al paciente y a sus propios miembros."
    },
    {
        question: "En comunicación verbal durante un rescate con cuerdas, ¿cuál es la señal de cuerda universal para PARAR (STOP)?",
        options: [
            { letter: "a", text: "3 jalones rápidos." },
            { letter: "b", text: "1 jalón firme." },
            { letter: "c", text: "2 jalones lentos." },
            { letter: "d", text: "4 jalones." }
        ],
        correctAnswer: "b",
        explanation: "El código estándar de señales de cuerda: 1 jalón = STOP. 2 jalones = Bajar (Down). 3 jalones = Subir (Up). Este código debe ser conocido y practicado por todos los miembros antes del rescate."
    },
    {
        question: "¿Cuál es la función del 'Oficial de Seguridad' en el ICS de un rescate con cuerdas?",
        options: [
            { letter: "a", text: "Operar el sistema de cuerdas." },
            { letter: "b", text: "Monitorear todas las operaciones de forma independiente y tiene la autoridad de DETENER cualquier acción que considere insegura, incluso si el Comandante del Incidente ya la aprobó." },
            { letter: "c", text: "Manejar la comunicación con la prensa." },
            { letter: "d", text: "Controlar el belay." }
        ],
        correctAnswer: "b",
        explanation: "El Safety Officer es el único rol en ICS con autoridad unilateral de parar operaciones. Su independencia del Chain of Command es intencional: previene que la presión de tiempo o jerarquía suprima preocupaciones legítimas de seguridad."
    },
    {
        question: "¿Qué departamentos o roles deben realizar entrenamientos CONJUNTOS antes de que se presente un incidente real que los involucre?",
        options: [
            { letter: "a", text: "Solo el equipo de rescate en cuerda, internamente." },
            { letter: "b", text: "Todas las agencias que puedan responder juntas en un incidente real (bomberos, paramédicos, policía, rescate técnico). Los entrenamientos cruzados eliminan fricciones de coordinación y desarrollan confianza mutua." },
            { letter: "c", text: "Solo los comandantes, no el personal de campo." },
            { letter: "d", text: "Solo si hay presupuesto." }
        ],
        correctAnswer: "b",
        explanation: "Un incidente real no es el momento de 'conocerse'. Si nunca has entrenado con la unidad de paramédicos que responderá junto a ti, no sabes cómo se comunican, qué pueden hacer o qué esperan de ti. Los entrenamientos conjuntos construyen ese lenguaje común."
    },
    {
        question: "¿Qué deben hacer los equipos de rescate en cuanto a sus LIMITACIONES, con otras agencias vecinas?",
        options: [
            { letter: "a", text: "Ocultarlas para no parecer débiles." },
            { letter: "b", text: "Comunicar abiertamente sus capacidades Y limitaciones a otras agencias, para que haya claridad sobre cuándo se necesita apoyo externo y quién puede proveerlo." },
            { letter: "c", text: "Solo compartirlas con los superiores internos." },
            { letter: "d", text: "Las limitaciones son irrelevantes en equipos certificados." }
        ],
        correctAnswer: "b",
        explanation: "La humildad táctica es una fortaleza, no una debilidad. Si tu equipo no hace rescate en agua, la agencia vecina que sí lo hace debe saberlo para coordinarse cuando un incidente lo requiera, y viceversa."
    },
    {
        question: "El 'Equipo de Rigging' (Rigging Team) en el ICS de rescate tiene como responsabilidad principal:",
        options: [
            { letter: "a", text: "Dar primeros auxilios al paciente." },
            { letter: "b", text: "El establecimiento inicial de anclajes y sistemas de cuerdas necesarios para apoyar al equipo médico en el acceso al sujeto y su extracción." },
            { letter: "c", text: "Coordinar con la prensa." },
            { letter: "d", text: "Transportar al paciente al hospital." }
        ],
        correctAnswer: "b",
        explanation: "El Rigging Team es la columna vertebral técnica. Mientras el Medical Team llega a la víctima y la estabiliza, el Rigging Team monta los sistemas que harán posible la extracción segura. Trabajan en paralelo y se necesitan mutuamente."
    }
];
