import { Question } from "../../../../question";

export const ropeAccessFaqData = [
    {
        question: "¿Cuál es la diferencia más importante entre el Rope Access (Acceso por Cuerdas) y el Rope Rescue (Rescate en Cuerdas)?",
        answer: "El Rope Access es un trabajo planificado para un trabajador certificado en un lugar previamente inspeccionado. El Rope Rescue es una emergencia no planificada con una víctima que necesita tratamiento médico, en un lugar no controlado, con presión de tiempo."
    },
    {
        question: "¿Qué organización certifica a los trabajadores de Rope Access en EE.UU. y cuál es su acrónimo?",
        answer: "SPRAT: Society of Rope Access Technicians (Sociedad de Técnicos de Acceso por Cuerdas). Ofrece certificación que acredita que un técnico tiene el entrenamiento y experiencia para trabajar de forma segura en altura."
    },
    {
        question: "¿Por qué el sistema de cuerdas en el Rope Access está diseñado solo para 1 persona, mientras que en el Rope Rescue el sistema soporta a múltiples personas?",
        answer: "En el Rope Access, el trabajo es planificado, se conoce exactamente quién trabaja y qué carga máxima hay. En el Rescue, el sistema debe soportar al menos a la víctima + un rescatista (2 personas), más el equipo de camilla y cualquier contingencia médica no anticipada."
    },
    {
        question: "¿Qué es una 'Rope-to-Rope Transfer' y cuándo se necesita en un rescate?",
        answer: "Es la técnica de pasar de una cuerda a otra sin tocar el suelo, usando dispositivos de ascenso/descenso. Es crítica cuando se necesita pasar un nudo, un punto de anclaje intermedio, o cuando se cambia entre un sistema de rapel y un sistema de ascenso en el mismo rescate."
    },
    {
        question: "¿Cuál es la obligación de un técnico de Rope Access antes de iniciar cualquier trabajo en altura?",
        answer: "Inspección previa del sitio de trabajo + redacción y aprobación de un plan de trabajo escrito que incluye medidas de seguridad. Nada en el Rope Access se improvisa sobre la marcha; todo está documentado y aprobado antes de colgar la primera cuerda."
    }
];

