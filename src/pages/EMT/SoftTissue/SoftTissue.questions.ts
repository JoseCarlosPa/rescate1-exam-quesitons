import {Question} from "../../../question";

export const faqData = [
    {
        question: "¿Cuál es la diferencia entre una herida abierta y una herida cerrada?",
        answer: "Una herida cerrada es una lesión donde el tejido blando sufre daño debajo de la piel, pero la superficie de la piel permanece intacta, como en una contusión o hematoma. Una herida abierta implica una ruptura en la superficie de la piel, exponiendo los tejidos internos, como en abrasiones, laceraciones o avulsiones.",
    },
    {
        question: "¿Qué es el síndrome compartimental?",
        answer: "Es una condición grave que ocurre por inflamación o sangrado dentro de un espacio muscular confinado (compartimento), generalmente en una extremidad. La presión aumenta a niveles peligrosos, obstruyendo el flujo sanguíneo y pudiendo causar daño muscular y nervioso permanente si no se trata.",
    },
    {
        question: "¿Cómo se clasifican las quemaduras según su profundidad?",
        answer: "Se clasifican en: \n• Quemaduras superficiales (1er grado): Afectan solo la epidermis. Causan enrojecimiento y dolor, como una quemadura solar. \n• Quemaduras de espesor parcial (2do grado): Afectan la epidermis y parte de la dermis. Producen ampollas, son húmedas y muy dolorosas. \n• Quemaduras de espesor total (3er grado): Destruyen todas las capas de la piel. La piel se ve seca, correosa, blanca o carbonizada, y puede no haber dolor en el centro de la lesión.",
    },
    {
        question: "¿Para qué se utiliza la 'Regla de los Nueves'?",
        answer: "La Regla de los Nueves es un método rápido para estimar el porcentaje de la superficie corporal total (SCT) que ha sido quemada en un paciente. Es esencial para determinar la severidad de la quemadura y guiar el tratamiento, especialmente la reanimación con líquidos.",
    },
    {
        question: "¿Cuál es el manejo inicial correcto para una amputación traumática?",
        answer: "Primero, controle la hemorragia en el muñón del paciente, a menudo con un torniquete. Luego, envuelva la parte amputada en un apósito estéril seco, colóquela dentro de una bolsa de plástico y ponga esa bolsa en un recipiente con agua fría. No permita que la parte amputada entre en contacto directo con el hielo.",
    },
    {
        question: "¿Cómo se debe tratar un objeto empalado en el abdomen?",
        answer: "Nunca se debe retirar un objeto empalado. El manejo correcto consiste en controlar la hemorragia aplicando presión directa en los bordes de la herida y estabilizar el objeto en su lugar con vendajes voluminosos para evitar que se mueva durante el transporte.",
    },
    {
        question: "¿Qué es el síndrome de aplastamiento (crush syndrome)?",
        answer: "Es una condición que se desarrolla cuando una parte del cuerpo queda atrapada por más de 4 horas. Al liberarla, se liberan al torrente sanguíneo toxinas (como mioglobina) de los músculos dañados, lo que puede provocar insuficiencia renal aguda y arritmias cardíacas mortales.",
    },
    {
        question: "¿Cuál es el tratamiento para una quemadura química seca en la piel?",
        answer: "Primero, se debe cepillar la mayor cantidad posible del químico seco de la piel, evitando contaminarse o al paciente. Después de retirar el polvo, se debe irrigar la zona abundantemente con agua durante 15 a 20 minutos.",
    },
];

