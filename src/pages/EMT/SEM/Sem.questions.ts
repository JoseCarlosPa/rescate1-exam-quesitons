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
        question: "¿Qué significa la sigla SEM en el contexto prehospitalario?",
        options: [
            { letter: "a", text: "Servicio Especial de Medicina" },
            { letter: "b", text: "Sistema de Emergencias Médicas" },
            { letter: "c", text: "Socorro Estatal Médico" },
            { letter: "d", text: "Salud En Movimiento" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es el objetivo principal del Sistema de Emergencias Médicas (SEM)?",
        options: [
            { letter: "a", text: "Recaudar fondos para hospitales" },
            { letter: "b", text: "Coordinar la atención rápida, eficiente y adecuada ante una emergencia médica" },
            { letter: "c", text: "Reducir costos de operación médica" },
            { letter: "d", text: "Capacitar bomberos exclusivamente" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué componente del SEM proporciona la atención inicial en la escena?",
        options: [
            { letter: "a", text: "Hospital de recepción" },
            { letter: "b", text: "Centro de despacho" },
            { letter: "c", text: "Primer respondiente" },
            { letter: "d", text: "Unidad de cuidados intensivos" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Cuál de los siguientes es un objetivo específico del SEM?",
        options: [
            { letter: "a", text: "Reducir el tiempo de respuesta" },
            { letter: "b", text: "Aumentar la burocracia" },
            { letter: "c", text: "Descentralizar la atención hospitalaria" },
            { letter: "d", text: "Eliminar la atención prehospitalaria" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué tipo de comunicación coordina al SEM?",
        options: [
            { letter: "a", text: "Comunicación solo verbal" },
            { letter: "b", text: "Comunicación interinstitucional organizada" },
            { letter: "c", text: "Correos electrónicos" },
            { letter: "d", text: "Mensajes de texto" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes NO es un componente esencial del SEM?",
        options: [
            { letter: "a", text: "Acceso al sistema (llamadas de emergencia)" },
            { letter: "b", text: "Respuesta de primeros intervinientes" },
            { letter: "c", text: "Atención prehospitalaria básica y avanzada" },
            { letter: "d", text: "Publicidad de productos médicos" },
        ],
        correctAnswer: "d",
    },
    {
        question: "¿Qué número de emergencias unifica la atención en México?",
        options: [
            { letter: "a", text: "066" },
            { letter: "b", text: "060" },
            { letter: "c", text: "911" },
            { letter: "d", text: "112" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué nivel de atención proporciona un TAMP-B (Técnico en Atención Médica Prehospitalaria Básica)?",
        options: [
            { letter: "a", text: "Atención avanzada" },
            { letter: "b", text: "Atención básica de soporte vital" },
            { letter: "c", text: "Cuidados hospitalarios" },
            { letter: "d", text: "Diagnóstico clínico definitivo" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué elemento permite la activación del SEM?",
        options: [
            { letter: "a", text: "Central de despachos de emergencias" },
            { letter: "b", text: "Hospital de segundo nivel" },
            { letter: "c", text: "Farmacias locales" },
            { letter: "d", text: "Centros comerciales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué institución regula el SEM en México a nivel federal?",
        options: [
            { letter: "a", text: "Protección Civil" },
            { letter: "b", text: "Secretaría de Salud" },
            { letter: "c", text: "IMSS" },
            { letter: "d", text: "Cruz Roja" },
        ],
        correctAnswer: "b",
    },

    {
        question: "¿Qué profesional coordina la transferencia del paciente hacia el hospital adecuado?",
        options: [
            { letter: "a", text: "Paramédico" },
            { letter: "b", text: "Despachador médico" },
            { letter: "c", text: "Director de hospital" },
            { letter: "d", text: "Farmacéutico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué define mejor el término 'Tiempo de Oro' en el SEM?",
        options: [
            { letter: "a", text: "Tiempo máximo para cargar al paciente" },
            { letter: "b", text: "Tiempo en que una atención temprana mejora el pronóstico" },
            { letter: "c", text: "Tiempo en el que se debe entregar el reporte" },
            { letter: "d", text: "Tiempo de traslado mínimo obligatorio" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál de los siguientes sería un primer respondiente en SEM?",
        options: [
            { letter: "a", text: "Personal de bomberos entrenado en RCP" },
            { letter: "b", text: "Farmacéutico" },
            { letter: "c", text: "Recepcionista de hospital" },
            { letter: "d", text: "Trabajador social" },
        ],
        correctAnswer: "a",
    },
    {
        question: "El primer eslabón de la cadena de supervivencia es:",
        options: [
            { letter: "a", text: "Desfibrilación temprana" },
            { letter: "b", text: "Reconocimiento temprano y activación del SEM" },
            { letter: "c", text: "RCP de calidad" },
            { letter: "d", text: "Cuidado hospitalario especializado" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué describe mejor la función del centro de despacho médico?",
        options: [
            { letter: "a", text: "Emitir facturas de servicios" },
            { letter: "b", text: "Coordinar unidades de emergencia y priorizar llamadas" },
            { letter: "c", text: "Realizar diagnósticos médicos" },
            { letter: "d", text: "Atender únicamente consultas médicas" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué significa BLS dentro del sistema SEM?",
        options: [
            { letter: "a", text: "Base Local de Servicios" },
            { letter: "b", text: "Basic Life Support (Soporte Vital Básico)" },
            { letter: "c", text: "Balance Lumbar Sistémico" },
            { letter: "d", text: "Brigada Local de Salud" },
        ],
        correctAnswer: "b",
    },
    {
        question: "Una ambulancia de Soporte Vital Avanzado (ALS) cuenta con:",
        options: [
            { letter: "a", text: "Únicamente paramédicos básicos" },
            { letter: "b", text: "Personal capacitado para realizar intervenciones avanzadas como intubación y manejo farmacológico" },
            { letter: "c", text: "Solo equipo básico de primeros auxilios" },
            { letter: "d", text: "Médicos especialistas en pediatría" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué parte del SEM incluye la transferencia del paciente entre hospitales?",
        options: [
            { letter: "a", text: "Atención primaria" },
            { letter: "b", text: "Atención secundaria" },
            { letter: "c", text: "Atención terciaria" },
            { letter: "d", text: "Atención prehospitalaria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué factor afecta más el éxito del SEM?",
        options: [
            { letter: "a", text: "Equipamiento costoso" },
            { letter: "b", text: "Tiempo de respuesta rápido" },
            { letter: "c", text: "Decoración de la ambulancia" },
            { letter: "d", text: "Número de empleados administrativos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué documento regula la operación de ambulancias en México?",
        options: [
            { letter: "a", text: "Código de Tránsito" },
            { letter: "b", text: "NOM-034-SSA3-2013" },
            { letter: "c", text: "Ley Federal del Trabajo" },
            { letter: "d", text: "Reglamento de Salud Ambiental" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué otro nombre recibe el primer respondiente?",
        options: [
            { letter: "a", text: "Paciente secundario" },
            { letter: "b", text: "Primer contacto" },
            { letter: "c", text: "Evaluador inicial" },
            { letter: "d", text: "Despachador médico" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué paso sigue después de activar el SEM?",
        options: [
            { letter: "a", text: "Despacho de la unidad adecuada" },
            { letter: "b", text: "Esperar confirmación de familiares" },
            { letter: "c", text: "Solicitar la opinión médica" },
            { letter: "d", text: "Publicar en redes sociales" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué significa una unidad de primer contacto?",
        options: [
            { letter: "a", text: "La primera ambulancia en llegar al lugar" },
            { letter: "b", text: "La última ambulancia en salir del hospital" },
            { letter: "c", text: "Personal administrativo de hospital" },
            { letter: "d", text: "Despacho de central de comunicaciones" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Cuál es el primer eslabón de la atención médica de urgencias?",
        options: [
            { letter: "a", text: "Cuidado hospitalario" },
            { letter: "b", text: "Reconocimiento y activación del SEM" },
            { letter: "c", text: "Atención especializada" },
            { letter: "d", text: "Transporte interhospitalario" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué sistema ayuda a garantizar que el paciente reciba la atención adecuada en el hospital correcto?",
        options: [
            { letter: "a", text: "Triángulo de trauma" },
            { letter: "b", text: "Sistema de Triage" },
            { letter: "c", text: "Base de datos de seguros" },
            { letter: "d", text: "Registro civil" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué personal NO forma parte directa del SEM?",
        options: [
            { letter: "a", text: "Paramédicos" },
            { letter: "b", text: "Despachadores médicos" },
            { letter: "c", text: "Administradores de hospital" },
            { letter: "d", text: "Bomberos entrenados" },
        ],
        correctAnswer: "c",
    },
    {
        question: "¿Qué función cumple el primer respondiente?",
        options: [
            { letter: "a", text: "Evaluar la escena, atender necesidades inmediatas y activar SEM" },
            { letter: "b", text: "Brindar asesoría financiera" },
            { letter: "c", text: "Completar encuestas hospitalarias" },
            { letter: "d", text: "Recoger pagos médicos" },
        ],
        correctAnswer: "a",
    },
    {
        question: "¿Qué característica es deseable en un SEM eficiente?",
        options: [
            { letter: "a", text: "Fragmentación de servicios" },
            { letter: "b", text: "Acceso universal rápido" },
            { letter: "c", text: "Procesos burocráticos extensos" },
            { letter: "d", text: "Atención solo hospitalaria" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Cuál es una función del SEM además de la atención inmediata?",
        options: [
            { letter: "a", text: "Recaudación de impuestos" },
            { letter: "b", text: "Prevención y educación en salud" },
            { letter: "c", text: "Construcción de hospitales" },
            { letter: "d", text: "Publicación de libros médicos" },
        ],
        correctAnswer: "b",
    },
    {
        question: "¿Qué término define el traslado rápido y seguro de un paciente a un hospital adecuado?",
        options: [
            { letter: "a", text: "Evacuación" },
            { letter: "b", text: "Aislamiento" },
            { letter: "c", text: "Triage" },
            { letter: "d", text: "Inmovilización" },
        ],
        correctAnswer: "a",
    },
];
