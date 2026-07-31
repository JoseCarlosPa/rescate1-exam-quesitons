import { Question } from "../../../../question";

export const antennaFaqData = [
    {
        question: "¿Por qué los rescates en torres de antena y estructuras similares son cada vez más frecuentes?",
        answer: "Por dos razones: 1) El aumento explosivo de torres de telecomunicaciones (celulares, transmisión) en las últimas décadas. 2) Las mejores regulaciones de protección contra caídas hacen que los trabajadores usen sistemas de arresto de caídas que los detienen suspendidos en el aire, pero no los bajan — requiriendo rescate."
    },
    {
        question: "¿Qué es una 'Drop Line' y cuándo se usa en rescates de torres?",
        answer: "Es una cuerda pequeña (8-9mm) que el rescatista lleva en una bolsa mientras sube. Una vez junto a la víctima, usa la Drop Line para jalar desde el suelo el equipo adicional que era demasiado pesado para cargarlo durante la escalada: sistema de rescate completo, camilla, equipo médico."
    },
    {
        question: "¿Por qué el manual recomienda trabajar 'desde el suelo' siempre que sea posible en rescates de torres?",
        answer: "Porque minimiza el número de rescatistas expuestos al riesgo en altura, es más rápido (no hay que escalar), y permite construir sistemas más potentes y cómodos (polipastos, sistemas de descenso) sin las limitaciones de espacio en la cima."
    },
    {
        question: "¿Qué dificultad particular presenta el paso de personas en una escalera enjaulada (caged ladder)?",
        answer: "La jaula de protección que rodea la escalera tiene espacio para una sola persona. Para que el rescatista pase junto a la víctima, uno de los dos puede tener que escalar por el exterior de la jaula, lo que requiere protección adicional contra caídas."
    },
    {
        question: "¿Por qué el primer paso del rescatista al llegar junto a una víctima en una torre es asegurarla a la estructura, aunque parezca innecesario?",
        answer: "Porque la víctima puede haber consumido toda su energía y fuerza agarrándose hasta que llegara la ayuda. Al ver al rescatista, puede soltarse inconscientemente. Asegurarla con arnés y lanyard es imperativo antes de hacer cualquier otra cosa."
    }
];