export const softTissueExam: Question[] = [
    {
        "question": "Un paciente adulto presenta quemaduras de espesor parcial en todo el tórax anterior y en la totalidad de su brazo derecho. Usando la Regla de los Nueves, ¿qué porcentaje de superficie corporal está quemado?",
        "options": [
            {"letter": "a", "text": "18%"},
            {"letter": "b", "text": "27%"},
            {"letter": "c", "text": "36%"},
            {"letter": "d", "text": "45%"}
        ],
        "correctAnswer": "b",
        "explanation": "Según la Regla de los Nueves para adultos, el tórax anterior completo representa el 18% de la superficie corporal total, y un brazo completo representa el 9%. Por lo tanto, el total es 18% + 9% = 27%."
    },
    {
        "question": "Un paciente ha sufrido una avulsión en la pierna, donde una gran porción de piel está desprendida pero aún unida por un borde. ¿Cuál es el manejo correcto de la herida?",
        "options": [
            {"letter": "a", "text": "Terminar de cortar la piel avulsionada para crear una herida limpia"},
            {
                "letter": "b",
                "text": "Colocar el colgajo de piel de nuevo en su posición normal y cubrir con un apósito estéril"
            },
            {"letter": "c", "text": "Enrollar el colgajo de piel sobre sí mismo y vendarlo"},
            {"letter": "d", "text": "Aplicar un vendaje compresivo apretado directamente sobre la herida expuesta"}
        ],
        "correctAnswer": "b",
        "explanation": "En una avulsión, si el colgajo de piel aún está unido, se debe intentar preservar el tejido. El manejo correcto es colocar suavemente el colgajo en su posición anatómica original y cubrirlo con un apósito estéril y húmedo para mantenerlo viable antes de la evaluación quirúrgica."
    },
    {
        "question": "Usted atiende a un paciente con una herida por mordedura humana en la mano. La principal preocupación asociada con este tipo de lesión es:",
        "options": [
            {"letter": "a", "text": "La hemorragia arterial masiva"},
            {"letter": "b", "text": "El riesgo de síndrome compartimental"},
            {"letter": "c", "text": "Un alto riesgo de infección grave"},
            {"letter": "d", "text": "La posible transmisión de la rabia"}
        ],
        "correctAnswer": "c",
        "explanation": "La boca humana contiene una gran cantidad y variedad de bacterias. Una mordedura que rompe la piel inocula estas bacterias profundamente en los tejidos, lo que conlleva un riesgo extremadamente alto de desarrollar una infección grave si no se trata adecuadamente."
    },
    {
        "question": "Un paciente presenta una quemadura de espesor total, seca y de aspecto blanquecino en la mano. El paciente niega sentir dolor en el centro de la lesión. La ausencia de dolor se debe a:",
        "options": [
            {"letter": "a", "text": "La destrucción de las terminaciones nerviosas en la dermis"},
            {"letter": "b", "text": "El efecto calmante del proceso de quemadura"},
            {"letter": "c", "text": "Una respuesta de shock que bloquea la sensación"},
            {"letter": "d", "text": "La rápida formación de una escara protectora"}
        ],
        "correctAnswer": "a",
        "explanation": "Las quemaduras de espesor total (tercer grado) destruyen todas las capas de la piel, incluyendo la epidermis y la dermis, donde se encuentran las terminaciones nerviosas sensoriales. La destrucción de estos nervios es la razón por la que la herida es insensible al tacto o al dolor en el área quemada."
    },
    {
        "question": "Un paciente que fue rescatado tras tener su brazo atrapado bajo un vehículo por 6 horas presenta dolor intenso, palidez y ausencia de pulso distal en la extremidad afectada. Estos hallazgos son más consistentes con:",
        "options": [
            {"letter": "a", "text": "Una contusión simple"},
            {"letter": "b", "text": "Síndrome compartimental"},
            {"letter": "c", "text": "Una laceración arterial"},
            {"letter": "d", "text": "Una abrasión profunda"}
        ],
        "correctAnswer": "b",
        "explanation": "La compresión prolongada puede causar una lesión por aplastamiento, que lleva a una inflamación masiva dentro de los compartimentos musculares del brazo. Este aumento de presión (síndrome compartimental) comprime los vasos sanguíneos y los nervios, causando dolor extremo, pérdida de pulso y palidez, siendo una emergencia que amenaza la extremidad."
    },
    {
        "question": "El tratamiento inicial y más importante para las quemaduras térmicas, después de asegurar la escena y evaluar el ABC, es:",
        "options": [
            {"letter": "a", "text": "Aplicar ungüentos o cremas antibióticas inmediatamente"},
            {"letter": "b", "text": "Romper las ampollas para liberar la presión"},
            {"letter": "c", "text": "Detener el proceso de quemadura y cubrir con un apósito estéril seco"},
            {"letter": "d", "text": "Envolver la zona quemada en hielo para reducir el dolor"}
        ],
        "correctAnswer": "c",
        "explanation": "La primera prioridad es detener el proceso de quemadura para prevenir un daño tisular mayor (generalmente con agua fría, no helada). Inmediatamente después, la herida debe cubrirse con un apósito estéril y seco para protegerla de la contaminación, reducir el dolor y prevenir la hipotermia."
    },
    {
        "question": "Al evaluar una quemadura eléctrica, el paramédico debe recordar siempre:",
        "options": [
            {"letter": "a", "text": "Que la quemadura superficial es siempre el daño más grave"},
            {"letter": "b", "text": "Buscar siempre una herida de entrada y una de salida"},
            {"letter": "c", "text": "Que el riesgo principal es la infección y no las arritmias"},
            {"letter": "d", "text": "Aplicar inmediatamente un desfibrilador en todos los casos"}
        ],
        "correctAnswer": "b",
        "explanation": "La corriente eléctrica viaja a través del cuerpo desde un punto de entrada hasta un punto de salida (tierra). Es crucial identificar ambas heridas, ya que el daño interno a los tejidos y órganos a lo largo de la trayectoria de la corriente suele ser mucho más severo que lo que sugieren las quemaduras superficiales."
    },
    {
        "question": "¿Cuál de las siguientes quemaduras se consideraría crítica en un adulto, independientemente de su extensión?",
        "options": [
            {"letter": "a", "text": "Una quemadura superficial en la espalda"},
            {"letter": "b", "text": "Una quemadura de espesor parcial en el pie"},
            {"letter": "c", "text": "Una quemadura de segundo grado en el antebrazo"},
            {"letter": "d", "text": "Una quemadura de primer grado en el abdomen"}
        ],
        "correctAnswer": "b",
        "explanation": "Las quemaduras en áreas funcionales críticas como las manos, los pies, la cara, los genitales o sobre articulaciones importantes se consideran graves. Una quemadura en el pie puede provocar una discapacidad significativa y complicaciones a largo plazo, por lo que requiere atención especializada."
    },
    {
        "question": "El manejo de una herida cerrada con un hematoma significativo en el muslo incluye la aplicación de RICES. ¿Qué componente de RICES ayuda a reducir la inflamación y el sangrado?",
        "options": [
            {"letter": "a", "text": "Reposo (Rest)"},
            {"letter": "b", "text": "Hielo (Ice) y Compresión (Compression)"},
            {"letter": "c", "text": "Elevación (Elevation)"},
            {"letter": "d", "text": "Inmovilización (Splinting)"}
        ],
        "correctAnswer": "b",
        "explanation": "La aplicación de hielo (crioterapia) causa vasoconstricción, lo que disminuye el flujo sanguíneo a la zona y reduce tanto el sangrado como la hinchazón. La compresión con un vendaje elástico ayuda a limitar la acumulación de sangre y líquido en los tejidos."
    },
    {
        "question": "Una laceración se diferencia de una incisión en que la laceración:",
        "options": [
            {"letter": "a", "text": "Es un corte de bordes lisos y regulares"},
            {"letter": "b", "text": "Implica una pérdida de tejido superficial"},
            {"letter": "c", "text": "Es un corte irregular y dentado"},
            {"letter": "d", "text": "Nunca sangra profusamente"}
        ],
        "correctAnswer": "c",
        "explanation": "Por definición, una laceración es un desgarro del tejido blando que produce una herida con bordes irregulares o aserrados, a menudo causada por un traumatismo contuso. Una incisión es un corte limpio con bordes lisos, típicamente hecho por un objeto afilado como un cuchillo o un bisturí."
    }
]