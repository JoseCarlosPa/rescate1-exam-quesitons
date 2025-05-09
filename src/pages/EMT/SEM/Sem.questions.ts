import {Question} from "../../../question";


export const faqData = [
    {
        question: "¿Qué es el Sistema SEM?",
        answer: "El Sistema de Emergencias Médicas (SEM) es un conjunto de servicios de atención médica prehospitalaria, que proporciona atención inmediata en el lugar del incidente y transporte adecuado a los centros de salud."
    },
    {
        question: "¿Cómo se activa el Sistema SEM en caso de emergencia?",
        answer: "Para activar el SEM, se debe llamar al número de emergencia 911, proporcionando detalles sobre la ubicación, el tipo de emergencia y la condición de la víctima. El centro de atención coordina el envío de recursos y da instrucciones iniciales."
    },
    {
        question: "¿Qué tipos de recursos forman parte del Sistema SEM?",
        answer: "El SEM incluye ambulancias equipadas con personal médico capacitado, centros de atención telefónica y un sistema de coordinación con otras entidades de emergencia como bomberos y seguridad pública."
    },
    {
        question: "¿Cuáles son las funciones principales del SEM?",
        answer: "Las funciones principales del SEM incluyen la atención médica prehospitalaria, el transporte sanitario a hospitales y la coordinación con otras instituciones para una respuesta efectiva a las emergencias."
    },
    {
        question: "¿Cómo está compuesto el personal del SEM?",
        answer: "El personal del SEM está compuesto por paramédicos, médicos de urgencias, y técnicos especializados en atención prehospitalaria, quienes están capacitados para manejar emergencias médicas en el lugar del incidente y durante el traslado."
    },
    {
        question: "¿Cuáles son los protocolos que sigue el SEM para la atención de emergencias?",
        answer: "El SEM sigue protocolos establecidos que incluyen la evaluación inicial del paciente, la estabilización en el lugar, y el traslado a un centro de salud cuando sea necesario. El personal de SEM puede dar instrucciones por teléfono hasta que la ambulancia llegue."
    },
    {
        question: "¿Qué importancia tiene la coordinación con otras entidades en el SEM?",
        answer: "La coordinación con fuerzas de seguridad, bomberos y protección civil es crucial para garantizar una respuesta rápida y segura ante situaciones complejas, como accidentes de tráfico, incendios o desastres naturales."
    },
    {
        question: "¿Cómo se mejora la eficiencia del Sistema SEM?",
        answer: "El SEM mejora su eficiencia mediante la evaluación constante de su desempeño, simulacros y capacitaciones continuas para su personal. También se implementan tecnologías de comunicación y sistemas de gestión para optimizar el tiempo de respuesta."
    },
    {
        question: "¿El SEM cubre emergencias en todo el país?",
        answer: "Sí, el SEM está disponible en la mayoría de los estados de México a través del número de emergencia 911. Sin embargo, la cobertura y la calidad del servicio pueden variar según la ubicación geográfica."
    },
    {
        question: "¿Qué hacer si el SEM tarda en llegar a la escena de emergencia?",
        answer: "Si el SEM tarda en llegar, el personal de emergencia o los testigos deben seguir las instrucciones dadas por el centro de atención y realizar la atención básica que sea posible, como la reanimación cardiopulmonar (RCP) si es necesario."
    }
];

