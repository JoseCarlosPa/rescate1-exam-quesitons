import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Qué es el shock?",
        answer: "Es un estado de hipoperfusión generalizada de los tejidos corporales, lo que significa que no llega suficiente oxígeno y nutrientes a las células para su correcto funcionamiento.",
    },
    {
        question: "¿Cuáles son los tipos principales de shock?",
        answer: "Los tipos principales son: Hipovolémico, Cardiogénico, Obstructivo y Distributivo (que incluye Séptico, Anafiláctico y Neurogénico).",
    },
    {
        question: "¿Qué signos tempranos pueden indicar shock?",
        answer: "Signos tempranos incluyen: piel fría, pálida y sudorosa; taquicardia (pulso rápido); ansiedad, agitación o confusión; y respiración rápida y superficial.",
    },
    {
        question: "¿Cuál es el tratamiento inicial prehospitalario del shock?",
        answer: "El tratamiento inicial incluye: asegurar una vía aérea permeable y administrar oxígeno de alto flujo; controlar hemorragias externas (si presentes); colocar al paciente en la posición adecuada (generalmente supina con piernas elevadas si no hay contraindicación); mantener la temperatura corporal; y realizar un transporte rápido al centro hospitalario.",
    },
    {
        question: "¿Qué causa el shock hipovolémico?",
        answer: "Es causado por una pérdida significativa de volumen sanguíneo o líquidos corporales, como hemorragias severas, quemaduras extensas o deshidratación grave.",
    },
    {
        question: "¿Qué evento puede causar shock obstructivo?",
        answer: "El shock obstructivo es causado por una barrera física al flujo sanguíneo, como un neumotórax a tensión, un taponamiento cardíaco o una embolia pulmonar masiva.",
    },
    {
        question: "¿Qué causa el shock cardiogénico?",
        answer: "Se debe a la incapacidad del corazón para bombear suficiente sangre para satisfacer las necesidades del cuerpo, comúnmente por un infarto agudo al miocardio, arritmias severas o insuficiencia cardíaca descompensada.",
    },
];