export const ropeAccessQuestions: Question[] = [
    {
        question: "La diferencia operativa CLAVE entre el Rope Access y el Rope Rescue es que el Rope Access siempre:",
        options: [
            { letter: "a", text: "Usa cuerdas más delgadas y fuertes." },
            { letter: "b", text: "Es planificado con anticipación: la ubicación se inspecciona, se redacta un plan de trabajo con medidas de seguridad, y todo se aprueba antes de iniciar. No hay sorpresas." },
            { letter: "c", text: "Es más peligroso que el rescate." },
            { letter: "d", text: "Solo lo hacen militares." }
        ],
        correctAnswer: "b",
        explanation: "El Rope Rescue sucede en ubicaciones no planificadas, a veces inaccesibles, con pacientes que necesitan tratamiento urgente. El Rope Access es lo opuesto: todo preplaneado, lugar conocido, sin urgencia médica."
    },
    {
        question: "Un técnico de Rope Access (SPRAT) trabaja en una fachada de vidrio. Su sistema de cuerdas está diseñado para soportar la carga de:",
        options: [
            { letter: "a", text: "El técnico más cualquier persona que se suba." },
            { letter: "b", text: "Únicamente el técnico certificado que lo opera." },
            { letter: "c", text: "Dos técnicos simultáneamente." },
            { letter: "d", text: "El técnico más el equipo de herramientas industrial pesado." }
        ],
        correctAnswer: "b",
        explanation: "Un sistema de Rope Access es de una persona. Si se necesita el rescate de ese técnico, el equipo de rescate debe instalar un sistema diferente capaz de soportar al paciente + al rescatista."
    },
    {
        question: "¿Por qué los rescates desde torres de antena y estructuras similares son cada vez más comunes?",
        options: [
            { letter: "a", text: "Porque las torres son más pequeñas que antes." },
            { letter: "b", text: "Porque el número de torres ha aumentado enormemente con las telecomunicaciones modernas y las regulaciones de protección contra caídas requieren que los trabajadores usen sistemas que los detienen ante una caída, a veces dejándolos atrapados en altura." },
            { letter: "c", text: "Porque los trabajadores de torres no reciben entrenamiento." },
            { letter: "d", text: "Por cambios en la dieta de los trabajadores de altura." }
        ],
        correctAnswer: "b",
        explanation: "El sistema de detención de caídas (fall arrest) cumple su función: detiene la caída. Pero un trabajador colgando inconsciente o lesionado de su arnés en lo alto de una torre necesita ser rescatado — y eso requiere equipos técnicos especializados."
    },
    {
        question: "Al rescatar a alguien atrapado en una torre o escalera enjaulada, el primer paso después de llegar es:",
        options: [
            { letter: "a", text: "Bajar la víctima inmediatamente." },
            { letter: "b", text: "Asegurar la víctima a la estructura con un arnés de rescate y lanyard para prevenir una caída adicional, luego hacer la evaluación inicial y comunicar el estado a tierra." },
            { letter: "c", text: "Llamar al fabricante de la torre." },
            { letter: "d", text: "Esperar al helicóptero." }
        ],
        correctAnswer: "b",
        explanation: "La víctima puede haber gastado toda su energía manteniéndose agarrada. Al llegar el rescatista, la víctima puede soltarse. El primer acto es fijarla a la estructura antes de hacer cualquier otra cosa."
    },
    {
        question: "Una 'Drop Line' (línea de arrastre) se usa en rescates de torres cuando:",
        options: [
            { letter: "a", text: "El rescatista quiere descender sin control." },
            { letter: "b", text: "El rescatista ha subido a la ubicación de la víctima y necesita jalar desde abajo equipo adicional (sistema de rescate completo, camilla, equipos médicos) que era demasiado pesado para cargar durante la escalada." },
            { letter: "c", text: "Para comunicarse con el equipo de tierra." },
            { letter: "d", text: "Para descender al paciente sin sistema de cuerdas." }
        ],
        correctAnswer: "b",
        explanation: "Subir una torre de 50 metros con todo el equipo de rescate a cuestas es agotador e inseguro. El rescatista sube ligero con una Drop Line. Una vez arriba, jala lo que necesita."
    },
    {
        question: "En una escalera enjaulada (caged ladder), pasar a otro rescatista hacia arriba o hacia abajo es especialmente difícil porque:",
        options: [
            { letter: "a", text: "Las escaleras enjauladas son muy anchas." },
            { letter: "b", text: "La jaula que protege al escalador de caídas frontales también limita el espacio lateral, haciendo casi imposible que dos personas se crucen. El rescatista puede necesitar subir por fuera de la jaula." },
            { letter: "c", text: "Las escaleras de jaula no tienen peldaños." },
            { letter: "d", text: "La jaula es de material no conductor." }
        ],
        correctAnswer: "b",
        explanation: "El espacio mínimo de la jaula (diseñado para una persona) obliga a maniobras complicadas para que dos rescatistas se crucen. Pasar por fuera de la jaula es riesgoso y requiere protección adicional de caídas."
    },
    {
        question: "¿Cuál es la ventaja de trabajar el sistema de rescate desde el SUELO vs desde la cima de la torre?",
        options: [
            { letter: "a", text: "No hay ventaja, ambas posiciones son equivalentes." },
            { letter: "b", text: "Operar desde el suelo es más rápido (no hay que escalar), coloca a menos rescatistas en riesgo en altura, y facilita la construcción de sistemas de polipasto y descenso sin las limitaciones del espacio en la cima." },
            { letter: "c", text: "Desde el suelo no se puede ver a la víctima." },
            { letter: "d", text: "Desde el suelo se necesita más equipo." }
        ],
        correctAnswer: "b",
        explanation: "Cada rescatista adicional en la cima de una torre es otro punto de riesgo. Minimizar el personal en altura y maximizar el trabajo desde el suelo (con Drop Lines, sistemas de polipasto al piso) es la filosofía más segura."
    },
    {
        question: "La norma NFPA 1006 establece los requerimientos profesionales para los rescatistas. ¿Cuáles secciones aplican específicamente al Rope Access?",
        options: [
            { letter: "a", text: "5.1.4 y 5.1.5 únicamente." },
            { letter: "b", text: "5.2.2, 5.3.3, 5.3.7, 5.3.9, 5.3.1 — secciones que cubren acceso por cuerda, transferencia de cuerda a cuerda, y rescate de compañero." },
            { letter: "c", text: "Solo aplica el OSHA 1910." },
            { letter: "d", text: "NFPA 1006 no cubre Rope Access." }
        ],
        correctAnswer: "b",
        explanation: "NFPA 1006 tiene secciones dedicadas al Rope Access Technician. Estas secciones cubren las habilidades específicas: subir una cuerda fija pasando obstáculos, convertir de ascenso a descenso, transferencias de cuerda a cuerda y rescate de compañero."
    },
    {
        question: "¿Qué diferencia a un rescatista que puede trabajar en una torre de un rescatista estándar?",
        options: [
            { letter: "a", text: "Solo la edad y la experiencia general." },
            { letter: "b", text: "El entrenamiento específico para estructuras artificiales: técnicas de escalada con protección, uso de sistemas de bypass en escaleras enjauladas, conocimiento de los puntos de anclaje en diferentes tipos de torres, y planificación de rescate en estructuras sin anclajes preparados." },
            { letter: "c", text: "El color de su arnés." },
            { letter: "d", text: "Tener una certificación de electricidad." }
        ],
        correctAnswer: "b",
        explanation: "Las estructuras artificiales (torres, grúas, silos) tienen características únicas que no aparecen en el entrenamiento de rescate en acantilados naturales: anclajes en ángulos extraños, peligros eléctricos, geometrías no estándar."
    },
    {
        question: "Un 'Partner Rescue' en el contexto del Rope Access se refiere a:",
        options: [
            { letter: "a", text: "Rescatar a un familiar desde una estructura." },
            { letter: "b", text: "El protocolo por el cual un técnico de Rope Access puede rescatar a su compañero de trabajo incapacitado usando los sistemas de cuerdas que ya están en uso, sin esperar a un equipo externo de rescate." },
            { letter: "c", text: "Usar la cuerda de otra persona sin permiso." },
            { letter: "d", text: "Un sistema de doble tensión para trabajos en pareja." }
        ],
        correctAnswer: "b",
        explanation: "El Partner Rescue es una habilidad SPRAT obligatoria: si tu compañero de trabajo se incapacita en la soga, debes poder bajarlo o subirlo al lugar seguro más cercano usando el equipo que ya tienen puesto, sin esperar a un equipo externo."
    }
];