export const semSystemQuestions: Question[] = [
    {
        question: "¿Qué evento histórico impulsó los primeros esfuerzos en atención médica prehospitalaria organizada?",
        options: [
            { letter: "a", text: "La Independencia de México" },
            { letter: "b", text: "La Segunda Guerra Mundial" },
            { letter: "c", text: "La Revolución Mexicana" },
            { letter: "d", text: "La Guerra Civil Española" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué institución fue fundada en 1910 relacionada con atención médica en México?",
        options: [
            { letter: "a", text: "Instituto Mexicano del Seguro Social" },
            { letter: "b", text: "Secretaría de Salud" },
            { letter: "c", text: "Cruz Roja Mexicana" },
            { letter: "d", text: "UNAM Facultad de Medicina" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué documento reveló las deficiencias en la atención prehospitalaria en EE.UU.?",
        options: [
            { letter: "a", text: "El libro naranja" },
            { letter: "b", text: "EMS Agenda for the Future" },
            { letter: "c", text: "Papel Blanco" },
            { letter: "d", text: "Modelo Nacional del PAP" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué libro fue el primero en formar parte de la educación del PAP en 1971?",
        options: [
            { letter: "a", text: "Emergency Medical Response" },
            { letter: "b", text: "Emergency Care and Transportation of the Sick and Injured" },
            { letter: "c", text: "Manual de Urgencias Médicas" },
            { letter: "d", text: "Atención Prehospitalaria Básica" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el primer nivel de capacitación en SEM?",
        options: [
            { letter: "a", text: "Técnico en emergencias médicas" },
            { letter: "b", text: "Técnico paramédico" },
            { letter: "c", text: "Respondiente en emergencias médicas" },
            { letter: "d", text: "Técnico avanzado" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuántas horas de entrenamiento requiere un REM?",
        options: [
            { letter: "a", text: "20 a 40 horas" },
            { letter: "b", text: "40 a 60 horas" },
            { letter: "c", text: "60 a 80 horas" },
            { letter: "d", text: "80 a 100 horas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué nivel de capacitación permite el uso de ventilación mecánica y ECG?",
        options: [
            { letter: "a", text: "Técnico básico" },
            { letter: "b", text: "Técnico avanzado" },
            { letter: "c", text: "Paramédico" },
            { letter: "d", text: "Respondiente básico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el nivel más alto de formación en SEM?",
        options: [
            { letter: "a", text: "Técnico básico" },
            { letter: "b", text: "Técnico avanzado" },
            { letter: "c", text: "Respondiente" },
            { letter: "d", text: "Paramédico" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Cuál de los siguientes es un componente del sistema SEM?",
        options: [
            { letter: "a", text: "Sistema judicial" },
            { letter: "b", text: "Dirección médica" },
            { letter: "c", text: "Red eléctrica" },
            { letter: "d", text: "Infraestructura vial" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuántos componentes tiene el sistema SEM?",
        options: [
            { letter: "a", text: "10" },
            { letter: "b", text: "12" },
            { letter: "c", text: "14" },
            { letter: "d", text: "16" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una función principal del Centro Regulador de Urgencias Médicas?",
        options: [
            { letter: "a", text: "Administrar hospitales privados" },
            { letter: "b", text: "Coordinar recursos y unidades de emergencia" },
            { letter: "c", text: "Capacitar a médicos generales" },
            { letter: "d", text: "Distribuir medicamentos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué institución puede participar de manera voluntaria en el SEM?",
        options: [
            { letter: "a", text: "Cruz Roja Mexicana" },
            { letter: "b", text: "IMSS" },
            { letter: "c", text: "ISSSTE" },
            { letter: "d", text: "Secretaría de Salud" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál NO es una función del Proveedor de Atención Prehospitalaria (PAP)?",
        options: [
            { letter: "a", text: "Atención al paciente" },
            { letter: "b", text: "Mantenimiento de ambulancias" },
            { letter: "c", text: "Seguimiento de protocolos médicos" },
            { letter: "d", text: "Transporte de pacientes" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué atributo es esencial en un PAP?",
        options: [
            { letter: "a", text: "Capacidad de improvisación quirúrgica" },
            { letter: "b", text: "Desempeño académico" },
            { letter: "c", text: "Profesionalismo" },
            { letter: "d", text: "Velocidad al conducir" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué incluye el bienestar del PAP según la OMS?",
        options: [
            { letter: "a", text: "Ausencia de lesiones físicas" },
            { letter: "b", text: "Salud física, mental y social" },
            { letter: "c", text: "Solo salud física" },
            { letter: "d", text: "Disponibilidad de medicamentos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el orden recomendado de prioridades en una escena según el PAP?",
        options: [
            { letter: "a", text: "Paciente, escena, personal" },
            { letter: "b", text: "Escena, paciente, personal" },
            { letter: "c", text: "Personal, escena, paciente" },
            { letter: "d", text: "Paciente, personal, escena" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es una señal de advertencia de estrés?",
        options: [
            { letter: "a", text: "Felicidad extrema" },
            { letter: "b", text: "Aumento de productividad" },
            { letter: "c", text: "Irritabilidad con compañeros" },
            { letter: "d", text: "Aumento de peso saludable" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué estrategia ayuda a controlar el estrés en el PAP?",
        options: [
            { letter: "a", text: "Aislamiento social" },
            { letter: "b", text: "Obsesionarse con los errores" },
            { letter: "c", text: "Buscar ayuda profesional" },
            { letter: "d", text: "Evitar hablar de emociones" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué debe hacerse ante la exposición a sangre del paciente?",
        options: [
            { letter: "a", text: "Ignorar y continuar con la atención" },
            { letter: "b", text: "Reportar después del turno" },
            { letter: "c", text: "Activar el plan de control de infecciones" },
            { letter: "d", text: "Esperar síntomas" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál es un paso después de la exposición a fluidos corporales?",
        options: [
            { letter: "a", text: "Esconder el incidente" },
            { letter: "b", text: "Limpiar el área y reportar" },
            { letter: "c", text: "Continuar con normalidad" },
            { letter: "d", text: "Tomar una siesta" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es un equipo esencial para reducir riesgos en el SEM?",
        options: [
            { letter: "a", text: "Celular con GPS" },
            { letter: "b", text: "Equipo de protección personal" },
            { letter: "c", text: "Manual de procedimientos" },
            { letter: "d", text: "Linterna de alta potencia" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál NO es una respuesta común al estrés?",
        options: [
            { letter: "a", text: "Dolores musculares" },
            { letter: "b", text: "Insomnio" },
            { letter: "c", text: "Aumento de concentración" },
            { letter: "d", text: "Irritabilidad" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué es el 'libro naranja' en SEM?",
        options: [
            { letter: "a", text: "Guía de farmacología avanzada" },
            { letter: "b", text: "Manual de primeros auxilios básicos" },
            { letter: "c", text: "Texto base para PAP publicado en 1971" },
            { letter: "d", text: "Agenda de reuniones del SEM" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué documento estandariza los niveles educativos del SEM?",
        options: [
            { letter: "a", text: "Papel Blanco" },
            { letter: "b", text: "Libro naranja" },
            { letter: "c", text: "EMS Agenda for the Future" },
            { letter: "d", text: "Código SEM" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué modelo establece habilidades mínimas por nivel del PAP?",
        options: [
            { letter: "a", text: "Modelo nacional de SEM" },
            { letter: "b", text: "National EMS Scope of Practice Model" },
            { letter: "c", text: "Manual de Procedimientos Clínicos" },
            { letter: "d", text: "Reglamento de Emergencias Urbanas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué componente del SEM se relaciona con campañas de RCP para la comunidad?",
        options: [
            { letter: "a", text: "Educación pública" },
            { letter: "b", text: "Finanzas del sistema" },
            { letter: "c", text: "Dirección médica" },
            { letter: "d", text: "Evaluación" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué componente del SEM se encarga de revisar la calidad del servicio?",
        options: [
            { letter: "a", text: "Sistemas de información" },
            { letter: "b", text: "Evaluación" },
            { letter: "c", text: "Educación pública" },
            { letter: "d", text: "Recursos humanos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de estos NO es un nivel de capacitación del PAP?",
        options: [
            { letter: "a", text: "Técnico básico en urgencias" },
            { letter: "b", text: "Respondiente en emergencias médicas" },
            { letter: "c", text: "Técnico en emergencias médicas" },
            { letter: "d", text: "Técnico paramédico" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es una fuente de estrés común para el personal del SEM?",
        options: [
            { letter: "a", text: "Jornadas cortas" },
            { letter: "b", text: "Altos salarios" },
            { letter: "c", text: "Turnos prolongados y eventos traumáticos" },
            { letter: "d", text: "Exceso de vacaciones" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué debe hacerse si los ojos fueron expuestos a fluidos corporales?",
        options: [
            { letter: "a", text: "Cubrir los ojos con gasas" },
            { letter: "b", text: "Lavar con agua o solución salina" },
            { letter: "c", text: "Aplicar antibiótico tópico" },
            { letter: "d", text: "Esperar síntomas" },
        ],
        correctAnswer: "b",
    }
];
