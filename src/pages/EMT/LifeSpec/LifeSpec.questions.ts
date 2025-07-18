import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué etapa de la vida presenta la mayor frecuencia respiratoria?",
        answer: "El neonato, con una frecuencia respiratoria de 30-60 respiraciones por minuto.",
    },
    {
        question: "¿A qué edad suelen comenzar los cambios puberales?",
        answer: "Generalmente entre los 10 y 14 años en adolescentes, marcando el inicio de la pubertad.",
    },
    {
        question: "¿Cuál es una característica importante en la atención de lactantes?",
        answer: "Son respiradores nasales obligados, por lo que cualquier obstrucción nasal puede ser crítica y requiere atención inmediata.",
    },
    {
        question: "¿Cómo cambia la presión arterial a lo largo de la vida?",
        answer: "Aumenta progresivamente desde la infancia hasta la vejez.",
    },
    {
        question: "¿Qué precaución especial debe tenerse con los adultos mayores en atención prehospitalaria?",
        answer: "Considerar la fragilidad ósea, la polifarmacia (uso de múltiples medicamentos) y la posible reducción de la visión periférica o audición.",
    },
    {
        question: "¿Qué sistemas corporales muestran un declive funcional progresivo con la edad?",
        answer: "El sistema cardiovascular y el sistema inmunológico son algunos de los que muestran un declive funcional con la edad.",
    },
    {
        question: "¿Qué importancia tiene la comunicación con los niños escolares durante la atención?",
        answer: "Es fundamental explicar los procedimientos de forma sencilla y honesta para reducir su ansiedad y fomentar su cooperación.",
    },
    {
        question: "¿Qué ocurre con el sistema cardiovascular en los adultos mayores?",
        answer: "Experimenta cambios como la pérdida de elasticidad arterial y el aumento de la resistencia vascular periférica, lo que puede llevar a un incremento en la presión arterial.",
    },
    {
        question: "¿Qué es el Síndrome de Muerte Súbita Infantil (SMSI)?",
        answer: "Es una causa común de muerte inesperada en neonatos, caracterizada por la muerte repentina e inexplicable de un bebé menor de un año.",
    },
    {
        question: "¿Qué etapa de la vida se caracteriza por una rápida expansión del vocabulario y desarrollo de habilidades motoras finas?",
        answer: "La etapa del niño pequeño (1-3 años) se caracteriza por una rápida expansión del vocabulario y el desarrollo de habilidades motoras finas.",
    },
];

