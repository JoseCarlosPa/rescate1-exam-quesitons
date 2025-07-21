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
        "question": "¿Cuál de las siguientes afirmaciones es *más* precisa con respecto a los signos vitales en un adulto mayor?",
        "options": [
            { "letter": "a", "text": "La frecuencia cardíaca en reposo tiende a ser significativamente más baja que en adultos jóvenes." },
            { "letter": "b", "text": "La presión arterial sistólica puede ser más alta debido a la rigidez arterial." },
            { "letter": "c", "text": "La frecuencia respiratoria suele ser más rápida y superficial que en otras etapas." },
            { "letter": "d", "text": "La temperatura corporal central es consistentemente más alta." }
        ],
        "correctAnswer": "b",
        "explanation": "Con la edad, las arterias pierden elasticidad (arterioesclerosis), lo que provoca un aumento de la resistencia vascular periférica. Esto se traduce comúnmente en una presión arterial sistólica más elevada, un hallazgo frecuente en la población geriátrica."
    },
    {
        "question": "¿Qué sistema corporal se ve más debilitado debido a enfermedades relacionadas con la edad, según el capítulo?",
        "options": [
            { "letter": "a", "text": "Nervioso" },
            { "letter": "b", "text": "Renal" },
            { "letter": "c", "text": "Sensorial" },
            { "letter": "d", "text": "Endocrino" }
        ],
        "correctAnswer": "a",
        "explanation": "El sistema nervioso sufre cambios significativos con la edad, incluyendo una disminución en la masa cerebral y el número de neuronas, lo que afecta la cognición, la memoria y el control motor, y lo hace más susceptible a enfermedades como el Alzheimer o el Parkinson."
    },
    {
        "question": "¿Cuál de los siguientes aspectos afecta *más* a los signos vitales en los adultos mayores?",
        "options": [
            { "letter": "a", "text": "El sistema inmunológico del paciente" },
            { "letter": "b", "text": "La salud general del paciente" },
            { "letter": "c", "text": "El sistema cardiovascular del paciente" },
            { "letter": "d", "text": "La dieta del paciente" }
        ],
        "correctAnswer": "c",
        "explanation": "El sistema cardiovascular experimenta una disminución de su capacidad de reserva. La reducida habilidad del corazón para aumentar la frecuencia y el gasto cardíaco en respuesta al estrés (como una infección o trauma) impacta directamente en la forma en que los signos vitales cambian durante una emergencia."
    },
    {
        "question": "¿Quién brinda la mayor atención a los adultos mayores en Estados Unidos?",
        "options": [
            { "letter": "a", "text": "Enfermeras de salud en el hogar" },
            { "letter": "b", "text": "Asilos" },
            { "letter": "c", "text": "Integrantes de la familia" },
            { "letter": "d", "text": "Centro de vida asistida" }
        ],
        "correctAnswer": "c",
        "explanation": "A pesar de la existencia de cuidados formales, la gran mayoría de la atención y el apoyo diario para los adultos mayores son proporcionados de manera informal por sus familiares, como cónyuges, hijos y otros parientes."
    },
    {
        "question": "¿Qué sentido disminuye primero en los adultos mayores, siendo a menudo uno de los primeros indicadores de envejecimiento?",
        "options": [
            { "letter": "a", "text": "Gusto" },
            { "letter": "b", "text": "Tacto" },
            { "letter": "c", "text": "Oído" },
            { "letter": "d", "text": "Olfato" }
        ],
        "correctAnswer": "c",
        "explanation": "La presbiacusia, o la pérdida de audición relacionada con la edad, es uno de los cambios sensoriales más tempranos y comunes. Típicamente comienza con la dificultad para escuchar sonidos de alta frecuencia y puede impactar significativamente la comunicación y la seguridad."
    },
    {
        "question": "Un paramédico está evaluando a una mujer de 72 años que sufrió una caída. La paciente toma varios medicamentos. ¿Qué influencia podrían tener estos medicamentos en la posible razón de la caída?",
        "options": [
            { "letter": "a", "text": "Podrían causar un aumento de la fuerza muscular, dificultando el equilibrio." },
            { "letter": "b", "text": "Podrían provocar somnolencia, mareos o hipotensión ortostática, contribuyendo a la caída." },
            { "letter": "c", "text": "Es probable que mejoren su coordinación, haciendo que la caída sea menos probable." },
            { "letter": "d", "text": "No hay relación significativa entre los medicamentos y el riesgo de caída en adultos mayores." }
        ],
        "correctAnswer": "b",
        "explanation": "La polifarmacia es un factor de riesgo importante para las caídas. Medicamentos como sedantes, antihipertensivos o diuréticos pueden causar efectos secundarios que alteran el equilibrio, la presión arterial al cambiar de posición (hipotensión ortostática) o el nivel de alerta, aumentando el riesgo de caídas."
    },
    {
        "question": "¿Cuál de las siguientes condiciones psicosociales es *más* común en la edad adulta avanzada?",
        "options": [
            { "letter": "a", "text": "Aumento significativo de la autoestima y autoeficacia en la mayoría de los casos." },
            { "letter": "b", "text": "Sentimientos de aislamiento social y soledad debido a la pérdida de seres queridos o roles sociales." },
            { "letter": "c", "text": "Una mayor tendencia a iniciar nuevas y complejas actividades recreativas." },
            { "letter": "d", "text": "Disminución de la necesidad de ser escuchado y comprendido." }
        ],
        "correctAnswer": "b",
        "explanation": "Con la jubilación, la pérdida de amigos o cónyuge, y las limitaciones físicas, los adultos mayores enfrentan un riesgo elevado de aislamiento social y soledad, lo que puede llevar a la depresión y a un deterioro de la salud general."
    },
    {
        "question": "¿Por qué hay una mayor necesidad de centros adicionales de atención extendida para adultos mayores?",
        "options": [
            { "letter": "a", "text": "Debido a una disminución en la esperanza de vida, lo que genera más necesidades de cuidado." },
            { "letter": "b", "text": "A un aumento de las tasas de natalidad que desplaza el apoyo familiar." },
            { "letter": "c", "text": "Principalmente al envejecimiento de la población y el aumento de la esperanza de vida, junto con cambios en la estructura familiar." },
            { "letter": "d", "text": "Por una menor incidencia de enfermedades crónicas, liberando recursos para atención extendida." }
        ],
        "correctAnswer": "c",
        "explanation": "El aumento de la esperanza de vida significa que más personas llegan a edades avanzadas, a menudo con enfermedades crónicas. Al mismo tiempo, las familias son más pequeñas y geográficamente dispersas, lo que reduce el apoyo familiar informal y aumenta la demanda de cuidados profesionales."
    },
    {
        "question": "¿Qué precaución debe tomar un paramédico al comunicarse con un paciente adulto mayor?",
        "options": [
            { "letter": "a", "text": "Asumir que el paciente tiene dificultades cognitivas y simplificar excesivamente el lenguaje." },
            { "letter": "b", "text": "Hablar en voz alta y rápidamente para asegurarse de que escuchen." },
            { "letter": "c", "text": "Colocarse directamente enfrente del paciente y ser paciente, ya que la visión periférica y el tiempo de respuesta pueden reducirse." },
            { "letter": "d", "text": "Evitar el contacto visual para no incomodar al paciente." }
        ],
        "correctAnswer": "c",
        "explanation": "Una comunicación efectiva requiere posicionarse frente al paciente para que pueda ver la cara y leer los labios, hablar de forma clara y permitir tiempo suficiente para que procese la información y responda, reconociendo posibles déficits sensoriales o cognitivos."
    },
    {
        "question": "¿Cuál es una característica psicosocial clave de la etapa de la adolescencia?",
        "options": [
            { "letter": "a", "text": "Establecimiento de vínculos estables y búsqueda de una pareja definitiva." },
            { "letter": "b", "text": "Independencia de los padres y búsqueda de la identidad personal, a menudo con presión del grupo de pares." },
            { "letter": "c", "text": "Mayor preocupación por el cuidado de los padres ancianos y la familia." },
            { "letter": "d", "text": "Máximo desarrollo de habilidades cognitivas y consolidación de la personalidad." }
        ],
        "correctAnswer": "b",
        "explanation": "La adolescencia (12-18 años) es una etapa de transición marcada por la formación de la identidad. Los adolescentes buscan su individualidad, se distancian de la autoridad parental y el grupo de amigos (pares) se convierte en una influencia social primordial."
    },
    {
        "question": "¿Qué cambio físico es típico de la adultez media (aproximadamente entre los 40 y 60 años)?",
        "options": [
            { "letter": "a", "text": "Un incremento significativo en la densidad ósea y masa muscular." },
            { "letter": "b", "text": "Inicio de la pubertad con cambios hormonales marcados." },
            { "letter": "c", "text": "Deterioro gradual de la capacidad visual y auditiva, y en mujeres, la menopausia." },
            { "letter": "d", "text": "Máximo desarrollo de la coordinación y agilidad física." }
        ],
        "correctAnswer": "c",
        "explanation": "Durante la adultez media, el cuerpo comienza a mostrar signos de envejecimiento. La visión de cerca se deteriora (presbicia), puede haber pérdida de audición y ocurren cambios hormonales significativos como la menopausia en las mujeres."
    },
    {
        "question": "¿En la etapa de los niños en edad escolar (6-12 años), cuál es una característica psicosocial relevante?",
        "options": [
            { "letter": "a", "text": "Desarrollo de la autonomía e inicio de la exploración de su independencia de los padres." },
            { "letter": "b", "text": "El juego paralelo y la dificultad para compartir." },
            { "letter": "c", "text": "Un fuerte apego a los padres y ansiedad por separación." },
            { "letter": "d", "text": "Desarrollo del pensamiento abstracto y cuestionamiento de la autoridad." }
        ],
        "correctAnswer": "a",
        "explanation": "En esta etapa, los niños desarrollan un sentido de competencia e industria. Comienzan a formar amistades más complejas, a comprender reglas y a buscar una mayor independencia en sus tareas y decisiones, aunque todavía dentro de un marco de supervisión familiar."
    },
    {
        "question": "¿Qué consideración es crucial al evaluar a un lactante?",
        "options": [
            { "letter": "a", "text": "Evaluar rápidamente sin involucrar a los padres para no generar estrés." },
            { "letter": "b", "text": "Los lactantes tienen un sistema respiratorio muy robusto y toleran bien la obstrucción." },
            { "letter": "c", "text": "Mantener al lactante abrigado para prevenir la hipotermia debido a su limitada capacidad de termorregulación." },
            { "letter": "d", "text": "La comunicación verbal es la forma más efectiva de obtener información." }
        ],
        "correctAnswer": "c",
        "explanation": "Los lactantes tienen una gran superficie corporal en relación con su masa y poca grasa subcutánea. Esto los hace perder calor rápidamente y los pone en alto riesgo de hipotermia, una condición que puede complicar gravemente cualquier enfermedad o lesión."
    }
]