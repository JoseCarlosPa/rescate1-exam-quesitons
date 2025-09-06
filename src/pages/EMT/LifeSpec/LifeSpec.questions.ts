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
];

export const lifeSpecChallengingQuestions: Question[] = [
    {
        question: "Un neonato de 3 días presenta letargia, rechazo al alimento, temperatura de 35.8°C, y fontanela anterior hundida. Los padres reportan que 'no ha orinado en las últimas 8 horas'. Considerando las características fisiológicas neonatales, ¿cuál es la interpretación más crítica de esta presentación?",
        options: [
            { letter: "a", text: "Los síntomas son normales en la adaptación neonatal temprana" },
            { letter: "b", text: "La deshidratación severa en neonatos puede presentarse con hipotermia en lugar de fiebre, y la ausencia de diuresis indica compromiso renal significativo" },
            { letter: "c", text: "La fontanela hundida es únicamente un signo de deshidratación leve" },
            { letter: "d", text: "El rechazo al alimento es simplemente preferencia alimentaria" }
        ],
        correctAnswer: "b",
        explanation: "Los neonatos tienen características fisiológicas únicas que alteran la presentación clínica: 1) Su sistema termorregulatorio inmaduro puede responder a infecciones graves con hipotermia en lugar de fiebre, 2) La alta proporción de agua corporal (75-80%) los hace vulnerable a deshidratación rápida, 3) La función renal inmadura hace que la oliguria sea un signo tardío pero crítico, 4) La fontanela hundida indica deshidratación significativa. Esta constelación sugiere sepsis neonatal con shock, requiriendo reanimación agresiva inmediata."
    },
    {
        question: "Un lactante de 8 meses presenta dificultad respiratoria severa con estridor inspiratorio, babeo, e incapacidad para recostarse. Su temperatura es 39.2°C y se ve tóxico. Al intentar examinarlo, se agita más y el estridor empeora. ¿Cuál es la consideración anatómica y fisiológica más crítica en el manejo prehospitalario?",
        options: [
            { letter: "a", text: "Los lactantes siempre toleran bien los procedimientos invasivos" },
            { letter: "b", text: "La vía aérea pediátrica es más pequeña y cualquier edema causa obstrucción desproporcionada; la agitación puede precipitar obstrucción completa" },
            { letter: "c", text: "Se debe intubar inmediatamente para asegurar la vía aérea" },
            { letter: "d", text: "La posición no afecta la permeabilidad de la vía aérea en niños" }
        ],
        correctAnswer: "b",
        explanation: "La anatomía pediátrica presenta diferencias críticas: 1) La vía aérea es más pequeña (tráquea de 4-5mm vs 15-20mm en adultos), por lo que 1mm de edema reduce el área en 50-75%, 2) La epiglotitis puede causar obstrucción completa rápidamente, 3) Los niños adoptan posición de 'trípode' para optimizar flujo aéreo, 4) La agitación aumenta el consumo de oxígeno y puede precipitar colapso. El manejo requiere mantener al niño calmado, posición de confort, oxígeno humidificado, y preparación para manejo avanzado de vía aérea, evitando procedimientos que aumenten la agitación."
    },
    {
        question: "Un preescolar de 4 años sufre caída desde altura considerable. Está consciente, pero presenta abdomen distendido, palidez, taquicardia (140 lpm), y presión arterial de 85/45 mmHg. Los padres insisten que 'está bien porque está despierto y hablando'. ¿Qué concepto fisiológico pediátrico es crucial para el manejo apropiado?",
        options: [
            { letter: "a", text: "Los niños no pueden desarrollar shock hipovolémico" },
            { letter: "b", text: "Los niños tienen mecanismos compensatorios cardiovasculares superiores que mantienen presión arterial normal hasta perder 25-30% del volumen sanguíneo, pero pueden descompensarse abruptamente" },
            { letter: "c", text: "La presión arterial es el mejor indicador de shock en niños" },
            { letter: "d", text: "Un niño consciente no puede estar en estado crítico" }
        ],
        correctAnswer: "b",
        explanation: "La fisiología cardiovascular pediátrica tiene características únicas: 1) Los niños tienen mecanismos compensatorios vasculares y cardíacos muy eficientes que mantienen presión arterial normal mediante vasoconstricción y taquicardia, 2) Pueden perder 25-30% del volumen sanguíneo manteniendo presión arterial relativamente normal ('shock compensado'), 3) La descompensación, cuando ocurre, es súbita y catastrófica ('shock descompensado'), 4) Los signos tempranos incluyen taquicardia, palidez, tiempo de llenado capilar prolongado. Esta presentación sugiere hemorragia intraabdominal con shock compensado, requiriendo transporte urgente y preparación para descompensación súbita."
    },
    {
        question: "Un adolescente de 16 años, previamente sano, presenta comportamiento errático, confusión, sudoración profusa, y temblor. Sus amigos mencionan que 'no ha comido nada en todo el día porque quería verse bien para una cita'. Su glucemia capilar es 38 mg/dL. ¿Qué consideración del desarrollo es más relevante para el manejo y educación?",
        options: [
            { letter: "a", text: "Los adolescentes siempre siguen las recomendaciones médicas" },
            { letter: "b", text: "El desarrollo cognitivo adolescente incluye pensamiento de invencibilidad y toma de riesgos, requiriendo educación específica sobre consecuencias de ayuno extremo" },
            { letter: "c", text: "La hipoglucemia no es peligrosa en adolescentes sanos" },
            { letter: "d", text: "Los padres son siempre la mejor fuente de información en adolescentes" }
        ],
        correctAnswer: "b",
        explanation: "El desarrollo psicosocial adolescente presenta características únicas: 1) El córtex prefrontal (responsable del juicio) no madura hasta los 25 años, llevando a toma de riesgos, 2) El 'pensamiento de invencibilidad' hace que subestimen consecuencias, 3) La presión social y preocupación por imagen corporal pueden llevar a comportamientos peligrosos (ayuno, dietas extremas), 4) La hipoglucemia severa puede causar coma y daño neurológico permanente. El manejo incluye corrección inmediata de glucemia, pero también educación apropiada para la edad sobre riesgos, y consideración de trastornos alimentarios subyacentes."
    },
    {
        question: "Una mujer embarazada de 32 semanas sufre accidente vehicular y presenta dolor abdominal, contracciones uterinas regulares, y sangrado vaginal moderado. Sus signos vitales muestran taquicardia (110 lpm) y presión arterial de 90/60 mmHg. ¿Cuál es la consideración fisiológica más crítica durante el embarazo?",
        options: [
            { letter: "a", text: "El embarazo no afecta la respuesta al trauma" },
            { letter: "b", text: "Los cambios cardiovasculares del embarazo (aumento de volumen sanguíneo 40-50%) pueden enmascarar el shock materno inicial, pero el flujo uteroplacentario se compromete tempranamente" },
            { letter: "c", text: "Solo la madre necesita consideración médica" },
            { letter: "d", text: "La posición no afecta la hemodinámica en embarazadas" }
        ],
        correctAnswer: "b",
        explanation: "La fisiología del embarazo altera dramáticamente la respuesta al trauma: 1) El volumen sanguíneo aumenta 40-50%, permitiendo mayor pérdida antes de mostrar signos de shock, 2) El flujo uteroplacentario (sin autorregulación) se compromete tempranamente con vasoconstricción compensatoria, 3) El útero grávido puede comprimir la vena cava inferior en posición supina (síndrome de hipotensión supina), 4) La placenta puede desprenderse (abruptio placentae) con trauma relativamente menor. El manejo requiere posición lateral izquierda, monitoreo materno y fetal, y reconocimiento que signos vitales 'normales' pueden coexistir con compromiso fetal significativo."
    },
    {
        question: "Un adulto mayor de 78 años con antecedentes de fibrilación auricular presenta caída con confusión y debilidad del lado derecho. Su familia reporta que 'está tomando un anticoagulante nuevo'. La evaluación muestra presión arterial de 180/95 mmHg y glucemia normal. ¿Cuál es la consideración geriátrica más crítica?",
        options: [
            { letter: "a", text: "La edad avanzada no afecta el riesgo de hemorragia cerebral" },
            { letter: "b", text: "Los adultos mayores anticoagulados tienen riesgo significativamente aumentado de hemorragia intracraneal, y la presentación puede ser sutil inicialmente" },
            { letter: "c", text: "La confusión es normal en adultos mayores" },
            { letter: "d", text: "La hipertensión no es relevante en este contexto" }
        ],
        correctAnswer: "b",
        explanation: "Los adultos mayores presentan riesgos únicos: 1) La atrofia cerebral crea espacio que permite sangrados intracraneales más grandes antes de síntomas, 2) Los anticoagulantes aumentan dramáticamente el riesgo de hemorragia intracraneal tras trauma menor, 3) La presentación puede ser sutil (confusión, cambios sutiles de personalidad) antes de déficits neurológicos evidentes, 4) La hipertensión puede ser compensatoria (respuesta de Cushing) o contribuir al sangrado. Esta presentación sugiere posible hemorragia intracraneal traumática, requiriendo transporte urgente, monitoreo neurológico estrecho, y preparación para deterioro súbito."
    },
    {
        question: "Un adulto mayor de 82 años presenta dolor torácico atípico descrito como 'presión en el estómago', náuseas, y fatiga extrema. No hay dolor clásico en el pecho. Su ECG muestra cambios sutiles y sus signos vitales son relativamente estables. Su esposa dice que 'no es el mismo desde ayer'. ¿Qué principio geriátrico es más relevante?",
        options: [
            { letter: "a", text: "Los adultos mayores siempre presentan síntomas clásicos de infarto" },
            { letter: "b", text: "Los adultos mayores frecuentemente presentan infartos con síntomas atípicos (equivalentes anginosos) debido a neuropatía diabética, medicamentos, y cambios en percepción del dolor" },
            { letter: "c", text: "Los cambios sutiles no son significativos en adultos mayores" },
            { letter: "d", text: "Los ECG son siempre normales en infartos atípicos" }
        ],
        correctAnswer: "b",
        explanation: "La presentación de enfermedad coronaria en adultos mayores difiere significativamente: 1) Hasta 60% de infartos en >75 años presentan síntomas atípicos, 2) Los 'equivalentes anginosos' incluyen disnea, fatiga, náuseas, confusión, o síncope, 3) La neuropatía diabética, medicamentos (beta-bloqueadores), y cambios en receptores de dolor alteran la percepción, 4) Los cambios cognitivos o funcionales sutiles pueden ser el único signo inicial. El manejo requiere alto índice de sospecha, ECG seriados, y tratamiento como síndrome coronario agudo incluso con presentación atípica."
    },
    {
        question: "Un paciente de 85 años con demencia moderada es encontrado en el suelo de su hogar por un vecino. Presenta deshidratación severa, confusión aumentada, y múltiples lesiones cutáneas en diferentes estadios de cicatrización. No hay cuidador presente y la casa está en condiciones insalubres. ¿Cuál es la consideración ética y legal más importante?",
        options: [
            { letter: "a", text: "Solo tratar las condiciones médicas agudas" },
            { letter: "b", text: "Los adultos mayores vulnerables requieren evaluación de negligencia/abuso, reporte a autoridades apropiadas, y coordinación con servicios sociales además del tratamiento médico" },
            { letter: "c", text: "La demencia explica completamente la situación" },
            { letter: "d", text: "No es responsabilidad del personal prehospitalario" }
        ],
        correctAnswer: "b",
        explanation: "Los adultos mayores vulnerables requieren consideración especial: 1) La demencia aumenta el riesgo de negligencia y abuso por parte de cuidadores, 2) Los signos incluyen deshidratación, lesiones en diferentes estadios, condiciones de vida inadecuadas, 3) Los proveedores prehospitalarios tienen obligación legal de reportar sospecha de abuso/negligencia a Servicios de Protección para Adultos, 4) La coordinación con servicios sociales es esencial para prevenir recurrencia. El manejo incluye estabilización médica, documentación fotográfica de lesiones (si permitido), reporte obligatorio, y coordinación hospitalaria para evaluación comprehensiva."
    },
    {
        question: "Durante una emergencia pediátrica, un niño de 18 meses requiere acceso vascular urgente para reanimación. Ha fallado múltiples intentos de acceso IV periférico debido a colapso vascular por shock. Los padres están presentes y extremadamente angustiados. ¿Cuál es la consideración anatómica y técnica más importante?",
        options: [
            { letter: "a", text: "Continuar intentando accesos IV periféricos indefinidamente" },
            { letter: "b", text: "El acceso intraóseo es la alternativa de elección en niños cuando falla el acceso IV, proporcionando vía equivalente al acceso venoso central para reanimación" },
            { letter: "c", text: "Los niños no necesitan acceso vascular para reanimación" },
            { letter: "d", text: "Esperar hasta llegar al hospital para procedimientos invasivos" }
        ],
        correctAnswer: "b",
        explanation: "El acceso vascular pediátrico presenta desafíos únicos: 1) Las venas son más pequeñas y colapsan fácilmente en shock, 2) El acceso intraóseo es rápido, seguro y efectivo en niños >3 meses, 3) La médula ósea proporciona acceso directo a circulación central, permitiendo administración de fluidos, medicamentos y productos sanguíneos, 4) Los sitios preferidos incluyen tibia proximal, húmero proximal, y fémur distal. El procedimiento requiere técnica estéril, analgesia local, y comunicación empática con padres explicando la necesidad y seguridad del procedimiento."
    },
    {
        question: "Un adulto mayor de 74 años con múltiples comorbilidades (diabetes, hipertensión, insuficiencia cardíaca) presenta síntomas de sobredosis accidental de múltiples medicamentos. Su familia trae una bolsa con 15 frascos diferentes de medicamentos. Está confundido pero estable hemodinámicamente. ¿Cuál es la consideración farmacológica geriátrica más crítica?",
        options: [
            { letter: "a", text: "Los adultos mayores metabolizan medicamentos igual que adultos jóvenes" },
            { letter: "b", text: "Los cambios fisiológicos del envejecimiento (disminución de función renal/hepática, aumento de grasa corporal, disminución de albúmina) alteran la farmacocinética, prolongando efectos y aumentando toxicidad" },
            { letter: "c", text: "Solo los medicamentos recetados recientemente son relevantes" },
            { letter: "d", text: "La polifarmacia no aumenta el riesgo de interacciones" }
        ],
        correctAnswer: "b",
        explanation: "La farmacología geriátrica presenta complejidades únicas: 1) La disminución de función renal (10% por década después de 40 años) reduce eliminación de medicamentos, 2) La función hepática disminuida altera metabolismo de primer paso, 3) El aumento de grasa corporal prolonga vida media de medicamentos liposolubles, 4) La disminución de albúmina aumenta fracción libre de medicamentos unidos a proteínas, 5) La polifarmacia aumenta exponencialmente riesgo de interacciones. El manejo requiere identificación de todos los medicamentos (incluyendo OTC y suplementos), consideración de interacciones múltiples, y monitoreo prolongado debido a eliminación retardada."
    }
];