export const shockQuestions: Question[] = [
    {
        "question": "¿Cuál de las siguientes descripciones define mejor el shock desde una perspectiva fisiopatológica?",
        "options": [
            { "letter": "a", "text": "Un estado de colapso emocional debido a una mala noticia." },
            { "letter": "b", "text": "Una respuesta del cuerpo a una descarga eléctrica." },
            { "letter": "c", "text": "Un estado de hipoperfusión tisular generalizada que compromete el suministro de oxígeno y nutrientes." },
            { "letter": "d", "text": "Una disminución transitoria de la presión arterial." }
        ],
        "correctAnswer": "c",
        "explanation": "El shock, en términos médicos, es fundamentalmente un fallo circulatorio. Se define como la incapacidad del sistema circulatorio para suministrar suficiente sangre oxigenada y nutrientes a los tejidos para satisfacer sus demandas metabólicas, lo que lleva a la disfunción celular y, finalmente, a la falla de órganos."
    },
    {
        "question": "Un paciente presenta una herida por arma blanca con hemorragia severa, piel fría y pálida, pulso rápido y débil. ¿Qué tipo de shock es el más probable?",
        "options": [
            { "letter": "a", "text": "Shock cardiogénico" },
            { "letter": "b", "text": "Shock hipovolémico" },
            { "letter": "c", "text": "Shock anafiláctico" },
            { "letter": "d", "text": "Shock neurogénico" }
        ],
        "correctAnswer": "b",
        "explanation": "Este es el cuadro clásico del shock hipovolémico (bajo volumen). La pérdida de sangre conduce a una disminución del volumen circulatorio. El cuerpo compensa aumentando la frecuencia cardíaca (pulso rápido) y desviando la sangre de la piel a los órganos vitales (piel fría y pálida)."
    },
    {
        "question": "Una paciente de 65 años con antecedentes de infarto presenta dificultad respiratoria, ruidos pulmonares con crepitaciones en todos los campos y una presión arterial de 92/60 mmHg. ¿Cuál es el diagnóstico diferencial más probable?",
        "options": [
            { "letter": "a", "text": "Shock hipovolémico" },
            { "letter": "b", "text": "Shock anafiláctico" },
            { "letter": "c", "text": "Shock cardiogénico" },
            { "letter": "d", "text": "Shock neurogénico" }
        ],
        "correctAnswer": "c",
        "explanation": "El shock cardiogénico es un shock por 'falla de la bomba'. Un antecedente de infarto sugiere un corazón dañado. Las crepitaciones pulmonares indican edema pulmonar, que ocurre cuando el corazón no puede bombear la sangre eficazmente y esta se acumula en los pulmones."
    },
    {
        "question": "En un paciente con signos de shock, ¿qué indica una frecuencia cardíaca rápida y un llenado capilar prolongado?",
        "options": [
            { "letter": "a", "text": "Una perfusión adecuada." },
            { "letter": "b", "text": "Un mecanismo compensatorio inicial del cuerpo." },
            { "letter": "c", "text": "Un signo de shock irreversible." },
            { "letter": "d", "text": "Un estado de shock psicogénico." }
        ],
        "correctAnswer": "b",
        "explanation": "Estos son signos de la etapa de shock compensado. El cuerpo intenta mantener la perfusión de los órganos vitales aumentando la frecuencia cardíaca (taquicardia) y contrayendo los vasos sanguíneos periféricos (lo que prolonga el llenado capilar) para desviar la sangre hacia el centro del cuerpo."
    },
    {
        "question": "¿Cuál es la primera acción prioritaria para un paramédico al abordar a un paciente en shock?",
        "options": [
            { "letter": "a", "text": "Administrar medicamentos intravenosos." },
            { "letter": "b", "text": "Realizar un historial clínico detallado." },
            { "letter": "c", "text": "Asegurar la vía aérea y administrar oxígeno de alto flujo." },
            { "letter": "d", "text": "Esperar la llegada de soporte avanzado." }
        ],
        "correctAnswer": "c",
        "explanation": "La prioridad siempre sigue el ABC (Vía Aérea, Respiración, Circulación). Dado que el shock es un estado de privación de oxígeno a nivel celular, asegurar una vía aérea permeable y maximizar la oxigenación con oxígeno de alto flujo es el primer paso crítico en el manejo."
    },
    {
        "question": "Un paciente alérgico a las picaduras de abeja es picado y desarrolla rápidamente urticaria generalizada, edema facial y dificultad respiratoria severa. ¿Qué tipo de shock está experimentando?",
        "options": [
            { "letter": "a", "text": "Shock séptico" },
            { "letter": "b", "text": "Shock cardiogénico" },
            { "letter": "c", "text": "Shock anafiláctico" },
            { "letter": "d", "text": "Shock neurogénico" }
        ],
        "correctAnswer": "c",
        "explanation": "El shock anafiláctico es una reacción alérgica grave y sistémica. La exposición a un alérgeno desencadena una liberación masiva de histamina, causando vasodilatación generalizada (shock), urticaria y broncoconstricción (dificultad respiratoria)."
    },
    {
        "question": "Un pulso débil y rápido en un paciente traumatizado es un indicio clave de:",
        "options": [
            { "letter": "a", "text": "Hipoxia leve." },
            { "letter": "b", "text": "Perfusión normal." },
            { "letter": "c", "text": "Shock hipovolémico." },
            { "letter": "d", "text": "Trauma aislado de extremidad." }
        ],
        "correctAnswer": "c",
        "explanation": "Un pulso débil (filiforme) indica un bajo volumen sistólico (poca sangre bombeada con cada latido), y un pulso rápido (taquicardia) es la respuesta compensatoria del corazón para tratar de mantener el gasto cardíaco. Juntos, son un signo clásico de shock hipovolémico."
    },
    {
        "question": "¿Qué acción prehospitalaria inmediata es crucial para ayudar a revertir el shock anafiláctico?",
        "options": [
            { "letter": "a", "text": "Administrar glucosa oral." },
            { "letter": "b", "text": "Administrar epinefrina intramuscular." },
            { "letter": "c", "text": "Administrar líquidos fríos." },
            { "letter": "d", "text": "Administrar carbón activado." }
        ],
        "correctAnswer": "b",
        "explanation": "La epinefrina es el tratamiento de primera línea que salva la vida en la anafilaxia. Sus efectos de vasoconstricción y broncodilatación revierten directamente los efectos potencialmente mortales de la reacción alérgica (hipotensión y dificultad para respirar)."
    },
    {
        "question": "¿Qué debes evitar en pacientes en shock con sospecha de lesión medular?",
        "options": [
            { "letter": "a", "text": "Inmovilización." },
            { "letter": "b", "text": "Movimientos bruscos del cuello o columna." },
            { "letter": "c", "text": "Administración de oxígeno." },
            { "letter": "d", "text": "Monitoreo de signos vitales." }
        ],
        "correctAnswer": "b",
        "explanation": "En cualquier paciente traumatizado con sospecha de lesión en la columna vertebral, es fundamental minimizar cualquier movimiento del cuello y la espalda para evitar causar o empeorar un daño neurológico en la médula espinal. La inmovilización espinal es una prioridad."
    },
    {
        "question": "La 'pista' clave en el shock que indica que la 'bomba' (el corazón) está fallando es:",
        "options": [
            { "letter": "a", "text": "Líquido (sangre) insuficiente." },
            { "letter": "b", "text": "Un contenedor (vasos) dilatado." },
            { "letter": "c", "text": "Crepitaciones pulmonares y dificultad para respirar." },
            { "letter": "d", "text": "Pérdida de control del sistema nervioso." }
        ],
        "correctAnswer": "c",
        "explanation": "Cuando el corazón (la bomba) falla, no puede impulsar la sangre hacia adelante de manera efectiva. Esto provoca que la sangre se acumule retrógradamente en los pulmones, causando edema pulmonar, que se ausculta como crepitaciones (estertores)."
    },
    {
        "question": "Si un paciente en shock hipovolémico se mantiene en posición supina con las piernas elevadas, ¿cuál es el objetivo principal de esta posición?",
        "options": [
            { "letter": "a", "text": "Facilitar la respiración." },
            { "letter": "b", "text": "Disminuir el retorno venoso al corazón." },
            { "letter": "c", "text": "Mejorar el flujo sanguíneo hacia los órganos vitales superiores." },
            { "letter": "d", "text": "Prevenir la hipotermia." }
        ],
        "correctAnswer": "c",
        "explanation": "Elevar las piernas (posición de Trendelenburg modificada) utiliza la gravedad para ayudar a que la sangre de las extremidades inferiores regrese a la circulación central. Esto aumenta temporalmente el volumen de sangre disponible para el corazón (precarga), mejorando la perfusión del cerebro y otros órganos vitales."
    },
    {
        "question": "¿Cuál de los siguientes signos vitales sería el más indicativo de un shock descompensado?",
        "options": [
            { "letter": "a", "text": "Frecuencia cardíaca de 90 lpm." },
            { "letter": "b", "text": "Presión arterial de 110/70 mmHg." },
            { "letter": "c", "text": "Pulso rápido y débil con presión arterial en descenso." },
            { "letter": "d", "text": "Piel tibia y seca." }
        ],
        "correctAnswer": "c",
        "explanation": "El shock descompensado ocurre cuando los mecanismos compensatorios del cuerpo fallan. El signo clave de esta transición es la hipotensión (presión arterial en descenso), a pesar de que el corazón sigue intentando compensar (pulso rápido)."
    },
    {
        "question": "¿Qué término describe el equilibrio y la estabilidad de todos los sistemas del cuerpo?",
        "options": [
            { "letter": "a", "text": "Hipotermia" },
            { "letter": "b", "text": "Sistema nervioso autónomo" },
            { "letter": "c", "text": "Perfusión" },
            { "letter": "d", "text": "Homeostasis" }
        ],
        "correctAnswer": "d",
        "explanation": "La homeostasis es la capacidad del cuerpo para mantener un ambiente interno estable y constante (como la temperatura, el pH, la presión arterial) a pesar de los cambios en el entorno externo. El shock es un estado de fallo de la homeostasis."
    },
    {
        "question": "Un paciente con shock neurogénico probablemente presentará:",
        "options": [
            { "letter": "a", "text": "Piel fría y sudorosa." },
            { "letter": "b", "text": "Bradicardia y piel caliente y seca por debajo del nivel de la lesión." },
            { "letter": "c", "text": "Taquicardia severa y dificultad respiratoria." },
            { "letter": "d", "text": "Dolor abdominal agudo." }
        ],
        "correctAnswer": "b",
        "explanation": "El shock neurogénico es causado por una lesión en la médula espinal que interrumpe las señales nerviosas simpáticas. Esto provoca una vasodilatación masiva por debajo del nivel de la lesión (piel caliente y seca) y una incapacidad para aumentar la frecuencia cardíaca (bradicardia o frecuencia normal) a pesar de la hipotensión."
    },
    {
        "question": "Durante la evaluación de un paciente en shock, ¿qué signo podría alertar al paramédico de que la condición del paciente está pasando a la siguiente etapa de shock (descompensado o irreversible)?",
        "options": [
            { "letter": "a", "text": "Aumento de la ansiedad." },
            { "letter": "b", "text": "Disminución de la presión arterial sistólica." },
            { "letter": "c", "text": "Piel más caliente y rosada." },
            { "letter": "d", "text": "Mejora del llenado capilar." }
        ],
        "correctAnswer": "b",
        "explanation": "La caída de la presión arterial sistólica es el signo distintivo que marca la transición del shock compensado al descompensado. Indica que los mecanismos del cuerpo para mantener la perfusión (como la taquicardia y la vasoconstricción) ya no son suficientes."
    }
]