export const lifeSpecQuestions: Question[] = [
    {
        question: "¿Cuál de las siguientes afirmaciones es *más* precisa con respecto a los signos vitales en un adulto mayor?",
        options: [
            { letter: "a", text: "La frecuencia cardíaca en reposo tiende a ser significativamente más baja que en adultos jóvenes." },
            { letter: "b", text: "La presión arterial sistólica puede ser más alta debido a la rigidez arterial." },
            { letter: "c", text: "La frecuencia respiratoria suele ser más rápida y superficial que en otras etapas." },
            { letter: "d", text: "La temperatura corporal central es consistentemente más alta." },
        ],
        correctAnswer: "b",
        explanation: "En los adultos mayores, la rigidez de las arterias por el envejecimiento provoca un aumento de la presión arterial sistólica. Este cambio es fisiológico y se debe a la pérdida de elasticidad de los vasos sanguíneos, como lo describe la AAOS."
    },
    {
        question: "¿Qué sistema corporal se ve más debilitado debido a enfermedades relacionadas con la edad, según el capítulo?",
        options: [
            { letter: "a", text: "Nervioso" },
            { letter: "b", text: "Renal" },
            { letter: "c", text: "Sensorial" }, // Esta opción no está en el PDF para la pregunta 4, pero la agregamos para un contexto más amplio.
            { letter: "d", text: "Endocrino" },
        ],
        correctAnswer: "a", // Basado en la respuesta a la pregunta 4 del capítulo 7. Sin embargo, la sección del capítulo no profundiza en cada sistema, por lo que es una pregunta que apela a la memorización de un detalle específico.
        explanation: "El sistema nervioso es uno de los más afectados por el envejecimiento, presentando disminución de reflejos, memoria y coordinación. La AAOS destaca que los cambios neurológicos impactan la independencia y la respuesta a emergencias."
    },
    {
        question: "¿Cuál de los siguientes aspectos afecta *más* a los signos vitales en los adultos mayores?",
        options: [
            { letter: "a", text: "El sistema inmunológico del paciente" },
            { letter: "b", text: "La salud general del paciente" },
            { letter: "c", text: "El sistema cardiovascular del paciente" },
            { letter: "d", text: "La dieta del paciente" },
        ],
        correctAnswer: "c", // Basado en la pregunta 5 del capítulo 7.
        explanation: "El sistema cardiovascular sufre cambios estructurales y funcionales con la edad, como el endurecimiento arterial y la disminución de la eficiencia cardíaca, lo que afecta directamente los signos vitales."
    },
    {
        question: "¿Quién brinda la mayor atención a los adultos mayores en Estados Unidos?",
        options: [
            { letter: "a", text: "Enfermeras de salud en el hogar" },
            { letter: "b", text: "Asilos" },
            { letter: "c", text: "Integrantes de la familia" },
            { letter: "d", text: "Centro de vida asistida" },
        ],
        correctAnswer: "c", // Basado en la pregunta 6 del capítulo 7.
        explanation: "Los integrantes de la familia suelen ser quienes brindan la mayor parte de la atención a los adultos mayores, debido a la cercanía y el conocimiento de sus necesidades. Esto es fundamental en la atención prehospitalaria, ya que la familia puede proporcionar información valiosa sobre el paciente."
    },
    {
        question: "¿Qué sentido disminuye primero en los adultos mayores, siendo a menudo uno de los primeros indicadores de envejecimiento?",
        options: [
            { letter: "a", text: "Gusto" },
            { letter: "b", text: "Tacto" },
            { letter: "c", text: "Oído" },
            { letter: "d", text: "Olfato" },
        ],
        correctAnswer: "c", // Generalmente, la audición (especialmente para sonidos de alta frecuencia) es el primer sentido en declinar significativamente.
        explanation: "La pérdida auditiva en los adultos mayores, conocida como presbiacusia, afecta inicialmente la capacidad para oír sonidos de alta frecuencia. Este deterioro puede impactar la comunicación y la calidad de vida, siendo crucial en la evaluación geriátrica."
    },
    {
        question: "Un paramédico está evaluando a una mujer de 72 años que sufrió una caída. La paciente toma varios medicamentos. ¿Qué influencia podrían tener estos medicamentos en la posible razón de la caída?",
        options: [
            { letter: "a", text: "Podrían causar un aumento de la fuerza muscular, dificultando el equilibrio." },
            { letter: "b", text: "Podrían provocar somnolencia, mareos o hipotensión ortostática, contribuyendo a la caída." },
            { letter: "c", text: "Es probable que mejoren su coordinación, haciendo que la caída sea menos probable." },
            { letter: "d", text: "No hay relación significativa entre los medicamentos y el riesgo de caída en adultos mayores." },
        ],
        correctAnswer: "b",
        explanation: "Muchos medicamentos pueden causar efectos secundarios como mareos, somnolencia o hipotensión ortostática, que aumentan el riesgo de caídas en adultos mayores. Es esencial revisar la medicación en pacientes geriátricos para prevenir estos incidentes."
    },
    {
        question: "¿Cuál de las siguientes condiciones psicosociales es *más* común en la edad adulta avanzada?",
        options: [
            { letter: "a", text: "Aumento significativo de la autoestima y autoeficacia en la mayoría de los casos." },
            { letter: "b", text: "Sentimientos de aislamiento social y soledad debido a la pérdida de seres queridos o roles sociales." },
            { letter: "c", text: "Una mayor tendencia a iniciar nuevas y complejas actividades recreativas." },
            { letter: "d", text: "Disminución de la necesidad de ser escuchado y comprendido." },
        ],
        correctAnswer: "b",
        explanation: "La soledad y el aislamiento social son comunes en adultos mayores, especialmente tras la pérdida de seres queridos. Estos factores pueden afectar negativamente su salud mental y física, siendo importante su identificación y abordaje en la atención prehospitalaria."
    },
    {
        question: "¿Por qué hay una mayor necesidad de centros adicionales de atención extendida para adultos mayores?",
        options: [
            { letter: "a", text: "Debido a una disminución en la esperanza de vida, lo que genera más necesidades de cuidado." },
            { letter: "b", text: "A un aumento de las tasas de natalidad que desplaza el apoyo familiar." },
            { letter: "c", text: "Principalmente al envejecimiento de la población y el aumento de la esperanza de vida, junto con cambios en la estructura familiar." },
            { letter: "d", text: "Por una menor incidencia de enfermedades crónicas, liberando recursos para atención extendida." },
        ],
        correctAnswer: "c", // Basado en la pregunta 10 del capítulo 7.
        explanation: "El envejecimiento de la población, junto con una mayor esperanza de vida, ha llevado a un aumento en la demanda de atención a largo plazo. Esto se debe a que las personas mayores a menudo requieren más servicios de salud y apoyo para las actividades diarias."
    },
    {
        question: "¿Qué precaución debe tomar un paramédico al comunicarse con un paciente adulto mayor?",
        options: [
            { letter: "a", text: "Asumir que el paciente tiene dificultades cognitivas y simplificar excesivamente el lenguaje." },
            { letter: "b", text: "Hablar en voz alta y rápidamente para asegurarse de que escuchen." },
            { letter: "c", text: "Colocarse directamente enfrente del paciente y ser paciente, ya que la visión periférica y el tiempo de respuesta pueden reducirse." },
            { letter: "d", text: "Evitar el contacto visual para no incomodar al paciente." },
        ],
        correctAnswer: "c", // Basado en la pregunta 3 del capítulo 7.
        explanation: "Es importante colocarse enfrente del paciente adulto mayor y hablarle con claridad y paciencia. Muchos adultos mayores tienen disminución de la visión periférica y un tiempo de respuesta más lento, lo que requiere un enfoque de comunicación adaptado."
    },
    {
        question: "¿Cuál es una característica psicosocial clave de la etapa de la adolescencia?",
        options: [
            { letter: "a", text: "Establecimiento de vínculos estables y búsqueda de una pareja definitiva." },
            { letter: "b", text: "Independencia de los padres y búsqueda de la identidad personal, a menudo con presión del grupo de pares." },
            { letter: "c", text: "Mayor preocupación por el cuidado de los padres ancianos y la familia." },
            { letter: "d", text: "Máximo desarrollo de habilidades cognitivas y consolidación de la personalidad." },
        ],
        correctAnswer: "b",
        explanation: "Durante la adolescencia, los individuos buscan establecer su identidad y autonomía, a menudo experimentando con diferentes roles y relaciones. Esta etapa es crucial para el desarrollo personal, aunque puede venir acompañada de presión social y conflictos con la autoridad."
    },
    {
        question: "¿Qué cambio físico es típico de la adultez media (aproximadamente entre los 40 y 60 años)?",
        options: [
            { letter: "a", text: "Un incremento significativo en la densidad ósea y masa muscular." },
            { letter: "b", text: "Inicio de la pubertad con cambios hormonales marcados." },
            { letter: "c", text: "Deterioro gradual de la capacidad visual y auditiva, y en mujeres, la menopausia." },
            { letter: "d", text: "Máximo desarrollo de la coordinación y agilidad física." },
        ],
        correctAnswer: "c",
        explanation: "La adultez media se asocia con varios cambios físicos, incluyendo la pérdida de densidad ósea y masa muscular, así como cambios hormonales como la menopausia en mujeres. Estos cambios pueden afectar la movilidad, la fuerza y la salud en general."
    },
    {
        question: "¿En la etapa de los niños en edad escolar (6-12 años), cuál es una característica psicosocial relevante?",
        options: [
            { letter: "a", text: "Desarrollo de la autonomía e inicio de la exploración de su independencia de los padres." },
            { letter: "b", text: "El juego paralelo y la dificultad para compartir." },
            { letter: "c", text: "Un fuerte apego a los padres y ansiedad por separación." },
            { letter: "d", text: "Desarrollo del pensamiento abstracto y cuestionamiento de la autoridad." },
        ],
        correctAnswer: "a", // Se busca la independencia, pero aún bajo supervisión.
        explanation: "Los niños en edad escolar comienzan a desarrollar un sentido de autonomía e independencia, aunque todavía dependen de la supervisión y el apoyo de sus padres. Este es un período clave para el desarrollo de habilidades sociales y personales."
    },
    {
        question: "¿Qué consideración es crucial al evaluar a un lactante?",
        options: [
            { letter: "a", text: "Evaluar rápidamente sin involucrar a los padres para no generar estrés." },
            { letter: "b", text: "Los lactantes tienen un sistema respiratorio muy robusto y toleran bien la obstrucción." },
            { letter: "c", text: "Mantener al lactante abrigado para prevenir la hipotermia debido a su limitada capacidad de termorregulación." },
            { letter: "d", text: "La comunicación verbal es la forma más efectiva de obtener información." },
        ],
        correctAnswer: "c",
        explanation: "Los lactantes son especialmente vulnerables a la hipotermia debido a su alta relación superficie-volumen y su limitada capacidad para regular la temperatura corporal. Es crucial mantenerlos abrigados durante la evaluación y el transporte."
    },
];