export const antennaTowerRescueQuestions: Question[] = [
    {
        question: "En un rescate en una torre de antena, el manual recomienda operar los sistemas desde el suelo siempre que sea posible. ¿La razón principal es?",
        options: [
            { letter: "a", text: "Para ahorrar cuerdas." },
            { letter: "b", text: "Menos rescatistas en altura = menor riesgo global. Es más seguro, más rápido (no hay que escalar) y permite mayor libertad para construir sistemas de polipasto y descenso sin las limitaciones del espacio en la cima." },
            { letter: "c", text: "Porque el equipo de tierra tiene mejores herramientas." },
            { letter: "d", text: "Porque las torres son siempre demasiado altas para subir." }
        ],
        correctAnswer: "b",
        explanation: "Cada persona adicional en la cima de una torre es un riesgo adicional. El principio 'el mínimo número de rescatistas en el peligro' aplica igual en torres que en acantilados."
    },
    {
        question: "¿Cuál es el PRIMER acto que un rescatista debe realizar al llegar junto a una víctima atrapada en una torre, antes de hacer la evaluación médica?",
        options: [
            { letter: "a", text: "Tomar fotografías para el informe." },
            { letter: "b", text: "Asegurar al sujeto a la estructura con un arnés de rescate (CMC Lifesaver o similar) y un lanyard, para prevenir que caiga mientras el rescatista trabaja." },
            { letter: "c", text: "Comenzar la RCP." },
            { letter: "d", text: "Pedir refuerzos." }
        ],
        correctAnswer: "b",
        explanation: "La persona puede haber agotado toda su fuerza esperando ayuda. Al llegar el rescatista, la víctima puede relajarse y soltarse sin querer. La fijación a la estructura es el primer paso, siempre."
    },
    {
        question: "Un rescatista sube ligero a una torre de 45 metros llevando solo una bolsa pequeña. ¿Qué contiene esa bolsa principalmente?",
        options: [
            { letter: "a", text: "Comida y agua." },
            { letter: "b", text: "Una Drop Line (cuerda delgada de 8-9mm) que usará para jalar desde el suelo el equipo de rescate completo que era demasiado pesado para cargar durante la escalada." },
            { letter: "c", text: "Equipo médico avanzado." },
            { letter: "d", text: "Un sistema de radio pesado." }
        ],
        correctAnswer: "b",
        explanation: "La Drop Line es ligera y pequeña. Una vez el rescatista está arriba, la deja caer a tierra. El equipo de tierra amarra el sistema de rescate completo y el rescatista lo jala. Es la forma inteligente de mover equipo pesado en vertical."
    },
    {
        question: "¿Cuándo se considera necesario un segundo rescatista en la plataforma elevada junto a la víctima?",
        options: [
            { letter: "a", text: "Siempre, en cualquier rescate en torre." },
            { letter: "b", text: "Cuando la víctima necesita que le coloquen un arnés de rescate (no traía puesto), cuando se requiere soporte para la evaluación médica, o cuando el terreno de la escalera impide que un solo rescatista maneje la situación." },
            { letter: "c", text: "Nunca, el rescatista siempre trabaja solo en altura." },
            { letter: "d", text: "Solo si la víctima pesa más de 90 kg." }
        ],
        correctAnswer: "b",
        explanation: "La decisión de cuántos rescatistas suben es táctica. Más personas en altura = más riesgo y más carga en la estructura. Solo sube lo indispensable."
    },
    {
        question: "Respecto a los sistemas de protección contra caídas instalados permanentemente en las torres (fall protection), ¿cuál es su limitación para el rescatista?",
        options: [
            { letter: "a", text: "Son demasiado débiles para un rescatista." },
            { letter: "b", text: "Están diseñados para proteger al trabajador de la estructura que los usa (generalmente una persona), pero pueden no ser compatibles o tener capacidad suficiente para el sistema de rescate que el equipo de emergencias necesita instalar." },
            { letter: "c", text: "Los sistemas permanentes siempre fallan en emergencias." },
            { letter: "d", text: "Solo pueden usarse en ángulos menores a 45°." }
        ],
        correctAnswer: "b",
        explanation: "Los sistemas de fall protection de las torres son para el trabajador habitual. El rescatista puede necesitar anclajes adicionales en puntos no previstos para montar su propio sistema de rescate, independiente del que ya está instalado."
    },
    {
        question: "¿Qué tipo de cuerdas recomienda el manual para el rescatista que sube como primera persona a la torre?",
        options: [
            { letter: "a", text: "Cuerdas de 13mm de alto diámetro para máxima resistencia." },
            { letter: "b", text: "Una cuerda pequeña (8-9mm) en bolsa para actuar como Drop Line — pequeña y ligera para no sobrecargar al escalador — que luego se usará para jalar el sistema de rescate completo." },
            { letter: "c", text: "Cuerdas dinámicas de escalada deportiva." },
            { letter: "d", text: "Cuerdas de acero." }
        ],
        correctAnswer: "b",
        explanation: "8-9mm es lo suficientemente fuerte para servir como Drop Line y jalar cargas moderadas, pero significativamente más ligero que una cuerda de rescate estándar de 11-12.5mm. El peso importa cuando el rescatista escala."
    },
    {
        question: "¿Cuál es el objetivo final de un rescate en torre desde el punto de vista del sistema de cuerdas?",
        options: [
            { letter: "a", text: "Usar el sistema de fall protection existente de la torre para bajar a la víctima." },
            { letter: "b", text: "Instalar un sistema completo de rescate (Main + Belay) que permita bajar de forma controlada y segura a la víctima desde su posición hasta el suelo, con la redundancia mínima requerida." },
            { letter: "c", text: "Usar una grúa o helicóptero siempre." },
            { letter: "d", text: "Esperar a que la víctima baje por sus propios medios." }
        ],
        correctAnswer: "b",
        explanation: "El sistema de rescate propio (Main + Belay) montado por el equipo de rescate es el estándar. Los equipos de fall protection existentes NO son sistemas de rescate."
    },
    {
        question: "La regla de 'trabajar desde el suelo o desde una plataforma estable' en rescates de torres implica que:",
        options: [
            { letter: "a", text: "El rescatista de tierra nunca habla con el de la cima." },
            { letter: "b", text: "El operador del sistema de descenso/belay debe estar en el suelo (o plataforma estable), comunicado por radio con el rescatista en la cima, para que la operación pueda controlarse desde la posición más segura posible." },
            { letter: "c", text: "Solo el comandante puede estar en tierra." },
            { letter: "d", text: "La cuerda de descenso siempre debe bajar al suelo primero." }
        ],
        correctAnswer: "b",
        explanation: "El operador del sistema de descenso en el suelo tiene: espacio para trabajar, visión completa de la bajada, y está fuera del peligro de la zona alta. Es la configuración tácticamente más inteligente."
    },
    {
        question: "¿Cuál es la consideración más importante al elegir el punto de anclaje para el sistema de rescate en una torre metálica?",
        options: [
            { letter: "a", text: "El color del metal." },
            { letter: "b", text: "La solidez estructural del punto (un miembro principal de la torre, no una escotilla o barandilla secundaria) y su posición sobre la víctima para que el sistema tire hacia arriba en línea recta, minimizando fricción y ángulos." },
            { letter: "c", text: "Que esté lo más cercano posible al suelo." },
            { letter: "d", text: "Que sea el punto más brillante de la torre." }
        ],
        correctAnswer: "b",
        explanation: "Un anclaje mal seleccionado en una torre puede fallar bajo la carga combinada de víctima + rescatista. Los miembros principales estructurales (diagonales gruesas, plataformas principales) son los candidatos correctos."
    },
    {
        question: "¿Por qué los rescates en torres de aerogeneradores (wind turbines) y torres de transmisión de energía tienen características similares a los de antena?",
        options: [
            { letter: "a", text: "Porque todas son de color rojo." },
            { letter: "b", text: "Porque comparten los mismos desafíos: acceso vertical único (escaleras enjauladas o exteriores), trabajadores con sistemas de fall arrest que pueden quedar suspendidos, espacios confinados en la cima, y gran altura que dificulta la comunicación y el acceso del equipo de rescate." },
            { letter: "c", text: "Porque todas tienen la misma altura." },
            { letter: "d", text: "Por regulación OSHA común exclusiva." }
        ],
        correctAnswer: "b",
        explanation: "Las torres de viento tienen nacelles (cabinas de máquinas) a 80-100+ metros, sin más acceso que la escalera interna. Un técnico incapacitado ahí es esencialmente el mismo problema que en una torre de antena: acceso vertical difícil en gran altura."
    }
];
